// @ts-nocheck
'use strict';

const assert = require('node:assert');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

describe('Location Timeline example track script', () => {
    it('creates a chronological combined-coordinate track via storeState', () => {
        const source = fs.readFileSync(
            path.join(__dirname, '..', 'example', 'LocationTimeline', 'create-example-track.js'),
            'utf8',
        );
        let storedMessage;
        let currentState;

        vm.runInNewContext(source, {
            createState: (...args) => args.at(-1)(),
            log: () => undefined,
            sendTo: (instance, command, message, callback) => {
                storedMessage = { instance, command, message };
                callback({ successCount: message.state.length });
            },
            setState: (id, value, ack) => {
                currentState = { id, value, ack };
            },
        });

        assert.strictEqual(storedMessage.instance, 'history.0');
        assert.strictEqual(storedMessage.command, 'storeState');
        assert.strictEqual(storedMessage.message.id, '0_userdata.0.timeline.exampleTrack');

        const states = storedMessage.message.state;
        assert.ok(states.length > 100);
        assert.match(states[0].val, /^50\.11552,8\.68417$/);
        assert.match(states.at(-1).val, /^50\.11552,8\.68417$/);

        for (let index = 0; index < states.length; index++) {
            assert.match(states[index].val, /^-?\d+\.\d{5},-?\d+\.\d{5}$/);
            assert.strictEqual(states[index].ack, true);

            if (index > 0) {
                const gap = states[index].ts - states[index - 1].ts;
                assert.ok(gap > 0, 'timestamps must be strictly increasing');
                assert.ok(gap <= 5 * 60 * 1000, 'track must not contain gaps over five minutes');
            }
        }

        assert.deepStrictEqual(currentState, {
            id: storedMessage.message.id,
            value: states.at(-1).val,
            ack: true,
        });
    });

    it('replays a private CSV over the configured duration without embedding its data', () => {
        const source = fs.readFileSync(
            path.join(__dirname, '..', 'example', 'LocationTimeline', 'replay-position-csv.js'),
            'utf8',
        );
        const scheduled = [];
        const stateValues = [];
        const csv = [
            'timestamp;value;acknowledged;from;',
            '1.8.2026 08:00:00.000;50.00000,8.00000;true;test.0',
            '1.8.2026 09:00:00.000;50.01000,8.01000;true;test.0',
        ].join('\n');

        vm.runInNewContext(source, {
            clearTimeout: () => undefined,
            createState: (...args) => args.at(-1)(),
            log: () => undefined,
            onStop: () => undefined,
            readFile: (adapter, file, callback) => {
                assert.strictEqual(adapter, '0_userdata.0');
                assert.strictEqual(file, 'timeline-private/position.csv');
                callback(null, csv);
            },
            setState: (id, value, ack) => stateValues.push({ id, value, ack }),
            setTimeout: (callback, delay) => {
                scheduled.push({ callback, delay });
                return scheduled.length;
            },
        });

        assert.strictEqual(scheduled.length, 2);
        assert.strictEqual(scheduled[0].delay, 2000);
        assert.strictEqual(scheduled[1].delay, 10 * 60 * 1000 + 2000);
        scheduled.forEach(item => item.callback());
        assert.deepStrictEqual(
            stateValues.map(item => item.value),
            ['50.00000,8.00000', '50.01000,8.01000'],
        );
    });

    it('imports a private CSV with its original timestamps and order', () => {
        const source = fs.readFileSync(
            path.join(__dirname, '..', 'example', 'LocationTimeline', 'import-position-csv.js'),
            'utf8',
        );
        let storedMessage;
        const csv = [
            'timestamp;value;acknowledged;from;',
            '1.8.2026 09:00:00.250;50.01000,8.01000;true;test.0',
            '1.8.2026 08:00:00.125;50.00000,8.00000;true;test.0',
        ].join('\n');

        vm.runInNewContext(source, {
            createState: (...args) => args.at(-1)(),
            log: () => undefined,
            readFile: (_adapter, _file, callback) => callback(null, csv),
            sendTo: (instance, command, message, callback) => {
                storedMessage = { instance, command, message };
                callback({ successCount: message.state.length });
            },
            setState: () => undefined,
        });

        assert.strictEqual(storedMessage.instance, 'history.0');
        assert.strictEqual(storedMessage.command, 'storeState');
        assert.deepStrictEqual(
            Array.from(storedMessage.message.state, state => state.val),
            ['50.00000,8.00000', '50.01000,8.01000'],
        );
        assert.ok(storedMessage.message.state[0].ts < storedMessage.message.state[1].ts);
    });
});
