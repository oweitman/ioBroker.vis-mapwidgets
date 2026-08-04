'use strict';

/* global _, vis, window, document, L */

const {
    buildTimeline,
    findKnownPlace,
    getLocalDayBounds,
    normalizeHistory,
    parsePosition,
    removeGpsOutliers,
} = require('./timelineCore.js');

const PLACES_ID = 'vis-mapwidgets.0.timeline.places';
const CACHE_ID = 'vis-mapwidgets.0.timeline.geocodingCache';
const DEFAULT_COLORS = ['#1a73e8', '#d93025', '#188038', '#a142f4', '#f9ab00'];
function translate(text) {
    return typeof _ === 'function' ? _(text) : text;
}

function dateStorageKey(widgetID) {
    return `mapwidgets.timeline.date.${widgetID}`;
}

function readStoredDate(widgetID) {
    const value = window.localStorage?.getItem(dateStorageKey(widgetID));
    if (!/^\d{4}-\d{2}-\d{2}$/.test(value || '')) {
        return new Date();
    }
    const [year, month, day] = value.split('-').map(Number);
    const date = new Date(year, month - 1, day);
    return Number.isNaN(date.getTime()) ? new Date() : date;
}

function storeSelectedDate(runtime) {
    const year = runtime.date.getFullYear();
    const month = String(runtime.date.getMonth() + 1).padStart(2, '0');
    const day = String(runtime.date.getDate()).padStart(2, '0');
    window.localStorage?.setItem(dateStorageKey(runtime.widgetID), `${year}-${month}-${day}`);
}

function selectDate(runtime, date) {
    runtime.date = date;
    storeSelectedDate(runtime);
    loadDay(runtime);
}

function escapeHtml(value) {
    return String(value ?? '')
        .replaceAll('&', '&amp;')
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;')
        .replaceAll('"', '&quot;')
        .replaceAll("'", '&#039;');
}

function parseJsonState(rawValue, fallback) {
    try {
        const value = JSON.parse(rawValue || '');
        return value && typeof value === 'object' ? value : fallback;
    } catch {
        return fallback;
    }
}

function stateValue(id) {
    return vis.states.attr(`${id}.val`);
}

function formatTime(timestamp) {
    return new Intl.DateTimeFormat(undefined, { hour: '2-digit', minute: '2-digit' }).format(timestamp);
}

function formatDuration(durationMs) {
    const minutes = Math.max(0, Math.round(durationMs / 60000));
    if (minutes < 60) {
        return `${minutes} ${translate('min')}`;
    }
    const hours = Math.floor(minutes / 60);
    const remainder = minutes % 60;
    return remainder ? `${hours} ${translate('h')} ${remainder} ${translate('min')}` : `${hours} ${translate('h')}`;
}

function formatDistance(distanceM) {
    return distanceM < 1000
        ? `${Math.round(distanceM)} m`
        : `${(distanceM / 1000).toLocaleString(undefined, { maximumFractionDigits: 1 })} km`;
}

function formatPlace(place, fallback) {
    const label = String(place?.label || fallback || '').trim();
    const address = place?.address || {};
    const houseNumber = String(address.housenumber || '').trim();
    const addressName = String(address.name || '').trim();
    const rawName = String(
        place?.name ||
            (addressName && addressName !== houseNumber && !/^\d+[a-z]?$/i.test(addressName) ? addressName : ''),
    ).trim();
    const name = houseNumber
        ? rawName.replace(new RegExp(`(?:,|\\s)\\s*${houseNumber.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}$`), '').trim()
        : rawName;
    const street = String(address.street || address.road || '').trim();
    const locality = String(
        address.city || address.town || address.village || address.municipality || address.locality || '',
    ).trim();
    const country = String(address.country || '').trim();
    const structuredAddress = [[street, houseNumber].filter(Boolean).join(' '), locality, country]
        .filter(Boolean)
        .join(', ');
    if (structuredAddress && !name) {
        return { name: translate('Unknown place'), address: structuredAddress };
    }
    if (name) {
        const fallbackAddress = label.startsWith(`${rawName},`)
            ? label.slice(rawName.length + 1).trim()
            : label === rawName
              ? ''
              : label;
        return { name, address: structuredAddress || fallbackAddress };
    }
    const [first, ...rest] = label.split(',').map(part => part.trim());
    return { name: first || fallback || '', address: rest.join(', ') };
}

function placeMarkup(place, fallback, className) {
    const display = formatPlace(place, fallback);
    return `<span class="${className}"><strong>${escapeHtml(display.name)}</strong>${
        display.address ? `<small>${escapeHtml(display.address)}</small>` : ''
    }</span>`;
}

