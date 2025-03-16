import { w as et } from './with-props-kfWWD9C7.js';
import { l as x, r as P } from './chunk-K6CSEXPM-BkoTNwhC.js';
function tt({ children: e, className: t }) {
  return x.jsx('div', {
    className: `border rounded-lg shadow-md bg-white p-4 w-full max-w-md ${t}`,
    children: e,
  });
}
function nt({ children: e, className: t }) {
  return x.jsx('div', { className: `p-2 ${t}`, children: e });
}
function he({ children: e, onClick: t, className: n, disabled: r }) {
  return x.jsx('button', {
    onClick: t,
    className: `text-white px-4 py-2 rounded-md hover:bg-blue-700 hover:cursor-pointer transition-all$ ${n} ${r ? 'bg-gray-300 hover:bg-gray-300' : 'bg-blue-600 hover:bg-blue-700'}`,
    disabled: r,
    children: e,
  });
}
function rt({ placeholder: e, value: t, onChange: n, className: r }) {
  return x.jsx('input', {
    type: 'text',
    placeholder: e,
    value: t,
    onChange: n,
    className: `"w-full p-2 border rounded-md focus:ring focus:ring-blue-300 outline-none ${r}`,
  });
}
/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const st = (e) => e.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase(),
  Ne = (...e) =>
    e
      .filter((t, n, r) => !!t && t.trim() !== '' && r.indexOf(t) === n)
      .join(' ')
      .trim();
/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var ot = {
  xmlns: 'http://www.w3.org/2000/svg',
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};
/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const it = P.forwardRef(
  (
    {
      color: e = 'currentColor',
      size: t = 24,
      strokeWidth: n = 2,
      absoluteStrokeWidth: r,
      className: s = '',
      children: o,
      iconNode: i,
      ...c
    },
    f
  ) =>
    P.createElement(
      'svg',
      {
        ref: f,
        ...ot,
        width: t,
        height: t,
        stroke: e,
        strokeWidth: r ? (Number(n) * 24) / Number(t) : n,
        className: Ne('lucide', s),
        ...c,
      },
      [...i.map(([l, u]) => P.createElement(l, u)), ...(Array.isArray(o) ? o : [o])]
    )
);
/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ue = (e, t) => {
  const n = P.forwardRef(({ className: r, ...s }, o) =>
    P.createElement(it, { ref: o, iconNode: t, className: Ne(`lucide-${st(e)}`, r), ...s })
  );
  return (n.displayName = `${e}`), n;
};
/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const at = [['path', { d: 'M20 6 9 17l-5-5', key: '1gmf2c' }]],
  ct = Ue('Check', at);
/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const lt = [
    ['rect', { width: '14', height: '14', x: '8', y: '8', rx: '2', ry: '2', key: '17jyea' }],
    ['path', { d: 'M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2', key: 'zix9uf' }],
  ],
  ut = Ue('Copy', lt);
function Pe(e, t) {
  return function () {
    return e.apply(t, arguments);
  };
}
const { toString: ft } = Object.prototype,
  { getPrototypeOf: ue } = Object,
  X = ((e) => (t) => {
    const n = ft.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  N = (e) => ((e = e.toLowerCase()), (t) => X(t) === e),
  G = (e) => (t) => typeof t === e,
  { isArray: D } = Array,
  H = G('undefined');
function dt(e) {
  return (
    e !== null &&
    !H(e) &&
    e.constructor !== null &&
    !H(e.constructor) &&
    C(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
const Le = N('ArrayBuffer');
function pt(e) {
  let t;
  return (
    typeof ArrayBuffer < 'u' && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && Le(e.buffer)),
    t
  );
}
const ht = G('string'),
  C = G('function'),
  _e = G('number'),
  Z = (e) => e !== null && typeof e == 'object',
  mt = (e) => e === !0 || e === !1,
  v = (e) => {
    if (X(e) !== 'object') return !1;
    const t = ue(e);
    return (
      (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) &&
      !(Symbol.toStringTag in e) &&
      !(Symbol.iterator in e)
    );
  },
  yt = N('Date'),
  bt = N('File'),
  wt = N('Blob'),
  gt = N('FileList'),
  Et = (e) => Z(e) && C(e.pipe),
  Rt = (e) => {
    let t;
    return (
      e &&
      ((typeof FormData == 'function' && e instanceof FormData) ||
        (C(e.append) &&
          ((t = X(e)) === 'formdata' ||
            (t === 'object' && C(e.toString) && e.toString() === '[object FormData]'))))
    );
  },
  St = N('URLSearchParams'),
  [xt, Ot, Tt, At] = ['ReadableStream', 'Request', 'Response', 'Headers'].map(N),
  Ct = (e) => (e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ''));
function $(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > 'u') return;
  let r, s;
  if ((typeof e != 'object' && (e = [e]), D(e)))
    for (r = 0, s = e.length; r < s; r++) t.call(null, e[r], r, e);
  else {
    const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
      i = o.length;
    let c;
    for (r = 0; r < i; r++) (c = o[r]), t.call(null, e[c], c, e);
  }
}
function Fe(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length,
    s;
  for (; r-- > 0; ) if (((s = n[r]), t === s.toLowerCase())) return s;
  return null;
}
const k =
    typeof globalThis < 'u'
      ? globalThis
      : typeof self < 'u'
        ? self
        : typeof window < 'u'
          ? window
          : global,
  ke = (e) => !H(e) && e !== k;
function se() {
  const { caseless: e } = (ke(this) && this) || {},
    t = {},
    n = (r, s) => {
      const o = (e && Fe(t, s)) || s;
      v(t[o]) && v(r)
        ? (t[o] = se(t[o], r))
        : v(r)
          ? (t[o] = se({}, r))
          : D(r)
            ? (t[o] = r.slice())
            : (t[o] = r);
    };
  for (let r = 0, s = arguments.length; r < s; r++) arguments[r] && $(arguments[r], n);
  return t;
}
const Nt = (e, t, n, { allOwnKeys: r } = {}) => (
    $(
      t,
      (s, o) => {
        n && C(s) ? (e[o] = Pe(s, n)) : (e[o] = s);
      },
      { allOwnKeys: r }
    ),
    e
  ),
  Ut = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  Pt = (e, t, n, r) => {
    (e.prototype = Object.create(t.prototype, r)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, 'super', { value: t.prototype }),
      n && Object.assign(e.prototype, n);
  },
  Lt = (e, t, n, r) => {
    let s, o, i;
    const c = {};
    if (((t = t || {}), e == null)) return t;
    do {
      for (s = Object.getOwnPropertyNames(e), o = s.length; o-- > 0; )
        (i = s[o]), (!r || r(i, e, t)) && !c[i] && ((t[i] = e[i]), (c[i] = !0));
      e = n !== !1 && ue(e);
    } while (e && (!n || n(e, t)) && e !== Object.prototype);
    return t;
  },
  _t = (e, t, n) => {
    (e = String(e)), (n === void 0 || n > e.length) && (n = e.length), (n -= t.length);
    const r = e.indexOf(t, n);
    return r !== -1 && r === n;
  },
  Ft = (e) => {
    if (!e) return null;
    if (D(e)) return e;
    let t = e.length;
    if (!_e(t)) return null;
    const n = new Array(t);
    for (; t-- > 0; ) n[t] = e[t];
    return n;
  },
  kt = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < 'u' && ue(Uint8Array)),
  jt = (e, t) => {
    const r = (e && e[Symbol.iterator]).call(e);
    let s;
    for (; (s = r.next()) && !s.done; ) {
      const o = s.value;
      t.call(e, o[0], o[1]);
    }
  },
  Bt = (e, t) => {
    let n;
    const r = [];
    for (; (n = e.exec(t)) !== null; ) r.push(n);
    return r;
  },
  Dt = N('HTMLFormElement'),
  qt = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, s) {
      return r.toUpperCase() + s;
    }),
  me = (
    ({ hasOwnProperty: e }) =>
    (t, n) =>
      e.call(t, n)
  )(Object.prototype),
  It = N('RegExp'),
  je = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e),
      r = {};
    $(n, (s, o) => {
      let i;
      (i = t(s, o, e)) !== !1 && (r[o] = i || s);
    }),
      Object.defineProperties(e, r);
  },
  Ht = (e) => {
    je(e, (t, n) => {
      if (C(e) && ['arguments', 'caller', 'callee'].indexOf(n) !== -1) return !1;
      const r = e[n];
      if (C(r)) {
        if (((t.enumerable = !1), 'writable' in t)) {
          t.writable = !1;
          return;
        }
        t.set ||
          (t.set = () => {
            throw Error("Can not rewrite read-only method '" + n + "'");
          });
      }
    });
  },
  $t = (e, t) => {
    const n = {},
      r = (s) => {
        s.forEach((o) => {
          n[o] = !0;
        });
      };
    return D(e) ? r(e) : r(String(e).split(t)), n;
  },
  Mt = () => {},
  zt = (e, t) => (e != null && Number.isFinite((e = +e)) ? e : t);
