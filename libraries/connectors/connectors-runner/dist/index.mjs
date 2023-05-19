function $_(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: M_ } = Object.prototype, { getPrototypeOf: Ef } = Object, Sf = ((e) => (t) => {
  const r = M_.call(t);
  return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), Vr = (e) => (e = e.toLowerCase(), (t) => Sf(t) === e), Vu = (e) => (t) => typeof t === e, { isArray: wn } = Array, Ri = Vu("undefined");
function C0(e) {
  return e !== null && !Ri(e) && e.constructor !== null && !Ri(e.constructor) && Qr(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const k_ = Vr("ArrayBuffer");
function j0(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && k_(e.buffer), t;
}
const N0 = Vu("string"), Qr = Vu("function"), D_ = Vu("number"), Tf = (e) => e !== null && typeof e == "object", $0 = (e) => e === !0 || e === !1, yu = (e) => {
  if (Sf(e) !== "object")
    return !1;
  const t = Ef(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, M0 = Vr("Date"), k0 = Vr("File"), D0 = Vr("Blob"), U0 = Vr("FileList"), L0 = (e) => Tf(e) && Qr(e.pipe), F0 = (e) => {
  const t = "[object FormData]";
  return e && (typeof FormData == "function" && e instanceof FormData || M_.call(e) === t || Qr(e.toString) && e.toString() === t);
}, B0 = Vr("URLSearchParams"), x0 = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Mi(e, t, { allOwnKeys: r = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let n, i;
  if (typeof e != "object" && (e = [e]), wn(e))
    for (n = 0, i = e.length; n < i; n++)
      t.call(null, e[n], n, e);
  else {
    const o = r ? Object.getOwnPropertyNames(e) : Object.keys(e), a = o.length;
    let u;
    for (n = 0; n < a; n++)
      u = o[n], t.call(null, e[u], u, e);
  }
}
function U_(e, t) {
  t = t.toLowerCase();
  const r = Object.keys(e);
  let n = r.length, i;
  for (; n-- > 0; )
    if (i = r[n], t === i.toLowerCase())
      return i;
  return null;
}
const L_ = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), F_ = (e) => !Ri(e) && e !== L_;
function Gl() {
  const { caseless: e } = F_(this) && this || {}, t = {}, r = (n, i) => {
    const o = e && U_(t, i) || i;
    yu(t[o]) && yu(n) ? t[o] = Gl(t[o], n) : yu(n) ? t[o] = Gl({}, n) : wn(n) ? t[o] = n.slice() : t[o] = n;
  };
  for (let n = 0, i = arguments.length; n < i; n++)
    arguments[n] && Mi(arguments[n], r);
  return t;
}
const W0 = (e, t, r, { allOwnKeys: n } = {}) => (Mi(t, (i, o) => {
  r && Qr(i) ? e[o] = $_(i, r) : e[o] = i;
}, { allOwnKeys: n }), e), V0 = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), q0 = (e, t, r, n) => {
  e.prototype = Object.create(t.prototype, n), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), r && Object.assign(e.prototype, r);
}, H0 = (e, t, r, n) => {
  let i, o, a;
  const u = {};
  if (t = t || {}, e == null)
    return t;
  do {
    for (i = Object.getOwnPropertyNames(e), o = i.length; o-- > 0; )
      a = i[o], (!n || n(a, e, t)) && !u[a] && (t[a] = e[a], u[a] = !0);
    e = r !== !1 && Ef(e);
  } while (e && (!r || r(e, t)) && e !== Object.prototype);
  return t;
}, z0 = (e, t, r) => {
  e = String(e), (r === void 0 || r > e.length) && (r = e.length), r -= t.length;
  const n = e.indexOf(t, r);
  return n !== -1 && n === r;
}, Y0 = (e) => {
  if (!e)
    return null;
  if (wn(e))
    return e;
  let t = e.length;
  if (!D_(t))
    return null;
  const r = new Array(t);
  for (; t-- > 0; )
    r[t] = e[t];
  return r;
}, G0 = ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && Ef(Uint8Array)), K0 = (e, t) => {
  const n = (e && e[Symbol.iterator]).call(e);
  let i;
  for (; (i = n.next()) && !i.done; ) {
    const o = i.value;
    t.call(e, o[0], o[1]);
  }
}, Z0 = (e, t) => {
  let r;
  const n = [];
  for (; (r = e.exec(t)) !== null; )
    n.push(r);
  return n;
}, Q0 = Vr("HTMLFormElement"), J0 = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(r, n, i) {
    return n.toUpperCase() + i;
  }
), Md = (({ hasOwnProperty: e }) => (t, r) => e.call(t, r))(Object.prototype), X0 = Vr("RegExp"), B_ = (e, t) => {
  const r = Object.getOwnPropertyDescriptors(e), n = {};
  Mi(r, (i, o) => {
    t(i, o, e) !== !1 && (n[o] = i);
  }), Object.defineProperties(e, n);
}, eg = (e) => {
  B_(e, (t, r) => {
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
}, rg = (e, t) => {
  const r = {}, n = (i) => {
    i.forEach((o) => {
      r[o] = !0;
    });
  };
  return wn(e) ? n(e) : n(String(e).split(t)), r;
}, tg = () => {
}, ng = (e, t) => (e = +e, Number.isFinite(e) ? e : t), ul = "abcdefghijklmnopqrstuvwxyz", kd = "0123456789", x_ = {
  DIGIT: kd,
  ALPHA: ul,
  ALPHA_DIGIT: ul + ul.toUpperCase() + kd
}, ig = (e = 16, t = x_.ALPHA_DIGIT) => {
  let r = "";
  const { length: n } = t;
  for (; e--; )
    r += t[Math.random() * n | 0];
  return r;
};
function og(e) {
  return !!(e && Qr(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const ag = (e) => {
  const t = new Array(10), r = (n, i) => {
    if (Tf(n)) {
      if (t.indexOf(n) >= 0)
        return;
      if (!("toJSON" in n)) {
        t[i] = n;
        const o = wn(n) ? [] : {};
        return Mi(n, (a, u) => {
          const c = r(a, i + 1);
          !Ri(c) && (o[u] = c);
        }), t[i] = void 0, o;
      }
    }
    return n;
  };
  return r(e, 0);
}, N = {
  isArray: wn,
  isArrayBuffer: k_,
  isBuffer: C0,
  isFormData: F0,
  isArrayBufferView: j0,
  isString: N0,
  isNumber: D_,
  isBoolean: $0,
  isObject: Tf,
  isPlainObject: yu,
  isUndefined: Ri,
  isDate: M0,
  isFile: k0,
  isBlob: D0,
  isRegExp: X0,
  isFunction: Qr,
  isStream: L0,
  isURLSearchParams: B0,
  isTypedArray: G0,
  isFileList: U0,
  forEach: Mi,
  merge: Gl,
  extend: W0,
  trim: x0,
  stripBOM: V0,
  inherits: q0,
  toFlatObject: H0,
  kindOf: Sf,
  kindOfTest: Vr,
  endsWith: z0,
  toArray: Y0,
  forEachEntry: K0,
  matchAll: Z0,
  isHTMLForm: Q0,
  hasOwnProperty: Md,
  hasOwnProp: Md,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: B_,
  freezeMethods: eg,
  toObjectSet: rg,
  toCamelCase: J0,
  noop: tg,
  toFiniteNumber: ng,
  findKey: U_,
  global: L_,
  isContextDefined: F_,
  ALPHABET: x_,
  generateString: ig,
  isSpecCompliantForm: og,
  toJSONObject: ag
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
const W_ = fe.prototype, V_ = {};
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
  V_[e] = { value: e };
});
Object.defineProperties(fe, V_);
Object.defineProperty(W_, "isAxiosError", { value: !0 });
fe.from = (e, t, r, n, i, o) => {
  const a = Object.create(W_);
  return N.toFlatObject(e, a, function(c) {
    return c !== Error.prototype;
  }, (u) => u !== "isAxiosError"), fe.call(a, e.message, t, r, n, i), a.cause = e, a.name = e.name, o && Object.assign(a, o), a;
};
const ug = null;
function Kl(e) {
  return N.isPlainObject(e) || N.isArray(e);
}
function q_(e) {
  return N.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Dd(e, t, r) {
  return e ? e.concat(t).map(function(i, o) {
    return i = q_(i), !r && o ? "[" + i + "]" : i;
  }).join(r ? "." : "") : t;
}
function sg(e) {
  return N.isArray(e) && !e.some(Kl);
}
const cg = N.toFlatObject(N, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function qu(e, t, r) {
  if (!N.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), r = N.toFlatObject(r, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(T, C) {
    return !N.isUndefined(C[T]);
  });
  const n = r.metaTokens, i = r.visitor || l, o = r.dots, a = r.indexes, c = (r.Blob || typeof Blob < "u" && Blob) && N.isSpecCompliantForm(t);
  if (!N.isFunction(i))
    throw new TypeError("visitor must be a function");
  function s(E) {
    if (E === null)
      return "";
    if (N.isDate(E))
      return E.toISOString();
    if (!c && N.isBlob(E))
      throw new fe("Blob is not supported. Use a Buffer instead.");
    return N.isArrayBuffer(E) || N.isTypedArray(E) ? c && typeof Blob == "function" ? new Blob([E]) : Buffer.from(E) : E;
  }
  function l(E, T, C) {
    let A = E;
    if (E && !C && typeof E == "object") {
      if (N.endsWith(T, "{}"))
        T = n ? T : T.slice(0, -2), E = JSON.stringify(E);
      else if (N.isArray(E) && sg(E) || (N.isFileList(E) || N.endsWith(T, "[]")) && (A = N.toArray(E)))
        return T = q_(T), A.forEach(function(U, D) {
          !(N.isUndefined(U) || U === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            a === !0 ? Dd([T], D, o) : a === null ? T : T + "[]",
            s(U)
          );
        }), !1;
    }
    return Kl(E) ? !0 : (t.append(Dd(C, T, o), s(E)), !1);
  }
  const v = [], y = Object.assign(cg, {
    defaultVisitor: l,
    convertValue: s,
    isVisitable: Kl
  });
  function O(E, T) {
    if (!N.isUndefined(E)) {
      if (v.indexOf(E) !== -1)
        throw Error("Circular reference detected in " + T.join("."));
      v.push(E), N.forEach(E, function(A, $) {
        (!(N.isUndefined(A) || A === null) && i.call(
          t,
          A,
          N.isString($) ? $.trim() : $,
          T,
          y
        )) === !0 && O(A, T ? T.concat($) : [$]);
      }), v.pop();
    }
  }
  if (!N.isObject(e))
    throw new TypeError("data must be an object");
  return O(e), t;
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
const H_ = Pf.prototype;
H_.append = function(t, r) {
  this._pairs.push([t, r]);
};
H_.toString = function(t) {
  const r = t ? function(n) {
    return t.call(this, n, Ud);
  } : Ud;
  return this._pairs.map(function(i) {
    return r(i[0]) + "=" + r(i[1]);
  }, "").join("&");
};
function lg(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function z_(e, t, r) {
  if (!t)
    return e;
  const n = r && r.encode || lg, i = r && r.serialize;
  let o;
  if (i ? o = i(t, r) : o = N.isURLSearchParams(t) ? t.toString() : new Pf(t, r).toString(n), o) {
    const a = e.indexOf("#");
    a !== -1 && (e = e.slice(0, a)), e += (e.indexOf("?") === -1 ? "?" : "&") + o;
  }
  return e;
}
class fg {
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
const Ld = fg, Y_ = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, dg = typeof URLSearchParams < "u" ? URLSearchParams : Pf, hg = typeof FormData < "u" ? FormData : null, vg = (() => {
  let e;
  return typeof navigator < "u" && ((e = navigator.product) === "ReactNative" || e === "NativeScript" || e === "NS") ? !1 : typeof window < "u" && typeof document < "u";
})(), _g = (() => typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), Sr = {
  isBrowser: !0,
  classes: {
    URLSearchParams: dg,
    FormData: hg,
    Blob
  },
  isStandardBrowserEnv: vg,
  isStandardBrowserWebWorkerEnv: _g,
  protocols: ["http", "https", "file", "blob", "url", "data"]
};
function pg(e, t) {
  return qu(e, new Sr.classes.URLSearchParams(), Object.assign({
    visitor: function(r, n, i, o) {
      return Sr.isNode && N.isBuffer(r) ? (this.append(n, r.toString("base64")), !1) : o.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function mg(e) {
  return N.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function yg(e) {
  const t = {}, r = Object.keys(e);
  let n;
  const i = r.length;
  let o;
  for (n = 0; n < i; n++)
    o = r[n], t[o] = e[o];
  return t;
}
function G_(e) {
  function t(r, n, i, o) {
    let a = r[o++];
    const u = Number.isFinite(+a), c = o >= r.length;
    return a = !a && N.isArray(i) ? i.length : a, c ? (N.hasOwnProp(i, a) ? i[a] = [i[a], n] : i[a] = n, !u) : ((!i[a] || !N.isObject(i[a])) && (i[a] = []), t(r, n, i[a], o) && N.isArray(i[a]) && (i[a] = yg(i[a])), !u);
  }
  if (N.isFormData(e) && N.isFunction(e.entries)) {
    const r = {};
    return N.forEachEntry(e, (n, i) => {
      t(mg(n), i, r, 0);
    }), r;
  }
  return null;
}
const bg = {
  "Content-Type": void 0
};
function gg(e, t, r) {
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
  transitional: Y_,
  adapter: ["xhr", "http"],
  transformRequest: [function(t, r) {
    const n = r.getContentType() || "", i = n.indexOf("application/json") > -1, o = N.isObject(t);
    if (o && N.isHTMLForm(t) && (t = new FormData(t)), N.isFormData(t))
      return i && i ? JSON.stringify(G_(t)) : t;
    if (N.isArrayBuffer(t) || N.isBuffer(t) || N.isStream(t) || N.isFile(t) || N.isBlob(t))
      return t;
    if (N.isArrayBufferView(t))
      return t.buffer;
    if (N.isURLSearchParams(t))
      return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let u;
    if (o) {
      if (n.indexOf("application/x-www-form-urlencoded") > -1)
        return pg(t, this.formSerializer).toString();
      if ((u = N.isFileList(t)) || n.indexOf("multipart/form-data") > -1) {
        const c = this.env && this.env.FormData;
        return qu(
          u ? { "files[]": t } : t,
          c && new c(),
          this.formSerializer
        );
      }
    }
    return o || i ? (r.setContentType("application/json", !1), gg(t)) : t;
  }],
  transformResponse: [function(t) {
    const r = this.transitional || Hu.transitional, n = r && r.forcedJSONParsing, i = this.responseType === "json";
    if (t && N.isString(t) && (n && !this.responseType || i)) {
      const a = !(r && r.silentJSONParsing) && i;
      try {
        return JSON.parse(t);
      } catch (u) {
        if (a)
          throw u.name === "SyntaxError" ? fe.from(u, fe.ERR_BAD_RESPONSE, this, null, this.response) : u;
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
  Hu.headers[t] = N.merge(bg);
});
const If = Hu, Og = N.toObjectSet([
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
]), wg = (e) => {
  const t = {};
  let r, n, i;
  return e && e.split(`
`).forEach(function(a) {
    i = a.indexOf(":"), r = a.substring(0, i).trim().toLowerCase(), n = a.substring(i + 1).trim(), !(!r || t[r] && Og[r]) && (r === "set-cookie" ? t[r] ? t[r].push(n) : t[r] = [n] : t[r] = t[r] ? t[r] + ", " + n : n);
  }), t;
}, Fd = Symbol("internals");
function oi(e) {
  return e && String(e).trim().toLowerCase();
}
function bu(e) {
  return e === !1 || e == null ? e : N.isArray(e) ? e.map(bu) : String(e);
}
function Eg(e) {
  const t = /* @__PURE__ */ Object.create(null), r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; n = r.exec(e); )
    t[n[1]] = n[2];
  return t;
}
function Sg(e) {
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
function Tg(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, r, n) => r.toUpperCase() + n);
}
function Pg(e, t) {
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
    function o(u, c, s) {
      const l = oi(c);
      if (!l)
        throw new Error("header name must be a non-empty string");
      const v = N.findKey(i, l);
      (!v || i[v] === void 0 || s === !0 || s === void 0 && i[v] !== !1) && (i[v || c] = bu(u));
    }
    const a = (u, c) => N.forEach(u, (s, l) => o(s, l, c));
    return N.isPlainObject(t) || t instanceof this.constructor ? a(t, r) : N.isString(t) && (t = t.trim()) && !Sg(t) ? a(wg(t), r) : t != null && o(r, t, n), this;
  }
  get(t, r) {
    if (t = oi(t), t) {
      const n = N.findKey(this, t);
      if (n) {
        const i = this[n];
        if (!r)
          return i;
        if (r === !0)
          return Eg(i);
        if (N.isFunction(r))
          return r.call(this, i, n);
        if (N.isRegExp(r))
          return r.exec(i);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, r) {
    if (t = oi(t), t) {
      const n = N.findKey(this, t);
      return !!(n && this[n] !== void 0 && (!r || sl(this, this[n], n, r)));
    }
    return !1;
  }
  delete(t, r) {
    const n = this;
    let i = !1;
    function o(a) {
      if (a = oi(a), a) {
        const u = N.findKey(n, a);
        u && (!r || sl(n, n[u], u, r)) && (delete n[u], i = !0);
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
      const u = t ? Tg(o) : String(o).trim();
      u !== o && delete r[o], r[u] = bu(i), n[u] = !0;
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
      const u = oi(a);
      n[u] || (Pg(i, a), n[u] = !0);
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
  return N.forEach(e, function(u) {
    o = u.call(r, o, i.normalize(), t ? t.status : void 0);
  }), i.normalize(), o;
}
function K_(e) {
  return !!(e && e.__CANCEL__);
}
function ki(e, t, r) {
  fe.call(this, e ?? "canceled", fe.ERR_CANCELED, t, r), this.name = "CanceledError";
}
N.inherits(ki, fe, {
  __CANCEL__: !0
});
function Ig(e, t, r) {
  const n = r.config.validateStatus;
  !r.status || !n || n(r.status) ? e(r) : t(new fe(
    "Request failed with status code " + r.status,
    [fe.ERR_BAD_REQUEST, fe.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4],
    r.config,
    r.request,
    r
  ));
}
const Rg = Sr.isStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  function() {
    return {
      write: function(r, n, i, o, a, u) {
        const c = [];
        c.push(r + "=" + encodeURIComponent(n)), N.isNumber(i) && c.push("expires=" + new Date(i).toGMTString()), N.isString(o) && c.push("path=" + o), N.isString(a) && c.push("domain=" + a), u === !0 && c.push("secure"), document.cookie = c.join("; ");
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
function Cg(e, t) {
  return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Z_(e, t) {
  return e && !Ag(t) ? Cg(e, t) : t;
}
const jg = Sr.isStandardBrowserEnv ? (
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
      const u = N.isString(a) ? i(a) : a;
      return u.protocol === n.protocol && u.host === n.host;
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
function Ng(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function $g(e, t) {
  e = e || 10;
  const r = new Array(e), n = new Array(e);
  let i = 0, o = 0, a;
  return t = t !== void 0 ? t : 1e3, function(c) {
    const s = Date.now(), l = n[o];
    a || (a = s), r[i] = c, n[i] = s;
    let v = o, y = 0;
    for (; v !== i; )
      y += r[v++], v = v % e;
    if (i = (i + 1) % e, i === o && (o = (o + 1) % e), s - a < t)
      return;
    const O = l && s - l;
    return O ? Math.round(y * 1e3 / O) : void 0;
  };
}
function Bd(e, t) {
  let r = 0;
  const n = $g(50, 250);
  return (i) => {
    const o = i.loaded, a = i.lengthComputable ? i.total : void 0, u = o - r, c = n(u), s = o <= a;
    r = o;
    const l = {
      loaded: o,
      total: a,
      progress: a ? o / a : void 0,
      bytes: u,
      rate: c || void 0,
      estimated: c && a && s ? (a - o) / c : void 0,
      event: i
    };
    l[t ? "download" : "upload"] = !0, e(l);
  };
}
const Mg = typeof XMLHttpRequest < "u", kg = Mg && function(e) {
  return new Promise(function(r, n) {
    let i = e.data;
    const o = Lr.from(e.headers).normalize(), a = e.responseType;
    let u;
    function c() {
      e.cancelToken && e.cancelToken.unsubscribe(u), e.signal && e.signal.removeEventListener("abort", u);
    }
    N.isFormData(i) && (Sr.isStandardBrowserEnv || Sr.isStandardBrowserWebWorkerEnv) && o.setContentType(!1);
    let s = new XMLHttpRequest();
    if (e.auth) {
      const O = e.auth.username || "", E = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
      o.set("Authorization", "Basic " + btoa(O + ":" + E));
    }
    const l = Z_(e.baseURL, e.url);
    s.open(e.method.toUpperCase(), z_(l, e.params, e.paramsSerializer), !0), s.timeout = e.timeout;
    function v() {
      if (!s)
        return;
      const O = Lr.from(
        "getAllResponseHeaders" in s && s.getAllResponseHeaders()
      ), T = {
        data: !a || a === "text" || a === "json" ? s.responseText : s.response,
        status: s.status,
        statusText: s.statusText,
        headers: O,
        config: e,
        request: s
      };
      Ig(function(A) {
        r(A), c();
      }, function(A) {
        n(A), c();
      }, T), s = null;
    }
    if ("onloadend" in s ? s.onloadend = v : s.onreadystatechange = function() {
      !s || s.readyState !== 4 || s.status === 0 && !(s.responseURL && s.responseURL.indexOf("file:") === 0) || setTimeout(v);
    }, s.onabort = function() {
      s && (n(new fe("Request aborted", fe.ECONNABORTED, e, s)), s = null);
    }, s.onerror = function() {
      n(new fe("Network Error", fe.ERR_NETWORK, e, s)), s = null;
    }, s.ontimeout = function() {
      let E = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
      const T = e.transitional || Y_;
      e.timeoutErrorMessage && (E = e.timeoutErrorMessage), n(new fe(
        E,
        T.clarifyTimeoutError ? fe.ETIMEDOUT : fe.ECONNABORTED,
        e,
        s
      )), s = null;
    }, Sr.isStandardBrowserEnv) {
      const O = (e.withCredentials || jg(l)) && e.xsrfCookieName && Rg.read(e.xsrfCookieName);
      O && o.set(e.xsrfHeaderName, O);
    }
    i === void 0 && o.setContentType(null), "setRequestHeader" in s && N.forEach(o.toJSON(), function(E, T) {
      s.setRequestHeader(T, E);
    }), N.isUndefined(e.withCredentials) || (s.withCredentials = !!e.withCredentials), a && a !== "json" && (s.responseType = e.responseType), typeof e.onDownloadProgress == "function" && s.addEventListener("progress", Bd(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && s.upload && s.upload.addEventListener("progress", Bd(e.onUploadProgress)), (e.cancelToken || e.signal) && (u = (O) => {
      s && (n(!O || O.type ? new ki(null, e, s) : O), s.abort(), s = null);
    }, e.cancelToken && e.cancelToken.subscribe(u), e.signal && (e.signal.aborted ? u() : e.signal.addEventListener("abort", u)));
    const y = Ng(l);
    if (y && Sr.protocols.indexOf(y) === -1) {
      n(new fe("Unsupported protocol " + y + ":", fe.ERR_BAD_REQUEST, e));
      return;
    }
    s.send(i || null);
  });
}, gu = {
  http: ug,
  xhr: kg
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
const Dg = {
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
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Dg.getAdapter(e.adapter || If.adapter)(e).then(function(n) {
    return ll(e), n.data = cl.call(
      e,
      e.transformResponse,
      n
    ), n.headers = Lr.from(n.headers), n;
  }, function(n) {
    return K_(n) || (ll(e), n && n.response && (n.response.data = cl.call(
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
  function n(s, l, v) {
    return N.isPlainObject(s) && N.isPlainObject(l) ? N.merge.call({ caseless: v }, s, l) : N.isPlainObject(l) ? N.merge({}, l) : N.isArray(l) ? l.slice() : l;
  }
  function i(s, l, v) {
    if (N.isUndefined(l)) {
      if (!N.isUndefined(s))
        return n(void 0, s, v);
    } else
      return n(s, l, v);
  }
  function o(s, l) {
    if (!N.isUndefined(l))
      return n(void 0, l);
  }
  function a(s, l) {
    if (N.isUndefined(l)) {
      if (!N.isUndefined(s))
        return n(void 0, s);
    } else
      return n(void 0, l);
  }
  function u(s, l, v) {
    if (v in t)
      return n(s, l);
    if (v in e)
      return n(void 0, s);
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
    validateStatus: u,
    headers: (s, l) => i(Wd(s), Wd(l), !0)
  };
  return N.forEach(Object.keys(e).concat(Object.keys(t)), function(l) {
    const v = c[l] || i, y = v(e[l], t[l], l);
    N.isUndefined(y) && v !== u || (r[l] = y);
  }), r;
}
const Q_ = "1.3.3", Rf = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  Rf[e] = function(n) {
    return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const Vd = {};
Rf.transitional = function(t, r, n) {
  function i(o, a) {
    return "[Axios v" + Q_ + "] Transitional option '" + o + "'" + a + (n ? ". " + n : "");
  }
  return (o, a, u) => {
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
    )), t ? t(o, a, u) : !0;
  };
};
function Ug(e, t, r) {
  if (typeof e != "object")
    throw new fe("options must be an object", fe.ERR_BAD_OPTION_VALUE);
  const n = Object.keys(e);
  let i = n.length;
  for (; i-- > 0; ) {
    const o = n[i], a = t[o];
    if (a) {
      const u = e[o], c = u === void 0 || a(u, o, e);
      if (c !== !0)
        throw new fe("option " + o + " must be " + c, fe.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new fe("Unknown option " + o, fe.ERR_BAD_OPTION);
  }
}
const Zl = {
  assertOptions: Ug,
  validators: Rf
}, Kr = Zl.validators;
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
      silentJSONParsing: Kr.transitional(Kr.boolean),
      forcedJSONParsing: Kr.transitional(Kr.boolean),
      clarifyTimeoutError: Kr.transitional(Kr.boolean)
    }, !1), i !== void 0 && Zl.assertOptions(i, {
      encode: Kr.function,
      serialize: Kr.function
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
    const u = [];
    let c = !0;
    this.interceptors.request.forEach(function(T) {
      typeof T.runWhen == "function" && T.runWhen(r) === !1 || (c = c && T.synchronous, u.unshift(T.fulfilled, T.rejected));
    });
    const s = [];
    this.interceptors.response.forEach(function(T) {
      s.push(T.fulfilled, T.rejected);
    });
    let l, v = 0, y;
    if (!c) {
      const E = [xd.bind(this), void 0];
      for (E.unshift.apply(E, u), E.push.apply(E, s), y = E.length, l = Promise.resolve(r); v < y; )
        l = l.then(E[v++], E[v++]);
      return l;
    }
    y = u.length;
    let O = r;
    for (v = 0; v < y; ) {
      const E = u[v++], T = u[v++];
      try {
        O = E(O);
      } catch (C) {
        T.call(this, C);
        break;
      }
    }
    try {
      l = xd.call(this, O);
    } catch (E) {
      return Promise.reject(E);
    }
    for (v = 0, y = s.length; v < y; )
      l = l.then(s[v++], s[v++]);
    return l;
  }
  getUri(t) {
    t = hn(this.defaults, t);
    const r = Z_(t.baseURL, t.url);
    return z_(r, t.params, t.paramsSerializer);
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
    return function(o, a, u) {
      return this.request(hn(u || {}, {
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
class Af {
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
      const a = new Promise((u) => {
        n.subscribe(u), o = u;
      }).then(i);
      return a.cancel = function() {
        n.unsubscribe(o);
      }, a;
    }, t(function(o, a, u) {
      n.reason || (n.reason = new ki(o, a, u), r(n.reason));
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
      token: new Af(function(i) {
        t = i;
      }),
      cancel: t
    };
  }
}
const Lg = Af;
function Fg(e) {
  return function(r) {
    return e.apply(null, r);
  };
}
function Bg(e) {
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
const xg = Ql;
function J_(e) {
  const t = new Ou(e), r = $_(Ou.prototype.request, t);
  return N.extend(r, Ou.prototype, t, { allOwnKeys: !0 }), N.extend(r, t, null, { allOwnKeys: !0 }), r.create = function(i) {
    return J_(hn(e, i));
  }, r;
}
const Le = J_(If);
Le.Axios = Ou;
Le.CanceledError = ki;
Le.CancelToken = Lg;
Le.isCancel = K_;
Le.VERSION = Q_;
Le.toFormData = qu;
Le.AxiosError = fe;
Le.Cancel = Le.CanceledError;
Le.all = function(t) {
  return Promise.all(t);
};
Le.spread = Fg;
Le.isAxiosError = Bg;
Le.mergeConfig = hn;
Le.AxiosHeaders = Lr;
Le.formToJSON = (e) => G_(N.isHTMLForm(e) ? new FormData(e) : e);
Le.HttpStatusCode = xg;
Le.default = Le;
const Wg = Le, vn = Wg.create({
  baseURL: "https://socialtech.myjetbrains.com/api/",
  headers: {
    Authorization: "Bearer <token>"
  }
});
var Cf = /* @__PURE__ */ ((e) => (e.Subtask = "Subtask", e.Duplicate = "Duplicate", e.Depend = "Depend", e.Relates = "Relates", e))(Cf || {});
function X_({ issues: e, isAlreadyLoaded: t, addRelation: r }) {
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
const qg = "customFields($type,name,value($type,archived,avatarUrl,buildIntegration,buildLink,color(background,id),description,fullName,id,isResolved,localizedName,login,markdownText,minutes,name,presentation,ringId,text))", ep = "id,login,name,fullName,avatarUrl,email", Hg = `reporter(${ep})`, zg = `updater(${ep})`, rp = `fields=id,idReadable,summary,description,updated,created,usesMarkdown,${Hg},${zg},links(id,direction,linkType(name),issues(id)),tags(name),${qg}`;
async function Yg(e) {
  let t = e.ids;
  const { maxDepthLevel: r } = e;
  let n = 0;
  for (; t.length > 0 && (!r || n++ < r); )
    t = await Gg({
      ...e,
      ids: t
    });
}
async function Gg({
  ids: e,
  onLoadedIssue: t,
  isAlreadyLoaded: r,
  addRelation: n
}) {
  const i = (await vn.post(
    `issuesGetter?${rp}`,
    e.map((o) => ({ id: o }))
  )).data;
  return i.forEach((o) => t(o)), X_({
    issues: i,
    isAlreadyLoaded: r,
    addRelation: n
  });
}
function Kg(e) {
  Zg(e), Qg(e), Jg(e), Xg(e), eO(e), rO(e);
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
  var n, i;
  const o = (i = (n = e.customFields) == null ? void 0 : n.find((u) => u.name === "GitLab PR link")) == null ? void 0 : i.value, a = o == null ? void 0 : o.matchAll(/merge_requests\/(?<mrNumber>\d*)/gm);
  a && Array.from(a).map((u) => {
    var c;
    return ((c = u.groups) == null ? void 0 : c.mrNumber) || "";
  }).forEach((u) => {
    t("mr", {
      id: u,
      number: u
    }), r({
      toNode: "mr",
      to: u,
      fromNode: "issue",
      from: e.id,
      type: "mr"
    });
  });
}
function Jg({ issue: e, addNode: t, addRelation: r }) {
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
function Xg({ issue: e, addNode: t, addRelation: r }) {
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
function eO({ issue: e, addNode: t, addRelation: r }) {
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
function rO({ issue: e, addNode: t, addRelation: r }) {
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
function tO(e) {
  var t, r, n, i, o, a, u, c, s, l, v, y, O, E, T, C;
  return {
    storyPoints: (r = (t = e.customFields) == null ? void 0 : t.find((A) => A.name === "Story points")) == null ? void 0 : r.value,
    state: (o = (i = (n = e.customFields) == null ? void 0 : n.find((A) => A.name === "State")) == null ? void 0 : i.value) == null ? void 0 : o.name,
    source: (c = (u = (a = e.customFields) == null ? void 0 : a.find((A) => A.name === "Source")) == null ? void 0 : u.value) == null ? void 0 : c.name,
    priority: (v = (l = (s = e.customFields) == null ? void 0 : s.find((A) => A.name === "Priority")) == null ? void 0 : l.value) == null ? void 0 : v.name,
    severity: (E = (O = (y = e.customFields) == null ? void 0 : y.find((A) => A.name === "Severity")) == null ? void 0 : O.value) == null ? void 0 : E.name,
    tags: (C = (T = e.tags) == null ? void 0 : T.map((A) => A.name)) == null ? void 0 : C.join(",")
  };
}
function nO() {
  const e = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Map(), r = [], n = (o) => r.push(o), i = (o, a) => {
    t.has(o) || t.set(o, /* @__PURE__ */ new Map());
    const u = t.get(o);
    u && !u.has(a.id) && u.set(a.id, a);
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
          ...tO(o)
        };
        e.set(o.id, a), Kg({
          issue: o,
          addNode: i,
          addRelation: n
        });
      }
    },
    addIssueRelation({ from: o, to: a, type: u }) {
      return n({
        fromNode: "issue",
        from: o,
        toNode: "issue",
        to: a,
        type: u
      });
    },
    getIssues() {
      return tp(e);
    },
    getRelations() {
      return r;
    },
    getNodes() {
      return iO(t);
    }
  };
}
function iO(e) {
  return Array.from(e).map(([t, r]) => [t, tp(r)]);
}
function tp(e) {
  return Array.from(e, ([t, r]) => r);
}
var qd = 1 / 0, np = 9007199254740991, oO = 17976931348623157e292, Hd = 0 / 0, aO = "[object Function]", uO = "[object GeneratorFunction]", sO = "[object Symbol]", cO = /^\s+|\s+$/g, lO = /^[-+]0x[0-9a-f]+$/i, fO = /^0b[01]+$/i, dO = /^0o[0-7]+$/i, hO = /^(?:0|[1-9]\d*)$/, vO = parseInt, _O = Object.prototype, ip = _O.toString, pO = Math.ceil, mO = Math.max;
function yO(e, t, r) {
  var n = -1, i = e.length;
  t < 0 && (t = -t > i ? 0 : i + t), r = r > i ? i : r, r < 0 && (r += i), i = t > r ? 0 : r - t >>> 0, t >>>= 0;
  for (var o = Array(i); ++n < i; )
    o[n] = e[n + t];
  return o;
}
function bO(e, t) {
  return t = t ?? np, !!t && (typeof e == "number" || hO.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function gO(e, t, r) {
  if (!Pu(r))
    return !1;
  var n = typeof t;
  return (n == "number" ? EO(r) && bO(t, r.length) : n == "string" && t in r) ? wO(r[t], e) : !1;
}
function OO(e, t, r) {
  (r ? gO(e, t, r) : t === void 0) ? t = 1 : t = mO(AO(t), 0);
  var n = e ? e.length : 0;
  if (!n || t < 1)
    return [];
  for (var i = 0, o = 0, a = Array(pO(n / t)); i < n; )
    a[o++] = yO(e, i, i += t);
  return a;
}
function wO(e, t) {
  return e === t || e !== e && t !== t;
}
function EO(e) {
  return e != null && TO(e.length) && !SO(e);
}
function SO(e) {
  var t = Pu(e) ? ip.call(e) : "";
  return t == aO || t == uO;
}
function TO(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= np;
}
function Pu(e) {
  var t = typeof e;
  return !!e && (t == "object" || t == "function");
}
function PO(e) {
  return !!e && typeof e == "object";
}
function IO(e) {
  return typeof e == "symbol" || PO(e) && ip.call(e) == sO;
}
function RO(e) {
  if (!e)
    return e === 0 ? e : 0;
  if (e = CO(e), e === qd || e === -qd) {
    var t = e < 0 ? -1 : 1;
    return t * oO;
  }
  return e === e ? e : 0;
}
function AO(e) {
  var t = RO(e), r = t % 1;
  return t === t ? r ? t - r : t : 0;
}
function CO(e) {
  if (typeof e == "number")
    return e;
  if (IO(e))
    return Hd;
  if (Pu(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = Pu(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = e.replace(cO, "");
  var r = fO.test(e);
  return r || dO.test(e) ? vO(e.slice(2), r ? 2 : 8) : lO.test(e) ? Hd : +e;
}
var jO = OO;
async function NO(e, t) {
  await $O(e, t), await MO(e, t);
}
async function $O({ id: e }, t) {
  (await vn.get(
    `issues/${e}/sprints?fields=name,id,agile(name,id),goal`
  )).data.forEach((r) => {
    t.addNode("sprint", r), t.addRelation({
      fromNode: "issue",
      from: e,
      toNode: "sprint",
      to: r.id,
      type: "in"
    }), r.agile && (t.addNode("board", r.agile), t.addRelation({
      fromNode: "issue",
      from: e,
      toNode: "board",
      to: r.agile.id,
      type: "in"
    }), t.addRelation({
      fromNode: "sprint",
      from: r.id,
      toNode: "board",
      to: r.agile.id,
      type: "in"
    }));
  });
}
async function MO({ id: e }, t) {
  (await vn.get(
    `issues/${e}/comments?fields=text,id,created,updated,author,attachments(id,url,name)`
  )).data.forEach((r) => {
    t.addNode("comment", r), t.addRelation({
      fromNode: "issue",
      from: e,
      toNode: "comment",
      to: r.id,
      type: "in"
    });
  });
}
async function kO(e) {
  const t = e.getIssues(), r = jO(t, 50);
  for await (const n of r) {
    const i = n.map((o) => NO(o, e));
    await Promise.all(i);
  }
}
async function DO({ query: e, maxDepthLevel: t }) {
  const r = nO(), n = await vn.get(
    `issues?${rp}&query=${encodeURI(e)}`
  );
  return n.data.forEach((i) => r.addIssue(i)), await Yg({
    ids: X_({
      issues: n.data,
      addRelation: r.addIssueRelation
    }),
    isAlreadyLoaded: r.isAlreadyLoaded,
    onLoadedIssue: r.addIssue,
    addRelation: r.addIssueRelation,
    maxDepthLevel: t
  }), await kO(r), {
    issues: r.getIssues(),
    relations: r.getRelations(),
    nodes: r.getNodes()
  };
}
async function UO(e) {
  return DO(e);
}
async function LO({ addNodes: e, addRelations: t, config: r }) {
  vn.defaults.baseURL = r.url, vn.defaults.headers.Authorization = `Bearer ${r.token}`;
  for await (const n of r.issueQueries) {
    const { issues: i, relations: o, nodes: a } = await UO({
      query: n,
      maxDepthLevel: r.issueLoadingMaxDepthLevel
    });
    await e("issue", i);
    for await (const [u, c] of a)
      await e(u, c);
    await t(o);
  }
}
const FO = {
  name: "youtrack-connector",
  connect: LO
};
var d = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function BO(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var op = {}, Fr = {}, ee = {}, we = {}, xO = d && d.__extends || function() {
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
var ap = "ServiceUnavailable";
we.SERVICE_UNAVAILABLE = ap;
var up = "SessionExpired";
we.SESSION_EXPIRED = up;
var WO = "ProtocolError";
we.PROTOCOL_ERROR = WO;
var VO = "N/A", jf = (
  /** @class */
  function(e) {
    xO(t, e);
    function t(r, n, i) {
      var o = (
        // eslint-disable-next-line
        // @ts-ignore: not available in ES6 yet
        e.call(this, r, i != null ? { cause: i } : void 0) || this
      );
      return o.constructor = t, o.__proto__ = t.prototype, o.code = n, o.name = "Neo4jError", o.retriable = zO(n), o;
    }
    return t.isRetriable = function(r) {
      return r != null && r instanceof t && r.retriable;
    }, t;
  }(Error)
);
we.Neo4jError = jf;
function qO(e, t, r) {
  return new jf(e, t ?? VO, r);
}
we.newError = qO;
var HO = jf.isRetriable;
we.isRetriableError = HO;
function zO(e) {
  return e === ap || e === up || GO(e) || YO(e);
}
function YO(e) {
  return (e == null ? void 0 : e.includes("TransientError")) === !0;
}
function GO(e) {
  return e === "Neo.ClientError.Security.AuthorizationExpired";
}
var We = {};
Object.defineProperty(We, "__esModule", { value: !0 });
We.toString = We.toNumber = We.inSafeRange = We.isInt = We.int = void 0;
var ai = we, zd = /* @__PURE__ */ new Map(), at = (
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
        var u = r.div(o), c = r.subtract(u.multiply(o)).toInt() >>> 0, s = c.toString(t);
        if (r = u, r.isZero())
          return s + a;
        for (; s.length < 6; )
          s = "0" + s;
        a = "" + s + a;
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
      var r = e.fromValue(t), n = this.high >>> 16, i = this.high & 65535, o = this.low >>> 16, a = this.low & 65535, u = r.high >>> 16, c = r.high & 65535, s = r.low >>> 16, l = r.low & 65535, v = 0, y = 0, O = 0, E = 0;
      return E += a + l, O += E >>> 16, E &= 65535, O += o + s, y += O >>> 16, O &= 65535, y += i + c, v += y >>> 16, y &= 65535, v += n + u, v &= 65535, e.fromBits(O << 16 | E, v << 16 | y);
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
      if (this.lessThan(Kd) && r.lessThan(Kd))
        return e.fromNumber(this.toNumber() * r.toNumber());
      var n = this.high >>> 16, i = this.high & 65535, o = this.low >>> 16, a = this.low & 65535, u = r.high >>> 16, c = r.high & 65535, s = r.low >>> 16, l = r.low & 65535, v = 0, y = 0, O = 0, E = 0;
      return E += a * l, O += E >>> 16, E &= 65535, O += o * l, y += O >>> 16, O &= 65535, O += a * s, y += O >>> 16, O &= 65535, y += i * l, v += y >>> 16, y &= 65535, y += o * s, v += y >>> 16, y &= 65535, y += a * c, v += y >>> 16, y &= 65535, v += n * l + i * s + o * c + a * u, v &= 65535, e.fromBits(O << 16 | E, v << 16 | y);
    }, e.prototype.div = function(t) {
      var r = e.fromValue(t);
      if (r.isZero())
        throw (0, ai.newError)("division by zero");
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
        for (var u = Math.ceil(Math.log(n) / Math.LN2), c = u <= 48 ? 1 : Math.pow(2, u - 48), s = e.fromNumber(n), l = s.multiply(r); l.isNegative() || l.greaterThan(i); )
          n -= c, s = e.fromNumber(n), l = s.multiply(r);
        s.isZero() && (s = e.ONE), o = o.add(s), i = i.subtract(l);
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
      if (t = t | 0, t >= -128 && t < 128 && (r = zd.get(t), r != null))
        return r;
      var n = new e(t, t < 0 ? -1 : 0);
      return t >= -128 && t < 128 && zd.set(t, n), n;
    }, e.fromBits = function(t, r) {
      return new e(t, r);
    }, e.fromNumber = function(t) {
      return isNaN(t) || !isFinite(t) ? e.ZERO : t <= -Gd ? e.MIN_VALUE : t + 1 >= Gd ? e.MAX_VALUE : t < 0 ? e.fromNumber(-t).negate() : new e(t % Ct | 0, t / Ct | 0);
    }, e.fromString = function(t, r, n) {
      var i = n === void 0 ? {} : n, o = i.strictStringValidation;
      if (t.length === 0)
        throw (0, ai.newError)("number format error: empty string");
      if (t === "NaN" || t === "Infinity" || t === "+Infinity" || t === "-Infinity")
        return e.ZERO;
      if (r = r ?? 10, r < 2 || r > 36)
        throw (0, ai.newError)("radix out of range: " + r.toString());
      var a;
      if ((a = t.indexOf("-")) > 0)
        throw (0, ai.newError)('number format error: interior "-" character: ' + t);
      if (a === 0)
        return e.fromString(t.substring(1), r).negate();
      for (var u = e.fromNumber(Math.pow(r, 8)), c = e.ZERO, s = 0; s < t.length; s += 8) {
        var l = Math.min(8, t.length - s), v = t.substring(s, s + l), y = parseInt(v, r);
        if (o === !0 && !ZO(v, y, r))
          throw (0, ai.newError)('number format error: "'.concat(v, '" is NaN in radix ').concat(r, ": ").concat(t));
        if (l < 8) {
          var O = e.fromNumber(Math.pow(r, l));
          c = c.multiply(O).add(e.fromNumber(y));
        } else
          c = c.multiply(u), c = c.add(e.fromNumber(y));
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
function KO(e, t, r) {
  var n = e.toString(t), i = Math.max(r - n.length, 0), o = "0".repeat(i);
  return "".concat(o).concat(n);
}
function ZO(e, t, r) {
  return !Number.isNaN(e) && !Number.isNaN(t) && KO(t, r, e.length) === e.toLowerCase();
}
Object.defineProperty(at.prototype, "__isInteger__", {
  value: !0,
  enumerable: !1,
  configurable: !1
});
var Yd = 1 << 16, QO = 1 << 24, Ct = Yd * Yd, JO = Ct * Ct, Gd = JO / 2, Kd = at.fromInt(QO), XO = at.fromValue;
We.int = XO;
var e1 = at.isInteger;
We.isInt = e1;
var r1 = at.inSafeRange;
We.inSafeRange = r1;
var t1 = at.toNumber;
We.toNumber = t1;
var n1 = at.toString;
We.toString = n1;
We.default = at;
var Te = {}, Nf = {}, ue = {}, En = {}, Br = {};
Object.defineProperty(Br, "__esModule", { value: !0 });
Br.getBrokenObjectReason = Br.isBrokenObject = Br.createBrokenObject = void 0;
var sp = "__isBrokenObject__", cp = "__reason__";
function i1(e, t) {
  t === void 0 && (t = {});
  var r = function() {
    throw e;
  };
  return new Proxy(t, {
    get: function(n, i) {
      if (i === sp)
        return !0;
      if (i === cp)
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
Br.createBrokenObject = i1;
function o1(e) {
  return e !== null && typeof e == "object" && e[sp] === !0;
}
Br.isBrokenObject = o1;
function a1(e) {
  return e[cp];
}
Br.getBrokenObjectReason = a1;
Object.defineProperty(En, "__esModule", { value: !0 });
En.stringify = void 0;
var Zd = Br;
function u1(e) {
  return JSON.stringify(e, function(t, r) {
    return (0, Zd.isBrokenObject)(r) ? {
      __isBrokenObject__: !0,
      __reason__: (0, Zd.getBrokenObjectReason)(r)
    } : typeof r == "bigint" ? "".concat(r, "n") : r;
  });
}
En.stringify = u1;
Object.defineProperty(ue, "__esModule", { value: !0 });
ue.ENCRYPTION_OFF = ue.ENCRYPTION_ON = ue.validateQueryAndParameters = ue.assertValidDate = ue.assertNumberOrInteger = ue.assertNumber = ue.assertString = ue.assertObject = ue.isString = ue.isObject = ue.isEmptyObjectOrNull = void 0;
var s1 = We, Mt = En, c1 = "ENCRYPTION_ON";
ue.ENCRYPTION_ON = c1;
var l1 = "ENCRYPTION_OFF";
ue.ENCRYPTION_OFF = l1;
function f1(e) {
  if (e === null)
    return !0;
  if (!Yu(e))
    return !1;
  for (var t in e)
    if (e[t] !== void 0)
      return !1;
  return !0;
}
ue.isEmptyObjectOrNull = f1;
function Yu(e) {
  return typeof e == "object" && !Array.isArray(e) && e !== null;
}
ue.isObject = Yu;
function d1(e, t, r) {
  var n, i, o = "", a = t ?? {}, u = (n = r == null ? void 0 : r.skipAsserts) !== null && n !== void 0 ? n : !1;
  return typeof e == "string" ? o = e : e instanceof String ? o = e.toString() : typeof e == "object" && e.text != null && (o = e.text, a = (i = e.parameters) !== null && i !== void 0 ? i : {}), u || (m1(o), y1(a)), { validatedQuery: o, params: a };
}
ue.validateQueryAndParameters = d1;
function h1(e, t) {
  if (!Yu(e))
    throw new TypeError(t + " expected to be an object but was: " + (0, Mt.stringify)(e));
  return e;
}
ue.assertObject = h1;
function lp(e, t) {
  if (!fp(e))
    throw new TypeError((0, Mt.stringify)(t) + " expected to be string but was: " + (0, Mt.stringify)(e));
  return e;
}
ue.assertString = lp;
function v1(e, t) {
  if (typeof e != "number")
    throw new TypeError(t + " expected to be a number but was: " + (0, Mt.stringify)(e));
  return e;
}
ue.assertNumber = v1;
function _1(e, t) {
  if (typeof e != "number" && typeof e != "bigint" && !(0, s1.isInt)(e))
    throw new TypeError(t + " expected to be either a number or an Integer object but was: " + (0, Mt.stringify)(e));
  return e;
}
ue.assertNumberOrInteger = _1;
function p1(e, t) {
  if (Object.prototype.toString.call(e) !== "[object Date]")
    throw new TypeError(t + " expected to be a standard JavaScript Date but was: " + (0, Mt.stringify)(e));
  if (Number.isNaN(e.getTime()))
    throw new TypeError(t + " expected to be valid JavaScript Date but its time was NaN: " + (0, Mt.stringify)(e));
  return e;
}
ue.assertValidDate = p1;
function m1(e) {
  if (lp(e, "Cypher query"), e.trim().length === 0)
    throw new TypeError("Cypher query is expected to be a non-empty string.");
}
function y1(e) {
  if (!Yu(e)) {
    var t = e.constructor != null ? " " + e.constructor.name : "";
    throw new TypeError("Query parameters are expected to either be undefined/null or an object, given:".concat(t, " ").concat(JSON.stringify(e)));
  }
}
function fp(e) {
  return Object.prototype.toString.call(e) === "[object String]";
}
ue.isString = fp;
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
  var i = n(We), o = we, a = ue, u = (
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
  e.YEAR_RANGE = new u(-999999999, 999999999), e.MONTH_OF_YEAR_RANGE = new u(1, 12), e.DAY_OF_MONTH_RANGE = new u(1, 31), e.HOUR_OF_DAY_RANGE = new u(0, 23), e.MINUTE_OF_HOUR_RANGE = new u(0, 59), e.SECOND_OF_MINUTE_RANGE = new u(0, 59), e.NANOSECOND_OF_SECOND_RANGE = new u(0, 999999999), e.MINUTES_PER_HOUR = 60, e.SECONDS_PER_MINUTE = 60, e.SECONDS_PER_HOUR = e.SECONDS_PER_MINUTE * e.MINUTES_PER_HOUR, e.NANOS_PER_SECOND = 1e9, e.NANOS_PER_MILLISECOND = 1e6, e.NANOS_PER_MINUTE = e.NANOS_PER_SECOND * e.SECONDS_PER_MINUTE, e.NANOS_PER_HOUR = e.NANOS_PER_MINUTE * e.MINUTES_PER_HOUR, e.DAYS_0000_TO_1970 = 719528, e.DAYS_PER_400_YEAR_CYCLE = 146097, e.SECONDS_PER_DAY = 86400;
  function c(I, M) {
    return (0, i.int)(I).add(re(M, e.NANOS_PER_SECOND));
  }
  e.normalizeSecondsForDuration = c;
  function s(I) {
    return H(I, e.NANOS_PER_SECOND);
  }
  e.normalizeNanosecondsForDuration = s;
  function l(I, M, W, z) {
    I = (0, i.int)(I), M = (0, i.int)(M), W = (0, i.int)(W), z = (0, i.int)(z);
    var Z = I.multiply(e.NANOS_PER_HOUR);
    return Z = Z.add(M.multiply(e.NANOS_PER_MINUTE)), Z = Z.add(W.multiply(e.NANOS_PER_SECOND)), Z.add(z);
  }
  e.localTimeToNanoOfDay = l;
  function v(I, M, W, z, Z, Re, He) {
    var ir = y(I, M, W), er = V(z, Z, Re);
    return ir.multiply(e.SECONDS_PER_DAY).add(er);
  }
  e.localDateTimeToEpochSecond = v;
  function y(I, M, W) {
    I = (0, i.int)(I), M = (0, i.int)(M), W = (0, i.int)(W);
    var z = I.multiply(365);
    return I.greaterThanOrEqual(0) ? z = z.add(I.add(3).div(4).subtract(I.add(99).div(100)).add(I.add(399).div(400))) : z = z.subtract(I.div(-4).subtract(I.div(-100)).add(I.div(-400))), z = z.add(M.multiply(367).subtract(362).div(12)), z = z.add(W.subtract(1)), M.greaterThan(2) && (z = z.subtract(1), J(I) || (z = z.subtract(1))), z.subtract(e.DAYS_0000_TO_1970);
  }
  e.dateToEpochDay = y;
  function O(I, M, W, z) {
    var Z = B(I), Re = B(M), He = ce(W, z);
    return "P".concat(Z, "M").concat(Re, "DT").concat(He, "S");
  }
  e.durationToIsoString = O;
  function E(I, M, W, z) {
    var Z = B(I, 2), Re = B(M, 2), He = B(W, 2), ir = Ne(z);
    return "".concat(Z, ":").concat(Re, ":").concat(He).concat(ir);
  }
  e.timeToIsoString = E;
  function T(I) {
    if (I = (0, i.int)(I), I.equals(0))
      return "Z";
    var M = I.isNegative();
    M && (I = I.multiply(-1));
    var W = M ? "-" : "+", z = B(I.div(e.SECONDS_PER_HOUR), 2), Z = B(I.div(e.SECONDS_PER_MINUTE).modulo(e.MINUTES_PER_HOUR), 2), Re = I.modulo(e.SECONDS_PER_MINUTE), He = Re.equals(0) ? null : B(Re, 2);
    return He != null ? "".concat(W).concat(z, ":").concat(Z, ":").concat(He) : "".concat(W).concat(z, ":").concat(Z);
  }
  e.timeZoneOffsetToIsoString = T;
  function C(I, M, W) {
    var z = K(I), Z = B(M, 2), Re = B(W, 2);
    return "".concat(z, "-").concat(Z, "-").concat(Re);
  }
  e.dateToIsoString = C;
  function A(I) {
    return new Date(I);
  }
  e.isoStringToStandardDate = A;
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
  function G(I) {
    return se(I, e.YEAR_RANGE, "Year");
  }
  e.assertValidYear = G;
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
  function Ae(I) {
    return se(I, e.NANOSECOND_OF_SECOND_RANGE, "Nanosecond");
  }
  e.assertValidNanosecond = Ae;
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
    var W, z, Z = I.isNegative(), Re = M.greaterThan(0);
    return Z && Re ? I.equals(-1) ? W = "-0" : W = I.add(1).toString() : W = I.toString(), Re && (Z ? z = Ne(M.negate().add(2 * e.NANOS_PER_SECOND).modulo(e.NANOS_PER_SECOND)) : z = Ne(M.add(e.NANOS_PER_SECOND).modulo(e.NANOS_PER_SECOND))), z != null ? W + z : W;
  }
  function Ne(I) {
    return I = (0, i.int)(I), I.equals(0) ? "" : "." + B(I, 9);
  }
  function K(I) {
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
var b1 = d && d.__createBinding || (Object.create ? function(e, t, r, n) {
  n === void 0 && (n = r);
  var i = Object.getOwnPropertyDescriptor(t, r);
  (!i || ("get" in i ? !t.__esModule : i.writable || i.configurable)) && (i = { enumerable: !0, get: function() {
    return t[r];
  } }), Object.defineProperty(e, n, i);
} : function(e, t, r, n) {
  n === void 0 && (n = r), e[n] = t[r];
}), g1 = d && d.__setModuleDefault || (Object.create ? function(e, t) {
  Object.defineProperty(e, "default", { enumerable: !0, value: t });
} : function(e, t) {
  e.default = t;
}), dp = d && d.__importStar || function(e) {
  if (e && e.__esModule)
    return e;
  var t = {};
  if (e != null)
    for (var r in e)
      r !== "default" && Object.prototype.hasOwnProperty.call(e, r) && b1(t, e, r);
  return g1(t, e), t;
}, O1 = d && d.__read || function(e, t) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r)
    return e;
  var n = r.call(e), i, o = [], a;
  try {
    for (; (t === void 0 || t-- > 0) && !(i = n.next()).done; )
      o.push(i.value);
  } catch (u) {
    a = { error: u };
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
var Q = dp(Nf), Ur = ue, w1 = we, Nt = dp(We), Sn = {
  value: !0,
  enumerable: !1,
  configurable: !1,
  writable: !1
}, hp = "__isDuration__", vp = "__isLocalTime__", _p = "__isTime__", pp = "__isDate__", mp = "__isLocalDateTime__", yp = "__isDateTime__", bp = (
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
Te.Duration = bp;
Object.defineProperty(bp.prototype, hp, Sn);
function E1(e) {
  return Tn(e, hp);
}
Te.isDuration = E1;
var gp = (
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
Te.LocalTime = gp;
Object.defineProperty(gp.prototype, vp, Sn);
function S1(e) {
  return Tn(e, vp);
}
Te.isLocalTime = S1;
var Op = (
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
Te.Time = Op;
Object.defineProperty(Op.prototype, _p, Sn);
function T1(e) {
  return Tn(e, _p);
}
Te.isTime = T1;
var wp = (
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
Te.Date = wp;
Object.defineProperty(wp.prototype, pp, Sn);
function P1(e) {
  return Tn(e, pp);
}
Te.isDate = P1;
var Ep = (
  /** @class */
  function() {
    function e(t, r, n, i, o, a, u) {
      this.year = Q.assertValidYear(t), this.month = Q.assertValidMonth(r), this.day = Q.assertValidDay(n), this.hour = Q.assertValidHour(i), this.minute = Q.assertValidMinute(o), this.second = Q.assertValidSecond(a), this.nanosecond = Q.assertValidNanosecond(u), Object.freeze(this);
    }
    return e.fromStandardDate = function(t, r) {
      return Di(t, r), new e(t.getFullYear(), t.getMonth() + 1, t.getDate(), t.getHours(), t.getMinutes(), t.getSeconds(), (0, Nt.toNumber)(Q.totalNanoseconds(t, r)));
    }, e.prototype.toStandardDate = function() {
      return Q.isoStringToStandardDate(this.toString());
    }, e.prototype.toString = function() {
      return Tp(this.year, this.month, this.day, this.hour, this.minute, this.second, this.nanosecond);
    }, e;
  }()
);
Te.LocalDateTime = Ep;
Object.defineProperty(Ep.prototype, mp, Sn);
function I1(e) {
  return Tn(e, mp);
}
Te.isLocalDateTime = I1;
var Sp = (
  /** @class */
  function() {
    function e(t, r, n, i, o, a, u, c, s) {
      this.year = Q.assertValidYear(t), this.month = Q.assertValidMonth(r), this.day = Q.assertValidDay(n), this.hour = Q.assertValidHour(i), this.minute = Q.assertValidMinute(o), this.second = Q.assertValidSecond(a), this.nanosecond = Q.assertValidNanosecond(u);
      var l = O1(A1(c, s), 2), v = l[0], y = l[1];
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
      var t, r = Tp(this.year, this.month, this.day, this.hour, this.minute, this.second, this.nanosecond), n = this.timeZoneOffsetSeconds != null ? Q.timeZoneOffsetToIsoString((t = this.timeZoneOffsetSeconds) !== null && t !== void 0 ? t : 0) : "", i = this.timeZoneId != null ? "[".concat(this.timeZoneId, "]") : "";
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
Te.DateTime = Sp;
Object.defineProperty(Sp.prototype, yp, Sn);
function R1(e) {
  return Tn(e, yp);
}
Te.isDateTime = R1;
function Tn(e, t) {
  return e != null && e[t] === !0;
}
function Tp(e, t, r, n, i, o, a) {
  return Q.dateToIsoString(e, t, r) + "T" + Q.timeToIsoString(n, i, o, a);
}
function A1(e, t) {
  var r = e != null, n = t != null && t !== "";
  if (!r && !n)
    throw (0, w1.newError)(
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
var $f = En, Ui = {
  value: !0,
  enumerable: !1,
  configurable: !1,
  writable: !1
}, Pp = "__isNode__", Ip = "__isRelationship__", Rp = "__isUnboundRelationship__", Ap = "__isPath__", Cp = "__isPathSegment__";
function Li(e, t) {
  return e != null && e[t] === !0;
}
var jp = (
  /** @class */
  function() {
    function e(t, r, n, i) {
      this.identity = t, this.labels = r, this.properties = n, this.elementId = gi(i, function() {
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
je.Node = jp;
Object.defineProperty(jp.prototype, Pp, Ui);
function C1(e) {
  return Li(e, Pp);
}
je.isNode = C1;
var Iu = (
  /** @class */
  function() {
    function e(t, r, n, i, o, a, u, c) {
      this.identity = t, this.start = r, this.end = n, this.type = i, this.properties = o, this.elementId = gi(a, function() {
        return t.toString();
      }), this.startNodeElementId = gi(u, function() {
        return r.toString();
      }), this.endNodeElementId = gi(c, function() {
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
Object.defineProperty(Iu.prototype, Ip, Ui);
function j1(e) {
  return Li(e, Ip);
}
je.isRelationship = j1;
var Np = (
  /** @class */
  function() {
    function e(t, r, n, i) {
      this.identity = t, this.type = r, this.properties = n, this.elementId = gi(i, function() {
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
je.UnboundRelationship = Np;
Object.defineProperty(Np.prototype, Rp, Ui);
function N1(e) {
  return Li(e, Rp);
}
je.isUnboundRelationship = N1;
var $p = (
  /** @class */
  function() {
    function e(t, r, n) {
      this.start = t, this.relationship = r, this.end = n;
    }
    return e;
  }()
);
je.PathSegment = $p;
Object.defineProperty($p.prototype, Cp, Ui);
function $1(e) {
  return Li(e, Cp);
}
je.isPathSegment = $1;
var Mp = (
  /** @class */
  function() {
    function e(t, r, n) {
      this.start = t, this.end = r, this.segments = n, this.length = n.length;
    }
    return e;
  }()
);
je.Path = Mp;
Object.defineProperty(Mp.prototype, Ap, Ui);
function M1(e) {
  return Li(e, Ap);
}
je.isPath = M1;
function gi(e, t) {
  return e ?? t();
}
var Mf = {}, fl = d && d.__generator || function(e, t) {
  var r = { label: 0, sent: function() {
    if (o[0] & 1)
      throw o[1];
    return o[1];
  }, trys: [], ops: [] }, n, i, o, a;
  return a = { next: u(0), throw: u(1), return: u(2) }, typeof Symbol == "function" && (a[Symbol.iterator] = function() {
    return this;
  }), a;
  function u(s) {
    return function(l) {
      return c([s, l]);
    };
  }
  function c(s) {
    if (n)
      throw new TypeError("Generator is already executing.");
    for (; a && (a = 0, s[0] && (r = 0)), r; )
      try {
        if (n = 1, i && (o = s[0] & 2 ? i.return : s[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, s[1])).done)
          return o;
        switch (i = 0, o && (s = [s[0] & 2, o.value]), s[0]) {
          case 0:
          case 1:
            o = s;
            break;
          case 4:
            return r.label++, { value: s[1], done: !1 };
          case 5:
            r.label++, i = s[1], s = [0];
            continue;
          case 7:
            s = r.ops.pop(), r.trys.pop();
            continue;
          default:
            if (o = r.trys, !(o = o.length > 0 && o[o.length - 1]) && (s[0] === 6 || s[0] === 2)) {
              r = 0;
              continue;
            }
            if (s[0] === 3 && (!o || s[1] > o[0] && s[1] < o[3])) {
              r.label = s[1];
              break;
            }
            if (s[0] === 6 && r.label < o[1]) {
              r.label = o[1], o = s;
              break;
            }
            if (o && r.label < o[2]) {
              r.label = o[2], r.ops.push(s);
              break;
            }
            o[2] && r.ops.pop(), r.trys.pop();
            continue;
        }
        s = t.call(e, r);
      } catch (l) {
        s = [6, l], i = 0;
      } finally {
        n = o = 0;
      }
    if (s[0] & 5)
      throw s[1];
    return { value: s[0] ? s[1] : void 0, done: !0 };
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
  } catch (u) {
    a = { error: u };
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
var Qd = we;
function k1(e) {
  var t = {};
  return e.forEach(function(r, n) {
    t[r] = n;
  }), t;
}
var D1 = (
  /** @class */
  function() {
    function e(t, r, n) {
      this.keys = t, this.length = t.length, this._fields = r, this._fieldLookup = n ?? k1(t);
    }
    return e.prototype.forEach = function(t) {
      var r, n;
      try {
        for (var i = dl(this.entries()), o = i.next(); !o.done; o = i.next()) {
          var a = hl(o.value, 2), u = a[0], c = a[1];
          t(c, u, this);
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
    }, e.prototype.map = function(t) {
      var r, n, i = [];
      try {
        for (var o = dl(this.entries()), a = o.next(); !a.done; a = o.next()) {
          var u = hl(a.value, 2), c = u[0], s = u[1];
          i.push(t(s, c, this));
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
          var a = hl(o.value, 2), u = a[0], c = a[1];
          n[u] = c;
        }
      } catch (s) {
        t = { error: s };
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
          throw (0, Qd.newError)("This record has no field with key '".concat(t.toString(), "', available keys are: [") + this.keys.toString() + "].");
      } else
        r = t;
      if (r > this._fields.length - 1 || r < 0)
        throw (0, Qd.newError)("This record has no field with index '" + r.toString() + "'. Remember that indexes start at `0`, and make sure your query returns records in the shape you meant it to.");
      return this._fields[r];
    }, e.prototype.has = function(t) {
      return typeof t == "number" ? t >= 0 && t < this._fields.length : this._fieldLookup[t] !== void 0;
    }, e;
  }()
);
Mf.default = D1;
var _n = {};
Object.defineProperty(_n, "__esModule", { value: !0 });
_n.isPoint = _n.Point = void 0;
var Ja = ue, kp = "__isPoint__", Dp = (
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
_n.Point = Dp;
function Ot(e) {
  return Number.isInteger(e) ? e.toString() + ".0" : e.toString();
}
Object.defineProperty(Dp.prototype, kp, {
  value: !0,
  enumerable: !1,
  configurable: !1,
  writable: !1
});
function U1(e) {
  var t = e;
  return e != null && t[kp] === !0;
}
_n.isPoint = U1;
var xe = {}, L1 = d && d.__createBinding || (Object.create ? function(e, t, r, n) {
  n === void 0 && (n = r);
  var i = Object.getOwnPropertyDescriptor(t, r);
  (!i || ("get" in i ? !t.__esModule : i.writable || i.configurable)) && (i = { enumerable: !0, get: function() {
    return t[r];
  } }), Object.defineProperty(e, n, i);
} : function(e, t, r, n) {
  n === void 0 && (n = r), e[n] = t[r];
}), F1 = d && d.__setModuleDefault || (Object.create ? function(e, t) {
  Object.defineProperty(e, "default", { enumerable: !0, value: t });
} : function(e, t) {
  e.default = t;
}), B1 = d && d.__importStar || function(e) {
  if (e && e.__esModule)
    return e;
  var t = {};
  if (e != null)
    for (var r in e)
      r !== "default" && Object.prototype.hasOwnProperty.call(e, r) && L1(t, e, r);
  return F1(t, e), t;
};
Object.defineProperty(xe, "__esModule", { value: !0 });
xe.Stats = xe.QueryStatistics = xe.ProfiledPlan = xe.Plan = xe.Notification = xe.ServerInfo = xe.queryType = void 0;
var Jd = B1(We), x1 = (
  /** @class */
  function() {
    function e(t, r, n, i) {
      var o, a, u;
      this.query = { text: t, parameters: r }, this.queryType = n.type, this.counters = new Up((o = n.stats) !== null && o !== void 0 ? o : {}), this.updateStatistics = this.counters, this.plan = n.plan != null || n.profile != null ? new Jl((a = n.plan) !== null && a !== void 0 ? a : n.profile) : !1, this.profile = n.profile != null ? new Xl(n.profile) : !1, this.notifications = this._buildNotifications(n.notifications), this.server = new Fp(n.server, i), this.resultConsumedAfter = n.result_consumed_after, this.resultAvailableAfter = n.result_available_after, this.database = { name: (u = n.db) !== null && u !== void 0 ? u : null };
    }
    return e.prototype._buildNotifications = function(t) {
      return t == null ? [] : t.map(function(r) {
        return new Lp(r);
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
var W1 = (
  /** @class */
  function() {
    function e() {
      this.nodesCreated = 0, this.nodesDeleted = 0, this.relationshipsCreated = 0, this.relationshipsDeleted = 0, this.propertiesSet = 0, this.labelsAdded = 0, this.labelsRemoved = 0, this.indexesAdded = 0, this.indexesRemoved = 0, this.constraintsAdded = 0, this.constraintsRemoved = 0;
    }
    return e;
  }()
);
xe.Stats = W1;
var Up = (
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
xe.QueryStatistics = Up;
var Lp = (
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
xe.Notification = Lp;
var Fp = (
  /** @class */
  function() {
    function e(t, r) {
      t != null && (this.address = t.address, this.agent = t.version), this.protocolVersion = r;
    }
    return e;
  }()
);
xe.ServerInfo = Fp;
function sn(e) {
  return e instanceof Jd.default ? e.toInt() : typeof e == "bigint" ? (0, Jd.int)(e).toInt() : e;
}
function tn(e, t, r) {
  if (r === void 0 && (r = 0), t !== !1 && e in t) {
    var n = t[e];
    return sn(n);
  } else
    return r;
}
var V1 = {
  READ_ONLY: "r",
  READ_WRITE: "rw",
  WRITE_ONLY: "w",
  SCHEMA_WRITE: "s"
};
xe.queryType = V1;
xe.default = x1;
var Fi = {}, me = {}, Jr = {};
Object.defineProperty(Jr, "__esModule", { value: !0 });
Jr.FailedObserver = Jr.CompletedObserver = void 0;
var q1 = (
  /** @class */
  function() {
    function e() {
    }
    return e.prototype.subscribe = function(t) {
      Oi(t, t.onKeys, []), Oi(t, t.onCompleted, {});
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
Jr.CompletedObserver = q1;
var H1 = (
  /** @class */
  function() {
    function e(t) {
      var r = t.error, n = t.onError;
      this._error = r, this._beforeError = n, this._observers = [], this.onError(r);
    }
    return e.prototype.subscribe = function(t) {
      Oi(t, t.onError, this._error), this._observers.push(t);
    }, e.prototype.onError = function(t) {
      Oi(this, this._beforeError, t), this._observers.forEach(function(r) {
        return Oi(r, r.onError, t);
      });
    }, e.prototype.cancel = function() {
    }, e.prototype.pause = function() {
    }, e.prototype.resume = function() {
    }, e.prototype.markCompleted = function() {
    }, e.prototype.prepareToHandleSingleResponse = function() {
    }, e;
  }()
);
Jr.FailedObserver = H1;
function Oi(e, t, r) {
  t != null && t.bind(e)(r);
}
var ut = {}, z1 = d && d.__createBinding || (Object.create ? function(e, t, r, n) {
  n === void 0 && (n = r);
  var i = Object.getOwnPropertyDescriptor(t, r);
  (!i || ("get" in i ? !t.__esModule : i.writable || i.configurable)) && (i = { enumerable: !0, get: function() {
    return t[r];
  } }), Object.defineProperty(e, n, i);
} : function(e, t, r, n) {
  n === void 0 && (n = r), e[n] = t[r];
}), Y1 = d && d.__setModuleDefault || (Object.create ? function(e, t) {
  Object.defineProperty(e, "default", { enumerable: !0, value: t });
} : function(e, t) {
  e.default = t;
}), G1 = d && d.__importStar || function(e) {
  if (e && e.__esModule)
    return e;
  var t = {};
  if (e != null)
    for (var r in e)
      r !== "default" && Object.prototype.hasOwnProperty.call(e, r) && z1(t, e, r);
  return Y1(t, e), t;
}, K1 = d && d.__read || function(e, t) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r)
    return e;
  var n = r.call(e), i, o = [], a;
  try {
    for (; (t === void 0 || t-- > 0) && !(i = n.next()).done; )
      o.push(i.value);
  } catch (u) {
    a = { error: u };
  } finally {
    try {
      i && !i.done && (r = n.return) && r.call(n);
    } finally {
      if (a)
        throw a.error;
    }
  }
  return o;
}, Z1 = d && d.__spreadArray || function(e, t, r) {
  if (r || arguments.length === 2)
    for (var n = 0, i = t.length, o; n < i; n++)
      (o || !(n in t)) && (o || (o = Array.prototype.slice.call(t, 0, n)), o[n] = t[n]);
  return e.concat(o || Array.prototype.slice.call(t));
};
Object.defineProperty(ut, "__esModule", { value: !0 });
ut.Bookmarks = void 0;
var Xd = G1(ue), Q1 = "bookmarks", Bp = (
  /** @class */
  function() {
    function e(t) {
      this._values = X1(t);
    }
    return e.empty = function() {
      return J1;
    }, e.prototype.isEmpty = function() {
      return this._values.length === 0;
    }, e.prototype.values = function() {
      return this._values;
    }, e.prototype[Symbol.iterator] = function() {
      return this._values[Symbol.iterator]();
    }, e.prototype.asBeginTransactionParameters = function() {
      var t;
      return this.isEmpty() ? {} : (t = {}, t[Q1] = this._values, t);
    }, e;
  }()
);
ut.Bookmarks = Bp;
var J1 = new Bp(null);
function X1(e) {
  if (e == null || e === "")
    return [];
  if (Xd.isString(e))
    return [e];
  if (Array.isArray(e)) {
    for (var t = /* @__PURE__ */ new Set(), r = xp(e), n = 0; n < r.length; n++) {
      var i = r[n];
      if (i != null) {
        if (!Xd.isString(i))
          throw new TypeError(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            "Bookmark value should be a string, given: '".concat(i, "'")
          );
        t.add(i);
      }
    }
    return Z1([], K1(t), !1);
  }
  throw new TypeError(
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    "Bookmarks should either be a string or a string array, given: '".concat(e, "'")
  );
}
function xp(e) {
  return e.reduce(function(t, r) {
    return Array.isArray(r) ? t.concat(xp(r)) : t.concat(r);
  }, []);
}
var ae = {};
Object.defineProperty(ae, "__esModule", { value: !0 });
ae.BOLT_PROTOCOL_V5_0 = ae.BOLT_PROTOCOL_V4_4 = ae.BOLT_PROTOCOL_V4_3 = ae.BOLT_PROTOCOL_V4_2 = ae.BOLT_PROTOCOL_V4_1 = ae.BOLT_PROTOCOL_V4_0 = ae.BOLT_PROTOCOL_V3 = ae.BOLT_PROTOCOL_V2 = ae.BOLT_PROTOCOL_V1 = ae.DEFAULT_POOL_MAX_SIZE = ae.DEFAULT_POOL_ACQUISITION_TIMEOUT = ae.DEFAULT_CONNECTION_TIMEOUT_MILLIS = ae.ACCESS_MODE_WRITE = ae.ACCESS_MODE_READ = ae.FETCH_ALL = void 0;
var ew = -1;
ae.FETCH_ALL = ew;
var rw = 60 * 1e3;
ae.DEFAULT_POOL_ACQUISITION_TIMEOUT = rw;
var tw = 100;
ae.DEFAULT_POOL_MAX_SIZE = tw;
var nw = 3e4;
ae.DEFAULT_CONNECTION_TIMEOUT_MILLIS = nw;
var iw = "READ";
ae.ACCESS_MODE_READ = iw;
var ow = "WRITE";
ae.ACCESS_MODE_WRITE = ow;
var aw = 1;
ae.BOLT_PROTOCOL_V1 = aw;
var uw = 2;
ae.BOLT_PROTOCOL_V2 = uw;
var sw = 3;
ae.BOLT_PROTOCOL_V3 = sw;
var cw = 4;
ae.BOLT_PROTOCOL_V4_0 = cw;
var lw = 4.1;
ae.BOLT_PROTOCOL_V4_1 = lw;
var fw = 4.2;
ae.BOLT_PROTOCOL_V4_2 = fw;
var dw = 4.3;
ae.BOLT_PROTOCOL_V4_3 = dw;
var hw = 4.4;
ae.BOLT_PROTOCOL_V4_4 = hw;
var vw = 5;
ae.BOLT_PROTOCOL_V5_0 = vw;
var _r = {}, Wp = d && d.__extends || function() {
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
}(), wi = d && d.__awaiter || function(e, t, r, n) {
  function i(o) {
    return o instanceof r ? o : new r(function(a) {
      a(o);
    });
  }
  return new (r || (r = Promise))(function(o, a) {
    function u(l) {
      try {
        s(n.next(l));
      } catch (v) {
        a(v);
      }
    }
    function c(l) {
      try {
        s(n.throw(l));
      } catch (v) {
        a(v);
      }
    }
    function s(l) {
      l.done ? o(l.value) : i(l.value).then(u, c);
    }
    s((n = n.apply(e, t || [])).next());
  });
}, Ei = d && d.__generator || function(e, t) {
  var r = { label: 0, sent: function() {
    if (o[0] & 1)
      throw o[1];
    return o[1];
  }, trys: [], ops: [] }, n, i, o, a;
  return a = { next: u(0), throw: u(1), return: u(2) }, typeof Symbol == "function" && (a[Symbol.iterator] = function() {
    return this;
  }), a;
  function u(s) {
    return function(l) {
      return c([s, l]);
    };
  }
  function c(s) {
    if (n)
      throw new TypeError("Generator is already executing.");
    for (; a && (a = 0, s[0] && (r = 0)), r; )
      try {
        if (n = 1, i && (o = s[0] & 2 ? i.return : s[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, s[1])).done)
          return o;
        switch (i = 0, o && (s = [s[0] & 2, o.value]), s[0]) {
          case 0:
          case 1:
            o = s;
            break;
          case 4:
            return r.label++, { value: s[1], done: !1 };
          case 5:
            r.label++, i = s[1], s = [0];
            continue;
          case 7:
            s = r.ops.pop(), r.trys.pop();
            continue;
          default:
            if (o = r.trys, !(o = o.length > 0 && o[o.length - 1]) && (s[0] === 6 || s[0] === 2)) {
              r = 0;
              continue;
            }
            if (s[0] === 3 && (!o || s[1] > o[0] && s[1] < o[3])) {
              r.label = s[1];
              break;
            }
            if (s[0] === 6 && r.label < o[1]) {
              r.label = o[1], o = s;
              break;
            }
            if (o && r.label < o[2]) {
              r.label = o[2], r.ops.push(s);
              break;
            }
            o[2] && r.ops.pop(), r.trys.pop();
            continue;
        }
        s = t.call(e, r);
      } catch (l) {
        s = [6, l], i = 0;
      } finally {
        n = o = 0;
      }
    if (s[0] & 5)
      throw s[1];
    return { value: s[0] ? s[1] : void 0, done: !0 };
  }
};
Object.defineProperty(_r, "__esModule", { value: !0 });
_r.EMPTY_CONNECTION_HOLDER = _r.ReadOnlyConnectionHolder = _r.ConnectionHolder = void 0;
var _w = we, pw = ue, mw = ae, eh = ut, kf = (
  /** @class */
  function() {
    function e(t) {
      var r = t === void 0 ? {} : t, n = r.mode, i = n === void 0 ? mw.ACCESS_MODE_WRITE : n, o = r.database, a = o === void 0 ? "" : o, u = r.bookmarks, c = r.connectionProvider, s = r.impersonatedUser, l = r.onDatabaseNameResolved, v = r.getConnectionAcquistionBookmarks;
      this._mode = i, this._database = a != null ? (0, pw.assertString)(a, "database") : "", this._bookmarks = u ?? eh.Bookmarks.empty(), this._connectionProvider = c, this._impersonatedUser = s, this._referenceCount = 0, this._connectionPromise = Promise.resolve(null), this._onDatabaseNameResolved = l, this._getConnectionAcquistionBookmarks = v ?? function() {
        return Promise.resolve(eh.Bookmarks.empty());
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
      return wi(this, void 0, void 0, function() {
        var r, n, i;
        return Ei(this, function(o) {
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
      return wi(this, void 0, void 0, function() {
        return Ei(this, function(t) {
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
        return r != null ? r.isOpen() && (r.hasOngoingObservableRequests() || t === !0) ? r.resetAndFlush().catch(rh).then(function() {
          return r._release().then(function() {
            return null;
          });
        }) : r._release().then(function() {
          return null;
        }) : Promise.resolve(null);
      }).catch(rh), this._connectionPromise;
    }, e;
  }()
);
_r.ConnectionHolder = kf;
var Vp = (
  /** @class */
  function(e) {
    Wp(t, e);
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
_r.ReadOnlyConnectionHolder = Vp;
_r.default = Vp;
var yw = (
  /** @class */
  function(e) {
    Wp(t, e);
    function t() {
      return e !== null && e.apply(this, arguments) || this;
    }
    return t.prototype.mode = function() {
    }, t.prototype.database = function() {
    }, t.prototype.initializeConnection = function() {
      return !0;
    }, t.prototype.getConnection = function() {
      return wi(this, void 0, void 0, function() {
        return Ei(this, function(r) {
          switch (r.label) {
            case 0:
              return [4, Promise.reject((0, _w.newError)("This connection holder does not serve connections"))];
            case 1:
              return [2, r.sent()];
          }
        });
      });
    }, t.prototype.releaseConnection = function() {
      return wi(this, void 0, void 0, function() {
        return Ei(this, function(r) {
          switch (r.label) {
            case 0:
              return [4, Promise.resolve(null)];
            case 1:
              return [2, r.sent()];
          }
        });
      });
    }, t.prototype.close = function() {
      return wi(this, void 0, void 0, function() {
        return Ei(this, function(r) {
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
), bw = new yw();
_r.EMPTY_CONNECTION_HOLDER = bw;
function rh(e) {
  return null;
}
var Pn = {}, gw = d && d.__createBinding || (Object.create ? function(e, t, r, n) {
  n === void 0 && (n = r);
  var i = Object.getOwnPropertyDescriptor(t, r);
  (!i || ("get" in i ? !t.__esModule : i.writable || i.configurable)) && (i = { enumerable: !0, get: function() {
    return t[r];
  } }), Object.defineProperty(e, n, i);
} : function(e, t, r, n) {
  n === void 0 && (n = r), e[n] = t[r];
}), Ow = d && d.__setModuleDefault || (Object.create ? function(e, t) {
  Object.defineProperty(e, "default", { enumerable: !0, value: t });
} : function(e, t) {
  e.default = t;
}), ww = d && d.__importStar || function(e) {
  if (e && e.__esModule)
    return e;
  var t = {};
  if (e != null)
    for (var r in e)
      r !== "default" && Object.prototype.hasOwnProperty.call(e, r) && gw(t, e, r);
  return Ow(t, e), t;
};
Object.defineProperty(Pn, "__esModule", { value: !0 });
Pn.TxConfig = void 0;
var Ai = ww(ue), Ew = we, Sw = We, qp = (
  /** @class */
  function() {
    function e(t) {
      Rw(t), this.timeout = Pw(t), this.metadata = Iw(t);
    }
    return e.empty = function() {
      return Tw;
    }, e.prototype.isEmpty = function() {
      return Object.values(this).every(function(t) {
        return t == null;
      });
    }, e;
  }()
);
Pn.TxConfig = qp;
var Tw = new qp({});
function Pw(e) {
  if (Ai.isObject(e) && e.timeout != null) {
    Ai.assertNumberOrInteger(e.timeout, "Transaction timeout");
    var t = (0, Sw.int)(e.timeout);
    if (t.isNegative())
      throw (0, Ew.newError)("Transaction timeout should not be negative");
    return t;
  }
  return null;
}
function Iw(e) {
  if (Ai.isObject(e) && e.metadata != null) {
    var t = e.metadata;
    if (Ai.assertObject(t, "config.metadata"), Object.keys(t).length !== 0)
      return t;
  }
  return null;
}
function Rw(e) {
  e != null && Ai.assertObject(e, "Transaction config");
}
var Bi = {}, Aw = d && d.__awaiter || function(e, t, r, n) {
  function i(o) {
    return o instanceof r ? o : new r(function(a) {
      a(o);
    });
  }
  return new (r || (r = Promise))(function(o, a) {
    function u(l) {
      try {
        s(n.next(l));
      } catch (v) {
        a(v);
      }
    }
    function c(l) {
      try {
        s(n.throw(l));
      } catch (v) {
        a(v);
      }
    }
    function s(l) {
      l.done ? o(l.value) : i(l.value).then(u, c);
    }
    s((n = n.apply(e, t || [])).next());
  });
}, Cw = d && d.__generator || function(e, t) {
  var r = { label: 0, sent: function() {
    if (o[0] & 1)
      throw o[1];
    return o[1];
  }, trys: [], ops: [] }, n, i, o, a;
  return a = { next: u(0), throw: u(1), return: u(2) }, typeof Symbol == "function" && (a[Symbol.iterator] = function() {
    return this;
  }), a;
  function u(s) {
    return function(l) {
      return c([s, l]);
    };
  }
  function c(s) {
    if (n)
      throw new TypeError("Generator is already executing.");
    for (; a && (a = 0, s[0] && (r = 0)), r; )
      try {
        if (n = 1, i && (o = s[0] & 2 ? i.return : s[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, s[1])).done)
          return o;
        switch (i = 0, o && (s = [s[0] & 2, o.value]), s[0]) {
          case 0:
          case 1:
            o = s;
            break;
          case 4:
            return r.label++, { value: s[1], done: !1 };
          case 5:
            r.label++, i = s[1], s = [0];
            continue;
          case 7:
            s = r.ops.pop(), r.trys.pop();
            continue;
          default:
            if (o = r.trys, !(o = o.length > 0 && o[o.length - 1]) && (s[0] === 6 || s[0] === 2)) {
              r = 0;
              continue;
            }
            if (s[0] === 3 && (!o || s[1] > o[0] && s[1] < o[3])) {
              r.label = s[1];
              break;
            }
            if (s[0] === 6 && r.label < o[1]) {
              r.label = o[1], o = s;
              break;
            }
            if (o && r.label < o[2]) {
              r.label = o[2], r.ops.push(s);
              break;
            }
            o[2] && r.ops.pop(), r.trys.pop();
            continue;
        }
        s = t.call(e, r);
      } catch (l) {
        s = [6, l], i = 0;
      } finally {
        n = o = 0;
      }
    if (s[0] & 5)
      throw s[1];
    return { value: s[0] ? s[1] : void 0, done: !0 };
  }
};
Object.defineProperty(Bi, "__esModule", { value: !0 });
Bi.TransactionExecutor = void 0;
var ui = we, jw = 30 * 1e3, Nw = 1e3, $w = 2, Mw = 0.2, kw = (
  /** @class */
  function() {
    function e(t, r, n, i) {
      this._maxRetryTimeMs = Xa(t, jw), this._initialRetryDelayMs = Xa(r, Nw), this._multiplier = Xa(n, $w), this._jitterFactor = Xa(i, Mw), this._inFlightTimeoutIds = [], this._verifyAfterConstruction();
    }
    return e.prototype.execute = function(t, r, n) {
      var i = this;
      return new Promise(function(o, a) {
        i._executeTransactionInsidePromise(t, r, o, a, n).catch(a);
      }).catch(function(o) {
        var a = Date.now(), u = i._initialRetryDelayMs;
        return i._retryTransactionPromise(t, r, o, a, u, n);
      });
    }, e.prototype.close = function() {
      this._inFlightTimeoutIds.forEach(function(t) {
        return clearTimeout(t);
      }), this._inFlightTimeoutIds = [];
    }, e.prototype._retryTransactionPromise = function(t, r, n, i, o, a) {
      var u = this, c = Date.now() - i;
      return c > this._maxRetryTimeMs || !(0, ui.isRetriableError)(n) ? Promise.reject(n) : new Promise(function(s, l) {
        var v = u._computeDelayWithJitter(o), y = setTimeout(function() {
          u._inFlightTimeoutIds = u._inFlightTimeoutIds.filter(function(O) {
            return O !== y;
          }), u._executeTransactionInsidePromise(t, r, s, l, a).catch(l);
        }, v);
        u._inFlightTimeoutIds.push(y);
      }).catch(function(s) {
        var l = o * u._multiplier;
        return u._retryTransactionPromise(t, r, s, i, l, a);
      });
    }, e.prototype._executeTransactionInsidePromise = function(t, r, n, i, o) {
      return Aw(this, void 0, void 0, function() {
        var a, u, c, s, l, v = this;
        return Cw(this, function(y) {
          switch (y.label) {
            case 0:
              return y.trys.push([0, 2, , 3]), [4, t()];
            case 1:
              return a = y.sent(), [3, 3];
            case 2:
              return u = y.sent(), i(u), [
                2
                /*return*/
              ];
            case 3:
              return c = o ?? function(O) {
                return O;
              }, s = c(a), l = this._safeExecuteTransactionWork(s, r), l.then(function(O) {
                return v._handleTransactionWorkSuccess(O, a, n, i);
              }).catch(function(O) {
                return v._handleTransactionWorkFailure(O, a, i);
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
        throw (0, ui.newError)("Max retry time should be >= 0: " + this._maxRetryTimeMs.toString());
      if (this._initialRetryDelayMs < 0)
        throw (0, ui.newError)("Initial retry delay should >= 0: " + this._initialRetryDelayMs.toString());
      if (this._multiplier < 1)
        throw (0, ui.newError)("Multiplier should be >= 1.0: " + this._multiplier.toString());
      if (this._jitterFactor < 0 || this._jitterFactor > 1)
        throw (0, ui.newError)("Jitter factor should be in [0.0, 1.0]: " + this._jitterFactor.toFixed());
    }, e;
  }()
);
Bi.TransactionExecutor = kw;
function Xa(e, t) {
  return e ?? t;
}
var xi = {}, Dw = d && d.__extends || function() {
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
var Hp = we, ef = "error", rf = "warn", Ci = "info", tf = "debug", Uw = Ci, Ru = (nn = {}, nn[ef] = 0, nn[rf] = 1, nn[Ci] = 2, nn[tf] = 3, nn), zp = (
  /** @class */
  function() {
    function e(t, r) {
      this._level = t, this._loggerFunction = r;
    }
    return e.create = function(t) {
      if ((t == null ? void 0 : t.logging) != null) {
        var r = t.logging, n = Bw(r), i = xw(r);
        return new e(n, i);
      }
      return this.noOp();
    }, e.noOp = function() {
      return Fw;
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
xi.Logger = zp;
var Lw = (
  /** @class */
  function(e) {
    Dw(t, e);
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
  }(zp)
), Fw = new Lw();
function eu(e, t) {
  return Ru[e] >= Ru[t];
}
function Bw(e) {
  if ((e == null ? void 0 : e.level) != null) {
    var t = e.level, r = Ru[t];
    if (r == null && r !== 0)
      throw (0, Hp.newError)("Illegal logging level: ".concat(t, ". Supported levels are: ").concat(Object.keys(Ru).toString()));
    return t;
  }
  return Uw;
}
function xw(e) {
  var t, r;
  if ((e == null ? void 0 : e.logger) != null) {
    var n = e.logger;
    if (n != null && typeof n == "function")
      return n;
  }
  throw (0, Hp.newError)("Illegal logger function: ".concat((r = (t = e == null ? void 0 : e.logger) === null || t === void 0 ? void 0 : t.toString()) !== null && r !== void 0 ? r : "undefined"));
}
var tr = {}, Au = d && d.__assign || function() {
  return Au = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var i in t)
        Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
    }
    return e;
  }, Au.apply(this, arguments);
}, Yp = d && d.__read || function(e, t) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r)
    return e;
  var n = r.call(e), i, o = [], a;
  try {
    for (; (t === void 0 || t-- > 0) && !(i = n.next()).done; )
      o.push(i.value);
  } catch (u) {
    a = { error: u };
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
var Ww = ue, Vw = 7687, qw = 7474, Hw = 7473, Gp = (
  /** @class */
  function() {
    function e(t, r, n, i, o) {
      this.scheme = t, this.host = r, this.port = n, this.hostAndPort = i, this.query = o;
    }
    return e;
  }()
);
tr.Url = Gp;
function zw(e) {
  var t;
  (0, Ww.assertString)(e, "URL");
  var r = Gw(e), n = nE(r.url), i = r.schemeMissing ? null : Kw(n.scheme), o = Zw(n.host), a = eE(o), u = Qw(n.port, i), c = "".concat(a, ":").concat(u), s = Jw(
    // @ts-expect-error
    (t = n.query) !== null && t !== void 0 ? t : Yw(n.resourceName),
    e
  );
  return new Gp(i, o, u, c, s);
}
tr.parseDatabaseUrl = zw;
function Yw(e) {
  if (typeof e != "string")
    return null;
  var t = Yp(e.split("?"), 2), r = t[1];
  return r;
}
function Gw(e) {
  return e = e.trim(), e.includes("://") ? { schemeMissing: !1, url: e } : { schemeMissing: !0, url: "none://".concat(e) };
}
function Kw(e) {
  return e != null ? (e = e.trim(), e.charAt(e.length - 1) === ":" && (e = e.substring(0, e.length - 1)), e) : null;
}
function Zw(e, t) {
  if (e == null)
    throw new Error("Unable to extract host from null or undefined URL");
  return e.trim();
}
function Qw(e, t) {
  var r = typeof e == "string" ? parseInt(e, 10) : e;
  return r != null && !isNaN(r) ? r : Zp(t);
}
function Jw(e, t) {
  var r = e != null ? Xw(e) : null, n = {};
  return r != null && r.split("&").forEach(function(i) {
    var o = i.split("=");
    if (o.length !== 2)
      throw new Error("Invalid parameters: '".concat(o.toString(), "' in URL '").concat(t, "'."));
    var a = th(o[0], "key", t), u = th(o[1], "value", t);
    if (n[a] !== void 0)
      throw new Error("Duplicated query parameters with key '".concat(a, "' in URL '").concat(t, "'"));
    n[a] = u;
  }), n;
}
function Xw(e) {
  return e = (e ?? "").trim(), (e == null ? void 0 : e.charAt(0)) === "?" && (e = e.substring(1, e.length)), e;
}
function th(e, t, r) {
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
function eE(e) {
  if (e === "" || e == null)
    throw new Error("Illegal host ".concat(e));
  var t = e.includes(":");
  return t ? Kp(e) : e;
}
function rE(e, t) {
  return "".concat(e, ":").concat(t);
}
tr.formatIPv4Address = rE;
function tE(e, t) {
  var r = Kp(e);
  return "".concat(r, ":").concat(t);
}
tr.formatIPv6Address = tE;
function Zp(e) {
  return e === "http" ? qw : e === "https" ? Hw : Vw;
}
tr.defaultPortForScheme = Zp;
function nE(e) {
  function t(u, c) {
    var s = u.indexOf(c);
    return s >= 0 ? [u.substring(0, s), u[s], u.substring(s + 1)] : [u, "", ""];
  }
  function r(u, c) {
    var s = u.lastIndexOf(c);
    return s >= 0 ? [u.substring(0, s), u[s], u.substring(s + 1)] : ["", "", u];
  }
  function n(u, c, s) {
    var l = t(u, c), v = t(l[2], s);
    return [v[0], v[2]];
  }
  function i(u) {
    var c = {}, s;
    s = r(u, "@"), s[1] === "@" && (c.userInfo = decodeURIComponent(s[0]), u = s[2]);
    var l = Yp(n(u, "[", "]"), 2), v = l[0], y = l[1];
    return v !== "" ? (c.host = v, s = t(y, ":")) : (s = t(u, ":"), c.host = s[0]), s[1] === ":" && (c.port = s[2]), c;
  }
  var o = {}, a;
  return a = t(e, ":"), a[1] === ":" && (o.scheme = decodeURIComponent(a[0]), e = a[2]), a = t(e, "#"), a[1] === "#" && (o.fragment = decodeURIComponent(a[2]), e = a[0]), a = t(e, "?"), a[1] === "?" && (o.query = a[2], e = a[0]), e.startsWith("//") ? (a = t(e.substr(2), "/"), o = Au(Au({}, o), i(a[0])), o.path = a[1] + a[2]) : o.path = e, o;
}
var Wi = {}, iE = d && d.__createBinding || (Object.create ? function(e, t, r, n) {
  n === void 0 && (n = r);
  var i = Object.getOwnPropertyDescriptor(t, r);
  (!i || ("get" in i ? !t.__esModule : i.writable || i.configurable)) && (i = { enumerable: !0, get: function() {
    return t[r];
  } }), Object.defineProperty(e, n, i);
} : function(e, t, r, n) {
  n === void 0 && (n = r), e[n] = t[r];
}), oE = d && d.__setModuleDefault || (Object.create ? function(e, t) {
  Object.defineProperty(e, "default", { enumerable: !0, value: t });
} : function(e, t) {
  e.default = t;
}), aE = d && d.__importStar || function(e) {
  if (e && e.__esModule)
    return e;
  var t = {};
  if (e != null)
    for (var r in e)
      r !== "default" && Object.prototype.hasOwnProperty.call(e, r) && iE(t, e, r);
  return oE(t, e), t;
};
Object.defineProperty(Wi, "__esModule", { value: !0 });
Wi.ServerAddress = void 0;
var vl = ue, uE = aE(tr), sE = (
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
      var r = uE.parseDatabaseUrl(t);
      return new e(r.host, null, r.port, r.hostAndPort);
    }, e;
  }()
);
Wi.ServerAddress = sE;
var pn = {}, Df = {};
Object.defineProperty(Df, "__esModule", { value: !0 });
var cE = (
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
Df.default = cE;
var Gu = {};
Object.defineProperty(Gu, "__esModule", { value: !0 });
var lE = Wi;
function fE(e) {
  return Promise.resolve([e]);
}
var dE = (
  /** @class */
  function() {
    function e(t) {
      this._resolverFunction = t ?? fE;
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
          return lE.ServerAddress.fromUrl(i);
        });
      });
    }, e;
  }()
);
Gu.default = dE;
var Qp = d && d.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(pn, "__esModule", { value: !0 });
pn.ConfiguredCustomResolver = pn.BaseHostNameResolver = void 0;
var hE = Qp(Df);
pn.BaseHostNameResolver = hE.default;
var vE = Qp(Gu);
pn.ConfiguredCustomResolver = vE.default;
var _E = d && d.__createBinding || (Object.create ? function(e, t, r, n) {
  n === void 0 && (n = r);
  var i = Object.getOwnPropertyDescriptor(t, r);
  (!i || ("get" in i ? !t.__esModule : i.writable || i.configurable)) && (i = { enumerable: !0, get: function() {
    return t[r];
  } }), Object.defineProperty(e, n, i);
} : function(e, t, r, n) {
  n === void 0 && (n = r), e[n] = t[r];
}), pE = d && d.__setModuleDefault || (Object.create ? function(e, t) {
  Object.defineProperty(e, "default", { enumerable: !0, value: t });
} : function(e, t) {
  e.default = t;
}), nr = d && d.__importStar || function(e) {
  if (e && e.__esModule)
    return e;
  var t = {};
  if (e != null)
    for (var r in e)
      r !== "default" && Object.prototype.hasOwnProperty.call(e, r) && _E(t, e, r);
  return pE(t, e), t;
};
Object.defineProperty(me, "__esModule", { value: !0 });
me.objectUtil = me.resolver = me.serverAddress = me.urlUtil = me.logger = me.transactionExecutor = me.txConfig = me.connectionHolder = me.constants = me.bookmarks = me.observer = me.temporalUtil = me.util = void 0;
var mE = nr(ue);
me.util = mE;
var yE = nr(Nf);
me.temporalUtil = yE;
var bE = nr(Jr);
me.observer = bE;
var gE = nr(ut);
me.bookmarks = gE;
var OE = nr(ae);
me.constants = OE;
var wE = nr(_r);
me.connectionHolder = wE;
var EE = nr(Pn);
me.txConfig = EE;
var SE = nr(Bi);
me.transactionExecutor = SE;
var TE = nr(xi);
me.logger = TE;
var PE = nr(tr);
me.urlUtil = PE;
var IE = nr(Wi);
me.serverAddress = IE;
var RE = nr(pn);
me.resolver = RE;
var AE = nr(Br);
me.objectUtil = AE;
var wt = d && d.__awaiter || function(e, t, r, n) {
  function i(o) {
    return o instanceof r ? o : new r(function(a) {
      a(o);
    });
  }
  return new (r || (r = Promise))(function(o, a) {
    function u(l) {
      try {
        s(n.next(l));
      } catch (v) {
        a(v);
      }
    }
    function c(l) {
      try {
        s(n.throw(l));
      } catch (v) {
        a(v);
      }
    }
    function s(l) {
      l.done ? o(l.value) : i(l.value).then(u, c);
    }
    s((n = n.apply(e, t || [])).next());
  });
}, Et = d && d.__generator || function(e, t) {
  var r = { label: 0, sent: function() {
    if (o[0] & 1)
      throw o[1];
    return o[1];
  }, trys: [], ops: [] }, n, i, o, a;
  return a = { next: u(0), throw: u(1), return: u(2) }, typeof Symbol == "function" && (a[Symbol.iterator] = function() {
    return this;
  }), a;
  function u(s) {
    return function(l) {
      return c([s, l]);
    };
  }
  function c(s) {
    if (n)
      throw new TypeError("Generator is already executing.");
    for (; a && (a = 0, s[0] && (r = 0)), r; )
      try {
        if (n = 1, i && (o = s[0] & 2 ? i.return : s[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, s[1])).done)
          return o;
        switch (i = 0, o && (s = [s[0] & 2, o.value]), s[0]) {
          case 0:
          case 1:
            o = s;
            break;
          case 4:
            return r.label++, { value: s[1], done: !1 };
          case 5:
            r.label++, i = s[1], s = [0];
            continue;
          case 7:
            s = r.ops.pop(), r.trys.pop();
            continue;
          default:
            if (o = r.trys, !(o = o.length > 0 && o[o.length - 1]) && (s[0] === 6 || s[0] === 2)) {
              r = 0;
              continue;
            }
            if (s[0] === 3 && (!o || s[1] > o[0] && s[1] < o[3])) {
              r.label = s[1];
              break;
            }
            if (s[0] === 6 && r.label < o[1]) {
              r.label = o[1], o = s;
              break;
            }
            if (o && r.label < o[2]) {
              r.label = o[2], r.ops.push(s);
              break;
            }
            o[2] && r.ops.pop(), r.trys.pop();
            continue;
        }
        s = t.call(e, r);
      } catch (l) {
        s = [6, l], i = 0;
      } finally {
        n = o = 0;
      }
    if (s[0] & 5)
      throw s[1];
    return { value: s[0] ? s[1] : void 0, done: !0 };
  }
}, CE = d && d.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(Fi, "__esModule", { value: !0 });
var jE = CE(xe), Jp = me, si = we, NE = Jp.connectionHolder.EMPTY_CONNECTION_HOLDER, $E = function(e) {
  console.log("Uncaught error when processing result: " + e);
}, ME = function(e) {
}, kE = function(e) {
}, DE = (
  /** @class */
  function() {
    function e(t, r, n, i, o) {
      o === void 0 && (o = { high: Number.MAX_VALUE, low: Number.MAX_VALUE }), this._stack = UE(), this._streamObserverPromise = t, this._p = null, this._query = r, this._parameters = n ?? {}, this._connectionHolder = i ?? NE, this._keys = null, this._summary = null, this._error = null, this._watermarks = o;
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
        var r = (0, si.newError)("Result is already consumed");
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
        var u, c;
        if (n.streaming != null) {
          var s = (c = (u = n.queuedObserver) === null || u === void 0 ? void 0 : u.size) !== null && c !== void 0 ? c : 0, l = s >= t._watermarks.high, v = s <= t._watermarks.low;
          l && !n.paused ? (n.paused = !0, n.streaming.pause()) : (v && n.paused || n.firstRun && !l) && (n.firstRun = !1, n.paused = !1, n.streaming.resume());
        }
      }, o = function() {
        return wt(t, void 0, void 0, function() {
          var u;
          return Et(this, function(c) {
            switch (c.label) {
              case 0:
                return n.queuedObserver !== void 0 ? [3, 2] : (n.queuedObserver = this._createQueuedResultObserver(i), u = n, [4, this._subscribe(n.queuedObserver, !0).catch(function() {
                })]);
              case 1:
                u.streaming = c.sent(), i(), c.label = 2;
              case 2:
                return [2, n.queuedObserver];
            }
          });
        });
      }, a = function(u) {
        if (u === void 0)
          throw (0, si.newError)("InvalidState: Result stream finished without Summary", si.PROTOCOL_ERROR);
        return !0;
      };
      return {
        next: function() {
          return wt(t, void 0, void 0, function() {
            var u, c;
            return Et(this, function(s) {
              switch (s.label) {
                case 0:
                  return n.finished && a(n.summary) ? [2, { done: !0, value: n.summary }] : [4, o()];
                case 1:
                  return u = s.sent(), [4, u.dequeue()];
                case 2:
                  return c = s.sent(), c.done === !0 && (n.finished = c.done, n.summary = c.value), [2, c];
              }
            });
          });
        },
        return: function(u) {
          return wt(t, void 0, void 0, function() {
            var c, s, l;
            return Et(this, function(v) {
              switch (v.label) {
                case 0:
                  return n.finished && a(n.summary) ? [2, { done: !0, value: u ?? n.summary }] : ((l = n.streaming) === null || l === void 0 || l.cancel(), [4, o()]);
                case 1:
                  return c = v.sent(), [4, c.dequeueUntilDone()];
                case 2:
                  return s = v.sent(), n.finished = !0, s.value = u ?? s.value, n.summary = s.value, [2, s];
              }
            });
          });
        },
        peek: function() {
          return wt(t, void 0, void 0, function() {
            var u;
            return Et(this, function(c) {
              switch (c.label) {
                case 0:
                  return n.finished && a(n.summary) ? [2, { done: !0, value: n.summary }] : [4, o()];
                case 1:
                  return u = c.sent(), [4, u.head()];
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
      var r = this, n, i, o, a = (n = t.onCompleted) !== null && n !== void 0 ? n : ME, u = (i = t.onError) !== null && i !== void 0 ? i : $E, c = (o = t.onKeys) !== null && o !== void 0 ? o : kE, s = function(y) {
        r._releaseConnectionAndGetSummary(y).then(function(O) {
          return r._summary !== null ? a.call(t, r._summary) : (r._summary = O, a.call(t, O));
        }).catch(u);
      }, l = function(y) {
        r._connectionHolder.releaseConnection().then(function() {
          LE(y, r._stack), r._error = y, u.call(t, y);
        }).catch(u);
      }, v = function(y) {
        return r._keys = y, c.call(t, y);
      };
      return {
        onNext: t.onNext != null ? t.onNext.bind(t) : void 0,
        onKeys: v,
        onCompleted: s,
        onError: l
      };
    }, e.prototype._cancel = function() {
      this._summary === null && this._error === null && this._streamObserverPromise.then(function(t) {
        return t.cancel();
      }).catch(function() {
      });
    }, e.prototype._releaseConnectionAndGetSummary = function(t) {
      var r = Jp.util.validateQueryAndParameters(this._query, this._parameters, {
        skipAsserts: !0
      }), n = r.validatedQuery, i = r.params, o = this._connectionHolder;
      return o.getConnection().then(
        // onFulfilled:
        function(a) {
          return o.releaseConnection().then(function() {
            var u;
            return (u = a == null ? void 0 : a.protocol()) === null || u === void 0 ? void 0 : u.version;
          });
        },
        // onRejected:
        function(a) {
        }
      ).then(function(a) {
        return new jE.default(n, i, t, a);
      });
    }, e.prototype._createQueuedResultObserver = function(t) {
      var r = this;
      function n() {
        var s = {};
        return s.promise = new Promise(function(l, v) {
          s.resolve = l, s.reject = v;
        }), s;
      }
      function i(s) {
        return s instanceof Error;
      }
      function o() {
        var s;
        return wt(this, void 0, void 0, function() {
          var l;
          return Et(this, function(v) {
            switch (v.label) {
              case 0:
                if (a.length > 0) {
                  if (l = (s = a.shift()) !== null && s !== void 0 ? s : (0, si.newError)("Unexpected empty buffer", si.PROTOCOL_ERROR), t(), i(l))
                    throw l;
                  return [2, l];
                }
                return u.resolvable = n(), [4, u.resolvable.promise];
              case 1:
                return [2, v.sent()];
            }
          });
        });
      }
      var a = [], u = { resolvable: null }, c = {
        onNext: function(s) {
          c._push({ done: !1, value: s });
        },
        onCompleted: function(s) {
          c._push({ done: !0, value: s });
        },
        onError: function(s) {
          c._push(s);
        },
        _push: function(s) {
          if (u.resolvable !== null) {
            var l = u.resolvable;
            u.resolvable = null, i(s) ? l.reject(s) : l.resolve(s);
          } else
            a.push(s), t();
        },
        dequeue: o,
        dequeueUntilDone: function() {
          return wt(r, void 0, void 0, function() {
            var s;
            return Et(this, function(l) {
              switch (l.label) {
                case 0:
                  return [4, o()];
                case 1:
                  return s = l.sent(), s.done === !0 ? [2, s] : [3, 0];
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
            var s, s, l;
            return Et(this, function(v) {
              switch (v.label) {
                case 0:
                  if (a.length > 0) {
                    if (s = a[0], i(s))
                      throw s;
                    return [2, s];
                  }
                  u.resolvable = n(), v.label = 1;
                case 1:
                  return v.trys.push([1, 3, 4, 5]), [4, u.resolvable.promise];
                case 2:
                  return s = v.sent(), a.unshift(s), [2, s];
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
function UE() {
  var e = new Error("");
  return e.stack != null ? e.stack.replace(/^Error(\n\r)*/, "") : null;
}
function LE(e, t) {
  t != null && (e.stack = e.toString() + `
` + t);
}
Fi.default = DE;
var Ku = {};
Object.defineProperty(Ku, "__esModule", { value: !0 });
var FE = (
  /** @class */
  function() {
    function e(t, r, n) {
      this.keys = t, this.records = r, this.summary = n;
    }
    return e;
  }()
);
Ku.default = FE;
var Uf = {};
Object.defineProperty(Uf, "__esModule", { value: !0 });
var BE = (
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
Uf.default = BE;
var Lf = {};
Object.defineProperty(Lf, "__esModule", { value: !0 });
var xE = (
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
Lf.default = xE;
var Zu = {}, nh = d && d.__awaiter || function(e, t, r, n) {
  function i(o) {
    return o instanceof r ? o : new r(function(a) {
      a(o);
    });
  }
  return new (r || (r = Promise))(function(o, a) {
    function u(l) {
      try {
        s(n.next(l));
      } catch (v) {
        a(v);
      }
    }
    function c(l) {
      try {
        s(n.throw(l));
      } catch (v) {
        a(v);
      }
    }
    function s(l) {
      l.done ? o(l.value) : i(l.value).then(u, c);
    }
    s((n = n.apply(e, t || [])).next());
  });
}, ih = d && d.__generator || function(e, t) {
  var r = { label: 0, sent: function() {
    if (o[0] & 1)
      throw o[1];
    return o[1];
  }, trys: [], ops: [] }, n, i, o, a;
  return a = { next: u(0), throw: u(1), return: u(2) }, typeof Symbol == "function" && (a[Symbol.iterator] = function() {
    return this;
  }), a;
  function u(s) {
    return function(l) {
      return c([s, l]);
    };
  }
  function c(s) {
    if (n)
      throw new TypeError("Generator is already executing.");
    for (; a && (a = 0, s[0] && (r = 0)), r; )
      try {
        if (n = 1, i && (o = s[0] & 2 ? i.return : s[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, s[1])).done)
          return o;
        switch (i = 0, o && (s = [s[0] & 2, o.value]), s[0]) {
          case 0:
          case 1:
            o = s;
            break;
          case 4:
            return r.label++, { value: s[1], done: !1 };
          case 5:
            r.label++, i = s[1], s = [0];
            continue;
          case 7:
            s = r.ops.pop(), r.trys.pop();
            continue;
          default:
            if (o = r.trys, !(o = o.length > 0 && o[o.length - 1]) && (s[0] === 6 || s[0] === 2)) {
              r = 0;
              continue;
            }
            if (s[0] === 3 && (!o || s[1] > o[0] && s[1] < o[3])) {
              r.label = s[1];
              break;
            }
            if (s[0] === 6 && r.label < o[1]) {
              r.label = o[1], o = s;
              break;
            }
            if (o && r.label < o[2]) {
              r.label = o[2], r.ops.push(s);
              break;
            }
            o[2] && r.ops.pop(), r.trys.pop();
            continue;
        }
        s = t.call(e, r);
      } catch (l) {
        s = [6, l], i = 0;
      } finally {
        n = o = 0;
      }
    if (s[0] & 5)
      throw s[1];
    return { value: s[0] ? s[1] : void 0, done: !0 };
  }
}, WE = d && d.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(Zu, "__esModule", { value: !0 });
var VE = ue, Si = _r, wu = ut, qE = Pn, fr = Jr, hr = we, Xp = WE(Fi), HE = (
  /** @class */
  function() {
    function e(t) {
      var r = t.connectionHolder, n = t.onClose, i = t.onBookmarks, o = t.onConnection, a = t.reactive, u = t.fetchSize, c = t.impersonatedUser, s = t.highRecordWatermark, l = t.lowRecordWatermark, v = this;
      this._connectionHolder = r, this._reactive = a, this._state = vr.ACTIVE, this._onClose = n, this._onBookmarks = i, this._onConnection = o, this._onError = this._onErrorCallback.bind(this), this._fetchSize = u, this._onComplete = this._onCompleteCallback.bind(this), this._results = [], this._impersonatedUser = c, this._lowRecordWatermak = l, this._highRecordWatermark = s, this._bookmarks = wu.Bookmarks.empty(), this._acceptActive = function() {
      }, this._activePromise = new Promise(function(y, O) {
        v._acceptActive = y;
      });
    }
    return e.prototype._begin = function(t, r, n) {
      var i = this;
      this._connectionHolder.getConnection().then(function(o) {
        return nh(i, void 0, void 0, function() {
          var a, u = this;
          return ih(this, function(c) {
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
                  beforeError: function(s) {
                    return n != null && n.onError(s), u._onError(s);
                  },
                  afterComplete: function(s) {
                    return n != null && n.onComplete(s), u._onComplete(s);
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
      var n = (0, VE.validateQueryAndParameters)(t, r), i = n.validatedQuery, o = n.params, a = this._state.run(i, o, {
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
      return nh(this, void 0, void 0, function() {
        return ih(this, function(t) {
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
        result: oh(!0, t, r, n, i, o, a),
        state: vr.SUCCEEDED
      };
    },
    rollback: function(e) {
      var t = e.connectionHolder, r = e.onError, n = e.onComplete, i = e.onConnection, o = e.pendingResults, a = e.preparationJob;
      return {
        result: oh(!1, t, r, n, i, o, a),
        state: vr.ROLLED_BACK
      };
    },
    run: function(e, t, r) {
      var n = r.connectionHolder, i = r.onError, o = r.onComplete, a = r.onConnection, u = r.reactive, c = r.fetchSize, s = r.highRecordWatermark, l = r.lowRecordWatermark, v = r.preparationJob, y = v ?? Promise.resolve(), O = n.getConnection().then(function(E) {
        return y.then(function() {
          return E;
        });
      }).then(function(E) {
        if (a(), E != null)
          return E.protocol().run(e, t, {
            bookmarks: wu.Bookmarks.empty(),
            txConfig: qE.TxConfig.empty(),
            beforeError: i,
            afterComplete: o,
            reactive: u,
            fetchSize: c,
            highRecordWatermark: s,
            lowRecordWatermark: l
          });
        throw (0, hr.newError)("No connection available");
      }).catch(function(E) {
        return new fr.FailedObserver({ error: E, onError: i });
      });
      return wr(O, e, t, n, s, l);
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
          Si.EMPTY_CONNECTION_HOLDER,
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
          Si.EMPTY_CONNECTION_HOLDER,
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
function oh(e, t, r, n, i, o, a) {
  var u = a ?? Promise.resolve(), c = t.getConnection().then(function(s) {
    return u.then(function() {
      return s;
    });
  }).then(function(s) {
    return i(), o.forEach(function(l) {
      return l._cancel();
    }), Promise.all(o.map(function(l) {
      return l.summary();
    })).then(function(l) {
      if (s != null)
        return e ? s.protocol().commitTransaction({
          beforeError: r,
          afterComplete: n
        }) : s.protocol().rollbackTransaction({
          beforeError: r,
          afterComplete: n
        });
      throw (0, hr.newError)("No connection available");
    });
  }).catch(function(s) {
    return new fr.FailedObserver({ error: s, onError: r });
  });
  return new Xp.default(c, e ? "COMMIT" : "ROLLBACK", {}, t, {
    high: Number.MAX_VALUE,
    low: Number.MAX_VALUE
  });
}
function wr(e, t, r, n, i, o) {
  return n === void 0 && (n = Si.EMPTY_CONNECTION_HOLDER), new Xp.default(Promise.resolve(e), t, r, new Si.ReadOnlyConnectionHolder(n ?? Si.EMPTY_CONNECTION_HOLDER), {
    low: o,
    high: i
  });
}
Zu.default = HE;
var Qu = {};
Object.defineProperty(Qu, "__esModule", { value: !0 });
var zE = (
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
Qu.default = zE;
var Ju = {}, YE = d && d.__extends || function() {
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
}, GE = d && d.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
}, em;
Object.defineProperty(Ju, "__esModule", { value: !0 });
var KE = GE(Zu), ZE = (
  /** @class */
  function(e) {
    YE(t, e);
    function t(r) {
      var n = r.connectionHolder, i = r.onClose, o = r.onBookmarks, a = r.onConnection, u = r.reactive, c = r.fetchSize, s = r.impersonatedUser, l = r.highRecordWatermark, v = r.lowRecordWatermark, y = e.call(this, {
        connectionHolder: n,
        onClose: i,
        onBookmarks: o,
        onConnection: a,
        reactive: u,
        fetchSize: c,
        impersonatedUser: s,
        highRecordWatermark: l,
        lowRecordWatermark: v
      }) || this;
      return y[em] = "TransactionPromise", y;
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
  }(KE.default)
);
em = Symbol.toStringTag;
Ju.default = ZE;
var Xu = {}, ci = d && d.__awaiter || function(e, t, r, n) {
  function i(o) {
    return o instanceof r ? o : new r(function(a) {
      a(o);
    });
  }
  return new (r || (r = Promise))(function(o, a) {
    function u(l) {
      try {
        s(n.next(l));
      } catch (v) {
        a(v);
      }
    }
    function c(l) {
      try {
        s(n.throw(l));
      } catch (v) {
        a(v);
      }
    }
    function s(l) {
      l.done ? o(l.value) : i(l.value).then(u, c);
    }
    s((n = n.apply(e, t || [])).next());
  });
}, li = d && d.__generator || function(e, t) {
  var r = { label: 0, sent: function() {
    if (o[0] & 1)
      throw o[1];
    return o[1];
  }, trys: [], ops: [] }, n, i, o, a;
  return a = { next: u(0), throw: u(1), return: u(2) }, typeof Symbol == "function" && (a[Symbol.iterator] = function() {
    return this;
  }), a;
  function u(s) {
    return function(l) {
      return c([s, l]);
    };
  }
  function c(s) {
    if (n)
      throw new TypeError("Generator is already executing.");
    for (; a && (a = 0, s[0] && (r = 0)), r; )
      try {
        if (n = 1, i && (o = s[0] & 2 ? i.return : s[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, s[1])).done)
          return o;
        switch (i = 0, o && (s = [s[0] & 2, o.value]), s[0]) {
          case 0:
          case 1:
            o = s;
            break;
          case 4:
            return r.label++, { value: s[1], done: !1 };
          case 5:
            r.label++, i = s[1], s = [0];
            continue;
          case 7:
            s = r.ops.pop(), r.trys.pop();
            continue;
          default:
            if (o = r.trys, !(o = o.length > 0 && o[o.length - 1]) && (s[0] === 6 || s[0] === 2)) {
              r = 0;
              continue;
            }
            if (s[0] === 3 && (!o || s[1] > o[0] && s[1] < o[3])) {
              r.label = s[1];
              break;
            }
            if (s[0] === 6 && r.label < o[1]) {
              r.label = o[1], o = s;
              break;
            }
            if (o && r.label < o[2]) {
              r.label = o[2], r.ops.push(s);
              break;
            }
            o[2] && r.ops.pop(), r.trys.pop();
            continue;
        }
        s = t.call(e, r);
      } catch (l) {
        s = [6, l], i = 0;
      } finally {
        n = o = 0;
      }
    if (s[0] & 5)
      throw s[1];
    return { value: s[0] ? s[1] : void 0, done: !0 };
  }
}, ru = d && d.__read || function(e, t) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r)
    return e;
  var n = r.call(e), i, o = [], a;
  try {
    for (; (t === void 0 || t-- > 0) && !(i = n.next()).done; )
      o.push(i.value);
  } catch (u) {
    a = { error: u };
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
var _l = Jr, QE = ue, or = ae, Mr = we, JE = Ff(Fi), ah = _r, XE = Bi, fi = ut, Zr = Pn, eS = Ff(Ju), rS = Ff(Qu), tS = (
  /** @class */
  function() {
    function e(t) {
      var r = t.mode, n = t.connectionProvider, i = t.bookmarks, o = t.database, a = t.config, u = t.reactive, c = t.fetchSize, s = t.impersonatedUser, l = t.bookmarkManager;
      this._mode = r, this._database = o, this._reactive = u, this._fetchSize = c, this._onDatabaseNameResolved = this._onDatabaseNameResolved.bind(this), this._getConnectionAcquistionBookmarks = this._getConnectionAcquistionBookmarks.bind(this), this._readConnectionHolder = new ah.ConnectionHolder({
        mode: or.ACCESS_MODE_READ,
        database: o,
        bookmarks: i,
        connectionProvider: n,
        impersonatedUser: s,
        onDatabaseNameResolved: this._onDatabaseNameResolved,
        getConnectionAcquistionBookmarks: this._getConnectionAcquistionBookmarks
      }), this._writeConnectionHolder = new ah.ConnectionHolder({
        mode: or.ACCESS_MODE_WRITE,
        database: o,
        bookmarks: i,
        connectionProvider: n,
        impersonatedUser: s,
        onDatabaseNameResolved: this._onDatabaseNameResolved,
        getConnectionAcquistionBookmarks: this._getConnectionAcquistionBookmarks
      }), this._open = !0, this._hasTx = !1, this._impersonatedUser = s, this._lastBookmarks = i ?? fi.Bookmarks.empty(), this._configuredBookmarks = this._lastBookmarks, this._transactionExecutor = nS(a), this._databaseNameResolved = this._database !== "";
      var v = this._calculateWatermaks();
      this._lowRecordWatermark = v.low, this._highRecordWatermark = v.high, this._results = [], this._bookmarkManager = l;
    }
    return e.prototype.run = function(t, r, n) {
      var i = this, o = (0, QE.validateQueryAndParameters)(t, r), a = o.validatedQuery, u = o.params, c = n != null ? new Zr.TxConfig(n) : Zr.TxConfig.empty(), s = this._run(a, u, function(l) {
        return ci(i, void 0, void 0, function() {
          var v, y = this;
          return li(this, function(O) {
            switch (O.label) {
              case 0:
                return [4, this._bookmarks()];
              case 1:
                return v = O.sent(), this._assertSessionIsOpen(), [2, l.protocol().run(a, u, {
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
      return this._results.push(s), s;
    }, e.prototype._run = function(t, r, n) {
      var i = this._connectionHolderWithMode(this._mode), o;
      this._open ? !this._hasTx && i.initializeConnection() ? o = i.getConnection().then(function(u) {
        return n(u);
      }).catch(function(u) {
        return Promise.resolve(new _l.FailedObserver({ error: u }));
      }) : o = Promise.resolve(new _l.FailedObserver({
        error: (0, Mr.newError)("Queries cannot be run directly on a session with an open transaction; either run from within the transaction or use a different session.")
      })) : o = Promise.resolve(new _l.FailedObserver({
        error: (0, Mr.newError)("Cannot run query in a closed session.")
      }));
      var a = { high: this._highRecordWatermark, low: this._lowRecordWatermark };
      return new JE.default(o, t, r, i, a);
    }, e.prototype._acquireConnection = function(t) {
      var r = this, n, i = this._connectionHolderWithMode(this._mode);
      return this._open ? !this._hasTx && i.initializeConnection() ? n = i.getConnection().then(function(o) {
        return t(o);
      }).then(function(o) {
        return ci(r, void 0, void 0, function() {
          return li(this, function(a) {
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
      var a = new eS.default({
        connectionHolder: o,
        impersonatedUser: this._impersonatedUser,
        onClose: this._transactionClosed.bind(this),
        onBookmarks: function(u, c, s) {
          return n._updateBookmarks(u, c, s);
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
      return ci(this, void 0, void 0, function() {
        var r;
        return li(this, function(n) {
          switch (n.label) {
            case 0:
              return [4, (t = this._bookmarkManager) === null || t === void 0 ? void 0 : t.getBookmarks()];
            case 1:
              return r = n.sent(), r === void 0 ? [2, this._lastBookmarks] : [2, new fi.Bookmarks(tu(tu([], ru(r), !1), ru(this._configuredBookmarks), !1))];
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
      }, n, rS.default.fromTransaction);
    }, e.prototype._onDatabaseNameResolved = function(t) {
      if (!this._databaseNameResolved) {
        var r = t ?? "";
        this._database = r, this._readConnectionHolder.setDatabase(r), this._writeConnectionHolder.setDatabase(r), this._databaseNameResolved = !0;
      }
    }, e.prototype._getConnectionAcquistionBookmarks = function() {
      var t;
      return ci(this, void 0, void 0, function() {
        var r;
        return li(this, function(n) {
          switch (n.label) {
            case 0:
              return [4, (t = this._bookmarkManager) === null || t === void 0 ? void 0 : t.getBookmarks()];
            case 1:
              return r = n.sent(), r === void 0 ? [2, this._lastBookmarks] : [2, new fi.Bookmarks(tu(tu([], ru(this._configuredBookmarks), !1), ru(r), !1))];
          }
        });
      });
    }, e.prototype._updateBookmarks = function(t, r, n) {
      var i, o, a;
      t != null && !t.isEmpty() && ((i = this._bookmarkManager) === null || i === void 0 || i.updateBookmarks((o = r == null ? void 0 : r.values()) !== null && o !== void 0 ? o : [], (a = t == null ? void 0 : t.values()) !== null && a !== void 0 ? a : []), this._lastBookmarks = t, this._configuredBookmarks = fi.Bookmarks.empty());
    }, e.prototype.close = function() {
      return ci(this, void 0, void 0, function() {
        return li(this, function(t) {
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
      this._updateBookmarks(new fi.Bookmarks(t.bookmark), r, t.db);
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
function nS(e) {
  var t, r = (t = e == null ? void 0 : e.maxTransactionRetryTime) !== null && t !== void 0 ? t : null;
  return new XE.TransactionExecutor(r);
}
Xu.default = tS;
var Ge = {}, In = {}, ju = d && d.__awaiter || function(e, t, r, n) {
  function i(o) {
    return o instanceof r ? o : new r(function(a) {
      a(o);
    });
  }
  return new (r || (r = Promise))(function(o, a) {
    function u(l) {
      try {
        s(n.next(l));
      } catch (v) {
        a(v);
      }
    }
    function c(l) {
      try {
        s(n.throw(l));
      } catch (v) {
        a(v);
      }
    }
    function s(l) {
      l.done ? o(l.value) : i(l.value).then(u, c);
    }
    s((n = n.apply(e, t || [])).next());
  });
}, Nu = d && d.__generator || function(e, t) {
  var r = { label: 0, sent: function() {
    if (o[0] & 1)
      throw o[1];
    return o[1];
  }, trys: [], ops: [] }, n, i, o, a;
  return a = { next: u(0), throw: u(1), return: u(2) }, typeof Symbol == "function" && (a[Symbol.iterator] = function() {
    return this;
  }), a;
  function u(s) {
    return function(l) {
      return c([s, l]);
    };
  }
  function c(s) {
    if (n)
      throw new TypeError("Generator is already executing.");
    for (; a && (a = 0, s[0] && (r = 0)), r; )
      try {
        if (n = 1, i && (o = s[0] & 2 ? i.return : s[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, s[1])).done)
          return o;
        switch (i = 0, o && (s = [s[0] & 2, o.value]), s[0]) {
          case 0:
          case 1:
            o = s;
            break;
          case 4:
            return r.label++, { value: s[1], done: !1 };
          case 5:
            r.label++, i = s[1], s = [0];
            continue;
          case 7:
            s = r.ops.pop(), r.trys.pop();
            continue;
          default:
            if (o = r.trys, !(o = o.length > 0 && o[o.length - 1]) && (s[0] === 6 || s[0] === 2)) {
              r = 0;
              continue;
            }
            if (s[0] === 3 && (!o || s[1] > o[0] && s[1] < o[3])) {
              r.label = s[1];
              break;
            }
            if (s[0] === 6 && r.label < o[1]) {
              r.label = o[1], o = s;
              break;
            }
            if (o && r.label < o[2]) {
              r.label = o[2], r.ops.push(s);
              break;
            }
            o[2] && r.ops.pop(), r.trys.pop();
            continue;
        }
        s = t.call(e, r);
      } catch (l) {
        s = [6, l], i = 0;
      } finally {
        n = o = 0;
      }
    if (s[0] & 5)
      throw s[1];
    return { value: s[0] ? s[1] : void 0, done: !0 };
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
}, uh = d && d.__read || function(e, t) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r)
    return e;
  var n = r.call(e), i, o = [], a;
  try {
    for (; (t === void 0 || t-- > 0) && !(i = n.next()).done; )
      o.push(i.value);
  } catch (u) {
    a = { error: u };
  } finally {
    try {
      i && !i.done && (r = n.return) && r.call(n);
    } finally {
      if (a)
        throw a.error;
    }
  }
  return o;
}, sh = d && d.__spreadArray || function(e, t, r) {
  if (r || arguments.length === 2)
    for (var n = 0, i = t.length, o; n < i; n++)
      (o || !(n in t)) && (o || (o = Array.prototype.slice.call(t, 0, n)), o[n] = t[n]);
  return e.concat(o || Array.prototype.slice.call(t));
};
Object.defineProperty(In, "__esModule", { value: !0 });
In.bookmarkManager = void 0;
var iS = (
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
In.default = iS;
function oS(e) {
  e === void 0 && (e = {});
  var t = new Set(e.initialBookmarks);
  return new aS(t, e.bookmarksSupplier, e.bookmarksConsumer);
}
In.bookmarkManager = oS;
var aS = (
  /** @class */
  function() {
    function e(t, r, n) {
      this._bookmarks = t, this._bookmarksSupplier = r, this._bookmarksConsumer = n;
    }
    return e.prototype.updateBookmarks = function(t, r) {
      return ju(this, void 0, void 0, function() {
        var n, i, o, c, a, u, c, s, l, v, y;
        return Nu(this, function(O) {
          switch (O.label) {
            case 0:
              n = this._bookmarks;
              try {
                for (i = pl(t), o = i.next(); !o.done; o = i.next())
                  c = o.value, n.delete(c);
              } catch (E) {
                s = { error: E };
              } finally {
                try {
                  o && !o.done && (l = i.return) && l.call(i);
                } finally {
                  if (s)
                    throw s.error;
                }
              }
              try {
                for (a = pl(r), u = a.next(); !u.done; u = a.next())
                  c = u.value, n.add(c);
              } catch (E) {
                v = { error: E };
              } finally {
                try {
                  u && !u.done && (y = a.return) && y.call(a);
                } finally {
                  if (v)
                    throw v.error;
                }
              }
              return typeof this._bookmarksConsumer != "function" ? [3, 2] : [4, this._bookmarksConsumer(sh([], uh(n), !1))];
            case 1:
              O.sent(), O.label = 2;
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
        var r, n, i, o, a, u, c;
        return Nu(this, function(s) {
          switch (s.label) {
            case 0:
              return r = new Set(this._bookmarks), typeof this._bookmarksSupplier != "function" ? [3, 2] : [4, this._bookmarksSupplier()];
            case 1:
              n = (t = s.sent()) !== null && t !== void 0 ? t : [];
              try {
                for (i = pl(n), o = i.next(); !o.done; o = i.next())
                  a = o.value, r.add(a);
              } catch (l) {
                u = { error: l };
              } finally {
                try {
                  o && !o.done && (c = i.return) && c.call(i);
                } finally {
                  if (u)
                    throw u.error;
                }
              }
              s.label = 2;
            case 2:
              return [2, sh([], uh(r), !1)];
          }
        });
      });
    }, e;
  }()
), es = {}, rm = d && d.__awaiter || function(e, t, r, n) {
  function i(o) {
    return o instanceof r ? o : new r(function(a) {
      a(o);
    });
  }
  return new (r || (r = Promise))(function(o, a) {
    function u(l) {
      try {
        s(n.next(l));
      } catch (v) {
        a(v);
      }
    }
    function c(l) {
      try {
        s(n.throw(l));
      } catch (v) {
        a(v);
      }
    }
    function s(l) {
      l.done ? o(l.value) : i(l.value).then(u, c);
    }
    s((n = n.apply(e, t || [])).next());
  });
}, tm = d && d.__generator || function(e, t) {
  var r = { label: 0, sent: function() {
    if (o[0] & 1)
      throw o[1];
    return o[1];
  }, trys: [], ops: [] }, n, i, o, a;
  return a = { next: u(0), throw: u(1), return: u(2) }, typeof Symbol == "function" && (a[Symbol.iterator] = function() {
    return this;
  }), a;
  function u(s) {
    return function(l) {
      return c([s, l]);
    };
  }
  function c(s) {
    if (n)
      throw new TypeError("Generator is already executing.");
    for (; a && (a = 0, s[0] && (r = 0)), r; )
      try {
        if (n = 1, i && (o = s[0] & 2 ? i.return : s[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, s[1])).done)
          return o;
        switch (i = 0, o && (s = [s[0] & 2, o.value]), s[0]) {
          case 0:
          case 1:
            o = s;
            break;
          case 4:
            return r.label++, { value: s[1], done: !1 };
          case 5:
            r.label++, i = s[1], s = [0];
            continue;
          case 7:
            s = r.ops.pop(), r.trys.pop();
            continue;
          default:
            if (o = r.trys, !(o = o.length > 0 && o[o.length - 1]) && (s[0] === 6 || s[0] === 2)) {
              r = 0;
              continue;
            }
            if (s[0] === 3 && (!o || s[1] > o[0] && s[1] < o[3])) {
              r.label = s[1];
              break;
            }
            if (s[0] === 6 && r.label < o[1]) {
              r.label = o[1], o = s;
              break;
            }
            if (o && r.label < o[2]) {
              r.label = o[2], r.ops.push(s);
              break;
            }
            o[2] && r.ops.pop(), r.trys.pop();
            continue;
        }
        s = t.call(e, r);
      } catch (l) {
        s = [6, l], i = 0;
      } finally {
        n = o = 0;
      }
    if (s[0] & 5)
      throw s[1];
    return { value: s[0] ? s[1] : void 0, done: !0 };
  }
}, uS = d && d.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(es, "__esModule", { value: !0 });
var sS = uS(Ku), cS = we;
function lS(e) {
  return rm(this, void 0, void 0, function() {
    var t, r, n, i;
    return tm(this, function(o) {
      switch (o.label) {
        case 0:
          return [4, e];
        case 1:
          return t = o.sent(), r = t.summary, n = t.records, [4, e.keys()];
        case 2:
          return i = o.sent(), [2, new sS.default(i, n, r)];
      }
    });
  });
}
var fS = (
  /** @class */
  function() {
    function e() {
    }
    return e.prototype.eagerResultTransformer = function() {
      return lS;
    }, e.prototype.mappedResultTransformer = function(t) {
      var r = this;
      if (t == null || t.collect == null && t.map == null)
        throw (0, cS.newError)("Requires a map or/and a collect functions.");
      return function(n) {
        return rm(r, void 0, void 0, function() {
          return tm(this, function(i) {
            switch (i.label) {
              case 0:
                return [4, new Promise(function(o, a) {
                  var u = { records: [], keys: [] };
                  n.subscribe({
                    onKeys: function(c) {
                      u.keys = c;
                    },
                    onNext: function(c) {
                      t.map != null ? u.records.push(t.map(c)) : u.records.push(c);
                    },
                    onCompleted: function(c) {
                      if (t.collect != null)
                        o(t.collect(u.records, c, u.keys));
                      else {
                        var s = { records: u.records, summary: c, keys: u.keys };
                        o(s);
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
), nm = new fS();
Object.freeze(nm);
es.default = nm;
var Bf = {}, ch = d && d.__awaiter || function(e, t, r, n) {
  function i(o) {
    return o instanceof r ? o : new r(function(a) {
      a(o);
    });
  }
  return new (r || (r = Promise))(function(o, a) {
    function u(l) {
      try {
        s(n.next(l));
      } catch (v) {
        a(v);
      }
    }
    function c(l) {
      try {
        s(n.throw(l));
      } catch (v) {
        a(v);
      }
    }
    function s(l) {
      l.done ? o(l.value) : i(l.value).then(u, c);
    }
    s((n = n.apply(e, t || [])).next());
  });
}, lh = d && d.__generator || function(e, t) {
  var r = { label: 0, sent: function() {
    if (o[0] & 1)
      throw o[1];
    return o[1];
  }, trys: [], ops: [] }, n, i, o, a;
  return a = { next: u(0), throw: u(1), return: u(2) }, typeof Symbol == "function" && (a[Symbol.iterator] = function() {
    return this;
  }), a;
  function u(s) {
    return function(l) {
      return c([s, l]);
    };
  }
  function c(s) {
    if (n)
      throw new TypeError("Generator is already executing.");
    for (; a && (a = 0, s[0] && (r = 0)), r; )
      try {
        if (n = 1, i && (o = s[0] & 2 ? i.return : s[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, s[1])).done)
          return o;
        switch (i = 0, o && (s = [s[0] & 2, o.value]), s[0]) {
          case 0:
          case 1:
            o = s;
            break;
          case 4:
            return r.label++, { value: s[1], done: !1 };
          case 5:
            r.label++, i = s[1], s = [0];
            continue;
          case 7:
            s = r.ops.pop(), r.trys.pop();
            continue;
          default:
            if (o = r.trys, !(o = o.length > 0 && o[o.length - 1]) && (s[0] === 6 || s[0] === 2)) {
              r = 0;
              continue;
            }
            if (s[0] === 3 && (!o || s[1] > o[0] && s[1] < o[3])) {
              r.label = s[1];
              break;
            }
            if (s[0] === 6 && r.label < o[1]) {
              r.label = o[1], o = s;
              break;
            }
            if (o && r.label < o[2]) {
              r.label = o[2], r.ops.push(s);
              break;
            }
            o[2] && r.ops.pop(), r.trys.pop();
            continue;
        }
        s = t.call(e, r);
      } catch (l) {
        s = [6, l], i = 0;
      } finally {
        n = o = 0;
      }
    if (s[0] & 5)
      throw s[1];
    return { value: s[0] ? s[1] : void 0, done: !0 };
  }
};
Object.defineProperty(Bf, "__esModule", { value: !0 });
var dS = (
  /** @class */
  function() {
    function e(t) {
      this._createSession = t;
    }
    return e.prototype.execute = function(t, r, n) {
      return ch(this, void 0, void 0, function() {
        var i, o, a = this;
        return lh(this, function(u) {
          switch (u.label) {
            case 0:
              i = this._createSession({
                database: t.database,
                bookmarkManager: t.bookmarkManager,
                impersonatedUser: t.impersonatedUser
              }), u.label = 1;
            case 1:
              return u.trys.push([1, , 3, 5]), o = t.routing === "READERS" ? i.executeRead.bind(i) : i.executeWrite.bind(i), [4, o(function(c) {
                return ch(a, void 0, void 0, function() {
                  var s;
                  return lh(this, function(l) {
                    switch (l.label) {
                      case 0:
                        return s = c.run(r, n), [4, t.resultTransformer(s)];
                      case 1:
                        return [2, l.sent()];
                    }
                  });
                });
              })];
            case 2:
              return [2, u.sent()];
            case 3:
              return [4, i.close()];
            case 4:
              return u.sent(), [
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
Bf.default = dS;
var hS = d && d.__awaiter || function(e, t, r, n) {
  function i(o) {
    return o instanceof r ? o : new r(function(a) {
      a(o);
    });
  }
  return new (r || (r = Promise))(function(o, a) {
    function u(l) {
      try {
        s(n.next(l));
      } catch (v) {
        a(v);
      }
    }
    function c(l) {
      try {
        s(n.throw(l));
      } catch (v) {
        a(v);
      }
    }
    function s(l) {
      l.done ? o(l.value) : i(l.value).then(u, c);
    }
    s((n = n.apply(e, t || [])).next());
  });
}, vS = d && d.__generator || function(e, t) {
  var r = { label: 0, sent: function() {
    if (o[0] & 1)
      throw o[1];
    return o[1];
  }, trys: [], ops: [] }, n, i, o, a;
  return a = { next: u(0), throw: u(1), return: u(2) }, typeof Symbol == "function" && (a[Symbol.iterator] = function() {
    return this;
  }), a;
  function u(s) {
    return function(l) {
      return c([s, l]);
    };
  }
  function c(s) {
    if (n)
      throw new TypeError("Generator is already executing.");
    for (; a && (a = 0, s[0] && (r = 0)), r; )
      try {
        if (n = 1, i && (o = s[0] & 2 ? i.return : s[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, s[1])).done)
          return o;
        switch (i = 0, o && (s = [s[0] & 2, o.value]), s[0]) {
          case 0:
          case 1:
            o = s;
            break;
          case 4:
            return r.label++, { value: s[1], done: !1 };
          case 5:
            r.label++, i = s[1], s = [0];
            continue;
          case 7:
            s = r.ops.pop(), r.trys.pop();
            continue;
          default:
            if (o = r.trys, !(o = o.length > 0 && o[o.length - 1]) && (s[0] === 6 || s[0] === 2)) {
              r = 0;
              continue;
            }
            if (s[0] === 3 && (!o || s[1] > o[0] && s[1] < o[3])) {
              r.label = s[1];
              break;
            }
            if (s[0] === 6 && r.label < o[1]) {
              r.label = o[1], o = s;
              break;
            }
            if (o && r.label < o[2]) {
              r.label = o[2], r.ops.push(s);
              break;
            }
            o[2] && r.ops.pop(), r.trys.pop();
            continue;
        }
        s = t.call(e, r);
      } catch (l) {
        s = [6, l], i = 0;
      } finally {
        n = o = 0;
      }
    if (s[0] & 5)
      throw s[1];
    return { value: s[0] ? s[1] : void 0, done: !0 };
  }
}, rs = d && d.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(Ge, "__esModule", { value: !0 });
Ge.QueryConfig = Ge.SessionConfig = Ge.routing = Ge.WRITE = Ge.READ = Ge.Driver = void 0;
var fh = ut, _S = rs(Gu), kt = ae, pS = xi, dh = rs(Xu), mS = ue, yS = In, bS = rs(es), gS = rs(Bf), OS = we, wS = 60 * 60 * 1e3, ES = 1e3, nf = kt.ACCESS_MODE_READ;
Ge.READ = nf;
var xf = kt.ACCESS_MODE_WRITE;
Ge.WRITE = xf;
var SS = 0, TS = (
  /** @class */
  function() {
    function e() {
      this.defaultAccessMode = xf, this.bookmarks = [], this.database = "", this.impersonatedUser = void 0, this.fetchSize = void 0, this.bookmarkManager = void 0;
    }
    return e;
  }()
);
Ge.SessionConfig = TS;
var PS = "WRITERS", IS = "READERS", cn = {
  WRITERS: PS,
  READERS: IS
};
Ge.routing = cn;
Object.freeze(cn);
var RS = (
  /** @class */
  function() {
    function e() {
      this.routing = cn.WRITERS, this.resultTransformer = void 0, this.database = "", this.impersonatedUser = void 0, this.bookmarkManager = void 0;
    }
    return e;
  }()
);
Ge.QueryConfig = RS;
var im = (
  /** @class */
  function() {
    function e(t, r, n, i, o) {
      r === void 0 && (r = {}), i === void 0 && (i = function(u) {
        return new dh.default(u);
      }), o === void 0 && (o = function(u) {
        return new gS.default(u);
      }), CS(r);
      var a = pS.Logger.create(r);
      AS(r, a), this._id = SS++, this._meta = t, this._config = r, this._log = a, this._createConnectionProvider = n, this._createSession = i, this._queryBookmarkManager = (0, yS.bookmarkManager)(), this._queryExecutor = o(this.session.bind(this)), this._connectionProvider = null, this._afterConstruction();
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
      return n === void 0 && (n = {}), hS(this, void 0, void 0, function() {
        var u, c, s;
        return vS(this, function(l) {
          switch (l.label) {
            case 0:
              if (u = n.bookmarkManager === null ? void 0 : (i = n.bookmarkManager) !== null && i !== void 0 ? i : this.queryBookmarkManager, c = (o = n.resultTransformer) !== null && o !== void 0 ? o : bS.default.eagerResultTransformer(), s = (a = n.routing) !== null && a !== void 0 ? a : cn.WRITERS, s !== cn.READERS && s !== cn.WRITERS)
                throw (0, OS.newError)('Illegal query routing config: "'.concat(s, '"'));
              return [4, this._queryExecutor.execute({
                resultTransformer: c,
                bookmarkManager: u,
                routing: s,
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
      return this._config.encrypted === mS.ENCRYPTION_ON || this._config.encrypted === !0;
    }, e.prototype._getTrust = function() {
      return this._config.trust;
    }, e.prototype.session = function(t) {
      var r = t === void 0 ? {} : t, n = r.defaultAccessMode, i = n === void 0 ? xf : n, o = r.bookmarks, a = r.database, u = a === void 0 ? "" : a, c = r.impersonatedUser, s = r.fetchSize, l = r.bookmarkManager;
      return this._newSession({
        defaultAccessMode: i,
        bookmarkOrBookmarks: o,
        database: u,
        reactive: !1,
        impersonatedUser: c,
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        fetchSize: om(s, this._config.fetchSize),
        bookmarkManager: l
      });
    }, e.prototype.close = function() {
      return this._log.info("Driver ".concat(this._id, " closing")), this._connectionProvider != null ? this._connectionProvider.close() : Promise.resolve();
    }, e.prototype._afterConstruction = function() {
      this._log.info("".concat(this._meta.typename, " driver ").concat(this._id, " created for server address ").concat(this._meta.address.toString()));
    }, e.prototype._newSession = function(t) {
      var r = t.defaultAccessMode, n = t.bookmarkOrBookmarks, i = t.database, o = t.reactive, a = t.impersonatedUser, u = t.fetchSize, c = t.bookmarkManager, s = dh.default._validateSessionMode(r), l = this._getOrCreateConnectionProvider(), v = n != null ? new fh.Bookmarks(n) : fh.Bookmarks.empty();
      return this._createSession({
        mode: s,
        database: i ?? "",
        connectionProvider: l,
        bookmarks: v,
        config: this._config,
        reactive: o,
        impersonatedUser: a,
        fetchSize: u,
        bookmarkManager: c
      });
    }, e.prototype._getOrCreateConnectionProvider = function() {
      return this._connectionProvider == null && (this._connectionProvider = this._createConnectionProvider(this._id, this._config, this._log, NS(this._config))), this._connectionProvider;
    }, e;
  }()
);
Ge.Driver = im;
function AS(e, t) {
  var r = e.resolver;
  if (r != null && typeof r != "function")
    throw new TypeError("Configured resolver should be a function. Got: ".concat(typeof r));
  return e.connectionAcquisitionTimeout < e.connectionTimeout && t.warn('Configuration for "connectionAcquisitionTimeout" should be greater than or equal to "connectionTimeout". Otherwise, the connection acquisition timeout will take precedence for over the connection timeout in scenarios where a new connection is created while it is acquired'), e;
}
function CS(e) {
  e.maxConnectionLifetime = ml(e.maxConnectionLifetime, wS), e.maxConnectionPoolSize = ml(e.maxConnectionPoolSize, kt.DEFAULT_POOL_MAX_SIZE), e.connectionAcquisitionTimeout = ml(e.connectionAcquisitionTimeout, kt.DEFAULT_POOL_ACQUISITION_TIMEOUT), e.fetchSize = om(e.fetchSize, ES), e.connectionTimeout = jS(e);
}
function ml(e, t) {
  var r = parseInt(e, 10);
  return r > 0 || r === 0 ? r : r < 0 ? Number.MAX_SAFE_INTEGER : t;
}
function om(e, t) {
  var r = parseInt(e, 10);
  if (r > 0 || r === kt.FETCH_ALL)
    return r;
  if (r === 0 || r < 0)
    throw new Error("The fetch size can only be a positive value or ".concat(kt.FETCH_ALL, " for ALL. However fetchSize = ").concat(r));
  return t;
}
function jS(e) {
  var t = parseInt(e.connectionTimeout, 10);
  return t === 0 || !isNaN(t) && t < 0 ? null : isNaN(t) ? kt.DEFAULT_CONNECTION_TIMEOUT_MILLIS : t;
}
function NS(e) {
  return new _S.default(e.resolver);
}
Ge.default = im;
var Wf = {};
Object.defineProperty(Wf, "__esModule", { value: !0 });
var $S = {
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
Wf.default = $S;
var am = {};
Object.defineProperty(am, "__esModule", { value: !0 });
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
  var u = Te;
  Object.defineProperty(e, "Date", { enumerable: !0, get: function() {
    return u.Date;
  } }), Object.defineProperty(e, "DateTime", { enumerable: !0, get: function() {
    return u.DateTime;
  } }), Object.defineProperty(e, "Duration", { enumerable: !0, get: function() {
    return u.Duration;
  } }), Object.defineProperty(e, "isDate", { enumerable: !0, get: function() {
    return u.isDate;
  } }), Object.defineProperty(e, "isDateTime", { enumerable: !0, get: function() {
    return u.isDateTime;
  } }), Object.defineProperty(e, "isDuration", { enumerable: !0, get: function() {
    return u.isDuration;
  } }), Object.defineProperty(e, "isLocalDateTime", { enumerable: !0, get: function() {
    return u.isLocalDateTime;
  } }), Object.defineProperty(e, "isLocalTime", { enumerable: !0, get: function() {
    return u.isLocalTime;
  } }), Object.defineProperty(e, "isTime", { enumerable: !0, get: function() {
    return u.isTime;
  } }), Object.defineProperty(e, "LocalDateTime", { enumerable: !0, get: function() {
    return u.LocalDateTime;
  } }), Object.defineProperty(e, "LocalTime", { enumerable: !0, get: function() {
    return u.LocalTime;
  } }), Object.defineProperty(e, "Time", { enumerable: !0, get: function() {
    return u.Time;
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
  var s = i(Mf);
  e.Record = s.default;
  var l = _n;
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
  var O = i(Ku);
  e.EagerResult = O.default;
  var E = i(Uf);
  e.ConnectionProvider = E.default;
  var T = i(Lf);
  e.Connection = T.default;
  var C = i(Zu);
  e.Transaction = C.default;
  var A = i(Qu);
  e.ManagedTransaction = A.default;
  var $ = i(Ju);
  e.TransactionPromise = $.default;
  var U = i(Xu);
  e.Session = U.default;
  var D = n(Ge), F = D;
  e.Driver = D.default, e.driver = F;
  var G = i(Wf);
  e.auth = G.default;
  var X = In;
  Object.defineProperty(e, "bookmarkManager", { enumerable: !0, get: function() {
    return X.bookmarkManager;
  } });
  var oe = Ge;
  Object.defineProperty(e, "routing", { enumerable: !0, get: function() {
    return oe.routing;
  } });
  var de = n(am);
  e.types = de;
  var Ie = n(En);
  e.json = Ie;
  var ge = i(es);
  e.resultTransformers = ge.default;
  var Ae = n(me);
  e.internal = Ae;
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
    internal: Ae,
    isPoint: l.isPoint,
    Point: l.Point,
    Date: u.Date,
    DateTime: u.DateTime,
    Duration: u.Duration,
    isDate: u.isDate,
    isDateTime: u.isDateTime,
    isDuration: u.isDuration,
    isLocalDateTime: u.isLocalDateTime,
    isLocalTime: u.isLocalTime,
    isTime: u.isTime,
    LocalDateTime: u.LocalDateTime,
    LocalTime: u.LocalTime,
    Time: u.Time,
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
    Record: s.default,
    ResultSummary: v.default,
    queryType: v.queryType,
    ServerInfo: v.ServerInfo,
    Notification: v.Notification,
    Plan: v.Plan,
    ProfiledPlan: v.ProfiledPlan,
    QueryStatistics: v.QueryStatistics,
    Stats: v.Stats,
    Result: y.default,
    EagerResult: O.default,
    Transaction: C.default,
    ManagedTransaction: A.default,
    TransactionPromise: $.default,
    Session: U.default,
    Driver: D.default,
    Connection: T.default,
    types: de,
    driver: F,
    json: Ie,
    auth: G.default,
    bookmarkManager: X.bookmarkManager,
    routing: oe.routing,
    resultTransformers: ge.default
  };
  e.default = se;
})(ee);
var ts = {}, Vi = {}, pe = {}, Rn = {}, _e = {};
Object.defineProperty(_e, "__esModule", { value: !0 });
_e.isFunction = void 0;
function MS(e) {
  return typeof e == "function";
}
_e.isFunction = MS;
var Ue = {}, qi = {}, Ir = {};
Object.defineProperty(Ir, "__esModule", { value: !0 });
Ir.createErrorClass = void 0;
function kS(e) {
  var t = function(n) {
    Error.call(n), n.stack = new Error().stack;
  }, r = e(t);
  return r.prototype = Object.create(Error.prototype), r.prototype.constructor = r, r;
}
Ir.createErrorClass = kS;
Object.defineProperty(qi, "__esModule", { value: !0 });
qi.UnsubscriptionError = void 0;
var DS = Ir;
qi.UnsubscriptionError = DS.createErrorClass(function(e) {
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
function US(e, t) {
  if (e) {
    var r = e.indexOf(t);
    0 <= r && e.splice(r, 1);
  }
}
mr.arrRemove = US;
var hh = d && d.__values || function(e) {
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
}, vh = d && d.__read || function(e, t) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r)
    return e;
  var n = r.call(e), i, o = [], a;
  try {
    for (; (t === void 0 || t-- > 0) && !(i = n.next()).done; )
      o.push(i.value);
  } catch (u) {
    a = { error: u };
  } finally {
    try {
      i && !i.done && (r = n.return) && r.call(n);
    } finally {
      if (a)
        throw a.error;
    }
  }
  return o;
}, _h = d && d.__spreadArray || function(e, t) {
  for (var r = 0, n = t.length, i = e.length; r < n; r++, i++)
    e[i] = t[r];
  return e;
};
Object.defineProperty(Ue, "__esModule", { value: !0 });
Ue.isSubscription = Ue.EMPTY_SUBSCRIPTION = Ue.Subscription = void 0;
var Ti = _e, bl = qi, ph = mr, Vf = function() {
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
            for (var u = hh(a), c = u.next(); !c.done; c = u.next()) {
              var s = c.value;
              s.remove(this);
            }
          } catch (T) {
            t = { error: T };
          } finally {
            try {
              c && !c.done && (r = u.return) && r.call(u);
            } finally {
              if (t)
                throw t.error;
            }
          }
        else
          a.remove(this);
      var l = this.initialTeardown;
      if (Ti.isFunction(l))
        try {
          l();
        } catch (T) {
          o = T instanceof bl.UnsubscriptionError ? T.errors : [T];
        }
      var v = this._finalizers;
      if (v) {
        this._finalizers = null;
        try {
          for (var y = hh(v), O = y.next(); !O.done; O = y.next()) {
            var E = O.value;
            try {
              mh(E);
            } catch (T) {
              o = o ?? [], T instanceof bl.UnsubscriptionError ? o = _h(_h([], vh(o)), vh(T.errors)) : o.push(T);
            }
          }
        } catch (T) {
          n = { error: T };
        } finally {
          try {
            O && !O.done && (i = y.return) && i.call(y);
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
        mh(t);
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
    r === t ? this._parentage = null : Array.isArray(r) && ph.arrRemove(r, t);
  }, e.prototype.remove = function(t) {
    var r = this._finalizers;
    r && ph.arrRemove(r, t), t instanceof e && t._removeParent(this);
  }, e.EMPTY = function() {
    var t = new e();
    return t.closed = !0, t;
  }(), e;
}();
Ue.Subscription = Vf;
Ue.EMPTY_SUBSCRIPTION = Vf.EMPTY;
function LS(e) {
  return e instanceof Vf || e && "closed" in e && Ti.isFunction(e.remove) && Ti.isFunction(e.add) && Ti.isFunction(e.unsubscribe);
}
Ue.isSubscription = LS;
function mh(e) {
  Ti.isFunction(e) ? e() : e.unsubscribe();
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
    var a = o.call(n), u, c = [], s;
    try {
      for (; (i === void 0 || i-- > 0) && !(u = a.next()).done; )
        c.push(u.value);
    } catch (l) {
      s = { error: l };
    } finally {
      try {
        u && !u.done && (o = a.return) && o.call(a);
      } finally {
        if (s)
          throw s.error;
      }
    }
    return c;
  }, r = d && d.__spreadArray || function(n, i) {
    for (var o = 0, a = i.length, u = n.length; o < a; o++, u++)
      n[u] = i[o];
    return n;
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.timeoutProvider = void 0, e.timeoutProvider = {
    setTimeout: function(n, i) {
      for (var o = [], a = 2; a < arguments.length; a++)
        o[a - 2] = arguments[a];
      var u = e.timeoutProvider.delegate;
      return u != null && u.setTimeout ? u.setTimeout.apply(u, r([n, i], t(o))) : setTimeout.apply(void 0, r([n, i], t(o)));
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
var FS = st, BS = qf;
function xS(e) {
  BS.timeoutProvider.setTimeout(function() {
    var t = FS.config.onUnhandledError;
    if (t)
      t(e);
    else
      throw e;
  });
}
Hi.reportUnhandledError = xS;
var Fe = {};
Object.defineProperty(Fe, "__esModule", { value: !0 });
Fe.noop = void 0;
function WS() {
}
Fe.noop = WS;
var Tr = {};
Object.defineProperty(Tr, "__esModule", { value: !0 });
Tr.createNotification = Tr.nextNotification = Tr.errorNotification = Tr.COMPLETE_NOTIFICATION = void 0;
Tr.COMPLETE_NOTIFICATION = function() {
  return ns("C", void 0, void 0);
}();
function VS(e) {
  return ns("E", void 0, e);
}
Tr.errorNotification = VS;
function qS(e) {
  return ns("N", e, void 0);
}
Tr.nextNotification = qS;
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
var um = st, jt = null;
function HS(e) {
  if (um.config.useDeprecatedSynchronousErrorHandling) {
    var t = !jt;
    if (t && (jt = { errorThrown: !1, error: null }), e(), t) {
      var r = jt, n = r.errorThrown, i = r.error;
      if (jt = null, n)
        throw i;
    }
  } else
    e();
}
Xr.errorContext = HS;
function zS(e) {
  um.config.useDeprecatedSynchronousErrorHandling && jt && (jt.errorThrown = !0, jt.error = e);
}
Xr.captureError = zS;
(function(e) {
  var t = d && d.__extends || function() {
    var $ = function(U, D) {
      return $ = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(F, G) {
        F.__proto__ = G;
      } || function(F, G) {
        for (var X in G)
          Object.prototype.hasOwnProperty.call(G, X) && (F[X] = G[X]);
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
  var r = _e, n = Ue, i = st, o = Hi, a = Fe, u = Tr, c = qf, s = Xr, l = function($) {
    t(U, $);
    function U(D) {
      var F = $.call(this) || this;
      return F.isStopped = !1, D ? (F.destination = D, n.isSubscription(D) && D.add(F)) : F.destination = e.EMPTY_OBSERVER, F;
    }
    return U.create = function(D, F, G) {
      return new E(D, F, G);
    }, U.prototype.next = function(D) {
      this.isStopped ? A(u.nextNotification(D), this) : this._next(D);
    }, U.prototype.error = function(D) {
      this.isStopped ? A(u.errorNotification(D), this) : (this.isStopped = !0, this._error(D));
    }, U.prototype.complete = function() {
      this.isStopped ? A(u.COMPLETE_NOTIFICATION, this) : (this.isStopped = !0, this._complete());
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
  var O = function() {
    function $(U) {
      this.partialObserver = U;
    }
    return $.prototype.next = function(U) {
      var D = this.partialObserver;
      if (D.next)
        try {
          D.next(U);
        } catch (F) {
          T(F);
        }
    }, $.prototype.error = function(U) {
      var D = this.partialObserver;
      if (D.error)
        try {
          D.error(U);
        } catch (F) {
          T(F);
        }
      else
        T(U);
    }, $.prototype.complete = function() {
      var U = this.partialObserver;
      if (U.complete)
        try {
          U.complete();
        } catch (D) {
          T(D);
        }
    }, $;
  }(), E = function($) {
    t(U, $);
    function U(D, F, G) {
      var X = $.call(this) || this, oe;
      if (r.isFunction(D) || !D)
        oe = {
          next: D ?? void 0,
          error: F ?? void 0,
          complete: G ?? void 0
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
      return X.destination = new O(oe), X;
    }
    return U;
  }(l);
  e.SafeSubscriber = E;
  function T($) {
    i.config.useDeprecatedSynchronousErrorHandling ? s.captureError($) : o.reportUnhandledError($);
  }
  function C($) {
    throw $;
  }
  function A($, U) {
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
})(Rn);
var qt = {};
Object.defineProperty(qt, "__esModule", { value: !0 });
qt.observable = void 0;
qt.observable = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}();
var Wr = {}, Be = {};
Object.defineProperty(Be, "__esModule", { value: !0 });
Be.identity = void 0;
function YS(e) {
  return e;
}
Be.identity = YS;
Object.defineProperty(Wr, "__esModule", { value: !0 });
Wr.pipeFromArray = Wr.pipe = void 0;
var GS = Be;
function KS() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e[t] = arguments[t];
  return sm(e);
}
Wr.pipe = KS;
function sm(e) {
  return e.length === 0 ? GS.identity : e.length === 1 ? e[0] : function(r) {
    return e.reduce(function(n, i) {
      return i(n);
    }, r);
  };
}
Wr.pipeFromArray = sm;
Object.defineProperty(pe, "__esModule", { value: !0 });
pe.Observable = void 0;
var of = Rn, ZS = Ue, QS = qt, JS = Wr, XS = st, gl = _e, eT = Xr, rT = function() {
  function e(t) {
    t && (this._subscribe = t);
  }
  return e.prototype.lift = function(t) {
    var r = new e();
    return r.source = this, r.operator = t, r;
  }, e.prototype.subscribe = function(t, r, n) {
    var i = this, o = nT(t) ? t : new of.SafeSubscriber(t, r, n);
    return eT.errorContext(function() {
      var a = i, u = a.operator, c = a.source;
      o.add(u ? u.call(o, c) : c ? i._subscribe(o) : i._trySubscribe(o));
    }), o;
  }, e.prototype._trySubscribe = function(t) {
    try {
      return this._subscribe(t);
    } catch (r) {
      t.error(r);
    }
  }, e.prototype.forEach = function(t, r) {
    var n = this;
    return r = yh(r), new r(function(i, o) {
      var a = new of.SafeSubscriber({
        next: function(u) {
          try {
            t(u);
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
  }, e.prototype[QS.observable] = function() {
    return this;
  }, e.prototype.pipe = function() {
    for (var t = [], r = 0; r < arguments.length; r++)
      t[r] = arguments[r];
    return JS.pipeFromArray(t)(this);
  }, e.prototype.toPromise = function(t) {
    var r = this;
    return t = yh(t), new t(function(n, i) {
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
pe.Observable = rT;
function yh(e) {
  var t;
  return (t = e ?? XS.config.Promise) !== null && t !== void 0 ? t : Promise;
}
function tT(e) {
  return e && gl.isFunction(e.next) && gl.isFunction(e.error) && gl.isFunction(e.complete);
}
function nT(e) {
  return e && e instanceof of.Subscriber || tT(e) && ZS.isSubscription(e);
}
var Ht = {}, An = {}, x = {};
Object.defineProperty(x, "__esModule", { value: !0 });
x.operate = x.hasLift = void 0;
var iT = _e;
function cm(e) {
  return iT.isFunction(e == null ? void 0 : e.lift);
}
x.hasLift = cm;
function oT(e) {
  return function(t) {
    if (cm(t))
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
x.operate = oT;
var q = {}, aT = d && d.__extends || function() {
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
var uT = Rn;
function sT(e, t, r, n, i) {
  return new lm(e, t, r, n, i);
}
q.createOperatorSubscriber = sT;
var lm = function(e) {
  aT(t, e);
  function t(r, n, i, o, a, u) {
    var c = e.call(this, r) || this;
    return c.onFinalize = a, c.shouldUnsubscribe = u, c._next = n ? function(s) {
      try {
        n(s);
      } catch (l) {
        r.error(l);
      }
    } : e.prototype._next, c._error = o ? function(s) {
      try {
        o(s);
      } catch (l) {
        r.error(l);
      } finally {
        this.unsubscribe();
      }
    } : e.prototype._error, c._complete = i ? function() {
      try {
        i();
      } catch (s) {
        r.error(s);
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
}(uT.Subscriber);
q.OperatorSubscriber = lm;
Object.defineProperty(An, "__esModule", { value: !0 });
An.refCount = void 0;
var cT = x, lT = q;
function fT() {
  return cT.operate(function(e, t) {
    var r = null;
    e._refCount++;
    var n = lT.createOperatorSubscriber(t, void 0, void 0, void 0, function() {
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
An.refCount = fT;
var dT = d && d.__extends || function() {
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
var hT = pe, bh = Ue, vT = An, _T = q, pT = x, mT = function(e) {
  dT(t, e);
  function t(r, n) {
    var i = e.call(this) || this;
    return i.source = r, i.subjectFactory = n, i._subject = null, i._refCount = 0, i._connection = null, pT.hasLift(r) && (i.lift = r.lift), i;
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
      n = this._connection = new bh.Subscription();
      var i = this.getSubject();
      n.add(this.source.subscribe(_T.createOperatorSubscriber(i, void 0, function() {
        r._teardown(), i.complete();
      }, function(o) {
        r._teardown(), i.error(o);
      }, function() {
        return r._teardown();
      }))), n.closed && (this._connection = null, n = bh.Subscription.EMPTY);
    }
    return n;
  }, t.prototype.refCount = function() {
    return vT.refCount()(this);
  }, t;
}(hT.Observable);
Ht.ConnectableObservable = mT;
var is = {}, fm = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.performanceTimestampProvider = void 0, e.performanceTimestampProvider = {
    now: function() {
      return (e.performanceTimestampProvider.delegate || performance).now();
    },
    delegate: void 0
  };
})(fm);
var Hf = {};
(function(e) {
  var t = d && d.__read || function(i, o) {
    var a = typeof Symbol == "function" && i[Symbol.iterator];
    if (!a)
      return i;
    var u = a.call(i), c, s = [], l;
    try {
      for (; (o === void 0 || o-- > 0) && !(c = u.next()).done; )
        s.push(c.value);
    } catch (v) {
      l = { error: v };
    } finally {
      try {
        c && !c.done && (a = u.return) && a.call(u);
      } finally {
        if (l)
          throw l.error;
      }
    }
    return s;
  }, r = d && d.__spreadArray || function(i, o) {
    for (var a = 0, u = o.length, c = i.length; a < u; a++, c++)
      i[c] = o[a];
    return i;
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.animationFrameProvider = void 0;
  var n = Ue;
  e.animationFrameProvider = {
    schedule: function(i) {
      var o = requestAnimationFrame, a = cancelAnimationFrame, u = e.animationFrameProvider.delegate;
      u && (o = u.requestAnimationFrame, a = u.cancelAnimationFrame);
      var c = o(function(s) {
        a = void 0, i(s);
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
var yT = pe, bT = fm, gh = Hf;
function gT(e) {
  return e ? dm(e) : OT;
}
is.animationFrames = gT;
function dm(e) {
  return new yT.Observable(function(t) {
    var r = e || bT.performanceTimestampProvider, n = r.now(), i = 0, o = function() {
      t.closed || (i = gh.animationFrameProvider.requestAnimationFrame(function(a) {
        i = 0;
        var u = r.now();
        t.next({
          timestamp: e ? u : a,
          elapsed: u - n
        }), o();
      }));
    };
    return o(), function() {
      i && gh.animationFrameProvider.cancelAnimationFrame(i);
    };
  });
}
var OT = dm(), Me = {}, zi = {};
Object.defineProperty(zi, "__esModule", { value: !0 });
zi.ObjectUnsubscribedError = void 0;
var wT = Ir;
zi.ObjectUnsubscribedError = wT.createErrorClass(function(e) {
  return function() {
    e(this), this.name = "ObjectUnsubscribedError", this.message = "object unsubscribed";
  };
});
var hm = d && d.__extends || function() {
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
}(), ET = d && d.__values || function(e) {
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
var Oh = pe, af = Ue, ST = zi, TT = mr, Ol = Xr, vm = function(e) {
  hm(t, e);
  function t() {
    var r = e.call(this) || this;
    return r.closed = !1, r.currentObservers = null, r.observers = [], r.isStopped = !1, r.hasError = !1, r.thrownError = null, r;
  }
  return t.prototype.lift = function(r) {
    var n = new uf(this, this);
    return n.operator = r, n;
  }, t.prototype._throwIfClosed = function() {
    if (this.closed)
      throw new ST.ObjectUnsubscribedError();
  }, t.prototype.next = function(r) {
    var n = this;
    Ol.errorContext(function() {
      var i, o;
      if (n._throwIfClosed(), !n.isStopped) {
        n.currentObservers || (n.currentObservers = Array.from(n.observers));
        try {
          for (var a = ET(n.currentObservers), u = a.next(); !u.done; u = a.next()) {
            var c = u.value;
            c.next(r);
          }
        } catch (s) {
          i = { error: s };
        } finally {
          try {
            u && !u.done && (o = a.return) && o.call(a);
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
    var n = this, i = this, o = i.hasError, a = i.isStopped, u = i.observers;
    return o || a ? af.EMPTY_SUBSCRIPTION : (this.currentObservers = null, u.push(r), new af.Subscription(function() {
      n.currentObservers = null, TT.arrRemove(u, r);
    }));
  }, t.prototype._checkFinalizedStatuses = function(r) {
    var n = this, i = n.hasError, o = n.thrownError, a = n.isStopped;
    i ? r.error(o) : a && r.complete();
  }, t.prototype.asObservable = function() {
    var r = new Oh.Observable();
    return r.source = this, r;
  }, t.create = function(r, n) {
    return new uf(r, n);
  }, t;
}(Oh.Observable);
Me.Subject = vm;
var uf = function(e) {
  hm(t, e);
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
}(vm);
Me.AnonymousSubject = uf;
var Yi = {}, PT = d && d.__extends || function() {
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
var IT = Me, RT = function(e) {
  PT(t, e);
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
}(IT.Subject);
Yi.BehaviorSubject = RT;
var Cn = {}, os = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.dateTimestampProvider = void 0, e.dateTimestampProvider = {
    now: function() {
      return (e.dateTimestampProvider.delegate || Date).now();
    },
    delegate: void 0
  };
})(os);
var AT = d && d.__extends || function() {
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
Cn.ReplaySubject = void 0;
var CT = Me, jT = os, NT = function(e) {
  AT(t, e);
  function t(r, n, i) {
    r === void 0 && (r = 1 / 0), n === void 0 && (n = 1 / 0), i === void 0 && (i = jT.dateTimestampProvider);
    var o = e.call(this) || this;
    return o._bufferSize = r, o._windowTime = n, o._timestampProvider = i, o._buffer = [], o._infiniteTimeWindow = !0, o._infiniteTimeWindow = n === 1 / 0, o._bufferSize = Math.max(1, r), o._windowTime = Math.max(1, n), o;
  }
  return t.prototype.next = function(r) {
    var n = this, i = n.isStopped, o = n._buffer, a = n._infiniteTimeWindow, u = n._timestampProvider, c = n._windowTime;
    i || (o.push(r), !a && o.push(u.now() + c)), this._trimBuffer(), e.prototype.next.call(this, r);
  }, t.prototype._subscribe = function(r) {
    this._throwIfClosed(), this._trimBuffer();
    for (var n = this._innerSubscribe(r), i = this, o = i._infiniteTimeWindow, a = i._buffer, u = a.slice(), c = 0; c < u.length && !r.closed; c += o ? 1 : 2)
      r.next(u[c]);
    return this._checkFinalizedStatuses(r), n;
  }, t.prototype._trimBuffer = function() {
    var r = this, n = r._bufferSize, i = r._timestampProvider, o = r._buffer, a = r._infiniteTimeWindow, u = (a ? 1 : 2) * n;
    if (n < 1 / 0 && u < o.length && o.splice(0, o.length - u), !a) {
      for (var c = i.now(), s = 0, l = 1; l < o.length && o[l] <= c; l += 2)
        s = l;
      s && o.splice(0, s + 1);
    }
  }, t;
}(CT.Subject);
Cn.ReplaySubject = NT;
var jn = {}, $T = d && d.__extends || function() {
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
Object.defineProperty(jn, "__esModule", { value: !0 });
jn.AsyncSubject = void 0;
var MT = Me, kT = function(e) {
  $T(t, e);
  function t() {
    var r = e !== null && e.apply(this, arguments) || this;
    return r._value = null, r._hasValue = !1, r._isComplete = !1, r;
  }
  return t.prototype._checkFinalizedStatuses = function(r) {
    var n = this, i = n.hasError, o = n._hasValue, a = n._value, u = n.thrownError, c = n.isStopped, s = n._isComplete;
    i ? r.error(u) : (c || s) && (o && r.next(a), r.complete());
  }, t.prototype.next = function(r) {
    this.isStopped || (this._value = r, this._hasValue = !0);
  }, t.prototype.complete = function() {
    var r = this, n = r._hasValue, i = r._value, o = r._isComplete;
    o || (this._isComplete = !0, n && e.prototype.next.call(this, i), e.prototype.complete.call(this));
  }, t;
}(MT.Subject);
jn.AsyncSubject = kT;
var _m = {}, as = {}, ct = {}, us = {}, DT = d && d.__extends || function() {
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
var UT = Ue, LT = function(e) {
  DT(t, e);
  function t(r, n) {
    return e.call(this) || this;
  }
  return t.prototype.schedule = function(r, n) {
    return this;
  }, t;
}(UT.Subscription);
us.Action = LT;
var pm = {};
(function(e) {
  var t = d && d.__read || function(n, i) {
    var o = typeof Symbol == "function" && n[Symbol.iterator];
    if (!o)
      return n;
    var a = o.call(n), u, c = [], s;
    try {
      for (; (i === void 0 || i-- > 0) && !(u = a.next()).done; )
        c.push(u.value);
    } catch (l) {
      s = { error: l };
    } finally {
      try {
        u && !u.done && (o = a.return) && o.call(a);
      } finally {
        if (s)
          throw s.error;
      }
    }
    return c;
  }, r = d && d.__spreadArray || function(n, i) {
    for (var o = 0, a = i.length, u = n.length; o < a; o++, u++)
      n[u] = i[o];
    return n;
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.intervalProvider = void 0, e.intervalProvider = {
    setInterval: function(n, i) {
      for (var o = [], a = 2; a < arguments.length; a++)
        o[a - 2] = arguments[a];
      var u = e.intervalProvider.delegate;
      return u != null && u.setInterval ? u.setInterval.apply(u, r([n, i], t(o))) : setInterval.apply(void 0, r([n, i], t(o)));
    },
    clearInterval: function(n) {
      var i = e.intervalProvider.delegate;
      return ((i == null ? void 0 : i.clearInterval) || clearInterval)(n);
    },
    delegate: void 0
  };
})(pm);
var FT = d && d.__extends || function() {
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
var BT = us, wh = pm, xT = mr, WT = function(e) {
  FT(t, e);
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
    return i === void 0 && (i = 0), wh.intervalProvider.setInterval(r.flush.bind(r, this), i);
  }, t.prototype.recycleAsyncId = function(r, n, i) {
    if (i === void 0 && (i = 0), i != null && this.delay === i && this.pending === !1)
      return n;
    n != null && wh.intervalProvider.clearInterval(n);
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
      this.work = this.state = this.scheduler = null, this.pending = !1, xT.arrRemove(o, this), n != null && (this.id = this.recycleAsyncId(i, n, null)), this.delay = null, e.prototype.unsubscribe.call(this);
    }
  }, t;
}(BT.Action);
ct.AsyncAction = WT;
var mm = {}, mn = {};
Object.defineProperty(mn, "__esModule", { value: !0 });
mn.TestTools = mn.Immediate = void 0;
var VT = 1, wl, $u = {};
function Eh(e) {
  return e in $u ? (delete $u[e], !0) : !1;
}
mn.Immediate = {
  setImmediate: function(e) {
    var t = VT++;
    return $u[t] = !0, wl || (wl = Promise.resolve()), wl.then(function() {
      return Eh(t) && e();
    }), t;
  },
  clearImmediate: function(e) {
    Eh(e);
  }
};
mn.TestTools = {
  pending: function() {
    return Object.keys($u).length;
  }
};
(function(e) {
  var t = d && d.__read || function(a, u) {
    var c = typeof Symbol == "function" && a[Symbol.iterator];
    if (!c)
      return a;
    var s = c.call(a), l, v = [], y;
    try {
      for (; (u === void 0 || u-- > 0) && !(l = s.next()).done; )
        v.push(l.value);
    } catch (O) {
      y = { error: O };
    } finally {
      try {
        l && !l.done && (c = s.return) && c.call(s);
      } finally {
        if (y)
          throw y.error;
      }
    }
    return v;
  }, r = d && d.__spreadArray || function(a, u) {
    for (var c = 0, s = u.length, l = a.length; c < s; c++, l++)
      a[l] = u[c];
    return a;
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.immediateProvider = void 0;
  var n = mn, i = n.Immediate.setImmediate, o = n.Immediate.clearImmediate;
  e.immediateProvider = {
    setImmediate: function() {
      for (var a = [], u = 0; u < arguments.length; u++)
        a[u] = arguments[u];
      var c = e.immediateProvider.delegate;
      return ((c == null ? void 0 : c.setImmediate) || i).apply(void 0, r([], t(a)));
    },
    clearImmediate: function(a) {
      var u = e.immediateProvider.delegate;
      return ((u == null ? void 0 : u.clearImmediate) || o)(a);
    },
    delegate: void 0
  };
})(mm);
var qT = d && d.__extends || function() {
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
var HT = ct, Sh = mm, zT = function(e) {
  qT(t, e);
  function t(r, n) {
    var i = e.call(this, r, n) || this;
    return i.scheduler = r, i.work = n, i;
  }
  return t.prototype.requestAsyncId = function(r, n, i) {
    return i === void 0 && (i = 0), i !== null && i > 0 ? e.prototype.requestAsyncId.call(this, r, n, i) : (r.actions.push(this), r._scheduled || (r._scheduled = Sh.immediateProvider.setImmediate(r.flush.bind(r, void 0))));
  }, t.prototype.recycleAsyncId = function(r, n, i) {
    var o;
    if (i === void 0 && (i = 0), i != null ? i > 0 : this.delay > 0)
      return e.prototype.recycleAsyncId.call(this, r, n, i);
    var a = r.actions;
    n != null && ((o = a[a.length - 1]) === null || o === void 0 ? void 0 : o.id) !== n && (Sh.immediateProvider.clearImmediate(n), r._scheduled = void 0);
  }, t;
}(HT.AsyncAction);
as.AsapAction = zT;
var ss = {}, lt = {}, Gi = {};
Object.defineProperty(Gi, "__esModule", { value: !0 });
Gi.Scheduler = void 0;
var YT = os, GT = function() {
  function e(t, r) {
    r === void 0 && (r = e.now), this.schedulerActionCtor = t, this.now = r;
  }
  return e.prototype.schedule = function(t, r, n) {
    return r === void 0 && (r = 0), new this.schedulerActionCtor(this, t).schedule(n, r);
  }, e.now = YT.dateTimestampProvider.now, e;
}();
Gi.Scheduler = GT;
var KT = d && d.__extends || function() {
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
var Th = Gi, ZT = function(e) {
  KT(t, e);
  function t(r, n) {
    n === void 0 && (n = Th.Scheduler.now);
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
}(Th.Scheduler);
lt.AsyncScheduler = ZT;
var QT = d && d.__extends || function() {
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
var JT = lt, XT = function(e) {
  QT(t, e);
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
}(JT.AsyncScheduler);
ss.AsapScheduler = XT;
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.asap = e.asapScheduler = void 0;
  var t = as, r = ss;
  e.asapScheduler = new r.AsapScheduler(t.AsapAction), e.asap = e.asapScheduler;
})(_m);
var Xe = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.async = e.asyncScheduler = void 0;
  var t = ct, r = lt;
  e.asyncScheduler = new r.AsyncScheduler(t.AsyncAction), e.async = e.asyncScheduler;
})(Xe);
var ym = {}, cs = {}, eP = d && d.__extends || function() {
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
var rP = ct, tP = function(e) {
  eP(t, e);
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
}(rP.AsyncAction);
cs.QueueAction = tP;
var ls = {}, nP = d && d.__extends || function() {
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
var iP = lt, oP = function(e) {
  nP(t, e);
  function t() {
    return e !== null && e.apply(this, arguments) || this;
  }
  return t;
}(iP.AsyncScheduler);
ls.QueueScheduler = oP;
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.queue = e.queueScheduler = void 0;
  var t = cs, r = ls;
  e.queueScheduler = new r.QueueScheduler(t.QueueAction), e.queue = e.queueScheduler;
})(ym);
var bm = {}, fs = {}, aP = d && d.__extends || function() {
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
var uP = ct, Ph = Hf, sP = function(e) {
  aP(t, e);
  function t(r, n) {
    var i = e.call(this, r, n) || this;
    return i.scheduler = r, i.work = n, i;
  }
  return t.prototype.requestAsyncId = function(r, n, i) {
    return i === void 0 && (i = 0), i !== null && i > 0 ? e.prototype.requestAsyncId.call(this, r, n, i) : (r.actions.push(this), r._scheduled || (r._scheduled = Ph.animationFrameProvider.requestAnimationFrame(function() {
      return r.flush(void 0);
    })));
  }, t.prototype.recycleAsyncId = function(r, n, i) {
    var o;
    if (i === void 0 && (i = 0), i != null ? i > 0 : this.delay > 0)
      return e.prototype.recycleAsyncId.call(this, r, n, i);
    var a = r.actions;
    n != null && ((o = a[a.length - 1]) === null || o === void 0 ? void 0 : o.id) !== n && (Ph.animationFrameProvider.cancelAnimationFrame(n), r._scheduled = void 0);
  }, t;
}(uP.AsyncAction);
fs.AnimationFrameAction = sP;
var ds = {}, cP = d && d.__extends || function() {
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
var lP = lt, fP = function(e) {
  cP(t, e);
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
}(lP.AsyncScheduler);
ds.AnimationFrameScheduler = fP;
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.animationFrame = e.animationFrameScheduler = void 0;
  var t = fs, r = ds;
  e.animationFrameScheduler = new r.AnimationFrameScheduler(t.AnimationFrameAction), e.animationFrame = e.animationFrameScheduler;
})(bm);
var yn = {}, gm = d && d.__extends || function() {
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
Object.defineProperty(yn, "__esModule", { value: !0 });
yn.VirtualAction = yn.VirtualTimeScheduler = void 0;
var dP = ct, hP = Ue, vP = lt, _P = function(e) {
  gm(t, e);
  function t(r, n) {
    r === void 0 && (r = Om), n === void 0 && (n = 1 / 0);
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
}(vP.AsyncScheduler);
yn.VirtualTimeScheduler = _P;
var Om = function(e) {
  gm(t, e);
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
      return hP.Subscription.EMPTY;
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
}(dP.AsyncAction);
yn.VirtualAction = Om;
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
var Nn = {}, De = {}, zt = {};
Object.defineProperty(zt, "__esModule", { value: !0 });
zt.isScheduler = void 0;
var pP = _e;
function mP(e) {
  return e && pP.isFunction(e.schedule);
}
zt.isScheduler = mP;
Object.defineProperty(De, "__esModule", { value: !0 });
De.popNumber = De.popScheduler = De.popResultSelector = void 0;
var yP = _e, bP = zt;
function zf(e) {
  return e[e.length - 1];
}
function gP(e) {
  return yP.isFunction(zf(e)) ? e.pop() : void 0;
}
De.popResultSelector = gP;
function OP(e) {
  return bP.isScheduler(zf(e)) ? e.pop() : void 0;
}
De.popScheduler = OP;
function wP(e, t) {
  return typeof zf(e) == "number" ? e.pop() : t;
}
De.popNumber = wP;
var yr = {}, Ki = {}, vs = {}, Y = {}, $n = {};
Object.defineProperty($n, "__esModule", { value: !0 });
$n.isArrayLike = void 0;
$n.isArrayLike = function(e) {
  return e && typeof e.length == "number" && typeof e != "function";
};
var Zi = {};
Object.defineProperty(Zi, "__esModule", { value: !0 });
Zi.isPromise = void 0;
var EP = _e;
function SP(e) {
  return EP.isFunction(e == null ? void 0 : e.then);
}
Zi.isPromise = SP;
var Qi = {};
Object.defineProperty(Qi, "__esModule", { value: !0 });
Qi.isInteropObservable = void 0;
var TP = qt, PP = _e;
function IP(e) {
  return PP.isFunction(e[TP.observable]);
}
Qi.isInteropObservable = IP;
var Ji = {};
Object.defineProperty(Ji, "__esModule", { value: !0 });
Ji.isAsyncIterable = void 0;
var RP = _e;
function AP(e) {
  return Symbol.asyncIterator && RP.isFunction(e == null ? void 0 : e[Symbol.asyncIterator]);
}
Ji.isAsyncIterable = AP;
var Xi = {};
Object.defineProperty(Xi, "__esModule", { value: !0 });
Xi.createInvalidObservableTypeError = void 0;
function CP(e) {
  return new TypeError("You provided " + (e !== null && typeof e == "object" ? "an invalid object" : "'" + e + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
}
Xi.createInvalidObservableTypeError = CP;
var eo = {}, Dt = {};
Object.defineProperty(Dt, "__esModule", { value: !0 });
Dt.iterator = Dt.getSymbolIterator = void 0;
function wm() {
  return typeof Symbol != "function" || !Symbol.iterator ? "@@iterator" : Symbol.iterator;
}
Dt.getSymbolIterator = wm;
Dt.iterator = wm();
Object.defineProperty(eo, "__esModule", { value: !0 });
eo.isIterable = void 0;
var jP = Dt, NP = _e;
function $P(e) {
  return NP.isFunction(e == null ? void 0 : e[jP.iterator]);
}
eo.isIterable = $P;
var et = {}, MP = d && d.__generator || function(e, t) {
  var r = { label: 0, sent: function() {
    if (o[0] & 1)
      throw o[1];
    return o[1];
  }, trys: [], ops: [] }, n, i, o, a;
  return a = { next: u(0), throw: u(1), return: u(2) }, typeof Symbol == "function" && (a[Symbol.iterator] = function() {
    return this;
  }), a;
  function u(s) {
    return function(l) {
      return c([s, l]);
    };
  }
  function c(s) {
    if (n)
      throw new TypeError("Generator is already executing.");
    for (; r; )
      try {
        if (n = 1, i && (o = s[0] & 2 ? i.return : s[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, s[1])).done)
          return o;
        switch (i = 0, o && (s = [s[0] & 2, o.value]), s[0]) {
          case 0:
          case 1:
            o = s;
            break;
          case 4:
            return r.label++, { value: s[1], done: !1 };
          case 5:
            r.label++, i = s[1], s = [0];
            continue;
          case 7:
            s = r.ops.pop(), r.trys.pop();
            continue;
          default:
            if (o = r.trys, !(o = o.length > 0 && o[o.length - 1]) && (s[0] === 6 || s[0] === 2)) {
              r = 0;
              continue;
            }
            if (s[0] === 3 && (!o || s[1] > o[0] && s[1] < o[3])) {
              r.label = s[1];
              break;
            }
            if (s[0] === 6 && r.label < o[1]) {
              r.label = o[1], o = s;
              break;
            }
            if (o && r.label < o[2]) {
              r.label = o[2], r.ops.push(s);
              break;
            }
            o[2] && r.ops.pop(), r.trys.pop();
            continue;
        }
        s = t.call(e, r);
      } catch (l) {
        s = [6, l], i = 0;
      } finally {
        n = o = 0;
      }
    if (s[0] & 5)
      throw s[1];
    return { value: s[0] ? s[1] : void 0, done: !0 };
  }
}, ln = d && d.__await || function(e) {
  return this instanceof ln ? (this.v = e, this) : new ln(e);
}, kP = d && d.__asyncGenerator || function(e, t, r) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var n = r.apply(e, t || []), i, o = [];
  return i = {}, a("next"), a("throw"), a("return"), i[Symbol.asyncIterator] = function() {
    return this;
  }, i;
  function a(y) {
    n[y] && (i[y] = function(O) {
      return new Promise(function(E, T) {
        o.push([y, O, E, T]) > 1 || u(y, O);
      });
    });
  }
  function u(y, O) {
    try {
      c(n[y](O));
    } catch (E) {
      v(o[0][3], E);
    }
  }
  function c(y) {
    y.value instanceof ln ? Promise.resolve(y.value.v).then(s, l) : v(o[0][2], y);
  }
  function s(y) {
    u("next", y);
  }
  function l(y) {
    u("throw", y);
  }
  function v(y, O) {
    y(O), o.shift(), o.length && u(o[0][0], o[0][1]);
  }
};
Object.defineProperty(et, "__esModule", { value: !0 });
et.isReadableStreamLike = et.readableStreamLikeToAsyncGenerator = void 0;
var DP = _e;
function UP(e) {
  return kP(this, arguments, function() {
    var r, n, i, o;
    return MP(this, function(a) {
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
et.readableStreamLikeToAsyncGenerator = UP;
function LP(e) {
  return DP.isFunction(e == null ? void 0 : e.getReader);
}
et.isReadableStreamLike = LP;
var FP = d && d.__awaiter || function(e, t, r, n) {
  function i(o) {
    return o instanceof r ? o : new r(function(a) {
      a(o);
    });
  }
  return new (r || (r = Promise))(function(o, a) {
    function u(l) {
      try {
        s(n.next(l));
      } catch (v) {
        a(v);
      }
    }
    function c(l) {
      try {
        s(n.throw(l));
      } catch (v) {
        a(v);
      }
    }
    function s(l) {
      l.done ? o(l.value) : i(l.value).then(u, c);
    }
    s((n = n.apply(e, t || [])).next());
  });
}, BP = d && d.__generator || function(e, t) {
  var r = { label: 0, sent: function() {
    if (o[0] & 1)
      throw o[1];
    return o[1];
  }, trys: [], ops: [] }, n, i, o, a;
  return a = { next: u(0), throw: u(1), return: u(2) }, typeof Symbol == "function" && (a[Symbol.iterator] = function() {
    return this;
  }), a;
  function u(s) {
    return function(l) {
      return c([s, l]);
    };
  }
  function c(s) {
    if (n)
      throw new TypeError("Generator is already executing.");
    for (; r; )
      try {
        if (n = 1, i && (o = s[0] & 2 ? i.return : s[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, s[1])).done)
          return o;
        switch (i = 0, o && (s = [s[0] & 2, o.value]), s[0]) {
          case 0:
          case 1:
            o = s;
            break;
          case 4:
            return r.label++, { value: s[1], done: !1 };
          case 5:
            r.label++, i = s[1], s = [0];
            continue;
          case 7:
            s = r.ops.pop(), r.trys.pop();
            continue;
          default:
            if (o = r.trys, !(o = o.length > 0 && o[o.length - 1]) && (s[0] === 6 || s[0] === 2)) {
              r = 0;
              continue;
            }
            if (s[0] === 3 && (!o || s[1] > o[0] && s[1] < o[3])) {
              r.label = s[1];
              break;
            }
            if (s[0] === 6 && r.label < o[1]) {
              r.label = o[1], o = s;
              break;
            }
            if (o && r.label < o[2]) {
              r.label = o[2], r.ops.push(s);
              break;
            }
            o[2] && r.ops.pop(), r.trys.pop();
            continue;
        }
        s = t.call(e, r);
      } catch (l) {
        s = [6, l], i = 0;
      } finally {
        n = o = 0;
      }
    if (s[0] & 5)
      throw s[1];
    return { value: s[0] ? s[1] : void 0, done: !0 };
  }
}, xP = d && d.__asyncValues || function(e) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var t = e[Symbol.asyncIterator], r;
  return t ? t.call(e) : (e = typeof sf == "function" ? sf(e) : e[Symbol.iterator](), r = {}, n("next"), n("throw"), n("return"), r[Symbol.asyncIterator] = function() {
    return this;
  }, r);
  function n(o) {
    r[o] = e[o] && function(a) {
      return new Promise(function(u, c) {
        a = e[o](a), i(u, c, a.done, a.value);
      });
    };
  }
  function i(o, a, u, c) {
    Promise.resolve(c).then(function(s) {
      o({ value: s, done: u });
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
var WP = $n, VP = Zi, Mn = pe, qP = Qi, HP = Ji, zP = Xi, YP = eo, Em = et, GP = _e, KP = Hi, ZP = qt;
function QP(e) {
  if (e instanceof Mn.Observable)
    return e;
  if (e != null) {
    if (qP.isInteropObservable(e))
      return Sm(e);
    if (WP.isArrayLike(e))
      return Tm(e);
    if (VP.isPromise(e))
      return Pm(e);
    if (HP.isAsyncIterable(e))
      return Yf(e);
    if (YP.isIterable(e))
      return Im(e);
    if (Em.isReadableStreamLike(e))
      return Rm(e);
  }
  throw zP.createInvalidObservableTypeError(e);
}
Y.innerFrom = QP;
function Sm(e) {
  return new Mn.Observable(function(t) {
    var r = e[ZP.observable]();
    if (GP.isFunction(r.subscribe))
      return r.subscribe(t);
    throw new TypeError("Provided object does not correctly implement Symbol.observable");
  });
}
Y.fromInteropObservable = Sm;
function Tm(e) {
  return new Mn.Observable(function(t) {
    for (var r = 0; r < e.length && !t.closed; r++)
      t.next(e[r]);
    t.complete();
  });
}
Y.fromArrayLike = Tm;
function Pm(e) {
  return new Mn.Observable(function(t) {
    e.then(function(r) {
      t.closed || (t.next(r), t.complete());
    }, function(r) {
      return t.error(r);
    }).then(null, KP.reportUnhandledError);
  });
}
Y.fromPromise = Pm;
function Im(e) {
  return new Mn.Observable(function(t) {
    var r, n;
    try {
      for (var i = sf(e), o = i.next(); !o.done; o = i.next()) {
        var a = o.value;
        if (t.next(a), t.closed)
          return;
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
    t.complete();
  });
}
Y.fromIterable = Im;
function Yf(e) {
  return new Mn.Observable(function(t) {
    JP(e, t).catch(function(r) {
      return t.error(r);
    });
  });
}
Y.fromAsyncIterable = Yf;
function Rm(e) {
  return Yf(Em.readableStreamLikeToAsyncGenerator(e));
}
Y.fromReadableStreamLike = Rm;
function JP(e, t) {
  var r, n, i, o;
  return FP(this, void 0, void 0, function() {
    var a, u;
    return BP(this, function(c) {
      switch (c.label) {
        case 0:
          c.trys.push([0, 5, 6, 11]), r = xP(e), c.label = 1;
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
          return u = c.sent(), i = { error: u }, [3, 11];
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
function XP(e, t, r, n, i) {
  n === void 0 && (n = 0), i === void 0 && (i = !1);
  var o = t.schedule(function() {
    r(), i ? e.add(this.schedule(null, n)) : this.unsubscribe();
  }, n);
  if (e.add(o), !i)
    return o;
}
br.executeSchedule = XP;
Object.defineProperty(ft, "__esModule", { value: !0 });
ft.observeOn = void 0;
var El = br, eI = x, rI = q;
function tI(e, t) {
  return t === void 0 && (t = 0), eI.operate(function(r, n) {
    r.subscribe(rI.createOperatorSubscriber(n, function(i) {
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
ft.observeOn = tI;
var dt = {};
Object.defineProperty(dt, "__esModule", { value: !0 });
dt.subscribeOn = void 0;
var nI = x;
function iI(e, t) {
  return t === void 0 && (t = 0), nI.operate(function(r, n) {
    n.add(e.schedule(function() {
      return r.subscribe(n);
    }, t));
  });
}
dt.subscribeOn = iI;
Object.defineProperty(vs, "__esModule", { value: !0 });
vs.scheduleObservable = void 0;
var oI = Y, aI = ft, uI = dt;
function sI(e, t) {
  return oI.innerFrom(e).pipe(uI.subscribeOn(t), aI.observeOn(t));
}
vs.scheduleObservable = sI;
var _s = {};
Object.defineProperty(_s, "__esModule", { value: !0 });
_s.schedulePromise = void 0;
var cI = Y, lI = ft, fI = dt;
function dI(e, t) {
  return cI.innerFrom(e).pipe(fI.subscribeOn(t), lI.observeOn(t));
}
_s.schedulePromise = dI;
var ps = {};
Object.defineProperty(ps, "__esModule", { value: !0 });
ps.scheduleArray = void 0;
var hI = pe;
function vI(e, t) {
  return new hI.Observable(function(r) {
    var n = 0;
    return t.schedule(function() {
      n === e.length ? r.complete() : (r.next(e[n++]), r.closed || this.schedule());
    });
  });
}
ps.scheduleArray = vI;
var ro = {};
Object.defineProperty(ro, "__esModule", { value: !0 });
ro.scheduleIterable = void 0;
var _I = pe, pI = Dt, mI = _e, Ih = br;
function yI(e, t) {
  return new _I.Observable(function(r) {
    var n;
    return Ih.executeSchedule(r, t, function() {
      n = e[pI.iterator](), Ih.executeSchedule(r, t, function() {
        var i, o, a;
        try {
          i = n.next(), o = i.value, a = i.done;
        } catch (u) {
          r.error(u);
          return;
        }
        a ? r.complete() : r.next(o);
      }, 0, !0);
    }), function() {
      return mI.isFunction(n == null ? void 0 : n.return) && n.return();
    };
  });
}
ro.scheduleIterable = yI;
var to = {};
Object.defineProperty(to, "__esModule", { value: !0 });
to.scheduleAsyncIterable = void 0;
var bI = pe, Rh = br;
function gI(e, t) {
  if (!e)
    throw new Error("Iterable cannot be null");
  return new bI.Observable(function(r) {
    Rh.executeSchedule(r, t, function() {
      var n = e[Symbol.asyncIterator]();
      Rh.executeSchedule(r, t, function() {
        n.next().then(function(i) {
          i.done ? r.complete() : r.next(i.value);
        });
      }, 0, !0);
    });
  });
}
to.scheduleAsyncIterable = gI;
var ms = {};
Object.defineProperty(ms, "__esModule", { value: !0 });
ms.scheduleReadableStreamLike = void 0;
var OI = to, wI = et;
function EI(e, t) {
  return OI.scheduleAsyncIterable(wI.readableStreamLikeToAsyncGenerator(e), t);
}
ms.scheduleReadableStreamLike = EI;
Object.defineProperty(Ki, "__esModule", { value: !0 });
Ki.scheduled = void 0;
var SI = vs, TI = _s, PI = ps, II = ro, RI = to, AI = Qi, CI = Zi, jI = $n, NI = eo, $I = Ji, MI = Xi, kI = et, DI = ms;
function UI(e, t) {
  if (e != null) {
    if (AI.isInteropObservable(e))
      return SI.scheduleObservable(e, t);
    if (jI.isArrayLike(e))
      return PI.scheduleArray(e, t);
    if (CI.isPromise(e))
      return TI.schedulePromise(e, t);
    if ($I.isAsyncIterable(e))
      return RI.scheduleAsyncIterable(e, t);
    if (NI.isIterable(e))
      return II.scheduleIterable(e, t);
    if (kI.isReadableStreamLike(e))
      return DI.scheduleReadableStreamLike(e, t);
  }
  throw MI.createInvalidObservableTypeError(e);
}
Ki.scheduled = UI;
Object.defineProperty(yr, "__esModule", { value: !0 });
yr.from = void 0;
var LI = Ki, FI = Y;
function BI(e, t) {
  return t ? LI.scheduled(e, t) : FI.innerFrom(e);
}
yr.from = BI;
Object.defineProperty(Nn, "__esModule", { value: !0 });
Nn.of = void 0;
var xI = De, WI = yr;
function VI() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e[t] = arguments[t];
  var r = xI.popScheduler(e);
  return WI.from(e, r);
}
Nn.of = VI;
var no = {};
Object.defineProperty(no, "__esModule", { value: !0 });
no.throwError = void 0;
var qI = pe, HI = _e;
function zI(e, t) {
  var r = HI.isFunction(e) ? e : function() {
    return e;
  }, n = function(i) {
    return i.error(r());
  };
  return new qI.Observable(t ? function(i) {
    return t.schedule(n, 0, i);
  } : n);
}
no.throwError = zI;
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.observeNotification = e.Notification = e.NotificationKind = void 0;
  var t = pr, r = Nn, n = no, i = _e;
  (function(u) {
    u.NEXT = "N", u.ERROR = "E", u.COMPLETE = "C";
  })(e.NotificationKind || (e.NotificationKind = {}));
  var o = function() {
    function u(c, s, l) {
      this.kind = c, this.value = s, this.error = l, this.hasValue = c === "N";
    }
    return u.prototype.observe = function(c) {
      return a(this, c);
    }, u.prototype.do = function(c, s, l) {
      var v = this, y = v.kind, O = v.value, E = v.error;
      return y === "N" ? c == null ? void 0 : c(O) : y === "E" ? s == null ? void 0 : s(E) : l == null ? void 0 : l();
    }, u.prototype.accept = function(c, s, l) {
      var v;
      return i.isFunction((v = c) === null || v === void 0 ? void 0 : v.next) ? this.observe(c) : this.do(c, s, l);
    }, u.prototype.toObservable = function() {
      var c = this, s = c.kind, l = c.value, v = c.error, y = s === "N" ? r.of(l) : s === "E" ? n.throwError(function() {
        return v;
      }) : s === "C" ? t.EMPTY : 0;
      if (!y)
        throw new TypeError("Unexpected notification kind " + s);
      return y;
    }, u.createNext = function(c) {
      return new u("N", c);
    }, u.createError = function(c) {
      return new u("E", void 0, c);
    }, u.createComplete = function() {
      return u.completeNotification;
    }, u.completeNotification = new u("C"), u;
  }();
  e.Notification = o;
  function a(u, c) {
    var s, l, v, y = u, O = y.kind, E = y.value, T = y.error;
    if (typeof O != "string")
      throw new TypeError('Invalid notification, missing "kind"');
    O === "N" ? (s = c.next) === null || s === void 0 || s.call(c, E) : O === "E" ? (l = c.error) === null || l === void 0 || l.call(c, T) : (v = c.complete) === null || v === void 0 || v.call(c);
  }
  e.observeNotification = a;
})(hs);
var ys = {};
Object.defineProperty(ys, "__esModule", { value: !0 });
ys.isObservable = void 0;
var YI = pe, Ah = _e;
function GI(e) {
  return !!e && (e instanceof YI.Observable || Ah.isFunction(e.lift) && Ah.isFunction(e.subscribe));
}
ys.isObservable = GI;
var bs = {}, Rr = {};
Object.defineProperty(Rr, "__esModule", { value: !0 });
Rr.EmptyError = void 0;
var KI = Ir;
Rr.EmptyError = KI.createErrorClass(function(e) {
  return function() {
    e(this), this.name = "EmptyError", this.message = "no elements in sequence";
  };
});
Object.defineProperty(bs, "__esModule", { value: !0 });
bs.lastValueFrom = void 0;
var ZI = Rr;
function QI(e, t) {
  var r = typeof t == "object";
  return new Promise(function(n, i) {
    var o = !1, a;
    e.subscribe({
      next: function(u) {
        a = u, o = !0;
      },
      error: i,
      complete: function() {
        o ? n(a) : r ? n(t.defaultValue) : i(new ZI.EmptyError());
      }
    });
  });
}
bs.lastValueFrom = QI;
var gs = {};
Object.defineProperty(gs, "__esModule", { value: !0 });
gs.firstValueFrom = void 0;
var JI = Rr, XI = Rn;
function eR(e, t) {
  var r = typeof t == "object";
  return new Promise(function(n, i) {
    var o = new XI.SafeSubscriber({
      next: function(a) {
        n(a), o.unsubscribe();
      },
      error: i,
      complete: function() {
        r ? n(t.defaultValue) : i(new JI.EmptyError());
      }
    });
    e.subscribe(o);
  });
}
gs.firstValueFrom = eR;
var io = {};
Object.defineProperty(io, "__esModule", { value: !0 });
io.ArgumentOutOfRangeError = void 0;
var rR = Ir;
io.ArgumentOutOfRangeError = rR.createErrorClass(function(e) {
  return function() {
    e(this), this.name = "ArgumentOutOfRangeError", this.message = "argument out of range";
  };
});
var oo = {};
Object.defineProperty(oo, "__esModule", { value: !0 });
oo.NotFoundError = void 0;
var tR = Ir;
oo.NotFoundError = tR.createErrorClass(function(e) {
  return function(r) {
    e(this), this.name = "NotFoundError", this.message = r;
  };
});
var ao = {};
Object.defineProperty(ao, "__esModule", { value: !0 });
ao.SequenceError = void 0;
var nR = Ir;
ao.SequenceError = nR.createErrorClass(function(e) {
  return function(r) {
    e(this), this.name = "SequenceError", this.message = r;
  };
});
var ji = {}, kn = {};
Object.defineProperty(kn, "__esModule", { value: !0 });
kn.isValidDate = void 0;
function iR(e) {
  return e instanceof Date && !isNaN(e);
}
kn.isValidDate = iR;
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.timeout = e.TimeoutError = void 0;
  var t = Xe, r = kn, n = x, i = Y, o = Ir, a = q, u = br;
  e.TimeoutError = o.createErrorClass(function(l) {
    return function(y) {
      y === void 0 && (y = null), l(this), this.message = "Timeout has occurred", this.name = "TimeoutError", this.info = y;
    };
  });
  function c(l, v) {
    var y = r.isValidDate(l) ? { first: l } : typeof l == "number" ? { each: l } : l, O = y.first, E = y.each, T = y.with, C = T === void 0 ? s : T, A = y.scheduler, $ = A === void 0 ? v ?? t.asyncScheduler : A, U = y.meta, D = U === void 0 ? null : U;
    if (O == null && E == null)
      throw new TypeError("No timeout provided.");
    return n.operate(function(F, G) {
      var X, oe, de = null, Ie = 0, ge = function(Ae) {
        oe = u.executeSchedule(G, $, function() {
          try {
            X.unsubscribe(), i.innerFrom(C({
              meta: D,
              lastValue: de,
              seen: Ie
            })).subscribe(G);
          } catch (he) {
            G.error(he);
          }
        }, Ae);
      };
      X = F.subscribe(a.createOperatorSubscriber(G, function(Ae) {
        oe == null || oe.unsubscribe(), Ie++, G.next(de = Ae), E > 0 && ge(E);
      }, void 0, void 0, function() {
        oe != null && oe.closed || oe == null || oe.unsubscribe(), de = null;
      })), !Ie && ge(O != null ? typeof O == "number" ? O : +O - $.now() : E);
    });
  }
  e.timeout = c;
  function s(l) {
    throw new e.TimeoutError(l);
  }
})(ji);
var Os = {}, uo = {}, Ar = {}, gr = {};
Object.defineProperty(gr, "__esModule", { value: !0 });
gr.map = void 0;
var oR = x, aR = q;
function uR(e, t) {
  return oR.operate(function(r, n) {
    var i = 0;
    r.subscribe(aR.createOperatorSubscriber(n, function(o) {
      n.next(e.call(t, o, i++));
    }));
  });
}
gr.map = uR;
var sR = d && d.__read || function(e, t) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r)
    return e;
  var n = r.call(e), i, o = [], a;
  try {
    for (; (t === void 0 || t-- > 0) && !(i = n.next()).done; )
      o.push(i.value);
  } catch (u) {
    a = { error: u };
  } finally {
    try {
      i && !i.done && (r = n.return) && r.call(n);
    } finally {
      if (a)
        throw a.error;
    }
  }
  return o;
}, cR = d && d.__spreadArray || function(e, t) {
  for (var r = 0, n = t.length, i = e.length; r < n; r++, i++)
    e[i] = t[r];
  return e;
};
Object.defineProperty(Ar, "__esModule", { value: !0 });
Ar.mapOneOrManyArgs = void 0;
var lR = gr, fR = Array.isArray;
function dR(e, t) {
  return fR(t) ? e.apply(void 0, cR([], sR(t))) : e(t);
}
function hR(e) {
  return lR.map(function(t) {
    return dR(e, t);
  });
}
Ar.mapOneOrManyArgs = hR;
var vR = d && d.__read || function(e, t) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r)
    return e;
  var n = r.call(e), i, o = [], a;
  try {
    for (; (t === void 0 || t-- > 0) && !(i = n.next()).done; )
      o.push(i.value);
  } catch (u) {
    a = { error: u };
  } finally {
    try {
      i && !i.done && (r = n.return) && r.call(n);
    } finally {
      if (a)
        throw a.error;
    }
  }
  return o;
}, Ch = d && d.__spreadArray || function(e, t) {
  for (var r = 0, n = t.length, i = e.length; r < n; r++, i++)
    e[i] = t[r];
  return e;
};
Object.defineProperty(uo, "__esModule", { value: !0 });
uo.bindCallbackInternals = void 0;
var _R = zt, pR = pe, mR = dt, yR = Ar, bR = ft, gR = jn;
function cf(e, t, r, n) {
  if (r)
    if (_R.isScheduler(r))
      n = r;
    else
      return function() {
        for (var i = [], o = 0; o < arguments.length; o++)
          i[o] = arguments[o];
        return cf(e, t, n).apply(this, i).pipe(yR.mapOneOrManyArgs(r));
      };
  return n ? function() {
    for (var i = [], o = 0; o < arguments.length; o++)
      i[o] = arguments[o];
    return cf(e, t).apply(this, i).pipe(mR.subscribeOn(n), bR.observeOn(n));
  } : function() {
    for (var i = this, o = [], a = 0; a < arguments.length; a++)
      o[a] = arguments[a];
    var u = new gR.AsyncSubject(), c = !0;
    return new pR.Observable(function(s) {
      var l = u.subscribe(s);
      if (c) {
        c = !1;
        var v = !1, y = !1;
        t.apply(i, Ch(Ch([], vR(o)), [
          function() {
            for (var O = [], E = 0; E < arguments.length; E++)
              O[E] = arguments[E];
            if (e) {
              var T = O.shift();
              if (T != null) {
                u.error(T);
                return;
              }
            }
            u.next(1 < O.length ? O : O[0]), y = !0, v && u.complete();
          }
        ])), y && u.complete(), v = !0;
      }
      return l;
    });
  };
}
uo.bindCallbackInternals = cf;
Object.defineProperty(Os, "__esModule", { value: !0 });
Os.bindCallback = void 0;
var OR = uo;
function wR(e, t, r) {
  return OR.bindCallbackInternals(!1, e, t, r);
}
Os.bindCallback = wR;
var ws = {};
Object.defineProperty(ws, "__esModule", { value: !0 });
ws.bindNodeCallback = void 0;
var ER = uo;
function SR(e, t, r) {
  return ER.bindCallbackInternals(!0, e, t, r);
}
ws.bindNodeCallback = SR;
var rt = {}, so = {};
Object.defineProperty(so, "__esModule", { value: !0 });
so.argsArgArrayOrObject = void 0;
var TR = Array.isArray, PR = Object.getPrototypeOf, IR = Object.prototype, RR = Object.keys;
function AR(e) {
  if (e.length === 1) {
    var t = e[0];
    if (TR(t))
      return { args: t, keys: null };
    if (CR(t)) {
      var r = RR(t);
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
so.argsArgArrayOrObject = AR;
function CR(e) {
  return e && typeof e == "object" && PR(e) === IR;
}
var co = {};
Object.defineProperty(co, "__esModule", { value: !0 });
co.createObject = void 0;
function jR(e, t) {
  return e.reduce(function(r, n, i) {
    return r[n] = t[i], r;
  }, {});
}
co.createObject = jR;
Object.defineProperty(rt, "__esModule", { value: !0 });
rt.combineLatestInit = rt.combineLatest = void 0;
var NR = pe, $R = so, Am = yr, Cm = Be, MR = Ar, jh = De, kR = co, DR = q, UR = br;
function LR() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e[t] = arguments[t];
  var r = jh.popScheduler(e), n = jh.popResultSelector(e), i = $R.argsArgArrayOrObject(e), o = i.args, a = i.keys;
  if (o.length === 0)
    return Am.from([], r);
  var u = new NR.Observable(jm(o, r, a ? function(c) {
    return kR.createObject(a, c);
  } : Cm.identity));
  return n ? u.pipe(MR.mapOneOrManyArgs(n)) : u;
}
rt.combineLatest = LR;
function jm(e, t, r) {
  return r === void 0 && (r = Cm.identity), function(n) {
    Nh(t, function() {
      for (var i = e.length, o = new Array(i), a = i, u = i, c = function(l) {
        Nh(t, function() {
          var v = Am.from(e[l], t), y = !1;
          v.subscribe(DR.createOperatorSubscriber(n, function(O) {
            o[l] = O, y || (y = !0, u--), u || n.next(r(o.slice()));
          }, function() {
            --a || n.complete();
          }));
        }, n);
      }, s = 0; s < i; s++)
        c(s);
    }, n);
  };
}
rt.combineLatestInit = jm;
function Nh(e, t, r) {
  e ? UR.executeSchedule(r, e, t) : t();
}
var Yt = {}, Gt = {}, ht = {}, lr = {}, Dn = {};
Object.defineProperty(Dn, "__esModule", { value: !0 });
Dn.mergeInternals = void 0;
var FR = Y, BR = br, $h = q;
function xR(e, t, r, n, i, o, a, u) {
  var c = [], s = 0, l = 0, v = !1, y = function() {
    v && !c.length && !s && t.complete();
  }, O = function(T) {
    return s < n ? E(T) : c.push(T);
  }, E = function(T) {
    o && t.next(T), s++;
    var C = !1;
    FR.innerFrom(r(T, l++)).subscribe($h.createOperatorSubscriber(t, function(A) {
      i == null || i(A), o ? O(A) : t.next(A);
    }, function() {
      C = !0;
    }, void 0, function() {
      if (C)
        try {
          s--;
          for (var A = function() {
            var $ = c.shift();
            a ? BR.executeSchedule(t, a, function() {
              return E($);
            }) : E($);
          }; c.length && s < n; )
            A();
          y();
        } catch ($) {
          t.error($);
        }
    }));
  };
  return e.subscribe($h.createOperatorSubscriber(t, O, function() {
    v = !0, y();
  })), function() {
    u == null || u();
  };
}
Dn.mergeInternals = xR;
Object.defineProperty(lr, "__esModule", { value: !0 });
lr.mergeMap = void 0;
var WR = gr, VR = Y, qR = x, HR = Dn, zR = _e;
function Nm(e, t, r) {
  return r === void 0 && (r = 1 / 0), zR.isFunction(t) ? Nm(function(n, i) {
    return WR.map(function(o, a) {
      return t(n, o, i, a);
    })(VR.innerFrom(e(n, i)));
  }, r) : (typeof t == "number" && (r = t), qR.operate(function(n, i) {
    return HR.mergeInternals(n, i, e, r);
  }));
}
lr.mergeMap = Nm;
Object.defineProperty(ht, "__esModule", { value: !0 });
ht.mergeAll = void 0;
var YR = lr, GR = Be;
function KR(e) {
  return e === void 0 && (e = 1 / 0), YR.mergeMap(GR.identity, e);
}
ht.mergeAll = KR;
Object.defineProperty(Gt, "__esModule", { value: !0 });
Gt.concatAll = void 0;
var ZR = ht;
function QR() {
  return ZR.mergeAll(1);
}
Gt.concatAll = QR;
Object.defineProperty(Yt, "__esModule", { value: !0 });
Yt.concat = void 0;
var JR = Gt, XR = De, eA = yr;
function rA() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e[t] = arguments[t];
  return JR.concatAll()(eA.from(e, XR.popScheduler(e)));
}
Yt.concat = rA;
var Es = {}, Kt = {};
Object.defineProperty(Kt, "__esModule", { value: !0 });
Kt.defer = void 0;
var tA = pe, nA = Y;
function iA(e) {
  return new tA.Observable(function(t) {
    nA.innerFrom(e()).subscribe(t);
  });
}
Kt.defer = iA;
Object.defineProperty(Es, "__esModule", { value: !0 });
Es.connectable = void 0;
var oA = Me, aA = pe, uA = Kt, sA = {
  connector: function() {
    return new oA.Subject();
  },
  resetOnDisconnect: !0
};
function cA(e, t) {
  t === void 0 && (t = sA);
  var r = null, n = t.connector, i = t.resetOnDisconnect, o = i === void 0 ? !0 : i, a = n(), u = new aA.Observable(function(c) {
    return a.subscribe(c);
  });
  return u.connect = function() {
    return (!r || r.closed) && (r = uA.defer(function() {
      return e;
    }).subscribe(a), o && r.add(function() {
      return a = n();
    })), r;
  }, u;
}
Es.connectable = cA;
var Ss = {};
Object.defineProperty(Ss, "__esModule", { value: !0 });
Ss.forkJoin = void 0;
var lA = pe, fA = so, dA = Y, hA = De, vA = q, _A = Ar, pA = co;
function mA() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e[t] = arguments[t];
  var r = hA.popResultSelector(e), n = fA.argsArgArrayOrObject(e), i = n.args, o = n.keys, a = new lA.Observable(function(u) {
    var c = i.length;
    if (!c) {
      u.complete();
      return;
    }
    for (var s = new Array(c), l = c, v = c, y = function(E) {
      var T = !1;
      dA.innerFrom(i[E]).subscribe(vA.createOperatorSubscriber(u, function(C) {
        T || (T = !0, v--), s[E] = C;
      }, function() {
        return l--;
      }, void 0, function() {
        (!l || !T) && (v || u.next(o ? pA.createObject(o, s) : s), u.complete());
      }));
    }, O = 0; O < c; O++)
      y(O);
  });
  return r ? a.pipe(_A.mapOneOrManyArgs(r)) : a;
}
Ss.forkJoin = mA;
var Ts = {}, yA = d && d.__read || function(e, t) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r)
    return e;
  var n = r.call(e), i, o = [], a;
  try {
    for (; (t === void 0 || t-- > 0) && !(i = n.next()).done; )
      o.push(i.value);
  } catch (u) {
    a = { error: u };
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
var bA = Y, gA = pe, OA = lr, wA = $n, Ut = _e, EA = Ar, SA = ["addListener", "removeListener"], TA = ["addEventListener", "removeEventListener"], PA = ["on", "off"];
function lf(e, t, r, n) {
  if (Ut.isFunction(r) && (n = r, r = void 0), n)
    return lf(e, t, r).pipe(EA.mapOneOrManyArgs(n));
  var i = yA(AA(e) ? TA.map(function(u) {
    return function(c) {
      return e[u](t, c, r);
    };
  }) : IA(e) ? SA.map(Mh(e, t)) : RA(e) ? PA.map(Mh(e, t)) : [], 2), o = i[0], a = i[1];
  if (!o && wA.isArrayLike(e))
    return OA.mergeMap(function(u) {
      return lf(u, t, r);
    })(bA.innerFrom(e));
  if (!o)
    throw new TypeError("Invalid event target");
  return new gA.Observable(function(u) {
    var c = function() {
      for (var s = [], l = 0; l < arguments.length; l++)
        s[l] = arguments[l];
      return u.next(1 < s.length ? s : s[0]);
    };
    return o(c), function() {
      return a(c);
    };
  });
}
Ts.fromEvent = lf;
function Mh(e, t) {
  return function(r) {
    return function(n) {
      return e[r](t, n);
    };
  };
}
function IA(e) {
  return Ut.isFunction(e.addListener) && Ut.isFunction(e.removeListener);
}
function RA(e) {
  return Ut.isFunction(e.on) && Ut.isFunction(e.off);
}
function AA(e) {
  return Ut.isFunction(e.addEventListener) && Ut.isFunction(e.removeEventListener);
}
var Ps = {};
Object.defineProperty(Ps, "__esModule", { value: !0 });
Ps.fromEventPattern = void 0;
var CA = pe, jA = _e, NA = Ar;
function $m(e, t, r) {
  return r ? $m(e, t).pipe(NA.mapOneOrManyArgs(r)) : new CA.Observable(function(n) {
    var i = function() {
      for (var a = [], u = 0; u < arguments.length; u++)
        a[u] = arguments[u];
      return n.next(a.length === 1 ? a[0] : a);
    }, o = e(i);
    return jA.isFunction(t) ? function() {
      return t(i, o);
    } : void 0;
  });
}
Ps.fromEventPattern = $m;
var Is = {}, $A = d && d.__generator || function(e, t) {
  var r = { label: 0, sent: function() {
    if (o[0] & 1)
      throw o[1];
    return o[1];
  }, trys: [], ops: [] }, n, i, o, a;
  return a = { next: u(0), throw: u(1), return: u(2) }, typeof Symbol == "function" && (a[Symbol.iterator] = function() {
    return this;
  }), a;
  function u(s) {
    return function(l) {
      return c([s, l]);
    };
  }
  function c(s) {
    if (n)
      throw new TypeError("Generator is already executing.");
    for (; r; )
      try {
        if (n = 1, i && (o = s[0] & 2 ? i.return : s[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, s[1])).done)
          return o;
        switch (i = 0, o && (s = [s[0] & 2, o.value]), s[0]) {
          case 0:
          case 1:
            o = s;
            break;
          case 4:
            return r.label++, { value: s[1], done: !1 };
          case 5:
            r.label++, i = s[1], s = [0];
            continue;
          case 7:
            s = r.ops.pop(), r.trys.pop();
            continue;
          default:
            if (o = r.trys, !(o = o.length > 0 && o[o.length - 1]) && (s[0] === 6 || s[0] === 2)) {
              r = 0;
              continue;
            }
            if (s[0] === 3 && (!o || s[1] > o[0] && s[1] < o[3])) {
              r.label = s[1];
              break;
            }
            if (s[0] === 6 && r.label < o[1]) {
              r.label = o[1], o = s;
              break;
            }
            if (o && r.label < o[2]) {
              r.label = o[2], r.ops.push(s);
              break;
            }
            o[2] && r.ops.pop(), r.trys.pop();
            continue;
        }
        s = t.call(e, r);
      } catch (l) {
        s = [6, l], i = 0;
      } finally {
        n = o = 0;
      }
    if (s[0] & 5)
      throw s[1];
    return { value: s[0] ? s[1] : void 0, done: !0 };
  }
};
Object.defineProperty(Is, "__esModule", { value: !0 });
Is.generate = void 0;
var kh = Be, MA = zt, kA = Kt, DA = ro;
function UA(e, t, r, n, i) {
  var o, a, u, c;
  arguments.length === 1 ? (o = e, c = o.initialState, t = o.condition, r = o.iterate, a = o.resultSelector, u = a === void 0 ? kh.identity : a, i = o.scheduler) : (c = e, !n || MA.isScheduler(n) ? (u = kh.identity, i = n) : u = n);
  function s() {
    var l;
    return $A(this, function(v) {
      switch (v.label) {
        case 0:
          l = c, v.label = 1;
        case 1:
          return !t || t(l) ? [4, u(l)] : [3, 4];
        case 2:
          v.sent(), v.label = 3;
        case 3:
          return l = r(l), [3, 1];
        case 4:
          return [2];
      }
    });
  }
  return kA.defer(i ? function() {
    return DA.scheduleIterable(s(), i);
  } : s);
}
Is.generate = UA;
var Rs = {};
Object.defineProperty(Rs, "__esModule", { value: !0 });
Rs.iif = void 0;
var LA = Kt;
function FA(e, t, r) {
  return LA.defer(function() {
    return e() ? t : r;
  });
}
Rs.iif = FA;
var lo = {}, Cr = {};
Object.defineProperty(Cr, "__esModule", { value: !0 });
Cr.timer = void 0;
var BA = pe, xA = Xe, WA = zt, VA = kn;
function qA(e, t, r) {
  e === void 0 && (e = 0), r === void 0 && (r = xA.async);
  var n = -1;
  return t != null && (WA.isScheduler(t) ? r = t : n = t), new BA.Observable(function(i) {
    var o = VA.isValidDate(e) ? +e - r.now() : e;
    o < 0 && (o = 0);
    var a = 0;
    return r.schedule(function() {
      i.closed || (i.next(a++), 0 <= n ? this.schedule(void 0, n) : i.complete());
    }, o);
  });
}
Cr.timer = qA;
Object.defineProperty(lo, "__esModule", { value: !0 });
lo.interval = void 0;
var HA = Xe, zA = Cr;
function YA(e, t) {
  return e === void 0 && (e = 0), t === void 0 && (t = HA.asyncScheduler), e < 0 && (e = 0), zA.timer(e, e, t);
}
lo.interval = YA;
var As = {};
Object.defineProperty(As, "__esModule", { value: !0 });
As.merge = void 0;
var GA = ht, KA = Y, ZA = pr, Dh = De, QA = yr;
function JA() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e[t] = arguments[t];
  var r = Dh.popScheduler(e), n = Dh.popNumber(e, 1 / 0), i = e;
  return i.length ? i.length === 1 ? KA.innerFrom(i[0]) : GA.mergeAll(n)(QA.from(i, r)) : ZA.EMPTY;
}
As.merge = JA;
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
var XA = Array.isArray;
function eC(e) {
  return e.length === 1 && XA(e[0]) ? e[0] : e;
}
jr.argsOrArgArray = eC;
Object.defineProperty(fo, "__esModule", { value: !0 });
fo.onErrorResumeNext = void 0;
var rC = pe, tC = jr, nC = q, Uh = Fe, iC = Y;
function oC() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e[t] = arguments[t];
  var r = tC.argsOrArgArray(e);
  return new rC.Observable(function(n) {
    var i = 0, o = function() {
      if (i < r.length) {
        var a = void 0;
        try {
          a = iC.innerFrom(r[i++]);
        } catch {
          o();
          return;
        }
        var u = new nC.OperatorSubscriber(n, void 0, Uh.noop, Uh.noop);
        a.subscribe(u), u.add(o);
      } else
        n.complete();
    };
    o();
  });
}
fo.onErrorResumeNext = oC;
var Cs = {};
Object.defineProperty(Cs, "__esModule", { value: !0 });
Cs.pairs = void 0;
var aC = yr;
function uC(e, t) {
  return aC.from(Object.entries(e), t);
}
Cs.pairs = uC;
var js = {}, ho = {};
Object.defineProperty(ho, "__esModule", { value: !0 });
ho.not = void 0;
function sC(e, t) {
  return function(r, n) {
    return !e.call(t, r, n);
  };
}
ho.not = sC;
var Or = {};
Object.defineProperty(Or, "__esModule", { value: !0 });
Or.filter = void 0;
var cC = x, lC = q;
function fC(e, t) {
  return cC.operate(function(r, n) {
    var i = 0;
    r.subscribe(lC.createOperatorSubscriber(n, function(o) {
      return e.call(t, o, i++) && n.next(o);
    }));
  });
}
Or.filter = fC;
Object.defineProperty(js, "__esModule", { value: !0 });
js.partition = void 0;
var dC = ho, Lh = Or, Fh = Y;
function hC(e, t, r) {
  return [Lh.filter(t, r)(Fh.innerFrom(e)), Lh.filter(dC.not(t, r))(Fh.innerFrom(e))];
}
js.partition = hC;
var Lt = {};
Object.defineProperty(Lt, "__esModule", { value: !0 });
Lt.raceInit = Lt.race = void 0;
var vC = pe, Mm = Y, _C = jr, pC = q;
function mC() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e[t] = arguments[t];
  return e = _C.argsOrArgArray(e), e.length === 1 ? Mm.innerFrom(e[0]) : new vC.Observable(km(e));
}
Lt.race = mC;
function km(e) {
  return function(t) {
    for (var r = [], n = function(o) {
      r.push(Mm.innerFrom(e[o]).subscribe(pC.createOperatorSubscriber(t, function(a) {
        if (r) {
          for (var u = 0; u < r.length; u++)
            u !== o && r[u].unsubscribe();
          r = null;
        }
        t.next(a);
      })));
    }, i = 0; r && !t.closed && i < e.length; i++)
      n(i);
  };
}
Lt.raceInit = km;
var Ns = {};
Object.defineProperty(Ns, "__esModule", { value: !0 });
Ns.range = void 0;
var yC = pe, bC = pr;
function gC(e, t, r) {
  if (t == null && (t = e, e = 0), t <= 0)
    return bC.EMPTY;
  var n = t + e;
  return new yC.Observable(r ? function(i) {
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
Ns.range = gC;
var $s = {};
Object.defineProperty($s, "__esModule", { value: !0 });
$s.using = void 0;
var OC = pe, wC = Y, EC = pr;
function SC(e, t) {
  return new OC.Observable(function(r) {
    var n = e(), i = t(n), o = i ? wC.innerFrom(i) : EC.EMPTY;
    return o.subscribe(r), function() {
      n && n.unsubscribe();
    };
  });
}
$s.using = SC;
var Un = {}, TC = d && d.__read || function(e, t) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r)
    return e;
  var n = r.call(e), i, o = [], a;
  try {
    for (; (t === void 0 || t-- > 0) && !(i = n.next()).done; )
      o.push(i.value);
  } catch (u) {
    a = { error: u };
  } finally {
    try {
      i && !i.done && (r = n.return) && r.call(n);
    } finally {
      if (a)
        throw a.error;
    }
  }
  return o;
}, PC = d && d.__spreadArray || function(e, t) {
  for (var r = 0, n = t.length, i = e.length; r < n; r++, i++)
    e[i] = t[r];
  return e;
};
Object.defineProperty(Un, "__esModule", { value: !0 });
Un.zip = void 0;
var IC = pe, RC = Y, AC = jr, CC = pr, jC = q, NC = De;
function $C() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e[t] = arguments[t];
  var r = NC.popResultSelector(e), n = AC.argsOrArgArray(e);
  return n.length ? new IC.Observable(function(i) {
    var o = n.map(function() {
      return [];
    }), a = n.map(function() {
      return !1;
    });
    i.add(function() {
      o = a = null;
    });
    for (var u = function(s) {
      RC.innerFrom(n[s]).subscribe(jC.createOperatorSubscriber(i, function(l) {
        if (o[s].push(l), o.every(function(y) {
          return y.length;
        })) {
          var v = o.map(function(y) {
            return y.shift();
          });
          i.next(r ? r.apply(void 0, PC([], TC(v))) : v), o.some(function(y, O) {
            return !y.length && a[O];
          }) && i.complete();
        }
      }, function() {
        a[s] = !0, !o[s].length && i.complete();
      }));
    }, c = 0; !i.closed && c < n.length; c++)
      u(c);
    return function() {
      o = a = null;
    };
  }) : CC.EMPTY;
}
Un.zip = $C;
var Dm = {};
Object.defineProperty(Dm, "__esModule", { value: !0 });
var Ln = {};
Object.defineProperty(Ln, "__esModule", { value: !0 });
Ln.audit = void 0;
var MC = x, kC = Y, Bh = q;
function DC(e) {
  return MC.operate(function(t, r) {
    var n = !1, i = null, o = null, a = !1, u = function() {
      if (o == null || o.unsubscribe(), o = null, n) {
        n = !1;
        var s = i;
        i = null, r.next(s);
      }
      a && r.complete();
    }, c = function() {
      o = null, a && r.complete();
    };
    t.subscribe(Bh.createOperatorSubscriber(r, function(s) {
      n = !0, i = s, o || kC.innerFrom(e(s)).subscribe(o = Bh.createOperatorSubscriber(r, u, c));
    }, function() {
      a = !0, (!n || !o || o.closed) && r.complete();
    }));
  });
}
Ln.audit = DC;
var vo = {};
Object.defineProperty(vo, "__esModule", { value: !0 });
vo.auditTime = void 0;
var UC = Xe, LC = Ln, FC = Cr;
function BC(e, t) {
  return t === void 0 && (t = UC.asyncScheduler), LC.audit(function() {
    return FC.timer(e, t);
  });
}
vo.auditTime = BC;
var _o = {};
Object.defineProperty(_o, "__esModule", { value: !0 });
_o.buffer = void 0;
var xC = x, WC = Fe, xh = q, VC = Y;
function qC(e) {
  return xC.operate(function(t, r) {
    var n = [];
    return t.subscribe(xh.createOperatorSubscriber(r, function(i) {
      return n.push(i);
    }, function() {
      r.next(n), r.complete();
    })), VC.innerFrom(e).subscribe(xh.createOperatorSubscriber(r, function() {
      var i = n;
      n = [], r.next(i);
    }, WC.noop)), function() {
      n = null;
    };
  });
}
_o.buffer = qC;
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
var HC = x, zC = q, YC = mr;
function GC(e, t) {
  return t === void 0 && (t = null), t = t ?? e, HC.operate(function(r, n) {
    var i = [], o = 0;
    r.subscribe(zC.createOperatorSubscriber(n, function(a) {
      var u, c, s, l, v = null;
      o++ % t === 0 && i.push([]);
      try {
        for (var y = Sl(i), O = y.next(); !O.done; O = y.next()) {
          var E = O.value;
          E.push(a), e <= E.length && (v = v ?? [], v.push(E));
        }
      } catch (A) {
        u = { error: A };
      } finally {
        try {
          O && !O.done && (c = y.return) && c.call(y);
        } finally {
          if (u)
            throw u.error;
        }
      }
      if (v)
        try {
          for (var T = Sl(v), C = T.next(); !C.done; C = T.next()) {
            var E = C.value;
            YC.arrRemove(i, E), n.next(E);
          }
        } catch (A) {
          s = { error: A };
        } finally {
          try {
            C && !C.done && (l = T.return) && l.call(T);
          } finally {
            if (s)
              throw s.error;
          }
        }
    }, function() {
      var a, u;
      try {
        for (var c = Sl(i), s = c.next(); !s.done; s = c.next()) {
          var l = s.value;
          n.next(l);
        }
      } catch (v) {
        a = { error: v };
      } finally {
        try {
          s && !s.done && (u = c.return) && u.call(c);
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
po.bufferCount = GC;
var mo = {}, KC = d && d.__values || function(e) {
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
var ZC = Ue, QC = x, JC = q, XC = mr, ej = Xe, rj = De, Wh = br;
function tj(e) {
  for (var t, r, n = [], i = 1; i < arguments.length; i++)
    n[i - 1] = arguments[i];
  var o = (t = rj.popScheduler(n)) !== null && t !== void 0 ? t : ej.asyncScheduler, a = (r = n[0]) !== null && r !== void 0 ? r : null, u = n[1] || 1 / 0;
  return QC.operate(function(c, s) {
    var l = [], v = !1, y = function(T) {
      var C = T.buffer, A = T.subs;
      A.unsubscribe(), XC.arrRemove(l, T), s.next(C), v && O();
    }, O = function() {
      if (l) {
        var T = new ZC.Subscription();
        s.add(T);
        var C = [], A = {
          buffer: C,
          subs: T
        };
        l.push(A), Wh.executeSchedule(T, o, function() {
          return y(A);
        }, e);
      }
    };
    a !== null && a >= 0 ? Wh.executeSchedule(s, o, O, a, !0) : v = !0, O();
    var E = JC.createOperatorSubscriber(s, function(T) {
      var C, A, $ = l.slice();
      try {
        for (var U = KC($), D = U.next(); !D.done; D = U.next()) {
          var F = D.value, G = F.buffer;
          G.push(T), u <= G.length && y(F);
        }
      } catch (X) {
        C = { error: X };
      } finally {
        try {
          D && !D.done && (A = U.return) && A.call(U);
        } finally {
          if (C)
            throw C.error;
        }
      }
    }, function() {
      for (; l != null && l.length; )
        s.next(l.shift().buffer);
      E == null || E.unsubscribe(), s.complete(), s.unsubscribe();
    }, void 0, function() {
      return l = null;
    });
    c.subscribe(E);
  });
}
mo.bufferTime = tj;
var yo = {}, nj = d && d.__values || function(e) {
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
var ij = Ue, oj = x, Vh = Y, Tl = q, qh = Fe, aj = mr;
function uj(e, t) {
  return oj.operate(function(r, n) {
    var i = [];
    Vh.innerFrom(e).subscribe(Tl.createOperatorSubscriber(n, function(o) {
      var a = [];
      i.push(a);
      var u = new ij.Subscription(), c = function() {
        aj.arrRemove(i, a), n.next(a), u.unsubscribe();
      };
      u.add(Vh.innerFrom(t(o)).subscribe(Tl.createOperatorSubscriber(n, c, qh.noop)));
    }, qh.noop)), r.subscribe(Tl.createOperatorSubscriber(n, function(o) {
      var a, u;
      try {
        for (var c = nj(i), s = c.next(); !s.done; s = c.next()) {
          var l = s.value;
          l.push(o);
        }
      } catch (v) {
        a = { error: v };
      } finally {
        try {
          s && !s.done && (u = c.return) && u.call(c);
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
yo.bufferToggle = uj;
var bo = {};
Object.defineProperty(bo, "__esModule", { value: !0 });
bo.bufferWhen = void 0;
var sj = x, cj = Fe, Hh = q, lj = Y;
function fj(e) {
  return sj.operate(function(t, r) {
    var n = null, i = null, o = function() {
      i == null || i.unsubscribe();
      var a = n;
      n = [], a && r.next(a), lj.innerFrom(e()).subscribe(i = Hh.createOperatorSubscriber(r, o, cj.noop));
    };
    o(), t.subscribe(Hh.createOperatorSubscriber(r, function(a) {
      return n == null ? void 0 : n.push(a);
    }, function() {
      n && r.next(n), r.complete();
    }, void 0, function() {
      return n = i = null;
    }));
  });
}
bo.bufferWhen = fj;
var go = {};
Object.defineProperty(go, "__esModule", { value: !0 });
go.catchError = void 0;
var dj = Y, hj = q, vj = x;
function Um(e) {
  return vj.operate(function(t, r) {
    var n = null, i = !1, o;
    n = t.subscribe(hj.createOperatorSubscriber(r, void 0, void 0, function(a) {
      o = dj.innerFrom(e(a, Um(e)(t))), n ? (n.unsubscribe(), n = null, o.subscribe(r)) : i = !0;
    })), i && (n.unsubscribe(), n = null, o.subscribe(r));
  });
}
go.catchError = Um;
var Oo = {}, Fn = {}, wo = {}, Bn = {}, qr = {}, Eo = {};
Object.defineProperty(Eo, "__esModule", { value: !0 });
Eo.scanInternals = void 0;
var _j = q;
function pj(e, t, r, n, i) {
  return function(o, a) {
    var u = r, c = t, s = 0;
    o.subscribe(_j.createOperatorSubscriber(a, function(l) {
      var v = s++;
      c = u ? e(c, l, v) : (u = !0, l), n && a.next(c);
    }, i && function() {
      u && a.next(c), a.complete();
    }));
  };
}
Eo.scanInternals = pj;
Object.defineProperty(qr, "__esModule", { value: !0 });
qr.reduce = void 0;
var mj = Eo, yj = x;
function bj(e, t) {
  return yj.operate(mj.scanInternals(e, t, arguments.length >= 2, !1, !0));
}
qr.reduce = bj;
Object.defineProperty(Bn, "__esModule", { value: !0 });
Bn.toArray = void 0;
var gj = qr, Oj = x, wj = function(e, t) {
  return e.push(t), e;
};
function Ej() {
  return Oj.operate(function(e, t) {
    gj.reduce(wj, [])(e).subscribe(t);
  });
}
Bn.toArray = Ej;
Object.defineProperty(wo, "__esModule", { value: !0 });
wo.joinAllInternals = void 0;
var Sj = Be, Tj = Ar, Pj = Wr, Ij = lr, Rj = Bn;
function Aj(e, t) {
  return Pj.pipe(Rj.toArray(), Ij.mergeMap(function(r) {
    return e(r);
  }), t ? Tj.mapOneOrManyArgs(t) : Sj.identity);
}
wo.joinAllInternals = Aj;
Object.defineProperty(Fn, "__esModule", { value: !0 });
Fn.combineLatestAll = void 0;
var Cj = rt, jj = wo;
function Nj(e) {
  return jj.joinAllInternals(Cj.combineLatest, e);
}
Fn.combineLatestAll = Nj;
Object.defineProperty(Oo, "__esModule", { value: !0 });
Oo.combineAll = void 0;
var $j = Fn;
Oo.combineAll = $j.combineLatestAll;
var So = {}, To = {}, zh = d && d.__read || function(e, t) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r)
    return e;
  var n = r.call(e), i, o = [], a;
  try {
    for (; (t === void 0 || t-- > 0) && !(i = n.next()).done; )
      o.push(i.value);
  } catch (u) {
    a = { error: u };
  } finally {
    try {
      i && !i.done && (r = n.return) && r.call(n);
    } finally {
      if (a)
        throw a.error;
    }
  }
  return o;
}, Yh = d && d.__spreadArray || function(e, t) {
  for (var r = 0, n = t.length, i = e.length; r < n; r++, i++)
    e[i] = t[r];
  return e;
};
Object.defineProperty(To, "__esModule", { value: !0 });
To.combineLatest = void 0;
var Mj = rt, kj = x, Dj = jr, Uj = Ar, Lj = Wr, Fj = De;
function Lm() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e[t] = arguments[t];
  var r = Fj.popResultSelector(e);
  return r ? Lj.pipe(Lm.apply(void 0, Yh([], zh(e))), Uj.mapOneOrManyArgs(r)) : kj.operate(function(n, i) {
    Mj.combineLatestInit(Yh([n], zh(Dj.argsOrArgArray(e))))(i);
  });
}
To.combineLatest = Lm;
var Bj = d && d.__read || function(e, t) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r)
    return e;
  var n = r.call(e), i, o = [], a;
  try {
    for (; (t === void 0 || t-- > 0) && !(i = n.next()).done; )
      o.push(i.value);
  } catch (u) {
    a = { error: u };
  } finally {
    try {
      i && !i.done && (r = n.return) && r.call(n);
    } finally {
      if (a)
        throw a.error;
    }
  }
  return o;
}, xj = d && d.__spreadArray || function(e, t) {
  for (var r = 0, n = t.length, i = e.length; r < n; r++, i++)
    e[i] = t[r];
  return e;
};
Object.defineProperty(So, "__esModule", { value: !0 });
So.combineLatestWith = void 0;
var Wj = To;
function Vj() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e[t] = arguments[t];
  return Wj.combineLatest.apply(void 0, xj([], Bj(e)));
}
So.combineLatestWith = Vj;
var xn = {};
Object.defineProperty(xn, "__esModule", { value: !0 });
xn.concatMap = void 0;
var Gh = lr, qj = _e;
function Hj(e, t) {
  return qj.isFunction(t) ? Gh.mergeMap(e, t, 1) : Gh.mergeMap(e, 1);
}
xn.concatMap = Hj;
var Po = {};
Object.defineProperty(Po, "__esModule", { value: !0 });
Po.concatMapTo = void 0;
var Kh = xn, zj = _e;
function Yj(e, t) {
  return zj.isFunction(t) ? Kh.concatMap(function() {
    return e;
  }, t) : Kh.concatMap(function() {
    return e;
  });
}
Po.concatMapTo = Yj;
var Io = {}, Ro = {}, Gj = d && d.__read || function(e, t) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r)
    return e;
  var n = r.call(e), i, o = [], a;
  try {
    for (; (t === void 0 || t-- > 0) && !(i = n.next()).done; )
      o.push(i.value);
  } catch (u) {
    a = { error: u };
  } finally {
    try {
      i && !i.done && (r = n.return) && r.call(n);
    } finally {
      if (a)
        throw a.error;
    }
  }
  return o;
}, Kj = d && d.__spreadArray || function(e, t) {
  for (var r = 0, n = t.length, i = e.length; r < n; r++, i++)
    e[i] = t[r];
  return e;
};
Object.defineProperty(Ro, "__esModule", { value: !0 });
Ro.concat = void 0;
var Zj = x, Qj = Gt, Jj = De, Xj = yr;
function eN() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e[t] = arguments[t];
  var r = Jj.popScheduler(e);
  return Zj.operate(function(n, i) {
    Qj.concatAll()(Xj.from(Kj([n], Gj(e)), r)).subscribe(i);
  });
}
Ro.concat = eN;
var rN = d && d.__read || function(e, t) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r)
    return e;
  var n = r.call(e), i, o = [], a;
  try {
    for (; (t === void 0 || t-- > 0) && !(i = n.next()).done; )
      o.push(i.value);
  } catch (u) {
    a = { error: u };
  } finally {
    try {
      i && !i.done && (r = n.return) && r.call(n);
    } finally {
      if (a)
        throw a.error;
    }
  }
  return o;
}, tN = d && d.__spreadArray || function(e, t) {
  for (var r = 0, n = t.length, i = e.length; r < n; r++, i++)
    e[i] = t[r];
  return e;
};
Object.defineProperty(Io, "__esModule", { value: !0 });
Io.concatWith = void 0;
var nN = Ro;
function iN() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e[t] = arguments[t];
  return nN.concat.apply(void 0, tN([], rN(e)));
}
Io.concatWith = iN;
var Zt = {}, Ms = {};
Object.defineProperty(Ms, "__esModule", { value: !0 });
Ms.fromSubscribable = void 0;
var oN = pe;
function aN(e) {
  return new oN.Observable(function(t) {
    return e.subscribe(t);
  });
}
Ms.fromSubscribable = aN;
Object.defineProperty(Zt, "__esModule", { value: !0 });
Zt.connect = void 0;
var uN = Me, sN = Y, cN = x, lN = Ms, fN = {
  connector: function() {
    return new uN.Subject();
  }
};
function dN(e, t) {
  t === void 0 && (t = fN);
  var r = t.connector;
  return cN.operate(function(n, i) {
    var o = r();
    sN.innerFrom(e(lN.fromSubscribable(o))).subscribe(i), i.add(n.subscribe(o));
  });
}
Zt.connect = dN;
var Ao = {};
Object.defineProperty(Ao, "__esModule", { value: !0 });
Ao.count = void 0;
var hN = qr;
function vN(e) {
  return hN.reduce(function(t, r, n) {
    return !e || e(r, n) ? t + 1 : t;
  }, 0);
}
Ao.count = vN;
var Co = {};
Object.defineProperty(Co, "__esModule", { value: !0 });
Co.debounce = void 0;
var _N = x, pN = Fe, Zh = q, mN = Y;
function yN(e) {
  return _N.operate(function(t, r) {
    var n = !1, i = null, o = null, a = function() {
      if (o == null || o.unsubscribe(), o = null, n) {
        n = !1;
        var u = i;
        i = null, r.next(u);
      }
    };
    t.subscribe(Zh.createOperatorSubscriber(r, function(u) {
      o == null || o.unsubscribe(), n = !0, i = u, o = Zh.createOperatorSubscriber(r, a, pN.noop), mN.innerFrom(e(u)).subscribe(o);
    }, function() {
      a(), r.complete();
    }, void 0, function() {
      i = o = null;
    }));
  });
}
Co.debounce = yN;
var jo = {};
Object.defineProperty(jo, "__esModule", { value: !0 });
jo.debounceTime = void 0;
var bN = Xe, gN = x, ON = q;
function wN(e, t) {
  return t === void 0 && (t = bN.asyncScheduler), gN.operate(function(r, n) {
    var i = null, o = null, a = null, u = function() {
      if (i) {
        i.unsubscribe(), i = null;
        var s = o;
        o = null, n.next(s);
      }
    };
    function c() {
      var s = a + e, l = t.now();
      if (l < s) {
        i = this.schedule(void 0, s - l), n.add(i);
        return;
      }
      u();
    }
    r.subscribe(ON.createOperatorSubscriber(n, function(s) {
      o = s, a = t.now(), i || (i = t.schedule(c, e), n.add(i));
    }, function() {
      u(), n.complete();
    }, void 0, function() {
      o = i = null;
    }));
  });
}
jo.debounceTime = wN;
var vt = {};
Object.defineProperty(vt, "__esModule", { value: !0 });
vt.defaultIfEmpty = void 0;
var EN = x, SN = q;
function TN(e) {
  return EN.operate(function(t, r) {
    var n = !1;
    t.subscribe(SN.createOperatorSubscriber(r, function(i) {
      n = !0, r.next(i);
    }, function() {
      n || r.next(e), r.complete();
    }));
  });
}
vt.defaultIfEmpty = TN;
var No = {}, Wn = {}, _t = {};
Object.defineProperty(_t, "__esModule", { value: !0 });
_t.take = void 0;
var PN = pr, IN = x, RN = q;
function AN(e) {
  return e <= 0 ? function() {
    return PN.EMPTY;
  } : IN.operate(function(t, r) {
    var n = 0;
    t.subscribe(RN.createOperatorSubscriber(r, function(i) {
      ++n <= e && (r.next(i), e <= n && r.complete());
    }));
  });
}
_t.take = AN;
var Vn = {};
Object.defineProperty(Vn, "__esModule", { value: !0 });
Vn.ignoreElements = void 0;
var CN = x, jN = q, NN = Fe;
function $N() {
  return CN.operate(function(e, t) {
    e.subscribe(jN.createOperatorSubscriber(t, NN.noop));
  });
}
Vn.ignoreElements = $N;
var qn = {};
Object.defineProperty(qn, "__esModule", { value: !0 });
qn.mapTo = void 0;
var MN = gr;
function kN(e) {
  return MN.map(function() {
    return e;
  });
}
qn.mapTo = kN;
Object.defineProperty(Wn, "__esModule", { value: !0 });
Wn.delayWhen = void 0;
var DN = Yt, Qh = _t, UN = Vn, LN = qn, FN = lr, BN = Y;
function Fm(e, t) {
  return t ? function(r) {
    return DN.concat(t.pipe(Qh.take(1), UN.ignoreElements()), r.pipe(Fm(e)));
  } : FN.mergeMap(function(r, n) {
    return BN.innerFrom(e(r, n)).pipe(Qh.take(1), LN.mapTo(r));
  });
}
Wn.delayWhen = Fm;
Object.defineProperty(No, "__esModule", { value: !0 });
No.delay = void 0;
var xN = Xe, WN = Wn, VN = Cr;
function qN(e, t) {
  t === void 0 && (t = xN.asyncScheduler);
  var r = VN.timer(e, t);
  return WN.delayWhen(function() {
    return r;
  });
}
No.delay = qN;
var $o = {};
Object.defineProperty($o, "__esModule", { value: !0 });
$o.dematerialize = void 0;
var HN = hs, zN = x, YN = q;
function GN() {
  return zN.operate(function(e, t) {
    e.subscribe(YN.createOperatorSubscriber(t, function(r) {
      return HN.observeNotification(r, t);
    }));
  });
}
$o.dematerialize = GN;
var Mo = {};
Object.defineProperty(Mo, "__esModule", { value: !0 });
Mo.distinct = void 0;
var KN = x, Jh = q, ZN = Fe, QN = Y;
function JN(e, t) {
  return KN.operate(function(r, n) {
    var i = /* @__PURE__ */ new Set();
    r.subscribe(Jh.createOperatorSubscriber(n, function(o) {
      var a = e ? e(o) : o;
      i.has(a) || (i.add(a), n.next(o));
    })), t && QN.innerFrom(t).subscribe(Jh.createOperatorSubscriber(n, function() {
      return i.clear();
    }, ZN.noop));
  });
}
Mo.distinct = JN;
var Hn = {};
Object.defineProperty(Hn, "__esModule", { value: !0 });
Hn.distinctUntilChanged = void 0;
var XN = Be, e$ = x, r$ = q;
function t$(e, t) {
  return t === void 0 && (t = XN.identity), e = e ?? n$, e$.operate(function(r, n) {
    var i, o = !0;
    r.subscribe(r$.createOperatorSubscriber(n, function(a) {
      var u = t(a);
      (o || !e(i, u)) && (o = !1, i = u, n.next(a));
    }));
  });
}
Hn.distinctUntilChanged = t$;
function n$(e, t) {
  return e === t;
}
var ko = {};
Object.defineProperty(ko, "__esModule", { value: !0 });
ko.distinctUntilKeyChanged = void 0;
var i$ = Hn;
function o$(e, t) {
  return i$.distinctUntilChanged(function(r, n) {
    return t ? t(r[e], n[e]) : r[e] === n[e];
  });
}
ko.distinctUntilKeyChanged = o$;
var Do = {}, pt = {};
Object.defineProperty(pt, "__esModule", { value: !0 });
pt.throwIfEmpty = void 0;
var a$ = Rr, u$ = x, s$ = q;
function c$(e) {
  return e === void 0 && (e = l$), u$.operate(function(t, r) {
    var n = !1;
    t.subscribe(s$.createOperatorSubscriber(r, function(i) {
      n = !0, r.next(i);
    }, function() {
      return n ? r.complete() : r.error(e());
    }));
  });
}
pt.throwIfEmpty = c$;
function l$() {
  return new a$.EmptyError();
}
Object.defineProperty(Do, "__esModule", { value: !0 });
Do.elementAt = void 0;
var Xh = io, f$ = Or, d$ = pt, h$ = vt, v$ = _t;
function _$(e, t) {
  if (e < 0)
    throw new Xh.ArgumentOutOfRangeError();
  var r = arguments.length >= 2;
  return function(n) {
    return n.pipe(f$.filter(function(i, o) {
      return o === e;
    }), v$.take(1), r ? h$.defaultIfEmpty(t) : d$.throwIfEmpty(function() {
      return new Xh.ArgumentOutOfRangeError();
    }));
  };
}
Do.elementAt = _$;
var Uo = {}, p$ = d && d.__read || function(e, t) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r)
    return e;
  var n = r.call(e), i, o = [], a;
  try {
    for (; (t === void 0 || t-- > 0) && !(i = n.next()).done; )
      o.push(i.value);
  } catch (u) {
    a = { error: u };
  } finally {
    try {
      i && !i.done && (r = n.return) && r.call(n);
    } finally {
      if (a)
        throw a.error;
    }
  }
  return o;
}, m$ = d && d.__spreadArray || function(e, t) {
  for (var r = 0, n = t.length, i = e.length; r < n; r++, i++)
    e[i] = t[r];
  return e;
};
Object.defineProperty(Uo, "__esModule", { value: !0 });
Uo.endWith = void 0;
var y$ = Yt, b$ = Nn;
function g$() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e[t] = arguments[t];
  return function(r) {
    return y$.concat(r, b$.of.apply(void 0, m$([], p$(e))));
  };
}
Uo.endWith = g$;
var Lo = {};
Object.defineProperty(Lo, "__esModule", { value: !0 });
Lo.every = void 0;
var O$ = x, w$ = q;
function E$(e, t) {
  return O$.operate(function(r, n) {
    var i = 0;
    r.subscribe(w$.createOperatorSubscriber(n, function(o) {
      e.call(t, o, i++, r) || (n.next(!1), n.complete());
    }, function() {
      n.next(!0), n.complete();
    }));
  });
}
Lo.every = E$;
var Fo = {}, zn = {}, Yn = {};
Object.defineProperty(Yn, "__esModule", { value: !0 });
Yn.exhaustMap = void 0;
var S$ = gr, ev = Y, T$ = x, rv = q;
function Bm(e, t) {
  return t ? function(r) {
    return r.pipe(Bm(function(n, i) {
      return ev.innerFrom(e(n, i)).pipe(S$.map(function(o, a) {
        return t(n, o, i, a);
      }));
    }));
  } : T$.operate(function(r, n) {
    var i = 0, o = null, a = !1;
    r.subscribe(rv.createOperatorSubscriber(n, function(u) {
      o || (o = rv.createOperatorSubscriber(n, void 0, function() {
        o = null, a && n.complete();
      }), ev.innerFrom(e(u, i++)).subscribe(o));
    }, function() {
      a = !0, !o && n.complete();
    }));
  });
}
Yn.exhaustMap = Bm;
Object.defineProperty(zn, "__esModule", { value: !0 });
zn.exhaustAll = void 0;
var P$ = Yn, I$ = Be;
function R$() {
  return P$.exhaustMap(I$.identity);
}
zn.exhaustAll = R$;
Object.defineProperty(Fo, "__esModule", { value: !0 });
Fo.exhaust = void 0;
var A$ = zn;
Fo.exhaust = A$.exhaustAll;
var Bo = {};
Object.defineProperty(Bo, "__esModule", { value: !0 });
Bo.expand = void 0;
var C$ = x, j$ = Dn;
function N$(e, t, r) {
  return t === void 0 && (t = 1 / 0), t = (t || 0) < 1 ? 1 / 0 : t, C$.operate(function(n, i) {
    return j$.mergeInternals(n, i, e, t, void 0, !0, r);
  });
}
Bo.expand = N$;
var xo = {};
Object.defineProperty(xo, "__esModule", { value: !0 });
xo.finalize = void 0;
var $$ = x;
function M$(e) {
  return $$.operate(function(t, r) {
    try {
      t.subscribe(r);
    } finally {
      r.add(e);
    }
  });
}
xo.finalize = M$;
var tt = {};
Object.defineProperty(tt, "__esModule", { value: !0 });
tt.createFind = tt.find = void 0;
var k$ = x, D$ = q;
function U$(e, t) {
  return k$.operate(xm(e, t, "value"));
}
tt.find = U$;
function xm(e, t, r) {
  var n = r === "index";
  return function(i, o) {
    var a = 0;
    i.subscribe(D$.createOperatorSubscriber(o, function(u) {
      var c = a++;
      e.call(t, u, c, i) && (o.next(n ? c : u), o.complete());
    }, function() {
      o.next(n ? -1 : void 0), o.complete();
    }));
  };
}
tt.createFind = xm;
var Wo = {};
Object.defineProperty(Wo, "__esModule", { value: !0 });
Wo.findIndex = void 0;
var L$ = x, F$ = tt;
function B$(e, t) {
  return L$.operate(F$.createFind(e, t, "index"));
}
Wo.findIndex = B$;
var Vo = {};
Object.defineProperty(Vo, "__esModule", { value: !0 });
Vo.first = void 0;
var x$ = Rr, W$ = Or, V$ = _t, q$ = vt, H$ = pt, z$ = Be;
function Y$(e, t) {
  var r = arguments.length >= 2;
  return function(n) {
    return n.pipe(e ? W$.filter(function(i, o) {
      return e(i, o, n);
    }) : z$.identity, V$.take(1), r ? q$.defaultIfEmpty(t) : H$.throwIfEmpty(function() {
      return new x$.EmptyError();
    }));
  };
}
Vo.first = Y$;
var qo = {};
Object.defineProperty(qo, "__esModule", { value: !0 });
qo.groupBy = void 0;
var G$ = pe, K$ = Y, Z$ = Me, Q$ = x, tv = q;
function J$(e, t, r, n) {
  return Q$.operate(function(i, o) {
    var a;
    !t || typeof t == "function" ? a = t : (r = t.duration, a = t.element, n = t.connector);
    var u = /* @__PURE__ */ new Map(), c = function(E) {
      u.forEach(E), E(o);
    }, s = function(E) {
      return c(function(T) {
        return T.error(E);
      });
    }, l = 0, v = !1, y = new tv.OperatorSubscriber(o, function(E) {
      try {
        var T = e(E), C = u.get(T);
        if (!C) {
          u.set(T, C = n ? n() : new Z$.Subject());
          var A = O(T, C);
          if (o.next(A), r) {
            var $ = tv.createOperatorSubscriber(C, function() {
              C.complete(), $ == null || $.unsubscribe();
            }, void 0, void 0, function() {
              return u.delete(T);
            });
            y.add(K$.innerFrom(r(A)).subscribe($));
          }
        }
        C.next(a ? a(E) : E);
      } catch (U) {
        s(U);
      }
    }, function() {
      return c(function(E) {
        return E.complete();
      });
    }, s, function() {
      return u.clear();
    }, function() {
      return v = !0, l === 0;
    });
    i.subscribe(y);
    function O(E, T) {
      var C = new G$.Observable(function(A) {
        l++;
        var $ = T.subscribe(A);
        return function() {
          $.unsubscribe(), --l === 0 && v && y.unsubscribe();
        };
      });
      return C.key = E, C;
    }
  });
}
qo.groupBy = J$;
var Ho = {};
Object.defineProperty(Ho, "__esModule", { value: !0 });
Ho.isEmpty = void 0;
var X$ = x, eM = q;
function rM() {
  return X$.operate(function(e, t) {
    e.subscribe(eM.createOperatorSubscriber(t, function() {
      t.next(!1), t.complete();
    }, function() {
      t.next(!0), t.complete();
    }));
  });
}
Ho.isEmpty = rM;
var zo = {}, Gn = {}, tM = d && d.__values || function(e) {
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
Object.defineProperty(Gn, "__esModule", { value: !0 });
Gn.takeLast = void 0;
var nM = pr, iM = x, oM = q;
function aM(e) {
  return e <= 0 ? function() {
    return nM.EMPTY;
  } : iM.operate(function(t, r) {
    var n = [];
    t.subscribe(oM.createOperatorSubscriber(r, function(i) {
      n.push(i), e < n.length && n.shift();
    }, function() {
      var i, o;
      try {
        for (var a = tM(n), u = a.next(); !u.done; u = a.next()) {
          var c = u.value;
          r.next(c);
        }
      } catch (s) {
        i = { error: s };
      } finally {
        try {
          u && !u.done && (o = a.return) && o.call(a);
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
Gn.takeLast = aM;
Object.defineProperty(zo, "__esModule", { value: !0 });
zo.last = void 0;
var uM = Rr, sM = Or, cM = Gn, lM = pt, fM = vt, dM = Be;
function hM(e, t) {
  var r = arguments.length >= 2;
  return function(n) {
    return n.pipe(e ? sM.filter(function(i, o) {
      return e(i, o, n);
    }) : dM.identity, cM.takeLast(1), r ? fM.defaultIfEmpty(t) : lM.throwIfEmpty(function() {
      return new uM.EmptyError();
    }));
  };
}
zo.last = hM;
var Yo = {};
Object.defineProperty(Yo, "__esModule", { value: !0 });
Yo.materialize = void 0;
var Pl = hs, vM = x, _M = q;
function pM() {
  return vM.operate(function(e, t) {
    e.subscribe(_M.createOperatorSubscriber(t, function(r) {
      t.next(Pl.Notification.createNext(r));
    }, function() {
      t.next(Pl.Notification.createComplete()), t.complete();
    }, function(r) {
      t.next(Pl.Notification.createError(r)), t.complete();
    }));
  });
}
Yo.materialize = pM;
var Go = {};
Object.defineProperty(Go, "__esModule", { value: !0 });
Go.max = void 0;
var mM = qr, yM = _e;
function bM(e) {
  return mM.reduce(yM.isFunction(e) ? function(t, r) {
    return e(t, r) > 0 ? t : r;
  } : function(t, r) {
    return t > r ? t : r;
  });
}
Go.max = bM;
var Ko = {};
Object.defineProperty(Ko, "__esModule", { value: !0 });
Ko.flatMap = void 0;
var gM = lr;
Ko.flatMap = gM.mergeMap;
var Zo = {};
Object.defineProperty(Zo, "__esModule", { value: !0 });
Zo.mergeMapTo = void 0;
var nv = lr, OM = _e;
function wM(e, t, r) {
  return r === void 0 && (r = 1 / 0), OM.isFunction(t) ? nv.mergeMap(function() {
    return e;
  }, t, r) : (typeof t == "number" && (r = t), nv.mergeMap(function() {
    return e;
  }, r));
}
Zo.mergeMapTo = wM;
var Qo = {};
Object.defineProperty(Qo, "__esModule", { value: !0 });
Qo.mergeScan = void 0;
var EM = x, SM = Dn;
function TM(e, t, r) {
  return r === void 0 && (r = 1 / 0), EM.operate(function(n, i) {
    var o = t;
    return SM.mergeInternals(n, i, function(a, u) {
      return e(o, a, u);
    }, r, function(a) {
      o = a;
    }, !1, void 0, function() {
      return o = null;
    });
  });
}
Qo.mergeScan = TM;
var Jo = {}, Xo = {}, PM = d && d.__read || function(e, t) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r)
    return e;
  var n = r.call(e), i, o = [], a;
  try {
    for (; (t === void 0 || t-- > 0) && !(i = n.next()).done; )
      o.push(i.value);
  } catch (u) {
    a = { error: u };
  } finally {
    try {
      i && !i.done && (r = n.return) && r.call(n);
    } finally {
      if (a)
        throw a.error;
    }
  }
  return o;
}, IM = d && d.__spreadArray || function(e, t) {
  for (var r = 0, n = t.length, i = e.length; r < n; r++, i++)
    e[i] = t[r];
  return e;
};
Object.defineProperty(Xo, "__esModule", { value: !0 });
Xo.merge = void 0;
var RM = x, AM = jr, CM = ht, iv = De, jM = yr;
function NM() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e[t] = arguments[t];
  var r = iv.popScheduler(e), n = iv.popNumber(e, 1 / 0);
  return e = AM.argsOrArgArray(e), RM.operate(function(i, o) {
    CM.mergeAll(n)(jM.from(IM([i], PM(e)), r)).subscribe(o);
  });
}
Xo.merge = NM;
var $M = d && d.__read || function(e, t) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r)
    return e;
  var n = r.call(e), i, o = [], a;
  try {
    for (; (t === void 0 || t-- > 0) && !(i = n.next()).done; )
      o.push(i.value);
  } catch (u) {
    a = { error: u };
  } finally {
    try {
      i && !i.done && (r = n.return) && r.call(n);
    } finally {
      if (a)
        throw a.error;
    }
  }
  return o;
}, MM = d && d.__spreadArray || function(e, t) {
  for (var r = 0, n = t.length, i = e.length; r < n; r++, i++)
    e[i] = t[r];
  return e;
};
Object.defineProperty(Jo, "__esModule", { value: !0 });
Jo.mergeWith = void 0;
var kM = Xo;
function DM() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e[t] = arguments[t];
  return kM.merge.apply(void 0, MM([], $M(e)));
}
Jo.mergeWith = DM;
var ea = {};
Object.defineProperty(ea, "__esModule", { value: !0 });
ea.min = void 0;
var UM = qr, LM = _e;
function FM(e) {
  return UM.reduce(LM.isFunction(e) ? function(t, r) {
    return e(t, r) < 0 ? t : r;
  } : function(t, r) {
    return t < r ? t : r;
  });
}
ea.min = FM;
var Qt = {};
Object.defineProperty(Qt, "__esModule", { value: !0 });
Qt.multicast = void 0;
var BM = Ht, ov = _e, xM = Zt;
function WM(e, t) {
  var r = ov.isFunction(e) ? e : function() {
    return e;
  };
  return ov.isFunction(t) ? xM.connect(t, {
    connector: r
  }) : function(n) {
    return new BM.ConnectableObservable(n, r);
  };
}
Qt.multicast = WM;
var Ft = {}, VM = d && d.__read || function(e, t) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r)
    return e;
  var n = r.call(e), i, o = [], a;
  try {
    for (; (t === void 0 || t-- > 0) && !(i = n.next()).done; )
      o.push(i.value);
  } catch (u) {
    a = { error: u };
  } finally {
    try {
      i && !i.done && (r = n.return) && r.call(n);
    } finally {
      if (a)
        throw a.error;
    }
  }
  return o;
}, qM = d && d.__spreadArray || function(e, t) {
  for (var r = 0, n = t.length, i = e.length; r < n; r++, i++)
    e[i] = t[r];
  return e;
};
Object.defineProperty(Ft, "__esModule", { value: !0 });
Ft.onErrorResumeNext = Ft.onErrorResumeNextWith = void 0;
var HM = jr, zM = fo;
function Wm() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e[t] = arguments[t];
  var r = HM.argsOrArgArray(e);
  return function(n) {
    return zM.onErrorResumeNext.apply(void 0, qM([n], VM(r)));
  };
}
Ft.onErrorResumeNextWith = Wm;
Ft.onErrorResumeNext = Wm;
var ra = {};
Object.defineProperty(ra, "__esModule", { value: !0 });
ra.pairwise = void 0;
var YM = x, GM = q;
function KM() {
  return YM.operate(function(e, t) {
    var r, n = !1;
    e.subscribe(GM.createOperatorSubscriber(t, function(i) {
      var o = r;
      r = i, n && t.next([o, i]), n = !0;
    }));
  });
}
ra.pairwise = KM;
var ta = {};
Object.defineProperty(ta, "__esModule", { value: !0 });
ta.pluck = void 0;
var ZM = gr;
function QM() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e[t] = arguments[t];
  var r = e.length;
  if (r === 0)
    throw new Error("list of properties cannot be empty.");
  return ZM.map(function(n) {
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
ta.pluck = QM;
var na = {};
Object.defineProperty(na, "__esModule", { value: !0 });
na.publish = void 0;
var JM = Me, XM = Qt, ek = Zt;
function rk(e) {
  return e ? function(t) {
    return ek.connect(e)(t);
  } : function(t) {
    return XM.multicast(new JM.Subject())(t);
  };
}
na.publish = rk;
var ia = {};
Object.defineProperty(ia, "__esModule", { value: !0 });
ia.publishBehavior = void 0;
var tk = Yi, nk = Ht;
function ik(e) {
  return function(t) {
    var r = new tk.BehaviorSubject(e);
    return new nk.ConnectableObservable(t, function() {
      return r;
    });
  };
}
ia.publishBehavior = ik;
var oa = {};
Object.defineProperty(oa, "__esModule", { value: !0 });
oa.publishLast = void 0;
var ok = jn, ak = Ht;
function uk() {
  return function(e) {
    var t = new ok.AsyncSubject();
    return new ak.ConnectableObservable(e, function() {
      return t;
    });
  };
}
oa.publishLast = uk;
var aa = {};
Object.defineProperty(aa, "__esModule", { value: !0 });
aa.publishReplay = void 0;
var sk = Cn, ck = Qt, av = _e;
function lk(e, t, r, n) {
  r && !av.isFunction(r) && (n = r);
  var i = av.isFunction(r) ? r : void 0;
  return function(o) {
    return ck.multicast(new sk.ReplaySubject(e, t, n), i)(o);
  };
}
aa.publishReplay = lk;
var Kn = {}, fk = d && d.__read || function(e, t) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r)
    return e;
  var n = r.call(e), i, o = [], a;
  try {
    for (; (t === void 0 || t-- > 0) && !(i = n.next()).done; )
      o.push(i.value);
  } catch (u) {
    a = { error: u };
  } finally {
    try {
      i && !i.done && (r = n.return) && r.call(n);
    } finally {
      if (a)
        throw a.error;
    }
  }
  return o;
}, dk = d && d.__spreadArray || function(e, t) {
  for (var r = 0, n = t.length, i = e.length; r < n; r++, i++)
    e[i] = t[r];
  return e;
};
Object.defineProperty(Kn, "__esModule", { value: !0 });
Kn.raceWith = void 0;
var hk = Lt, vk = x, _k = Be;
function pk() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e[t] = arguments[t];
  return e.length ? vk.operate(function(r, n) {
    hk.raceInit(dk([r], fk(e)))(n);
  }) : _k.identity;
}
Kn.raceWith = pk;
var ua = {};
Object.defineProperty(ua, "__esModule", { value: !0 });
ua.repeat = void 0;
var mk = pr, yk = x, uv = q, bk = Y, gk = Cr;
function Ok(e) {
  var t, r = 1 / 0, n;
  return e != null && (typeof e == "object" ? (t = e.count, r = t === void 0 ? 1 / 0 : t, n = e.delay) : r = e), r <= 0 ? function() {
    return mk.EMPTY;
  } : yk.operate(function(i, o) {
    var a = 0, u, c = function() {
      if (u == null || u.unsubscribe(), u = null, n != null) {
        var l = typeof n == "number" ? gk.timer(n) : bk.innerFrom(n(a)), v = uv.createOperatorSubscriber(o, function() {
          v.unsubscribe(), s();
        });
        l.subscribe(v);
      } else
        s();
    }, s = function() {
      var l = !1;
      u = i.subscribe(uv.createOperatorSubscriber(o, void 0, function() {
        ++a < r ? u ? c() : l = !0 : o.complete();
      })), l && c();
    };
    s();
  });
}
ua.repeat = Ok;
var sa = {};
Object.defineProperty(sa, "__esModule", { value: !0 });
sa.repeatWhen = void 0;
var wk = Y, Ek = Me, Sk = x, sv = q;
function Tk(e) {
  return Sk.operate(function(t, r) {
    var n, i = !1, o, a = !1, u = !1, c = function() {
      return u && a && (r.complete(), !0);
    }, s = function() {
      return o || (o = new Ek.Subject(), wk.innerFrom(e(o)).subscribe(sv.createOperatorSubscriber(r, function() {
        n ? l() : i = !0;
      }, function() {
        a = !0, c();
      }))), o;
    }, l = function() {
      u = !1, n = t.subscribe(sv.createOperatorSubscriber(r, void 0, function() {
        u = !0, !c() && s().next();
      })), i && (n.unsubscribe(), n = null, i = !1, l());
    };
    l();
  });
}
sa.repeatWhen = Tk;
var ca = {};
Object.defineProperty(ca, "__esModule", { value: !0 });
ca.retry = void 0;
var Pk = x, cv = q, Ik = Be, Rk = Cr, Ak = Y;
function Ck(e) {
  e === void 0 && (e = 1 / 0);
  var t;
  e && typeof e == "object" ? t = e : t = {
    count: e
  };
  var r = t.count, n = r === void 0 ? 1 / 0 : r, i = t.delay, o = t.resetOnSuccess, a = o === void 0 ? !1 : o;
  return n <= 0 ? Ik.identity : Pk.operate(function(u, c) {
    var s = 0, l, v = function() {
      var y = !1;
      l = u.subscribe(cv.createOperatorSubscriber(c, function(O) {
        a && (s = 0), c.next(O);
      }, void 0, function(O) {
        if (s++ < n) {
          var E = function() {
            l ? (l.unsubscribe(), l = null, v()) : y = !0;
          };
          if (i != null) {
            var T = typeof i == "number" ? Rk.timer(i) : Ak.innerFrom(i(O, s)), C = cv.createOperatorSubscriber(c, function() {
              C.unsubscribe(), E();
            }, function() {
              c.complete();
            });
            T.subscribe(C);
          } else
            E();
        } else
          c.error(O);
      })), y && (l.unsubscribe(), l = null, v());
    };
    v();
  });
}
ca.retry = Ck;
var la = {};
Object.defineProperty(la, "__esModule", { value: !0 });
la.retryWhen = void 0;
var jk = Y, Nk = Me, $k = x, lv = q;
function Mk(e) {
  return $k.operate(function(t, r) {
    var n, i = !1, o, a = function() {
      n = t.subscribe(lv.createOperatorSubscriber(r, void 0, void 0, function(u) {
        o || (o = new Nk.Subject(), jk.innerFrom(e(o)).subscribe(lv.createOperatorSubscriber(r, function() {
          return n ? a() : i = !0;
        }))), o && o.next(u);
      })), i && (n.unsubscribe(), n = null, i = !1, a());
    };
    a();
  });
}
la.retryWhen = Mk;
var Zn = {};
Object.defineProperty(Zn, "__esModule", { value: !0 });
Zn.sample = void 0;
var kk = Y, Dk = x, Uk = Fe, fv = q;
function Lk(e) {
  return Dk.operate(function(t, r) {
    var n = !1, i = null;
    t.subscribe(fv.createOperatorSubscriber(r, function(o) {
      n = !0, i = o;
    })), kk.innerFrom(e).subscribe(fv.createOperatorSubscriber(r, function() {
      if (n) {
        n = !1;
        var o = i;
        i = null, r.next(o);
      }
    }, Uk.noop));
  });
}
Zn.sample = Lk;
var fa = {};
Object.defineProperty(fa, "__esModule", { value: !0 });
fa.sampleTime = void 0;
var Fk = Xe, Bk = Zn, xk = lo;
function Wk(e, t) {
  return t === void 0 && (t = Fk.asyncScheduler), Bk.sample(xk.interval(e, t));
}
fa.sampleTime = Wk;
var da = {};
Object.defineProperty(da, "__esModule", { value: !0 });
da.scan = void 0;
var Vk = x, qk = Eo;
function Hk(e, t) {
  return Vk.operate(qk.scanInternals(e, t, arguments.length >= 2, !0));
}
da.scan = Hk;
var ha = {};
Object.defineProperty(ha, "__esModule", { value: !0 });
ha.sequenceEqual = void 0;
var zk = x, Yk = q, Gk = Y;
function Kk(e, t) {
  return t === void 0 && (t = function(r, n) {
    return r === n;
  }), zk.operate(function(r, n) {
    var i = dv(), o = dv(), a = function(c) {
      n.next(c), n.complete();
    }, u = function(c, s) {
      var l = Yk.createOperatorSubscriber(n, function(v) {
        var y = s.buffer, O = s.complete;
        y.length === 0 ? O ? a(!1) : c.buffer.push(v) : !t(v, y.shift()) && a(!1);
      }, function() {
        c.complete = !0;
        var v = s.complete, y = s.buffer;
        v && a(y.length === 0), l == null || l.unsubscribe();
      });
      return l;
    };
    r.subscribe(u(i, o)), Gk.innerFrom(e).subscribe(u(o, i));
  });
}
ha.sequenceEqual = Kk;
function dv() {
  return {
    buffer: [],
    complete: !1
  };
}
var Qn = {}, Zk = d && d.__read || function(e, t) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r)
    return e;
  var n = r.call(e), i, o = [], a;
  try {
    for (; (t === void 0 || t-- > 0) && !(i = n.next()).done; )
      o.push(i.value);
  } catch (u) {
    a = { error: u };
  } finally {
    try {
      i && !i.done && (r = n.return) && r.call(n);
    } finally {
      if (a)
        throw a.error;
    }
  }
  return o;
}, Qk = d && d.__spreadArray || function(e, t) {
  for (var r = 0, n = t.length, i = e.length; r < n; r++, i++)
    e[i] = t[r];
  return e;
};
Object.defineProperty(Qn, "__esModule", { value: !0 });
Qn.share = void 0;
var Vm = Y, Jk = Me, qm = Rn, Xk = x;
function eD(e) {
  e === void 0 && (e = {});
  var t = e.connector, r = t === void 0 ? function() {
    return new Jk.Subject();
  } : t, n = e.resetOnError, i = n === void 0 ? !0 : n, o = e.resetOnComplete, a = o === void 0 ? !0 : o, u = e.resetOnRefCountZero, c = u === void 0 ? !0 : u;
  return function(s) {
    var l, v, y, O = 0, E = !1, T = !1, C = function() {
      v == null || v.unsubscribe(), v = void 0;
    }, A = function() {
      C(), l = y = void 0, E = T = !1;
    }, $ = function() {
      var U = l;
      A(), U == null || U.unsubscribe();
    };
    return Xk.operate(function(U, D) {
      O++, !T && !E && C();
      var F = y = y ?? r();
      D.add(function() {
        O--, O === 0 && !T && !E && (v = Il($, c));
      }), F.subscribe(D), !l && O > 0 && (l = new qm.SafeSubscriber({
        next: function(G) {
          return F.next(G);
        },
        error: function(G) {
          T = !0, C(), v = Il(A, i, G), F.error(G);
        },
        complete: function() {
          E = !0, C(), v = Il(A, a), F.complete();
        }
      }), Vm.innerFrom(U).subscribe(l));
    })(s);
  };
}
Qn.share = eD;
function Il(e, t) {
  for (var r = [], n = 2; n < arguments.length; n++)
    r[n - 2] = arguments[n];
  if (t === !0) {
    e();
    return;
  }
  if (t !== !1) {
    var i = new qm.SafeSubscriber({
      next: function() {
        i.unsubscribe(), e();
      }
    });
    return Vm.innerFrom(t.apply(void 0, Qk([], Zk(r)))).subscribe(i);
  }
}
var va = {};
Object.defineProperty(va, "__esModule", { value: !0 });
va.shareReplay = void 0;
var rD = Cn, tD = Qn;
function nD(e, t, r) {
  var n, i, o, a, u = !1;
  return e && typeof e == "object" ? (n = e.bufferSize, a = n === void 0 ? 1 / 0 : n, i = e.windowTime, t = i === void 0 ? 1 / 0 : i, o = e.refCount, u = o === void 0 ? !1 : o, r = e.scheduler) : a = e ?? 1 / 0, tD.share({
    connector: function() {
      return new rD.ReplaySubject(a, t, r);
    },
    resetOnError: !0,
    resetOnComplete: !1,
    resetOnRefCountZero: u
  });
}
va.shareReplay = nD;
var _a = {};
Object.defineProperty(_a, "__esModule", { value: !0 });
_a.single = void 0;
var iD = Rr, oD = ao, aD = oo, uD = x, sD = q;
function cD(e) {
  return uD.operate(function(t, r) {
    var n = !1, i, o = !1, a = 0;
    t.subscribe(sD.createOperatorSubscriber(r, function(u) {
      o = !0, (!e || e(u, a++, t)) && (n && r.error(new oD.SequenceError("Too many matching values")), n = !0, i = u);
    }, function() {
      n ? (r.next(i), r.complete()) : r.error(o ? new aD.NotFoundError("No matching values") : new iD.EmptyError());
    }));
  });
}
_a.single = cD;
var pa = {};
Object.defineProperty(pa, "__esModule", { value: !0 });
pa.skip = void 0;
var lD = Or;
function fD(e) {
  return lD.filter(function(t, r) {
    return e <= r;
  });
}
pa.skip = fD;
var ma = {};
Object.defineProperty(ma, "__esModule", { value: !0 });
ma.skipLast = void 0;
var dD = Be, hD = x, vD = q;
function _D(e) {
  return e <= 0 ? dD.identity : hD.operate(function(t, r) {
    var n = new Array(e), i = 0;
    return t.subscribe(vD.createOperatorSubscriber(r, function(o) {
      var a = i++;
      if (a < e)
        n[a] = o;
      else {
        var u = a % e, c = n[u];
        n[u] = o, r.next(c);
      }
    })), function() {
      n = null;
    };
  });
}
ma.skipLast = _D;
var ya = {};
Object.defineProperty(ya, "__esModule", { value: !0 });
ya.skipUntil = void 0;
var pD = x, hv = q, mD = Y, yD = Fe;
function bD(e) {
  return pD.operate(function(t, r) {
    var n = !1, i = hv.createOperatorSubscriber(r, function() {
      i == null || i.unsubscribe(), n = !0;
    }, yD.noop);
    mD.innerFrom(e).subscribe(i), t.subscribe(hv.createOperatorSubscriber(r, function(o) {
      return n && r.next(o);
    }));
  });
}
ya.skipUntil = bD;
var ba = {};
Object.defineProperty(ba, "__esModule", { value: !0 });
ba.skipWhile = void 0;
var gD = x, OD = q;
function wD(e) {
  return gD.operate(function(t, r) {
    var n = !1, i = 0;
    t.subscribe(OD.createOperatorSubscriber(r, function(o) {
      return (n || (n = !e(o, i++))) && r.next(o);
    }));
  });
}
ba.skipWhile = wD;
var ga = {};
Object.defineProperty(ga, "__esModule", { value: !0 });
ga.startWith = void 0;
var vv = Yt, ED = De, SD = x;
function TD() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e[t] = arguments[t];
  var r = ED.popScheduler(e);
  return SD.operate(function(n, i) {
    (r ? vv.concat(e, n, r) : vv.concat(e, n)).subscribe(i);
  });
}
ga.startWith = TD;
var Oa = {}, mt = {};
Object.defineProperty(mt, "__esModule", { value: !0 });
mt.switchMap = void 0;
var PD = Y, ID = x, _v = q;
function RD(e, t) {
  return ID.operate(function(r, n) {
    var i = null, o = 0, a = !1, u = function() {
      return a && !i && n.complete();
    };
    r.subscribe(_v.createOperatorSubscriber(n, function(c) {
      i == null || i.unsubscribe();
      var s = 0, l = o++;
      PD.innerFrom(e(c, l)).subscribe(i = _v.createOperatorSubscriber(n, function(v) {
        return n.next(t ? t(c, v, l, s++) : v);
      }, function() {
        i = null, u();
      }));
    }, function() {
      a = !0, u();
    }));
  });
}
mt.switchMap = RD;
Object.defineProperty(Oa, "__esModule", { value: !0 });
Oa.switchAll = void 0;
var AD = mt, CD = Be;
function jD() {
  return AD.switchMap(CD.identity);
}
Oa.switchAll = jD;
var wa = {};
Object.defineProperty(wa, "__esModule", { value: !0 });
wa.switchMapTo = void 0;
var pv = mt, ND = _e;
function $D(e, t) {
  return ND.isFunction(t) ? pv.switchMap(function() {
    return e;
  }, t) : pv.switchMap(function() {
    return e;
  });
}
wa.switchMapTo = $D;
var Ea = {};
Object.defineProperty(Ea, "__esModule", { value: !0 });
Ea.switchScan = void 0;
var MD = mt, kD = x;
function DD(e, t) {
  return kD.operate(function(r, n) {
    var i = t;
    return MD.switchMap(function(o, a) {
      return e(i, o, a);
    }, function(o, a) {
      return i = a, a;
    })(r).subscribe(n), function() {
      i = null;
    };
  });
}
Ea.switchScan = DD;
var Sa = {};
Object.defineProperty(Sa, "__esModule", { value: !0 });
Sa.takeUntil = void 0;
var UD = x, LD = q, FD = Y, BD = Fe;
function xD(e) {
  return UD.operate(function(t, r) {
    FD.innerFrom(e).subscribe(LD.createOperatorSubscriber(r, function() {
      return r.complete();
    }, BD.noop)), !r.closed && t.subscribe(r);
  });
}
Sa.takeUntil = xD;
var Ta = {};
Object.defineProperty(Ta, "__esModule", { value: !0 });
Ta.takeWhile = void 0;
var WD = x, VD = q;
function qD(e, t) {
  return t === void 0 && (t = !1), WD.operate(function(r, n) {
    var i = 0;
    r.subscribe(VD.createOperatorSubscriber(n, function(o) {
      var a = e(o, i++);
      (a || t) && n.next(o), !a && n.complete();
    }));
  });
}
Ta.takeWhile = qD;
var Pa = {};
Object.defineProperty(Pa, "__esModule", { value: !0 });
Pa.tap = void 0;
var HD = _e, zD = x, YD = q, GD = Be;
function KD(e, t, r) {
  var n = HD.isFunction(e) || t || r ? { next: e, error: t, complete: r } : e;
  return n ? zD.operate(function(i, o) {
    var a;
    (a = n.subscribe) === null || a === void 0 || a.call(n);
    var u = !0;
    i.subscribe(YD.createOperatorSubscriber(o, function(c) {
      var s;
      (s = n.next) === null || s === void 0 || s.call(n, c), o.next(c);
    }, function() {
      var c;
      u = !1, (c = n.complete) === null || c === void 0 || c.call(n), o.complete();
    }, function(c) {
      var s;
      u = !1, (s = n.error) === null || s === void 0 || s.call(n, c), o.error(c);
    }, function() {
      var c, s;
      u && ((c = n.unsubscribe) === null || c === void 0 || c.call(n)), (s = n.finalize) === null || s === void 0 || s.call(n);
    }));
  }) : GD.identity;
}
Pa.tap = KD;
var ks = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.throttle = e.defaultThrottleConfig = void 0;
  var t = x, r = q, n = Y;
  e.defaultThrottleConfig = {
    leading: !0,
    trailing: !1
  };
  function i(o, a) {
    return a === void 0 && (a = e.defaultThrottleConfig), t.operate(function(u, c) {
      var s = a.leading, l = a.trailing, v = !1, y = null, O = null, E = !1, T = function() {
        O == null || O.unsubscribe(), O = null, l && ($(), E && c.complete());
      }, C = function() {
        O = null, E && c.complete();
      }, A = function(U) {
        return O = n.innerFrom(o(U)).subscribe(r.createOperatorSubscriber(c, T, C));
      }, $ = function() {
        if (v) {
          v = !1;
          var U = y;
          y = null, c.next(U), !E && A(U);
        }
      };
      u.subscribe(r.createOperatorSubscriber(c, function(U) {
        v = !0, y = U, !(O && !O.closed) && (s ? $() : A(U));
      }, function() {
        E = !0, !(l && v && O && !O.closed) && c.complete();
      }));
    });
  }
  e.throttle = i;
})(ks);
var Ia = {};
Object.defineProperty(Ia, "__esModule", { value: !0 });
Ia.throttleTime = void 0;
var ZD = Xe, mv = ks, QD = Cr;
function JD(e, t, r) {
  t === void 0 && (t = ZD.asyncScheduler), r === void 0 && (r = mv.defaultThrottleConfig);
  var n = QD.timer(e, t);
  return mv.throttle(function() {
    return n;
  }, r);
}
Ia.throttleTime = JD;
var Bt = {};
Object.defineProperty(Bt, "__esModule", { value: !0 });
Bt.TimeInterval = Bt.timeInterval = void 0;
var XD = Xe, eU = x, rU = q;
function tU(e) {
  return e === void 0 && (e = XD.asyncScheduler), eU.operate(function(t, r) {
    var n = e.now();
    t.subscribe(rU.createOperatorSubscriber(r, function(i) {
      var o = e.now(), a = o - n;
      n = o, r.next(new Hm(i, a));
    }));
  });
}
Bt.timeInterval = tU;
var Hm = function() {
  function e(t, r) {
    this.value = t, this.interval = r;
  }
  return e;
}();
Bt.TimeInterval = Hm;
var Ra = {};
Object.defineProperty(Ra, "__esModule", { value: !0 });
Ra.timeoutWith = void 0;
var nU = Xe, iU = kn, oU = ji;
function aU(e, t, r) {
  var n, i, o;
  if (r = r ?? nU.async, iU.isValidDate(e) ? n = e : typeof e == "number" && (i = e), t)
    o = function() {
      return t;
    };
  else
    throw new TypeError("No observable provided to switch to");
  if (n == null && i == null)
    throw new TypeError("No timeout provided.");
  return oU.timeout({
    first: n,
    each: i,
    scheduler: r,
    with: o
  });
}
Ra.timeoutWith = aU;
var Aa = {};
Object.defineProperty(Aa, "__esModule", { value: !0 });
Aa.timestamp = void 0;
var uU = os, sU = gr;
function cU(e) {
  return e === void 0 && (e = uU.dateTimestampProvider), sU.map(function(t) {
    return { value: t, timestamp: e.now() };
  });
}
Aa.timestamp = cU;
var Ca = {};
Object.defineProperty(Ca, "__esModule", { value: !0 });
Ca.window = void 0;
var yv = Me, lU = x, bv = q, fU = Fe, dU = Y;
function hU(e) {
  return lU.operate(function(t, r) {
    var n = new yv.Subject();
    r.next(n.asObservable());
    var i = function(o) {
      n.error(o), r.error(o);
    };
    return t.subscribe(bv.createOperatorSubscriber(r, function(o) {
      return n == null ? void 0 : n.next(o);
    }, function() {
      n.complete(), r.complete();
    }, i)), dU.innerFrom(e).subscribe(bv.createOperatorSubscriber(r, function() {
      n.complete(), r.next(n = new yv.Subject());
    }, fU.noop, i)), function() {
      n == null || n.unsubscribe(), n = null;
    };
  });
}
Ca.window = hU;
var ja = {}, vU = d && d.__values || function(e) {
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
var gv = Me, _U = x, pU = q;
function mU(e, t) {
  t === void 0 && (t = 0);
  var r = t > 0 ? t : e;
  return _U.operate(function(n, i) {
    var o = [new gv.Subject()], a = 0;
    i.next(o[0].asObservable()), n.subscribe(pU.createOperatorSubscriber(i, function(u) {
      var c, s;
      try {
        for (var l = vU(o), v = l.next(); !v.done; v = l.next()) {
          var y = v.value;
          y.next(u);
        }
      } catch (T) {
        c = { error: T };
      } finally {
        try {
          v && !v.done && (s = l.return) && s.call(l);
        } finally {
          if (c)
            throw c.error;
        }
      }
      var O = a - e + 1;
      if (O >= 0 && O % r === 0 && o.shift().complete(), ++a % r === 0) {
        var E = new gv.Subject();
        o.push(E), i.next(E.asObservable());
      }
    }, function() {
      for (; o.length > 0; )
        o.shift().complete();
      i.complete();
    }, function(u) {
      for (; o.length > 0; )
        o.shift().error(u);
      i.error(u);
    }, function() {
      o = null;
    }));
  });
}
ja.windowCount = mU;
var Na = {};
Object.defineProperty(Na, "__esModule", { value: !0 });
Na.windowTime = void 0;
var yU = Me, bU = Xe, gU = Ue, OU = x, wU = q, EU = mr, SU = De, Ov = br;
function TU(e) {
  for (var t, r, n = [], i = 1; i < arguments.length; i++)
    n[i - 1] = arguments[i];
  var o = (t = SU.popScheduler(n)) !== null && t !== void 0 ? t : bU.asyncScheduler, a = (r = n[0]) !== null && r !== void 0 ? r : null, u = n[1] || 1 / 0;
  return OU.operate(function(c, s) {
    var l = [], v = !1, y = function(C) {
      var A = C.window, $ = C.subs;
      A.complete(), $.unsubscribe(), EU.arrRemove(l, C), v && O();
    }, O = function() {
      if (l) {
        var C = new gU.Subscription();
        s.add(C);
        var A = new yU.Subject(), $ = {
          window: A,
          subs: C,
          seen: 0
        };
        l.push($), s.next(A.asObservable()), Ov.executeSchedule(C, o, function() {
          return y($);
        }, e);
      }
    };
    a !== null && a >= 0 ? Ov.executeSchedule(s, o, O, a, !0) : v = !0, O();
    var E = function(C) {
      return l.slice().forEach(C);
    }, T = function(C) {
      E(function(A) {
        var $ = A.window;
        return C($);
      }), C(s), s.unsubscribe();
    };
    return c.subscribe(wU.createOperatorSubscriber(s, function(C) {
      E(function(A) {
        A.window.next(C), u <= ++A.seen && y(A);
      });
    }, function() {
      return T(function(C) {
        return C.complete();
      });
    }, function(C) {
      return T(function(A) {
        return A.error(C);
      });
    })), function() {
      l = null;
    };
  });
}
Na.windowTime = TU;
var $a = {}, PU = d && d.__values || function(e) {
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
var IU = Me, RU = Ue, AU = x, wv = Y, Rl = q, Ev = Fe, CU = mr;
function jU(e, t) {
  return AU.operate(function(r, n) {
    var i = [], o = function(a) {
      for (; 0 < i.length; )
        i.shift().error(a);
      n.error(a);
    };
    wv.innerFrom(e).subscribe(Rl.createOperatorSubscriber(n, function(a) {
      var u = new IU.Subject();
      i.push(u);
      var c = new RU.Subscription(), s = function() {
        CU.arrRemove(i, u), u.complete(), c.unsubscribe();
      }, l;
      try {
        l = wv.innerFrom(t(a));
      } catch (v) {
        o(v);
        return;
      }
      n.next(u.asObservable()), c.add(l.subscribe(Rl.createOperatorSubscriber(n, s, Ev.noop, o)));
    }, Ev.noop)), r.subscribe(Rl.createOperatorSubscriber(n, function(a) {
      var u, c, s = i.slice();
      try {
        for (var l = PU(s), v = l.next(); !v.done; v = l.next()) {
          var y = v.value;
          y.next(a);
        }
      } catch (O) {
        u = { error: O };
      } finally {
        try {
          v && !v.done && (c = l.return) && c.call(l);
        } finally {
          if (u)
            throw u.error;
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
$a.windowToggle = jU;
var Ma = {};
Object.defineProperty(Ma, "__esModule", { value: !0 });
Ma.windowWhen = void 0;
var NU = Me, $U = x, Sv = q, MU = Y;
function kU(e) {
  return $U.operate(function(t, r) {
    var n, i, o = function(u) {
      n.error(u), r.error(u);
    }, a = function() {
      i == null || i.unsubscribe(), n == null || n.complete(), n = new NU.Subject(), r.next(n.asObservable());
      var u;
      try {
        u = MU.innerFrom(e());
      } catch (c) {
        o(c);
        return;
      }
      u.subscribe(i = Sv.createOperatorSubscriber(r, a, a, o));
    };
    a(), t.subscribe(Sv.createOperatorSubscriber(r, function(u) {
      return n.next(u);
    }, function() {
      n.complete(), r.complete();
    }, o, function() {
      i == null || i.unsubscribe(), n = null;
    }));
  });
}
Ma.windowWhen = kU;
var ka = {}, Tv = d && d.__read || function(e, t) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r)
    return e;
  var n = r.call(e), i, o = [], a;
  try {
    for (; (t === void 0 || t-- > 0) && !(i = n.next()).done; )
      o.push(i.value);
  } catch (u) {
    a = { error: u };
  } finally {
    try {
      i && !i.done && (r = n.return) && r.call(n);
    } finally {
      if (a)
        throw a.error;
    }
  }
  return o;
}, Pv = d && d.__spreadArray || function(e, t) {
  for (var r = 0, n = t.length, i = e.length; r < n; r++, i++)
    e[i] = t[r];
  return e;
};
Object.defineProperty(ka, "__esModule", { value: !0 });
ka.withLatestFrom = void 0;
var DU = x, Iv = q, UU = Y, LU = Be, FU = Fe, BU = De;
function xU() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e[t] = arguments[t];
  var r = BU.popResultSelector(e);
  return DU.operate(function(n, i) {
    for (var o = e.length, a = new Array(o), u = e.map(function() {
      return !1;
    }), c = !1, s = function(v) {
      UU.innerFrom(e[v]).subscribe(Iv.createOperatorSubscriber(i, function(y) {
        a[v] = y, !c && !u[v] && (u[v] = !0, (c = u.every(LU.identity)) && (u = null));
      }, FU.noop));
    }, l = 0; l < o; l++)
      s(l);
    n.subscribe(Iv.createOperatorSubscriber(i, function(v) {
      if (c) {
        var y = Pv([v], Tv(a));
        i.next(r ? r.apply(void 0, Pv([], Tv(y))) : y);
      }
    }));
  });
}
ka.withLatestFrom = xU;
var Da = {};
Object.defineProperty(Da, "__esModule", { value: !0 });
Da.zipAll = void 0;
var WU = Un, VU = wo;
function qU(e) {
  return VU.joinAllInternals(WU.zip, e);
}
Da.zipAll = qU;
var Ua = {}, La = {}, HU = d && d.__read || function(e, t) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r)
    return e;
  var n = r.call(e), i, o = [], a;
  try {
    for (; (t === void 0 || t-- > 0) && !(i = n.next()).done; )
      o.push(i.value);
  } catch (u) {
    a = { error: u };
  } finally {
    try {
      i && !i.done && (r = n.return) && r.call(n);
    } finally {
      if (a)
        throw a.error;
    }
  }
  return o;
}, zU = d && d.__spreadArray || function(e, t) {
  for (var r = 0, n = t.length, i = e.length; r < n; r++, i++)
    e[i] = t[r];
  return e;
};
Object.defineProperty(La, "__esModule", { value: !0 });
La.zip = void 0;
var YU = Un, GU = x;
function KU() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e[t] = arguments[t];
  return GU.operate(function(r, n) {
    YU.zip.apply(void 0, zU([r], HU(e))).subscribe(n);
  });
}
La.zip = KU;
var ZU = d && d.__read || function(e, t) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r)
    return e;
  var n = r.call(e), i, o = [], a;
  try {
    for (; (t === void 0 || t-- > 0) && !(i = n.next()).done; )
      o.push(i.value);
  } catch (u) {
    a = { error: u };
  } finally {
    try {
      i && !i.done && (r = n.return) && r.call(n);
    } finally {
      if (a)
        throw a.error;
    }
  }
  return o;
}, QU = d && d.__spreadArray || function(e, t) {
  for (var r = 0, n = t.length, i = e.length; r < n; r++, i++)
    e[i] = t[r];
  return e;
};
Object.defineProperty(Ua, "__esModule", { value: !0 });
Ua.zipWith = void 0;
var JU = La;
function XU() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e[t] = arguments[t];
  return JU.zip.apply(void 0, QU([], ZU(e)));
}
Ua.zipWith = XU;
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
  var u = Me;
  Object.defineProperty(e, "Subject", { enumerable: !0, get: function() {
    return u.Subject;
  } });
  var c = Yi;
  Object.defineProperty(e, "BehaviorSubject", { enumerable: !0, get: function() {
    return c.BehaviorSubject;
  } });
  var s = Cn;
  Object.defineProperty(e, "ReplaySubject", { enumerable: !0, get: function() {
    return s.ReplaySubject;
  } });
  var l = jn;
  Object.defineProperty(e, "AsyncSubject", { enumerable: !0, get: function() {
    return l.AsyncSubject;
  } });
  var v = _m;
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
  var O = ym;
  Object.defineProperty(e, "queue", { enumerable: !0, get: function() {
    return O.queue;
  } }), Object.defineProperty(e, "queueScheduler", { enumerable: !0, get: function() {
    return O.queueScheduler;
  } });
  var E = bm;
  Object.defineProperty(e, "animationFrame", { enumerable: !0, get: function() {
    return E.animationFrame;
  } }), Object.defineProperty(e, "animationFrameScheduler", { enumerable: !0, get: function() {
    return E.animationFrameScheduler;
  } });
  var T = yn;
  Object.defineProperty(e, "VirtualTimeScheduler", { enumerable: !0, get: function() {
    return T.VirtualTimeScheduler;
  } }), Object.defineProperty(e, "VirtualAction", { enumerable: !0, get: function() {
    return T.VirtualAction;
  } });
  var C = Gi;
  Object.defineProperty(e, "Scheduler", { enumerable: !0, get: function() {
    return C.Scheduler;
  } });
  var A = Ue;
  Object.defineProperty(e, "Subscription", { enumerable: !0, get: function() {
    return A.Subscription;
  } });
  var $ = Rn;
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
  var G = Be;
  Object.defineProperty(e, "identity", { enumerable: !0, get: function() {
    return G.identity;
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
  var ge = Rr;
  Object.defineProperty(e, "EmptyError", { enumerable: !0, get: function() {
    return ge.EmptyError;
  } });
  var Ae = oo;
  Object.defineProperty(e, "NotFoundError", { enumerable: !0, get: function() {
    return Ae.NotFoundError;
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
  var K = Es;
  Object.defineProperty(e, "connectable", { enumerable: !0, get: function() {
    return K.connectable;
  } });
  var B = Kt;
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
  var Re = Rs;
  Object.defineProperty(e, "iif", { enumerable: !0, get: function() {
    return Re.iif;
  } });
  var He = lo;
  Object.defineProperty(e, "interval", { enumerable: !0, get: function() {
    return He.interval;
  } });
  var ir = As;
  Object.defineProperty(e, "merge", { enumerable: !0, get: function() {
    return ir.merge;
  } });
  var er = ff;
  Object.defineProperty(e, "never", { enumerable: !0, get: function() {
    return er.never;
  } });
  var $e = Nn;
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
  var L = Un;
  Object.defineProperty(e, "zip", { enumerable: !0, get: function() {
    return L.zip;
  } });
  var ne = Ki;
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
  } }), r(Dm, e);
  var Ce = st;
  Object.defineProperty(e, "config", { enumerable: !0, get: function() {
    return Ce.config;
  } });
  var m = Ln;
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
  var g = po;
  Object.defineProperty(e, "bufferCount", { enumerable: !0, get: function() {
    return g.bufferCount;
  } });
  var S = mo;
  Object.defineProperty(e, "bufferTime", { enumerable: !0, get: function() {
    return S.bufferTime;
  } });
  var R = yo;
  Object.defineProperty(e, "bufferToggle", { enumerable: !0, get: function() {
    return R.bufferToggle;
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
  var ye = Fn;
  Object.defineProperty(e, "combineLatestAll", { enumerable: !0, get: function() {
    return ye.combineLatestAll;
  } });
  var Se = So;
  Object.defineProperty(e, "combineLatestWith", { enumerable: !0, get: function() {
    return Se.combineLatestWith;
  } });
  var ve = Gt;
  Object.defineProperty(e, "concatAll", { enumerable: !0, get: function() {
    return ve.concatAll;
  } });
  var wc = xn;
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
  var Pc = Ao;
  Object.defineProperty(e, "count", { enumerable: !0, get: function() {
    return Pc.count;
  } });
  var Ic = Co;
  Object.defineProperty(e, "debounce", { enumerable: !0, get: function() {
    return Ic.debounce;
  } });
  var Rc = jo;
  Object.defineProperty(e, "debounceTime", { enumerable: !0, get: function() {
    return Rc.debounceTime;
  } });
  var Ac = vt;
  Object.defineProperty(e, "defaultIfEmpty", { enumerable: !0, get: function() {
    return Ac.defaultIfEmpty;
  } });
  var Cc = No;
  Object.defineProperty(e, "delay", { enumerable: !0, get: function() {
    return Cc.delay;
  } });
  var jc = Wn;
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
  var Mc = Hn;
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
  var Bc = zn;
  Object.defineProperty(e, "exhaustAll", { enumerable: !0, get: function() {
    return Bc.exhaustAll;
  } });
  var xc = Yn;
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
  var Gc = qo;
  Object.defineProperty(e, "groupBy", { enumerable: !0, get: function() {
    return Gc.groupBy;
  } });
  var Kc = Vn;
  Object.defineProperty(e, "ignoreElements", { enumerable: !0, get: function() {
    return Kc.ignoreElements;
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
  var Xc = qn;
  Object.defineProperty(e, "mapTo", { enumerable: !0, get: function() {
    return Xc.mapTo;
  } });
  var el = Yo;
  Object.defineProperty(e, "materialize", { enumerable: !0, get: function() {
    return el.materialize;
  } });
  var rl = Go;
  Object.defineProperty(e, "max", { enumerable: !0, get: function() {
    return rl.max;
  } });
  var tl = ht;
  Object.defineProperty(e, "mergeAll", { enumerable: !0, get: function() {
    return tl.mergeAll;
  } });
  var nl = Ko;
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
  var Rb = Jo;
  Object.defineProperty(e, "mergeWith", { enumerable: !0, get: function() {
    return Rb.mergeWith;
  } });
  var Ab = ea;
  Object.defineProperty(e, "min", { enumerable: !0, get: function() {
    return Ab.min;
  } });
  var Cb = Qt;
  Object.defineProperty(e, "multicast", { enumerable: !0, get: function() {
    return Cb.multicast;
  } });
  var jb = ft;
  Object.defineProperty(e, "observeOn", { enumerable: !0, get: function() {
    return jb.observeOn;
  } });
  var Nb = Ft;
  Object.defineProperty(e, "onErrorResumeNextWith", { enumerable: !0, get: function() {
    return Nb.onErrorResumeNextWith;
  } });
  var $b = ra;
  Object.defineProperty(e, "pairwise", { enumerable: !0, get: function() {
    return $b.pairwise;
  } });
  var Mb = ta;
  Object.defineProperty(e, "pluck", { enumerable: !0, get: function() {
    return Mb.pluck;
  } });
  var kb = na;
  Object.defineProperty(e, "publish", { enumerable: !0, get: function() {
    return kb.publish;
  } });
  var Db = ia;
  Object.defineProperty(e, "publishBehavior", { enumerable: !0, get: function() {
    return Db.publishBehavior;
  } });
  var Ub = oa;
  Object.defineProperty(e, "publishLast", { enumerable: !0, get: function() {
    return Ub.publishLast;
  } });
  var Lb = aa;
  Object.defineProperty(e, "publishReplay", { enumerable: !0, get: function() {
    return Lb.publishReplay;
  } });
  var Fb = Kn;
  Object.defineProperty(e, "raceWith", { enumerable: !0, get: function() {
    return Fb.raceWith;
  } });
  var Bb = qr;
  Object.defineProperty(e, "reduce", { enumerable: !0, get: function() {
    return Bb.reduce;
  } });
  var xb = ua;
  Object.defineProperty(e, "repeat", { enumerable: !0, get: function() {
    return xb.repeat;
  } });
  var Wb = sa;
  Object.defineProperty(e, "repeatWhen", { enumerable: !0, get: function() {
    return Wb.repeatWhen;
  } });
  var Vb = ca;
  Object.defineProperty(e, "retry", { enumerable: !0, get: function() {
    return Vb.retry;
  } });
  var qb = la;
  Object.defineProperty(e, "retryWhen", { enumerable: !0, get: function() {
    return qb.retryWhen;
  } });
  var Hb = An;
  Object.defineProperty(e, "refCount", { enumerable: !0, get: function() {
    return Hb.refCount;
  } });
  var zb = Zn;
  Object.defineProperty(e, "sample", { enumerable: !0, get: function() {
    return zb.sample;
  } });
  var Yb = fa;
  Object.defineProperty(e, "sampleTime", { enumerable: !0, get: function() {
    return Yb.sampleTime;
  } });
  var Gb = da;
  Object.defineProperty(e, "scan", { enumerable: !0, get: function() {
    return Gb.scan;
  } });
  var Kb = ha;
  Object.defineProperty(e, "sequenceEqual", { enumerable: !0, get: function() {
    return Kb.sequenceEqual;
  } });
  var Zb = Qn;
  Object.defineProperty(e, "share", { enumerable: !0, get: function() {
    return Zb.share;
  } });
  var Qb = va;
  Object.defineProperty(e, "shareReplay", { enumerable: !0, get: function() {
    return Qb.shareReplay;
  } });
  var Jb = _a;
  Object.defineProperty(e, "single", { enumerable: !0, get: function() {
    return Jb.single;
  } });
  var Xb = pa;
  Object.defineProperty(e, "skip", { enumerable: !0, get: function() {
    return Xb.skip;
  } });
  var e0 = ma;
  Object.defineProperty(e, "skipLast", { enumerable: !0, get: function() {
    return e0.skipLast;
  } });
  var r0 = ya;
  Object.defineProperty(e, "skipUntil", { enumerable: !0, get: function() {
    return r0.skipUntil;
  } });
  var t0 = ba;
  Object.defineProperty(e, "skipWhile", { enumerable: !0, get: function() {
    return t0.skipWhile;
  } });
  var n0 = ga;
  Object.defineProperty(e, "startWith", { enumerable: !0, get: function() {
    return n0.startWith;
  } });
  var i0 = dt;
  Object.defineProperty(e, "subscribeOn", { enumerable: !0, get: function() {
    return i0.subscribeOn;
  } });
  var o0 = Oa;
  Object.defineProperty(e, "switchAll", { enumerable: !0, get: function() {
    return o0.switchAll;
  } });
  var a0 = mt;
  Object.defineProperty(e, "switchMap", { enumerable: !0, get: function() {
    return a0.switchMap;
  } });
  var u0 = wa;
  Object.defineProperty(e, "switchMapTo", { enumerable: !0, get: function() {
    return u0.switchMapTo;
  } });
  var s0 = Ea;
  Object.defineProperty(e, "switchScan", { enumerable: !0, get: function() {
    return s0.switchScan;
  } });
  var c0 = _t;
  Object.defineProperty(e, "take", { enumerable: !0, get: function() {
    return c0.take;
  } });
  var l0 = Gn;
  Object.defineProperty(e, "takeLast", { enumerable: !0, get: function() {
    return l0.takeLast;
  } });
  var f0 = Sa;
  Object.defineProperty(e, "takeUntil", { enumerable: !0, get: function() {
    return f0.takeUntil;
  } });
  var d0 = Ta;
  Object.defineProperty(e, "takeWhile", { enumerable: !0, get: function() {
    return d0.takeWhile;
  } });
  var h0 = Pa;
  Object.defineProperty(e, "tap", { enumerable: !0, get: function() {
    return h0.tap;
  } });
  var v0 = ks;
  Object.defineProperty(e, "throttle", { enumerable: !0, get: function() {
    return v0.throttle;
  } });
  var _0 = Ia;
  Object.defineProperty(e, "throttleTime", { enumerable: !0, get: function() {
    return _0.throttleTime;
  } });
  var p0 = pt;
  Object.defineProperty(e, "throwIfEmpty", { enumerable: !0, get: function() {
    return p0.throwIfEmpty;
  } });
  var m0 = Bt;
  Object.defineProperty(e, "timeInterval", { enumerable: !0, get: function() {
    return m0.timeInterval;
  } });
  var y0 = ji;
  Object.defineProperty(e, "timeout", { enumerable: !0, get: function() {
    return y0.timeout;
  } });
  var b0 = Ra;
  Object.defineProperty(e, "timeoutWith", { enumerable: !0, get: function() {
    return b0.timeoutWith;
  } });
  var g0 = Aa;
  Object.defineProperty(e, "timestamp", { enumerable: !0, get: function() {
    return g0.timestamp;
  } });
  var O0 = Bn;
  Object.defineProperty(e, "toArray", { enumerable: !0, get: function() {
    return O0.toArray;
  } });
  var w0 = Ca;
  Object.defineProperty(e, "window", { enumerable: !0, get: function() {
    return w0.window;
  } });
  var E0 = ja;
  Object.defineProperty(e, "windowCount", { enumerable: !0, get: function() {
    return E0.windowCount;
  } });
  var S0 = Na;
  Object.defineProperty(e, "windowTime", { enumerable: !0, get: function() {
    return S0.windowTime;
  } });
  var T0 = $a;
  Object.defineProperty(e, "windowToggle", { enumerable: !0, get: function() {
    return T0.windowToggle;
  } });
  var P0 = Ma;
  Object.defineProperty(e, "windowWhen", { enumerable: !0, get: function() {
    return P0.windowWhen;
  } });
  var I0 = ka;
  Object.defineProperty(e, "withLatestFrom", { enumerable: !0, get: function() {
    return I0.withLatestFrom;
  } });
  var R0 = Da;
  Object.defineProperty(e, "zipAll", { enumerable: !0, get: function() {
    return R0.zipAll;
  } });
  var A0 = Ua;
  Object.defineProperty(e, "zipWith", { enumerable: !0, get: function() {
    return A0.zipWith;
  } });
})(Vi);
var Ds = {}, Us = {};
Object.defineProperty(Us, "__esModule", { value: !0 });
Us.partition = void 0;
var eL = ho, Rv = Or;
function rL(e, t) {
  return function(r) {
    return [Rv.filter(e, t)(r), Rv.filter(eL.not(e, t))(r)];
  };
}
Us.partition = rL;
var Ls = {}, tL = d && d.__read || function(e, t) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r)
    return e;
  var n = r.call(e), i, o = [], a;
  try {
    for (; (t === void 0 || t-- > 0) && !(i = n.next()).done; )
      o.push(i.value);
  } catch (u) {
    a = { error: u };
  } finally {
    try {
      i && !i.done && (r = n.return) && r.call(n);
    } finally {
      if (a)
        throw a.error;
    }
  }
  return o;
}, nL = d && d.__spreadArray || function(e, t) {
  for (var r = 0, n = t.length, i = e.length; r < n; r++, i++)
    e[i] = t[r];
  return e;
};
Object.defineProperty(Ls, "__esModule", { value: !0 });
Ls.race = void 0;
var iL = jr, oL = Kn;
function aL() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e[t] = arguments[t];
  return oL.raceWith.apply(void 0, nL([], tL(iL.argsOrArgArray(e))));
}
Ls.race = aL;
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.mergeAll = e.merge = e.max = e.materialize = e.mapTo = e.map = e.last = e.isEmpty = e.ignoreElements = e.groupBy = e.first = e.findIndex = e.find = e.finalize = e.filter = e.expand = e.exhaustMap = e.exhaustAll = e.exhaust = e.every = e.endWith = e.elementAt = e.distinctUntilKeyChanged = e.distinctUntilChanged = e.distinct = e.dematerialize = e.delayWhen = e.delay = e.defaultIfEmpty = e.debounceTime = e.debounce = e.count = e.connect = e.concatWith = e.concatMapTo = e.concatMap = e.concatAll = e.concat = e.combineLatestWith = e.combineLatest = e.combineLatestAll = e.combineAll = e.catchError = e.bufferWhen = e.bufferToggle = e.bufferTime = e.bufferCount = e.buffer = e.auditTime = e.audit = void 0, e.timeInterval = e.throwIfEmpty = e.throttleTime = e.throttle = e.tap = e.takeWhile = e.takeUntil = e.takeLast = e.take = e.switchScan = e.switchMapTo = e.switchMap = e.switchAll = e.subscribeOn = e.startWith = e.skipWhile = e.skipUntil = e.skipLast = e.skip = e.single = e.shareReplay = e.share = e.sequenceEqual = e.scan = e.sampleTime = e.sample = e.refCount = e.retryWhen = e.retry = e.repeatWhen = e.repeat = e.reduce = e.raceWith = e.race = e.publishReplay = e.publishLast = e.publishBehavior = e.publish = e.pluck = e.partition = e.pairwise = e.onErrorResumeNext = e.observeOn = e.multicast = e.min = e.mergeWith = e.mergeScan = e.mergeMapTo = e.mergeMap = e.flatMap = void 0, e.zipWith = e.zipAll = e.zip = e.withLatestFrom = e.windowWhen = e.windowToggle = e.windowTime = e.windowCount = e.window = e.toArray = e.timestamp = e.timeoutWith = e.timeout = void 0;
  var t = Ln;
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
  var u = bo;
  Object.defineProperty(e, "bufferWhen", { enumerable: !0, get: function() {
    return u.bufferWhen;
  } });
  var c = go;
  Object.defineProperty(e, "catchError", { enumerable: !0, get: function() {
    return c.catchError;
  } });
  var s = Oo;
  Object.defineProperty(e, "combineAll", { enumerable: !0, get: function() {
    return s.combineAll;
  } });
  var l = Fn;
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
  var O = Ro;
  Object.defineProperty(e, "concat", { enumerable: !0, get: function() {
    return O.concat;
  } });
  var E = Gt;
  Object.defineProperty(e, "concatAll", { enumerable: !0, get: function() {
    return E.concatAll;
  } });
  var T = xn;
  Object.defineProperty(e, "concatMap", { enumerable: !0, get: function() {
    return T.concatMap;
  } });
  var C = Po;
  Object.defineProperty(e, "concatMapTo", { enumerable: !0, get: function() {
    return C.concatMapTo;
  } });
  var A = Io;
  Object.defineProperty(e, "concatWith", { enumerable: !0, get: function() {
    return A.concatWith;
  } });
  var $ = Zt;
  Object.defineProperty(e, "connect", { enumerable: !0, get: function() {
    return $.connect;
  } });
  var U = Ao;
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
  var G = vt;
  Object.defineProperty(e, "defaultIfEmpty", { enumerable: !0, get: function() {
    return G.defaultIfEmpty;
  } });
  var X = No;
  Object.defineProperty(e, "delay", { enumerable: !0, get: function() {
    return X.delay;
  } });
  var oe = Wn;
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
  var ge = Hn;
  Object.defineProperty(e, "distinctUntilChanged", { enumerable: !0, get: function() {
    return ge.distinctUntilChanged;
  } });
  var Ae = ko;
  Object.defineProperty(e, "distinctUntilKeyChanged", { enumerable: !0, get: function() {
    return Ae.distinctUntilKeyChanged;
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
  var re = zn;
  Object.defineProperty(e, "exhaustAll", { enumerable: !0, get: function() {
    return re.exhaustAll;
  } });
  var H = Yn;
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
  var K = xo;
  Object.defineProperty(e, "finalize", { enumerable: !0, get: function() {
    return K.finalize;
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
  var W = Vn;
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
  var Re = gr;
  Object.defineProperty(e, "map", { enumerable: !0, get: function() {
    return Re.map;
  } });
  var He = qn;
  Object.defineProperty(e, "mapTo", { enumerable: !0, get: function() {
    return He.mapTo;
  } });
  var ir = Yo;
  Object.defineProperty(e, "materialize", { enumerable: !0, get: function() {
    return ir.materialize;
  } });
  var er = Go;
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
  var bt = Ko;
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
  var g = aa;
  Object.defineProperty(e, "publishReplay", { enumerable: !0, get: function() {
    return g.publishReplay;
  } });
  var S = Ls;
  Object.defineProperty(e, "race", { enumerable: !0, get: function() {
    return S.race;
  } });
  var R = Kn;
  Object.defineProperty(e, "raceWith", { enumerable: !0, get: function() {
    return R.raceWith;
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
  var wc = Zn;
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
  var Pc = Qn;
  Object.defineProperty(e, "share", { enumerable: !0, get: function() {
    return Pc.share;
  } });
  var Ic = va;
  Object.defineProperty(e, "shareReplay", { enumerable: !0, get: function() {
    return Ic.shareReplay;
  } });
  var Rc = _a;
  Object.defineProperty(e, "single", { enumerable: !0, get: function() {
    return Rc.single;
  } });
  var Ac = pa;
  Object.defineProperty(e, "skip", { enumerable: !0, get: function() {
    return Ac.skip;
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
  var Bc = Gn;
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
  var Gc = ji;
  Object.defineProperty(e, "timeout", { enumerable: !0, get: function() {
    return Gc.timeout;
  } });
  var Kc = Ra;
  Object.defineProperty(e, "timeoutWith", { enumerable: !0, get: function() {
    return Kc.timeoutWith;
  } });
  var Zc = Aa;
  Object.defineProperty(e, "timestamp", { enumerable: !0, get: function() {
    return Zc.timestamp;
  } });
  var Qc = Bn;
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
var Jn = {}, fn = d && d.__awaiter || function(e, t, r, n) {
  function i(o) {
    return o instanceof r ? o : new r(function(a) {
      a(o);
    });
  }
  return new (r || (r = Promise))(function(o, a) {
    function u(l) {
      try {
        s(n.next(l));
      } catch (v) {
        a(v);
      }
    }
    function c(l) {
      try {
        s(n.throw(l));
      } catch (v) {
        a(v);
      }
    }
    function s(l) {
      l.done ? o(l.value) : i(l.value).then(u, c);
    }
    s((n = n.apply(e, t || [])).next());
  });
}, dn = d && d.__generator || function(e, t) {
  var r = { label: 0, sent: function() {
    if (o[0] & 1)
      throw o[1];
    return o[1];
  }, trys: [], ops: [] }, n, i, o, a;
  return a = { next: u(0), throw: u(1), return: u(2) }, typeof Symbol == "function" && (a[Symbol.iterator] = function() {
    return this;
  }), a;
  function u(s) {
    return function(l) {
      return c([s, l]);
    };
  }
  function c(s) {
    if (n)
      throw new TypeError("Generator is already executing.");
    for (; a && (a = 0, s[0] && (r = 0)), r; )
      try {
        if (n = 1, i && (o = s[0] & 2 ? i.return : s[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, s[1])).done)
          return o;
        switch (i = 0, o && (s = [s[0] & 2, o.value]), s[0]) {
          case 0:
          case 1:
            o = s;
            break;
          case 4:
            return r.label++, { value: s[1], done: !1 };
          case 5:
            r.label++, i = s[1], s = [0];
            continue;
          case 7:
            s = r.ops.pop(), r.trys.pop();
            continue;
          default:
            if (o = r.trys, !(o = o.length > 0 && o[o.length - 1]) && (s[0] === 6 || s[0] === 2)) {
              r = 0;
              continue;
            }
            if (s[0] === 3 && (!o || s[1] > o[0] && s[1] < o[3])) {
              r.label = s[1];
              break;
            }
            if (s[0] === 6 && r.label < o[1]) {
              r.label = o[1], o = s;
              break;
            }
            if (o && r.label < o[2]) {
              r.label = o[2], r.ops.push(s);
              break;
            }
            o[2] && r.ops.pop(), r.trys.pop();
            continue;
        }
        s = t.call(e, r);
      } catch (l) {
        s = [6, l], i = 0;
      } finally {
        n = o = 0;
      }
    if (s[0] & 5)
      throw s[1];
    return { value: s[0] ? s[1] : void 0, done: !0 };
  }
};
Object.defineProperty(Jn, "__esModule", { value: !0 });
var uL = ee, Rt = Vi, St = Ds, di = {
  READY: 0,
  STREAMING: 1,
  COMPLETED: 2
}, sL = (
  /** @class */
  function() {
    function e(t, r) {
      var n = t.pipe((0, St.publishReplay)(1), (0, St.refCount)());
      this._result = n, this._keys = n.pipe((0, St.mergeMap)(function(i) {
        return (0, Rt.from)(i.keys());
      }), (0, St.publishReplay)(1), (0, St.refCount)()), this._records = void 0, this._controls = new zm(), this._summary = new Rt.ReplaySubject(), this._state = r || di.READY;
    }
    return e.prototype.keys = function() {
      return this._keys;
    }, e.prototype.records = function() {
      var t = this, r = this._result.pipe((0, St.mergeMap)(function(n) {
        return new Rt.Observable(function(i) {
          return t._startStreaming({ result: n, recordsObserver: i });
        });
      }));
      return r.push = function() {
        return t._push();
      }, r;
    }, e.prototype.consume = function() {
      var t = this;
      return this._result.pipe((0, St.mergeMap)(function(r) {
        return new Rt.Observable(function(n) {
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
      var r = t === void 0 ? {} : t, n = r.result, i = r.recordsObserver, o = i === void 0 ? null : i, a = r.summaryObserver, u = a === void 0 ? null : a, c = [];
      return u && c.push(this._summary.subscribe(u)), this._state < di.STREAMING ? (this._state = di.STREAMING, this._setupRecordsStream(n), o ? c.push(this._records.subscribe(o)) : n._cancel(), c.push({
        unsubscribe: function() {
          n._cancel && n._cancel();
        }
      })) : o && o.error((0, uL.newError)("Streaming has already started/consumed with a previous records or summary subscription.")), function() {
        c.forEach(function(s) {
          return s.unsubscribe();
        });
      };
    }, e.prototype._toObservable = function() {
      var t = this;
      function r(n) {
        return new Rt.Observable(function(i) {
          i.next(n), i.complete();
        });
      }
      return new Rt.Observable(function(n) {
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
      return this._records ? this._records : (this._records = cL(t[Symbol.asyncIterator](), {
        complete: function() {
          return fn(r, void 0, void 0, function() {
            var n, i;
            return dn(this, function(o) {
              switch (o.label) {
                case 0:
                  return this._state = di.COMPLETED, i = (n = this._summary).next, [4, t.summary()];
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
          r._state = di.COMPLETED, r._summary.error(n);
        }
      }, this._controls), this._records);
    }, e;
  }()
);
Jn.default = sL;
function cL(e, t, r) {
  var n = this;
  r === void 0 && (r = new zm());
  var i = new Rt.Subject(), o = function(u) {
    return fn(n, void 0, void 0, function() {
      var c, s, l, v;
      return dn(this, function(y) {
        switch (y.label) {
          case 0:
            return y.trys.push([0, 2, 3, 4]), r.pushing = !0, [4, u];
          case 1:
            return c = y.sent(), s = c.done, l = c.value, s ? (i.complete(), t.complete()) : (i.next(l), r.paused || o(e.next()).catch(function() {
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
  function a(u) {
    return fn(this, void 0, void 0, function() {
      return dn(this, function(c) {
        switch (c.label) {
          case 0:
            return [4, o(e.next(u))];
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
var zm = (
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
), Fa = {}, Ym = d && d.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(Fa, "__esModule", { value: !0 });
var nu = Vi, lL = Ym(Jn);
Ym(ee);
var fL = (
  /** @class */
  function() {
    function e(t) {
      this._txc = t;
    }
    return e.prototype.run = function(t, r) {
      var n = this;
      return new lL.default(new nu.Observable(function(i) {
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
Fa.default = fL;
var Fs = {}, Gm = d && d.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(Fs, "__esModule", { value: !0 });
Gm(Jn);
Gm(Fa);
var dL = (
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
Fs.default = dL;
var Gf = {};
Object.defineProperty(Gf, "__esModule", { value: !0 });
var Mu = ee, Al = Vi, Cl = Ds;
Mu.internal.logger.Logger;
var hL = Mu.error.SERVICE_UNAVAILABLE, Av = 30 * 1e3, Cv = 1e3, jv = 2, Nv = 0.2, vL = (
  /** @class */
  function() {
    function e(t) {
      var r = t === void 0 ? {} : t, n = r.maxRetryTimeout, i = n === void 0 ? Av : n, o = r.initialDelay, a = o === void 0 ? Cv : o, u = r.delayMultiplier, c = u === void 0 ? jv : u, s = r.delayJitter, l = s === void 0 ? Nv : s, v = r.logger, y = v === void 0 ? null : v;
      this._maxRetryTimeout = iu(i, Av), this._initialDelay = iu(a, Cv), this._delayMultiplier = iu(c, jv), this._delayJitter = iu(l, Nv), this._logger = y;
    }
    return e.prototype.retry = function(t) {
      var r = this;
      return t.pipe((0, Cl.retryWhen)(function(n) {
        var i = [], o = Date.now(), a = 1, u = r._initialDelay;
        return n.pipe((0, Cl.mergeMap)(function(c) {
          if (!(0, Mu.isRetriableError)(c))
            return (0, Al.throwError)(function() {
              return c;
            });
          if (i.push(c), a >= 2 && Date.now() - o >= r._maxRetryTimeout) {
            var s = (0, Mu.newError)("Failed after retried for ".concat(a, " times in ").concat(r._maxRetryTimeout, " ms. Make sure that your database is online and retry again."), hL);
            return s.seenErrors = i, (0, Al.throwError)(function() {
              return s;
            });
          }
          var l = r._computeNextDelay(u);
          return u = u * r._delayMultiplier, a++, r._logger && r._logger.warn("Transaction failed and will be retried in ".concat(l)), (0, Al.of)(1).pipe((0, Cl.delay)(l));
        }));
      }));
    }, e.prototype._computeNextDelay = function(t) {
      var r = t * this._delayJitter;
      return t - r + 2 * r * Math.random();
    }, e;
  }()
);
Gf.default = vL;
function iu(e, t) {
  return e || e === 0 ? e : t;
}
var Bs = d && d.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(ts, "__esModule", { value: !0 });
var on = Vi, ou = Ds, _L = Bs(Jn), Km = ee, pL = Bs(Fa), mL = Bs(Fs), yL = Bs(Gf), Zm = Km.internal.constants, $v = Zm.ACCESS_MODE_READ, Mv = Zm.ACCESS_MODE_WRITE, au = Km.internal.txConfig.TxConfig, bL = (
  /** @class */
  function() {
    function e(t) {
      var r = t === void 0 ? {} : t, n = r.session, i = r.config;
      this._session = n, this._retryLogic = gL(i);
    }
    return e.prototype.run = function(t, r, n) {
      var i = this;
      return new _L.default(new on.Observable(function(o) {
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
      return this._runTransaction($v, t, r);
    }, e.prototype.writeTransaction = function(t, r) {
      return this._runTransaction(Mv, t, r);
    }, e.prototype.executeRead = function(t, r) {
      return this._executeInTransaction($v, t, r);
    }, e.prototype.executeWrite = function(t, r) {
      return this._executeInTransaction(Mv, t, r);
    }, e.prototype._executeInTransaction = function(t, r, n) {
      var i = function(o) {
        return new mL.default({
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
            o.next(new pL.default(a)), o.complete();
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
          } catch (u) {
            return (0, on.throwError)(function() {
              return u;
            });
          }
        }).pipe((0, ou.catchError)(function(u) {
          return a.rollback().pipe((0, ou.concatWith)((0, on.throwError)(function() {
            return u;
          })));
        }), (0, ou.concatWith)(a.commit()));
      })));
    }, e;
  }()
);
ts.default = bL;
function gL(e) {
  var t = e && e.maxTransactionRetryTime ? e.maxTransactionRetryTime : null;
  return new yL.default({ maxRetryTimeout: t });
}
var OL = d && d.__extends || function() {
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
}(), wL = d && d.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(Fr, "__esModule", { value: !0 });
Fr.WRITE = Fr.READ = Fr.Driver = void 0;
var xs = ee, EL = wL(ts), kv = xs.internal.constants.FETCH_ALL, SL = xs.driver.READ, Qm = xs.driver.WRITE;
Fr.READ = SL;
Fr.WRITE = Qm;
var Jm = (
  /** @class */
  function(e) {
    OL(t, e);
    function t() {
      return e !== null && e.apply(this, arguments) || this;
    }
    return t.prototype.rxSession = function(r) {
      var n = r === void 0 ? {} : r, i = n.defaultAccessMode, o = i === void 0 ? Qm : i, a = n.bookmarks, u = n.database, c = u === void 0 ? "" : u, s = n.fetchSize, l = n.impersonatedUser, v = n.bookmarkManager;
      return new EL.default({
        session: this._newSession({
          defaultAccessMode: o,
          bookmarkOrBookmarks: a,
          database: c,
          impersonatedUser: l,
          reactive: !1,
          fetchSize: TL(s, this._config.fetchSize),
          bookmarkManager: v
        }),
        config: this._config
      });
    }, t;
  }(xs.Driver)
);
Fr.Driver = Jm;
function TL(e, t) {
  var r = parseInt(e, 10);
  if (r > 0 || r === kv)
    return r;
  if (r === 0 || r < 0)
    throw new Error("The fetch size can only be a positive value or ".concat(kv, " for ALL. However fetchSize = ").concat(r));
  return t;
}
Fr.default = Jm;
var Kf = {};
Object.defineProperty(Kf, "__esModule", { value: !0 });
Kf.default = "5.5.0";
var Xm = {}, nt = {}, Ws = {};
Object.defineProperty(Ws, "__esModule", { value: !0 });
var PL = (
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
Ws.default = PL;
var Zf = {}, Qf = {};
Object.defineProperty(Qf, "__esModule", { value: !0 });
var IL = (
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
Qf.default = IL;
var RL = d && d.__extends || function() {
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
}(), ey = d && d.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(Zf, "__esModule", { value: !0 });
var Dv = ey(Qf), AL = ey(Ws), CL = (
  /** @class */
  function(e) {
    RL(t, e);
    function t(r) {
      var n = e.call(this) || this;
      return n._readersIndex = new Dv.default(), n._writersIndex = new Dv.default(), n._connectionPool = r, n;
    }
    return t.prototype.selectReader = function(r) {
      return this._select(r, this._readersIndex);
    }, t.prototype.selectWriter = function(r) {
      return this._select(r, this._writersIndex);
    }, t.prototype._select = function(r, n) {
      var i = r.length;
      if (i === 0)
        return null;
      var o = n.next(i), a = o, u = null, c = Number.MAX_SAFE_INTEGER;
      do {
        var s = r[a], l = this._connectionPool.activeResourceCount(s);
        l < c && (u = s, c = l), a === i - 1 ? a = 0 : a++;
      } while (a !== o);
      return u;
    }, t;
  }(AL.default)
);
Zf.default = CL;
var ry = d && d.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(nt, "__esModule", { value: !0 });
nt.LeastConnectedLoadBalancingStrategy = nt.LoadBalancingStrategy = void 0;
var jL = ry(Ws);
nt.LoadBalancingStrategy = jL.default;
var ty = ry(Zf);
nt.LeastConnectedLoadBalancingStrategy = ty.default;
nt.default = ty.default;
var Jf = {}, Xf = {}, Xn = {}, bn = {}, ed = {}, Hr = {}, rd = {}, Ba = {};
Ba.byteLength = ML;
Ba.toByteArray = DL;
Ba.fromByteArray = FL;
var Er = [], ar = [], NL = typeof Uint8Array < "u" ? Uint8Array : Array, jl = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for (var an = 0, $L = jl.length; an < $L; ++an)
  Er[an] = jl[an], ar[jl.charCodeAt(an)] = an;
ar["-".charCodeAt(0)] = 62;
ar["_".charCodeAt(0)] = 63;
function ny(e) {
  var t = e.length;
  if (t % 4 > 0)
    throw new Error("Invalid string. Length must be a multiple of 4");
  var r = e.indexOf("=");
  r === -1 && (r = t);
  var n = r === t ? 0 : 4 - r % 4;
  return [r, n];
}
function ML(e) {
  var t = ny(e), r = t[0], n = t[1];
  return (r + n) * 3 / 4 - n;
}
function kL(e, t, r) {
  return (t + r) * 3 / 4 - r;
}
function DL(e) {
  var t, r = ny(e), n = r[0], i = r[1], o = new NL(kL(e, n, i)), a = 0, u = i > 0 ? n - 4 : n, c;
  for (c = 0; c < u; c += 4)
    t = ar[e.charCodeAt(c)] << 18 | ar[e.charCodeAt(c + 1)] << 12 | ar[e.charCodeAt(c + 2)] << 6 | ar[e.charCodeAt(c + 3)], o[a++] = t >> 16 & 255, o[a++] = t >> 8 & 255, o[a++] = t & 255;
  return i === 2 && (t = ar[e.charCodeAt(c)] << 2 | ar[e.charCodeAt(c + 1)] >> 4, o[a++] = t & 255), i === 1 && (t = ar[e.charCodeAt(c)] << 10 | ar[e.charCodeAt(c + 1)] << 4 | ar[e.charCodeAt(c + 2)] >> 2, o[a++] = t >> 8 & 255, o[a++] = t & 255), o;
}
function UL(e) {
  return Er[e >> 18 & 63] + Er[e >> 12 & 63] + Er[e >> 6 & 63] + Er[e & 63];
}
function LL(e, t, r) {
  for (var n, i = [], o = t; o < r; o += 3)
    n = (e[o] << 16 & 16711680) + (e[o + 1] << 8 & 65280) + (e[o + 2] & 255), i.push(UL(n));
  return i.join("");
}
function FL(e) {
  for (var t, r = e.length, n = r % 3, i = [], o = 16383, a = 0, u = r - n; a < u; a += o)
    i.push(LL(e, a, a + o > u ? u : a + o));
  return n === 1 ? (t = e[r - 1], i.push(
    Er[t >> 2] + Er[t << 4 & 63] + "=="
  )) : n === 2 && (t = (e[r - 2] << 8) + e[r - 1], i.push(
    Er[t >> 10] + Er[t >> 4 & 63] + Er[t << 2 & 63] + "="
  )), i.join("");
}
var Vs = {};
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
Vs.read = function(e, t, r, n, i) {
  var o, a, u = i * 8 - n - 1, c = (1 << u) - 1, s = c >> 1, l = -7, v = r ? i - 1 : 0, y = r ? -1 : 1, O = e[t + v];
  for (v += y, o = O & (1 << -l) - 1, O >>= -l, l += u; l > 0; o = o * 256 + e[t + v], v += y, l -= 8)
    ;
  for (a = o & (1 << -l) - 1, o >>= -l, l += n; l > 0; a = a * 256 + e[t + v], v += y, l -= 8)
    ;
  if (o === 0)
    o = 1 - s;
  else {
    if (o === c)
      return a ? NaN : (O ? -1 : 1) * (1 / 0);
    a = a + Math.pow(2, n), o = o - s;
  }
  return (O ? -1 : 1) * a * Math.pow(2, o - n);
};
Vs.write = function(e, t, r, n, i, o) {
  var a, u, c, s = o * 8 - i - 1, l = (1 << s) - 1, v = l >> 1, y = i === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, O = n ? 0 : o - 1, E = n ? 1 : -1, T = t < 0 || t === 0 && 1 / t < 0 ? 1 : 0;
  for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (u = isNaN(t) ? 1 : 0, a = l) : (a = Math.floor(Math.log(t) / Math.LN2), t * (c = Math.pow(2, -a)) < 1 && (a--, c *= 2), a + v >= 1 ? t += y / c : t += y * Math.pow(2, 1 - v), t * c >= 2 && (a++, c /= 2), a + v >= l ? (u = 0, a = l) : a + v >= 1 ? (u = (t * c - 1) * Math.pow(2, i), a = a + v) : (u = t * Math.pow(2, v - 1) * Math.pow(2, i), a = 0)); i >= 8; e[r + O] = u & 255, O += E, u /= 256, i -= 8)
    ;
  for (a = a << i | u, s += i; s > 0; e[r + O] = a & 255, O += E, a /= 256, s -= 8)
    ;
  e[r + O - E] |= T * 128;
};
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
(function(e) {
  const t = Ba, r = Vs, n = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
  e.Buffer = u, e.SlowBuffer = $, e.INSPECT_MAX_BYTES = 50;
  const i = 2147483647;
  e.kMaxLength = i, u.TYPED_ARRAY_SUPPORT = o(), !u.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error(
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
  Object.defineProperty(u.prototype, "parent", {
    enumerable: !0,
    get: function() {
      if (u.isBuffer(this))
        return this.buffer;
    }
  }), Object.defineProperty(u.prototype, "offset", {
    enumerable: !0,
    get: function() {
      if (u.isBuffer(this))
        return this.byteOffset;
    }
  });
  function a(m) {
    if (m > i)
      throw new RangeError('The value "' + m + '" is invalid for option "size"');
    const f = new Uint8Array(m);
    return Object.setPrototypeOf(f, u.prototype), f;
  }
  function u(m, f, h) {
    if (typeof m == "number") {
      if (typeof f == "string")
        throw new TypeError(
          'The "string" argument must be of type string. Received type number'
        );
      return v(m);
    }
    return c(m, f, h);
  }
  u.poolSize = 8192;
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
      return T(m, f, h);
    if (typeof m == "number")
      throw new TypeError(
        'The "value" argument must not be of type number. Received type number'
      );
    const g = m.valueOf && m.valueOf();
    if (g != null && g !== m)
      return u.from(g, f, h);
    const S = C(m);
    if (S)
      return S;
    if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof m[Symbol.toPrimitive] == "function")
      return u.from(m[Symbol.toPrimitive]("string"), f, h);
    throw new TypeError(
      "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof m
    );
  }
  u.from = function(m, f, h) {
    return c(m, f, h);
  }, Object.setPrototypeOf(u.prototype, Uint8Array.prototype), Object.setPrototypeOf(u, Uint8Array);
  function s(m) {
    if (typeof m != "number")
      throw new TypeError('"size" argument must be of type number');
    if (m < 0)
      throw new RangeError('The value "' + m + '" is invalid for option "size"');
  }
  function l(m, f, h) {
    return s(m), m <= 0 ? a(m) : f !== void 0 ? typeof h == "string" ? a(m).fill(f, h) : a(m).fill(f) : a(m);
  }
  u.alloc = function(m, f, h) {
    return l(m, f, h);
  };
  function v(m) {
    return s(m), a(m < 0 ? 0 : A(m) | 0);
  }
  u.allocUnsafe = function(m) {
    return v(m);
  }, u.allocUnsafeSlow = function(m) {
    return v(m);
  };
  function y(m, f) {
    if ((typeof f != "string" || f === "") && (f = "utf8"), !u.isEncoding(f))
      throw new TypeError("Unknown encoding: " + f);
    const h = U(m, f) | 0;
    let g = a(h);
    const S = g.write(m, f);
    return S !== h && (g = g.slice(0, S)), g;
  }
  function O(m) {
    const f = m.length < 0 ? 0 : A(m.length) | 0, h = a(f);
    for (let g = 0; g < f; g += 1)
      h[g] = m[g] & 255;
    return h;
  }
  function E(m) {
    if (L(m, Uint8Array)) {
      const f = new Uint8Array(m);
      return T(f.buffer, f.byteOffset, f.byteLength);
    }
    return O(m);
  }
  function T(m, f, h) {
    if (f < 0 || m.byteLength < f)
      throw new RangeError('"offset" is outside of buffer bounds');
    if (m.byteLength < f + (h || 0))
      throw new RangeError('"length" is outside of buffer bounds');
    let g;
    return f === void 0 && h === void 0 ? g = new Uint8Array(m) : h === void 0 ? g = new Uint8Array(m, f) : g = new Uint8Array(m, f, h), Object.setPrototypeOf(g, u.prototype), g;
  }
  function C(m) {
    if (u.isBuffer(m)) {
      const f = A(m.length) | 0, h = a(f);
      return h.length === 0 || m.copy(h, 0, 0, f), h;
    }
    if (m.length !== void 0)
      return typeof m.length != "number" || ne(m.length) ? a(0) : O(m);
    if (m.type === "Buffer" && Array.isArray(m.data))
      return O(m.data);
  }
  function A(m) {
    if (m >= i)
      throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + i.toString(16) + " bytes");
    return m | 0;
  }
  function $(m) {
    return +m != m && (m = 0), u.alloc(+m);
  }
  u.isBuffer = function(f) {
    return f != null && f._isBuffer === !0 && f !== u.prototype;
  }, u.compare = function(f, h) {
    if (L(f, Uint8Array) && (f = u.from(f, f.offset, f.byteLength)), L(h, Uint8Array) && (h = u.from(h, h.offset, h.byteLength)), !u.isBuffer(f) || !u.isBuffer(h))
      throw new TypeError(
        'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
      );
    if (f === h)
      return 0;
    let g = f.length, S = h.length;
    for (let R = 0, j = Math.min(g, S); R < j; ++R)
      if (f[R] !== h[R]) {
        g = f[R], S = h[R];
        break;
      }
    return g < S ? -1 : S < g ? 1 : 0;
  }, u.isEncoding = function(f) {
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
  }, u.concat = function(f, h) {
    if (!Array.isArray(f))
      throw new TypeError('"list" argument must be an Array of Buffers');
    if (f.length === 0)
      return u.alloc(0);
    let g;
    if (h === void 0)
      for (h = 0, g = 0; g < f.length; ++g)
        h += f[g].length;
    const S = u.allocUnsafe(h);
    let R = 0;
    for (g = 0; g < f.length; ++g) {
      let j = f[g];
      if (L(j, Uint8Array))
        R + j.length > S.length ? (u.isBuffer(j) || (j = u.from(j)), j.copy(S, R)) : Uint8Array.prototype.set.call(
          S,
          j,
          R
        );
      else if (u.isBuffer(j))
        j.copy(S, R);
      else
        throw new TypeError('"list" argument must be an Array of Buffers');
      R += j.length;
    }
    return S;
  };
  function U(m, f) {
    if (u.isBuffer(m))
      return m.length;
    if (ArrayBuffer.isView(m) || L(m, ArrayBuffer))
      return m.byteLength;
    if (typeof m != "string")
      throw new TypeError(
        'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof m
      );
    const h = m.length, g = arguments.length > 2 && arguments[2] === !0;
    if (!g && h === 0)
      return 0;
    let S = !1;
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
          if (S)
            return g ? -1 : _(m).length;
          f = ("" + f).toLowerCase(), S = !0;
      }
  }
  u.byteLength = U;
  function D(m, f, h) {
    let g = !1;
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
          if (g)
            throw new TypeError("Unknown encoding: " + m);
          m = (m + "").toLowerCase(), g = !0;
      }
  }
  u.prototype._isBuffer = !0;
  function F(m, f, h) {
    const g = m[f];
    m[f] = m[h], m[h] = g;
  }
  u.prototype.swap16 = function() {
    const f = this.length;
    if (f % 2 !== 0)
      throw new RangeError("Buffer size must be a multiple of 16-bits");
    for (let h = 0; h < f; h += 2)
      F(this, h, h + 1);
    return this;
  }, u.prototype.swap32 = function() {
    const f = this.length;
    if (f % 4 !== 0)
      throw new RangeError("Buffer size must be a multiple of 32-bits");
    for (let h = 0; h < f; h += 4)
      F(this, h, h + 3), F(this, h + 1, h + 2);
    return this;
  }, u.prototype.swap64 = function() {
    const f = this.length;
    if (f % 8 !== 0)
      throw new RangeError("Buffer size must be a multiple of 64-bits");
    for (let h = 0; h < f; h += 8)
      F(this, h, h + 7), F(this, h + 1, h + 6), F(this, h + 2, h + 5), F(this, h + 3, h + 4);
    return this;
  }, u.prototype.toString = function() {
    const f = this.length;
    return f === 0 ? "" : arguments.length === 0 ? se(this, 0, f) : D.apply(this, arguments);
  }, u.prototype.toLocaleString = u.prototype.toString, u.prototype.equals = function(f) {
    if (!u.isBuffer(f))
      throw new TypeError("Argument must be a Buffer");
    return this === f ? !0 : u.compare(this, f) === 0;
  }, u.prototype.inspect = function() {
    let f = "";
    const h = e.INSPECT_MAX_BYTES;
    return f = this.toString("hex", 0, h).replace(/(.{2})/g, "$1 ").trim(), this.length > h && (f += " ... "), "<Buffer " + f + ">";
  }, n && (u.prototype[n] = u.prototype.inspect), u.prototype.compare = function(f, h, g, S, R) {
    if (L(f, Uint8Array) && (f = u.from(f, f.offset, f.byteLength)), !u.isBuffer(f))
      throw new TypeError(
        'The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof f
      );
    if (h === void 0 && (h = 0), g === void 0 && (g = f ? f.length : 0), S === void 0 && (S = 0), R === void 0 && (R = this.length), h < 0 || g > f.length || S < 0 || R > this.length)
      throw new RangeError("out of range index");
    if (S >= R && h >= g)
      return 0;
    if (S >= R)
      return -1;
    if (h >= g)
      return 1;
    if (h >>>= 0, g >>>= 0, S >>>= 0, R >>>= 0, this === f)
      return 0;
    let j = R - S, te = g - h;
    const Ee = Math.min(j, te), ye = this.slice(S, R), Se = f.slice(h, g);
    for (let ve = 0; ve < Ee; ++ve)
      if (ye[ve] !== Se[ve]) {
        j = ye[ve], te = Se[ve];
        break;
      }
    return j < te ? -1 : te < j ? 1 : 0;
  };
  function G(m, f, h, g, S) {
    if (m.length === 0)
      return -1;
    if (typeof h == "string" ? (g = h, h = 0) : h > 2147483647 ? h = 2147483647 : h < -2147483648 && (h = -2147483648), h = +h, ne(h) && (h = S ? 0 : m.length - 1), h < 0 && (h = m.length + h), h >= m.length) {
      if (S)
        return -1;
      h = m.length - 1;
    } else if (h < 0)
      if (S)
        h = 0;
      else
        return -1;
    if (typeof f == "string" && (f = u.from(f, g)), u.isBuffer(f))
      return f.length === 0 ? -1 : X(m, f, h, g, S);
    if (typeof f == "number")
      return f = f & 255, typeof Uint8Array.prototype.indexOf == "function" ? S ? Uint8Array.prototype.indexOf.call(m, f, h) : Uint8Array.prototype.lastIndexOf.call(m, f, h) : X(m, [f], h, g, S);
    throw new TypeError("val must be string, number or Buffer");
  }
  function X(m, f, h, g, S) {
    let R = 1, j = m.length, te = f.length;
    if (g !== void 0 && (g = String(g).toLowerCase(), g === "ucs2" || g === "ucs-2" || g === "utf16le" || g === "utf-16le")) {
      if (m.length < 2 || f.length < 2)
        return -1;
      R = 2, j /= 2, te /= 2, h /= 2;
    }
    function Ee(Se, ve) {
      return R === 1 ? Se[ve] : Se.readUInt16BE(ve * R);
    }
    let ye;
    if (S) {
      let Se = -1;
      for (ye = h; ye < j; ye++)
        if (Ee(m, ye) === Ee(f, Se === -1 ? 0 : ye - Se)) {
          if (Se === -1 && (Se = ye), ye - Se + 1 === te)
            return Se * R;
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
  u.prototype.includes = function(f, h, g) {
    return this.indexOf(f, h, g) !== -1;
  }, u.prototype.indexOf = function(f, h, g) {
    return G(this, f, h, g, !0);
  }, u.prototype.lastIndexOf = function(f, h, g) {
    return G(this, f, h, g, !1);
  };
  function oe(m, f, h, g) {
    h = Number(h) || 0;
    const S = m.length - h;
    g ? (g = Number(g), g > S && (g = S)) : g = S;
    const R = f.length;
    g > R / 2 && (g = R / 2);
    let j;
    for (j = 0; j < g; ++j) {
      const te = parseInt(f.substr(j * 2, 2), 16);
      if (ne(te))
        return j;
      m[h + j] = te;
    }
    return j;
  }
  function de(m, f, h, g) {
    return k(_(f, m.length - h), m, h, g);
  }
  function Ie(m, f, h, g) {
    return k(p(f), m, h, g);
  }
  function ge(m, f, h, g) {
    return k(P(f), m, h, g);
  }
  function Ae(m, f, h, g) {
    return k(w(f, m.length - h), m, h, g);
  }
  u.prototype.write = function(f, h, g, S) {
    if (h === void 0)
      S = "utf8", g = this.length, h = 0;
    else if (g === void 0 && typeof h == "string")
      S = h, g = this.length, h = 0;
    else if (isFinite(h))
      h = h >>> 0, isFinite(g) ? (g = g >>> 0, S === void 0 && (S = "utf8")) : (S = g, g = void 0);
    else
      throw new Error(
        "Buffer.write(string, encoding, offset[, length]) is no longer supported"
      );
    const R = this.length - h;
    if ((g === void 0 || g > R) && (g = R), f.length > 0 && (g < 0 || h < 0) || h > this.length)
      throw new RangeError("Attempt to write outside buffer bounds");
    S || (S = "utf8");
    let j = !1;
    for (; ; )
      switch (S) {
        case "hex":
          return oe(this, f, h, g);
        case "utf8":
        case "utf-8":
          return de(this, f, h, g);
        case "ascii":
        case "latin1":
        case "binary":
          return Ie(this, f, h, g);
        case "base64":
          return ge(this, f, h, g);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return Ae(this, f, h, g);
        default:
          if (j)
            throw new TypeError("Unknown encoding: " + S);
          S = ("" + S).toLowerCase(), j = !0;
      }
  }, u.prototype.toJSON = function() {
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
    const g = [];
    let S = f;
    for (; S < h; ) {
      const R = m[S];
      let j = null, te = R > 239 ? 4 : R > 223 ? 3 : R > 191 ? 2 : 1;
      if (S + te <= h) {
        let Ee, ye, Se, ve;
        switch (te) {
          case 1:
            R < 128 && (j = R);
            break;
          case 2:
            Ee = m[S + 1], (Ee & 192) === 128 && (ve = (R & 31) << 6 | Ee & 63, ve > 127 && (j = ve));
            break;
          case 3:
            Ee = m[S + 1], ye = m[S + 2], (Ee & 192) === 128 && (ye & 192) === 128 && (ve = (R & 15) << 12 | (Ee & 63) << 6 | ye & 63, ve > 2047 && (ve < 55296 || ve > 57343) && (j = ve));
            break;
          case 4:
            Ee = m[S + 1], ye = m[S + 2], Se = m[S + 3], (Ee & 192) === 128 && (ye & 192) === 128 && (Se & 192) === 128 && (ve = (R & 15) << 18 | (Ee & 63) << 12 | (ye & 63) << 6 | Se & 63, ve > 65535 && ve < 1114112 && (j = ve));
        }
      }
      j === null ? (j = 65533, te = 1) : j > 65535 && (j -= 65536, g.push(j >>> 10 & 1023 | 55296), j = 56320 | j & 1023), g.push(j), S += te;
    }
    return J(g);
  }
  const V = 4096;
  function J(m) {
    const f = m.length;
    if (f <= V)
      return String.fromCharCode.apply(String, m);
    let h = "", g = 0;
    for (; g < f; )
      h += String.fromCharCode.apply(
        String,
        m.slice(g, g += V)
      );
    return h;
  }
  function re(m, f, h) {
    let g = "";
    h = Math.min(m.length, h);
    for (let S = f; S < h; ++S)
      g += String.fromCharCode(m[S] & 127);
    return g;
  }
  function H(m, f, h) {
    let g = "";
    h = Math.min(m.length, h);
    for (let S = f; S < h; ++S)
      g += String.fromCharCode(m[S]);
    return g;
  }
  function ce(m, f, h) {
    const g = m.length;
    (!f || f < 0) && (f = 0), (!h || h < 0 || h > g) && (h = g);
    let S = "";
    for (let R = f; R < h; ++R)
      S += le[m[R]];
    return S;
  }
  function Ne(m, f, h) {
    const g = m.slice(f, h);
    let S = "";
    for (let R = 0; R < g.length - 1; R += 2)
      S += String.fromCharCode(g[R] + g[R + 1] * 256);
    return S;
  }
  u.prototype.slice = function(f, h) {
    const g = this.length;
    f = ~~f, h = h === void 0 ? g : ~~h, f < 0 ? (f += g, f < 0 && (f = 0)) : f > g && (f = g), h < 0 ? (h += g, h < 0 && (h = 0)) : h > g && (h = g), h < f && (h = f);
    const S = this.subarray(f, h);
    return Object.setPrototypeOf(S, u.prototype), S;
  };
  function K(m, f, h) {
    if (m % 1 !== 0 || m < 0)
      throw new RangeError("offset is not uint");
    if (m + f > h)
      throw new RangeError("Trying to access beyond buffer length");
  }
  u.prototype.readUintLE = u.prototype.readUIntLE = function(f, h, g) {
    f = f >>> 0, h = h >>> 0, g || K(f, h, this.length);
    let S = this[f], R = 1, j = 0;
    for (; ++j < h && (R *= 256); )
      S += this[f + j] * R;
    return S;
  }, u.prototype.readUintBE = u.prototype.readUIntBE = function(f, h, g) {
    f = f >>> 0, h = h >>> 0, g || K(f, h, this.length);
    let S = this[f + --h], R = 1;
    for (; h > 0 && (R *= 256); )
      S += this[f + --h] * R;
    return S;
  }, u.prototype.readUint8 = u.prototype.readUInt8 = function(f, h) {
    return f = f >>> 0, h || K(f, 1, this.length), this[f];
  }, u.prototype.readUint16LE = u.prototype.readUInt16LE = function(f, h) {
    return f = f >>> 0, h || K(f, 2, this.length), this[f] | this[f + 1] << 8;
  }, u.prototype.readUint16BE = u.prototype.readUInt16BE = function(f, h) {
    return f = f >>> 0, h || K(f, 2, this.length), this[f] << 8 | this[f + 1];
  }, u.prototype.readUint32LE = u.prototype.readUInt32LE = function(f, h) {
    return f = f >>> 0, h || K(f, 4, this.length), (this[f] | this[f + 1] << 8 | this[f + 2] << 16) + this[f + 3] * 16777216;
  }, u.prototype.readUint32BE = u.prototype.readUInt32BE = function(f, h) {
    return f = f >>> 0, h || K(f, 4, this.length), this[f] * 16777216 + (this[f + 1] << 16 | this[f + 2] << 8 | this[f + 3]);
  }, u.prototype.readBigUInt64LE = ie(function(f) {
    f = f >>> 0, $e(f, "offset");
    const h = this[f], g = this[f + 7];
    (h === void 0 || g === void 0) && rr(f, this.length - 8);
    const S = h + this[++f] * 2 ** 8 + this[++f] * 2 ** 16 + this[++f] * 2 ** 24, R = this[++f] + this[++f] * 2 ** 8 + this[++f] * 2 ** 16 + g * 2 ** 24;
    return BigInt(S) + (BigInt(R) << BigInt(32));
  }), u.prototype.readBigUInt64BE = ie(function(f) {
    f = f >>> 0, $e(f, "offset");
    const h = this[f], g = this[f + 7];
    (h === void 0 || g === void 0) && rr(f, this.length - 8);
    const S = h * 2 ** 24 + this[++f] * 2 ** 16 + this[++f] * 2 ** 8 + this[++f], R = this[++f] * 2 ** 24 + this[++f] * 2 ** 16 + this[++f] * 2 ** 8 + g;
    return (BigInt(S) << BigInt(32)) + BigInt(R);
  }), u.prototype.readIntLE = function(f, h, g) {
    f = f >>> 0, h = h >>> 0, g || K(f, h, this.length);
    let S = this[f], R = 1, j = 0;
    for (; ++j < h && (R *= 256); )
      S += this[f + j] * R;
    return R *= 128, S >= R && (S -= Math.pow(2, 8 * h)), S;
  }, u.prototype.readIntBE = function(f, h, g) {
    f = f >>> 0, h = h >>> 0, g || K(f, h, this.length);
    let S = h, R = 1, j = this[f + --S];
    for (; S > 0 && (R *= 256); )
      j += this[f + --S] * R;
    return R *= 128, j >= R && (j -= Math.pow(2, 8 * h)), j;
  }, u.prototype.readInt8 = function(f, h) {
    return f = f >>> 0, h || K(f, 1, this.length), this[f] & 128 ? (255 - this[f] + 1) * -1 : this[f];
  }, u.prototype.readInt16LE = function(f, h) {
    f = f >>> 0, h || K(f, 2, this.length);
    const g = this[f] | this[f + 1] << 8;
    return g & 32768 ? g | 4294901760 : g;
  }, u.prototype.readInt16BE = function(f, h) {
    f = f >>> 0, h || K(f, 2, this.length);
    const g = this[f + 1] | this[f] << 8;
    return g & 32768 ? g | 4294901760 : g;
  }, u.prototype.readInt32LE = function(f, h) {
    return f = f >>> 0, h || K(f, 4, this.length), this[f] | this[f + 1] << 8 | this[f + 2] << 16 | this[f + 3] << 24;
  }, u.prototype.readInt32BE = function(f, h) {
    return f = f >>> 0, h || K(f, 4, this.length), this[f] << 24 | this[f + 1] << 16 | this[f + 2] << 8 | this[f + 3];
  }, u.prototype.readBigInt64LE = ie(function(f) {
    f = f >>> 0, $e(f, "offset");
    const h = this[f], g = this[f + 7];
    (h === void 0 || g === void 0) && rr(f, this.length - 8);
    const S = this[f + 4] + this[f + 5] * 2 ** 8 + this[f + 6] * 2 ** 16 + (g << 24);
    return (BigInt(S) << BigInt(32)) + BigInt(h + this[++f] * 2 ** 8 + this[++f] * 2 ** 16 + this[++f] * 2 ** 24);
  }), u.prototype.readBigInt64BE = ie(function(f) {
    f = f >>> 0, $e(f, "offset");
    const h = this[f], g = this[f + 7];
    (h === void 0 || g === void 0) && rr(f, this.length - 8);
    const S = (h << 24) + // Overflow
    this[++f] * 2 ** 16 + this[++f] * 2 ** 8 + this[++f];
    return (BigInt(S) << BigInt(32)) + BigInt(this[++f] * 2 ** 24 + this[++f] * 2 ** 16 + this[++f] * 2 ** 8 + g);
  }), u.prototype.readFloatLE = function(f, h) {
    return f = f >>> 0, h || K(f, 4, this.length), r.read(this, f, !0, 23, 4);
  }, u.prototype.readFloatBE = function(f, h) {
    return f = f >>> 0, h || K(f, 4, this.length), r.read(this, f, !1, 23, 4);
  }, u.prototype.readDoubleLE = function(f, h) {
    return f = f >>> 0, h || K(f, 8, this.length), r.read(this, f, !0, 52, 8);
  }, u.prototype.readDoubleBE = function(f, h) {
    return f = f >>> 0, h || K(f, 8, this.length), r.read(this, f, !1, 52, 8);
  };
  function B(m, f, h, g, S, R) {
    if (!u.isBuffer(m))
      throw new TypeError('"buffer" argument must be a Buffer instance');
    if (f > S || f < R)
      throw new RangeError('"value" argument is out of bounds');
    if (h + g > m.length)
      throw new RangeError("Index out of range");
  }
  u.prototype.writeUintLE = u.prototype.writeUIntLE = function(f, h, g, S) {
    if (f = +f, h = h >>> 0, g = g >>> 0, !S) {
      const te = Math.pow(2, 8 * g) - 1;
      B(this, f, h, g, te, 0);
    }
    let R = 1, j = 0;
    for (this[h] = f & 255; ++j < g && (R *= 256); )
      this[h + j] = f / R & 255;
    return h + g;
  }, u.prototype.writeUintBE = u.prototype.writeUIntBE = function(f, h, g, S) {
    if (f = +f, h = h >>> 0, g = g >>> 0, !S) {
      const te = Math.pow(2, 8 * g) - 1;
      B(this, f, h, g, te, 0);
    }
    let R = g - 1, j = 1;
    for (this[h + R] = f & 255; --R >= 0 && (j *= 256); )
      this[h + R] = f / j & 255;
    return h + g;
  }, u.prototype.writeUint8 = u.prototype.writeUInt8 = function(f, h, g) {
    return f = +f, h = h >>> 0, g || B(this, f, h, 1, 255, 0), this[h] = f & 255, h + 1;
  }, u.prototype.writeUint16LE = u.prototype.writeUInt16LE = function(f, h, g) {
    return f = +f, h = h >>> 0, g || B(this, f, h, 2, 65535, 0), this[h] = f & 255, this[h + 1] = f >>> 8, h + 2;
  }, u.prototype.writeUint16BE = u.prototype.writeUInt16BE = function(f, h, g) {
    return f = +f, h = h >>> 0, g || B(this, f, h, 2, 65535, 0), this[h] = f >>> 8, this[h + 1] = f & 255, h + 2;
  }, u.prototype.writeUint32LE = u.prototype.writeUInt32LE = function(f, h, g) {
    return f = +f, h = h >>> 0, g || B(this, f, h, 4, 4294967295, 0), this[h + 3] = f >>> 24, this[h + 2] = f >>> 16, this[h + 1] = f >>> 8, this[h] = f & 255, h + 4;
  }, u.prototype.writeUint32BE = u.prototype.writeUInt32BE = function(f, h, g) {
    return f = +f, h = h >>> 0, g || B(this, f, h, 4, 4294967295, 0), this[h] = f >>> 24, this[h + 1] = f >>> 16, this[h + 2] = f >>> 8, this[h + 3] = f & 255, h + 4;
  };
  function Oe(m, f, h, g, S) {
    er(f, g, S, m, h, 7);
    let R = Number(f & BigInt(4294967295));
    m[h++] = R, R = R >> 8, m[h++] = R, R = R >> 8, m[h++] = R, R = R >> 8, m[h++] = R;
    let j = Number(f >> BigInt(32) & BigInt(4294967295));
    return m[h++] = j, j = j >> 8, m[h++] = j, j = j >> 8, m[h++] = j, j = j >> 8, m[h++] = j, h;
  }
  function I(m, f, h, g, S) {
    er(f, g, S, m, h, 7);
    let R = Number(f & BigInt(4294967295));
    m[h + 7] = R, R = R >> 8, m[h + 6] = R, R = R >> 8, m[h + 5] = R, R = R >> 8, m[h + 4] = R;
    let j = Number(f >> BigInt(32) & BigInt(4294967295));
    return m[h + 3] = j, j = j >> 8, m[h + 2] = j, j = j >> 8, m[h + 1] = j, j = j >> 8, m[h] = j, h + 8;
  }
  u.prototype.writeBigUInt64LE = ie(function(f, h = 0) {
    return Oe(this, f, h, BigInt(0), BigInt("0xffffffffffffffff"));
  }), u.prototype.writeBigUInt64BE = ie(function(f, h = 0) {
    return I(this, f, h, BigInt(0), BigInt("0xffffffffffffffff"));
  }), u.prototype.writeIntLE = function(f, h, g, S) {
    if (f = +f, h = h >>> 0, !S) {
      const Ee = Math.pow(2, 8 * g - 1);
      B(this, f, h, g, Ee - 1, -Ee);
    }
    let R = 0, j = 1, te = 0;
    for (this[h] = f & 255; ++R < g && (j *= 256); )
      f < 0 && te === 0 && this[h + R - 1] !== 0 && (te = 1), this[h + R] = (f / j >> 0) - te & 255;
    return h + g;
  }, u.prototype.writeIntBE = function(f, h, g, S) {
    if (f = +f, h = h >>> 0, !S) {
      const Ee = Math.pow(2, 8 * g - 1);
      B(this, f, h, g, Ee - 1, -Ee);
    }
    let R = g - 1, j = 1, te = 0;
    for (this[h + R] = f & 255; --R >= 0 && (j *= 256); )
      f < 0 && te === 0 && this[h + R + 1] !== 0 && (te = 1), this[h + R] = (f / j >> 0) - te & 255;
    return h + g;
  }, u.prototype.writeInt8 = function(f, h, g) {
    return f = +f, h = h >>> 0, g || B(this, f, h, 1, 127, -128), f < 0 && (f = 255 + f + 1), this[h] = f & 255, h + 1;
  }, u.prototype.writeInt16LE = function(f, h, g) {
    return f = +f, h = h >>> 0, g || B(this, f, h, 2, 32767, -32768), this[h] = f & 255, this[h + 1] = f >>> 8, h + 2;
  }, u.prototype.writeInt16BE = function(f, h, g) {
    return f = +f, h = h >>> 0, g || B(this, f, h, 2, 32767, -32768), this[h] = f >>> 8, this[h + 1] = f & 255, h + 2;
  }, u.prototype.writeInt32LE = function(f, h, g) {
    return f = +f, h = h >>> 0, g || B(this, f, h, 4, 2147483647, -2147483648), this[h] = f & 255, this[h + 1] = f >>> 8, this[h + 2] = f >>> 16, this[h + 3] = f >>> 24, h + 4;
  }, u.prototype.writeInt32BE = function(f, h, g) {
    return f = +f, h = h >>> 0, g || B(this, f, h, 4, 2147483647, -2147483648), f < 0 && (f = 4294967295 + f + 1), this[h] = f >>> 24, this[h + 1] = f >>> 16, this[h + 2] = f >>> 8, this[h + 3] = f & 255, h + 4;
  }, u.prototype.writeBigInt64LE = ie(function(f, h = 0) {
    return Oe(this, f, h, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  }), u.prototype.writeBigInt64BE = ie(function(f, h = 0) {
    return I(this, f, h, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  });
  function M(m, f, h, g, S, R) {
    if (h + g > m.length)
      throw new RangeError("Index out of range");
    if (h < 0)
      throw new RangeError("Index out of range");
  }
  function W(m, f, h, g, S) {
    return f = +f, h = h >>> 0, S || M(m, f, h, 4), r.write(m, f, h, g, 23, 4), h + 4;
  }
  u.prototype.writeFloatLE = function(f, h, g) {
    return W(this, f, h, !0, g);
  }, u.prototype.writeFloatBE = function(f, h, g) {
    return W(this, f, h, !1, g);
  };
  function z(m, f, h, g, S) {
    return f = +f, h = h >>> 0, S || M(m, f, h, 8), r.write(m, f, h, g, 52, 8), h + 8;
  }
  u.prototype.writeDoubleLE = function(f, h, g) {
    return z(this, f, h, !0, g);
  }, u.prototype.writeDoubleBE = function(f, h, g) {
    return z(this, f, h, !1, g);
  }, u.prototype.copy = function(f, h, g, S) {
    if (!u.isBuffer(f))
      throw new TypeError("argument should be a Buffer");
    if (g || (g = 0), !S && S !== 0 && (S = this.length), h >= f.length && (h = f.length), h || (h = 0), S > 0 && S < g && (S = g), S === g || f.length === 0 || this.length === 0)
      return 0;
    if (h < 0)
      throw new RangeError("targetStart out of bounds");
    if (g < 0 || g >= this.length)
      throw new RangeError("Index out of range");
    if (S < 0)
      throw new RangeError("sourceEnd out of bounds");
    S > this.length && (S = this.length), f.length - h < S - g && (S = f.length - h + g);
    const R = S - g;
    return this === f && typeof Uint8Array.prototype.copyWithin == "function" ? this.copyWithin(h, g, S) : Uint8Array.prototype.set.call(
      f,
      this.subarray(g, S),
      h
    ), R;
  }, u.prototype.fill = function(f, h, g, S) {
    if (typeof f == "string") {
      if (typeof h == "string" ? (S = h, h = 0, g = this.length) : typeof g == "string" && (S = g, g = this.length), S !== void 0 && typeof S != "string")
        throw new TypeError("encoding must be a string");
      if (typeof S == "string" && !u.isEncoding(S))
        throw new TypeError("Unknown encoding: " + S);
      if (f.length === 1) {
        const j = f.charCodeAt(0);
        (S === "utf8" && j < 128 || S === "latin1") && (f = j);
      }
    } else
      typeof f == "number" ? f = f & 255 : typeof f == "boolean" && (f = Number(f));
    if (h < 0 || this.length < h || this.length < g)
      throw new RangeError("Out of range index");
    if (g <= h)
      return this;
    h = h >>> 0, g = g === void 0 ? this.length : g >>> 0, f || (f = 0);
    let R;
    if (typeof f == "number")
      for (R = h; R < g; ++R)
        this[R] = f;
    else {
      const j = u.isBuffer(f) ? f : u.from(f, S), te = j.length;
      if (te === 0)
        throw new TypeError('The value "' + f + '" is invalid for argument "value"');
      for (R = 0; R < g - h; ++R)
        this[R + h] = j[R % te];
    }
    return this;
  };
  const Z = {};
  function Re(m, f, h) {
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
      set code(S) {
        Object.defineProperty(this, "code", {
          configurable: !0,
          enumerable: !0,
          value: S,
          writable: !0
        });
      }
      toString() {
        return `${this.name} [${m}]: ${this.message}`;
      }
    };
  }
  Re(
    "ERR_BUFFER_OUT_OF_BOUNDS",
    function(m) {
      return m ? `${m} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
    },
    RangeError
  ), Re(
    "ERR_INVALID_ARG_TYPE",
    function(m, f) {
      return `The "${m}" argument must be of type number. Received type ${typeof f}`;
    },
    TypeError
  ), Re(
    "ERR_OUT_OF_RANGE",
    function(m, f, h) {
      let g = `The value of "${m}" is out of range.`, S = h;
      return Number.isInteger(h) && Math.abs(h) > 2 ** 32 ? S = He(String(h)) : typeof h == "bigint" && (S = String(h), (h > BigInt(2) ** BigInt(32) || h < -(BigInt(2) ** BigInt(32))) && (S = He(S)), S += "n"), g += ` It must be ${f}. Received ${S}`, g;
    },
    RangeError
  );
  function He(m) {
    let f = "", h = m.length;
    const g = m[0] === "-" ? 1 : 0;
    for (; h >= g + 4; h -= 3)
      f = `_${m.slice(h - 3, h)}${f}`;
    return `${m.slice(0, h)}${f}`;
  }
  function ir(m, f, h) {
    $e(f, "offset"), (m[f] === void 0 || m[f + h] === void 0) && rr(f, m.length - (h + 1));
  }
  function er(m, f, h, g, S, R) {
    if (m > h || m < f) {
      const j = typeof f == "bigint" ? "n" : "";
      let te;
      throw R > 3 ? f === 0 || f === BigInt(0) ? te = `>= 0${j} and < 2${j} ** ${(R + 1) * 8}${j}` : te = `>= -(2${j} ** ${(R + 1) * 8 - 1}${j}) and < 2 ** ${(R + 1) * 8 - 1}${j}` : te = `>= ${f}${j} and <= ${h}${j}`, new Z.ERR_OUT_OF_RANGE("value", te, m);
    }
    ir(g, S, R);
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
    const g = m.length;
    let S = null;
    const R = [];
    for (let j = 0; j < g; ++j) {
      if (h = m.charCodeAt(j), h > 55295 && h < 57344) {
        if (!S) {
          if (h > 56319) {
            (f -= 3) > -1 && R.push(239, 191, 189);
            continue;
          } else if (j + 1 === g) {
            (f -= 3) > -1 && R.push(239, 191, 189);
            continue;
          }
          S = h;
          continue;
        }
        if (h < 56320) {
          (f -= 3) > -1 && R.push(239, 191, 189), S = h;
          continue;
        }
        h = (S - 55296 << 10 | h - 56320) + 65536;
      } else
        S && (f -= 3) > -1 && R.push(239, 191, 189);
      if (S = null, h < 128) {
        if ((f -= 1) < 0)
          break;
        R.push(h);
      } else if (h < 2048) {
        if ((f -= 2) < 0)
          break;
        R.push(
          h >> 6 | 192,
          h & 63 | 128
        );
      } else if (h < 65536) {
        if ((f -= 3) < 0)
          break;
        R.push(
          h >> 12 | 224,
          h >> 6 & 63 | 128,
          h & 63 | 128
        );
      } else if (h < 1114112) {
        if ((f -= 4) < 0)
          break;
        R.push(
          h >> 18 | 240,
          h >> 12 & 63 | 128,
          h >> 6 & 63 | 128,
          h & 63 | 128
        );
      } else
        throw new Error("Invalid code point");
    }
    return R;
  }
  function p(m) {
    const f = [];
    for (let h = 0; h < m.length; ++h)
      f.push(m.charCodeAt(h) & 255);
    return f;
  }
  function w(m, f) {
    let h, g, S;
    const R = [];
    for (let j = 0; j < m.length && !((f -= 2) < 0); ++j)
      h = m.charCodeAt(j), g = h >> 8, S = h % 256, R.push(S), R.push(g);
    return R;
  }
  function P(m) {
    return t.toByteArray(b(m));
  }
  function k(m, f, h, g) {
    let S;
    for (S = 0; S < g && !(S + h >= f.length || S >= m.length); ++S)
      f[S + h] = m[S];
    return S;
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
      const g = h * 16;
      for (let S = 0; S < 16; ++S)
        f[g + S] = m[h] + m[S];
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
var Jt = {}, qs = {}, BL = d && d.__extends || function() {
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
var iy = (
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
      return new xL(t, r, this);
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
qs.default = iy;
var xL = (
  /** @class */
  function(e) {
    BL(t, e);
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
  }(iy)
), WL = d && d.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(Jt, "__esModule", { value: !0 });
Jt.BaseBuffer = void 0;
var oy = WL(qs);
Jt.BaseBuffer = oy.default;
Jt.default = oy.default;
var VL = d && d.__extends || function() {
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
}(), ay = d && d.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(Hr, "__esModule", { value: !0 });
Hr.alloc = void 0;
var uu = ay(rd), qL = ay(Jt), uy = (
  /** @class */
  function(e) {
    VL(t, e);
    function t(r) {
      var n = this, i = zL(r);
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
  }(qL.default)
);
Hr.default = uy;
function HL(e) {
  return new uy(e);
}
Hr.alloc = HL;
function zL(e) {
  return e instanceof uu.default.Buffer ? e : typeof e == "number" && typeof uu.default.Buffer.alloc == "function" ? uu.default.Buffer.alloc(e) : new uu.default.Buffer(e);
}
var YL = d && d.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(ed, "__esModule", { value: !0 });
var Uv = YL(Hr), un = ee, sy = un.internal.util, cy = sy.ENCRYPTION_OFF, GL = sy.ENCRYPTION_ON, Lv = 1, KL = 3, ZL = (
  /** @class */
  function() {
    function e(t, r, n) {
      r === void 0 && (r = a2), n === void 0 && (n = function(s) {
        return new WebSocket(s);
      });
      var i = this;
      this._open = !0, this._pending = [], this._error = null, this._handleConnectionError = this._handleConnectionError.bind(this), this._config = t, this._receiveTimeout = null, this._receiveTimeoutStarted = !1, this._receiveTimeoutId = null;
      var o = r2(t, r), a = o.scheme, u = o.error;
      if (u) {
        this._error = u;
        return;
      }
      this._ws = QL(a, t.address, n), this._ws.binaryType = "arraybuffer";
      var c = this;
      this._ws.onclose = function(s) {
        s && !s.wasClean && c._handleConnectionError(), c._open = !1;
      }, this._ws.onopen = function() {
        c._clearConnectionTimeout();
        var s = c._pending;
        c._pending = null;
        for (var l = 0; l < s.length; l++)
          c.write(s[l]);
      }, this._ws.onmessage = function(s) {
        if (i._resetTimeout(), c.onmessage) {
          var l = new Uv.default(s.data);
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
      else if (t instanceof Uv.default)
        try {
          this._ws.send(t._buffer);
        } catch (r) {
          if (this._ws.readyState !== Lv)
            this._handleConnectionError();
          else
            throw r;
        }
      else
        throw (0, un.newError)("Don't know how to send buffer: " + t);
    }, e.prototype.close = function() {
      var t = this;
      return new Promise(function(r, n) {
        t._ws && t._ws.readyState !== KL ? (t._open = !1, t.stopReceiveTimeout(), t._clearConnectionTimeout(), t._ws.onclose = function() {
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
          n.readyState !== Lv && (t._connectionTimeoutFired = !0, n.close());
        }, r);
      }
      return null;
    }, e.prototype._clearConnectionTimeout = function() {
      var t = this._connectionTimeoutId;
      (t || t === 0) && (this._connectionTimeoutFired = !1, this._connectionTimeoutId = null, clearTimeout(t));
    }, e;
  }()
);
ed.default = ZL;
function QL(e, t, r) {
  var n = e + "://" + t.asHostPort();
  try {
    return r(n);
  } catch (o) {
    if (JL(o, t)) {
      var i = e2(e, t);
      return r(i);
    } else
      throw o;
  }
}
function JL(e, t) {
  return e.name === "SyntaxError" && XL(t.asHostPort());
}
function XL(e) {
  return e.charAt(0) === "[" && e.indexOf("]") !== -1;
}
function e2(e, t) {
  var r = t.host().replace(/:/g, "-"), n = r.replace("%", "s"), i = n + ".ipv6-literal.net";
  return "".concat(e, "://").concat(i, ":").concat(t.port());
}
function r2(e, t) {
  var r = t2(e), n = n2(e), i = e.trust, o = i2(t);
  if (o2(r, n, o), n)
    return { scheme: "ws", error: null };
  if (o)
    return { scheme: "wss", error: null };
  if (r) {
    if (!i || i === "TRUST_SYSTEM_CA_SIGNED_CERTIFICATES")
      return { scheme: "wss", error: null };
    var a = (0, un.newError)("The browser version of this driver only supports one trust strategy, 'TRUST_SYSTEM_CA_SIGNED_CERTIFICATES'. " + i + ' is not supported. Please either use TRUST_SYSTEM_CA_SIGNED_CERTIFICATES or disable encryption by setting `encrypted:"' + cy + '"` in the driver configuration.');
    return { scheme: null, error: a };
  }
  return { scheme: "ws", error: null };
}
function t2(e) {
  return e.encrypted === !0 || e.encrypted === GL;
}
function n2(e) {
  return e.encrypted === !1 || e.encrypted === cy;
}
function i2(e) {
  var t = typeof e == "function" ? e() : "";
  return t && t.toLowerCase().indexOf("https") >= 0;
}
function o2(e, t, r) {
  r === null || (e && !r ? console.warn("Neo4j driver is configured to use secure WebSocket on a HTTP web page. WebSockets might not work in a mixed content environment. Please consider configuring driver to not use encryption.") : t && r && console.warn("Neo4j driver is configured to use insecure WebSocket on a HTTPS web page. WebSockets might not work in a mixed content environment. Please consider configuring driver to use encryption."));
}
function a2() {
  return typeof window < "u" && window.location ? window.location.protocol : null;
}
var td = {}, u2 = d && d.__extends || function() {
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
var s2 = ee, c2 = s2.internal.resolver.BaseHostNameResolver, l2 = (
  /** @class */
  function(e) {
    u2(t, e);
    function t() {
      return e !== null && e.apply(this, arguments) || this;
    }
    return t.prototype.resolve = function(r) {
      return this._resolveToItself(r);
    }, t;
  }(c2)
);
td.default = l2;
var ly = d && d.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(bn, "__esModule", { value: !0 });
bn.HostNameResolver = bn.Channel = void 0;
var f2 = ly(ed), d2 = ly(td);
bn.Channel = f2.default;
bn.HostNameResolver = d2.default;
var gn = {}, nd = {}, h2 = d && d.__extends || function() {
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
var v2 = Jt, _2 = Hr, p2 = (
  /** @class */
  function(e) {
    h2(t, e);
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
      for (var n = (0, _2.alloc)(8), i = 0; i < 8; i++)
        n.putUInt8(i, this.getUInt8(r + i));
      return n.getFloat64(0);
    }, t;
  }(v2.BaseBuffer)
);
nd.default = p2;
var m2 = d && d.__extends || function() {
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
}(), fy = d && d.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(gn, "__esModule", { value: !0 });
gn.Dechunker = gn.Chunker = void 0;
var y2 = fy(qs), Fv = Hr, b2 = fy(nd), su = 2, g2 = 0, O2 = 1400, w2 = (
  /** @class */
  function(e) {
    m2(t, e);
    function t(r, n) {
      var i = e.call(this, 0) || this;
      return i._bufferSize = n || O2, i._ch = r, i._buffer = (0, Fv.alloc)(i._bufferSize), i._currentChunkStart = 0, i._chunkOpen = !1, i;
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
        this._buffer = null, this._ch.write(r.getSlice(0, r.position)), this._buffer = (0, Fv.alloc)(this._bufferSize), this._chunkOpen = !1;
      }
      return this;
    }, t.prototype.messageBoundary = function() {
      this._closeChunkIfOpen(), this._buffer.remaining() < su && this.flush(), this._buffer.writeInt16(g2);
    }, t.prototype._ensure = function(r) {
      var n = this._chunkOpen ? r : r + su;
      this._buffer.remaining() < n && this.flush(), this._chunkOpen || (this._currentChunkStart = this._buffer.position, this._buffer.position = this._buffer.position + su, this._chunkOpen = !0);
    }, t.prototype._closeChunkIfOpen = function() {
      if (this._chunkOpen) {
        var r = this._buffer.position - (this._currentChunkStart + su);
        this._buffer.putUInt16(this._currentChunkStart, r), this._chunkOpen = !1;
      }
    }, t;
  }(y2.default)
);
gn.Chunker = w2;
var E2 = (
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
            r = new b2.default(this._currentMessage);
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
gn.Dechunker = E2;
var id = {};
Object.defineProperty(id, "__esModule", { value: !0 });
var Hs = ee, dy = Hs.internal.util, S2 = dy.ENCRYPTION_OFF, T2 = dy.ENCRYPTION_ON, P2 = Hs.error.SERVICE_UNAVAILABLE, Bv = [
  null,
  void 0,
  !0,
  !1,
  T2,
  S2
], xv = [
  null,
  void 0,
  "TRUST_ALL_CERTIFICATES",
  "TRUST_CUSTOM_CA_SIGNED_CERTIFICATES",
  "TRUST_SYSTEM_CA_SIGNED_CERTIFICATES"
], I2 = (
  /** @class */
  function() {
    function e(t, r, n) {
      this.address = t, this.encrypted = R2(r), this.trust = A2(r), this.trustedCertificates = C2(r), this.knownHostsPath = j2(r), this.connectionErrorCode = n || P2, this.connectionTimeout = r.connectionTimeout;
    }
    return e;
  }()
);
id.default = I2;
function R2(e) {
  var t = e.encrypted;
  if (Bv.indexOf(t) === -1)
    throw (0, Hs.newError)("Illegal value of the encrypted setting ".concat(t, ". Expected one of ").concat(Bv));
  return t;
}
function A2(e) {
  var t = e.trust;
  if (xv.indexOf(t) === -1)
    throw (0, Hs.newError)("Illegal value of the trust setting ".concat(t, ". Expected one of ").concat(xv));
  return t;
}
function C2(e) {
  return e.trustedCertificates || [];
}
function j2(e) {
  return e.knownHosts || null;
}
var od = {}, hy = {}, ku = {}, N2 = {
  get exports() {
    return ku;
  },
  set exports(e) {
    ku = e;
  }
}, vy = {};
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
(function(e) {
  var t = Ba, r = Vs, n = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
  e.Buffer = u, e.SlowBuffer = $, e.INSPECT_MAX_BYTES = 50;
  var i = 2147483647;
  e.kMaxLength = i, u.TYPED_ARRAY_SUPPORT = o(), !u.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error(
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
  Object.defineProperty(u.prototype, "parent", {
    enumerable: !0,
    get: function() {
      if (u.isBuffer(this))
        return this.buffer;
    }
  }), Object.defineProperty(u.prototype, "offset", {
    enumerable: !0,
    get: function() {
      if (u.isBuffer(this))
        return this.byteOffset;
    }
  });
  function a(b) {
    if (b > i)
      throw new RangeError('The value "' + b + '" is invalid for option "size"');
    var _ = new Uint8Array(b);
    return Object.setPrototypeOf(_, u.prototype), _;
  }
  function u(b, _, p) {
    if (typeof b == "number") {
      if (typeof _ == "string")
        throw new TypeError(
          'The "string" argument must be of type string. Received type number'
        );
      return v(b);
    }
    return c(b, _, p);
  }
  u.poolSize = 8192;
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
      return T(b, _, p);
    if (typeof b == "number")
      throw new TypeError(
        'The "value" argument must not be of type number. Received type number'
      );
    var w = b.valueOf && b.valueOf();
    if (w != null && w !== b)
      return u.from(w, _, p);
    var P = C(b);
    if (P)
      return P;
    if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof b[Symbol.toPrimitive] == "function")
      return u.from(
        b[Symbol.toPrimitive]("string"),
        _,
        p
      );
    throw new TypeError(
      "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof b
    );
  }
  u.from = function(b, _, p) {
    return c(b, _, p);
  }, Object.setPrototypeOf(u.prototype, Uint8Array.prototype), Object.setPrototypeOf(u, Uint8Array);
  function s(b) {
    if (typeof b != "number")
      throw new TypeError('"size" argument must be of type number');
    if (b < 0)
      throw new RangeError('The value "' + b + '" is invalid for option "size"');
  }
  function l(b, _, p) {
    return s(b), b <= 0 ? a(b) : _ !== void 0 ? typeof p == "string" ? a(b).fill(_, p) : a(b).fill(_) : a(b);
  }
  u.alloc = function(b, _, p) {
    return l(b, _, p);
  };
  function v(b) {
    return s(b), a(b < 0 ? 0 : A(b) | 0);
  }
  u.allocUnsafe = function(b) {
    return v(b);
  }, u.allocUnsafeSlow = function(b) {
    return v(b);
  };
  function y(b, _) {
    if ((typeof _ != "string" || _ === "") && (_ = "utf8"), !u.isEncoding(_))
      throw new TypeError("Unknown encoding: " + _);
    var p = U(b, _) | 0, w = a(p), P = w.write(b, _);
    return P !== p && (w = w.slice(0, P)), w;
  }
  function O(b) {
    for (var _ = b.length < 0 ? 0 : A(b.length) | 0, p = a(_), w = 0; w < _; w += 1)
      p[w] = b[w] & 255;
    return p;
  }
  function E(b) {
    if ($e(b, Uint8Array)) {
      var _ = new Uint8Array(b);
      return T(_.buffer, _.byteOffset, _.byteLength);
    }
    return O(b);
  }
  function T(b, _, p) {
    if (_ < 0 || b.byteLength < _)
      throw new RangeError('"offset" is outside of buffer bounds');
    if (b.byteLength < _ + (p || 0))
      throw new RangeError('"length" is outside of buffer bounds');
    var w;
    return _ === void 0 && p === void 0 ? w = new Uint8Array(b) : p === void 0 ? w = new Uint8Array(b, _) : w = new Uint8Array(b, _, p), Object.setPrototypeOf(w, u.prototype), w;
  }
  function C(b) {
    if (u.isBuffer(b)) {
      var _ = A(b.length) | 0, p = a(_);
      return p.length === 0 || b.copy(p, 0, 0, _), p;
    }
    if (b.length !== void 0)
      return typeof b.length != "number" || rr(b.length) ? a(0) : O(b);
    if (b.type === "Buffer" && Array.isArray(b.data))
      return O(b.data);
  }
  function A(b) {
    if (b >= i)
      throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + i.toString(16) + " bytes");
    return b | 0;
  }
  function $(b) {
    return +b != b && (b = 0), u.alloc(+b);
  }
  u.isBuffer = function(_) {
    return _ != null && _._isBuffer === !0 && _ !== u.prototype;
  }, u.compare = function(_, p) {
    if ($e(_, Uint8Array) && (_ = u.from(_, _.offset, _.byteLength)), $e(p, Uint8Array) && (p = u.from(p, p.offset, p.byteLength)), !u.isBuffer(_) || !u.isBuffer(p))
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
  }, u.isEncoding = function(_) {
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
  }, u.concat = function(_, p) {
    if (!Array.isArray(_))
      throw new TypeError('"list" argument must be an Array of Buffers');
    if (_.length === 0)
      return u.alloc(0);
    var w;
    if (p === void 0)
      for (p = 0, w = 0; w < _.length; ++w)
        p += _[w].length;
    var P = u.allocUnsafe(p), k = 0;
    for (w = 0; w < _.length; ++w) {
      var L = _[w];
      if ($e(L, Uint8Array))
        k + L.length > P.length ? u.from(L).copy(P, k) : Uint8Array.prototype.set.call(
          P,
          L,
          k
        );
      else if (u.isBuffer(L))
        L.copy(P, k);
      else
        throw new TypeError('"list" argument must be an Array of Buffers');
      k += L.length;
    }
    return P;
  };
  function U(b, _) {
    if (u.isBuffer(b))
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
  u.byteLength = U;
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
  u.prototype._isBuffer = !0;
  function F(b, _, p) {
    var w = b[_];
    b[_] = b[p], b[p] = w;
  }
  u.prototype.swap16 = function() {
    var _ = this.length;
    if (_ % 2 !== 0)
      throw new RangeError("Buffer size must be a multiple of 16-bits");
    for (var p = 0; p < _; p += 2)
      F(this, p, p + 1);
    return this;
  }, u.prototype.swap32 = function() {
    var _ = this.length;
    if (_ % 4 !== 0)
      throw new RangeError("Buffer size must be a multiple of 32-bits");
    for (var p = 0; p < _; p += 4)
      F(this, p, p + 3), F(this, p + 1, p + 2);
    return this;
  }, u.prototype.swap64 = function() {
    var _ = this.length;
    if (_ % 8 !== 0)
      throw new RangeError("Buffer size must be a multiple of 64-bits");
    for (var p = 0; p < _; p += 8)
      F(this, p, p + 7), F(this, p + 1, p + 6), F(this, p + 2, p + 5), F(this, p + 3, p + 4);
    return this;
  }, u.prototype.toString = function() {
    var _ = this.length;
    return _ === 0 ? "" : arguments.length === 0 ? se(this, 0, _) : D.apply(this, arguments);
  }, u.prototype.toLocaleString = u.prototype.toString, u.prototype.equals = function(_) {
    if (!u.isBuffer(_))
      throw new TypeError("Argument must be a Buffer");
    return this === _ ? !0 : u.compare(this, _) === 0;
  }, u.prototype.inspect = function() {
    var _ = "", p = e.INSPECT_MAX_BYTES;
    return _ = this.toString("hex", 0, p).replace(/(.{2})/g, "$1 ").trim(), this.length > p && (_ += " ... "), "<Buffer " + _ + ">";
  }, n && (u.prototype[n] = u.prototype.inspect), u.prototype.compare = function(_, p, w, P, k) {
    if ($e(_, Uint8Array) && (_ = u.from(_, _.offset, _.byteLength)), !u.isBuffer(_))
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
  function G(b, _, p, w, P) {
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
    if (typeof _ == "string" && (_ = u.from(_, w)), u.isBuffer(_))
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
    function le(h, g) {
      return k === 1 ? h[g] : h.readUInt16BE(g * k);
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
  u.prototype.includes = function(_, p, w) {
    return this.indexOf(_, p, w) !== -1;
  }, u.prototype.indexOf = function(_, p, w) {
    return G(this, _, p, w, !0);
  }, u.prototype.lastIndexOf = function(_, p, w) {
    return G(this, _, p, w, !1);
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
    return er(Re(_), b, p, w);
  }
  function ge(b, _, p, w) {
    return er(ir(_), b, p, w);
  }
  function Ae(b, _, p, w) {
    return er(He(_, b.length - p), b, p, w);
  }
  u.prototype.write = function(_, p, w, P) {
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
          return Ae(this, _, p, w);
        default:
          if (L)
            throw new TypeError("Unknown encoding: " + P);
          P = ("" + P).toLowerCase(), L = !0;
      }
  }, u.prototype.toJSON = function() {
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
  u.prototype.slice = function(_, p) {
    var w = this.length;
    _ = ~~_, p = p === void 0 ? w : ~~p, _ < 0 ? (_ += w, _ < 0 && (_ = 0)) : _ > w && (_ = w), p < 0 ? (p += w, p < 0 && (p = 0)) : p > w && (p = w), p < _ && (p = _);
    var P = this.subarray(_, p);
    return Object.setPrototypeOf(P, u.prototype), P;
  };
  function K(b, _, p) {
    if (b % 1 !== 0 || b < 0)
      throw new RangeError("offset is not uint");
    if (b + _ > p)
      throw new RangeError("Trying to access beyond buffer length");
  }
  u.prototype.readUintLE = u.prototype.readUIntLE = function(_, p, w) {
    _ = _ >>> 0, p = p >>> 0, w || K(_, p, this.length);
    for (var P = this[_], k = 1, L = 0; ++L < p && (k *= 256); )
      P += this[_ + L] * k;
    return P;
  }, u.prototype.readUintBE = u.prototype.readUIntBE = function(_, p, w) {
    _ = _ >>> 0, p = p >>> 0, w || K(_, p, this.length);
    for (var P = this[_ + --p], k = 1; p > 0 && (k *= 256); )
      P += this[_ + --p] * k;
    return P;
  }, u.prototype.readUint8 = u.prototype.readUInt8 = function(_, p) {
    return _ = _ >>> 0, p || K(_, 1, this.length), this[_];
  }, u.prototype.readUint16LE = u.prototype.readUInt16LE = function(_, p) {
    return _ = _ >>> 0, p || K(_, 2, this.length), this[_] | this[_ + 1] << 8;
  }, u.prototype.readUint16BE = u.prototype.readUInt16BE = function(_, p) {
    return _ = _ >>> 0, p || K(_, 2, this.length), this[_] << 8 | this[_ + 1];
  }, u.prototype.readUint32LE = u.prototype.readUInt32LE = function(_, p) {
    return _ = _ >>> 0, p || K(_, 4, this.length), (this[_] | this[_ + 1] << 8 | this[_ + 2] << 16) + this[_ + 3] * 16777216;
  }, u.prototype.readUint32BE = u.prototype.readUInt32BE = function(_, p) {
    return _ = _ >>> 0, p || K(_, 4, this.length), this[_] * 16777216 + (this[_ + 1] << 16 | this[_ + 2] << 8 | this[_ + 3]);
  }, u.prototype.readIntLE = function(_, p, w) {
    _ = _ >>> 0, p = p >>> 0, w || K(_, p, this.length);
    for (var P = this[_], k = 1, L = 0; ++L < p && (k *= 256); )
      P += this[_ + L] * k;
    return k *= 128, P >= k && (P -= Math.pow(2, 8 * p)), P;
  }, u.prototype.readIntBE = function(_, p, w) {
    _ = _ >>> 0, p = p >>> 0, w || K(_, p, this.length);
    for (var P = p, k = 1, L = this[_ + --P]; P > 0 && (k *= 256); )
      L += this[_ + --P] * k;
    return k *= 128, L >= k && (L -= Math.pow(2, 8 * p)), L;
  }, u.prototype.readInt8 = function(_, p) {
    return _ = _ >>> 0, p || K(_, 1, this.length), this[_] & 128 ? (255 - this[_] + 1) * -1 : this[_];
  }, u.prototype.readInt16LE = function(_, p) {
    _ = _ >>> 0, p || K(_, 2, this.length);
    var w = this[_] | this[_ + 1] << 8;
    return w & 32768 ? w | 4294901760 : w;
  }, u.prototype.readInt16BE = function(_, p) {
    _ = _ >>> 0, p || K(_, 2, this.length);
    var w = this[_ + 1] | this[_] << 8;
    return w & 32768 ? w | 4294901760 : w;
  }, u.prototype.readInt32LE = function(_, p) {
    return _ = _ >>> 0, p || K(_, 4, this.length), this[_] | this[_ + 1] << 8 | this[_ + 2] << 16 | this[_ + 3] << 24;
  }, u.prototype.readInt32BE = function(_, p) {
    return _ = _ >>> 0, p || K(_, 4, this.length), this[_] << 24 | this[_ + 1] << 16 | this[_ + 2] << 8 | this[_ + 3];
  }, u.prototype.readFloatLE = function(_, p) {
    return _ = _ >>> 0, p || K(_, 4, this.length), r.read(this, _, !0, 23, 4);
  }, u.prototype.readFloatBE = function(_, p) {
    return _ = _ >>> 0, p || K(_, 4, this.length), r.read(this, _, !1, 23, 4);
  }, u.prototype.readDoubleLE = function(_, p) {
    return _ = _ >>> 0, p || K(_, 8, this.length), r.read(this, _, !0, 52, 8);
  }, u.prototype.readDoubleBE = function(_, p) {
    return _ = _ >>> 0, p || K(_, 8, this.length), r.read(this, _, !1, 52, 8);
  };
  function B(b, _, p, w, P, k) {
    if (!u.isBuffer(b))
      throw new TypeError('"buffer" argument must be a Buffer instance');
    if (_ > P || _ < k)
      throw new RangeError('"value" argument is out of bounds');
    if (p + w > b.length)
      throw new RangeError("Index out of range");
  }
  u.prototype.writeUintLE = u.prototype.writeUIntLE = function(_, p, w, P) {
    if (_ = +_, p = p >>> 0, w = w >>> 0, !P) {
      var k = Math.pow(2, 8 * w) - 1;
      B(this, _, p, w, k, 0);
    }
    var L = 1, ne = 0;
    for (this[p] = _ & 255; ++ne < w && (L *= 256); )
      this[p + ne] = _ / L & 255;
    return p + w;
  }, u.prototype.writeUintBE = u.prototype.writeUIntBE = function(_, p, w, P) {
    if (_ = +_, p = p >>> 0, w = w >>> 0, !P) {
      var k = Math.pow(2, 8 * w) - 1;
      B(this, _, p, w, k, 0);
    }
    var L = w - 1, ne = 1;
    for (this[p + L] = _ & 255; --L >= 0 && (ne *= 256); )
      this[p + L] = _ / ne & 255;
    return p + w;
  }, u.prototype.writeUint8 = u.prototype.writeUInt8 = function(_, p, w) {
    return _ = +_, p = p >>> 0, w || B(this, _, p, 1, 255, 0), this[p] = _ & 255, p + 1;
  }, u.prototype.writeUint16LE = u.prototype.writeUInt16LE = function(_, p, w) {
    return _ = +_, p = p >>> 0, w || B(this, _, p, 2, 65535, 0), this[p] = _ & 255, this[p + 1] = _ >>> 8, p + 2;
  }, u.prototype.writeUint16BE = u.prototype.writeUInt16BE = function(_, p, w) {
    return _ = +_, p = p >>> 0, w || B(this, _, p, 2, 65535, 0), this[p] = _ >>> 8, this[p + 1] = _ & 255, p + 2;
  }, u.prototype.writeUint32LE = u.prototype.writeUInt32LE = function(_, p, w) {
    return _ = +_, p = p >>> 0, w || B(this, _, p, 4, 4294967295, 0), this[p + 3] = _ >>> 24, this[p + 2] = _ >>> 16, this[p + 1] = _ >>> 8, this[p] = _ & 255, p + 4;
  }, u.prototype.writeUint32BE = u.prototype.writeUInt32BE = function(_, p, w) {
    return _ = +_, p = p >>> 0, w || B(this, _, p, 4, 4294967295, 0), this[p] = _ >>> 24, this[p + 1] = _ >>> 16, this[p + 2] = _ >>> 8, this[p + 3] = _ & 255, p + 4;
  }, u.prototype.writeIntLE = function(_, p, w, P) {
    if (_ = +_, p = p >>> 0, !P) {
      var k = Math.pow(2, 8 * w - 1);
      B(this, _, p, w, k - 1, -k);
    }
    var L = 0, ne = 1, le = 0;
    for (this[p] = _ & 255; ++L < w && (ne *= 256); )
      _ < 0 && le === 0 && this[p + L - 1] !== 0 && (le = 1), this[p + L] = (_ / ne >> 0) - le & 255;
    return p + w;
  }, u.prototype.writeIntBE = function(_, p, w, P) {
    if (_ = +_, p = p >>> 0, !P) {
      var k = Math.pow(2, 8 * w - 1);
      B(this, _, p, w, k - 1, -k);
    }
    var L = w - 1, ne = 1, le = 0;
    for (this[p + L] = _ & 255; --L >= 0 && (ne *= 256); )
      _ < 0 && le === 0 && this[p + L + 1] !== 0 && (le = 1), this[p + L] = (_ / ne >> 0) - le & 255;
    return p + w;
  }, u.prototype.writeInt8 = function(_, p, w) {
    return _ = +_, p = p >>> 0, w || B(this, _, p, 1, 127, -128), _ < 0 && (_ = 255 + _ + 1), this[p] = _ & 255, p + 1;
  }, u.prototype.writeInt16LE = function(_, p, w) {
    return _ = +_, p = p >>> 0, w || B(this, _, p, 2, 32767, -32768), this[p] = _ & 255, this[p + 1] = _ >>> 8, p + 2;
  }, u.prototype.writeInt16BE = function(_, p, w) {
    return _ = +_, p = p >>> 0, w || B(this, _, p, 2, 32767, -32768), this[p] = _ >>> 8, this[p + 1] = _ & 255, p + 2;
  }, u.prototype.writeInt32LE = function(_, p, w) {
    return _ = +_, p = p >>> 0, w || B(this, _, p, 4, 2147483647, -2147483648), this[p] = _ & 255, this[p + 1] = _ >>> 8, this[p + 2] = _ >>> 16, this[p + 3] = _ >>> 24, p + 4;
  }, u.prototype.writeInt32BE = function(_, p, w) {
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
  u.prototype.writeFloatLE = function(_, p, w) {
    return I(this, _, p, !0, w);
  }, u.prototype.writeFloatBE = function(_, p, w) {
    return I(this, _, p, !1, w);
  };
  function M(b, _, p, w, P) {
    return _ = +_, p = p >>> 0, P || Oe(b, _, p, 8), r.write(b, _, p, w, 52, 8), p + 8;
  }
  u.prototype.writeDoubleLE = function(_, p, w) {
    return M(this, _, p, !0, w);
  }, u.prototype.writeDoubleBE = function(_, p, w) {
    return M(this, _, p, !1, w);
  }, u.prototype.copy = function(_, p, w, P) {
    if (!u.isBuffer(_))
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
  }, u.prototype.fill = function(_, p, w, P) {
    if (typeof _ == "string") {
      if (typeof p == "string" ? (P = p, p = 0, w = this.length) : typeof w == "string" && (P = w, w = this.length), P !== void 0 && typeof P != "string")
        throw new TypeError("encoding must be a string");
      if (typeof P == "string" && !u.isEncoding(P))
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
      var ne = u.isBuffer(_) ? _ : u.from(_, P), le = ne.length;
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
  function Re(b) {
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
})(vy);
/*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
(function(e, t) {
  var r = vy, n = r.Buffer;
  function i(a, u) {
    for (var c in a)
      u[c] = a[c];
  }
  n.from && n.alloc && n.allocUnsafe && n.allocUnsafeSlow ? e.exports = r : (i(r, t), t.Buffer = o);
  function o(a, u, c) {
    return n(a, u, c);
  }
  o.prototype = Object.create(n.prototype), i(n, o), o.from = function(a, u, c) {
    if (typeof a == "number")
      throw new TypeError("Argument must not be a number");
    return n(a, u, c);
  }, o.alloc = function(a, u, c) {
    if (typeof a != "number")
      throw new TypeError("Argument must be a number");
    var s = n(a);
    return u !== void 0 ? typeof c == "string" ? s.fill(u, c) : s.fill(u) : s.fill(0), s;
  }, o.allocUnsafe = function(a) {
    if (typeof a != "number")
      throw new TypeError("Argument must be a number");
    return n(a);
  }, o.allocUnsafeSlow = function(a) {
    if (typeof a != "number")
      throw new TypeError("Argument must be a number");
    return r.SlowBuffer(a);
  };
})(N2, ku);
var ad = ku.Buffer, Wv = ad.isEncoding || function(e) {
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
function $2(e) {
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
function M2(e) {
  var t = $2(e);
  if (typeof t != "string" && (ad.isEncoding === Wv || !Wv(e)))
    throw new Error("Unknown encoding: " + e);
  return t || e;
}
hy.StringDecoder = xa;
function xa(e) {
  this.encoding = M2(e);
  var t;
  switch (this.encoding) {
    case "utf16le":
      this.text = B2, this.end = x2, t = 4;
      break;
    case "utf8":
      this.fillLast = U2, t = 4;
      break;
    case "base64":
      this.text = W2, this.end = V2, t = 3;
      break;
    default:
      this.write = q2, this.end = H2;
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
xa.prototype.end = F2;
xa.prototype.text = L2;
xa.prototype.fillLast = function(e) {
  if (this.lastNeed <= e.length)
    return e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);
  e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, e.length), this.lastNeed -= e.length;
};
function Nl(e) {
  return e <= 127 ? 0 : e >> 5 === 6 ? 2 : e >> 4 === 14 ? 3 : e >> 3 === 30 ? 4 : e >> 6 === 2 ? -1 : -2;
}
function k2(e, t, r) {
  var n = t.length - 1;
  if (n < r)
    return 0;
  var i = Nl(t[n]);
  return i >= 0 ? (i > 0 && (e.lastNeed = i - 1), i) : --n < r || i === -2 ? 0 : (i = Nl(t[n]), i >= 0 ? (i > 0 && (e.lastNeed = i - 2), i) : --n < r || i === -2 ? 0 : (i = Nl(t[n]), i >= 0 ? (i > 0 && (i === 2 ? i = 0 : e.lastNeed = i - 3), i) : 0));
}
function D2(e, t, r) {
  if ((t[0] & 192) !== 128)
    return e.lastNeed = 0, "�";
  if (e.lastNeed > 1 && t.length > 1) {
    if ((t[1] & 192) !== 128)
      return e.lastNeed = 1, "�";
    if (e.lastNeed > 2 && t.length > 2 && (t[2] & 192) !== 128)
      return e.lastNeed = 2, "�";
  }
}
function U2(e) {
  var t = this.lastTotal - this.lastNeed, r = D2(this, e);
  if (r !== void 0)
    return r;
  if (this.lastNeed <= e.length)
    return e.copy(this.lastChar, t, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);
  e.copy(this.lastChar, t, 0, e.length), this.lastNeed -= e.length;
}
function L2(e, t) {
  var r = k2(this, e, t);
  if (!this.lastNeed)
    return e.toString("utf8", t);
  this.lastTotal = r;
  var n = e.length - (r - this.lastNeed);
  return e.copy(this.lastChar, 0, n), e.toString("utf8", t, n);
}
function F2(e) {
  var t = e && e.length ? this.write(e) : "";
  return this.lastNeed ? t + "�" : t;
}
function B2(e, t) {
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
function x2(e) {
  var t = e && e.length ? this.write(e) : "";
  if (this.lastNeed) {
    var r = this.lastTotal - this.lastNeed;
    return t + this.lastChar.toString("utf16le", 0, r);
  }
  return t;
}
function W2(e, t) {
  var r = (e.length - t) % 3;
  return r === 0 ? e.toString("base64", t) : (this.lastNeed = 3 - r, this.lastTotal = 3, r === 1 ? this.lastChar[0] = e[e.length - 1] : (this.lastChar[0] = e[e.length - 2], this.lastChar[1] = e[e.length - 1]), e.toString("base64", t, e.length - r));
}
function V2(e) {
  var t = e && e.length ? this.write(e) : "";
  return this.lastNeed ? t + this.lastChar.toString("base64", 0, 3 - this.lastNeed) : t;
}
function q2(e) {
  return e.toString(this.encoding);
}
function H2(e) {
  return e && e.length ? this.write(e) : "";
}
var _y = d && d.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(od, "__esModule", { value: !0 });
var z2 = _y(Hr), Y2 = ee, $l = _y(rd), G2 = hy, Vv = new G2.StringDecoder("utf8");
function K2(e) {
  return new z2.default(eF(e));
}
function Z2(e, t) {
  if (Object.prototype.hasOwnProperty.call(e, "_buffer"))
    return Q2(e, t);
  if (Object.prototype.hasOwnProperty.call(e, "_buffers"))
    return J2(e, t);
  throw (0, Y2.newError)("Don't know how to decode strings from '".concat(e, "'"));
}
function Q2(e, t) {
  var r = e.position, n = r + t;
  return e.position = Math.min(n, e.length), e._buffer.toString("utf8", r, n);
}
function J2(e, t) {
  return X2(e, t, function(r) {
    return Vv.write(r._buffer);
  }, function() {
    return Vv.end();
  });
}
function X2(e, t, r, n) {
  var i = t, o = e.position;
  e._updatePos(Math.min(t, e.length - o));
  var a = e._buffers.reduce(function(u, c) {
    if (i <= 0)
      return u;
    if (o >= c.length)
      return o -= c.length, "";
    c._updatePos(o - c.position);
    var s = Math.min(c.length - o, i), l = c.readSlice(s);
    return c._updatePos(s), i = Math.max(i - l.length, 0), o = 0, u + r(l);
  }, "");
  return a + n();
}
function eF(e) {
  return typeof $l.default.Buffer.from == "function" ? $l.default.Buffer.from(e, "utf8") : new $l.default.Buffer(e, "utf8");
}
od.default = {
  encode: K2,
  decode: Z2
};
(function(e) {
  var t = d && d.__createBinding || (Object.create ? function(u, c, s, l) {
    l === void 0 && (l = s);
    var v = Object.getOwnPropertyDescriptor(c, s);
    (!v || ("get" in v ? !c.__esModule : v.writable || v.configurable)) && (v = { enumerable: !0, get: function() {
      return c[s];
    } }), Object.defineProperty(u, l, v);
  } : function(u, c, s, l) {
    l === void 0 && (l = s), u[l] = c[s];
  }), r = d && d.__exportStar || function(u, c) {
    for (var s in u)
      s !== "default" && !Object.prototype.hasOwnProperty.call(c, s) && t(c, u, s);
  }, n = d && d.__importDefault || function(u) {
    return u && u.__esModule ? u : { default: u };
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.utf8 = e.alloc = e.ChannelConfig = void 0, r(bn, e), r(gn, e);
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
})(Xn);
Object.defineProperty(Xf, "__esModule", { value: !0 });
var rF = Xn, py = ee, tF = 1616949271;
function hi(e, t) {
  return {
    major: e,
    minor: t
  };
}
function nF(e) {
  if (e.length > 4)
    throw (0, py.newError)("It should not have more than 4 versions of the protocol");
  var t = (0, rF.alloc)(5 * 4);
  return t.writeInt32(tF), e.forEach(function(r) {
    if (r instanceof Array) {
      var n = r[0], i = n.major, o = n.minor, a = r[1].minor, u = o - a;
      t.writeInt32(u << 16 | o << 8 | i);
    } else {
      var i = r.major, o = r.minor;
      t.writeInt32(o << 8 | i);
    }
  }), t.reset(), t;
}
function iF(e) {
  var t = [
    e.readUInt8(),
    e.readUInt8(),
    e.readUInt8(),
    e.readUInt8()
  ];
  if (t[0] === 72 && t[1] === 84 && t[2] === 84 && t[3] === 80)
    throw (0, py.newError)("Server responded HTTP. Make sure you are not trying to connect to the http endpoint (HTTP defaults to port 7474 whereas BOLT defaults to port 7687)");
  return Number(t[3] + "." + t[2]);
}
function oF() {
  return nF([
    hi(5, 0),
    [hi(4, 4), hi(4, 2)],
    hi(4, 1),
    hi(3, 0)
  ]);
}
function aF(e) {
  var t = this;
  return new Promise(function(r, n) {
    var i = function(o) {
      n(o);
    };
    e.onerror = i.bind(t), e._error && i(e._error), e.onmessage = function(o) {
      try {
        var a = iF(o);
        r({
          protocolVersion: a,
          consumeRemainingBuffer: function(u) {
            o.hasRemaining() && u(o.readSlice(o.remaining()));
          }
        });
      } catch (u) {
        n(u);
      }
    }, e.write(oF());
  });
}
Xf.default = aF;
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
}(), uF = d && d.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(Ys, "__esModule", { value: !0 });
uF(ee);
var Gs = (
  /** @class */
  function() {
    function e() {
    }
    return e.ofRecord = function(t) {
      return t === null ? e.ofNull() : new lF(t);
    }, e.ofMessageResponse = function(t) {
      return t === null ? e.ofNull() : new sF(t);
    }, e.ofNull = function() {
      return new cF();
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
Ys.default = Gs;
var sF = (
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
  }(Gs)
), cF = (
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
  }(Gs)
), lF = (
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
  }(Gs)
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
}(), fF = d && d.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(Pe, "__esModule", { value: !0 });
Pe.ProcedureRouteObserver = Pe.RouteObserver = Pe.CompletedObserver = Pe.FailedObserver = Pe.ResetObserver = Pe.LoginObserver = Pe.ResultStreamObserver = Pe.StreamObserver = void 0;
var cr = ee, my = fF(Ys), dF = cr.internal.constants.FETCH_ALL, xt = cr.error.PROTOCOL_ERROR, ei = (
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
Pe.StreamObserver = ei;
var cd = (
  /** @class */
  function(e) {
    Xt(t, e);
    function t(r) {
      var n = r === void 0 ? {} : r, i = n.reactive, o = i === void 0 ? !1 : i, a = n.moreFunction, u = n.discardFunction, c = n.fetchSize, s = c === void 0 ? dF : c, l = n.beforeError, v = n.afterError, y = n.beforeKeys, O = n.afterKeys, E = n.beforeComplete, T = n.afterComplete, C = n.server, A = n.highRecordWatermark, $ = A === void 0 ? Number.MAX_VALUE : A, U = n.lowRecordWatermark, D = U === void 0 ? Number.MAX_VALUE : U, F = e.call(this) || this;
      return F._fieldKeys = null, F._fieldLookup = null, F._head = null, F._queuedRecords = [], F._tail = null, F._error = null, F._observers = [], F._meta = {}, F._server = C, F._beforeError = l, F._afterError = v, F._beforeKeys = y, F._afterKeys = O, F._beforeComplete = E, F._afterComplete = T, F._queryId = null, F._moreFunction = a, F._discardFunction = u, F._discard = !1, F._fetchSize = s, F._lowRecordWatermark = D, F._highRecordWatermark = $, F._setState(o ? dr.READY : dr.READY_STREAMING), F._setupAutoPull(), F._paused = !1, F;
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
        n._tail = i, n._observers.some(function(u) {
          return u.onCompleted;
        }) && n._observers.forEach(function(u) {
          u.onCompleted && u.onCompleted(i);
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
        var u = function() {
          i._head = i._fieldKeys, i._observers.some(function(c) {
            return c.onKeys;
          }) && i._observers.forEach(function(c) {
            c.onKeys && c.onKeys(i._fieldKeys);
          }), i._afterKeys && i._afterKeys(i._fieldKeys), n();
        };
        a ? Promise.resolve(a).then(function() {
          return u();
        }) : u();
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
  }(ei)
);
Pe.ResultStreamObserver = cd;
var hF = (
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
  }(ei)
);
Pe.LoginObserver = hF;
var vF = (
  /** @class */
  function(e) {
    Xt(t, e);
    function t(r) {
      var n = r === void 0 ? {} : r, i = n.onProtocolError, o = n.onError, a = n.onComplete, u = e.call(this) || this;
      return u._onProtocolError = i, u._onError = o, u._onComplete = a, u;
    }
    return t.prototype.onNext = function(r) {
      this.onError((0, cr.newError)("Received RECORD when resetting: received record is: " + cr.json.stringify(r), xt));
    }, t.prototype.onError = function(r) {
      r.code === xt && this._onProtocolError && this._onProtocolError(r.message), this._onError && this._onError(r);
    }, t.prototype.onCompleted = function(r) {
      this._onComplete && this._onComplete(r);
    }, t;
  }(ei)
);
Pe.ResetObserver = vF;
var _F = (
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
Pe.FailedObserver = _F;
var pF = (
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
Pe.CompletedObserver = pF;
var mF = (
  /** @class */
  function(e) {
    Xt(t, e);
    function t(r) {
      var n = r.resultObserver, i = r.onProtocolError, o = r.onError, a = r.onCompleted, u = e.call(this) || this;
      return u._resultObserver = n, u._onError = o, u._onCompleted = a, u._records = [], u._onProtocolError = i, n.subscribe(u), u;
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
      this._onCompleted && this._onCompleted(my.default.ofRecord(this._records[0]));
    }, t;
  }(ei)
);
Pe.ProcedureRouteObserver = mF;
var yF = (
  /** @class */
  function(e) {
    Xt(t, e);
    function t(r) {
      var n = r === void 0 ? {} : r, i = n.onProtocolError, o = n.onError, a = n.onCompleted, u = e.call(this) || this;
      return u._onProtocolError = i, u._onError = o, u._onCompleted = a, u;
    }
    return t.prototype.onNext = function(r) {
      this.onError((0, cr.newError)("Received RECORD when resetting: received record is: " + cr.json.stringify(r), xt));
    }, t.prototype.onError = function(r) {
      r.code === xt && this._onProtocolError && this._onProtocolError(r.message), this._onError && this._onError(r);
    }, t.prototype.onCompleted = function(r) {
      this._onCompleted && this._onCompleted(my.default.ofMessageResponse(r));
    }, t;
  }(ei)
);
Pe.RouteObserver = yF;
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
function bF(e, t, r) {
  if (t === void 0 && (t = function() {
  }), e && !e.isEmpty()) {
    var n = (0, ld.newError)("Driver is connected to the database that does not support transaction configuration. Please upgrade to neo4j 3.5.0 or later in order to use this functionality");
    throw t(n.message), r.onError(n), n;
  }
}
Pr.assertTxConfigIsEmpty = bF;
function gF(e, t, r) {
  if (t === void 0 && (t = function() {
  }), e) {
    var n = (0, ld.newError)("Driver is connected to the database that does not support multiple databases. Please upgrade to neo4j 4.0.0 or later in order to use this functionality");
    throw t(n.message), r.onError(n), n;
  }
}
Pr.assertDatabaseIsEmpty = gF;
function OF(e, t, r) {
  if (t === void 0 && (t = function() {
  }), e) {
    var n = (0, ld.newError)("Driver is connected to the database that does not support user impersonation. Please upgrade to neo4j 4.4.0 or later in order to use this functionality. " + "Trying to impersonate ".concat(e, "."));
    throw t(n.message), r.onError(n), n;
  }
}
Pr.assertImpersonatedUserIsEmpty = OF;
var Ke = {}, Wt = {}, Ks = {}, Wa = {};
Object.defineProperty(Wa, "__esModule", { value: !0 });
Wa.identity = void 0;
function wF(e) {
  return e;
}
Wa.identity = wF;
var EF = d && d.__createBinding || (Object.create ? function(e, t, r, n) {
  n === void 0 && (n = r);
  var i = Object.getOwnPropertyDescriptor(t, r);
  (!i || ("get" in i ? !t.__esModule : i.writable || i.configurable)) && (i = { enumerable: !0, get: function() {
    return t[r];
  } }), Object.defineProperty(e, n, i);
} : function(e, t, r, n) {
  n === void 0 && (n = r), e[n] = t[r];
}), SF = d && d.__setModuleDefault || (Object.create ? function(e, t) {
  Object.defineProperty(e, "default", { enumerable: !0, value: t });
} : function(e, t) {
  e.default = t;
}), TF = d && d.__importStar || function(e) {
  if (e && e.__esModule)
    return e;
  var t = {};
  if (e != null)
    for (var r in e)
      r !== "default" && Object.prototype.hasOwnProperty.call(e, r) && EF(t, e, r);
  return SF(t, e), t;
};
Object.defineProperty(Ks, "__esModule", { value: !0 });
Ks.functional = void 0;
Ks.functional = TF(Wa);
var it = {};
Object.defineProperty(it, "__esModule", { value: !0 });
it.verifyStructSize = it.Structure = void 0;
var yy = ee, PF = yy.error.PROTOCOL_ERROR, by = (
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
it.Structure = by;
function IF(e, t, r) {
  if (t !== r)
    throw (0, yy.newError)("Wrong struct size for ".concat(e, ", expected ").concat(t, " but was ").concat(r), PF);
}
it.verifyStructSize = IF;
it.default = by;
Object.defineProperty(Wt, "__esModule", { value: !0 });
Wt.Unpacker = Wt.Packer = void 0;
var yi = Xn, gy = Ks, Oy = it, ke = ee, RF = ke.error.PROTOCOL_ERROR, wy = 128, Ey = 144, Sy = 160, Ty = 176, Py = 192, Iy = 193, Ry = 194, Ay = 195, Cy = 200, jy = 201, Ny = 202, $y = 203, My = 208, ky = 209, Dy = 210, Uy = 212, Ly = 213, Fy = 214, By = 204, xy = 205, Wy = 206, Vy = 216, qy = 217, Hy = 218, zy = 220, Yy = 221, AF = (
  /** @class */
  function() {
    function e(t) {
      this._ch = t, this._byteArraysSupported = !0;
    }
    return e.prototype.packable = function(t, r) {
      var n = this;
      r === void 0 && (r = gy.functional.identity);
      try {
        t = r(t);
      } catch (a) {
        return function() {
          throw a;
        };
      }
      if (t === null)
        return function() {
          return n._ch.writeUInt8(Py);
        };
      if (t === !0)
        return function() {
          return n._ch.writeUInt8(Ay);
        };
      if (t === !1)
        return function() {
          return n._ch.writeUInt8(Ry);
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
      if (jF(t))
        return this.packableIterable(t, r);
      if (t instanceof Oy.Structure) {
        for (var i = [], o = 0; o < t.fields.length; o++)
          i[o] = this.packable(t.fields[o], r);
        return function() {
          return n.packStruct(t.signature, i);
        };
      } else
        return typeof t == "object" ? function() {
          for (var a = Object.keys(t), u = 0, c = 0; c < a.length; c++)
            t[a[c]] !== void 0 && u++;
          n.packMapHeader(u);
          for (var c = 0; c < a.length; c++) {
            var s = a[c];
            t[s] !== void 0 && (n.packString(s), n.packable(t[s], r)());
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
      t.greaterThanOrEqual(-16) && t.lessThan(128) ? this._ch.writeInt8(n) : t.greaterThanOrEqual(-128) && t.lessThan(-16) ? (this._ch.writeUInt8(Cy), this._ch.writeInt8(n)) : t.greaterThanOrEqual(-32768) && t.lessThan(32768) ? (this._ch.writeUInt8(jy), this._ch.writeInt16(n)) : t.greaterThanOrEqual(-2147483648) && t.lessThan(2147483648) ? (this._ch.writeUInt8(Ny), this._ch.writeInt32(n)) : (this._ch.writeUInt8($y), this._ch.writeInt32(r), this._ch.writeInt32(n));
    }, e.prototype.packFloat = function(t) {
      this._ch.writeUInt8(Iy), this._ch.writeFloat64(t);
    }, e.prototype.packString = function(t) {
      var r = yi.utf8.encode(t), n = r.length;
      if (n < 16)
        this._ch.writeUInt8(wy | n), this._ch.writeBytes(r);
      else if (n < 256)
        this._ch.writeUInt8(My), this._ch.writeUInt8(n), this._ch.writeBytes(r);
      else if (n < 65536)
        this._ch.writeUInt8(ky), this._ch.writeUInt8(n / 256 >> 0), this._ch.writeUInt8(n % 256), this._ch.writeBytes(r);
      else if (n < 4294967296)
        this._ch.writeUInt8(Dy), this._ch.writeUInt8((n / 16777216 >> 0) % 256), this._ch.writeUInt8((n / 65536 >> 0) % 256), this._ch.writeUInt8((n / 256 >> 0) % 256), this._ch.writeUInt8(n % 256), this._ch.writeBytes(r);
      else
        throw (0, ke.newError)("UTF-8 strings of size " + n + " are not supported");
    }, e.prototype.packListHeader = function(t) {
      if (t < 16)
        this._ch.writeUInt8(Ey | t);
      else if (t < 256)
        this._ch.writeUInt8(Uy), this._ch.writeUInt8(t);
      else if (t < 65536)
        this._ch.writeUInt8(Ly), this._ch.writeUInt8((t / 256 >> 0) % 256), this._ch.writeUInt8(t % 256);
      else if (t < 4294967296)
        this._ch.writeUInt8(Fy), this._ch.writeUInt8((t / 16777216 >> 0) % 256), this._ch.writeUInt8((t / 65536 >> 0) % 256), this._ch.writeUInt8((t / 256 >> 0) % 256), this._ch.writeUInt8(t % 256);
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
        this._ch.writeUInt8(By), this._ch.writeUInt8(t);
      else if (t < 65536)
        this._ch.writeUInt8(xy), this._ch.writeUInt8((t / 256 >> 0) % 256), this._ch.writeUInt8(t % 256);
      else if (t < 4294967296)
        this._ch.writeUInt8(Wy), this._ch.writeUInt8((t / 16777216 >> 0) % 256), this._ch.writeUInt8((t / 65536 >> 0) % 256), this._ch.writeUInt8((t / 256 >> 0) % 256), this._ch.writeUInt8(t % 256);
      else
        throw (0, ke.newError)("Byte arrays of size " + t + " are not supported");
    }, e.prototype.packMapHeader = function(t) {
      if (t < 16)
        this._ch.writeUInt8(Sy | t);
      else if (t < 256)
        this._ch.writeUInt8(Vy), this._ch.writeUInt8(t);
      else if (t < 65536)
        this._ch.writeUInt8(qy), this._ch.writeUInt8(t / 256 >> 0), this._ch.writeUInt8(t % 256);
      else if (t < 4294967296)
        this._ch.writeUInt8(Hy), this._ch.writeUInt8((t / 16777216 >> 0) % 256), this._ch.writeUInt8((t / 65536 >> 0) % 256), this._ch.writeUInt8((t / 256 >> 0) % 256), this._ch.writeUInt8(t % 256);
      else
        throw (0, ke.newError)("Maps of size " + t + " are not supported");
    }, e.prototype.packStructHeader = function(t, r) {
      if (t < 16)
        this._ch.writeUInt8(Ty | t), this._ch.writeUInt8(r);
      else if (t < 256)
        this._ch.writeUInt8(zy), this._ch.writeUInt8(t), this._ch.writeUInt8(r);
      else if (t < 65536)
        this._ch.writeUInt8(Yy), this._ch.writeUInt8(t / 256 >> 0), this._ch.writeUInt8(t % 256);
      else
        throw (0, ke.newError)("Structures of size " + t + " are not supported");
    }, e.prototype.disableByteArrays = function() {
      this._byteArraysSupported = !1;
    }, e.prototype._nonPackableValue = function(t) {
      return function() {
        throw (0, ke.newError)(t, RF);
      };
    }, e;
  }()
);
Wt.Packer = AF;
var CF = (
  /** @class */
  function() {
    function e(t, r) {
      t === void 0 && (t = !1), r === void 0 && (r = !1), this._disableLosslessIntegers = t, this._useBigInt = r;
    }
    return e.prototype.unpack = function(t, r) {
      r === void 0 && (r = gy.functional.identity);
      var n = t.readUInt8(), i = n & 240, o = n & 15;
      if (n === Py)
        return null;
      var a = this._unpackBoolean(n);
      if (a !== null)
        return a;
      var u = this._unpackNumberOrInteger(n, t);
      if (u !== null) {
        if ((0, ke.isInt)(u)) {
          if (this._useBigInt)
            return u.toBigInt();
          if (this._disableLosslessIntegers)
            return u.toNumberOrInfinity();
        }
        return u;
      }
      var c = this._unpackString(n, i, o, t);
      if (c !== null)
        return c;
      var s = this._unpackList(n, i, o, t, r);
      if (s !== null)
        return s;
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
      return t === Ay ? !0 : t === Ry ? !1 : null;
    }, e.prototype._unpackNumberOrInteger = function(t, r) {
      return t === Iy ? r.readFloat64() : this._unpackInteger(t, r);
    }, e.prototype._unpackInteger = function(t, r) {
      if (t >= 0 && t < 128)
        return (0, ke.int)(t);
      if (t >= 240 && t < 256)
        return (0, ke.int)(t - 256);
      if (t === Cy)
        return (0, ke.int)(r.readInt8());
      if (t === jy)
        return (0, ke.int)(r.readInt16());
      if (t === Ny) {
        var n = r.readInt32();
        return (0, ke.int)(n);
      } else if (t === $y) {
        var i = r.readInt32(), o = r.readInt32();
        return new ke.Integer(o, i);
      } else
        return null;
    }, e.prototype._unpackString = function(t, r, n, i) {
      return r === wy ? yi.utf8.decode(i, n) : t === My ? yi.utf8.decode(i, i.readUInt8()) : t === ky ? yi.utf8.decode(i, i.readUInt16()) : t === Dy ? yi.utf8.decode(i, i.readUInt32()) : null;
    }, e.prototype._unpackList = function(t, r, n, i, o) {
      return r === Ey ? this._unpackListWithSize(n, i, o) : t === Uy ? this._unpackListWithSize(i.readUInt8(), i, o) : t === Ly ? this._unpackListWithSize(i.readUInt16(), i, o) : t === Fy ? this._unpackListWithSize(i.readUInt32(), i, o) : null;
    }, e.prototype._unpackListWithSize = function(t, r, n) {
      for (var i = [], o = 0; o < t; o++)
        i.push(this.unpack(r, n));
      return i;
    }, e.prototype._unpackByteArray = function(t, r) {
      return t === By ? this._unpackByteArrayWithSize(r.readUInt8(), r) : t === xy ? this._unpackByteArrayWithSize(r.readUInt16(), r) : t === Wy ? this._unpackByteArrayWithSize(r.readUInt32(), r) : null;
    }, e.prototype._unpackByteArrayWithSize = function(t, r) {
      for (var n = new Int8Array(t), i = 0; i < t; i++)
        n[i] = r.readInt8();
      return n;
    }, e.prototype._unpackMap = function(t, r, n, i, o) {
      return r === Sy ? this._unpackMapWithSize(n, i, o) : t === Vy ? this._unpackMapWithSize(i.readUInt8(), i, o) : t === qy ? this._unpackMapWithSize(i.readUInt16(), i, o) : t === Hy ? this._unpackMapWithSize(i.readUInt32(), i, o) : null;
    }, e.prototype._unpackMapWithSize = function(t, r, n) {
      for (var i = {}, o = 0; o < t; o++) {
        var a = this.unpack(r, n);
        i[a] = this.unpack(r, n);
      }
      return i;
    }, e.prototype._unpackStruct = function(t, r, n, i, o) {
      return r === Ty ? this._unpackStructWithSize(n, i, o) : t === zy ? this._unpackStructWithSize(i.readUInt8(), i, o) : t === Yy ? this._unpackStructWithSize(i.readUInt16(), i, o) : null;
    }, e.prototype._unpackStructWithSize = function(t, r, n) {
      for (var i = r.readUInt8(), o = new Oy.Structure(i, []), a = 0; a < t; a++)
        o.fields.push(this.unpack(r, n));
      return n(o);
    }, e;
  }()
);
Wt.Unpacker = CF;
function jF(e) {
  return e == null ? !1 : typeof e[Symbol.iterator] == "function";
}
var On = {}, Gy = d && d.__extends || function() {
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
}(), NF = d && d.__createBinding || (Object.create ? function(e, t, r, n) {
  n === void 0 && (n = r);
  var i = Object.getOwnPropertyDescriptor(t, r);
  (!i || ("get" in i ? !t.__esModule : i.writable || i.configurable)) && (i = { enumerable: !0, get: function() {
    return t[r];
  } }), Object.defineProperty(e, n, i);
} : function(e, t, r, n) {
  n === void 0 && (n = r), e[n] = t[r];
}), $F = d && d.__setModuleDefault || (Object.create ? function(e, t) {
  Object.defineProperty(e, "default", { enumerable: !0, value: t });
} : function(e, t) {
  e.default = t;
}), MF = d && d.__importStar || function(e) {
  if (e && e.__esModule)
    return e;
  var t = {};
  if (e != null)
    for (var r in e)
      r !== "default" && Object.prototype.hasOwnProperty.call(e, r) && NF(t, e, r);
  return $F(t, e), t;
};
Object.defineProperty(On, "__esModule", { value: !0 });
On.Unpacker = On.Packer = void 0;
var Ky = MF(Wt), kF = (
  /** @class */
  function(e) {
    Gy(t, e);
    function t() {
      return e !== null && e.apply(this, arguments) || this;
    }
    return t.prototype.disableByteArrays = function() {
      throw new Error("Bolt V2 should always support byte arrays");
    }, t;
  }(Ky.Packer)
);
On.Packer = kF;
var DF = (
  /** @class */
  function(e) {
    Gy(t, e);
    function t(r, n) {
      return r === void 0 && (r = !1), n === void 0 && (n = !1), e.call(this, r, n) || this;
    }
    return t;
  }(Ky.Unpacker)
);
On.Unpacker = DF;
var UF = d && d.__createBinding || (Object.create ? function(e, t, r, n) {
  n === void 0 && (n = r);
  var i = Object.getOwnPropertyDescriptor(t, r);
  (!i || ("get" in i ? !t.__esModule : i.writable || i.configurable)) && (i = { enumerable: !0, get: function() {
    return t[r];
  } }), Object.defineProperty(e, n, i);
} : function(e, t, r, n) {
  n === void 0 && (n = r), e[n] = t[r];
}), LF = d && d.__setModuleDefault || (Object.create ? function(e, t) {
  Object.defineProperty(e, "default", { enumerable: !0, value: t });
} : function(e, t) {
  e.default = t;
}), fd = d && d.__importStar || function(e) {
  if (e && e.__esModule)
    return e;
  var t = {};
  if (e != null)
    for (var r in e)
      r !== "default" && Object.prototype.hasOwnProperty.call(e, r) && UF(t, e, r);
  return LF(t, e), t;
};
Object.defineProperty(Ke, "__esModule", { value: !0 });
Ke.structure = Ke.v2 = Ke.v1 = void 0;
var FF = fd(Wt);
Ke.v1 = FF;
var Zy = fd(On);
Ke.v2 = Zy;
var BF = fd(it);
Ke.structure = BF;
Ke.default = Zy;
var zr = {};
Object.defineProperty(zr, "__esModule", { value: !0 });
var Ze = ee, Qy = Ze.internal.constants, xF = Qy.ACCESS_MODE_READ, cu = Qy.FETCH_ALL, qv = Ze.internal.util.assertString, WF = 1, VF = 15, Hv = 16, qF = 63, HF = 1, zF = 2, YF = 17, GF = 18, KF = 19, zv = 102, ZF = 47, QF = 63, JF = "r", bi = -1, ri = (
  /** @class */
  function() {
    function e(t, r, n) {
      this.signature = t, this.fields = r, this.toString = n;
    }
    return e.init = function(t, r) {
      return new e(WF, [t, r], function() {
        return "INIT ".concat(t, " {...}");
      });
    }, e.run = function(t, r) {
      return new e(Hv, [t, r], function() {
        return "RUN ".concat(t, " ").concat(Ze.json.stringify(r));
      });
    }, e.pullAll = function() {
      return XF;
    }, e.reset = function() {
      return eB;
    }, e.hello = function(t, r, n, i) {
      n === void 0 && (n = null), i === void 0 && (i = null);
      var o = Object.assign({ user_agent: t }, r);
      return n && (o.routing = n), i && (o.patch_bolt = i), new e(HF, [o], function() {
        return "HELLO {user_agent: '".concat(t, "', ...}");
      });
    }, e.begin = function(t) {
      var r = t === void 0 ? {} : t, n = r.bookmarks, i = r.txConfig, o = r.database, a = r.mode, u = r.impersonatedUser, c = Yv(n, i, o, a, u);
      return new e(YF, [c], function() {
        return "BEGIN ".concat(Ze.json.stringify(c));
      });
    }, e.commit = function() {
      return rB;
    }, e.rollback = function() {
      return tB;
    }, e.runWithMetadata = function(t, r, n) {
      var i = n === void 0 ? {} : n, o = i.bookmarks, a = i.txConfig, u = i.database, c = i.mode, s = i.impersonatedUser, l = Yv(o, a, u, c, s);
      return new e(Hv, [t, r, l], function() {
        return "RUN ".concat(t, " ").concat(Ze.json.stringify(r), " ").concat(Ze.json.stringify(l));
      });
    }, e.goodbye = function() {
      return nB;
    }, e.pull = function(t) {
      var r = t === void 0 ? {} : t, n = r.stmtId, i = n === void 0 ? bi : n, o = r.n, a = o === void 0 ? cu : o, u = Gv(i ?? bi, a || cu);
      return new e(QF, [u], function() {
        return "PULL ".concat(Ze.json.stringify(u));
      });
    }, e.discard = function(t) {
      var r = t === void 0 ? {} : t, n = r.stmtId, i = n === void 0 ? bi : n, o = r.n, a = o === void 0 ? cu : o, u = Gv(i ?? bi, a || cu);
      return new e(ZF, [u], function() {
        return "DISCARD ".concat(Ze.json.stringify(u));
      });
    }, e.route = function(t, r, n) {
      return t === void 0 && (t = {}), r === void 0 && (r = []), n === void 0 && (n = null), new e(zv, [t, r, n], function() {
        return "ROUTE ".concat(Ze.json.stringify(t), " ").concat(Ze.json.stringify(r), " ").concat(n);
      });
    }, e.routeV4x4 = function(t, r, n) {
      t === void 0 && (t = {}), r === void 0 && (r = []), n === void 0 && (n = {});
      var i = {};
      return n.databaseName && (i.db = n.databaseName), n.impersonatedUser && (i.imp_user = n.impersonatedUser), new e(zv, [t, r, i], function() {
        return "ROUTE ".concat(Ze.json.stringify(t), " ").concat(Ze.json.stringify(r), " ").concat(Ze.json.stringify(i));
      });
    }, e;
  }()
);
zr.default = ri;
function Yv(e, t, r, n, i) {
  var o = {};
  return e.isEmpty() || (o.bookmarks = e.values()), t.timeout !== null && (o.tx_timeout = t.timeout), t.metadata && (o.tx_metadata = t.metadata), r && (o.db = qv(r, "database")), i && (o.imp_user = qv(i, "impersonatedUser")), n === xF && (o.mode = JF), o;
}
function Gv(e, t) {
  var r = { n: (0, Ze.int)(t) };
  return e !== bi && (r.qid = (0, Ze.int)(e)), r;
}
var XF = new ri(qF, [], function() {
  return "PULL_ALL";
}), eB = new ri(VF, [], function() {
  return "RESET";
}), rB = new ri(GF, [], function() {
  return "COMMIT";
}), tB = new ri(KF, [], function() {
  return "ROLLBACK";
}), nB = new ri(zF, [], function() {
  return "GOODBYE";
}), Zs = {}, Qe = {};
Object.defineProperty(Qe, "__esModule", { value: !0 });
Qe.TypeTransformer = void 0;
var iB = Ke, oB = ee, aB = oB.internal.objectUtil, uB = (
  /** @class */
  function() {
    function e(t) {
      this._transformers = t, this._transformersPerSignature = new Map(t.map(function(r) {
        return [r.signature, r];
      })), this.fromStructure = this.fromStructure.bind(this), this.toStructure = this.toStructure.bind(this), Object.freeze(this);
    }
    return e.prototype.fromStructure = function(t) {
      try {
        if (t instanceof iB.structure.Structure && this._transformersPerSignature.has(t.signature)) {
          var r = this._transformersPerSignature.get(t.signature).fromStructure;
          return r(t);
        }
        return t;
      } catch (n) {
        return aB.createBrokenObject(n);
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
Qe.default = uB;
var sB = (
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
Qe.TypeTransformer = sB;
var Qs = d && d.__read || function(e, t) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r)
    return e;
  var n = r.call(e), i, o = [], a;
  try {
    for (; (t === void 0 || t-- > 0) && !(i = n.next()).done; )
      o.push(i.value);
  } catch (u) {
    a = { error: u };
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
var qe = ee, Js = Ke, Xs = Qe, ec = qe.error.PROTOCOL_ERROR, cB = 78, lB = 3, fB = 82, dB = 5, hB = 114, vB = 3, _B = 80, pB = 3;
function mB() {
  return new Xs.TypeTransformer({
    signature: cB,
    isTypeInstance: function(e) {
      return e instanceof qe.Node;
    },
    toStructure: function(e) {
      throw (0, qe.newError)("It is not allowed to pass nodes in query parameters, given: ".concat(e), ec);
    },
    fromStructure: function(e) {
      Js.structure.verifyStructSize("Node", lB, e.size);
      var t = Qs(e.fields, 3), r = t[0], n = t[1], i = t[2];
      return new qe.Node(r, n, i);
    }
  });
}
function yB() {
  return new Xs.TypeTransformer({
    signature: fB,
    isTypeInstance: function(e) {
      return e instanceof qe.Relationship;
    },
    toStructure: function(e) {
      throw (0, qe.newError)("It is not allowed to pass relationships in query parameters, given: ".concat(e), ec);
    },
    fromStructure: function(e) {
      Js.structure.verifyStructSize("Relationship", dB, e.size);
      var t = Qs(e.fields, 5), r = t[0], n = t[1], i = t[2], o = t[3], a = t[4];
      return new qe.Relationship(r, n, i, o, a);
    }
  });
}
function bB() {
  return new Xs.TypeTransformer({
    signature: hB,
    isTypeInstance: function(e) {
      return e instanceof qe.UnboundRelationship;
    },
    toStructure: function(e) {
      throw (0, qe.newError)("It is not allowed to pass unbound relationships in query parameters, given: ".concat(e), ec);
    },
    fromStructure: function(e) {
      Js.structure.verifyStructSize("UnboundRelationship", vB, e.size);
      var t = Qs(e.fields, 3), r = t[0], n = t[1], i = t[2];
      return new qe.UnboundRelationship(r, n, i);
    }
  });
}
function gB() {
  return new Xs.TypeTransformer({
    signature: _B,
    isTypeInstance: function(e) {
      return e instanceof qe.Path;
    },
    toStructure: function(e) {
      throw (0, qe.newError)("It is not allowed to pass paths in query parameters, given: ".concat(e), ec);
    },
    fromStructure: function(e) {
      Js.structure.verifyStructSize("Path", pB, e.size);
      for (var t = Qs(e.fields, 3), r = t[0], n = t[1], i = t[2], o = [], a = r[0], u = 0; u < i.length; u += 2) {
        var c = r[i[u + 1]], s = (0, qe.toNumber)(i[u]), l = void 0;
        s > 0 ? (l = n[s - 1], l instanceof qe.UnboundRelationship && (n[s - 1] = l = l.bindTo(a, c))) : (l = n[-s - 1], l instanceof qe.UnboundRelationship && (n[-s - 1] = l = l.bindTo(c, a))), o.push(new qe.PathSegment(a, l, c)), a = c;
      }
      return new qe.Path(r[0], r[r.length - 1], o);
    }
  });
}
Zs.default = {
  createNodeTransformer: mB,
  createRelationshipTransformer: yB,
  createUnboundRelationshipTransformer: bB,
  createPathTransformer: gB
};
var dd = d && d.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(zs, "__esModule", { value: !0 });
var Ml = Pr, kl = Ke, lu = dd(zr), Dl = Pe, rc = ee, OB = dd(Zs), wB = dd(Qe), Kv = rc.internal.bookmarks.Bookmarks, Jy = rc.internal.constants, Zv = Jy.ACCESS_MODE_WRITE, EB = Jy.BOLT_PROTOCOL_V1;
rc.internal.logger.Logger;
var Qv = rc.internal.txConfig.TxConfig, SB = (
  /** @class */
  function() {
    function e(t, r, n, i, o, a) {
      var u = n === void 0 ? {} : n, c = u.disableLosslessIntegers, s = u.useBigInt;
      i === void 0 && (i = function() {
        return null;
      }), this._server = t || {}, this._chunker = r, this._packer = this._createPacker(r), this._unpacker = this._createUnpacker(c, s), this._responseHandler = i(this), this._log = o, this._onProtocolError = a, this._fatalError = null, this._lastMessageSignature = null, this._config = { disableLosslessIntegers: c, useBigInt: s };
    }
    return Object.defineProperty(e.prototype, "transformer", {
      get: function() {
        var t = this;
        return this._transformer === void 0 && (this._transformer = new wB.default(Object.values(OB.default).map(function(r) {
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
        return EB;
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
      var r = this, n = t === void 0 ? {} : t, i = n.userAgent, o = n.authToken, a = n.onError, u = n.onComplete, c = new Dl.LoginObserver({
        onError: function(s) {
          return r._onLoginError(s, a);
        },
        onCompleted: function(s) {
          return r._onLoginCompleted(s, u);
        }
      });
      return this.write(lu.default.init(i, o), c, !0), c;
    }, e.prototype.prepareToClose = function() {
    }, e.prototype.beginTransaction = function(t) {
      var r = t === void 0 ? {} : t, n = r.bookmarks, i = r.txConfig, o = r.database, a = r.mode, u = r.impersonatedUser, c = r.beforeError, s = r.afterError, l = r.beforeComplete, v = r.afterComplete;
      return this.run("BEGIN", n ? n.asBeginTransactionParameters() : {}, {
        bookmarks: n,
        txConfig: i,
        database: o,
        mode: a,
        impersonatedUser: u,
        beforeError: c,
        afterError: s,
        beforeComplete: l,
        afterComplete: v,
        flush: !1
      });
    }, e.prototype.commitTransaction = function(t) {
      var r = t === void 0 ? {} : t, n = r.beforeError, i = r.afterError, o = r.beforeComplete, a = r.afterComplete;
      return this.run("COMMIT", {}, {
        bookmarks: Kv.empty(),
        txConfig: Qv.empty(),
        mode: Zv,
        beforeError: n,
        afterError: i,
        beforeComplete: o,
        afterComplete: a
      });
    }, e.prototype.rollbackTransaction = function(t) {
      var r = t === void 0 ? {} : t, n = r.beforeError, i = r.afterError, o = r.beforeComplete, a = r.afterComplete;
      return this.run("ROLLBACK", {}, {
        bookmarks: Kv.empty(),
        txConfig: Qv.empty(),
        mode: Zv,
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
      var u = i.impersonatedUser, c = i.beforeKeys, s = i.afterKeys, l = i.beforeError, v = i.afterError, y = i.beforeComplete, O = i.afterComplete, E = i.flush, T = E === void 0 ? !0 : E, C = i.highRecordWatermark, A = C === void 0 ? Number.MAX_VALUE : C, $ = i.lowRecordWatermark, U = $ === void 0 ? Number.MAX_VALUE : $, D = new Dl.ResultStreamObserver({
        server: this._server,
        beforeKeys: c,
        afterKeys: s,
        beforeError: l,
        afterError: v,
        beforeComplete: y,
        afterComplete: O,
        highRecordWatermark: A,
        lowRecordWatermark: U
      });
      return (0, Ml.assertTxConfigIsEmpty)(o, this._onProtocolError, D), (0, Ml.assertDatabaseIsEmpty)(a, this._onProtocolError, D), (0, Ml.assertImpersonatedUserIsEmpty)(u, this._onProtocolError, D), this.write(lu.default.run(t, r), D, !1), this.write(lu.default.pullAll(), D, T), D;
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
zs.default = SB;
var tc = {}, nc = {}, xr = {};
Object.defineProperty(xr, "__esModule", { value: !0 });
xr.epochSecondAndNanoToLocalDateTime = xr.nanoOfDayToLocalTime = xr.epochDayToDate = void 0;
var $t = ee, yt = $t.internal.temporalUtil, TB = yt.DAYS_0000_TO_1970, Ul = yt.DAYS_PER_400_YEAR_CYCLE, Jv = yt.NANOS_PER_HOUR, Xv = yt.NANOS_PER_MINUTE, df = yt.NANOS_PER_SECOND, e_ = yt.SECONDS_PER_DAY, PB = yt.floorDiv, IB = yt.floorMod;
function Xy(e) {
  e = (0, $t.int)(e);
  var t = e.add(TB).subtract(60), r = (0, $t.int)(0);
  if (t.lessThan(0)) {
    var n = t.add(1).div(Ul).subtract(1);
    r = n.multiply(400), t = t.add(n.multiply(-Ul));
  }
  var i = t.multiply(400).add(591).div(Ul), o = t.subtract(i.multiply(365).add(i.div(4)).subtract(i.div(100)).add(i.div(400)));
  o.lessThan(0) && (i = i.subtract(1), o = t.subtract(i.multiply(365).add(i.div(4)).subtract(i.div(100)).add(i.div(400)))), i = i.add(r);
  var a = o, u = a.multiply(5).add(2).div(153), c = u.add(2).modulo(12).add(1), s = a.subtract(u.multiply(306).add(5).div(10)).add(1);
  return i = i.add(u.div(10)), new $t.Date(i, c, s);
}
xr.epochDayToDate = Xy;
function eb(e) {
  e = (0, $t.int)(e);
  var t = e.div(Jv);
  e = e.subtract(t.multiply(Jv));
  var r = e.div(Xv);
  e = e.subtract(r.multiply(Xv));
  var n = e.div(df), i = e.subtract(n.multiply(df));
  return new $t.LocalTime(t, r, n, i);
}
xr.nanoOfDayToLocalTime = eb;
function RB(e, t) {
  var r = PB(e, e_), n = IB(e, e_), i = n.multiply(df).add(t), o = Xy(r), a = eb(i);
  return new $t.LocalDateTime(o.year, o.month, o.day, a.hour, a.minute, a.second, a.nanosecond);
}
xr.epochSecondAndNanoToLocalDateTime = RB;
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
  } catch (u) {
    a = { error: u };
  } finally {
    try {
      i && !i.done && (r = n.return) && r.call(n);
    } finally {
      if (a)
        throw a.error;
    }
  }
  return o;
}, AB = d && d.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(nc, "__esModule", { value: !0 });
var be = ee, Ve = Ke, Gr = Qe, ti = xr, CB = AB(Zs), hd = be.internal.temporalUtil, jB = hd.dateToEpochDay, vd = hd.localDateTimeToEpochSecond, rb = hd.localTimeToNanoOfDay, r_ = 88, NB = 3, t_ = 89, $B = 4, n_ = 69, MB = 4, i_ = 116, kB = 1, o_ = 84, DB = 2, a_ = 68, UB = 1, u_ = 100, LB = 2, s_ = 70, FB = 3, c_ = 102, BB = 3;
function xB() {
  return new Gr.TypeTransformer({
    signature: r_,
    isTypeInstance: function(e) {
      return (0, be.isPoint)(e) && (e.z === null || e.z === void 0);
    },
    toStructure: function(e) {
      return new Ve.structure.Structure(r_, [
        (0, be.int)(e.srid),
        e.x,
        e.y
      ]);
    },
    fromStructure: function(e) {
      Ve.structure.verifyStructSize("Point2D", NB, e.size);
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
function WB() {
  return new Gr.TypeTransformer({
    signature: t_,
    isTypeInstance: function(e) {
      return (0, be.isPoint)(e) && e.z !== null && e.z !== void 0;
    },
    toStructure: function(e) {
      return new Ve.structure.Structure(t_, [
        (0, be.int)(e.srid),
        e.x,
        e.y,
        e.z
      ]);
    },
    fromStructure: function(e) {
      Ve.structure.verifyStructSize("Point3D", $B, e.size);
      var t = Yr(e.fields, 4), r = t[0], n = t[1], i = t[2], o = t[3];
      return new be.Point(r, n, i, o);
    }
  });
}
function VB() {
  return new Gr.TypeTransformer({
    signature: n_,
    isTypeInstance: be.isDuration,
    toStructure: function(e) {
      var t = (0, be.int)(e.months), r = (0, be.int)(e.days), n = (0, be.int)(e.seconds), i = (0, be.int)(e.nanoseconds);
      return new Ve.structure.Structure(n_, [t, r, n, i]);
    },
    fromStructure: function(e) {
      Ve.structure.verifyStructSize("Duration", MB, e.size);
      var t = Yr(e.fields, 4), r = t[0], n = t[1], i = t[2], o = t[3];
      return new be.Duration(r, n, i, o);
    }
  });
}
function qB(e) {
  var t = e.disableLosslessIntegers, r = e.useBigInt;
  return new Gr.TypeTransformer({
    signature: i_,
    isTypeInstance: be.isLocalTime,
    toStructure: function(n) {
      var i = rb(n.hour, n.minute, n.second, n.nanosecond);
      return new Ve.structure.Structure(i_, [i]);
    },
    fromStructure: function(n) {
      Ve.structure.verifyStructSize("LocalTime", kB, n.size);
      var i = Yr(n.fields, 1), o = i[0], a = (0, ti.nanoOfDayToLocalTime)(o);
      return ni(a, t, r);
    }
  });
}
function HB(e) {
  var t = e.disableLosslessIntegers, r = e.useBigInt;
  return new Gr.TypeTransformer({
    signature: o_,
    isTypeInstance: be.isTime,
    toStructure: function(n) {
      var i = rb(n.hour, n.minute, n.second, n.nanosecond), o = (0, be.int)(n.timeZoneOffsetSeconds);
      return new Ve.structure.Structure(o_, [i, o]);
    },
    fromStructure: function(n) {
      Ve.structure.verifyStructSize("Time", DB, n.size);
      var i = Yr(n.fields, 2), o = i[0], a = i[1], u = (0, ti.nanoOfDayToLocalTime)(o), c = new be.Time(u.hour, u.minute, u.second, u.nanosecond, a);
      return ni(c, t, r);
    }
  });
}
function zB(e) {
  var t = e.disableLosslessIntegers, r = e.useBigInt;
  return new Gr.TypeTransformer({
    signature: a_,
    isTypeInstance: be.isDate,
    toStructure: function(n) {
      var i = jB(n.year, n.month, n.day);
      return new Ve.structure.Structure(a_, [i]);
    },
    fromStructure: function(n) {
      Ve.structure.verifyStructSize("Date", UB, n.size);
      var i = Yr(n.fields, 1), o = i[0], a = (0, ti.epochDayToDate)(o);
      return ni(a, t, r);
    }
  });
}
function YB(e) {
  var t = e.disableLosslessIntegers, r = e.useBigInt;
  return new Gr.TypeTransformer({
    signature: u_,
    isTypeInstance: be.isLocalDateTime,
    toStructure: function(n) {
      var i = vd(n.year, n.month, n.day, n.hour, n.minute, n.second, n.nanosecond), o = (0, be.int)(n.nanosecond);
      return new Ve.structure.Structure(u_, [i, o]);
    },
    fromStructure: function(n) {
      Ve.structure.verifyStructSize("LocalDateTime", LB, n.size);
      var i = Yr(n.fields, 2), o = i[0], a = i[1], u = (0, ti.epochSecondAndNanoToLocalDateTime)(o, a);
      return ni(u, t, r);
    }
  });
}
function GB(e) {
  var t = e.disableLosslessIntegers, r = e.useBigInt;
  return new Gr.TypeTransformer({
    signature: c_,
    isTypeInstance: function(n) {
      return (0, be.isDateTime)(n) && n.timeZoneId != null;
    },
    toStructure: function(n) {
      var i = vd(n.year, n.month, n.day, n.hour, n.minute, n.second, n.nanosecond), o = (0, be.int)(n.nanosecond), a = n.timeZoneId;
      return new Ve.structure.Structure(c_, [i, o, a]);
    },
    fromStructure: function(n) {
      Ve.structure.verifyStructSize("DateTimeWithZoneId", BB, n.size);
      var i = Yr(n.fields, 3), o = i[0], a = i[1], u = i[2], c = (0, ti.epochSecondAndNanoToLocalDateTime)(o, a), s = new be.DateTime(c.year, c.month, c.day, c.hour, c.minute, c.second, c.nanosecond, null, u);
      return ni(s, t, r);
    }
  });
}
function KB(e) {
  var t = e.disableLosslessIntegers, r = e.useBigInt;
  return new Gr.TypeTransformer({
    signature: s_,
    isTypeInstance: function(n) {
      return (0, be.isDateTime)(n) && n.timeZoneId == null;
    },
    toStructure: function(n) {
      var i = vd(n.year, n.month, n.day, n.hour, n.minute, n.second, n.nanosecond), o = (0, be.int)(n.nanosecond), a = (0, be.int)(n.timeZoneOffsetSeconds);
      return new Ve.structure.Structure(s_, [i, o, a]);
    },
    fromStructure: function(n) {
      Ve.structure.verifyStructSize("DateTimeWithZoneOffset", FB, n.size);
      var i = Yr(n.fields, 3), o = i[0], a = i[1], u = i[2], c = (0, ti.epochSecondAndNanoToLocalDateTime)(o, a), s = new be.DateTime(c.year, c.month, c.day, c.hour, c.minute, c.second, c.nanosecond, u, null);
      return ni(s, t, r);
    }
  });
}
function ni(e, t, r) {
  if (!t && !r)
    return e;
  var n = function(u) {
    return r ? u.toBigInt() : u.toNumberOrInfinity();
  }, i = Object.create(Object.getPrototypeOf(e));
  for (var o in e)
    if (Object.prototype.hasOwnProperty.call(e, o) === !0) {
      var a = e[o];
      i[o] = (0, be.isInt)(a) ? n(a) : a;
    }
  return Object.freeze(i), i;
}
nc.default = Du(Du({}, CB.default), { createPoint2DTransformer: xB, createPoint3DTransformer: WB, createDurationTransformer: VB, createLocalTimeTransformer: qB, createTimeTransformer: HB, createDateTransformer: zB, createLocalDateTimeTransformer: YB, createDateTimeWithZoneIdTransformer: GB, createDateTimeWithOffsetTransformer: KB });
var ZB = d && d.__extends || function() {
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
var QB = ic(zs), l_ = ic(Ke), JB = ee, XB = ic(nc), e4 = ic(Qe), r4 = JB.internal.constants.BOLT_PROTOCOL_V2, t4 = (
  /** @class */
  function(e) {
    ZB(t, e);
    function t() {
      return e !== null && e.apply(this, arguments) || this;
    }
    return t.prototype._createPacker = function(r) {
      return new l_.default.Packer(r);
    }, t.prototype._createUnpacker = function(r, n) {
      return new l_.default.Unpacker(r, n);
    }, Object.defineProperty(t.prototype, "transformer", {
      get: function() {
        var r = this;
        return this._transformer === void 0 && (this._transformer = new e4.default(Object.values(XB.default).map(function(n) {
          return n(r._config, r._log);
        }))), this._transformer;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t.prototype, "version", {
      get: function() {
        return r4;
      },
      enumerable: !1,
      configurable: !0
    }), t;
  }(QB.default)
);
tc.default = t4;
var oc = {}, ac = {}, hf = d && d.__assign || function() {
  return hf = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var i in t)
        Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
    }
    return e;
  }, hf.apply(this, arguments);
}, n4 = d && d.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(ac, "__esModule", { value: !0 });
var i4 = n4(nc);
ac.default = hf({}, i4.default);
var o4 = d && d.__extends || function() {
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
var a4 = uc(tc), Tt = uc(zr), fu = Pr, At = Pe, u4 = uc(ac), s4 = uc(Qe), _d = ee;
_d.internal.bookmarks.Bookmarks;
var c4 = _d.internal.constants.BOLT_PROTOCOL_V3, l4 = _d.internal.txConfig.TxConfig, tb = "context", f4 = "CALL dbms.cluster.routing.getRoutingTable($".concat(tb, ")"), d4 = new At.StreamObserver(), h4 = (
  /** @class */
  function(e) {
    o4(t, e);
    function t() {
      return e !== null && e.apply(this, arguments) || this;
    }
    return Object.defineProperty(t.prototype, "version", {
      get: function() {
        return c4;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t.prototype, "transformer", {
      get: function() {
        var r = this;
        return this._transformer === void 0 && (this._transformer = new s4.default(Object.values(u4.default).map(function(n) {
          return n(r._config, r._log);
        }))), this._transformer;
      },
      enumerable: !1,
      configurable: !0
    }), t.prototype.transformMetadata = function(r) {
      return "t_first" in r && (r.result_available_after = r.t_first, delete r.t_first), "t_last" in r && (r.result_consumed_after = r.t_last, delete r.t_last), r;
    }, t.prototype.initialize = function(r) {
      var n = this, i = r === void 0 ? {} : r, o = i.userAgent, a = i.authToken, u = i.onError, c = i.onComplete, s = new At.LoginObserver({
        onError: function(l) {
          return n._onLoginError(l, u);
        },
        onCompleted: function(l) {
          return n._onLoginCompleted(l, c);
        }
      });
      return this.write(Tt.default.hello(o, a), s, !0), s;
    }, t.prototype.prepareToClose = function() {
      this.write(Tt.default.goodbye(), d4, !0);
    }, t.prototype.beginTransaction = function(r) {
      var n = r === void 0 ? {} : r, i = n.bookmarks, o = n.txConfig, a = n.database, u = n.impersonatedUser, c = n.mode, s = n.beforeError, l = n.afterError, v = n.beforeComplete, y = n.afterComplete, O = new At.ResultStreamObserver({
        server: this._server,
        beforeError: s,
        afterError: l,
        beforeComplete: v,
        afterComplete: y
      });
      return O.prepareToHandleSingleResponse(), (0, fu.assertDatabaseIsEmpty)(a, this._onProtocolError, O), (0, fu.assertImpersonatedUserIsEmpty)(u, this._onProtocolError, O), this.write(Tt.default.begin({ bookmarks: i, txConfig: o, mode: c }), O, !0), O;
    }, t.prototype.commitTransaction = function(r) {
      var n = r === void 0 ? {} : r, i = n.beforeError, o = n.afterError, a = n.beforeComplete, u = n.afterComplete, c = new At.ResultStreamObserver({
        server: this._server,
        beforeError: i,
        afterError: o,
        beforeComplete: a,
        afterComplete: u
      });
      return c.prepareToHandleSingleResponse(), this.write(Tt.default.commit(), c, !0), c;
    }, t.prototype.rollbackTransaction = function(r) {
      var n = r === void 0 ? {} : r, i = n.beforeError, o = n.afterError, a = n.beforeComplete, u = n.afterComplete, c = new At.ResultStreamObserver({
        server: this._server,
        beforeError: i,
        afterError: o,
        beforeComplete: a,
        afterComplete: u
      });
      return c.prepareToHandleSingleResponse(), this.write(Tt.default.rollback(), c, !0), c;
    }, t.prototype.run = function(r, n, i) {
      var o = i === void 0 ? {} : i, a = o.bookmarks, u = o.txConfig, c = o.database, s = o.impersonatedUser, l = o.mode, v = o.beforeKeys, y = o.afterKeys, O = o.beforeError, E = o.afterError, T = o.beforeComplete, C = o.afterComplete, A = o.flush, $ = A === void 0 ? !0 : A, U = o.highRecordWatermark, D = U === void 0 ? Number.MAX_VALUE : U, F = o.lowRecordWatermark, G = F === void 0 ? Number.MAX_VALUE : F, X = new At.ResultStreamObserver({
        server: this._server,
        beforeKeys: v,
        afterKeys: y,
        beforeError: O,
        afterError: E,
        beforeComplete: T,
        afterComplete: C,
        highRecordWatermark: D,
        lowRecordWatermark: G
      });
      return (0, fu.assertDatabaseIsEmpty)(c, this._onProtocolError, X), (0, fu.assertImpersonatedUserIsEmpty)(s, this._onProtocolError, X), this.write(Tt.default.runWithMetadata(r, n, {
        bookmarks: a,
        txConfig: u,
        mode: l
      }), X, !1), this.write(Tt.default.pullAll(), X, $), X;
    }, t.prototype.requestRoutingInformation = function(r) {
      var n, i = r.routingContext, o = i === void 0 ? {} : i, a = r.sessionContext, u = a === void 0 ? {} : a, c = r.onError, s = r.onCompleted, l = this.run(f4, (n = {}, n[tb] = o, n), Uu(Uu({}, u), { txConfig: l4.empty() }));
      return new At.ProcedureRouteObserver({
        resultObserver: l,
        onProtocolError: this._onProtocolError,
        onError: c,
        onCompleted: s
      });
    }, t;
  }(a4.default)
);
oc.default = h4;
var sc = {}, cc = {}, vf = d && d.__assign || function() {
  return vf = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var i in t)
        Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
    }
    return e;
  }, vf.apply(this, arguments);
}, v4 = d && d.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(cc, "__esModule", { value: !0 });
var _4 = v4(ac);
cc.default = vf({}, _4.default);
var p4 = d && d.__extends || function() {
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
var m4 = lc(oc), vi = lc(zr), f_ = Pr, Ll = Pe, y4 = lc(cc), b4 = lc(Qe), pd = ee;
pd.internal.bookmarks.Bookmarks;
var nb = pd.internal.constants, g4 = nb.BOLT_PROTOCOL_V4_0, O4 = nb.FETCH_ALL, w4 = pd.internal.txConfig.TxConfig, ib = "context", ob = "database", E4 = "CALL dbms.routing.getRoutingTable($".concat(ib, ", $").concat(ob, ")"), S4 = (
  /** @class */
  function(e) {
    p4(t, e);
    function t() {
      return e !== null && e.apply(this, arguments) || this;
    }
    return Object.defineProperty(t.prototype, "version", {
      get: function() {
        return g4;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t.prototype, "transformer", {
      get: function() {
        var r = this;
        return this._transformer === void 0 && (this._transformer = new b4.default(Object.values(y4.default).map(function(n) {
          return n(r._config, r._log);
        }))), this._transformer;
      },
      enumerable: !1,
      configurable: !0
    }), t.prototype.beginTransaction = function(r) {
      var n = r === void 0 ? {} : r, i = n.bookmarks, o = n.txConfig, a = n.database, u = n.impersonatedUser, c = n.mode, s = n.beforeError, l = n.afterError, v = n.beforeComplete, y = n.afterComplete, O = new Ll.ResultStreamObserver({
        server: this._server,
        beforeError: s,
        afterError: l,
        beforeComplete: v,
        afterComplete: y
      });
      return O.prepareToHandleSingleResponse(), (0, f_.assertImpersonatedUserIsEmpty)(u, this._onProtocolError, O), this.write(vi.default.begin({ bookmarks: i, txConfig: o, database: a, mode: c }), O, !0), O;
    }, t.prototype.run = function(r, n, i) {
      var o = i === void 0 ? {} : i, a = o.bookmarks, u = o.txConfig, c = o.database, s = o.impersonatedUser, l = o.mode, v = o.beforeKeys, y = o.afterKeys, O = o.beforeError, E = o.afterError, T = o.beforeComplete, C = o.afterComplete, A = o.flush, $ = A === void 0 ? !0 : A, U = o.reactive, D = U === void 0 ? !1 : U, F = o.fetchSize, G = F === void 0 ? O4 : F, X = o.highRecordWatermark, oe = X === void 0 ? Number.MAX_VALUE : X, de = o.lowRecordWatermark, Ie = de === void 0 ? Number.MAX_VALUE : de, ge = new Ll.ResultStreamObserver({
        server: this._server,
        reactive: D,
        fetchSize: G,
        moreFunction: this._requestMore.bind(this),
        discardFunction: this._requestDiscard.bind(this),
        beforeKeys: v,
        afterKeys: y,
        beforeError: O,
        afterError: E,
        beforeComplete: T,
        afterComplete: C,
        highRecordWatermark: oe,
        lowRecordWatermark: Ie
      });
      (0, f_.assertImpersonatedUserIsEmpty)(s, this._onProtocolError, ge);
      var Ae = D;
      return this.write(vi.default.runWithMetadata(r, n, {
        bookmarks: a,
        txConfig: u,
        database: c,
        mode: l
      }), ge, Ae && $), D || this.write(vi.default.pull({ n: G }), ge, $), ge;
    }, t.prototype._requestMore = function(r, n, i) {
      this.write(vi.default.pull({ stmtId: r, n }), i, !0);
    }, t.prototype._requestDiscard = function(r, n) {
      this.write(vi.default.discard({ stmtId: r }), n, !0);
    }, t.prototype._noOp = function() {
    }, t.prototype.requestRoutingInformation = function(r) {
      var n, i = r.routingContext, o = i === void 0 ? {} : i, a = r.databaseName, u = a === void 0 ? null : a, c = r.sessionContext, s = c === void 0 ? {} : c, l = r.onError, v = r.onCompleted, y = this.run(E4, (n = {}, n[ib] = o, n[ob] = u, n), Lu(Lu({}, s), { txConfig: w4.empty() }));
      return new Ll.ProcedureRouteObserver({
        resultObserver: y,
        onProtocolError: this._onProtocolError,
        onError: l,
        onCompleted: v
      });
    }, t;
  }(m4.default)
);
sc.default = S4;
var fc = {}, dc = {}, _f = d && d.__assign || function() {
  return _f = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var i in t)
        Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
    }
    return e;
  }, _f.apply(this, arguments);
}, T4 = d && d.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(dc, "__esModule", { value: !0 });
var P4 = T4(cc);
dc.default = _f({}, P4.default);
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
}(), hc = d && d.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(fc, "__esModule", { value: !0 });
var R4 = hc(sc), A4 = hc(zr), C4 = Pe, j4 = ee, N4 = hc(dc), $4 = hc(Qe), M4 = j4.internal.constants.BOLT_PROTOCOL_V4_1, k4 = (
  /** @class */
  function(e) {
    I4(t, e);
    function t(r, n, i, o, a, u, c) {
      o === void 0 && (o = function() {
        return null;
      });
      var s = e.call(this, r, n, i, o, a, u) || this;
      return s._serversideRouting = c, s;
    }
    return Object.defineProperty(t.prototype, "version", {
      get: function() {
        return M4;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t.prototype, "transformer", {
      get: function() {
        var r = this;
        return this._transformer === void 0 && (this._transformer = new $4.default(Object.values(N4.default).map(function(n) {
          return n(r._config, r._log);
        }))), this._transformer;
      },
      enumerable: !1,
      configurable: !0
    }), t.prototype.initialize = function(r) {
      var n = this, i = r === void 0 ? {} : r, o = i.userAgent, a = i.authToken, u = i.onError, c = i.onComplete, s = new C4.LoginObserver({
        onError: function(l) {
          return n._onLoginError(l, u);
        },
        onCompleted: function(l) {
          return n._onLoginCompleted(l, c);
        }
      });
      return this.write(A4.default.hello(o, a, this._serversideRouting), s, !0), s;
    }, t;
  }(R4.default)
);
fc.default = k4;
var vc = {}, _c = {}, pf = d && d.__assign || function() {
  return pf = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var i in t)
        Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
    }
    return e;
  }, pf.apply(this, arguments);
}, D4 = d && d.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(_c, "__esModule", { value: !0 });
var U4 = D4(dc);
_c.default = pf({}, U4.default);
var L4 = d && d.__extends || function() {
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
var F4 = md(fc), B4 = ee, x4 = md(_c), W4 = md(Qe), V4 = B4.internal.constants.BOLT_PROTOCOL_V4_2, q4 = (
  /** @class */
  function(e) {
    L4(t, e);
    function t() {
      return e !== null && e.apply(this, arguments) || this;
    }
    return Object.defineProperty(t.prototype, "version", {
      get: function() {
        return V4;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t.prototype, "transformer", {
      get: function() {
        var r = this;
        return this._transformer === void 0 && (this._transformer = new W4.default(Object.values(x4.default).map(function(n) {
          return n(r._config, r._log);
        }))), this._transformer;
      },
      enumerable: !1,
      configurable: !0
    }), t;
  }(F4.default)
);
vc.default = q4;
var Va = {}, pc = {}, mf = d && d.__assign || function() {
  return mf = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var i in t)
        Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
    }
    return e;
  }, mf.apply(this, arguments);
}, H4 = d && d.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(pc, "__esModule", { value: !0 });
var z4 = H4(_c);
pc.default = mf({}, z4.default);
var qa = {}, Ha = {}, yf = d && d.__assign || function() {
  return yf = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var i in t)
        Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
    }
    return e;
  }, yf.apply(this, arguments);
}, Y4 = d && d.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(Ha, "__esModule", { value: !0 });
var G4 = Y4(pc);
Ha.default = yf({}, G4.default);
var ab = d && d.__read || function(e, t) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r)
    return e;
  var n = r.call(e), i, o = [], a;
  try {
    for (; (t === void 0 || t-- > 0) && !(i = n.next()).done; )
      o.push(i.value);
  } catch (u) {
    a = { error: u };
  } finally {
    try {
      i && !i.done && (r = n.return) && r.call(n);
    } finally {
      if (a)
        throw a.error;
    }
  }
  return o;
}, K4 = d && d.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(qa, "__esModule", { value: !0 });
var Fu = Ke, sr = ee, ub = K4(Ha), Z4 = xr, Q4 = Wa, Ni = sr.internal.temporalUtil.localDateTimeToEpochSecond, d_ = 73, J4 = 3, h_ = 105, X4 = 3;
function ex(e, t) {
  var r = e.disableLosslessIntegers, n = e.useBigInt, i = ub.default.createDateTimeWithZoneIdTransformer(e);
  return i.extendsWith({
    signature: h_,
    fromStructure: function(o) {
      Fu.structure.verifyStructSize("DateTimeWithZoneId", X4, o.size);
      var a = ab(o.fields, 3), u = a[0], c = a[1], s = a[2], l = bf(s, u, c), v = new sr.DateTime(l.year, l.month, l.day, l.hour, l.minute, l.second, (0, sr.int)(c), l.timeZoneOffsetSeconds, s);
      return sb(v, r, n);
    },
    toStructure: function(o) {
      var a = Ni(o.year, o.month, o.day, o.hour, o.minute, o.second, o.nanosecond), u = o.timeZoneOffsetSeconds != null ? o.timeZoneOffsetSeconds : rx(o.timeZoneId, a, o.nanosecond);
      o.timeZoneOffsetSeconds == null && t.warn('DateTime objects without "timeZoneOffsetSeconds" property are prune to bugs related to ambiguous times. For instance, 2022-10-30T2:30:00[Europe/Berlin] could be GMT+1 or GMT+2.');
      var c = a.subtract(u), s = (0, sr.int)(o.nanosecond), l = o.timeZoneId;
      return new Fu.structure.Structure(h_, [c, s, l]);
    }
  });
}
function rx(e, t, r) {
  var n = bf(e, t, r), i = Ni(n.year, n.month, n.day, n.hour, n.minute, n.second, r), o = i.subtract(t), a = t.subtract(o), u = bf(e, a, r), c = Ni(u.year, u.month, u.day, u.hour, u.minute, u.second, r), s = c.subtract(a);
  return s;
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
  }), i = (0, sr.int)(t).multiply(1e3).add((0, sr.int)(r).div(1e6)).toNumber(), o = n.formatToParts(i), a = o.reduce(function(c, s) {
    return s.type === "era" ? c.adjustEra = s.value.toUpperCase() === "B" ? function(l) {
      return l.subtract(1).negate();
    } : Q4.identity : s.type !== "literal" && (c[s.type] = (0, sr.int)(s.value)), c;
  }, {});
  a.year = a.adjustEra(a.year);
  var u = Ni(a.year, a.month, a.day, a.hour, a.minute, a.second, a.nanosecond);
  return a.timeZoneOffsetSeconds = u.subtract(t), a.hour = a.hour.modulo(24), a;
}
function tx(e) {
  var t = e.disableLosslessIntegers, r = e.useBigInt, n = ub.default.createDateTimeWithOffsetTransformer(e);
  return n.extendsWith({
    signature: d_,
    toStructure: function(i) {
      var o = Ni(i.year, i.month, i.day, i.hour, i.minute, i.second, i.nanosecond), a = (0, sr.int)(i.nanosecond), u = (0, sr.int)(i.timeZoneOffsetSeconds), c = o.subtract(u);
      return new Fu.structure.Structure(d_, [c, a, u]);
    },
    fromStructure: function(i) {
      Fu.structure.verifyStructSize("DateTimeWithZoneOffset", J4, i.size);
      var o = ab(i.fields, 3), a = o[0], u = o[1], c = o[2], s = (0, sr.int)(a).add(c), l = (0, Z4.epochSecondAndNanoToLocalDateTime)(s, u), v = new sr.DateTime(l.year, l.month, l.day, l.hour, l.minute, l.second, l.nanosecond, c, null);
      return sb(v, t, r);
    }
  });
}
function sb(e, t, r) {
  if (!t && !r)
    return e;
  var n = function(u) {
    return r ? u.toBigInt() : u.toNumberOrInfinity();
  }, i = Object.create(Object.getPrototypeOf(e));
  for (var o in e)
    if (Object.prototype.hasOwnProperty.call(e, o) === !0) {
      var a = e[o];
      i[o] = (0, sr.isInt)(a) ? n(a) : a;
    }
  return Object.freeze(i), i;
}
qa.default = {
  createDateTimeWithZoneIdTransformer: ex,
  createDateTimeWithOffsetTransformer: tx
};
var nx = d && d.__extends || function() {
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
var ix = za(vc), v_ = za(zr), __ = Pe, p_ = za(pc), ox = za(qa), m_ = za(Qe), cb = ee, ax = cb.internal.bookmarks.Bookmarks, ux = cb.internal.constants.BOLT_PROTOCOL_V4_3, sx = (
  /** @class */
  function(e) {
    nx(t, e);
    function t() {
      return e !== null && e.apply(this, arguments) || this;
    }
    return Object.defineProperty(t.prototype, "version", {
      get: function() {
        return ux;
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
      var n = r.routingContext, i = n === void 0 ? {} : n, o = r.databaseName, a = o === void 0 ? null : o, u = r.sessionContext, c = u === void 0 ? {} : u, s = r.onError, l = r.onCompleted, v = new __.RouteObserver({
        onProtocolError: this._onProtocolError,
        onError: s,
        onCompleted: l
      }), y = c.bookmarks || ax.empty();
      return this.write(v_.default.route(i, y.values(), a), v, !0), v;
    }, t.prototype.initialize = function(r) {
      var n = this, i = r === void 0 ? {} : r, o = i.userAgent, a = i.authToken, u = i.onError, c = i.onComplete, s = new __.LoginObserver({
        onError: function(l) {
          return n._onLoginError(l, u);
        },
        onCompleted: function(l) {
          return l.patch_bolt !== void 0 && n._applyPatches(l.patch_bolt), n._onLoginCompleted(l, c);
        }
      });
      return this.write(v_.default.hello(o, a, this._serversideRouting, ["utc"]), s, !0), s;
    }, t.prototype._applyPatches = function(r) {
      r.includes("utc") && this._applyUtcPatch();
    }, t.prototype._applyUtcPatch = function() {
      var r = this;
      this._transformer = new m_.default(Object.values(Bu(Bu({}, p_.default), ox.default)).map(function(n) {
        return n(r._config, r._log);
      }));
    }, t;
  }(ix.default)
);
Va.default = sx;
var mc = {}, cx = d && d.__extends || function() {
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
var lx = Ya(Va), lb = ee, du = Ya(zr), Fl = Pe, y_ = Ya(Ha), fx = Ya(qa), b_ = Ya(Qe), fb = lb.internal.constants, dx = fb.BOLT_PROTOCOL_V4_4, hx = fb.FETCH_ALL, vx = lb.internal.bookmarks.Bookmarks, _x = (
  /** @class */
  function(e) {
    cx(t, e);
    function t() {
      return e !== null && e.apply(this, arguments) || this;
    }
    return Object.defineProperty(t.prototype, "version", {
      get: function() {
        return dx;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t.prototype, "transformer", {
      get: function() {
        var r = this;
        return this._transformer === void 0 && (this._transformer = new b_.default(Object.values(y_.default).map(function(n) {
          return n(r._config, r._log);
        }))), this._transformer;
      },
      enumerable: !1,
      configurable: !0
    }), t.prototype.requestRoutingInformation = function(r) {
      var n = r.routingContext, i = n === void 0 ? {} : n, o = r.databaseName, a = o === void 0 ? null : o, u = r.impersonatedUser, c = u === void 0 ? null : u, s = r.sessionContext, l = s === void 0 ? {} : s, v = r.onError, y = r.onCompleted, O = new Fl.RouteObserver({
        onProtocolError: this._onProtocolError,
        onError: v,
        onCompleted: y
      }), E = l.bookmarks || vx.empty();
      return this.write(du.default.routeV4x4(i, E.values(), { databaseName: a, impersonatedUser: c }), O, !0), O;
    }, t.prototype.run = function(r, n, i) {
      var o = i === void 0 ? {} : i, a = o.bookmarks, u = o.txConfig, c = o.database, s = o.mode, l = o.impersonatedUser, v = o.beforeKeys, y = o.afterKeys, O = o.beforeError, E = o.afterError, T = o.beforeComplete, C = o.afterComplete, A = o.flush, $ = A === void 0 ? !0 : A, U = o.reactive, D = U === void 0 ? !1 : U, F = o.fetchSize, G = F === void 0 ? hx : F, X = o.highRecordWatermark, oe = X === void 0 ? Number.MAX_VALUE : X, de = o.lowRecordWatermark, Ie = de === void 0 ? Number.MAX_VALUE : de, ge = new Fl.ResultStreamObserver({
        server: this._server,
        reactive: D,
        fetchSize: G,
        moreFunction: this._requestMore.bind(this),
        discardFunction: this._requestDiscard.bind(this),
        beforeKeys: v,
        afterKeys: y,
        beforeError: O,
        afterError: E,
        beforeComplete: T,
        afterComplete: C,
        highRecordWatermark: oe,
        lowRecordWatermark: Ie
      }), Ae = D;
      return this.write(du.default.runWithMetadata(r, n, {
        bookmarks: a,
        txConfig: u,
        database: c,
        mode: s,
        impersonatedUser: l
      }), ge, Ae && $), D || this.write(du.default.pull({ n: G }), ge, $), ge;
    }, t.prototype.beginTransaction = function(r) {
      var n = r === void 0 ? {} : r, i = n.bookmarks, o = n.txConfig, a = n.database, u = n.mode, c = n.impersonatedUser, s = n.beforeError, l = n.afterError, v = n.beforeComplete, y = n.afterComplete, O = new Fl.ResultStreamObserver({
        server: this._server,
        beforeError: s,
        afterError: l,
        beforeComplete: v,
        afterComplete: y
      });
      return O.prepareToHandleSingleResponse(), this.write(du.default.begin({ bookmarks: i, txConfig: o, database: a, mode: u, impersonatedUser: c }), O, !0), O;
    }, t.prototype._applyUtcPatch = function() {
      var r = this;
      this._transformer = new b_.default(Object.values(xu(xu({}, y_.default), fx.default)).map(function(n) {
        return n(r._config, r._log);
      }));
    }, t;
  }(lx.default)
);
mc.default = _x;
var yd = {}, bd = {}, Pi = d && d.__assign || function() {
  return Pi = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var i in t)
        Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
    }
    return e;
  }, Pi.apply(this, arguments);
}, gd = d && d.__read || function(e, t) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r)
    return e;
  var n = r.call(e), i, o = [], a;
  try {
    for (; (t === void 0 || t-- > 0) && !(i = n.next()).done; )
      o.push(i.value);
  } catch (u) {
    a = { error: u };
  } finally {
    try {
      i && !i.done && (r = n.return) && r.call(n);
    } finally {
      if (a)
        throw a.error;
    }
  }
  return o;
}, db = d && d.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(bd, "__esModule", { value: !0 });
var Od = Ke, wd = ee, yc = db(Ha), px = db(qa), mx = 4, yx = 8, bx = 4;
function gx(e) {
  var t = yc.default.createNodeTransformer(e);
  return t.extendsWith({
    fromStructure: function(r) {
      Od.structure.verifyStructSize("Node", mx, r.size);
      var n = gd(r.fields, 4), i = n[0], o = n[1], a = n[2], u = n[3];
      return new wd.Node(i, o, a, u);
    }
  });
}
function Ox(e) {
  var t = yc.default.createRelationshipTransformer(e);
  return t.extendsWith({
    fromStructure: function(r) {
      Od.structure.verifyStructSize("Relationship", yx, r.size);
      var n = gd(r.fields, 8), i = n[0], o = n[1], a = n[2], u = n[3], c = n[4], s = n[5], l = n[6], v = n[7];
      return new wd.Relationship(i, o, a, u, c, s, l, v);
    }
  });
}
function wx(e) {
  var t = yc.default.createUnboundRelationshipTransformer(e);
  return t.extendsWith({
    fromStructure: function(r) {
      Od.structure.verifyStructSize("UnboundRelationship", bx, r.size);
      var n = gd(r.fields, 4), i = n[0], o = n[1], a = n[2], u = n[3];
      return new wd.UnboundRelationship(i, o, a, u);
    }
  });
}
bd.default = Pi(Pi(Pi({}, yc.default), px.default), { createNodeTransformer: gx, createRelationshipTransformer: Ox, createUnboundRelationshipTransformer: wx });
var Ex = d && d.__extends || function() {
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
var Sx = bc(mc), Tx = bc(bd), Px = bc(Qe), Ix = bc(zr), Rx = Pe, Ax = ee, Cx = Ax.internal.constants.BOLT_PROTOCOL_V5_0, jx = (
  /** @class */
  function(e) {
    Ex(t, e);
    function t() {
      return e !== null && e.apply(this, arguments) || this;
    }
    return Object.defineProperty(t.prototype, "version", {
      get: function() {
        return Cx;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t.prototype, "transformer", {
      get: function() {
        var r = this;
        return this._transformer === void 0 && (this._transformer = new Px.default(Object.values(Tx.default).map(function(n) {
          return n(r._config, r._log);
        }))), this._transformer;
      },
      enumerable: !1,
      configurable: !0
    }), t.prototype.initialize = function(r) {
      var n = this, i = r === void 0 ? {} : r, o = i.userAgent, a = i.authToken, u = i.onError, c = i.onComplete, s = new Rx.LoginObserver({
        onError: function(l) {
          return n._onLoginError(l, u);
        },
        onCompleted: function(l) {
          return n._onLoginCompleted(l, c);
        }
      });
      return this.write(Ix.default.hello(o, a, this._serversideRouting), s, !0), s;
    }, t;
  }(Sx.default)
);
yd.default = jx;
var Ed = {};
Object.defineProperty(Ed, "__esModule", { value: !0 });
var Pt = ee, Nx = 112, $x = 113, Mx = 126, kx = 127;
function Dr() {
}
function g_(e) {
  return e;
}
var Dx = {
  onNext: Dr,
  onCompleted: Dr,
  onError: Dr
}, Ux = (
  /** @class */
  function() {
    function e(t) {
      var r = t === void 0 ? {} : t, n = r.transformMetadata, i = r.log, o = r.observer;
      this._pendingObservers = [], this._log = i, this._transformMetadata = n || g_, this._observer = Object.assign({
        onPendingObserversChange: Dr,
        onError: Dr,
        onFailure: Dr,
        onErrorApplyTransformation: g_
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
        case $x:
          this._log.isDebugEnabled() && this._log.debug("S: RECORD ".concat(Pt.json.stringify(t))), this._currentObserver.onNext(r);
          break;
        case Nx:
          this._log.isDebugEnabled() && this._log.debug("S: SUCCESS ".concat(Pt.json.stringify(t)));
          try {
            var n = this._transformMetadata(r);
            this._currentObserver.onCompleted(n);
          } finally {
            this._updateCurrentObserver();
          }
          break;
        case kx:
          this._log.isDebugEnabled() && this._log.debug("S: FAILURE ".concat(Pt.json.stringify(t)));
          try {
            var i = Lx(r.code), o = (0, Pt.newError)(r.message, i);
            this._currentFailure = this._observer.onErrorApplyTransformation(o), this._currentObserver.onError(this._currentFailure);
          } finally {
            this._updateCurrentObserver(), this._observer.onFailure(this._currentFailure);
          }
          break;
        case Mx:
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
      return t = t || Dx, t.onCompleted = t.onCompleted || Dr, t.onError = t.onError || Dr, t.onNext = t.onNext || Dr, this._currentObserver === void 0 ? this._currentObserver = t : this._pendingObservers.push(t), this._observer.onPendingObserversChange(this._pendingObservers.length), !0;
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
Ed.default = Ux;
function Lx(e) {
  return e === "Neo.TransientError.Transaction.Terminated" ? "Neo.ClientError.Transaction.Terminated" : e === "Neo.TransientError.Transaction.LockClientStopped" ? "Neo.ClientError.Transaction.LockClientStopped" : e;
}
var Nr = d && d.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(ud, "__esModule", { value: !0 });
var Fx = ee, Bx = Nr(zs), xx = Nr(tc), Wx = Nr(oc), Vx = Nr(sc), qx = Nr(fc), Hx = Nr(vc), zx = Nr(Va), Yx = Nr(mc), Gx = Nr(yd), Kx = Nr(Ed);
function Zx(e) {
  var t = e === void 0 ? {} : e, r = t.version, n = t.chunker, i = t.dechunker, o = t.channel, a = t.disableLosslessIntegers, u = t.useBigInt, c = t.serversideRouting, s = t.server, l = t.log, v = t.observer, y = function(O) {
    var E = new Kx.default({
      transformMetadata: O.transformMetadata.bind(O),
      log: l,
      observer: v
    });
    return o.onerror = v.onError.bind(v), o.onmessage = function(T) {
      return i.write(T);
    }, i.onmessage = function(T) {
      try {
        E.handleResponse(O.unpack(T));
      } catch (C) {
        return v.onError(C);
      }
    }, E;
  };
  return Qx(r, s, n, { disableLosslessIntegers: a, useBigInt: u }, c, y, v.onProtocolError.bind(v), l);
}
ud.default = Zx;
function Qx(e, t, r, n, i, o, a, u) {
  switch (e) {
    case 1:
      return new Bx.default(t, r, n, o, u, a);
    case 2:
      return new xx.default(t, r, n, o, u, a);
    case 3:
      return new Wx.default(t, r, n, o, u, a);
    case 4:
      return new Vx.default(t, r, n, o, u, a);
    case 4.1:
      return new qx.default(t, r, n, o, u, a, i);
    case 4.2:
      return new Hx.default(t, r, n, o, u, a, i);
    case 4.3:
      return new zx.default(t, r, n, o, u, a, i);
    case 4.4:
      return new Yx.default(t, r, n, o, u, a, i);
    case 5:
      return new Gx.default(t, r, n, o, u, a, i);
    default:
      throw (0, Fx.newError)("Unknown Bolt protocol version: " + e);
  }
}
(function(e) {
  var t = d && d.__createBinding || (Object.create ? function(c, s, l, v) {
    v === void 0 && (v = l);
    var y = Object.getOwnPropertyDescriptor(s, l);
    (!y || ("get" in y ? !s.__esModule : y.writable || y.configurable)) && (y = { enumerable: !0, get: function() {
      return s[l];
    } }), Object.defineProperty(c, v, y);
  } : function(c, s, l, v) {
    v === void 0 && (v = l), c[v] = s[l];
  }), r = d && d.__exportStar || function(c, s) {
    for (var l in c)
      l !== "default" && !Object.prototype.hasOwnProperty.call(s, l) && t(s, c, l);
  }, n = d && d.__importDefault || function(c) {
    return c && c.__esModule ? c : { default: c };
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.RawRoutingTable = e.BoltProtocol = void 0;
  var i = n(Xf), o = n(ud), a = n(Va), u = n(Ys);
  r(Pe, e), e.BoltProtocol = a.default, e.RawRoutingTable = u.default, e.default = {
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
var Jx = (
  /** @class */
  function() {
    function e(t, r) {
      this.maxSize = O_(t, Eu), this.acquisitionTimeout = O_(r, Su);
    }
    return e.defaultConfig = function() {
      return new e(Eu, Su);
    }, e.fromDriverConfig = function(t) {
      var r = w_(t.maxConnectionPoolSize), n = r ? t.maxConnectionPoolSize : Eu, i = w_(t.connectionAcquisitionTimeout), o = i ? t.connectionAcquisitionTimeout : Su;
      return new e(n, o);
    }, e;
  }()
);
ot.default = Jx;
function O_(e, t) {
  return e === 0 || e ? e : t;
}
function w_(e) {
  return e === 0 || e;
}
var Td = {}, hu = d && d.__awaiter || function(e, t, r, n) {
  function i(o) {
    return o instanceof r ? o : new r(function(a) {
      a(o);
    });
  }
  return new (r || (r = Promise))(function(o, a) {
    function u(l) {
      try {
        s(n.next(l));
      } catch (v) {
        a(v);
      }
    }
    function c(l) {
      try {
        s(n.throw(l));
      } catch (v) {
        a(v);
      }
    }
    function s(l) {
      l.done ? o(l.value) : i(l.value).then(u, c);
    }
    s((n = n.apply(e, t || [])).next());
  });
}, vu = d && d.__generator || function(e, t) {
  var r = { label: 0, sent: function() {
    if (o[0] & 1)
      throw o[1];
    return o[1];
  }, trys: [], ops: [] }, n, i, o, a;
  return a = { next: u(0), throw: u(1), return: u(2) }, typeof Symbol == "function" && (a[Symbol.iterator] = function() {
    return this;
  }), a;
  function u(s) {
    return function(l) {
      return c([s, l]);
    };
  }
  function c(s) {
    if (n)
      throw new TypeError("Generator is already executing.");
    for (; a && (a = 0, s[0] && (r = 0)), r; )
      try {
        if (n = 1, i && (o = s[0] & 2 ? i.return : s[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, s[1])).done)
          return o;
        switch (i = 0, o && (s = [s[0] & 2, o.value]), s[0]) {
          case 0:
          case 1:
            o = s;
            break;
          case 4:
            return r.label++, { value: s[1], done: !1 };
          case 5:
            r.label++, i = s[1], s = [0];
            continue;
          case 7:
            s = r.ops.pop(), r.trys.pop();
            continue;
          default:
            if (o = r.trys, !(o = o.length > 0 && o[o.length - 1]) && (s[0] === 6 || s[0] === 2)) {
              r = 0;
              continue;
            }
            if (s[0] === 3 && (!o || s[1] > o[0] && s[1] < o[3])) {
              r.label = s[1];
              break;
            }
            if (s[0] === 6 && r.label < o[1]) {
              r.label = o[1], o = s;
              break;
            }
            if (o && r.label < o[2]) {
              r.label = o[2], r.ops.push(s);
              break;
            }
            o[2] && r.ops.pop(), r.trys.pop();
            continue;
        }
        s = t.call(e, r);
      } catch (l) {
        s = [6, l], i = 0;
      } finally {
        n = o = 0;
      }
    if (s[0] & 5)
      throw s[1];
    return { value: s[0] ? s[1] : void 0, done: !0 };
  }
}, Xx = d && d.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(Td, "__esModule", { value: !0 });
var e8 = Xx(ot), gf = ee, r8 = gf.internal.logger.Logger, t8 = (
  /** @class */
  function() {
    function e(t) {
      var r = t === void 0 ? {} : t, n = r.create, i = n === void 0 ? function(A, $) {
        return Promise.resolve();
      } : n, o = r.destroy, a = o === void 0 ? function(A) {
        return Promise.resolve();
      } : o, u = r.validate, c = u === void 0 ? function(A) {
        return !0;
      } : u, s = r.installIdleObserver, l = s === void 0 ? function(A, $) {
      } : s, v = r.removeIdleObserver, y = v === void 0 ? function(A) {
      } : v, O = r.config, E = O === void 0 ? e8.default.defaultConfig() : O, T = r.log, C = T === void 0 ? r8.noOp() : T;
      this._create = i, this._destroy = a, this._validate = c, this._installIdleObserver = l, this._removeIdleObserver = y, this._maxSize = E.maxSize, this._acquisitionTimeout = E.acquisitionTimeout, this._pools = {}, this._pendingCreates = {}, this._acquireRequests = {}, this._activeResourceCounts = {}, this._release = this._release.bind(this), this._log = C, this._closed = !1;
    }
    return e.prototype.acquire = function(t) {
      var r = this, n = t.asKey(), i = this._acquireRequests, o = i[n];
      return o || (i[n] = []), new Promise(function(a, u) {
        var c = null, s = setTimeout(function() {
          var l = i[n];
          if (l && (i[n] = l.filter(function(O) {
            return O !== c;
          })), !c.isCompleted()) {
            var v = r.activeResourceCount(t), y = r.has(t) ? r._pools[n].length : 0;
            c.reject((0, gf.newError)("Connection acquisition timed out in ".concat(r._acquisitionTimeout, " ms. Pool status: Active conn count = ").concat(v, ", Idle conn count = ").concat(y, ".")));
          }
        }, r._acquisitionTimeout);
        c = new i8(n, a, u, s, r._log), i[n].push(c), r._processPendingAcquireRequests(t);
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
      return r || (r = new o8(), this._pools[t] = r, this._pendingCreates[t] = 0), r;
    }, e.prototype._acquire = function(t) {
      return hu(this, void 0, void 0, function() {
        var r, n, i, o, a, u = this;
        return vu(this, function(c) {
          switch (c.label) {
            case 0:
              if (this._closed)
                throw (0, gf.newError)("Pool is closed, it is no more able to serve requests.");
              r = t.asKey(), n = this._getOrInitializePoolFor(r), c.label = 1;
            case 1:
              return n.length ? (i = n.pop(), this._validate(i) ? (this._removeIdleObserver && this._removeIdleObserver(i), E_(r, this._activeResourceCounts), this._log.isDebugEnabled() && this._log.debug("".concat(i, " acquired from the pool ").concat(r)), [2, { resource: i, pool: n }]) : [3, 2]) : [3, 5];
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
              return c.trys.push([6, , 8, 9]), [4, this._create(t, function(s, l) {
                return u._release(s, l, n);
              })];
            case 7:
              return a = c.sent(), E_(r, this._activeResourceCounts), this._log.isDebugEnabled() && this._log.debug("".concat(a, " created for the pool ").concat(r)), [3, 9];
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
                onError: function(u) {
                  o._log.debug("Idle connection ".concat(r, " destroyed because of error: ").concat(u));
                  var c = o._pools[i];
                  c && (o._pools[i] = c.filter(function(s) {
                    return s !== r;
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
              return n8(i, this._activeResourceCounts), this._processPendingAcquireRequests(t), [
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
          var u = a.resource, c = a.pool;
          u ? o.isCompleted() ? r._release(t, u, c) : o.resolve(u) : o.isCompleted() || (r._acquireRequests[n] || (r._acquireRequests[n] = []), r._acquireRequests[n].unshift(o));
        }) : delete this._acquireRequests[n];
      }
    }, e;
  }()
);
function E_(e, t) {
  var r = t[e] || 0;
  t[e] = r + 1;
}
function n8(e, t) {
  var r = t[e] || 0, n = r - 1;
  n > 0 ? t[e] = n : delete t[e];
}
var i8 = (
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
), o8 = (
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
Td.default = t8;
(function(e) {
  var t = d && d.__createBinding || (Object.create ? function(u, c, s, l) {
    l === void 0 && (l = s);
    var v = Object.getOwnPropertyDescriptor(c, s);
    (!v || ("get" in v ? !c.__esModule : v.writable || v.configurable)) && (v = { enumerable: !0, get: function() {
      return c[s];
    } }), Object.defineProperty(u, l, v);
  } : function(u, c, s, l) {
    l === void 0 && (l = s), u[l] = c[s];
  }), r = d && d.__setModuleDefault || (Object.create ? function(u, c) {
    Object.defineProperty(u, "default", { enumerable: !0, value: c });
  } : function(u, c) {
    u.default = c;
  }), n = d && d.__importStar || function(u) {
    if (u && u.__esModule)
      return u;
    var c = {};
    if (u != null)
      for (var s in u)
        s !== "default" && Object.prototype.hasOwnProperty.call(u, s) && t(c, u, s);
    return r(c, u), c;
  }, i = d && d.__importDefault || function(u) {
    return u && u.__esModule ? u : { default: u };
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
var hb = {}, gc = {}, a8 = d && d.__extends || function() {
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
var u8 = ee, s8 = (
  /** @class */
  function(e) {
    a8(t, e);
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
  }(u8.ConnectionProvider)
);
gc.default = s8;
var Ga = {}, Oc = {}, Ka = {};
Object.defineProperty(Ka, "__esModule", { value: !0 });
var c8 = (
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
Ka.default = c8;
var Za = {}, l8 = d && d.__extends || function() {
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
}(), f8 = d && d.__awaiter || function(e, t, r, n) {
  function i(o) {
    return o instanceof r ? o : new r(function(a) {
      a(o);
    });
  }
  return new (r || (r = Promise))(function(o, a) {
    function u(l) {
      try {
        s(n.next(l));
      } catch (v) {
        a(v);
      }
    }
    function c(l) {
      try {
        s(n.throw(l));
      } catch (v) {
        a(v);
      }
    }
    function s(l) {
      l.done ? o(l.value) : i(l.value).then(u, c);
    }
    s((n = n.apply(e, t || [])).next());
  });
}, d8 = d && d.__generator || function(e, t) {
  var r = { label: 0, sent: function() {
    if (o[0] & 1)
      throw o[1];
    return o[1];
  }, trys: [], ops: [] }, n, i, o, a;
  return a = { next: u(0), throw: u(1), return: u(2) }, typeof Symbol == "function" && (a[Symbol.iterator] = function() {
    return this;
  }), a;
  function u(s) {
    return function(l) {
      return c([s, l]);
    };
  }
  function c(s) {
    if (n)
      throw new TypeError("Generator is already executing.");
    for (; a && (a = 0, s[0] && (r = 0)), r; )
      try {
        if (n = 1, i && (o = s[0] & 2 ? i.return : s[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, s[1])).done)
          return o;
        switch (i = 0, o && (s = [s[0] & 2, o.value]), s[0]) {
          case 0:
          case 1:
            o = s;
            break;
          case 4:
            return r.label++, { value: s[1], done: !1 };
          case 5:
            r.label++, i = s[1], s = [0];
            continue;
          case 7:
            s = r.ops.pop(), r.trys.pop();
            continue;
          default:
            if (o = r.trys, !(o = o.length > 0 && o[o.length - 1]) && (s[0] === 6 || s[0] === 2)) {
              r = 0;
              continue;
            }
            if (s[0] === 3 && (!o || s[1] > o[0] && s[1] < o[3])) {
              r.label = s[1];
              break;
            }
            if (s[0] === 6 && r.label < o[1]) {
              r.label = o[1], o = s;
              break;
            }
            if (o && r.label < o[2]) {
              r.label = o[2], r.ops.push(s);
              break;
            }
            o[2] && r.ops.pop(), r.trys.pop();
            continue;
        }
        s = t.call(e, r);
      } catch (l) {
        s = [6, l], i = 0;
      } finally {
        n = o = 0;
      }
    if (s[0] & 5)
      throw s[1];
    return { value: s[0] ? s[1] : void 0, done: !0 };
  }
}, vb = d && d.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(Za, "__esModule", { value: !0 });
Za.createChannelConnection = void 0;
var _u = Xn, Ii = ee, h8 = vb(Ka), S_ = vb(Jf), v8 = Ii.error.PROTOCOL_ERROR, _8 = Ii.internal.logger.Logger, p8 = 0;
function m8(e, t, r, n, i, o) {
  i === void 0 && (i = null), o === void 0 && (o = function(c) {
    return new _u.Channel(c);
  });
  var a = new _u.ChannelConfig(e, t, r.errorCode()), u = o(a);
  return S_.default.handshake(u).then(function(c) {
    var s = c.protocolVersion, l = c.consumeRemainingBuffer, v = new _u.Chunker(u), y = new _u.Dechunker(), O = function(T) {
      return S_.default.create({
        version: s,
        channel: u,
        chunker: v,
        dechunker: y,
        disableLosslessIntegers: t.disableLosslessIntegers,
        useBigInt: t.useBigInt,
        serversideRouting: i,
        server: T.server,
        log: T.logger,
        observer: {
          onPendingObserversChange: T._handleOngoingRequestsNumberChange.bind(T),
          onError: T._handleFatalError.bind(T),
          onFailure: T._resetOnFailure.bind(T),
          onProtocolError: T._handleProtocolError.bind(T),
          onErrorApplyTransformation: function(C) {
            return T.handleAndTransformError(C, T._address);
          }
        }
      });
    }, E = new _b(u, r, e, n, t.disableLosslessIntegers, i, v, O);
    return l(function(T) {
      return y.write(T);
    }), E;
  }).catch(function(c) {
    return u.close().then(function() {
      throw c;
    });
  });
}
Za.createChannelConnection = m8;
var _b = (
  /** @class */
  function(e) {
    l8(t, e);
    function t(r, n, i, o, a, u, c, s) {
      a === void 0 && (a = !1), u === void 0 && (u = null);
      var l = e.call(this, n) || this;
      return l._reseting = !1, l._resetObservers = [], l._id = p8++, l._address = i, l._server = { address: i.asHostPort() }, l.creationTimestamp = Date.now(), l._disableLosslessIntegers = a, l._ch = r, l._chunker = c, l._log = y8(l, o), l._serversideRouting = u, l._dbConnectionId = null, l._protocol = s(l), l._isBroken = !1, l._log.isDebugEnabled() && l._log.debug("created towards ".concat(i)), l;
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
      return new Promise(function(a, u) {
        i._protocol.initialize({
          userAgent: r,
          authToken: n,
          onError: function(c) {
            return u(c);
          },
          onComplete: function(c) {
            if (c) {
              var s = c.server;
              (!i.version || s) && (i.version = s);
              var l = c.connection_id;
              if (i.databaseId || (i.databaseId = l), c.hints) {
                var v = c.hints["connection.recv_timeout_seconds"];
                if (v != null) {
                  var y = (0, Ii.toNumber)(v);
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
      this._isBroken = !0, this._error = this.handleAndTransformError(this._protocol.currentFailure || r, this._address), this._log.isErrorEnabled() && this._log.error("experienced a fatal error caused by ".concat(this._error, " (").concat(Ii.json.stringify(this._error), ")")), this._protocol.notifyFatalError(this._error);
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
      return f8(this, void 0, void 0, function() {
        return d8(this, function(r) {
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
      var n = (0, Ii.newError)(r, v8);
      return this._handleFatalError(n), n;
    }, t;
  }(h8.default)
);
Za.default = _b;
function y8(e, t) {
  return new _8(t._level, function(r, n) {
    return t._loggerFunction(r, "".concat(e, " ").concat(n));
  });
}
var Pd = {}, b8 = d && d.__extends || function() {
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
}(), g8 = d && d.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(Pd, "__esModule", { value: !0 });
var O8 = g8(Ka), w8 = (
  /** @class */
  function(e) {
    b8(t, e);
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
  }(O8.default)
);
Pd.default = w8;
var Id = {};
Object.defineProperty(Id, "__esModule", { value: !0 });
var pb = ee, E8 = pb.error.SERVICE_UNAVAILABLE, S8 = pb.error.SESSION_EXPIRED, T8 = (
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
      return P8(t) ? this._handleAuthorizationExpired(t, r) : I8(t) ? this._handleUnavailability(t, r) : R8(t) ? this._handleWriteFailure(t, r) : t;
    }, e;
  }()
);
Id.default = T8;
function P8(e) {
  return e && (e.code === "Neo.ClientError.Security.AuthorizationExpired" || e.code === "Neo.ClientError.Security.TokenExpired");
}
function I8(e) {
  return e ? e.code === S8 || e.code === E8 || e.code === "Neo.TransientError.General.DatabaseUnavailable" : !1;
}
function R8(e) {
  return e ? e.code === "Neo.ClientError.Cluster.NotALeader" || e.code === "Neo.ClientError.General.ForbiddenOnReadOnlyDatabase" : !1;
}
function Bl(e) {
  return e;
}
(function(e) {
  var t = d && d.__createBinding || (Object.create ? function(s, l, v, y) {
    y === void 0 && (y = v);
    var O = Object.getOwnPropertyDescriptor(l, v);
    (!O || ("get" in O ? !l.__esModule : O.writable || O.configurable)) && (O = { enumerable: !0, get: function() {
      return l[v];
    } }), Object.defineProperty(s, y, O);
  } : function(s, l, v, y) {
    y === void 0 && (y = v), s[y] = l[v];
  }), r = d && d.__setModuleDefault || (Object.create ? function(s, l) {
    Object.defineProperty(s, "default", { enumerable: !0, value: l });
  } : function(s, l) {
    s.default = l;
  }), n = d && d.__importStar || function(s) {
    if (s && s.__esModule)
      return s;
    var l = {};
    if (s != null)
      for (var v in s)
        v !== "default" && Object.prototype.hasOwnProperty.call(s, v) && t(l, s, v);
    return r(l, s), l;
  }, i = d && d.__importDefault || function(s) {
    return s && s.__esModule ? s : { default: s };
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.createChannelConnection = e.ConnectionErrorHandler = e.DelegateConnection = e.ChannelConnection = e.Connection = void 0;
  var o = i(Ka);
  e.Connection = o.default;
  var a = n(Za);
  e.ChannelConnection = a.default, Object.defineProperty(e, "createChannelConnection", { enumerable: !0, get: function() {
    return a.createChannelConnection;
  } });
  var u = i(Pd);
  e.DelegateConnection = u.default;
  var c = i(Id);
  e.ConnectionErrorHandler = c.default, e.default = o.default;
})(Oc);
var A8 = d && d.__extends || function() {
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
}(), C8 = d && d.__createBinding || (Object.create ? function(e, t, r, n) {
  n === void 0 && (n = r);
  var i = Object.getOwnPropertyDescriptor(t, r);
  (!i || ("get" in i ? !t.__esModule : i.writable || i.configurable)) && (i = { enumerable: !0, get: function() {
    return t[r];
  } }), Object.defineProperty(e, n, i);
} : function(e, t, r, n) {
  n === void 0 && (n = r), e[n] = t[r];
}), j8 = d && d.__setModuleDefault || (Object.create ? function(e, t) {
  Object.defineProperty(e, "default", { enumerable: !0, value: t });
} : function(e, t) {
  e.default = t;
}), N8 = d && d.__importStar || function(e) {
  if (e && e.__esModule)
    return e;
  var t = {};
  if (e != null)
    for (var r in e)
      r !== "default" && Object.prototype.hasOwnProperty.call(e, r) && C8(t, e, r);
  return j8(t, e), t;
}, T_ = d && d.__awaiter || function(e, t, r, n) {
  function i(o) {
    return o instanceof r ? o : new r(function(a) {
      a(o);
    });
  }
  return new (r || (r = Promise))(function(o, a) {
    function u(l) {
      try {
        s(n.next(l));
      } catch (v) {
        a(v);
      }
    }
    function c(l) {
      try {
        s(n.throw(l));
      } catch (v) {
        a(v);
      }
    }
    function s(l) {
      l.done ? o(l.value) : i(l.value).then(u, c);
    }
    s((n = n.apply(e, t || [])).next());
  });
}, P_ = d && d.__generator || function(e, t) {
  var r = { label: 0, sent: function() {
    if (o[0] & 1)
      throw o[1];
    return o[1];
  }, trys: [], ops: [] }, n, i, o, a;
  return a = { next: u(0), throw: u(1), return: u(2) }, typeof Symbol == "function" && (a[Symbol.iterator] = function() {
    return this;
  }), a;
  function u(s) {
    return function(l) {
      return c([s, l]);
    };
  }
  function c(s) {
    if (n)
      throw new TypeError("Generator is already executing.");
    for (; a && (a = 0, s[0] && (r = 0)), r; )
      try {
        if (n = 1, i && (o = s[0] & 2 ? i.return : s[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, s[1])).done)
          return o;
        switch (i = 0, o && (s = [s[0] & 2, o.value]), s[0]) {
          case 0:
          case 1:
            o = s;
            break;
          case 4:
            return r.label++, { value: s[1], done: !1 };
          case 5:
            r.label++, i = s[1], s = [0];
            continue;
          case 7:
            s = r.ops.pop(), r.trys.pop();
            continue;
          default:
            if (o = r.trys, !(o = o.length > 0 && o[o.length - 1]) && (s[0] === 6 || s[0] === 2)) {
              r = 0;
              continue;
            }
            if (s[0] === 3 && (!o || s[1] > o[0] && s[1] < o[3])) {
              r.label = s[1];
              break;
            }
            if (s[0] === 6 && r.label < o[1]) {
              r.label = o[1], o = s;
              break;
            }
            if (o && r.label < o[2]) {
              r.label = o[2], r.ops.push(s);
              break;
            }
            o[2] && r.ops.pop(), r.trys.pop();
            continue;
        }
        s = t.call(e, r);
      } catch (l) {
        s = [6, l], i = 0;
      } finally {
        n = o = 0;
      }
    if (s[0] & 5)
      throw s[1];
    return { value: s[0] ? s[1] : void 0, done: !0 };
  }
};
Object.defineProperty(Ga, "__esModule", { value: !0 });
var I_ = Oc, R_ = N8(Sd), Of = ee, $8 = Of.error.SERVICE_UNAVAILABLE, M8 = (
  /** @class */
  function(e) {
    A8(t, e);
    function t(r, n) {
      var i = r.id, o = r.config, a = r.log, u = r.userAgent, c = r.authToken;
      n === void 0 && (n = null);
      var s = e.call(this) || this;
      return s._id = i, s._config = o, s._log = a, s._userAgent = u, s._authToken = c, s._createChannelConnection = n || function(l) {
        return (0, I_.createChannelConnection)(l, s._config, s._createConnectionErrorHandler(), s._log);
      }, s._connectionPool = new R_.default({
        create: s._createConnection.bind(s),
        destroy: s._destroyConnection.bind(s),
        validate: s._validateConnection.bind(s),
        installIdleObserver: t._installIdleObserverOnConnection.bind(s),
        removeIdleObserver: t._removeIdleObserverOnConnection.bind(s),
        config: R_.PoolConfig.fromDriverConfig(o),
        log: s._log
      }), s._openConnections = {}, s;
    }
    return t.prototype._createConnectionErrorHandler = function() {
      return new I_.ConnectionErrorHandler($8);
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
      return T_(this, void 0, void 0, function() {
        var i, o;
        return P_(this, function(a) {
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
      return T_(this, void 0, void 0, function() {
        return P_(this, function(r) {
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
Ga.default = M8;
var Rd = {}, k8 = d && d.__extends || function() {
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
}(), _i = d && d.__awaiter || function(e, t, r, n) {
  function i(o) {
    return o instanceof r ? o : new r(function(a) {
      a(o);
    });
  }
  return new (r || (r = Promise))(function(o, a) {
    function u(l) {
      try {
        s(n.next(l));
      } catch (v) {
        a(v);
      }
    }
    function c(l) {
      try {
        s(n.throw(l));
      } catch (v) {
        a(v);
      }
    }
    function s(l) {
      l.done ? o(l.value) : i(l.value).then(u, c);
    }
    s((n = n.apply(e, t || [])).next());
  });
}, pi = d && d.__generator || function(e, t) {
  var r = { label: 0, sent: function() {
    if (o[0] & 1)
      throw o[1];
    return o[1];
  }, trys: [], ops: [] }, n, i, o, a;
  return a = { next: u(0), throw: u(1), return: u(2) }, typeof Symbol == "function" && (a[Symbol.iterator] = function() {
    return this;
  }), a;
  function u(s) {
    return function(l) {
      return c([s, l]);
    };
  }
  function c(s) {
    if (n)
      throw new TypeError("Generator is already executing.");
    for (; a && (a = 0, s[0] && (r = 0)), r; )
      try {
        if (n = 1, i && (o = s[0] & 2 ? i.return : s[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, s[1])).done)
          return o;
        switch (i = 0, o && (s = [s[0] & 2, o.value]), s[0]) {
          case 0:
          case 1:
            o = s;
            break;
          case 4:
            return r.label++, { value: s[1], done: !1 };
          case 5:
            r.label++, i = s[1], s = [0];
            continue;
          case 7:
            s = r.ops.pop(), r.trys.pop();
            continue;
          default:
            if (o = r.trys, !(o = o.length > 0 && o[o.length - 1]) && (s[0] === 6 || s[0] === 2)) {
              r = 0;
              continue;
            }
            if (s[0] === 3 && (!o || s[1] > o[0] && s[1] < o[3])) {
              r.label = s[1];
              break;
            }
            if (s[0] === 6 && r.label < o[1]) {
              r.label = o[1], o = s;
              break;
            }
            if (o && r.label < o[2]) {
              r.label = o[2], r.ops.push(s);
              break;
            }
            o[2] && r.ops.pop(), r.trys.pop();
            continue;
        }
        s = t.call(e, r);
      } catch (l) {
        s = [6, l], i = 0;
      } finally {
        n = o = 0;
      }
    if (s[0] & 5)
      throw s[1];
    return { value: s[0] ? s[1] : void 0, done: !0 };
  }
}, D8 = d && d.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(Rd, "__esModule", { value: !0 });
var U8 = D8(Ga), xl = Oc, mb = ee, Ad = mb.internal.constants, L8 = Ad.BOLT_PROTOCOL_V3, F8 = Ad.BOLT_PROTOCOL_V4_0, B8 = Ad.BOLT_PROTOCOL_V4_4, x8 = mb.error.SERVICE_UNAVAILABLE, W8 = (
  /** @class */
  function(e) {
    k8(t, e);
    function t(r) {
      var n = r.id, i = r.config, o = r.log, a = r.address, u = r.userAgent, c = r.authToken, s = e.call(this, { id: n, config: i, log: o, userAgent: u, authToken: c }) || this;
      return s._address = a, s;
    }
    return t.prototype.acquireConnection = function(r) {
      var n = this, i = r === void 0 ? {} : r;
      i.accessMode;
      var o = i.database;
      i.bookmarks;
      var a = xl.ConnectionErrorHandler.create({
        errorCode: x8,
        handleAuthorizationExpired: function(u, c) {
          return n._handleAuthorizationExpired(u, c, o);
        }
      });
      return this._connectionPool.acquire(this._address).then(function(u) {
        return new xl.DelegateConnection(u, a);
      });
    }, t.prototype._handleAuthorizationExpired = function(r, n, i) {
      return this._log.warn("Direct driver ".concat(this._id, " will close connection to ").concat(n, " for database '").concat(i, "' because of an error ").concat(r.code, " '").concat(r.message, "'")), this._connectionPool.purge(n).catch(function() {
      }), r;
    }, t.prototype._hasProtocolVersion = function(r) {
      return _i(this, void 0, void 0, function() {
        var n, i;
        return pi(this, function(o) {
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
      return _i(this, void 0, void 0, function() {
        return pi(this, function(r) {
          switch (r.label) {
            case 0:
              return [4, this._hasProtocolVersion(function(n) {
                return n >= F8;
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
      return _i(this, void 0, void 0, function() {
        return pi(this, function(r) {
          switch (r.label) {
            case 0:
              return [4, this._hasProtocolVersion(function(n) {
                return n >= L8;
              })];
            case 1:
              return [2, r.sent()];
          }
        });
      });
    }, t.prototype.supportsUserImpersonation = function() {
      return _i(this, void 0, void 0, function() {
        return pi(this, function(r) {
          switch (r.label) {
            case 0:
              return [4, this._hasProtocolVersion(function(n) {
                return n >= B8;
              })];
            case 1:
              return [2, r.sent()];
          }
        });
      });
    }, t.prototype.verifyConnectivityAndGetServerInfo = function() {
      return _i(this, void 0, void 0, function() {
        return pi(this, function(r) {
          switch (r.label) {
            case 0:
              return [4, this._verifyConnectivityAndGetServerVersion({ address: this._address })];
            case 1:
              return [2, r.sent()];
          }
        });
      });
    }, t;
  }(U8.default)
);
Rd.default = W8;
var Cd = {}, Vt = {}, jd = {}, ii = {}, Wl = d && d.__read || function(e, t) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r)
    return e;
  var n = r.call(e), i, o = [], a;
  try {
    for (; (t === void 0 || t-- > 0) && !(i = n.next()).done; )
      o.push(i.value);
  } catch (u) {
    a = { error: u };
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
Object.defineProperty(ii, "__esModule", { value: !0 });
ii.createValidRoutingTable = void 0;
var ur = ee, yb = ur.internal.constants, V8 = yb.ACCESS_MODE_WRITE, q8 = yb.ACCESS_MODE_READ, ql = ur.internal.serverAddress.ServerAddress, Nd = ur.error.PROTOCOL_ERROR, H8 = 1, bb = (
  /** @class */
  function() {
    function e(t) {
      var r = t === void 0 ? {} : t, n = r.database, i = r.routers, o = r.readers, a = r.writers, u = r.expirationTime, c = r.ttl;
      this.database = n || null, this.databaseName = n || "default database", this.routers = i || [], this.readers = o || [], this.writers = a || [], this.expirationTime = u || (0, ur.int)(0), this.ttl = c;
    }
    return e.fromRawRoutingTable = function(t, r, n) {
      return gb(t, r, n);
    }, e.prototype.forget = function(t) {
      this.readers = pu(this.readers, t), this.writers = pu(this.writers, t);
    }, e.prototype.forgetRouter = function(t) {
      this.routers = pu(this.routers, t);
    }, e.prototype.forgetWriter = function(t) {
      this.writers = pu(this.writers, t);
    }, e.prototype.isStaleFor = function(t) {
      return this.expirationTime.lessThan(Date.now()) || this.routers.length < H8 || t === q8 && this.readers.length === 0 || t === V8 && this.writers.length === 0;
    }, e.prototype.isExpiredFor = function(t) {
      return this.expirationTime.add(t).lessThan(Date.now());
    }, e.prototype.allServers = function() {
      return Vl(Vl(Vl([], Wl(this.routers), !1), Wl(this.readers), !1), Wl(this.writers), !1);
    }, e.prototype.toString = function() {
      return "RoutingTable[" + "database=".concat(this.databaseName, ", ") + "expirationTime=".concat(this.expirationTime, ", ") + "currentTime=".concat(Date.now(), ", ") + "routers=[".concat(this.routers, "], ") + "readers=[".concat(this.readers, "], ") + "writers=[".concat(this.writers, "]]");
    }, e;
  }()
);
ii.default = bb;
function pu(e, t) {
  return e.filter(function(r) {
    return r.asKey() !== t.asKey();
  });
}
function gb(e, t, r) {
  var n = r.ttl, i = Y8(r, t), o = z8(r, t), a = o.routers, u = o.readers, c = o.writers;
  return A_(a, "routers", t), A_(u, "readers", t), new bb({
    database: e || r.db,
    routers: a,
    readers: u,
    writers: c,
    expirationTime: i,
    ttl: n
  });
}
ii.createValidRoutingTable = gb;
function z8(e, t) {
  try {
    var r = [], n = [], i = [];
    return e.servers.forEach(function(o) {
      var a = o.role, u = o.addresses;
      a === "ROUTE" ? r = Hl(u).map(function(c) {
        return ql.fromUrl(c);
      }) : a === "WRITE" ? i = Hl(u).map(function(c) {
        return ql.fromUrl(c);
      }) : a === "READ" && (n = Hl(u).map(function(c) {
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
function Y8(e, t) {
  try {
    var r = (0, ur.int)(Date.now()), n = (0, ur.int)(e.ttl).multiply(1e3).add(r);
    return n.lessThan(r) ? ur.Integer.MAX_VALUE : n;
  } catch (i) {
    throw (0, ur.newError)("Unable to parse TTL entry from router ".concat(t, ` from raw routing table:
`).concat(ur.json.stringify(e), `
Error message: `).concat(i.message), Nd);
  }
}
function A_(e, t, r) {
  if (e.length === 0)
    throw (0, ur.newError)("Received no " + t + " from router " + r, Nd);
}
function Hl(e) {
  if (!Array.isArray(e))
    throw new TypeError("Array expected but got: " + e);
  return Array.from(e);
}
var G8 = d && d.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(jd, "__esModule", { value: !0 });
var K8 = G8(ii), Z8 = (
  /** @class */
  function() {
    function e(t) {
      this._routingContext = t;
    }
    return e.prototype.lookupRoutingTableOnRouter = function(t, r, n, i) {
      var o = this;
      return t._acquireConnection(function(a) {
        return o._requestRawRoutingTable(a, t, r, n, i).then(function(u) {
          return u.isNull ? null : K8.default.fromRawRoutingTable(r, n, u);
        });
      });
    }, e.prototype._requestRawRoutingTable = function(t, r, n, i, o) {
      var a = this;
      return new Promise(function(u, c) {
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
          onCompleted: u,
          onError: c
        });
      });
    }, e;
  }()
);
jd.default = Z8;
var Ob = d && d.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(Vt, "__esModule", { value: !0 });
Vt.RoutingTable = Vt.Rediscovery = void 0;
var wb = Ob(jd);
Vt.Rediscovery = wb.default;
var Q8 = Ob(ii);
Vt.RoutingTable = Q8.default;
Vt.default = wb.default;
var J8 = d && d.__extends || function() {
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
}, X8 = d && d.__createBinding || (Object.create ? function(e, t, r, n) {
  n === void 0 && (n = r);
  var i = Object.getOwnPropertyDescriptor(t, r);
  (!i || ("get" in i ? !t.__esModule : i.writable || i.configurable)) && (i = { enumerable: !0, get: function() {
    return t[r];
  } }), Object.defineProperty(e, n, i);
} : function(e, t, r, n) {
  n === void 0 && (n = r), e[n] = t[r];
}), e3 = d && d.__setModuleDefault || (Object.create ? function(e, t) {
  Object.defineProperty(e, "default", { enumerable: !0, value: t });
} : function(e, t) {
  e.default = t;
}), r3 = d && d.__importStar || function(e) {
  if (e && e.__esModule)
    return e;
  var t = {};
  if (e != null)
    for (var r in e)
      r !== "default" && Object.prototype.hasOwnProperty.call(e, r) && X8(t, e, r);
  return e3(t, e), t;
}, ze = d && d.__awaiter || function(e, t, r, n) {
  function i(o) {
    return o instanceof r ? o : new r(function(a) {
      a(o);
    });
  }
  return new (r || (r = Promise))(function(o, a) {
    function u(l) {
      try {
        s(n.next(l));
      } catch (v) {
        a(v);
      }
    }
    function c(l) {
      try {
        s(n.throw(l));
      } catch (v) {
        a(v);
      }
    }
    function s(l) {
      l.done ? o(l.value) : i(l.value).then(u, c);
    }
    s((n = n.apply(e, t || [])).next());
  });
}, Ye = d && d.__generator || function(e, t) {
  var r = { label: 0, sent: function() {
    if (o[0] & 1)
      throw o[1];
    return o[1];
  }, trys: [], ops: [] }, n, i, o, a;
  return a = { next: u(0), throw: u(1), return: u(2) }, typeof Symbol == "function" && (a[Symbol.iterator] = function() {
    return this;
  }), a;
  function u(s) {
    return function(l) {
      return c([s, l]);
    };
  }
  function c(s) {
    if (n)
      throw new TypeError("Generator is already executing.");
    for (; a && (a = 0, s[0] && (r = 0)), r; )
      try {
        if (n = 1, i && (o = s[0] & 2 ? i.return : s[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, s[1])).done)
          return o;
        switch (i = 0, o && (s = [s[0] & 2, o.value]), s[0]) {
          case 0:
          case 1:
            o = s;
            break;
          case 4:
            return r.label++, { value: s[1], done: !1 };
          case 5:
            r.label++, i = s[1], s = [0];
            continue;
          case 7:
            s = r.ops.pop(), r.trys.pop();
            continue;
          default:
            if (o = r.trys, !(o = o.length > 0 && o[o.length - 1]) && (s[0] === 6 || s[0] === 2)) {
              r = 0;
              continue;
            }
            if (s[0] === 3 && (!o || s[1] > o[0] && s[1] < o[3])) {
              r.label = s[1];
              break;
            }
            if (s[0] === 6 && r.label < o[1]) {
              r.label = o[1], o = s;
              break;
            }
            if (o && r.label < o[2]) {
              r.label = o[2], r.ops.push(s);
              break;
            }
            o[2] && r.ops.pop(), r.trys.pop();
            continue;
        }
        s = t.call(e, r);
      } catch (l) {
        s = [6, l], i = 0;
      } finally {
        n = o = 0;
      }
    if (s[0] & 5)
      throw s[1];
    return { value: s[0] ? s[1] : void 0, done: !0 };
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
  } catch (u) {
    a = { error: u };
  } finally {
    try {
      i && !i.done && (r = n.return) && r.call(n);
    } finally {
      if (a)
        throw a.error;
    }
  }
  return o;
}, Eb = d && d.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(Cd, "__esModule", { value: !0 });
var Je = ee, C_ = r3(Vt), t3 = Xn, n3 = Eb(gc), i3 = Eb(Ga), o3 = nt, It = Oc, zl = Je.error.SERVICE_UNAVAILABLE, mi = Je.error.SESSION_EXPIRED, a3 = Je.internal.bookmarks.Bookmarks, Qa = Je.internal.constants, j_ = Qa.ACCESS_MODE_READ, Yl = Qa.ACCESS_MODE_WRITE, u3 = Qa.BOLT_PROTOCOL_V3, s3 = Qa.BOLT_PROTOCOL_V4_0, c3 = Qa.BOLT_PROTOCOL_V4_4, l3 = "Neo.ClientError.Procedure.ProcedureNotFound", f3 = "Neo.ClientError.Database.DatabaseNotFound", d3 = "Neo.ClientError.Transaction.InvalidBookmark", h3 = "Neo.ClientError.Transaction.InvalidBookmarkMixture", v3 = "Neo.ClientError.Security.AuthorizationExpired", _3 = "Neo.ClientError.Statement.ArgumentError", p3 = "Neo.ClientError.Request.Invalid", m3 = "Neo.ClientError.Statement.TypeError", y3 = "system", mu = null, b3 = (0, Je.int)(3e4), g3 = (
  /** @class */
  function(e) {
    J8(t, e);
    function t(r) {
      var n = r.id, i = r.address, o = r.routingContext, a = r.hostNameResolver, u = r.config, c = r.log, s = r.userAgent, l = r.authToken, v = r.routingTablePurgeDelay, y = e.call(this, { id: n, config: u, log: c, userAgent: s, authToken: l }, function(O) {
        return (0, It.createChannelConnection)(O, y._config, y._createConnectionErrorHandler(), y._log, y._routingContext);
      }) || this;
      return y._routingContext = Wu(Wu({}, o), { address: i.toString() }), y._seedRouter = i, y._rediscovery = new C_.default(y._routingContext), y._loadBalancingStrategy = new o3.LeastConnectedLoadBalancingStrategy(y._connectionPool), y._hostNameResolver = a, y._dnsResolver = new t3.HostNameResolver(), y._log = c, y._useSeedRouter = !0, y._routingTableRegistry = new O3(v ? (0, Je.int)(v) : b3), y;
    }
    return t.prototype._createConnectionErrorHandler = function() {
      return new It.ConnectionErrorHandler(mi);
    }, t.prototype._handleUnavailability = function(r, n, i) {
      return this._log.warn("Routing driver ".concat(this._id, " will forget ").concat(n, " for database '").concat(i, "' because of an error ").concat(r.code, " '").concat(r.message, "'")), this.forget(n, i || mu), r;
    }, t.prototype._handleAuthorizationExpired = function(r, n, i) {
      return this._log.warn("Routing driver ".concat(this._id, " will close connections to ").concat(n, " for database '").concat(i, "' because of an error ").concat(r.code, " '").concat(r.message, "'")), this._connectionPool.purge(n).catch(function() {
      }), r;
    }, t.prototype._handleWriteFailure = function(r, n, i) {
      return this._log.warn("Routing driver ".concat(this._id, " will forget writer ").concat(n, " for database '").concat(i, "' because of an error ").concat(r.code, " '").concat(r.message, "'")), this.forgetWriter(n, i || mu), (0, Je.newError)("No longer possible to write to server at " + n, mi, r);
    }, t.prototype.acquireConnection = function(r) {
      var n = r === void 0 ? {} : r, i = n.accessMode, o = n.database, a = n.bookmarks, u = n.impersonatedUser, c = n.onDatabaseNameResolved;
      return ze(this, void 0, void 0, function() {
        var s, l, v, y, O, E, T, C, A = this;
        return Ye(this, function($) {
          switch ($.label) {
            case 0:
              return v = { database: o || mu }, y = new It.ConnectionErrorHandler(mi, function(U, D) {
                return A._handleUnavailability(U, D, v.database);
              }, function(U, D) {
                return A._handleWriteFailure(U, D, v.database);
              }, function(U, D) {
                return A._handleAuthorizationExpired(U, D, v.database);
              }), [
                4,
                this._freshRoutingTable({
                  accessMode: i,
                  database: v.database,
                  bookmarks: a,
                  impersonatedUser: u,
                  onDatabaseNameResolved: function(U) {
                    v.database = v.database || U, c && c(U);
                  }
                })
                // select a target server based on specified access mode
              ];
            case 1:
              if (O = $.sent(), i === j_)
                l = this._loadBalancingStrategy.selectReader(O.readers), s = "read";
              else if (i === Yl)
                l = this._loadBalancingStrategy.selectWriter(O.writers), s = "write";
              else
                throw (0, Je.newError)("Illegal mode " + i);
              if (!l)
                throw (0, Je.newError)("Failed to obtain connection towards ".concat(s, " server. Known routing table is: ").concat(O), mi);
              $.label = 2;
            case 2:
              return $.trys.push([2, 4, , 5]), [4, this._acquireConnectionToServer(l, s, O)];
            case 3:
              return E = $.sent(), [2, new It.DelegateConnection(E, y)];
            case 4:
              throw T = $.sent(), C = y.handleAndTransformError(T, l), C;
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
        var n, i, o, a, u, c;
        return Ye(this, function(s) {
          switch (s.label) {
            case 0:
              return [4, this._resolveSeedRouter(this._seedRouter)];
            case 1:
              n = s.sent(), o = 0, s.label = 2;
            case 2:
              if (!(o < n.length))
                return [3, 8];
              s.label = 3;
            case 3:
              return s.trys.push([3, 6, , 7]), [4, (0, It.createChannelConnection)(n[o], this._config, this._createConnectionErrorHandler(), this._log)];
            case 4:
              return a = s.sent(), u = a.protocol() ? a.protocol().version : null, [4, a.close()];
            case 5:
              return s.sent(), u ? [2, r(u)] : [2, !1];
            case 6:
              return c = s.sent(), i = c, [3, 7];
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
                return n >= s3;
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
                return n >= u3;
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
                return n >= c3;
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
        var o, a, u, c, s, l, v, y, O, E, T, C;
        return Ye(this, function(A) {
          switch (A.label) {
            case 0:
              return o = { database: n || mu }, [4, this._freshRoutingTable({
                accessMode: i,
                database: o.database,
                onDatabaseNameResolved: function($) {
                  o.database = o.database || $;
                }
              })];
            case 1:
              a = A.sent(), u = i === Yl ? a.writers : a.readers, c = (0, Je.newError)("No servers available for database '".concat(o.database, "' with access mode '").concat(i, "'"), zl), A.label = 2;
            case 2:
              A.trys.push([2, 9, 10, 11]), s = wf(u), l = s.next(), A.label = 3;
            case 3:
              if (l.done)
                return [3, 8];
              v = l.value, A.label = 4;
            case 4:
              return A.trys.push([4, 6, , 7]), [4, this._verifyConnectivityAndGetServerVersion({ address: v })];
            case 5:
              return y = A.sent(), [2, y];
            case 6:
              return O = A.sent(), c = O, [3, 7];
            case 7:
              return l = s.next(), [3, 3];
            case 8:
              return [3, 11];
            case 9:
              return E = A.sent(), T = { error: E }, [3, 11];
            case 10:
              try {
                l && !l.done && (C = s.return) && C.call(s);
              } finally {
                if (T)
                  throw T.error;
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
      var n = r === void 0 ? {} : r, i = n.accessMode, o = n.database, a = n.bookmarks, u = n.impersonatedUser, c = n.onDatabaseNameResolved, s = this._routingTableRegistry.get(o, function() {
        return new C_.RoutingTable({ database: o });
      });
      return s.isStaleFor(i) ? (this._log.info('Routing table is stale for database: "'.concat(o, '" and access mode: "').concat(i, '": ').concat(s)), this._refreshRoutingTable(s, a, u, c)) : s;
    }, t.prototype._refreshRoutingTable = function(r, n, i, o) {
      var a = r.routers;
      return this._useSeedRouter ? this._fetchRoutingTableFromSeedRouterFallbackToKnownRouters(a, r, n, i, o) : this._fetchRoutingTableFromKnownRoutersFallbackToSeedRouter(a, r, n, i, o);
    }, t.prototype._fetchRoutingTableFromSeedRouterFallbackToKnownRouters = function(r, n, i, o, a) {
      return ze(this, void 0, void 0, function() {
        var u, c, s, l, v, y, O;
        return Ye(this, function(E) {
          switch (E.label) {
            case 0:
              return u = [], [4, this._fetchRoutingTableUsingSeedRouter(u, this._seedRouter, n, i, o)];
            case 1:
              return c = kr.apply(void 0, [E.sent(), 2]), s = c[0], l = c[1], s ? (this._useSeedRouter = !1, [3, 4]) : [3, 2];
            case 2:
              return [4, this._fetchRoutingTableUsingKnownRouters(r, n, i, o)];
            case 3:
              v = kr.apply(void 0, [E.sent(), 2]), y = v[0], O = v[1], s = y, l = O || l, E.label = 4;
            case 4:
              return [4, this._applyRoutingTableIfPossible(n, s, a, l)];
            case 5:
              return [2, E.sent()];
          }
        });
      });
    }, t.prototype._fetchRoutingTableFromKnownRoutersFallbackToSeedRouter = function(r, n, i, o, a) {
      return ze(this, void 0, void 0, function() {
        var u, c, s, l;
        return Ye(this, function(v) {
          switch (v.label) {
            case 0:
              return [4, this._fetchRoutingTableUsingKnownRouters(r, n, i, o)];
            case 1:
              return u = kr.apply(void 0, [v.sent(), 2]), c = u[0], s = u[1], c ? [3, 3] : [4, this._fetchRoutingTableUsingSeedRouter(r, this._seedRouter, n, i, o)];
            case 2:
              l = kr.apply(void 0, [v.sent(), 2]), c = l[0], s = l[1], v.label = 3;
            case 3:
              return [4, this._applyRoutingTableIfPossible(n, c, a, s)];
            case 4:
              return [2, v.sent()];
          }
        });
      });
    }, t.prototype._fetchRoutingTableUsingKnownRouters = function(r, n, i, o) {
      return ze(this, void 0, void 0, function() {
        var a, u, c, s;
        return Ye(this, function(l) {
          switch (l.label) {
            case 0:
              return [4, this._fetchRoutingTable(r, n, i, o)];
            case 1:
              return a = kr.apply(void 0, [l.sent(), 2]), u = a[0], c = a[1], u ? [2, [u, null]] : (s = r.length - 1, t._forgetRouter(n, r, s), [2, [null, c]]);
          }
        });
      });
    }, t.prototype._fetchRoutingTableUsingSeedRouter = function(r, n, i, o, a) {
      return ze(this, void 0, void 0, function() {
        var u, c;
        return Ye(this, function(s) {
          switch (s.label) {
            case 0:
              return [
                4,
                this._resolveSeedRouter(n)
                // filter out all addresses that we've already tried
              ];
            case 1:
              return u = s.sent(), c = u.filter(function(l) {
                return r.indexOf(l) < 0;
              }), [4, this._fetchRoutingTable(c, i, o, a)];
            case 2:
              return [2, s.sent()];
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
              return n = a.sent(), [4, Promise.all(n.map(function(u) {
                return o._dnsResolver.resolve(u);
              }))];
            case 2:
              return i = a.sent(), [2, [].concat.apply([], i)];
          }
        });
      });
    }, t.prototype._fetchRoutingTable = function(r, n, i, o) {
      return ze(this, void 0, void 0, function() {
        var a = this;
        return Ye(this, function(u) {
          return [2, r.reduce(function(c, s, l) {
            return ze(a, void 0, void 0, function() {
              var v, y, O, E, T, C, A;
              return Ye(this, function($) {
                switch ($.label) {
                  case 0:
                    return [4, c];
                  case 1:
                    return v = kr.apply(void 0, [$.sent(), 1]), y = v[0], y ? [2, [y, null]] : (O = l - 1, t._forgetRouter(n, r, O), [4, this._createSessionForRediscovery(s, i, o)]);
                  case 2:
                    if (E = kr.apply(void 0, [$.sent(), 2]), T = E[0], C = E[1], !T)
                      return [3, 8];
                    $.label = 3;
                  case 3:
                    return $.trys.push([3, 5, 6, 7]), [4, this._rediscovery.lookupRoutingTableOnRouter(T, n.database, s, o)];
                  case 4:
                    return [2, [$.sent(), null]];
                  case 5:
                    return A = $.sent(), [2, this._handleRediscoveryError(A, s)];
                  case 6:
                    return T.close(), [
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
        var o, a, u, c, s, l = this;
        return Ye(this, function(v) {
          switch (v.label) {
            case 0:
              return v.trys.push([0, 2, , 3]), [4, this._connectionPool.acquire(r)];
            case 1:
              return o = v.sent(), a = It.ConnectionErrorHandler.create({
                errorCode: mi,
                handleAuthorizationExpired: function(y, O) {
                  return l._handleAuthorizationExpired(y, O);
                }
              }), u = new n3.default(new It.DelegateConnection(o, a)), c = o.protocol().version, c < 4 ? [2, [new Je.Session({
                mode: Yl,
                bookmarks: a3.empty(),
                connectionProvider: u
              }), null]] : [2, [new Je.Session({
                mode: j_,
                database: y3,
                bookmarks: n,
                connectionProvider: u,
                impersonatedUser: i
              }), null]];
            case 2:
              return s = v.sent(), [2, this._handleRediscoveryError(s, r)];
            case 3:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, t.prototype._handleRediscoveryError = function(r, n) {
      if (w3(r) || E3(r))
        throw r;
      if (r.code === l3)
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
  }(i3.default)
);
Cd.default = g3;
var O3 = (
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
          var a = kr(o.value, 2), u = a[1];
          t(u);
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
          var a = kr(o.value, 2), u = a[0], c = a[1];
          t(c) && this._remove(u);
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
      return this;
    }, e;
  }()
);
function w3(e) {
  return [
    f3,
    d3,
    h3,
    _3,
    p3,
    m3
  ].includes(e.code);
}
function E3(e) {
  return e.code.startsWith("Neo.ClientError.Security.") && ![
    v3
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
  var n = Ga;
  Object.defineProperty(e, "PooledConnectionProvider", { enumerable: !0, get: function() {
    return t(n).default;
  } });
  var i = Rd;
  Object.defineProperty(e, "DirectConnectionProvider", { enumerable: !0, get: function() {
    return t(i).default;
  } });
  var o = Cd;
  Object.defineProperty(e, "RoutingConnectionProvider", { enumerable: !0, get: function() {
    return t(o).default;
  } });
})(hb);
(function(e) {
  var t = d && d.__createBinding || (Object.create ? function(o, a, u, c) {
    c === void 0 && (c = u);
    var s = Object.getOwnPropertyDescriptor(a, u);
    (!s || ("get" in s ? !a.__esModule : s.writable || s.configurable)) && (s = { enumerable: !0, get: function() {
      return a[u];
    } }), Object.defineProperty(o, c, s);
  } : function(o, a, u, c) {
    c === void 0 && (c = u), o[c] = a[u];
  }), r = d && d.__setModuleDefault || (Object.create ? function(o, a) {
    Object.defineProperty(o, "default", { enumerable: !0, value: a });
  } : function(o, a) {
    o.default = a;
  }), n = d && d.__importStar || function(o) {
    if (o && o.__esModule)
      return o;
    var a = {};
    if (o != null)
      for (var u in o)
        u !== "default" && Object.prototype.hasOwnProperty.call(o, u) && t(a, o, u);
    return r(a, o), a;
  }, i = d && d.__exportStar || function(o, a) {
    for (var u in o)
      u !== "default" && !Object.prototype.hasOwnProperty.call(a, u) && t(a, o, u);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.pool = e.packstream = e.channel = e.buf = e.bolt = e.loadBalancing = void 0, e.loadBalancing = n(nt), e.bolt = n(Jf), e.buf = n(Jt), e.channel = n(Xn), e.packstream = n(Ke), e.pool = n(Sd), i(hb, e);
})(Xm);
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
      function K(Oe) {
        try {
          B(J.throw(Oe));
        } catch (I) {
          ce(I);
        }
      }
      function B(Oe) {
        Oe.done ? H(Oe.value) : re(Oe.value).then(Ne, K);
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
        return K([B, Oe]);
      };
    }
    function K(B) {
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
  var o = n(Kf), a = ee;
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
  var u = Xm, c = n(ts);
  e.RxSession = c.default;
  var s = n(Fa);
  e.RxTransaction = s.default;
  var l = n(Fs);
  e.RxManagedTransaction = l.default;
  var v = n(Jn);
  e.RxResult = v.default;
  var y = a.internal.util, O = y.ENCRYPTION_ON, E = y.assertString, T = y.isEmptyObjectOrNull, C = a.internal.serverAddress.ServerAddress, A = a.internal.urlUtil;
  function $(he, se, V) {
    V === void 0 && (V = {}), E(he, "Bolt URL");
    var J = A.parseDatabaseUrl(he), re = !1, H = !1, ce;
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
      V.encrypted = O, V.trust = ce;
    }
    se = se || {}, se.scheme = se.scheme || "none", V.userAgent = V.userAgent || D;
    var Ne = C.fromUrl(J.hostAndPort), K = {
      address: Ne,
      typename: re ? "Routing" : "Direct",
      routing: re
    };
    return new i.Driver(K, V, B());
    function B() {
      if (re)
        return function(Oe, I, M, W) {
          return new u.RoutingConnectionProvider({
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
      if (!T(J.query))
        throw new Error("Parameters are not supported with none routed scheme. Given URL: '".concat(he, "'"));
      return function(Oe, I, M) {
        return new u.DirectConnectionProvider({
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
  var G = {
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
  e.types = G;
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
  var Ae = {
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
    types: G,
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
    RxTransaction: s.default,
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
  e.default = Ae;
})(op);
const N_ = /* @__PURE__ */ BO(op);
function S3() {
  const e = N_.driver("neo4j+s://aa84864b.databases.neo4j.io", N_.auth.basic("neo4j", "BHK4W_phDl5-U9TVZ7iFic3Io4pm-CrPYB4cWoAnWhc"));
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
        const i = T3(t, 200);
        let o = 0;
        for await (const a of i)
          await r.run(n, { items: a }), console.log(`chunk ${o++} inserted`);
      } catch (i) {
        console.log(t[0], i);
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
function T3(e, t) {
  const r = [];
  for (let n = 0; n < e.length; n += t)
    r.push(e.slice(n, n + t));
  return r;
}
var Sb = $i;
$i.flatten = $i;
$i.unflatten = Ib;
function Tb(e) {
  return e && e.constructor && typeof e.constructor.isBuffer == "function" && e.constructor.isBuffer(e);
}
function Pb(e) {
  return e;
}
function $i(e, t) {
  t = t || {};
  const r = t.delimiter || ".", n = t.maxDepth, i = t.transformKey || Pb, o = {};
  function a(u, c, s) {
    s = s || 1, Object.keys(u).forEach(function(l) {
      const v = u[l], y = t.safe && Array.isArray(v), O = Object.prototype.toString.call(v), E = Tb(v), T = O === "[object Object]" || O === "[object Array]", C = c ? c + r + i(l) : i(l);
      if (!y && !E && T && Object.keys(v).length && (!t.maxDepth || s < n))
        return a(v, C, s + 1);
      o[C] = v;
    });
  }
  return a(e), o;
}
function Ib(e, t) {
  t = t || {};
  const r = t.delimiter || ".", n = t.overwrite || !1, i = t.transformKey || Pb, o = {};
  if (Tb(e) || Object.prototype.toString.call(e) !== "[object Object]")
    return e;
  function u(l) {
    const v = Number(l);
    return isNaN(v) || l.indexOf(".") !== -1 || t.object ? l : v;
  }
  function c(l, v, y) {
    return Object.keys(y).reduce(function(O, E) {
      return O[l + r + E] = y[E], O;
    }, v);
  }
  function s(l) {
    const v = Object.prototype.toString.call(l), y = v === "[object Array]", O = v === "[object Object]";
    if (l) {
      if (y)
        return !l.length;
      if (O)
        return !Object.keys(l).length;
    } else
      return !0;
  }
  return e = Object.keys(e).reduce(function(l, v) {
    const y = Object.prototype.toString.call(e[v]);
    return !(y === "[object Object]" || y === "[object Array]") || s(e[v]) ? (l[v] = e[v], l) : c(
      v,
      l,
      $i(e[v], t)
    );
  }, {}), Object.keys(e).forEach(function(l) {
    const v = l.split(r).map(i);
    let y = u(v.shift()), O = u(v[0]), E = o;
    for (; O !== void 0; ) {
      if (y === "__proto__")
        return;
      const T = Object.prototype.toString.call(E[y]), C = T === "[object Object]" || T === "[object Array]";
      if (!n && !C && typeof E[y] < "u")
        return;
      (n && !C || !n && E[y] == null) && (E[y] = typeof O == "number" && !t.object ? [] : {}), E = E[y], v.length > 0 && (y = u(v.shift()), O = u(v[0]));
    }
    E[y] = Ib(e[l], t);
  }), o;
}
const P3 = [
  {
    connector: FO,
    config: {
      url: "https://socialtech.myjetbrains.com/api/",
      token: "perm:YWxla3NhbmRyLm15a3VseWNo.NjEtMzc=.b5cng2s0GSGnYeChQvRKamXLzODHA2",
      issueQueries: [
        "tag:BigTeam and (Sprint:{Sprint 5_2023} or Sprint:{Sprint 6_2023})"
      ],
      issueLoadingMaxDepthLevel: 10
    }
  }
  // {
  //   connector: gitlab,
  //   config: {
  //     url: ({}).VITE_GITLAB_URL,
  //     token: ({}).VITE_GITLAB_TOKEN,
  //   },
  // },
];
function I3() {
  P3.forEach(R3);
}
function R3({ connector: e, config: t }) {
  e.connect({
    config: t,
    addNodes: A3,
    addRelations: C3
  });
}
const $d = S3();
await $d.clearDb();
async function A3(e, t) {
  console.log("add", e, t.length), await $d.insert(e, t.map((r) => Sb.flatten(r))), console.log("adde");
}
async function C3(e) {
  console.log("add rels", e.length), await $d.insertRelations(e.map((t) => Sb.flatten(t))), console.log("added rels");
}
I3();