function cachedPlaceFromKnownPlace(place, segment) {
    const now = Date.now();
    const address = place?.address || {};
    const display = formatPlace({ address, label: place?.geocodingLabel }, translate('Unknown place'));
    return {
        status: Object.keys(address).length ? 'resolved' : 'unknown',
        label:
            place?.geocodingLabel ||
            address.label ||
            [display.name === translate('Unknown place') ? '' : display.name, display.address]
                .filter(Boolean)
                .join(', ') ||
            translate('Unknown place'),
        address,
        lat: segment.lat,
        lon: segment.lon,
        created: Number(place?.created) || now,
        updated: now,
        lastUsed: now,
    };
}

function bearing(from, to) {
    const fromLat = (from.lat * Math.PI) / 180;
    const toLat = (to.lat * Math.PI) / 180;
    const deltaLon = ((to.lon - from.lon) * Math.PI) / 180;
    const y = Math.sin(deltaLon) * Math.cos(toLat);
    const x = Math.cos(fromLat) * Math.sin(toLat) - Math.sin(fromLat) * Math.cos(toLat) * Math.cos(deltaLon);
    return (Math.atan2(y, x) * 180) / Math.PI;
}

function isToday(date) {
    const now = new Date();
    return (
        date.getFullYear() === now.getFullYear() &&
        date.getMonth() === now.getMonth() &&
        date.getDate() === now.getDate()
    );
}

function readPeople(data) {
    const people = [];
    for (let index = 1; index <= 5; index++) {
        const oid = String(data[`timeline_oid${index}`] || '').trim();
        if (!oid) {
            continue;
        }
        people.push({
            id: oid,
            oid,
            name: String(data[`timeline_name${index}`] || '').trim() || `${translate('Person')} ${index}`,
            color: String(data[`timeline_color${index}`] || '').trim() || DEFAULT_COLORS[index - 1],
        });
    }
    return people;
}

function openDatabase() {
    if (!window.indexedDB) {
        return Promise.resolve(null);
    }
    return new Promise(resolve => {
        const request = window.indexedDB.open('vis-mapwidgets-timeline', 1);
        request.onupgradeneeded = () => {
            if (!request.result.objectStoreNames.contains('data')) {
                request.result.createObjectStore('data');
            }
        };
        request.onsuccess = () => resolve(request.result);
        request.onerror = () => resolve(null);
    });
}

async function indexedDbGet(key, fallback) {
    const database = await openDatabase();
    if (!database) {
        return fallback;
    }
    return new Promise(resolve => {
        const request = database.transaction('data', 'readonly').objectStore('data').get(key);
        request.onsuccess = () => resolve(request.result || fallback);
        request.onerror = () => resolve(fallback);
    });
}

async function indexedDbSet(key, value) {
    const database = await openDatabase();
    if (!database) {
        return;
    }
    await new Promise(resolve => {
        const transaction = database.transaction('data', 'readwrite');
        transaction.objectStore('data').put(value, key);
        transaction.oncomplete = resolve;
        transaction.onerror = resolve;
    });
}

function mergePlaces(localPlaces, remotePlaces) {
    const entries = new Map();
    for (const place of [...localPlaces, ...remotePlaces]) {
        if (!place?.id) {
            continue;
        }
        const current = entries.get(place.id);
        if (!current || Number(place.updated || 0) >= Number(current.updated || 0)) {
            entries.set(place.id, place);
        }
    }
    return [...entries.values()];
}

function mergeCaches(localCache, remoteCache) {
    const merged = { version: 1, entries: { ...(localCache?.entries || {}) } };
    for (const [key, entry] of Object.entries(remoteCache?.entries || {})) {
        const current = merged.entries[key];
        if (
            !current ||
            Number(entry.updated || entry.created || 0) >= Number(current.updated || current.created || 0)
        ) {
            merged.entries[key] = entry;
        }
    }
    const keys = Object.keys(merged.entries);
    if (keys.length > 2000) {
        keys.sort((a, b) => Number(merged.entries[b].lastUsed || 0) - Number(merged.entries[a].lastUsed || 0));
        for (const key of keys.slice(2000)) {
            delete merged.entries[key];
        }
    }
    return merged;
}

function queueStateWrite(runtime, type) {
    clearTimeout(runtime.writeTimers[type]);
    runtime.writeTimers[type] = setTimeout(() => {
        const id = type === 'places' ? PLACES_ID : CACHE_ID;
        const localValue = type === 'places' ? { version: 1, entries: runtime.places } : runtime.cache;
        const remote = parseJsonState(stateValue(id), type === 'places' ? { entries: [] } : { entries: {} });
        const merged =
            type === 'places'
                ? { version: 1, entries: mergePlaces(localValue.entries, remote.entries || []) }
                : mergeCaches(localValue, remote);
        if (type === 'places') {
            runtime.places = merged.entries;
        } else {
            runtime.cache = merged;
        }
        indexedDbSet(type, merged);
        vis.setValue(id, JSON.stringify(merged));
    }, 1500);
}

class NominatimQueue {
    constructor() {
        this.jobs = [];
        this.pending = new Map();
        this.running = false;
        this.lastRequest = 0;
    }