function vt(e) {
  return !!(e && C(e.append) && e[Symbol.toStringTag] === 'FormData' && e[Symbol.iterator]);
}
const Jt = (e) => {
    const t = new Array(10),
      n = (r, s) => {
        if (Z(r)) {
          if (t.indexOf(r) >= 0) return;
          if (!('toJSON' in r)) {
            t[s] = r;
            const o = D(r) ? [] : {};
            return (
              $(r, (i, c) => {
                const f = n(i, s + 1);
                !H(f) && (o[c] = f);
              }),
              (t[s] = void 0),
              o
            );
          }
        }
        return r;
      };
    return n(e, 0);
  },
  Vt = N('AsyncFunction'),
  Wt = (e) => e && (Z(e) || C(e)) && C(e.then) && C(e.catch),
  Be = ((e, t) =>
    e
      ? setImmediate
      : t
        ? ((n, r) => (
            k.addEventListener(
              'message',
              ({ source: s, data: o }) => {
                s === k && o === n && r.length && r.shift()();
              },
              !1
            ),
            (s) => {
              r.push(s), k.postMessage(n, '*');
            }
          ))(`axios@${Math.random()}`, [])
        : (n) => setTimeout(n))(typeof setImmediate == 'function', C(k.postMessage)),
  Kt =
    typeof queueMicrotask < 'u'
      ? queueMicrotask.bind(k)
      : (typeof process < 'u' && process.nextTick) || Be,
  a = {
    isArray: D,
    isArrayBuffer: Le,
    isBuffer: dt,
    isFormData: Rt,
    isArrayBufferView: pt,
    isString: ht,
    isNumber: _e,
    isBoolean: mt,
    isObject: Z,
    isPlainObject: v,
    isReadableStream: xt,
    isRequest: Ot,
    isResponse: Tt,
    isHeaders: At,
    isUndefined: H,
    isDate: yt,
    isFile: bt,
    isBlob: wt,
    isRegExp: It,
    isFunction: C,
    isStream: Et,
    isURLSearchParams: St,
    isTypedArray: kt,
    isFileList: gt,
    forEach: $,
    merge: se,
    extend: Nt,
    trim: Ct,
    stripBOM: Ut,
    inherits: Pt,
    toFlatObject: Lt,
    kindOf: X,
    kindOfTest: N,
    endsWith: _t,
    toArray: Ft,
    forEachEntry: jt,
    matchAll: Bt,
    isHTMLForm: Dt,
    hasOwnProperty: me,
    hasOwnProp: me,
    reduceDescriptors: je,
    freezeMethods: Ht,
    toObjectSet: $t,
    toCamelCase: qt,
    noop: Mt,
    toFiniteNumber: zt,
    findKey: Fe,
    global: k,
    isContextDefined: ke,
    isSpecCompliantForm: vt,
    toJSONObject: Jt,
    isAsyncFn: Vt,
    isThenable: Wt,
    setImmediate: Be,
    asap: Kt,
  };
function m(e, t, n, r, s) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = e),
    (this.name = 'AxiosError'),
    t && (this.code = t),
    n && (this.config = n),
    r && (this.request = r),
    s && ((this.response = s), (this.status = s.status ? s.status : null));
}
a.inherits(m, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: a.toJSONObject(this.config),
      code: this.code,
      status: this.status,
    };
  },
});
const De = m.prototype,
  qe = {};
