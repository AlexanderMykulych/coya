function j_(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: N_ } = Object.prototype, { getPrototypeOf: Ef } = Object, Sf = ((e) => (t) => {
  const r = N_.call(t);
  return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), Vr = (e) => (e = e.toLowerCase(), (t) => Sf(t) === e), Vu = (e) => (t) => typeof t === e, { isArray: On } = Array, Ii = Vu("undefined");
function R0(e) {
  return e !== null && !Ii(e) && e.constructor !== null && !Ii(e.constructor) && Qr(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const $_ = Vr("ArrayBuffer");
function C0(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && $_(e.buffer), t;
}
const j0 = Vu("string"), Qr = Vu("function"), M_ = Vu("number"), Tf = (e) => e !== null && typeof e == "object", N0 = (e) => e === !0 || e === !1, yu = (e) => {
  if (Sf(e) !== "object")
    return !1;
  const t = Ef(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, $0 = Vr("Date"), M0 = Vr("File"), k0 = Vr("Blob"), D0 = Vr("FileList"), U0 = (e) => Tf(e) && Qr(e.pipe), L0 = (e) => {
  const t = "[object FormData]";
  return e && (typeof FormData == "function" && e instanceof FormData || N_.call(e) === t || Qr(e.toString) && e.toString() === t);
}, F0 = Vr("URLSearchParams"), B0 = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Mi(e, t, { allOwnKeys: r = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let n, i;
  if (typeof e != "object" && (e = [e]), On(e))
    for (n = 0, i = e.length; n < i; n++)
      t.call(null, e[n], n, e);
  else {
    const o = r ? Object.getOwnPropertyNames(e) : Object.keys(e), a = o.length;
    let s;
    for (n = 0; n < a; n++)
      s = o[n], t.call(null, e[s], s, e);
  }
}
function k_(e, t) {
  t = t.toLowerCase();
  const r = Object.keys(e);
  let n = r.length, i;
  for (; n-- > 0; )
    if (i = r[n], t === i.toLowerCase())
      return i;
  return null;
}
const D_ = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), U_ = (e) => !Ii(e) && e !== D_;
function Kl() {
  const { caseless: e } = U_(this) && this || {}, t = {}, r = (n, i) => {
    const o = e && k_(t, i) || i;
    yu(t[o]) && yu(n) ? t[o] = Kl(t[o], n) : yu(n) ? t[o] = Kl({}, n) : On(n) ? t[o] = n.slice() : t[o] = n;
  };
  for (let n = 0, i = arguments.length; n < i; n++)
    arguments[n] && Mi(arguments[n], r);
  return t;
}
const x0 = (e, t, r, { allOwnKeys: n } = {}) => (Mi(t, (i, o) => {
  r && Qr(i) ? e[o] = j_(i, r) : e[o] = i;
}, { allOwnKeys: n }), e), W0 = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), V0 = (e, t, r, n) => {
  e.prototype = Object.create(t.prototype, n), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), r && Object.assign(e.prototype, r);
}, q0 = (e, t, r, n) => {
  let i, o, a;
  const s = {};
  if (t = t || {}, e == null)
    return t;
  do {
    for (i = Object.getOwnPropertyNames(e), o = i.length; o-- > 0; )
      a = i[o], (!n || n(a, e, t)) && !s[a] && (t[a] = e[a], s[a] = !0);
    e = r !== !1 && Ef(e);
  } while (e && (!r || r(e, t)) && e !== Object.prototype);
  return t;
}, H0 = (e, t, r) => {
  e = String(e), (r === void 0 || r > e.length) && (r = e.length), r -= t.length;
  const n = e.indexOf(t, r);
  return n !== -1 && n === r;
}, z0 = (e) => {
  if (!e)
    return null;
  if (On(e))
    return e;
  let t = e.length;
  if (!M_(t))
    return null;
  const r = new Array(t);
  for (; t-- > 0; )
    r[t] = e[t];
  return r;
}, Y0 = ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && Ef(Uint8Array)), K0 = (e, t) => {
  const n = (e && e[Symbol.iterator]).call(e);
  let i;
  for (; (i = n.next()) && !i.done; ) {
    const o = i.value;
    t.call(e, o[0], o[1]);
  }
}, G0 = (e, t) => {
  let r;
  const n = [];
  for (; (r = e.exec(t)) !== null; )
    n.push(r);
  return n;
}, Z0 = Vr("HTMLFormElement"), Q0 = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(r, n, i) {
    return n.toUpperCase() + i;
  }
), Md = (({ hasOwnProperty: e }) => (t, r) => e.call(t, r))(Object.prototype), J0 = Vr("RegExp"), L_ = (e, t) => {
  const r = Object.getOwnPropertyDescriptors(e), n = {};
  Mi(r, (i, o) => {
    t(i, o, e) !== !1 && (n[o] = i);
  }), Object.defineProperties(e, n);
}, X0 = (e) => {
  L_(e, (t, r) => {
    if (Qr(e) && ["arguments", "caller", "callee"].indexOf(r) !== -1)
      return !1;
    const n = e[r];
    if (Qr(n)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + r + "'");
      });
    }
  });
}, eg = (e, t) => {
  const r = {}, n = (i) => {
    i.forEach((o) => {
      r[o] = !0;
    });
  };
  return On(e) ? n(e) : n(String(e).split(t)), r;
}, rg = () => {
}, tg = (e, t) => (e = +e, Number.isFinite(e) ? e : t), ul = "abcdefghijklmnopqrstuvwxyz", kd = "0123456789", F_ = {
  DIGIT: kd,
  ALPHA: ul,
  ALPHA_DIGIT: ul + ul.toUpperCase() + kd
}, ng = (e = 16, t = F_.ALPHA_DIGIT) => {
  let r = "";
  const { length: n } = t;
  for (; e--; )
    r += t[Math.random() * n | 0];
  return r;
};
function ig(e) {
  return !!(e && Qr(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const og = (e) => {
  const t = new Array(10), r = (n, i) => {
    if (Tf(n)) {
      if (t.indexOf(n) >= 0)
        return;
      if (!("toJSON" in n)) {
        t[i] = n;
        const o = On(n) ? [] : {};
        return Mi(n, (a, s) => {
          const c = r(a, i + 1);
          !Ii(c) && (o[s] = c);
        }), t[i] = void 0, o;
      }
    }
    return n;
  };
  return r(e, 0);
}, N = {
  isArray: On,
  isArrayBuffer: $_,
  isBuffer: R0,
  isFormData: L0,
  isArrayBufferView: C0,
  isString: j0,
  isNumber: M_,
  isBoolean: N0,
  isObject: Tf,
  isPlainObject: yu,
  isUndefined: Ii,
  isDate: $0,
  isFile: M0,
  isBlob: k0,
  isRegExp: J0,
  isFunction: Qr,
  isStream: U0,
  isURLSearchParams: F0,
  isTypedArray: Y0,
  isFileList: D0,
  forEach: Mi,
  merge: Kl,
  extend: x0,
  trim: B0,
  stripBOM: W0,
  inherits: V0,
  toFlatObject: q0,
  kindOf: Sf,
  kindOfTest: Vr,
  endsWith: H0,
  toArray: z0,
  forEachEntry: K0,
  matchAll: G0,
  isHTMLForm: Z0,
  hasOwnProperty: Md,
  hasOwnProp: Md,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: L_,
  freezeMethods: X0,
  toObjectSet: eg,
  toCamelCase: Q0,
  noop: rg,
  toFiniteNumber: tg,
  findKey: k_,
  global: D_,
  isContextDefined: U_,
  ALPHABET: F_,
  generateString: ng,
  isSpecCompliantForm: ig,
  toJSONObject: og
};
function fe(e, t, r, n, i) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), r && (this.config = r), n && (this.request = n), i && (this.response = i);
}
N.inherits(fe, Error, {
  toJSON: function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: N.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
const B_ = fe.prototype, x_ = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((e) => {
  x_[e] = { value: e };
});
Object.defineProperties(fe, x_);
Object.defineProperty(B_, "isAxiosError", { value: !0 });
fe.from = (e, t, r, n, i, o) => {
  const a = Object.create(B_);
  return N.toFlatObject(e, a, function(c) {
    return c !== Error.prototype;
  }, (s) => s !== "isAxiosError"), fe.call(a, e.message, t, r, n, i), a.cause = e, a.name = e.name, o && Object.assign(a, o), a;
};
const ag = null;
function Gl(e) {
  return N.isPlainObject(e) || N.isArray(e);
}
function W_(e) {
  return N.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Dd(e, t, r) {
  return e ? e.concat(t).map(function(i, o) {
    return i = W_(i), !r && o ? "[" + i + "]" : i;
  }).join(r ? "." : "") : t;
}
function ug(e) {
  return N.isArray(e) && !e.some(Gl);
}
const sg = N.toFlatObject(N, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function qu(e, t, r) {
  if (!N.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), r = N.toFlatObject(r, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(S, C) {
    return !N.isUndefined(C[S]);
  });
  const n = r.metaTokens, i = r.visitor || l, o = r.dots, a = r.indexes, c = (r.Blob || typeof Blob < "u" && Blob) && N.isSpecCompliantForm(t);
  if (!N.isFunction(i))
    throw new TypeError("visitor must be a function");
  function u(E) {
    if (E === null)
      return "";
    if (N.isDate(E))
      return E.toISOString();
    if (!c && N.isBlob(E))
      throw new fe("Blob is not supported. Use a Buffer instead.");
    return N.isArrayBuffer(E) || N.isTypedArray(E) ? c && typeof Blob == "function" ? new Blob([E]) : Buffer.from(E) : E;
  }
  function l(E, S, C) {
    let R = E;
    if (E && !C && typeof E == "object") {
      if (N.endsWith(S, "{}"))
        S = n ? S : S.slice(0, -2), E = JSON.stringify(E);
      else if (N.isArray(E) && ug(E) || (N.isFileList(E) || N.endsWith(S, "[]")) && (R = N.toArray(E)))
        return S = W_(S), R.forEach(function(U, D) {
          !(N.isUndefined(U) || U === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            a === !0 ? Dd([S], D, o) : a === null ? S : S + "[]",
            u(U)
          );
        }), !1;
    }
    return Gl(E) ? !0 : (t.append(Dd(C, S, o), u(E)), !1);
  }
  const v = [], y = Object.assign(sg, {
    defaultVisitor: l,
    convertValue: u,
    isVisitable: Gl
  });
  function g(E, S) {
    if (!N.isUndefined(E)) {
      if (v.indexOf(E) !== -1)
        throw Error("Circular reference detected in " + S.join("."));
      v.push(E), N.forEach(E, function(R, $) {
        (!(N.isUndefined(R) || R === null) && i.call(
          t,
          R,
          N.isString($) ? $.trim() : $,
          S,
          y
        )) === !0 && g(R, S ? S.concat($) : [$]);
      }), v.pop();
    }
  }
  if (!N.isObject(e))
    throw new TypeError("data must be an object");
  return g(e), t;
}
function Ud(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(n) {
    return t[n];
  });
}
function Pf(e, t) {
  this._pairs = [], e && qu(e, this, t);
}
const V_ = Pf.prototype;
V_.append = function(t, r) {
  this._pairs.push([t, r]);
};
V_.toString = function(t) {
  const r = t ? function(n) {
    return t.call(this, n, Ud);
  } : Ud;
  return this._pairs.map(function(i) {
    return r(i[0]) + "=" + r(i[1]);
  }, "").join("&");
};
function cg(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function q_(e, t, r) {
  if (!t)
    return e;
  const n = r && r.encode || cg, i = r && r.serialize;
  let o;
  if (i ? o = i(t, r) : o = N.isURLSearchParams(t) ? t.toString() : new Pf(t, r).toString(n), o) {
    const a = e.indexOf("#");
    a !== -1 && (e = e.slice(0, a)), e += (e.indexOf("?") === -1 ? "?" : "&") + o;
  }
  return e;
}
class lg {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(t, r, n) {
    return this.handlers.push({
      fulfilled: t,
      rejected: r,
      synchronous: n ? n.synchronous : !1,
      runWhen: n ? n.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(t) {
    N.forEach(this.handlers, function(n) {
      n !== null && t(n);
    });
  }
}
const Ld = lg, H_ = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, fg = typeof URLSearchParams < "u" ? URLSearchParams : Pf, dg = typeof FormData < "u" ? FormData : null, hg = (() => {
  let e;
  return typeof navigator < "u" && ((e = navigator.product) === "ReactNative" || e === "NativeScript" || e === "NS") ? !1 : typeof window < "u" && typeof document < "u";
})(), vg = (() => typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), Sr = {
  isBrowser: !0,
  classes: {
    URLSearchParams: fg,
    FormData: dg,
    Blob
  },
  isStandardBrowserEnv: hg,
  isStandardBrowserWebWorkerEnv: vg,
  protocols: ["http", "https", "file", "blob", "url", "data"]
};
function _g(e, t) {
  return qu(e, new Sr.classes.URLSearchParams(), Object.assign({
    visitor: function(r, n, i, o) {
      return Sr.isNode && N.isBuffer(r) ? (this.append(n, r.toString("base64")), !1) : o.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function pg(e) {
  return N.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function mg(e) {
  const t = {}, r = Object.keys(e);
  let n;
  const i = r.length;
  let o;
  for (n = 0; n < i; n++)
    o = r[n], t[o] = e[o];
  return t;
}
function z_(e) {
  function t(r, n, i, o) {
    let a = r[o++];
    const s = Number.isFinite(+a), c = o >= r.length;
    return a = !a && N.isArray(i) ? i.length : a, c ? (N.hasOwnProp(i, a) ? i[a] = [i[a], n] : i[a] = n, !s) : ((!i[a] || !N.isObject(i[a])) && (i[a] = []), t(r, n, i[a], o) && N.isArray(i[a]) && (i[a] = mg(i[a])), !s);
  }
  if (N.isFormData(e) && N.isFunction(e.entries)) {
    const r = {};
    return N.forEachEntry(e, (n, i) => {
      t(pg(n), i, r, 0);
    }), r;
  }
  return null;
}
const yg = {
  "Content-Type": void 0
};
function bg(e, t, r) {
  if (N.isString(e))
    try {
      return (t || JSON.parse)(e), N.trim(e);
    } catch (n) {
      if (n.name !== "SyntaxError")
        throw n;
    }
  return (r || JSON.stringify)(e);
}
const Hu = {
  transitional: H_,
  adapter: ["xhr", "http"],
  transformRequest: [function(t, r) {
    const n = r.getContentType() || "", i = n.indexOf("application/json") > -1, o = N.isObject(t);
    if (o && N.isHTMLForm(t) && (t = new FormData(t)), N.isFormData(t))
      return i && i ? JSON.stringify(z_(t)) : t;
    if (N.isArrayBuffer(t) || N.isBuffer(t) || N.isStream(t) || N.isFile(t) || N.isBlob(t))
      return t;
    if (N.isArrayBufferView(t))
      return t.buffer;
    if (N.isURLSearchParams(t))
      return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let s;
    if (o) {
      if (n.indexOf("application/x-www-form-urlencoded") > -1)
        return _g(t, this.formSerializer).toString();
      if ((s = N.isFileList(t)) || n.indexOf("multipart/form-data") > -1) {
        const c = this.env && this.env.FormData;
        return qu(
          s ? { "files[]": t } : t,
          c && new c(),
          this.formSerializer
        );
      }
    }
    return o || i ? (r.setContentType("application/json", !1), bg(t)) : t;
  }],
  transformResponse: [function(t) {
    const r = this.transitional || Hu.transitional, n = r && r.forcedJSONParsing, i = this.responseType === "json";
    if (t && N.isString(t) && (n && !this.responseType || i)) {
      const a = !(r && r.silentJSONParsing) && i;
      try {
        return JSON.parse(t);
      } catch (s) {
        if (a)
          throw s.name === "SyntaxError" ? fe.from(s, fe.ERR_BAD_RESPONSE, this, null, this.response) : s;
      }
    }
    return t;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: Sr.classes.FormData,
    Blob: Sr.classes.Blob
  },
  validateStatus: function(t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*"
    }
  }
};
N.forEach(["delete", "get", "head"], function(t) {
  Hu.headers[t] = {};
});
N.forEach(["post", "put", "patch"], function(t) {
  Hu.headers[t] = N.merge(yg);
});
const If = Hu, gg = N.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), Og = (e) => {
  const t = {};
  let r, n, i;
  return e && e.split(`
`).forEach(function(a) {
    i = a.indexOf(":"), r = a.substring(0, i).trim().toLowerCase(), n = a.substring(i + 1).trim(), !(!r || t[r] && gg[r]) && (r === "set-cookie" ? t[r] ? t[r].push(n) : t[r] = [n] : t[r] = t[r] ? t[r] + ", " + n : n);
  }), t;
}, Fd = Symbol("internals");
function ii(e) {
  return e && String(e).trim().toLowerCase();
}
function bu(e) {
  return e === !1 || e == null ? e : N.isArray(e) ? e.map(bu) : String(e);
}
function wg(e) {
  const t = /* @__PURE__ */ Object.create(null), r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; n = r.exec(e); )
    t[n[1]] = n[2];
  return t;
}
function Eg(e) {
  return /^[-_a-zA-Z]+$/.test(e.trim());
}
function sl(e, t, r, n, i) {
  if (N.isFunction(n))
    return n.call(this, t, r);
  if (i && (t = r), !!N.isString(t)) {
    if (N.isString(n))
      return t.indexOf(n) !== -1;
    if (N.isRegExp(n))
      return n.test(t);
  }
}
function Sg(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, r, n) => r.toUpperCase() + n);
}
function Tg(e, t) {
  const r = N.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((n) => {
    Object.defineProperty(e, n + r, {
      value: function(i, o, a) {
        return this[n].call(this, t, i, o, a);
      },
      configurable: !0
    });
  });
}
class zu {
  constructor(t) {
    t && this.set(t);
  }
  set(t, r, n) {
    const i = this;
    function o(s, c, u) {
      const l = ii(c);
      if (!l)
        throw new Error("header name must be a non-empty string");
      const v = N.findKey(i, l);
      (!v || i[v] === void 0 || u === !0 || u === void 0 && i[v] !== !1) && (i[v || c] = bu(s));
    }
    const a = (s, c) => N.forEach(s, (u, l) => o(u, l, c));
    return N.isPlainObject(t) || t instanceof this.constructor ? a(t, r) : N.isString(t) && (t = t.trim()) && !Eg(t) ? a(Og(t), r) : t != null && o(r, t, n), this;
  }
  get(t, r) {
    if (t = ii(t), t) {
      const n = N.findKey(this, t);
      if (n) {
        const i = this[n];
        if (!r)
          return i;
        if (r === !0)
          return wg(i);
        if (N.isFunction(r))
          return r.call(this, i, n);
        if (N.isRegExp(r))
          return r.exec(i);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, r) {
    if (t = ii(t), t) {
      const n = N.findKey(this, t);
      return !!(n && this[n] !== void 0 && (!r || sl(this, this[n], n, r)));
    }
    return !1;
  }
  delete(t, r) {
    const n = this;
    let i = !1;
    function o(a) {
      if (a = ii(a), a) {
        const s = N.findKey(n, a);
        s && (!r || sl(n, n[s], s, r)) && (delete n[s], i = !0);
      }
    }
    return N.isArray(t) ? t.forEach(o) : o(t), i;
  }
  clear(t) {
    const r = Object.keys(this);
    let n = r.length, i = !1;
    for (; n--; ) {
      const o = r[n];
      (!t || sl(this, this[o], o, t, !0)) && (delete this[o], i = !0);
    }
    return i;
  }
  normalize(t) {
    const r = this, n = {};
    return N.forEach(this, (i, o) => {
      const a = N.findKey(n, o);
      if (a) {
        r[a] = bu(i), delete r[o];
        return;
      }
      const s = t ? Sg(o) : String(o).trim();
      s !== o && delete r[o], r[s] = bu(i), n[s] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const r = /* @__PURE__ */ Object.create(null);
    return N.forEach(this, (n, i) => {
      n != null && n !== !1 && (r[i] = t && N.isArray(n) ? n.join(", ") : n);
    }), r;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, r]) => t + ": " + r).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...r) {
    const n = new this(t);
    return r.forEach((i) => n.set(i)), n;
  }
  static accessor(t) {
    const n = (this[Fd] = this[Fd] = {
      accessors: {}
    }).accessors, i = this.prototype;
    function o(a) {
      const s = ii(a);
      n[s] || (Tg(i, a), n[s] = !0);
    }
    return N.isArray(t) ? t.forEach(o) : o(t), this;
  }
}
zu.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
N.freezeMethods(zu.prototype);
N.freezeMethods(zu);
const Lr = zu;
function cl(e, t) {
  const r = this || If, n = t || r, i = Lr.from(n.headers);
  let o = n.data;
  return N.forEach(e, function(s) {
    o = s.call(r, o, i.normalize(), t ? t.status : void 0);
  }), i.normalize(), o;
}
function Y_(e) {
  return !!(e && e.__CANCEL__);
}
function ki(e, t, r) {
  fe.call(this, e ?? "canceled", fe.ERR_CANCELED, t, r), this.name = "CanceledError";
}
N.inherits(ki, fe, {
  __CANCEL__: !0
});
function Pg(e, t, r) {
  const n = r.config.validateStatus;
  !r.status || !n || n(r.status) ? e(r) : t(new fe(
    "Request failed with status code " + r.status,
    [fe.ERR_BAD_REQUEST, fe.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4],
    r.config,
    r.request,
    r
  ));
}
const Ig = Sr.isStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  function() {
    return {
      write: function(r, n, i, o, a, s) {
        const c = [];
        c.push(r + "=" + encodeURIComponent(n)), N.isNumber(i) && c.push("expires=" + new Date(i).toGMTString()), N.isString(o) && c.push("path=" + o), N.isString(a) && c.push("domain=" + a), s === !0 && c.push("secure"), document.cookie = c.join("; ");
      },
      read: function(r) {
        const n = document.cookie.match(new RegExp("(^|;\\s*)(" + r + ")=([^;]*)"));
        return n ? decodeURIComponent(n[3]) : null;
      },
      remove: function(r) {
        this.write(r, "", Date.now() - 864e5);
      }
    };
  }()
) : (
  // Non standard browser env (web workers, react-native) lack needed support.
  function() {
    return {
      write: function() {
      },
      read: function() {
        return null;
      },
      remove: function() {
      }
    };
  }()
);
function Ag(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Rg(e, t) {
  return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function K_(e, t) {
  return e && !Ag(t) ? Rg(e, t) : t;
}
const Cg = Sr.isStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const t = /(msie|trident)/i.test(navigator.userAgent), r = document.createElement("a");
    let n;
    function i(o) {
      let a = o;
      return t && (r.setAttribute("href", a), a = r.href), r.setAttribute("href", a), {
        href: r.href,
        protocol: r.protocol ? r.protocol.replace(/:$/, "") : "",
        host: r.host,
        search: r.search ? r.search.replace(/^\?/, "") : "",
        hash: r.hash ? r.hash.replace(/^#/, "") : "",
        hostname: r.hostname,
        port: r.port,
        pathname: r.pathname.charAt(0) === "/" ? r.pathname : "/" + r.pathname
      };
    }
    return n = i(window.location.href), function(a) {
      const s = N.isString(a) ? i(a) : a;
      return s.protocol === n.protocol && s.host === n.host;
    };
  }()
) : (
  // Non standard browser envs (web workers, react-native) lack needed support.
  function() {
    return function() {
      return !0;
    };
  }()
);
function jg(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function Ng(e, t) {
  e = e || 10;
  const r = new Array(e), n = new Array(e);
  let i = 0, o = 0, a;
  return t = t !== void 0 ? t : 1e3, function(c) {
    const u = Date.now(), l = n[o];
    a || (a = u), r[i] = c, n[i] = u;
    let v = o, y = 0;
    for (; v !== i; )
      y += r[v++], v = v % e;
    if (i = (i + 1) % e, i === o && (o = (o + 1) % e), u - a < t)
      return;
    const g = l && u - l;
    return g ? Math.round(y * 1e3 / g) : void 0;
  };
}
function Bd(e, t) {
  let r = 0;
  const n = Ng(50, 250);
  return (i) => {
    const o = i.loaded, a = i.lengthComputable ? i.total : void 0, s = o - r, c = n(s), u = o <= a;
    r = o;
    const l = {
      loaded: o,
      total: a,
      progress: a ? o / a : void 0,
      bytes: s,
      rate: c || void 0,
      estimated: c && a && u ? (a - o) / c : void 0,
      event: i
    };
    l[t ? "download" : "upload"] = !0, e(l);
  };
}
const $g = typeof XMLHttpRequest < "u", Mg = $g && function(e) {
  return new Promise(function(r, n) {
    let i = e.data;
    const o = Lr.from(e.headers).normalize(), a = e.responseType;
    let s;
    function c() {
      e.cancelToken && e.cancelToken.unsubscribe(s), e.signal && e.signal.removeEventListener("abort", s);
    }
    N.isFormData(i) && (Sr.isStandardBrowserEnv || Sr.isStandardBrowserWebWorkerEnv) && o.setContentType(!1);
    let u = new XMLHttpRequest();
    if (e.auth) {
      const g = e.auth.username || "", E = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
      o.set("Authorization", "Basic " + btoa(g + ":" + E));
    }
    const l = K_(e.baseURL, e.url);
    u.open(e.method.toUpperCase(), q_(l, e.params, e.paramsSerializer), !0), u.timeout = e.timeout;
    function v() {
      if (!u)
        return;
      const g = Lr.from(
        "getAllResponseHeaders" in u && u.getAllResponseHeaders()
      ), S = {
        data: !a || a === "text" || a === "json" ? u.responseText : u.response,
        status: u.status,
        statusText: u.statusText,
        headers: g,
        config: e,
        request: u
      };
      Pg(function(R) {
        r(R), c();
      }, function(R) {
        n(R), c();
      }, S), u = null;
    }
    if ("onloadend" in u ? u.onloadend = v : u.onreadystatechange = function() {
      !u || u.readyState !== 4 || u.status === 0 && !(u.responseURL && u.responseURL.indexOf("file:") === 0) || setTimeout(v);
    }, u.onabort = function() {
      u && (n(new fe("Request aborted", fe.ECONNABORTED, e, u)), u = null);
    }, u.onerror = function() {
      n(new fe("Network Error", fe.ERR_NETWORK, e, u)), u = null;
    }, u.ontimeout = function() {
      let E = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
      const S = e.transitional || H_;
      e.timeoutErrorMessage && (E = e.timeoutErrorMessage), n(new fe(
        E,
        S.clarifyTimeoutError ? fe.ETIMEDOUT : fe.ECONNABORTED,
        e,
        u
      )), u = null;
    }, Sr.isStandardBrowserEnv) {
      const g = (e.withCredentials || Cg(l)) && e.xsrfCookieName && Ig.read(e.xsrfCookieName);
      g && o.set(e.xsrfHeaderName, g);
    }
    i === void 0 && o.setContentType(null), "setRequestHeader" in u && N.forEach(o.toJSON(), function(E, S) {
      u.setRequestHeader(S, E);
    }), N.isUndefined(e.withCredentials) || (u.withCredentials = !!e.withCredentials), a && a !== "json" && (u.responseType = e.responseType), typeof e.onDownloadProgress == "function" && u.addEventListener("progress", Bd(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && u.upload && u.upload.addEventListener("progress", Bd(e.onUploadProgress)), (e.cancelToken || e.signal) && (s = (g) => {
      u && (n(!g || g.type ? new ki(null, e, u) : g), u.abort(), u = null);
    }, e.cancelToken && e.cancelToken.subscribe(s), e.signal && (e.signal.aborted ? s() : e.signal.addEventListener("abort", s)));
    const y = jg(l);
    if (y && Sr.protocols.indexOf(y) === -1) {
      n(new fe("Unsupported protocol " + y + ":", fe.ERR_BAD_REQUEST, e));
      return;
    }
    u.send(i || null);
  });
}, gu = {
  http: ag,
  xhr: Mg
};
N.forEach(gu, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const kg = {
  getAdapter: (e) => {
    e = N.isArray(e) ? e : [e];
    const { length: t } = e;
    let r, n;
    for (let i = 0; i < t && (r = e[i], !(n = N.isString(r) ? gu[r.toLowerCase()] : r)); i++)
      ;
    if (!n)
      throw n === !1 ? new fe(
        `Adapter ${r} is not supported by the environment`,
        "ERR_NOT_SUPPORT"
      ) : new Error(
        N.hasOwnProp(gu, r) ? `Adapter '${r}' is not available in the build` : `Unknown adapter '${r}'`
      );
    if (!N.isFunction(n))
      throw new TypeError("adapter is not a function");
    return n;
  },
  adapters: gu
};
function ll(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new ki(null, e);
}
function xd(e) {
  return ll(e), e.headers = Lr.from(e.headers), e.data = cl.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), kg.getAdapter(e.adapter || If.adapter)(e).then(function(n) {
    return ll(e), n.data = cl.call(
      e,
      e.transformResponse,
      n
    ), n.headers = Lr.from(n.headers), n;
  }, function(n) {
    return Y_(n) || (ll(e), n && n.response && (n.response.data = cl.call(
      e,
      e.transformResponse,
      n.response
    ), n.response.headers = Lr.from(n.response.headers))), Promise.reject(n);
  });
}
const Wd = (e) => e instanceof Lr ? e.toJSON() : e;
function hn(e, t) {
  t = t || {};
  const r = {};
  function n(u, l, v) {
    return N.isPlainObject(u) && N.isPlainObject(l) ? N.merge.call({ caseless: v }, u, l) : N.isPlainObject(l) ? N.merge({}, l) : N.isArray(l) ? l.slice() : l;
  }
  function i(u, l, v) {
    if (N.isUndefined(l)) {
      if (!N.isUndefined(u))
        return n(void 0, u, v);
    } else
      return n(u, l, v);
  }
  function o(u, l) {
    if (!N.isUndefined(l))
      return n(void 0, l);
  }
  function a(u, l) {
    if (N.isUndefined(l)) {
      if (!N.isUndefined(u))
        return n(void 0, u);
    } else
      return n(void 0, l);
  }
  function s(u, l, v) {
    if (v in t)
      return n(u, l);
    if (v in e)
      return n(void 0, u);
  }
  const c = {
    url: o,
    method: o,
    data: o,
    baseURL: a,
    transformRequest: a,
    transformResponse: a,
    paramsSerializer: a,
    timeout: a,
    timeoutMessage: a,
    withCredentials: a,
    adapter: a,
    responseType: a,
    xsrfCookieName: a,
    xsrfHeaderName: a,
    onUploadProgress: a,
    onDownloadProgress: a,
    decompress: a,
    maxContentLength: a,
    maxBodyLength: a,
    beforeRedirect: a,
    transport: a,
    httpAgent: a,
    httpsAgent: a,
    cancelToken: a,
    socketPath: a,
    responseEncoding: a,
    validateStatus: s,
    headers: (u, l) => i(Wd(u), Wd(l), !0)
  };
  return N.forEach(Object.keys(e).concat(Object.keys(t)), function(l) {
    const v = c[l] || i, y = v(e[l], t[l], l);
    N.isUndefined(y) && v !== s || (r[l] = y);
  }), r;
}
const G_ = "1.3.3", Af = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  Af[e] = function(n) {
    return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const Vd = {};
Af.transitional = function(t, r, n) {
  function i(o, a) {
    return "[Axios v" + G_ + "] Transitional option '" + o + "'" + a + (n ? ". " + n : "");
  }
  return (o, a, s) => {
    if (t === !1)
      throw new fe(
        i(a, " has been removed" + (r ? " in " + r : "")),
        fe.ERR_DEPRECATED
      );
    return r && !Vd[a] && (Vd[a] = !0, console.warn(
      i(
        a,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), t ? t(o, a, s) : !0;
  };
};
function Dg(e, t, r) {
  if (typeof e != "object")
    throw new fe("options must be an object", fe.ERR_BAD_OPTION_VALUE);
  const n = Object.keys(e);
  let i = n.length;
  for (; i-- > 0; ) {
    const o = n[i], a = t[o];
    if (a) {
      const s = e[o], c = s === void 0 || a(s, o, e);
      if (c !== !0)
        throw new fe("option " + o + " must be " + c, fe.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new fe("Unknown option " + o, fe.ERR_BAD_OPTION);
  }
}
const Zl = {
  assertOptions: Dg,
  validators: Af
}, Gr = Zl.validators;
class Tu {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new Ld(),
      response: new Ld()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  request(t, r) {
    typeof t == "string" ? (r = r || {}, r.url = t) : r = t || {}, r = hn(this.defaults, r);
    const { transitional: n, paramsSerializer: i, headers: o } = r;
    n !== void 0 && Zl.assertOptions(n, {
      silentJSONParsing: Gr.transitional(Gr.boolean),
      forcedJSONParsing: Gr.transitional(Gr.boolean),
      clarifyTimeoutError: Gr.transitional(Gr.boolean)
    }, !1), i !== void 0 && Zl.assertOptions(i, {
      encode: Gr.function,
      serialize: Gr.function
    }, !0), r.method = (r.method || this.defaults.method || "get").toLowerCase();
    let a;
    a = o && N.merge(
      o.common,
      o[r.method]
    ), a && N.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (E) => {
        delete o[E];
      }
    ), r.headers = Lr.concat(a, o);
    const s = [];
    let c = !0;
    this.interceptors.request.forEach(function(S) {
      typeof S.runWhen == "function" && S.runWhen(r) === !1 || (c = c && S.synchronous, s.unshift(S.fulfilled, S.rejected));
    });
    const u = [];
    this.interceptors.response.forEach(function(S) {
      u.push(S.fulfilled, S.rejected);
    });
    let l, v = 0, y;
    if (!c) {
      const E = [xd.bind(this), void 0];
      for (E.unshift.apply(E, s), E.push.apply(E, u), y = E.length, l = Promise.resolve(r); v < y; )
        l = l.then(E[v++], E[v++]);
      return l;
    }
    y = s.length;
    let g = r;
    for (v = 0; v < y; ) {
      const E = s[v++], S = s[v++];
      try {
        g = E(g);
      } catch (C) {
        S.call(this, C);
        break;
      }
    }
    try {
      l = xd.call(this, g);
    } catch (E) {
      return Promise.reject(E);
    }
    for (v = 0, y = u.length; v < y; )
      l = l.then(u[v++], u[v++]);
    return l;
  }
  getUri(t) {
    t = hn(this.defaults, t);
    const r = K_(t.baseURL, t.url);
    return q_(r, t.params, t.paramsSerializer);
  }
}
N.forEach(["delete", "get", "head", "options"], function(t) {
  Tu.prototype[t] = function(r, n) {
    return this.request(hn(n || {}, {
      method: t,
      url: r,
      data: (n || {}).data
    }));
  };
});
N.forEach(["post", "put", "patch"], function(t) {
  function r(n) {
    return function(o, a, s) {
      return this.request(hn(s || {}, {
        method: t,
        headers: n ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: o,
        data: a
      }));
    };
  }
  Tu.prototype[t] = r(), Tu.prototype[t + "Form"] = r(!0);
});
const Ou = Tu;
class Rf {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let r;
    this.promise = new Promise(function(o) {
      r = o;
    });
    const n = this;
    this.promise.then((i) => {
      if (!n._listeners)
        return;
      let o = n._listeners.length;
      for (; o-- > 0; )
        n._listeners[o](i);
      n._listeners = null;
    }), this.promise.then = (i) => {
      let o;
      const a = new Promise((s) => {
        n.subscribe(s), o = s;
      }).then(i);
      return a.cancel = function() {
        n.unsubscribe(o);
      }, a;
    }, t(function(o, a, s) {
      n.reason || (n.reason = new ki(o, a, s), r(n.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : this._listeners = [t];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(t) {
    if (!this._listeners)
      return;
    const r = this._listeners.indexOf(t);
    r !== -1 && this._listeners.splice(r, 1);
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let t;
    return {
      token: new Rf(function(i) {
        t = i;
      }),
      cancel: t
    };
  }
}
const Ug = Rf;
function Lg(e) {
  return function(r) {
    return e.apply(null, r);
  };
}
function Fg(e) {
  return N.isObject(e) && e.isAxiosError === !0;
}
const Ql = {
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
  NetworkAuthenticationRequired: 511
};
Object.entries(Ql).forEach(([e, t]) => {
  Ql[t] = e;
});
const Bg = Ql;
function Z_(e) {
  const t = new Ou(e), r = j_(Ou.prototype.request, t);
  return N.extend(r, Ou.prototype, t, { allOwnKeys: !0 }), N.extend(r, t, null, { allOwnKeys: !0 }), r.create = function(i) {
    return Z_(hn(e, i));
  }, r;
}
const Le = Z_(If);
Le.Axios = Ou;
Le.CanceledError = ki;
Le.CancelToken = Ug;
Le.isCancel = Y_;
Le.VERSION = G_;
Le.toFormData = qu;
Le.AxiosError = fe;
Le.Cancel = Le.CanceledError;
Le.all = function(t) {
  return Promise.all(t);
};
Le.spread = Lg;
Le.isAxiosError = Fg;
Le.mergeConfig = hn;
Le.AxiosHeaders = Lr;
Le.formToJSON = (e) => z_(N.isHTMLForm(e) ? new FormData(e) : e);
Le.HttpStatusCode = Bg;
Le.default = Le;
const xg = Le;
var Wg = Ai;
Ai.flatten = Ai;
Ai.unflatten = X_;
function Q_(e) {
  return e && e.constructor && typeof e.constructor.isBuffer == "function" && e.constructor.isBuffer(e);
}
function J_(e) {
  return e;
}
function Ai(e, t) {
  t = t || {};
  const r = t.delimiter || ".", n = t.maxDepth, i = t.transformKey || J_, o = {};
  function a(s, c, u) {
    u = u || 1, Object.keys(s).forEach(function(l) {
      const v = s[l], y = t.safe && Array.isArray(v), g = Object.prototype.toString.call(v), E = Q_(v), S = g === "[object Object]" || g === "[object Array]", C = c ? c + r + i(l) : i(l);
      if (!y && !E && S && Object.keys(v).length && (!t.maxDepth || u < n))
        return a(v, C, u + 1);
      o[C] = v;
    });
  }
  return a(e), o;
}
function X_(e, t) {
  t = t || {};
  const r = t.delimiter || ".", n = t.overwrite || !1, i = t.transformKey || J_, o = {};
  if (Q_(e) || Object.prototype.toString.call(e) !== "[object Object]")
    return e;
  function a(u) {
    const l = Number(u);
    return isNaN(l) || u.indexOf(".") !== -1 || t.object ? u : l;
  }
  function s(u, l, v) {
    return Object.keys(v).reduce(function(y, g) {
      return y[u + r + g] = v[g], y;
    }, l);
  }
  function c(u) {
    const l = Object.prototype.toString.call(u), v = l === "[object Array]", y = l === "[object Object]";
    if (u) {
      if (v)
        return !u.length;
      if (y)
        return !Object.keys(u).length;
    } else
      return !0;
  }
  return e = Object.keys(e).reduce(function(u, l) {
    const v = Object.prototype.toString.call(e[l]);
    return !(v === "[object Object]" || v === "[object Array]") || c(e[l]) ? (u[l] = e[l], u) : s(
      l,
      u,
      Ai(e[l], t)
    );
  }, {}), Object.keys(e).forEach(function(u) {
    const l = u.split(r).map(i);
    let v = a(l.shift()), y = a(l[0]), g = o;
    for (; y !== void 0; ) {
      if (v === "__proto__")
        return;
      const E = Object.prototype.toString.call(g[v]), S = E === "[object Object]" || E === "[object Array]";
      if (!n && !S && typeof g[v] < "u")
        return;
      (n && !S || !n && g[v] == null) && (g[v] = typeof y == "number" && !t.object ? [] : {}), g = g[v], l.length > 0 && (v = a(l.shift()), y = a(l[0]));
    }
    g[v] = X_(e[u], t);
  }), o;
}
const Pu = xg.create({
  baseURL: "https://socialtech.myjetbrains.com/api/",
  headers: {
    Authorization: "Bearer <token>"
  }
});
var Cf = /* @__PURE__ */ ((e) => (e.Subtask = "Subtask", e.Duplicate = "Duplicate", e.Depend = "Depend", e.Relates = "Relates", e))(Cf || {});
function ep({ issues: e, isAlreadyLoaded: t, addRelation: r }) {
  const n = t ?? ((i) => !1);
  return e.flatMap((i) => {
    const o = Vg(i);
    return o && o.length > 0 ? (o.forEach((a) => r({
      from: i.id,
      to: a,
      type: Cf.Subtask
    })), o.filter((a) => !n(a))) : [];
  });
}
function Vg(e) {
  return e.links.filter((t) => t.linkType.name === Cf.Subtask && t.direction === "OUTWARD").flatMap((t) => t.issues).map((t) => t.id);
}
const qg = "customFields($type,name,value($type,archived,avatarUrl,buildIntegration,buildLink,color(background,id),description,fullName,id,isResolved,localizedName,login,markdownText,minutes,name,presentation,ringId,text))", rp = "id,login,name,fullName,avatarUrl,email", Hg = `reporter(${rp})`, zg = `updater(${rp})`, tp = `fields=id,idReadable,summary,description,updated,created,usesMarkdown,${Hg},${zg},links(id,direction,linkType(name),issues(id)),tags(name),${qg}`;
async function Yg(e) {
  let t = e.ids;
  const { maxDepthLevel: r } = e;
  let n = 0;
  for (; t.length > 0 && (!r || n++ < r); )
    t = await Kg({
      ...e,
      ids: t
    });
}
async function Kg({
  ids: e,
  onLoadedIssue: t,
  isAlreadyLoaded: r,
  addRelation: n
}) {
  const i = (await Pu.post(
    `issuesGetter?${tp}`,
    e.map((o) => ({ id: o }))
  )).data;
  return i.forEach((o) => t(o)), ep({
    issues: i,
    isAlreadyLoaded: r,
    addRelation: n
  });
}
function Gg(e) {
  Zg(e), Qg(e), Jg(e), Xg(e), eO(e), rO(e), tO(e);
}
function Zg({ issue: e, addNode: t, addRelation: r }) {
  var n;
  (n = e.tags) == null || n.forEach((i) => {
    t("tag", {
      id: i.name,
      ...i
    }), r({
      toNode: "tag",
      to: i.name,
      fromNode: "issue",
      from: e.id,
      type: "tag"
    });
  });
}
function Qg({ issue: e, addNode: t, addRelation: r }) {
  var n;
  const i = (n = e.customFields) == null ? void 0 : n.find((o) => o.name === "Sprint");
  i && Array.isArray(i.value) && i.value.forEach((o) => {
    t("sprint", {
      id: o.id,
      name: o.name
    }), r({
      toNode: "sprint",
      to: o.id,
      fromNode: "issue",
      from: e.id,
      type: "sprint"
    });
  });
}
function Jg({ issue: e, addNode: t, addRelation: r }) {
  var n, i;
  const o = (i = (n = e.customFields) == null ? void 0 : n.find((s) => s.name === "GitLab PR link")) == null ? void 0 : i.value, a = o == null ? void 0 : o.matchAll(/merge_requests\/(?<mrNumber>\d*)/gm);
  a && Array.from(a).map((s) => {
    var c;
    return ((c = s.groups) == null ? void 0 : c.mrNumber) || "";
  }).forEach((s) => {
    t("mr", {
      id: s,
      number: s
    }), r({
      toNode: "mr",
      to: s,
      fromNode: "issue",
      from: e.id,
      type: "mr"
    });
  });
}
function Xg({ issue: e, addNode: t, addRelation: r }) {
  var n, i;
  const o = (i = (n = e.customFields) == null ? void 0 : n.find((a) => a.name === "Assignee")) == null ? void 0 : i.value;
  o && Array.isArray(o) && o.forEach((a) => {
    t("trackerUser", {
      id: a.id,
      name: a.name,
      fullName: a.fullName,
      login: a.login,
      avatarUrl: a.avatarUrl,
      email: a.email
    }), r({
      fromNode: "issue",
      from: e.id,
      toNode: "trackerUser",
      to: a.id,
      type: "assignee"
    });
  });
}
function eO({ issue: e, addNode: t, addRelation: r }) {
  var n, i;
  const o = (i = (n = e.customFields) == null ? void 0 : n.find((a) => a.name === "Assignee QA")) == null ? void 0 : i.value;
  o && Array.isArray(o) && o.forEach((a) => {
    t("trackerUser", {
      id: a.id,
      name: a.name,
      fullName: a.fullName,
      login: a.login,
      avatarUrl: a.avatarUrl,
      email: a.email
    }), r({
      fromNode: "issue",
      from: e.id,
      toNode: "trackerUser",
      to: a.id,
      type: "assigneeQA"
    });
  });
}
function rO({ issue: e, addNode: t, addRelation: r }) {
  const n = e.reporter;
  n && n.id && (t("trackerUser", {
    id: n.id,
    name: n.name,
    fullName: n.fullName,
    login: n.login,
    avatarUrl: n.avatarUrl,
    email: n.email
  }), r({
    fromNode: "issue",
    from: e.id,
    toNode: "trackerUser",
    to: n.id,
    type: "reporter"
  }));
}
function tO({ issue: e, addNode: t, addRelation: r }) {
  const n = e.updater;
  n && n.id && (t("trackerUser", {
    id: n.id,
    name: n.name,
    fullName: n.fullName,
    login: n.login,
    avatarUrl: n.avatarUrl,
    email: n.email
  }), r({
    fromNode: "issue",
    from: e.id,
    toNode: "trackerUser",
    to: n.id,
    type: "updater"
  }));
}
function nO(e) {
  var t, r, n, i, o, a, s, c, u, l, v, y, g, E, S, C;
  return {
    storyPoints: (r = (t = e.customFields) == null ? void 0 : t.find((R) => R.name === "Story points")) == null ? void 0 : r.value,
    state: (o = (i = (n = e.customFields) == null ? void 0 : n.find((R) => R.name === "State")) == null ? void 0 : i.value) == null ? void 0 : o.name,
    source: (c = (s = (a = e.customFields) == null ? void 0 : a.find((R) => R.name === "Source")) == null ? void 0 : s.value) == null ? void 0 : c.name,
    priority: (v = (l = (u = e.customFields) == null ? void 0 : u.find((R) => R.name === "Priority")) == null ? void 0 : l.value) == null ? void 0 : v.name,
    severity: (E = (g = (y = e.customFields) == null ? void 0 : y.find((R) => R.name === "Severity")) == null ? void 0 : g.value) == null ? void 0 : E.name,
    tags: (C = (S = e.tags) == null ? void 0 : S.map((R) => R.name)) == null ? void 0 : C.join(",")
  };
}
function iO() {
  const e = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Map(), r = [], n = (o) => r.push(o), i = (o, a) => {
    t.has(o) || t.set(o, /* @__PURE__ */ new Map());
    const s = t.get(o);
    s && !s.has(a.id) && s.set(a.id, a);
  };
  return {
    addNode: i,
    addRelation: n,
    isAlreadyLoaded(o) {
      return e.has(o);
    },
    addIssue(o) {
      if (!e.has(o.id)) {
        const a = {
          ...o,
          links: void 0,
          tags: void 0,
          customFields: void 0,
          ...nO(o)
        };
        e.set(o.id, a), Gg({
          issue: o,
          addNode: i,
          addRelation: n
        });
      }
    },
    addIssueRelation({ from: o, to: a, type: s }) {
      return n({
        fromNode: "issue",
        from: o,
        toNode: "issue",
        to: a,
        type: s
      });
    },
    getIssues() {
      return np(e);
    },
    getRelations() {
      return r;
    },
    getNodes() {
      return oO(t);
    }
  };
}
function oO(e) {
  return Array.from(e).map(([t, r]) => [t, np(r)]);
}
function np(e) {
  return Array.from(e, ([t, r]) => r);
}
async function aO({ query: e, maxDepthLevel: t }) {
  const r = iO(), n = await Pu.get(
    `issues?${tp}&query=${encodeURI(e)}`
  );
  return n.data.forEach((i) => r.addIssue(i)), await Yg({
    ids: ep({
      issues: n.data,
      addRelation: r.addIssueRelation
    }),
    isAlreadyLoaded: r.isAlreadyLoaded,
    onLoadedIssue: r.addIssue,
    addRelation: r.addIssueRelation,
    maxDepthLevel: t
  }), {
    issues: r.getIssues(),
    relations: r.getRelations(),
    nodes: r.getNodes()
  };
}
async function uO(e) {
  return aO(e);
}
async function sO({ addNodes: e, addRelations: t, config: r }) {
  Pu.defaults.baseURL = r.url, Pu.defaults.headers.Authorization = `Bearer ${r.token}`;
  for await (const n of r.issueQueries) {
    const { issues: i, relations: o, nodes: a } = await uO({
      query: n,
      maxDepthLevel: r.issueLoadingMaxDepthLevel
    });
    await e("issue", i.map((s) => Wg.flatten(s)));
    for await (const [s, c] of a)
      await e(s, c);
    await t(o);
  }
}
const cO = {
  name: "youtrack-connector",
  connect: sO
};
var d = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function lO(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ip = {}, Fr = {}, ee = {}, we = {}, fO = d && d.__extends || function() {
  var e = function(t, r) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var o in i)
        Object.prototype.hasOwnProperty.call(i, o) && (n[o] = i[o]);
    }, e(t, r);
  };
  return function(t, r) {
    if (typeof r != "function" && r !== null)
      throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
    e(t, r);
    function n() {
      this.constructor = t;
    }
    t.prototype = r === null ? Object.create(r) : (n.prototype = r.prototype, new n());
  };
}();
Object.defineProperty(we, "__esModule", { value: !0 });
we.PROTOCOL_ERROR = we.SESSION_EXPIRED = we.SERVICE_UNAVAILABLE = we.Neo4jError = we.isRetriableError = we.newError = void 0;
var op = "ServiceUnavailable";
we.SERVICE_UNAVAILABLE = op;
var ap = "SessionExpired";
we.SESSION_EXPIRED = ap;
var dO = "ProtocolError";
we.PROTOCOL_ERROR = dO;
var hO = "N/A", jf = (
  /** @class */
  function(e) {
    fO(t, e);
    function t(r, n, i) {
      var o = (
        // eslint-disable-next-line
        // @ts-ignore: not available in ES6 yet
        e.call(this, r, i != null ? { cause: i } : void 0) || this
      );
      return o.constructor = t, o.__proto__ = t.prototype, o.code = n, o.name = "Neo4jError", o.retriable = pO(n), o;
    }
    return t.isRetriable = function(r) {
      return r != null && r instanceof t && r.retriable;
    }, t;
  }(Error)
);
we.Neo4jError = jf;
function vO(e, t, r) {
  return new jf(e, t ?? hO, r);
}
we.newError = vO;
var _O = jf.isRetriable;
we.isRetriableError = _O;
function pO(e) {
  return e === op || e === ap || yO(e) || mO(e);
}
function mO(e) {
  return (e == null ? void 0 : e.includes("TransientError")) === !0;
}
function yO(e) {
  return e === "Neo.ClientError.Security.AuthorizationExpired";
}
var We = {};
Object.defineProperty(We, "__esModule", { value: !0 });
We.toString = We.toNumber = We.inSafeRange = We.isInt = We.int = void 0;
var oi = we, qd = /* @__PURE__ */ new Map(), at = (
  /** @class */
  function() {
    function e(t, r) {
      this.low = t ?? 0, this.high = r ?? 0;
    }
    return e.prototype.inSafeRange = function() {
      return this.greaterThanOrEqual(e.MIN_SAFE_VALUE) && this.lessThanOrEqual(e.MAX_SAFE_VALUE);
    }, e.prototype.toInt = function() {
      return this.low;
    }, e.prototype.toNumber = function() {
      return this.high * Ct + (this.low >>> 0);
    }, e.prototype.toBigInt = function() {
      if (this.isZero())
        return BigInt(0);
      if (this.isPositive())
        return BigInt(this.high >>> 0) * BigInt(Ct) + BigInt(this.low >>> 0);
      var t = this.negate();
      return BigInt(-1) * (BigInt(t.high >>> 0) * BigInt(Ct) + BigInt(t.low >>> 0));
    }, e.prototype.toNumberOrInfinity = function() {
      return this.lessThan(e.MIN_SAFE_VALUE) ? Number.NEGATIVE_INFINITY : this.greaterThan(e.MAX_SAFE_VALUE) ? Number.POSITIVE_INFINITY : this.toNumber();
    }, e.prototype.toString = function(t) {
      if (t = t ?? 10, t < 2 || t > 36)
        throw RangeError("radix out of range: " + t.toString());
      if (this.isZero())
        return "0";
      var r;
      if (this.isNegative())
        if (this.equals(e.MIN_VALUE)) {
          var n = e.fromNumber(t), i = this.div(n);
          return r = i.multiply(n).subtract(this), i.toString(t) + r.toInt().toString(t);
        } else
          return "-" + this.negate().toString(t);
      var o = e.fromNumber(Math.pow(t, 6));
      r = this;
      for (var a = ""; ; ) {
        var s = r.div(o), c = r.subtract(s.multiply(o)).toInt() >>> 0, u = c.toString(t);
        if (r = s, r.isZero())
          return u + a;
        for (; u.length < 6; )
          u = "0" + u;
        a = "" + u + a;
      }
    }, e.prototype.valueOf = function() {
      return this.toBigInt();
    }, e.prototype.getHighBits = function() {
      return this.high;
    }, e.prototype.getLowBits = function() {
      return this.low;
    }, e.prototype.getNumBitsAbs = function() {
      if (this.isNegative())
        return this.equals(e.MIN_VALUE) ? 64 : this.negate().getNumBitsAbs();
      var t = this.high !== 0 ? this.high : this.low, r = 0;
      for (r = 31; r > 0 && !(t & 1 << r); r--)
        ;
      return this.high !== 0 ? r + 33 : r + 1;
    }, e.prototype.isZero = function() {
      return this.high === 0 && this.low === 0;
    }, e.prototype.isNegative = function() {
      return this.high < 0;
    }, e.prototype.isPositive = function() {
      return this.high >= 0;
    }, e.prototype.isOdd = function() {
      return (this.low & 1) === 1;
    }, e.prototype.isEven = function() {
      return (this.low & 1) === 0;
    }, e.prototype.equals = function(t) {
      var r = e.fromValue(t);
      return this.high === r.high && this.low === r.low;
    }, e.prototype.notEquals = function(t) {
      return !this.equals(
        /* validates */
        t
      );
    }, e.prototype.lessThan = function(t) {
      return this.compare(
        /* validates */
        t
      ) < 0;
    }, e.prototype.lessThanOrEqual = function(t) {
      return this.compare(
        /* validates */
        t
      ) <= 0;
    }, e.prototype.greaterThan = function(t) {
      return this.compare(
        /* validates */
        t
      ) > 0;
    }, e.prototype.greaterThanOrEqual = function(t) {
      return this.compare(
        /* validates */
        t
      ) >= 0;
    }, e.prototype.compare = function(t) {
      var r = e.fromValue(t);
      if (this.equals(r))
        return 0;
      var n = this.isNegative(), i = r.isNegative();
      return n && !i ? -1 : !n && i ? 1 : this.subtract(r).isNegative() ? -1 : 1;
    }, e.prototype.negate = function() {
      return this.equals(e.MIN_VALUE) ? e.MIN_VALUE : this.not().add(e.ONE);
    }, e.prototype.add = function(t) {
      var r = e.fromValue(t), n = this.high >>> 16, i = this.high & 65535, o = this.low >>> 16, a = this.low & 65535, s = r.high >>> 16, c = r.high & 65535, u = r.low >>> 16, l = r.low & 65535, v = 0, y = 0, g = 0, E = 0;
      return E += a + l, g += E >>> 16, E &= 65535, g += o + u, y += g >>> 16, g &= 65535, y += i + c, v += y >>> 16, y &= 65535, v += n + s, v &= 65535, e.fromBits(g << 16 | E, v << 16 | y);
    }, e.prototype.subtract = function(t) {
      var r = e.fromValue(t);
      return this.add(r.negate());
    }, e.prototype.multiply = function(t) {
      if (this.isZero())
        return e.ZERO;
      var r = e.fromValue(t);
      if (r.isZero())
        return e.ZERO;
      if (this.equals(e.MIN_VALUE))
        return r.isOdd() ? e.MIN_VALUE : e.ZERO;
      if (r.equals(e.MIN_VALUE))
        return this.isOdd() ? e.MIN_VALUE : e.ZERO;
      if (this.isNegative())
        return r.isNegative() ? this.negate().multiply(r.negate()) : this.negate().multiply(r).negate();
      if (r.isNegative())
        return this.multiply(r.negate()).negate();
      if (this.lessThan(Yd) && r.lessThan(Yd))
        return e.fromNumber(this.toNumber() * r.toNumber());
      var n = this.high >>> 16, i = this.high & 65535, o = this.low >>> 16, a = this.low & 65535, s = r.high >>> 16, c = r.high & 65535, u = r.low >>> 16, l = r.low & 65535, v = 0, y = 0, g = 0, E = 0;
      return E += a * l, g += E >>> 16, E &= 65535, g += o * l, y += g >>> 16, g &= 65535, g += a * u, y += g >>> 16, g &= 65535, y += i * l, v += y >>> 16, y &= 65535, y += o * u, v += y >>> 16, y &= 65535, y += a * c, v += y >>> 16, y &= 65535, v += n * l + i * u + o * c + a * s, v &= 65535, e.fromBits(g << 16 | E, v << 16 | y);
    }, e.prototype.div = function(t) {
      var r = e.fromValue(t);
      if (r.isZero())
        throw (0, oi.newError)("division by zero");
      if (this.isZero())
        return e.ZERO;
      var n, i, o;
      if (this.equals(e.MIN_VALUE)) {
        if (r.equals(e.ONE) || r.equals(e.NEG_ONE))
          return e.MIN_VALUE;
        if (r.equals(e.MIN_VALUE))
          return e.ONE;
        var a = this.shiftRight(1);
        return n = a.div(r).shiftLeft(1), n.equals(e.ZERO) ? r.isNegative() ? e.ONE : e.NEG_ONE : (i = this.subtract(r.multiply(n)), o = n.add(i.div(r)), o);
      } else if (r.equals(e.MIN_VALUE))
        return e.ZERO;
      if (this.isNegative())
        return r.isNegative() ? this.negate().div(r.negate()) : this.negate().div(r).negate();
      if (r.isNegative())
        return this.div(r.negate()).negate();
      for (o = e.ZERO, i = this; i.greaterThanOrEqual(r); ) {
        n = Math.max(1, Math.floor(i.toNumber() / r.toNumber()));
        for (var s = Math.ceil(Math.log(n) / Math.LN2), c = s <= 48 ? 1 : Math.pow(2, s - 48), u = e.fromNumber(n), l = u.multiply(r); l.isNegative() || l.greaterThan(i); )
          n -= c, u = e.fromNumber(n), l = u.multiply(r);
        u.isZero() && (u = e.ONE), o = o.add(u), i = i.subtract(l);
      }
      return o;
    }, e.prototype.modulo = function(t) {
      var r = e.fromValue(t);
      return this.subtract(this.div(r).multiply(r));
    }, e.prototype.not = function() {
      return e.fromBits(~this.low, ~this.high);
    }, e.prototype.and = function(t) {
      var r = e.fromValue(t);
      return e.fromBits(this.low & r.low, this.high & r.high);
    }, e.prototype.or = function(t) {
      var r = e.fromValue(t);
      return e.fromBits(this.low | r.low, this.high | r.high);
    }, e.prototype.xor = function(t) {
      var r = e.fromValue(t);
      return e.fromBits(this.low ^ r.low, this.high ^ r.high);
    }, e.prototype.shiftLeft = function(t) {
      var r = e.toNumber(t);
      return (r &= 63) === 0 ? e.ZERO : r < 32 ? e.fromBits(this.low << r, this.high << r | this.low >>> 32 - r) : e.fromBits(0, this.low << r - 32);
    }, e.prototype.shiftRight = function(t) {
      var r = e.toNumber(t);
      return (r &= 63) === 0 ? e.ZERO : t < 32 ? e.fromBits(this.low >>> r | this.high << 32 - r, this.high >> r) : e.fromBits(this.high >> r - 32, this.high >= 0 ? 0 : -1);
    }, e.isInteger = function(t) {
      return (t == null ? void 0 : t.__isInteger__) === !0;
    }, e.fromInt = function(t) {
      var r;
      if (t = t | 0, t >= -128 && t < 128 && (r = qd.get(t), r != null))
        return r;
      var n = new e(t, t < 0 ? -1 : 0);
      return t >= -128 && t < 128 && qd.set(t, n), n;
    }, e.fromBits = function(t, r) {
      return new e(t, r);
    }, e.fromNumber = function(t) {
      return isNaN(t) || !isFinite(t) ? e.ZERO : t <= -zd ? e.MIN_VALUE : t + 1 >= zd ? e.MAX_VALUE : t < 0 ? e.fromNumber(-t).negate() : new e(t % Ct | 0, t / Ct | 0);
    }, e.fromString = function(t, r, n) {
      var i = n === void 0 ? {} : n, o = i.strictStringValidation;
      if (t.length === 0)
        throw (0, oi.newError)("number format error: empty string");
      if (t === "NaN" || t === "Infinity" || t === "+Infinity" || t === "-Infinity")
        return e.ZERO;
      if (r = r ?? 10, r < 2 || r > 36)
        throw (0, oi.newError)("radix out of range: " + r.toString());
      var a;
      if ((a = t.indexOf("-")) > 0)
        throw (0, oi.newError)('number format error: interior "-" character: ' + t);
      if (a === 0)
        return e.fromString(t.substring(1), r).negate();
      for (var s = e.fromNumber(Math.pow(r, 8)), c = e.ZERO, u = 0; u < t.length; u += 8) {
        var l = Math.min(8, t.length - u), v = t.substring(u, u + l), y = parseInt(v, r);
        if (o === !0 && !gO(v, y, r))
          throw (0, oi.newError)('number format error: "'.concat(v, '" is NaN in radix ').concat(r, ": ").concat(t));
        if (l < 8) {
          var g = e.fromNumber(Math.pow(r, l));
          c = c.multiply(g).add(e.fromNumber(y));
        } else
          c = c.multiply(s), c = c.add(e.fromNumber(y));
      }
      return c;
    }, e.fromValue = function(t, r) {
      return r === void 0 && (r = {}), t instanceof e ? t : typeof t == "number" ? e.fromNumber(t) : typeof t == "string" ? e.fromString(t, void 0, r) : typeof t == "bigint" ? e.fromString(t.toString()) : new e(t.low, t.high);
    }, e.toNumber = function(t) {
      switch (typeof t) {
        case "number":
          return t;
        case "bigint":
          return Number(t);
        default:
          return e.fromValue(t).toNumber();
      }
    }, e.toString = function(t, r) {
      return e.fromValue(t).toString(r);
    }, e.inSafeRange = function(t) {
      return e.fromValue(t).inSafeRange();
    }, e.ZERO = e.fromInt(0), e.ONE = e.fromInt(1), e.NEG_ONE = e.fromInt(-1), e.MAX_VALUE = e.fromBits(-1, 2147483647), e.MIN_VALUE = e.fromBits(0, -2147483648), e.MIN_SAFE_VALUE = e.fromBits(1, -2097152), e.MAX_SAFE_VALUE = e.fromBits(-1, 2097151), e.__isInteger__ = !0, e;
  }()
);
function bO(e, t, r) {
  var n = e.toString(t), i = Math.max(r - n.length, 0), o = "0".repeat(i);
  return "".concat(o).concat(n);
}
function gO(e, t, r) {
  return !Number.isNaN(e) && !Number.isNaN(t) && bO(t, r, e.length) === e.toLowerCase();
}
Object.defineProperty(at.prototype, "__isInteger__", {
  value: !0,
  enumerable: !1,
  configurable: !1
});
var Hd = 1 << 16, OO = 1 << 24, Ct = Hd * Hd, wO = Ct * Ct, zd = wO / 2, Yd = at.fromInt(OO), EO = at.fromValue;
We.int = EO;
var SO = at.isInteger;
We.isInt = SO;
var TO = at.inSafeRange;
We.inSafeRange = TO;
var PO = at.toNumber;
We.toNumber = PO;
var IO = at.toString;
We.toString = IO;
We.default = at;
var Te = {}, Nf = {}, ue = {}, wn = {}, Br = {};
Object.defineProperty(Br, "__esModule", { value: !0 });
Br.getBrokenObjectReason = Br.isBrokenObject = Br.createBrokenObject = void 0;
var up = "__isBrokenObject__", sp = "__reason__";
function AO(e, t) {
  t === void 0 && (t = {});
  var r = function() {
    throw e;
  };
  return new Proxy(t, {
    get: function(n, i) {
      if (i === up)
        return !0;
      if (i === sp)
        return e;
      if (i === "toJSON")
        return;
      r();
    },
    set: r,
    apply: r,
    construct: r,
    defineProperty: r,
    deleteProperty: r,
    getOwnPropertyDescriptor: r,
    getPrototypeOf: r,
    has: r,
    isExtensible: r,
    ownKeys: r,
    preventExtensions: r,
    setPrototypeOf: r
  });
}
Br.createBrokenObject = AO;
function RO(e) {
  return e !== null && typeof e == "object" && e[up] === !0;
}
Br.isBrokenObject = RO;
function CO(e) {
  return e[sp];
}
Br.getBrokenObjectReason = CO;
Object.defineProperty(wn, "__esModule", { value: !0 });
wn.stringify = void 0;
var Kd = Br;
function jO(e) {
  return JSON.stringify(e, function(t, r) {
    return (0, Kd.isBrokenObject)(r) ? {
      __isBrokenObject__: !0,
      __reason__: (0, Kd.getBrokenObjectReason)(r)
    } : typeof r == "bigint" ? "".concat(r, "n") : r;
  });
}
wn.stringify = jO;
Object.defineProperty(ue, "__esModule", { value: !0 });
ue.ENCRYPTION_OFF = ue.ENCRYPTION_ON = ue.validateQueryAndParameters = ue.assertValidDate = ue.assertNumberOrInteger = ue.assertNumber = ue.assertString = ue.assertObject = ue.isString = ue.isObject = ue.isEmptyObjectOrNull = void 0;
var NO = We, Mt = wn, $O = "ENCRYPTION_ON";
ue.ENCRYPTION_ON = $O;
var MO = "ENCRYPTION_OFF";
ue.ENCRYPTION_OFF = MO;
function kO(e) {
  if (e === null)
    return !0;
  if (!Yu(e))
    return !1;
  for (var t in e)
    if (e[t] !== void 0)
      return !1;
  return !0;
}
ue.isEmptyObjectOrNull = kO;
function Yu(e) {
  return typeof e == "object" && !Array.isArray(e) && e !== null;
}
ue.isObject = Yu;
function DO(e, t, r) {
  var n, i, o = "", a = t ?? {}, s = (n = r == null ? void 0 : r.skipAsserts) !== null && n !== void 0 ? n : !1;
  return typeof e == "string" ? o = e : e instanceof String ? o = e.toString() : typeof e == "object" && e.text != null && (o = e.text, a = (i = e.parameters) !== null && i !== void 0 ? i : {}), s || (xO(o), WO(a)), { validatedQuery: o, params: a };
}
ue.validateQueryAndParameters = DO;
function UO(e, t) {
  if (!Yu(e))
    throw new TypeError(t + " expected to be an object but was: " + (0, Mt.stringify)(e));
  return e;
}
ue.assertObject = UO;
function cp(e, t) {
  if (!lp(e))
    throw new TypeError((0, Mt.stringify)(t) + " expected to be string but was: " + (0, Mt.stringify)(e));
  return e;
}
ue.assertString = cp;
function LO(e, t) {
  if (typeof e != "number")
    throw new TypeError(t + " expected to be a number but was: " + (0, Mt.stringify)(e));
  return e;
}
ue.assertNumber = LO;
function FO(e, t) {
  if (typeof e != "number" && typeof e != "bigint" && !(0, NO.isInt)(e))
    throw new TypeError(t + " expected to be either a number or an Integer object but was: " + (0, Mt.stringify)(e));
  return e;
}
ue.assertNumberOrInteger = FO;
function BO(e, t) {
  if (Object.prototype.toString.call(e) !== "[object Date]")
    throw new TypeError(t + " expected to be a standard JavaScript Date but was: " + (0, Mt.stringify)(e));
  if (Number.isNaN(e.getTime()))
    throw new TypeError(t + " expected to be valid JavaScript Date but its time was NaN: " + (0, Mt.stringify)(e));
  return e;
}
ue.assertValidDate = BO;
function xO(e) {
  if (cp(e, "Cypher query"), e.trim().length === 0)
    throw new TypeError("Cypher query is expected to be a non-empty string.");
}
function WO(e) {
  if (!Yu(e)) {
    var t = e.constructor != null ? " " + e.constructor.name : "";
    throw new TypeError("Query parameters are expected to either be undefined/null or an object, given:".concat(t, " ").concat(JSON.stringify(e)));
  }
}
function lp(e) {
  return Object.prototype.toString.call(e) === "[object String]";
}
ue.isString = lp;
(function(e) {
  var t = d && d.__createBinding || (Object.create ? function(I, M, W, z) {
    z === void 0 && (z = W);
    var Z = Object.getOwnPropertyDescriptor(M, W);
    (!Z || ("get" in Z ? !M.__esModule : Z.writable || Z.configurable)) && (Z = { enumerable: !0, get: function() {
      return M[W];
    } }), Object.defineProperty(I, z, Z);
  } : function(I, M, W, z) {
    z === void 0 && (z = W), I[z] = M[W];
  }), r = d && d.__setModuleDefault || (Object.create ? function(I, M) {
    Object.defineProperty(I, "default", { enumerable: !0, value: M });
  } : function(I, M) {
    I.default = M;
  }), n = d && d.__importStar || function(I) {
    if (I && I.__esModule)
      return I;
    var M = {};
    if (I != null)
      for (var W in I)
        W !== "default" && Object.prototype.hasOwnProperty.call(I, W) && t(M, I, W);
    return r(M, I), M;
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.floorMod = e.floorDiv = e.assertValidZoneId = e.assertValidNanosecond = e.assertValidSecond = e.assertValidMinute = e.assertValidHour = e.assertValidDay = e.assertValidMonth = e.assertValidYear = e.timeZoneOffsetInSeconds = e.totalNanoseconds = e.newDate = e.toStandardDate = e.isoStringToStandardDate = e.dateToIsoString = e.timeZoneOffsetToIsoString = e.timeToIsoString = e.durationToIsoString = e.dateToEpochDay = e.localDateTimeToEpochSecond = e.localTimeToNanoOfDay = e.normalizeNanosecondsForDuration = e.normalizeSecondsForDuration = e.SECONDS_PER_DAY = e.DAYS_PER_400_YEAR_CYCLE = e.DAYS_0000_TO_1970 = e.NANOS_PER_HOUR = e.NANOS_PER_MINUTE = e.NANOS_PER_MILLISECOND = e.NANOS_PER_SECOND = e.SECONDS_PER_HOUR = e.SECONDS_PER_MINUTE = e.MINUTES_PER_HOUR = e.NANOSECOND_OF_SECOND_RANGE = e.SECOND_OF_MINUTE_RANGE = e.MINUTE_OF_HOUR_RANGE = e.HOUR_OF_DAY_RANGE = e.DAY_OF_MONTH_RANGE = e.MONTH_OF_YEAR_RANGE = e.YEAR_RANGE = void 0;
  var i = n(We), o = we, a = ue, s = (
    /** @class */
    function() {
      function I(M, W) {
        this._minNumber = M, this._maxNumber = W, this._minInteger = (0, i.int)(M), this._maxInteger = (0, i.int)(W);
      }
      return I.prototype.contains = function(M) {
        if ((0, i.isInt)(M) && M instanceof i.default)
          return M.greaterThanOrEqual(this._minInteger) && M.lessThanOrEqual(this._maxInteger);
        if (typeof M == "bigint") {
          var W = (0, i.int)(M);
          return W.greaterThanOrEqual(this._minInteger) && W.lessThanOrEqual(this._maxInteger);
        } else
          return M >= this._minNumber && M <= this._maxNumber;
      }, I.prototype.toString = function() {
        return "[".concat(this._minNumber, ", ").concat(this._maxNumber, "]");
      }, I;
    }()
  );
  e.YEAR_RANGE = new s(-999999999, 999999999), e.MONTH_OF_YEAR_RANGE = new s(1, 12), e.DAY_OF_MONTH_RANGE = new s(1, 31), e.HOUR_OF_DAY_RANGE = new s(0, 23), e.MINUTE_OF_HOUR_RANGE = new s(0, 59), e.SECOND_OF_MINUTE_RANGE = new s(0, 59), e.NANOSECOND_OF_SECOND_RANGE = new s(0, 999999999), e.MINUTES_PER_HOUR = 60, e.SECONDS_PER_MINUTE = 60, e.SECONDS_PER_HOUR = e.SECONDS_PER_MINUTE * e.MINUTES_PER_HOUR, e.NANOS_PER_SECOND = 1e9, e.NANOS_PER_MILLISECOND = 1e6, e.NANOS_PER_MINUTE = e.NANOS_PER_SECOND * e.SECONDS_PER_MINUTE, e.NANOS_PER_HOUR = e.NANOS_PER_MINUTE * e.MINUTES_PER_HOUR, e.DAYS_0000_TO_1970 = 719528, e.DAYS_PER_400_YEAR_CYCLE = 146097, e.SECONDS_PER_DAY = 86400;
  function c(I, M) {
    return (0, i.int)(I).add(re(M, e.NANOS_PER_SECOND));
  }
  e.normalizeSecondsForDuration = c;
  function u(I) {
    return H(I, e.NANOS_PER_SECOND);
  }
  e.normalizeNanosecondsForDuration = u;
  function l(I, M, W, z) {
    I = (0, i.int)(I), M = (0, i.int)(M), W = (0, i.int)(W), z = (0, i.int)(z);
    var Z = I.multiply(e.NANOS_PER_HOUR);
    return Z = Z.add(M.multiply(e.NANOS_PER_MINUTE)), Z = Z.add(W.multiply(e.NANOS_PER_SECOND)), Z.add(z);
  }
  e.localTimeToNanoOfDay = l;
  function v(I, M, W, z, Z, Ae, He) {
    var ir = y(I, M, W), er = V(z, Z, Ae);
    return ir.multiply(e.SECONDS_PER_DAY).add(er);
  }
  e.localDateTimeToEpochSecond = v;
  function y(I, M, W) {
    I = (0, i.int)(I), M = (0, i.int)(M), W = (0, i.int)(W);
    var z = I.multiply(365);
    return I.greaterThanOrEqual(0) ? z = z.add(I.add(3).div(4).subtract(I.add(99).div(100)).add(I.add(399).div(400))) : z = z.subtract(I.div(-4).subtract(I.div(-100)).add(I.div(-400))), z = z.add(M.multiply(367).subtract(362).div(12)), z = z.add(W.subtract(1)), M.greaterThan(2) && (z = z.subtract(1), J(I) || (z = z.subtract(1))), z.subtract(e.DAYS_0000_TO_1970);
  }
  e.dateToEpochDay = y;
  function g(I, M, W, z) {
    var Z = B(I), Ae = B(M), He = ce(W, z);
    return "P".concat(Z, "M").concat(Ae, "DT").concat(He, "S");
  }
  e.durationToIsoString = g;
  function E(I, M, W, z) {
    var Z = B(I, 2), Ae = B(M, 2), He = B(W, 2), ir = Ne(z);
    return "".concat(Z, ":").concat(Ae, ":").concat(He).concat(ir);
  }
  e.timeToIsoString = E;
  function S(I) {
    if (I = (0, i.int)(I), I.equals(0))
      return "Z";
    var M = I.isNegative();
    M && (I = I.multiply(-1));
    var W = M ? "-" : "+", z = B(I.div(e.SECONDS_PER_HOUR), 2), Z = B(I.div(e.SECONDS_PER_MINUTE).modulo(e.MINUTES_PER_HOUR), 2), Ae = I.modulo(e.SECONDS_PER_MINUTE), He = Ae.equals(0) ? null : B(Ae, 2);
    return He != null ? "".concat(W).concat(z, ":").concat(Z, ":").concat(He) : "".concat(W).concat(z, ":").concat(Z);
  }
  e.timeZoneOffsetToIsoString = S;
  function C(I, M, W) {
    var z = G(I), Z = B(M, 2), Ae = B(W, 2);
    return "".concat(z, "-").concat(Z, "-").concat(Ae);
  }
  e.dateToIsoString = C;
  function R(I) {
    return new Date(I);
  }
  e.isoStringToStandardDate = R;
  function $(I) {
    return new Date(I);
  }
  e.toStandardDate = $;
  function U(I) {
    return new Date(I);
  }
  e.newDate = U;
  function D(I, M) {
    M = M ?? 0;
    var W = I.getMilliseconds() * e.NANOS_PER_MILLISECOND;
    return Oe(M, W);
  }
  e.totalNanoseconds = D;
  function F(I) {
    var M = I.getSeconds() >= I.getUTCSeconds() ? I.getSeconds() - I.getUTCSeconds() : I.getSeconds() - I.getUTCSeconds() + 60, W = I.getTimezoneOffset();
    return W === 0 ? 0 + M : -1 * W * e.SECONDS_PER_MINUTE + M;
  }
  e.timeZoneOffsetInSeconds = F;
  function K(I) {
    return se(I, e.YEAR_RANGE, "Year");
  }
  e.assertValidYear = K;
  function X(I) {
    return se(I, e.MONTH_OF_YEAR_RANGE, "Month");
  }
  e.assertValidMonth = X;
  function oe(I) {
    return se(I, e.DAY_OF_MONTH_RANGE, "Day");
  }
  e.assertValidDay = oe;
  function de(I) {
    return se(I, e.HOUR_OF_DAY_RANGE, "Hour");
  }
  e.assertValidHour = de;
  function Ie(I) {
    return se(I, e.MINUTE_OF_HOUR_RANGE, "Minute");
  }
  e.assertValidMinute = Ie;
  function ge(I) {
    return se(I, e.SECOND_OF_MINUTE_RANGE, "Second");
  }
  e.assertValidSecond = ge;
  function Re(I) {
    return se(I, e.NANOSECOND_OF_SECOND_RANGE, "Nanosecond");
  }
  e.assertValidNanosecond = Re;
  function he(I, M) {
    try {
      Intl.DateTimeFormat(void 0, { timeZone: M });
    } catch {
      throw (0, o.newError)("".concat(I, ' is expected to be a valid ZoneId but was: "').concat(M, '"'));
    }
  }
  e.assertValidZoneId = he;
  function se(I, M, W) {
    if ((0, a.assertNumberOrInteger)(I, W), !M.contains(I))
      throw (0, o.newError)("".concat(W, " is expected to be in range ").concat(M.toString(), " but was: ").concat(I.toString()));
    return I;
  }
  function V(I, M, W) {
    I = (0, i.int)(I), M = (0, i.int)(M), W = (0, i.int)(W);
    var z = I.multiply(e.SECONDS_PER_HOUR);
    return z = z.add(M.multiply(e.SECONDS_PER_MINUTE)), z.add(W);
  }
  function J(I) {
    return I = (0, i.int)(I), I.modulo(4).equals(0) ? I.modulo(100).equals(0) ? !!I.modulo(400).equals(0) : !0 : !1;
  }
  function re(I, M) {
    I = (0, i.int)(I), M = (0, i.int)(M);
    var W = I.div(M);
    return I.isPositive() !== M.isPositive() && W.multiply(M).notEquals(I) && (W = W.subtract(1)), W;
  }
  e.floorDiv = re;
  function H(I, M) {
    return I = (0, i.int)(I), M = (0, i.int)(M), I.subtract(re(I, M).multiply(M));
  }
  e.floorMod = H;
  function ce(I, M) {
    I = (0, i.int)(I), M = (0, i.int)(M);
    var W, z, Z = I.isNegative(), Ae = M.greaterThan(0);
    return Z && Ae ? I.equals(-1) ? W = "-0" : W = I.add(1).toString() : W = I.toString(), Ae && (Z ? z = Ne(M.negate().add(2 * e.NANOS_PER_SECOND).modulo(e.NANOS_PER_SECOND)) : z = Ne(M.add(e.NANOS_PER_SECOND).modulo(e.NANOS_PER_SECOND))), z != null ? W + z : W;
  }
  function Ne(I) {
    return I = (0, i.int)(I), I.equals(0) ? "" : "." + B(I, 9);
  }
  function G(I) {
    var M = (0, i.int)(I);
    return M.isNegative() || M.greaterThan(9999) ? B(M, 6, { usePositiveSign: !0 }) : B(M, 4);
  }
  function B(I, M, W) {
    I = (0, i.int)(I);
    var z = I.isNegative();
    z && (I = I.negate());
    var Z = I.toString();
    if (M != null)
      for (; Z.length < M; )
        Z = "0" + Z;
    return z ? "-" + Z : (W == null ? void 0 : W.usePositiveSign) === !0 ? "+" + Z : Z;
  }
  function Oe(I, M) {
    return I instanceof i.default ? I.add(M) : typeof I == "bigint" ? I + BigInt(M) : I + M;
  }
})(Nf);
var VO = d && d.__createBinding || (Object.create ? function(e, t, r, n) {
  n === void 0 && (n = r);
  var i = Object.getOwnPropertyDescriptor(t, r);
  (!i || ("get" in i ? !t.__esModule : i.writable || i.configurable)) && (i = { enumerable: !0, get: function() {
    return t[r];
  } }), Object.defineProperty(e, n, i);
} : function(e, t, r, n) {
  n === void 0 && (n = r), e[n] = t[r];
}), qO = d && d.__setModuleDefault || (Object.create ? function(e, t) {
  Object.defineProperty(e, "default", { enumerable: !0, value: t });
} : function(e, t) {
  e.default = t;
}), fp = d && d.__importStar || function(e) {
  if (e && e.__esModule)
    return e;
  var t = {};
  if (e != null)
    for (var r in e)
      r !== "default" && Object.prototype.hasOwnProperty.call(e, r) && VO(t, e, r);
  return qO(t, e), t;
}, HO = d && d.__read || function(e, t) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r)
    return e;
  var n = r.call(e), i, o = [], a;
  try {
    for (; (t === void 0 || t-- > 0) && !(i = n.next()).done; )
      o.push(i.value);
  } catch (s) {
    a = { error: s };
  } finally {
    try {
      i && !i.done && (r = n.return) && r.call(n);
    } finally {
      if (a)
        throw a.error;
    }
  }
  return o;
};
Object.defineProperty(Te, "__esModule", { value: !0 });
Te.isDateTime = Te.DateTime = Te.isLocalDateTime = Te.LocalDateTime = Te.isDate = Te.Date = Te.isTime = Te.Time = Te.isLocalTime = Te.LocalTime = Te.isDuration = Te.Duration = void 0;
var Q = fp(Nf), Ur = ue, zO = we, Nt = fp(We), En = {
  value: !0,
  enumerable: !1,
  configurable: !1,
  writable: !1
}, dp = "__isDuration__", hp = "__isLocalTime__", vp = "__isTime__", _p = "__isDate__", pp = "__isLocalDateTime__", mp = "__isDateTime__", yp = (
  /** @class */
  function() {
    function e(t, r, n, i) {
      this.months = (0, Ur.assertNumberOrInteger)(t, "Months"), this.days = (0, Ur.assertNumberOrInteger)(r, "Days"), (0, Ur.assertNumberOrInteger)(n, "Seconds"), (0, Ur.assertNumberOrInteger)(i, "Nanoseconds"), this.seconds = Q.normalizeSecondsForDuration(n, i), this.nanoseconds = Q.normalizeNanosecondsForDuration(i), Object.freeze(this);
    }
    return e.prototype.toString = function() {
      return Q.durationToIsoString(this.months, this.days, this.seconds, this.nanoseconds);
    }, e;
  }()
);
Te.Duration = yp;
Object.defineProperty(yp.prototype, dp, En);
function YO(e) {
  return Sn(e, dp);
}
Te.isDuration = YO;
var bp = (
  /** @class */
  function() {
    function e(t, r, n, i) {
      this.hour = Q.assertValidHour(t), this.minute = Q.assertValidMinute(r), this.second = Q.assertValidSecond(n), this.nanosecond = Q.assertValidNanosecond(i), Object.freeze(this);
    }
    return e.fromStandardDate = function(t, r) {
      Di(t, r);
      var n = Q.totalNanoseconds(t, r);
      return new e(t.getHours(), t.getMinutes(), t.getSeconds(), n instanceof Nt.default ? n.toInt() : typeof n == "bigint" ? (0, Nt.int)(n).toInt() : n);
    }, e.prototype.toString = function() {
      return Q.timeToIsoString(this.hour, this.minute, this.second, this.nanosecond);
    }, e;
  }()
);
Te.LocalTime = bp;
Object.defineProperty(bp.prototype, hp, En);
function KO(e) {
  return Sn(e, hp);
}
Te.isLocalTime = KO;
var gp = (
  /** @class */
  function() {
    function e(t, r, n, i, o) {
      this.hour = Q.assertValidHour(t), this.minute = Q.assertValidMinute(r), this.second = Q.assertValidSecond(n), this.nanosecond = Q.assertValidNanosecond(i), this.timeZoneOffsetSeconds = (0, Ur.assertNumberOrInteger)(o, "Time zone offset in seconds"), Object.freeze(this);
    }
    return e.fromStandardDate = function(t, r) {
      return Di(t, r), new e(t.getHours(), t.getMinutes(), t.getSeconds(), (0, Nt.toNumber)(Q.totalNanoseconds(t, r)), Q.timeZoneOffsetInSeconds(t));
    }, e.prototype.toString = function() {
      return Q.timeToIsoString(this.hour, this.minute, this.second, this.nanosecond) + Q.timeZoneOffsetToIsoString(this.timeZoneOffsetSeconds);
    }, e;
  }()
);
Te.Time = gp;
Object.defineProperty(gp.prototype, vp, En);
function GO(e) {
  return Sn(e, vp);
}
Te.isTime = GO;
var Op = (
  /** @class */
  function() {
    function e(t, r, n) {
      this.year = Q.assertValidYear(t), this.month = Q.assertValidMonth(r), this.day = Q.assertValidDay(n), Object.freeze(this);
    }
    return e.fromStandardDate = function(t) {
      return Di(t), new e(t.getFullYear(), t.getMonth() + 1, t.getDate());
    }, e.prototype.toStandardDate = function() {
      return Q.isoStringToStandardDate(this.toString());
    }, e.prototype.toString = function() {
      return Q.dateToIsoString(this.year, this.month, this.day);
    }, e;
  }()
);
Te.Date = Op;
Object.defineProperty(Op.prototype, _p, En);
function ZO(e) {
  return Sn(e, _p);
}
Te.isDate = ZO;
var wp = (
  /** @class */
  function() {
    function e(t, r, n, i, o, a, s) {
      this.year = Q.assertValidYear(t), this.month = Q.assertValidMonth(r), this.day = Q.assertValidDay(n), this.hour = Q.assertValidHour(i), this.minute = Q.assertValidMinute(o), this.second = Q.assertValidSecond(a), this.nanosecond = Q.assertValidNanosecond(s), Object.freeze(this);
    }
    return e.fromStandardDate = function(t, r) {
      return Di(t, r), new e(t.getFullYear(), t.getMonth() + 1, t.getDate(), t.getHours(), t.getMinutes(), t.getSeconds(), (0, Nt.toNumber)(Q.totalNanoseconds(t, r)));
    }, e.prototype.toStandardDate = function() {
      return Q.isoStringToStandardDate(this.toString());
    }, e.prototype.toString = function() {
      return Sp(this.year, this.month, this.day, this.hour, this.minute, this.second, this.nanosecond);
    }, e;
  }()
);
Te.LocalDateTime = wp;
Object.defineProperty(wp.prototype, pp, En);
function QO(e) {
  return Sn(e, pp);
}
Te.isLocalDateTime = QO;
var Ep = (
  /** @class */
  function() {
    function e(t, r, n, i, o, a, s, c, u) {
      this.year = Q.assertValidYear(t), this.month = Q.assertValidMonth(r), this.day = Q.assertValidDay(n), this.hour = Q.assertValidHour(i), this.minute = Q.assertValidMinute(o), this.second = Q.assertValidSecond(a), this.nanosecond = Q.assertValidNanosecond(s);
      var l = HO(XO(c, u), 2), v = l[0], y = l[1];
      this.timeZoneOffsetSeconds = v, this.timeZoneId = y ?? void 0, Object.freeze(this);
    }
    return e.fromStandardDate = function(t, r) {
      return Di(t, r), new e(
        t.getFullYear(),
        t.getMonth() + 1,
        t.getDate(),
        t.getHours(),
        t.getMinutes(),
        t.getSeconds(),
        (0, Nt.toNumber)(Q.totalNanoseconds(t, r)),
        Q.timeZoneOffsetInSeconds(t),
        null
        /* no time zone id */
      );
    }, e.prototype.toStandardDate = function() {
      return Q.toStandardDate(this._toUTC());
    }, e.prototype.toString = function() {
      var t, r = Sp(this.year, this.month, this.day, this.hour, this.minute, this.second, this.nanosecond), n = this.timeZoneOffsetSeconds != null ? Q.timeZoneOffsetToIsoString((t = this.timeZoneOffsetSeconds) !== null && t !== void 0 ? t : 0) : "", i = this.timeZoneId != null ? "[".concat(this.timeZoneId, "]") : "";
      return r + n + i;
    }, e.prototype._toUTC = function() {
      var t;
      if (this.timeZoneOffsetSeconds === void 0)
        throw new Error("Requires DateTime created with time zone offset");
      var r = Q.localDateTimeToEpochSecond(this.year, this.month, this.day, this.hour, this.minute, this.second, this.nanosecond), n = r.subtract((t = this.timeZoneOffsetSeconds) !== null && t !== void 0 ? t : 0);
      return (0, Nt.int)(n).multiply(1e3).add((0, Nt.int)(this.nanosecond).div(1e6)).toNumber();
    }, e;
  }()
);
Te.DateTime = Ep;
Object.defineProperty(Ep.prototype, mp, En);
function JO(e) {
  return Sn(e, mp);
}
Te.isDateTime = JO;
function Sn(e, t) {
  return e != null && e[t] === !0;
}
function Sp(e, t, r, n, i, o, a) {
  return Q.dateToIsoString(e, t, r) + "T" + Q.timeToIsoString(n, i, o, a);
}
function XO(e, t) {
  var r = e != null, n = t != null && t !== "";
  if (!r && !n)
    throw (0, zO.newError)(
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      "Unable to create DateTime without either time zone offset or id. Please specify either of them. Given offset: ".concat(e, " and id: ").concat(t)
    );
  var i = [void 0, void 0];
  return r && ((0, Ur.assertNumberOrInteger)(e, "Time zone offset in seconds"), i[0] = e), n && ((0, Ur.assertString)(t, "Time zone ID"), Q.assertValidZoneId("Time zone ID", t), i[1] = t), i;
}
function Di(e, t) {
  (0, Ur.assertValidDate)(e, "Standard date"), t != null && (0, Ur.assertNumberOrInteger)(t, "Nanosecond");
}
var je = {};
Object.defineProperty(je, "__esModule", { value: !0 });
je.isPathSegment = je.PathSegment = je.isPath = je.Path = je.isUnboundRelationship = je.UnboundRelationship = je.isRelationship = je.Relationship = je.isNode = je.Node = void 0;
var $f = wn, Ui = {
  value: !0,
  enumerable: !1,
  configurable: !1,
  writable: !1
}, Tp = "__isNode__", Pp = "__isRelationship__", Ip = "__isUnboundRelationship__", Ap = "__isPath__", Rp = "__isPathSegment__";
function Li(e, t) {
  return e != null && e[t] === !0;
}
var Cp = (
  /** @class */
  function() {
    function e(t, r, n, i) {
      this.identity = t, this.labels = r, this.properties = n, this.elementId = bi(i, function() {
        return t.toString();
      });
    }
    return e.prototype.toString = function() {
      for (var t = "(" + this.elementId, r = 0; r < this.labels.length; r++)
        t += ":" + this.labels[r];
      var n = Object.keys(this.properties);
      if (n.length > 0) {
        t += " {";
        for (var r = 0; r < n.length; r++)
          r > 0 && (t += ","), t += n[r] + ":" + (0, $f.stringify)(this.properties[n[r]]);
        t += "}";
      }
      return t += ")", t;
    }, e;
  }()
);
je.Node = Cp;
Object.defineProperty(Cp.prototype, Tp, Ui);
function e1(e) {
  return Li(e, Tp);
}
je.isNode = e1;
var Iu = (
  /** @class */
  function() {
    function e(t, r, n, i, o, a, s, c) {
      this.identity = t, this.start = r, this.end = n, this.type = i, this.properties = o, this.elementId = bi(a, function() {
        return t.toString();
      }), this.startNodeElementId = bi(s, function() {
        return r.toString();
      }), this.endNodeElementId = bi(c, function() {
        return n.toString();
      });
    }
    return e.prototype.toString = function() {
      var t = "(" + this.startNodeElementId + ")-[:" + this.type, r = Object.keys(this.properties);
      if (r.length > 0) {
        t += " {";
        for (var n = 0; n < r.length; n++)
          n > 0 && (t += ","), t += r[n] + ":" + (0, $f.stringify)(this.properties[r[n]]);
        t += "}";
      }
      return t += "]->(" + this.endNodeElementId + ")", t;
    }, e;
  }()
);
je.Relationship = Iu;
Object.defineProperty(Iu.prototype, Pp, Ui);
function r1(e) {
  return Li(e, Pp);
}
je.isRelationship = r1;
var jp = (
  /** @class */
  function() {
    function e(t, r, n, i) {
      this.identity = t, this.type = r, this.properties = n, this.elementId = bi(i, function() {
        return t.toString();
      });
    }
    return e.prototype.bind = function(t, r) {
      return new Iu(this.identity, t, r, this.type, this.properties, this.elementId);
    }, e.prototype.bindTo = function(t, r) {
      return new Iu(this.identity, t.identity, r.identity, this.type, this.properties, this.elementId, t.elementId, r.elementId);
    }, e.prototype.toString = function() {
      var t = "-[:" + this.type, r = Object.keys(this.properties);
      if (r.length > 0) {
        t += " {";
        for (var n = 0; n < r.length; n++)
          n > 0 && (t += ","), t += r[n] + ":" + (0, $f.stringify)(this.properties[r[n]]);
        t += "}";
      }
      return t += "]->", t;
    }, e;
  }()
);
je.UnboundRelationship = jp;
Object.defineProperty(jp.prototype, Ip, Ui);
function t1(e) {
  return Li(e, Ip);
}
je.isUnboundRelationship = t1;
var Np = (
  /** @class */
  function() {
    function e(t, r, n) {
      this.start = t, this.relationship = r, this.end = n;
    }
    return e;
  }()
);
je.PathSegment = Np;
Object.defineProperty(Np.prototype, Rp, Ui);
function n1(e) {
  return Li(e, Rp);
}
je.isPathSegment = n1;
var $p = (
  /** @class */
  function() {
    function e(t, r, n) {
      this.start = t, this.end = r, this.segments = n, this.length = n.length;
    }
    return e;
  }()
);
je.Path = $p;
Object.defineProperty($p.prototype, Ap, Ui);
function i1(e) {
  return Li(e, Ap);
}
je.isPath = i1;
function bi(e, t) {
  return e ?? t();
}
var Mf = {}, fl = d && d.__generator || function(e, t) {
  var r = { label: 0, sent: function() {
    if (o[0] & 1)
      throw o[1];
    return o[1];
  }, trys: [], ops: [] }, n, i, o, a;
  return a = { next: s(0), throw: s(1), return: s(2) }, typeof Symbol == "function" && (a[Symbol.iterator] = function() {
    return this;
  }), a;
  function s(u) {
    return function(l) {
      return c([u, l]);
    };
  }
  function c(u) {
    if (n)
      throw new TypeError("Generator is already executing.");
    for (; a && (a = 0, u[0] && (r = 0)), r; )
      try {
        if (n = 1, i && (o = u[0] & 2 ? i.return : u[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, u[1])).done)
          return o;
        switch (i = 0, o && (u = [u[0] & 2, o.value]), u[0]) {
          case 0:
          case 1:
            o = u;
            break;
          case 4:
            return r.label++, { value: u[1], done: !1 };
          case 5:
            r.label++, i = u[1], u = [0];
            continue;
          case 7:
            u = r.ops.pop(), r.trys.pop();
            continue;
          default:
            if (o = r.trys, !(o = o.length > 0 && o[o.length - 1]) && (u[0] === 6 || u[0] === 2)) {
              r = 0;
              continue;
            }
            if (u[0] === 3 && (!o || u[1] > o[0] && u[1] < o[3])) {
              r.label = u[1];
              break;
            }
            if (u[0] === 6 && r.label < o[1]) {
              r.label = o[1], o = u;
              break;
            }
            if (o && r.label < o[2]) {
              r.label = o[2], r.ops.push(u);
              break;
            }
            o[2] && r.ops.pop(), r.trys.pop();
            continue;
        }
        u = t.call(e, r);
      } catch (l) {
        u = [6, l], i = 0;
      } finally {
        n = o = 0;
      }
    if (u[0] & 5)
      throw u[1];
    return { value: u[0] ? u[1] : void 0, done: !0 };
  }
}, dl = d && d.__values || function(e) {
  var t = typeof Symbol == "function" && Symbol.iterator, r = t && e[t], n = 0;
  if (r)
    return r.call(e);
  if (e && typeof e.length == "number")
    return {
      next: function() {
        return e && n >= e.length && (e = void 0), { value: e && e[n++], done: !e };
      }
    };
  throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, hl = d && d.__read || function(e, t) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r)
    return e;
  var n = r.call(e), i, o = [], a;
  try {
    for (; (t === void 0 || t-- > 0) && !(i = n.next()).done; )
      o.push(i.value);
  } catch (s) {
    a = { error: s };
  } finally {
    try {
      i && !i.done && (r = n.return) && r.call(n);
    } finally {
      if (a)
        throw a.error;
    }
  }
  return o;
};
Object.defineProperty(Mf, "__esModule", { value: !0 });
var Gd = we;
function o1(e) {
  var t = {};
  return e.forEach(function(r, n) {
    t[r] = n;
  }), t;
}
var a1 = (
  /** @class */
  function() {
    function e(t, r, n) {
      this.keys = t, this.length = t.length, this._fields = r, this._fieldLookup = n ?? o1(t);
    }
    return e.prototype.forEach = function(t) {
      var r, n;
      try {
        for (var i = dl(this.entries()), o = i.next(); !o.done; o = i.next()) {
          var a = hl(o.value, 2), s = a[0], c = a[1];
          t(c, s, this);
        }
      } catch (u) {
        r = { error: u };
      } finally {
        try {
          o && !o.done && (n = i.return) && n.call(i);
        } finally {
          if (r)
            throw r.error;
        }
      }
    }, e.prototype.map = function(t) {
      var r, n, i = [];
      try {
        for (var o = dl(this.entries()), a = o.next(); !a.done; a = o.next()) {
          var s = hl(a.value, 2), c = s[0], u = s[1];
          i.push(t(u, c, this));
        }
      } catch (l) {
        r = { error: l };
      } finally {
        try {
          a && !a.done && (n = o.return) && n.call(o);
        } finally {
          if (r)
            throw r.error;
        }
      }
      return i;
    }, e.prototype.entries = function() {
      var t;
      return fl(this, function(r) {
        switch (r.label) {
          case 0:
            t = 0, r.label = 1;
          case 1:
            return t < this.keys.length ? [4, [this.keys[t], this._fields[t]]] : [3, 4];
          case 2:
            r.sent(), r.label = 3;
          case 3:
            return t++, [3, 1];
          case 4:
            return [
              2
              /*return*/
            ];
        }
      });
    }, e.prototype.values = function() {
      var t;
      return fl(this, function(r) {
        switch (r.label) {
          case 0:
            t = 0, r.label = 1;
          case 1:
            return t < this.keys.length ? [4, this._fields[t]] : [3, 4];
          case 2:
            r.sent(), r.label = 3;
          case 3:
            return t++, [3, 1];
          case 4:
            return [
              2
              /*return*/
            ];
        }
      });
    }, e.prototype[Symbol.iterator] = function() {
      var t;
      return fl(this, function(r) {
        switch (r.label) {
          case 0:
            t = 0, r.label = 1;
          case 1:
            return t < this.keys.length ? [4, this._fields[t]] : [3, 4];
          case 2:
            r.sent(), r.label = 3;
          case 3:
            return t++, [3, 1];
          case 4:
            return [
              2
              /*return*/
            ];
        }
      });
    }, e.prototype.toObject = function() {
      var t, r, n = {};
      try {
        for (var i = dl(this.entries()), o = i.next(); !o.done; o = i.next()) {
          var a = hl(o.value, 2), s = a[0], c = a[1];
          n[s] = c;
        }
      } catch (u) {
        t = { error: u };
      } finally {
        try {
          o && !o.done && (r = i.return) && r.call(i);
        } finally {
          if (t)
            throw t.error;
        }
      }
      return n;
    }, e.prototype.get = function(t) {
      var r;
      if (typeof t != "number") {
        if (r = this._fieldLookup[t], r === void 0)
          throw (0, Gd.newError)("This record has no field with key '".concat(t.toString(), "', available keys are: [") + this.keys.toString() + "].");
      } else
        r = t;
      if (r > this._fields.length - 1 || r < 0)
        throw (0, Gd.newError)("This record has no field with index '" + r.toString() + "'. Remember that indexes start at `0`, and make sure your query returns records in the shape you meant it to.");
      return this._fields[r];
    }, e.prototype.has = function(t) {
      return typeof t == "number" ? t >= 0 && t < this._fields.length : this._fieldLookup[t] !== void 0;
    }, e;
  }()
);
Mf.default = a1;
var vn = {};
Object.defineProperty(vn, "__esModule", { value: !0 });
vn.isPoint = vn.Point = void 0;
var Ja = ue, Mp = "__isPoint__", kp = (
  /** @class */
  function() {
    function e(t, r, n, i) {
      this.srid = (0, Ja.assertNumberOrInteger)(t, "SRID"), this.x = (0, Ja.assertNumber)(r, "X coordinate"), this.y = (0, Ja.assertNumber)(n, "Y coordinate"), this.z = i == null ? i : (0, Ja.assertNumber)(i, "Z coordinate"), Object.freeze(this);
    }
    return e.prototype.toString = function() {
      return this.z != null && !isNaN(this.z) ? "Point{srid=".concat(Ot(this.srid), ", x=").concat(Ot(this.x), ", y=").concat(Ot(this.y), ", z=").concat(Ot(this.z), "}") : "Point{srid=".concat(Ot(this.srid), ", x=").concat(Ot(this.x), ", y=").concat(Ot(this.y), "}");
    }, e;
  }()
);
vn.Point = kp;
function Ot(e) {
  return Number.isInteger(e) ? e.toString() + ".0" : e.toString();
}
Object.defineProperty(kp.prototype, Mp, {
  value: !0,
  enumerable: !1,
  configurable: !1,
  writable: !1
});
function u1(e) {
  var t = e;
  return e != null && t[Mp] === !0;
}
vn.isPoint = u1;
var xe = {}, s1 = d && d.__createBinding || (Object.create ? function(e, t, r, n) {
  n === void 0 && (n = r);
  var i = Object.getOwnPropertyDescriptor(t, r);
  (!i || ("get" in i ? !t.__esModule : i.writable || i.configurable)) && (i = { enumerable: !0, get: function() {
    return t[r];
  } }), Object.defineProperty(e, n, i);
} : function(e, t, r, n) {
  n === void 0 && (n = r), e[n] = t[r];
}), c1 = d && d.__setModuleDefault || (Object.create ? function(e, t) {
  Object.defineProperty(e, "default", { enumerable: !0, value: t });
} : function(e, t) {
  e.default = t;
}), l1 = d && d.__importStar || function(e) {
  if (e && e.__esModule)
    return e;
  var t = {};
  if (e != null)
    for (var r in e)
      r !== "default" && Object.prototype.hasOwnProperty.call(e, r) && s1(t, e, r);
  return c1(t, e), t;
};
Object.defineProperty(xe, "__esModule", { value: !0 });
xe.Stats = xe.QueryStatistics = xe.ProfiledPlan = xe.Plan = xe.Notification = xe.ServerInfo = xe.queryType = void 0;
var Zd = l1(We), f1 = (
  /** @class */
  function() {
    function e(t, r, n, i) {
      var o, a, s;
      this.query = { text: t, parameters: r }, this.queryType = n.type, this.counters = new Dp((o = n.stats) !== null && o !== void 0 ? o : {}), this.updateStatistics = this.counters, this.plan = n.plan != null || n.profile != null ? new Jl((a = n.plan) !== null && a !== void 0 ? a : n.profile) : !1, this.profile = n.profile != null ? new Xl(n.profile) : !1, this.notifications = this._buildNotifications(n.notifications), this.server = new Lp(n.server, i), this.resultConsumedAfter = n.result_consumed_after, this.resultAvailableAfter = n.result_available_after, this.database = { name: (s = n.db) !== null && s !== void 0 ? s : null };
    }
    return e.prototype._buildNotifications = function(t) {
      return t == null ? [] : t.map(function(r) {
        return new Up(r);
      });
    }, e.prototype.hasPlan = function() {
      return this.plan instanceof Jl;
    }, e.prototype.hasProfile = function() {
      return this.profile instanceof Xl;
    }, e;
  }()
), Jl = (
  /** @class */
  function() {
    function e(t) {
      this.operatorType = t.operatorType, this.identifiers = t.identifiers, this.arguments = t.args, this.children = t.children != null ? t.children.map(function(r) {
        return new e(r);
      }) : [];
    }
    return e;
  }()
);
xe.Plan = Jl;
var Xl = (
  /** @class */
  function() {
    function e(t) {
      this.operatorType = t.operatorType, this.identifiers = t.identifiers, this.arguments = t.args, this.dbHits = tn("dbHits", t), this.rows = tn("rows", t), this.pageCacheMisses = tn("pageCacheMisses", t), this.pageCacheHits = tn("pageCacheHits", t), this.pageCacheHitRatio = tn("pageCacheHitRatio", t), this.time = tn("time", t), this.children = t.children != null ? t.children.map(function(r) {
        return new e(r);
      }) : [];
    }
    return e.prototype.hasPageCacheStats = function() {
      return this.pageCacheMisses > 0 || this.pageCacheHits > 0 || this.pageCacheHitRatio > 0;
    }, e;
  }()
);
xe.ProfiledPlan = Xl;
var d1 = (
  /** @class */
  function() {
    function e() {
      this.nodesCreated = 0, this.nodesDeleted = 0, this.relationshipsCreated = 0, this.relationshipsDeleted = 0, this.propertiesSet = 0, this.labelsAdded = 0, this.labelsRemoved = 0, this.indexesAdded = 0, this.indexesRemoved = 0, this.constraintsAdded = 0, this.constraintsRemoved = 0;
    }
    return e;
  }()
);
xe.Stats = d1;
var Dp = (
  /** @class */
  function() {
    function e(t) {
      var r = this;
      this._stats = {
        nodesCreated: 0,
        nodesDeleted: 0,
        relationshipsCreated: 0,
        relationshipsDeleted: 0,
        propertiesSet: 0,
        labelsAdded: 0,
        labelsRemoved: 0,
        indexesAdded: 0,
        indexesRemoved: 0,
        constraintsAdded: 0,
        constraintsRemoved: 0
      }, this._systemUpdates = 0, Object.keys(t).forEach(function(n) {
        var i = n.replace(/(-\w)/g, function(o) {
          return o[1].toUpperCase();
        });
        i in r._stats ? r._stats[i] = sn(t[n]) : i === "systemUpdates" ? r._systemUpdates = sn(t[n]) : i === "containsSystemUpdates" ? r._containsSystemUpdates = t[n] : i === "containsUpdates" && (r._containsUpdates = t[n]);
      }), this._stats = Object.freeze(this._stats);
    }
    return e.prototype.containsUpdates = function() {
      var t = this;
      return this._containsUpdates !== void 0 ? this._containsUpdates : Object.keys(this._stats).reduce(function(r, n) {
        return r + t._stats[n];
      }, 0) > 0;
    }, e.prototype.updates = function() {
      return this._stats;
    }, e.prototype.containsSystemUpdates = function() {
      return this._containsSystemUpdates !== void 0 ? this._containsSystemUpdates : this._systemUpdates > 0;
    }, e.prototype.systemUpdates = function() {
      return this._systemUpdates;
    }, e;
  }()
);
xe.QueryStatistics = Dp;
var Up = (
  /** @class */
  function() {
    function e(t) {
      this.code = t.code, this.title = t.title, this.description = t.description, this.severity = t.severity, this.position = e._constructPosition(t.position);
    }
    return e._constructPosition = function(t) {
      return t == null ? {} : {
        offset: sn(t.offset),
        line: sn(t.line),
        column: sn(t.column)
      };
    }, e;
  }()
);
xe.Notification = Up;
var Lp = (
  /** @class */
  function() {
    function e(t, r) {
      t != null && (this.address = t.address, this.agent = t.version), this.protocolVersion = r;
    }
    return e;
  }()
);
xe.ServerInfo = Lp;
function sn(e) {
  return e instanceof Zd.default ? e.toInt() : typeof e == "bigint" ? (0, Zd.int)(e).toInt() : e;
}
function tn(e, t, r) {
  if (r === void 0 && (r = 0), t !== !1 && e in t) {
    var n = t[e];
    return sn(n);
  } else
    return r;
}
var h1 = {
  READ_ONLY: "r",
  READ_WRITE: "rw",
  WRITE_ONLY: "w",
  SCHEMA_WRITE: "s"
};
xe.queryType = h1;
xe.default = f1;
var Fi = {}, me = {}, Jr = {};
Object.defineProperty(Jr, "__esModule", { value: !0 });
Jr.FailedObserver = Jr.CompletedObserver = void 0;
var v1 = (
  /** @class */
  function() {
    function e() {
    }
    return e.prototype.subscribe = function(t) {
      gi(t, t.onKeys, []), gi(t, t.onCompleted, {});
    }, e.prototype.cancel = function() {
    }, e.prototype.pause = function() {
    }, e.prototype.resume = function() {
    }, e.prototype.prepareToHandleSingleResponse = function() {
    }, e.prototype.markCompleted = function() {
    }, e.prototype.onError = function(t) {
      throw Error("CompletedObserver not supposed to call onError");
    }, e;
  }()
);
Jr.CompletedObserver = v1;
var _1 = (
  /** @class */
  function() {
    function e(t) {
      var r = t.error, n = t.onError;
      this._error = r, this._beforeError = n, this._observers = [], this.onError(r);
    }
    return e.prototype.subscribe = function(t) {
      gi(t, t.onError, this._error), this._observers.push(t);
    }, e.prototype.onError = function(t) {
      gi(this, this._beforeError, t), this._observers.forEach(function(r) {
        return gi(r, r.onError, t);
      });
    }, e.prototype.cancel = function() {
    }, e.prototype.pause = function() {
    }, e.prototype.resume = function() {
    }, e.prototype.markCompleted = function() {
    }, e.prototype.prepareToHandleSingleResponse = function() {
    }, e;
  }()
);
Jr.FailedObserver = _1;
function gi(e, t, r) {
  t != null && t.bind(e)(r);
}
var ut = {}, p1 = d && d.__createBinding || (Object.create ? function(e, t, r, n) {
  n === void 0 && (n = r);
  var i = Object.getOwnPropertyDescriptor(t, r);
  (!i || ("get" in i ? !t.__esModule : i.writable || i.configurable)) && (i = { enumerable: !0, get: function() {
    return t[r];
  } }), Object.defineProperty(e, n, i);
} : function(e, t, r, n) {
  n === void 0 && (n = r), e[n] = t[r];
}), m1 = d && d.__setModuleDefault || (Object.create ? function(e, t) {
  Object.defineProperty(e, "default", { enumerable: !0, value: t });
} : function(e, t) {
  e.default = t;
}), y1 = d && d.__importStar || function(e) {
  if (e && e.__esModule)
    return e;
  var t = {};
  if (e != null)
    for (var r in e)
      r !== "default" && Object.prototype.hasOwnProperty.call(e, r) && p1(t, e, r);
  return m1(t, e), t;
}, b1 = d && d.__read || function(e, t) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r)
    return e;
  var n = r.call(e), i, o = [], a;
  try {
    for (; (t === void 0 || t-- > 0) && !(i = n.next()).done; )
      o.push(i.value);
  } catch (s) {
    a = { error: s };
  } finally {
    try {
      i && !i.done && (r = n.return) && r.call(n);
    } finally {
      if (a)
        throw a.error;
    }
  }
  return o;
}, g1 = d && d.__spreadArray || function(e, t, r) {
  if (r || arguments.length === 2)
    for (var n = 0, i = t.length, o; n < i; n++)
      (o || !(n in t)) && (o || (o = Array.prototype.slice.call(t, 0, n)), o[n] = t[n]);
  return e.concat(o || Array.prototype.slice.call(t));
};
Object.defineProperty(ut, "__esModule", { value: !0 });
ut.Bookmarks = void 0;
var Qd = y1(ue), O1 = "bookmarks", Fp = (
  /** @class */
  function() {
    function e(t) {
      this._values = E1(t);
    }
    return e.empty = function() {
      return w1;
    }, e.prototype.isEmpty = function() {
      return this._values.length === 0;
    }, e.prototype.values = function() {
      return this._values;
    }, e.prototype[Symbol.iterator] = function() {
      return this._values[Symbol.iterator]();
    }, e.prototype.asBeginTransactionParameters = function() {
      var t;
      return this.isEmpty() ? {} : (t = {}, t[O1] = this._values, t);
    }, e;
  }()
);
ut.Bookmarks = Fp;
var w1 = new Fp(null);
function E1(e) {
  if (e == null || e === "")
    return [];
  if (Qd.isString(e))
    return [e];
  if (Array.isArray(e)) {
    for (var t = /* @__PURE__ */ new Set(), r = Bp(e), n = 0; n < r.length; n++) {
      var i = r[n];
      if (i != null) {
        if (!Qd.isString(i))
          throw new TypeError(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            "Bookmark value should be a string, given: '".concat(i, "'")
          );
        t.add(i);
      }
    }
    return g1([], b1(t), !1);
  }
  throw new TypeError(
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    "Bookmarks should either be a string or a string array, given: '".concat(e, "'")
  );
}
function Bp(e) {
  return e.reduce(function(t, r) {
    return Array.isArray(r) ? t.concat(Bp(r)) : t.concat(r);
  }, []);
}
var ae = {};
Object.defineProperty(ae, "__esModule", { value: !0 });
ae.BOLT_PROTOCOL_V5_0 = ae.BOLT_PROTOCOL_V4_4 = ae.BOLT_PROTOCOL_V4_3 = ae.BOLT_PROTOCOL_V4_2 = ae.BOLT_PROTOCOL_V4_1 = ae.BOLT_PROTOCOL_V4_0 = ae.BOLT_PROTOCOL_V3 = ae.BOLT_PROTOCOL_V2 = ae.BOLT_PROTOCOL_V1 = ae.DEFAULT_POOL_MAX_SIZE = ae.DEFAULT_POOL_ACQUISITION_TIMEOUT = ae.DEFAULT_CONNECTION_TIMEOUT_MILLIS = ae.ACCESS_MODE_WRITE = ae.ACCESS_MODE_READ = ae.FETCH_ALL = void 0;
var S1 = -1;
ae.FETCH_ALL = S1;
var T1 = 60 * 1e3;
ae.DEFAULT_POOL_ACQUISITION_TIMEOUT = T1;
var P1 = 100;
ae.DEFAULT_POOL_MAX_SIZE = P1;
var I1 = 3e4;
ae.DEFAULT_CONNECTION_TIMEOUT_MILLIS = I1;
var A1 = "READ";
ae.ACCESS_MODE_READ = A1;
var R1 = "WRITE";
ae.ACCESS_MODE_WRITE = R1;
var C1 = 1;
ae.BOLT_PROTOCOL_V1 = C1;
var j1 = 2;
ae.BOLT_PROTOCOL_V2 = j1;
var N1 = 3;
ae.BOLT_PROTOCOL_V3 = N1;
var $1 = 4;
ae.BOLT_PROTOCOL_V4_0 = $1;
var M1 = 4.1;
ae.BOLT_PROTOCOL_V4_1 = M1;
var k1 = 4.2;
ae.BOLT_PROTOCOL_V4_2 = k1;
var D1 = 4.3;
ae.BOLT_PROTOCOL_V4_3 = D1;
var U1 = 4.4;
ae.BOLT_PROTOCOL_V4_4 = U1;
var L1 = 5;
ae.BOLT_PROTOCOL_V5_0 = L1;
var _r = {}, xp = d && d.__extends || function() {
  var e = function(t, r) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var o in i)
        Object.prototype.hasOwnProperty.call(i, o) && (n[o] = i[o]);
    }, e(t, r);
  };
  return function(t, r) {
    if (typeof r != "function" && r !== null)
      throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
    e(t, r);
    function n() {
      this.constructor = t;
    }
    t.prototype = r === null ? Object.create(r) : (n.prototype = r.prototype, new n());
  };
}(), Oi = d && d.__awaiter || function(e, t, r, n) {
  function i(o) {
    return o instanceof r ? o : new r(function(a) {
      a(o);
    });
  }
  return new (r || (r = Promise))(function(o, a) {
    function s(l) {
      try {
        u(n.next(l));
      } catch (v) {
        a(v);
      }
    }
    function c(l) {
      try {
        u(n.throw(l));
      } catch (v) {
        a(v);
      }
    }
    function u(l) {
      l.done ? o(l.value) : i(l.value).then(s, c);
    }
    u((n = n.apply(e, t || [])).next());
  });
}, wi = d && d.__generator || function(e, t) {
  var r = { label: 0, sent: function() {
    if (o[0] & 1)
      throw o[1];
    return o[1];
  }, trys: [], ops: [] }, n, i, o, a;
  return a = { next: s(0), throw: s(1), return: s(2) }, typeof Symbol == "function" && (a[Symbol.iterator] = function() {
    return this;
  }), a;
  function s(u) {
    return function(l) {
      return c([u, l]);
    };
  }
  function c(u) {
    if (n)
      throw new TypeError("Generator is already executing.");
    for (; a && (a = 0, u[0] && (r = 0)), r; )
      try {
        if (n = 1, i && (o = u[0] & 2 ? i.return : u[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, u[1])).done)
          return o;
        switch (i = 0, o && (u = [u[0] & 2, o.value]), u[0]) {
          case 0:
          case 1:
            o = u;
            break;
          case 4:
            return r.label++, { value: u[1], done: !1 };
          case 5:
            r.label++, i = u[1], u = [0];
            continue;
          case 7:
            u = r.ops.pop(), r.trys.pop();
            continue;
          default:
            if (o = r.trys, !(o = o.length > 0 && o[o.length - 1]) && (u[0] === 6 || u[0] === 2)) {
              r = 0;
              continue;
            }
            if (u[0] === 3 && (!o || u[1] > o[0] && u[1] < o[3])) {
              r.label = u[1];
              break;
            }
            if (u[0] === 6 && r.label < o[1]) {
              r.label = o[1], o = u;
              break;
            }
            if (o && r.label < o[2]) {
              r.label = o[2], r.ops.push(u);
              break;
            }
            o[2] && r.ops.pop(), r.trys.pop();
            continue;
        }
        u = t.call(e, r);
      } catch (l) {
        u = [6, l], i = 0;
      } finally {
        n = o = 0;
      }
    if (u[0] & 5)
      throw u[1];
    return { value: u[0] ? u[1] : void 0, done: !0 };
  }
};
Object.defineProperty(_r, "__esModule", { value: !0 });
_r.EMPTY_CONNECTION_HOLDER = _r.ReadOnlyConnectionHolder = _r.ConnectionHolder = void 0;
var F1 = we, B1 = ue, x1 = ae, Jd = ut, kf = (
  /** @class */
  function() {
    function e(t) {
      var r = t === void 0 ? {} : t, n = r.mode, i = n === void 0 ? x1.ACCESS_MODE_WRITE : n, o = r.database, a = o === void 0 ? "" : o, s = r.bookmarks, c = r.connectionProvider, u = r.impersonatedUser, l = r.onDatabaseNameResolved, v = r.getConnectionAcquistionBookmarks;
      this._mode = i, this._database = a != null ? (0, B1.assertString)(a, "database") : "", this._bookmarks = s ?? Jd.Bookmarks.empty(), this._connectionProvider = c, this._impersonatedUser = u, this._referenceCount = 0, this._connectionPromise = Promise.resolve(null), this._onDatabaseNameResolved = l, this._getConnectionAcquistionBookmarks = v ?? function() {
        return Promise.resolve(Jd.Bookmarks.empty());
      };
    }
    return e.prototype.mode = function() {
      return this._mode;
    }, e.prototype.database = function() {
      return this._database;
    }, e.prototype.setDatabase = function(t) {
      this._database = t;
    }, e.prototype.bookmarks = function() {
      return this._bookmarks;
    }, e.prototype.connectionProvider = function() {
      return this._connectionProvider;
    }, e.prototype.referenceCount = function() {
      return this._referenceCount;
    }, e.prototype.initializeConnection = function() {
      if (this._referenceCount === 0 && this._connectionProvider != null)
        this._connectionPromise = this._createConnectionPromise(this._connectionProvider);
      else
        return this._referenceCount++, !1;
      return this._referenceCount++, !0;
    }, e.prototype._createConnectionPromise = function(t) {
      return Oi(this, void 0, void 0, function() {
        var r, n, i;
        return wi(this, function(o) {
          switch (o.label) {
            case 0:
              return n = (r = t).acquireConnection, i = {
                accessMode: this._mode,
                database: this._database
              }, [4, this._getBookmarks()];
            case 1:
              return [4, n.apply(r, [(i.bookmarks = o.sent(), i.impersonatedUser = this._impersonatedUser, i.onDatabaseNameResolved = this._onDatabaseNameResolved, i)])];
            case 2:
              return [2, o.sent()];
          }
        });
      });
    }, e.prototype._getBookmarks = function() {
      return Oi(this, void 0, void 0, function() {
        return wi(this, function(t) {
          switch (t.label) {
            case 0:
              return [4, this._getConnectionAcquistionBookmarks()];
            case 1:
              return [2, t.sent()];
          }
        });
      });
    }, e.prototype.getConnection = function() {
      return this._connectionPromise;
    }, e.prototype.releaseConnection = function() {
      return this._referenceCount === 0 ? this._connectionPromise : (this._referenceCount--, this._referenceCount === 0 ? this._releaseConnection() : this._connectionPromise);
    }, e.prototype.close = function(t) {
      return this._referenceCount === 0 ? this._connectionPromise : (this._referenceCount = 0, this._releaseConnection(t));
    }, e.prototype._releaseConnection = function(t) {
      return this._connectionPromise = this._connectionPromise.then(function(r) {
        return r != null ? r.isOpen() && (r.hasOngoingObservableRequests() || t === !0) ? r.resetAndFlush().catch(Xd).then(function() {
          return r._release().then(function() {
            return null;
          });
        }) : r._release().then(function() {
          return null;
        }) : Promise.resolve(null);
      }).catch(Xd), this._connectionPromise;
    }, e;
  }()
);
_r.ConnectionHolder = kf;
var Wp = (
  /** @class */
  function(e) {
    xp(t, e);
    function t(r) {
      var n = e.call(this, {
        mode: r.mode(),
        database: r.database(),
        bookmarks: r.bookmarks(),
        // @ts-expect-error
        getConnectionAcquistionBookmarks: r._getConnectionAcquistionBookmarks,
        connectionProvider: r.connectionProvider()
      }) || this;
      return n._connectionHolder = r, n;
    }
    return t.prototype.initializeConnection = function() {
      return this._connectionHolder.referenceCount() !== 0;
    }, t.prototype.getConnection = function() {
      return this._connectionHolder.getConnection();
    }, t.prototype.releaseConnection = function() {
      return this._connectionHolder.getConnection().catch(function() {
        return Promise.resolve(null);
      });
    }, t.prototype.close = function() {
      return this._connectionHolder.getConnection().catch(function() {
        return Promise.resolve(null);
      });
    }, t;
  }(kf)
);
_r.ReadOnlyConnectionHolder = Wp;
_r.default = Wp;
var W1 = (
  /** @class */
  function(e) {
    xp(t, e);
    function t() {
      return e !== null && e.apply(this, arguments) || this;
    }
    return t.prototype.mode = function() {
    }, t.prototype.database = function() {
    }, t.prototype.initializeConnection = function() {
      return !0;
    }, t.prototype.getConnection = function() {
      return Oi(this, void 0, void 0, function() {
        return wi(this, function(r) {
          switch (r.label) {
            case 0:
              return [4, Promise.reject((0, F1.newError)("This connection holder does not serve connections"))];
            case 1:
              return [2, r.sent()];
          }
        });
      });
    }, t.prototype.releaseConnection = function() {
      return Oi(this, void 0, void 0, function() {
        return wi(this, function(r) {
          switch (r.label) {
            case 0:
              return [4, Promise.resolve(null)];
            case 1:
              return [2, r.sent()];
          }
        });
      });
    }, t.prototype.close = function() {
      return Oi(this, void 0, void 0, function() {
        return wi(this, function(r) {
          switch (r.label) {
            case 0:
              return [4, Promise.resolve(null)];
            case 1:
              return [2, r.sent()];
          }
        });
      });
    }, t;
  }(kf)
), V1 = new W1();
_r.EMPTY_CONNECTION_HOLDER = V1;
function Xd(e) {
  return null;
}
var Tn = {}, q1 = d && d.__createBinding || (Object.create ? function(e, t, r, n) {
  n === void 0 && (n = r);
  var i = Object.getOwnPropertyDescriptor(t, r);
  (!i || ("get" in i ? !t.__esModule : i.writable || i.configurable)) && (i = { enumerable: !0, get: function() {
    return t[r];
  } }), Object.defineProperty(e, n, i);
} : function(e, t, r, n) {
  n === void 0 && (n = r), e[n] = t[r];
}), H1 = d && d.__setModuleDefault || (Object.create ? function(e, t) {
  Object.defineProperty(e, "default", { enumerable: !0, value: t });
} : function(e, t) {
  e.default = t;
}), z1 = d && d.__importStar || function(e) {
  if (e && e.__esModule)
    return e;
  var t = {};
  if (e != null)
    for (var r in e)
      r !== "default" && Object.prototype.hasOwnProperty.call(e, r) && q1(t, e, r);
  return H1(t, e), t;
};
Object.defineProperty(Tn, "__esModule", { value: !0 });
Tn.TxConfig = void 0;
var Ri = z1(ue), Y1 = we, K1 = We, Vp = (
  /** @class */
  function() {
    function e(t) {
      J1(t), this.timeout = Z1(t), this.metadata = Q1(t);
    }
    return e.empty = function() {
      return G1;
    }, e.prototype.isEmpty = function() {
      return Object.values(this).every(function(t) {
        return t == null;
      });
    }, e;
  }()
);
Tn.TxConfig = Vp;
var G1 = new Vp({});
function Z1(e) {
  if (Ri.isObject(e) && e.timeout != null) {
    Ri.assertNumberOrInteger(e.timeout, "Transaction timeout");
    var t = (0, K1.int)(e.timeout);
    if (t.isNegative())
      throw (0, Y1.newError)("Transaction timeout should not be negative");
    return t;
  }
  return null;
}
function Q1(e) {
  if (Ri.isObject(e) && e.metadata != null) {
    var t = e.metadata;
    if (Ri.assertObject(t, "config.metadata"), Object.keys(t).length !== 0)
      return t;
  }
  return null;
}
function J1(e) {
  e != null && Ri.assertObject(e, "Transaction config");
}
var Bi = {}, X1 = d && d.__awaiter || function(e, t, r, n) {
  function i(o) {
    return o instanceof r ? o : new r(function(a) {
      a(o);
    });
  }
  return new (r || (r = Promise))(function(o, a) {
    function s(l) {
      try {
        u(n.next(l));
      } catch (v) {
        a(v);
      }
    }
    function c(l) {
      try {
        u(n.throw(l));
      } catch (v) {
        a(v);
      }
    }
    function u(l) {
      l.done ? o(l.value) : i(l.value).then(s, c);
    }
    u((n = n.apply(e, t || [])).next());
  });
}, ew = d && d.__generator || function(e, t) {
  var r = { label: 0, sent: function() {
    if (o[0] & 1)
      throw o[1];
    return o[1];
  }, trys: [], ops: [] }, n, i, o, a;
  return a = { next: s(0), throw: s(1), return: s(2) }, typeof Symbol == "function" && (a[Symbol.iterator] = function() {
    return this;
  }), a;
  function s(u) {
    return function(l) {
      return c([u, l]);
    };
  }
  function c(u) {
    if (n)
      throw new TypeError("Generator is already executing.");
    for (; a && (a = 0, u[0] && (r = 0)), r; )
      try {
        if (n = 1, i && (o = u[0] & 2 ? i.return : u[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, u[1])).done)
          return o;
        switch (i = 0, o && (u = [u[0] & 2, o.value]), u[0]) {
          case 0:
          case 1:
            o = u;
            break;
          case 4:
            return r.label++, { value: u[1], done: !1 };
          case 5:
            r.label++, i = u[1], u = [0];
            continue;
          case 7:
            u = r.ops.pop(), r.trys.pop();
            continue;
          default:
            if (o = r.trys, !(o = o.length > 0 && o[o.length - 1]) && (u[0] === 6 || u[0] === 2)) {
              r = 0;
              continue;
            }
            if (u[0] === 3 && (!o || u[1] > o[0] && u[1] < o[3])) {
              r.label = u[1];
              break;
            }
            if (u[0] === 6 && r.label < o[1]) {
              r.label = o[1], o = u;
              break;
            }
            if (o && r.label < o[2]) {
              r.label = o[2], r.ops.push(u);
              break;
            }
            o[2] && r.ops.pop(), r.trys.pop();
            continue;
        }
        u = t.call(e, r);
      } catch (l) {
        u = [6, l], i = 0;
      } finally {
        n = o = 0;
      }
    if (u[0] & 5)
      throw u[1];
    return { value: u[0] ? u[1] : void 0, done: !0 };
  }
};
Object.defineProperty(Bi, "__esModule", { value: !0 });
Bi.TransactionExecutor = void 0;
var ai = we, rw = 30 * 1e3, tw = 1e3, nw = 2, iw = 0.2, ow = (
  /** @class */
  function() {
    function e(t, r, n, i) {
      this._maxRetryTimeMs = Xa(t, rw), this._initialRetryDelayMs = Xa(r, tw), this._multiplier = Xa(n, nw), this._jitterFactor = Xa(i, iw), this._inFlightTimeoutIds = [], this._verifyAfterConstruction();
    }
    return e.prototype.execute = function(t, r, n) {
      var i = this;
      return new Promise(function(o, a) {
        i._executeTransactionInsidePromise(t, r, o, a, n).catch(a);
      }).catch(function(o) {
        var a = Date.now(), s = i._initialRetryDelayMs;
        return i._retryTransactionPromise(t, r, o, a, s, n);
      });
    }, e.prototype.close = function() {
      this._inFlightTimeoutIds.forEach(function(t) {
        return clearTimeout(t);
      }), this._inFlightTimeoutIds = [];
    }, e.prototype._retryTransactionPromise = function(t, r, n, i, o, a) {
      var s = this, c = Date.now() - i;
      return c > this._maxRetryTimeMs || !(0, ai.isRetriableError)(n) ? Promise.reject(n) : new Promise(function(u, l) {
        var v = s._computeDelayWithJitter(o), y = setTimeout(function() {
          s._inFlightTimeoutIds = s._inFlightTimeoutIds.filter(function(g) {
            return g !== y;
          }), s._executeTransactionInsidePromise(t, r, u, l, a).catch(l);
        }, v);
        s._inFlightTimeoutIds.push(y);
      }).catch(function(u) {
        var l = o * s._multiplier;
        return s._retryTransactionPromise(t, r, u, i, l, a);
      });
    }, e.prototype._executeTransactionInsidePromise = function(t, r, n, i, o) {
      return X1(this, void 0, void 0, function() {
        var a, s, c, u, l, v = this;
        return ew(this, function(y) {
          switch (y.label) {
            case 0:
              return y.trys.push([0, 2, , 3]), [4, t()];
            case 1:
              return a = y.sent(), [3, 3];
            case 2:
              return s = y.sent(), i(s), [
                2
                /*return*/
              ];
            case 3:
              return c = o ?? function(g) {
                return g;
              }, u = c(a), l = this._safeExecuteTransactionWork(u, r), l.then(function(g) {
                return v._handleTransactionWorkSuccess(g, a, n, i);
              }).catch(function(g) {
                return v._handleTransactionWorkFailure(g, a, i);
              }), [
                2
                /*return*/
              ];
          }
        });
      });
    }, e.prototype._safeExecuteTransactionWork = function(t, r) {
      try {
        var n = r(t);
        return Promise.resolve(n);
      } catch (i) {
        return Promise.reject(i);
      }
    }, e.prototype._handleTransactionWorkSuccess = function(t, r, n, i) {
      r.isOpen() ? r.commit().then(function() {
        n(t);
      }).catch(function(o) {
        i(o);
      }) : n(t);
    }, e.prototype._handleTransactionWorkFailure = function(t, r, n) {
      r.isOpen() ? r.rollback().catch(function(i) {
      }).then(function() {
        return n(t);
      }).catch(n) : n(t);
    }, e.prototype._computeDelayWithJitter = function(t) {
      var r = t * this._jitterFactor, n = t - r, i = t + r;
      return Math.random() * (i - n) + n;
    }, e.prototype._verifyAfterConstruction = function() {
      if (this._maxRetryTimeMs < 0)
        throw (0, ai.newError)("Max retry time should be >= 0: " + this._maxRetryTimeMs.toString());
      if (this._initialRetryDelayMs < 0)
        throw (0, ai.newError)("Initial retry delay should >= 0: " + this._initialRetryDelayMs.toString());
      if (this._multiplier < 1)
        throw (0, ai.newError)("Multiplier should be >= 1.0: " + this._multiplier.toString());
      if (this._jitterFactor < 0 || this._jitterFactor > 1)
        throw (0, ai.newError)("Jitter factor should be in [0.0, 1.0]: " + this._jitterFactor.toFixed());
    }, e;
  }()
);
Bi.TransactionExecutor = ow;
function Xa(e, t) {
  return e ?? t;
}
var xi = {}, aw = d && d.__extends || function() {
  var e = function(t, r) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var o in i)
        Object.prototype.hasOwnProperty.call(i, o) && (n[o] = i[o]);
    }, e(t, r);
  };
  return function(t, r) {
    if (typeof r != "function" && r !== null)
      throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
    e(t, r);
    function n() {
      this.constructor = t;
    }
    t.prototype = r === null ? Object.create(r) : (n.prototype = r.prototype, new n());
  };
}(), nn;
Object.defineProperty(xi, "__esModule", { value: !0 });
xi.Logger = void 0;
var qp = we, ef = "error", rf = "warn", Ci = "info", tf = "debug", uw = Ci, Au = (nn = {}, nn[ef] = 0, nn[rf] = 1, nn[Ci] = 2, nn[tf] = 3, nn), Hp = (
  /** @class */
  function() {
    function e(t, r) {
      this._level = t, this._loggerFunction = r;
    }
    return e.create = function(t) {
      if ((t == null ? void 0 : t.logging) != null) {
        var r = t.logging, n = lw(r), i = fw(r);
        return new e(n, i);
      }
      return this.noOp();
    }, e.noOp = function() {
      return cw;
    }, e.prototype.isErrorEnabled = function() {
      return eu(this._level, ef);
    }, e.prototype.error = function(t) {
      this.isErrorEnabled() && this._loggerFunction(ef, t);
    }, e.prototype.isWarnEnabled = function() {
      return eu(this._level, rf);
    }, e.prototype.warn = function(t) {
      this.isWarnEnabled() && this._loggerFunction(rf, t);
    }, e.prototype.isInfoEnabled = function() {
      return eu(this._level, Ci);
    }, e.prototype.info = function(t) {
      this.isInfoEnabled() && this._loggerFunction(Ci, t);
    }, e.prototype.isDebugEnabled = function() {
      return eu(this._level, tf);
    }, e.prototype.debug = function(t) {
      this.isDebugEnabled() && this._loggerFunction(tf, t);
    }, e;
  }()
);
xi.Logger = Hp;
var sw = (
  /** @class */
  function(e) {
    aw(t, e);
    function t() {
      return e.call(this, Ci, function(r, n) {
      }) || this;
    }
    return t.prototype.isErrorEnabled = function() {
      return !1;
    }, t.prototype.error = function(r) {
    }, t.prototype.isWarnEnabled = function() {
      return !1;
    }, t.prototype.warn = function(r) {
    }, t.prototype.isInfoEnabled = function() {
      return !1;
    }, t.prototype.info = function(r) {
    }, t.prototype.isDebugEnabled = function() {
      return !1;
    }, t.prototype.debug = function(r) {
    }, t;
  }(Hp)
), cw = new sw();
function eu(e, t) {
  return Au[e] >= Au[t];
}
function lw(e) {
  if ((e == null ? void 0 : e.level) != null) {
    var t = e.level, r = Au[t];
    if (r == null && r !== 0)
      throw (0, qp.newError)("Illegal logging level: ".concat(t, ". Supported levels are: ").concat(Object.keys(Au).toString()));
    return t;
  }
  return uw;
}
function fw(e) {
  var t, r;
  if ((e == null ? void 0 : e.logger) != null) {
    var n = e.logger;
    if (n != null && typeof n == "function")
      return n;
  }
  throw (0, qp.newError)("Illegal logger function: ".concat((r = (t = e == null ? void 0 : e.logger) === null || t === void 0 ? void 0 : t.toString()) !== null && r !== void 0 ? r : "undefined"));
}
var tr = {}, Ru = d && d.__assign || function() {
  return Ru = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var i in t)
        Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
    }
    return e;
  }, Ru.apply(this, arguments);
}, zp = d && d.__read || function(e, t) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r)
    return e;
  var n = r.call(e), i, o = [], a;
  try {
    for (; (t === void 0 || t-- > 0) && !(i = n.next()).done; )
      o.push(i.value);
  } catch (s) {
    a = { error: s };
  } finally {
    try {
      i && !i.done && (r = n.return) && r.call(n);
    } finally {
      if (a)
        throw a.error;
    }
  }
  return o;
};
Object.defineProperty(tr, "__esModule", { value: !0 });
tr.Url = tr.formatIPv6Address = tr.formatIPv4Address = tr.defaultPortForScheme = tr.parseDatabaseUrl = void 0;
var dw = ue, hw = 7687, vw = 7474, _w = 7473, Yp = (
  /** @class */
  function() {
    function e(t, r, n, i, o) {
      this.scheme = t, this.host = r, this.port = n, this.hostAndPort = i, this.query = o;
    }
    return e;
  }()
);
tr.Url = Yp;
function pw(e) {
  var t;
  (0, dw.assertString)(e, "URL");
  var r = yw(e), n = Iw(r.url), i = r.schemeMissing ? null : bw(n.scheme), o = gw(n.host), a = Sw(o), s = Ow(n.port, i), c = "".concat(a, ":").concat(s), u = ww(
    // @ts-expect-error
    (t = n.query) !== null && t !== void 0 ? t : mw(n.resourceName),
    e
  );
  return new Yp(i, o, s, c, u);
}
tr.parseDatabaseUrl = pw;
function mw(e) {
  if (typeof e != "string")
    return null;
  var t = zp(e.split("?"), 2), r = t[1];
  return r;
}
function yw(e) {
  return e = e.trim(), e.includes("://") ? { schemeMissing: !1, url: e } : { schemeMissing: !0, url: "none://".concat(e) };
}
function bw(e) {
  return e != null ? (e = e.trim(), e.charAt(e.length - 1) === ":" && (e = e.substring(0, e.length - 1)), e) : null;
}
function gw(e, t) {
  if (e == null)
    throw new Error("Unable to extract host from null or undefined URL");
  return e.trim();
}
function Ow(e, t) {
  var r = typeof e == "string" ? parseInt(e, 10) : e;
  return r != null && !isNaN(r) ? r : Gp(t);
}
function ww(e, t) {
  var r = e != null ? Ew(e) : null, n = {};
  return r != null && r.split("&").forEach(function(i) {
    var o = i.split("=");
    if (o.length !== 2)
      throw new Error("Invalid parameters: '".concat(o.toString(), "' in URL '").concat(t, "'."));
    var a = eh(o[0], "key", t), s = eh(o[1], "value", t);
    if (n[a] !== void 0)
      throw new Error("Duplicated query parameters with key '".concat(a, "' in URL '").concat(t, "'"));
    n[a] = s;
  }), n;
}
function Ew(e) {
  return e = (e ?? "").trim(), (e == null ? void 0 : e.charAt(0)) === "?" && (e = e.substring(1, e.length)), e;
}
function eh(e, t, r) {
  if (e = (e ?? "").trim(), e === "")
    throw new Error("Illegal empty ".concat(t, " in URL query '").concat(r, "'"));
  return e;
}
function Kp(e) {
  var t = e.charAt(0) === "[", r = e.charAt(e.length - 1) === "]";
  if (!t && !r)
    return "[".concat(e, "]");
  if (t && r)
    return e;
  throw new Error("Illegal IPv6 address ".concat(e));
}
function Sw(e) {
  if (e === "" || e == null)
    throw new Error("Illegal host ".concat(e));
  var t = e.includes(":");
  return t ? Kp(e) : e;
}
function Tw(e, t) {
  return "".concat(e, ":").concat(t);
}
tr.formatIPv4Address = Tw;
function Pw(e, t) {
  var r = Kp(e);
  return "".concat(r, ":").concat(t);
}
tr.formatIPv6Address = Pw;
function Gp(e) {
  return e === "http" ? vw : e === "https" ? _w : hw;
}
tr.defaultPortForScheme = Gp;
function Iw(e) {
  function t(s, c) {
    var u = s.indexOf(c);
    return u >= 0 ? [s.substring(0, u), s[u], s.substring(u + 1)] : [s, "", ""];
  }
  function r(s, c) {
    var u = s.lastIndexOf(c);
    return u >= 0 ? [s.substring(0, u), s[u], s.substring(u + 1)] : ["", "", s];
  }
  function n(s, c, u) {
    var l = t(s, c), v = t(l[2], u);
    return [v[0], v[2]];
  }
  function i(s) {
    var c = {}, u;
    u = r(s, "@"), u[1] === "@" && (c.userInfo = decodeURIComponent(u[0]), s = u[2]);
    var l = zp(n(s, "[", "]"), 2), v = l[0], y = l[1];
    return v !== "" ? (c.host = v, u = t(y, ":")) : (u = t(s, ":"), c.host = u[0]), u[1] === ":" && (c.port = u[2]), c;
  }
  var o = {}, a;
  return a = t(e, ":"), a[1] === ":" && (o.scheme = decodeURIComponent(a[0]), e = a[2]), a = t(e, "#"), a[1] === "#" && (o.fragment = decodeURIComponent(a[2]), e = a[0]), a = t(e, "?"), a[1] === "?" && (o.query = a[2], e = a[0]), e.startsWith("//") ? (a = t(e.substr(2), "/"), o = Ru(Ru({}, o), i(a[0])), o.path = a[1] + a[2]) : o.path = e, o;
}
var Wi = {}, Aw = d && d.__createBinding || (Object.create ? function(e, t, r, n) {
  n === void 0 && (n = r);
  var i = Object.getOwnPropertyDescriptor(t, r);
  (!i || ("get" in i ? !t.__esModule : i.writable || i.configurable)) && (i = { enumerable: !0, get: function() {
    return t[r];
  } }), Object.defineProperty(e, n, i);
} : function(e, t, r, n) {
  n === void 0 && (n = r), e[n] = t[r];
}), Rw = d && d.__setModuleDefault || (Object.create ? function(e, t) {
  Object.defineProperty(e, "default", { enumerable: !0, value: t });
} : function(e, t) {
  e.default = t;
}), Cw = d && d.__importStar || function(e) {
  if (e && e.__esModule)
    return e;
  var t = {};
  if (e != null)
    for (var r in e)
      r !== "default" && Object.prototype.hasOwnProperty.call(e, r) && Aw(t, e, r);
  return Rw(t, e), t;
};
Object.defineProperty(Wi, "__esModule", { value: !0 });
Wi.ServerAddress = void 0;
var vl = ue, jw = Cw(tr), Nw = (
  /** @class */
  function() {
    function e(t, r, n, i) {
      this._host = (0, vl.assertString)(t, "host"), this._resolved = r != null ? (0, vl.assertString)(r, "resolved") : null, this._port = (0, vl.assertNumber)(n, "port"), this._hostPort = i, this._stringValue = r != null ? "".concat(i, "(").concat(r, ")") : "".concat(i);
    }
    return e.prototype.host = function() {
      return this._host;
    }, e.prototype.resolvedHost = function() {
      return this._resolved != null ? this._resolved : this._host;
    }, e.prototype.port = function() {
      return this._port;
    }, e.prototype.resolveWith = function(t) {
      return new e(this._host, t, this._port, this._hostPort);
    }, e.prototype.asHostPort = function() {
      return this._hostPort;
    }, e.prototype.asKey = function() {
      return this._hostPort;
    }, e.prototype.toString = function() {
      return this._stringValue;
    }, e.fromUrl = function(t) {
      var r = jw.parseDatabaseUrl(t);
      return new e(r.host, null, r.port, r.hostAndPort);
    }, e;
  }()
);
Wi.ServerAddress = Nw;
var _n = {}, Df = {};
Object.defineProperty(Df, "__esModule", { value: !0 });
var $w = (
  /** @class */
  function() {
    function e() {
    }
    return e.prototype.resolve = function() {
      throw new Error("Abstract function");
    }, e.prototype._resolveToItself = function(t) {
      return Promise.resolve([t]);
    }, e;
  }()
);
Df.default = $w;
var Ku = {};
Object.defineProperty(Ku, "__esModule", { value: !0 });
var Mw = Wi;
function kw(e) {
  return Promise.resolve([e]);
}
var Dw = (
  /** @class */
  function() {
    function e(t) {
      this._resolverFunction = t ?? kw;
    }
    return e.prototype.resolve = function(t) {
      var r = this;
      return new Promise(function(n) {
        return n(r._resolverFunction(t.asHostPort()));
      }).then(function(n) {
        if (!Array.isArray(n))
          throw new TypeError("Configured resolver function should either return an array of addresses or a Promise resolved with an array of addresses." + // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
          "Each address is '<host>:<port>'. Got: ".concat(n));
        return n.map(function(i) {
          return Mw.ServerAddress.fromUrl(i);
        });
      });
    }, e;
  }()
);
Ku.default = Dw;
var Zp = d && d.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(_n, "__esModule", { value: !0 });
_n.ConfiguredCustomResolver = _n.BaseHostNameResolver = void 0;
var Uw = Zp(Df);
_n.BaseHostNameResolver = Uw.default;
var Lw = Zp(Ku);
_n.ConfiguredCustomResolver = Lw.default;
var Fw = d && d.__createBinding || (Object.create ? function(e, t, r, n) {
  n === void 0 && (n = r);
  var i = Object.getOwnPropertyDescriptor(t, r);
  (!i || ("get" in i ? !t.__esModule : i.writable || i.configurable)) && (i = { enumerable: !0, get: function() {
    return t[r];
  } }), Object.defineProperty(e, n, i);
} : function(e, t, r, n) {
  n === void 0 && (n = r), e[n] = t[r];
}), Bw = d && d.__setModuleDefault || (Object.create ? function(e, t) {
  Object.defineProperty(e, "default", { enumerable: !0, value: t });
} : function(e, t) {
  e.default = t;
}), nr = d && d.__importStar || function(e) {
  if (e && e.__esModule)
    return e;
  var t = {};
  if (e != null)
    for (var r in e)
      r !== "default" && Object.prototype.hasOwnProperty.call(e, r) && Fw(t, e, r);
  return Bw(t, e), t;
};
Object.defineProperty(me, "__esModule", { value: !0 });
me.objectUtil = me.resolver = me.serverAddress = me.urlUtil = me.logger = me.transactionExecutor = me.txConfig = me.connectionHolder = me.constants = me.bookmarks = me.observer = me.temporalUtil = me.util = void 0;
var xw = nr(ue);
me.util = xw;
var Ww = nr(Nf);
me.temporalUtil = Ww;
var Vw = nr(Jr);
me.observer = Vw;
var qw = nr(ut);
me.bookmarks = qw;
var Hw = nr(ae);
me.constants = Hw;
var zw = nr(_r);
me.connectionHolder = zw;
var Yw = nr(Tn);
me.txConfig = Yw;
var Kw = nr(Bi);
me.transactionExecutor = Kw;
var Gw = nr(xi);
me.logger = Gw;
var Zw = nr(tr);
me.urlUtil = Zw;
var Qw = nr(Wi);
me.serverAddress = Qw;
var Jw = nr(_n);
me.resolver = Jw;
var Xw = nr(Br);
me.objectUtil = Xw;
var wt = d && d.__awaiter || function(e, t, r, n) {
  function i(o) {
    return o instanceof r ? o : new r(function(a) {
      a(o);
    });
  }
  return new (r || (r = Promise))(function(o, a) {
    function s(l) {
      try {
        u(n.next(l));
      } catch (v) {
        a(v);
      }
    }
    function c(l) {
      try {
        u(n.throw(l));
      } catch (v) {
        a(v);
      }
    }
    function u(l) {
      l.done ? o(l.value) : i(l.value).then(s, c);
    }
    u((n = n.apply(e, t || [])).next());
  });
}, Et = d && d.__generator || function(e, t) {
  var r = { label: 0, sent: function() {
    if (o[0] & 1)
      throw o[1];
    return o[1];
  }, trys: [], ops: [] }, n, i, o, a;
  return a = { next: s(0), throw: s(1), return: s(2) }, typeof Symbol == "function" && (a[Symbol.iterator] = function() {
    return this;
  }), a;
  function s(u) {
    return function(l) {
      return c([u, l]);
    };
  }
  function c(u) {
    if (n)
      throw new TypeError("Generator is already executing.");
    for (; a && (a = 0, u[0] && (r = 0)), r; )
      try {
        if (n = 1, i && (o = u[0] & 2 ? i.return : u[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, u[1])).done)
          return o;
        switch (i = 0, o && (u = [u[0] & 2, o.value]), u[0]) {
          case 0:
          case 1:
            o = u;
            break;
          case 4:
            return r.label++, { value: u[1], done: !1 };
          case 5:
            r.label++, i = u[1], u = [0];
            continue;
          case 7:
            u = r.ops.pop(), r.trys.pop();
            continue;
          default:
            if (o = r.trys, !(o = o.length > 0 && o[o.length - 1]) && (u[0] === 6 || u[0] === 2)) {
              r = 0;
              continue;
            }
            if (u[0] === 3 && (!o || u[1] > o[0] && u[1] < o[3])) {
              r.label = u[1];
              break;
            }
            if (u[0] === 6 && r.label < o[1]) {
              r.label = o[1], o = u;
              break;
            }
            if (o && r.label < o[2]) {
              r.label = o[2], r.ops.push(u);
              break;
            }
            o[2] && r.ops.pop(), r.trys.pop();
            continue;
        }
        u = t.call(e, r);
      } catch (l) {
        u = [6, l], i = 0;
      } finally {
        n = o = 0;
      }
    if (u[0] & 5)
      throw u[1];
    return { value: u[0] ? u[1] : void 0, done: !0 };
  }
}, eE = d && d.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(Fi, "__esModule", { value: !0 });
var rE = eE(xe), Qp = me, ui = we, tE = Qp.connectionHolder.EMPTY_CONNECTION_HOLDER, nE = function(e) {
  console.log("Uncaught error when processing result: " + e);
}, iE = function(e) {
}, oE = function(e) {
}, aE = (
  /** @class */
  function() {
    function e(t, r, n, i, o) {
      o === void 0 && (o = { high: Number.MAX_VALUE, low: Number.MAX_VALUE }), this._stack = uE(), this._streamObserverPromise = t, this._p = null, this._query = r, this._parameters = n ?? {}, this._connectionHolder = i ?? tE, this._keys = null, this._summary = null, this._error = null, this._watermarks = o;
    }
    return e.prototype.keys = function() {
      var t = this;
      return this._keys !== null ? Promise.resolve(this._keys) : this._error !== null ? Promise.reject(this._error) : new Promise(function(r, n) {
        t._streamObserverPromise.then(function(i) {
          return i.subscribe(t._decorateObserver({
            onKeys: function(o) {
              return r(o);
            },
            onError: function(o) {
              return n(o);
            }
          }));
        }).catch(n);
      });
    }, e.prototype.summary = function() {
      var t = this;
      return this._summary !== null ? Promise.resolve(this._summary) : this._error !== null ? Promise.reject(this._error) : new Promise(function(r, n) {
        t._streamObserverPromise.then(function(i) {
          i.cancel(), i.subscribe(t._decorateObserver({
            onCompleted: function(o) {
              return r(o);
            },
            onError: function(o) {
              return n(o);
            }
          }));
        }).catch(n);
      });
    }, e.prototype._getOrCreatePromise = function() {
      var t = this;
      return this._p == null && (this._p = new Promise(function(r, n) {
        var i = [], o = {
          onNext: function(a) {
            i.push(a);
          },
          onCompleted: function(a) {
            r({ records: i, summary: a });
          },
          onError: function(a) {
            n(a);
          }
        };
        t.subscribe(o);
      })), this._p;
    }, e.prototype[Symbol.asyncIterator] = function() {
      var t = this;
      if (!this.isOpen()) {
        var r = (0, ui.newError)("Result is already consumed");
        return {
          next: function() {
            return Promise.reject(r);
          },
          peek: function() {
            return Promise.reject(r);
          }
        };
      }
      var n = { paused: !0, firstRun: !0, finished: !1 }, i = function() {
        var s, c;
        if (n.streaming != null) {
          var u = (c = (s = n.queuedObserver) === null || s === void 0 ? void 0 : s.size) !== null && c !== void 0 ? c : 0, l = u >= t._watermarks.high, v = u <= t._watermarks.low;
          l && !n.paused ? (n.paused = !0, n.streaming.pause()) : (v && n.paused || n.firstRun && !l) && (n.firstRun = !1, n.paused = !1, n.streaming.resume());
        }
      }, o = function() {
        return wt(t, void 0, void 0, function() {
          var s;
          return Et(this, function(c) {
            switch (c.label) {
              case 0:
                return n.queuedObserver !== void 0 ? [3, 2] : (n.queuedObserver = this._createQueuedResultObserver(i), s = n, [4, this._subscribe(n.queuedObserver, !0).catch(function() {
                })]);
              case 1:
                s.streaming = c.sent(), i(), c.label = 2;
              case 2:
                return [2, n.queuedObserver];
            }
          });
        });
      }, a = function(s) {
        if (s === void 0)
          throw (0, ui.newError)("InvalidState: Result stream finished without Summary", ui.PROTOCOL_ERROR);
        return !0;
      };
      return {
        next: function() {
          return wt(t, void 0, void 0, function() {
            var s, c;
            return Et(this, function(u) {
              switch (u.label) {
                case 0:
                  return n.finished && a(n.summary) ? [2, { done: !0, value: n.summary }] : [4, o()];
                case 1:
                  return s = u.sent(), [4, s.dequeue()];
                case 2:
                  return c = u.sent(), c.done === !0 && (n.finished = c.done, n.summary = c.value), [2, c];
              }
            });
          });
        },
        return: function(s) {
          return wt(t, void 0, void 0, function() {
            var c, u, l;
            return Et(this, function(v) {
              switch (v.label) {
                case 0:
                  return n.finished && a(n.summary) ? [2, { done: !0, value: s ?? n.summary }] : ((l = n.streaming) === null || l === void 0 || l.cancel(), [4, o()]);
                case 1:
                  return c = v.sent(), [4, c.dequeueUntilDone()];
                case 2:
                  return u = v.sent(), n.finished = !0, u.value = s ?? u.value, n.summary = u.value, [2, u];
              }
            });
          });
        },
        peek: function() {
          return wt(t, void 0, void 0, function() {
            var s;
            return Et(this, function(c) {
              switch (c.label) {
                case 0:
                  return n.finished && a(n.summary) ? [2, { done: !0, value: n.summary }] : [4, o()];
                case 1:
                  return s = c.sent(), [4, s.head()];
                case 2:
                  return [2, c.sent()];
              }
            });
          });
        }
      };
    }, e.prototype.then = function(t, r) {
      return this._getOrCreatePromise().then(t, r);
    }, e.prototype.catch = function(t) {
      return this._getOrCreatePromise().catch(t);
    }, e.prototype.finally = function(t) {
      return this._getOrCreatePromise().finally(t);
    }, e.prototype.subscribe = function(t) {
      this._subscribe(t).catch(function() {
      });
    }, e.prototype.isOpen = function() {
      return this._summary === null && this._error === null;
    }, e.prototype._subscribe = function(t, r) {
      r === void 0 && (r = !1);
      var n = this._decorateObserver(t);
      return this._streamObserverPromise.then(function(i) {
        return r && i.pause(), i.subscribe(n), i;
      }).catch(function(i) {
        return n.onError != null && n.onError(i), Promise.reject(i);
      });
    }, e.prototype._decorateObserver = function(t) {
      var r = this, n, i, o, a = (n = t.onCompleted) !== null && n !== void 0 ? n : iE, s = (i = t.onError) !== null && i !== void 0 ? i : nE, c = (o = t.onKeys) !== null && o !== void 0 ? o : oE, u = function(y) {
        r._releaseConnectionAndGetSummary(y).then(function(g) {
          return r._summary !== null ? a.call(t, r._summary) : (r._summary = g, a.call(t, g));
        }).catch(s);
      }, l = function(y) {
        r._connectionHolder.releaseConnection().then(function() {
          sE(y, r._stack), r._error = y, s.call(t, y);
        }).catch(s);
      }, v = function(y) {
        return r._keys = y, c.call(t, y);
      };
      return {
        onNext: t.onNext != null ? t.onNext.bind(t) : void 0,
        onKeys: v,
        onCompleted: u,
        onError: l
      };
    }, e.prototype._cancel = function() {
      this._summary === null && this._error === null && this._streamObserverPromise.then(function(t) {
        return t.cancel();
      }).catch(function() {
      });
    }, e.prototype._releaseConnectionAndGetSummary = function(t) {
      var r = Qp.util.validateQueryAndParameters(this._query, this._parameters, {
        skipAsserts: !0
      }), n = r.validatedQuery, i = r.params, o = this._connectionHolder;
      return o.getConnection().then(
        // onFulfilled:
        function(a) {
          return o.releaseConnection().then(function() {
            var s;
            return (s = a == null ? void 0 : a.protocol()) === null || s === void 0 ? void 0 : s.version;
          });
        },
        // onRejected:
        function(a) {
        }
      ).then(function(a) {
        return new rE.default(n, i, t, a);
      });
    }, e.prototype._createQueuedResultObserver = function(t) {
      var r = this;
      function n() {
        var u = {};
        return u.promise = new Promise(function(l, v) {
          u.resolve = l, u.reject = v;
        }), u;
      }
      function i(u) {
        return u instanceof Error;
      }
      function o() {
        var u;
        return wt(this, void 0, void 0, function() {
          var l;
          return Et(this, function(v) {
            switch (v.label) {
              case 0:
                if (a.length > 0) {
                  if (l = (u = a.shift()) !== null && u !== void 0 ? u : (0, ui.newError)("Unexpected empty buffer", ui.PROTOCOL_ERROR), t(), i(l))
                    throw l;
                  return [2, l];
                }
                return s.resolvable = n(), [4, s.resolvable.promise];
              case 1:
                return [2, v.sent()];
            }
          });
        });
      }
      var a = [], s = { resolvable: null }, c = {
        onNext: function(u) {
          c._push({ done: !1, value: u });
        },
        onCompleted: function(u) {
          c._push({ done: !0, value: u });
        },
        onError: function(u) {
          c._push(u);
        },
        _push: function(u) {
          if (s.resolvable !== null) {
            var l = s.resolvable;
            s.resolvable = null, i(u) ? l.reject(u) : l.resolve(u);
          } else
            a.push(u), t();
        },
        dequeue: o,
        dequeueUntilDone: function() {
          return wt(r, void 0, void 0, function() {
            var u;
            return Et(this, function(l) {
              switch (l.label) {
                case 0:
                  return [4, o()];
                case 1:
                  return u = l.sent(), u.done === !0 ? [2, u] : [3, 0];
                case 2:
                  return [
                    2
                    /*return*/
                  ];
              }
            });
          });
        },
        head: function() {
          return wt(r, void 0, void 0, function() {
            var u, u, l;
            return Et(this, function(v) {
              switch (v.label) {
                case 0:
                  if (a.length > 0) {
                    if (u = a[0], i(u))
                      throw u;
                    return [2, u];
                  }
                  s.resolvable = n(), v.label = 1;
                case 1:
                  return v.trys.push([1, 3, 4, 5]), [4, s.resolvable.promise];
                case 2:
                  return u = v.sent(), a.unshift(u), [2, u];
                case 3:
                  throw l = v.sent(), a.unshift(l), l;
                case 4:
                  return t(), [
                    7
                    /*endfinally*/
                  ];
                case 5:
                  return [
                    2
                    /*return*/
                  ];
              }
            });
          });
        },
        get size() {
          return a.length;
        }
      };
      return c;
    }, e;
  }()
);
function uE() {
  var e = new Error("");
  return e.stack != null ? e.stack.replace(/^Error(\n\r)*/, "") : null;
}
function sE(e, t) {
  t != null && (e.stack = e.toString() + `
` + t);
}
Fi.default = aE;
var Gu = {};
Object.defineProperty(Gu, "__esModule", { value: !0 });
var cE = (
  /** @class */
  function() {
    function e(t, r, n) {
      this.keys = t, this.records = r, this.summary = n;
    }
    return e;
  }()
);
Gu.default = cE;
var Uf = {};
Object.defineProperty(Uf, "__esModule", { value: !0 });
var lE = (
  /** @class */
  function() {
    function e() {
    }
    return e.prototype.acquireConnection = function(t) {
      throw Error("Not implemented");
    }, e.prototype.supportsMultiDb = function() {
      throw Error("Not implemented");
    }, e.prototype.supportsTransactionConfig = function() {
      throw Error("Not implemented");
    }, e.prototype.supportsUserImpersonation = function() {
      throw Error("Not implemented");
    }, e.prototype.verifyConnectivityAndGetServerInfo = function(t) {
      throw Error("Not implemented");
    }, e.prototype.getNegotiatedProtocolVersion = function() {
      throw Error("Not Implemented");
    }, e.prototype.close = function() {
      throw Error("Not implemented");
    }, e;
  }()
);
Uf.default = lE;
var Lf = {};
Object.defineProperty(Lf, "__esModule", { value: !0 });
var fE = (
  /** @class */
  function() {
    function e() {
    }
    return Object.defineProperty(e.prototype, "id", {
      get: function() {
        return "";
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "databaseId", {
      get: function() {
        return "";
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "server", {
      get: function() {
        return {};
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "address", {
      /**
       * @property {ServerAddress} the server address this connection is opened against
       */
      get: function() {
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "version", {
      /**
       * @property {ServerVersion} the version of the server this connection is connected to
       */
      get: function() {
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.isOpen = function() {
      return !1;
    }, e.prototype.protocol = function() {
      throw Error("Not implemented");
    }, e.prototype.connect = function(t, r) {
      throw Error("Not implemented");
    }, e.prototype.write = function(t, r, n) {
      throw Error("Not implemented");
    }, e.prototype.resetAndFlush = function() {
      throw Error("Not implemented");
    }, e.prototype.hasOngoingObservableRequests = function() {
      throw Error("Not implemented");
    }, e.prototype.close = function() {
      throw Error("Not implemented");
    }, e.prototype._release = function() {
      return Promise.resolve();
    }, e;
  }()
);
Lf.default = fE;
var Zu = {}, rh = d && d.__awaiter || function(e, t, r, n) {
  function i(o) {
    return o instanceof r ? o : new r(function(a) {
      a(o);
    });
  }
  return new (r || (r = Promise))(function(o, a) {
    function s(l) {
      try {
        u(n.next(l));
      } catch (v) {
        a(v);
      }
    }
    function c(l) {
      try {
        u(n.throw(l));
      } catch (v) {
        a(v);
      }
    }
    function u(l) {
      l.done ? o(l.value) : i(l.value).then(s, c);
    }
    u((n = n.apply(e, t || [])).next());
  });
}, th = d && d.__generator || function(e, t) {
  var r = { label: 0, sent: function() {
    if (o[0] & 1)
      throw o[1];
    return o[1];
  }, trys: [], ops: [] }, n, i, o, a;
  return a = { next: s(0), throw: s(1), return: s(2) }, typeof Symbol == "function" && (a[Symbol.iterator] = function() {
    return this;
  }), a;
  function s(u) {
    return function(l) {
      return c([u, l]);
    };
  }
  function c(u) {
    if (n)
      throw new TypeError("Generator is already executing.");
    for (; a && (a = 0, u[0] && (r = 0)), r; )
      try {
        if (n = 1, i && (o = u[0] & 2 ? i.return : u[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, u[1])).done)
          return o;
        switch (i = 0, o && (u = [u[0] & 2, o.value]), u[0]) {
          case 0:
          case 1:
            o = u;
            break;
          case 4:
            return r.label++, { value: u[1], done: !1 };
          case 5:
            r.label++, i = u[1], u = [0];
            continue;
          case 7:
            u = r.ops.pop(), r.trys.pop();
            continue;
          default:
            if (o = r.trys, !(o = o.length > 0 && o[o.length - 1]) && (u[0] === 6 || u[0] === 2)) {
              r = 0;
              continue;
            }
            if (u[0] === 3 && (!o || u[1] > o[0] && u[1] < o[3])) {
              r.label = u[1];
              break;
            }
            if (u[0] === 6 && r.label < o[1]) {
              r.label = o[1], o = u;
              break;
            }
            if (o && r.label < o[2]) {
              r.label = o[2], r.ops.push(u);
              break;
            }
            o[2] && r.ops.pop(), r.trys.pop();
            continue;
        }
        u = t.call(e, r);
      } catch (l) {
        u = [6, l], i = 0;
      } finally {
        n = o = 0;
      }
    if (u[0] & 5)
      throw u[1];
    return { value: u[0] ? u[1] : void 0, done: !0 };
  }
}, dE = d && d.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(Zu, "__esModule", { value: !0 });
var hE = ue, Ei = _r, wu = ut, vE = Tn, fr = Jr, hr = we, Jp = dE(Fi), _E = (
  /** @class */
  function() {
    function e(t) {
      var r = t.connectionHolder, n = t.onClose, i = t.onBookmarks, o = t.onConnection, a = t.reactive, s = t.fetchSize, c = t.impersonatedUser, u = t.highRecordWatermark, l = t.lowRecordWatermark, v = this;
      this._connectionHolder = r, this._reactive = a, this._state = vr.ACTIVE, this._onClose = n, this._onBookmarks = i, this._onConnection = o, this._onError = this._onErrorCallback.bind(this), this._fetchSize = s, this._onComplete = this._onCompleteCallback.bind(this), this._results = [], this._impersonatedUser = c, this._lowRecordWatermak = l, this._highRecordWatermark = u, this._bookmarks = wu.Bookmarks.empty(), this._acceptActive = function() {
      }, this._activePromise = new Promise(function(y, g) {
        v._acceptActive = y;
      });
    }
    return e.prototype._begin = function(t, r, n) {
      var i = this;
      this._connectionHolder.getConnection().then(function(o) {
        return rh(i, void 0, void 0, function() {
          var a, s = this;
          return th(this, function(c) {
            switch (c.label) {
              case 0:
                return this._onConnection(), o == null ? [3, 2] : (a = this, [4, t()]);
              case 1:
                return a._bookmarks = c.sent(), [2, o.protocol().beginTransaction({
                  bookmarks: this._bookmarks,
                  txConfig: r,
                  mode: this._connectionHolder.mode(),
                  database: this._connectionHolder.database(),
                  impersonatedUser: this._impersonatedUser,
                  beforeError: function(u) {
                    return n != null && n.onError(u), s._onError(u);
                  },
                  afterComplete: function(u) {
                    return n != null && n.onComplete(u), s._onComplete(u);
                  }
                })];
              case 2:
                throw (0, hr.newError)("No connection available");
            }
          });
        });
      }).catch(function(o) {
        n != null && n.onError(o), i._onError(o).catch(function() {
        });
      }).finally(function() {
        return i._acceptActive();
      });
    }, e.prototype.run = function(t, r) {
      var n = (0, hE.validateQueryAndParameters)(t, r), i = n.validatedQuery, o = n.params, a = this._state.run(i, o, {
        connectionHolder: this._connectionHolder,
        onError: this._onError,
        onComplete: this._onComplete,
        onConnection: this._onConnection,
        reactive: this._reactive,
        fetchSize: this._fetchSize,
        highRecordWatermark: this._highRecordWatermark,
        lowRecordWatermark: this._lowRecordWatermak,
        preparationJob: this._activePromise
      });
      return this._results.push(a), a;
    }, e.prototype.commit = function() {
      var t = this, r = this._state.commit({
        connectionHolder: this._connectionHolder,
        onError: this._onError,
        onComplete: function(n) {
          return t._onCompleteCallback(n, t._bookmarks);
        },
        onConnection: this._onConnection,
        pendingResults: this._results,
        preparationJob: this._activePromise
      });
      return this._state = r.state, this._onClose(), new Promise(function(n, i) {
        r.result.subscribe({
          onCompleted: function() {
            return n();
          },
          onError: function(o) {
            return i(o);
          }
        });
      });
    }, e.prototype.rollback = function() {
      var t = this._state.rollback({
        connectionHolder: this._connectionHolder,
        onError: this._onError,
        onComplete: this._onComplete,
        onConnection: this._onConnection,
        pendingResults: this._results,
        preparationJob: this._activePromise
      });
      return this._state = t.state, this._onClose(), new Promise(function(r, n) {
        t.result.subscribe({
          onCompleted: function() {
            return r();
          },
          onError: function(i) {
            return n(i);
          }
        });
      });
    }, e.prototype.isOpen = function() {
      return this._state === vr.ACTIVE;
    }, e.prototype.close = function() {
      return rh(this, void 0, void 0, function() {
        return th(this, function(t) {
          switch (t.label) {
            case 0:
              return this.isOpen() ? [4, this.rollback()] : [3, 2];
            case 1:
              t.sent(), t.label = 2;
            case 2:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, e.prototype._onErrorCallback = function() {
      return this._state = vr.FAILED, this._onClose(), this._connectionHolder.releaseConnection();
    }, e.prototype._onCompleteCallback = function(t, r) {
      this._onBookmarks(new wu.Bookmarks(t == null ? void 0 : t.bookmark), r ?? wu.Bookmarks.empty(), t == null ? void 0 : t.db);
    }, e;
  }()
), vr = {
  // The transaction is running with no explicit success or failure marked
  ACTIVE: {
    commit: function(e) {
      var t = e.connectionHolder, r = e.onError, n = e.onComplete, i = e.onConnection, o = e.pendingResults, a = e.preparationJob;
      return {
        result: nh(!0, t, r, n, i, o, a),
        state: vr.SUCCEEDED
      };
    },
    rollback: function(e) {
      var t = e.connectionHolder, r = e.onError, n = e.onComplete, i = e.onConnection, o = e.pendingResults, a = e.preparationJob;
      return {
        result: nh(!1, t, r, n, i, o, a),
        state: vr.ROLLED_BACK
      };
    },
    run: function(e, t, r) {
      var n = r.connectionHolder, i = r.onError, o = r.onComplete, a = r.onConnection, s = r.reactive, c = r.fetchSize, u = r.highRecordWatermark, l = r.lowRecordWatermark, v = r.preparationJob, y = v ?? Promise.resolve(), g = n.getConnection().then(function(E) {
        return y.then(function() {
          return E;
        });
      }).then(function(E) {
        if (a(), E != null)
          return E.protocol().run(e, t, {
            bookmarks: wu.Bookmarks.empty(),
            txConfig: vE.TxConfig.empty(),
            beforeError: i,
            afterComplete: o,
            reactive: s,
            fetchSize: c,
            highRecordWatermark: u,
            lowRecordWatermark: l
          });
        throw (0, hr.newError)("No connection available");
      }).catch(function(E) {
        return new fr.FailedObserver({ error: E, onError: i });
      });
      return wr(g, e, t, n, u, l);
    }
  },
  // An error has occurred, transaction can no longer be used and no more messages will
  // be sent for this transaction.
  FAILED: {
    commit: function(e) {
      var t = e.connectionHolder, r = e.onError;
      return e.onComplete, {
        result: wr(
          new fr.FailedObserver({
            error: (0, hr.newError)("Cannot commit this transaction, because it has been rolled back either because of an error or explicit termination."),
            onError: r
          }),
          "COMMIT",
          {},
          t,
          0,
          // high watermark
          0
          // low watermark
        ),
        state: vr.FAILED
      };
    },
    rollback: function(e) {
      var t = e.connectionHolder;
      return e.onError, e.onComplete, {
        result: wr(
          new fr.CompletedObserver(),
          "ROLLBACK",
          {},
          t,
          0,
          // high watermark
          0
          // low watermark
        ),
        state: vr.FAILED
      };
    },
    run: function(e, t, r) {
      var n = r.connectionHolder, i = r.onError;
      return r.onComplete, wr(
        new fr.FailedObserver({
          error: (0, hr.newError)("Cannot run query in this transaction, because it has been rolled back either because of an error or explicit termination."),
          onError: i
        }),
        e,
        t,
        n,
        0,
        // high watermark
        0
        // low watermark
      );
    }
  },
  // This transaction has successfully committed
  SUCCEEDED: {
    commit: function(e) {
      var t = e.connectionHolder, r = e.onError;
      return e.onComplete, {
        result: wr(
          new fr.FailedObserver({
            error: (0, hr.newError)("Cannot commit this transaction, because it has already been committed."),
            onError: r
          }),
          "COMMIT",
          {},
          Ei.EMPTY_CONNECTION_HOLDER,
          0,
          // high watermark
          0
          // low watermark
        ),
        state: vr.SUCCEEDED,
        connectionHolder: t
      };
    },
    rollback: function(e) {
      var t = e.connectionHolder, r = e.onError;
      return e.onComplete, {
        result: wr(
          new fr.FailedObserver({
            error: (0, hr.newError)("Cannot rollback this transaction, because it has already been committed."),
            onError: r
          }),
          "ROLLBACK",
          {},
          Ei.EMPTY_CONNECTION_HOLDER,
          0,
          // high watermark
          0
          // low watermark
        ),
        state: vr.SUCCEEDED,
        connectionHolder: t
      };
    },
    run: function(e, t, r) {
      var n = r.connectionHolder, i = r.onError;
      return r.onComplete, wr(
        new fr.FailedObserver({
          error: (0, hr.newError)("Cannot run query in this transaction, because it has already been committed."),
          onError: i
        }),
        e,
        t,
        n,
        0,
        // high watermark
        0
        // low watermark
      );
    }
  },
  // This transaction has been rolled back
  ROLLED_BACK: {
    commit: function(e) {
      var t = e.connectionHolder, r = e.onError;
      return e.onComplete, {
        result: wr(
          new fr.FailedObserver({
            error: (0, hr.newError)("Cannot commit this transaction, because it has already been rolled back."),
            onError: r
          }),
          "COMMIT",
          {},
          t,
          0,
          // high watermark
          0
          // low watermark
        ),
        state: vr.ROLLED_BACK
      };
    },
    rollback: function(e) {
      var t = e.connectionHolder;
      return e.onError, e.onComplete, {
        result: wr(
          new fr.FailedObserver({
            error: (0, hr.newError)("Cannot rollback this transaction, because it has already been rolled back.")
          }),
          "ROLLBACK",
          {},
          t,
          0,
          // high watermark
          0
          // low watermark
        ),
        state: vr.ROLLED_BACK
      };
    },
    run: function(e, t, r) {
      var n = r.connectionHolder, i = r.onError;
      return r.onComplete, wr(
        new fr.FailedObserver({
          error: (0, hr.newError)("Cannot run query in this transaction, because it has already been rolled back."),
          onError: i
        }),
        e,
        t,
        n,
        0,
        // high watermark
        0
        // low watermark
      );
    }
  }
};
function nh(e, t, r, n, i, o, a) {
  var s = a ?? Promise.resolve(), c = t.getConnection().then(function(u) {
    return s.then(function() {
      return u;
    });
  }).then(function(u) {
    return i(), o.forEach(function(l) {
      return l._cancel();
    }), Promise.all(o.map(function(l) {
      return l.summary();
    })).then(function(l) {
      if (u != null)
        return e ? u.protocol().commitTransaction({
          beforeError: r,
          afterComplete: n
        }) : u.protocol().rollbackTransaction({
          beforeError: r,
          afterComplete: n
        });
      throw (0, hr.newError)("No connection available");
    });
  }).catch(function(u) {
    return new fr.FailedObserver({ error: u, onError: r });
  });
  return new Jp.default(c, e ? "COMMIT" : "ROLLBACK", {}, t, {
    high: Number.MAX_VALUE,
    low: Number.MAX_VALUE
  });
}
function wr(e, t, r, n, i, o) {
  return n === void 0 && (n = Ei.EMPTY_CONNECTION_HOLDER), new Jp.default(Promise.resolve(e), t, r, new Ei.ReadOnlyConnectionHolder(n ?? Ei.EMPTY_CONNECTION_HOLDER), {
    low: o,
    high: i
  });
}
Zu.default = _E;
var Qu = {};
Object.defineProperty(Qu, "__esModule", { value: !0 });
var pE = (
  /** @class */
  function() {
    function e(t) {
      var r = t.run;
      this._run = r;
    }
    return e.fromTransaction = function(t) {
      return new e({
        run: t.run.bind(t)
      });
    }, e.prototype.run = function(t, r) {
      return this._run(t, r);
    }, e;
  }()
);
Qu.default = pE;
var Ju = {}, mE = d && d.__extends || function() {
  var e = function(t, r) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var o in i)
        Object.prototype.hasOwnProperty.call(i, o) && (n[o] = i[o]);
    }, e(t, r);
  };
  return function(t, r) {
    if (typeof r != "function" && r !== null)
      throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
    e(t, r);
    function n() {
      this.constructor = t;
    }
    t.prototype = r === null ? Object.create(r) : (n.prototype = r.prototype, new n());
  };
}(), Cu = d && d.__assign || function() {
  return Cu = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var i in t)
        Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
    }
    return e;
  }, Cu.apply(this, arguments);
}, yE = d && d.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
}, Xp;
Object.defineProperty(Ju, "__esModule", { value: !0 });
var bE = yE(Zu), gE = (
  /** @class */
  function(e) {
    mE(t, e);
    function t(r) {
      var n = r.connectionHolder, i = r.onClose, o = r.onBookmarks, a = r.onConnection, s = r.reactive, c = r.fetchSize, u = r.impersonatedUser, l = r.highRecordWatermark, v = r.lowRecordWatermark, y = e.call(this, {
        connectionHolder: n,
        onClose: i,
        onBookmarks: o,
        onConnection: a,
        reactive: s,
        fetchSize: c,
        impersonatedUser: u,
        highRecordWatermark: l,
        lowRecordWatermark: v
      }) || this;
      return y[Xp] = "TransactionPromise", y;
    }
    return t.prototype.then = function(r, n) {
      return this._getOrCreateBeginPromise().then(r, n);
    }, t.prototype.catch = function(r) {
      return this._getOrCreateBeginPromise().catch(r);
    }, t.prototype.finally = function(r) {
      return this._getOrCreateBeginPromise().finally(r);
    }, t.prototype._getOrCreateBeginPromise = function() {
      var r = this;
      return this._beginPromise == null && (this._beginPromise = new Promise(function(n, i) {
        r._resolve = n, r._reject = i, r._beginError != null && i(r._beginError), r._beginMetadata != null && n(r._toTransaction());
      })), this._beginPromise;
    }, t.prototype._toTransaction = function() {
      return Cu(Cu({}, this), { run: e.prototype.run.bind(this), commit: e.prototype.commit.bind(this), rollback: e.prototype.rollback.bind(this), close: e.prototype.close.bind(this), isOpen: e.prototype.isOpen.bind(this), _begin: this._begin.bind(this) });
    }, t.prototype._begin = function(r, n) {
      return e.prototype._begin.call(this, r, n, {
        onError: this._onBeginError.bind(this),
        onComplete: this._onBeginMetadata.bind(this)
      });
    }, t.prototype._onBeginError = function(r) {
      this._beginError = r, this._reject != null && this._reject(r);
    }, t.prototype._onBeginMetadata = function(r) {
      this._beginMetadata = r ?? {}, this._resolve != null && this._resolve(this._toTransaction());
    }, t;
  }(bE.default)
);
Xp = Symbol.toStringTag;
Ju.default = gE;
var Xu = {}, si = d && d.__awaiter || function(e, t, r, n) {
  function i(o) {
    return o instanceof r ? o : new r(function(a) {
      a(o);
    });
  }
  return new (r || (r = Promise))(function(o, a) {
    function s(l) {
      try {
        u(n.next(l));
      } catch (v) {
        a(v);
      }
    }
    function c(l) {
      try {
        u(n.throw(l));
      } catch (v) {
        a(v);
      }
    }
    function u(l) {
      l.done ? o(l.value) : i(l.value).then(s, c);
    }
    u((n = n.apply(e, t || [])).next());
  });
}, ci = d && d.__generator || function(e, t) {
  var r = { label: 0, sent: function() {
    if (o[0] & 1)
      throw o[1];
    return o[1];
  }, trys: [], ops: [] }, n, i, o, a;
  return a = { next: s(0), throw: s(1), return: s(2) }, typeof Symbol == "function" && (a[Symbol.iterator] = function() {
    return this;
  }), a;
  function s(u) {
    return function(l) {
      return c([u, l]);
    };
  }
  function c(u) {
    if (n)
      throw new TypeError("Generator is already executing.");
    for (; a && (a = 0, u[0] && (r = 0)), r; )
      try {
        if (n = 1, i && (o = u[0] & 2 ? i.return : u[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, u[1])).done)
          return o;
        switch (i = 0, o && (u = [u[0] & 2, o.value]), u[0]) {
          case 0:
          case 1:
            o = u;
            break;
          case 4:
            return r.label++, { value: u[1], done: !1 };
          case 5:
            r.label++, i = u[1], u = [0];
            continue;
          case 7:
            u = r.ops.pop(), r.trys.pop();
            continue;
          default:
            if (o = r.trys, !(o = o.length > 0 && o[o.length - 1]) && (u[0] === 6 || u[0] === 2)) {
              r = 0;
              continue;
            }
            if (u[0] === 3 && (!o || u[1] > o[0] && u[1] < o[3])) {
              r.label = u[1];
              break;
            }
            if (u[0] === 6 && r.label < o[1]) {
              r.label = o[1], o = u;
              break;
            }
            if (o && r.label < o[2]) {
              r.label = o[2], r.ops.push(u);
              break;
            }
            o[2] && r.ops.pop(), r.trys.pop();
            continue;
        }
        u = t.call(e, r);
      } catch (l) {
        u = [6, l], i = 0;
      } finally {
        n = o = 0;
      }
    if (u[0] & 5)
      throw u[1];
    return { value: u[0] ? u[1] : void 0, done: !0 };
  }
}, ru = d && d.__read || function(e, t) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r)
    return e;
  var n = r.call(e), i, o = [], a;
  try {
    for (; (t === void 0 || t-- > 0) && !(i = n.next()).done; )
      o.push(i.value);
  } catch (s) {
    a = { error: s };
  } finally {
    try {
      i && !i.done && (r = n.return) && r.call(n);
    } finally {
      if (a)
        throw a.error;
    }
  }
  return o;
}, tu = d && d.__spreadArray || function(e, t, r) {
  if (r || arguments.length === 2)
    for (var n = 0, i = t.length, o; n < i; n++)
      (o || !(n in t)) && (o || (o = Array.prototype.slice.call(t, 0, n)), o[n] = t[n]);
  return e.concat(o || Array.prototype.slice.call(t));
}, Ff = d && d.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(Xu, "__esModule", { value: !0 });
var _l = Jr, OE = ue, or = ae, Mr = we, wE = Ff(Fi), ih = _r, EE = Bi, li = ut, Zr = Tn, SE = Ff(Ju), TE = Ff(Qu), PE = (
  /** @class */
  function() {
    function e(t) {
      var r = t.mode, n = t.connectionProvider, i = t.bookmarks, o = t.database, a = t.config, s = t.reactive, c = t.fetchSize, u = t.impersonatedUser, l = t.bookmarkManager;
      this._mode = r, this._database = o, this._reactive = s, this._fetchSize = c, this._onDatabaseNameResolved = this._onDatabaseNameResolved.bind(this), this._getConnectionAcquistionBookmarks = this._getConnectionAcquistionBookmarks.bind(this), this._readConnectionHolder = new ih.ConnectionHolder({
        mode: or.ACCESS_MODE_READ,
        database: o,
        bookmarks: i,
        connectionProvider: n,
        impersonatedUser: u,
        onDatabaseNameResolved: this._onDatabaseNameResolved,
        getConnectionAcquistionBookmarks: this._getConnectionAcquistionBookmarks
      }), this._writeConnectionHolder = new ih.ConnectionHolder({
        mode: or.ACCESS_MODE_WRITE,
        database: o,
        bookmarks: i,
        connectionProvider: n,
        impersonatedUser: u,
        onDatabaseNameResolved: this._onDatabaseNameResolved,
        getConnectionAcquistionBookmarks: this._getConnectionAcquistionBookmarks
      }), this._open = !0, this._hasTx = !1, this._impersonatedUser = u, this._lastBookmarks = i ?? li.Bookmarks.empty(), this._configuredBookmarks = this._lastBookmarks, this._transactionExecutor = IE(a), this._databaseNameResolved = this._database !== "";
      var v = this._calculateWatermaks();
      this._lowRecordWatermark = v.low, this._highRecordWatermark = v.high, this._results = [], this._bookmarkManager = l;
    }
    return e.prototype.run = function(t, r, n) {
      var i = this, o = (0, OE.validateQueryAndParameters)(t, r), a = o.validatedQuery, s = o.params, c = n != null ? new Zr.TxConfig(n) : Zr.TxConfig.empty(), u = this._run(a, s, function(l) {
        return si(i, void 0, void 0, function() {
          var v, y = this;
          return ci(this, function(g) {
            switch (g.label) {
              case 0:
                return [4, this._bookmarks()];
              case 1:
                return v = g.sent(), this._assertSessionIsOpen(), [2, l.protocol().run(a, s, {
                  bookmarks: v,
                  txConfig: c,
                  mode: this._mode,
                  database: this._database,
                  impersonatedUser: this._impersonatedUser,
                  afterComplete: function(E) {
                    return y._onCompleteCallback(E, v);
                  },
                  reactive: this._reactive,
                  fetchSize: this._fetchSize,
                  lowRecordWatermark: this._lowRecordWatermark,
                  highRecordWatermark: this._highRecordWatermark
                })];
            }
          });
        });
      });
      return this._results.push(u), u;
    }, e.prototype._run = function(t, r, n) {
      var i = this._connectionHolderWithMode(this._mode), o;
      this._open ? !this._hasTx && i.initializeConnection() ? o = i.getConnection().then(function(s) {
        return n(s);
      }).catch(function(s) {
        return Promise.resolve(new _l.FailedObserver({ error: s }));
      }) : o = Promise.resolve(new _l.FailedObserver({
        error: (0, Mr.newError)("Queries cannot be run directly on a session with an open transaction; either run from within the transaction or use a different session.")
      })) : o = Promise.resolve(new _l.FailedObserver({
        error: (0, Mr.newError)("Cannot run query in a closed session.")
      }));
      var a = { high: this._highRecordWatermark, low: this._lowRecordWatermark };
      return new wE.default(o, t, r, i, a);
    }, e.prototype._acquireConnection = function(t) {
      var r = this, n, i = this._connectionHolderWithMode(this._mode);
      return this._open ? !this._hasTx && i.initializeConnection() ? n = i.getConnection().then(function(o) {
        return t(o);
      }).then(function(o) {
        return si(r, void 0, void 0, function() {
          return ci(this, function(a) {
            switch (a.label) {
              case 0:
                return [4, i.releaseConnection()];
              case 1:
                return a.sent(), [2, o];
            }
          });
        });
      }) : n = Promise.reject((0, Mr.newError)("Queries cannot be run directly on a session with an open transaction; either run from within the transaction or use a different session.")) : n = Promise.reject((0, Mr.newError)("Cannot run query in a closed session.")), n;
    }, e.prototype.beginTransaction = function(t) {
      var r = t, n = Zr.TxConfig.empty();
      return r != null && (n = new Zr.TxConfig(r)), this._beginTransaction(this._mode, n);
    }, e.prototype._beginTransaction = function(t, r) {
      var n = this;
      if (!this._open)
        throw (0, Mr.newError)("Cannot begin a transaction on a closed session.");
      if (this._hasTx)
        throw (0, Mr.newError)("You cannot begin a transaction on a session with an open transaction; either run from within the transaction or use a different session.");
      var i = e._validateSessionMode(t), o = this._connectionHolderWithMode(i);
      o.initializeConnection(), this._hasTx = !0;
      var a = new SE.default({
        connectionHolder: o,
        impersonatedUser: this._impersonatedUser,
        onClose: this._transactionClosed.bind(this),
        onBookmarks: function(s, c, u) {
          return n._updateBookmarks(s, c, u);
        },
        onConnection: this._assertSessionIsOpen.bind(this),
        reactive: this._reactive,
        fetchSize: this._fetchSize,
        lowRecordWatermark: this._lowRecordWatermark,
        highRecordWatermark: this._highRecordWatermark
      });
      return a._begin(function() {
        return n._bookmarks();
      }, r), a;
    }, e.prototype._assertSessionIsOpen = function() {
      if (!this._open)
        throw (0, Mr.newError)("You cannot run more transactions on a closed session.");
    }, e.prototype._transactionClosed = function() {
      this._hasTx = !1;
    }, e.prototype.lastBookmark = function() {
      return this.lastBookmarks();
    }, e.prototype.lastBookmarks = function() {
      return this._lastBookmarks.values();
    }, e.prototype._bookmarks = function() {
      var t;
      return si(this, void 0, void 0, function() {
        var r;
        return ci(this, function(n) {
          switch (n.label) {
            case 0:
              return [4, (t = this._bookmarkManager) === null || t === void 0 ? void 0 : t.getBookmarks()];
            case 1:
              return r = n.sent(), r === void 0 ? [2, this._lastBookmarks] : [2, new li.Bookmarks(tu(tu([], ru(r), !1), ru(this._configuredBookmarks), !1))];
          }
        });
      });
    }, e.prototype.readTransaction = function(t, r) {
      var n = new Zr.TxConfig(r);
      return this._runTransaction(or.ACCESS_MODE_READ, n, t);
    }, e.prototype.writeTransaction = function(t, r) {
      var n = new Zr.TxConfig(r);
      return this._runTransaction(or.ACCESS_MODE_WRITE, n, t);
    }, e.prototype._runTransaction = function(t, r, n) {
      var i = this;
      return this._transactionExecutor.execute(function() {
        return i._beginTransaction(t, r);
      }, n);
    }, e.prototype.executeRead = function(t, r) {
      var n = new Zr.TxConfig(r);
      return this._executeInTransaction(or.ACCESS_MODE_READ, n, t);
    }, e.prototype.executeWrite = function(t, r) {
      var n = new Zr.TxConfig(r);
      return this._executeInTransaction(or.ACCESS_MODE_WRITE, n, t);
    }, e.prototype._executeInTransaction = function(t, r, n) {
      var i = this;
      return this._transactionExecutor.execute(function() {
        return i._beginTransaction(t, r);
      }, n, TE.default.fromTransaction);
    }, e.prototype._onDatabaseNameResolved = function(t) {
      if (!this._databaseNameResolved) {
        var r = t ?? "";
        this._database = r, this._readConnectionHolder.setDatabase(r), this._writeConnectionHolder.setDatabase(r), this._databaseNameResolved = !0;
      }
    }, e.prototype._getConnectionAcquistionBookmarks = function() {
      var t;
      return si(this, void 0, void 0, function() {
        var r;
        return ci(this, function(n) {
          switch (n.label) {
            case 0:
              return [4, (t = this._bookmarkManager) === null || t === void 0 ? void 0 : t.getBookmarks()];
            case 1:
              return r = n.sent(), r === void 0 ? [2, this._lastBookmarks] : [2, new li.Bookmarks(tu(tu([], ru(this._configuredBookmarks), !1), ru(r), !1))];
          }
        });
      });
    }, e.prototype._updateBookmarks = function(t, r, n) {
      var i, o, a;
      t != null && !t.isEmpty() && ((i = this._bookmarkManager) === null || i === void 0 || i.updateBookmarks((o = r == null ? void 0 : r.values()) !== null && o !== void 0 ? o : [], (a = t == null ? void 0 : t.values()) !== null && a !== void 0 ? a : []), this._lastBookmarks = t, this._configuredBookmarks = li.Bookmarks.empty());
    }, e.prototype.close = function() {
      return si(this, void 0, void 0, function() {
        return ci(this, function(t) {
          switch (t.label) {
            case 0:
              return this._open ? (this._open = !1, this._results.forEach(function(r) {
                return r._cancel();
              }), this._transactionExecutor.close(), [4, this._readConnectionHolder.close(this._hasTx)]) : [3, 3];
            case 1:
              return t.sent(), [4, this._writeConnectionHolder.close(this._hasTx)];
            case 2:
              t.sent(), t.label = 3;
            case 3:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, e.prototype._connectionHolderWithMode = function(t) {
      if (t === or.ACCESS_MODE_READ)
        return this._readConnectionHolder;
      if (t === or.ACCESS_MODE_WRITE)
        return this._writeConnectionHolder;
      throw (0, Mr.newError)("Unknown access mode: " + t);
    }, e.prototype._onCompleteCallback = function(t, r) {
      this._updateBookmarks(new li.Bookmarks(t.bookmark), r, t.db);
    }, e.prototype._calculateWatermaks = function() {
      return this._fetchSize === or.FETCH_ALL ? {
        low: Number.MAX_VALUE,
        high: Number.MAX_VALUE
        // we shall never reach this number to disable auto pull
      } : {
        low: 0.3 * this._fetchSize,
        high: 0.7 * this._fetchSize
      };
    }, e._validateSessionMode = function(t) {
      var r = t ?? or.ACCESS_MODE_WRITE;
      if (r !== or.ACCESS_MODE_READ && r !== or.ACCESS_MODE_WRITE)
        throw (0, Mr.newError)("Illegal session mode " + r);
      return r;
    }, e;
  }()
);
function IE(e) {
  var t, r = (t = e == null ? void 0 : e.maxTransactionRetryTime) !== null && t !== void 0 ? t : null;
  return new EE.TransactionExecutor(r);
}
Xu.default = PE;
var Ke = {}, Pn = {}, ju = d && d.__awaiter || function(e, t, r, n) {
  function i(o) {
    return o instanceof r ? o : new r(function(a) {
      a(o);
    });
  }
  return new (r || (r = Promise))(function(o, a) {
    function s(l) {
      try {
        u(n.next(l));
      } catch (v) {
        a(v);
      }
    }
    function c(l) {
      try {
        u(n.throw(l));
      } catch (v) {
        a(v);
      }
    }
    function u(l) {
      l.done ? o(l.value) : i(l.value).then(s, c);
    }
    u((n = n.apply(e, t || [])).next());
  });
}, Nu = d && d.__generator || function(e, t) {
  var r = { label: 0, sent: function() {
    if (o[0] & 1)
      throw o[1];
    return o[1];
  }, trys: [], ops: [] }, n, i, o, a;
  return a = { next: s(0), throw: s(1), return: s(2) }, typeof Symbol == "function" && (a[Symbol.iterator] = function() {
    return this;
  }), a;
  function s(u) {
    return function(l) {
      return c([u, l]);
    };
  }
  function c(u) {
    if (n)
      throw new TypeError("Generator is already executing.");
    for (; a && (a = 0, u[0] && (r = 0)), r; )
      try {
        if (n = 1, i && (o = u[0] & 2 ? i.return : u[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, u[1])).done)
          return o;
        switch (i = 0, o && (u = [u[0] & 2, o.value]), u[0]) {
          case 0:
          case 1:
            o = u;
            break;
          case 4:
            return r.label++, { value: u[1], done: !1 };
          case 5:
            r.label++, i = u[1], u = [0];
            continue;
          case 7:
            u = r.ops.pop(), r.trys.pop();
            continue;
          default:
            if (o = r.trys, !(o = o.length > 0 && o[o.length - 1]) && (u[0] === 6 || u[0] === 2)) {
              r = 0;
              continue;
            }
            if (u[0] === 3 && (!o || u[1] > o[0] && u[1] < o[3])) {
              r.label = u[1];
              break;
            }
            if (u[0] === 6 && r.label < o[1]) {
              r.label = o[1], o = u;
              break;
            }
            if (o && r.label < o[2]) {
              r.label = o[2], r.ops.push(u);
              break;
            }
            o[2] && r.ops.pop(), r.trys.pop();
            continue;
        }
        u = t.call(e, r);
      } catch (l) {
        u = [6, l], i = 0;
      } finally {
        n = o = 0;
      }
    if (u[0] & 5)
      throw u[1];
    return { value: u[0] ? u[1] : void 0, done: !0 };
  }
}, pl = d && d.__values || function(e) {
  var t = typeof Symbol == "function" && Symbol.iterator, r = t && e[t], n = 0;
  if (r)
    return r.call(e);
  if (e && typeof e.length == "number")
    return {
      next: function() {
        return e && n >= e.length && (e = void 0), { value: e && e[n++], done: !e };
      }
    };
  throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, oh = d && d.__read || function(e, t) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r)
    return e;
  var n = r.call(e), i, o = [], a;
  try {
    for (; (t === void 0 || t-- > 0) && !(i = n.next()).done; )
      o.push(i.value);
  } catch (s) {
    a = { error: s };
  } finally {
    try {
      i && !i.done && (r = n.return) && r.call(n);
    } finally {
      if (a)
        throw a.error;
    }
  }
  return o;
}, ah = d && d.__spreadArray || function(e, t, r) {
  if (r || arguments.length === 2)
    for (var n = 0, i = t.length, o; n < i; n++)
      (o || !(n in t)) && (o || (o = Array.prototype.slice.call(t, 0, n)), o[n] = t[n]);
  return e.concat(o || Array.prototype.slice.call(t));
};
Object.defineProperty(Pn, "__esModule", { value: !0 });
Pn.bookmarkManager = void 0;
var AE = (
  /** @class */
  function() {
    function e() {
      throw new Error("Not implemented");
    }
    return e.prototype.updateBookmarks = function(t, r) {
      return ju(this, void 0, void 0, function() {
        return Nu(this, function(n) {
          throw new Error("Not implemented");
        });
      });
    }, e.prototype.getBookmarks = function() {
      return ju(this, void 0, void 0, function() {
        return Nu(this, function(t) {
          throw new Error("Not implemented");
        });
      });
    }, e;
  }()
);
Pn.default = AE;
function RE(e) {
  e === void 0 && (e = {});
  var t = new Set(e.initialBookmarks);
  return new CE(t, e.bookmarksSupplier, e.bookmarksConsumer);
}
Pn.bookmarkManager = RE;
var CE = (
  /** @class */
  function() {
    function e(t, r, n) {
      this._bookmarks = t, this._bookmarksSupplier = r, this._bookmarksConsumer = n;
    }
    return e.prototype.updateBookmarks = function(t, r) {
      return ju(this, void 0, void 0, function() {
        var n, i, o, c, a, s, c, u, l, v, y;
        return Nu(this, function(g) {
          switch (g.label) {
            case 0:
              n = this._bookmarks;
              try {
                for (i = pl(t), o = i.next(); !o.done; o = i.next())
                  c = o.value, n.delete(c);
              } catch (E) {
                u = { error: E };
              } finally {
                try {
                  o && !o.done && (l = i.return) && l.call(i);
                } finally {
                  if (u)
                    throw u.error;
                }
              }
              try {
                for (a = pl(r), s = a.next(); !s.done; s = a.next())
                  c = s.value, n.add(c);
              } catch (E) {
                v = { error: E };
              } finally {
                try {
                  s && !s.done && (y = a.return) && y.call(a);
                } finally {
                  if (v)
                    throw v.error;
                }
              }
              return typeof this._bookmarksConsumer != "function" ? [3, 2] : [4, this._bookmarksConsumer(ah([], oh(n), !1))];
            case 1:
              g.sent(), g.label = 2;
            case 2:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, e.prototype.getBookmarks = function() {
      var t;
      return ju(this, void 0, void 0, function() {
        var r, n, i, o, a, s, c;
        return Nu(this, function(u) {
          switch (u.label) {
            case 0:
              return r = new Set(this._bookmarks), typeof this._bookmarksSupplier != "function" ? [3, 2] : [4, this._bookmarksSupplier()];
            case 1:
              n = (t = u.sent()) !== null && t !== void 0 ? t : [];
              try {
                for (i = pl(n), o = i.next(); !o.done; o = i.next())
                  a = o.value, r.add(a);
              } catch (l) {
                s = { error: l };
              } finally {
                try {
                  o && !o.done && (c = i.return) && c.call(i);
                } finally {
                  if (s)
                    throw s.error;
                }
              }
              u.label = 2;
            case 2:
              return [2, ah([], oh(r), !1)];
          }
        });
      });
    }, e;
  }()
), es = {}, em = d && d.__awaiter || function(e, t, r, n) {
  function i(o) {
    return o instanceof r ? o : new r(function(a) {
      a(o);
    });
  }
  return new (r || (r = Promise))(function(o, a) {
    function s(l) {
      try {
        u(n.next(l));
      } catch (v) {
        a(v);
      }
    }
    function c(l) {
      try {
        u(n.throw(l));
      } catch (v) {
        a(v);
      }
    }
    function u(l) {
      l.done ? o(l.value) : i(l.value).then(s, c);
    }
    u((n = n.apply(e, t || [])).next());
  });
}, rm = d && d.__generator || function(e, t) {
  var r = { label: 0, sent: function() {
    if (o[0] & 1)
      throw o[1];
    return o[1];
  }, trys: [], ops: [] }, n, i, o, a;
  return a = { next: s(0), throw: s(1), return: s(2) }, typeof Symbol == "function" && (a[Symbol.iterator] = function() {
    return this;
  }), a;
  function s(u) {
    return function(l) {
      return c([u, l]);
    };
  }
  function c(u) {
    if (n)
      throw new TypeError("Generator is already executing.");
    for (; a && (a = 0, u[0] && (r = 0)), r; )
      try {
        if (n = 1, i && (o = u[0] & 2 ? i.return : u[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, u[1])).done)
          return o;
        switch (i = 0, o && (u = [u[0] & 2, o.value]), u[0]) {
          case 0:
          case 1:
            o = u;
            break;
          case 4:
            return r.label++, { value: u[1], done: !1 };
          case 5:
            r.label++, i = u[1], u = [0];
            continue;
          case 7:
            u = r.ops.pop(), r.trys.pop();
            continue;
          default:
            if (o = r.trys, !(o = o.length > 0 && o[o.length - 1]) && (u[0] === 6 || u[0] === 2)) {
              r = 0;
              continue;
            }
            if (u[0] === 3 && (!o || u[1] > o[0] && u[1] < o[3])) {
              r.label = u[1];
              break;
            }
            if (u[0] === 6 && r.label < o[1]) {
              r.label = o[1], o = u;
              break;
            }
            if (o && r.label < o[2]) {
              r.label = o[2], r.ops.push(u);
              break;
            }
            o[2] && r.ops.pop(), r.trys.pop();
            continue;
        }
        u = t.call(e, r);
      } catch (l) {
        u = [6, l], i = 0;
      } finally {
        n = o = 0;
      }
    if (u[0] & 5)
      throw u[1];
    return { value: u[0] ? u[1] : void 0, done: !0 };
  }
}, jE = d && d.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(es, "__esModule", { value: !0 });
var NE = jE(Gu), $E = we;
function ME(e) {
  return em(this, void 0, void 0, function() {
    var t, r, n, i;
    return rm(this, function(o) {
      switch (o.label) {
        case 0:
          return [4, e];
        case 1:
          return t = o.sent(), r = t.summary, n = t.records, [4, e.keys()];
        case 2:
          return i = o.sent(), [2, new NE.default(i, n, r)];
      }
    });
  });
}
var kE = (
  /** @class */
  function() {
    function e() {
    }
    return e.prototype.eagerResultTransformer = function() {
      return ME;
    }, e.prototype.mappedResultTransformer = function(t) {
      var r = this;
      if (t == null || t.collect == null && t.map == null)
        throw (0, $E.newError)("Requires a map or/and a collect functions.");
      return function(n) {
        return em(r, void 0, void 0, function() {
          return rm(this, function(i) {
            switch (i.label) {
              case 0:
                return [4, new Promise(function(o, a) {
                  var s = { records: [], keys: [] };
                  n.subscribe({
                    onKeys: function(c) {
                      s.keys = c;
                    },
                    onNext: function(c) {
                      t.map != null ? s.records.push(t.map(c)) : s.records.push(c);
                    },
                    onCompleted: function(c) {
                      if (t.collect != null)
                        o(t.collect(s.records, c, s.keys));
                      else {
                        var u = { records: s.records, summary: c, keys: s.keys };
                        o(u);
                      }
                    },
                    onError: function(c) {
                      a(c);
                    }
                  });
                })];
              case 1:
                return [2, i.sent()];
            }
          });
        });
      };
    }, e;
  }()
), tm = new kE();
Object.freeze(tm);
es.default = tm;
var Bf = {}, uh = d && d.__awaiter || function(e, t, r, n) {
  function i(o) {
    return o instanceof r ? o : new r(function(a) {
      a(o);
    });
  }
  return new (r || (r = Promise))(function(o, a) {
    function s(l) {
      try {
        u(n.next(l));
      } catch (v) {
        a(v);
      }
    }
    function c(l) {
      try {
        u(n.throw(l));
      } catch (v) {
        a(v);
      }
    }
    function u(l) {
      l.done ? o(l.value) : i(l.value).then(s, c);
    }
    u((n = n.apply(e, t || [])).next());
  });
}, sh = d && d.__generator || function(e, t) {
  var r = { label: 0, sent: function() {
    if (o[0] & 1)
      throw o[1];
    return o[1];
  }, trys: [], ops: [] }, n, i, o, a;
  return a = { next: s(0), throw: s(1), return: s(2) }, typeof Symbol == "function" && (a[Symbol.iterator] = function() {
    return this;
  }), a;
  function s(u) {
    return function(l) {
      return c([u, l]);
    };
  }
  function c(u) {
    if (n)
      throw new TypeError("Generator is already executing.");
    for (; a && (a = 0, u[0] && (r = 0)), r; )
      try {
        if (n = 1, i && (o = u[0] & 2 ? i.return : u[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, u[1])).done)
          return o;
        switch (i = 0, o && (u = [u[0] & 2, o.value]), u[0]) {
          case 0:
          case 1:
            o = u;
            break;
          case 4:
            return r.label++, { value: u[1], done: !1 };
          case 5:
            r.label++, i = u[1], u = [0];
            continue;
          case 7:
            u = r.ops.pop(), r.trys.pop();
            continue;
          default:
            if (o = r.trys, !(o = o.length > 0 && o[o.length - 1]) && (u[0] === 6 || u[0] === 2)) {
              r = 0;
              continue;
            }
            if (u[0] === 3 && (!o || u[1] > o[0] && u[1] < o[3])) {
              r.label = u[1];
              break;
            }
            if (u[0] === 6 && r.label < o[1]) {
              r.label = o[1], o = u;
              break;
            }
            if (o && r.label < o[2]) {
              r.label = o[2], r.ops.push(u);
              break;
            }
            o[2] && r.ops.pop(), r.trys.pop();
            continue;
        }
        u = t.call(e, r);
      } catch (l) {
        u = [6, l], i = 0;
      } finally {
        n = o = 0;
      }
    if (u[0] & 5)
      throw u[1];
    return { value: u[0] ? u[1] : void 0, done: !0 };
  }
};
Object.defineProperty(Bf, "__esModule", { value: !0 });
var DE = (
  /** @class */
  function() {
    function e(t) {
      this._createSession = t;
    }
    return e.prototype.execute = function(t, r, n) {
      return uh(this, void 0, void 0, function() {
        var i, o, a = this;
        return sh(this, function(s) {
          switch (s.label) {
            case 0:
              i = this._createSession({
                database: t.database,
                bookmarkManager: t.bookmarkManager,
                impersonatedUser: t.impersonatedUser
              }), s.label = 1;
            case 1:
              return s.trys.push([1, , 3, 5]), o = t.routing === "READERS" ? i.executeRead.bind(i) : i.executeWrite.bind(i), [4, o(function(c) {
                return uh(a, void 0, void 0, function() {
                  var u;
                  return sh(this, function(l) {
                    switch (l.label) {
                      case 0:
                        return u = c.run(r, n), [4, t.resultTransformer(u)];
                      case 1:
                        return [2, l.sent()];
                    }
                  });
                });
              })];
            case 2:
              return [2, s.sent()];
            case 3:
              return [4, i.close()];
            case 4:
              return s.sent(), [
                7
                /*endfinally*/
              ];
            case 5:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, e;
  }()
);
Bf.default = DE;
var UE = d && d.__awaiter || function(e, t, r, n) {
  function i(o) {
    return o instanceof r ? o : new r(function(a) {
      a(o);
    });
  }
  return new (r || (r = Promise))(function(o, a) {
    function s(l) {
      try {
        u(n.next(l));
      } catch (v) {
        a(v);
      }
    }
    function c(l) {
      try {
        u(n.throw(l));
      } catch (v) {
        a(v);
      }
    }
    function u(l) {
      l.done ? o(l.value) : i(l.value).then(s, c);
    }
    u((n = n.apply(e, t || [])).next());
  });
}, LE = d && d.__generator || function(e, t) {
  var r = { label: 0, sent: function() {
    if (o[0] & 1)
      throw o[1];
    return o[1];
  }, trys: [], ops: [] }, n, i, o, a;
  return a = { next: s(0), throw: s(1), return: s(2) }, typeof Symbol == "function" && (a[Symbol.iterator] = function() {
    return this;
  }), a;
  function s(u) {
    return function(l) {
      return c([u, l]);
    };
  }
  function c(u) {
    if (n)
      throw new TypeError("Generator is already executing.");
    for (; a && (a = 0, u[0] && (r = 0)), r; )
      try {
        if (n = 1, i && (o = u[0] & 2 ? i.return : u[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, u[1])).done)
          return o;
        switch (i = 0, o && (u = [u[0] & 2, o.value]), u[0]) {
          case 0:
          case 1:
            o = u;
            break;
          case 4:
            return r.label++, { value: u[1], done: !1 };
          case 5:
            r.label++, i = u[1], u = [0];
            continue;
          case 7:
            u = r.ops.pop(), r.trys.pop();
            continue;
          default:
            if (o = r.trys, !(o = o.length > 0 && o[o.length - 1]) && (u[0] === 6 || u[0] === 2)) {
              r = 0;
              continue;
            }
            if (u[0] === 3 && (!o || u[1] > o[0] && u[1] < o[3])) {
              r.label = u[1];
              break;
            }
            if (u[0] === 6 && r.label < o[1]) {
              r.label = o[1], o = u;
              break;
            }
            if (o && r.label < o[2]) {
              r.label = o[2], r.ops.push(u);
              break;
            }
            o[2] && r.ops.pop(), r.trys.pop();
            continue;
        }
        u = t.call(e, r);
      } catch (l) {
        u = [6, l], i = 0;
      } finally {
        n = o = 0;
      }
    if (u[0] & 5)
      throw u[1];
    return { value: u[0] ? u[1] : void 0, done: !0 };
  }
}, rs = d && d.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(Ke, "__esModule", { value: !0 });
Ke.QueryConfig = Ke.SessionConfig = Ke.routing = Ke.WRITE = Ke.READ = Ke.Driver = void 0;
var ch = ut, FE = rs(Ku), kt = ae, BE = xi, lh = rs(Xu), xE = ue, WE = Pn, VE = rs(es), qE = rs(Bf), HE = we, zE = 60 * 60 * 1e3, YE = 1e3, nf = kt.ACCESS_MODE_READ;
Ke.READ = nf;
var xf = kt.ACCESS_MODE_WRITE;
Ke.WRITE = xf;
var KE = 0, GE = (
  /** @class */
  function() {
    function e() {
      this.defaultAccessMode = xf, this.bookmarks = [], this.database = "", this.impersonatedUser = void 0, this.fetchSize = void 0, this.bookmarkManager = void 0;
    }
    return e;
  }()
);
Ke.SessionConfig = GE;
var ZE = "WRITERS", QE = "READERS", cn = {
  WRITERS: ZE,
  READERS: QE
};
Ke.routing = cn;
Object.freeze(cn);
var JE = (
  /** @class */
  function() {
    function e() {
      this.routing = cn.WRITERS, this.resultTransformer = void 0, this.database = "", this.impersonatedUser = void 0, this.bookmarkManager = void 0;
    }
    return e;
  }()
);
Ke.QueryConfig = JE;
var nm = (
  /** @class */
  function() {
    function e(t, r, n, i, o) {
      r === void 0 && (r = {}), i === void 0 && (i = function(s) {
        return new lh.default(s);
      }), o === void 0 && (o = function(s) {
        return new qE.default(s);
      }), eS(r);
      var a = BE.Logger.create(r);
      XE(r, a), this._id = KE++, this._meta = t, this._config = r, this._log = a, this._createConnectionProvider = n, this._createSession = i, this._queryBookmarkManager = (0, WE.bookmarkManager)(), this._queryExecutor = o(this.session.bind(this)), this._connectionProvider = null, this._afterConstruction();
    }
    return Object.defineProperty(e.prototype, "queryBookmarkManager", {
      /**
       * The bookmark managed used by {@link Driver.executeQuery}
       *
       * @experimental This can be changed or removed anytime.
       * @type {BookmarkManager}
       * @returns {BookmarkManager}
       */
      get: function() {
        return this._queryBookmarkManager;
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.executeQuery = function(t, r, n) {
      var i, o, a;
      return n === void 0 && (n = {}), UE(this, void 0, void 0, function() {
        var s, c, u;
        return LE(this, function(l) {
          switch (l.label) {
            case 0:
              if (s = n.bookmarkManager === null ? void 0 : (i = n.bookmarkManager) !== null && i !== void 0 ? i : this.queryBookmarkManager, c = (o = n.resultTransformer) !== null && o !== void 0 ? o : VE.default.eagerResultTransformer(), u = (a = n.routing) !== null && a !== void 0 ? a : cn.WRITERS, u !== cn.READERS && u !== cn.WRITERS)
                throw (0, HE.newError)('Illegal query routing config: "'.concat(u, '"'));
              return [4, this._queryExecutor.execute({
                resultTransformer: c,
                bookmarkManager: s,
                routing: u,
                database: n.database,
                impersonatedUser: n.impersonatedUser
              }, t, r)];
            case 1:
              return [2, l.sent()];
          }
        });
      });
    }, e.prototype.verifyConnectivity = function(t) {
      var r = t === void 0 ? {} : t, n = r.database, i = n === void 0 ? "" : n, o = this._getOrCreateConnectionProvider();
      return o.verifyConnectivityAndGetServerInfo({ database: i, accessMode: nf });
    }, e.prototype.getServerInfo = function(t) {
      var r = t === void 0 ? {} : t, n = r.database, i = n === void 0 ? "" : n, o = this._getOrCreateConnectionProvider();
      return o.verifyConnectivityAndGetServerInfo({ database: i, accessMode: nf });
    }, e.prototype.supportsMultiDb = function() {
      var t = this._getOrCreateConnectionProvider();
      return t.supportsMultiDb();
    }, e.prototype.supportsTransactionConfig = function() {
      var t = this._getOrCreateConnectionProvider();
      return t.supportsTransactionConfig();
    }, e.prototype.supportsUserImpersonation = function() {
      var t = this._getOrCreateConnectionProvider();
      return t.supportsUserImpersonation();
    }, e.prototype.getNegotiatedProtocolVersion = function() {
      var t = this._getOrCreateConnectionProvider();
      return t.getNegotiatedProtocolVersion();
    }, e.prototype.isEncrypted = function() {
      return this._isEncrypted();
    }, e.prototype._supportsRouting = function() {
      return this._meta.routing;
    }, e.prototype._isEncrypted = function() {
      return this._config.encrypted === xE.ENCRYPTION_ON || this._config.encrypted === !0;
    }, e.prototype._getTrust = function() {
      return this._config.trust;
    }, e.prototype.session = function(t) {
      var r = t === void 0 ? {} : t, n = r.defaultAccessMode, i = n === void 0 ? xf : n, o = r.bookmarks, a = r.database, s = a === void 0 ? "" : a, c = r.impersonatedUser, u = r.fetchSize, l = r.bookmarkManager;
      return this._newSession({
        defaultAccessMode: i,
        bookmarkOrBookmarks: o,
        database: s,
        reactive: !1,
        impersonatedUser: c,
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        fetchSize: im(u, this._config.fetchSize),
        bookmarkManager: l
      });
    }, e.prototype.close = function() {
      return this._log.info("Driver ".concat(this._id, " closing")), this._connectionProvider != null ? this._connectionProvider.close() : Promise.resolve();
    }, e.prototype._afterConstruction = function() {
      this._log.info("".concat(this._meta.typename, " driver ").concat(this._id, " created for server address ").concat(this._meta.address.toString()));
    }, e.prototype._newSession = function(t) {
      var r = t.defaultAccessMode, n = t.bookmarkOrBookmarks, i = t.database, o = t.reactive, a = t.impersonatedUser, s = t.fetchSize, c = t.bookmarkManager, u = lh.default._validateSessionMode(r), l = this._getOrCreateConnectionProvider(), v = n != null ? new ch.Bookmarks(n) : ch.Bookmarks.empty();
      return this._createSession({
        mode: u,
        database: i ?? "",
        connectionProvider: l,
        bookmarks: v,
        config: this._config,
        reactive: o,
        impersonatedUser: a,
        fetchSize: s,
        bookmarkManager: c
      });
    }, e.prototype._getOrCreateConnectionProvider = function() {
      return this._connectionProvider == null && (this._connectionProvider = this._createConnectionProvider(this._id, this._config, this._log, tS(this._config))), this._connectionProvider;
    }, e;
  }()
);
Ke.Driver = nm;
function XE(e, t) {
  var r = e.resolver;
  if (r != null && typeof r != "function")
    throw new TypeError("Configured resolver should be a function. Got: ".concat(typeof r));
  return e.connectionAcquisitionTimeout < e.connectionTimeout && t.warn('Configuration for "connectionAcquisitionTimeout" should be greater than or equal to "connectionTimeout". Otherwise, the connection acquisition timeout will take precedence for over the connection timeout in scenarios where a new connection is created while it is acquired'), e;
}
function eS(e) {
  e.maxConnectionLifetime = ml(e.maxConnectionLifetime, zE), e.maxConnectionPoolSize = ml(e.maxConnectionPoolSize, kt.DEFAULT_POOL_MAX_SIZE), e.connectionAcquisitionTimeout = ml(e.connectionAcquisitionTimeout, kt.DEFAULT_POOL_ACQUISITION_TIMEOUT), e.fetchSize = im(e.fetchSize, YE), e.connectionTimeout = rS(e);
}
function ml(e, t) {
  var r = parseInt(e, 10);
  return r > 0 || r === 0 ? r : r < 0 ? Number.MAX_SAFE_INTEGER : t;
}
function im(e, t) {
  var r = parseInt(e, 10);
  if (r > 0 || r === kt.FETCH_ALL)
    return r;
  if (r === 0 || r < 0)
    throw new Error("The fetch size can only be a positive value or ".concat(kt.FETCH_ALL, " for ALL. However fetchSize = ").concat(r));
  return t;
}
function rS(e) {
  var t = parseInt(e.connectionTimeout, 10);
  return t === 0 || !isNaN(t) && t < 0 ? null : isNaN(t) ? kt.DEFAULT_CONNECTION_TIMEOUT_MILLIS : t;
}
function tS(e) {
  return new FE.default(e.resolver);
}
Ke.default = nm;
var Wf = {};
Object.defineProperty(Wf, "__esModule", { value: !0 });
var nS = {
  basic: function(e, t, r) {
    return r != null ? {
      scheme: "basic",
      principal: e,
      credentials: t,
      realm: r
    } : { scheme: "basic", principal: e, credentials: t };
  },
  kerberos: function(e) {
    return {
      scheme: "kerberos",
      principal: "",
      credentials: e
    };
  },
  bearer: function(e) {
    return {
      scheme: "bearer",
      credentials: e
    };
  },
  custom: function(e, t, r, n, i) {
    var o = {
      scheme: n,
      principal: e
    };
    return yl(t) && (o.credentials = t), yl(r) && (o.realm = r), yl(i) && (o.parameters = i), o;
  }
};
function yl(e) {
  return !(e == null || e === "" || Object.getPrototypeOf(e) === Object.prototype && Object.keys(e).length === 0);
}
Wf.default = nS;
var om = {};
Object.defineProperty(om, "__esModule", { value: !0 });
(function(e) {
  var t = d && d.__createBinding || (Object.create ? function(V, J, re, H) {
    H === void 0 && (H = re);
    var ce = Object.getOwnPropertyDescriptor(J, re);
    (!ce || ("get" in ce ? !J.__esModule : ce.writable || ce.configurable)) && (ce = { enumerable: !0, get: function() {
      return J[re];
    } }), Object.defineProperty(V, H, ce);
  } : function(V, J, re, H) {
    H === void 0 && (H = re), V[H] = J[re];
  }), r = d && d.__setModuleDefault || (Object.create ? function(V, J) {
    Object.defineProperty(V, "default", { enumerable: !0, value: J });
  } : function(V, J) {
    V.default = J;
  }), n = d && d.__importStar || function(V) {
    if (V && V.__esModule)
      return V;
    var J = {};
    if (V != null)
      for (var re in V)
        re !== "default" && Object.prototype.hasOwnProperty.call(V, re) && t(J, V, re);
    return r(J, V), J;
  }, i = d && d.__importDefault || function(V) {
    return V && V.__esModule ? V : { default: V };
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.ManagedTransaction = e.Transaction = e.Connection = e.ConnectionProvider = e.EagerResult = e.Result = e.Stats = e.QueryStatistics = e.ProfiledPlan = e.Plan = e.Notification = e.ServerInfo = e.queryType = e.ResultSummary = e.Record = e.isPathSegment = e.PathSegment = e.isPath = e.Path = e.isUnboundRelationship = e.UnboundRelationship = e.isRelationship = e.Relationship = e.isNode = e.Node = e.Time = e.LocalTime = e.LocalDateTime = e.isTime = e.isLocalTime = e.isLocalDateTime = e.isDuration = e.isDateTime = e.isDate = e.Duration = e.DateTime = e.Date = e.Point = e.isPoint = e.internal = e.toString = e.toNumber = e.inSafeRange = e.isInt = e.int = e.Integer = e.error = e.isRetriableError = e.Neo4jError = e.newError = void 0, e.resultTransformers = e.routing = e.bookmarkManager = e.auth = e.json = e.driver = e.types = e.Driver = e.Session = e.TransactionPromise = void 0;
  var o = we;
  Object.defineProperty(e, "newError", { enumerable: !0, get: function() {
    return o.newError;
  } }), Object.defineProperty(e, "Neo4jError", { enumerable: !0, get: function() {
    return o.Neo4jError;
  } }), Object.defineProperty(e, "isRetriableError", { enumerable: !0, get: function() {
    return o.isRetriableError;
  } });
  var a = n(We);
  e.Integer = a.default, Object.defineProperty(e, "int", { enumerable: !0, get: function() {
    return a.int;
  } }), Object.defineProperty(e, "isInt", { enumerable: !0, get: function() {
    return a.isInt;
  } }), Object.defineProperty(e, "inSafeRange", { enumerable: !0, get: function() {
    return a.inSafeRange;
  } }), Object.defineProperty(e, "toNumber", { enumerable: !0, get: function() {
    return a.toNumber;
  } }), Object.defineProperty(e, "toString", { enumerable: !0, get: function() {
    return a.toString;
  } });
  var s = Te;
  Object.defineProperty(e, "Date", { enumerable: !0, get: function() {
    return s.Date;
  } }), Object.defineProperty(e, "DateTime", { enumerable: !0, get: function() {
    return s.DateTime;
  } }), Object.defineProperty(e, "Duration", { enumerable: !0, get: function() {
    return s.Duration;
  } }), Object.defineProperty(e, "isDate", { enumerable: !0, get: function() {
    return s.isDate;
  } }), Object.defineProperty(e, "isDateTime", { enumerable: !0, get: function() {
    return s.isDateTime;
  } }), Object.defineProperty(e, "isDuration", { enumerable: !0, get: function() {
    return s.isDuration;
  } }), Object.defineProperty(e, "isLocalDateTime", { enumerable: !0, get: function() {
    return s.isLocalDateTime;
  } }), Object.defineProperty(e, "isLocalTime", { enumerable: !0, get: function() {
    return s.isLocalTime;
  } }), Object.defineProperty(e, "isTime", { enumerable: !0, get: function() {
    return s.isTime;
  } }), Object.defineProperty(e, "LocalDateTime", { enumerable: !0, get: function() {
    return s.LocalDateTime;
  } }), Object.defineProperty(e, "LocalTime", { enumerable: !0, get: function() {
    return s.LocalTime;
  } }), Object.defineProperty(e, "Time", { enumerable: !0, get: function() {
    return s.Time;
  } });
  var c = je;
  Object.defineProperty(e, "Node", { enumerable: !0, get: function() {
    return c.Node;
  } }), Object.defineProperty(e, "isNode", { enumerable: !0, get: function() {
    return c.isNode;
  } }), Object.defineProperty(e, "Relationship", { enumerable: !0, get: function() {
    return c.Relationship;
  } }), Object.defineProperty(e, "isRelationship", { enumerable: !0, get: function() {
    return c.isRelationship;
  } }), Object.defineProperty(e, "UnboundRelationship", { enumerable: !0, get: function() {
    return c.UnboundRelationship;
  } }), Object.defineProperty(e, "isUnboundRelationship", { enumerable: !0, get: function() {
    return c.isUnboundRelationship;
  } }), Object.defineProperty(e, "Path", { enumerable: !0, get: function() {
    return c.Path;
  } }), Object.defineProperty(e, "isPath", { enumerable: !0, get: function() {
    return c.isPath;
  } }), Object.defineProperty(e, "PathSegment", { enumerable: !0, get: function() {
    return c.PathSegment;
  } }), Object.defineProperty(e, "isPathSegment", { enumerable: !0, get: function() {
    return c.isPathSegment;
  } });
  var u = i(Mf);
  e.Record = u.default;
  var l = vn;
  Object.defineProperty(e, "isPoint", { enumerable: !0, get: function() {
    return l.isPoint;
  } }), Object.defineProperty(e, "Point", { enumerable: !0, get: function() {
    return l.Point;
  } });
  var v = n(xe);
  e.ResultSummary = v.default, Object.defineProperty(e, "queryType", { enumerable: !0, get: function() {
    return v.queryType;
  } }), Object.defineProperty(e, "ServerInfo", { enumerable: !0, get: function() {
    return v.ServerInfo;
  } }), Object.defineProperty(e, "Notification", { enumerable: !0, get: function() {
    return v.Notification;
  } }), Object.defineProperty(e, "Plan", { enumerable: !0, get: function() {
    return v.Plan;
  } }), Object.defineProperty(e, "ProfiledPlan", { enumerable: !0, get: function() {
    return v.ProfiledPlan;
  } }), Object.defineProperty(e, "QueryStatistics", { enumerable: !0, get: function() {
    return v.QueryStatistics;
  } }), Object.defineProperty(e, "Stats", { enumerable: !0, get: function() {
    return v.Stats;
  } });
  var y = i(Fi);
  e.Result = y.default;
  var g = i(Gu);
  e.EagerResult = g.default;
  var E = i(Uf);
  e.ConnectionProvider = E.default;
  var S = i(Lf);
  e.Connection = S.default;
  var C = i(Zu);
  e.Transaction = C.default;
  var R = i(Qu);
  e.ManagedTransaction = R.default;
  var $ = i(Ju);
  e.TransactionPromise = $.default;
  var U = i(Xu);
  e.Session = U.default;
  var D = n(Ke), F = D;
  e.Driver = D.default, e.driver = F;
  var K = i(Wf);
  e.auth = K.default;
  var X = Pn;
  Object.defineProperty(e, "bookmarkManager", { enumerable: !0, get: function() {
    return X.bookmarkManager;
  } });
  var oe = Ke;
  Object.defineProperty(e, "routing", { enumerable: !0, get: function() {
    return oe.routing;
  } });
  var de = n(om);
  e.types = de;
  var Ie = n(wn);
  e.json = Ie;
  var ge = i(es);
  e.resultTransformers = ge.default;
  var Re = n(me);
  e.internal = Re;
  var he = {
    SERVICE_UNAVAILABLE: o.SERVICE_UNAVAILABLE,
    SESSION_EXPIRED: o.SESSION_EXPIRED,
    PROTOCOL_ERROR: o.PROTOCOL_ERROR
  };
  e.error = he;
  var se = {
    newError: o.newError,
    Neo4jError: o.Neo4jError,
    isRetriableError: o.isRetriableError,
    error: he,
    Integer: a.default,
    int: a.int,
    isInt: a.isInt,
    inSafeRange: a.inSafeRange,
    toNumber: a.toNumber,
    toString: a.toString,
    internal: Re,
    isPoint: l.isPoint,
    Point: l.Point,
    Date: s.Date,
    DateTime: s.DateTime,
    Duration: s.Duration,
    isDate: s.isDate,
    isDateTime: s.isDateTime,
    isDuration: s.isDuration,
    isLocalDateTime: s.isLocalDateTime,
    isLocalTime: s.isLocalTime,
    isTime: s.isTime,
    LocalDateTime: s.LocalDateTime,
    LocalTime: s.LocalTime,
    Time: s.Time,
    Node: c.Node,
    isNode: c.isNode,
    Relationship: c.Relationship,
    isRelationship: c.isRelationship,
    UnboundRelationship: c.UnboundRelationship,
    isUnboundRelationship: c.isUnboundRelationship,
    Path: c.Path,
    isPath: c.isPath,
    PathSegment: c.PathSegment,
    isPathSegment: c.isPathSegment,
    Record: u.default,
    ResultSummary: v.default,
    queryType: v.queryType,
    ServerInfo: v.ServerInfo,
    Notification: v.Notification,
    Plan: v.Plan,
    ProfiledPlan: v.ProfiledPlan,
    QueryStatistics: v.QueryStatistics,
    Stats: v.Stats,
    Result: y.default,
    EagerResult: g.default,
    Transaction: C.default,
    ManagedTransaction: R.default,
    TransactionPromise: $.default,
    Session: U.default,
    Driver: D.default,
    Connection: S.default,
    types: de,
    driver: F,
    json: Ie,
    auth: K.default,
    bookmarkManager: X.bookmarkManager,
    routing: oe.routing,
    resultTransformers: ge.default
  };
  e.default = se;
})(ee);
var ts = {}, Vi = {}, pe = {}, In = {}, _e = {};
Object.defineProperty(_e, "__esModule", { value: !0 });
_e.isFunction = void 0;
function iS(e) {
  return typeof e == "function";
}
_e.isFunction = iS;
var Ue = {}, qi = {}, Ir = {};
Object.defineProperty(Ir, "__esModule", { value: !0 });
Ir.createErrorClass = void 0;
function oS(e) {
  var t = function(n) {
    Error.call(n), n.stack = new Error().stack;
  }, r = e(t);
  return r.prototype = Object.create(Error.prototype), r.prototype.constructor = r, r;
}
Ir.createErrorClass = oS;
Object.defineProperty(qi, "__esModule", { value: !0 });
qi.UnsubscriptionError = void 0;
var aS = Ir;
qi.UnsubscriptionError = aS.createErrorClass(function(e) {
  return function(r) {
    e(this), this.message = r ? r.length + ` errors occurred during unsubscription:
` + r.map(function(n, i) {
      return i + 1 + ") " + n.toString();
    }).join(`
  `) : "", this.name = "UnsubscriptionError", this.errors = r;
  };
});
var mr = {};
Object.defineProperty(mr, "__esModule", { value: !0 });
mr.arrRemove = void 0;
function uS(e, t) {
  if (e) {
    var r = e.indexOf(t);
    0 <= r && e.splice(r, 1);
  }
}
mr.arrRemove = uS;
var fh = d && d.__values || function(e) {
  var t = typeof Symbol == "function" && Symbol.iterator, r = t && e[t], n = 0;
  if (r)
    return r.call(e);
  if (e && typeof e.length == "number")
    return {
      next: function() {
        return e && n >= e.length && (e = void 0), { value: e && e[n++], done: !e };
      }
    };
  throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, dh = d && d.__read || function(e, t) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r)
    return e;
  var n = r.call(e), i, o = [], a;
  try {
    for (; (t === void 0 || t-- > 0) && !(i = n.next()).done; )
      o.push(i.value);
  } catch (s) {
    a = { error: s };
  } finally {
    try {
      i && !i.done && (r = n.return) && r.call(n);
    } finally {
      if (a)
        throw a.error;
    }
  }
  return o;
}, hh = d && d.__spreadArray || function(e, t) {
  for (var r = 0, n = t.length, i = e.length; r < n; r++, i++)
    e[i] = t[r];
  return e;
};
Object.defineProperty(Ue, "__esModule", { value: !0 });
Ue.isSubscription = Ue.EMPTY_SUBSCRIPTION = Ue.Subscription = void 0;
var Si = _e, bl = qi, vh = mr, Vf = function() {
  function e(t) {
    this.initialTeardown = t, this.closed = !1, this._parentage = null, this._finalizers = null;
  }
  return e.prototype.unsubscribe = function() {
    var t, r, n, i, o;
    if (!this.closed) {
      this.closed = !0;
      var a = this._parentage;
      if (a)
        if (this._parentage = null, Array.isArray(a))
          try {
            for (var s = fh(a), c = s.next(); !c.done; c = s.next()) {
              var u = c.value;
              u.remove(this);
            }
          } catch (S) {
            t = { error: S };
          } finally {
            try {
              c && !c.done && (r = s.return) && r.call(s);
            } finally {
              if (t)
                throw t.error;
            }
          }
        else
          a.remove(this);
      var l = this.initialTeardown;
      if (Si.isFunction(l))
        try {
          l();
        } catch (S) {
          o = S instanceof bl.UnsubscriptionError ? S.errors : [S];
        }
      var v = this._finalizers;
      if (v) {
        this._finalizers = null;
        try {
          for (var y = fh(v), g = y.next(); !g.done; g = y.next()) {
            var E = g.value;
            try {
              _h(E);
            } catch (S) {
              o = o ?? [], S instanceof bl.UnsubscriptionError ? o = hh(hh([], dh(o)), dh(S.errors)) : o.push(S);
            }
          }
        } catch (S) {
          n = { error: S };
        } finally {
          try {
            g && !g.done && (i = y.return) && i.call(y);
          } finally {
            if (n)
              throw n.error;
          }
        }
      }
      if (o)
        throw new bl.UnsubscriptionError(o);
    }
  }, e.prototype.add = function(t) {
    var r;
    if (t && t !== this)
      if (this.closed)
        _h(t);
      else {
        if (t instanceof e) {
          if (t.closed || t._hasParent(this))
            return;
          t._addParent(this);
        }
        (this._finalizers = (r = this._finalizers) !== null && r !== void 0 ? r : []).push(t);
      }
  }, e.prototype._hasParent = function(t) {
    var r = this._parentage;
    return r === t || Array.isArray(r) && r.includes(t);
  }, e.prototype._addParent = function(t) {
    var r = this._parentage;
    this._parentage = Array.isArray(r) ? (r.push(t), r) : r ? [r, t] : t;
  }, e.prototype._removeParent = function(t) {
    var r = this._parentage;
    r === t ? this._parentage = null : Array.isArray(r) && vh.arrRemove(r, t);
  }, e.prototype.remove = function(t) {
    var r = this._finalizers;
    r && vh.arrRemove(r, t), t instanceof e && t._removeParent(this);
  }, e.EMPTY = function() {
    var t = new e();
    return t.closed = !0, t;
  }(), e;
}();
Ue.Subscription = Vf;
Ue.EMPTY_SUBSCRIPTION = Vf.EMPTY;
function sS(e) {
  return e instanceof Vf || e && "closed" in e && Si.isFunction(e.remove) && Si.isFunction(e.add) && Si.isFunction(e.unsubscribe);
}
Ue.isSubscription = sS;
function _h(e) {
  Si.isFunction(e) ? e() : e.unsubscribe();
}
var st = {};
Object.defineProperty(st, "__esModule", { value: !0 });
st.config = void 0;
st.config = {
  onUnhandledError: null,
  onStoppedNotification: null,
  Promise: void 0,
  useDeprecatedSynchronousErrorHandling: !1,
  useDeprecatedNextContext: !1
};
var Hi = {}, qf = {};
(function(e) {
  var t = d && d.__read || function(n, i) {
    var o = typeof Symbol == "function" && n[Symbol.iterator];
    if (!o)
      return n;
    var a = o.call(n), s, c = [], u;
    try {
      for (; (i === void 0 || i-- > 0) && !(s = a.next()).done; )
        c.push(s.value);
    } catch (l) {
      u = { error: l };
    } finally {
      try {
        s && !s.done && (o = a.return) && o.call(a);
      } finally {
        if (u)
          throw u.error;
      }
    }
    return c;
  }, r = d && d.__spreadArray || function(n, i) {
    for (var o = 0, a = i.length, s = n.length; o < a; o++, s++)
      n[s] = i[o];
    return n;
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.timeoutProvider = void 0, e.timeoutProvider = {
    setTimeout: function(n, i) {
      for (var o = [], a = 2; a < arguments.length; a++)
        o[a - 2] = arguments[a];
      var s = e.timeoutProvider.delegate;
      return s != null && s.setTimeout ? s.setTimeout.apply(s, r([n, i], t(o))) : setTimeout.apply(void 0, r([n, i], t(o)));
    },
    clearTimeout: function(n) {
      var i = e.timeoutProvider.delegate;
      return ((i == null ? void 0 : i.clearTimeout) || clearTimeout)(n);
    },
    delegate: void 0
  };
})(qf);
Object.defineProperty(Hi, "__esModule", { value: !0 });
Hi.reportUnhandledError = void 0;
var cS = st, lS = qf;
function fS(e) {
  lS.timeoutProvider.setTimeout(function() {
    var t = cS.config.onUnhandledError;
    if (t)
      t(e);
    else
      throw e;
  });
}
Hi.reportUnhandledError = fS;
var Fe = {};
Object.defineProperty(Fe, "__esModule", { value: !0 });
Fe.noop = void 0;
function dS() {
}
Fe.noop = dS;
var Tr = {};
Object.defineProperty(Tr, "__esModule", { value: !0 });
Tr.createNotification = Tr.nextNotification = Tr.errorNotification = Tr.COMPLETE_NOTIFICATION = void 0;
Tr.COMPLETE_NOTIFICATION = function() {
  return ns("C", void 0, void 0);
}();
function hS(e) {
  return ns("E", void 0, e);
}
Tr.errorNotification = hS;
function vS(e) {
  return ns("N", e, void 0);
}
Tr.nextNotification = vS;
function ns(e, t, r) {
  return {
    kind: e,
    value: t,
    error: r
  };
}
Tr.createNotification = ns;
var Xr = {};
Object.defineProperty(Xr, "__esModule", { value: !0 });
Xr.captureError = Xr.errorContext = void 0;
var am = st, jt = null;
function _S(e) {
  if (am.config.useDeprecatedSynchronousErrorHandling) {
    var t = !jt;
    if (t && (jt = { errorThrown: !1, error: null }), e(), t) {
      var r = jt, n = r.errorThrown, i = r.error;
      if (jt = null, n)
        throw i;
    }
  } else
    e();
}
Xr.errorContext = _S;
function pS(e) {
  am.config.useDeprecatedSynchronousErrorHandling && jt && (jt.errorThrown = !0, jt.error = e);
}
Xr.captureError = pS;
(function(e) {
  var t = d && d.__extends || function() {
    var $ = function(U, D) {
      return $ = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(F, K) {
        F.__proto__ = K;
      } || function(F, K) {
        for (var X in K)
          Object.prototype.hasOwnProperty.call(K, X) && (F[X] = K[X]);
      }, $(U, D);
    };
    return function(U, D) {
      if (typeof D != "function" && D !== null)
        throw new TypeError("Class extends value " + String(D) + " is not a constructor or null");
      $(U, D);
      function F() {
        this.constructor = U;
      }
      U.prototype = D === null ? Object.create(D) : (F.prototype = D.prototype, new F());
    };
  }();
  Object.defineProperty(e, "__esModule", { value: !0 }), e.EMPTY_OBSERVER = e.SafeSubscriber = e.Subscriber = void 0;
  var r = _e, n = Ue, i = st, o = Hi, a = Fe, s = Tr, c = qf, u = Xr, l = function($) {
    t(U, $);
    function U(D) {
      var F = $.call(this) || this;
      return F.isStopped = !1, D ? (F.destination = D, n.isSubscription(D) && D.add(F)) : F.destination = e.EMPTY_OBSERVER, F;
    }
    return U.create = function(D, F, K) {
      return new E(D, F, K);
    }, U.prototype.next = function(D) {
      this.isStopped ? R(s.nextNotification(D), this) : this._next(D);
    }, U.prototype.error = function(D) {
      this.isStopped ? R(s.errorNotification(D), this) : (this.isStopped = !0, this._error(D));
    }, U.prototype.complete = function() {
      this.isStopped ? R(s.COMPLETE_NOTIFICATION, this) : (this.isStopped = !0, this._complete());
    }, U.prototype.unsubscribe = function() {
      this.closed || (this.isStopped = !0, $.prototype.unsubscribe.call(this), this.destination = null);
    }, U.prototype._next = function(D) {
      this.destination.next(D);
    }, U.prototype._error = function(D) {
      try {
        this.destination.error(D);
      } finally {
        this.unsubscribe();
      }
    }, U.prototype._complete = function() {
      try {
        this.destination.complete();
      } finally {
        this.unsubscribe();
      }
    }, U;
  }(n.Subscription);
  e.Subscriber = l;
  var v = Function.prototype.bind;
  function y($, U) {
    return v.call($, U);
  }
  var g = function() {
    function $(U) {
      this.partialObserver = U;
    }
    return $.prototype.next = function(U) {
      var D = this.partialObserver;
      if (D.next)
        try {
          D.next(U);
        } catch (F) {
          S(F);
        }
    }, $.prototype.error = function(U) {
      var D = this.partialObserver;
      if (D.error)
        try {
          D.error(U);
        } catch (F) {
          S(F);
        }
      else
        S(U);
    }, $.prototype.complete = function() {
      var U = this.partialObserver;
      if (U.complete)
        try {
          U.complete();
        } catch (D) {
          S(D);
        }
    }, $;
  }(), E = function($) {
    t(U, $);
    function U(D, F, K) {
      var X = $.call(this) || this, oe;
      if (r.isFunction(D) || !D)
        oe = {
          next: D ?? void 0,
          error: F ?? void 0,
          complete: K ?? void 0
        };
      else {
        var de;
        X && i.config.useDeprecatedNextContext ? (de = Object.create(D), de.unsubscribe = function() {
          return X.unsubscribe();
        }, oe = {
          next: D.next && y(D.next, de),
          error: D.error && y(D.error, de),
          complete: D.complete && y(D.complete, de)
        }) : oe = D;
      }
      return X.destination = new g(oe), X;
    }
    return U;
  }(l);
  e.SafeSubscriber = E;
  function S($) {
    i.config.useDeprecatedSynchronousErrorHandling ? u.captureError($) : o.reportUnhandledError($);
  }
  function C($) {
    throw $;
  }
  function R($, U) {
    var D = i.config.onStoppedNotification;
    D && c.timeoutProvider.setTimeout(function() {
      return D($, U);
    });
  }
  e.EMPTY_OBSERVER = {
    closed: !0,
    next: a.noop,
    error: C,
    complete: a.noop
  };
})(In);
var qt = {};
Object.defineProperty(qt, "__esModule", { value: !0 });
qt.observable = void 0;
qt.observable = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}();
var Wr = {}, Be = {};
Object.defineProperty(Be, "__esModule", { value: !0 });
Be.identity = void 0;
function mS(e) {
  return e;
}
Be.identity = mS;
Object.defineProperty(Wr, "__esModule", { value: !0 });
Wr.pipeFromArray = Wr.pipe = void 0;
var yS = Be;
function bS() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e[t] = arguments[t];
  return um(e);
}
Wr.pipe = bS;
function um(e) {
  return e.length === 0 ? yS.identity : e.length === 1 ? e[0] : function(r) {
    return e.reduce(function(n, i) {
      return i(n);
    }, r);
  };
}
Wr.pipeFromArray = um;
Object.defineProperty(pe, "__esModule", { value: !0 });
pe.Observable = void 0;
var of = In, gS = Ue, OS = qt, wS = Wr, ES = st, gl = _e, SS = Xr, TS = function() {
  function e(t) {
    t && (this._subscribe = t);
  }
  return e.prototype.lift = function(t) {
    var r = new e();
    return r.source = this, r.operator = t, r;
  }, e.prototype.subscribe = function(t, r, n) {
    var i = this, o = IS(t) ? t : new of.SafeSubscriber(t, r, n);
    return SS.errorContext(function() {
      var a = i, s = a.operator, c = a.source;
      o.add(s ? s.call(o, c) : c ? i._subscribe(o) : i._trySubscribe(o));
    }), o;
  }, e.prototype._trySubscribe = function(t) {
    try {
      return this._subscribe(t);
    } catch (r) {
      t.error(r);
    }
  }, e.prototype.forEach = function(t, r) {
    var n = this;
    return r = ph(r), new r(function(i, o) {
      var a = new of.SafeSubscriber({
        next: function(s) {
          try {
            t(s);
          } catch (c) {
            o(c), a.unsubscribe();
          }
        },
        error: o,
        complete: i
      });
      n.subscribe(a);
    });
  }, e.prototype._subscribe = function(t) {
    var r;
    return (r = this.source) === null || r === void 0 ? void 0 : r.subscribe(t);
  }, e.prototype[OS.observable] = function() {
    return this;
  }, e.prototype.pipe = function() {
    for (var t = [], r = 0; r < arguments.length; r++)
      t[r] = arguments[r];
    return wS.pipeFromArray(t)(this);
  }, e.prototype.toPromise = function(t) {
    var r = this;
    return t = ph(t), new t(function(n, i) {
      var o;
      r.subscribe(function(a) {
        return o = a;
      }, function(a) {
        return i(a);
      }, function() {
        return n(o);
      });
    });
  }, e.create = function(t) {
    return new e(t);
  }, e;
}();
pe.Observable = TS;
function ph(e) {
  var t;
  return (t = e ?? ES.config.Promise) !== null && t !== void 0 ? t : Promise;
}
function PS(e) {
  return e && gl.isFunction(e.next) && gl.isFunction(e.error) && gl.isFunction(e.complete);
}
function IS(e) {
  return e && e instanceof of.Subscriber || PS(e) && gS.isSubscription(e);
}
var Ht = {}, An = {}, x = {};
Object.defineProperty(x, "__esModule", { value: !0 });
x.operate = x.hasLift = void 0;
var AS = _e;
function sm(e) {
  return AS.isFunction(e == null ? void 0 : e.lift);
}
x.hasLift = sm;
function RS(e) {
  return function(t) {
    if (sm(t))
      return t.lift(function(r) {
        try {
          return e(r, this);
        } catch (n) {
          this.error(n);
        }
      });
    throw new TypeError("Unable to lift unknown Observable type");
  };
}
x.operate = RS;
var q = {}, CS = d && d.__extends || function() {
  var e = function(t, r) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var o in i)
        Object.prototype.hasOwnProperty.call(i, o) && (n[o] = i[o]);
    }, e(t, r);
  };
  return function(t, r) {
    if (typeof r != "function" && r !== null)
      throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
    e(t, r);
    function n() {
      this.constructor = t;
    }
    t.prototype = r === null ? Object.create(r) : (n.prototype = r.prototype, new n());
  };
}();
Object.defineProperty(q, "__esModule", { value: !0 });
q.OperatorSubscriber = q.createOperatorSubscriber = void 0;
var jS = In;
function NS(e, t, r, n, i) {
  return new cm(e, t, r, n, i);
}
q.createOperatorSubscriber = NS;
var cm = function(e) {
  CS(t, e);
  function t(r, n, i, o, a, s) {
    var c = e.call(this, r) || this;
    return c.onFinalize = a, c.shouldUnsubscribe = s, c._next = n ? function(u) {
      try {
        n(u);
      } catch (l) {
        r.error(l);
      }
    } : e.prototype._next, c._error = o ? function(u) {
      try {
        o(u);
      } catch (l) {
        r.error(l);
      } finally {
        this.unsubscribe();
      }
    } : e.prototype._error, c._complete = i ? function() {
      try {
        i();
      } catch (u) {
        r.error(u);
      } finally {
        this.unsubscribe();
      }
    } : e.prototype._complete, c;
  }
  return t.prototype.unsubscribe = function() {
    var r;
    if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
      var n = this.closed;
      e.prototype.unsubscribe.call(this), !n && ((r = this.onFinalize) === null || r === void 0 || r.call(this));
    }
  }, t;
}(jS.Subscriber);
q.OperatorSubscriber = cm;
Object.defineProperty(An, "__esModule", { value: !0 });
An.refCount = void 0;
var $S = x, MS = q;
function kS() {
  return $S.operate(function(e, t) {
    var r = null;
    e._refCount++;
    var n = MS.createOperatorSubscriber(t, void 0, void 0, void 0, function() {
      if (!e || e._refCount <= 0 || 0 < --e._refCount) {
        r = null;
        return;
      }
      var i = e._connection, o = r;
      r = null, i && (!o || i === o) && i.unsubscribe(), t.unsubscribe();
    });
    e.subscribe(n), n.closed || (r = e.connect());
  });
}
An.refCount = kS;
var DS = d && d.__extends || function() {
  var e = function(t, r) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var o in i)
        Object.prototype.hasOwnProperty.call(i, o) && (n[o] = i[o]);
    }, e(t, r);
  };
  return function(t, r) {
    if (typeof r != "function" && r !== null)
      throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
    e(t, r);
    function n() {
      this.constructor = t;
    }
    t.prototype = r === null ? Object.create(r) : (n.prototype = r.prototype, new n());
  };
}();
Object.defineProperty(Ht, "__esModule", { value: !0 });
Ht.ConnectableObservable = void 0;
var US = pe, mh = Ue, LS = An, FS = q, BS = x, xS = function(e) {
  DS(t, e);
  function t(r, n) {
    var i = e.call(this) || this;
    return i.source = r, i.subjectFactory = n, i._subject = null, i._refCount = 0, i._connection = null, BS.hasLift(r) && (i.lift = r.lift), i;
  }
  return t.prototype._subscribe = function(r) {
    return this.getSubject().subscribe(r);
  }, t.prototype.getSubject = function() {
    var r = this._subject;
    return (!r || r.isStopped) && (this._subject = this.subjectFactory()), this._subject;
  }, t.prototype._teardown = function() {
    this._refCount = 0;
    var r = this._connection;
    this._subject = this._connection = null, r == null || r.unsubscribe();
  }, t.prototype.connect = function() {
    var r = this, n = this._connection;
    if (!n) {
      n = this._connection = new mh.Subscription();
      var i = this.getSubject();
      n.add(this.source.subscribe(FS.createOperatorSubscriber(i, void 0, function() {
        r._teardown(), i.complete();
      }, function(o) {
        r._teardown(), i.error(o);
      }, function() {
        return r._teardown();
      }))), n.closed && (this._connection = null, n = mh.Subscription.EMPTY);
    }
    return n;
  }, t.prototype.refCount = function() {
    return LS.refCount()(this);
  }, t;
}(US.Observable);
Ht.ConnectableObservable = xS;
var is = {}, lm = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.performanceTimestampProvider = void 0, e.performanceTimestampProvider = {
    now: function() {
      return (e.performanceTimestampProvider.delegate || performance).now();
    },
    delegate: void 0
  };
})(lm);
var Hf = {};
(function(e) {
  var t = d && d.__read || function(i, o) {
    var a = typeof Symbol == "function" && i[Symbol.iterator];
    if (!a)
      return i;
    var s = a.call(i), c, u = [], l;
    try {
      for (; (o === void 0 || o-- > 0) && !(c = s.next()).done; )
        u.push(c.value);
    } catch (v) {
      l = { error: v };
    } finally {
      try {
        c && !c.done && (a = s.return) && a.call(s);
      } finally {
        if (l)
          throw l.error;
      }
    }
    return u;
  }, r = d && d.__spreadArray || function(i, o) {
    for (var a = 0, s = o.length, c = i.length; a < s; a++, c++)
      i[c] = o[a];
    return i;
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.animationFrameProvider = void 0;
  var n = Ue;
  e.animationFrameProvider = {
    schedule: function(i) {
      var o = requestAnimationFrame, a = cancelAnimationFrame, s = e.animationFrameProvider.delegate;
      s && (o = s.requestAnimationFrame, a = s.cancelAnimationFrame);
      var c = o(function(u) {
        a = void 0, i(u);
      });
      return new n.Subscription(function() {
        return a == null ? void 0 : a(c);
      });
    },
    requestAnimationFrame: function() {
      for (var i = [], o = 0; o < arguments.length; o++)
        i[o] = arguments[o];
      var a = e.animationFrameProvider.delegate;
      return ((a == null ? void 0 : a.requestAnimationFrame) || requestAnimationFrame).apply(void 0, r([], t(i)));
    },
    cancelAnimationFrame: function() {
      for (var i = [], o = 0; o < arguments.length; o++)
        i[o] = arguments[o];
      var a = e.animationFrameProvider.delegate;
      return ((a == null ? void 0 : a.cancelAnimationFrame) || cancelAnimationFrame).apply(void 0, r([], t(i)));
    },
    delegate: void 0
  };
})(Hf);
Object.defineProperty(is, "__esModule", { value: !0 });
is.animationFrames = void 0;
var WS = pe, VS = lm, yh = Hf;
function qS(e) {
  return e ? fm(e) : HS;
}
is.animationFrames = qS;
function fm(e) {
  return new WS.Observable(function(t) {
    var r = e || VS.performanceTimestampProvider, n = r.now(), i = 0, o = function() {
      t.closed || (i = yh.animationFrameProvider.requestAnimationFrame(function(a) {
        i = 0;
        var s = r.now();
        t.next({
          timestamp: e ? s : a,
          elapsed: s - n
        }), o();
      }));
    };
    return o(), function() {
      i && yh.animationFrameProvider.cancelAnimationFrame(i);
    };
  });
}
var HS = fm(), Me = {}, zi = {};
Object.defineProperty(zi, "__esModule", { value: !0 });
zi.ObjectUnsubscribedError = void 0;
var zS = Ir;
zi.ObjectUnsubscribedError = zS.createErrorClass(function(e) {
  return function() {
    e(this), this.name = "ObjectUnsubscribedError", this.message = "object unsubscribed";
  };
});
var dm = d && d.__extends || function() {
  var e = function(t, r) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var o in i)
        Object.prototype.hasOwnProperty.call(i, o) && (n[o] = i[o]);
    }, e(t, r);
  };
  return function(t, r) {
    if (typeof r != "function" && r !== null)
      throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
    e(t, r);
    function n() {
      this.constructor = t;
    }
    t.prototype = r === null ? Object.create(r) : (n.prototype = r.prototype, new n());
  };
}(), YS = d && d.__values || function(e) {
  var t = typeof Symbol == "function" && Symbol.iterator, r = t && e[t], n = 0;
  if (r)
    return r.call(e);
  if (e && typeof e.length == "number")
    return {
      next: function() {
        return e && n >= e.length && (e = void 0), { value: e && e[n++], done: !e };
      }
    };
  throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(Me, "__esModule", { value: !0 });
Me.AnonymousSubject = Me.Subject = void 0;
var bh = pe, af = Ue, KS = zi, GS = mr, Ol = Xr, hm = function(e) {
  dm(t, e);
  function t() {
    var r = e.call(this) || this;
    return r.closed = !1, r.currentObservers = null, r.observers = [], r.isStopped = !1, r.hasError = !1, r.thrownError = null, r;
  }
  return t.prototype.lift = function(r) {
    var n = new uf(this, this);
    return n.operator = r, n;
  }, t.prototype._throwIfClosed = function() {
    if (this.closed)
      throw new KS.ObjectUnsubscribedError();
  }, t.prototype.next = function(r) {
    var n = this;
    Ol.errorContext(function() {
      var i, o;
      if (n._throwIfClosed(), !n.isStopped) {
        n.currentObservers || (n.currentObservers = Array.from(n.observers));
        try {
          for (var a = YS(n.currentObservers), s = a.next(); !s.done; s = a.next()) {
            var c = s.value;
            c.next(r);
          }
        } catch (u) {
          i = { error: u };
        } finally {
          try {
            s && !s.done && (o = a.return) && o.call(a);
          } finally {
            if (i)
              throw i.error;
          }
        }
      }
    });
  }, t.prototype.error = function(r) {
    var n = this;
    Ol.errorContext(function() {
      if (n._throwIfClosed(), !n.isStopped) {
        n.hasError = n.isStopped = !0, n.thrownError = r;
        for (var i = n.observers; i.length; )
          i.shift().error(r);
      }
    });
  }, t.prototype.complete = function() {
    var r = this;
    Ol.errorContext(function() {
      if (r._throwIfClosed(), !r.isStopped) {
        r.isStopped = !0;
        for (var n = r.observers; n.length; )
          n.shift().complete();
      }
    });
  }, t.prototype.unsubscribe = function() {
    this.isStopped = this.closed = !0, this.observers = this.currentObservers = null;
  }, Object.defineProperty(t.prototype, "observed", {
    get: function() {
      var r;
      return ((r = this.observers) === null || r === void 0 ? void 0 : r.length) > 0;
    },
    enumerable: !1,
    configurable: !0
  }), t.prototype._trySubscribe = function(r) {
    return this._throwIfClosed(), e.prototype._trySubscribe.call(this, r);
  }, t.prototype._subscribe = function(r) {
    return this._throwIfClosed(), this._checkFinalizedStatuses(r), this._innerSubscribe(r);
  }, t.prototype._innerSubscribe = function(r) {
    var n = this, i = this, o = i.hasError, a = i.isStopped, s = i.observers;
    return o || a ? af.EMPTY_SUBSCRIPTION : (this.currentObservers = null, s.push(r), new af.Subscription(function() {
      n.currentObservers = null, GS.arrRemove(s, r);
    }));
  }, t.prototype._checkFinalizedStatuses = function(r) {
    var n = this, i = n.hasError, o = n.thrownError, a = n.isStopped;
    i ? r.error(o) : a && r.complete();
  }, t.prototype.asObservable = function() {
    var r = new bh.Observable();
    return r.source = this, r;
  }, t.create = function(r, n) {
    return new uf(r, n);
  }, t;
}(bh.Observable);
Me.Subject = hm;
var uf = function(e) {
  dm(t, e);
  function t(r, n) {
    var i = e.call(this) || this;
    return i.destination = r, i.source = n, i;
  }
  return t.prototype.next = function(r) {
    var n, i;
    (i = (n = this.destination) === null || n === void 0 ? void 0 : n.next) === null || i === void 0 || i.call(n, r);
  }, t.prototype.error = function(r) {
    var n, i;
    (i = (n = this.destination) === null || n === void 0 ? void 0 : n.error) === null || i === void 0 || i.call(n, r);
  }, t.prototype.complete = function() {
    var r, n;
    (n = (r = this.destination) === null || r === void 0 ? void 0 : r.complete) === null || n === void 0 || n.call(r);
  }, t.prototype._subscribe = function(r) {
    var n, i;
    return (i = (n = this.source) === null || n === void 0 ? void 0 : n.subscribe(r)) !== null && i !== void 0 ? i : af.EMPTY_SUBSCRIPTION;
  }, t;
}(hm);
Me.AnonymousSubject = uf;
var Yi = {}, ZS = d && d.__extends || function() {
  var e = function(t, r) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var o in i)
        Object.prototype.hasOwnProperty.call(i, o) && (n[o] = i[o]);
    }, e(t, r);
  };
  return function(t, r) {
    if (typeof r != "function" && r !== null)
      throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
    e(t, r);
    function n() {
      this.constructor = t;
    }
    t.prototype = r === null ? Object.create(r) : (n.prototype = r.prototype, new n());
  };
}();
Object.defineProperty(Yi, "__esModule", { value: !0 });
Yi.BehaviorSubject = void 0;
var QS = Me, JS = function(e) {
  ZS(t, e);
  function t(r) {
    var n = e.call(this) || this;
    return n._value = r, n;
  }
  return Object.defineProperty(t.prototype, "value", {
    get: function() {
      return this.getValue();
    },
    enumerable: !1,
    configurable: !0
  }), t.prototype._subscribe = function(r) {
    var n = e.prototype._subscribe.call(this, r);
    return !n.closed && r.next(this._value), n;
  }, t.prototype.getValue = function() {
    var r = this, n = r.hasError, i = r.thrownError, o = r._value;
    if (n)
      throw i;
    return this._throwIfClosed(), o;
  }, t.prototype.next = function(r) {
    e.prototype.next.call(this, this._value = r);
  }, t;
}(QS.Subject);
Yi.BehaviorSubject = JS;
var Rn = {}, os = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.dateTimestampProvider = void 0, e.dateTimestampProvider = {
    now: function() {
      return (e.dateTimestampProvider.delegate || Date).now();
    },
    delegate: void 0
  };
})(os);
var XS = d && d.__extends || function() {
  var e = function(t, r) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var o in i)
        Object.prototype.hasOwnProperty.call(i, o) && (n[o] = i[o]);
    }, e(t, r);
  };
  return function(t, r) {
    if (typeof r != "function" && r !== null)
      throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
    e(t, r);
    function n() {
      this.constructor = t;
    }
    t.prototype = r === null ? Object.create(r) : (n.prototype = r.prototype, new n());
  };
}();
Object.defineProperty(Rn, "__esModule", { value: !0 });
Rn.ReplaySubject = void 0;
var eT = Me, rT = os, tT = function(e) {
  XS(t, e);
  function t(r, n, i) {
    r === void 0 && (r = 1 / 0), n === void 0 && (n = 1 / 0), i === void 0 && (i = rT.dateTimestampProvider);
    var o = e.call(this) || this;
    return o._bufferSize = r, o._windowTime = n, o._timestampProvider = i, o._buffer = [], o._infiniteTimeWindow = !0, o._infiniteTimeWindow = n === 1 / 0, o._bufferSize = Math.max(1, r), o._windowTime = Math.max(1, n), o;
  }
  return t.prototype.next = function(r) {
    var n = this, i = n.isStopped, o = n._buffer, a = n._infiniteTimeWindow, s = n._timestampProvider, c = n._windowTime;
    i || (o.push(r), !a && o.push(s.now() + c)), this._trimBuffer(), e.prototype.next.call(this, r);
  }, t.prototype._subscribe = function(r) {
    this._throwIfClosed(), this._trimBuffer();
    for (var n = this._innerSubscribe(r), i = this, o = i._infiniteTimeWindow, a = i._buffer, s = a.slice(), c = 0; c < s.length && !r.closed; c += o ? 1 : 2)
      r.next(s[c]);
    return this._checkFinalizedStatuses(r), n;
  }, t.prototype._trimBuffer = function() {
    var r = this, n = r._bufferSize, i = r._timestampProvider, o = r._buffer, a = r._infiniteTimeWindow, s = (a ? 1 : 2) * n;
    if (n < 1 / 0 && s < o.length && o.splice(0, o.length - s), !a) {
      for (var c = i.now(), u = 0, l = 1; l < o.length && o[l] <= c; l += 2)
        u = l;
      u && o.splice(0, u + 1);
    }
  }, t;
}(eT.Subject);
Rn.ReplaySubject = tT;
var Cn = {}, nT = d && d.__extends || function() {
  var e = function(t, r) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var o in i)
        Object.prototype.hasOwnProperty.call(i, o) && (n[o] = i[o]);
    }, e(t, r);
  };
  return function(t, r) {
    if (typeof r != "function" && r !== null)
      throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
    e(t, r);
    function n() {
      this.constructor = t;
    }
    t.prototype = r === null ? Object.create(r) : (n.prototype = r.prototype, new n());
  };
}();
Object.defineProperty(Cn, "__esModule", { value: !0 });
Cn.AsyncSubject = void 0;
var iT = Me, oT = function(e) {
  nT(t, e);
  function t() {
    var r = e !== null && e.apply(this, arguments) || this;
    return r._value = null, r._hasValue = !1, r._isComplete = !1, r;
  }
  return t.prototype._checkFinalizedStatuses = function(r) {
    var n = this, i = n.hasError, o = n._hasValue, a = n._value, s = n.thrownError, c = n.isStopped, u = n._isComplete;
    i ? r.error(s) : (c || u) && (o && r.next(a), r.complete());
  }, t.prototype.next = function(r) {
    this.isStopped || (this._value = r, this._hasValue = !0);
  }, t.prototype.complete = function() {
    var r = this, n = r._hasValue, i = r._value, o = r._isComplete;
    o || (this._isComplete = !0, n && e.prototype.next.call(this, i), e.prototype.complete.call(this));
  }, t;
}(iT.Subject);
Cn.AsyncSubject = oT;
var vm = {}, as = {}, ct = {}, us = {}, aT = d && d.__extends || function() {
  var e = function(t, r) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var o in i)
        Object.prototype.hasOwnProperty.call(i, o) && (n[o] = i[o]);
    }, e(t, r);
  };
  return function(t, r) {
    if (typeof r != "function" && r !== null)
      throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
    e(t, r);
    function n() {
      this.constructor = t;
    }
    t.prototype = r === null ? Object.create(r) : (n.prototype = r.prototype, new n());
  };
}();
Object.defineProperty(us, "__esModule", { value: !0 });
us.Action = void 0;
var uT = Ue, sT = function(e) {
  aT(t, e);
  function t(r, n) {
    return e.call(this) || this;
  }
  return t.prototype.schedule = function(r, n) {
    return this;
  }, t;
}(uT.Subscription);
us.Action = sT;
var _m = {};
(function(e) {
  var t = d && d.__read || function(n, i) {
    var o = typeof Symbol == "function" && n[Symbol.iterator];
    if (!o)
      return n;
    var a = o.call(n), s, c = [], u;
    try {
      for (; (i === void 0 || i-- > 0) && !(s = a.next()).done; )
        c.push(s.value);
    } catch (l) {
      u = { error: l };
    } finally {
      try {
        s && !s.done && (o = a.return) && o.call(a);
      } finally {
        if (u)
          throw u.error;
      }
    }
    return c;
  }, r = d && d.__spreadArray || function(n, i) {
    for (var o = 0, a = i.length, s = n.length; o < a; o++, s++)
      n[s] = i[o];
    return n;
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.intervalProvider = void 0, e.intervalProvider = {
    setInterval: function(n, i) {
      for (var o = [], a = 2; a < arguments.length; a++)
        o[a - 2] = arguments[a];
      var s = e.intervalProvider.delegate;
      return s != null && s.setInterval ? s.setInterval.apply(s, r([n, i], t(o))) : setInterval.apply(void 0, r([n, i], t(o)));
    },
    clearInterval: function(n) {
      var i = e.intervalProvider.delegate;
      return ((i == null ? void 0 : i.clearInterval) || clearInterval)(n);
    },
    delegate: void 0
  };
})(_m);
var cT = d && d.__extends || function() {
  var e = function(t, r) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var o in i)
        Object.prototype.hasOwnProperty.call(i, o) && (n[o] = i[o]);
    }, e(t, r);
  };
  return function(t, r) {
    if (typeof r != "function" && r !== null)
      throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
    e(t, r);
    function n() {
      this.constructor = t;
    }
    t.prototype = r === null ? Object.create(r) : (n.prototype = r.prototype, new n());
  };
}();
Object.defineProperty(ct, "__esModule", { value: !0 });
ct.AsyncAction = void 0;
var lT = us, gh = _m, fT = mr, dT = function(e) {
  cT(t, e);
  function t(r, n) {
    var i = e.call(this, r, n) || this;
    return i.scheduler = r, i.work = n, i.pending = !1, i;
  }
  return t.prototype.schedule = function(r, n) {
    var i;
    if (n === void 0 && (n = 0), this.closed)
      return this;
    this.state = r;
    var o = this.id, a = this.scheduler;
    return o != null && (this.id = this.recycleAsyncId(a, o, n)), this.pending = !0, this.delay = n, this.id = (i = this.id) !== null && i !== void 0 ? i : this.requestAsyncId(a, this.id, n), this;
  }, t.prototype.requestAsyncId = function(r, n, i) {
    return i === void 0 && (i = 0), gh.intervalProvider.setInterval(r.flush.bind(r, this), i);
  }, t.prototype.recycleAsyncId = function(r, n, i) {
    if (i === void 0 && (i = 0), i != null && this.delay === i && this.pending === !1)
      return n;
    n != null && gh.intervalProvider.clearInterval(n);
  }, t.prototype.execute = function(r, n) {
    if (this.closed)
      return new Error("executing a cancelled action");
    this.pending = !1;
    var i = this._execute(r, n);
    if (i)
      return i;
    this.pending === !1 && this.id != null && (this.id = this.recycleAsyncId(this.scheduler, this.id, null));
  }, t.prototype._execute = function(r, n) {
    var i = !1, o;
    try {
      this.work(r);
    } catch (a) {
      i = !0, o = a || new Error("Scheduled action threw falsy error");
    }
    if (i)
      return this.unsubscribe(), o;
  }, t.prototype.unsubscribe = function() {
    if (!this.closed) {
      var r = this, n = r.id, i = r.scheduler, o = i.actions;
      this.work = this.state = this.scheduler = null, this.pending = !1, fT.arrRemove(o, this), n != null && (this.id = this.recycleAsyncId(i, n, null)), this.delay = null, e.prototype.unsubscribe.call(this);
    }
  }, t;
}(lT.Action);
ct.AsyncAction = dT;
var pm = {}, pn = {};
Object.defineProperty(pn, "__esModule", { value: !0 });
pn.TestTools = pn.Immediate = void 0;
var hT = 1, wl, $u = {};
function Oh(e) {
  return e in $u ? (delete $u[e], !0) : !1;
}
pn.Immediate = {
  setImmediate: function(e) {
    var t = hT++;
    return $u[t] = !0, wl || (wl = Promise.resolve()), wl.then(function() {
      return Oh(t) && e();
    }), t;
  },
  clearImmediate: function(e) {
    Oh(e);
  }
};
pn.TestTools = {
  pending: function() {
    return Object.keys($u).length;
  }
};
(function(e) {
  var t = d && d.__read || function(a, s) {
    var c = typeof Symbol == "function" && a[Symbol.iterator];
    if (!c)
      return a;
    var u = c.call(a), l, v = [], y;
    try {
      for (; (s === void 0 || s-- > 0) && !(l = u.next()).done; )
        v.push(l.value);
    } catch (g) {
      y = { error: g };
    } finally {
      try {
        l && !l.done && (c = u.return) && c.call(u);
      } finally {
        if (y)
          throw y.error;
      }
    }
    return v;
  }, r = d && d.__spreadArray || function(a, s) {
    for (var c = 0, u = s.length, l = a.length; c < u; c++, l++)
      a[l] = s[c];
    return a;
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.immediateProvider = void 0;
  var n = pn, i = n.Immediate.setImmediate, o = n.Immediate.clearImmediate;
  e.immediateProvider = {
    setImmediate: function() {
      for (var a = [], s = 0; s < arguments.length; s++)
        a[s] = arguments[s];
      var c = e.immediateProvider.delegate;
      return ((c == null ? void 0 : c.setImmediate) || i).apply(void 0, r([], t(a)));
    },
    clearImmediate: function(a) {
      var s = e.immediateProvider.delegate;
      return ((s == null ? void 0 : s.clearImmediate) || o)(a);
    },
    delegate: void 0
  };
})(pm);
var vT = d && d.__extends || function() {
  var e = function(t, r) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var o in i)
        Object.prototype.hasOwnProperty.call(i, o) && (n[o] = i[o]);
    }, e(t, r);
  };
  return function(t, r) {
    if (typeof r != "function" && r !== null)
      throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
    e(t, r);
    function n() {
      this.constructor = t;
    }
    t.prototype = r === null ? Object.create(r) : (n.prototype = r.prototype, new n());
  };
}();
Object.defineProperty(as, "__esModule", { value: !0 });
as.AsapAction = void 0;
var _T = ct, wh = pm, pT = function(e) {
  vT(t, e);
  function t(r, n) {
    var i = e.call(this, r, n) || this;
    return i.scheduler = r, i.work = n, i;
  }
  return t.prototype.requestAsyncId = function(r, n, i) {
    return i === void 0 && (i = 0), i !== null && i > 0 ? e.prototype.requestAsyncId.call(this, r, n, i) : (r.actions.push(this), r._scheduled || (r._scheduled = wh.immediateProvider.setImmediate(r.flush.bind(r, void 0))));
  }, t.prototype.recycleAsyncId = function(r, n, i) {
    var o;
    if (i === void 0 && (i = 0), i != null ? i > 0 : this.delay > 0)
      return e.prototype.recycleAsyncId.call(this, r, n, i);
    var a = r.actions;
    n != null && ((o = a[a.length - 1]) === null || o === void 0 ? void 0 : o.id) !== n && (wh.immediateProvider.clearImmediate(n), r._scheduled = void 0);
  }, t;
}(_T.AsyncAction);
as.AsapAction = pT;
var ss = {}, lt = {}, Ki = {};
Object.defineProperty(Ki, "__esModule", { value: !0 });
Ki.Scheduler = void 0;
var mT = os, yT = function() {
  function e(t, r) {
    r === void 0 && (r = e.now), this.schedulerActionCtor = t, this.now = r;
  }
  return e.prototype.schedule = function(t, r, n) {
    return r === void 0 && (r = 0), new this.schedulerActionCtor(this, t).schedule(n, r);
  }, e.now = mT.dateTimestampProvider.now, e;
}();
Ki.Scheduler = yT;
var bT = d && d.__extends || function() {
  var e = function(t, r) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var o in i)
        Object.prototype.hasOwnProperty.call(i, o) && (n[o] = i[o]);
    }, e(t, r);
  };
  return function(t, r) {
    if (typeof r != "function" && r !== null)
      throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
    e(t, r);
    function n() {
      this.constructor = t;
    }
    t.prototype = r === null ? Object.create(r) : (n.prototype = r.prototype, new n());
  };
}();
Object.defineProperty(lt, "__esModule", { value: !0 });
lt.AsyncScheduler = void 0;
var Eh = Ki, gT = function(e) {
  bT(t, e);
  function t(r, n) {
    n === void 0 && (n = Eh.Scheduler.now);
    var i = e.call(this, r, n) || this;
    return i.actions = [], i._active = !1, i;
  }
  return t.prototype.flush = function(r) {
    var n = this.actions;
    if (this._active) {
      n.push(r);
      return;
    }
    var i;
    this._active = !0;
    do
      if (i = r.execute(r.state, r.delay))
        break;
    while (r = n.shift());
    if (this._active = !1, i) {
      for (; r = n.shift(); )
        r.unsubscribe();
      throw i;
    }
  }, t;
}(Eh.Scheduler);
lt.AsyncScheduler = gT;
var OT = d && d.__extends || function() {
  var e = function(t, r) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var o in i)
        Object.prototype.hasOwnProperty.call(i, o) && (n[o] = i[o]);
    }, e(t, r);
  };
  return function(t, r) {
    if (typeof r != "function" && r !== null)
      throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
    e(t, r);
    function n() {
      this.constructor = t;
    }
    t.prototype = r === null ? Object.create(r) : (n.prototype = r.prototype, new n());
  };
}();
Object.defineProperty(ss, "__esModule", { value: !0 });
ss.AsapScheduler = void 0;
var wT = lt, ET = function(e) {
  OT(t, e);
  function t() {
    return e !== null && e.apply(this, arguments) || this;
  }
  return t.prototype.flush = function(r) {
    this._active = !0;
    var n = this._scheduled;
    this._scheduled = void 0;
    var i = this.actions, o;
    r = r || i.shift();
    do
      if (o = r.execute(r.state, r.delay))
        break;
    while ((r = i[0]) && r.id === n && i.shift());
    if (this._active = !1, o) {
      for (; (r = i[0]) && r.id === n && i.shift(); )
        r.unsubscribe();
      throw o;
    }
  }, t;
}(wT.AsyncScheduler);
ss.AsapScheduler = ET;
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.asap = e.asapScheduler = void 0;
  var t = as, r = ss;
  e.asapScheduler = new r.AsapScheduler(t.AsapAction), e.asap = e.asapScheduler;
})(vm);
var Xe = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.async = e.asyncScheduler = void 0;
  var t = ct, r = lt;
  e.asyncScheduler = new r.AsyncScheduler(t.AsyncAction), e.async = e.asyncScheduler;
})(Xe);
var mm = {}, cs = {}, ST = d && d.__extends || function() {
  var e = function(t, r) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var o in i)
        Object.prototype.hasOwnProperty.call(i, o) && (n[o] = i[o]);
    }, e(t, r);
  };
  return function(t, r) {
    if (typeof r != "function" && r !== null)
      throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
    e(t, r);
    function n() {
      this.constructor = t;
    }
    t.prototype = r === null ? Object.create(r) : (n.prototype = r.prototype, new n());
  };
}();
Object.defineProperty(cs, "__esModule", { value: !0 });
cs.QueueAction = void 0;
var TT = ct, PT = function(e) {
  ST(t, e);
  function t(r, n) {
    var i = e.call(this, r, n) || this;
    return i.scheduler = r, i.work = n, i;
  }
  return t.prototype.schedule = function(r, n) {
    return n === void 0 && (n = 0), n > 0 ? e.prototype.schedule.call(this, r, n) : (this.delay = n, this.state = r, this.scheduler.flush(this), this);
  }, t.prototype.execute = function(r, n) {
    return n > 0 || this.closed ? e.prototype.execute.call(this, r, n) : this._execute(r, n);
  }, t.prototype.requestAsyncId = function(r, n, i) {
    return i === void 0 && (i = 0), i != null && i > 0 || i == null && this.delay > 0 ? e.prototype.requestAsyncId.call(this, r, n, i) : (r.flush(this), 0);
  }, t;
}(TT.AsyncAction);
cs.QueueAction = PT;
var ls = {}, IT = d && d.__extends || function() {
  var e = function(t, r) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var o in i)
        Object.prototype.hasOwnProperty.call(i, o) && (n[o] = i[o]);
    }, e(t, r);
  };
  return function(t, r) {
    if (typeof r != "function" && r !== null)
      throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
    e(t, r);
    function n() {
      this.constructor = t;
    }
    t.prototype = r === null ? Object.create(r) : (n.prototype = r.prototype, new n());
  };
}();
Object.defineProperty(ls, "__esModule", { value: !0 });
ls.QueueScheduler = void 0;
var AT = lt, RT = function(e) {
  IT(t, e);
  function t() {
    return e !== null && e.apply(this, arguments) || this;
  }
  return t;
}(AT.AsyncScheduler);
ls.QueueScheduler = RT;
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.queue = e.queueScheduler = void 0;
  var t = cs, r = ls;
  e.queueScheduler = new r.QueueScheduler(t.QueueAction), e.queue = e.queueScheduler;
})(mm);
var ym = {}, fs = {}, CT = d && d.__extends || function() {
  var e = function(t, r) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var o in i)
        Object.prototype.hasOwnProperty.call(i, o) && (n[o] = i[o]);
    }, e(t, r);
  };
  return function(t, r) {
    if (typeof r != "function" && r !== null)
      throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
    e(t, r);
    function n() {
      this.constructor = t;
    }
    t.prototype = r === null ? Object.create(r) : (n.prototype = r.prototype, new n());
  };
}();
Object.defineProperty(fs, "__esModule", { value: !0 });
fs.AnimationFrameAction = void 0;
var jT = ct, Sh = Hf, NT = function(e) {
  CT(t, e);
  function t(r, n) {
    var i = e.call(this, r, n) || this;
    return i.scheduler = r, i.work = n, i;
  }
  return t.prototype.requestAsyncId = function(r, n, i) {
    return i === void 0 && (i = 0), i !== null && i > 0 ? e.prototype.requestAsyncId.call(this, r, n, i) : (r.actions.push(this), r._scheduled || (r._scheduled = Sh.animationFrameProvider.requestAnimationFrame(function() {
      return r.flush(void 0);
    })));
  }, t.prototype.recycleAsyncId = function(r, n, i) {
    var o;
    if (i === void 0 && (i = 0), i != null ? i > 0 : this.delay > 0)
      return e.prototype.recycleAsyncId.call(this, r, n, i);
    var a = r.actions;
    n != null && ((o = a[a.length - 1]) === null || o === void 0 ? void 0 : o.id) !== n && (Sh.animationFrameProvider.cancelAnimationFrame(n), r._scheduled = void 0);
  }, t;
}(jT.AsyncAction);
fs.AnimationFrameAction = NT;
var ds = {}, $T = d && d.__extends || function() {
  var e = function(t, r) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var o in i)
        Object.prototype.hasOwnProperty.call(i, o) && (n[o] = i[o]);
    }, e(t, r);
  };
  return function(t, r) {
    if (typeof r != "function" && r !== null)
      throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
    e(t, r);
    function n() {
      this.constructor = t;
    }
    t.prototype = r === null ? Object.create(r) : (n.prototype = r.prototype, new n());
  };
}();
Object.defineProperty(ds, "__esModule", { value: !0 });
ds.AnimationFrameScheduler = void 0;
var MT = lt, kT = function(e) {
  $T(t, e);
  function t() {
    return e !== null && e.apply(this, arguments) || this;
  }
  return t.prototype.flush = function(r) {
    this._active = !0;
    var n = this._scheduled;
    this._scheduled = void 0;
    var i = this.actions, o;
    r = r || i.shift();
    do
      if (o = r.execute(r.state, r.delay))
        break;
    while ((r = i[0]) && r.id === n && i.shift());
    if (this._active = !1, o) {
      for (; (r = i[0]) && r.id === n && i.shift(); )
        r.unsubscribe();
      throw o;
    }
  }, t;
}(MT.AsyncScheduler);
ds.AnimationFrameScheduler = kT;
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.animationFrame = e.animationFrameScheduler = void 0;
  var t = fs, r = ds;
  e.animationFrameScheduler = new r.AnimationFrameScheduler(t.AnimationFrameAction), e.animationFrame = e.animationFrameScheduler;
})(ym);
var mn = {}, bm = d && d.__extends || function() {
  var e = function(t, r) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var o in i)
        Object.prototype.hasOwnProperty.call(i, o) && (n[o] = i[o]);
    }, e(t, r);
  };
  return function(t, r) {
    if (typeof r != "function" && r !== null)
      throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
    e(t, r);
    function n() {
      this.constructor = t;
    }
    t.prototype = r === null ? Object.create(r) : (n.prototype = r.prototype, new n());
  };
}();
Object.defineProperty(mn, "__esModule", { value: !0 });
mn.VirtualAction = mn.VirtualTimeScheduler = void 0;
var DT = ct, UT = Ue, LT = lt, FT = function(e) {
  bm(t, e);
  function t(r, n) {
    r === void 0 && (r = gm), n === void 0 && (n = 1 / 0);
    var i = e.call(this, r, function() {
      return i.frame;
    }) || this;
    return i.maxFrames = n, i.frame = 0, i.index = -1, i;
  }
  return t.prototype.flush = function() {
    for (var r = this, n = r.actions, i = r.maxFrames, o, a; (a = n[0]) && a.delay <= i && (n.shift(), this.frame = a.delay, !(o = a.execute(a.state, a.delay))); )
      ;
    if (o) {
      for (; a = n.shift(); )
        a.unsubscribe();
      throw o;
    }
  }, t.frameTimeFactor = 10, t;
}(LT.AsyncScheduler);
mn.VirtualTimeScheduler = FT;
var gm = function(e) {
  bm(t, e);
  function t(r, n, i) {
    i === void 0 && (i = r.index += 1);
    var o = e.call(this, r, n) || this;
    return o.scheduler = r, o.work = n, o.index = i, o.active = !0, o.index = r.index = i, o;
  }
  return t.prototype.schedule = function(r, n) {
    if (n === void 0 && (n = 0), Number.isFinite(n)) {
      if (!this.id)
        return e.prototype.schedule.call(this, r, n);
      this.active = !1;
      var i = new t(this.scheduler, this.work);
      return this.add(i), i.schedule(r, n);
    } else
      return UT.Subscription.EMPTY;
  }, t.prototype.requestAsyncId = function(r, n, i) {
    i === void 0 && (i = 0), this.delay = r.frame + i;
    var o = r.actions;
    return o.push(this), o.sort(t.sortActions), 1;
  }, t.prototype.recycleAsyncId = function(r, n, i) {
  }, t.prototype._execute = function(r, n) {
    if (this.active === !0)
      return e.prototype._execute.call(this, r, n);
  }, t.sortActions = function(r, n) {
    return r.delay === n.delay ? r.index === n.index ? 0 : r.index > n.index ? 1 : -1 : r.delay > n.delay ? 1 : -1;
  }, t;
}(DT.AsyncAction);
mn.VirtualAction = gm;
var hs = {}, pr = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.empty = e.EMPTY = void 0;
  var t = pe;
  e.EMPTY = new t.Observable(function(i) {
    return i.complete();
  });
  function r(i) {
    return i ? n(i) : e.EMPTY;
  }
  e.empty = r;
  function n(i) {
    return new t.Observable(function(o) {
      return i.schedule(function() {
        return o.complete();
      });
    });
  }
})(pr);
var jn = {}, De = {}, zt = {};
Object.defineProperty(zt, "__esModule", { value: !0 });
zt.isScheduler = void 0;
var BT = _e;
function xT(e) {
  return e && BT.isFunction(e.schedule);
}
zt.isScheduler = xT;
Object.defineProperty(De, "__esModule", { value: !0 });
De.popNumber = De.popScheduler = De.popResultSelector = void 0;
var WT = _e, VT = zt;
function zf(e) {
  return e[e.length - 1];
}
function qT(e) {
  return WT.isFunction(zf(e)) ? e.pop() : void 0;
}
De.popResultSelector = qT;
function HT(e) {
  return VT.isScheduler(zf(e)) ? e.pop() : void 0;
}
De.popScheduler = HT;
function zT(e, t) {
  return typeof zf(e) == "number" ? e.pop() : t;
}
De.popNumber = zT;
var yr = {}, Gi = {}, vs = {}, Y = {}, Nn = {};
Object.defineProperty(Nn, "__esModule", { value: !0 });
Nn.isArrayLike = void 0;
Nn.isArrayLike = function(e) {
  return e && typeof e.length == "number" && typeof e != "function";
};
var Zi = {};
Object.defineProperty(Zi, "__esModule", { value: !0 });
Zi.isPromise = void 0;
var YT = _e;
function KT(e) {
  return YT.isFunction(e == null ? void 0 : e.then);
}
Zi.isPromise = KT;
var Qi = {};
Object.defineProperty(Qi, "__esModule", { value: !0 });
Qi.isInteropObservable = void 0;
var GT = qt, ZT = _e;
function QT(e) {
  return ZT.isFunction(e[GT.observable]);
}
Qi.isInteropObservable = QT;
var Ji = {};
Object.defineProperty(Ji, "__esModule", { value: !0 });
Ji.isAsyncIterable = void 0;
var JT = _e;
function XT(e) {
  return Symbol.asyncIterator && JT.isFunction(e == null ? void 0 : e[Symbol.asyncIterator]);
}
Ji.isAsyncIterable = XT;
var Xi = {};
Object.defineProperty(Xi, "__esModule", { value: !0 });
Xi.createInvalidObservableTypeError = void 0;
function eP(e) {
  return new TypeError("You provided " + (e !== null && typeof e == "object" ? "an invalid object" : "'" + e + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
}
Xi.createInvalidObservableTypeError = eP;
var eo = {}, Dt = {};
Object.defineProperty(Dt, "__esModule", { value: !0 });
Dt.iterator = Dt.getSymbolIterator = void 0;
function Om() {
  return typeof Symbol != "function" || !Symbol.iterator ? "@@iterator" : Symbol.iterator;
}
Dt.getSymbolIterator = Om;
Dt.iterator = Om();
Object.defineProperty(eo, "__esModule", { value: !0 });
eo.isIterable = void 0;
var rP = Dt, tP = _e;
function nP(e) {
  return tP.isFunction(e == null ? void 0 : e[rP.iterator]);
}
eo.isIterable = nP;
var et = {}, iP = d && d.__generator || function(e, t) {
  var r = { label: 0, sent: function() {
    if (o[0] & 1)
      throw o[1];
    return o[1];
  }, trys: [], ops: [] }, n, i, o, a;
  return a = { next: s(0), throw: s(1), return: s(2) }, typeof Symbol == "function" && (a[Symbol.iterator] = function() {
    return this;
  }), a;
  function s(u) {
    return function(l) {
      return c([u, l]);
    };
  }
  function c(u) {
    if (n)
      throw new TypeError("Generator is already executing.");
    for (; r; )
      try {
        if (n = 1, i && (o = u[0] & 2 ? i.return : u[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, u[1])).done)
          return o;
        switch (i = 0, o && (u = [u[0] & 2, o.value]), u[0]) {
          case 0:
          case 1:
            o = u;
            break;
          case 4:
            return r.label++, { value: u[1], done: !1 };
          case 5:
            r.label++, i = u[1], u = [0];
            continue;
          case 7:
            u = r.ops.pop(), r.trys.pop();
            continue;
          default:
            if (o = r.trys, !(o = o.length > 0 && o[o.length - 1]) && (u[0] === 6 || u[0] === 2)) {
              r = 0;
              continue;
            }
            if (u[0] === 3 && (!o || u[1] > o[0] && u[1] < o[3])) {
              r.label = u[1];
              break;
            }
            if (u[0] === 6 && r.label < o[1]) {
              r.label = o[1], o = u;
              break;
            }
            if (o && r.label < o[2]) {
              r.label = o[2], r.ops.push(u);
              break;
            }
            o[2] && r.ops.pop(), r.trys.pop();
            continue;
        }
        u = t.call(e, r);
      } catch (l) {
        u = [6, l], i = 0;
      } finally {
        n = o = 0;
      }
    if (u[0] & 5)
      throw u[1];
    return { value: u[0] ? u[1] : void 0, done: !0 };
  }
}, ln = d && d.__await || function(e) {
  return this instanceof ln ? (this.v = e, this) : new ln(e);
}, oP = d && d.__asyncGenerator || function(e, t, r) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var n = r.apply(e, t || []), i, o = [];
  return i = {}, a("next"), a("throw"), a("return"), i[Symbol.asyncIterator] = function() {
    return this;
  }, i;
  function a(y) {
    n[y] && (i[y] = function(g) {
      return new Promise(function(E, S) {
        o.push([y, g, E, S]) > 1 || s(y, g);
      });
    });
  }
  function s(y, g) {
    try {
      c(n[y](g));
    } catch (E) {
      v(o[0][3], E);
    }
  }
  function c(y) {
    y.value instanceof ln ? Promise.resolve(y.value.v).then(u, l) : v(o[0][2], y);
  }
  function u(y) {
    s("next", y);
  }
  function l(y) {
    s("throw", y);
  }
  function v(y, g) {
    y(g), o.shift(), o.length && s(o[0][0], o[0][1]);
  }
};
Object.defineProperty(et, "__esModule", { value: !0 });
et.isReadableStreamLike = et.readableStreamLikeToAsyncGenerator = void 0;
var aP = _e;
function uP(e) {
  return oP(this, arguments, function() {
    var r, n, i, o;
    return iP(this, function(a) {
      switch (a.label) {
        case 0:
          r = e.getReader(), a.label = 1;
        case 1:
          a.trys.push([1, , 9, 10]), a.label = 2;
        case 2:
          return [4, ln(r.read())];
        case 3:
          return n = a.sent(), i = n.value, o = n.done, o ? [4, ln(void 0)] : [3, 5];
        case 4:
          return [2, a.sent()];
        case 5:
          return [4, ln(i)];
        case 6:
          return [4, a.sent()];
        case 7:
          return a.sent(), [3, 2];
        case 8:
          return [3, 10];
        case 9:
          return r.releaseLock(), [7];
        case 10:
          return [2];
      }
    });
  });
}
et.readableStreamLikeToAsyncGenerator = uP;
function sP(e) {
  return aP.isFunction(e == null ? void 0 : e.getReader);
}
et.isReadableStreamLike = sP;
var cP = d && d.__awaiter || function(e, t, r, n) {
  function i(o) {
    return o instanceof r ? o : new r(function(a) {
      a(o);
    });
  }
  return new (r || (r = Promise))(function(o, a) {
    function s(l) {
      try {
        u(n.next(l));
      } catch (v) {
        a(v);
      }
    }
    function c(l) {
      try {
        u(n.throw(l));
      } catch (v) {
        a(v);
      }
    }
    function u(l) {
      l.done ? o(l.value) : i(l.value).then(s, c);
    }
    u((n = n.apply(e, t || [])).next());
  });
}, lP = d && d.__generator || function(e, t) {
  var r = { label: 0, sent: function() {
    if (o[0] & 1)
      throw o[1];
    return o[1];
  }, trys: [], ops: [] }, n, i, o, a;
  return a = { next: s(0), throw: s(1), return: s(2) }, typeof Symbol == "function" && (a[Symbol.iterator] = function() {
    return this;
  }), a;
  function s(u) {
    return function(l) {
      return c([u, l]);
    };
  }
  function c(u) {
    if (n)
      throw new TypeError("Generator is already executing.");
    for (; r; )
      try {
        if (n = 1, i && (o = u[0] & 2 ? i.return : u[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, u[1])).done)
          return o;
        switch (i = 0, o && (u = [u[0] & 2, o.value]), u[0]) {
          case 0:
          case 1:
            o = u;
            break;
          case 4:
            return r.label++, { value: u[1], done: !1 };
          case 5:
            r.label++, i = u[1], u = [0];
            continue;
          case 7:
            u = r.ops.pop(), r.trys.pop();
            continue;
          default:
            if (o = r.trys, !(o = o.length > 0 && o[o.length - 1]) && (u[0] === 6 || u[0] === 2)) {
              r = 0;
              continue;
            }
            if (u[0] === 3 && (!o || u[1] > o[0] && u[1] < o[3])) {
              r.label = u[1];
              break;
            }
            if (u[0] === 6 && r.label < o[1]) {
              r.label = o[1], o = u;
              break;
            }
            if (o && r.label < o[2]) {
              r.label = o[2], r.ops.push(u);
              break;
            }
            o[2] && r.ops.pop(), r.trys.pop();
            continue;
        }
        u = t.call(e, r);
      } catch (l) {
        u = [6, l], i = 0;
      } finally {
        n = o = 0;
      }
    if (u[0] & 5)
      throw u[1];
    return { value: u[0] ? u[1] : void 0, done: !0 };
  }
}, fP = d && d.__asyncValues || function(e) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var t = e[Symbol.asyncIterator], r;
  return t ? t.call(e) : (e = typeof sf == "function" ? sf(e) : e[Symbol.iterator](), r = {}, n("next"), n("throw"), n("return"), r[Symbol.asyncIterator] = function() {
    return this;
  }, r);
  function n(o) {
    r[o] = e[o] && function(a) {
      return new Promise(function(s, c) {
        a = e[o](a), i(s, c, a.done, a.value);
      });
    };
  }
  function i(o, a, s, c) {
    Promise.resolve(c).then(function(u) {
      o({ value: u, done: s });
    }, a);
  }
}, sf = d && d.__values || function(e) {
  var t = typeof Symbol == "function" && Symbol.iterator, r = t && e[t], n = 0;
  if (r)
    return r.call(e);
  if (e && typeof e.length == "number")
    return {
      next: function() {
        return e && n >= e.length && (e = void 0), { value: e && e[n++], done: !e };
      }
    };
  throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(Y, "__esModule", { value: !0 });
Y.fromReadableStreamLike = Y.fromAsyncIterable = Y.fromIterable = Y.fromPromise = Y.fromArrayLike = Y.fromInteropObservable = Y.innerFrom = void 0;
var dP = Nn, hP = Zi, $n = pe, vP = Qi, _P = Ji, pP = Xi, mP = eo, wm = et, yP = _e, bP = Hi, gP = qt;
function OP(e) {
  if (e instanceof $n.Observable)
    return e;
  if (e != null) {
    if (vP.isInteropObservable(e))
      return Em(e);
    if (dP.isArrayLike(e))
      return Sm(e);
    if (hP.isPromise(e))
      return Tm(e);
    if (_P.isAsyncIterable(e))
      return Yf(e);
    if (mP.isIterable(e))
      return Pm(e);
    if (wm.isReadableStreamLike(e))
      return Im(e);
  }
  throw pP.createInvalidObservableTypeError(e);
}
Y.innerFrom = OP;
function Em(e) {
  return new $n.Observable(function(t) {
    var r = e[gP.observable]();
    if (yP.isFunction(r.subscribe))
      return r.subscribe(t);
    throw new TypeError("Provided object does not correctly implement Symbol.observable");
  });
}
Y.fromInteropObservable = Em;
function Sm(e) {
  return new $n.Observable(function(t) {
    for (var r = 0; r < e.length && !t.closed; r++)
      t.next(e[r]);
    t.complete();
  });
}
Y.fromArrayLike = Sm;
function Tm(e) {
  return new $n.Observable(function(t) {
    e.then(function(r) {
      t.closed || (t.next(r), t.complete());
    }, function(r) {
      return t.error(r);
    }).then(null, bP.reportUnhandledError);
  });
}
Y.fromPromise = Tm;
function Pm(e) {
  return new $n.Observable(function(t) {
    var r, n;
    try {
      for (var i = sf(e), o = i.next(); !o.done; o = i.next()) {
        var a = o.value;
        if (t.next(a), t.closed)
          return;
      }
    } catch (s) {
      r = { error: s };
    } finally {
      try {
        o && !o.done && (n = i.return) && n.call(i);
      } finally {
        if (r)
          throw r.error;
      }
    }
    t.complete();
  });
}
Y.fromIterable = Pm;
function Yf(e) {
  return new $n.Observable(function(t) {
    wP(e, t).catch(function(r) {
      return t.error(r);
    });
  });
}
Y.fromAsyncIterable = Yf;
function Im(e) {
  return Yf(wm.readableStreamLikeToAsyncGenerator(e));
}
Y.fromReadableStreamLike = Im;
function wP(e, t) {
  var r, n, i, o;
  return cP(this, void 0, void 0, function() {
    var a, s;
    return lP(this, function(c) {
      switch (c.label) {
        case 0:
          c.trys.push([0, 5, 6, 11]), r = fP(e), c.label = 1;
        case 1:
          return [4, r.next()];
        case 2:
          if (n = c.sent(), !!n.done)
            return [3, 4];
          if (a = n.value, t.next(a), t.closed)
            return [2];
          c.label = 3;
        case 3:
          return [3, 1];
        case 4:
          return [3, 11];
        case 5:
          return s = c.sent(), i = { error: s }, [3, 11];
        case 6:
          return c.trys.push([6, , 9, 10]), n && !n.done && (o = r.return) ? [4, o.call(r)] : [3, 8];
        case 7:
          c.sent(), c.label = 8;
        case 8:
          return [3, 10];
        case 9:
          if (i)
            throw i.error;
          return [7];
        case 10:
          return [7];
        case 11:
          return t.complete(), [2];
      }
    });
  });
}
var ft = {}, br = {};
Object.defineProperty(br, "__esModule", { value: !0 });
br.executeSchedule = void 0;
function EP(e, t, r, n, i) {
  n === void 0 && (n = 0), i === void 0 && (i = !1);
  var o = t.schedule(function() {
    r(), i ? e.add(this.schedule(null, n)) : this.unsubscribe();
  }, n);
  if (e.add(o), !i)
    return o;
}
br.executeSchedule = EP;
Object.defineProperty(ft, "__esModule", { value: !0 });
ft.observeOn = void 0;
var El = br, SP = x, TP = q;
function PP(e, t) {
  return t === void 0 && (t = 0), SP.operate(function(r, n) {
    r.subscribe(TP.createOperatorSubscriber(n, function(i) {
      return El.executeSchedule(n, e, function() {
        return n.next(i);
      }, t);
    }, function() {
      return El.executeSchedule(n, e, function() {
        return n.complete();
      }, t);
    }, function(i) {
      return El.executeSchedule(n, e, function() {
        return n.error(i);
      }, t);
    }));
  });
}
ft.observeOn = PP;
var dt = {};
Object.defineProperty(dt, "__esModule", { value: !0 });
dt.subscribeOn = void 0;
var IP = x;
function AP(e, t) {
  return t === void 0 && (t = 0), IP.operate(function(r, n) {
    n.add(e.schedule(function() {
      return r.subscribe(n);
    }, t));
  });
}
dt.subscribeOn = AP;
Object.defineProperty(vs, "__esModule", { value: !0 });
vs.scheduleObservable = void 0;
var RP = Y, CP = ft, jP = dt;
function NP(e, t) {
  return RP.innerFrom(e).pipe(jP.subscribeOn(t), CP.observeOn(t));
}
vs.scheduleObservable = NP;
var _s = {};
Object.defineProperty(_s, "__esModule", { value: !0 });
_s.schedulePromise = void 0;
var $P = Y, MP = ft, kP = dt;
function DP(e, t) {
  return $P.innerFrom(e).pipe(kP.subscribeOn(t), MP.observeOn(t));
}
_s.schedulePromise = DP;
var ps = {};
Object.defineProperty(ps, "__esModule", { value: !0 });
ps.scheduleArray = void 0;
var UP = pe;
function LP(e, t) {
  return new UP.Observable(function(r) {
    var n = 0;
    return t.schedule(function() {
      n === e.length ? r.complete() : (r.next(e[n++]), r.closed || this.schedule());
    });
  });
}
ps.scheduleArray = LP;
var ro = {};
Object.defineProperty(ro, "__esModule", { value: !0 });
ro.scheduleIterable = void 0;
var FP = pe, BP = Dt, xP = _e, Th = br;
function WP(e, t) {
  return new FP.Observable(function(r) {
    var n;
    return Th.executeSchedule(r, t, function() {
      n = e[BP.iterator](), Th.executeSchedule(r, t, function() {
        var i, o, a;
        try {
          i = n.next(), o = i.value, a = i.done;
        } catch (s) {
          r.error(s);
          return;
        }
        a ? r.complete() : r.next(o);
      }, 0, !0);
    }), function() {
      return xP.isFunction(n == null ? void 0 : n.return) && n.return();
    };
  });
}
ro.scheduleIterable = WP;
var to = {};
Object.defineProperty(to, "__esModule", { value: !0 });
to.scheduleAsyncIterable = void 0;
var VP = pe, Ph = br;
function qP(e, t) {
  if (!e)
    throw new Error("Iterable cannot be null");
  return new VP.Observable(function(r) {
    Ph.executeSchedule(r, t, function() {
      var n = e[Symbol.asyncIterator]();
      Ph.executeSchedule(r, t, function() {
        n.next().then(function(i) {
          i.done ? r.complete() : r.next(i.value);
        });
      }, 0, !0);
    });
  });
}
to.scheduleAsyncIterable = qP;
var ms = {};
Object.defineProperty(ms, "__esModule", { value: !0 });
ms.scheduleReadableStreamLike = void 0;
var HP = to, zP = et;
function YP(e, t) {
  return HP.scheduleAsyncIterable(zP.readableStreamLikeToAsyncGenerator(e), t);
}
ms.scheduleReadableStreamLike = YP;
Object.defineProperty(Gi, "__esModule", { value: !0 });
Gi.scheduled = void 0;
var KP = vs, GP = _s, ZP = ps, QP = ro, JP = to, XP = Qi, eI = Zi, rI = Nn, tI = eo, nI = Ji, iI = Xi, oI = et, aI = ms;
function uI(e, t) {
  if (e != null) {
    if (XP.isInteropObservable(e))
      return KP.scheduleObservable(e, t);
    if (rI.isArrayLike(e))
      return ZP.scheduleArray(e, t);
    if (eI.isPromise(e))
      return GP.schedulePromise(e, t);
    if (nI.isAsyncIterable(e))
      return JP.scheduleAsyncIterable(e, t);
    if (tI.isIterable(e))
      return QP.scheduleIterable(e, t);
    if (oI.isReadableStreamLike(e))
      return aI.scheduleReadableStreamLike(e, t);
  }
  throw iI.createInvalidObservableTypeError(e);
}
Gi.scheduled = uI;
Object.defineProperty(yr, "__esModule", { value: !0 });
yr.from = void 0;
var sI = Gi, cI = Y;
function lI(e, t) {
  return t ? sI.scheduled(e, t) : cI.innerFrom(e);
}
yr.from = lI;
Object.defineProperty(jn, "__esModule", { value: !0 });
jn.of = void 0;
var fI = De, dI = yr;
function hI() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e[t] = arguments[t];
  var r = fI.popScheduler(e);
  return dI.from(e, r);
}
jn.of = hI;
var no = {};
Object.defineProperty(no, "__esModule", { value: !0 });
no.throwError = void 0;
var vI = pe, _I = _e;
function pI(e, t) {
  var r = _I.isFunction(e) ? e : function() {
    return e;
  }, n = function(i) {
    return i.error(r());
  };
  return new vI.Observable(t ? function(i) {
    return t.schedule(n, 0, i);
  } : n);
}
no.throwError = pI;
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.observeNotification = e.Notification = e.NotificationKind = void 0;
  var t = pr, r = jn, n = no, i = _e;
  (function(s) {
    s.NEXT = "N", s.ERROR = "E", s.COMPLETE = "C";
  })(e.NotificationKind || (e.NotificationKind = {}));
  var o = function() {
    function s(c, u, l) {
      this.kind = c, this.value = u, this.error = l, this.hasValue = c === "N";
    }
    return s.prototype.observe = function(c) {
      return a(this, c);
    }, s.prototype.do = function(c, u, l) {
      var v = this, y = v.kind, g = v.value, E = v.error;
      return y === "N" ? c == null ? void 0 : c(g) : y === "E" ? u == null ? void 0 : u(E) : l == null ? void 0 : l();
    }, s.prototype.accept = function(c, u, l) {
      var v;
      return i.isFunction((v = c) === null || v === void 0 ? void 0 : v.next) ? this.observe(c) : this.do(c, u, l);
    }, s.prototype.toObservable = function() {
      var c = this, u = c.kind, l = c.value, v = c.error, y = u === "N" ? r.of(l) : u === "E" ? n.throwError(function() {
        return v;
      }) : u === "C" ? t.EMPTY : 0;
      if (!y)
        throw new TypeError("Unexpected notification kind " + u);
      return y;
    }, s.createNext = function(c) {
      return new s("N", c);
    }, s.createError = function(c) {
      return new s("E", void 0, c);
    }, s.createComplete = function() {
      return s.completeNotification;
    }, s.completeNotification = new s("C"), s;
  }();
  e.Notification = o;
  function a(s, c) {
    var u, l, v, y = s, g = y.kind, E = y.value, S = y.error;
    if (typeof g != "string")
      throw new TypeError('Invalid notification, missing "kind"');
    g === "N" ? (u = c.next) === null || u === void 0 || u.call(c, E) : g === "E" ? (l = c.error) === null || l === void 0 || l.call(c, S) : (v = c.complete) === null || v === void 0 || v.call(c);
  }
  e.observeNotification = a;
})(hs);
var ys = {};
Object.defineProperty(ys, "__esModule", { value: !0 });
ys.isObservable = void 0;
var mI = pe, Ih = _e;
function yI(e) {
  return !!e && (e instanceof mI.Observable || Ih.isFunction(e.lift) && Ih.isFunction(e.subscribe));
}
ys.isObservable = yI;
var bs = {}, Ar = {};
Object.defineProperty(Ar, "__esModule", { value: !0 });
Ar.EmptyError = void 0;
var bI = Ir;
Ar.EmptyError = bI.createErrorClass(function(e) {
  return function() {
    e(this), this.name = "EmptyError", this.message = "no elements in sequence";
  };
});
Object.defineProperty(bs, "__esModule", { value: !0 });
bs.lastValueFrom = void 0;
var gI = Ar;
function OI(e, t) {
  var r = typeof t == "object";
  return new Promise(function(n, i) {
    var o = !1, a;
    e.subscribe({
      next: function(s) {
        a = s, o = !0;
      },
      error: i,
      complete: function() {
        o ? n(a) : r ? n(t.defaultValue) : i(new gI.EmptyError());
      }
    });
  });
}
bs.lastValueFrom = OI;
var gs = {};
Object.defineProperty(gs, "__esModule", { value: !0 });
gs.firstValueFrom = void 0;
var wI = Ar, EI = In;
function SI(e, t) {
  var r = typeof t == "object";
  return new Promise(function(n, i) {
    var o = new EI.SafeSubscriber({
      next: function(a) {
        n(a), o.unsubscribe();
      },
      error: i,
      complete: function() {
        r ? n(t.defaultValue) : i(new wI.EmptyError());
      }
    });
    e.subscribe(o);
  });
}
gs.firstValueFrom = SI;
var io = {};
Object.defineProperty(io, "__esModule", { value: !0 });
io.ArgumentOutOfRangeError = void 0;
var TI = Ir;
io.ArgumentOutOfRangeError = TI.createErrorClass(function(e) {
  return function() {
    e(this), this.name = "ArgumentOutOfRangeError", this.message = "argument out of range";
  };
});
var oo = {};
Object.defineProperty(oo, "__esModule", { value: !0 });
oo.NotFoundError = void 0;
var PI = Ir;
oo.NotFoundError = PI.createErrorClass(function(e) {
  return function(r) {
    e(this), this.name = "NotFoundError", this.message = r;
  };
});
var ao = {};
Object.defineProperty(ao, "__esModule", { value: !0 });
ao.SequenceError = void 0;
var II = Ir;
ao.SequenceError = II.createErrorClass(function(e) {
  return function(r) {
    e(this), this.name = "SequenceError", this.message = r;
  };
});
var ji = {}, Mn = {};
Object.defineProperty(Mn, "__esModule", { value: !0 });
Mn.isValidDate = void 0;
function AI(e) {
  return e instanceof Date && !isNaN(e);
}
Mn.isValidDate = AI;
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.timeout = e.TimeoutError = void 0;
  var t = Xe, r = Mn, n = x, i = Y, o = Ir, a = q, s = br;
  e.TimeoutError = o.createErrorClass(function(l) {
    return function(y) {
      y === void 0 && (y = null), l(this), this.message = "Timeout has occurred", this.name = "TimeoutError", this.info = y;
    };
  });
  function c(l, v) {
    var y = r.isValidDate(l) ? { first: l } : typeof l == "number" ? { each: l } : l, g = y.first, E = y.each, S = y.with, C = S === void 0 ? u : S, R = y.scheduler, $ = R === void 0 ? v ?? t.asyncScheduler : R, U = y.meta, D = U === void 0 ? null : U;
    if (g == null && E == null)
      throw new TypeError("No timeout provided.");
    return n.operate(function(F, K) {
      var X, oe, de = null, Ie = 0, ge = function(Re) {
        oe = s.executeSchedule(K, $, function() {
          try {
            X.unsubscribe(), i.innerFrom(C({
              meta: D,
              lastValue: de,
              seen: Ie
            })).subscribe(K);
          } catch (he) {
            K.error(he);
          }
        }, Re);
      };
      X = F.subscribe(a.createOperatorSubscriber(K, function(Re) {
        oe == null || oe.unsubscribe(), Ie++, K.next(de = Re), E > 0 && ge(E);
      }, void 0, void 0, function() {
        oe != null && oe.closed || oe == null || oe.unsubscribe(), de = null;
      })), !Ie && ge(g != null ? typeof g == "number" ? g : +g - $.now() : E);
    });
  }
  e.timeout = c;
  function u(l) {
    throw new e.TimeoutError(l);
  }
})(ji);
var Os = {}, uo = {}, Rr = {}, gr = {};
Object.defineProperty(gr, "__esModule", { value: !0 });
gr.map = void 0;
var RI = x, CI = q;
function jI(e, t) {
  return RI.operate(function(r, n) {
    var i = 0;
    r.subscribe(CI.createOperatorSubscriber(n, function(o) {
      n.next(e.call(t, o, i++));
    }));
  });
}
gr.map = jI;
var NI = d && d.__read || function(e, t) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r)
    return e;
  var n = r.call(e), i, o = [], a;
  try {
    for (; (t === void 0 || t-- > 0) && !(i = n.next()).done; )
      o.push(i.value);
  } catch (s) {
    a = { error: s };
  } finally {
    try {
      i && !i.done && (r = n.return) && r.call(n);
    } finally {
      if (a)
        throw a.error;
    }
  }
  return o;
}, $I = d && d.__spreadArray || function(e, t) {
  for (var r = 0, n = t.length, i = e.length; r < n; r++, i++)
    e[i] = t[r];
  return e;
};
Object.defineProperty(Rr, "__esModule", { value: !0 });
Rr.mapOneOrManyArgs = void 0;
var MI = gr, kI = Array.isArray;
function DI(e, t) {
  return kI(t) ? e.apply(void 0, $I([], NI(t))) : e(t);
}
function UI(e) {
  return MI.map(function(t) {
    return DI(e, t);
  });
}
Rr.mapOneOrManyArgs = UI;
var LI = d && d.__read || function(e, t) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r)
    return e;
  var n = r.call(e), i, o = [], a;
  try {
    for (; (t === void 0 || t-- > 0) && !(i = n.next()).done; )
      o.push(i.value);
  } catch (s) {
    a = { error: s };
  } finally {
    try {
      i && !i.done && (r = n.return) && r.call(n);
    } finally {
      if (a)
        throw a.error;
    }
  }
  return o;
}, Ah = d && d.__spreadArray || function(e, t) {
  for (var r = 0, n = t.length, i = e.length; r < n; r++, i++)
    e[i] = t[r];
  return e;
};
Object.defineProperty(uo, "__esModule", { value: !0 });
uo.bindCallbackInternals = void 0;
var FI = zt, BI = pe, xI = dt, WI = Rr, VI = ft, qI = Cn;
function cf(e, t, r, n) {
  if (r)
    if (FI.isScheduler(r))
      n = r;
    else
      return function() {
        for (var i = [], o = 0; o < arguments.length; o++)
          i[o] = arguments[o];
        return cf(e, t, n).apply(this, i).pipe(WI.mapOneOrManyArgs(r));
      };
  return n ? function() {
    for (var i = [], o = 0; o < arguments.length; o++)
      i[o] = arguments[o];
    return cf(e, t).apply(this, i).pipe(xI.subscribeOn(n), VI.observeOn(n));
  } : function() {
    for (var i = this, o = [], a = 0; a < arguments.length; a++)
      o[a] = arguments[a];
    var s = new qI.AsyncSubject(), c = !0;
    return new BI.Observable(function(u) {
      var l = s.subscribe(u);
      if (c) {
        c = !1;
        var v = !1, y = !1;
        t.apply(i, Ah(Ah([], LI(o)), [
          function() {
            for (var g = [], E = 0; E < arguments.length; E++)
              g[E] = arguments[E];
            if (e) {
              var S = g.shift();
              if (S != null) {
                s.error(S);
                return;
              }
            }
            s.next(1 < g.length ? g : g[0]), y = !0, v && s.complete();
          }
        ])), y && s.complete(), v = !0;
      }
      return l;
    });
  };
}
uo.bindCallbackInternals = cf;
Object.defineProperty(Os, "__esModule", { value: !0 });
Os.bindCallback = void 0;
var HI = uo;
function zI(e, t, r) {
  return HI.bindCallbackInternals(!1, e, t, r);
}
Os.bindCallback = zI;
var ws = {};
Object.defineProperty(ws, "__esModule", { value: !0 });
ws.bindNodeCallback = void 0;
var YI = uo;
function KI(e, t, r) {
  return YI.bindCallbackInternals(!0, e, t, r);
}
ws.bindNodeCallback = KI;
var rt = {}, so = {};
Object.defineProperty(so, "__esModule", { value: !0 });
so.argsArgArrayOrObject = void 0;
var GI = Array.isArray, ZI = Object.getPrototypeOf, QI = Object.prototype, JI = Object.keys;
function XI(e) {
  if (e.length === 1) {
    var t = e[0];
    if (GI(t))
      return { args: t, keys: null };
    if (eA(t)) {
      var r = JI(t);
      return {
        args: r.map(function(n) {
          return t[n];
        }),
        keys: r
      };
    }
  }
  return { args: e, keys: null };
}
so.argsArgArrayOrObject = XI;
function eA(e) {
  return e && typeof e == "object" && ZI(e) === QI;
}
var co = {};
Object.defineProperty(co, "__esModule", { value: !0 });
co.createObject = void 0;
function rA(e, t) {
  return e.reduce(function(r, n, i) {
    return r[n] = t[i], r;
  }, {});
}
co.createObject = rA;
Object.defineProperty(rt, "__esModule", { value: !0 });
rt.combineLatestInit = rt.combineLatest = void 0;
var tA = pe, nA = so, Am = yr, Rm = Be, iA = Rr, Rh = De, oA = co, aA = q, uA = br;
function sA() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e[t] = arguments[t];
  var r = Rh.popScheduler(e), n = Rh.popResultSelector(e), i = nA.argsArgArrayOrObject(e), o = i.args, a = i.keys;
  if (o.length === 0)
    return Am.from([], r);
  var s = new tA.Observable(Cm(o, r, a ? function(c) {
    return oA.createObject(a, c);
  } : Rm.identity));
  return n ? s.pipe(iA.mapOneOrManyArgs(n)) : s;
}
rt.combineLatest = sA;
function Cm(e, t, r) {
  return r === void 0 && (r = Rm.identity), function(n) {
    Ch(t, function() {
      for (var i = e.length, o = new Array(i), a = i, s = i, c = function(l) {
        Ch(t, function() {
          var v = Am.from(e[l], t), y = !1;
          v.subscribe(aA.createOperatorSubscriber(n, function(g) {
            o[l] = g, y || (y = !0, s--), s || n.next(r(o.slice()));
          }, function() {
            --a || n.complete();
          }));
        }, n);
      }, u = 0; u < i; u++)
        c(u);
    }, n);
  };
}
rt.combineLatestInit = Cm;
function Ch(e, t, r) {
  e ? uA.executeSchedule(r, e, t) : t();
}
var Yt = {}, Kt = {}, ht = {}, lr = {}, kn = {};
Object.defineProperty(kn, "__esModule", { value: !0 });
kn.mergeInternals = void 0;
var cA = Y, lA = br, jh = q;
function fA(e, t, r, n, i, o, a, s) {
  var c = [], u = 0, l = 0, v = !1, y = function() {
    v && !c.length && !u && t.complete();
  }, g = function(S) {
    return u < n ? E(S) : c.push(S);
  }, E = function(S) {
    o && t.next(S), u++;
    var C = !1;
    cA.innerFrom(r(S, l++)).subscribe(jh.createOperatorSubscriber(t, function(R) {
      i == null || i(R), o ? g(R) : t.next(R);
    }, function() {
      C = !0;
    }, void 0, function() {
      if (C)
        try {
          u--;
          for (var R = function() {
            var $ = c.shift();
            a ? lA.executeSchedule(t, a, function() {
              return E($);
            }) : E($);
          }; c.length && u < n; )
            R();
          y();
        } catch ($) {
          t.error($);
        }
    }));
  };
  return e.subscribe(jh.createOperatorSubscriber(t, g, function() {
    v = !0, y();
  })), function() {
    s == null || s();
  };
}
kn.mergeInternals = fA;
Object.defineProperty(lr, "__esModule", { value: !0 });
lr.mergeMap = void 0;
var dA = gr, hA = Y, vA = x, _A = kn, pA = _e;
function jm(e, t, r) {
  return r === void 0 && (r = 1 / 0), pA.isFunction(t) ? jm(function(n, i) {
    return dA.map(function(o, a) {
      return t(n, o, i, a);
    })(hA.innerFrom(e(n, i)));
  }, r) : (typeof t == "number" && (r = t), vA.operate(function(n, i) {
    return _A.mergeInternals(n, i, e, r);
  }));
}
lr.mergeMap = jm;
Object.defineProperty(ht, "__esModule", { value: !0 });
ht.mergeAll = void 0;
var mA = lr, yA = Be;
function bA(e) {
  return e === void 0 && (e = 1 / 0), mA.mergeMap(yA.identity, e);
}
ht.mergeAll = bA;
Object.defineProperty(Kt, "__esModule", { value: !0 });
Kt.concatAll = void 0;
var gA = ht;
function OA() {
  return gA.mergeAll(1);
}
Kt.concatAll = OA;
Object.defineProperty(Yt, "__esModule", { value: !0 });
Yt.concat = void 0;
var wA = Kt, EA = De, SA = yr;
function TA() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e[t] = arguments[t];
  return wA.concatAll()(SA.from(e, EA.popScheduler(e)));
}
Yt.concat = TA;
var Es = {}, Gt = {};
Object.defineProperty(Gt, "__esModule", { value: !0 });
Gt.defer = void 0;
var PA = pe, IA = Y;
function AA(e) {
  return new PA.Observable(function(t) {
    IA.innerFrom(e()).subscribe(t);
  });
}
Gt.defer = AA;
Object.defineProperty(Es, "__esModule", { value: !0 });
Es.connectable = void 0;
var RA = Me, CA = pe, jA = Gt, NA = {
  connector: function() {
    return new RA.Subject();
  },
  resetOnDisconnect: !0
};
function $A(e, t) {
  t === void 0 && (t = NA);
  var r = null, n = t.connector, i = t.resetOnDisconnect, o = i === void 0 ? !0 : i, a = n(), s = new CA.Observable(function(c) {
    return a.subscribe(c);
  });
  return s.connect = function() {
    return (!r || r.closed) && (r = jA.defer(function() {
      return e;
    }).subscribe(a), o && r.add(function() {
      return a = n();
    })), r;
  }, s;
}
Es.connectable = $A;
var Ss = {};
Object.defineProperty(Ss, "__esModule", { value: !0 });
Ss.forkJoin = void 0;
var MA = pe, kA = so, DA = Y, UA = De, LA = q, FA = Rr, BA = co;
function xA() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e[t] = arguments[t];
  var r = UA.popResultSelector(e), n = kA.argsArgArrayOrObject(e), i = n.args, o = n.keys, a = new MA.Observable(function(s) {
    var c = i.length;
    if (!c) {
      s.complete();
      return;
    }
    for (var u = new Array(c), l = c, v = c, y = function(E) {
      var S = !1;
      DA.innerFrom(i[E]).subscribe(LA.createOperatorSubscriber(s, function(C) {
        S || (S = !0, v--), u[E] = C;
      }, function() {
        return l--;
      }, void 0, function() {
        (!l || !S) && (v || s.next(o ? BA.createObject(o, u) : u), s.complete());
      }));
    }, g = 0; g < c; g++)
      y(g);
  });
  return r ? a.pipe(FA.mapOneOrManyArgs(r)) : a;
}
Ss.forkJoin = xA;
var Ts = {}, WA = d && d.__read || function(e, t) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r)
    return e;
  var n = r.call(e), i, o = [], a;
  try {
    for (; (t === void 0 || t-- > 0) && !(i = n.next()).done; )
      o.push(i.value);
  } catch (s) {
    a = { error: s };
  } finally {
    try {
      i && !i.done && (r = n.return) && r.call(n);
    } finally {
      if (a)
        throw a.error;
    }
  }
  return o;
};
Object.defineProperty(Ts, "__esModule", { value: !0 });
Ts.fromEvent = void 0;
var VA = Y, qA = pe, HA = lr, zA = Nn, Ut = _e, YA = Rr, KA = ["addListener", "removeListener"], GA = ["addEventListener", "removeEventListener"], ZA = ["on", "off"];
function lf(e, t, r, n) {
  if (Ut.isFunction(r) && (n = r, r = void 0), n)
    return lf(e, t, r).pipe(YA.mapOneOrManyArgs(n));
  var i = WA(XA(e) ? GA.map(function(s) {
    return function(c) {
      return e[s](t, c, r);
    };
  }) : QA(e) ? KA.map(Nh(e, t)) : JA(e) ? ZA.map(Nh(e, t)) : [], 2), o = i[0], a = i[1];
  if (!o && zA.isArrayLike(e))
    return HA.mergeMap(function(s) {
      return lf(s, t, r);
    })(VA.innerFrom(e));
  if (!o)
    throw new TypeError("Invalid event target");
  return new qA.Observable(function(s) {
    var c = function() {
      for (var u = [], l = 0; l < arguments.length; l++)
        u[l] = arguments[l];
      return s.next(1 < u.length ? u : u[0]);
    };
    return o(c), function() {
      return a(c);
    };
  });
}
Ts.fromEvent = lf;
function Nh(e, t) {
  return function(r) {
    return function(n) {
      return e[r](t, n);
    };
  };
}
function QA(e) {
  return Ut.isFunction(e.addListener) && Ut.isFunction(e.removeListener);
}
function JA(e) {
  return Ut.isFunction(e.on) && Ut.isFunction(e.off);
}
function XA(e) {
  return Ut.isFunction(e.addEventListener) && Ut.isFunction(e.removeEventListener);
}
var Ps = {};
Object.defineProperty(Ps, "__esModule", { value: !0 });
Ps.fromEventPattern = void 0;
var eR = pe, rR = _e, tR = Rr;
function Nm(e, t, r) {
  return r ? Nm(e, t).pipe(tR.mapOneOrManyArgs(r)) : new eR.Observable(function(n) {
    var i = function() {
      for (var a = [], s = 0; s < arguments.length; s++)
        a[s] = arguments[s];
      return n.next(a.length === 1 ? a[0] : a);
    }, o = e(i);
    return rR.isFunction(t) ? function() {
      return t(i, o);
    } : void 0;
  });
}
Ps.fromEventPattern = Nm;
var Is = {}, nR = d && d.__generator || function(e, t) {
  var r = { label: 0, sent: function() {
    if (o[0] & 1)
      throw o[1];
    return o[1];
  }, trys: [], ops: [] }, n, i, o, a;
  return a = { next: s(0), throw: s(1), return: s(2) }, typeof Symbol == "function" && (a[Symbol.iterator] = function() {
    return this;
  }), a;
  function s(u) {
    return function(l) {
      return c([u, l]);
    };
  }
  function c(u) {
    if (n)
      throw new TypeError("Generator is already executing.");
    for (; r; )
      try {
        if (n = 1, i && (o = u[0] & 2 ? i.return : u[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, u[1])).done)
          return o;
        switch (i = 0, o && (u = [u[0] & 2, o.value]), u[0]) {
          case 0:
          case 1:
            o = u;
            break;
          case 4:
            return r.label++, { value: u[1], done: !1 };
          case 5:
            r.label++, i = u[1], u = [0];
            continue;
          case 7:
            u = r.ops.pop(), r.trys.pop();
            continue;
          default:
            if (o = r.trys, !(o = o.length > 0 && o[o.length - 1]) && (u[0] === 6 || u[0] === 2)) {
              r = 0;
              continue;
            }
            if (u[0] === 3 && (!o || u[1] > o[0] && u[1] < o[3])) {
              r.label = u[1];
              break;
            }
            if (u[0] === 6 && r.label < o[1]) {
              r.label = o[1], o = u;
              break;
            }
            if (o && r.label < o[2]) {
              r.label = o[2], r.ops.push(u);
              break;
            }
            o[2] && r.ops.pop(), r.trys.pop();
            continue;
        }
        u = t.call(e, r);
      } catch (l) {
        u = [6, l], i = 0;
      } finally {
        n = o = 0;
      }
    if (u[0] & 5)
      throw u[1];
    return { value: u[0] ? u[1] : void 0, done: !0 };
  }
};
Object.defineProperty(Is, "__esModule", { value: !0 });
Is.generate = void 0;
var $h = Be, iR = zt, oR = Gt, aR = ro;
function uR(e, t, r, n, i) {
  var o, a, s, c;
  arguments.length === 1 ? (o = e, c = o.initialState, t = o.condition, r = o.iterate, a = o.resultSelector, s = a === void 0 ? $h.identity : a, i = o.scheduler) : (c = e, !n || iR.isScheduler(n) ? (s = $h.identity, i = n) : s = n);
  function u() {
    var l;
    return nR(this, function(v) {
      switch (v.label) {
        case 0:
          l = c, v.label = 1;
        case 1:
          return !t || t(l) ? [4, s(l)] : [3, 4];
        case 2:
          v.sent(), v.label = 3;
        case 3:
          return l = r(l), [3, 1];
        case 4:
          return [2];
      }
    });
  }
  return oR.defer(i ? function() {
    return aR.scheduleIterable(u(), i);
  } : u);
}
Is.generate = uR;
var As = {};
Object.defineProperty(As, "__esModule", { value: !0 });
As.iif = void 0;
var sR = Gt;
function cR(e, t, r) {
  return sR.defer(function() {
    return e() ? t : r;
  });
}
As.iif = cR;
var lo = {}, Cr = {};
Object.defineProperty(Cr, "__esModule", { value: !0 });
Cr.timer = void 0;
var lR = pe, fR = Xe, dR = zt, hR = Mn;
function vR(e, t, r) {
  e === void 0 && (e = 0), r === void 0 && (r = fR.async);
  var n = -1;
  return t != null && (dR.isScheduler(t) ? r = t : n = t), new lR.Observable(function(i) {
    var o = hR.isValidDate(e) ? +e - r.now() : e;
    o < 0 && (o = 0);
    var a = 0;
    return r.schedule(function() {
      i.closed || (i.next(a++), 0 <= n ? this.schedule(void 0, n) : i.complete());
    }, o);
  });
}
Cr.timer = vR;
Object.defineProperty(lo, "__esModule", { value: !0 });
lo.interval = void 0;
var _R = Xe, pR = Cr;
function mR(e, t) {
  return e === void 0 && (e = 0), t === void 0 && (t = _R.asyncScheduler), e < 0 && (e = 0), pR.timer(e, e, t);
}
lo.interval = mR;
var Rs = {};
Object.defineProperty(Rs, "__esModule", { value: !0 });
Rs.merge = void 0;
var yR = ht, bR = Y, gR = pr, Mh = De, OR = yr;
function wR() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e[t] = arguments[t];
  var r = Mh.popScheduler(e), n = Mh.popNumber(e, 1 / 0), i = e;
  return i.length ? i.length === 1 ? bR.innerFrom(i[0]) : yR.mergeAll(n)(OR.from(i, r)) : gR.EMPTY;
}
Rs.merge = wR;
var ff = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.never = e.NEVER = void 0;
  var t = pe, r = Fe;
  e.NEVER = new t.Observable(r.noop);
  function n() {
    return e.NEVER;
  }
  e.never = n;
})(ff);
var fo = {}, jr = {};
Object.defineProperty(jr, "__esModule", { value: !0 });
jr.argsOrArgArray = void 0;
var ER = Array.isArray;
function SR(e) {
  return e.length === 1 && ER(e[0]) ? e[0] : e;
}
jr.argsOrArgArray = SR;
Object.defineProperty(fo, "__esModule", { value: !0 });
fo.onErrorResumeNext = void 0;
var TR = pe, PR = jr, IR = q, kh = Fe, AR = Y;
function RR() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e[t] = arguments[t];
  var r = PR.argsOrArgArray(e);
  return new TR.Observable(function(n) {
    var i = 0, o = function() {
      if (i < r.length) {
        var a = void 0;
        try {
          a = AR.innerFrom(r[i++]);
        } catch {
          o();
          return;
        }
        var s = new IR.OperatorSubscriber(n, void 0, kh.noop, kh.noop);
        a.subscribe(s), s.add(o);
      } else
        n.complete();
    };
    o();
  });
}
fo.onErrorResumeNext = RR;
var Cs = {};
Object.defineProperty(Cs, "__esModule", { value: !0 });
Cs.pairs = void 0;
var CR = yr;
function jR(e, t) {
  return CR.from(Object.entries(e), t);
}
Cs.pairs = jR;
var js = {}, ho = {};
Object.defineProperty(ho, "__esModule", { value: !0 });
ho.not = void 0;
function NR(e, t) {
  return function(r, n) {
    return !e.call(t, r, n);
  };
}
ho.not = NR;
var Or = {};
Object.defineProperty(Or, "__esModule", { value: !0 });
Or.filter = void 0;
var $R = x, MR = q;
function kR(e, t) {
  return $R.operate(function(r, n) {
    var i = 0;
    r.subscribe(MR.createOperatorSubscriber(n, function(o) {
      return e.call(t, o, i++) && n.next(o);
    }));
  });
}
Or.filter = kR;
Object.defineProperty(js, "__esModule", { value: !0 });
js.partition = void 0;
var DR = ho, Dh = Or, Uh = Y;
function UR(e, t, r) {
  return [Dh.filter(t, r)(Uh.innerFrom(e)), Dh.filter(DR.not(t, r))(Uh.innerFrom(e))];
}
js.partition = UR;
var Lt = {};
Object.defineProperty(Lt, "__esModule", { value: !0 });
Lt.raceInit = Lt.race = void 0;
var LR = pe, $m = Y, FR = jr, BR = q;
function xR() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e[t] = arguments[t];
  return e = FR.argsOrArgArray(e), e.length === 1 ? $m.innerFrom(e[0]) : new LR.Observable(Mm(e));
}
Lt.race = xR;
function Mm(e) {
  return function(t) {
    for (var r = [], n = function(o) {
      r.push($m.innerFrom(e[o]).subscribe(BR.createOperatorSubscriber(t, function(a) {
        if (r) {
          for (var s = 0; s < r.length; s++)
            s !== o && r[s].unsubscribe();
          r = null;
        }
        t.next(a);
      })));
    }, i = 0; r && !t.closed && i < e.length; i++)
      n(i);
  };
}
Lt.raceInit = Mm;
var Ns = {};
Object.defineProperty(Ns, "__esModule", { value: !0 });
Ns.range = void 0;
var WR = pe, VR = pr;
function qR(e, t, r) {
  if (t == null && (t = e, e = 0), t <= 0)
    return VR.EMPTY;
  var n = t + e;
  return new WR.Observable(r ? function(i) {
    var o = e;
    return r.schedule(function() {
      o < n ? (i.next(o++), this.schedule()) : i.complete();
    });
  } : function(i) {
    for (var o = e; o < n && !i.closed; )
      i.next(o++);
    i.complete();
  });
}
Ns.range = qR;
var $s = {};
Object.defineProperty($s, "__esModule", { value: !0 });
$s.using = void 0;
var HR = pe, zR = Y, YR = pr;
function KR(e, t) {
  return new HR.Observable(function(r) {
    var n = e(), i = t(n), o = i ? zR.innerFrom(i) : YR.EMPTY;
    return o.subscribe(r), function() {
      n && n.unsubscribe();
    };
  });
}
$s.using = KR;
var Dn = {}, GR = d && d.__read || function(e, t) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r)
    return e;
  var n = r.call(e), i, o = [], a;
  try {
    for (; (t === void 0 || t-- > 0) && !(i = n.next()).done; )
      o.push(i.value);
  } catch (s) {
    a = { error: s };
  } finally {
    try {
      i && !i.done && (r = n.return) && r.call(n);
    } finally {
      if (a)
        throw a.error;
    }
  }
  return o;
}, ZR = d && d.__spreadArray || function(e, t) {
  for (var r = 0, n = t.length, i = e.length; r < n; r++, i++)
    e[i] = t[r];
  return e;
};
Object.defineProperty(Dn, "__esModule", { value: !0 });
Dn.zip = void 0;
var QR = pe, JR = Y, XR = jr, eC = pr, rC = q, tC = De;
function nC() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e[t] = arguments[t];
  var r = tC.popResultSelector(e), n = XR.argsOrArgArray(e);
  return n.length ? new QR.Observable(function(i) {
    var o = n.map(function() {
      return [];
    }), a = n.map(function() {
      return !1;
    });
    i.add(function() {
      o = a = null;
    });
    for (var s = function(u) {
      JR.innerFrom(n[u]).subscribe(rC.createOperatorSubscriber(i, function(l) {
        if (o[u].push(l), o.every(function(y) {
          return y.length;
        })) {
          var v = o.map(function(y) {
            return y.shift();
          });
          i.next(r ? r.apply(void 0, ZR([], GR(v))) : v), o.some(function(y, g) {
            return !y.length && a[g];
          }) && i.complete();
        }
      }, function() {
        a[u] = !0, !o[u].length && i.complete();
      }));
    }, c = 0; !i.closed && c < n.length; c++)
      s(c);
    return function() {
      o = a = null;
    };
  }) : eC.EMPTY;
}
Dn.zip = nC;
var km = {};
Object.defineProperty(km, "__esModule", { value: !0 });
var Un = {};
Object.defineProperty(Un, "__esModule", { value: !0 });
Un.audit = void 0;
var iC = x, oC = Y, Lh = q;
function aC(e) {
  return iC.operate(function(t, r) {
    var n = !1, i = null, o = null, a = !1, s = function() {
      if (o == null || o.unsubscribe(), o = null, n) {
        n = !1;
        var u = i;
        i = null, r.next(u);
      }
      a && r.complete();
    }, c = function() {
      o = null, a && r.complete();
    };
    t.subscribe(Lh.createOperatorSubscriber(r, function(u) {
      n = !0, i = u, o || oC.innerFrom(e(u)).subscribe(o = Lh.createOperatorSubscriber(r, s, c));
    }, function() {
      a = !0, (!n || !o || o.closed) && r.complete();
    }));
  });
}
Un.audit = aC;
var vo = {};
Object.defineProperty(vo, "__esModule", { value: !0 });
vo.auditTime = void 0;
var uC = Xe, sC = Un, cC = Cr;
function lC(e, t) {
  return t === void 0 && (t = uC.asyncScheduler), sC.audit(function() {
    return cC.timer(e, t);
  });
}
vo.auditTime = lC;
var _o = {};
Object.defineProperty(_o, "__esModule", { value: !0 });
_o.buffer = void 0;
var fC = x, dC = Fe, Fh = q, hC = Y;
function vC(e) {
  return fC.operate(function(t, r) {
    var n = [];
    return t.subscribe(Fh.createOperatorSubscriber(r, function(i) {
      return n.push(i);
    }, function() {
      r.next(n), r.complete();
    })), hC.innerFrom(e).subscribe(Fh.createOperatorSubscriber(r, function() {
      var i = n;
      n = [], r.next(i);
    }, dC.noop)), function() {
      n = null;
    };
  });
}
_o.buffer = vC;
var po = {}, Sl = d && d.__values || function(e) {
  var t = typeof Symbol == "function" && Symbol.iterator, r = t && e[t], n = 0;
  if (r)
    return r.call(e);
  if (e && typeof e.length == "number")
    return {
      next: function() {
        return e && n >= e.length && (e = void 0), { value: e && e[n++], done: !e };
      }
    };
  throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(po, "__esModule", { value: !0 });
po.bufferCount = void 0;
var _C = x, pC = q, mC = mr;
function yC(e, t) {
  return t === void 0 && (t = null), t = t ?? e, _C.operate(function(r, n) {
    var i = [], o = 0;
    r.subscribe(pC.createOperatorSubscriber(n, function(a) {
      var s, c, u, l, v = null;
      o++ % t === 0 && i.push([]);
      try {
        for (var y = Sl(i), g = y.next(); !g.done; g = y.next()) {
          var E = g.value;
          E.push(a), e <= E.length && (v = v ?? [], v.push(E));
        }
      } catch (R) {
        s = { error: R };
      } finally {
        try {
          g && !g.done && (c = y.return) && c.call(y);
        } finally {
          if (s)
            throw s.error;
        }
      }
      if (v)
        try {
          for (var S = Sl(v), C = S.next(); !C.done; C = S.next()) {
            var E = C.value;
            mC.arrRemove(i, E), n.next(E);
          }
        } catch (R) {
          u = { error: R };
        } finally {
          try {
            C && !C.done && (l = S.return) && l.call(S);
          } finally {
            if (u)
              throw u.error;
          }
        }
    }, function() {
      var a, s;
      try {
        for (var c = Sl(i), u = c.next(); !u.done; u = c.next()) {
          var l = u.value;
          n.next(l);
        }
      } catch (v) {
        a = { error: v };
      } finally {
        try {
          u && !u.done && (s = c.return) && s.call(c);
        } finally {
          if (a)
            throw a.error;
        }
      }
      n.complete();
    }, void 0, function() {
      i = null;
    }));
  });
}
po.bufferCount = yC;
var mo = {}, bC = d && d.__values || function(e) {
  var t = typeof Symbol == "function" && Symbol.iterator, r = t && e[t], n = 0;
  if (r)
    return r.call(e);
  if (e && typeof e.length == "number")
    return {
      next: function() {
        return e && n >= e.length && (e = void 0), { value: e && e[n++], done: !e };
      }
    };
  throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(mo, "__esModule", { value: !0 });
mo.bufferTime = void 0;
var gC = Ue, OC = x, wC = q, EC = mr, SC = Xe, TC = De, Bh = br;
function PC(e) {
  for (var t, r, n = [], i = 1; i < arguments.length; i++)
    n[i - 1] = arguments[i];
  var o = (t = TC.popScheduler(n)) !== null && t !== void 0 ? t : SC.asyncScheduler, a = (r = n[0]) !== null && r !== void 0 ? r : null, s = n[1] || 1 / 0;
  return OC.operate(function(c, u) {
    var l = [], v = !1, y = function(S) {
      var C = S.buffer, R = S.subs;
      R.unsubscribe(), EC.arrRemove(l, S), u.next(C), v && g();
    }, g = function() {
      if (l) {
        var S = new gC.Subscription();
        u.add(S);
        var C = [], R = {
          buffer: C,
          subs: S
        };
        l.push(R), Bh.executeSchedule(S, o, function() {
          return y(R);
        }, e);
      }
    };
    a !== null && a >= 0 ? Bh.executeSchedule(u, o, g, a, !0) : v = !0, g();
    var E = wC.createOperatorSubscriber(u, function(S) {
      var C, R, $ = l.slice();
      try {
        for (var U = bC($), D = U.next(); !D.done; D = U.next()) {
          var F = D.value, K = F.buffer;
          K.push(S), s <= K.length && y(F);
        }
      } catch (X) {
        C = { error: X };
      } finally {
        try {
          D && !D.done && (R = U.return) && R.call(U);
        } finally {
          if (C)
            throw C.error;
        }
      }
    }, function() {
      for (; l != null && l.length; )
        u.next(l.shift().buffer);
      E == null || E.unsubscribe(), u.complete(), u.unsubscribe();
    }, void 0, function() {
      return l = null;
    });
    c.subscribe(E);
  });
}
mo.bufferTime = PC;
var yo = {}, IC = d && d.__values || function(e) {
  var t = typeof Symbol == "function" && Symbol.iterator, r = t && e[t], n = 0;
  if (r)
    return r.call(e);
  if (e && typeof e.length == "number")
    return {
      next: function() {
        return e && n >= e.length && (e = void 0), { value: e && e[n++], done: !e };
      }
    };
  throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(yo, "__esModule", { value: !0 });
yo.bufferToggle = void 0;
var AC = Ue, RC = x, xh = Y, Tl = q, Wh = Fe, CC = mr;
function jC(e, t) {
  return RC.operate(function(r, n) {
    var i = [];
    xh.innerFrom(e).subscribe(Tl.createOperatorSubscriber(n, function(o) {
      var a = [];
      i.push(a);
      var s = new AC.Subscription(), c = function() {
        CC.arrRemove(i, a), n.next(a), s.unsubscribe();
      };
      s.add(xh.innerFrom(t(o)).subscribe(Tl.createOperatorSubscriber(n, c, Wh.noop)));
    }, Wh.noop)), r.subscribe(Tl.createOperatorSubscriber(n, function(o) {
      var a, s;
      try {
        for (var c = IC(i), u = c.next(); !u.done; u = c.next()) {
          var l = u.value;
          l.push(o);
        }
      } catch (v) {
        a = { error: v };
      } finally {
        try {
          u && !u.done && (s = c.return) && s.call(c);
        } finally {
          if (a)
            throw a.error;
        }
      }
    }, function() {
      for (; i.length > 0; )
        n.next(i.shift());
      n.complete();
    }));
  });
}
yo.bufferToggle = jC;
var bo = {};
Object.defineProperty(bo, "__esModule", { value: !0 });
bo.bufferWhen = void 0;
var NC = x, $C = Fe, Vh = q, MC = Y;
function kC(e) {
  return NC.operate(function(t, r) {
    var n = null, i = null, o = function() {
      i == null || i.unsubscribe();
      var a = n;
      n = [], a && r.next(a), MC.innerFrom(e()).subscribe(i = Vh.createOperatorSubscriber(r, o, $C.noop));
    };
    o(), t.subscribe(Vh.createOperatorSubscriber(r, function(a) {
      return n == null ? void 0 : n.push(a);
    }, function() {
      n && r.next(n), r.complete();
    }, void 0, function() {
      return n = i = null;
    }));
  });
}
bo.bufferWhen = kC;
var go = {};
Object.defineProperty(go, "__esModule", { value: !0 });
go.catchError = void 0;
var DC = Y, UC = q, LC = x;
function Dm(e) {
  return LC.operate(function(t, r) {
    var n = null, i = !1, o;
    n = t.subscribe(UC.createOperatorSubscriber(r, void 0, void 0, function(a) {
      o = DC.innerFrom(e(a, Dm(e)(t))), n ? (n.unsubscribe(), n = null, o.subscribe(r)) : i = !0;
    })), i && (n.unsubscribe(), n = null, o.subscribe(r));
  });
}
go.catchError = Dm;
var Oo = {}, Ln = {}, wo = {}, Fn = {}, qr = {}, Eo = {};
Object.defineProperty(Eo, "__esModule", { value: !0 });
Eo.scanInternals = void 0;
var FC = q;
function BC(e, t, r, n, i) {
  return function(o, a) {
    var s = r, c = t, u = 0;
    o.subscribe(FC.createOperatorSubscriber(a, function(l) {
      var v = u++;
      c = s ? e(c, l, v) : (s = !0, l), n && a.next(c);
    }, i && function() {
      s && a.next(c), a.complete();
    }));
  };
}
Eo.scanInternals = BC;
Object.defineProperty(qr, "__esModule", { value: !0 });
qr.reduce = void 0;
var xC = Eo, WC = x;
function VC(e, t) {
  return WC.operate(xC.scanInternals(e, t, arguments.length >= 2, !1, !0));
}
qr.reduce = VC;
Object.defineProperty(Fn, "__esModule", { value: !0 });
Fn.toArray = void 0;
var qC = qr, HC = x, zC = function(e, t) {
  return e.push(t), e;
};
function YC() {
  return HC.operate(function(e, t) {
    qC.reduce(zC, [])(e).subscribe(t);
  });
}
Fn.toArray = YC;
Object.defineProperty(wo, "__esModule", { value: !0 });
wo.joinAllInternals = void 0;
var KC = Be, GC = Rr, ZC = Wr, QC = lr, JC = Fn;
function XC(e, t) {
  return ZC.pipe(JC.toArray(), QC.mergeMap(function(r) {
    return e(r);
  }), t ? GC.mapOneOrManyArgs(t) : KC.identity);
}
wo.joinAllInternals = XC;
Object.defineProperty(Ln, "__esModule", { value: !0 });
Ln.combineLatestAll = void 0;
var ej = rt, rj = wo;
function tj(e) {
  return rj.joinAllInternals(ej.combineLatest, e);
}
Ln.combineLatestAll = tj;
Object.defineProperty(Oo, "__esModule", { value: !0 });
Oo.combineAll = void 0;
var nj = Ln;
Oo.combineAll = nj.combineLatestAll;
var So = {}, To = {}, qh = d && d.__read || function(e, t) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r)
    return e;
  var n = r.call(e), i, o = [], a;
  try {
    for (; (t === void 0 || t-- > 0) && !(i = n.next()).done; )
      o.push(i.value);
  } catch (s) {
    a = { error: s };
  } finally {
    try {
      i && !i.done && (r = n.return) && r.call(n);
    } finally {
      if (a)
        throw a.error;
    }
  }
  return o;
}, Hh = d && d.__spreadArray || function(e, t) {
  for (var r = 0, n = t.length, i = e.length; r < n; r++, i++)
    e[i] = t[r];
  return e;
};
Object.defineProperty(To, "__esModule", { value: !0 });
To.combineLatest = void 0;
var ij = rt, oj = x, aj = jr, uj = Rr, sj = Wr, cj = De;
function Um() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e[t] = arguments[t];
  var r = cj.popResultSelector(e);
  return r ? sj.pipe(Um.apply(void 0, Hh([], qh(e))), uj.mapOneOrManyArgs(r)) : oj.operate(function(n, i) {
    ij.combineLatestInit(Hh([n], qh(aj.argsOrArgArray(e))))(i);
  });
}
To.combineLatest = Um;
var lj = d && d.__read || function(e, t) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r)
    return e;
  var n = r.call(e), i, o = [], a;
  try {
    for (; (t === void 0 || t-- > 0) && !(i = n.next()).done; )
      o.push(i.value);
  } catch (s) {
    a = { error: s };
  } finally {
    try {
      i && !i.done && (r = n.return) && r.call(n);
    } finally {
      if (a)
        throw a.error;
    }
  }
  return o;
}, fj = d && d.__spreadArray || function(e, t) {
  for (var r = 0, n = t.length, i = e.length; r < n; r++, i++)
    e[i] = t[r];
  return e;
};
Object.defineProperty(So, "__esModule", { value: !0 });
So.combineLatestWith = void 0;
var dj = To;
function hj() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e[t] = arguments[t];
  return dj.combineLatest.apply(void 0, fj([], lj(e)));
}
So.combineLatestWith = hj;
var Bn = {};
Object.defineProperty(Bn, "__esModule", { value: !0 });
Bn.concatMap = void 0;
var zh = lr, vj = _e;
function _j(e, t) {
  return vj.isFunction(t) ? zh.mergeMap(e, t, 1) : zh.mergeMap(e, 1);
}
Bn.concatMap = _j;
var Po = {};
Object.defineProperty(Po, "__esModule", { value: !0 });
Po.concatMapTo = void 0;
var Yh = Bn, pj = _e;
function mj(e, t) {
  return pj.isFunction(t) ? Yh.concatMap(function() {
    return e;
  }, t) : Yh.concatMap(function() {
    return e;
  });
}
Po.concatMapTo = mj;
var Io = {}, Ao = {}, yj = d && d.__read || function(e, t) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r)
    return e;
  var n = r.call(e), i, o = [], a;
  try {
    for (; (t === void 0 || t-- > 0) && !(i = n.next()).done; )
      o.push(i.value);
  } catch (s) {
    a = { error: s };
  } finally {
    try {
      i && !i.done && (r = n.return) && r.call(n);
    } finally {
      if (a)
        throw a.error;
    }
  }
  return o;
}, bj = d && d.__spreadArray || function(e, t) {
  for (var r = 0, n = t.length, i = e.length; r < n; r++, i++)
    e[i] = t[r];
  return e;
};
Object.defineProperty(Ao, "__esModule", { value: !0 });
Ao.concat = void 0;
var gj = x, Oj = Kt, wj = De, Ej = yr;
function Sj() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e[t] = arguments[t];
  var r = wj.popScheduler(e);
  return gj.operate(function(n, i) {
    Oj.concatAll()(Ej.from(bj([n], yj(e)), r)).subscribe(i);
  });
}
Ao.concat = Sj;
var Tj = d && d.__read || function(e, t) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r)
    return e;
  var n = r.call(e), i, o = [], a;
  try {
    for (; (t === void 0 || t-- > 0) && !(i = n.next()).done; )
      o.push(i.value);
  } catch (s) {
    a = { error: s };
  } finally {
    try {
      i && !i.done && (r = n.return) && r.call(n);
    } finally {
      if (a)
        throw a.error;
    }
  }
  return o;
}, Pj = d && d.__spreadArray || function(e, t) {
  for (var r = 0, n = t.length, i = e.length; r < n; r++, i++)
    e[i] = t[r];
  return e;
};
Object.defineProperty(Io, "__esModule", { value: !0 });
Io.concatWith = void 0;
var Ij = Ao;
function Aj() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e[t] = arguments[t];
  return Ij.concat.apply(void 0, Pj([], Tj(e)));
}
Io.concatWith = Aj;
var Zt = {}, Ms = {};
Object.defineProperty(Ms, "__esModule", { value: !0 });
Ms.fromSubscribable = void 0;
var Rj = pe;
function Cj(e) {
  return new Rj.Observable(function(t) {
    return e.subscribe(t);
  });
}
Ms.fromSubscribable = Cj;
Object.defineProperty(Zt, "__esModule", { value: !0 });
Zt.connect = void 0;
var jj = Me, Nj = Y, $j = x, Mj = Ms, kj = {
  connector: function() {
    return new jj.Subject();
  }
};
function Dj(e, t) {
  t === void 0 && (t = kj);
  var r = t.connector;
  return $j.operate(function(n, i) {
    var o = r();
    Nj.innerFrom(e(Mj.fromSubscribable(o))).subscribe(i), i.add(n.subscribe(o));
  });
}
Zt.connect = Dj;
var Ro = {};
Object.defineProperty(Ro, "__esModule", { value: !0 });
Ro.count = void 0;
var Uj = qr;
function Lj(e) {
  return Uj.reduce(function(t, r, n) {
    return !e || e(r, n) ? t + 1 : t;
  }, 0);
}
Ro.count = Lj;
var Co = {};
Object.defineProperty(Co, "__esModule", { value: !0 });
Co.debounce = void 0;
var Fj = x, Bj = Fe, Kh = q, xj = Y;
function Wj(e) {
  return Fj.operate(function(t, r) {
    var n = !1, i = null, o = null, a = function() {
      if (o == null || o.unsubscribe(), o = null, n) {
        n = !1;
        var s = i;
        i = null, r.next(s);
      }
    };
    t.subscribe(Kh.createOperatorSubscriber(r, function(s) {
      o == null || o.unsubscribe(), n = !0, i = s, o = Kh.createOperatorSubscriber(r, a, Bj.noop), xj.innerFrom(e(s)).subscribe(o);
    }, function() {
      a(), r.complete();
    }, void 0, function() {
      i = o = null;
    }));
  });
}
Co.debounce = Wj;
var jo = {};
Object.defineProperty(jo, "__esModule", { value: !0 });
jo.debounceTime = void 0;
var Vj = Xe, qj = x, Hj = q;
function zj(e, t) {
  return t === void 0 && (t = Vj.asyncScheduler), qj.operate(function(r, n) {
    var i = null, o = null, a = null, s = function() {
      if (i) {
        i.unsubscribe(), i = null;
        var u = o;
        o = null, n.next(u);
      }
    };
    function c() {
      var u = a + e, l = t.now();
      if (l < u) {
        i = this.schedule(void 0, u - l), n.add(i);
        return;
      }
      s();
    }
    r.subscribe(Hj.createOperatorSubscriber(n, function(u) {
      o = u, a = t.now(), i || (i = t.schedule(c, e), n.add(i));
    }, function() {
      s(), n.complete();
    }, void 0, function() {
      o = i = null;
    }));
  });
}
jo.debounceTime = zj;
var vt = {};
Object.defineProperty(vt, "__esModule", { value: !0 });
vt.defaultIfEmpty = void 0;
var Yj = x, Kj = q;
function Gj(e) {
  return Yj.operate(function(t, r) {
    var n = !1;
    t.subscribe(Kj.createOperatorSubscriber(r, function(i) {
      n = !0, r.next(i);
    }, function() {
      n || r.next(e), r.complete();
    }));
  });
}
vt.defaultIfEmpty = Gj;
var No = {}, xn = {}, _t = {};
Object.defineProperty(_t, "__esModule", { value: !0 });
_t.take = void 0;
var Zj = pr, Qj = x, Jj = q;
function Xj(e) {
  return e <= 0 ? function() {
    return Zj.EMPTY;
  } : Qj.operate(function(t, r) {
    var n = 0;
    t.subscribe(Jj.createOperatorSubscriber(r, function(i) {
      ++n <= e && (r.next(i), e <= n && r.complete());
    }));
  });
}
_t.take = Xj;
var Wn = {};
Object.defineProperty(Wn, "__esModule", { value: !0 });
Wn.ignoreElements = void 0;
var eN = x, rN = q, tN = Fe;
function nN() {
  return eN.operate(function(e, t) {
    e.subscribe(rN.createOperatorSubscriber(t, tN.noop));
  });
}
Wn.ignoreElements = nN;
var Vn = {};
Object.defineProperty(Vn, "__esModule", { value: !0 });
Vn.mapTo = void 0;
var iN = gr;
function oN(e) {
  return iN.map(function() {
    return e;
  });
}
Vn.mapTo = oN;
Object.defineProperty(xn, "__esModule", { value: !0 });
xn.delayWhen = void 0;
var aN = Yt, Gh = _t, uN = Wn, sN = Vn, cN = lr, lN = Y;
function Lm(e, t) {
  return t ? function(r) {
    return aN.concat(t.pipe(Gh.take(1), uN.ignoreElements()), r.pipe(Lm(e)));
  } : cN.mergeMap(function(r, n) {
    return lN.innerFrom(e(r, n)).pipe(Gh.take(1), sN.mapTo(r));
  });
}
xn.delayWhen = Lm;
Object.defineProperty(No, "__esModule", { value: !0 });
No.delay = void 0;
var fN = Xe, dN = xn, hN = Cr;
function vN(e, t) {
  t === void 0 && (t = fN.asyncScheduler);
  var r = hN.timer(e, t);
  return dN.delayWhen(function() {
    return r;
  });
}
No.delay = vN;
var $o = {};
Object.defineProperty($o, "__esModule", { value: !0 });
$o.dematerialize = void 0;
var _N = hs, pN = x, mN = q;
function yN() {
  return pN.operate(function(e, t) {
    e.subscribe(mN.createOperatorSubscriber(t, function(r) {
      return _N.observeNotification(r, t);
    }));
  });
}
$o.dematerialize = yN;
var Mo = {};
Object.defineProperty(Mo, "__esModule", { value: !0 });
Mo.distinct = void 0;
var bN = x, Zh = q, gN = Fe, ON = Y;
function wN(e, t) {
  return bN.operate(function(r, n) {
    var i = /* @__PURE__ */ new Set();
    r.subscribe(Zh.createOperatorSubscriber(n, function(o) {
      var a = e ? e(o) : o;
      i.has(a) || (i.add(a), n.next(o));
    })), t && ON.innerFrom(t).subscribe(Zh.createOperatorSubscriber(n, function() {
      return i.clear();
    }, gN.noop));
  });
}
Mo.distinct = wN;
var qn = {};
Object.defineProperty(qn, "__esModule", { value: !0 });
qn.distinctUntilChanged = void 0;
var EN = Be, SN = x, TN = q;
function PN(e, t) {
  return t === void 0 && (t = EN.identity), e = e ?? IN, SN.operate(function(r, n) {
    var i, o = !0;
    r.subscribe(TN.createOperatorSubscriber(n, function(a) {
      var s = t(a);
      (o || !e(i, s)) && (o = !1, i = s, n.next(a));
    }));
  });
}
qn.distinctUntilChanged = PN;
function IN(e, t) {
  return e === t;
}
var ko = {};
Object.defineProperty(ko, "__esModule", { value: !0 });
ko.distinctUntilKeyChanged = void 0;
var AN = qn;
function RN(e, t) {
  return AN.distinctUntilChanged(function(r, n) {
    return t ? t(r[e], n[e]) : r[e] === n[e];
  });
}
ko.distinctUntilKeyChanged = RN;
var Do = {}, pt = {};
Object.defineProperty(pt, "__esModule", { value: !0 });
pt.throwIfEmpty = void 0;
var CN = Ar, jN = x, NN = q;
function $N(e) {
  return e === void 0 && (e = MN), jN.operate(function(t, r) {
    var n = !1;
    t.subscribe(NN.createOperatorSubscriber(r, function(i) {
      n = !0, r.next(i);
    }, function() {
      return n ? r.complete() : r.error(e());
    }));
  });
}
pt.throwIfEmpty = $N;
function MN() {
  return new CN.EmptyError();
}
Object.defineProperty(Do, "__esModule", { value: !0 });
Do.elementAt = void 0;
var Qh = io, kN = Or, DN = pt, UN = vt, LN = _t;
function FN(e, t) {
  if (e < 0)
    throw new Qh.ArgumentOutOfRangeError();
  var r = arguments.length >= 2;
  return function(n) {
    return n.pipe(kN.filter(function(i, o) {
      return o === e;
    }), LN.take(1), r ? UN.defaultIfEmpty(t) : DN.throwIfEmpty(function() {
      return new Qh.ArgumentOutOfRangeError();
    }));
  };
}
Do.elementAt = FN;
var Uo = {}, BN = d && d.__read || function(e, t) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r)
    return e;
  var n = r.call(e), i, o = [], a;
  try {
    for (; (t === void 0 || t-- > 0) && !(i = n.next()).done; )
      o.push(i.value);
  } catch (s) {
    a = { error: s };
  } finally {
    try {
      i && !i.done && (r = n.return) && r.call(n);
    } finally {
      if (a)
        throw a.error;
    }
  }
  return o;
}, xN = d && d.__spreadArray || function(e, t) {
  for (var r = 0, n = t.length, i = e.length; r < n; r++, i++)
    e[i] = t[r];
  return e;
};
Object.defineProperty(Uo, "__esModule", { value: !0 });
Uo.endWith = void 0;
var WN = Yt, VN = jn;
function qN() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e[t] = arguments[t];
  return function(r) {
    return WN.concat(r, VN.of.apply(void 0, xN([], BN(e))));
  };
}
Uo.endWith = qN;
var Lo = {};
Object.defineProperty(Lo, "__esModule", { value: !0 });
Lo.every = void 0;
var HN = x, zN = q;
function YN(e, t) {
  return HN.operate(function(r, n) {
    var i = 0;
    r.subscribe(zN.createOperatorSubscriber(n, function(o) {
      e.call(t, o, i++, r) || (n.next(!1), n.complete());
    }, function() {
      n.next(!0), n.complete();
    }));
  });
}
Lo.every = YN;
var Fo = {}, Hn = {}, zn = {};
Object.defineProperty(zn, "__esModule", { value: !0 });
zn.exhaustMap = void 0;
var KN = gr, Jh = Y, GN = x, Xh = q;
function Fm(e, t) {
  return t ? function(r) {
    return r.pipe(Fm(function(n, i) {
      return Jh.innerFrom(e(n, i)).pipe(KN.map(function(o, a) {
        return t(n, o, i, a);
      }));
    }));
  } : GN.operate(function(r, n) {
    var i = 0, o = null, a = !1;
    r.subscribe(Xh.createOperatorSubscriber(n, function(s) {
      o || (o = Xh.createOperatorSubscriber(n, void 0, function() {
        o = null, a && n.complete();
      }), Jh.innerFrom(e(s, i++)).subscribe(o));
    }, function() {
      a = !0, !o && n.complete();
    }));
  });
}
zn.exhaustMap = Fm;
Object.defineProperty(Hn, "__esModule", { value: !0 });
Hn.exhaustAll = void 0;
var ZN = zn, QN = Be;
function JN() {
  return ZN.exhaustMap(QN.identity);
}
Hn.exhaustAll = JN;
Object.defineProperty(Fo, "__esModule", { value: !0 });
Fo.exhaust = void 0;
var XN = Hn;
Fo.exhaust = XN.exhaustAll;
var Bo = {};
Object.defineProperty(Bo, "__esModule", { value: !0 });
Bo.expand = void 0;
var e$ = x, r$ = kn;
function t$(e, t, r) {
  return t === void 0 && (t = 1 / 0), t = (t || 0) < 1 ? 1 / 0 : t, e$.operate(function(n, i) {
    return r$.mergeInternals(n, i, e, t, void 0, !0, r);
  });
}
Bo.expand = t$;
var xo = {};
Object.defineProperty(xo, "__esModule", { value: !0 });
xo.finalize = void 0;
var n$ = x;
function i$(e) {
  return n$.operate(function(t, r) {
    try {
      t.subscribe(r);
    } finally {
      r.add(e);
    }
  });
}
xo.finalize = i$;
var tt = {};
Object.defineProperty(tt, "__esModule", { value: !0 });
tt.createFind = tt.find = void 0;
var o$ = x, a$ = q;
function u$(e, t) {
  return o$.operate(Bm(e, t, "value"));
}
tt.find = u$;
function Bm(e, t, r) {
  var n = r === "index";
  return function(i, o) {
    var a = 0;
    i.subscribe(a$.createOperatorSubscriber(o, function(s) {
      var c = a++;
      e.call(t, s, c, i) && (o.next(n ? c : s), o.complete());
    }, function() {
      o.next(n ? -1 : void 0), o.complete();
    }));
  };
}
tt.createFind = Bm;
var Wo = {};
Object.defineProperty(Wo, "__esModule", { value: !0 });
Wo.findIndex = void 0;
var s$ = x, c$ = tt;
function l$(e, t) {
  return s$.operate(c$.createFind(e, t, "index"));
}
Wo.findIndex = l$;
var Vo = {};
Object.defineProperty(Vo, "__esModule", { value: !0 });
Vo.first = void 0;
var f$ = Ar, d$ = Or, h$ = _t, v$ = vt, _$ = pt, p$ = Be;
function m$(e, t) {
  var r = arguments.length >= 2;
  return function(n) {
    return n.pipe(e ? d$.filter(function(i, o) {
      return e(i, o, n);
    }) : p$.identity, h$.take(1), r ? v$.defaultIfEmpty(t) : _$.throwIfEmpty(function() {
      return new f$.EmptyError();
    }));
  };
}
Vo.first = m$;
var qo = {};
Object.defineProperty(qo, "__esModule", { value: !0 });
qo.groupBy = void 0;
var y$ = pe, b$ = Y, g$ = Me, O$ = x, ev = q;
function w$(e, t, r, n) {
  return O$.operate(function(i, o) {
    var a;
    !t || typeof t == "function" ? a = t : (r = t.duration, a = t.element, n = t.connector);
    var s = /* @__PURE__ */ new Map(), c = function(E) {
      s.forEach(E), E(o);
    }, u = function(E) {
      return c(function(S) {
        return S.error(E);
      });
    }, l = 0, v = !1, y = new ev.OperatorSubscriber(o, function(E) {
      try {
        var S = e(E), C = s.get(S);
        if (!C) {
          s.set(S, C = n ? n() : new g$.Subject());
          var R = g(S, C);
          if (o.next(R), r) {
            var $ = ev.createOperatorSubscriber(C, function() {
              C.complete(), $ == null || $.unsubscribe();
            }, void 0, void 0, function() {
              return s.delete(S);
            });
            y.add(b$.innerFrom(r(R)).subscribe($));
          }
        }
        C.next(a ? a(E) : E);
      } catch (U) {
        u(U);
      }
    }, function() {
      return c(function(E) {
        return E.complete();
      });
    }, u, function() {
      return s.clear();
    }, function() {
      return v = !0, l === 0;
    });
    i.subscribe(y);
    function g(E, S) {
      var C = new y$.Observable(function(R) {
        l++;
        var $ = S.subscribe(R);
        return function() {
          $.unsubscribe(), --l === 0 && v && y.unsubscribe();
        };
      });
      return C.key = E, C;
    }
  });
}
qo.groupBy = w$;
var Ho = {};
Object.defineProperty(Ho, "__esModule", { value: !0 });
Ho.isEmpty = void 0;
var E$ = x, S$ = q;
function T$() {
  return E$.operate(function(e, t) {
    e.subscribe(S$.createOperatorSubscriber(t, function() {
      t.next(!1), t.complete();
    }, function() {
      t.next(!0), t.complete();
    }));
  });
}
Ho.isEmpty = T$;
var zo = {}, Yn = {}, P$ = d && d.__values || function(e) {
  var t = typeof Symbol == "function" && Symbol.iterator, r = t && e[t], n = 0;
  if (r)
    return r.call(e);
  if (e && typeof e.length == "number")
    return {
      next: function() {
        return e && n >= e.length && (e = void 0), { value: e && e[n++], done: !e };
      }
    };
  throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(Yn, "__esModule", { value: !0 });
Yn.takeLast = void 0;
var I$ = pr, A$ = x, R$ = q;
function C$(e) {
  return e <= 0 ? function() {
    return I$.EMPTY;
  } : A$.operate(function(t, r) {
    var n = [];
    t.subscribe(R$.createOperatorSubscriber(r, function(i) {
      n.push(i), e < n.length && n.shift();
    }, function() {
      var i, o;
      try {
        for (var a = P$(n), s = a.next(); !s.done; s = a.next()) {
          var c = s.value;
          r.next(c);
        }
      } catch (u) {
        i = { error: u };
      } finally {
        try {
          s && !s.done && (o = a.return) && o.call(a);
        } finally {
          if (i)
            throw i.error;
        }
      }
      r.complete();
    }, void 0, function() {
      n = null;
    }));
  });
}
Yn.takeLast = C$;
Object.defineProperty(zo, "__esModule", { value: !0 });
zo.last = void 0;
var j$ = Ar, N$ = Or, $$ = Yn, M$ = pt, k$ = vt, D$ = Be;
function U$(e, t) {
  var r = arguments.length >= 2;
  return function(n) {
    return n.pipe(e ? N$.filter(function(i, o) {
      return e(i, o, n);
    }) : D$.identity, $$.takeLast(1), r ? k$.defaultIfEmpty(t) : M$.throwIfEmpty(function() {
      return new j$.EmptyError();
    }));
  };
}
zo.last = U$;
var Yo = {};
Object.defineProperty(Yo, "__esModule", { value: !0 });
Yo.materialize = void 0;
var Pl = hs, L$ = x, F$ = q;
function B$() {
  return L$.operate(function(e, t) {
    e.subscribe(F$.createOperatorSubscriber(t, function(r) {
      t.next(Pl.Notification.createNext(r));
    }, function() {
      t.next(Pl.Notification.createComplete()), t.complete();
    }, function(r) {
      t.next(Pl.Notification.createError(r)), t.complete();
    }));
  });
}
Yo.materialize = B$;
var Ko = {};
Object.defineProperty(Ko, "__esModule", { value: !0 });
Ko.max = void 0;
var x$ = qr, W$ = _e;
function V$(e) {
  return x$.reduce(W$.isFunction(e) ? function(t, r) {
    return e(t, r) > 0 ? t : r;
  } : function(t, r) {
    return t > r ? t : r;
  });
}
Ko.max = V$;
var Go = {};
Object.defineProperty(Go, "__esModule", { value: !0 });
Go.flatMap = void 0;
var q$ = lr;
Go.flatMap = q$.mergeMap;
var Zo = {};
Object.defineProperty(Zo, "__esModule", { value: !0 });
Zo.mergeMapTo = void 0;
var rv = lr, H$ = _e;
function z$(e, t, r) {
  return r === void 0 && (r = 1 / 0), H$.isFunction(t) ? rv.mergeMap(function() {
    return e;
  }, t, r) : (typeof t == "number" && (r = t), rv.mergeMap(function() {
    return e;
  }, r));
}
Zo.mergeMapTo = z$;
var Qo = {};
Object.defineProperty(Qo, "__esModule", { value: !0 });
Qo.mergeScan = void 0;
var Y$ = x, K$ = kn;
function G$(e, t, r) {
  return r === void 0 && (r = 1 / 0), Y$.operate(function(n, i) {
    var o = t;
    return K$.mergeInternals(n, i, function(a, s) {
      return e(o, a, s);
    }, r, function(a) {
      o = a;
    }, !1, void 0, function() {
      return o = null;
    });
  });
}
Qo.mergeScan = G$;
var Jo = {}, Xo = {}, Z$ = d && d.__read || function(e, t) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r)
    return e;
  var n = r.call(e), i, o = [], a;
  try {
    for (; (t === void 0 || t-- > 0) && !(i = n.next()).done; )
      o.push(i.value);
  } catch (s) {
    a = { error: s };
  } finally {
    try {
      i && !i.done && (r = n.return) && r.call(n);
    } finally {
      if (a)
        throw a.error;
    }
  }
  return o;
}, Q$ = d && d.__spreadArray || function(e, t) {
  for (var r = 0, n = t.length, i = e.length; r < n; r++, i++)
    e[i] = t[r];
  return e;
};
Object.defineProperty(Xo, "__esModule", { value: !0 });
Xo.merge = void 0;
var J$ = x, X$ = jr, eM = ht, tv = De, rM = yr;
function tM() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e[t] = arguments[t];
  var r = tv.popScheduler(e), n = tv.popNumber(e, 1 / 0);
  return e = X$.argsOrArgArray(e), J$.operate(function(i, o) {
    eM.mergeAll(n)(rM.from(Q$([i], Z$(e)), r)).subscribe(o);
  });
}
Xo.merge = tM;
var nM = d && d.__read || function(e, t) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r)
    return e;
  var n = r.call(e), i, o = [], a;
  try {
    for (; (t === void 0 || t-- > 0) && !(i = n.next()).done; )
      o.push(i.value);
  } catch (s) {
    a = { error: s };
  } finally {
    try {
      i && !i.done && (r = n.return) && r.call(n);
    } finally {
      if (a)
        throw a.error;
    }
  }
  return o;
}, iM = d && d.__spreadArray || function(e, t) {
  for (var r = 0, n = t.length, i = e.length; r < n; r++, i++)
    e[i] = t[r];
  return e;
};
Object.defineProperty(Jo, "__esModule", { value: !0 });
Jo.mergeWith = void 0;
var oM = Xo;
function aM() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e[t] = arguments[t];
  return oM.merge.apply(void 0, iM([], nM(e)));
}
Jo.mergeWith = aM;
var ea = {};
Object.defineProperty(ea, "__esModule", { value: !0 });
ea.min = void 0;
var uM = qr, sM = _e;
function cM(e) {
  return uM.reduce(sM.isFunction(e) ? function(t, r) {
    return e(t, r) < 0 ? t : r;
  } : function(t, r) {
    return t < r ? t : r;
  });
}
ea.min = cM;
var Qt = {};
Object.defineProperty(Qt, "__esModule", { value: !0 });
Qt.multicast = void 0;
var lM = Ht, nv = _e, fM = Zt;
function dM(e, t) {
  var r = nv.isFunction(e) ? e : function() {
    return e;
  };
  return nv.isFunction(t) ? fM.connect(t, {
    connector: r
  }) : function(n) {
    return new lM.ConnectableObservable(n, r);
  };
}
Qt.multicast = dM;
var Ft = {}, hM = d && d.__read || function(e, t) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r)
    return e;
  var n = r.call(e), i, o = [], a;
  try {
    for (; (t === void 0 || t-- > 0) && !(i = n.next()).done; )
      o.push(i.value);
  } catch (s) {
    a = { error: s };
  } finally {
    try {
      i && !i.done && (r = n.return) && r.call(n);
    } finally {
      if (a)
        throw a.error;
    }
  }
  return o;
}, vM = d && d.__spreadArray || function(e, t) {
  for (var r = 0, n = t.length, i = e.length; r < n; r++, i++)
    e[i] = t[r];
  return e;
};
Object.defineProperty(Ft, "__esModule", { value: !0 });
Ft.onErrorResumeNext = Ft.onErrorResumeNextWith = void 0;
var _M = jr, pM = fo;
function xm() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e[t] = arguments[t];
  var r = _M.argsOrArgArray(e);
  return function(n) {
    return pM.onErrorResumeNext.apply(void 0, vM([n], hM(r)));
  };
}
Ft.onErrorResumeNextWith = xm;
Ft.onErrorResumeNext = xm;
var ra = {};
Object.defineProperty(ra, "__esModule", { value: !0 });
ra.pairwise = void 0;
var mM = x, yM = q;
function bM() {
  return mM.operate(function(e, t) {
    var r, n = !1;
    e.subscribe(yM.createOperatorSubscriber(t, function(i) {
      var o = r;
      r = i, n && t.next([o, i]), n = !0;
    }));
  });
}
ra.pairwise = bM;
var ta = {};
Object.defineProperty(ta, "__esModule", { value: !0 });
ta.pluck = void 0;
var gM = gr;
function OM() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e[t] = arguments[t];
  var r = e.length;
  if (r === 0)
    throw new Error("list of properties cannot be empty.");
  return gM.map(function(n) {
    for (var i = n, o = 0; o < r; o++) {
      var a = i == null ? void 0 : i[e[o]];
      if (typeof a < "u")
        i = a;
      else
        return;
    }
    return i;
  });
}
ta.pluck = OM;
var na = {};
Object.defineProperty(na, "__esModule", { value: !0 });
na.publish = void 0;
var wM = Me, EM = Qt, SM = Zt;
function TM(e) {
  return e ? function(t) {
    return SM.connect(e)(t);
  } : function(t) {
    return EM.multicast(new wM.Subject())(t);
  };
}
na.publish = TM;
var ia = {};
Object.defineProperty(ia, "__esModule", { value: !0 });
ia.publishBehavior = void 0;
var PM = Yi, IM = Ht;
function AM(e) {
  return function(t) {
    var r = new PM.BehaviorSubject(e);
    return new IM.ConnectableObservable(t, function() {
      return r;
    });
  };
}
ia.publishBehavior = AM;
var oa = {};
Object.defineProperty(oa, "__esModule", { value: !0 });
oa.publishLast = void 0;
var RM = Cn, CM = Ht;
function jM() {
  return function(e) {
    var t = new RM.AsyncSubject();
    return new CM.ConnectableObservable(e, function() {
      return t;
    });
  };
}
oa.publishLast = jM;
var aa = {};
Object.defineProperty(aa, "__esModule", { value: !0 });
aa.publishReplay = void 0;
var NM = Rn, $M = Qt, iv = _e;
function MM(e, t, r, n) {
  r && !iv.isFunction(r) && (n = r);
  var i = iv.isFunction(r) ? r : void 0;
  return function(o) {
    return $M.multicast(new NM.ReplaySubject(e, t, n), i)(o);
  };
}
aa.publishReplay = MM;
var Kn = {}, kM = d && d.__read || function(e, t) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r)
    return e;
  var n = r.call(e), i, o = [], a;
  try {
    for (; (t === void 0 || t-- > 0) && !(i = n.next()).done; )
      o.push(i.value);
  } catch (s) {
    a = { error: s };
  } finally {
    try {
      i && !i.done && (r = n.return) && r.call(n);
    } finally {
      if (a)
        throw a.error;
    }
  }
  return o;
}, DM = d && d.__spreadArray || function(e, t) {
  for (var r = 0, n = t.length, i = e.length; r < n; r++, i++)
    e[i] = t[r];
  return e;
};
Object.defineProperty(Kn, "__esModule", { value: !0 });
Kn.raceWith = void 0;
var UM = Lt, LM = x, FM = Be;
function BM() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e[t] = arguments[t];
  return e.length ? LM.operate(function(r, n) {
    UM.raceInit(DM([r], kM(e)))(n);
  }) : FM.identity;
}
Kn.raceWith = BM;
var ua = {};
Object.defineProperty(ua, "__esModule", { value: !0 });
ua.repeat = void 0;
var xM = pr, WM = x, ov = q, VM = Y, qM = Cr;
function HM(e) {
  var t, r = 1 / 0, n;
  return e != null && (typeof e == "object" ? (t = e.count, r = t === void 0 ? 1 / 0 : t, n = e.delay) : r = e), r <= 0 ? function() {
    return xM.EMPTY;
  } : WM.operate(function(i, o) {
    var a = 0, s, c = function() {
      if (s == null || s.unsubscribe(), s = null, n != null) {
        var l = typeof n == "number" ? qM.timer(n) : VM.innerFrom(n(a)), v = ov.createOperatorSubscriber(o, function() {
          v.unsubscribe(), u();
        });
        l.subscribe(v);
      } else
        u();
    }, u = function() {
      var l = !1;
      s = i.subscribe(ov.createOperatorSubscriber(o, void 0, function() {
        ++a < r ? s ? c() : l = !0 : o.complete();
      })), l && c();
    };
    u();
  });
}
ua.repeat = HM;
var sa = {};
Object.defineProperty(sa, "__esModule", { value: !0 });
sa.repeatWhen = void 0;
var zM = Y, YM = Me, KM = x, av = q;
function GM(e) {
  return KM.operate(function(t, r) {
    var n, i = !1, o, a = !1, s = !1, c = function() {
      return s && a && (r.complete(), !0);
    }, u = function() {
      return o || (o = new YM.Subject(), zM.innerFrom(e(o)).subscribe(av.createOperatorSubscriber(r, function() {
        n ? l() : i = !0;
      }, function() {
        a = !0, c();
      }))), o;
    }, l = function() {
      s = !1, n = t.subscribe(av.createOperatorSubscriber(r, void 0, function() {
        s = !0, !c() && u().next();
      })), i && (n.unsubscribe(), n = null, i = !1, l());
    };
    l();
  });
}
sa.repeatWhen = GM;
var ca = {};
Object.defineProperty(ca, "__esModule", { value: !0 });
ca.retry = void 0;
var ZM = x, uv = q, QM = Be, JM = Cr, XM = Y;
function ek(e) {
  e === void 0 && (e = 1 / 0);
  var t;
  e && typeof e == "object" ? t = e : t = {
    count: e
  };
  var r = t.count, n = r === void 0 ? 1 / 0 : r, i = t.delay, o = t.resetOnSuccess, a = o === void 0 ? !1 : o;
  return n <= 0 ? QM.identity : ZM.operate(function(s, c) {
    var u = 0, l, v = function() {
      var y = !1;
      l = s.subscribe(uv.createOperatorSubscriber(c, function(g) {
        a && (u = 0), c.next(g);
      }, void 0, function(g) {
        if (u++ < n) {
          var E = function() {
            l ? (l.unsubscribe(), l = null, v()) : y = !0;
          };
          if (i != null) {
            var S = typeof i == "number" ? JM.timer(i) : XM.innerFrom(i(g, u)), C = uv.createOperatorSubscriber(c, function() {
              C.unsubscribe(), E();
            }, function() {
              c.complete();
            });
            S.subscribe(C);
          } else
            E();
        } else
          c.error(g);
      })), y && (l.unsubscribe(), l = null, v());
    };
    v();
  });
}
ca.retry = ek;
var la = {};
Object.defineProperty(la, "__esModule", { value: !0 });
la.retryWhen = void 0;
var rk = Y, tk = Me, nk = x, sv = q;
function ik(e) {
  return nk.operate(function(t, r) {
    var n, i = !1, o, a = function() {
      n = t.subscribe(sv.createOperatorSubscriber(r, void 0, void 0, function(s) {
        o || (o = new tk.Subject(), rk.innerFrom(e(o)).subscribe(sv.createOperatorSubscriber(r, function() {
          return n ? a() : i = !0;
        }))), o && o.next(s);
      })), i && (n.unsubscribe(), n = null, i = !1, a());
    };
    a();
  });
}
la.retryWhen = ik;
var Gn = {};
Object.defineProperty(Gn, "__esModule", { value: !0 });
Gn.sample = void 0;
var ok = Y, ak = x, uk = Fe, cv = q;
function sk(e) {
  return ak.operate(function(t, r) {
    var n = !1, i = null;
    t.subscribe(cv.createOperatorSubscriber(r, function(o) {
      n = !0, i = o;
    })), ok.innerFrom(e).subscribe(cv.createOperatorSubscriber(r, function() {
      if (n) {
        n = !1;
        var o = i;
        i = null, r.next(o);
      }
    }, uk.noop));
  });
}
Gn.sample = sk;
var fa = {};
Object.defineProperty(fa, "__esModule", { value: !0 });
fa.sampleTime = void 0;
var ck = Xe, lk = Gn, fk = lo;
function dk(e, t) {
  return t === void 0 && (t = ck.asyncScheduler), lk.sample(fk.interval(e, t));
}
fa.sampleTime = dk;
var da = {};
Object.defineProperty(da, "__esModule", { value: !0 });
da.scan = void 0;
var hk = x, vk = Eo;
function _k(e, t) {
  return hk.operate(vk.scanInternals(e, t, arguments.length >= 2, !0));
}
da.scan = _k;
var ha = {};
Object.defineProperty(ha, "__esModule", { value: !0 });
ha.sequenceEqual = void 0;
var pk = x, mk = q, yk = Y;
function bk(e, t) {
  return t === void 0 && (t = function(r, n) {
    return r === n;
  }), pk.operate(function(r, n) {
    var i = lv(), o = lv(), a = function(c) {
      n.next(c), n.complete();
    }, s = function(c, u) {
      var l = mk.createOperatorSubscriber(n, function(v) {
        var y = u.buffer, g = u.complete;
        y.length === 0 ? g ? a(!1) : c.buffer.push(v) : !t(v, y.shift()) && a(!1);
      }, function() {
        c.complete = !0;
        var v = u.complete, y = u.buffer;
        v && a(y.length === 0), l == null || l.unsubscribe();
      });
      return l;
    };
    r.subscribe(s(i, o)), yk.innerFrom(e).subscribe(s(o, i));
  });
}
ha.sequenceEqual = bk;
function lv() {
  return {
    buffer: [],
    complete: !1
  };
}
var Zn = {}, gk = d && d.__read || function(e, t) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r)
    return e;
  var n = r.call(e), i, o = [], a;
  try {
    for (; (t === void 0 || t-- > 0) && !(i = n.next()).done; )
      o.push(i.value);
  } catch (s) {
    a = { error: s };
  } finally {
    try {
      i && !i.done && (r = n.return) && r.call(n);
    } finally {
      if (a)
        throw a.error;
    }
  }
  return o;
}, Ok = d && d.__spreadArray || function(e, t) {
  for (var r = 0, n = t.length, i = e.length; r < n; r++, i++)
    e[i] = t[r];
  return e;
};
Object.defineProperty(Zn, "__esModule", { value: !0 });
Zn.share = void 0;
var Wm = Y, wk = Me, Vm = In, Ek = x;
function Sk(e) {
  e === void 0 && (e = {});
  var t = e.connector, r = t === void 0 ? function() {
    return new wk.Subject();
  } : t, n = e.resetOnError, i = n === void 0 ? !0 : n, o = e.resetOnComplete, a = o === void 0 ? !0 : o, s = e.resetOnRefCountZero, c = s === void 0 ? !0 : s;
  return function(u) {
    var l, v, y, g = 0, E = !1, S = !1, C = function() {
      v == null || v.unsubscribe(), v = void 0;
    }, R = function() {
      C(), l = y = void 0, E = S = !1;
    }, $ = function() {
      var U = l;
      R(), U == null || U.unsubscribe();
    };
    return Ek.operate(function(U, D) {
      g++, !S && !E && C();
      var F = y = y ?? r();
      D.add(function() {
        g--, g === 0 && !S && !E && (v = Il($, c));
      }), F.subscribe(D), !l && g > 0 && (l = new Vm.SafeSubscriber({
        next: function(K) {
          return F.next(K);
        },
        error: function(K) {
          S = !0, C(), v = Il(R, i, K), F.error(K);
        },
        complete: function() {
          E = !0, C(), v = Il(R, a), F.complete();
        }
      }), Wm.innerFrom(U).subscribe(l));
    })(u);
  };
}
Zn.share = Sk;
function Il(e, t) {
  for (var r = [], n = 2; n < arguments.length; n++)
    r[n - 2] = arguments[n];
  if (t === !0) {
    e();
    return;
  }
  if (t !== !1) {
    var i = new Vm.SafeSubscriber({
      next: function() {
        i.unsubscribe(), e();
      }
    });
    return Wm.innerFrom(t.apply(void 0, Ok([], gk(r)))).subscribe(i);
  }
}
var va = {};
Object.defineProperty(va, "__esModule", { value: !0 });
va.shareReplay = void 0;
var Tk = Rn, Pk = Zn;
function Ik(e, t, r) {
  var n, i, o, a, s = !1;
  return e && typeof e == "object" ? (n = e.bufferSize, a = n === void 0 ? 1 / 0 : n, i = e.windowTime, t = i === void 0 ? 1 / 0 : i, o = e.refCount, s = o === void 0 ? !1 : o, r = e.scheduler) : a = e ?? 1 / 0, Pk.share({
    connector: function() {
      return new Tk.ReplaySubject(a, t, r);
    },
    resetOnError: !0,
    resetOnComplete: !1,
    resetOnRefCountZero: s
  });
}
va.shareReplay = Ik;
var _a = {};
Object.defineProperty(_a, "__esModule", { value: !0 });
_a.single = void 0;
var Ak = Ar, Rk = ao, Ck = oo, jk = x, Nk = q;
function $k(e) {
  return jk.operate(function(t, r) {
    var n = !1, i, o = !1, a = 0;
    t.subscribe(Nk.createOperatorSubscriber(r, function(s) {
      o = !0, (!e || e(s, a++, t)) && (n && r.error(new Rk.SequenceError("Too many matching values")), n = !0, i = s);
    }, function() {
      n ? (r.next(i), r.complete()) : r.error(o ? new Ck.NotFoundError("No matching values") : new Ak.EmptyError());
    }));
  });
}
_a.single = $k;
var pa = {};
Object.defineProperty(pa, "__esModule", { value: !0 });
pa.skip = void 0;
var Mk = Or;
function kk(e) {
  return Mk.filter(function(t, r) {
    return e <= r;
  });
}
pa.skip = kk;
var ma = {};
Object.defineProperty(ma, "__esModule", { value: !0 });
ma.skipLast = void 0;
var Dk = Be, Uk = x, Lk = q;
function Fk(e) {
  return e <= 0 ? Dk.identity : Uk.operate(function(t, r) {
    var n = new Array(e), i = 0;
    return t.subscribe(Lk.createOperatorSubscriber(r, function(o) {
      var a = i++;
      if (a < e)
        n[a] = o;
      else {
        var s = a % e, c = n[s];
        n[s] = o, r.next(c);
      }
    })), function() {
      n = null;
    };
  });
}
ma.skipLast = Fk;
var ya = {};
Object.defineProperty(ya, "__esModule", { value: !0 });
ya.skipUntil = void 0;
var Bk = x, fv = q, xk = Y, Wk = Fe;
function Vk(e) {
  return Bk.operate(function(t, r) {
    var n = !1, i = fv.createOperatorSubscriber(r, function() {
      i == null || i.unsubscribe(), n = !0;
    }, Wk.noop);
    xk.innerFrom(e).subscribe(i), t.subscribe(fv.createOperatorSubscriber(r, function(o) {
      return n && r.next(o);
    }));
  });
}
ya.skipUntil = Vk;
var ba = {};
Object.defineProperty(ba, "__esModule", { value: !0 });
ba.skipWhile = void 0;
var qk = x, Hk = q;
function zk(e) {
  return qk.operate(function(t, r) {
    var n = !1, i = 0;
    t.subscribe(Hk.createOperatorSubscriber(r, function(o) {
      return (n || (n = !e(o, i++))) && r.next(o);
    }));
  });
}
ba.skipWhile = zk;
var ga = {};
Object.defineProperty(ga, "__esModule", { value: !0 });
ga.startWith = void 0;
var dv = Yt, Yk = De, Kk = x;
function Gk() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e[t] = arguments[t];
  var r = Yk.popScheduler(e);
  return Kk.operate(function(n, i) {
    (r ? dv.concat(e, n, r) : dv.concat(e, n)).subscribe(i);
  });
}
ga.startWith = Gk;
var Oa = {}, mt = {};
Object.defineProperty(mt, "__esModule", { value: !0 });
mt.switchMap = void 0;
var Zk = Y, Qk = x, hv = q;
function Jk(e, t) {
  return Qk.operate(function(r, n) {
    var i = null, o = 0, a = !1, s = function() {
      return a && !i && n.complete();
    };
    r.subscribe(hv.createOperatorSubscriber(n, function(c) {
      i == null || i.unsubscribe();
      var u = 0, l = o++;
      Zk.innerFrom(e(c, l)).subscribe(i = hv.createOperatorSubscriber(n, function(v) {
        return n.next(t ? t(c, v, l, u++) : v);
      }, function() {
        i = null, s();
      }));
    }, function() {
      a = !0, s();
    }));
  });
}
mt.switchMap = Jk;
Object.defineProperty(Oa, "__esModule", { value: !0 });
Oa.switchAll = void 0;
var Xk = mt, eD = Be;
function rD() {
  return Xk.switchMap(eD.identity);
}
Oa.switchAll = rD;
var wa = {};
Object.defineProperty(wa, "__esModule", { value: !0 });
wa.switchMapTo = void 0;
var vv = mt, tD = _e;
function nD(e, t) {
  return tD.isFunction(t) ? vv.switchMap(function() {
    return e;
  }, t) : vv.switchMap(function() {
    return e;
  });
}
wa.switchMapTo = nD;
var Ea = {};
Object.defineProperty(Ea, "__esModule", { value: !0 });
Ea.switchScan = void 0;
var iD = mt, oD = x;
function aD(e, t) {
  return oD.operate(function(r, n) {
    var i = t;
    return iD.switchMap(function(o, a) {
      return e(i, o, a);
    }, function(o, a) {
      return i = a, a;
    })(r).subscribe(n), function() {
      i = null;
    };
  });
}
Ea.switchScan = aD;
var Sa = {};
Object.defineProperty(Sa, "__esModule", { value: !0 });
Sa.takeUntil = void 0;
var uD = x, sD = q, cD = Y, lD = Fe;
function fD(e) {
  return uD.operate(function(t, r) {
    cD.innerFrom(e).subscribe(sD.createOperatorSubscriber(r, function() {
      return r.complete();
    }, lD.noop)), !r.closed && t.subscribe(r);
  });
}
Sa.takeUntil = fD;
var Ta = {};
Object.defineProperty(Ta, "__esModule", { value: !0 });
Ta.takeWhile = void 0;
var dD = x, hD = q;
function vD(e, t) {
  return t === void 0 && (t = !1), dD.operate(function(r, n) {
    var i = 0;
    r.subscribe(hD.createOperatorSubscriber(n, function(o) {
      var a = e(o, i++);
      (a || t) && n.next(o), !a && n.complete();
    }));
  });
}
Ta.takeWhile = vD;
var Pa = {};
Object.defineProperty(Pa, "__esModule", { value: !0 });
Pa.tap = void 0;
var _D = _e, pD = x, mD = q, yD = Be;
function bD(e, t, r) {
  var n = _D.isFunction(e) || t || r ? { next: e, error: t, complete: r } : e;
  return n ? pD.operate(function(i, o) {
    var a;
    (a = n.subscribe) === null || a === void 0 || a.call(n);
    var s = !0;
    i.subscribe(mD.createOperatorSubscriber(o, function(c) {
      var u;
      (u = n.next) === null || u === void 0 || u.call(n, c), o.next(c);
    }, function() {
      var c;
      s = !1, (c = n.complete) === null || c === void 0 || c.call(n), o.complete();
    }, function(c) {
      var u;
      s = !1, (u = n.error) === null || u === void 0 || u.call(n, c), o.error(c);
    }, function() {
      var c, u;
      s && ((c = n.unsubscribe) === null || c === void 0 || c.call(n)), (u = n.finalize) === null || u === void 0 || u.call(n);
    }));
  }) : yD.identity;
}
Pa.tap = bD;
var ks = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.throttle = e.defaultThrottleConfig = void 0;
  var t = x, r = q, n = Y;
  e.defaultThrottleConfig = {
    leading: !0,
    trailing: !1
  };
  function i(o, a) {
    return a === void 0 && (a = e.defaultThrottleConfig), t.operate(function(s, c) {
      var u = a.leading, l = a.trailing, v = !1, y = null, g = null, E = !1, S = function() {
        g == null || g.unsubscribe(), g = null, l && ($(), E && c.complete());
      }, C = function() {
        g = null, E && c.complete();
      }, R = function(U) {
        return g = n.innerFrom(o(U)).subscribe(r.createOperatorSubscriber(c, S, C));
      }, $ = function() {
        if (v) {
          v = !1;
          var U = y;
          y = null, c.next(U), !E && R(U);
        }
      };
      s.subscribe(r.createOperatorSubscriber(c, function(U) {
        v = !0, y = U, !(g && !g.closed) && (u ? $() : R(U));
      }, function() {
        E = !0, !(l && v && g && !g.closed) && c.complete();
      }));
    });
  }
  e.throttle = i;
})(ks);
var Ia = {};
Object.defineProperty(Ia, "__esModule", { value: !0 });
Ia.throttleTime = void 0;
var gD = Xe, _v = ks, OD = Cr;
function wD(e, t, r) {
  t === void 0 && (t = gD.asyncScheduler), r === void 0 && (r = _v.defaultThrottleConfig);
  var n = OD.timer(e, t);
  return _v.throttle(function() {
    return n;
  }, r);
}
Ia.throttleTime = wD;
var Bt = {};
Object.defineProperty(Bt, "__esModule", { value: !0 });
Bt.TimeInterval = Bt.timeInterval = void 0;
var ED = Xe, SD = x, TD = q;
function PD(e) {
  return e === void 0 && (e = ED.asyncScheduler), SD.operate(function(t, r) {
    var n = e.now();
    t.subscribe(TD.createOperatorSubscriber(r, function(i) {
      var o = e.now(), a = o - n;
      n = o, r.next(new qm(i, a));
    }));
  });
}
Bt.timeInterval = PD;
var qm = function() {
  function e(t, r) {
    this.value = t, this.interval = r;
  }
  return e;
}();
Bt.TimeInterval = qm;
var Aa = {};
Object.defineProperty(Aa, "__esModule", { value: !0 });
Aa.timeoutWith = void 0;
var ID = Xe, AD = Mn, RD = ji;
function CD(e, t, r) {
  var n, i, o;
  if (r = r ?? ID.async, AD.isValidDate(e) ? n = e : typeof e == "number" && (i = e), t)
    o = function() {
      return t;
    };
  else
    throw new TypeError("No observable provided to switch to");
  if (n == null && i == null)
    throw new TypeError("No timeout provided.");
  return RD.timeout({
    first: n,
    each: i,
    scheduler: r,
    with: o
  });
}
Aa.timeoutWith = CD;
var Ra = {};
Object.defineProperty(Ra, "__esModule", { value: !0 });
Ra.timestamp = void 0;
var jD = os, ND = gr;
function $D(e) {
  return e === void 0 && (e = jD.dateTimestampProvider), ND.map(function(t) {
    return { value: t, timestamp: e.now() };
  });
}
Ra.timestamp = $D;
var Ca = {};
Object.defineProperty(Ca, "__esModule", { value: !0 });
Ca.window = void 0;
var pv = Me, MD = x, mv = q, kD = Fe, DD = Y;
function UD(e) {
  return MD.operate(function(t, r) {
    var n = new pv.Subject();
    r.next(n.asObservable());
    var i = function(o) {
      n.error(o), r.error(o);
    };
    return t.subscribe(mv.createOperatorSubscriber(r, function(o) {
      return n == null ? void 0 : n.next(o);
    }, function() {
      n.complete(), r.complete();
    }, i)), DD.innerFrom(e).subscribe(mv.createOperatorSubscriber(r, function() {
      n.complete(), r.next(n = new pv.Subject());
    }, kD.noop, i)), function() {
      n == null || n.unsubscribe(), n = null;
    };
  });
}
Ca.window = UD;
var ja = {}, LD = d && d.__values || function(e) {
  var t = typeof Symbol == "function" && Symbol.iterator, r = t && e[t], n = 0;
  if (r)
    return r.call(e);
  if (e && typeof e.length == "number")
    return {
      next: function() {
        return e && n >= e.length && (e = void 0), { value: e && e[n++], done: !e };
      }
    };
  throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(ja, "__esModule", { value: !0 });
ja.windowCount = void 0;
var yv = Me, FD = x, BD = q;
function xD(e, t) {
  t === void 0 && (t = 0);
  var r = t > 0 ? t : e;
  return FD.operate(function(n, i) {
    var o = [new yv.Subject()], a = 0;
    i.next(o[0].asObservable()), n.subscribe(BD.createOperatorSubscriber(i, function(s) {
      var c, u;
      try {
        for (var l = LD(o), v = l.next(); !v.done; v = l.next()) {
          var y = v.value;
          y.next(s);
        }
      } catch (S) {
        c = { error: S };
      } finally {
        try {
          v && !v.done && (u = l.return) && u.call(l);
        } finally {
          if (c)
            throw c.error;
        }
      }
      var g = a - e + 1;
      if (g >= 0 && g % r === 0 && o.shift().complete(), ++a % r === 0) {
        var E = new yv.Subject();
        o.push(E), i.next(E.asObservable());
      }
    }, function() {
      for (; o.length > 0; )
        o.shift().complete();
      i.complete();
    }, function(s) {
      for (; o.length > 0; )
        o.shift().error(s);
      i.error(s);
    }, function() {
      o = null;
    }));
  });
}
ja.windowCount = xD;
var Na = {};
Object.defineProperty(Na, "__esModule", { value: !0 });
Na.windowTime = void 0;
var WD = Me, VD = Xe, qD = Ue, HD = x, zD = q, YD = mr, KD = De, bv = br;
function GD(e) {
  for (var t, r, n = [], i = 1; i < arguments.length; i++)
    n[i - 1] = arguments[i];
  var o = (t = KD.popScheduler(n)) !== null && t !== void 0 ? t : VD.asyncScheduler, a = (r = n[0]) !== null && r !== void 0 ? r : null, s = n[1] || 1 / 0;
  return HD.operate(function(c, u) {
    var l = [], v = !1, y = function(C) {
      var R = C.window, $ = C.subs;
      R.complete(), $.unsubscribe(), YD.arrRemove(l, C), v && g();
    }, g = function() {
      if (l) {
        var C = new qD.Subscription();
        u.add(C);
        var R = new WD.Subject(), $ = {
          window: R,
          subs: C,
          seen: 0
        };
        l.push($), u.next(R.asObservable()), bv.executeSchedule(C, o, function() {
          return y($);
        }, e);
      }
    };
    a !== null && a >= 0 ? bv.executeSchedule(u, o, g, a, !0) : v = !0, g();
    var E = function(C) {
      return l.slice().forEach(C);
    }, S = function(C) {
      E(function(R) {
        var $ = R.window;
        return C($);
      }), C(u), u.unsubscribe();
    };
    return c.subscribe(zD.createOperatorSubscriber(u, function(C) {
      E(function(R) {
        R.window.next(C), s <= ++R.seen && y(R);
      });
    }, function() {
      return S(function(C) {
        return C.complete();
      });
    }, function(C) {
      return S(function(R) {
        return R.error(C);
      });
    })), function() {
      l = null;
    };
  });
}
Na.windowTime = GD;
var $a = {}, ZD = d && d.__values || function(e) {
  var t = typeof Symbol == "function" && Symbol.iterator, r = t && e[t], n = 0;
  if (r)
    return r.call(e);
  if (e && typeof e.length == "number")
    return {
      next: function() {
        return e && n >= e.length && (e = void 0), { value: e && e[n++], done: !e };
      }
    };
  throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty($a, "__esModule", { value: !0 });
$a.windowToggle = void 0;
var QD = Me, JD = Ue, XD = x, gv = Y, Al = q, Ov = Fe, eU = mr;
function rU(e, t) {
  return XD.operate(function(r, n) {
    var i = [], o = function(a) {
      for (; 0 < i.length; )
        i.shift().error(a);
      n.error(a);
    };
    gv.innerFrom(e).subscribe(Al.createOperatorSubscriber(n, function(a) {
      var s = new QD.Subject();
      i.push(s);
      var c = new JD.Subscription(), u = function() {
        eU.arrRemove(i, s), s.complete(), c.unsubscribe();
      }, l;
      try {
        l = gv.innerFrom(t(a));
      } catch (v) {
        o(v);
        return;
      }
      n.next(s.asObservable()), c.add(l.subscribe(Al.createOperatorSubscriber(n, u, Ov.noop, o)));
    }, Ov.noop)), r.subscribe(Al.createOperatorSubscriber(n, function(a) {
      var s, c, u = i.slice();
      try {
        for (var l = ZD(u), v = l.next(); !v.done; v = l.next()) {
          var y = v.value;
          y.next(a);
        }
      } catch (g) {
        s = { error: g };
      } finally {
        try {
          v && !v.done && (c = l.return) && c.call(l);
        } finally {
          if (s)
            throw s.error;
        }
      }
    }, function() {
      for (; 0 < i.length; )
        i.shift().complete();
      n.complete();
    }, o, function() {
      for (; 0 < i.length; )
        i.shift().unsubscribe();
    }));
  });
}
$a.windowToggle = rU;
var Ma = {};
Object.defineProperty(Ma, "__esModule", { value: !0 });
Ma.windowWhen = void 0;
var tU = Me, nU = x, wv = q, iU = Y;
function oU(e) {
  return nU.operate(function(t, r) {
    var n, i, o = function(s) {
      n.error(s), r.error(s);
    }, a = function() {
      i == null || i.unsubscribe(), n == null || n.complete(), n = new tU.Subject(), r.next(n.asObservable());
      var s;
      try {
        s = iU.innerFrom(e());
      } catch (c) {
        o(c);
        return;
      }
      s.subscribe(i = wv.createOperatorSubscriber(r, a, a, o));
    };
    a(), t.subscribe(wv.createOperatorSubscriber(r, function(s) {
      return n.next(s);
    }, function() {
      n.complete(), r.complete();
    }, o, function() {
      i == null || i.unsubscribe(), n = null;
    }));
  });
}
Ma.windowWhen = oU;
var ka = {}, Ev = d && d.__read || function(e, t) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r)
    return e;
  var n = r.call(e), i, o = [], a;
  try {
    for (; (t === void 0 || t-- > 0) && !(i = n.next()).done; )
      o.push(i.value);
  } catch (s) {
    a = { error: s };
  } finally {
    try {
      i && !i.done && (r = n.return) && r.call(n);
    } finally {
      if (a)
        throw a.error;
    }
  }
  return o;
}, Sv = d && d.__spreadArray || function(e, t) {
  for (var r = 0, n = t.length, i = e.length; r < n; r++, i++)
    e[i] = t[r];
  return e;
};
Object.defineProperty(ka, "__esModule", { value: !0 });
ka.withLatestFrom = void 0;
var aU = x, Tv = q, uU = Y, sU = Be, cU = Fe, lU = De;
function fU() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e[t] = arguments[t];
  var r = lU.popResultSelector(e);
  return aU.operate(function(n, i) {
    for (var o = e.length, a = new Array(o), s = e.map(function() {
      return !1;
    }), c = !1, u = function(v) {
      uU.innerFrom(e[v]).subscribe(Tv.createOperatorSubscriber(i, function(y) {
        a[v] = y, !c && !s[v] && (s[v] = !0, (c = s.every(sU.identity)) && (s = null));
      }, cU.noop));
    }, l = 0; l < o; l++)
      u(l);
    n.subscribe(Tv.createOperatorSubscriber(i, function(v) {
      if (c) {
        var y = Sv([v], Ev(a));
        i.next(r ? r.apply(void 0, Sv([], Ev(y))) : y);
      }
    }));
  });
}
ka.withLatestFrom = fU;
var Da = {};
Object.defineProperty(Da, "__esModule", { value: !0 });
Da.zipAll = void 0;
var dU = Dn, hU = wo;
function vU(e) {
  return hU.joinAllInternals(dU.zip, e);
}
Da.zipAll = vU;
var Ua = {}, La = {}, _U = d && d.__read || function(e, t) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r)
    return e;
  var n = r.call(e), i, o = [], a;
  try {
    for (; (t === void 0 || t-- > 0) && !(i = n.next()).done; )
      o.push(i.value);
  } catch (s) {
    a = { error: s };
  } finally {
    try {
      i && !i.done && (r = n.return) && r.call(n);
    } finally {
      if (a)
        throw a.error;
    }
  }
  return o;
}, pU = d && d.__spreadArray || function(e, t) {
  for (var r = 0, n = t.length, i = e.length; r < n; r++, i++)
    e[i] = t[r];
  return e;
};
Object.defineProperty(La, "__esModule", { value: !0 });
La.zip = void 0;
var mU = Dn, yU = x;
function bU() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e[t] = arguments[t];
  return yU.operate(function(r, n) {
    mU.zip.apply(void 0, pU([r], _U(e))).subscribe(n);
  });
}
La.zip = bU;
var gU = d && d.__read || function(e, t) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r)
    return e;
  var n = r.call(e), i, o = [], a;
  try {
    for (; (t === void 0 || t-- > 0) && !(i = n.next()).done; )
      o.push(i.value);
  } catch (s) {
    a = { error: s };
  } finally {
    try {
      i && !i.done && (r = n.return) && r.call(n);
    } finally {
      if (a)
        throw a.error;
    }
  }
  return o;
}, OU = d && d.__spreadArray || function(e, t) {
  for (var r = 0, n = t.length, i = e.length; r < n; r++, i++)
    e[i] = t[r];
  return e;
};
Object.defineProperty(Ua, "__esModule", { value: !0 });
Ua.zipWith = void 0;
var wU = La;
function EU() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e[t] = arguments[t];
  return wU.zip.apply(void 0, OU([], gU(e)));
}
Ua.zipWith = EU;
(function(e) {
  var t = d && d.__createBinding || (Object.create ? function(en, rn, $r, gt) {
    gt === void 0 && (gt = $r), Object.defineProperty(en, gt, { enumerable: !0, get: function() {
      return rn[$r];
    } });
  } : function(en, rn, $r, gt) {
    gt === void 0 && (gt = $r), en[gt] = rn[$r];
  }), r = d && d.__exportStar || function(en, rn) {
    for (var $r in en)
      $r !== "default" && !Object.prototype.hasOwnProperty.call(rn, $r) && t(rn, en, $r);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.interval = e.iif = e.generate = e.fromEventPattern = e.fromEvent = e.from = e.forkJoin = e.empty = e.defer = e.connectable = e.concat = e.combineLatest = e.bindNodeCallback = e.bindCallback = e.UnsubscriptionError = e.TimeoutError = e.SequenceError = e.ObjectUnsubscribedError = e.NotFoundError = e.EmptyError = e.ArgumentOutOfRangeError = e.firstValueFrom = e.lastValueFrom = e.isObservable = e.identity = e.noop = e.pipe = e.NotificationKind = e.Notification = e.Subscriber = e.Subscription = e.Scheduler = e.VirtualAction = e.VirtualTimeScheduler = e.animationFrameScheduler = e.animationFrame = e.queueScheduler = e.queue = e.asyncScheduler = e.async = e.asapScheduler = e.asap = e.AsyncSubject = e.ReplaySubject = e.BehaviorSubject = e.Subject = e.animationFrames = e.observable = e.ConnectableObservable = e.Observable = void 0, e.filter = e.expand = e.exhaustMap = e.exhaustAll = e.exhaust = e.every = e.endWith = e.elementAt = e.distinctUntilKeyChanged = e.distinctUntilChanged = e.distinct = e.dematerialize = e.delayWhen = e.delay = e.defaultIfEmpty = e.debounceTime = e.debounce = e.count = e.connect = e.concatWith = e.concatMapTo = e.concatMap = e.concatAll = e.combineLatestWith = e.combineLatestAll = e.combineAll = e.catchError = e.bufferWhen = e.bufferToggle = e.bufferTime = e.bufferCount = e.buffer = e.auditTime = e.audit = e.config = e.NEVER = e.EMPTY = e.scheduled = e.zip = e.using = e.timer = e.throwError = e.range = e.race = e.partition = e.pairs = e.onErrorResumeNext = e.of = e.never = e.merge = void 0, e.switchMap = e.switchAll = e.subscribeOn = e.startWith = e.skipWhile = e.skipUntil = e.skipLast = e.skip = e.single = e.shareReplay = e.share = e.sequenceEqual = e.scan = e.sampleTime = e.sample = e.refCount = e.retryWhen = e.retry = e.repeatWhen = e.repeat = e.reduce = e.raceWith = e.publishReplay = e.publishLast = e.publishBehavior = e.publish = e.pluck = e.pairwise = e.onErrorResumeNextWith = e.observeOn = e.multicast = e.min = e.mergeWith = e.mergeScan = e.mergeMapTo = e.mergeMap = e.flatMap = e.mergeAll = e.max = e.materialize = e.mapTo = e.map = e.last = e.isEmpty = e.ignoreElements = e.groupBy = e.first = e.findIndex = e.find = e.finalize = void 0, e.zipWith = e.zipAll = e.withLatestFrom = e.windowWhen = e.windowToggle = e.windowTime = e.windowCount = e.window = e.toArray = e.timestamp = e.timeoutWith = e.timeout = e.timeInterval = e.throwIfEmpty = e.throttleTime = e.throttle = e.tap = e.takeWhile = e.takeUntil = e.takeLast = e.take = e.switchScan = e.switchMapTo = void 0;
  var n = pe;
  Object.defineProperty(e, "Observable", { enumerable: !0, get: function() {
    return n.Observable;
  } });
  var i = Ht;
  Object.defineProperty(e, "ConnectableObservable", { enumerable: !0, get: function() {
    return i.ConnectableObservable;
  } });
  var o = qt;
  Object.defineProperty(e, "observable", { enumerable: !0, get: function() {
    return o.observable;
  } });
  var a = is;
  Object.defineProperty(e, "animationFrames", { enumerable: !0, get: function() {
    return a.animationFrames;
  } });
  var s = Me;
  Object.defineProperty(e, "Subject", { enumerable: !0, get: function() {
    return s.Subject;
  } });
  var c = Yi;
  Object.defineProperty(e, "BehaviorSubject", { enumerable: !0, get: function() {
    return c.BehaviorSubject;
  } });
  var u = Rn;
  Object.defineProperty(e, "ReplaySubject", { enumerable: !0, get: function() {
    return u.ReplaySubject;
  } });
  var l = Cn;
  Object.defineProperty(e, "AsyncSubject", { enumerable: !0, get: function() {
    return l.AsyncSubject;
  } });
  var v = vm;
  Object.defineProperty(e, "asap", { enumerable: !0, get: function() {
    return v.asap;
  } }), Object.defineProperty(e, "asapScheduler", { enumerable: !0, get: function() {
    return v.asapScheduler;
  } });
  var y = Xe;
  Object.defineProperty(e, "async", { enumerable: !0, get: function() {
    return y.async;
  } }), Object.defineProperty(e, "asyncScheduler", { enumerable: !0, get: function() {
    return y.asyncScheduler;
  } });
  var g = mm;
  Object.defineProperty(e, "queue", { enumerable: !0, get: function() {
    return g.queue;
  } }), Object.defineProperty(e, "queueScheduler", { enumerable: !0, get: function() {
    return g.queueScheduler;
  } });
  var E = ym;
  Object.defineProperty(e, "animationFrame", { enumerable: !0, get: function() {
    return E.animationFrame;
  } }), Object.defineProperty(e, "animationFrameScheduler", { enumerable: !0, get: function() {
    return E.animationFrameScheduler;
  } });
  var S = mn;
  Object.defineProperty(e, "VirtualTimeScheduler", { enumerable: !0, get: function() {
    return S.VirtualTimeScheduler;
  } }), Object.defineProperty(e, "VirtualAction", { enumerable: !0, get: function() {
    return S.VirtualAction;
  } });
  var C = Ki;
  Object.defineProperty(e, "Scheduler", { enumerable: !0, get: function() {
    return C.Scheduler;
  } });
  var R = Ue;
  Object.defineProperty(e, "Subscription", { enumerable: !0, get: function() {
    return R.Subscription;
  } });
  var $ = In;
  Object.defineProperty(e, "Subscriber", { enumerable: !0, get: function() {
    return $.Subscriber;
  } });
  var U = hs;
  Object.defineProperty(e, "Notification", { enumerable: !0, get: function() {
    return U.Notification;
  } }), Object.defineProperty(e, "NotificationKind", { enumerable: !0, get: function() {
    return U.NotificationKind;
  } });
  var D = Wr;
  Object.defineProperty(e, "pipe", { enumerable: !0, get: function() {
    return D.pipe;
  } });
  var F = Fe;
  Object.defineProperty(e, "noop", { enumerable: !0, get: function() {
    return F.noop;
  } });
  var K = Be;
  Object.defineProperty(e, "identity", { enumerable: !0, get: function() {
    return K.identity;
  } });
  var X = ys;
  Object.defineProperty(e, "isObservable", { enumerable: !0, get: function() {
    return X.isObservable;
  } });
  var oe = bs;
  Object.defineProperty(e, "lastValueFrom", { enumerable: !0, get: function() {
    return oe.lastValueFrom;
  } });
  var de = gs;
  Object.defineProperty(e, "firstValueFrom", { enumerable: !0, get: function() {
    return de.firstValueFrom;
  } });
  var Ie = io;
  Object.defineProperty(e, "ArgumentOutOfRangeError", { enumerable: !0, get: function() {
    return Ie.ArgumentOutOfRangeError;
  } });
  var ge = Ar;
  Object.defineProperty(e, "EmptyError", { enumerable: !0, get: function() {
    return ge.EmptyError;
  } });
  var Re = oo;
  Object.defineProperty(e, "NotFoundError", { enumerable: !0, get: function() {
    return Re.NotFoundError;
  } });
  var he = zi;
  Object.defineProperty(e, "ObjectUnsubscribedError", { enumerable: !0, get: function() {
    return he.ObjectUnsubscribedError;
  } });
  var se = ao;
  Object.defineProperty(e, "SequenceError", { enumerable: !0, get: function() {
    return se.SequenceError;
  } });
  var V = ji;
  Object.defineProperty(e, "TimeoutError", { enumerable: !0, get: function() {
    return V.TimeoutError;
  } });
  var J = qi;
  Object.defineProperty(e, "UnsubscriptionError", { enumerable: !0, get: function() {
    return J.UnsubscriptionError;
  } });
  var re = Os;
  Object.defineProperty(e, "bindCallback", { enumerable: !0, get: function() {
    return re.bindCallback;
  } });
  var H = ws;
  Object.defineProperty(e, "bindNodeCallback", { enumerable: !0, get: function() {
    return H.bindNodeCallback;
  } });
  var ce = rt;
  Object.defineProperty(e, "combineLatest", { enumerable: !0, get: function() {
    return ce.combineLatest;
  } });
  var Ne = Yt;
  Object.defineProperty(e, "concat", { enumerable: !0, get: function() {
    return Ne.concat;
  } });
  var G = Es;
  Object.defineProperty(e, "connectable", { enumerable: !0, get: function() {
    return G.connectable;
  } });
  var B = Gt;
  Object.defineProperty(e, "defer", { enumerable: !0, get: function() {
    return B.defer;
  } });
  var Oe = pr;
  Object.defineProperty(e, "empty", { enumerable: !0, get: function() {
    return Oe.empty;
  } });
  var I = Ss;
  Object.defineProperty(e, "forkJoin", { enumerable: !0, get: function() {
    return I.forkJoin;
  } });
  var M = yr;
  Object.defineProperty(e, "from", { enumerable: !0, get: function() {
    return M.from;
  } });
  var W = Ts;
  Object.defineProperty(e, "fromEvent", { enumerable: !0, get: function() {
    return W.fromEvent;
  } });
  var z = Ps;
  Object.defineProperty(e, "fromEventPattern", { enumerable: !0, get: function() {
    return z.fromEventPattern;
  } });
  var Z = Is;
  Object.defineProperty(e, "generate", { enumerable: !0, get: function() {
    return Z.generate;
  } });
  var Ae = As;
  Object.defineProperty(e, "iif", { enumerable: !0, get: function() {
    return Ae.iif;
  } });
  var He = lo;
  Object.defineProperty(e, "interval", { enumerable: !0, get: function() {
    return He.interval;
  } });
  var ir = Rs;
  Object.defineProperty(e, "merge", { enumerable: !0, get: function() {
    return ir.merge;
  } });
  var er = ff;
  Object.defineProperty(e, "never", { enumerable: !0, get: function() {
    return er.never;
  } });
  var $e = jn;
  Object.defineProperty(e, "of", { enumerable: !0, get: function() {
    return $e.of;
  } });
  var rr = fo;
  Object.defineProperty(e, "onErrorResumeNext", { enumerable: !0, get: function() {
    return rr.onErrorResumeNext;
  } });
  var bt = Cs;
  Object.defineProperty(e, "pairs", { enumerable: !0, get: function() {
    return bt.pairs;
  } });
  var b = js;
  Object.defineProperty(e, "partition", { enumerable: !0, get: function() {
    return b.partition;
  } });
  var _ = Lt;
  Object.defineProperty(e, "race", { enumerable: !0, get: function() {
    return _.race;
  } });
  var p = Ns;
  Object.defineProperty(e, "range", { enumerable: !0, get: function() {
    return p.range;
  } });
  var w = no;
  Object.defineProperty(e, "throwError", { enumerable: !0, get: function() {
    return w.throwError;
  } });
  var P = Cr;
  Object.defineProperty(e, "timer", { enumerable: !0, get: function() {
    return P.timer;
  } });
  var k = $s;
  Object.defineProperty(e, "using", { enumerable: !0, get: function() {
    return k.using;
  } });
  var L = Dn;
  Object.defineProperty(e, "zip", { enumerable: !0, get: function() {
    return L.zip;
  } });
  var ne = Gi;
  Object.defineProperty(e, "scheduled", { enumerable: !0, get: function() {
    return ne.scheduled;
  } });
  var le = pr;
  Object.defineProperty(e, "EMPTY", { enumerable: !0, get: function() {
    return le.EMPTY;
  } });
  var ie = ff;
  Object.defineProperty(e, "NEVER", { enumerable: !0, get: function() {
    return ie.NEVER;
  } }), r(km, e);
  var Ce = st;
  Object.defineProperty(e, "config", { enumerable: !0, get: function() {
    return Ce.config;
  } });
  var m = Un;
  Object.defineProperty(e, "audit", { enumerable: !0, get: function() {
    return m.audit;
  } });
  var f = vo;
  Object.defineProperty(e, "auditTime", { enumerable: !0, get: function() {
    return f.auditTime;
  } });
  var h = _o;
  Object.defineProperty(e, "buffer", { enumerable: !0, get: function() {
    return h.buffer;
  } });
  var O = po;
  Object.defineProperty(e, "bufferCount", { enumerable: !0, get: function() {
    return O.bufferCount;
  } });
  var T = mo;
  Object.defineProperty(e, "bufferTime", { enumerable: !0, get: function() {
    return T.bufferTime;
  } });
  var A = yo;
  Object.defineProperty(e, "bufferToggle", { enumerable: !0, get: function() {
    return A.bufferToggle;
  } });
  var j = bo;
  Object.defineProperty(e, "bufferWhen", { enumerable: !0, get: function() {
    return j.bufferWhen;
  } });
  var te = go;
  Object.defineProperty(e, "catchError", { enumerable: !0, get: function() {
    return te.catchError;
  } });
  var Ee = Oo;
  Object.defineProperty(e, "combineAll", { enumerable: !0, get: function() {
    return Ee.combineAll;
  } });
  var ye = Ln;
  Object.defineProperty(e, "combineLatestAll", { enumerable: !0, get: function() {
    return ye.combineLatestAll;
  } });
  var Se = So;
  Object.defineProperty(e, "combineLatestWith", { enumerable: !0, get: function() {
    return Se.combineLatestWith;
  } });
  var ve = Kt;
  Object.defineProperty(e, "concatAll", { enumerable: !0, get: function() {
    return ve.concatAll;
  } });
  var wc = Bn;
  Object.defineProperty(e, "concatMap", { enumerable: !0, get: function() {
    return wc.concatMap;
  } });
  var Ec = Po;
  Object.defineProperty(e, "concatMapTo", { enumerable: !0, get: function() {
    return Ec.concatMapTo;
  } });
  var Sc = Io;
  Object.defineProperty(e, "concatWith", { enumerable: !0, get: function() {
    return Sc.concatWith;
  } });
  var Tc = Zt;
  Object.defineProperty(e, "connect", { enumerable: !0, get: function() {
    return Tc.connect;
  } });
  var Pc = Ro;
  Object.defineProperty(e, "count", { enumerable: !0, get: function() {
    return Pc.count;
  } });
  var Ic = Co;
  Object.defineProperty(e, "debounce", { enumerable: !0, get: function() {
    return Ic.debounce;
  } });
  var Ac = jo;
  Object.defineProperty(e, "debounceTime", { enumerable: !0, get: function() {
    return Ac.debounceTime;
  } });
  var Rc = vt;
  Object.defineProperty(e, "defaultIfEmpty", { enumerable: !0, get: function() {
    return Rc.defaultIfEmpty;
  } });
  var Cc = No;
  Object.defineProperty(e, "delay", { enumerable: !0, get: function() {
    return Cc.delay;
  } });
  var jc = xn;
  Object.defineProperty(e, "delayWhen", { enumerable: !0, get: function() {
    return jc.delayWhen;
  } });
  var Nc = $o;
  Object.defineProperty(e, "dematerialize", { enumerable: !0, get: function() {
    return Nc.dematerialize;
  } });
  var $c = Mo;
  Object.defineProperty(e, "distinct", { enumerable: !0, get: function() {
    return $c.distinct;
  } });
  var Mc = qn;
  Object.defineProperty(e, "distinctUntilChanged", { enumerable: !0, get: function() {
    return Mc.distinctUntilChanged;
  } });
  var kc = ko;
  Object.defineProperty(e, "distinctUntilKeyChanged", { enumerable: !0, get: function() {
    return kc.distinctUntilKeyChanged;
  } });
  var Dc = Do;
  Object.defineProperty(e, "elementAt", { enumerable: !0, get: function() {
    return Dc.elementAt;
  } });
  var Uc = Uo;
  Object.defineProperty(e, "endWith", { enumerable: !0, get: function() {
    return Uc.endWith;
  } });
  var Lc = Lo;
  Object.defineProperty(e, "every", { enumerable: !0, get: function() {
    return Lc.every;
  } });
  var Fc = Fo;
  Object.defineProperty(e, "exhaust", { enumerable: !0, get: function() {
    return Fc.exhaust;
  } });
  var Bc = Hn;
  Object.defineProperty(e, "exhaustAll", { enumerable: !0, get: function() {
    return Bc.exhaustAll;
  } });
  var xc = zn;
  Object.defineProperty(e, "exhaustMap", { enumerable: !0, get: function() {
    return xc.exhaustMap;
  } });
  var Wc = Bo;
  Object.defineProperty(e, "expand", { enumerable: !0, get: function() {
    return Wc.expand;
  } });
  var Vc = Or;
  Object.defineProperty(e, "filter", { enumerable: !0, get: function() {
    return Vc.filter;
  } });
  var qc = xo;
  Object.defineProperty(e, "finalize", { enumerable: !0, get: function() {
    return qc.finalize;
  } });
  var Hc = tt;
  Object.defineProperty(e, "find", { enumerable: !0, get: function() {
    return Hc.find;
  } });
  var zc = Wo;
  Object.defineProperty(e, "findIndex", { enumerable: !0, get: function() {
    return zc.findIndex;
  } });
  var Yc = Vo;
  Object.defineProperty(e, "first", { enumerable: !0, get: function() {
    return Yc.first;
  } });
  var Kc = qo;
  Object.defineProperty(e, "groupBy", { enumerable: !0, get: function() {
    return Kc.groupBy;
  } });
  var Gc = Wn;
  Object.defineProperty(e, "ignoreElements", { enumerable: !0, get: function() {
    return Gc.ignoreElements;
  } });
  var Zc = Ho;
  Object.defineProperty(e, "isEmpty", { enumerable: !0, get: function() {
    return Zc.isEmpty;
  } });
  var Qc = zo;
  Object.defineProperty(e, "last", { enumerable: !0, get: function() {
    return Qc.last;
  } });
  var Jc = gr;
  Object.defineProperty(e, "map", { enumerable: !0, get: function() {
    return Jc.map;
  } });
  var Xc = Vn;
  Object.defineProperty(e, "mapTo", { enumerable: !0, get: function() {
    return Xc.mapTo;
  } });
  var el = Yo;
  Object.defineProperty(e, "materialize", { enumerable: !0, get: function() {
    return el.materialize;
  } });
  var rl = Ko;
  Object.defineProperty(e, "max", { enumerable: !0, get: function() {
    return rl.max;
  } });
  var tl = ht;
  Object.defineProperty(e, "mergeAll", { enumerable: !0, get: function() {
    return tl.mergeAll;
  } });
  var nl = Go;
  Object.defineProperty(e, "flatMap", { enumerable: !0, get: function() {
    return nl.flatMap;
  } });
  var il = lr;
  Object.defineProperty(e, "mergeMap", { enumerable: !0, get: function() {
    return il.mergeMap;
  } });
  var ol = Zo;
  Object.defineProperty(e, "mergeMapTo", { enumerable: !0, get: function() {
    return ol.mergeMapTo;
  } });
  var al = Qo;
  Object.defineProperty(e, "mergeScan", { enumerable: !0, get: function() {
    return al.mergeScan;
  } });
  var Ib = Jo;
  Object.defineProperty(e, "mergeWith", { enumerable: !0, get: function() {
    return Ib.mergeWith;
  } });
  var Ab = ea;
  Object.defineProperty(e, "min", { enumerable: !0, get: function() {
    return Ab.min;
  } });
  var Rb = Qt;
  Object.defineProperty(e, "multicast", { enumerable: !0, get: function() {
    return Rb.multicast;
  } });
  var Cb = ft;
  Object.defineProperty(e, "observeOn", { enumerable: !0, get: function() {
    return Cb.observeOn;
  } });
  var jb = Ft;
  Object.defineProperty(e, "onErrorResumeNextWith", { enumerable: !0, get: function() {
    return jb.onErrorResumeNextWith;
  } });
  var Nb = ra;
  Object.defineProperty(e, "pairwise", { enumerable: !0, get: function() {
    return Nb.pairwise;
  } });
  var $b = ta;
  Object.defineProperty(e, "pluck", { enumerable: !0, get: function() {
    return $b.pluck;
  } });
  var Mb = na;
  Object.defineProperty(e, "publish", { enumerable: !0, get: function() {
    return Mb.publish;
  } });
  var kb = ia;
  Object.defineProperty(e, "publishBehavior", { enumerable: !0, get: function() {
    return kb.publishBehavior;
  } });
  var Db = oa;
  Object.defineProperty(e, "publishLast", { enumerable: !0, get: function() {
    return Db.publishLast;
  } });
  var Ub = aa;
  Object.defineProperty(e, "publishReplay", { enumerable: !0, get: function() {
    return Ub.publishReplay;
  } });
  var Lb = Kn;
  Object.defineProperty(e, "raceWith", { enumerable: !0, get: function() {
    return Lb.raceWith;
  } });
  var Fb = qr;
  Object.defineProperty(e, "reduce", { enumerable: !0, get: function() {
    return Fb.reduce;
  } });
  var Bb = ua;
  Object.defineProperty(e, "repeat", { enumerable: !0, get: function() {
    return Bb.repeat;
  } });
  var xb = sa;
  Object.defineProperty(e, "repeatWhen", { enumerable: !0, get: function() {
    return xb.repeatWhen;
  } });
  var Wb = ca;
  Object.defineProperty(e, "retry", { enumerable: !0, get: function() {
    return Wb.retry;
  } });
  var Vb = la;
  Object.defineProperty(e, "retryWhen", { enumerable: !0, get: function() {
    return Vb.retryWhen;
  } });
  var qb = An;
  Object.defineProperty(e, "refCount", { enumerable: !0, get: function() {
    return qb.refCount;
  } });
  var Hb = Gn;
  Object.defineProperty(e, "sample", { enumerable: !0, get: function() {
    return Hb.sample;
  } });
  var zb = fa;
  Object.defineProperty(e, "sampleTime", { enumerable: !0, get: function() {
    return zb.sampleTime;
  } });
  var Yb = da;
  Object.defineProperty(e, "scan", { enumerable: !0, get: function() {
    return Yb.scan;
  } });
  var Kb = ha;
  Object.defineProperty(e, "sequenceEqual", { enumerable: !0, get: function() {
    return Kb.sequenceEqual;
  } });
  var Gb = Zn;
  Object.defineProperty(e, "share", { enumerable: !0, get: function() {
    return Gb.share;
  } });
  var Zb = va;
  Object.defineProperty(e, "shareReplay", { enumerable: !0, get: function() {
    return Zb.shareReplay;
  } });
  var Qb = _a;
  Object.defineProperty(e, "single", { enumerable: !0, get: function() {
    return Qb.single;
  } });
  var Jb = pa;
  Object.defineProperty(e, "skip", { enumerable: !0, get: function() {
    return Jb.skip;
  } });
  var Xb = ma;
  Object.defineProperty(e, "skipLast", { enumerable: !0, get: function() {
    return Xb.skipLast;
  } });
  var e0 = ya;
  Object.defineProperty(e, "skipUntil", { enumerable: !0, get: function() {
    return e0.skipUntil;
  } });
  var r0 = ba;
  Object.defineProperty(e, "skipWhile", { enumerable: !0, get: function() {
    return r0.skipWhile;
  } });
  var t0 = ga;
  Object.defineProperty(e, "startWith", { enumerable: !0, get: function() {
    return t0.startWith;
  } });
  var n0 = dt;
  Object.defineProperty(e, "subscribeOn", { enumerable: !0, get: function() {
    return n0.subscribeOn;
  } });
  var i0 = Oa;
  Object.defineProperty(e, "switchAll", { enumerable: !0, get: function() {
    return i0.switchAll;
  } });
  var o0 = mt;
  Object.defineProperty(e, "switchMap", { enumerable: !0, get: function() {
    return o0.switchMap;
  } });
  var a0 = wa;
  Object.defineProperty(e, "switchMapTo", { enumerable: !0, get: function() {
    return a0.switchMapTo;
  } });
  var u0 = Ea;
  Object.defineProperty(e, "switchScan", { enumerable: !0, get: function() {
    return u0.switchScan;
  } });
  var s0 = _t;
  Object.defineProperty(e, "take", { enumerable: !0, get: function() {
    return s0.take;
  } });
  var c0 = Yn;
  Object.defineProperty(e, "takeLast", { enumerable: !0, get: function() {
    return c0.takeLast;
  } });
  var l0 = Sa;
  Object.defineProperty(e, "takeUntil", { enumerable: !0, get: function() {
    return l0.takeUntil;
  } });
  var f0 = Ta;
  Object.defineProperty(e, "takeWhile", { enumerable: !0, get: function() {
    return f0.takeWhile;
  } });
  var d0 = Pa;
  Object.defineProperty(e, "tap", { enumerable: !0, get: function() {
    return d0.tap;
  } });
  var h0 = ks;
  Object.defineProperty(e, "throttle", { enumerable: !0, get: function() {
    return h0.throttle;
  } });
  var v0 = Ia;
  Object.defineProperty(e, "throttleTime", { enumerable: !0, get: function() {
    return v0.throttleTime;
  } });
  var _0 = pt;
  Object.defineProperty(e, "throwIfEmpty", { enumerable: !0, get: function() {
    return _0.throwIfEmpty;
  } });
  var p0 = Bt;
  Object.defineProperty(e, "timeInterval", { enumerable: !0, get: function() {
    return p0.timeInterval;
  } });
  var m0 = ji;
  Object.defineProperty(e, "timeout", { enumerable: !0, get: function() {
    return m0.timeout;
  } });
  var y0 = Aa;
  Object.defineProperty(e, "timeoutWith", { enumerable: !0, get: function() {
    return y0.timeoutWith;
  } });
  var b0 = Ra;
  Object.defineProperty(e, "timestamp", { enumerable: !0, get: function() {
    return b0.timestamp;
  } });
  var g0 = Fn;
  Object.defineProperty(e, "toArray", { enumerable: !0, get: function() {
    return g0.toArray;
  } });
  var O0 = Ca;
  Object.defineProperty(e, "window", { enumerable: !0, get: function() {
    return O0.window;
  } });
  var w0 = ja;
  Object.defineProperty(e, "windowCount", { enumerable: !0, get: function() {
    return w0.windowCount;
  } });
  var E0 = Na;
  Object.defineProperty(e, "windowTime", { enumerable: !0, get: function() {
    return E0.windowTime;
  } });
  var S0 = $a;
  Object.defineProperty(e, "windowToggle", { enumerable: !0, get: function() {
    return S0.windowToggle;
  } });
  var T0 = Ma;
  Object.defineProperty(e, "windowWhen", { enumerable: !0, get: function() {
    return T0.windowWhen;
  } });
  var P0 = ka;
  Object.defineProperty(e, "withLatestFrom", { enumerable: !0, get: function() {
    return P0.withLatestFrom;
  } });
  var I0 = Da;
  Object.defineProperty(e, "zipAll", { enumerable: !0, get: function() {
    return I0.zipAll;
  } });
  var A0 = Ua;
  Object.defineProperty(e, "zipWith", { enumerable: !0, get: function() {
    return A0.zipWith;
  } });
})(Vi);
var Ds = {}, Us = {};
Object.defineProperty(Us, "__esModule", { value: !0 });
Us.partition = void 0;
var SU = ho, Pv = Or;
function TU(e, t) {
  return function(r) {
    return [Pv.filter(e, t)(r), Pv.filter(SU.not(e, t))(r)];
  };
}
Us.partition = TU;
var Ls = {}, PU = d && d.__read || function(e, t) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r)
    return e;
  var n = r.call(e), i, o = [], a;
  try {
    for (; (t === void 0 || t-- > 0) && !(i = n.next()).done; )
      o.push(i.value);
  } catch (s) {
    a = { error: s };
  } finally {
    try {
      i && !i.done && (r = n.return) && r.call(n);
    } finally {
      if (a)
        throw a.error;
    }
  }
  return o;
}, IU = d && d.__spreadArray || function(e, t) {
  for (var r = 0, n = t.length, i = e.length; r < n; r++, i++)
    e[i] = t[r];
  return e;
};
Object.defineProperty(Ls, "__esModule", { value: !0 });
Ls.race = void 0;
var AU = jr, RU = Kn;
function CU() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e[t] = arguments[t];
  return RU.raceWith.apply(void 0, IU([], PU(AU.argsOrArgArray(e))));
}
Ls.race = CU;
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.mergeAll = e.merge = e.max = e.materialize = e.mapTo = e.map = e.last = e.isEmpty = e.ignoreElements = e.groupBy = e.first = e.findIndex = e.find = e.finalize = e.filter = e.expand = e.exhaustMap = e.exhaustAll = e.exhaust = e.every = e.endWith = e.elementAt = e.distinctUntilKeyChanged = e.distinctUntilChanged = e.distinct = e.dematerialize = e.delayWhen = e.delay = e.defaultIfEmpty = e.debounceTime = e.debounce = e.count = e.connect = e.concatWith = e.concatMapTo = e.concatMap = e.concatAll = e.concat = e.combineLatestWith = e.combineLatest = e.combineLatestAll = e.combineAll = e.catchError = e.bufferWhen = e.bufferToggle = e.bufferTime = e.bufferCount = e.buffer = e.auditTime = e.audit = void 0, e.timeInterval = e.throwIfEmpty = e.throttleTime = e.throttle = e.tap = e.takeWhile = e.takeUntil = e.takeLast = e.take = e.switchScan = e.switchMapTo = e.switchMap = e.switchAll = e.subscribeOn = e.startWith = e.skipWhile = e.skipUntil = e.skipLast = e.skip = e.single = e.shareReplay = e.share = e.sequenceEqual = e.scan = e.sampleTime = e.sample = e.refCount = e.retryWhen = e.retry = e.repeatWhen = e.repeat = e.reduce = e.raceWith = e.race = e.publishReplay = e.publishLast = e.publishBehavior = e.publish = e.pluck = e.partition = e.pairwise = e.onErrorResumeNext = e.observeOn = e.multicast = e.min = e.mergeWith = e.mergeScan = e.mergeMapTo = e.mergeMap = e.flatMap = void 0, e.zipWith = e.zipAll = e.zip = e.withLatestFrom = e.windowWhen = e.windowToggle = e.windowTime = e.windowCount = e.window = e.toArray = e.timestamp = e.timeoutWith = e.timeout = void 0;
  var t = Un;
  Object.defineProperty(e, "audit", { enumerable: !0, get: function() {
    return t.audit;
  } });
  var r = vo;
  Object.defineProperty(e, "auditTime", { enumerable: !0, get: function() {
    return r.auditTime;
  } });
  var n = _o;
  Object.defineProperty(e, "buffer", { enumerable: !0, get: function() {
    return n.buffer;
  } });
  var i = po;
  Object.defineProperty(e, "bufferCount", { enumerable: !0, get: function() {
    return i.bufferCount;
  } });
  var o = mo;
  Object.defineProperty(e, "bufferTime", { enumerable: !0, get: function() {
    return o.bufferTime;
  } });
  var a = yo;
  Object.defineProperty(e, "bufferToggle", { enumerable: !0, get: function() {
    return a.bufferToggle;
  } });
  var s = bo;
  Object.defineProperty(e, "bufferWhen", { enumerable: !0, get: function() {
    return s.bufferWhen;
  } });
  var c = go;
  Object.defineProperty(e, "catchError", { enumerable: !0, get: function() {
    return c.catchError;
  } });
  var u = Oo;
  Object.defineProperty(e, "combineAll", { enumerable: !0, get: function() {
    return u.combineAll;
  } });
  var l = Ln;
  Object.defineProperty(e, "combineLatestAll", { enumerable: !0, get: function() {
    return l.combineLatestAll;
  } });
  var v = To;
  Object.defineProperty(e, "combineLatest", { enumerable: !0, get: function() {
    return v.combineLatest;
  } });
  var y = So;
  Object.defineProperty(e, "combineLatestWith", { enumerable: !0, get: function() {
    return y.combineLatestWith;
  } });
  var g = Ao;
  Object.defineProperty(e, "concat", { enumerable: !0, get: function() {
    return g.concat;
  } });
  var E = Kt;
  Object.defineProperty(e, "concatAll", { enumerable: !0, get: function() {
    return E.concatAll;
  } });
  var S = Bn;
  Object.defineProperty(e, "concatMap", { enumerable: !0, get: function() {
    return S.concatMap;
  } });
  var C = Po;
  Object.defineProperty(e, "concatMapTo", { enumerable: !0, get: function() {
    return C.concatMapTo;
  } });
  var R = Io;
  Object.defineProperty(e, "concatWith", { enumerable: !0, get: function() {
    return R.concatWith;
  } });
  var $ = Zt;
  Object.defineProperty(e, "connect", { enumerable: !0, get: function() {
    return $.connect;
  } });
  var U = Ro;
  Object.defineProperty(e, "count", { enumerable: !0, get: function() {
    return U.count;
  } });
  var D = Co;
  Object.defineProperty(e, "debounce", { enumerable: !0, get: function() {
    return D.debounce;
  } });
  var F = jo;
  Object.defineProperty(e, "debounceTime", { enumerable: !0, get: function() {
    return F.debounceTime;
  } });
  var K = vt;
  Object.defineProperty(e, "defaultIfEmpty", { enumerable: !0, get: function() {
    return K.defaultIfEmpty;
  } });
  var X = No;
  Object.defineProperty(e, "delay", { enumerable: !0, get: function() {
    return X.delay;
  } });
  var oe = xn;
  Object.defineProperty(e, "delayWhen", { enumerable: !0, get: function() {
    return oe.delayWhen;
  } });
  var de = $o;
  Object.defineProperty(e, "dematerialize", { enumerable: !0, get: function() {
    return de.dematerialize;
  } });
  var Ie = Mo;
  Object.defineProperty(e, "distinct", { enumerable: !0, get: function() {
    return Ie.distinct;
  } });
  var ge = qn;
  Object.defineProperty(e, "distinctUntilChanged", { enumerable: !0, get: function() {
    return ge.distinctUntilChanged;
  } });
  var Re = ko;
  Object.defineProperty(e, "distinctUntilKeyChanged", { enumerable: !0, get: function() {
    return Re.distinctUntilKeyChanged;
  } });
  var he = Do;
  Object.defineProperty(e, "elementAt", { enumerable: !0, get: function() {
    return he.elementAt;
  } });
  var se = Uo;
  Object.defineProperty(e, "endWith", { enumerable: !0, get: function() {
    return se.endWith;
  } });
  var V = Lo;
  Object.defineProperty(e, "every", { enumerable: !0, get: function() {
    return V.every;
  } });
  var J = Fo;
  Object.defineProperty(e, "exhaust", { enumerable: !0, get: function() {
    return J.exhaust;
  } });
  var re = Hn;
  Object.defineProperty(e, "exhaustAll", { enumerable: !0, get: function() {
    return re.exhaustAll;
  } });
  var H = zn;
  Object.defineProperty(e, "exhaustMap", { enumerable: !0, get: function() {
    return H.exhaustMap;
  } });
  var ce = Bo;
  Object.defineProperty(e, "expand", { enumerable: !0, get: function() {
    return ce.expand;
  } });
  var Ne = Or;
  Object.defineProperty(e, "filter", { enumerable: !0, get: function() {
    return Ne.filter;
  } });
  var G = xo;
  Object.defineProperty(e, "finalize", { enumerable: !0, get: function() {
    return G.finalize;
  } });
  var B = tt;
  Object.defineProperty(e, "find", { enumerable: !0, get: function() {
    return B.find;
  } });
  var Oe = Wo;
  Object.defineProperty(e, "findIndex", { enumerable: !0, get: function() {
    return Oe.findIndex;
  } });
  var I = Vo;
  Object.defineProperty(e, "first", { enumerable: !0, get: function() {
    return I.first;
  } });
  var M = qo;
  Object.defineProperty(e, "groupBy", { enumerable: !0, get: function() {
    return M.groupBy;
  } });
  var W = Wn;
  Object.defineProperty(e, "ignoreElements", { enumerable: !0, get: function() {
    return W.ignoreElements;
  } });
  var z = Ho;
  Object.defineProperty(e, "isEmpty", { enumerable: !0, get: function() {
    return z.isEmpty;
  } });
  var Z = zo;
  Object.defineProperty(e, "last", { enumerable: !0, get: function() {
    return Z.last;
  } });
  var Ae = gr;
  Object.defineProperty(e, "map", { enumerable: !0, get: function() {
    return Ae.map;
  } });
  var He = Vn;
  Object.defineProperty(e, "mapTo", { enumerable: !0, get: function() {
    return He.mapTo;
  } });
  var ir = Yo;
  Object.defineProperty(e, "materialize", { enumerable: !0, get: function() {
    return ir.materialize;
  } });
  var er = Ko;
  Object.defineProperty(e, "max", { enumerable: !0, get: function() {
    return er.max;
  } });
  var $e = Xo;
  Object.defineProperty(e, "merge", { enumerable: !0, get: function() {
    return $e.merge;
  } });
  var rr = ht;
  Object.defineProperty(e, "mergeAll", { enumerable: !0, get: function() {
    return rr.mergeAll;
  } });
  var bt = Go;
  Object.defineProperty(e, "flatMap", { enumerable: !0, get: function() {
    return bt.flatMap;
  } });
  var b = lr;
  Object.defineProperty(e, "mergeMap", { enumerable: !0, get: function() {
    return b.mergeMap;
  } });
  var _ = Zo;
  Object.defineProperty(e, "mergeMapTo", { enumerable: !0, get: function() {
    return _.mergeMapTo;
  } });
  var p = Qo;
  Object.defineProperty(e, "mergeScan", { enumerable: !0, get: function() {
    return p.mergeScan;
  } });
  var w = Jo;
  Object.defineProperty(e, "mergeWith", { enumerable: !0, get: function() {
    return w.mergeWith;
  } });
  var P = ea;
  Object.defineProperty(e, "min", { enumerable: !0, get: function() {
    return P.min;
  } });
  var k = Qt;
  Object.defineProperty(e, "multicast", { enumerable: !0, get: function() {
    return k.multicast;
  } });
  var L = ft;
  Object.defineProperty(e, "observeOn", { enumerable: !0, get: function() {
    return L.observeOn;
  } });
  var ne = Ft;
  Object.defineProperty(e, "onErrorResumeNext", { enumerable: !0, get: function() {
    return ne.onErrorResumeNext;
  } });
  var le = ra;
  Object.defineProperty(e, "pairwise", { enumerable: !0, get: function() {
    return le.pairwise;
  } });
  var ie = Us;
  Object.defineProperty(e, "partition", { enumerable: !0, get: function() {
    return ie.partition;
  } });
  var Ce = ta;
  Object.defineProperty(e, "pluck", { enumerable: !0, get: function() {
    return Ce.pluck;
  } });
  var m = na;
  Object.defineProperty(e, "publish", { enumerable: !0, get: function() {
    return m.publish;
  } });
  var f = ia;
  Object.defineProperty(e, "publishBehavior", { enumerable: !0, get: function() {
    return f.publishBehavior;
  } });
  var h = oa;
  Object.defineProperty(e, "publishLast", { enumerable: !0, get: function() {
    return h.publishLast;
  } });
  var O = aa;
  Object.defineProperty(e, "publishReplay", { enumerable: !0, get: function() {
    return O.publishReplay;
  } });
  var T = Ls;
  Object.defineProperty(e, "race", { enumerable: !0, get: function() {
    return T.race;
  } });
  var A = Kn;
  Object.defineProperty(e, "raceWith", { enumerable: !0, get: function() {
    return A.raceWith;
  } });
  var j = qr;
  Object.defineProperty(e, "reduce", { enumerable: !0, get: function() {
    return j.reduce;
  } });
  var te = ua;
  Object.defineProperty(e, "repeat", { enumerable: !0, get: function() {
    return te.repeat;
  } });
  var Ee = sa;
  Object.defineProperty(e, "repeatWhen", { enumerable: !0, get: function() {
    return Ee.repeatWhen;
  } });
  var ye = ca;
  Object.defineProperty(e, "retry", { enumerable: !0, get: function() {
    return ye.retry;
  } });
  var Se = la;
  Object.defineProperty(e, "retryWhen", { enumerable: !0, get: function() {
    return Se.retryWhen;
  } });
  var ve = An;
  Object.defineProperty(e, "refCount", { enumerable: !0, get: function() {
    return ve.refCount;
  } });
  var wc = Gn;
  Object.defineProperty(e, "sample", { enumerable: !0, get: function() {
    return wc.sample;
  } });
  var Ec = fa;
  Object.defineProperty(e, "sampleTime", { enumerable: !0, get: function() {
    return Ec.sampleTime;
  } });
  var Sc = da;
  Object.defineProperty(e, "scan", { enumerable: !0, get: function() {
    return Sc.scan;
  } });
  var Tc = ha;
  Object.defineProperty(e, "sequenceEqual", { enumerable: !0, get: function() {
    return Tc.sequenceEqual;
  } });
  var Pc = Zn;
  Object.defineProperty(e, "share", { enumerable: !0, get: function() {
    return Pc.share;
  } });
  var Ic = va;
  Object.defineProperty(e, "shareReplay", { enumerable: !0, get: function() {
    return Ic.shareReplay;
  } });
  var Ac = _a;
  Object.defineProperty(e, "single", { enumerable: !0, get: function() {
    return Ac.single;
  } });
  var Rc = pa;
  Object.defineProperty(e, "skip", { enumerable: !0, get: function() {
    return Rc.skip;
  } });
  var Cc = ma;
  Object.defineProperty(e, "skipLast", { enumerable: !0, get: function() {
    return Cc.skipLast;
  } });
  var jc = ya;
  Object.defineProperty(e, "skipUntil", { enumerable: !0, get: function() {
    return jc.skipUntil;
  } });
  var Nc = ba;
  Object.defineProperty(e, "skipWhile", { enumerable: !0, get: function() {
    return Nc.skipWhile;
  } });
  var $c = ga;
  Object.defineProperty(e, "startWith", { enumerable: !0, get: function() {
    return $c.startWith;
  } });
  var Mc = dt;
  Object.defineProperty(e, "subscribeOn", { enumerable: !0, get: function() {
    return Mc.subscribeOn;
  } });
  var kc = Oa;
  Object.defineProperty(e, "switchAll", { enumerable: !0, get: function() {
    return kc.switchAll;
  } });
  var Dc = mt;
  Object.defineProperty(e, "switchMap", { enumerable: !0, get: function() {
    return Dc.switchMap;
  } });
  var Uc = wa;
  Object.defineProperty(e, "switchMapTo", { enumerable: !0, get: function() {
    return Uc.switchMapTo;
  } });
  var Lc = Ea;
  Object.defineProperty(e, "switchScan", { enumerable: !0, get: function() {
    return Lc.switchScan;
  } });
  var Fc = _t;
  Object.defineProperty(e, "take", { enumerable: !0, get: function() {
    return Fc.take;
  } });
  var Bc = Yn;
  Object.defineProperty(e, "takeLast", { enumerable: !0, get: function() {
    return Bc.takeLast;
  } });
  var xc = Sa;
  Object.defineProperty(e, "takeUntil", { enumerable: !0, get: function() {
    return xc.takeUntil;
  } });
  var Wc = Ta;
  Object.defineProperty(e, "takeWhile", { enumerable: !0, get: function() {
    return Wc.takeWhile;
  } });
  var Vc = Pa;
  Object.defineProperty(e, "tap", { enumerable: !0, get: function() {
    return Vc.tap;
  } });
  var qc = ks;
  Object.defineProperty(e, "throttle", { enumerable: !0, get: function() {
    return qc.throttle;
  } });
  var Hc = Ia;
  Object.defineProperty(e, "throttleTime", { enumerable: !0, get: function() {
    return Hc.throttleTime;
  } });
  var zc = pt;
  Object.defineProperty(e, "throwIfEmpty", { enumerable: !0, get: function() {
    return zc.throwIfEmpty;
  } });
  var Yc = Bt;
  Object.defineProperty(e, "timeInterval", { enumerable: !0, get: function() {
    return Yc.timeInterval;
  } });
  var Kc = ji;
  Object.defineProperty(e, "timeout", { enumerable: !0, get: function() {
    return Kc.timeout;
  } });
  var Gc = Aa;
  Object.defineProperty(e, "timeoutWith", { enumerable: !0, get: function() {
    return Gc.timeoutWith;
  } });
  var Zc = Ra;
  Object.defineProperty(e, "timestamp", { enumerable: !0, get: function() {
    return Zc.timestamp;
  } });
  var Qc = Fn;
  Object.defineProperty(e, "toArray", { enumerable: !0, get: function() {
    return Qc.toArray;
  } });
  var Jc = Ca;
  Object.defineProperty(e, "window", { enumerable: !0, get: function() {
    return Jc.window;
  } });
  var Xc = ja;
  Object.defineProperty(e, "windowCount", { enumerable: !0, get: function() {
    return Xc.windowCount;
  } });
  var el = Na;
  Object.defineProperty(e, "windowTime", { enumerable: !0, get: function() {
    return el.windowTime;
  } });
  var rl = $a;
  Object.defineProperty(e, "windowToggle", { enumerable: !0, get: function() {
    return rl.windowToggle;
  } });
  var tl = Ma;
  Object.defineProperty(e, "windowWhen", { enumerable: !0, get: function() {
    return tl.windowWhen;
  } });
  var nl = ka;
  Object.defineProperty(e, "withLatestFrom", { enumerable: !0, get: function() {
    return nl.withLatestFrom;
  } });
  var il = La;
  Object.defineProperty(e, "zip", { enumerable: !0, get: function() {
    return il.zip;
  } });
  var ol = Da;
  Object.defineProperty(e, "zipAll", { enumerable: !0, get: function() {
    return ol.zipAll;
  } });
  var al = Ua;
  Object.defineProperty(e, "zipWith", { enumerable: !0, get: function() {
    return al.zipWith;
  } });
})(Ds);
var Qn = {}, fn = d && d.__awaiter || function(e, t, r, n) {
  function i(o) {
    return o instanceof r ? o : new r(function(a) {
      a(o);
    });
  }
  return new (r || (r = Promise))(function(o, a) {
    function s(l) {
      try {
        u(n.next(l));
      } catch (v) {
        a(v);
      }
    }
    function c(l) {
      try {
        u(n.throw(l));
      } catch (v) {
        a(v);
      }
    }
    function u(l) {
      l.done ? o(l.value) : i(l.value).then(s, c);
    }
    u((n = n.apply(e, t || [])).next());
  });
}, dn = d && d.__generator || function(e, t) {
  var r = { label: 0, sent: function() {
    if (o[0] & 1)
      throw o[1];
    return o[1];
  }, trys: [], ops: [] }, n, i, o, a;
  return a = { next: s(0), throw: s(1), return: s(2) }, typeof Symbol == "function" && (a[Symbol.iterator] = function() {
    return this;
  }), a;
  function s(u) {
    return function(l) {
      return c([u, l]);
    };
  }
  function c(u) {
    if (n)
      throw new TypeError("Generator is already executing.");
    for (; a && (a = 0, u[0] && (r = 0)), r; )
      try {
        if (n = 1, i && (o = u[0] & 2 ? i.return : u[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, u[1])).done)
          return o;
        switch (i = 0, o && (u = [u[0] & 2, o.value]), u[0]) {
          case 0:
          case 1:
            o = u;
            break;
          case 4:
            return r.label++, { value: u[1], done: !1 };
          case 5:
            r.label++, i = u[1], u = [0];
            continue;
          case 7:
            u = r.ops.pop(), r.trys.pop();
            continue;
          default:
            if (o = r.trys, !(o = o.length > 0 && o[o.length - 1]) && (u[0] === 6 || u[0] === 2)) {
              r = 0;
              continue;
            }
            if (u[0] === 3 && (!o || u[1] > o[0] && u[1] < o[3])) {
              r.label = u[1];
              break;
            }
            if (u[0] === 6 && r.label < o[1]) {
              r.label = o[1], o = u;
              break;
            }
            if (o && r.label < o[2]) {
              r.label = o[2], r.ops.push(u);
              break;
            }
            o[2] && r.ops.pop(), r.trys.pop();
            continue;
        }
        u = t.call(e, r);
      } catch (l) {
        u = [6, l], i = 0;
      } finally {
        n = o = 0;
      }
    if (u[0] & 5)
      throw u[1];
    return { value: u[0] ? u[1] : void 0, done: !0 };
  }
};
Object.defineProperty(Qn, "__esModule", { value: !0 });
var jU = ee, At = Vi, St = Ds, fi = {
  READY: 0,
  STREAMING: 1,
  COMPLETED: 2
}, NU = (
  /** @class */
  function() {
    function e(t, r) {
      var n = t.pipe((0, St.publishReplay)(1), (0, St.refCount)());
      this._result = n, this._keys = n.pipe((0, St.mergeMap)(function(i) {
        return (0, At.from)(i.keys());
      }), (0, St.publishReplay)(1), (0, St.refCount)()), this._records = void 0, this._controls = new Hm(), this._summary = new At.ReplaySubject(), this._state = r || fi.READY;
    }
    return e.prototype.keys = function() {
      return this._keys;
    }, e.prototype.records = function() {
      var t = this, r = this._result.pipe((0, St.mergeMap)(function(n) {
        return new At.Observable(function(i) {
          return t._startStreaming({ result: n, recordsObserver: i });
        });
      }));
      return r.push = function() {
        return t._push();
      }, r;
    }, e.prototype.consume = function() {
      var t = this;
      return this._result.pipe((0, St.mergeMap)(function(r) {
        return new At.Observable(function(n) {
          return t._startStreaming({ result: r, summaryObserver: n });
        });
      }));
    }, e.prototype.pause = function() {
      this._controls.pause();
    }, e.prototype.resume = function() {
      return this._controls.resume();
    }, e.prototype.push = function() {
      return this._controls.push();
    }, e.prototype._startStreaming = function(t) {
      var r = t === void 0 ? {} : t, n = r.result, i = r.recordsObserver, o = i === void 0 ? null : i, a = r.summaryObserver, s = a === void 0 ? null : a, c = [];
      return s && c.push(this._summary.subscribe(s)), this._state < fi.STREAMING ? (this._state = fi.STREAMING, this._setupRecordsStream(n), o ? c.push(this._records.subscribe(o)) : n._cancel(), c.push({
        unsubscribe: function() {
          n._cancel && n._cancel();
        }
      })) : o && o.error((0, jU.newError)("Streaming has already started/consumed with a previous records or summary subscription.")), function() {
        c.forEach(function(u) {
          return u.unsubscribe();
        });
      };
    }, e.prototype._toObservable = function() {
      var t = this;
      function r(n) {
        return new At.Observable(function(i) {
          i.next(n), i.complete();
        });
      }
      return new At.Observable(function(n) {
        t._result.subscribe({
          complete: function() {
            return n.complete();
          },
          next: function(i) {
            return n.next(new e(r(i)), t._state);
          },
          error: function(i) {
            return n.error(i);
          }
        });
      });
    }, e.prototype._setupRecordsStream = function(t) {
      var r = this;
      return this._records ? this._records : (this._records = $U(t[Symbol.asyncIterator](), {
        complete: function() {
          return fn(r, void 0, void 0, function() {
            var n, i;
            return dn(this, function(o) {
              switch (o.label) {
                case 0:
                  return this._state = fi.COMPLETED, i = (n = this._summary).next, [4, t.summary()];
                case 1:
                  return i.apply(n, [o.sent()]), this._summary.complete(), [
                    2
                    /*return*/
                  ];
              }
            });
          });
        },
        error: function(n) {
          r._state = fi.COMPLETED, r._summary.error(n);
        }
      }, this._controls), this._records);
    }, e;
  }()
);
Qn.default = NU;
function $U(e, t, r) {
  var n = this;
  r === void 0 && (r = new Hm());
  var i = new At.Subject(), o = function(s) {
    return fn(n, void 0, void 0, function() {
      var c, u, l, v;
      return dn(this, function(y) {
        switch (y.label) {
          case 0:
            return y.trys.push([0, 2, 3, 4]), r.pushing = !0, [4, s];
          case 1:
            return c = y.sent(), u = c.done, l = c.value, u ? (i.complete(), t.complete()) : (i.next(l), r.paused || o(e.next()).catch(function() {
            })), [3, 4];
          case 2:
            return v = y.sent(), i.error(v), t.error(v), [3, 4];
          case 3:
            return r.pushing = !1, [
              7
              /*endfinally*/
            ];
          case 4:
            return [
              2
              /*return*/
            ];
        }
      });
    });
  };
  function a(s) {
    return fn(this, void 0, void 0, function() {
      return dn(this, function(c) {
        switch (c.label) {
          case 0:
            return [4, o(e.next(s))];
          case 1:
            return c.sent(), [
              2
              /*return*/
            ];
        }
      });
    });
  }
  return r.pusher = a, a(), i;
}
var Hm = (
  /** @class */
  function() {
    function e(t) {
      t === void 0 && (t = function() {
        return fn(r, void 0, void 0, function() {
          return dn(this, function(n) {
            return [
              2
              /*return*/
            ];
          });
        });
      });
      var r = this;
      this._paused = !1, this._pushing = !1, this._push = t;
    }
    return e.prototype.pause = function() {
      this._paused = !0;
    }, Object.defineProperty(e.prototype, "paused", {
      get: function() {
        return this._paused;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "pushing", {
      get: function() {
        return this._pushing;
      },
      set: function(t) {
        this._pushing = t;
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.resume = function() {
      return fn(this, void 0, void 0, function() {
        var t;
        return dn(this, function(r) {
          switch (r.label) {
            case 0:
              return t = this._paused, this._paused = !1, t && !this._pushing ? [4, this._push()] : [3, 2];
            case 1:
              r.sent(), r.label = 2;
            case 2:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, e.prototype.push = function() {
      return fn(this, void 0, void 0, function() {
        return dn(this, function(t) {
          switch (t.label) {
            case 0:
              return this.pause(), [4, this._push()];
            case 1:
              return [2, t.sent()];
          }
        });
      });
    }, Object.defineProperty(e.prototype, "pusher", {
      get: function() {
        return this._push;
      },
      set: function(t) {
        this._push = t;
      },
      enumerable: !1,
      configurable: !0
    }), e;
  }()
), Fa = {}, zm = d && d.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(Fa, "__esModule", { value: !0 });
var nu = Vi, MU = zm(Qn);
zm(ee);
var kU = (
  /** @class */
  function() {
    function e(t) {
      this._txc = t;
    }
    return e.prototype.run = function(t, r) {
      var n = this;
      return new MU.default(new nu.Observable(function(i) {
        try {
          i.next(n._txc.run(t, r)), i.complete();
        } catch (o) {
          i.error(o);
        }
        return function() {
        };
      }));
    }, e.prototype.commit = function() {
      var t = this;
      return new nu.Observable(function(r) {
        t._txc.commit().then(function() {
          r.complete();
        }).catch(function(n) {
          return r.error(n);
        });
      });
    }, e.prototype.rollback = function() {
      var t = this;
      return new nu.Observable(function(r) {
        t._txc.rollback().then(function() {
          r.complete();
        }).catch(function(n) {
          return r.error(n);
        });
      });
    }, e.prototype.isOpen = function() {
      return this._txc.isOpen();
    }, e.prototype.close = function() {
      var t = this;
      return new nu.Observable(function(r) {
        t._txc.close().then(function() {
          r.complete();
        }).catch(function(n) {
          return r.error(n);
        });
      });
    }, e;
  }()
);
Fa.default = kU;
var Fs = {}, Ym = d && d.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(Fs, "__esModule", { value: !0 });
Ym(Qn);
Ym(Fa);
var DU = (
  /** @class */
  function() {
    function e(t) {
      var r = t.run;
      this._run = r;
    }
    return e.fromTransaction = function(t) {
      return new e({
        run: t.run.bind(t)
      });
    }, e.prototype.run = function(t, r) {
      return this._run(t, r);
    }, e;
  }()
);
Fs.default = DU;
var Kf = {};
Object.defineProperty(Kf, "__esModule", { value: !0 });
var Mu = ee, Rl = Vi, Cl = Ds;
Mu.internal.logger.Logger;
var UU = Mu.error.SERVICE_UNAVAILABLE, Iv = 30 * 1e3, Av = 1e3, Rv = 2, Cv = 0.2, LU = (
  /** @class */
  function() {
    function e(t) {
      var r = t === void 0 ? {} : t, n = r.maxRetryTimeout, i = n === void 0 ? Iv : n, o = r.initialDelay, a = o === void 0 ? Av : o, s = r.delayMultiplier, c = s === void 0 ? Rv : s, u = r.delayJitter, l = u === void 0 ? Cv : u, v = r.logger, y = v === void 0 ? null : v;
      this._maxRetryTimeout = iu(i, Iv), this._initialDelay = iu(a, Av), this._delayMultiplier = iu(c, Rv), this._delayJitter = iu(l, Cv), this._logger = y;
    }
    return e.prototype.retry = function(t) {
      var r = this;
      return t.pipe((0, Cl.retryWhen)(function(n) {
        var i = [], o = Date.now(), a = 1, s = r._initialDelay;
        return n.pipe((0, Cl.mergeMap)(function(c) {
          if (!(0, Mu.isRetriableError)(c))
            return (0, Rl.throwError)(function() {
              return c;
            });
          if (i.push(c), a >= 2 && Date.now() - o >= r._maxRetryTimeout) {
            var u = (0, Mu.newError)("Failed after retried for ".concat(a, " times in ").concat(r._maxRetryTimeout, " ms. Make sure that your database is online and retry again."), UU);
            return u.seenErrors = i, (0, Rl.throwError)(function() {
              return u;
            });
          }
          var l = r._computeNextDelay(s);
          return s = s * r._delayMultiplier, a++, r._logger && r._logger.warn("Transaction failed and will be retried in ".concat(l)), (0, Rl.of)(1).pipe((0, Cl.delay)(l));
        }));
      }));
    }, e.prototype._computeNextDelay = function(t) {
      var r = t * this._delayJitter;
      return t - r + 2 * r * Math.random();
    }, e;
  }()
);
Kf.default = LU;
function iu(e, t) {
  return e || e === 0 ? e : t;
}
var Bs = d && d.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(ts, "__esModule", { value: !0 });
var on = Vi, ou = Ds, FU = Bs(Qn), Km = ee, BU = Bs(Fa), xU = Bs(Fs), WU = Bs(Kf), Gm = Km.internal.constants, jv = Gm.ACCESS_MODE_READ, Nv = Gm.ACCESS_MODE_WRITE, au = Km.internal.txConfig.TxConfig, VU = (
  /** @class */
  function() {
    function e(t) {
      var r = t === void 0 ? {} : t, n = r.session, i = r.config;
      this._session = n, this._retryLogic = qU(i);
    }
    return e.prototype.run = function(t, r, n) {
      var i = this;
      return new FU.default(new on.Observable(function(o) {
        try {
          o.next(i._session.run(t, r, n)), o.complete();
        } catch (a) {
          o.error(a);
        }
        return function() {
        };
      }));
    }, e.prototype.beginTransaction = function(t) {
      return this._beginTransaction(this._session._mode, t);
    }, e.prototype.readTransaction = function(t, r) {
      return this._runTransaction(jv, t, r);
    }, e.prototype.writeTransaction = function(t, r) {
      return this._runTransaction(Nv, t, r);
    }, e.prototype.executeRead = function(t, r) {
      return this._executeInTransaction(jv, t, r);
    }, e.prototype.executeWrite = function(t, r) {
      return this._executeInTransaction(Nv, t, r);
    }, e.prototype._executeInTransaction = function(t, r, n) {
      var i = function(o) {
        return new xU.default({
          run: o.run.bind(o)
        });
      };
      return this._runTransaction(t, r, n, i);
    }, e.prototype.close = function() {
      var t = this;
      return new on.Observable(function(r) {
        t._session.close().then(function() {
          r.complete();
        }).catch(function(n) {
          return r.error(n);
        });
      });
    }, e.prototype.lastBookmark = function() {
      return this.lastBookmarks();
    }, e.prototype.lastBookmarks = function() {
      return this._session.lastBookmarks();
    }, e.prototype._beginTransaction = function(t, r) {
      var n = this, i = au.empty();
      return r && (i = new au(r)), new on.Observable(function(o) {
        try {
          n._session._beginTransaction(t, i).then(function(a) {
            o.next(new BU.default(a)), o.complete();
          }).catch(function(a) {
            return o.error(a);
          });
        } catch (a) {
          o.error(a);
        }
        return function() {
        };
      });
    }, e.prototype._runTransaction = function(t, r, n, i) {
      i === void 0 && (i = function(a) {
        return a;
      });
      var o = au.empty();
      return n && (o = new au(n)), this._retryLogic.retry(this._beginTransaction(t, o).pipe((0, ou.mergeMap)(function(a) {
        return (0, on.defer)(function() {
          try {
            return r(i(a));
          } catch (s) {
            return (0, on.throwError)(function() {
              return s;
            });
          }
        }).pipe((0, ou.catchError)(function(s) {
          return a.rollback().pipe((0, ou.concatWith)((0, on.throwError)(function() {
            return s;
          })));
        }), (0, ou.concatWith)(a.commit()));
      })));
    }, e;
  }()
);
ts.default = VU;
function qU(e) {
  var t = e && e.maxTransactionRetryTime ? e.maxTransactionRetryTime : null;
  return new WU.default({ maxRetryTimeout: t });
}
var HU = d && d.__extends || function() {
  var e = function(t, r) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var o in i)
        Object.prototype.hasOwnProperty.call(i, o) && (n[o] = i[o]);
    }, e(t, r);
  };
  return function(t, r) {
    if (typeof r != "function" && r !== null)
      throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
    e(t, r);
    function n() {
      this.constructor = t;
    }
    t.prototype = r === null ? Object.create(r) : (n.prototype = r.prototype, new n());
  };
}(), zU = d && d.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(Fr, "__esModule", { value: !0 });
Fr.WRITE = Fr.READ = Fr.Driver = void 0;
var xs = ee, YU = zU(ts), $v = xs.internal.constants.FETCH_ALL, KU = xs.driver.READ, Zm = xs.driver.WRITE;
Fr.READ = KU;
Fr.WRITE = Zm;
var Qm = (
  /** @class */
  function(e) {
    HU(t, e);
    function t() {
      return e !== null && e.apply(this, arguments) || this;
    }
    return t.prototype.rxSession = function(r) {
      var n = r === void 0 ? {} : r, i = n.defaultAccessMode, o = i === void 0 ? Zm : i, a = n.bookmarks, s = n.database, c = s === void 0 ? "" : s, u = n.fetchSize, l = n.impersonatedUser, v = n.bookmarkManager;
      return new YU.default({
        session: this._newSession({
          defaultAccessMode: o,
          bookmarkOrBookmarks: a,
          database: c,
          impersonatedUser: l,
          reactive: !1,
          fetchSize: GU(u, this._config.fetchSize),
          bookmarkManager: v
        }),
        config: this._config
      });
    }, t;
  }(xs.Driver)
);
Fr.Driver = Qm;
function GU(e, t) {
  var r = parseInt(e, 10);
  if (r > 0 || r === $v)
    return r;
  if (r === 0 || r < 0)
    throw new Error("The fetch size can only be a positive value or ".concat($v, " for ALL. However fetchSize = ").concat(r));
  return t;
}
Fr.default = Qm;
var Gf = {};
Object.defineProperty(Gf, "__esModule", { value: !0 });
Gf.default = "5.5.0";
var Jm = {}, nt = {}, Ws = {};
Object.defineProperty(Ws, "__esModule", { value: !0 });
var ZU = (
  /** @class */
  function() {
    function e() {
    }
    return e.prototype.selectReader = function(t) {
      throw new Error("Abstract function");
    }, e.prototype.selectWriter = function(t) {
      throw new Error("Abstract function");
    }, e;
  }()
);
Ws.default = ZU;
var Zf = {}, Qf = {};
Object.defineProperty(Qf, "__esModule", { value: !0 });
var QU = (
  /** @class */
  function() {
    function e(t) {
      this._offset = t || 0;
    }
    return e.prototype.next = function(t) {
      if (t === 0)
        return -1;
      var r = this._offset;
      return this._offset += 1, this._offset === Number.MAX_SAFE_INTEGER && (this._offset = 0), r % t;
    }, e;
  }()
);
Qf.default = QU;
var JU = d && d.__extends || function() {
  var e = function(t, r) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var o in i)
        Object.prototype.hasOwnProperty.call(i, o) && (n[o] = i[o]);
    }, e(t, r);
  };
  return function(t, r) {
    if (typeof r != "function" && r !== null)
      throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
    e(t, r);
    function n() {
      this.constructor = t;
    }
    t.prototype = r === null ? Object.create(r) : (n.prototype = r.prototype, new n());
  };
}(), Xm = d && d.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(Zf, "__esModule", { value: !0 });
var Mv = Xm(Qf), XU = Xm(Ws), eL = (
  /** @class */
  function(e) {
    JU(t, e);
    function t(r) {
      var n = e.call(this) || this;
      return n._readersIndex = new Mv.default(), n._writersIndex = new Mv.default(), n._connectionPool = r, n;
    }
    return t.prototype.selectReader = function(r) {
      return this._select(r, this._readersIndex);
    }, t.prototype.selectWriter = function(r) {
      return this._select(r, this._writersIndex);
    }, t.prototype._select = function(r, n) {
      var i = r.length;
      if (i === 0)
        return null;
      var o = n.next(i), a = o, s = null, c = Number.MAX_SAFE_INTEGER;
      do {
        var u = r[a], l = this._connectionPool.activeResourceCount(u);
        l < c && (s = u, c = l), a === i - 1 ? a = 0 : a++;
      } while (a !== o);
      return s;
    }, t;
  }(XU.default)
);
Zf.default = eL;
var ey = d && d.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(nt, "__esModule", { value: !0 });
nt.LeastConnectedLoadBalancingStrategy = nt.LoadBalancingStrategy = void 0;
var rL = ey(Ws);
nt.LoadBalancingStrategy = rL.default;
var ry = ey(Zf);
nt.LeastConnectedLoadBalancingStrategy = ry.default;
nt.default = ry.default;
var Jf = {}, Xf = {}, Jn = {}, yn = {}, ed = {}, Hr = {}, rd = {}, Ba = {};
Ba.byteLength = iL;
Ba.toByteArray = aL;
Ba.fromByteArray = cL;
var Er = [], ar = [], tL = typeof Uint8Array < "u" ? Uint8Array : Array, jl = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for (var an = 0, nL = jl.length; an < nL; ++an)
  Er[an] = jl[an], ar[jl.charCodeAt(an)] = an;
ar["-".charCodeAt(0)] = 62;
ar["_".charCodeAt(0)] = 63;
function ty(e) {
  var t = e.length;
  if (t % 4 > 0)
    throw new Error("Invalid string. Length must be a multiple of 4");
  var r = e.indexOf("=");
  r === -1 && (r = t);
  var n = r === t ? 0 : 4 - r % 4;
  return [r, n];
}
function iL(e) {
  var t = ty(e), r = t[0], n = t[1];
  return (r + n) * 3 / 4 - n;
}
function oL(e, t, r) {
  return (t + r) * 3 / 4 - r;
}
function aL(e) {
  var t, r = ty(e), n = r[0], i = r[1], o = new tL(oL(e, n, i)), a = 0, s = i > 0 ? n - 4 : n, c;
  for (c = 0; c < s; c += 4)
    t = ar[e.charCodeAt(c)] << 18 | ar[e.charCodeAt(c + 1)] << 12 | ar[e.charCodeAt(c + 2)] << 6 | ar[e.charCodeAt(c + 3)], o[a++] = t >> 16 & 255, o[a++] = t >> 8 & 255, o[a++] = t & 255;
  return i === 2 && (t = ar[e.charCodeAt(c)] << 2 | ar[e.charCodeAt(c + 1)] >> 4, o[a++] = t & 255), i === 1 && (t = ar[e.charCodeAt(c)] << 10 | ar[e.charCodeAt(c + 1)] << 4 | ar[e.charCodeAt(c + 2)] >> 2, o[a++] = t >> 8 & 255, o[a++] = t & 255), o;
}
function uL(e) {
  return Er[e >> 18 & 63] + Er[e >> 12 & 63] + Er[e >> 6 & 63] + Er[e & 63];
}
function sL(e, t, r) {
  for (var n, i = [], o = t; o < r; o += 3)
    n = (e[o] << 16 & 16711680) + (e[o + 1] << 8 & 65280) + (e[o + 2] & 255), i.push(uL(n));
  return i.join("");
}
function cL(e) {
  for (var t, r = e.length, n = r % 3, i = [], o = 16383, a = 0, s = r - n; a < s; a += o)
    i.push(sL(e, a, a + o > s ? s : a + o));
  return n === 1 ? (t = e[r - 1], i.push(
    Er[t >> 2] + Er[t << 4 & 63] + "=="
  )) : n === 2 && (t = (e[r - 2] << 8) + e[r - 1], i.push(
    Er[t >> 10] + Er[t >> 4 & 63] + Er[t << 2 & 63] + "="
  )), i.join("");
}
var Vs = {};
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
Vs.read = function(e, t, r, n, i) {
  var o, a, s = i * 8 - n - 1, c = (1 << s) - 1, u = c >> 1, l = -7, v = r ? i - 1 : 0, y = r ? -1 : 1, g = e[t + v];
  for (v += y, o = g & (1 << -l) - 1, g >>= -l, l += s; l > 0; o = o * 256 + e[t + v], v += y, l -= 8)
    ;
  for (a = o & (1 << -l) - 1, o >>= -l, l += n; l > 0; a = a * 256 + e[t + v], v += y, l -= 8)
    ;
  if (o === 0)
    o = 1 - u;
  else {
    if (o === c)
      return a ? NaN : (g ? -1 : 1) * (1 / 0);
    a = a + Math.pow(2, n), o = o - u;
  }
  return (g ? -1 : 1) * a * Math.pow(2, o - n);
};
Vs.write = function(e, t, r, n, i, o) {
  var a, s, c, u = o * 8 - i - 1, l = (1 << u) - 1, v = l >> 1, y = i === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, g = n ? 0 : o - 1, E = n ? 1 : -1, S = t < 0 || t === 0 && 1 / t < 0 ? 1 : 0;
  for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (s = isNaN(t) ? 1 : 0, a = l) : (a = Math.floor(Math.log(t) / Math.LN2), t * (c = Math.pow(2, -a)) < 1 && (a--, c *= 2), a + v >= 1 ? t += y / c : t += y * Math.pow(2, 1 - v), t * c >= 2 && (a++, c /= 2), a + v >= l ? (s = 0, a = l) : a + v >= 1 ? (s = (t * c - 1) * Math.pow(2, i), a = a + v) : (s = t * Math.pow(2, v - 1) * Math.pow(2, i), a = 0)); i >= 8; e[r + g] = s & 255, g += E, s /= 256, i -= 8)
    ;
  for (a = a << i | s, u += i; u > 0; e[r + g] = a & 255, g += E, a /= 256, u -= 8)
    ;
  e[r + g - E] |= S * 128;
};
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
(function(e) {
  const t = Ba, r = Vs, n = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
  e.Buffer = s, e.SlowBuffer = $, e.INSPECT_MAX_BYTES = 50;
  const i = 2147483647;
  e.kMaxLength = i, s.TYPED_ARRAY_SUPPORT = o(), !s.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error(
    "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
  );
  function o() {
    try {
      const m = new Uint8Array(1), f = { foo: function() {
        return 42;
      } };
      return Object.setPrototypeOf(f, Uint8Array.prototype), Object.setPrototypeOf(m, f), m.foo() === 42;
    } catch {
      return !1;
    }
  }
  Object.defineProperty(s.prototype, "parent", {
    enumerable: !0,
    get: function() {
      if (s.isBuffer(this))
        return this.buffer;
    }
  }), Object.defineProperty(s.prototype, "offset", {
    enumerable: !0,
    get: function() {
      if (s.isBuffer(this))
        return this.byteOffset;
    }
  });
  function a(m) {
    if (m > i)
      throw new RangeError('The value "' + m + '" is invalid for option "size"');
    const f = new Uint8Array(m);
    return Object.setPrototypeOf(f, s.prototype), f;
  }
  function s(m, f, h) {
    if (typeof m == "number") {
      if (typeof f == "string")
        throw new TypeError(
          'The "string" argument must be of type string. Received type number'
        );
      return v(m);
    }
    return c(m, f, h);
  }
  s.poolSize = 8192;
  function c(m, f, h) {
    if (typeof m == "string")
      return y(m, f);
    if (ArrayBuffer.isView(m))
      return E(m);
    if (m == null)
      throw new TypeError(
        "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof m
      );
    if (L(m, ArrayBuffer) || m && L(m.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (L(m, SharedArrayBuffer) || m && L(m.buffer, SharedArrayBuffer)))
      return S(m, f, h);
    if (typeof m == "number")
      throw new TypeError(
        'The "value" argument must not be of type number. Received type number'
      );
    const O = m.valueOf && m.valueOf();
    if (O != null && O !== m)
      return s.from(O, f, h);
    const T = C(m);
    if (T)
      return T;
    if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof m[Symbol.toPrimitive] == "function")
      return s.from(m[Symbol.toPrimitive]("string"), f, h);
    throw new TypeError(
      "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof m
    );
  }
  s.from = function(m, f, h) {
    return c(m, f, h);
  }, Object.setPrototypeOf(s.prototype, Uint8Array.prototype), Object.setPrototypeOf(s, Uint8Array);
  function u(m) {
    if (typeof m != "number")
      throw new TypeError('"size" argument must be of type number');
    if (m < 0)
      throw new RangeError('The value "' + m + '" is invalid for option "size"');
  }
  function l(m, f, h) {
    return u(m), m <= 0 ? a(m) : f !== void 0 ? typeof h == "string" ? a(m).fill(f, h) : a(m).fill(f) : a(m);
  }
  s.alloc = function(m, f, h) {
    return l(m, f, h);
  };
  function v(m) {
    return u(m), a(m < 0 ? 0 : R(m) | 0);
  }
  s.allocUnsafe = function(m) {
    return v(m);
  }, s.allocUnsafeSlow = function(m) {
    return v(m);
  };
  function y(m, f) {
    if ((typeof f != "string" || f === "") && (f = "utf8"), !s.isEncoding(f))
      throw new TypeError("Unknown encoding: " + f);
    const h = U(m, f) | 0;
    let O = a(h);
    const T = O.write(m, f);
    return T !== h && (O = O.slice(0, T)), O;
  }
  function g(m) {
    const f = m.length < 0 ? 0 : R(m.length) | 0, h = a(f);
    for (let O = 0; O < f; O += 1)
      h[O] = m[O] & 255;
    return h;
  }
  function E(m) {
    if (L(m, Uint8Array)) {
      const f = new Uint8Array(m);
      return S(f.buffer, f.byteOffset, f.byteLength);
    }
    return g(m);
  }
  function S(m, f, h) {
    if (f < 0 || m.byteLength < f)
      throw new RangeError('"offset" is outside of buffer bounds');
    if (m.byteLength < f + (h || 0))
      throw new RangeError('"length" is outside of buffer bounds');
    let O;
    return f === void 0 && h === void 0 ? O = new Uint8Array(m) : h === void 0 ? O = new Uint8Array(m, f) : O = new Uint8Array(m, f, h), Object.setPrototypeOf(O, s.prototype), O;
  }
  function C(m) {
    if (s.isBuffer(m)) {
      const f = R(m.length) | 0, h = a(f);
      return h.length === 0 || m.copy(h, 0, 0, f), h;
    }
    if (m.length !== void 0)
      return typeof m.length != "number" || ne(m.length) ? a(0) : g(m);
    if (m.type === "Buffer" && Array.isArray(m.data))
      return g(m.data);
  }
  function R(m) {
    if (m >= i)
      throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + i.toString(16) + " bytes");
    return m | 0;
  }
  function $(m) {
    return +m != m && (m = 0), s.alloc(+m);
  }
  s.isBuffer = function(f) {
    return f != null && f._isBuffer === !0 && f !== s.prototype;
  }, s.compare = function(f, h) {
    if (L(f, Uint8Array) && (f = s.from(f, f.offset, f.byteLength)), L(h, Uint8Array) && (h = s.from(h, h.offset, h.byteLength)), !s.isBuffer(f) || !s.isBuffer(h))
      throw new TypeError(
        'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
      );
    if (f === h)
      return 0;
    let O = f.length, T = h.length;
    for (let A = 0, j = Math.min(O, T); A < j; ++A)
      if (f[A] !== h[A]) {
        O = f[A], T = h[A];
        break;
      }
    return O < T ? -1 : T < O ? 1 : 0;
  }, s.isEncoding = function(f) {
    switch (String(f).toLowerCase()) {
      case "hex":
      case "utf8":
      case "utf-8":
      case "ascii":
      case "latin1":
      case "binary":
      case "base64":
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return !0;
      default:
        return !1;
    }
  }, s.concat = function(f, h) {
    if (!Array.isArray(f))
      throw new TypeError('"list" argument must be an Array of Buffers');
    if (f.length === 0)
      return s.alloc(0);
    let O;
    if (h === void 0)
      for (h = 0, O = 0; O < f.length; ++O)
        h += f[O].length;
    const T = s.allocUnsafe(h);
    let A = 0;
    for (O = 0; O < f.length; ++O) {
      let j = f[O];
      if (L(j, Uint8Array))
        A + j.length > T.length ? (s.isBuffer(j) || (j = s.from(j)), j.copy(T, A)) : Uint8Array.prototype.set.call(
          T,
          j,
          A
        );
      else if (s.isBuffer(j))
        j.copy(T, A);
      else
        throw new TypeError('"list" argument must be an Array of Buffers');
      A += j.length;
    }
    return T;
  };
  function U(m, f) {
    if (s.isBuffer(m))
      return m.length;
    if (ArrayBuffer.isView(m) || L(m, ArrayBuffer))
      return m.byteLength;
    if (typeof m != "string")
      throw new TypeError(
        'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof m
      );
    const h = m.length, O = arguments.length > 2 && arguments[2] === !0;
    if (!O && h === 0)
      return 0;
    let T = !1;
    for (; ; )
      switch (f) {
        case "ascii":
        case "latin1":
        case "binary":
          return h;
        case "utf8":
        case "utf-8":
          return _(m).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return h * 2;
        case "hex":
          return h >>> 1;
        case "base64":
          return P(m).length;
        default:
          if (T)
            return O ? -1 : _(m).length;
          f = ("" + f).toLowerCase(), T = !0;
      }
  }
  s.byteLength = U;
  function D(m, f, h) {
    let O = !1;
    if ((f === void 0 || f < 0) && (f = 0), f > this.length || ((h === void 0 || h > this.length) && (h = this.length), h <= 0) || (h >>>= 0, f >>>= 0, h <= f))
      return "";
    for (m || (m = "utf8"); ; )
      switch (m) {
        case "hex":
          return ce(this, f, h);
        case "utf8":
        case "utf-8":
          return se(this, f, h);
        case "ascii":
          return re(this, f, h);
        case "latin1":
        case "binary":
          return H(this, f, h);
        case "base64":
          return he(this, f, h);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return Ne(this, f, h);
        default:
          if (O)
            throw new TypeError("Unknown encoding: " + m);
          m = (m + "").toLowerCase(), O = !0;
      }
  }
  s.prototype._isBuffer = !0;
  function F(m, f, h) {
    const O = m[f];
    m[f] = m[h], m[h] = O;
  }
  s.prototype.swap16 = function() {
    const f = this.length;
    if (f % 2 !== 0)
      throw new RangeError("Buffer size must be a multiple of 16-bits");
    for (let h = 0; h < f; h += 2)
      F(this, h, h + 1);
    return this;
  }, s.prototype.swap32 = function() {
    const f = this.length;
    if (f % 4 !== 0)
      throw new RangeError("Buffer size must be a multiple of 32-bits");
    for (let h = 0; h < f; h += 4)
      F(this, h, h + 3), F(this, h + 1, h + 2);
    return this;
  }, s.prototype.swap64 = function() {
    const f = this.length;
    if (f % 8 !== 0)
      throw new RangeError("Buffer size must be a multiple of 64-bits");
    for (let h = 0; h < f; h += 8)
      F(this, h, h + 7), F(this, h + 1, h + 6), F(this, h + 2, h + 5), F(this, h + 3, h + 4);
    return this;
  }, s.prototype.toString = function() {
    const f = this.length;
    return f === 0 ? "" : arguments.length === 0 ? se(this, 0, f) : D.apply(this, arguments);
  }, s.prototype.toLocaleString = s.prototype.toString, s.prototype.equals = function(f) {
    if (!s.isBuffer(f))
      throw new TypeError("Argument must be a Buffer");
    return this === f ? !0 : s.compare(this, f) === 0;
  }, s.prototype.inspect = function() {
    let f = "";
    const h = e.INSPECT_MAX_BYTES;
    return f = this.toString("hex", 0, h).replace(/(.{2})/g, "$1 ").trim(), this.length > h && (f += " ... "), "<Buffer " + f + ">";
  }, n && (s.prototype[n] = s.prototype.inspect), s.prototype.compare = function(f, h, O, T, A) {
    if (L(f, Uint8Array) && (f = s.from(f, f.offset, f.byteLength)), !s.isBuffer(f))
      throw new TypeError(
        'The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof f
      );
    if (h === void 0 && (h = 0), O === void 0 && (O = f ? f.length : 0), T === void 0 && (T = 0), A === void 0 && (A = this.length), h < 0 || O > f.length || T < 0 || A > this.length)
      throw new RangeError("out of range index");
    if (T >= A && h >= O)
      return 0;
    if (T >= A)
      return -1;
    if (h >= O)
      return 1;
    if (h >>>= 0, O >>>= 0, T >>>= 0, A >>>= 0, this === f)
      return 0;
    let j = A - T, te = O - h;
    const Ee = Math.min(j, te), ye = this.slice(T, A), Se = f.slice(h, O);
    for (let ve = 0; ve < Ee; ++ve)
      if (ye[ve] !== Se[ve]) {
        j = ye[ve], te = Se[ve];
        break;
      }
    return j < te ? -1 : te < j ? 1 : 0;
  };
  function K(m, f, h, O, T) {
    if (m.length === 0)
      return -1;
    if (typeof h == "string" ? (O = h, h = 0) : h > 2147483647 ? h = 2147483647 : h < -2147483648 && (h = -2147483648), h = +h, ne(h) && (h = T ? 0 : m.length - 1), h < 0 && (h = m.length + h), h >= m.length) {
      if (T)
        return -1;
      h = m.length - 1;
    } else if (h < 0)
      if (T)
        h = 0;
      else
        return -1;
    if (typeof f == "string" && (f = s.from(f, O)), s.isBuffer(f))
      return f.length === 0 ? -1 : X(m, f, h, O, T);
    if (typeof f == "number")
      return f = f & 255, typeof Uint8Array.prototype.indexOf == "function" ? T ? Uint8Array.prototype.indexOf.call(m, f, h) : Uint8Array.prototype.lastIndexOf.call(m, f, h) : X(m, [f], h, O, T);
    throw new TypeError("val must be string, number or Buffer");
  }
  function X(m, f, h, O, T) {
    let A = 1, j = m.length, te = f.length;
    if (O !== void 0 && (O = String(O).toLowerCase(), O === "ucs2" || O === "ucs-2" || O === "utf16le" || O === "utf-16le")) {
      if (m.length < 2 || f.length < 2)
        return -1;
      A = 2, j /= 2, te /= 2, h /= 2;
    }
    function Ee(Se, ve) {
      return A === 1 ? Se[ve] : Se.readUInt16BE(ve * A);
    }
    let ye;
    if (T) {
      let Se = -1;
      for (ye = h; ye < j; ye++)
        if (Ee(m, ye) === Ee(f, Se === -1 ? 0 : ye - Se)) {
          if (Se === -1 && (Se = ye), ye - Se + 1 === te)
            return Se * A;
        } else
          Se !== -1 && (ye -= ye - Se), Se = -1;
    } else
      for (h + te > j && (h = j - te), ye = h; ye >= 0; ye--) {
        let Se = !0;
        for (let ve = 0; ve < te; ve++)
          if (Ee(m, ye + ve) !== Ee(f, ve)) {
            Se = !1;
            break;
          }
        if (Se)
          return ye;
      }
    return -1;
  }
  s.prototype.includes = function(f, h, O) {
    return this.indexOf(f, h, O) !== -1;
  }, s.prototype.indexOf = function(f, h, O) {
    return K(this, f, h, O, !0);
  }, s.prototype.lastIndexOf = function(f, h, O) {
    return K(this, f, h, O, !1);
  };
  function oe(m, f, h, O) {
    h = Number(h) || 0;
    const T = m.length - h;
    O ? (O = Number(O), O > T && (O = T)) : O = T;
    const A = f.length;
    O > A / 2 && (O = A / 2);
    let j;
    for (j = 0; j < O; ++j) {
      const te = parseInt(f.substr(j * 2, 2), 16);
      if (ne(te))
        return j;
      m[h + j] = te;
    }
    return j;
  }
  function de(m, f, h, O) {
    return k(_(f, m.length - h), m, h, O);
  }
  function Ie(m, f, h, O) {
    return k(p(f), m, h, O);
  }
  function ge(m, f, h, O) {
    return k(P(f), m, h, O);
  }
  function Re(m, f, h, O) {
    return k(w(f, m.length - h), m, h, O);
  }
  s.prototype.write = function(f, h, O, T) {
    if (h === void 0)
      T = "utf8", O = this.length, h = 0;
    else if (O === void 0 && typeof h == "string")
      T = h, O = this.length, h = 0;
    else if (isFinite(h))
      h = h >>> 0, isFinite(O) ? (O = O >>> 0, T === void 0 && (T = "utf8")) : (T = O, O = void 0);
    else
      throw new Error(
        "Buffer.write(string, encoding, offset[, length]) is no longer supported"
      );
    const A = this.length - h;
    if ((O === void 0 || O > A) && (O = A), f.length > 0 && (O < 0 || h < 0) || h > this.length)
      throw new RangeError("Attempt to write outside buffer bounds");
    T || (T = "utf8");
    let j = !1;
    for (; ; )
      switch (T) {
        case "hex":
          return oe(this, f, h, O);
        case "utf8":
        case "utf-8":
          return de(this, f, h, O);
        case "ascii":
        case "latin1":
        case "binary":
          return Ie(this, f, h, O);
        case "base64":
          return ge(this, f, h, O);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return Re(this, f, h, O);
        default:
          if (j)
            throw new TypeError("Unknown encoding: " + T);
          T = ("" + T).toLowerCase(), j = !0;
      }
  }, s.prototype.toJSON = function() {
    return {
      type: "Buffer",
      data: Array.prototype.slice.call(this._arr || this, 0)
    };
  };
  function he(m, f, h) {
    return f === 0 && h === m.length ? t.fromByteArray(m) : t.fromByteArray(m.slice(f, h));
  }
  function se(m, f, h) {
    h = Math.min(m.length, h);
    const O = [];
    let T = f;
    for (; T < h; ) {
      const A = m[T];
      let j = null, te = A > 239 ? 4 : A > 223 ? 3 : A > 191 ? 2 : 1;
      if (T + te <= h) {
        let Ee, ye, Se, ve;
        switch (te) {
          case 1:
            A < 128 && (j = A);
            break;
          case 2:
            Ee = m[T + 1], (Ee & 192) === 128 && (ve = (A & 31) << 6 | Ee & 63, ve > 127 && (j = ve));
            break;
          case 3:
            Ee = m[T + 1], ye = m[T + 2], (Ee & 192) === 128 && (ye & 192) === 128 && (ve = (A & 15) << 12 | (Ee & 63) << 6 | ye & 63, ve > 2047 && (ve < 55296 || ve > 57343) && (j = ve));
            break;
          case 4:
            Ee = m[T + 1], ye = m[T + 2], Se = m[T + 3], (Ee & 192) === 128 && (ye & 192) === 128 && (Se & 192) === 128 && (ve = (A & 15) << 18 | (Ee & 63) << 12 | (ye & 63) << 6 | Se & 63, ve > 65535 && ve < 1114112 && (j = ve));
        }
      }
      j === null ? (j = 65533, te = 1) : j > 65535 && (j -= 65536, O.push(j >>> 10 & 1023 | 55296), j = 56320 | j & 1023), O.push(j), T += te;
    }
    return J(O);
  }
  const V = 4096;
  function J(m) {
    const f = m.length;
    if (f <= V)
      return String.fromCharCode.apply(String, m);
    let h = "", O = 0;
    for (; O < f; )
      h += String.fromCharCode.apply(
        String,
        m.slice(O, O += V)
      );
    return h;
  }
  function re(m, f, h) {
    let O = "";
    h = Math.min(m.length, h);
    for (let T = f; T < h; ++T)
      O += String.fromCharCode(m[T] & 127);
    return O;
  }
  function H(m, f, h) {
    let O = "";
    h = Math.min(m.length, h);
    for (let T = f; T < h; ++T)
      O += String.fromCharCode(m[T]);
    return O;
  }
  function ce(m, f, h) {
    const O = m.length;
    (!f || f < 0) && (f = 0), (!h || h < 0 || h > O) && (h = O);
    let T = "";
    for (let A = f; A < h; ++A)
      T += le[m[A]];
    return T;
  }
  function Ne(m, f, h) {
    const O = m.slice(f, h);
    let T = "";
    for (let A = 0; A < O.length - 1; A += 2)
      T += String.fromCharCode(O[A] + O[A + 1] * 256);
    return T;
  }
  s.prototype.slice = function(f, h) {
    const O = this.length;
    f = ~~f, h = h === void 0 ? O : ~~h, f < 0 ? (f += O, f < 0 && (f = 0)) : f > O && (f = O), h < 0 ? (h += O, h < 0 && (h = 0)) : h > O && (h = O), h < f && (h = f);
    const T = this.subarray(f, h);
    return Object.setPrototypeOf(T, s.prototype), T;
  };
  function G(m, f, h) {
    if (m % 1 !== 0 || m < 0)
      throw new RangeError("offset is not uint");
    if (m + f > h)
      throw new RangeError("Trying to access beyond buffer length");
  }
  s.prototype.readUintLE = s.prototype.readUIntLE = function(f, h, O) {
    f = f >>> 0, h = h >>> 0, O || G(f, h, this.length);
    let T = this[f], A = 1, j = 0;
    for (; ++j < h && (A *= 256); )
      T += this[f + j] * A;
    return T;
  }, s.prototype.readUintBE = s.prototype.readUIntBE = function(f, h, O) {
    f = f >>> 0, h = h >>> 0, O || G(f, h, this.length);
    let T = this[f + --h], A = 1;
    for (; h > 0 && (A *= 256); )
      T += this[f + --h] * A;
    return T;
  }, s.prototype.readUint8 = s.prototype.readUInt8 = function(f, h) {
    return f = f >>> 0, h || G(f, 1, this.length), this[f];
  }, s.prototype.readUint16LE = s.prototype.readUInt16LE = function(f, h) {
    return f = f >>> 0, h || G(f, 2, this.length), this[f] | this[f + 1] << 8;
  }, s.prototype.readUint16BE = s.prototype.readUInt16BE = function(f, h) {
    return f = f >>> 0, h || G(f, 2, this.length), this[f] << 8 | this[f + 1];
  }, s.prototype.readUint32LE = s.prototype.readUInt32LE = function(f, h) {
    return f = f >>> 0, h || G(f, 4, this.length), (this[f] | this[f + 1] << 8 | this[f + 2] << 16) + this[f + 3] * 16777216;
  }, s.prototype.readUint32BE = s.prototype.readUInt32BE = function(f, h) {
    return f = f >>> 0, h || G(f, 4, this.length), this[f] * 16777216 + (this[f + 1] << 16 | this[f + 2] << 8 | this[f + 3]);
  }, s.prototype.readBigUInt64LE = ie(function(f) {
    f = f >>> 0, $e(f, "offset");
    const h = this[f], O = this[f + 7];
    (h === void 0 || O === void 0) && rr(f, this.length - 8);
    const T = h + this[++f] * 2 ** 8 + this[++f] * 2 ** 16 + this[++f] * 2 ** 24, A = this[++f] + this[++f] * 2 ** 8 + this[++f] * 2 ** 16 + O * 2 ** 24;
    return BigInt(T) + (BigInt(A) << BigInt(32));
  }), s.prototype.readBigUInt64BE = ie(function(f) {
    f = f >>> 0, $e(f, "offset");
    const h = this[f], O = this[f + 7];
    (h === void 0 || O === void 0) && rr(f, this.length - 8);
    const T = h * 2 ** 24 + this[++f] * 2 ** 16 + this[++f] * 2 ** 8 + this[++f], A = this[++f] * 2 ** 24 + this[++f] * 2 ** 16 + this[++f] * 2 ** 8 + O;
    return (BigInt(T) << BigInt(32)) + BigInt(A);
  }), s.prototype.readIntLE = function(f, h, O) {
    f = f >>> 0, h = h >>> 0, O || G(f, h, this.length);
    let T = this[f], A = 1, j = 0;
    for (; ++j < h && (A *= 256); )
      T += this[f + j] * A;
    return A *= 128, T >= A && (T -= Math.pow(2, 8 * h)), T;
  }, s.prototype.readIntBE = function(f, h, O) {
    f = f >>> 0, h = h >>> 0, O || G(f, h, this.length);
    let T = h, A = 1, j = this[f + --T];
    for (; T > 0 && (A *= 256); )
      j += this[f + --T] * A;
    return A *= 128, j >= A && (j -= Math.pow(2, 8 * h)), j;
  }, s.prototype.readInt8 = function(f, h) {
    return f = f >>> 0, h || G(f, 1, this.length), this[f] & 128 ? (255 - this[f] + 1) * -1 : this[f];
  }, s.prototype.readInt16LE = function(f, h) {
    f = f >>> 0, h || G(f, 2, this.length);
    const O = this[f] | this[f + 1] << 8;
    return O & 32768 ? O | 4294901760 : O;
  }, s.prototype.readInt16BE = function(f, h) {
    f = f >>> 0, h || G(f, 2, this.length);
    const O = this[f + 1] | this[f] << 8;
    return O & 32768 ? O | 4294901760 : O;
  }, s.prototype.readInt32LE = function(f, h) {
    return f = f >>> 0, h || G(f, 4, this.length), this[f] | this[f + 1] << 8 | this[f + 2] << 16 | this[f + 3] << 24;
  }, s.prototype.readInt32BE = function(f, h) {
    return f = f >>> 0, h || G(f, 4, this.length), this[f] << 24 | this[f + 1] << 16 | this[f + 2] << 8 | this[f + 3];
  }, s.prototype.readBigInt64LE = ie(function(f) {
    f = f >>> 0, $e(f, "offset");
    const h = this[f], O = this[f + 7];
    (h === void 0 || O === void 0) && rr(f, this.length - 8);
    const T = this[f + 4] + this[f + 5] * 2 ** 8 + this[f + 6] * 2 ** 16 + (O << 24);
    return (BigInt(T) << BigInt(32)) + BigInt(h + this[++f] * 2 ** 8 + this[++f] * 2 ** 16 + this[++f] * 2 ** 24);
  }), s.prototype.readBigInt64BE = ie(function(f) {
    f = f >>> 0, $e(f, "offset");
    const h = this[f], O = this[f + 7];
    (h === void 0 || O === void 0) && rr(f, this.length - 8);
    const T = (h << 24) + // Overflow
    this[++f] * 2 ** 16 + this[++f] * 2 ** 8 + this[++f];
    return (BigInt(T) << BigInt(32)) + BigInt(this[++f] * 2 ** 24 + this[++f] * 2 ** 16 + this[++f] * 2 ** 8 + O);
  }), s.prototype.readFloatLE = function(f, h) {
    return f = f >>> 0, h || G(f, 4, this.length), r.read(this, f, !0, 23, 4);
  }, s.prototype.readFloatBE = function(f, h) {
    return f = f >>> 0, h || G(f, 4, this.length), r.read(this, f, !1, 23, 4);
  }, s.prototype.readDoubleLE = function(f, h) {
    return f = f >>> 0, h || G(f, 8, this.length), r.read(this, f, !0, 52, 8);
  }, s.prototype.readDoubleBE = function(f, h) {
    return f = f >>> 0, h || G(f, 8, this.length), r.read(this, f, !1, 52, 8);
  };
  function B(m, f, h, O, T, A) {
    if (!s.isBuffer(m))
      throw new TypeError('"buffer" argument must be a Buffer instance');
    if (f > T || f < A)
      throw new RangeError('"value" argument is out of bounds');
    if (h + O > m.length)
      throw new RangeError("Index out of range");
  }
  s.prototype.writeUintLE = s.prototype.writeUIntLE = function(f, h, O, T) {
    if (f = +f, h = h >>> 0, O = O >>> 0, !T) {
      const te = Math.pow(2, 8 * O) - 1;
      B(this, f, h, O, te, 0);
    }
    let A = 1, j = 0;
    for (this[h] = f & 255; ++j < O && (A *= 256); )
      this[h + j] = f / A & 255;
    return h + O;
  }, s.prototype.writeUintBE = s.prototype.writeUIntBE = function(f, h, O, T) {
    if (f = +f, h = h >>> 0, O = O >>> 0, !T) {
      const te = Math.pow(2, 8 * O) - 1;
      B(this, f, h, O, te, 0);
    }
    let A = O - 1, j = 1;
    for (this[h + A] = f & 255; --A >= 0 && (j *= 256); )
      this[h + A] = f / j & 255;
    return h + O;
  }, s.prototype.writeUint8 = s.prototype.writeUInt8 = function(f, h, O) {
    return f = +f, h = h >>> 0, O || B(this, f, h, 1, 255, 0), this[h] = f & 255, h + 1;
  }, s.prototype.writeUint16LE = s.prototype.writeUInt16LE = function(f, h, O) {
    return f = +f, h = h >>> 0, O || B(this, f, h, 2, 65535, 0), this[h] = f & 255, this[h + 1] = f >>> 8, h + 2;
  }, s.prototype.writeUint16BE = s.prototype.writeUInt16BE = function(f, h, O) {
    return f = +f, h = h >>> 0, O || B(this, f, h, 2, 65535, 0), this[h] = f >>> 8, this[h + 1] = f & 255, h + 2;
  }, s.prototype.writeUint32LE = s.prototype.writeUInt32LE = function(f, h, O) {
    return f = +f, h = h >>> 0, O || B(this, f, h, 4, 4294967295, 0), this[h + 3] = f >>> 24, this[h + 2] = f >>> 16, this[h + 1] = f >>> 8, this[h] = f & 255, h + 4;
  }, s.prototype.writeUint32BE = s.prototype.writeUInt32BE = function(f, h, O) {
    return f = +f, h = h >>> 0, O || B(this, f, h, 4, 4294967295, 0), this[h] = f >>> 24, this[h + 1] = f >>> 16, this[h + 2] = f >>> 8, this[h + 3] = f & 255, h + 4;
  };
  function Oe(m, f, h, O, T) {
    er(f, O, T, m, h, 7);
    let A = Number(f & BigInt(4294967295));
    m[h++] = A, A = A >> 8, m[h++] = A, A = A >> 8, m[h++] = A, A = A >> 8, m[h++] = A;
    let j = Number(f >> BigInt(32) & BigInt(4294967295));
    return m[h++] = j, j = j >> 8, m[h++] = j, j = j >> 8, m[h++] = j, j = j >> 8, m[h++] = j, h;
  }
  function I(m, f, h, O, T) {
    er(f, O, T, m, h, 7);
    let A = Number(f & BigInt(4294967295));
    m[h + 7] = A, A = A >> 8, m[h + 6] = A, A = A >> 8, m[h + 5] = A, A = A >> 8, m[h + 4] = A;
    let j = Number(f >> BigInt(32) & BigInt(4294967295));
    return m[h + 3] = j, j = j >> 8, m[h + 2] = j, j = j >> 8, m[h + 1] = j, j = j >> 8, m[h] = j, h + 8;
  }
  s.prototype.writeBigUInt64LE = ie(function(f, h = 0) {
    return Oe(this, f, h, BigInt(0), BigInt("0xffffffffffffffff"));
  }), s.prototype.writeBigUInt64BE = ie(function(f, h = 0) {
    return I(this, f, h, BigInt(0), BigInt("0xffffffffffffffff"));
  }), s.prototype.writeIntLE = function(f, h, O, T) {
    if (f = +f, h = h >>> 0, !T) {
      const Ee = Math.pow(2, 8 * O - 1);
      B(this, f, h, O, Ee - 1, -Ee);
    }
    let A = 0, j = 1, te = 0;
    for (this[h] = f & 255; ++A < O && (j *= 256); )
      f < 0 && te === 0 && this[h + A - 1] !== 0 && (te = 1), this[h + A] = (f / j >> 0) - te & 255;
    return h + O;
  }, s.prototype.writeIntBE = function(f, h, O, T) {
    if (f = +f, h = h >>> 0, !T) {
      const Ee = Math.pow(2, 8 * O - 1);
      B(this, f, h, O, Ee - 1, -Ee);
    }
    let A = O - 1, j = 1, te = 0;
    for (this[h + A] = f & 255; --A >= 0 && (j *= 256); )
      f < 0 && te === 0 && this[h + A + 1] !== 0 && (te = 1), this[h + A] = (f / j >> 0) - te & 255;
    return h + O;
  }, s.prototype.writeInt8 = function(f, h, O) {
    return f = +f, h = h >>> 0, O || B(this, f, h, 1, 127, -128), f < 0 && (f = 255 + f + 1), this[h] = f & 255, h + 1;
  }, s.prototype.writeInt16LE = function(f, h, O) {
    return f = +f, h = h >>> 0, O || B(this, f, h, 2, 32767, -32768), this[h] = f & 255, this[h + 1] = f >>> 8, h + 2;
  }, s.prototype.writeInt16BE = function(f, h, O) {
    return f = +f, h = h >>> 0, O || B(this, f, h, 2, 32767, -32768), this[h] = f >>> 8, this[h + 1] = f & 255, h + 2;
  }, s.prototype.writeInt32LE = function(f, h, O) {
    return f = +f, h = h >>> 0, O || B(this, f, h, 4, 2147483647, -2147483648), this[h] = f & 255, this[h + 1] = f >>> 8, this[h + 2] = f >>> 16, this[h + 3] = f >>> 24, h + 4;
  }, s.prototype.writeInt32BE = function(f, h, O) {
    return f = +f, h = h >>> 0, O || B(this, f, h, 4, 2147483647, -2147483648), f < 0 && (f = 4294967295 + f + 1), this[h] = f >>> 24, this[h + 1] = f >>> 16, this[h + 2] = f >>> 8, this[h + 3] = f & 255, h + 4;
  }, s.prototype.writeBigInt64LE = ie(function(f, h = 0) {
    return Oe(this, f, h, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  }), s.prototype.writeBigInt64BE = ie(function(f, h = 0) {
    return I(this, f, h, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  });
  function M(m, f, h, O, T, A) {
    if (h + O > m.length)
      throw new RangeError("Index out of range");
    if (h < 0)
      throw new RangeError("Index out of range");
  }
  function W(m, f, h, O, T) {
    return f = +f, h = h >>> 0, T || M(m, f, h, 4), r.write(m, f, h, O, 23, 4), h + 4;
  }
  s.prototype.writeFloatLE = function(f, h, O) {
    return W(this, f, h, !0, O);
  }, s.prototype.writeFloatBE = function(f, h, O) {
    return W(this, f, h, !1, O);
  };
  function z(m, f, h, O, T) {
    return f = +f, h = h >>> 0, T || M(m, f, h, 8), r.write(m, f, h, O, 52, 8), h + 8;
  }
  s.prototype.writeDoubleLE = function(f, h, O) {
    return z(this, f, h, !0, O);
  }, s.prototype.writeDoubleBE = function(f, h, O) {
    return z(this, f, h, !1, O);
  }, s.prototype.copy = function(f, h, O, T) {
    if (!s.isBuffer(f))
      throw new TypeError("argument should be a Buffer");
    if (O || (O = 0), !T && T !== 0 && (T = this.length), h >= f.length && (h = f.length), h || (h = 0), T > 0 && T < O && (T = O), T === O || f.length === 0 || this.length === 0)
      return 0;
    if (h < 0)
      throw new RangeError("targetStart out of bounds");
    if (O < 0 || O >= this.length)
      throw new RangeError("Index out of range");
    if (T < 0)
      throw new RangeError("sourceEnd out of bounds");
    T > this.length && (T = this.length), f.length - h < T - O && (T = f.length - h + O);
    const A = T - O;
    return this === f && typeof Uint8Array.prototype.copyWithin == "function" ? this.copyWithin(h, O, T) : Uint8Array.prototype.set.call(
      f,
      this.subarray(O, T),
      h
    ), A;
  }, s.prototype.fill = function(f, h, O, T) {
    if (typeof f == "string") {
      if (typeof h == "string" ? (T = h, h = 0, O = this.length) : typeof O == "string" && (T = O, O = this.length), T !== void 0 && typeof T != "string")
        throw new TypeError("encoding must be a string");
      if (typeof T == "string" && !s.isEncoding(T))
        throw new TypeError("Unknown encoding: " + T);
      if (f.length === 1) {
        const j = f.charCodeAt(0);
        (T === "utf8" && j < 128 || T === "latin1") && (f = j);
      }
    } else
      typeof f == "number" ? f = f & 255 : typeof f == "boolean" && (f = Number(f));
    if (h < 0 || this.length < h || this.length < O)
      throw new RangeError("Out of range index");
    if (O <= h)
      return this;
    h = h >>> 0, O = O === void 0 ? this.length : O >>> 0, f || (f = 0);
    let A;
    if (typeof f == "number")
      for (A = h; A < O; ++A)
        this[A] = f;
    else {
      const j = s.isBuffer(f) ? f : s.from(f, T), te = j.length;
      if (te === 0)
        throw new TypeError('The value "' + f + '" is invalid for argument "value"');
      for (A = 0; A < O - h; ++A)
        this[A + h] = j[A % te];
    }
    return this;
  };
  const Z = {};
  function Ae(m, f, h) {
    Z[m] = class extends h {
      constructor() {
        super(), Object.defineProperty(this, "message", {
          value: f.apply(this, arguments),
          writable: !0,
          configurable: !0
        }), this.name = `${this.name} [${m}]`, this.stack, delete this.name;
      }
      get code() {
        return m;
      }
      set code(T) {
        Object.defineProperty(this, "code", {
          configurable: !0,
          enumerable: !0,
          value: T,
          writable: !0
        });
      }
      toString() {
        return `${this.name} [${m}]: ${this.message}`;
      }
    };
  }
  Ae(
    "ERR_BUFFER_OUT_OF_BOUNDS",
    function(m) {
      return m ? `${m} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
    },
    RangeError
  ), Ae(
    "ERR_INVALID_ARG_TYPE",
    function(m, f) {
      return `The "${m}" argument must be of type number. Received type ${typeof f}`;
    },
    TypeError
  ), Ae(
    "ERR_OUT_OF_RANGE",
    function(m, f, h) {
      let O = `The value of "${m}" is out of range.`, T = h;
      return Number.isInteger(h) && Math.abs(h) > 2 ** 32 ? T = He(String(h)) : typeof h == "bigint" && (T = String(h), (h > BigInt(2) ** BigInt(32) || h < -(BigInt(2) ** BigInt(32))) && (T = He(T)), T += "n"), O += ` It must be ${f}. Received ${T}`, O;
    },
    RangeError
  );
  function He(m) {
    let f = "", h = m.length;
    const O = m[0] === "-" ? 1 : 0;
    for (; h >= O + 4; h -= 3)
      f = `_${m.slice(h - 3, h)}${f}`;
    return `${m.slice(0, h)}${f}`;
  }
  function ir(m, f, h) {
    $e(f, "offset"), (m[f] === void 0 || m[f + h] === void 0) && rr(f, m.length - (h + 1));
  }
  function er(m, f, h, O, T, A) {
    if (m > h || m < f) {
      const j = typeof f == "bigint" ? "n" : "";
      let te;
      throw A > 3 ? f === 0 || f === BigInt(0) ? te = `>= 0${j} and < 2${j} ** ${(A + 1) * 8}${j}` : te = `>= -(2${j} ** ${(A + 1) * 8 - 1}${j}) and < 2 ** ${(A + 1) * 8 - 1}${j}` : te = `>= ${f}${j} and <= ${h}${j}`, new Z.ERR_OUT_OF_RANGE("value", te, m);
    }
    ir(O, T, A);
  }
  function $e(m, f) {
    if (typeof m != "number")
      throw new Z.ERR_INVALID_ARG_TYPE(f, "number", m);
  }
  function rr(m, f, h) {
    throw Math.floor(m) !== m ? ($e(m, h), new Z.ERR_OUT_OF_RANGE(h || "offset", "an integer", m)) : f < 0 ? new Z.ERR_BUFFER_OUT_OF_BOUNDS() : new Z.ERR_OUT_OF_RANGE(
      h || "offset",
      `>= ${h ? 1 : 0} and <= ${f}`,
      m
    );
  }
  const bt = /[^+/0-9A-Za-z-_]/g;
  function b(m) {
    if (m = m.split("=")[0], m = m.trim().replace(bt, ""), m.length < 2)
      return "";
    for (; m.length % 4 !== 0; )
      m = m + "=";
    return m;
  }
  function _(m, f) {
    f = f || 1 / 0;
    let h;
    const O = m.length;
    let T = null;
    const A = [];
    for (let j = 0; j < O; ++j) {
      if (h = m.charCodeAt(j), h > 55295 && h < 57344) {
        if (!T) {
          if (h > 56319) {
            (f -= 3) > -1 && A.push(239, 191, 189);
            continue;
          } else if (j + 1 === O) {
            (f -= 3) > -1 && A.push(239, 191, 189);
            continue;
          }
          T = h;
          continue;
        }
        if (h < 56320) {
          (f -= 3) > -1 && A.push(239, 191, 189), T = h;
          continue;
        }
        h = (T - 55296 << 10 | h - 56320) + 65536;
      } else
        T && (f -= 3) > -1 && A.push(239, 191, 189);
      if (T = null, h < 128) {
        if ((f -= 1) < 0)
          break;
        A.push(h);
      } else if (h < 2048) {
        if ((f -= 2) < 0)
          break;
        A.push(
          h >> 6 | 192,
          h & 63 | 128
        );
      } else if (h < 65536) {
        if ((f -= 3) < 0)
          break;
        A.push(
          h >> 12 | 224,
          h >> 6 & 63 | 128,
          h & 63 | 128
        );
      } else if (h < 1114112) {
        if ((f -= 4) < 0)
          break;
        A.push(
          h >> 18 | 240,
          h >> 12 & 63 | 128,
          h >> 6 & 63 | 128,
          h & 63 | 128
        );
      } else
        throw new Error("Invalid code point");
    }
    return A;
  }
  function p(m) {
    const f = [];
    for (let h = 0; h < m.length; ++h)
      f.push(m.charCodeAt(h) & 255);
    return f;
  }
  function w(m, f) {
    let h, O, T;
    const A = [];
    for (let j = 0; j < m.length && !((f -= 2) < 0); ++j)
      h = m.charCodeAt(j), O = h >> 8, T = h % 256, A.push(T), A.push(O);
    return A;
  }
  function P(m) {
    return t.toByteArray(b(m));
  }
  function k(m, f, h, O) {
    let T;
    for (T = 0; T < O && !(T + h >= f.length || T >= m.length); ++T)
      f[T + h] = m[T];
    return T;
  }
  function L(m, f) {
    return m instanceof f || m != null && m.constructor != null && m.constructor.name != null && m.constructor.name === f.name;
  }
  function ne(m) {
    return m !== m;
  }
  const le = function() {
    const m = "0123456789abcdef", f = new Array(256);
    for (let h = 0; h < 16; ++h) {
      const O = h * 16;
      for (let T = 0; T < 16; ++T)
        f[O + T] = m[h] + m[T];
    }
    return f;
  }();
  function ie(m) {
    return typeof BigInt > "u" ? Ce : m;
  }
  function Ce() {
    throw new Error("BigInt not supported");
  }
})(rd);
var Jt = {}, qs = {}, lL = d && d.__extends || function() {
  var e = function(t, r) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var o in i)
        Object.prototype.hasOwnProperty.call(i, o) && (n[o] = i[o]);
    }, e(t, r);
  };
  return function(t, r) {
    if (typeof r != "function" && r !== null)
      throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
    e(t, r);
    function n() {
      this.constructor = t;
    }
    t.prototype = r === null ? Object.create(r) : (n.prototype = r.prototype, new n());
  };
}();
Object.defineProperty(qs, "__esModule", { value: !0 });
var ny = (
  /** @class */
  function() {
    function e(t) {
      this.position = 0, this.length = t;
    }
    return e.prototype.getUInt8 = function(t) {
      throw new Error("Not implemented");
    }, e.prototype.getInt8 = function(t) {
      throw new Error("Not implemented");
    }, e.prototype.getFloat64 = function(t) {
      throw new Error("Not implemented");
    }, e.prototype.putUInt8 = function(t, r) {
      throw new Error("Not implemented");
    }, e.prototype.putInt8 = function(t, r) {
      throw new Error("Not implemented");
    }, e.prototype.putFloat64 = function(t, r) {
      throw new Error("Not implemented");
    }, e.prototype.getInt16 = function(t) {
      return this.getInt8(t) << 8 | this.getUInt8(t + 1);
    }, e.prototype.getUInt16 = function(t) {
      return this.getUInt8(t) << 8 | this.getUInt8(t + 1);
    }, e.prototype.getInt32 = function(t) {
      return this.getInt8(t) << 24 | this.getUInt8(t + 1) << 16 | this.getUInt8(t + 2) << 8 | this.getUInt8(t + 3);
    }, e.prototype.getUInt32 = function(t) {
      return this.getUInt8(t) << 24 | this.getUInt8(t + 1) << 16 | this.getUInt8(t + 2) << 8 | this.getUInt8(t + 3);
    }, e.prototype.getInt64 = function(t) {
      return this.getInt8(t) << 56 | this.getUInt8(t + 1) << 48 | this.getUInt8(t + 2) << 40 | this.getUInt8(t + 3) << 32 | this.getUInt8(t + 4) << 24 | this.getUInt8(t + 5) << 16 | this.getUInt8(t + 6) << 8 | this.getUInt8(t + 7);
    }, e.prototype.getSlice = function(t, r) {
      return new fL(t, r, this);
    }, e.prototype.putInt16 = function(t, r) {
      this.putInt8(t, r >> 8), this.putUInt8(t + 1, r & 255);
    }, e.prototype.putUInt16 = function(t, r) {
      this.putUInt8(t, r >> 8 & 255), this.putUInt8(t + 1, r & 255);
    }, e.prototype.putInt32 = function(t, r) {
      this.putInt8(t, r >> 24), this.putUInt8(t + 1, r >> 16 & 255), this.putUInt8(t + 2, r >> 8 & 255), this.putUInt8(t + 3, r & 255);
    }, e.prototype.putUInt32 = function(t, r) {
      this.putUInt8(t, r >> 24 & 255), this.putUInt8(t + 1, r >> 16 & 255), this.putUInt8(t + 2, r >> 8 & 255), this.putUInt8(t + 3, r & 255);
    }, e.prototype.putInt64 = function(t, r) {
      this.putInt8(t, r >> 48), this.putUInt8(t + 1, r >> 42 & 255), this.putUInt8(t + 2, r >> 36 & 255), this.putUInt8(t + 3, r >> 30 & 255), this.putUInt8(t + 4, r >> 24 & 255), this.putUInt8(t + 5, r >> 16 & 255), this.putUInt8(t + 6, r >> 8 & 255), this.putUInt8(t + 7, r & 255);
    }, e.prototype.putBytes = function(t, r) {
      for (var n = 0, i = r.remaining(); n < i; n++)
        this.putUInt8(t + n, r.readUInt8());
    }, e.prototype.readUInt8 = function() {
      return this.getUInt8(this._updatePos(1));
    }, e.prototype.readInt8 = function() {
      return this.getInt8(this._updatePos(1));
    }, e.prototype.readUInt16 = function() {
      return this.getUInt16(this._updatePos(2));
    }, e.prototype.readUInt32 = function() {
      return this.getUInt32(this._updatePos(4));
    }, e.prototype.readInt16 = function() {
      return this.getInt16(this._updatePos(2));
    }, e.prototype.readInt32 = function() {
      return this.getInt32(this._updatePos(4));
    }, e.prototype.readInt64 = function() {
      return this.getInt32(this._updatePos(8));
    }, e.prototype.readFloat64 = function() {
      return this.getFloat64(this._updatePos(8));
    }, e.prototype.writeUInt8 = function(t) {
      this.putUInt8(this._updatePos(1), t);
    }, e.prototype.writeInt8 = function(t) {
      this.putInt8(this._updatePos(1), t);
    }, e.prototype.writeInt16 = function(t) {
      this.putInt16(this._updatePos(2), t);
    }, e.prototype.writeInt32 = function(t) {
      this.putInt32(this._updatePos(4), t);
    }, e.prototype.writeUInt32 = function(t) {
      this.putUInt32(this._updatePos(4), t);
    }, e.prototype.writeInt64 = function(t) {
      this.putInt64(this._updatePos(8), t);
    }, e.prototype.writeFloat64 = function(t) {
      this.putFloat64(this._updatePos(8), t);
    }, e.prototype.writeBytes = function(t) {
      this.putBytes(this._updatePos(t.remaining()), t);
    }, e.prototype.readSlice = function(t) {
      return this.getSlice(this._updatePos(t), t);
    }, e.prototype._updatePos = function(t) {
      var r = this.position;
      return this.position += t, r;
    }, e.prototype.remaining = function() {
      return this.length - this.position;
    }, e.prototype.hasRemaining = function() {
      return this.remaining() > 0;
    }, e.prototype.reset = function() {
      this.position = 0;
    }, e.prototype.toString = function() {
      return this.constructor.name + "( position=" + this.position + ` )
  ` + this.toHex();
    }, e.prototype.toHex = function() {
      for (var t = "", r = 0; r < this.length; r++) {
        var n = this.getUInt8(r).toString(16);
        n.length === 1 && (n = "0" + n), t += n, r !== this.length - 1 && (t += " ");
      }
      return t;
    }, e;
  }()
);
qs.default = ny;
var fL = (
  /** @class */
  function(e) {
    lL(t, e);
    function t(r, n, i) {
      var o = e.call(this, n) || this;
      return o._start = r, o._inner = i, o;
    }
    return t.prototype.putUInt8 = function(r, n) {
      this._inner.putUInt8(this._start + r, n);
    }, t.prototype.getUInt8 = function(r) {
      return this._inner.getUInt8(this._start + r);
    }, t.prototype.putInt8 = function(r, n) {
      this._inner.putInt8(this._start + r, n);
    }, t.prototype.putFloat64 = function(r, n) {
      this._inner.putFloat64(this._start + r, n);
    }, t.prototype.getInt8 = function(r) {
      return this._inner.getInt8(this._start + r);
    }, t.prototype.getFloat64 = function(r) {
      return this._inner.getFloat64(this._start + r);
    }, t;
  }(ny)
), dL = d && d.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(Jt, "__esModule", { value: !0 });
Jt.BaseBuffer = void 0;
var iy = dL(qs);
Jt.BaseBuffer = iy.default;
Jt.default = iy.default;
var hL = d && d.__extends || function() {
  var e = function(t, r) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var o in i)
        Object.prototype.hasOwnProperty.call(i, o) && (n[o] = i[o]);
    }, e(t, r);
  };
  return function(t, r) {
    if (typeof r != "function" && r !== null)
      throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
    e(t, r);
    function n() {
      this.constructor = t;
    }
    t.prototype = r === null ? Object.create(r) : (n.prototype = r.prototype, new n());
  };
}(), oy = d && d.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(Hr, "__esModule", { value: !0 });
Hr.alloc = void 0;
var uu = oy(rd), vL = oy(Jt), ay = (
  /** @class */
  function(e) {
    hL(t, e);
    function t(r) {
      var n = this, i = pL(r);
      return n = e.call(this, i.length) || this, n._buffer = i, n;
    }
    return t.prototype.getUInt8 = function(r) {
      return this._buffer.readUInt8(r);
    }, t.prototype.getInt8 = function(r) {
      return this._buffer.readInt8(r);
    }, t.prototype.getFloat64 = function(r) {
      return this._buffer.readDoubleBE(r);
    }, t.prototype.putUInt8 = function(r, n) {
      this._buffer.writeUInt8(n, r);
    }, t.prototype.putInt8 = function(r, n) {
      this._buffer.writeInt8(n, r);
    }, t.prototype.putFloat64 = function(r, n) {
      this._buffer.writeDoubleBE(n, r);
    }, t.prototype.putBytes = function(r, n) {
      if (n instanceof t) {
        var i = Math.min(n.length - n.position, this.length - r);
        n._buffer.copy(this._buffer, r, n.position, n.position + i), n.position += i;
      } else
        e.prototype.putBytes.call(this, r, n);
    }, t.prototype.getSlice = function(r, n) {
      return new t(this._buffer.slice(r, r + n));
    }, t;
  }(vL.default)
);
Hr.default = ay;
function _L(e) {
  return new ay(e);
}
Hr.alloc = _L;
function pL(e) {
  return e instanceof uu.default.Buffer ? e : typeof e == "number" && typeof uu.default.Buffer.alloc == "function" ? uu.default.Buffer.alloc(e) : new uu.default.Buffer(e);
}
var mL = d && d.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(ed, "__esModule", { value: !0 });
var kv = mL(Hr), un = ee, uy = un.internal.util, sy = uy.ENCRYPTION_OFF, yL = uy.ENCRYPTION_ON, Dv = 1, bL = 3, gL = (
  /** @class */
  function() {
    function e(t, r, n) {
      r === void 0 && (r = CL), n === void 0 && (n = function(u) {
        return new WebSocket(u);
      });
      var i = this;
      this._open = !0, this._pending = [], this._error = null, this._handleConnectionError = this._handleConnectionError.bind(this), this._config = t, this._receiveTimeout = null, this._receiveTimeoutStarted = !1, this._receiveTimeoutId = null;
      var o = TL(t, r), a = o.scheme, s = o.error;
      if (s) {
        this._error = s;
        return;
      }
      this._ws = OL(a, t.address, n), this._ws.binaryType = "arraybuffer";
      var c = this;
      this._ws.onclose = function(u) {
        u && !u.wasClean && c._handleConnectionError(), c._open = !1;
      }, this._ws.onopen = function() {
        c._clearConnectionTimeout();
        var u = c._pending;
        c._pending = null;
        for (var l = 0; l < u.length; l++)
          c.write(u[l]);
      }, this._ws.onmessage = function(u) {
        if (i._resetTimeout(), c.onmessage) {
          var l = new kv.default(u.data);
          c.onmessage(l);
        }
      }, this._ws.onerror = this._handleConnectionError, this._connectionTimeoutFired = !1, this._connectionTimeoutId = this._setupConnectionTimeout();
    }
    return e.prototype._handleConnectionError = function() {
      if (this._connectionTimeoutFired) {
        this._error = (0, un.newError)("Failed to establish connection in ".concat(this._config.connectionTimeout, "ms"), this._config.connectionErrorCode), this.onerror && this.onerror(this._error);
        return;
      }
      this._open && !this._timedout && (this._error = (0, un.newError)("WebSocket connection failure. Due to security constraints in your web browser, the reason for the failure is not available to this Neo4j Driver. Please use your browsers development console to determine the root cause of the failure. Common reasons include the database being unavailable, using the wrong connection URL or temporary network problems. If you have enabled encryption, ensure your browser is configured to trust the certificate Neo4j is configured to use. WebSocket `readyState` is: " + this._ws.readyState, this._config.connectionErrorCode), this.onerror && this.onerror(this._error));
    }, e.prototype.write = function(t) {
      if (this._pending !== null)
        this._pending.push(t);
      else if (t instanceof kv.default)
        try {
          this._ws.send(t._buffer);
        } catch (r) {
          if (this._ws.readyState !== Dv)
            this._handleConnectionError();
          else
            throw r;
        }
      else
        throw (0, un.newError)("Don't know how to send buffer: " + t);
    }, e.prototype.close = function() {
      var t = this;
      return new Promise(function(r, n) {
        t._ws && t._ws.readyState !== bL ? (t._open = !1, t.stopReceiveTimeout(), t._clearConnectionTimeout(), t._ws.onclose = function() {
          return r();
        }, t._ws.close()) : r();
      });
    }, e.prototype.setupReceiveTimeout = function(t) {
      this._receiveTimeout = t;
    }, e.prototype.stopReceiveTimeout = function() {
      this._receiveTimeout !== null && this._receiveTimeoutStarted && (this._receiveTimeoutStarted = !1, this._receiveTimeoutId != null && clearTimeout(this._receiveTimeoutId), this._receiveTimeoutId = null);
    }, e.prototype.startReceiveTimeout = function() {
      this._open && this._receiveTimeout !== null && !this._receiveTimeoutStarted && (this._receiveTimeoutStarted = !0, this._resetTimeout());
    }, e.prototype._resetTimeout = function() {
      var t = this;
      this._receiveTimeoutStarted && (this._receiveTimeoutId !== null && clearTimeout(this._receiveTimeoutId), this._receiveTimeoutId = setTimeout(function() {
        t._receiveTimeoutId = null, t._timedout = !0, t.stopReceiveTimeout(), t._error = (0, un.newError)("Connection lost. Server didn't respond in ".concat(t._receiveTimeout, "ms"), t._config.connectionErrorCode), t.close(), t.onerror && t.onerror(t._error);
      }, this._receiveTimeout));
    }, e.prototype._setupConnectionTimeout = function() {
      var t = this, r = this._config.connectionTimeout;
      if (r) {
        var n = this._ws;
        return setTimeout(function() {
          n.readyState !== Dv && (t._connectionTimeoutFired = !0, n.close());
        }, r);
      }
      return null;
    }, e.prototype._clearConnectionTimeout = function() {
      var t = this._connectionTimeoutId;
      (t || t === 0) && (this._connectionTimeoutFired = !1, this._connectionTimeoutId = null, clearTimeout(t));
    }, e;
  }()
);
ed.default = gL;
function OL(e, t, r) {
  var n = e + "://" + t.asHostPort();
  try {
    return r(n);
  } catch (o) {
    if (wL(o, t)) {
      var i = SL(e, t);
      return r(i);
    } else
      throw o;
  }
}
function wL(e, t) {
  return e.name === "SyntaxError" && EL(t.asHostPort());
}
function EL(e) {
  return e.charAt(0) === "[" && e.indexOf("]") !== -1;
}
function SL(e, t) {
  var r = t.host().replace(/:/g, "-"), n = r.replace("%", "s"), i = n + ".ipv6-literal.net";
  return "".concat(e, "://").concat(i, ":").concat(t.port());
}
function TL(e, t) {
  var r = PL(e), n = IL(e), i = e.trust, o = AL(t);
  if (RL(r, n, o), n)
    return { scheme: "ws", error: null };
  if (o)
    return { scheme: "wss", error: null };
  if (r) {
    if (!i || i === "TRUST_SYSTEM_CA_SIGNED_CERTIFICATES")
      return { scheme: "wss", error: null };
    var a = (0, un.newError)("The browser version of this driver only supports one trust strategy, 'TRUST_SYSTEM_CA_SIGNED_CERTIFICATES'. " + i + ' is not supported. Please either use TRUST_SYSTEM_CA_SIGNED_CERTIFICATES or disable encryption by setting `encrypted:"' + sy + '"` in the driver configuration.');
    return { scheme: null, error: a };
  }
  return { scheme: "ws", error: null };
}
function PL(e) {
  return e.encrypted === !0 || e.encrypted === yL;
}
function IL(e) {
  return e.encrypted === !1 || e.encrypted === sy;
}
function AL(e) {
  var t = typeof e == "function" ? e() : "";
  return t && t.toLowerCase().indexOf("https") >= 0;
}
function RL(e, t, r) {
  r === null || (e && !r ? console.warn("Neo4j driver is configured to use secure WebSocket on a HTTP web page. WebSockets might not work in a mixed content environment. Please consider configuring driver to not use encryption.") : t && r && console.warn("Neo4j driver is configured to use insecure WebSocket on a HTTPS web page. WebSockets might not work in a mixed content environment. Please consider configuring driver to use encryption."));
}
function CL() {
  return typeof window < "u" && window.location ? window.location.protocol : null;
}
var td = {}, jL = d && d.__extends || function() {
  var e = function(t, r) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var o in i)
        Object.prototype.hasOwnProperty.call(i, o) && (n[o] = i[o]);
    }, e(t, r);
  };
  return function(t, r) {
    if (typeof r != "function" && r !== null)
      throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
    e(t, r);
    function n() {
      this.constructor = t;
    }
    t.prototype = r === null ? Object.create(r) : (n.prototype = r.prototype, new n());
  };
}();
Object.defineProperty(td, "__esModule", { value: !0 });
var NL = ee, $L = NL.internal.resolver.BaseHostNameResolver, ML = (
  /** @class */
  function(e) {
    jL(t, e);
    function t() {
      return e !== null && e.apply(this, arguments) || this;
    }
    return t.prototype.resolve = function(r) {
      return this._resolveToItself(r);
    }, t;
  }($L)
);
td.default = ML;
var cy = d && d.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(yn, "__esModule", { value: !0 });
yn.HostNameResolver = yn.Channel = void 0;
var kL = cy(ed), DL = cy(td);
yn.Channel = kL.default;
yn.HostNameResolver = DL.default;
var bn = {}, nd = {}, UL = d && d.__extends || function() {
  var e = function(t, r) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var o in i)
        Object.prototype.hasOwnProperty.call(i, o) && (n[o] = i[o]);
    }, e(t, r);
  };
  return function(t, r) {
    if (typeof r != "function" && r !== null)
      throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
    e(t, r);
    function n() {
      this.constructor = t;
    }
    t.prototype = r === null ? Object.create(r) : (n.prototype = r.prototype, new n());
  };
}();
Object.defineProperty(nd, "__esModule", { value: !0 });
var LL = Jt, FL = Hr, BL = (
  /** @class */
  function(e) {
    UL(t, e);
    function t(r) {
      for (var n = this, i = 0, o = 0; o < r.length; o++)
        i += r[o].length;
      return n = e.call(this, i) || this, n._buffers = r, n;
    }
    return t.prototype.getUInt8 = function(r) {
      for (var n = 0; n < this._buffers.length; n++) {
        var i = this._buffers[n];
        if (r >= i.length)
          r -= i.length;
        else
          return i.getUInt8(r);
      }
    }, t.prototype.getInt8 = function(r) {
      for (var n = 0; n < this._buffers.length; n++) {
        var i = this._buffers[n];
        if (r >= i.length)
          r -= i.length;
        else
          return i.getInt8(r);
      }
    }, t.prototype.getFloat64 = function(r) {
      for (var n = (0, FL.alloc)(8), i = 0; i < 8; i++)
        n.putUInt8(i, this.getUInt8(r + i));
      return n.getFloat64(0);
    }, t;
  }(LL.BaseBuffer)
);
nd.default = BL;
var xL = d && d.__extends || function() {
  var e = function(t, r) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var o in i)
        Object.prototype.hasOwnProperty.call(i, o) && (n[o] = i[o]);
    }, e(t, r);
  };
  return function(t, r) {
    if (typeof r != "function" && r !== null)
      throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
    e(t, r);
    function n() {
      this.constructor = t;
    }
    t.prototype = r === null ? Object.create(r) : (n.prototype = r.prototype, new n());
  };
}(), ly = d && d.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(bn, "__esModule", { value: !0 });
bn.Dechunker = bn.Chunker = void 0;
var WL = ly(qs), Uv = Hr, VL = ly(nd), su = 2, qL = 0, HL = 1400, zL = (
  /** @class */
  function(e) {
    xL(t, e);
    function t(r, n) {
      var i = e.call(this, 0) || this;
      return i._bufferSize = n || HL, i._ch = r, i._buffer = (0, Uv.alloc)(i._bufferSize), i._currentChunkStart = 0, i._chunkOpen = !1, i;
    }
    return t.prototype.putUInt8 = function(r, n) {
      this._ensure(1), this._buffer.writeUInt8(n);
    }, t.prototype.putInt8 = function(r, n) {
      this._ensure(1), this._buffer.writeInt8(n);
    }, t.prototype.putFloat64 = function(r, n) {
      this._ensure(8), this._buffer.writeFloat64(n);
    }, t.prototype.putBytes = function(r, n) {
      for (; n.remaining() > 0; )
        this._ensure(1), this._buffer.remaining() > n.remaining() ? this._buffer.writeBytes(n) : this._buffer.writeBytes(n.readSlice(this._buffer.remaining()));
      return this;
    }, t.prototype.flush = function() {
      if (this._buffer.position > 0) {
        this._closeChunkIfOpen();
        var r = this._buffer;
        this._buffer = null, this._ch.write(r.getSlice(0, r.position)), this._buffer = (0, Uv.alloc)(this._bufferSize), this._chunkOpen = !1;
      }
      return this;
    }, t.prototype.messageBoundary = function() {
      this._closeChunkIfOpen(), this._buffer.remaining() < su && this.flush(), this._buffer.writeInt16(qL);
    }, t.prototype._ensure = function(r) {
      var n = this._chunkOpen ? r : r + su;
      this._buffer.remaining() < n && this.flush(), this._chunkOpen || (this._currentChunkStart = this._buffer.position, this._buffer.position = this._buffer.position + su, this._chunkOpen = !0);
    }, t.prototype._closeChunkIfOpen = function() {
      if (this._chunkOpen) {
        var r = this._buffer.position - (this._currentChunkStart + su);
        this._buffer.putUInt16(this._currentChunkStart, r), this._chunkOpen = !1;
      }
    }, t;
  }(WL.default)
);
bn.Chunker = zL;
var YL = (
  /** @class */
  function() {
    function e() {
      this._currentMessage = [], this._partialChunkHeader = 0, this._state = this.AWAITING_CHUNK;
    }
    return e.prototype.AWAITING_CHUNK = function(t) {
      return t.remaining() >= 2 ? this._onHeader(t.readUInt16()) : (this._partialChunkHeader = t.readUInt8() << 8, this.IN_HEADER);
    }, e.prototype.IN_HEADER = function(t) {
      return this._onHeader((this._partialChunkHeader | t.readUInt8()) & 65535);
    }, e.prototype.IN_CHUNK = function(t) {
      return this._chunkSize <= t.remaining() ? (this._currentMessage.push(t.readSlice(this._chunkSize)), this.AWAITING_CHUNK) : (this._chunkSize -= t.remaining(), this._currentMessage.push(t.readSlice(t.remaining())), this.IN_CHUNK);
    }, e.prototype.CLOSED = function(t) {
    }, e.prototype._onHeader = function(t) {
      if (t === 0) {
        var r = void 0;
        switch (this._currentMessage.length) {
          case 0:
            return this.AWAITING_CHUNK;
          case 1:
            r = this._currentMessage[0];
            break;
          default:
            r = new VL.default(this._currentMessage);
            break;
        }
        return this._currentMessage = [], this.onmessage(r), this.AWAITING_CHUNK;
      } else
        return this._chunkSize = t, this.IN_CHUNK;
    }, e.prototype.write = function(t) {
      for (; t.hasRemaining(); )
        this._state = this._state(t);
    }, e;
  }()
);
bn.Dechunker = YL;
var id = {};
Object.defineProperty(id, "__esModule", { value: !0 });
var Hs = ee, fy = Hs.internal.util, KL = fy.ENCRYPTION_OFF, GL = fy.ENCRYPTION_ON, ZL = Hs.error.SERVICE_UNAVAILABLE, Lv = [
  null,
  void 0,
  !0,
  !1,
  GL,
  KL
], Fv = [
  null,
  void 0,
  "TRUST_ALL_CERTIFICATES",
  "TRUST_CUSTOM_CA_SIGNED_CERTIFICATES",
  "TRUST_SYSTEM_CA_SIGNED_CERTIFICATES"
], QL = (
  /** @class */
  function() {
    function e(t, r, n) {
      this.address = t, this.encrypted = JL(r), this.trust = XL(r), this.trustedCertificates = e2(r), this.knownHostsPath = r2(r), this.connectionErrorCode = n || ZL, this.connectionTimeout = r.connectionTimeout;
    }
    return e;
  }()
);
id.default = QL;
function JL(e) {
  var t = e.encrypted;
  if (Lv.indexOf(t) === -1)
    throw (0, Hs.newError)("Illegal value of the encrypted setting ".concat(t, ". Expected one of ").concat(Lv));
  return t;
}
function XL(e) {
  var t = e.trust;
  if (Fv.indexOf(t) === -1)
    throw (0, Hs.newError)("Illegal value of the trust setting ".concat(t, ". Expected one of ").concat(Fv));
  return t;
}
function e2(e) {
  return e.trustedCertificates || [];
}
function r2(e) {
  return e.knownHosts || null;
}
var od = {}, dy = {}, ku = {}, t2 = {
  get exports() {
    return ku;
  },
  set exports(e) {
    ku = e;
  }
}, hy = {};
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
(function(e) {
  var t = Ba, r = Vs, n = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
  e.Buffer = s, e.SlowBuffer = $, e.INSPECT_MAX_BYTES = 50;
  var i = 2147483647;
  e.kMaxLength = i, s.TYPED_ARRAY_SUPPORT = o(), !s.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error(
    "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
  );
  function o() {
    try {
      var b = new Uint8Array(1), _ = { foo: function() {
        return 42;
      } };
      return Object.setPrototypeOf(_, Uint8Array.prototype), Object.setPrototypeOf(b, _), b.foo() === 42;
    } catch {
      return !1;
    }
  }
  Object.defineProperty(s.prototype, "parent", {
    enumerable: !0,
    get: function() {
      if (s.isBuffer(this))
        return this.buffer;
    }
  }), Object.defineProperty(s.prototype, "offset", {
    enumerable: !0,
    get: function() {
      if (s.isBuffer(this))
        return this.byteOffset;
    }
  });
  function a(b) {
    if (b > i)
      throw new RangeError('The value "' + b + '" is invalid for option "size"');
    var _ = new Uint8Array(b);
    return Object.setPrototypeOf(_, s.prototype), _;
  }
  function s(b, _, p) {
    if (typeof b == "number") {
      if (typeof _ == "string")
        throw new TypeError(
          'The "string" argument must be of type string. Received type number'
        );
      return v(b);
    }
    return c(b, _, p);
  }
  s.poolSize = 8192;
  function c(b, _, p) {
    if (typeof b == "string")
      return y(b, _);
    if (ArrayBuffer.isView(b))
      return E(b);
    if (b == null)
      throw new TypeError(
        "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof b
      );
    if ($e(b, ArrayBuffer) || b && $e(b.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && ($e(b, SharedArrayBuffer) || b && $e(b.buffer, SharedArrayBuffer)))
      return S(b, _, p);
    if (typeof b == "number")
      throw new TypeError(
        'The "value" argument must not be of type number. Received type number'
      );
    var w = b.valueOf && b.valueOf();
    if (w != null && w !== b)
      return s.from(w, _, p);
    var P = C(b);
    if (P)
      return P;
    if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof b[Symbol.toPrimitive] == "function")
      return s.from(
        b[Symbol.toPrimitive]("string"),
        _,
        p
      );
    throw new TypeError(
      "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof b
    );
  }
  s.from = function(b, _, p) {
    return c(b, _, p);
  }, Object.setPrototypeOf(s.prototype, Uint8Array.prototype), Object.setPrototypeOf(s, Uint8Array);
  function u(b) {
    if (typeof b != "number")
      throw new TypeError('"size" argument must be of type number');
    if (b < 0)
      throw new RangeError('The value "' + b + '" is invalid for option "size"');
  }
  function l(b, _, p) {
    return u(b), b <= 0 ? a(b) : _ !== void 0 ? typeof p == "string" ? a(b).fill(_, p) : a(b).fill(_) : a(b);
  }
  s.alloc = function(b, _, p) {
    return l(b, _, p);
  };
  function v(b) {
    return u(b), a(b < 0 ? 0 : R(b) | 0);
  }
  s.allocUnsafe = function(b) {
    return v(b);
  }, s.allocUnsafeSlow = function(b) {
    return v(b);
  };
  function y(b, _) {
    if ((typeof _ != "string" || _ === "") && (_ = "utf8"), !s.isEncoding(_))
      throw new TypeError("Unknown encoding: " + _);
    var p = U(b, _) | 0, w = a(p), P = w.write(b, _);
    return P !== p && (w = w.slice(0, P)), w;
  }
  function g(b) {
    for (var _ = b.length < 0 ? 0 : R(b.length) | 0, p = a(_), w = 0; w < _; w += 1)
      p[w] = b[w] & 255;
    return p;
  }
  function E(b) {
    if ($e(b, Uint8Array)) {
      var _ = new Uint8Array(b);
      return S(_.buffer, _.byteOffset, _.byteLength);
    }
    return g(b);
  }
  function S(b, _, p) {
    if (_ < 0 || b.byteLength < _)
      throw new RangeError('"offset" is outside of buffer bounds');
    if (b.byteLength < _ + (p || 0))
      throw new RangeError('"length" is outside of buffer bounds');
    var w;
    return _ === void 0 && p === void 0 ? w = new Uint8Array(b) : p === void 0 ? w = new Uint8Array(b, _) : w = new Uint8Array(b, _, p), Object.setPrototypeOf(w, s.prototype), w;
  }
  function C(b) {
    if (s.isBuffer(b)) {
      var _ = R(b.length) | 0, p = a(_);
      return p.length === 0 || b.copy(p, 0, 0, _), p;
    }
    if (b.length !== void 0)
      return typeof b.length != "number" || rr(b.length) ? a(0) : g(b);
    if (b.type === "Buffer" && Array.isArray(b.data))
      return g(b.data);
  }
  function R(b) {
    if (b >= i)
      throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + i.toString(16) + " bytes");
    return b | 0;
  }
  function $(b) {
    return +b != b && (b = 0), s.alloc(+b);
  }
  s.isBuffer = function(_) {
    return _ != null && _._isBuffer === !0 && _ !== s.prototype;
  }, s.compare = function(_, p) {
    if ($e(_, Uint8Array) && (_ = s.from(_, _.offset, _.byteLength)), $e(p, Uint8Array) && (p = s.from(p, p.offset, p.byteLength)), !s.isBuffer(_) || !s.isBuffer(p))
      throw new TypeError(
        'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
      );
    if (_ === p)
      return 0;
    for (var w = _.length, P = p.length, k = 0, L = Math.min(w, P); k < L; ++k)
      if (_[k] !== p[k]) {
        w = _[k], P = p[k];
        break;
      }
    return w < P ? -1 : P < w ? 1 : 0;
  }, s.isEncoding = function(_) {
    switch (String(_).toLowerCase()) {
      case "hex":
      case "utf8":
      case "utf-8":
      case "ascii":
      case "latin1":
      case "binary":
      case "base64":
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return !0;
      default:
        return !1;
    }
  }, s.concat = function(_, p) {
    if (!Array.isArray(_))
      throw new TypeError('"list" argument must be an Array of Buffers');
    if (_.length === 0)
      return s.alloc(0);
    var w;
    if (p === void 0)
      for (p = 0, w = 0; w < _.length; ++w)
        p += _[w].length;
    var P = s.allocUnsafe(p), k = 0;
    for (w = 0; w < _.length; ++w) {
      var L = _[w];
      if ($e(L, Uint8Array))
        k + L.length > P.length ? s.from(L).copy(P, k) : Uint8Array.prototype.set.call(
          P,
          L,
          k
        );
      else if (s.isBuffer(L))
        L.copy(P, k);
      else
        throw new TypeError('"list" argument must be an Array of Buffers');
      k += L.length;
    }
    return P;
  };
  function U(b, _) {
    if (s.isBuffer(b))
      return b.length;
    if (ArrayBuffer.isView(b) || $e(b, ArrayBuffer))
      return b.byteLength;
    if (typeof b != "string")
      throw new TypeError(
        'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof b
      );
    var p = b.length, w = arguments.length > 2 && arguments[2] === !0;
    if (!w && p === 0)
      return 0;
    for (var P = !1; ; )
      switch (_) {
        case "ascii":
        case "latin1":
        case "binary":
          return p;
        case "utf8":
        case "utf-8":
          return Z(b).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return p * 2;
        case "hex":
          return p >>> 1;
        case "base64":
          return ir(b).length;
        default:
          if (P)
            return w ? -1 : Z(b).length;
          _ = ("" + _).toLowerCase(), P = !0;
      }
  }
  s.byteLength = U;
  function D(b, _, p) {
    var w = !1;
    if ((_ === void 0 || _ < 0) && (_ = 0), _ > this.length || ((p === void 0 || p > this.length) && (p = this.length), p <= 0) || (p >>>= 0, _ >>>= 0, p <= _))
      return "";
    for (b || (b = "utf8"); ; )
      switch (b) {
        case "hex":
          return ce(this, _, p);
        case "utf8":
        case "utf-8":
          return se(this, _, p);
        case "ascii":
          return re(this, _, p);
        case "latin1":
        case "binary":
          return H(this, _, p);
        case "base64":
          return he(this, _, p);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return Ne(this, _, p);
        default:
          if (w)
            throw new TypeError("Unknown encoding: " + b);
          b = (b + "").toLowerCase(), w = !0;
      }
  }
  s.prototype._isBuffer = !0;
  function F(b, _, p) {
    var w = b[_];
    b[_] = b[p], b[p] = w;
  }
  s.prototype.swap16 = function() {
    var _ = this.length;
    if (_ % 2 !== 0)
      throw new RangeError("Buffer size must be a multiple of 16-bits");
    for (var p = 0; p < _; p += 2)
      F(this, p, p + 1);
    return this;
  }, s.prototype.swap32 = function() {
    var _ = this.length;
    if (_ % 4 !== 0)
      throw new RangeError("Buffer size must be a multiple of 32-bits");
    for (var p = 0; p < _; p += 4)
      F(this, p, p + 3), F(this, p + 1, p + 2);
    return this;
  }, s.prototype.swap64 = function() {
    var _ = this.length;
    if (_ % 8 !== 0)
      throw new RangeError("Buffer size must be a multiple of 64-bits");
    for (var p = 0; p < _; p += 8)
      F(this, p, p + 7), F(this, p + 1, p + 6), F(this, p + 2, p + 5), F(this, p + 3, p + 4);
    return this;
  }, s.prototype.toString = function() {
    var _ = this.length;
    return _ === 0 ? "" : arguments.length === 0 ? se(this, 0, _) : D.apply(this, arguments);
  }, s.prototype.toLocaleString = s.prototype.toString, s.prototype.equals = function(_) {
    if (!s.isBuffer(_))
      throw new TypeError("Argument must be a Buffer");
    return this === _ ? !0 : s.compare(this, _) === 0;
  }, s.prototype.inspect = function() {
    var _ = "", p = e.INSPECT_MAX_BYTES;
    return _ = this.toString("hex", 0, p).replace(/(.{2})/g, "$1 ").trim(), this.length > p && (_ += " ... "), "<Buffer " + _ + ">";
  }, n && (s.prototype[n] = s.prototype.inspect), s.prototype.compare = function(_, p, w, P, k) {
    if ($e(_, Uint8Array) && (_ = s.from(_, _.offset, _.byteLength)), !s.isBuffer(_))
      throw new TypeError(
        'The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof _
      );
    if (p === void 0 && (p = 0), w === void 0 && (w = _ ? _.length : 0), P === void 0 && (P = 0), k === void 0 && (k = this.length), p < 0 || w > _.length || P < 0 || k > this.length)
      throw new RangeError("out of range index");
    if (P >= k && p >= w)
      return 0;
    if (P >= k)
      return -1;
    if (p >= w)
      return 1;
    if (p >>>= 0, w >>>= 0, P >>>= 0, k >>>= 0, this === _)
      return 0;
    for (var L = k - P, ne = w - p, le = Math.min(L, ne), ie = this.slice(P, k), Ce = _.slice(p, w), m = 0; m < le; ++m)
      if (ie[m] !== Ce[m]) {
        L = ie[m], ne = Ce[m];
        break;
      }
    return L < ne ? -1 : ne < L ? 1 : 0;
  };
  function K(b, _, p, w, P) {
    if (b.length === 0)
      return -1;
    if (typeof p == "string" ? (w = p, p = 0) : p > 2147483647 ? p = 2147483647 : p < -2147483648 && (p = -2147483648), p = +p, rr(p) && (p = P ? 0 : b.length - 1), p < 0 && (p = b.length + p), p >= b.length) {
      if (P)
        return -1;
      p = b.length - 1;
    } else if (p < 0)
      if (P)
        p = 0;
      else
        return -1;
    if (typeof _ == "string" && (_ = s.from(_, w)), s.isBuffer(_))
      return _.length === 0 ? -1 : X(b, _, p, w, P);
    if (typeof _ == "number")
      return _ = _ & 255, typeof Uint8Array.prototype.indexOf == "function" ? P ? Uint8Array.prototype.indexOf.call(b, _, p) : Uint8Array.prototype.lastIndexOf.call(b, _, p) : X(b, [_], p, w, P);
    throw new TypeError("val must be string, number or Buffer");
  }
  function X(b, _, p, w, P) {
    var k = 1, L = b.length, ne = _.length;
    if (w !== void 0 && (w = String(w).toLowerCase(), w === "ucs2" || w === "ucs-2" || w === "utf16le" || w === "utf-16le")) {
      if (b.length < 2 || _.length < 2)
        return -1;
      k = 2, L /= 2, ne /= 2, p /= 2;
    }
    function le(h, O) {
      return k === 1 ? h[O] : h.readUInt16BE(O * k);
    }
    var ie;
    if (P) {
      var Ce = -1;
      for (ie = p; ie < L; ie++)
        if (le(b, ie) === le(_, Ce === -1 ? 0 : ie - Ce)) {
          if (Ce === -1 && (Ce = ie), ie - Ce + 1 === ne)
            return Ce * k;
        } else
          Ce !== -1 && (ie -= ie - Ce), Ce = -1;
    } else
      for (p + ne > L && (p = L - ne), ie = p; ie >= 0; ie--) {
        for (var m = !0, f = 0; f < ne; f++)
          if (le(b, ie + f) !== le(_, f)) {
            m = !1;
            break;
          }
        if (m)
          return ie;
      }
    return -1;
  }
  s.prototype.includes = function(_, p, w) {
    return this.indexOf(_, p, w) !== -1;
  }, s.prototype.indexOf = function(_, p, w) {
    return K(this, _, p, w, !0);
  }, s.prototype.lastIndexOf = function(_, p, w) {
    return K(this, _, p, w, !1);
  };
  function oe(b, _, p, w) {
    p = Number(p) || 0;
    var P = b.length - p;
    w ? (w = Number(w), w > P && (w = P)) : w = P;
    var k = _.length;
    w > k / 2 && (w = k / 2);
    for (var L = 0; L < w; ++L) {
      var ne = parseInt(_.substr(L * 2, 2), 16);
      if (rr(ne))
        return L;
      b[p + L] = ne;
    }
    return L;
  }
  function de(b, _, p, w) {
    return er(Z(_, b.length - p), b, p, w);
  }
  function Ie(b, _, p, w) {
    return er(Ae(_), b, p, w);
  }
  function ge(b, _, p, w) {
    return er(ir(_), b, p, w);
  }
  function Re(b, _, p, w) {
    return er(He(_, b.length - p), b, p, w);
  }
  s.prototype.write = function(_, p, w, P) {
    if (p === void 0)
      P = "utf8", w = this.length, p = 0;
    else if (w === void 0 && typeof p == "string")
      P = p, w = this.length, p = 0;
    else if (isFinite(p))
      p = p >>> 0, isFinite(w) ? (w = w >>> 0, P === void 0 && (P = "utf8")) : (P = w, w = void 0);
    else
      throw new Error(
        "Buffer.write(string, encoding, offset[, length]) is no longer supported"
      );
    var k = this.length - p;
    if ((w === void 0 || w > k) && (w = k), _.length > 0 && (w < 0 || p < 0) || p > this.length)
      throw new RangeError("Attempt to write outside buffer bounds");
    P || (P = "utf8");
    for (var L = !1; ; )
      switch (P) {
        case "hex":
          return oe(this, _, p, w);
        case "utf8":
        case "utf-8":
          return de(this, _, p, w);
        case "ascii":
        case "latin1":
        case "binary":
          return Ie(this, _, p, w);
        case "base64":
          return ge(this, _, p, w);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return Re(this, _, p, w);
        default:
          if (L)
            throw new TypeError("Unknown encoding: " + P);
          P = ("" + P).toLowerCase(), L = !0;
      }
  }, s.prototype.toJSON = function() {
    return {
      type: "Buffer",
      data: Array.prototype.slice.call(this._arr || this, 0)
    };
  };
  function he(b, _, p) {
    return _ === 0 && p === b.length ? t.fromByteArray(b) : t.fromByteArray(b.slice(_, p));
  }
  function se(b, _, p) {
    p = Math.min(b.length, p);
    for (var w = [], P = _; P < p; ) {
      var k = b[P], L = null, ne = k > 239 ? 4 : k > 223 ? 3 : k > 191 ? 2 : 1;
      if (P + ne <= p) {
        var le, ie, Ce, m;
        switch (ne) {
          case 1:
            k < 128 && (L = k);
            break;
          case 2:
            le = b[P + 1], (le & 192) === 128 && (m = (k & 31) << 6 | le & 63, m > 127 && (L = m));
            break;
          case 3:
            le = b[P + 1], ie = b[P + 2], (le & 192) === 128 && (ie & 192) === 128 && (m = (k & 15) << 12 | (le & 63) << 6 | ie & 63, m > 2047 && (m < 55296 || m > 57343) && (L = m));
            break;
          case 4:
            le = b[P + 1], ie = b[P + 2], Ce = b[P + 3], (le & 192) === 128 && (ie & 192) === 128 && (Ce & 192) === 128 && (m = (k & 15) << 18 | (le & 63) << 12 | (ie & 63) << 6 | Ce & 63, m > 65535 && m < 1114112 && (L = m));
        }
      }
      L === null ? (L = 65533, ne = 1) : L > 65535 && (L -= 65536, w.push(L >>> 10 & 1023 | 55296), L = 56320 | L & 1023), w.push(L), P += ne;
    }
    return J(w);
  }
  var V = 4096;
  function J(b) {
    var _ = b.length;
    if (_ <= V)
      return String.fromCharCode.apply(String, b);
    for (var p = "", w = 0; w < _; )
      p += String.fromCharCode.apply(
        String,
        b.slice(w, w += V)
      );
    return p;
  }
  function re(b, _, p) {
    var w = "";
    p = Math.min(b.length, p);
    for (var P = _; P < p; ++P)
      w += String.fromCharCode(b[P] & 127);
    return w;
  }
  function H(b, _, p) {
    var w = "";
    p = Math.min(b.length, p);
    for (var P = _; P < p; ++P)
      w += String.fromCharCode(b[P]);
    return w;
  }
  function ce(b, _, p) {
    var w = b.length;
    (!_ || _ < 0) && (_ = 0), (!p || p < 0 || p > w) && (p = w);
    for (var P = "", k = _; k < p; ++k)
      P += bt[b[k]];
    return P;
  }
  function Ne(b, _, p) {
    for (var w = b.slice(_, p), P = "", k = 0; k < w.length - 1; k += 2)
      P += String.fromCharCode(w[k] + w[k + 1] * 256);
    return P;
  }
  s.prototype.slice = function(_, p) {
    var w = this.length;
    _ = ~~_, p = p === void 0 ? w : ~~p, _ < 0 ? (_ += w, _ < 0 && (_ = 0)) : _ > w && (_ = w), p < 0 ? (p += w, p < 0 && (p = 0)) : p > w && (p = w), p < _ && (p = _);
    var P = this.subarray(_, p);
    return Object.setPrototypeOf(P, s.prototype), P;
  };
  function G(b, _, p) {
    if (b % 1 !== 0 || b < 0)
      throw new RangeError("offset is not uint");
    if (b + _ > p)
      throw new RangeError("Trying to access beyond buffer length");
  }
  s.prototype.readUintLE = s.prototype.readUIntLE = function(_, p, w) {
    _ = _ >>> 0, p = p >>> 0, w || G(_, p, this.length);
    for (var P = this[_], k = 1, L = 0; ++L < p && (k *= 256); )
      P += this[_ + L] * k;
    return P;
  }, s.prototype.readUintBE = s.prototype.readUIntBE = function(_, p, w) {
    _ = _ >>> 0, p = p >>> 0, w || G(_, p, this.length);
    for (var P = this[_ + --p], k = 1; p > 0 && (k *= 256); )
      P += this[_ + --p] * k;
    return P;
  }, s.prototype.readUint8 = s.prototype.readUInt8 = function(_, p) {
    return _ = _ >>> 0, p || G(_, 1, this.length), this[_];
  }, s.prototype.readUint16LE = s.prototype.readUInt16LE = function(_, p) {
    return _ = _ >>> 0, p || G(_, 2, this.length), this[_] | this[_ + 1] << 8;
  }, s.prototype.readUint16BE = s.prototype.readUInt16BE = function(_, p) {
    return _ = _ >>> 0, p || G(_, 2, this.length), this[_] << 8 | this[_ + 1];
  }, s.prototype.readUint32LE = s.prototype.readUInt32LE = function(_, p) {
    return _ = _ >>> 0, p || G(_, 4, this.length), (this[_] | this[_ + 1] << 8 | this[_ + 2] << 16) + this[_ + 3] * 16777216;
  }, s.prototype.readUint32BE = s.prototype.readUInt32BE = function(_, p) {
    return _ = _ >>> 0, p || G(_, 4, this.length), this[_] * 16777216 + (this[_ + 1] << 16 | this[_ + 2] << 8 | this[_ + 3]);
  }, s.prototype.readIntLE = function(_, p, w) {
    _ = _ >>> 0, p = p >>> 0, w || G(_, p, this.length);
    for (var P = this[_], k = 1, L = 0; ++L < p && (k *= 256); )
      P += this[_ + L] * k;
    return k *= 128, P >= k && (P -= Math.pow(2, 8 * p)), P;
  }, s.prototype.readIntBE = function(_, p, w) {
    _ = _ >>> 0, p = p >>> 0, w || G(_, p, this.length);
    for (var P = p, k = 1, L = this[_ + --P]; P > 0 && (k *= 256); )
      L += this[_ + --P] * k;
    return k *= 128, L >= k && (L -= Math.pow(2, 8 * p)), L;
  }, s.prototype.readInt8 = function(_, p) {
    return _ = _ >>> 0, p || G(_, 1, this.length), this[_] & 128 ? (255 - this[_] + 1) * -1 : this[_];
  }, s.prototype.readInt16LE = function(_, p) {
    _ = _ >>> 0, p || G(_, 2, this.length);
    var w = this[_] | this[_ + 1] << 8;
    return w & 32768 ? w | 4294901760 : w;
  }, s.prototype.readInt16BE = function(_, p) {
    _ = _ >>> 0, p || G(_, 2, this.length);
    var w = this[_ + 1] | this[_] << 8;
    return w & 32768 ? w | 4294901760 : w;
  }, s.prototype.readInt32LE = function(_, p) {
    return _ = _ >>> 0, p || G(_, 4, this.length), this[_] | this[_ + 1] << 8 | this[_ + 2] << 16 | this[_ + 3] << 24;
  }, s.prototype.readInt32BE = function(_, p) {
    return _ = _ >>> 0, p || G(_, 4, this.length), this[_] << 24 | this[_ + 1] << 16 | this[_ + 2] << 8 | this[_ + 3];
  }, s.prototype.readFloatLE = function(_, p) {
    return _ = _ >>> 0, p || G(_, 4, this.length), r.read(this, _, !0, 23, 4);
  }, s.prototype.readFloatBE = function(_, p) {
    return _ = _ >>> 0, p || G(_, 4, this.length), r.read(this, _, !1, 23, 4);
  }, s.prototype.readDoubleLE = function(_, p) {
    return _ = _ >>> 0, p || G(_, 8, this.length), r.read(this, _, !0, 52, 8);
  }, s.prototype.readDoubleBE = function(_, p) {
    return _ = _ >>> 0, p || G(_, 8, this.length), r.read(this, _, !1, 52, 8);
  };
  function B(b, _, p, w, P, k) {
    if (!s.isBuffer(b))
      throw new TypeError('"buffer" argument must be a Buffer instance');
    if (_ > P || _ < k)
      throw new RangeError('"value" argument is out of bounds');
    if (p + w > b.length)
      throw new RangeError("Index out of range");
  }
  s.prototype.writeUintLE = s.prototype.writeUIntLE = function(_, p, w, P) {
    if (_ = +_, p = p >>> 0, w = w >>> 0, !P) {
      var k = Math.pow(2, 8 * w) - 1;
      B(this, _, p, w, k, 0);
    }
    var L = 1, ne = 0;
    for (this[p] = _ & 255; ++ne < w && (L *= 256); )
      this[p + ne] = _ / L & 255;
    return p + w;
  }, s.prototype.writeUintBE = s.prototype.writeUIntBE = function(_, p, w, P) {
    if (_ = +_, p = p >>> 0, w = w >>> 0, !P) {
      var k = Math.pow(2, 8 * w) - 1;
      B(this, _, p, w, k, 0);
    }
    var L = w - 1, ne = 1;
    for (this[p + L] = _ & 255; --L >= 0 && (ne *= 256); )
      this[p + L] = _ / ne & 255;
    return p + w;
  }, s.prototype.writeUint8 = s.prototype.writeUInt8 = function(_, p, w) {
    return _ = +_, p = p >>> 0, w || B(this, _, p, 1, 255, 0), this[p] = _ & 255, p + 1;
  }, s.prototype.writeUint16LE = s.prototype.writeUInt16LE = function(_, p, w) {
    return _ = +_, p = p >>> 0, w || B(this, _, p, 2, 65535, 0), this[p] = _ & 255, this[p + 1] = _ >>> 8, p + 2;
  }, s.prototype.writeUint16BE = s.prototype.writeUInt16BE = function(_, p, w) {
    return _ = +_, p = p >>> 0, w || B(this, _, p, 2, 65535, 0), this[p] = _ >>> 8, this[p + 1] = _ & 255, p + 2;
  }, s.prototype.writeUint32LE = s.prototype.writeUInt32LE = function(_, p, w) {
    return _ = +_, p = p >>> 0, w || B(this, _, p, 4, 4294967295, 0), this[p + 3] = _ >>> 24, this[p + 2] = _ >>> 16, this[p + 1] = _ >>> 8, this[p] = _ & 255, p + 4;
  }, s.prototype.writeUint32BE = s.prototype.writeUInt32BE = function(_, p, w) {
    return _ = +_, p = p >>> 0, w || B(this, _, p, 4, 4294967295, 0), this[p] = _ >>> 24, this[p + 1] = _ >>> 16, this[p + 2] = _ >>> 8, this[p + 3] = _ & 255, p + 4;
  }, s.prototype.writeIntLE = function(_, p, w, P) {
    if (_ = +_, p = p >>> 0, !P) {
      var k = Math.pow(2, 8 * w - 1);
      B(this, _, p, w, k - 1, -k);
    }
    var L = 0, ne = 1, le = 0;
    for (this[p] = _ & 255; ++L < w && (ne *= 256); )
      _ < 0 && le === 0 && this[p + L - 1] !== 0 && (le = 1), this[p + L] = (_ / ne >> 0) - le & 255;
    return p + w;
  }, s.prototype.writeIntBE = function(_, p, w, P) {
    if (_ = +_, p = p >>> 0, !P) {
      var k = Math.pow(2, 8 * w - 1);
      B(this, _, p, w, k - 1, -k);
    }
    var L = w - 1, ne = 1, le = 0;
    for (this[p + L] = _ & 255; --L >= 0 && (ne *= 256); )
      _ < 0 && le === 0 && this[p + L + 1] !== 0 && (le = 1), this[p + L] = (_ / ne >> 0) - le & 255;
    return p + w;
  }, s.prototype.writeInt8 = function(_, p, w) {
    return _ = +_, p = p >>> 0, w || B(this, _, p, 1, 127, -128), _ < 0 && (_ = 255 + _ + 1), this[p] = _ & 255, p + 1;
  }, s.prototype.writeInt16LE = function(_, p, w) {
    return _ = +_, p = p >>> 0, w || B(this, _, p, 2, 32767, -32768), this[p] = _ & 255, this[p + 1] = _ >>> 8, p + 2;
  }, s.prototype.writeInt16BE = function(_, p, w) {
    return _ = +_, p = p >>> 0, w || B(this, _, p, 2, 32767, -32768), this[p] = _ >>> 8, this[p + 1] = _ & 255, p + 2;
  }, s.prototype.writeInt32LE = function(_, p, w) {
    return _ = +_, p = p >>> 0, w || B(this, _, p, 4, 2147483647, -2147483648), this[p] = _ & 255, this[p + 1] = _ >>> 8, this[p + 2] = _ >>> 16, this[p + 3] = _ >>> 24, p + 4;
  }, s.prototype.writeInt32BE = function(_, p, w) {
    return _ = +_, p = p >>> 0, w || B(this, _, p, 4, 2147483647, -2147483648), _ < 0 && (_ = 4294967295 + _ + 1), this[p] = _ >>> 24, this[p + 1] = _ >>> 16, this[p + 2] = _ >>> 8, this[p + 3] = _ & 255, p + 4;
  };
  function Oe(b, _, p, w, P, k) {
    if (p + w > b.length)
      throw new RangeError("Index out of range");
    if (p < 0)
      throw new RangeError("Index out of range");
  }
  function I(b, _, p, w, P) {
    return _ = +_, p = p >>> 0, P || Oe(b, _, p, 4), r.write(b, _, p, w, 23, 4), p + 4;
  }
  s.prototype.writeFloatLE = function(_, p, w) {
    return I(this, _, p, !0, w);
  }, s.prototype.writeFloatBE = function(_, p, w) {
    return I(this, _, p, !1, w);
  };
  function M(b, _, p, w, P) {
    return _ = +_, p = p >>> 0, P || Oe(b, _, p, 8), r.write(b, _, p, w, 52, 8), p + 8;
  }
  s.prototype.writeDoubleLE = function(_, p, w) {
    return M(this, _, p, !0, w);
  }, s.prototype.writeDoubleBE = function(_, p, w) {
    return M(this, _, p, !1, w);
  }, s.prototype.copy = function(_, p, w, P) {
    if (!s.isBuffer(_))
      throw new TypeError("argument should be a Buffer");
    if (w || (w = 0), !P && P !== 0 && (P = this.length), p >= _.length && (p = _.length), p || (p = 0), P > 0 && P < w && (P = w), P === w || _.length === 0 || this.length === 0)
      return 0;
    if (p < 0)
      throw new RangeError("targetStart out of bounds");
    if (w < 0 || w >= this.length)
      throw new RangeError("Index out of range");
    if (P < 0)
      throw new RangeError("sourceEnd out of bounds");
    P > this.length && (P = this.length), _.length - p < P - w && (P = _.length - p + w);
    var k = P - w;
    return this === _ && typeof Uint8Array.prototype.copyWithin == "function" ? this.copyWithin(p, w, P) : Uint8Array.prototype.set.call(
      _,
      this.subarray(w, P),
      p
    ), k;
  }, s.prototype.fill = function(_, p, w, P) {
    if (typeof _ == "string") {
      if (typeof p == "string" ? (P = p, p = 0, w = this.length) : typeof w == "string" && (P = w, w = this.length), P !== void 0 && typeof P != "string")
        throw new TypeError("encoding must be a string");
      if (typeof P == "string" && !s.isEncoding(P))
        throw new TypeError("Unknown encoding: " + P);
      if (_.length === 1) {
        var k = _.charCodeAt(0);
        (P === "utf8" && k < 128 || P === "latin1") && (_ = k);
      }
    } else
      typeof _ == "number" ? _ = _ & 255 : typeof _ == "boolean" && (_ = Number(_));
    if (p < 0 || this.length < p || this.length < w)
      throw new RangeError("Out of range index");
    if (w <= p)
      return this;
    p = p >>> 0, w = w === void 0 ? this.length : w >>> 0, _ || (_ = 0);
    var L;
    if (typeof _ == "number")
      for (L = p; L < w; ++L)
        this[L] = _;
    else {
      var ne = s.isBuffer(_) ? _ : s.from(_, P), le = ne.length;
      if (le === 0)
        throw new TypeError('The value "' + _ + '" is invalid for argument "value"');
      for (L = 0; L < w - p; ++L)
        this[L + p] = ne[L % le];
    }
    return this;
  };
  var W = /[^+/0-9A-Za-z-_]/g;
  function z(b) {
    if (b = b.split("=")[0], b = b.trim().replace(W, ""), b.length < 2)
      return "";
    for (; b.length % 4 !== 0; )
      b = b + "=";
    return b;
  }
  function Z(b, _) {
    _ = _ || 1 / 0;
    for (var p, w = b.length, P = null, k = [], L = 0; L < w; ++L) {
      if (p = b.charCodeAt(L), p > 55295 && p < 57344) {
        if (!P) {
          if (p > 56319) {
            (_ -= 3) > -1 && k.push(239, 191, 189);
            continue;
          } else if (L + 1 === w) {
            (_ -= 3) > -1 && k.push(239, 191, 189);
            continue;
          }
          P = p;
          continue;
        }
        if (p < 56320) {
          (_ -= 3) > -1 && k.push(239, 191, 189), P = p;
          continue;
        }
        p = (P - 55296 << 10 | p - 56320) + 65536;
      } else
        P && (_ -= 3) > -1 && k.push(239, 191, 189);
      if (P = null, p < 128) {
        if ((_ -= 1) < 0)
          break;
        k.push(p);
      } else if (p < 2048) {
        if ((_ -= 2) < 0)
          break;
        k.push(
          p >> 6 | 192,
          p & 63 | 128
        );
      } else if (p < 65536) {
        if ((_ -= 3) < 0)
          break;
        k.push(
          p >> 12 | 224,
          p >> 6 & 63 | 128,
          p & 63 | 128
        );
      } else if (p < 1114112) {
        if ((_ -= 4) < 0)
          break;
        k.push(
          p >> 18 | 240,
          p >> 12 & 63 | 128,
          p >> 6 & 63 | 128,
          p & 63 | 128
        );
      } else
        throw new Error("Invalid code point");
    }
    return k;
  }
  function Ae(b) {
    for (var _ = [], p = 0; p < b.length; ++p)
      _.push(b.charCodeAt(p) & 255);
    return _;
  }
  function He(b, _) {
    for (var p, w, P, k = [], L = 0; L < b.length && !((_ -= 2) < 0); ++L)
      p = b.charCodeAt(L), w = p >> 8, P = p % 256, k.push(P), k.push(w);
    return k;
  }
  function ir(b) {
    return t.toByteArray(z(b));
  }
  function er(b, _, p, w) {
    for (var P = 0; P < w && !(P + p >= _.length || P >= b.length); ++P)
      _[P + p] = b[P];
    return P;
  }
  function $e(b, _) {
    return b instanceof _ || b != null && b.constructor != null && b.constructor.name != null && b.constructor.name === _.name;
  }
  function rr(b) {
    return b !== b;
  }
  var bt = function() {
    for (var b = "0123456789abcdef", _ = new Array(256), p = 0; p < 16; ++p)
      for (var w = p * 16, P = 0; P < 16; ++P)
        _[w + P] = b[p] + b[P];
    return _;
  }();
})(hy);
/*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
(function(e, t) {
  var r = hy, n = r.Buffer;
  function i(a, s) {
    for (var c in a)
      s[c] = a[c];
  }
  n.from && n.alloc && n.allocUnsafe && n.allocUnsafeSlow ? e.exports = r : (i(r, t), t.Buffer = o);
  function o(a, s, c) {
    return n(a, s, c);
  }
  o.prototype = Object.create(n.prototype), i(n, o), o.from = function(a, s, c) {
    if (typeof a == "number")
      throw new TypeError("Argument must not be a number");
    return n(a, s, c);
  }, o.alloc = function(a, s, c) {
    if (typeof a != "number")
      throw new TypeError("Argument must be a number");
    var u = n(a);
    return s !== void 0 ? typeof c == "string" ? u.fill(s, c) : u.fill(s) : u.fill(0), u;
  }, o.allocUnsafe = function(a) {
    if (typeof a != "number")
      throw new TypeError("Argument must be a number");
    return n(a);
  }, o.allocUnsafeSlow = function(a) {
    if (typeof a != "number")
      throw new TypeError("Argument must be a number");
    return r.SlowBuffer(a);
  };
})(t2, ku);
var ad = ku.Buffer, Bv = ad.isEncoding || function(e) {
  switch (e = "" + e, e && e.toLowerCase()) {
    case "hex":
    case "utf8":
    case "utf-8":
    case "ascii":
    case "binary":
    case "base64":
    case "ucs2":
    case "ucs-2":
    case "utf16le":
    case "utf-16le":
    case "raw":
      return !0;
    default:
      return !1;
  }
};
function n2(e) {
  if (!e)
    return "utf8";
  for (var t; ; )
    switch (e) {
      case "utf8":
      case "utf-8":
        return "utf8";
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return "utf16le";
      case "latin1":
      case "binary":
        return "latin1";
      case "base64":
      case "ascii":
      case "hex":
        return e;
      default:
        if (t)
          return;
        e = ("" + e).toLowerCase(), t = !0;
    }
}
function i2(e) {
  var t = n2(e);
  if (typeof t != "string" && (ad.isEncoding === Bv || !Bv(e)))
    throw new Error("Unknown encoding: " + e);
  return t || e;
}
dy.StringDecoder = xa;
function xa(e) {
  this.encoding = i2(e);
  var t;
  switch (this.encoding) {
    case "utf16le":
      this.text = l2, this.end = f2, t = 4;
      break;
    case "utf8":
      this.fillLast = u2, t = 4;
      break;
    case "base64":
      this.text = d2, this.end = h2, t = 3;
      break;
    default:
      this.write = v2, this.end = _2;
      return;
  }
  this.lastNeed = 0, this.lastTotal = 0, this.lastChar = ad.allocUnsafe(t);
}
xa.prototype.write = function(e) {
  if (e.length === 0)
    return "";
  var t, r;
  if (this.lastNeed) {
    if (t = this.fillLast(e), t === void 0)
      return "";
    r = this.lastNeed, this.lastNeed = 0;
  } else
    r = 0;
  return r < e.length ? t ? t + this.text(e, r) : this.text(e, r) : t || "";
};
xa.prototype.end = c2;
xa.prototype.text = s2;
xa.prototype.fillLast = function(e) {
  if (this.lastNeed <= e.length)
    return e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);
  e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, e.length), this.lastNeed -= e.length;
};
function Nl(e) {
  return e <= 127 ? 0 : e >> 5 === 6 ? 2 : e >> 4 === 14 ? 3 : e >> 3 === 30 ? 4 : e >> 6 === 2 ? -1 : -2;
}
function o2(e, t, r) {
  var n = t.length - 1;
  if (n < r)
    return 0;
  var i = Nl(t[n]);
  return i >= 0 ? (i > 0 && (e.lastNeed = i - 1), i) : --n < r || i === -2 ? 0 : (i = Nl(t[n]), i >= 0 ? (i > 0 && (e.lastNeed = i - 2), i) : --n < r || i === -2 ? 0 : (i = Nl(t[n]), i >= 0 ? (i > 0 && (i === 2 ? i = 0 : e.lastNeed = i - 3), i) : 0));
}
function a2(e, t, r) {
  if ((t[0] & 192) !== 128)
    return e.lastNeed = 0, "�";
  if (e.lastNeed > 1 && t.length > 1) {
    if ((t[1] & 192) !== 128)
      return e.lastNeed = 1, "�";
    if (e.lastNeed > 2 && t.length > 2 && (t[2] & 192) !== 128)
      return e.lastNeed = 2, "�";
  }
}
function u2(e) {
  var t = this.lastTotal - this.lastNeed, r = a2(this, e);
  if (r !== void 0)
    return r;
  if (this.lastNeed <= e.length)
    return e.copy(this.lastChar, t, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);
  e.copy(this.lastChar, t, 0, e.length), this.lastNeed -= e.length;
}
function s2(e, t) {
  var r = o2(this, e, t);
  if (!this.lastNeed)
    return e.toString("utf8", t);
  this.lastTotal = r;
  var n = e.length - (r - this.lastNeed);
  return e.copy(this.lastChar, 0, n), e.toString("utf8", t, n);
}
function c2(e) {
  var t = e && e.length ? this.write(e) : "";
  return this.lastNeed ? t + "�" : t;
}
function l2(e, t) {
  if ((e.length - t) % 2 === 0) {
    var r = e.toString("utf16le", t);
    if (r) {
      var n = r.charCodeAt(r.length - 1);
      if (n >= 55296 && n <= 56319)
        return this.lastNeed = 2, this.lastTotal = 4, this.lastChar[0] = e[e.length - 2], this.lastChar[1] = e[e.length - 1], r.slice(0, -1);
    }
    return r;
  }
  return this.lastNeed = 1, this.lastTotal = 2, this.lastChar[0] = e[e.length - 1], e.toString("utf16le", t, e.length - 1);
}
function f2(e) {
  var t = e && e.length ? this.write(e) : "";
  if (this.lastNeed) {
    var r = this.lastTotal - this.lastNeed;
    return t + this.lastChar.toString("utf16le", 0, r);
  }
  return t;
}
function d2(e, t) {
  var r = (e.length - t) % 3;
  return r === 0 ? e.toString("base64", t) : (this.lastNeed = 3 - r, this.lastTotal = 3, r === 1 ? this.lastChar[0] = e[e.length - 1] : (this.lastChar[0] = e[e.length - 2], this.lastChar[1] = e[e.length - 1]), e.toString("base64", t, e.length - r));
}
function h2(e) {
  var t = e && e.length ? this.write(e) : "";
  return this.lastNeed ? t + this.lastChar.toString("base64", 0, 3 - this.lastNeed) : t;
}
function v2(e) {
  return e.toString(this.encoding);
}
function _2(e) {
  return e && e.length ? this.write(e) : "";
}
var vy = d && d.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(od, "__esModule", { value: !0 });
var p2 = vy(Hr), m2 = ee, $l = vy(rd), y2 = dy, xv = new y2.StringDecoder("utf8");
function b2(e) {
  return new p2.default(S2(e));
}
function g2(e, t) {
  if (Object.prototype.hasOwnProperty.call(e, "_buffer"))
    return O2(e, t);
  if (Object.prototype.hasOwnProperty.call(e, "_buffers"))
    return w2(e, t);
  throw (0, m2.newError)("Don't know how to decode strings from '".concat(e, "'"));
}
function O2(e, t) {
  var r = e.position, n = r + t;
  return e.position = Math.min(n, e.length), e._buffer.toString("utf8", r, n);
}
function w2(e, t) {
  return E2(e, t, function(r) {
    return xv.write(r._buffer);
  }, function() {
    return xv.end();
  });
}
function E2(e, t, r, n) {
  var i = t, o = e.position;
  e._updatePos(Math.min(t, e.length - o));
  var a = e._buffers.reduce(function(s, c) {
    if (i <= 0)
      return s;
    if (o >= c.length)
      return o -= c.length, "";
    c._updatePos(o - c.position);
    var u = Math.min(c.length - o, i), l = c.readSlice(u);
    return c._updatePos(u), i = Math.max(i - l.length, 0), o = 0, s + r(l);
  }, "");
  return a + n();
}
function S2(e) {
  return typeof $l.default.Buffer.from == "function" ? $l.default.Buffer.from(e, "utf8") : new $l.default.Buffer(e, "utf8");
}
od.default = {
  encode: b2,
  decode: g2
};
(function(e) {
  var t = d && d.__createBinding || (Object.create ? function(s, c, u, l) {
    l === void 0 && (l = u);
    var v = Object.getOwnPropertyDescriptor(c, u);
    (!v || ("get" in v ? !c.__esModule : v.writable || v.configurable)) && (v = { enumerable: !0, get: function() {
      return c[u];
    } }), Object.defineProperty(s, l, v);
  } : function(s, c, u, l) {
    l === void 0 && (l = u), s[l] = c[u];
  }), r = d && d.__exportStar || function(s, c) {
    for (var u in s)
      u !== "default" && !Object.prototype.hasOwnProperty.call(c, u) && t(c, s, u);
  }, n = d && d.__importDefault || function(s) {
    return s && s.__esModule ? s : { default: s };
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.utf8 = e.alloc = e.ChannelConfig = void 0, r(yn, e), r(bn, e);
  var i = id;
  Object.defineProperty(e, "ChannelConfig", { enumerable: !0, get: function() {
    return n(i).default;
  } });
  var o = Hr;
  Object.defineProperty(e, "alloc", { enumerable: !0, get: function() {
    return o.alloc;
  } });
  var a = od;
  Object.defineProperty(e, "utf8", { enumerable: !0, get: function() {
    return n(a).default;
  } });
})(Jn);
Object.defineProperty(Xf, "__esModule", { value: !0 });
var T2 = Jn, _y = ee, P2 = 1616949271;
function di(e, t) {
  return {
    major: e,
    minor: t
  };
}
function I2(e) {
  if (e.length > 4)
    throw (0, _y.newError)("It should not have more than 4 versions of the protocol");
  var t = (0, T2.alloc)(5 * 4);
  return t.writeInt32(P2), e.forEach(function(r) {
    if (r instanceof Array) {
      var n = r[0], i = n.major, o = n.minor, a = r[1].minor, s = o - a;
      t.writeInt32(s << 16 | o << 8 | i);
    } else {
      var i = r.major, o = r.minor;
      t.writeInt32(o << 8 | i);
    }
  }), t.reset(), t;
}
function A2(e) {
  var t = [
    e.readUInt8(),
    e.readUInt8(),
    e.readUInt8(),
    e.readUInt8()
  ];
  if (t[0] === 72 && t[1] === 84 && t[2] === 84 && t[3] === 80)
    throw (0, _y.newError)("Server responded HTTP. Make sure you are not trying to connect to the http endpoint (HTTP defaults to port 7474 whereas BOLT defaults to port 7687)");
  return Number(t[3] + "." + t[2]);
}
function R2() {
  return I2([
    di(5, 0),
    [di(4, 4), di(4, 2)],
    di(4, 1),
    di(3, 0)
  ]);
}
function C2(e) {
  var t = this;
  return new Promise(function(r, n) {
    var i = function(o) {
      n(o);
    };
    e.onerror = i.bind(t), e._error && i(e._error), e.onmessage = function(o) {
      try {
        var a = A2(o);
        r({
          protocolVersion: a,
          consumeRemainingBuffer: function(s) {
            o.hasRemaining() && s(o.readSlice(o.remaining()));
          }
        });
      } catch (s) {
        n(s);
      }
    }, e.write(R2());
  });
}
Xf.default = C2;
var ud = {}, zs = {}, Pr = {}, Pe = {}, Ys = {}, sd = d && d.__extends || function() {
  var e = function(t, r) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var o in i)
        Object.prototype.hasOwnProperty.call(i, o) && (n[o] = i[o]);
    }, e(t, r);
  };
  return function(t, r) {
    if (typeof r != "function" && r !== null)
      throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
    e(t, r);
    function n() {
      this.constructor = t;
    }
    t.prototype = r === null ? Object.create(r) : (n.prototype = r.prototype, new n());
  };
}(), j2 = d && d.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(Ys, "__esModule", { value: !0 });
j2(ee);
var Ks = (
  /** @class */
  function() {
    function e() {
    }
    return e.ofRecord = function(t) {
      return t === null ? e.ofNull() : new M2(t);
    }, e.ofMessageResponse = function(t) {
      return t === null ? e.ofNull() : new N2(t);
    }, e.ofNull = function() {
      return new $2();
    }, Object.defineProperty(e.prototype, "ttl", {
      /**
       * Get raw ttl
       *
       * @returns {number|string} ttl Time to live
       */
      get: function() {
        throw new Error("Not implemented");
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "db", {
      /**
       * Get raw db
       *
       * @returns {string?} The database name
       */
      get: function() {
        throw new Error("Not implemented");
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "servers", {
      /**
       *
       * @typedef {Object} ServerRole
       * @property {string} role the role of the address on the cluster
       * @property {string[]} addresses the address within the role
       *
       * @return {ServerRole[]} list of servers addresses
       */
      get: function() {
        throw new Error("Not implemented");
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "isNull", {
      /**
       * Indicates the result is null
       *
       * @returns {boolean} Is null
       */
      get: function() {
        throw new Error("Not implemented");
      },
      enumerable: !1,
      configurable: !0
    }), e;
  }()
);
Ys.default = Ks;
var N2 = (
  /** @class */
  function(e) {
    sd(t, e);
    function t(r) {
      var n = e.call(this) || this;
      return n._response = r, n;
    }
    return Object.defineProperty(t.prototype, "ttl", {
      get: function() {
        return this._response.rt.ttl;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t.prototype, "servers", {
      get: function() {
        return this._response.rt.servers;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t.prototype, "db", {
      get: function() {
        return this._response.rt.db;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t.prototype, "isNull", {
      get: function() {
        return this._response === null;
      },
      enumerable: !1,
      configurable: !0
    }), t;
  }(Ks)
), $2 = (
  /** @class */
  function(e) {
    sd(t, e);
    function t() {
      return e !== null && e.apply(this, arguments) || this;
    }
    return Object.defineProperty(t.prototype, "isNull", {
      get: function() {
        return !0;
      },
      enumerable: !1,
      configurable: !0
    }), t;
  }(Ks)
), M2 = (
  /** @class */
  function(e) {
    sd(t, e);
    function t(r) {
      var n = e.call(this) || this;
      return n._record = r, n;
    }
    return Object.defineProperty(t.prototype, "ttl", {
      get: function() {
        return this._record.get("ttl");
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t.prototype, "servers", {
      get: function() {
        return this._record.get("servers");
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t.prototype, "db", {
      get: function() {
        return this._record.has("db") ? this._record.get("db") : null;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t.prototype, "isNull", {
      get: function() {
        return this._record === null;
      },
      enumerable: !1,
      configurable: !0
    }), t;
  }(Ks)
), Xt = d && d.__extends || function() {
  var e = function(t, r) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var o in i)
        Object.prototype.hasOwnProperty.call(i, o) && (n[o] = i[o]);
    }, e(t, r);
  };
  return function(t, r) {
    if (typeof r != "function" && r !== null)
      throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
    e(t, r);
    function n() {
      this.constructor = t;
    }
    t.prototype = r === null ? Object.create(r) : (n.prototype = r.prototype, new n());
  };
}(), k2 = d && d.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(Pe, "__esModule", { value: !0 });
Pe.ProcedureRouteObserver = Pe.RouteObserver = Pe.CompletedObserver = Pe.FailedObserver = Pe.ResetObserver = Pe.LoginObserver = Pe.ResultStreamObserver = Pe.StreamObserver = void 0;
var cr = ee, py = k2(Ys), D2 = cr.internal.constants.FETCH_ALL, xt = cr.error.PROTOCOL_ERROR, Xn = (
  /** @class */
  function() {
    function e() {
    }
    return e.prototype.onNext = function(t) {
    }, e.prototype.onError = function(t) {
    }, e.prototype.onCompleted = function(t) {
    }, e;
  }()
);
Pe.StreamObserver = Xn;
var cd = (
  /** @class */
  function(e) {
    Xt(t, e);
    function t(r) {
      var n = r === void 0 ? {} : r, i = n.reactive, o = i === void 0 ? !1 : i, a = n.moreFunction, s = n.discardFunction, c = n.fetchSize, u = c === void 0 ? D2 : c, l = n.beforeError, v = n.afterError, y = n.beforeKeys, g = n.afterKeys, E = n.beforeComplete, S = n.afterComplete, C = n.server, R = n.highRecordWatermark, $ = R === void 0 ? Number.MAX_VALUE : R, U = n.lowRecordWatermark, D = U === void 0 ? Number.MAX_VALUE : U, F = e.call(this) || this;
      return F._fieldKeys = null, F._fieldLookup = null, F._head = null, F._queuedRecords = [], F._tail = null, F._error = null, F._observers = [], F._meta = {}, F._server = C, F._beforeError = l, F._afterError = v, F._beforeKeys = y, F._afterKeys = g, F._beforeComplete = E, F._afterComplete = S, F._queryId = null, F._moreFunction = a, F._discardFunction = s, F._discard = !1, F._fetchSize = u, F._lowRecordWatermark = D, F._highRecordWatermark = $, F._setState(o ? dr.READY : dr.READY_STREAMING), F._setupAutoPull(), F._paused = !1, F;
    }
    return t.prototype.pause = function() {
      this._paused = !0;
    }, t.prototype.resume = function() {
      this._paused = !1, this._setupAutoPull(!0), this._state.pull(this);
    }, t.prototype.onNext = function(r) {
      var n = new cr.Record(this._fieldKeys, r, this._fieldLookup);
      this._observers.some(function(i) {
        return i.onNext;
      }) ? this._observers.forEach(function(i) {
        i.onNext && i.onNext(n);
      }) : (this._queuedRecords.push(n), this._queuedRecords.length > this._highRecordWatermark && (this._autoPull = !1));
    }, t.prototype.onCompleted = function(r) {
      this._state.onSuccess(this, r);
    }, t.prototype.onError = function(r) {
      this._state.onError(this, r);
    }, t.prototype.cancel = function() {
      this._discard = !0;
    }, t.prototype.prepareToHandleSingleResponse = function() {
      this._head = [], this._fieldKeys = [], this._setState(dr.STREAMING);
    }, t.prototype.markCompleted = function() {
      this._head = [], this._fieldKeys = [], this._tail = {}, this._setState(dr.SUCCEEDED);
    }, t.prototype.subscribe = function(r) {
      if (this._head && r.onKeys && r.onKeys(this._head), this._queuedRecords.length > 0 && r.onNext)
        for (var n = 0; n < this._queuedRecords.length; n++)
          r.onNext(this._queuedRecords[n]), this._queuedRecords.length - n - 1 <= this._lowRecordWatermark && (this._autoPull = !0, this._state === dr.READY && this._handleStreaming());
      this._tail && r.onCompleted && r.onCompleted(this._tail), this._error && r.onError(this._error), this._observers.push(r), this._state === dr.READY && this._handleStreaming();
    }, t.prototype._handleHasMore = function(r) {
      this._setState(dr.READY), this._handleStreaming(), delete r.has_more;
    }, t.prototype._handlePullSuccess = function(r) {
      var n = this, i = Object.assign(this._server ? { server: this._server } : {}, this._meta, r);
      if (![void 0, null, "r", "w", "rw", "s"].includes(i.type)) {
        this.onError((0, cr.newError)(`Server returned invalid query type. Expected one of [undefined, null, "r", "w", "rw", "s"] but got '`.concat(i.type, "'"), xt));
        return;
      }
      this._setState(dr.SUCCEEDED);
      var o = null;
      this._beforeComplete && (o = this._beforeComplete(i));
      var a = function() {
        n._tail = i, n._observers.some(function(s) {
          return s.onCompleted;
        }) && n._observers.forEach(function(s) {
          s.onCompleted && s.onCompleted(i);
        }), n._afterComplete && n._afterComplete(i);
      };
      o ? Promise.resolve(o).then(function() {
        return a();
      }) : a();
    }, t.prototype._handleRunSuccess = function(r, n) {
      var i = this;
      if (this._fieldKeys === null) {
        if (this._fieldKeys = [], this._fieldLookup = {}, r.fields && r.fields.length > 0) {
          this._fieldKeys = r.fields;
          for (var o = 0; o < r.fields.length; o++)
            this._fieldLookup[r.fields[o]] = o;
          delete r.fields;
        }
        r.qid !== null && r.qid !== void 0 && (this._queryId = r.qid, delete r.qid), this._storeMetadataForCompletion(r);
        var a = null;
        this._beforeKeys && (a = this._beforeKeys(this._fieldKeys));
        var s = function() {
          i._head = i._fieldKeys, i._observers.some(function(c) {
            return c.onKeys;
          }) && i._observers.forEach(function(c) {
            c.onKeys && c.onKeys(i._fieldKeys);
          }), i._afterKeys && i._afterKeys(i._fieldKeys), n();
        };
        a ? Promise.resolve(a).then(function() {
          return s();
        }) : s();
      }
    }, t.prototype._handleError = function(r) {
      var n = this;
      this._setState(dr.FAILED), this._error = r;
      var i = null;
      this._beforeError && (i = this._beforeError(r));
      var o = function() {
        n._observers.some(function(a) {
          return a.onError;
        }) && n._observers.forEach(function(a) {
          a.onError && a.onError(r);
        }), n._afterError && n._afterError(r);
      };
      i ? Promise.resolve(i).then(function() {
        return o();
      }) : o();
    }, t.prototype._handleStreaming = function() {
      this._head && this._observers.some(function(r) {
        return r.onNext || r.onCompleted;
      }) && !this._paused && (this._discard || this._autoPull) && this._more();
    }, t.prototype._more = function() {
      this._discard ? this._discardFunction(this._queryId, this) : this._moreFunction(this._queryId, this._fetchSize, this), this._setState(dr.STREAMING);
    }, t.prototype._storeMetadataForCompletion = function(r) {
      for (var n = Object.keys(r), i = n.length, o = ""; i--; )
        o = n[i], this._meta[o] = r[o];
    }, t.prototype._setState = function(r) {
      this._state = r;
    }, t.prototype._setupAutoPull = function() {
      this._autoPull = !0;
    }, t;
  }(Xn)
);
Pe.ResultStreamObserver = cd;
var U2 = (
  /** @class */
  function(e) {
    Xt(t, e);
    function t(r) {
      var n = r === void 0 ? {} : r, i = n.onError, o = n.onCompleted, a = e.call(this) || this;
      return a._onError = i, a._onCompleted = o, a;
    }
    return t.prototype.onNext = function(r) {
      this.onError((0, cr.newError)("Received RECORD when initializing " + cr.json.stringify(r)));
    }, t.prototype.onError = function(r) {
      this._onError && this._onError(r);
    }, t.prototype.onCompleted = function(r) {
      this._onCompleted && this._onCompleted(r);
    }, t;
  }(Xn)
);
Pe.LoginObserver = U2;
var L2 = (
  /** @class */
  function(e) {
    Xt(t, e);
    function t(r) {
      var n = r === void 0 ? {} : r, i = n.onProtocolError, o = n.onError, a = n.onComplete, s = e.call(this) || this;
      return s._onProtocolError = i, s._onError = o, s._onComplete = a, s;
    }
    return t.prototype.onNext = function(r) {
      this.onError((0, cr.newError)("Received RECORD when resetting: received record is: " + cr.json.stringify(r), xt));
    }, t.prototype.onError = function(r) {
      r.code === xt && this._onProtocolError && this._onProtocolError(r.message), this._onError && this._onError(r);
    }, t.prototype.onCompleted = function(r) {
      this._onComplete && this._onComplete(r);
    }, t;
  }(Xn)
);
Pe.ResetObserver = L2;
var F2 = (
  /** @class */
  function(e) {
    Xt(t, e);
    function t(r) {
      var n = r.error, i = r.onError, o = e.call(this, { beforeError: i }) || this;
      return o.onError(n), o;
    }
    return t;
  }(cd)
);
Pe.FailedObserver = F2;
var B2 = (
  /** @class */
  function(e) {
    Xt(t, e);
    function t() {
      var r = e.call(this) || this;
      return e.prototype.markCompleted.call(r), r;
    }
    return t;
  }(cd)
);
Pe.CompletedObserver = B2;
var x2 = (
  /** @class */
  function(e) {
    Xt(t, e);
    function t(r) {
      var n = r.resultObserver, i = r.onProtocolError, o = r.onError, a = r.onCompleted, s = e.call(this) || this;
      return s._resultObserver = n, s._onError = o, s._onCompleted = a, s._records = [], s._onProtocolError = i, n.subscribe(s), s;
    }
    return t.prototype.onNext = function(r) {
      this._records.push(r);
    }, t.prototype.onError = function(r) {
      r.code === xt && this._onProtocolError && this._onProtocolError(r.message), this._onError && this._onError(r);
    }, t.prototype.onCompleted = function() {
      if (this._records !== null && this._records.length !== 1) {
        this.onError((0, cr.newError)("Illegal response from router. Received " + this._records.length + ` records but expected only one.
` + cr.json.stringify(this._records), xt));
        return;
      }
      this._onCompleted && this._onCompleted(py.default.ofRecord(this._records[0]));
    }, t;
  }(Xn)
);
Pe.ProcedureRouteObserver = x2;
var W2 = (
  /** @class */
  function(e) {
    Xt(t, e);
    function t(r) {
      var n = r === void 0 ? {} : r, i = n.onProtocolError, o = n.onError, a = n.onCompleted, s = e.call(this) || this;
      return s._onProtocolError = i, s._onError = o, s._onCompleted = a, s;
    }
    return t.prototype.onNext = function(r) {
      this.onError((0, cr.newError)("Received RECORD when resetting: received record is: " + cr.json.stringify(r), xt));
    }, t.prototype.onError = function(r) {
      r.code === xt && this._onProtocolError && this._onProtocolError(r.message), this._onError && this._onError(r);
    }, t.prototype.onCompleted = function(r) {
      this._onCompleted && this._onCompleted(py.default.ofMessageResponse(r));
    }, t;
  }(Xn)
);
Pe.RouteObserver = W2;
var dr = {
  READY_STREAMING: {
    // async start state
    onSuccess: function(e, t) {
      e._handleRunSuccess(
        t,
        function() {
          e._setState(dr.STREAMING);
        }
        // after run succeeded, async directly move to streaming
        // state
      );
    },
    onError: function(e, t) {
      e._handleError(t);
    },
    name: function() {
      return "READY_STREAMING";
    },
    pull: function() {
    }
  },
  READY: {
    // reactive start state
    onSuccess: function(e, t) {
      e._handleRunSuccess(
        t,
        function() {
          return e._handleStreaming();
        }
        // after run succeeded received, reactive shall start pulling
      );
    },
    onError: function(e, t) {
      e._handleError(t);
    },
    name: function() {
      return "READY";
    },
    pull: function(e) {
      return e._more();
    }
  },
  STREAMING: {
    onSuccess: function(e, t) {
      t.has_more ? e._handleHasMore(t) : e._handlePullSuccess(t);
    },
    onError: function(e, t) {
      e._handleError(t);
    },
    name: function() {
      return "STREAMING";
    },
    pull: function() {
    }
  },
  FAILED: {
    onError: function(e) {
    },
    name: function() {
      return "FAILED";
    },
    pull: function() {
    }
  },
  SUCCEEDED: {
    name: function() {
      return "SUCCEEDED";
    },
    pull: function() {
    }
  }
};
Object.defineProperty(Pr, "__esModule", { value: !0 });
Pr.assertImpersonatedUserIsEmpty = Pr.assertTxConfigIsEmpty = Pr.assertDatabaseIsEmpty = void 0;
var ld = ee;
function V2(e, t, r) {
  if (t === void 0 && (t = function() {
  }), e && !e.isEmpty()) {
    var n = (0, ld.newError)("Driver is connected to the database that does not support transaction configuration. Please upgrade to neo4j 3.5.0 or later in order to use this functionality");
    throw t(n.message), r.onError(n), n;
  }
}
Pr.assertTxConfigIsEmpty = V2;
function q2(e, t, r) {
  if (t === void 0 && (t = function() {
  }), e) {
    var n = (0, ld.newError)("Driver is connected to the database that does not support multiple databases. Please upgrade to neo4j 4.0.0 or later in order to use this functionality");
    throw t(n.message), r.onError(n), n;
  }
}
Pr.assertDatabaseIsEmpty = q2;
function H2(e, t, r) {
  if (t === void 0 && (t = function() {
  }), e) {
    var n = (0, ld.newError)("Driver is connected to the database that does not support user impersonation. Please upgrade to neo4j 4.4.0 or later in order to use this functionality. " + "Trying to impersonate ".concat(e, "."));
    throw t(n.message), r.onError(n), n;
  }
}
Pr.assertImpersonatedUserIsEmpty = H2;
var Ge = {}, Wt = {}, Gs = {}, Wa = {};
Object.defineProperty(Wa, "__esModule", { value: !0 });
Wa.identity = void 0;
function z2(e) {
  return e;
}
Wa.identity = z2;
var Y2 = d && d.__createBinding || (Object.create ? function(e, t, r, n) {
  n === void 0 && (n = r);
  var i = Object.getOwnPropertyDescriptor(t, r);
  (!i || ("get" in i ? !t.__esModule : i.writable || i.configurable)) && (i = { enumerable: !0, get: function() {
    return t[r];
  } }), Object.defineProperty(e, n, i);
} : function(e, t, r, n) {
  n === void 0 && (n = r), e[n] = t[r];
}), K2 = d && d.__setModuleDefault || (Object.create ? function(e, t) {
  Object.defineProperty(e, "default", { enumerable: !0, value: t });
} : function(e, t) {
  e.default = t;
}), G2 = d && d.__importStar || function(e) {
  if (e && e.__esModule)
    return e;
  var t = {};
  if (e != null)
    for (var r in e)
      r !== "default" && Object.prototype.hasOwnProperty.call(e, r) && Y2(t, e, r);
  return K2(t, e), t;
};
Object.defineProperty(Gs, "__esModule", { value: !0 });
Gs.functional = void 0;
Gs.functional = G2(Wa);
var it = {};
Object.defineProperty(it, "__esModule", { value: !0 });
it.verifyStructSize = it.Structure = void 0;
var my = ee, Z2 = my.error.PROTOCOL_ERROR, yy = (
  /** @class */
  function() {
    function e(t, r) {
      this.signature = t, this.fields = r;
    }
    return Object.defineProperty(e.prototype, "size", {
      get: function() {
        return this.fields.length;
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.toString = function() {
      for (var t = "", r = 0; r < this.fields.length; r++)
        r > 0 && (t += ", "), t += this.fields[r];
      return "Structure(" + this.signature + ", [" + t + "])";
    }, e;
  }()
);
it.Structure = yy;
function Q2(e, t, r) {
  if (t !== r)
    throw (0, my.newError)("Wrong struct size for ".concat(e, ", expected ").concat(t, " but was ").concat(r), Z2);
}
it.verifyStructSize = Q2;
it.default = yy;
Object.defineProperty(Wt, "__esModule", { value: !0 });
Wt.Unpacker = Wt.Packer = void 0;
var mi = Jn, by = Gs, gy = it, ke = ee, J2 = ke.error.PROTOCOL_ERROR, Oy = 128, wy = 144, Ey = 160, Sy = 176, Ty = 192, Py = 193, Iy = 194, Ay = 195, Ry = 200, Cy = 201, jy = 202, Ny = 203, $y = 208, My = 209, ky = 210, Dy = 212, Uy = 213, Ly = 214, Fy = 204, By = 205, xy = 206, Wy = 216, Vy = 217, qy = 218, Hy = 220, zy = 221, X2 = (
  /** @class */
  function() {
    function e(t) {
      this._ch = t, this._byteArraysSupported = !0;
    }
    return e.prototype.packable = function(t, r) {
      var n = this;
      r === void 0 && (r = by.functional.identity);
      try {
        t = r(t);
      } catch (a) {
        return function() {
          throw a;
        };
      }
      if (t === null)
        return function() {
          return n._ch.writeUInt8(Ty);
        };
      if (t === !0)
        return function() {
          return n._ch.writeUInt8(Ay);
        };
      if (t === !1)
        return function() {
          return n._ch.writeUInt8(Iy);
        };
      if (typeof t == "number")
        return function() {
          return n.packFloat(t);
        };
      if (typeof t == "string")
        return function() {
          return n.packString(t);
        };
      if (typeof t == "bigint")
        return function() {
          return n.packInteger((0, ke.int)(t));
        };
      if ((0, ke.isInt)(t))
        return function() {
          return n.packInteger(t);
        };
      if (t instanceof Int8Array)
        return function() {
          return n.packBytes(t);
        };
      if (t instanceof Array)
        return function() {
          n.packListHeader(t.length);
          for (var a = 0; a < t.length; a++)
            n.packable(t[a] === void 0 ? null : t[a], r)();
        };
      if (rF(t))
        return this.packableIterable(t, r);
      if (t instanceof gy.Structure) {
        for (var i = [], o = 0; o < t.fields.length; o++)
          i[o] = this.packable(t.fields[o], r);
        return function() {
          return n.packStruct(t.signature, i);
        };
      } else
        return typeof t == "object" ? function() {
          for (var a = Object.keys(t), s = 0, c = 0; c < a.length; c++)
            t[a[c]] !== void 0 && s++;
          n.packMapHeader(s);
          for (var c = 0; c < a.length; c++) {
            var u = a[c];
            t[u] !== void 0 && (n.packString(u), n.packable(t[u], r)());
          }
        } : this._nonPackableValue("Unable to pack the given value: ".concat(t));
    }, e.prototype.packableIterable = function(t, r) {
      try {
        var n = Array.from(t);
        return this.packable(n, r);
      } catch (i) {
        throw (0, ke.newError)("Cannot pack given iterable, ".concat(i.message, ": ").concat(t));
      }
    }, e.prototype.packStruct = function(t, r) {
      r = r || [], this.packStructHeader(r.length, t);
      for (var n = 0; n < r.length; n++)
        r[n]();
    }, e.prototype.packInteger = function(t) {
      var r = t.high, n = t.low;
      t.greaterThanOrEqual(-16) && t.lessThan(128) ? this._ch.writeInt8(n) : t.greaterThanOrEqual(-128) && t.lessThan(-16) ? (this._ch.writeUInt8(Ry), this._ch.writeInt8(n)) : t.greaterThanOrEqual(-32768) && t.lessThan(32768) ? (this._ch.writeUInt8(Cy), this._ch.writeInt16(n)) : t.greaterThanOrEqual(-2147483648) && t.lessThan(2147483648) ? (this._ch.writeUInt8(jy), this._ch.writeInt32(n)) : (this._ch.writeUInt8(Ny), this._ch.writeInt32(r), this._ch.writeInt32(n));
    }, e.prototype.packFloat = function(t) {
      this._ch.writeUInt8(Py), this._ch.writeFloat64(t);
    }, e.prototype.packString = function(t) {
      var r = mi.utf8.encode(t), n = r.length;
      if (n < 16)
        this._ch.writeUInt8(Oy | n), this._ch.writeBytes(r);
      else if (n < 256)
        this._ch.writeUInt8($y), this._ch.writeUInt8(n), this._ch.writeBytes(r);
      else if (n < 65536)
        this._ch.writeUInt8(My), this._ch.writeUInt8(n / 256 >> 0), this._ch.writeUInt8(n % 256), this._ch.writeBytes(r);
      else if (n < 4294967296)
        this._ch.writeUInt8(ky), this._ch.writeUInt8((n / 16777216 >> 0) % 256), this._ch.writeUInt8((n / 65536 >> 0) % 256), this._ch.writeUInt8((n / 256 >> 0) % 256), this._ch.writeUInt8(n % 256), this._ch.writeBytes(r);
      else
        throw (0, ke.newError)("UTF-8 strings of size " + n + " are not supported");
    }, e.prototype.packListHeader = function(t) {
      if (t < 16)
        this._ch.writeUInt8(wy | t);
      else if (t < 256)
        this._ch.writeUInt8(Dy), this._ch.writeUInt8(t);
      else if (t < 65536)
        this._ch.writeUInt8(Uy), this._ch.writeUInt8((t / 256 >> 0) % 256), this._ch.writeUInt8(t % 256);
      else if (t < 4294967296)
        this._ch.writeUInt8(Ly), this._ch.writeUInt8((t / 16777216 >> 0) % 256), this._ch.writeUInt8((t / 65536 >> 0) % 256), this._ch.writeUInt8((t / 256 >> 0) % 256), this._ch.writeUInt8(t % 256);
      else
        throw (0, ke.newError)("Lists of size " + t + " are not supported");
    }, e.prototype.packBytes = function(t) {
      if (this._byteArraysSupported) {
        this.packBytesHeader(t.length);
        for (var r = 0; r < t.length; r++)
          this._ch.writeInt8(t[r]);
      } else
        throw (0, ke.newError)("Byte arrays are not supported by the database this driver is connected to");
    }, e.prototype.packBytesHeader = function(t) {
      if (t < 256)
        this._ch.writeUInt8(Fy), this._ch.writeUInt8(t);
      else if (t < 65536)
        this._ch.writeUInt8(By), this._ch.writeUInt8((t / 256 >> 0) % 256), this._ch.writeUInt8(t % 256);
      else if (t < 4294967296)
        this._ch.writeUInt8(xy), this._ch.writeUInt8((t / 16777216 >> 0) % 256), this._ch.writeUInt8((t / 65536 >> 0) % 256), this._ch.writeUInt8((t / 256 >> 0) % 256), this._ch.writeUInt8(t % 256);
      else
        throw (0, ke.newError)("Byte arrays of size " + t + " are not supported");
    }, e.prototype.packMapHeader = function(t) {
      if (t < 16)
        this._ch.writeUInt8(Ey | t);
      else if (t < 256)
        this._ch.writeUInt8(Wy), this._ch.writeUInt8(t);
      else if (t < 65536)
        this._ch.writeUInt8(Vy), this._ch.writeUInt8(t / 256 >> 0), this._ch.writeUInt8(t % 256);
      else if (t < 4294967296)
        this._ch.writeUInt8(qy), this._ch.writeUInt8((t / 16777216 >> 0) % 256), this._ch.writeUInt8((t / 65536 >> 0) % 256), this._ch.writeUInt8((t / 256 >> 0) % 256), this._ch.writeUInt8(t % 256);
      else
        throw (0, ke.newError)("Maps of size " + t + " are not supported");
    }, e.prototype.packStructHeader = function(t, r) {
      if (t < 16)
        this._ch.writeUInt8(Sy | t), this._ch.writeUInt8(r);
      else if (t < 256)
        this._ch.writeUInt8(Hy), this._ch.writeUInt8(t), this._ch.writeUInt8(r);
      else if (t < 65536)
        this._ch.writeUInt8(zy), this._ch.writeUInt8(t / 256 >> 0), this._ch.writeUInt8(t % 256);
      else
        throw (0, ke.newError)("Structures of size " + t + " are not supported");
    }, e.prototype.disableByteArrays = function() {
      this._byteArraysSupported = !1;
    }, e.prototype._nonPackableValue = function(t) {
      return function() {
        throw (0, ke.newError)(t, J2);
      };
    }, e;
  }()
);
Wt.Packer = X2;
var eF = (
  /** @class */
  function() {
    function e(t, r) {
      t === void 0 && (t = !1), r === void 0 && (r = !1), this._disableLosslessIntegers = t, this._useBigInt = r;
    }
    return e.prototype.unpack = function(t, r) {
      r === void 0 && (r = by.functional.identity);
      var n = t.readUInt8(), i = n & 240, o = n & 15;
      if (n === Ty)
        return null;
      var a = this._unpackBoolean(n);
      if (a !== null)
        return a;
      var s = this._unpackNumberOrInteger(n, t);
      if (s !== null) {
        if ((0, ke.isInt)(s)) {
          if (this._useBigInt)
            return s.toBigInt();
          if (this._disableLosslessIntegers)
            return s.toNumberOrInfinity();
        }
        return s;
      }
      var c = this._unpackString(n, i, o, t);
      if (c !== null)
        return c;
      var u = this._unpackList(n, i, o, t, r);
      if (u !== null)
        return u;
      var l = this._unpackByteArray(n, t);
      if (l !== null)
        return l;
      var v = this._unpackMap(n, i, o, t, r);
      if (v !== null)
        return v;
      var y = this._unpackStruct(n, i, o, t, r);
      if (y !== null)
        return y;
      throw (0, ke.newError)("Unknown packed value with marker " + n.toString(16));
    }, e.prototype.unpackInteger = function(t) {
      var r = t.readUInt8(), n = this._unpackInteger(r, t);
      if (n == null)
        throw (0, ke.newError)("Unable to unpack integer value with marker " + r.toString(16));
      return n;
    }, e.prototype._unpackBoolean = function(t) {
      return t === Ay ? !0 : t === Iy ? !1 : null;
    }, e.prototype._unpackNumberOrInteger = function(t, r) {
      return t === Py ? r.readFloat64() : this._unpackInteger(t, r);
    }, e.prototype._unpackInteger = function(t, r) {
      if (t >= 0 && t < 128)
        return (0, ke.int)(t);
      if (t >= 240 && t < 256)
        return (0, ke.int)(t - 256);
      if (t === Ry)
        return (0, ke.int)(r.readInt8());
      if (t === Cy)
        return (0, ke.int)(r.readInt16());
      if (t === jy) {
        var n = r.readInt32();
        return (0, ke.int)(n);
      } else if (t === Ny) {
        var i = r.readInt32(), o = r.readInt32();
        return new ke.Integer(o, i);
      } else
        return null;
    }, e.prototype._unpackString = function(t, r, n, i) {
      return r === Oy ? mi.utf8.decode(i, n) : t === $y ? mi.utf8.decode(i, i.readUInt8()) : t === My ? mi.utf8.decode(i, i.readUInt16()) : t === ky ? mi.utf8.decode(i, i.readUInt32()) : null;
    }, e.prototype._unpackList = function(t, r, n, i, o) {
      return r === wy ? this._unpackListWithSize(n, i, o) : t === Dy ? this._unpackListWithSize(i.readUInt8(), i, o) : t === Uy ? this._unpackListWithSize(i.readUInt16(), i, o) : t === Ly ? this._unpackListWithSize(i.readUInt32(), i, o) : null;
    }, e.prototype._unpackListWithSize = function(t, r, n) {
      for (var i = [], o = 0; o < t; o++)
        i.push(this.unpack(r, n));
      return i;
    }, e.prototype._unpackByteArray = function(t, r) {
      return t === Fy ? this._unpackByteArrayWithSize(r.readUInt8(), r) : t === By ? this._unpackByteArrayWithSize(r.readUInt16(), r) : t === xy ? this._unpackByteArrayWithSize(r.readUInt32(), r) : null;
    }, e.prototype._unpackByteArrayWithSize = function(t, r) {
      for (var n = new Int8Array(t), i = 0; i < t; i++)
        n[i] = r.readInt8();
      return n;
    }, e.prototype._unpackMap = function(t, r, n, i, o) {
      return r === Ey ? this._unpackMapWithSize(n, i, o) : t === Wy ? this._unpackMapWithSize(i.readUInt8(), i, o) : t === Vy ? this._unpackMapWithSize(i.readUInt16(), i, o) : t === qy ? this._unpackMapWithSize(i.readUInt32(), i, o) : null;
    }, e.prototype._unpackMapWithSize = function(t, r, n) {
      for (var i = {}, o = 0; o < t; o++) {
        var a = this.unpack(r, n);
        i[a] = this.unpack(r, n);
      }
      return i;
    }, e.prototype._unpackStruct = function(t, r, n, i, o) {
      return r === Sy ? this._unpackStructWithSize(n, i, o) : t === Hy ? this._unpackStructWithSize(i.readUInt8(), i, o) : t === zy ? this._unpackStructWithSize(i.readUInt16(), i, o) : null;
    }, e.prototype._unpackStructWithSize = function(t, r, n) {
      for (var i = r.readUInt8(), o = new gy.Structure(i, []), a = 0; a < t; a++)
        o.fields.push(this.unpack(r, n));
      return n(o);
    }, e;
  }()
);
Wt.Unpacker = eF;
function rF(e) {
  return e == null ? !1 : typeof e[Symbol.iterator] == "function";
}
var gn = {}, Yy = d && d.__extends || function() {
  var e = function(t, r) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var o in i)
        Object.prototype.hasOwnProperty.call(i, o) && (n[o] = i[o]);
    }, e(t, r);
  };
  return function(t, r) {
    if (typeof r != "function" && r !== null)
      throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
    e(t, r);
    function n() {
      this.constructor = t;
    }
    t.prototype = r === null ? Object.create(r) : (n.prototype = r.prototype, new n());
  };
}(), tF = d && d.__createBinding || (Object.create ? function(e, t, r, n) {
  n === void 0 && (n = r);
  var i = Object.getOwnPropertyDescriptor(t, r);
  (!i || ("get" in i ? !t.__esModule : i.writable || i.configurable)) && (i = { enumerable: !0, get: function() {
    return t[r];
  } }), Object.defineProperty(e, n, i);
} : function(e, t, r, n) {
  n === void 0 && (n = r), e[n] = t[r];
}), nF = d && d.__setModuleDefault || (Object.create ? function(e, t) {
  Object.defineProperty(e, "default", { enumerable: !0, value: t });
} : function(e, t) {
  e.default = t;
}), iF = d && d.__importStar || function(e) {
  if (e && e.__esModule)
    return e;
  var t = {};
  if (e != null)
    for (var r in e)
      r !== "default" && Object.prototype.hasOwnProperty.call(e, r) && tF(t, e, r);
  return nF(t, e), t;
};
Object.defineProperty(gn, "__esModule", { value: !0 });
gn.Unpacker = gn.Packer = void 0;
var Ky = iF(Wt), oF = (
  /** @class */
  function(e) {
    Yy(t, e);
    function t() {
      return e !== null && e.apply(this, arguments) || this;
    }
    return t.prototype.disableByteArrays = function() {
      throw new Error("Bolt V2 should always support byte arrays");
    }, t;
  }(Ky.Packer)
);
gn.Packer = oF;
var aF = (
  /** @class */
  function(e) {
    Yy(t, e);
    function t(r, n) {
      return r === void 0 && (r = !1), n === void 0 && (n = !1), e.call(this, r, n) || this;
    }
    return t;
  }(Ky.Unpacker)
);
gn.Unpacker = aF;
var uF = d && d.__createBinding || (Object.create ? function(e, t, r, n) {
  n === void 0 && (n = r);
  var i = Object.getOwnPropertyDescriptor(t, r);
  (!i || ("get" in i ? !t.__esModule : i.writable || i.configurable)) && (i = { enumerable: !0, get: function() {
    return t[r];
  } }), Object.defineProperty(e, n, i);
} : function(e, t, r, n) {
  n === void 0 && (n = r), e[n] = t[r];
}), sF = d && d.__setModuleDefault || (Object.create ? function(e, t) {
  Object.defineProperty(e, "default", { enumerable: !0, value: t });
} : function(e, t) {
  e.default = t;
}), fd = d && d.__importStar || function(e) {
  if (e && e.__esModule)
    return e;
  var t = {};
  if (e != null)
    for (var r in e)
      r !== "default" && Object.prototype.hasOwnProperty.call(e, r) && uF(t, e, r);
  return sF(t, e), t;
};
Object.defineProperty(Ge, "__esModule", { value: !0 });
Ge.structure = Ge.v2 = Ge.v1 = void 0;
var cF = fd(Wt);
Ge.v1 = cF;
var Gy = fd(gn);
Ge.v2 = Gy;
var lF = fd(it);
Ge.structure = lF;
Ge.default = Gy;
var zr = {};
Object.defineProperty(zr, "__esModule", { value: !0 });
var Ze = ee, Zy = Ze.internal.constants, fF = Zy.ACCESS_MODE_READ, cu = Zy.FETCH_ALL, Wv = Ze.internal.util.assertString, dF = 1, hF = 15, Vv = 16, vF = 63, _F = 1, pF = 2, mF = 17, yF = 18, bF = 19, qv = 102, gF = 47, OF = 63, wF = "r", yi = -1, ei = (
  /** @class */
  function() {
    function e(t, r, n) {
      this.signature = t, this.fields = r, this.toString = n;
    }
    return e.init = function(t, r) {
      return new e(dF, [t, r], function() {
        return "INIT ".concat(t, " {...}");
      });
    }, e.run = function(t, r) {
      return new e(Vv, [t, r], function() {
        return "RUN ".concat(t, " ").concat(Ze.json.stringify(r));
      });
    }, e.pullAll = function() {
      return EF;
    }, e.reset = function() {
      return SF;
    }, e.hello = function(t, r, n, i) {
      n === void 0 && (n = null), i === void 0 && (i = null);
      var o = Object.assign({ user_agent: t }, r);
      return n && (o.routing = n), i && (o.patch_bolt = i), new e(_F, [o], function() {
        return "HELLO {user_agent: '".concat(t, "', ...}");
      });
    }, e.begin = function(t) {
      var r = t === void 0 ? {} : t, n = r.bookmarks, i = r.txConfig, o = r.database, a = r.mode, s = r.impersonatedUser, c = Hv(n, i, o, a, s);
      return new e(mF, [c], function() {
        return "BEGIN ".concat(Ze.json.stringify(c));
      });
    }, e.commit = function() {
      return TF;
    }, e.rollback = function() {
      return PF;
    }, e.runWithMetadata = function(t, r, n) {
      var i = n === void 0 ? {} : n, o = i.bookmarks, a = i.txConfig, s = i.database, c = i.mode, u = i.impersonatedUser, l = Hv(o, a, s, c, u);
      return new e(Vv, [t, r, l], function() {
        return "RUN ".concat(t, " ").concat(Ze.json.stringify(r), " ").concat(Ze.json.stringify(l));
      });
    }, e.goodbye = function() {
      return IF;
    }, e.pull = function(t) {
      var r = t === void 0 ? {} : t, n = r.stmtId, i = n === void 0 ? yi : n, o = r.n, a = o === void 0 ? cu : o, s = zv(i ?? yi, a || cu);
      return new e(OF, [s], function() {
        return "PULL ".concat(Ze.json.stringify(s));
      });
    }, e.discard = function(t) {
      var r = t === void 0 ? {} : t, n = r.stmtId, i = n === void 0 ? yi : n, o = r.n, a = o === void 0 ? cu : o, s = zv(i ?? yi, a || cu);
      return new e(gF, [s], function() {
        return "DISCARD ".concat(Ze.json.stringify(s));
      });
    }, e.route = function(t, r, n) {
      return t === void 0 && (t = {}), r === void 0 && (r = []), n === void 0 && (n = null), new e(qv, [t, r, n], function() {
        return "ROUTE ".concat(Ze.json.stringify(t), " ").concat(Ze.json.stringify(r), " ").concat(n);
      });
    }, e.routeV4x4 = function(t, r, n) {
      t === void 0 && (t = {}), r === void 0 && (r = []), n === void 0 && (n = {});
      var i = {};
      return n.databaseName && (i.db = n.databaseName), n.impersonatedUser && (i.imp_user = n.impersonatedUser), new e(qv, [t, r, i], function() {
        return "ROUTE ".concat(Ze.json.stringify(t), " ").concat(Ze.json.stringify(r), " ").concat(Ze.json.stringify(i));
      });
    }, e;
  }()
);
zr.default = ei;
function Hv(e, t, r, n, i) {
  var o = {};
  return e.isEmpty() || (o.bookmarks = e.values()), t.timeout !== null && (o.tx_timeout = t.timeout), t.metadata && (o.tx_metadata = t.metadata), r && (o.db = Wv(r, "database")), i && (o.imp_user = Wv(i, "impersonatedUser")), n === fF && (o.mode = wF), o;
}
function zv(e, t) {
  var r = { n: (0, Ze.int)(t) };
  return e !== yi && (r.qid = (0, Ze.int)(e)), r;
}
var EF = new ei(vF, [], function() {
  return "PULL_ALL";
}), SF = new ei(hF, [], function() {
  return "RESET";
}), TF = new ei(yF, [], function() {
  return "COMMIT";
}), PF = new ei(bF, [], function() {
  return "ROLLBACK";
}), IF = new ei(pF, [], function() {
  return "GOODBYE";
}), Zs = {}, Qe = {};
Object.defineProperty(Qe, "__esModule", { value: !0 });
Qe.TypeTransformer = void 0;
var AF = Ge, RF = ee, CF = RF.internal.objectUtil, jF = (
  /** @class */
  function() {
    function e(t) {
      this._transformers = t, this._transformersPerSignature = new Map(t.map(function(r) {
        return [r.signature, r];
      })), this.fromStructure = this.fromStructure.bind(this), this.toStructure = this.toStructure.bind(this), Object.freeze(this);
    }
    return e.prototype.fromStructure = function(t) {
      try {
        if (t instanceof AF.structure.Structure && this._transformersPerSignature.has(t.signature)) {
          var r = this._transformersPerSignature.get(t.signature).fromStructure;
          return r(t);
        }
        return t;
      } catch (n) {
        return CF.createBrokenObject(n);
      }
    }, e.prototype.toStructure = function(t) {
      var r = this._transformers.find(function(n) {
        var i = n.isTypeInstance;
        return i(t);
      });
      return r !== void 0 ? r.toStructure(t) : t;
    }, e;
  }()
);
Qe.default = jF;
var NF = (
  /** @class */
  function() {
    function e(t) {
      var r = t.signature, n = t.fromStructure, i = t.toStructure, o = t.isTypeInstance;
      this.signature = r, this.isTypeInstance = o, this.fromStructure = n, this.toStructure = i, Object.freeze(this);
    }
    return e.prototype.extendsWith = function(t) {
      var r = t.signature, n = t.fromStructure, i = t.toStructure, o = t.isTypeInstance;
      return new e({
        signature: r || this.signature,
        fromStructure: n || this.fromStructure,
        toStructure: i || this.toStructure,
        isTypeInstance: o || this.isTypeInstance
      });
    }, e;
  }()
);
Qe.TypeTransformer = NF;
var Qs = d && d.__read || function(e, t) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r)
    return e;
  var n = r.call(e), i, o = [], a;
  try {
    for (; (t === void 0 || t-- > 0) && !(i = n.next()).done; )
      o.push(i.value);
  } catch (s) {
    a = { error: s };
  } finally {
    try {
      i && !i.done && (r = n.return) && r.call(n);
    } finally {
      if (a)
        throw a.error;
    }
  }
  return o;
};
Object.defineProperty(Zs, "__esModule", { value: !0 });
var qe = ee, Js = Ge, Xs = Qe, ec = qe.error.PROTOCOL_ERROR, $F = 78, MF = 3, kF = 82, DF = 5, UF = 114, LF = 3, FF = 80, BF = 3;
function xF() {
  return new Xs.TypeTransformer({
    signature: $F,
    isTypeInstance: function(e) {
      return e instanceof qe.Node;
    },
    toStructure: function(e) {
      throw (0, qe.newError)("It is not allowed to pass nodes in query parameters, given: ".concat(e), ec);
    },
    fromStructure: function(e) {
      Js.structure.verifyStructSize("Node", MF, e.size);
      var t = Qs(e.fields, 3), r = t[0], n = t[1], i = t[2];
      return new qe.Node(r, n, i);
    }
  });
}
function WF() {
  return new Xs.TypeTransformer({
    signature: kF,
    isTypeInstance: function(e) {
      return e instanceof qe.Relationship;
    },
    toStructure: function(e) {
      throw (0, qe.newError)("It is not allowed to pass relationships in query parameters, given: ".concat(e), ec);
    },
    fromStructure: function(e) {
      Js.structure.verifyStructSize("Relationship", DF, e.size);
      var t = Qs(e.fields, 5), r = t[0], n = t[1], i = t[2], o = t[3], a = t[4];
      return new qe.Relationship(r, n, i, o, a);
    }
  });
}
function VF() {
  return new Xs.TypeTransformer({
    signature: UF,
    isTypeInstance: function(e) {
      return e instanceof qe.UnboundRelationship;
    },
    toStructure: function(e) {
      throw (0, qe.newError)("It is not allowed to pass unbound relationships in query parameters, given: ".concat(e), ec);
    },
    fromStructure: function(e) {
      Js.structure.verifyStructSize("UnboundRelationship", LF, e.size);
      var t = Qs(e.fields, 3), r = t[0], n = t[1], i = t[2];
      return new qe.UnboundRelationship(r, n, i);
    }
  });
}
function qF() {
  return new Xs.TypeTransformer({
    signature: FF,
    isTypeInstance: function(e) {
      return e instanceof qe.Path;
    },
    toStructure: function(e) {
      throw (0, qe.newError)("It is not allowed to pass paths in query parameters, given: ".concat(e), ec);
    },
    fromStructure: function(e) {
      Js.structure.verifyStructSize("Path", BF, e.size);
      for (var t = Qs(e.fields, 3), r = t[0], n = t[1], i = t[2], o = [], a = r[0], s = 0; s < i.length; s += 2) {
        var c = r[i[s + 1]], u = (0, qe.toNumber)(i[s]), l = void 0;
        u > 0 ? (l = n[u - 1], l instanceof qe.UnboundRelationship && (n[u - 1] = l = l.bindTo(a, c))) : (l = n[-u - 1], l instanceof qe.UnboundRelationship && (n[-u - 1] = l = l.bindTo(c, a))), o.push(new qe.PathSegment(a, l, c)), a = c;
      }
      return new qe.Path(r[0], r[r.length - 1], o);
    }
  });
}
Zs.default = {
  createNodeTransformer: xF,
  createRelationshipTransformer: WF,
  createUnboundRelationshipTransformer: VF,
  createPathTransformer: qF
};
var dd = d && d.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(zs, "__esModule", { value: !0 });
var Ml = Pr, kl = Ge, lu = dd(zr), Dl = Pe, rc = ee, HF = dd(Zs), zF = dd(Qe), Yv = rc.internal.bookmarks.Bookmarks, Qy = rc.internal.constants, Kv = Qy.ACCESS_MODE_WRITE, YF = Qy.BOLT_PROTOCOL_V1;
rc.internal.logger.Logger;
var Gv = rc.internal.txConfig.TxConfig, KF = (
  /** @class */
  function() {
    function e(t, r, n, i, o, a) {
      var s = n === void 0 ? {} : n, c = s.disableLosslessIntegers, u = s.useBigInt;
      i === void 0 && (i = function() {
        return null;
      }), this._server = t || {}, this._chunker = r, this._packer = this._createPacker(r), this._unpacker = this._createUnpacker(c, u), this._responseHandler = i(this), this._log = o, this._onProtocolError = a, this._fatalError = null, this._lastMessageSignature = null, this._config = { disableLosslessIntegers: c, useBigInt: u };
    }
    return Object.defineProperty(e.prototype, "transformer", {
      get: function() {
        var t = this;
        return this._transformer === void 0 && (this._transformer = new zF.default(Object.values(HF.default).map(function(r) {
          return r(t._config, t._log);
        }))), this._transformer;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "version", {
      /**
       * Returns the numerical version identifier for this protocol
       */
      get: function() {
        return YF;
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.packer = function() {
      return this._packer;
    }, e.prototype.packable = function(t) {
      return this._packer.packable(t, this.transformer.toStructure);
    }, e.prototype.unpacker = function() {
      return this._unpacker;
    }, e.prototype.unpack = function(t) {
      return this._unpacker.unpack(t, this.transformer.fromStructure);
    }, e.prototype.transformMetadata = function(t) {
      return t;
    }, e.prototype.initialize = function(t) {
      var r = this, n = t === void 0 ? {} : t, i = n.userAgent, o = n.authToken, a = n.onError, s = n.onComplete, c = new Dl.LoginObserver({
        onError: function(u) {
          return r._onLoginError(u, a);
        },
        onCompleted: function(u) {
          return r._onLoginCompleted(u, s);
        }
      });
      return this.write(lu.default.init(i, o), c, !0), c;
    }, e.prototype.prepareToClose = function() {
    }, e.prototype.beginTransaction = function(t) {
      var r = t === void 0 ? {} : t, n = r.bookmarks, i = r.txConfig, o = r.database, a = r.mode, s = r.impersonatedUser, c = r.beforeError, u = r.afterError, l = r.beforeComplete, v = r.afterComplete;
      return this.run("BEGIN", n ? n.asBeginTransactionParameters() : {}, {
        bookmarks: n,
        txConfig: i,
        database: o,
        mode: a,
        impersonatedUser: s,
        beforeError: c,
        afterError: u,
        beforeComplete: l,
        afterComplete: v,
        flush: !1
      });
    }, e.prototype.commitTransaction = function(t) {
      var r = t === void 0 ? {} : t, n = r.beforeError, i = r.afterError, o = r.beforeComplete, a = r.afterComplete;
      return this.run("COMMIT", {}, {
        bookmarks: Yv.empty(),
        txConfig: Gv.empty(),
        mode: Kv,
        beforeError: n,
        afterError: i,
        beforeComplete: o,
        afterComplete: a
      });
    }, e.prototype.rollbackTransaction = function(t) {
      var r = t === void 0 ? {} : t, n = r.beforeError, i = r.afterError, o = r.beforeComplete, a = r.afterComplete;
      return this.run("ROLLBACK", {}, {
        bookmarks: Yv.empty(),
        txConfig: Gv.empty(),
        mode: Kv,
        beforeError: n,
        afterError: i,
        beforeComplete: o,
        afterComplete: a
      });
    }, e.prototype.run = function(t, r, n) {
      var i = n === void 0 ? {} : n;
      i.bookmarks;
      var o = i.txConfig, a = i.database;
      i.mode;
      var s = i.impersonatedUser, c = i.beforeKeys, u = i.afterKeys, l = i.beforeError, v = i.afterError, y = i.beforeComplete, g = i.afterComplete, E = i.flush, S = E === void 0 ? !0 : E, C = i.highRecordWatermark, R = C === void 0 ? Number.MAX_VALUE : C, $ = i.lowRecordWatermark, U = $ === void 0 ? Number.MAX_VALUE : $, D = new Dl.ResultStreamObserver({
        server: this._server,
        beforeKeys: c,
        afterKeys: u,
        beforeError: l,
        afterError: v,
        beforeComplete: y,
        afterComplete: g,
        highRecordWatermark: R,
        lowRecordWatermark: U
      });
      return (0, Ml.assertTxConfigIsEmpty)(o, this._onProtocolError, D), (0, Ml.assertDatabaseIsEmpty)(a, this._onProtocolError, D), (0, Ml.assertImpersonatedUserIsEmpty)(s, this._onProtocolError, D), this.write(lu.default.run(t, r), D, !1), this.write(lu.default.pullAll(), D, S), D;
    }, Object.defineProperty(e.prototype, "currentFailure", {
      get: function() {
        return this._responseHandler.currentFailure;
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.reset = function(t) {
      var r = t === void 0 ? {} : t, n = r.onError, i = r.onComplete, o = new Dl.ResetObserver({
        onProtocolError: this._onProtocolError,
        onError: n,
        onComplete: i
      });
      return this.write(lu.default.reset(), o, !0), o;
    }, e.prototype._createPacker = function(t) {
      return new kl.v1.Packer(t);
    }, e.prototype._createUnpacker = function(t, r) {
      return new kl.v1.Unpacker(t, r);
    }, e.prototype.write = function(t, r, n) {
      var i = this.queueObserverIfProtocolIsNotBroken(r);
      if (i) {
        this._log.isDebugEnabled() && this._log.debug("C: ".concat(t)), this._lastMessageSignature = t.signature;
        var o = new kl.structure.Structure(t.signature, t.fields);
        this.packable(o)(), this._chunker.messageBoundary(), n && this._chunker.flush();
      }
    }, e.prototype.isLastMessageLogin = function() {
      return this._lastMessageSignature === 1;
    }, e.prototype.isLastMessageReset = function() {
      return this._lastMessageSignature === 15;
    }, e.prototype.notifyFatalError = function(t) {
      return this._fatalError = t, this._responseHandler._notifyErrorToObservers(t);
    }, e.prototype.updateCurrentObserver = function() {
      return this._responseHandler._updateCurrentObserver();
    }, e.prototype.hasOngoingObservableRequests = function() {
      return this._responseHandler.hasOngoingObservableRequests();
    }, e.prototype.queueObserverIfProtocolIsNotBroken = function(t) {
      return this.isBroken() ? (this.notifyFatalErrorToObserver(t), !1) : this._responseHandler._queueObserver(t);
    }, e.prototype.isBroken = function() {
      return !!this._fatalError;
    }, e.prototype.notifyFatalErrorToObserver = function(t) {
      t && t.onError && t.onError(this._fatalError);
    }, e.prototype.resetFailure = function() {
      this._responseHandler._resetFailure();
    }, e.prototype._onLoginCompleted = function(t, r) {
      if (t) {
        var n = t.server;
        this._server.version || (this._server.version = n);
      }
      r && r(t);
    }, e.prototype._onLoginError = function(t, r) {
      this._onProtocolError(t.message), r && r(t);
    }, e;
  }()
);
zs.default = KF;
var tc = {}, nc = {}, xr = {};
Object.defineProperty(xr, "__esModule", { value: !0 });
xr.epochSecondAndNanoToLocalDateTime = xr.nanoOfDayToLocalTime = xr.epochDayToDate = void 0;
var $t = ee, yt = $t.internal.temporalUtil, GF = yt.DAYS_0000_TO_1970, Ul = yt.DAYS_PER_400_YEAR_CYCLE, Zv = yt.NANOS_PER_HOUR, Qv = yt.NANOS_PER_MINUTE, df = yt.NANOS_PER_SECOND, Jv = yt.SECONDS_PER_DAY, ZF = yt.floorDiv, QF = yt.floorMod;
function Jy(e) {
  e = (0, $t.int)(e);
  var t = e.add(GF).subtract(60), r = (0, $t.int)(0);
  if (t.lessThan(0)) {
    var n = t.add(1).div(Ul).subtract(1);
    r = n.multiply(400), t = t.add(n.multiply(-Ul));
  }
  var i = t.multiply(400).add(591).div(Ul), o = t.subtract(i.multiply(365).add(i.div(4)).subtract(i.div(100)).add(i.div(400)));
  o.lessThan(0) && (i = i.subtract(1), o = t.subtract(i.multiply(365).add(i.div(4)).subtract(i.div(100)).add(i.div(400)))), i = i.add(r);
  var a = o, s = a.multiply(5).add(2).div(153), c = s.add(2).modulo(12).add(1), u = a.subtract(s.multiply(306).add(5).div(10)).add(1);
  return i = i.add(s.div(10)), new $t.Date(i, c, u);
}
xr.epochDayToDate = Jy;
function Xy(e) {
  e = (0, $t.int)(e);
  var t = e.div(Zv);
  e = e.subtract(t.multiply(Zv));
  var r = e.div(Qv);
  e = e.subtract(r.multiply(Qv));
  var n = e.div(df), i = e.subtract(n.multiply(df));
  return new $t.LocalTime(t, r, n, i);
}
xr.nanoOfDayToLocalTime = Xy;
function JF(e, t) {
  var r = ZF(e, Jv), n = QF(e, Jv), i = n.multiply(df).add(t), o = Jy(r), a = Xy(i);
  return new $t.LocalDateTime(o.year, o.month, o.day, a.hour, a.minute, a.second, a.nanosecond);
}
xr.epochSecondAndNanoToLocalDateTime = JF;
var Du = d && d.__assign || function() {
  return Du = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var i in t)
        Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
    }
    return e;
  }, Du.apply(this, arguments);
}, Yr = d && d.__read || function(e, t) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r)
    return e;
  var n = r.call(e), i, o = [], a;
  try {
    for (; (t === void 0 || t-- > 0) && !(i = n.next()).done; )
      o.push(i.value);
  } catch (s) {
    a = { error: s };
  } finally {
    try {
      i && !i.done && (r = n.return) && r.call(n);
    } finally {
      if (a)
        throw a.error;
    }
  }
  return o;
}, XF = d && d.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(nc, "__esModule", { value: !0 });
var be = ee, Ve = Ge, Kr = Qe, ri = xr, eB = XF(Zs), hd = be.internal.temporalUtil, rB = hd.dateToEpochDay, vd = hd.localDateTimeToEpochSecond, eb = hd.localTimeToNanoOfDay, Xv = 88, tB = 3, e_ = 89, nB = 4, r_ = 69, iB = 4, t_ = 116, oB = 1, n_ = 84, aB = 2, i_ = 68, uB = 1, o_ = 100, sB = 2, a_ = 70, cB = 3, u_ = 102, lB = 3;
function fB() {
  return new Kr.TypeTransformer({
    signature: Xv,
    isTypeInstance: function(e) {
      return (0, be.isPoint)(e) && (e.z === null || e.z === void 0);
    },
    toStructure: function(e) {
      return new Ve.structure.Structure(Xv, [
        (0, be.int)(e.srid),
        e.x,
        e.y
      ]);
    },
    fromStructure: function(e) {
      Ve.structure.verifyStructSize("Point2D", tB, e.size);
      var t = Yr(e.fields, 3), r = t[0], n = t[1], i = t[2];
      return new be.Point(
        r,
        n,
        i,
        void 0
        // z
      );
    }
  });
}
function dB() {
  return new Kr.TypeTransformer({
    signature: e_,
    isTypeInstance: function(e) {
      return (0, be.isPoint)(e) && e.z !== null && e.z !== void 0;
    },
    toStructure: function(e) {
      return new Ve.structure.Structure(e_, [
        (0, be.int)(e.srid),
        e.x,
        e.y,
        e.z
      ]);
    },
    fromStructure: function(e) {
      Ve.structure.verifyStructSize("Point3D", nB, e.size);
      var t = Yr(e.fields, 4), r = t[0], n = t[1], i = t[2], o = t[3];
      return new be.Point(r, n, i, o);
    }
  });
}
function hB() {
  return new Kr.TypeTransformer({
    signature: r_,
    isTypeInstance: be.isDuration,
    toStructure: function(e) {
      var t = (0, be.int)(e.months), r = (0, be.int)(e.days), n = (0, be.int)(e.seconds), i = (0, be.int)(e.nanoseconds);
      return new Ve.structure.Structure(r_, [t, r, n, i]);
    },
    fromStructure: function(e) {
      Ve.structure.verifyStructSize("Duration", iB, e.size);
      var t = Yr(e.fields, 4), r = t[0], n = t[1], i = t[2], o = t[3];
      return new be.Duration(r, n, i, o);
    }
  });
}
function vB(e) {
  var t = e.disableLosslessIntegers, r = e.useBigInt;
  return new Kr.TypeTransformer({
    signature: t_,
    isTypeInstance: be.isLocalTime,
    toStructure: function(n) {
      var i = eb(n.hour, n.minute, n.second, n.nanosecond);
      return new Ve.structure.Structure(t_, [i]);
    },
    fromStructure: function(n) {
      Ve.structure.verifyStructSize("LocalTime", oB, n.size);
      var i = Yr(n.fields, 1), o = i[0], a = (0, ri.nanoOfDayToLocalTime)(o);
      return ti(a, t, r);
    }
  });
}
function _B(e) {
  var t = e.disableLosslessIntegers, r = e.useBigInt;
  return new Kr.TypeTransformer({
    signature: n_,
    isTypeInstance: be.isTime,
    toStructure: function(n) {
      var i = eb(n.hour, n.minute, n.second, n.nanosecond), o = (0, be.int)(n.timeZoneOffsetSeconds);
      return new Ve.structure.Structure(n_, [i, o]);
    },
    fromStructure: function(n) {
      Ve.structure.verifyStructSize("Time", aB, n.size);
      var i = Yr(n.fields, 2), o = i[0], a = i[1], s = (0, ri.nanoOfDayToLocalTime)(o), c = new be.Time(s.hour, s.minute, s.second, s.nanosecond, a);
      return ti(c, t, r);
    }
  });
}
function pB(e) {
  var t = e.disableLosslessIntegers, r = e.useBigInt;
  return new Kr.TypeTransformer({
    signature: i_,
    isTypeInstance: be.isDate,
    toStructure: function(n) {
      var i = rB(n.year, n.month, n.day);
      return new Ve.structure.Structure(i_, [i]);
    },
    fromStructure: function(n) {
      Ve.structure.verifyStructSize("Date", uB, n.size);
      var i = Yr(n.fields, 1), o = i[0], a = (0, ri.epochDayToDate)(o);
      return ti(a, t, r);
    }
  });
}
function mB(e) {
  var t = e.disableLosslessIntegers, r = e.useBigInt;
  return new Kr.TypeTransformer({
    signature: o_,
    isTypeInstance: be.isLocalDateTime,
    toStructure: function(n) {
      var i = vd(n.year, n.month, n.day, n.hour, n.minute, n.second, n.nanosecond), o = (0, be.int)(n.nanosecond);
      return new Ve.structure.Structure(o_, [i, o]);
    },
    fromStructure: function(n) {
      Ve.structure.verifyStructSize("LocalDateTime", sB, n.size);
      var i = Yr(n.fields, 2), o = i[0], a = i[1], s = (0, ri.epochSecondAndNanoToLocalDateTime)(o, a);
      return ti(s, t, r);
    }
  });
}
function yB(e) {
  var t = e.disableLosslessIntegers, r = e.useBigInt;
  return new Kr.TypeTransformer({
    signature: u_,
    isTypeInstance: function(n) {
      return (0, be.isDateTime)(n) && n.timeZoneId != null;
    },
    toStructure: function(n) {
      var i = vd(n.year, n.month, n.day, n.hour, n.minute, n.second, n.nanosecond), o = (0, be.int)(n.nanosecond), a = n.timeZoneId;
      return new Ve.structure.Structure(u_, [i, o, a]);
    },
    fromStructure: function(n) {
      Ve.structure.verifyStructSize("DateTimeWithZoneId", lB, n.size);
      var i = Yr(n.fields, 3), o = i[0], a = i[1], s = i[2], c = (0, ri.epochSecondAndNanoToLocalDateTime)(o, a), u = new be.DateTime(c.year, c.month, c.day, c.hour, c.minute, c.second, c.nanosecond, null, s);
      return ti(u, t, r);
    }
  });
}
function bB(e) {
  var t = e.disableLosslessIntegers, r = e.useBigInt;
  return new Kr.TypeTransformer({
    signature: a_,
    isTypeInstance: function(n) {
      return (0, be.isDateTime)(n) && n.timeZoneId == null;
    },
    toStructure: function(n) {
      var i = vd(n.year, n.month, n.day, n.hour, n.minute, n.second, n.nanosecond), o = (0, be.int)(n.nanosecond), a = (0, be.int)(n.timeZoneOffsetSeconds);
      return new Ve.structure.Structure(a_, [i, o, a]);
    },
    fromStructure: function(n) {
      Ve.structure.verifyStructSize("DateTimeWithZoneOffset", cB, n.size);
      var i = Yr(n.fields, 3), o = i[0], a = i[1], s = i[2], c = (0, ri.epochSecondAndNanoToLocalDateTime)(o, a), u = new be.DateTime(c.year, c.month, c.day, c.hour, c.minute, c.second, c.nanosecond, s, null);
      return ti(u, t, r);
    }
  });
}
function ti(e, t, r) {
  if (!t && !r)
    return e;
  var n = function(s) {
    return r ? s.toBigInt() : s.toNumberOrInfinity();
  }, i = Object.create(Object.getPrototypeOf(e));
  for (var o in e)
    if (Object.prototype.hasOwnProperty.call(e, o) === !0) {
      var a = e[o];
      i[o] = (0, be.isInt)(a) ? n(a) : a;
    }
  return Object.freeze(i), i;
}
nc.default = Du(Du({}, eB.default), { createPoint2DTransformer: fB, createPoint3DTransformer: dB, createDurationTransformer: hB, createLocalTimeTransformer: vB, createTimeTransformer: _B, createDateTransformer: pB, createLocalDateTimeTransformer: mB, createDateTimeWithZoneIdTransformer: yB, createDateTimeWithOffsetTransformer: bB });
var gB = d && d.__extends || function() {
  var e = function(t, r) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var o in i)
        Object.prototype.hasOwnProperty.call(i, o) && (n[o] = i[o]);
    }, e(t, r);
  };
  return function(t, r) {
    if (typeof r != "function" && r !== null)
      throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
    e(t, r);
    function n() {
      this.constructor = t;
    }
    t.prototype = r === null ? Object.create(r) : (n.prototype = r.prototype, new n());
  };
}(), ic = d && d.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(tc, "__esModule", { value: !0 });
var OB = ic(zs), s_ = ic(Ge), wB = ee, EB = ic(nc), SB = ic(Qe), TB = wB.internal.constants.BOLT_PROTOCOL_V2, PB = (
  /** @class */
  function(e) {
    gB(t, e);
    function t() {
      return e !== null && e.apply(this, arguments) || this;
    }
    return t.prototype._createPacker = function(r) {
      return new s_.default.Packer(r);
    }, t.prototype._createUnpacker = function(r, n) {
      return new s_.default.Unpacker(r, n);
    }, Object.defineProperty(t.prototype, "transformer", {
      get: function() {
        var r = this;
        return this._transformer === void 0 && (this._transformer = new SB.default(Object.values(EB.default).map(function(n) {
          return n(r._config, r._log);
        }))), this._transformer;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t.prototype, "version", {
      get: function() {
        return TB;
      },
      enumerable: !1,
      configurable: !0
    }), t;
  }(OB.default)
);
tc.default = PB;
var oc = {}, ac = {}, hf = d && d.__assign || function() {
  return hf = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var i in t)
        Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
    }
    return e;
  }, hf.apply(this, arguments);
}, IB = d && d.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(ac, "__esModule", { value: !0 });
var AB = IB(nc);
ac.default = hf({}, AB.default);
var RB = d && d.__extends || function() {
  var e = function(t, r) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var o in i)
        Object.prototype.hasOwnProperty.call(i, o) && (n[o] = i[o]);
    }, e(t, r);
  };
  return function(t, r) {
    if (typeof r != "function" && r !== null)
      throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
    e(t, r);
    function n() {
      this.constructor = t;
    }
    t.prototype = r === null ? Object.create(r) : (n.prototype = r.prototype, new n());
  };
}(), Uu = d && d.__assign || function() {
  return Uu = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var i in t)
        Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
    }
    return e;
  }, Uu.apply(this, arguments);
}, uc = d && d.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(oc, "__esModule", { value: !0 });
var CB = uc(tc), Tt = uc(zr), fu = Pr, Rt = Pe, jB = uc(ac), NB = uc(Qe), _d = ee;
_d.internal.bookmarks.Bookmarks;
var $B = _d.internal.constants.BOLT_PROTOCOL_V3, MB = _d.internal.txConfig.TxConfig, rb = "context", kB = "CALL dbms.cluster.routing.getRoutingTable($".concat(rb, ")"), DB = new Rt.StreamObserver(), UB = (
  /** @class */
  function(e) {
    RB(t, e);
    function t() {
      return e !== null && e.apply(this, arguments) || this;
    }
    return Object.defineProperty(t.prototype, "version", {
      get: function() {
        return $B;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t.prototype, "transformer", {
      get: function() {
        var r = this;
        return this._transformer === void 0 && (this._transformer = new NB.default(Object.values(jB.default).map(function(n) {
          return n(r._config, r._log);
        }))), this._transformer;
      },
      enumerable: !1,
      configurable: !0
    }), t.prototype.transformMetadata = function(r) {
      return "t_first" in r && (r.result_available_after = r.t_first, delete r.t_first), "t_last" in r && (r.result_consumed_after = r.t_last, delete r.t_last), r;
    }, t.prototype.initialize = function(r) {
      var n = this, i = r === void 0 ? {} : r, o = i.userAgent, a = i.authToken, s = i.onError, c = i.onComplete, u = new Rt.LoginObserver({
        onError: function(l) {
          return n._onLoginError(l, s);
        },
        onCompleted: function(l) {
          return n._onLoginCompleted(l, c);
        }
      });
      return this.write(Tt.default.hello(o, a), u, !0), u;
    }, t.prototype.prepareToClose = function() {
      this.write(Tt.default.goodbye(), DB, !0);
    }, t.prototype.beginTransaction = function(r) {
      var n = r === void 0 ? {} : r, i = n.bookmarks, o = n.txConfig, a = n.database, s = n.impersonatedUser, c = n.mode, u = n.beforeError, l = n.afterError, v = n.beforeComplete, y = n.afterComplete, g = new Rt.ResultStreamObserver({
        server: this._server,
        beforeError: u,
        afterError: l,
        beforeComplete: v,
        afterComplete: y
      });
      return g.prepareToHandleSingleResponse(), (0, fu.assertDatabaseIsEmpty)(a, this._onProtocolError, g), (0, fu.assertImpersonatedUserIsEmpty)(s, this._onProtocolError, g), this.write(Tt.default.begin({ bookmarks: i, txConfig: o, mode: c }), g, !0), g;
    }, t.prototype.commitTransaction = function(r) {
      var n = r === void 0 ? {} : r, i = n.beforeError, o = n.afterError, a = n.beforeComplete, s = n.afterComplete, c = new Rt.ResultStreamObserver({
        server: this._server,
        beforeError: i,
        afterError: o,
        beforeComplete: a,
        afterComplete: s
      });
      return c.prepareToHandleSingleResponse(), this.write(Tt.default.commit(), c, !0), c;
    }, t.prototype.rollbackTransaction = function(r) {
      var n = r === void 0 ? {} : r, i = n.beforeError, o = n.afterError, a = n.beforeComplete, s = n.afterComplete, c = new Rt.ResultStreamObserver({
        server: this._server,
        beforeError: i,
        afterError: o,
        beforeComplete: a,
        afterComplete: s
      });
      return c.prepareToHandleSingleResponse(), this.write(Tt.default.rollback(), c, !0), c;
    }, t.prototype.run = function(r, n, i) {
      var o = i === void 0 ? {} : i, a = o.bookmarks, s = o.txConfig, c = o.database, u = o.impersonatedUser, l = o.mode, v = o.beforeKeys, y = o.afterKeys, g = o.beforeError, E = o.afterError, S = o.beforeComplete, C = o.afterComplete, R = o.flush, $ = R === void 0 ? !0 : R, U = o.highRecordWatermark, D = U === void 0 ? Number.MAX_VALUE : U, F = o.lowRecordWatermark, K = F === void 0 ? Number.MAX_VALUE : F, X = new Rt.ResultStreamObserver({
        server: this._server,
        beforeKeys: v,
        afterKeys: y,
        beforeError: g,
        afterError: E,
        beforeComplete: S,
        afterComplete: C,
        highRecordWatermark: D,
        lowRecordWatermark: K
      });
      return (0, fu.assertDatabaseIsEmpty)(c, this._onProtocolError, X), (0, fu.assertImpersonatedUserIsEmpty)(u, this._onProtocolError, X), this.write(Tt.default.runWithMetadata(r, n, {
        bookmarks: a,
        txConfig: s,
        mode: l
      }), X, !1), this.write(Tt.default.pullAll(), X, $), X;
    }, t.prototype.requestRoutingInformation = function(r) {
      var n, i = r.routingContext, o = i === void 0 ? {} : i, a = r.sessionContext, s = a === void 0 ? {} : a, c = r.onError, u = r.onCompleted, l = this.run(kB, (n = {}, n[rb] = o, n), Uu(Uu({}, s), { txConfig: MB.empty() }));
      return new Rt.ProcedureRouteObserver({
        resultObserver: l,
        onProtocolError: this._onProtocolError,
        onError: c,
        onCompleted: u
      });
    }, t;
  }(CB.default)
);
oc.default = UB;
var sc = {}, cc = {}, vf = d && d.__assign || function() {
  return vf = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var i in t)
        Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
    }
    return e;
  }, vf.apply(this, arguments);
}, LB = d && d.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(cc, "__esModule", { value: !0 });
var FB = LB(ac);
cc.default = vf({}, FB.default);
var BB = d && d.__extends || function() {
  var e = function(t, r) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var o in i)
        Object.prototype.hasOwnProperty.call(i, o) && (n[o] = i[o]);
    }, e(t, r);
  };
  return function(t, r) {
    if (typeof r != "function" && r !== null)
      throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
    e(t, r);
    function n() {
      this.constructor = t;
    }
    t.prototype = r === null ? Object.create(r) : (n.prototype = r.prototype, new n());
  };
}(), Lu = d && d.__assign || function() {
  return Lu = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var i in t)
        Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
    }
    return e;
  }, Lu.apply(this, arguments);
}, lc = d && d.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(sc, "__esModule", { value: !0 });
var xB = lc(oc), hi = lc(zr), c_ = Pr, Ll = Pe, WB = lc(cc), VB = lc(Qe), pd = ee;
pd.internal.bookmarks.Bookmarks;
var tb = pd.internal.constants, qB = tb.BOLT_PROTOCOL_V4_0, HB = tb.FETCH_ALL, zB = pd.internal.txConfig.TxConfig, nb = "context", ib = "database", YB = "CALL dbms.routing.getRoutingTable($".concat(nb, ", $").concat(ib, ")"), KB = (
  /** @class */
  function(e) {
    BB(t, e);
    function t() {
      return e !== null && e.apply(this, arguments) || this;
    }
    return Object.defineProperty(t.prototype, "version", {
      get: function() {
        return qB;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t.prototype, "transformer", {
      get: function() {
        var r = this;
        return this._transformer === void 0 && (this._transformer = new VB.default(Object.values(WB.default).map(function(n) {
          return n(r._config, r._log);
        }))), this._transformer;
      },
      enumerable: !1,
      configurable: !0
    }), t.prototype.beginTransaction = function(r) {
      var n = r === void 0 ? {} : r, i = n.bookmarks, o = n.txConfig, a = n.database, s = n.impersonatedUser, c = n.mode, u = n.beforeError, l = n.afterError, v = n.beforeComplete, y = n.afterComplete, g = new Ll.ResultStreamObserver({
        server: this._server,
        beforeError: u,
        afterError: l,
        beforeComplete: v,
        afterComplete: y
      });
      return g.prepareToHandleSingleResponse(), (0, c_.assertImpersonatedUserIsEmpty)(s, this._onProtocolError, g), this.write(hi.default.begin({ bookmarks: i, txConfig: o, database: a, mode: c }), g, !0), g;
    }, t.prototype.run = function(r, n, i) {
      var o = i === void 0 ? {} : i, a = o.bookmarks, s = o.txConfig, c = o.database, u = o.impersonatedUser, l = o.mode, v = o.beforeKeys, y = o.afterKeys, g = o.beforeError, E = o.afterError, S = o.beforeComplete, C = o.afterComplete, R = o.flush, $ = R === void 0 ? !0 : R, U = o.reactive, D = U === void 0 ? !1 : U, F = o.fetchSize, K = F === void 0 ? HB : F, X = o.highRecordWatermark, oe = X === void 0 ? Number.MAX_VALUE : X, de = o.lowRecordWatermark, Ie = de === void 0 ? Number.MAX_VALUE : de, ge = new Ll.ResultStreamObserver({
        server: this._server,
        reactive: D,
        fetchSize: K,
        moreFunction: this._requestMore.bind(this),
        discardFunction: this._requestDiscard.bind(this),
        beforeKeys: v,
        afterKeys: y,
        beforeError: g,
        afterError: E,
        beforeComplete: S,
        afterComplete: C,
        highRecordWatermark: oe,
        lowRecordWatermark: Ie
      });
      (0, c_.assertImpersonatedUserIsEmpty)(u, this._onProtocolError, ge);
      var Re = D;
      return this.write(hi.default.runWithMetadata(r, n, {
        bookmarks: a,
        txConfig: s,
        database: c,
        mode: l
      }), ge, Re && $), D || this.write(hi.default.pull({ n: K }), ge, $), ge;
    }, t.prototype._requestMore = function(r, n, i) {
      this.write(hi.default.pull({ stmtId: r, n }), i, !0);
    }, t.prototype._requestDiscard = function(r, n) {
      this.write(hi.default.discard({ stmtId: r }), n, !0);
    }, t.prototype._noOp = function() {
    }, t.prototype.requestRoutingInformation = function(r) {
      var n, i = r.routingContext, o = i === void 0 ? {} : i, a = r.databaseName, s = a === void 0 ? null : a, c = r.sessionContext, u = c === void 0 ? {} : c, l = r.onError, v = r.onCompleted, y = this.run(YB, (n = {}, n[nb] = o, n[ib] = s, n), Lu(Lu({}, u), { txConfig: zB.empty() }));
      return new Ll.ProcedureRouteObserver({
        resultObserver: y,
        onProtocolError: this._onProtocolError,
        onError: l,
        onCompleted: v
      });
    }, t;
  }(xB.default)
);
sc.default = KB;
var fc = {}, dc = {}, _f = d && d.__assign || function() {
  return _f = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var i in t)
        Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
    }
    return e;
  }, _f.apply(this, arguments);
}, GB = d && d.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(dc, "__esModule", { value: !0 });
var ZB = GB(cc);
dc.default = _f({}, ZB.default);
var QB = d && d.__extends || function() {
  var e = function(t, r) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var o in i)
        Object.prototype.hasOwnProperty.call(i, o) && (n[o] = i[o]);
    }, e(t, r);
  };
  return function(t, r) {
    if (typeof r != "function" && r !== null)
      throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
    e(t, r);
    function n() {
      this.constructor = t;
    }
    t.prototype = r === null ? Object.create(r) : (n.prototype = r.prototype, new n());
  };
}(), hc = d && d.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(fc, "__esModule", { value: !0 });
var JB = hc(sc), XB = hc(zr), e4 = Pe, r4 = ee, t4 = hc(dc), n4 = hc(Qe), i4 = r4.internal.constants.BOLT_PROTOCOL_V4_1, o4 = (
  /** @class */
  function(e) {
    QB(t, e);
    function t(r, n, i, o, a, s, c) {
      o === void 0 && (o = function() {
        return null;
      });
      var u = e.call(this, r, n, i, o, a, s) || this;
      return u._serversideRouting = c, u;
    }
    return Object.defineProperty(t.prototype, "version", {
      get: function() {
        return i4;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t.prototype, "transformer", {
      get: function() {
        var r = this;
        return this._transformer === void 0 && (this._transformer = new n4.default(Object.values(t4.default).map(function(n) {
          return n(r._config, r._log);
        }))), this._transformer;
      },
      enumerable: !1,
      configurable: !0
    }), t.prototype.initialize = function(r) {
      var n = this, i = r === void 0 ? {} : r, o = i.userAgent, a = i.authToken, s = i.onError, c = i.onComplete, u = new e4.LoginObserver({
        onError: function(l) {
          return n._onLoginError(l, s);
        },
        onCompleted: function(l) {
          return n._onLoginCompleted(l, c);
        }
      });
      return this.write(XB.default.hello(o, a, this._serversideRouting), u, !0), u;
    }, t;
  }(JB.default)
);
fc.default = o4;
var vc = {}, _c = {}, pf = d && d.__assign || function() {
  return pf = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var i in t)
        Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
    }
    return e;
  }, pf.apply(this, arguments);
}, a4 = d && d.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(_c, "__esModule", { value: !0 });
var u4 = a4(dc);
_c.default = pf({}, u4.default);
var s4 = d && d.__extends || function() {
  var e = function(t, r) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var o in i)
        Object.prototype.hasOwnProperty.call(i, o) && (n[o] = i[o]);
    }, e(t, r);
  };
  return function(t, r) {
    if (typeof r != "function" && r !== null)
      throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
    e(t, r);
    function n() {
      this.constructor = t;
    }
    t.prototype = r === null ? Object.create(r) : (n.prototype = r.prototype, new n());
  };
}(), md = d && d.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(vc, "__esModule", { value: !0 });
var c4 = md(fc), l4 = ee, f4 = md(_c), d4 = md(Qe), h4 = l4.internal.constants.BOLT_PROTOCOL_V4_2, v4 = (
  /** @class */
  function(e) {
    s4(t, e);
    function t() {
      return e !== null && e.apply(this, arguments) || this;
    }
    return Object.defineProperty(t.prototype, "version", {
      get: function() {
        return h4;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t.prototype, "transformer", {
      get: function() {
        var r = this;
        return this._transformer === void 0 && (this._transformer = new d4.default(Object.values(f4.default).map(function(n) {
          return n(r._config, r._log);
        }))), this._transformer;
      },
      enumerable: !1,
      configurable: !0
    }), t;
  }(c4.default)
);
vc.default = v4;
var Va = {}, pc = {}, mf = d && d.__assign || function() {
  return mf = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var i in t)
        Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
    }
    return e;
  }, mf.apply(this, arguments);
}, _4 = d && d.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(pc, "__esModule", { value: !0 });
var p4 = _4(_c);
pc.default = mf({}, p4.default);
var qa = {}, Ha = {}, yf = d && d.__assign || function() {
  return yf = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var i in t)
        Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
    }
    return e;
  }, yf.apply(this, arguments);
}, m4 = d && d.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(Ha, "__esModule", { value: !0 });
var y4 = m4(pc);
Ha.default = yf({}, y4.default);
var ob = d && d.__read || function(e, t) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r)
    return e;
  var n = r.call(e), i, o = [], a;
  try {
    for (; (t === void 0 || t-- > 0) && !(i = n.next()).done; )
      o.push(i.value);
  } catch (s) {
    a = { error: s };
  } finally {
    try {
      i && !i.done && (r = n.return) && r.call(n);
    } finally {
      if (a)
        throw a.error;
    }
  }
  return o;
}, b4 = d && d.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(qa, "__esModule", { value: !0 });
var Fu = Ge, sr = ee, ab = b4(Ha), g4 = xr, O4 = Wa, Ni = sr.internal.temporalUtil.localDateTimeToEpochSecond, l_ = 73, w4 = 3, f_ = 105, E4 = 3;
function S4(e, t) {
  var r = e.disableLosslessIntegers, n = e.useBigInt, i = ab.default.createDateTimeWithZoneIdTransformer(e);
  return i.extendsWith({
    signature: f_,
    fromStructure: function(o) {
      Fu.structure.verifyStructSize("DateTimeWithZoneId", E4, o.size);
      var a = ob(o.fields, 3), s = a[0], c = a[1], u = a[2], l = bf(u, s, c), v = new sr.DateTime(l.year, l.month, l.day, l.hour, l.minute, l.second, (0, sr.int)(c), l.timeZoneOffsetSeconds, u);
      return ub(v, r, n);
    },
    toStructure: function(o) {
      var a = Ni(o.year, o.month, o.day, o.hour, o.minute, o.second, o.nanosecond), s = o.timeZoneOffsetSeconds != null ? o.timeZoneOffsetSeconds : T4(o.timeZoneId, a, o.nanosecond);
      o.timeZoneOffsetSeconds == null && t.warn('DateTime objects without "timeZoneOffsetSeconds" property are prune to bugs related to ambiguous times. For instance, 2022-10-30T2:30:00[Europe/Berlin] could be GMT+1 or GMT+2.');
      var c = a.subtract(s), u = (0, sr.int)(o.nanosecond), l = o.timeZoneId;
      return new Fu.structure.Structure(f_, [c, u, l]);
    }
  });
}
function T4(e, t, r) {
  var n = bf(e, t, r), i = Ni(n.year, n.month, n.day, n.hour, n.minute, n.second, r), o = i.subtract(t), a = t.subtract(o), s = bf(e, a, r), c = Ni(s.year, s.month, s.day, s.hour, s.minute, s.second, r), u = c.subtract(a);
  return u;
}
function bf(e, t, r) {
  var n = new Intl.DateTimeFormat("en-US", {
    timeZone: e,
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: !1,
    era: "narrow"
  }), i = (0, sr.int)(t).multiply(1e3).add((0, sr.int)(r).div(1e6)).toNumber(), o = n.formatToParts(i), a = o.reduce(function(c, u) {
    return u.type === "era" ? c.adjustEra = u.value.toUpperCase() === "B" ? function(l) {
      return l.subtract(1).negate();
    } : O4.identity : u.type !== "literal" && (c[u.type] = (0, sr.int)(u.value)), c;
  }, {});
  a.year = a.adjustEra(a.year);
  var s = Ni(a.year, a.month, a.day, a.hour, a.minute, a.second, a.nanosecond);
  return a.timeZoneOffsetSeconds = s.subtract(t), a.hour = a.hour.modulo(24), a;
}
function P4(e) {
  var t = e.disableLosslessIntegers, r = e.useBigInt, n = ab.default.createDateTimeWithOffsetTransformer(e);
  return n.extendsWith({
    signature: l_,
    toStructure: function(i) {
      var o = Ni(i.year, i.month, i.day, i.hour, i.minute, i.second, i.nanosecond), a = (0, sr.int)(i.nanosecond), s = (0, sr.int)(i.timeZoneOffsetSeconds), c = o.subtract(s);
      return new Fu.structure.Structure(l_, [c, a, s]);
    },
    fromStructure: function(i) {
      Fu.structure.verifyStructSize("DateTimeWithZoneOffset", w4, i.size);
      var o = ob(i.fields, 3), a = o[0], s = o[1], c = o[2], u = (0, sr.int)(a).add(c), l = (0, g4.epochSecondAndNanoToLocalDateTime)(u, s), v = new sr.DateTime(l.year, l.month, l.day, l.hour, l.minute, l.second, l.nanosecond, c, null);
      return ub(v, t, r);
    }
  });
}
function ub(e, t, r) {
  if (!t && !r)
    return e;
  var n = function(s) {
    return r ? s.toBigInt() : s.toNumberOrInfinity();
  }, i = Object.create(Object.getPrototypeOf(e));
  for (var o in e)
    if (Object.prototype.hasOwnProperty.call(e, o) === !0) {
      var a = e[o];
      i[o] = (0, sr.isInt)(a) ? n(a) : a;
    }
  return Object.freeze(i), i;
}
qa.default = {
  createDateTimeWithZoneIdTransformer: S4,
  createDateTimeWithOffsetTransformer: P4
};
var I4 = d && d.__extends || function() {
  var e = function(t, r) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var o in i)
        Object.prototype.hasOwnProperty.call(i, o) && (n[o] = i[o]);
    }, e(t, r);
  };
  return function(t, r) {
    if (typeof r != "function" && r !== null)
      throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
    e(t, r);
    function n() {
      this.constructor = t;
    }
    t.prototype = r === null ? Object.create(r) : (n.prototype = r.prototype, new n());
  };
}(), Bu = d && d.__assign || function() {
  return Bu = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var i in t)
        Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
    }
    return e;
  }, Bu.apply(this, arguments);
}, za = d && d.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(Va, "__esModule", { value: !0 });
var A4 = za(vc), d_ = za(zr), h_ = Pe, v_ = za(pc), R4 = za(qa), __ = za(Qe), sb = ee, C4 = sb.internal.bookmarks.Bookmarks, j4 = sb.internal.constants.BOLT_PROTOCOL_V4_3, N4 = (
  /** @class */
  function(e) {
    I4(t, e);
    function t() {
      return e !== null && e.apply(this, arguments) || this;
    }
    return Object.defineProperty(t.prototype, "version", {
      get: function() {
        return j4;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t.prototype, "transformer", {
      get: function() {
        var r = this;
        return this._transformer === void 0 && (this._transformer = new __.default(Object.values(v_.default).map(function(n) {
          return n(r._config, r._log);
        }))), this._transformer;
      },
      enumerable: !1,
      configurable: !0
    }), t.prototype.requestRoutingInformation = function(r) {
      var n = r.routingContext, i = n === void 0 ? {} : n, o = r.databaseName, a = o === void 0 ? null : o, s = r.sessionContext, c = s === void 0 ? {} : s, u = r.onError, l = r.onCompleted, v = new h_.RouteObserver({
        onProtocolError: this._onProtocolError,
        onError: u,
        onCompleted: l
      }), y = c.bookmarks || C4.empty();
      return this.write(d_.default.route(i, y.values(), a), v, !0), v;
    }, t.prototype.initialize = function(r) {
      var n = this, i = r === void 0 ? {} : r, o = i.userAgent, a = i.authToken, s = i.onError, c = i.onComplete, u = new h_.LoginObserver({
        onError: function(l) {
          return n._onLoginError(l, s);
        },
        onCompleted: function(l) {
          return l.patch_bolt !== void 0 && n._applyPatches(l.patch_bolt), n._onLoginCompleted(l, c);
        }
      });
      return this.write(d_.default.hello(o, a, this._serversideRouting, ["utc"]), u, !0), u;
    }, t.prototype._applyPatches = function(r) {
      r.includes("utc") && this._applyUtcPatch();
    }, t.prototype._applyUtcPatch = function() {
      var r = this;
      this._transformer = new __.default(Object.values(Bu(Bu({}, v_.default), R4.default)).map(function(n) {
        return n(r._config, r._log);
      }));
    }, t;
  }(A4.default)
);
Va.default = N4;
var mc = {}, $4 = d && d.__extends || function() {
  var e = function(t, r) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var o in i)
        Object.prototype.hasOwnProperty.call(i, o) && (n[o] = i[o]);
    }, e(t, r);
  };
  return function(t, r) {
    if (typeof r != "function" && r !== null)
      throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
    e(t, r);
    function n() {
      this.constructor = t;
    }
    t.prototype = r === null ? Object.create(r) : (n.prototype = r.prototype, new n());
  };
}(), xu = d && d.__assign || function() {
  return xu = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var i in t)
        Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
    }
    return e;
  }, xu.apply(this, arguments);
}, Ya = d && d.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(mc, "__esModule", { value: !0 });
var M4 = Ya(Va), cb = ee, du = Ya(zr), Fl = Pe, p_ = Ya(Ha), k4 = Ya(qa), m_ = Ya(Qe), lb = cb.internal.constants, D4 = lb.BOLT_PROTOCOL_V4_4, U4 = lb.FETCH_ALL, L4 = cb.internal.bookmarks.Bookmarks, F4 = (
  /** @class */
  function(e) {
    $4(t, e);
    function t() {
      return e !== null && e.apply(this, arguments) || this;
    }
    return Object.defineProperty(t.prototype, "version", {
      get: function() {
        return D4;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t.prototype, "transformer", {
      get: function() {
        var r = this;
        return this._transformer === void 0 && (this._transformer = new m_.default(Object.values(p_.default).map(function(n) {
          return n(r._config, r._log);
        }))), this._transformer;
      },
      enumerable: !1,
      configurable: !0
    }), t.prototype.requestRoutingInformation = function(r) {
      var n = r.routingContext, i = n === void 0 ? {} : n, o = r.databaseName, a = o === void 0 ? null : o, s = r.impersonatedUser, c = s === void 0 ? null : s, u = r.sessionContext, l = u === void 0 ? {} : u, v = r.onError, y = r.onCompleted, g = new Fl.RouteObserver({
        onProtocolError: this._onProtocolError,
        onError: v,
        onCompleted: y
      }), E = l.bookmarks || L4.empty();
      return this.write(du.default.routeV4x4(i, E.values(), { databaseName: a, impersonatedUser: c }), g, !0), g;
    }, t.prototype.run = function(r, n, i) {
      var o = i === void 0 ? {} : i, a = o.bookmarks, s = o.txConfig, c = o.database, u = o.mode, l = o.impersonatedUser, v = o.beforeKeys, y = o.afterKeys, g = o.beforeError, E = o.afterError, S = o.beforeComplete, C = o.afterComplete, R = o.flush, $ = R === void 0 ? !0 : R, U = o.reactive, D = U === void 0 ? !1 : U, F = o.fetchSize, K = F === void 0 ? U4 : F, X = o.highRecordWatermark, oe = X === void 0 ? Number.MAX_VALUE : X, de = o.lowRecordWatermark, Ie = de === void 0 ? Number.MAX_VALUE : de, ge = new Fl.ResultStreamObserver({
        server: this._server,
        reactive: D,
        fetchSize: K,
        moreFunction: this._requestMore.bind(this),
        discardFunction: this._requestDiscard.bind(this),
        beforeKeys: v,
        afterKeys: y,
        beforeError: g,
        afterError: E,
        beforeComplete: S,
        afterComplete: C,
        highRecordWatermark: oe,
        lowRecordWatermark: Ie
      }), Re = D;
      return this.write(du.default.runWithMetadata(r, n, {
        bookmarks: a,
        txConfig: s,
        database: c,
        mode: u,
        impersonatedUser: l
      }), ge, Re && $), D || this.write(du.default.pull({ n: K }), ge, $), ge;
    }, t.prototype.beginTransaction = function(r) {
      var n = r === void 0 ? {} : r, i = n.bookmarks, o = n.txConfig, a = n.database, s = n.mode, c = n.impersonatedUser, u = n.beforeError, l = n.afterError, v = n.beforeComplete, y = n.afterComplete, g = new Fl.ResultStreamObserver({
        server: this._server,
        beforeError: u,
        afterError: l,
        beforeComplete: v,
        afterComplete: y
      });
      return g.prepareToHandleSingleResponse(), this.write(du.default.begin({ bookmarks: i, txConfig: o, database: a, mode: s, impersonatedUser: c }), g, !0), g;
    }, t.prototype._applyUtcPatch = function() {
      var r = this;
      this._transformer = new m_.default(Object.values(xu(xu({}, p_.default), k4.default)).map(function(n) {
        return n(r._config, r._log);
      }));
    }, t;
  }(M4.default)
);
mc.default = F4;
var yd = {}, bd = {}, Ti = d && d.__assign || function() {
  return Ti = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var i in t)
        Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
    }
    return e;
  }, Ti.apply(this, arguments);
}, gd = d && d.__read || function(e, t) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r)
    return e;
  var n = r.call(e), i, o = [], a;
  try {
    for (; (t === void 0 || t-- > 0) && !(i = n.next()).done; )
      o.push(i.value);
  } catch (s) {
    a = { error: s };
  } finally {
    try {
      i && !i.done && (r = n.return) && r.call(n);
    } finally {
      if (a)
        throw a.error;
    }
  }
  return o;
}, fb = d && d.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(bd, "__esModule", { value: !0 });
var Od = Ge, wd = ee, yc = fb(Ha), B4 = fb(qa), x4 = 4, W4 = 8, V4 = 4;
function q4(e) {
  var t = yc.default.createNodeTransformer(e);
  return t.extendsWith({
    fromStructure: function(r) {
      Od.structure.verifyStructSize("Node", x4, r.size);
      var n = gd(r.fields, 4), i = n[0], o = n[1], a = n[2], s = n[3];
      return new wd.Node(i, o, a, s);
    }
  });
}
function H4(e) {
  var t = yc.default.createRelationshipTransformer(e);
  return t.extendsWith({
    fromStructure: function(r) {
      Od.structure.verifyStructSize("Relationship", W4, r.size);
      var n = gd(r.fields, 8), i = n[0], o = n[1], a = n[2], s = n[3], c = n[4], u = n[5], l = n[6], v = n[7];
      return new wd.Relationship(i, o, a, s, c, u, l, v);
    }
  });
}
function z4(e) {
  var t = yc.default.createUnboundRelationshipTransformer(e);
  return t.extendsWith({
    fromStructure: function(r) {
      Od.structure.verifyStructSize("UnboundRelationship", V4, r.size);
      var n = gd(r.fields, 4), i = n[0], o = n[1], a = n[2], s = n[3];
      return new wd.UnboundRelationship(i, o, a, s);
    }
  });
}
bd.default = Ti(Ti(Ti({}, yc.default), B4.default), { createNodeTransformer: q4, createRelationshipTransformer: H4, createUnboundRelationshipTransformer: z4 });
var Y4 = d && d.__extends || function() {
  var e = function(t, r) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var o in i)
        Object.prototype.hasOwnProperty.call(i, o) && (n[o] = i[o]);
    }, e(t, r);
  };
  return function(t, r) {
    if (typeof r != "function" && r !== null)
      throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
    e(t, r);
    function n() {
      this.constructor = t;
    }
    t.prototype = r === null ? Object.create(r) : (n.prototype = r.prototype, new n());
  };
}(), bc = d && d.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(yd, "__esModule", { value: !0 });
var K4 = bc(mc), G4 = bc(bd), Z4 = bc(Qe), Q4 = bc(zr), J4 = Pe, X4 = ee, ex = X4.internal.constants.BOLT_PROTOCOL_V5_0, rx = (
  /** @class */
  function(e) {
    Y4(t, e);
    function t() {
      return e !== null && e.apply(this, arguments) || this;
    }
    return Object.defineProperty(t.prototype, "version", {
      get: function() {
        return ex;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t.prototype, "transformer", {
      get: function() {
        var r = this;
        return this._transformer === void 0 && (this._transformer = new Z4.default(Object.values(G4.default).map(function(n) {
          return n(r._config, r._log);
        }))), this._transformer;
      },
      enumerable: !1,
      configurable: !0
    }), t.prototype.initialize = function(r) {
      var n = this, i = r === void 0 ? {} : r, o = i.userAgent, a = i.authToken, s = i.onError, c = i.onComplete, u = new J4.LoginObserver({
        onError: function(l) {
          return n._onLoginError(l, s);
        },
        onCompleted: function(l) {
          return n._onLoginCompleted(l, c);
        }
      });
      return this.write(Q4.default.hello(o, a, this._serversideRouting), u, !0), u;
    }, t;
  }(K4.default)
);
yd.default = rx;
var Ed = {};
Object.defineProperty(Ed, "__esModule", { value: !0 });
var Pt = ee, tx = 112, nx = 113, ix = 126, ox = 127;
function Dr() {
}
function y_(e) {
  return e;
}
var ax = {
  onNext: Dr,
  onCompleted: Dr,
  onError: Dr
}, ux = (
  /** @class */
  function() {
    function e(t) {
      var r = t === void 0 ? {} : t, n = r.transformMetadata, i = r.log, o = r.observer;
      this._pendingObservers = [], this._log = i, this._transformMetadata = n || y_, this._observer = Object.assign({
        onPendingObserversChange: Dr,
        onError: Dr,
        onFailure: Dr,
        onErrorApplyTransformation: y_
      }, o);
    }
    return Object.defineProperty(e.prototype, "currentFailure", {
      get: function() {
        return this._currentFailure;
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.handleResponse = function(t) {
      var r = t.fields[0];
      switch (t.signature) {
        case nx:
          this._log.isDebugEnabled() && this._log.debug("S: RECORD ".concat(Pt.json.stringify(t))), this._currentObserver.onNext(r);
          break;
        case tx:
          this._log.isDebugEnabled() && this._log.debug("S: SUCCESS ".concat(Pt.json.stringify(t)));
          try {
            var n = this._transformMetadata(r);
            this._currentObserver.onCompleted(n);
          } finally {
            this._updateCurrentObserver();
          }
          break;
        case ox:
          this._log.isDebugEnabled() && this._log.debug("S: FAILURE ".concat(Pt.json.stringify(t)));
          try {
            var i = sx(r.code), o = (0, Pt.newError)(r.message, i);
            this._currentFailure = this._observer.onErrorApplyTransformation(o), this._currentObserver.onError(this._currentFailure);
          } finally {
            this._updateCurrentObserver(), this._observer.onFailure(this._currentFailure);
          }
          break;
        case ix:
          this._log.isDebugEnabled() && this._log.debug("S: IGNORED ".concat(Pt.json.stringify(t)));
          try {
            this._currentFailure && this._currentObserver.onError ? this._currentObserver.onError(this._currentFailure) : this._currentObserver.onError && this._currentObserver.onError((0, Pt.newError)("Ignored either because of an error or RESET"));
          } finally {
            this._updateCurrentObserver();
          }
          break;
        default:
          this._observer.onError((0, Pt.newError)("Unknown Bolt protocol message: " + t));
      }
    }, e.prototype._updateCurrentObserver = function() {
      this._currentObserver = this._pendingObservers.shift(), this._observer.onPendingObserversChange(this._pendingObservers.length);
    }, e.prototype._queueObserver = function(t) {
      return t = t || ax, t.onCompleted = t.onCompleted || Dr, t.onError = t.onError || Dr, t.onNext = t.onNext || Dr, this._currentObserver === void 0 ? this._currentObserver = t : this._pendingObservers.push(t), this._observer.onPendingObserversChange(this._pendingObservers.length), !0;
    }, e.prototype._notifyErrorToObservers = function(t) {
      for (this._currentObserver && this._currentObserver.onError && this._currentObserver.onError(t); this._pendingObservers.length > 0; ) {
        var r = this._pendingObservers.shift();
        r && r.onError && r.onError(t);
      }
    }, e.prototype.hasOngoingObservableRequests = function() {
      return this._currentObserver != null || this._pendingObservers.length > 0;
    }, e.prototype._resetFailure = function() {
      this._currentFailure = null;
    }, e;
  }()
);
Ed.default = ux;
function sx(e) {
  return e === "Neo.TransientError.Transaction.Terminated" ? "Neo.ClientError.Transaction.Terminated" : e === "Neo.TransientError.Transaction.LockClientStopped" ? "Neo.ClientError.Transaction.LockClientStopped" : e;
}
var Nr = d && d.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(ud, "__esModule", { value: !0 });
var cx = ee, lx = Nr(zs), fx = Nr(tc), dx = Nr(oc), hx = Nr(sc), vx = Nr(fc), _x = Nr(vc), px = Nr(Va), mx = Nr(mc), yx = Nr(yd), bx = Nr(Ed);
function gx(e) {
  var t = e === void 0 ? {} : e, r = t.version, n = t.chunker, i = t.dechunker, o = t.channel, a = t.disableLosslessIntegers, s = t.useBigInt, c = t.serversideRouting, u = t.server, l = t.log, v = t.observer, y = function(g) {
    var E = new bx.default({
      transformMetadata: g.transformMetadata.bind(g),
      log: l,
      observer: v
    });
    return o.onerror = v.onError.bind(v), o.onmessage = function(S) {
      return i.write(S);
    }, i.onmessage = function(S) {
      try {
        E.handleResponse(g.unpack(S));
      } catch (C) {
        return v.onError(C);
      }
    }, E;
  };
  return Ox(r, u, n, { disableLosslessIntegers: a, useBigInt: s }, c, y, v.onProtocolError.bind(v), l);
}
ud.default = gx;
function Ox(e, t, r, n, i, o, a, s) {
  switch (e) {
    case 1:
      return new lx.default(t, r, n, o, s, a);
    case 2:
      return new fx.default(t, r, n, o, s, a);
    case 3:
      return new dx.default(t, r, n, o, s, a);
    case 4:
      return new hx.default(t, r, n, o, s, a);
    case 4.1:
      return new vx.default(t, r, n, o, s, a, i);
    case 4.2:
      return new _x.default(t, r, n, o, s, a, i);
    case 4.3:
      return new px.default(t, r, n, o, s, a, i);
    case 4.4:
      return new mx.default(t, r, n, o, s, a, i);
    case 5:
      return new yx.default(t, r, n, o, s, a, i);
    default:
      throw (0, cx.newError)("Unknown Bolt protocol version: " + e);
  }
}
(function(e) {
  var t = d && d.__createBinding || (Object.create ? function(c, u, l, v) {
    v === void 0 && (v = l);
    var y = Object.getOwnPropertyDescriptor(u, l);
    (!y || ("get" in y ? !u.__esModule : y.writable || y.configurable)) && (y = { enumerable: !0, get: function() {
      return u[l];
    } }), Object.defineProperty(c, v, y);
  } : function(c, u, l, v) {
    v === void 0 && (v = l), c[v] = u[l];
  }), r = d && d.__exportStar || function(c, u) {
    for (var l in c)
      l !== "default" && !Object.prototype.hasOwnProperty.call(u, l) && t(u, c, l);
  }, n = d && d.__importDefault || function(c) {
    return c && c.__esModule ? c : { default: c };
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.RawRoutingTable = e.BoltProtocol = void 0;
  var i = n(Xf), o = n(ud), a = n(Va), s = n(Ys);
  r(Pe, e), e.BoltProtocol = a.default, e.RawRoutingTable = s.default, e.default = {
    handshake: i.default,
    create: o.default
  };
})(Jf);
var Sd = {}, ot = {};
Object.defineProperty(ot, "__esModule", { value: !0 });
ot.DEFAULT_ACQUISITION_TIMEOUT = ot.DEFAULT_MAX_SIZE = void 0;
var Eu = 100;
ot.DEFAULT_MAX_SIZE = Eu;
var Su = 60 * 1e3;
ot.DEFAULT_ACQUISITION_TIMEOUT = Su;
var wx = (
  /** @class */
  function() {
    function e(t, r) {
      this.maxSize = b_(t, Eu), this.acquisitionTimeout = b_(r, Su);
    }
    return e.defaultConfig = function() {
      return new e(Eu, Su);
    }, e.fromDriverConfig = function(t) {
      var r = g_(t.maxConnectionPoolSize), n = r ? t.maxConnectionPoolSize : Eu, i = g_(t.connectionAcquisitionTimeout), o = i ? t.connectionAcquisitionTimeout : Su;
      return new e(n, o);
    }, e;
  }()
);
ot.default = wx;
function b_(e, t) {
  return e === 0 || e ? e : t;
}
function g_(e) {
  return e === 0 || e;
}
var Td = {}, hu = d && d.__awaiter || function(e, t, r, n) {
  function i(o) {
    return o instanceof r ? o : new r(function(a) {
      a(o);
    });
  }
  return new (r || (r = Promise))(function(o, a) {
    function s(l) {
      try {
        u(n.next(l));
      } catch (v) {
        a(v);
      }
    }
    function c(l) {
      try {
        u(n.throw(l));
      } catch (v) {
        a(v);
      }
    }
    function u(l) {
      l.done ? o(l.value) : i(l.value).then(s, c);
    }
    u((n = n.apply(e, t || [])).next());
  });
}, vu = d && d.__generator || function(e, t) {
  var r = { label: 0, sent: function() {
    if (o[0] & 1)
      throw o[1];
    return o[1];
  }, trys: [], ops: [] }, n, i, o, a;
  return a = { next: s(0), throw: s(1), return: s(2) }, typeof Symbol == "function" && (a[Symbol.iterator] = function() {
    return this;
  }), a;
  function s(u) {
    return function(l) {
      return c([u, l]);
    };
  }
  function c(u) {
    if (n)
      throw new TypeError("Generator is already executing.");
    for (; a && (a = 0, u[0] && (r = 0)), r; )
      try {
        if (n = 1, i && (o = u[0] & 2 ? i.return : u[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, u[1])).done)
          return o;
        switch (i = 0, o && (u = [u[0] & 2, o.value]), u[0]) {
          case 0:
          case 1:
            o = u;
            break;
          case 4:
            return r.label++, { value: u[1], done: !1 };
          case 5:
            r.label++, i = u[1], u = [0];
            continue;
          case 7:
            u = r.ops.pop(), r.trys.pop();
            continue;
          default:
            if (o = r.trys, !(o = o.length > 0 && o[o.length - 1]) && (u[0] === 6 || u[0] === 2)) {
              r = 0;
              continue;
            }
            if (u[0] === 3 && (!o || u[1] > o[0] && u[1] < o[3])) {
              r.label = u[1];
              break;
            }
            if (u[0] === 6 && r.label < o[1]) {
              r.label = o[1], o = u;
              break;
            }
            if (o && r.label < o[2]) {
              r.label = o[2], r.ops.push(u);
              break;
            }
            o[2] && r.ops.pop(), r.trys.pop();
            continue;
        }
        u = t.call(e, r);
      } catch (l) {
        u = [6, l], i = 0;
      } finally {
        n = o = 0;
      }
    if (u[0] & 5)
      throw u[1];
    return { value: u[0] ? u[1] : void 0, done: !0 };
  }
}, Ex = d && d.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(Td, "__esModule", { value: !0 });
var Sx = Ex(ot), gf = ee, Tx = gf.internal.logger.Logger, Px = (
  /** @class */
  function() {
    function e(t) {
      var r = t === void 0 ? {} : t, n = r.create, i = n === void 0 ? function(R, $) {
        return Promise.resolve();
      } : n, o = r.destroy, a = o === void 0 ? function(R) {
        return Promise.resolve();
      } : o, s = r.validate, c = s === void 0 ? function(R) {
        return !0;
      } : s, u = r.installIdleObserver, l = u === void 0 ? function(R, $) {
      } : u, v = r.removeIdleObserver, y = v === void 0 ? function(R) {
      } : v, g = r.config, E = g === void 0 ? Sx.default.defaultConfig() : g, S = r.log, C = S === void 0 ? Tx.noOp() : S;
      this._create = i, this._destroy = a, this._validate = c, this._installIdleObserver = l, this._removeIdleObserver = y, this._maxSize = E.maxSize, this._acquisitionTimeout = E.acquisitionTimeout, this._pools = {}, this._pendingCreates = {}, this._acquireRequests = {}, this._activeResourceCounts = {}, this._release = this._release.bind(this), this._log = C, this._closed = !1;
    }
    return e.prototype.acquire = function(t) {
      var r = this, n = t.asKey(), i = this._acquireRequests, o = i[n];
      return o || (i[n] = []), new Promise(function(a, s) {
        var c = null, u = setTimeout(function() {
          var l = i[n];
          if (l && (i[n] = l.filter(function(g) {
            return g !== c;
          })), !c.isCompleted()) {
            var v = r.activeResourceCount(t), y = r.has(t) ? r._pools[n].length : 0;
            c.reject((0, gf.newError)("Connection acquisition timed out in ".concat(r._acquisitionTimeout, " ms. Pool status: Active conn count = ").concat(v, ", Idle conn count = ").concat(y, ".")));
          }
        }, r._acquisitionTimeout);
        c = new Ax(n, a, s, u, r._log), i[n].push(c), r._processPendingAcquireRequests(t);
      });
    }, e.prototype.purge = function(t) {
      return this._purgeKey(t.asKey());
    }, e.prototype.close = function() {
      return hu(this, void 0, void 0, function() {
        var t = this;
        return vu(this, function(r) {
          switch (r.label) {
            case 0:
              return this._closed = !0, [4, Promise.all(Object.keys(this._pools).map(function(n) {
                return t._purgeKey(n);
              }))];
            case 1:
              return [2, r.sent()];
          }
        });
      });
    }, e.prototype.keepAll = function(t) {
      var r = this, n = t.map(function(a) {
        return a.asKey();
      }), i = Object.keys(this._pools), o = i.filter(function(a) {
        return n.indexOf(a) === -1;
      });
      return Promise.all(o.map(function(a) {
        return r._purgeKey(a);
      }));
    }, e.prototype.has = function(t) {
      return t.asKey() in this._pools;
    }, e.prototype.activeResourceCount = function(t) {
      return this._activeResourceCounts[t.asKey()] || 0;
    }, e.prototype._getOrInitializePoolFor = function(t) {
      var r = this._pools[t];
      return r || (r = new Rx(), this._pools[t] = r, this._pendingCreates[t] = 0), r;
    }, e.prototype._acquire = function(t) {
      return hu(this, void 0, void 0, function() {
        var r, n, i, o, a, s = this;
        return vu(this, function(c) {
          switch (c.label) {
            case 0:
              if (this._closed)
                throw (0, gf.newError)("Pool is closed, it is no more able to serve requests.");
              r = t.asKey(), n = this._getOrInitializePoolFor(r), c.label = 1;
            case 1:
              return n.length ? (i = n.pop(), this._validate(i) ? (this._removeIdleObserver && this._removeIdleObserver(i), O_(r, this._activeResourceCounts), this._log.isDebugEnabled() && this._log.debug("".concat(i, " acquired from the pool ").concat(r)), [2, { resource: i, pool: n }]) : [3, 2]) : [3, 5];
            case 2:
              return [4, this._destroy(i)];
            case 3:
              c.sent(), c.label = 4;
            case 4:
              return [3, 1];
            case 5:
              if (this._maxSize > 0 && (o = this.activeResourceCount(t) + this._pendingCreates[r], o >= this._maxSize))
                return [2, { resource: null, pool: n }];
              this._pendingCreates[r] = this._pendingCreates[r] + 1, c.label = 6;
            case 6:
              return c.trys.push([6, , 8, 9]), [4, this._create(t, function(u, l) {
                return s._release(u, l, n);
              })];
            case 7:
              return a = c.sent(), O_(r, this._activeResourceCounts), this._log.isDebugEnabled() && this._log.debug("".concat(a, " created for the pool ").concat(r)), [3, 9];
            case 8:
              return this._pendingCreates[r] = this._pendingCreates[r] - 1, [
                7
                /*endfinally*/
              ];
            case 9:
              return [2, { resource: a, pool: n }];
          }
        });
      });
    }, e.prototype._release = function(t, r, n) {
      return hu(this, void 0, void 0, function() {
        var i, o = this;
        return vu(this, function(a) {
          switch (a.label) {
            case 0:
              return i = t.asKey(), n.isActive() ? this._validate(r) ? [3, 2] : (this._log.isDebugEnabled() && this._log.debug("".concat(r, " destroyed and can't be released to the pool ").concat(i, " because it is not functional")), [4, this._destroy(r)]) : [3, 4];
            case 1:
              return a.sent(), [3, 3];
            case 2:
              this._installIdleObserver && this._installIdleObserver(r, {
                onError: function(s) {
                  o._log.debug("Idle connection ".concat(r, " destroyed because of error: ").concat(s));
                  var c = o._pools[i];
                  c && (o._pools[i] = c.filter(function(u) {
                    return u !== r;
                  })), o._destroy(r).catch(function() {
                  });
                }
              }), n.push(r), this._log.isDebugEnabled() && this._log.debug("".concat(r, " released to the pool ").concat(i)), a.label = 3;
            case 3:
              return [3, 6];
            case 4:
              return this._log.isDebugEnabled() && this._log.debug("".concat(r, " destroyed and can't be released to the pool ").concat(i, " because pool has been purged")), [4, this._destroy(r)];
            case 5:
              a.sent(), a.label = 6;
            case 6:
              return Ix(i, this._activeResourceCounts), this._processPendingAcquireRequests(t), [
                2
                /*return*/
              ];
          }
        });
      });
    }, e.prototype._purgeKey = function(t) {
      return hu(this, void 0, void 0, function() {
        var r, n, i;
        return vu(this, function(o) {
          switch (o.label) {
            case 0:
              if (r = this._pools[t], n = [], !r)
                return [3, 2];
              for (; r.length; )
                i = r.pop(), this._removeIdleObserver && this._removeIdleObserver(i), n.push(this._destroy(i));
              return r.close(), delete this._pools[t], [4, Promise.all(n)];
            case 1:
              o.sent(), o.label = 2;
            case 2:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, e.prototype._processPendingAcquireRequests = function(t) {
      var r = this, n = t.asKey(), i = this._acquireRequests[n];
      if (i) {
        var o = i.shift();
        o ? this._acquire(t).catch(function(a) {
          return o.reject(a), { resource: null };
        }).then(function(a) {
          var s = a.resource, c = a.pool;
          s ? o.isCompleted() ? r._release(t, s, c) : o.resolve(s) : o.isCompleted() || (r._acquireRequests[n] || (r._acquireRequests[n] = []), r._acquireRequests[n].unshift(o));
        }) : delete this._acquireRequests[n];
      }
    }, e;
  }()
);
function O_(e, t) {
  var r = t[e] || 0;
  t[e] = r + 1;
}
function Ix(e, t) {
  var r = t[e] || 0, n = r - 1;
  n > 0 ? t[e] = n : delete t[e];
}
var Ax = (
  /** @class */
  function() {
    function e(t, r, n, i, o) {
      this._key = t, this._resolve = r, this._reject = n, this._timeoutId = i, this._log = o, this._completed = !1;
    }
    return e.prototype.isCompleted = function() {
      return this._completed;
    }, e.prototype.resolve = function(t) {
      this._completed || (this._completed = !0, clearTimeout(this._timeoutId), this._log.isDebugEnabled() && this._log.debug("".concat(t, " acquired from the pool ").concat(this._key)), this._resolve(t));
    }, e.prototype.reject = function(t) {
      this._completed || (this._completed = !0, clearTimeout(this._timeoutId), this._reject(t));
    }, e;
  }()
), Rx = (
  /** @class */
  function() {
    function e() {
      this._active = !0, this._elements = [];
    }
    return e.prototype.isActive = function() {
      return this._active;
    }, e.prototype.close = function() {
      this._active = !1;
    }, e.prototype.filter = function(t) {
      return this._elements = this._elements.filter(t), this;
    }, Object.defineProperty(e.prototype, "length", {
      get: function() {
        return this._elements.length;
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.pop = function() {
      return this._elements.pop();
    }, e.prototype.push = function(t) {
      return this._elements.push(t);
    }, e;
  }()
);
Td.default = Px;
(function(e) {
  var t = d && d.__createBinding || (Object.create ? function(s, c, u, l) {
    l === void 0 && (l = u);
    var v = Object.getOwnPropertyDescriptor(c, u);
    (!v || ("get" in v ? !c.__esModule : v.writable || v.configurable)) && (v = { enumerable: !0, get: function() {
      return c[u];
    } }), Object.defineProperty(s, l, v);
  } : function(s, c, u, l) {
    l === void 0 && (l = u), s[l] = c[u];
  }), r = d && d.__setModuleDefault || (Object.create ? function(s, c) {
    Object.defineProperty(s, "default", { enumerable: !0, value: c });
  } : function(s, c) {
    s.default = c;
  }), n = d && d.__importStar || function(s) {
    if (s && s.__esModule)
      return s;
    var c = {};
    if (s != null)
      for (var u in s)
        u !== "default" && Object.prototype.hasOwnProperty.call(s, u) && t(c, s, u);
    return r(c, s), c;
  }, i = d && d.__importDefault || function(s) {
    return s && s.__esModule ? s : { default: s };
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.DEFAULT_MAX_SIZE = e.DEFAULT_ACQUISITION_TIMEOUT = e.PoolConfig = e.Pool = void 0;
  var o = n(ot);
  e.PoolConfig = o.default, Object.defineProperty(e, "DEFAULT_ACQUISITION_TIMEOUT", { enumerable: !0, get: function() {
    return o.DEFAULT_ACQUISITION_TIMEOUT;
  } }), Object.defineProperty(e, "DEFAULT_MAX_SIZE", { enumerable: !0, get: function() {
    return o.DEFAULT_MAX_SIZE;
  } });
  var a = i(Td);
  e.Pool = a.default, e.default = a.default;
})(Sd);
var db = {}, gc = {}, Cx = d && d.__extends || function() {
  var e = function(t, r) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var o in i)
        Object.prototype.hasOwnProperty.call(i, o) && (n[o] = i[o]);
    }, e(t, r);
  };
  return function(t, r) {
    if (typeof r != "function" && r !== null)
      throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
    e(t, r);
    function n() {
      this.constructor = t;
    }
    t.prototype = r === null ? Object.create(r) : (n.prototype = r.prototype, new n());
  };
}();
Object.defineProperty(gc, "__esModule", { value: !0 });
var jx = ee, Nx = (
  /** @class */
  function(e) {
    Cx(t, e);
    function t(r) {
      var n = e.call(this) || this;
      return n._connection = r, n;
    }
    return t.prototype.acquireConnection = function(r) {
      var n = r === void 0 ? {} : r;
      n.accessMode, n.database, n.bookmarks;
      var i = this._connection;
      return this._connection = null, Promise.resolve(i);
    }, t;
  }(jx.ConnectionProvider)
);
gc.default = Nx;
var Ka = {}, Oc = {}, Ga = {};
Object.defineProperty(Ga, "__esModule", { value: !0 });
var $x = (
  /** @class */
  function() {
    function e(t) {
      this._errorHandler = t;
    }
    return Object.defineProperty(e.prototype, "id", {
      get: function() {
        throw new Error("not implemented");
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "databaseId", {
      get: function() {
        throw new Error("not implemented");
      },
      set: function(t) {
        throw new Error("not implemented");
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.isOpen = function() {
      throw new Error("not implemented");
    }, e.prototype.protocol = function() {
      throw new Error("not implemented");
    }, Object.defineProperty(e.prototype, "address", {
      /**
       * @returns {ServerAddress} the server address this connection is opened against
       */
      get: function() {
        throw new Error("not implemented");
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "version", {
      /**
       * @returns {ServerVersion} the version of the server this connection is connected to
       */
      get: function() {
        throw new Error("not implemented");
      },
      set: function(t) {
        throw new Error("not implemented");
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "server", {
      get: function() {
        throw new Error("not implemented");
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.connect = function(t, r) {
      throw new Error("not implemented");
    }, e.prototype.write = function(t, r, n) {
      throw new Error("not implemented");
    }, e.prototype.resetAndFlush = function() {
      throw new Error("not implemented");
    }, e.prototype.hasOngoingObservableRequests = function() {
      throw new Error("not implemented");
    }, e.prototype.close = function() {
      throw new Error("not implemented");
    }, e.prototype.handleAndTransformError = function(t, r) {
      return this._errorHandler ? this._errorHandler.handleAndTransformError(t, r) : t;
    }, e;
  }()
);
Ga.default = $x;
var Za = {}, Mx = d && d.__extends || function() {
  var e = function(t, r) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var o in i)
        Object.prototype.hasOwnProperty.call(i, o) && (n[o] = i[o]);
    }, e(t, r);
  };
  return function(t, r) {
    if (typeof r != "function" && r !== null)
      throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
    e(t, r);
    function n() {
      this.constructor = t;
    }
    t.prototype = r === null ? Object.create(r) : (n.prototype = r.prototype, new n());
  };
}(), kx = d && d.__awaiter || function(e, t, r, n) {
  function i(o) {
    return o instanceof r ? o : new r(function(a) {
      a(o);
    });
  }
  return new (r || (r = Promise))(function(o, a) {
    function s(l) {
      try {
        u(n.next(l));
      } catch (v) {
        a(v);
      }
    }
    function c(l) {
      try {
        u(n.throw(l));
      } catch (v) {
        a(v);
      }
    }
    function u(l) {
      l.done ? o(l.value) : i(l.value).then(s, c);
    }
    u((n = n.apply(e, t || [])).next());
  });
}, Dx = d && d.__generator || function(e, t) {
  var r = { label: 0, sent: function() {
    if (o[0] & 1)
      throw o[1];
    return o[1];
  }, trys: [], ops: [] }, n, i, o, a;
  return a = { next: s(0), throw: s(1), return: s(2) }, typeof Symbol == "function" && (a[Symbol.iterator] = function() {
    return this;
  }), a;
  function s(u) {
    return function(l) {
      return c([u, l]);
    };
  }
  function c(u) {
    if (n)
      throw new TypeError("Generator is already executing.");
    for (; a && (a = 0, u[0] && (r = 0)), r; )
      try {
        if (n = 1, i && (o = u[0] & 2 ? i.return : u[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, u[1])).done)
          return o;
        switch (i = 0, o && (u = [u[0] & 2, o.value]), u[0]) {
          case 0:
          case 1:
            o = u;
            break;
          case 4:
            return r.label++, { value: u[1], done: !1 };
          case 5:
            r.label++, i = u[1], u = [0];
            continue;
          case 7:
            u = r.ops.pop(), r.trys.pop();
            continue;
          default:
            if (o = r.trys, !(o = o.length > 0 && o[o.length - 1]) && (u[0] === 6 || u[0] === 2)) {
              r = 0;
              continue;
            }
            if (u[0] === 3 && (!o || u[1] > o[0] && u[1] < o[3])) {
              r.label = u[1];
              break;
            }
            if (u[0] === 6 && r.label < o[1]) {
              r.label = o[1], o = u;
              break;
            }
            if (o && r.label < o[2]) {
              r.label = o[2], r.ops.push(u);
              break;
            }
            o[2] && r.ops.pop(), r.trys.pop();
            continue;
        }
        u = t.call(e, r);
      } catch (l) {
        u = [6, l], i = 0;
      } finally {
        n = o = 0;
      }
    if (u[0] & 5)
      throw u[1];
    return { value: u[0] ? u[1] : void 0, done: !0 };
  }
}, hb = d && d.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(Za, "__esModule", { value: !0 });
Za.createChannelConnection = void 0;
var _u = Jn, Pi = ee, Ux = hb(Ga), w_ = hb(Jf), Lx = Pi.error.PROTOCOL_ERROR, Fx = Pi.internal.logger.Logger, Bx = 0;
function xx(e, t, r, n, i, o) {
  i === void 0 && (i = null), o === void 0 && (o = function(c) {
    return new _u.Channel(c);
  });
  var a = new _u.ChannelConfig(e, t, r.errorCode()), s = o(a);
  return w_.default.handshake(s).then(function(c) {
    var u = c.protocolVersion, l = c.consumeRemainingBuffer, v = new _u.Chunker(s), y = new _u.Dechunker(), g = function(S) {
      return w_.default.create({
        version: u,
        channel: s,
        chunker: v,
        dechunker: y,
        disableLosslessIntegers: t.disableLosslessIntegers,
        useBigInt: t.useBigInt,
        serversideRouting: i,
        server: S.server,
        log: S.logger,
        observer: {
          onPendingObserversChange: S._handleOngoingRequestsNumberChange.bind(S),
          onError: S._handleFatalError.bind(S),
          onFailure: S._resetOnFailure.bind(S),
          onProtocolError: S._handleProtocolError.bind(S),
          onErrorApplyTransformation: function(C) {
            return S.handleAndTransformError(C, S._address);
          }
        }
      });
    }, E = new vb(s, r, e, n, t.disableLosslessIntegers, i, v, g);
    return l(function(S) {
      return y.write(S);
    }), E;
  }).catch(function(c) {
    return s.close().then(function() {
      throw c;
    });
  });
}
Za.createChannelConnection = xx;
var vb = (
  /** @class */
  function(e) {
    Mx(t, e);
    function t(r, n, i, o, a, s, c, u) {
      a === void 0 && (a = !1), s === void 0 && (s = null);
      var l = e.call(this, n) || this;
      return l._reseting = !1, l._resetObservers = [], l._id = Bx++, l._address = i, l._server = { address: i.asHostPort() }, l.creationTimestamp = Date.now(), l._disableLosslessIntegers = a, l._ch = r, l._chunker = c, l._log = Wx(l, o), l._serversideRouting = s, l._dbConnectionId = null, l._protocol = u(l), l._isBroken = !1, l._log.isDebugEnabled() && l._log.debug("created towards ".concat(i)), l;
    }
    return Object.defineProperty(t.prototype, "id", {
      get: function() {
        return this._id;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t.prototype, "databaseId", {
      get: function() {
        return this._dbConnectionId;
      },
      set: function(r) {
        this._dbConnectionId = r;
      },
      enumerable: !1,
      configurable: !0
    }), t.prototype.connect = function(r, n) {
      return this._initialize(r, n);
    }, t.prototype._initialize = function(r, n) {
      var i = this, o = this;
      return new Promise(function(a, s) {
        i._protocol.initialize({
          userAgent: r,
          authToken: n,
          onError: function(c) {
            return s(c);
          },
          onComplete: function(c) {
            if (c) {
              var u = c.server;
              (!i.version || u) && (i.version = u);
              var l = c.connection_id;
              if (i.databaseId || (i.databaseId = l), c.hints) {
                var v = c.hints["connection.recv_timeout_seconds"];
                if (v != null) {
                  var y = (0, Pi.toNumber)(v);
                  Number.isInteger(y) && y > 0 ? i._ch.setupReceiveTimeout(y * 1e3) : i._log.info("Server located at ".concat(i._address, " supplied an invalid connection receive timeout value (").concat(y, "). ") + "Please, verify the server configuration and status because this can be the symptom of a bigger issue.");
                }
              }
            }
            a(o);
          }
        });
      });
    }, t.prototype.protocol = function() {
      return this._protocol;
    }, Object.defineProperty(t.prototype, "address", {
      get: function() {
        return this._address;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t.prototype, "version", {
      /**
       * Get the version of the connected server.
       * Available only after initialization
       *
       * @returns {ServerVersion} version
       */
      get: function() {
        return this._server.version;
      },
      set: function(r) {
        this._server.version = r;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t.prototype, "server", {
      get: function() {
        return this._server;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t.prototype, "logger", {
      get: function() {
        return this._log;
      },
      enumerable: !1,
      configurable: !0
    }), t.prototype._handleFatalError = function(r) {
      this._isBroken = !0, this._error = this.handleAndTransformError(this._protocol.currentFailure || r, this._address), this._log.isErrorEnabled() && this._log.error("experienced a fatal error caused by ".concat(this._error, " (").concat(Pi.json.stringify(this._error), ")")), this._protocol.notifyFatalError(this._error);
    }, t.prototype._queueObserver = function(r) {
      return this._protocol.queueObserverIfProtocolIsNotBroken(r);
    }, t.prototype.hasOngoingObservableRequests = function() {
      return this._protocol.hasOngoingObservableRequests();
    }, t.prototype.resetAndFlush = function() {
      var r = this;
      return new Promise(function(n, i) {
        r._reset({
          onError: function(o) {
            if (r._isBroken)
              i(o);
            else {
              var a = r._handleProtocolError("Received FAILURE as a response for RESET: " + o);
              i(a);
            }
          },
          onComplete: function() {
            n();
          }
        });
      });
    }, t.prototype._resetOnFailure = function() {
      var r = this;
      this.isOpen() && this._reset({
        onError: function() {
          r._protocol.resetFailure();
        },
        onComplete: function() {
          r._protocol.resetFailure();
        }
      });
    }, t.prototype._reset = function(r) {
      var n = this;
      if (this._reseting) {
        this._protocol.isLastMessageReset() ? this._resetObservers.push(r) : this._protocol.reset({
          onError: function(o) {
            r.onError(o);
          },
          onComplete: function() {
            r.onComplete();
          }
        });
        return;
      }
      this._resetObservers.push(r), this._reseting = !0;
      var i = function(o) {
        n._reseting = !1;
        var a = n._resetObservers;
        n._resetObservers = [], a.forEach(o);
      };
      this._protocol.reset({
        onError: function(o) {
          i(function(a) {
            return a.onError(o);
          });
        },
        onComplete: function() {
          i(function(o) {
            return o.onComplete();
          });
        }
      });
    }, t.prototype._updateCurrentObserver = function() {
      this._protocol.updateCurrentObserver();
    }, t.prototype.isOpen = function() {
      return !this._isBroken && this._ch._open;
    }, t.prototype._handleOngoingRequestsNumberChange = function(r) {
      r === 0 ? this._ch.stopReceiveTimeout() : this._ch.startReceiveTimeout();
    }, t.prototype.close = function() {
      return kx(this, void 0, void 0, function() {
        return Dx(this, function(r) {
          switch (r.label) {
            case 0:
              return this._log.isDebugEnabled() && this._log.debug("closing"), this._protocol && this.isOpen() && this._protocol.prepareToClose(), [4, this._ch.close()];
            case 1:
              return r.sent(), this._log.isDebugEnabled() && this._log.debug("closed"), [
                2
                /*return*/
              ];
          }
        });
      });
    }, t.prototype.toString = function() {
      return "Connection [".concat(this.id, "][").concat(this.databaseId || "", "]");
    }, t.prototype._handleProtocolError = function(r) {
      this._protocol.resetFailure(), this._updateCurrentObserver();
      var n = (0, Pi.newError)(r, Lx);
      return this._handleFatalError(n), n;
    }, t;
  }(Ux.default)
);
Za.default = vb;
function Wx(e, t) {
  return new Fx(t._level, function(r, n) {
    return t._loggerFunction(r, "".concat(e, " ").concat(n));
  });
}
var Pd = {}, Vx = d && d.__extends || function() {
  var e = function(t, r) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var o in i)
        Object.prototype.hasOwnProperty.call(i, o) && (n[o] = i[o]);
    }, e(t, r);
  };
  return function(t, r) {
    if (typeof r != "function" && r !== null)
      throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
    e(t, r);
    function n() {
      this.constructor = t;
    }
    t.prototype = r === null ? Object.create(r) : (n.prototype = r.prototype, new n());
  };
}(), qx = d && d.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(Pd, "__esModule", { value: !0 });
var Hx = qx(Ga), zx = (
  /** @class */
  function(e) {
    Vx(t, e);
    function t(r, n) {
      var i = e.call(this, n) || this;
      return n && (i._originalErrorHandler = r._errorHandler, r._errorHandler = i._errorHandler), i._delegate = r, i;
    }
    return Object.defineProperty(t.prototype, "id", {
      get: function() {
        return this._delegate.id;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t.prototype, "databaseId", {
      get: function() {
        return this._delegate.databaseId;
      },
      set: function(r) {
        this._delegate.databaseId = r;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t.prototype, "server", {
      get: function() {
        return this._delegate.server;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t.prototype, "address", {
      get: function() {
        return this._delegate.address;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t.prototype, "version", {
      get: function() {
        return this._delegate.version;
      },
      set: function(r) {
        this._delegate.version = r;
      },
      enumerable: !1,
      configurable: !0
    }), t.prototype.isOpen = function() {
      return this._delegate.isOpen();
    }, t.prototype.protocol = function() {
      return this._delegate.protocol();
    }, t.prototype.connect = function(r, n) {
      return this._delegate.connect(r, n);
    }, t.prototype.write = function(r, n, i) {
      return this._delegate.write(r, n, i);
    }, t.prototype.resetAndFlush = function() {
      return this._delegate.resetAndFlush();
    }, t.prototype.hasOngoingObservableRequests = function() {
      return this._delegate.hasOngoingObservableRequests();
    }, t.prototype.close = function() {
      return this._delegate.close();
    }, t.prototype._release = function() {
      return this._originalErrorHandler && (this._delegate._errorHandler = this._originalErrorHandler), this._delegate._release();
    }, t;
  }(Hx.default)
);
Pd.default = zx;
var Id = {};
Object.defineProperty(Id, "__esModule", { value: !0 });
var _b = ee, Yx = _b.error.SERVICE_UNAVAILABLE, Kx = _b.error.SESSION_EXPIRED, Gx = (
  /** @class */
  function() {
    function e(t, r, n, i) {
      this._errorCode = t, this._handleUnavailability = r || Bl, this._handleWriteFailure = n || Bl, this._handleAuthorizationExpired = i || Bl;
    }
    return e.create = function(t) {
      var r = t.errorCode, n = t.handleUnavailability, i = t.handleWriteFailure, o = t.handleAuthorizationExpired;
      return new e(r, n, i, o);
    }, e.prototype.errorCode = function() {
      return this._errorCode;
    }, e.prototype.handleAndTransformError = function(t, r) {
      return Zx(t) ? this._handleAuthorizationExpired(t, r) : Qx(t) ? this._handleUnavailability(t, r) : Jx(t) ? this._handleWriteFailure(t, r) : t;
    }, e;
  }()
);
Id.default = Gx;
function Zx(e) {
  return e && (e.code === "Neo.ClientError.Security.AuthorizationExpired" || e.code === "Neo.ClientError.Security.TokenExpired");
}
function Qx(e) {
  return e ? e.code === Kx || e.code === Yx || e.code === "Neo.TransientError.General.DatabaseUnavailable" : !1;
}
function Jx(e) {
  return e ? e.code === "Neo.ClientError.Cluster.NotALeader" || e.code === "Neo.ClientError.General.ForbiddenOnReadOnlyDatabase" : !1;
}
function Bl(e) {
  return e;
}
(function(e) {
  var t = d && d.__createBinding || (Object.create ? function(u, l, v, y) {
    y === void 0 && (y = v);
    var g = Object.getOwnPropertyDescriptor(l, v);
    (!g || ("get" in g ? !l.__esModule : g.writable || g.configurable)) && (g = { enumerable: !0, get: function() {
      return l[v];
    } }), Object.defineProperty(u, y, g);
  } : function(u, l, v, y) {
    y === void 0 && (y = v), u[y] = l[v];
  }), r = d && d.__setModuleDefault || (Object.create ? function(u, l) {
    Object.defineProperty(u, "default", { enumerable: !0, value: l });
  } : function(u, l) {
    u.default = l;
  }), n = d && d.__importStar || function(u) {
    if (u && u.__esModule)
      return u;
    var l = {};
    if (u != null)
      for (var v in u)
        v !== "default" && Object.prototype.hasOwnProperty.call(u, v) && t(l, u, v);
    return r(l, u), l;
  }, i = d && d.__importDefault || function(u) {
    return u && u.__esModule ? u : { default: u };
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.createChannelConnection = e.ConnectionErrorHandler = e.DelegateConnection = e.ChannelConnection = e.Connection = void 0;
  var o = i(Ga);
  e.Connection = o.default;
  var a = n(Za);
  e.ChannelConnection = a.default, Object.defineProperty(e, "createChannelConnection", { enumerable: !0, get: function() {
    return a.createChannelConnection;
  } });
  var s = i(Pd);
  e.DelegateConnection = s.default;
  var c = i(Id);
  e.ConnectionErrorHandler = c.default, e.default = o.default;
})(Oc);
var Xx = d && d.__extends || function() {
  var e = function(t, r) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var o in i)
        Object.prototype.hasOwnProperty.call(i, o) && (n[o] = i[o]);
    }, e(t, r);
  };
  return function(t, r) {
    if (typeof r != "function" && r !== null)
      throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
    e(t, r);
    function n() {
      this.constructor = t;
    }
    t.prototype = r === null ? Object.create(r) : (n.prototype = r.prototype, new n());
  };
}(), e8 = d && d.__createBinding || (Object.create ? function(e, t, r, n) {
  n === void 0 && (n = r);
  var i = Object.getOwnPropertyDescriptor(t, r);
  (!i || ("get" in i ? !t.__esModule : i.writable || i.configurable)) && (i = { enumerable: !0, get: function() {
    return t[r];
  } }), Object.defineProperty(e, n, i);
} : function(e, t, r, n) {
  n === void 0 && (n = r), e[n] = t[r];
}), r8 = d && d.__setModuleDefault || (Object.create ? function(e, t) {
  Object.defineProperty(e, "default", { enumerable: !0, value: t });
} : function(e, t) {
  e.default = t;
}), t8 = d && d.__importStar || function(e) {
  if (e && e.__esModule)
    return e;
  var t = {};
  if (e != null)
    for (var r in e)
      r !== "default" && Object.prototype.hasOwnProperty.call(e, r) && e8(t, e, r);
  return r8(t, e), t;
}, E_ = d && d.__awaiter || function(e, t, r, n) {
  function i(o) {
    return o instanceof r ? o : new r(function(a) {
      a(o);
    });
  }
  return new (r || (r = Promise))(function(o, a) {
    function s(l) {
      try {
        u(n.next(l));
      } catch (v) {
        a(v);
      }
    }
    function c(l) {
      try {
        u(n.throw(l));
      } catch (v) {
        a(v);
      }
    }
    function u(l) {
      l.done ? o(l.value) : i(l.value).then(s, c);
    }
    u((n = n.apply(e, t || [])).next());
  });
}, S_ = d && d.__generator || function(e, t) {
  var r = { label: 0, sent: function() {
    if (o[0] & 1)
      throw o[1];
    return o[1];
  }, trys: [], ops: [] }, n, i, o, a;
  return a = { next: s(0), throw: s(1), return: s(2) }, typeof Symbol == "function" && (a[Symbol.iterator] = function() {
    return this;
  }), a;
  function s(u) {
    return function(l) {
      return c([u, l]);
    };
  }
  function c(u) {
    if (n)
      throw new TypeError("Generator is already executing.");
    for (; a && (a = 0, u[0] && (r = 0)), r; )
      try {
        if (n = 1, i && (o = u[0] & 2 ? i.return : u[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, u[1])).done)
          return o;
        switch (i = 0, o && (u = [u[0] & 2, o.value]), u[0]) {
          case 0:
          case 1:
            o = u;
            break;
          case 4:
            return r.label++, { value: u[1], done: !1 };
          case 5:
            r.label++, i = u[1], u = [0];
            continue;
          case 7:
            u = r.ops.pop(), r.trys.pop();
            continue;
          default:
            if (o = r.trys, !(o = o.length > 0 && o[o.length - 1]) && (u[0] === 6 || u[0] === 2)) {
              r = 0;
              continue;
            }
            if (u[0] === 3 && (!o || u[1] > o[0] && u[1] < o[3])) {
              r.label = u[1];
              break;
            }
            if (u[0] === 6 && r.label < o[1]) {
              r.label = o[1], o = u;
              break;
            }
            if (o && r.label < o[2]) {
              r.label = o[2], r.ops.push(u);
              break;
            }
            o[2] && r.ops.pop(), r.trys.pop();
            continue;
        }
        u = t.call(e, r);
      } catch (l) {
        u = [6, l], i = 0;
      } finally {
        n = o = 0;
      }
    if (u[0] & 5)
      throw u[1];
    return { value: u[0] ? u[1] : void 0, done: !0 };
  }
};
Object.defineProperty(Ka, "__esModule", { value: !0 });
var T_ = Oc, P_ = t8(Sd), Of = ee, n8 = Of.error.SERVICE_UNAVAILABLE, i8 = (
  /** @class */
  function(e) {
    Xx(t, e);
    function t(r, n) {
      var i = r.id, o = r.config, a = r.log, s = r.userAgent, c = r.authToken;
      n === void 0 && (n = null);
      var u = e.call(this) || this;
      return u._id = i, u._config = o, u._log = a, u._userAgent = s, u._authToken = c, u._createChannelConnection = n || function(l) {
        return (0, T_.createChannelConnection)(l, u._config, u._createConnectionErrorHandler(), u._log);
      }, u._connectionPool = new P_.default({
        create: u._createConnection.bind(u),
        destroy: u._destroyConnection.bind(u),
        validate: u._validateConnection.bind(u),
        installIdleObserver: t._installIdleObserverOnConnection.bind(u),
        removeIdleObserver: t._removeIdleObserverOnConnection.bind(u),
        config: P_.PoolConfig.fromDriverConfig(o),
        log: u._log
      }), u._openConnections = {}, u;
    }
    return t.prototype._createConnectionErrorHandler = function() {
      return new T_.ConnectionErrorHandler(n8);
    }, t.prototype._createConnection = function(r, n) {
      var i = this;
      return this._createChannelConnection(r).then(function(o) {
        return o._release = function() {
          return n(r, o);
        }, i._openConnections[o.id] = o, o.connect(i._userAgent, i._authToken).catch(function(a) {
          throw i._destroyConnection(o), a;
        });
      });
    }, t.prototype._validateConnection = function(r) {
      if (!r.isOpen())
        return !1;
      var n = this._config.maxConnectionLifetime, i = Date.now() - r.creationTimestamp;
      return i <= n;
    }, t.prototype._destroyConnection = function(r) {
      return delete this._openConnections[r.id], r.close();
    }, t.prototype._verifyConnectivityAndGetServerVersion = function(r) {
      var n = r.address;
      return E_(this, void 0, void 0, function() {
        var i, o;
        return S_(this, function(a) {
          switch (a.label) {
            case 0:
              return [4, this._connectionPool.acquire(n)];
            case 1:
              i = a.sent(), o = new Of.ServerInfo(i.server, i.protocol().version), a.label = 2;
            case 2:
              return a.trys.push([2, , 5, 7]), i.protocol().isLastMessageLogin() ? [3, 4] : [4, i.resetAndFlush()];
            case 3:
              a.sent(), a.label = 4;
            case 4:
              return [3, 7];
            case 5:
              return [4, i._release()];
            case 6:
              return a.sent(), [
                7
                /*endfinally*/
              ];
            case 7:
              return [2, o];
          }
        });
      });
    }, t.prototype.close = function() {
      return E_(this, void 0, void 0, function() {
        return S_(this, function(r) {
          switch (r.label) {
            case 0:
              return [
                4,
                this._connectionPool.close()
                // then close all connections driver has ever created
                // it is needed to close connections that are active right now and are acquired from the pool
              ];
            case 1:
              return r.sent(), [4, Promise.all(Object.values(this._openConnections).map(function(n) {
                return n.close();
              }))];
            case 2:
              return r.sent(), [
                2
                /*return*/
              ];
          }
        });
      });
    }, t._installIdleObserverOnConnection = function(r, n) {
      r._queueObserver(n);
    }, t._removeIdleObserverOnConnection = function(r) {
      r._updateCurrentObserver();
    }, t;
  }(Of.ConnectionProvider)
);
Ka.default = i8;
var Ad = {}, o8 = d && d.__extends || function() {
  var e = function(t, r) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var o in i)
        Object.prototype.hasOwnProperty.call(i, o) && (n[o] = i[o]);
    }, e(t, r);
  };
  return function(t, r) {
    if (typeof r != "function" && r !== null)
      throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
    e(t, r);
    function n() {
      this.constructor = t;
    }
    t.prototype = r === null ? Object.create(r) : (n.prototype = r.prototype, new n());
  };
}(), vi = d && d.__awaiter || function(e, t, r, n) {
  function i(o) {
    return o instanceof r ? o : new r(function(a) {
      a(o);
    });
  }
  return new (r || (r = Promise))(function(o, a) {
    function s(l) {
      try {
        u(n.next(l));
      } catch (v) {
        a(v);
      }
    }
    function c(l) {
      try {
        u(n.throw(l));
      } catch (v) {
        a(v);
      }
    }
    function u(l) {
      l.done ? o(l.value) : i(l.value).then(s, c);
    }
    u((n = n.apply(e, t || [])).next());
  });
}, _i = d && d.__generator || function(e, t) {
  var r = { label: 0, sent: function() {
    if (o[0] & 1)
      throw o[1];
    return o[1];
  }, trys: [], ops: [] }, n, i, o, a;
  return a = { next: s(0), throw: s(1), return: s(2) }, typeof Symbol == "function" && (a[Symbol.iterator] = function() {
    return this;
  }), a;
  function s(u) {
    return function(l) {
      return c([u, l]);
    };
  }
  function c(u) {
    if (n)
      throw new TypeError("Generator is already executing.");
    for (; a && (a = 0, u[0] && (r = 0)), r; )
      try {
        if (n = 1, i && (o = u[0] & 2 ? i.return : u[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, u[1])).done)
          return o;
        switch (i = 0, o && (u = [u[0] & 2, o.value]), u[0]) {
          case 0:
          case 1:
            o = u;
            break;
          case 4:
            return r.label++, { value: u[1], done: !1 };
          case 5:
            r.label++, i = u[1], u = [0];
            continue;
          case 7:
            u = r.ops.pop(), r.trys.pop();
            continue;
          default:
            if (o = r.trys, !(o = o.length > 0 && o[o.length - 1]) && (u[0] === 6 || u[0] === 2)) {
              r = 0;
              continue;
            }
            if (u[0] === 3 && (!o || u[1] > o[0] && u[1] < o[3])) {
              r.label = u[1];
              break;
            }
            if (u[0] === 6 && r.label < o[1]) {
              r.label = o[1], o = u;
              break;
            }
            if (o && r.label < o[2]) {
              r.label = o[2], r.ops.push(u);
              break;
            }
            o[2] && r.ops.pop(), r.trys.pop();
            continue;
        }
        u = t.call(e, r);
      } catch (l) {
        u = [6, l], i = 0;
      } finally {
        n = o = 0;
      }
    if (u[0] & 5)
      throw u[1];
    return { value: u[0] ? u[1] : void 0, done: !0 };
  }
}, a8 = d && d.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(Ad, "__esModule", { value: !0 });
var u8 = a8(Ka), xl = Oc, pb = ee, Rd = pb.internal.constants, s8 = Rd.BOLT_PROTOCOL_V3, c8 = Rd.BOLT_PROTOCOL_V4_0, l8 = Rd.BOLT_PROTOCOL_V4_4, f8 = pb.error.SERVICE_UNAVAILABLE, d8 = (
  /** @class */
  function(e) {
    o8(t, e);
    function t(r) {
      var n = r.id, i = r.config, o = r.log, a = r.address, s = r.userAgent, c = r.authToken, u = e.call(this, { id: n, config: i, log: o, userAgent: s, authToken: c }) || this;
      return u._address = a, u;
    }
    return t.prototype.acquireConnection = function(r) {
      var n = this, i = r === void 0 ? {} : r;
      i.accessMode;
      var o = i.database;
      i.bookmarks;
      var a = xl.ConnectionErrorHandler.create({
        errorCode: f8,
        handleAuthorizationExpired: function(s, c) {
          return n._handleAuthorizationExpired(s, c, o);
        }
      });
      return this._connectionPool.acquire(this._address).then(function(s) {
        return new xl.DelegateConnection(s, a);
      });
    }, t.prototype._handleAuthorizationExpired = function(r, n, i) {
      return this._log.warn("Direct driver ".concat(this._id, " will close connection to ").concat(n, " for database '").concat(i, "' because of an error ").concat(r.code, " '").concat(r.message, "'")), this._connectionPool.purge(n).catch(function() {
      }), r;
    }, t.prototype._hasProtocolVersion = function(r) {
      return vi(this, void 0, void 0, function() {
        var n, i;
        return _i(this, function(o) {
          switch (o.label) {
            case 0:
              return [4, (0, xl.createChannelConnection)(this._address, this._config, this._createConnectionErrorHandler(), this._log)];
            case 1:
              return n = o.sent(), i = n.protocol() ? n.protocol().version : null, [4, n.close()];
            case 2:
              return o.sent(), i ? [2, r(i)] : [2, !1];
          }
        });
      });
    }, t.prototype.supportsMultiDb = function() {
      return vi(this, void 0, void 0, function() {
        return _i(this, function(r) {
          switch (r.label) {
            case 0:
              return [4, this._hasProtocolVersion(function(n) {
                return n >= c8;
              })];
            case 1:
              return [2, r.sent()];
          }
        });
      });
    }, t.prototype.getNegotiatedProtocolVersion = function() {
      var r = this;
      return new Promise(function(n, i) {
        r._hasProtocolVersion(n).catch(i);
      });
    }, t.prototype.supportsTransactionConfig = function() {
      return vi(this, void 0, void 0, function() {
        return _i(this, function(r) {
          switch (r.label) {
            case 0:
              return [4, this._hasProtocolVersion(function(n) {
                return n >= s8;
              })];
            case 1:
              return [2, r.sent()];
          }
        });
      });
    }, t.prototype.supportsUserImpersonation = function() {
      return vi(this, void 0, void 0, function() {
        return _i(this, function(r) {
          switch (r.label) {
            case 0:
              return [4, this._hasProtocolVersion(function(n) {
                return n >= l8;
              })];
            case 1:
              return [2, r.sent()];
          }
        });
      });
    }, t.prototype.verifyConnectivityAndGetServerInfo = function() {
      return vi(this, void 0, void 0, function() {
        return _i(this, function(r) {
          switch (r.label) {
            case 0:
              return [4, this._verifyConnectivityAndGetServerVersion({ address: this._address })];
            case 1:
              return [2, r.sent()];
          }
        });
      });
    }, t;
  }(u8.default)
);
Ad.default = d8;
var Cd = {}, Vt = {}, jd = {}, ni = {}, Wl = d && d.__read || function(e, t) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r)
    return e;
  var n = r.call(e), i, o = [], a;
  try {
    for (; (t === void 0 || t-- > 0) && !(i = n.next()).done; )
      o.push(i.value);
  } catch (s) {
    a = { error: s };
  } finally {
    try {
      i && !i.done && (r = n.return) && r.call(n);
    } finally {
      if (a)
        throw a.error;
    }
  }
  return o;
}, Vl = d && d.__spreadArray || function(e, t, r) {
  if (r || arguments.length === 2)
    for (var n = 0, i = t.length, o; n < i; n++)
      (o || !(n in t)) && (o || (o = Array.prototype.slice.call(t, 0, n)), o[n] = t[n]);
  return e.concat(o || Array.prototype.slice.call(t));
};
Object.defineProperty(ni, "__esModule", { value: !0 });
ni.createValidRoutingTable = void 0;
var ur = ee, mb = ur.internal.constants, h8 = mb.ACCESS_MODE_WRITE, v8 = mb.ACCESS_MODE_READ, ql = ur.internal.serverAddress.ServerAddress, Nd = ur.error.PROTOCOL_ERROR, _8 = 1, yb = (
  /** @class */
  function() {
    function e(t) {
      var r = t === void 0 ? {} : t, n = r.database, i = r.routers, o = r.readers, a = r.writers, s = r.expirationTime, c = r.ttl;
      this.database = n || null, this.databaseName = n || "default database", this.routers = i || [], this.readers = o || [], this.writers = a || [], this.expirationTime = s || (0, ur.int)(0), this.ttl = c;
    }
    return e.fromRawRoutingTable = function(t, r, n) {
      return bb(t, r, n);
    }, e.prototype.forget = function(t) {
      this.readers = pu(this.readers, t), this.writers = pu(this.writers, t);
    }, e.prototype.forgetRouter = function(t) {
      this.routers = pu(this.routers, t);
    }, e.prototype.forgetWriter = function(t) {
      this.writers = pu(this.writers, t);
    }, e.prototype.isStaleFor = function(t) {
      return this.expirationTime.lessThan(Date.now()) || this.routers.length < _8 || t === v8 && this.readers.length === 0 || t === h8 && this.writers.length === 0;
    }, e.prototype.isExpiredFor = function(t) {
      return this.expirationTime.add(t).lessThan(Date.now());
    }, e.prototype.allServers = function() {
      return Vl(Vl(Vl([], Wl(this.routers), !1), Wl(this.readers), !1), Wl(this.writers), !1);
    }, e.prototype.toString = function() {
      return "RoutingTable[" + "database=".concat(this.databaseName, ", ") + "expirationTime=".concat(this.expirationTime, ", ") + "currentTime=".concat(Date.now(), ", ") + "routers=[".concat(this.routers, "], ") + "readers=[".concat(this.readers, "], ") + "writers=[".concat(this.writers, "]]");
    }, e;
  }()
);
ni.default = yb;
function pu(e, t) {
  return e.filter(function(r) {
    return r.asKey() !== t.asKey();
  });
}
function bb(e, t, r) {
  var n = r.ttl, i = m8(r, t), o = p8(r, t), a = o.routers, s = o.readers, c = o.writers;
  return I_(a, "routers", t), I_(s, "readers", t), new yb({
    database: e || r.db,
    routers: a,
    readers: s,
    writers: c,
    expirationTime: i,
    ttl: n
  });
}
ni.createValidRoutingTable = bb;
function p8(e, t) {
  try {
    var r = [], n = [], i = [];
    return e.servers.forEach(function(o) {
      var a = o.role, s = o.addresses;
      a === "ROUTE" ? r = Hl(s).map(function(c) {
        return ql.fromUrl(c);
      }) : a === "WRITE" ? i = Hl(s).map(function(c) {
        return ql.fromUrl(c);
      }) : a === "READ" && (n = Hl(s).map(function(c) {
        return ql.fromUrl(c);
      }));
    }), {
      routers: r,
      readers: n,
      writers: i
    };
  } catch (o) {
    throw (0, ur.newError)("Unable to parse servers entry from router ".concat(t, ` from addresses:
`).concat(ur.json.stringify(e.servers), `
Error message: `).concat(o.message), Nd);
  }
}
function m8(e, t) {
  try {
    var r = (0, ur.int)(Date.now()), n = (0, ur.int)(e.ttl).multiply(1e3).add(r);
    return n.lessThan(r) ? ur.Integer.MAX_VALUE : n;
  } catch (i) {
    throw (0, ur.newError)("Unable to parse TTL entry from router ".concat(t, ` from raw routing table:
`).concat(ur.json.stringify(e), `
Error message: `).concat(i.message), Nd);
  }
}
function I_(e, t, r) {
  if (e.length === 0)
    throw (0, ur.newError)("Received no " + t + " from router " + r, Nd);
}
function Hl(e) {
  if (!Array.isArray(e))
    throw new TypeError("Array expected but got: " + e);
  return Array.from(e);
}
var y8 = d && d.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(jd, "__esModule", { value: !0 });
var b8 = y8(ni), g8 = (
  /** @class */
  function() {
    function e(t) {
      this._routingContext = t;
    }
    return e.prototype.lookupRoutingTableOnRouter = function(t, r, n, i) {
      var o = this;
      return t._acquireConnection(function(a) {
        return o._requestRawRoutingTable(a, t, r, n, i).then(function(s) {
          return s.isNull ? null : b8.default.fromRawRoutingTable(r, n, s);
        });
      });
    }, e.prototype._requestRawRoutingTable = function(t, r, n, i, o) {
      var a = this;
      return new Promise(function(s, c) {
        t.protocol().requestRoutingInformation({
          routingContext: a._routingContext,
          databaseName: n,
          impersonatedUser: o,
          sessionContext: {
            bookmarks: r._lastBookmarks,
            mode: r._mode,
            database: r._database,
            afterComplete: r._onComplete
          },
          onCompleted: s,
          onError: c
        });
      });
    }, e;
  }()
);
jd.default = g8;
var gb = d && d.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(Vt, "__esModule", { value: !0 });
Vt.RoutingTable = Vt.Rediscovery = void 0;
var Ob = gb(jd);
Vt.Rediscovery = Ob.default;
var O8 = gb(ni);
Vt.RoutingTable = O8.default;
Vt.default = Ob.default;
var w8 = d && d.__extends || function() {
  var e = function(t, r) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var o in i)
        Object.prototype.hasOwnProperty.call(i, o) && (n[o] = i[o]);
    }, e(t, r);
  };
  return function(t, r) {
    if (typeof r != "function" && r !== null)
      throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
    e(t, r);
    function n() {
      this.constructor = t;
    }
    t.prototype = r === null ? Object.create(r) : (n.prototype = r.prototype, new n());
  };
}(), Wu = d && d.__assign || function() {
  return Wu = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var i in t)
        Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
    }
    return e;
  }, Wu.apply(this, arguments);
}, E8 = d && d.__createBinding || (Object.create ? function(e, t, r, n) {
  n === void 0 && (n = r);
  var i = Object.getOwnPropertyDescriptor(t, r);
  (!i || ("get" in i ? !t.__esModule : i.writable || i.configurable)) && (i = { enumerable: !0, get: function() {
    return t[r];
  } }), Object.defineProperty(e, n, i);
} : function(e, t, r, n) {
  n === void 0 && (n = r), e[n] = t[r];
}), S8 = d && d.__setModuleDefault || (Object.create ? function(e, t) {
  Object.defineProperty(e, "default", { enumerable: !0, value: t });
} : function(e, t) {
  e.default = t;
}), T8 = d && d.__importStar || function(e) {
  if (e && e.__esModule)
    return e;
  var t = {};
  if (e != null)
    for (var r in e)
      r !== "default" && Object.prototype.hasOwnProperty.call(e, r) && E8(t, e, r);
  return S8(t, e), t;
}, ze = d && d.__awaiter || function(e, t, r, n) {
  function i(o) {
    return o instanceof r ? o : new r(function(a) {
      a(o);
    });
  }
  return new (r || (r = Promise))(function(o, a) {
    function s(l) {
      try {
        u(n.next(l));
      } catch (v) {
        a(v);
      }
    }
    function c(l) {
      try {
        u(n.throw(l));
      } catch (v) {
        a(v);
      }
    }
    function u(l) {
      l.done ? o(l.value) : i(l.value).then(s, c);
    }
    u((n = n.apply(e, t || [])).next());
  });
}, Ye = d && d.__generator || function(e, t) {
  var r = { label: 0, sent: function() {
    if (o[0] & 1)
      throw o[1];
    return o[1];
  }, trys: [], ops: [] }, n, i, o, a;
  return a = { next: s(0), throw: s(1), return: s(2) }, typeof Symbol == "function" && (a[Symbol.iterator] = function() {
    return this;
  }), a;
  function s(u) {
    return function(l) {
      return c([u, l]);
    };
  }
  function c(u) {
    if (n)
      throw new TypeError("Generator is already executing.");
    for (; a && (a = 0, u[0] && (r = 0)), r; )
      try {
        if (n = 1, i && (o = u[0] & 2 ? i.return : u[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, u[1])).done)
          return o;
        switch (i = 0, o && (u = [u[0] & 2, o.value]), u[0]) {
          case 0:
          case 1:
            o = u;
            break;
          case 4:
            return r.label++, { value: u[1], done: !1 };
          case 5:
            r.label++, i = u[1], u = [0];
            continue;
          case 7:
            u = r.ops.pop(), r.trys.pop();
            continue;
          default:
            if (o = r.trys, !(o = o.length > 0 && o[o.length - 1]) && (u[0] === 6 || u[0] === 2)) {
              r = 0;
              continue;
            }
            if (u[0] === 3 && (!o || u[1] > o[0] && u[1] < o[3])) {
              r.label = u[1];
              break;
            }
            if (u[0] === 6 && r.label < o[1]) {
              r.label = o[1], o = u;
              break;
            }
            if (o && r.label < o[2]) {
              r.label = o[2], r.ops.push(u);
              break;
            }
            o[2] && r.ops.pop(), r.trys.pop();
            continue;
        }
        u = t.call(e, r);
      } catch (l) {
        u = [6, l], i = 0;
      } finally {
        n = o = 0;
      }
    if (u[0] & 5)
      throw u[1];
    return { value: u[0] ? u[1] : void 0, done: !0 };
  }
}, wf = d && d.__values || function(e) {
  var t = typeof Symbol == "function" && Symbol.iterator, r = t && e[t], n = 0;
  if (r)
    return r.call(e);
  if (e && typeof e.length == "number")
    return {
      next: function() {
        return e && n >= e.length && (e = void 0), { value: e && e[n++], done: !e };
      }
    };
  throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, kr = d && d.__read || function(e, t) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r)
    return e;
  var n = r.call(e), i, o = [], a;
  try {
    for (; (t === void 0 || t-- > 0) && !(i = n.next()).done; )
      o.push(i.value);
  } catch (s) {
    a = { error: s };
  } finally {
    try {
      i && !i.done && (r = n.return) && r.call(n);
    } finally {
      if (a)
        throw a.error;
    }
  }
  return o;
}, wb = d && d.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(Cd, "__esModule", { value: !0 });
var Je = ee, A_ = T8(Vt), P8 = Jn, I8 = wb(gc), A8 = wb(Ka), R8 = nt, It = Oc, zl = Je.error.SERVICE_UNAVAILABLE, pi = Je.error.SESSION_EXPIRED, C8 = Je.internal.bookmarks.Bookmarks, Qa = Je.internal.constants, R_ = Qa.ACCESS_MODE_READ, Yl = Qa.ACCESS_MODE_WRITE, j8 = Qa.BOLT_PROTOCOL_V3, N8 = Qa.BOLT_PROTOCOL_V4_0, $8 = Qa.BOLT_PROTOCOL_V4_4, M8 = "Neo.ClientError.Procedure.ProcedureNotFound", k8 = "Neo.ClientError.Database.DatabaseNotFound", D8 = "Neo.ClientError.Transaction.InvalidBookmark", U8 = "Neo.ClientError.Transaction.InvalidBookmarkMixture", L8 = "Neo.ClientError.Security.AuthorizationExpired", F8 = "Neo.ClientError.Statement.ArgumentError", B8 = "Neo.ClientError.Request.Invalid", x8 = "Neo.ClientError.Statement.TypeError", W8 = "system", mu = null, V8 = (0, Je.int)(3e4), q8 = (
  /** @class */
  function(e) {
    w8(t, e);
    function t(r) {
      var n = r.id, i = r.address, o = r.routingContext, a = r.hostNameResolver, s = r.config, c = r.log, u = r.userAgent, l = r.authToken, v = r.routingTablePurgeDelay, y = e.call(this, { id: n, config: s, log: c, userAgent: u, authToken: l }, function(g) {
        return (0, It.createChannelConnection)(g, y._config, y._createConnectionErrorHandler(), y._log, y._routingContext);
      }) || this;
      return y._routingContext = Wu(Wu({}, o), { address: i.toString() }), y._seedRouter = i, y._rediscovery = new A_.default(y._routingContext), y._loadBalancingStrategy = new R8.LeastConnectedLoadBalancingStrategy(y._connectionPool), y._hostNameResolver = a, y._dnsResolver = new P8.HostNameResolver(), y._log = c, y._useSeedRouter = !0, y._routingTableRegistry = new H8(v ? (0, Je.int)(v) : V8), y;
    }
    return t.prototype._createConnectionErrorHandler = function() {
      return new It.ConnectionErrorHandler(pi);
    }, t.prototype._handleUnavailability = function(r, n, i) {
      return this._log.warn("Routing driver ".concat(this._id, " will forget ").concat(n, " for database '").concat(i, "' because of an error ").concat(r.code, " '").concat(r.message, "'")), this.forget(n, i || mu), r;
    }, t.prototype._handleAuthorizationExpired = function(r, n, i) {
      return this._log.warn("Routing driver ".concat(this._id, " will close connections to ").concat(n, " for database '").concat(i, "' because of an error ").concat(r.code, " '").concat(r.message, "'")), this._connectionPool.purge(n).catch(function() {
      }), r;
    }, t.prototype._handleWriteFailure = function(r, n, i) {
      return this._log.warn("Routing driver ".concat(this._id, " will forget writer ").concat(n, " for database '").concat(i, "' because of an error ").concat(r.code, " '").concat(r.message, "'")), this.forgetWriter(n, i || mu), (0, Je.newError)("No longer possible to write to server at " + n, pi, r);
    }, t.prototype.acquireConnection = function(r) {
      var n = r === void 0 ? {} : r, i = n.accessMode, o = n.database, a = n.bookmarks, s = n.impersonatedUser, c = n.onDatabaseNameResolved;
      return ze(this, void 0, void 0, function() {
        var u, l, v, y, g, E, S, C, R = this;
        return Ye(this, function($) {
          switch ($.label) {
            case 0:
              return v = { database: o || mu }, y = new It.ConnectionErrorHandler(pi, function(U, D) {
                return R._handleUnavailability(U, D, v.database);
              }, function(U, D) {
                return R._handleWriteFailure(U, D, v.database);
              }, function(U, D) {
                return R._handleAuthorizationExpired(U, D, v.database);
              }), [
                4,
                this._freshRoutingTable({
                  accessMode: i,
                  database: v.database,
                  bookmarks: a,
                  impersonatedUser: s,
                  onDatabaseNameResolved: function(U) {
                    v.database = v.database || U, c && c(U);
                  }
                })
                // select a target server based on specified access mode
              ];
            case 1:
              if (g = $.sent(), i === R_)
                l = this._loadBalancingStrategy.selectReader(g.readers), u = "read";
              else if (i === Yl)
                l = this._loadBalancingStrategy.selectWriter(g.writers), u = "write";
              else
                throw (0, Je.newError)("Illegal mode " + i);
              if (!l)
                throw (0, Je.newError)("Failed to obtain connection towards ".concat(u, " server. Known routing table is: ").concat(g), pi);
              $.label = 2;
            case 2:
              return $.trys.push([2, 4, , 5]), [4, this._acquireConnectionToServer(l, u, g)];
            case 3:
              return E = $.sent(), [2, new It.DelegateConnection(E, y)];
            case 4:
              throw S = $.sent(), C = y.handleAndTransformError(S, l), C;
            case 5:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, t.prototype._hasProtocolVersion = function(r) {
      return ze(this, void 0, void 0, function() {
        var n, i, o, a, s, c;
        return Ye(this, function(u) {
          switch (u.label) {
            case 0:
              return [4, this._resolveSeedRouter(this._seedRouter)];
            case 1:
              n = u.sent(), o = 0, u.label = 2;
            case 2:
              if (!(o < n.length))
                return [3, 8];
              u.label = 3;
            case 3:
              return u.trys.push([3, 6, , 7]), [4, (0, It.createChannelConnection)(n[o], this._config, this._createConnectionErrorHandler(), this._log)];
            case 4:
              return a = u.sent(), s = a.protocol() ? a.protocol().version : null, [4, a.close()];
            case 5:
              return u.sent(), s ? [2, r(s)] : [2, !1];
            case 6:
              return c = u.sent(), i = c, [3, 7];
            case 7:
              return o++, [3, 2];
            case 8:
              if (i)
                throw i;
              return [2, !1];
          }
        });
      });
    }, t.prototype.supportsMultiDb = function() {
      return ze(this, void 0, void 0, function() {
        return Ye(this, function(r) {
          switch (r.label) {
            case 0:
              return [4, this._hasProtocolVersion(function(n) {
                return n >= N8;
              })];
            case 1:
              return [2, r.sent()];
          }
        });
      });
    }, t.prototype.supportsTransactionConfig = function() {
      return ze(this, void 0, void 0, function() {
        return Ye(this, function(r) {
          switch (r.label) {
            case 0:
              return [4, this._hasProtocolVersion(function(n) {
                return n >= j8;
              })];
            case 1:
              return [2, r.sent()];
          }
        });
      });
    }, t.prototype.supportsUserImpersonation = function() {
      return ze(this, void 0, void 0, function() {
        return Ye(this, function(r) {
          switch (r.label) {
            case 0:
              return [4, this._hasProtocolVersion(function(n) {
                return n >= $8;
              })];
            case 1:
              return [2, r.sent()];
          }
        });
      });
    }, t.prototype.getNegotiatedProtocolVersion = function() {
      var r = this;
      return new Promise(function(n, i) {
        r._hasProtocolVersion(n).catch(i);
      });
    }, t.prototype.verifyConnectivityAndGetServerInfo = function(r) {
      var n = r.database, i = r.accessMode;
      return ze(this, void 0, void 0, function() {
        var o, a, s, c, u, l, v, y, g, E, S, C;
        return Ye(this, function(R) {
          switch (R.label) {
            case 0:
              return o = { database: n || mu }, [4, this._freshRoutingTable({
                accessMode: i,
                database: o.database,
                onDatabaseNameResolved: function($) {
                  o.database = o.database || $;
                }
              })];
            case 1:
              a = R.sent(), s = i === Yl ? a.writers : a.readers, c = (0, Je.newError)("No servers available for database '".concat(o.database, "' with access mode '").concat(i, "'"), zl), R.label = 2;
            case 2:
              R.trys.push([2, 9, 10, 11]), u = wf(s), l = u.next(), R.label = 3;
            case 3:
              if (l.done)
                return [3, 8];
              v = l.value, R.label = 4;
            case 4:
              return R.trys.push([4, 6, , 7]), [4, this._verifyConnectivityAndGetServerVersion({ address: v })];
            case 5:
              return y = R.sent(), [2, y];
            case 6:
              return g = R.sent(), c = g, [3, 7];
            case 7:
              return l = u.next(), [3, 3];
            case 8:
              return [3, 11];
            case 9:
              return E = R.sent(), S = { error: E }, [3, 11];
            case 10:
              try {
                l && !l.done && (C = u.return) && C.call(u);
              } finally {
                if (S)
                  throw S.error;
              }
              return [
                7
                /*endfinally*/
              ];
            case 11:
              throw c;
          }
        });
      });
    }, t.prototype.forget = function(r, n) {
      this._routingTableRegistry.apply(n, {
        applyWhenExists: function(i) {
          return i.forget(r);
        }
      }), this._connectionPool.purge(r).catch(function() {
      });
    }, t.prototype.forgetWriter = function(r, n) {
      this._routingTableRegistry.apply(n, {
        applyWhenExists: function(i) {
          return i.forgetWriter(r);
        }
      });
    }, t.prototype._acquireConnectionToServer = function(r, n, i) {
      return this._connectionPool.acquire(r);
    }, t.prototype._freshRoutingTable = function(r) {
      var n = r === void 0 ? {} : r, i = n.accessMode, o = n.database, a = n.bookmarks, s = n.impersonatedUser, c = n.onDatabaseNameResolved, u = this._routingTableRegistry.get(o, function() {
        return new A_.RoutingTable({ database: o });
      });
      return u.isStaleFor(i) ? (this._log.info('Routing table is stale for database: "'.concat(o, '" and access mode: "').concat(i, '": ').concat(u)), this._refreshRoutingTable(u, a, s, c)) : u;
    }, t.prototype._refreshRoutingTable = function(r, n, i, o) {
      var a = r.routers;
      return this._useSeedRouter ? this._fetchRoutingTableFromSeedRouterFallbackToKnownRouters(a, r, n, i, o) : this._fetchRoutingTableFromKnownRoutersFallbackToSeedRouter(a, r, n, i, o);
    }, t.prototype._fetchRoutingTableFromSeedRouterFallbackToKnownRouters = function(r, n, i, o, a) {
      return ze(this, void 0, void 0, function() {
        var s, c, u, l, v, y, g;
        return Ye(this, function(E) {
          switch (E.label) {
            case 0:
              return s = [], [4, this._fetchRoutingTableUsingSeedRouter(s, this._seedRouter, n, i, o)];
            case 1:
              return c = kr.apply(void 0, [E.sent(), 2]), u = c[0], l = c[1], u ? (this._useSeedRouter = !1, [3, 4]) : [3, 2];
            case 2:
              return [4, this._fetchRoutingTableUsingKnownRouters(r, n, i, o)];
            case 3:
              v = kr.apply(void 0, [E.sent(), 2]), y = v[0], g = v[1], u = y, l = g || l, E.label = 4;
            case 4:
              return [4, this._applyRoutingTableIfPossible(n, u, a, l)];
            case 5:
              return [2, E.sent()];
          }
        });
      });
    }, t.prototype._fetchRoutingTableFromKnownRoutersFallbackToSeedRouter = function(r, n, i, o, a) {
      return ze(this, void 0, void 0, function() {
        var s, c, u, l;
        return Ye(this, function(v) {
          switch (v.label) {
            case 0:
              return [4, this._fetchRoutingTableUsingKnownRouters(r, n, i, o)];
            case 1:
              return s = kr.apply(void 0, [v.sent(), 2]), c = s[0], u = s[1], c ? [3, 3] : [4, this._fetchRoutingTableUsingSeedRouter(r, this._seedRouter, n, i, o)];
            case 2:
              l = kr.apply(void 0, [v.sent(), 2]), c = l[0], u = l[1], v.label = 3;
            case 3:
              return [4, this._applyRoutingTableIfPossible(n, c, a, u)];
            case 4:
              return [2, v.sent()];
          }
        });
      });
    }, t.prototype._fetchRoutingTableUsingKnownRouters = function(r, n, i, o) {
      return ze(this, void 0, void 0, function() {
        var a, s, c, u;
        return Ye(this, function(l) {
          switch (l.label) {
            case 0:
              return [4, this._fetchRoutingTable(r, n, i, o)];
            case 1:
              return a = kr.apply(void 0, [l.sent(), 2]), s = a[0], c = a[1], s ? [2, [s, null]] : (u = r.length - 1, t._forgetRouter(n, r, u), [2, [null, c]]);
          }
        });
      });
    }, t.prototype._fetchRoutingTableUsingSeedRouter = function(r, n, i, o, a) {
      return ze(this, void 0, void 0, function() {
        var s, c;
        return Ye(this, function(u) {
          switch (u.label) {
            case 0:
              return [
                4,
                this._resolveSeedRouter(n)
                // filter out all addresses that we've already tried
              ];
            case 1:
              return s = u.sent(), c = s.filter(function(l) {
                return r.indexOf(l) < 0;
              }), [4, this._fetchRoutingTable(c, i, o, a)];
            case 2:
              return [2, u.sent()];
          }
        });
      });
    }, t.prototype._resolveSeedRouter = function(r) {
      return ze(this, void 0, void 0, function() {
        var n, i, o = this;
        return Ye(this, function(a) {
          switch (a.label) {
            case 0:
              return [4, this._hostNameResolver.resolve(r)];
            case 1:
              return n = a.sent(), [4, Promise.all(n.map(function(s) {
                return o._dnsResolver.resolve(s);
              }))];
            case 2:
              return i = a.sent(), [2, [].concat.apply([], i)];
          }
        });
      });
    }, t.prototype._fetchRoutingTable = function(r, n, i, o) {
      return ze(this, void 0, void 0, function() {
        var a = this;
        return Ye(this, function(s) {
          return [2, r.reduce(function(c, u, l) {
            return ze(a, void 0, void 0, function() {
              var v, y, g, E, S, C, R;
              return Ye(this, function($) {
                switch ($.label) {
                  case 0:
                    return [4, c];
                  case 1:
                    return v = kr.apply(void 0, [$.sent(), 1]), y = v[0], y ? [2, [y, null]] : (g = l - 1, t._forgetRouter(n, r, g), [4, this._createSessionForRediscovery(u, i, o)]);
                  case 2:
                    if (E = kr.apply(void 0, [$.sent(), 2]), S = E[0], C = E[1], !S)
                      return [3, 8];
                    $.label = 3;
                  case 3:
                    return $.trys.push([3, 5, 6, 7]), [4, this._rediscovery.lookupRoutingTableOnRouter(S, n.database, u, o)];
                  case 4:
                    return [2, [$.sent(), null]];
                  case 5:
                    return R = $.sent(), [2, this._handleRediscoveryError(R, u)];
                  case 6:
                    return S.close(), [
                      7
                      /*endfinally*/
                    ];
                  case 7:
                    return [3, 9];
                  case 8:
                    return [2, [null, C]];
                  case 9:
                    return [
                      2
                      /*return*/
                    ];
                }
              });
            });
          }, Promise.resolve([null, null]))];
        });
      });
    }, t.prototype._createSessionForRediscovery = function(r, n, i) {
      return ze(this, void 0, void 0, function() {
        var o, a, s, c, u, l = this;
        return Ye(this, function(v) {
          switch (v.label) {
            case 0:
              return v.trys.push([0, 2, , 3]), [4, this._connectionPool.acquire(r)];
            case 1:
              return o = v.sent(), a = It.ConnectionErrorHandler.create({
                errorCode: pi,
                handleAuthorizationExpired: function(y, g) {
                  return l._handleAuthorizationExpired(y, g);
                }
              }), s = new I8.default(new It.DelegateConnection(o, a)), c = o.protocol().version, c < 4 ? [2, [new Je.Session({
                mode: Yl,
                bookmarks: C8.empty(),
                connectionProvider: s
              }), null]] : [2, [new Je.Session({
                mode: R_,
                database: W8,
                bookmarks: n,
                connectionProvider: s,
                impersonatedUser: i
              }), null]];
            case 2:
              return u = v.sent(), [2, this._handleRediscoveryError(u, r)];
            case 3:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, t.prototype._handleRediscoveryError = function(r, n) {
      if (z8(r) || Y8(r))
        throw r;
      if (r.code === M8)
        throw (0, Je.newError)("Server at ".concat(n.asHostPort(), " can't perform routing. Make sure you are connecting to a causal cluster"), zl, r);
      return this._log.warn("unable to fetch routing table because of an error ".concat(r)), [null, r];
    }, t.prototype._applyRoutingTableIfPossible = function(r, n, i, o) {
      return ze(this, void 0, void 0, function() {
        return Ye(this, function(a) {
          switch (a.label) {
            case 0:
              if (!n)
                throw (0, Je.newError)("Could not perform discovery. No routing servers available. Known routing table: ".concat(r), zl, o);
              return n.writers.length === 0 && (this._useSeedRouter = !0), [4, this._updateRoutingTable(n, i)];
            case 1:
              return a.sent(), [2, n];
          }
        });
      });
    }, t.prototype._updateRoutingTable = function(r, n) {
      return ze(this, void 0, void 0, function() {
        return Ye(this, function(i) {
          switch (i.label) {
            case 0:
              return [4, this._connectionPool.keepAll(r.allServers())];
            case 1:
              return i.sent(), this._routingTableRegistry.removeExpired(), this._routingTableRegistry.register(r), n(r.database), this._log.info("Updated routing table ".concat(r)), [
                2
                /*return*/
              ];
          }
        });
      });
    }, t._forgetRouter = function(r, n, i) {
      var o = n[i];
      r && o && r.forgetRouter(o);
    }, t;
  }(A8.default)
);
Cd.default = q8;
var H8 = (
  /** @class */
  function() {
    function e(t) {
      this._tables = /* @__PURE__ */ new Map(), this._routingTablePurgeDelay = t;
    }
    return e.prototype.register = function(t) {
      return this._tables.set(t.database, t), this;
    }, e.prototype.apply = function(t, r) {
      var n = r === void 0 ? {} : r, i = n.applyWhenExists, o = n.applyWhenDontExists, a = o === void 0 ? function() {
      } : o;
      return this._tables.has(t) ? i(this._tables.get(t)) : typeof t == "string" || t === null ? a() : this._forEach(i), this;
    }, e.prototype.get = function(t, r) {
      return this._tables.has(t) ? this._tables.get(t) : typeof r == "function" ? r() : r;
    }, e.prototype.removeExpired = function() {
      var t = this;
      return this._removeIf(function(r) {
        return r.isExpiredFor(t._routingTablePurgeDelay);
      });
    }, e.prototype._forEach = function(t) {
      var r, n;
      try {
        for (var i = wf(this._tables), o = i.next(); !o.done; o = i.next()) {
          var a = kr(o.value, 2), s = a[1];
          t(s);
        }
      } catch (c) {
        r = { error: c };
      } finally {
        try {
          o && !o.done && (n = i.return) && n.call(i);
        } finally {
          if (r)
            throw r.error;
        }
      }
      return this;
    }, e.prototype._remove = function(t) {
      return this._tables.delete(t), this;
    }, e.prototype._removeIf = function(t) {
      var r, n;
      try {
        for (var i = wf(this._tables), o = i.next(); !o.done; o = i.next()) {
          var a = kr(o.value, 2), s = a[0], c = a[1];
          t(c) && this._remove(s);
        }
      } catch (u) {
        r = { error: u };
      } finally {
        try {
          o && !o.done && (n = i.return) && n.call(i);
        } finally {
          if (r)
            throw r.error;
        }
      }
      return this;
    }, e;
  }()
);
function z8(e) {
  return [
    k8,
    D8,
    U8,
    F8,
    B8,
    x8
  ].includes(e.code);
}
function Y8(e) {
  return e.code.startsWith("Neo.ClientError.Security.") && ![
    L8
  ].includes(e.code);
}
(function(e) {
  var t = d && d.__importDefault || function(a) {
    return a && a.__esModule ? a : { default: a };
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.RoutingConnectionProvider = e.DirectConnectionProvider = e.PooledConnectionProvider = e.SingleConnectionProvider = void 0;
  var r = gc;
  Object.defineProperty(e, "SingleConnectionProvider", { enumerable: !0, get: function() {
    return t(r).default;
  } });
  var n = Ka;
  Object.defineProperty(e, "PooledConnectionProvider", { enumerable: !0, get: function() {
    return t(n).default;
  } });
  var i = Ad;
  Object.defineProperty(e, "DirectConnectionProvider", { enumerable: !0, get: function() {
    return t(i).default;
  } });
  var o = Cd;
  Object.defineProperty(e, "RoutingConnectionProvider", { enumerable: !0, get: function() {
    return t(o).default;
  } });
})(db);
(function(e) {
  var t = d && d.__createBinding || (Object.create ? function(o, a, s, c) {
    c === void 0 && (c = s);
    var u = Object.getOwnPropertyDescriptor(a, s);
    (!u || ("get" in u ? !a.__esModule : u.writable || u.configurable)) && (u = { enumerable: !0, get: function() {
      return a[s];
    } }), Object.defineProperty(o, c, u);
  } : function(o, a, s, c) {
    c === void 0 && (c = s), o[c] = a[s];
  }), r = d && d.__setModuleDefault || (Object.create ? function(o, a) {
    Object.defineProperty(o, "default", { enumerable: !0, value: a });
  } : function(o, a) {
    o.default = a;
  }), n = d && d.__importStar || function(o) {
    if (o && o.__esModule)
      return o;
    var a = {};
    if (o != null)
      for (var s in o)
        s !== "default" && Object.prototype.hasOwnProperty.call(o, s) && t(a, o, s);
    return r(a, o), a;
  }, i = d && d.__exportStar || function(o, a) {
    for (var s in o)
      s !== "default" && !Object.prototype.hasOwnProperty.call(a, s) && t(a, o, s);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.pool = e.packstream = e.channel = e.buf = e.bolt = e.loadBalancing = void 0, e.loadBalancing = n(nt), e.bolt = n(Jf), e.buf = n(Jt), e.channel = n(Jn), e.packstream = n(Ge), e.pool = n(Sd), i(db, e);
})(Jm);
(function(e) {
  var t = d && d.__awaiter || function(he, se, V, J) {
    function re(H) {
      return H instanceof V ? H : new V(function(ce) {
        ce(H);
      });
    }
    return new (V || (V = Promise))(function(H, ce) {
      function Ne(Oe) {
        try {
          B(J.next(Oe));
        } catch (I) {
          ce(I);
        }
      }
      function G(Oe) {
        try {
          B(J.throw(Oe));
        } catch (I) {
          ce(I);
        }
      }
      function B(Oe) {
        Oe.done ? H(Oe.value) : re(Oe.value).then(Ne, G);
      }
      B((J = J.apply(he, se || [])).next());
    });
  }, r = d && d.__generator || function(he, se) {
    var V = { label: 0, sent: function() {
      if (H[0] & 1)
        throw H[1];
      return H[1];
    }, trys: [], ops: [] }, J, re, H, ce;
    return ce = { next: Ne(0), throw: Ne(1), return: Ne(2) }, typeof Symbol == "function" && (ce[Symbol.iterator] = function() {
      return this;
    }), ce;
    function Ne(B) {
      return function(Oe) {
        return G([B, Oe]);
      };
    }
    function G(B) {
      if (J)
        throw new TypeError("Generator is already executing.");
      for (; ce && (ce = 0, B[0] && (V = 0)), V; )
        try {
          if (J = 1, re && (H = B[0] & 2 ? re.return : B[0] ? re.throw || ((H = re.return) && H.call(re), 0) : re.next) && !(H = H.call(re, B[1])).done)
            return H;
          switch (re = 0, H && (B = [B[0] & 2, H.value]), B[0]) {
            case 0:
            case 1:
              H = B;
              break;
            case 4:
              return V.label++, { value: B[1], done: !1 };
            case 5:
              V.label++, re = B[1], B = [0];
              continue;
            case 7:
              B = V.ops.pop(), V.trys.pop();
              continue;
            default:
              if (H = V.trys, !(H = H.length > 0 && H[H.length - 1]) && (B[0] === 6 || B[0] === 2)) {
                V = 0;
                continue;
              }
              if (B[0] === 3 && (!H || B[1] > H[0] && B[1] < H[3])) {
                V.label = B[1];
                break;
              }
              if (B[0] === 6 && V.label < H[1]) {
                V.label = H[1], H = B;
                break;
              }
              if (H && V.label < H[2]) {
                V.label = H[2], V.ops.push(B);
                break;
              }
              H[2] && V.ops.pop(), V.trys.pop();
              continue;
          }
          B = se.call(he, V);
        } catch (Oe) {
          B = [6, Oe], re = 0;
        } finally {
          J = H = 0;
        }
      if (B[0] & 5)
        throw B[1];
      return { value: B[0] ? B[1] : void 0, done: !0 };
    }
  }, n = d && d.__importDefault || function(he) {
    return he && he.__esModule ? he : { default: he };
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.PathSegment = e.Path = e.UnboundRelationship = e.Relationship = e.Node = e.Record = e.ServerInfo = e.Notification = e.QueryStatistics = e.ProfiledPlan = e.Plan = e.ResultSummary = e.RxResult = e.RxManagedTransaction = e.RxTransaction = e.RxSession = e.EagerResult = e.Result = e.ManagedTransaction = e.Transaction = e.Session = e.Driver = e.temporal = e.spatial = e.graph = e.error = e.routing = e.session = e.types = e.logging = e.auth = e.isRetryableError = e.Neo4jError = e.integer = e.isUnboundRelationship = e.isRelationship = e.isPathSegment = e.isPath = e.isNode = e.isDateTime = e.isLocalDateTime = e.isDate = e.isTime = e.isLocalTime = e.isDuration = e.isPoint = e.isInt = e.int = e.hasReachableServer = e.driver = void 0, e.resultTransformers = e.bookmarkManager = e.DateTime = e.LocalDateTime = e.Date = e.Time = e.LocalTime = e.Duration = e.Integer = e.Point = void 0;
  var i = Fr;
  Object.defineProperty(e, "Driver", { enumerable: !0, get: function() {
    return i.Driver;
  } });
  var o = n(Gf), a = ee;
  Object.defineProperty(e, "Neo4jError", { enumerable: !0, get: function() {
    return a.Neo4jError;
  } }), Object.defineProperty(e, "isRetryableError", { enumerable: !0, get: function() {
    return a.isRetryableError;
  } }), Object.defineProperty(e, "error", { enumerable: !0, get: function() {
    return a.error;
  } }), Object.defineProperty(e, "Integer", { enumerable: !0, get: function() {
    return a.Integer;
  } }), Object.defineProperty(e, "int", { enumerable: !0, get: function() {
    return a.int;
  } }), Object.defineProperty(e, "isInt", { enumerable: !0, get: function() {
    return a.isInt;
  } }), Object.defineProperty(e, "isPoint", { enumerable: !0, get: function() {
    return a.isPoint;
  } }), Object.defineProperty(e, "Point", { enumerable: !0, get: function() {
    return a.Point;
  } }), Object.defineProperty(e, "Date", { enumerable: !0, get: function() {
    return a.Date;
  } }), Object.defineProperty(e, "DateTime", { enumerable: !0, get: function() {
    return a.DateTime;
  } }), Object.defineProperty(e, "Duration", { enumerable: !0, get: function() {
    return a.Duration;
  } }), Object.defineProperty(e, "isDate", { enumerable: !0, get: function() {
    return a.isDate;
  } }), Object.defineProperty(e, "isDateTime", { enumerable: !0, get: function() {
    return a.isDateTime;
  } }), Object.defineProperty(e, "isDuration", { enumerable: !0, get: function() {
    return a.isDuration;
  } }), Object.defineProperty(e, "isLocalDateTime", { enumerable: !0, get: function() {
    return a.isLocalDateTime;
  } }), Object.defineProperty(e, "isLocalTime", { enumerable: !0, get: function() {
    return a.isLocalTime;
  } }), Object.defineProperty(e, "isNode", { enumerable: !0, get: function() {
    return a.isNode;
  } }), Object.defineProperty(e, "isPath", { enumerable: !0, get: function() {
    return a.isPath;
  } }), Object.defineProperty(e, "isPathSegment", { enumerable: !0, get: function() {
    return a.isPathSegment;
  } }), Object.defineProperty(e, "isRelationship", { enumerable: !0, get: function() {
    return a.isRelationship;
  } }), Object.defineProperty(e, "isTime", { enumerable: !0, get: function() {
    return a.isTime;
  } }), Object.defineProperty(e, "isUnboundRelationship", { enumerable: !0, get: function() {
    return a.isUnboundRelationship;
  } }), Object.defineProperty(e, "LocalDateTime", { enumerable: !0, get: function() {
    return a.LocalDateTime;
  } }), Object.defineProperty(e, "LocalTime", { enumerable: !0, get: function() {
    return a.LocalTime;
  } }), Object.defineProperty(e, "Time", { enumerable: !0, get: function() {
    return a.Time;
  } }), Object.defineProperty(e, "Node", { enumerable: !0, get: function() {
    return a.Node;
  } }), Object.defineProperty(e, "Path", { enumerable: !0, get: function() {
    return a.Path;
  } }), Object.defineProperty(e, "PathSegment", { enumerable: !0, get: function() {
    return a.PathSegment;
  } }), Object.defineProperty(e, "Relationship", { enumerable: !0, get: function() {
    return a.Relationship;
  } }), Object.defineProperty(e, "UnboundRelationship", { enumerable: !0, get: function() {
    return a.UnboundRelationship;
  } }), Object.defineProperty(e, "Record", { enumerable: !0, get: function() {
    return a.Record;
  } }), Object.defineProperty(e, "ResultSummary", { enumerable: !0, get: function() {
    return a.ResultSummary;
  } }), Object.defineProperty(e, "Plan", { enumerable: !0, get: function() {
    return a.Plan;
  } }), Object.defineProperty(e, "ProfiledPlan", { enumerable: !0, get: function() {
    return a.ProfiledPlan;
  } }), Object.defineProperty(e, "QueryStatistics", { enumerable: !0, get: function() {
    return a.QueryStatistics;
  } }), Object.defineProperty(e, "Notification", { enumerable: !0, get: function() {
    return a.Notification;
  } }), Object.defineProperty(e, "ServerInfo", { enumerable: !0, get: function() {
    return a.ServerInfo;
  } }), Object.defineProperty(e, "Result", { enumerable: !0, get: function() {
    return a.Result;
  } }), Object.defineProperty(e, "EagerResult", { enumerable: !0, get: function() {
    return a.EagerResult;
  } }), Object.defineProperty(e, "auth", { enumerable: !0, get: function() {
    return a.auth;
  } }), Object.defineProperty(e, "Session", { enumerable: !0, get: function() {
    return a.Session;
  } }), Object.defineProperty(e, "Transaction", { enumerable: !0, get: function() {
    return a.Transaction;
  } }), Object.defineProperty(e, "ManagedTransaction", { enumerable: !0, get: function() {
    return a.ManagedTransaction;
  } }), Object.defineProperty(e, "bookmarkManager", { enumerable: !0, get: function() {
    return a.bookmarkManager;
  } }), Object.defineProperty(e, "routing", { enumerable: !0, get: function() {
    return a.routing;
  } }), Object.defineProperty(e, "resultTransformers", { enumerable: !0, get: function() {
    return a.resultTransformers;
  } });
  var s = Jm, c = n(ts);
  e.RxSession = c.default;
  var u = n(Fa);
  e.RxTransaction = u.default;
  var l = n(Fs);
  e.RxManagedTransaction = l.default;
  var v = n(Qn);
  e.RxResult = v.default;
  var y = a.internal.util, g = y.ENCRYPTION_ON, E = y.assertString, S = y.isEmptyObjectOrNull, C = a.internal.serverAddress.ServerAddress, R = a.internal.urlUtil;
  function $(he, se, V) {
    V === void 0 && (V = {}), E(he, "Bolt URL");
    var J = R.parseDatabaseUrl(he), re = !1, H = !1, ce;
    switch (J.scheme) {
      case "bolt":
        break;
      case "bolt+s":
        H = !0, ce = "TRUST_SYSTEM_CA_SIGNED_CERTIFICATES";
        break;
      case "bolt+ssc":
        H = !0, ce = "TRUST_ALL_CERTIFICATES";
        break;
      case "neo4j":
        re = !0;
        break;
      case "neo4j+s":
        H = !0, ce = "TRUST_SYSTEM_CA_SIGNED_CERTIFICATES", re = !0;
        break;
      case "neo4j+ssc":
        H = !0, ce = "TRUST_ALL_CERTIFICATES", re = !0;
        break;
      default:
        throw new Error("Unknown scheme: ".concat(J.scheme));
    }
    if (H) {
      if ("encrypted" in V || "trust" in V)
        throw new Error("Encryption/trust can only be configured either through URL or config, not both");
      V.encrypted = g, V.trust = ce;
    }
    se = se || {}, se.scheme = se.scheme || "none", V.userAgent = V.userAgent || D;
    var Ne = C.fromUrl(J.hostAndPort), G = {
      address: Ne,
      typename: re ? "Routing" : "Direct",
      routing: re
    };
    return new i.Driver(G, V, B());
    function B() {
      if (re)
        return function(Oe, I, M, W) {
          return new s.RoutingConnectionProvider({
            id: Oe,
            config: I,
            log: M,
            hostNameResolver: W,
            authToken: se,
            address: Ne,
            userAgent: I.userAgent,
            routingContext: J.query
          });
        };
      if (!S(J.query))
        throw new Error("Parameters are not supported with none routed scheme. Given URL: '".concat(he, "'"));
      return function(Oe, I, M) {
        return new s.DirectConnectionProvider({
          id: Oe,
          config: I,
          log: M,
          authToken: se,
          address: Ne,
          userAgent: I.userAgent
        });
      };
    }
  }
  e.driver = $;
  function U(he, se) {
    return t(this, void 0, void 0, function() {
      var V;
      return r(this, function(J) {
        switch (J.label) {
          case 0:
            V = $(he, { scheme: "none", principal: "", credentials: "" }, se), J.label = 1;
          case 1:
            return J.trys.push([1, , 3, 5]), [4, V.getNegotiatedProtocolVersion()];
          case 2:
            return J.sent(), [2, !0];
          case 3:
            return [4, V.close()];
          case 4:
            return J.sent(), [
              7
              /*endfinally*/
            ];
          case 5:
            return [
              2
              /*return*/
            ];
        }
      });
    });
  }
  e.hasReachableServer = U;
  var D = "neo4j-javascript/" + o.default, F = {
    console: function(he) {
      return {
        level: he,
        logger: function(se, V) {
          return console.log("".concat(d.Date.now(), " ").concat(se.toUpperCase(), " ").concat(V));
        }
      };
    }
  };
  e.logging = F;
  var K = {
    Node: a.Node,
    Relationship: a.Relationship,
    UnboundRelationship: a.UnboundRelationship,
    PathSegment: a.PathSegment,
    Path: a.Path,
    Result: a.Result,
    EagerResult: a.EagerResult,
    ResultSummary: a.ResultSummary,
    Record: a.Record,
    Point: a.Point,
    Date: a.Date,
    DateTime: a.DateTime,
    Duration: a.Duration,
    LocalDateTime: a.LocalDateTime,
    LocalTime: a.LocalTime,
    Time: a.Time,
    Integer: a.Integer
  };
  e.types = K;
  var X = {
    READ: i.READ,
    WRITE: i.WRITE
  };
  e.session = X;
  var oe = {
    toNumber: a.toNumber,
    toString: a.toString,
    inSafeRange: a.inSafeRange
  };
  e.integer = oe;
  var de = {
    isPoint: a.isPoint
  };
  e.spatial = de;
  var Ie = {
    isDuration: a.isDuration,
    isLocalTime: a.isLocalTime,
    isTime: a.isTime,
    isDate: a.isDate,
    isLocalDateTime: a.isLocalDateTime,
    isDateTime: a.isDateTime
  };
  e.temporal = Ie;
  var ge = {
    isNode: a.isNode,
    isPath: a.isPath,
    isPathSegment: a.isPathSegment,
    isRelationship: a.isRelationship,
    isUnboundRelationship: a.isUnboundRelationship
  };
  e.graph = ge;
  var Re = {
    driver: $,
    hasReachableServer: U,
    int: a.int,
    isInt: a.isInt,
    isPoint: a.isPoint,
    isDuration: a.isDuration,
    isLocalTime: a.isLocalTime,
    isTime: a.isTime,
    isDate: a.isDate,
    isLocalDateTime: a.isLocalDateTime,
    isDateTime: a.isDateTime,
    isNode: a.isNode,
    isPath: a.isPath,
    isPathSegment: a.isPathSegment,
    isRelationship: a.isRelationship,
    isUnboundRelationship: a.isUnboundRelationship,
    integer: oe,
    Neo4jError: a.Neo4jError,
    isRetryableError: a.isRetryableError,
    auth: a.auth,
    logging: F,
    types: K,
    session: X,
    routing: a.routing,
    error: a.error,
    graph: ge,
    spatial: de,
    temporal: Ie,
    Driver: i.Driver,
    Session: a.Session,
    Transaction: a.Transaction,
    ManagedTransaction: a.ManagedTransaction,
    Result: a.Result,
    EagerResult: a.EagerResult,
    RxSession: c.default,
    RxTransaction: u.default,
    RxManagedTransaction: l.default,
    RxResult: v.default,
    ResultSummary: a.ResultSummary,
    Plan: a.Plan,
    ProfiledPlan: a.ProfiledPlan,
    QueryStatistics: a.QueryStatistics,
    Notification: a.Notification,
    ServerInfo: a.ServerInfo,
    Record: a.Record,
    Node: a.Node,
    Relationship: a.Relationship,
    UnboundRelationship: a.UnboundRelationship,
    Path: a.Path,
    PathSegment: a.PathSegment,
    Point: a.Point,
    Integer: a.Integer,
    Duration: a.Duration,
    LocalTime: a.LocalTime,
    Time: a.Time,
    Date: a.Date,
    LocalDateTime: a.LocalDateTime,
    DateTime: a.DateTime,
    bookmarkManager: a.bookmarkManager,
    resultTransformers: a.resultTransformers
  };
  e.default = Re;
})(ip);
const C_ = /* @__PURE__ */ lO(ip);
function K8() {
  const e = C_.driver("neo4j+s://aa84864b.databases.neo4j.io", C_.auth.basic("neo4j", "BHK4W_phDl5-U9TVZ7iFic3Io4pm-CrPYB4cWoAnWhc"));
  return {
    async insert(t, r) {
      const n = e.session(), i = `UNWIND $items AS node CREATE (n:${t}) SET n = node`;
      try {
        await n.run(i, { items: r });
      } finally {
        await n.close();
      }
    },
    async insertRelations(t) {
      const r = e.session(), n = `
      UNWIND $items AS relation
      CALL apoc.merge.node([relation.fromNode], { id: relation.from }) YIELD node as n1
      CALL apoc.merge.node([relation.toNode], { id: relation.to }) YIELD node as n2
      CALL apoc.merge.relationship(n1, relation.type, relation, {}, n2) YIELD rel
      RETURN n1, n2, rel
      `;
      try {
        const i = G8(t, 200);
        let o = 0;
        for await (const a of i)
          await r.run(n, { items: a }), console.log(`chunk ${o++} inserted`);
      } finally {
        await r.close();
      }
    },
    async clearDb() {
      await e.session().run("MATCH (n) DETACH DELETE n");
    },
    async query(t, r) {
      return await e.session().run(t, r);
    }
  };
}
function G8(e, t) {
  const r = [];
  for (let n = 0; n < e.length; n += t)
    r.push(e.slice(n, n + t));
  return r;
}
var Eb = $i;
$i.flatten = $i;
$i.unflatten = Pb;
function Sb(e) {
  return e && e.constructor && typeof e.constructor.isBuffer == "function" && e.constructor.isBuffer(e);
}
function Tb(e) {
  return e;
}
function $i(e, t) {
  t = t || {};
  const r = t.delimiter || ".", n = t.maxDepth, i = t.transformKey || Tb, o = {};
  function a(s, c, u) {
    u = u || 1, Object.keys(s).forEach(function(l) {
      const v = s[l], y = t.safe && Array.isArray(v), g = Object.prototype.toString.call(v), E = Sb(v), S = g === "[object Object]" || g === "[object Array]", C = c ? c + r + i(l) : i(l);
      if (!y && !E && S && Object.keys(v).length && (!t.maxDepth || u < n))
        return a(v, C, u + 1);
      o[C] = v;
    });
  }
  return a(e), o;
}
function Pb(e, t) {
  t = t || {};
  const r = t.delimiter || ".", n = t.overwrite || !1, i = t.transformKey || Tb, o = {};
  if (Sb(e) || Object.prototype.toString.call(e) !== "[object Object]")
    return e;
  function s(l) {
    const v = Number(l);
    return isNaN(v) || l.indexOf(".") !== -1 || t.object ? l : v;
  }
  function c(l, v, y) {
    return Object.keys(y).reduce(function(g, E) {
      return g[l + r + E] = y[E], g;
    }, v);
  }
  function u(l) {
    const v = Object.prototype.toString.call(l), y = v === "[object Array]", g = v === "[object Object]";
    if (l) {
      if (y)
        return !l.length;
      if (g)
        return !Object.keys(l).length;
    } else
      return !0;
  }
  return e = Object.keys(e).reduce(function(l, v) {
    const y = Object.prototype.toString.call(e[v]);
    return !(y === "[object Object]" || y === "[object Array]") || u(e[v]) ? (l[v] = e[v], l) : c(
      v,
      l,
      $i(e[v], t)
    );
  }, {}), Object.keys(e).forEach(function(l) {
    const v = l.split(r).map(i);
    let y = s(v.shift()), g = s(v[0]), E = o;
    for (; g !== void 0; ) {
      if (y === "__proto__")
        return;
      const S = Object.prototype.toString.call(E[y]), C = S === "[object Object]" || S === "[object Array]";
      if (!n && !C && typeof E[y] < "u")
        return;
      (n && !C || !n && E[y] == null) && (E[y] = typeof g == "number" && !t.object ? [] : {}), E = E[y], v.length > 0 && (y = s(v.shift()), g = s(v[0]));
    }
    E[y] = Pb(e[l], t);
  }), o;
}
const Z8 = [
  {
    connector: cO,
    config: {
      url: process.env.YOUTRACK_URL,
      token: process.env.YOUTRACK_TOKEN,
      issueQueries: [
        "tag:BigTeam and (Sprint:{Sprint 1_2023} or Sprint:{Sprint 2_2023} or Sprint:{Sprint 3_2023} or Sprint:{Sprint 4_2023} or Sprint:{Sprint 5_2023})"
      ],
      issueLoadingMaxDepthLevel: 10
    }
  }
  // {
  //   connector: gitlab,
  //   config: {
  //     url: process.env.GITLAB_URL,
  //     token: process.env.GITLAB_TOKEN,
  //   },
  // },
];
function Q8() {
  Z8.forEach(J8);
}
function J8({ connector: e, config: t }) {
  e.connect({
    config: t,
    addNodes: X8,
    addRelations: e3
  });
}
const $d = K8();
await $d.clearDb();
async function X8(e, t) {
  console.log("add", e, t.length), await $d.insert(e, t.map((r) => Eb.flatten(r))), console.log("adde");
}
async function e3(e) {
  console.log("add rels", e.length), await $d.insertRelations(e.map((t) => Eb.flatten(t))), console.log("added rels");
}
Q8();