    enqueue(key, options) {
        if (this.pending.has(key)) {
            return this.pending.get(key);
        }
        const promise = new Promise((resolve, reject) => this.jobs.push({ key, options, resolve, reject }));
        this.pending.set(key, promise);
        this.run();
        return promise;
    }

    async run() {
        if (this.running) {
            return;
        }
        this.running = true;
        while (this.jobs.length) {
            const job = this.jobs.shift();
            try {
                if (job.options.isCurrent && !job.options.isCurrent()) {
                    job.resolve(null);
                    continue;
                }
                const waitMs = Math.max(0, 1100 - (Date.now() - this.lastRequest));
                if (waitMs) {
                    await new Promise(resolve => setTimeout(resolve, waitMs));
                }
                const sharedNextRequest = Number(
                    window.localStorage?.getItem('mapwidgets.timeline.nominatimNext') || 0,
                );
                if (sharedNextRequest > Date.now()) {
                    await new Promise(resolve => setTimeout(resolve, sharedNextRequest - Date.now()));
                }
                if (job.options.isCurrent && !job.options.isCurrent()) {
                    job.resolve(null);
                    continue;
                }
                this.lastRequest = Date.now();
                window.localStorage?.setItem('mapwidgets.timeline.nominatimNext', String(this.lastRequest + 1100));
                const url = new URL(job.options.endpoint || 'https://nominatim.openstreetmap.org/reverse');
                url.searchParams.set('format', 'geocodejson');
                url.searchParams.set('lat', job.options.lat);
                url.searchParams.set('lon', job.options.lon);
                url.searchParams.set('accept-language', job.options.language || navigator.language || 'de');
                if (job.options.email) {
                    url.searchParams.set('email', job.options.email);
                }
                const response = await fetch(url, { headers: { Accept: 'application/json' } });
                if (!response.ok) {
                    throw new Error(`HTTP ${response.status}`);
                }
                const json = await response.json();
                const geocoding = json?.features?.[0]?.properties?.geocoding;
                job.resolve({
                    status: geocoding?.label ? 'resolved' : 'unknown',
                    label: geocoding?.label || translate('Unknown place'),
                    address: geocoding || {},
                });
            } catch (error) {
                job.reject(error);
            } finally {
                this.pending.delete(job.key);
            }
        }
        this.running = false;
    }
}

const nominatimQueue = new NominatimQueue();

function cacheKey(runtime, position) {
    const language = runtime.options.language || navigator.language || 'de';
    return `nominatim|${language}|${position.lat.toFixed(4)}|${position.lon.toFixed(4)}`;
}

async function resolveStay(runtime, person, segment, loadId) {
    const knownPlace = segment.knownPlace || findKnownPlace(segment, runtime.places, person.id);
    if (knownPlace) {
        segment.place = { ...knownPlace, source: 'known' };
        return;
    }

    const key = cacheKey(runtime, segment);
    const cached = runtime.cache.entries[key];
    const negativeExpired = cached?.status !== 'resolved' && Date.now() - Number(cached?.created || 0) > 604800000;
    if (cached && !negativeExpired) {
        cached.lastUsed = Date.now();
        segment.place = { ...cached, source: 'cache' };
        return;
    }
    if (!runtime.options.geocodingEnabled || loadId !== runtime.loadId) {
        segment.place = { label: translate('Unknown place'), source: 'unknown' };
        return;
    }

    try {
        const result = await nominatimQueue.enqueue(key, {
            endpoint: runtime.options.endpoint,
            email: runtime.options.email,
            language: runtime.options.language,
            lat: segment.lat,
            lon: segment.lon,
            isCurrent: () => loadId === runtime.loadId,
        });
        if (!result || loadId !== runtime.loadId) {
            return;
        }
        const entry = {
            ...result,
            lat: segment.lat,
            lon: segment.lon,
            created: Date.now(),
            updated: Date.now(),
            lastUsed: Date.now(),
        };
        runtime.cache.entries[key] = entry;
        segment.place = { ...entry, source: 'nominatim' };
        indexedDbSet('cache', runtime.cache);
        queueStateWrite(runtime, 'cache');
    } catch (error) {
        segment.place = { label: `${translate('Unknown place')} (${error.message})`, source: 'error' };
    }
}

function getHistory(oid, date) {
    const bounds = getLocalDayBounds(date);
    return new Promise((resolve, reject) => {
        vis.getHistory(
            oid,
            {
                instance: 'history.0',
                start: bounds.start,
                end: bounds.end,
                aggregate: 'none',
                limit: 10000,
                ignoreNull: true,
                addId: false,
            },
            (error, values) => (error ? reject(error) : resolve(Array.isArray(values) ? values : [])),
        );
    });
}

