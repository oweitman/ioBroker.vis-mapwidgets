'use strict';

/* eslint-disable jsdoc/require-jsdoc, jsdoc/check-tag-names */

function parsePosition(value) {
    if (typeof value !== 'string' && typeof value !== 'number') {
        return null;
    }

    const parts = String(value)
        .trim()
        .split(',')
        .map(part => Number(part.trim()));
    if (parts.length !== 2 || !Number.isFinite(parts[0]) || !Number.isFinite(parts[1])) {
        return null;
    }
    if (parts[0] < -90 || parts[0] > 90 || parts[1] < -180 || parts[1] > 180) {
        return null;
    }

    return { lat: parts[0], lon: parts[1] };
}

function normalizeHistory(values) {
    /** @type {Array<{lat: number, lon: number, ts: number}>} */
    const points = [];
    for (const item of Array.isArray(values) ? values : []) {
        const position = parsePosition(item?.val);
        const ts = Number(item?.ts);
        if (position && Number.isFinite(ts)) {
            points.push({ ...position, ts });
        }
    }
    points.sort((a, b) => a.ts - b.ts);

    return points.filter(
        (point, index) =>
            index === 0 ||
            point.ts !== points[index - 1].ts ||
            point.lat !== points[index - 1].lat ||
            point.lon !== points[index - 1].lon,
    );
}

function distanceMeters(a, b) {
    const radius = 6371000;
    const toRadians = value => (value * Math.PI) / 180;
    const lat1 = toRadians(a.lat);
    const lat2 = toRadians(b.lat);
    const deltaLat = lat2 - lat1;
    const deltaLon = toRadians(b.lon - a.lon);
    const value = Math.sin(deltaLat / 2) ** 2 + Math.cos(lat1) * Math.cos(lat2) * Math.sin(deltaLon / 2) ** 2;
    return radius * 2 * Math.atan2(Math.sqrt(value), Math.sqrt(1 - value));
}

function speedKmh(a, b) {
    const hours = (b.ts - a.ts) / 3600000;
    return hours > 0 ? distanceMeters(a, b) / 1000 / hours : Number.POSITIVE_INFINITY;
}

function removeGpsOutliers(points, maxReasonableSpeedKmh = 300) {
    if (!maxReasonableSpeedKmh || points.length < 3) {
        return [...points];
    }

    return points.filter((point, index) => {
        if (index === 0 || index === points.length - 1) {
            return true;
        }
        const previous = points[index - 1];
        const next = points[index + 1];
        const isJump =
            speedKmh(previous, point) > maxReasonableSpeedKmh && speedKmh(point, next) > maxReasonableSpeedKmh;
        const directIsReasonable = speedKmh(previous, next) <= maxReasonableSpeedKmh;
        return !(isJump && directIsReasonable);
    });
}

function centroid(points) {
    const sum = points.reduce((result, point) => ({ lat: result.lat + point.lat, lon: result.lon + point.lon }), {
        lat: 0,
        lon: 0,
    });
    return { lat: sum.lat / points.length, lon: sum.lon / points.length };
}

function totalDistance(points) {
    let distance = 0;
    for (let index = 1; index < points.length; index++) {
        distance += distanceMeters(points[index - 1], points[index]);
    }
    return distance;
}

function detectStays(points, stayRadiusM = 75, minStayMinutes = 10) {
    const stays = [];
    const minDuration = minStayMinutes * 60000;
    let startIndex = 0;

    while (startIndex < points.length - 1) {
        let endIndex = startIndex + 1;
        let lastInside = startIndex;
        let center = { lat: points[startIndex].lat, lon: points[startIndex].lon };

        while (endIndex < points.length) {
            if (distanceMeters(center, points[endIndex]) > stayRadiusM) {
                break;
            }
            lastInside = endIndex;
            center = centroid(points.slice(startIndex, lastInside + 1));
            endIndex++;
        }

        const boundaryIndex = endIndex < points.length ? endIndex : lastInside;
        if (lastInside > startIndex && points[boundaryIndex].ts - points[startIndex].ts >= minDuration) {
            const stayPoints = points.slice(startIndex, lastInside + 1);
            stays.push({
                type: 'stay',
                startIndex,
                endIndex: boundaryIndex,
                startTs: points[startIndex].ts,
                endTs: points[boundaryIndex].ts,
                durationMs: points[boundaryIndex].ts - points[startIndex].ts,
                ...centroid(stayPoints),
                points: stayPoints,
            });
            startIndex = lastInside + 1;
        } else {
            startIndex++;
        }
    }

    return stays;
}

