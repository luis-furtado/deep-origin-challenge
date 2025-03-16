var Da = Object.defineProperty;
var _a = (e, t, r) =>
  t in e ? Da(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (e[t] = r);
var gt = (e, t, r) => _a(e, typeof t != 'symbol' ? t + '' : t, r);
var bn = { exports: {} },
  kt = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ka = Symbol.for('react.transitional.element'),
  Oa = Symbol.for('react.fragment');
function Sn(e, t, r) {
  var n = null;
  if ((r !== void 0 && (n = '' + r), t.key !== void 0 && (n = '' + t.key), 'key' in t)) {
    r = {};
    for (var a in t) a !== 'key' && (r[a] = t[a]);
  } else r = t;
  return (t = r.ref), { $$typeof: ka, type: e, key: n, ref: t !== void 0 ? t : null, props: r };
}
kt.Fragment = Oa;
kt.jsx = Sn;
kt.jsxs = Sn;
bn.exports = kt;
var Hl = bn.exports,
  xn = { exports: {} },
  F = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ir = Symbol.for('react.transitional.element'),
  Aa = Symbol.for('react.portal'),
  $a = Symbol.for('react.fragment'),
  Na = Symbol.for('react.strict_mode'),
  Ia = Symbol.for('react.profiler'),
  Fa = Symbol.for('react.consumer'),
  ja = Symbol.for('react.context'),
  Ua = Symbol.for('react.forward_ref'),
  Ha = Symbol.for('react.suspense'),
  Ba = Symbol.for('react.memo'),
  Ln = Symbol.for('react.lazy'),
  Br = Symbol.iterator;
function za(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (Br && e[Br]) || e['@@iterator']), typeof e == 'function' ? e : null);
}
var Cn = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Pn = Object.assign,
  Tn = {};
function Be(e, t, r) {
  (this.props = e), (this.context = t), (this.refs = Tn), (this.updater = r || Cn);
}
Be.prototype.isReactComponent = {};
Be.prototype.setState = function (e, t) {
  if (typeof e != 'object' && typeof e != 'function' && e != null)
    throw Error(
      'takes an object of state variables to update or a function which returns an object of state variables.'
    );
  this.updater.enqueueSetState(this, e, t, 'setState');
};
Be.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
};
function Mn() {}
Mn.prototype = Be.prototype;
function lr(e, t, r) {
  (this.props = e), (this.context = t), (this.refs = Tn), (this.updater = r || Cn);
}
var sr = (lr.prototype = new Mn());
sr.constructor = lr;
Pn(sr, Be.prototype);
sr.isPureReactComponent = !0;
var zr = Array.isArray,
  Y = { H: null, A: null, T: null, S: null },
  Dn = Object.prototype.hasOwnProperty;