function renderShell(runtime) {
    runtime.root.classList.remove(
        'mapwidgets-timeline-layout-auto',
        'mapwidgets-timeline-layout-side',
        'mapwidgets-timeline-layout-below',
        'is-timeline-narrow',
    );
    runtime.root.classList.add(`mapwidgets-timeline-layout-${runtime.options.layout}`);
    applyTheme(runtime);
    runtime.root.innerHTML = `
        <div class="mapwidgets-timeline-header">
            <button type="button" class="mapwidgets-timeline-nav" data-action="previous" aria-label="${escapeHtml(translate('Previous day'))}">‹</button>
            <button type="button" class="mapwidgets-timeline-date" data-action="calendar"></button>
            <input class="mapwidgets-timeline-date-input" type="date" aria-label="${escapeHtml(translate('Select date'))}">
            <button type="button" class="mapwidgets-timeline-nav" data-action="next" aria-label="${escapeHtml(translate('Next day'))}">›</button>
            <button type="button" class="mapwidgets-timeline-today" data-action="today">${escapeHtml(translate('Today'))}</button>
        </div>
        <div class="mapwidgets-timeline-people"></div>
        <div class="mapwidgets-timeline-layout">
            <div class="mapwidgets-timeline-map-wrap">
                <div class="mapwidgets-timeline-map"></div>
                <button type="button" class="mapwidgets-timeline-fit" data-action="fit" title="${escapeHtml(translate('Show complete route'))}">⌖</button>
            </div>
            <div class="mapwidgets-timeline-list" aria-live="polite"></div>
        </div>
        <div class="mapwidgets-timeline-dialog-backdrop" hidden>
            <form class="mapwidgets-timeline-dialog" aria-modal="true" role="dialog">
                <h3>${escapeHtml(translate('Save as known place'))}</h3>
                <label>${escapeHtml(translate('Name of the known place'))}
                    <input name="placeName" type="text" required>
                </label>
                <label>${escapeHtml(translate('Radius in meters'))}
                    <input name="placeRadius" type="number" min="1" step="1" value="100" required>
                </label>
                <div class="mapwidgets-timeline-dialog-address" aria-label="${escapeHtml(translate('Address'))}">
                    <span>${escapeHtml(translate('Street'))}</span><strong data-place-address="street"></strong>
                    <span>${escapeHtml(translate('House number'))}</span><strong data-place-address="housenumber"></strong>
                    <span>${escapeHtml(translate('City'))}</span><strong data-place-address="city"></strong>
                    <span>${escapeHtml(translate('Country'))}</span><strong data-place-address="country"></strong>
                </div>
                <div class="mapwidgets-timeline-dialog-actions">
                    <button type="button" class="mapwidgets-timeline-delete" data-action="delete-place" hidden>${escapeHtml(translate('Remove known place'))}</button>
                    <button type="button" data-action="cancel-place">${escapeHtml(translate('Cancel'))}</button>
                    <button type="button" data-action="commit-place">${escapeHtml(translate('Save'))}</button>
                </div>
            </form>
        </div>`;

    runtime.clickHandler = event => handleClick(runtime, event);
    runtime.dateHandler = event => {
        if (event.target.value) {
            const [year, month, day] = event.target.value.split('-').map(Number);
            selectDate(runtime, new Date(year, month - 1, day));
        }
    };
    runtime.root.addEventListener('click', runtime.clickHandler);
    runtime.submitHandler = event => {
        if (event.target.matches('.mapwidgets-timeline-dialog')) {
            event.preventDefault();
            commitKnownPlace(runtime);
        }
    };
    runtime.root.addEventListener('submit', runtime.submitHandler);
    runtime.root.querySelector('.mapwidgets-timeline-date-input').addEventListener('change', runtime.dateHandler);
}

function applyTheme(runtime) {
    const dark =
        runtime.options.theme === 'dark' ||
        (runtime.options.theme === 'auto' && window.matchMedia?.('(prefers-color-scheme: dark)').matches);
    runtime.root.classList.toggle('mapwidgets-timeline-theme-dark', dark);
    runtime.root.classList.toggle('mapwidgets-timeline-theme-light', !dark);
}

function renderHeader(runtime) {
    const formatter = new Intl.DateTimeFormat(undefined, {
        weekday: 'short',
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
    });
    runtime.root.querySelector('.mapwidgets-timeline-date').textContent = formatter.format(runtime.date);
    runtime.root.querySelector('.mapwidgets-timeline-today').hidden = isToday(runtime.date);
    const dateInput = runtime.root.querySelector('.mapwidgets-timeline-date-input');
    const localDate = new Date(runtime.date.getTime() - runtime.date.getTimezoneOffset() * 60000);
    dateInput.value = localDate.toISOString().slice(0, 10);
}

function renderPeople(runtime) {
    const container = runtime.root.querySelector('.mapwidgets-timeline-people');
    container.innerHTML = runtime.people
        .map(
            person => `<button type="button" class="mapwidgets-timeline-person${person.id === runtime.selectedPersonId ? ' is-active' : ''}"
                data-person-id="${escapeHtml(person.id)}" style="--person-color:${escapeHtml(person.color)}">
                <span></span>${escapeHtml(person.name)}</button>`,
        )
        .join('');
}