[
  'ERR_BAD_OPTION_VALUE',
  'ERR_BAD_OPTION',
  'ECONNABORTED',
  'ETIMEDOUT',
  'ERR_NETWORK',
  'ERR_FR_TOO_MANY_REDIRECTS',
  'ERR_DEPRECATED',
  'ERR_BAD_RESPONSE',
  'ERR_BAD_REQUEST',
  'ERR_CANCELED',
  'ERR_NOT_SUPPORT',
  'ERR_INVALID_URL',
].forEach((e) => {
  qe[e] = { value: e };
});
Object.defineProperties(m, qe);
Object.defineProperty(De, 'isAxiosError', { value: !0 });
m.from = (e, t, n, r, s, o) => {
  const i = Object.create(De);
  return (
    a.toFlatObject(
      e,
      i,
      function (f) {
        return f !== Error.prototype;
      },
      (c) => c !== 'isAxiosError'
    ),
    m.call(i, e.message, t, n, r, s),
    (i.cause = e),
    (i.name = e.name),
    o && Object.assign(i, o),
    i
  );
};
const Xt = null;
function oe(e) {
  return a.isPlainObject(e) || a.isArray(e);
}
function Ie(e) {
  return a.endsWith(e, '[]') ? e.slice(0, -2) : e;
}
function ye(e, t, n) {
  return e
    ? e
        .concat(t)
        .map(function (s, o) {
          return (s = Ie(s)), !n && o ? '[' + s + ']' : s;
        })
        .join(n ? '.' : '')
    : t;
}
function Gt(e) {
  return a.isArray(e) && !e.some(oe);
}
const Zt = a.toFlatObject(a, {}, null, function (t) {
  return /^is[A-Z]/.test(t);
});
function Q(e, t, n) {
  if (!a.isObject(e)) throw new TypeError('target must be an object');
  (t = t || new FormData()),
    (n = a.toFlatObject(n, { metaTokens: !0, dots: !1, indexes: !1 }, !1, function (y, h) {
      return !a.isUndefined(h[y]);
    }));
  const r = n.metaTokens,
    s = n.visitor || u,
    o = n.dots,
    i = n.indexes,
    f = (n.Blob || (typeof Blob < 'u' && Blob)) && a.isSpecCompliantForm(t);
  if (!a.isFunction(s)) throw new TypeError('visitor must be a function');
  function l(p) {
    if (p === null) return '';
    if (a.isDate(p)) return p.toISOString();
    if (!f && a.isBlob(p)) throw new m('Blob is not supported. Use a Buffer instead.');
    return a.isArrayBuffer(p) || a.isTypedArray(p)
      ? f && typeof Blob == 'function'
        ? new Blob([p])
        : Buffer.from(p)
      : p;
  }
  function u(p, y, h) {
    let g = p;
    if (p && !h && typeof p == 'object') {
      if (a.endsWith(y, '{}')) (y = r ? y : y.slice(0, -2)), (p = JSON.stringify(p));
      else if (
        (a.isArray(p) && Gt(p)) ||
        ((a.isFileList(p) || a.endsWith(y, '[]')) && (g = a.toArray(p)))
      )
        return (
          (y = Ie(y)),
          g.forEach(function (S, L) {
            !(a.isUndefined(S) || S === null) &&
              t.append(i === !0 ? ye([y], L, o) : i === null ? y : y + '[]', l(S));
          }),
          !1
        );
    }
    return oe(p) ? !0 : (t.append(ye(h, y, o), l(p)), !1);
  }
  const d = [],
    b = Object.assign(Zt, { defaultVisitor: u, convertValue: l, isVisitable: oe });
  function w(p, y) {
    if (!a.isUndefined(p)) {
      if (d.indexOf(p) !== -1) throw Error('Circular reference detected in ' + y.join('.'));
      d.push(p),
        a.forEach(p, function (g, R) {
          (!(a.isUndefined(g) || g === null) &&
            s.call(t, g, a.isString(R) ? R.trim() : R, y, b)) === !0 && w(g, y ? y.concat(R) : [R]);
        }),
        d.pop();
    }
  }
  if (!a.isObject(e)) throw new TypeError('data must be an object');
  return w(e), t;
}
function be(e) {
  const t = { '!': '%21', "'": '%27', '(': '%28', ')': '%29', '~': '%7E', '%20': '+', '%00': '\0' };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (r) {
    return t[r];
  });
}
function fe(e, t) {
  (this._pairs = []), e && Q(e, this, t);
}
const He = fe.prototype;
He.append = function (t, n) {
  this._pairs.push([t, n]);
};
He.toString = function (t) {
  const n = t
    ? function (r) {
        return t.call(this, r, be);
      }
    : be;
  return this._pairs
    .map(function (s) {
      return n(s[0]) + '=' + n(s[1]);
    }, '')
    .join('&');
};
function Qt(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ':')
    .replace(/%24/g, '$')
    .replace(/%2C/gi, ',')
    .replace(/%20/g, '+')
    .replace(/%5B/gi, '[')
    .replace(/%5D/gi, ']');
}
function $e(e, t, n) {
  if (!t) return e;
  const r = (n && n.encode) || Qt;
  a.isFunction(n) && (n = { serialize: n });
  const s = n && n.serialize;
  let o;
  if (
    (s ? (o = s(t, n)) : (o = a.isURLSearchParams(t) ? t.toString() : new fe(t, n).toString(r)), o)
  ) {
    const i = e.indexOf('#');
    i !== -1 && (e = e.slice(0, i)), (e += (e.indexOf('?') === -1 ? '?' : '&') + o);
  }
  return e;
}
class we {
  constructor() {
    this.handlers = [];
  }
  use(t, n, r) {
    return (
      this.handlers.push({
        fulfilled: t,
        rejected: n,
        synchronous: r ? r.synchronous : !1,
        runWhen: r ? r.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(t) {
    a.forEach(this.handlers, function (r) {
      r !== null && t(r);
    });
  }
}
const Me = { silentJSONParsing: !0, forcedJSONParsing: !0, clarifyTimeoutError: !1 },
  Yt = typeof URLSearchParams < 'u' ? URLSearchParams : fe,
  en = typeof FormData < 'u' ? FormData : null,
  tn = typeof Blob < 'u' ? Blob : null,
  nn = {
    isBrowser: !0,
    classes: { URLSearchParams: Yt, FormData: en, Blob: tn },
    protocols: ['http', 'https', 'file', 'blob', 'url', 'data'],
  },
  de = typeof window < 'u' && typeof document < 'u',
  ie = (typeof navigator == 'object' && navigator) || void 0,
  rn = de && (!ie || ['ReactNative', 'NativeScript', 'NS'].indexOf(ie.product) < 0),
  sn =
    typeof WorkerGlobalScope < 'u' &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == 'function',
  on = (de && window.location.href) || 'http://localhost',
  an = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: de,
        hasStandardBrowserEnv: rn,
        hasStandardBrowserWebWorkerEnv: sn,
        navigator: ie,
        origin: on,
      },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  O = { ...an, ...nn };
function cn(e, t) {
  return Q(
    e,
    new O.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (n, r, s, o) {
          return O.isNode && a.isBuffer(n)
            ? (this.append(r, n.toString('base64')), !1)
            : o.defaultVisitor.apply(this, arguments);
        },
      },
      t
    )
  );
}
function ln(e) {
  return a.matchAll(/\w+|\[(\w*)]/g, e).map((t) => (t[0] === '[]' ? '' : t[1] || t[0]));
}
function un(e) {
  const t = {},
    n = Object.keys(e);
  let r;
  const s = n.length;
  let o;
  for (r = 0; r < s; r++) (o = n[r]), (t[o] = e[o]);
  return t;
}
function ze(e) {
  function t(n, r, s, o) {
    let i = n[o++];
    if (i === '__proto__') return !0;
    const c = Number.isFinite(+i),
      f = o >= n.length;
    return (
      (i = !i && a.isArray(s) ? s.length : i),
      f
        ? (a.hasOwnProp(s, i) ? (s[i] = [s[i], r]) : (s[i] = r), !c)
        : ((!s[i] || !a.isObject(s[i])) && (s[i] = []),
          t(n, r, s[i], o) && a.isArray(s[i]) && (s[i] = un(s[i])),
          !c)
    );
  }
  if (a.isFormData(e) && a.isFunction(e.entries)) {
    const n = {};
    return (
      a.forEachEntry(e, (r, s) => {
        t(ln(r), s, n, 0);
      }),
      n
    );
  }
  return null;
}
function fn(e, t, n) {
  if (a.isString(e))
    try {
      return (t || JSON.parse)(e), a.trim(e);
    } catch (r) {
      if (r.name !== 'SyntaxError') throw r;
    }
  return (n || JSON.stringify)(e);
}
const M = {
  transitional: Me,
  adapter: ['xhr', 'http', 'fetch'],
  transformRequest: [
    function (t, n) {
      const r = n.getContentType() || '',
        s = r.indexOf('application/json') > -1,
        o = a.isObject(t);
      if ((o && a.isHTMLForm(t) && (t = new FormData(t)), a.isFormData(t)))
        return s ? JSON.stringify(ze(t)) : t;
      if (
        a.isArrayBuffer(t) ||
        a.isBuffer(t) ||
        a.isStream(t) ||
        a.isFile(t) ||
        a.isBlob(t) ||
        a.isReadableStream(t)
      )
        return t;
      if (a.isArrayBufferView(t)) return t.buffer;
      if (a.isURLSearchParams(t))
        return (
          n.setContentType('application/x-www-form-urlencoded;charset=utf-8', !1), t.toString()
        );
      let c;
      if (o) {
        if (r.indexOf('application/x-www-form-urlencoded') > -1)
          return cn(t, this.formSerializer).toString();
        if ((c = a.isFileList(t)) || r.indexOf('multipart/form-data') > -1) {
          const f = this.env && this.env.FormData;
          return Q(c ? { 'files[]': t } : t, f && new f(), this.formSerializer);
        }
      }
      return o || s ? (n.setContentType('application/json', !1), fn(t)) : t;
    },
  ],
  transformResponse: [
    function (t) {
      const n = this.transitional || M.transitional,
        r = n && n.forcedJSONParsing,
        s = this.responseType === 'json';
      if (a.isResponse(t) || a.isReadableStream(t)) return t;
      if (t && a.isString(t) && ((r && !this.responseType) || s)) {
        const i = !(n && n.silentJSONParsing) && s;
        try {
          return JSON.parse(t);
        } catch (c) {
          if (i)
            throw c.name === 'SyntaxError'
              ? m.from(c, m.ERR_BAD_RESPONSE, this, null, this.response)
              : c;
        }
      }
      return t;
    },
  ],
  timeout: 0,
  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: O.classes.FormData, Blob: O.classes.Blob },
  validateStatus: function (t) {
    return t >= 200 && t < 300;
  },
  headers: { common: { Accept: 'application/json, text/plain, */*', 'Content-Type': void 0 } },
};
a.forEach(['delete', 'get', 'head', 'post', 'put', 'patch'], (e) => {
  M.headers[e] = {};
});
const dn = a.toObjectSet([
    'age',
    'authorization',
    'content-length',
    'content-type',
    'etag',
    'expires',
    'from',
    'host',
    'if-modified-since',
    'if-unmodified-since',
    'last-modified',
    'location',
    'max-forwards',
    'proxy-authorization',
    'referer',
    'retry-after',
    'user-agent',
  ]),
  pn = (e) => {
    const t = {};
    let n, r, s;
    return (
      e &&
        e
          .split(
            `
`
          )
          .forEach(function (i) {
            (s = i.indexOf(':')),
              (n = i.substring(0, s).trim().toLowerCase()),
              (r = i.substring(s + 1).trim()),
              !(!n || (t[n] && dn[n])) &&
                (n === 'set-cookie'
                  ? t[n]
                    ? t[n].push(r)
                    : (t[n] = [r])
                  : (t[n] = t[n] ? t[n] + ', ' + r : r));
          }),
      t
    );
  },
  ge = Symbol('internals');
