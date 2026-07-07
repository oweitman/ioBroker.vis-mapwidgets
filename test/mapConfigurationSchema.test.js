// @ts-nocheck
'use strict';

const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const Ajv2020 = require('../widgets/node_modules/ajv/dist/2020');
const schema = require('../widgets/mapwidgets/js/mapwidgets.schema.json');

const rootDir = path.join(__dirname, '..');
const exampleFiles = [
    'example/Example3MarkersJSON/datapoint-userdata.0.3Marker.json',
    'example/ExampleCompleteTest/datapoint.userdata.0.leaflet.json',
    'example/ExampleFitBoundsJSON/datapoint-userdata.0.fitBounds.json',
    'example/ExamplePathJSON/datapoint-userdata.0.path.json',
    'example/ExamplePolygonJSON/datapoint-userdata.0.polygon.json',
];

function readJson(relativePath) {
    return JSON.parse(fs.readFileSync(path.join(rootDir, relativePath), 'utf8'));
}

describe('mapwidgets map configuration schema', () => {
    let validate;

    before(() => {
        const ajv = new Ajv2020({
            allErrors: true,
            strict: false,
        });

        validate = ajv.compile(schema);
    });

    for (const file of exampleFiles) {
        it(`validates ${file}`, () => {
            const data = readJson(file);

            assert.equal(validate(data), true, formatErrors(validate.errors));
        });
    }

    it('validates every map entry in the path history example', () => {
        const history = readJson('example/ExamplePathHistory/datapoint.userdata.0.pathhistory.json');

        for (const [timestamp, entry] of Object.entries(history)) {
            assert.equal(validate(entry.map), true, `${timestamp}\n${formatErrors(validate.errors)}`);
        }
    });

    it('accepts the minimal configurations documented in README.md', () => {
        const data = {
            marker: [{ latlng: [50.182, 8.682] }, { lat: 50.176, lng: 8.69 }],
            icons: {
                greenleaf: {
                    iconUrl: '/vis.0/leaf-green.png',
                },
            },
            polyline: [
                {
                    latlng: [
                        [50.2, 8.7],
                        [50.2, 8.8],
                    ],
                },
            ],
            polygon: [
                {
                    latlng: [
                        [50.1, 8.7],
                        [50.1, 8.8],
                        [50.2, 8.75],
                    ],
                },
            ],
            rectangle: [
                {
                    latlng: [
                        [50.3, 8.7],
                        [50.4, 8.8],
                    ],
                },
            ],
            circle: [
                {
                    latlng: [50.3, 8.6],
                    options: {
                        radius: 10000,
                    },
                },
            ],
        };

        assert.equal(validate(data), true, formatErrors(validate.errors));
    });

    it('rejects malformed configurations from the documented constraints', () => {
        const invalidCases = [
            {
                name: 'marker without coordinates',
                data: { marker: [{ options: { title: 'Missing coordinates' } }] },
                keywords: ['oneOf'],
            },
            {
                name: 'icon without iconUrl',
                data: { icons: { missingUrl: { iconSize: [25, 41] } } },
                keywords: ['required'],
            },
            {
                name: 'polyline with only one coordinate',
                data: { polyline: [{ latlng: [[50.2, 8.7]] }] },
                keywords: ['minItems'],
            },
            {
                name: 'circle without radius',
                data: { circle: [{ latlng: [50.3, 8.6], options: {} }] },
                keywords: ['required'],
            },
            {
                name: 'unknown top-level property',
                data: { linestring: [] },
                keywords: ['additionalProperties'],
            },
        ];

        for (const testCase of invalidCases) {
            assert.equal(validate(testCase.data), false, `${testCase.name} should be invalid`);

            const actualKeywords = new Set(validate.errors.map(error => error.keyword));
            for (const keyword of testCase.keywords) {
                assert.equal(
                    actualKeywords.has(keyword),
                    true,
                    `${testCase.name} should report ${keyword}, got ${formatErrors(validate.errors)}`,
                );
            }
        }
    });
});

function formatErrors(errors) {
    return (errors || [])
        .map(error => `${error.instancePath || '/'} ${error.keyword} ${error.message}`)
        .join('\n');
}