function createMap(runtime) {
    const element = runtime.root.querySelector('.mapwidgets-timeline-map');
    runtime.map = L.map(element).setView([50.11552, 8.68417], 13);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(runtime.map);
    runtime.layers = L.featureGroup().addTo(runtime.map);
}

function scrollToSegment(runtime, index) {
    runtime.root
        .querySelector(`[data-segment-index="${index}"]`)
        ?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    selectSegment(runtime, index);
}

function addDirectionArrows(runtime, segment, index, color) {
    const points = segment.points || [];
    const arrowCount = points.length > 5 ? 2 : 1;
    for (let arrowIndex = 1; arrowIndex <= arrowCount; arrowIndex++) {
        const pointIndex = Math.min(
            points.length - 1,
            Math.max(1, Math.round((arrowIndex * (points.length - 1)) / (arrowCount + 1))),
        );
        const point = points[pointIndex];
        const previous = points[pointIndex - 1];
        const icon = L.divIcon({
            className: 'mapwidgets-timeline-direction-icon',
            html: `<span style="--direction:${bearing(previous, point)}deg;--person-color:${escapeHtml(color)}">➤</span>`,
            iconSize: [20, 20],
            iconAnchor: [10, 10],
        });
        L.marker([point.lat, point.lon], { icon, interactive: true })
            .addTo(runtime.layers)
            .on('click', () => scrollToSegment(runtime, index));
    }
}

function renderMap(runtime) {
    runtime.layers.clearLayers();
    const selected = runtime.results.get(runtime.selectedPersonId);
    if (!selected) {
        return;
    }
    const person = runtime.people.find(item => item.id === runtime.selectedPersonId);
    selected.segments.forEach((segment, index) => {
        if (segment.type === 'move' && segment.points.length > 1) {
            L.polyline(
                segment.points.map(point => [point.lat, point.lon]),
                { color: person.color, weight: 6, opacity: 0.85 },
            )
                .addTo(runtime.layers)
                .on('click', () => scrollToSegment(runtime, index));
            addDirectionArrows(runtime, segment, index, person.color);
            return;
        }
        if (segment.type !== 'stay') {
            return;
        }
        const marker = L.circleMarker([segment.lat, segment.lon], {
            radius: 8,
            color: '#fff',
            weight: 2,
            fillColor: person.color,
            fillOpacity: 1,
        }).addTo(runtime.layers);
        marker.bindTooltip(placeMarkup(segment.place, translate('Resolving place...'), 'mapwidgets-timeline-tooltip'));
        marker.on('click', () => scrollToSegment(runtime, index));
        segment.marker = marker;
    });
    if (selected.currentOnly) {
        const point = selected.points[0];
        L.marker([point.lat, point.lon]).addTo(runtime.layers).bindPopup(translate('Current position'));
    }
    fitMap(runtime);
}

function fitMap(runtime) {
    const bounds = runtime.layers.getBounds();
    if (bounds.isValid()) {
        runtime.map.fitBounds(bounds, { padding: [24, 24], maxZoom: 16 });
    }
}

function renderTimeline(runtime, status) {
    const list = runtime.root.querySelector('.mapwidgets-timeline-list');
    if (status) {
        list.innerHTML = `<div class="mapwidgets-timeline-status">${escapeHtml(status)}</div>`;
        return;
    }
    const selected = runtime.results.get(runtime.selectedPersonId);
    if (selected?.currentOnly) {
        list.innerHTML = `<div class="mapwidgets-timeline-status">${escapeHtml(translate('No history data. Showing current position.'))}</div>`;
        return;
    }
    if (selected?.historyError && !selected.points.length) {
        list.innerHTML = `<div class="mapwidgets-timeline-status">${escapeHtml(`${translate('History could not be loaded')}: ${selected.historyError.message || selected.historyError}`)}</div>`;
        return;
    }
    if (!selected?.segments.length) {
        list.innerHTML = `<div class="mapwidgets-timeline-status">${escapeHtml(translate('No history data for this day'))}</div>`;
        return;
    }
    list.innerHTML = selected.segments
        .map((segment, index) => {
            if (segment.type === 'move') {
                return `<button type="button" class="mapwidgets-timeline-entry is-move" data-segment-index="${index}">
                    <span class="mapwidgets-timeline-time">${formatTime(segment.startTs)}</span>
                    <span class="mapwidgets-timeline-spine"><i></i></span>
                    <span class="mapwidgets-timeline-content"><strong>${escapeHtml(translate('On the move'))}</strong>
                    <small>${formatDuration(segment.durationMs)} · ${formatDistance(segment.distanceM)}</small></span></button>`;
            }
            const place = placeMarkup(segment.place, translate('Resolving place...'), 'mapwidgets-timeline-place');
            return `<div class="mapwidgets-timeline-entry is-stay" data-segment-index="${index}">
                <span class="mapwidgets-timeline-time">${formatTime(segment.startTs)}</span>
                <span class="mapwidgets-timeline-spine"><i style="--person-color:${escapeHtml(runtime.people.find(person => person.id === runtime.selectedPersonId)?.color)}"></i></span>
                <button type="button" class="mapwidgets-timeline-content" data-action="select-segment">
                    ${place}
                    <small>${formatTime(segment.startTs)}–${formatTime(segment.endTs)} · ${formatDuration(segment.durationMs)}</small>
                </button>
                <button type="button" class="mapwidgets-timeline-menu${segment.place?.source === 'known' ? ' is-known' : ''}" data-action="save-place" title="${escapeHtml(translate(segment.place?.source === 'known' ? 'Edit known place' : 'Save as known place'))}" aria-label="${escapeHtml(translate(segment.place?.source === 'known' ? 'Edit known place' : 'Save as known place'))}" aria-pressed="${segment.place?.source === 'known'}">${segment.place?.source === 'known' ? '★' : '☆'}</button>
            </div>`;
        })
        .join('');
}

