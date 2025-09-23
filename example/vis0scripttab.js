L.Control.Button = L.Control.extend({
    options: {
        position: 'topright',           // 'topleft' | 'topright' | 'bottomleft' | 'bottomright'
        className: 'leaflet-control-button',
        title: 'Aktion ausführen',
        text: '★',                      // oder html: '<svg>…</svg>'
        html: null,
        onClick: null                   // (ctx) => {}
    },

    onAdd(map) {
        const container = L.DomUtil.create('div', `leaflet-bar ${this.options.className}`);
        const link = L.DomUtil.create('a', '', container);

        link.href = '#';
        link.title = this.options.title || '';
        link.setAttribute('role', 'button');
        link.setAttribute('aria-label', this.options.title || this.options.text || 'Button');
        link.innerHTML = this.options.html ?? this.options.text ?? '•';

        // Map-Interaktionen unterbinden, damit nur der Button klickt
        L.DomEvent.disableClickPropagation(container);
        L.DomEvent.disableScrollPropagation(container);

        // Click/Keyboard
        const fire = () => {
            // Nutzer-Callback
            if (typeof this.options.onClick === 'function') {
                this.options.onClick({ map, control: this, el: link });
            }
            // Optional ein Leaflet-Event auf der Map feuern
            map.fire('buttoncontrol:click', { control: this });
        };

        L.DomEvent.on(link, 'click', (e) => { L.DomEvent.preventDefault(e); fire(); });
        L.DomEvent.on(link, 'keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); fire(); }
        });

        this._link = link;
        return container;
    },

    onRemove() {
        // optional: Event-Listener entfernen, falls du dynamisch add/remove machst
        if (this._link) {
            L.DomEvent.off(this._link);
            this._link = null;
        }
    }
});

// bequemer Factory-Helper
L.control.button = function (opts) {
    return new L.Control.Button(opts);
};

/**
 * Wartet bis eine verschachtelte Property im globalen window existiert.
 * 
 * @param {string} path - z. B. "iobroker.mapwidgets.w00001.map"
 * @param {number} interval - Intervall in ms (Standard: 100ms)
 * @param {number} timeout - Abbruch nach ms (optional, 0 = unendlich)
 * @returns {Promise<any>} Promise, das aufgelöst wird sobald die Variable existiert
 */
function waitForGlobal(path, interval = 100, timeout = 0) {
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
}