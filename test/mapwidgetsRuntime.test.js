// @ts-nocheck
'use strict';

const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const mapwidgetsPath = path.join(__dirname, '..', 'widgets', 'mapwidgets', 'js', 'mapwidgets.js');

function createJQueryStub() {
    const created = [];

    function JQueryCollection(element) {
        this.element = element || { dataStore: {} };
        this.length = element ? 1 : 0;
    }

    JQueryCollection.prototype.data = function (key, value) {
        this.element.dataStore = this.element.dataStore || {};
        if (value === undefined) {
            return this.element.dataStore[key];
        }
        this.element.dataStore[key] = value;
        return this;
    };

    JQueryCollection.prototype.width = () => 100;
    JQueryCollection.prototype.height = () => 100;
    JQueryCollection.prototype.html = function (value) {
        if (value === undefined) {
            return this.element.html;
        }
        this.element.html = value;
        return this;
    };
    JQueryCollection.prototype.get = function () {
        return this.element;
    };
    JQueryCollection.prototype.addClass = function () {
        return this;
    };
    JQueryCollection.prototype.text = function (value) {
        if (value === undefined) {
            return this.element.text;
        }
        this.element.text = value;
        return this;
    };
    JQueryCollection.prototype.dialog = function (options) {
        this.element.dialogOptions = options;
        return this;
    };
    JQueryCollection.prototype.last = function () {
        return this;
    };
    JQueryCollection.prototype.remove = function () {
        this.element.removed = true;
        return this;
    };

    function $(element) {
        if (typeof element === 'string' && element.startsWith('<')) {
            const createdElement = { dataStore: {}, tag: element };
            created.push(createdElement);
            return new JQueryCollection(createdElement);
        }

        return new JQueryCollection(element);
    }

    $.created = created;
    $.extend = function (_deep, target, source) {
        Object.assign(target, source);
        return target;
    };

    return $;
}

function transformMapwidgetsSource(source) {
    return source
        .replace(/import 'leaflet\/dist\/leaflet\.css';\r?\n/, '')
        .replace(/import 'leaflet\/dist\/leaflet\.js';\r?\n/, '')
        .replace(/import '\.\.\/js\/L\.Terminator';\r?\n/, '')
        .replace(/import '\.\.\/css\/style\.css';\r?\n/, '')
        .replace(/import \{ version as pkgVersion \} from '..\/..\/..\/package\.json';\r?\n/, "const pkgVersion = 'test';\n")
        .replace(
            /import \{ diff \} from 'deep-object-diff';\r?\n/,
            'const diff = (oldValue, newValue) => (oldValue === newValue ? {} : newValue || {});\n',
        )
        .replace(/import Ajv2020 from 'ajv\/dist\/2020\.js';\r?\n/, 'const Ajv2020 = function () {};\n')
        .replace(
            /import \{ formatAjvErrors \} from '\.\/formatAjvErrors\.js';\r?\n/,
            "const { formatAjvErrors } = require('./formatAjvErrors.js');\n",
        )
        .replace(/var hash = require\('object-hash'\);/, 'var hash = value => JSON.stringify(value);');
}