function selectSegment(runtime, index) {
    const selected = runtime.results.get(runtime.selectedPersonId);
    const segment = selected?.segments[index];
    runtime.root
        .querySelectorAll('.mapwidgets-timeline-entry')
        .forEach(element => element.classList.remove('is-selected'));
    runtime.root.querySelector(`[data-segment-index="${index}"]`)?.classList.add('is-selected');
    if (segment?.type === 'stay') {
        runtime.map.flyTo([segment.lat, segment.lon], Math.max(runtime.map.getZoom(), 16));
        segment.marker?.openTooltip();
    } else if (segment?.points?.length) {
        runtime.map.fitBounds(L.latLngBounds(segment.points.map(point => [point.lat, point.lon])), {
            padding: [32, 32],
            maxZoom: 16,
        });
    }
}

function openKnownPlaceDialog(runtime, index) {
    const selected = runtime.results.get(runtime.selectedPersonId);
    const segment = selected?.segments[index];
    if (!segment || segment.type !== 'stay') {
        return;
    }
    const backdrop = runtime.root.querySelector('.mapwidgets-timeline-dialog-backdrop');
    const nameInput = backdrop.querySelector('[name="placeName"]');
    const knownPlace = segment.place?.source === 'known' ? segment.place : null;
    const display = formatPlace(segment.place, translate('Known place'));
    const address = segment.place?.address || {};
    runtime.dialogSegmentIndex = index;
    runtime.dialogPlaceId = knownPlace?.id || null;
    nameInput.value = display.name;
    backdrop.querySelector('[name="placeRadius"]').value = String(knownPlace?.radius || 100);
    const addressValues = {
        street: address.street || address.road,
        housenumber: address.housenumber,
        city: address.city || address.town || address.village || address.municipality || address.locality,
        country: address.country,
    };
    for (const [field, value] of Object.entries(addressValues)) {
        backdrop.querySelector(`[data-place-address="${field}"]`).textContent = value || '–';
    }
    backdrop.querySelector('[data-action="delete-place"]').hidden = !knownPlace;
    backdrop.hidden = false;
    nameInput.focus();
    nameInput.select();
}

function closeKnownPlaceDialog(runtime) {
    runtime.root.querySelector('.mapwidgets-timeline-dialog-backdrop').hidden = true;
    runtime.dialogSegmentIndex = null;
    runtime.dialogPlaceId = null;
}

function commitKnownPlace(runtime) {
    const index = runtime.dialogSegmentIndex;
    const selected = runtime.results.get(runtime.selectedPersonId);
    const segment = selected?.segments[index];
    if (!segment || segment.type !== 'stay') {
        closeKnownPlaceDialog(runtime);
        return;
    }
    const dialog = runtime.root.querySelector('.mapwidgets-timeline-dialog');
    const name = dialog.elements.placeName.value.trim();
    const radius = Number(dialog.elements.placeRadius.value);
    if (!name || !Number.isFinite(radius) || radius <= 0) {
        dialog.reportValidity();
        return;
    }
    const now = Date.now();
    const existing = runtime.places.find(item => item.id === runtime.dialogPlaceId);
    const place = {
        ...(existing || {}),
        id: existing?.id || window.crypto?.randomUUID?.() || `place_${now}_${Math.random().toString(16).slice(2)}`,
        name,
        label: name,
        geocodingLabel: existing?.geocodingLabel || (segment.place?.source === 'known' ? '' : segment.place?.label),
        address: existing?.address || segment.place?.address || {},
        lat: segment.lat,
        lon: segment.lon,
        radius,
        created: existing?.created || now,
        updated: now,
    };
    if (existing) {
        runtime.places[runtime.places.indexOf(existing)] = place;
    } else {
        runtime.places.push(place);
    }
    closeKnownPlaceDialog(runtime);
    indexedDbSet('places', { version: 1, entries: runtime.places });
    queueStateWrite(runtime, 'places');
    for (const result of runtime.results.values()) {
        for (const item of result.segments) {
            if (item.type === 'stay') {
                const match = findKnownPlace(item, runtime.places, result.person.id);
                if (match) {
                    item.place = { ...match, source: 'known' };
                }
            }
        }
    }
    renderTimeline(runtime);
    renderMap(runtime);
}