function I(e) {
  return e && String(e).trim().toLowerCase();
}
function J(e) {
  return e === !1 || e == null ? e : a.isArray(e) ? e.map(J) : String(e);
}
function hn(e) {
  const t = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; (r = n.exec(e)); ) t[r[1]] = r[2];
  return t;
}
const mn = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function te(e, t, n, r, s) {
  if (a.isFunction(r)) return r.call(this, t, n);
  if ((s && (t = n), !!a.isString(t))) {
    if (a.isString(r)) return t.indexOf(r) !== -1;
    if (a.isRegExp(r)) return r.test(t);
  }
}
function yn(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function bn(e, t) {
  const n = a.toCamelCase(' ' + t);
  ['get', 'set', 'has'].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function (s, o, i) {
        return this[r].call(this, t, s, o, i);
      },
      configurable: !0,
    });
  });
}
let A = class {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const s = this;
    function o(c, f, l) {
      const u = I(f);
      if (!u) throw new Error('header name must be a non-empty string');
      const d = a.findKey(s, u);
      (!d || s[d] === void 0 || l === !0 || (l === void 0 && s[d] !== !1)) && (s[d || f] = J(c));
    }
    const i = (c, f) => a.forEach(c, (l, u) => o(l, u, f));
    if (a.isPlainObject(t) || t instanceof this.constructor) i(t, n);
    else if (a.isString(t) && (t = t.trim()) && !mn(t)) i(pn(t), n);
    else if (a.isHeaders(t)) for (const [c, f] of t.entries()) o(f, c, r);
    else t != null && o(n, t, r);
    return this;
  }
  get(t, n) {
    if (((t = I(t)), t)) {
      const r = a.findKey(this, t);
      if (r) {
        const s = this[r];
        if (!n) return s;
        if (n === !0) return hn(s);
        if (a.isFunction(n)) return n.call(this, s, r);
        if (a.isRegExp(n)) return n.exec(s);
        throw new TypeError('parser must be boolean|regexp|function');
      }
    }
  }
  has(t, n) {
    if (((t = I(t)), t)) {
      const r = a.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || te(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let s = !1;
    function o(i) {
      if (((i = I(i)), i)) {
        const c = a.findKey(r, i);
        c && (!n || te(r, r[c], c, n)) && (delete r[c], (s = !0));
      }
    }
    return a.isArray(t) ? t.forEach(o) : o(t), s;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length,
      s = !1;
    for (; r--; ) {
      const o = n[r];
      (!t || te(this, this[o], o, t, !0)) && (delete this[o], (s = !0));
    }
    return s;
  }
  normalize(t) {
    const n = this,
      r = {};
    return (
      a.forEach(this, (s, o) => {
        const i = a.findKey(r, o);
        if (i) {
          (n[i] = J(s)), delete n[o];
          return;
        }
        const c = t ? yn(o) : String(o).trim();
        c !== o && delete n[o], (n[c] = J(s)), (r[c] = !0);
      }),
      this
    );
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = Object.create(null);
    return (
      a.forEach(this, (r, s) => {
        r != null && r !== !1 && (n[s] = t && a.isArray(r) ? r.join(', ') : r);
      }),
      n
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ': ' + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return 'AxiosHeaders';
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((s) => r.set(s)), r;
  }
  static accessor(t) {
    const r = (this[ge] = this[ge] = { accessors: {} }).accessors,
      s = this.prototype;
    function o(i) {
      const c = I(i);
      r[c] || (bn(s, i), (r[c] = !0));
    }
    return a.isArray(t) ? t.forEach(o) : o(t), this;
  }
};
A.accessor([
  'Content-Type',
  'Content-Length',
  'Accept',
  'Accept-Encoding',
  'User-Agent',
  'Authorization',
]);
a.reduceDescriptors(A.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    },
  };
});
a.freezeMethods(A);
function ne(e, t) {
  const n = this || M,
    r = t || n,
    s = A.from(r.headers);
  let o = r.data;
  return (
    a.forEach(e, function (c) {
      o = c.call(n, o, s.normalize(), t ? t.status : void 0);
    }),
    s.normalize(),
    o
  );
}
function ve(e) {
  return !!(e && e.__CANCEL__);
}
function q(e, t, n) {
  m.call(this, e ?? 'canceled', m.ERR_CANCELED, t, n), (this.name = 'CanceledError');
}
a.inherits(q, m, { __CANCEL__: !0 });
function Je(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status)
    ? e(n)
    : t(
        new m(
          'Request failed with status code ' + n.status,
          [m.ERR_BAD_REQUEST, m.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
          n.config,
          n.request,
          n
        )
      );
}
function wn(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return (t && t[1]) || '';
}
function gn(e, t) {
  e = e || 10;
  const n = new Array(e),
    r = new Array(e);
  let s = 0,
    o = 0,
    i;
  return (
    (t = t !== void 0 ? t : 1e3),
    function (f) {
      const l = Date.now(),
        u = r[o];
      i || (i = l), (n[s] = f), (r[s] = l);
      let d = o,
        b = 0;
      for (; d !== s; ) (b += n[d++]), (d = d % e);
      if (((s = (s + 1) % e), s === o && (o = (o + 1) % e), l - i < t)) return;
      const w = u && l - u;
      return w ? Math.round((b * 1e3) / w) : void 0;
    }
  );
}
function En(e, t) {
  let n = 0,
    r = 1e3 / t,
    s,
    o;
  const i = (l, u = Date.now()) => {
    (n = u), (s = null), o && (clearTimeout(o), (o = null)), e.apply(null, l);
  };
  return [
    (...l) => {
      const u = Date.now(),
        d = u - n;
      d >= r
        ? i(l, u)
        : ((s = l),
          o ||
            (o = setTimeout(() => {
              (o = null), i(s);
            }, r - d)));
    },
    () => s && i(s),
  ];
}
const W = (e, t, n = 3) => {
    let r = 0;
    const s = gn(50, 250);
    return En((o) => {
      const i = o.loaded,
        c = o.lengthComputable ? o.total : void 0,
        f = i - r,
        l = s(f),
        u = i <= c;
      r = i;
      const d = {
        loaded: i,
        total: c,
        progress: c ? i / c : void 0,
        bytes: f,
        rate: l || void 0,
        estimated: l && c && u ? (c - i) / l : void 0,
        event: o,
        lengthComputable: c != null,
        [t ? 'download' : 'upload']: !0,
      };
      e(d);
    }, n);
  },
  Ee = (e, t) => {
    const n = e != null;
    return [(r) => t[0]({ lengthComputable: n, total: e, loaded: r }), t[1]];
  },
  Re =
    (e) =>
    (...t) =>
      a.asap(() => e(...t)),
  Rn = O.hasStandardBrowserEnv
    ? ((e, t) => (n) => (
        (n = new URL(n, O.origin)),
        e.protocol === n.protocol && e.host === n.host && (t || e.port === n.port)
      ))(new URL(O.origin), O.navigator && /(msie|trident)/i.test(O.navigator.userAgent))
    : () => !0,
  Sn = O.hasStandardBrowserEnv
    ? {
        write(e, t, n, r, s, o) {
          const i = [e + '=' + encodeURIComponent(t)];
          a.isNumber(n) && i.push('expires=' + new Date(n).toGMTString()),
            a.isString(r) && i.push('path=' + r),
            a.isString(s) && i.push('domain=' + s),
            o === !0 && i.push('secure'),
            (document.cookie = i.join('; '));
        },
        read(e) {
          const t = document.cookie.match(new RegExp('(^|;\\s*)(' + e + ')=([^;]*)'));
          return t ? decodeURIComponent(t[3]) : null;
        },
        remove(e) {
          this.write(e, '', Date.now() - 864e5);
        },
      }
    : {
        write() {},
        read() {
          return null;
        },
        remove() {},
      };
