/*
    ioBroker.vis mapwidgets Widget-Set

    Copyright 2025 oweitman oweitman@gmx.de
*/
'use strict';

// const { config } = require("chai");

/* global $, vis, systemDictionary,_ */

import "../../node_modules/leaflet/dist/leaflet.css";
import "../../node_modules/leaflet/dist/leaflet.js";
import "../css/style.css";
import { version as pkgVersion } from '../../../package.json';
var translations = require('../i18n/translations.json');
$.extend(true, systemDictionary, translations);

// this code can be placed directly in mapwidgets.html
vis.binds['mapwidgets'] = {
    version: pkgVersion,
    data: {},
    debug: true,
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
                vis.binds['mapwidgets'].data[widgetID] = {};
            }
            vis.binds['mapwidgets'].data[widgetID].config = config;

            let text = '';
            text += `<div class="mapwidgetsLeaflet"></div>`;

            $(`#${widgetID}`).html(text);
            L.Icon.Default.imagePath = "widgets/mapwidgets/dist/images/";
            var map = L.map($(`#${widgetID} .mapwidgetsLeaflet`).get(0)).setView([lat, lon], zoom);
            if (expose) {
                window.iobroker = window.iobroker || {};
                window.iobroker.mapwidgets = window.iobroker.mapwidgets || {};
                window.iobroker.mapwidgets[widgetID] = window.iobroker.mapwidgets[widgetID] || {};
                window.iobroker.mapwidgets[widgetID].map = map;
            }

            L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 19,
                attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            }).addTo(map);
            this.icons(widgetID, config, map);
            this.marker(widgetID, config, map);
            this.polyline(widgetID, config, map);
            this.polygon(widgetID, config, map);
            this.rectangle(widgetID, config, map);
            this.circle(widgetID, config, map);

            //this.render(widgetID);
        },
        icons(widgetID, config, map) {
            this.visMapwidgets.debug && console.log(`do icons`);
            if (config.icons) {
                let iconRegistry = this.visMapwidgets.data[widgetID].iconRegistry || {};
                for (const [name, cfg] of Object.entries(config.icons)) {
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
                this.visMapwidgets.data[widgetID].iconRegistry = iconRegistry;
            }
        },
        marker(widgetID, config, map) {
            this.visMapwidgets.debug && console.log(`do marker`);
            if (config.marker) {
                config.marker.forEach(({ lat, lng, options = {}, popup, tooltip }, index) => {
                    options.title = `Marker ${index + 1} ${options.title}` || `Marker ${index + 1}`;
                    if (options.icon) {
                        options.icon = this.visMapwidgets.data[widgetID].iconRegistry[options.icon] || undefined;
                    };
                    const m = L.marker([lat, lng], options).addTo(map);
                    if (popup) m.bindPopup(popup);
                    if (tooltip) {
                        if (typeof tooltip === 'string') m.bindTooltip(tooltip);
                        else if (tooltip.text) m.bindTooltip(tooltip.text, tooltip.options || {});
                    }
                });
            }

        },
        polyline(widgetID, config, map) {
            this.visMapwidgets.debug && console.log(`do polyline`);

            if (!config || !Array.isArray(config.polyline)) return;

            config.polyline.forEach(({ latlng, options = {} }, index) => {
                if (!Array.isArray(latlng) || !latlng.length) {
                    console.warn(`polyline ${index + 1}: latlng expected`);
                    return;
                }
                const pl = L.polyline(latlng, options).addTo(map);
            });
        },
        polygon(widgetID, config, map) {
            this.visMapwidgets.debug && console.log(`do polygon`);

            if (!config || !Array.isArray(config.polygon)) return;

            config.polygon.forEach(({ latlng, options = {} }, index) => {
                if (!Array.isArray(latlng) || !latlng.length) {
                    console.warn(`polygon ${index + 1}: latlng expected`);
                    return;
                }
                const pl = L.polygon(latlng, options).addTo(map);
            });
        },
        rectangle(widgetID, config, map) {
            this.visMapwidgets.debug && console.log(`do rectangle`);

            if (!config || !Array.isArray(config.rectangle)) return;

            config.rectangle.forEach(({ latlng, options = {} }, index) => {
                if (!Array.isArray(latlng) || !latlng.length) {
                    console.warn(`rectangle ${index + 1}: latlng expected`);
                    return;
                }
                const pl = L.rectangle(latlng, options).addTo(map);
            });
        },
        circle(widgetID, config, map) {
            this.visMapwidgets.debug && console.log(`do circle`);

            if (!config || !Array.isArray(config.rectangle)) return;

            config.circle.forEach(({ latlng, options = {} }, index) => {
                if (!Array.isArray(latlng) || !latlng.length) {
                    console.warn(`circle ${index + 1}: latlng expected`);
                    return;
                }
                const pl = L.circle(latlng, options).addTo(map);
            });
        },

        async render(widgetID) {
            this.visMapwidgets.debug && console.log(`render browser`);
            let text = '';
            text += `<div class="mapwidgetsLeaflet"></div>`;

            $(`#${widgetID}`).html(text);
            L.Icon.Default.imagePath = "widgets/mapwidgets/dist/images/";
            var map = L.map($(`#${widgetID} .mapwidgetsLeaflet`).get(0)).setView([51.505, -0.09], 13);
            L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 19,
                attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            }).addTo(map);
            var marker = L.marker([51.5, -0.09]).addTo(map);
            var circle = L.circle([51.508, -0.11], {
                color: 'red',
                fillColor: '#f03',
                fillOpacity: 0.5,
                radius: 500
            }).addTo(map);
            var polygon = L.polygon([
                [51.509, -0.08],
                [51.503, -0.06],
                [51.51, -0.047]
            ]).addTo(map);
            var a = 1;
        },
    },
};

vis.binds['mapwidgets'].showVersion();
