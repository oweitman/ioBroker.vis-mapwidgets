# Example data for mapwidgets

## File testdata.json

This file contains some test data for the mapwidgets widget.

## File vis0scripttab.js

Add the contents of this file to the script tab.
This script contains the basic code for an additional button on the map.
Its usage and detailed configuration are handled within the HTML widget code.

### L.Control.Button

Base class for a button control that can be added to a map.

### waitForGlobal

Wait for a global variable to be available

## File importwidgethtml.json

The contents of this file you can import into vis editor.
please check the following line and adjust the widgetIDs 'w00001' to your needs.
If you are unsure, check the web console; if you check the "expose" option,
the variable name will be displayed in the console.

```json
waitForGlobal("iobroker.mapwidgets.w00001.map", 200, 5000)
```

Th script waits for thr map to be available,
create the button and add it to the map.