function deleteKnownPlace(runtime) {
    const index = runtime.dialogSegmentIndex;
    const selected = runtime.results.get(runtime.selectedPersonId);
    const segment = selected?.segments[index];
    const place = runtime.places.find(item => item.id === runtime.dialogPlaceId);
    if (!segment || !place) {
        closeKnownPlaceDialog(runtime);
        return;
    }
    place.deleted = true;
    place.updated = Date.now();
    const key = cacheKey(runtime, segment);
    runtime.cache.entries[key] = cachedPlaceFromKnownPlace(place, segment);
    segment.place = { ...runtime.cache.entries[key], source: 'cache' };
    closeKnownPlaceDialog(runtime);
    indexedDbSet('places', { version: 1, entries: runtime.places });
    indexedDbSet('cache', runtime.cache);
    queueStateWrite(runtime, 'places');
    queueStateWrite(runtime, 'cache');
    renderTimeline(runtime);
    renderMap(runtime);
}

function handleClick(runtime, event) {
    const button = event.target.closest('button');
    if (!button) {
        return;
    }
    const personId = button.dataset.personId;
    if (personId) {
        runtime.selectedPersonId = personId;
        renderPeople(runtime);
        renderTimeline(runtime);
        renderMap(runtime);
        return;
    }
    const action = button.dataset.action;
    if (action === 'previous' || action === 'next') {
        selectDate(
            runtime,
            new Date(
                runtime.date.getFullYear(),
                runtime.date.getMonth(),
                runtime.date.getDate() + (action === 'next' ? 1 : -1),
            ),
        );
    } else if (action === 'today') {
        selectDate(runtime, new Date());
    } else if (action === 'calendar') {
        runtime.root.querySelector('.mapwidgets-timeline-date-input').showPicker?.();
        runtime.root.querySelector('.mapwidgets-timeline-date-input').focus();
    } else if (action === 'fit') {
        fitMap(runtime);
    } else if (action === 'select-segment') {
        selectSegment(runtime, Number(button.closest('[data-segment-index]').dataset.segmentIndex));
    } else if (action === 'save-place') {
        openKnownPlaceDialog(runtime, Number(button.closest('[data-segment-index]').dataset.segmentIndex));
    } else if (action === 'cancel-place') {
        closeKnownPlaceDialog(runtime);
    } else if (action === 'delete-place') {
        deleteKnownPlace(runtime);
    } else if (action === 'commit-place') {
        commitKnownPlace(runtime);
    } else if (button.dataset.segmentIndex !== undefined) {
        selectSegment(runtime, Number(button.dataset.segmentIndex));
    }
}

async function loadPerson(runtime, person, loadId) {
    let values = [];
    let historyError = null;
    try {
        values = await getHistory(person.oid, runtime.date);
    } catch (error) {
        historyError = error;
    }
    if (loadId !== runtime.loadId) {
        return null;
    }

    let points = removeGpsOutliers(normalizeHistory(values), runtime.options.maxSpeedKmh);
    let currentOnly = false;
    if (!points.length && isToday(runtime.date)) {
        const position = parsePosition(stateValue(person.oid));
        if (position) {
            points = [{ ...position, ts: Date.now() }];
            currentOnly = true;
        }
    }
    const segments = currentOnly
        ? []
        : buildTimeline(points, {
              stayRadiusM: runtime.options.stayRadiusM,
              minStayMinutes: runtime.options.minStayMinutes,
              knownPlaces: runtime.places,
              personId: person.id,
          });
    const result = { person, points, segments, currentOnly, historyError };
    await Promise.all(
        segments
            .filter(segment => segment.type === 'stay')
            .map(segment => resolveStay(runtime, person, segment, loadId)),
    );
    return result;
}

async function loadDay(runtime, options = {}) {
    const loadId = ++runtime.loadId;
    renderHeader(runtime);
    if (options.showLoading !== false) {
        renderTimeline(runtime, translate('Loading history...'));
    }
    const results = await Promise.all(runtime.people.map(person => loadPerson(runtime, person, loadId)));
    if (loadId !== runtime.loadId) {
        return;
    }
    runtime.results = new Map(results.filter(Boolean).map(result => [result.person.id, result]));
    renderTimeline(runtime);
    renderMap(runtime);
}