function xn(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function On(e, t) {
  return t ? e.replace(/\/?\/$/, '') + '/' + t.replace(/^\/+/, '') : e;
}
function Ve(e, t, n) {
  let r = !xn(t);
  return (e && r) || n == !1 ? On(e, t) : t;
}
const Se = (e) => (e instanceof A ? { ...e } : e);
function B(e, t) {
  t = t || {};
  const n = {};
  function r(l, u, d, b) {
    return a.isPlainObject(l) && a.isPlainObject(u)
      ? a.merge.call({ caseless: b }, l, u)
      : a.isPlainObject(u)
        ? a.merge({}, u)
        : a.isArray(u)
          ? u.slice()
          : u;
  }
  function s(l, u, d, b) {
    if (a.isUndefined(u)) {
      if (!a.isUndefined(l)) return r(void 0, l, d, b);
    } else return r(l, u, d, b);
  }
  function o(l, u) {
    if (!a.isUndefined(u)) return r(void 0, u);
  }
  function i(l, u) {
    if (a.isUndefined(u)) {
      if (!a.isUndefined(l)) return r(void 0, l);
    } else return r(void 0, u);
  }
  function c(l, u, d) {
    if (d in t) return r(l, u);
    if (d in e) return r(void 0, l);
  }
  const f = {
    url: o,
    method: o,
    data: o,
    baseURL: i,
    transformRequest: i,
    transformResponse: i,
    paramsSerializer: i,
    timeout: i,
    timeoutMessage: i,
    withCredentials: i,
    withXSRFToken: i,
    adapter: i,
    responseType: i,
    xsrfCookieName: i,
    xsrfHeaderName: i,
    onUploadProgress: i,
    onDownloadProgress: i,
    decompress: i,
    maxContentLength: i,
    maxBodyLength: i,
    beforeRedirect: i,
    transport: i,
    httpAgent: i,
    httpsAgent: i,
    cancelToken: i,
    socketPath: i,
    responseEncoding: i,
    validateStatus: c,
    headers: (l, u, d) => s(Se(l), Se(u), d, !0),
  };
  return (
    a.forEach(Object.keys(Object.assign({}, e, t)), function (u) {
      const d = f[u] || s,
        b = d(e[u], t[u], u);
      (a.isUndefined(b) && d !== c) || (n[u] = b);
    }),
    n
  );
}
const We = (e) => {
    const t = B({}, e);
    let {
      data: n,
      withXSRFToken: r,
      xsrfHeaderName: s,
      xsrfCookieName: o,
      headers: i,
      auth: c,
    } = t;
    (t.headers = i = A.from(i)),
      (t.url = $e(Ve(t.baseURL, t.url, t.allowAbsoluteUrls), e.params, e.paramsSerializer)),
      c &&
        i.set(
          'Authorization',
          'Basic ' +
            btoa(
              (c.username || '') +
                ':' +
                (c.password ? unescape(encodeURIComponent(c.password)) : '')
            )
        );
    let f;
    if (a.isFormData(n)) {
      if (O.hasStandardBrowserEnv || O.hasStandardBrowserWebWorkerEnv) i.setContentType(void 0);
      else if ((f = i.getContentType()) !== !1) {
        const [l, ...u] = f
          ? f
              .split(';')
              .map((d) => d.trim())
              .filter(Boolean)
          : [];
        i.setContentType([l || 'multipart/form-data', ...u].join('; '));
      }
    }
    if (
      O.hasStandardBrowserEnv &&
      (r && a.isFunction(r) && (r = r(t)), r || (r !== !1 && Rn(t.url)))
    ) {
      const l = s && o && Sn.read(o);
      l && i.set(s, l);
    }
    return t;
  },
  Tn = typeof XMLHttpRequest < 'u',
  An =
    Tn &&
    function (e) {
      return new Promise(function (n, r) {
        const s = We(e);
        let o = s.data;
        const i = A.from(s.headers).normalize();
        let { responseType: c, onUploadProgress: f, onDownloadProgress: l } = s,
          u,
          d,
          b,
          w,
          p;
        function y() {
          w && w(),
            p && p(),
            s.cancelToken && s.cancelToken.unsubscribe(u),
            s.signal && s.signal.removeEventListener('abort', u);
        }
        let h = new XMLHttpRequest();
        h.open(s.method.toUpperCase(), s.url, !0), (h.timeout = s.timeout);
        function g() {
          if (!h) return;
          const S = A.from('getAllResponseHeaders' in h && h.getAllResponseHeaders()),
            T = {
              data: !c || c === 'text' || c === 'json' ? h.responseText : h.response,
              status: h.status,
              statusText: h.statusText,
              headers: S,
              config: e,
              request: h,
            };
          Je(
            function (F) {
              n(F), y();
            },
            function (F) {
              r(F), y();
            },
            T
          ),
            (h = null);
        }
        'onloadend' in h
          ? (h.onloadend = g)
          : (h.onreadystatechange = function () {
              !h ||
                h.readyState !== 4 ||
                (h.status === 0 && !(h.responseURL && h.responseURL.indexOf('file:') === 0)) ||
                setTimeout(g);
            }),
          (h.onabort = function () {
            h && (r(new m('Request aborted', m.ECONNABORTED, e, h)), (h = null));
          }),
          (h.onerror = function () {
            r(new m('Network Error', m.ERR_NETWORK, e, h)), (h = null);
          }),
          (h.ontimeout = function () {
            let L = s.timeout ? 'timeout of ' + s.timeout + 'ms exceeded' : 'timeout exceeded';
            const T = s.transitional || Me;
            s.timeoutErrorMessage && (L = s.timeoutErrorMessage),
              r(new m(L, T.clarifyTimeoutError ? m.ETIMEDOUT : m.ECONNABORTED, e, h)),
              (h = null);
          }),
          o === void 0 && i.setContentType(null),
          'setRequestHeader' in h &&
            a.forEach(i.toJSON(), function (L, T) {
              h.setRequestHeader(T, L);
            }),
          a.isUndefined(s.withCredentials) || (h.withCredentials = !!s.withCredentials),
          c && c !== 'json' && (h.responseType = s.responseType),
          l && (([b, p] = W(l, !0)), h.addEventListener('progress', b)),
          f &&
            h.upload &&
            (([d, w] = W(f)),
            h.upload.addEventListener('progress', d),
            h.upload.addEventListener('loadend', w)),
          (s.cancelToken || s.signal) &&
            ((u = (S) => {
              h && (r(!S || S.type ? new q(null, e, h) : S), h.abort(), (h = null));
            }),
            s.cancelToken && s.cancelToken.subscribe(u),
            s.signal && (s.signal.aborted ? u() : s.signal.addEventListener('abort', u)));
        const R = wn(s.url);
        if (R && O.protocols.indexOf(R) === -1) {
          r(new m('Unsupported protocol ' + R + ':', m.ERR_BAD_REQUEST, e));
          return;
        }
        h.send(o || null);
      });
    },
  Cn = (e, t) => {
    const { length: n } = (e = e ? e.filter(Boolean) : []);
    if (t || n) {
      let r = new AbortController(),
        s;
      const o = function (l) {
        if (!s) {
          (s = !0), c();
          const u = l instanceof Error ? l : this.reason;
          r.abort(u instanceof m ? u : new q(u instanceof Error ? u.message : u));
        }
      };
      let i =
        t &&
        setTimeout(() => {
          (i = null), o(new m(`timeout ${t} of ms exceeded`, m.ETIMEDOUT));
        }, t);
      const c = () => {
        e &&
          (i && clearTimeout(i),
          (i = null),
          e.forEach((l) => {
            l.unsubscribe ? l.unsubscribe(o) : l.removeEventListener('abort', o);
          }),
          (e = null));
      };
      e.forEach((l) => l.addEventListener('abort', o));
      const { signal: f } = r;
      return (f.unsubscribe = () => a.asap(c)), f;
    }
  },
  Nn = function* (e, t) {
    let n = e.byteLength;
    if (n < t) {
      yield e;
      return;
    }
    let r = 0,
      s;
    for (; r < n; ) (s = r + t), yield e.slice(r, s), (r = s);
  },
  Un = async function* (e, t) {
    for await (const n of Pn(e)) yield* Nn(n, t);
  },
  Pn = async function* (e) {
    if (e[Symbol.asyncIterator]) {
      yield* e;
      return;
    }
    const t = e.getReader();
    try {
      for (;;) {
        const { done: n, value: r } = await t.read();
        if (n) break;
        yield r;
      }
    } finally {
      await t.cancel();
    }
  },
  xe = (e, t, n, r) => {
    const s = Un(e, t);
    let o = 0,
      i,
      c = (f) => {
        i || ((i = !0), r && r(f));
      };
    return new ReadableStream(
      {
        async pull(f) {
          try {
            const { done: l, value: u } = await s.next();
            if (l) {
              c(), f.close();
              return;
            }
            let d = u.byteLength;
            if (n) {
              let b = (o += d);
              n(b);
            }
            f.enqueue(new Uint8Array(u));
          } catch (l) {
            throw (c(l), l);
          }
        },
        cancel(f) {
          return c(f), s.return();
        },
      },
      { highWaterMark: 2 }
    );
  },
  Y = typeof fetch == 'function' && typeof Request == 'function' && typeof Response == 'function',
  Ke = Y && typeof ReadableStream == 'function',
  Ln =
    Y &&
    (typeof TextEncoder == 'function'
      ? (
          (e) => (t) =>
            e.encode(t)
        )(new TextEncoder())
      : async (e) => new Uint8Array(await new Response(e).arrayBuffer())),
  Xe = (e, ...t) => {
    try {
      return !!e(...t);
    } catch {
      return !1;
    }
  },
  _n =
    Ke &&
    Xe(() => {
      let e = !1;
      const t = new Request(O.origin, {
        body: new ReadableStream(),
        method: 'POST',
        get duplex() {
          return (e = !0), 'half';
        },
      }).headers.has('Content-Type');
      return e && !t;
    }),
  Oe = 64 * 1024,
  ae = Ke && Xe(() => a.isReadableStream(new Response('').body)),
  K = { stream: ae && ((e) => e.body) };
Y &&
  ((e) => {
    ['text', 'arrayBuffer', 'blob', 'formData', 'stream'].forEach((t) => {
      !K[t] &&
        (K[t] = a.isFunction(e[t])
          ? (n) => n[t]()
          : (n, r) => {
              throw new m(`Response type '${t}' is not supported`, m.ERR_NOT_SUPPORT, r);
            });
    });
  })(new Response());
const Fn = async (e) => {
    if (e == null) return 0;
    if (a.isBlob(e)) return e.size;
    if (a.isSpecCompliantForm(e))
      return (await new Request(O.origin, { method: 'POST', body: e }).arrayBuffer()).byteLength;
    if (a.isArrayBufferView(e) || a.isArrayBuffer(e)) return e.byteLength;
    if ((a.isURLSearchParams(e) && (e = e + ''), a.isString(e))) return (await Ln(e)).byteLength;
  },
  kn = async (e, t) => {
    const n = a.toFiniteNumber(e.getContentLength());
    return n ?? Fn(t);
  },
  jn =
    Y &&
    (async (e) => {
      let {
        url: t,
        method: n,
        data: r,
        signal: s,
        cancelToken: o,
        timeout: i,
        onDownloadProgress: c,
        onUploadProgress: f,
        responseType: l,
        headers: u,
        withCredentials: d = 'same-origin',
        fetchOptions: b,
      } = We(e);
      l = l ? (l + '').toLowerCase() : 'text';
      let w = Cn([s, o && o.toAbortSignal()], i),
        p;
      const y =
        w &&
        w.unsubscribe &&
        (() => {
          w.unsubscribe();
        });
      let h;
      try {
        if (f && _n && n !== 'get' && n !== 'head' && (h = await kn(u, r)) !== 0) {
          let T = new Request(t, { method: 'POST', body: r, duplex: 'half' }),
            _;
          if (
            (a.isFormData(r) && (_ = T.headers.get('content-type')) && u.setContentType(_), T.body)
          ) {
            const [F, z] = Ee(h, W(Re(f)));
            r = xe(T.body, Oe, F, z);
          }
        }
        a.isString(d) || (d = d ? 'include' : 'omit');
        const g = 'credentials' in Request.prototype;
        p = new Request(t, {
          ...b,
          signal: w,
          method: n.toUpperCase(),
          headers: u.normalize().toJSON(),
          body: r,
          duplex: 'half',
          credentials: g ? d : void 0,
        });
        let R = await fetch(p);
        const S = ae && (l === 'stream' || l === 'response');
        if (ae && (c || (S && y))) {
          const T = {};
          ['status', 'statusText', 'headers'].forEach((pe) => {
            T[pe] = R[pe];
          });
          const _ = a.toFiniteNumber(R.headers.get('content-length')),
            [F, z] = (c && Ee(_, W(Re(c), !0))) || [];
          R = new Response(
            xe(R.body, Oe, F, () => {
              z && z(), y && y();
            }),
            T
          );
        }
        l = l || 'text';
        let L = await K[a.findKey(K, l) || 'text'](R, e);
        return (
          !S && y && y(),
          await new Promise((T, _) => {
            Je(T, _, {
              data: L,
              headers: A.from(R.headers),
              status: R.status,
              statusText: R.statusText,
              config: e,
              request: p,
            });
          })
        );
      } catch (g) {
        throw (
          (y && y(),
          g && g.name === 'TypeError' && /fetch/i.test(g.message)
            ? Object.assign(new m('Network Error', m.ERR_NETWORK, e, p), { cause: g.cause || g })
            : m.from(g, g && g.code, e, p))
        );
      }
    }),
  ce = { http: Xt, xhr: An, fetch: jn };
a.forEach(ce, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, 'name', { value: t });
    } catch {}
    Object.defineProperty(e, 'adapterName', { value: t });
  }
});
const Te = (e) => `- ${e}`,
  Bn = (e) => a.isFunction(e) || e === null || e === !1,
  Ge = {
    getAdapter: (e) => {
      e = a.isArray(e) ? e : [e];
      const { length: t } = e;
      let n, r;
      const s = {};
      for (let o = 0; o < t; o++) {
        n = e[o];
        let i;
        if (((r = n), !Bn(n) && ((r = ce[(i = String(n)).toLowerCase()]), r === void 0)))
          throw new m(`Unknown adapter '${i}'`);
        if (r) break;
        s[i || '#' + o] = r;
      }
      if (!r) {
        const o = Object.entries(s).map(
          ([c, f]) =>
            `adapter ${c} ` +
            (f === !1 ? 'is not supported by the environment' : 'is not available in the build')
        );
        let i = t
          ? o.length > 1
            ? `since :
` +
              o.map(Te).join(`
`)
            : ' ' + Te(o[0])
          : 'as no adapter specified';
        throw new m('There is no suitable adapter to dispatch the request ' + i, 'ERR_NOT_SUPPORT');
      }
      return r;
    },
    adapters: ce,
  };
