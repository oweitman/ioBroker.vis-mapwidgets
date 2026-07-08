// @ts-nocheck
'use strict';

const assert = require('node:assert/strict');
const path = require('node:path');

const formatterPath = path.join(__dirname, '..', 'widgets', 'mapwidgets', 'js', 'formatAjvErrors.js');

describe('formatAjvErrors', function () {
    this.timeout(10000);

    let formatAjvErrors;

    before(() => {
        global._ = (text, ...args) => {
            let index = 0;
            return String(text).replace(/%s/g, () => String(args[index++]));
        };
        ({ formatAjvErrors } = require(formatterPath));
    });

    it('reports a valid configuration when AJV returns no errors', () => {
        assert.equal(formatAjvErrors([], {}, {}), 'The JSON configuration is valid.');
        assert.equal(formatAjvErrors(null, {}, {}), 'The JSON configuration is valid.');
    });

    it('groups additionalProperties errors and lists allowed properties', () => {
        const schema = {
            type: 'object',
            properties: {
                marker: {
                    type: 'array',
                    items: {
                        type: 'object',
                        properties: {
                            lat: { type: 'number' },
                            lng: { type: 'number' },
                        },
                        additionalProperties: false,
                    },
                },
            },
        };
        const data = {
            marker: [
                {
                    lat: 0,
                    lng: 0,
                    unexpected: true,
                    another: 'x',
                },
            ],
        };
        const text = formatAjvErrors(
            [
                {
                    keyword: 'additionalProperties',
                    instancePath: '/marker/0',
                    schemaPath: '#/properties/marker/items/additionalProperties',
                    params: { additionalProperty: 'unexpected' },
                },
                {
                    keyword: 'additionalProperties',
                    instancePath: '/marker/0',
                    schemaPath: '#/properties/marker/items/additionalProperties',
                    params: { additionalProperty: 'another' },
                },
            ],
            schema,
            data,
        );

        assert.match(text, /The JSON configuration contains 2 error\(s\)\./);
        assert.match(text, /Unexpected properties in object marker\[0\]:/);
        assert.match(text, /  - unexpected/);
        assert.match(text, /  - another/);
        assert.match(text, /Allowed properties are:/);
        assert.match(text, /  - lat/);
        assert.match(text, /  - lng/);
    });

    it('formats common scalar validation errors with path and value details', () => {
        const schema = {
            type: 'object',
            properties: {
                zoom: {
                    type: 'number',
                    minimum: 0,
                    maximum: 19,
                },
                mode: {
                    enum: ['a', 'b'],
                },
            },
            required: ['zoom'],
        };
        const data = {
            zoom: -1,
            mode: 'c',
        };
        const text = formatAjvErrors(
            [
                {
                    keyword: 'minimum',
                    instancePath: '/zoom',
                    schemaPath: '#/properties/zoom/minimum',
                    params: { limit: 0 },
                },
                {
                    keyword: 'enum',
                    instancePath: '/mode',
                    schemaPath: '#/properties/mode/enum',
                    params: {},
                },
                {
                    keyword: 'required',
                    instancePath: '',
                    schemaPath: '#/required',
                    params: { missingProperty: 'marker' },
                },
            ],
            schema,
            data,
        );

        assert.match(text, /Error at root object:/);
        assert.match(text, /Required property "marker" is missing\./);
        assert.match(text, /Error at mode:/);
        assert.match(text, /Allowed values: "a", "b"/);
        assert.match(text, /Error at zoom:/);
        assert.match(text, /Minimum: 0/);
        assert.match(text, /Actual: -1/);
    });

    it('keeps oneOf summaries and removes noisy follow-up errors at the same path', () => {
        const data = {
            icon: {},
        };
        const text = formatAjvErrors(
            [
                {
                    keyword: 'required',
                    instancePath: '/icon',
                    schemaPath: '#/properties/icon/anyOf/0/required',
                    params: { missingProperty: 'iconUrl' },
                },
                {
                    keyword: 'oneOf',
                    instancePath: '/icon',
                    schemaPath: '#/properties/icon/oneOf',
                    params: {},
                },
            ],
            {},
            data,
        );

        assert.match(text, /The object does not match any of the allowed variants\./);
        assert.doesNotMatch(text, /iconUrl/);
    });
});
