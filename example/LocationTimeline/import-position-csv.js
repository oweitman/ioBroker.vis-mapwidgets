// @ts-nocheck
/*
 * ioBroker JavaScript adapter script for importing a private position CSV
 * directly into a history instance. Original timestamps and order are kept;
 * no timers or simulated playback are used.
 */

'use strict';

/* global createState, log, readFile, sendTo, setState */

const CONFIG = {
    sourceAdapter: '0_userdata.0',
    sourceFile: 'timeline-private/position.csv',
    historyInstance: 'history.0',
    targetId: '0_userdata.0.timeline.importedPosition',
    // Keep false for an exact import without an additional value at the current time.
    updateCurrentState: false,
};

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
            return {
                ts: parseLocalTimestamp(columns[0]),
                val: String(columns[1] || '').trim(),
                ack: String(columns[2] || '').trim().toLowerCase() !== 'false',
                q: 0,
                from: String(columns[3] || '').trim() || 'system.adapter.javascript.0',
            };
        })
        .filter(state => Number.isFinite(state.ts) && /^-?\d+(?:\.\d+)?,-?\d+(?:\.\d+)?$/.test(state.val))
        .sort((a, b) => a.ts - b.ts)
        .filter(
            (state, index, states) =>
                index === 0 || state.ts !== states[index - 1].ts || state.val !== states[index - 1].val,
        );
}

function importCsv(content) {
    const states = parseCsv(content);
    if (!states.length) {
        log('Position import: CSV contains no valid rows.', 'error');
        return;
    }

    sendTo(
        CONFIG.historyInstance,
        'storeState',
        {
            id: CONFIG.targetId,
            state: states,
        },
        result => {
            if (result?.error || (Array.isArray(result?.errors) && result.errors.length)) {
                log(`Position import failed: ${JSON.stringify(result)}`, 'error');
                return;
            }
            log(`Position import finished (${result?.successCount ?? states.length} positions).`, 'info');
            if (CONFIG.updateCurrentState) {
                setState(CONFIG.targetId, states.at(-1).val, true);
            }
        },
    );
}

createState(
    CONFIG.targetId,
    '',
    false,
    {
        name: 'Location Timeline imported position',
        type: 'string',
        role: 'value.gps',
        read: true,
        write: true,
    },
    {},
    () => {
        readFile(CONFIG.sourceAdapter, CONFIG.sourceFile, (error, content) => {
            if (error) {
                log(`Position import: cannot read ${CONFIG.sourceAdapter}/${CONFIG.sourceFile}: ${error}`, 'error');
                return;
            }
            importCsv(content);
        });
    },
);