function re(e) {
  if ((e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted))
    throw new q(null, e);
}
function Ae(e) {
  return (
    re(e),
    (e.headers = A.from(e.headers)),
    (e.data = ne.call(e, e.transformRequest)),
    ['post', 'put', 'patch'].indexOf(e.method) !== -1 &&
      e.headers.setContentType('application/x-www-form-urlencoded', !1),
    Ge.getAdapter(e.adapter || M.adapter)(e).then(
      function (r) {
        return (
          re(e), (r.data = ne.call(e, e.transformResponse, r)), (r.headers = A.from(r.headers)), r
        );
      },
      function (r) {
        return (
          ve(r) ||
            (re(e),
            r &&
              r.response &&
              ((r.response.data = ne.call(e, e.transformResponse, r.response)),
              (r.response.headers = A.from(r.response.headers)))),
          Promise.reject(r)
        );
      }
    )
  );
}
const Ze = '1.8.3',
  ee = {};
['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach((e, t) => {
  ee[e] = function (r) {
    return typeof r === e || 'a' + (t < 1 ? 'n ' : ' ') + e;
  };
});
const Ce = {};
ee.transitional = function (t, n, r) {
  function s(o, i) {
    return '[Axios v' + Ze + "] Transitional option '" + o + "'" + i + (r ? '. ' + r : '');
  }
  return (o, i, c) => {
    if (t === !1) throw new m(s(i, ' has been removed' + (n ? ' in ' + n : '')), m.ERR_DEPRECATED);
    return (
      n &&
        !Ce[i] &&
        ((Ce[i] = !0),
        console.warn(
          s(i, ' has been deprecated since v' + n + ' and will be removed in the near future')
        )),
      t ? t(o, i, c) : !0
    );
  };
};
ee.spelling = function (t) {
  return (n, r) => (console.warn(`${r} is likely a misspelling of ${t}`), !0);
};
function Dn(e, t, n) {
  if (typeof e != 'object') throw new m('options must be an object', m.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let s = r.length;
  for (; s-- > 0; ) {
    const o = r[s],
      i = t[o];
    if (i) {
      const c = e[o],
        f = c === void 0 || i(c, o, e);
      if (f !== !0) throw new m('option ' + o + ' must be ' + f, m.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0) throw new m('Unknown option ' + o, m.ERR_BAD_OPTION);
  }
}
const V = { assertOptions: Dn, validators: ee },
  U = V.validators;
let j = class {
  constructor(t) {
    (this.defaults = t), (this.interceptors = { request: new we(), response: new we() });
  }
  async request(t, n) {
    try {
      return await this._request(t, n);
    } catch (r) {
      if (r instanceof Error) {
        let s = {};
        Error.captureStackTrace ? Error.captureStackTrace(s) : (s = new Error());
        const o = s.stack ? s.stack.replace(/^.+\n/, '') : '';
        try {
          r.stack
            ? o &&
              !String(r.stack).endsWith(o.replace(/^.+\n.+\n/, '')) &&
              (r.stack +=
                `
` + o)
            : (r.stack = o);
        } catch {}
      }
      throw r;
    }
  }
  _request(t, n) {
    typeof t == 'string' ? ((n = n || {}), (n.url = t)) : (n = t || {}), (n = B(this.defaults, n));
    const { transitional: r, paramsSerializer: s, headers: o } = n;
    r !== void 0 &&
      V.assertOptions(
        r,
        {
          silentJSONParsing: U.transitional(U.boolean),
          forcedJSONParsing: U.transitional(U.boolean),
          clarifyTimeoutError: U.transitional(U.boolean),
        },
        !1
      ),
      s != null &&
        (a.isFunction(s)
          ? (n.paramsSerializer = { serialize: s })
          : V.assertOptions(s, { encode: U.function, serialize: U.function }, !0)),
      n.allowAbsoluteUrls !== void 0 ||
        (this.defaults.allowAbsoluteUrls !== void 0
          ? (n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls)
          : (n.allowAbsoluteUrls = !0)),
      V.assertOptions(
        n,
        { baseUrl: U.spelling('baseURL'), withXsrfToken: U.spelling('withXSRFToken') },
        !0
      ),
      (n.method = (n.method || this.defaults.method || 'get').toLowerCase());
    let i = o && a.merge(o.common, o[n.method]);
    o &&
      a.forEach(['delete', 'get', 'head', 'post', 'put', 'patch', 'common'], (p) => {
        delete o[p];
      }),
      (n.headers = A.concat(i, o));
    const c = [];
    let f = !0;
    this.interceptors.request.forEach(function (y) {
      (typeof y.runWhen == 'function' && y.runWhen(n) === !1) ||
        ((f = f && y.synchronous), c.unshift(y.fulfilled, y.rejected));
    });
    const l = [];
    this.interceptors.response.forEach(function (y) {
      l.push(y.fulfilled, y.rejected);
    });
    let u,
      d = 0,
      b;
    if (!f) {
      const p = [Ae.bind(this), void 0];
      for (p.unshift.apply(p, c), p.push.apply(p, l), b = p.length, u = Promise.resolve(n); d < b; )
        u = u.then(p[d++], p[d++]);
      return u;
    }
    b = c.length;
    let w = n;
    for (d = 0; d < b; ) {
      const p = c[d++],
        y = c[d++];
      try {
        w = p(w);
      } catch (h) {
        y.call(this, h);
        break;
      }
    }
    try {
      u = Ae.call(this, w);
    } catch (p) {
      return Promise.reject(p);
    }
    for (d = 0, b = l.length; d < b; ) u = u.then(l[d++], l[d++]);
    return u;
  }
  getUri(t) {
    t = B(this.defaults, t);
    const n = Ve(t.baseURL, t.url, t.allowAbsoluteUrls);
    return $e(n, t.params, t.paramsSerializer);
  }
};
a.forEach(['delete', 'get', 'head', 'options'], function (t) {
  j.prototype[t] = function (n, r) {
    return this.request(B(r || {}, { method: t, url: n, data: (r || {}).data }));
  };
});
a.forEach(['post', 'put', 'patch'], function (t) {
  function n(r) {
    return function (o, i, c) {
      return this.request(
        B(c || {}, {
          method: t,
          headers: r ? { 'Content-Type': 'multipart/form-data' } : {},
          url: o,
          data: i,
        })
      );
    };
  }
  (j.prototype[t] = n()), (j.prototype[t + 'Form'] = n(!0));
});
let qn = class Qe {
  constructor(t) {
    if (typeof t != 'function') throw new TypeError('executor must be a function.');
    let n;
    this.promise = new Promise(function (o) {
      n = o;
    });
    const r = this;
    this.promise.then((s) => {
      if (!r._listeners) return;
      let o = r._listeners.length;
      for (; o-- > 0; ) r._listeners[o](s);
      r._listeners = null;
    }),
      (this.promise.then = (s) => {
        let o;
        const i = new Promise((c) => {
          r.subscribe(c), (o = c);
        }).then(s);
        return (
          (i.cancel = function () {
            r.unsubscribe(o);
          }),
          i
        );
      }),
      t(function (o, i, c) {
        r.reason || ((r.reason = new q(o, i, c)), n(r.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : (this._listeners = [t]);
  }
  unsubscribe(t) {
    if (!this._listeners) return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  toAbortSignal() {
    const t = new AbortController(),
      n = (r) => {
        t.abort(r);
      };
    return this.subscribe(n), (t.signal.unsubscribe = () => this.unsubscribe(n)), t.signal;
  }
  static source() {
    let t;
    return {
      token: new Qe(function (s) {
        t = s;
      }),
      cancel: t,
    };
  }
};
function In(e) {
  return function (n) {
    return e.apply(null, n);
  };
}
function Hn(e) {
  return a.isObject(e) && e.isAxiosError === !0;
}
const le = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};
Object.entries(le).forEach(([e, t]) => {
  le[t] = e;
});
function Ye(e) {
  const t = new j(e),
    n = Pe(j.prototype.request, t);
  return (
    a.extend(n, j.prototype, t, { allOwnKeys: !0 }),
    a.extend(n, t, null, { allOwnKeys: !0 }),
    (n.create = function (s) {
      return Ye(B(e, s));
    }),
    n
  );
}
const E = Ye(M);
E.Axios = j;
E.CanceledError = q;
E.CancelToken = qn;
E.isCancel = ve;
E.VERSION = Ze;
E.toFormData = Q;
E.AxiosError = m;
E.Cancel = E.CanceledError;
E.all = function (t) {
  return Promise.all(t);
};
E.spread = In;
E.isAxiosError = Hn;
E.mergeConfig = B;
E.AxiosHeaders = A;
E.formToJSON = (e) => ze(a.isHTMLForm(e) ? new FormData(e) : e);
E.getAdapter = Ge.getAdapter;
E.HttpStatusCode = le;
E.default = E;
const {
    Axios: Vn,
    AxiosError: Wn,
    CanceledError: Kn,
    isCancel: Xn,
    CancelToken: Gn,
    VERSION: Zn,
    all: Qn,
    Cancel: Yn,
    isAxiosError: er,
    spread: tr,
    toFormData: nr,
    AxiosHeaders: rr,
    HttpStatusCode: sr,
    formToJSON: or,
    getAdapter: ir,
    mergeConfig: ar,
  } = E,
  $n = 'http://localhost:4000/',
  cr = et(function () {
    const [t, n] = P.useState(''),
      [r, s] = P.useState(''),
      [o, i] = P.useState(!1),
      [c, f] = P.useState(''),
      [l, u] = P.useState(!1),
      d = async () => {
        if ((u(!0), !t)) {
          f('Please enter a valid URL');
          return;
        }
        try {
          const w = await E.post('http://localhost:4000/shorten', { url: t });
          s(`${$n}${w.data.shortUrl.slug}`), f('');
        } catch (w) {
          w.response.data.error === 'Invalid URL'
            ? f('The URL is invalid. Please, give a correct URL format.')
            : w.response.data.includes('Entity already exists')
              ? f('Failed to shorten URL. The URL already exists.')
              : f('Failed to shorten URL. Please try again.');
        }
      },
      b = () => {
        navigator.clipboard.writeText(r), i(!0), setTimeout(() => i(!1), 2e3);
      };
    return x.jsx('div', {
      className: 'flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4',
      children: x.jsxs(tt, {
        className: 'w-full max-w-md p-6 bg-white shadow-lg rounded-lg',
        children: [
          x.jsx('h1', {
            className: 'text-2xl font-bold mb-4 text-black',
            children: 'URL Shortener',
          }),
          x.jsx('h3', {
            className: 'text-md font-bold mb-6 mt-10 text-black',
            children: 'Enter URL to shorten',
          }),
          x.jsx(rt, {
            placeholder: 'Enter URL',
            value: t,
            onChange: (w) => {
              n(w.target.value), u(!1), f('');
            },
            className: 'mb-6 text-black w-full',
          }),
          x.jsx(he, {
            onClick: d,
            disabled: l,
            className: 'w-full text-gray',
            children: 'Shorten',
          }),
          c && x.jsx('p', { className: 'text-red-500 mt-2', children: c }),
          r &&
            x.jsxs(nt, {
              className: 'mt-4 flex justify-between items-center border p-2 rounded',
              children: [
                x.jsx('a', {
                  href: r,
                  target: '_blank',
                  rel: 'noopener noreferrer',
                  className: 'text-blue-500',
                  children: r,
                }),
                x.jsx(he, {
                  onClick: b,
                  children: o ? x.jsx(ct, { size: 16 }) : x.jsx(ut, { size: 16 }),
                }),
              ],
            }),
        ],
      }),
    });
  });
export { cr as default };
