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
            let visdata = vis.binds['mapwidgets'].data[widgetID];
            let config = visdata.config;
            let oldConfig = visdata.oldConfig;
            let diffConfig = diff(oldConfig, config);
            let configSet = {
                config,
                oldConfig,
                diffConfig,
            };
            this.icons(visdata, widgetID, configSet);
            this.marker(visdata, widgetID, configSet, visdata.map);
            this.polyline(visdata, widgetID, configSet, visdata.map);
            this.polygon(visdata, widgetID, configSet, visdata.map);
            this.rectangle(visdata, widgetID, configSet, visdata.map);
            this.circle(visdata, widgetID, configSet, visdata.map);
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
        marker(visdata, widgetID, configSet, map) {
            this.visMapwidgets.debug && console.log(`do marker`);
            let config = configSet.config;
            if (!config || !Array.isArray(config.marker)) {
                return;
            }
            const markerKeys = Object.keys(configSet.diffConfig.marker || {});
            markerKeys.forEach(index => {
                if (!configSet.config?.marker?.[index]) {
                    if (configSet.oldConfig?.marker?.[index]) {
                        let hashValue = hash(configSet.oldConfig.marker[index]);
                        visdata.marker[hashValue].marker.remove();
                        delete visdata.marker[hashValue];
                    }
                }
            });
            config.marker.forEach((item, index) => {
                let { latlng, lat, lng, options = {}, popup, tooltip } = item;
                if (configSet.diffConfig.marker?.[index]) {
                    if (configSet.oldConfig?.marker?.[index]) {
                        let hashValue = hash(configSet.oldConfig.marker[index]);
                        visdata.marker[hashValue].marker.remove();
                        delete visdata.marker[hashValue];
                    }
                    if (Array.isArray(latlng) && latlng.length == 2) {
                        [lat, lng] = latlng;
                    }
                    let newOptions = { ...options };
                    if (newOptions.icon) {
                        newOptions.icon = this.visMapwidgets.data[widgetID].iconRegistry[newOptions.icon] || undefined;
                    }
                    const marker = L.marker([lat, lng], newOptions).addTo(map);
                    if (popup) {
                        if (typeof popup === 'string') {
                            marker.bindPopup(popup);
                        } else if (popup.text) {
                            marker.bindPopup(popup.text, popup.options || {});
                        }
                    }
                    if (tooltip) {
                        if (typeof tooltip === 'string') {
                            marker.bindTooltip(tooltip);
                        } else if (tooltip.text) {
                            marker.bindTooltip(tooltip.text, tooltip.options || {});
                        }
                    }
                    visdata.marker[hash(item)] = { index, marker };
                }
            });
        },
        polyline(visdata, widgetID, configSet, map) {
            this.visMapwidgets.debug && console.log(`do polyline`);
            let config = configSet.config;
            if (!config || !Array.isArray(config.polyline)) {
                return;
            }
            config.polyline.forEach((item, index) => {
                let { latlng, options = {} } = item;
                if (configSet.diffConfig.polyline?.[index]) {
                    if (configSet.oldConfig?.polyline?.[index]) {
                        let hashValue = hash(configSet.oldConfig.polyline[index]);
                        visdata.polyline[hashValue].polyline.remove();
                        delete visdata.polyline[hashValue];
                    }
                    if (!Array.isArray(latlng) || !latlng.length) {
                        console.warn(`polyline ${index + 1}: latlng expected`);
                        return;
                    }
                    const polyline = L.polyline(latlng, options).addTo(map);
                    visdata.polyline[hash(item)] = { index, polyline };
                }
            });
            const polylineKeys = Object.keys(configSet.diffConfig.polyline || {});
            polylineKeys.forEach(index => {
                if (!configSet.config?.polyline?.[index]) {
                    if (configSet.oldConfig?.polyline?.[index]) {
                        let hashValue = hash(configSet.oldConfig.polyline[index]);
                        visdata.polyline[hashValue].polyline.remove();
                        delete visdata.polyline[hashValue];
                    }
                }
            });
        },
        polygon(visdata, widgetID, configSet, map) {
            this.visMapwidgets.debug && console.log(`do polygon`);
            let config = configSet.config;
            if (!config || !Array.isArray(config.polygon)) {
                return;
            }
            config.polygon.forEach((item, index) => {
                let { latlng, options = {}, popup, tooltip } = item;
                if (configSet.diffConfig.polygon?.[index]) {
                    if (configSet.oldConfig?.polygon?.[index]) {
                        let hashValue = hash(configSet.oldConfig.polygon[index]);
                        visdata.polygon[hashValue].polygon.remove();
                        delete visdata.polygon[hashValue];
                    }
                    if (!Array.isArray(latlng) || !latlng.length) {
                        console.warn(`polygon ${index + 1}: latlng expected`);
                        return;
                    }
                    const polygon = L.polygon(latlng, options).addTo(map);

                    if (popup) {
                        if (typeof popup === 'string') {
                            polygon.bindPopup(popup);
                        } else if (popup.text) {
                            polygon.bindPopup(popup.text, popup.options || {});
                        }
                    }
                    if (tooltip) {
                        if (typeof tooltip === 'string') {
                            polygon.bindTooltip(tooltip);
                        } else if (tooltip.text) {
                            polygon.bindTooltip(tooltip.text, tooltip.options || {});
                        }
                    }
                    visdata.polygon[hash(item)] = { index, polygon };
                }
            });
            const polygonKeys = Object.keys(configSet.diffConfig.polygon || {});
            polygonKeys.forEach(index => {
                if (!configSet.config?.polygon?.[index]) {
                    if (configSet.oldConfig?.polygon?.[index]) {
                        let hashValue = hash(configSet.oldConfig.polygon[index]);
                        visdata.polygon[hashValue].polygon.remove();
                        delete visdata.polygon[hashValue];
                    }
                }
            });
        },
        rectangle(visdata, widgetID, configSet, map) {
            this.visMapwidgets.debug && console.log(`do rectangle`);
            let config = configSet.config;
            if (!config || !Array.isArray(config.rectangle)) {
                return;
            }
            config.rectangle.forEach((item, index) => {
                let { latlng, options = {}, popup, tooltip } = item;
                if (configSet.diffConfig.rectangle?.[index]) {
                    if (configSet.oldConfig?.rectangle?.[index]) {
                        let hashValue = hash(configSet.oldConfig.rectangle[index]);
                        visdata.rectangle[hashValue].rectangle.remove();
                        delete visdata.rectangle[hashValue];
                    }
                    if (!Array.isArray(latlng) || !latlng.length) {
                        console.warn(`rectangle ${index + 1}: latlng expected`);
                        return;
                    }
                    const rectangle = L.rectangle(latlng, options).addTo(map);

                    if (popup) {
                        if (typeof popup === 'string') {
                            rectangle.bindPopup(popup);
                        } else if (popup.text) {
                            rectangle.bindPopup(popup.text, popup.options || {});
                        }
                    }
                    if (tooltip) {
                        if (typeof tooltip === 'string') {
                            rectangle.bindTooltip(tooltip);
                        } else if (tooltip.text) {
                            rectangle.bindTooltip(tooltip.text, tooltip.options || {});
                        }
                    }
                    visdata.rectangle[hash(item)] = { index, rectangle };
                }
            });
            const rectangleKeys = Object.keys(configSet.diffConfig.rectangle || {});
            rectangleKeys.forEach(index => {
                if (!configSet.config?.rectangle?.[index]) {
                    if (configSet.oldConfig?.rectangle?.[index]) {
                        let hashValue = hash(configSet.oldConfig.rectangle[index]);
                        visdata.rectangle[hashValue].rectangle.remove();
                        delete visdata.rectangle[hashValue];
                    }
                }
            });
        },
        circle(visdata, widgetID, configSet, map) {
            this.visMapwidgets.debug && console.log(`do circle`);
            let config = configSet.config;
            if (!config || !Array.isArray(config.rectangle)) {
                return;
            }
            config.circle.forEach((item, index) => {
                let { latlng, options = {}, popup, tooltip } = item;
                if (configSet.diffConfig.circle?.[index]) {
                    if (configSet.oldConfig?.circle?.[index]) {
                        let hashValue = hash(configSet.oldConfig.circle[index]);
                        visdata.circle[hashValue].circle.remove();
                        delete visdata.circle[hashValue];
                    }
                    if (!Array.isArray(latlng) || !latlng.length) {
                        console.warn(`circle ${index + 1}: latlng expected`);
                        return;
                    }
                    const circle = L.circle(latlng, options).addTo(map);
                    if (popup) {
                        if (typeof popup === 'string') {
                            circle.bindPopup(popup);
                        } else if (popup.text) {
                            circle.bindPopup(popup.text, popup.options || {});
                        }
                    }
                    if (tooltip) {
                        if (typeof tooltip === 'string') {
                            circle.bindTooltip(tooltip);
                        } else if (tooltip.text) {
                            circle.bindTooltip(tooltip.text, tooltip.options || {});
                        }
                    }
                    visdata.circle[hash(item)] = { index, circle };
                }
            });
            const circleKeys = Object.keys(configSet.diffConfig.circle || {});
            circleKeys.forEach(index => {
                if (!configSet.config?.circle?.[index]) {
                    if (configSet.oldConfig?.circle?.[index]) {
                        let hashValue = hash(configSet.oldConfig.circle[index]);
                        visdata.circle[hashValue].circle.remove();
                        delete visdata.circle[hashValue];
                    }
                }
            });
        },
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