function detectKnownPlaceStays(points, places, personId) {
    const stays = [];
    let startIndex = 0;

    while (startIndex < points.length) {
        const place = findKnownPlace(points[startIndex], places, personId);
        if (!place) {
            startIndex++;
            continue;
        }

        let lastInside = startIndex;
        while (lastInside + 1 < points.length) {
            const nextPlace = findKnownPlace(points[lastInside + 1], places, personId);
            if (nextPlace?.id !== place.id) {
                break;
            }
            lastInside++;
        }

        // At departure the first point outside a known zone is the first evidence
        // that the person has left it. Attribute an initial history gap to the
        // known place instead of reporting it as movement.
        const boundaryIndex = lastInside + 1 < points.length ? lastInside + 1 : lastInside;
        const stayPoints = points.slice(startIndex, lastInside + 1);
        stays.push({
            type: 'stay',
            startIndex,
            endIndex: boundaryIndex,
            startTs: points[startIndex].ts,
            endTs: points[boundaryIndex].ts,
            durationMs: points[boundaryIndex].ts - points[startIndex].ts,
            lat: Number(place.lat),
            lon: Number(place.lon),
            points: stayPoints,
            knownPlace: place,
        });
        startIndex = boundaryIndex + 1;
    }

    return stays;
}

function buildTimeline(points, options = {}) {
    if (!points.length) {
        return [];
    }

    const knownPlaceStays = detectKnownPlaceStays(points, options.knownPlaces, options.personId);
    const occupiedIndexes = new Set(
        knownPlaceStays.flatMap(stay =>
            Array.from({ length: stay.endIndex - stay.startIndex + 1 }, (_, index) => stay.startIndex + index),
        ),
    );
    const detectedStays = detectStays(points, options.stayRadiusM, options.minStayMinutes).filter(
        stay =>
            !Array.from({ length: stay.endIndex - stay.startIndex + 1 }, (_, index) => stay.startIndex + index).some(
                index => occupiedIndexes.has(index),
            ),
    );
    const stays = [...knownPlaceStays, ...detectedStays].sort((a, b) => a.startIndex - b.startIndex);
    const segments = [];
    let movementStart = 0;

    for (const stay of stays) {
        if (stay.startIndex > movementStart) {
            const movementPoints = points.slice(movementStart, stay.startIndex + 1);
            segments.push({
                type: 'move',
                startTs: movementPoints[0].ts,
                endTs: movementPoints.at(-1).ts,
                durationMs: movementPoints.at(-1).ts - movementPoints[0].ts,
                distanceM: totalDistance(movementPoints),
                points: movementPoints,
            });
        }
        segments.push(stay);
        movementStart = stay.endIndex;
    }

    if (movementStart < points.length - 1 || !stays.length) {
        const movementPoints = points.slice(movementStart);
        segments.push({
            type: 'move',
            startTs: movementPoints[0].ts,
            endTs: movementPoints.at(-1).ts,
            durationMs: movementPoints.at(-1).ts - movementPoints[0].ts,
            distanceM: totalDistance(movementPoints),
            points: movementPoints,
        });
    }

    return segments.filter(segment => segment.type === 'stay' || segment.points.length > 1);
}

function findKnownPlace(position, places, personId) {
    return (Array.isArray(places) ? places : [])
        .filter(place => !place.deleted && (!place.personId || place.personId === personId))
        .map(place => ({ place, distance: distanceMeters(position, place) }))
        .filter(match => match.distance <= (Number(match.place.radius) || 100))
        .sort((a, b) => a.distance - b.distance)[0]?.place;
}

function getLocalDayBounds(date) {
    const start = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    const end = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1);
    return { start: start.getTime(), end: end.getTime() - 1 };
}

module.exports = {
    buildTimeline,
    detectKnownPlaceStays,
    detectStays,
    distanceMeters,
    findKnownPlace,
    getLocalDayBounds,
    normalizeHistory,
    parsePosition,
    removeGpsOutliers,
    totalDistance,
};
