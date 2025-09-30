"use strict";
(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __defProps = Object.defineProperties;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b)) {
        if (__propIsEnum.call(b, prop))
          __defNormalProp(a, prop, b[prop]);
      }
    return a;
  };
  var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
  var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
    get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
  }) : x)(function(x) {
    if (typeof require !== "undefined") return require.apply(this, arguments);
    throw Error('Dynamic require of "' + x + '" is not supported');
  });
  var __commonJS = (cb, mod) => function __require2() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __async = (__this, __arguments, generator) => {
    return new Promise((resolve, reject) => {
      var fulfilled = (value) => {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      };
      var rejected = (value) => {
        try {
          step(generator.throw(value));
        } catch (e) {
          reject(e);
        }
      };
      var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
      step((generator = generator.apply(__this, __arguments)).next());
    });
  };

  // node_modules/leaflet/dist/leaflet.js
  var require_leaflet = __commonJS({
    "node_modules/leaflet/dist/leaflet.js"(exports, module) {
      !(function(t, e) {
        "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e((t = "undefined" != typeof globalThis ? globalThis : t || self).leaflet = {});
      })(exports, function(t) {
        "use strict";
        function l(t2) {
          for (var e2, i2, n2 = 1, o2 = arguments.length; n2 < o2; n2++) for (e2 in i2 = arguments[n2]) t2[e2] = i2[e2];
          return t2;
        }
        var R = Object.create || function(t2) {
          return N.prototype = t2, new N();
        };
        function N() {
        }
        function a(t2, e2) {
          var i2, n2 = Array.prototype.slice;
          return t2.bind ? t2.bind.apply(t2, n2.call(arguments, 1)) : (i2 = n2.call(arguments, 2), function() {
            return t2.apply(e2, i2.length ? i2.concat(n2.call(arguments)) : arguments);
          });
        }
        var D = 0;
        function h(t2) {
          return "_leaflet_id" in t2 || (t2._leaflet_id = ++D), t2._leaflet_id;
        }
        function j(t2, e2, i2) {
          var n2, o2, s2 = function() {
            n2 = false, o2 && (r2.apply(i2, o2), o2 = false);
          }, r2 = function() {
            n2 ? o2 = arguments : (t2.apply(i2, arguments), setTimeout(s2, e2), n2 = true);
          };
          return r2;
        }
        function H(t2, e2, i2) {
          var n2 = e2[1], e2 = e2[0], o2 = n2 - e2;
          return t2 === n2 && i2 ? t2 : ((t2 - e2) % o2 + o2) % o2 + e2;
        }
        function u() {
          return false;
        }
        function i(t2, e2) {
          return false === e2 ? t2 : (e2 = Math.pow(10, void 0 === e2 ? 6 : e2), Math.round(t2 * e2) / e2);
        }
        function W(t2) {
          return t2.trim ? t2.trim() : t2.replace(/^\s+|\s+$/g, "");
        }
        function F(t2) {
          return W(t2).split(/\s+/);
        }
        function c(t2, e2) {
          for (var i2 in Object.prototype.hasOwnProperty.call(t2, "options") || (t2.options = t2.options ? R(t2.options) : {}), e2) t2.options[i2] = e2[i2];
          return t2.options;
        }
        function U(t2, e2, i2) {
          var n2, o2 = [];
          for (n2 in t2) o2.push(encodeURIComponent(i2 ? n2.toUpperCase() : n2) + "=" + encodeURIComponent(t2[n2]));
          return (e2 && -1 !== e2.indexOf("?") ? "&" : "?") + o2.join("&");
        }
        var V = /\{ *([\w_ -]+) *\}/g;
        function q(t2, i2) {
          return t2.replace(V, function(t3, e2) {
            e2 = i2[e2];
            if (void 0 === e2) throw new Error("No value provided for variable " + t3);
            return e2 = "function" == typeof e2 ? e2(i2) : e2;
          });
        }
        var d = Array.isArray || function(t2) {
          return "[object Array]" === Object.prototype.toString.call(t2);
        };
        function G(t2, e2) {
          for (var i2 = 0; i2 < t2.length; i2++) if (t2[i2] === e2) return i2;
          return -1;
        }
        var K = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
        function Y(t2) {
          return window["webkit" + t2] || window["moz" + t2] || window["ms" + t2];
        }
        var X = 0;
        function J(t2) {
          var e2 = +/* @__PURE__ */ new Date(), i2 = Math.max(0, 16 - (e2 - X));
          return X = e2 + i2, window.setTimeout(t2, i2);
        }
        var $2 = window.requestAnimationFrame || Y("RequestAnimationFrame") || J, Q = window.cancelAnimationFrame || Y("CancelAnimationFrame") || Y("CancelRequestAnimationFrame") || function(t2) {
          window.clearTimeout(t2);
        };
        function x(t2, e2, i2) {
          if (!i2 || $2 !== J) return $2.call(window, a(t2, e2));
          t2.call(e2);
        }
        function r(t2) {
          t2 && Q.call(window, t2);
        }
        var tt = { __proto__: null, extend: l, create: R, bind: a, get lastId() {
          return D;
        }, stamp: h, throttle: j, wrapNum: H, falseFn: u, formatNum: i, trim: W, splitWords: F, setOptions: c, getParamString: U, template: q, isArray: d, indexOf: G, emptyImageUrl: K, requestFn: $2, cancelFn: Q, requestAnimFrame: x, cancelAnimFrame: r };
        function et() {
        }
        et.extend = function(t2) {
          function e2() {
            c(this), this.initialize && this.initialize.apply(this, arguments), this.callInitHooks();
          }
          var i2, n2 = e2.__super__ = this.prototype, o2 = R(n2);
          for (i2 in (o2.constructor = e2).prototype = o2, this) Object.prototype.hasOwnProperty.call(this, i2) && "prototype" !== i2 && "__super__" !== i2 && (e2[i2] = this[i2]);
          if (t2.statics && l(e2, t2.statics), t2.includes) {
            var s2 = t2.includes;
            if ("undefined" != typeof L && L && L.Mixin) {
              s2 = d(s2) ? s2 : [s2];
              for (var r2 = 0; r2 < s2.length; r2++) s2[r2] === L.Mixin.Events && console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.", new Error().stack);
            }
            l.apply(null, [o2].concat(t2.includes));
          }
          return l(o2, t2), delete o2.statics, delete o2.includes, o2.options && (o2.options = n2.options ? R(n2.options) : {}, l(o2.options, t2.options)), o2._initHooks = [], o2.callInitHooks = function() {
            if (!this._initHooksCalled) {
              n2.callInitHooks && n2.callInitHooks.call(this), this._initHooksCalled = true;
              for (var t3 = 0, e3 = o2._initHooks.length; t3 < e3; t3++) o2._initHooks[t3].call(this);
            }
          }, e2;
        }, et.include = function(t2) {
          var e2 = this.prototype.options;
          return l(this.prototype, t2), t2.options && (this.prototype.options = e2, this.mergeOptions(t2.options)), this;
        }, et.mergeOptions = function(t2) {
          return l(this.prototype.options, t2), this;
        }, et.addInitHook = function(t2) {
          var e2 = Array.prototype.slice.call(arguments, 1), i2 = "function" == typeof t2 ? t2 : function() {
            this[t2].apply(this, e2);
          };
          return this.prototype._initHooks = this.prototype._initHooks || [], this.prototype._initHooks.push(i2), this;
        };
        var e = { on: function(t2, e2, i2) {
          if ("object" == typeof t2) for (var n2 in t2) this._on(n2, t2[n2], e2);
          else for (var o2 = 0, s2 = (t2 = F(t2)).length; o2 < s2; o2++) this._on(t2[o2], e2, i2);
          return this;
        }, off: function(t2, e2, i2) {
          if (arguments.length) if ("object" == typeof t2) for (var n2 in t2) this._off(n2, t2[n2], e2);
          else {
            t2 = F(t2);
            for (var o2 = 1 === arguments.length, s2 = 0, r2 = t2.length; s2 < r2; s2++) o2 ? this._off(t2[s2]) : this._off(t2[s2], e2, i2);
          }
          else delete this._events;
          return this;
        }, _on: function(t2, e2, i2, n2) {
          "function" != typeof e2 ? console.warn("wrong listener type: " + typeof e2) : false === this._listens(t2, e2, i2) && (e2 = { fn: e2, ctx: i2 = i2 === this ? void 0 : i2 }, n2 && (e2.once = true), this._events = this._events || {}, this._events[t2] = this._events[t2] || [], this._events[t2].push(e2));
        }, _off: function(t2, e2, i2) {
          var n2, o2, s2;
          if (this._events && (n2 = this._events[t2])) if (1 === arguments.length) {
            if (this._firingCount) for (o2 = 0, s2 = n2.length; o2 < s2; o2++) n2[o2].fn = u;
            delete this._events[t2];
          } else "function" != typeof e2 ? console.warn("wrong listener type: " + typeof e2) : false !== (e2 = this._listens(t2, e2, i2)) && (i2 = n2[e2], this._firingCount && (i2.fn = u, this._events[t2] = n2 = n2.slice()), n2.splice(e2, 1));
        }, fire: function(t2, e2, i2) {
          if (this.listens(t2, i2)) {
            var n2 = l({}, e2, { type: t2, target: this, sourceTarget: e2 && e2.sourceTarget || this });
            if (this._events) {
              var o2 = this._events[t2];
              if (o2) {
                this._firingCount = this._firingCount + 1 || 1;
                for (var s2 = 0, r2 = o2.length; s2 < r2; s2++) {
                  var a2 = o2[s2], h2 = a2.fn;
                  a2.once && this.off(t2, h2, a2.ctx), h2.call(a2.ctx || this, n2);
                }
                this._firingCount--;
              }
            }
            i2 && this._propagateEvent(n2);
          }
          return this;
        }, listens: function(t2, e2, i2, n2) {
          "string" != typeof t2 && console.warn('"string" type argument expected');
          var o2 = e2, s2 = ("function" != typeof e2 && (n2 = !!e2, i2 = o2 = void 0), this._events && this._events[t2]);
          if (s2 && s2.length && false !== this._listens(t2, o2, i2)) return true;
          if (n2) {
            for (var r2 in this._eventParents) if (this._eventParents[r2].listens(t2, e2, i2, n2)) return true;
          }
          return false;
        }, _listens: function(t2, e2, i2) {
          if (this._events) {
            var n2 = this._events[t2] || [];
            if (!e2) return !!n2.length;
            i2 === this && (i2 = void 0);
            for (var o2 = 0, s2 = n2.length; o2 < s2; o2++) if (n2[o2].fn === e2 && n2[o2].ctx === i2) return o2;
          }
          return false;
        }, once: function(t2, e2, i2) {
          if ("object" == typeof t2) for (var n2 in t2) this._on(n2, t2[n2], e2, true);
          else for (var o2 = 0, s2 = (t2 = F(t2)).length; o2 < s2; o2++) this._on(t2[o2], e2, i2, true);
          return this;
        }, addEventParent: function(t2) {
          return this._eventParents = this._eventParents || {}, this._eventParents[h(t2)] = t2, this;
        }, removeEventParent: function(t2) {
          return this._eventParents && delete this._eventParents[h(t2)], this;
        }, _propagateEvent: function(t2) {
          for (var e2 in this._eventParents) this._eventParents[e2].fire(t2.type, l({ layer: t2.target, propagatedFrom: t2.target }, t2), true);
        } }, it = (e.addEventListener = e.on, e.removeEventListener = e.clearAllEventListeners = e.off, e.addOneTimeEventListener = e.once, e.fireEvent = e.fire, e.hasEventListeners = e.listens, et.extend(e));
        function p(t2, e2, i2) {
          this.x = i2 ? Math.round(t2) : t2, this.y = i2 ? Math.round(e2) : e2;
        }
        var nt = Math.trunc || function(t2) {
          return 0 < t2 ? Math.floor(t2) : Math.ceil(t2);
        };
        function m(t2, e2, i2) {
          return t2 instanceof p ? t2 : d(t2) ? new p(t2[0], t2[1]) : null == t2 ? t2 : "object" == typeof t2 && "x" in t2 && "y" in t2 ? new p(t2.x, t2.y) : new p(t2, e2, i2);
        }
        function f(t2, e2) {
          if (t2) for (var i2 = e2 ? [t2, e2] : t2, n2 = 0, o2 = i2.length; n2 < o2; n2++) this.extend(i2[n2]);
        }
        function _(t2, e2) {
          return !t2 || t2 instanceof f ? t2 : new f(t2, e2);
        }
        function s(t2, e2) {
          if (t2) for (var i2 = e2 ? [t2, e2] : t2, n2 = 0, o2 = i2.length; n2 < o2; n2++) this.extend(i2[n2]);
        }
        function g(t2, e2) {
          return t2 instanceof s ? t2 : new s(t2, e2);
        }
        function v(t2, e2, i2) {
          if (isNaN(t2) || isNaN(e2)) throw new Error("Invalid LatLng object: (" + t2 + ", " + e2 + ")");
          this.lat = +t2, this.lng = +e2, void 0 !== i2 && (this.alt = +i2);
        }
        function w(t2, e2, i2) {
          return t2 instanceof v ? t2 : d(t2) && "object" != typeof t2[0] ? 3 === t2.length ? new v(t2[0], t2[1], t2[2]) : 2 === t2.length ? new v(t2[0], t2[1]) : null : null == t2 ? t2 : "object" == typeof t2 && "lat" in t2 ? new v(t2.lat, "lng" in t2 ? t2.lng : t2.lon, t2.alt) : void 0 === e2 ? null : new v(t2, e2, i2);
        }
        p.prototype = { clone: function() {
          return new p(this.x, this.y);
        }, add: function(t2) {
          return this.clone()._add(m(t2));
        }, _add: function(t2) {
          return this.x += t2.x, this.y += t2.y, this;
        }, subtract: function(t2) {
          return this.clone()._subtract(m(t2));
        }, _subtract: function(t2) {
          return this.x -= t2.x, this.y -= t2.y, this;
        }, divideBy: function(t2) {
          return this.clone()._divideBy(t2);
        }, _divideBy: function(t2) {
          return this.x /= t2, this.y /= t2, this;
        }, multiplyBy: function(t2) {
          return this.clone()._multiplyBy(t2);
        }, _multiplyBy: function(t2) {
          return this.x *= t2, this.y *= t2, this;
        }, scaleBy: function(t2) {
          return new p(this.x * t2.x, this.y * t2.y);
        }, unscaleBy: function(t2) {
          return new p(this.x / t2.x, this.y / t2.y);
        }, round: function() {
          return this.clone()._round();
        }, _round: function() {
          return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
        }, floor: function() {
          return this.clone()._floor();
        }, _floor: function() {
          return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
        }, ceil: function() {
          return this.clone()._ceil();
        }, _ceil: function() {
          return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this;
        }, trunc: function() {
          return this.clone()._trunc();
        }, _trunc: function() {
          return this.x = nt(this.x), this.y = nt(this.y), this;
        }, distanceTo: function(t2) {
          var e2 = (t2 = m(t2)).x - this.x, t2 = t2.y - this.y;
          return Math.sqrt(e2 * e2 + t2 * t2);
        }, equals: function(t2) {
          return (t2 = m(t2)).x === this.x && t2.y === this.y;
        }, contains: function(t2) {
          return t2 = m(t2), Math.abs(t2.x) <= Math.abs(this.x) && Math.abs(t2.y) <= Math.abs(this.y);
        }, toString: function() {
          return "Point(" + i(this.x) + ", " + i(this.y) + ")";
        } }, f.prototype = { extend: function(t2) {
          var e2, i2;
          if (t2) {
            if (t2 instanceof p || "number" == typeof t2[0] || "x" in t2) e2 = i2 = m(t2);
            else if (e2 = (t2 = _(t2)).min, i2 = t2.max, !e2 || !i2) return this;
            this.min || this.max ? (this.min.x = Math.min(e2.x, this.min.x), this.max.x = Math.max(i2.x, this.max.x), this.min.y = Math.min(e2.y, this.min.y), this.max.y = Math.max(i2.y, this.max.y)) : (this.min = e2.clone(), this.max = i2.clone());
          }
          return this;
        }, getCenter: function(t2) {
          return m((this.min.x + this.max.x) / 2, (this.min.y + this.max.y) / 2, t2);
        }, getBottomLeft: function() {
          return m(this.min.x, this.max.y);
        }, getTopRight: function() {
          return m(this.max.x, this.min.y);
        }, getTopLeft: function() {
          return this.min;
        }, getBottomRight: function() {
          return this.max;
        }, getSize: function() {
          return this.max.subtract(this.min);
        }, contains: function(t2) {
          var e2, i2;
          return (t2 = ("number" == typeof t2[0] || t2 instanceof p ? m : _)(t2)) instanceof f ? (e2 = t2.min, i2 = t2.max) : e2 = i2 = t2, e2.x >= this.min.x && i2.x <= this.max.x && e2.y >= this.min.y && i2.y <= this.max.y;
        }, intersects: function(t2) {
          t2 = _(t2);
          var e2 = this.min, i2 = this.max, n2 = t2.min, t2 = t2.max, o2 = t2.x >= e2.x && n2.x <= i2.x, t2 = t2.y >= e2.y && n2.y <= i2.y;
          return o2 && t2;
        }, overlaps: function(t2) {
          t2 = _(t2);
          var e2 = this.min, i2 = this.max, n2 = t2.min, t2 = t2.max, o2 = t2.x > e2.x && n2.x < i2.x, t2 = t2.y > e2.y && n2.y < i2.y;
          return o2 && t2;
        }, isValid: function() {
          return !(!this.min || !this.max);
        }, pad: function(t2) {
          var e2 = this.min, i2 = this.max, n2 = Math.abs(e2.x - i2.x) * t2, t2 = Math.abs(e2.y - i2.y) * t2;
          return _(m(e2.x - n2, e2.y - t2), m(i2.x + n2, i2.y + t2));
        }, equals: function(t2) {
          return !!t2 && (t2 = _(t2), this.min.equals(t2.getTopLeft()) && this.max.equals(t2.getBottomRight()));
        } }, s.prototype = { extend: function(t2) {
          var e2, i2, n2 = this._southWest, o2 = this._northEast;
          if (t2 instanceof v) i2 = e2 = t2;
          else {
            if (!(t2 instanceof s)) return t2 ? this.extend(w(t2) || g(t2)) : this;
            if (e2 = t2._southWest, i2 = t2._northEast, !e2 || !i2) return this;
          }
          return n2 || o2 ? (n2.lat = Math.min(e2.lat, n2.lat), n2.lng = Math.min(e2.lng, n2.lng), o2.lat = Math.max(i2.lat, o2.lat), o2.lng = Math.max(i2.lng, o2.lng)) : (this._southWest = new v(e2.lat, e2.lng), this._northEast = new v(i2.lat, i2.lng)), this;
        }, pad: function(t2) {
          var e2 = this._southWest, i2 = this._northEast, n2 = Math.abs(e2.lat - i2.lat) * t2, t2 = Math.abs(e2.lng - i2.lng) * t2;
          return new s(new v(e2.lat - n2, e2.lng - t2), new v(i2.lat + n2, i2.lng + t2));
        }, getCenter: function() {
          return new v((this._southWest.lat + this._northEast.lat) / 2, (this._southWest.lng + this._northEast.lng) / 2);
        }, getSouthWest: function() {
          return this._southWest;
        }, getNorthEast: function() {
          return this._northEast;
        }, getNorthWest: function() {
          return new v(this.getNorth(), this.getWest());
        }, getSouthEast: function() {
          return new v(this.getSouth(), this.getEast());
        }, getWest: function() {
          return this._southWest.lng;
        }, getSouth: function() {
          return this._southWest.lat;
        }, getEast: function() {
          return this._northEast.lng;
        }, getNorth: function() {
          return this._northEast.lat;
        }, contains: function(t2) {
          t2 = ("number" == typeof t2[0] || t2 instanceof v || "lat" in t2 ? w : g)(t2);
          var e2, i2, n2 = this._southWest, o2 = this._northEast;
          return t2 instanceof s ? (e2 = t2.getSouthWest(), i2 = t2.getNorthEast()) : e2 = i2 = t2, e2.lat >= n2.lat && i2.lat <= o2.lat && e2.lng >= n2.lng && i2.lng <= o2.lng;
        }, intersects: function(t2) {
          t2 = g(t2);
          var e2 = this._southWest, i2 = this._northEast, n2 = t2.getSouthWest(), t2 = t2.getNorthEast(), o2 = t2.lat >= e2.lat && n2.lat <= i2.lat, t2 = t2.lng >= e2.lng && n2.lng <= i2.lng;
          return o2 && t2;
        }, overlaps: function(t2) {
          t2 = g(t2);
          var e2 = this._southWest, i2 = this._northEast, n2 = t2.getSouthWest(), t2 = t2.getNorthEast(), o2 = t2.lat > e2.lat && n2.lat < i2.lat, t2 = t2.lng > e2.lng && n2.lng < i2.lng;
          return o2 && t2;
        }, toBBoxString: function() {
          return [this.getWest(), this.getSouth(), this.getEast(), this.getNorth()].join(",");
        }, equals: function(t2, e2) {
          return !!t2 && (t2 = g(t2), this._southWest.equals(t2.getSouthWest(), e2) && this._northEast.equals(t2.getNorthEast(), e2));
        }, isValid: function() {
          return !(!this._southWest || !this._northEast);
        } };
        var ot = { latLngToPoint: function(t2, e2) {
          t2 = this.projection.project(t2), e2 = this.scale(e2);
          return this.transformation._transform(t2, e2);
        }, pointToLatLng: function(t2, e2) {
          e2 = this.scale(e2), t2 = this.transformation.untransform(t2, e2);
          return this.projection.unproject(t2);
        }, project: function(t2) {
          return this.projection.project(t2);
        }, unproject: function(t2) {
          return this.projection.unproject(t2);
        }, scale: function(t2) {
          return 256 * Math.pow(2, t2);
        }, zoom: function(t2) {
          return Math.log(t2 / 256) / Math.LN2;
        }, getProjectedBounds: function(t2) {
          var e2;
          return this.infinite ? null : (e2 = this.projection.bounds, t2 = this.scale(t2), new f(this.transformation.transform(e2.min, t2), this.transformation.transform(e2.max, t2)));
        }, infinite: !(v.prototype = { equals: function(t2, e2) {
          return !!t2 && (t2 = w(t2), Math.max(Math.abs(this.lat - t2.lat), Math.abs(this.lng - t2.lng)) <= (void 0 === e2 ? 1e-9 : e2));
        }, toString: function(t2) {
          return "LatLng(" + i(this.lat, t2) + ", " + i(this.lng, t2) + ")";
        }, distanceTo: function(t2) {
          return st.distance(this, w(t2));
        }, wrap: function() {
          return st.wrapLatLng(this);
        }, toBounds: function(t2) {
          var t2 = 180 * t2 / 40075017, e2 = t2 / Math.cos(Math.PI / 180 * this.lat);
          return g([this.lat - t2, this.lng - e2], [this.lat + t2, this.lng + e2]);
        }, clone: function() {
          return new v(this.lat, this.lng, this.alt);
        } }), wrapLatLng: function(t2) {
          var e2 = this.wrapLng ? H(t2.lng, this.wrapLng, true) : t2.lng;
          return new v(this.wrapLat ? H(t2.lat, this.wrapLat, true) : t2.lat, e2, t2.alt);
        }, wrapLatLngBounds: function(t2) {
          var e2 = t2.getCenter(), i2 = this.wrapLatLng(e2), n2 = e2.lat - i2.lat, e2 = e2.lng - i2.lng;
          return 0 == n2 && 0 == e2 ? t2 : (i2 = t2.getSouthWest(), t2 = t2.getNorthEast(), new s(new v(i2.lat - n2, i2.lng - e2), new v(t2.lat - n2, t2.lng - e2)));
        } }, st = l({}, ot, { wrapLng: [-180, 180], R: 6371e3, distance: function(t2, e2) {
          var i2 = Math.PI / 180, n2 = t2.lat * i2, o2 = e2.lat * i2, s2 = Math.sin((e2.lat - t2.lat) * i2 / 2), e2 = Math.sin((e2.lng - t2.lng) * i2 / 2), t2 = s2 * s2 + Math.cos(n2) * Math.cos(o2) * e2 * e2, i2 = 2 * Math.atan2(Math.sqrt(t2), Math.sqrt(1 - t2));
          return this.R * i2;
        } }), rt = 6378137, rt = { R: rt, MAX_LATITUDE: 85.0511287798, project: function(t2) {
          var e2 = Math.PI / 180, i2 = this.MAX_LATITUDE, i2 = Math.max(Math.min(i2, t2.lat), -i2), i2 = Math.sin(i2 * e2);
          return new p(this.R * t2.lng * e2, this.R * Math.log((1 + i2) / (1 - i2)) / 2);
        }, unproject: function(t2) {
          var e2 = 180 / Math.PI;
          return new v((2 * Math.atan(Math.exp(t2.y / this.R)) - Math.PI / 2) * e2, t2.x * e2 / this.R);
        }, bounds: new f([-(rt = rt * Math.PI), -rt], [rt, rt]) };
        function at(t2, e2, i2, n2) {
          d(t2) ? (this._a = t2[0], this._b = t2[1], this._c = t2[2], this._d = t2[3]) : (this._a = t2, this._b = e2, this._c = i2, this._d = n2);
        }
        function ht(t2, e2, i2, n2) {
          return new at(t2, e2, i2, n2);
        }
        at.prototype = { transform: function(t2, e2) {
          return this._transform(t2.clone(), e2);
        }, _transform: function(t2, e2) {
          return t2.x = (e2 = e2 || 1) * (this._a * t2.x + this._b), t2.y = e2 * (this._c * t2.y + this._d), t2;
        }, untransform: function(t2, e2) {
          return new p((t2.x / (e2 = e2 || 1) - this._b) / this._a, (t2.y / e2 - this._d) / this._c);
        } };
        var lt = l({}, st, { code: "EPSG:3857", projection: rt, transformation: ht(lt = 0.5 / (Math.PI * rt.R), 0.5, -lt, 0.5) }), ut = l({}, lt, { code: "EPSG:900913" });
        function ct(t2) {
          return document.createElementNS("http://www.w3.org/2000/svg", t2);
        }
        function dt(t2, e2) {
          for (var i2, n2, o2, s2, r2 = "", a2 = 0, h2 = t2.length; a2 < h2; a2++) {
            for (i2 = 0, n2 = (o2 = t2[a2]).length; i2 < n2; i2++) r2 += (i2 ? "L" : "M") + (s2 = o2[i2]).x + " " + s2.y;
            r2 += e2 ? b.svg ? "z" : "x" : "";
          }
          return r2 || "M0 0";
        }
        var _t = document.documentElement.style, pt = "ActiveXObject" in window, mt = pt && !document.addEventListener, n = "msLaunchUri" in navigator && !("documentMode" in document), ft = y("webkit"), gt = y("android"), vt = y("android 2") || y("android 3"), yt = parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1], 10), yt = gt && y("Google") && yt < 537 && !("AudioNode" in window), xt = !!window.opera, wt = !n && y("chrome"), bt = y("gecko") && !ft && !xt && !pt, Pt = !wt && y("safari"), Lt = y("phantom"), o = "OTransition" in _t, Tt = 0 === navigator.platform.indexOf("Win"), Mt = pt && "transition" in _t, zt = "WebKitCSSMatrix" in window && "m11" in new window.WebKitCSSMatrix() && !vt, _t = "MozPerspective" in _t, Ct = !window.L_DISABLE_3D && (Mt || zt || _t) && !o && !Lt, Zt = "undefined" != typeof orientation || y("mobile"), St = Zt && ft, Et = Zt && zt, kt = !window.PointerEvent && window.MSPointerEvent, Ot = !(!window.PointerEvent && !kt), At = "ontouchstart" in window || !!window.TouchEvent, Bt = !window.L_NO_TOUCH && (At || Ot), It = Zt && xt, Rt = Zt && bt, Nt = 1 < (window.devicePixelRatio || window.screen.deviceXDPI / window.screen.logicalXDPI), Dt = (function() {
          var t2 = false;
          try {
            var e2 = Object.defineProperty({}, "passive", { get: function() {
              t2 = true;
            } });
            window.addEventListener("testPassiveEventSupport", u, e2), window.removeEventListener("testPassiveEventSupport", u, e2);
          } catch (t3) {
          }
          return t2;
        })(), jt = !!document.createElement("canvas").getContext, Ht = !(!document.createElementNS || !ct("svg").createSVGRect), Wt = !!Ht && ((Wt = document.createElement("div")).innerHTML = "<svg/>", "http://www.w3.org/2000/svg" === (Wt.firstChild && Wt.firstChild.namespaceURI));
        function y(t2) {
          return 0 <= navigator.userAgent.toLowerCase().indexOf(t2);
        }
        var b = { ie: pt, ielt9: mt, edge: n, webkit: ft, android: gt, android23: vt, androidStock: yt, opera: xt, chrome: wt, gecko: bt, safari: Pt, phantom: Lt, opera12: o, win: Tt, ie3d: Mt, webkit3d: zt, gecko3d: _t, any3d: Ct, mobile: Zt, mobileWebkit: St, mobileWebkit3d: Et, msPointer: kt, pointer: Ot, touch: Bt, touchNative: At, mobileOpera: It, mobileGecko: Rt, retina: Nt, passiveEvents: Dt, canvas: jt, svg: Ht, vml: !Ht && (function() {
          try {
            var t2 = document.createElement("div"), e2 = (t2.innerHTML = '<v:shape adj="1"/>', t2.firstChild);
            return e2.style.behavior = "url(#default#VML)", e2 && "object" == typeof e2.adj;
          } catch (t3) {
            return false;
          }
        })(), inlineSvg: Wt, mac: 0 === navigator.platform.indexOf("Mac"), linux: 0 === navigator.platform.indexOf("Linux") }, Ft = b.msPointer ? "MSPointerDown" : "pointerdown", Ut = b.msPointer ? "MSPointerMove" : "pointermove", Vt = b.msPointer ? "MSPointerUp" : "pointerup", qt = b.msPointer ? "MSPointerCancel" : "pointercancel", Gt = { touchstart: Ft, touchmove: Ut, touchend: Vt, touchcancel: qt }, Kt = { touchstart: function(t2, e2) {
          e2.MSPOINTER_TYPE_TOUCH && e2.pointerType === e2.MSPOINTER_TYPE_TOUCH && O(e2);
          ee(t2, e2);
        }, touchmove: ee, touchend: ee, touchcancel: ee }, Yt = {}, Xt = false;
        function Jt(t2, e2, i2) {
          return "touchstart" !== e2 || Xt || (document.addEventListener(Ft, $t, true), document.addEventListener(Ut, Qt, true), document.addEventListener(Vt, te, true), document.addEventListener(qt, te, true), Xt = true), Kt[e2] ? (i2 = Kt[e2].bind(this, i2), t2.addEventListener(Gt[e2], i2, false), i2) : (console.warn("wrong event specified:", e2), u);
        }
        function $t(t2) {
          Yt[t2.pointerId] = t2;
        }
        function Qt(t2) {
          Yt[t2.pointerId] && (Yt[t2.pointerId] = t2);
        }
        function te(t2) {
          delete Yt[t2.pointerId];
        }
        function ee(t2, e2) {
          if (e2.pointerType !== (e2.MSPOINTER_TYPE_MOUSE || "mouse")) {
            for (var i2 in e2.touches = [], Yt) e2.touches.push(Yt[i2]);
            e2.changedTouches = [e2], t2(e2);
          }
        }
        var ie = 200;
        function ne(t2, i2) {
          t2.addEventListener("dblclick", i2);
          var n2, o2 = 0;
          function e2(t3) {
            var e3;
            1 !== t3.detail ? n2 = t3.detail : "mouse" === t3.pointerType || t3.sourceCapabilities && !t3.sourceCapabilities.firesTouchEvents || ((e3 = Ne(t3)).some(function(t4) {
              return t4 instanceof HTMLLabelElement && t4.attributes.for;
            }) && !e3.some(function(t4) {
              return t4 instanceof HTMLInputElement || t4 instanceof HTMLSelectElement;
            }) || ((e3 = Date.now()) - o2 <= ie ? 2 === ++n2 && i2((function(t4) {
              var e4, i3, n3 = {};
              for (i3 in t4) e4 = t4[i3], n3[i3] = e4 && e4.bind ? e4.bind(t4) : e4;
              return (t4 = n3).type = "dblclick", n3.detail = 2, n3.isTrusted = false, n3._simulated = true, n3;
            })(t3)) : n2 = 1, o2 = e3));
          }
          return t2.addEventListener("click", e2), { dblclick: i2, simDblclick: e2 };
        }
        var oe, se, re, ae, he, le, ue = we(["transform", "webkitTransform", "OTransform", "MozTransform", "msTransform"]), ce = we(["webkitTransition", "transition", "OTransition", "MozTransition", "msTransition"]), de = "webkitTransition" === ce || "OTransition" === ce ? ce + "End" : "transitionend";
        function _e(t2) {
          return "string" == typeof t2 ? document.getElementById(t2) : t2;
        }
        function pe(t2, e2) {
          var i2 = t2.style[e2] || t2.currentStyle && t2.currentStyle[e2];
          return "auto" === (i2 = i2 && "auto" !== i2 || !document.defaultView ? i2 : (t2 = document.defaultView.getComputedStyle(t2, null)) ? t2[e2] : null) ? null : i2;
        }
        function P(t2, e2, i2) {
          t2 = document.createElement(t2);
          return t2.className = e2 || "", i2 && i2.appendChild(t2), t2;
        }
        function T(t2) {
          var e2 = t2.parentNode;
          e2 && e2.removeChild(t2);
        }
        function me(t2) {
          for (; t2.firstChild; ) t2.removeChild(t2.firstChild);
        }
        function fe(t2) {
          var e2 = t2.parentNode;
          e2 && e2.lastChild !== t2 && e2.appendChild(t2);
        }
        function ge(t2) {
          var e2 = t2.parentNode;
          e2 && e2.firstChild !== t2 && e2.insertBefore(t2, e2.firstChild);
        }
        function ve(t2, e2) {
          return void 0 !== t2.classList ? t2.classList.contains(e2) : 0 < (t2 = xe(t2)).length && new RegExp("(^|\\s)" + e2 + "(\\s|$)").test(t2);
        }
        function M(t2, e2) {
          var i2;
          if (void 0 !== t2.classList) for (var n2 = F(e2), o2 = 0, s2 = n2.length; o2 < s2; o2++) t2.classList.add(n2[o2]);
          else ve(t2, e2) || ye(t2, ((i2 = xe(t2)) ? i2 + " " : "") + e2);
        }
        function z(t2, e2) {
          void 0 !== t2.classList ? t2.classList.remove(e2) : ye(t2, W((" " + xe(t2) + " ").replace(" " + e2 + " ", " ")));
        }
        function ye(t2, e2) {
          void 0 === t2.className.baseVal ? t2.className = e2 : t2.className.baseVal = e2;
        }
        function xe(t2) {
          return void 0 === (t2 = t2.correspondingElement ? t2.correspondingElement : t2).className.baseVal ? t2.className : t2.className.baseVal;
        }
        function C(t2, e2) {
          if ("opacity" in t2.style) t2.style.opacity = e2;
          else if ("filter" in t2.style) {
            var i2 = false, n2 = "DXImageTransform.Microsoft.Alpha";
            try {
              i2 = t2.filters.item(n2);
            } catch (t3) {
              if (1 === e2) return;
            }
            e2 = Math.round(100 * e2), i2 ? (i2.Enabled = 100 !== e2, i2.Opacity = e2) : t2.style.filter += " progid:" + n2 + "(opacity=" + e2 + ")";
          }
        }
        function we(t2) {
          for (var e2 = document.documentElement.style, i2 = 0; i2 < t2.length; i2++) if (t2[i2] in e2) return t2[i2];
          return false;
        }
        function be(t2, e2, i2) {
          e2 = e2 || new p(0, 0);
          t2.style[ue] = (b.ie3d ? "translate(" + e2.x + "px," + e2.y + "px)" : "translate3d(" + e2.x + "px," + e2.y + "px,0)") + (i2 ? " scale(" + i2 + ")" : "");
        }
        function Z(t2, e2) {
          t2._leaflet_pos = e2, b.any3d ? be(t2, e2) : (t2.style.left = e2.x + "px", t2.style.top = e2.y + "px");
        }
        function Pe(t2) {
          return t2._leaflet_pos || new p(0, 0);
        }
        function Le() {
          S(window, "dragstart", O);
        }
        function Te() {
          k(window, "dragstart", O);
        }
        function Me(t2) {
          for (; -1 === t2.tabIndex; ) t2 = t2.parentNode;
          t2.style && (ze(), le = (he = t2).style.outlineStyle, t2.style.outlineStyle = "none", S(window, "keydown", ze));
        }
        function ze() {
          he && (he.style.outlineStyle = le, le = he = void 0, k(window, "keydown", ze));
        }
        function Ce(t2) {
          for (; !((t2 = t2.parentNode).offsetWidth && t2.offsetHeight || t2 === document.body); ) ;
          return t2;
        }
        function Ze(t2) {
          var e2 = t2.getBoundingClientRect();
          return { x: e2.width / t2.offsetWidth || 1, y: e2.height / t2.offsetHeight || 1, boundingClientRect: e2 };
        }
        ae = "onselectstart" in document ? (re = function() {
          S(window, "selectstart", O);
        }, function() {
          k(window, "selectstart", O);
        }) : (se = we(["userSelect", "WebkitUserSelect", "OUserSelect", "MozUserSelect", "msUserSelect"]), re = function() {
          var t2;
          se && (t2 = document.documentElement.style, oe = t2[se], t2[se] = "none");
        }, function() {
          se && (document.documentElement.style[se] = oe, oe = void 0);
        });
        pt = { __proto__: null, TRANSFORM: ue, TRANSITION: ce, TRANSITION_END: de, get: _e, getStyle: pe, create: P, remove: T, empty: me, toFront: fe, toBack: ge, hasClass: ve, addClass: M, removeClass: z, setClass: ye, getClass: xe, setOpacity: C, testProp: we, setTransform: be, setPosition: Z, getPosition: Pe, get disableTextSelection() {
          return re;
        }, get enableTextSelection() {
          return ae;
        }, disableImageDrag: Le, enableImageDrag: Te, preventOutline: Me, restoreOutline: ze, getSizedParentNode: Ce, getScale: Ze };
        function S(t2, e2, i2, n2) {
          if (e2 && "object" == typeof e2) for (var o2 in e2) ke(t2, o2, e2[o2], i2);
          else for (var s2 = 0, r2 = (e2 = F(e2)).length; s2 < r2; s2++) ke(t2, e2[s2], i2, n2);
          return this;
        }
        var E = "_leaflet_events";
        function k(t2, e2, i2, n2) {
          if (1 === arguments.length) Se(t2), delete t2[E];
          else if (e2 && "object" == typeof e2) for (var o2 in e2) Oe(t2, o2, e2[o2], i2);
          else if (e2 = F(e2), 2 === arguments.length) Se(t2, function(t3) {
            return -1 !== G(e2, t3);
          });
          else for (var s2 = 0, r2 = e2.length; s2 < r2; s2++) Oe(t2, e2[s2], i2, n2);
          return this;
        }
        function Se(t2, e2) {
          for (var i2 in t2[E]) {
            var n2 = i2.split(/\d/)[0];
            e2 && !e2(n2) || Oe(t2, n2, null, null, i2);
          }
        }
        var Ee = { mouseenter: "mouseover", mouseleave: "mouseout", wheel: !("onwheel" in window) && "mousewheel" };
        function ke(e2, t2, i2, n2) {
          var o2, s2, r2 = t2 + h(i2) + (n2 ? "_" + h(n2) : "");
          e2[E] && e2[E][r2] || (s2 = o2 = function(t3) {
            return i2.call(n2 || e2, t3 || window.event);
          }, !b.touchNative && b.pointer && 0 === t2.indexOf("touch") ? o2 = Jt(e2, t2, o2) : b.touch && "dblclick" === t2 ? o2 = ne(e2, o2) : "addEventListener" in e2 ? "touchstart" === t2 || "touchmove" === t2 || "wheel" === t2 || "mousewheel" === t2 ? e2.addEventListener(Ee[t2] || t2, o2, !!b.passiveEvents && { passive: false }) : "mouseenter" === t2 || "mouseleave" === t2 ? e2.addEventListener(Ee[t2], o2 = function(t3) {
            t3 = t3 || window.event, We(e2, t3) && s2(t3);
          }, false) : e2.addEventListener(t2, s2, false) : e2.attachEvent("on" + t2, o2), e2[E] = e2[E] || {}, e2[E][r2] = o2);
        }
        function Oe(t2, e2, i2, n2, o2) {
          o2 = o2 || e2 + h(i2) + (n2 ? "_" + h(n2) : "");
          var s2, r2, i2 = t2[E] && t2[E][o2];
          i2 && (!b.touchNative && b.pointer && 0 === e2.indexOf("touch") ? (n2 = t2, r2 = i2, Gt[s2 = e2] ? n2.removeEventListener(Gt[s2], r2, false) : console.warn("wrong event specified:", s2)) : b.touch && "dblclick" === e2 ? (n2 = i2, (r2 = t2).removeEventListener("dblclick", n2.dblclick), r2.removeEventListener("click", n2.simDblclick)) : "removeEventListener" in t2 ? t2.removeEventListener(Ee[e2] || e2, i2, false) : t2.detachEvent("on" + e2, i2), t2[E][o2] = null);
        }
        function Ae(t2) {
          return t2.stopPropagation ? t2.stopPropagation() : t2.originalEvent ? t2.originalEvent._stopped = true : t2.cancelBubble = true, this;
        }
        function Be(t2) {
          return ke(t2, "wheel", Ae), this;
        }
        function Ie(t2) {
          return S(t2, "mousedown touchstart dblclick contextmenu", Ae), t2._leaflet_disable_click = true, this;
        }
        function O(t2) {
          return t2.preventDefault ? t2.preventDefault() : t2.returnValue = false, this;
        }
        function Re(t2) {
          return O(t2), Ae(t2), this;
        }
        function Ne(t2) {
          if (t2.composedPath) return t2.composedPath();
          for (var e2 = [], i2 = t2.target; i2; ) e2.push(i2), i2 = i2.parentNode;
          return e2;
        }
        function De(t2, e2) {
          var i2, n2;
          return e2 ? (n2 = (i2 = Ze(e2)).boundingClientRect, new p((t2.clientX - n2.left) / i2.x - e2.clientLeft, (t2.clientY - n2.top) / i2.y - e2.clientTop)) : new p(t2.clientX, t2.clientY);
        }
        var je = b.linux && b.chrome ? window.devicePixelRatio : b.mac ? 3 * window.devicePixelRatio : 0 < window.devicePixelRatio ? 2 * window.devicePixelRatio : 1;
        function He(t2) {
          return b.edge ? t2.wheelDeltaY / 2 : t2.deltaY && 0 === t2.deltaMode ? -t2.deltaY / je : t2.deltaY && 1 === t2.deltaMode ? 20 * -t2.deltaY : t2.deltaY && 2 === t2.deltaMode ? 60 * -t2.deltaY : t2.deltaX || t2.deltaZ ? 0 : t2.wheelDelta ? (t2.wheelDeltaY || t2.wheelDelta) / 2 : t2.detail && Math.abs(t2.detail) < 32765 ? 20 * -t2.detail : t2.detail ? t2.detail / -32765 * 60 : 0;
        }
        function We(t2, e2) {
          var i2 = e2.relatedTarget;
          if (!i2) return true;
          try {
            for (; i2 && i2 !== t2; ) i2 = i2.parentNode;
          } catch (t3) {
            return false;
          }
          return i2 !== t2;
        }
        var mt = { __proto__: null, on: S, off: k, stopPropagation: Ae, disableScrollPropagation: Be, disableClickPropagation: Ie, preventDefault: O, stop: Re, getPropagationPath: Ne, getMousePosition: De, getWheelDelta: He, isExternalTarget: We, addListener: S, removeListener: k }, Fe = it.extend({ run: function(t2, e2, i2, n2) {
          this.stop(), this._el = t2, this._inProgress = true, this._duration = i2 || 0.25, this._easeOutPower = 1 / Math.max(n2 || 0.5, 0.2), this._startPos = Pe(t2), this._offset = e2.subtract(this._startPos), this._startTime = +/* @__PURE__ */ new Date(), this.fire("start"), this._animate();
        }, stop: function() {
          this._inProgress && (this._step(true), this._complete());
        }, _animate: function() {
          this._animId = x(this._animate, this), this._step();
        }, _step: function(t2) {
          var e2 = +/* @__PURE__ */ new Date() - this._startTime, i2 = 1e3 * this._duration;
          e2 < i2 ? this._runFrame(this._easeOut(e2 / i2), t2) : (this._runFrame(1), this._complete());
        }, _runFrame: function(t2, e2) {
          t2 = this._startPos.add(this._offset.multiplyBy(t2));
          e2 && t2._round(), Z(this._el, t2), this.fire("step");
        }, _complete: function() {
          r(this._animId), this._inProgress = false, this.fire("end");
        }, _easeOut: function(t2) {
          return 1 - Math.pow(1 - t2, this._easeOutPower);
        } }), A = it.extend({ options: { crs: lt, center: void 0, zoom: void 0, minZoom: void 0, maxZoom: void 0, layers: [], maxBounds: void 0, renderer: void 0, zoomAnimation: true, zoomAnimationThreshold: 4, fadeAnimation: true, markerZoomAnimation: true, transform3DLimit: 8388608, zoomSnap: 1, zoomDelta: 1, trackResize: true }, initialize: function(t2, e2) {
          e2 = c(this, e2), this._handlers = [], this._layers = {}, this._zoomBoundLayers = {}, this._sizeChanged = true, this._initContainer(t2), this._initLayout(), this._onResize = a(this._onResize, this), this._initEvents(), e2.maxBounds && this.setMaxBounds(e2.maxBounds), void 0 !== e2.zoom && (this._zoom = this._limitZoom(e2.zoom)), e2.center && void 0 !== e2.zoom && this.setView(w(e2.center), e2.zoom, { reset: true }), this.callInitHooks(), this._zoomAnimated = ce && b.any3d && !b.mobileOpera && this.options.zoomAnimation, this._zoomAnimated && (this._createAnimProxy(), S(this._proxy, de, this._catchTransitionEnd, this)), this._addLayers(this.options.layers);
        }, setView: function(t2, e2, i2) {
          if ((e2 = void 0 === e2 ? this._zoom : this._limitZoom(e2), t2 = this._limitCenter(w(t2), e2, this.options.maxBounds), i2 = i2 || {}, this._stop(), this._loaded && !i2.reset && true !== i2) && (void 0 !== i2.animate && (i2.zoom = l({ animate: i2.animate }, i2.zoom), i2.pan = l({ animate: i2.animate, duration: i2.duration }, i2.pan)), this._zoom !== e2 ? this._tryAnimatedZoom && this._tryAnimatedZoom(t2, e2, i2.zoom) : this._tryAnimatedPan(t2, i2.pan))) return clearTimeout(this._sizeTimer), this;
          return this._resetView(t2, e2, i2.pan && i2.pan.noMoveStart), this;
        }, setZoom: function(t2, e2) {
          return this._loaded ? this.setView(this.getCenter(), t2, { zoom: e2 }) : (this._zoom = t2, this);
        }, zoomIn: function(t2, e2) {
          return t2 = t2 || (b.any3d ? this.options.zoomDelta : 1), this.setZoom(this._zoom + t2, e2);
        }, zoomOut: function(t2, e2) {
          return t2 = t2 || (b.any3d ? this.options.zoomDelta : 1), this.setZoom(this._zoom - t2, e2);
        }, setZoomAround: function(t2, e2, i2) {
          var n2 = this.getZoomScale(e2), o2 = this.getSize().divideBy(2), t2 = (t2 instanceof p ? t2 : this.latLngToContainerPoint(t2)).subtract(o2).multiplyBy(1 - 1 / n2), n2 = this.containerPointToLatLng(o2.add(t2));
          return this.setView(n2, e2, { zoom: i2 });
        }, _getBoundsCenterZoom: function(t2, e2) {
          e2 = e2 || {}, t2 = t2.getBounds ? t2.getBounds() : g(t2);
          var i2 = m(e2.paddingTopLeft || e2.padding || [0, 0]), n2 = m(e2.paddingBottomRight || e2.padding || [0, 0]), o2 = this.getBoundsZoom(t2, false, i2.add(n2));
          return (o2 = "number" == typeof e2.maxZoom ? Math.min(e2.maxZoom, o2) : o2) === 1 / 0 ? { center: t2.getCenter(), zoom: o2 } : (e2 = n2.subtract(i2).divideBy(2), n2 = this.project(t2.getSouthWest(), o2), i2 = this.project(t2.getNorthEast(), o2), { center: this.unproject(n2.add(i2).divideBy(2).add(e2), o2), zoom: o2 });
        }, fitBounds: function(t2, e2) {
          if ((t2 = g(t2)).isValid()) return t2 = this._getBoundsCenterZoom(t2, e2), this.setView(t2.center, t2.zoom, e2);
          throw new Error("Bounds are not valid.");
        }, fitWorld: function(t2) {
          return this.fitBounds([[-90, -180], [90, 180]], t2);
        }, panTo: function(t2, e2) {
          return this.setView(t2, this._zoom, { pan: e2 });
        }, panBy: function(t2, e2) {
          var i2;
          return e2 = e2 || {}, (t2 = m(t2).round()).x || t2.y ? (true === e2.animate || this.getSize().contains(t2) ? (this._panAnim || (this._panAnim = new Fe(), this._panAnim.on({ step: this._onPanTransitionStep, end: this._onPanTransitionEnd }, this)), e2.noMoveStart || this.fire("movestart"), false !== e2.animate ? (M(this._mapPane, "leaflet-pan-anim"), i2 = this._getMapPanePos().subtract(t2).round(), this._panAnim.run(this._mapPane, i2, e2.duration || 0.25, e2.easeLinearity)) : (this._rawPanBy(t2), this.fire("move").fire("moveend"))) : this._resetView(this.unproject(this.project(this.getCenter()).add(t2)), this.getZoom()), this) : this.fire("moveend");
        }, flyTo: function(n2, o2, t2) {
          if (false === (t2 = t2 || {}).animate || !b.any3d) return this.setView(n2, o2, t2);
          this._stop();
          var s2 = this.project(this.getCenter()), r2 = this.project(n2), e2 = this.getSize(), a2 = this._zoom, h2 = (n2 = w(n2), o2 = void 0 === o2 ? a2 : o2, Math.max(e2.x, e2.y)), i2 = h2 * this.getZoomScale(a2, o2), l2 = r2.distanceTo(s2) || 1, u2 = 1.42, c2 = u2 * u2;
          function d2(t3) {
            t3 = (i2 * i2 - h2 * h2 + (t3 ? -1 : 1) * c2 * c2 * l2 * l2) / (2 * (t3 ? i2 : h2) * c2 * l2), t3 = Math.sqrt(t3 * t3 + 1) - t3;
            return t3 < 1e-9 ? -18 : Math.log(t3);
          }
          function _2(t3) {
            return (Math.exp(t3) - Math.exp(-t3)) / 2;
          }
          function p2(t3) {
            return (Math.exp(t3) + Math.exp(-t3)) / 2;
          }
          var m2 = d2(0);
          function f2(t3) {
            return h2 * (p2(m2) * (_2(t3 = m2 + u2 * t3) / p2(t3)) - _2(m2)) / c2;
          }
          var g2 = Date.now(), v2 = (d2(1) - m2) / u2, y2 = t2.duration ? 1e3 * t2.duration : 1e3 * v2 * 0.8;
          return this._moveStart(true, t2.noMoveStart), function t3() {
            var e3 = (Date.now() - g2) / y2, i3 = (1 - Math.pow(1 - e3, 1.5)) * v2;
            e3 <= 1 ? (this._flyToFrame = x(t3, this), this._move(this.unproject(s2.add(r2.subtract(s2).multiplyBy(f2(i3) / l2)), a2), this.getScaleZoom(h2 / (e3 = i3, h2 * (p2(m2) / p2(m2 + u2 * e3))), a2), { flyTo: true })) : this._move(n2, o2)._moveEnd(true);
          }.call(this), this;
        }, flyToBounds: function(t2, e2) {
          t2 = this._getBoundsCenterZoom(t2, e2);
          return this.flyTo(t2.center, t2.zoom, e2);
        }, setMaxBounds: function(t2) {
          return t2 = g(t2), this.listens("moveend", this._panInsideMaxBounds) && this.off("moveend", this._panInsideMaxBounds), t2.isValid() ? (this.options.maxBounds = t2, this._loaded && this._panInsideMaxBounds(), this.on("moveend", this._panInsideMaxBounds)) : (this.options.maxBounds = null, this);
        }, setMinZoom: function(t2) {
          var e2 = this.options.minZoom;
          return this.options.minZoom = t2, this._loaded && e2 !== t2 && (this.fire("zoomlevelschange"), this.getZoom() < this.options.minZoom) ? this.setZoom(t2) : this;
        }, setMaxZoom: function(t2) {
          var e2 = this.options.maxZoom;
          return this.options.maxZoom = t2, this._loaded && e2 !== t2 && (this.fire("zoomlevelschange"), this.getZoom() > this.options.maxZoom) ? this.setZoom(t2) : this;
        }, panInsideBounds: function(t2, e2) {
          this._enforcingBounds = true;
          var i2 = this.getCenter(), t2 = this._limitCenter(i2, this._zoom, g(t2));
          return i2.equals(t2) || this.panTo(t2, e2), this._enforcingBounds = false, this;
        }, panInside: function(t2, e2) {
          var i2 = m((e2 = e2 || {}).paddingTopLeft || e2.padding || [0, 0]), n2 = m(e2.paddingBottomRight || e2.padding || [0, 0]), o2 = this.project(this.getCenter()), t2 = this.project(t2), s2 = this.getPixelBounds(), i2 = _([s2.min.add(i2), s2.max.subtract(n2)]), s2 = i2.getSize();
          return i2.contains(t2) || (this._enforcingBounds = true, n2 = t2.subtract(i2.getCenter()), i2 = i2.extend(t2).getSize().subtract(s2), o2.x += n2.x < 0 ? -i2.x : i2.x, o2.y += n2.y < 0 ? -i2.y : i2.y, this.panTo(this.unproject(o2), e2), this._enforcingBounds = false), this;
        }, invalidateSize: function(t2) {
          if (!this._loaded) return this;
          t2 = l({ animate: false, pan: true }, true === t2 ? { animate: true } : t2);
          var e2 = this.getSize(), i2 = (this._sizeChanged = true, this._lastCenter = null, this.getSize()), n2 = e2.divideBy(2).round(), o2 = i2.divideBy(2).round(), n2 = n2.subtract(o2);
          return n2.x || n2.y ? (t2.animate && t2.pan ? this.panBy(n2) : (t2.pan && this._rawPanBy(n2), this.fire("move"), t2.debounceMoveend ? (clearTimeout(this._sizeTimer), this._sizeTimer = setTimeout(a(this.fire, this, "moveend"), 200)) : this.fire("moveend")), this.fire("resize", { oldSize: e2, newSize: i2 })) : this;
        }, stop: function() {
          return this.setZoom(this._limitZoom(this._zoom)), this.options.zoomSnap || this.fire("viewreset"), this._stop();
        }, locate: function(t2) {
          var e2, i2;
          return t2 = this._locateOptions = l({ timeout: 1e4, watch: false }, t2), "geolocation" in navigator ? (e2 = a(this._handleGeolocationResponse, this), i2 = a(this._handleGeolocationError, this), t2.watch ? this._locationWatchId = navigator.geolocation.watchPosition(e2, i2, t2) : navigator.geolocation.getCurrentPosition(e2, i2, t2)) : this._handleGeolocationError({ code: 0, message: "Geolocation not supported." }), this;
        }, stopLocate: function() {
          return navigator.geolocation && navigator.geolocation.clearWatch && navigator.geolocation.clearWatch(this._locationWatchId), this._locateOptions && (this._locateOptions.setView = false), this;
        }, _handleGeolocationError: function(t2) {
          var e2;
          this._container._leaflet_id && (e2 = t2.code, t2 = t2.message || (1 === e2 ? "permission denied" : 2 === e2 ? "position unavailable" : "timeout"), this._locateOptions.setView && !this._loaded && this.fitWorld(), this.fire("locationerror", { code: e2, message: "Geolocation error: " + t2 + "." }));
        }, _handleGeolocationResponse: function(t2) {
          if (this._container._leaflet_id) {
            var e2, i2, n2 = new v(t2.coords.latitude, t2.coords.longitude), o2 = n2.toBounds(2 * t2.coords.accuracy), s2 = this._locateOptions, r2 = (s2.setView && (e2 = this.getBoundsZoom(o2), this.setView(n2, s2.maxZoom ? Math.min(e2, s2.maxZoom) : e2)), { latlng: n2, bounds: o2, timestamp: t2.timestamp });
            for (i2 in t2.coords) "number" == typeof t2.coords[i2] && (r2[i2] = t2.coords[i2]);
            this.fire("locationfound", r2);
          }
        }, addHandler: function(t2, e2) {
          return e2 && (e2 = this[t2] = new e2(this), this._handlers.push(e2), this.options[t2] && e2.enable()), this;
        }, remove: function() {
          if (this._initEvents(true), this.options.maxBounds && this.off("moveend", this._panInsideMaxBounds), this._containerId !== this._container._leaflet_id) throw new Error("Map container is being reused by another instance");
          try {
            delete this._container._leaflet_id, delete this._containerId;
          } catch (t3) {
            this._container._leaflet_id = void 0, this._containerId = void 0;
          }
          for (var t2 in void 0 !== this._locationWatchId && this.stopLocate(), this._stop(), T(this._mapPane), this._clearControlPos && this._clearControlPos(), this._resizeRequest && (r(this._resizeRequest), this._resizeRequest = null), this._clearHandlers(), this._loaded && this.fire("unload"), this._layers) this._layers[t2].remove();
          for (t2 in this._panes) T(this._panes[t2]);
          return this._layers = [], this._panes = [], delete this._mapPane, delete this._renderer, this;
        }, createPane: function(t2, e2) {
          e2 = P("div", "leaflet-pane" + (t2 ? " leaflet-" + t2.replace("Pane", "") + "-pane" : ""), e2 || this._mapPane);
          return t2 && (this._panes[t2] = e2), e2;
        }, getCenter: function() {
          return this._checkIfLoaded(), this._lastCenter && !this._moved() ? this._lastCenter.clone() : this.layerPointToLatLng(this._getCenterLayerPoint());
        }, getZoom: function() {
          return this._zoom;
        }, getBounds: function() {
          var t2 = this.getPixelBounds();
          return new s(this.unproject(t2.getBottomLeft()), this.unproject(t2.getTopRight()));
        }, getMinZoom: function() {
          return void 0 === this.options.minZoom ? this._layersMinZoom || 0 : this.options.minZoom;
        }, getMaxZoom: function() {
          return void 0 === this.options.maxZoom ? void 0 === this._layersMaxZoom ? 1 / 0 : this._layersMaxZoom : this.options.maxZoom;
        }, getBoundsZoom: function(t2, e2, i2) {
          t2 = g(t2), i2 = m(i2 || [0, 0]);
          var n2 = this.getZoom() || 0, o2 = this.getMinZoom(), s2 = this.getMaxZoom(), r2 = t2.getNorthWest(), t2 = t2.getSouthEast(), i2 = this.getSize().subtract(i2), t2 = _(this.project(t2, n2), this.project(r2, n2)).getSize(), r2 = b.any3d ? this.options.zoomSnap : 1, a2 = i2.x / t2.x, i2 = i2.y / t2.y, t2 = e2 ? Math.max(a2, i2) : Math.min(a2, i2), n2 = this.getScaleZoom(t2, n2);
          return r2 && (n2 = Math.round(n2 / (r2 / 100)) * (r2 / 100), n2 = e2 ? Math.ceil(n2 / r2) * r2 : Math.floor(n2 / r2) * r2), Math.max(o2, Math.min(s2, n2));
        }, getSize: function() {
          return this._size && !this._sizeChanged || (this._size = new p(this._container.clientWidth || 0, this._container.clientHeight || 0), this._sizeChanged = false), this._size.clone();
        }, getPixelBounds: function(t2, e2) {
          t2 = this._getTopLeftPoint(t2, e2);
          return new f(t2, t2.add(this.getSize()));
        }, getPixelOrigin: function() {
          return this._checkIfLoaded(), this._pixelOrigin;
        }, getPixelWorldBounds: function(t2) {
          return this.options.crs.getProjectedBounds(void 0 === t2 ? this.getZoom() : t2);
        }, getPane: function(t2) {
          return "string" == typeof t2 ? this._panes[t2] : t2;
        }, getPanes: function() {
          return this._panes;
        }, getContainer: function() {
          return this._container;
        }, getZoomScale: function(t2, e2) {
          var i2 = this.options.crs;
          return e2 = void 0 === e2 ? this._zoom : e2, i2.scale(t2) / i2.scale(e2);
        }, getScaleZoom: function(t2, e2) {
          var i2 = this.options.crs, t2 = (e2 = void 0 === e2 ? this._zoom : e2, i2.zoom(t2 * i2.scale(e2)));
          return isNaN(t2) ? 1 / 0 : t2;
        }, project: function(t2, e2) {
          return e2 = void 0 === e2 ? this._zoom : e2, this.options.crs.latLngToPoint(w(t2), e2);
        }, unproject: function(t2, e2) {
          return e2 = void 0 === e2 ? this._zoom : e2, this.options.crs.pointToLatLng(m(t2), e2);
        }, layerPointToLatLng: function(t2) {
          t2 = m(t2).add(this.getPixelOrigin());
          return this.unproject(t2);
        }, latLngToLayerPoint: function(t2) {
          return this.project(w(t2))._round()._subtract(this.getPixelOrigin());
        }, wrapLatLng: function(t2) {
          return this.options.crs.wrapLatLng(w(t2));
        }, wrapLatLngBounds: function(t2) {
          return this.options.crs.wrapLatLngBounds(g(t2));
        }, distance: function(t2, e2) {
          return this.options.crs.distance(w(t2), w(e2));
        }, containerPointToLayerPoint: function(t2) {
          return m(t2).subtract(this._getMapPanePos());
        }, layerPointToContainerPoint: function(t2) {
          return m(t2).add(this._getMapPanePos());
        }, containerPointToLatLng: function(t2) {
          t2 = this.containerPointToLayerPoint(m(t2));
          return this.layerPointToLatLng(t2);
        }, latLngToContainerPoint: function(t2) {
          return this.layerPointToContainerPoint(this.latLngToLayerPoint(w(t2)));
        }, mouseEventToContainerPoint: function(t2) {
          return De(t2, this._container);
        }, mouseEventToLayerPoint: function(t2) {
          return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(t2));
        }, mouseEventToLatLng: function(t2) {
          return this.layerPointToLatLng(this.mouseEventToLayerPoint(t2));
        }, _initContainer: function(t2) {
          t2 = this._container = _e(t2);
          if (!t2) throw new Error("Map container not found.");
          if (t2._leaflet_id) throw new Error("Map container is already initialized.");
          S(t2, "scroll", this._onScroll, this), this._containerId = h(t2);
        }, _initLayout: function() {
          var t2 = this._container, e2 = (this._fadeAnimated = this.options.fadeAnimation && b.any3d, M(t2, "leaflet-container" + (b.touch ? " leaflet-touch" : "") + (b.retina ? " leaflet-retina" : "") + (b.ielt9 ? " leaflet-oldie" : "") + (b.safari ? " leaflet-safari" : "") + (this._fadeAnimated ? " leaflet-fade-anim" : "")), pe(t2, "position"));
          "absolute" !== e2 && "relative" !== e2 && "fixed" !== e2 && "sticky" !== e2 && (t2.style.position = "relative"), this._initPanes(), this._initControlPos && this._initControlPos();
        }, _initPanes: function() {
          var t2 = this._panes = {};
          this._paneRenderers = {}, this._mapPane = this.createPane("mapPane", this._container), Z(this._mapPane, new p(0, 0)), this.createPane("tilePane"), this.createPane("overlayPane"), this.createPane("shadowPane"), this.createPane("markerPane"), this.createPane("tooltipPane"), this.createPane("popupPane"), this.options.markerZoomAnimation || (M(t2.markerPane, "leaflet-zoom-hide"), M(t2.shadowPane, "leaflet-zoom-hide"));
        }, _resetView: function(t2, e2, i2) {
          Z(this._mapPane, new p(0, 0));
          var n2 = !this._loaded, o2 = (this._loaded = true, e2 = this._limitZoom(e2), this.fire("viewprereset"), this._zoom !== e2);
          this._moveStart(o2, i2)._move(t2, e2)._moveEnd(o2), this.fire("viewreset"), n2 && this.fire("load");
        }, _moveStart: function(t2, e2) {
          return t2 && this.fire("zoomstart"), e2 || this.fire("movestart"), this;
        }, _move: function(t2, e2, i2, n2) {
          void 0 === e2 && (e2 = this._zoom);
          var o2 = this._zoom !== e2;
          return this._zoom = e2, this._lastCenter = t2, this._pixelOrigin = this._getNewPixelOrigin(t2), n2 ? i2 && i2.pinch && this.fire("zoom", i2) : ((o2 || i2 && i2.pinch) && this.fire("zoom", i2), this.fire("move", i2)), this;
        }, _moveEnd: function(t2) {
          return t2 && this.fire("zoomend"), this.fire("moveend");
        }, _stop: function() {
          return r(this._flyToFrame), this._panAnim && this._panAnim.stop(), this;
        }, _rawPanBy: function(t2) {
          Z(this._mapPane, this._getMapPanePos().subtract(t2));
        }, _getZoomSpan: function() {
          return this.getMaxZoom() - this.getMinZoom();
        }, _panInsideMaxBounds: function() {
          this._enforcingBounds || this.panInsideBounds(this.options.maxBounds);
        }, _checkIfLoaded: function() {
          if (!this._loaded) throw new Error("Set map center and zoom first.");
        }, _initEvents: function(t2) {
          this._targets = {};
          var e2 = t2 ? k : S;
          e2((this._targets[h(this._container)] = this)._container, "click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup", this._handleDOMEvent, this), this.options.trackResize && e2(window, "resize", this._onResize, this), b.any3d && this.options.transform3DLimit && (t2 ? this.off : this.on).call(this, "moveend", this._onMoveEnd);
        }, _onResize: function() {
          r(this._resizeRequest), this._resizeRequest = x(function() {
            this.invalidateSize({ debounceMoveend: true });
          }, this);
        }, _onScroll: function() {
          this._container.scrollTop = 0, this._container.scrollLeft = 0;
        }, _onMoveEnd: function() {
          var t2 = this._getMapPanePos();
          Math.max(Math.abs(t2.x), Math.abs(t2.y)) >= this.options.transform3DLimit && this._resetView(this.getCenter(), this.getZoom());
        }, _findEventTargets: function(t2, e2) {
          for (var i2, n2 = [], o2 = "mouseout" === e2 || "mouseover" === e2, s2 = t2.target || t2.srcElement, r2 = false; s2; ) {
            if ((i2 = this._targets[h(s2)]) && ("click" === e2 || "preclick" === e2) && this._draggableMoved(i2)) {
              r2 = true;
              break;
            }
            if (i2 && i2.listens(e2, true)) {
              if (o2 && !We(s2, t2)) break;
              if (n2.push(i2), o2) break;
            }
            if (s2 === this._container) break;
            s2 = s2.parentNode;
          }
          return n2 = n2.length || r2 || o2 || !this.listens(e2, true) ? n2 : [this];
        }, _isClickDisabled: function(t2) {
          for (; t2 && t2 !== this._container; ) {
            if (t2._leaflet_disable_click) return true;
            t2 = t2.parentNode;
          }
        }, _handleDOMEvent: function(t2) {
          var e2, i2 = t2.target || t2.srcElement;
          !this._loaded || i2._leaflet_disable_events || "click" === t2.type && this._isClickDisabled(i2) || ("mousedown" === (e2 = t2.type) && Me(i2), this._fireDOMEvent(t2, e2));
        }, _mouseEvents: ["click", "dblclick", "mouseover", "mouseout", "contextmenu"], _fireDOMEvent: function(t2, e2, i2) {
          "click" === t2.type && ((a2 = l({}, t2)).type = "preclick", this._fireDOMEvent(a2, a2.type, i2));
          var n2 = this._findEventTargets(t2, e2);
          if (i2) {
            for (var o2 = [], s2 = 0; s2 < i2.length; s2++) i2[s2].listens(e2, true) && o2.push(i2[s2]);
            n2 = o2.concat(n2);
          }
          if (n2.length) {
            "contextmenu" === e2 && O(t2);
            var r2, a2 = n2[0], h2 = { originalEvent: t2 };
            for ("keypress" !== t2.type && "keydown" !== t2.type && "keyup" !== t2.type && (r2 = a2.getLatLng && (!a2._radius || a2._radius <= 10), h2.containerPoint = r2 ? this.latLngToContainerPoint(a2.getLatLng()) : this.mouseEventToContainerPoint(t2), h2.layerPoint = this.containerPointToLayerPoint(h2.containerPoint), h2.latlng = r2 ? a2.getLatLng() : this.layerPointToLatLng(h2.layerPoint)), s2 = 0; s2 < n2.length; s2++) if (n2[s2].fire(e2, h2, true), h2.originalEvent._stopped || false === n2[s2].options.bubblingMouseEvents && -1 !== G(this._mouseEvents, e2)) return;
          }
        }, _draggableMoved: function(t2) {
          return (t2 = t2.dragging && t2.dragging.enabled() ? t2 : this).dragging && t2.dragging.moved() || this.boxZoom && this.boxZoom.moved();
        }, _clearHandlers: function() {
          for (var t2 = 0, e2 = this._handlers.length; t2 < e2; t2++) this._handlers[t2].disable();
        }, whenReady: function(t2, e2) {
          return this._loaded ? t2.call(e2 || this, { target: this }) : this.on("load", t2, e2), this;
        }, _getMapPanePos: function() {
          return Pe(this._mapPane) || new p(0, 0);
        }, _moved: function() {
          var t2 = this._getMapPanePos();
          return t2 && !t2.equals([0, 0]);
        }, _getTopLeftPoint: function(t2, e2) {
          return (t2 && void 0 !== e2 ? this._getNewPixelOrigin(t2, e2) : this.getPixelOrigin()).subtract(this._getMapPanePos());
        }, _getNewPixelOrigin: function(t2, e2) {
          var i2 = this.getSize()._divideBy(2);
          return this.project(t2, e2)._subtract(i2)._add(this._getMapPanePos())._round();
        }, _latLngToNewLayerPoint: function(t2, e2, i2) {
          i2 = this._getNewPixelOrigin(i2, e2);
          return this.project(t2, e2)._subtract(i2);
        }, _latLngBoundsToNewLayerBounds: function(t2, e2, i2) {
          i2 = this._getNewPixelOrigin(i2, e2);
          return _([this.project(t2.getSouthWest(), e2)._subtract(i2), this.project(t2.getNorthWest(), e2)._subtract(i2), this.project(t2.getSouthEast(), e2)._subtract(i2), this.project(t2.getNorthEast(), e2)._subtract(i2)]);
        }, _getCenterLayerPoint: function() {
          return this.containerPointToLayerPoint(this.getSize()._divideBy(2));
        }, _getCenterOffset: function(t2) {
          return this.latLngToLayerPoint(t2).subtract(this._getCenterLayerPoint());
        }, _limitCenter: function(t2, e2, i2) {
          var n2, o2;
          return !i2 || (n2 = this.project(t2, e2), o2 = this.getSize().divideBy(2), o2 = new f(n2.subtract(o2), n2.add(o2)), o2 = this._getBoundsOffset(o2, i2, e2), Math.abs(o2.x) <= 1 && Math.abs(o2.y) <= 1) ? t2 : this.unproject(n2.add(o2), e2);
        }, _limitOffset: function(t2, e2) {
          var i2;
          return e2 ? (i2 = new f((i2 = this.getPixelBounds()).min.add(t2), i2.max.add(t2)), t2.add(this._getBoundsOffset(i2, e2))) : t2;
        }, _getBoundsOffset: function(t2, e2, i2) {
          e2 = _(this.project(e2.getNorthEast(), i2), this.project(e2.getSouthWest(), i2)), i2 = e2.min.subtract(t2.min), e2 = e2.max.subtract(t2.max);
          return new p(this._rebound(i2.x, -e2.x), this._rebound(i2.y, -e2.y));
        }, _rebound: function(t2, e2) {
          return 0 < t2 + e2 ? Math.round(t2 - e2) / 2 : Math.max(0, Math.ceil(t2)) - Math.max(0, Math.floor(e2));
        }, _limitZoom: function(t2) {
          var e2 = this.getMinZoom(), i2 = this.getMaxZoom(), n2 = b.any3d ? this.options.zoomSnap : 1;
          return n2 && (t2 = Math.round(t2 / n2) * n2), Math.max(e2, Math.min(i2, t2));
        }, _onPanTransitionStep: function() {
          this.fire("move");
        }, _onPanTransitionEnd: function() {
          z(this._mapPane, "leaflet-pan-anim"), this.fire("moveend");
        }, _tryAnimatedPan: function(t2, e2) {
          t2 = this._getCenterOffset(t2)._trunc();
          return !(true !== (e2 && e2.animate) && !this.getSize().contains(t2)) && (this.panBy(t2, e2), true);
        }, _createAnimProxy: function() {
          var t2 = this._proxy = P("div", "leaflet-proxy leaflet-zoom-animated");
          this._panes.mapPane.appendChild(t2), this.on("zoomanim", function(t3) {
            var e2 = ue, i2 = this._proxy.style[e2];
            be(this._proxy, this.project(t3.center, t3.zoom), this.getZoomScale(t3.zoom, 1)), i2 === this._proxy.style[e2] && this._animatingZoom && this._onZoomTransitionEnd();
          }, this), this.on("load moveend", this._animMoveEnd, this), this._on("unload", this._destroyAnimProxy, this);
        }, _destroyAnimProxy: function() {
          T(this._proxy), this.off("load moveend", this._animMoveEnd, this), delete this._proxy;
        }, _animMoveEnd: function() {
          var t2 = this.getCenter(), e2 = this.getZoom();
          be(this._proxy, this.project(t2, e2), this.getZoomScale(e2, 1));
        }, _catchTransitionEnd: function(t2) {
          this._animatingZoom && 0 <= t2.propertyName.indexOf("transform") && this._onZoomTransitionEnd();
        }, _nothingToAnimate: function() {
          return !this._container.getElementsByClassName("leaflet-zoom-animated").length;
        }, _tryAnimatedZoom: function(t2, e2, i2) {
          if (!this._animatingZoom) {
            if (i2 = i2 || {}, !this._zoomAnimated || false === i2.animate || this._nothingToAnimate() || Math.abs(e2 - this._zoom) > this.options.zoomAnimationThreshold) return false;
            var n2 = this.getZoomScale(e2), n2 = this._getCenterOffset(t2)._divideBy(1 - 1 / n2);
            if (true !== i2.animate && !this.getSize().contains(n2)) return false;
            x(function() {
              this._moveStart(true, i2.noMoveStart || false)._animateZoom(t2, e2, true);
            }, this);
          }
          return true;
        }, _animateZoom: function(t2, e2, i2, n2) {
          this._mapPane && (i2 && (this._animatingZoom = true, this._animateToCenter = t2, this._animateToZoom = e2, M(this._mapPane, "leaflet-zoom-anim")), this.fire("zoomanim", { center: t2, zoom: e2, noUpdate: n2 }), this._tempFireZoomEvent || (this._tempFireZoomEvent = this._zoom !== this._animateToZoom), this._move(this._animateToCenter, this._animateToZoom, void 0, true), setTimeout(a(this._onZoomTransitionEnd, this), 250));
        }, _onZoomTransitionEnd: function() {
          this._animatingZoom && (this._mapPane && z(this._mapPane, "leaflet-zoom-anim"), this._animatingZoom = false, this._move(this._animateToCenter, this._animateToZoom, void 0, true), this._tempFireZoomEvent && this.fire("zoom"), delete this._tempFireZoomEvent, this.fire("move"), this._moveEnd(true));
        } });
        function Ue(t2) {
          return new B(t2);
        }
        var B = et.extend({ options: { position: "topright" }, initialize: function(t2) {
          c(this, t2);
        }, getPosition: function() {
          return this.options.position;
        }, setPosition: function(t2) {
          var e2 = this._map;
          return e2 && e2.removeControl(this), this.options.position = t2, e2 && e2.addControl(this), this;
        }, getContainer: function() {
          return this._container;
        }, addTo: function(t2) {
          this.remove(), this._map = t2;
          var e2 = this._container = this.onAdd(t2), i2 = this.getPosition(), t2 = t2._controlCorners[i2];
          return M(e2, "leaflet-control"), -1 !== i2.indexOf("bottom") ? t2.insertBefore(e2, t2.firstChild) : t2.appendChild(e2), this._map.on("unload", this.remove, this), this;
        }, remove: function() {
          return this._map && (T(this._container), this.onRemove && this.onRemove(this._map), this._map.off("unload", this.remove, this), this._map = null), this;
        }, _refocusOnMap: function(t2) {
          this._map && t2 && 0 < t2.screenX && 0 < t2.screenY && this._map.getContainer().focus();
        } }), Ve = (A.include({ addControl: function(t2) {
          return t2.addTo(this), this;
        }, removeControl: function(t2) {
          return t2.remove(), this;
        }, _initControlPos: function() {
          var i2 = this._controlCorners = {}, n2 = "leaflet-", o2 = this._controlContainer = P("div", n2 + "control-container", this._container);
          function t2(t3, e2) {
            i2[t3 + e2] = P("div", n2 + t3 + " " + n2 + e2, o2);
          }
          t2("top", "left"), t2("top", "right"), t2("bottom", "left"), t2("bottom", "right");
        }, _clearControlPos: function() {
          for (var t2 in this._controlCorners) T(this._controlCorners[t2]);
          T(this._controlContainer), delete this._controlCorners, delete this._controlContainer;
        } }), B.extend({ options: { collapsed: true, position: "topright", autoZIndex: true, hideSingleBase: false, sortLayers: false, sortFunction: function(t2, e2, i2, n2) {
          return i2 < n2 ? -1 : n2 < i2 ? 1 : 0;
        } }, initialize: function(t2, e2, i2) {
          for (var n2 in c(this, i2), this._layerControlInputs = [], this._layers = [], this._lastZIndex = 0, this._handlingClick = false, this._preventClick = false, t2) this._addLayer(t2[n2], n2);
          for (n2 in e2) this._addLayer(e2[n2], n2, true);
        }, onAdd: function(t2) {
          this._initLayout(), this._update(), (this._map = t2).on("zoomend", this._checkDisabledLayers, this);
          for (var e2 = 0; e2 < this._layers.length; e2++) this._layers[e2].layer.on("add remove", this._onLayerChange, this);
          return this._container;
        }, addTo: function(t2) {
          return B.prototype.addTo.call(this, t2), this._expandIfNotCollapsed();
        }, onRemove: function() {
          this._map.off("zoomend", this._checkDisabledLayers, this);
          for (var t2 = 0; t2 < this._layers.length; t2++) this._layers[t2].layer.off("add remove", this._onLayerChange, this);
        }, addBaseLayer: function(t2, e2) {
          return this._addLayer(t2, e2), this._map ? this._update() : this;
        }, addOverlay: function(t2, e2) {
          return this._addLayer(t2, e2, true), this._map ? this._update() : this;
        }, removeLayer: function(t2) {
          t2.off("add remove", this._onLayerChange, this);
          t2 = this._getLayer(h(t2));
          return t2 && this._layers.splice(this._layers.indexOf(t2), 1), this._map ? this._update() : this;
        }, expand: function() {
          M(this._container, "leaflet-control-layers-expanded"), this._section.style.height = null;
          var t2 = this._map.getSize().y - (this._container.offsetTop + 50);
          return t2 < this._section.clientHeight ? (M(this._section, "leaflet-control-layers-scrollbar"), this._section.style.height = t2 + "px") : z(this._section, "leaflet-control-layers-scrollbar"), this._checkDisabledLayers(), this;
        }, collapse: function() {
          return z(this._container, "leaflet-control-layers-expanded"), this;
        }, _initLayout: function() {
          var t2 = "leaflet-control-layers", e2 = this._container = P("div", t2), i2 = this.options.collapsed, n2 = (e2.setAttribute("aria-haspopup", true), Ie(e2), Be(e2), this._section = P("section", t2 + "-list")), o2 = (i2 && (this._map.on("click", this.collapse, this), S(e2, { mouseenter: this._expandSafely, mouseleave: this.collapse }, this)), this._layersLink = P("a", t2 + "-toggle", e2));
          o2.href = "#", o2.title = "Layers", o2.setAttribute("role", "button"), S(o2, { keydown: function(t3) {
            13 === t3.keyCode && this._expandSafely();
          }, click: function(t3) {
            O(t3), this._expandSafely();
          } }, this), i2 || this.expand(), this._baseLayersList = P("div", t2 + "-base", n2), this._separator = P("div", t2 + "-separator", n2), this._overlaysList = P("div", t2 + "-overlays", n2), e2.appendChild(n2);
        }, _getLayer: function(t2) {
          for (var e2 = 0; e2 < this._layers.length; e2++) if (this._layers[e2] && h(this._layers[e2].layer) === t2) return this._layers[e2];
        }, _addLayer: function(t2, e2, i2) {
          this._map && t2.on("add remove", this._onLayerChange, this), this._layers.push({ layer: t2, name: e2, overlay: i2 }), this.options.sortLayers && this._layers.sort(a(function(t3, e3) {
            return this.options.sortFunction(t3.layer, e3.layer, t3.name, e3.name);
          }, this)), this.options.autoZIndex && t2.setZIndex && (this._lastZIndex++, t2.setZIndex(this._lastZIndex)), this._expandIfNotCollapsed();
        }, _update: function() {
          if (this._container) {
            me(this._baseLayersList), me(this._overlaysList), this._layerControlInputs = [];
            for (var t2, e2, i2, n2 = 0, o2 = 0; o2 < this._layers.length; o2++) i2 = this._layers[o2], this._addItem(i2), e2 = e2 || i2.overlay, t2 = t2 || !i2.overlay, n2 += i2.overlay ? 0 : 1;
            this.options.hideSingleBase && (this._baseLayersList.style.display = (t2 = t2 && 1 < n2) ? "" : "none"), this._separator.style.display = e2 && t2 ? "" : "none";
          }
          return this;
        }, _onLayerChange: function(t2) {
          this._handlingClick || this._update();
          var e2 = this._getLayer(h(t2.target)), t2 = e2.overlay ? "add" === t2.type ? "overlayadd" : "overlayremove" : "add" === t2.type ? "baselayerchange" : null;
          t2 && this._map.fire(t2, e2);
        }, _createRadioElement: function(t2, e2) {
          t2 = '<input type="radio" class="leaflet-control-layers-selector" name="' + t2 + '"' + (e2 ? ' checked="checked"' : "") + "/>", e2 = document.createElement("div");
          return e2.innerHTML = t2, e2.firstChild;
        }, _addItem: function(t2) {
          var e2, i2 = document.createElement("label"), n2 = this._map.hasLayer(t2.layer), n2 = (t2.overlay ? ((e2 = document.createElement("input")).type = "checkbox", e2.className = "leaflet-control-layers-selector", e2.defaultChecked = n2) : e2 = this._createRadioElement("leaflet-base-layers_" + h(this), n2), this._layerControlInputs.push(e2), e2.layerId = h(t2.layer), S(e2, "click", this._onInputClick, this), document.createElement("span")), o2 = (n2.innerHTML = " " + t2.name, document.createElement("span"));
          return i2.appendChild(o2), o2.appendChild(e2), o2.appendChild(n2), (t2.overlay ? this._overlaysList : this._baseLayersList).appendChild(i2), this._checkDisabledLayers(), i2;
        }, _onInputClick: function() {
          if (!this._preventClick) {
            var t2, e2, i2 = this._layerControlInputs, n2 = [], o2 = [];
            this._handlingClick = true;
            for (var s2 = i2.length - 1; 0 <= s2; s2--) t2 = i2[s2], e2 = this._getLayer(t2.layerId).layer, t2.checked ? n2.push(e2) : t2.checked || o2.push(e2);
            for (s2 = 0; s2 < o2.length; s2++) this._map.hasLayer(o2[s2]) && this._map.removeLayer(o2[s2]);
            for (s2 = 0; s2 < n2.length; s2++) this._map.hasLayer(n2[s2]) || this._map.addLayer(n2[s2]);
            this._handlingClick = false, this._refocusOnMap();
          }
        }, _checkDisabledLayers: function() {
          for (var t2, e2, i2 = this._layerControlInputs, n2 = this._map.getZoom(), o2 = i2.length - 1; 0 <= o2; o2--) t2 = i2[o2], e2 = this._getLayer(t2.layerId).layer, t2.disabled = void 0 !== e2.options.minZoom && n2 < e2.options.minZoom || void 0 !== e2.options.maxZoom && n2 > e2.options.maxZoom;
        }, _expandIfNotCollapsed: function() {
          return this._map && !this.options.collapsed && this.expand(), this;
        }, _expandSafely: function() {
          var t2 = this._section, e2 = (this._preventClick = true, S(t2, "click", O), this.expand(), this);
          setTimeout(function() {
            k(t2, "click", O), e2._preventClick = false;
          });
        } })), qe = B.extend({ options: { position: "topleft", zoomInText: '<span aria-hidden="true">+</span>', zoomInTitle: "Zoom in", zoomOutText: '<span aria-hidden="true">&#x2212;</span>', zoomOutTitle: "Zoom out" }, onAdd: function(t2) {
          var e2 = "leaflet-control-zoom", i2 = P("div", e2 + " leaflet-bar"), n2 = this.options;
          return this._zoomInButton = this._createButton(n2.zoomInText, n2.zoomInTitle, e2 + "-in", i2, this._zoomIn), this._zoomOutButton = this._createButton(n2.zoomOutText, n2.zoomOutTitle, e2 + "-out", i2, this._zoomOut), this._updateDisabled(), t2.on("zoomend zoomlevelschange", this._updateDisabled, this), i2;
        }, onRemove: function(t2) {
          t2.off("zoomend zoomlevelschange", this._updateDisabled, this);
        }, disable: function() {
          return this._disabled = true, this._updateDisabled(), this;
        }, enable: function() {
          return this._disabled = false, this._updateDisabled(), this;
        }, _zoomIn: function(t2) {
          !this._disabled && this._map._zoom < this._map.getMaxZoom() && this._map.zoomIn(this._map.options.zoomDelta * (t2.shiftKey ? 3 : 1));
        }, _zoomOut: function(t2) {
          !this._disabled && this._map._zoom > this._map.getMinZoom() && this._map.zoomOut(this._map.options.zoomDelta * (t2.shiftKey ? 3 : 1));
        }, _createButton: function(t2, e2, i2, n2, o2) {
          i2 = P("a", i2, n2);
          return i2.innerHTML = t2, i2.href = "#", i2.title = e2, i2.setAttribute("role", "button"), i2.setAttribute("aria-label", e2), Ie(i2), S(i2, "click", Re), S(i2, "click", o2, this), S(i2, "click", this._refocusOnMap, this), i2;
        }, _updateDisabled: function() {
          var t2 = this._map, e2 = "leaflet-disabled";
          z(this._zoomInButton, e2), z(this._zoomOutButton, e2), this._zoomInButton.setAttribute("aria-disabled", "false"), this._zoomOutButton.setAttribute("aria-disabled", "false"), !this._disabled && t2._zoom !== t2.getMinZoom() || (M(this._zoomOutButton, e2), this._zoomOutButton.setAttribute("aria-disabled", "true")), !this._disabled && t2._zoom !== t2.getMaxZoom() || (M(this._zoomInButton, e2), this._zoomInButton.setAttribute("aria-disabled", "true"));
        } }), Ge = (A.mergeOptions({ zoomControl: true }), A.addInitHook(function() {
          this.options.zoomControl && (this.zoomControl = new qe(), this.addControl(this.zoomControl));
        }), B.extend({ options: { position: "bottomleft", maxWidth: 100, metric: true, imperial: true }, onAdd: function(t2) {
          var e2 = "leaflet-control-scale", i2 = P("div", e2), n2 = this.options;
          return this._addScales(n2, e2 + "-line", i2), t2.on(n2.updateWhenIdle ? "moveend" : "move", this._update, this), t2.whenReady(this._update, this), i2;
        }, onRemove: function(t2) {
          t2.off(this.options.updateWhenIdle ? "moveend" : "move", this._update, this);
        }, _addScales: function(t2, e2, i2) {
          t2.metric && (this._mScale = P("div", e2, i2)), t2.imperial && (this._iScale = P("div", e2, i2));
        }, _update: function() {
          var t2 = this._map, e2 = t2.getSize().y / 2, t2 = t2.distance(t2.containerPointToLatLng([0, e2]), t2.containerPointToLatLng([this.options.maxWidth, e2]));
          this._updateScales(t2);
        }, _updateScales: function(t2) {
          this.options.metric && t2 && this._updateMetric(t2), this.options.imperial && t2 && this._updateImperial(t2);
        }, _updateMetric: function(t2) {
          var e2 = this._getRoundNum(t2);
          this._updateScale(this._mScale, e2 < 1e3 ? e2 + " m" : e2 / 1e3 + " km", e2 / t2);
        }, _updateImperial: function(t2) {
          var e2, i2, t2 = 3.2808399 * t2;
          5280 < t2 ? (i2 = this._getRoundNum(e2 = t2 / 5280), this._updateScale(this._iScale, i2 + " mi", i2 / e2)) : (i2 = this._getRoundNum(t2), this._updateScale(this._iScale, i2 + " ft", i2 / t2));
        }, _updateScale: function(t2, e2, i2) {
          t2.style.width = Math.round(this.options.maxWidth * i2) + "px", t2.innerHTML = e2;
        }, _getRoundNum: function(t2) {
          var e2 = Math.pow(10, (Math.floor(t2) + "").length - 1), t2 = t2 / e2;
          return e2 * (t2 = 10 <= t2 ? 10 : 5 <= t2 ? 5 : 3 <= t2 ? 3 : 2 <= t2 ? 2 : 1);
        } })), Ke = B.extend({ options: { position: "bottomright", prefix: '<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">' + (b.inlineSvg ? '<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg> ' : "") + "Leaflet</a>" }, initialize: function(t2) {
          c(this, t2), this._attributions = {};
        }, onAdd: function(t2) {
          for (var e2 in (t2.attributionControl = this)._container = P("div", "leaflet-control-attribution"), Ie(this._container), t2._layers) t2._layers[e2].getAttribution && this.addAttribution(t2._layers[e2].getAttribution());
          return this._update(), t2.on("layeradd", this._addAttribution, this), this._container;
        }, onRemove: function(t2) {
          t2.off("layeradd", this._addAttribution, this);
        }, _addAttribution: function(t2) {
          t2.layer.getAttribution && (this.addAttribution(t2.layer.getAttribution()), t2.layer.once("remove", function() {
            this.removeAttribution(t2.layer.getAttribution());
          }, this));
        }, setPrefix: function(t2) {
          return this.options.prefix = t2, this._update(), this;
        }, addAttribution: function(t2) {
          return t2 && (this._attributions[t2] || (this._attributions[t2] = 0), this._attributions[t2]++, this._update()), this;
        }, removeAttribution: function(t2) {
          return t2 && this._attributions[t2] && (this._attributions[t2]--, this._update()), this;
        }, _update: function() {
          if (this._map) {
            var t2, e2 = [];
            for (t2 in this._attributions) this._attributions[t2] && e2.push(t2);
            var i2 = [];
            this.options.prefix && i2.push(this.options.prefix), e2.length && i2.push(e2.join(", ")), this._container.innerHTML = i2.join(' <span aria-hidden="true">|</span> ');
          }
        } }), n = (A.mergeOptions({ attributionControl: true }), A.addInitHook(function() {
          this.options.attributionControl && new Ke().addTo(this);
        }), B.Layers = Ve, B.Zoom = qe, B.Scale = Ge, B.Attribution = Ke, Ue.layers = function(t2, e2, i2) {
          return new Ve(t2, e2, i2);
        }, Ue.zoom = function(t2) {
          return new qe(t2);
        }, Ue.scale = function(t2) {
          return new Ge(t2);
        }, Ue.attribution = function(t2) {
          return new Ke(t2);
        }, et.extend({ initialize: function(t2) {
          this._map = t2;
        }, enable: function() {
          return this._enabled || (this._enabled = true, this.addHooks()), this;
        }, disable: function() {
          return this._enabled && (this._enabled = false, this.removeHooks()), this;
        }, enabled: function() {
          return !!this._enabled;
        } })), ft = (n.addTo = function(t2, e2) {
          return t2.addHandler(e2, this), this;
        }, { Events: e }), Ye = b.touch ? "touchstart mousedown" : "mousedown", Xe = it.extend({ options: { clickTolerance: 3 }, initialize: function(t2, e2, i2, n2) {
          c(this, n2), this._element = t2, this._dragStartTarget = e2 || t2, this._preventOutline = i2;
        }, enable: function() {
          this._enabled || (S(this._dragStartTarget, Ye, this._onDown, this), this._enabled = true);
        }, disable: function() {
          this._enabled && (Xe._dragging === this && this.finishDrag(true), k(this._dragStartTarget, Ye, this._onDown, this), this._enabled = false, this._moved = false);
        }, _onDown: function(t2) {
          var e2, i2;
          this._enabled && (this._moved = false, ve(this._element, "leaflet-zoom-anim") || (t2.touches && 1 !== t2.touches.length ? Xe._dragging === this && this.finishDrag() : Xe._dragging || t2.shiftKey || 1 !== t2.which && 1 !== t2.button && !t2.touches || ((Xe._dragging = this)._preventOutline && Me(this._element), Le(), re(), this._moving || (this.fire("down"), i2 = t2.touches ? t2.touches[0] : t2, e2 = Ce(this._element), this._startPoint = new p(i2.clientX, i2.clientY), this._startPos = Pe(this._element), this._parentScale = Ze(e2), i2 = "mousedown" === t2.type, S(document, i2 ? "mousemove" : "touchmove", this._onMove, this), S(document, i2 ? "mouseup" : "touchend touchcancel", this._onUp, this)))));
        }, _onMove: function(t2) {
          var e2;
          this._enabled && (t2.touches && 1 < t2.touches.length ? this._moved = true : !(e2 = new p((e2 = t2.touches && 1 === t2.touches.length ? t2.touches[0] : t2).clientX, e2.clientY)._subtract(this._startPoint)).x && !e2.y || Math.abs(e2.x) + Math.abs(e2.y) < this.options.clickTolerance || (e2.x /= this._parentScale.x, e2.y /= this._parentScale.y, O(t2), this._moved || (this.fire("dragstart"), this._moved = true, M(document.body, "leaflet-dragging"), this._lastTarget = t2.target || t2.srcElement, window.SVGElementInstance && this._lastTarget instanceof window.SVGElementInstance && (this._lastTarget = this._lastTarget.correspondingUseElement), M(this._lastTarget, "leaflet-drag-target")), this._newPos = this._startPos.add(e2), this._moving = true, this._lastEvent = t2, this._updatePosition()));
        }, _updatePosition: function() {
          var t2 = { originalEvent: this._lastEvent };
          this.fire("predrag", t2), Z(this._element, this._newPos), this.fire("drag", t2);
        }, _onUp: function() {
          this._enabled && this.finishDrag();
        }, finishDrag: function(t2) {
          z(document.body, "leaflet-dragging"), this._lastTarget && (z(this._lastTarget, "leaflet-drag-target"), this._lastTarget = null), k(document, "mousemove touchmove", this._onMove, this), k(document, "mouseup touchend touchcancel", this._onUp, this), Te(), ae();
          var e2 = this._moved && this._moving;
          this._moving = false, Xe._dragging = false, e2 && this.fire("dragend", { noInertia: t2, distance: this._newPos.distanceTo(this._startPos) });
        } });
        function Je(t2, e2, i2) {
          for (var n2, o2, s2, r2, a2, h2, l2, u2 = [1, 4, 2, 8], c2 = 0, d2 = t2.length; c2 < d2; c2++) t2[c2]._code = si(t2[c2], e2);
          for (s2 = 0; s2 < 4; s2++) {
            for (h2 = u2[s2], n2 = [], c2 = 0, o2 = (d2 = t2.length) - 1; c2 < d2; o2 = c2++) r2 = t2[c2], a2 = t2[o2], r2._code & h2 ? a2._code & h2 || ((l2 = oi(a2, r2, h2, e2, i2))._code = si(l2, e2), n2.push(l2)) : (a2._code & h2 && ((l2 = oi(a2, r2, h2, e2, i2))._code = si(l2, e2), n2.push(l2)), n2.push(r2));
            t2 = n2;
          }
          return t2;
        }
        function $e(t2, e2) {
          var i2, n2, o2, s2, r2, a2, h2;
          if (!t2 || 0 === t2.length) throw new Error("latlngs not passed");
          I(t2) || (console.warn("latlngs are not flat! Only the first ring will be used"), t2 = t2[0]);
          for (var l2 = w([0, 0]), u2 = g(t2), c2 = (u2.getNorthWest().distanceTo(u2.getSouthWest()) * u2.getNorthEast().distanceTo(u2.getNorthWest()) < 1700 && (l2 = Qe(t2)), t2.length), d2 = [], _2 = 0; _2 < c2; _2++) {
            var p2 = w(t2[_2]);
            d2.push(e2.project(w([p2.lat - l2.lat, p2.lng - l2.lng])));
          }
          for (_2 = r2 = a2 = h2 = 0, i2 = c2 - 1; _2 < c2; i2 = _2++) n2 = d2[_2], o2 = d2[i2], s2 = n2.y * o2.x - o2.y * n2.x, a2 += (n2.x + o2.x) * s2, h2 += (n2.y + o2.y) * s2, r2 += 3 * s2;
          u2 = 0 === r2 ? d2[0] : [a2 / r2, h2 / r2], u2 = e2.unproject(m(u2));
          return w([u2.lat + l2.lat, u2.lng + l2.lng]);
        }
        function Qe(t2) {
          for (var e2 = 0, i2 = 0, n2 = 0, o2 = 0; o2 < t2.length; o2++) {
            var s2 = w(t2[o2]);
            e2 += s2.lat, i2 += s2.lng, n2++;
          }
          return w([e2 / n2, i2 / n2]);
        }
        var ti, gt = { __proto__: null, clipPolygon: Je, polygonCenter: $e, centroid: Qe };
        function ei(t2, e2) {
          if (e2 && t2.length) {
            var i2 = t2 = (function(t3, e3) {
              for (var i3 = [t3[0]], n3 = 1, o3 = 0, s3 = t3.length; n3 < s3; n3++) (function(t4, e4) {
                var i4 = e4.x - t4.x, e4 = e4.y - t4.y;
                return i4 * i4 + e4 * e4;
              })(t3[n3], t3[o3]) > e3 && (i3.push(t3[n3]), o3 = n3);
              o3 < s3 - 1 && i3.push(t3[s3 - 1]);
              return i3;
            })(t2, e2 = e2 * e2), n2 = i2.length, o2 = new (typeof Uint8Array != "undefined" ? Uint8Array : Array)(n2);
            o2[0] = o2[n2 - 1] = 1, (function t3(e3, i3, n3, o3, s3) {
              var r3, a2, h2, l2 = 0;
              for (a2 = o3 + 1; a2 <= s3 - 1; a2++) h2 = ri(e3[a2], e3[o3], e3[s3], true), l2 < h2 && (r3 = a2, l2 = h2);
              n3 < l2 && (i3[r3] = 1, t3(e3, i3, n3, o3, r3), t3(e3, i3, n3, r3, s3));
            })(i2, o2, e2, 0, n2 - 1);
            var s2, r2 = [];
            for (s2 = 0; s2 < n2; s2++) o2[s2] && r2.push(i2[s2]);
            return r2;
          }
          return t2.slice();
        }
        function ii(t2, e2, i2) {
          return Math.sqrt(ri(t2, e2, i2, true));
        }
        function ni(t2, e2, i2, n2, o2) {
          var s2, r2, a2, h2 = n2 ? ti : si(t2, i2), l2 = si(e2, i2);
          for (ti = l2; ; ) {
            if (!(h2 | l2)) return [t2, e2];
            if (h2 & l2) return false;
            a2 = si(r2 = oi(t2, e2, s2 = h2 || l2, i2, o2), i2), s2 === h2 ? (t2 = r2, h2 = a2) : (e2 = r2, l2 = a2);
          }
        }
        function oi(t2, e2, i2, n2, o2) {
          var s2, r2, a2 = e2.x - t2.x, e2 = e2.y - t2.y, h2 = n2.min, n2 = n2.max;
          return 8 & i2 ? (s2 = t2.x + a2 * (n2.y - t2.y) / e2, r2 = n2.y) : 4 & i2 ? (s2 = t2.x + a2 * (h2.y - t2.y) / e2, r2 = h2.y) : 2 & i2 ? (s2 = n2.x, r2 = t2.y + e2 * (n2.x - t2.x) / a2) : 1 & i2 && (s2 = h2.x, r2 = t2.y + e2 * (h2.x - t2.x) / a2), new p(s2, r2, o2);
        }
        function si(t2, e2) {
          var i2 = 0;
          return t2.x < e2.min.x ? i2 |= 1 : t2.x > e2.max.x && (i2 |= 2), t2.y < e2.min.y ? i2 |= 4 : t2.y > e2.max.y && (i2 |= 8), i2;
        }
        function ri(t2, e2, i2, n2) {
          var o2 = e2.x, e2 = e2.y, s2 = i2.x - o2, r2 = i2.y - e2, a2 = s2 * s2 + r2 * r2;
          return 0 < a2 && (1 < (a2 = ((t2.x - o2) * s2 + (t2.y - e2) * r2) / a2) ? (o2 = i2.x, e2 = i2.y) : 0 < a2 && (o2 += s2 * a2, e2 += r2 * a2)), s2 = t2.x - o2, r2 = t2.y - e2, n2 ? s2 * s2 + r2 * r2 : new p(o2, e2);
        }
        function I(t2) {
          return !d(t2[0]) || "object" != typeof t2[0][0] && void 0 !== t2[0][0];
        }
        function ai(t2) {
          return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."), I(t2);
        }
        function hi(t2, e2) {
          var i2, n2, o2, s2, r2, a2;
          if (!t2 || 0 === t2.length) throw new Error("latlngs not passed");
          I(t2) || (console.warn("latlngs are not flat! Only the first ring will be used"), t2 = t2[0]);
          for (var h2 = w([0, 0]), l2 = g(t2), u2 = (l2.getNorthWest().distanceTo(l2.getSouthWest()) * l2.getNorthEast().distanceTo(l2.getNorthWest()) < 1700 && (h2 = Qe(t2)), t2.length), c2 = [], d2 = 0; d2 < u2; d2++) {
            var _2 = w(t2[d2]);
            c2.push(e2.project(w([_2.lat - h2.lat, _2.lng - h2.lng])));
          }
          for (i2 = d2 = 0; d2 < u2 - 1; d2++) i2 += c2[d2].distanceTo(c2[d2 + 1]) / 2;
          if (0 === i2) a2 = c2[0];
          else for (n2 = d2 = 0; d2 < u2 - 1; d2++) if (o2 = c2[d2], s2 = c2[d2 + 1], i2 < (n2 += r2 = o2.distanceTo(s2))) {
            a2 = [s2.x - (r2 = (n2 - i2) / r2) * (s2.x - o2.x), s2.y - r2 * (s2.y - o2.y)];
            break;
          }
          l2 = e2.unproject(m(a2));
          return w([l2.lat + h2.lat, l2.lng + h2.lng]);
        }
        var vt = { __proto__: null, simplify: ei, pointToSegmentDistance: ii, closestPointOnSegment: function(t2, e2, i2) {
          return ri(t2, e2, i2);
        }, clipSegment: ni, _getEdgeIntersection: oi, _getBitCode: si, _sqClosestPointOnSegment: ri, isFlat: I, _flat: ai, polylineCenter: hi }, yt = { project: function(t2) {
          return new p(t2.lng, t2.lat);
        }, unproject: function(t2) {
          return new v(t2.y, t2.x);
        }, bounds: new f([-180, -90], [180, 90]) }, xt = { R: 6378137, R_MINOR: 6356752314245179e-9, bounds: new f([-2003750834279e-5, -1549657073972e-5], [2003750834279e-5, 1876465623138e-5]), project: function(t2) {
          var e2 = Math.PI / 180, i2 = this.R, n2 = t2.lat * e2, o2 = this.R_MINOR / i2, o2 = Math.sqrt(1 - o2 * o2), s2 = o2 * Math.sin(n2), s2 = Math.tan(Math.PI / 4 - n2 / 2) / Math.pow((1 - s2) / (1 + s2), o2 / 2), n2 = -i2 * Math.log(Math.max(s2, 1e-10));
          return new p(t2.lng * e2 * i2, n2);
        }, unproject: function(t2) {
          for (var e2, i2 = 180 / Math.PI, n2 = this.R, o2 = this.R_MINOR / n2, s2 = Math.sqrt(1 - o2 * o2), r2 = Math.exp(-t2.y / n2), a2 = Math.PI / 2 - 2 * Math.atan(r2), h2 = 0, l2 = 0.1; h2 < 15 && 1e-7 < Math.abs(l2); h2++) e2 = s2 * Math.sin(a2), e2 = Math.pow((1 - e2) / (1 + e2), s2 / 2), a2 += l2 = Math.PI / 2 - 2 * Math.atan(r2 * e2) - a2;
          return new v(a2 * i2, t2.x * i2 / n2);
        } }, wt = { __proto__: null, LonLat: yt, Mercator: xt, SphericalMercator: rt }, Pt = l({}, st, { code: "EPSG:3395", projection: xt, transformation: ht(bt = 0.5 / (Math.PI * xt.R), 0.5, -bt, 0.5) }), li = l({}, st, { code: "EPSG:4326", projection: yt, transformation: ht(1 / 180, 1, -1 / 180, 0.5) }), Lt = l({}, ot, { projection: yt, transformation: ht(1, 0, -1, 0), scale: function(t2) {
          return Math.pow(2, t2);
        }, zoom: function(t2) {
          return Math.log(t2) / Math.LN2;
        }, distance: function(t2, e2) {
          var i2 = e2.lng - t2.lng, e2 = e2.lat - t2.lat;
          return Math.sqrt(i2 * i2 + e2 * e2);
        }, infinite: true }), o = (ot.Earth = st, ot.EPSG3395 = Pt, ot.EPSG3857 = lt, ot.EPSG900913 = ut, ot.EPSG4326 = li, ot.Simple = Lt, it.extend({ options: { pane: "overlayPane", attribution: null, bubblingMouseEvents: true }, addTo: function(t2) {
          return t2.addLayer(this), this;
        }, remove: function() {
          return this.removeFrom(this._map || this._mapToAdd);
        }, removeFrom: function(t2) {
          return t2 && t2.removeLayer(this), this;
        }, getPane: function(t2) {
          return this._map.getPane(t2 ? this.options[t2] || t2 : this.options.pane);
        }, addInteractiveTarget: function(t2) {
          return this._map._targets[h(t2)] = this;
        }, removeInteractiveTarget: function(t2) {
          return delete this._map._targets[h(t2)], this;
        }, getAttribution: function() {
          return this.options.attribution;
        }, _layerAdd: function(t2) {
          var e2, i2 = t2.target;
          i2.hasLayer(this) && (this._map = i2, this._zoomAnimated = i2._zoomAnimated, this.getEvents && (e2 = this.getEvents(), i2.on(e2, this), this.once("remove", function() {
            i2.off(e2, this);
          }, this)), this.onAdd(i2), this.fire("add"), i2.fire("layeradd", { layer: this }));
        } })), ui = (A.include({ addLayer: function(t2) {
          var e2;
          if (t2._layerAdd) return e2 = h(t2), this._layers[e2] || ((this._layers[e2] = t2)._mapToAdd = this, t2.beforeAdd && t2.beforeAdd(this), this.whenReady(t2._layerAdd, t2)), this;
          throw new Error("The provided object is not a Layer.");
        }, removeLayer: function(t2) {
          var e2 = h(t2);
          return this._layers[e2] && (this._loaded && t2.onRemove(this), delete this._layers[e2], this._loaded && (this.fire("layerremove", { layer: t2 }), t2.fire("remove")), t2._map = t2._mapToAdd = null), this;
        }, hasLayer: function(t2) {
          return h(t2) in this._layers;
        }, eachLayer: function(t2, e2) {
          for (var i2 in this._layers) t2.call(e2, this._layers[i2]);
          return this;
        }, _addLayers: function(t2) {
          for (var e2 = 0, i2 = (t2 = t2 ? d(t2) ? t2 : [t2] : []).length; e2 < i2; e2++) this.addLayer(t2[e2]);
        }, _addZoomLimit: function(t2) {
          isNaN(t2.options.maxZoom) && isNaN(t2.options.minZoom) || (this._zoomBoundLayers[h(t2)] = t2, this._updateZoomLevels());
        }, _removeZoomLimit: function(t2) {
          t2 = h(t2);
          this._zoomBoundLayers[t2] && (delete this._zoomBoundLayers[t2], this._updateZoomLevels());
        }, _updateZoomLevels: function() {
          var t2, e2 = 1 / 0, i2 = -1 / 0, n2 = this._getZoomSpan();
          for (t2 in this._zoomBoundLayers) var o2 = this._zoomBoundLayers[t2].options, e2 = void 0 === o2.minZoom ? e2 : Math.min(e2, o2.minZoom), i2 = void 0 === o2.maxZoom ? i2 : Math.max(i2, o2.maxZoom);
          this._layersMaxZoom = i2 === -1 / 0 ? void 0 : i2, this._layersMinZoom = e2 === 1 / 0 ? void 0 : e2, n2 !== this._getZoomSpan() && this.fire("zoomlevelschange"), void 0 === this.options.maxZoom && this._layersMaxZoom && this.getZoom() > this._layersMaxZoom && this.setZoom(this._layersMaxZoom), void 0 === this.options.minZoom && this._layersMinZoom && this.getZoom() < this._layersMinZoom && this.setZoom(this._layersMinZoom);
        } }), o.extend({ initialize: function(t2, e2) {
          var i2, n2;
          if (c(this, e2), this._layers = {}, t2) for (i2 = 0, n2 = t2.length; i2 < n2; i2++) this.addLayer(t2[i2]);
        }, addLayer: function(t2) {
          var e2 = this.getLayerId(t2);
          return this._layers[e2] = t2, this._map && this._map.addLayer(t2), this;
        }, removeLayer: function(t2) {
          t2 = t2 in this._layers ? t2 : this.getLayerId(t2);
          return this._map && this._layers[t2] && this._map.removeLayer(this._layers[t2]), delete this._layers[t2], this;
        }, hasLayer: function(t2) {
          return ("number" == typeof t2 ? t2 : this.getLayerId(t2)) in this._layers;
        }, clearLayers: function() {
          return this.eachLayer(this.removeLayer, this);
        }, invoke: function(t2) {
          var e2, i2, n2 = Array.prototype.slice.call(arguments, 1);
          for (e2 in this._layers) (i2 = this._layers[e2])[t2] && i2[t2].apply(i2, n2);
          return this;
        }, onAdd: function(t2) {
          this.eachLayer(t2.addLayer, t2);
        }, onRemove: function(t2) {
          this.eachLayer(t2.removeLayer, t2);
        }, eachLayer: function(t2, e2) {
          for (var i2 in this._layers) t2.call(e2, this._layers[i2]);
          return this;
        }, getLayer: function(t2) {
          return this._layers[t2];
        }, getLayers: function() {
          var t2 = [];
          return this.eachLayer(t2.push, t2), t2;
        }, setZIndex: function(t2) {
          return this.invoke("setZIndex", t2);
        }, getLayerId: h })), ci = ui.extend({ addLayer: function(t2) {
          return this.hasLayer(t2) ? this : (t2.addEventParent(this), ui.prototype.addLayer.call(this, t2), this.fire("layeradd", { layer: t2 }));
        }, removeLayer: function(t2) {
          return this.hasLayer(t2) ? ((t2 = t2 in this._layers ? this._layers[t2] : t2).removeEventParent(this), ui.prototype.removeLayer.call(this, t2), this.fire("layerremove", { layer: t2 })) : this;
        }, setStyle: function(t2) {
          return this.invoke("setStyle", t2);
        }, bringToFront: function() {
          return this.invoke("bringToFront");
        }, bringToBack: function() {
          return this.invoke("bringToBack");
        }, getBounds: function() {
          var t2, e2 = new s();
          for (t2 in this._layers) {
            var i2 = this._layers[t2];
            e2.extend(i2.getBounds ? i2.getBounds() : i2.getLatLng());
          }
          return e2;
        } }), di = et.extend({ options: { popupAnchor: [0, 0], tooltipAnchor: [0, 0], crossOrigin: false }, initialize: function(t2) {
          c(this, t2);
        }, createIcon: function(t2) {
          return this._createIcon("icon", t2);
        }, createShadow: function(t2) {
          return this._createIcon("shadow", t2);
        }, _createIcon: function(t2, e2) {
          var i2 = this._getIconUrl(t2);
          if (i2) return i2 = this._createImg(i2, e2 && "IMG" === e2.tagName ? e2 : null), this._setIconStyles(i2, t2), !this.options.crossOrigin && "" !== this.options.crossOrigin || (i2.crossOrigin = true === this.options.crossOrigin ? "" : this.options.crossOrigin), i2;
          if ("icon" === t2) throw new Error("iconUrl not set in Icon options (see the docs).");
          return null;
        }, _setIconStyles: function(t2, e2) {
          var i2 = this.options, n2 = i2[e2 + "Size"], n2 = m(n2 = "number" == typeof n2 ? [n2, n2] : n2), o2 = m("shadow" === e2 && i2.shadowAnchor || i2.iconAnchor || n2 && n2.divideBy(2, true));
          t2.className = "leaflet-marker-" + e2 + " " + (i2.className || ""), o2 && (t2.style.marginLeft = -o2.x + "px", t2.style.marginTop = -o2.y + "px"), n2 && (t2.style.width = n2.x + "px", t2.style.height = n2.y + "px");
        }, _createImg: function(t2, e2) {
          return (e2 = e2 || document.createElement("img")).src = t2, e2;
        }, _getIconUrl: function(t2) {
          return b.retina && this.options[t2 + "RetinaUrl"] || this.options[t2 + "Url"];
        } });
        var _i = di.extend({ options: { iconUrl: "marker-icon.png", iconRetinaUrl: "marker-icon-2x.png", shadowUrl: "marker-shadow.png", iconSize: [25, 41], iconAnchor: [12, 41], popupAnchor: [1, -34], tooltipAnchor: [16, -28], shadowSize: [41, 41] }, _getIconUrl: function(t2) {
          return "string" != typeof _i.imagePath && (_i.imagePath = this._detectIconPath()), (this.options.imagePath || _i.imagePath) + di.prototype._getIconUrl.call(this, t2);
        }, _stripUrl: function(t2) {
          function e2(t3, e3, i2) {
            return (e3 = e3.exec(t3)) && e3[i2];
          }
          return (t2 = e2(t2, /^url\((['"])?(.+)\1\)$/, 2)) && e2(t2, /^(.*)marker-icon\.png$/, 1);
        }, _detectIconPath: function() {
          var t2 = P("div", "leaflet-default-icon-path", document.body), e2 = pe(t2, "background-image") || pe(t2, "backgroundImage");
          return document.body.removeChild(t2), (e2 = this._stripUrl(e2)) ? e2 : (t2 = document.querySelector('link[href$="leaflet.css"]')) ? t2.href.substring(0, t2.href.length - "leaflet.css".length - 1) : "";
        } }), pi = n.extend({ initialize: function(t2) {
          this._marker = t2;
        }, addHooks: function() {
          var t2 = this._marker._icon;
          this._draggable || (this._draggable = new Xe(t2, t2, true)), this._draggable.on({ dragstart: this._onDragStart, predrag: this._onPreDrag, drag: this._onDrag, dragend: this._onDragEnd }, this).enable(), M(t2, "leaflet-marker-draggable");
        }, removeHooks: function() {
          this._draggable.off({ dragstart: this._onDragStart, predrag: this._onPreDrag, drag: this._onDrag, dragend: this._onDragEnd }, this).disable(), this._marker._icon && z(this._marker._icon, "leaflet-marker-draggable");
        }, moved: function() {
          return this._draggable && this._draggable._moved;
        }, _adjustPan: function(t2) {
          var e2 = this._marker, i2 = e2._map, n2 = this._marker.options.autoPanSpeed, o2 = this._marker.options.autoPanPadding, s2 = Pe(e2._icon), r2 = i2.getPixelBounds(), a2 = i2.getPixelOrigin(), a2 = _(r2.min._subtract(a2).add(o2), r2.max._subtract(a2).subtract(o2));
          a2.contains(s2) || (o2 = m((Math.max(a2.max.x, s2.x) - a2.max.x) / (r2.max.x - a2.max.x) - (Math.min(a2.min.x, s2.x) - a2.min.x) / (r2.min.x - a2.min.x), (Math.max(a2.max.y, s2.y) - a2.max.y) / (r2.max.y - a2.max.y) - (Math.min(a2.min.y, s2.y) - a2.min.y) / (r2.min.y - a2.min.y)).multiplyBy(n2), i2.panBy(o2, { animate: false }), this._draggable._newPos._add(o2), this._draggable._startPos._add(o2), Z(e2._icon, this._draggable._newPos), this._onDrag(t2), this._panRequest = x(this._adjustPan.bind(this, t2)));
        }, _onDragStart: function() {
          this._oldLatLng = this._marker.getLatLng(), this._marker.closePopup && this._marker.closePopup(), this._marker.fire("movestart").fire("dragstart");
        }, _onPreDrag: function(t2) {
          this._marker.options.autoPan && (r(this._panRequest), this._panRequest = x(this._adjustPan.bind(this, t2)));
        }, _onDrag: function(t2) {
          var e2 = this._marker, i2 = e2._shadow, n2 = Pe(e2._icon), o2 = e2._map.layerPointToLatLng(n2);
          i2 && Z(i2, n2), e2._latlng = o2, t2.latlng = o2, t2.oldLatLng = this._oldLatLng, e2.fire("move", t2).fire("drag", t2);
        }, _onDragEnd: function(t2) {
          r(this._panRequest), delete this._oldLatLng, this._marker.fire("moveend").fire("dragend", t2);
        } }), mi = o.extend({ options: { icon: new _i(), interactive: true, keyboard: true, title: "", alt: "Marker", zIndexOffset: 0, opacity: 1, riseOnHover: false, riseOffset: 250, pane: "markerPane", shadowPane: "shadowPane", bubblingMouseEvents: false, autoPanOnFocus: true, draggable: false, autoPan: false, autoPanPadding: [50, 50], autoPanSpeed: 10 }, initialize: function(t2, e2) {
          c(this, e2), this._latlng = w(t2);
        }, onAdd: function(t2) {
          this._zoomAnimated = this._zoomAnimated && t2.options.markerZoomAnimation, this._zoomAnimated && t2.on("zoomanim", this._animateZoom, this), this._initIcon(), this.update();
        }, onRemove: function(t2) {
          this.dragging && this.dragging.enabled() && (this.options.draggable = true, this.dragging.removeHooks()), delete this.dragging, this._zoomAnimated && t2.off("zoomanim", this._animateZoom, this), this._removeIcon(), this._removeShadow();
        }, getEvents: function() {
          return { zoom: this.update, viewreset: this.update };
        }, getLatLng: function() {
          return this._latlng;
        }, setLatLng: function(t2) {
          var e2 = this._latlng;
          return this._latlng = w(t2), this.update(), this.fire("move", { oldLatLng: e2, latlng: this._latlng });
        }, setZIndexOffset: function(t2) {
          return this.options.zIndexOffset = t2, this.update();
        }, getIcon: function() {
          return this.options.icon;
        }, setIcon: function(t2) {
          return this.options.icon = t2, this._map && (this._initIcon(), this.update()), this._popup && this.bindPopup(this._popup, this._popup.options), this;
        }, getElement: function() {
          return this._icon;
        }, update: function() {
          var t2;
          return this._icon && this._map && (t2 = this._map.latLngToLayerPoint(this._latlng).round(), this._setPos(t2)), this;
        }, _initIcon: function() {
          var t2 = this.options, e2 = "leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide"), i2 = t2.icon.createIcon(this._icon), n2 = false, i2 = (i2 !== this._icon && (this._icon && this._removeIcon(), n2 = true, t2.title && (i2.title = t2.title), "IMG" === i2.tagName && (i2.alt = t2.alt || "")), M(i2, e2), t2.keyboard && (i2.tabIndex = "0", i2.setAttribute("role", "button")), this._icon = i2, t2.riseOnHover && this.on({ mouseover: this._bringToFront, mouseout: this._resetZIndex }), this.options.autoPanOnFocus && S(i2, "focus", this._panOnFocus, this), t2.icon.createShadow(this._shadow)), o2 = false;
          i2 !== this._shadow && (this._removeShadow(), o2 = true), i2 && (M(i2, e2), i2.alt = ""), this._shadow = i2, t2.opacity < 1 && this._updateOpacity(), n2 && this.getPane().appendChild(this._icon), this._initInteraction(), i2 && o2 && this.getPane(t2.shadowPane).appendChild(this._shadow);
        }, _removeIcon: function() {
          this.options.riseOnHover && this.off({ mouseover: this._bringToFront, mouseout: this._resetZIndex }), this.options.autoPanOnFocus && k(this._icon, "focus", this._panOnFocus, this), T(this._icon), this.removeInteractiveTarget(this._icon), this._icon = null;
        }, _removeShadow: function() {
          this._shadow && T(this._shadow), this._shadow = null;
        }, _setPos: function(t2) {
          this._icon && Z(this._icon, t2), this._shadow && Z(this._shadow, t2), this._zIndex = t2.y + this.options.zIndexOffset, this._resetZIndex();
        }, _updateZIndex: function(t2) {
          this._icon && (this._icon.style.zIndex = this._zIndex + t2);
        }, _animateZoom: function(t2) {
          t2 = this._map._latLngToNewLayerPoint(this._latlng, t2.zoom, t2.center).round();
          this._setPos(t2);
        }, _initInteraction: function() {
          var t2;
          this.options.interactive && (M(this._icon, "leaflet-interactive"), this.addInteractiveTarget(this._icon), pi && (t2 = this.options.draggable, this.dragging && (t2 = this.dragging.enabled(), this.dragging.disable()), this.dragging = new pi(this), t2 && this.dragging.enable()));
        }, setOpacity: function(t2) {
          return this.options.opacity = t2, this._map && this._updateOpacity(), this;
        }, _updateOpacity: function() {
          var t2 = this.options.opacity;
          this._icon && C(this._icon, t2), this._shadow && C(this._shadow, t2);
        }, _bringToFront: function() {
          this._updateZIndex(this.options.riseOffset);
        }, _resetZIndex: function() {
          this._updateZIndex(0);
        }, _panOnFocus: function() {
          var t2, e2, i2 = this._map;
          i2 && (t2 = (e2 = this.options.icon.options).iconSize ? m(e2.iconSize) : m(0, 0), e2 = e2.iconAnchor ? m(e2.iconAnchor) : m(0, 0), i2.panInside(this._latlng, { paddingTopLeft: e2, paddingBottomRight: t2.subtract(e2) }));
        }, _getPopupAnchor: function() {
          return this.options.icon.options.popupAnchor;
        }, _getTooltipAnchor: function() {
          return this.options.icon.options.tooltipAnchor;
        } });
        var fi = o.extend({ options: { stroke: true, color: "#3388ff", weight: 3, opacity: 1, lineCap: "round", lineJoin: "round", dashArray: null, dashOffset: null, fill: false, fillColor: null, fillOpacity: 0.2, fillRule: "evenodd", interactive: true, bubblingMouseEvents: true }, beforeAdd: function(t2) {
          this._renderer = t2.getRenderer(this);
        }, onAdd: function() {
          this._renderer._initPath(this), this._reset(), this._renderer._addPath(this);
        }, onRemove: function() {
          this._renderer._removePath(this);
        }, redraw: function() {
          return this._map && this._renderer._updatePath(this), this;
        }, setStyle: function(t2) {
          return c(this, t2), this._renderer && (this._renderer._updateStyle(this), this.options.stroke && t2 && Object.prototype.hasOwnProperty.call(t2, "weight") && this._updateBounds()), this;
        }, bringToFront: function() {
          return this._renderer && this._renderer._bringToFront(this), this;
        }, bringToBack: function() {
          return this._renderer && this._renderer._bringToBack(this), this;
        }, getElement: function() {
          return this._path;
        }, _reset: function() {
          this._project(), this._update();
        }, _clickTolerance: function() {
          return (this.options.stroke ? this.options.weight / 2 : 0) + (this._renderer.options.tolerance || 0);
        } }), gi = fi.extend({ options: { fill: true, radius: 10 }, initialize: function(t2, e2) {
          c(this, e2), this._latlng = w(t2), this._radius = this.options.radius;
        }, setLatLng: function(t2) {
          var e2 = this._latlng;
          return this._latlng = w(t2), this.redraw(), this.fire("move", { oldLatLng: e2, latlng: this._latlng });
        }, getLatLng: function() {
          return this._latlng;
        }, setRadius: function(t2) {
          return this.options.radius = this._radius = t2, this.redraw();
        }, getRadius: function() {
          return this._radius;
        }, setStyle: function(t2) {
          var e2 = t2 && t2.radius || this._radius;
          return fi.prototype.setStyle.call(this, t2), this.setRadius(e2), this;
        }, _project: function() {
          this._point = this._map.latLngToLayerPoint(this._latlng), this._updateBounds();
        }, _updateBounds: function() {
          var t2 = this._radius, e2 = this._radiusY || t2, i2 = this._clickTolerance(), t2 = [t2 + i2, e2 + i2];
          this._pxBounds = new f(this._point.subtract(t2), this._point.add(t2));
        }, _update: function() {
          this._map && this._updatePath();
        }, _updatePath: function() {
          this._renderer._updateCircle(this);
        }, _empty: function() {
          return this._radius && !this._renderer._bounds.intersects(this._pxBounds);
        }, _containsPoint: function(t2) {
          return t2.distanceTo(this._point) <= this._radius + this._clickTolerance();
        } });
        var vi = gi.extend({ initialize: function(t2, e2, i2) {
          if (c(this, e2 = "number" == typeof e2 ? l({}, i2, { radius: e2 }) : e2), this._latlng = w(t2), isNaN(this.options.radius)) throw new Error("Circle radius cannot be NaN");
          this._mRadius = this.options.radius;
        }, setRadius: function(t2) {
          return this._mRadius = t2, this.redraw();
        }, getRadius: function() {
          return this._mRadius;
        }, getBounds: function() {
          var t2 = [this._radius, this._radiusY || this._radius];
          return new s(this._map.layerPointToLatLng(this._point.subtract(t2)), this._map.layerPointToLatLng(this._point.add(t2)));
        }, setStyle: fi.prototype.setStyle, _project: function() {
          var t2, e2, i2, n2, o2, s2 = this._latlng.lng, r2 = this._latlng.lat, a2 = this._map, h2 = a2.options.crs;
          h2.distance === st.distance ? (n2 = Math.PI / 180, o2 = this._mRadius / st.R / n2, t2 = a2.project([r2 + o2, s2]), e2 = a2.project([r2 - o2, s2]), e2 = t2.add(e2).divideBy(2), i2 = a2.unproject(e2).lat, n2 = Math.acos((Math.cos(o2 * n2) - Math.sin(r2 * n2) * Math.sin(i2 * n2)) / (Math.cos(r2 * n2) * Math.cos(i2 * n2))) / n2, !isNaN(n2) && 0 !== n2 || (n2 = o2 / Math.cos(Math.PI / 180 * r2)), this._point = e2.subtract(a2.getPixelOrigin()), this._radius = isNaN(n2) ? 0 : e2.x - a2.project([i2, s2 - n2]).x, this._radiusY = e2.y - t2.y) : (o2 = h2.unproject(h2.project(this._latlng).subtract([this._mRadius, 0])), this._point = a2.latLngToLayerPoint(this._latlng), this._radius = this._point.x - a2.latLngToLayerPoint(o2).x), this._updateBounds();
        } });
        var yi = fi.extend({ options: { smoothFactor: 1, noClip: false }, initialize: function(t2, e2) {
          c(this, e2), this._setLatLngs(t2);
        }, getLatLngs: function() {
          return this._latlngs;
        }, setLatLngs: function(t2) {
          return this._setLatLngs(t2), this.redraw();
        }, isEmpty: function() {
          return !this._latlngs.length;
        }, closestLayerPoint: function(t2) {
          for (var e2 = 1 / 0, i2 = null, n2 = ri, o2 = 0, s2 = this._parts.length; o2 < s2; o2++) for (var r2 = this._parts[o2], a2 = 1, h2 = r2.length; a2 < h2; a2++) {
            var l2, u2, c2 = n2(t2, l2 = r2[a2 - 1], u2 = r2[a2], true);
            c2 < e2 && (e2 = c2, i2 = n2(t2, l2, u2));
          }
          return i2 && (i2.distance = Math.sqrt(e2)), i2;
        }, getCenter: function() {
          if (this._map) return hi(this._defaultShape(), this._map.options.crs);
          throw new Error("Must add layer to map before using getCenter()");
        }, getBounds: function() {
          return this._bounds;
        }, addLatLng: function(t2, e2) {
          return e2 = e2 || this._defaultShape(), t2 = w(t2), e2.push(t2), this._bounds.extend(t2), this.redraw();
        }, _setLatLngs: function(t2) {
          this._bounds = new s(), this._latlngs = this._convertLatLngs(t2);
        }, _defaultShape: function() {
          return I(this._latlngs) ? this._latlngs : this._latlngs[0];
        }, _convertLatLngs: function(t2) {
          for (var e2 = [], i2 = I(t2), n2 = 0, o2 = t2.length; n2 < o2; n2++) i2 ? (e2[n2] = w(t2[n2]), this._bounds.extend(e2[n2])) : e2[n2] = this._convertLatLngs(t2[n2]);
          return e2;
        }, _project: function() {
          var t2 = new f();
          this._rings = [], this._projectLatlngs(this._latlngs, this._rings, t2), this._bounds.isValid() && t2.isValid() && (this._rawPxBounds = t2, this._updateBounds());
        }, _updateBounds: function() {
          var t2 = this._clickTolerance(), t2 = new p(t2, t2);
          this._rawPxBounds && (this._pxBounds = new f([this._rawPxBounds.min.subtract(t2), this._rawPxBounds.max.add(t2)]));
        }, _projectLatlngs: function(t2, e2, i2) {
          var n2, o2, s2 = t2[0] instanceof v, r2 = t2.length;
          if (s2) {
            for (o2 = [], n2 = 0; n2 < r2; n2++) o2[n2] = this._map.latLngToLayerPoint(t2[n2]), i2.extend(o2[n2]);
            e2.push(o2);
          } else for (n2 = 0; n2 < r2; n2++) this._projectLatlngs(t2[n2], e2, i2);
        }, _clipPoints: function() {
          var t2 = this._renderer._bounds;
          if (this._parts = [], this._pxBounds && this._pxBounds.intersects(t2)) if (this.options.noClip) this._parts = this._rings;
          else for (var e2, i2, n2, o2, s2 = this._parts, r2 = 0, a2 = 0, h2 = this._rings.length; r2 < h2; r2++) for (e2 = 0, i2 = (o2 = this._rings[r2]).length; e2 < i2 - 1; e2++) (n2 = ni(o2[e2], o2[e2 + 1], t2, e2, true)) && (s2[a2] = s2[a2] || [], s2[a2].push(n2[0]), n2[1] === o2[e2 + 1] && e2 !== i2 - 2 || (s2[a2].push(n2[1]), a2++));
        }, _simplifyPoints: function() {
          for (var t2 = this._parts, e2 = this.options.smoothFactor, i2 = 0, n2 = t2.length; i2 < n2; i2++) t2[i2] = ei(t2[i2], e2);
        }, _update: function() {
          this._map && (this._clipPoints(), this._simplifyPoints(), this._updatePath());
        }, _updatePath: function() {
          this._renderer._updatePoly(this);
        }, _containsPoint: function(t2, e2) {
          var i2, n2, o2, s2, r2, a2, h2 = this._clickTolerance();
          if (this._pxBounds && this._pxBounds.contains(t2)) {
            for (i2 = 0, s2 = this._parts.length; i2 < s2; i2++) for (n2 = 0, o2 = (r2 = (a2 = this._parts[i2]).length) - 1; n2 < r2; o2 = n2++) if ((e2 || 0 !== n2) && ii(t2, a2[o2], a2[n2]) <= h2) return true;
          }
          return false;
        } });
        yi._flat = ai;
        var xi = yi.extend({ options: { fill: true }, isEmpty: function() {
          return !this._latlngs.length || !this._latlngs[0].length;
        }, getCenter: function() {
          if (this._map) return $e(this._defaultShape(), this._map.options.crs);
          throw new Error("Must add layer to map before using getCenter()");
        }, _convertLatLngs: function(t2) {
          var t2 = yi.prototype._convertLatLngs.call(this, t2), e2 = t2.length;
          return 2 <= e2 && t2[0] instanceof v && t2[0].equals(t2[e2 - 1]) && t2.pop(), t2;
        }, _setLatLngs: function(t2) {
          yi.prototype._setLatLngs.call(this, t2), I(this._latlngs) && (this._latlngs = [this._latlngs]);
        }, _defaultShape: function() {
          return (I(this._latlngs[0]) ? this._latlngs : this._latlngs[0])[0];
        }, _clipPoints: function() {
          var t2 = this._renderer._bounds, e2 = this.options.weight, e2 = new p(e2, e2), t2 = new f(t2.min.subtract(e2), t2.max.add(e2));
          if (this._parts = [], this._pxBounds && this._pxBounds.intersects(t2)) if (this.options.noClip) this._parts = this._rings;
          else for (var i2, n2 = 0, o2 = this._rings.length; n2 < o2; n2++) (i2 = Je(this._rings[n2], t2, true)).length && this._parts.push(i2);
        }, _updatePath: function() {
          this._renderer._updatePoly(this, true);
        }, _containsPoint: function(t2) {
          var e2, i2, n2, o2, s2, r2, a2, h2, l2 = false;
          if (!this._pxBounds || !this._pxBounds.contains(t2)) return false;
          for (o2 = 0, a2 = this._parts.length; o2 < a2; o2++) for (s2 = 0, r2 = (h2 = (e2 = this._parts[o2]).length) - 1; s2 < h2; r2 = s2++) i2 = e2[s2], n2 = e2[r2], i2.y > t2.y != n2.y > t2.y && t2.x < (n2.x - i2.x) * (t2.y - i2.y) / (n2.y - i2.y) + i2.x && (l2 = !l2);
          return l2 || yi.prototype._containsPoint.call(this, t2, true);
        } });
        var wi = ci.extend({ initialize: function(t2, e2) {
          c(this, e2), this._layers = {}, t2 && this.addData(t2);
        }, addData: function(t2) {
          var e2, i2, n2, o2 = d(t2) ? t2 : t2.features;
          if (o2) {
            for (e2 = 0, i2 = o2.length; e2 < i2; e2++) ((n2 = o2[e2]).geometries || n2.geometry || n2.features || n2.coordinates) && this.addData(n2);
            return this;
          }
          var s2, r2 = this.options;
          return (!r2.filter || r2.filter(t2)) && (s2 = bi(t2, r2)) ? (s2.feature = Zi(t2), s2.defaultOptions = s2.options, this.resetStyle(s2), r2.onEachFeature && r2.onEachFeature(t2, s2), this.addLayer(s2)) : this;
        }, resetStyle: function(t2) {
          return void 0 === t2 ? this.eachLayer(this.resetStyle, this) : (t2.options = l({}, t2.defaultOptions), this._setLayerStyle(t2, this.options.style), this);
        }, setStyle: function(e2) {
          return this.eachLayer(function(t2) {
            this._setLayerStyle(t2, e2);
          }, this);
        }, _setLayerStyle: function(t2, e2) {
          t2.setStyle && ("function" == typeof e2 && (e2 = e2(t2.feature)), t2.setStyle(e2));
        } });
        function bi(t2, e2) {
          var i2, n2, o2, s2, r2 = "Feature" === t2.type ? t2.geometry : t2, a2 = r2 ? r2.coordinates : null, h2 = [], l2 = e2 && e2.pointToLayer, u2 = e2 && e2.coordsToLatLng || Li;
          if (!a2 && !r2) return null;
          switch (r2.type) {
            case "Point":
              return Pi(l2, t2, i2 = u2(a2), e2);
            case "MultiPoint":
              for (o2 = 0, s2 = a2.length; o2 < s2; o2++) i2 = u2(a2[o2]), h2.push(Pi(l2, t2, i2, e2));
              return new ci(h2);
            case "LineString":
            case "MultiLineString":
              return n2 = Ti(a2, "LineString" === r2.type ? 0 : 1, u2), new yi(n2, e2);
            case "Polygon":
            case "MultiPolygon":
              return n2 = Ti(a2, "Polygon" === r2.type ? 1 : 2, u2), new xi(n2, e2);
            case "GeometryCollection":
              for (o2 = 0, s2 = r2.geometries.length; o2 < s2; o2++) {
                var c2 = bi({ geometry: r2.geometries[o2], type: "Feature", properties: t2.properties }, e2);
                c2 && h2.push(c2);
              }
              return new ci(h2);
            case "FeatureCollection":
              for (o2 = 0, s2 = r2.features.length; o2 < s2; o2++) {
                var d2 = bi(r2.features[o2], e2);
                d2 && h2.push(d2);
              }
              return new ci(h2);
            default:
              throw new Error("Invalid GeoJSON object.");
          }
        }
        function Pi(t2, e2, i2, n2) {
          return t2 ? t2(e2, i2) : new mi(i2, n2 && n2.markersInheritOptions && n2);
        }
        function Li(t2) {
          return new v(t2[1], t2[0], t2[2]);
        }
        function Ti(t2, e2, i2) {
          for (var n2, o2 = [], s2 = 0, r2 = t2.length; s2 < r2; s2++) n2 = e2 ? Ti(t2[s2], e2 - 1, i2) : (i2 || Li)(t2[s2]), o2.push(n2);
          return o2;
        }
        function Mi(t2, e2) {
          return void 0 !== (t2 = w(t2)).alt ? [i(t2.lng, e2), i(t2.lat, e2), i(t2.alt, e2)] : [i(t2.lng, e2), i(t2.lat, e2)];
        }
        function zi(t2, e2, i2, n2) {
          for (var o2 = [], s2 = 0, r2 = t2.length; s2 < r2; s2++) o2.push(e2 ? zi(t2[s2], I(t2[s2]) ? 0 : e2 - 1, i2, n2) : Mi(t2[s2], n2));
          return !e2 && i2 && 0 < o2.length && o2.push(o2[0].slice()), o2;
        }
        function Ci(t2, e2) {
          return t2.feature ? l({}, t2.feature, { geometry: e2 }) : Zi(e2);
        }
        function Zi(t2) {
          return "Feature" === t2.type || "FeatureCollection" === t2.type ? t2 : { type: "Feature", properties: {}, geometry: t2 };
        }
        Tt = { toGeoJSON: function(t2) {
          return Ci(this, { type: "Point", coordinates: Mi(this.getLatLng(), t2) });
        } };
        function Si(t2, e2) {
          return new wi(t2, e2);
        }
        mi.include(Tt), vi.include(Tt), gi.include(Tt), yi.include({ toGeoJSON: function(t2) {
          var e2 = !I(this._latlngs);
          return Ci(this, { type: (e2 ? "Multi" : "") + "LineString", coordinates: zi(this._latlngs, e2 ? 1 : 0, false, t2) });
        } }), xi.include({ toGeoJSON: function(t2) {
          var e2 = !I(this._latlngs), i2 = e2 && !I(this._latlngs[0]), t2 = zi(this._latlngs, i2 ? 2 : e2 ? 1 : 0, true, t2);
          return Ci(this, { type: (i2 ? "Multi" : "") + "Polygon", coordinates: t2 = e2 ? t2 : [t2] });
        } }), ui.include({ toMultiPoint: function(e2) {
          var i2 = [];
          return this.eachLayer(function(t2) {
            i2.push(t2.toGeoJSON(e2).geometry.coordinates);
          }), Ci(this, { type: "MultiPoint", coordinates: i2 });
        }, toGeoJSON: function(e2) {
          var i2, n2, t2 = this.feature && this.feature.geometry && this.feature.geometry.type;
          return "MultiPoint" === t2 ? this.toMultiPoint(e2) : (i2 = "GeometryCollection" === t2, n2 = [], this.eachLayer(function(t3) {
            t3.toGeoJSON && (t3 = t3.toGeoJSON(e2), i2 ? n2.push(t3.geometry) : "FeatureCollection" === (t3 = Zi(t3)).type ? n2.push.apply(n2, t3.features) : n2.push(t3));
          }), i2 ? Ci(this, { geometries: n2, type: "GeometryCollection" }) : { type: "FeatureCollection", features: n2 });
        } });
        var Mt = Si, Ei = o.extend({ options: { opacity: 1, alt: "", interactive: false, crossOrigin: false, errorOverlayUrl: "", zIndex: 1, className: "" }, initialize: function(t2, e2, i2) {
          this._url = t2, this._bounds = g(e2), c(this, i2);
        }, onAdd: function() {
          this._image || (this._initImage(), this.options.opacity < 1 && this._updateOpacity()), this.options.interactive && (M(this._image, "leaflet-interactive"), this.addInteractiveTarget(this._image)), this.getPane().appendChild(this._image), this._reset();
        }, onRemove: function() {
          T(this._image), this.options.interactive && this.removeInteractiveTarget(this._image);
        }, setOpacity: function(t2) {
          return this.options.opacity = t2, this._image && this._updateOpacity(), this;
        }, setStyle: function(t2) {
          return t2.opacity && this.setOpacity(t2.opacity), this;
        }, bringToFront: function() {
          return this._map && fe(this._image), this;
        }, bringToBack: function() {
          return this._map && ge(this._image), this;
        }, setUrl: function(t2) {
          return this._url = t2, this._image && (this._image.src = t2), this;
        }, setBounds: function(t2) {
          return this._bounds = g(t2), this._map && this._reset(), this;
        }, getEvents: function() {
          var t2 = { zoom: this._reset, viewreset: this._reset };
          return this._zoomAnimated && (t2.zoomanim = this._animateZoom), t2;
        }, setZIndex: function(t2) {
          return this.options.zIndex = t2, this._updateZIndex(), this;
        }, getBounds: function() {
          return this._bounds;
        }, getElement: function() {
          return this._image;
        }, _initImage: function() {
          var t2 = "IMG" === this._url.tagName, e2 = this._image = t2 ? this._url : P("img");
          M(e2, "leaflet-image-layer"), this._zoomAnimated && M(e2, "leaflet-zoom-animated"), this.options.className && M(e2, this.options.className), e2.onselectstart = u, e2.onmousemove = u, e2.onload = a(this.fire, this, "load"), e2.onerror = a(this._overlayOnError, this, "error"), !this.options.crossOrigin && "" !== this.options.crossOrigin || (e2.crossOrigin = true === this.options.crossOrigin ? "" : this.options.crossOrigin), this.options.zIndex && this._updateZIndex(), t2 ? this._url = e2.src : (e2.src = this._url, e2.alt = this.options.alt);
        }, _animateZoom: function(t2) {
          var e2 = this._map.getZoomScale(t2.zoom), t2 = this._map._latLngBoundsToNewLayerBounds(this._bounds, t2.zoom, t2.center).min;
          be(this._image, t2, e2);
        }, _reset: function() {
          var t2 = this._image, e2 = new f(this._map.latLngToLayerPoint(this._bounds.getNorthWest()), this._map.latLngToLayerPoint(this._bounds.getSouthEast())), i2 = e2.getSize();
          Z(t2, e2.min), t2.style.width = i2.x + "px", t2.style.height = i2.y + "px";
        }, _updateOpacity: function() {
          C(this._image, this.options.opacity);
        }, _updateZIndex: function() {
          this._image && void 0 !== this.options.zIndex && null !== this.options.zIndex && (this._image.style.zIndex = this.options.zIndex);
        }, _overlayOnError: function() {
          this.fire("error");
          var t2 = this.options.errorOverlayUrl;
          t2 && this._url !== t2 && (this._url = t2, this._image.src = t2);
        }, getCenter: function() {
          return this._bounds.getCenter();
        } }), ki = Ei.extend({ options: { autoplay: true, loop: true, keepAspectRatio: true, muted: false, playsInline: true }, _initImage: function() {
          var t2 = "VIDEO" === this._url.tagName, e2 = this._image = t2 ? this._url : P("video");
          if (M(e2, "leaflet-image-layer"), this._zoomAnimated && M(e2, "leaflet-zoom-animated"), this.options.className && M(e2, this.options.className), e2.onselectstart = u, e2.onmousemove = u, e2.onloadeddata = a(this.fire, this, "load"), t2) {
            for (var i2 = e2.getElementsByTagName("source"), n2 = [], o2 = 0; o2 < i2.length; o2++) n2.push(i2[o2].src);
            this._url = 0 < i2.length ? n2 : [e2.src];
          } else {
            d(this._url) || (this._url = [this._url]), !this.options.keepAspectRatio && Object.prototype.hasOwnProperty.call(e2.style, "objectFit") && (e2.style.objectFit = "fill"), e2.autoplay = !!this.options.autoplay, e2.loop = !!this.options.loop, e2.muted = !!this.options.muted, e2.playsInline = !!this.options.playsInline;
            for (var s2 = 0; s2 < this._url.length; s2++) {
              var r2 = P("source");
              r2.src = this._url[s2], e2.appendChild(r2);
            }
          }
        } });
        var Oi = Ei.extend({ _initImage: function() {
          var t2 = this._image = this._url;
          M(t2, "leaflet-image-layer"), this._zoomAnimated && M(t2, "leaflet-zoom-animated"), this.options.className && M(t2, this.options.className), t2.onselectstart = u, t2.onmousemove = u;
        } });
        var Ai = o.extend({ options: { interactive: false, offset: [0, 0], className: "", pane: void 0, content: "" }, initialize: function(t2, e2) {
          t2 && (t2 instanceof v || d(t2)) ? (this._latlng = w(t2), c(this, e2)) : (c(this, t2), this._source = e2), this.options.content && (this._content = this.options.content);
        }, openOn: function(t2) {
          return (t2 = arguments.length ? t2 : this._source._map).hasLayer(this) || t2.addLayer(this), this;
        }, close: function() {
          return this._map && this._map.removeLayer(this), this;
        }, toggle: function(t2) {
          return this._map ? this.close() : (arguments.length ? this._source = t2 : t2 = this._source, this._prepareOpen(), this.openOn(t2._map)), this;
        }, onAdd: function(t2) {
          this._zoomAnimated = t2._zoomAnimated, this._container || this._initLayout(), t2._fadeAnimated && C(this._container, 0), clearTimeout(this._removeTimeout), this.getPane().appendChild(this._container), this.update(), t2._fadeAnimated && C(this._container, 1), this.bringToFront(), this.options.interactive && (M(this._container, "leaflet-interactive"), this.addInteractiveTarget(this._container));
        }, onRemove: function(t2) {
          t2._fadeAnimated ? (C(this._container, 0), this._removeTimeout = setTimeout(a(T, void 0, this._container), 200)) : T(this._container), this.options.interactive && (z(this._container, "leaflet-interactive"), this.removeInteractiveTarget(this._container));
        }, getLatLng: function() {
          return this._latlng;
        }, setLatLng: function(t2) {
          return this._latlng = w(t2), this._map && (this._updatePosition(), this._adjustPan()), this;
        }, getContent: function() {
          return this._content;
        }, setContent: function(t2) {
          return this._content = t2, this.update(), this;
        }, getElement: function() {
          return this._container;
        }, update: function() {
          this._map && (this._container.style.visibility = "hidden", this._updateContent(), this._updateLayout(), this._updatePosition(), this._container.style.visibility = "", this._adjustPan());
        }, getEvents: function() {
          var t2 = { zoom: this._updatePosition, viewreset: this._updatePosition };
          return this._zoomAnimated && (t2.zoomanim = this._animateZoom), t2;
        }, isOpen: function() {
          return !!this._map && this._map.hasLayer(this);
        }, bringToFront: function() {
          return this._map && fe(this._container), this;
        }, bringToBack: function() {
          return this._map && ge(this._container), this;
        }, _prepareOpen: function(t2) {
          if (!(i2 = this._source)._map) return false;
          if (i2 instanceof ci) {
            var e2, i2 = null, n2 = this._source._layers;
            for (e2 in n2) if (n2[e2]._map) {
              i2 = n2[e2];
              break;
            }
            if (!i2) return false;
            this._source = i2;
          }
          if (!t2) if (i2.getCenter) t2 = i2.getCenter();
          else if (i2.getLatLng) t2 = i2.getLatLng();
          else {
            if (!i2.getBounds) throw new Error("Unable to get source layer LatLng.");
            t2 = i2.getBounds().getCenter();
          }
          return this.setLatLng(t2), this._map && this.update(), true;
        }, _updateContent: function() {
          if (this._content) {
            var t2 = this._contentNode, e2 = "function" == typeof this._content ? this._content(this._source || this) : this._content;
            if ("string" == typeof e2) t2.innerHTML = e2;
            else {
              for (; t2.hasChildNodes(); ) t2.removeChild(t2.firstChild);
              t2.appendChild(e2);
            }
            this.fire("contentupdate");
          }
        }, _updatePosition: function() {
          var t2, e2, i2;
          this._map && (e2 = this._map.latLngToLayerPoint(this._latlng), t2 = m(this.options.offset), i2 = this._getAnchor(), this._zoomAnimated ? Z(this._container, e2.add(i2)) : t2 = t2.add(e2).add(i2), e2 = this._containerBottom = -t2.y, i2 = this._containerLeft = -Math.round(this._containerWidth / 2) + t2.x, this._container.style.bottom = e2 + "px", this._container.style.left = i2 + "px");
        }, _getAnchor: function() {
          return [0, 0];
        } }), Bi = (A.include({ _initOverlay: function(t2, e2, i2, n2) {
          var o2 = e2;
          return o2 instanceof t2 || (o2 = new t2(n2).setContent(e2)), i2 && o2.setLatLng(i2), o2;
        } }), o.include({ _initOverlay: function(t2, e2, i2, n2) {
          var o2 = i2;
          return o2 instanceof t2 ? (c(o2, n2), o2._source = this) : (o2 = e2 && !n2 ? e2 : new t2(n2, this)).setContent(i2), o2;
        } }), Ai.extend({ options: { pane: "popupPane", offset: [0, 7], maxWidth: 300, minWidth: 50, maxHeight: null, autoPan: true, autoPanPaddingTopLeft: null, autoPanPaddingBottomRight: null, autoPanPadding: [5, 5], keepInView: false, closeButton: true, autoClose: true, closeOnEscapeKey: true, className: "" }, openOn: function(t2) {
          return !(t2 = arguments.length ? t2 : this._source._map).hasLayer(this) && t2._popup && t2._popup.options.autoClose && t2.removeLayer(t2._popup), t2._popup = this, Ai.prototype.openOn.call(this, t2);
        }, onAdd: function(t2) {
          Ai.prototype.onAdd.call(this, t2), t2.fire("popupopen", { popup: this }), this._source && (this._source.fire("popupopen", { popup: this }, true), this._source instanceof fi || this._source.on("preclick", Ae));
        }, onRemove: function(t2) {
          Ai.prototype.onRemove.call(this, t2), t2.fire("popupclose", { popup: this }), this._source && (this._source.fire("popupclose", { popup: this }, true), this._source instanceof fi || this._source.off("preclick", Ae));
        }, getEvents: function() {
          var t2 = Ai.prototype.getEvents.call(this);
          return (void 0 !== this.options.closeOnClick ? this.options.closeOnClick : this._map.options.closePopupOnClick) && (t2.preclick = this.close), this.options.keepInView && (t2.moveend = this._adjustPan), t2;
        }, _initLayout: function() {
          var t2 = "leaflet-popup", e2 = this._container = P("div", t2 + " " + (this.options.className || "") + " leaflet-zoom-animated"), i2 = this._wrapper = P("div", t2 + "-content-wrapper", e2);
          this._contentNode = P("div", t2 + "-content", i2), Ie(e2), Be(this._contentNode), S(e2, "contextmenu", Ae), this._tipContainer = P("div", t2 + "-tip-container", e2), this._tip = P("div", t2 + "-tip", this._tipContainer), this.options.closeButton && ((i2 = this._closeButton = P("a", t2 + "-close-button", e2)).setAttribute("role", "button"), i2.setAttribute("aria-label", "Close popup"), i2.href = "#close", i2.innerHTML = '<span aria-hidden="true">&#215;</span>', S(i2, "click", function(t3) {
            O(t3), this.close();
          }, this));
        }, _updateLayout: function() {
          var t2 = this._contentNode, e2 = t2.style, i2 = (e2.width = "", e2.whiteSpace = "nowrap", t2.offsetWidth), i2 = Math.min(i2, this.options.maxWidth), i2 = (i2 = Math.max(i2, this.options.minWidth), e2.width = i2 + 1 + "px", e2.whiteSpace = "", e2.height = "", t2.offsetHeight), n2 = this.options.maxHeight, o2 = "leaflet-popup-scrolled";
          (n2 && n2 < i2 ? (e2.height = n2 + "px", M) : z)(t2, o2), this._containerWidth = this._container.offsetWidth;
        }, _animateZoom: function(t2) {
          var t2 = this._map._latLngToNewLayerPoint(this._latlng, t2.zoom, t2.center), e2 = this._getAnchor();
          Z(this._container, t2.add(e2));
        }, _adjustPan: function() {
          var t2, e2, i2, n2, o2, s2, r2, a2;
          this.options.autoPan && (this._map._panAnim && this._map._panAnim.stop(), this._autopanning ? this._autopanning = false : (t2 = this._map, e2 = parseInt(pe(this._container, "marginBottom"), 10) || 0, e2 = this._container.offsetHeight + e2, a2 = this._containerWidth, (i2 = new p(this._containerLeft, -e2 - this._containerBottom))._add(Pe(this._container)), i2 = t2.layerPointToContainerPoint(i2), o2 = m(this.options.autoPanPadding), n2 = m(this.options.autoPanPaddingTopLeft || o2), o2 = m(this.options.autoPanPaddingBottomRight || o2), s2 = t2.getSize(), r2 = 0, i2.x + a2 + o2.x > s2.x && (r2 = i2.x + a2 - s2.x + o2.x), i2.x - r2 - n2.x < (a2 = 0) && (r2 = i2.x - n2.x), i2.y + e2 + o2.y > s2.y && (a2 = i2.y + e2 - s2.y + o2.y), i2.y - a2 - n2.y < 0 && (a2 = i2.y - n2.y), (r2 || a2) && (this.options.keepInView && (this._autopanning = true), t2.fire("autopanstart").panBy([r2, a2]))));
        }, _getAnchor: function() {
          return m(this._source && this._source._getPopupAnchor ? this._source._getPopupAnchor() : [0, 0]);
        } })), Ii = (A.mergeOptions({ closePopupOnClick: true }), A.include({ openPopup: function(t2, e2, i2) {
          return this._initOverlay(Bi, t2, e2, i2).openOn(this), this;
        }, closePopup: function(t2) {
          return (t2 = arguments.length ? t2 : this._popup) && t2.close(), this;
        } }), o.include({ bindPopup: function(t2, e2) {
          return this._popup = this._initOverlay(Bi, this._popup, t2, e2), this._popupHandlersAdded || (this.on({ click: this._openPopup, keypress: this._onKeyPress, remove: this.closePopup, move: this._movePopup }), this._popupHandlersAdded = true), this;
        }, unbindPopup: function() {
          return this._popup && (this.off({ click: this._openPopup, keypress: this._onKeyPress, remove: this.closePopup, move: this._movePopup }), this._popupHandlersAdded = false, this._popup = null), this;
        }, openPopup: function(t2) {
          return this._popup && (this instanceof ci || (this._popup._source = this), this._popup._prepareOpen(t2 || this._latlng) && this._popup.openOn(this._map)), this;
        }, closePopup: function() {
          return this._popup && this._popup.close(), this;
        }, togglePopup: function() {
          return this._popup && this._popup.toggle(this), this;
        }, isPopupOpen: function() {
          return !!this._popup && this._popup.isOpen();
        }, setPopupContent: function(t2) {
          return this._popup && this._popup.setContent(t2), this;
        }, getPopup: function() {
          return this._popup;
        }, _openPopup: function(t2) {
          var e2;
          this._popup && this._map && (Re(t2), e2 = t2.layer || t2.target, this._popup._source !== e2 || e2 instanceof fi ? (this._popup._source = e2, this.openPopup(t2.latlng)) : this._map.hasLayer(this._popup) ? this.closePopup() : this.openPopup(t2.latlng));
        }, _movePopup: function(t2) {
          this._popup.setLatLng(t2.latlng);
        }, _onKeyPress: function(t2) {
          13 === t2.originalEvent.keyCode && this._openPopup(t2);
        } }), Ai.extend({ options: { pane: "tooltipPane", offset: [0, 0], direction: "auto", permanent: false, sticky: false, opacity: 0.9 }, onAdd: function(t2) {
          Ai.prototype.onAdd.call(this, t2), this.setOpacity(this.options.opacity), t2.fire("tooltipopen", { tooltip: this }), this._source && (this.addEventParent(this._source), this._source.fire("tooltipopen", { tooltip: this }, true));
        }, onRemove: function(t2) {
          Ai.prototype.onRemove.call(this, t2), t2.fire("tooltipclose", { tooltip: this }), this._source && (this.removeEventParent(this._source), this._source.fire("tooltipclose", { tooltip: this }, true));
        }, getEvents: function() {
          var t2 = Ai.prototype.getEvents.call(this);
          return this.options.permanent || (t2.preclick = this.close), t2;
        }, _initLayout: function() {
          var t2 = "leaflet-tooltip " + (this.options.className || "") + " leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide");
          this._contentNode = this._container = P("div", t2), this._container.setAttribute("role", "tooltip"), this._container.setAttribute("id", "leaflet-tooltip-" + h(this));
        }, _updateLayout: function() {
        }, _adjustPan: function() {
        }, _setPosition: function(t2) {
          var e2, i2 = this._map, n2 = this._container, o2 = i2.latLngToContainerPoint(i2.getCenter()), i2 = i2.layerPointToContainerPoint(t2), s2 = this.options.direction, r2 = n2.offsetWidth, a2 = n2.offsetHeight, h2 = m(this.options.offset), l2 = this._getAnchor(), i2 = "top" === s2 ? (e2 = r2 / 2, a2) : "bottom" === s2 ? (e2 = r2 / 2, 0) : (e2 = "center" === s2 ? r2 / 2 : "right" === s2 ? 0 : "left" === s2 ? r2 : i2.x < o2.x ? (s2 = "right", 0) : (s2 = "left", r2 + 2 * (h2.x + l2.x)), a2 / 2);
          t2 = t2.subtract(m(e2, i2, true)).add(h2).add(l2), z(n2, "leaflet-tooltip-right"), z(n2, "leaflet-tooltip-left"), z(n2, "leaflet-tooltip-top"), z(n2, "leaflet-tooltip-bottom"), M(n2, "leaflet-tooltip-" + s2), Z(n2, t2);
        }, _updatePosition: function() {
          var t2 = this._map.latLngToLayerPoint(this._latlng);
          this._setPosition(t2);
        }, setOpacity: function(t2) {
          this.options.opacity = t2, this._container && C(this._container, t2);
        }, _animateZoom: function(t2) {
          t2 = this._map._latLngToNewLayerPoint(this._latlng, t2.zoom, t2.center);
          this._setPosition(t2);
        }, _getAnchor: function() {
          return m(this._source && this._source._getTooltipAnchor && !this.options.sticky ? this._source._getTooltipAnchor() : [0, 0]);
        } })), Ri = (A.include({ openTooltip: function(t2, e2, i2) {
          return this._initOverlay(Ii, t2, e2, i2).openOn(this), this;
        }, closeTooltip: function(t2) {
          return t2.close(), this;
        } }), o.include({ bindTooltip: function(t2, e2) {
          return this._tooltip && this.isTooltipOpen() && this.unbindTooltip(), this._tooltip = this._initOverlay(Ii, this._tooltip, t2, e2), this._initTooltipInteractions(), this._tooltip.options.permanent && this._map && this._map.hasLayer(this) && this.openTooltip(), this;
        }, unbindTooltip: function() {
          return this._tooltip && (this._initTooltipInteractions(true), this.closeTooltip(), this._tooltip = null), this;
        }, _initTooltipInteractions: function(t2) {
          var e2, i2;
          !t2 && this._tooltipHandlersAdded || (e2 = t2 ? "off" : "on", i2 = { remove: this.closeTooltip, move: this._moveTooltip }, this._tooltip.options.permanent ? i2.add = this._openTooltip : (i2.mouseover = this._openTooltip, i2.mouseout = this.closeTooltip, i2.click = this._openTooltip, this._map ? this._addFocusListeners() : i2.add = this._addFocusListeners), this._tooltip.options.sticky && (i2.mousemove = this._moveTooltip), this[e2](i2), this._tooltipHandlersAdded = !t2);
        }, openTooltip: function(t2) {
          return this._tooltip && (this instanceof ci || (this._tooltip._source = this), this._tooltip._prepareOpen(t2) && (this._tooltip.openOn(this._map), this.getElement ? this._setAriaDescribedByOnLayer(this) : this.eachLayer && this.eachLayer(this._setAriaDescribedByOnLayer, this))), this;
        }, closeTooltip: function() {
          if (this._tooltip) return this._tooltip.close();
        }, toggleTooltip: function() {
          return this._tooltip && this._tooltip.toggle(this), this;
        }, isTooltipOpen: function() {
          return this._tooltip.isOpen();
        }, setTooltipContent: function(t2) {
          return this._tooltip && this._tooltip.setContent(t2), this;
        }, getTooltip: function() {
          return this._tooltip;
        }, _addFocusListeners: function() {
          this.getElement ? this._addFocusListenersOnLayer(this) : this.eachLayer && this.eachLayer(this._addFocusListenersOnLayer, this);
        }, _addFocusListenersOnLayer: function(t2) {
          var e2 = "function" == typeof t2.getElement && t2.getElement();
          e2 && (S(e2, "focus", function() {
            this._tooltip._source = t2, this.openTooltip();
          }, this), S(e2, "blur", this.closeTooltip, this));
        }, _setAriaDescribedByOnLayer: function(t2) {
          t2 = "function" == typeof t2.getElement && t2.getElement();
          t2 && t2.setAttribute("aria-describedby", this._tooltip._container.id);
        }, _openTooltip: function(t2) {
          var e2;
          this._tooltip && this._map && (this._map.dragging && this._map.dragging.moving() && !this._openOnceFlag ? (this._openOnceFlag = true, (e2 = this)._map.once("moveend", function() {
            e2._openOnceFlag = false, e2._openTooltip(t2);
          })) : (this._tooltip._source = t2.layer || t2.target, this.openTooltip(this._tooltip.options.sticky ? t2.latlng : void 0)));
        }, _moveTooltip: function(t2) {
          var e2 = t2.latlng;
          this._tooltip.options.sticky && t2.originalEvent && (t2 = this._map.mouseEventToContainerPoint(t2.originalEvent), t2 = this._map.containerPointToLayerPoint(t2), e2 = this._map.layerPointToLatLng(t2)), this._tooltip.setLatLng(e2);
        } }), di.extend({ options: { iconSize: [12, 12], html: false, bgPos: null, className: "leaflet-div-icon" }, createIcon: function(t2) {
          var t2 = t2 && "DIV" === t2.tagName ? t2 : document.createElement("div"), e2 = this.options;
          return e2.html instanceof Element ? (me(t2), t2.appendChild(e2.html)) : t2.innerHTML = false !== e2.html ? e2.html : "", e2.bgPos && (e2 = m(e2.bgPos), t2.style.backgroundPosition = -e2.x + "px " + -e2.y + "px"), this._setIconStyles(t2, "icon"), t2;
        }, createShadow: function() {
          return null;
        } }));
        di.Default = _i;
        var Ni = o.extend({ options: { tileSize: 256, opacity: 1, updateWhenIdle: b.mobile, updateWhenZooming: true, updateInterval: 200, zIndex: 1, bounds: null, minZoom: 0, maxZoom: void 0, maxNativeZoom: void 0, minNativeZoom: void 0, noWrap: false, pane: "tilePane", className: "", keepBuffer: 2 }, initialize: function(t2) {
          c(this, t2);
        }, onAdd: function() {
          this._initContainer(), this._levels = {}, this._tiles = {}, this._resetView();
        }, beforeAdd: function(t2) {
          t2._addZoomLimit(this);
        }, onRemove: function(t2) {
          this._removeAllTiles(), T(this._container), t2._removeZoomLimit(this), this._container = null, this._tileZoom = void 0;
        }, bringToFront: function() {
          return this._map && (fe(this._container), this._setAutoZIndex(Math.max)), this;
        }, bringToBack: function() {
          return this._map && (ge(this._container), this._setAutoZIndex(Math.min)), this;
        }, getContainer: function() {
          return this._container;
        }, setOpacity: function(t2) {
          return this.options.opacity = t2, this._updateOpacity(), this;
        }, setZIndex: function(t2) {
          return this.options.zIndex = t2, this._updateZIndex(), this;
        }, isLoading: function() {
          return this._loading;
        }, redraw: function() {
          var t2;
          return this._map && (this._removeAllTiles(), (t2 = this._clampZoom(this._map.getZoom())) !== this._tileZoom && (this._tileZoom = t2, this._updateLevels()), this._update()), this;
        }, getEvents: function() {
          var t2 = { viewprereset: this._invalidateAll, viewreset: this._resetView, zoom: this._resetView, moveend: this._onMoveEnd };
          return this.options.updateWhenIdle || (this._onMove || (this._onMove = j(this._onMoveEnd, this.options.updateInterval, this)), t2.move = this._onMove), this._zoomAnimated && (t2.zoomanim = this._animateZoom), t2;
        }, createTile: function() {
          return document.createElement("div");
        }, getTileSize: function() {
          var t2 = this.options.tileSize;
          return t2 instanceof p ? t2 : new p(t2, t2);
        }, _updateZIndex: function() {
          this._container && void 0 !== this.options.zIndex && null !== this.options.zIndex && (this._container.style.zIndex = this.options.zIndex);
        }, _setAutoZIndex: function(t2) {
          for (var e2, i2 = this.getPane().children, n2 = -t2(-1 / 0, 1 / 0), o2 = 0, s2 = i2.length; o2 < s2; o2++) e2 = i2[o2].style.zIndex, i2[o2] !== this._container && e2 && (n2 = t2(n2, +e2));
          isFinite(n2) && (this.options.zIndex = n2 + t2(-1, 1), this._updateZIndex());
        }, _updateOpacity: function() {
          if (this._map && !b.ielt9) {
            C(this._container, this.options.opacity);
            var t2, e2 = +/* @__PURE__ */ new Date(), i2 = false, n2 = false;
            for (t2 in this._tiles) {
              var o2, s2 = this._tiles[t2];
              s2.current && s2.loaded && (o2 = Math.min(1, (e2 - s2.loaded) / 200), C(s2.el, o2), o2 < 1 ? i2 = true : (s2.active ? n2 = true : this._onOpaqueTile(s2), s2.active = true));
            }
            n2 && !this._noPrune && this._pruneTiles(), i2 && (r(this._fadeFrame), this._fadeFrame = x(this._updateOpacity, this));
          }
        }, _onOpaqueTile: u, _initContainer: function() {
          this._container || (this._container = P("div", "leaflet-layer " + (this.options.className || "")), this._updateZIndex(), this.options.opacity < 1 && this._updateOpacity(), this.getPane().appendChild(this._container));
        }, _updateLevels: function() {
          var t2 = this._tileZoom, e2 = this.options.maxZoom;
          if (void 0 !== t2) {
            for (var i2 in this._levels) i2 = Number(i2), this._levels[i2].el.children.length || i2 === t2 ? (this._levels[i2].el.style.zIndex = e2 - Math.abs(t2 - i2), this._onUpdateLevel(i2)) : (T(this._levels[i2].el), this._removeTilesAtZoom(i2), this._onRemoveLevel(i2), delete this._levels[i2]);
            var n2 = this._levels[t2], o2 = this._map;
            return n2 || ((n2 = this._levels[t2] = {}).el = P("div", "leaflet-tile-container leaflet-zoom-animated", this._container), n2.el.style.zIndex = e2, n2.origin = o2.project(o2.unproject(o2.getPixelOrigin()), t2).round(), n2.zoom = t2, this._setZoomTransform(n2, o2.getCenter(), o2.getZoom()), u(n2.el.offsetWidth), this._onCreateLevel(n2)), this._level = n2;
          }
        }, _onUpdateLevel: u, _onRemoveLevel: u, _onCreateLevel: u, _pruneTiles: function() {
          if (this._map) {
            var t2, e2, i2, n2 = this._map.getZoom();
            if (n2 > this.options.maxZoom || n2 < this.options.minZoom) this._removeAllTiles();
            else {
              for (t2 in this._tiles) (i2 = this._tiles[t2]).retain = i2.current;
              for (t2 in this._tiles) (i2 = this._tiles[t2]).current && !i2.active && (e2 = i2.coords, this._retainParent(e2.x, e2.y, e2.z, e2.z - 5) || this._retainChildren(e2.x, e2.y, e2.z, e2.z + 2));
              for (t2 in this._tiles) this._tiles[t2].retain || this._removeTile(t2);
            }
          }
        }, _removeTilesAtZoom: function(t2) {
          for (var e2 in this._tiles) this._tiles[e2].coords.z === t2 && this._removeTile(e2);
        }, _removeAllTiles: function() {
          for (var t2 in this._tiles) this._removeTile(t2);
        }, _invalidateAll: function() {
          for (var t2 in this._levels) T(this._levels[t2].el), this._onRemoveLevel(Number(t2)), delete this._levels[t2];
          this._removeAllTiles(), this._tileZoom = void 0;
        }, _retainParent: function(t2, e2, i2, n2) {
          var t2 = Math.floor(t2 / 2), e2 = Math.floor(e2 / 2), i2 = i2 - 1, o2 = new p(+t2, +e2), o2 = (o2.z = i2, this._tileCoordsToKey(o2)), o2 = this._tiles[o2];
          return o2 && o2.active ? o2.retain = true : (o2 && o2.loaded && (o2.retain = true), n2 < i2 && this._retainParent(t2, e2, i2, n2));
        }, _retainChildren: function(t2, e2, i2, n2) {
          for (var o2 = 2 * t2; o2 < 2 * t2 + 2; o2++) for (var s2 = 2 * e2; s2 < 2 * e2 + 2; s2++) {
            var r2 = new p(o2, s2), r2 = (r2.z = i2 + 1, this._tileCoordsToKey(r2)), r2 = this._tiles[r2];
            r2 && r2.active ? r2.retain = true : (r2 && r2.loaded && (r2.retain = true), i2 + 1 < n2 && this._retainChildren(o2, s2, i2 + 1, n2));
          }
        }, _resetView: function(t2) {
          t2 = t2 && (t2.pinch || t2.flyTo);
          this._setView(this._map.getCenter(), this._map.getZoom(), t2, t2);
        }, _animateZoom: function(t2) {
          this._setView(t2.center, t2.zoom, true, t2.noUpdate);
        }, _clampZoom: function(t2) {
          var e2 = this.options;
          return void 0 !== e2.minNativeZoom && t2 < e2.minNativeZoom ? e2.minNativeZoom : void 0 !== e2.maxNativeZoom && e2.maxNativeZoom < t2 ? e2.maxNativeZoom : t2;
        }, _setView: function(t2, e2, i2, n2) {
          var o2 = Math.round(e2), o2 = void 0 !== this.options.maxZoom && o2 > this.options.maxZoom || void 0 !== this.options.minZoom && o2 < this.options.minZoom ? void 0 : this._clampZoom(o2), s2 = this.options.updateWhenZooming && o2 !== this._tileZoom;
          n2 && !s2 || (this._tileZoom = o2, this._abortLoading && this._abortLoading(), this._updateLevels(), this._resetGrid(), void 0 !== o2 && this._update(t2), i2 || this._pruneTiles(), this._noPrune = !!i2), this._setZoomTransforms(t2, e2);
        }, _setZoomTransforms: function(t2, e2) {
          for (var i2 in this._levels) this._setZoomTransform(this._levels[i2], t2, e2);
        }, _setZoomTransform: function(t2, e2, i2) {
          var n2 = this._map.getZoomScale(i2, t2.zoom), e2 = t2.origin.multiplyBy(n2).subtract(this._map._getNewPixelOrigin(e2, i2)).round();
          b.any3d ? be(t2.el, e2, n2) : Z(t2.el, e2);
        }, _resetGrid: function() {
          var t2 = this._map, e2 = t2.options.crs, i2 = this._tileSize = this.getTileSize(), n2 = this._tileZoom, o2 = this._map.getPixelWorldBounds(this._tileZoom);
          o2 && (this._globalTileRange = this._pxBoundsToTileRange(o2)), this._wrapX = e2.wrapLng && !this.options.noWrap && [Math.floor(t2.project([0, e2.wrapLng[0]], n2).x / i2.x), Math.ceil(t2.project([0, e2.wrapLng[1]], n2).x / i2.y)], this._wrapY = e2.wrapLat && !this.options.noWrap && [Math.floor(t2.project([e2.wrapLat[0], 0], n2).y / i2.x), Math.ceil(t2.project([e2.wrapLat[1], 0], n2).y / i2.y)];
        }, _onMoveEnd: function() {
          this._map && !this._map._animatingZoom && this._update();
        }, _getTiledPixelBounds: function(t2) {
          var e2 = this._map, i2 = e2._animatingZoom ? Math.max(e2._animateToZoom, e2.getZoom()) : e2.getZoom(), i2 = e2.getZoomScale(i2, this._tileZoom), t2 = e2.project(t2, this._tileZoom).floor(), e2 = e2.getSize().divideBy(2 * i2);
          return new f(t2.subtract(e2), t2.add(e2));
        }, _update: function(t2) {
          var e2 = this._map;
          if (e2) {
            var i2 = this._clampZoom(e2.getZoom());
            if (void 0 === t2 && (t2 = e2.getCenter()), void 0 !== this._tileZoom) {
              var n2, e2 = this._getTiledPixelBounds(t2), o2 = this._pxBoundsToTileRange(e2), s2 = o2.getCenter(), r2 = [], e2 = this.options.keepBuffer, a2 = new f(o2.getBottomLeft().subtract([e2, -e2]), o2.getTopRight().add([e2, -e2]));
              if (!(isFinite(o2.min.x) && isFinite(o2.min.y) && isFinite(o2.max.x) && isFinite(o2.max.y))) throw new Error("Attempted to load an infinite number of tiles");
              for (n2 in this._tiles) {
                var h2 = this._tiles[n2].coords;
                h2.z === this._tileZoom && a2.contains(new p(h2.x, h2.y)) || (this._tiles[n2].current = false);
              }
              if (1 < Math.abs(i2 - this._tileZoom)) this._setView(t2, i2);
              else {
                for (var l2 = o2.min.y; l2 <= o2.max.y; l2++) for (var u2 = o2.min.x; u2 <= o2.max.x; u2++) {
                  var c2, d2 = new p(u2, l2);
                  d2.z = this._tileZoom, this._isValidTile(d2) && ((c2 = this._tiles[this._tileCoordsToKey(d2)]) ? c2.current = true : r2.push(d2));
                }
                if (r2.sort(function(t3, e3) {
                  return t3.distanceTo(s2) - e3.distanceTo(s2);
                }), 0 !== r2.length) {
                  this._loading || (this._loading = true, this.fire("loading"));
                  for (var _2 = document.createDocumentFragment(), u2 = 0; u2 < r2.length; u2++) this._addTile(r2[u2], _2);
                  this._level.el.appendChild(_2);
                }
              }
            }
          }
        }, _isValidTile: function(t2) {
          var e2 = this._map.options.crs;
          if (!e2.infinite) {
            var i2 = this._globalTileRange;
            if (!e2.wrapLng && (t2.x < i2.min.x || t2.x > i2.max.x) || !e2.wrapLat && (t2.y < i2.min.y || t2.y > i2.max.y)) return false;
          }
          return !this.options.bounds || (e2 = this._tileCoordsToBounds(t2), g(this.options.bounds).overlaps(e2));
        }, _keyToBounds: function(t2) {
          return this._tileCoordsToBounds(this._keyToTileCoords(t2));
        }, _tileCoordsToNwSe: function(t2) {
          var e2 = this._map, i2 = this.getTileSize(), n2 = t2.scaleBy(i2), i2 = n2.add(i2);
          return [e2.unproject(n2, t2.z), e2.unproject(i2, t2.z)];
        }, _tileCoordsToBounds: function(t2) {
          t2 = this._tileCoordsToNwSe(t2), t2 = new s(t2[0], t2[1]);
          return t2 = this.options.noWrap ? t2 : this._map.wrapLatLngBounds(t2);
        }, _tileCoordsToKey: function(t2) {
          return t2.x + ":" + t2.y + ":" + t2.z;
        }, _keyToTileCoords: function(t2) {
          var t2 = t2.split(":"), e2 = new p(+t2[0], +t2[1]);
          return e2.z = +t2[2], e2;
        }, _removeTile: function(t2) {
          var e2 = this._tiles[t2];
          e2 && (T(e2.el), delete this._tiles[t2], this.fire("tileunload", { tile: e2.el, coords: this._keyToTileCoords(t2) }));
        }, _initTile: function(t2) {
          M(t2, "leaflet-tile");
          var e2 = this.getTileSize();
          t2.style.width = e2.x + "px", t2.style.height = e2.y + "px", t2.onselectstart = u, t2.onmousemove = u, b.ielt9 && this.options.opacity < 1 && C(t2, this.options.opacity);
        }, _addTile: function(t2, e2) {
          var i2 = this._getTilePos(t2), n2 = this._tileCoordsToKey(t2), o2 = this.createTile(this._wrapCoords(t2), a(this._tileReady, this, t2));
          this._initTile(o2), this.createTile.length < 2 && x(a(this._tileReady, this, t2, null, o2)), Z(o2, i2), this._tiles[n2] = { el: o2, coords: t2, current: true }, e2.appendChild(o2), this.fire("tileloadstart", { tile: o2, coords: t2 });
        }, _tileReady: function(t2, e2, i2) {
          e2 && this.fire("tileerror", { error: e2, tile: i2, coords: t2 });
          var n2 = this._tileCoordsToKey(t2);
          (i2 = this._tiles[n2]) && (i2.loaded = +/* @__PURE__ */ new Date(), this._map._fadeAnimated ? (C(i2.el, 0), r(this._fadeFrame), this._fadeFrame = x(this._updateOpacity, this)) : (i2.active = true, this._pruneTiles()), e2 || (M(i2.el, "leaflet-tile-loaded"), this.fire("tileload", { tile: i2.el, coords: t2 })), this._noTilesToLoad() && (this._loading = false, this.fire("load"), b.ielt9 || !this._map._fadeAnimated ? x(this._pruneTiles, this) : setTimeout(a(this._pruneTiles, this), 250)));
        }, _getTilePos: function(t2) {
          return t2.scaleBy(this.getTileSize()).subtract(this._level.origin);
        }, _wrapCoords: function(t2) {
          var e2 = new p(this._wrapX ? H(t2.x, this._wrapX) : t2.x, this._wrapY ? H(t2.y, this._wrapY) : t2.y);
          return e2.z = t2.z, e2;
        }, _pxBoundsToTileRange: function(t2) {
          var e2 = this.getTileSize();
          return new f(t2.min.unscaleBy(e2).floor(), t2.max.unscaleBy(e2).ceil().subtract([1, 1]));
        }, _noTilesToLoad: function() {
          for (var t2 in this._tiles) if (!this._tiles[t2].loaded) return false;
          return true;
        } });
        var Di = Ni.extend({ options: { minZoom: 0, maxZoom: 18, subdomains: "abc", errorTileUrl: "", zoomOffset: 0, tms: false, zoomReverse: false, detectRetina: false, crossOrigin: false, referrerPolicy: false }, initialize: function(t2, e2) {
          this._url = t2, (e2 = c(this, e2)).detectRetina && b.retina && 0 < e2.maxZoom ? (e2.tileSize = Math.floor(e2.tileSize / 2), e2.zoomReverse ? (e2.zoomOffset--, e2.minZoom = Math.min(e2.maxZoom, e2.minZoom + 1)) : (e2.zoomOffset++, e2.maxZoom = Math.max(e2.minZoom, e2.maxZoom - 1)), e2.minZoom = Math.max(0, e2.minZoom)) : e2.zoomReverse ? e2.minZoom = Math.min(e2.maxZoom, e2.minZoom) : e2.maxZoom = Math.max(e2.minZoom, e2.maxZoom), "string" == typeof e2.subdomains && (e2.subdomains = e2.subdomains.split("")), this.on("tileunload", this._onTileRemove);
        }, setUrl: function(t2, e2) {
          return this._url === t2 && void 0 === e2 && (e2 = true), this._url = t2, e2 || this.redraw(), this;
        }, createTile: function(t2, e2) {
          var i2 = document.createElement("img");
          return S(i2, "load", a(this._tileOnLoad, this, e2, i2)), S(i2, "error", a(this._tileOnError, this, e2, i2)), !this.options.crossOrigin && "" !== this.options.crossOrigin || (i2.crossOrigin = true === this.options.crossOrigin ? "" : this.options.crossOrigin), "string" == typeof this.options.referrerPolicy && (i2.referrerPolicy = this.options.referrerPolicy), i2.alt = "", i2.src = this.getTileUrl(t2), i2;
        }, getTileUrl: function(t2) {
          var e2 = { r: b.retina ? "@2x" : "", s: this._getSubdomain(t2), x: t2.x, y: t2.y, z: this._getZoomForUrl() };
          return this._map && !this._map.options.crs.infinite && (t2 = this._globalTileRange.max.y - t2.y, this.options.tms && (e2.y = t2), e2["-y"] = t2), q(this._url, l(e2, this.options));
        }, _tileOnLoad: function(t2, e2) {
          b.ielt9 ? setTimeout(a(t2, this, null, e2), 0) : t2(null, e2);
        }, _tileOnError: function(t2, e2, i2) {
          var n2 = this.options.errorTileUrl;
          n2 && e2.getAttribute("src") !== n2 && (e2.src = n2), t2(i2, e2);
        }, _onTileRemove: function(t2) {
          t2.tile.onload = null;
        }, _getZoomForUrl: function() {
          var t2 = this._tileZoom, e2 = this.options.maxZoom;
          return (t2 = this.options.zoomReverse ? e2 - t2 : t2) + this.options.zoomOffset;
        }, _getSubdomain: function(t2) {
          t2 = Math.abs(t2.x + t2.y) % this.options.subdomains.length;
          return this.options.subdomains[t2];
        }, _abortLoading: function() {
          var t2, e2, i2;
          for (t2 in this._tiles) this._tiles[t2].coords.z !== this._tileZoom && ((i2 = this._tiles[t2].el).onload = u, i2.onerror = u, i2.complete || (i2.src = K, e2 = this._tiles[t2].coords, T(i2), delete this._tiles[t2], this.fire("tileabort", { tile: i2, coords: e2 })));
        }, _removeTile: function(t2) {
          var e2 = this._tiles[t2];
          if (e2) return e2.el.setAttribute("src", K), Ni.prototype._removeTile.call(this, t2);
        }, _tileReady: function(t2, e2, i2) {
          if (this._map && (!i2 || i2.getAttribute("src") !== K)) return Ni.prototype._tileReady.call(this, t2, e2, i2);
        } });
        function ji(t2, e2) {
          return new Di(t2, e2);
        }
        var Hi = Di.extend({ defaultWmsParams: { service: "WMS", request: "GetMap", layers: "", styles: "", format: "image/jpeg", transparent: false, version: "1.1.1" }, options: { crs: null, uppercase: false }, initialize: function(t2, e2) {
          this._url = t2;
          var i2, n2 = l({}, this.defaultWmsParams);
          for (i2 in e2) i2 in this.options || (n2[i2] = e2[i2]);
          var t2 = (e2 = c(this, e2)).detectRetina && b.retina ? 2 : 1, o2 = this.getTileSize();
          n2.width = o2.x * t2, n2.height = o2.y * t2, this.wmsParams = n2;
        }, onAdd: function(t2) {
          this._crs = this.options.crs || t2.options.crs, this._wmsVersion = parseFloat(this.wmsParams.version);
          var e2 = 1.3 <= this._wmsVersion ? "crs" : "srs";
          this.wmsParams[e2] = this._crs.code, Di.prototype.onAdd.call(this, t2);
        }, getTileUrl: function(t2) {
          var e2 = this._tileCoordsToNwSe(t2), i2 = this._crs, i2 = _(i2.project(e2[0]), i2.project(e2[1])), e2 = i2.min, i2 = i2.max, e2 = (1.3 <= this._wmsVersion && this._crs === li ? [e2.y, e2.x, i2.y, i2.x] : [e2.x, e2.y, i2.x, i2.y]).join(","), i2 = Di.prototype.getTileUrl.call(this, t2);
          return i2 + U(this.wmsParams, i2, this.options.uppercase) + (this.options.uppercase ? "&BBOX=" : "&bbox=") + e2;
        }, setParams: function(t2, e2) {
          return l(this.wmsParams, t2), e2 || this.redraw(), this;
        } });
        Di.WMS = Hi, ji.wms = function(t2, e2) {
          return new Hi(t2, e2);
        };
        var Wi = o.extend({ options: { padding: 0.1 }, initialize: function(t2) {
          c(this, t2), h(this), this._layers = this._layers || {};
        }, onAdd: function() {
          this._container || (this._initContainer(), M(this._container, "leaflet-zoom-animated")), this.getPane().appendChild(this._container), this._update(), this.on("update", this._updatePaths, this);
        }, onRemove: function() {
          this.off("update", this._updatePaths, this), this._destroyContainer();
        }, getEvents: function() {
          var t2 = { viewreset: this._reset, zoom: this._onZoom, moveend: this._update, zoomend: this._onZoomEnd };
          return this._zoomAnimated && (t2.zoomanim = this._onAnimZoom), t2;
        }, _onAnimZoom: function(t2) {
          this._updateTransform(t2.center, t2.zoom);
        }, _onZoom: function() {
          this._updateTransform(this._map.getCenter(), this._map.getZoom());
        }, _updateTransform: function(t2, e2) {
          var i2 = this._map.getZoomScale(e2, this._zoom), n2 = this._map.getSize().multiplyBy(0.5 + this.options.padding), o2 = this._map.project(this._center, e2), n2 = n2.multiplyBy(-i2).add(o2).subtract(this._map._getNewPixelOrigin(t2, e2));
          b.any3d ? be(this._container, n2, i2) : Z(this._container, n2);
        }, _reset: function() {
          for (var t2 in this._update(), this._updateTransform(this._center, this._zoom), this._layers) this._layers[t2]._reset();
        }, _onZoomEnd: function() {
          for (var t2 in this._layers) this._layers[t2]._project();
        }, _updatePaths: function() {
          for (var t2 in this._layers) this._layers[t2]._update();
        }, _update: function() {
          var t2 = this.options.padding, e2 = this._map.getSize(), i2 = this._map.containerPointToLayerPoint(e2.multiplyBy(-t2)).round();
          this._bounds = new f(i2, i2.add(e2.multiplyBy(1 + 2 * t2)).round()), this._center = this._map.getCenter(), this._zoom = this._map.getZoom();
        } }), Fi = Wi.extend({ options: { tolerance: 0 }, getEvents: function() {
          var t2 = Wi.prototype.getEvents.call(this);
          return t2.viewprereset = this._onViewPreReset, t2;
        }, _onViewPreReset: function() {
          this._postponeUpdatePaths = true;
        }, onAdd: function() {
          Wi.prototype.onAdd.call(this), this._draw();
        }, _initContainer: function() {
          var t2 = this._container = document.createElement("canvas");
          S(t2, "mousemove", this._onMouseMove, this), S(t2, "click dblclick mousedown mouseup contextmenu", this._onClick, this), S(t2, "mouseout", this._handleMouseOut, this), t2._leaflet_disable_events = true, this._ctx = t2.getContext("2d");
        }, _destroyContainer: function() {
          r(this._redrawRequest), delete this._ctx, T(this._container), k(this._container), delete this._container;
        }, _updatePaths: function() {
          if (!this._postponeUpdatePaths) {
            for (var t2 in this._redrawBounds = null, this._layers) this._layers[t2]._update();
            this._redraw();
          }
        }, _update: function() {
          var t2, e2, i2, n2;
          this._map._animatingZoom && this._bounds || (Wi.prototype._update.call(this), t2 = this._bounds, e2 = this._container, i2 = t2.getSize(), n2 = b.retina ? 2 : 1, Z(e2, t2.min), e2.width = n2 * i2.x, e2.height = n2 * i2.y, e2.style.width = i2.x + "px", e2.style.height = i2.y + "px", b.retina && this._ctx.scale(2, 2), this._ctx.translate(-t2.min.x, -t2.min.y), this.fire("update"));
        }, _reset: function() {
          Wi.prototype._reset.call(this), this._postponeUpdatePaths && (this._postponeUpdatePaths = false, this._updatePaths());
        }, _initPath: function(t2) {
          this._updateDashArray(t2);
          t2 = (this._layers[h(t2)] = t2)._order = { layer: t2, prev: this._drawLast, next: null };
          this._drawLast && (this._drawLast.next = t2), this._drawLast = t2, this._drawFirst = this._drawFirst || this._drawLast;
        }, _addPath: function(t2) {
          this._requestRedraw(t2);
        }, _removePath: function(t2) {
          var e2 = t2._order, i2 = e2.next, e2 = e2.prev;
          i2 ? i2.prev = e2 : this._drawLast = e2, e2 ? e2.next = i2 : this._drawFirst = i2, delete t2._order, delete this._layers[h(t2)], this._requestRedraw(t2);
        }, _updatePath: function(t2) {
          this._extendRedrawBounds(t2), t2._project(), t2._update(), this._requestRedraw(t2);
        }, _updateStyle: function(t2) {
          this._updateDashArray(t2), this._requestRedraw(t2);
        }, _updateDashArray: function(t2) {
          if ("string" == typeof t2.options.dashArray) {
            for (var e2, i2 = t2.options.dashArray.split(/[, ]+/), n2 = [], o2 = 0; o2 < i2.length; o2++) {
              if (e2 = Number(i2[o2]), isNaN(e2)) return;
              n2.push(e2);
            }
            t2.options._dashArray = n2;
          } else t2.options._dashArray = t2.options.dashArray;
        }, _requestRedraw: function(t2) {
          this._map && (this._extendRedrawBounds(t2), this._redrawRequest = this._redrawRequest || x(this._redraw, this));
        }, _extendRedrawBounds: function(t2) {
          var e2;
          t2._pxBounds && (e2 = (t2.options.weight || 0) + 1, this._redrawBounds = this._redrawBounds || new f(), this._redrawBounds.extend(t2._pxBounds.min.subtract([e2, e2])), this._redrawBounds.extend(t2._pxBounds.max.add([e2, e2])));
        }, _redraw: function() {
          this._redrawRequest = null, this._redrawBounds && (this._redrawBounds.min._floor(), this._redrawBounds.max._ceil()), this._clear(), this._draw(), this._redrawBounds = null;
        }, _clear: function() {
          var t2, e2 = this._redrawBounds;
          e2 ? (t2 = e2.getSize(), this._ctx.clearRect(e2.min.x, e2.min.y, t2.x, t2.y)) : (this._ctx.save(), this._ctx.setTransform(1, 0, 0, 1, 0, 0), this._ctx.clearRect(0, 0, this._container.width, this._container.height), this._ctx.restore());
        }, _draw: function() {
          var t2, e2, i2 = this._redrawBounds;
          this._ctx.save(), i2 && (e2 = i2.getSize(), this._ctx.beginPath(), this._ctx.rect(i2.min.x, i2.min.y, e2.x, e2.y), this._ctx.clip()), this._drawing = true;
          for (var n2 = this._drawFirst; n2; n2 = n2.next) t2 = n2.layer, (!i2 || t2._pxBounds && t2._pxBounds.intersects(i2)) && t2._updatePath();
          this._drawing = false, this._ctx.restore();
        }, _updatePoly: function(t2, e2) {
          if (this._drawing) {
            var i2, n2, o2, s2, r2 = t2._parts, a2 = r2.length, h2 = this._ctx;
            if (a2) {
              for (h2.beginPath(), i2 = 0; i2 < a2; i2++) {
                for (n2 = 0, o2 = r2[i2].length; n2 < o2; n2++) s2 = r2[i2][n2], h2[n2 ? "lineTo" : "moveTo"](s2.x, s2.y);
                e2 && h2.closePath();
              }
              this._fillStroke(h2, t2);
            }
          }
        }, _updateCircle: function(t2) {
          var e2, i2, n2, o2;
          this._drawing && !t2._empty() && (e2 = t2._point, i2 = this._ctx, n2 = Math.max(Math.round(t2._radius), 1), 1 != (o2 = (Math.max(Math.round(t2._radiusY), 1) || n2) / n2) && (i2.save(), i2.scale(1, o2)), i2.beginPath(), i2.arc(e2.x, e2.y / o2, n2, 0, 2 * Math.PI, false), 1 != o2 && i2.restore(), this._fillStroke(i2, t2));
        }, _fillStroke: function(t2, e2) {
          var i2 = e2.options;
          i2.fill && (t2.globalAlpha = i2.fillOpacity, t2.fillStyle = i2.fillColor || i2.color, t2.fill(i2.fillRule || "evenodd")), i2.stroke && 0 !== i2.weight && (t2.setLineDash && t2.setLineDash(e2.options && e2.options._dashArray || []), t2.globalAlpha = i2.opacity, t2.lineWidth = i2.weight, t2.strokeStyle = i2.color, t2.lineCap = i2.lineCap, t2.lineJoin = i2.lineJoin, t2.stroke());
        }, _onClick: function(t2) {
          for (var e2, i2, n2 = this._map.mouseEventToLayerPoint(t2), o2 = this._drawFirst; o2; o2 = o2.next) (e2 = o2.layer).options.interactive && e2._containsPoint(n2) && (("click" === t2.type || "preclick" === t2.type) && this._map._draggableMoved(e2) || (i2 = e2));
          this._fireEvent(!!i2 && [i2], t2);
        }, _onMouseMove: function(t2) {
          var e2;
          !this._map || this._map.dragging.moving() || this._map._animatingZoom || (e2 = this._map.mouseEventToLayerPoint(t2), this._handleMouseHover(t2, e2));
        }, _handleMouseOut: function(t2) {
          var e2 = this._hoveredLayer;
          e2 && (z(this._container, "leaflet-interactive"), this._fireEvent([e2], t2, "mouseout"), this._hoveredLayer = null, this._mouseHoverThrottled = false);
        }, _handleMouseHover: function(t2, e2) {
          if (!this._mouseHoverThrottled) {
            for (var i2, n2, o2 = this._drawFirst; o2; o2 = o2.next) (i2 = o2.layer).options.interactive && i2._containsPoint(e2) && (n2 = i2);
            n2 !== this._hoveredLayer && (this._handleMouseOut(t2), n2 && (M(this._container, "leaflet-interactive"), this._fireEvent([n2], t2, "mouseover"), this._hoveredLayer = n2)), this._fireEvent(!!this._hoveredLayer && [this._hoveredLayer], t2), this._mouseHoverThrottled = true, setTimeout(a(function() {
              this._mouseHoverThrottled = false;
            }, this), 32);
          }
        }, _fireEvent: function(t2, e2, i2) {
          this._map._fireDOMEvent(e2, i2 || e2.type, t2);
        }, _bringToFront: function(t2) {
          var e2, i2, n2 = t2._order;
          n2 && (e2 = n2.next, i2 = n2.prev, e2 && ((e2.prev = i2) ? i2.next = e2 : e2 && (this._drawFirst = e2), n2.prev = this._drawLast, (this._drawLast.next = n2).next = null, this._drawLast = n2, this._requestRedraw(t2)));
        }, _bringToBack: function(t2) {
          var e2, i2, n2 = t2._order;
          n2 && (e2 = n2.next, (i2 = n2.prev) && ((i2.next = e2) ? e2.prev = i2 : i2 && (this._drawLast = i2), n2.prev = null, n2.next = this._drawFirst, this._drawFirst.prev = n2, this._drawFirst = n2, this._requestRedraw(t2)));
        } });
        function Ui(t2) {
          return b.canvas ? new Fi(t2) : null;
        }
        var Vi = (function() {
          try {
            return document.namespaces.add("lvml", "urn:schemas-microsoft-com:vml"), function(t2) {
              return document.createElement("<lvml:" + t2 + ' class="lvml">');
            };
          } catch (t2) {
          }
          return function(t2) {
            return document.createElement("<" + t2 + ' xmlns="urn:schemas-microsoft.com:vml" class="lvml">');
          };
        })(), zt = { _initContainer: function() {
          this._container = P("div", "leaflet-vml-container");
        }, _update: function() {
          this._map._animatingZoom || (Wi.prototype._update.call(this), this.fire("update"));
        }, _initPath: function(t2) {
          var e2 = t2._container = Vi("shape");
          M(e2, "leaflet-vml-shape " + (this.options.className || "")), e2.coordsize = "1 1", t2._path = Vi("path"), e2.appendChild(t2._path), this._updateStyle(t2), this._layers[h(t2)] = t2;
        }, _addPath: function(t2) {
          var e2 = t2._container;
          this._container.appendChild(e2), t2.options.interactive && t2.addInteractiveTarget(e2);
        }, _removePath: function(t2) {
          var e2 = t2._container;
          T(e2), t2.removeInteractiveTarget(e2), delete this._layers[h(t2)];
        }, _updateStyle: function(t2) {
          var e2 = t2._stroke, i2 = t2._fill, n2 = t2.options, o2 = t2._container;
          o2.stroked = !!n2.stroke, o2.filled = !!n2.fill, n2.stroke ? (e2 = e2 || (t2._stroke = Vi("stroke")), o2.appendChild(e2), e2.weight = n2.weight + "px", e2.color = n2.color, e2.opacity = n2.opacity, n2.dashArray ? e2.dashStyle = d(n2.dashArray) ? n2.dashArray.join(" ") : n2.dashArray.replace(/( *, *)/g, " ") : e2.dashStyle = "", e2.endcap = n2.lineCap.replace("butt", "flat"), e2.joinstyle = n2.lineJoin) : e2 && (o2.removeChild(e2), t2._stroke = null), n2.fill ? (i2 = i2 || (t2._fill = Vi("fill")), o2.appendChild(i2), i2.color = n2.fillColor || n2.color, i2.opacity = n2.fillOpacity) : i2 && (o2.removeChild(i2), t2._fill = null);
        }, _updateCircle: function(t2) {
          var e2 = t2._point.round(), i2 = Math.round(t2._radius), n2 = Math.round(t2._radiusY || i2);
          this._setPath(t2, t2._empty() ? "M0 0" : "AL " + e2.x + "," + e2.y + " " + i2 + "," + n2 + " 0,23592600");
        }, _setPath: function(t2, e2) {
          t2._path.v = e2;
        }, _bringToFront: function(t2) {
          fe(t2._container);
        }, _bringToBack: function(t2) {
          ge(t2._container);
        } }, qi = b.vml ? Vi : ct, Gi = Wi.extend({ _initContainer: function() {
          this._container = qi("svg"), this._container.setAttribute("pointer-events", "none"), this._rootGroup = qi("g"), this._container.appendChild(this._rootGroup);
        }, _destroyContainer: function() {
          T(this._container), k(this._container), delete this._container, delete this._rootGroup, delete this._svgSize;
        }, _update: function() {
          var t2, e2, i2;
          this._map._animatingZoom && this._bounds || (Wi.prototype._update.call(this), e2 = (t2 = this._bounds).getSize(), i2 = this._container, this._svgSize && this._svgSize.equals(e2) || (this._svgSize = e2, i2.setAttribute("width", e2.x), i2.setAttribute("height", e2.y)), Z(i2, t2.min), i2.setAttribute("viewBox", [t2.min.x, t2.min.y, e2.x, e2.y].join(" ")), this.fire("update"));
        }, _initPath: function(t2) {
          var e2 = t2._path = qi("path");
          t2.options.className && M(e2, t2.options.className), t2.options.interactive && M(e2, "leaflet-interactive"), this._updateStyle(t2), this._layers[h(t2)] = t2;
        }, _addPath: function(t2) {
          this._rootGroup || this._initContainer(), this._rootGroup.appendChild(t2._path), t2.addInteractiveTarget(t2._path);
        }, _removePath: function(t2) {
          T(t2._path), t2.removeInteractiveTarget(t2._path), delete this._layers[h(t2)];
        }, _updatePath: function(t2) {
          t2._project(), t2._update();
        }, _updateStyle: function(t2) {
          var e2 = t2._path, t2 = t2.options;
          e2 && (t2.stroke ? (e2.setAttribute("stroke", t2.color), e2.setAttribute("stroke-opacity", t2.opacity), e2.setAttribute("stroke-width", t2.weight), e2.setAttribute("stroke-linecap", t2.lineCap), e2.setAttribute("stroke-linejoin", t2.lineJoin), t2.dashArray ? e2.setAttribute("stroke-dasharray", t2.dashArray) : e2.removeAttribute("stroke-dasharray"), t2.dashOffset ? e2.setAttribute("stroke-dashoffset", t2.dashOffset) : e2.removeAttribute("stroke-dashoffset")) : e2.setAttribute("stroke", "none"), t2.fill ? (e2.setAttribute("fill", t2.fillColor || t2.color), e2.setAttribute("fill-opacity", t2.fillOpacity), e2.setAttribute("fill-rule", t2.fillRule || "evenodd")) : e2.setAttribute("fill", "none"));
        }, _updatePoly: function(t2, e2) {
          this._setPath(t2, dt(t2._parts, e2));
        }, _updateCircle: function(t2) {
          var e2 = t2._point, i2 = Math.max(Math.round(t2._radius), 1), n2 = "a" + i2 + "," + (Math.max(Math.round(t2._radiusY), 1) || i2) + " 0 1,0 ", e2 = t2._empty() ? "M0 0" : "M" + (e2.x - i2) + "," + e2.y + n2 + 2 * i2 + ",0 " + n2 + 2 * -i2 + ",0 ";
          this._setPath(t2, e2);
        }, _setPath: function(t2, e2) {
          t2._path.setAttribute("d", e2);
        }, _bringToFront: function(t2) {
          fe(t2._path);
        }, _bringToBack: function(t2) {
          ge(t2._path);
        } });
        function Ki(t2) {
          return b.svg || b.vml ? new Gi(t2) : null;
        }
        b.vml && Gi.include(zt), A.include({ getRenderer: function(t2) {
          t2 = (t2 = t2.options.renderer || this._getPaneRenderer(t2.options.pane) || this.options.renderer || this._renderer) || (this._renderer = this._createRenderer());
          return this.hasLayer(t2) || this.addLayer(t2), t2;
        }, _getPaneRenderer: function(t2) {
          var e2;
          return "overlayPane" !== t2 && void 0 !== t2 && (void 0 === (e2 = this._paneRenderers[t2]) && (e2 = this._createRenderer({ pane: t2 }), this._paneRenderers[t2] = e2), e2);
        }, _createRenderer: function(t2) {
          return this.options.preferCanvas && Ui(t2) || Ki(t2);
        } });
        var Yi = xi.extend({ initialize: function(t2, e2) {
          xi.prototype.initialize.call(this, this._boundsToLatLngs(t2), e2);
        }, setBounds: function(t2) {
          return this.setLatLngs(this._boundsToLatLngs(t2));
        }, _boundsToLatLngs: function(t2) {
          return [(t2 = g(t2)).getSouthWest(), t2.getNorthWest(), t2.getNorthEast(), t2.getSouthEast()];
        } });
        Gi.create = qi, Gi.pointsToPath = dt, wi.geometryToLayer = bi, wi.coordsToLatLng = Li, wi.coordsToLatLngs = Ti, wi.latLngToCoords = Mi, wi.latLngsToCoords = zi, wi.getFeature = Ci, wi.asFeature = Zi, A.mergeOptions({ boxZoom: true });
        var _t = n.extend({ initialize: function(t2) {
          this._map = t2, this._container = t2._container, this._pane = t2._panes.overlayPane, this._resetStateTimeout = 0, t2.on("unload", this._destroy, this);
        }, addHooks: function() {
          S(this._container, "mousedown", this._onMouseDown, this);
        }, removeHooks: function() {
          k(this._container, "mousedown", this._onMouseDown, this);
        }, moved: function() {
          return this._moved;
        }, _destroy: function() {
          T(this._pane), delete this._pane;
        }, _resetState: function() {
          this._resetStateTimeout = 0, this._moved = false;
        }, _clearDeferredResetState: function() {
          0 !== this._resetStateTimeout && (clearTimeout(this._resetStateTimeout), this._resetStateTimeout = 0);
        }, _onMouseDown: function(t2) {
          if (!t2.shiftKey || 1 !== t2.which && 1 !== t2.button) return false;
          this._clearDeferredResetState(), this._resetState(), re(), Le(), this._startPoint = this._map.mouseEventToContainerPoint(t2), S(document, { contextmenu: Re, mousemove: this._onMouseMove, mouseup: this._onMouseUp, keydown: this._onKeyDown }, this);
        }, _onMouseMove: function(t2) {
          this._moved || (this._moved = true, this._box = P("div", "leaflet-zoom-box", this._container), M(this._container, "leaflet-crosshair"), this._map.fire("boxzoomstart")), this._point = this._map.mouseEventToContainerPoint(t2);
          var t2 = new f(this._point, this._startPoint), e2 = t2.getSize();
          Z(this._box, t2.min), this._box.style.width = e2.x + "px", this._box.style.height = e2.y + "px";
        }, _finish: function() {
          this._moved && (T(this._box), z(this._container, "leaflet-crosshair")), ae(), Te(), k(document, { contextmenu: Re, mousemove: this._onMouseMove, mouseup: this._onMouseUp, keydown: this._onKeyDown }, this);
        }, _onMouseUp: function(t2) {
          1 !== t2.which && 1 !== t2.button || (this._finish(), this._moved && (this._clearDeferredResetState(), this._resetStateTimeout = setTimeout(a(this._resetState, this), 0), t2 = new s(this._map.containerPointToLatLng(this._startPoint), this._map.containerPointToLatLng(this._point)), this._map.fitBounds(t2).fire("boxzoomend", { boxZoomBounds: t2 })));
        }, _onKeyDown: function(t2) {
          27 === t2.keyCode && (this._finish(), this._clearDeferredResetState(), this._resetState());
        } }), Ct = (A.addInitHook("addHandler", "boxZoom", _t), A.mergeOptions({ doubleClickZoom: true }), n.extend({ addHooks: function() {
          this._map.on("dblclick", this._onDoubleClick, this);
        }, removeHooks: function() {
          this._map.off("dblclick", this._onDoubleClick, this);
        }, _onDoubleClick: function(t2) {
          var e2 = this._map, i2 = e2.getZoom(), n2 = e2.options.zoomDelta, i2 = t2.originalEvent.shiftKey ? i2 - n2 : i2 + n2;
          "center" === e2.options.doubleClickZoom ? e2.setZoom(i2) : e2.setZoomAround(t2.containerPoint, i2);
        } })), Zt = (A.addInitHook("addHandler", "doubleClickZoom", Ct), A.mergeOptions({ dragging: true, inertia: true, inertiaDeceleration: 3400, inertiaMaxSpeed: 1 / 0, easeLinearity: 0.2, worldCopyJump: false, maxBoundsViscosity: 0 }), n.extend({ addHooks: function() {
          var t2;
          this._draggable || (t2 = this._map, this._draggable = new Xe(t2._mapPane, t2._container), this._draggable.on({ dragstart: this._onDragStart, drag: this._onDrag, dragend: this._onDragEnd }, this), this._draggable.on("predrag", this._onPreDragLimit, this), t2.options.worldCopyJump && (this._draggable.on("predrag", this._onPreDragWrap, this), t2.on("zoomend", this._onZoomEnd, this), t2.whenReady(this._onZoomEnd, this))), M(this._map._container, "leaflet-grab leaflet-touch-drag"), this._draggable.enable(), this._positions = [], this._times = [];
        }, removeHooks: function() {
          z(this._map._container, "leaflet-grab"), z(this._map._container, "leaflet-touch-drag"), this._draggable.disable();
        }, moved: function() {
          return this._draggable && this._draggable._moved;
        }, moving: function() {
          return this._draggable && this._draggable._moving;
        }, _onDragStart: function() {
          var t2, e2 = this._map;
          e2._stop(), this._map.options.maxBounds && this._map.options.maxBoundsViscosity ? (t2 = g(this._map.options.maxBounds), this._offsetLimit = _(this._map.latLngToContainerPoint(t2.getNorthWest()).multiplyBy(-1), this._map.latLngToContainerPoint(t2.getSouthEast()).multiplyBy(-1).add(this._map.getSize())), this._viscosity = Math.min(1, Math.max(0, this._map.options.maxBoundsViscosity))) : this._offsetLimit = null, e2.fire("movestart").fire("dragstart"), e2.options.inertia && (this._positions = [], this._times = []);
        }, _onDrag: function(t2) {
          var e2, i2;
          this._map.options.inertia && (e2 = this._lastTime = +/* @__PURE__ */ new Date(), i2 = this._lastPos = this._draggable._absPos || this._draggable._newPos, this._positions.push(i2), this._times.push(e2), this._prunePositions(e2)), this._map.fire("move", t2).fire("drag", t2);
        }, _prunePositions: function(t2) {
          for (; 1 < this._positions.length && 50 < t2 - this._times[0]; ) this._positions.shift(), this._times.shift();
        }, _onZoomEnd: function() {
          var t2 = this._map.getSize().divideBy(2), e2 = this._map.latLngToLayerPoint([0, 0]);
          this._initialWorldOffset = e2.subtract(t2).x, this._worldWidth = this._map.getPixelWorldBounds().getSize().x;
        }, _viscousLimit: function(t2, e2) {
          return t2 - (t2 - e2) * this._viscosity;
        }, _onPreDragLimit: function() {
          var t2, e2;
          this._viscosity && this._offsetLimit && (t2 = this._draggable._newPos.subtract(this._draggable._startPos), e2 = this._offsetLimit, t2.x < e2.min.x && (t2.x = this._viscousLimit(t2.x, e2.min.x)), t2.y < e2.min.y && (t2.y = this._viscousLimit(t2.y, e2.min.y)), t2.x > e2.max.x && (t2.x = this._viscousLimit(t2.x, e2.max.x)), t2.y > e2.max.y && (t2.y = this._viscousLimit(t2.y, e2.max.y)), this._draggable._newPos = this._draggable._startPos.add(t2));
        }, _onPreDragWrap: function() {
          var t2 = this._worldWidth, e2 = Math.round(t2 / 2), i2 = this._initialWorldOffset, n2 = this._draggable._newPos.x, o2 = (n2 - e2 + i2) % t2 + e2 - i2, n2 = (n2 + e2 + i2) % t2 - e2 - i2, t2 = Math.abs(o2 + i2) < Math.abs(n2 + i2) ? o2 : n2;
          this._draggable._absPos = this._draggable._newPos.clone(), this._draggable._newPos.x = t2;
        }, _onDragEnd: function(t2) {
          var e2, i2, n2, o2, s2 = this._map, r2 = s2.options, a2 = !r2.inertia || t2.noInertia || this._times.length < 2;
          s2.fire("dragend", t2), !a2 && (this._prunePositions(+/* @__PURE__ */ new Date()), t2 = this._lastPos.subtract(this._positions[0]), a2 = (this._lastTime - this._times[0]) / 1e3, e2 = r2.easeLinearity, a2 = (t2 = t2.multiplyBy(e2 / a2)).distanceTo([0, 0]), i2 = Math.min(r2.inertiaMaxSpeed, a2), t2 = t2.multiplyBy(i2 / a2), n2 = i2 / (r2.inertiaDeceleration * e2), (o2 = t2.multiplyBy(-n2 / 2).round()).x || o2.y) ? (o2 = s2._limitOffset(o2, s2.options.maxBounds), x(function() {
            s2.panBy(o2, { duration: n2, easeLinearity: e2, noMoveStart: true, animate: true });
          })) : s2.fire("moveend");
        } })), St = (A.addInitHook("addHandler", "dragging", Zt), A.mergeOptions({ keyboard: true, keyboardPanDelta: 80 }), n.extend({ keyCodes: { left: [37], right: [39], down: [40], up: [38], zoomIn: [187, 107, 61, 171], zoomOut: [189, 109, 54, 173] }, initialize: function(t2) {
          this._map = t2, this._setPanDelta(t2.options.keyboardPanDelta), this._setZoomDelta(t2.options.zoomDelta);
        }, addHooks: function() {
          var t2 = this._map._container;
          t2.tabIndex <= 0 && (t2.tabIndex = "0"), S(t2, { focus: this._onFocus, blur: this._onBlur, mousedown: this._onMouseDown }, this), this._map.on({ focus: this._addHooks, blur: this._removeHooks }, this);
        }, removeHooks: function() {
          this._removeHooks(), k(this._map._container, { focus: this._onFocus, blur: this._onBlur, mousedown: this._onMouseDown }, this), this._map.off({ focus: this._addHooks, blur: this._removeHooks }, this);
        }, _onMouseDown: function() {
          var t2, e2, i2;
          this._focused || (i2 = document.body, t2 = document.documentElement, e2 = i2.scrollTop || t2.scrollTop, i2 = i2.scrollLeft || t2.scrollLeft, this._map._container.focus(), window.scrollTo(i2, e2));
        }, _onFocus: function() {
          this._focused = true, this._map.fire("focus");
        }, _onBlur: function() {
          this._focused = false, this._map.fire("blur");
        }, _setPanDelta: function(t2) {
          for (var e2 = this._panKeys = {}, i2 = this.keyCodes, n2 = 0, o2 = i2.left.length; n2 < o2; n2++) e2[i2.left[n2]] = [-1 * t2, 0];
          for (n2 = 0, o2 = i2.right.length; n2 < o2; n2++) e2[i2.right[n2]] = [t2, 0];
          for (n2 = 0, o2 = i2.down.length; n2 < o2; n2++) e2[i2.down[n2]] = [0, t2];
          for (n2 = 0, o2 = i2.up.length; n2 < o2; n2++) e2[i2.up[n2]] = [0, -1 * t2];
        }, _setZoomDelta: function(t2) {
          for (var e2 = this._zoomKeys = {}, i2 = this.keyCodes, n2 = 0, o2 = i2.zoomIn.length; n2 < o2; n2++) e2[i2.zoomIn[n2]] = t2;
          for (n2 = 0, o2 = i2.zoomOut.length; n2 < o2; n2++) e2[i2.zoomOut[n2]] = -t2;
        }, _addHooks: function() {
          S(document, "keydown", this._onKeyDown, this);
        }, _removeHooks: function() {
          k(document, "keydown", this._onKeyDown, this);
        }, _onKeyDown: function(t2) {
          if (!(t2.altKey || t2.ctrlKey || t2.metaKey)) {
            var e2, i2, n2 = t2.keyCode, o2 = this._map;
            if (n2 in this._panKeys) o2._panAnim && o2._panAnim._inProgress || (i2 = this._panKeys[n2], t2.shiftKey && (i2 = m(i2).multiplyBy(3)), o2.options.maxBounds && (i2 = o2._limitOffset(m(i2), o2.options.maxBounds)), o2.options.worldCopyJump ? (e2 = o2.wrapLatLng(o2.unproject(o2.project(o2.getCenter()).add(i2))), o2.panTo(e2)) : o2.panBy(i2));
            else if (n2 in this._zoomKeys) o2.setZoom(o2.getZoom() + (t2.shiftKey ? 3 : 1) * this._zoomKeys[n2]);
            else {
              if (27 !== n2 || !o2._popup || !o2._popup.options.closeOnEscapeKey) return;
              o2.closePopup();
            }
            Re(t2);
          }
        } })), Et = (A.addInitHook("addHandler", "keyboard", St), A.mergeOptions({ scrollWheelZoom: true, wheelDebounceTime: 40, wheelPxPerZoomLevel: 60 }), n.extend({ addHooks: function() {
          S(this._map._container, "wheel", this._onWheelScroll, this), this._delta = 0;
        }, removeHooks: function() {
          k(this._map._container, "wheel", this._onWheelScroll, this);
        }, _onWheelScroll: function(t2) {
          var e2 = He(t2), i2 = this._map.options.wheelDebounceTime, e2 = (this._delta += e2, this._lastMousePos = this._map.mouseEventToContainerPoint(t2), this._startTime || (this._startTime = +/* @__PURE__ */ new Date()), Math.max(i2 - (+/* @__PURE__ */ new Date() - this._startTime), 0));
          clearTimeout(this._timer), this._timer = setTimeout(a(this._performZoom, this), e2), Re(t2);
        }, _performZoom: function() {
          var t2 = this._map, e2 = t2.getZoom(), i2 = this._map.options.zoomSnap || 0, n2 = (t2._stop(), this._delta / (4 * this._map.options.wheelPxPerZoomLevel)), n2 = 4 * Math.log(2 / (1 + Math.exp(-Math.abs(n2)))) / Math.LN2, i2 = i2 ? Math.ceil(n2 / i2) * i2 : n2, n2 = t2._limitZoom(e2 + (0 < this._delta ? i2 : -i2)) - e2;
          this._delta = 0, this._startTime = null, n2 && ("center" === t2.options.scrollWheelZoom ? t2.setZoom(e2 + n2) : t2.setZoomAround(this._lastMousePos, e2 + n2));
        } })), kt = (A.addInitHook("addHandler", "scrollWheelZoom", Et), A.mergeOptions({ tapHold: b.touchNative && b.safari && b.mobile, tapTolerance: 15 }), n.extend({ addHooks: function() {
          S(this._map._container, "touchstart", this._onDown, this);
        }, removeHooks: function() {
          k(this._map._container, "touchstart", this._onDown, this);
        }, _onDown: function(t2) {
          var e2;
          clearTimeout(this._holdTimeout), 1 === t2.touches.length && (e2 = t2.touches[0], this._startPos = this._newPos = new p(e2.clientX, e2.clientY), this._holdTimeout = setTimeout(a(function() {
            this._cancel(), this._isTapValid() && (S(document, "touchend", O), S(document, "touchend touchcancel", this._cancelClickPrevent), this._simulateEvent("contextmenu", e2));
          }, this), 600), S(document, "touchend touchcancel contextmenu", this._cancel, this), S(document, "touchmove", this._onMove, this));
        }, _cancelClickPrevent: function t2() {
          k(document, "touchend", O), k(document, "touchend touchcancel", t2);
        }, _cancel: function() {
          clearTimeout(this._holdTimeout), k(document, "touchend touchcancel contextmenu", this._cancel, this), k(document, "touchmove", this._onMove, this);
        }, _onMove: function(t2) {
          t2 = t2.touches[0];
          this._newPos = new p(t2.clientX, t2.clientY);
        }, _isTapValid: function() {
          return this._newPos.distanceTo(this._startPos) <= this._map.options.tapTolerance;
        }, _simulateEvent: function(t2, e2) {
          t2 = new MouseEvent(t2, { bubbles: true, cancelable: true, view: window, screenX: e2.screenX, screenY: e2.screenY, clientX: e2.clientX, clientY: e2.clientY });
          t2._simulated = true, e2.target.dispatchEvent(t2);
        } })), Ot = (A.addInitHook("addHandler", "tapHold", kt), A.mergeOptions({ touchZoom: b.touch, bounceAtZoomLimits: true }), n.extend({ addHooks: function() {
          M(this._map._container, "leaflet-touch-zoom"), S(this._map._container, "touchstart", this._onTouchStart, this);
        }, removeHooks: function() {
          z(this._map._container, "leaflet-touch-zoom"), k(this._map._container, "touchstart", this._onTouchStart, this);
        }, _onTouchStart: function(t2) {
          var e2, i2, n2 = this._map;
          !t2.touches || 2 !== t2.touches.length || n2._animatingZoom || this._zooming || (e2 = n2.mouseEventToContainerPoint(t2.touches[0]), i2 = n2.mouseEventToContainerPoint(t2.touches[1]), this._centerPoint = n2.getSize()._divideBy(2), this._startLatLng = n2.containerPointToLatLng(this._centerPoint), "center" !== n2.options.touchZoom && (this._pinchStartLatLng = n2.containerPointToLatLng(e2.add(i2)._divideBy(2))), this._startDist = e2.distanceTo(i2), this._startZoom = n2.getZoom(), this._moved = false, this._zooming = true, n2._stop(), S(document, "touchmove", this._onTouchMove, this), S(document, "touchend touchcancel", this._onTouchEnd, this), O(t2));
        }, _onTouchMove: function(t2) {
          if (t2.touches && 2 === t2.touches.length && this._zooming) {
            var e2 = this._map, i2 = e2.mouseEventToContainerPoint(t2.touches[0]), n2 = e2.mouseEventToContainerPoint(t2.touches[1]), o2 = i2.distanceTo(n2) / this._startDist;
            if (this._zoom = e2.getScaleZoom(o2, this._startZoom), !e2.options.bounceAtZoomLimits && (this._zoom < e2.getMinZoom() && o2 < 1 || this._zoom > e2.getMaxZoom() && 1 < o2) && (this._zoom = e2._limitZoom(this._zoom)), "center" === e2.options.touchZoom) {
              if (this._center = this._startLatLng, 1 == o2) return;
            } else {
              i2 = i2._add(n2)._divideBy(2)._subtract(this._centerPoint);
              if (1 == o2 && 0 === i2.x && 0 === i2.y) return;
              this._center = e2.unproject(e2.project(this._pinchStartLatLng, this._zoom).subtract(i2), this._zoom);
            }
            this._moved || (e2._moveStart(true, false), this._moved = true), r(this._animRequest);
            n2 = a(e2._move, e2, this._center, this._zoom, { pinch: true, round: false }, void 0);
            this._animRequest = x(n2, this, true), O(t2);
          }
        }, _onTouchEnd: function() {
          this._moved && this._zooming ? (this._zooming = false, r(this._animRequest), k(document, "touchmove", this._onTouchMove, this), k(document, "touchend touchcancel", this._onTouchEnd, this), this._map.options.zoomAnimation ? this._map._animateZoom(this._center, this._map._limitZoom(this._zoom), true, this._map.options.zoomSnap) : this._map._resetView(this._center, this._map._limitZoom(this._zoom))) : this._zooming = false;
        } })), Xi = (A.addInitHook("addHandler", "touchZoom", Ot), A.BoxZoom = _t, A.DoubleClickZoom = Ct, A.Drag = Zt, A.Keyboard = St, A.ScrollWheelZoom = Et, A.TapHold = kt, A.TouchZoom = Ot, t.Bounds = f, t.Browser = b, t.CRS = ot, t.Canvas = Fi, t.Circle = vi, t.CircleMarker = gi, t.Class = et, t.Control = B, t.DivIcon = Ri, t.DivOverlay = Ai, t.DomEvent = mt, t.DomUtil = pt, t.Draggable = Xe, t.Evented = it, t.FeatureGroup = ci, t.GeoJSON = wi, t.GridLayer = Ni, t.Handler = n, t.Icon = di, t.ImageOverlay = Ei, t.LatLng = v, t.LatLngBounds = s, t.Layer = o, t.LayerGroup = ui, t.LineUtil = vt, t.Map = A, t.Marker = mi, t.Mixin = ft, t.Path = fi, t.Point = p, t.PolyUtil = gt, t.Polygon = xi, t.Polyline = yi, t.Popup = Bi, t.PosAnimation = Fe, t.Projection = wt, t.Rectangle = Yi, t.Renderer = Wi, t.SVG = Gi, t.SVGOverlay = Oi, t.TileLayer = Di, t.Tooltip = Ii, t.Transformation = at, t.Util = tt, t.VideoOverlay = ki, t.bind = a, t.bounds = _, t.canvas = Ui, t.circle = function(t2, e2, i2) {
          return new vi(t2, e2, i2);
        }, t.circleMarker = function(t2, e2) {
          return new gi(t2, e2);
        }, t.control = Ue, t.divIcon = function(t2) {
          return new Ri(t2);
        }, t.extend = l, t.featureGroup = function(t2, e2) {
          return new ci(t2, e2);
        }, t.geoJSON = Si, t.geoJson = Mt, t.gridLayer = function(t2) {
          return new Ni(t2);
        }, t.icon = function(t2) {
          return new di(t2);
        }, t.imageOverlay = function(t2, e2, i2) {
          return new Ei(t2, e2, i2);
        }, t.latLng = w, t.latLngBounds = g, t.layerGroup = function(t2, e2) {
          return new ui(t2, e2);
        }, t.map = function(t2, e2) {
          return new A(t2, e2);
        }, t.marker = function(t2, e2) {
          return new mi(t2, e2);
        }, t.point = m, t.polygon = function(t2, e2) {
          return new xi(t2, e2);
        }, t.polyline = function(t2, e2) {
          return new yi(t2, e2);
        }, t.popup = function(t2, e2) {
          return new Bi(t2, e2);
        }, t.rectangle = function(t2, e2) {
          return new Yi(t2, e2);
        }, t.setOptions = c, t.stamp = h, t.svg = Ki, t.svgOverlay = function(t2, e2, i2) {
          return new Oi(t2, e2, i2);
        }, t.tileLayer = ji, t.tooltip = function(t2, e2) {
          return new Ii(t2, e2);
        }, t.transformation = ht, t.version = "1.9.4", t.videoOverlay = function(t2, e2, i2) {
          return new ki(t2, e2, i2);
        }, window.L);
        t.noConflict = function() {
          return window.L = Xi, this;
        }, window.L = t;
      });
    }
  });

  // node_modules/leaflet/dist/leaflet-src.js
  var require_leaflet_src = __commonJS({
    "node_modules/leaflet/dist/leaflet-src.js"(exports, module) {
      (function(global2, factory) {
        typeof exports === "object" && typeof module !== "undefined" ? factory(exports) : typeof define === "function" && define.amd ? define(["exports"], factory) : (global2 = typeof globalThis !== "undefined" ? globalThis : global2 || self, factory(global2.leaflet = {}));
      })(exports, (function(exports2) {
        "use strict";
        var version2 = "1.9.4";
        function extend(dest) {
          var i, j, len, src;
          for (j = 1, len = arguments.length; j < len; j++) {
            src = arguments[j];
            for (i in src) {
              dest[i] = src[i];
            }
          }
          return dest;
        }
        var create$2 = Object.create || /* @__PURE__ */ (function() {
          function F() {
          }
          return function(proto) {
            F.prototype = proto;
            return new F();
          };
        })();
        function bind(fn, obj) {
          var slice = Array.prototype.slice;
          if (fn.bind) {
            return fn.bind.apply(fn, slice.call(arguments, 1));
          }
          var args = slice.call(arguments, 2);
          return function() {
            return fn.apply(obj, args.length ? args.concat(slice.call(arguments)) : arguments);
          };
        }
        var lastId = 0;
        function stamp(obj) {
          if (!("_leaflet_id" in obj)) {
            obj["_leaflet_id"] = ++lastId;
          }
          return obj._leaflet_id;
        }
        function throttle(fn, time, context) {
          var lock, args, wrapperFn, later;
          later = function() {
            lock = false;
            if (args) {
              wrapperFn.apply(context, args);
              args = false;
            }
          };
          wrapperFn = function() {
            if (lock) {
              args = arguments;
            } else {
              fn.apply(context, arguments);
              setTimeout(later, time);
              lock = true;
            }
          };
          return wrapperFn;
        }
        function wrapNum(x, range, includeMax) {
          var max = range[1], min = range[0], d = max - min;
          return x === max && includeMax ? x : ((x - min) % d + d) % d + min;
        }
        function falseFn() {
          return false;
        }
        function formatNum(num, precision) {
          if (precision === false) {
            return num;
          }
          var pow = Math.pow(10, precision === void 0 ? 6 : precision);
          return Math.round(num * pow) / pow;
        }
        function trim(str) {
          return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, "");
        }
        function splitWords(str) {
          return trim(str).split(/\s+/);
        }
        function setOptions(obj, options) {
          if (!Object.prototype.hasOwnProperty.call(obj, "options")) {
            obj.options = obj.options ? create$2(obj.options) : {};
          }
          for (var i in options) {
            obj.options[i] = options[i];
          }
          return obj.options;
        }
        function getParamString(obj, existingUrl, uppercase) {
          var params = [];
          for (var i in obj) {
            params.push(encodeURIComponent(uppercase ? i.toUpperCase() : i) + "=" + encodeURIComponent(obj[i]));
          }
          return (!existingUrl || existingUrl.indexOf("?") === -1 ? "?" : "&") + params.join("&");
        }
        var templateRe = /\{ *([\w_ -]+) *\}/g;
        function template(str, data) {
          return str.replace(templateRe, function(str2, key) {
            var value = data[key];
            if (value === void 0) {
              throw new Error("No value provided for variable " + str2);
            } else if (typeof value === "function") {
              value = value(data);
            }
            return value;
          });
        }
        var isArray = Array.isArray || function(obj) {
          return Object.prototype.toString.call(obj) === "[object Array]";
        };
        function indexOf(array, el) {
          for (var i = 0; i < array.length; i++) {
            if (array[i] === el) {
              return i;
            }
          }
          return -1;
        }
        var emptyImageUrl = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
        function getPrefixed(name) {
          return window["webkit" + name] || window["moz" + name] || window["ms" + name];
        }
        var lastTime = 0;
        function timeoutDefer(fn) {
          var time = +/* @__PURE__ */ new Date(), timeToCall = Math.max(0, 16 - (time - lastTime));
          lastTime = time + timeToCall;
          return window.setTimeout(fn, timeToCall);
        }
        var requestFn = window.requestAnimationFrame || getPrefixed("RequestAnimationFrame") || timeoutDefer;
        var cancelFn = window.cancelAnimationFrame || getPrefixed("CancelAnimationFrame") || getPrefixed("CancelRequestAnimationFrame") || function(id) {
          window.clearTimeout(id);
        };
        function requestAnimFrame(fn, context, immediate) {
          if (immediate && requestFn === timeoutDefer) {
            fn.call(context);
          } else {
            return requestFn.call(window, bind(fn, context));
          }
        }
        function cancelAnimFrame(id) {
          if (id) {
            cancelFn.call(window, id);
          }
        }
        var Util = {
          __proto__: null,
          extend,
          create: create$2,
          bind,
          get lastId() {
            return lastId;
          },
          stamp,
          throttle,
          wrapNum,
          falseFn,
          formatNum,
          trim,
          splitWords,
          setOptions,
          getParamString,
          template,
          isArray,
          indexOf,
          emptyImageUrl,
          requestFn,
          cancelFn,
          requestAnimFrame,
          cancelAnimFrame
        };
        function Class() {
        }
        Class.extend = function(props) {
          var NewClass = function() {
            setOptions(this);
            if (this.initialize) {
              this.initialize.apply(this, arguments);
            }
            this.callInitHooks();
          };
          var parentProto = NewClass.__super__ = this.prototype;
          var proto = create$2(parentProto);
          proto.constructor = NewClass;
          NewClass.prototype = proto;
          for (var i in this) {
            if (Object.prototype.hasOwnProperty.call(this, i) && i !== "prototype" && i !== "__super__") {
              NewClass[i] = this[i];
            }
          }
          if (props.statics) {
            extend(NewClass, props.statics);
          }
          if (props.includes) {
            checkDeprecatedMixinEvents(props.includes);
            extend.apply(null, [proto].concat(props.includes));
          }
          extend(proto, props);
          delete proto.statics;
          delete proto.includes;
          if (proto.options) {
            proto.options = parentProto.options ? create$2(parentProto.options) : {};
            extend(proto.options, props.options);
          }
          proto._initHooks = [];
          proto.callInitHooks = function() {
            if (this._initHooksCalled) {
              return;
            }
            if (parentProto.callInitHooks) {
              parentProto.callInitHooks.call(this);
            }
            this._initHooksCalled = true;
            for (var i2 = 0, len = proto._initHooks.length; i2 < len; i2++) {
              proto._initHooks[i2].call(this);
            }
          };
          return NewClass;
        };
        Class.include = function(props) {
          var parentOptions = this.prototype.options;
          extend(this.prototype, props);
          if (props.options) {
            this.prototype.options = parentOptions;
            this.mergeOptions(props.options);
          }
          return this;
        };
        Class.mergeOptions = function(options) {
          extend(this.prototype.options, options);
          return this;
        };
        Class.addInitHook = function(fn) {
          var args = Array.prototype.slice.call(arguments, 1);
          var init = typeof fn === "function" ? fn : function() {
            this[fn].apply(this, args);
          };
          this.prototype._initHooks = this.prototype._initHooks || [];
          this.prototype._initHooks.push(init);
          return this;
        };
        function checkDeprecatedMixinEvents(includes) {
          if (typeof L === "undefined" || !L || !L.Mixin) {
            return;
          }
          includes = isArray(includes) ? includes : [includes];
          for (var i = 0; i < includes.length; i++) {
            if (includes[i] === L.Mixin.Events) {
              console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.", new Error().stack);
            }
          }
        }
        var Events = {
          /* @method on(type: String, fn: Function, context?: Object): this
           * Adds a listener function (`fn`) to a particular event type of the object. You can optionally specify the context of the listener (object the this keyword will point to). You can also pass several space-separated types (e.g. `'click dblclick'`).
           *
           * @alternative
           * @method on(eventMap: Object): this
           * Adds a set of type/listener pairs, e.g. `{click: onClick, mousemove: onMouseMove}`
           */
          on: function(types, fn, context) {
            if (typeof types === "object") {
              for (var type in types) {
                this._on(type, types[type], fn);
              }
            } else {
              types = splitWords(types);
              for (var i = 0, len = types.length; i < len; i++) {
                this._on(types[i], fn, context);
              }
            }
            return this;
          },
          /* @method off(type: String, fn?: Function, context?: Object): this
           * Removes a previously added listener function. If no function is specified, it will remove all the listeners of that particular event from the object. Note that if you passed a custom context to `on`, you must pass the same context to `off` in order to remove the listener.
           *
           * @alternative
           * @method off(eventMap: Object): this
           * Removes a set of type/listener pairs.
           *
           * @alternative
           * @method off: this
           * Removes all listeners to all events on the object. This includes implicitly attached events.
           */
          off: function(types, fn, context) {
            if (!arguments.length) {
              delete this._events;
            } else if (typeof types === "object") {
              for (var type in types) {
                this._off(type, types[type], fn);
              }
            } else {
              types = splitWords(types);
              var removeAll = arguments.length === 1;
              for (var i = 0, len = types.length; i < len; i++) {
                if (removeAll) {
                  this._off(types[i]);
                } else {
                  this._off(types[i], fn, context);
                }
              }
            }
            return this;
          },
          // attach listener (without syntactic sugar now)
          _on: function(type, fn, context, _once) {
            if (typeof fn !== "function") {
              console.warn("wrong listener type: " + typeof fn);
              return;
            }
            if (this._listens(type, fn, context) !== false) {
              return;
            }
            if (context === this) {
              context = void 0;
            }
            var newListener = { fn, ctx: context };
            if (_once) {
              newListener.once = true;
            }
            this._events = this._events || {};
            this._events[type] = this._events[type] || [];
            this._events[type].push(newListener);
          },
          _off: function(type, fn, context) {
            var listeners, i, len;
            if (!this._events) {
              return;
            }
            listeners = this._events[type];
            if (!listeners) {
              return;
            }
            if (arguments.length === 1) {
              if (this._firingCount) {
                for (i = 0, len = listeners.length; i < len; i++) {
                  listeners[i].fn = falseFn;
                }
              }
              delete this._events[type];
              return;
            }
            if (typeof fn !== "function") {
              console.warn("wrong listener type: " + typeof fn);
              return;
            }
            var index2 = this._listens(type, fn, context);
            if (index2 !== false) {
              var listener = listeners[index2];
              if (this._firingCount) {
                listener.fn = falseFn;
                this._events[type] = listeners = listeners.slice();
              }
              listeners.splice(index2, 1);
            }
          },
          // @method fire(type: String, data?: Object, propagate?: Boolean): this
          // Fires an event of the specified type. You can optionally provide a data
          // object — the first argument of the listener function will contain its
          // properties. The event can optionally be propagated to event parents.
          fire: function(type, data, propagate) {
            if (!this.listens(type, propagate)) {
              return this;
            }
            var event = extend({}, data, {
              type,
              target: this,
              sourceTarget: data && data.sourceTarget || this
            });
            if (this._events) {
              var listeners = this._events[type];
              if (listeners) {
                this._firingCount = this._firingCount + 1 || 1;
                for (var i = 0, len = listeners.length; i < len; i++) {
                  var l = listeners[i];
                  var fn = l.fn;
                  if (l.once) {
                    this.off(type, fn, l.ctx);
                  }
                  fn.call(l.ctx || this, event);
                }
                this._firingCount--;
              }
            }
            if (propagate) {
              this._propagateEvent(event);
            }
            return this;
          },
          // @method listens(type: String, propagate?: Boolean): Boolean
          // @method listens(type: String, fn: Function, context?: Object, propagate?: Boolean): Boolean
          // Returns `true` if a particular event type has any listeners attached to it.
          // The verification can optionally be propagated, it will return `true` if parents have the listener attached to it.
          listens: function(type, fn, context, propagate) {
            if (typeof type !== "string") {
              console.warn('"string" type argument expected');
            }
            var _fn = fn;
            if (typeof fn !== "function") {
              propagate = !!fn;
              _fn = void 0;
              context = void 0;
            }
            var listeners = this._events && this._events[type];
            if (listeners && listeners.length) {
              if (this._listens(type, _fn, context) !== false) {
                return true;
              }
            }
            if (propagate) {
              for (var id in this._eventParents) {
                if (this._eventParents[id].listens(type, fn, context, propagate)) {
                  return true;
                }
              }
            }
            return false;
          },
          // returns the index (number) or false
          _listens: function(type, fn, context) {
            if (!this._events) {
              return false;
            }
            var listeners = this._events[type] || [];
            if (!fn) {
              return !!listeners.length;
            }
            if (context === this) {
              context = void 0;
            }
            for (var i = 0, len = listeners.length; i < len; i++) {
              if (listeners[i].fn === fn && listeners[i].ctx === context) {
                return i;
              }
            }
            return false;
          },
          // @method once(…): this
          // Behaves as [`on(…)`](#evented-on), except the listener will only get fired once and then removed.
          once: function(types, fn, context) {
            if (typeof types === "object") {
              for (var type in types) {
                this._on(type, types[type], fn, true);
              }
            } else {
              types = splitWords(types);
              for (var i = 0, len = types.length; i < len; i++) {
                this._on(types[i], fn, context, true);
              }
            }
            return this;
          },
          // @method addEventParent(obj: Evented): this
          // Adds an event parent - an `Evented` that will receive propagated events
          addEventParent: function(obj) {
            this._eventParents = this._eventParents || {};
            this._eventParents[stamp(obj)] = obj;
            return this;
          },
          // @method removeEventParent(obj: Evented): this
          // Removes an event parent, so it will stop receiving propagated events
          removeEventParent: function(obj) {
            if (this._eventParents) {
              delete this._eventParents[stamp(obj)];
            }
            return this;
          },
          _propagateEvent: function(e) {
            for (var id in this._eventParents) {
              this._eventParents[id].fire(e.type, extend({
                layer: e.target,
                propagatedFrom: e.target
              }, e), true);
            }
          }
        };
        Events.addEventListener = Events.on;
        Events.removeEventListener = Events.clearAllEventListeners = Events.off;
        Events.addOneTimeEventListener = Events.once;
        Events.fireEvent = Events.fire;
        Events.hasEventListeners = Events.listens;
        var Evented = Class.extend(Events);
        function Point(x, y, round) {
          this.x = round ? Math.round(x) : x;
          this.y = round ? Math.round(y) : y;
        }
        var trunc = Math.trunc || function(v) {
          return v > 0 ? Math.floor(v) : Math.ceil(v);
        };
        Point.prototype = {
          // @method clone(): Point
          // Returns a copy of the current point.
          clone: function() {
            return new Point(this.x, this.y);
          },
          // @method add(otherPoint: Point): Point
          // Returns the result of addition of the current and the given points.
          add: function(point) {
            return this.clone()._add(toPoint(point));
          },
          _add: function(point) {
            this.x += point.x;
            this.y += point.y;
            return this;
          },
          // @method subtract(otherPoint: Point): Point
          // Returns the result of subtraction of the given point from the current.
          subtract: function(point) {
            return this.clone()._subtract(toPoint(point));
          },
          _subtract: function(point) {
            this.x -= point.x;
            this.y -= point.y;
            return this;
          },
          // @method divideBy(num: Number): Point
          // Returns the result of division of the current point by the given number.
          divideBy: function(num) {
            return this.clone()._divideBy(num);
          },
          _divideBy: function(num) {
            this.x /= num;
            this.y /= num;
            return this;
          },
          // @method multiplyBy(num: Number): Point
          // Returns the result of multiplication of the current point by the given number.
          multiplyBy: function(num) {
            return this.clone()._multiplyBy(num);
          },
          _multiplyBy: function(num) {
            this.x *= num;
            this.y *= num;
            return this;
          },
          // @method scaleBy(scale: Point): Point
          // Multiply each coordinate of the current point by each coordinate of
          // `scale`. In linear algebra terms, multiply the point by the
          // [scaling matrix](https://en.wikipedia.org/wiki/Scaling_%28geometry%29#Matrix_representation)
          // defined by `scale`.
          scaleBy: function(point) {
            return new Point(this.x * point.x, this.y * point.y);
          },
          // @method unscaleBy(scale: Point): Point
          // Inverse of `scaleBy`. Divide each coordinate of the current point by
          // each coordinate of `scale`.
          unscaleBy: function(point) {
            return new Point(this.x / point.x, this.y / point.y);
          },
          // @method round(): Point
          // Returns a copy of the current point with rounded coordinates.
          round: function() {
            return this.clone()._round();
          },
          _round: function() {
            this.x = Math.round(this.x);
            this.y = Math.round(this.y);
            return this;
          },
          // @method floor(): Point
          // Returns a copy of the current point with floored coordinates (rounded down).
          floor: function() {
            return this.clone()._floor();
          },
          _floor: function() {
            this.x = Math.floor(this.x);
            this.y = Math.floor(this.y);
            return this;
          },
          // @method ceil(): Point
          // Returns a copy of the current point with ceiled coordinates (rounded up).
          ceil: function() {
            return this.clone()._ceil();
          },
          _ceil: function() {
            this.x = Math.ceil(this.x);
            this.y = Math.ceil(this.y);
            return this;
          },
          // @method trunc(): Point
          // Returns a copy of the current point with truncated coordinates (rounded towards zero).
          trunc: function() {
            return this.clone()._trunc();
          },
          _trunc: function() {
            this.x = trunc(this.x);
            this.y = trunc(this.y);
            return this;
          },
          // @method distanceTo(otherPoint: Point): Number
          // Returns the cartesian distance between the current and the given points.
          distanceTo: function(point) {
            point = toPoint(point);
            var x = point.x - this.x, y = point.y - this.y;
            return Math.sqrt(x * x + y * y);
          },
          // @method equals(otherPoint: Point): Boolean
          // Returns `true` if the given point has the same coordinates.
          equals: function(point) {
            point = toPoint(point);
            return point.x === this.x && point.y === this.y;
          },
          // @method contains(otherPoint: Point): Boolean
          // Returns `true` if both coordinates of the given point are less than the corresponding current point coordinates (in absolute values).
          contains: function(point) {
            point = toPoint(point);
            return Math.abs(point.x) <= Math.abs(this.x) && Math.abs(point.y) <= Math.abs(this.y);
          },
          // @method toString(): String
          // Returns a string representation of the point for debugging purposes.
          toString: function() {
            return "Point(" + formatNum(this.x) + ", " + formatNum(this.y) + ")";
          }
        };
        function toPoint(x, y, round) {
          if (x instanceof Point) {
            return x;
          }
          if (isArray(x)) {
            return new Point(x[0], x[1]);
          }
          if (x === void 0 || x === null) {
            return x;
          }
          if (typeof x === "object" && "x" in x && "y" in x) {
            return new Point(x.x, x.y);
          }
          return new Point(x, y, round);
        }
        function Bounds(a, b) {
          if (!a) {
            return;
          }
          var points = b ? [a, b] : a;
          for (var i = 0, len = points.length; i < len; i++) {
            this.extend(points[i]);
          }
        }
        Bounds.prototype = {
          // @method extend(point: Point): this
          // Extends the bounds to contain the given point.
          // @alternative
          // @method extend(otherBounds: Bounds): this
          // Extend the bounds to contain the given bounds
          extend: function(obj) {
            var min2, max2;
            if (!obj) {
              return this;
            }
            if (obj instanceof Point || typeof obj[0] === "number" || "x" in obj) {
              min2 = max2 = toPoint(obj);
            } else {
              obj = toBounds(obj);
              min2 = obj.min;
              max2 = obj.max;
              if (!min2 || !max2) {
                return this;
              }
            }
            if (!this.min && !this.max) {
              this.min = min2.clone();
              this.max = max2.clone();
            } else {
              this.min.x = Math.min(min2.x, this.min.x);
              this.max.x = Math.max(max2.x, this.max.x);
              this.min.y = Math.min(min2.y, this.min.y);
              this.max.y = Math.max(max2.y, this.max.y);
            }
            return this;
          },
          // @method getCenter(round?: Boolean): Point
          // Returns the center point of the bounds.
          getCenter: function(round) {
            return toPoint(
              (this.min.x + this.max.x) / 2,
              (this.min.y + this.max.y) / 2,
              round
            );
          },
          // @method getBottomLeft(): Point
          // Returns the bottom-left point of the bounds.
          getBottomLeft: function() {
            return toPoint(this.min.x, this.max.y);
          },
          // @method getTopRight(): Point
          // Returns the top-right point of the bounds.
          getTopRight: function() {
            return toPoint(this.max.x, this.min.y);
          },
          // @method getTopLeft(): Point
          // Returns the top-left point of the bounds (i.e. [`this.min`](#bounds-min)).
          getTopLeft: function() {
            return this.min;
          },
          // @method getBottomRight(): Point
          // Returns the bottom-right point of the bounds (i.e. [`this.max`](#bounds-max)).
          getBottomRight: function() {
            return this.max;
          },
          // @method getSize(): Point
          // Returns the size of the given bounds
          getSize: function() {
            return this.max.subtract(this.min);
          },
          // @method contains(otherBounds: Bounds): Boolean
          // Returns `true` if the rectangle contains the given one.
          // @alternative
          // @method contains(point: Point): Boolean
          // Returns `true` if the rectangle contains the given point.
          contains: function(obj) {
            var min, max;
            if (typeof obj[0] === "number" || obj instanceof Point) {
              obj = toPoint(obj);
            } else {
              obj = toBounds(obj);
            }
            if (obj instanceof Bounds) {
              min = obj.min;
              max = obj.max;
            } else {
              min = max = obj;
            }
            return min.x >= this.min.x && max.x <= this.max.x && min.y >= this.min.y && max.y <= this.max.y;
          },
          // @method intersects(otherBounds: Bounds): Boolean
          // Returns `true` if the rectangle intersects the given bounds. Two bounds
          // intersect if they have at least one point in common.
          intersects: function(bounds) {
            bounds = toBounds(bounds);
            var min = this.min, max = this.max, min2 = bounds.min, max2 = bounds.max, xIntersects = max2.x >= min.x && min2.x <= max.x, yIntersects = max2.y >= min.y && min2.y <= max.y;
            return xIntersects && yIntersects;
          },
          // @method overlaps(otherBounds: Bounds): Boolean
          // Returns `true` if the rectangle overlaps the given bounds. Two bounds
          // overlap if their intersection is an area.
          overlaps: function(bounds) {
            bounds = toBounds(bounds);
            var min = this.min, max = this.max, min2 = bounds.min, max2 = bounds.max, xOverlaps = max2.x > min.x && min2.x < max.x, yOverlaps = max2.y > min.y && min2.y < max.y;
            return xOverlaps && yOverlaps;
          },
          // @method isValid(): Boolean
          // Returns `true` if the bounds are properly initialized.
          isValid: function() {
            return !!(this.min && this.max);
          },
          // @method pad(bufferRatio: Number): Bounds
          // Returns bounds created by extending or retracting the current bounds by a given ratio in each direction.
          // For example, a ratio of 0.5 extends the bounds by 50% in each direction.
          // Negative values will retract the bounds.
          pad: function(bufferRatio) {
            var min = this.min, max = this.max, heightBuffer = Math.abs(min.x - max.x) * bufferRatio, widthBuffer = Math.abs(min.y - max.y) * bufferRatio;
            return toBounds(
              toPoint(min.x - heightBuffer, min.y - widthBuffer),
              toPoint(max.x + heightBuffer, max.y + widthBuffer)
            );
          },
          // @method equals(otherBounds: Bounds): Boolean
          // Returns `true` if the rectangle is equivalent to the given bounds.
          equals: function(bounds) {
            if (!bounds) {
              return false;
            }
            bounds = toBounds(bounds);
            return this.min.equals(bounds.getTopLeft()) && this.max.equals(bounds.getBottomRight());
          }
        };
        function toBounds(a, b) {
          if (!a || a instanceof Bounds) {
            return a;
          }
          return new Bounds(a, b);
        }
        function LatLngBounds(corner1, corner2) {
          if (!corner1) {
            return;
          }
          var latlngs = corner2 ? [corner1, corner2] : corner1;
          for (var i = 0, len = latlngs.length; i < len; i++) {
            this.extend(latlngs[i]);
          }
        }
        LatLngBounds.prototype = {
          // @method extend(latlng: LatLng): this
          // Extend the bounds to contain the given point
          // @alternative
          // @method extend(otherBounds: LatLngBounds): this
          // Extend the bounds to contain the given bounds
          extend: function(obj) {
            var sw = this._southWest, ne = this._northEast, sw2, ne2;
            if (obj instanceof LatLng) {
              sw2 = obj;
              ne2 = obj;
            } else if (obj instanceof LatLngBounds) {
              sw2 = obj._southWest;
              ne2 = obj._northEast;
              if (!sw2 || !ne2) {
                return this;
              }
            } else {
              return obj ? this.extend(toLatLng(obj) || toLatLngBounds(obj)) : this;
            }
            if (!sw && !ne) {
              this._southWest = new LatLng(sw2.lat, sw2.lng);
              this._northEast = new LatLng(ne2.lat, ne2.lng);
            } else {
              sw.lat = Math.min(sw2.lat, sw.lat);
              sw.lng = Math.min(sw2.lng, sw.lng);
              ne.lat = Math.max(ne2.lat, ne.lat);
              ne.lng = Math.max(ne2.lng, ne.lng);
            }
            return this;
          },
          // @method pad(bufferRatio: Number): LatLngBounds
          // Returns bounds created by extending or retracting the current bounds by a given ratio in each direction.
          // For example, a ratio of 0.5 extends the bounds by 50% in each direction.
          // Negative values will retract the bounds.
          pad: function(bufferRatio) {
            var sw = this._southWest, ne = this._northEast, heightBuffer = Math.abs(sw.lat - ne.lat) * bufferRatio, widthBuffer = Math.abs(sw.lng - ne.lng) * bufferRatio;
            return new LatLngBounds(
              new LatLng(sw.lat - heightBuffer, sw.lng - widthBuffer),
              new LatLng(ne.lat + heightBuffer, ne.lng + widthBuffer)
            );
          },
          // @method getCenter(): LatLng
          // Returns the center point of the bounds.
          getCenter: function() {
            return new LatLng(
              (this._southWest.lat + this._northEast.lat) / 2,
              (this._southWest.lng + this._northEast.lng) / 2
            );
          },
          // @method getSouthWest(): LatLng
          // Returns the south-west point of the bounds.
          getSouthWest: function() {
            return this._southWest;
          },
          // @method getNorthEast(): LatLng
          // Returns the north-east point of the bounds.
          getNorthEast: function() {
            return this._northEast;
          },
          // @method getNorthWest(): LatLng
          // Returns the north-west point of the bounds.
          getNorthWest: function() {
            return new LatLng(this.getNorth(), this.getWest());
          },
          // @method getSouthEast(): LatLng
          // Returns the south-east point of the bounds.
          getSouthEast: function() {
            return new LatLng(this.getSouth(), this.getEast());
          },
          // @method getWest(): Number
          // Returns the west longitude of the bounds
          getWest: function() {
            return this._southWest.lng;
          },
          // @method getSouth(): Number
          // Returns the south latitude of the bounds
          getSouth: function() {
            return this._southWest.lat;
          },
          // @method getEast(): Number
          // Returns the east longitude of the bounds
          getEast: function() {
            return this._northEast.lng;
          },
          // @method getNorth(): Number
          // Returns the north latitude of the bounds
          getNorth: function() {
            return this._northEast.lat;
          },
          // @method contains(otherBounds: LatLngBounds): Boolean
          // Returns `true` if the rectangle contains the given one.
          // @alternative
          // @method contains (latlng: LatLng): Boolean
          // Returns `true` if the rectangle contains the given point.
          contains: function(obj) {
            if (typeof obj[0] === "number" || obj instanceof LatLng || "lat" in obj) {
              obj = toLatLng(obj);
            } else {
              obj = toLatLngBounds(obj);
            }
            var sw = this._southWest, ne = this._northEast, sw2, ne2;
            if (obj instanceof LatLngBounds) {
              sw2 = obj.getSouthWest();
              ne2 = obj.getNorthEast();
            } else {
              sw2 = ne2 = obj;
            }
            return sw2.lat >= sw.lat && ne2.lat <= ne.lat && sw2.lng >= sw.lng && ne2.lng <= ne.lng;
          },
          // @method intersects(otherBounds: LatLngBounds): Boolean
          // Returns `true` if the rectangle intersects the given bounds. Two bounds intersect if they have at least one point in common.
          intersects: function(bounds) {
            bounds = toLatLngBounds(bounds);
            var sw = this._southWest, ne = this._northEast, sw2 = bounds.getSouthWest(), ne2 = bounds.getNorthEast(), latIntersects = ne2.lat >= sw.lat && sw2.lat <= ne.lat, lngIntersects = ne2.lng >= sw.lng && sw2.lng <= ne.lng;
            return latIntersects && lngIntersects;
          },
          // @method overlaps(otherBounds: LatLngBounds): Boolean
          // Returns `true` if the rectangle overlaps the given bounds. Two bounds overlap if their intersection is an area.
          overlaps: function(bounds) {
            bounds = toLatLngBounds(bounds);
            var sw = this._southWest, ne = this._northEast, sw2 = bounds.getSouthWest(), ne2 = bounds.getNorthEast(), latOverlaps = ne2.lat > sw.lat && sw2.lat < ne.lat, lngOverlaps = ne2.lng > sw.lng && sw2.lng < ne.lng;
            return latOverlaps && lngOverlaps;
          },
          // @method toBBoxString(): String
          // Returns a string with bounding box coordinates in a 'southwest_lng,southwest_lat,northeast_lng,northeast_lat' format. Useful for sending requests to web services that return geo data.
          toBBoxString: function() {
            return [this.getWest(), this.getSouth(), this.getEast(), this.getNorth()].join(",");
          },
          // @method equals(otherBounds: LatLngBounds, maxMargin?: Number): Boolean
          // Returns `true` if the rectangle is equivalent (within a small margin of error) to the given bounds. The margin of error can be overridden by setting `maxMargin` to a small number.
          equals: function(bounds, maxMargin) {
            if (!bounds) {
              return false;
            }
            bounds = toLatLngBounds(bounds);
            return this._southWest.equals(bounds.getSouthWest(), maxMargin) && this._northEast.equals(bounds.getNorthEast(), maxMargin);
          },
          // @method isValid(): Boolean
          // Returns `true` if the bounds are properly initialized.
          isValid: function() {
            return !!(this._southWest && this._northEast);
          }
        };
        function toLatLngBounds(a, b) {
          if (a instanceof LatLngBounds) {
            return a;
          }
          return new LatLngBounds(a, b);
        }
        function LatLng(lat, lng, alt) {
          if (isNaN(lat) || isNaN(lng)) {
            throw new Error("Invalid LatLng object: (" + lat + ", " + lng + ")");
          }
          this.lat = +lat;
          this.lng = +lng;
          if (alt !== void 0) {
            this.alt = +alt;
          }
        }
        LatLng.prototype = {
          // @method equals(otherLatLng: LatLng, maxMargin?: Number): Boolean
          // Returns `true` if the given `LatLng` point is at the same position (within a small margin of error). The margin of error can be overridden by setting `maxMargin` to a small number.
          equals: function(obj, maxMargin) {
            if (!obj) {
              return false;
            }
            obj = toLatLng(obj);
            var margin = Math.max(
              Math.abs(this.lat - obj.lat),
              Math.abs(this.lng - obj.lng)
            );
            return margin <= (maxMargin === void 0 ? 1e-9 : maxMargin);
          },
          // @method toString(): String
          // Returns a string representation of the point (for debugging purposes).
          toString: function(precision) {
            return "LatLng(" + formatNum(this.lat, precision) + ", " + formatNum(this.lng, precision) + ")";
          },
          // @method distanceTo(otherLatLng: LatLng): Number
          // Returns the distance (in meters) to the given `LatLng` calculated using the [Spherical Law of Cosines](https://en.wikipedia.org/wiki/Spherical_law_of_cosines).
          distanceTo: function(other) {
            return Earth.distance(this, toLatLng(other));
          },
          // @method wrap(): LatLng
          // Returns a new `LatLng` object with the longitude wrapped so it's always between -180 and +180 degrees.
          wrap: function() {
            return Earth.wrapLatLng(this);
          },
          // @method toBounds(sizeInMeters: Number): LatLngBounds
          // Returns a new `LatLngBounds` object in which each boundary is `sizeInMeters/2` meters apart from the `LatLng`.
          toBounds: function(sizeInMeters) {
            var latAccuracy = 180 * sizeInMeters / 40075017, lngAccuracy = latAccuracy / Math.cos(Math.PI / 180 * this.lat);
            return toLatLngBounds(
              [this.lat - latAccuracy, this.lng - lngAccuracy],
              [this.lat + latAccuracy, this.lng + lngAccuracy]
            );
          },
          clone: function() {
            return new LatLng(this.lat, this.lng, this.alt);
          }
        };
        function toLatLng(a, b, c) {
          if (a instanceof LatLng) {
            return a;
          }
          if (isArray(a) && typeof a[0] !== "object") {
            if (a.length === 3) {
              return new LatLng(a[0], a[1], a[2]);
            }
            if (a.length === 2) {
              return new LatLng(a[0], a[1]);
            }
            return null;
          }
          if (a === void 0 || a === null) {
            return a;
          }
          if (typeof a === "object" && "lat" in a) {
            return new LatLng(a.lat, "lng" in a ? a.lng : a.lon, a.alt);
          }
          if (b === void 0) {
            return null;
          }
          return new LatLng(a, b, c);
        }
        var CRS = {
          // @method latLngToPoint(latlng: LatLng, zoom: Number): Point
          // Projects geographical coordinates into pixel coordinates for a given zoom.
          latLngToPoint: function(latlng, zoom2) {
            var projectedPoint = this.projection.project(latlng), scale2 = this.scale(zoom2);
            return this.transformation._transform(projectedPoint, scale2);
          },
          // @method pointToLatLng(point: Point, zoom: Number): LatLng
          // The inverse of `latLngToPoint`. Projects pixel coordinates on a given
          // zoom into geographical coordinates.
          pointToLatLng: function(point, zoom2) {
            var scale2 = this.scale(zoom2), untransformedPoint = this.transformation.untransform(point, scale2);
            return this.projection.unproject(untransformedPoint);
          },
          // @method project(latlng: LatLng): Point
          // Projects geographical coordinates into coordinates in units accepted for
          // this CRS (e.g. meters for EPSG:3857, for passing it to WMS services).
          project: function(latlng) {
            return this.projection.project(latlng);
          },
          // @method unproject(point: Point): LatLng
          // Given a projected coordinate returns the corresponding LatLng.
          // The inverse of `project`.
          unproject: function(point) {
            return this.projection.unproject(point);
          },
          // @method scale(zoom: Number): Number
          // Returns the scale used when transforming projected coordinates into
          // pixel coordinates for a particular zoom. For example, it returns
          // `256 * 2^zoom` for Mercator-based CRS.
          scale: function(zoom2) {
            return 256 * Math.pow(2, zoom2);
          },
          // @method zoom(scale: Number): Number
          // Inverse of `scale()`, returns the zoom level corresponding to a scale
          // factor of `scale`.
          zoom: function(scale2) {
            return Math.log(scale2 / 256) / Math.LN2;
          },
          // @method getProjectedBounds(zoom: Number): Bounds
          // Returns the projection's bounds scaled and transformed for the provided `zoom`.
          getProjectedBounds: function(zoom2) {
            if (this.infinite) {
              return null;
            }
            var b = this.projection.bounds, s = this.scale(zoom2), min = this.transformation.transform(b.min, s), max = this.transformation.transform(b.max, s);
            return new Bounds(min, max);
          },
          // @method distance(latlng1: LatLng, latlng2: LatLng): Number
          // Returns the distance between two geographical coordinates.
          // @property code: String
          // Standard code name of the CRS passed into WMS services (e.g. `'EPSG:3857'`)
          //
          // @property wrapLng: Number[]
          // An array of two numbers defining whether the longitude (horizontal) coordinate
          // axis wraps around a given range and how. Defaults to `[-180, 180]` in most
          // geographical CRSs. If `undefined`, the longitude axis does not wrap around.
          //
          // @property wrapLat: Number[]
          // Like `wrapLng`, but for the latitude (vertical) axis.
          // wrapLng: [min, max],
          // wrapLat: [min, max],
          // @property infinite: Boolean
          // If true, the coordinate space will be unbounded (infinite in both axes)
          infinite: false,
          // @method wrapLatLng(latlng: LatLng): LatLng
          // Returns a `LatLng` where lat and lng has been wrapped according to the
          // CRS's `wrapLat` and `wrapLng` properties, if they are outside the CRS's bounds.
          wrapLatLng: function(latlng) {
            var lng = this.wrapLng ? wrapNum(latlng.lng, this.wrapLng, true) : latlng.lng, lat = this.wrapLat ? wrapNum(latlng.lat, this.wrapLat, true) : latlng.lat, alt = latlng.alt;
            return new LatLng(lat, lng, alt);
          },
          // @method wrapLatLngBounds(bounds: LatLngBounds): LatLngBounds
          // Returns a `LatLngBounds` with the same size as the given one, ensuring
          // that its center is within the CRS's bounds.
          // Only accepts actual `L.LatLngBounds` instances, not arrays.
          wrapLatLngBounds: function(bounds) {
            var center = bounds.getCenter(), newCenter = this.wrapLatLng(center), latShift = center.lat - newCenter.lat, lngShift = center.lng - newCenter.lng;
            if (latShift === 0 && lngShift === 0) {
              return bounds;
            }
            var sw = bounds.getSouthWest(), ne = bounds.getNorthEast(), newSw = new LatLng(sw.lat - latShift, sw.lng - lngShift), newNe = new LatLng(ne.lat - latShift, ne.lng - lngShift);
            return new LatLngBounds(newSw, newNe);
          }
        };
        var Earth = extend({}, CRS, {
          wrapLng: [-180, 180],
          // Mean Earth Radius, as recommended for use by
          // the International Union of Geodesy and Geophysics,
          // see https://rosettacode.org/wiki/Haversine_formula
          R: 6371e3,
          // distance between two geographical points using spherical law of cosines approximation
          distance: function(latlng1, latlng2) {
            var rad = Math.PI / 180, lat1 = latlng1.lat * rad, lat2 = latlng2.lat * rad, sinDLat = Math.sin((latlng2.lat - latlng1.lat) * rad / 2), sinDLon = Math.sin((latlng2.lng - latlng1.lng) * rad / 2), a = sinDLat * sinDLat + Math.cos(lat1) * Math.cos(lat2) * sinDLon * sinDLon, c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
            return this.R * c;
          }
        });
        var earthRadius = 6378137;
        var SphericalMercator = {
          R: earthRadius,
          MAX_LATITUDE: 85.0511287798,
          project: function(latlng) {
            var d = Math.PI / 180, max = this.MAX_LATITUDE, lat = Math.max(Math.min(max, latlng.lat), -max), sin = Math.sin(lat * d);
            return new Point(
              this.R * latlng.lng * d,
              this.R * Math.log((1 + sin) / (1 - sin)) / 2
            );
          },
          unproject: function(point) {
            var d = 180 / Math.PI;
            return new LatLng(
              (2 * Math.atan(Math.exp(point.y / this.R)) - Math.PI / 2) * d,
              point.x * d / this.R
            );
          },
          bounds: (function() {
            var d = earthRadius * Math.PI;
            return new Bounds([-d, -d], [d, d]);
          })()
        };
        function Transformation(a, b, c, d) {
          if (isArray(a)) {
            this._a = a[0];
            this._b = a[1];
            this._c = a[2];
            this._d = a[3];
            return;
          }
          this._a = a;
          this._b = b;
          this._c = c;
          this._d = d;
        }
        Transformation.prototype = {
          // @method transform(point: Point, scale?: Number): Point
          // Returns a transformed point, optionally multiplied by the given scale.
          // Only accepts actual `L.Point` instances, not arrays.
          transform: function(point, scale2) {
            return this._transform(point.clone(), scale2);
          },
          // destructive transform (faster)
          _transform: function(point, scale2) {
            scale2 = scale2 || 1;
            point.x = scale2 * (this._a * point.x + this._b);
            point.y = scale2 * (this._c * point.y + this._d);
            return point;
          },
          // @method untransform(point: Point, scale?: Number): Point
          // Returns the reverse transformation of the given point, optionally divided
          // by the given scale. Only accepts actual `L.Point` instances, not arrays.
          untransform: function(point, scale2) {
            scale2 = scale2 || 1;
            return new Point(
              (point.x / scale2 - this._b) / this._a,
              (point.y / scale2 - this._d) / this._c
            );
          }
        };
        function toTransformation(a, b, c, d) {
          return new Transformation(a, b, c, d);
        }
        var EPSG3857 = extend({}, Earth, {
          code: "EPSG:3857",
          projection: SphericalMercator,
          transformation: (function() {
            var scale2 = 0.5 / (Math.PI * SphericalMercator.R);
            return toTransformation(scale2, 0.5, -scale2, 0.5);
          })()
        });
        var EPSG900913 = extend({}, EPSG3857, {
          code: "EPSG:900913"
        });
        function svgCreate(name) {
          return document.createElementNS("http://www.w3.org/2000/svg", name);
        }
        function pointsToPath(rings, closed) {
          var str = "", i, j, len, len2, points, p;
          for (i = 0, len = rings.length; i < len; i++) {
            points = rings[i];
            for (j = 0, len2 = points.length; j < len2; j++) {
              p = points[j];
              str += (j ? "L" : "M") + p.x + " " + p.y;
            }
            str += closed ? Browser.svg ? "z" : "x" : "";
          }
          return str || "M0 0";
        }
        var style = document.documentElement.style;
        var ie = "ActiveXObject" in window;
        var ielt9 = ie && !document.addEventListener;
        var edge = "msLaunchUri" in navigator && !("documentMode" in document);
        var webkit = userAgentContains("webkit");
        var android = userAgentContains("android");
        var android23 = userAgentContains("android 2") || userAgentContains("android 3");
        var webkitVer = parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1], 10);
        var androidStock = android && userAgentContains("Google") && webkitVer < 537 && !("AudioNode" in window);
        var opera = !!window.opera;
        var chrome = !edge && userAgentContains("chrome");
        var gecko = userAgentContains("gecko") && !webkit && !opera && !ie;
        var safari = !chrome && userAgentContains("safari");
        var phantom = userAgentContains("phantom");
        var opera12 = "OTransition" in style;
        var win = navigator.platform.indexOf("Win") === 0;
        var ie3d = ie && "transition" in style;
        var webkit3d = "WebKitCSSMatrix" in window && "m11" in new window.WebKitCSSMatrix() && !android23;
        var gecko3d = "MozPerspective" in style;
        var any3d = !window.L_DISABLE_3D && (ie3d || webkit3d || gecko3d) && !opera12 && !phantom;
        var mobile = typeof orientation !== "undefined" || userAgentContains("mobile");
        var mobileWebkit = mobile && webkit;
        var mobileWebkit3d = mobile && webkit3d;
        var msPointer = !window.PointerEvent && window.MSPointerEvent;
        var pointer = !!(window.PointerEvent || msPointer);
        var touchNative = "ontouchstart" in window || !!window.TouchEvent;
        var touch = !window.L_NO_TOUCH && (touchNative || pointer);
        var mobileOpera = mobile && opera;
        var mobileGecko = mobile && gecko;
        var retina = (window.devicePixelRatio || window.screen.deviceXDPI / window.screen.logicalXDPI) > 1;
        var passiveEvents = (function() {
          var supportsPassiveOption = false;
          try {
            var opts = Object.defineProperty({}, "passive", {
              get: function() {
                supportsPassiveOption = true;
              }
            });
            window.addEventListener("testPassiveEventSupport", falseFn, opts);
            window.removeEventListener("testPassiveEventSupport", falseFn, opts);
          } catch (e) {
          }
          return supportsPassiveOption;
        })();
        var canvas$1 = (function() {
          return !!document.createElement("canvas").getContext;
        })();
        var svg$1 = !!(document.createElementNS && svgCreate("svg").createSVGRect);
        var inlineSvg = !!svg$1 && (function() {
          var div = document.createElement("div");
          div.innerHTML = "<svg/>";
          return (div.firstChild && div.firstChild.namespaceURI) === "http://www.w3.org/2000/svg";
        })();
        var vml = !svg$1 && (function() {
          try {
            var div = document.createElement("div");
            div.innerHTML = '<v:shape adj="1"/>';
            var shape = div.firstChild;
            shape.style.behavior = "url(#default#VML)";
            return shape && typeof shape.adj === "object";
          } catch (e) {
            return false;
          }
        })();
        var mac = navigator.platform.indexOf("Mac") === 0;
        var linux = navigator.platform.indexOf("Linux") === 0;
        function userAgentContains(str) {
          return navigator.userAgent.toLowerCase().indexOf(str) >= 0;
        }
        var Browser = {
          ie,
          ielt9,
          edge,
          webkit,
          android,
          android23,
          androidStock,
          opera,
          chrome,
          gecko,
          safari,
          phantom,
          opera12,
          win,
          ie3d,
          webkit3d,
          gecko3d,
          any3d,
          mobile,
          mobileWebkit,
          mobileWebkit3d,
          msPointer,
          pointer,
          touch,
          touchNative,
          mobileOpera,
          mobileGecko,
          retina,
          passiveEvents,
          canvas: canvas$1,
          svg: svg$1,
          vml,
          inlineSvg,
          mac,
          linux
        };
        var POINTER_DOWN = Browser.msPointer ? "MSPointerDown" : "pointerdown";
        var POINTER_MOVE = Browser.msPointer ? "MSPointerMove" : "pointermove";
        var POINTER_UP = Browser.msPointer ? "MSPointerUp" : "pointerup";
        var POINTER_CANCEL = Browser.msPointer ? "MSPointerCancel" : "pointercancel";
        var pEvent = {
          touchstart: POINTER_DOWN,
          touchmove: POINTER_MOVE,
          touchend: POINTER_UP,
          touchcancel: POINTER_CANCEL
        };
        var handle = {
          touchstart: _onPointerStart,
          touchmove: _handlePointer,
          touchend: _handlePointer,
          touchcancel: _handlePointer
        };
        var _pointers = {};
        var _pointerDocListener = false;
        function addPointerListener(obj, type, handler) {
          if (type === "touchstart") {
            _addPointerDocListener();
          }
          if (!handle[type]) {
            console.warn("wrong event specified:", type);
            return falseFn;
          }
          handler = handle[type].bind(this, handler);
          obj.addEventListener(pEvent[type], handler, false);
          return handler;
        }
        function removePointerListener(obj, type, handler) {
          if (!pEvent[type]) {
            console.warn("wrong event specified:", type);
            return;
          }
          obj.removeEventListener(pEvent[type], handler, false);
        }
        function _globalPointerDown(e) {
          _pointers[e.pointerId] = e;
        }
        function _globalPointerMove(e) {
          if (_pointers[e.pointerId]) {
            _pointers[e.pointerId] = e;
          }
        }
        function _globalPointerUp(e) {
          delete _pointers[e.pointerId];
        }
        function _addPointerDocListener() {
          if (!_pointerDocListener) {
            document.addEventListener(POINTER_DOWN, _globalPointerDown, true);
            document.addEventListener(POINTER_MOVE, _globalPointerMove, true);
            document.addEventListener(POINTER_UP, _globalPointerUp, true);
            document.addEventListener(POINTER_CANCEL, _globalPointerUp, true);
            _pointerDocListener = true;
          }
        }
        function _handlePointer(handler, e) {
          if (e.pointerType === (e.MSPOINTER_TYPE_MOUSE || "mouse")) {
            return;
          }
          e.touches = [];
          for (var i in _pointers) {
            e.touches.push(_pointers[i]);
          }
          e.changedTouches = [e];
          handler(e);
        }
        function _onPointerStart(handler, e) {
          if (e.MSPOINTER_TYPE_TOUCH && e.pointerType === e.MSPOINTER_TYPE_TOUCH) {
            preventDefault(e);
          }
          _handlePointer(handler, e);
        }
        function makeDblclick(event) {
          var newEvent = {}, prop, i;
          for (i in event) {
            prop = event[i];
            newEvent[i] = prop && prop.bind ? prop.bind(event) : prop;
          }
          event = newEvent;
          newEvent.type = "dblclick";
          newEvent.detail = 2;
          newEvent.isTrusted = false;
          newEvent._simulated = true;
          return newEvent;
        }
        var delay = 200;
        function addDoubleTapListener(obj, handler) {
          obj.addEventListener("dblclick", handler);
          var last = 0, detail;
          function simDblclick(e) {
            if (e.detail !== 1) {
              detail = e.detail;
              return;
            }
            if (e.pointerType === "mouse" || e.sourceCapabilities && !e.sourceCapabilities.firesTouchEvents) {
              return;
            }
            var path = getPropagationPath(e);
            if (path.some(function(el) {
              return el instanceof HTMLLabelElement && el.attributes.for;
            }) && !path.some(function(el) {
              return el instanceof HTMLInputElement || el instanceof HTMLSelectElement;
            })) {
              return;
            }
            var now = Date.now();
            if (now - last <= delay) {
              detail++;
              if (detail === 2) {
                handler(makeDblclick(e));
              }
            } else {
              detail = 1;
            }
            last = now;
          }
          obj.addEventListener("click", simDblclick);
          return {
            dblclick: handler,
            simDblclick
          };
        }
        function removeDoubleTapListener(obj, handlers) {
          obj.removeEventListener("dblclick", handlers.dblclick);
          obj.removeEventListener("click", handlers.simDblclick);
        }
        var TRANSFORM = testProp(
          ["transform", "webkitTransform", "OTransform", "MozTransform", "msTransform"]
        );
        var TRANSITION = testProp(
          ["webkitTransition", "transition", "OTransition", "MozTransition", "msTransition"]
        );
        var TRANSITION_END = TRANSITION === "webkitTransition" || TRANSITION === "OTransition" ? TRANSITION + "End" : "transitionend";
        function get(id) {
          return typeof id === "string" ? document.getElementById(id) : id;
        }
        function getStyle(el, style2) {
          var value = el.style[style2] || el.currentStyle && el.currentStyle[style2];
          if ((!value || value === "auto") && document.defaultView) {
            var css = document.defaultView.getComputedStyle(el, null);
            value = css ? css[style2] : null;
          }
          return value === "auto" ? null : value;
        }
        function create$1(tagName, className, container) {
          var el = document.createElement(tagName);
          el.className = className || "";
          if (container) {
            container.appendChild(el);
          }
          return el;
        }
        function remove(el) {
          var parent = el.parentNode;
          if (parent) {
            parent.removeChild(el);
          }
        }
        function empty(el) {
          while (el.firstChild) {
            el.removeChild(el.firstChild);
          }
        }
        function toFront(el) {
          var parent = el.parentNode;
          if (parent && parent.lastChild !== el) {
            parent.appendChild(el);
          }
        }
        function toBack(el) {
          var parent = el.parentNode;
          if (parent && parent.firstChild !== el) {
            parent.insertBefore(el, parent.firstChild);
          }
        }
        function hasClass(el, name) {
          if (el.classList !== void 0) {
            return el.classList.contains(name);
          }
          var className = getClass(el);
          return className.length > 0 && new RegExp("(^|\\s)" + name + "(\\s|$)").test(className);
        }
        function addClass(el, name) {
          if (el.classList !== void 0) {
            var classes = splitWords(name);
            for (var i = 0, len = classes.length; i < len; i++) {
              el.classList.add(classes[i]);
            }
          } else if (!hasClass(el, name)) {
            var className = getClass(el);
            setClass(el, (className ? className + " " : "") + name);
          }
        }
        function removeClass(el, name) {
          if (el.classList !== void 0) {
            el.classList.remove(name);
          } else {
            setClass(el, trim((" " + getClass(el) + " ").replace(" " + name + " ", " ")));
          }
        }
        function setClass(el, name) {
          if (el.className.baseVal === void 0) {
            el.className = name;
          } else {
            el.className.baseVal = name;
          }
        }
        function getClass(el) {
          if (el.correspondingElement) {
            el = el.correspondingElement;
          }
          return el.className.baseVal === void 0 ? el.className : el.className.baseVal;
        }
        function setOpacity(el, value) {
          if ("opacity" in el.style) {
            el.style.opacity = value;
          } else if ("filter" in el.style) {
            _setOpacityIE(el, value);
          }
        }
        function _setOpacityIE(el, value) {
          var filter = false, filterName = "DXImageTransform.Microsoft.Alpha";
          try {
            filter = el.filters.item(filterName);
          } catch (e) {
            if (value === 1) {
              return;
            }
          }
          value = Math.round(value * 100);
          if (filter) {
            filter.Enabled = value !== 100;
            filter.Opacity = value;
          } else {
            el.style.filter += " progid:" + filterName + "(opacity=" + value + ")";
          }
        }
        function testProp(props) {
          var style2 = document.documentElement.style;
          for (var i = 0; i < props.length; i++) {
            if (props[i] in style2) {
              return props[i];
            }
          }
          return false;
        }
        function setTransform(el, offset, scale2) {
          var pos = offset || new Point(0, 0);
          el.style[TRANSFORM] = (Browser.ie3d ? "translate(" + pos.x + "px," + pos.y + "px)" : "translate3d(" + pos.x + "px," + pos.y + "px,0)") + (scale2 ? " scale(" + scale2 + ")" : "");
        }
        function setPosition(el, point) {
          el._leaflet_pos = point;
          if (Browser.any3d) {
            setTransform(el, point);
          } else {
            el.style.left = point.x + "px";
            el.style.top = point.y + "px";
          }
        }
        function getPosition(el) {
          return el._leaflet_pos || new Point(0, 0);
        }
        var disableTextSelection;
        var enableTextSelection;
        var _userSelect;
        if ("onselectstart" in document) {
          disableTextSelection = function() {
            on(window, "selectstart", preventDefault);
          };
          enableTextSelection = function() {
            off(window, "selectstart", preventDefault);
          };
        } else {
          var userSelectProperty = testProp(
            ["userSelect", "WebkitUserSelect", "OUserSelect", "MozUserSelect", "msUserSelect"]
          );
          disableTextSelection = function() {
            if (userSelectProperty) {
              var style2 = document.documentElement.style;
              _userSelect = style2[userSelectProperty];
              style2[userSelectProperty] = "none";
            }
          };
          enableTextSelection = function() {
            if (userSelectProperty) {
              document.documentElement.style[userSelectProperty] = _userSelect;
              _userSelect = void 0;
            }
          };
        }
        function disableImageDrag() {
          on(window, "dragstart", preventDefault);
        }
        function enableImageDrag() {
          off(window, "dragstart", preventDefault);
        }
        var _outlineElement, _outlineStyle;
        function preventOutline(element) {
          while (element.tabIndex === -1) {
            element = element.parentNode;
          }
          if (!element.style) {
            return;
          }
          restoreOutline();
          _outlineElement = element;
          _outlineStyle = element.style.outlineStyle;
          element.style.outlineStyle = "none";
          on(window, "keydown", restoreOutline);
        }
        function restoreOutline() {
          if (!_outlineElement) {
            return;
          }
          _outlineElement.style.outlineStyle = _outlineStyle;
          _outlineElement = void 0;
          _outlineStyle = void 0;
          off(window, "keydown", restoreOutline);
        }
        function getSizedParentNode(element) {
          do {
            element = element.parentNode;
          } while ((!element.offsetWidth || !element.offsetHeight) && element !== document.body);
          return element;
        }
        function getScale(element) {
          var rect = element.getBoundingClientRect();
          return {
            x: rect.width / element.offsetWidth || 1,
            y: rect.height / element.offsetHeight || 1,
            boundingClientRect: rect
          };
        }
        var DomUtil = {
          __proto__: null,
          TRANSFORM,
          TRANSITION,
          TRANSITION_END,
          get,
          getStyle,
          create: create$1,
          remove,
          empty,
          toFront,
          toBack,
          hasClass,
          addClass,
          removeClass,
          setClass,
          getClass,
          setOpacity,
          testProp,
          setTransform,
          setPosition,
          getPosition,
          get disableTextSelection() {
            return disableTextSelection;
          },
          get enableTextSelection() {
            return enableTextSelection;
          },
          disableImageDrag,
          enableImageDrag,
          preventOutline,
          restoreOutline,
          getSizedParentNode,
          getScale
        };
        function on(obj, types, fn, context) {
          if (types && typeof types === "object") {
            for (var type in types) {
              addOne(obj, type, types[type], fn);
            }
          } else {
            types = splitWords(types);
            for (var i = 0, len = types.length; i < len; i++) {
              addOne(obj, types[i], fn, context);
            }
          }
          return this;
        }
        var eventsKey = "_leaflet_events";
        function off(obj, types, fn, context) {
          if (arguments.length === 1) {
            batchRemove(obj);
            delete obj[eventsKey];
          } else if (types && typeof types === "object") {
            for (var type in types) {
              removeOne(obj, type, types[type], fn);
            }
          } else {
            types = splitWords(types);
            if (arguments.length === 2) {
              batchRemove(obj, function(type2) {
                return indexOf(types, type2) !== -1;
              });
            } else {
              for (var i = 0, len = types.length; i < len; i++) {
                removeOne(obj, types[i], fn, context);
              }
            }
          }
          return this;
        }
        function batchRemove(obj, filterFn) {
          for (var id in obj[eventsKey]) {
            var type = id.split(/\d/)[0];
            if (!filterFn || filterFn(type)) {
              removeOne(obj, type, null, null, id);
            }
          }
        }
        var mouseSubst = {
          mouseenter: "mouseover",
          mouseleave: "mouseout",
          wheel: !("onwheel" in window) && "mousewheel"
        };
        function addOne(obj, type, fn, context) {
          var id = type + stamp(fn) + (context ? "_" + stamp(context) : "");
          if (obj[eventsKey] && obj[eventsKey][id]) {
            return this;
          }
          var handler = function(e) {
            return fn.call(context || obj, e || window.event);
          };
          var originalHandler = handler;
          if (!Browser.touchNative && Browser.pointer && type.indexOf("touch") === 0) {
            handler = addPointerListener(obj, type, handler);
          } else if (Browser.touch && type === "dblclick") {
            handler = addDoubleTapListener(obj, handler);
          } else if ("addEventListener" in obj) {
            if (type === "touchstart" || type === "touchmove" || type === "wheel" || type === "mousewheel") {
              obj.addEventListener(mouseSubst[type] || type, handler, Browser.passiveEvents ? { passive: false } : false);
            } else if (type === "mouseenter" || type === "mouseleave") {
              handler = function(e) {
                e = e || window.event;
                if (isExternalTarget(obj, e)) {
                  originalHandler(e);
                }
              };
              obj.addEventListener(mouseSubst[type], handler, false);
            } else {
              obj.addEventListener(type, originalHandler, false);
            }
          } else {
            obj.attachEvent("on" + type, handler);
          }
          obj[eventsKey] = obj[eventsKey] || {};
          obj[eventsKey][id] = handler;
        }
        function removeOne(obj, type, fn, context, id) {
          id = id || type + stamp(fn) + (context ? "_" + stamp(context) : "");
          var handler = obj[eventsKey] && obj[eventsKey][id];
          if (!handler) {
            return this;
          }
          if (!Browser.touchNative && Browser.pointer && type.indexOf("touch") === 0) {
            removePointerListener(obj, type, handler);
          } else if (Browser.touch && type === "dblclick") {
            removeDoubleTapListener(obj, handler);
          } else if ("removeEventListener" in obj) {
            obj.removeEventListener(mouseSubst[type] || type, handler, false);
          } else {
            obj.detachEvent("on" + type, handler);
          }
          obj[eventsKey][id] = null;
        }
        function stopPropagation(e) {
          if (e.stopPropagation) {
            e.stopPropagation();
          } else if (e.originalEvent) {
            e.originalEvent._stopped = true;
          } else {
            e.cancelBubble = true;
          }
          return this;
        }
        function disableScrollPropagation(el) {
          addOne(el, "wheel", stopPropagation);
          return this;
        }
        function disableClickPropagation(el) {
          on(el, "mousedown touchstart dblclick contextmenu", stopPropagation);
          el["_leaflet_disable_click"] = true;
          return this;
        }
        function preventDefault(e) {
          if (e.preventDefault) {
            e.preventDefault();
          } else {
            e.returnValue = false;
          }
          return this;
        }
        function stop(e) {
          preventDefault(e);
          stopPropagation(e);
          return this;
        }
        function getPropagationPath(ev) {
          if (ev.composedPath) {
            return ev.composedPath();
          }
          var path = [];
          var el = ev.target;
          while (el) {
            path.push(el);
            el = el.parentNode;
          }
          return path;
        }
        function getMousePosition(e, container) {
          if (!container) {
            return new Point(e.clientX, e.clientY);
          }
          var scale2 = getScale(container), offset = scale2.boundingClientRect;
          return new Point(
            // offset.left/top values are in page scale (like clientX/Y),
            // whereas clientLeft/Top (border width) values are the original values (before CSS scale applies).
            (e.clientX - offset.left) / scale2.x - container.clientLeft,
            (e.clientY - offset.top) / scale2.y - container.clientTop
          );
        }
        var wheelPxFactor = Browser.linux && Browser.chrome ? window.devicePixelRatio : Browser.mac ? window.devicePixelRatio * 3 : window.devicePixelRatio > 0 ? 2 * window.devicePixelRatio : 1;
        function getWheelDelta(e) {
          return Browser.edge ? e.wheelDeltaY / 2 : (
            // Don't trust window-geometry-based delta
            e.deltaY && e.deltaMode === 0 ? -e.deltaY / wheelPxFactor : (
              // Pixels
              e.deltaY && e.deltaMode === 1 ? -e.deltaY * 20 : (
                // Lines
                e.deltaY && e.deltaMode === 2 ? -e.deltaY * 60 : (
                  // Pages
                  e.deltaX || e.deltaZ ? 0 : (
                    // Skip horizontal/depth wheel events
                    e.wheelDelta ? (e.wheelDeltaY || e.wheelDelta) / 2 : (
                      // Legacy IE pixels
                      e.detail && Math.abs(e.detail) < 32765 ? -e.detail * 20 : (
                        // Legacy Moz lines
                        e.detail ? e.detail / -32765 * 60 : (
                          // Legacy Moz pages
                          0
                        )
                      )
                    )
                  )
                )
              )
            )
          );
        }
        function isExternalTarget(el, e) {
          var related = e.relatedTarget;
          if (!related) {
            return true;
          }
          try {
            while (related && related !== el) {
              related = related.parentNode;
            }
          } catch (err) {
            return false;
          }
          return related !== el;
        }
        var DomEvent = {
          __proto__: null,
          on,
          off,
          stopPropagation,
          disableScrollPropagation,
          disableClickPropagation,
          preventDefault,
          stop,
          getPropagationPath,
          getMousePosition,
          getWheelDelta,
          isExternalTarget,
          addListener: on,
          removeListener: off
        };
        var PosAnimation = Evented.extend({
          // @method run(el: HTMLElement, newPos: Point, duration?: Number, easeLinearity?: Number)
          // Run an animation of a given element to a new position, optionally setting
          // duration in seconds (`0.25` by default) and easing linearity factor (3rd
          // argument of the [cubic bezier curve](https://cubic-bezier.com/#0,0,.5,1),
          // `0.5` by default).
          run: function(el, newPos, duration, easeLinearity) {
            this.stop();
            this._el = el;
            this._inProgress = true;
            this._duration = duration || 0.25;
            this._easeOutPower = 1 / Math.max(easeLinearity || 0.5, 0.2);
            this._startPos = getPosition(el);
            this._offset = newPos.subtract(this._startPos);
            this._startTime = +/* @__PURE__ */ new Date();
            this.fire("start");
            this._animate();
          },
          // @method stop()
          // Stops the animation (if currently running).
          stop: function() {
            if (!this._inProgress) {
              return;
            }
            this._step(true);
            this._complete();
          },
          _animate: function() {
            this._animId = requestAnimFrame(this._animate, this);
            this._step();
          },
          _step: function(round) {
            var elapsed = +/* @__PURE__ */ new Date() - this._startTime, duration = this._duration * 1e3;
            if (elapsed < duration) {
              this._runFrame(this._easeOut(elapsed / duration), round);
            } else {
              this._runFrame(1);
              this._complete();
            }
          },
          _runFrame: function(progress, round) {
            var pos = this._startPos.add(this._offset.multiplyBy(progress));
            if (round) {
              pos._round();
            }
            setPosition(this._el, pos);
            this.fire("step");
          },
          _complete: function() {
            cancelAnimFrame(this._animId);
            this._inProgress = false;
            this.fire("end");
          },
          _easeOut: function(t) {
            return 1 - Math.pow(1 - t, this._easeOutPower);
          }
        });
        var Map = Evented.extend({
          options: {
            // @section Map State Options
            // @option crs: CRS = L.CRS.EPSG3857
            // The [Coordinate Reference System](#crs) to use. Don't change this if you're not
            // sure what it means.
            crs: EPSG3857,
            // @option center: LatLng = undefined
            // Initial geographic center of the map
            center: void 0,
            // @option zoom: Number = undefined
            // Initial map zoom level
            zoom: void 0,
            // @option minZoom: Number = *
            // Minimum zoom level of the map.
            // If not specified and at least one `GridLayer` or `TileLayer` is in the map,
            // the lowest of their `minZoom` options will be used instead.
            minZoom: void 0,
            // @option maxZoom: Number = *
            // Maximum zoom level of the map.
            // If not specified and at least one `GridLayer` or `TileLayer` is in the map,
            // the highest of their `maxZoom` options will be used instead.
            maxZoom: void 0,
            // @option layers: Layer[] = []
            // Array of layers that will be added to the map initially
            layers: [],
            // @option maxBounds: LatLngBounds = null
            // When this option is set, the map restricts the view to the given
            // geographical bounds, bouncing the user back if the user tries to pan
            // outside the view. To set the restriction dynamically, use
            // [`setMaxBounds`](#map-setmaxbounds) method.
            maxBounds: void 0,
            // @option renderer: Renderer = *
            // The default method for drawing vector layers on the map. `L.SVG`
            // or `L.Canvas` by default depending on browser support.
            renderer: void 0,
            // @section Animation Options
            // @option zoomAnimation: Boolean = true
            // Whether the map zoom animation is enabled. By default it's enabled
            // in all browsers that support CSS3 Transitions except Android.
            zoomAnimation: true,
            // @option zoomAnimationThreshold: Number = 4
            // Won't animate zoom if the zoom difference exceeds this value.
            zoomAnimationThreshold: 4,
            // @option fadeAnimation: Boolean = true
            // Whether the tile fade animation is enabled. By default it's enabled
            // in all browsers that support CSS3 Transitions except Android.
            fadeAnimation: true,
            // @option markerZoomAnimation: Boolean = true
            // Whether markers animate their zoom with the zoom animation, if disabled
            // they will disappear for the length of the animation. By default it's
            // enabled in all browsers that support CSS3 Transitions except Android.
            markerZoomAnimation: true,
            // @option transform3DLimit: Number = 2^23
            // Defines the maximum size of a CSS translation transform. The default
            // value should not be changed unless a web browser positions layers in
            // the wrong place after doing a large `panBy`.
            transform3DLimit: 8388608,
            // Precision limit of a 32-bit float
            // @section Interaction Options
            // @option zoomSnap: Number = 1
            // Forces the map's zoom level to always be a multiple of this, particularly
            // right after a [`fitBounds()`](#map-fitbounds) or a pinch-zoom.
            // By default, the zoom level snaps to the nearest integer; lower values
            // (e.g. `0.5` or `0.1`) allow for greater granularity. A value of `0`
            // means the zoom level will not be snapped after `fitBounds` or a pinch-zoom.
            zoomSnap: 1,
            // @option zoomDelta: Number = 1
            // Controls how much the map's zoom level will change after a
            // [`zoomIn()`](#map-zoomin), [`zoomOut()`](#map-zoomout), pressing `+`
            // or `-` on the keyboard, or using the [zoom controls](#control-zoom).
            // Values smaller than `1` (e.g. `0.5`) allow for greater granularity.
            zoomDelta: 1,
            // @option trackResize: Boolean = true
            // Whether the map automatically handles browser window resize to update itself.
            trackResize: true
          },
          initialize: function(id, options) {
            options = setOptions(this, options);
            this._handlers = [];
            this._layers = {};
            this._zoomBoundLayers = {};
            this._sizeChanged = true;
            this._initContainer(id);
            this._initLayout();
            this._onResize = bind(this._onResize, this);
            this._initEvents();
            if (options.maxBounds) {
              this.setMaxBounds(options.maxBounds);
            }
            if (options.zoom !== void 0) {
              this._zoom = this._limitZoom(options.zoom);
            }
            if (options.center && options.zoom !== void 0) {
              this.setView(toLatLng(options.center), options.zoom, { reset: true });
            }
            this.callInitHooks();
            this._zoomAnimated = TRANSITION && Browser.any3d && !Browser.mobileOpera && this.options.zoomAnimation;
            if (this._zoomAnimated) {
              this._createAnimProxy();
              on(this._proxy, TRANSITION_END, this._catchTransitionEnd, this);
            }
            this._addLayers(this.options.layers);
          },
          // @section Methods for modifying map state
          // @method setView(center: LatLng, zoom: Number, options?: Zoom/pan options): this
          // Sets the view of the map (geographical center and zoom) with the given
          // animation options.
          setView: function(center, zoom2, options) {
            zoom2 = zoom2 === void 0 ? this._zoom : this._limitZoom(zoom2);
            center = this._limitCenter(toLatLng(center), zoom2, this.options.maxBounds);
            options = options || {};
            this._stop();
            if (this._loaded && !options.reset && options !== true) {
              if (options.animate !== void 0) {
                options.zoom = extend({ animate: options.animate }, options.zoom);
                options.pan = extend({ animate: options.animate, duration: options.duration }, options.pan);
              }
              var moved = this._zoom !== zoom2 ? this._tryAnimatedZoom && this._tryAnimatedZoom(center, zoom2, options.zoom) : this._tryAnimatedPan(center, options.pan);
              if (moved) {
                clearTimeout(this._sizeTimer);
                return this;
              }
            }
            this._resetView(center, zoom2, options.pan && options.pan.noMoveStart);
            return this;
          },
          // @method setZoom(zoom: Number, options?: Zoom/pan options): this
          // Sets the zoom of the map.
          setZoom: function(zoom2, options) {
            if (!this._loaded) {
              this._zoom = zoom2;
              return this;
            }
            return this.setView(this.getCenter(), zoom2, { zoom: options });
          },
          // @method zoomIn(delta?: Number, options?: Zoom options): this
          // Increases the zoom of the map by `delta` ([`zoomDelta`](#map-zoomdelta) by default).
          zoomIn: function(delta, options) {
            delta = delta || (Browser.any3d ? this.options.zoomDelta : 1);
            return this.setZoom(this._zoom + delta, options);
          },
          // @method zoomOut(delta?: Number, options?: Zoom options): this
          // Decreases the zoom of the map by `delta` ([`zoomDelta`](#map-zoomdelta) by default).
          zoomOut: function(delta, options) {
            delta = delta || (Browser.any3d ? this.options.zoomDelta : 1);
            return this.setZoom(this._zoom - delta, options);
          },
          // @method setZoomAround(latlng: LatLng, zoom: Number, options: Zoom options): this
          // Zooms the map while keeping a specified geographical point on the map
          // stationary (e.g. used internally for scroll zoom and double-click zoom).
          // @alternative
          // @method setZoomAround(offset: Point, zoom: Number, options: Zoom options): this
          // Zooms the map while keeping a specified pixel on the map (relative to the top-left corner) stationary.
          setZoomAround: function(latlng, zoom2, options) {
            var scale2 = this.getZoomScale(zoom2), viewHalf = this.getSize().divideBy(2), containerPoint = latlng instanceof Point ? latlng : this.latLngToContainerPoint(latlng), centerOffset = containerPoint.subtract(viewHalf).multiplyBy(1 - 1 / scale2), newCenter = this.containerPointToLatLng(viewHalf.add(centerOffset));
            return this.setView(newCenter, zoom2, { zoom: options });
          },
          _getBoundsCenterZoom: function(bounds, options) {
            options = options || {};
            bounds = bounds.getBounds ? bounds.getBounds() : toLatLngBounds(bounds);
            var paddingTL = toPoint(options.paddingTopLeft || options.padding || [0, 0]), paddingBR = toPoint(options.paddingBottomRight || options.padding || [0, 0]), zoom2 = this.getBoundsZoom(bounds, false, paddingTL.add(paddingBR));
            zoom2 = typeof options.maxZoom === "number" ? Math.min(options.maxZoom, zoom2) : zoom2;
            if (zoom2 === Infinity) {
              return {
                center: bounds.getCenter(),
                zoom: zoom2
              };
            }
            var paddingOffset = paddingBR.subtract(paddingTL).divideBy(2), swPoint = this.project(bounds.getSouthWest(), zoom2), nePoint = this.project(bounds.getNorthEast(), zoom2), center = this.unproject(swPoint.add(nePoint).divideBy(2).add(paddingOffset), zoom2);
            return {
              center,
              zoom: zoom2
            };
          },
          // @method fitBounds(bounds: LatLngBounds, options?: fitBounds options): this
          // Sets a map view that contains the given geographical bounds with the
          // maximum zoom level possible.
          fitBounds: function(bounds, options) {
            bounds = toLatLngBounds(bounds);
            if (!bounds.isValid()) {
              throw new Error("Bounds are not valid.");
            }
            var target = this._getBoundsCenterZoom(bounds, options);
            return this.setView(target.center, target.zoom, options);
          },
          // @method fitWorld(options?: fitBounds options): this
          // Sets a map view that mostly contains the whole world with the maximum
          // zoom level possible.
          fitWorld: function(options) {
            return this.fitBounds([[-90, -180], [90, 180]], options);
          },
          // @method panTo(latlng: LatLng, options?: Pan options): this
          // Pans the map to a given center.
          panTo: function(center, options) {
            return this.setView(center, this._zoom, { pan: options });
          },
          // @method panBy(offset: Point, options?: Pan options): this
          // Pans the map by a given number of pixels (animated).
          panBy: function(offset, options) {
            offset = toPoint(offset).round();
            options = options || {};
            if (!offset.x && !offset.y) {
              return this.fire("moveend");
            }
            if (options.animate !== true && !this.getSize().contains(offset)) {
              this._resetView(this.unproject(this.project(this.getCenter()).add(offset)), this.getZoom());
              return this;
            }
            if (!this._panAnim) {
              this._panAnim = new PosAnimation();
              this._panAnim.on({
                "step": this._onPanTransitionStep,
                "end": this._onPanTransitionEnd
              }, this);
            }
            if (!options.noMoveStart) {
              this.fire("movestart");
            }
            if (options.animate !== false) {
              addClass(this._mapPane, "leaflet-pan-anim");
              var newPos = this._getMapPanePos().subtract(offset).round();
              this._panAnim.run(this._mapPane, newPos, options.duration || 0.25, options.easeLinearity);
            } else {
              this._rawPanBy(offset);
              this.fire("move").fire("moveend");
            }
            return this;
          },
          // @method flyTo(latlng: LatLng, zoom?: Number, options?: Zoom/pan options): this
          // Sets the view of the map (geographical center and zoom) performing a smooth
          // pan-zoom animation.
          flyTo: function(targetCenter, targetZoom, options) {
            options = options || {};
            if (options.animate === false || !Browser.any3d) {
              return this.setView(targetCenter, targetZoom, options);
            }
            this._stop();
            var from = this.project(this.getCenter()), to = this.project(targetCenter), size = this.getSize(), startZoom = this._zoom;
            targetCenter = toLatLng(targetCenter);
            targetZoom = targetZoom === void 0 ? startZoom : targetZoom;
            var w0 = Math.max(size.x, size.y), w1 = w0 * this.getZoomScale(startZoom, targetZoom), u1 = to.distanceTo(from) || 1, rho = 1.42, rho2 = rho * rho;
            function r(i) {
              var s1 = i ? -1 : 1, s2 = i ? w1 : w0, t1 = w1 * w1 - w0 * w0 + s1 * rho2 * rho2 * u1 * u1, b1 = 2 * s2 * rho2 * u1, b = t1 / b1, sq = Math.sqrt(b * b + 1) - b;
              var log = sq < 1e-9 ? -18 : Math.log(sq);
              return log;
            }
            function sinh(n) {
              return (Math.exp(n) - Math.exp(-n)) / 2;
            }
            function cosh(n) {
              return (Math.exp(n) + Math.exp(-n)) / 2;
            }
            function tanh(n) {
              return sinh(n) / cosh(n);
            }
            var r0 = r(0);
            function w(s) {
              return w0 * (cosh(r0) / cosh(r0 + rho * s));
            }
            function u(s) {
              return w0 * (cosh(r0) * tanh(r0 + rho * s) - sinh(r0)) / rho2;
            }
            function easeOut(t) {
              return 1 - Math.pow(1 - t, 1.5);
            }
            var start = Date.now(), S = (r(1) - r0) / rho, duration = options.duration ? 1e3 * options.duration : 1e3 * S * 0.8;
            function frame() {
              var t = (Date.now() - start) / duration, s = easeOut(t) * S;
              if (t <= 1) {
                this._flyToFrame = requestAnimFrame(frame, this);
                this._move(
                  this.unproject(from.add(to.subtract(from).multiplyBy(u(s) / u1)), startZoom),
                  this.getScaleZoom(w0 / w(s), startZoom),
                  { flyTo: true }
                );
              } else {
                this._move(targetCenter, targetZoom)._moveEnd(true);
              }
            }
            this._moveStart(true, options.noMoveStart);
            frame.call(this);
            return this;
          },
          // @method flyToBounds(bounds: LatLngBounds, options?: fitBounds options): this
          // Sets the view of the map with a smooth animation like [`flyTo`](#map-flyto),
          // but takes a bounds parameter like [`fitBounds`](#map-fitbounds).
          flyToBounds: function(bounds, options) {
            var target = this._getBoundsCenterZoom(bounds, options);
            return this.flyTo(target.center, target.zoom, options);
          },
          // @method setMaxBounds(bounds: LatLngBounds): this
          // Restricts the map view to the given bounds (see the [maxBounds](#map-maxbounds) option).
          setMaxBounds: function(bounds) {
            bounds = toLatLngBounds(bounds);
            if (this.listens("moveend", this._panInsideMaxBounds)) {
              this.off("moveend", this._panInsideMaxBounds);
            }
            if (!bounds.isValid()) {
              this.options.maxBounds = null;
              return this;
            }
            this.options.maxBounds = bounds;
            if (this._loaded) {
              this._panInsideMaxBounds();
            }
            return this.on("moveend", this._panInsideMaxBounds);
          },
          // @method setMinZoom(zoom: Number): this
          // Sets the lower limit for the available zoom levels (see the [minZoom](#map-minzoom) option).
          setMinZoom: function(zoom2) {
            var oldZoom = this.options.minZoom;
            this.options.minZoom = zoom2;
            if (this._loaded && oldZoom !== zoom2) {
              this.fire("zoomlevelschange");
              if (this.getZoom() < this.options.minZoom) {
                return this.setZoom(zoom2);
              }
            }
            return this;
          },
          // @method setMaxZoom(zoom: Number): this
          // Sets the upper limit for the available zoom levels (see the [maxZoom](#map-maxzoom) option).
          setMaxZoom: function(zoom2) {
            var oldZoom = this.options.maxZoom;
            this.options.maxZoom = zoom2;
            if (this._loaded && oldZoom !== zoom2) {
              this.fire("zoomlevelschange");
              if (this.getZoom() > this.options.maxZoom) {
                return this.setZoom(zoom2);
              }
            }
            return this;
          },
          // @method panInsideBounds(bounds: LatLngBounds, options?: Pan options): this
          // Pans the map to the closest view that would lie inside the given bounds (if it's not already), controlling the animation using the options specific, if any.
          panInsideBounds: function(bounds, options) {
            this._enforcingBounds = true;
            var center = this.getCenter(), newCenter = this._limitCenter(center, this._zoom, toLatLngBounds(bounds));
            if (!center.equals(newCenter)) {
              this.panTo(newCenter, options);
            }
            this._enforcingBounds = false;
            return this;
          },
          // @method panInside(latlng: LatLng, options?: padding options): this
          // Pans the map the minimum amount to make the `latlng` visible. Use
          // padding options to fit the display to more restricted bounds.
          // If `latlng` is already within the (optionally padded) display bounds,
          // the map will not be panned.
          panInside: function(latlng, options) {
            options = options || {};
            var paddingTL = toPoint(options.paddingTopLeft || options.padding || [0, 0]), paddingBR = toPoint(options.paddingBottomRight || options.padding || [0, 0]), pixelCenter = this.project(this.getCenter()), pixelPoint = this.project(latlng), pixelBounds = this.getPixelBounds(), paddedBounds = toBounds([pixelBounds.min.add(paddingTL), pixelBounds.max.subtract(paddingBR)]), paddedSize = paddedBounds.getSize();
            if (!paddedBounds.contains(pixelPoint)) {
              this._enforcingBounds = true;
              var centerOffset = pixelPoint.subtract(paddedBounds.getCenter());
              var offset = paddedBounds.extend(pixelPoint).getSize().subtract(paddedSize);
              pixelCenter.x += centerOffset.x < 0 ? -offset.x : offset.x;
              pixelCenter.y += centerOffset.y < 0 ? -offset.y : offset.y;
              this.panTo(this.unproject(pixelCenter), options);
              this._enforcingBounds = false;
            }
            return this;
          },
          // @method invalidateSize(options: Zoom/pan options): this
          // Checks if the map container size changed and updates the map if so —
          // call it after you've changed the map size dynamically, also animating
          // pan by default. If `options.pan` is `false`, panning will not occur.
          // If `options.debounceMoveend` is `true`, it will delay `moveend` event so
          // that it doesn't happen often even if the method is called many
          // times in a row.
          // @alternative
          // @method invalidateSize(animate: Boolean): this
          // Checks if the map container size changed and updates the map if so —
          // call it after you've changed the map size dynamically, also animating
          // pan by default.
          invalidateSize: function(options) {
            if (!this._loaded) {
              return this;
            }
            options = extend({
              animate: false,
              pan: true
            }, options === true ? { animate: true } : options);
            var oldSize = this.getSize();
            this._sizeChanged = true;
            this._lastCenter = null;
            var newSize = this.getSize(), oldCenter = oldSize.divideBy(2).round(), newCenter = newSize.divideBy(2).round(), offset = oldCenter.subtract(newCenter);
            if (!offset.x && !offset.y) {
              return this;
            }
            if (options.animate && options.pan) {
              this.panBy(offset);
            } else {
              if (options.pan) {
                this._rawPanBy(offset);
              }
              this.fire("move");
              if (options.debounceMoveend) {
                clearTimeout(this._sizeTimer);
                this._sizeTimer = setTimeout(bind(this.fire, this, "moveend"), 200);
              } else {
                this.fire("moveend");
              }
            }
            return this.fire("resize", {
              oldSize,
              newSize
            });
          },
          // @section Methods for modifying map state
          // @method stop(): this
          // Stops the currently running `panTo` or `flyTo` animation, if any.
          stop: function() {
            this.setZoom(this._limitZoom(this._zoom));
            if (!this.options.zoomSnap) {
              this.fire("viewreset");
            }
            return this._stop();
          },
          // @section Geolocation methods
          // @method locate(options?: Locate options): this
          // Tries to locate the user using the Geolocation API, firing a [`locationfound`](#map-locationfound)
          // event with location data on success or a [`locationerror`](#map-locationerror) event on failure,
          // and optionally sets the map view to the user's location with respect to
          // detection accuracy (or to the world view if geolocation failed).
          // Note that, if your page doesn't use HTTPS, this method will fail in
          // modern browsers ([Chrome 50 and newer](https://sites.google.com/a/chromium.org/dev/Home/chromium-security/deprecating-powerful-features-on-insecure-origins))
          // See `Locate options` for more details.
          locate: function(options) {
            options = this._locateOptions = extend({
              timeout: 1e4,
              watch: false
              // setView: false
              // maxZoom: <Number>
              // maximumAge: 0
              // enableHighAccuracy: false
            }, options);
            if (!("geolocation" in navigator)) {
              this._handleGeolocationError({
                code: 0,
                message: "Geolocation not supported."
              });
              return this;
            }
            var onResponse = bind(this._handleGeolocationResponse, this), onError = bind(this._handleGeolocationError, this);
            if (options.watch) {
              this._locationWatchId = navigator.geolocation.watchPosition(onResponse, onError, options);
            } else {
              navigator.geolocation.getCurrentPosition(onResponse, onError, options);
            }
            return this;
          },
          // @method stopLocate(): this
          // Stops watching location previously initiated by `map.locate({watch: true})`
          // and aborts resetting the map view if map.locate was called with
          // `{setView: true}`.
          stopLocate: function() {
            if (navigator.geolocation && navigator.geolocation.clearWatch) {
              navigator.geolocation.clearWatch(this._locationWatchId);
            }
            if (this._locateOptions) {
              this._locateOptions.setView = false;
            }
            return this;
          },
          _handleGeolocationError: function(error) {
            if (!this._container._leaflet_id) {
              return;
            }
            var c = error.code, message = error.message || (c === 1 ? "permission denied" : c === 2 ? "position unavailable" : "timeout");
            if (this._locateOptions.setView && !this._loaded) {
              this.fitWorld();
            }
            this.fire("locationerror", {
              code: c,
              message: "Geolocation error: " + message + "."
            });
          },
          _handleGeolocationResponse: function(pos) {
            if (!this._container._leaflet_id) {
              return;
            }
            var lat = pos.coords.latitude, lng = pos.coords.longitude, latlng = new LatLng(lat, lng), bounds = latlng.toBounds(pos.coords.accuracy * 2), options = this._locateOptions;
            if (options.setView) {
              var zoom2 = this.getBoundsZoom(bounds);
              this.setView(latlng, options.maxZoom ? Math.min(zoom2, options.maxZoom) : zoom2);
            }
            var data = {
              latlng,
              bounds,
              timestamp: pos.timestamp
            };
            for (var i in pos.coords) {
              if (typeof pos.coords[i] === "number") {
                data[i] = pos.coords[i];
              }
            }
            this.fire("locationfound", data);
          },
          // TODO Appropriate docs section?
          // @section Other Methods
          // @method addHandler(name: String, HandlerClass: Function): this
          // Adds a new `Handler` to the map, given its name and constructor function.
          addHandler: function(name, HandlerClass) {
            if (!HandlerClass) {
              return this;
            }
            var handler = this[name] = new HandlerClass(this);
            this._handlers.push(handler);
            if (this.options[name]) {
              handler.enable();
            }
            return this;
          },
          // @method remove(): this
          // Destroys the map and clears all related event listeners.
          remove: function() {
            this._initEvents(true);
            if (this.options.maxBounds) {
              this.off("moveend", this._panInsideMaxBounds);
            }
            if (this._containerId !== this._container._leaflet_id) {
              throw new Error("Map container is being reused by another instance");
            }
            try {
              delete this._container._leaflet_id;
              delete this._containerId;
            } catch (e) {
              this._container._leaflet_id = void 0;
              this._containerId = void 0;
            }
            if (this._locationWatchId !== void 0) {
              this.stopLocate();
            }
            this._stop();
            remove(this._mapPane);
            if (this._clearControlPos) {
              this._clearControlPos();
            }
            if (this._resizeRequest) {
              cancelAnimFrame(this._resizeRequest);
              this._resizeRequest = null;
            }
            this._clearHandlers();
            if (this._loaded) {
              this.fire("unload");
            }
            var i;
            for (i in this._layers) {
              this._layers[i].remove();
            }
            for (i in this._panes) {
              remove(this._panes[i]);
            }
            this._layers = [];
            this._panes = [];
            delete this._mapPane;
            delete this._renderer;
            return this;
          },
          // @section Other Methods
          // @method createPane(name: String, container?: HTMLElement): HTMLElement
          // Creates a new [map pane](#map-pane) with the given name if it doesn't exist already,
          // then returns it. The pane is created as a child of `container`, or
          // as a child of the main map pane if not set.
          createPane: function(name, container) {
            var className = "leaflet-pane" + (name ? " leaflet-" + name.replace("Pane", "") + "-pane" : ""), pane = create$1("div", className, container || this._mapPane);
            if (name) {
              this._panes[name] = pane;
            }
            return pane;
          },
          // @section Methods for Getting Map State
          // @method getCenter(): LatLng
          // Returns the geographical center of the map view
          getCenter: function() {
            this._checkIfLoaded();
            if (this._lastCenter && !this._moved()) {
              return this._lastCenter.clone();
            }
            return this.layerPointToLatLng(this._getCenterLayerPoint());
          },
          // @method getZoom(): Number
          // Returns the current zoom level of the map view
          getZoom: function() {
            return this._zoom;
          },
          // @method getBounds(): LatLngBounds
          // Returns the geographical bounds visible in the current map view
          getBounds: function() {
            var bounds = this.getPixelBounds(), sw = this.unproject(bounds.getBottomLeft()), ne = this.unproject(bounds.getTopRight());
            return new LatLngBounds(sw, ne);
          },
          // @method getMinZoom(): Number
          // Returns the minimum zoom level of the map (if set in the `minZoom` option of the map or of any layers), or `0` by default.
          getMinZoom: function() {
            return this.options.minZoom === void 0 ? this._layersMinZoom || 0 : this.options.minZoom;
          },
          // @method getMaxZoom(): Number
          // Returns the maximum zoom level of the map (if set in the `maxZoom` option of the map or of any layers).
          getMaxZoom: function() {
            return this.options.maxZoom === void 0 ? this._layersMaxZoom === void 0 ? Infinity : this._layersMaxZoom : this.options.maxZoom;
          },
          // @method getBoundsZoom(bounds: LatLngBounds, inside?: Boolean, padding?: Point): Number
          // Returns the maximum zoom level on which the given bounds fit to the map
          // view in its entirety. If `inside` (optional) is set to `true`, the method
          // instead returns the minimum zoom level on which the map view fits into
          // the given bounds in its entirety.
          getBoundsZoom: function(bounds, inside, padding) {
            bounds = toLatLngBounds(bounds);
            padding = toPoint(padding || [0, 0]);
            var zoom2 = this.getZoom() || 0, min = this.getMinZoom(), max = this.getMaxZoom(), nw = bounds.getNorthWest(), se = bounds.getSouthEast(), size = this.getSize().subtract(padding), boundsSize = toBounds(this.project(se, zoom2), this.project(nw, zoom2)).getSize(), snap = Browser.any3d ? this.options.zoomSnap : 1, scalex = size.x / boundsSize.x, scaley = size.y / boundsSize.y, scale2 = inside ? Math.max(scalex, scaley) : Math.min(scalex, scaley);
            zoom2 = this.getScaleZoom(scale2, zoom2);
            if (snap) {
              zoom2 = Math.round(zoom2 / (snap / 100)) * (snap / 100);
              zoom2 = inside ? Math.ceil(zoom2 / snap) * snap : Math.floor(zoom2 / snap) * snap;
            }
            return Math.max(min, Math.min(max, zoom2));
          },
          // @method getSize(): Point
          // Returns the current size of the map container (in pixels).
          getSize: function() {
            if (!this._size || this._sizeChanged) {
              this._size = new Point(
                this._container.clientWidth || 0,
                this._container.clientHeight || 0
              );
              this._sizeChanged = false;
            }
            return this._size.clone();
          },
          // @method getPixelBounds(): Bounds
          // Returns the bounds of the current map view in projected pixel
          // coordinates (sometimes useful in layer and overlay implementations).
          getPixelBounds: function(center, zoom2) {
            var topLeftPoint = this._getTopLeftPoint(center, zoom2);
            return new Bounds(topLeftPoint, topLeftPoint.add(this.getSize()));
          },
          // TODO: Check semantics - isn't the pixel origin the 0,0 coord relative to
          // the map pane? "left point of the map layer" can be confusing, specially
          // since there can be negative offsets.
          // @method getPixelOrigin(): Point
          // Returns the projected pixel coordinates of the top left point of
          // the map layer (useful in custom layer and overlay implementations).
          getPixelOrigin: function() {
            this._checkIfLoaded();
            return this._pixelOrigin;
          },
          // @method getPixelWorldBounds(zoom?: Number): Bounds
          // Returns the world's bounds in pixel coordinates for zoom level `zoom`.
          // If `zoom` is omitted, the map's current zoom level is used.
          getPixelWorldBounds: function(zoom2) {
            return this.options.crs.getProjectedBounds(zoom2 === void 0 ? this.getZoom() : zoom2);
          },
          // @section Other Methods
          // @method getPane(pane: String|HTMLElement): HTMLElement
          // Returns a [map pane](#map-pane), given its name or its HTML element (its identity).
          getPane: function(pane) {
            return typeof pane === "string" ? this._panes[pane] : pane;
          },
          // @method getPanes(): Object
          // Returns a plain object containing the names of all [panes](#map-pane) as keys and
          // the panes as values.
          getPanes: function() {
            return this._panes;
          },
          // @method getContainer: HTMLElement
          // Returns the HTML element that contains the map.
          getContainer: function() {
            return this._container;
          },
          // @section Conversion Methods
          // @method getZoomScale(toZoom: Number, fromZoom: Number): Number
          // Returns the scale factor to be applied to a map transition from zoom level
          // `fromZoom` to `toZoom`. Used internally to help with zoom animations.
          getZoomScale: function(toZoom, fromZoom) {
            var crs = this.options.crs;
            fromZoom = fromZoom === void 0 ? this._zoom : fromZoom;
            return crs.scale(toZoom) / crs.scale(fromZoom);
          },
          // @method getScaleZoom(scale: Number, fromZoom: Number): Number
          // Returns the zoom level that the map would end up at, if it is at `fromZoom`
          // level and everything is scaled by a factor of `scale`. Inverse of
          // [`getZoomScale`](#map-getZoomScale).
          getScaleZoom: function(scale2, fromZoom) {
            var crs = this.options.crs;
            fromZoom = fromZoom === void 0 ? this._zoom : fromZoom;
            var zoom2 = crs.zoom(scale2 * crs.scale(fromZoom));
            return isNaN(zoom2) ? Infinity : zoom2;
          },
          // @method project(latlng: LatLng, zoom: Number): Point
          // Projects a geographical coordinate `LatLng` according to the projection
          // of the map's CRS, then scales it according to `zoom` and the CRS's
          // `Transformation`. The result is pixel coordinate relative to
          // the CRS origin.
          project: function(latlng, zoom2) {
            zoom2 = zoom2 === void 0 ? this._zoom : zoom2;
            return this.options.crs.latLngToPoint(toLatLng(latlng), zoom2);
          },
          // @method unproject(point: Point, zoom: Number): LatLng
          // Inverse of [`project`](#map-project).
          unproject: function(point, zoom2) {
            zoom2 = zoom2 === void 0 ? this._zoom : zoom2;
            return this.options.crs.pointToLatLng(toPoint(point), zoom2);
          },
          // @method layerPointToLatLng(point: Point): LatLng
          // Given a pixel coordinate relative to the [origin pixel](#map-getpixelorigin),
          // returns the corresponding geographical coordinate (for the current zoom level).
          layerPointToLatLng: function(point) {
            var projectedPoint = toPoint(point).add(this.getPixelOrigin());
            return this.unproject(projectedPoint);
          },
          // @method latLngToLayerPoint(latlng: LatLng): Point
          // Given a geographical coordinate, returns the corresponding pixel coordinate
          // relative to the [origin pixel](#map-getpixelorigin).
          latLngToLayerPoint: function(latlng) {
            var projectedPoint = this.project(toLatLng(latlng))._round();
            return projectedPoint._subtract(this.getPixelOrigin());
          },
          // @method wrapLatLng(latlng: LatLng): LatLng
          // Returns a `LatLng` where `lat` and `lng` has been wrapped according to the
          // map's CRS's `wrapLat` and `wrapLng` properties, if they are outside the
          // CRS's bounds.
          // By default this means longitude is wrapped around the dateline so its
          // value is between -180 and +180 degrees.
          wrapLatLng: function(latlng) {
            return this.options.crs.wrapLatLng(toLatLng(latlng));
          },
          // @method wrapLatLngBounds(bounds: LatLngBounds): LatLngBounds
          // Returns a `LatLngBounds` with the same size as the given one, ensuring that
          // its center is within the CRS's bounds.
          // By default this means the center longitude is wrapped around the dateline so its
          // value is between -180 and +180 degrees, and the majority of the bounds
          // overlaps the CRS's bounds.
          wrapLatLngBounds: function(latlng) {
            return this.options.crs.wrapLatLngBounds(toLatLngBounds(latlng));
          },
          // @method distance(latlng1: LatLng, latlng2: LatLng): Number
          // Returns the distance between two geographical coordinates according to
          // the map's CRS. By default this measures distance in meters.
          distance: function(latlng1, latlng2) {
            return this.options.crs.distance(toLatLng(latlng1), toLatLng(latlng2));
          },
          // @method containerPointToLayerPoint(point: Point): Point
          // Given a pixel coordinate relative to the map container, returns the corresponding
          // pixel coordinate relative to the [origin pixel](#map-getpixelorigin).
          containerPointToLayerPoint: function(point) {
            return toPoint(point).subtract(this._getMapPanePos());
          },
          // @method layerPointToContainerPoint(point: Point): Point
          // Given a pixel coordinate relative to the [origin pixel](#map-getpixelorigin),
          // returns the corresponding pixel coordinate relative to the map container.
          layerPointToContainerPoint: function(point) {
            return toPoint(point).add(this._getMapPanePos());
          },
          // @method containerPointToLatLng(point: Point): LatLng
          // Given a pixel coordinate relative to the map container, returns
          // the corresponding geographical coordinate (for the current zoom level).
          containerPointToLatLng: function(point) {
            var layerPoint = this.containerPointToLayerPoint(toPoint(point));
            return this.layerPointToLatLng(layerPoint);
          },
          // @method latLngToContainerPoint(latlng: LatLng): Point
          // Given a geographical coordinate, returns the corresponding pixel coordinate
          // relative to the map container.
          latLngToContainerPoint: function(latlng) {
            return this.layerPointToContainerPoint(this.latLngToLayerPoint(toLatLng(latlng)));
          },
          // @method mouseEventToContainerPoint(ev: MouseEvent): Point
          // Given a MouseEvent object, returns the pixel coordinate relative to the
          // map container where the event took place.
          mouseEventToContainerPoint: function(e) {
            return getMousePosition(e, this._container);
          },
          // @method mouseEventToLayerPoint(ev: MouseEvent): Point
          // Given a MouseEvent object, returns the pixel coordinate relative to
          // the [origin pixel](#map-getpixelorigin) where the event took place.
          mouseEventToLayerPoint: function(e) {
            return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(e));
          },
          // @method mouseEventToLatLng(ev: MouseEvent): LatLng
          // Given a MouseEvent object, returns geographical coordinate where the
          // event took place.
          mouseEventToLatLng: function(e) {
            return this.layerPointToLatLng(this.mouseEventToLayerPoint(e));
          },
          // map initialization methods
          _initContainer: function(id) {
            var container = this._container = get(id);
            if (!container) {
              throw new Error("Map container not found.");
            } else if (container._leaflet_id) {
              throw new Error("Map container is already initialized.");
            }
            on(container, "scroll", this._onScroll, this);
            this._containerId = stamp(container);
          },
          _initLayout: function() {
            var container = this._container;
            this._fadeAnimated = this.options.fadeAnimation && Browser.any3d;
            addClass(container, "leaflet-container" + (Browser.touch ? " leaflet-touch" : "") + (Browser.retina ? " leaflet-retina" : "") + (Browser.ielt9 ? " leaflet-oldie" : "") + (Browser.safari ? " leaflet-safari" : "") + (this._fadeAnimated ? " leaflet-fade-anim" : ""));
            var position = getStyle(container, "position");
            if (position !== "absolute" && position !== "relative" && position !== "fixed" && position !== "sticky") {
              container.style.position = "relative";
            }
            this._initPanes();
            if (this._initControlPos) {
              this._initControlPos();
            }
          },
          _initPanes: function() {
            var panes = this._panes = {};
            this._paneRenderers = {};
            this._mapPane = this.createPane("mapPane", this._container);
            setPosition(this._mapPane, new Point(0, 0));
            this.createPane("tilePane");
            this.createPane("overlayPane");
            this.createPane("shadowPane");
            this.createPane("markerPane");
            this.createPane("tooltipPane");
            this.createPane("popupPane");
            if (!this.options.markerZoomAnimation) {
              addClass(panes.markerPane, "leaflet-zoom-hide");
              addClass(panes.shadowPane, "leaflet-zoom-hide");
            }
          },
          // private methods that modify map state
          // @section Map state change events
          _resetView: function(center, zoom2, noMoveStart) {
            setPosition(this._mapPane, new Point(0, 0));
            var loading = !this._loaded;
            this._loaded = true;
            zoom2 = this._limitZoom(zoom2);
            this.fire("viewprereset");
            var zoomChanged = this._zoom !== zoom2;
            this._moveStart(zoomChanged, noMoveStart)._move(center, zoom2)._moveEnd(zoomChanged);
            this.fire("viewreset");
            if (loading) {
              this.fire("load");
            }
          },
          _moveStart: function(zoomChanged, noMoveStart) {
            if (zoomChanged) {
              this.fire("zoomstart");
            }
            if (!noMoveStart) {
              this.fire("movestart");
            }
            return this;
          },
          _move: function(center, zoom2, data, supressEvent) {
            if (zoom2 === void 0) {
              zoom2 = this._zoom;
            }
            var zoomChanged = this._zoom !== zoom2;
            this._zoom = zoom2;
            this._lastCenter = center;
            this._pixelOrigin = this._getNewPixelOrigin(center);
            if (!supressEvent) {
              if (zoomChanged || data && data.pinch) {
                this.fire("zoom", data);
              }
              this.fire("move", data);
            } else if (data && data.pinch) {
              this.fire("zoom", data);
            }
            return this;
          },
          _moveEnd: function(zoomChanged) {
            if (zoomChanged) {
              this.fire("zoomend");
            }
            return this.fire("moveend");
          },
          _stop: function() {
            cancelAnimFrame(this._flyToFrame);
            if (this._panAnim) {
              this._panAnim.stop();
            }
            return this;
          },
          _rawPanBy: function(offset) {
            setPosition(this._mapPane, this._getMapPanePos().subtract(offset));
          },
          _getZoomSpan: function() {
            return this.getMaxZoom() - this.getMinZoom();
          },
          _panInsideMaxBounds: function() {
            if (!this._enforcingBounds) {
              this.panInsideBounds(this.options.maxBounds);
            }
          },
          _checkIfLoaded: function() {
            if (!this._loaded) {
              throw new Error("Set map center and zoom first.");
            }
          },
          // DOM event handling
          // @section Interaction events
          _initEvents: function(remove2) {
            this._targets = {};
            this._targets[stamp(this._container)] = this;
            var onOff = remove2 ? off : on;
            onOff(this._container, "click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup", this._handleDOMEvent, this);
            if (this.options.trackResize) {
              onOff(window, "resize", this._onResize, this);
            }
            if (Browser.any3d && this.options.transform3DLimit) {
              (remove2 ? this.off : this.on).call(this, "moveend", this._onMoveEnd);
            }
          },
          _onResize: function() {
            cancelAnimFrame(this._resizeRequest);
            this._resizeRequest = requestAnimFrame(
              function() {
                this.invalidateSize({ debounceMoveend: true });
              },
              this
            );
          },
          _onScroll: function() {
            this._container.scrollTop = 0;
            this._container.scrollLeft = 0;
          },
          _onMoveEnd: function() {
            var pos = this._getMapPanePos();
            if (Math.max(Math.abs(pos.x), Math.abs(pos.y)) >= this.options.transform3DLimit) {
              this._resetView(this.getCenter(), this.getZoom());
            }
          },
          _findEventTargets: function(e, type) {
            var targets = [], target, isHover = type === "mouseout" || type === "mouseover", src = e.target || e.srcElement, dragging = false;
            while (src) {
              target = this._targets[stamp(src)];
              if (target && (type === "click" || type === "preclick") && this._draggableMoved(target)) {
                dragging = true;
                break;
              }
              if (target && target.listens(type, true)) {
                if (isHover && !isExternalTarget(src, e)) {
                  break;
                }
                targets.push(target);
                if (isHover) {
                  break;
                }
              }
              if (src === this._container) {
                break;
              }
              src = src.parentNode;
            }
            if (!targets.length && !dragging && !isHover && this.listens(type, true)) {
              targets = [this];
            }
            return targets;
          },
          _isClickDisabled: function(el) {
            while (el && el !== this._container) {
              if (el["_leaflet_disable_click"]) {
                return true;
              }
              el = el.parentNode;
            }
          },
          _handleDOMEvent: function(e) {
            var el = e.target || e.srcElement;
            if (!this._loaded || el["_leaflet_disable_events"] || e.type === "click" && this._isClickDisabled(el)) {
              return;
            }
            var type = e.type;
            if (type === "mousedown") {
              preventOutline(el);
            }
            this._fireDOMEvent(e, type);
          },
          _mouseEvents: ["click", "dblclick", "mouseover", "mouseout", "contextmenu"],
          _fireDOMEvent: function(e, type, canvasTargets) {
            if (e.type === "click") {
              var synth = extend({}, e);
              synth.type = "preclick";
              this._fireDOMEvent(synth, synth.type, canvasTargets);
            }
            var targets = this._findEventTargets(e, type);
            if (canvasTargets) {
              var filtered = [];
              for (var i = 0; i < canvasTargets.length; i++) {
                if (canvasTargets[i].listens(type, true)) {
                  filtered.push(canvasTargets[i]);
                }
              }
              targets = filtered.concat(targets);
            }
            if (!targets.length) {
              return;
            }
            if (type === "contextmenu") {
              preventDefault(e);
            }
            var target = targets[0];
            var data = {
              originalEvent: e
            };
            if (e.type !== "keypress" && e.type !== "keydown" && e.type !== "keyup") {
              var isMarker = target.getLatLng && (!target._radius || target._radius <= 10);
              data.containerPoint = isMarker ? this.latLngToContainerPoint(target.getLatLng()) : this.mouseEventToContainerPoint(e);
              data.layerPoint = this.containerPointToLayerPoint(data.containerPoint);
              data.latlng = isMarker ? target.getLatLng() : this.layerPointToLatLng(data.layerPoint);
            }
            for (i = 0; i < targets.length; i++) {
              targets[i].fire(type, data, true);
              if (data.originalEvent._stopped || targets[i].options.bubblingMouseEvents === false && indexOf(this._mouseEvents, type) !== -1) {
                return;
              }
            }
          },
          _draggableMoved: function(obj) {
            obj = obj.dragging && obj.dragging.enabled() ? obj : this;
            return obj.dragging && obj.dragging.moved() || this.boxZoom && this.boxZoom.moved();
          },
          _clearHandlers: function() {
            for (var i = 0, len = this._handlers.length; i < len; i++) {
              this._handlers[i].disable();
            }
          },
          // @section Other Methods
          // @method whenReady(fn: Function, context?: Object): this
          // Runs the given function `fn` when the map gets initialized with
          // a view (center and zoom) and at least one layer, or immediately
          // if it's already initialized, optionally passing a function context.
          whenReady: function(callback, context) {
            if (this._loaded) {
              callback.call(context || this, { target: this });
            } else {
              this.on("load", callback, context);
            }
            return this;
          },
          // private methods for getting map state
          _getMapPanePos: function() {
            return getPosition(this._mapPane) || new Point(0, 0);
          },
          _moved: function() {
            var pos = this._getMapPanePos();
            return pos && !pos.equals([0, 0]);
          },
          _getTopLeftPoint: function(center, zoom2) {
            var pixelOrigin = center && zoom2 !== void 0 ? this._getNewPixelOrigin(center, zoom2) : this.getPixelOrigin();
            return pixelOrigin.subtract(this._getMapPanePos());
          },
          _getNewPixelOrigin: function(center, zoom2) {
            var viewHalf = this.getSize()._divideBy(2);
            return this.project(center, zoom2)._subtract(viewHalf)._add(this._getMapPanePos())._round();
          },
          _latLngToNewLayerPoint: function(latlng, zoom2, center) {
            var topLeft = this._getNewPixelOrigin(center, zoom2);
            return this.project(latlng, zoom2)._subtract(topLeft);
          },
          _latLngBoundsToNewLayerBounds: function(latLngBounds, zoom2, center) {
            var topLeft = this._getNewPixelOrigin(center, zoom2);
            return toBounds([
              this.project(latLngBounds.getSouthWest(), zoom2)._subtract(topLeft),
              this.project(latLngBounds.getNorthWest(), zoom2)._subtract(topLeft),
              this.project(latLngBounds.getSouthEast(), zoom2)._subtract(topLeft),
              this.project(latLngBounds.getNorthEast(), zoom2)._subtract(topLeft)
            ]);
          },
          // layer point of the current center
          _getCenterLayerPoint: function() {
            return this.containerPointToLayerPoint(this.getSize()._divideBy(2));
          },
          // offset of the specified place to the current center in pixels
          _getCenterOffset: function(latlng) {
            return this.latLngToLayerPoint(latlng).subtract(this._getCenterLayerPoint());
          },
          // adjust center for view to get inside bounds
          _limitCenter: function(center, zoom2, bounds) {
            if (!bounds) {
              return center;
            }
            var centerPoint = this.project(center, zoom2), viewHalf = this.getSize().divideBy(2), viewBounds = new Bounds(centerPoint.subtract(viewHalf), centerPoint.add(viewHalf)), offset = this._getBoundsOffset(viewBounds, bounds, zoom2);
            if (Math.abs(offset.x) <= 1 && Math.abs(offset.y) <= 1) {
              return center;
            }
            return this.unproject(centerPoint.add(offset), zoom2);
          },
          // adjust offset for view to get inside bounds
          _limitOffset: function(offset, bounds) {
            if (!bounds) {
              return offset;
            }
            var viewBounds = this.getPixelBounds(), newBounds = new Bounds(viewBounds.min.add(offset), viewBounds.max.add(offset));
            return offset.add(this._getBoundsOffset(newBounds, bounds));
          },
          // returns offset needed for pxBounds to get inside maxBounds at a specified zoom
          _getBoundsOffset: function(pxBounds, maxBounds, zoom2) {
            var projectedMaxBounds = toBounds(
              this.project(maxBounds.getNorthEast(), zoom2),
              this.project(maxBounds.getSouthWest(), zoom2)
            ), minOffset = projectedMaxBounds.min.subtract(pxBounds.min), maxOffset = projectedMaxBounds.max.subtract(pxBounds.max), dx = this._rebound(minOffset.x, -maxOffset.x), dy = this._rebound(minOffset.y, -maxOffset.y);
            return new Point(dx, dy);
          },
          _rebound: function(left, right) {
            return left + right > 0 ? Math.round(left - right) / 2 : Math.max(0, Math.ceil(left)) - Math.max(0, Math.floor(right));
          },
          _limitZoom: function(zoom2) {
            var min = this.getMinZoom(), max = this.getMaxZoom(), snap = Browser.any3d ? this.options.zoomSnap : 1;
            if (snap) {
              zoom2 = Math.round(zoom2 / snap) * snap;
            }
            return Math.max(min, Math.min(max, zoom2));
          },
          _onPanTransitionStep: function() {
            this.fire("move");
          },
          _onPanTransitionEnd: function() {
            removeClass(this._mapPane, "leaflet-pan-anim");
            this.fire("moveend");
          },
          _tryAnimatedPan: function(center, options) {
            var offset = this._getCenterOffset(center)._trunc();
            if ((options && options.animate) !== true && !this.getSize().contains(offset)) {
              return false;
            }
            this.panBy(offset, options);
            return true;
          },
          _createAnimProxy: function() {
            var proxy = this._proxy = create$1("div", "leaflet-proxy leaflet-zoom-animated");
            this._panes.mapPane.appendChild(proxy);
            this.on("zoomanim", function(e) {
              var prop = TRANSFORM, transform = this._proxy.style[prop];
              setTransform(this._proxy, this.project(e.center, e.zoom), this.getZoomScale(e.zoom, 1));
              if (transform === this._proxy.style[prop] && this._animatingZoom) {
                this._onZoomTransitionEnd();
              }
            }, this);
            this.on("load moveend", this._animMoveEnd, this);
            this._on("unload", this._destroyAnimProxy, this);
          },
          _destroyAnimProxy: function() {
            remove(this._proxy);
            this.off("load moveend", this._animMoveEnd, this);
            delete this._proxy;
          },
          _animMoveEnd: function() {
            var c = this.getCenter(), z = this.getZoom();
            setTransform(this._proxy, this.project(c, z), this.getZoomScale(z, 1));
          },
          _catchTransitionEnd: function(e) {
            if (this._animatingZoom && e.propertyName.indexOf("transform") >= 0) {
              this._onZoomTransitionEnd();
            }
          },
          _nothingToAnimate: function() {
            return !this._container.getElementsByClassName("leaflet-zoom-animated").length;
          },
          _tryAnimatedZoom: function(center, zoom2, options) {
            if (this._animatingZoom) {
              return true;
            }
            options = options || {};
            if (!this._zoomAnimated || options.animate === false || this._nothingToAnimate() || Math.abs(zoom2 - this._zoom) > this.options.zoomAnimationThreshold) {
              return false;
            }
            var scale2 = this.getZoomScale(zoom2), offset = this._getCenterOffset(center)._divideBy(1 - 1 / scale2);
            if (options.animate !== true && !this.getSize().contains(offset)) {
              return false;
            }
            requestAnimFrame(function() {
              this._moveStart(true, options.noMoveStart || false)._animateZoom(center, zoom2, true);
            }, this);
            return true;
          },
          _animateZoom: function(center, zoom2, startAnim, noUpdate) {
            if (!this._mapPane) {
              return;
            }
            if (startAnim) {
              this._animatingZoom = true;
              this._animateToCenter = center;
              this._animateToZoom = zoom2;
              addClass(this._mapPane, "leaflet-zoom-anim");
            }
            this.fire("zoomanim", {
              center,
              zoom: zoom2,
              noUpdate
            });
            if (!this._tempFireZoomEvent) {
              this._tempFireZoomEvent = this._zoom !== this._animateToZoom;
            }
            this._move(this._animateToCenter, this._animateToZoom, void 0, true);
            setTimeout(bind(this._onZoomTransitionEnd, this), 250);
          },
          _onZoomTransitionEnd: function() {
            if (!this._animatingZoom) {
              return;
            }
            if (this._mapPane) {
              removeClass(this._mapPane, "leaflet-zoom-anim");
            }
            this._animatingZoom = false;
            this._move(this._animateToCenter, this._animateToZoom, void 0, true);
            if (this._tempFireZoomEvent) {
              this.fire("zoom");
            }
            delete this._tempFireZoomEvent;
            this.fire("move");
            this._moveEnd(true);
          }
        });
        function createMap(id, options) {
          return new Map(id, options);
        }
        var Control = Class.extend({
          // @section
          // @aka Control Options
          options: {
            // @option position: String = 'topright'
            // The position of the control (one of the map corners). Possible values are `'topleft'`,
            // `'topright'`, `'bottomleft'` or `'bottomright'`
            position: "topright"
          },
          initialize: function(options) {
            setOptions(this, options);
          },
          /* @section
           * Classes extending L.Control will inherit the following methods:
           *
           * @method getPosition: string
           * Returns the position of the control.
           */
          getPosition: function() {
            return this.options.position;
          },
          // @method setPosition(position: string): this
          // Sets the position of the control.
          setPosition: function(position) {
            var map = this._map;
            if (map) {
              map.removeControl(this);
            }
            this.options.position = position;
            if (map) {
              map.addControl(this);
            }
            return this;
          },
          // @method getContainer: HTMLElement
          // Returns the HTMLElement that contains the control.
          getContainer: function() {
            return this._container;
          },
          // @method addTo(map: Map): this
          // Adds the control to the given map.
          addTo: function(map) {
            this.remove();
            this._map = map;
            var container = this._container = this.onAdd(map), pos = this.getPosition(), corner = map._controlCorners[pos];
            addClass(container, "leaflet-control");
            if (pos.indexOf("bottom") !== -1) {
              corner.insertBefore(container, corner.firstChild);
            } else {
              corner.appendChild(container);
            }
            this._map.on("unload", this.remove, this);
            return this;
          },
          // @method remove: this
          // Removes the control from the map it is currently active on.
          remove: function() {
            if (!this._map) {
              return this;
            }
            remove(this._container);
            if (this.onRemove) {
              this.onRemove(this._map);
            }
            this._map.off("unload", this.remove, this);
            this._map = null;
            return this;
          },
          _refocusOnMap: function(e) {
            if (this._map && e && e.screenX > 0 && e.screenY > 0) {
              this._map.getContainer().focus();
            }
          }
        });
        var control = function(options) {
          return new Control(options);
        };
        Map.include({
          // @method addControl(control: Control): this
          // Adds the given control to the map
          addControl: function(control2) {
            control2.addTo(this);
            return this;
          },
          // @method removeControl(control: Control): this
          // Removes the given control from the map
          removeControl: function(control2) {
            control2.remove();
            return this;
          },
          _initControlPos: function() {
            var corners = this._controlCorners = {}, l = "leaflet-", container = this._controlContainer = create$1("div", l + "control-container", this._container);
            function createCorner(vSide, hSide) {
              var className = l + vSide + " " + l + hSide;
              corners[vSide + hSide] = create$1("div", className, container);
            }
            createCorner("top", "left");
            createCorner("top", "right");
            createCorner("bottom", "left");
            createCorner("bottom", "right");
          },
          _clearControlPos: function() {
            for (var i in this._controlCorners) {
              remove(this._controlCorners[i]);
            }
            remove(this._controlContainer);
            delete this._controlCorners;
            delete this._controlContainer;
          }
        });
        var Layers = Control.extend({
          // @section
          // @aka Control.Layers options
          options: {
            // @option collapsed: Boolean = true
            // If `true`, the control will be collapsed into an icon and expanded on mouse hover, touch, or keyboard activation.
            collapsed: true,
            position: "topright",
            // @option autoZIndex: Boolean = true
            // If `true`, the control will assign zIndexes in increasing order to all of its layers so that the order is preserved when switching them on/off.
            autoZIndex: true,
            // @option hideSingleBase: Boolean = false
            // If `true`, the base layers in the control will be hidden when there is only one.
            hideSingleBase: false,
            // @option sortLayers: Boolean = false
            // Whether to sort the layers. When `false`, layers will keep the order
            // in which they were added to the control.
            sortLayers: false,
            // @option sortFunction: Function = *
            // A [compare function](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
            // that will be used for sorting the layers, when `sortLayers` is `true`.
            // The function receives both the `L.Layer` instances and their names, as in
            // `sortFunction(layerA, layerB, nameA, nameB)`.
            // By default, it sorts layers alphabetically by their name.
            sortFunction: function(layerA, layerB, nameA, nameB) {
              return nameA < nameB ? -1 : nameB < nameA ? 1 : 0;
            }
          },
          initialize: function(baseLayers, overlays, options) {
            setOptions(this, options);
            this._layerControlInputs = [];
            this._layers = [];
            this._lastZIndex = 0;
            this._handlingClick = false;
            this._preventClick = false;
            for (var i in baseLayers) {
              this._addLayer(baseLayers[i], i);
            }
            for (i in overlays) {
              this._addLayer(overlays[i], i, true);
            }
          },
          onAdd: function(map) {
            this._initLayout();
            this._update();
            this._map = map;
            map.on("zoomend", this._checkDisabledLayers, this);
            for (var i = 0; i < this._layers.length; i++) {
              this._layers[i].layer.on("add remove", this._onLayerChange, this);
            }
            return this._container;
          },
          addTo: function(map) {
            Control.prototype.addTo.call(this, map);
            return this._expandIfNotCollapsed();
          },
          onRemove: function() {
            this._map.off("zoomend", this._checkDisabledLayers, this);
            for (var i = 0; i < this._layers.length; i++) {
              this._layers[i].layer.off("add remove", this._onLayerChange, this);
            }
          },
          // @method addBaseLayer(layer: Layer, name: String): this
          // Adds a base layer (radio button entry) with the given name to the control.
          addBaseLayer: function(layer, name) {
            this._addLayer(layer, name);
            return this._map ? this._update() : this;
          },
          // @method addOverlay(layer: Layer, name: String): this
          // Adds an overlay (checkbox entry) with the given name to the control.
          addOverlay: function(layer, name) {
            this._addLayer(layer, name, true);
            return this._map ? this._update() : this;
          },
          // @method removeLayer(layer: Layer): this
          // Remove the given layer from the control.
          removeLayer: function(layer) {
            layer.off("add remove", this._onLayerChange, this);
            var obj = this._getLayer(stamp(layer));
            if (obj) {
              this._layers.splice(this._layers.indexOf(obj), 1);
            }
            return this._map ? this._update() : this;
          },
          // @method expand(): this
          // Expand the control container if collapsed.
          expand: function() {
            addClass(this._container, "leaflet-control-layers-expanded");
            this._section.style.height = null;
            var acceptableHeight = this._map.getSize().y - (this._container.offsetTop + 50);
            if (acceptableHeight < this._section.clientHeight) {
              addClass(this._section, "leaflet-control-layers-scrollbar");
              this._section.style.height = acceptableHeight + "px";
            } else {
              removeClass(this._section, "leaflet-control-layers-scrollbar");
            }
            this._checkDisabledLayers();
            return this;
          },
          // @method collapse(): this
          // Collapse the control container if expanded.
          collapse: function() {
            removeClass(this._container, "leaflet-control-layers-expanded");
            return this;
          },
          _initLayout: function() {
            var className = "leaflet-control-layers", container = this._container = create$1("div", className), collapsed = this.options.collapsed;
            container.setAttribute("aria-haspopup", true);
            disableClickPropagation(container);
            disableScrollPropagation(container);
            var section = this._section = create$1("section", className + "-list");
            if (collapsed) {
              this._map.on("click", this.collapse, this);
              on(container, {
                mouseenter: this._expandSafely,
                mouseleave: this.collapse
              }, this);
            }
            var link = this._layersLink = create$1("a", className + "-toggle", container);
            link.href = "#";
            link.title = "Layers";
            link.setAttribute("role", "button");
            on(link, {
              keydown: function(e) {
                if (e.keyCode === 13) {
                  this._expandSafely();
                }
              },
              // Certain screen readers intercept the key event and instead send a click event
              click: function(e) {
                preventDefault(e);
                this._expandSafely();
              }
            }, this);
            if (!collapsed) {
              this.expand();
            }
            this._baseLayersList = create$1("div", className + "-base", section);
            this._separator = create$1("div", className + "-separator", section);
            this._overlaysList = create$1("div", className + "-overlays", section);
            container.appendChild(section);
          },
          _getLayer: function(id) {
            for (var i = 0; i < this._layers.length; i++) {
              if (this._layers[i] && stamp(this._layers[i].layer) === id) {
                return this._layers[i];
              }
            }
          },
          _addLayer: function(layer, name, overlay) {
            if (this._map) {
              layer.on("add remove", this._onLayerChange, this);
            }
            this._layers.push({
              layer,
              name,
              overlay
            });
            if (this.options.sortLayers) {
              this._layers.sort(bind(function(a, b) {
                return this.options.sortFunction(a.layer, b.layer, a.name, b.name);
              }, this));
            }
            if (this.options.autoZIndex && layer.setZIndex) {
              this._lastZIndex++;
              layer.setZIndex(this._lastZIndex);
            }
            this._expandIfNotCollapsed();
          },
          _update: function() {
            if (!this._container) {
              return this;
            }
            empty(this._baseLayersList);
            empty(this._overlaysList);
            this._layerControlInputs = [];
            var baseLayersPresent, overlaysPresent, i, obj, baseLayersCount = 0;
            for (i = 0; i < this._layers.length; i++) {
              obj = this._layers[i];
              this._addItem(obj);
              overlaysPresent = overlaysPresent || obj.overlay;
              baseLayersPresent = baseLayersPresent || !obj.overlay;
              baseLayersCount += !obj.overlay ? 1 : 0;
            }
            if (this.options.hideSingleBase) {
              baseLayersPresent = baseLayersPresent && baseLayersCount > 1;
              this._baseLayersList.style.display = baseLayersPresent ? "" : "none";
            }
            this._separator.style.display = overlaysPresent && baseLayersPresent ? "" : "none";
            return this;
          },
          _onLayerChange: function(e) {
            if (!this._handlingClick) {
              this._update();
            }
            var obj = this._getLayer(stamp(e.target));
            var type = obj.overlay ? e.type === "add" ? "overlayadd" : "overlayremove" : e.type === "add" ? "baselayerchange" : null;
            if (type) {
              this._map.fire(type, obj);
            }
          },
          // IE7 bugs out if you create a radio dynamically, so you have to do it this hacky way (see https://stackoverflow.com/a/119079)
          _createRadioElement: function(name, checked) {
            var radioHtml = '<input type="radio" class="leaflet-control-layers-selector" name="' + name + '"' + (checked ? ' checked="checked"' : "") + "/>";
            var radioFragment = document.createElement("div");
            radioFragment.innerHTML = radioHtml;
            return radioFragment.firstChild;
          },
          _addItem: function(obj) {
            var label = document.createElement("label"), checked = this._map.hasLayer(obj.layer), input;
            if (obj.overlay) {
              input = document.createElement("input");
              input.type = "checkbox";
              input.className = "leaflet-control-layers-selector";
              input.defaultChecked = checked;
            } else {
              input = this._createRadioElement("leaflet-base-layers_" + stamp(this), checked);
            }
            this._layerControlInputs.push(input);
            input.layerId = stamp(obj.layer);
            on(input, "click", this._onInputClick, this);
            var name = document.createElement("span");
            name.innerHTML = " " + obj.name;
            var holder = document.createElement("span");
            label.appendChild(holder);
            holder.appendChild(input);
            holder.appendChild(name);
            var container = obj.overlay ? this._overlaysList : this._baseLayersList;
            container.appendChild(label);
            this._checkDisabledLayers();
            return label;
          },
          _onInputClick: function() {
            if (this._preventClick) {
              return;
            }
            var inputs = this._layerControlInputs, input, layer;
            var addedLayers = [], removedLayers = [];
            this._handlingClick = true;
            for (var i = inputs.length - 1; i >= 0; i--) {
              input = inputs[i];
              layer = this._getLayer(input.layerId).layer;
              if (input.checked) {
                addedLayers.push(layer);
              } else if (!input.checked) {
                removedLayers.push(layer);
              }
            }
            for (i = 0; i < removedLayers.length; i++) {
              if (this._map.hasLayer(removedLayers[i])) {
                this._map.removeLayer(removedLayers[i]);
              }
            }
            for (i = 0; i < addedLayers.length; i++) {
              if (!this._map.hasLayer(addedLayers[i])) {
                this._map.addLayer(addedLayers[i]);
              }
            }
            this._handlingClick = false;
            this._refocusOnMap();
          },
          _checkDisabledLayers: function() {
            var inputs = this._layerControlInputs, input, layer, zoom2 = this._map.getZoom();
            for (var i = inputs.length - 1; i >= 0; i--) {
              input = inputs[i];
              layer = this._getLayer(input.layerId).layer;
              input.disabled = layer.options.minZoom !== void 0 && zoom2 < layer.options.minZoom || layer.options.maxZoom !== void 0 && zoom2 > layer.options.maxZoom;
            }
          },
          _expandIfNotCollapsed: function() {
            if (this._map && !this.options.collapsed) {
              this.expand();
            }
            return this;
          },
          _expandSafely: function() {
            var section = this._section;
            this._preventClick = true;
            on(section, "click", preventDefault);
            this.expand();
            var that = this;
            setTimeout(function() {
              off(section, "click", preventDefault);
              that._preventClick = false;
            });
          }
        });
        var layers = function(baseLayers, overlays, options) {
          return new Layers(baseLayers, overlays, options);
        };
        var Zoom = Control.extend({
          // @section
          // @aka Control.Zoom options
          options: {
            position: "topleft",
            // @option zoomInText: String = '<span aria-hidden="true">+</span>'
            // The text set on the 'zoom in' button.
            zoomInText: '<span aria-hidden="true">+</span>',
            // @option zoomInTitle: String = 'Zoom in'
            // The title set on the 'zoom in' button.
            zoomInTitle: "Zoom in",
            // @option zoomOutText: String = '<span aria-hidden="true">&#x2212;</span>'
            // The text set on the 'zoom out' button.
            zoomOutText: '<span aria-hidden="true">&#x2212;</span>',
            // @option zoomOutTitle: String = 'Zoom out'
            // The title set on the 'zoom out' button.
            zoomOutTitle: "Zoom out"
          },
          onAdd: function(map) {
            var zoomName = "leaflet-control-zoom", container = create$1("div", zoomName + " leaflet-bar"), options = this.options;
            this._zoomInButton = this._createButton(
              options.zoomInText,
              options.zoomInTitle,
              zoomName + "-in",
              container,
              this._zoomIn
            );
            this._zoomOutButton = this._createButton(
              options.zoomOutText,
              options.zoomOutTitle,
              zoomName + "-out",
              container,
              this._zoomOut
            );
            this._updateDisabled();
            map.on("zoomend zoomlevelschange", this._updateDisabled, this);
            return container;
          },
          onRemove: function(map) {
            map.off("zoomend zoomlevelschange", this._updateDisabled, this);
          },
          disable: function() {
            this._disabled = true;
            this._updateDisabled();
            return this;
          },
          enable: function() {
            this._disabled = false;
            this._updateDisabled();
            return this;
          },
          _zoomIn: function(e) {
            if (!this._disabled && this._map._zoom < this._map.getMaxZoom()) {
              this._map.zoomIn(this._map.options.zoomDelta * (e.shiftKey ? 3 : 1));
            }
          },
          _zoomOut: function(e) {
            if (!this._disabled && this._map._zoom > this._map.getMinZoom()) {
              this._map.zoomOut(this._map.options.zoomDelta * (e.shiftKey ? 3 : 1));
            }
          },
          _createButton: function(html, title, className, container, fn) {
            var link = create$1("a", className, container);
            link.innerHTML = html;
            link.href = "#";
            link.title = title;
            link.setAttribute("role", "button");
            link.setAttribute("aria-label", title);
            disableClickPropagation(link);
            on(link, "click", stop);
            on(link, "click", fn, this);
            on(link, "click", this._refocusOnMap, this);
            return link;
          },
          _updateDisabled: function() {
            var map = this._map, className = "leaflet-disabled";
            removeClass(this._zoomInButton, className);
            removeClass(this._zoomOutButton, className);
            this._zoomInButton.setAttribute("aria-disabled", "false");
            this._zoomOutButton.setAttribute("aria-disabled", "false");
            if (this._disabled || map._zoom === map.getMinZoom()) {
              addClass(this._zoomOutButton, className);
              this._zoomOutButton.setAttribute("aria-disabled", "true");
            }
            if (this._disabled || map._zoom === map.getMaxZoom()) {
              addClass(this._zoomInButton, className);
              this._zoomInButton.setAttribute("aria-disabled", "true");
            }
          }
        });
        Map.mergeOptions({
          zoomControl: true
        });
        Map.addInitHook(function() {
          if (this.options.zoomControl) {
            this.zoomControl = new Zoom();
            this.addControl(this.zoomControl);
          }
        });
        var zoom = function(options) {
          return new Zoom(options);
        };
        var Scale = Control.extend({
          // @section
          // @aka Control.Scale options
          options: {
            position: "bottomleft",
            // @option maxWidth: Number = 100
            // Maximum width of the control in pixels. The width is set dynamically to show round values (e.g. 100, 200, 500).
            maxWidth: 100,
            // @option metric: Boolean = True
            // Whether to show the metric scale line (m/km).
            metric: true,
            // @option imperial: Boolean = True
            // Whether to show the imperial scale line (mi/ft).
            imperial: true
            // @option updateWhenIdle: Boolean = false
            // If `true`, the control is updated on [`moveend`](#map-moveend), otherwise it's always up-to-date (updated on [`move`](#map-move)).
          },
          onAdd: function(map) {
            var className = "leaflet-control-scale", container = create$1("div", className), options = this.options;
            this._addScales(options, className + "-line", container);
            map.on(options.updateWhenIdle ? "moveend" : "move", this._update, this);
            map.whenReady(this._update, this);
            return container;
          },
          onRemove: function(map) {
            map.off(this.options.updateWhenIdle ? "moveend" : "move", this._update, this);
          },
          _addScales: function(options, className, container) {
            if (options.metric) {
              this._mScale = create$1("div", className, container);
            }
            if (options.imperial) {
              this._iScale = create$1("div", className, container);
            }
          },
          _update: function() {
            var map = this._map, y = map.getSize().y / 2;
            var maxMeters = map.distance(
              map.containerPointToLatLng([0, y]),
              map.containerPointToLatLng([this.options.maxWidth, y])
            );
            this._updateScales(maxMeters);
          },
          _updateScales: function(maxMeters) {
            if (this.options.metric && maxMeters) {
              this._updateMetric(maxMeters);
            }
            if (this.options.imperial && maxMeters) {
              this._updateImperial(maxMeters);
            }
          },
          _updateMetric: function(maxMeters) {
            var meters = this._getRoundNum(maxMeters), label = meters < 1e3 ? meters + " m" : meters / 1e3 + " km";
            this._updateScale(this._mScale, label, meters / maxMeters);
          },
          _updateImperial: function(maxMeters) {
            var maxFeet = maxMeters * 3.2808399, maxMiles, miles, feet;
            if (maxFeet > 5280) {
              maxMiles = maxFeet / 5280;
              miles = this._getRoundNum(maxMiles);
              this._updateScale(this._iScale, miles + " mi", miles / maxMiles);
            } else {
              feet = this._getRoundNum(maxFeet);
              this._updateScale(this._iScale, feet + " ft", feet / maxFeet);
            }
          },
          _updateScale: function(scale2, text, ratio) {
            scale2.style.width = Math.round(this.options.maxWidth * ratio) + "px";
            scale2.innerHTML = text;
          },
          _getRoundNum: function(num) {
            var pow10 = Math.pow(10, (Math.floor(num) + "").length - 1), d = num / pow10;
            d = d >= 10 ? 10 : d >= 5 ? 5 : d >= 3 ? 3 : d >= 2 ? 2 : 1;
            return pow10 * d;
          }
        });
        var scale = function(options) {
          return new Scale(options);
        };
        var ukrainianFlag = '<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg>';
        var Attribution = Control.extend({
          // @section
          // @aka Control.Attribution options
          options: {
            position: "bottomright",
            // @option prefix: String|false = 'Leaflet'
            // The HTML text shown before the attributions. Pass `false` to disable.
            prefix: '<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">' + (Browser.inlineSvg ? ukrainianFlag + " " : "") + "Leaflet</a>"
          },
          initialize: function(options) {
            setOptions(this, options);
            this._attributions = {};
          },
          onAdd: function(map) {
            map.attributionControl = this;
            this._container = create$1("div", "leaflet-control-attribution");
            disableClickPropagation(this._container);
            for (var i in map._layers) {
              if (map._layers[i].getAttribution) {
                this.addAttribution(map._layers[i].getAttribution());
              }
            }
            this._update();
            map.on("layeradd", this._addAttribution, this);
            return this._container;
          },
          onRemove: function(map) {
            map.off("layeradd", this._addAttribution, this);
          },
          _addAttribution: function(ev) {
            if (ev.layer.getAttribution) {
              this.addAttribution(ev.layer.getAttribution());
              ev.layer.once("remove", function() {
                this.removeAttribution(ev.layer.getAttribution());
              }, this);
            }
          },
          // @method setPrefix(prefix: String|false): this
          // The HTML text shown before the attributions. Pass `false` to disable.
          setPrefix: function(prefix) {
            this.options.prefix = prefix;
            this._update();
            return this;
          },
          // @method addAttribution(text: String): this
          // Adds an attribution text (e.g. `'&copy; OpenStreetMap contributors'`).
          addAttribution: function(text) {
            if (!text) {
              return this;
            }
            if (!this._attributions[text]) {
              this._attributions[text] = 0;
            }
            this._attributions[text]++;
            this._update();
            return this;
          },
          // @method removeAttribution(text: String): this
          // Removes an attribution text.
          removeAttribution: function(text) {
            if (!text) {
              return this;
            }
            if (this._attributions[text]) {
              this._attributions[text]--;
              this._update();
            }
            return this;
          },
          _update: function() {
            if (!this._map) {
              return;
            }
            var attribs = [];
            for (var i in this._attributions) {
              if (this._attributions[i]) {
                attribs.push(i);
              }
            }
            var prefixAndAttribs = [];
            if (this.options.prefix) {
              prefixAndAttribs.push(this.options.prefix);
            }
            if (attribs.length) {
              prefixAndAttribs.push(attribs.join(", "));
            }
            this._container.innerHTML = prefixAndAttribs.join(' <span aria-hidden="true">|</span> ');
          }
        });
        Map.mergeOptions({
          attributionControl: true
        });
        Map.addInitHook(function() {
          if (this.options.attributionControl) {
            new Attribution().addTo(this);
          }
        });
        var attribution = function(options) {
          return new Attribution(options);
        };
        Control.Layers = Layers;
        Control.Zoom = Zoom;
        Control.Scale = Scale;
        Control.Attribution = Attribution;
        control.layers = layers;
        control.zoom = zoom;
        control.scale = scale;
        control.attribution = attribution;
        var Handler = Class.extend({
          initialize: function(map) {
            this._map = map;
          },
          // @method enable(): this
          // Enables the handler
          enable: function() {
            if (this._enabled) {
              return this;
            }
            this._enabled = true;
            this.addHooks();
            return this;
          },
          // @method disable(): this
          // Disables the handler
          disable: function() {
            if (!this._enabled) {
              return this;
            }
            this._enabled = false;
            this.removeHooks();
            return this;
          },
          // @method enabled(): Boolean
          // Returns `true` if the handler is enabled
          enabled: function() {
            return !!this._enabled;
          }
          // @section Extension methods
          // Classes inheriting from `Handler` must implement the two following methods:
          // @method addHooks()
          // Called when the handler is enabled, should add event hooks.
          // @method removeHooks()
          // Called when the handler is disabled, should remove the event hooks added previously.
        });
        Handler.addTo = function(map, name) {
          map.addHandler(name, this);
          return this;
        };
        var Mixin = { Events };
        var START = Browser.touch ? "touchstart mousedown" : "mousedown";
        var Draggable = Evented.extend({
          options: {
            // @section
            // @aka Draggable options
            // @option clickTolerance: Number = 3
            // The max number of pixels a user can shift the mouse pointer during a click
            // for it to be considered a valid click (as opposed to a mouse drag).
            clickTolerance: 3
          },
          // @constructor L.Draggable(el: HTMLElement, dragHandle?: HTMLElement, preventOutline?: Boolean, options?: Draggable options)
          // Creates a `Draggable` object for moving `el` when you start dragging the `dragHandle` element (equals `el` itself by default).
          initialize: function(element, dragStartTarget, preventOutline2, options) {
            setOptions(this, options);
            this._element = element;
            this._dragStartTarget = dragStartTarget || element;
            this._preventOutline = preventOutline2;
          },
          // @method enable()
          // Enables the dragging ability
          enable: function() {
            if (this._enabled) {
              return;
            }
            on(this._dragStartTarget, START, this._onDown, this);
            this._enabled = true;
          },
          // @method disable()
          // Disables the dragging ability
          disable: function() {
            if (!this._enabled) {
              return;
            }
            if (Draggable._dragging === this) {
              this.finishDrag(true);
            }
            off(this._dragStartTarget, START, this._onDown, this);
            this._enabled = false;
            this._moved = false;
          },
          _onDown: function(e) {
            if (!this._enabled) {
              return;
            }
            this._moved = false;
            if (hasClass(this._element, "leaflet-zoom-anim")) {
              return;
            }
            if (e.touches && e.touches.length !== 1) {
              if (Draggable._dragging === this) {
                this.finishDrag();
              }
              return;
            }
            if (Draggable._dragging || e.shiftKey || e.which !== 1 && e.button !== 1 && !e.touches) {
              return;
            }
            Draggable._dragging = this;
            if (this._preventOutline) {
              preventOutline(this._element);
            }
            disableImageDrag();
            disableTextSelection();
            if (this._moving) {
              return;
            }
            this.fire("down");
            var first = e.touches ? e.touches[0] : e, sizedParent = getSizedParentNode(this._element);
            this._startPoint = new Point(first.clientX, first.clientY);
            this._startPos = getPosition(this._element);
            this._parentScale = getScale(sizedParent);
            var mouseevent = e.type === "mousedown";
            on(document, mouseevent ? "mousemove" : "touchmove", this._onMove, this);
            on(document, mouseevent ? "mouseup" : "touchend touchcancel", this._onUp, this);
          },
          _onMove: function(e) {
            if (!this._enabled) {
              return;
            }
            if (e.touches && e.touches.length > 1) {
              this._moved = true;
              return;
            }
            var first = e.touches && e.touches.length === 1 ? e.touches[0] : e, offset = new Point(first.clientX, first.clientY)._subtract(this._startPoint);
            if (!offset.x && !offset.y) {
              return;
            }
            if (Math.abs(offset.x) + Math.abs(offset.y) < this.options.clickTolerance) {
              return;
            }
            offset.x /= this._parentScale.x;
            offset.y /= this._parentScale.y;
            preventDefault(e);
            if (!this._moved) {
              this.fire("dragstart");
              this._moved = true;
              addClass(document.body, "leaflet-dragging");
              this._lastTarget = e.target || e.srcElement;
              if (window.SVGElementInstance && this._lastTarget instanceof window.SVGElementInstance) {
                this._lastTarget = this._lastTarget.correspondingUseElement;
              }
              addClass(this._lastTarget, "leaflet-drag-target");
            }
            this._newPos = this._startPos.add(offset);
            this._moving = true;
            this._lastEvent = e;
            this._updatePosition();
          },
          _updatePosition: function() {
            var e = { originalEvent: this._lastEvent };
            this.fire("predrag", e);
            setPosition(this._element, this._newPos);
            this.fire("drag", e);
          },
          _onUp: function() {
            if (!this._enabled) {
              return;
            }
            this.finishDrag();
          },
          finishDrag: function(noInertia) {
            removeClass(document.body, "leaflet-dragging");
            if (this._lastTarget) {
              removeClass(this._lastTarget, "leaflet-drag-target");
              this._lastTarget = null;
            }
            off(document, "mousemove touchmove", this._onMove, this);
            off(document, "mouseup touchend touchcancel", this._onUp, this);
            enableImageDrag();
            enableTextSelection();
            var fireDragend = this._moved && this._moving;
            this._moving = false;
            Draggable._dragging = false;
            if (fireDragend) {
              this.fire("dragend", {
                noInertia,
                distance: this._newPos.distanceTo(this._startPos)
              });
            }
          }
        });
        function clipPolygon(points, bounds, round) {
          var clippedPoints, edges = [1, 4, 2, 8], i, j, k, a, b, len, edge2, p;
          for (i = 0, len = points.length; i < len; i++) {
            points[i]._code = _getBitCode(points[i], bounds);
          }
          for (k = 0; k < 4; k++) {
            edge2 = edges[k];
            clippedPoints = [];
            for (i = 0, len = points.length, j = len - 1; i < len; j = i++) {
              a = points[i];
              b = points[j];
              if (!(a._code & edge2)) {
                if (b._code & edge2) {
                  p = _getEdgeIntersection(b, a, edge2, bounds, round);
                  p._code = _getBitCode(p, bounds);
                  clippedPoints.push(p);
                }
                clippedPoints.push(a);
              } else if (!(b._code & edge2)) {
                p = _getEdgeIntersection(b, a, edge2, bounds, round);
                p._code = _getBitCode(p, bounds);
                clippedPoints.push(p);
              }
            }
            points = clippedPoints;
          }
          return points;
        }
        function polygonCenter(latlngs, crs) {
          var i, j, p1, p2, f, area, x, y, center;
          if (!latlngs || latlngs.length === 0) {
            throw new Error("latlngs not passed");
          }
          if (!isFlat(latlngs)) {
            console.warn("latlngs are not flat! Only the first ring will be used");
            latlngs = latlngs[0];
          }
          var centroidLatLng = toLatLng([0, 0]);
          var bounds = toLatLngBounds(latlngs);
          var areaBounds = bounds.getNorthWest().distanceTo(bounds.getSouthWest()) * bounds.getNorthEast().distanceTo(bounds.getNorthWest());
          if (areaBounds < 1700) {
            centroidLatLng = centroid(latlngs);
          }
          var len = latlngs.length;
          var points = [];
          for (i = 0; i < len; i++) {
            var latlng = toLatLng(latlngs[i]);
            points.push(crs.project(toLatLng([latlng.lat - centroidLatLng.lat, latlng.lng - centroidLatLng.lng])));
          }
          area = x = y = 0;
          for (i = 0, j = len - 1; i < len; j = i++) {
            p1 = points[i];
            p2 = points[j];
            f = p1.y * p2.x - p2.y * p1.x;
            x += (p1.x + p2.x) * f;
            y += (p1.y + p2.y) * f;
            area += f * 3;
          }
          if (area === 0) {
            center = points[0];
          } else {
            center = [x / area, y / area];
          }
          var latlngCenter = crs.unproject(toPoint(center));
          return toLatLng([latlngCenter.lat + centroidLatLng.lat, latlngCenter.lng + centroidLatLng.lng]);
        }
        function centroid(coords) {
          var latSum = 0;
          var lngSum = 0;
          var len = 0;
          for (var i = 0; i < coords.length; i++) {
            var latlng = toLatLng(coords[i]);
            latSum += latlng.lat;
            lngSum += latlng.lng;
            len++;
          }
          return toLatLng([latSum / len, lngSum / len]);
        }
        var PolyUtil = {
          __proto__: null,
          clipPolygon,
          polygonCenter,
          centroid
        };
        function simplify(points, tolerance) {
          if (!tolerance || !points.length) {
            return points.slice();
          }
          var sqTolerance = tolerance * tolerance;
          points = _reducePoints(points, sqTolerance);
          points = _simplifyDP(points, sqTolerance);
          return points;
        }
        function pointToSegmentDistance(p, p1, p2) {
          return Math.sqrt(_sqClosestPointOnSegment(p, p1, p2, true));
        }
        function closestPointOnSegment(p, p1, p2) {
          return _sqClosestPointOnSegment(p, p1, p2);
        }
        function _simplifyDP(points, sqTolerance) {
          var len = points.length, ArrayConstructor = typeof Uint8Array !== "undefined" ? Uint8Array : Array, markers = new ArrayConstructor(len);
          markers[0] = markers[len - 1] = 1;
          _simplifyDPStep(points, markers, sqTolerance, 0, len - 1);
          var i, newPoints = [];
          for (i = 0; i < len; i++) {
            if (markers[i]) {
              newPoints.push(points[i]);
            }
          }
          return newPoints;
        }
        function _simplifyDPStep(points, markers, sqTolerance, first, last) {
          var maxSqDist = 0, index2, i, sqDist;
          for (i = first + 1; i <= last - 1; i++) {
            sqDist = _sqClosestPointOnSegment(points[i], points[first], points[last], true);
            if (sqDist > maxSqDist) {
              index2 = i;
              maxSqDist = sqDist;
            }
          }
          if (maxSqDist > sqTolerance) {
            markers[index2] = 1;
            _simplifyDPStep(points, markers, sqTolerance, first, index2);
            _simplifyDPStep(points, markers, sqTolerance, index2, last);
          }
        }
        function _reducePoints(points, sqTolerance) {
          var reducedPoints = [points[0]];
          for (var i = 1, prev = 0, len = points.length; i < len; i++) {
            if (_sqDist(points[i], points[prev]) > sqTolerance) {
              reducedPoints.push(points[i]);
              prev = i;
            }
          }
          if (prev < len - 1) {
            reducedPoints.push(points[len - 1]);
          }
          return reducedPoints;
        }
        var _lastCode;
        function clipSegment(a, b, bounds, useLastCode, round) {
          var codeA = useLastCode ? _lastCode : _getBitCode(a, bounds), codeB = _getBitCode(b, bounds), codeOut, p, newCode;
          _lastCode = codeB;
          while (true) {
            if (!(codeA | codeB)) {
              return [a, b];
            }
            if (codeA & codeB) {
              return false;
            }
            codeOut = codeA || codeB;
            p = _getEdgeIntersection(a, b, codeOut, bounds, round);
            newCode = _getBitCode(p, bounds);
            if (codeOut === codeA) {
              a = p;
              codeA = newCode;
            } else {
              b = p;
              codeB = newCode;
            }
          }
        }
        function _getEdgeIntersection(a, b, code, bounds, round) {
          var dx = b.x - a.x, dy = b.y - a.y, min = bounds.min, max = bounds.max, x, y;
          if (code & 8) {
            x = a.x + dx * (max.y - a.y) / dy;
            y = max.y;
          } else if (code & 4) {
            x = a.x + dx * (min.y - a.y) / dy;
            y = min.y;
          } else if (code & 2) {
            x = max.x;
            y = a.y + dy * (max.x - a.x) / dx;
          } else if (code & 1) {
            x = min.x;
            y = a.y + dy * (min.x - a.x) / dx;
          }
          return new Point(x, y, round);
        }
        function _getBitCode(p, bounds) {
          var code = 0;
          if (p.x < bounds.min.x) {
            code |= 1;
          } else if (p.x > bounds.max.x) {
            code |= 2;
          }
          if (p.y < bounds.min.y) {
            code |= 4;
          } else if (p.y > bounds.max.y) {
            code |= 8;
          }
          return code;
        }
        function _sqDist(p1, p2) {
          var dx = p2.x - p1.x, dy = p2.y - p1.y;
          return dx * dx + dy * dy;
        }
        function _sqClosestPointOnSegment(p, p1, p2, sqDist) {
          var x = p1.x, y = p1.y, dx = p2.x - x, dy = p2.y - y, dot = dx * dx + dy * dy, t;
          if (dot > 0) {
            t = ((p.x - x) * dx + (p.y - y) * dy) / dot;
            if (t > 1) {
              x = p2.x;
              y = p2.y;
            } else if (t > 0) {
              x += dx * t;
              y += dy * t;
            }
          }
          dx = p.x - x;
          dy = p.y - y;
          return sqDist ? dx * dx + dy * dy : new Point(x, y);
        }
        function isFlat(latlngs) {
          return !isArray(latlngs[0]) || typeof latlngs[0][0] !== "object" && typeof latlngs[0][0] !== "undefined";
        }
        function _flat(latlngs) {
          console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead.");
          return isFlat(latlngs);
        }
        function polylineCenter(latlngs, crs) {
          var i, halfDist, segDist, dist, p1, p2, ratio, center;
          if (!latlngs || latlngs.length === 0) {
            throw new Error("latlngs not passed");
          }
          if (!isFlat(latlngs)) {
            console.warn("latlngs are not flat! Only the first ring will be used");
            latlngs = latlngs[0];
          }
          var centroidLatLng = toLatLng([0, 0]);
          var bounds = toLatLngBounds(latlngs);
          var areaBounds = bounds.getNorthWest().distanceTo(bounds.getSouthWest()) * bounds.getNorthEast().distanceTo(bounds.getNorthWest());
          if (areaBounds < 1700) {
            centroidLatLng = centroid(latlngs);
          }
          var len = latlngs.length;
          var points = [];
          for (i = 0; i < len; i++) {
            var latlng = toLatLng(latlngs[i]);
            points.push(crs.project(toLatLng([latlng.lat - centroidLatLng.lat, latlng.lng - centroidLatLng.lng])));
          }
          for (i = 0, halfDist = 0; i < len - 1; i++) {
            halfDist += points[i].distanceTo(points[i + 1]) / 2;
          }
          if (halfDist === 0) {
            center = points[0];
          } else {
            for (i = 0, dist = 0; i < len - 1; i++) {
              p1 = points[i];
              p2 = points[i + 1];
              segDist = p1.distanceTo(p2);
              dist += segDist;
              if (dist > halfDist) {
                ratio = (dist - halfDist) / segDist;
                center = [
                  p2.x - ratio * (p2.x - p1.x),
                  p2.y - ratio * (p2.y - p1.y)
                ];
                break;
              }
            }
          }
          var latlngCenter = crs.unproject(toPoint(center));
          return toLatLng([latlngCenter.lat + centroidLatLng.lat, latlngCenter.lng + centroidLatLng.lng]);
        }
        var LineUtil = {
          __proto__: null,
          simplify,
          pointToSegmentDistance,
          closestPointOnSegment,
          clipSegment,
          _getEdgeIntersection,
          _getBitCode,
          _sqClosestPointOnSegment,
          isFlat,
          _flat,
          polylineCenter
        };
        var LonLat = {
          project: function(latlng) {
            return new Point(latlng.lng, latlng.lat);
          },
          unproject: function(point) {
            return new LatLng(point.y, point.x);
          },
          bounds: new Bounds([-180, -90], [180, 90])
        };
        var Mercator = {
          R: 6378137,
          R_MINOR: 6356752314245179e-9,
          bounds: new Bounds([-2003750834279e-5, -1549657073972e-5], [2003750834279e-5, 1876465623138e-5]),
          project: function(latlng) {
            var d = Math.PI / 180, r = this.R, y = latlng.lat * d, tmp = this.R_MINOR / r, e = Math.sqrt(1 - tmp * tmp), con = e * Math.sin(y);
            var ts = Math.tan(Math.PI / 4 - y / 2) / Math.pow((1 - con) / (1 + con), e / 2);
            y = -r * Math.log(Math.max(ts, 1e-10));
            return new Point(latlng.lng * d * r, y);
          },
          unproject: function(point) {
            var d = 180 / Math.PI, r = this.R, tmp = this.R_MINOR / r, e = Math.sqrt(1 - tmp * tmp), ts = Math.exp(-point.y / r), phi = Math.PI / 2 - 2 * Math.atan(ts);
            for (var i = 0, dphi = 0.1, con; i < 15 && Math.abs(dphi) > 1e-7; i++) {
              con = e * Math.sin(phi);
              con = Math.pow((1 - con) / (1 + con), e / 2);
              dphi = Math.PI / 2 - 2 * Math.atan(ts * con) - phi;
              phi += dphi;
            }
            return new LatLng(phi * d, point.x * d / r);
          }
        };
        var index = {
          __proto__: null,
          LonLat,
          Mercator,
          SphericalMercator
        };
        var EPSG3395 = extend({}, Earth, {
          code: "EPSG:3395",
          projection: Mercator,
          transformation: (function() {
            var scale2 = 0.5 / (Math.PI * Mercator.R);
            return toTransformation(scale2, 0.5, -scale2, 0.5);
          })()
        });
        var EPSG4326 = extend({}, Earth, {
          code: "EPSG:4326",
          projection: LonLat,
          transformation: toTransformation(1 / 180, 1, -1 / 180, 0.5)
        });
        var Simple = extend({}, CRS, {
          projection: LonLat,
          transformation: toTransformation(1, 0, -1, 0),
          scale: function(zoom2) {
            return Math.pow(2, zoom2);
          },
          zoom: function(scale2) {
            return Math.log(scale2) / Math.LN2;
          },
          distance: function(latlng1, latlng2) {
            var dx = latlng2.lng - latlng1.lng, dy = latlng2.lat - latlng1.lat;
            return Math.sqrt(dx * dx + dy * dy);
          },
          infinite: true
        });
        CRS.Earth = Earth;
        CRS.EPSG3395 = EPSG3395;
        CRS.EPSG3857 = EPSG3857;
        CRS.EPSG900913 = EPSG900913;
        CRS.EPSG4326 = EPSG4326;
        CRS.Simple = Simple;
        var Layer = Evented.extend({
          // Classes extending `L.Layer` will inherit the following options:
          options: {
            // @option pane: String = 'overlayPane'
            // By default the layer will be added to the map's [overlay pane](#map-overlaypane). Overriding this option will cause the layer to be placed on another pane by default.
            pane: "overlayPane",
            // @option attribution: String = null
            // String to be shown in the attribution control, e.g. "© OpenStreetMap contributors". It describes the layer data and is often a legal obligation towards copyright holders and tile providers.
            attribution: null,
            bubblingMouseEvents: true
          },
          /* @section
           * Classes extending `L.Layer` will inherit the following methods:
           *
           * @method addTo(map: Map|LayerGroup): this
           * Adds the layer to the given map or layer group.
           */
          addTo: function(map) {
            map.addLayer(this);
            return this;
          },
          // @method remove: this
          // Removes the layer from the map it is currently active on.
          remove: function() {
            return this.removeFrom(this._map || this._mapToAdd);
          },
          // @method removeFrom(map: Map): this
          // Removes the layer from the given map
          //
          // @alternative
          // @method removeFrom(group: LayerGroup): this
          // Removes the layer from the given `LayerGroup`
          removeFrom: function(obj) {
            if (obj) {
              obj.removeLayer(this);
            }
            return this;
          },
          // @method getPane(name? : String): HTMLElement
          // Returns the `HTMLElement` representing the named pane on the map. If `name` is omitted, returns the pane for this layer.
          getPane: function(name) {
            return this._map.getPane(name ? this.options[name] || name : this.options.pane);
          },
          addInteractiveTarget: function(targetEl) {
            this._map._targets[stamp(targetEl)] = this;
            return this;
          },
          removeInteractiveTarget: function(targetEl) {
            delete this._map._targets[stamp(targetEl)];
            return this;
          },
          // @method getAttribution: String
          // Used by the `attribution control`, returns the [attribution option](#gridlayer-attribution).
          getAttribution: function() {
            return this.options.attribution;
          },
          _layerAdd: function(e) {
            var map = e.target;
            if (!map.hasLayer(this)) {
              return;
            }
            this._map = map;
            this._zoomAnimated = map._zoomAnimated;
            if (this.getEvents) {
              var events = this.getEvents();
              map.on(events, this);
              this.once("remove", function() {
                map.off(events, this);
              }, this);
            }
            this.onAdd(map);
            this.fire("add");
            map.fire("layeradd", { layer: this });
          }
        });
        Map.include({
          // @method addLayer(layer: Layer): this
          // Adds the given layer to the map
          addLayer: function(layer) {
            if (!layer._layerAdd) {
              throw new Error("The provided object is not a Layer.");
            }
            var id = stamp(layer);
            if (this._layers[id]) {
              return this;
            }
            this._layers[id] = layer;
            layer._mapToAdd = this;
            if (layer.beforeAdd) {
              layer.beforeAdd(this);
            }
            this.whenReady(layer._layerAdd, layer);
            return this;
          },
          // @method removeLayer(layer: Layer): this
          // Removes the given layer from the map.
          removeLayer: function(layer) {
            var id = stamp(layer);
            if (!this._layers[id]) {
              return this;
            }
            if (this._loaded) {
              layer.onRemove(this);
            }
            delete this._layers[id];
            if (this._loaded) {
              this.fire("layerremove", { layer });
              layer.fire("remove");
            }
            layer._map = layer._mapToAdd = null;
            return this;
          },
          // @method hasLayer(layer: Layer): Boolean
          // Returns `true` if the given layer is currently added to the map
          hasLayer: function(layer) {
            return stamp(layer) in this._layers;
          },
          /* @method eachLayer(fn: Function, context?: Object): this
           * Iterates over the layers of the map, optionally specifying context of the iterator function.
           * ```
           * map.eachLayer(function(layer){
           *     layer.bindPopup('Hello');
           * });
           * ```
           */
          eachLayer: function(method, context) {
            for (var i in this._layers) {
              method.call(context, this._layers[i]);
            }
            return this;
          },
          _addLayers: function(layers2) {
            layers2 = layers2 ? isArray(layers2) ? layers2 : [layers2] : [];
            for (var i = 0, len = layers2.length; i < len; i++) {
              this.addLayer(layers2[i]);
            }
          },
          _addZoomLimit: function(layer) {
            if (!isNaN(layer.options.maxZoom) || !isNaN(layer.options.minZoom)) {
              this._zoomBoundLayers[stamp(layer)] = layer;
              this._updateZoomLevels();
            }
          },
          _removeZoomLimit: function(layer) {
            var id = stamp(layer);
            if (this._zoomBoundLayers[id]) {
              delete this._zoomBoundLayers[id];
              this._updateZoomLevels();
            }
          },
          _updateZoomLevels: function() {
            var minZoom = Infinity, maxZoom = -Infinity, oldZoomSpan = this._getZoomSpan();
            for (var i in this._zoomBoundLayers) {
              var options = this._zoomBoundLayers[i].options;
              minZoom = options.minZoom === void 0 ? minZoom : Math.min(minZoom, options.minZoom);
              maxZoom = options.maxZoom === void 0 ? maxZoom : Math.max(maxZoom, options.maxZoom);
            }
            this._layersMaxZoom = maxZoom === -Infinity ? void 0 : maxZoom;
            this._layersMinZoom = minZoom === Infinity ? void 0 : minZoom;
            if (oldZoomSpan !== this._getZoomSpan()) {
              this.fire("zoomlevelschange");
            }
            if (this.options.maxZoom === void 0 && this._layersMaxZoom && this.getZoom() > this._layersMaxZoom) {
              this.setZoom(this._layersMaxZoom);
            }
            if (this.options.minZoom === void 0 && this._layersMinZoom && this.getZoom() < this._layersMinZoom) {
              this.setZoom(this._layersMinZoom);
            }
          }
        });
        var LayerGroup = Layer.extend({
          initialize: function(layers2, options) {
            setOptions(this, options);
            this._layers = {};
            var i, len;
            if (layers2) {
              for (i = 0, len = layers2.length; i < len; i++) {
                this.addLayer(layers2[i]);
              }
            }
          },
          // @method addLayer(layer: Layer): this
          // Adds the given layer to the group.
          addLayer: function(layer) {
            var id = this.getLayerId(layer);
            this._layers[id] = layer;
            if (this._map) {
              this._map.addLayer(layer);
            }
            return this;
          },
          // @method removeLayer(layer: Layer): this
          // Removes the given layer from the group.
          // @alternative
          // @method removeLayer(id: Number): this
          // Removes the layer with the given internal ID from the group.
          removeLayer: function(layer) {
            var id = layer in this._layers ? layer : this.getLayerId(layer);
            if (this._map && this._layers[id]) {
              this._map.removeLayer(this._layers[id]);
            }
            delete this._layers[id];
            return this;
          },
          // @method hasLayer(layer: Layer): Boolean
          // Returns `true` if the given layer is currently added to the group.
          // @alternative
          // @method hasLayer(id: Number): Boolean
          // Returns `true` if the given internal ID is currently added to the group.
          hasLayer: function(layer) {
            var layerId = typeof layer === "number" ? layer : this.getLayerId(layer);
            return layerId in this._layers;
          },
          // @method clearLayers(): this
          // Removes all the layers from the group.
          clearLayers: function() {
            return this.eachLayer(this.removeLayer, this);
          },
          // @method invoke(methodName: String, …): this
          // Calls `methodName` on every layer contained in this group, passing any
          // additional parameters. Has no effect if the layers contained do not
          // implement `methodName`.
          invoke: function(methodName) {
            var args = Array.prototype.slice.call(arguments, 1), i, layer;
            for (i in this._layers) {
              layer = this._layers[i];
              if (layer[methodName]) {
                layer[methodName].apply(layer, args);
              }
            }
            return this;
          },
          onAdd: function(map) {
            this.eachLayer(map.addLayer, map);
          },
          onRemove: function(map) {
            this.eachLayer(map.removeLayer, map);
          },
          // @method eachLayer(fn: Function, context?: Object): this
          // Iterates over the layers of the group, optionally specifying context of the iterator function.
          // ```js
          // group.eachLayer(function (layer) {
          // 	layer.bindPopup('Hello');
          // });
          // ```
          eachLayer: function(method, context) {
            for (var i in this._layers) {
              method.call(context, this._layers[i]);
            }
            return this;
          },
          // @method getLayer(id: Number): Layer
          // Returns the layer with the given internal ID.
          getLayer: function(id) {
            return this._layers[id];
          },
          // @method getLayers(): Layer[]
          // Returns an array of all the layers added to the group.
          getLayers: function() {
            var layers2 = [];
            this.eachLayer(layers2.push, layers2);
            return layers2;
          },
          // @method setZIndex(zIndex: Number): this
          // Calls `setZIndex` on every layer contained in this group, passing the z-index.
          setZIndex: function(zIndex) {
            return this.invoke("setZIndex", zIndex);
          },
          // @method getLayerId(layer: Layer): Number
          // Returns the internal ID for a layer
          getLayerId: function(layer) {
            return stamp(layer);
          }
        });
        var layerGroup = function(layers2, options) {
          return new LayerGroup(layers2, options);
        };
        var FeatureGroup = LayerGroup.extend({
          addLayer: function(layer) {
            if (this.hasLayer(layer)) {
              return this;
            }
            layer.addEventParent(this);
            LayerGroup.prototype.addLayer.call(this, layer);
            return this.fire("layeradd", { layer });
          },
          removeLayer: function(layer) {
            if (!this.hasLayer(layer)) {
              return this;
            }
            if (layer in this._layers) {
              layer = this._layers[layer];
            }
            layer.removeEventParent(this);
            LayerGroup.prototype.removeLayer.call(this, layer);
            return this.fire("layerremove", { layer });
          },
          // @method setStyle(style: Path options): this
          // Sets the given path options to each layer of the group that has a `setStyle` method.
          setStyle: function(style2) {
            return this.invoke("setStyle", style2);
          },
          // @method bringToFront(): this
          // Brings the layer group to the top of all other layers
          bringToFront: function() {
            return this.invoke("bringToFront");
          },
          // @method bringToBack(): this
          // Brings the layer group to the back of all other layers
          bringToBack: function() {
            return this.invoke("bringToBack");
          },
          // @method getBounds(): LatLngBounds
          // Returns the LatLngBounds of the Feature Group (created from bounds and coordinates of its children).
          getBounds: function() {
            var bounds = new LatLngBounds();
            for (var id in this._layers) {
              var layer = this._layers[id];
              bounds.extend(layer.getBounds ? layer.getBounds() : layer.getLatLng());
            }
            return bounds;
          }
        });
        var featureGroup = function(layers2, options) {
          return new FeatureGroup(layers2, options);
        };
        var Icon = Class.extend({
          /* @section
           * @aka Icon options
           *
           * @option iconUrl: String = null
           * **(required)** The URL to the icon image (absolute or relative to your script path).
           *
           * @option iconRetinaUrl: String = null
           * The URL to a retina sized version of the icon image (absolute or relative to your
           * script path). Used for Retina screen devices.
           *
           * @option iconSize: Point = null
           * Size of the icon image in pixels.
           *
           * @option iconAnchor: Point = null
           * The coordinates of the "tip" of the icon (relative to its top left corner). The icon
           * will be aligned so that this point is at the marker's geographical location. Centered
           * by default if size is specified, also can be set in CSS with negative margins.
           *
           * @option popupAnchor: Point = [0, 0]
           * The coordinates of the point from which popups will "open", relative to the icon anchor.
           *
           * @option tooltipAnchor: Point = [0, 0]
           * The coordinates of the point from which tooltips will "open", relative to the icon anchor.
           *
           * @option shadowUrl: String = null
           * The URL to the icon shadow image. If not specified, no shadow image will be created.
           *
           * @option shadowRetinaUrl: String = null
           *
           * @option shadowSize: Point = null
           * Size of the shadow image in pixels.
           *
           * @option shadowAnchor: Point = null
           * The coordinates of the "tip" of the shadow (relative to its top left corner) (the same
           * as iconAnchor if not specified).
           *
           * @option className: String = ''
           * A custom class name to assign to both icon and shadow images. Empty by default.
           */
          options: {
            popupAnchor: [0, 0],
            tooltipAnchor: [0, 0],
            // @option crossOrigin: Boolean|String = false
            // Whether the crossOrigin attribute will be added to the tiles.
            // If a String is provided, all tiles will have their crossOrigin attribute set to the String provided. This is needed if you want to access tile pixel data.
            // Refer to [CORS Settings](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_settings_attributes) for valid String values.
            crossOrigin: false
          },
          initialize: function(options) {
            setOptions(this, options);
          },
          // @method createIcon(oldIcon?: HTMLElement): HTMLElement
          // Called internally when the icon has to be shown, returns a `<img>` HTML element
          // styled according to the options.
          createIcon: function(oldIcon) {
            return this._createIcon("icon", oldIcon);
          },
          // @method createShadow(oldIcon?: HTMLElement): HTMLElement
          // As `createIcon`, but for the shadow beneath it.
          createShadow: function(oldIcon) {
            return this._createIcon("shadow", oldIcon);
          },
          _createIcon: function(name, oldIcon) {
            var src = this._getIconUrl(name);
            if (!src) {
              if (name === "icon") {
                throw new Error("iconUrl not set in Icon options (see the docs).");
              }
              return null;
            }
            var img = this._createImg(src, oldIcon && oldIcon.tagName === "IMG" ? oldIcon : null);
            this._setIconStyles(img, name);
            if (this.options.crossOrigin || this.options.crossOrigin === "") {
              img.crossOrigin = this.options.crossOrigin === true ? "" : this.options.crossOrigin;
            }
            return img;
          },
          _setIconStyles: function(img, name) {
            var options = this.options;
            var sizeOption = options[name + "Size"];
            if (typeof sizeOption === "number") {
              sizeOption = [sizeOption, sizeOption];
            }
            var size = toPoint(sizeOption), anchor = toPoint(name === "shadow" && options.shadowAnchor || options.iconAnchor || size && size.divideBy(2, true));
            img.className = "leaflet-marker-" + name + " " + (options.className || "");
            if (anchor) {
              img.style.marginLeft = -anchor.x + "px";
              img.style.marginTop = -anchor.y + "px";
            }
            if (size) {
              img.style.width = size.x + "px";
              img.style.height = size.y + "px";
            }
          },
          _createImg: function(src, el) {
            el = el || document.createElement("img");
            el.src = src;
            return el;
          },
          _getIconUrl: function(name) {
            return Browser.retina && this.options[name + "RetinaUrl"] || this.options[name + "Url"];
          }
        });
        function icon(options) {
          return new Icon(options);
        }
        var IconDefault = Icon.extend({
          options: {
            iconUrl: "marker-icon.png",
            iconRetinaUrl: "marker-icon-2x.png",
            shadowUrl: "marker-shadow.png",
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            tooltipAnchor: [16, -28],
            shadowSize: [41, 41]
          },
          _getIconUrl: function(name) {
            if (typeof IconDefault.imagePath !== "string") {
              IconDefault.imagePath = this._detectIconPath();
            }
            return (this.options.imagePath || IconDefault.imagePath) + Icon.prototype._getIconUrl.call(this, name);
          },
          _stripUrl: function(path) {
            var strip = function(str, re, idx) {
              var match = re.exec(str);
              return match && match[idx];
            };
            path = strip(path, /^url\((['"])?(.+)\1\)$/, 2);
            return path && strip(path, /^(.*)marker-icon\.png$/, 1);
          },
          _detectIconPath: function() {
            var el = create$1("div", "leaflet-default-icon-path", document.body);
            var path = getStyle(el, "background-image") || getStyle(el, "backgroundImage");
            document.body.removeChild(el);
            path = this._stripUrl(path);
            if (path) {
              return path;
            }
            var link = document.querySelector('link[href$="leaflet.css"]');
            if (!link) {
              return "";
            }
            return link.href.substring(0, link.href.length - "leaflet.css".length - 1);
          }
        });
        var MarkerDrag = Handler.extend({
          initialize: function(marker2) {
            this._marker = marker2;
          },
          addHooks: function() {
            var icon2 = this._marker._icon;
            if (!this._draggable) {
              this._draggable = new Draggable(icon2, icon2, true);
            }
            this._draggable.on({
              dragstart: this._onDragStart,
              predrag: this._onPreDrag,
              drag: this._onDrag,
              dragend: this._onDragEnd
            }, this).enable();
            addClass(icon2, "leaflet-marker-draggable");
          },
          removeHooks: function() {
            this._draggable.off({
              dragstart: this._onDragStart,
              predrag: this._onPreDrag,
              drag: this._onDrag,
              dragend: this._onDragEnd
            }, this).disable();
            if (this._marker._icon) {
              removeClass(this._marker._icon, "leaflet-marker-draggable");
            }
          },
          moved: function() {
            return this._draggable && this._draggable._moved;
          },
          _adjustPan: function(e) {
            var marker2 = this._marker, map = marker2._map, speed = this._marker.options.autoPanSpeed, padding = this._marker.options.autoPanPadding, iconPos = getPosition(marker2._icon), bounds = map.getPixelBounds(), origin = map.getPixelOrigin();
            var panBounds = toBounds(
              bounds.min._subtract(origin).add(padding),
              bounds.max._subtract(origin).subtract(padding)
            );
            if (!panBounds.contains(iconPos)) {
              var movement = toPoint(
                (Math.max(panBounds.max.x, iconPos.x) - panBounds.max.x) / (bounds.max.x - panBounds.max.x) - (Math.min(panBounds.min.x, iconPos.x) - panBounds.min.x) / (bounds.min.x - panBounds.min.x),
                (Math.max(panBounds.max.y, iconPos.y) - panBounds.max.y) / (bounds.max.y - panBounds.max.y) - (Math.min(panBounds.min.y, iconPos.y) - panBounds.min.y) / (bounds.min.y - panBounds.min.y)
              ).multiplyBy(speed);
              map.panBy(movement, { animate: false });
              this._draggable._newPos._add(movement);
              this._draggable._startPos._add(movement);
              setPosition(marker2._icon, this._draggable._newPos);
              this._onDrag(e);
              this._panRequest = requestAnimFrame(this._adjustPan.bind(this, e));
            }
          },
          _onDragStart: function() {
            this._oldLatLng = this._marker.getLatLng();
            this._marker.closePopup && this._marker.closePopup();
            this._marker.fire("movestart").fire("dragstart");
          },
          _onPreDrag: function(e) {
            if (this._marker.options.autoPan) {
              cancelAnimFrame(this._panRequest);
              this._panRequest = requestAnimFrame(this._adjustPan.bind(this, e));
            }
          },
          _onDrag: function(e) {
            var marker2 = this._marker, shadow = marker2._shadow, iconPos = getPosition(marker2._icon), latlng = marker2._map.layerPointToLatLng(iconPos);
            if (shadow) {
              setPosition(shadow, iconPos);
            }
            marker2._latlng = latlng;
            e.latlng = latlng;
            e.oldLatLng = this._oldLatLng;
            marker2.fire("move", e).fire("drag", e);
          },
          _onDragEnd: function(e) {
            cancelAnimFrame(this._panRequest);
            delete this._oldLatLng;
            this._marker.fire("moveend").fire("dragend", e);
          }
        });
        var Marker = Layer.extend({
          // @section
          // @aka Marker options
          options: {
            // @option icon: Icon = *
            // Icon instance to use for rendering the marker.
            // See [Icon documentation](#L.Icon) for details on how to customize the marker icon.
            // If not specified, a common instance of `L.Icon.Default` is used.
            icon: new IconDefault(),
            // Option inherited from "Interactive layer" abstract class
            interactive: true,
            // @option keyboard: Boolean = true
            // Whether the marker can be tabbed to with a keyboard and clicked by pressing enter.
            keyboard: true,
            // @option title: String = ''
            // Text for the browser tooltip that appear on marker hover (no tooltip by default).
            // [Useful for accessibility](https://leafletjs.com/examples/accessibility/#markers-must-be-labelled).
            title: "",
            // @option alt: String = 'Marker'
            // Text for the `alt` attribute of the icon image.
            // [Useful for accessibility](https://leafletjs.com/examples/accessibility/#markers-must-be-labelled).
            alt: "Marker",
            // @option zIndexOffset: Number = 0
            // By default, marker images zIndex is set automatically based on its latitude. Use this option if you want to put the marker on top of all others (or below), specifying a high value like `1000` (or high negative value, respectively).
            zIndexOffset: 0,
            // @option opacity: Number = 1.0
            // The opacity of the marker.
            opacity: 1,
            // @option riseOnHover: Boolean = false
            // If `true`, the marker will get on top of others when you hover the mouse over it.
            riseOnHover: false,
            // @option riseOffset: Number = 250
            // The z-index offset used for the `riseOnHover` feature.
            riseOffset: 250,
            // @option pane: String = 'markerPane'
            // `Map pane` where the markers icon will be added.
            pane: "markerPane",
            // @option shadowPane: String = 'shadowPane'
            // `Map pane` where the markers shadow will be added.
            shadowPane: "shadowPane",
            // @option bubblingMouseEvents: Boolean = false
            // When `true`, a mouse event on this marker will trigger the same event on the map
            // (unless [`L.DomEvent.stopPropagation`](#domevent-stoppropagation) is used).
            bubblingMouseEvents: false,
            // @option autoPanOnFocus: Boolean = true
            // When `true`, the map will pan whenever the marker is focused (via
            // e.g. pressing `tab` on the keyboard) to ensure the marker is
            // visible within the map's bounds
            autoPanOnFocus: true,
            // @section Draggable marker options
            // @option draggable: Boolean = false
            // Whether the marker is draggable with mouse/touch or not.
            draggable: false,
            // @option autoPan: Boolean = false
            // Whether to pan the map when dragging this marker near its edge or not.
            autoPan: false,
            // @option autoPanPadding: Point = Point(50, 50)
            // Distance (in pixels to the left/right and to the top/bottom) of the
            // map edge to start panning the map.
            autoPanPadding: [50, 50],
            // @option autoPanSpeed: Number = 10
            // Number of pixels the map should pan by.
            autoPanSpeed: 10
          },
          /* @section
           *
           * In addition to [shared layer methods](#Layer) like `addTo()` and `remove()` and [popup methods](#Popup) like bindPopup() you can also use the following methods:
           */
          initialize: function(latlng, options) {
            setOptions(this, options);
            this._latlng = toLatLng(latlng);
          },
          onAdd: function(map) {
            this._zoomAnimated = this._zoomAnimated && map.options.markerZoomAnimation;
            if (this._zoomAnimated) {
              map.on("zoomanim", this._animateZoom, this);
            }
            this._initIcon();
            this.update();
          },
          onRemove: function(map) {
            if (this.dragging && this.dragging.enabled()) {
              this.options.draggable = true;
              this.dragging.removeHooks();
            }
            delete this.dragging;
            if (this._zoomAnimated) {
              map.off("zoomanim", this._animateZoom, this);
            }
            this._removeIcon();
            this._removeShadow();
          },
          getEvents: function() {
            return {
              zoom: this.update,
              viewreset: this.update
            };
          },
          // @method getLatLng: LatLng
          // Returns the current geographical position of the marker.
          getLatLng: function() {
            return this._latlng;
          },
          // @method setLatLng(latlng: LatLng): this
          // Changes the marker position to the given point.
          setLatLng: function(latlng) {
            var oldLatLng = this._latlng;
            this._latlng = toLatLng(latlng);
            this.update();
            return this.fire("move", { oldLatLng, latlng: this._latlng });
          },
          // @method setZIndexOffset(offset: Number): this
          // Changes the [zIndex offset](#marker-zindexoffset) of the marker.
          setZIndexOffset: function(offset) {
            this.options.zIndexOffset = offset;
            return this.update();
          },
          // @method getIcon: Icon
          // Returns the current icon used by the marker
          getIcon: function() {
            return this.options.icon;
          },
          // @method setIcon(icon: Icon): this
          // Changes the marker icon.
          setIcon: function(icon2) {
            this.options.icon = icon2;
            if (this._map) {
              this._initIcon();
              this.update();
            }
            if (this._popup) {
              this.bindPopup(this._popup, this._popup.options);
            }
            return this;
          },
          getElement: function() {
            return this._icon;
          },
          update: function() {
            if (this._icon && this._map) {
              var pos = this._map.latLngToLayerPoint(this._latlng).round();
              this._setPos(pos);
            }
            return this;
          },
          _initIcon: function() {
            var options = this.options, classToAdd = "leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide");
            var icon2 = options.icon.createIcon(this._icon), addIcon = false;
            if (icon2 !== this._icon) {
              if (this._icon) {
                this._removeIcon();
              }
              addIcon = true;
              if (options.title) {
                icon2.title = options.title;
              }
              if (icon2.tagName === "IMG") {
                icon2.alt = options.alt || "";
              }
            }
            addClass(icon2, classToAdd);
            if (options.keyboard) {
              icon2.tabIndex = "0";
              icon2.setAttribute("role", "button");
            }
            this._icon = icon2;
            if (options.riseOnHover) {
              this.on({
                mouseover: this._bringToFront,
                mouseout: this._resetZIndex
              });
            }
            if (this.options.autoPanOnFocus) {
              on(icon2, "focus", this._panOnFocus, this);
            }
            var newShadow = options.icon.createShadow(this._shadow), addShadow = false;
            if (newShadow !== this._shadow) {
              this._removeShadow();
              addShadow = true;
            }
            if (newShadow) {
              addClass(newShadow, classToAdd);
              newShadow.alt = "";
            }
            this._shadow = newShadow;
            if (options.opacity < 1) {
              this._updateOpacity();
            }
            if (addIcon) {
              this.getPane().appendChild(this._icon);
            }
            this._initInteraction();
            if (newShadow && addShadow) {
              this.getPane(options.shadowPane).appendChild(this._shadow);
            }
          },
          _removeIcon: function() {
            if (this.options.riseOnHover) {
              this.off({
                mouseover: this._bringToFront,
                mouseout: this._resetZIndex
              });
            }
            if (this.options.autoPanOnFocus) {
              off(this._icon, "focus", this._panOnFocus, this);
            }
            remove(this._icon);
            this.removeInteractiveTarget(this._icon);
            this._icon = null;
          },
          _removeShadow: function() {
            if (this._shadow) {
              remove(this._shadow);
            }
            this._shadow = null;
          },
          _setPos: function(pos) {
            if (this._icon) {
              setPosition(this._icon, pos);
            }
            if (this._shadow) {
              setPosition(this._shadow, pos);
            }
            this._zIndex = pos.y + this.options.zIndexOffset;
            this._resetZIndex();
          },
          _updateZIndex: function(offset) {
            if (this._icon) {
              this._icon.style.zIndex = this._zIndex + offset;
            }
          },
          _animateZoom: function(opt) {
            var pos = this._map._latLngToNewLayerPoint(this._latlng, opt.zoom, opt.center).round();
            this._setPos(pos);
          },
          _initInteraction: function() {
            if (!this.options.interactive) {
              return;
            }
            addClass(this._icon, "leaflet-interactive");
            this.addInteractiveTarget(this._icon);
            if (MarkerDrag) {
              var draggable = this.options.draggable;
              if (this.dragging) {
                draggable = this.dragging.enabled();
                this.dragging.disable();
              }
              this.dragging = new MarkerDrag(this);
              if (draggable) {
                this.dragging.enable();
              }
            }
          },
          // @method setOpacity(opacity: Number): this
          // Changes the opacity of the marker.
          setOpacity: function(opacity) {
            this.options.opacity = opacity;
            if (this._map) {
              this._updateOpacity();
            }
            return this;
          },
          _updateOpacity: function() {
            var opacity = this.options.opacity;
            if (this._icon) {
              setOpacity(this._icon, opacity);
            }
            if (this._shadow) {
              setOpacity(this._shadow, opacity);
            }
          },
          _bringToFront: function() {
            this._updateZIndex(this.options.riseOffset);
          },
          _resetZIndex: function() {
            this._updateZIndex(0);
          },
          _panOnFocus: function() {
            var map = this._map;
            if (!map) {
              return;
            }
            var iconOpts = this.options.icon.options;
            var size = iconOpts.iconSize ? toPoint(iconOpts.iconSize) : toPoint(0, 0);
            var anchor = iconOpts.iconAnchor ? toPoint(iconOpts.iconAnchor) : toPoint(0, 0);
            map.panInside(this._latlng, {
              paddingTopLeft: anchor,
              paddingBottomRight: size.subtract(anchor)
            });
          },
          _getPopupAnchor: function() {
            return this.options.icon.options.popupAnchor;
          },
          _getTooltipAnchor: function() {
            return this.options.icon.options.tooltipAnchor;
          }
        });
        function marker(latlng, options) {
          return new Marker(latlng, options);
        }
        var Path = Layer.extend({
          // @section
          // @aka Path options
          options: {
            // @option stroke: Boolean = true
            // Whether to draw stroke along the path. Set it to `false` to disable borders on polygons or circles.
            stroke: true,
            // @option color: String = '#3388ff'
            // Stroke color
            color: "#3388ff",
            // @option weight: Number = 3
            // Stroke width in pixels
            weight: 3,
            // @option opacity: Number = 1.0
            // Stroke opacity
            opacity: 1,
            // @option lineCap: String= 'round'
            // A string that defines [shape to be used at the end](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-linecap) of the stroke.
            lineCap: "round",
            // @option lineJoin: String = 'round'
            // A string that defines [shape to be used at the corners](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-linejoin) of the stroke.
            lineJoin: "round",
            // @option dashArray: String = null
            // A string that defines the stroke [dash pattern](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-dasharray). Doesn't work on `Canvas`-powered layers in [some old browsers](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/setLineDash#Browser_compatibility).
            dashArray: null,
            // @option dashOffset: String = null
            // A string that defines the [distance into the dash pattern to start the dash](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-dashoffset). Doesn't work on `Canvas`-powered layers in [some old browsers](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/setLineDash#Browser_compatibility).
            dashOffset: null,
            // @option fill: Boolean = depends
            // Whether to fill the path with color. Set it to `false` to disable filling on polygons or circles.
            fill: false,
            // @option fillColor: String = *
            // Fill color. Defaults to the value of the [`color`](#path-color) option
            fillColor: null,
            // @option fillOpacity: Number = 0.2
            // Fill opacity.
            fillOpacity: 0.2,
            // @option fillRule: String = 'evenodd'
            // A string that defines [how the inside of a shape](https://developer.mozilla.org/docs/Web/SVG/Attribute/fill-rule) is determined.
            fillRule: "evenodd",
            // className: '',
            // Option inherited from "Interactive layer" abstract class
            interactive: true,
            // @option bubblingMouseEvents: Boolean = true
            // When `true`, a mouse event on this path will trigger the same event on the map
            // (unless [`L.DomEvent.stopPropagation`](#domevent-stoppropagation) is used).
            bubblingMouseEvents: true
          },
          beforeAdd: function(map) {
            this._renderer = map.getRenderer(this);
          },
          onAdd: function() {
            this._renderer._initPath(this);
            this._reset();
            this._renderer._addPath(this);
          },
          onRemove: function() {
            this._renderer._removePath(this);
          },
          // @method redraw(): this
          // Redraws the layer. Sometimes useful after you changed the coordinates that the path uses.
          redraw: function() {
            if (this._map) {
              this._renderer._updatePath(this);
            }
            return this;
          },
          // @method setStyle(style: Path options): this
          // Changes the appearance of a Path based on the options in the `Path options` object.
          setStyle: function(style2) {
            setOptions(this, style2);
            if (this._renderer) {
              this._renderer._updateStyle(this);
              if (this.options.stroke && style2 && Object.prototype.hasOwnProperty.call(style2, "weight")) {
                this._updateBounds();
              }
            }
            return this;
          },
          // @method bringToFront(): this
          // Brings the layer to the top of all path layers.
          bringToFront: function() {
            if (this._renderer) {
              this._renderer._bringToFront(this);
            }
            return this;
          },
          // @method bringToBack(): this
          // Brings the layer to the bottom of all path layers.
          bringToBack: function() {
            if (this._renderer) {
              this._renderer._bringToBack(this);
            }
            return this;
          },
          getElement: function() {
            return this._path;
          },
          _reset: function() {
            this._project();
            this._update();
          },
          _clickTolerance: function() {
            return (this.options.stroke ? this.options.weight / 2 : 0) + (this._renderer.options.tolerance || 0);
          }
        });
        var CircleMarker = Path.extend({
          // @section
          // @aka CircleMarker options
          options: {
            fill: true,
            // @option radius: Number = 10
            // Radius of the circle marker, in pixels
            radius: 10
          },
          initialize: function(latlng, options) {
            setOptions(this, options);
            this._latlng = toLatLng(latlng);
            this._radius = this.options.radius;
          },
          // @method setLatLng(latLng: LatLng): this
          // Sets the position of a circle marker to a new location.
          setLatLng: function(latlng) {
            var oldLatLng = this._latlng;
            this._latlng = toLatLng(latlng);
            this.redraw();
            return this.fire("move", { oldLatLng, latlng: this._latlng });
          },
          // @method getLatLng(): LatLng
          // Returns the current geographical position of the circle marker
          getLatLng: function() {
            return this._latlng;
          },
          // @method setRadius(radius: Number): this
          // Sets the radius of a circle marker. Units are in pixels.
          setRadius: function(radius) {
            this.options.radius = this._radius = radius;
            return this.redraw();
          },
          // @method getRadius(): Number
          // Returns the current radius of the circle
          getRadius: function() {
            return this._radius;
          },
          setStyle: function(options) {
            var radius = options && options.radius || this._radius;
            Path.prototype.setStyle.call(this, options);
            this.setRadius(radius);
            return this;
          },
          _project: function() {
            this._point = this._map.latLngToLayerPoint(this._latlng);
            this._updateBounds();
          },
          _updateBounds: function() {
            var r = this._radius, r2 = this._radiusY || r, w = this._clickTolerance(), p = [r + w, r2 + w];
            this._pxBounds = new Bounds(this._point.subtract(p), this._point.add(p));
          },
          _update: function() {
            if (this._map) {
              this._updatePath();
            }
          },
          _updatePath: function() {
            this._renderer._updateCircle(this);
          },
          _empty: function() {
            return this._radius && !this._renderer._bounds.intersects(this._pxBounds);
          },
          // Needed by the `Canvas` renderer for interactivity
          _containsPoint: function(p) {
            return p.distanceTo(this._point) <= this._radius + this._clickTolerance();
          }
        });
        function circleMarker(latlng, options) {
          return new CircleMarker(latlng, options);
        }
        var Circle = CircleMarker.extend({
          initialize: function(latlng, options, legacyOptions) {
            if (typeof options === "number") {
              options = extend({}, legacyOptions, { radius: options });
            }
            setOptions(this, options);
            this._latlng = toLatLng(latlng);
            if (isNaN(this.options.radius)) {
              throw new Error("Circle radius cannot be NaN");
            }
            this._mRadius = this.options.radius;
          },
          // @method setRadius(radius: Number): this
          // Sets the radius of a circle. Units are in meters.
          setRadius: function(radius) {
            this._mRadius = radius;
            return this.redraw();
          },
          // @method getRadius(): Number
          // Returns the current radius of a circle. Units are in meters.
          getRadius: function() {
            return this._mRadius;
          },
          // @method getBounds(): LatLngBounds
          // Returns the `LatLngBounds` of the path.
          getBounds: function() {
            var half = [this._radius, this._radiusY || this._radius];
            return new LatLngBounds(
              this._map.layerPointToLatLng(this._point.subtract(half)),
              this._map.layerPointToLatLng(this._point.add(half))
            );
          },
          setStyle: Path.prototype.setStyle,
          _project: function() {
            var lng = this._latlng.lng, lat = this._latlng.lat, map = this._map, crs = map.options.crs;
            if (crs.distance === Earth.distance) {
              var d = Math.PI / 180, latR = this._mRadius / Earth.R / d, top = map.project([lat + latR, lng]), bottom = map.project([lat - latR, lng]), p = top.add(bottom).divideBy(2), lat2 = map.unproject(p).lat, lngR = Math.acos((Math.cos(latR * d) - Math.sin(lat * d) * Math.sin(lat2 * d)) / (Math.cos(lat * d) * Math.cos(lat2 * d))) / d;
              if (isNaN(lngR) || lngR === 0) {
                lngR = latR / Math.cos(Math.PI / 180 * lat);
              }
              this._point = p.subtract(map.getPixelOrigin());
              this._radius = isNaN(lngR) ? 0 : p.x - map.project([lat2, lng - lngR]).x;
              this._radiusY = p.y - top.y;
            } else {
              var latlng2 = crs.unproject(crs.project(this._latlng).subtract([this._mRadius, 0]));
              this._point = map.latLngToLayerPoint(this._latlng);
              this._radius = this._point.x - map.latLngToLayerPoint(latlng2).x;
            }
            this._updateBounds();
          }
        });
        function circle(latlng, options, legacyOptions) {
          return new Circle(latlng, options, legacyOptions);
        }
        var Polyline = Path.extend({
          // @section
          // @aka Polyline options
          options: {
            // @option smoothFactor: Number = 1.0
            // How much to simplify the polyline on each zoom level. More means
            // better performance and smoother look, and less means more accurate representation.
            smoothFactor: 1,
            // @option noClip: Boolean = false
            // Disable polyline clipping.
            noClip: false
          },
          initialize: function(latlngs, options) {
            setOptions(this, options);
            this._setLatLngs(latlngs);
          },
          // @method getLatLngs(): LatLng[]
          // Returns an array of the points in the path, or nested arrays of points in case of multi-polyline.
          getLatLngs: function() {
            return this._latlngs;
          },
          // @method setLatLngs(latlngs: LatLng[]): this
          // Replaces all the points in the polyline with the given array of geographical points.
          setLatLngs: function(latlngs) {
            this._setLatLngs(latlngs);
            return this.redraw();
          },
          // @method isEmpty(): Boolean
          // Returns `true` if the Polyline has no LatLngs.
          isEmpty: function() {
            return !this._latlngs.length;
          },
          // @method closestLayerPoint(p: Point): Point
          // Returns the point closest to `p` on the Polyline.
          closestLayerPoint: function(p) {
            var minDistance = Infinity, minPoint = null, closest = _sqClosestPointOnSegment, p1, p2;
            for (var j = 0, jLen = this._parts.length; j < jLen; j++) {
              var points = this._parts[j];
              for (var i = 1, len = points.length; i < len; i++) {
                p1 = points[i - 1];
                p2 = points[i];
                var sqDist = closest(p, p1, p2, true);
                if (sqDist < minDistance) {
                  minDistance = sqDist;
                  minPoint = closest(p, p1, p2);
                }
              }
            }
            if (minPoint) {
              minPoint.distance = Math.sqrt(minDistance);
            }
            return minPoint;
          },
          // @method getCenter(): LatLng
          // Returns the center ([centroid](https://en.wikipedia.org/wiki/Centroid)) of the polyline.
          getCenter: function() {
            if (!this._map) {
              throw new Error("Must add layer to map before using getCenter()");
            }
            return polylineCenter(this._defaultShape(), this._map.options.crs);
          },
          // @method getBounds(): LatLngBounds
          // Returns the `LatLngBounds` of the path.
          getBounds: function() {
            return this._bounds;
          },
          // @method addLatLng(latlng: LatLng, latlngs?: LatLng[]): this
          // Adds a given point to the polyline. By default, adds to the first ring of
          // the polyline in case of a multi-polyline, but can be overridden by passing
          // a specific ring as a LatLng array (that you can earlier access with [`getLatLngs`](#polyline-getlatlngs)).
          addLatLng: function(latlng, latlngs) {
            latlngs = latlngs || this._defaultShape();
            latlng = toLatLng(latlng);
            latlngs.push(latlng);
            this._bounds.extend(latlng);
            return this.redraw();
          },
          _setLatLngs: function(latlngs) {
            this._bounds = new LatLngBounds();
            this._latlngs = this._convertLatLngs(latlngs);
          },
          _defaultShape: function() {
            return isFlat(this._latlngs) ? this._latlngs : this._latlngs[0];
          },
          // recursively convert latlngs input into actual LatLng instances; calculate bounds along the way
          _convertLatLngs: function(latlngs) {
            var result = [], flat = isFlat(latlngs);
            for (var i = 0, len = latlngs.length; i < len; i++) {
              if (flat) {
                result[i] = toLatLng(latlngs[i]);
                this._bounds.extend(result[i]);
              } else {
                result[i] = this._convertLatLngs(latlngs[i]);
              }
            }
            return result;
          },
          _project: function() {
            var pxBounds = new Bounds();
            this._rings = [];
            this._projectLatlngs(this._latlngs, this._rings, pxBounds);
            if (this._bounds.isValid() && pxBounds.isValid()) {
              this._rawPxBounds = pxBounds;
              this._updateBounds();
            }
          },
          _updateBounds: function() {
            var w = this._clickTolerance(), p = new Point(w, w);
            if (!this._rawPxBounds) {
              return;
            }
            this._pxBounds = new Bounds([
              this._rawPxBounds.min.subtract(p),
              this._rawPxBounds.max.add(p)
            ]);
          },
          // recursively turns latlngs into a set of rings with projected coordinates
          _projectLatlngs: function(latlngs, result, projectedBounds) {
            var flat = latlngs[0] instanceof LatLng, len = latlngs.length, i, ring;
            if (flat) {
              ring = [];
              for (i = 0; i < len; i++) {
                ring[i] = this._map.latLngToLayerPoint(latlngs[i]);
                projectedBounds.extend(ring[i]);
              }
              result.push(ring);
            } else {
              for (i = 0; i < len; i++) {
                this._projectLatlngs(latlngs[i], result, projectedBounds);
              }
            }
          },
          // clip polyline by renderer bounds so that we have less to render for performance
          _clipPoints: function() {
            var bounds = this._renderer._bounds;
            this._parts = [];
            if (!this._pxBounds || !this._pxBounds.intersects(bounds)) {
              return;
            }
            if (this.options.noClip) {
              this._parts = this._rings;
              return;
            }
            var parts = this._parts, i, j, k, len, len2, segment, points;
            for (i = 0, k = 0, len = this._rings.length; i < len; i++) {
              points = this._rings[i];
              for (j = 0, len2 = points.length; j < len2 - 1; j++) {
                segment = clipSegment(points[j], points[j + 1], bounds, j, true);
                if (!segment) {
                  continue;
                }
                parts[k] = parts[k] || [];
                parts[k].push(segment[0]);
                if (segment[1] !== points[j + 1] || j === len2 - 2) {
                  parts[k].push(segment[1]);
                  k++;
                }
              }
            }
          },
          // simplify each clipped part of the polyline for performance
          _simplifyPoints: function() {
            var parts = this._parts, tolerance = this.options.smoothFactor;
            for (var i = 0, len = parts.length; i < len; i++) {
              parts[i] = simplify(parts[i], tolerance);
            }
          },
          _update: function() {
            if (!this._map) {
              return;
            }
            this._clipPoints();
            this._simplifyPoints();
            this._updatePath();
          },
          _updatePath: function() {
            this._renderer._updatePoly(this);
          },
          // Needed by the `Canvas` renderer for interactivity
          _containsPoint: function(p, closed) {
            var i, j, k, len, len2, part, w = this._clickTolerance();
            if (!this._pxBounds || !this._pxBounds.contains(p)) {
              return false;
            }
            for (i = 0, len = this._parts.length; i < len; i++) {
              part = this._parts[i];
              for (j = 0, len2 = part.length, k = len2 - 1; j < len2; k = j++) {
                if (!closed && j === 0) {
                  continue;
                }
                if (pointToSegmentDistance(p, part[k], part[j]) <= w) {
                  return true;
                }
              }
            }
            return false;
          }
        });
        function polyline(latlngs, options) {
          return new Polyline(latlngs, options);
        }
        Polyline._flat = _flat;
        var Polygon = Polyline.extend({
          options: {
            fill: true
          },
          isEmpty: function() {
            return !this._latlngs.length || !this._latlngs[0].length;
          },
          // @method getCenter(): LatLng
          // Returns the center ([centroid](http://en.wikipedia.org/wiki/Centroid)) of the Polygon.
          getCenter: function() {
            if (!this._map) {
              throw new Error("Must add layer to map before using getCenter()");
            }
            return polygonCenter(this._defaultShape(), this._map.options.crs);
          },
          _convertLatLngs: function(latlngs) {
            var result = Polyline.prototype._convertLatLngs.call(this, latlngs), len = result.length;
            if (len >= 2 && result[0] instanceof LatLng && result[0].equals(result[len - 1])) {
              result.pop();
            }
            return result;
          },
          _setLatLngs: function(latlngs) {
            Polyline.prototype._setLatLngs.call(this, latlngs);
            if (isFlat(this._latlngs)) {
              this._latlngs = [this._latlngs];
            }
          },
          _defaultShape: function() {
            return isFlat(this._latlngs[0]) ? this._latlngs[0] : this._latlngs[0][0];
          },
          _clipPoints: function() {
            var bounds = this._renderer._bounds, w = this.options.weight, p = new Point(w, w);
            bounds = new Bounds(bounds.min.subtract(p), bounds.max.add(p));
            this._parts = [];
            if (!this._pxBounds || !this._pxBounds.intersects(bounds)) {
              return;
            }
            if (this.options.noClip) {
              this._parts = this._rings;
              return;
            }
            for (var i = 0, len = this._rings.length, clipped; i < len; i++) {
              clipped = clipPolygon(this._rings[i], bounds, true);
              if (clipped.length) {
                this._parts.push(clipped);
              }
            }
          },
          _updatePath: function() {
            this._renderer._updatePoly(this, true);
          },
          // Needed by the `Canvas` renderer for interactivity
          _containsPoint: function(p) {
            var inside = false, part, p1, p2, i, j, k, len, len2;
            if (!this._pxBounds || !this._pxBounds.contains(p)) {
              return false;
            }
            for (i = 0, len = this._parts.length; i < len; i++) {
              part = this._parts[i];
              for (j = 0, len2 = part.length, k = len2 - 1; j < len2; k = j++) {
                p1 = part[j];
                p2 = part[k];
                if (p1.y > p.y !== p2.y > p.y && p.x < (p2.x - p1.x) * (p.y - p1.y) / (p2.y - p1.y) + p1.x) {
                  inside = !inside;
                }
              }
            }
            return inside || Polyline.prototype._containsPoint.call(this, p, true);
          }
        });
        function polygon(latlngs, options) {
          return new Polygon(latlngs, options);
        }
        var GeoJSON = FeatureGroup.extend({
          /* @section
           * @aka GeoJSON options
           *
           * @option pointToLayer: Function = *
           * A `Function` defining how GeoJSON points spawn Leaflet layers. It is internally
           * called when data is added, passing the GeoJSON point feature and its `LatLng`.
           * The default is to spawn a default `Marker`:
           * ```js
           * function(geoJsonPoint, latlng) {
           * 	return L.marker(latlng);
           * }
           * ```
           *
           * @option style: Function = *
           * A `Function` defining the `Path options` for styling GeoJSON lines and polygons,
           * called internally when data is added.
           * The default value is to not override any defaults:
           * ```js
           * function (geoJsonFeature) {
           * 	return {}
           * }
           * ```
           *
           * @option onEachFeature: Function = *
           * A `Function` that will be called once for each created `Feature`, after it has
           * been created and styled. Useful for attaching events and popups to features.
           * The default is to do nothing with the newly created layers:
           * ```js
           * function (feature, layer) {}
           * ```
           *
           * @option filter: Function = *
           * A `Function` that will be used to decide whether to include a feature or not.
           * The default is to include all features:
           * ```js
           * function (geoJsonFeature) {
           * 	return true;
           * }
           * ```
           * Note: dynamically changing the `filter` option will have effect only on newly
           * added data. It will _not_ re-evaluate already included features.
           *
           * @option coordsToLatLng: Function = *
           * A `Function` that will be used for converting GeoJSON coordinates to `LatLng`s.
           * The default is the `coordsToLatLng` static method.
           *
           * @option markersInheritOptions: Boolean = false
           * Whether default Markers for "Point" type Features inherit from group options.
           */
          initialize: function(geojson, options) {
            setOptions(this, options);
            this._layers = {};
            if (geojson) {
              this.addData(geojson);
            }
          },
          // @method addData( <GeoJSON> data ): this
          // Adds a GeoJSON object to the layer.
          addData: function(geojson) {
            var features = isArray(geojson) ? geojson : geojson.features, i, len, feature;
            if (features) {
              for (i = 0, len = features.length; i < len; i++) {
                feature = features[i];
                if (feature.geometries || feature.geometry || feature.features || feature.coordinates) {
                  this.addData(feature);
                }
              }
              return this;
            }
            var options = this.options;
            if (options.filter && !options.filter(geojson)) {
              return this;
            }
            var layer = geometryToLayer(geojson, options);
            if (!layer) {
              return this;
            }
            layer.feature = asFeature(geojson);
            layer.defaultOptions = layer.options;
            this.resetStyle(layer);
            if (options.onEachFeature) {
              options.onEachFeature(geojson, layer);
            }
            return this.addLayer(layer);
          },
          // @method resetStyle( <Path> layer? ): this
          // Resets the given vector layer's style to the original GeoJSON style, useful for resetting style after hover events.
          // If `layer` is omitted, the style of all features in the current layer is reset.
          resetStyle: function(layer) {
            if (layer === void 0) {
              return this.eachLayer(this.resetStyle, this);
            }
            layer.options = extend({}, layer.defaultOptions);
            this._setLayerStyle(layer, this.options.style);
            return this;
          },
          // @method setStyle( <Function> style ): this
          // Changes styles of GeoJSON vector layers with the given style function.
          setStyle: function(style2) {
            return this.eachLayer(function(layer) {
              this._setLayerStyle(layer, style2);
            }, this);
          },
          _setLayerStyle: function(layer, style2) {
            if (layer.setStyle) {
              if (typeof style2 === "function") {
                style2 = style2(layer.feature);
              }
              layer.setStyle(style2);
            }
          }
        });
        function geometryToLayer(geojson, options) {
          var geometry = geojson.type === "Feature" ? geojson.geometry : geojson, coords = geometry ? geometry.coordinates : null, layers2 = [], pointToLayer = options && options.pointToLayer, _coordsToLatLng = options && options.coordsToLatLng || coordsToLatLng, latlng, latlngs, i, len;
          if (!coords && !geometry) {
            return null;
          }
          switch (geometry.type) {
            case "Point":
              latlng = _coordsToLatLng(coords);
              return _pointToLayer(pointToLayer, geojson, latlng, options);
            case "MultiPoint":
              for (i = 0, len = coords.length; i < len; i++) {
                latlng = _coordsToLatLng(coords[i]);
                layers2.push(_pointToLayer(pointToLayer, geojson, latlng, options));
              }
              return new FeatureGroup(layers2);
            case "LineString":
            case "MultiLineString":
              latlngs = coordsToLatLngs(coords, geometry.type === "LineString" ? 0 : 1, _coordsToLatLng);
              return new Polyline(latlngs, options);
            case "Polygon":
            case "MultiPolygon":
              latlngs = coordsToLatLngs(coords, geometry.type === "Polygon" ? 1 : 2, _coordsToLatLng);
              return new Polygon(latlngs, options);
            case "GeometryCollection":
              for (i = 0, len = geometry.geometries.length; i < len; i++) {
                var geoLayer = geometryToLayer({
                  geometry: geometry.geometries[i],
                  type: "Feature",
                  properties: geojson.properties
                }, options);
                if (geoLayer) {
                  layers2.push(geoLayer);
                }
              }
              return new FeatureGroup(layers2);
            case "FeatureCollection":
              for (i = 0, len = geometry.features.length; i < len; i++) {
                var featureLayer = geometryToLayer(geometry.features[i], options);
                if (featureLayer) {
                  layers2.push(featureLayer);
                }
              }
              return new FeatureGroup(layers2);
            default:
              throw new Error("Invalid GeoJSON object.");
          }
        }
        function _pointToLayer(pointToLayerFn, geojson, latlng, options) {
          return pointToLayerFn ? pointToLayerFn(geojson, latlng) : new Marker(latlng, options && options.markersInheritOptions && options);
        }
        function coordsToLatLng(coords) {
          return new LatLng(coords[1], coords[0], coords[2]);
        }
        function coordsToLatLngs(coords, levelsDeep, _coordsToLatLng) {
          var latlngs = [];
          for (var i = 0, len = coords.length, latlng; i < len; i++) {
            latlng = levelsDeep ? coordsToLatLngs(coords[i], levelsDeep - 1, _coordsToLatLng) : (_coordsToLatLng || coordsToLatLng)(coords[i]);
            latlngs.push(latlng);
          }
          return latlngs;
        }
        function latLngToCoords(latlng, precision) {
          latlng = toLatLng(latlng);
          return latlng.alt !== void 0 ? [formatNum(latlng.lng, precision), formatNum(latlng.lat, precision), formatNum(latlng.alt, precision)] : [formatNum(latlng.lng, precision), formatNum(latlng.lat, precision)];
        }
        function latLngsToCoords(latlngs, levelsDeep, closed, precision) {
          var coords = [];
          for (var i = 0, len = latlngs.length; i < len; i++) {
            coords.push(levelsDeep ? latLngsToCoords(latlngs[i], isFlat(latlngs[i]) ? 0 : levelsDeep - 1, closed, precision) : latLngToCoords(latlngs[i], precision));
          }
          if (!levelsDeep && closed && coords.length > 0) {
            coords.push(coords[0].slice());
          }
          return coords;
        }
        function getFeature(layer, newGeometry) {
          return layer.feature ? extend({}, layer.feature, { geometry: newGeometry }) : asFeature(newGeometry);
        }
        function asFeature(geojson) {
          if (geojson.type === "Feature" || geojson.type === "FeatureCollection") {
            return geojson;
          }
          return {
            type: "Feature",
            properties: {},
            geometry: geojson
          };
        }
        var PointToGeoJSON = {
          toGeoJSON: function(precision) {
            return getFeature(this, {
              type: "Point",
              coordinates: latLngToCoords(this.getLatLng(), precision)
            });
          }
        };
        Marker.include(PointToGeoJSON);
        Circle.include(PointToGeoJSON);
        CircleMarker.include(PointToGeoJSON);
        Polyline.include({
          toGeoJSON: function(precision) {
            var multi = !isFlat(this._latlngs);
            var coords = latLngsToCoords(this._latlngs, multi ? 1 : 0, false, precision);
            return getFeature(this, {
              type: (multi ? "Multi" : "") + "LineString",
              coordinates: coords
            });
          }
        });
        Polygon.include({
          toGeoJSON: function(precision) {
            var holes = !isFlat(this._latlngs), multi = holes && !isFlat(this._latlngs[0]);
            var coords = latLngsToCoords(this._latlngs, multi ? 2 : holes ? 1 : 0, true, precision);
            if (!holes) {
              coords = [coords];
            }
            return getFeature(this, {
              type: (multi ? "Multi" : "") + "Polygon",
              coordinates: coords
            });
          }
        });
        LayerGroup.include({
          toMultiPoint: function(precision) {
            var coords = [];
            this.eachLayer(function(layer) {
              coords.push(layer.toGeoJSON(precision).geometry.coordinates);
            });
            return getFeature(this, {
              type: "MultiPoint",
              coordinates: coords
            });
          },
          // @method toGeoJSON(precision?: Number|false): Object
          // Coordinates values are rounded with [`formatNum`](#util-formatnum) function with given `precision`.
          // Returns a [`GeoJSON`](https://en.wikipedia.org/wiki/GeoJSON) representation of the layer group (as a GeoJSON `FeatureCollection`, `GeometryCollection`, or `MultiPoint`).
          toGeoJSON: function(precision) {
            var type = this.feature && this.feature.geometry && this.feature.geometry.type;
            if (type === "MultiPoint") {
              return this.toMultiPoint(precision);
            }
            var isGeometryCollection = type === "GeometryCollection", jsons = [];
            this.eachLayer(function(layer) {
              if (layer.toGeoJSON) {
                var json = layer.toGeoJSON(precision);
                if (isGeometryCollection) {
                  jsons.push(json.geometry);
                } else {
                  var feature = asFeature(json);
                  if (feature.type === "FeatureCollection") {
                    jsons.push.apply(jsons, feature.features);
                  } else {
                    jsons.push(feature);
                  }
                }
              }
            });
            if (isGeometryCollection) {
              return getFeature(this, {
                geometries: jsons,
                type: "GeometryCollection"
              });
            }
            return {
              type: "FeatureCollection",
              features: jsons
            };
          }
        });
        function geoJSON(geojson, options) {
          return new GeoJSON(geojson, options);
        }
        var geoJson = geoJSON;
        var ImageOverlay = Layer.extend({
          // @section
          // @aka ImageOverlay options
          options: {
            // @option opacity: Number = 1.0
            // The opacity of the image overlay.
            opacity: 1,
            // @option alt: String = ''
            // Text for the `alt` attribute of the image (useful for accessibility).
            alt: "",
            // @option interactive: Boolean = false
            // If `true`, the image overlay will emit [mouse events](#interactive-layer) when clicked or hovered.
            interactive: false,
            // @option crossOrigin: Boolean|String = false
            // Whether the crossOrigin attribute will be added to the image.
            // If a String is provided, the image will have its crossOrigin attribute set to the String provided. This is needed if you want to access image pixel data.
            // Refer to [CORS Settings](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_settings_attributes) for valid String values.
            crossOrigin: false,
            // @option errorOverlayUrl: String = ''
            // URL to the overlay image to show in place of the overlay that failed to load.
            errorOverlayUrl: "",
            // @option zIndex: Number = 1
            // The explicit [zIndex](https://developer.mozilla.org/docs/Web/CSS/CSS_Positioning/Understanding_z_index) of the overlay layer.
            zIndex: 1,
            // @option className: String = ''
            // A custom class name to assign to the image. Empty by default.
            className: ""
          },
          initialize: function(url, bounds, options) {
            this._url = url;
            this._bounds = toLatLngBounds(bounds);
            setOptions(this, options);
          },
          onAdd: function() {
            if (!this._image) {
              this._initImage();
              if (this.options.opacity < 1) {
                this._updateOpacity();
              }
            }
            if (this.options.interactive) {
              addClass(this._image, "leaflet-interactive");
              this.addInteractiveTarget(this._image);
            }
            this.getPane().appendChild(this._image);
            this._reset();
          },
          onRemove: function() {
            remove(this._image);
            if (this.options.interactive) {
              this.removeInteractiveTarget(this._image);
            }
          },
          // @method setOpacity(opacity: Number): this
          // Sets the opacity of the overlay.
          setOpacity: function(opacity) {
            this.options.opacity = opacity;
            if (this._image) {
              this._updateOpacity();
            }
            return this;
          },
          setStyle: function(styleOpts) {
            if (styleOpts.opacity) {
              this.setOpacity(styleOpts.opacity);
            }
            return this;
          },
          // @method bringToFront(): this
          // Brings the layer to the top of all overlays.
          bringToFront: function() {
            if (this._map) {
              toFront(this._image);
            }
            return this;
          },
          // @method bringToBack(): this
          // Brings the layer to the bottom of all overlays.
          bringToBack: function() {
            if (this._map) {
              toBack(this._image);
            }
            return this;
          },
          // @method setUrl(url: String): this
          // Changes the URL of the image.
          setUrl: function(url) {
            this._url = url;
            if (this._image) {
              this._image.src = url;
            }
            return this;
          },
          // @method setBounds(bounds: LatLngBounds): this
          // Update the bounds that this ImageOverlay covers
          setBounds: function(bounds) {
            this._bounds = toLatLngBounds(bounds);
            if (this._map) {
              this._reset();
            }
            return this;
          },
          getEvents: function() {
            var events = {
              zoom: this._reset,
              viewreset: this._reset
            };
            if (this._zoomAnimated) {
              events.zoomanim = this._animateZoom;
            }
            return events;
          },
          // @method setZIndex(value: Number): this
          // Changes the [zIndex](#imageoverlay-zindex) of the image overlay.
          setZIndex: function(value) {
            this.options.zIndex = value;
            this._updateZIndex();
            return this;
          },
          // @method getBounds(): LatLngBounds
          // Get the bounds that this ImageOverlay covers
          getBounds: function() {
            return this._bounds;
          },
          // @method getElement(): HTMLElement
          // Returns the instance of [`HTMLImageElement`](https://developer.mozilla.org/docs/Web/API/HTMLImageElement)
          // used by this overlay.
          getElement: function() {
            return this._image;
          },
          _initImage: function() {
            var wasElementSupplied = this._url.tagName === "IMG";
            var img = this._image = wasElementSupplied ? this._url : create$1("img");
            addClass(img, "leaflet-image-layer");
            if (this._zoomAnimated) {
              addClass(img, "leaflet-zoom-animated");
            }
            if (this.options.className) {
              addClass(img, this.options.className);
            }
            img.onselectstart = falseFn;
            img.onmousemove = falseFn;
            img.onload = bind(this.fire, this, "load");
            img.onerror = bind(this._overlayOnError, this, "error");
            if (this.options.crossOrigin || this.options.crossOrigin === "") {
              img.crossOrigin = this.options.crossOrigin === true ? "" : this.options.crossOrigin;
            }
            if (this.options.zIndex) {
              this._updateZIndex();
            }
            if (wasElementSupplied) {
              this._url = img.src;
              return;
            }
            img.src = this._url;
            img.alt = this.options.alt;
          },
          _animateZoom: function(e) {
            var scale2 = this._map.getZoomScale(e.zoom), offset = this._map._latLngBoundsToNewLayerBounds(this._bounds, e.zoom, e.center).min;
            setTransform(this._image, offset, scale2);
          },
          _reset: function() {
            var image = this._image, bounds = new Bounds(
              this._map.latLngToLayerPoint(this._bounds.getNorthWest()),
              this._map.latLngToLayerPoint(this._bounds.getSouthEast())
            ), size = bounds.getSize();
            setPosition(image, bounds.min);
            image.style.width = size.x + "px";
            image.style.height = size.y + "px";
          },
          _updateOpacity: function() {
            setOpacity(this._image, this.options.opacity);
          },
          _updateZIndex: function() {
            if (this._image && this.options.zIndex !== void 0 && this.options.zIndex !== null) {
              this._image.style.zIndex = this.options.zIndex;
            }
          },
          _overlayOnError: function() {
            this.fire("error");
            var errorUrl = this.options.errorOverlayUrl;
            if (errorUrl && this._url !== errorUrl) {
              this._url = errorUrl;
              this._image.src = errorUrl;
            }
          },
          // @method getCenter(): LatLng
          // Returns the center of the ImageOverlay.
          getCenter: function() {
            return this._bounds.getCenter();
          }
        });
        var imageOverlay = function(url, bounds, options) {
          return new ImageOverlay(url, bounds, options);
        };
        var VideoOverlay = ImageOverlay.extend({
          // @section
          // @aka VideoOverlay options
          options: {
            // @option autoplay: Boolean = true
            // Whether the video starts playing automatically when loaded.
            // On some browsers autoplay will only work with `muted: true`
            autoplay: true,
            // @option loop: Boolean = true
            // Whether the video will loop back to the beginning when played.
            loop: true,
            // @option keepAspectRatio: Boolean = true
            // Whether the video will save aspect ratio after the projection.
            // Relevant for supported browsers. See [browser compatibility](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit)
            keepAspectRatio: true,
            // @option muted: Boolean = false
            // Whether the video starts on mute when loaded.
            muted: false,
            // @option playsInline: Boolean = true
            // Mobile browsers will play the video right where it is instead of open it up in fullscreen mode.
            playsInline: true
          },
          _initImage: function() {
            var wasElementSupplied = this._url.tagName === "VIDEO";
            var vid = this._image = wasElementSupplied ? this._url : create$1("video");
            addClass(vid, "leaflet-image-layer");
            if (this._zoomAnimated) {
              addClass(vid, "leaflet-zoom-animated");
            }
            if (this.options.className) {
              addClass(vid, this.options.className);
            }
            vid.onselectstart = falseFn;
            vid.onmousemove = falseFn;
            vid.onloadeddata = bind(this.fire, this, "load");
            if (wasElementSupplied) {
              var sourceElements = vid.getElementsByTagName("source");
              var sources = [];
              for (var j = 0; j < sourceElements.length; j++) {
                sources.push(sourceElements[j].src);
              }
              this._url = sourceElements.length > 0 ? sources : [vid.src];
              return;
            }
            if (!isArray(this._url)) {
              this._url = [this._url];
            }
            if (!this.options.keepAspectRatio && Object.prototype.hasOwnProperty.call(vid.style, "objectFit")) {
              vid.style["objectFit"] = "fill";
            }
            vid.autoplay = !!this.options.autoplay;
            vid.loop = !!this.options.loop;
            vid.muted = !!this.options.muted;
            vid.playsInline = !!this.options.playsInline;
            for (var i = 0; i < this._url.length; i++) {
              var source = create$1("source");
              source.src = this._url[i];
              vid.appendChild(source);
            }
          }
          // @method getElement(): HTMLVideoElement
          // Returns the instance of [`HTMLVideoElement`](https://developer.mozilla.org/docs/Web/API/HTMLVideoElement)
          // used by this overlay.
        });
        function videoOverlay(video, bounds, options) {
          return new VideoOverlay(video, bounds, options);
        }
        var SVGOverlay = ImageOverlay.extend({
          _initImage: function() {
            var el = this._image = this._url;
            addClass(el, "leaflet-image-layer");
            if (this._zoomAnimated) {
              addClass(el, "leaflet-zoom-animated");
            }
            if (this.options.className) {
              addClass(el, this.options.className);
            }
            el.onselectstart = falseFn;
            el.onmousemove = falseFn;
          }
          // @method getElement(): SVGElement
          // Returns the instance of [`SVGElement`](https://developer.mozilla.org/docs/Web/API/SVGElement)
          // used by this overlay.
        });
        function svgOverlay(el, bounds, options) {
          return new SVGOverlay(el, bounds, options);
        }
        var DivOverlay = Layer.extend({
          // @section
          // @aka DivOverlay options
          options: {
            // @option interactive: Boolean = false
            // If true, the popup/tooltip will listen to the mouse events.
            interactive: false,
            // @option offset: Point = Point(0, 0)
            // The offset of the overlay position.
            offset: [0, 0],
            // @option className: String = ''
            // A custom CSS class name to assign to the overlay.
            className: "",
            // @option pane: String = undefined
            // `Map pane` where the overlay will be added.
            pane: void 0,
            // @option content: String|HTMLElement|Function = ''
            // Sets the HTML content of the overlay while initializing. If a function is passed the source layer will be
            // passed to the function. The function should return a `String` or `HTMLElement` to be used in the overlay.
            content: ""
          },
          initialize: function(options, source) {
            if (options && (options instanceof LatLng || isArray(options))) {
              this._latlng = toLatLng(options);
              setOptions(this, source);
            } else {
              setOptions(this, options);
              this._source = source;
            }
            if (this.options.content) {
              this._content = this.options.content;
            }
          },
          // @method openOn(map: Map): this
          // Adds the overlay to the map.
          // Alternative to `map.openPopup(popup)`/`.openTooltip(tooltip)`.
          openOn: function(map) {
            map = arguments.length ? map : this._source._map;
            if (!map.hasLayer(this)) {
              map.addLayer(this);
            }
            return this;
          },
          // @method close(): this
          // Closes the overlay.
          // Alternative to `map.closePopup(popup)`/`.closeTooltip(tooltip)`
          // and `layer.closePopup()`/`.closeTooltip()`.
          close: function() {
            if (this._map) {
              this._map.removeLayer(this);
            }
            return this;
          },
          // @method toggle(layer?: Layer): this
          // Opens or closes the overlay bound to layer depending on its current state.
          // Argument may be omitted only for overlay bound to layer.
          // Alternative to `layer.togglePopup()`/`.toggleTooltip()`.
          toggle: function(layer) {
            if (this._map) {
              this.close();
            } else {
              if (arguments.length) {
                this._source = layer;
              } else {
                layer = this._source;
              }
              this._prepareOpen();
              this.openOn(layer._map);
            }
            return this;
          },
          onAdd: function(map) {
            this._zoomAnimated = map._zoomAnimated;
            if (!this._container) {
              this._initLayout();
            }
            if (map._fadeAnimated) {
              setOpacity(this._container, 0);
            }
            clearTimeout(this._removeTimeout);
            this.getPane().appendChild(this._container);
            this.update();
            if (map._fadeAnimated) {
              setOpacity(this._container, 1);
            }
            this.bringToFront();
            if (this.options.interactive) {
              addClass(this._container, "leaflet-interactive");
              this.addInteractiveTarget(this._container);
            }
          },
          onRemove: function(map) {
            if (map._fadeAnimated) {
              setOpacity(this._container, 0);
              this._removeTimeout = setTimeout(bind(remove, void 0, this._container), 200);
            } else {
              remove(this._container);
            }
            if (this.options.interactive) {
              removeClass(this._container, "leaflet-interactive");
              this.removeInteractiveTarget(this._container);
            }
          },
          // @namespace DivOverlay
          // @method getLatLng: LatLng
          // Returns the geographical point of the overlay.
          getLatLng: function() {
            return this._latlng;
          },
          // @method setLatLng(latlng: LatLng): this
          // Sets the geographical point where the overlay will open.
          setLatLng: function(latlng) {
            this._latlng = toLatLng(latlng);
            if (this._map) {
              this._updatePosition();
              this._adjustPan();
            }
            return this;
          },
          // @method getContent: String|HTMLElement
          // Returns the content of the overlay.
          getContent: function() {
            return this._content;
          },
          // @method setContent(htmlContent: String|HTMLElement|Function): this
          // Sets the HTML content of the overlay. If a function is passed the source layer will be passed to the function.
          // The function should return a `String` or `HTMLElement` to be used in the overlay.
          setContent: function(content) {
            this._content = content;
            this.update();
            return this;
          },
          // @method getElement: String|HTMLElement
          // Returns the HTML container of the overlay.
          getElement: function() {
            return this._container;
          },
          // @method update: null
          // Updates the overlay content, layout and position. Useful for updating the overlay after something inside changed, e.g. image loaded.
          update: function() {
            if (!this._map) {
              return;
            }
            this._container.style.visibility = "hidden";
            this._updateContent();
            this._updateLayout();
            this._updatePosition();
            this._container.style.visibility = "";
            this._adjustPan();
          },
          getEvents: function() {
            var events = {
              zoom: this._updatePosition,
              viewreset: this._updatePosition
            };
            if (this._zoomAnimated) {
              events.zoomanim = this._animateZoom;
            }
            return events;
          },
          // @method isOpen: Boolean
          // Returns `true` when the overlay is visible on the map.
          isOpen: function() {
            return !!this._map && this._map.hasLayer(this);
          },
          // @method bringToFront: this
          // Brings this overlay in front of other overlays (in the same map pane).
          bringToFront: function() {
            if (this._map) {
              toFront(this._container);
            }
            return this;
          },
          // @method bringToBack: this
          // Brings this overlay to the back of other overlays (in the same map pane).
          bringToBack: function() {
            if (this._map) {
              toBack(this._container);
            }
            return this;
          },
          // prepare bound overlay to open: update latlng pos / content source (for FeatureGroup)
          _prepareOpen: function(latlng) {
            var source = this._source;
            if (!source._map) {
              return false;
            }
            if (source instanceof FeatureGroup) {
              source = null;
              var layers2 = this._source._layers;
              for (var id in layers2) {
                if (layers2[id]._map) {
                  source = layers2[id];
                  break;
                }
              }
              if (!source) {
                return false;
              }
              this._source = source;
            }
            if (!latlng) {
              if (source.getCenter) {
                latlng = source.getCenter();
              } else if (source.getLatLng) {
                latlng = source.getLatLng();
              } else if (source.getBounds) {
                latlng = source.getBounds().getCenter();
              } else {
                throw new Error("Unable to get source layer LatLng.");
              }
            }
            this.setLatLng(latlng);
            if (this._map) {
              this.update();
            }
            return true;
          },
          _updateContent: function() {
            if (!this._content) {
              return;
            }
            var node = this._contentNode;
            var content = typeof this._content === "function" ? this._content(this._source || this) : this._content;
            if (typeof content === "string") {
              node.innerHTML = content;
            } else {
              while (node.hasChildNodes()) {
                node.removeChild(node.firstChild);
              }
              node.appendChild(content);
            }
            this.fire("contentupdate");
          },
          _updatePosition: function() {
            if (!this._map) {
              return;
            }
            var pos = this._map.latLngToLayerPoint(this._latlng), offset = toPoint(this.options.offset), anchor = this._getAnchor();
            if (this._zoomAnimated) {
              setPosition(this._container, pos.add(anchor));
            } else {
              offset = offset.add(pos).add(anchor);
            }
            var bottom = this._containerBottom = -offset.y, left = this._containerLeft = -Math.round(this._containerWidth / 2) + offset.x;
            this._container.style.bottom = bottom + "px";
            this._container.style.left = left + "px";
          },
          _getAnchor: function() {
            return [0, 0];
          }
        });
        Map.include({
          _initOverlay: function(OverlayClass, content, latlng, options) {
            var overlay = content;
            if (!(overlay instanceof OverlayClass)) {
              overlay = new OverlayClass(options).setContent(content);
            }
            if (latlng) {
              overlay.setLatLng(latlng);
            }
            return overlay;
          }
        });
        Layer.include({
          _initOverlay: function(OverlayClass, old, content, options) {
            var overlay = content;
            if (overlay instanceof OverlayClass) {
              setOptions(overlay, options);
              overlay._source = this;
            } else {
              overlay = old && !options ? old : new OverlayClass(options, this);
              overlay.setContent(content);
            }
            return overlay;
          }
        });
        var Popup = DivOverlay.extend({
          // @section
          // @aka Popup options
          options: {
            // @option pane: String = 'popupPane'
            // `Map pane` where the popup will be added.
            pane: "popupPane",
            // @option offset: Point = Point(0, 7)
            // The offset of the popup position.
            offset: [0, 7],
            // @option maxWidth: Number = 300
            // Max width of the popup, in pixels.
            maxWidth: 300,
            // @option minWidth: Number = 50
            // Min width of the popup, in pixels.
            minWidth: 50,
            // @option maxHeight: Number = null
            // If set, creates a scrollable container of the given height
            // inside a popup if its content exceeds it.
            // The scrollable container can be styled using the
            // `leaflet-popup-scrolled` CSS class selector.
            maxHeight: null,
            // @option autoPan: Boolean = true
            // Set it to `false` if you don't want the map to do panning animation
            // to fit the opened popup.
            autoPan: true,
            // @option autoPanPaddingTopLeft: Point = null
            // The margin between the popup and the top left corner of the map
            // view after autopanning was performed.
            autoPanPaddingTopLeft: null,
            // @option autoPanPaddingBottomRight: Point = null
            // The margin between the popup and the bottom right corner of the map
            // view after autopanning was performed.
            autoPanPaddingBottomRight: null,
            // @option autoPanPadding: Point = Point(5, 5)
            // Equivalent of setting both top left and bottom right autopan padding to the same value.
            autoPanPadding: [5, 5],
            // @option keepInView: Boolean = false
            // Set it to `true` if you want to prevent users from panning the popup
            // off of the screen while it is open.
            keepInView: false,
            // @option closeButton: Boolean = true
            // Controls the presence of a close button in the popup.
            closeButton: true,
            // @option autoClose: Boolean = true
            // Set it to `false` if you want to override the default behavior of
            // the popup closing when another popup is opened.
            autoClose: true,
            // @option closeOnEscapeKey: Boolean = true
            // Set it to `false` if you want to override the default behavior of
            // the ESC key for closing of the popup.
            closeOnEscapeKey: true,
            // @option closeOnClick: Boolean = *
            // Set it if you want to override the default behavior of the popup closing when user clicks
            // on the map. Defaults to the map's [`closePopupOnClick`](#map-closepopuponclick) option.
            // @option className: String = ''
            // A custom CSS class name to assign to the popup.
            className: ""
          },
          // @namespace Popup
          // @method openOn(map: Map): this
          // Alternative to `map.openPopup(popup)`.
          // Adds the popup to the map and closes the previous one.
          openOn: function(map) {
            map = arguments.length ? map : this._source._map;
            if (!map.hasLayer(this) && map._popup && map._popup.options.autoClose) {
              map.removeLayer(map._popup);
            }
            map._popup = this;
            return DivOverlay.prototype.openOn.call(this, map);
          },
          onAdd: function(map) {
            DivOverlay.prototype.onAdd.call(this, map);
            map.fire("popupopen", { popup: this });
            if (this._source) {
              this._source.fire("popupopen", { popup: this }, true);
              if (!(this._source instanceof Path)) {
                this._source.on("preclick", stopPropagation);
              }
            }
          },
          onRemove: function(map) {
            DivOverlay.prototype.onRemove.call(this, map);
            map.fire("popupclose", { popup: this });
            if (this._source) {
              this._source.fire("popupclose", { popup: this }, true);
              if (!(this._source instanceof Path)) {
                this._source.off("preclick", stopPropagation);
              }
            }
          },
          getEvents: function() {
            var events = DivOverlay.prototype.getEvents.call(this);
            if (this.options.closeOnClick !== void 0 ? this.options.closeOnClick : this._map.options.closePopupOnClick) {
              events.preclick = this.close;
            }
            if (this.options.keepInView) {
              events.moveend = this._adjustPan;
            }
            return events;
          },
          _initLayout: function() {
            var prefix = "leaflet-popup", container = this._container = create$1(
              "div",
              prefix + " " + (this.options.className || "") + " leaflet-zoom-animated"
            );
            var wrapper = this._wrapper = create$1("div", prefix + "-content-wrapper", container);
            this._contentNode = create$1("div", prefix + "-content", wrapper);
            disableClickPropagation(container);
            disableScrollPropagation(this._contentNode);
            on(container, "contextmenu", stopPropagation);
            this._tipContainer = create$1("div", prefix + "-tip-container", container);
            this._tip = create$1("div", prefix + "-tip", this._tipContainer);
            if (this.options.closeButton) {
              var closeButton = this._closeButton = create$1("a", prefix + "-close-button", container);
              closeButton.setAttribute("role", "button");
              closeButton.setAttribute("aria-label", "Close popup");
              closeButton.href = "#close";
              closeButton.innerHTML = '<span aria-hidden="true">&#215;</span>';
              on(closeButton, "click", function(ev) {
                preventDefault(ev);
                this.close();
              }, this);
            }
          },
          _updateLayout: function() {
            var container = this._contentNode, style2 = container.style;
            style2.width = "";
            style2.whiteSpace = "nowrap";
            var width = container.offsetWidth;
            width = Math.min(width, this.options.maxWidth);
            width = Math.max(width, this.options.minWidth);
            style2.width = width + 1 + "px";
            style2.whiteSpace = "";
            style2.height = "";
            var height = container.offsetHeight, maxHeight = this.options.maxHeight, scrolledClass = "leaflet-popup-scrolled";
            if (maxHeight && height > maxHeight) {
              style2.height = maxHeight + "px";
              addClass(container, scrolledClass);
            } else {
              removeClass(container, scrolledClass);
            }
            this._containerWidth = this._container.offsetWidth;
          },
          _animateZoom: function(e) {
            var pos = this._map._latLngToNewLayerPoint(this._latlng, e.zoom, e.center), anchor = this._getAnchor();
            setPosition(this._container, pos.add(anchor));
          },
          _adjustPan: function() {
            if (!this.options.autoPan) {
              return;
            }
            if (this._map._panAnim) {
              this._map._panAnim.stop();
            }
            if (this._autopanning) {
              this._autopanning = false;
              return;
            }
            var map = this._map, marginBottom = parseInt(getStyle(this._container, "marginBottom"), 10) || 0, containerHeight = this._container.offsetHeight + marginBottom, containerWidth = this._containerWidth, layerPos = new Point(this._containerLeft, -containerHeight - this._containerBottom);
            layerPos._add(getPosition(this._container));
            var containerPos = map.layerPointToContainerPoint(layerPos), padding = toPoint(this.options.autoPanPadding), paddingTL = toPoint(this.options.autoPanPaddingTopLeft || padding), paddingBR = toPoint(this.options.autoPanPaddingBottomRight || padding), size = map.getSize(), dx = 0, dy = 0;
            if (containerPos.x + containerWidth + paddingBR.x > size.x) {
              dx = containerPos.x + containerWidth - size.x + paddingBR.x;
            }
            if (containerPos.x - dx - paddingTL.x < 0) {
              dx = containerPos.x - paddingTL.x;
            }
            if (containerPos.y + containerHeight + paddingBR.y > size.y) {
              dy = containerPos.y + containerHeight - size.y + paddingBR.y;
            }
            if (containerPos.y - dy - paddingTL.y < 0) {
              dy = containerPos.y - paddingTL.y;
            }
            if (dx || dy) {
              if (this.options.keepInView) {
                this._autopanning = true;
              }
              map.fire("autopanstart").panBy([dx, dy]);
            }
          },
          _getAnchor: function() {
            return toPoint(this._source && this._source._getPopupAnchor ? this._source._getPopupAnchor() : [0, 0]);
          }
        });
        var popup = function(options, source) {
          return new Popup(options, source);
        };
        Map.mergeOptions({
          closePopupOnClick: true
        });
        Map.include({
          // @method openPopup(popup: Popup): this
          // Opens the specified popup while closing the previously opened (to make sure only one is opened at one time for usability).
          // @alternative
          // @method openPopup(content: String|HTMLElement, latlng: LatLng, options?: Popup options): this
          // Creates a popup with the specified content and options and opens it in the given point on a map.
          openPopup: function(popup2, latlng, options) {
            this._initOverlay(Popup, popup2, latlng, options).openOn(this);
            return this;
          },
          // @method closePopup(popup?: Popup): this
          // Closes the popup previously opened with [openPopup](#map-openpopup) (or the given one).
          closePopup: function(popup2) {
            popup2 = arguments.length ? popup2 : this._popup;
            if (popup2) {
              popup2.close();
            }
            return this;
          }
        });
        Layer.include({
          // @method bindPopup(content: String|HTMLElement|Function|Popup, options?: Popup options): this
          // Binds a popup to the layer with the passed `content` and sets up the
          // necessary event listeners. If a `Function` is passed it will receive
          // the layer as the first argument and should return a `String` or `HTMLElement`.
          bindPopup: function(content, options) {
            this._popup = this._initOverlay(Popup, this._popup, content, options);
            if (!this._popupHandlersAdded) {
              this.on({
                click: this._openPopup,
                keypress: this._onKeyPress,
                remove: this.closePopup,
                move: this._movePopup
              });
              this._popupHandlersAdded = true;
            }
            return this;
          },
          // @method unbindPopup(): this
          // Removes the popup previously bound with `bindPopup`.
          unbindPopup: function() {
            if (this._popup) {
              this.off({
                click: this._openPopup,
                keypress: this._onKeyPress,
                remove: this.closePopup,
                move: this._movePopup
              });
              this._popupHandlersAdded = false;
              this._popup = null;
            }
            return this;
          },
          // @method openPopup(latlng?: LatLng): this
          // Opens the bound popup at the specified `latlng` or at the default popup anchor if no `latlng` is passed.
          openPopup: function(latlng) {
            if (this._popup) {
              if (!(this instanceof FeatureGroup)) {
                this._popup._source = this;
              }
              if (this._popup._prepareOpen(latlng || this._latlng)) {
                this._popup.openOn(this._map);
              }
            }
            return this;
          },
          // @method closePopup(): this
          // Closes the popup bound to this layer if it is open.
          closePopup: function() {
            if (this._popup) {
              this._popup.close();
            }
            return this;
          },
          // @method togglePopup(): this
          // Opens or closes the popup bound to this layer depending on its current state.
          togglePopup: function() {
            if (this._popup) {
              this._popup.toggle(this);
            }
            return this;
          },
          // @method isPopupOpen(): boolean
          // Returns `true` if the popup bound to this layer is currently open.
          isPopupOpen: function() {
            return this._popup ? this._popup.isOpen() : false;
          },
          // @method setPopupContent(content: String|HTMLElement|Popup): this
          // Sets the content of the popup bound to this layer.
          setPopupContent: function(content) {
            if (this._popup) {
              this._popup.setContent(content);
            }
            return this;
          },
          // @method getPopup(): Popup
          // Returns the popup bound to this layer.
          getPopup: function() {
            return this._popup;
          },
          _openPopup: function(e) {
            if (!this._popup || !this._map) {
              return;
            }
            stop(e);
            var target = e.layer || e.target;
            if (this._popup._source === target && !(target instanceof Path)) {
              if (this._map.hasLayer(this._popup)) {
                this.closePopup();
              } else {
                this.openPopup(e.latlng);
              }
              return;
            }
            this._popup._source = target;
            this.openPopup(e.latlng);
          },
          _movePopup: function(e) {
            this._popup.setLatLng(e.latlng);
          },
          _onKeyPress: function(e) {
            if (e.originalEvent.keyCode === 13) {
              this._openPopup(e);
            }
          }
        });
        var Tooltip = DivOverlay.extend({
          // @section
          // @aka Tooltip options
          options: {
            // @option pane: String = 'tooltipPane'
            // `Map pane` where the tooltip will be added.
            pane: "tooltipPane",
            // @option offset: Point = Point(0, 0)
            // Optional offset of the tooltip position.
            offset: [0, 0],
            // @option direction: String = 'auto'
            // Direction where to open the tooltip. Possible values are: `right`, `left`,
            // `top`, `bottom`, `center`, `auto`.
            // `auto` will dynamically switch between `right` and `left` according to the tooltip
            // position on the map.
            direction: "auto",
            // @option permanent: Boolean = false
            // Whether to open the tooltip permanently or only on mouseover.
            permanent: false,
            // @option sticky: Boolean = false
            // If true, the tooltip will follow the mouse instead of being fixed at the feature center.
            sticky: false,
            // @option opacity: Number = 0.9
            // Tooltip container opacity.
            opacity: 0.9
          },
          onAdd: function(map) {
            DivOverlay.prototype.onAdd.call(this, map);
            this.setOpacity(this.options.opacity);
            map.fire("tooltipopen", { tooltip: this });
            if (this._source) {
              this.addEventParent(this._source);
              this._source.fire("tooltipopen", { tooltip: this }, true);
            }
          },
          onRemove: function(map) {
            DivOverlay.prototype.onRemove.call(this, map);
            map.fire("tooltipclose", { tooltip: this });
            if (this._source) {
              this.removeEventParent(this._source);
              this._source.fire("tooltipclose", { tooltip: this }, true);
            }
          },
          getEvents: function() {
            var events = DivOverlay.prototype.getEvents.call(this);
            if (!this.options.permanent) {
              events.preclick = this.close;
            }
            return events;
          },
          _initLayout: function() {
            var prefix = "leaflet-tooltip", className = prefix + " " + (this.options.className || "") + " leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide");
            this._contentNode = this._container = create$1("div", className);
            this._container.setAttribute("role", "tooltip");
            this._container.setAttribute("id", "leaflet-tooltip-" + stamp(this));
          },
          _updateLayout: function() {
          },
          _adjustPan: function() {
          },
          _setPosition: function(pos) {
            var subX, subY, map = this._map, container = this._container, centerPoint = map.latLngToContainerPoint(map.getCenter()), tooltipPoint = map.layerPointToContainerPoint(pos), direction = this.options.direction, tooltipWidth = container.offsetWidth, tooltipHeight = container.offsetHeight, offset = toPoint(this.options.offset), anchor = this._getAnchor();
            if (direction === "top") {
              subX = tooltipWidth / 2;
              subY = tooltipHeight;
            } else if (direction === "bottom") {
              subX = tooltipWidth / 2;
              subY = 0;
            } else if (direction === "center") {
              subX = tooltipWidth / 2;
              subY = tooltipHeight / 2;
            } else if (direction === "right") {
              subX = 0;
              subY = tooltipHeight / 2;
            } else if (direction === "left") {
              subX = tooltipWidth;
              subY = tooltipHeight / 2;
            } else if (tooltipPoint.x < centerPoint.x) {
              direction = "right";
              subX = 0;
              subY = tooltipHeight / 2;
            } else {
              direction = "left";
              subX = tooltipWidth + (offset.x + anchor.x) * 2;
              subY = tooltipHeight / 2;
            }
            pos = pos.subtract(toPoint(subX, subY, true)).add(offset).add(anchor);
            removeClass(container, "leaflet-tooltip-right");
            removeClass(container, "leaflet-tooltip-left");
            removeClass(container, "leaflet-tooltip-top");
            removeClass(container, "leaflet-tooltip-bottom");
            addClass(container, "leaflet-tooltip-" + direction);
            setPosition(container, pos);
          },
          _updatePosition: function() {
            var pos = this._map.latLngToLayerPoint(this._latlng);
            this._setPosition(pos);
          },
          setOpacity: function(opacity) {
            this.options.opacity = opacity;
            if (this._container) {
              setOpacity(this._container, opacity);
            }
          },
          _animateZoom: function(e) {
            var pos = this._map._latLngToNewLayerPoint(this._latlng, e.zoom, e.center);
            this._setPosition(pos);
          },
          _getAnchor: function() {
            return toPoint(this._source && this._source._getTooltipAnchor && !this.options.sticky ? this._source._getTooltipAnchor() : [0, 0]);
          }
        });
        var tooltip = function(options, source) {
          return new Tooltip(options, source);
        };
        Map.include({
          // @method openTooltip(tooltip: Tooltip): this
          // Opens the specified tooltip.
          // @alternative
          // @method openTooltip(content: String|HTMLElement, latlng: LatLng, options?: Tooltip options): this
          // Creates a tooltip with the specified content and options and open it.
          openTooltip: function(tooltip2, latlng, options) {
            this._initOverlay(Tooltip, tooltip2, latlng, options).openOn(this);
            return this;
          },
          // @method closeTooltip(tooltip: Tooltip): this
          // Closes the tooltip given as parameter.
          closeTooltip: function(tooltip2) {
            tooltip2.close();
            return this;
          }
        });
        Layer.include({
          // @method bindTooltip(content: String|HTMLElement|Function|Tooltip, options?: Tooltip options): this
          // Binds a tooltip to the layer with the passed `content` and sets up the
          // necessary event listeners. If a `Function` is passed it will receive
          // the layer as the first argument and should return a `String` or `HTMLElement`.
          bindTooltip: function(content, options) {
            if (this._tooltip && this.isTooltipOpen()) {
              this.unbindTooltip();
            }
            this._tooltip = this._initOverlay(Tooltip, this._tooltip, content, options);
            this._initTooltipInteractions();
            if (this._tooltip.options.permanent && this._map && this._map.hasLayer(this)) {
              this.openTooltip();
            }
            return this;
          },
          // @method unbindTooltip(): this
          // Removes the tooltip previously bound with `bindTooltip`.
          unbindTooltip: function() {
            if (this._tooltip) {
              this._initTooltipInteractions(true);
              this.closeTooltip();
              this._tooltip = null;
            }
            return this;
          },
          _initTooltipInteractions: function(remove2) {
            if (!remove2 && this._tooltipHandlersAdded) {
              return;
            }
            var onOff = remove2 ? "off" : "on", events = {
              remove: this.closeTooltip,
              move: this._moveTooltip
            };
            if (!this._tooltip.options.permanent) {
              events.mouseover = this._openTooltip;
              events.mouseout = this.closeTooltip;
              events.click = this._openTooltip;
              if (this._map) {
                this._addFocusListeners();
              } else {
                events.add = this._addFocusListeners;
              }
            } else {
              events.add = this._openTooltip;
            }
            if (this._tooltip.options.sticky) {
              events.mousemove = this._moveTooltip;
            }
            this[onOff](events);
            this._tooltipHandlersAdded = !remove2;
          },
          // @method openTooltip(latlng?: LatLng): this
          // Opens the bound tooltip at the specified `latlng` or at the default tooltip anchor if no `latlng` is passed.
          openTooltip: function(latlng) {
            if (this._tooltip) {
              if (!(this instanceof FeatureGroup)) {
                this._tooltip._source = this;
              }
              if (this._tooltip._prepareOpen(latlng)) {
                this._tooltip.openOn(this._map);
                if (this.getElement) {
                  this._setAriaDescribedByOnLayer(this);
                } else if (this.eachLayer) {
                  this.eachLayer(this._setAriaDescribedByOnLayer, this);
                }
              }
            }
            return this;
          },
          // @method closeTooltip(): this
          // Closes the tooltip bound to this layer if it is open.
          closeTooltip: function() {
            if (this._tooltip) {
              return this._tooltip.close();
            }
          },
          // @method toggleTooltip(): this
          // Opens or closes the tooltip bound to this layer depending on its current state.
          toggleTooltip: function() {
            if (this._tooltip) {
              this._tooltip.toggle(this);
            }
            return this;
          },
          // @method isTooltipOpen(): boolean
          // Returns `true` if the tooltip bound to this layer is currently open.
          isTooltipOpen: function() {
            return this._tooltip.isOpen();
          },
          // @method setTooltipContent(content: String|HTMLElement|Tooltip): this
          // Sets the content of the tooltip bound to this layer.
          setTooltipContent: function(content) {
            if (this._tooltip) {
              this._tooltip.setContent(content);
            }
            return this;
          },
          // @method getTooltip(): Tooltip
          // Returns the tooltip bound to this layer.
          getTooltip: function() {
            return this._tooltip;
          },
          _addFocusListeners: function() {
            if (this.getElement) {
              this._addFocusListenersOnLayer(this);
            } else if (this.eachLayer) {
              this.eachLayer(this._addFocusListenersOnLayer, this);
            }
          },
          _addFocusListenersOnLayer: function(layer) {
            var el = typeof layer.getElement === "function" && layer.getElement();
            if (el) {
              on(el, "focus", function() {
                this._tooltip._source = layer;
                this.openTooltip();
              }, this);
              on(el, "blur", this.closeTooltip, this);
            }
          },
          _setAriaDescribedByOnLayer: function(layer) {
            var el = typeof layer.getElement === "function" && layer.getElement();
            if (el) {
              el.setAttribute("aria-describedby", this._tooltip._container.id);
            }
          },
          _openTooltip: function(e) {
            if (!this._tooltip || !this._map) {
              return;
            }
            if (this._map.dragging && this._map.dragging.moving() && !this._openOnceFlag) {
              this._openOnceFlag = true;
              var that = this;
              this._map.once("moveend", function() {
                that._openOnceFlag = false;
                that._openTooltip(e);
              });
              return;
            }
            this._tooltip._source = e.layer || e.target;
            this.openTooltip(this._tooltip.options.sticky ? e.latlng : void 0);
          },
          _moveTooltip: function(e) {
            var latlng = e.latlng, containerPoint, layerPoint;
            if (this._tooltip.options.sticky && e.originalEvent) {
              containerPoint = this._map.mouseEventToContainerPoint(e.originalEvent);
              layerPoint = this._map.containerPointToLayerPoint(containerPoint);
              latlng = this._map.layerPointToLatLng(layerPoint);
            }
            this._tooltip.setLatLng(latlng);
          }
        });
        var DivIcon = Icon.extend({
          options: {
            // @section
            // @aka DivIcon options
            iconSize: [12, 12],
            // also can be set through CSS
            // iconAnchor: (Point),
            // popupAnchor: (Point),
            // @option html: String|HTMLElement = ''
            // Custom HTML code to put inside the div element, empty by default. Alternatively,
            // an instance of `HTMLElement`.
            html: false,
            // @option bgPos: Point = [0, 0]
            // Optional relative position of the background, in pixels
            bgPos: null,
            className: "leaflet-div-icon"
          },
          createIcon: function(oldIcon) {
            var div = oldIcon && oldIcon.tagName === "DIV" ? oldIcon : document.createElement("div"), options = this.options;
            if (options.html instanceof Element) {
              empty(div);
              div.appendChild(options.html);
            } else {
              div.innerHTML = options.html !== false ? options.html : "";
            }
            if (options.bgPos) {
              var bgPos = toPoint(options.bgPos);
              div.style.backgroundPosition = -bgPos.x + "px " + -bgPos.y + "px";
            }
            this._setIconStyles(div, "icon");
            return div;
          },
          createShadow: function() {
            return null;
          }
        });
        function divIcon(options) {
          return new DivIcon(options);
        }
        Icon.Default = IconDefault;
        var GridLayer = Layer.extend({
          // @section
          // @aka GridLayer options
          options: {
            // @option tileSize: Number|Point = 256
            // Width and height of tiles in the grid. Use a number if width and height are equal, or `L.point(width, height)` otherwise.
            tileSize: 256,
            // @option opacity: Number = 1.0
            // Opacity of the tiles. Can be used in the `createTile()` function.
            opacity: 1,
            // @option updateWhenIdle: Boolean = (depends)
            // Load new tiles only when panning ends.
            // `true` by default on mobile browsers, in order to avoid too many requests and keep smooth navigation.
            // `false` otherwise in order to display new tiles _during_ panning, since it is easy to pan outside the
            // [`keepBuffer`](#gridlayer-keepbuffer) option in desktop browsers.
            updateWhenIdle: Browser.mobile,
            // @option updateWhenZooming: Boolean = true
            // By default, a smooth zoom animation (during a [touch zoom](#map-touchzoom) or a [`flyTo()`](#map-flyto)) will update grid layers every integer zoom level. Setting this option to `false` will update the grid layer only when the smooth animation ends.
            updateWhenZooming: true,
            // @option updateInterval: Number = 200
            // Tiles will not update more than once every `updateInterval` milliseconds when panning.
            updateInterval: 200,
            // @option zIndex: Number = 1
            // The explicit zIndex of the tile layer.
            zIndex: 1,
            // @option bounds: LatLngBounds = undefined
            // If set, tiles will only be loaded inside the set `LatLngBounds`.
            bounds: null,
            // @option minZoom: Number = 0
            // The minimum zoom level down to which this layer will be displayed (inclusive).
            minZoom: 0,
            // @option maxZoom: Number = undefined
            // The maximum zoom level up to which this layer will be displayed (inclusive).
            maxZoom: void 0,
            // @option maxNativeZoom: Number = undefined
            // Maximum zoom number the tile source has available. If it is specified,
            // the tiles on all zoom levels higher than `maxNativeZoom` will be loaded
            // from `maxNativeZoom` level and auto-scaled.
            maxNativeZoom: void 0,
            // @option minNativeZoom: Number = undefined
            // Minimum zoom number the tile source has available. If it is specified,
            // the tiles on all zoom levels lower than `minNativeZoom` will be loaded
            // from `minNativeZoom` level and auto-scaled.
            minNativeZoom: void 0,
            // @option noWrap: Boolean = false
            // Whether the layer is wrapped around the antimeridian. If `true`, the
            // GridLayer will only be displayed once at low zoom levels. Has no
            // effect when the [map CRS](#map-crs) doesn't wrap around. Can be used
            // in combination with [`bounds`](#gridlayer-bounds) to prevent requesting
            // tiles outside the CRS limits.
            noWrap: false,
            // @option pane: String = 'tilePane'
            // `Map pane` where the grid layer will be added.
            pane: "tilePane",
            // @option className: String = ''
            // A custom class name to assign to the tile layer. Empty by default.
            className: "",
            // @option keepBuffer: Number = 2
            // When panning the map, keep this many rows and columns of tiles before unloading them.
            keepBuffer: 2
          },
          initialize: function(options) {
            setOptions(this, options);
          },
          onAdd: function() {
            this._initContainer();
            this._levels = {};
            this._tiles = {};
            this._resetView();
          },
          beforeAdd: function(map) {
            map._addZoomLimit(this);
          },
          onRemove: function(map) {
            this._removeAllTiles();
            remove(this._container);
            map._removeZoomLimit(this);
            this._container = null;
            this._tileZoom = void 0;
          },
          // @method bringToFront: this
          // Brings the tile layer to the top of all tile layers.
          bringToFront: function() {
            if (this._map) {
              toFront(this._container);
              this._setAutoZIndex(Math.max);
            }
            return this;
          },
          // @method bringToBack: this
          // Brings the tile layer to the bottom of all tile layers.
          bringToBack: function() {
            if (this._map) {
              toBack(this._container);
              this._setAutoZIndex(Math.min);
            }
            return this;
          },
          // @method getContainer: HTMLElement
          // Returns the HTML element that contains the tiles for this layer.
          getContainer: function() {
            return this._container;
          },
          // @method setOpacity(opacity: Number): this
          // Changes the [opacity](#gridlayer-opacity) of the grid layer.
          setOpacity: function(opacity) {
            this.options.opacity = opacity;
            this._updateOpacity();
            return this;
          },
          // @method setZIndex(zIndex: Number): this
          // Changes the [zIndex](#gridlayer-zindex) of the grid layer.
          setZIndex: function(zIndex) {
            this.options.zIndex = zIndex;
            this._updateZIndex();
            return this;
          },
          // @method isLoading: Boolean
          // Returns `true` if any tile in the grid layer has not finished loading.
          isLoading: function() {
            return this._loading;
          },
          // @method redraw: this
          // Causes the layer to clear all the tiles and request them again.
          redraw: function() {
            if (this._map) {
              this._removeAllTiles();
              var tileZoom = this._clampZoom(this._map.getZoom());
              if (tileZoom !== this._tileZoom) {
                this._tileZoom = tileZoom;
                this._updateLevels();
              }
              this._update();
            }
            return this;
          },
          getEvents: function() {
            var events = {
              viewprereset: this._invalidateAll,
              viewreset: this._resetView,
              zoom: this._resetView,
              moveend: this._onMoveEnd
            };
            if (!this.options.updateWhenIdle) {
              if (!this._onMove) {
                this._onMove = throttle(this._onMoveEnd, this.options.updateInterval, this);
              }
              events.move = this._onMove;
            }
            if (this._zoomAnimated) {
              events.zoomanim = this._animateZoom;
            }
            return events;
          },
          // @section Extension methods
          // Layers extending `GridLayer` shall reimplement the following method.
          // @method createTile(coords: Object, done?: Function): HTMLElement
          // Called only internally, must be overridden by classes extending `GridLayer`.
          // Returns the `HTMLElement` corresponding to the given `coords`. If the `done` callback
          // is specified, it must be called when the tile has finished loading and drawing.
          createTile: function() {
            return document.createElement("div");
          },
          // @section
          // @method getTileSize: Point
          // Normalizes the [tileSize option](#gridlayer-tilesize) into a point. Used by the `createTile()` method.
          getTileSize: function() {
            var s = this.options.tileSize;
            return s instanceof Point ? s : new Point(s, s);
          },
          _updateZIndex: function() {
            if (this._container && this.options.zIndex !== void 0 && this.options.zIndex !== null) {
              this._container.style.zIndex = this.options.zIndex;
            }
          },
          _setAutoZIndex: function(compare) {
            var layers2 = this.getPane().children, edgeZIndex = -compare(-Infinity, Infinity);
            for (var i = 0, len = layers2.length, zIndex; i < len; i++) {
              zIndex = layers2[i].style.zIndex;
              if (layers2[i] !== this._container && zIndex) {
                edgeZIndex = compare(edgeZIndex, +zIndex);
              }
            }
            if (isFinite(edgeZIndex)) {
              this.options.zIndex = edgeZIndex + compare(-1, 1);
              this._updateZIndex();
            }
          },
          _updateOpacity: function() {
            if (!this._map) {
              return;
            }
            if (Browser.ielt9) {
              return;
            }
            setOpacity(this._container, this.options.opacity);
            var now = +/* @__PURE__ */ new Date(), nextFrame = false, willPrune = false;
            for (var key in this._tiles) {
              var tile = this._tiles[key];
              if (!tile.current || !tile.loaded) {
                continue;
              }
              var fade = Math.min(1, (now - tile.loaded) / 200);
              setOpacity(tile.el, fade);
              if (fade < 1) {
                nextFrame = true;
              } else {
                if (tile.active) {
                  willPrune = true;
                } else {
                  this._onOpaqueTile(tile);
                }
                tile.active = true;
              }
            }
            if (willPrune && !this._noPrune) {
              this._pruneTiles();
            }
            if (nextFrame) {
              cancelAnimFrame(this._fadeFrame);
              this._fadeFrame = requestAnimFrame(this._updateOpacity, this);
            }
          },
          _onOpaqueTile: falseFn,
          _initContainer: function() {
            if (this._container) {
              return;
            }
            this._container = create$1("div", "leaflet-layer " + (this.options.className || ""));
            this._updateZIndex();
            if (this.options.opacity < 1) {
              this._updateOpacity();
            }
            this.getPane().appendChild(this._container);
          },
          _updateLevels: function() {
            var zoom2 = this._tileZoom, maxZoom = this.options.maxZoom;
            if (zoom2 === void 0) {
              return void 0;
            }
            for (var z in this._levels) {
              z = Number(z);
              if (this._levels[z].el.children.length || z === zoom2) {
                this._levels[z].el.style.zIndex = maxZoom - Math.abs(zoom2 - z);
                this._onUpdateLevel(z);
              } else {
                remove(this._levels[z].el);
                this._removeTilesAtZoom(z);
                this._onRemoveLevel(z);
                delete this._levels[z];
              }
            }
            var level = this._levels[zoom2], map = this._map;
            if (!level) {
              level = this._levels[zoom2] = {};
              level.el = create$1("div", "leaflet-tile-container leaflet-zoom-animated", this._container);
              level.el.style.zIndex = maxZoom;
              level.origin = map.project(map.unproject(map.getPixelOrigin()), zoom2).round();
              level.zoom = zoom2;
              this._setZoomTransform(level, map.getCenter(), map.getZoom());
              falseFn(level.el.offsetWidth);
              this._onCreateLevel(level);
            }
            this._level = level;
            return level;
          },
          _onUpdateLevel: falseFn,
          _onRemoveLevel: falseFn,
          _onCreateLevel: falseFn,
          _pruneTiles: function() {
            if (!this._map) {
              return;
            }
            var key, tile;
            var zoom2 = this._map.getZoom();
            if (zoom2 > this.options.maxZoom || zoom2 < this.options.minZoom) {
              this._removeAllTiles();
              return;
            }
            for (key in this._tiles) {
              tile = this._tiles[key];
              tile.retain = tile.current;
            }
            for (key in this._tiles) {
              tile = this._tiles[key];
              if (tile.current && !tile.active) {
                var coords = tile.coords;
                if (!this._retainParent(coords.x, coords.y, coords.z, coords.z - 5)) {
                  this._retainChildren(coords.x, coords.y, coords.z, coords.z + 2);
                }
              }
            }
            for (key in this._tiles) {
              if (!this._tiles[key].retain) {
                this._removeTile(key);
              }
            }
          },
          _removeTilesAtZoom: function(zoom2) {
            for (var key in this._tiles) {
              if (this._tiles[key].coords.z !== zoom2) {
                continue;
              }
              this._removeTile(key);
            }
          },
          _removeAllTiles: function() {
            for (var key in this._tiles) {
              this._removeTile(key);
            }
          },
          _invalidateAll: function() {
            for (var z in this._levels) {
              remove(this._levels[z].el);
              this._onRemoveLevel(Number(z));
              delete this._levels[z];
            }
            this._removeAllTiles();
            this._tileZoom = void 0;
          },
          _retainParent: function(x, y, z, minZoom) {
            var x2 = Math.floor(x / 2), y2 = Math.floor(y / 2), z2 = z - 1, coords2 = new Point(+x2, +y2);
            coords2.z = +z2;
            var key = this._tileCoordsToKey(coords2), tile = this._tiles[key];
            if (tile && tile.active) {
              tile.retain = true;
              return true;
            } else if (tile && tile.loaded) {
              tile.retain = true;
            }
            if (z2 > minZoom) {
              return this._retainParent(x2, y2, z2, minZoom);
            }
            return false;
          },
          _retainChildren: function(x, y, z, maxZoom) {
            for (var i = 2 * x; i < 2 * x + 2; i++) {
              for (var j = 2 * y; j < 2 * y + 2; j++) {
                var coords = new Point(i, j);
                coords.z = z + 1;
                var key = this._tileCoordsToKey(coords), tile = this._tiles[key];
                if (tile && tile.active) {
                  tile.retain = true;
                  continue;
                } else if (tile && tile.loaded) {
                  tile.retain = true;
                }
                if (z + 1 < maxZoom) {
                  this._retainChildren(i, j, z + 1, maxZoom);
                }
              }
            }
          },
          _resetView: function(e) {
            var animating = e && (e.pinch || e.flyTo);
            this._setView(this._map.getCenter(), this._map.getZoom(), animating, animating);
          },
          _animateZoom: function(e) {
            this._setView(e.center, e.zoom, true, e.noUpdate);
          },
          _clampZoom: function(zoom2) {
            var options = this.options;
            if (void 0 !== options.minNativeZoom && zoom2 < options.minNativeZoom) {
              return options.minNativeZoom;
            }
            if (void 0 !== options.maxNativeZoom && options.maxNativeZoom < zoom2) {
              return options.maxNativeZoom;
            }
            return zoom2;
          },
          _setView: function(center, zoom2, noPrune, noUpdate) {
            var tileZoom = Math.round(zoom2);
            if (this.options.maxZoom !== void 0 && tileZoom > this.options.maxZoom || this.options.minZoom !== void 0 && tileZoom < this.options.minZoom) {
              tileZoom = void 0;
            } else {
              tileZoom = this._clampZoom(tileZoom);
            }
            var tileZoomChanged = this.options.updateWhenZooming && tileZoom !== this._tileZoom;
            if (!noUpdate || tileZoomChanged) {
              this._tileZoom = tileZoom;
              if (this._abortLoading) {
                this._abortLoading();
              }
              this._updateLevels();
              this._resetGrid();
              if (tileZoom !== void 0) {
                this._update(center);
              }
              if (!noPrune) {
                this._pruneTiles();
              }
              this._noPrune = !!noPrune;
            }
            this._setZoomTransforms(center, zoom2);
          },
          _setZoomTransforms: function(center, zoom2) {
            for (var i in this._levels) {
              this._setZoomTransform(this._levels[i], center, zoom2);
            }
          },
          _setZoomTransform: function(level, center, zoom2) {
            var scale2 = this._map.getZoomScale(zoom2, level.zoom), translate = level.origin.multiplyBy(scale2).subtract(this._map._getNewPixelOrigin(center, zoom2)).round();
            if (Browser.any3d) {
              setTransform(level.el, translate, scale2);
            } else {
              setPosition(level.el, translate);
            }
          },
          _resetGrid: function() {
            var map = this._map, crs = map.options.crs, tileSize = this._tileSize = this.getTileSize(), tileZoom = this._tileZoom;
            var bounds = this._map.getPixelWorldBounds(this._tileZoom);
            if (bounds) {
              this._globalTileRange = this._pxBoundsToTileRange(bounds);
            }
            this._wrapX = crs.wrapLng && !this.options.noWrap && [
              Math.floor(map.project([0, crs.wrapLng[0]], tileZoom).x / tileSize.x),
              Math.ceil(map.project([0, crs.wrapLng[1]], tileZoom).x / tileSize.y)
            ];
            this._wrapY = crs.wrapLat && !this.options.noWrap && [
              Math.floor(map.project([crs.wrapLat[0], 0], tileZoom).y / tileSize.x),
              Math.ceil(map.project([crs.wrapLat[1], 0], tileZoom).y / tileSize.y)
            ];
          },
          _onMoveEnd: function() {
            if (!this._map || this._map._animatingZoom) {
              return;
            }
            this._update();
          },
          _getTiledPixelBounds: function(center) {
            var map = this._map, mapZoom = map._animatingZoom ? Math.max(map._animateToZoom, map.getZoom()) : map.getZoom(), scale2 = map.getZoomScale(mapZoom, this._tileZoom), pixelCenter = map.project(center, this._tileZoom).floor(), halfSize = map.getSize().divideBy(scale2 * 2);
            return new Bounds(pixelCenter.subtract(halfSize), pixelCenter.add(halfSize));
          },
          // Private method to load tiles in the grid's active zoom level according to map bounds
          _update: function(center) {
            var map = this._map;
            if (!map) {
              return;
            }
            var zoom2 = this._clampZoom(map.getZoom());
            if (center === void 0) {
              center = map.getCenter();
            }
            if (this._tileZoom === void 0) {
              return;
            }
            var pixelBounds = this._getTiledPixelBounds(center), tileRange = this._pxBoundsToTileRange(pixelBounds), tileCenter = tileRange.getCenter(), queue = [], margin = this.options.keepBuffer, noPruneRange = new Bounds(
              tileRange.getBottomLeft().subtract([margin, -margin]),
              tileRange.getTopRight().add([margin, -margin])
            );
            if (!(isFinite(tileRange.min.x) && isFinite(tileRange.min.y) && isFinite(tileRange.max.x) && isFinite(tileRange.max.y))) {
              throw new Error("Attempted to load an infinite number of tiles");
            }
            for (var key in this._tiles) {
              var c = this._tiles[key].coords;
              if (c.z !== this._tileZoom || !noPruneRange.contains(new Point(c.x, c.y))) {
                this._tiles[key].current = false;
              }
            }
            if (Math.abs(zoom2 - this._tileZoom) > 1) {
              this._setView(center, zoom2);
              return;
            }
            for (var j = tileRange.min.y; j <= tileRange.max.y; j++) {
              for (var i = tileRange.min.x; i <= tileRange.max.x; i++) {
                var coords = new Point(i, j);
                coords.z = this._tileZoom;
                if (!this._isValidTile(coords)) {
                  continue;
                }
                var tile = this._tiles[this._tileCoordsToKey(coords)];
                if (tile) {
                  tile.current = true;
                } else {
                  queue.push(coords);
                }
              }
            }
            queue.sort(function(a, b) {
              return a.distanceTo(tileCenter) - b.distanceTo(tileCenter);
            });
            if (queue.length !== 0) {
              if (!this._loading) {
                this._loading = true;
                this.fire("loading");
              }
              var fragment = document.createDocumentFragment();
              for (i = 0; i < queue.length; i++) {
                this._addTile(queue[i], fragment);
              }
              this._level.el.appendChild(fragment);
            }
          },
          _isValidTile: function(coords) {
            var crs = this._map.options.crs;
            if (!crs.infinite) {
              var bounds = this._globalTileRange;
              if (!crs.wrapLng && (coords.x < bounds.min.x || coords.x > bounds.max.x) || !crs.wrapLat && (coords.y < bounds.min.y || coords.y > bounds.max.y)) {
                return false;
              }
            }
            if (!this.options.bounds) {
              return true;
            }
            var tileBounds = this._tileCoordsToBounds(coords);
            return toLatLngBounds(this.options.bounds).overlaps(tileBounds);
          },
          _keyToBounds: function(key) {
            return this._tileCoordsToBounds(this._keyToTileCoords(key));
          },
          _tileCoordsToNwSe: function(coords) {
            var map = this._map, tileSize = this.getTileSize(), nwPoint = coords.scaleBy(tileSize), sePoint = nwPoint.add(tileSize), nw = map.unproject(nwPoint, coords.z), se = map.unproject(sePoint, coords.z);
            return [nw, se];
          },
          // converts tile coordinates to its geographical bounds
          _tileCoordsToBounds: function(coords) {
            var bp = this._tileCoordsToNwSe(coords), bounds = new LatLngBounds(bp[0], bp[1]);
            if (!this.options.noWrap) {
              bounds = this._map.wrapLatLngBounds(bounds);
            }
            return bounds;
          },
          // converts tile coordinates to key for the tile cache
          _tileCoordsToKey: function(coords) {
            return coords.x + ":" + coords.y + ":" + coords.z;
          },
          // converts tile cache key to coordinates
          _keyToTileCoords: function(key) {
            var k = key.split(":"), coords = new Point(+k[0], +k[1]);
            coords.z = +k[2];
            return coords;
          },
          _removeTile: function(key) {
            var tile = this._tiles[key];
            if (!tile) {
              return;
            }
            remove(tile.el);
            delete this._tiles[key];
            this.fire("tileunload", {
              tile: tile.el,
              coords: this._keyToTileCoords(key)
            });
          },
          _initTile: function(tile) {
            addClass(tile, "leaflet-tile");
            var tileSize = this.getTileSize();
            tile.style.width = tileSize.x + "px";
            tile.style.height = tileSize.y + "px";
            tile.onselectstart = falseFn;
            tile.onmousemove = falseFn;
            if (Browser.ielt9 && this.options.opacity < 1) {
              setOpacity(tile, this.options.opacity);
            }
          },
          _addTile: function(coords, container) {
            var tilePos = this._getTilePos(coords), key = this._tileCoordsToKey(coords);
            var tile = this.createTile(this._wrapCoords(coords), bind(this._tileReady, this, coords));
            this._initTile(tile);
            if (this.createTile.length < 2) {
              requestAnimFrame(bind(this._tileReady, this, coords, null, tile));
            }
            setPosition(tile, tilePos);
            this._tiles[key] = {
              el: tile,
              coords,
              current: true
            };
            container.appendChild(tile);
            this.fire("tileloadstart", {
              tile,
              coords
            });
          },
          _tileReady: function(coords, err, tile) {
            if (err) {
              this.fire("tileerror", {
                error: err,
                tile,
                coords
              });
            }
            var key = this._tileCoordsToKey(coords);
            tile = this._tiles[key];
            if (!tile) {
              return;
            }
            tile.loaded = +/* @__PURE__ */ new Date();
            if (this._map._fadeAnimated) {
              setOpacity(tile.el, 0);
              cancelAnimFrame(this._fadeFrame);
              this._fadeFrame = requestAnimFrame(this._updateOpacity, this);
            } else {
              tile.active = true;
              this._pruneTiles();
            }
            if (!err) {
              addClass(tile.el, "leaflet-tile-loaded");
              this.fire("tileload", {
                tile: tile.el,
                coords
              });
            }
            if (this._noTilesToLoad()) {
              this._loading = false;
              this.fire("load");
              if (Browser.ielt9 || !this._map._fadeAnimated) {
                requestAnimFrame(this._pruneTiles, this);
              } else {
                setTimeout(bind(this._pruneTiles, this), 250);
              }
            }
          },
          _getTilePos: function(coords) {
            return coords.scaleBy(this.getTileSize()).subtract(this._level.origin);
          },
          _wrapCoords: function(coords) {
            var newCoords = new Point(
              this._wrapX ? wrapNum(coords.x, this._wrapX) : coords.x,
              this._wrapY ? wrapNum(coords.y, this._wrapY) : coords.y
            );
            newCoords.z = coords.z;
            return newCoords;
          },
          _pxBoundsToTileRange: function(bounds) {
            var tileSize = this.getTileSize();
            return new Bounds(
              bounds.min.unscaleBy(tileSize).floor(),
              bounds.max.unscaleBy(tileSize).ceil().subtract([1, 1])
            );
          },
          _noTilesToLoad: function() {
            for (var key in this._tiles) {
              if (!this._tiles[key].loaded) {
                return false;
              }
            }
            return true;
          }
        });
        function gridLayer(options) {
          return new GridLayer(options);
        }
        var TileLayer = GridLayer.extend({
          // @section
          // @aka TileLayer options
          options: {
            // @option minZoom: Number = 0
            // The minimum zoom level down to which this layer will be displayed (inclusive).
            minZoom: 0,
            // @option maxZoom: Number = 18
            // The maximum zoom level up to which this layer will be displayed (inclusive).
            maxZoom: 18,
            // @option subdomains: String|String[] = 'abc'
            // Subdomains of the tile service. Can be passed in the form of one string (where each letter is a subdomain name) or an array of strings.
            subdomains: "abc",
            // @option errorTileUrl: String = ''
            // URL to the tile image to show in place of the tile that failed to load.
            errorTileUrl: "",
            // @option zoomOffset: Number = 0
            // The zoom number used in tile URLs will be offset with this value.
            zoomOffset: 0,
            // @option tms: Boolean = false
            // If `true`, inverses Y axis numbering for tiles (turn this on for [TMS](https://en.wikipedia.org/wiki/Tile_Map_Service) services).
            tms: false,
            // @option zoomReverse: Boolean = false
            // If set to true, the zoom number used in tile URLs will be reversed (`maxZoom - zoom` instead of `zoom`)
            zoomReverse: false,
            // @option detectRetina: Boolean = false
            // If `true` and user is on a retina display, it will request four tiles of half the specified size and a bigger zoom level in place of one to utilize the high resolution.
            detectRetina: false,
            // @option crossOrigin: Boolean|String = false
            // Whether the crossOrigin attribute will be added to the tiles.
            // If a String is provided, all tiles will have their crossOrigin attribute set to the String provided. This is needed if you want to access tile pixel data.
            // Refer to [CORS Settings](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_settings_attributes) for valid String values.
            crossOrigin: false,
            // @option referrerPolicy: Boolean|String = false
            // Whether the referrerPolicy attribute will be added to the tiles.
            // If a String is provided, all tiles will have their referrerPolicy attribute set to the String provided.
            // This may be needed if your map's rendering context has a strict default but your tile provider expects a valid referrer
            // (e.g. to validate an API token).
            // Refer to [HTMLImageElement.referrerPolicy](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/referrerPolicy) for valid String values.
            referrerPolicy: false
          },
          initialize: function(url, options) {
            this._url = url;
            options = setOptions(this, options);
            if (options.detectRetina && Browser.retina && options.maxZoom > 0) {
              options.tileSize = Math.floor(options.tileSize / 2);
              if (!options.zoomReverse) {
                options.zoomOffset++;
                options.maxZoom = Math.max(options.minZoom, options.maxZoom - 1);
              } else {
                options.zoomOffset--;
                options.minZoom = Math.min(options.maxZoom, options.minZoom + 1);
              }
              options.minZoom = Math.max(0, options.minZoom);
            } else if (!options.zoomReverse) {
              options.maxZoom = Math.max(options.minZoom, options.maxZoom);
            } else {
              options.minZoom = Math.min(options.maxZoom, options.minZoom);
            }
            if (typeof options.subdomains === "string") {
              options.subdomains = options.subdomains.split("");
            }
            this.on("tileunload", this._onTileRemove);
          },
          // @method setUrl(url: String, noRedraw?: Boolean): this
          // Updates the layer's URL template and redraws it (unless `noRedraw` is set to `true`).
          // If the URL does not change, the layer will not be redrawn unless
          // the noRedraw parameter is set to false.
          setUrl: function(url, noRedraw) {
            if (this._url === url && noRedraw === void 0) {
              noRedraw = true;
            }
            this._url = url;
            if (!noRedraw) {
              this.redraw();
            }
            return this;
          },
          // @method createTile(coords: Object, done?: Function): HTMLElement
          // Called only internally, overrides GridLayer's [`createTile()`](#gridlayer-createtile)
          // to return an `<img>` HTML element with the appropriate image URL given `coords`. The `done`
          // callback is called when the tile has been loaded.
          createTile: function(coords, done) {
            var tile = document.createElement("img");
            on(tile, "load", bind(this._tileOnLoad, this, done, tile));
            on(tile, "error", bind(this._tileOnError, this, done, tile));
            if (this.options.crossOrigin || this.options.crossOrigin === "") {
              tile.crossOrigin = this.options.crossOrigin === true ? "" : this.options.crossOrigin;
            }
            if (typeof this.options.referrerPolicy === "string") {
              tile.referrerPolicy = this.options.referrerPolicy;
            }
            tile.alt = "";
            tile.src = this.getTileUrl(coords);
            return tile;
          },
          // @section Extension methods
          // @uninheritable
          // Layers extending `TileLayer` might reimplement the following method.
          // @method getTileUrl(coords: Object): String
          // Called only internally, returns the URL for a tile given its coordinates.
          // Classes extending `TileLayer` can override this function to provide custom tile URL naming schemes.
          getTileUrl: function(coords) {
            var data = {
              r: Browser.retina ? "@2x" : "",
              s: this._getSubdomain(coords),
              x: coords.x,
              y: coords.y,
              z: this._getZoomForUrl()
            };
            if (this._map && !this._map.options.crs.infinite) {
              var invertedY = this._globalTileRange.max.y - coords.y;
              if (this.options.tms) {
                data["y"] = invertedY;
              }
              data["-y"] = invertedY;
            }
            return template(this._url, extend(data, this.options));
          },
          _tileOnLoad: function(done, tile) {
            if (Browser.ielt9) {
              setTimeout(bind(done, this, null, tile), 0);
            } else {
              done(null, tile);
            }
          },
          _tileOnError: function(done, tile, e) {
            var errorUrl = this.options.errorTileUrl;
            if (errorUrl && tile.getAttribute("src") !== errorUrl) {
              tile.src = errorUrl;
            }
            done(e, tile);
          },
          _onTileRemove: function(e) {
            e.tile.onload = null;
          },
          _getZoomForUrl: function() {
            var zoom2 = this._tileZoom, maxZoom = this.options.maxZoom, zoomReverse = this.options.zoomReverse, zoomOffset = this.options.zoomOffset;
            if (zoomReverse) {
              zoom2 = maxZoom - zoom2;
            }
            return zoom2 + zoomOffset;
          },
          _getSubdomain: function(tilePoint) {
            var index2 = Math.abs(tilePoint.x + tilePoint.y) % this.options.subdomains.length;
            return this.options.subdomains[index2];
          },
          // stops loading all tiles in the background layer
          _abortLoading: function() {
            var i, tile;
            for (i in this._tiles) {
              if (this._tiles[i].coords.z !== this._tileZoom) {
                tile = this._tiles[i].el;
                tile.onload = falseFn;
                tile.onerror = falseFn;
                if (!tile.complete) {
                  tile.src = emptyImageUrl;
                  var coords = this._tiles[i].coords;
                  remove(tile);
                  delete this._tiles[i];
                  this.fire("tileabort", {
                    tile,
                    coords
                  });
                }
              }
            }
          },
          _removeTile: function(key) {
            var tile = this._tiles[key];
            if (!tile) {
              return;
            }
            tile.el.setAttribute("src", emptyImageUrl);
            return GridLayer.prototype._removeTile.call(this, key);
          },
          _tileReady: function(coords, err, tile) {
            if (!this._map || tile && tile.getAttribute("src") === emptyImageUrl) {
              return;
            }
            return GridLayer.prototype._tileReady.call(this, coords, err, tile);
          }
        });
        function tileLayer(url, options) {
          return new TileLayer(url, options);
        }
        var TileLayerWMS = TileLayer.extend({
          // @section
          // @aka TileLayer.WMS options
          // If any custom options not documented here are used, they will be sent to the
          // WMS server as extra parameters in each request URL. This can be useful for
          // [non-standard vendor WMS parameters](https://docs.geoserver.org/stable/en/user/services/wms/vendor.html).
          defaultWmsParams: {
            service: "WMS",
            request: "GetMap",
            // @option layers: String = ''
            // **(required)** Comma-separated list of WMS layers to show.
            layers: "",
            // @option styles: String = ''
            // Comma-separated list of WMS styles.
            styles: "",
            // @option format: String = 'image/jpeg'
            // WMS image format (use `'image/png'` for layers with transparency).
            format: "image/jpeg",
            // @option transparent: Boolean = false
            // If `true`, the WMS service will return images with transparency.
            transparent: false,
            // @option version: String = '1.1.1'
            // Version of the WMS service to use
            version: "1.1.1"
          },
          options: {
            // @option crs: CRS = null
            // Coordinate Reference System to use for the WMS requests, defaults to
            // map CRS. Don't change this if you're not sure what it means.
            crs: null,
            // @option uppercase: Boolean = false
            // If `true`, WMS request parameter keys will be uppercase.
            uppercase: false
          },
          initialize: function(url, options) {
            this._url = url;
            var wmsParams = extend({}, this.defaultWmsParams);
            for (var i in options) {
              if (!(i in this.options)) {
                wmsParams[i] = options[i];
              }
            }
            options = setOptions(this, options);
            var realRetina = options.detectRetina && Browser.retina ? 2 : 1;
            var tileSize = this.getTileSize();
            wmsParams.width = tileSize.x * realRetina;
            wmsParams.height = tileSize.y * realRetina;
            this.wmsParams = wmsParams;
          },
          onAdd: function(map) {
            this._crs = this.options.crs || map.options.crs;
            this._wmsVersion = parseFloat(this.wmsParams.version);
            var projectionKey = this._wmsVersion >= 1.3 ? "crs" : "srs";
            this.wmsParams[projectionKey] = this._crs.code;
            TileLayer.prototype.onAdd.call(this, map);
          },
          getTileUrl: function(coords) {
            var tileBounds = this._tileCoordsToNwSe(coords), crs = this._crs, bounds = toBounds(crs.project(tileBounds[0]), crs.project(tileBounds[1])), min = bounds.min, max = bounds.max, bbox = (this._wmsVersion >= 1.3 && this._crs === EPSG4326 ? [min.y, min.x, max.y, max.x] : [min.x, min.y, max.x, max.y]).join(","), url = TileLayer.prototype.getTileUrl.call(this, coords);
            return url + getParamString(this.wmsParams, url, this.options.uppercase) + (this.options.uppercase ? "&BBOX=" : "&bbox=") + bbox;
          },
          // @method setParams(params: Object, noRedraw?: Boolean): this
          // Merges an object with the new parameters and re-requests tiles on the current screen (unless `noRedraw` was set to true).
          setParams: function(params, noRedraw) {
            extend(this.wmsParams, params);
            if (!noRedraw) {
              this.redraw();
            }
            return this;
          }
        });
        function tileLayerWMS(url, options) {
          return new TileLayerWMS(url, options);
        }
        TileLayer.WMS = TileLayerWMS;
        tileLayer.wms = tileLayerWMS;
        var Renderer = Layer.extend({
          // @section
          // @aka Renderer options
          options: {
            // @option padding: Number = 0.1
            // How much to extend the clip area around the map view (relative to its size)
            // e.g. 0.1 would be 10% of map view in each direction
            padding: 0.1
          },
          initialize: function(options) {
            setOptions(this, options);
            stamp(this);
            this._layers = this._layers || {};
          },
          onAdd: function() {
            if (!this._container) {
              this._initContainer();
              addClass(this._container, "leaflet-zoom-animated");
            }
            this.getPane().appendChild(this._container);
            this._update();
            this.on("update", this._updatePaths, this);
          },
          onRemove: function() {
            this.off("update", this._updatePaths, this);
            this._destroyContainer();
          },
          getEvents: function() {
            var events = {
              viewreset: this._reset,
              zoom: this._onZoom,
              moveend: this._update,
              zoomend: this._onZoomEnd
            };
            if (this._zoomAnimated) {
              events.zoomanim = this._onAnimZoom;
            }
            return events;
          },
          _onAnimZoom: function(ev) {
            this._updateTransform(ev.center, ev.zoom);
          },
          _onZoom: function() {
            this._updateTransform(this._map.getCenter(), this._map.getZoom());
          },
          _updateTransform: function(center, zoom2) {
            var scale2 = this._map.getZoomScale(zoom2, this._zoom), viewHalf = this._map.getSize().multiplyBy(0.5 + this.options.padding), currentCenterPoint = this._map.project(this._center, zoom2), topLeftOffset = viewHalf.multiplyBy(-scale2).add(currentCenterPoint).subtract(this._map._getNewPixelOrigin(center, zoom2));
            if (Browser.any3d) {
              setTransform(this._container, topLeftOffset, scale2);
            } else {
              setPosition(this._container, topLeftOffset);
            }
          },
          _reset: function() {
            this._update();
            this._updateTransform(this._center, this._zoom);
            for (var id in this._layers) {
              this._layers[id]._reset();
            }
          },
          _onZoomEnd: function() {
            for (var id in this._layers) {
              this._layers[id]._project();
            }
          },
          _updatePaths: function() {
            for (var id in this._layers) {
              this._layers[id]._update();
            }
          },
          _update: function() {
            var p = this.options.padding, size = this._map.getSize(), min = this._map.containerPointToLayerPoint(size.multiplyBy(-p)).round();
            this._bounds = new Bounds(min, min.add(size.multiplyBy(1 + p * 2)).round());
            this._center = this._map.getCenter();
            this._zoom = this._map.getZoom();
          }
        });
        var Canvas = Renderer.extend({
          // @section
          // @aka Canvas options
          options: {
            // @option tolerance: Number = 0
            // How much to extend the click tolerance around a path/object on the map.
            tolerance: 0
          },
          getEvents: function() {
            var events = Renderer.prototype.getEvents.call(this);
            events.viewprereset = this._onViewPreReset;
            return events;
          },
          _onViewPreReset: function() {
            this._postponeUpdatePaths = true;
          },
          onAdd: function() {
            Renderer.prototype.onAdd.call(this);
            this._draw();
          },
          _initContainer: function() {
            var container = this._container = document.createElement("canvas");
            on(container, "mousemove", this._onMouseMove, this);
            on(container, "click dblclick mousedown mouseup contextmenu", this._onClick, this);
            on(container, "mouseout", this._handleMouseOut, this);
            container["_leaflet_disable_events"] = true;
            this._ctx = container.getContext("2d");
          },
          _destroyContainer: function() {
            cancelAnimFrame(this._redrawRequest);
            delete this._ctx;
            remove(this._container);
            off(this._container);
            delete this._container;
          },
          _updatePaths: function() {
            if (this._postponeUpdatePaths) {
              return;
            }
            var layer;
            this._redrawBounds = null;
            for (var id in this._layers) {
              layer = this._layers[id];
              layer._update();
            }
            this._redraw();
          },
          _update: function() {
            if (this._map._animatingZoom && this._bounds) {
              return;
            }
            Renderer.prototype._update.call(this);
            var b = this._bounds, container = this._container, size = b.getSize(), m = Browser.retina ? 2 : 1;
            setPosition(container, b.min);
            container.width = m * size.x;
            container.height = m * size.y;
            container.style.width = size.x + "px";
            container.style.height = size.y + "px";
            if (Browser.retina) {
              this._ctx.scale(2, 2);
            }
            this._ctx.translate(-b.min.x, -b.min.y);
            this.fire("update");
          },
          _reset: function() {
            Renderer.prototype._reset.call(this);
            if (this._postponeUpdatePaths) {
              this._postponeUpdatePaths = false;
              this._updatePaths();
            }
          },
          _initPath: function(layer) {
            this._updateDashArray(layer);
            this._layers[stamp(layer)] = layer;
            var order = layer._order = {
              layer,
              prev: this._drawLast,
              next: null
            };
            if (this._drawLast) {
              this._drawLast.next = order;
            }
            this._drawLast = order;
            this._drawFirst = this._drawFirst || this._drawLast;
          },
          _addPath: function(layer) {
            this._requestRedraw(layer);
          },
          _removePath: function(layer) {
            var order = layer._order;
            var next = order.next;
            var prev = order.prev;
            if (next) {
              next.prev = prev;
            } else {
              this._drawLast = prev;
            }
            if (prev) {
              prev.next = next;
            } else {
              this._drawFirst = next;
            }
            delete layer._order;
            delete this._layers[stamp(layer)];
            this._requestRedraw(layer);
          },
          _updatePath: function(layer) {
            this._extendRedrawBounds(layer);
            layer._project();
            layer._update();
            this._requestRedraw(layer);
          },
          _updateStyle: function(layer) {
            this._updateDashArray(layer);
            this._requestRedraw(layer);
          },
          _updateDashArray: function(layer) {
            if (typeof layer.options.dashArray === "string") {
              var parts = layer.options.dashArray.split(/[, ]+/), dashArray = [], dashValue, i;
              for (i = 0; i < parts.length; i++) {
                dashValue = Number(parts[i]);
                if (isNaN(dashValue)) {
                  return;
                }
                dashArray.push(dashValue);
              }
              layer.options._dashArray = dashArray;
            } else {
              layer.options._dashArray = layer.options.dashArray;
            }
          },
          _requestRedraw: function(layer) {
            if (!this._map) {
              return;
            }
            this._extendRedrawBounds(layer);
            this._redrawRequest = this._redrawRequest || requestAnimFrame(this._redraw, this);
          },
          _extendRedrawBounds: function(layer) {
            if (layer._pxBounds) {
              var padding = (layer.options.weight || 0) + 1;
              this._redrawBounds = this._redrawBounds || new Bounds();
              this._redrawBounds.extend(layer._pxBounds.min.subtract([padding, padding]));
              this._redrawBounds.extend(layer._pxBounds.max.add([padding, padding]));
            }
          },
          _redraw: function() {
            this._redrawRequest = null;
            if (this._redrawBounds) {
              this._redrawBounds.min._floor();
              this._redrawBounds.max._ceil();
            }
            this._clear();
            this._draw();
            this._redrawBounds = null;
          },
          _clear: function() {
            var bounds = this._redrawBounds;
            if (bounds) {
              var size = bounds.getSize();
              this._ctx.clearRect(bounds.min.x, bounds.min.y, size.x, size.y);
            } else {
              this._ctx.save();
              this._ctx.setTransform(1, 0, 0, 1, 0, 0);
              this._ctx.clearRect(0, 0, this._container.width, this._container.height);
              this._ctx.restore();
            }
          },
          _draw: function() {
            var layer, bounds = this._redrawBounds;
            this._ctx.save();
            if (bounds) {
              var size = bounds.getSize();
              this._ctx.beginPath();
              this._ctx.rect(bounds.min.x, bounds.min.y, size.x, size.y);
              this._ctx.clip();
            }
            this._drawing = true;
            for (var order = this._drawFirst; order; order = order.next) {
              layer = order.layer;
              if (!bounds || layer._pxBounds && layer._pxBounds.intersects(bounds)) {
                layer._updatePath();
              }
            }
            this._drawing = false;
            this._ctx.restore();
          },
          _updatePoly: function(layer, closed) {
            if (!this._drawing) {
              return;
            }
            var i, j, len2, p, parts = layer._parts, len = parts.length, ctx = this._ctx;
            if (!len) {
              return;
            }
            ctx.beginPath();
            for (i = 0; i < len; i++) {
              for (j = 0, len2 = parts[i].length; j < len2; j++) {
                p = parts[i][j];
                ctx[j ? "lineTo" : "moveTo"](p.x, p.y);
              }
              if (closed) {
                ctx.closePath();
              }
            }
            this._fillStroke(ctx, layer);
          },
          _updateCircle: function(layer) {
            if (!this._drawing || layer._empty()) {
              return;
            }
            var p = layer._point, ctx = this._ctx, r = Math.max(Math.round(layer._radius), 1), s = (Math.max(Math.round(layer._radiusY), 1) || r) / r;
            if (s !== 1) {
              ctx.save();
              ctx.scale(1, s);
            }
            ctx.beginPath();
            ctx.arc(p.x, p.y / s, r, 0, Math.PI * 2, false);
            if (s !== 1) {
              ctx.restore();
            }
            this._fillStroke(ctx, layer);
          },
          _fillStroke: function(ctx, layer) {
            var options = layer.options;
            if (options.fill) {
              ctx.globalAlpha = options.fillOpacity;
              ctx.fillStyle = options.fillColor || options.color;
              ctx.fill(options.fillRule || "evenodd");
            }
            if (options.stroke && options.weight !== 0) {
              if (ctx.setLineDash) {
                ctx.setLineDash(layer.options && layer.options._dashArray || []);
              }
              ctx.globalAlpha = options.opacity;
              ctx.lineWidth = options.weight;
              ctx.strokeStyle = options.color;
              ctx.lineCap = options.lineCap;
              ctx.lineJoin = options.lineJoin;
              ctx.stroke();
            }
          },
          // Canvas obviously doesn't have mouse events for individual drawn objects,
          // so we emulate that by calculating what's under the mouse on mousemove/click manually
          _onClick: function(e) {
            var point = this._map.mouseEventToLayerPoint(e), layer, clickedLayer;
            for (var order = this._drawFirst; order; order = order.next) {
              layer = order.layer;
              if (layer.options.interactive && layer._containsPoint(point)) {
                if (!(e.type === "click" || e.type === "preclick") || !this._map._draggableMoved(layer)) {
                  clickedLayer = layer;
                }
              }
            }
            this._fireEvent(clickedLayer ? [clickedLayer] : false, e);
          },
          _onMouseMove: function(e) {
            if (!this._map || this._map.dragging.moving() || this._map._animatingZoom) {
              return;
            }
            var point = this._map.mouseEventToLayerPoint(e);
            this._handleMouseHover(e, point);
          },
          _handleMouseOut: function(e) {
            var layer = this._hoveredLayer;
            if (layer) {
              removeClass(this._container, "leaflet-interactive");
              this._fireEvent([layer], e, "mouseout");
              this._hoveredLayer = null;
              this._mouseHoverThrottled = false;
            }
          },
          _handleMouseHover: function(e, point) {
            if (this._mouseHoverThrottled) {
              return;
            }
            var layer, candidateHoveredLayer;
            for (var order = this._drawFirst; order; order = order.next) {
              layer = order.layer;
              if (layer.options.interactive && layer._containsPoint(point)) {
                candidateHoveredLayer = layer;
              }
            }
            if (candidateHoveredLayer !== this._hoveredLayer) {
              this._handleMouseOut(e);
              if (candidateHoveredLayer) {
                addClass(this._container, "leaflet-interactive");
                this._fireEvent([candidateHoveredLayer], e, "mouseover");
                this._hoveredLayer = candidateHoveredLayer;
              }
            }
            this._fireEvent(this._hoveredLayer ? [this._hoveredLayer] : false, e);
            this._mouseHoverThrottled = true;
            setTimeout(bind(function() {
              this._mouseHoverThrottled = false;
            }, this), 32);
          },
          _fireEvent: function(layers2, e, type) {
            this._map._fireDOMEvent(e, type || e.type, layers2);
          },
          _bringToFront: function(layer) {
            var order = layer._order;
            if (!order) {
              return;
            }
            var next = order.next;
            var prev = order.prev;
            if (next) {
              next.prev = prev;
            } else {
              return;
            }
            if (prev) {
              prev.next = next;
            } else if (next) {
              this._drawFirst = next;
            }
            order.prev = this._drawLast;
            this._drawLast.next = order;
            order.next = null;
            this._drawLast = order;
            this._requestRedraw(layer);
          },
          _bringToBack: function(layer) {
            var order = layer._order;
            if (!order) {
              return;
            }
            var next = order.next;
            var prev = order.prev;
            if (prev) {
              prev.next = next;
            } else {
              return;
            }
            if (next) {
              next.prev = prev;
            } else if (prev) {
              this._drawLast = prev;
            }
            order.prev = null;
            order.next = this._drawFirst;
            this._drawFirst.prev = order;
            this._drawFirst = order;
            this._requestRedraw(layer);
          }
        });
        function canvas(options) {
          return Browser.canvas ? new Canvas(options) : null;
        }
        var vmlCreate = (function() {
          try {
            document.namespaces.add("lvml", "urn:schemas-microsoft-com:vml");
            return function(name) {
              return document.createElement("<lvml:" + name + ' class="lvml">');
            };
          } catch (e) {
          }
          return function(name) {
            return document.createElement("<" + name + ' xmlns="urn:schemas-microsoft.com:vml" class="lvml">');
          };
        })();
        var vmlMixin = {
          _initContainer: function() {
            this._container = create$1("div", "leaflet-vml-container");
          },
          _update: function() {
            if (this._map._animatingZoom) {
              return;
            }
            Renderer.prototype._update.call(this);
            this.fire("update");
          },
          _initPath: function(layer) {
            var container = layer._container = vmlCreate("shape");
            addClass(container, "leaflet-vml-shape " + (this.options.className || ""));
            container.coordsize = "1 1";
            layer._path = vmlCreate("path");
            container.appendChild(layer._path);
            this._updateStyle(layer);
            this._layers[stamp(layer)] = layer;
          },
          _addPath: function(layer) {
            var container = layer._container;
            this._container.appendChild(container);
            if (layer.options.interactive) {
              layer.addInteractiveTarget(container);
            }
          },
          _removePath: function(layer) {
            var container = layer._container;
            remove(container);
            layer.removeInteractiveTarget(container);
            delete this._layers[stamp(layer)];
          },
          _updateStyle: function(layer) {
            var stroke = layer._stroke, fill = layer._fill, options = layer.options, container = layer._container;
            container.stroked = !!options.stroke;
            container.filled = !!options.fill;
            if (options.stroke) {
              if (!stroke) {
                stroke = layer._stroke = vmlCreate("stroke");
              }
              container.appendChild(stroke);
              stroke.weight = options.weight + "px";
              stroke.color = options.color;
              stroke.opacity = options.opacity;
              if (options.dashArray) {
                stroke.dashStyle = isArray(options.dashArray) ? options.dashArray.join(" ") : options.dashArray.replace(/( *, *)/g, " ");
              } else {
                stroke.dashStyle = "";
              }
              stroke.endcap = options.lineCap.replace("butt", "flat");
              stroke.joinstyle = options.lineJoin;
            } else if (stroke) {
              container.removeChild(stroke);
              layer._stroke = null;
            }
            if (options.fill) {
              if (!fill) {
                fill = layer._fill = vmlCreate("fill");
              }
              container.appendChild(fill);
              fill.color = options.fillColor || options.color;
              fill.opacity = options.fillOpacity;
            } else if (fill) {
              container.removeChild(fill);
              layer._fill = null;
            }
          },
          _updateCircle: function(layer) {
            var p = layer._point.round(), r = Math.round(layer._radius), r2 = Math.round(layer._radiusY || r);
            this._setPath(layer, layer._empty() ? "M0 0" : "AL " + p.x + "," + p.y + " " + r + "," + r2 + " 0," + 65535 * 360);
          },
          _setPath: function(layer, path) {
            layer._path.v = path;
          },
          _bringToFront: function(layer) {
            toFront(layer._container);
          },
          _bringToBack: function(layer) {
            toBack(layer._container);
          }
        };
        var create = Browser.vml ? vmlCreate : svgCreate;
        var SVG = Renderer.extend({
          _initContainer: function() {
            this._container = create("svg");
            this._container.setAttribute("pointer-events", "none");
            this._rootGroup = create("g");
            this._container.appendChild(this._rootGroup);
          },
          _destroyContainer: function() {
            remove(this._container);
            off(this._container);
            delete this._container;
            delete this._rootGroup;
            delete this._svgSize;
          },
          _update: function() {
            if (this._map._animatingZoom && this._bounds) {
              return;
            }
            Renderer.prototype._update.call(this);
            var b = this._bounds, size = b.getSize(), container = this._container;
            if (!this._svgSize || !this._svgSize.equals(size)) {
              this._svgSize = size;
              container.setAttribute("width", size.x);
              container.setAttribute("height", size.y);
            }
            setPosition(container, b.min);
            container.setAttribute("viewBox", [b.min.x, b.min.y, size.x, size.y].join(" "));
            this.fire("update");
          },
          // methods below are called by vector layers implementations
          _initPath: function(layer) {
            var path = layer._path = create("path");
            if (layer.options.className) {
              addClass(path, layer.options.className);
            }
            if (layer.options.interactive) {
              addClass(path, "leaflet-interactive");
            }
            this._updateStyle(layer);
            this._layers[stamp(layer)] = layer;
          },
          _addPath: function(layer) {
            if (!this._rootGroup) {
              this._initContainer();
            }
            this._rootGroup.appendChild(layer._path);
            layer.addInteractiveTarget(layer._path);
          },
          _removePath: function(layer) {
            remove(layer._path);
            layer.removeInteractiveTarget(layer._path);
            delete this._layers[stamp(layer)];
          },
          _updatePath: function(layer) {
            layer._project();
            layer._update();
          },
          _updateStyle: function(layer) {
            var path = layer._path, options = layer.options;
            if (!path) {
              return;
            }
            if (options.stroke) {
              path.setAttribute("stroke", options.color);
              path.setAttribute("stroke-opacity", options.opacity);
              path.setAttribute("stroke-width", options.weight);
              path.setAttribute("stroke-linecap", options.lineCap);
              path.setAttribute("stroke-linejoin", options.lineJoin);
              if (options.dashArray) {
                path.setAttribute("stroke-dasharray", options.dashArray);
              } else {
                path.removeAttribute("stroke-dasharray");
              }
              if (options.dashOffset) {
                path.setAttribute("stroke-dashoffset", options.dashOffset);
              } else {
                path.removeAttribute("stroke-dashoffset");
              }
            } else {
              path.setAttribute("stroke", "none");
            }
            if (options.fill) {
              path.setAttribute("fill", options.fillColor || options.color);
              path.setAttribute("fill-opacity", options.fillOpacity);
              path.setAttribute("fill-rule", options.fillRule || "evenodd");
            } else {
              path.setAttribute("fill", "none");
            }
          },
          _updatePoly: function(layer, closed) {
            this._setPath(layer, pointsToPath(layer._parts, closed));
          },
          _updateCircle: function(layer) {
            var p = layer._point, r = Math.max(Math.round(layer._radius), 1), r2 = Math.max(Math.round(layer._radiusY), 1) || r, arc = "a" + r + "," + r2 + " 0 1,0 ";
            var d = layer._empty() ? "M0 0" : "M" + (p.x - r) + "," + p.y + arc + r * 2 + ",0 " + arc + -r * 2 + ",0 ";
            this._setPath(layer, d);
          },
          _setPath: function(layer, path) {
            layer._path.setAttribute("d", path);
          },
          // SVG does not have the concept of zIndex so we resort to changing the DOM order of elements
          _bringToFront: function(layer) {
            toFront(layer._path);
          },
          _bringToBack: function(layer) {
            toBack(layer._path);
          }
        });
        if (Browser.vml) {
          SVG.include(vmlMixin);
        }
        function svg(options) {
          return Browser.svg || Browser.vml ? new SVG(options) : null;
        }
        Map.include({
          // @namespace Map; @method getRenderer(layer: Path): Renderer
          // Returns the instance of `Renderer` that should be used to render the given
          // `Path`. It will ensure that the `renderer` options of the map and paths
          // are respected, and that the renderers do exist on the map.
          getRenderer: function(layer) {
            var renderer = layer.options.renderer || this._getPaneRenderer(layer.options.pane) || this.options.renderer || this._renderer;
            if (!renderer) {
              renderer = this._renderer = this._createRenderer();
            }
            if (!this.hasLayer(renderer)) {
              this.addLayer(renderer);
            }
            return renderer;
          },
          _getPaneRenderer: function(name) {
            if (name === "overlayPane" || name === void 0) {
              return false;
            }
            var renderer = this._paneRenderers[name];
            if (renderer === void 0) {
              renderer = this._createRenderer({ pane: name });
              this._paneRenderers[name] = renderer;
            }
            return renderer;
          },
          _createRenderer: function(options) {
            return this.options.preferCanvas && canvas(options) || svg(options);
          }
        });
        var Rectangle = Polygon.extend({
          initialize: function(latLngBounds, options) {
            Polygon.prototype.initialize.call(this, this._boundsToLatLngs(latLngBounds), options);
          },
          // @method setBounds(latLngBounds: LatLngBounds): this
          // Redraws the rectangle with the passed bounds.
          setBounds: function(latLngBounds) {
            return this.setLatLngs(this._boundsToLatLngs(latLngBounds));
          },
          _boundsToLatLngs: function(latLngBounds) {
            latLngBounds = toLatLngBounds(latLngBounds);
            return [
              latLngBounds.getSouthWest(),
              latLngBounds.getNorthWest(),
              latLngBounds.getNorthEast(),
              latLngBounds.getSouthEast()
            ];
          }
        });
        function rectangle(latLngBounds, options) {
          return new Rectangle(latLngBounds, options);
        }
        SVG.create = create;
        SVG.pointsToPath = pointsToPath;
        GeoJSON.geometryToLayer = geometryToLayer;
        GeoJSON.coordsToLatLng = coordsToLatLng;
        GeoJSON.coordsToLatLngs = coordsToLatLngs;
        GeoJSON.latLngToCoords = latLngToCoords;
        GeoJSON.latLngsToCoords = latLngsToCoords;
        GeoJSON.getFeature = getFeature;
        GeoJSON.asFeature = asFeature;
        Map.mergeOptions({
          // @option boxZoom: Boolean = true
          // Whether the map can be zoomed to a rectangular area specified by
          // dragging the mouse while pressing the shift key.
          boxZoom: true
        });
        var BoxZoom = Handler.extend({
          initialize: function(map) {
            this._map = map;
            this._container = map._container;
            this._pane = map._panes.overlayPane;
            this._resetStateTimeout = 0;
            map.on("unload", this._destroy, this);
          },
          addHooks: function() {
            on(this._container, "mousedown", this._onMouseDown, this);
          },
          removeHooks: function() {
            off(this._container, "mousedown", this._onMouseDown, this);
          },
          moved: function() {
            return this._moved;
          },
          _destroy: function() {
            remove(this._pane);
            delete this._pane;
          },
          _resetState: function() {
            this._resetStateTimeout = 0;
            this._moved = false;
          },
          _clearDeferredResetState: function() {
            if (this._resetStateTimeout !== 0) {
              clearTimeout(this._resetStateTimeout);
              this._resetStateTimeout = 0;
            }
          },
          _onMouseDown: function(e) {
            if (!e.shiftKey || e.which !== 1 && e.button !== 1) {
              return false;
            }
            this._clearDeferredResetState();
            this._resetState();
            disableTextSelection();
            disableImageDrag();
            this._startPoint = this._map.mouseEventToContainerPoint(e);
            on(document, {
              contextmenu: stop,
              mousemove: this._onMouseMove,
              mouseup: this._onMouseUp,
              keydown: this._onKeyDown
            }, this);
          },
          _onMouseMove: function(e) {
            if (!this._moved) {
              this._moved = true;
              this._box = create$1("div", "leaflet-zoom-box", this._container);
              addClass(this._container, "leaflet-crosshair");
              this._map.fire("boxzoomstart");
            }
            this._point = this._map.mouseEventToContainerPoint(e);
            var bounds = new Bounds(this._point, this._startPoint), size = bounds.getSize();
            setPosition(this._box, bounds.min);
            this._box.style.width = size.x + "px";
            this._box.style.height = size.y + "px";
          },
          _finish: function() {
            if (this._moved) {
              remove(this._box);
              removeClass(this._container, "leaflet-crosshair");
            }
            enableTextSelection();
            enableImageDrag();
            off(document, {
              contextmenu: stop,
              mousemove: this._onMouseMove,
              mouseup: this._onMouseUp,
              keydown: this._onKeyDown
            }, this);
          },
          _onMouseUp: function(e) {
            if (e.which !== 1 && e.button !== 1) {
              return;
            }
            this._finish();
            if (!this._moved) {
              return;
            }
            this._clearDeferredResetState();
            this._resetStateTimeout = setTimeout(bind(this._resetState, this), 0);
            var bounds = new LatLngBounds(
              this._map.containerPointToLatLng(this._startPoint),
              this._map.containerPointToLatLng(this._point)
            );
            this._map.fitBounds(bounds).fire("boxzoomend", { boxZoomBounds: bounds });
          },
          _onKeyDown: function(e) {
            if (e.keyCode === 27) {
              this._finish();
              this._clearDeferredResetState();
              this._resetState();
            }
          }
        });
        Map.addInitHook("addHandler", "boxZoom", BoxZoom);
        Map.mergeOptions({
          // @option doubleClickZoom: Boolean|String = true
          // Whether the map can be zoomed in by double clicking on it and
          // zoomed out by double clicking while holding shift. If passed
          // `'center'`, double-click zoom will zoom to the center of the
          //  view regardless of where the mouse was.
          doubleClickZoom: true
        });
        var DoubleClickZoom = Handler.extend({
          addHooks: function() {
            this._map.on("dblclick", this._onDoubleClick, this);
          },
          removeHooks: function() {
            this._map.off("dblclick", this._onDoubleClick, this);
          },
          _onDoubleClick: function(e) {
            var map = this._map, oldZoom = map.getZoom(), delta = map.options.zoomDelta, zoom2 = e.originalEvent.shiftKey ? oldZoom - delta : oldZoom + delta;
            if (map.options.doubleClickZoom === "center") {
              map.setZoom(zoom2);
            } else {
              map.setZoomAround(e.containerPoint, zoom2);
            }
          }
        });
        Map.addInitHook("addHandler", "doubleClickZoom", DoubleClickZoom);
        Map.mergeOptions({
          // @option dragging: Boolean = true
          // Whether the map is draggable with mouse/touch or not.
          dragging: true,
          // @section Panning Inertia Options
          // @option inertia: Boolean = *
          // If enabled, panning of the map will have an inertia effect where
          // the map builds momentum while dragging and continues moving in
          // the same direction for some time. Feels especially nice on touch
          // devices. Enabled by default.
          inertia: true,
          // @option inertiaDeceleration: Number = 3000
          // The rate with which the inertial movement slows down, in pixels/second².
          inertiaDeceleration: 3400,
          // px/s^2
          // @option inertiaMaxSpeed: Number = Infinity
          // Max speed of the inertial movement, in pixels/second.
          inertiaMaxSpeed: Infinity,
          // px/s
          // @option easeLinearity: Number = 0.2
          easeLinearity: 0.2,
          // TODO refactor, move to CRS
          // @option worldCopyJump: Boolean = false
          // With this option enabled, the map tracks when you pan to another "copy"
          // of the world and seamlessly jumps to the original one so that all overlays
          // like markers and vector layers are still visible.
          worldCopyJump: false,
          // @option maxBoundsViscosity: Number = 0.0
          // If `maxBounds` is set, this option will control how solid the bounds
          // are when dragging the map around. The default value of `0.0` allows the
          // user to drag outside the bounds at normal speed, higher values will
          // slow down map dragging outside bounds, and `1.0` makes the bounds fully
          // solid, preventing the user from dragging outside the bounds.
          maxBoundsViscosity: 0
        });
        var Drag = Handler.extend({
          addHooks: function() {
            if (!this._draggable) {
              var map = this._map;
              this._draggable = new Draggable(map._mapPane, map._container);
              this._draggable.on({
                dragstart: this._onDragStart,
                drag: this._onDrag,
                dragend: this._onDragEnd
              }, this);
              this._draggable.on("predrag", this._onPreDragLimit, this);
              if (map.options.worldCopyJump) {
                this._draggable.on("predrag", this._onPreDragWrap, this);
                map.on("zoomend", this._onZoomEnd, this);
                map.whenReady(this._onZoomEnd, this);
              }
            }
            addClass(this._map._container, "leaflet-grab leaflet-touch-drag");
            this._draggable.enable();
            this._positions = [];
            this._times = [];
          },
          removeHooks: function() {
            removeClass(this._map._container, "leaflet-grab");
            removeClass(this._map._container, "leaflet-touch-drag");
            this._draggable.disable();
          },
          moved: function() {
            return this._draggable && this._draggable._moved;
          },
          moving: function() {
            return this._draggable && this._draggable._moving;
          },
          _onDragStart: function() {
            var map = this._map;
            map._stop();
            if (this._map.options.maxBounds && this._map.options.maxBoundsViscosity) {
              var bounds = toLatLngBounds(this._map.options.maxBounds);
              this._offsetLimit = toBounds(
                this._map.latLngToContainerPoint(bounds.getNorthWest()).multiplyBy(-1),
                this._map.latLngToContainerPoint(bounds.getSouthEast()).multiplyBy(-1).add(this._map.getSize())
              );
              this._viscosity = Math.min(1, Math.max(0, this._map.options.maxBoundsViscosity));
            } else {
              this._offsetLimit = null;
            }
            map.fire("movestart").fire("dragstart");
            if (map.options.inertia) {
              this._positions = [];
              this._times = [];
            }
          },
          _onDrag: function(e) {
            if (this._map.options.inertia) {
              var time = this._lastTime = +/* @__PURE__ */ new Date(), pos = this._lastPos = this._draggable._absPos || this._draggable._newPos;
              this._positions.push(pos);
              this._times.push(time);
              this._prunePositions(time);
            }
            this._map.fire("move", e).fire("drag", e);
          },
          _prunePositions: function(time) {
            while (this._positions.length > 1 && time - this._times[0] > 50) {
              this._positions.shift();
              this._times.shift();
            }
          },
          _onZoomEnd: function() {
            var pxCenter = this._map.getSize().divideBy(2), pxWorldCenter = this._map.latLngToLayerPoint([0, 0]);
            this._initialWorldOffset = pxWorldCenter.subtract(pxCenter).x;
            this._worldWidth = this._map.getPixelWorldBounds().getSize().x;
          },
          _viscousLimit: function(value, threshold) {
            return value - (value - threshold) * this._viscosity;
          },
          _onPreDragLimit: function() {
            if (!this._viscosity || !this._offsetLimit) {
              return;
            }
            var offset = this._draggable._newPos.subtract(this._draggable._startPos);
            var limit = this._offsetLimit;
            if (offset.x < limit.min.x) {
              offset.x = this._viscousLimit(offset.x, limit.min.x);
            }
            if (offset.y < limit.min.y) {
              offset.y = this._viscousLimit(offset.y, limit.min.y);
            }
            if (offset.x > limit.max.x) {
              offset.x = this._viscousLimit(offset.x, limit.max.x);
            }
            if (offset.y > limit.max.y) {
              offset.y = this._viscousLimit(offset.y, limit.max.y);
            }
            this._draggable._newPos = this._draggable._startPos.add(offset);
          },
          _onPreDragWrap: function() {
            var worldWidth = this._worldWidth, halfWidth = Math.round(worldWidth / 2), dx = this._initialWorldOffset, x = this._draggable._newPos.x, newX1 = (x - halfWidth + dx) % worldWidth + halfWidth - dx, newX2 = (x + halfWidth + dx) % worldWidth - halfWidth - dx, newX = Math.abs(newX1 + dx) < Math.abs(newX2 + dx) ? newX1 : newX2;
            this._draggable._absPos = this._draggable._newPos.clone();
            this._draggable._newPos.x = newX;
          },
          _onDragEnd: function(e) {
            var map = this._map, options = map.options, noInertia = !options.inertia || e.noInertia || this._times.length < 2;
            map.fire("dragend", e);
            if (noInertia) {
              map.fire("moveend");
            } else {
              this._prunePositions(+/* @__PURE__ */ new Date());
              var direction = this._lastPos.subtract(this._positions[0]), duration = (this._lastTime - this._times[0]) / 1e3, ease = options.easeLinearity, speedVector = direction.multiplyBy(ease / duration), speed = speedVector.distanceTo([0, 0]), limitedSpeed = Math.min(options.inertiaMaxSpeed, speed), limitedSpeedVector = speedVector.multiplyBy(limitedSpeed / speed), decelerationDuration = limitedSpeed / (options.inertiaDeceleration * ease), offset = limitedSpeedVector.multiplyBy(-decelerationDuration / 2).round();
              if (!offset.x && !offset.y) {
                map.fire("moveend");
              } else {
                offset = map._limitOffset(offset, map.options.maxBounds);
                requestAnimFrame(function() {
                  map.panBy(offset, {
                    duration: decelerationDuration,
                    easeLinearity: ease,
                    noMoveStart: true,
                    animate: true
                  });
                });
              }
            }
          }
        });
        Map.addInitHook("addHandler", "dragging", Drag);
        Map.mergeOptions({
          // @option keyboard: Boolean = true
          // Makes the map focusable and allows users to navigate the map with keyboard
          // arrows and `+`/`-` keys.
          keyboard: true,
          // @option keyboardPanDelta: Number = 80
          // Amount of pixels to pan when pressing an arrow key.
          keyboardPanDelta: 80
        });
        var Keyboard = Handler.extend({
          keyCodes: {
            left: [37],
            right: [39],
            down: [40],
            up: [38],
            zoomIn: [187, 107, 61, 171],
            zoomOut: [189, 109, 54, 173]
          },
          initialize: function(map) {
            this._map = map;
            this._setPanDelta(map.options.keyboardPanDelta);
            this._setZoomDelta(map.options.zoomDelta);
          },
          addHooks: function() {
            var container = this._map._container;
            if (container.tabIndex <= 0) {
              container.tabIndex = "0";
            }
            on(container, {
              focus: this._onFocus,
              blur: this._onBlur,
              mousedown: this._onMouseDown
            }, this);
            this._map.on({
              focus: this._addHooks,
              blur: this._removeHooks
            }, this);
          },
          removeHooks: function() {
            this._removeHooks();
            off(this._map._container, {
              focus: this._onFocus,
              blur: this._onBlur,
              mousedown: this._onMouseDown
            }, this);
            this._map.off({
              focus: this._addHooks,
              blur: this._removeHooks
            }, this);
          },
          _onMouseDown: function() {
            if (this._focused) {
              return;
            }
            var body = document.body, docEl = document.documentElement, top = body.scrollTop || docEl.scrollTop, left = body.scrollLeft || docEl.scrollLeft;
            this._map._container.focus();
            window.scrollTo(left, top);
          },
          _onFocus: function() {
            this._focused = true;
            this._map.fire("focus");
          },
          _onBlur: function() {
            this._focused = false;
            this._map.fire("blur");
          },
          _setPanDelta: function(panDelta) {
            var keys = this._panKeys = {}, codes = this.keyCodes, i, len;
            for (i = 0, len = codes.left.length; i < len; i++) {
              keys[codes.left[i]] = [-1 * panDelta, 0];
            }
            for (i = 0, len = codes.right.length; i < len; i++) {
              keys[codes.right[i]] = [panDelta, 0];
            }
            for (i = 0, len = codes.down.length; i < len; i++) {
              keys[codes.down[i]] = [0, panDelta];
            }
            for (i = 0, len = codes.up.length; i < len; i++) {
              keys[codes.up[i]] = [0, -1 * panDelta];
            }
          },
          _setZoomDelta: function(zoomDelta) {
            var keys = this._zoomKeys = {}, codes = this.keyCodes, i, len;
            for (i = 0, len = codes.zoomIn.length; i < len; i++) {
              keys[codes.zoomIn[i]] = zoomDelta;
            }
            for (i = 0, len = codes.zoomOut.length; i < len; i++) {
              keys[codes.zoomOut[i]] = -zoomDelta;
            }
          },
          _addHooks: function() {
            on(document, "keydown", this._onKeyDown, this);
          },
          _removeHooks: function() {
            off(document, "keydown", this._onKeyDown, this);
          },
          _onKeyDown: function(e) {
            if (e.altKey || e.ctrlKey || e.metaKey) {
              return;
            }
            var key = e.keyCode, map = this._map, offset;
            if (key in this._panKeys) {
              if (!map._panAnim || !map._panAnim._inProgress) {
                offset = this._panKeys[key];
                if (e.shiftKey) {
                  offset = toPoint(offset).multiplyBy(3);
                }
                if (map.options.maxBounds) {
                  offset = map._limitOffset(toPoint(offset), map.options.maxBounds);
                }
                if (map.options.worldCopyJump) {
                  var newLatLng = map.wrapLatLng(map.unproject(map.project(map.getCenter()).add(offset)));
                  map.panTo(newLatLng);
                } else {
                  map.panBy(offset);
                }
              }
            } else if (key in this._zoomKeys) {
              map.setZoom(map.getZoom() + (e.shiftKey ? 3 : 1) * this._zoomKeys[key]);
            } else if (key === 27 && map._popup && map._popup.options.closeOnEscapeKey) {
              map.closePopup();
            } else {
              return;
            }
            stop(e);
          }
        });
        Map.addInitHook("addHandler", "keyboard", Keyboard);
        Map.mergeOptions({
          // @section Mouse wheel options
          // @option scrollWheelZoom: Boolean|String = true
          // Whether the map can be zoomed by using the mouse wheel. If passed `'center'`,
          // it will zoom to the center of the view regardless of where the mouse was.
          scrollWheelZoom: true,
          // @option wheelDebounceTime: Number = 40
          // Limits the rate at which a wheel can fire (in milliseconds). By default
          // user can't zoom via wheel more often than once per 40 ms.
          wheelDebounceTime: 40,
          // @option wheelPxPerZoomLevel: Number = 60
          // How many scroll pixels (as reported by [L.DomEvent.getWheelDelta](#domevent-getwheeldelta))
          // mean a change of one full zoom level. Smaller values will make wheel-zooming
          // faster (and vice versa).
          wheelPxPerZoomLevel: 60
        });
        var ScrollWheelZoom = Handler.extend({
          addHooks: function() {
            on(this._map._container, "wheel", this._onWheelScroll, this);
            this._delta = 0;
          },
          removeHooks: function() {
            off(this._map._container, "wheel", this._onWheelScroll, this);
          },
          _onWheelScroll: function(e) {
            var delta = getWheelDelta(e);
            var debounce = this._map.options.wheelDebounceTime;
            this._delta += delta;
            this._lastMousePos = this._map.mouseEventToContainerPoint(e);
            if (!this._startTime) {
              this._startTime = +/* @__PURE__ */ new Date();
            }
            var left = Math.max(debounce - (+/* @__PURE__ */ new Date() - this._startTime), 0);
            clearTimeout(this._timer);
            this._timer = setTimeout(bind(this._performZoom, this), left);
            stop(e);
          },
          _performZoom: function() {
            var map = this._map, zoom2 = map.getZoom(), snap = this._map.options.zoomSnap || 0;
            map._stop();
            var d2 = this._delta / (this._map.options.wheelPxPerZoomLevel * 4), d3 = 4 * Math.log(2 / (1 + Math.exp(-Math.abs(d2)))) / Math.LN2, d4 = snap ? Math.ceil(d3 / snap) * snap : d3, delta = map._limitZoom(zoom2 + (this._delta > 0 ? d4 : -d4)) - zoom2;
            this._delta = 0;
            this._startTime = null;
            if (!delta) {
              return;
            }
            if (map.options.scrollWheelZoom === "center") {
              map.setZoom(zoom2 + delta);
            } else {
              map.setZoomAround(this._lastMousePos, zoom2 + delta);
            }
          }
        });
        Map.addInitHook("addHandler", "scrollWheelZoom", ScrollWheelZoom);
        var tapHoldDelay = 600;
        Map.mergeOptions({
          // @section Touch interaction options
          // @option tapHold: Boolean
          // Enables simulation of `contextmenu` event, default is `true` for mobile Safari.
          tapHold: Browser.touchNative && Browser.safari && Browser.mobile,
          // @option tapTolerance: Number = 15
          // The max number of pixels a user can shift his finger during touch
          // for it to be considered a valid tap.
          tapTolerance: 15
        });
        var TapHold = Handler.extend({
          addHooks: function() {
            on(this._map._container, "touchstart", this._onDown, this);
          },
          removeHooks: function() {
            off(this._map._container, "touchstart", this._onDown, this);
          },
          _onDown: function(e) {
            clearTimeout(this._holdTimeout);
            if (e.touches.length !== 1) {
              return;
            }
            var first = e.touches[0];
            this._startPos = this._newPos = new Point(first.clientX, first.clientY);
            this._holdTimeout = setTimeout(bind(function() {
              this._cancel();
              if (!this._isTapValid()) {
                return;
              }
              on(document, "touchend", preventDefault);
              on(document, "touchend touchcancel", this._cancelClickPrevent);
              this._simulateEvent("contextmenu", first);
            }, this), tapHoldDelay);
            on(document, "touchend touchcancel contextmenu", this._cancel, this);
            on(document, "touchmove", this._onMove, this);
          },
          _cancelClickPrevent: function cancelClickPrevent() {
            off(document, "touchend", preventDefault);
            off(document, "touchend touchcancel", cancelClickPrevent);
          },
          _cancel: function() {
            clearTimeout(this._holdTimeout);
            off(document, "touchend touchcancel contextmenu", this._cancel, this);
            off(document, "touchmove", this._onMove, this);
          },
          _onMove: function(e) {
            var first = e.touches[0];
            this._newPos = new Point(first.clientX, first.clientY);
          },
          _isTapValid: function() {
            return this._newPos.distanceTo(this._startPos) <= this._map.options.tapTolerance;
          },
          _simulateEvent: function(type, e) {
            var simulatedEvent = new MouseEvent(type, {
              bubbles: true,
              cancelable: true,
              view: window,
              // detail: 1,
              screenX: e.screenX,
              screenY: e.screenY,
              clientX: e.clientX,
              clientY: e.clientY
              // button: 2,
              // buttons: 2
            });
            simulatedEvent._simulated = true;
            e.target.dispatchEvent(simulatedEvent);
          }
        });
        Map.addInitHook("addHandler", "tapHold", TapHold);
        Map.mergeOptions({
          // @section Touch interaction options
          // @option touchZoom: Boolean|String = *
          // Whether the map can be zoomed by touch-dragging with two fingers. If
          // passed `'center'`, it will zoom to the center of the view regardless of
          // where the touch events (fingers) were. Enabled for touch-capable web
          // browsers.
          touchZoom: Browser.touch,
          // @option bounceAtZoomLimits: Boolean = true
          // Set it to false if you don't want the map to zoom beyond min/max zoom
          // and then bounce back when pinch-zooming.
          bounceAtZoomLimits: true
        });
        var TouchZoom = Handler.extend({
          addHooks: function() {
            addClass(this._map._container, "leaflet-touch-zoom");
            on(this._map._container, "touchstart", this._onTouchStart, this);
          },
          removeHooks: function() {
            removeClass(this._map._container, "leaflet-touch-zoom");
            off(this._map._container, "touchstart", this._onTouchStart, this);
          },
          _onTouchStart: function(e) {
            var map = this._map;
            if (!e.touches || e.touches.length !== 2 || map._animatingZoom || this._zooming) {
              return;
            }
            var p1 = map.mouseEventToContainerPoint(e.touches[0]), p2 = map.mouseEventToContainerPoint(e.touches[1]);
            this._centerPoint = map.getSize()._divideBy(2);
            this._startLatLng = map.containerPointToLatLng(this._centerPoint);
            if (map.options.touchZoom !== "center") {
              this._pinchStartLatLng = map.containerPointToLatLng(p1.add(p2)._divideBy(2));
            }
            this._startDist = p1.distanceTo(p2);
            this._startZoom = map.getZoom();
            this._moved = false;
            this._zooming = true;
            map._stop();
            on(document, "touchmove", this._onTouchMove, this);
            on(document, "touchend touchcancel", this._onTouchEnd, this);
            preventDefault(e);
          },
          _onTouchMove: function(e) {
            if (!e.touches || e.touches.length !== 2 || !this._zooming) {
              return;
            }
            var map = this._map, p1 = map.mouseEventToContainerPoint(e.touches[0]), p2 = map.mouseEventToContainerPoint(e.touches[1]), scale2 = p1.distanceTo(p2) / this._startDist;
            this._zoom = map.getScaleZoom(scale2, this._startZoom);
            if (!map.options.bounceAtZoomLimits && (this._zoom < map.getMinZoom() && scale2 < 1 || this._zoom > map.getMaxZoom() && scale2 > 1)) {
              this._zoom = map._limitZoom(this._zoom);
            }
            if (map.options.touchZoom === "center") {
              this._center = this._startLatLng;
              if (scale2 === 1) {
                return;
              }
            } else {
              var delta = p1._add(p2)._divideBy(2)._subtract(this._centerPoint);
              if (scale2 === 1 && delta.x === 0 && delta.y === 0) {
                return;
              }
              this._center = map.unproject(map.project(this._pinchStartLatLng, this._zoom).subtract(delta), this._zoom);
            }
            if (!this._moved) {
              map._moveStart(true, false);
              this._moved = true;
            }
            cancelAnimFrame(this._animRequest);
            var moveFn = bind(map._move, map, this._center, this._zoom, { pinch: true, round: false }, void 0);
            this._animRequest = requestAnimFrame(moveFn, this, true);
            preventDefault(e);
          },
          _onTouchEnd: function() {
            if (!this._moved || !this._zooming) {
              this._zooming = false;
              return;
            }
            this._zooming = false;
            cancelAnimFrame(this._animRequest);
            off(document, "touchmove", this._onTouchMove, this);
            off(document, "touchend touchcancel", this._onTouchEnd, this);
            if (this._map.options.zoomAnimation) {
              this._map._animateZoom(this._center, this._map._limitZoom(this._zoom), true, this._map.options.zoomSnap);
            } else {
              this._map._resetView(this._center, this._map._limitZoom(this._zoom));
            }
          }
        });
        Map.addInitHook("addHandler", "touchZoom", TouchZoom);
        Map.BoxZoom = BoxZoom;
        Map.DoubleClickZoom = DoubleClickZoom;
        Map.Drag = Drag;
        Map.Keyboard = Keyboard;
        Map.ScrollWheelZoom = ScrollWheelZoom;
        Map.TapHold = TapHold;
        Map.TouchZoom = TouchZoom;
        exports2.Bounds = Bounds;
        exports2.Browser = Browser;
        exports2.CRS = CRS;
        exports2.Canvas = Canvas;
        exports2.Circle = Circle;
        exports2.CircleMarker = CircleMarker;
        exports2.Class = Class;
        exports2.Control = Control;
        exports2.DivIcon = DivIcon;
        exports2.DivOverlay = DivOverlay;
        exports2.DomEvent = DomEvent;
        exports2.DomUtil = DomUtil;
        exports2.Draggable = Draggable;
        exports2.Evented = Evented;
        exports2.FeatureGroup = FeatureGroup;
        exports2.GeoJSON = GeoJSON;
        exports2.GridLayer = GridLayer;
        exports2.Handler = Handler;
        exports2.Icon = Icon;
        exports2.ImageOverlay = ImageOverlay;
        exports2.LatLng = LatLng;
        exports2.LatLngBounds = LatLngBounds;
        exports2.Layer = Layer;
        exports2.LayerGroup = LayerGroup;
        exports2.LineUtil = LineUtil;
        exports2.Map = Map;
        exports2.Marker = Marker;
        exports2.Mixin = Mixin;
        exports2.Path = Path;
        exports2.Point = Point;
        exports2.PolyUtil = PolyUtil;
        exports2.Polygon = Polygon;
        exports2.Polyline = Polyline;
        exports2.Popup = Popup;
        exports2.PosAnimation = PosAnimation;
        exports2.Projection = index;
        exports2.Rectangle = Rectangle;
        exports2.Renderer = Renderer;
        exports2.SVG = SVG;
        exports2.SVGOverlay = SVGOverlay;
        exports2.TileLayer = TileLayer;
        exports2.Tooltip = Tooltip;
        exports2.Transformation = Transformation;
        exports2.Util = Util;
        exports2.VideoOverlay = VideoOverlay;
        exports2.bind = bind;
        exports2.bounds = toBounds;
        exports2.canvas = canvas;
        exports2.circle = circle;
        exports2.circleMarker = circleMarker;
        exports2.control = control;
        exports2.divIcon = divIcon;
        exports2.extend = extend;
        exports2.featureGroup = featureGroup;
        exports2.geoJSON = geoJSON;
        exports2.geoJson = geoJson;
        exports2.gridLayer = gridLayer;
        exports2.icon = icon;
        exports2.imageOverlay = imageOverlay;
        exports2.latLng = toLatLng;
        exports2.latLngBounds = toLatLngBounds;
        exports2.layerGroup = layerGroup;
        exports2.map = createMap;
        exports2.marker = marker;
        exports2.point = toPoint;
        exports2.polygon = polygon;
        exports2.polyline = polyline;
        exports2.popup = popup;
        exports2.rectangle = rectangle;
        exports2.setOptions = setOptions;
        exports2.stamp = stamp;
        exports2.svg = svg;
        exports2.svgOverlay = svgOverlay;
        exports2.tileLayer = tileLayer;
        exports2.tooltip = tooltip;
        exports2.transformation = toTransformation;
        exports2.version = version2;
        exports2.videoOverlay = videoOverlay;
        var oldL = window.L;
        exports2.noConflict = function() {
          window.L = oldL;
          return this;
        };
        window.L = exports2;
      }));
    }
  });

  // mapwidgets/js/L.DayNightTerminator.js
  var require_L_DayNightTerminator = __commonJS({
    "mapwidgets/js/L.DayNightTerminator.js"(exports, module) {
      "use strict";
      (function(global2, factory) {
        typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory(require_leaflet_src()) : typeof define === "function" && define.amd ? define(["leaflet"], factory) : (global2 = typeof globalThis !== "undefined" ? globalThis : global2 || self, global2.L = global2.L || {}, global2.L.terminator = factory(global2.L));
      })(exports, function(L2) {
        "use strict";
        function julian(date) {
          return date / 864e5 + 24405875e-1;
        }
        function GMST(julianDay) {
          var d = julianDay - 2451545;
          return (18.697374558 + 24.06570982441908 * d) % 24;
        }
        var dayNightTerminator = L2.Polygon.extend({
          options: {
            interactive: false,
            // Disable "clickable" mouse pointer
            color: "#00",
            opacity: 0.5,
            fillColor: "#00",
            fillOpacity: 0.5,
            resolution: 2,
            longitudeRange: 720
          },
          initialize: function(options) {
            this.version = "0.1.0";
            this._R2D = 180 / Math.PI;
            this._D2R = Math.PI / 180;
            L2.Util.setOptions(this, options);
            var latLng = this._compute(this.options.time);
            this.setLatLngs(latLng);
          },
          setTime: function(date) {
            this.options.time = date;
            var latLng = this._compute(date);
            this.setLatLngs(latLng);
          },
          _sunEclipticPosition: function(julianDay) {
            var n = julianDay - 2451545;
            var L3 = 280.46 + 0.9856474 * n;
            L3 %= 360;
            var g = 357.528 + 0.9856003 * n;
            g %= 360;
            var lambda = L3 + 1.915 * Math.sin(g * this._D2R) + 0.02 * Math.sin(2 * g * this._D2R);
            var R = 1.00014 - 0.01671 * Math.cos(g * this._D2R) - 14e-4 * Math.cos(2 * g * this._D2R);
            return { lambda, R };
          },
          _eclipticObliquity: function(julianDay) {
            var n = julianDay - 2451545;
            var T = n / 36525;
            var epsilon = 23.43929111 - T * (46.836769 / 3600 - T * (1831e-7 / 3600 + T * (20034e-7 / 3600 - T * (576e-9 / 3600 - T * 434e-10 / 3600))));
            return epsilon;
          },
          _sunEquatorialPosition: function(sunEclLng, eclObliq) {
            var alpha = Math.atan(Math.cos(eclObliq * this._D2R) * Math.tan(sunEclLng * this._D2R)) * this._R2D;
            var delta = Math.asin(Math.sin(eclObliq * this._D2R) * Math.sin(sunEclLng * this._D2R)) * this._R2D;
            var lQuadrant = Math.floor(sunEclLng / 90) * 90;
            var raQuadrant = Math.floor(alpha / 90) * 90;
            alpha = alpha + (lQuadrant - raQuadrant);
            return { alpha, delta };
          },
          _hourAngle: function(lng, sunPos, gst) {
            var lst = gst + lng / 15;
            return lst * 15 - sunPos.alpha;
          },
          _latitude: function(ha, sunPos) {
            var lat = Math.atan(-Math.cos(ha * this._D2R) / Math.tan(sunPos.delta * this._D2R)) * this._R2D;
            return lat;
          },
          _compute: function(time) {
            var today = time ? new Date(time) : /* @__PURE__ */ new Date();
            var julianDay = julian(today);
            var gst = GMST(julianDay);
            var latLng = [];
            var sunEclPos = this._sunEclipticPosition(julianDay);
            var eclObliq = this._eclipticObliquity(julianDay);
            var sunEqPos = this._sunEquatorialPosition(sunEclPos.lambda, eclObliq);
            for (var i = 0; i <= this.options.longitudeRange * this.options.resolution; i++) {
              var lng = -this.options.longitudeRange / 2 + i / this.options.resolution;
              var ha = this._hourAngle(lng, sunEqPos, gst);
              latLng[i + 1] = [this._latitude(ha, sunEqPos), lng];
            }
            if (sunEqPos.delta < 0) {
              latLng[0] = [90, -this.options.longitudeRange / 2];
              latLng[latLng.length] = [90, this.options.longitudeRange / 2];
            } else {
              latLng[0] = [-90, -this.options.longitudeRange / 2];
              latLng[latLng.length] = [-90, this.options.longitudeRange / 2];
            }
            return latLng;
          }
        });
        L2.DayNightTerminator = dayNightTerminator;
        L2.dayNightTerminator = function dayNightTerminator2(options) {
          return new dayNightTerminator2(options);
        };
        return dayNightTerminator;
      });
      (function(factory) {
        if (typeof define === "function" && define.amd) {
          define(["leaflet"], factory);
        } else if (typeof module === "object" && module.exports) {
          module.exports = factory(require_leaflet_src());
        } else {
          factory(window.L);
        }
      })(function(L2) {
        if (!L2) {
          throw new Error("Leaflet not found. Load Leaflet before this plugin.");
        }
        const d2r = (d) => d * Math.PI / 180;
        const r2d = (r) => r * 180 / Math.PI;
        function dayFrac(d) {
          const y0 = Date.UTC(d.getUTCFullYear(), 0, 1);
          return (d.getTime() - y0) / 864e5 + 1 + (d.getUTCHours() - 12) / 24 + d.getUTCMinutes() / 1440 + d.getUTCSeconds() / 86400;
        }
        function solarDeclination(d) {
          const g = 2 * Math.PI / 365 * dayFrac(d);
          return 6918e-6 - 0.399912 * Math.cos(g) + 0.070257 * Math.sin(g) - 6758e-6 * Math.cos(2 * g) + 907e-6 * Math.sin(2 * g) - 2697e-6 * Math.cos(3 * g) + 148e-5 * Math.sin(3 * g);
        }
        function equationOfTimeHours(d) {
          const g = 2 * Math.PI / 365 * dayFrac(d);
          return 229.18 * (75e-6 + 1868e-6 * Math.cos(g) - 0.032077 * Math.sin(g) - 0.014615 * Math.cos(2 * g) - 0.040849 * Math.sin(2 * g)) / 60;
        }
        function subsolarLongitudeRad(d) {
          const t = d.getUTCHours() + d.getUTCMinutes() / 60 + d.getUTCSeconds() / 3600;
          let lonDeg = 15 * (12 - (t + equationOfTimeHours(d)));
          lonDeg = (lonDeg + 180) % 360 - 180;
          return d2r(lonDeg);
        }
        function terminatorLatAtLon(lonDeg, d) {
          const \u03B4 = solarDeclination(d), \u03BBs = subsolarLongitudeRad(d), \u03BB = d2r(lonDeg);
          return r2d(Math.atan2(-Math.cos(\u03B4) * Math.cos(\u03BB - \u03BBs), Math.sin(\u03B4)));
        }
        function sunAltitudeDeg(latDeg, lonDeg, d) {
          const \u03C6 = d2r(latDeg), \u03B4 = solarDeclination(d), H = d2r(lonDeg) - subsolarLongitudeRad(d);
          const s = Math.sin(\u03C6) * Math.sin(\u03B4) + Math.cos(\u03C6) * Math.cos(\u03B4) * Math.cos(H);
          return r2d(Math.asin(s));
        }
        function clampLat(lat) {
          return Math.max(-85.05, Math.min(85.05, lat));
        }
        function projectWorld(map, lat, lon) {
          const z = map.getZoom();
          const origin = map.getPixelOrigin();
          const p = map.project([lat, lon], z);
          return { xWorld: p.x, x: p.x - origin.x, y: p.y - origin.y };
        }
        function unwrapToNear(xWorld, anchorXWorld, worldW) {
          if (anchorXWorld == null) {
            return xWorld;
          }
          const k = Math.round((anchorXWorld - xWorld) / worldW);
          return xWorld + k * worldW;
        }
        const DayNightTerminatorCanvas = L2.Layer.extend({
          options: {
            color: "#000000",
            // night color
            maxOpacity: 0.6,
            // deepest night opacity
            stepLon: 2,
            // degrees between meridians (smaller = smoother, more CPU)
            bandWidth: 0.5,
            // degrees width per band (latitude)
            totalWidth: 14,
            // total gradient width in degrees
            updateMs: 5 * 60 * 1e3,
            pane: "daynight-terminator-canvas",
            zIndex: void 0,
            // if set, applied to pane
            nightSide: "auto",
            // 'auto' | 'north' | 'south'
            composite: "source-over",
            // e.g. 'multiply' for nicer blending over bright tiles
            gamma: 1
            // opacity curve exponent; >1 steiler, <1 weicher
          },
          initialize(options) {
            L2.setOptions(this, options);
            this._map = null;
            this._canvas = null;
            this._ctx = null;
            this._timer = null;
            this._date = null;
            this._pixelRatio = Math.max(1, window.devicePixelRatio || 1);
            this._boundRender = () => this._render();
            this._boundReset = () => this._reset();
          },
          onAdd(map) {
            this._map = map;
            if (!map.getPane(this.options.pane)) {
              map.createPane(this.options.pane);
            }
            const pane = map.getPane(this.options.pane);
            pane.style.pointerEvents = "none";
            if (typeof this.options.zIndex === "number") {
              pane.style.zIndex = String(this.options.zIndex);
            }
            this._canvas = L2.DomUtil.create("canvas", "leaflet-daynight-canvas", pane);
            this._canvas.style.position = "absolute";
            this._canvas.style.top = "0";
            this._canvas.style.left = "0";
            this._ctx = this._canvas.getContext("2d");
            this._reset();
            this._render();
            map.on("moveend zoomend resize", this._boundReset, this);
            if (this.options.updateMs > 0) {
              this._timer = setInterval(this._boundRender, this.options.updateMs);
            }
          },
          onRemove(map) {
            if (this._timer) {
              clearInterval(this._timer);
              this._timer = null;
            }
            map.off("moveend zoomend resize", this._boundReset, this);
            if (this._canvas && this._canvas.parentNode) {
              this._canvas.parentNode.removeChild(this._canvas);
            }
            this._canvas = null;
            this._ctx = null;
            this._map = null;
          },
          setOptions(opts) {
            L2.setOptions(this, opts);
            return this.redraw();
          },
          setDate(date) {
            this._date = date instanceof Date ? new Date(date.getTime()) : null;
            return this.redraw();
          },
          redraw() {
            if (this._map) {
              this._reset();
              this._render();
            }
            return this;
          },
          _reset() {
            if (!this._map || !this._canvas) {
              return;
            }
            const size = this._map.getSize();
            const pr = Math.max(1, window.devicePixelRatio || this._pixelRatio);
            this._pixelRatio = pr;
            this._canvas.width = Math.round(size.x * pr);
            this._canvas.height = Math.round(size.y * pr);
            this._canvas.style.width = `${size.x}px`;
            this._canvas.style.height = `${size.y}px`;
            const ctx = this._ctx;
            ctx.setTransform(pr, 0, 0, pr, 0, 0);
            ctx.imageSmoothingEnabled = true;
            this._render();
          },
          _render() {
            if (!this._map || !this._ctx) {
              return;
            }
            const ctx = this._ctx;
            const size = this._map.getSize();
            ctx.clearRect(0, 0, size.x, size.y);
            const now = this._date || /* @__PURE__ */ new Date();
            const { color, maxOpacity, stepLon, bandWidth, totalWidth, nightSide, gamma, composite } = this.options;
            const lons = [];
            for (let lon = -180; lon <= 180; lon += stepLon) {
              lons.push(Math.round(lon * 1e6) / 1e6);
            }
            const term = lons.map((lon) => {
              const \u03C6t = terminatorLatAtLon(lon, now);
              let dir;
              if (nightSide === "north") {
                dir = 1;
              } else if (nightSide === "south") {
                dir = -1;
              } else {
                const northIsNight = sunAltitudeDeg(\u03C6t + 0.3, lon, now) < 0;
                dir = northIsNight ? 1 : -1;
              }
              return { lon, \u03C6t, dir };
            });
            const nBands = Math.max(1, Math.round(totalWidth / bandWidth));
            const worldW = this._map.getPixelWorldBounds().getSize().x;
            const originX = this._map.getPixelOrigin().x;
            ctx.save();
            ctx.fillStyle = color;
            ctx.globalCompositeOperation = composite;
            for (let b = 0; b < nBands; b++) {
              let alpha = maxOpacity * ((b + 1) / nBands);
              if (gamma && gamma !== 1) {
                alpha = maxOpacity * Math.pow((b + 1) / nBands, gamma);
              }
              ctx.globalAlpha = Math.max(0, Math.min(1, alpha));
              const aTop = b * bandWidth;
              const aBot = (b + 1) * bandWidth;
              let anchorX = null;
              for (let i = 0; i < term.length - 1; i++) {
                const p1 = term[i], p2 = term[i + 1];
                const latT1 = clampLat(p1.\u03C6t + p1.dir * aTop);
                const latT2 = clampLat(p2.\u03C6t + p2.dir * aTop);
                const latB1 = clampLat(p1.\u03C6t + p1.dir * aBot);
                const latB2 = clampLat(p2.\u03C6t + p2.dir * aBot);
                let t1 = projectWorld(this._map, latT1, p1.lon);
                t1.xWorld = unwrapToNear(t1.xWorld, anchorX, worldW);
                t1.x = t1.xWorld - originX;
                const t2w = projectWorld(this._map, latT2, p2.lon);
                t2w.xWorld = unwrapToNear(t2w.xWorld, t1.xWorld, worldW);
                t2w.x = t2w.xWorld - originX;
                const b2w = projectWorld(this._map, latB2, p2.lon);
                b2w.xWorld = unwrapToNear(b2w.xWorld, t2w.xWorld, worldW);
                b2w.x = b2w.xWorld - originX;
                const b1w = projectWorld(this._map, latB1, p1.lon);
                b1w.xWorld = unwrapToNear(b1w.xWorld, t1.xWorld, worldW);
                b1w.x = b1w.xWorld - originX;
                ctx.beginPath();
                ctx.moveTo(t1.x, t1.y);
                ctx.lineTo(t2w.x, t2w.y);
                ctx.lineTo(b2w.x, b2w.y);
                ctx.lineTo(b1w.x, b1w.y);
                ctx.closePath();
                ctx.fill();
                anchorX = t2w.xWorld;
              }
            }
            ctx.restore();
          }
        });
        L2.DayNightTerminatorCanvas = DayNightTerminatorCanvas;
        L2.dayNightTerminatorCanvas = function(options) {
          return new DayNightTerminatorCanvas(options);
        };
        return DayNightTerminatorCanvas;
      });
    }
  });

  // mapwidgets/js/L.Terminator.js
  var require_L_Terminator = __commonJS({
    "mapwidgets/js/L.Terminator.js"(exports, module) {
      "use strict";
      (function(global2, factory) {
        typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory(require_leaflet_src()) : typeof define === "function" && define.amd ? define(["leaflet"], factory) : (global2 = typeof globalThis !== "undefined" ? globalThis : global2 || self, global2.L = global2.L || {}, global2.L.terminator = factory(global2.L));
      })(exports, function(L2) {
        "use strict";
        function julian(date) {
          return date / 864e5 + 24405875e-1;
        }
        function GMST(julianDay) {
          var d = julianDay - 2451545;
          return (18.697374558 + 24.06570982441908 * d) % 24;
        }
        var Terminator = L2.Polygon.extend({
          options: {
            interactive: false,
            // Disable "clickable" mouse pointer
            color: "#00",
            opacity: 0.5,
            fillColor: "#00",
            fillOpacity: 0.5,
            resolution: 2,
            longitudeRange: 720
          },
          initialize: function(options) {
            this.version = "0.1.0";
            this._R2D = 180 / Math.PI;
            this._D2R = Math.PI / 180;
            L2.Util.setOptions(this, options);
            var latLng = this._compute(this.options.time);
            this.setLatLngs(latLng);
          },
          setTime: function(date) {
            this.options.time = date;
            var latLng = this._compute(date);
            this.setLatLngs(latLng);
          },
          _sunEclipticPosition: function(julianDay) {
            var n = julianDay - 2451545;
            var L3 = 280.46 + 0.9856474 * n;
            L3 %= 360;
            var g = 357.528 + 0.9856003 * n;
            g %= 360;
            var lambda = L3 + 1.915 * Math.sin(g * this._D2R) + 0.02 * Math.sin(2 * g * this._D2R);
            var R = 1.00014 - 0.01671 * Math.cos(g * this._D2R) - 14e-4 * Math.cos(2 * g * this._D2R);
            return { lambda, R };
          },
          _eclipticObliquity: function(julianDay) {
            var n = julianDay - 2451545;
            var T = n / 36525;
            var epsilon = 23.43929111 - T * (46.836769 / 3600 - T * (1831e-7 / 3600 + T * (20034e-7 / 3600 - T * (576e-9 / 3600 - T * 434e-10 / 3600))));
            return epsilon;
          },
          _sunEquatorialPosition: function(sunEclLng, eclObliq) {
            var alpha = Math.atan(Math.cos(eclObliq * this._D2R) * Math.tan(sunEclLng * this._D2R)) * this._R2D;
            var delta = Math.asin(Math.sin(eclObliq * this._D2R) * Math.sin(sunEclLng * this._D2R)) * this._R2D;
            var lQuadrant = Math.floor(sunEclLng / 90) * 90;
            var raQuadrant = Math.floor(alpha / 90) * 90;
            alpha = alpha + (lQuadrant - raQuadrant);
            return { alpha, delta };
          },
          _hourAngle: function(lng, sunPos, gst) {
            var lst = gst + lng / 15;
            return lst * 15 - sunPos.alpha;
          },
          _latitude: function(ha, sunPos) {
            var lat = Math.atan(-Math.cos(ha * this._D2R) / Math.tan(sunPos.delta * this._D2R)) * this._R2D;
            return lat;
          },
          _compute: function(time) {
            var today = time ? new Date(time) : /* @__PURE__ */ new Date();
            var julianDay = julian(today);
            var gst = GMST(julianDay);
            var latLng = [];
            var sunEclPos = this._sunEclipticPosition(julianDay);
            var eclObliq = this._eclipticObliquity(julianDay);
            var sunEqPos = this._sunEquatorialPosition(sunEclPos.lambda, eclObliq);
            for (var i = 0; i <= this.options.longitudeRange * this.options.resolution; i++) {
              var lng = -this.options.longitudeRange / 2 + i / this.options.resolution;
              var ha = this._hourAngle(lng, sunEqPos, gst);
              latLng[i + 1] = [this._latitude(ha, sunEqPos), lng];
            }
            if (sunEqPos.delta < 0) {
              latLng[0] = [90, -this.options.longitudeRange / 2];
              latLng[latLng.length] = [90, this.options.longitudeRange / 2];
            } else {
              latLng[0] = [-90, -this.options.longitudeRange / 2];
              latLng[latLng.length] = [-90, this.options.longitudeRange / 2];
            }
            return latLng;
          }
        });
        L2.Terminator = Terminator;
        L2.terminator = function(options) {
          return new Terminator(options);
        };
        return Terminator;
      });
    }
  });

  // node_modules/object-hash/dist/object_hash.js
  var require_object_hash = __commonJS({
    "node_modules/object-hash/dist/object_hash.js"(exports, module) {
      !(function(e) {
        var t;
        "object" == typeof exports ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : ("undefined" != typeof window ? t = window : "undefined" != typeof global ? t = global : "undefined" != typeof self && (t = self), t.objectHash = e());
      })(function() {
        return (function r(o, i, u) {
          function s(n, e2) {
            if (!i[n]) {
              if (!o[n]) {
                var t = "function" == typeof __require && __require;
                if (!e2 && t) return t(n, true);
                if (a) return a(n, true);
                throw new Error("Cannot find module '" + n + "'");
              }
              e2 = i[n] = { exports: {} };
              o[n][0].call(e2.exports, function(e3) {
                var t2 = o[n][1][e3];
                return s(t2 || e3);
              }, e2, e2.exports, r, o, i, u);
            }
            return i[n].exports;
          }
          for (var a = "function" == typeof __require && __require, e = 0; e < u.length; e++) s(u[e]);
          return s;
        })({ 1: [function(w, b, m) {
          !function(e, n, s, c, d, h, p, g, y) {
            "use strict";
            var r = w("crypto");
            function t(e2, t2) {
              t2 = u(e2, t2);
              var n2;
              return void 0 === (n2 = "passthrough" !== t2.algorithm ? r.createHash(t2.algorithm) : new l()).write && (n2.write = n2.update, n2.end = n2.update), f(t2, n2).dispatch(e2), n2.update || n2.end(""), n2.digest ? n2.digest("buffer" === t2.encoding ? void 0 : t2.encoding) : (e2 = n2.read(), "buffer" !== t2.encoding ? e2.toString(t2.encoding) : e2);
            }
            (m = b.exports = t).sha1 = function(e2) {
              return t(e2);
            }, m.keys = function(e2) {
              return t(e2, { excludeValues: true, algorithm: "sha1", encoding: "hex" });
            }, m.MD5 = function(e2) {
              return t(e2, { algorithm: "md5", encoding: "hex" });
            }, m.keysMD5 = function(e2) {
              return t(e2, { algorithm: "md5", encoding: "hex", excludeValues: true });
            };
            var o = r.getHashes ? r.getHashes().slice() : ["sha1", "md5"], i = (o.push("passthrough"), ["buffer", "hex", "binary", "base64"]);
            function u(e2, t2) {
              var n2 = {};
              if (n2.algorithm = (t2 = t2 || {}).algorithm || "sha1", n2.encoding = t2.encoding || "hex", n2.excludeValues = !!t2.excludeValues, n2.algorithm = n2.algorithm.toLowerCase(), n2.encoding = n2.encoding.toLowerCase(), n2.ignoreUnknown = true === t2.ignoreUnknown, n2.respectType = false !== t2.respectType, n2.respectFunctionNames = false !== t2.respectFunctionNames, n2.respectFunctionProperties = false !== t2.respectFunctionProperties, n2.unorderedArrays = true === t2.unorderedArrays, n2.unorderedSets = false !== t2.unorderedSets, n2.unorderedObjects = false !== t2.unorderedObjects, n2.replacer = t2.replacer || void 0, n2.excludeKeys = t2.excludeKeys || void 0, void 0 === e2) throw new Error("Object argument required.");
              for (var r2 = 0; r2 < o.length; ++r2) o[r2].toLowerCase() === n2.algorithm.toLowerCase() && (n2.algorithm = o[r2]);
              if (-1 === o.indexOf(n2.algorithm)) throw new Error('Algorithm "' + n2.algorithm + '"  not supported. supported values: ' + o.join(", "));
              if (-1 === i.indexOf(n2.encoding) && "passthrough" !== n2.algorithm) throw new Error('Encoding "' + n2.encoding + '"  not supported. supported values: ' + i.join(", "));
              return n2;
            }
            function a(e2) {
              if ("function" == typeof e2) return null != /^function\s+\w*\s*\(\s*\)\s*{\s+\[native code\]\s+}$/i.exec(Function.prototype.toString.call(e2));
            }
            function f(o2, t2, i2) {
              i2 = i2 || [];
              function u2(e2) {
                return t2.update ? t2.update(e2, "utf8") : t2.write(e2, "utf8");
              }
              return { dispatch: function(e2) {
                return this["_" + (null === (e2 = o2.replacer ? o2.replacer(e2) : e2) ? "null" : typeof e2)](e2);
              }, _object: function(t3) {
                var n2, e2 = Object.prototype.toString.call(t3), r2 = /\[object (.*)\]/i.exec(e2);
                r2 = (r2 = r2 ? r2[1] : "unknown:[" + e2 + "]").toLowerCase();
                if (0 <= (e2 = i2.indexOf(t3))) return this.dispatch("[CIRCULAR:" + e2 + "]");
                if (i2.push(t3), void 0 !== s && s.isBuffer && s.isBuffer(t3)) return u2("buffer:"), u2(t3);
                if ("object" === r2 || "function" === r2 || "asyncfunction" === r2) return e2 = Object.keys(t3), o2.unorderedObjects && (e2 = e2.sort()), false === o2.respectType || a(t3) || e2.splice(0, 0, "prototype", "__proto__", "constructor"), o2.excludeKeys && (e2 = e2.filter(function(e3) {
                  return !o2.excludeKeys(e3);
                })), u2("object:" + e2.length + ":"), n2 = this, e2.forEach(function(e3) {
                  n2.dispatch(e3), u2(":"), o2.excludeValues || n2.dispatch(t3[e3]), u2(",");
                });
                if (!this["_" + r2]) {
                  if (o2.ignoreUnknown) return u2("[" + r2 + "]");
                  throw new Error('Unknown object type "' + r2 + '"');
                }
                this["_" + r2](t3);
              }, _array: function(e2, t3) {
                t3 = void 0 !== t3 ? t3 : false !== o2.unorderedArrays;
                var n2 = this;
                if (u2("array:" + e2.length + ":"), !t3 || e2.length <= 1) return e2.forEach(function(e3) {
                  return n2.dispatch(e3);
                });
                var r2 = [], t3 = e2.map(function(e3) {
                  var t4 = new l(), n3 = i2.slice();
                  return f(o2, t4, n3).dispatch(e3), r2 = r2.concat(n3.slice(i2.length)), t4.read().toString();
                });
                return i2 = i2.concat(r2), t3.sort(), this._array(t3, false);
              }, _date: function(e2) {
                return u2("date:" + e2.toJSON());
              }, _symbol: function(e2) {
                return u2("symbol:" + e2.toString());
              }, _error: function(e2) {
                return u2("error:" + e2.toString());
              }, _boolean: function(e2) {
                return u2("bool:" + e2.toString());
              }, _string: function(e2) {
                u2("string:" + e2.length + ":"), u2(e2.toString());
              }, _function: function(e2) {
                u2("fn:"), a(e2) ? this.dispatch("[native]") : this.dispatch(e2.toString()), false !== o2.respectFunctionNames && this.dispatch("function-name:" + String(e2.name)), o2.respectFunctionProperties && this._object(e2);
              }, _number: function(e2) {
                return u2("number:" + e2.toString());
              }, _xml: function(e2) {
                return u2("xml:" + e2.toString());
              }, _null: function() {
                return u2("Null");
              }, _undefined: function() {
                return u2("Undefined");
              }, _regexp: function(e2) {
                return u2("regex:" + e2.toString());
              }, _uint8array: function(e2) {
                return u2("uint8array:"), this.dispatch(Array.prototype.slice.call(e2));
              }, _uint8clampedarray: function(e2) {
                return u2("uint8clampedarray:"), this.dispatch(Array.prototype.slice.call(e2));
              }, _int8array: function(e2) {
                return u2("int8array:"), this.dispatch(Array.prototype.slice.call(e2));
              }, _uint16array: function(e2) {
                return u2("uint16array:"), this.dispatch(Array.prototype.slice.call(e2));
              }, _int16array: function(e2) {
                return u2("int16array:"), this.dispatch(Array.prototype.slice.call(e2));
              }, _uint32array: function(e2) {
                return u2("uint32array:"), this.dispatch(Array.prototype.slice.call(e2));
              }, _int32array: function(e2) {
                return u2("int32array:"), this.dispatch(Array.prototype.slice.call(e2));
              }, _float32array: function(e2) {
                return u2("float32array:"), this.dispatch(Array.prototype.slice.call(e2));
              }, _float64array: function(e2) {
                return u2("float64array:"), this.dispatch(Array.prototype.slice.call(e2));
              }, _arraybuffer: function(e2) {
                return u2("arraybuffer:"), this.dispatch(new Uint8Array(e2));
              }, _url: function(e2) {
                return u2("url:" + e2.toString());
              }, _map: function(e2) {
                u2("map:");
                e2 = Array.from(e2);
                return this._array(e2, false !== o2.unorderedSets);
              }, _set: function(e2) {
                u2("set:");
                e2 = Array.from(e2);
                return this._array(e2, false !== o2.unorderedSets);
              }, _file: function(e2) {
                return u2("file:"), this.dispatch([e2.name, e2.size, e2.type, e2.lastModfied]);
              }, _blob: function() {
                if (o2.ignoreUnknown) return u2("[blob]");
                throw Error('Hashing Blob objects is currently not supported\n(see https://github.com/puleos/object-hash/issues/26)\nUse "options.replacer" or "options.ignoreUnknown"\n');
              }, _domwindow: function() {
                return u2("domwindow");
              }, _bigint: function(e2) {
                return u2("bigint:" + e2.toString());
              }, _process: function() {
                return u2("process");
              }, _timer: function() {
                return u2("timer");
              }, _pipe: function() {
                return u2("pipe");
              }, _tcp: function() {
                return u2("tcp");
              }, _udp: function() {
                return u2("udp");
              }, _tty: function() {
                return u2("tty");
              }, _statwatcher: function() {
                return u2("statwatcher");
              }, _securecontext: function() {
                return u2("securecontext");
              }, _connection: function() {
                return u2("connection");
              }, _zlib: function() {
                return u2("zlib");
              }, _context: function() {
                return u2("context");
              }, _nodescript: function() {
                return u2("nodescript");
              }, _httpparser: function() {
                return u2("httpparser");
              }, _dataview: function() {
                return u2("dataview");
              }, _signal: function() {
                return u2("signal");
              }, _fsevent: function() {
                return u2("fsevent");
              }, _tlswrap: function() {
                return u2("tlswrap");
              } };
            }
            function l() {
              return { buf: "", write: function(e2) {
                this.buf += e2;
              }, end: function(e2) {
                this.buf += e2;
              }, read: function() {
                return this.buf;
              } };
            }
            m.writeToStream = function(e2, t2, n2) {
              return void 0 === n2 && (n2 = t2, t2 = {}), f(t2 = u(e2, t2), n2).dispatch(e2);
            };
          }.call(this, w("lYpoI2"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, w("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/fake_9a5aa49d.js", "/");
        }, { buffer: 3, crypto: 5, lYpoI2: 11 }], 2: [function(e, t, f) {
          !function(e2, t2, n, r, o, i, u, s, a) {
            !(function(e3) {
              "use strict";
              var a2 = "undefined" != typeof Uint8Array ? Uint8Array : Array, t3 = "+".charCodeAt(0), n2 = "/".charCodeAt(0), r2 = "0".charCodeAt(0), o2 = "a".charCodeAt(0), i2 = "A".charCodeAt(0), u2 = "-".charCodeAt(0), s2 = "_".charCodeAt(0);
              function f2(e4) {
                e4 = e4.charCodeAt(0);
                return e4 === t3 || e4 === u2 ? 62 : e4 === n2 || e4 === s2 ? 63 : e4 < r2 ? -1 : e4 < r2 + 10 ? e4 - r2 + 26 + 26 : e4 < i2 + 26 ? e4 - i2 : e4 < o2 + 26 ? e4 - o2 + 26 : void 0;
              }
              e3.toByteArray = function(e4) {
                var t4, n3;
                if (0 < e4.length % 4) throw new Error("Invalid string. Length must be a multiple of 4");
                var r3 = e4.length, r3 = "=" === e4.charAt(r3 - 2) ? 2 : "=" === e4.charAt(r3 - 1) ? 1 : 0, o3 = new a2(3 * e4.length / 4 - r3), i3 = 0 < r3 ? e4.length - 4 : e4.length, u3 = 0;
                function s3(e5) {
                  o3[u3++] = e5;
                }
                for (t4 = 0; t4 < i3; t4 += 4, 0) s3((16711680 & (n3 = f2(e4.charAt(t4)) << 18 | f2(e4.charAt(t4 + 1)) << 12 | f2(e4.charAt(t4 + 2)) << 6 | f2(e4.charAt(t4 + 3)))) >> 16), s3((65280 & n3) >> 8), s3(255 & n3);
                return 2 == r3 ? s3(255 & (n3 = f2(e4.charAt(t4)) << 2 | f2(e4.charAt(t4 + 1)) >> 4)) : 1 == r3 && (s3((n3 = f2(e4.charAt(t4)) << 10 | f2(e4.charAt(t4 + 1)) << 4 | f2(e4.charAt(t4 + 2)) >> 2) >> 8 & 255), s3(255 & n3)), o3;
              }, e3.fromByteArray = function(e4) {
                var t4, n3, r3, o3, i3 = e4.length % 3, u3 = "";
                function s3(e5) {
                  return "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(e5);
                }
                for (t4 = 0, r3 = e4.length - i3; t4 < r3; t4 += 3) n3 = (e4[t4] << 16) + (e4[t4 + 1] << 8) + e4[t4 + 2], u3 += s3((o3 = n3) >> 18 & 63) + s3(o3 >> 12 & 63) + s3(o3 >> 6 & 63) + s3(63 & o3);
                switch (i3) {
                  case 1:
                    u3 = (u3 += s3((n3 = e4[e4.length - 1]) >> 2)) + s3(n3 << 4 & 63) + "==";
                    break;
                  case 2:
                    u3 = (u3 = (u3 += s3((n3 = (e4[e4.length - 2] << 8) + e4[e4.length - 1]) >> 10)) + s3(n3 >> 4 & 63)) + s3(n3 << 2 & 63) + "=";
                }
                return u3;
              };
            })(void 0 === f ? this.base64js = {} : f);
          }.call(this, e("lYpoI2"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, e("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/base64-js/lib/b64.js", "/node_modules/gulp-browserify/node_modules/base64-js/lib");
        }, { buffer: 3, lYpoI2: 11 }], 3: [function(O, e, H) {
          !function(e2, n, f, r, h, p, g, y, w) {
            var a = O("base64-js"), i = O("ieee754");
            function f(e3, t2, n2) {
              if (!(this instanceof f)) return new f(e3, t2, n2);
              var r2, o2, i2, u2, s2 = typeof e3;
              if ("base64" === t2 && "string" == s2) for (e3 = (u2 = e3).trim ? u2.trim() : u2.replace(/^\s+|\s+$/g, ""); e3.length % 4 != 0; ) e3 += "=";
              if ("number" == s2) r2 = j(e3);
              else if ("string" == s2) r2 = f.byteLength(e3, t2);
              else {
                if ("object" != s2) throw new Error("First argument needs to be a number, array or string.");
                r2 = j(e3.length);
              }
              if (f._useTypedArrays ? o2 = f._augment(new Uint8Array(r2)) : ((o2 = this).length = r2, o2._isBuffer = true), f._useTypedArrays && "number" == typeof e3.byteLength) o2._set(e3);
              else if (C(u2 = e3) || f.isBuffer(u2) || u2 && "object" == typeof u2 && "number" == typeof u2.length) for (i2 = 0; i2 < r2; i2++) f.isBuffer(e3) ? o2[i2] = e3.readUInt8(i2) : o2[i2] = e3[i2];
              else if ("string" == s2) o2.write(e3, 0, t2);
              else if ("number" == s2 && !f._useTypedArrays && !n2) for (i2 = 0; i2 < r2; i2++) o2[i2] = 0;
              return o2;
            }
            function b(e3, t2, n2, r2) {
              return f._charsWritten = c((function(e4) {
                for (var t3 = [], n3 = 0; n3 < e4.length; n3++) t3.push(255 & e4.charCodeAt(n3));
                return t3;
              })(t2), e3, n2, r2);
            }
            function m(e3, t2, n2, r2) {
              return f._charsWritten = c((function(e4) {
                for (var t3, n3, r3 = [], o2 = 0; o2 < e4.length; o2++) n3 = e4.charCodeAt(o2), t3 = n3 >> 8, n3 = n3 % 256, r3.push(n3), r3.push(t3);
                return r3;
              })(t2), e3, n2, r2);
            }
            function v(e3, t2, n2) {
              var r2 = "";
              n2 = Math.min(e3.length, n2);
              for (var o2 = t2; o2 < n2; o2++) r2 += String.fromCharCode(e3[o2]);
              return r2;
            }
            function o(e3, t2, n2, r2) {
              r2 || (d("boolean" == typeof n2, "missing or invalid endian"), d(null != t2, "missing offset"), d(t2 + 1 < e3.length, "Trying to read beyond buffer length"));
              var o2, r2 = e3.length;
              if (!(r2 <= t2)) return n2 ? (o2 = e3[t2], t2 + 1 < r2 && (o2 |= e3[t2 + 1] << 8)) : (o2 = e3[t2] << 8, t2 + 1 < r2 && (o2 |= e3[t2 + 1])), o2;
            }
            function u(e3, t2, n2, r2) {
              r2 || (d("boolean" == typeof n2, "missing or invalid endian"), d(null != t2, "missing offset"), d(t2 + 3 < e3.length, "Trying to read beyond buffer length"));
              var o2, r2 = e3.length;
              if (!(r2 <= t2)) return n2 ? (t2 + 2 < r2 && (o2 = e3[t2 + 2] << 16), t2 + 1 < r2 && (o2 |= e3[t2 + 1] << 8), o2 |= e3[t2], t2 + 3 < r2 && (o2 += e3[t2 + 3] << 24 >>> 0)) : (t2 + 1 < r2 && (o2 = e3[t2 + 1] << 16), t2 + 2 < r2 && (o2 |= e3[t2 + 2] << 8), t2 + 3 < r2 && (o2 |= e3[t2 + 3]), o2 += e3[t2] << 24 >>> 0), o2;
            }
            function _(e3, t2, n2, r2) {
              if (r2 || (d("boolean" == typeof n2, "missing or invalid endian"), d(null != t2, "missing offset"), d(t2 + 1 < e3.length, "Trying to read beyond buffer length")), !(e3.length <= t2)) return r2 = o(e3, t2, n2, true), 32768 & r2 ? -1 * (65535 - r2 + 1) : r2;
            }
            function E(e3, t2, n2, r2) {
              if (r2 || (d("boolean" == typeof n2, "missing or invalid endian"), d(null != t2, "missing offset"), d(t2 + 3 < e3.length, "Trying to read beyond buffer length")), !(e3.length <= t2)) return r2 = u(e3, t2, n2, true), 2147483648 & r2 ? -1 * (4294967295 - r2 + 1) : r2;
            }
            function I(e3, t2, n2, r2) {
              return r2 || (d("boolean" == typeof n2, "missing or invalid endian"), d(t2 + 3 < e3.length, "Trying to read beyond buffer length")), i.read(e3, t2, n2, 23, 4);
            }
            function A(e3, t2, n2, r2) {
              return r2 || (d("boolean" == typeof n2, "missing or invalid endian"), d(t2 + 7 < e3.length, "Trying to read beyond buffer length")), i.read(e3, t2, n2, 52, 8);
            }
            function s(e3, t2, n2, r2, o2) {
              o2 || (d(null != t2, "missing value"), d("boolean" == typeof r2, "missing or invalid endian"), d(null != n2, "missing offset"), d(n2 + 1 < e3.length, "trying to write beyond buffer length"), Y(t2, 65535));
              o2 = e3.length;
              if (!(o2 <= n2)) for (var i2 = 0, u2 = Math.min(o2 - n2, 2); i2 < u2; i2++) e3[n2 + i2] = (t2 & 255 << 8 * (r2 ? i2 : 1 - i2)) >>> 8 * (r2 ? i2 : 1 - i2);
            }
            function l(e3, t2, n2, r2, o2) {
              o2 || (d(null != t2, "missing value"), d("boolean" == typeof r2, "missing or invalid endian"), d(null != n2, "missing offset"), d(n2 + 3 < e3.length, "trying to write beyond buffer length"), Y(t2, 4294967295));
              o2 = e3.length;
              if (!(o2 <= n2)) for (var i2 = 0, u2 = Math.min(o2 - n2, 4); i2 < u2; i2++) e3[n2 + i2] = t2 >>> 8 * (r2 ? i2 : 3 - i2) & 255;
            }
            function B(e3, t2, n2, r2, o2) {
              o2 || (d(null != t2, "missing value"), d("boolean" == typeof r2, "missing or invalid endian"), d(null != n2, "missing offset"), d(n2 + 1 < e3.length, "Trying to write beyond buffer length"), F(t2, 32767, -32768)), e3.length <= n2 || s(e3, 0 <= t2 ? t2 : 65535 + t2 + 1, n2, r2, o2);
            }
            function L2(e3, t2, n2, r2, o2) {
              o2 || (d(null != t2, "missing value"), d("boolean" == typeof r2, "missing or invalid endian"), d(null != n2, "missing offset"), d(n2 + 3 < e3.length, "Trying to write beyond buffer length"), F(t2, 2147483647, -2147483648)), e3.length <= n2 || l(e3, 0 <= t2 ? t2 : 4294967295 + t2 + 1, n2, r2, o2);
            }
            function U(e3, t2, n2, r2, o2) {
              o2 || (d(null != t2, "missing value"), d("boolean" == typeof r2, "missing or invalid endian"), d(null != n2, "missing offset"), d(n2 + 3 < e3.length, "Trying to write beyond buffer length"), D(t2, 34028234663852886e22, -34028234663852886e22)), e3.length <= n2 || i.write(e3, t2, n2, r2, 23, 4);
            }
            function x(e3, t2, n2, r2, o2) {
              o2 || (d(null != t2, "missing value"), d("boolean" == typeof r2, "missing or invalid endian"), d(null != n2, "missing offset"), d(n2 + 7 < e3.length, "Trying to write beyond buffer length"), D(t2, 17976931348623157e292, -17976931348623157e292)), e3.length <= n2 || i.write(e3, t2, n2, r2, 52, 8);
            }
            H.Buffer = f, H.SlowBuffer = f, H.INSPECT_MAX_BYTES = 50, f.poolSize = 8192, f._useTypedArrays = (function() {
              try {
                var e3 = new ArrayBuffer(0), t2 = new Uint8Array(e3);
                return t2.foo = function() {
                  return 42;
                }, 42 === t2.foo() && "function" == typeof t2.subarray;
              } catch (e4) {
                return false;
              }
            })(), f.isEncoding = function(e3) {
              switch (String(e3).toLowerCase()) {
                case "hex":
                case "utf8":
                case "utf-8":
                case "ascii":
                case "binary":
                case "base64":
                case "raw":
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                  return true;
                default:
                  return false;
              }
            }, f.isBuffer = function(e3) {
              return !(null == e3 || !e3._isBuffer);
            }, f.byteLength = function(e3, t2) {
              var n2;
              switch (e3 += "", t2 || "utf8") {
                case "hex":
                  n2 = e3.length / 2;
                  break;
                case "utf8":
                case "utf-8":
                  n2 = T(e3).length;
                  break;
                case "ascii":
                case "binary":
                case "raw":
                  n2 = e3.length;
                  break;
                case "base64":
                  n2 = M(e3).length;
                  break;
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                  n2 = 2 * e3.length;
                  break;
                default:
                  throw new Error("Unknown encoding");
              }
              return n2;
            }, f.concat = function(e3, t2) {
              if (d(C(e3), "Usage: Buffer.concat(list, [totalLength])\nlist should be an Array."), 0 === e3.length) return new f(0);
              if (1 === e3.length) return e3[0];
              if ("number" != typeof t2) for (o2 = t2 = 0; o2 < e3.length; o2++) t2 += e3[o2].length;
              for (var n2 = new f(t2), r2 = 0, o2 = 0; o2 < e3.length; o2++) {
                var i2 = e3[o2];
                i2.copy(n2, r2), r2 += i2.length;
              }
              return n2;
            }, f.prototype.write = function(e3, t2, n2, r2) {
              isFinite(t2) ? isFinite(n2) || (r2 = n2, n2 = void 0) : (a2 = r2, r2 = t2, t2 = n2, n2 = a2), t2 = Number(t2) || 0;
              var o2, i2, u2, s2, a2 = this.length - t2;
              switch ((!n2 || a2 < (n2 = Number(n2))) && (n2 = a2), r2 = String(r2 || "utf8").toLowerCase()) {
                case "hex":
                  o2 = (function(e4, t3, n3, r3) {
                    n3 = Number(n3) || 0;
                    var o3 = e4.length - n3;
                    (!r3 || o3 < (r3 = Number(r3))) && (r3 = o3), d((o3 = t3.length) % 2 == 0, "Invalid hex string"), o3 / 2 < r3 && (r3 = o3 / 2);
                    for (var i3 = 0; i3 < r3; i3++) {
                      var u3 = parseInt(t3.substr(2 * i3, 2), 16);
                      d(!isNaN(u3), "Invalid hex string"), e4[n3 + i3] = u3;
                    }
                    return f._charsWritten = 2 * i3, i3;
                  })(this, e3, t2, n2);
                  break;
                case "utf8":
                case "utf-8":
                  i2 = this, u2 = t2, s2 = n2, o2 = f._charsWritten = c(T(e3), i2, u2, s2);
                  break;
                case "ascii":
                case "binary":
                  o2 = b(this, e3, t2, n2);
                  break;
                case "base64":
                  i2 = this, u2 = t2, s2 = n2, o2 = f._charsWritten = c(M(e3), i2, u2, s2);
                  break;
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                  o2 = m(this, e3, t2, n2);
                  break;
                default:
                  throw new Error("Unknown encoding");
              }
              return o2;
            }, f.prototype.toString = function(e3, t2, n2) {
              var r2, o2, i2, u2, s2 = this;
              if (e3 = String(e3 || "utf8").toLowerCase(), t2 = Number(t2) || 0, (n2 = void 0 !== n2 ? Number(n2) : s2.length) === t2) return "";
              switch (e3) {
                case "hex":
                  r2 = (function(e4, t3, n3) {
                    var r3 = e4.length;
                    (!t3 || t3 < 0) && (t3 = 0);
                    (!n3 || n3 < 0 || r3 < n3) && (n3 = r3);
                    for (var o3 = "", i3 = t3; i3 < n3; i3++) o3 += k(e4[i3]);
                    return o3;
                  })(s2, t2, n2);
                  break;
                case "utf8":
                case "utf-8":
                  r2 = (function(e4, t3, n3) {
                    var r3 = "", o3 = "";
                    n3 = Math.min(e4.length, n3);
                    for (var i3 = t3; i3 < n3; i3++) e4[i3] <= 127 ? (r3 += N(o3) + String.fromCharCode(e4[i3]), o3 = "") : o3 += "%" + e4[i3].toString(16);
                    return r3 + N(o3);
                  })(s2, t2, n2);
                  break;
                case "ascii":
                case "binary":
                  r2 = v(s2, t2, n2);
                  break;
                case "base64":
                  o2 = s2, u2 = n2, r2 = 0 === (i2 = t2) && u2 === o2.length ? a.fromByteArray(o2) : a.fromByteArray(o2.slice(i2, u2));
                  break;
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                  r2 = (function(e4, t3, n3) {
                    for (var r3 = e4.slice(t3, n3), o3 = "", i3 = 0; i3 < r3.length; i3 += 2) o3 += String.fromCharCode(r3[i3] + 256 * r3[i3 + 1]);
                    return o3;
                  })(s2, t2, n2);
                  break;
                default:
                  throw new Error("Unknown encoding");
              }
              return r2;
            }, f.prototype.toJSON = function() {
              return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) };
            }, f.prototype.copy = function(e3, t2, n2, r2) {
              if (t2 = t2 || 0, (r2 = r2 || 0 === r2 ? r2 : this.length) !== (n2 = n2 || 0) && 0 !== e3.length && 0 !== this.length) {
                d(n2 <= r2, "sourceEnd < sourceStart"), d(0 <= t2 && t2 < e3.length, "targetStart out of bounds"), d(0 <= n2 && n2 < this.length, "sourceStart out of bounds"), d(0 <= r2 && r2 <= this.length, "sourceEnd out of bounds"), r2 > this.length && (r2 = this.length);
                var o2 = (r2 = e3.length - t2 < r2 - n2 ? e3.length - t2 + n2 : r2) - n2;
                if (o2 < 100 || !f._useTypedArrays) for (var i2 = 0; i2 < o2; i2++) e3[i2 + t2] = this[i2 + n2];
                else e3._set(this.subarray(n2, n2 + o2), t2);
              }
            }, f.prototype.slice = function(e3, t2) {
              var n2 = this.length;
              if (e3 = S(e3, n2, 0), t2 = S(t2, n2, n2), f._useTypedArrays) return f._augment(this.subarray(e3, t2));
              for (var r2 = t2 - e3, o2 = new f(r2, void 0, true), i2 = 0; i2 < r2; i2++) o2[i2] = this[i2 + e3];
              return o2;
            }, f.prototype.get = function(e3) {
              return console.log(".get() is deprecated. Access using array indexes instead."), this.readUInt8(e3);
            }, f.prototype.set = function(e3, t2) {
              return console.log(".set() is deprecated. Access using array indexes instead."), this.writeUInt8(e3, t2);
            }, f.prototype.readUInt8 = function(e3, t2) {
              if (t2 || (d(null != e3, "missing offset"), d(e3 < this.length, "Trying to read beyond buffer length")), !(e3 >= this.length)) return this[e3];
            }, f.prototype.readUInt16LE = function(e3, t2) {
              return o(this, e3, true, t2);
            }, f.prototype.readUInt16BE = function(e3, t2) {
              return o(this, e3, false, t2);
            }, f.prototype.readUInt32LE = function(e3, t2) {
              return u(this, e3, true, t2);
            }, f.prototype.readUInt32BE = function(e3, t2) {
              return u(this, e3, false, t2);
            }, f.prototype.readInt8 = function(e3, t2) {
              if (t2 || (d(null != e3, "missing offset"), d(e3 < this.length, "Trying to read beyond buffer length")), !(e3 >= this.length)) return 128 & this[e3] ? -1 * (255 - this[e3] + 1) : this[e3];
            }, f.prototype.readInt16LE = function(e3, t2) {
              return _(this, e3, true, t2);
            }, f.prototype.readInt16BE = function(e3, t2) {
              return _(this, e3, false, t2);
            }, f.prototype.readInt32LE = function(e3, t2) {
              return E(this, e3, true, t2);
            }, f.prototype.readInt32BE = function(e3, t2) {
              return E(this, e3, false, t2);
            }, f.prototype.readFloatLE = function(e3, t2) {
              return I(this, e3, true, t2);
            }, f.prototype.readFloatBE = function(e3, t2) {
              return I(this, e3, false, t2);
            }, f.prototype.readDoubleLE = function(e3, t2) {
              return A(this, e3, true, t2);
            }, f.prototype.readDoubleBE = function(e3, t2) {
              return A(this, e3, false, t2);
            }, f.prototype.writeUInt8 = function(e3, t2, n2) {
              n2 || (d(null != e3, "missing value"), d(null != t2, "missing offset"), d(t2 < this.length, "trying to write beyond buffer length"), Y(e3, 255)), t2 >= this.length || (this[t2] = e3);
            }, f.prototype.writeUInt16LE = function(e3, t2, n2) {
              s(this, e3, t2, true, n2);
            }, f.prototype.writeUInt16BE = function(e3, t2, n2) {
              s(this, e3, t2, false, n2);
            }, f.prototype.writeUInt32LE = function(e3, t2, n2) {
              l(this, e3, t2, true, n2);
            }, f.prototype.writeUInt32BE = function(e3, t2, n2) {
              l(this, e3, t2, false, n2);
            }, f.prototype.writeInt8 = function(e3, t2, n2) {
              n2 || (d(null != e3, "missing value"), d(null != t2, "missing offset"), d(t2 < this.length, "Trying to write beyond buffer length"), F(e3, 127, -128)), t2 >= this.length || (0 <= e3 ? this.writeUInt8(e3, t2, n2) : this.writeUInt8(255 + e3 + 1, t2, n2));
            }, f.prototype.writeInt16LE = function(e3, t2, n2) {
              B(this, e3, t2, true, n2);
            }, f.prototype.writeInt16BE = function(e3, t2, n2) {
              B(this, e3, t2, false, n2);
            }, f.prototype.writeInt32LE = function(e3, t2, n2) {
              L2(this, e3, t2, true, n2);
            }, f.prototype.writeInt32BE = function(e3, t2, n2) {
              L2(this, e3, t2, false, n2);
            }, f.prototype.writeFloatLE = function(e3, t2, n2) {
              U(this, e3, t2, true, n2);
            }, f.prototype.writeFloatBE = function(e3, t2, n2) {
              U(this, e3, t2, false, n2);
            }, f.prototype.writeDoubleLE = function(e3, t2, n2) {
              x(this, e3, t2, true, n2);
            }, f.prototype.writeDoubleBE = function(e3, t2, n2) {
              x(this, e3, t2, false, n2);
            }, f.prototype.fill = function(e3, t2, n2) {
              if (t2 = t2 || 0, n2 = n2 || this.length, d("number" == typeof (e3 = "string" == typeof (e3 = e3 || 0) ? e3.charCodeAt(0) : e3) && !isNaN(e3), "value is not a number"), d(t2 <= n2, "end < start"), n2 !== t2 && 0 !== this.length) {
                d(0 <= t2 && t2 < this.length, "start out of bounds"), d(0 <= n2 && n2 <= this.length, "end out of bounds");
                for (var r2 = t2; r2 < n2; r2++) this[r2] = e3;
              }
            }, f.prototype.inspect = function() {
              for (var e3 = [], t2 = this.length, n2 = 0; n2 < t2; n2++) if (e3[n2] = k(this[n2]), n2 === H.INSPECT_MAX_BYTES) {
                e3[n2 + 1] = "...";
                break;
              }
              return "<Buffer " + e3.join(" ") + ">";
            }, f.prototype.toArrayBuffer = function() {
              if ("undefined" == typeof Uint8Array) throw new Error("Buffer.toArrayBuffer not supported in this browser");
              if (f._useTypedArrays) return new f(this).buffer;
              for (var e3 = new Uint8Array(this.length), t2 = 0, n2 = e3.length; t2 < n2; t2 += 1) e3[t2] = this[t2];
              return e3.buffer;
            };
            var t = f.prototype;
            function S(e3, t2, n2) {
              return "number" != typeof e3 ? n2 : t2 <= (e3 = ~~e3) ? t2 : 0 <= e3 || 0 <= (e3 += t2) ? e3 : 0;
            }
            function j(e3) {
              return (e3 = ~~Math.ceil(+e3)) < 0 ? 0 : e3;
            }
            function C(e3) {
              return (Array.isArray || function(e4) {
                return "[object Array]" === Object.prototype.toString.call(e4);
              })(e3);
            }
            function k(e3) {
              return e3 < 16 ? "0" + e3.toString(16) : e3.toString(16);
            }
            function T(e3) {
              for (var t2 = [], n2 = 0; n2 < e3.length; n2++) {
                var r2 = e3.charCodeAt(n2);
                if (r2 <= 127) t2.push(e3.charCodeAt(n2));
                else for (var o2 = n2, i2 = (55296 <= r2 && r2 <= 57343 && n2++, encodeURIComponent(e3.slice(o2, n2 + 1)).substr(1).split("%")), u2 = 0; u2 < i2.length; u2++) t2.push(parseInt(i2[u2], 16));
              }
              return t2;
            }
            function M(e3) {
              return a.toByteArray(e3);
            }
            function c(e3, t2, n2, r2) {
              for (var o2 = 0; o2 < r2 && !(o2 + n2 >= t2.length || o2 >= e3.length); o2++) t2[o2 + n2] = e3[o2];
              return o2;
            }
            function N(e3) {
              try {
                return decodeURIComponent(e3);
              } catch (e4) {
                return String.fromCharCode(65533);
              }
            }
            function Y(e3, t2) {
              d("number" == typeof e3, "cannot write a non-number as a number"), d(0 <= e3, "specified a negative value for writing an unsigned value"), d(e3 <= t2, "value is larger than maximum value for type"), d(Math.floor(e3) === e3, "value has a fractional component");
            }
            function F(e3, t2, n2) {
              d("number" == typeof e3, "cannot write a non-number as a number"), d(e3 <= t2, "value larger than maximum allowed value"), d(n2 <= e3, "value smaller than minimum allowed value"), d(Math.floor(e3) === e3, "value has a fractional component");
            }
            function D(e3, t2, n2) {
              d("number" == typeof e3, "cannot write a non-number as a number"), d(e3 <= t2, "value larger than maximum allowed value"), d(n2 <= e3, "value smaller than minimum allowed value");
            }
            function d(e3, t2) {
              if (!e3) throw new Error(t2 || "Failed assertion");
            }
            f._augment = function(e3) {
              return e3._isBuffer = true, e3._get = e3.get, e3._set = e3.set, e3.get = t.get, e3.set = t.set, e3.write = t.write, e3.toString = t.toString, e3.toLocaleString = t.toString, e3.toJSON = t.toJSON, e3.copy = t.copy, e3.slice = t.slice, e3.readUInt8 = t.readUInt8, e3.readUInt16LE = t.readUInt16LE, e3.readUInt16BE = t.readUInt16BE, e3.readUInt32LE = t.readUInt32LE, e3.readUInt32BE = t.readUInt32BE, e3.readInt8 = t.readInt8, e3.readInt16LE = t.readInt16LE, e3.readInt16BE = t.readInt16BE, e3.readInt32LE = t.readInt32LE, e3.readInt32BE = t.readInt32BE, e3.readFloatLE = t.readFloatLE, e3.readFloatBE = t.readFloatBE, e3.readDoubleLE = t.readDoubleLE, e3.readDoubleBE = t.readDoubleBE, e3.writeUInt8 = t.writeUInt8, e3.writeUInt16LE = t.writeUInt16LE, e3.writeUInt16BE = t.writeUInt16BE, e3.writeUInt32LE = t.writeUInt32LE, e3.writeUInt32BE = t.writeUInt32BE, e3.writeInt8 = t.writeInt8, e3.writeInt16LE = t.writeInt16LE, e3.writeInt16BE = t.writeInt16BE, e3.writeInt32LE = t.writeInt32LE, e3.writeInt32BE = t.writeInt32BE, e3.writeFloatLE = t.writeFloatLE, e3.writeFloatBE = t.writeFloatBE, e3.writeDoubleLE = t.writeDoubleLE, e3.writeDoubleBE = t.writeDoubleBE, e3.fill = t.fill, e3.inspect = t.inspect, e3.toArrayBuffer = t.toArrayBuffer, e3;
            };
          }.call(this, O("lYpoI2"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, O("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/buffer/index.js", "/node_modules/gulp-browserify/node_modules/buffer");
        }, { "base64-js": 2, buffer: 3, ieee754: 10, lYpoI2: 11 }], 4: [function(c, d, e) {
          !function(e2, t, a, n, r, o, i, u, s) {
            var a = c("buffer").Buffer, f = 4, l = new a(f);
            l.fill(0);
            d.exports = { hash: function(e3, t2, n2, r2) {
              for (var o2 = t2((function(e4, t3) {
                e4.length % f != 0 && (n3 = e4.length + (f - e4.length % f), e4 = a.concat([e4, l], n3));
                for (var n3, r3 = [], o3 = t3 ? e4.readInt32BE : e4.readInt32LE, i3 = 0; i3 < e4.length; i3 += f) r3.push(o3.call(e4, i3));
                return r3;
              })(e3 = a.isBuffer(e3) ? e3 : new a(e3), r2), 8 * e3.length), t2 = r2, i2 = new a(n2), u2 = t2 ? i2.writeInt32BE : i2.writeInt32LE, s2 = 0; s2 < o2.length; s2++) u2.call(i2, o2[s2], 4 * s2, true);
              return i2;
            } };
          }.call(this, c("lYpoI2"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, c("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/crypto-browserify/helpers.js", "/node_modules/gulp-browserify/node_modules/crypto-browserify");
        }, { buffer: 3, lYpoI2: 11 }], 5: [function(v, e, _) {
          !function(l, c, u, d, h, p, g, y, w) {
            var u = v("buffer").Buffer, e2 = v("./sha"), t = v("./sha256"), n = v("./rng"), b = { sha1: e2, sha256: t, md5: v("./md5") }, s = 64, a = new u(s);
            function r(e3, n2) {
              var r2 = b[e3 = e3 || "sha1"], o2 = [];
              return r2 || i("algorithm:", e3, "is not yet supported"), { update: function(e4) {
                return u.isBuffer(e4) || (e4 = new u(e4)), o2.push(e4), e4.length, this;
              }, digest: function(e4) {
                var t2 = u.concat(o2), t2 = n2 ? (function(e5, t3, n3) {
                  u.isBuffer(t3) || (t3 = new u(t3)), u.isBuffer(n3) || (n3 = new u(n3)), t3.length > s ? t3 = e5(t3) : t3.length < s && (t3 = u.concat([t3, a], s));
                  for (var r3 = new u(s), o3 = new u(s), i2 = 0; i2 < s; i2++) r3[i2] = 54 ^ t3[i2], o3[i2] = 92 ^ t3[i2];
                  return n3 = e5(u.concat([r3, n3])), e5(u.concat([o3, n3]));
                })(r2, n2, t2) : r2(t2);
                return o2 = null, e4 ? t2.toString(e4) : t2;
              } };
            }
            function i() {
              var e3 = [].slice.call(arguments).join(" ");
              throw new Error([e3, "we accept pull requests", "http://github.com/dominictarr/crypto-browserify"].join("\n"));
            }
            a.fill(0), _.createHash = function(e3) {
              return r(e3);
            }, _.createHmac = r, _.randomBytes = function(e3, t2) {
              if (!t2 || !t2.call) return new u(n(e3));
              try {
                t2.call(this, void 0, new u(n(e3)));
              } catch (e4) {
                t2(e4);
              }
            };
            var o, f = ["createCredentials", "createCipher", "createCipheriv", "createDecipher", "createDecipheriv", "createSign", "createVerify", "createDiffieHellman", "pbkdf2"], m = function(e3) {
              _[e3] = function() {
                i("sorry,", e3, "is not implemented yet");
              };
            };
            for (o in f) m(f[o], o);
          }.call(this, v("lYpoI2"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, v("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/crypto-browserify/index.js", "/node_modules/gulp-browserify/node_modules/crypto-browserify");
        }, { "./md5": 6, "./rng": 7, "./sha": 8, "./sha256": 9, buffer: 3, lYpoI2: 11 }], 6: [function(w, b, e) {
          !function(e2, r, o, i, u, a, f, l, y) {
            var t = w("./helpers");
            function n(e3, t2) {
              e3[t2 >> 5] |= 128 << t2 % 32, e3[14 + (t2 + 64 >>> 9 << 4)] = t2;
              for (var n2 = 1732584193, r2 = -271733879, o2 = -1732584194, i2 = 271733878, u2 = 0; u2 < e3.length; u2 += 16) {
                var s2 = n2, a2 = r2, f2 = o2, l2 = i2, n2 = c(n2, r2, o2, i2, e3[u2 + 0], 7, -680876936), i2 = c(i2, n2, r2, o2, e3[u2 + 1], 12, -389564586), o2 = c(o2, i2, n2, r2, e3[u2 + 2], 17, 606105819), r2 = c(r2, o2, i2, n2, e3[u2 + 3], 22, -1044525330);
                n2 = c(n2, r2, o2, i2, e3[u2 + 4], 7, -176418897), i2 = c(i2, n2, r2, o2, e3[u2 + 5], 12, 1200080426), o2 = c(o2, i2, n2, r2, e3[u2 + 6], 17, -1473231341), r2 = c(r2, o2, i2, n2, e3[u2 + 7], 22, -45705983), n2 = c(n2, r2, o2, i2, e3[u2 + 8], 7, 1770035416), i2 = c(i2, n2, r2, o2, e3[u2 + 9], 12, -1958414417), o2 = c(o2, i2, n2, r2, e3[u2 + 10], 17, -42063), r2 = c(r2, o2, i2, n2, e3[u2 + 11], 22, -1990404162), n2 = c(n2, r2, o2, i2, e3[u2 + 12], 7, 1804603682), i2 = c(i2, n2, r2, o2, e3[u2 + 13], 12, -40341101), o2 = c(o2, i2, n2, r2, e3[u2 + 14], 17, -1502002290), n2 = d(n2, r2 = c(r2, o2, i2, n2, e3[u2 + 15], 22, 1236535329), o2, i2, e3[u2 + 1], 5, -165796510), i2 = d(i2, n2, r2, o2, e3[u2 + 6], 9, -1069501632), o2 = d(o2, i2, n2, r2, e3[u2 + 11], 14, 643717713), r2 = d(r2, o2, i2, n2, e3[u2 + 0], 20, -373897302), n2 = d(n2, r2, o2, i2, e3[u2 + 5], 5, -701558691), i2 = d(i2, n2, r2, o2, e3[u2 + 10], 9, 38016083), o2 = d(o2, i2, n2, r2, e3[u2 + 15], 14, -660478335), r2 = d(r2, o2, i2, n2, e3[u2 + 4], 20, -405537848), n2 = d(n2, r2, o2, i2, e3[u2 + 9], 5, 568446438), i2 = d(i2, n2, r2, o2, e3[u2 + 14], 9, -1019803690), o2 = d(o2, i2, n2, r2, e3[u2 + 3], 14, -187363961), r2 = d(r2, o2, i2, n2, e3[u2 + 8], 20, 1163531501), n2 = d(n2, r2, o2, i2, e3[u2 + 13], 5, -1444681467), i2 = d(i2, n2, r2, o2, e3[u2 + 2], 9, -51403784), o2 = d(o2, i2, n2, r2, e3[u2 + 7], 14, 1735328473), n2 = h(n2, r2 = d(r2, o2, i2, n2, e3[u2 + 12], 20, -1926607734), o2, i2, e3[u2 + 5], 4, -378558), i2 = h(i2, n2, r2, o2, e3[u2 + 8], 11, -2022574463), o2 = h(o2, i2, n2, r2, e3[u2 + 11], 16, 1839030562), r2 = h(r2, o2, i2, n2, e3[u2 + 14], 23, -35309556), n2 = h(n2, r2, o2, i2, e3[u2 + 1], 4, -1530992060), i2 = h(i2, n2, r2, o2, e3[u2 + 4], 11, 1272893353), o2 = h(o2, i2, n2, r2, e3[u2 + 7], 16, -155497632), r2 = h(r2, o2, i2, n2, e3[u2 + 10], 23, -1094730640), n2 = h(n2, r2, o2, i2, e3[u2 + 13], 4, 681279174), i2 = h(i2, n2, r2, o2, e3[u2 + 0], 11, -358537222), o2 = h(o2, i2, n2, r2, e3[u2 + 3], 16, -722521979), r2 = h(r2, o2, i2, n2, e3[u2 + 6], 23, 76029189), n2 = h(n2, r2, o2, i2, e3[u2 + 9], 4, -640364487), i2 = h(i2, n2, r2, o2, e3[u2 + 12], 11, -421815835), o2 = h(o2, i2, n2, r2, e3[u2 + 15], 16, 530742520), n2 = p(n2, r2 = h(r2, o2, i2, n2, e3[u2 + 2], 23, -995338651), o2, i2, e3[u2 + 0], 6, -198630844), i2 = p(i2, n2, r2, o2, e3[u2 + 7], 10, 1126891415), o2 = p(o2, i2, n2, r2, e3[u2 + 14], 15, -1416354905), r2 = p(r2, o2, i2, n2, e3[u2 + 5], 21, -57434055), n2 = p(n2, r2, o2, i2, e3[u2 + 12], 6, 1700485571), i2 = p(i2, n2, r2, o2, e3[u2 + 3], 10, -1894986606), o2 = p(o2, i2, n2, r2, e3[u2 + 10], 15, -1051523), r2 = p(r2, o2, i2, n2, e3[u2 + 1], 21, -2054922799), n2 = p(n2, r2, o2, i2, e3[u2 + 8], 6, 1873313359), i2 = p(i2, n2, r2, o2, e3[u2 + 15], 10, -30611744), o2 = p(o2, i2, n2, r2, e3[u2 + 6], 15, -1560198380), r2 = p(r2, o2, i2, n2, e3[u2 + 13], 21, 1309151649), n2 = p(n2, r2, o2, i2, e3[u2 + 4], 6, -145523070), i2 = p(i2, n2, r2, o2, e3[u2 + 11], 10, -1120210379), o2 = p(o2, i2, n2, r2, e3[u2 + 2], 15, 718787259), r2 = p(r2, o2, i2, n2, e3[u2 + 9], 21, -343485551), n2 = g(n2, s2), r2 = g(r2, a2), o2 = g(o2, f2), i2 = g(i2, l2);
              }
              return Array(n2, r2, o2, i2);
            }
            function s(e3, t2, n2, r2, o2, i2) {
              return g((t2 = g(g(t2, e3), g(r2, i2))) << o2 | t2 >>> 32 - o2, n2);
            }
            function c(e3, t2, n2, r2, o2, i2, u2) {
              return s(t2 & n2 | ~t2 & r2, e3, t2, o2, i2, u2);
            }
            function d(e3, t2, n2, r2, o2, i2, u2) {
              return s(t2 & r2 | n2 & ~r2, e3, t2, o2, i2, u2);
            }
            function h(e3, t2, n2, r2, o2, i2, u2) {
              return s(t2 ^ n2 ^ r2, e3, t2, o2, i2, u2);
            }
            function p(e3, t2, n2, r2, o2, i2, u2) {
              return s(n2 ^ (t2 | ~r2), e3, t2, o2, i2, u2);
            }
            function g(e3, t2) {
              var n2 = (65535 & e3) + (65535 & t2);
              return (e3 >> 16) + (t2 >> 16) + (n2 >> 16) << 16 | 65535 & n2;
            }
            b.exports = function(e3) {
              return t.hash(e3, n, 16);
            };
          }.call(this, w("lYpoI2"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, w("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/crypto-browserify/md5.js", "/node_modules/gulp-browserify/node_modules/crypto-browserify");
        }, { "./helpers": 4, buffer: 3, lYpoI2: 11 }], 7: [function(e, l, t) {
          !function(e2, t2, n, r, o, i, u, s, f) {
            var a;
            l.exports = a || function(e3) {
              for (var t3, n2 = new Array(e3), r2 = 0; r2 < e3; r2++) 0 == (3 & r2) && (t3 = 4294967296 * Math.random()), n2[r2] = t3 >>> ((3 & r2) << 3) & 255;
              return n2;
            };
          }.call(this, e("lYpoI2"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, e("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/crypto-browserify/rng.js", "/node_modules/gulp-browserify/node_modules/crypto-browserify");
        }, { buffer: 3, lYpoI2: 11 }], 8: [function(c, d, e) {
          !function(e2, t, n, r, o, s, a, f, l) {
            var i = c("./helpers");
            function u(l2, c2) {
              l2[c2 >> 5] |= 128 << 24 - c2 % 32, l2[15 + (c2 + 64 >> 9 << 4)] = c2;
              for (var e3, t2, n2, r2 = Array(80), o2 = 1732584193, i2 = -271733879, u2 = -1732584194, s2 = 271733878, d2 = -1009589776, h = 0; h < l2.length; h += 16) {
                for (var p = o2, g = i2, y = u2, w = s2, b = d2, a2 = 0; a2 < 80; a2++) {
                  r2[a2] = a2 < 16 ? l2[h + a2] : v(r2[a2 - 3] ^ r2[a2 - 8] ^ r2[a2 - 14] ^ r2[a2 - 16], 1);
                  var f2 = m(m(v(o2, 5), (f2 = i2, t2 = u2, n2 = s2, (e3 = a2) < 20 ? f2 & t2 | ~f2 & n2 : !(e3 < 40) && e3 < 60 ? f2 & t2 | f2 & n2 | t2 & n2 : f2 ^ t2 ^ n2)), m(m(d2, r2[a2]), (e3 = a2) < 20 ? 1518500249 : e3 < 40 ? 1859775393 : e3 < 60 ? -1894007588 : -899497514)), d2 = s2, s2 = u2, u2 = v(i2, 30), i2 = o2, o2 = f2;
                }
                o2 = m(o2, p), i2 = m(i2, g), u2 = m(u2, y), s2 = m(s2, w), d2 = m(d2, b);
              }
              return Array(o2, i2, u2, s2, d2);
            }
            function m(e3, t2) {
              var n2 = (65535 & e3) + (65535 & t2);
              return (e3 >> 16) + (t2 >> 16) + (n2 >> 16) << 16 | 65535 & n2;
            }
            function v(e3, t2) {
              return e3 << t2 | e3 >>> 32 - t2;
            }
            d.exports = function(e3) {
              return i.hash(e3, u, 20, true);
            };
          }.call(this, c("lYpoI2"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, c("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/crypto-browserify/sha.js", "/node_modules/gulp-browserify/node_modules/crypto-browserify");
        }, { "./helpers": 4, buffer: 3, lYpoI2: 11 }], 9: [function(c, d, e) {
          !function(e2, t, n, r, u, s, a, f, l) {
            function b(e3, t2) {
              var n2 = (65535 & e3) + (65535 & t2);
              return (e3 >> 16) + (t2 >> 16) + (n2 >> 16) << 16 | 65535 & n2;
            }
            function o(e3, l2) {
              var c2, d2 = new Array(1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298), t2 = new Array(1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225), n2 = new Array(64);
              e3[l2 >> 5] |= 128 << 24 - l2 % 32, e3[15 + (l2 + 64 >> 9 << 4)] = l2;
              for (var r2, o2, h = 0; h < e3.length; h += 16) {
                for (var i2 = t2[0], u2 = t2[1], s2 = t2[2], p = t2[3], a2 = t2[4], g = t2[5], y = t2[6], w = t2[7], f2 = 0; f2 < 64; f2++) n2[f2] = f2 < 16 ? e3[f2 + h] : b(b(b((o2 = n2[f2 - 2], m(o2, 17) ^ m(o2, 19) ^ v(o2, 10)), n2[f2 - 7]), (o2 = n2[f2 - 15], m(o2, 7) ^ m(o2, 18) ^ v(o2, 3))), n2[f2 - 16]), c2 = b(b(b(b(w, m(o2 = a2, 6) ^ m(o2, 11) ^ m(o2, 25)), a2 & g ^ ~a2 & y), d2[f2]), n2[f2]), r2 = b(m(r2 = i2, 2) ^ m(r2, 13) ^ m(r2, 22), i2 & u2 ^ i2 & s2 ^ u2 & s2), w = y, y = g, g = a2, a2 = b(p, c2), p = s2, s2 = u2, u2 = i2, i2 = b(c2, r2);
                t2[0] = b(i2, t2[0]), t2[1] = b(u2, t2[1]), t2[2] = b(s2, t2[2]), t2[3] = b(p, t2[3]), t2[4] = b(a2, t2[4]), t2[5] = b(g, t2[5]), t2[6] = b(y, t2[6]), t2[7] = b(w, t2[7]);
              }
              return t2;
            }
            var i = c("./helpers"), m = function(e3, t2) {
              return e3 >>> t2 | e3 << 32 - t2;
            }, v = function(e3, t2) {
              return e3 >>> t2;
            };
            d.exports = function(e3) {
              return i.hash(e3, o, 32, true);
            };
          }.call(this, c("lYpoI2"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, c("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/crypto-browserify/sha256.js", "/node_modules/gulp-browserify/node_modules/crypto-browserify");
        }, { "./helpers": 4, buffer: 3, lYpoI2: 11 }], 10: [function(e, t, f) {
          !function(e2, t2, n, r, o, i, u, s, a) {
            f.read = function(e3, t3, n2, r2, o2) {
              var i2, u2, l = 8 * o2 - r2 - 1, c = (1 << l) - 1, d = c >> 1, s2 = -7, a2 = n2 ? o2 - 1 : 0, f2 = n2 ? -1 : 1, o2 = e3[t3 + a2];
              for (a2 += f2, i2 = o2 & (1 << -s2) - 1, o2 >>= -s2, s2 += l; 0 < s2; i2 = 256 * i2 + e3[t3 + a2], a2 += f2, s2 -= 8) ;
              for (u2 = i2 & (1 << -s2) - 1, i2 >>= -s2, s2 += r2; 0 < s2; u2 = 256 * u2 + e3[t3 + a2], a2 += f2, s2 -= 8) ;
              if (0 === i2) i2 = 1 - d;
              else {
                if (i2 === c) return u2 ? NaN : 1 / 0 * (o2 ? -1 : 1);
                u2 += Math.pow(2, r2), i2 -= d;
              }
              return (o2 ? -1 : 1) * u2 * Math.pow(2, i2 - r2);
            }, f.write = function(e3, t3, l, n2, r2, c) {
              var o2, i2, u2 = 8 * c - r2 - 1, s2 = (1 << u2) - 1, a2 = s2 >> 1, d = 23 === r2 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, f2 = n2 ? 0 : c - 1, h = n2 ? 1 : -1, c = t3 < 0 || 0 === t3 && 1 / t3 < 0 ? 1 : 0;
              for (t3 = Math.abs(t3), isNaN(t3) || t3 === 1 / 0 ? (i2 = isNaN(t3) ? 1 : 0, o2 = s2) : (o2 = Math.floor(Math.log(t3) / Math.LN2), t3 * (n2 = Math.pow(2, -o2)) < 1 && (o2--, n2 *= 2), 2 <= (t3 += 1 <= o2 + a2 ? d / n2 : d * Math.pow(2, 1 - a2)) * n2 && (o2++, n2 /= 2), s2 <= o2 + a2 ? (i2 = 0, o2 = s2) : 1 <= o2 + a2 ? (i2 = (t3 * n2 - 1) * Math.pow(2, r2), o2 += a2) : (i2 = t3 * Math.pow(2, a2 - 1) * Math.pow(2, r2), o2 = 0)); 8 <= r2; e3[l + f2] = 255 & i2, f2 += h, i2 /= 256, r2 -= 8) ;
              for (o2 = o2 << r2 | i2, u2 += r2; 0 < u2; e3[l + f2] = 255 & o2, f2 += h, o2 /= 256, u2 -= 8) ;
              e3[l + f2 - h] |= 128 * c;
            };
          }.call(this, e("lYpoI2"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, e("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/ieee754/index.js", "/node_modules/gulp-browserify/node_modules/ieee754");
        }, { buffer: 3, lYpoI2: 11 }], 11: [function(e, h, t) {
          !function(e2, t2, n, r, o, f, l, c, d) {
            var i, u, s;
            function a() {
            }
            (e2 = h.exports = {}).nextTick = (u = "undefined" != typeof window && window.setImmediate, s = "undefined" != typeof window && window.postMessage && window.addEventListener, u ? function(e3) {
              return window.setImmediate(e3);
            } : s ? (i = [], window.addEventListener("message", function(e3) {
              var t3 = e3.source;
              t3 !== window && null !== t3 || "process-tick" !== e3.data || (e3.stopPropagation(), 0 < i.length && i.shift()());
            }, true), function(e3) {
              i.push(e3), window.postMessage("process-tick", "*");
            }) : function(e3) {
              setTimeout(e3, 0);
            }), e2.title = "browser", e2.browser = true, e2.env = {}, e2.argv = [], e2.on = a, e2.addListener = a, e2.once = a, e2.off = a, e2.removeListener = a, e2.removeAllListeners = a, e2.emit = a, e2.binding = function(e3) {
              throw new Error("process.binding is not supported");
            }, e2.cwd = function() {
              return "/";
            }, e2.chdir = function(e3) {
              throw new Error("process.chdir is not supported");
            };
          }.call(this, e("lYpoI2"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, e("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/process/browser.js", "/node_modules/gulp-browserify/node_modules/process");
        }, { buffer: 3, lYpoI2: 11 }] }, {}, [1])(1);
      });
    }
  });

  // mapwidgets/i18n/translations.json
  var require_translations = __commonJS({
    "mapwidgets/i18n/translations.json"(exports, module) {
      module.exports = {
        mapwidgets_oid: {
          en: "Datapoint",
          de: "Datapoint",
          ru: "Datapoint",
          pt: "Ponto de dados",
          nl: "Datapunt",
          fr: "Point de donn\xE9es",
          it: "Punto dati",
          es: "Datapoint",
          pl: "Datapoint",
          uk: "\u0422\u043E\u0447\u043A\u0430 \u0434\u0430\u043D\u0438\u0445",
          "zh-cn": "Datapoint"
        },
        mapwidgets_lat: {
          en: "Map lat",
          de: "Karte lat",
          ru: "\u041A\u0430\u0440\u0442\u0430 \u043B\u0430\u0442",
          pt: "Mapa lat",
          nl: "Latte kaart",
          fr: "Carte lat",
          it: "Mappa lat",
          es: "Mapa",
          pl: "Mapa lat",
          uk: "\u041C\u0430\u043F\u0430 \u0448\u0438\u0440\u043E\u0442\u0430",
          "zh-cn": "Map lat"
        },
        mapwidgets_lon: {
          en: "Map lon",
          de: "Karte einsam",
          ru: "\u041A\u0430\u0440\u0442\u0430 \u041B\u043E\u043D",
          pt: "Mapa solit\xE1rio",
          nl: "Kaart een",
          fr: "Carte lon",
          it: "Mappa lon",
          es: "Mapa lon",
          pl: "Mapa lon",
          uk: "Map lon",
          "zh-cn": "Map lon"
        },
        mapwidgets_zoom: {
          en: "Map Zoom",
          de: "Karte vergr\xF6\xDFern",
          ru: "\u041C\u0430\u0441\u0448\u0442\u0430\u0431 \u043A\u0430\u0440\u0442\u044B",
          pt: "Zoom do mapa",
          nl: "Kaart Zoom",
          fr: "Zoom sur la carte",
          it: "Zoom sulla mappa",
          es: "Mapa Zoom",
          pl: "Powi\u0119kszenie mapy",
          uk: "\u041C\u0430\u0441\u0448\u0442\u0430\u0431 \u043A\u0430\u0440\u0442\u0438",
          "zh-cn": "Map Zoom"
        },
        mapwidgets_expose: {
          en: "Map Expose",
          de: "Karten-Expose",
          ru: "\u0420\u0430\u0441\u043A\u0440\u044B\u0442\u0438\u0435 \u043A\u0430\u0440\u0442\u044B",
          pt: "Exposi\xE7\xE3o de mapas",
          nl: "Kaart weergeven",
          fr: "Exposition de cartes",
          it: "Esporre la mappa",
          es: "Exposici\xF3n de mapas",
          pl: "Ekspozycja mapy",
          uk: "\u0412\u0438\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u043D\u044F \u043A\u0430\u0440\u0442\u0438",
          "zh-cn": "Map Expose"
        },
        group_mapwidgets_daynight: {
          en: "Map Day/Night",
          de: "Karte Tag/Nacht",
          ru: "\u041A\u0430\u0440\u0442\u0430 \u0414\u0435\u043D\u044C/\u041D\u043E\u0447\u044C",
          pt: "Mapa Dia/Noite",
          nl: "Kaart Dag/Nacht",
          fr: "Carte Jour/Nuit",
          it: "Mappa Giorno/Notte",
          es: "Mapa D\xEDa/Noche",
          pl: "Mapa Dzie\u0144/Noc",
          uk: "\u041A\u0430\u0440\u0442\u0430 \u0414\u0435\u043D\u044C/\u041D\u0456\u0447",
          "zh-cn": "Map Day/Night"
        },
        mapwidgets_daynightenabled: {
          en: "Day/Night Enabled",
          de: "Tag/Nacht Aktiviert",
          ru: "\u0414\u0435\u043D\u044C/\u043D\u043E\u0447\u044C \u0412\u043A\u043B\u044E\u0447\u0435\u043D\u043E",
          pt: "Dia/Noite ativado",
          nl: "Dag/Nacht Ingeschakeld",
          fr: "Jour/Nuit Activ\xE9",
          it: "Giorno/Notte abilitato",
          es: "D\xEDa/Noche Activado",
          pl: "W\u0142\u0105czony tryb dzie\u0144/noc",
          uk: "\u0414\u0435\u043D\u044C/\u043D\u0456\u0447 \u0412\u043A\u043B\u044E\u0447\u0435\u043D\u043E",
          "zh-cn": "Day/Night Enabled"
        },
        mapwidgets_daynightcolor: {
          en: "Day/Night Color",
          de: "Tag-/Nachtfarbe",
          ru: "\u0426\u0432\u0435\u0442 \u0434\u0435\u043D\u044C/\u043D\u043E\u0447\u044C",
          pt: "Cor dia/noite",
          nl: "Kleur dag/nacht",
          fr: "Couleur jour/nuit",
          it: "Colore giorno/notte",
          es: "Color d\xEDa/noche",
          pl: "Kolor dzie\u0144/noc",
          uk: "\u041A\u043E\u043B\u0456\u0440 \u0434\u0435\u043D\u044C/\u043D\u043E\u0447\u0456",
          "zh-cn": "\u65E5/\u591C\u989C\u8272"
        },
        mapwidgets_daynightopacity: {
          en: "Day/Night Opacity",
          de: "Tag/Nacht-Opazit\xE4t",
          ru: "\u041D\u0435\u043F\u0440\u043E\u0437\u0440\u0430\u0447\u043D\u043E\u0441\u0442\u044C \u0434\u0435\u043D\u044C/\u043D\u043E\u0447\u044C",
          pt: "Opacidade dia/noite",
          nl: "Dag/nacht ondoorzichtigheid",
          fr: "Opacit\xE9 jour/nuit",
          it: "Opacit\xE0 giorno/notte",
          es: "Opacidad d\xEDa/noche",
          pl: "Krycie dzie\u0144/noc",
          uk: "\u041D\u0435\u043F\u0440\u043E\u0437\u043E\u0440\u0456\u0441\u0442\u044C \u0432\u0434\u0435\u043D\u044C/\u0432\u043D\u043E\u0447\u0456",
          "zh-cn": "Day/Night Opacity"
        },
        mapwidgets_daynightfillcolor: {
          en: "Day/Night Fill Color",
          de: "Tag/Nacht-F\xFCllfarbe",
          ru: "\u0426\u0432\u0435\u0442 \u0437\u0430\u043B\u0438\u0432\u043A\u0438 \u0434\u0435\u043D\u044C/\u043D\u043E\u0447\u044C",
          pt: "Cor de preenchimento dia/noite",
          nl: "Dag/Nacht Vulkleur",
          fr: "Couleur de remplissage jour/nuit",
          it: "Colore di riempimento giorno/notte",
          es: "Color de relleno d\xEDa/noche",
          pl: "Kolor wype\u0142nienia dzie\u0144/noc",
          uk: "\u041A\u043E\u043B\u0456\u0440 \u0437\u0430\u043B\u0438\u0432\u043A\u0438 \u0414\u0435\u043D\u044C/\u041D\u0456\u0447",
          "zh-cn": "Day/Night Fill Color"
        },
        mapwidgets_daynightfillopacity: {
          en: "Day/Night Fill Opacity",
          de: "Tag/Nacht-F\xFCllung Deckkraft",
          ru: "\u041D\u0435\u043F\u0440\u043E\u0437\u0440\u0430\u0447\u043D\u043E\u0441\u0442\u044C \u0437\u0430\u043B\u0438\u0432\u043A\u0438 \u0434\u0435\u043D\u044C/\u043D\u043E\u0447\u044C",
          pt: "Opacidade de preenchimento dia/noite",
          nl: "Opaciteit dag/nachtvulling",
          fr: "Opacit\xE9 de remplissage jour/nuit",
          it: "Opacit\xE0 del riempimento giorno/notte",
          es: "Opacidad de relleno d\xEDa/noche",
          pl: "Krycie wype\u0142nienia dzie\u0144/noc",
          uk: "\u041D\u0435\u043F\u0440\u043E\u0437\u043E\u0440\u0456\u0441\u0442\u044C \u0437\u0430\u043F\u043E\u0432\u043D\u0435\u043D\u043D\u044F \u0434\u0435\u043D\u044C/\u043D\u0456\u0447",
          "zh-cn": "Day/Night Fill Opacity"
        },
        yyy: {
          en: "yyy",
          de: "yyy",
          ru: "yyy",
          pt: "yyy",
          nl: "yyy",
          fr: "aaa",
          it: "aaaa",
          es: "yyy",
          pl: "yyy",
          uk: "yyy",
          "zh-cn": "yyy"
        }
      };
    }
  });

  // mapwidgets/js/mapwidgets.js
  var import_leaflet2 = __toESM(require_leaflet());
  var import_L = __toESM(require_L_DayNightTerminator());
  var import_L2 = __toESM(require_L_Terminator());

  // ../package.json
  var version = "0.0.12";

  // node_modules/deep-object-diff/mjs/utils.js
  var isDate = (d) => d instanceof Date;
  var isEmpty = (o) => Object.keys(o).length === 0;
  var isObject = (o) => o != null && typeof o === "object";
  var hasOwnProperty = (o, ...args) => Object.prototype.hasOwnProperty.call(o, ...args);
  var isEmptyObject = (o) => isObject(o) && isEmpty(o);
  var makeObjectWithoutPrototype = () => /* @__PURE__ */ Object.create(null);

  // node_modules/deep-object-diff/mjs/diff.js
  var diff = (lhs, rhs) => {
    if (lhs === rhs) return {};
    if (!isObject(lhs) || !isObject(rhs)) return rhs;
    const deletedValues = Object.keys(lhs).reduce((acc, key) => {
      if (!hasOwnProperty(rhs, key)) {
        acc[key] = void 0;
      }
      return acc;
    }, makeObjectWithoutPrototype());
    if (isDate(lhs) || isDate(rhs)) {
      if (lhs.valueOf() == rhs.valueOf()) return {};
      return rhs;
    }
    return Object.keys(rhs).reduce((acc, key) => {
      if (!hasOwnProperty(lhs, key)) {
        acc[key] = rhs[key];
        return acc;
      }
      const difference = diff(lhs[key], rhs[key]);
      if (isEmptyObject(difference) && !isDate(difference) && (isEmptyObject(lhs[key]) || !isEmptyObject(rhs[key])))
        return acc;
      acc[key] = difference;
      return acc;
    }, deletedValues);
  };
  var diff_default = diff;

  // mapwidgets/js/mapwidgets.js
  var hash = require_object_hash();
  var translations = require_translations();
  $.extend(true, systemDictionary, translations);
  vis.binds["mapwidgets"] = {
    version,
    data: {},
    debug: true,
    validators: {
      latLngPair: (p) => Array.isArray(p) && p.length === 2 && Number.isFinite(p[0]) && Number.isFinite(p[1]),
      latLngAttributes: (lat, lng) => Number.isFinite(lat) && Number.isFinite(lng),
      latLngArray: (arr) => Array.isArray(arr) && arr.length > 0 && arr.every((p) => Array.isArray(p) && p.length === 2 && Number.isFinite(p[0]) && Number.isFinite(p[1])),
      bounds: (b) => Array.isArray(b) && b.length === 2 && b.every((p) => Array.isArray(p) && p.length === 2 && Number.isFinite(p[0]) && Number.isFinite(p[1]))
    },
    lHandlers: {
      marker: {
        validate: (item) => vis.binds["mapwidgets"].validators.latLngPair(item == null ? void 0 : item.latlng) || vis.binds["mapwidgets"].validators.latLngAttributes(item == null ? void 0 : item.lat, item == null ? void 0 : item.lng),
        create: (map, fg, item, widgetID) => {
          var _a;
          let newoptions = __spreadValues({}, item.options);
          if (newoptions.icon) {
            vis.binds["mapwidgets"].setIcon(newoptions, widgetID);
          }
          let mapOrLayer;
          if ((_a = item.iobOptions) == null ? void 0 : _a.fitBounds) {
            vis.binds["mapwidgets"].data[widgetID].fitBounds = true;
            mapOrLayer = fg;
          } else {
            mapOrLayer = map;
          }
          let layer = item.lat && item.lng ? L.marker([item.lat, item.lng], newoptions != null ? newoptions : {}).addTo(mapOrLayer) : L.marker(item.latlng, newoptions != null ? newoptions : {}).addTo(mapOrLayer);
          if (item.popup) {
            vis.binds["mapwidgets"].setPopup(layer, item);
          }
          if (item.tooltip) {
            vis.binds["mapwidgets"].setTooltip(layer, item);
          }
          return layer;
        },
        getKey: (item) => hash(item)
      },
      polyline: {
        validate: (item) => vis.binds["mapwidgets"].validators.latLngArray(item == null ? void 0 : item.latlng),
        create: (map, fg, item, widgetID) => {
          var _a, _b;
          let mapOrLayer;
          if ((_a = item.iobOptions) == null ? void 0 : _a.fitBounds) {
            vis.binds["mapwidgets"].data[widgetID].fitBounds = true;
            mapOrLayer = fg;
          } else {
            mapOrLayer = map;
          }
          let layer = L.polyline(item.latlng, (_b = item.options) != null ? _b : {}).addTo(mapOrLayer);
          return layer;
        },
        getKey: (item) => hash(item)
      },
      polygon: {
        validate: (item) => vis.binds["mapwidgets"].validators.latLngArray(item == null ? void 0 : item.latlng),
        create: (map, fg, item, widgetID) => {
          var _a, _b;
          let mapOrLayer;
          if ((_a = item.iobOptions) == null ? void 0 : _a.fitBounds) {
            vis.binds["mapwidgets"].data[widgetID].fitBounds = true;
            mapOrLayer = fg;
          } else {
            mapOrLayer = map;
          }
          let layer = L.polygon(item.latlng, (_b = item.options) != null ? _b : {}).addTo(mapOrLayer);
          if (item.popup) {
            vis.binds["mapwidgets"].setPopup(layer, item);
          }
          if (item.tooltip) {
            vis.binds["mapwidgets"].setTooltip(layer, item);
          }
          return layer;
        },
        getKey: (item) => hash(item)
      },
      rectangle: {
        // rectangle arbeitet mit bounds: [[lat1,lng1],[lat2,lng2]]
        validate: (item) => vis.binds["mapwidgets"].validators.bounds(item == null ? void 0 : item.latlng),
        create: (map, fg, item, widgetID) => {
          var _a, _b;
          let mapOrLayer;
          if ((_a = item.iobOptions) == null ? void 0 : _a.fitBounds) {
            vis.binds["mapwidgets"].data[widgetID].fitBounds = true;
            mapOrLayer = fg;
          } else {
            mapOrLayer = map;
          }
          let layer = L.rectangle(item.latlng, (_b = item.options) != null ? _b : {}).addTo(mapOrLayer);
          if (item.popup) {
            vis.binds["mapwidgets"].setPopup(layer, item);
          }
          if (item.tooltip) {
            vis.binds["mapwidgets"].setTooltip(layer, item);
          }
          return layer;
        },
        getKey: (item) => hash(item)
      },
      circle: {
        // circle benötigt latlng + radius
        validate: (item) => {
          var _a;
          return vis.binds["mapwidgets"].validators.latLngPair(item == null ? void 0 : item.latlng) && Number.isFinite((_a = item == null ? void 0 : item.options) == null ? void 0 : _a.radius);
        },
        create: (map, fg, item, widgetID) => {
          var _a, _b;
          let mapOrLayer;
          if ((_a = item.iobOptions) == null ? void 0 : _a.fitBounds) {
            vis.binds["mapwidgets"].data[widgetID].fitBounds = true;
            mapOrLayer = fg;
          } else {
            mapOrLayer = map;
          }
          let layer = L.circle(item.latlng, __spreadProps(__spreadValues({}, (_b = item.options) != null ? _b : {}), { radius: item.options.radius })).addTo(
            mapOrLayer
          );
          if (item.popup) {
            vis.binds["mapwidgets"].setPopup(layer, item);
          }
          if (item.tooltip) {
            vis.binds["mapwidgets"].setTooltip(layer, item);
          }
          return layer;
        },
        getKey: (item) => hash(item)
      }
    },
    showVersion: function() {
      if (vis.binds["mapwidgets"].version) {
        console.log(`Version mapwidgets: ${vis.binds["mapwidgets"].version}`);
        vis.binds["mapwidgets"].version = null;
      }
    },
    leaflet: {
      createWidget: function(widgetID, view, data, style) {
        return __async(this, null, function* () {
          var $div = $(`#${widgetID}`);
          if (!$div.length) {
            return setTimeout(function() {
              vis.binds["mapwidgets"].leaflet.createWidget(widgetID, view, data, style);
            }, 100);
          }
          this.visMapwidgets = vis.binds["mapwidgets"];
          let config = data["mapwidgets_oid"] ? JSON.parse(vis.states.attr(`${data["mapwidgets_oid"]}.val`)) : [];
          let lat = data["mapwidgets_lat"] ? parseFloat(data["mapwidgets_lat"]) : 50.11552;
          let lon = data["mapwidgets_lon"] ? parseFloat(data["mapwidgets_lon"]) : 8.68417;
          let zoom = data["mapwidgets_zoom"] ? parseFloat(data["mapwidgets_zoom"]) : 13;
          let expose = data["mapwidgets_expose"] ? Boolean(data["mapwidgets_expose"]) : false;
          let daynight = data["mapwidgets_daynightenabled"] ? Boolean(data["mapwidgets_daynightenabled"]) : false;
          let daynightColor = data["mapwidgets_daynightcolor"] ? String(data["mapwidgets_daynightcolor"]) : "#000000";
          let daynightOpacity = data["mapwidgets_daynightopacity"] ? Number(data["mapwidgets_daynightopacity"]) : 0.1;
          let daynightFillColor = data["mapwidgets_daynightfillcolor"] ? String(data["mapwidgets_daynightfillcolor"]) : "#000000";
          let daynightFillOpacity = data["mapwidgets_daynightfillopacity"] ? Number(data["mapwidgets_daynightfillopacity"]) : 0.3;
          if (!vis.binds["mapwidgets"].data[widgetID]) {
            vis.binds["mapwidgets"].data[widgetID] = {
              marker: {},
              polyline: {},
              polygon: {},
              rectangle: {},
              circle: {},
              fitBounds: false
            };
          }
          let visdata = vis.binds["mapwidgets"].data[widgetID];
          visdata.config = config;
          function onChange(e, newValue) {
            console.log("onChange");
            let visdata2 = vis.binds["mapwidgets"].data[widgetID];
            visdata2.oldConfig = visdata2.config;
            visdata2.config = JSON.parse(newValue);
            vis.binds["mapwidgets"].leaflet.render(widgetID, view, data, style);
          }
          if (data["mapwidgets_oid"]) {
            if (!vis.editMode) {
              vis.binds["mapwidgets"].bindStates($div, [data["mapwidgets_oid"]], onChange);
            }
          }
          L.Icon.Default.imagePath = "widgets/mapwidgets/dist/images/";
          if (!visdata.map || $(`#${widgetID} .mapwidgetsLeaflet`).length == 0) {
            let text = "";
            text += `<div class="mapwidgetsLeaflet"></div>`;
            $(`#${widgetID}`).html(text);
            visdata.map = L.map($(`#${widgetID} .mapwidgetsLeaflet`).get(0)).setView([lat, lon], zoom);
            visdata.featureGroup = L.featureGroup().addTo(visdata.map);
            if (expose) {
              window.iobroker = window.iobroker || {};
              window.iobroker.mapwidgets = window.iobroker.mapwidgets || {};
              window.iobroker.mapwidgets[widgetID] = window.iobroker.mapwidgets[widgetID] || {};
              window.iobroker.mapwidgets[widgetID].map = visdata.map;
              console.log("Now you can find the map object under the following name:");
              console.log(`window.iobroker.mapwidgets.${widgetID}.map`);
            }
          }
          L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          }).addTo(visdata.map);
          if (daynight) {
            let terminatorLoop = function() {
              setTimeout(function() {
                terminator.setTime();
                terminatorLoop();
              }, 6e4);
            };
            let options = {
              color: daynightColor,
              opacity: daynightOpacity,
              fillColor: daynightFillColor,
              fillOpacity: daynightFillOpacity
            };
            let terminator = L.terminator(options).addTo(visdata.map);
            if (!vis.editMode) {
              terminatorLoop();
            }
          }
          this.render(widgetID, view, data, style);
        });
      },
      render(widgetID) {
        this.visMapwidgets.debug && console.log("render");
        let visdata = vis.binds["mapwidgets"].data[widgetID];
        let config = visdata.config;
        let oldConfig = visdata.oldConfig;
        let diffConfig = diff_default(oldConfig, config);
        let configSet = {
          config,
          oldConfig,
          diffConfig
        };
        let map = visdata.map;
        let fg = visdata.featureGroup;
        this.icons(visdata, widgetID, configSet);
        this.applyAllGeometryDiffs.call(this, visdata, widgetID, configSet, map, fg);
        if (vis.binds["mapwidgets"].data[widgetID].fitBounds) {
          visdata.map.fitBounds(visdata.featureGroup.getBounds());
        }
      },
      applyAllGeometryDiffs(visdata, widgetID, configSet, map, fg) {
        var _a;
        const types = ["marker", "polyline", "polygon", "rectangle", "circle"];
        for (const type of types) {
          this.visMapwidgets.debug && console.log(`applyAllGeometryDiffs: ${type}`);
          const diff2 = (_a = configSet == null ? void 0 : configSet.diffConfig) == null ? void 0 : _a[type];
          if (!diff2) {
            continue;
          }
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
            gc: true
          });
        }
      },
      applyArrayDiff({ visdata, type, configSet, widgetID, map, fg, getKey, validate, create, remove, gc = true }) {
        var _a, _b, _c, _d, _e;
        const cfg = (_a = configSet == null ? void 0 : configSet.config) != null ? _a : {};
        const old = (_b = configSet == null ? void 0 : configSet.oldConfig) != null ? _b : {};
        const diff2 = (_d = (_c = configSet == null ? void 0 : configSet.diffConfig) == null ? void 0 : _c[type]) != null ? _d : null;
        if (!diff2) {
          return;
        }
        visdata[type] = visdata[type] || {};
        const store = visdata[type];
        const oldArr = Array.isArray(old[type]) ? old[type] : [];
        const newArr = Array.isArray(cfg[type]) ? cfg[type] : [];
        const indices = Object.keys(diff2).map((n) => parseInt(n, 10)).sort((a, b) => a - b);
        const doRemove = (key, layer) => {
          try {
            remove ? remove(layer) : layer.remove();
          } catch (e) {
          }
          delete store[key];
        };
        for (const i of indices) {
          const change = diff2[i];
          const oldItem = oldArr[i];
          if (oldItem) {
            const oldKey = getKey(oldItem);
            const hit = store[oldKey];
            if (hit == null ? void 0 : hit.layer) {
              doRemove(oldKey, hit.layer);
            }
          }
          if (change === void 0) {
            continue;
          }
          const item = (_e = newArr[i]) != null ? _e : change;
          if (validate && !validate(item)) {
            console.warn(`${type} ${i + 1}: validation failed`);
            continue;
          }
          const layer = create(map, fg, item, widgetID);
          const key = getKey(item);
          store[key] = { index: i, layer };
        }
        if (gc && Array.isArray(newArr)) {
          for (const [k, v] of Object.entries(store)) {
            if (typeof (v == null ? void 0 : v.index) === "number" && v.index >= newArr.length) {
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
                shadowUrl: cfg.shadowUrl ? cfg.shadowUrl : void 0,
                iconSize: cfg.iconSize,
                iconAnchor: cfg.iconAnchor,
                popupAnchor: cfg.popupAnchor,
                shadowSize: cfg.shadowSize,
                shadowAnchor: cfg.shadowAnchor,
                html: cfg.html,
                bgPos: cfg.bgPos
              });
            } else {
              iconRegistry[name] = L.icon({
                iconUrl: cfg.iconUrl,
                shadowUrl: cfg.shadowUrl ? cfg.shadowUrl : void 0,
                iconSize: cfg.iconSize,
                iconAnchor: cfg.iconAnchor,
                popupAnchor: cfg.popupAnchor,
                shadowSize: cfg.shadowSize,
                shadowAnchor: cfg.shadowAnchor
              });
            }
          }
          this.visMapwidgets.data[widgetID].iconRegistry = iconRegistry;
        }
      }
    },
    setTooltip(layer, item) {
      if (typeof item.tooltip === "string") {
        layer.bindTooltip(item.tooltip);
      } else if (item.tooltip.text) {
        layer.bindTooltip(item.tooltip.text, item.tooltip.options || {});
      }
    },
    setPopup(layer, item) {
      if (typeof item.popup === "string") {
        layer.bindPopup(item.popup);
      } else if (item.popup.text) {
        layer.bindPopup(item.popup.text, item.popup.options || {});
      }
    },
    setIcon(options, widgetID) {
      let iconRegistry = vis.binds["mapwidgets"].data[widgetID].iconRegistry || {};
      if (iconRegistry[options.icon]) {
        options.icon = iconRegistry[options.icon];
      } else {
        delete options.icon;
      }
    },
    bindStates: function(elem, bound, change_callback) {
      const $div = $(elem);
      const boundstates = $div.data("bound");
      if (boundstates) {
        for (let i = 0; i < boundstates.bound.length; i++) {
          vis.states.unbind(boundstates.bound[i], boundstates.bindHandler);
        }
      }
      $div.data("bound", null);
      for (let i = 0; i < bound.length; i++) {
        bound[i] = `${bound[i]}.val`;
        vis.states.bind(bound[i], change_callback);
      }
      $div.data("bound", { bound, bindHandler: change_callback });
    },
    loadScript: function(src, { attrs = {}, timeout = 15e3 } = {}) {
      return new Promise((resolve, reject) => {
        if ([...document.scripts].some((s2) => s2.src === src)) {
          resolve("already-loaded");
          return;
        }
        const s = document.createElement("script");
        s.src = src;
        if (attrs.type === "module") {
          s.type = "module";
        }
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
        document.head.appendChild(s);
      });
    },
    loadCSS: function(href, { attrs = {}, timeout = 15e3 } = {}) {
      return new Promise((resolve, reject) => {
        if ([...document.querySelectorAll('link[rel="stylesheet"]')].some((l2) => l2.href === href)) {
          resolve("already-loaded");
          return;
        }
        const l = document.createElement("link");
        l.rel = "stylesheet";
        l.href = href;
        if (attrs.integrity) {
          l.integrity = attrs.integrity;
        }
        if (attrs.crossOrigin) {
          l.crossOrigin = attrs.crossOrigin;
        }
        if (attrs.media) {
          l.media = attrs.media;
        }
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
    waitForGlobal: function(path, interval = 100, timeout = 0) {
      return new Promise((resolve, reject) => {
        const parts = path.split(".");
        const start = Date.now();
        const check = () => {
          let obj = window;
          for (const p of parts) {
            if (obj && p in obj) {
              obj = obj[p];
            } else {
              obj = void 0;
              break;
            }
          }
          if (obj !== void 0) {
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
    provideFunctions: function() {
      this.visMapwidgets = vis.binds["mapwidgets"];
      window.iobroker = window.iobroker || {};
      window.iobroker.mapwidgets = window.iobroker.mapwidgets || {};
      window.iobroker.mapwidgets.loadScript = this.visMapwidgets.loadScript;
      window.iobroker.mapwidgets.loadCSS = this.visMapwidgets.loadCSS;
      window.iobroker.mapwidgets.waitForGlobal = this.visMapwidgets.waitForGlobal;
    }
  };
  vis.binds["mapwidgets"].showVersion();
  vis.binds["mapwidgets"].provideFunctions();
})();
/*! Bundled license information:

leaflet/dist/leaflet.js:
leaflet/dist/leaflet-src.js:
  (* @preserve
   * Leaflet 1.9.4, a JS library for interactive maps. https://leafletjs.com
   * (c) 2010-2023 Vladimir Agafonkin, (c) 2010-2011 CloudMade
   *)
*/
//# sourceMappingURL=bundle.js.map
