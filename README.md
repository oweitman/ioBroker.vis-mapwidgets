# ioBroker.mapwidgets

![Logo](admin/mapwidgets-small.svg)

[![NPM version](https://img.shields.io/npm/v/iobroker.vis-mapwidgets.svg)](https://www.npmjs.com/package/ioBroker.vis-mapwidgets)
[![Downloads](https://img.shields.io/npm/dm/ioBroker.vis-mapwidgets.svg)](https://www.npmjs.com/package/ioBroker.vis-mapwidgets)
![Number of Installations](https://iobroker.live/badges/vis-mapwidgets-installed.svg)
![Current version in stable repository](https://iobroker.live/badges/vis-mapwidgets-stable.svg)
[![NPM](https://nodei.co/npm/iobroker.vis-mapwidgets.png?downloads=true)](https://npmjs.com/package/iobroker.vis-mapwidgets)

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

For use cases see the [examples](./example/example.md)

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

see also [example\example.md](example/example.md) for more test content.

For all configurations, the principle is that only the mandatory amount
of information is required to display an element.

The assignment of the individual attributes is described below:

##### Marker

This contains an array of individual marker informations objects.

```json
[
    {
        "latlng": [50.182, 8.682],
        "options": {
            "title": "Default"
        },
        "popup": "<b>Default Marker</b>",
        "tooltip": "Hover me"
    },
    {
        "lat": 50.176,
        "lng": 8.69,
        "options": {
            "draggable": true,
            "title": "Draggable"
        },
        "popup": "Zieh mich!"
    }
]
```

Latitude and longitude are mandatory; all other parameters are optional.
There are 2 alternate notations for lat and lng possible, see example above.

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

##### special iobroker options

Special options that are only supported by the Leaflet version in ioBroker are
implemented using the additional options object "iobOptions".
This object is not valid for all object types. Which options are valid
for which object type is described in the respective section.

###### fitBounds

This applies to the following object types: marker, polygon,
polyline, rectangle, circle.

The system collects all points of the objects, determines a minimum/maximum
bounding box around them, calculates the appropriate zoom level and centers
and zooms the view so that all selected objects are visible.

**Example fitBounds with 3 Markers:**

```json
{
    "marker": [
        {
            "latlng": [50.2, 8.7],
            "iobOptions": {
                "fitBounds": true
            }
        },
        {
            "latlng": [50.2, 8.6],
            "options": {
                "title": "Default"
            },
            "tooltip": {
                "text": "Default",
                "options": {
                    "permanent": true,
                    "direction": "top"
                }
            },
            "iobOptions": {
                "fitBounds": true
            }
        },
        {
            "latlng": [50.2, 8.8],
            "options": {
                "title": "Mit Custom Icon",
                "icon": "redleaf"
            },
            "tooltip": {
                "text": "Mit Custom Icon",
                "options": {
                    "permanent": true,
                    "direction": "bottom"
                }
            },
            "iobOptions": {
                "fitBounds": true
            }
        }
    ],
    "icons": {
        "redleaf": {
            "iconUrl": "/vis.0/leaf-red.png",
            "iconSize": [25, 41],
            "shadowUrl": "/vis.0/leaf-shadow.png",
            "shadowSize": [25, 41],
            "iconAnchor": [14, 39],
            "shadowAnchor": [3, 39],
            "popupAnchor": [50, 50]
        }
    }
}
```

### Utility Functions Documentation

The following functions are available under `window.iobroker.mapwidgets`. For example:

```js
window.iobroker.mapwidgets.waitForGlobal(...)
window.iobroker.mapwidgets.loadScript(...)
window.iobroker.mapwidgets.loadCSS(...)
```

`loadScript` and `loadCSS` can be used to dynamically load JavaScript files and
CSS stylesheets, which may be necessary for using the map widgets.

`waitForGlobal` can be used to wait for a global variable under `window.`.
This is necessary because the map variable is only available after
the map widget has been initialized by vis.js.

#### `loadScript(src, { attrs = {}, timeout = 15000 } = {})`

Dynamically loads an external JavaScript file into the current document.

##### Parameters loadScript

- **src** (`string`)  
  The URL of the JavaScript file to load.
- **attrs** (`object`, optional)  
  Additional attributes for the `<script>` element. Supported keys:
    - `type`: e.g. `"module"` to load as ES module.
    - `integrity`: Subresource Integrity (SRI) hash.
    - `crossOrigin`: Cross-origin setting (`"anonymous"` or `"use-credentials"`).
- **timeout** (`number`, optional, default: `15000`)  
  Maximum time in milliseconds before the load attempt fails.

##### Returns loadScript

- **Promise**  
  Resolves when the script is successfully loaded, rejects on error or timeout.
  If the script is already present in the document, resolves with `"already-loaded"`.

##### Example loadScript

```js
loadScript('https://cdn.example.com/lib.min.js')
    .then(() => {
        console.log('Script loaded!');
    })
    .catch(console.error);
```

#### `loadCSS(href, { attrs = {}, timeout = 15000 } = {})`

Dynamically loads an external CSS stylesheet into the current document.

##### Parameters loadCSS

- **href** (`string`)  
  The URL of the CSS file to load.
- **attrs** (`object`, optional)  
  Additional attributes for the `<link>` element. Supported keys:
    - `integrity`: Subresource Integrity (SRI) hash.
    - `crossOrigin`: Cross-origin setting.
    - `media`: Media query for conditional loading
      (e.g. `"print"`, `"(min-width: 768px)"`).
- **timeout** (`number`, optional, default: `15000`)  
  Maximum time in milliseconds before the load attempt fails.

##### Returns loadCSS

- **Promise**  
  Resolves when the stylesheet is successfully loaded, rejects on error or timeout.
  If the stylesheet is already present in the document, resolves with `"already-loaded"`.

##### Example loadCSS

```js
loadCSS('https://cdn.example.com/theme.css').catch(console.error);
```

#### `waitForGlobal(path, interval = 100, timeout = 0)`

Waits for a global variable (or a nested property of `window`) to become available.

##### Parameters waitForGlobal

- **path** (`string`)  
  Dot-separated path to the global variable (e.g. `"jQuery"`, `"MyLib.utils.helper"`).
- **interval** (`number`, optional, default: `100`)  
  Interval in milliseconds to check for the variable.
- **timeout** (`number`, optional, default: `0`)  
  Maximum wait time in milliseconds. `0` means wait indefinitely.

##### Returns waitForGlobal

- **Promise**  
  Resolves with the found object once available.  
  Rejects if the timeout is reached before the object is found.

##### Example waitForGlobal

```html
<script>
    waitForGlobal('iobroker.mapwidgets.w00001.map', 200, 5000)
        .then(map => {
            // map is now available
        })
        .catch(err => console.error(err.message));
</script>
```

## Todo

- to be defined

## Changelog

<!--
    Placeholder for the next version (at the beginning of the line):
    ### **WORK IN PROGRESS**
-->
### 0.0.11 (2025-09-26)

- add fitBound option

### 0.0.10 (2025-09-26)

- add utility functions an documentation
- add more examples and rework example documentation

### 0.0.9 (2025-09-23)

- add polyline/path example to testdata.json. the path is located in Bathey,
  few kilometers south of Dortmund
- add polyline/path example to testdata.json. the path is located in
  Frankfurt/Main. The trail starts in the city center of Frankfurt,
  heading towards the southeast.
- add vis1 example to manipulate map from vis script with the expose option
- fix map creation if parameter changes

### 0.0.7 (2025-09-21)

- Sync mode has been added. New items can now be added dynamically.

### 0.0.6 (2025-09-17)

- fix more package urls

### 0.0.5 (2025-09-17)

- release

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