function ur(e, t, r, n, a, o) {
  return (r = o.ref), { $$typeof: ir, type: e, key: t, ref: r !== void 0 ? r : null, props: o };
}
function Ya(e, t) {
  return ur(e.type, t, void 0, void 0, void 0, e.props);
}
function cr(e) {
  return typeof e == 'object' && e !== null && e.$$typeof === ir;
}
function Wa(e) {
  var t = { '=': '=0', ':': '=2' };
  return (
    '$' +
    e.replace(/[=:]/g, function (r) {
      return t[r];
    })
  );
}
var Yr = /\/+/g;
function Bt(e, t) {
  return typeof e == 'object' && e !== null && e.key != null ? Wa('' + e.key) : t.toString(36);
}
function Wr() {}
function Va(e) {
  switch (e.status) {
    case 'fulfilled':
      return e.value;
    case 'rejected':
      throw e.reason;
    default:
      switch (
        (typeof e.status == 'string'
          ? e.then(Wr, Wr)
          : ((e.status = 'pending'),
            e.then(
              function (t) {
                e.status === 'pending' && ((e.status = 'fulfilled'), (e.value = t));
              },
              function (t) {
                e.status === 'pending' && ((e.status = 'rejected'), (e.reason = t));
              }
            )),
        e.status)
      ) {
        case 'fulfilled':
          return e.value;
        case 'rejected':
          throw e.reason;
      }
  }
  throw e;
}
function He(e, t, r, n, a) {
  var o = typeof e;
  (o === 'undefined' || o === 'boolean') && (e = null);
  var l = !1;
  if (e === null) l = !0;
  else
    switch (o) {
      case 'bigint':
      case 'string':
      case 'number':
        l = !0;
        break;
      case 'object':
        switch (e.$$typeof) {
          case ir:
          case Aa:
            l = !0;
            break;
          case Ln:
            return (l = e._init), He(l(e._payload), t, r, n, a);
        }
    }
  if (l)
    return (
      (a = a(e)),
      (l = n === '' ? '.' + Bt(e, 0) : n),
      zr(a)
        ? ((r = ''),
          l != null && (r = l.replace(Yr, '$&/') + '/'),
          He(a, t, r, '', function (u) {
            return u;
          }))
        : a != null &&
          (cr(a) &&
            (a = Ya(
              a,
              r +
                (a.key == null || (e && e.key === a.key)
                  ? ''
                  : ('' + a.key).replace(Yr, '$&/') + '/') +
                l
            )),
          t.push(a)),
      1
    );
  l = 0;
  var s = n === '' ? '.' : n + ':';
  if (zr(e))
    for (var i = 0; i < e.length; i++) (n = e[i]), (o = s + Bt(n, i)), (l += He(n, t, r, o, a));
  else if (((i = za(e)), typeof i == 'function'))
    for (e = i.call(e), i = 0; !(n = e.next()).done; )
      (n = n.value), (o = s + Bt(n, i++)), (l += He(n, t, r, o, a));
  else if (o === 'object') {
    if (typeof e.then == 'function') return He(Va(e), t, r, n, a);
    throw (
      ((t = String(e)),
      Error(
        'Objects are not valid as a React child (found: ' +
          (t === '[object Object]' ? 'object with keys {' + Object.keys(e).join(', ') + '}' : t) +
          '). If you meant to render a collection of children, use an array instead.'
      ))
    );
  }
  return l;
}
function wt(e, t, r) {
  if (e == null) return e;
  var n = [],
    a = 0;
  return (
    He(e, n, '', '', function (o) {
      return t.call(r, o, a++);
    }),
    n
  );
}
function Ja(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (r) {
          (e._status === 0 || e._status === -1) && ((e._status = 1), (e._result = r));
        },
        function (r) {
          (e._status === 0 || e._status === -1) && ((e._status = 2), (e._result = r));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Vr =
  typeof reportError == 'function'
    ? reportError
    : function (e) {
        if (typeof window == 'object' && typeof window.ErrorEvent == 'function') {
          var t = new window.ErrorEvent('error', {
            bubbles: !0,
            cancelable: !0,
            message:
              typeof e == 'object' && e !== null && typeof e.message == 'string'
                ? String(e.message)
                : String(e),
            error: e,
          });
          if (!window.dispatchEvent(t)) return;
        } else if (typeof process == 'object' && typeof process.emit == 'function') {
          process.emit('uncaughtException', e);
          return;
        }
        console.error(e);
      };
function Ga() {}
F.Children = {
  map: wt,
  forEach: function (e, t, r) {
    wt(
      e,
      function () {
        t.apply(this, arguments);
      },
      r
    );
  },
  count: function (e) {
    var t = 0;
    return (
      wt(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      wt(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!cr(e))
      throw Error('React.Children.only expected to receive a single React element child.');
    return e;
  },
};
F.Component = Be;
F.Fragment = $a;
F.Profiler = Ia;
F.PureComponent = lr;
F.StrictMode = Na;
F.Suspense = Ha;
F.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Y;
F.act = function () {
  throw Error('act(...) is not supported in production builds of React.');
};
F.cache = function (e) {
  return function () {
    return e.apply(null, arguments);
  };
};
F.cloneElement = function (e, t, r) {
  if (e == null) throw Error('The argument must be a React element, but you passed ' + e + '.');
  var n = Pn({}, e.props),
    a = e.key,
    o = void 0;
  if (t != null)
    for (l in (t.ref !== void 0 && (o = void 0), t.key !== void 0 && (a = '' + t.key), t))
      !Dn.call(t, l) ||
        l === 'key' ||
        l === '__self' ||
        l === '__source' ||
        (l === 'ref' && t.ref === void 0) ||
        (n[l] = t[l]);
  var l = arguments.length - 2;
  if (l === 1) n.children = r;
  else if (1 < l) {
    for (var s = Array(l), i = 0; i < l; i++) s[i] = arguments[i + 2];
    n.children = s;
  }
  return ur(e.type, a, void 0, void 0, o, n);
};
F.createContext = function (e) {
  return (
    (e = {
      $$typeof: ja,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
    }),
    (e.Provider = e),
    (e.Consumer = { $$typeof: Fa, _context: e }),
    e
  );
};
F.createElement = function (e, t, r) {
  var n,
    a = {},
    o = null;
  if (t != null)
    for (n in (t.key !== void 0 && (o = '' + t.key), t))
      Dn.call(t, n) && n !== 'key' && n !== '__self' && n !== '__source' && (a[n] = t[n]);
  var l = arguments.length - 2;
  if (l === 1) a.children = r;
  else if (1 < l) {
    for (var s = Array(l), i = 0; i < l; i++) s[i] = arguments[i + 2];
    a.children = s;
  }
  if (e && e.defaultProps) for (n in ((l = e.defaultProps), l)) a[n] === void 0 && (a[n] = l[n]);
  return ur(e, o, void 0, void 0, null, a);
};
F.createRef = function () {
  return { current: null };
};
F.forwardRef = function (e) {
  return { $$typeof: Ua, render: e };
};
F.isValidElement = cr;
F.lazy = function (e) {
  return { $$typeof: Ln, _payload: { _status: -1, _result: e }, _init: Ja };
};
F.memo = function (e, t) {
  return { $$typeof: Ba, type: e, compare: t === void 0 ? null : t };
};
F.startTransition = function (e) {
  var t = Y.T,
    r = {};
  Y.T = r;
  try {
    var n = e(),
      a = Y.S;
    a !== null && a(r, n),
      typeof n == 'object' && n !== null && typeof n.then == 'function' && n.then(Ga, Vr);
  } catch (o) {
    Vr(o);
  } finally {
    Y.T = t;
  }
};
F.unstable_useCacheRefresh = function () {
  return Y.H.useCacheRefresh();
};
F.use = function (e) {
  return Y.H.use(e);
};
F.useActionState = function (e, t, r) {
  return Y.H.useActionState(e, t, r);
};
F.useCallback = function (e, t) {
  return Y.H.useCallback(e, t);
};
F.useContext = function (e) {
  return Y.H.useContext(e);
};
F.useDebugValue = function () {};
F.useDeferredValue = function (e, t) {
  return Y.H.useDeferredValue(e, t);
};
F.useEffect = function (e, t) {
  return Y.H.useEffect(e, t);
};
F.useId = function () {
  return Y.H.useId();
};
F.useImperativeHandle = function (e, t, r) {
  return Y.H.useImperativeHandle(e, t, r);
};
F.useInsertionEffect = function (e, t) {
  return Y.H.useInsertionEffect(e, t);
};
F.useLayoutEffect = function (e, t) {
  return Y.H.useLayoutEffect(e, t);
};
F.useMemo = function (e, t) {
  return Y.H.useMemo(e, t);
};
F.useOptimistic = function (e, t) {
  return Y.H.useOptimistic(e, t);
};
F.useReducer = function (e, t, r) {
  return Y.H.useReducer(e, t, r);
};
F.useRef = function (e) {
  return Y.H.useRef(e);
};
F.useState = function (e) {
  return Y.H.useState(e);
};
F.useSyncExternalStore = function (e, t, r) {
  return Y.H.useSyncExternalStore(e, t, r);
};
F.useTransition = function () {
  return Y.H.useTransition();
};
F.version = '19.0.0';
xn.exports = F;
var f = xn.exports,
  Xa = -1,
  Ka = -2,
  qa = -3,
  Qa = -4,
  Za = -5,
  eo = -6,
  to = -7,
  ro = 'B',
  no = 'D',
  _n = 'E',
  ao = 'M',
  oo = 'N',
  kn = 'P',
  io = 'R',
  lo = 'S',
  so = 'Y',
  uo = 'U',
  co = 'Z',
  On = class {
    constructor() {
      gt(this, 'promise');
      gt(this, 'resolve');
      gt(this, 'reject');
      this.promise = new Promise((t, r) => {
        (this.resolve = t), (this.reject = r);
      });
    }
  };
function fo() {
  const e = new TextDecoder();
  let t = '';
  return new TransformStream({
    transform(r, n) {
      const a = e.decode(r, { stream: !0 }),
        o = (t + a).split(`
`);
      t = o.pop() || '';
      for (const l of o) n.enqueue(l);
    },
    flush(r) {
      t && r.enqueue(t);
    },
  });
}
Object.getOwnPropertyNames(Object.prototype).sort().join('\0');
var zt = typeof window < 'u' ? window : typeof globalThis < 'u' ? globalThis : void 0;
function qt(e) {
  const { hydrated: t, values: r } = this;
  if (typeof e == 'number') return Jr.call(this, e);
  if (!Array.isArray(e) || !e.length) throw new SyntaxError();
  const n = r.length;
  for (const a of e) r.push(a);
  return (t.length = r.length), Jr.call(this, n);
}
function Jr(e) {
  const { hydrated: t, values: r, deferred: n, plugins: a } = this;
  let o;
  const l = [
    [
      e,
      (i) => {
        o = i;
      },
    ],
  ];
  let s = [];
  for (; l.length > 0; ) {
    const [i, u] = l.pop();
    switch (i) {
      case to:
        u(void 0);
        continue;
      case Za:
        u(null);
        continue;
      case Ka:
        u(NaN);
        continue;
      case eo:
        u(1 / 0);
        continue;
      case qa:
        u(-1 / 0);
        continue;
      case Qa:
        u(-0);
        continue;
    }
    if (t[i]) {
      u(t[i]);
      continue;
    }
    const d = r[i];
    if (!d || typeof d != 'object') {
      (t[i] = d), u(d);
      continue;
    }
    if (Array.isArray(d))
      if (typeof d[0] == 'string') {
        const [m, y, w] = d;
        switch (m) {
          case no:
            u((t[i] = new Date(y)));
            continue;
          case uo:
            u((t[i] = new URL(y)));
            continue;
          case ro:
            u((t[i] = BigInt(y)));
            continue;
          case io:
            u((t[i] = new RegExp(y, w)));
            continue;
          case so:
            u((t[i] = Symbol.for(y)));
            continue;
          case lo:
            const E = new Set();
            t[i] = E;
            for (let M = 1; M < d.length; M++)
              l.push([
                d[M],
                (h) => {
                  E.add(h);
                },
              ]);
            u(E);
            continue;
          case ao:
            const R = new Map();
            t[i] = R;
            for (let M = 1; M < d.length; M += 2) {
              const h = [];
              l.push([
                d[M + 1],
                (L) => {
                  h[1] = L;
                },
              ]),
                l.push([
                  d[M],
                  (L) => {
                    h[0] = L;
                  },
                ]),
                s.push(() => {
                  R.set(h[0], h[1]);
                });
            }
            u(R);
            continue;
          case oo:
            const g = Object.create(null);
            t[i] = g;
            for (const M of Object.keys(y).reverse()) {
              const h = [];
              l.push([
                y[M],
                (L) => {
                  h[1] = L;
                },
              ]),
                l.push([
                  Number(M.slice(1)),
                  (L) => {
                    h[0] = L;
                  },
                ]),
                s.push(() => {
                  g[h[0]] = h[1];
                });
            }
            u(g);
            continue;
          case kn:
            if (t[y]) u((t[i] = t[y]));
            else {
              const M = new On();
              (n[y] = M), u((t[i] = M.promise));
            }
            continue;
          case _n:
            const [, S, x] = d;
            let P = x && zt && zt[x] ? new zt[x](S) : new Error(S);
            (t[i] = P), u(P);
            continue;
          case co:
            u((t[i] = t[y]));
            continue;
          default:
            if (Array.isArray(a)) {
              const M = [],
                h = d.slice(1);
              for (let L = 0; L < h.length; L++) {
                const k = h[L];
                l.push([
                  k,
                  (A) => {
                    M[L] = A;
                  },
                ]);
              }
              s.push(() => {
                for (const L of a) {
                  const k = L(d[0], ...M);
                  if (k) {
                    u((t[i] = k.value));
                    return;
                  }
                }
                throw new SyntaxError();
              });
              continue;
            }
            throw new SyntaxError();
        }
      } else {
        const m = [];
        t[i] = m;
        for (let y = 0; y < d.length; y++) {
          const w = d[y];
          w !== Xa &&
            l.push([
              w,
              (E) => {
                m[y] = E;
              },
            ]);
        }
        u(m);
        continue;
      }
    else {
      const m = {};
      t[i] = m;
      for (const y of Object.keys(d).reverse()) {
        const w = [];
        l.push([
          d[y],
          (E) => {
            w[1] = E;
          },
        ]),
          l.push([
            Number(y.slice(1)),
            (E) => {
              w[0] = E;
            },
          ]),
          s.push(() => {
            m[w[0]] = w[1];
          });
      }
      u(m);
      continue;
    }
  }
  for (; s.length > 0; ) s.pop()();
  return o;
}
async function ho(e, t) {
  const { plugins: r } = t ?? {},
    n = new On(),
    a = e.pipeThrough(fo()).getReader(),
    o = { values: [], hydrated: [], deferred: {}, plugins: r },
    l = await mo.call(o, a);
  let s = n.promise;
  return (
    l.done
      ? n.resolve()
      : (s = po
          .call(o, a)
          .then(n.resolve)
          .catch((i) => {
            for (const u of Object.values(o.deferred)) u.reject(i);
            n.reject(i);
          })),
    { done: s.then(() => a.closed), value: l.value }
  );
}
async function mo(e) {
  const t = await e.read();
  if (!t.value) throw new SyntaxError();
  let r;
  try {
    r = JSON.parse(t.value);
  } catch {
    throw new SyntaxError();
  }
  return { done: t.done, value: qt.call(this, r) };
}
async function po(e) {
  let t = await e.read();
  for (; !t.done; ) {
    if (!t.value) continue;
    const r = t.value;
    switch (r[0]) {
      case kn: {
        const n = r.indexOf(':'),
          a = Number(r.slice(1, n)),
          o = this.deferred[a];
        if (!o) throw new Error(`Deferred ID ${a} not found in stream`);
        const l = r.slice(n + 1);
        let s;
        try {
          s = JSON.parse(l);
        } catch {
          throw new SyntaxError();
        }
        const i = qt.call(this, s);
        o.resolve(i);
        break;
      }
      case _n: {
        const n = r.indexOf(':'),
          a = Number(r.slice(1, n)),
          o = this.deferred[a];
        if (!o) throw new Error(`Deferred ID ${a} not found in stream`);
        const l = r.slice(n + 1);
        let s;
        try {
          s = JSON.parse(l);
        } catch {
          throw new SyntaxError();
        }
        const i = qt.call(this, s);
        o.reject(i);
        break;
      }
      default:
        throw new SyntaxError();
    }
    t = await e.read();
  }
}
var dr = {};
Object.defineProperty(dr, '__esModule', { value: !0 });
dr.parse = bo;
dr.serialize = So;
const yo = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/,
  vo = /^[\u0021-\u003A\u003C-\u007E]*$/,
  go = /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,
  wo = /^[\u0020-\u003A\u003D-\u007E]*$/,
  Eo = Object.prototype.toString,
  Ro = (() => {
    const e = function () {};
    return (e.prototype = Object.create(null)), e;
  })();
function bo(e, t) {
  const r = new Ro(),
    n = e.length;
  if (n < 2) return r;
  const a = (t == null ? void 0 : t.decode) || xo;
  let o = 0;
  do {
    const l = e.indexOf('=', o);
    if (l === -1) break;
    const s = e.indexOf(';', o),
      i = s === -1 ? n : s;
    if (l > i) {
      o = e.lastIndexOf(';', l - 1) + 1;
      continue;
    }
    const u = Gr(e, o, l),
      d = Xr(e, l, u),
      m = e.slice(u, d);
    if (r[m] === void 0) {
      let y = Gr(e, l + 1, i),
        w = Xr(e, i, y);
      const E = a(e.slice(y, w));
      r[m] = E;
    }
    o = i + 1;
  } while (o < n);
  return r;
}
function Gr(e, t, r) {
  do {
    const n = e.charCodeAt(t);
    if (n !== 32 && n !== 9) return t;
  } while (++t < r);
  return r;
}
function Xr(e, t, r) {
  for (; t > r; ) {
    const n = e.charCodeAt(--t);
    if (n !== 32 && n !== 9) return t + 1;
  }
  return r;
}
function So(e, t, r) {
  const n = (r == null ? void 0 : r.encode) || encodeURIComponent;
  if (!yo.test(e)) throw new TypeError(`argument name is invalid: ${e}`);
  const a = n(t);
  if (!vo.test(a)) throw new TypeError(`argument val is invalid: ${t}`);
  let o = e + '=' + a;
  if (!r) return o;
  if (r.maxAge !== void 0) {
    if (!Number.isInteger(r.maxAge)) throw new TypeError(`option maxAge is invalid: ${r.maxAge}`);
    o += '; Max-Age=' + r.maxAge;
  }
  if (r.domain) {
    if (!go.test(r.domain)) throw new TypeError(`option domain is invalid: ${r.domain}`);
    o += '; Domain=' + r.domain;
  }
  if (r.path) {
    if (!wo.test(r.path)) throw new TypeError(`option path is invalid: ${r.path}`);
    o += '; Path=' + r.path;
  }
  if (r.expires) {
    if (!Lo(r.expires) || !Number.isFinite(r.expires.valueOf()))
      throw new TypeError(`option expires is invalid: ${r.expires}`);
    o += '; Expires=' + r.expires.toUTCString();
  }
  if (
    (r.httpOnly && (o += '; HttpOnly'),
    r.secure && (o += '; Secure'),
    r.partitioned && (o += '; Partitioned'),
    r.priority)
  )
    switch (typeof r.priority == 'string' ? r.priority.toLowerCase() : void 0) {
      case 'low':
        o += '; Priority=Low';
        break;
      case 'medium':
        o += '; Priority=Medium';
        break;
      case 'high':
        o += '; Priority=High';
        break;
      default:
        throw new TypeError(`option priority is invalid: ${r.priority}`);
    }
  if (r.sameSite)
    switch (typeof r.sameSite == 'string' ? r.sameSite.toLowerCase() : r.sameSite) {
      case !0:
      case 'strict':
        o += '; SameSite=Strict';
        break;
      case 'lax':
        o += '; SameSite=Lax';
        break;
      case 'none':
        o += '; SameSite=None';
        break;
      default:
        throw new TypeError(`option sameSite is invalid: ${r.sameSite}`);
    }
  return o;
}
function xo(e) {
  if (e.indexOf('%') === -1) return e;
  try {
    return decodeURIComponent(e);
  } catch {
    return e;
  }
}
function Lo(e) {
  return Eo.call(e) === '[object Date]';
}
/**
 * react-router v7.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ var An = (e) => {
    throw TypeError(e);
  },
  Co = (e, t, r) => t.has(e) || An('Cannot ' + r),
  Yt = (e, t, r) => (Co(e, t, 'read from private field'), r ? r.call(e) : t.get(e)),
  Po = (e, t, r) =>
    t.has(e)
      ? An('Cannot add the same private member more than once')
      : t instanceof WeakSet
        ? t.add(e)
        : t.set(e, r),
  Kr = 'popstate';
function zl(e = {}) {
  function t(n, a) {
    let { pathname: o, search: l, hash: s } = n.location;
    return at(
      '',
      { pathname: o, search: l, hash: s },
      (a.state && a.state.usr) || null,
      (a.state && a.state.key) || 'default'
    );
  }
  function r(n, a) {
    return typeof a == 'string' ? a : be(a);
  }
  return Mo(t, r, null, e);
}
function U(e, t) {
  if (e === !1 || e === null || typeof e > 'u') throw new Error(t);
}
function Z(e, t) {
  if (!e) {
    typeof console < 'u' && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function To() {
  return Math.random().toString(36).substring(2, 10);
}
function qr(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function at(e, t, r = null, n) {
  return {
    pathname: typeof e == 'string' ? e : e.pathname,
    search: '',
    hash: '',
    ...(typeof t == 'string' ? xe(t) : t),
    state: r,
    key: (t && t.key) || n || To(),
  };
}
function be({ pathname: e = '/', search: t = '', hash: r = '' }) {
  return (
    t && t !== '?' && (e += t.charAt(0) === '?' ? t : '?' + t),
    r && r !== '#' && (e += r.charAt(0) === '#' ? r : '#' + r),
    e
  );
}
function xe(e) {
  let t = {};
  if (e) {
    let r = e.indexOf('#');
    r >= 0 && ((t.hash = e.substring(r)), (e = e.substring(0, r)));
    let n = e.indexOf('?');
    n >= 0 && ((t.search = e.substring(n)), (e = e.substring(0, n))), e && (t.pathname = e);
  }
  return t;
}
function Mo(e, t, r, n = {}) {
  let { window: a = document.defaultView, v5Compat: o = !1 } = n,
    l = a.history,
    s = 'POP',
    i = null,
    u = d();
  u == null && ((u = 0), l.replaceState({ ...l.state, idx: u }, ''));
  function d() {
    return (l.state || { idx: null }).idx;
  }
  function m() {
    s = 'POP';
    let g = d(),
      S = g == null ? null : g - u;
    (u = g), i && i({ action: s, location: R.location, delta: S });
  }
  function y(g, S) {
    s = 'PUSH';
    let x = at(R.location, g, S);
    u = d() + 1;
    let P = qr(x, u),
      M = R.createHref(x);
    try {
      l.pushState(P, '', M);
    } catch (h) {
      if (h instanceof DOMException && h.name === 'DataCloneError') throw h;
      a.location.assign(M);
    }
    o && i && i({ action: s, location: R.location, delta: 1 });
  }
  function w(g, S) {
    s = 'REPLACE';
    let x = at(R.location, g, S);
    u = d();
    let P = qr(x, u),
      M = R.createHref(x);
    l.replaceState(P, '', M), o && i && i({ action: s, location: R.location, delta: 0 });
  }
  function E(g) {
    let S = a.location.origin !== 'null' ? a.location.origin : a.location.href,
      x = typeof g == 'string' ? g : be(g);
    return (
      (x = x.replace(/ $/, '%20')),
      U(S, `No window.location.(origin|href) available to create URL for href: ${x}`),
      new URL(x, S)
    );
  }
  let R = {
    get action() {
      return s;
    },
    get location() {
      return e(a, l);
    },
    listen(g) {
      if (i) throw new Error('A history only accepts one active listener');
      return (
        a.addEventListener(Kr, m),
        (i = g),
        () => {
          a.removeEventListener(Kr, m), (i = null);
        }
      );
    },
    createHref(g) {
      return t(a, g);
    },
    createURL: E,
    encodeLocation(g) {
      let S = E(g);
      return { pathname: S.pathname, search: S.search, hash: S.hash };
    },
    push: y,
    replace: w,
    go(g) {
      return l.go(g);
    },
  };
  return R;
}
var tt,
  Qr = class {
    constructor(e) {
      if ((Po(this, tt, new Map()), e)) for (let [t, r] of e) this.set(t, r);
    }
    get(e) {
      if (Yt(this, tt).has(e)) return Yt(this, tt).get(e);
      if (e.defaultValue !== void 0) return e.defaultValue;
      throw new Error('No value found for context');
    }
    set(e, t) {
      Yt(this, tt).set(e, t);
    }
  };
tt = new WeakMap();
var Do = new Set(['lazy', 'caseSensitive', 'path', 'id', 'index', 'children']);
function _o(e) {
  return e.index === !0;
}
function Mt(e, t, r = [], n = {}) {
  return e.map((a, o) => {
    let l = [...r, String(o)],
      s = typeof a.id == 'string' ? a.id : l.join('-');
    if (
      (U(a.index !== !0 || !a.children, 'Cannot specify children on an index route'),
      U(
        !n[s],
        `Found a route id collision on id "${s}".  Route id's must be globally unique within Data Router usages`
      ),
      _o(a))
    ) {
      let i = { ...a, ...t(a), id: s };
      return (n[s] = i), i;
    } else {
      let i = { ...a, ...t(a), id: s, children: void 0 };
      return (n[s] = i), a.children && (i.children = Mt(a.children, t, l, n)), i;
    }
  });
}
function ge(e, t, r = '/') {
  return xt(e, t, r, !1);
}
function xt(e, t, r, n) {
  let a = typeof t == 'string' ? xe(t) : t,
    o = ae(a.pathname || '/', r);
  if (o == null) return null;
  let l = Nn(e);
  ko(l);
  let s = null;
  for (let i = 0; s == null && i < l.length; ++i) {
    let u = zo(o);
    s = Ho(l[i], u, n);
  }
  return s;
}
function $n(e, t) {
  let { route: r, pathname: n, params: a } = e;
  return { id: r.id, pathname: n, params: a, data: t[r.id], handle: r.handle };
}
function Nn(e, t = [], r = [], n = '') {
  let a = (o, l, s) => {
    let i = {
      relativePath: s === void 0 ? o.path || '' : s,
      caseSensitive: o.caseSensitive === !0,
      childrenIndex: l,
      route: o,
    };
    i.relativePath.startsWith('/') &&
      (U(
        i.relativePath.startsWith(n),
        `Absolute route path "${i.relativePath}" nested under path "${n}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      ),
      (i.relativePath = i.relativePath.slice(n.length)));
    let u = he([n, i.relativePath]),
      d = r.concat(i);
    o.children &&
      o.children.length > 0 &&
      (U(
        o.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${u}".`
      ),
      Nn(o.children, t, d, u)),
      !(o.path == null && !o.index) && t.push({ path: u, score: jo(u, o.index), routesMeta: d });
  };
  return (
    e.forEach((o, l) => {
      var s;
      if (o.path === '' || !((s = o.path) != null && s.includes('?'))) a(o, l);
      else for (let i of In(o.path)) a(o, l, i);
    }),
    t
  );
}
function In(e) {
  let t = e.split('/');
  if (t.length === 0) return [];
  let [r, ...n] = t,
    a = r.endsWith('?'),
    o = r.replace(/\?$/, '');
  if (n.length === 0) return a ? [o, ''] : [o];
  let l = In(n.join('/')),
    s = [];
  return (
    s.push(...l.map((i) => (i === '' ? o : [o, i].join('/')))),
    a && s.push(...l),
    s.map((i) => (e.startsWith('/') && i === '' ? '/' : i))
  );
}
function ko(e) {
  e.sort((t, r) =>
    t.score !== r.score
      ? r.score - t.score
      : Uo(
          t.routesMeta.map((n) => n.childrenIndex),
          r.routesMeta.map((n) => n.childrenIndex)
        )
  );
}
var Oo = /^:[\w-]+$/,
  Ao = 3,
  $o = 2,
  No = 1,
  Io = 10,
  Fo = -2,
  Zr = (e) => e === '*';
function jo(e, t) {
  let r = e.split('/'),
    n = r.length;
  return (
    r.some(Zr) && (n += Fo),
    t && (n += $o),
    r.filter((a) => !Zr(a)).reduce((a, o) => a + (Oo.test(o) ? Ao : o === '' ? No : Io), n)
  );
}
function Uo(e, t) {
  return e.length === t.length && e.slice(0, -1).every((n, a) => n === t[a])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function Ho(e, t, r = !1) {
  let { routesMeta: n } = e,
    a = {},
    o = '/',
    l = [];
  for (let s = 0; s < n.length; ++s) {
    let i = n[s],
      u = s === n.length - 1,
      d = o === '/' ? t : t.slice(o.length) || '/',
      m = Dt({ path: i.relativePath, caseSensitive: i.caseSensitive, end: u }, d),
      y = i.route;
    if (
      (!m &&
        u &&
        r &&
        !n[n.length - 1].route.index &&
        (m = Dt({ path: i.relativePath, caseSensitive: i.caseSensitive, end: !1 }, d)),
      !m)
    )
      return null;
    Object.assign(a, m.params),
      l.push({
        params: a,
        pathname: he([o, m.pathname]),
        pathnameBase: Vo(he([o, m.pathnameBase])),
        route: y,
      }),
      m.pathnameBase !== '/' && (o = he([o, m.pathnameBase]));
  }
  return l;
}
function Dt(e, t) {
  typeof e == 'string' && (e = { path: e, caseSensitive: !1, end: !0 });
  let [r, n] = Bo(e.path, e.caseSensitive, e.end),
    a = t.match(r);
  if (!a) return null;
  let o = a[0],
    l = o.replace(/(.)\/+$/, '$1'),
    s = a.slice(1);
  return {
    params: n.reduce((u, { paramName: d, isOptional: m }, y) => {
      if (d === '*') {
        let E = s[y] || '';
        l = o.slice(0, o.length - E.length).replace(/(.)\/+$/, '$1');
      }
      const w = s[y];
      return m && !w ? (u[d] = void 0) : (u[d] = (w || '').replace(/%2F/g, '/')), u;
    }, {}),
    pathname: o,
    pathnameBase: l,
    pattern: e,
  };
}
function Bo(e, t = !1, r = !0) {
  Z(
    e === '*' || !e.endsWith('*') || e.endsWith('/*'),
    `Route path "${e}" will be treated as if it were "${e.replace(/\*$/, '/*')}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/, '/*')}".`
  );
  let n = [],
    a =
      '^' +
      e
        .replace(/\/*\*?$/, '')
        .replace(/^\/*/, '/')
        .replace(/[\\.*+^${}|()[\]]/g, '\\$&')
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (l, s, i) => (
            n.push({ paramName: s, isOptional: i != null }), i ? '/?([^\\/]+)?' : '/([^\\/]+)'
          )
        );
  return (
    e.endsWith('*')
      ? (n.push({ paramName: '*' }), (a += e === '*' || e === '/*' ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
      : r
        ? (a += '\\/*$')
        : e !== '' && e !== '/' && (a += '(?:(?=\\/|$))'),
    [new RegExp(a, t ? void 0 : 'i'), n]
  );
}
function zo(e) {
  try {
    return e
      .split('/')
      .map((t) => decodeURIComponent(t).replace(/\//g, '%2F'))
      .join('/');
  } catch (t) {
    return (
      Z(
        !1,
        `The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`
      ),
      e
    );
  }
}
function ae(e, t) {
  if (t === '/') return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let r = t.endsWith('/') ? t.length - 1 : t.length,
    n = e.charAt(r);
  return n && n !== '/' ? null : e.slice(r) || '/';
}
function Yo(e, t = '/') {
  let { pathname: r, search: n = '', hash: a = '' } = typeof e == 'string' ? xe(e) : e;
  return { pathname: r ? (r.startsWith('/') ? r : Wo(r, t)) : t, search: Jo(n), hash: Go(a) };
}
function Wo(e, t) {
  let r = t.replace(/\/+$/, '').split('/');
  return (
    e.split('/').forEach((a) => {
      a === '..' ? r.length > 1 && r.pop() : a !== '.' && r.push(a);
    }),
    r.length > 1 ? r.join('/') : '/'
  );
}
function Wt(e, t, r, n) {
  return `Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(n)}].  Please separate it out to the \`to.${r}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function Fn(e) {
  return e.filter((t, r) => r === 0 || (t.route.path && t.route.path.length > 0));
}
function fr(e) {
  let t = Fn(e);
  return t.map((r, n) => (n === t.length - 1 ? r.pathname : r.pathnameBase));
}
function hr(e, t, r, n = !1) {
  let a;
  typeof e == 'string'
    ? (a = xe(e))
    : ((a = { ...e }),
      U(!a.pathname || !a.pathname.includes('?'), Wt('?', 'pathname', 'search', a)),
      U(!a.pathname || !a.pathname.includes('#'), Wt('#', 'pathname', 'hash', a)),
      U(!a.search || !a.search.includes('#'), Wt('#', 'search', 'hash', a)));
  let o = e === '' || a.pathname === '',
    l = o ? '/' : a.pathname,
    s;
  if (l == null) s = r;
  else {
    let m = t.length - 1;
    if (!n && l.startsWith('..')) {
      let y = l.split('/');
      for (; y[0] === '..'; ) y.shift(), (m -= 1);
      a.pathname = y.join('/');
    }
    s = m >= 0 ? t[m] : '/';
  }
  let i = Yo(a, s),
    u = l && l !== '/' && l.endsWith('/'),
    d = (o || l === '.') && r.endsWith('/');
  return !i.pathname.endsWith('/') && (u || d) && (i.pathname += '/'), i;
}
var he = (e) => e.join('/').replace(/\/\/+/g, '/'),
  Vo = (e) => e.replace(/\/+$/, '').replace(/^\/*/, '/'),
  Jo = (e) => (!e || e === '?' ? '' : e.startsWith('?') ? e : '?' + e),
  Go = (e) => (!e || e === '#' ? '' : e.startsWith('#') ? e : '#' + e),
  Xo = class {
    constructor(e, t) {
      (this.type = 'DataWithResponseInit'), (this.data = e), (this.init = t || null);
    }
  };
function Ko(e, t) {
  return new Xo(e, typeof t == 'number' ? { status: t } : t);
}
var qo = (e, t = 302) => {
    let r = t;
    typeof r == 'number' ? (r = { status: r }) : typeof r.status > 'u' && (r.status = 302);
    let n = new Headers(r.headers);
    return n.set('Location', e), new Response(null, { ...r, headers: n });
  },
  Se = class {
    constructor(e, t, r, n = !1) {
      (this.status = e),
        (this.statusText = t || ''),
        (this.internal = n),
        r instanceof Error ? ((this.data = r.toString()), (this.error = r)) : (this.data = r);
    }
  };
function ke(e) {
  return (
    e != null &&
    typeof e.status == 'number' &&
    typeof e.statusText == 'string' &&
    typeof e.internal == 'boolean' &&
    'data' in e
  );
}
var jn = ['POST', 'PUT', 'PATCH', 'DELETE'],
  Qo = new Set(jn),
  Zo = ['GET', ...jn],
  ei = new Set(Zo),
  ti = new Set([301, 302, 303, 307, 308]),
  ri = new Set([307, 308]),
  Vt = {
    state: 'idle',
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  ni = {
    state: 'idle',
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  Qe = { state: 'unblocked', proceed: void 0, reset: void 0, location: void 0 },
  mr = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  ai = (e) => ({ hasErrorBoundary: !!e.hasErrorBoundary }),
  Un = 'remix-router-transitions',
  Hn = Symbol('ResetLoaderData');
function Yl(e) {
  const t = e.window ? e.window : typeof window < 'u' ? window : void 0,
    r = typeof t < 'u' && typeof t.document < 'u' && typeof t.document.createElement < 'u';
  U(e.routes.length > 0, 'You must provide a non-empty routes array to createRouter');
  let n = e.mapRouteProperties || ai,
    a = {},
    o = Mt(e.routes, n, void 0, a),
    l,
    s = e.basename || '/',
    i = e.dataStrategy || ui,
    u = { unstable_middleware: !1, ...e.future },
    d = null,
    m = new Set(),
    y = null,
    w = null,
    E = null,
    R = e.hydrationData != null,
    g = ge(o, e.history.location, s),
    S = !1,
    x = null;
  if (g == null && !e.patchRoutesOnNavigation) {
    let c = ie(404, { pathname: e.history.location.pathname }),
      { matches: p, route: v } = fn(o);
    (g = p), (x = { [v.id]: c });
  }
  g && !e.hydrationData && ht(g, o, e.history.location.pathname).active && (g = null);
  let P;
  if (g)
    if (g.some((c) => c.route.lazy)) P = !1;
    else if (!g.some((c) => c.route.loader)) P = !0;
    else {
      let c = e.hydrationData ? e.hydrationData.loaderData : null,
        p = e.hydrationData ? e.hydrationData.errors : null;
      if (p) {
        let v = g.findIndex((b) => p[b.route.id] !== void 0);
        P = g.slice(0, v + 1).every((b) => !Zt(b.route, c, p));
      } else P = g.every((v) => !Zt(v.route, c, p));
    }
  else {
    (P = !1), (g = []);
    let c = ht(null, o, e.history.location.pathname);
    c.active && c.matches && ((S = !0), (g = c.matches));
  }
  let M,
    h = {
      historyAction: e.history.action,
      location: e.history.location,
      matches: g,
      initialized: P,
      navigation: Vt,
      restoreScrollPosition: e.hydrationData != null ? !1 : null,
      preventScrollReset: !1,
      revalidation: 'idle',
      loaderData: (e.hydrationData && e.hydrationData.loaderData) || {},
      actionData: (e.hydrationData && e.hydrationData.actionData) || null,
      errors: (e.hydrationData && e.hydrationData.errors) || x,
      fetchers: new Map(),
      blockers: new Map(),
    },
    L = 'POP',
    k = !1,
    A,
    j = !1,
    B = new Map(),
    K = null,
    oe = !1,
    q = !1,
    We = new Set(),
    Q = new Map(),
    ct = 0,
    Ve = -1,
    Ae = new Map(),
    pe = new Set(),
    $e = new Map(),
    Je = new Map(),
    de = new Set(),
    Le = new Map(),
    dt,
    Ce = null;
  function ha() {
    if (
      ((d = e.history.listen(({ action: c, location: p, delta: v }) => {
        if (dt) {
          dt(), (dt = void 0);
          return;
        }
        Z(
          Le.size === 0 || v != null,
          'You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.'
        );
        let b = Fr({ currentLocation: h.location, nextLocation: p, historyAction: c });
        if (b && v != null) {
          let C = new Promise((N) => {
            dt = N;
          });
          e.history.go(v * -1),
            ft(b, {
              state: 'blocked',
              location: p,
              proceed() {
                ft(b, { state: 'proceeding', proceed: void 0, reset: void 0, location: p }),
                  C.then(() => e.history.go(v));
              },
              reset() {
                let N = new Map(h.blockers);
                N.set(b, Qe), re({ blockers: N });
              },
            });
          return;
        }
        return Pe(c, p);
      })),
      r)
    ) {
      Ei(t, B);
      let c = () => Ri(t, B);
      t.addEventListener('pagehide', c), (K = () => t.removeEventListener('pagehide', c));
    }
    return h.initialized || Pe('POP', h.location, { initialHydration: !0 }), M;
  }
  function ma() {
    d && d(),
      K && K(),
      m.clear(),
      A && A.abort(),
      h.fetchers.forEach((c, p) => jt(p)),
      h.blockers.forEach((c, p) => Ir(p));
  }
  function pa(c) {
    return m.add(c), () => m.delete(c);
  }
  function re(c, p = {}) {
    h = { ...h, ...c };
    let v = [],
      b = [];
    h.fetchers.forEach((C, N) => {
      C.state === 'idle' && (de.has(N) ? v.push(N) : b.push(N));
    }),
      de.forEach((C) => {
        !h.fetchers.has(C) && !Q.has(C) && v.push(C);
      }),
      [...m].forEach((C) =>
        C(h, {
          deletedFetchers: v,
          viewTransitionOpts: p.viewTransitionOpts,
          flushSync: p.flushSync === !0,
        })
      ),
      v.forEach((C) => jt(C)),
      b.forEach((C) => h.fetchers.delete(C));
  }
  function Ne(c, p, { flushSync: v } = {}) {
    var T, _;
    let b =
        h.actionData != null &&
        h.navigation.formMethod != null &&
        ue(h.navigation.formMethod) &&
        h.navigation.state === 'loading' &&
        ((T = c.state) == null ? void 0 : T._isRedirect) !== !0,
      C;
    p.actionData
      ? Object.keys(p.actionData).length > 0
        ? (C = p.actionData)
        : (C = null)
      : b
        ? (C = h.actionData)
        : (C = null);
    let N = p.loaderData ? cn(h.loaderData, p.loaderData, p.matches || [], p.errors) : h.loaderData,
      $ = h.blockers;
    $.size > 0 && (($ = new Map($)), $.forEach((I, H) => $.set(H, Qe)));
    let D =
      k === !0 ||
      (h.navigation.formMethod != null &&
        ue(h.navigation.formMethod) &&
        ((_ = c.state) == null ? void 0 : _._isRedirect) !== !0);
    l && ((o = l), (l = void 0)),
      oe ||
        L === 'POP' ||
        (L === 'PUSH'
          ? e.history.push(c, c.state)
          : L === 'REPLACE' && e.history.replace(c, c.state));
    let O;
    if (L === 'POP') {
      let I = B.get(h.location.pathname);
      I && I.has(c.pathname)
        ? (O = { currentLocation: h.location, nextLocation: c })
        : B.has(c.pathname) && (O = { currentLocation: c, nextLocation: h.location });
    } else if (j) {
      let I = B.get(h.location.pathname);
      I ? I.add(c.pathname) : ((I = new Set([c.pathname])), B.set(h.location.pathname, I)),
        (O = { currentLocation: h.location, nextLocation: c });
    }
    re(
      {
        ...p,
        actionData: C,
        loaderData: N,
        historyAction: L,
        location: c,
        initialized: !0,
        navigation: Vt,
        revalidation: 'idle',
        restoreScrollPosition: Ur(c, p.matches || h.matches),
        preventScrollReset: D,
        blockers: $,
      },
      { viewTransitionOpts: O, flushSync: v === !0 }
    ),
      (L = 'POP'),
      (k = !1),
      (j = !1),
      (oe = !1),
      (q = !1),
      Ce == null || Ce.resolve(),
      (Ce = null);
  }
  async function Dr(c, p) {
    if (typeof c == 'number') {
      e.history.go(c);
      return;
    }
    let v = Qt(
        h.location,
        h.matches,
        s,
        c,
        p == null ? void 0 : p.fromRouteId,
        p == null ? void 0 : p.relative
      ),
      { path: b, submission: C, error: N } = en(!1, v, p),
      $ = h.location,
      D = at(h.location, b, p && p.state);
    D = { ...D, ...e.history.encodeLocation(D) };
    let O = p && p.replace != null ? p.replace : void 0,
      T = 'PUSH';
    O === !0
      ? (T = 'REPLACE')
      : O === !1 ||
        (C != null &&
          ue(C.formMethod) &&
          C.formAction === h.location.pathname + h.location.search &&
          (T = 'REPLACE'));
    let _ = p && 'preventScrollReset' in p ? p.preventScrollReset === !0 : void 0,
      I = (p && p.flushSync) === !0,
      H = Fr({ currentLocation: $, nextLocation: D, historyAction: T });
    if (H) {
      ft(H, {
        state: 'blocked',
        location: D,
        proceed() {
          ft(H, { state: 'proceeding', proceed: void 0, reset: void 0, location: D }), Dr(c, p);
        },
        reset() {
          let W = new Map(h.blockers);
          W.set(H, Qe), re({ blockers: W });
        },
      });
      return;
    }
    await Pe(T, D, {
      submission: C,
      pendingError: N,
      preventScrollReset: _,
      replace: p && p.replace,
      enableViewTransition: p && p.viewTransition,
      flushSync: I,
    });
  }
  function ya() {
    Ce || (Ce = bi()), Ft(), re({ revalidation: 'loading' });
    let c = Ce.promise;
    return h.navigation.state === 'submitting'
      ? c
      : h.navigation.state === 'idle'
        ? (Pe(h.historyAction, h.location, { startUninterruptedRevalidation: !0 }), c)
        : (Pe(L || h.historyAction, h.navigation.location, {
            overrideNavigation: h.navigation,
            enableViewTransition: j === !0,
          }),
          c);
  }
  async function Pe(c, p, v) {
    A && A.abort(),
      (A = null),
      (L = c),
      (oe = (v && v.startUninterruptedRevalidation) === !0),
      Ca(h.location, h.matches),
      (k = (v && v.preventScrollReset) === !0),
      (j = (v && v.enableViewTransition) === !0);
    let b = l || o,
      C = v && v.overrideNavigation,
      N =
        v != null && v.initialHydration && h.matches && h.matches.length > 0 && !S
          ? h.matches
          : ge(b, p, s),
      $ = (v && v.flushSync) === !0;
    if (
      N &&
      h.initialized &&
      !q &&
      pi(h.location, p) &&
      !(v && v.submission && ue(v.submission.formMethod))
    ) {
      Ne(p, { matches: N }, { flushSync: $ });
      return;
    }
    let D = ht(N, b, p.pathname);
    if ((D.active && D.matches && (N = D.matches), !N)) {
      let { error: J, notFoundMatches: V, route: X } = Ut(p.pathname);
      Ne(p, { matches: V, loaderData: {}, errors: { [X.id]: J } }, { flushSync: $ });
      return;
    }
    A = new AbortController();
    let O = je(e.history, p, A.signal, v && v.submission),
      T = new Qr(e.unstable_getContext ? await e.unstable_getContext() : void 0),
      _;
    if (v && v.pendingError) _ = [De(N).route.id, { type: 'error', error: v.pendingError }];
    else if (v && v.submission && ue(v.submission.formMethod)) {
      let J = await va(O, p, v.submission, N, T, D.active, { replace: v.replace, flushSync: $ });
      if (J.shortCircuited) return;
      if (J.pendingActionResult) {
        let [V, X] = J.pendingActionResult;
        if (ne(X) && ke(X.error) && X.error.status === 404) {
          (A = null), Ne(p, { matches: J.matches, loaderData: {}, errors: { [V]: X.error } });
          return;
        }
      }
      (N = J.matches || N),
        (_ = J.pendingActionResult),
        (C = Jt(p, v.submission)),
        ($ = !1),
        (D.active = !1),
        (O = je(e.history, O.url, O.signal));
    }
    let {
      shortCircuited: I,
      matches: H,
      loaderData: W,
      errors: ee,
    } = await ga(
      O,
      p,
      N,
      T,
      D.active,
      C,
      v && v.submission,
      v && v.fetcherSubmission,
      v && v.replace,
      v && v.initialHydration === !0,
      $,
      _
    );
    I || ((A = null), Ne(p, { matches: H || N, ...dn(_), loaderData: W, errors: ee }));
  }
  async function va(c, p, v, b, C, N, $ = {}) {
    Ft();
    let D = gi(p, v);
    if ((re({ navigation: D }, { flushSync: $.flushSync === !0 }), N)) {
      let _ = await mt(b, p.pathname, c.signal);
      if (_.type === 'aborted') return { shortCircuited: !0 };
      if (_.type === 'error') {
        let I = De(_.partialMatches).route.id;
        return {
          matches: _.partialMatches,
          pendingActionResult: [I, { type: 'error', error: _.error }],
        };
      } else if (_.matches) b = _.matches;
      else {
        let { notFoundMatches: I, error: H, route: W } = Ut(p.pathname);
        return { matches: I, pendingActionResult: [W.id, { type: 'error', error: H }] };
      }
    }
    let O,
      T = nt(b, p);
    if (!T.route.action && !T.route.lazy)
      O = {
        type: 'error',
        error: ie(405, { method: c.method, pathname: p.pathname, routeId: T.route.id }),
      };
    else {
      let _ = await Ge('action', c, [T], b, C, null);
      if (((O = _[T.route.id]), !O)) {
        for (let I of b)
          if (_[I.route.id]) {
            O = _[I.route.id];
            break;
          }
      }
      if (c.signal.aborted) return { shortCircuited: !0 };
    }
    if (_e(O)) {
      let _;
      return (
        $ && $.replace != null
          ? (_ = $.replace)
          : (_ =
              ln(O.response.headers.get('Location'), new URL(c.url), s) ===
              h.location.pathname + h.location.search),
        await Te(c, O, !0, { submission: v, replace: _ }),
        { shortCircuited: !0 }
      );
    }
    if (ne(O)) {
      let _ = De(b, T.route.id);
      return (
        ($ && $.replace) !== !0 && (L = 'PUSH'),
        { matches: b, pendingActionResult: [_.route.id, O] }
      );
    }
    return { matches: b, pendingActionResult: [T.route.id, O] };
  }
  async function ga(c, p, v, b, C, N, $, D, O, T, _, I) {
    let H = N || Jt(p, $),
      W = $ || D || mn(H),
      ee = !oe && !T;
    if (C) {
      if (ee) {
        let te = _r(I);
        re({ navigation: H, ...(te !== void 0 ? { actionData: te } : {}) }, { flushSync: _ });
      }
      let z = await mt(v, p.pathname, c.signal);
      if (z.type === 'aborted') return { shortCircuited: !0 };
      if (z.type === 'error') {
        let te = De(z.partialMatches).route.id;
        return { matches: z.partialMatches, loaderData: {}, errors: { [te]: z.error } };
      } else if (z.matches) v = z.matches;
      else {
        let { error: te, notFoundMatches: vt, route: qe } = Ut(p.pathname);
        return { matches: vt, loaderData: {}, errors: { [qe.id]: te } };
      }
    }
    let J = l || o,
      [V, X] = rn(e.history, h, v, W, p, T === !0, q, We, de, $e, pe, J, s, I);
    if (((Ve = ++ct), V.length === 0 && X.length === 0)) {
      let z = $r();
      return (
        Ne(
          p,
          {
            matches: v,
            loaderData: {},
            errors: I && ne(I[1]) ? { [I[0]]: I[1].error } : null,
            ...dn(I),
            ...(z ? { fetchers: new Map(h.fetchers) } : {}),
          },
          { flushSync: _ }
        ),
        { shortCircuited: !0 }
      );
    }
    if (ee) {
      let z = {};
      if (!C) {
        z.navigation = H;
        let te = _r(I);
        te !== void 0 && (z.actionData = te);
      }
      X.length > 0 && (z.fetchers = wa(X)), re(z, { flushSync: _ });
    }
    X.forEach((z) => {
      Ee(z.key), z.controller && Q.set(z.key, z.controller);
    });
    let Ie = () => X.forEach((z) => Ee(z.key));
    A && A.signal.addEventListener('abort', Ie);
    let { loaderResults: Xe, fetcherResults: ve } = await kr(v, V, X, c, b);
    if (c.signal.aborted) return { shortCircuited: !0 };
    A && A.signal.removeEventListener('abort', Ie), X.forEach((z) => Q.delete(z.key));
    let fe = Et(Xe);
    if (fe) return await Te(c, fe.result, !0, { replace: O }), { shortCircuited: !0 };
    if (((fe = Et(ve)), fe))
      return pe.add(fe.key), await Te(c, fe.result, !0, { replace: O }), { shortCircuited: !0 };
    let { loaderData: Ht, errors: Ke } = un(h, v, Xe, I, X, ve);
    T && h.errors && (Ke = { ...h.errors, ...Ke });
    let Me = $r(),
      pt = Nr(Ve),
      yt = Me || pt || X.length > 0;
    return {
      matches: v,
      loaderData: Ht,
      errors: Ke,
      ...(yt ? { fetchers: new Map(h.fetchers) } : {}),
    };
  }
  function _r(c) {
    if (c && !ne(c[1])) return { [c[0]]: c[1].data };
    if (h.actionData) return Object.keys(h.actionData).length === 0 ? null : h.actionData;
  }
  function wa(c) {
    return (
      c.forEach((p) => {
        let v = h.fetchers.get(p.key),
          b = Ze(void 0, v ? v.data : void 0);
        h.fetchers.set(p.key, b);
      }),
      new Map(h.fetchers)
    );
  }
  async function Ea(c, p, v, b) {
    Ee(c);
    let C = (b && b.flushSync) === !0,
      N = l || o,
      $ = Qt(h.location, h.matches, s, v, p, b == null ? void 0 : b.relative),
      D = ge(N, $, s),
      O = ht(D, N, $);
    if ((O.active && O.matches && (D = O.matches), !D)) {
      ye(c, p, ie(404, { pathname: $ }), { flushSync: C });
      return;
    }
    let { path: T, submission: _, error: I } = en(!0, $, b);
    if (I) {
      ye(c, p, I, { flushSync: C });
      return;
    }
    let H = nt(D, T),
      W = new Qr(e.unstable_getContext ? await e.unstable_getContext() : void 0),
      ee = (b && b.preventScrollReset) === !0;
    if (_ && ue(_.formMethod)) {
      await Ra(c, p, T, H, D, W, O.active, C, ee, _);
      return;
    }
    $e.set(c, { routeId: p, path: T }), await ba(c, p, T, H, D, W, O.active, C, ee, _);
  }
  async function Ra(c, p, v, b, C, N, $, D, O, T) {
    Ft(), $e.delete(c);
    function _(G) {
      if (!G.route.action && !G.route.lazy) {
        let Fe = ie(405, { method: T.formMethod, pathname: v, routeId: p });
        return ye(c, p, Fe, { flushSync: D }), !0;
      }
      return !1;
    }
    if (!$ && _(b)) return;
    let I = h.fetchers.get(c);
    we(c, wi(T, I), { flushSync: D });
    let H = new AbortController(),
      W = je(e.history, v, H.signal, T);
    if ($) {
      let G = await mt(C, v, W.signal, c);
      if (G.type === 'aborted') return;
      if (G.type === 'error') {
        ye(c, p, G.error, { flushSync: D });
        return;
      } else if (G.matches) {
        if (((C = G.matches), (b = nt(C, v)), _(b))) return;
      } else {
        ye(c, p, ie(404, { pathname: v }), { flushSync: D });
        return;
      }
    }
    Q.set(c, H);
    let ee = ct,
      V = (await Ge('action', W, [b], C, N, c))[b.route.id];
    if (W.signal.aborted) {
      Q.get(c) === H && Q.delete(c);
      return;
    }
    if (de.has(c)) {
      if (_e(V) || ne(V)) {
        we(c, Re(void 0));
        return;
      }
    } else {
      if (_e(V))
        if ((Q.delete(c), Ve > ee)) {
          we(c, Re(void 0));
          return;
        } else
          return (
            pe.add(c), we(c, Ze(T)), Te(W, V, !1, { fetcherSubmission: T, preventScrollReset: O })
          );
      if (ne(V)) {
        ye(c, p, V.error);
        return;
      }
    }
    let X = h.navigation.location || h.location,
      Ie = je(e.history, X, H.signal),
      Xe = l || o,
      ve = h.navigation.state !== 'idle' ? ge(Xe, h.navigation.location, s) : h.matches;
    U(ve, "Didn't find any matches after fetcher action");
    let fe = ++ct;
    Ae.set(c, fe);
    let Ht = Ze(T, V.data);
    h.fetchers.set(c, Ht);
    let [Ke, Me] = rn(e.history, h, ve, T, X, !1, q, We, de, $e, pe, Xe, s, [b.route.id, V]);
    Me.filter((G) => G.key !== c).forEach((G) => {
      let Fe = G.key,
        Hr = h.fetchers.get(Fe),
        Ma = Ze(void 0, Hr ? Hr.data : void 0);
      h.fetchers.set(Fe, Ma), Ee(Fe), G.controller && Q.set(Fe, G.controller);
    }),
      re({ fetchers: new Map(h.fetchers) });
    let pt = () => Me.forEach((G) => Ee(G.key));
    H.signal.addEventListener('abort', pt);
    let { loaderResults: yt, fetcherResults: z } = await kr(ve, Ke, Me, Ie, N);
    if (H.signal.aborted) return;
    H.signal.removeEventListener('abort', pt),
      Ae.delete(c),
      Q.delete(c),
      Me.forEach((G) => Q.delete(G.key));
    let te = Et(yt);
    if (te) return Te(Ie, te.result, !1, { preventScrollReset: O });
    if (((te = Et(z)), te)) return pe.add(te.key), Te(Ie, te.result, !1, { preventScrollReset: O });
    let { loaderData: vt, errors: qe } = un(h, ve, yt, void 0, Me, z);
    if (h.fetchers.has(c)) {
      let G = Re(V.data);
      h.fetchers.set(c, G);
    }
    Nr(fe),
      h.navigation.state === 'loading' && fe > Ve
        ? (U(L, 'Expected pending action'),
          A && A.abort(),
          Ne(h.navigation.location, {
            matches: ve,
            loaderData: vt,
            errors: qe,
            fetchers: new Map(h.fetchers),
          }))
        : (re({
            errors: qe,
            loaderData: cn(h.loaderData, vt, ve, qe),
            fetchers: new Map(h.fetchers),
          }),
          (q = !1));
  }
  async function ba(c, p, v, b, C, N, $, D, O, T) {
    let _ = h.fetchers.get(c);
    we(c, Ze(T, _ ? _.data : void 0), { flushSync: D });
    let I = new AbortController(),
      H = je(e.history, v, I.signal);
    if ($) {
      let V = await mt(C, v, H.signal, c);
      if (V.type === 'aborted') return;
      if (V.type === 'error') {
        ye(c, p, V.error, { flushSync: D });
        return;
      } else if (V.matches) (C = V.matches), (b = nt(C, v));
      else {
        ye(c, p, ie(404, { pathname: v }), { flushSync: D });
        return;
      }
    }
    Q.set(c, I);
    let W = ct,
      J = (await Ge('loader', H, [b], C, N, c))[b.route.id];
    if ((Q.get(c) === I && Q.delete(c), !H.signal.aborted)) {
      if (de.has(c)) {
        we(c, Re(void 0));
        return;
      }
      if (_e(J))
        if (Ve > W) {
          we(c, Re(void 0));
          return;
        } else {
          pe.add(c), await Te(H, J, !1, { preventScrollReset: O });
          return;
        }
      if (ne(J)) {
        ye(c, p, J.error);
        return;
      }
      we(c, Re(J.data));
    }
  }
  async function Te(
    c,
    p,
    v,
    { submission: b, fetcherSubmission: C, preventScrollReset: N, replace: $ } = {}
  ) {
    p.response.headers.has('X-Remix-Revalidate') && (q = !0);
    let D = p.response.headers.get('Location');
    U(D, 'Expected a Location header on the redirect Response'), (D = ln(D, new URL(c.url), s));
    let O = at(h.location, D, { _isRedirect: !0 });
    if (r) {
      let ee = !1;
      if (p.response.headers.has('X-Remix-Reload-Document')) ee = !0;
      else if (mr.test(D)) {
        const J = e.history.createURL(D);
        ee = J.origin !== t.location.origin || ae(J.pathname, s) == null;
      }
      if (ee) {
        $ ? t.location.replace(D) : t.location.assign(D);
        return;
      }
    }
    A = null;
    let T = $ === !0 || p.response.headers.has('X-Remix-Replace') ? 'REPLACE' : 'PUSH',
      { formMethod: _, formAction: I, formEncType: H } = h.navigation;
    !b && !C && _ && I && H && (b = mn(h.navigation));
    let W = b || C;
    if (ri.has(p.response.status) && W && ue(W.formMethod))
      await Pe(T, O, {
        submission: { ...W, formAction: D },
        preventScrollReset: N || k,
        enableViewTransition: v ? j : void 0,
      });
    else {
      let ee = Jt(O, b);
      await Pe(T, O, {
        overrideNavigation: ee,
        fetcherSubmission: C,
        preventScrollReset: N || k,
        enableViewTransition: v ? j : void 0,
      });
    }
  }
  async function Ge(c, p, v, b, C, N) {
    let $,
      D = {};
    try {
      $ = await ci(i, c, p, v, b, N, a, n, C, u.unstable_middleware);
    } catch (O) {
      return (
        v.forEach((T) => {
          D[T.route.id] = { type: 'error', error: O };
        }),
        D
      );
    }
    for (let [O, T] of Object.entries($))
      if (yi(T)) {
        let _ = T.result;
        D[O] = { type: 'redirect', response: hi(_, p, O, b, s) };
      } else D[O] = await fi(T);
    return D;
  }
  async function kr(c, p, v, b, C) {
    let N = Ge('loader', b, p, c, C, null),
      $ = Promise.all(
        v.map(async (T) => {
          if (T.matches && T.match && T.controller) {
            let I = (
              await Ge(
                'loader',
                je(e.history, T.path, T.controller.signal),
                [T.match],
                T.matches,
                C,
                T.key
              )
            )[T.match.route.id];
            return { [T.key]: I };
          } else
            return Promise.resolve({
              [T.key]: { type: 'error', error: ie(404, { pathname: T.path }) },
            });
        })
      ),
      D = await N,
      O = (await $).reduce((T, _) => Object.assign(T, _), {});
    return { loaderResults: D, fetcherResults: O };
  }
  function Ft() {
    (q = !0),
      $e.forEach((c, p) => {
        Q.has(p) && We.add(p), Ee(p);
      });
  }
  function we(c, p, v = {}) {
    h.fetchers.set(c, p),
      re({ fetchers: new Map(h.fetchers) }, { flushSync: (v && v.flushSync) === !0 });
  }
  function ye(c, p, v, b = {}) {
    let C = De(h.matches, p);
    jt(c),
      re(
        { errors: { [C.route.id]: v }, fetchers: new Map(h.fetchers) },
        { flushSync: (b && b.flushSync) === !0 }
      );
  }
  function Or(c) {
    return Je.set(c, (Je.get(c) || 0) + 1), de.has(c) && de.delete(c), h.fetchers.get(c) || ni;
  }
  function jt(c) {
    let p = h.fetchers.get(c);
    Q.has(c) && !(p && p.state === 'loading' && Ae.has(c)) && Ee(c),
      $e.delete(c),
      Ae.delete(c),
      pe.delete(c),
      de.delete(c),
      We.delete(c),
      h.fetchers.delete(c);
  }
  function Sa(c) {
    let p = (Je.get(c) || 0) - 1;
    p <= 0 ? (Je.delete(c), de.add(c)) : Je.set(c, p), re({ fetchers: new Map(h.fetchers) });
  }
  function Ee(c) {
    let p = Q.get(c);
    p && (p.abort(), Q.delete(c));
  }
  function Ar(c) {
    for (let p of c) {
      let v = Or(p),
        b = Re(v.data);
      h.fetchers.set(p, b);
    }
  }
  function $r() {
    let c = [],
      p = !1;
    for (let v of pe) {
      let b = h.fetchers.get(v);
      U(b, `Expected fetcher: ${v}`), b.state === 'loading' && (pe.delete(v), c.push(v), (p = !0));
    }
    return Ar(c), p;
  }
  function Nr(c) {
    let p = [];
    for (let [v, b] of Ae)
      if (b < c) {
        let C = h.fetchers.get(v);
        U(C, `Expected fetcher: ${v}`), C.state === 'loading' && (Ee(v), Ae.delete(v), p.push(v));
      }
    return Ar(p), p.length > 0;
  }
  function xa(c, p) {
    let v = h.blockers.get(c) || Qe;
    return Le.get(c) !== p && Le.set(c, p), v;
  }
  function Ir(c) {
    h.blockers.delete(c), Le.delete(c);
  }
  function ft(c, p) {
    let v = h.blockers.get(c) || Qe;
    U(
      (v.state === 'unblocked' && p.state === 'blocked') ||
        (v.state === 'blocked' && p.state === 'blocked') ||
        (v.state === 'blocked' && p.state === 'proceeding') ||
        (v.state === 'blocked' && p.state === 'unblocked') ||
        (v.state === 'proceeding' && p.state === 'unblocked'),
      `Invalid blocker state transition: ${v.state} -> ${p.state}`
    );
    let b = new Map(h.blockers);
    b.set(c, p), re({ blockers: b });
  }
  function Fr({ currentLocation: c, nextLocation: p, historyAction: v }) {
    if (Le.size === 0) return;
    Le.size > 1 && Z(!1, 'A router only supports one blocker at a time');
    let b = Array.from(Le.entries()),
      [C, N] = b[b.length - 1],
      $ = h.blockers.get(C);
    if (
      !($ && $.state === 'proceeding') &&
      N({ currentLocation: c, nextLocation: p, historyAction: v })
    )
      return C;
  }
  function Ut(c) {
    let p = ie(404, { pathname: c }),
      v = l || o,
      { matches: b, route: C } = fn(v);
    return { notFoundMatches: b, route: C, error: p };
  }
  function La(c, p, v) {
    if (((y = c), (E = p), (w = v || null), !R && h.navigation === Vt)) {
      R = !0;
      let b = Ur(h.location, h.matches);
      b != null && re({ restoreScrollPosition: b });
    }
    return () => {
      (y = null), (E = null), (w = null);
    };
  }
  function jr(c, p) {
    return (
      (w &&
        w(
          c,
          p.map((b) => $n(b, h.loaderData))
        )) ||
      c.key
    );
  }
  function Ca(c, p) {
    if (y && E) {
      let v = jr(c, p);
      y[v] = E();
    }
  }
  function Ur(c, p) {
    if (y) {
      let v = jr(c, p),
        b = y[v];
      if (typeof b == 'number') return b;
    }
    return null;
  }
  function ht(c, p, v) {
    if (e.patchRoutesOnNavigation)
      if (c) {
        if (Object.keys(c[0].params).length > 0) return { active: !0, matches: xt(p, v, s, !0) };
      } else return { active: !0, matches: xt(p, v, s, !0) || [] };
    return { active: !1, matches: null };
  }
  async function mt(c, p, v, b) {
    if (!e.patchRoutesOnNavigation) return { type: 'success', matches: c };
    let C = c;
    for (;;) {
      let N = l == null,
        $ = l || o,
        D = a;
      try {
        await e.patchRoutesOnNavigation({
          signal: v,
          path: p,
          matches: C,
          fetcherKey: b,
          patch: (_, I) => {
            v.aborted || an(_, I, $, D, n);
          },
        });
      } catch (_) {
        return { type: 'error', error: _, partialMatches: C };
      } finally {
        N && !v.aborted && (o = [...o]);
      }
      if (v.aborted) return { type: 'aborted' };
      let O = ge($, p, s);
      if (O) return { type: 'success', matches: O };
      let T = xt($, p, s, !0);
      if (!T || (C.length === T.length && C.every((_, I) => _.route.id === T[I].route.id)))
        return { type: 'success', matches: null };
      C = T;
    }
  }
  function Pa(c) {
    (a = {}), (l = Mt(c, n, void 0, a));
  }
  function Ta(c, p) {
    let v = l == null;
    an(c, p, l || o, a, n), v && ((o = [...o]), re({}));
  }
  return (
    (M = {
      get basename() {
        return s;
      },
      get future() {
        return u;
      },
      get state() {
        return h;
      },
      get routes() {
        return o;
      },
      get window() {
        return t;
      },
      initialize: ha,
      subscribe: pa,
      enableScrollRestoration: La,
      navigate: Dr,
      fetch: Ea,
      revalidate: ya,
      createHref: (c) => e.history.createHref(c),
      encodeLocation: (c) => e.history.encodeLocation(c),
      getFetcher: Or,
      deleteFetcher: Sa,
      dispose: ma,
      getBlocker: xa,
      deleteBlocker: Ir,
      patchRoutes: Ta,
      _internalFetchControllers: Q,
      _internalSetRoutes: Pa,
    }),
    M
  );
}
function oi(e) {
  return (
    e != null && (('formData' in e && e.formData != null) || ('body' in e && e.body !== void 0))
  );
}
function Qt(e, t, r, n, a, o) {
  let l, s;
  if (a) {
    l = [];
    for (let u of t)
      if ((l.push(u), u.route.id === a)) {
        s = u;
        break;
      }
  } else (l = t), (s = t[t.length - 1]);
  let i = hr(n || '.', fr(l), ae(e.pathname, r) || e.pathname, o === 'path');
  if (
    (n == null && ((i.search = e.search), (i.hash = e.hash)),
    (n == null || n === '' || n === '.') && s)
  ) {
    let u = yr(i.search);
    if (s.route.index && !u) i.search = i.search ? i.search.replace(/^\?/, '?index&') : '?index';
    else if (!s.route.index && u) {
      let d = new URLSearchParams(i.search),
        m = d.getAll('index');
      d.delete('index'), m.filter((w) => w).forEach((w) => d.append('index', w));
      let y = d.toString();
      i.search = y ? `?${y}` : '';
    }
  }
  return r !== '/' && (i.pathname = i.pathname === '/' ? r : he([r, i.pathname])), be(i);
}
function en(e, t, r) {
  if (!r || !oi(r)) return { path: t };
  if (r.formMethod && !vi(r.formMethod))
    return { path: t, error: ie(405, { method: r.formMethod }) };
  let n = () => ({ path: t, error: ie(400, { type: 'invalid-body' }) }),
    o = (r.formMethod || 'get').toUpperCase(),
    l = Yn(t);
  if (r.body !== void 0) {
    if (r.formEncType === 'text/plain') {
      if (!ue(o)) return n();
      let m =
        typeof r.body == 'string'
          ? r.body
          : r.body instanceof FormData || r.body instanceof URLSearchParams
            ? Array.from(r.body.entries()).reduce(
                (y, [w, E]) => `${y}${w}=${E}
`,
                ''
              )
            : String(r.body);
      return {
        path: t,
        submission: {
          formMethod: o,
          formAction: l,
          formEncType: r.formEncType,
          formData: void 0,
          json: void 0,
          text: m,
        },
      };
    } else if (r.formEncType === 'application/json') {
      if (!ue(o)) return n();
      try {
        let m = typeof r.body == 'string' ? JSON.parse(r.body) : r.body;
        return {
          path: t,
          submission: {
            formMethod: o,
            formAction: l,
            formEncType: r.formEncType,
            formData: void 0,
            json: m,
            text: void 0,
          },
        };
      } catch {
        return n();
      }
    }
  }
  U(typeof FormData == 'function', 'FormData is not available in this environment');
  let s, i;
  if (r.formData) (s = tr(r.formData)), (i = r.formData);
  else if (r.body instanceof FormData) (s = tr(r.body)), (i = r.body);
  else if (r.body instanceof URLSearchParams) (s = r.body), (i = sn(s));
  else if (r.body == null) (s = new URLSearchParams()), (i = new FormData());
  else
    try {
      (s = new URLSearchParams(r.body)), (i = sn(s));
    } catch {
      return n();
    }
  let u = {
    formMethod: o,
    formAction: l,
    formEncType: (r && r.formEncType) || 'application/x-www-form-urlencoded',
    formData: i,
    json: void 0,
    text: void 0,
  };
  if (ue(u.formMethod)) return { path: t, submission: u };
  let d = xe(t);
  return (
    e && d.search && yr(d.search) && s.append('index', ''),
    (d.search = `?${s}`),
    { path: be(d), submission: u }
  );
}
function tn(e, t, r = !1) {
  let n = e.findIndex((a) => a.route.id === t);
  return n >= 0 ? e.slice(0, r ? n + 1 : n) : e;
}
function rn(e, t, r, n, a, o, l, s, i, u, d, m, y, w) {
  let E = w ? (ne(w[1]) ? w[1].error : w[1].data) : void 0,
    R = e.createURL(t.location),
    g = e.createURL(a),
    S = r;
  o && t.errors ? (S = tn(r, Object.keys(t.errors)[0], !0)) : w && ne(w[1]) && (S = tn(r, w[0]));
  let x = w ? w[1].statusCode : void 0,
    P = x && x >= 400,
    M = S.filter((L, k) => {
      let { route: A } = L;
      if (A.lazy) return !0;
      if (A.loader == null) return !1;
      if (o) return Zt(A, t.loaderData, t.errors);
      if (ii(t.loaderData, t.matches[k], L)) return !0;
      let j = t.matches[k],
        B = L;
      return nn(L, {
        currentUrl: R,
        currentParams: j.params,
        nextUrl: g,
        nextParams: B.params,
        ...n,
        actionResult: E,
        actionStatus: x,
        defaultShouldRevalidate: P
          ? !1
          : l ||
            R.pathname + R.search === g.pathname + g.search ||
            R.search !== g.search ||
            li(j, B),
      });
    }),
    h = [];
  return (
    u.forEach((L, k) => {
      if (o || !r.some((oe) => oe.route.id === L.routeId) || i.has(k)) return;
      let A = ge(m, L.path, y);
      if (!A) {
        h.push({
          key: k,
          routeId: L.routeId,
          path: L.path,
          matches: null,
          match: null,
          controller: null,
        });
        return;
      }
      let j = t.fetchers.get(k),
        B = nt(A, L.path),
        K = !1;
      d.has(k)
        ? (K = !1)
        : s.has(k)
          ? (s.delete(k), (K = !0))
          : j && j.state !== 'idle' && j.data === void 0
            ? (K = l)
            : (K = nn(B, {
                currentUrl: R,
                currentParams: t.matches[t.matches.length - 1].params,
                nextUrl: g,
                nextParams: r[r.length - 1].params,
                ...n,
                actionResult: E,
                actionStatus: x,
                defaultShouldRevalidate: P ? !1 : l,
              })),
        K &&
          h.push({
            key: k,
            routeId: L.routeId,
            path: L.path,
            matches: A,
            match: B,
            controller: new AbortController(),
          });
    }),
    [M, h]
  );
}
function Zt(e, t, r) {
  if (e.lazy) return !0;
  if (!e.loader) return !1;
  let n = t != null && t[e.id] !== void 0,
    a = r != null && r[e.id] !== void 0;
  return !n && a ? !1 : typeof e.loader == 'function' && e.loader.hydrate === !0 ? !0 : !n && !a;
}
function ii(e, t, r) {
  let n = !t || r.route.id !== t.route.id,
    a = !e.hasOwnProperty(r.route.id);
  return n || a;
}
function li(e, t) {
  let r = e.route.path;
  return (
    e.pathname !== t.pathname || (r != null && r.endsWith('*') && e.params['*'] !== t.params['*'])
  );
}
function nn(e, t) {
  if (e.route.shouldRevalidate) {
    let r = e.route.shouldRevalidate(t);
    if (typeof r == 'boolean') return r;
  }
  return t.defaultShouldRevalidate;
}
function an(e, t, r, n, a) {
  let o;
  if (e) {
    let i = n[e];
    U(i, `No route found to patch children into: routeId = ${e}`),
      i.children || (i.children = []),
      (o = i.children);
  } else o = r;
  let l = t.filter((i) => !o.some((u) => Bn(i, u))),
    s = Mt(l, a, [e || '_', 'patch', String((o == null ? void 0 : o.length) || '0')], n);
  o.push(...s);
}
function Bn(e, t) {
  return 'id' in e && 'id' in t && e.id === t.id
    ? !0
    : e.index === t.index && e.path === t.path && e.caseSensitive === t.caseSensitive
      ? (!e.children || e.children.length === 0) && (!t.children || t.children.length === 0)
        ? !0
        : e.children.every((r, n) => {
            var a;
            return (a = t.children) == null ? void 0 : a.some((o) => Bn(r, o));
          })
      : !1;
}
async function si(e, t, r) {
  if (!e.lazy) return;
  let n = await e.lazy();
  if (!e.lazy) return;
  let a = r[e.id];
  U(a, 'No route found in manifest');
  let o = {};
  for (let l in n) {
    let i = a[l] !== void 0 && l !== 'hasErrorBoundary';
    Z(
      !i,
      `Route "${a.id}" has a static property "${l}" defined but its lazy function is also returning a value for this property. The lazy route property "${l}" will be ignored.`
    ),
      !i && !Do.has(l) && (o[l] = n[l]);
  }
  Object.assign(a, o), Object.assign(a, { ...t(a), lazy: void 0 });
}
async function on(e) {
  let t = e.matches.filter((a) => a.shouldLoad),
    r = {};
  return (
    (await Promise.all(t.map((a) => a.resolve()))).forEach((a, o) => {
      r[t[o].route.id] = a;
    }),
    r
  );
}
async function ui(e) {
  return e.matches.some((t) => t.route.unstable_middleware)
    ? rt(
        e,
        !1,
        () => on(e),
        (t) => ({ [t.routeId]: { type: 'error', result: t.error } })
      )
    : on(e);
}
async function rt(e, t, r, n) {
  let { matches: a, request: o, params: l, context: s } = e,
    i = { handlerResult: void 0, propagateResult: t };
  try {
    let u = a.flatMap((m) =>
        m.route.unstable_middleware ? m.route.unstable_middleware.map((y) => [m.route.id, y]) : []
      ),
      d = await zn({ request: o, params: l, context: s }, u, i, r);
    return i.propagateResult ? d : i.handlerResult;
  } catch (u) {
    if (!(u instanceof er)) throw u;
    let d = await n(u);
    return i.handlerResult ? Object.assign(i.handlerResult, d) : d;
  }
}
var er = class {
  constructor(e, t) {
    (this.routeId = e), (this.error = t);
  }
};
async function zn(e, t, r, n, a = 0) {
  let { request: o } = e;
  if (o.signal.aborted)
    throw o.signal.reason
      ? o.signal.reason
      : new Error(`Request aborted without an \`AbortSignal.reason\`: ${o.method} ${o.url}`);
  let l = t[a];
  if (!l) return (r.handlerResult = await n()), r.handlerResult;
  let [s, i] = l,
    u = !1,
    d,
    m = async () => {
      if (u) throw new Error('You may only call `next()` once per middleware');
      u = !0;
      let y = await zn(e, t, r, n, a + 1);
      if (r.propagateResult) return (d = y), d;
    };
  try {
    let y = await i({ request: e.request, params: e.params, context: e.context }, m);
    return u ? (y === void 0 ? d : y) : m();
  } catch (y) {
    throw y instanceof er ? y : new er(s, y);
  }
}
async function ci(e, t, r, n, a, o, l, s, i, u) {
  let d = a.map((w) => (w.route.lazy ? si(w.route, s, l) : void 0));
  u && (await Promise.all(d));
  let m = a.map((w, E) => {
      let R = d[E],
        g = n.some((x) => x.route.id === w.route.id);
      return {
        ...w,
        shouldLoad: g,
        resolve: async (x) => (
          x && r.method === 'GET' && (w.route.lazy || w.route.loader) && (g = !0),
          g ? di(t, r, w, R, x, i) : Promise.resolve({ type: 'data', result: void 0 })
        ),
      };
    }),
    y = await e({ matches: m, request: r, params: a[0].params, fetcherKey: o, context: i });
  try {
    await Promise.all(d);
  } catch {}
  return y;
}
async function di(e, t, r, n, a, o) {
  let l,
    s,
    i = (u) => {
      let d,
        m = new Promise((E, R) => (d = R));
      (s = () => d()), t.signal.addEventListener('abort', s);
      let y = (E) =>
          typeof u != 'function'
            ? Promise.reject(
                new Error(
                  `You cannot call the handler for a route which defines a boolean "${e}" [routeId: ${r.route.id}]`
                )
              )
            : u({ request: t, params: r.params, context: o }, ...(E !== void 0 ? [E] : [])),
        w = (async () => {
          try {
            return { type: 'data', result: await (a ? a((R) => y(R)) : y()) };
          } catch (E) {
            return { type: 'error', result: E };
          }
        })();
      return Promise.race([w, m]);
    };
  try {
    let u = r.route[e];
    if (n)
      if (u) {
        let d,
          [m] = await Promise.all([
            i(u).catch((y) => {
              d = y;
            }),
            n,
          ]);
        if (d !== void 0) throw d;
        l = m;
      } else if ((await n, (u = r.route[e]), u)) l = await i(u);
      else if (e === 'action') {
        let d = new URL(t.url),
          m = d.pathname + d.search;
        throw ie(405, { method: t.method, pathname: m, routeId: r.route.id });
      } else return { type: 'data', result: void 0 };
    else if (u) l = await i(u);
    else {
      let d = new URL(t.url),
        m = d.pathname + d.search;
      throw ie(404, { pathname: m });
    }
  } catch (u) {
    return { type: 'error', result: u };
  } finally {
    s && t.signal.removeEventListener('abort', s);
  }
  return l;
}
async function fi(e) {
  var n, a, o, l, s, i;
  let { result: t, type: r } = e;
  if (pr(t)) {
    let u;
    try {
      let d = t.headers.get('Content-Type');
      d && /\bapplication\/json\b/.test(d)
        ? t.body == null
          ? (u = null)
          : (u = await t.json())
        : (u = await t.text());
    } catch (d) {
      return { type: 'error', error: d };
    }
    return r === 'error'
      ? {
          type: 'error',
          error: new Se(t.status, t.statusText, u),
          statusCode: t.status,
          headers: t.headers,
        }
      : { type: 'data', data: u, statusCode: t.status, headers: t.headers };
  }
  return r === 'error'
    ? hn(t)
      ? t.data instanceof Error
        ? {
            type: 'error',
            error: t.data,
            statusCode: (n = t.init) == null ? void 0 : n.status,
            headers: (a = t.init) != null && a.headers ? new Headers(t.init.headers) : void 0,
          }
        : {
            type: 'error',
            error: new Se(((o = t.init) == null ? void 0 : o.status) || 500, void 0, t.data),
            statusCode: ke(t) ? t.status : void 0,
            headers: (l = t.init) != null && l.headers ? new Headers(t.init.headers) : void 0,
          }
      : { type: 'error', error: t, statusCode: ke(t) ? t.status : void 0 }
    : hn(t)
      ? {
          type: 'data',
          data: t.data,
          statusCode: (s = t.init) == null ? void 0 : s.status,
          headers: (i = t.init) != null && i.headers ? new Headers(t.init.headers) : void 0,
        }
      : { type: 'data', data: t };
}
function hi(e, t, r, n, a) {
  let o = e.headers.get('Location');
  if (
    (U(o, 'Redirects returned/thrown from loaders/actions must have a Location header'),
    !mr.test(o))
  ) {
    let l = n.slice(0, n.findIndex((s) => s.route.id === r) + 1);
    (o = Qt(new URL(t.url), l, a, o)), e.headers.set('Location', o);
  }
  return e;
}
function ln(e, t, r) {
  if (mr.test(e)) {
    let n = e,
      a = n.startsWith('//') ? new URL(t.protocol + n) : new URL(n),
      o = ae(a.pathname, r) != null;
    if (a.origin === t.origin && o) return a.pathname + a.search + a.hash;
  }
  return e;
}
function je(e, t, r, n) {
  let a = e.createURL(Yn(t)).toString(),
    o = { signal: r };
  if (n && ue(n.formMethod)) {
    let { formMethod: l, formEncType: s } = n;
    (o.method = l.toUpperCase()),
      s === 'application/json'
        ? ((o.headers = new Headers({ 'Content-Type': s })), (o.body = JSON.stringify(n.json)))
        : s === 'text/plain'
          ? (o.body = n.text)
          : s === 'application/x-www-form-urlencoded' && n.formData
            ? (o.body = tr(n.formData))
            : (o.body = n.formData);
  }
  return new Request(a, o);
}
function tr(e) {
  let t = new URLSearchParams();
  for (let [r, n] of e.entries()) t.append(r, typeof n == 'string' ? n : n.name);
  return t;
}
function sn(e) {
  let t = new FormData();
  for (let [r, n] of e.entries()) t.append(r, n);
  return t;
}
function mi(e, t, r, n = !1, a = !1) {
  let o = {},
    l = null,
    s,
    i = !1,
    u = {},
    d = r && ne(r[1]) ? r[1].error : void 0;
  return (
    e.forEach((m) => {
      if (!(m.route.id in t)) return;
      let y = m.route.id,
        w = t[y];
      if ((U(!_e(w), 'Cannot handle redirect results in processLoaderData'), ne(w))) {
        let E = w.error;
        if ((d !== void 0 && ((E = d), (d = void 0)), (l = l || {}), a)) l[y] = E;
        else {
          let R = De(e, y);
          l[R.route.id] == null && (l[R.route.id] = E);
        }
        n || (o[y] = Hn),
          i || ((i = !0), (s = ke(w.error) ? w.error.status : 500)),
          w.headers && (u[y] = w.headers);
      } else
        (o[y] = w.data),
          w.statusCode && w.statusCode !== 200 && !i && (s = w.statusCode),
          w.headers && (u[y] = w.headers);
    }),
    d !== void 0 && r && ((l = { [r[0]]: d }), (o[r[0]] = void 0)),
    { loaderData: o, errors: l, statusCode: s || 200, loaderHeaders: u }
  );
}
function un(e, t, r, n, a, o) {
  let { loaderData: l, errors: s } = mi(t, r, n);
  return (
    a.forEach((i) => {
      let { key: u, match: d, controller: m } = i,
        y = o[u];
      if ((U(y, 'Did not find corresponding fetcher result'), !(m && m.signal.aborted)))
        if (ne(y)) {
          let w = De(e.matches, d == null ? void 0 : d.route.id);
          (s && s[w.route.id]) || (s = { ...s, [w.route.id]: y.error }), e.fetchers.delete(u);
        } else if (_e(y)) U(!1, 'Unhandled fetcher revalidation redirect');
        else {
          let w = Re(y.data);
          e.fetchers.set(u, w);
        }
    }),
    { loaderData: l, errors: s }
  );
}
function cn(e, t, r, n) {
  let a = Object.entries(t)
    .filter(([, o]) => o !== Hn)
    .reduce((o, [l, s]) => ((o[l] = s), o), {});
  for (let o of r) {
    let l = o.route.id;
    if (
      (!t.hasOwnProperty(l) && e.hasOwnProperty(l) && o.route.loader && (a[l] = e[l]),
      n && n.hasOwnProperty(l))
    )
      break;
  }
  return a;
}
function dn(e) {
  return e ? (ne(e[1]) ? { actionData: {} } : { actionData: { [e[0]]: e[1].data } }) : {};
}
function De(e, t) {
  return (
    (t ? e.slice(0, e.findIndex((n) => n.route.id === t) + 1) : [...e])
      .reverse()
      .find((n) => n.route.hasErrorBoundary === !0) || e[0]
  );
}
function fn(e) {
  let t =
    e.length === 1
      ? e[0]
      : e.find((r) => r.index || !r.path || r.path === '/') || { id: '__shim-error-route__' };
  return { matches: [{ params: {}, pathname: '', pathnameBase: '', route: t }], route: t };
}
function ie(e, { pathname: t, routeId: r, method: n, type: a, message: o } = {}) {
  let l = 'Unknown Server Error',
    s = 'Unknown @remix-run/router error';
  return (
    e === 400
      ? ((l = 'Bad Request'),
        n && t && r
          ? (s = `You made a ${n} request to "${t}" but did not provide a \`loader\` for route "${r}", so there is no way to handle the request.`)
          : a === 'invalid-body' && (s = 'Unable to encode submission body'))
      : e === 403
        ? ((l = 'Forbidden'), (s = `Route "${r}" does not match URL "${t}"`))
        : e === 404
          ? ((l = 'Not Found'), (s = `No route matches URL "${t}"`))
          : e === 405 &&
            ((l = 'Method Not Allowed'),
            n && t && r
              ? (s = `You made a ${n.toUpperCase()} request to "${t}" but did not provide an \`action\` for route "${r}", so there is no way to handle the request.`)
              : n && (s = `Invalid request method "${n.toUpperCase()}"`)),
    new Se(e || 500, l, new Error(s), !0)
  );
}
function Et(e) {
  let t = Object.entries(e);
  for (let r = t.length - 1; r >= 0; r--) {
    let [n, a] = t[r];
    if (_e(a)) return { key: n, result: a };
  }
}
function Yn(e) {
  let t = typeof e == 'string' ? xe(e) : e;
  return be({ ...t, hash: '' });
}
function pi(e, t) {
  return e.pathname !== t.pathname || e.search !== t.search
    ? !1
    : e.hash === ''
      ? t.hash !== ''
      : e.hash === t.hash
        ? !0
        : t.hash !== '';
}
function yi(e) {
  return pr(e.result) && ti.has(e.result.status);
}
function ne(e) {
  return e.type === 'error';
}
function _e(e) {
  return (e && e.type) === 'redirect';
}
function hn(e) {
  return (
    typeof e == 'object' &&
    e != null &&
    'type' in e &&
    'data' in e &&
    'init' in e &&
    e.type === 'DataWithResponseInit'
  );
}
function pr(e) {
  return (
    e != null &&
    typeof e.status == 'number' &&
    typeof e.statusText == 'string' &&
    typeof e.headers == 'object' &&
    typeof e.body < 'u'
  );
}
function vi(e) {
  return ei.has(e.toUpperCase());
}
function ue(e) {
  return Qo.has(e.toUpperCase());
}
function yr(e) {
  return new URLSearchParams(e).getAll('index').some((t) => t === '');
}
function nt(e, t) {
  let r = typeof t == 'string' ? xe(t).search : t.search;
  if (e[e.length - 1].route.index && yr(r || '')) return e[e.length - 1];
  let n = Fn(e);
  return n[n.length - 1];
}
function mn(e) {
  let { formMethod: t, formAction: r, formEncType: n, text: a, formData: o, json: l } = e;
  if (!(!t || !r || !n)) {
    if (a != null)
      return {
        formMethod: t,
        formAction: r,
        formEncType: n,
        formData: void 0,
        json: void 0,
        text: a,
      };
    if (o != null)
      return {
        formMethod: t,
        formAction: r,
        formEncType: n,
        formData: o,
        json: void 0,
        text: void 0,
      };
    if (l !== void 0)
      return {
        formMethod: t,
        formAction: r,
        formEncType: n,
        formData: void 0,
        json: l,
        text: void 0,
      };
  }
}
function Jt(e, t) {
  return t
    ? {
        state: 'loading',
        location: e,
        formMethod: t.formMethod,
        formAction: t.formAction,
        formEncType: t.formEncType,
        formData: t.formData,
        json: t.json,
        text: t.text,
      }
    : {
        state: 'loading',
        location: e,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
      };
}
function gi(e, t) {
  return {
    state: 'submitting',
    location: e,
    formMethod: t.formMethod,
    formAction: t.formAction,
    formEncType: t.formEncType,
    formData: t.formData,
    json: t.json,
    text: t.text,
  };
}
function Ze(e, t) {
  return e
    ? {
        state: 'loading',
        formMethod: e.formMethod,
        formAction: e.formAction,
        formEncType: e.formEncType,
        formData: e.formData,
        json: e.json,
        text: e.text,
        data: t,
      }
    : {
        state: 'loading',
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: t,
      };
}
function wi(e, t) {
  return {
    state: 'submitting',
    formMethod: e.formMethod,
    formAction: e.formAction,
    formEncType: e.formEncType,
    formData: e.formData,
    json: e.json,
    text: e.text,
    data: t ? t.data : void 0,
  };
}
function Re(e) {
  return {
    state: 'idle',
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
    data: e,
  };
}
function Ei(e, t) {
  try {
    let r = e.sessionStorage.getItem(Un);
    if (r) {
      let n = JSON.parse(r);
      for (let [a, o] of Object.entries(n || {}))
        o && Array.isArray(o) && t.set(a, new Set(o || []));
    }
  } catch {}
}
function Ri(e, t) {
  if (t.size > 0) {
    let r = {};
    for (let [n, a] of t) r[n] = [...a];
    try {
      e.sessionStorage.setItem(Un, JSON.stringify(r));
    } catch (n) {
      Z(!1, `Failed to save applied view transitions in sessionStorage (${n}).`);
    }
  }
}
function bi() {
  let e,
    t,
    r = new Promise((n, a) => {
      (e = async (o) => {
        n(o);
        try {
          await r;
        } catch {}
      }),
        (t = async (o) => {
          a(o);
          try {
            await r;
          } catch {}
        });
    });
  return { promise: r, resolve: e, reject: t };
}
var Oe = f.createContext(null);
Oe.displayName = 'DataRouter';
var ze = f.createContext(null);
ze.displayName = 'DataRouterState';
var vr = f.createContext({ isTransitioning: !1 });
vr.displayName = 'ViewTransition';
var Wn = f.createContext(new Map());
Wn.displayName = 'Fetchers';
var Si = f.createContext(null);
Si.displayName = 'Await';
var se = f.createContext(null);
se.displayName = 'Navigation';
var Ot = f.createContext(null);
Ot.displayName = 'Location';
var ce = f.createContext({ outlet: null, matches: [], isDataRoute: !1 });
ce.displayName = 'Route';
var gr = f.createContext(null);
gr.displayName = 'RouteError';
function xi(e, { relative: t } = {}) {
  U(ot(), 'useHref() may be used only in the context of a <Router> component.');
  let { basename: r, navigator: n } = f.useContext(se),
    { hash: a, pathname: o, search: l } = it(e, { relative: t }),
    s = o;
  return (
    r !== '/' && (s = o === '/' ? r : he([r, o])), n.createHref({ pathname: s, search: l, hash: a })
  );
}
function ot() {
  return f.useContext(Ot) != null;
}
function me() {
  return (
    U(ot(), 'useLocation() may be used only in the context of a <Router> component.'),
    f.useContext(Ot).location
  );
}
var Vn =
  'You should call navigate() in a React.useEffect(), not when your component is first rendered.';
function Jn(e) {
  f.useContext(se).static || f.useLayoutEffect(e);
}
function Li() {
  let { isDataRoute: e } = f.useContext(ce);
  return e ? ji() : Ci();
}
function Ci() {
  U(ot(), 'useNavigate() may be used only in the context of a <Router> component.');
  let e = f.useContext(Oe),
    { basename: t, navigator: r } = f.useContext(se),
    { matches: n } = f.useContext(ce),
    { pathname: a } = me(),
    o = JSON.stringify(fr(n)),
    l = f.useRef(!1);
  return (
    Jn(() => {
      l.current = !0;
    }),
    f.useCallback(
      (i, u = {}) => {
        if ((Z(l.current, Vn), !l.current)) return;
        if (typeof i == 'number') {
          r.go(i);
          return;
        }
        let d = hr(i, JSON.parse(o), a, u.relative === 'path');
        e == null && t !== '/' && (d.pathname = d.pathname === '/' ? t : he([t, d.pathname])),
          (u.replace ? r.replace : r.push)(d, u.state, u);
      },
      [t, r, o, a, e]
    )
  );
}
var Pi = f.createContext(null);
function Ti(e) {
  let t = f.useContext(ce).outlet;
  return t && f.createElement(Pi.Provider, { value: e }, t);
}
function Wl() {
  let { matches: e } = f.useContext(ce),
    t = e[e.length - 1];
  return t ? t.params : {};
}
function it(e, { relative: t } = {}) {
  let { matches: r } = f.useContext(ce),
    { pathname: n } = me(),
    a = JSON.stringify(fr(r));
  return f.useMemo(() => hr(e, JSON.parse(a), n, t === 'path'), [e, a, n, t]);
}
function Mi(e, t, r, n) {
  U(ot(), 'useRoutes() may be used only in the context of a <Router> component.');
  let { navigator: a, static: o } = f.useContext(se),
    { matches: l } = f.useContext(ce),
    s = l[l.length - 1],
    i = s ? s.params : {},
    u = s ? s.pathname : '/',
    d = s ? s.pathnameBase : '/',
    m = s && s.route;
  {
    let x = (m && m.path) || '';
    Kn(
      u,
      !m || x.endsWith('*') || x.endsWith('*?'),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${u}" (under <Route path="${x}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${x}"> to <Route path="${x === '/' ? '*' : `${x}/*`}">.`
    );
  }
  let y = me(),
    w;
  w = y;
  let E = w.pathname || '/',
    R = E;
  if (d !== '/') {
    let x = d.replace(/^\//, '').split('/');
    R = '/' + E.replace(/^\//, '').split('/').slice(x.length).join('/');
  }
  let g = !o && r && r.matches && r.matches.length > 0 ? r.matches : ge(e, { pathname: R });
  return (
    Z(m || g != null, `No routes matched location "${w.pathname}${w.search}${w.hash}" `),
    Z(
      g == null ||
        g[g.length - 1].route.element !== void 0 ||
        g[g.length - 1].route.Component !== void 0 ||
        g[g.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${w.pathname}${w.search}${w.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
    ),
    Ai(
      g &&
        g.map((x) =>
          Object.assign({}, x, {
            params: Object.assign({}, i, x.params),
            pathname: he([
              d,
              a.encodeLocation ? a.encodeLocation(x.pathname).pathname : x.pathname,
            ]),
            pathnameBase:
              x.pathnameBase === '/'
                ? d
                : he([
                    d,
                    a.encodeLocation ? a.encodeLocation(x.pathnameBase).pathname : x.pathnameBase,
                  ]),
          })
        ),
      l,
      r,
      n
    )
  );
}
function Di() {
  let e = Xn(),
    t = ke(e) ? `${e.status} ${e.statusText}` : e instanceof Error ? e.message : JSON.stringify(e),
    r = e instanceof Error ? e.stack : null,
    n = 'rgba(200,200,200, 0.5)',
    a = { padding: '0.5rem', backgroundColor: n },
    o = { padding: '2px 4px', backgroundColor: n },
    l = null;
  return (
    console.error('Error handled by React Router default ErrorBoundary:', e),
    (l = f.createElement(
      f.Fragment,
      null,
      f.createElement('p', null, '💿 Hey developer 👋'),
      f.createElement(
        'p',
        null,
        'You can provide a way better UX than this when your app throws errors by providing your own ',
        f.createElement('code', { style: o }, 'ErrorBoundary'),
        ' or',
        ' ',
        f.createElement('code', { style: o }, 'errorElement'),
        ' prop on your route.'
      )
    )),
    f.createElement(
      f.Fragment,
      null,
      f.createElement('h2', null, 'Unexpected Application Error!'),
      f.createElement('h3', { style: { fontStyle: 'italic' } }, t),
      r ? f.createElement('pre', { style: a }, r) : null,
      l
    )
  );
}
var _i = f.createElement(Di, null),
  ki = class extends f.Component {
    constructor(e) {
      super(e),
        (this.state = { location: e.location, revalidation: e.revalidation, error: e.error });
    }
    static getDerivedStateFromError(e) {
      return { error: e };
    }
    static getDerivedStateFromProps(e, t) {
      return t.location !== e.location || (t.revalidation !== 'idle' && e.revalidation === 'idle')
        ? { error: e.error, location: e.location, revalidation: e.revalidation }
        : {
            error: e.error !== void 0 ? e.error : t.error,
            location: t.location,
            revalidation: e.revalidation || t.revalidation,
          };
    }
    componentDidCatch(e, t) {
      console.error('React Router caught the following error during render', e, t);
    }
    render() {
      return this.state.error !== void 0
        ? f.createElement(
            ce.Provider,
            { value: this.props.routeContext },
            f.createElement(gr.Provider, {
              value: this.state.error,
              children: this.props.component,
            })
          )
        : this.props.children;
    }
  };
function Oi({ routeContext: e, match: t, children: r }) {
  let n = f.useContext(Oe);
  return (
    n &&
      n.static &&
      n.staticContext &&
      (t.route.errorElement || t.route.ErrorBoundary) &&
      (n.staticContext._deepestRenderedBoundaryId = t.route.id),
    f.createElement(ce.Provider, { value: e }, r)
  );
}
function Ai(e, t = [], r = null, n = null) {
  if (e == null) {
    if (!r) return null;
    if (r.errors) e = r.matches;
    else if (t.length === 0 && !r.initialized && r.matches.length > 0) e = r.matches;
    else return null;
  }
  let a = e,
    o = r == null ? void 0 : r.errors;
  if (o != null) {
    let i = a.findIndex((u) => u.route.id && (o == null ? void 0 : o[u.route.id]) !== void 0);
    U(
      i >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(o).join(',')}`
    ),
      (a = a.slice(0, Math.min(a.length, i + 1)));
  }
  let l = !1,
    s = -1;
  if (r)
    for (let i = 0; i < a.length; i++) {
      let u = a[i];
      if (((u.route.HydrateFallback || u.route.hydrateFallbackElement) && (s = i), u.route.id)) {
        let { loaderData: d, errors: m } = r,
          y = u.route.loader && !d.hasOwnProperty(u.route.id) && (!m || m[u.route.id] === void 0);
        if (u.route.lazy || y) {
          (l = !0), s >= 0 ? (a = a.slice(0, s + 1)) : (a = [a[0]]);
          break;
        }
      }
    }
  return a.reduceRight((i, u, d) => {
    let m,
      y = !1,
      w = null,
      E = null;
    r &&
      ((m = o && u.route.id ? o[u.route.id] : void 0),
      (w = u.route.errorElement || _i),
      l &&
        (s < 0 && d === 0
          ? (Kn(
              'route-fallback',
              !1,
              'No `HydrateFallback` element provided to render during initial hydration'
            ),
            (y = !0),
            (E = null))
          : s === d && ((y = !0), (E = u.route.hydrateFallbackElement || null))));
    let R = t.concat(a.slice(0, d + 1)),
      g = () => {
        let S;
        return (
          m
            ? (S = w)
            : y
              ? (S = E)
              : u.route.Component
                ? (S = f.createElement(u.route.Component, null))
                : u.route.element
                  ? (S = u.route.element)
                  : (S = i),
          f.createElement(Oi, {
            match: u,
            routeContext: { outlet: i, matches: R, isDataRoute: r != null },
            children: S,
          })
        );
      };
    return r && (u.route.ErrorBoundary || u.route.errorElement || d === 0)
      ? f.createElement(ki, {
          location: r.location,
          revalidation: r.revalidation,
          component: w,
          error: m,
          children: g(),
          routeContext: { outlet: null, matches: R, isDataRoute: !0 },
        })
      : g();
  }, null);
}
function wr(e) {
  return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function $i(e) {
  let t = f.useContext(Oe);
  return U(t, wr(e)), t;
}
function lt(e) {
  let t = f.useContext(ze);
  return U(t, wr(e)), t;
}
function Ni(e) {
  let t = f.useContext(ce);
  return U(t, wr(e)), t;
}
function st(e) {
  let t = Ni(e),
    r = t.matches[t.matches.length - 1];
  return U(r.route.id, `${e} can only be used on routes that contain a unique "id"`), r.route.id;
}
function Ii() {
  return st('useRouteId');
}
function Fi() {
  return lt('useNavigation').navigation;
}
function Gn() {
  let { matches: e, loaderData: t } = lt('useMatches');
  return f.useMemo(() => e.map((r) => $n(r, t)), [e, t]);
}
function Vl() {
  let e = lt('useLoaderData'),
    t = st('useLoaderData');
  return e.loaderData[t];
}
function Jl() {
  let e = lt('useActionData'),
    t = st('useLoaderData');
  return e.actionData ? e.actionData[t] : void 0;
}
function Xn() {
  var n;
  let e = f.useContext(gr),
    t = lt('useRouteError'),
    r = st('useRouteError');
  return e !== void 0 ? e : (n = t.errors) == null ? void 0 : n[r];
}
function ji() {
  let { router: e } = $i('useNavigate'),
    t = st('useNavigate'),
    r = f.useRef(!1);
  return (
    Jn(() => {
      r.current = !0;
    }),
    f.useCallback(
      async (a, o = {}) => {
        Z(r.current, Vn),
          r.current &&
            (typeof a == 'number' ? e.navigate(a) : await e.navigate(a, { fromRouteId: t, ...o }));
      },
      [e, t]
    )
  );
}
var pn = {};
function Kn(e, t, r) {
  !t && !pn[e] && ((pn[e] = !0), Z(!1, r));
}
var yn = {};
function vn(e, t) {
  !e && !yn[t] && ((yn[t] = !0), console.warn(t));
}
function Gl(e) {
  let t = {
    hasErrorBoundary: e.hasErrorBoundary || e.ErrorBoundary != null || e.errorElement != null,
  };
  return (
    e.Component &&
      (e.element &&
        Z(
          !1,
          'You should not include both `Component` and `element` on your route - `Component` will be used.'
        ),
      Object.assign(t, { element: f.createElement(e.Component), Component: void 0 })),
    e.HydrateFallback &&
      (e.hydrateFallbackElement &&
        Z(
          !1,
          'You should not include both `HydrateFallback` and `hydrateFallbackElement` on your route - `HydrateFallback` will be used.'
        ),
      Object.assign(t, {
        hydrateFallbackElement: f.createElement(e.HydrateFallback),
        HydrateFallback: void 0,
      })),
    e.ErrorBoundary &&
      (e.errorElement &&
        Z(
          !1,
          'You should not include both `ErrorBoundary` and `errorElement` on your route - `ErrorBoundary` will be used.'
        ),
      Object.assign(t, { errorElement: f.createElement(e.ErrorBoundary), ErrorBoundary: void 0 })),
    t
  );
}
var Ui = class {
  constructor() {
    (this.status = 'pending'),
      (this.promise = new Promise((e, t) => {
        (this.resolve = (r) => {
          this.status === 'pending' && ((this.status = 'resolved'), e(r));
        }),
          (this.reject = (r) => {
            this.status === 'pending' && ((this.status = 'rejected'), t(r));
          });
      }));
  }
};
function Xl({ router: e, flushSync: t }) {
  let [r, n] = f.useState(e.state),
    [a, o] = f.useState(),
    [l, s] = f.useState({ isTransitioning: !1 }),
    [i, u] = f.useState(),
    [d, m] = f.useState(),
    [y, w] = f.useState(),
    E = f.useRef(new Map()),
    R = f.useCallback(
      (P, { deletedFetchers: M, flushSync: h, viewTransitionOpts: L }) => {
        P.fetchers.forEach((A, j) => {
          A.data !== void 0 && E.current.set(j, A.data);
        }),
          M.forEach((A) => E.current.delete(A)),
          vn(
            h === !1 || t != null,
            'You provided the `flushSync` option to a router update, but you are not using the `<RouterProvider>` from `react-router/dom` so `ReactDOM.flushSync()` is unavailable.  Please update your app to `import { RouterProvider } from "react-router/dom"` and ensure you have `react-dom` installed as a dependency to use the `flushSync` option.'
          );
        let k =
          e.window != null &&
          e.window.document != null &&
          typeof e.window.document.startViewTransition == 'function';
        if (
          (vn(
            L == null || k,
            'You provided the `viewTransition` option to a router update, but you do not appear to be running in a DOM environment as `window.startViewTransition` is not available.'
          ),
          !L || !k)
        ) {
          t && h ? t(() => n(P)) : f.startTransition(() => n(P));
          return;
        }
        if (t && h) {
          t(() => {
            d && (i && i.resolve(), d.skipTransition()),
              s({
                isTransitioning: !0,
                flushSync: !0,
                currentLocation: L.currentLocation,
                nextLocation: L.nextLocation,
              });
          });
          let A = e.window.document.startViewTransition(() => {
            t(() => n(P));
          });
          A.finished.finally(() => {
            t(() => {
              u(void 0), m(void 0), o(void 0), s({ isTransitioning: !1 });
            });
          }),
            t(() => m(A));
          return;
        }
        d
          ? (i && i.resolve(),
            d.skipTransition(),
            w({ state: P, currentLocation: L.currentLocation, nextLocation: L.nextLocation }))
          : (o(P),
            s({
              isTransitioning: !0,
              flushSync: !1,
              currentLocation: L.currentLocation,
              nextLocation: L.nextLocation,
            }));
      },
      [e.window, t, d, i]
    );
  f.useLayoutEffect(() => e.subscribe(R), [e, R]),
    f.useEffect(() => {
      l.isTransitioning && !l.flushSync && u(new Ui());
    }, [l]),
    f.useEffect(() => {
      if (i && a && e.window) {
        let P = a,
          M = i.promise,
          h = e.window.document.startViewTransition(async () => {
            f.startTransition(() => n(P)), await M;
          });
        h.finished.finally(() => {
          u(void 0), m(void 0), o(void 0), s({ isTransitioning: !1 });
        }),
          m(h);
      }
    }, [a, i, e.window]),
    f.useEffect(() => {
      i && a && r.location.key === a.location.key && i.resolve();
    }, [i, d, r.location, a]),
    f.useEffect(() => {
      !l.isTransitioning &&
        y &&
        (o(y.state),
        s({
          isTransitioning: !0,
          flushSync: !1,
          currentLocation: y.currentLocation,
          nextLocation: y.nextLocation,
        }),
        w(void 0));
    }, [l.isTransitioning, y]);
  let g = f.useMemo(
      () => ({
        createHref: e.createHref,
        encodeLocation: e.encodeLocation,
        go: (P) => e.navigate(P),
        push: (P, M, h) =>
          e.navigate(P, {
            state: M,
            preventScrollReset: h == null ? void 0 : h.preventScrollReset,
          }),
        replace: (P, M, h) =>
          e.navigate(P, {
            replace: !0,
            state: M,
            preventScrollReset: h == null ? void 0 : h.preventScrollReset,
          }),
      }),
      [e]
    ),
    S = e.basename || '/',
    x = f.useMemo(() => ({ router: e, navigator: g, static: !1, basename: S }), [e, g, S]);
  return f.createElement(
    f.Fragment,
    null,
    f.createElement(
      Oe.Provider,
      { value: x },
      f.createElement(
        ze.Provider,
        { value: r },
        f.createElement(
          Wn.Provider,
          { value: E.current },
          f.createElement(
            vr.Provider,
            { value: l },
            f.createElement(
              zi,
              { basename: S, location: r.location, navigationType: r.historyAction, navigator: g },
              f.createElement(Hi, { routes: e.routes, future: e.future, state: r })
            )
          )
        )
      )
    ),
    null
  );
}
var Hi = f.memo(Bi);
function Bi({ routes: e, future: t, state: r }) {
  return Mi(e, void 0, r, t);
}
function Kl(e) {
  return Ti(e.context);
}
function zi({
  basename: e = '/',
  children: t = null,
  location: r,
  navigationType: n = 'POP',
  navigator: a,
  static: o = !1,
}) {
  U(
    !ot(),
    'You cannot render a <Router> inside another <Router>. You should never have more than one in your app.'
  );
  let l = e.replace(/^\/*/, '/'),
    s = f.useMemo(() => ({ basename: l, navigator: a, static: o, future: {} }), [l, a, o]);
  typeof r == 'string' && (r = xe(r));
  let { pathname: i = '/', search: u = '', hash: d = '', state: m = null, key: y = 'default' } = r,
    w = f.useMemo(() => {
      let E = ae(i, l);
      return E == null
        ? null
        : { location: { pathname: E, search: u, hash: d, state: m, key: y }, navigationType: n };
    }, [l, i, u, d, m, y, n]);
  return (
    Z(
      w != null,
      `<Router basename="${l}"> is not able to match the URL "${i}${u}${d}" because it does not start with the basename, so the <Router> won't render anything.`
    ),
    w == null
      ? null
      : f.createElement(
          se.Provider,
          { value: s },
          f.createElement(Ot.Provider, { children: t, value: w })
        )
  );
}
var Lt = 'get',
  Ct = 'application/x-www-form-urlencoded';
function At(e) {
  return e != null && typeof e.tagName == 'string';
}
function Yi(e) {
  return At(e) && e.tagName.toLowerCase() === 'button';
}
function Wi(e) {
  return At(e) && e.tagName.toLowerCase() === 'form';
}
function Vi(e) {
  return At(e) && e.tagName.toLowerCase() === 'input';
}
function Ji(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function Gi(e, t) {
  return e.button === 0 && (!t || t === '_self') && !Ji(e);
}
var Rt = null;
function Xi() {
  if (Rt === null)
    try {
      new FormData(document.createElement('form'), 0), (Rt = !1);
    } catch {
      Rt = !0;
    }
  return Rt;
}
var Ki = new Set(['application/x-www-form-urlencoded', 'multipart/form-data', 'text/plain']);
function Gt(e) {
  return e != null && !Ki.has(e)
    ? (Z(
        !1,
        `"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Ct}"`
      ),
      null)
    : e;
}
function qi(e, t) {
  let r, n, a, o, l;
  if (Wi(e)) {
    let s = e.getAttribute('action');
    (n = s ? ae(s, t) : null),
      (r = e.getAttribute('method') || Lt),
      (a = Gt(e.getAttribute('enctype')) || Ct),
      (o = new FormData(e));
  } else if (Yi(e) || (Vi(e) && (e.type === 'submit' || e.type === 'image'))) {
    let s = e.form;
    if (s == null)
      throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
    let i = e.getAttribute('formaction') || s.getAttribute('action');
    if (
      ((n = i ? ae(i, t) : null),
      (r = e.getAttribute('formmethod') || s.getAttribute('method') || Lt),
      (a = Gt(e.getAttribute('formenctype')) || Gt(s.getAttribute('enctype')) || Ct),
      (o = new FormData(s, e)),
      !Xi())
    ) {
      let { name: u, type: d, value: m } = e;
      if (d === 'image') {
        let y = u ? `${u}.` : '';
        o.append(`${y}x`, '0'), o.append(`${y}y`, '0');
      } else u && o.append(u, m);
    }
  } else {
    if (At(e))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    (r = Lt), (n = null), (a = Ct), (l = e);
  }
  return (
    o && a === 'text/plain' && ((l = o), (o = void 0)),
    { action: n, method: r.toLowerCase(), encType: a, formData: o, body: l }
  );
}
function le(e, t) {
  if (e === !1 || e === null || typeof e > 'u') throw new Error(t);
}
async function qn(e, t) {
  if (e.id in t) return t[e.id];
  try {
    let r = await import(e.module);
    return (t[e.id] = r), r;
  } catch (r) {
    return (
      console.error(`Error loading route module \`${e.module}\`, reloading page...`),
      console.error(r),
      window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
      window.location.reload(),
      new Promise(() => {})
    );
  }
}
function Qi(e, t, r) {
  let n = e
      .map((o) => {
        var i;
        let l = t[o.route.id],
          s = r.routes[o.route.id];
        return [
          s && s.css ? s.css.map((u) => ({ rel: 'stylesheet', href: u })) : [],
          ((i = l == null ? void 0 : l.links) == null ? void 0 : i.call(l)) || [],
        ];
      })
      .flat(2),
    a = Rr(e, r);
  return ta(n, a);
}
function Qn(e) {
  return e.css ? e.css.map((t) => ({ rel: 'stylesheet', href: t })) : [];
}
async function Zi(e) {
  if (!e.css) return;
  let t = Qn(e);
  await Promise.all(t.map(ea));
}
async function Zn(e, t) {
  if ((!e.css && !t.links) || !al()) return;
  let r = [];
  if ((e.css && r.push(...Qn(e)), t.links && r.push(...t.links()), r.length === 0)) return;
  let n = [];
  for (let a of r)
    !Er(a) && a.rel === 'stylesheet' && n.push({ ...a, rel: 'preload', as: 'style' });
  await Promise.all(n.map(ea));
}
async function ea(e) {
  return new Promise((t) => {
    if (
      (e.media && !window.matchMedia(e.media).matches) ||
      document.querySelector(`link[rel="stylesheet"][href="${e.href}"]`)
    )
      return t();
    let r = document.createElement('link');
    Object.assign(r, e);
    function n() {
      document.head.contains(r) && document.head.removeChild(r);
    }
    (r.onload = () => {
      n(), t();
    }),
      (r.onerror = () => {
        n(), t();
      }),
      document.head.appendChild(r);
  });
}
function Er(e) {
  return e != null && typeof e.page == 'string';
}
function el(e) {
  return e == null
    ? !1
    : e.href == null
      ? e.rel === 'preload' && typeof e.imageSrcSet == 'string' && typeof e.imageSizes == 'string'
      : typeof e.rel == 'string' && typeof e.href == 'string';
}
async function tl(e, t, r) {
  let n = await Promise.all(
    e.map(async (a) => {
      let o = t.routes[a.route.id];
      if (o) {
        let l = await qn(o, r);
        return l.links ? l.links() : [];
      }
      return [];
    })
  );
  return ta(
    n
      .flat(1)
      .filter(el)
      .filter((a) => a.rel === 'stylesheet' || a.rel === 'preload')
      .map((a) =>
        a.rel === 'stylesheet' ? { ...a, rel: 'prefetch', as: 'style' } : { ...a, rel: 'prefetch' }
      )
  );
}
function gn(e, t, r, n, a, o) {
  let l = (i, u) => (r[u] ? i.route.id !== r[u].route.id : !0),
    s = (i, u) => {
      var d;
      return (
        r[u].pathname !== i.pathname ||
        (((d = r[u].route.path) == null ? void 0 : d.endsWith('*')) &&
          r[u].params['*'] !== i.params['*'])
      );
    };
  return o === 'assets'
    ? t.filter((i, u) => l(i, u) || s(i, u))
    : o === 'data'
      ? t.filter((i, u) => {
          var m;
          let d = n.routes[i.route.id];
          if (!d || !d.hasLoader) return !1;
          if (l(i, u) || s(i, u)) return !0;
          if (i.route.shouldRevalidate) {
            let y = i.route.shouldRevalidate({
              currentUrl: new URL(a.pathname + a.search + a.hash, window.origin),
              currentParams: ((m = r[0]) == null ? void 0 : m.params) || {},
              nextUrl: new URL(e, window.origin),
              nextParams: i.params,
              defaultShouldRevalidate: !0,
            });
            if (typeof y == 'boolean') return y;
          }
          return !0;
        })
      : [];
}
function Rr(e, t, { includeHydrateFallback: r } = {}) {
  return rl(
    e
      .map((n) => {
        let a = t.routes[n.route.id];
        if (!a) return [];
        let o = [a.module];
        return (
          a.clientActionModule && (o = o.concat(a.clientActionModule)),
          a.clientLoaderModule && (o = o.concat(a.clientLoaderModule)),
          r && a.hydrateFallbackModule && (o = o.concat(a.hydrateFallbackModule)),
          a.imports && (o = o.concat(a.imports)),
          o
        );
      })
      .flat(1)
  );
}
function rl(e) {
  return [...new Set(e)];
}
function nl(e) {
  let t = {},
    r = Object.keys(e).sort();
  for (let n of r) t[n] = e[n];
  return t;
}
function ta(e, t) {
  let r = new Set(),
    n = new Set(t);
  return e.reduce((a, o) => {
    if (t && !Er(o) && o.as === 'script' && o.href && n.has(o.href)) return a;
    let s = JSON.stringify(nl(o));
    return r.has(s) || (r.add(s), a.push({ key: s, link: o })), a;
  }, []);
}
var bt;
function al() {
  if (bt !== void 0) return bt;
  let e = document.createElement('link');
  return (bt = e.relList.supports('preload')), (e = null), bt;
}
function wn(e) {
  return { __html: e };
}
async function $t(e) {
  let t = { signal: e.signal };
  if (e.method !== 'GET') {
    t.method = e.method;
    let r = e.headers.get('Content-Type');
    r && /\bapplication\/json\b/.test(r)
      ? ((t.headers = { 'Content-Type': r }), (t.body = JSON.stringify(await e.json())))
      : r && /\btext\/plain\b/.test(r)
        ? ((t.headers = { 'Content-Type': r }), (t.body = await e.text()))
        : r && /\bapplication\/x-www-form-urlencoded\b/.test(r)
          ? (t.body = new URLSearchParams(await e.text()))
          : (t.body = await e.formData());
  }
  return t;
}
var ra = Symbol('SingleFetchRedirect');
function ql(e, t, r, n, a) {
  return async (o) => {
    let { request: l, matches: s, fetcherKey: i } = o;
    return l.method !== 'GET'
      ? rt(
          o,
          !1,
          () => ol(l, s, n),
          (u) => ({ [u.routeId]: { type: 'error', result: u.error } })
        )
      : !r &&
          !s.some((d) => {
            var m, y;
            return (
              d.shouldLoad &&
              ((m = e.routes[d.route.id]) == null ? void 0 : m.hasLoader) &&
              !((y = e.routes[d.route.id]) != null && y.hasClientLoader)
            );
          })
        ? rt(
            o,
            !1,
            () => il(e, l, s, n),
            (d) => ({ [d.routeId]: { type: 'error', result: d.error } })
          )
        : i
          ? rt(
              o,
              !1,
              () => ul(l, s, n),
              (u) => ({ [u.routeId]: { type: 'error', result: u.error } })
            )
          : rt(
              o,
              !1,
              () => sl(e, t, r, a(), l, s, n),
              (u) => ({ [u.routeId]: { type: 'error', result: u.error } })
            );
  };
}
async function ol(e, t, r) {
  let n = t.find((l) => l.shouldLoad);
  le(n, 'No action match found');
  let a,
    o = await n.resolve(
      async (l) =>
        await l(async () => {
          let i = ut(e.url, r),
            u = await $t(e),
            { data: d, status: m } = await xr(i, u);
          return (a = m), rr(d, n.route.id);
        })
    );
  return pr(o.result) || ke(o.result)
    ? { [n.route.id]: o }
    : { [n.route.id]: { type: o.type, result: Ko(o.result, a) } };
}
async function il(e, t, r, n) {
  let a = r.filter((i) => i.shouldLoad),
    o = Sr(ut(t.url, n)),
    l = await $t(t),
    s = {};
  return (
    await Promise.all(
      a.map((i) =>
        i.resolve(async (u) => {
          var d;
          try {
            let m =
              (d = e.routes[i.route.id]) != null && d.hasClientLoader
                ? await br(u, o, l, i.route.id)
                : await u();
            s[i.route.id] = { type: 'data', result: m };
          } catch (m) {
            s[i.route.id] = { type: 'error', result: m };
          }
        })
      )
    ),
    s
  );
}
function ll(e, t, r, n) {
  return r.route.id in n.state.loaderData && e && e.hasLoader && t && t.shouldRevalidate;
}
async function sl(e, t, r, n, a, o, l) {
  let s = new Set(),
    i = !1,
    u = o.map(() => En()),
    d = Promise.all(u.map((g) => g.promise)),
    m = En(),
    y = Sr(ut(a.url, l)),
    w = await $t(a),
    E = {},
    R = Promise.all(
      o.map(async (g, S) =>
        g.resolve(async (x) => {
          u[S].resolve();
          let P = e.routes[g.route.id];
          if (!g.shouldLoad) {
            if (!n.state.initialized) return;
            if (ll(P, t[g.route.id], g, n)) {
              i = !0;
              return;
            }
          }
          if (P && P.hasClientLoader) {
            P.hasLoader && (i = !0);
            try {
              let M = await br(x, y, w, g.route.id);
              E[g.route.id] = { type: 'data', result: M };
            } catch (M) {
              E[g.route.id] = { type: 'error', result: M };
            }
            return;
          }
          P && P.hasLoader && s.add(g.route.id);
          try {
            let M = await x(async () => {
              let h = await m.promise;
              return na(h, g.route.id);
            });
            E[g.route.id] = { type: 'data', result: M };
          } catch (M) {
            E[g.route.id] = { type: 'error', result: M };
          }
        })
      )
    );
  if ((await d, (!n.state.initialized || s.size === 0) && !window.__reactRouterHdrActive))
    m.resolve({});
  else
    try {
      r &&
        i &&
        s.size > 0 &&
        y.searchParams.set(
          '_routes',
          o
            .filter((S) => s.has(S.route.id))
            .map((S) => S.route.id)
            .join(',')
        );
      let g = await xr(y, w);
      m.resolve(g.data);
    } catch (g) {
      m.reject(g);
    }
  return await R, E;
}
async function ul(e, t, r) {
  let n = t.find((o) => o.shouldLoad);
  le(n, 'No fetcher match found');
  let a = await n.resolve(async (o) => {
    let l = Sr(ut(e.url, r)),
      s = await $t(e);
    return br(o, l, s, n.route.id);
  });
  return { [n.route.id]: a };
}
function br(e, t, r, n) {
  return e(async () => {
    let a = new URL(t);
    a.searchParams.set('_routes', n);
    let { data: o } = await xr(a, r);
    return na(o, n);
  });
}
function Sr(e) {
  let t = e.searchParams.getAll('index');
  e.searchParams.delete('index');
  let r = [];
  for (let n of t) n && r.push(n);
  for (let n of r) e.searchParams.append('index', n);
  return e;
}
function ut(e, t) {
  let r =
    typeof e == 'string'
      ? new URL(e, typeof window > 'u' ? 'server://singlefetch/' : window.location.origin)
      : e;
  return (
    r.pathname === '/'
      ? (r.pathname = '_root.data')
      : t && ae(r.pathname, t) === '/'
        ? (r.pathname = `${t.replace(/\/$/, '')}/_root.data`)
        : (r.pathname = `${r.pathname.replace(/\/$/, '')}.data`),
    r
  );
}
async function xr(e, t) {
  let r = await fetch(e, t);
  if (r.status === 404 && !r.headers.has('X-Remix-Response')) throw new Se(404, 'Not Found', !0);
  if (new Set([100, 101, 204, 205]).has(r.status))
    return !t.method || t.method === 'GET'
      ? { status: r.status, data: {} }
      : { status: r.status, data: { data: void 0 } };
  le(r.body, 'No response body to decode');
  try {
    let a = await cl(r.body, window);
    return { status: r.status, data: a.value };
  } catch {
    throw new Error('Unable to decode turbo-stream response');
  }
}
function cl(e, t) {
  return ho(e, {
    plugins: [
      (r, ...n) => {
        if (r === 'SanitizedError') {
          let [a, o, l] = n,
            s = Error;
          a && a in t && typeof t[a] == 'function' && (s = t[a]);
          let i = new s(o);
          return (i.stack = l), { value: i };
        }
        if (r === 'ErrorResponse') {
          let [a, o, l] = n;
          return { value: new Se(o, l, a) };
        }
        if (r === 'SingleFetchRedirect') return { value: { [ra]: n[0] } };
        if (r === 'SingleFetchClassInstance') return { value: n[0] };
        if (r === 'SingleFetchFallback') return { value: void 0 };
      },
    ],
  });
}
function na(e, t) {
  let r = e[ra];
  return r ? rr(r, t) : e[t] !== void 0 ? rr(e[t], t) : null;
}
function rr(e, t) {
  if ('error' in e) throw e.error;
  if ('redirect' in e) {
    let r = {};
    throw (
      (e.revalidate && (r['X-Remix-Revalidate'] = 'yes'),
      e.reload && (r['X-Remix-Reload-Document'] = 'yes'),
      e.replace && (r['X-Remix-Replace'] = 'yes'),
      qo(e.redirect, { status: e.status, headers: r }))
    );
  } else {
    if ('data' in e) return e.data;
    throw new Error(`No response found for routeId "${t}"`);
  }
}
function En() {
  let e,
    t,
    r = new Promise((n, a) => {
      (e = async (o) => {
        n(o);
        try {
          await r;
        } catch {}
      }),
        (t = async (o) => {
          a(o);
          try {
            await r;
          } catch {}
        });
    });
  return { promise: r, resolve: e, reject: t };
}
var Ql = class extends f.Component {
  constructor(e) {
    super(e), (this.state = { error: e.error || null, location: e.location });
  }
  static getDerivedStateFromError(e) {
    return { error: e };
  }
  static getDerivedStateFromProps(e, t) {
    return t.location !== e.location
      ? { error: e.error || null, location: e.location }
      : { error: e.error || t.error, location: t.location };
  }
  render() {
    return this.state.error
      ? f.createElement(aa, { error: this.state.error, isOutsideRemixApp: !0 })
      : this.props.children;
  }
};
function aa({ error: e, isOutsideRemixApp: t }) {
  console.error(e);
  let r = f.createElement('script', {
    dangerouslySetInnerHTML: {
      __html: `
        console.log(
          "💿 Hey developer 👋. You can provide a way better UX than this when your app throws errors. Check out https://remix.run/guides/errors for more information."
        );
      `,
    },
  });
  if (ke(e))
    return f.createElement(
      nr,
      { title: 'Unhandled Thrown Response!' },
      f.createElement('h1', { style: { fontSize: '24px' } }, e.status, ' ', e.statusText),
      r
    );
  let n;
  if (e instanceof Error) n = e;
  else {
    let a =
      e == null
        ? 'Unknown Error'
        : typeof e == 'object' && 'toString' in e
          ? e.toString()
          : JSON.stringify(e);
    n = new Error(a);
  }
  return f.createElement(
    nr,
    { title: 'Application Error!', isOutsideRemixApp: t },
    f.createElement('h1', { style: { fontSize: '24px' } }, 'Application Error'),
    f.createElement(
      'pre',
      {
        style: {
          padding: '2rem',
          background: 'hsla(10, 50%, 50%, 0.1)',
          color: 'red',
          overflow: 'auto',
        },
      },
      n.stack
    ),
    r
  );
}
function nr({ title: e, renderScripts: t, isOutsideRemixApp: r, children: n }) {
  var o;
  let { routeModules: a } = Ye();
  return (o = a.root) != null && o.Layout && !r
    ? n
    : f.createElement(
        'html',
        { lang: 'en' },
        f.createElement(
          'head',
          null,
          f.createElement('meta', { charSet: 'utf-8' }),
          f.createElement('meta', {
            name: 'viewport',
            content: 'width=device-width,initial-scale=1,viewport-fit=cover',
          }),
          f.createElement('title', null, e)
        ),
        f.createElement(
          'body',
          null,
          f.createElement(
            'main',
            { style: { fontFamily: 'system-ui, sans-serif', padding: '2rem' } },
            n,
            t ? f.createElement(Ll, null) : null
          )
        )
      );
}
function dl() {
  return f.createElement(
    nr,
    { title: 'Loading...', renderScripts: !0 },
    f.createElement('script', {
      dangerouslySetInnerHTML: {
        __html: `
              console.log(
                "💿 Hey developer 👋. You can provide a way better UX than this " +
                "when your app is loading JS modules and/or running \`clientLoader\` " +
                "functions. Check out https://remix.run/route/hydrate-fallback " +
                "for more information."
              );
            `,
      },
    })
  );
}
function oa(e) {
  let t = {};
  return (
    Object.values(e).forEach((r) => {
      if (r) {
        let n = r.parentId || '';
        t[n] || (t[n] = []), t[n].push(r);
      }
    }),
    t
  );
}
function fl(e, t, r) {
  let n = ia(t),
    a =
      t.HydrateFallback && (!r || e.id === 'root')
        ? t.HydrateFallback
        : e.id === 'root'
          ? dl
          : void 0,
    o = t.ErrorBoundary
      ? t.ErrorBoundary
      : e.id === 'root'
        ? () => f.createElement(aa, { error: Xn() })
        : void 0;
  return e.id === 'root' && t.Layout
    ? {
        ...(n
          ? { element: f.createElement(t.Layout, null, f.createElement(n, null)) }
          : { Component: n }),
        ...(o
          ? { errorElement: f.createElement(t.Layout, null, f.createElement(o, null)) }
          : { ErrorBoundary: o }),
        ...(a
          ? { hydrateFallbackElement: f.createElement(t.Layout, null, f.createElement(a, null)) }
          : { HydrateFallback: a }),
      }
    : { Component: n, ErrorBoundary: o, HydrateFallback: a };
}
function Zl(e, t, r, n, a, o) {
  return Lr(t, r, n, a, o, '', oa(t), e);
}
function Ue(e, t) {
  if ((e === 'loader' && !t.hasLoader) || (e === 'action' && !t.hasAction)) {
    let n = `You are trying to call ${e === 'action' ? 'serverAction()' : 'serverLoader()'} on a route that does not have a server ${e} (routeId: "${t.id}")`;
    throw (console.error(n), new Se(400, 'Bad Request', new Error(n), !0));
  }
}
function Xt(e, t) {
  let r = e === 'clientAction' ? 'a' : 'an',
    n = `Route "${t}" does not have ${r} ${e}, but you are trying to submit to it. To fix this, please add ${r} \`${e}\` function to the route`;
  throw (console.error(n), new Se(405, 'Method Not Allowed', new Error(n), !0));
}
function Lr(e, t, r, n, a, o = '', l = oa(e), s) {
  return (l[o] || []).map((i) => {
    var x, P, M;
    let u = t[i.id];
    function d(h) {
      return (
        le(typeof h == 'function', 'No single fetch function available for route handler'), h()
      );
    }
    function m(h) {
      return i.hasLoader ? d(h) : Promise.resolve(null);
    }
    function y(h) {
      if (!i.hasAction) throw Xt('action', i.id);
      return d(h);
    }
    function w(h) {
      import(h);
    }
    function E(h) {
      h.clientActionModule && w(h.clientActionModule),
        h.clientLoaderModule && w(h.clientLoaderModule);
    }
    async function R(h) {
      let L = t[i.id],
        k = L ? Zn(i, L) : Promise.resolve();
      try {
        return h();
      } finally {
        await k;
      }
    }
    let g = { id: i.id, index: i.index, path: i.path };
    if (u) {
      Object.assign(g, {
        ...g,
        ...fl(i, u, a),
        unstable_middleware: u.unstable_clientMiddleware,
        handle: u.handle,
        shouldRevalidate: Rn(u, i, n, s),
      });
      let h = r && r.loaderData && i.id in r.loaderData,
        L = h ? ((x = r == null ? void 0 : r.loaderData) == null ? void 0 : x[i.id]) : void 0,
        k = r && r.errors && i.id in r.errors,
        A = k ? ((P = r == null ? void 0 : r.errors) == null ? void 0 : P[i.id]) : void 0,
        j =
          s == null && (((M = u.clientLoader) == null ? void 0 : M.hydrate) === !0 || !i.hasLoader);
      (g.loader = async ({ request: B, params: K, context: oe }, q) => {
        try {
          return await R(
            async () => (
              le(u, 'No `routeModule` available for critical-route loader'),
              u.clientLoader
                ? u.clientLoader({
                    request: B,
                    params: K,
                    context: oe,
                    async serverLoader() {
                      if ((Ue('loader', i), j)) {
                        if (h) return L;
                        if (k) throw A;
                      }
                      return m(q);
                    },
                  })
                : m(q)
            )
          );
        } finally {
          j = !1;
        }
      }),
        (g.loader.hydrate = pl(i, u, a)),
        (g.action = ({ request: B, params: K, context: oe }, q) =>
          R(async () => {
            if ((le(u, 'No `routeModule` available for critical-route action'), !u.clientAction)) {
              if (a) throw Xt('clientAction', i.id);
              return y(q);
            }
            return u.clientAction({
              request: B,
              params: K,
              context: oe,
              async serverAction() {
                return Ue('action', i), y(q);
              },
            });
          }));
    } else
      i.hasClientLoader
        ? i.clientLoaderModule &&
          (g.loader = async (h, L) => {
            le(i.clientLoaderModule);
            let { clientLoader: k } = await import(i.clientLoaderModule);
            return k({
              ...h,
              async serverLoader() {
                return Ue('loader', i), m(L);
              },
            });
          })
        : (g.loader = (h, L) => R(() => m(L))),
        i.hasClientAction
          ? i.clientActionModule &&
            (g.action = async (h, L) => {
              le(i.clientActionModule), E(i);
              let { clientAction: k } = await import(i.clientActionModule);
              return k({
                ...h,
                async serverAction() {
                  return Ue('action', i), y(L);
                },
              });
            })
          : (g.action = (h, L) =>
              R(() => {
                if (a) throw Xt('clientAction', i.id);
                return y(L);
              })),
        (g.lazy = async () => {
          (i.clientLoaderModule || i.clientActionModule) &&
            (await new Promise((A) => setTimeout(A, 0)));
          let h = ml(i, t);
          E(i);
          let L = await h,
            k = { ...L };
          if (L.clientLoader) {
            let A = L.clientLoader;
            k.loader = (j, B) =>
              A({
                ...j,
                async serverLoader() {
                  return Ue('loader', i), m(B);
                },
              });
          }
          if (L.clientAction) {
            let A = L.clientAction;
            k.action = (j, B) =>
              A({
                ...j,
                async serverAction() {
                  return Ue('action', i), y(B);
                },
              });
          }
          return {
            ...(k.loader ? { loader: k.loader } : {}),
            ...(k.action ? { action: k.action } : {}),
            unstable_middleware: L.unstable_clientMiddleware,
            hasErrorBoundary: k.hasErrorBoundary,
            shouldRevalidate: Rn(k, i, n, s),
            handle: k.handle,
            Component: k.Component,
            ErrorBoundary: k.ErrorBoundary,
          };
        });
    let S = Lr(e, t, r, n, a, i.id, l, s);
    return S.length > 0 && (g.children = S), g;
  });
}
function Rn(e, t, r, n) {
  if (n) return hl(t.id, e.shouldRevalidate, n);
  if (!r && t.hasLoader && !t.hasClientLoader)
    if (e.shouldRevalidate) {
      let a = e.shouldRevalidate;
      return (o) => a({ ...o, defaultShouldRevalidate: !1 });
    } else return () => !1;
  if (r && e.shouldRevalidate) {
    let a = e.shouldRevalidate;
    return (o) => a({ ...o, defaultShouldRevalidate: !0 });
  }
  return e.shouldRevalidate;
}
function hl(e, t, r) {
  let n = !1;
  return (a) => (n ? (t ? t(a) : a.defaultShouldRevalidate) : ((n = !0), r.has(e)));
}
async function ml(e, t) {
  let r = qn(e, t),
    n = Zi(e),
    a = await r;
  return (
    await Promise.all([n, Zn(e, a)]),
    {
      Component: ia(a),
      ErrorBoundary: a.ErrorBoundary,
      unstable_clientMiddleware: a.unstable_clientMiddleware,
      clientAction: a.clientAction,
      clientLoader: a.clientLoader,
      handle: a.handle,
      links: a.links,
      meta: a.meta,
      shouldRevalidate: a.shouldRevalidate,
    }
  );
}
function ia(e) {
  if (e.default == null) return;
  if (!(typeof e.default == 'object' && Object.keys(e.default).length === 0)) return e.default;
}
function pl(e, t, r) {
  return (
    (r && e.id !== 'root') ||
    (t.clientLoader != null && (t.clientLoader.hydrate === !0 || e.hasLoader !== !0))
  );
}
var Pt = new Set(),
  yl = 1e3,
  _t = new Set(),
  vl = 7680;
function Cr(e) {
  return e === !0;
}
function gl(e, t) {
  let r = new Set(t.state.matches.map((l) => l.route.id)),
    n = t.state.location.pathname.split('/').filter(Boolean),
    a = ['/'];
  for (n.pop(); n.length > 0; ) a.push(`/${n.join('/')}`), n.pop();
  a.forEach((l) => {
    let s = ge(t.routes, l, t.basename);
    s && s.forEach((i) => r.add(i.route.id));
  });
  let o = [...r].reduce((l, s) => Object.assign(l, { [s]: e.routes[s] }), {});
  return { ...e, routes: o };
}
function es(e, t, r, n, a) {
  if (Cr(r))
    return async ({ path: o, patch: l, signal: s, fetcherKey: i }) => {
      _t.has(o) || (await la([o], i ? window.location.href : o, e, t, r, n, a, l, s));
    };
}
function ts(e, t, r, n, a) {
  f.useEffect(() => {
    var u;
    if (!Cr(n) || ((u = navigator.connection) == null ? void 0 : u.saveData) === !0) return;
    function o(d) {
      let m = d.tagName === 'FORM' ? d.getAttribute('action') : d.getAttribute('href');
      if (!m) return;
      let y = d.tagName === 'A' ? d.pathname : new URL(m, window.location.origin).pathname;
      _t.has(y) || Pt.add(y);
    }
    async function l() {
      document.querySelectorAll('a[data-discover], form[data-discover]').forEach(o);
      let d = Array.from(Pt.keys()).filter((m) => (_t.has(m) ? (Pt.delete(m), !1) : !0));
      if (d.length !== 0)
        try {
          await la(d, null, t, r, n, a, e.basename, e.patchRoutes);
        } catch (m) {
          console.error('Failed to fetch manifest patches', m);
        }
    }
    let s = El(l, 100);
    l();
    let i = new MutationObserver(() => s());
    return (
      i.observe(document.documentElement, {
        subtree: !0,
        childList: !0,
        attributes: !0,
        attributeFilter: ['data-discover', 'href', 'action'],
      }),
      () => i.disconnect()
    );
  }, [n, a, t, r, e]);
}
var Kt = 'react-router-manifest-version';
async function la(e, t, r, n, a, o, l, s, i) {
  let u = `${l ?? '/'}/__manifest`.replace(/\/+/g, '/'),
    d = new URL(u, window.location.origin);
  if (
    (e.sort().forEach((R) => d.searchParams.append('p', R)),
    d.searchParams.set('version', r.version),
    d.toString().length > vl)
  ) {
    Pt.clear();
    return;
  }
  let m;
  try {
    let R = await fetch(d, { signal: i });
    if (R.ok) {
      if (R.status === 204 && R.headers.has('X-Remix-Reload-Document')) {
        if (!t) {
          console.warn(
            'Detected a manifest version mismatch during eager route discovery. The next navigation/fetch to an undiscovered route will result in a new document navigation to sync up with the latest manifest.'
          );
          return;
        }
        if (sessionStorage.getItem(Kt) === r.version) {
          console.error('Unable to discover routes due to manifest version mismatch.');
          return;
        }
        throw (
          (sessionStorage.setItem(Kt, r.version),
          (window.location.href = t),
          new Error('Detected manifest version mismatch, reloading...'))
        );
      } else if (R.status >= 400) throw new Error(await R.text());
    } else throw new Error(`${R.status} ${R.statusText}`);
    sessionStorage.removeItem(Kt), (m = await R.json());
  } catch (R) {
    if (i != null && i.aborted) return;
    throw R;
  }
  let y = new Set(Object.keys(r.routes)),
    w = Object.values(m).reduce((R, g) => (g && !y.has(g.id) && (R[g.id] = g), R), {});
  Object.assign(r.routes, w), e.forEach((R) => wl(R, _t));
  let E = new Set();
  Object.values(w).forEach((R) => {
    R && (!R.parentId || !w[R.parentId]) && E.add(R.parentId);
  }),
    E.forEach((R) => s(R || null, Lr(w, n, null, a, o, R)));
}
function wl(e, t) {
  if (t.size >= yl) {
    let r = t.values().next().value;
    t.delete(r);
  }
  t.add(e);
}
function El(e, t) {
  let r;
  return (...n) => {
    window.clearTimeout(r), (r = window.setTimeout(() => e(...n), t));
  };
}
function Pr() {
  let e = f.useContext(Oe);
  return le(e, 'You must render this element inside a <DataRouterContext.Provider> element'), e;
}
function Nt() {
  let e = f.useContext(ze);
  return (
    le(e, 'You must render this element inside a <DataRouterStateContext.Provider> element'), e
  );
}
var It = f.createContext(void 0);
It.displayName = 'FrameworkContext';
function Ye() {
  let e = f.useContext(It);
  return le(e, 'You must render this element inside a <HydratedRouter> element'), e;
}
function Rl(e, t) {
  let r = f.useContext(It),
    [n, a] = f.useState(!1),
    [o, l] = f.useState(!1),
    { onFocus: s, onBlur: i, onMouseEnter: u, onMouseLeave: d, onTouchStart: m } = t,
    y = f.useRef(null);
  f.useEffect(() => {
    if ((e === 'render' && l(!0), e === 'viewport')) {
      let R = (S) => {
          S.forEach((x) => {
            l(x.isIntersecting);
          });
        },
        g = new IntersectionObserver(R, { threshold: 0.5 });
      return (
        y.current && g.observe(y.current),
        () => {
          g.disconnect();
        }
      );
    }
  }, [e]),
    f.useEffect(() => {
      if (n) {
        let R = setTimeout(() => {
          l(!0);
        }, 100);
        return () => {
          clearTimeout(R);
        };
      }
    }, [n]);
  let w = () => {
      a(!0);
    },
    E = () => {
      a(!1), l(!1);
    };
  return r
    ? e !== 'intent'
      ? [o, y, {}]
      : [
          o,
          y,
          {
            onFocus: et(s, w),
            onBlur: et(i, E),
            onMouseEnter: et(u, w),
            onMouseLeave: et(d, E),
            onTouchStart: et(m, w),
          },
        ]
    : [!1, y, {}];
}
function et(e, t) {
  return (r) => {
    e && e(r), r.defaultPrevented || t(r);
  };
}
function Tr(e, t, r) {
  if (r && !Tt) return [e[0]];
  if (t) {
    let n = e.findIndex((a) => t[a.route.id] !== void 0);
    return e.slice(0, n + 1);
  }
  return e;
}
function rs() {
  let { isSpaMode: e, manifest: t, routeModules: r, criticalCss: n } = Ye(),
    { errors: a, matches: o } = Nt(),
    l = Tr(o, a, e),
    s = f.useMemo(() => Qi(l, r, t), [l, r, t]);
  return f.createElement(
    f.Fragment,
    null,
    typeof n == 'string'
      ? f.createElement('style', { dangerouslySetInnerHTML: { __html: n } })
      : null,
    typeof n == 'object' ? f.createElement('link', { rel: 'stylesheet', href: n.href }) : null,
    s.map(({ key: i, link: u }) =>
      Er(u) ? f.createElement(sa, { key: i, ...u }) : f.createElement('link', { key: i, ...u })
    )
  );
}
function sa({ page: e, ...t }) {
  let { router: r } = Pr(),
    n = f.useMemo(() => ge(r.routes, e, r.basename), [r.routes, e, r.basename]);
  return n ? f.createElement(Sl, { page: e, matches: n, ...t }) : null;
}
function bl(e) {
  let { manifest: t, routeModules: r } = Ye(),
    [n, a] = f.useState([]);
  return (
    f.useEffect(() => {
      let o = !1;
      return (
        tl(e, t, r).then((l) => {
          o || a(l);
        }),
        () => {
          o = !0;
        }
      );
    }, [e, t, r]),
    n
  );
}
function Sl({ page: e, matches: t, ...r }) {
  let n = me(),
    { manifest: a, routeModules: o } = Ye(),
    { basename: l } = Pr(),
    { loaderData: s, matches: i } = Nt(),
    u = f.useMemo(() => gn(e, t, i, a, n, 'data'), [e, t, i, a, n]),
    d = f.useMemo(() => gn(e, t, i, a, n, 'assets'), [e, t, i, a, n]),
    m = f.useMemo(() => {
      if (e === n.pathname + n.search + n.hash) return [];
      let E = new Set(),
        R = !1;
      if (
        (t.forEach((S) => {
          var P;
          let x = a.routes[S.route.id];
          !x ||
            !x.hasLoader ||
            ((!u.some((M) => M.route.id === S.route.id) &&
              S.route.id in s &&
              (P = o[S.route.id]) != null &&
              P.shouldRevalidate) ||
            x.hasClientLoader
              ? (R = !0)
              : E.add(S.route.id));
        }),
        E.size === 0)
      )
        return [];
      let g = ut(e, l);
      return (
        R &&
          E.size > 0 &&
          g.searchParams.set(
            '_routes',
            t
              .filter((S) => E.has(S.route.id))
              .map((S) => S.route.id)
              .join(',')
          ),
        [g.pathname + g.search]
      );
    }, [l, s, n, a, u, t, e, o]),
    y = f.useMemo(() => Rr(d, a), [d, a]),
    w = bl(d);
  return f.createElement(
    f.Fragment,
    null,
    m.map((E) => f.createElement('link', { key: E, rel: 'prefetch', as: 'fetch', href: E, ...r })),
    y.map((E) => f.createElement('link', { key: E, rel: 'modulepreload', href: E, ...r })),
    w.map(({ key: E, link: R }) => f.createElement('link', { key: E, ...R }))
  );
}
function ns() {
  let { isSpaMode: e, routeModules: t } = Ye(),
    { errors: r, matches: n, loaderData: a } = Nt(),
    o = me(),
    l = Tr(n, r, e),
    s = null;
  r && (s = r[l[l.length - 1].route.id]);
  let i = [],
    u = null,
    d = [];
  for (let m = 0; m < l.length; m++) {
    let y = l[m],
      w = y.route.id,
      E = a[w],
      R = y.params,
      g = t[w],
      S = [],
      x = {
        id: w,
        data: E,
        meta: [],
        params: y.params,
        pathname: y.pathname,
        handle: y.route.handle,
        error: s,
      };
    if (
      ((d[m] = x),
      g != null && g.meta
        ? (S =
            typeof g.meta == 'function'
              ? g.meta({ data: E, params: R, location: o, matches: d, error: s })
              : Array.isArray(g.meta)
                ? [...g.meta]
                : g.meta)
        : u && (S = [...u]),
      (S = S || []),
      !Array.isArray(S))
    )
      throw new Error(
        'The route at ' +
          y.route.path +
          ` returns an invalid value. All route meta functions must return an array of meta objects.

To reference the meta function API, see https://remix.run/route/meta`
      );
    (x.meta = S), (d[m] = x), (i = [...S]), (u = i);
  }
  return f.createElement(
    f.Fragment,
    null,
    i.flat().map((m) => {
      if (!m) return null;
      if ('tagName' in m) {
        let { tagName: y, ...w } = m;
        if (!xl(y))
          return (
            console.warn(
              `A meta object uses an invalid tagName: ${y}. Expected either 'link' or 'meta'`
            ),
            null
          );
        let E = y;
        return f.createElement(E, { key: JSON.stringify(w), ...w });
      }
      if ('title' in m) return f.createElement('title', { key: 'title' }, String(m.title));
      if (
        ('charset' in m && (m.charSet ?? (m.charSet = m.charset), delete m.charset),
        'charSet' in m && m.charSet != null)
      )
        return typeof m.charSet == 'string'
          ? f.createElement('meta', { key: 'charSet', charSet: m.charSet })
          : null;
      if ('script:ld+json' in m)
        try {
          let y = JSON.stringify(m['script:ld+json']);
          return f.createElement('script', {
            key: `script:ld+json:${y}`,
            type: 'application/ld+json',
            dangerouslySetInnerHTML: { __html: y },
          });
        } catch {
          return null;
        }
      return f.createElement('meta', { key: JSON.stringify(m), ...m });
    })
  );
}
function xl(e) {
  return typeof e == 'string' && /^(meta|link)$/.test(e);
}
var Tt = !1;
function Ll(e) {
  let { manifest: t, serverHandoffString: r, isSpaMode: n, ssr: a, renderMeta: o } = Ye(),
    { router: l, static: s, staticContext: i } = Pr(),
    { matches: u } = Nt(),
    d = Cr(a);
  o && (o.didRenderScripts = !0);
  let m = Tr(u, null, n);
  f.useEffect(() => {
    Tt = !0;
  }, []);
  let y = f.useMemo(() => {
      var S;
      let R = i
          ? `window.__reactRouterContext = ${r};window.__reactRouterContext.stream = new ReadableStream({start(controller){window.__reactRouterContext.streamController = controller;}}).pipeThrough(new TextEncoderStream());`
          : ' ',
        g = s
          ? `${(S = t.hmr) != null && S.runtime ? `import ${JSON.stringify(t.hmr.runtime)};` : ''}${d ? '' : `import ${JSON.stringify(t.url)}`};
${m.map((x, P) => {
  let M = `route${P}`,
    h = t.routes[x.route.id];
  le(h, `Route ${x.route.id} not found in manifest`);
  let { clientActionModule: L, clientLoaderModule: k, hydrateFallbackModule: A, module: j } = h,
    B = [
      ...(L ? [{ module: L, varName: `${M}_clientAction` }] : []),
      ...(k ? [{ module: k, varName: `${M}_clientLoader` }] : []),
      ...(A ? [{ module: A, varName: `${M}_HydrateFallback` }] : []),
      { module: j, varName: `${M}_main` },
    ];
  if (B.length === 1) return `import * as ${M} from ${JSON.stringify(j)};`;
  let K = B.map((q) => `import * as ${q.varName} from "${q.module}";`).join(`
`),
    oe = `const ${M} = {${B.map((q) => `...${q.varName}`).join(',')}};`;
  return [K, oe].join(`
`);
}).join(`
`)}
  ${d ? `window.__reactRouterManifest = ${JSON.stringify(gl(t, l), null, 2)};` : ''}
  window.__reactRouterRouteModules = {${m.map((x, P) => `${JSON.stringify(x.route.id)}:route${P}`).join(',')}};

import(${JSON.stringify(t.entry.module)});`
          : ' ';
      return f.createElement(
        f.Fragment,
        null,
        f.createElement('script', {
          ...e,
          suppressHydrationWarning: !0,
          dangerouslySetInnerHTML: wn(R),
          type: void 0,
        }),
        f.createElement('script', {
          ...e,
          suppressHydrationWarning: !0,
          dangerouslySetInnerHTML: wn(g),
          type: 'module',
          async: !0,
        })
      );
    }, []),
    w = Tt ? [] : t.entry.imports.concat(Rr(m, t, { includeHydrateFallback: !0 }));
  return Tt
    ? null
    : f.createElement(
        f.Fragment,
        null,
        d
          ? null
          : f.createElement('link', {
              rel: 'modulepreload',
              href: t.url,
              crossOrigin: e.crossOrigin,
            }),
        f.createElement('link', {
          rel: 'modulepreload',
          href: t.entry.module,
          crossOrigin: e.crossOrigin,
        }),
        Cl(w).map((E) =>
          f.createElement('link', {
            key: E,
            rel: 'modulepreload',
            href: E,
            crossOrigin: e.crossOrigin,
          })
        ),
        y
      );
}
function Cl(e) {
  return [...new Set(e)];
}
function Pl(...e) {
  return (t) => {
    e.forEach((r) => {
      typeof r == 'function' ? r(t) : r != null && (r.current = t);
    });
  };
}
var ua =
  typeof window < 'u' && typeof window.document < 'u' && typeof window.document.createElement < 'u';
try {
  ua && (window.__reactRouterVersion = '7.3.0');
} catch {}
var ca = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  da = f.forwardRef(function (
    {
      onClick: t,
      discover: r = 'render',
      prefetch: n = 'none',
      relative: a,
      reloadDocument: o,
      replace: l,
      state: s,
      target: i,
      to: u,
      preventScrollReset: d,
      viewTransition: m,
      ...y
    },
    w
  ) {
    let { basename: E } = f.useContext(se),
      R = typeof u == 'string' && ca.test(u),
      g,
      S = !1;
    if (typeof u == 'string' && R && ((g = u), ua))
      try {
        let j = new URL(window.location.href),
          B = u.startsWith('//') ? new URL(j.protocol + u) : new URL(u),
          K = ae(B.pathname, E);
        B.origin === j.origin && K != null ? (u = K + B.search + B.hash) : (S = !0);
      } catch {
        Z(
          !1,
          `<Link to="${u}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
        );
      }
    let x = xi(u, { relative: a }),
      [P, M, h] = Rl(n, y),
      L = kl(u, {
        replace: l,
        state: s,
        target: i,
        preventScrollReset: d,
        relative: a,
        viewTransition: m,
      });
    function k(j) {
      t && t(j), j.defaultPrevented || L(j);
    }
    let A = f.createElement('a', {
      ...y,
      ...h,
      href: g || x,
      onClick: S || o ? t : k,
      ref: Pl(w, M),
      target: i,
      'data-discover': !R && r === 'render' ? 'true' : void 0,
    });
    return P && !R ? f.createElement(f.Fragment, null, A, f.createElement(sa, { page: x })) : A;
  });
da.displayName = 'Link';
var Tl = f.forwardRef(function (
  {
    'aria-current': t = 'page',
    caseSensitive: r = !1,
    className: n = '',
    end: a = !1,
    style: o,
    to: l,
    viewTransition: s,
    children: i,
    ...u
  },
  d
) {
  let m = it(l, { relative: u.relative }),
    y = me(),
    w = f.useContext(ze),
    { navigator: E, basename: R } = f.useContext(se),
    g = w != null && jl(m) && s === !0,
    S = E.encodeLocation ? E.encodeLocation(m).pathname : m.pathname,
    x = y.pathname,
    P = w && w.navigation && w.navigation.location ? w.navigation.location.pathname : null;
  r || ((x = x.toLowerCase()), (P = P ? P.toLowerCase() : null), (S = S.toLowerCase())),
    P && R && (P = ae(P, R) || P);
  const M = S !== '/' && S.endsWith('/') ? S.length - 1 : S.length;
  let h = x === S || (!a && x.startsWith(S) && x.charAt(M) === '/'),
    L = P != null && (P === S || (!a && P.startsWith(S) && P.charAt(S.length) === '/')),
    k = { isActive: h, isPending: L, isTransitioning: g },
    A = h ? t : void 0,
    j;
  typeof n == 'function'
    ? (j = n(k))
    : (j = [n, h ? 'active' : null, L ? 'pending' : null, g ? 'transitioning' : null]
        .filter(Boolean)
        .join(' '));
  let B = typeof o == 'function' ? o(k) : o;
  return f.createElement(
    da,
    { ...u, 'aria-current': A, className: j, ref: d, style: B, to: l, viewTransition: s },
    typeof i == 'function' ? i(k) : i
  );
});
Tl.displayName = 'NavLink';
var Ml = f.forwardRef(
  (
    {
      discover: e = 'render',
      fetcherKey: t,
      navigate: r,
      reloadDocument: n,
      replace: a,
      state: o,
      method: l = Lt,
      action: s,
      onSubmit: i,
      relative: u,
      preventScrollReset: d,
      viewTransition: m,
      ...y
    },
    w
  ) => {
    let E = $l(),
      R = Nl(s, { relative: u }),
      g = l.toLowerCase() === 'get' ? 'get' : 'post',
      S = typeof s == 'string' && ca.test(s),
      x = (P) => {
        if ((i && i(P), P.defaultPrevented)) return;
        P.preventDefault();
        let M = P.nativeEvent.submitter,
          h = (M == null ? void 0 : M.getAttribute('formmethod')) || l;
        E(M || P.currentTarget, {
          fetcherKey: t,
          method: h,
          navigate: r,
          replace: a,
          state: o,
          relative: u,
          preventScrollReset: d,
          viewTransition: m,
        });
      };
    return f.createElement('form', {
      ref: w,
      method: g,
      action: R,
      onSubmit: n ? i : x,
      ...y,
      'data-discover': !S && e === 'render' ? 'true' : void 0,
    });
  }
);
Ml.displayName = 'Form';
function Dl({ getKey: e, storageKey: t, ...r }) {
  let n = f.useContext(It),
    { basename: a } = f.useContext(se),
    o = me(),
    l = Gn();
  Il({ getKey: e, storageKey: t });
  let s = f.useMemo(() => {
    if (!n || !e) return null;
    let u = or(o, l, a, e);
    return u !== o.key ? u : null;
  }, []);
  if (!n || n.isSpaMode) return null;
  let i = ((u, d) => {
    if (!window.history.state || !window.history.state.key) {
      let m = Math.random().toString(32).slice(2);
      window.history.replaceState({ key: m }, '');
    }
    try {
      let y = JSON.parse(sessionStorage.getItem(u) || '{}')[d || window.history.state.key];
      typeof y == 'number' && window.scrollTo(0, y);
    } catch (m) {
      console.error(m), sessionStorage.removeItem(u);
    }
  }).toString();
  return f.createElement('script', {
    ...r,
    suppressHydrationWarning: !0,
    dangerouslySetInnerHTML: { __html: `(${i})(${JSON.stringify(t || ar)}, ${JSON.stringify(s)})` },
  });
}
Dl.displayName = 'ScrollRestoration';
function fa(e) {
  return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Mr(e) {
  let t = f.useContext(Oe);
  return U(t, fa(e)), t;
}
function _l(e) {
  let t = f.useContext(ze);
  return U(t, fa(e)), t;
}
function kl(
  e,
  { target: t, replace: r, state: n, preventScrollReset: a, relative: o, viewTransition: l } = {}
) {
  let s = Li(),
    i = me(),
    u = it(e, { relative: o });
  return f.useCallback(
    (d) => {
      if (Gi(d, t)) {
        d.preventDefault();
        let m = r !== void 0 ? r : be(i) === be(u);
        s(e, { replace: m, state: n, preventScrollReset: a, relative: o, viewTransition: l });
      }
    },
    [i, s, u, r, n, t, e, a, o, l]
  );
}
var Ol = 0,
  Al = () => `__${String(++Ol)}__`;
function $l() {
  let { router: e } = Mr('useSubmit'),
    { basename: t } = f.useContext(se),
    r = Ii();
  return f.useCallback(
    async (n, a = {}) => {
      let { action: o, method: l, encType: s, formData: i, body: u } = qi(n, t);
      if (a.navigate === !1) {
        let d = a.fetcherKey || Al();
        await e.fetch(d, r, a.action || o, {
          preventScrollReset: a.preventScrollReset,
          formData: i,
          body: u,
          formMethod: a.method || l,
          formEncType: a.encType || s,
          flushSync: a.flushSync,
        });
      } else
        await e.navigate(a.action || o, {
          preventScrollReset: a.preventScrollReset,
          formData: i,
          body: u,
          formMethod: a.method || l,
          formEncType: a.encType || s,
          replace: a.replace,
          state: a.state,
          fromRouteId: r,
          flushSync: a.flushSync,
          viewTransition: a.viewTransition,
        });
    },
    [e, t, r]
  );
}
function Nl(e, { relative: t } = {}) {
  let { basename: r } = f.useContext(se),
    n = f.useContext(ce);
  U(n, 'useFormAction must be used inside a RouteContext');
  let [a] = n.matches.slice(-1),
    o = { ...it(e || '.', { relative: t }) },
    l = me();
  if (e == null) {
    o.search = l.search;
    let s = new URLSearchParams(o.search),
      i = s.getAll('index');
    if (i.some((d) => d === '')) {
      s.delete('index'), i.filter((m) => m).forEach((m) => s.append('index', m));
      let d = s.toString();
      o.search = d ? `?${d}` : '';
    }
  }
  return (
    (!e || e === '.') &&
      a.route.index &&
      (o.search = o.search ? o.search.replace(/^\?/, '?index&') : '?index'),
    r !== '/' && (o.pathname = o.pathname === '/' ? r : he([r, o.pathname])),
    be(o)
  );
}
var ar = 'react-router-scroll-positions',
  St = {};
function or(e, t, r, n) {
  let a = null;
  return (
    n &&
      (r !== '/' ? (a = n({ ...e, pathname: ae(e.pathname, r) || e.pathname }, t)) : (a = n(e, t))),
    a == null && (a = e.key),
    a
  );
}
function Il({ getKey: e, storageKey: t } = {}) {
  let { router: r } = Mr('useScrollRestoration'),
    { restoreScrollPosition: n, preventScrollReset: a } = _l('useScrollRestoration'),
    { basename: o } = f.useContext(se),
    l = me(),
    s = Gn(),
    i = Fi();
  f.useEffect(
    () => (
      (window.history.scrollRestoration = 'manual'),
      () => {
        window.history.scrollRestoration = 'auto';
      }
    ),
    []
  ),
    Fl(
      f.useCallback(() => {
        if (i.state === 'idle') {
          let u = or(l, s, o, e);
          St[u] = window.scrollY;
        }
        try {
          sessionStorage.setItem(t || ar, JSON.stringify(St));
        } catch (u) {
          Z(
            !1,
            `Failed to save scroll positions in sessionStorage, <ScrollRestoration /> will not work properly (${u}).`
          );
        }
        window.history.scrollRestoration = 'auto';
      }, [i.state, e, o, l, s, t])
    ),
    typeof document < 'u' &&
      (f.useLayoutEffect(() => {
        try {
          let u = sessionStorage.getItem(t || ar);
          u && (St = JSON.parse(u));
        } catch {}
      }, [t]),
      f.useLayoutEffect(() => {
        let u =
          r == null
            ? void 0
            : r.enableScrollRestoration(
                St,
                () => window.scrollY,
                e ? (d, m) => or(d, m, o, e) : void 0
              );
        return () => u && u();
      }, [r, o, e]),
      f.useLayoutEffect(() => {
        if (n !== !1) {
          if (typeof n == 'number') {
            window.scrollTo(0, n);
            return;
          }
          if (l.hash) {
            let u = document.getElementById(decodeURIComponent(l.hash.slice(1)));
            if (u) {
              u.scrollIntoView();
              return;
            }
          }
          a !== !0 && window.scrollTo(0, 0);
        }
      }, [l, n, a]));
}
function Fl(e, t) {
  let { capture: r } = {};
  f.useEffect(() => {
    let n = r != null ? { capture: r } : void 0;
    return (
      window.addEventListener('pagehide', e, n),
      () => {
        window.removeEventListener('pagehide', e, n);
      }
    );
  }, [e, r]);
}
function jl(e, t = {}) {
  let r = f.useContext(vr);
  U(
    r != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: n } = Mr('useViewTransitionState'),
    a = it(e, { relative: t.relative });
  if (!r.isTransitioning) return !1;
  let o = ae(r.currentLocation.pathname, n) || r.currentLocation.pathname,
    l = ae(r.nextLocation.pathname, n) || r.nextLocation.pathname;
  return Dt(a.pathname, l) != null || Dt(a.pathname, o) != null;
}
new TextEncoder();
function as(e) {
  if (!e) return null;
  let t = Object.entries(e),
    r = {};
  for (let [n, a] of t)
    if (a && a.__type === 'RouteErrorResponse')
      r[n] = new Se(a.status, a.statusText, a.data, a.internal === !0);
    else if (a && a.__type === 'Error') {
      if (a.__subType) {
        let o = window[a.__subType];
        if (typeof o == 'function')
          try {
            let l = new o(a.message);
            (l.stack = a.stack), (r[n] = l);
          } catch {}
      }
      if (r[n] == null) {
        let o = new Error(a.message);
        (o.stack = a.stack), (r[n] = o);
      }
    } else r[n] = a;
  return r;
}
export {
  It as F,
  rs as L,
  ns as M,
  Kl as O,
  Ql as R,
  Dl as S,
  as as a,
  Yl as b,
  Lr as c,
  cl as d,
  ql as e,
  zl as f,
  es as g,
  Zl as h,
  U as i,
  Xl as j,
  Gl as k,
  Hl as l,
  ge as m,
  Ll as n,
  ke as o,
  Gn as p,
  Jl as q,
  f as r,
  pl as s,
  Vl as t,
  ts as u,
  Wl as v,
  Xn as w,
};