function scheduleLiveReload(runtime) {
    if (runtime.liveReloadTimer) {
        return;
    }
    runtime.liveReloadTimer = setTimeout(async () => {
        runtime.liveReloadTimer = null;
        await loadDay(runtime, { showLoading: false });
    }, 1000);
}

async function initializeStorage(runtime) {
    const localPlaces = await indexedDbGet('places', { entries: [] });
    const localCache = await indexedDbGet('cache', { version: 1, entries: {} });
    const remotePlaces = parseJsonState(stateValue(PLACES_ID), { entries: [] });
    const remoteCache = parseJsonState(stateValue(CACHE_ID), { version: 1, entries: {} });
    runtime.places = mergePlaces(localPlaces.entries || [], remotePlaces.entries || []);
    runtime.cache = mergeCaches(localCache, remoteCache);
    await Promise.all([
        indexedDbSet('places', { version: 1, entries: runtime.places }),
        indexedDbSet('cache', runtime.cache),
    ]);
}

async function createWidget(widgetID, view, data) {
    const root = document.getElementById(widgetID);
    if (!root) {
        setTimeout(() => createWidget(widgetID, view, data), 100);
        return;
    }
    const previous = vis.binds.mapwidgets.timeline.data[widgetID];
    if (previous) {
        previous.loadId++;
        Object.values(previous.writeTimers || {}).forEach(timer => clearTimeout(timer));
        clearTimeout(previous.liveReloadTimer);
        previous.resizeObserver?.disconnect();
        if (previous.themeMedia && previous.themeHandler) {
            previous.themeMedia.removeEventListener?.('change', previous.themeHandler);
        }
        if (previous.clickHandler) {
            root.removeEventListener('click', previous.clickHandler);
        }
        if (previous.submitHandler) {
            root.removeEventListener('submit', previous.submitHandler);
        }
        previous.map?.remove();
    }
    const people = readPeople(data);
    const runtime = {
        widgetID,
        root,
        people,
        selectedPersonId: people[0]?.id,
        date: readStoredDate(widgetID),
        loadId: 0,
        results: new Map(),
        places: [],
        cache: { version: 1, entries: {} },
        writeTimers: {},
        options: {
            layout: ['auto', 'side', 'below'].includes(data.timeline_layout) ? data.timeline_layout : 'auto',
            theme: ['auto', 'light', 'dark'].includes(data.timeline_theme) ? data.timeline_theme : 'auto',
            stayRadiusM: Number(data.timeline_stayradius) || 75,
            minStayMinutes: Number(data.timeline_minstay) || 10,
            maxSpeedKmh: Number(data.timeline_maxspeed) || 300,
            geocodingEnabled: data.timeline_geocodingenabled === true || data.timeline_geocodingenabled === 'true',
            email: String(data.timeline_email || '').trim(),
            endpoint: String(data.timeline_endpoint || '').trim() || 'https://nominatim.openstreetmap.org/reverse',
            language: String(data.timeline_language || '').trim(),
        },
    };
    vis.binds.mapwidgets.timeline.data[widgetID] = runtime;
    renderShell(runtime);
    if (runtime.options.theme === 'auto' && window.matchMedia) {
        runtime.themeMedia = window.matchMedia('(prefers-color-scheme: dark)');
        runtime.themeHandler = () => applyTheme(runtime);
        runtime.themeMedia.addEventListener?.('change', runtime.themeHandler);
    }
    createMap(runtime);
    if (window.ResizeObserver) {
        runtime.resizeObserver = new window.ResizeObserver(entries => {
            const width = entries[0]?.contentRect?.width || root.clientWidth;
            root.classList.toggle('is-timeline-narrow', runtime.options.layout === 'auto' && width < 760);
            runtime.map?.invalidateSize();
        });
        runtime.resizeObserver.observe(root);
    }

    const bound = [...people.map(person => person.oid), PLACES_ID, CACHE_ID];
    vis.binds.mapwidgets.bindStates(root, bound, async (event, newValue) => {
        const id = String(event?.type || event || '').replace(/\.val$/, '');
        if (id === PLACES_ID) {
            const remote = parseJsonState(newValue, { entries: [] });
            runtime.places = mergePlaces(runtime.places, remote.entries || []);
            await indexedDbSet('places', { version: 1, entries: runtime.places });
            loadDay(runtime);
        } else if (id === CACHE_ID) {
            runtime.cache = mergeCaches(runtime.cache, parseJsonState(newValue, { entries: {} }));
            await indexedDbSet('cache', runtime.cache);
        } else if (isToday(runtime.date)) {
            scheduleLiveReload(runtime);
        }
    });

    if (!people.length) {
        renderHeader(runtime);
        renderTimeline(runtime, translate('Configure at least one tracking datapoint'));
        return;
    }
    await initializeStorage(runtime);
    renderPeople(runtime);
    await loadDay(runtime);
    setTimeout(() => runtime.map.invalidateSize(), 0);
}

vis.binds.mapwidgets.timeline = {
    data: {},
    createWidget,
};
