// @ts-nocheck
/*
 * ioBroker JavaScript adapter example
 *
 * Creates a realistic location track and stores it directly in history.0 via
 * the storeState message. Copy this script into a JavaScript adapter script,
 * adjust CONFIG, and run it once.
 */

'use strict';

/* global createState, log, sendTo, setState */

const CONFIG = {
    historyInstance: 'history.0',
    targetId: '0_userdata.0.timeline.exampleTrack',

    // Local time of the ioBroker host. Add Z or an offset for an explicit zone.
    startTime: '2026-07-31T07:30:00',

    // Stationary samples may contain a few metres of realistic GPS drift.
    staySampleIntervalMinutes: 5,
    moveSampleIntervalMinutes: 2,
    gpsDriftMeters: 4,

    // Also set the normal ioBroker state to the final point after importing.
    updateCurrentState: true,
};

const TRACK = [
    {
        type: 'stay',
        name: 'Home in the morning',
        lat: 50.11552,
        lon: 8.68417,
        durationMinutes: 30,
    },
    {
        type: 'move',
        name: 'Commute to work',
        lat: 50.10731,
        lon: 8.66449,
        durationMinutes: 20,
    },
    {
        type: 'stay',
        name: 'Work',
        lat: 50.10731,
        lon: 8.66449,
        durationMinutes: 210,
    },
    {
        type: 'move',
        name: 'Walk to lunch',
        lat: 50.11016,
        lon: 8.66763,
        durationMinutes: 10,
    },
    {
        type: 'stay',
        name: 'Lunch',
        lat: 50.11016,
        lon: 8.66763,
        durationMinutes: 40,
    },
    {
        type: 'move',
        name: 'Back to work',
        lat: 50.10731,
        lon: 8.66449,
        durationMinutes: 10,
    },
    {
        type: 'stay',
        name: 'Work in the afternoon',
        lat: 50.10731,
        lon: 8.66449,
        durationMinutes: 210,
    },
    {
        type: 'move',
        name: 'Drive to supermarket',
        lat: 50.11271,
        lon: 8.67496,
        durationMinutes: 15,
    },
    {
        type: 'stay',
        name: 'Supermarket',
        lat: 50.11271,
        lon: 8.67496,
        durationMinutes: 25,
    },
    {
        type: 'move',
        name: 'Drive home',
        lat: 50.11552,
        lon: 8.68417,
        durationMinutes: 15,
    },
    {
        type: 'stay',
        name: 'Home in the evening',
        lat: 50.11552,
        lon: 8.68417,
        durationMinutes: 30,
    },
];

const MINUTE_MS = 60 * 1000;
const startTimestamp = new Date(CONFIG.startTime).getTime();

if (!Number.isFinite(startTimestamp)) {
    throw new Error(`Invalid CONFIG.startTime: ${CONFIG.startTime}`);
}
if (!TRACK.length || TRACK[0].type !== 'stay') {
    throw new Error('TRACK must start with a stay segment');
}

function toState(timestamp, lat, lon) {
    return {
        ts: timestamp,
        val: `${lat.toFixed(5)},${lon.toFixed(5)}`,
        ack: true,
        q: 0,
        from: 'system.adapter.javascript.0',
    };
}

function addState(states, state) {
    const previous = states[states.length - 1];
    if (!previous || previous.ts !== state.ts || previous.val !== state.val) {
        states.push(state);
    }
}

function addGpsDrift(lat, lon, sampleIndex) {
    if (!CONFIG.gpsDriftMeters || sampleIndex === 0) {
        return { lat, lon };
    }

    // Deterministic drift: every run creates exactly the same example track.
    const angle = sampleIndex * 2.399963;
    const radius = CONFIG.gpsDriftMeters * (0.35 + (sampleIndex % 4) / 6);
    const latOffset = (Math.cos(angle) * radius) / 111320;
    const lonOffset = (Math.sin(angle) * radius) / (111320 * Math.cos((lat * Math.PI) / 180));
    return { lat: lat + latOffset, lon: lon + lonOffset };
}

function buildTrack() {
    const states = [];
    let timestamp = startTimestamp;
    let position = { lat: TRACK[0].lat, lon: TRACK[0].lon };

    TRACK.forEach(segment => {
        const durationMs = segment.durationMinutes * MINUTE_MS;
        const intervalMinutes =
            segment.type === 'stay'
                ? CONFIG.staySampleIntervalMinutes
                : CONFIG.moveSampleIntervalMinutes;
        const sampleCount = Math.max(1, Math.ceil(segment.durationMinutes / intervalMinutes));

        if (segment.type === 'stay') {
            for (let index = 0; index <= sampleCount; index++) {
                const progress = index / sampleCount;
                const drifted =
                    index === 0 || index === sampleCount
                        ? { lat: segment.lat, lon: segment.lon }
                        : addGpsDrift(segment.lat, segment.lon, index);
                addState(states, toState(timestamp + Math.round(durationMs * progress), drifted.lat, drifted.lon));
            }
        } else if (segment.type === 'move') {
            for (let index = 1; index <= sampleCount; index++) {
                const progress = index / sampleCount;
                const lat = position.lat + (segment.lat - position.lat) * progress;
                const lon = position.lon + (segment.lon - position.lon) * progress;
                addState(states, toState(timestamp + Math.round(durationMs * progress), lat, lon));
            }
        } else {
            throw new Error(`Unknown track segment type: ${segment.type}`);
        }

        timestamp += durationMs;
        position = { lat: segment.lat, lon: segment.lon };
    });

    return states.sort((a, b) => a.ts - b.ts);
}

function storeExampleTrack() {
    const states = buildTrack();
    const first = new Date(states[0].ts).toString();
    const last = new Date(states[states.length - 1].ts).toString();

    log(`Writing ${states.length} example positions to ${CONFIG.historyInstance}: ${first} – ${last}`, 'info');

    sendTo(
        CONFIG.historyInstance,
        'storeState',
        {
            id: CONFIG.targetId,
            state: states,
        },
        result => {
            if (result?.error || (Array.isArray(result?.errors) && result.errors.length)) {
                log(`storeState failed: ${JSON.stringify(result)}`, 'error');
                return;
            }

            log(
                `Example track processed successfully (${result?.successCount ?? states.length} positions).`,
                'info',
            );

            if (CONFIG.updateCurrentState) {
                setState(CONFIG.targetId, states[states.length - 1].val, true);
            }
        },
    );
}

createState(
    CONFIG.targetId,
    '',
    false,
    {
        name: 'Location Timeline example track',
        type: 'string',
        role: 'value.gps',
        read: true,
        write: true,
    },
    {},
    storeExampleTrack,
);
