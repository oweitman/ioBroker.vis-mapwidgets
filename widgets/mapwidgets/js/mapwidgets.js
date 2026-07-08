/*
    ioBroker.vis mapwidgets Widget-Set

    Copyright 2025 oweitman oweitman@gmx.de
*/
'use strict';

// const { config } = require("chai");

/* global $, vis, systemDictionary,L,window,document,_ */

import 'leaflet/dist/leaflet.css';
import 'leaflet/dist/leaflet.js';
import '../js/L.Terminator';
import '../css/style.css';
import { version as pkgVersion } from '../../../package.json';
import { diff } from 'deep-object-diff';
import Ajv2020 from 'ajv/dist/2020.js';
import { formatAjvErrors } from './formatAjvErrors.js';

var hash = require('object-hash');

const schema = require('./mapwidgets.schema.json');

var translations = require('../myi18n/translations.json');
$.extend(true, systemDictionary, translations);

// this code can be placed directly in mapwidgets.html
vis.binds['mapwidgets'] = {
    version: pkgVersion,
    data: {},
    debug: true,
    parseMapConfig: function (rawValue) {
        try {
            const config = JSON.parse(rawValue || '{}');
            if (config === null || typeof config !== 'object' || Array.isArray(config)) {
                const text =
                    typeof _ === 'function'
                        ? _('Invalid JSON configuration: %s', 'root value must be an object')
                        : 'Invalid JSON configuration: root value must be an object';

                return {
                    config: {},
                    errorText: text,
                    valid: false,
                };
            }

            return {
                config,
                errorText: '',
                valid: true,
            };
        } catch (error) {
            const message = error?.message || String(error);
            const text =
                typeof _ === 'function'
                    ? _('Invalid JSON configuration: %s', message)
                    : `Invalid JSON configuration: ${message}`;

            return {
                config: {},
                errorText: text,
                valid: false,
            };
        }
    },
    hasFitBounds: function (config) {
        const types = ['marker', 'polyline', 'polygon', 'rectangle', 'circle'];

        return types.some(
            type => Array.isArray(config?.[type]) && config[type].some(item => item?.iobOptions?.fitBounds === true),
        );
    },
    validators: {
        latLngPair: p => Array.isArray(p) && p.length === 2 && Number.isFinite(p[0]) && Number.isFinite(p[1]),
        latLngAttributes: (lat, lng) => Number.isFinite(lat) && Number.isFinite(lng),
        latLngArray: arr =>
            Array.isArray(arr) &&
            arr.length > 0 &&
            arr.every(p => Array.isArray(p) && p.length === 2 && Number.isFinite(p[0]) && Number.isFinite(p[1])),
        bounds: b =>
            Array.isArray(b) &&
            b.length === 2 &&
            b.every(p => Array.isArray(p) && p.length === 2 && Number.isFinite(p[0]) && Number.isFinite(p[1])),
    },
    lHandlers: {
        marker: {
            validate: item =>
                vis.binds['mapwidgets'].validators.latLngPair(item?.latlng) ||
                vis.binds['mapwidgets'].validators.latLngAttributes(item?.lat, item?.lng),
            create: (map, fg, item, widgetID) => {
                let newoptions = { ...item.options };
                if (newoptions.icon) {
                    vis.binds['mapwidgets'].setIcon(newoptions, widgetID);
                }
                let mapOrLayer = item.iobOptions?.fitBounds ? fg : map;
                let layer =
                    Number.isFinite(item.lat) && Number.isFinite(item.lng)
                        ? L.marker([item.lat, item.lng], newoptions ?? {}).addTo(mapOrLayer)
                        : L.marker(item.latlng, newoptions ?? {}).addTo(mapOrLayer);
                if (item.popup) {
                    vis.binds['mapwidgets'].setPopup(layer, item);
                }
                if (item.tooltip) {
                    vis.binds['mapwidgets'].setTooltip(layer, item);
                }
                return layer;
            },
            getKey: item => hash(item),
        },
        polyline: {
            validate: item => vis.binds['mapwidgets'].validators.latLngArray(item?.latlng),
            create: (map, fg, item, _widgetID) => {
                let mapOrLayer = item.iobOptions?.fitBounds ? fg : map;
                let layer = L.polyline(item.latlng, item.options ?? {}).addTo(mapOrLayer);
                return layer;
            },
            getKey: item => hash(item),
        },
        polygon: {
            validate: item => vis.binds['mapwidgets'].validators.latLngArray(item?.latlng),
            create: (map, fg, item, _widgetID) => {
                let mapOrLayer = item.iobOptions?.fitBounds ? fg : map;
                let layer = L.polygon(item.latlng, item.options ?? {}).addTo(mapOrLayer);
                if (item.popup) {
                    vis.binds['mapwidgets'].setPopup(layer, item);
                }
                if (item.tooltip) {
                    vis.binds['mapwidgets'].setTooltip(layer, item);
                }
                return layer;
            },
            getKey: item => hash(item),
        },
        rectangle: {
            // rectangle arbeitet mit bounds: [[lat1,lng1],[lat2,lng2]]
            validate: item => vis.binds['mapwidgets'].validators.bounds(item?.latlng),
            create: (map, fg, item, _widgetID) => {
                let mapOrLayer = item.iobOptions?.fitBounds ? fg : map;
                let layer = L.rectangle(item.latlng, item.options ?? {}).addTo(mapOrLayer);
                if (item.popup) {
                    vis.binds['mapwidgets'].setPopup(layer, item);
                }
                if (item.tooltip) {
                    vis.binds['mapwidgets'].setTooltip(layer, item);
                }
                return layer;
            },
            getKey: item => hash(item),
        },
        circle: {
            // circle benötigt latlng + radius
            validate: item =>
                vis.binds['mapwidgets'].validators.latLngPair(item?.latlng) && Number.isFinite(item?.options?.radius),
            create: (map, fg, item, _widgetID) => {
                let mapOrLayer = item.iobOptions?.fitBounds ? fg : map;
                let layer = L.circle(item.latlng, { ...(item.options ?? {}), radius: item.options.radius }).addTo(
                    mapOrLayer,
                );
                if (item.popup) {
                    vis.binds['mapwidgets'].setPopup(layer, item);
                }
                if (item.tooltip) {
                    vis.binds['mapwidgets'].setTooltip(layer, item);
                }
                return layer;
            },
            getKey: item => hash(item),
        },
    },
    showVersion: function () {
        if (vis.binds['mapwidgets'].version) {
            console.log(`Version mapwidgets: ${vis.binds['mapwidgets'].version}`);
            vis.binds['mapwidgets'].version = null;
        }
    },
    leaflet: {
        createWidget: async function (widgetID, view, data, style) {
            var $div = $(`#${widgetID}`);
            // if nothing found => wait
            if (!$div.length) {
                return setTimeout(function () {
                    vis.binds['mapwidgets'].leaflet.createWidget(widgetID, view, data, style);
                }, 100);
            }
            this.visMapwidgets = vis.binds['mapwidgets'];

            // mapwidgets_oid/id;mapwidgets_lat/number,-90,90;mapwidgets_lon/number,-180,180;mapwidgets_zoom/number,0;
            //frankfurt 50.11552 8.68417
            const parsedConfig = data['mapwidgets_oid']
                ? this.visMapwidgets.parseMapConfig(vis.states.attr(`${data['mapwidgets_oid']}.val`) || '{}')
                : { config: {}, errorText: '', valid: true };
            let config = parsedConfig.config;
            let lat = data['mapwidgets_lat'] ? parseFloat(data['mapwidgets_lat']) : 50.11552;
            let lon = data['mapwidgets_lon'] ? parseFloat(data['mapwidgets_lon']) : 8.68417;
            let zoom = data['mapwidgets_zoom'] ? parseFloat(data['mapwidgets_zoom']) : 13;
            let expose = data['mapwidgets_expose'] ? Boolean(data['mapwidgets_expose']) : false;
            let daynight = data['mapwidgets_daynightenabled'] ? Boolean(data['mapwidgets_daynightenabled']) : false;
            let daynightColor = data['mapwidgets_daynightcolor'] ? String(data['mapwidgets_daynightcolor']) : '#000000';
            let daynightOpacity = data['mapwidgets_daynightopacity'] ? Number(data['mapwidgets_daynightopacity']) : 0.1;
            let daynightFillColor = data['mapwidgets_daynightfillcolor']
                ? String(data['mapwidgets_daynightfillcolor'])
                : '#000000';
            let daynightFillOpacity = data['mapwidgets_daynightfillopacity']
                ? Number(data['mapwidgets_daynightfillopacity'])
                : 0.3;

            vis.binds['mapwidgets'].data[widgetID] = vis.binds['mapwidgets'].data[widgetID] || {
                marker: {},
                polyline: {},
                polygon: {},
                rectangle: {},
                circle: {},
                fitBounds: false,
            };
            let visdata = vis.binds['mapwidgets'].data[widgetID];
            visdata.config = config;
            visdata.configParseErrorText = parsedConfig.errorText;

            function onChange(e, newValue) {
                console.log('onChange');
                let visdata = vis.binds['mapwidgets'].data[widgetID];
                const parsed = vis.binds['mapwidgets'].parseMapConfig(newValue);
                visdata.configParseErrorText = parsed.errorText;

                if (parsed.valid) {
                    visdata.oldConfig = visdata.config;
                    visdata.config = parsed.config;
                    vis.binds['mapwidgets'].leaflet.render(widgetID, view, data, style);
                } else if (vis.editMode) {
                    vis.binds['mapwidgets'].leaflet.render(widgetID, view, data, style);
                } else {
                    console.warn(parsed.errorText);
                }
            }

            if (data['mapwidgets_oid']) {
                if (!vis.editMode) {
                    vis.binds['mapwidgets'].bindStates($div, [data['mapwidgets_oid']], onChange);
                }
            }

            L.Icon.Default.imagePath = 'widgets/mapwidgets/dist/images/';
            if (!visdata.map || $(`#${widgetID} .mapwidgetsLeaflet`).length == 0) {
                let text = '';
                text += `<div class="mapwidgetsLeaflet"></div>`;
                $(`#${widgetID}`).html(text);
                visdata.map = L.map($(`#${widgetID} .mapwidgetsLeaflet`).get(0)).setView([lat, lon], zoom);
                visdata.featureGroup = L.featureGroup().addTo(visdata.map);
                if (expose) {
                    window.iobroker = window.iobroker || {};
                    window.iobroker.mapwidgets = window.iobroker.mapwidgets || {};
                    window.iobroker.mapwidgets[widgetID] = window.iobroker.mapwidgets[widgetID] || {};
                    window.iobroker.mapwidgets[widgetID].map = visdata.map;
                    console.log('Now you can find the map object under the following name:');
                    console.log(`window.iobroker.mapwidgets.${widgetID}.map`);
                }
            }

            visdata.tileLayer = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 19,
                attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
            }).addTo(visdata.map);

            if (daynight) {
                let options = {
                    color: daynightColor,
                    opacity: daynightOpacity,
                    fillColor: daynightFillColor,
                    fillOpacity: daynightFillOpacity,
                };
                let terminator = L.terminator(options).addTo(visdata.map);
                function terminatorLoop() {
                    setTimeout(function () {
                        terminator.setTime();
                        terminatorLoop();
                    }, 60000);
                }
                if (!vis.editMode) {
                    terminatorLoop();
                }
            }
            this.render(widgetID, view, data, style);
        },
        render(widgetID /* , view, data, style */) {
            this.visMapwidgets.debug && console.log('render');

            let visdata = vis.binds['mapwidgets'].data[widgetID];
            let config = visdata.config;
            visdata.fitBounds = this.visMapwidgets.hasFitBounds(config);

            if (vis.editMode) {
                if (visdata.configParseErrorText) {
                    visdata.schemaErrorsText = visdata.configParseErrorText;
                } else {
                    const ajv = new Ajv2020({
                        allErrors: true,
                        strict: false,
                    });
                    const validate = ajv.compile(schema);
                    const valid = validate(config);
                    visdata.schemaErrorsText = valid ? '' : formatAjvErrors(validate.errors, schema, config);
                }
            }
            this.schemaErrorControl(widgetID);
            let oldConfig = visdata.oldConfig;
            let diffConfig = diff(oldConfig, config);
            let configSet = {
                config,
                oldConfig,
                diffConfig,
            };
            let map = visdata.map;
            let fg = visdata.featureGroup;
            this.icons(visdata, widgetID, configSet);
            this.applyAllGeometryDiffs.call(this, visdata, widgetID, configSet, map, fg);
            if (vis.binds['mapwidgets'].data[widgetID].fitBounds) {
                try {
                    visdata.map.fitBounds(visdata.featureGroup.getBounds());
                } catch {
                    /* empty */
                }
            }
        },
        schemaErrorControl(widgetID) {
            const visdata = vis.binds['mapwidgets'].data[widgetID];
            const map = visdata.map;
            const hasErrors = Boolean(visdata.schemaErrorsText);

            if (visdata.schemaErrorControl) {
                map.removeControl(visdata.schemaErrorControl);
                visdata.schemaErrorControl = null;
            }

            if (!hasErrors) {
                return;
            }

            const SchemaErrorControl = L.Control.extend({
                options: {
                    position: 'bottomright',
                },

                onAdd: function () {
                    const div = L.DomUtil.create('div', 'mapwidgets-schema-error-control');

                    div.innerHTML = `
                        <button class="mapwidgets-schema-error-btn" title="Schemafehler anzeigen">
                            ⚠
                        </button>
                    `;

                    L.DomEvent.disableClickPropagation(div);
                    L.DomEvent.disableScrollPropagation(div);

                    div.querySelector('button').addEventListener('click', () => {
                        vis.binds['mapwidgets'].showSchemaErrorDialog(widgetID);
                    });

                    return div;
                },
            });

            visdata.schemaErrorControl = new SchemaErrorControl();
            map.addControl(visdata.schemaErrorControl);
        },
        applyAllGeometryDiffs(visdata, widgetID, configSet, map, fg) {
            const types = ['marker', 'polyline', 'polygon', 'rectangle', 'circle'];
            for (const type of types) {
                this.visMapwidgets.debug && console.log(`applyAllGeometryDiffs: ${type}`);
                const diff = configSet?.diffConfig?.[type];
                if (!diff) {
                    continue;
                } // nichts zu tun
                const h = this.visMapwidgets.lHandlers[type];
                this.applyArrayDiff({
                    visdata,
                    type,
                    configSet,
                    widgetID,
                    map,
                    fg,
                    getKey: h.getKey,
                    validate: h.validate,
                    create: h.create,
                    // remove: (layer) => layer.remove(), // default
                    gc: true,
                });
            }
        },
        applyArrayDiff({ visdata, type, configSet, widgetID, map, fg, getKey, validate, create, remove, gc = true }) {
            const cfg = configSet?.config ?? {};
            const old = configSet?.oldConfig ?? {};
            const diff = configSet?.diffConfig?.[type] ?? null;

            if (!diff) {
                return;
            }

            // per-Typ Bucket initialisieren
            visdata[type] = visdata[type] || {}; // key -> { index, layer }

            const store = visdata[type];
            const oldArr = Array.isArray(old[type]) ? old[type] : [];
            const newArr = Array.isArray(cfg[type]) ? cfg[type] : [];

            const indices = Object.keys(diff)
                .map(n => parseInt(n, 10))
                .sort((a, b) => a - b);

            const doRemove = (key, layer) => {
                try {
                    remove ? remove(layer) : layer.remove();
                } catch {
                    /* ignore */
                }
                delete store[key];
            };

            for (const i of indices) {
                const change = diff[i]; // undefined => löschen, Objekt => neu/ändern
                const oldItem = oldArr[i]; // evtl. vorher existierend
                // 1) Wenn vorher etwas da war: immer entfernen
                if (oldItem) {
                    const oldKey = getKey(oldItem);
                    const hit = store[oldKey];
                    if (hit?.layer) {
                        doRemove(oldKey, hit.layer);
                    }
                }
                // 2) Bei undefined: explizit löschen, sonst neu erzeugen
                if (change === undefined) {
                    continue;
                }
                const item = newArr[i] ?? change; // failsafe
                if (validate && !validate(item)) {
                    console.warn(`${type} ${i + 1}: validation failed`);
                    continue;
                }
                const layer = create(map, fg, item, widgetID);
                const key = getKey(item);
                store[key] = { index: i, layer };
            }

            // 4) Sicherheit: GC verwaister Einträge (z.B. nach massiven Umbauten außerhalb Diff)
            if (gc && Array.isArray(newArr)) {
                for (const [k, v] of Object.entries(store)) {
                    if (typeof v?.index === 'number' && v.index >= newArr.length) {
                        doRemove(k, v.layer);
                    }
                }
            }
        },
        icons(visdata, widgetID, configSet) {
            this.visMapwidgets.debug && console.log(`do icons`);
            let config = configSet.config;
            if (config.icons) {
                let iconRegistry = this.visMapwidgets.data[widgetID].iconRegistry || {};
                for (const [name, cfg] of Object.entries(config.icons)) {
                    const hasHtml = Object.prototype.hasOwnProperty.call(cfg, 'html');

                    if (hasHtml) {
                        const options = {
                            html: cfg.html,
                            iconSize: cfg.iconSize,
                            iconAnchor: cfg.iconAnchor,
                            popupAnchor: cfg.popupAnchor,
                            className: cfg.className,
                        };

                        if (cfg.bgPos) {
                            options.bgPos = cfg.bgPos;
                        }

                        iconRegistry[name] = L.divIcon(vis.binds['mapwidgets'].compactOptions(options));
                    } else {
                        const options = {
                            iconUrl: cfg.iconUrl,
                            iconRetinaUrl: cfg.iconRetinaUrl,
                            shadowUrl: cfg.shadowUrl,
                            shadowRetinaUrl: cfg.shadowRetinaUrl,
                            iconSize: cfg.iconSize,
                            iconAnchor: cfg.iconAnchor,
                            popupAnchor: cfg.popupAnchor,
                            tooltipAnchor: cfg.tooltipAnchor,
                            shadowSize: cfg.shadowSize,
                            shadowAnchor: cfg.shadowAnchor,
                            className: cfg.className,
                        };

                        iconRegistry[name] = L.icon(vis.binds['mapwidgets'].compactOptions(options));
                    }
                }
                this.visMapwidgets.data[widgetID].iconRegistry = iconRegistry;
            }
        },
    },
    setTooltip(layer, item) {
        if (typeof item.tooltip === 'string') {
            layer.bindTooltip(item.tooltip);
        } else if (item.tooltip.text) {
            layer.bindTooltip(item.tooltip.text, item.tooltip.options || {});
        }
    },
    setPopup(layer, item) {
        if (typeof item.popup === 'string') {
            layer.bindPopup(item.popup);
        } else if (item.popup.text) {
            layer.bindPopup(item.popup.text, item.popup.options || {});
        }
    },
    compactOptions(options) {
        return Object.fromEntries(Object.entries(options).filter(([, value]) => value !== undefined));
    },
    showSchemaErrorDialog(widgetID) {
        const visdata = vis.binds['mapwidgets'].data[widgetID];
        const text = visdata.schemaErrorsText || 'Keine Schemafehler vorhanden.';
        const $widget = $(`#${widgetID}`);

        const width = Math.round($widget.width() * 0.9);
        const height = Math.round($widget.height() * 0.9);

        $('<pre></pre>')
            .addClass('mapwidgets-schema-error-dialog-content')
            .text(text)
            .dialog({
                title: 'Schemafehler',
                modal: true,
                dialogClass: 'mapwidgets-schema-error-dialog',
                width,
                height,
                position: {
                    my: 'center',
                    at: 'center',
                    of: $widget,
                },
                open: function () {
                    $('.ui-widget-overlay').last().addClass('mapwidgets-schema-error-overlay');
                },

                close: function () {
                    $(this).dialog('destroy').remove();
                },
            });
    },
    setIcon(options, widgetID) {
        let iconRegistry = vis.binds['mapwidgets'].data[widgetID].iconRegistry || {};
        if (iconRegistry[options.icon]) {
            options.icon = iconRegistry[options.icon];
        } else {
            delete options.icon;
        }
    },
    bindStates: function (elem, bound, change_callback) {
        const $div = $(elem);
        const boundstates = $div.data('bound');
        if (boundstates) {
            for (let i = 0; i < boundstates.bound.length; i++) {
                vis.states.unbind(boundstates.bound[i], boundstates.bindHandler);
            }
        }
        $div.data('bound', null);

        for (let i = 0; i < bound.length; i++) {
            bound[i] = `${bound[i]}.val`;
            vis.states.bind(bound[i], change_callback);
        }
        $div.data('bound', { bound, bindHandler: change_callback });
    },
    loadScript: function (src, { attrs = {}, timeout = 15000 } = {}) {
        return new Promise((resolve, reject) => {
            // Duplikate vermeiden
            if ([...document.scripts].some(s => s.src === src)) {
                resolve('already-loaded');
                return;
            }
            const s = document.createElement('script');
            s.src = src;
            // optional: als ES-Modul laden
            if (attrs.type === 'module') {
                s.type = 'module';
            }
            // optional: SRI/CORS
            if (attrs.integrity) {
                s.integrity = attrs.integrity;
            }
            if (attrs.crossOrigin) {
                s.crossOrigin = attrs.crossOrigin;
            }

            const timer = setTimeout(() => {
                s.remove();
                reject(new Error(`Script load timeout: ${src}`));
            }, timeout);

            s.onload = () => {
                clearTimeout(timer);
                resolve();
            };
            s.onerror = () => {
                clearTimeout(timer);
                reject(new Error(`Script failed: ${src}`));
            };

            document.head.appendChild(s); // dynamisch geladene Skripte sind effektiv async
        });
    },
    loadCSS: function (href, { attrs = {}, timeout = 15000 } = {}) {
        return new Promise((resolve, reject) => {
            // Duplikate vermeiden
            if ([...document.querySelectorAll('link[rel="stylesheet"]')].some(l => l.href === href)) {
                resolve('already-loaded');
                return;
            }
            const l = document.createElement('link');
            l.rel = 'stylesheet';
            l.href = href;
            // optional: SRI/CORS (bei CSS seltener genutzt, aber möglich)
            if (attrs.integrity) {
                l.integrity = attrs.integrity;
            }
            if (attrs.crossOrigin) {
                l.crossOrigin = attrs.crossOrigin;
            }
            if (attrs.media) {
                l.media = attrs.media;
            } // z.B. 'print' oder '(min-width: 768px)'
            const timer = setTimeout(() => {
                l.remove();
                reject(new Error(`CSS load timeout: ${href}`));
            }, timeout);

            l.onload = () => {
                clearTimeout(timer);
                resolve();
            };
            l.onerror = () => {
                clearTimeout(timer);
                reject(new Error(`CSS failed: ${href}`));
            };
            document.head.appendChild(l);
        });
    },
    waitForGlobal: function (path, interval = 100, timeout = 0) {
        return new Promise((resolve, reject) => {
            const parts = path.split('.');
            const start = Date.now();
            const check = () => {
                let obj = window;
                for (const p of parts) {
                    if (obj && p in obj) {
                        obj = obj[p];
                    } else {
                        obj = undefined;
                        break;
                    }
                }
                if (obj !== undefined) {
                    resolve(obj);
                    return;
                }
                if (timeout > 0 && Date.now() - start > timeout) {
                    reject(new Error(`Timeout: ${path} not found after ${timeout}ms`));
                    return;
                }
                setTimeout(check, interval);
            };
            check();
        });
    },
    provideFunctions: function () {
        this.visMapwidgets = vis.binds['mapwidgets'];
        window.iobroker = window.iobroker || {};
        window.iobroker.mapwidgets = window.iobroker.mapwidgets || {};
        window.iobroker.mapwidgets.loadScript = this.visMapwidgets.loadScript;
        window.iobroker.mapwidgets.loadCSS = this.visMapwidgets.loadCSS;
        window.iobroker.mapwidgets.waitForGlobal = this.visMapwidgets.waitForGlobal;
    },
};

vis.binds['mapwidgets'].showVersion();
vis.binds['mapwidgets'].provideFunctions();
