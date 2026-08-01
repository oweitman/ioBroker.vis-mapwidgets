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
});
