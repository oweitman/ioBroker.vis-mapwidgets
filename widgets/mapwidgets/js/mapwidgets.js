/*
    ioBroker.vis mapwidgets Widget-Set

    Copyright 2025 oweitman oweitman@gmx.de
*/
'use strict';

// const { config } = require("chai");

/* global $, vis, systemDictionary,L,window */

import '../../node_modules/leaflet/dist/leaflet.css';
import '../../node_modules/leaflet/dist/leaflet.js';
import '../css/style.css';
import { version as pkgVersion } from '../../../package.json';
import { diff } from 'deep-object-diff';
var hash = require('object-hash');

var translations = require('../i18n/translations.json');
$.extend(true, systemDictionary, translations);

// this code can be placed directly in mapwidgets.html
vis.binds['mapwidgets'] = {
    version: pkgVersion,
    data: {},
    debug: true,
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
            create: (map, item, widgetID) => {
                let newoptions = { ...item.options };
                if (newoptions.icon) {
                    vis.binds['mapwidgets'].setIcon(newoptions, widgetID);
                }
                let layer =
                    item.lat && item.lng
                        ? L.marker([item.lat, item.lng], newoptions ?? {}).addTo(map)
                        : L.marker(item.latlng, newoptions ?? {}).addTo(map);
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
            create: (map, item) => {
                return L.polyline(item.latlng, item.options ?? {}).addTo(map);
            },
            getKey: item => hash(item),
        },
        polygon: {
            validate: item => vis.binds['mapwidgets'].validators.latLngArray(item?.latlng),
            create: (map, item) => {
                let layer = L.polygon(item.latlng, item.options ?? {}).addTo(map);
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
            create: (map, item) => {
                let layer = L.rectangle(item.latlng, item.options ?? {}).addTo(map);
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
            create: (map, item) => {
                let layer = L.circle(item.latlng, { ...(item.options ?? {}), radius: item.options.radius }).addTo(map);
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
            let config = data['mapwidgets_oid'] ? JSON.parse(vis.states.attr(`${data['mapwidgets_oid']}.val`)) : [];
            let lat = data['mapwidgets_lat'] ? parseFloat(data['mapwidgets_lat']) : 50.11552;
            let lon = data['mapwidgets_lon'] ? parseFloat(data['mapwidgets_lon']) : 8.68417;
            let zoom = data['mapwidgets_zoom'] ? parseFloat(data['mapwidgets_zoom']) : 13;
            let expose = data['mapwidgets_expose'] ? Boolean(data['mapwidgets_expose']) : false;

            if (!vis.binds['mapwidgets'].data[widgetID]) {
                vis.binds['mapwidgets'].data[widgetID] = {
                    marker: {},
                    polyline: {},
                    polygon: {},
                    rectangle: {},
                    circle: {},
                };
            }
            let visdata = vis.binds['mapwidgets'].data[widgetID];
            visdata.config = config;

            function onChange(e, newValue) {
                console.log('onChange');
                let visdata = vis.binds['mapwidgets'].data[widgetID];
                visdata.oldConfig = visdata.config;
                visdata.config = JSON.parse(newValue);
                vis.binds['mapwidgets'].leaflet.render(widgetID, view, data, style);
            }

            if (data['mapwidgets_oid']) {
                if (!vis.editMode) {
                    vis.binds['mapwidgets'].bindStates($div, [data['mapwidgets_oid']], onChange);
                }
            }

            L.Icon.Default.imagePath = 'widgets/mapwidgets/dist/images/';
            if (!visdata.map) {
                let text = '';
                text += `<div class="mapwidgetsLeaflet"></div>`;
                $(`#${widgetID}`).html(text);
                visdata.map = L.map($(`#${widgetID} .mapwidgetsLeaflet`).get(0)).setView([lat, lon], zoom);
                if (expose) {
                    window.iobroker = window.iobroker || {};
                    window.iobroker.mapwidgets = window.iobroker.mapwidgets || {};
                    window.iobroker.mapwidgets[widgetID] = window.iobroker.mapwidgets[widgetID] || {};
                    window.iobroker.mapwidgets[widgetID].map = visdata.map;
                }
            }

            L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 19,
                attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
            }).addTo(visdata.map);

            this.render(widgetID, view, data, style);
        },
        render(widgetID /* , view, data, style */) {
            this.visMapwidgets.debug && console.log('render');

            let visdata = vis.binds['mapwidgets'].data[widgetID];
            let config = visdata.config;
            let oldConfig = visdata.oldConfig;
            let diffConfig = diff(oldConfig, config);
            let configSet = {
                config,
                oldConfig,
                diffConfig,
            };
            let map = visdata.map;
            this.icons(visdata, widgetID, configSet);
            this.applyAllGeometryDiffs.call(this, visdata, widgetID, configSet, map);
        },
        applyAllGeometryDiffs(visdata, widgetID, configSet, map) {
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
                    getKey: h.getKey,
                    validate: h.validate,
                    create: h.create,
                    // remove: (layer) => layer.remove(), // default
                    gc: true,
                });
            }
        },
        applyArrayDiff({ visdata, type, configSet, widgetID, map, getKey, validate, create, remove, gc = true }) {
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
                const layer = create(map, item, widgetID);
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
                    if (cfg.html) {
                        iconRegistry[name] = L.divIcon({
                            iconUrl: cfg.iconUrl,
                            shadowUrl: cfg.shadowUrl ? cfg.shadowUrl : undefined,
                            iconSize: cfg.iconSize,
                            iconAnchor: cfg.iconAnchor,
                            popupAnchor: cfg.popupAnchor,
                            shadowSize: cfg.shadowSize,
                            shadowAnchor: cfg.shadowAnchor,
                            html: cfg.html,
                            bgPos: cfg.bgPos,
                        });
                    } else {
                        iconRegistry[name] = L.icon({
                            iconUrl: cfg.iconUrl,
                            shadowUrl: cfg.shadowUrl ? cfg.shadowUrl : undefined,
                            iconSize: cfg.iconSize,
                            iconAnchor: cfg.iconAnchor,
                            popupAnchor: cfg.popupAnchor,
                            shadowSize: cfg.shadowSize,
                            shadowAnchor: cfg.shadowAnchor,
                        });
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
};

vis.binds['mapwidgets'].showVersion();