function loadMapwidgets() {
    const originalLoader = require.extensions['.js'];
    delete require.cache[mapwidgetsPath];

    global.$ = createJQueryStub();
    global.systemDictionary = {};
    global._ = (text, ...args) => {
        let index = 0;
        return String(text).replace(/%s/g, () => String(args[index++]));
    };
    global.window = {};
    global.document = {
        scripts: [],
        head: {
            appendChild(element) {
                if (element.tagName === 'script') {
                    global.document.scripts.push(element);
                }
                if (typeof element.onload === 'function') {
                    element.onload();
                }
            },
        },
        createElement(tagName) {
            return {
                tagName,
                remove() {},
            };
        },
        querySelectorAll() {
            return [];
        },
    };
    function createLayer(type, value, options) {
        return {
            type,
            value,
            options,
            addedTo: null,
            popup: null,
            tooltip: null,
            removed: false,
            addTo(target) {
                this.addedTo = target;
                target.layers = target.layers || [];
                target.layers.push(this);
                return this;
            },
            bindPopup(text, popupOptions) {
                this.popup = { text, options: popupOptions };
                return this;
            },
            bindTooltip(text, tooltipOptions) {
                this.tooltip = { text, options: tooltipOptions };
                return this;
            },
            remove() {
                this.removed = true;
            },
        };
    }
    global.L = {
        divIcon: options => ({ type: 'divIcon', options }),
        icon: options => ({ type: 'icon', options }),
        marker: (latlng, options) => createLayer('marker', latlng, options),
        polyline: (latlng, options) => createLayer('polyline', latlng, options),
        polygon: (latlng, options) => createLayer('polygon', latlng, options),
        rectangle: (latlng, options) => createLayer('rectangle', latlng, options),
        circle: (latlng, options) => createLayer('circle', latlng, options),
        Control: {
            extend(definition) {
                return function Control() {
                    Object.assign(this, definition);
                };
            },
        },
        DomUtil: {
            create(_tagName, className) {
                return {
                    className,
                    innerHTML: '',
                    querySelector() {
                        return {
                            addEventListener(_eventName, callback) {
                                this.callback = callback;
                            },
                        };
                    },
                };
            },
        },
        DomEvent: {
            disableClickPropagation() {},
            disableScrollPropagation() {},
        },
    };
    global.vis = {
        binds: {},
        states: {
            bound: {},
            bind(id, callback) {
                this.bound[id] = callback;
            },
            unbind(id) {
                delete this.bound[id];
            },
        },
    };

    require.extensions['.js'] = function (module, filename) {
        if (filename === mapwidgetsPath) {
            const source = transformMapwidgetsSource(fs.readFileSync(filename, 'utf8'));
            module._compile(source, filename);
            return;
        }

        originalLoader(module, filename);
    };

    try {
        require(mapwidgetsPath);
        return global.vis.binds.mapwidgets;
    } finally {
        require.extensions['.js'] = originalLoader;
    }
}

