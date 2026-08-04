// @ts-nocheck
/*
 * ioBroker JavaScript adapter script for replaying a private position CSV.
 *
 * Upload the CSV to the configured ioBroker adapter file storage, adjust
 * CONFIG, and start this script. The source timestamps are scaled so the full
 * recording is replayed within playbackDurationMinutes.
 */

'use strict';

/* global clearTimeout, createState, log, onStop, readFile, setState, setTimeout */

const CONFIG = {
    sourceAdapter: '0_userdata.0',
    sourceFile: 'timeline-private/position.csv',
    targetId: '0_userdata.0.timeline.replayPosition',
    playbackDurationMinutes: 10,
    startDelaySeconds: 2,
};

const timers = [];

function parseLocalTimestamp(value) {
    const match = String(value).trim().match(
        /^(\d{1,2})\.(\d{1,2})\.(\d{4})\s+(\d{1,2}):(\d{2}):(\d{2})(?:\.(\d{1,3}))?$/,
    );
    if (!match) {
        return Number.NaN;
    }
    return new Date(
        Number(match[3]),
        Number(match[2]) - 1,
        Number(match[1]),
        Number(match[4]),
        Number(match[5]),
        Number(match[6]),
        Number(String(match[7] || '0').padEnd(3, '0')),
    ).getTime();
}

function parseCsv(content) {
    return String(content)
        .replace(/^\uFEFF/, '')
        .split(/\r?\n/)
        .slice(1)
        .map(line => {
            const columns = line.split(';');
            return { ts: parseLocalTimestamp(columns[0]), value: String(columns[1] || '').trim() };
        })
        .filter(row => Number.isFinite(row.ts) && /^-?\d+(?:\.\d+)?,-?\d+(?:\.\d+)?$/.test(row.value))
        .sort((a, b) => a.ts - b.ts);
}

function replay(content) {
    const rows = parseCsv(content);
    if (rows.length < 2) {
        log('Position replay: CSV contains fewer than two valid rows.', 'error');
        return;
    }

    const sourceDuration = rows.at(-1).ts - rows[0].ts;
    const playbackDuration = Number(CONFIG.playbackDurationMinutes) * 60000;
    if (!(sourceDuration > 0) || !(playbackDuration > 0)) {
        log('Position replay: playbackDurationMinutes must be greater than zero.', 'error');
        return;
    }

    const startDelay = Math.max(0, Number(CONFIG.startDelaySeconds) || 0) * 1000;
    rows.forEach((row, index) => {
        const offset = startDelay + ((row.ts - rows[0].ts) / sourceDuration) * playbackDuration;
        timers.push(
            setTimeout(() => {
                setState(CONFIG.targetId, row.value, true);
                if (index === rows.length - 1) {
                    log(`Position replay finished (${rows.length} positions).`, 'info');
                }
            }, Math.round(offset)),
        );
    });
    log(`Position replay scheduled: ${rows.length} positions in ${CONFIG.playbackDurationMinutes} minutes.`, 'info');
}

createState(
    CONFIG.targetId,
    '',
    false,
    {
        name: 'Location Timeline replay position',
        type: 'string',
        role: 'value.gps',
        read: true,
        write: true,
    },
    {},
    () => {
        readFile(CONFIG.sourceAdapter, CONFIG.sourceFile, (error, content) => {
            if (error) {
                log(`Position replay: cannot read ${CONFIG.sourceAdapter}/${CONFIG.sourceFile}: ${error}`, 'error');
                return;
            }
            replay(content);
        });
    },
);

onStop(() => timers.forEach(timer => clearTimeout(timer)), 1000);
