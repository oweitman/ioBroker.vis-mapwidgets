# ioBroker.mapwidgets

![Logo](admin/mapwidgets-small.svg)

[![NPM version](https://img.shields.io/npm/v/ioBroker.vis-mapwidgets.svg)](https://www.npmjs.com/package/ioBroker.vis-mapwidgets)
[![Downloads](https://img.shields.io/npm/dm/ioBroker.vis-mapwidgets.svg)](https://www.npmjs.com/package/ioBroker.vis-mapwidgets)
![Number of Installations](https://iobroker.live/badges/mapwidgets-installed.svg)
![Current version in stable repository](https://iobroker.live/badges/mapwidgets-stable.svg)
[![nycrc config on GitHub](https://img.shields.io/nycrc/oweitman/ioBroker.vis-mapwidgets?preferredThreshold=functions)](https://html-preview.github.io/?url=https://github.com/oweitman/ioBroker.vis-mapwidgets/blob/main/coverage/index.html)

[![NPM](https://nodei.co/npm/ioBroker.vis-mapwidgets.png?downloads=true)](https://nodei.co/npm/ioBroker.vis-mapwidgets/)

**Tests:** ![Test and Release](https://github.com/oweitman/ioBroker.vis-mapwidgets/workflows/Test%20and%20Release/badge.svg)

## mapwidgets adapter for ioBroker

With this adapter, you can display various elements on a map using the
Leaflet widget.
These elements can be configured using a JSON data structure.

Currently, the following elements are supported:

- Markers (custom icons can be referenced by ID)
- Icons
- Polylines (e.g., for tracks)
- Polygons (geometric shapes)
- Rectangles
- Circles

For advanced use cases, the map object can be accessed via a dedicated
variable and manipulated using JavaScript.

This initial version is a minimal implementation.

Additional features can be added upon request, depending on their relevance and feasibility.

## Configuration

The adapter itself does not have any configuration options.

The configuration of the widget is described below.

## vis and widgets

The following widgets actually exists

- [`Map Leaflet`](#map-leaflet) - Displays map data using the Leaflet library <https://leafletjs.com/>.

### Map Leaflet

Display of various elements on a map.

#### Widget configuration

| Name                | Description                                                             |
| ------------------- | ----------------------------------------------------------------------- |
| `mapwidgets_oid`    | Data point containing the element configuration                         |
| `mapwidgets_lat`    | Latitude of the map center                                              |
| `mapwidgets_lon`    | Longitude of the map center                                             |
| `mapwidgets_zoom`   | Initial zoom level                                                      |
| `mapwidgets_expose` | Expose the map object under `window.iobroker.mapwidgets.<widgetID>.map` |

#### Map Configuration

The map object consists of several main components,
all of which can be configured independently:

```json
{
    "marker": [],
    "icons": {},
    "polyline": [],
    "polygon": [],
    "rectangle": [],
    "circle": []
}
```

For testing purposes, an example dataset is included
in the file examples/testdata.json, which can be directly saved to a data point.
This data contains sample configurations for all elements, which are
displayed on a map in the Frankfurt area.

For all configurations, the principle is that only the mandatory amount
of information is required to display an element.

The assignment of the individual attributes is described below:

##### Marker

This contains an array of individual marker informations objects.

```json
[
    {
        "lat": 50.182,
        "lng": 8.682,
        "options": {
            "title": "Default"
        },
        "popup": "<b>Default Marker</b>",
        "tooltip": "Hover me"
    },
    {
        "lat": 50.171,
        "lng": 8.695,
        "options": {
            "icon": "orangeleaf",
            "draggable": true,
            "title": "Roter Punkt (draggable)"
        }
    }
]
```

Latitude and longitude are mandatory; all other parameters are optional.

For a custom icon, the unique ID of the icon is specified as a string
(see the `icons` configuration).

For Tooltip and Popup see [Tooltip](#tooltip) and [Popup](#popup).

Detailed descriptions of the parameters can be found here:

<https://leafletjs.com/reference.html#marker>

##### Icon

This contains an array of object of individual icon informations.

```json
{
    "greenleaf": {
        "iconUrl": "/vis.0/leaf-green.png",
        "iconSize": [25, 41],
        "iconAnchor": [12, 41],
        "popupAnchor": [1, -34],
        "shadowUrl": "/vis.0/leaf-shadow.png",
        "shadowSize": [41, 41],
        "shadowAnchor": [12, 41]
    },
    "orangeleaf": {
        "iconUrl": "/vis.0/leaf-orange.png",
        "iconSize": [32, 48],
        "iconAnchor": [16, 48],
        "popupAnchor": [0, -40],
        "shadowUrl": "/vis.0/leaf-shadow.png",
        "shadowSize": [50, 50],
        "shadowAnchor": [16, 48]
    }
}
```

`iconURL` is mandatory; all other parameters are optional.

The icon's key name (in the example, `greenleaf`) is case-sensitive,
and must be unique within the set of icons, and is used as a
reference in markers.

Allowed characters: `a–z, 0–9, _, -.`

Detailed descriptions of the parameters can be found here:

<https://leafletjs.com/reference.html#icon>

##### Polyline / Polygon / Rectangle / Circle

This contains an array of individual Polyline / Polygon / Rectangle / Circle informations.
The schema is identical for all types. Differences are noted below.

**Polyline:**

```json
[
    {
        "latlng": [
            [50.2, 8.7],
            [50.2, 8.8],
            [50.3, 8.75]
        ],
        "options": {
            "color": "green",
            "weight": 10
        }
    },
    {
        "latlng": [
            [50.2, 8.8],
            [50.2, 8.9],
            [50.3, 8.85]
        ],
        "options": {
            "color": "blue",
            "weight": 5
        }
    }
]
```

**Polygon:**

```json
[
    {
        "latlng": [
            [50.1, 8.7],
            [50.1, 8.8],
            [50.2, 8.75]
        ],
        "options": {
            "color": "green",
            "weight": 10
        }
    }
]
```

**Rectangle:**

```json
[
    {
        "latlng": [
            [50.3, 8.7],
            [50.4, 8.8]
        ],
        "options": {
            "color": "yellow",
            "weight": 10
        }
    }
]
```

**Circle:**

```json
[
    {
        "latlng": [50.3, 8.6],
        "options": {
            "radius": 10000,
            "weight": 10,
            "color": "black"
        }
    }
]
```

###### `latlng`

The existence of this parameter is mandatory for all types.

Latitude and longitude are always an array with
2 elements [latitude, longitude],
referred to as coordinates below (top-left coord and bottom-right coord).

Polyline, Polygon, Rectangle is an Array of coordinates.
Circle is only a single coordinate.

A polyline must consist of at least 2 elements,
a polygon of at least 3 elements, and
a rectangle of exactly 2 elements.

###### `options`

Except for the Circle object, the "options" parameter is always optional.
For the Circle object, the "radius" parameter is mandatory.
The option of having a separate "radius" parameter at the latlng and
options levels, as described in the Leaflet documentation, is not available here.

For Tooltip and Popup see [Tooltip](#tooltip) and [Popup](#popup).

Detailed descriptions of the parameters can be found here:

<https://leafletjs.com/reference.html#polyline>

<https://leafletjs.com/reference.html#polygon>

<https://leafletjs.com/reference.html#polygon>

<https://leafletjs.com/reference.html#circle>

##### Tooltip

Tooltip for Marker, Polygon, Rectangle, Circle.

```json
[
    {
        "lat": 50.182,
        "lng": 8.682,
        "options": {
            "title": "Default"
        },
        "popup": "<b>Default Marker</b>",
        "tooltip": "Hover me"
    },
    {
        "lat": 50.171,
        "lng": 8.695,
        "options": {
            "icon": "orangeleaf",
            "draggable": true,
            "title": "Orange Punkt (draggable)"
        },
        "tooltip": {
            "text": "Permanenter Tooltip",
            "options": {
                "permanent": true,
                "offset": [0, -12]
            }
        }
    }
]
```

A tooltip can be defined either as a simple string or
as an object with the attributes "text" and "options".

Detailed descriptions of the parameters can be found here:

<https://leafletjs.com/reference.html#tooltip>

##### Popup

Popup for Marker, Polygon, Rectangle, Circle.

```json
[
    {
        "lat": 50.182,
        "lng": 8.682,
        "options": {
            "title": "Default"
        },
        "popup": "<b>Default Marker</b>"
    },
    {
        "lat": 50.171,
        "lng": 8.695,
        "options": {
            "icon": "orangeleaf",
            "draggable": true,
            "title": "Orange Punkt (draggable)"
        },
        "popup": {
            "text": "Popup mit Offset",
            "options": {
                "offset": [0, -12]
            }
        }
    }
]
```

A Popup can be defined either as a simple string or
as an object with the attributes "text" and "options".

Detailed descriptions of the parameters can be found here:

<https://leafletjs.com/reference.html#popup>

## Todo

- to be defined

## Changelog

<!--
    Placeholder for the next version (at the beginning of the line):
    ### **WORK IN PROGRESS**
-->
### 0.0.4 (2025-09-17)

- fix reponame

### 0.0.3 (2025-09-17)

- release ?

### 0.0.2 (2025-09-16)

- first release

## License

MIT License

Copyright (c) 2025 oweitman <oweitman@gmx.de>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