describe('mapwidgets runtime helpers', function () {
    this.timeout(10000);

    let mapwidgets;

    beforeEach(() => {
        mapwidgets = loadMapwidgets();
    });

    it('parses only object JSON configurations', () => {
        assert.deepEqual(mapwidgets.parseMapConfig('{"marker":[]}'), {
            config: { marker: [] },
            errorText: '',
            valid: true,
        });
        assert.equal(mapwidgets.parseMapConfig('[1]').valid, false);
        assert.equal(mapwidgets.parseMapConfig('null').valid, false);
        assert.equal(mapwidgets.parseMapConfig('{ invalid').valid, false);
    });

    it('detects fitBounds only when a supported geometry requests it', () => {
        assert.equal(mapwidgets.hasFitBounds({ marker: [{ iobOptions: { fitBounds: true } }] }), true);
        assert.equal(mapwidgets.hasFitBounds({ polyline: [{ iobOptions: { fitBounds: false } }] }), false);
        assert.equal(mapwidgets.hasFitBounds({ icons: { marker: { iobOptions: { fitBounds: true } } } }), false);
    });

    it('validates coordinates without treating zero as missing', () => {
        assert.equal(mapwidgets.validators.latLngAttributes(0, 0), true);
        assert.equal(mapwidgets.validators.latLngPair([0, 0]), true);
        assert.equal(mapwidgets.validators.latLngArray([[0, 0]]), true);
        assert.equal(mapwidgets.validators.bounds([[0, 0], [1, 1]]), true);
        assert.equal(mapwidgets.validators.latLngAttributes(undefined, 0), false);
    });

    it('creates DivIcon options from html and keeps bgPos optional', () => {
        const visdata = {};
        mapwidgets.data.w00001 = { iconRegistry: {} };

        mapwidgets.leaflet.visMapwidgets = mapwidgets;
        mapwidgets.leaflet.icons(visdata, 'w00001', {
            config: {
                icons: {
                    emptyHtml: {
                        html: '',
                        className: 'empty',
                    },
                    withBgPos: {
                        html: '<b>x</b>',
                        bgPos: [1, 2],
                    },
                    normal: {
                        iconUrl: 'marker.png',
                    },
                },
            },
        });

        assert.equal(mapwidgets.data.w00001.iconRegistry.emptyHtml.type, 'divIcon');
        assert.equal(Object.hasOwn(mapwidgets.data.w00001.iconRegistry.emptyHtml.options, 'bgPos'), false);
        assert.deepEqual(mapwidgets.data.w00001.iconRegistry.withBgPos.options.bgPos, [1, 2]);
        assert.equal(mapwidgets.data.w00001.iconRegistry.normal.type, 'icon');
    });

    it('compacts undefined options and resolves named marker icons', () => {
        assert.deepEqual(mapwidgets.compactOptions({ a: 1, b: undefined, c: null }), { a: 1, c: null });

        mapwidgets.data.w00001 = {
            iconRegistry: {
                normal: { type: 'icon' },
            },
        };
        const options = { icon: 'normal' };
        mapwidgets.setIcon(options, 'w00001');
        assert.deepEqual(options, { icon: { type: 'icon' } });

        const missing = { icon: 'missing' };
        mapwidgets.setIcon(missing, 'w00001');
        assert.deepEqual(missing, {});
    });

    it('binds state handlers with ioBroker .val suffix', () => {
        const element = { dataStore: {} };
        const callback = () => {};

        mapwidgets.bindStates(element, ['userdata.0.map'], callback);

        assert.equal(global.vis.states.bound['userdata.0.map.val'], callback);
        assert.deepEqual(element.dataStore.bound.bound, ['userdata.0.map.val']);
    });

    it('creates Leaflet geometry layers with popup, tooltip and fitBounds targets', () => {
        mapwidgets.data.w00001 = {
            iconRegistry: {
                normal: { type: 'icon' },
            },
        };
        const map = { layers: [] };
        const fg = { layers: [] };

        const marker = mapwidgets.lHandlers.marker.create(
            map,
            fg,
            {
                lat: 0,
                lng: 0,
                options: { icon: 'normal' },
                popup: { text: 'popup', options: { maxWidth: 100 } },
                tooltip: { text: 'tooltip', options: { permanent: true } },
                iobOptions: { fitBounds: true },
            },
            'w00001',
        );
        assert.equal(marker.type, 'marker');
        assert.deepEqual(marker.value, [0, 0]);
        assert.equal(marker.addedTo, fg);
        assert.deepEqual(marker.options.icon, { type: 'icon' });
        assert.deepEqual(marker.popup, { text: 'popup', options: { maxWidth: 100 } });
        assert.deepEqual(marker.tooltip, { text: 'tooltip', options: { permanent: true } });

        const polygon = mapwidgets.lHandlers.polygon.create(
            map,
            fg,
            {
                latlng: [
                    [0, 0],
                    [1, 1],
                    [1, 0],
                ],
                popup: 'polygon popup',
                tooltip: 'polygon tooltip',
            },
            'w00001',
        );
        assert.equal(polygon.addedTo, map);
        assert.deepEqual(polygon.popup, { text: 'polygon popup', options: undefined });
        assert.deepEqual(polygon.tooltip, { text: 'polygon tooltip', options: undefined });

        assert.equal(
            mapwidgets.lHandlers.polyline.create(map, fg, { latlng: [[0, 0]], iobOptions: { fitBounds: true } }).addedTo,
            fg,
        );
        assert.equal(mapwidgets.lHandlers.rectangle.create(map, fg, { latlng: [[0, 0], [1, 1]] }).type, 'rectangle');
        assert.equal(
            mapwidgets.lHandlers.circle.create(map, fg, { latlng: [0, 0], options: { radius: 10 } }).options.radius,
            10,
        );
    });

    it('applies array diffs by replacing, skipping invalid changes and garbage collecting stale layers', () => {
        const removed = [];
        const created = [];
        const oldItem = { id: 'old' };
        const staleLayer = { remove: () => removed.push('stale') };
        const oldLayer = { remove: () => removed.push('old') };
        const visdata = {
            marker: {
                old: { index: 0, layer: oldLayer },
                stale: { index: 3, layer: staleLayer },
            },
        };
        const originalWarn = console.warn;
        console.warn = () => {};

        try {
            mapwidgets.leaflet.applyArrayDiff({
                visdata,
                type: 'marker',
                configSet: {
                    oldConfig: {
                        marker: [oldItem],
                    },
                    config: {
                        marker: [{ id: 'new' }, { id: 'invalid' }],
                    },
                    diffConfig: {
                        marker: {
                            0: { id: 'new' },
                            1: { id: 'invalid' },
                        },
                    },
                },
                widgetID: 'w00001',
                map: {},
                fg: {},
                getKey: item => item.id,
                validate: item => item.id !== 'invalid',
                create: (_map, _fg, item) => {
                    const layer = { item, remove: () => removed.push(item.id) };
                    created.push(item.id);
                    return layer;
                },
            });
        } finally {
            console.warn = originalWarn;
        }

        assert.deepEqual(created, ['new']);
        assert.deepEqual(removed.sort(), ['old', 'stale']);
        assert.deepEqual(Object.keys(visdata.marker).sort(), ['new']);
        assert.equal(visdata.marker.new.index, 0);
    });

    it('routes geometry diffs through all matching handlers', () => {
        const calls = [];
        const visdata = {
            marker: {},
            polyline: {},
            polygon: {},
            rectangle: {},
            circle: {},
        };
        const configSet = {
            config: {
                marker: [{ lat: 0, lng: 0 }],
                polyline: [{ latlng: [[0, 0]] }],
                polygon: [{ latlng: [[0, 0]] }],
                rectangle: [{ latlng: [[0, 0], [1, 1]] }],
                circle: [{ latlng: [0, 0], options: { radius: 1 } }],
            },
            oldConfig: {},
            diffConfig: {
                marker: { 0: { lat: 0, lng: 0 } },
                polyline: { 0: { latlng: [[0, 0]] } },
                polygon: { 0: { latlng: [[0, 0]] } },
                rectangle: { 0: { latlng: [[0, 0], [1, 1]] } },
                circle: { 0: { latlng: [0, 0], options: { radius: 1 } } },
            },
        };
        const originalApplyArrayDiff = mapwidgets.leaflet.applyArrayDiff;
        mapwidgets.leaflet.visMapwidgets = mapwidgets;
        mapwidgets.leaflet.applyArrayDiff = options => calls.push(options.type);

        try {
            mapwidgets.leaflet.applyAllGeometryDiffs(visdata, 'w00001', configSet, {}, {});
        } finally {
            mapwidgets.leaflet.applyArrayDiff = originalApplyArrayDiff;
        }

        assert.deepEqual(calls, ['marker', 'polyline', 'polygon', 'rectangle', 'circle']);
    });

    it('adds and replaces schema error controls only when errors exist', () => {
        const added = [];
        const removed = [];
        mapwidgets.data.w00001 = {
            schemaErrorsText: '',
            map: {
                addControl(control) {
                    added.push(control);
                },
                removeControl(control) {
                    removed.push(control);
                },
            },
        };

        mapwidgets.leaflet.schemaErrorControl('w00001');
        assert.equal(added.length, 0);

        mapwidgets.data.w00001.schemaErrorsText = 'broken';
        mapwidgets.leaflet.schemaErrorControl('w00001');
        assert.equal(added.length, 1);
        assert.equal(mapwidgets.data.w00001.schemaErrorControl, added[0]);

        mapwidgets.data.w00001.schemaErrorsText = 'still broken';
        mapwidgets.leaflet.schemaErrorControl('w00001');
        assert.equal(removed.length, 1);
        assert.equal(added.length, 2);
    });

    it('renders schema error dialog content as text', () => {
        mapwidgets.data.w00001 = {
            schemaErrorsText: '<img src=x onerror=alert(1)>',
        };

        mapwidgets.showSchemaErrorDialog('w00001');

        const dialog = global.$.created.at(-1);
        assert.equal(dialog.text, '<img src=x onerror=alert(1)>');
        assert.equal(dialog.dialogOptions.title, 'Schemafehler');
        assert.equal(dialog.dialogOptions.modal, true);
    });

    it('loads scripts, css files and waits for globals', async () => {
        assert.equal(await mapwidgets.loadScript('test.js', { attrs: { type: 'module' } }), undefined);
        assert.equal(await mapwidgets.loadScript('test.js'), 'already-loaded');

        assert.equal(await mapwidgets.loadCSS('test.css', { attrs: { media: 'print' } }), undefined);

        global.window.iobroker = { mapwidgets: { ready: true } };
        assert.deepEqual(await mapwidgets.waitForGlobal('iobroker.mapwidgets'), { ready: true });

        await assert.rejects(() => mapwidgets.waitForGlobal('missing.value', 1, 1), /Timeout: missing\.value/);
    });
});
