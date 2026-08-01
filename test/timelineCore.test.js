// @ts-nocheck
'use strict';

const assert = require('node:assert/strict');
const {
    buildTimeline,
    distanceMeters,
    findKnownPlace,
    getLocalDayBounds,
    normalizeHistory,
    parsePosition,
    removeGpsOutliers,
} = require('../widgets/mapwidgets/js/timelineCore.js');

describe('timeline core', () => {
    it('parses only combined latitude,longitude values in valid ranges', () => {
        assert.deepEqual(parsePosition('50.11552,8.68417'), { lat: 50.11552, lon: 8.68417 });
        assert.deepEqual(parsePosition(' 0 , 0 '), { lat: 0, lon: 0 });
        assert.equal(parsePosition('50.1'), null);
        assert.equal(parsePosition('91,8'), null);
        assert.equal(parsePosition('text,8'), null);
    });

    it('sorts raw history, retains stationary samples and removes exact duplicates', () => {
        const result = normalizeHistory([
            { val: '50,8', ts: 2000 },
            { val: '50,8', ts: 1000 },
            { val: 'invalid', ts: 1500 },
            { val: '50,8', ts: 1000 },
        ]);
        assert.deepEqual(
            result.map(point => point.ts),
            [1000, 2000],
        );
    });

    it('calculates geographic distances', () => {
        const distance = distanceMeters({ lat: 50, lon: 8 }, { lat: 50.001, lon: 8 });
        assert.ok(distance > 110 && distance < 112);
    });

    it('removes a single implausible GPS jump but retains the surrounding route', () => {
        const points = [
            { lat: 50, lon: 8, ts: 0 },
            { lat: 55, lon: 13, ts: 60000 },
            { lat: 50.001, lon: 8, ts: 120000 },
        ];
        assert.deepEqual(removeGpsOutliers(points, 300), [points[0], points[2]]);
    });

    it('builds alternating stay and movement segments', () => {
        const points = [
            { lat: 50, lon: 8, ts: 0 },
            { lat: 50, lon: 8.00001, ts: 5 * 60000 },
            { lat: 50, lon: 8, ts: 15 * 60000 },
            { lat: 50.01, lon: 8.01, ts: 25 * 60000 },
            { lat: 50.02, lon: 8.02, ts: 35 * 60000 },
        ];
        const segments = buildTimeline(points, { stayRadiusM: 75, minStayMinutes: 10 });
        assert.equal(segments[0].type, 'stay');
        assert.equal(segments[0].durationMs, 15 * 60000);
        assert.equal(segments[1].type, 'move');
        assert.ok(segments[1].distanceM > 1000);
    });

    it('uses the nearest matching known place and respects person scope', () => {
        const places = [
            { id: 'global', lat: 50, lon: 8, radius: 100 },
            { id: 'private', personId: 'alice', lat: 50, lon: 8.00001, radius: 100 },
        ];
        assert.equal(findKnownPlace({ lat: 50, lon: 8.00001 }, places, 'alice').id, 'private');
        assert.equal(findKnownPlace({ lat: 50, lon: 8.00001 }, places, 'bob').id, 'global');
    });

    it('creates local calendar-day bounds', () => {
        const date = new Date(2026, 6, 31, 15, 30);
        const bounds = getLocalDayBounds(date);
        assert.equal(new Date(bounds.start).getHours(), 0);
        assert.equal(new Date(bounds.end).getDate(), 31);
        assert.equal(new Date(bounds.end).getHours(), 23);
    });
});
