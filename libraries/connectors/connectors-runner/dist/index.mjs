function c_(e, r) {
  return function() {
    return e.apply(r, arguments);
  };
}
const { toString: l_ } = Object.prototype, { getPrototypeOf: Af } = Object, Rf = ((e) => (r) => {
  const t = l_.call(r);
  return e[t] || (e[t] = t.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), ir = (e) => (e = e.toLowerCase(), (r) => Rf(r) === e), Xa = (e) => (r) => typeof r === e, { isArray: Fn } = Array, Ui = Xa("undefined");
function MO(e) {
  return e !== null && !Ui(e) && e.constructor !== null && !Ui(e.constructor) && hr(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const f_ = ir("ArrayBuffer");
function kO(e) {
  let r;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? r = ArrayBuffer.isView(e) : r = e && e.buffer && f_(e.buffer), r;
}
const DO = Xa("string"), hr = Xa("function"), d_ = Xa("number"), Cf = (e) => e !== null && typeof e == "object", UO = (e) => e === !0 || e === !1, Ea = (e) => {
  if (Rf(e) !== "object")
    return !1;
  const r = Af(e);
  return (r === null || r === Object.prototype || Object.getPrototypeOf(r) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, LO = ir("Date"), FO = ir("File"), xO = ir("Blob"), BO = ir("FileList"), WO = (e) => Cf(e) && hr(e.pipe), VO = (e) => {
  const r = "[object FormData]";
  return e && (typeof FormData == "function" && e instanceof FormData || l_.call(e) === r || hr(e.toString) && e.toString() === r);
}, qO = ir("URLSearchParams"), HO = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Hi(e, r, { allOwnKeys: t = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let n, i;
  if (typeof e != "object" && (e = [e]), Fn(e))
    for (n = 0, i = e.length; n < i; n++)
      r.call(null, e[n], n, e);
  else {
    const o = t ? Object.getOwnPropertyNames(e) : Object.keys(e), a = o.length;
    let u;
    for (n = 0; n < a; n++)
      u = o[n], r.call(null, e[u], u, e);
  }
}
function h_(e, r) {
  r = r.toLowerCase();
  const t = Object.keys(e);
  let n = t.length, i;
  for (; n-- > 0; )
    if (i = t[n], r === i.toLowerCase())
      return i;
  return null;
}
const v_ = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), p_ = (e) => !Ui(e) && e !== v_;
function Zl() {
  const { caseless: e } = p_(this) && this || {}, r = {}, t = (n, i) => {
    const o = e && h_(r, i) || i;
    Ea(r[o]) && Ea(n) ? r[o] = Zl(r[o], n) : Ea(n) ? r[o] = Zl({}, n) : Fn(n) ? r[o] = n.slice() : r[o] = n;
  };
  for (let n = 0, i = arguments.length; n < i; n++)
    arguments[n] && Hi(arguments[n], t);
  return r;
}
const zO = (e, r, t, { allOwnKeys: n } = {}) => (Hi(r, (i, o) => {
  t && hr(i) ? e[o] = c_(i, t) : e[o] = i;
}, { allOwnKeys: n }), e), YO = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), GO = (e, r, t, n) => {
  e.prototype = Object.create(r.prototype, n), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: r.prototype
  }), t && Object.assign(e.prototype, t);
}, KO = (e, r, t, n) => {
  let i, o, a;
  const u = {};
  if (r = r || {}, e == null)
    return r;
  do {
    for (i = Object.getOwnPropertyNames(e), o = i.length; o-- > 0; )
      a = i[o], (!n || n(a, e, r)) && !u[a] && (r[a] = e[a], u[a] = !0);
    e = t !== !1 && Af(e);
  } while (e && (!t || t(e, r)) && e !== Object.prototype);
  return r;
}, ZO = (e, r, t) => {
  e = String(e), (t === void 0 || t > e.length) && (t = e.length), t -= r.length;
  const n = e.indexOf(r, t);
  return n !== -1 && n === t;
}, QO = (e) => {
  if (!e)
    return null;
  if (Fn(e))
    return e;
  let r = e.length;
  if (!d_(r))
    return null;
  const t = new Array(r);
  for (; r-- > 0; )
    t[r] = e[r];
  return t;
}, XO = ((e) => (r) => e && r instanceof e)(typeof Uint8Array < "u" && Af(Uint8Array)), JO = (e, r) => {
  const n = (e && e[Symbol.iterator]).call(e);
  let i;
  for (; (i = n.next()) && !i.done; ) {
    const o = i.value;
    r.call(e, o[0], o[1]);
  }
}, ew = (e, r) => {
  let t;
  const n = [];
  for (; (t = e.exec(r)) !== null; )
    n.push(t);
  return n;
}, tw = ir("HTMLFormElement"), rw = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(t, n, i) {
    return n.toUpperCase() + i;
  }
), oh = (({ hasOwnProperty: e }) => (r, t) => e.call(r, t))(Object.prototype), nw = ir("RegExp"), __ = (e, r) => {
  const t = Object.getOwnPropertyDescriptors(e), n = {};
  Hi(t, (i, o) => {
    r(i, o, e) !== !1 && (n[o] = i);
  }), Object.defineProperties(e, n);
}, iw = (e) => {
  __(e, (r, t) => {
    if (hr(e) && ["arguments", "caller", "callee"].indexOf(t) !== -1)
      return !1;
    const n = e[t];
    if (!!hr(n)) {
      if (r.enumerable = !1, "writable" in r) {
        r.writable = !1;
        return;
      }
      r.set || (r.set = () => {
        throw Error("Can not rewrite read-only method '" + t + "'");
      });
    }
  });
}, ow = (e, r) => {
  const t = {}, n = (i) => {
    i.forEach((o) => {
      t[o] = !0;
    });
  };
  return Fn(e) ? n(e) : n(String(e).split(r)), t;
}, aw = () => {
}, uw = (e, r) => (e = +e, Number.isFinite(e) ? e : r), il = "abcdefghijklmnopqrstuvwxyz", ah = "0123456789", y_ = {
  DIGIT: ah,
  ALPHA: il,
  ALPHA_DIGIT: il + il.toUpperCase() + ah
}, sw = (e = 16, r = y_.ALPHA_DIGIT) => {
  let t = "";
  const { length: n } = r;
  for (; e--; )
    t += r[Math.random() * n | 0];
  return t;
};
function cw(e) {
  return !!(e && hr(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const lw = (e) => {
  const r = new Array(10), t = (n, i) => {
    if (Cf(n)) {
      if (r.indexOf(n) >= 0)
        return;
      if (!("toJSON" in n)) {
        r[i] = n;
        const o = Fn(n) ? [] : {};
        return Hi(n, (a, u) => {
          const c = t(a, i + 1);
          !Ui(c) && (o[u] = c);
        }), r[i] = void 0, o;
      }
    }
    return n;
  };
  return t(e, 0);
}, M = {
  isArray: Fn,
  isArrayBuffer: f_,
  isBuffer: MO,
  isFormData: VO,
  isArrayBufferView: kO,
  isString: DO,
  isNumber: d_,
  isBoolean: UO,
  isObject: Cf,
  isPlainObject: Ea,
  isUndefined: Ui,
  isDate: LO,
  isFile: FO,
  isBlob: xO,
  isRegExp: nw,
  isFunction: hr,
  isStream: WO,
  isURLSearchParams: qO,
  isTypedArray: XO,
  isFileList: BO,
  forEach: Hi,
  merge: Zl,
  extend: zO,
  trim: HO,
  stripBOM: YO,
  inherits: GO,
  toFlatObject: KO,
  kindOf: Rf,
  kindOfTest: ir,
  endsWith: ZO,
  toArray: QO,
  forEachEntry: JO,
  matchAll: ew,
  isHTMLForm: tw,
  hasOwnProperty: oh,
  hasOwnProp: oh,
  reduceDescriptors: __,
  freezeMethods: iw,
  toObjectSet: ow,
  toCamelCase: rw,
  noop: aw,
  toFiniteNumber: uw,
  findKey: h_,
  global: v_,
  isContextDefined: p_,
  ALPHABET: y_,
  generateString: sw,
  isSpecCompliantForm: cw,
  toJSONObject: lw
};
function fe(e, r, t, n, i) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", r && (this.code = r), t && (this.config = t), n && (this.request = n), i && (this.response = i);
}
M.inherits(fe, Error, {
  toJSON: function() {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: M.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
const m_ = fe.prototype, b_ = {};
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
].forEach((e) => {
  b_[e] = { value: e };
});
Object.defineProperties(fe, b_);
Object.defineProperty(m_, "isAxiosError", { value: !0 });
fe.from = (e, r, t, n, i, o) => {
  const a = Object.create(m_);
  return M.toFlatObject(e, a, function(c) {
    return c !== Error.prototype;
  }, (u) => u !== "isAxiosError"), fe.call(a, e.message, r, t, n, i), a.cause = e, a.name = e.name, o && Object.assign(a, o), a;
};
const fw = null;
function Ql(e) {
  return M.isPlainObject(e) || M.isArray(e);
}
function g_(e) {
  return M.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function uh(e, r, t) {
  return e ? e.concat(r).map(function(i, o) {
    return i = g_(i), !t && o ? "[" + i + "]" : i;
  }).join(t ? "." : "") : r;
}
function dw(e) {
  return M.isArray(e) && !e.some(Ql);
}
const hw = M.toFlatObject(M, {}, null, function(r) {
  return /^is[A-Z]/.test(r);
});
function Ja(e, r, t) {
  if (!M.isObject(e))
    throw new TypeError("target must be an object");
  r = r || new FormData(), t = M.toFlatObject(t, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(S, P) {
    return !M.isUndefined(P[S]);
  });
  const n = t.metaTokens, i = t.visitor || l, o = t.dots, a = t.indexes, c = (t.Blob || typeof Blob < "u" && Blob) && M.isSpecCompliantForm(r);
  if (!M.isFunction(i))
    throw new TypeError("visitor must be a function");
  function s(O) {
    if (O === null)
      return "";
    if (M.isDate(O))
      return O.toISOString();
    if (!c && M.isBlob(O))
      throw new fe("Blob is not supported. Use a Buffer instead.");
    return M.isArrayBuffer(O) || M.isTypedArray(O) ? c && typeof Blob == "function" ? new Blob([O]) : Buffer.from(O) : O;
  }
  function l(O, S, P) {
    let R = O;
    if (O && !P && typeof O == "object") {
      if (M.endsWith(S, "{}"))
        S = n ? S : S.slice(0, -2), O = JSON.stringify(O);
      else if (M.isArray(O) && dw(O) || (M.isFileList(O) || M.endsWith(S, "[]")) && (R = M.toArray(O)))
        return S = g_(S), R.forEach(function(j, k) {
          !(M.isUndefined(j) || j === null) && r.append(
            a === !0 ? uh([S], k, o) : a === null ? S : S + "[]",
            s(j)
          );
        }), !1;
    }
    return Ql(O) ? !0 : (r.append(uh(P, S, o), s(O)), !1);
  }
  const f = [], y = Object.assign(hw, {
    defaultVisitor: l,
    convertValue: s,
    isVisitable: Ql
  });
  function b(O, S) {
    if (!M.isUndefined(O)) {
      if (f.indexOf(O) !== -1)
        throw Error("Circular reference detected in " + S.join("."));
      f.push(O), M.forEach(O, function(R, $) {
        (!(M.isUndefined(R) || R === null) && i.call(
          r,
          R,
          M.isString($) ? $.trim() : $,
          S,
          y
        )) === !0 && b(R, S ? S.concat($) : [$]);
      }), f.pop();
    }
  }
  if (!M.isObject(e))
    throw new TypeError("data must be an object");
  return b(e), r;
}
function sh(e) {
  const r = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(n) {
    return r[n];
  });
}
function $f(e, r) {
  this._pairs = [], e && Ja(e, this, r);
}
const O_ = $f.prototype;
O_.append = function(r, t) {
  this._pairs.push([r, t]);
};
O_.toString = function(r) {
  const t = r ? function(n) {
    return r.call(this, n, sh);
  } : sh;
  return this._pairs.map(function(i) {
    return t(i[0]) + "=" + t(i[1]);
  }, "").join("&");
};
function vw(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function w_(e, r, t) {
  if (!r)
    return e;
  const n = t && t.encode || vw, i = t && t.serialize;
  let o;
  if (i ? o = i(r, t) : o = M.isURLSearchParams(r) ? r.toString() : new $f(r, t).toString(n), o) {
    const a = e.indexOf("#");
    a !== -1 && (e = e.slice(0, a)), e += (e.indexOf("?") === -1 ? "?" : "&") + o;
  }
  return e;
}
class pw {
  constructor() {
    this.handlers = [];
  }
  use(r, t, n) {
    return this.handlers.push({
      fulfilled: r,
      rejected: t,
      synchronous: n ? n.synchronous : !1,
      runWhen: n ? n.runWhen : null
    }), this.handlers.length - 1;
  }
  eject(r) {
    this.handlers[r] && (this.handlers[r] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(r) {
    M.forEach(this.handlers, function(n) {
      n !== null && r(n);
    });
  }
}
const ch = pw, E_ = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, _w = typeof URLSearchParams < "u" ? URLSearchParams : $f, yw = typeof FormData < "u" ? FormData : null, mw = (() => {
  let e;
  return typeof navigator < "u" && ((e = navigator.product) === "ReactNative" || e === "NativeScript" || e === "NS") ? !1 : typeof window < "u" && typeof document < "u";
})(), bw = (() => typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), Ut = {
  isBrowser: !0,
  classes: {
    URLSearchParams: _w,
    FormData: yw,
    Blob
  },
  isStandardBrowserEnv: mw,
  isStandardBrowserWebWorkerEnv: bw,
  protocols: ["http", "https", "file", "blob", "url", "data"]
};
function gw(e, r) {
  return Ja(e, new Ut.classes.URLSearchParams(), Object.assign({
    visitor: function(t, n, i, o) {
      return Ut.isNode && M.isBuffer(t) ? (this.append(n, t.toString("base64")), !1) : o.defaultVisitor.apply(this, arguments);
    }
  }, r));
}
function Ow(e) {
  return M.matchAll(/\w+|\[(\w*)]/g, e).map((r) => r[0] === "[]" ? "" : r[1] || r[0]);
}
function ww(e) {
  const r = {}, t = Object.keys(e);
  let n;
  const i = t.length;
  let o;
  for (n = 0; n < i; n++)
    o = t[n], r[o] = e[o];
  return r;
}
function S_(e) {
  function r(t, n, i, o) {
    let a = t[o++];
    const u = Number.isFinite(+a), c = o >= t.length;
    return a = !a && M.isArray(i) ? i.length : a, c ? (M.hasOwnProp(i, a) ? i[a] = [i[a], n] : i[a] = n, !u) : ((!i[a] || !M.isObject(i[a])) && (i[a] = []), r(t, n, i[a], o) && M.isArray(i[a]) && (i[a] = ww(i[a])), !u);
  }
  if (M.isFormData(e) && M.isFunction(e.entries)) {
    const t = {};
    return M.forEachEntry(e, (n, i) => {
      r(Ow(n), i, t, 0);
    }), t;
  }
  return null;
}
const Ew = {
  "Content-Type": void 0
};
function Sw(e, r, t) {
  if (M.isString(e))
    try {
      return (r || JSON.parse)(e), M.trim(e);
    } catch (n) {
      if (n.name !== "SyntaxError")
        throw n;
    }
  return (t || JSON.stringify)(e);
}
const eu = {
  transitional: E_,
  adapter: ["xhr", "http"],
  transformRequest: [function(r, t) {
    const n = t.getContentType() || "", i = n.indexOf("application/json") > -1, o = M.isObject(r);
    if (o && M.isHTMLForm(r) && (r = new FormData(r)), M.isFormData(r))
      return i && i ? JSON.stringify(S_(r)) : r;
    if (M.isArrayBuffer(r) || M.isBuffer(r) || M.isStream(r) || M.isFile(r) || M.isBlob(r))
      return r;
    if (M.isArrayBufferView(r))
      return r.buffer;
    if (M.isURLSearchParams(r))
      return t.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), r.toString();
    let u;
    if (o) {
      if (n.indexOf("application/x-www-form-urlencoded") > -1)
        return gw(r, this.formSerializer).toString();
      if ((u = M.isFileList(r)) || n.indexOf("multipart/form-data") > -1) {
        const c = this.env && this.env.FormData;
        return Ja(
          u ? { "files[]": r } : r,
          c && new c(),
          this.formSerializer
        );
      }
    }
    return o || i ? (t.setContentType("application/json", !1), Sw(r)) : r;
  }],
  transformResponse: [function(r) {
    const t = this.transitional || eu.transitional, n = t && t.forcedJSONParsing, i = this.responseType === "json";
    if (r && M.isString(r) && (n && !this.responseType || i)) {
      const a = !(t && t.silentJSONParsing) && i;
      try {
        return JSON.parse(r);
      } catch (u) {
        if (a)
          throw u.name === "SyntaxError" ? fe.from(u, fe.ERR_BAD_RESPONSE, this, null, this.response) : u;
      }
    }
    return r;
  }],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: Ut.classes.FormData,
    Blob: Ut.classes.Blob
  },
  validateStatus: function(r) {
    return r >= 200 && r < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*"
    }
  }
};
M.forEach(["delete", "get", "head"], function(r) {
  eu.headers[r] = {};
});
M.forEach(["post", "put", "patch"], function(r) {
  eu.headers[r] = M.merge(Ew);
});
const jf = eu, Tw = M.toObjectSet([
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
]), Pw = (e) => {
  const r = {};
  let t, n, i;
  return e && e.split(`
`).forEach(function(a) {
    i = a.indexOf(":"), t = a.substring(0, i).trim().toLowerCase(), n = a.substring(i + 1).trim(), !(!t || r[t] && Tw[t]) && (t === "set-cookie" ? r[t] ? r[t].push(n) : r[t] = [n] : r[t] = r[t] ? r[t] + ", " + n : n);
  }), r;
}, lh = Symbol("internals");
function vi(e) {
  return e && String(e).trim().toLowerCase();
}
function Sa(e) {
  return e === !1 || e == null ? e : M.isArray(e) ? e.map(Sa) : String(e);
}
function Iw(e) {
  const r = /* @__PURE__ */ Object.create(null), t = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; n = t.exec(e); )
    r[n[1]] = n[2];
  return r;
}
function Aw(e) {
  return /^[-_a-zA-Z]+$/.test(e.trim());
}
function ol(e, r, t, n, i) {
  if (M.isFunction(n))
    return n.call(this, r, t);
  if (i && (r = t), !!M.isString(r)) {
    if (M.isString(n))
      return r.indexOf(n) !== -1;
    if (M.isRegExp(n))
      return n.test(r);
  }
}
function Rw(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (r, t, n) => t.toUpperCase() + n);
}
function Cw(e, r) {
  const t = M.toCamelCase(" " + r);
  ["get", "set", "has"].forEach((n) => {
    Object.defineProperty(e, n + t, {
      value: function(i, o, a) {
        return this[n].call(this, r, i, o, a);
      },
      configurable: !0
    });
  });
}
class tu {
  constructor(r) {
    r && this.set(r);
  }
  set(r, t, n) {
    const i = this;
    function o(u, c, s) {
      const l = vi(c);
      if (!l)
        throw new Error("header name must be a non-empty string");
      const f = M.findKey(i, l);
      (!f || i[f] === void 0 || s === !0 || s === void 0 && i[f] !== !1) && (i[f || c] = Sa(u));
    }
    const a = (u, c) => M.forEach(u, (s, l) => o(s, l, c));
    return M.isPlainObject(r) || r instanceof this.constructor ? a(r, t) : M.isString(r) && (r = r.trim()) && !Aw(r) ? a(Pw(r), t) : r != null && o(t, r, n), this;
  }
  get(r, t) {
    if (r = vi(r), r) {
      const n = M.findKey(this, r);
      if (n) {
        const i = this[n];
        if (!t)
          return i;
        if (t === !0)
          return Iw(i);
        if (M.isFunction(t))
          return t.call(this, i, n);
        if (M.isRegExp(t))
          return t.exec(i);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(r, t) {
    if (r = vi(r), r) {
      const n = M.findKey(this, r);
      return !!(n && this[n] !== void 0 && (!t || ol(this, this[n], n, t)));
    }
    return !1;
  }
  delete(r, t) {
    const n = this;
    let i = !1;
    function o(a) {
      if (a = vi(a), a) {
        const u = M.findKey(n, a);
        u && (!t || ol(n, n[u], u, t)) && (delete n[u], i = !0);
      }
    }
    return M.isArray(r) ? r.forEach(o) : o(r), i;
  }
  clear(r) {
    const t = Object.keys(this);
    let n = t.length, i = !1;
    for (; n--; ) {
      const o = t[n];
      (!r || ol(this, this[o], o, r, !0)) && (delete this[o], i = !0);
    }
    return i;
  }
  normalize(r) {
    const t = this, n = {};
    return M.forEach(this, (i, o) => {
      const a = M.findKey(n, o);
      if (a) {
        t[a] = Sa(i), delete t[o];
        return;
      }
      const u = r ? Rw(o) : String(o).trim();
      u !== o && delete t[o], t[u] = Sa(i), n[u] = !0;
    }), this;
  }
  concat(...r) {
    return this.constructor.concat(this, ...r);
  }
  toJSON(r) {
    const t = /* @__PURE__ */ Object.create(null);
    return M.forEach(this, (n, i) => {
      n != null && n !== !1 && (t[i] = r && M.isArray(n) ? n.join(", ") : n);
    }), t;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([r, t]) => r + ": " + t).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(r) {
    return r instanceof this ? r : new this(r);
  }
  static concat(r, ...t) {
    const n = new this(r);
    return t.forEach((i) => n.set(i)), n;
  }
  static accessor(r) {
    const n = (this[lh] = this[lh] = {
      accessors: {}
    }).accessors, i = this.prototype;
    function o(a) {
      const u = vi(a);
      n[u] || (Cw(i, a), n[u] = !0);
    }
    return M.isArray(r) ? r.forEach(o) : o(r), this;
  }
}
tu.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
M.freezeMethods(tu.prototype);
M.freezeMethods(tu);
const Xt = tu;
function al(e, r) {
  const t = this || jf, n = r || t, i = Xt.from(n.headers);
  let o = n.data;
  return M.forEach(e, function(u) {
    o = u.call(t, o, i.normalize(), r ? r.status : void 0);
  }), i.normalize(), o;
}
function T_(e) {
  return !!(e && e.__CANCEL__);
}
function zi(e, r, t) {
  fe.call(this, e ?? "canceled", fe.ERR_CANCELED, r, t), this.name = "CanceledError";
}
M.inherits(zi, fe, {
  __CANCEL__: !0
});
function $w(e, r, t) {
  const n = t.config.validateStatus;
  !t.status || !n || n(t.status) ? e(t) : r(new fe(
    "Request failed with status code " + t.status,
    [fe.ERR_BAD_REQUEST, fe.ERR_BAD_RESPONSE][Math.floor(t.status / 100) - 4],
    t.config,
    t.request,
    t
  ));
}
const jw = Ut.isStandardBrowserEnv ? function() {
  return {
    write: function(t, n, i, o, a, u) {
      const c = [];
      c.push(t + "=" + encodeURIComponent(n)), M.isNumber(i) && c.push("expires=" + new Date(i).toGMTString()), M.isString(o) && c.push("path=" + o), M.isString(a) && c.push("domain=" + a), u === !0 && c.push("secure"), document.cookie = c.join("; ");
    },
    read: function(t) {
      const n = document.cookie.match(new RegExp("(^|;\\s*)(" + t + ")=([^;]*)"));
      return n ? decodeURIComponent(n[3]) : null;
    },
    remove: function(t) {
      this.write(t, "", Date.now() - 864e5);
    }
  };
}() : function() {
  return {
    write: function() {
    },
    read: function() {
      return null;
    },
    remove: function() {
    }
  };
}();
function Nw(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Mw(e, r) {
  return r ? e.replace(/\/+$/, "") + "/" + r.replace(/^\/+/, "") : e;
}
function P_(e, r) {
  return e && !Nw(r) ? Mw(e, r) : r;
}
const kw = Ut.isStandardBrowserEnv ? function() {
  const r = /(msie|trident)/i.test(navigator.userAgent), t = document.createElement("a");
  let n;
  function i(o) {
    let a = o;
    return r && (t.setAttribute("href", a), a = t.href), t.setAttribute("href", a), {
      href: t.href,
      protocol: t.protocol ? t.protocol.replace(/:$/, "") : "",
      host: t.host,
      search: t.search ? t.search.replace(/^\?/, "") : "",
      hash: t.hash ? t.hash.replace(/^#/, "") : "",
      hostname: t.hostname,
      port: t.port,
      pathname: t.pathname.charAt(0) === "/" ? t.pathname : "/" + t.pathname
    };
  }
  return n = i(window.location.href), function(a) {
    const u = M.isString(a) ? i(a) : a;
    return u.protocol === n.protocol && u.host === n.host;
  };
}() : function() {
  return function() {
    return !0;
  };
}();
function Dw(e) {
  const r = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return r && r[1] || "";
}
function Uw(e, r) {
  e = e || 10;
  const t = new Array(e), n = new Array(e);
  let i = 0, o = 0, a;
  return r = r !== void 0 ? r : 1e3, function(c) {
    const s = Date.now(), l = n[o];
    a || (a = s), t[i] = c, n[i] = s;
    let f = o, y = 0;
    for (; f !== i; )
      y += t[f++], f = f % e;
    if (i = (i + 1) % e, i === o && (o = (o + 1) % e), s - a < r)
      return;
    const b = l && s - l;
    return b ? Math.round(y * 1e3 / b) : void 0;
  };
}
function fh(e, r) {
  let t = 0;
  const n = Uw(50, 250);
  return (i) => {
    const o = i.loaded, a = i.lengthComputable ? i.total : void 0, u = o - t, c = n(u), s = o <= a;
    t = o;
    const l = {
      loaded: o,
      total: a,
      progress: a ? o / a : void 0,
      bytes: u,
      rate: c || void 0,
      estimated: c && a && s ? (a - o) / c : void 0,
      event: i
    };
    l[r ? "download" : "upload"] = !0, e(l);
  };
}
const Lw = typeof XMLHttpRequest < "u", Fw = Lw && function(e) {
  return new Promise(function(t, n) {
    let i = e.data;
    const o = Xt.from(e.headers).normalize(), a = e.responseType;
    let u;
    function c() {
      e.cancelToken && e.cancelToken.unsubscribe(u), e.signal && e.signal.removeEventListener("abort", u);
    }
    M.isFormData(i) && (Ut.isStandardBrowserEnv || Ut.isStandardBrowserWebWorkerEnv) && o.setContentType(!1);
    let s = new XMLHttpRequest();
    if (e.auth) {
      const b = e.auth.username || "", O = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
      o.set("Authorization", "Basic " + btoa(b + ":" + O));
    }
    const l = P_(e.baseURL, e.url);
    s.open(e.method.toUpperCase(), w_(l, e.params, e.paramsSerializer), !0), s.timeout = e.timeout;
    function f() {
      if (!s)
        return;
      const b = Xt.from(
        "getAllResponseHeaders" in s && s.getAllResponseHeaders()
      ), S = {
        data: !a || a === "text" || a === "json" ? s.responseText : s.response,
        status: s.status,
        statusText: s.statusText,
        headers: b,
        config: e,
        request: s
      };
      $w(function(R) {
        t(R), c();
      }, function(R) {
        n(R), c();
      }, S), s = null;
    }
    if ("onloadend" in s ? s.onloadend = f : s.onreadystatechange = function() {
      !s || s.readyState !== 4 || s.status === 0 && !(s.responseURL && s.responseURL.indexOf("file:") === 0) || setTimeout(f);
    }, s.onabort = function() {
      !s || (n(new fe("Request aborted", fe.ECONNABORTED, e, s)), s = null);
    }, s.onerror = function() {
      n(new fe("Network Error", fe.ERR_NETWORK, e, s)), s = null;
    }, s.ontimeout = function() {
      let O = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
      const S = e.transitional || E_;
      e.timeoutErrorMessage && (O = e.timeoutErrorMessage), n(new fe(
        O,
        S.clarifyTimeoutError ? fe.ETIMEDOUT : fe.ECONNABORTED,
        e,
        s
      )), s = null;
    }, Ut.isStandardBrowserEnv) {
      const b = (e.withCredentials || kw(l)) && e.xsrfCookieName && jw.read(e.xsrfCookieName);
      b && o.set(e.xsrfHeaderName, b);
    }
    i === void 0 && o.setContentType(null), "setRequestHeader" in s && M.forEach(o.toJSON(), function(O, S) {
      s.setRequestHeader(S, O);
    }), M.isUndefined(e.withCredentials) || (s.withCredentials = !!e.withCredentials), a && a !== "json" && (s.responseType = e.responseType), typeof e.onDownloadProgress == "function" && s.addEventListener("progress", fh(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && s.upload && s.upload.addEventListener("progress", fh(e.onUploadProgress)), (e.cancelToken || e.signal) && (u = (b) => {
      !s || (n(!b || b.type ? new zi(null, e, s) : b), s.abort(), s = null);
    }, e.cancelToken && e.cancelToken.subscribe(u), e.signal && (e.signal.aborted ? u() : e.signal.addEventListener("abort", u)));
    const y = Dw(l);
    if (y && Ut.protocols.indexOf(y) === -1) {
      n(new fe("Unsupported protocol " + y + ":", fe.ERR_BAD_REQUEST, e));
      return;
    }
    s.send(i || null);
  });
}, Ta = {
  http: fw,
  xhr: Fw
};
M.forEach(Ta, (e, r) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: r });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: r });
  }
});
const xw = {
  getAdapter: (e) => {
    e = M.isArray(e) ? e : [e];
    const { length: r } = e;
    let t, n;
    for (let i = 0; i < r && (t = e[i], !(n = M.isString(t) ? Ta[t.toLowerCase()] : t)); i++)
      ;
    if (!n)
      throw n === !1 ? new fe(
        `Adapter ${t} is not supported by the environment`,
        "ERR_NOT_SUPPORT"
      ) : new Error(
        M.hasOwnProp(Ta, t) ? `Adapter '${t}' is not available in the build` : `Unknown adapter '${t}'`
      );
    if (!M.isFunction(n))
      throw new TypeError("adapter is not a function");
    return n;
  },
  adapters: Ta
};
function ul(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new zi(null, e);
}
function dh(e) {
  return ul(e), e.headers = Xt.from(e.headers), e.data = al.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), xw.getAdapter(e.adapter || jf.adapter)(e).then(function(n) {
    return ul(e), n.data = al.call(
      e,
      e.transformResponse,
      n
    ), n.headers = Xt.from(n.headers), n;
  }, function(n) {
    return T_(n) || (ul(e), n && n.response && (n.response.data = al.call(
      e,
      e.transformResponse,
      n.response
    ), n.response.headers = Xt.from(n.response.headers))), Promise.reject(n);
  });
}
const hh = (e) => e instanceof Xt ? e.toJSON() : e;
function Rn(e, r) {
  r = r || {};
  const t = {};
  function n(s, l, f) {
    return M.isPlainObject(s) && M.isPlainObject(l) ? M.merge.call({ caseless: f }, s, l) : M.isPlainObject(l) ? M.merge({}, l) : M.isArray(l) ? l.slice() : l;
  }
  function i(s, l, f) {
    if (M.isUndefined(l)) {
      if (!M.isUndefined(s))
        return n(void 0, s, f);
    } else
      return n(s, l, f);
  }
  function o(s, l) {
    if (!M.isUndefined(l))
      return n(void 0, l);
  }
  function a(s, l) {
    if (M.isUndefined(l)) {
      if (!M.isUndefined(s))
        return n(void 0, s);
    } else
      return n(void 0, l);
  }
  function u(s, l, f) {
    if (f in r)
      return n(s, l);
    if (f in e)
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
    headers: (s, l) => i(hh(s), hh(l), !0)
  };
  return M.forEach(Object.keys(e).concat(Object.keys(r)), function(l) {
    const f = c[l] || i, y = f(e[l], r[l], l);
    M.isUndefined(y) && f !== u || (t[l] = y);
  }), t;
}
const I_ = "1.3.3", Nf = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, r) => {
  Nf[e] = function(n) {
    return typeof n === e || "a" + (r < 1 ? "n " : " ") + e;
  };
});
const vh = {};
Nf.transitional = function(r, t, n) {
  function i(o, a) {
    return "[Axios v" + I_ + "] Transitional option '" + o + "'" + a + (n ? ". " + n : "");
  }
  return (o, a, u) => {
    if (r === !1)
      throw new fe(
        i(a, " has been removed" + (t ? " in " + t : "")),
        fe.ERR_DEPRECATED
      );
    return t && !vh[a] && (vh[a] = !0, console.warn(
      i(
        a,
        " has been deprecated since v" + t + " and will be removed in the near future"
      )
    )), r ? r(o, a, u) : !0;
  };
};
function Bw(e, r, t) {
  if (typeof e != "object")
    throw new fe("options must be an object", fe.ERR_BAD_OPTION_VALUE);
  const n = Object.keys(e);
  let i = n.length;
  for (; i-- > 0; ) {
    const o = n[i], a = r[o];
    if (a) {
      const u = e[o], c = u === void 0 || a(u, o, e);
      if (c !== !0)
        throw new fe("option " + o + " must be " + c, fe.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (t !== !0)
      throw new fe("Unknown option " + o, fe.ERR_BAD_OPTION);
  }
}
const Xl = {
  assertOptions: Bw,
  validators: Nf
}, fr = Xl.validators;
class $a {
  constructor(r) {
    this.defaults = r, this.interceptors = {
      request: new ch(),
      response: new ch()
    };
  }
  request(r, t) {
    typeof r == "string" ? (t = t || {}, t.url = r) : t = r || {}, t = Rn(this.defaults, t);
    const { transitional: n, paramsSerializer: i, headers: o } = t;
    n !== void 0 && Xl.assertOptions(n, {
      silentJSONParsing: fr.transitional(fr.boolean),
      forcedJSONParsing: fr.transitional(fr.boolean),
      clarifyTimeoutError: fr.transitional(fr.boolean)
    }, !1), i !== void 0 && Xl.assertOptions(i, {
      encode: fr.function,
      serialize: fr.function
    }, !0), t.method = (t.method || this.defaults.method || "get").toLowerCase();
    let a;
    a = o && M.merge(
      o.common,
      o[t.method]
    ), a && M.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (O) => {
        delete o[O];
      }
    ), t.headers = Xt.concat(a, o);
    const u = [];
    let c = !0;
    this.interceptors.request.forEach(function(S) {
      typeof S.runWhen == "function" && S.runWhen(t) === !1 || (c = c && S.synchronous, u.unshift(S.fulfilled, S.rejected));
    });
    const s = [];
    this.interceptors.response.forEach(function(S) {
      s.push(S.fulfilled, S.rejected);
    });
    let l, f = 0, y;
    if (!c) {
      const O = [dh.bind(this), void 0];
      for (O.unshift.apply(O, u), O.push.apply(O, s), y = O.length, l = Promise.resolve(t); f < y; )
        l = l.then(O[f++], O[f++]);
      return l;
    }
    y = u.length;
    let b = t;
    for (f = 0; f < y; ) {
      const O = u[f++], S = u[f++];
      try {
        b = O(b);
      } catch (P) {
        S.call(this, P);
        break;
      }
    }
    try {
      l = dh.call(this, b);
    } catch (O) {
      return Promise.reject(O);
    }
    for (f = 0, y = s.length; f < y; )
      l = l.then(s[f++], s[f++]);
    return l;
  }
  getUri(r) {
    r = Rn(this.defaults, r);
    const t = P_(r.baseURL, r.url);
    return w_(t, r.params, r.paramsSerializer);
  }
}
M.forEach(["delete", "get", "head", "options"], function(r) {
  $a.prototype[r] = function(t, n) {
    return this.request(Rn(n || {}, {
      method: r,
      url: t,
      data: (n || {}).data
    }));
  };
});
M.forEach(["post", "put", "patch"], function(r) {
  function t(n) {
    return function(o, a, u) {
      return this.request(Rn(u || {}, {
        method: r,
        headers: n ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: o,
        data: a
      }));
    };
  }
  $a.prototype[r] = t(), $a.prototype[r + "Form"] = t(!0);
});
const Pa = $a;
class Mf {
  constructor(r) {
    if (typeof r != "function")
      throw new TypeError("executor must be a function.");
    let t;
    this.promise = new Promise(function(o) {
      t = o;
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
    }, r(function(o, a, u) {
      n.reason || (n.reason = new zi(o, a, u), t(n.reason));
    });
  }
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  subscribe(r) {
    if (this.reason) {
      r(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(r) : this._listeners = [r];
  }
  unsubscribe(r) {
    if (!this._listeners)
      return;
    const t = this._listeners.indexOf(r);
    t !== -1 && this._listeners.splice(t, 1);
  }
  static source() {
    let r;
    return {
      token: new Mf(function(i) {
        r = i;
      }),
      cancel: r
    };
  }
}
const Ww = Mf;
function Vw(e) {
  return function(t) {
    return e.apply(null, t);
  };
}
function qw(e) {
  return M.isObject(e) && e.isAxiosError === !0;
}
const Jl = {
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
Object.entries(Jl).forEach(([e, r]) => {
  Jl[r] = e;
});
const Hw = Jl;
function A_(e) {
  const r = new Pa(e), t = c_(Pa.prototype.request, r);
  return M.extend(t, Pa.prototype, r, { allOwnKeys: !0 }), M.extend(t, r, null, { allOwnKeys: !0 }), t.create = function(i) {
    return A_(Rn(e, i));
  }, t;
}
const He = A_(jf);
He.Axios = Pa;
He.CanceledError = zi;
He.CancelToken = Ww;
He.isCancel = T_;
He.VERSION = I_;
He.toFormData = Ja;
He.AxiosError = fe;
He.Cancel = He.CanceledError;
He.all = function(r) {
  return Promise.all(r);
};
He.spread = Vw;
He.isAxiosError = qw;
He.mergeConfig = Rn;
He.AxiosHeaders = Xt;
He.formToJSON = (e) => S_(M.isHTMLForm(e) ? new FormData(e) : e);
He.HttpStatusCode = Hw;
He.default = He;
const zw = He;
var Yw = Li;
Li.flatten = Li;
Li.unflatten = $_;
function R_(e) {
  return e && e.constructor && typeof e.constructor.isBuffer == "function" && e.constructor.isBuffer(e);
}
function C_(e) {
  return e;
}
function Li(e, r) {
  r = r || {};
  const t = r.delimiter || ".", n = r.maxDepth, i = r.transformKey || C_, o = {};
  function a(u, c, s) {
    s = s || 1, Object.keys(u).forEach(function(l) {
      const f = u[l], y = r.safe && Array.isArray(f), b = Object.prototype.toString.call(f), O = R_(f), S = b === "[object Object]" || b === "[object Array]", P = c ? c + t + i(l) : i(l);
      if (!y && !O && S && Object.keys(f).length && (!r.maxDepth || s < n))
        return a(f, P, s + 1);
      o[P] = f;
    });
  }
  return a(e), o;
}
function $_(e, r) {
  r = r || {};
  const t = r.delimiter || ".", n = r.overwrite || !1, i = r.transformKey || C_, o = {};
  if (R_(e) || Object.prototype.toString.call(e) !== "[object Object]")
    return e;
  function a(s) {
    const l = Number(s);
    return isNaN(l) || s.indexOf(".") !== -1 || r.object ? s : l;
  }
  function u(s, l, f) {
    return Object.keys(f).reduce(function(y, b) {
      return y[s + t + b] = f[b], y;
    }, l);
  }
  function c(s) {
    const l = Object.prototype.toString.call(s), f = l === "[object Array]", y = l === "[object Object]";
    if (s) {
      if (f)
        return !s.length;
      if (y)
        return !Object.keys(s).length;
    } else
      return !0;
  }
  return e = Object.keys(e).reduce(function(s, l) {
    const f = Object.prototype.toString.call(e[l]);
    return !(f === "[object Object]" || f === "[object Array]") || c(e[l]) ? (s[l] = e[l], s) : u(
      l,
      s,
      Li(e[l], r)
    );
  }, {}), Object.keys(e).forEach(function(s) {
    const l = s.split(t).map(i);
    let f = a(l.shift()), y = a(l[0]), b = o;
    for (; y !== void 0; ) {
      if (f === "__proto__")
        return;
      const O = Object.prototype.toString.call(b[f]), S = O === "[object Object]" || O === "[object Array]";
      if (!n && !S && typeof b[f] < "u")
        return;
      (n && !S || !n && b[f] == null) && (b[f] = typeof y == "number" && !r.object ? [] : {}), b = b[f], l.length > 0 && (f = a(l.shift()), y = a(l[0]));
    }
    b[f] = $_(e[s], r);
  }), o;
}
const ja = zw.create({
  baseURL: "https://socialtech.myjetbrains.com/api/",
  headers: {
    Authorization: "Bearer perm:YWxla3NhbmRyLm15a3VseWNo.NjEtMzY=.3YAXZtLSVD7SLVpr9C4MfcIQXDkjFM"
  }
});
var kf = /* @__PURE__ */ ((e) => (e.Subtask = "Subtask", e.Duplicate = "Duplicate", e.Depend = "Depend", e.Relates = "Relates", e))(kf || {});
function j_({ issues: e, isAlreadyLoaded: r, addRelation: t }) {
  const n = r ?? ((i) => !1);
  return e.flatMap((i) => {
    const o = Gw(i);
    return o && o.length > 0 ? (o.forEach((a) => t({
      from: i.id,
      to: a,
      type: kf.Subtask
    })), o.filter((a) => !n(a))) : [];
  });
}
function Gw(e) {
  return e.links.filter((r) => r.linkType.name === kf.Subtask && r.direction === "OUTWARD").flatMap((r) => r.issues).map((r) => r.id);
}
const Kw = "customFields($type,name,value($type,archived,avatarUrl,buildIntegration,buildLink,color(background,id),description,fullName,id,isResolved,localizedName,login,markdownText,minutes,name,presentation,ringId,text))", N_ = `fields=id,idReadable,summary,description,reporter(login),links(id,direction,linkType(name),issues(id)),tags(name),${Kw}`;
async function Zw(e) {
  let r = e.ids;
  const { maxDepthLevel: t } = e;
  let n = 0;
  for (; r.length > 0 && (!t || n++ < t); )
    r = await Qw({
      ...e,
      ids: r
    });
}
async function Qw({
  ids: e,
  onLoadedIssue: r,
  isAlreadyLoaded: t,
  addRelation: n
}) {
  const i = (await ja.post(
    `issuesGetter?${N_}`,
    e.map((o) => ({ id: o }))
  )).data;
  return i.forEach((o) => r(o)), j_({
    issues: i,
    isAlreadyLoaded: t,
    addRelation: n
  });
}
function Xw(e) {
  Jw(e), eE(e);
}
function Jw({ issue: e, addNode: r, addRelation: t }) {
  var n;
  (n = e.tags) == null || n.forEach((i) => {
    r("tag", {
      id: i.name,
      ...i
    }), t({
      toNode: "tag",
      to: i.name,
      fromNode: "issue",
      from: e.id,
      type: "tag"
    });
  });
}
function eE({ issue: e, addNode: r, addRelation: t }) {
  var n;
  const i = (n = e.customFields) == null ? void 0 : n.find((o) => o.name === "Sprint");
  i && Array.isArray(i.value) && i.value.forEach((o) => {
    r("sprint", {
      id: o.id,
      name: o.name
    }), t({
      toNode: "sprint",
      to: o.id,
      fromNode: "issue",
      from: e.id,
      type: "sprint"
    });
  });
}
function tE(e) {
  var r, t, n, i, o, a, u, c, s, l, f;
  return {
    storyPoints: (t = (r = e.customFields) == null ? void 0 : r.find((y) => y.name === "Story points")) == null ? void 0 : t.value,
    state: (o = (i = (n = e.customFields) == null ? void 0 : n.find((y) => y.name === "State")) == null ? void 0 : i.value) == null ? void 0 : o.name,
    source: (c = (u = (a = e.customFields) == null ? void 0 : a.find((y) => y.name === "Source")) == null ? void 0 : u.value) == null ? void 0 : c.name,
    priority: (f = (l = (s = e.customFields) == null ? void 0 : s.find((y) => y.name === "Priority")) == null ? void 0 : l.value) == null ? void 0 : f.name
  };
}
function rE() {
  const e = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map(), t = [], n = (o) => t.push(o), i = (o, a) => {
    r.has(o) || r.set(o, /* @__PURE__ */ new Map());
    const u = r.get(o);
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
          ...tE(o)
        };
        e.set(o.id, a), Xw({
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
      return M_(e);
    },
    getRelations() {
      return t;
    },
    getNodes() {
      return nE(r);
    }
  };
}
function nE(e) {
  return Array.from(e).map(([r, t]) => [r, M_(t)]);
}
function M_(e) {
  return Array.from(e, ([r, t]) => t);
}
async function iE({ query: e, maxDepthLevel: r }) {
  const t = rE(), n = await ja.get(
    `issues?${N_}&query=${encodeURI(e)}`
  );
  return n.data.forEach((i) => t.addIssue(i)), await Zw({
    ids: j_({
      issues: n.data,
      addRelation: t.addIssueRelation
    }),
    isAlreadyLoaded: t.isAlreadyLoaded,
    onLoadedIssue: t.addIssue,
    addRelation: t.addIssueRelation,
    maxDepthLevel: r
  }), {
    issues: t.getIssues(),
    relations: t.getRelations(),
    nodes: t.getNodes()
  };
}
async function oE(e) {
  return iE(e);
}
async function aE({ addNodes: e, addRelations: r, config: t }) {
  ja.defaults.baseURL = t.url, ja.defaults.headers.Authorization = `Bearer ${t.token}`;
  for await (const n of t.issueQueries) {
    const { issues: i, relations: o, nodes: a } = await oE({
      query: n,
      maxDepthLevel: t.issueLoadingMaxDepthLevel
    });
    await e("issue", i.map((u) => Yw.flatten(u)));
    for await (const [u, c] of a)
      await e(u, c);
    await r(o);
  }
}
const uE = {
  name: "youtrack-connector",
  connect: aE
};
var h = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function sE(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function cE(e) {
  var r = e.default;
  if (typeof r == "function") {
    var t = function() {
      return r.apply(this, arguments);
    };
    t.prototype = r.prototype;
  } else
    t = {};
  return Object.defineProperty(t, "__esModule", { value: !0 }), Object.keys(e).forEach(function(n) {
    var i = Object.getOwnPropertyDescriptor(e, n);
    Object.defineProperty(t, n, i.get ? i : {
      enumerable: !0,
      get: function() {
        return e[n];
      }
    });
  }), t;
}
var k_ = {}, Jt = {}, te = {}, Ee = {}, lE = h && h.__extends || function() {
  var e = function(r, t) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var o in i)
        Object.prototype.hasOwnProperty.call(i, o) && (n[o] = i[o]);
    }, e(r, t);
  };
  return function(r, t) {
    if (typeof t != "function" && t !== null)
      throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
    e(r, t);
    function n() {
      this.constructor = r;
    }
    r.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}();
Object.defineProperty(Ee, "__esModule", { value: !0 });
Ee.PROTOCOL_ERROR = Ee.SESSION_EXPIRED = Ee.SERVICE_UNAVAILABLE = Ee.Neo4jError = Ee.isRetriableError = Ee.newError = void 0;
var D_ = "ServiceUnavailable";
Ee.SERVICE_UNAVAILABLE = D_;
var U_ = "SessionExpired";
Ee.SESSION_EXPIRED = U_;
var fE = "ProtocolError";
Ee.PROTOCOL_ERROR = fE;
var dE = "N/A", Df = function(e) {
  lE(r, e);
  function r(t, n, i) {
    var o = e.call(this, t, i != null ? { cause: i } : void 0) || this;
    return o.constructor = r, o.__proto__ = r.prototype, o.code = n, o.name = "Neo4jError", o.retriable = pE(n), o;
  }
  return r.isRetriable = function(t) {
    return t != null && t instanceof r && t.retriable;
  }, r;
}(Error);
Ee.Neo4jError = Df;
function hE(e, r, t) {
  return new Df(e, r ?? dE, t);
}
Ee.newError = hE;
var vE = Df.isRetriable;
Ee.isRetriableError = vE;
function pE(e) {
  return e === D_ || e === U_ || yE(e) || _E(e);
}
function _E(e) {
  return (e == null ? void 0 : e.includes("TransientError")) === !0;
}
function yE(e) {
  return e === "Neo.ClientError.Security.AuthorizationExpired";
}
var Ke = {};
Object.defineProperty(Ke, "__esModule", { value: !0 });
Ke.toString = Ke.toNumber = Ke.inSafeRange = Ke.isInt = Ke.int = void 0;
var pi = Ee, ph = /* @__PURE__ */ new Map(), Or = function() {
  function e(r, t) {
    this.low = r ?? 0, this.high = t ?? 0;
  }
  return e.prototype.inSafeRange = function() {
    return this.greaterThanOrEqual(e.MIN_SAFE_VALUE) && this.lessThanOrEqual(e.MAX_SAFE_VALUE);
  }, e.prototype.toInt = function() {
    return this.low;
  }, e.prototype.toNumber = function() {
    return this.high * Fr + (this.low >>> 0);
  }, e.prototype.toBigInt = function() {
    if (this.isZero())
      return BigInt(0);
    if (this.isPositive())
      return BigInt(this.high >>> 0) * BigInt(Fr) + BigInt(this.low >>> 0);
    var r = this.negate();
    return BigInt(-1) * (BigInt(r.high >>> 0) * BigInt(Fr) + BigInt(r.low >>> 0));
  }, e.prototype.toNumberOrInfinity = function() {
    return this.lessThan(e.MIN_SAFE_VALUE) ? Number.NEGATIVE_INFINITY : this.greaterThan(e.MAX_SAFE_VALUE) ? Number.POSITIVE_INFINITY : this.toNumber();
  }, e.prototype.toString = function(r) {
    if (r = r ?? 10, r < 2 || r > 36)
      throw RangeError("radix out of range: " + r.toString());
    if (this.isZero())
      return "0";
    var t;
    if (this.isNegative())
      if (this.equals(e.MIN_VALUE)) {
        var n = e.fromNumber(r), i = this.div(n);
        return t = i.multiply(n).subtract(this), i.toString(r) + t.toInt().toString(r);
      } else
        return "-" + this.negate().toString(r);
    var o = e.fromNumber(Math.pow(r, 6));
    t = this;
    for (var a = ""; ; ) {
      var u = t.div(o), c = t.subtract(u.multiply(o)).toInt() >>> 0, s = c.toString(r);
      if (t = u, t.isZero())
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
    var r = this.high !== 0 ? this.high : this.low, t = 0;
    for (t = 31; t > 0 && (r & 1 << t) === 0; t--)
      ;
    return this.high !== 0 ? t + 33 : t + 1;
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
  }, e.prototype.equals = function(r) {
    var t = e.fromValue(r);
    return this.high === t.high && this.low === t.low;
  }, e.prototype.notEquals = function(r) {
    return !this.equals(r);
  }, e.prototype.lessThan = function(r) {
    return this.compare(r) < 0;
  }, e.prototype.lessThanOrEqual = function(r) {
    return this.compare(r) <= 0;
  }, e.prototype.greaterThan = function(r) {
    return this.compare(r) > 0;
  }, e.prototype.greaterThanOrEqual = function(r) {
    return this.compare(r) >= 0;
  }, e.prototype.compare = function(r) {
    var t = e.fromValue(r);
    if (this.equals(t))
      return 0;
    var n = this.isNegative(), i = t.isNegative();
    return n && !i ? -1 : !n && i ? 1 : this.subtract(t).isNegative() ? -1 : 1;
  }, e.prototype.negate = function() {
    return this.equals(e.MIN_VALUE) ? e.MIN_VALUE : this.not().add(e.ONE);
  }, e.prototype.add = function(r) {
    var t = e.fromValue(r), n = this.high >>> 16, i = this.high & 65535, o = this.low >>> 16, a = this.low & 65535, u = t.high >>> 16, c = t.high & 65535, s = t.low >>> 16, l = t.low & 65535, f = 0, y = 0, b = 0, O = 0;
    return O += a + l, b += O >>> 16, O &= 65535, b += o + s, y += b >>> 16, b &= 65535, y += i + c, f += y >>> 16, y &= 65535, f += n + u, f &= 65535, e.fromBits(b << 16 | O, f << 16 | y);
  }, e.prototype.subtract = function(r) {
    var t = e.fromValue(r);
    return this.add(t.negate());
  }, e.prototype.multiply = function(r) {
    if (this.isZero())
      return e.ZERO;
    var t = e.fromValue(r);
    if (t.isZero())
      return e.ZERO;
    if (this.equals(e.MIN_VALUE))
      return t.isOdd() ? e.MIN_VALUE : e.ZERO;
    if (t.equals(e.MIN_VALUE))
      return this.isOdd() ? e.MIN_VALUE : e.ZERO;
    if (this.isNegative())
      return t.isNegative() ? this.negate().multiply(t.negate()) : this.negate().multiply(t).negate();
    if (t.isNegative())
      return this.multiply(t.negate()).negate();
    if (this.lessThan(mh) && t.lessThan(mh))
      return e.fromNumber(this.toNumber() * t.toNumber());
    var n = this.high >>> 16, i = this.high & 65535, o = this.low >>> 16, a = this.low & 65535, u = t.high >>> 16, c = t.high & 65535, s = t.low >>> 16, l = t.low & 65535, f = 0, y = 0, b = 0, O = 0;
    return O += a * l, b += O >>> 16, O &= 65535, b += o * l, y += b >>> 16, b &= 65535, b += a * s, y += b >>> 16, b &= 65535, y += i * l, f += y >>> 16, y &= 65535, y += o * s, f += y >>> 16, y &= 65535, y += a * c, f += y >>> 16, y &= 65535, f += n * l + i * s + o * c + a * u, f &= 65535, e.fromBits(b << 16 | O, f << 16 | y);
  }, e.prototype.div = function(r) {
    var t = e.fromValue(r);
    if (t.isZero())
      throw (0, pi.newError)("division by zero");
    if (this.isZero())
      return e.ZERO;
    var n, i, o;
    if (this.equals(e.MIN_VALUE)) {
      if (t.equals(e.ONE) || t.equals(e.NEG_ONE))
        return e.MIN_VALUE;
      if (t.equals(e.MIN_VALUE))
        return e.ONE;
      var a = this.shiftRight(1);
      return n = a.div(t).shiftLeft(1), n.equals(e.ZERO) ? t.isNegative() ? e.ONE : e.NEG_ONE : (i = this.subtract(t.multiply(n)), o = n.add(i.div(t)), o);
    } else if (t.equals(e.MIN_VALUE))
      return e.ZERO;
    if (this.isNegative())
      return t.isNegative() ? this.negate().div(t.negate()) : this.negate().div(t).negate();
    if (t.isNegative())
      return this.div(t.negate()).negate();
    for (o = e.ZERO, i = this; i.greaterThanOrEqual(t); ) {
      n = Math.max(1, Math.floor(i.toNumber() / t.toNumber()));
      for (var u = Math.ceil(Math.log(n) / Math.LN2), c = u <= 48 ? 1 : Math.pow(2, u - 48), s = e.fromNumber(n), l = s.multiply(t); l.isNegative() || l.greaterThan(i); )
        n -= c, s = e.fromNumber(n), l = s.multiply(t);
      s.isZero() && (s = e.ONE), o = o.add(s), i = i.subtract(l);
    }
    return o;
  }, e.prototype.modulo = function(r) {
    var t = e.fromValue(r);
    return this.subtract(this.div(t).multiply(t));
  }, e.prototype.not = function() {
    return e.fromBits(~this.low, ~this.high);
  }, e.prototype.and = function(r) {
    var t = e.fromValue(r);
    return e.fromBits(this.low & t.low, this.high & t.high);
  }, e.prototype.or = function(r) {
    var t = e.fromValue(r);
    return e.fromBits(this.low | t.low, this.high | t.high);
  }, e.prototype.xor = function(r) {
    var t = e.fromValue(r);
    return e.fromBits(this.low ^ t.low, this.high ^ t.high);
  }, e.prototype.shiftLeft = function(r) {
    var t = e.toNumber(r);
    return (t &= 63) === 0 ? e.ZERO : t < 32 ? e.fromBits(this.low << t, this.high << t | this.low >>> 32 - t) : e.fromBits(0, this.low << t - 32);
  }, e.prototype.shiftRight = function(r) {
    var t = e.toNumber(r);
    return (t &= 63) === 0 ? e.ZERO : r < 32 ? e.fromBits(this.low >>> t | this.high << 32 - t, this.high >> t) : e.fromBits(this.high >> t - 32, this.high >= 0 ? 0 : -1);
  }, e.isInteger = function(r) {
    return (r == null ? void 0 : r.__isInteger__) === !0;
  }, e.fromInt = function(r) {
    var t;
    if (r = r | 0, r >= -128 && r < 128 && (t = ph.get(r), t != null))
      return t;
    var n = new e(r, r < 0 ? -1 : 0);
    return r >= -128 && r < 128 && ph.set(r, n), n;
  }, e.fromBits = function(r, t) {
    return new e(r, t);
  }, e.fromNumber = function(r) {
    return isNaN(r) || !isFinite(r) ? e.ZERO : r <= -yh ? e.MIN_VALUE : r + 1 >= yh ? e.MAX_VALUE : r < 0 ? e.fromNumber(-r).negate() : new e(r % Fr | 0, r / Fr | 0);
  }, e.fromString = function(r, t, n) {
    var i = n === void 0 ? {} : n, o = i.strictStringValidation;
    if (r.length === 0)
      throw (0, pi.newError)("number format error: empty string");
    if (r === "NaN" || r === "Infinity" || r === "+Infinity" || r === "-Infinity")
      return e.ZERO;
    if (t = t ?? 10, t < 2 || t > 36)
      throw (0, pi.newError)("radix out of range: " + t.toString());
    var a;
    if ((a = r.indexOf("-")) > 0)
      throw (0, pi.newError)('number format error: interior "-" character: ' + r);
    if (a === 0)
      return e.fromString(r.substring(1), t).negate();
    for (var u = e.fromNumber(Math.pow(t, 8)), c = e.ZERO, s = 0; s < r.length; s += 8) {
      var l = Math.min(8, r.length - s), f = r.substring(s, s + l), y = parseInt(f, t);
      if (o === !0 && !bE(f, y, t))
        throw (0, pi.newError)('number format error: "'.concat(f, '" is NaN in radix ').concat(t, ": ").concat(r));
      if (l < 8) {
        var b = e.fromNumber(Math.pow(t, l));
        c = c.multiply(b).add(e.fromNumber(y));
      } else
        c = c.multiply(u), c = c.add(e.fromNumber(y));
    }
    return c;
  }, e.fromValue = function(r, t) {
    return t === void 0 && (t = {}), r instanceof e ? r : typeof r == "number" ? e.fromNumber(r) : typeof r == "string" ? e.fromString(r, void 0, t) : typeof r == "bigint" ? e.fromString(r.toString()) : new e(r.low, r.high);
  }, e.toNumber = function(r) {
    switch (typeof r) {
      case "number":
        return r;
      case "bigint":
        return Number(r);
      default:
        return e.fromValue(r).toNumber();
    }
  }, e.toString = function(r, t) {
    return e.fromValue(r).toString(t);
  }, e.inSafeRange = function(r) {
    return e.fromValue(r).inSafeRange();
  }, e.ZERO = e.fromInt(0), e.ONE = e.fromInt(1), e.NEG_ONE = e.fromInt(-1), e.MAX_VALUE = e.fromBits(-1, 2147483647), e.MIN_VALUE = e.fromBits(0, -2147483648), e.MIN_SAFE_VALUE = e.fromBits(1, -2097152), e.MAX_SAFE_VALUE = e.fromBits(-1, 2097151), e.__isInteger__ = !0, e;
}();
function mE(e, r, t) {
  var n = e.toString(r), i = Math.max(t - n.length, 0), o = "0".repeat(i);
  return "".concat(o).concat(n);
}
function bE(e, r, t) {
  return !Number.isNaN(e) && !Number.isNaN(r) && mE(r, t, e.length) === e.toLowerCase();
}
Object.defineProperty(Or.prototype, "__isInteger__", {
  value: !0,
  enumerable: !1,
  configurable: !1
});
var _h = 1 << 16, gE = 1 << 24, Fr = _h * _h, OE = Fr * Fr, yh = OE / 2, mh = Or.fromInt(gE), wE = Or.fromValue;
Ke.int = wE;
var EE = Or.isInteger;
Ke.isInt = EE;
var SE = Or.inSafeRange;
Ke.inSafeRange = SE;
var TE = Or.toNumber;
Ke.toNumber = TE;
var PE = Or.toString;
Ke.toString = PE;
Ke.default = Or;
var Te = {}, Uf = {}, ce = {}, xn = {}, er = {};
Object.defineProperty(er, "__esModule", { value: !0 });
er.getBrokenObjectReason = er.isBrokenObject = er.createBrokenObject = void 0;
var L_ = "__isBrokenObject__", F_ = "__reason__";
function IE(e, r) {
  r === void 0 && (r = {});
  var t = function() {
    throw e;
  };
  return new Proxy(r, {
    get: function(n, i) {
      if (i === L_)
        return !0;
      if (i === F_)
        return e;
      if (i === "toJSON")
        return;
      t();
    },
    set: t,
    apply: t,
    construct: t,
    defineProperty: t,
    deleteProperty: t,
    getOwnPropertyDescriptor: t,
    getPrototypeOf: t,
    has: t,
    isExtensible: t,
    ownKeys: t,
    preventExtensions: t,
    setPrototypeOf: t
  });
}
er.createBrokenObject = IE;
function AE(e) {
  return e !== null && typeof e == "object" && e[L_] === !0;
}
er.isBrokenObject = AE;
function RE(e) {
  return e[F_];
}
er.getBrokenObjectReason = RE;
Object.defineProperty(xn, "__esModule", { value: !0 });
xn.stringify = void 0;
var bh = er;
function CE(e) {
  return JSON.stringify(e, function(r, t) {
    return (0, bh.isBrokenObject)(t) ? {
      __isBrokenObject__: !0,
      __reason__: (0, bh.getBrokenObjectReason)(t)
    } : typeof t == "bigint" ? "".concat(t, "n") : t;
  });
}
xn.stringify = CE;
Object.defineProperty(ce, "__esModule", { value: !0 });
ce.ENCRYPTION_OFF = ce.ENCRYPTION_ON = ce.validateQueryAndParameters = ce.assertValidDate = ce.assertNumberOrInteger = ce.assertNumber = ce.assertString = ce.assertObject = ce.isString = ce.isObject = ce.isEmptyObjectOrNull = void 0;
var $E = Ke, Vr = xn, jE = "ENCRYPTION_ON";
ce.ENCRYPTION_ON = jE;
var NE = "ENCRYPTION_OFF";
ce.ENCRYPTION_OFF = NE;
function ME(e) {
  if (e === null)
    return !0;
  if (!ru(e))
    return !1;
  for (var r in e)
    if (e[r] !== void 0)
      return !1;
  return !0;
}
ce.isEmptyObjectOrNull = ME;
function ru(e) {
  return typeof e == "object" && !Array.isArray(e) && e !== null;
}
ce.isObject = ru;
function kE(e, r, t) {
  var n, i, o = "", a = r ?? {}, u = (n = t == null ? void 0 : t.skipAsserts) !== null && n !== void 0 ? n : !1;
  return typeof e == "string" ? o = e : e instanceof String ? o = e.toString() : typeof e == "object" && e.text != null && (o = e.text, a = (i = e.parameters) !== null && i !== void 0 ? i : {}), u || (xE(o), BE(a)), { validatedQuery: o, params: a };
}
ce.validateQueryAndParameters = kE;
function DE(e, r) {
  if (!ru(e))
    throw new TypeError(r + " expected to be an object but was: " + (0, Vr.stringify)(e));
  return e;
}
ce.assertObject = DE;
function x_(e, r) {
  if (!B_(e))
    throw new TypeError((0, Vr.stringify)(r) + " expected to be string but was: " + (0, Vr.stringify)(e));
  return e;
}
ce.assertString = x_;
function UE(e, r) {
  if (typeof e != "number")
    throw new TypeError(r + " expected to be a number but was: " + (0, Vr.stringify)(e));
  return e;
}
ce.assertNumber = UE;
function LE(e, r) {
  if (typeof e != "number" && typeof e != "bigint" && !(0, $E.isInt)(e))
    throw new TypeError(r + " expected to be either a number or an Integer object but was: " + (0, Vr.stringify)(e));
  return e;
}
ce.assertNumberOrInteger = LE;
function FE(e, r) {
  if (Object.prototype.toString.call(e) !== "[object Date]")
    throw new TypeError(r + " expected to be a standard JavaScript Date but was: " + (0, Vr.stringify)(e));
  if (Number.isNaN(e.getTime()))
    throw new TypeError(r + " expected to be valid JavaScript Date but its time was NaN: " + (0, Vr.stringify)(e));
  return e;
}
ce.assertValidDate = FE;
function xE(e) {
  if (x_(e, "Cypher query"), e.trim().length === 0)
    throw new TypeError("Cypher query is expected to be a non-empty string.");
}
function BE(e) {
  if (!ru(e)) {
    var r = e.constructor != null ? " " + e.constructor.name : "";
    throw new TypeError("Query parameters are expected to either be undefined/null or an object, given:".concat(r, " ").concat(JSON.stringify(e)));
  }
}
function B_(e) {
  return Object.prototype.toString.call(e) === "[object String]";
}
ce.isString = B_;
(function(e) {
  var r = h && h.__createBinding || (Object.create ? function(A, D, V, Z) {
    Z === void 0 && (Z = V);
    var X = Object.getOwnPropertyDescriptor(D, V);
    (!X || ("get" in X ? !D.__esModule : X.writable || X.configurable)) && (X = { enumerable: !0, get: function() {
      return D[V];
    } }), Object.defineProperty(A, Z, X);
  } : function(A, D, V, Z) {
    Z === void 0 && (Z = V), A[Z] = D[V];
  }), t = h && h.__setModuleDefault || (Object.create ? function(A, D) {
    Object.defineProperty(A, "default", { enumerable: !0, value: D });
  } : function(A, D) {
    A.default = D;
  }), n = h && h.__importStar || function(A) {
    if (A && A.__esModule)
      return A;
    var D = {};
    if (A != null)
      for (var V in A)
        V !== "default" && Object.prototype.hasOwnProperty.call(A, V) && r(D, A, V);
    return t(D, A), D;
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.floorMod = e.floorDiv = e.assertValidZoneId = e.assertValidNanosecond = e.assertValidSecond = e.assertValidMinute = e.assertValidHour = e.assertValidDay = e.assertValidMonth = e.assertValidYear = e.timeZoneOffsetInSeconds = e.totalNanoseconds = e.newDate = e.toStandardDate = e.isoStringToStandardDate = e.dateToIsoString = e.timeZoneOffsetToIsoString = e.timeToIsoString = e.durationToIsoString = e.dateToEpochDay = e.localDateTimeToEpochSecond = e.localTimeToNanoOfDay = e.normalizeNanosecondsForDuration = e.normalizeSecondsForDuration = e.SECONDS_PER_DAY = e.DAYS_PER_400_YEAR_CYCLE = e.DAYS_0000_TO_1970 = e.NANOS_PER_HOUR = e.NANOS_PER_MINUTE = e.NANOS_PER_MILLISECOND = e.NANOS_PER_SECOND = e.SECONDS_PER_HOUR = e.SECONDS_PER_MINUTE = e.MINUTES_PER_HOUR = e.NANOSECOND_OF_SECOND_RANGE = e.SECOND_OF_MINUTE_RANGE = e.MINUTE_OF_HOUR_RANGE = e.HOUR_OF_DAY_RANGE = e.DAY_OF_MONTH_RANGE = e.MONTH_OF_YEAR_RANGE = e.YEAR_RANGE = void 0;
  var i = n(Ke), o = Ee, a = ce, u = function() {
    function A(D, V) {
      this._minNumber = D, this._maxNumber = V, this._minInteger = (0, i.int)(D), this._maxInteger = (0, i.int)(V);
    }
    return A.prototype.contains = function(D) {
      if ((0, i.isInt)(D) && D instanceof i.default)
        return D.greaterThanOrEqual(this._minInteger) && D.lessThanOrEqual(this._maxInteger);
      if (typeof D == "bigint") {
        var V = (0, i.int)(D);
        return V.greaterThanOrEqual(this._minInteger) && V.lessThanOrEqual(this._maxInteger);
      } else
        return D >= this._minNumber && D <= this._maxNumber;
    }, A.prototype.toString = function() {
      return "[".concat(this._minNumber, ", ").concat(this._maxNumber, "]");
    }, A;
  }();
  e.YEAR_RANGE = new u(-999999999, 999999999), e.MONTH_OF_YEAR_RANGE = new u(1, 12), e.DAY_OF_MONTH_RANGE = new u(1, 31), e.HOUR_OF_DAY_RANGE = new u(0, 23), e.MINUTE_OF_HOUR_RANGE = new u(0, 59), e.SECOND_OF_MINUTE_RANGE = new u(0, 59), e.NANOSECOND_OF_SECOND_RANGE = new u(0, 999999999), e.MINUTES_PER_HOUR = 60, e.SECONDS_PER_MINUTE = 60, e.SECONDS_PER_HOUR = e.SECONDS_PER_MINUTE * e.MINUTES_PER_HOUR, e.NANOS_PER_SECOND = 1e9, e.NANOS_PER_MILLISECOND = 1e6, e.NANOS_PER_MINUTE = e.NANOS_PER_SECOND * e.SECONDS_PER_MINUTE, e.NANOS_PER_HOUR = e.NANOS_PER_MINUTE * e.MINUTES_PER_HOUR, e.DAYS_0000_TO_1970 = 719528, e.DAYS_PER_400_YEAR_CYCLE = 146097, e.SECONDS_PER_DAY = 86400;
  function c(A, D) {
    return (0, i.int)(A).add(ne(D, e.NANOS_PER_SECOND));
  }
  e.normalizeSecondsForDuration = c;
  function s(A) {
    return G(A, e.NANOS_PER_SECOND);
  }
  e.normalizeNanosecondsForDuration = s;
  function l(A, D, V, Z) {
    A = (0, i.int)(A), D = (0, i.int)(D), V = (0, i.int)(V), Z = (0, i.int)(Z);
    var X = A.multiply(e.NANOS_PER_HOUR);
    return X = X.add(D.multiply(e.NANOS_PER_MINUTE)), X = X.add(V.multiply(e.NANOS_PER_SECOND)), X.add(Z);
  }
  e.localTimeToNanoOfDay = l;
  function f(A, D, V, Z, X, ke, ut) {
    var Mt = y(A, D, V), gt = q(Z, X, ke);
    return Mt.multiply(e.SECONDS_PER_DAY).add(gt);
  }
  e.localDateTimeToEpochSecond = f;
  function y(A, D, V) {
    A = (0, i.int)(A), D = (0, i.int)(D), V = (0, i.int)(V);
    var Z = A.multiply(365);
    return A.greaterThanOrEqual(0) ? Z = Z.add(A.add(3).div(4).subtract(A.add(99).div(100)).add(A.add(399).div(400))) : Z = Z.subtract(A.div(-4).subtract(A.div(-100)).add(A.div(-400))), Z = Z.add(D.multiply(367).subtract(362).div(12)), Z = Z.add(V.subtract(1)), D.greaterThan(2) && (Z = Z.subtract(1), re(A) || (Z = Z.subtract(1))), Z.subtract(e.DAYS_0000_TO_1970);
  }
  e.dateToEpochDay = y;
  function b(A, D, V, Z) {
    var X = x(A), ke = x(D), ut = ve(V, Z);
    return "P".concat(X, "M").concat(ke, "DT").concat(ut, "S");
  }
  e.durationToIsoString = b;
  function O(A, D, V, Z) {
    var X = x(A, 2), ke = x(D, 2), ut = x(V, 2), Mt = We(Z);
    return "".concat(X, ":").concat(ke, ":").concat(ut).concat(Mt);
  }
  e.timeToIsoString = O;
  function S(A) {
    if (A = (0, i.int)(A), A.equals(0))
      return "Z";
    var D = A.isNegative();
    D && (A = A.multiply(-1));
    var V = D ? "-" : "+", Z = x(A.div(e.SECONDS_PER_HOUR), 2), X = x(A.div(e.SECONDS_PER_MINUTE).modulo(e.MINUTES_PER_HOUR), 2), ke = A.modulo(e.SECONDS_PER_MINUTE), ut = ke.equals(0) ? null : x(ke, 2);
    return ut != null ? "".concat(V).concat(Z, ":").concat(X, ":").concat(ut) : "".concat(V).concat(Z, ":").concat(X);
  }
  e.timeZoneOffsetToIsoString = S;
  function P(A, D, V) {
    var Z = Q(A), X = x(D, 2), ke = x(V, 2);
    return "".concat(Z, "-").concat(X, "-").concat(ke);
  }
  e.dateToIsoString = P;
  function R(A) {
    return new Date(A);
  }
  e.isoStringToStandardDate = R;
  function $(A) {
    return new Date(A);
  }
  e.toStandardDate = $;
  function j(A) {
    return new Date(A);
  }
  e.newDate = j;
  function k(A, D) {
    D = D ?? 0;
    var V = A.getMilliseconds() * e.NANOS_PER_MILLISECOND;
    return Ie(D, V);
  }
  e.totalNanoseconds = k;
  function L(A) {
    var D = A.getSeconds() >= A.getUTCSeconds() ? A.getSeconds() - A.getUTCSeconds() : A.getSeconds() - A.getUTCSeconds() + 60, V = A.getTimezoneOffset();
    return V === 0 ? 0 + D : -1 * V * e.SECONDS_PER_MINUTE + D;
  }
  e.timeZoneOffsetInSeconds = L;
  function Y(A) {
    return he(A, e.YEAR_RANGE, "Year");
  }
  e.assertValidYear = Y;
  function ee(A) {
    return he(A, e.MONTH_OF_YEAR_RANGE, "Month");
  }
  e.assertValidMonth = ee;
  function le(A) {
    return he(A, e.DAY_OF_MONTH_RANGE, "Day");
  }
  e.assertValidDay = le;
  function me(A) {
    return he(A, e.HOUR_OF_DAY_RANGE, "Hour");
  }
  e.assertValidHour = me;
  function Me(A) {
    return he(A, e.MINUTE_OF_HOUR_RANGE, "Minute");
  }
  e.assertValidMinute = Me;
  function Pe(A) {
    return he(A, e.SECOND_OF_MINUTE_RANGE, "Second");
  }
  e.assertValidSecond = Pe;
  function Ue(A) {
    return he(A, e.NANOSECOND_OF_SECOND_RANGE, "Nanosecond");
  }
  e.assertValidNanosecond = Ue;
  function be(A, D) {
    try {
      Intl.DateTimeFormat(void 0, { timeZone: D });
    } catch {
      throw (0, o.newError)("".concat(A, ' is expected to be a valid ZoneId but was: "').concat(D, '"'));
    }
  }
  e.assertValidZoneId = be;
  function he(A, D, V) {
    if ((0, a.assertNumberOrInteger)(A, V), !D.contains(A))
      throw (0, o.newError)("".concat(V, " is expected to be in range ").concat(D.toString(), " but was: ").concat(A.toString()));
    return A;
  }
  function q(A, D, V) {
    A = (0, i.int)(A), D = (0, i.int)(D), V = (0, i.int)(V);
    var Z = A.multiply(e.SECONDS_PER_HOUR);
    return Z = Z.add(D.multiply(e.SECONDS_PER_MINUTE)), Z.add(V);
  }
  function re(A) {
    return A = (0, i.int)(A), A.modulo(4).equals(0) ? A.modulo(100).equals(0) ? !!A.modulo(400).equals(0) : !0 : !1;
  }
  function ne(A, D) {
    A = (0, i.int)(A), D = (0, i.int)(D);
    var V = A.div(D);
    return A.isPositive() !== D.isPositive() && V.multiply(D).notEquals(A) && (V = V.subtract(1)), V;
  }
  e.floorDiv = ne;
  function G(A, D) {
    return A = (0, i.int)(A), D = (0, i.int)(D), A.subtract(ne(A, D).multiply(D));
  }
  e.floorMod = G;
  function ve(A, D) {
    A = (0, i.int)(A), D = (0, i.int)(D);
    var V, Z, X = A.isNegative(), ke = D.greaterThan(0);
    return X && ke ? A.equals(-1) ? V = "-0" : V = A.add(1).toString() : V = A.toString(), ke && (X ? Z = We(D.negate().add(2 * e.NANOS_PER_SECOND).modulo(e.NANOS_PER_SECOND)) : Z = We(D.add(e.NANOS_PER_SECOND).modulo(e.NANOS_PER_SECOND))), Z != null ? V + Z : V;
  }
  function We(A) {
    return A = (0, i.int)(A), A.equals(0) ? "" : "." + x(A, 9);
  }
  function Q(A) {
    var D = (0, i.int)(A);
    return D.isNegative() || D.greaterThan(9999) ? x(D, 6, { usePositiveSign: !0 }) : x(D, 4);
  }
  function x(A, D, V) {
    A = (0, i.int)(A);
    var Z = A.isNegative();
    Z && (A = A.negate());
    var X = A.toString();
    if (D != null)
      for (; X.length < D; )
        X = "0" + X;
    return Z ? "-" + X : (V == null ? void 0 : V.usePositiveSign) === !0 ? "+" + X : X;
  }
  function Ie(A, D) {
    return A instanceof i.default ? A.add(D) : typeof A == "bigint" ? A + BigInt(D) : A + D;
  }
})(Uf);
var WE = h && h.__createBinding || (Object.create ? function(e, r, t, n) {
  n === void 0 && (n = t);
  var i = Object.getOwnPropertyDescriptor(r, t);
  (!i || ("get" in i ? !r.__esModule : i.writable || i.configurable)) && (i = { enumerable: !0, get: function() {
    return r[t];
  } }), Object.defineProperty(e, n, i);
} : function(e, r, t, n) {
  n === void 0 && (n = t), e[n] = r[t];
}), VE = h && h.__setModuleDefault || (Object.create ? function(e, r) {
  Object.defineProperty(e, "default", { enumerable: !0, value: r });
} : function(e, r) {
  e.default = r;
}), W_ = h && h.__importStar || function(e) {
  if (e && e.__esModule)
    return e;
  var r = {};
  if (e != null)
    for (var t in e)
      t !== "default" && Object.prototype.hasOwnProperty.call(e, t) && WE(r, e, t);
  return VE(r, e), r;
}, qE = h && h.__read || function(e, r) {
  var t = typeof Symbol == "function" && e[Symbol.iterator];
  if (!t)
    return e;
  var n = t.call(e), i, o = [], a;
  try {
    for (; (r === void 0 || r-- > 0) && !(i = n.next()).done; )
      o.push(i.value);
  } catch (u) {
    a = { error: u };
  } finally {
    try {
      i && !i.done && (t = n.return) && t.call(n);
    } finally {
      if (a)
        throw a.error;
    }
  }
  return o;
};
Object.defineProperty(Te, "__esModule", { value: !0 });
Te.isDateTime = Te.DateTime = Te.isLocalDateTime = Te.LocalDateTime = Te.isDate = Te.Date = Te.isTime = Te.Time = Te.isLocalTime = Te.LocalTime = Te.isDuration = Te.Duration = void 0;
var J = W_(Uf), Qt = ce, HE = Ee, Br = W_(Ke), Bn = {
  value: !0,
  enumerable: !1,
  configurable: !1,
  writable: !1
}, V_ = "__isDuration__", q_ = "__isLocalTime__", H_ = "__isTime__", z_ = "__isDate__", Y_ = "__isLocalDateTime__", G_ = "__isDateTime__", K_ = function() {
  function e(r, t, n, i) {
    this.months = (0, Qt.assertNumberOrInteger)(r, "Months"), this.days = (0, Qt.assertNumberOrInteger)(t, "Days"), (0, Qt.assertNumberOrInteger)(n, "Seconds"), (0, Qt.assertNumberOrInteger)(i, "Nanoseconds"), this.seconds = J.normalizeSecondsForDuration(n, i), this.nanoseconds = J.normalizeNanosecondsForDuration(i), Object.freeze(this);
  }
  return e.prototype.toString = function() {
    return J.durationToIsoString(this.months, this.days, this.seconds, this.nanoseconds);
  }, e;
}();
Te.Duration = K_;
Object.defineProperty(K_.prototype, V_, Bn);
function zE(e) {
  return Wn(e, V_);
}
Te.isDuration = zE;
var Z_ = function() {
  function e(r, t, n, i) {
    this.hour = J.assertValidHour(r), this.minute = J.assertValidMinute(t), this.second = J.assertValidSecond(n), this.nanosecond = J.assertValidNanosecond(i), Object.freeze(this);
  }
  return e.fromStandardDate = function(r, t) {
    Yi(r, t);
    var n = J.totalNanoseconds(r, t);
    return new e(r.getHours(), r.getMinutes(), r.getSeconds(), n instanceof Br.default ? n.toInt() : typeof n == "bigint" ? (0, Br.int)(n).toInt() : n);
  }, e.prototype.toString = function() {
    return J.timeToIsoString(this.hour, this.minute, this.second, this.nanosecond);
  }, e;
}();
Te.LocalTime = Z_;
Object.defineProperty(Z_.prototype, q_, Bn);
function YE(e) {
  return Wn(e, q_);
}
Te.isLocalTime = YE;
var Q_ = function() {
  function e(r, t, n, i, o) {
    this.hour = J.assertValidHour(r), this.minute = J.assertValidMinute(t), this.second = J.assertValidSecond(n), this.nanosecond = J.assertValidNanosecond(i), this.timeZoneOffsetSeconds = (0, Qt.assertNumberOrInteger)(o, "Time zone offset in seconds"), Object.freeze(this);
  }
  return e.fromStandardDate = function(r, t) {
    return Yi(r, t), new e(r.getHours(), r.getMinutes(), r.getSeconds(), (0, Br.toNumber)(J.totalNanoseconds(r, t)), J.timeZoneOffsetInSeconds(r));
  }, e.prototype.toString = function() {
    return J.timeToIsoString(this.hour, this.minute, this.second, this.nanosecond) + J.timeZoneOffsetToIsoString(this.timeZoneOffsetSeconds);
  }, e;
}();
Te.Time = Q_;
Object.defineProperty(Q_.prototype, H_, Bn);
function GE(e) {
  return Wn(e, H_);
}
Te.isTime = GE;
var X_ = function() {
  function e(r, t, n) {
    this.year = J.assertValidYear(r), this.month = J.assertValidMonth(t), this.day = J.assertValidDay(n), Object.freeze(this);
  }
  return e.fromStandardDate = function(r) {
    return Yi(r), new e(r.getFullYear(), r.getMonth() + 1, r.getDate());
  }, e.prototype.toStandardDate = function() {
    return J.isoStringToStandardDate(this.toString());
  }, e.prototype.toString = function() {
    return J.dateToIsoString(this.year, this.month, this.day);
  }, e;
}();
Te.Date = X_;
Object.defineProperty(X_.prototype, z_, Bn);
function KE(e) {
  return Wn(e, z_);
}
Te.isDate = KE;
var J_ = function() {
  function e(r, t, n, i, o, a, u) {
    this.year = J.assertValidYear(r), this.month = J.assertValidMonth(t), this.day = J.assertValidDay(n), this.hour = J.assertValidHour(i), this.minute = J.assertValidMinute(o), this.second = J.assertValidSecond(a), this.nanosecond = J.assertValidNanosecond(u), Object.freeze(this);
  }
  return e.fromStandardDate = function(r, t) {
    return Yi(r, t), new e(r.getFullYear(), r.getMonth() + 1, r.getDate(), r.getHours(), r.getMinutes(), r.getSeconds(), (0, Br.toNumber)(J.totalNanoseconds(r, t)));
  }, e.prototype.toStandardDate = function() {
    return J.isoStringToStandardDate(this.toString());
  }, e.prototype.toString = function() {
    return ty(this.year, this.month, this.day, this.hour, this.minute, this.second, this.nanosecond);
  }, e;
}();
Te.LocalDateTime = J_;
Object.defineProperty(J_.prototype, Y_, Bn);
function ZE(e) {
  return Wn(e, Y_);
}
Te.isLocalDateTime = ZE;
var ey = function() {
  function e(r, t, n, i, o, a, u, c, s) {
    this.year = J.assertValidYear(r), this.month = J.assertValidMonth(t), this.day = J.assertValidDay(n), this.hour = J.assertValidHour(i), this.minute = J.assertValidMinute(o), this.second = J.assertValidSecond(a), this.nanosecond = J.assertValidNanosecond(u);
    var l = qE(XE(c, s), 2), f = l[0], y = l[1];
    this.timeZoneOffsetSeconds = f, this.timeZoneId = y ?? void 0, Object.freeze(this);
  }
  return e.fromStandardDate = function(r, t) {
    return Yi(r, t), new e(r.getFullYear(), r.getMonth() + 1, r.getDate(), r.getHours(), r.getMinutes(), r.getSeconds(), (0, Br.toNumber)(J.totalNanoseconds(r, t)), J.timeZoneOffsetInSeconds(r), null);
  }, e.prototype.toStandardDate = function() {
    return J.toStandardDate(this._toUTC());
  }, e.prototype.toString = function() {
    var r, t = ty(this.year, this.month, this.day, this.hour, this.minute, this.second, this.nanosecond), n = this.timeZoneOffsetSeconds != null ? J.timeZoneOffsetToIsoString((r = this.timeZoneOffsetSeconds) !== null && r !== void 0 ? r : 0) : "", i = this.timeZoneId != null ? "[".concat(this.timeZoneId, "]") : "";
    return t + n + i;
  }, e.prototype._toUTC = function() {
    var r;
    if (this.timeZoneOffsetSeconds === void 0)
      throw new Error("Requires DateTime created with time zone offset");
    var t = J.localDateTimeToEpochSecond(this.year, this.month, this.day, this.hour, this.minute, this.second, this.nanosecond), n = t.subtract((r = this.timeZoneOffsetSeconds) !== null && r !== void 0 ? r : 0);
    return (0, Br.int)(n).multiply(1e3).add((0, Br.int)(this.nanosecond).div(1e6)).toNumber();
  }, e;
}();
Te.DateTime = ey;
Object.defineProperty(ey.prototype, G_, Bn);
function QE(e) {
  return Wn(e, G_);
}
Te.isDateTime = QE;
function Wn(e, r) {
  return e != null && e[r] === !0;
}
function ty(e, r, t, n, i, o, a) {
  return J.dateToIsoString(e, r, t) + "T" + J.timeToIsoString(n, i, o, a);
}
function XE(e, r) {
  var t = e != null, n = r != null && r !== "";
  if (!t && !n)
    throw (0, HE.newError)(
      "Unable to create DateTime without either time zone offset or id. Please specify either of them. Given offset: ".concat(e, " and id: ").concat(r)
    );
  var i = [void 0, void 0];
  return t && ((0, Qt.assertNumberOrInteger)(e, "Time zone offset in seconds"), i[0] = e), n && ((0, Qt.assertString)(r, "Time zone ID"), J.assertValidZoneId("Time zone ID", r), i[1] = r), i;
}
function Yi(e, r) {
  (0, Qt.assertValidDate)(e, "Standard date"), r != null && (0, Qt.assertNumberOrInteger)(r, "Nanosecond");
}
var Ne = {};
Object.defineProperty(Ne, "__esModule", { value: !0 });
Ne.isPathSegment = Ne.PathSegment = Ne.isPath = Ne.Path = Ne.isUnboundRelationship = Ne.UnboundRelationship = Ne.isRelationship = Ne.Relationship = Ne.isNode = Ne.Node = void 0;
var Lf = xn, Gi = {
  value: !0,
  enumerable: !1,
  configurable: !1,
  writable: !1
}, ry = "__isNode__", ny = "__isRelationship__", iy = "__isUnboundRelationship__", oy = "__isPath__", ay = "__isPathSegment__";
function Ki(e, r) {
  return e != null && e[r] === !0;
}
var uy = function() {
  function e(r, t, n, i) {
    this.identity = r, this.labels = t, this.properties = n, this.elementId = Ri(i, function() {
      return r.toString();
    });
  }
  return e.prototype.toString = function() {
    for (var r = "(" + this.elementId, t = 0; t < this.labels.length; t++)
      r += ":" + this.labels[t];
    var n = Object.keys(this.properties);
    if (n.length > 0) {
      r += " {";
      for (var t = 0; t < n.length; t++)
        t > 0 && (r += ","), r += n[t] + ":" + (0, Lf.stringify)(this.properties[n[t]]);
      r += "}";
    }
    return r += ")", r;
  }, e;
}();
Ne.Node = uy;
Object.defineProperty(uy.prototype, ry, Gi);
function JE(e) {
  return Ki(e, ry);
}
Ne.isNode = JE;
var Na = function() {
  function e(r, t, n, i, o, a, u, c) {
    this.identity = r, this.start = t, this.end = n, this.type = i, this.properties = o, this.elementId = Ri(a, function() {
      return r.toString();
    }), this.startNodeElementId = Ri(u, function() {
      return t.toString();
    }), this.endNodeElementId = Ri(c, function() {
      return n.toString();
    });
  }
  return e.prototype.toString = function() {
    var r = "(" + this.startNodeElementId + ")-[:" + this.type, t = Object.keys(this.properties);
    if (t.length > 0) {
      r += " {";
      for (var n = 0; n < t.length; n++)
        n > 0 && (r += ","), r += t[n] + ":" + (0, Lf.stringify)(this.properties[t[n]]);
      r += "}";
    }
    return r += "]->(" + this.endNodeElementId + ")", r;
  }, e;
}();
Ne.Relationship = Na;
Object.defineProperty(Na.prototype, ny, Gi);
function e1(e) {
  return Ki(e, ny);
}
Ne.isRelationship = e1;
var sy = function() {
  function e(r, t, n, i) {
    this.identity = r, this.type = t, this.properties = n, this.elementId = Ri(i, function() {
      return r.toString();
    });
  }
  return e.prototype.bind = function(r, t) {
    return new Na(this.identity, r, t, this.type, this.properties, this.elementId);
  }, e.prototype.bindTo = function(r, t) {
    return new Na(this.identity, r.identity, t.identity, this.type, this.properties, this.elementId, r.elementId, t.elementId);
  }, e.prototype.toString = function() {
    var r = "-[:" + this.type, t = Object.keys(this.properties);
    if (t.length > 0) {
      r += " {";
      for (var n = 0; n < t.length; n++)
        n > 0 && (r += ","), r += t[n] + ":" + (0, Lf.stringify)(this.properties[t[n]]);
      r += "}";
    }
    return r += "]->", r;
  }, e;
}();
Ne.UnboundRelationship = sy;
Object.defineProperty(sy.prototype, iy, Gi);
function t1(e) {
  return Ki(e, iy);
}
Ne.isUnboundRelationship = t1;
var cy = function() {
  function e(r, t, n) {
    this.start = r, this.relationship = t, this.end = n;
  }
  return e;
}();
Ne.PathSegment = cy;
Object.defineProperty(cy.prototype, ay, Gi);
function r1(e) {
  return Ki(e, ay);
}
Ne.isPathSegment = r1;
var ly = function() {
  function e(r, t, n) {
    this.start = r, this.end = t, this.segments = n, this.length = n.length;
  }
  return e;
}();
Ne.Path = ly;
Object.defineProperty(ly.prototype, oy, Gi);
function n1(e) {
  return Ki(e, oy);
}
Ne.isPath = n1;
function Ri(e, r) {
  return e ?? r();
}
var Ff = {}, sl = h && h.__generator || function(e, r) {
  var t = { label: 0, sent: function() {
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
    for (; a && (a = 0, s[0] && (t = 0)), t; )
      try {
        if (n = 1, i && (o = s[0] & 2 ? i.return : s[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, s[1])).done)
          return o;
        switch (i = 0, o && (s = [s[0] & 2, o.value]), s[0]) {
          case 0:
          case 1:
            o = s;
            break;
          case 4:
            return t.label++, { value: s[1], done: !1 };
          case 5:
            t.label++, i = s[1], s = [0];
            continue;
          case 7:
            s = t.ops.pop(), t.trys.pop();
            continue;
          default:
            if (o = t.trys, !(o = o.length > 0 && o[o.length - 1]) && (s[0] === 6 || s[0] === 2)) {
              t = 0;
              continue;
            }
            if (s[0] === 3 && (!o || s[1] > o[0] && s[1] < o[3])) {
              t.label = s[1];
              break;
            }
            if (s[0] === 6 && t.label < o[1]) {
              t.label = o[1], o = s;
              break;
            }
            if (o && t.label < o[2]) {
              t.label = o[2], t.ops.push(s);
              break;
            }
            o[2] && t.ops.pop(), t.trys.pop();
            continue;
        }
        s = r.call(e, t);
      } catch (l) {
        s = [6, l], i = 0;
      } finally {
        n = o = 0;
      }
    if (s[0] & 5)
      throw s[1];
    return { value: s[0] ? s[1] : void 0, done: !0 };
  }
}, cl = h && h.__values || function(e) {
  var r = typeof Symbol == "function" && Symbol.iterator, t = r && e[r], n = 0;
  if (t)
    return t.call(e);
  if (e && typeof e.length == "number")
    return {
      next: function() {
        return e && n >= e.length && (e = void 0), { value: e && e[n++], done: !e };
      }
    };
  throw new TypeError(r ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, ll = h && h.__read || function(e, r) {
  var t = typeof Symbol == "function" && e[Symbol.iterator];
  if (!t)
    return e;
  var n = t.call(e), i, o = [], a;
  try {
    for (; (r === void 0 || r-- > 0) && !(i = n.next()).done; )
      o.push(i.value);
  } catch (u) {
    a = { error: u };
  } finally {
    try {
      i && !i.done && (t = n.return) && t.call(n);
    } finally {
      if (a)
        throw a.error;
    }
  }
  return o;
};
Object.defineProperty(Ff, "__esModule", { value: !0 });
var gh = Ee;
function i1(e) {
  var r = {};
  return e.forEach(function(t, n) {
    r[t] = n;
  }), r;
}
var o1 = function() {
  function e(r, t, n) {
    this.keys = r, this.length = r.length, this._fields = t, this._fieldLookup = n ?? i1(r);
  }
  return e.prototype.forEach = function(r) {
    var t, n;
    try {
      for (var i = cl(this.entries()), o = i.next(); !o.done; o = i.next()) {
        var a = ll(o.value, 2), u = a[0], c = a[1];
        r(c, u, this);
      }
    } catch (s) {
      t = { error: s };
    } finally {
      try {
        o && !o.done && (n = i.return) && n.call(i);
      } finally {
        if (t)
          throw t.error;
      }
    }
  }, e.prototype.map = function(r) {
    var t, n, i = [];
    try {
      for (var o = cl(this.entries()), a = o.next(); !a.done; a = o.next()) {
        var u = ll(a.value, 2), c = u[0], s = u[1];
        i.push(r(s, c, this));
      }
    } catch (l) {
      t = { error: l };
    } finally {
      try {
        a && !a.done && (n = o.return) && n.call(o);
      } finally {
        if (t)
          throw t.error;
      }
    }
    return i;
  }, e.prototype.entries = function() {
    var r;
    return sl(this, function(t) {
      switch (t.label) {
        case 0:
          r = 0, t.label = 1;
        case 1:
          return r < this.keys.length ? [4, [this.keys[r], this._fields[r]]] : [3, 4];
        case 2:
          t.sent(), t.label = 3;
        case 3:
          return r++, [3, 1];
        case 4:
          return [2];
      }
    });
  }, e.prototype.values = function() {
    var r;
    return sl(this, function(t) {
      switch (t.label) {
        case 0:
          r = 0, t.label = 1;
        case 1:
          return r < this.keys.length ? [4, this._fields[r]] : [3, 4];
        case 2:
          t.sent(), t.label = 3;
        case 3:
          return r++, [3, 1];
        case 4:
          return [2];
      }
    });
  }, e.prototype[Symbol.iterator] = function() {
    var r;
    return sl(this, function(t) {
      switch (t.label) {
        case 0:
          r = 0, t.label = 1;
        case 1:
          return r < this.keys.length ? [4, this._fields[r]] : [3, 4];
        case 2:
          t.sent(), t.label = 3;
        case 3:
          return r++, [3, 1];
        case 4:
          return [2];
      }
    });
  }, e.prototype.toObject = function() {
    var r, t, n = {};
    try {
      for (var i = cl(this.entries()), o = i.next(); !o.done; o = i.next()) {
        var a = ll(o.value, 2), u = a[0], c = a[1];
        n[u] = c;
      }
    } catch (s) {
      r = { error: s };
    } finally {
      try {
        o && !o.done && (t = i.return) && t.call(i);
      } finally {
        if (r)
          throw r.error;
      }
    }
    return n;
  }, e.prototype.get = function(r) {
    var t;
    if (typeof r != "number") {
      if (t = this._fieldLookup[r], t === void 0)
        throw (0, gh.newError)("This record has no field with key '".concat(r.toString(), "', available keys are: [") + this.keys.toString() + "].");
    } else
      t = r;
    if (t > this._fields.length - 1 || t < 0)
      throw (0, gh.newError)("This record has no field with index '" + t.toString() + "'. Remember that indexes start at `0`, and make sure your query returns records in the shape you meant it to.");
    return this._fields[t];
  }, e.prototype.has = function(r) {
    return typeof r == "number" ? r >= 0 && r < this._fields.length : this._fieldLookup[r] !== void 0;
  }, e;
}();
Ff.default = o1;
var Cn = {};
Object.defineProperty(Cn, "__esModule", { value: !0 });
Cn.isPoint = Cn.Point = void 0;
var ta = ce, fy = "__isPoint__", dy = function() {
  function e(r, t, n, i) {
    this.srid = (0, ta.assertNumberOrInteger)(r, "SRID"), this.x = (0, ta.assertNumber)(t, "X coordinate"), this.y = (0, ta.assertNumber)(n, "Y coordinate"), this.z = i == null ? i : (0, ta.assertNumber)(i, "Z coordinate"), Object.freeze(this);
  }
  return e.prototype.toString = function() {
    return this.z != null && !isNaN(this.z) ? "Point{srid=".concat(Cr(this.srid), ", x=").concat(Cr(this.x), ", y=").concat(Cr(this.y), ", z=").concat(Cr(this.z), "}") : "Point{srid=".concat(Cr(this.srid), ", x=").concat(Cr(this.x), ", y=").concat(Cr(this.y), "}");
  }, e;
}();
Cn.Point = dy;
function Cr(e) {
  return Number.isInteger(e) ? e.toString() + ".0" : e.toString();
}
Object.defineProperty(dy.prototype, fy, {
  value: !0,
  enumerable: !1,
  configurable: !1,
  writable: !1
});
function a1(e) {
  var r = e;
  return e != null && r[fy] === !0;
}
Cn.isPoint = a1;
var Ge = {}, u1 = h && h.__createBinding || (Object.create ? function(e, r, t, n) {
  n === void 0 && (n = t);
  var i = Object.getOwnPropertyDescriptor(r, t);
  (!i || ("get" in i ? !r.__esModule : i.writable || i.configurable)) && (i = { enumerable: !0, get: function() {
    return r[t];
  } }), Object.defineProperty(e, n, i);
} : function(e, r, t, n) {
  n === void 0 && (n = t), e[n] = r[t];
}), s1 = h && h.__setModuleDefault || (Object.create ? function(e, r) {
  Object.defineProperty(e, "default", { enumerable: !0, value: r });
} : function(e, r) {
  e.default = r;
}), c1 = h && h.__importStar || function(e) {
  if (e && e.__esModule)
    return e;
  var r = {};
  if (e != null)
    for (var t in e)
      t !== "default" && Object.prototype.hasOwnProperty.call(e, t) && u1(r, e, t);
  return s1(r, e), r;
};
Object.defineProperty(Ge, "__esModule", { value: !0 });
Ge.Stats = Ge.QueryStatistics = Ge.ProfiledPlan = Ge.Plan = Ge.Notification = Ge.ServerInfo = Ge.queryType = void 0;
var Oh = c1(Ke), l1 = function() {
  function e(r, t, n, i) {
    var o, a, u;
    this.query = { text: r, parameters: t }, this.queryType = n.type, this.counters = new hy((o = n.stats) !== null && o !== void 0 ? o : {}), this.updateStatistics = this.counters, this.plan = n.plan != null || n.profile != null ? new ef((a = n.plan) !== null && a !== void 0 ? a : n.profile) : !1, this.profile = n.profile != null ? new tf(n.profile) : !1, this.notifications = this._buildNotifications(n.notifications), this.server = new py(n.server, i), this.resultConsumedAfter = n.result_consumed_after, this.resultAvailableAfter = n.result_available_after, this.database = { name: (u = n.db) !== null && u !== void 0 ? u : null };
  }
  return e.prototype._buildNotifications = function(r) {
    return r == null ? [] : r.map(function(t) {
      return new vy(t);
    });
  }, e.prototype.hasPlan = function() {
    return this.plan instanceof ef;
  }, e.prototype.hasProfile = function() {
    return this.profile instanceof tf;
  }, e;
}(), ef = function() {
  function e(r) {
    this.operatorType = r.operatorType, this.identifiers = r.identifiers, this.arguments = r.args, this.children = r.children != null ? r.children.map(function(t) {
      return new e(t);
    }) : [];
  }
  return e;
}();
Ge.Plan = ef;
var tf = function() {
  function e(r) {
    this.operatorType = r.operatorType, this.identifiers = r.identifiers, this.arguments = r.args, this.dbHits = mn("dbHits", r), this.rows = mn("rows", r), this.pageCacheMisses = mn("pageCacheMisses", r), this.pageCacheHits = mn("pageCacheHits", r), this.pageCacheHitRatio = mn("pageCacheHitRatio", r), this.time = mn("time", r), this.children = r.children != null ? r.children.map(function(t) {
      return new e(t);
    }) : [];
  }
  return e.prototype.hasPageCacheStats = function() {
    return this.pageCacheMisses > 0 || this.pageCacheHits > 0 || this.pageCacheHitRatio > 0;
  }, e;
}();
Ge.ProfiledPlan = tf;
var f1 = function() {
  function e() {
    this.nodesCreated = 0, this.nodesDeleted = 0, this.relationshipsCreated = 0, this.relationshipsDeleted = 0, this.propertiesSet = 0, this.labelsAdded = 0, this.labelsRemoved = 0, this.indexesAdded = 0, this.indexesRemoved = 0, this.constraintsAdded = 0, this.constraintsRemoved = 0;
  }
  return e;
}();
Ge.Stats = f1;
var hy = function() {
  function e(r) {
    var t = this;
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
    }, this._systemUpdates = 0, Object.keys(r).forEach(function(n) {
      var i = n.replace(/(-\w)/g, function(o) {
        return o[1].toUpperCase();
      });
      i in t._stats ? t._stats[i] = En(r[n]) : i === "systemUpdates" ? t._systemUpdates = En(r[n]) : i === "containsSystemUpdates" ? t._containsSystemUpdates = r[n] : i === "containsUpdates" && (t._containsUpdates = r[n]);
    }), this._stats = Object.freeze(this._stats);
  }
  return e.prototype.containsUpdates = function() {
    var r = this;
    return this._containsUpdates !== void 0 ? this._containsUpdates : Object.keys(this._stats).reduce(function(t, n) {
      return t + r._stats[n];
    }, 0) > 0;
  }, e.prototype.updates = function() {
    return this._stats;
  }, e.prototype.containsSystemUpdates = function() {
    return this._containsSystemUpdates !== void 0 ? this._containsSystemUpdates : this._systemUpdates > 0;
  }, e.prototype.systemUpdates = function() {
    return this._systemUpdates;
  }, e;
}();
Ge.QueryStatistics = hy;
var vy = function() {
  function e(r) {
    this.code = r.code, this.title = r.title, this.description = r.description, this.severity = r.severity, this.position = e._constructPosition(r.position);
  }
  return e._constructPosition = function(r) {
    return r == null ? {} : {
      offset: En(r.offset),
      line: En(r.line),
      column: En(r.column)
    };
  }, e;
}();
Ge.Notification = vy;
var py = function() {
  function e(r, t) {
    r != null && (this.address = r.address, this.agent = r.version), this.protocolVersion = t;
  }
  return e;
}();
Ge.ServerInfo = py;
function En(e) {
  return e instanceof Oh.default ? e.toInt() : typeof e == "bigint" ? (0, Oh.int)(e).toInt() : e;
}
function mn(e, r, t) {
  if (t === void 0 && (t = 0), r !== !1 && e in r) {
    var n = r[e];
    return En(n);
  } else
    return t;
}
var d1 = {
  READ_ONLY: "r",
  READ_WRITE: "rw",
  WRITE_ONLY: "w",
  SCHEMA_WRITE: "s"
};
Ge.queryType = d1;
Ge.default = l1;
var Zi = {}, Oe = {}, vr = {};
Object.defineProperty(vr, "__esModule", { value: !0 });
vr.FailedObserver = vr.CompletedObserver = void 0;
var h1 = function() {
  function e() {
  }
  return e.prototype.subscribe = function(r) {
    Ci(r, r.onKeys, []), Ci(r, r.onCompleted, {});
  }, e.prototype.cancel = function() {
  }, e.prototype.pause = function() {
  }, e.prototype.resume = function() {
  }, e.prototype.prepareToHandleSingleResponse = function() {
  }, e.prototype.markCompleted = function() {
  }, e.prototype.onError = function(r) {
    throw Error("CompletedObserver not supposed to call onError");
  }, e;
}();
vr.CompletedObserver = h1;
var v1 = function() {
  function e(r) {
    var t = r.error, n = r.onError;
    this._error = t, this._beforeError = n, this._observers = [], this.onError(t);
  }
  return e.prototype.subscribe = function(r) {
    Ci(r, r.onError, this._error), this._observers.push(r);
  }, e.prototype.onError = function(r) {
    Ci(this, this._beforeError, r), this._observers.forEach(function(t) {
      return Ci(t, t.onError, r);
    });
  }, e.prototype.cancel = function() {
  }, e.prototype.pause = function() {
  }, e.prototype.resume = function() {
  }, e.prototype.markCompleted = function() {
  }, e.prototype.prepareToHandleSingleResponse = function() {
  }, e;
}();
vr.FailedObserver = v1;
function Ci(e, r, t) {
  r != null && r.bind(e)(t);
}
var wr = {}, p1 = h && h.__createBinding || (Object.create ? function(e, r, t, n) {
  n === void 0 && (n = t);
  var i = Object.getOwnPropertyDescriptor(r, t);
  (!i || ("get" in i ? !r.__esModule : i.writable || i.configurable)) && (i = { enumerable: !0, get: function() {
    return r[t];
  } }), Object.defineProperty(e, n, i);
} : function(e, r, t, n) {
  n === void 0 && (n = t), e[n] = r[t];
}), _1 = h && h.__setModuleDefault || (Object.create ? function(e, r) {
  Object.defineProperty(e, "default", { enumerable: !0, value: r });
} : function(e, r) {
  e.default = r;
}), y1 = h && h.__importStar || function(e) {
  if (e && e.__esModule)
    return e;
  var r = {};
  if (e != null)
    for (var t in e)
      t !== "default" && Object.prototype.hasOwnProperty.call(e, t) && p1(r, e, t);
  return _1(r, e), r;
}, m1 = h && h.__read || function(e, r) {
  var t = typeof Symbol == "function" && e[Symbol.iterator];
  if (!t)
    return e;
  var n = t.call(e), i, o = [], a;
  try {
    for (; (r === void 0 || r-- > 0) && !(i = n.next()).done; )
      o.push(i.value);
  } catch (u) {
    a = { error: u };
  } finally {
    try {
      i && !i.done && (t = n.return) && t.call(n);
    } finally {
      if (a)
        throw a.error;
    }
  }
  return o;
}, b1 = h && h.__spreadArray || function(e, r, t) {
  if (t || arguments.length === 2)
    for (var n = 0, i = r.length, o; n < i; n++)
      (o || !(n in r)) && (o || (o = Array.prototype.slice.call(r, 0, n)), o[n] = r[n]);
  return e.concat(o || Array.prototype.slice.call(r));
};
Object.defineProperty(wr, "__esModule", { value: !0 });
wr.Bookmarks = void 0;
var wh = y1(ce), g1 = "bookmarks", _y = function() {
  function e(r) {
    this._values = w1(r);
  }
  return e.empty = function() {
    return O1;
  }, e.prototype.isEmpty = function() {
    return this._values.length === 0;
  }, e.prototype.values = function() {
    return this._values;
  }, e.prototype[Symbol.iterator] = function() {
    return this._values[Symbol.iterator]();
  }, e.prototype.asBeginTransactionParameters = function() {
    var r;
    return this.isEmpty() ? {} : (r = {}, r[g1] = this._values, r);
  }, e;
}();
wr.Bookmarks = _y;
var O1 = new _y(null);
function w1(e) {
  if (e == null || e === "")
    return [];
  if (wh.isString(e))
    return [e];
  if (Array.isArray(e)) {
    for (var r = /* @__PURE__ */ new Set(), t = yy(e), n = 0; n < t.length; n++) {
      var i = t[n];
      if (i != null) {
        if (!wh.isString(i))
          throw new TypeError(
            "Bookmark value should be a string, given: '".concat(i, "'")
          );
        r.add(i);
      }
    }
    return b1([], m1(r), !1);
  }
  throw new TypeError(
    "Bookmarks should either be a string or a string array, given: '".concat(e, "'")
  );
}
function yy(e) {
  return e.reduce(function(r, t) {
    return Array.isArray(t) ? r.concat(yy(t)) : r.concat(t);
  }, []);
}
var se = {};
Object.defineProperty(se, "__esModule", { value: !0 });
se.BOLT_PROTOCOL_V5_0 = se.BOLT_PROTOCOL_V4_4 = se.BOLT_PROTOCOL_V4_3 = se.BOLT_PROTOCOL_V4_2 = se.BOLT_PROTOCOL_V4_1 = se.BOLT_PROTOCOL_V4_0 = se.BOLT_PROTOCOL_V3 = se.BOLT_PROTOCOL_V2 = se.BOLT_PROTOCOL_V1 = se.DEFAULT_POOL_MAX_SIZE = se.DEFAULT_POOL_ACQUISITION_TIMEOUT = se.DEFAULT_CONNECTION_TIMEOUT_MILLIS = se.ACCESS_MODE_WRITE = se.ACCESS_MODE_READ = se.FETCH_ALL = void 0;
var E1 = -1;
se.FETCH_ALL = E1;
var S1 = 60 * 1e3;
se.DEFAULT_POOL_ACQUISITION_TIMEOUT = S1;
var T1 = 100;
se.DEFAULT_POOL_MAX_SIZE = T1;
var P1 = 3e4;
se.DEFAULT_CONNECTION_TIMEOUT_MILLIS = P1;
var I1 = "READ";
se.ACCESS_MODE_READ = I1;
var A1 = "WRITE";
se.ACCESS_MODE_WRITE = A1;
var R1 = 1;
se.BOLT_PROTOCOL_V1 = R1;
var C1 = 2;
se.BOLT_PROTOCOL_V2 = C1;
var $1 = 3;
se.BOLT_PROTOCOL_V3 = $1;
var j1 = 4;
se.BOLT_PROTOCOL_V4_0 = j1;
var N1 = 4.1;
se.BOLT_PROTOCOL_V4_1 = N1;
var M1 = 4.2;
se.BOLT_PROTOCOL_V4_2 = M1;
var k1 = 4.3;
se.BOLT_PROTOCOL_V4_3 = k1;
var D1 = 4.4;
se.BOLT_PROTOCOL_V4_4 = D1;
var U1 = 5;
se.BOLT_PROTOCOL_V5_0 = U1;
var Pt = {}, my = h && h.__extends || function() {
  var e = function(r, t) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var o in i)
        Object.prototype.hasOwnProperty.call(i, o) && (n[o] = i[o]);
    }, e(r, t);
  };
  return function(r, t) {
    if (typeof t != "function" && t !== null)
      throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
    e(r, t);
    function n() {
      this.constructor = r;
    }
    r.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}(), $i = h && h.__awaiter || function(e, r, t, n) {
  function i(o) {
    return o instanceof t ? o : new t(function(a) {
      a(o);
    });
  }
  return new (t || (t = Promise))(function(o, a) {
    function u(l) {
      try {
        s(n.next(l));
      } catch (f) {
        a(f);
      }
    }
    function c(l) {
      try {
        s(n.throw(l));
      } catch (f) {
        a(f);
      }
    }
    function s(l) {
      l.done ? o(l.value) : i(l.value).then(u, c);
    }
    s((n = n.apply(e, r || [])).next());
  });
}, ji = h && h.__generator || function(e, r) {
  var t = { label: 0, sent: function() {
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
    for (; a && (a = 0, s[0] && (t = 0)), t; )
      try {
        if (n = 1, i && (o = s[0] & 2 ? i.return : s[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, s[1])).done)
          return o;
        switch (i = 0, o && (s = [s[0] & 2, o.value]), s[0]) {
          case 0:
          case 1:
            o = s;
            break;
          case 4:
            return t.label++, { value: s[1], done: !1 };
          case 5:
            t.label++, i = s[1], s = [0];
            continue;
          case 7:
            s = t.ops.pop(), t.trys.pop();
            continue;
          default:
            if (o = t.trys, !(o = o.length > 0 && o[o.length - 1]) && (s[0] === 6 || s[0] === 2)) {
              t = 0;
              continue;
            }
            if (s[0] === 3 && (!o || s[1] > o[0] && s[1] < o[3])) {
              t.label = s[1];
              break;
            }
            if (s[0] === 6 && t.label < o[1]) {
              t.label = o[1], o = s;
              break;
            }
            if (o && t.label < o[2]) {
              t.label = o[2], t.ops.push(s);
              break;
            }
            o[2] && t.ops.pop(), t.trys.pop();
            continue;
        }
        s = r.call(e, t);
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
Object.defineProperty(Pt, "__esModule", { value: !0 });
Pt.EMPTY_CONNECTION_HOLDER = Pt.ReadOnlyConnectionHolder = Pt.ConnectionHolder = void 0;
var L1 = Ee, F1 = ce, x1 = se, Eh = wr, xf = function() {
  function e(r) {
    var t = r === void 0 ? {} : r, n = t.mode, i = n === void 0 ? x1.ACCESS_MODE_WRITE : n, o = t.database, a = o === void 0 ? "" : o, u = t.bookmarks, c = t.connectionProvider, s = t.impersonatedUser, l = t.onDatabaseNameResolved, f = t.getConnectionAcquistionBookmarks;
    this._mode = i, this._database = a != null ? (0, F1.assertString)(a, "database") : "", this._bookmarks = u ?? Eh.Bookmarks.empty(), this._connectionProvider = c, this._impersonatedUser = s, this._referenceCount = 0, this._connectionPromise = Promise.resolve(null), this._onDatabaseNameResolved = l, this._getConnectionAcquistionBookmarks = f ?? function() {
      return Promise.resolve(Eh.Bookmarks.empty());
    };
  }
  return e.prototype.mode = function() {
    return this._mode;
  }, e.prototype.database = function() {
    return this._database;
  }, e.prototype.setDatabase = function(r) {
    this._database = r;
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
  }, e.prototype._createConnectionPromise = function(r) {
    return $i(this, void 0, void 0, function() {
      var t, n, i;
      return ji(this, function(o) {
        switch (o.label) {
          case 0:
            return n = (t = r).acquireConnection, i = {
              accessMode: this._mode,
              database: this._database
            }, [4, this._getBookmarks()];
          case 1:
            return [4, n.apply(t, [(i.bookmarks = o.sent(), i.impersonatedUser = this._impersonatedUser, i.onDatabaseNameResolved = this._onDatabaseNameResolved, i)])];
          case 2:
            return [2, o.sent()];
        }
      });
    });
  }, e.prototype._getBookmarks = function() {
    return $i(this, void 0, void 0, function() {
      return ji(this, function(r) {
        switch (r.label) {
          case 0:
            return [4, this._getConnectionAcquistionBookmarks()];
          case 1:
            return [2, r.sent()];
        }
      });
    });
  }, e.prototype.getConnection = function() {
    return this._connectionPromise;
  }, e.prototype.releaseConnection = function() {
    return this._referenceCount === 0 ? this._connectionPromise : (this._referenceCount--, this._referenceCount === 0 ? this._releaseConnection() : this._connectionPromise);
  }, e.prototype.close = function(r) {
    return this._referenceCount === 0 ? this._connectionPromise : (this._referenceCount = 0, this._releaseConnection(r));
  }, e.prototype._releaseConnection = function(r) {
    return this._connectionPromise = this._connectionPromise.then(function(t) {
      return t != null ? t.isOpen() && (t.hasOngoingObservableRequests() || r === !0) ? t.resetAndFlush().catch(Sh).then(function() {
        return t._release().then(function() {
          return null;
        });
      }) : t._release().then(function() {
        return null;
      }) : Promise.resolve(null);
    }).catch(Sh), this._connectionPromise;
  }, e;
}();
Pt.ConnectionHolder = xf;
var by = function(e) {
  my(r, e);
  function r(t) {
    var n = e.call(this, {
      mode: t.mode(),
      database: t.database(),
      bookmarks: t.bookmarks(),
      getConnectionAcquistionBookmarks: t._getConnectionAcquistionBookmarks,
      connectionProvider: t.connectionProvider()
    }) || this;
    return n._connectionHolder = t, n;
  }
  return r.prototype.initializeConnection = function() {
    return this._connectionHolder.referenceCount() !== 0;
  }, r.prototype.getConnection = function() {
    return this._connectionHolder.getConnection();
  }, r.prototype.releaseConnection = function() {
    return this._connectionHolder.getConnection().catch(function() {
      return Promise.resolve(null);
    });
  }, r.prototype.close = function() {
    return this._connectionHolder.getConnection().catch(function() {
      return Promise.resolve(null);
    });
  }, r;
}(xf);
Pt.ReadOnlyConnectionHolder = by;
Pt.default = by;
var B1 = function(e) {
  my(r, e);
  function r() {
    return e !== null && e.apply(this, arguments) || this;
  }
  return r.prototype.mode = function() {
  }, r.prototype.database = function() {
  }, r.prototype.initializeConnection = function() {
    return !0;
  }, r.prototype.getConnection = function() {
    return $i(this, void 0, void 0, function() {
      return ji(this, function(t) {
        switch (t.label) {
          case 0:
            return [4, Promise.reject((0, L1.newError)("This connection holder does not serve connections"))];
          case 1:
            return [2, t.sent()];
        }
      });
    });
  }, r.prototype.releaseConnection = function() {
    return $i(this, void 0, void 0, function() {
      return ji(this, function(t) {
        switch (t.label) {
          case 0:
            return [4, Promise.resolve(null)];
          case 1:
            return [2, t.sent()];
        }
      });
    });
  }, r.prototype.close = function() {
    return $i(this, void 0, void 0, function() {
      return ji(this, function(t) {
        switch (t.label) {
          case 0:
            return [4, Promise.resolve(null)];
          case 1:
            return [2, t.sent()];
        }
      });
    });
  }, r;
}(xf), W1 = new B1();
Pt.EMPTY_CONNECTION_HOLDER = W1;
function Sh(e) {
  return null;
}
var Vn = {}, V1 = h && h.__createBinding || (Object.create ? function(e, r, t, n) {
  n === void 0 && (n = t);
  var i = Object.getOwnPropertyDescriptor(r, t);
  (!i || ("get" in i ? !r.__esModule : i.writable || i.configurable)) && (i = { enumerable: !0, get: function() {
    return r[t];
  } }), Object.defineProperty(e, n, i);
} : function(e, r, t, n) {
  n === void 0 && (n = t), e[n] = r[t];
}), q1 = h && h.__setModuleDefault || (Object.create ? function(e, r) {
  Object.defineProperty(e, "default", { enumerable: !0, value: r });
} : function(e, r) {
  e.default = r;
}), H1 = h && h.__importStar || function(e) {
  if (e && e.__esModule)
    return e;
  var r = {};
  if (e != null)
    for (var t in e)
      t !== "default" && Object.prototype.hasOwnProperty.call(e, t) && V1(r, e, t);
  return q1(r, e), r;
};
Object.defineProperty(Vn, "__esModule", { value: !0 });
Vn.TxConfig = void 0;
var Fi = H1(ce), z1 = Ee, Y1 = Ke, gy = function() {
  function e(r) {
    Q1(r), this.timeout = K1(r), this.metadata = Z1(r);
  }
  return e.empty = function() {
    return G1;
  }, e.prototype.isEmpty = function() {
    return Object.values(this).every(function(r) {
      return r == null;
    });
  }, e;
}();
Vn.TxConfig = gy;
var G1 = new gy({});
function K1(e) {
  if (Fi.isObject(e) && e.timeout != null) {
    Fi.assertNumberOrInteger(e.timeout, "Transaction timeout");
    var r = (0, Y1.int)(e.timeout);
    if (r.isNegative())
      throw (0, z1.newError)("Transaction timeout should not be negative");
    return r;
  }
  return null;
}
function Z1(e) {
  if (Fi.isObject(e) && e.metadata != null) {
    var r = e.metadata;
    if (Fi.assertObject(r, "config.metadata"), Object.keys(r).length !== 0)
      return r;
  }
  return null;
}
function Q1(e) {
  e != null && Fi.assertObject(e, "Transaction config");
}
var Qi = {}, X1 = h && h.__awaiter || function(e, r, t, n) {
  function i(o) {
    return o instanceof t ? o : new t(function(a) {
      a(o);
    });
  }
  return new (t || (t = Promise))(function(o, a) {
    function u(l) {
      try {
        s(n.next(l));
      } catch (f) {
        a(f);
      }
    }
    function c(l) {
      try {
        s(n.throw(l));
      } catch (f) {
        a(f);
      }
    }
    function s(l) {
      l.done ? o(l.value) : i(l.value).then(u, c);
    }
    s((n = n.apply(e, r || [])).next());
  });
}, J1 = h && h.__generator || function(e, r) {
  var t = { label: 0, sent: function() {
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
    for (; a && (a = 0, s[0] && (t = 0)), t; )
      try {
        if (n = 1, i && (o = s[0] & 2 ? i.return : s[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, s[1])).done)
          return o;
        switch (i = 0, o && (s = [s[0] & 2, o.value]), s[0]) {
          case 0:
          case 1:
            o = s;
            break;
          case 4:
            return t.label++, { value: s[1], done: !1 };
          case 5:
            t.label++, i = s[1], s = [0];
            continue;
          case 7:
            s = t.ops.pop(), t.trys.pop();
            continue;
          default:
            if (o = t.trys, !(o = o.length > 0 && o[o.length - 1]) && (s[0] === 6 || s[0] === 2)) {
              t = 0;
              continue;
            }
            if (s[0] === 3 && (!o || s[1] > o[0] && s[1] < o[3])) {
              t.label = s[1];
              break;
            }
            if (s[0] === 6 && t.label < o[1]) {
              t.label = o[1], o = s;
              break;
            }
            if (o && t.label < o[2]) {
              t.label = o[2], t.ops.push(s);
              break;
            }
            o[2] && t.ops.pop(), t.trys.pop();
            continue;
        }
        s = r.call(e, t);
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
Object.defineProperty(Qi, "__esModule", { value: !0 });
Qi.TransactionExecutor = void 0;
var _i = Ee, eS = 30 * 1e3, tS = 1e3, rS = 2, nS = 0.2, iS = function() {
  function e(r, t, n, i) {
    this._maxRetryTimeMs = ra(r, eS), this._initialRetryDelayMs = ra(t, tS), this._multiplier = ra(n, rS), this._jitterFactor = ra(i, nS), this._inFlightTimeoutIds = [], this._verifyAfterConstruction();
  }
  return e.prototype.execute = function(r, t, n) {
    var i = this;
    return new Promise(function(o, a) {
      i._executeTransactionInsidePromise(r, t, o, a, n).catch(a);
    }).catch(function(o) {
      var a = Date.now(), u = i._initialRetryDelayMs;
      return i._retryTransactionPromise(r, t, o, a, u, n);
    });
  }, e.prototype.close = function() {
    this._inFlightTimeoutIds.forEach(function(r) {
      return clearTimeout(r);
    }), this._inFlightTimeoutIds = [];
  }, e.prototype._retryTransactionPromise = function(r, t, n, i, o, a) {
    var u = this, c = Date.now() - i;
    return c > this._maxRetryTimeMs || !(0, _i.isRetriableError)(n) ? Promise.reject(n) : new Promise(function(s, l) {
      var f = u._computeDelayWithJitter(o), y = setTimeout(function() {
        u._inFlightTimeoutIds = u._inFlightTimeoutIds.filter(function(b) {
          return b !== y;
        }), u._executeTransactionInsidePromise(r, t, s, l, a).catch(l);
      }, f);
      u._inFlightTimeoutIds.push(y);
    }).catch(function(s) {
      var l = o * u._multiplier;
      return u._retryTransactionPromise(r, t, s, i, l, a);
    });
  }, e.prototype._executeTransactionInsidePromise = function(r, t, n, i, o) {
    return X1(this, void 0, void 0, function() {
      var a, u, c, s, l, f = this;
      return J1(this, function(y) {
        switch (y.label) {
          case 0:
            return y.trys.push([0, 2, , 3]), [4, r()];
          case 1:
            return a = y.sent(), [3, 3];
          case 2:
            return u = y.sent(), i(u), [2];
          case 3:
            return c = o ?? function(b) {
              return b;
            }, s = c(a), l = this._safeExecuteTransactionWork(s, t), l.then(function(b) {
              return f._handleTransactionWorkSuccess(b, a, n, i);
            }).catch(function(b) {
              return f._handleTransactionWorkFailure(b, a, i);
            }), [2];
        }
      });
    });
  }, e.prototype._safeExecuteTransactionWork = function(r, t) {
    try {
      var n = t(r);
      return Promise.resolve(n);
    } catch (i) {
      return Promise.reject(i);
    }
  }, e.prototype._handleTransactionWorkSuccess = function(r, t, n, i) {
    t.isOpen() ? t.commit().then(function() {
      n(r);
    }).catch(function(o) {
      i(o);
    }) : n(r);
  }, e.prototype._handleTransactionWorkFailure = function(r, t, n) {
    t.isOpen() ? t.rollback().catch(function(i) {
    }).then(function() {
      return n(r);
    }).catch(n) : n(r);
  }, e.prototype._computeDelayWithJitter = function(r) {
    var t = r * this._jitterFactor, n = r - t, i = r + t;
    return Math.random() * (i - n) + n;
  }, e.prototype._verifyAfterConstruction = function() {
    if (this._maxRetryTimeMs < 0)
      throw (0, _i.newError)("Max retry time should be >= 0: " + this._maxRetryTimeMs.toString());
    if (this._initialRetryDelayMs < 0)
      throw (0, _i.newError)("Initial retry delay should >= 0: " + this._initialRetryDelayMs.toString());
    if (this._multiplier < 1)
      throw (0, _i.newError)("Multiplier should be >= 1.0: " + this._multiplier.toString());
    if (this._jitterFactor < 0 || this._jitterFactor > 1)
      throw (0, _i.newError)("Jitter factor should be in [0.0, 1.0]: " + this._jitterFactor.toFixed());
  }, e;
}();
Qi.TransactionExecutor = iS;
function ra(e, r) {
  return e ?? r;
}
var Xi = {}, oS = h && h.__extends || function() {
  var e = function(r, t) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var o in i)
        Object.prototype.hasOwnProperty.call(i, o) && (n[o] = i[o]);
    }, e(r, t);
  };
  return function(r, t) {
    if (typeof t != "function" && t !== null)
      throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
    e(r, t);
    function n() {
      this.constructor = r;
    }
    r.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}(), bn;
Object.defineProperty(Xi, "__esModule", { value: !0 });
Xi.Logger = void 0;
var Oy = Ee, rf = "error", nf = "warn", xi = "info", of = "debug", aS = xi, Ma = (bn = {}, bn[rf] = 0, bn[nf] = 1, bn[xi] = 2, bn[of] = 3, bn), wy = function() {
  function e(r, t) {
    this._level = r, this._loggerFunction = t;
  }
  return e.create = function(r) {
    if ((r == null ? void 0 : r.logging) != null) {
      var t = r.logging, n = cS(t), i = lS(t);
      return new e(n, i);
    }
    return this.noOp();
  }, e.noOp = function() {
    return sS;
  }, e.prototype.isErrorEnabled = function() {
    return na(this._level, rf);
  }, e.prototype.error = function(r) {
    this.isErrorEnabled() && this._loggerFunction(rf, r);
  }, e.prototype.isWarnEnabled = function() {
    return na(this._level, nf);
  }, e.prototype.warn = function(r) {
    this.isWarnEnabled() && this._loggerFunction(nf, r);
  }, e.prototype.isInfoEnabled = function() {
    return na(this._level, xi);
  }, e.prototype.info = function(r) {
    this.isInfoEnabled() && this._loggerFunction(xi, r);
  }, e.prototype.isDebugEnabled = function() {
    return na(this._level, of);
  }, e.prototype.debug = function(r) {
    this.isDebugEnabled() && this._loggerFunction(of, r);
  }, e;
}();
Xi.Logger = wy;
var uS = function(e) {
  oS(r, e);
  function r() {
    return e.call(this, xi, function(t, n) {
    }) || this;
  }
  return r.prototype.isErrorEnabled = function() {
    return !1;
  }, r.prototype.error = function(t) {
  }, r.prototype.isWarnEnabled = function() {
    return !1;
  }, r.prototype.warn = function(t) {
  }, r.prototype.isInfoEnabled = function() {
    return !1;
  }, r.prototype.info = function(t) {
  }, r.prototype.isDebugEnabled = function() {
    return !1;
  }, r.prototype.debug = function(t) {
  }, r;
}(wy), sS = new uS();
function na(e, r) {
  return Ma[e] >= Ma[r];
}
function cS(e) {
  if ((e == null ? void 0 : e.level) != null) {
    var r = e.level, t = Ma[r];
    if (t == null && t !== 0)
      throw (0, Oy.newError)("Illegal logging level: ".concat(r, ". Supported levels are: ").concat(Object.keys(Ma).toString()));
    return r;
  }
  return aS;
}
function lS(e) {
  var r, t;
  if ((e == null ? void 0 : e.logger) != null) {
    var n = e.logger;
    if (n != null && typeof n == "function")
      return n;
  }
  throw (0, Oy.newError)("Illegal logger function: ".concat((t = (r = e == null ? void 0 : e.logger) === null || r === void 0 ? void 0 : r.toString()) !== null && t !== void 0 ? t : "undefined"));
}
var dt = {}, ka = h && h.__assign || function() {
  return ka = Object.assign || function(e) {
    for (var r, t = 1, n = arguments.length; t < n; t++) {
      r = arguments[t];
      for (var i in r)
        Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
    }
    return e;
  }, ka.apply(this, arguments);
}, Ey = h && h.__read || function(e, r) {
  var t = typeof Symbol == "function" && e[Symbol.iterator];
  if (!t)
    return e;
  var n = t.call(e), i, o = [], a;
  try {
    for (; (r === void 0 || r-- > 0) && !(i = n.next()).done; )
      o.push(i.value);
  } catch (u) {
    a = { error: u };
  } finally {
    try {
      i && !i.done && (t = n.return) && t.call(n);
    } finally {
      if (a)
        throw a.error;
    }
  }
  return o;
};
Object.defineProperty(dt, "__esModule", { value: !0 });
dt.Url = dt.formatIPv6Address = dt.formatIPv4Address = dt.defaultPortForScheme = dt.parseDatabaseUrl = void 0;
var fS = ce, dS = 7687, hS = 7474, vS = 7473, Sy = function() {
  function e(r, t, n, i, o) {
    this.scheme = r, this.host = t, this.port = n, this.hostAndPort = i, this.query = o;
  }
  return e;
}();
dt.Url = Sy;
function pS(e) {
  var r;
  (0, fS.assertString)(e, "URL");
  var t = yS(e), n = PS(t.url), i = t.schemeMissing ? null : mS(n.scheme), o = bS(n.host), a = ES(o), u = gS(n.port, i), c = "".concat(a, ":").concat(u), s = OS(
    (r = n.query) !== null && r !== void 0 ? r : _S(n.resourceName),
    e
  );
  return new Sy(i, o, u, c, s);
}
dt.parseDatabaseUrl = pS;
function _S(e) {
  if (typeof e != "string")
    return null;
  var r = Ey(e.split("?"), 2), t = r[1];
  return t;
}
function yS(e) {
  return e = e.trim(), e.includes("://") ? { schemeMissing: !1, url: e } : { schemeMissing: !0, url: "none://".concat(e) };
}
function mS(e) {
  return e != null ? (e = e.trim(), e.charAt(e.length - 1) === ":" && (e = e.substring(0, e.length - 1)), e) : null;
}
function bS(e, r) {
  if (e == null)
    throw new Error("Unable to extract host from null or undefined URL");
  return e.trim();
}
function gS(e, r) {
  var t = typeof e == "string" ? parseInt(e, 10) : e;
  return t != null && !isNaN(t) ? t : Py(r);
}
function OS(e, r) {
  var t = e != null ? wS(e) : null, n = {};
  return t != null && t.split("&").forEach(function(i) {
    var o = i.split("=");
    if (o.length !== 2)
      throw new Error("Invalid parameters: '".concat(o.toString(), "' in URL '").concat(r, "'."));
    var a = Th(o[0], "key", r), u = Th(o[1], "value", r);
    if (n[a] !== void 0)
      throw new Error("Duplicated query parameters with key '".concat(a, "' in URL '").concat(r, "'"));
    n[a] = u;
  }), n;
}
function wS(e) {
  return e = (e ?? "").trim(), (e == null ? void 0 : e.charAt(0)) === "?" && (e = e.substring(1, e.length)), e;
}
function Th(e, r, t) {
  if (e = (e ?? "").trim(), e === "")
    throw new Error("Illegal empty ".concat(r, " in URL query '").concat(t, "'"));
  return e;
}
function Ty(e) {
  var r = e.charAt(0) === "[", t = e.charAt(e.length - 1) === "]";
  if (!r && !t)
    return "[".concat(e, "]");
  if (r && t)
    return e;
  throw new Error("Illegal IPv6 address ".concat(e));
}
function ES(e) {
  if (e === "" || e == null)
    throw new Error("Illegal host ".concat(e));
  var r = e.includes(":");
  return r ? Ty(e) : e;
}
function SS(e, r) {
  return "".concat(e, ":").concat(r);
}
dt.formatIPv4Address = SS;
function TS(e, r) {
  var t = Ty(e);
  return "".concat(t, ":").concat(r);
}
dt.formatIPv6Address = TS;
function Py(e) {
  return e === "http" ? hS : e === "https" ? vS : dS;
}
dt.defaultPortForScheme = Py;
function PS(e) {
  function r(u, c) {
    var s = u.indexOf(c);
    return s >= 0 ? [u.substring(0, s), u[s], u.substring(s + 1)] : [u, "", ""];
  }
  function t(u, c) {
    var s = u.lastIndexOf(c);
    return s >= 0 ? [u.substring(0, s), u[s], u.substring(s + 1)] : ["", "", u];
  }
  function n(u, c, s) {
    var l = r(u, c), f = r(l[2], s);
    return [f[0], f[2]];
  }
  function i(u) {
    var c = {}, s;
    s = t(u, "@"), s[1] === "@" && (c.userInfo = decodeURIComponent(s[0]), u = s[2]);
    var l = Ey(n(u, "[", "]"), 2), f = l[0], y = l[1];
    return f !== "" ? (c.host = f, s = r(y, ":")) : (s = r(u, ":"), c.host = s[0]), s[1] === ":" && (c.port = s[2]), c;
  }
  var o = {}, a;
  return a = r(e, ":"), a[1] === ":" && (o.scheme = decodeURIComponent(a[0]), e = a[2]), a = r(e, "#"), a[1] === "#" && (o.fragment = decodeURIComponent(a[2]), e = a[0]), a = r(e, "?"), a[1] === "?" && (o.query = a[2], e = a[0]), e.startsWith("//") ? (a = r(e.substr(2), "/"), o = ka(ka({}, o), i(a[0])), o.path = a[1] + a[2]) : o.path = e, o;
}
var Ji = {}, IS = h && h.__createBinding || (Object.create ? function(e, r, t, n) {
  n === void 0 && (n = t);
  var i = Object.getOwnPropertyDescriptor(r, t);
  (!i || ("get" in i ? !r.__esModule : i.writable || i.configurable)) && (i = { enumerable: !0, get: function() {
    return r[t];
  } }), Object.defineProperty(e, n, i);
} : function(e, r, t, n) {
  n === void 0 && (n = t), e[n] = r[t];
}), AS = h && h.__setModuleDefault || (Object.create ? function(e, r) {
  Object.defineProperty(e, "default", { enumerable: !0, value: r });
} : function(e, r) {
  e.default = r;
}), RS = h && h.__importStar || function(e) {
  if (e && e.__esModule)
    return e;
  var r = {};
  if (e != null)
    for (var t in e)
      t !== "default" && Object.prototype.hasOwnProperty.call(e, t) && IS(r, e, t);
  return AS(r, e), r;
};
Object.defineProperty(Ji, "__esModule", { value: !0 });
Ji.ServerAddress = void 0;
var fl = ce, CS = RS(dt), $S = function() {
  function e(r, t, n, i) {
    this._host = (0, fl.assertString)(r, "host"), this._resolved = t != null ? (0, fl.assertString)(t, "resolved") : null, this._port = (0, fl.assertNumber)(n, "port"), this._hostPort = i, this._stringValue = t != null ? "".concat(i, "(").concat(t, ")") : "".concat(i);
  }
  return e.prototype.host = function() {
    return this._host;
  }, e.prototype.resolvedHost = function() {
    return this._resolved != null ? this._resolved : this._host;
  }, e.prototype.port = function() {
    return this._port;
  }, e.prototype.resolveWith = function(r) {
    return new e(this._host, r, this._port, this._hostPort);
  }, e.prototype.asHostPort = function() {
    return this._hostPort;
  }, e.prototype.asKey = function() {
    return this._hostPort;
  }, e.prototype.toString = function() {
    return this._stringValue;
  }, e.fromUrl = function(r) {
    var t = CS.parseDatabaseUrl(r);
    return new e(t.host, null, t.port, t.hostAndPort);
  }, e;
}();
Ji.ServerAddress = $S;
var $n = {}, Bf = {};
Object.defineProperty(Bf, "__esModule", { value: !0 });
var jS = function() {
  function e() {
  }
  return e.prototype.resolve = function() {
    throw new Error("Abstract function");
  }, e.prototype._resolveToItself = function(r) {
    return Promise.resolve([r]);
  }, e;
}();
Bf.default = jS;
var nu = {};
Object.defineProperty(nu, "__esModule", { value: !0 });
var NS = Ji;
function MS(e) {
  return Promise.resolve([e]);
}
var kS = function() {
  function e(r) {
    this._resolverFunction = r ?? MS;
  }
  return e.prototype.resolve = function(r) {
    var t = this;
    return new Promise(function(n) {
      return n(t._resolverFunction(r.asHostPort()));
    }).then(function(n) {
      if (!Array.isArray(n))
        throw new TypeError("Configured resolver function should either return an array of addresses or a Promise resolved with an array of addresses." + "Each address is '<host>:<port>'. Got: ".concat(n));
      return n.map(function(i) {
        return NS.ServerAddress.fromUrl(i);
      });
    });
  }, e;
}();
nu.default = kS;
var Iy = h && h.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty($n, "__esModule", { value: !0 });
$n.ConfiguredCustomResolver = $n.BaseHostNameResolver = void 0;
var DS = Iy(Bf);
$n.BaseHostNameResolver = DS.default;
var US = Iy(nu);
$n.ConfiguredCustomResolver = US.default;
var LS = h && h.__createBinding || (Object.create ? function(e, r, t, n) {
  n === void 0 && (n = t);
  var i = Object.getOwnPropertyDescriptor(r, t);
  (!i || ("get" in i ? !r.__esModule : i.writable || i.configurable)) && (i = { enumerable: !0, get: function() {
    return r[t];
  } }), Object.defineProperty(e, n, i);
} : function(e, r, t, n) {
  n === void 0 && (n = t), e[n] = r[t];
}), FS = h && h.__setModuleDefault || (Object.create ? function(e, r) {
  Object.defineProperty(e, "default", { enumerable: !0, value: r });
} : function(e, r) {
  e.default = r;
}), ht = h && h.__importStar || function(e) {
  if (e && e.__esModule)
    return e;
  var r = {};
  if (e != null)
    for (var t in e)
      t !== "default" && Object.prototype.hasOwnProperty.call(e, t) && LS(r, e, t);
  return FS(r, e), r;
};
Object.defineProperty(Oe, "__esModule", { value: !0 });
Oe.objectUtil = Oe.resolver = Oe.serverAddress = Oe.urlUtil = Oe.logger = Oe.transactionExecutor = Oe.txConfig = Oe.connectionHolder = Oe.constants = Oe.bookmarks = Oe.observer = Oe.temporalUtil = Oe.util = void 0;
var xS = ht(ce);
Oe.util = xS;
var BS = ht(Uf);
Oe.temporalUtil = BS;
var WS = ht(vr);
Oe.observer = WS;
var VS = ht(wr);
Oe.bookmarks = VS;
var qS = ht(se);
Oe.constants = qS;
var HS = ht(Pt);
Oe.connectionHolder = HS;
var zS = ht(Vn);
Oe.txConfig = zS;
var YS = ht(Qi);
Oe.transactionExecutor = YS;
var GS = ht(Xi);
Oe.logger = GS;
var KS = ht(dt);
Oe.urlUtil = KS;
var ZS = ht(Ji);
Oe.serverAddress = ZS;
var QS = ht($n);
Oe.resolver = QS;
var XS = ht(er);
Oe.objectUtil = XS;
var $r = h && h.__awaiter || function(e, r, t, n) {
  function i(o) {
    return o instanceof t ? o : new t(function(a) {
      a(o);
    });
  }
  return new (t || (t = Promise))(function(o, a) {
    function u(l) {
      try {
        s(n.next(l));
      } catch (f) {
        a(f);
      }
    }
    function c(l) {
      try {
        s(n.throw(l));
      } catch (f) {
        a(f);
      }
    }
    function s(l) {
      l.done ? o(l.value) : i(l.value).then(u, c);
    }
    s((n = n.apply(e, r || [])).next());
  });
}, jr = h && h.__generator || function(e, r) {
  var t = { label: 0, sent: function() {
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
    for (; a && (a = 0, s[0] && (t = 0)), t; )
      try {
        if (n = 1, i && (o = s[0] & 2 ? i.return : s[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, s[1])).done)
          return o;
        switch (i = 0, o && (s = [s[0] & 2, o.value]), s[0]) {
          case 0:
          case 1:
            o = s;
            break;
          case 4:
            return t.label++, { value: s[1], done: !1 };
          case 5:
            t.label++, i = s[1], s = [0];
            continue;
          case 7:
            s = t.ops.pop(), t.trys.pop();
            continue;
          default:
            if (o = t.trys, !(o = o.length > 0 && o[o.length - 1]) && (s[0] === 6 || s[0] === 2)) {
              t = 0;
              continue;
            }
            if (s[0] === 3 && (!o || s[1] > o[0] && s[1] < o[3])) {
              t.label = s[1];
              break;
            }
            if (s[0] === 6 && t.label < o[1]) {
              t.label = o[1], o = s;
              break;
            }
            if (o && t.label < o[2]) {
              t.label = o[2], t.ops.push(s);
              break;
            }
            o[2] && t.ops.pop(), t.trys.pop();
            continue;
        }
        s = r.call(e, t);
      } catch (l) {
        s = [6, l], i = 0;
      } finally {
        n = o = 0;
      }
    if (s[0] & 5)
      throw s[1];
    return { value: s[0] ? s[1] : void 0, done: !0 };
  }
}, JS = h && h.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(Zi, "__esModule", { value: !0 });
var eT = JS(Ge), Ay = Oe, yi = Ee, tT = Ay.connectionHolder.EMPTY_CONNECTION_HOLDER, rT = function(e) {
  console.log("Uncaught error when processing result: " + e);
}, nT = function(e) {
}, iT = function(e) {
}, oT = function() {
  function e(r, t, n, i, o) {
    o === void 0 && (o = { high: Number.MAX_VALUE, low: Number.MAX_VALUE }), this._stack = aT(), this._streamObserverPromise = r, this._p = null, this._query = t, this._parameters = n ?? {}, this._connectionHolder = i ?? tT, this._keys = null, this._summary = null, this._error = null, this._watermarks = o;
  }
  return e.prototype.keys = function() {
    var r = this;
    return this._keys !== null ? Promise.resolve(this._keys) : this._error !== null ? Promise.reject(this._error) : new Promise(function(t, n) {
      r._streamObserverPromise.then(function(i) {
        return i.subscribe(r._decorateObserver({
          onKeys: function(o) {
            return t(o);
          },
          onError: function(o) {
            return n(o);
          }
        }));
      }).catch(n);
    });
  }, e.prototype.summary = function() {
    var r = this;
    return this._summary !== null ? Promise.resolve(this._summary) : this._error !== null ? Promise.reject(this._error) : new Promise(function(t, n) {
      r._streamObserverPromise.then(function(i) {
        i.cancel(), i.subscribe(r._decorateObserver({
          onCompleted: function(o) {
            return t(o);
          },
          onError: function(o) {
            return n(o);
          }
        }));
      }).catch(n);
    });
  }, e.prototype._getOrCreatePromise = function() {
    var r = this;
    return this._p == null && (this._p = new Promise(function(t, n) {
      var i = [], o = {
        onNext: function(a) {
          i.push(a);
        },
        onCompleted: function(a) {
          t({ records: i, summary: a });
        },
        onError: function(a) {
          n(a);
        }
      };
      r.subscribe(o);
    })), this._p;
  }, e.prototype[Symbol.asyncIterator] = function() {
    var r = this;
    if (!this.isOpen()) {
      var t = (0, yi.newError)("Result is already consumed");
      return {
        next: function() {
          return Promise.reject(t);
        },
        peek: function() {
          return Promise.reject(t);
        }
      };
    }
    var n = { paused: !0, firstRun: !0, finished: !1 }, i = function() {
      var u, c;
      if (n.streaming != null) {
        var s = (c = (u = n.queuedObserver) === null || u === void 0 ? void 0 : u.size) !== null && c !== void 0 ? c : 0, l = s >= r._watermarks.high, f = s <= r._watermarks.low;
        l && !n.paused ? (n.paused = !0, n.streaming.pause()) : (f && n.paused || n.firstRun && !l) && (n.firstRun = !1, n.paused = !1, n.streaming.resume());
      }
    }, o = function() {
      return $r(r, void 0, void 0, function() {
        var u;
        return jr(this, function(c) {
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
        throw (0, yi.newError)("InvalidState: Result stream finished without Summary", yi.PROTOCOL_ERROR);
      return !0;
    };
    return {
      next: function() {
        return $r(r, void 0, void 0, function() {
          var u, c;
          return jr(this, function(s) {
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
        return $r(r, void 0, void 0, function() {
          var c, s, l;
          return jr(this, function(f) {
            switch (f.label) {
              case 0:
                return n.finished && a(n.summary) ? [2, { done: !0, value: u ?? n.summary }] : ((l = n.streaming) === null || l === void 0 || l.cancel(), [4, o()]);
              case 1:
                return c = f.sent(), [4, c.dequeueUntilDone()];
              case 2:
                return s = f.sent(), n.finished = !0, s.value = u ?? s.value, n.summary = s.value, [2, s];
            }
          });
        });
      },
      peek: function() {
        return $r(r, void 0, void 0, function() {
          var u;
          return jr(this, function(c) {
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
  }, e.prototype.then = function(r, t) {
    return this._getOrCreatePromise().then(r, t);
  }, e.prototype.catch = function(r) {
    return this._getOrCreatePromise().catch(r);
  }, e.prototype.finally = function(r) {
    return this._getOrCreatePromise().finally(r);
  }, e.prototype.subscribe = function(r) {
    this._subscribe(r).catch(function() {
    });
  }, e.prototype.isOpen = function() {
    return this._summary === null && this._error === null;
  }, e.prototype._subscribe = function(r, t) {
    t === void 0 && (t = !1);
    var n = this._decorateObserver(r);
    return this._streamObserverPromise.then(function(i) {
      return t && i.pause(), i.subscribe(n), i;
    }).catch(function(i) {
      return n.onError != null && n.onError(i), Promise.reject(i);
    });
  }, e.prototype._decorateObserver = function(r) {
    var t = this, n, i, o, a = (n = r.onCompleted) !== null && n !== void 0 ? n : nT, u = (i = r.onError) !== null && i !== void 0 ? i : rT, c = (o = r.onKeys) !== null && o !== void 0 ? o : iT, s = function(y) {
      t._releaseConnectionAndGetSummary(y).then(function(b) {
        return t._summary !== null ? a.call(r, t._summary) : (t._summary = b, a.call(r, b));
      }).catch(u);
    }, l = function(y) {
      t._connectionHolder.releaseConnection().then(function() {
        uT(y, t._stack), t._error = y, u.call(r, y);
      }).catch(u);
    }, f = function(y) {
      return t._keys = y, c.call(r, y);
    };
    return {
      onNext: r.onNext != null ? r.onNext.bind(r) : void 0,
      onKeys: f,
      onCompleted: s,
      onError: l
    };
  }, e.prototype._cancel = function() {
    this._summary === null && this._error === null && this._streamObserverPromise.then(function(r) {
      return r.cancel();
    }).catch(function() {
    });
  }, e.prototype._releaseConnectionAndGetSummary = function(r) {
    var t = Ay.util.validateQueryAndParameters(this._query, this._parameters, {
      skipAsserts: !0
    }), n = t.validatedQuery, i = t.params, o = this._connectionHolder;
    return o.getConnection().then(
      function(a) {
        return o.releaseConnection().then(function() {
          var u;
          return (u = a == null ? void 0 : a.protocol()) === null || u === void 0 ? void 0 : u.version;
        });
      },
      function(a) {
      }
    ).then(function(a) {
      return new eT.default(n, i, r, a);
    });
  }, e.prototype._createQueuedResultObserver = function(r) {
    var t = this;
    function n() {
      var s = {};
      return s.promise = new Promise(function(l, f) {
        s.resolve = l, s.reject = f;
      }), s;
    }
    function i(s) {
      return s instanceof Error;
    }
    function o() {
      var s;
      return $r(this, void 0, void 0, function() {
        var l;
        return jr(this, function(f) {
          switch (f.label) {
            case 0:
              if (a.length > 0) {
                if (l = (s = a.shift()) !== null && s !== void 0 ? s : (0, yi.newError)("Unexpected empty buffer", yi.PROTOCOL_ERROR), r(), i(l))
                  throw l;
                return [2, l];
              }
              return u.resolvable = n(), [4, u.resolvable.promise];
            case 1:
              return [2, f.sent()];
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
          a.push(s), r();
      },
      dequeue: o,
      dequeueUntilDone: function() {
        return $r(t, void 0, void 0, function() {
          var s;
          return jr(this, function(l) {
            switch (l.label) {
              case 0:
                return [4, o()];
              case 1:
                return s = l.sent(), s.done === !0 ? [2, s] : [3, 0];
              case 2:
                return [2];
            }
          });
        });
      },
      head: function() {
        return $r(t, void 0, void 0, function() {
          var s, s, l;
          return jr(this, function(f) {
            switch (f.label) {
              case 0:
                if (a.length > 0) {
                  if (s = a[0], i(s))
                    throw s;
                  return [2, s];
                }
                u.resolvable = n(), f.label = 1;
              case 1:
                return f.trys.push([1, 3, 4, 5]), [4, u.resolvable.promise];
              case 2:
                return s = f.sent(), a.unshift(s), [2, s];
              case 3:
                throw l = f.sent(), a.unshift(l), l;
              case 4:
                return r(), [7];
              case 5:
                return [2];
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
}();
function aT() {
  var e = new Error("");
  return e.stack != null ? e.stack.replace(/^Error(\n\r)*/, "") : null;
}
function uT(e, r) {
  r != null && (e.stack = e.toString() + `
` + r);
}
Zi.default = oT;
var iu = {};
Object.defineProperty(iu, "__esModule", { value: !0 });
var sT = function() {
  function e(r, t, n) {
    this.keys = r, this.records = t, this.summary = n;
  }
  return e;
}();
iu.default = sT;
var Wf = {};
Object.defineProperty(Wf, "__esModule", { value: !0 });
var cT = function() {
  function e() {
  }
  return e.prototype.acquireConnection = function(r) {
    throw Error("Not implemented");
  }, e.prototype.supportsMultiDb = function() {
    throw Error("Not implemented");
  }, e.prototype.supportsTransactionConfig = function() {
    throw Error("Not implemented");
  }, e.prototype.supportsUserImpersonation = function() {
    throw Error("Not implemented");
  }, e.prototype.verifyConnectivityAndGetServerInfo = function(r) {
    throw Error("Not implemented");
  }, e.prototype.getNegotiatedProtocolVersion = function() {
    throw Error("Not Implemented");
  }, e.prototype.close = function() {
    throw Error("Not implemented");
  }, e;
}();
Wf.default = cT;
var Vf = {};
Object.defineProperty(Vf, "__esModule", { value: !0 });
var lT = function() {
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
    get: function() {
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(e.prototype, "version", {
    get: function() {
    },
    enumerable: !1,
    configurable: !0
  }), e.prototype.isOpen = function() {
    return !1;
  }, e.prototype.protocol = function() {
    throw Error("Not implemented");
  }, e.prototype.connect = function(r, t) {
    throw Error("Not implemented");
  }, e.prototype.write = function(r, t, n) {
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
}();
Vf.default = lT;
var ou = {}, Ph = h && h.__awaiter || function(e, r, t, n) {
  function i(o) {
    return o instanceof t ? o : new t(function(a) {
      a(o);
    });
  }
  return new (t || (t = Promise))(function(o, a) {
    function u(l) {
      try {
        s(n.next(l));
      } catch (f) {
        a(f);
      }
    }
    function c(l) {
      try {
        s(n.throw(l));
      } catch (f) {
        a(f);
      }
    }
    function s(l) {
      l.done ? o(l.value) : i(l.value).then(u, c);
    }
    s((n = n.apply(e, r || [])).next());
  });
}, Ih = h && h.__generator || function(e, r) {
  var t = { label: 0, sent: function() {
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
    for (; a && (a = 0, s[0] && (t = 0)), t; )
      try {
        if (n = 1, i && (o = s[0] & 2 ? i.return : s[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, s[1])).done)
          return o;
        switch (i = 0, o && (s = [s[0] & 2, o.value]), s[0]) {
          case 0:
          case 1:
            o = s;
            break;
          case 4:
            return t.label++, { value: s[1], done: !1 };
          case 5:
            t.label++, i = s[1], s = [0];
            continue;
          case 7:
            s = t.ops.pop(), t.trys.pop();
            continue;
          default:
            if (o = t.trys, !(o = o.length > 0 && o[o.length - 1]) && (s[0] === 6 || s[0] === 2)) {
              t = 0;
              continue;
            }
            if (s[0] === 3 && (!o || s[1] > o[0] && s[1] < o[3])) {
              t.label = s[1];
              break;
            }
            if (s[0] === 6 && t.label < o[1]) {
              t.label = o[1], o = s;
              break;
            }
            if (o && t.label < o[2]) {
              t.label = o[2], t.ops.push(s);
              break;
            }
            o[2] && t.ops.pop(), t.trys.pop();
            continue;
        }
        s = r.call(e, t);
      } catch (l) {
        s = [6, l], i = 0;
      } finally {
        n = o = 0;
      }
    if (s[0] & 5)
      throw s[1];
    return { value: s[0] ? s[1] : void 0, done: !0 };
  }
}, fT = h && h.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(ou, "__esModule", { value: !0 });
var dT = ce, Ni = Pt, Ia = wr, hT = Vn, wt = vr, St = Ee, Ry = fT(Zi), vT = function() {
  function e(r) {
    var t = r.connectionHolder, n = r.onClose, i = r.onBookmarks, o = r.onConnection, a = r.reactive, u = r.fetchSize, c = r.impersonatedUser, s = r.highRecordWatermark, l = r.lowRecordWatermark, f = this;
    this._connectionHolder = t, this._reactive = a, this._state = Tt.ACTIVE, this._onClose = n, this._onBookmarks = i, this._onConnection = o, this._onError = this._onErrorCallback.bind(this), this._fetchSize = u, this._onComplete = this._onCompleteCallback.bind(this), this._results = [], this._impersonatedUser = c, this._lowRecordWatermak = l, this._highRecordWatermark = s, this._bookmarks = Ia.Bookmarks.empty(), this._acceptActive = function() {
    }, this._activePromise = new Promise(function(y, b) {
      f._acceptActive = y;
    });
  }
  return e.prototype._begin = function(r, t, n) {
    var i = this;
    this._connectionHolder.getConnection().then(function(o) {
      return Ph(i, void 0, void 0, function() {
        var a, u = this;
        return Ih(this, function(c) {
          switch (c.label) {
            case 0:
              return this._onConnection(), o == null ? [3, 2] : (a = this, [4, r()]);
            case 1:
              return a._bookmarks = c.sent(), [2, o.protocol().beginTransaction({
                bookmarks: this._bookmarks,
                txConfig: t,
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
              throw (0, St.newError)("No connection available");
          }
        });
      });
    }).catch(function(o) {
      n != null && n.onError(o), i._onError(o).catch(function() {
      });
    }).finally(function() {
      return i._acceptActive();
    });
  }, e.prototype.run = function(r, t) {
    var n = (0, dT.validateQueryAndParameters)(r, t), i = n.validatedQuery, o = n.params, a = this._state.run(i, o, {
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
    var r = this, t = this._state.commit({
      connectionHolder: this._connectionHolder,
      onError: this._onError,
      onComplete: function(n) {
        return r._onCompleteCallback(n, r._bookmarks);
      },
      onConnection: this._onConnection,
      pendingResults: this._results,
      preparationJob: this._activePromise
    });
    return this._state = t.state, this._onClose(), new Promise(function(n, i) {
      t.result.subscribe({
        onCompleted: function() {
          return n();
        },
        onError: function(o) {
          return i(o);
        }
      });
    });
  }, e.prototype.rollback = function() {
    var r = this._state.rollback({
      connectionHolder: this._connectionHolder,
      onError: this._onError,
      onComplete: this._onComplete,
      onConnection: this._onConnection,
      pendingResults: this._results,
      preparationJob: this._activePromise
    });
    return this._state = r.state, this._onClose(), new Promise(function(t, n) {
      r.result.subscribe({
        onCompleted: function() {
          return t();
        },
        onError: function(i) {
          return n(i);
        }
      });
    });
  }, e.prototype.isOpen = function() {
    return this._state === Tt.ACTIVE;
  }, e.prototype.close = function() {
    return Ph(this, void 0, void 0, function() {
      return Ih(this, function(r) {
        switch (r.label) {
          case 0:
            return this.isOpen() ? [4, this.rollback()] : [3, 2];
          case 1:
            r.sent(), r.label = 2;
          case 2:
            return [2];
        }
      });
    });
  }, e.prototype._onErrorCallback = function() {
    return this._state = Tt.FAILED, this._onClose(), this._connectionHolder.releaseConnection();
  }, e.prototype._onCompleteCallback = function(r, t) {
    this._onBookmarks(new Ia.Bookmarks(r == null ? void 0 : r.bookmark), t ?? Ia.Bookmarks.empty(), r == null ? void 0 : r.db);
  }, e;
}(), Tt = {
  ACTIVE: {
    commit: function(e) {
      var r = e.connectionHolder, t = e.onError, n = e.onComplete, i = e.onConnection, o = e.pendingResults, a = e.preparationJob;
      return {
        result: Ah(!0, r, t, n, i, o, a),
        state: Tt.SUCCEEDED
      };
    },
    rollback: function(e) {
      var r = e.connectionHolder, t = e.onError, n = e.onComplete, i = e.onConnection, o = e.pendingResults, a = e.preparationJob;
      return {
        result: Ah(!1, r, t, n, i, o, a),
        state: Tt.ROLLED_BACK
      };
    },
    run: function(e, r, t) {
      var n = t.connectionHolder, i = t.onError, o = t.onComplete, a = t.onConnection, u = t.reactive, c = t.fetchSize, s = t.highRecordWatermark, l = t.lowRecordWatermark, f = t.preparationJob, y = f ?? Promise.resolve(), b = n.getConnection().then(function(O) {
        return y.then(function() {
          return O;
        });
      }).then(function(O) {
        if (a(), O != null)
          return O.protocol().run(e, r, {
            bookmarks: Ia.Bookmarks.empty(),
            txConfig: hT.TxConfig.empty(),
            beforeError: i,
            afterComplete: o,
            reactive: u,
            fetchSize: c,
            highRecordWatermark: s,
            lowRecordWatermark: l
          });
        throw (0, St.newError)("No connection available");
      }).catch(function(O) {
        return new wt.FailedObserver({ error: O, onError: i });
      });
      return kt(b, e, r, n, s, l);
    }
  },
  FAILED: {
    commit: function(e) {
      var r = e.connectionHolder, t = e.onError;
      return e.onComplete, {
        result: kt(
          new wt.FailedObserver({
            error: (0, St.newError)("Cannot commit this transaction, because it has been rolled back either because of an error or explicit termination."),
            onError: t
          }),
          "COMMIT",
          {},
          r,
          0,
          0
        ),
        state: Tt.FAILED
      };
    },
    rollback: function(e) {
      var r = e.connectionHolder;
      return e.onError, e.onComplete, {
        result: kt(
          new wt.CompletedObserver(),
          "ROLLBACK",
          {},
          r,
          0,
          0
        ),
        state: Tt.FAILED
      };
    },
    run: function(e, r, t) {
      var n = t.connectionHolder, i = t.onError;
      return t.onComplete, kt(
        new wt.FailedObserver({
          error: (0, St.newError)("Cannot run query in this transaction, because it has been rolled back either because of an error or explicit termination."),
          onError: i
        }),
        e,
        r,
        n,
        0,
        0
      );
    }
  },
  SUCCEEDED: {
    commit: function(e) {
      var r = e.connectionHolder, t = e.onError;
      return e.onComplete, {
        result: kt(
          new wt.FailedObserver({
            error: (0, St.newError)("Cannot commit this transaction, because it has already been committed."),
            onError: t
          }),
          "COMMIT",
          {},
          Ni.EMPTY_CONNECTION_HOLDER,
          0,
          0
        ),
        state: Tt.SUCCEEDED,
        connectionHolder: r
      };
    },
    rollback: function(e) {
      var r = e.connectionHolder, t = e.onError;
      return e.onComplete, {
        result: kt(
          new wt.FailedObserver({
            error: (0, St.newError)("Cannot rollback this transaction, because it has already been committed."),
            onError: t
          }),
          "ROLLBACK",
          {},
          Ni.EMPTY_CONNECTION_HOLDER,
          0,
          0
        ),
        state: Tt.SUCCEEDED,
        connectionHolder: r
      };
    },
    run: function(e, r, t) {
      var n = t.connectionHolder, i = t.onError;
      return t.onComplete, kt(
        new wt.FailedObserver({
          error: (0, St.newError)("Cannot run query in this transaction, because it has already been committed."),
          onError: i
        }),
        e,
        r,
        n,
        0,
        0
      );
    }
  },
  ROLLED_BACK: {
    commit: function(e) {
      var r = e.connectionHolder, t = e.onError;
      return e.onComplete, {
        result: kt(
          new wt.FailedObserver({
            error: (0, St.newError)("Cannot commit this transaction, because it has already been rolled back."),
            onError: t
          }),
          "COMMIT",
          {},
          r,
          0,
          0
        ),
        state: Tt.ROLLED_BACK
      };
    },
    rollback: function(e) {
      var r = e.connectionHolder;
      return e.onError, e.onComplete, {
        result: kt(
          new wt.FailedObserver({
            error: (0, St.newError)("Cannot rollback this transaction, because it has already been rolled back.")
          }),
          "ROLLBACK",
          {},
          r,
          0,
          0
        ),
        state: Tt.ROLLED_BACK
      };
    },
    run: function(e, r, t) {
      var n = t.connectionHolder, i = t.onError;
      return t.onComplete, kt(
        new wt.FailedObserver({
          error: (0, St.newError)("Cannot run query in this transaction, because it has already been rolled back."),
          onError: i
        }),
        e,
        r,
        n,
        0,
        0
      );
    }
  }
};
function Ah(e, r, t, n, i, o, a) {
  var u = a ?? Promise.resolve(), c = r.getConnection().then(function(s) {
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
          beforeError: t,
          afterComplete: n
        }) : s.protocol().rollbackTransaction({
          beforeError: t,
          afterComplete: n
        });
      throw (0, St.newError)("No connection available");
    });
  }).catch(function(s) {
    return new wt.FailedObserver({ error: s, onError: t });
  });
  return new Ry.default(c, e ? "COMMIT" : "ROLLBACK", {}, r, {
    high: Number.MAX_VALUE,
    low: Number.MAX_VALUE
  });
}
function kt(e, r, t, n, i, o) {
  return n === void 0 && (n = Ni.EMPTY_CONNECTION_HOLDER), new Ry.default(Promise.resolve(e), r, t, new Ni.ReadOnlyConnectionHolder(n ?? Ni.EMPTY_CONNECTION_HOLDER), {
    low: o,
    high: i
  });
}
ou.default = vT;
var au = {};
Object.defineProperty(au, "__esModule", { value: !0 });
var pT = function() {
  function e(r) {
    var t = r.run;
    this._run = t;
  }
  return e.fromTransaction = function(r) {
    return new e({
      run: r.run.bind(r)
    });
  }, e.prototype.run = function(r, t) {
    return this._run(r, t);
  }, e;
}();
au.default = pT;
var uu = {}, _T = h && h.__extends || function() {
  var e = function(r, t) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var o in i)
        Object.prototype.hasOwnProperty.call(i, o) && (n[o] = i[o]);
    }, e(r, t);
  };
  return function(r, t) {
    if (typeof t != "function" && t !== null)
      throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
    e(r, t);
    function n() {
      this.constructor = r;
    }
    r.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}(), Da = h && h.__assign || function() {
  return Da = Object.assign || function(e) {
    for (var r, t = 1, n = arguments.length; t < n; t++) {
      r = arguments[t];
      for (var i in r)
        Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
    }
    return e;
  }, Da.apply(this, arguments);
}, yT = h && h.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
}, Cy;
Object.defineProperty(uu, "__esModule", { value: !0 });
var mT = yT(ou), bT = function(e) {
  _T(r, e);
  function r(t) {
    var n = t.connectionHolder, i = t.onClose, o = t.onBookmarks, a = t.onConnection, u = t.reactive, c = t.fetchSize, s = t.impersonatedUser, l = t.highRecordWatermark, f = t.lowRecordWatermark, y = e.call(this, {
      connectionHolder: n,
      onClose: i,
      onBookmarks: o,
      onConnection: a,
      reactive: u,
      fetchSize: c,
      impersonatedUser: s,
      highRecordWatermark: l,
      lowRecordWatermark: f
    }) || this;
    return y[Cy] = "TransactionPromise", y;
  }
  return r.prototype.then = function(t, n) {
    return this._getOrCreateBeginPromise().then(t, n);
  }, r.prototype.catch = function(t) {
    return this._getOrCreateBeginPromise().catch(t);
  }, r.prototype.finally = function(t) {
    return this._getOrCreateBeginPromise().finally(t);
  }, r.prototype._getOrCreateBeginPromise = function() {
    var t = this;
    return this._beginPromise == null && (this._beginPromise = new Promise(function(n, i) {
      t._resolve = n, t._reject = i, t._beginError != null && i(t._beginError), t._beginMetadata != null && n(t._toTransaction());
    })), this._beginPromise;
  }, r.prototype._toTransaction = function() {
    return Da(Da({}, this), { run: e.prototype.run.bind(this), commit: e.prototype.commit.bind(this), rollback: e.prototype.rollback.bind(this), close: e.prototype.close.bind(this), isOpen: e.prototype.isOpen.bind(this), _begin: this._begin.bind(this) });
  }, r.prototype._begin = function(t, n) {
    return e.prototype._begin.call(this, t, n, {
      onError: this._onBeginError.bind(this),
      onComplete: this._onBeginMetadata.bind(this)
    });
  }, r.prototype._onBeginError = function(t) {
    this._beginError = t, this._reject != null && this._reject(t);
  }, r.prototype._onBeginMetadata = function(t) {
    this._beginMetadata = t ?? {}, this._resolve != null && this._resolve(this._toTransaction());
  }, r;
}(mT.default);
Cy = Symbol.toStringTag;
uu.default = bT;
var su = {}, mi = h && h.__awaiter || function(e, r, t, n) {
  function i(o) {
    return o instanceof t ? o : new t(function(a) {
      a(o);
    });
  }
  return new (t || (t = Promise))(function(o, a) {
    function u(l) {
      try {
        s(n.next(l));
      } catch (f) {
        a(f);
      }
    }
    function c(l) {
      try {
        s(n.throw(l));
      } catch (f) {
        a(f);
      }
    }
    function s(l) {
      l.done ? o(l.value) : i(l.value).then(u, c);
    }
    s((n = n.apply(e, r || [])).next());
  });
}, bi = h && h.__generator || function(e, r) {
  var t = { label: 0, sent: function() {
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
    for (; a && (a = 0, s[0] && (t = 0)), t; )
      try {
        if (n = 1, i && (o = s[0] & 2 ? i.return : s[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, s[1])).done)
          return o;
        switch (i = 0, o && (s = [s[0] & 2, o.value]), s[0]) {
          case 0:
          case 1:
            o = s;
            break;
          case 4:
            return t.label++, { value: s[1], done: !1 };
          case 5:
            t.label++, i = s[1], s = [0];
            continue;
          case 7:
            s = t.ops.pop(), t.trys.pop();
            continue;
          default:
            if (o = t.trys, !(o = o.length > 0 && o[o.length - 1]) && (s[0] === 6 || s[0] === 2)) {
              t = 0;
              continue;
            }
            if (s[0] === 3 && (!o || s[1] > o[0] && s[1] < o[3])) {
              t.label = s[1];
              break;
            }
            if (s[0] === 6 && t.label < o[1]) {
              t.label = o[1], o = s;
              break;
            }
            if (o && t.label < o[2]) {
              t.label = o[2], t.ops.push(s);
              break;
            }
            o[2] && t.ops.pop(), t.trys.pop();
            continue;
        }
        s = r.call(e, t);
      } catch (l) {
        s = [6, l], i = 0;
      } finally {
        n = o = 0;
      }
    if (s[0] & 5)
      throw s[1];
    return { value: s[0] ? s[1] : void 0, done: !0 };
  }
}, ia = h && h.__read || function(e, r) {
  var t = typeof Symbol == "function" && e[Symbol.iterator];
  if (!t)
    return e;
  var n = t.call(e), i, o = [], a;
  try {
    for (; (r === void 0 || r-- > 0) && !(i = n.next()).done; )
      o.push(i.value);
  } catch (u) {
    a = { error: u };
  } finally {
    try {
      i && !i.done && (t = n.return) && t.call(n);
    } finally {
      if (a)
        throw a.error;
    }
  }
  return o;
}, oa = h && h.__spreadArray || function(e, r, t) {
  if (t || arguments.length === 2)
    for (var n = 0, i = r.length, o; n < i; n++)
      (o || !(n in r)) && (o || (o = Array.prototype.slice.call(r, 0, n)), o[n] = r[n]);
  return e.concat(o || Array.prototype.slice.call(r));
}, qf = h && h.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(su, "__esModule", { value: !0 });
var dl = vr, gT = ce, vt = se, Gt = Ee, OT = qf(Zi), Rh = Pt, wT = Qi, gi = wr, dr = Vn, ET = qf(uu), ST = qf(au), TT = function() {
  function e(r) {
    var t = r.mode, n = r.connectionProvider, i = r.bookmarks, o = r.database, a = r.config, u = r.reactive, c = r.fetchSize, s = r.impersonatedUser, l = r.bookmarkManager;
    this._mode = t, this._database = o, this._reactive = u, this._fetchSize = c, this._onDatabaseNameResolved = this._onDatabaseNameResolved.bind(this), this._getConnectionAcquistionBookmarks = this._getConnectionAcquistionBookmarks.bind(this), this._readConnectionHolder = new Rh.ConnectionHolder({
      mode: vt.ACCESS_MODE_READ,
      database: o,
      bookmarks: i,
      connectionProvider: n,
      impersonatedUser: s,
      onDatabaseNameResolved: this._onDatabaseNameResolved,
      getConnectionAcquistionBookmarks: this._getConnectionAcquistionBookmarks
    }), this._writeConnectionHolder = new Rh.ConnectionHolder({
      mode: vt.ACCESS_MODE_WRITE,
      database: o,
      bookmarks: i,
      connectionProvider: n,
      impersonatedUser: s,
      onDatabaseNameResolved: this._onDatabaseNameResolved,
      getConnectionAcquistionBookmarks: this._getConnectionAcquistionBookmarks
    }), this._open = !0, this._hasTx = !1, this._impersonatedUser = s, this._lastBookmarks = i ?? gi.Bookmarks.empty(), this._configuredBookmarks = this._lastBookmarks, this._transactionExecutor = PT(a), this._databaseNameResolved = this._database !== "";
    var f = this._calculateWatermaks();
    this._lowRecordWatermark = f.low, this._highRecordWatermark = f.high, this._results = [], this._bookmarkManager = l;
  }
  return e.prototype.run = function(r, t, n) {
    var i = this, o = (0, gT.validateQueryAndParameters)(r, t), a = o.validatedQuery, u = o.params, c = n != null ? new dr.TxConfig(n) : dr.TxConfig.empty(), s = this._run(a, u, function(l) {
      return mi(i, void 0, void 0, function() {
        var f, y = this;
        return bi(this, function(b) {
          switch (b.label) {
            case 0:
              return [4, this._bookmarks()];
            case 1:
              return f = b.sent(), this._assertSessionIsOpen(), [2, l.protocol().run(a, u, {
                bookmarks: f,
                txConfig: c,
                mode: this._mode,
                database: this._database,
                impersonatedUser: this._impersonatedUser,
                afterComplete: function(O) {
                  return y._onCompleteCallback(O, f);
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
  }, e.prototype._run = function(r, t, n) {
    var i = this._connectionHolderWithMode(this._mode), o;
    this._open ? !this._hasTx && i.initializeConnection() ? o = i.getConnection().then(function(u) {
      return n(u);
    }).catch(function(u) {
      return Promise.resolve(new dl.FailedObserver({ error: u }));
    }) : o = Promise.resolve(new dl.FailedObserver({
      error: (0, Gt.newError)("Queries cannot be run directly on a session with an open transaction; either run from within the transaction or use a different session.")
    })) : o = Promise.resolve(new dl.FailedObserver({
      error: (0, Gt.newError)("Cannot run query in a closed session.")
    }));
    var a = { high: this._highRecordWatermark, low: this._lowRecordWatermark };
    return new OT.default(o, r, t, i, a);
  }, e.prototype._acquireConnection = function(r) {
    var t = this, n, i = this._connectionHolderWithMode(this._mode);
    return this._open ? !this._hasTx && i.initializeConnection() ? n = i.getConnection().then(function(o) {
      return r(o);
    }).then(function(o) {
      return mi(t, void 0, void 0, function() {
        return bi(this, function(a) {
          switch (a.label) {
            case 0:
              return [4, i.releaseConnection()];
            case 1:
              return a.sent(), [2, o];
          }
        });
      });
    }) : n = Promise.reject((0, Gt.newError)("Queries cannot be run directly on a session with an open transaction; either run from within the transaction or use a different session.")) : n = Promise.reject((0, Gt.newError)("Cannot run query in a closed session.")), n;
  }, e.prototype.beginTransaction = function(r) {
    var t = r, n = dr.TxConfig.empty();
    return t != null && (n = new dr.TxConfig(t)), this._beginTransaction(this._mode, n);
  }, e.prototype._beginTransaction = function(r, t) {
    var n = this;
    if (!this._open)
      throw (0, Gt.newError)("Cannot begin a transaction on a closed session.");
    if (this._hasTx)
      throw (0, Gt.newError)("You cannot begin a transaction on a session with an open transaction; either run from within the transaction or use a different session.");
    var i = e._validateSessionMode(r), o = this._connectionHolderWithMode(i);
    o.initializeConnection(), this._hasTx = !0;
    var a = new ET.default({
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
    }, t), a;
  }, e.prototype._assertSessionIsOpen = function() {
    if (!this._open)
      throw (0, Gt.newError)("You cannot run more transactions on a closed session.");
  }, e.prototype._transactionClosed = function() {
    this._hasTx = !1;
  }, e.prototype.lastBookmark = function() {
    return this.lastBookmarks();
  }, e.prototype.lastBookmarks = function() {
    return this._lastBookmarks.values();
  }, e.prototype._bookmarks = function() {
    var r;
    return mi(this, void 0, void 0, function() {
      var t;
      return bi(this, function(n) {
        switch (n.label) {
          case 0:
            return [4, (r = this._bookmarkManager) === null || r === void 0 ? void 0 : r.getBookmarks()];
          case 1:
            return t = n.sent(), t === void 0 ? [2, this._lastBookmarks] : [2, new gi.Bookmarks(oa(oa([], ia(t), !1), ia(this._configuredBookmarks), !1))];
        }
      });
    });
  }, e.prototype.readTransaction = function(r, t) {
    var n = new dr.TxConfig(t);
    return this._runTransaction(vt.ACCESS_MODE_READ, n, r);
  }, e.prototype.writeTransaction = function(r, t) {
    var n = new dr.TxConfig(t);
    return this._runTransaction(vt.ACCESS_MODE_WRITE, n, r);
  }, e.prototype._runTransaction = function(r, t, n) {
    var i = this;
    return this._transactionExecutor.execute(function() {
      return i._beginTransaction(r, t);
    }, n);
  }, e.prototype.executeRead = function(r, t) {
    var n = new dr.TxConfig(t);
    return this._executeInTransaction(vt.ACCESS_MODE_READ, n, r);
  }, e.prototype.executeWrite = function(r, t) {
    var n = new dr.TxConfig(t);
    return this._executeInTransaction(vt.ACCESS_MODE_WRITE, n, r);
  }, e.prototype._executeInTransaction = function(r, t, n) {
    var i = this;
    return this._transactionExecutor.execute(function() {
      return i._beginTransaction(r, t);
    }, n, ST.default.fromTransaction);
  }, e.prototype._onDatabaseNameResolved = function(r) {
    if (!this._databaseNameResolved) {
      var t = r ?? "";
      this._database = t, this._readConnectionHolder.setDatabase(t), this._writeConnectionHolder.setDatabase(t), this._databaseNameResolved = !0;
    }
  }, e.prototype._getConnectionAcquistionBookmarks = function() {
    var r;
    return mi(this, void 0, void 0, function() {
      var t;
      return bi(this, function(n) {
        switch (n.label) {
          case 0:
            return [4, (r = this._bookmarkManager) === null || r === void 0 ? void 0 : r.getBookmarks()];
          case 1:
            return t = n.sent(), t === void 0 ? [2, this._lastBookmarks] : [2, new gi.Bookmarks(oa(oa([], ia(this._configuredBookmarks), !1), ia(t), !1))];
        }
      });
    });
  }, e.prototype._updateBookmarks = function(r, t, n) {
    var i, o, a;
    r != null && !r.isEmpty() && ((i = this._bookmarkManager) === null || i === void 0 || i.updateBookmarks((o = t == null ? void 0 : t.values()) !== null && o !== void 0 ? o : [], (a = r == null ? void 0 : r.values()) !== null && a !== void 0 ? a : []), this._lastBookmarks = r, this._configuredBookmarks = gi.Bookmarks.empty());
  }, e.prototype.close = function() {
    return mi(this, void 0, void 0, function() {
      return bi(this, function(r) {
        switch (r.label) {
          case 0:
            return this._open ? (this._open = !1, this._results.forEach(function(t) {
              return t._cancel();
            }), this._transactionExecutor.close(), [4, this._readConnectionHolder.close(this._hasTx)]) : [3, 3];
          case 1:
            return r.sent(), [4, this._writeConnectionHolder.close(this._hasTx)];
          case 2:
            r.sent(), r.label = 3;
          case 3:
            return [2];
        }
      });
    });
  }, e.prototype._connectionHolderWithMode = function(r) {
    if (r === vt.ACCESS_MODE_READ)
      return this._readConnectionHolder;
    if (r === vt.ACCESS_MODE_WRITE)
      return this._writeConnectionHolder;
    throw (0, Gt.newError)("Unknown access mode: " + r);
  }, e.prototype._onCompleteCallback = function(r, t) {
    this._updateBookmarks(new gi.Bookmarks(r.bookmark), t, r.db);
  }, e.prototype._calculateWatermaks = function() {
    return this._fetchSize === vt.FETCH_ALL ? {
      low: Number.MAX_VALUE,
      high: Number.MAX_VALUE
    } : {
      low: 0.3 * this._fetchSize,
      high: 0.7 * this._fetchSize
    };
  }, e._validateSessionMode = function(r) {
    var t = r ?? vt.ACCESS_MODE_WRITE;
    if (t !== vt.ACCESS_MODE_READ && t !== vt.ACCESS_MODE_WRITE)
      throw (0, Gt.newError)("Illegal session mode " + t);
    return t;
  }, e;
}();
function PT(e) {
  var r, t = (r = e == null ? void 0 : e.maxTransactionRetryTime) !== null && r !== void 0 ? r : null;
  return new wT.TransactionExecutor(t);
}
su.default = TT;
var rt = {}, qn = {}, Ua = h && h.__awaiter || function(e, r, t, n) {
  function i(o) {
    return o instanceof t ? o : new t(function(a) {
      a(o);
    });
  }
  return new (t || (t = Promise))(function(o, a) {
    function u(l) {
      try {
        s(n.next(l));
      } catch (f) {
        a(f);
      }
    }
    function c(l) {
      try {
        s(n.throw(l));
      } catch (f) {
        a(f);
      }
    }
    function s(l) {
      l.done ? o(l.value) : i(l.value).then(u, c);
    }
    s((n = n.apply(e, r || [])).next());
  });
}, La = h && h.__generator || function(e, r) {
  var t = { label: 0, sent: function() {
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
    for (; a && (a = 0, s[0] && (t = 0)), t; )
      try {
        if (n = 1, i && (o = s[0] & 2 ? i.return : s[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, s[1])).done)
          return o;
        switch (i = 0, o && (s = [s[0] & 2, o.value]), s[0]) {
          case 0:
          case 1:
            o = s;
            break;
          case 4:
            return t.label++, { value: s[1], done: !1 };
          case 5:
            t.label++, i = s[1], s = [0];
            continue;
          case 7:
            s = t.ops.pop(), t.trys.pop();
            continue;
          default:
            if (o = t.trys, !(o = o.length > 0 && o[o.length - 1]) && (s[0] === 6 || s[0] === 2)) {
              t = 0;
              continue;
            }
            if (s[0] === 3 && (!o || s[1] > o[0] && s[1] < o[3])) {
              t.label = s[1];
              break;
            }
            if (s[0] === 6 && t.label < o[1]) {
              t.label = o[1], o = s;
              break;
            }
            if (o && t.label < o[2]) {
              t.label = o[2], t.ops.push(s);
              break;
            }
            o[2] && t.ops.pop(), t.trys.pop();
            continue;
        }
        s = r.call(e, t);
      } catch (l) {
        s = [6, l], i = 0;
      } finally {
        n = o = 0;
      }
    if (s[0] & 5)
      throw s[1];
    return { value: s[0] ? s[1] : void 0, done: !0 };
  }
}, hl = h && h.__values || function(e) {
  var r = typeof Symbol == "function" && Symbol.iterator, t = r && e[r], n = 0;
  if (t)
    return t.call(e);
  if (e && typeof e.length == "number")
    return {
      next: function() {
        return e && n >= e.length && (e = void 0), { value: e && e[n++], done: !e };
      }
    };
  throw new TypeError(r ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, Ch = h && h.__read || function(e, r) {
  var t = typeof Symbol == "function" && e[Symbol.iterator];
  if (!t)
    return e;
  var n = t.call(e), i, o = [], a;
  try {
    for (; (r === void 0 || r-- > 0) && !(i = n.next()).done; )
      o.push(i.value);
  } catch (u) {
    a = { error: u };
  } finally {
    try {
      i && !i.done && (t = n.return) && t.call(n);
    } finally {
      if (a)
        throw a.error;
    }
  }
  return o;
}, $h = h && h.__spreadArray || function(e, r, t) {
  if (t || arguments.length === 2)
    for (var n = 0, i = r.length, o; n < i; n++)
      (o || !(n in r)) && (o || (o = Array.prototype.slice.call(r, 0, n)), o[n] = r[n]);
  return e.concat(o || Array.prototype.slice.call(r));
};
Object.defineProperty(qn, "__esModule", { value: !0 });
qn.bookmarkManager = void 0;
var IT = function() {
  function e() {
    throw new Error("Not implemented");
  }
  return e.prototype.updateBookmarks = function(r, t) {
    return Ua(this, void 0, void 0, function() {
      return La(this, function(n) {
        throw new Error("Not implemented");
      });
    });
  }, e.prototype.getBookmarks = function() {
    return Ua(this, void 0, void 0, function() {
      return La(this, function(r) {
        throw new Error("Not implemented");
      });
    });
  }, e;
}();
qn.default = IT;
function AT(e) {
  e === void 0 && (e = {});
  var r = new Set(e.initialBookmarks);
  return new RT(r, e.bookmarksSupplier, e.bookmarksConsumer);
}
qn.bookmarkManager = AT;
var RT = function() {
  function e(r, t, n) {
    this._bookmarks = r, this._bookmarksSupplier = t, this._bookmarksConsumer = n;
  }
  return e.prototype.updateBookmarks = function(r, t) {
    return Ua(this, void 0, void 0, function() {
      var n, i, o, c, a, u, c, s, l, f, y;
      return La(this, function(b) {
        switch (b.label) {
          case 0:
            n = this._bookmarks;
            try {
              for (i = hl(r), o = i.next(); !o.done; o = i.next())
                c = o.value, n.delete(c);
            } catch (O) {
              s = { error: O };
            } finally {
              try {
                o && !o.done && (l = i.return) && l.call(i);
              } finally {
                if (s)
                  throw s.error;
              }
            }
            try {
              for (a = hl(t), u = a.next(); !u.done; u = a.next())
                c = u.value, n.add(c);
            } catch (O) {
              f = { error: O };
            } finally {
              try {
                u && !u.done && (y = a.return) && y.call(a);
              } finally {
                if (f)
                  throw f.error;
              }
            }
            return typeof this._bookmarksConsumer != "function" ? [3, 2] : [4, this._bookmarksConsumer($h([], Ch(n), !1))];
          case 1:
            b.sent(), b.label = 2;
          case 2:
            return [2];
        }
      });
    });
  }, e.prototype.getBookmarks = function() {
    var r;
    return Ua(this, void 0, void 0, function() {
      var t, n, i, o, a, u, c;
      return La(this, function(s) {
        switch (s.label) {
          case 0:
            return t = new Set(this._bookmarks), typeof this._bookmarksSupplier != "function" ? [3, 2] : [4, this._bookmarksSupplier()];
          case 1:
            n = (r = s.sent()) !== null && r !== void 0 ? r : [];
            try {
              for (i = hl(n), o = i.next(); !o.done; o = i.next())
                a = o.value, t.add(a);
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
            return [2, $h([], Ch(t), !1)];
        }
      });
    });
  }, e;
}(), cu = {}, $y = h && h.__awaiter || function(e, r, t, n) {
  function i(o) {
    return o instanceof t ? o : new t(function(a) {
      a(o);
    });
  }
  return new (t || (t = Promise))(function(o, a) {
    function u(l) {
      try {
        s(n.next(l));
      } catch (f) {
        a(f);
      }
    }
    function c(l) {
      try {
        s(n.throw(l));
      } catch (f) {
        a(f);
      }
    }
    function s(l) {
      l.done ? o(l.value) : i(l.value).then(u, c);
    }
    s((n = n.apply(e, r || [])).next());
  });
}, jy = h && h.__generator || function(e, r) {
  var t = { label: 0, sent: function() {
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
    for (; a && (a = 0, s[0] && (t = 0)), t; )
      try {
        if (n = 1, i && (o = s[0] & 2 ? i.return : s[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, s[1])).done)
          return o;
        switch (i = 0, o && (s = [s[0] & 2, o.value]), s[0]) {
          case 0:
          case 1:
            o = s;
            break;
          case 4:
            return t.label++, { value: s[1], done: !1 };
          case 5:
            t.label++, i = s[1], s = [0];
            continue;
          case 7:
            s = t.ops.pop(), t.trys.pop();
            continue;
          default:
            if (o = t.trys, !(o = o.length > 0 && o[o.length - 1]) && (s[0] === 6 || s[0] === 2)) {
              t = 0;
              continue;
            }
            if (s[0] === 3 && (!o || s[1] > o[0] && s[1] < o[3])) {
              t.label = s[1];
              break;
            }
            if (s[0] === 6 && t.label < o[1]) {
              t.label = o[1], o = s;
              break;
            }
            if (o && t.label < o[2]) {
              t.label = o[2], t.ops.push(s);
              break;
            }
            o[2] && t.ops.pop(), t.trys.pop();
            continue;
        }
        s = r.call(e, t);
      } catch (l) {
        s = [6, l], i = 0;
      } finally {
        n = o = 0;
      }
    if (s[0] & 5)
      throw s[1];
    return { value: s[0] ? s[1] : void 0, done: !0 };
  }
}, CT = h && h.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(cu, "__esModule", { value: !0 });
var $T = CT(iu), jT = Ee;
function NT(e) {
  return $y(this, void 0, void 0, function() {
    var r, t, n, i;
    return jy(this, function(o) {
      switch (o.label) {
        case 0:
          return [4, e];
        case 1:
          return r = o.sent(), t = r.summary, n = r.records, [4, e.keys()];
        case 2:
          return i = o.sent(), [2, new $T.default(i, n, t)];
      }
    });
  });
}
var MT = function() {
  function e() {
  }
  return e.prototype.eagerResultTransformer = function() {
    return NT;
  }, e.prototype.mappedResultTransformer = function(r) {
    var t = this;
    if (r == null || r.collect == null && r.map == null)
      throw (0, jT.newError)("Requires a map or/and a collect functions.");
    return function(n) {
      return $y(t, void 0, void 0, function() {
        return jy(this, function(i) {
          switch (i.label) {
            case 0:
              return [4, new Promise(function(o, a) {
                var u = { records: [], keys: [] };
                n.subscribe({
                  onKeys: function(c) {
                    u.keys = c;
                  },
                  onNext: function(c) {
                    r.map != null ? u.records.push(r.map(c)) : u.records.push(c);
                  },
                  onCompleted: function(c) {
                    if (r.collect != null)
                      o(r.collect(u.records, c, u.keys));
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
}(), Ny = new MT();
Object.freeze(Ny);
cu.default = Ny;
var Hf = {}, jh = h && h.__awaiter || function(e, r, t, n) {
  function i(o) {
    return o instanceof t ? o : new t(function(a) {
      a(o);
    });
  }
  return new (t || (t = Promise))(function(o, a) {
    function u(l) {
      try {
        s(n.next(l));
      } catch (f) {
        a(f);
      }
    }
    function c(l) {
      try {
        s(n.throw(l));
      } catch (f) {
        a(f);
      }
    }
    function s(l) {
      l.done ? o(l.value) : i(l.value).then(u, c);
    }
    s((n = n.apply(e, r || [])).next());
  });
}, Nh = h && h.__generator || function(e, r) {
  var t = { label: 0, sent: function() {
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
    for (; a && (a = 0, s[0] && (t = 0)), t; )
      try {
        if (n = 1, i && (o = s[0] & 2 ? i.return : s[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, s[1])).done)
          return o;
        switch (i = 0, o && (s = [s[0] & 2, o.value]), s[0]) {
          case 0:
          case 1:
            o = s;
            break;
          case 4:
            return t.label++, { value: s[1], done: !1 };
          case 5:
            t.label++, i = s[1], s = [0];
            continue;
          case 7:
            s = t.ops.pop(), t.trys.pop();
            continue;
          default:
            if (o = t.trys, !(o = o.length > 0 && o[o.length - 1]) && (s[0] === 6 || s[0] === 2)) {
              t = 0;
              continue;
            }
            if (s[0] === 3 && (!o || s[1] > o[0] && s[1] < o[3])) {
              t.label = s[1];
              break;
            }
            if (s[0] === 6 && t.label < o[1]) {
              t.label = o[1], o = s;
              break;
            }
            if (o && t.label < o[2]) {
              t.label = o[2], t.ops.push(s);
              break;
            }
            o[2] && t.ops.pop(), t.trys.pop();
            continue;
        }
        s = r.call(e, t);
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
Object.defineProperty(Hf, "__esModule", { value: !0 });
var kT = function() {
  function e(r) {
    this._createSession = r;
  }
  return e.prototype.execute = function(r, t, n) {
    return jh(this, void 0, void 0, function() {
      var i, o, a = this;
      return Nh(this, function(u) {
        switch (u.label) {
          case 0:
            i = this._createSession({
              database: r.database,
              bookmarkManager: r.bookmarkManager,
              impersonatedUser: r.impersonatedUser
            }), u.label = 1;
          case 1:
            return u.trys.push([1, , 3, 5]), o = r.routing === "READERS" ? i.executeRead.bind(i) : i.executeWrite.bind(i), [4, o(function(c) {
              return jh(a, void 0, void 0, function() {
                var s;
                return Nh(this, function(l) {
                  switch (l.label) {
                    case 0:
                      return s = c.run(t, n), [4, r.resultTransformer(s)];
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
            return u.sent(), [7];
          case 5:
            return [2];
        }
      });
    });
  }, e;
}();
Hf.default = kT;
var DT = h && h.__awaiter || function(e, r, t, n) {
  function i(o) {
    return o instanceof t ? o : new t(function(a) {
      a(o);
    });
  }
  return new (t || (t = Promise))(function(o, a) {
    function u(l) {
      try {
        s(n.next(l));
      } catch (f) {
        a(f);
      }
    }
    function c(l) {
      try {
        s(n.throw(l));
      } catch (f) {
        a(f);
      }
    }
    function s(l) {
      l.done ? o(l.value) : i(l.value).then(u, c);
    }
    s((n = n.apply(e, r || [])).next());
  });
}, UT = h && h.__generator || function(e, r) {
  var t = { label: 0, sent: function() {
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
    for (; a && (a = 0, s[0] && (t = 0)), t; )
      try {
        if (n = 1, i && (o = s[0] & 2 ? i.return : s[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, s[1])).done)
          return o;
        switch (i = 0, o && (s = [s[0] & 2, o.value]), s[0]) {
          case 0:
          case 1:
            o = s;
            break;
          case 4:
            return t.label++, { value: s[1], done: !1 };
          case 5:
            t.label++, i = s[1], s = [0];
            continue;
          case 7:
            s = t.ops.pop(), t.trys.pop();
            continue;
          default:
            if (o = t.trys, !(o = o.length > 0 && o[o.length - 1]) && (s[0] === 6 || s[0] === 2)) {
              t = 0;
              continue;
            }
            if (s[0] === 3 && (!o || s[1] > o[0] && s[1] < o[3])) {
              t.label = s[1];
              break;
            }
            if (s[0] === 6 && t.label < o[1]) {
              t.label = o[1], o = s;
              break;
            }
            if (o && t.label < o[2]) {
              t.label = o[2], t.ops.push(s);
              break;
            }
            o[2] && t.ops.pop(), t.trys.pop();
            continue;
        }
        s = r.call(e, t);
      } catch (l) {
        s = [6, l], i = 0;
      } finally {
        n = o = 0;
      }
    if (s[0] & 5)
      throw s[1];
    return { value: s[0] ? s[1] : void 0, done: !0 };
  }
}, lu = h && h.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(rt, "__esModule", { value: !0 });
rt.QueryConfig = rt.SessionConfig = rt.routing = rt.WRITE = rt.READ = rt.Driver = void 0;
var Mh = wr, LT = lu(nu), qr = se, FT = Xi, kh = lu(su), xT = ce, BT = qn, WT = lu(cu), VT = lu(Hf), qT = Ee, HT = 60 * 60 * 1e3, zT = 1e3, af = qr.ACCESS_MODE_READ;
rt.READ = af;
var zf = qr.ACCESS_MODE_WRITE;
rt.WRITE = zf;
var YT = 0, GT = function() {
  function e() {
    this.defaultAccessMode = zf, this.bookmarks = [], this.database = "", this.impersonatedUser = void 0, this.fetchSize = void 0, this.bookmarkManager = void 0;
  }
  return e;
}();
rt.SessionConfig = GT;
var KT = "WRITERS", ZT = "READERS", Sn = {
  WRITERS: KT,
  READERS: ZT
};
rt.routing = Sn;
Object.freeze(Sn);
var QT = function() {
  function e() {
    this.routing = Sn.WRITERS, this.resultTransformer = void 0, this.database = "", this.impersonatedUser = void 0, this.bookmarkManager = void 0;
  }
  return e;
}();
rt.QueryConfig = QT;
var My = function() {
  function e(r, t, n, i, o) {
    t === void 0 && (t = {}), i === void 0 && (i = function(u) {
      return new kh.default(u);
    }), o === void 0 && (o = function(u) {
      return new VT.default(u);
    }), JT(t);
    var a = FT.Logger.create(t);
    XT(t, a), this._id = YT++, this._meta = r, this._config = t, this._log = a, this._createConnectionProvider = n, this._createSession = i, this._queryBookmarkManager = (0, BT.bookmarkManager)(), this._queryExecutor = o(this.session.bind(this)), this._connectionProvider = null, this._afterConstruction();
  }
  return Object.defineProperty(e.prototype, "queryBookmarkManager", {
    get: function() {
      return this._queryBookmarkManager;
    },
    enumerable: !1,
    configurable: !0
  }), e.prototype.executeQuery = function(r, t, n) {
    var i, o, a;
    return n === void 0 && (n = {}), DT(this, void 0, void 0, function() {
      var u, c, s;
      return UT(this, function(l) {
        switch (l.label) {
          case 0:
            if (u = n.bookmarkManager === null ? void 0 : (i = n.bookmarkManager) !== null && i !== void 0 ? i : this.queryBookmarkManager, c = (o = n.resultTransformer) !== null && o !== void 0 ? o : WT.default.eagerResultTransformer(), s = (a = n.routing) !== null && a !== void 0 ? a : Sn.WRITERS, s !== Sn.READERS && s !== Sn.WRITERS)
              throw (0, qT.newError)('Illegal query routing config: "'.concat(s, '"'));
            return [4, this._queryExecutor.execute({
              resultTransformer: c,
              bookmarkManager: u,
              routing: s,
              database: n.database,
              impersonatedUser: n.impersonatedUser
            }, r, t)];
          case 1:
            return [2, l.sent()];
        }
      });
    });
  }, e.prototype.verifyConnectivity = function(r) {
    var t = r === void 0 ? {} : r, n = t.database, i = n === void 0 ? "" : n, o = this._getOrCreateConnectionProvider();
    return o.verifyConnectivityAndGetServerInfo({ database: i, accessMode: af });
  }, e.prototype.getServerInfo = function(r) {
    var t = r === void 0 ? {} : r, n = t.database, i = n === void 0 ? "" : n, o = this._getOrCreateConnectionProvider();
    return o.verifyConnectivityAndGetServerInfo({ database: i, accessMode: af });
  }, e.prototype.supportsMultiDb = function() {
    var r = this._getOrCreateConnectionProvider();
    return r.supportsMultiDb();
  }, e.prototype.supportsTransactionConfig = function() {
    var r = this._getOrCreateConnectionProvider();
    return r.supportsTransactionConfig();
  }, e.prototype.supportsUserImpersonation = function() {
    var r = this._getOrCreateConnectionProvider();
    return r.supportsUserImpersonation();
  }, e.prototype.getNegotiatedProtocolVersion = function() {
    var r = this._getOrCreateConnectionProvider();
    return r.getNegotiatedProtocolVersion();
  }, e.prototype.isEncrypted = function() {
    return this._isEncrypted();
  }, e.prototype._supportsRouting = function() {
    return this._meta.routing;
  }, e.prototype._isEncrypted = function() {
    return this._config.encrypted === xT.ENCRYPTION_ON || this._config.encrypted === !0;
  }, e.prototype._getTrust = function() {
    return this._config.trust;
  }, e.prototype.session = function(r) {
    var t = r === void 0 ? {} : r, n = t.defaultAccessMode, i = n === void 0 ? zf : n, o = t.bookmarks, a = t.database, u = a === void 0 ? "" : a, c = t.impersonatedUser, s = t.fetchSize, l = t.bookmarkManager;
    return this._newSession({
      defaultAccessMode: i,
      bookmarkOrBookmarks: o,
      database: u,
      reactive: !1,
      impersonatedUser: c,
      fetchSize: ky(s, this._config.fetchSize),
      bookmarkManager: l
    });
  }, e.prototype.close = function() {
    return this._log.info("Driver ".concat(this._id, " closing")), this._connectionProvider != null ? this._connectionProvider.close() : Promise.resolve();
  }, e.prototype._afterConstruction = function() {
    this._log.info("".concat(this._meta.typename, " driver ").concat(this._id, " created for server address ").concat(this._meta.address.toString()));
  }, e.prototype._newSession = function(r) {
    var t = r.defaultAccessMode, n = r.bookmarkOrBookmarks, i = r.database, o = r.reactive, a = r.impersonatedUser, u = r.fetchSize, c = r.bookmarkManager, s = kh.default._validateSessionMode(t), l = this._getOrCreateConnectionProvider(), f = n != null ? new Mh.Bookmarks(n) : Mh.Bookmarks.empty();
    return this._createSession({
      mode: s,
      database: i ?? "",
      connectionProvider: l,
      bookmarks: f,
      config: this._config,
      reactive: o,
      impersonatedUser: a,
      fetchSize: u,
      bookmarkManager: c
    });
  }, e.prototype._getOrCreateConnectionProvider = function() {
    return this._connectionProvider == null && (this._connectionProvider = this._createConnectionProvider(this._id, this._config, this._log, tP(this._config))), this._connectionProvider;
  }, e;
}();
rt.Driver = My;
function XT(e, r) {
  var t = e.resolver;
  if (t != null && typeof t != "function")
    throw new TypeError("Configured resolver should be a function. Got: ".concat(typeof t));
  return e.connectionAcquisitionTimeout < e.connectionTimeout && r.warn('Configuration for "connectionAcquisitionTimeout" should be greater than or equal to "connectionTimeout". Otherwise, the connection acquisition timeout will take precedence for over the connection timeout in scenarios where a new connection is created while it is acquired'), e;
}
function JT(e) {
  e.maxConnectionLifetime = vl(e.maxConnectionLifetime, HT), e.maxConnectionPoolSize = vl(e.maxConnectionPoolSize, qr.DEFAULT_POOL_MAX_SIZE), e.connectionAcquisitionTimeout = vl(e.connectionAcquisitionTimeout, qr.DEFAULT_POOL_ACQUISITION_TIMEOUT), e.fetchSize = ky(e.fetchSize, zT), e.connectionTimeout = eP(e);
}
function vl(e, r) {
  var t = parseInt(e, 10);
  return t > 0 || t === 0 ? t : t < 0 ? Number.MAX_SAFE_INTEGER : r;
}
function ky(e, r) {
  var t = parseInt(e, 10);
  if (t > 0 || t === qr.FETCH_ALL)
    return t;
  if (t === 0 || t < 0)
    throw new Error("The fetch size can only be a positive value or ".concat(qr.FETCH_ALL, " for ALL. However fetchSize = ").concat(t));
  return r;
}
function eP(e) {
  var r = parseInt(e.connectionTimeout, 10);
  return r === 0 || !isNaN(r) && r < 0 ? null : isNaN(r) ? qr.DEFAULT_CONNECTION_TIMEOUT_MILLIS : r;
}
function tP(e) {
  return new LT.default(e.resolver);
}
rt.default = My;
var Yf = {};
Object.defineProperty(Yf, "__esModule", { value: !0 });
var rP = {
  basic: function(e, r, t) {
    return t != null ? {
      scheme: "basic",
      principal: e,
      credentials: r,
      realm: t
    } : { scheme: "basic", principal: e, credentials: r };
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
  custom: function(e, r, t, n, i) {
    var o = {
      scheme: n,
      principal: e
    };
    return pl(r) && (o.credentials = r), pl(t) && (o.realm = t), pl(i) && (o.parameters = i), o;
  }
};
function pl(e) {
  return !(e == null || e === "" || Object.getPrototypeOf(e) === Object.prototype && Object.keys(e).length === 0);
}
Yf.default = rP;
var Dy = {};
Object.defineProperty(Dy, "__esModule", { value: !0 });
(function(e) {
  var r = h && h.__createBinding || (Object.create ? function(q, re, ne, G) {
    G === void 0 && (G = ne);
    var ve = Object.getOwnPropertyDescriptor(re, ne);
    (!ve || ("get" in ve ? !re.__esModule : ve.writable || ve.configurable)) && (ve = { enumerable: !0, get: function() {
      return re[ne];
    } }), Object.defineProperty(q, G, ve);
  } : function(q, re, ne, G) {
    G === void 0 && (G = ne), q[G] = re[ne];
  }), t = h && h.__setModuleDefault || (Object.create ? function(q, re) {
    Object.defineProperty(q, "default", { enumerable: !0, value: re });
  } : function(q, re) {
    q.default = re;
  }), n = h && h.__importStar || function(q) {
    if (q && q.__esModule)
      return q;
    var re = {};
    if (q != null)
      for (var ne in q)
        ne !== "default" && Object.prototype.hasOwnProperty.call(q, ne) && r(re, q, ne);
    return t(re, q), re;
  }, i = h && h.__importDefault || function(q) {
    return q && q.__esModule ? q : { default: q };
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.ManagedTransaction = e.Transaction = e.Connection = e.ConnectionProvider = e.EagerResult = e.Result = e.Stats = e.QueryStatistics = e.ProfiledPlan = e.Plan = e.Notification = e.ServerInfo = e.queryType = e.ResultSummary = e.Record = e.isPathSegment = e.PathSegment = e.isPath = e.Path = e.isUnboundRelationship = e.UnboundRelationship = e.isRelationship = e.Relationship = e.isNode = e.Node = e.Time = e.LocalTime = e.LocalDateTime = e.isTime = e.isLocalTime = e.isLocalDateTime = e.isDuration = e.isDateTime = e.isDate = e.Duration = e.DateTime = e.Date = e.Point = e.isPoint = e.internal = e.toString = e.toNumber = e.inSafeRange = e.isInt = e.int = e.Integer = e.error = e.isRetriableError = e.Neo4jError = e.newError = void 0, e.resultTransformers = e.routing = e.bookmarkManager = e.auth = e.json = e.driver = e.types = e.Driver = e.Session = e.TransactionPromise = void 0;
  var o = Ee;
  Object.defineProperty(e, "newError", { enumerable: !0, get: function() {
    return o.newError;
  } }), Object.defineProperty(e, "Neo4jError", { enumerable: !0, get: function() {
    return o.Neo4jError;
  } }), Object.defineProperty(e, "isRetriableError", { enumerable: !0, get: function() {
    return o.isRetriableError;
  } });
  var a = n(Ke);
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
  var c = Ne;
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
  var s = i(Ff);
  e.Record = s.default;
  var l = Cn;
  Object.defineProperty(e, "isPoint", { enumerable: !0, get: function() {
    return l.isPoint;
  } }), Object.defineProperty(e, "Point", { enumerable: !0, get: function() {
    return l.Point;
  } });
  var f = n(Ge);
  e.ResultSummary = f.default, Object.defineProperty(e, "queryType", { enumerable: !0, get: function() {
    return f.queryType;
  } }), Object.defineProperty(e, "ServerInfo", { enumerable: !0, get: function() {
    return f.ServerInfo;
  } }), Object.defineProperty(e, "Notification", { enumerable: !0, get: function() {
    return f.Notification;
  } }), Object.defineProperty(e, "Plan", { enumerable: !0, get: function() {
    return f.Plan;
  } }), Object.defineProperty(e, "ProfiledPlan", { enumerable: !0, get: function() {
    return f.ProfiledPlan;
  } }), Object.defineProperty(e, "QueryStatistics", { enumerable: !0, get: function() {
    return f.QueryStatistics;
  } }), Object.defineProperty(e, "Stats", { enumerable: !0, get: function() {
    return f.Stats;
  } });
  var y = i(Zi);
  e.Result = y.default;
  var b = i(iu);
  e.EagerResult = b.default;
  var O = i(Wf);
  e.ConnectionProvider = O.default;
  var S = i(Vf);
  e.Connection = S.default;
  var P = i(ou);
  e.Transaction = P.default;
  var R = i(au);
  e.ManagedTransaction = R.default;
  var $ = i(uu);
  e.TransactionPromise = $.default;
  var j = i(su);
  e.Session = j.default;
  var k = n(rt), L = k;
  e.Driver = k.default, e.driver = L;
  var Y = i(Yf);
  e.auth = Y.default;
  var ee = qn;
  Object.defineProperty(e, "bookmarkManager", { enumerable: !0, get: function() {
    return ee.bookmarkManager;
  } });
  var le = rt;
  Object.defineProperty(e, "routing", { enumerable: !0, get: function() {
    return le.routing;
  } });
  var me = n(Dy);
  e.types = me;
  var Me = n(xn);
  e.json = Me;
  var Pe = i(cu);
  e.resultTransformers = Pe.default;
  var Ue = n(Oe);
  e.internal = Ue;
  var be = {
    SERVICE_UNAVAILABLE: o.SERVICE_UNAVAILABLE,
    SESSION_EXPIRED: o.SESSION_EXPIRED,
    PROTOCOL_ERROR: o.PROTOCOL_ERROR
  };
  e.error = be;
  var he = {
    newError: o.newError,
    Neo4jError: o.Neo4jError,
    isRetriableError: o.isRetriableError,
    error: be,
    Integer: a.default,
    int: a.int,
    isInt: a.isInt,
    inSafeRange: a.inSafeRange,
    toNumber: a.toNumber,
    toString: a.toString,
    internal: Ue,
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
    ResultSummary: f.default,
    queryType: f.queryType,
    ServerInfo: f.ServerInfo,
    Notification: f.Notification,
    Plan: f.Plan,
    ProfiledPlan: f.ProfiledPlan,
    QueryStatistics: f.QueryStatistics,
    Stats: f.Stats,
    Result: y.default,
    EagerResult: b.default,
    Transaction: P.default,
    ManagedTransaction: R.default,
    TransactionPromise: $.default,
    Session: j.default,
    Driver: k.default,
    Connection: S.default,
    types: me,
    driver: L,
    json: Me,
    auth: Y.default,
    bookmarkManager: ee.bookmarkManager,
    routing: le.routing,
    resultTransformers: Pe.default
  };
  e.default = he;
})(te);
var fu = {}, eo = {}, ye = {}, Hn = {}, _e = {};
Object.defineProperty(_e, "__esModule", { value: !0 });
_e.isFunction = void 0;
function nP(e) {
  return typeof e == "function";
}
_e.isFunction = nP;
var qe = {}, to = {}, Bt = {};
Object.defineProperty(Bt, "__esModule", { value: !0 });
Bt.createErrorClass = void 0;
function iP(e) {
  var r = function(n) {
    Error.call(n), n.stack = new Error().stack;
  }, t = e(r);
  return t.prototype = Object.create(Error.prototype), t.prototype.constructor = t, t;
}
Bt.createErrorClass = iP;
Object.defineProperty(to, "__esModule", { value: !0 });
to.UnsubscriptionError = void 0;
var oP = Bt;
to.UnsubscriptionError = oP.createErrorClass(function(e) {
  return function(t) {
    e(this), this.message = t ? t.length + ` errors occurred during unsubscription:
` + t.map(function(n, i) {
      return i + 1 + ") " + n.toString();
    }).join(`
  `) : "", this.name = "UnsubscriptionError", this.errors = t;
  };
});
var Rt = {};
Object.defineProperty(Rt, "__esModule", { value: !0 });
Rt.arrRemove = void 0;
function aP(e, r) {
  if (e) {
    var t = e.indexOf(r);
    0 <= t && e.splice(t, 1);
  }
}
Rt.arrRemove = aP;
var Dh = h && h.__values || function(e) {
  var r = typeof Symbol == "function" && Symbol.iterator, t = r && e[r], n = 0;
  if (t)
    return t.call(e);
  if (e && typeof e.length == "number")
    return {
      next: function() {
        return e && n >= e.length && (e = void 0), { value: e && e[n++], done: !e };
      }
    };
  throw new TypeError(r ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, Uh = h && h.__read || function(e, r) {
  var t = typeof Symbol == "function" && e[Symbol.iterator];
  if (!t)
    return e;
  var n = t.call(e), i, o = [], a;
  try {
    for (; (r === void 0 || r-- > 0) && !(i = n.next()).done; )
      o.push(i.value);
  } catch (u) {
    a = { error: u };
  } finally {
    try {
      i && !i.done && (t = n.return) && t.call(n);
    } finally {
      if (a)
        throw a.error;
    }
  }
  return o;
}, Lh = h && h.__spreadArray || function(e, r) {
  for (var t = 0, n = r.length, i = e.length; t < n; t++, i++)
    e[i] = r[t];
  return e;
};
Object.defineProperty(qe, "__esModule", { value: !0 });
qe.isSubscription = qe.EMPTY_SUBSCRIPTION = qe.Subscription = void 0;
var Mi = _e, _l = to, Fh = Rt, Gf = function() {
  function e(r) {
    this.initialTeardown = r, this.closed = !1, this._parentage = null, this._finalizers = null;
  }
  return e.prototype.unsubscribe = function() {
    var r, t, n, i, o;
    if (!this.closed) {
      this.closed = !0;
      var a = this._parentage;
      if (a)
        if (this._parentage = null, Array.isArray(a))
          try {
            for (var u = Dh(a), c = u.next(); !c.done; c = u.next()) {
              var s = c.value;
              s.remove(this);
            }
          } catch (S) {
            r = { error: S };
          } finally {
            try {
              c && !c.done && (t = u.return) && t.call(u);
            } finally {
              if (r)
                throw r.error;
            }
          }
        else
          a.remove(this);
      var l = this.initialTeardown;
      if (Mi.isFunction(l))
        try {
          l();
        } catch (S) {
          o = S instanceof _l.UnsubscriptionError ? S.errors : [S];
        }
      var f = this._finalizers;
      if (f) {
        this._finalizers = null;
        try {
          for (var y = Dh(f), b = y.next(); !b.done; b = y.next()) {
            var O = b.value;
            try {
              xh(O);
            } catch (S) {
              o = o ?? [], S instanceof _l.UnsubscriptionError ? o = Lh(Lh([], Uh(o)), Uh(S.errors)) : o.push(S);
            }
          }
        } catch (S) {
          n = { error: S };
        } finally {
          try {
            b && !b.done && (i = y.return) && i.call(y);
          } finally {
            if (n)
              throw n.error;
          }
        }
      }
      if (o)
        throw new _l.UnsubscriptionError(o);
    }
  }, e.prototype.add = function(r) {
    var t;
    if (r && r !== this)
      if (this.closed)
        xh(r);
      else {
        if (r instanceof e) {
          if (r.closed || r._hasParent(this))
            return;
          r._addParent(this);
        }
        (this._finalizers = (t = this._finalizers) !== null && t !== void 0 ? t : []).push(r);
      }
  }, e.prototype._hasParent = function(r) {
    var t = this._parentage;
    return t === r || Array.isArray(t) && t.includes(r);
  }, e.prototype._addParent = function(r) {
    var t = this._parentage;
    this._parentage = Array.isArray(t) ? (t.push(r), t) : t ? [t, r] : r;
  }, e.prototype._removeParent = function(r) {
    var t = this._parentage;
    t === r ? this._parentage = null : Array.isArray(t) && Fh.arrRemove(t, r);
  }, e.prototype.remove = function(r) {
    var t = this._finalizers;
    t && Fh.arrRemove(t, r), r instanceof e && r._removeParent(this);
  }, e.EMPTY = function() {
    var r = new e();
    return r.closed = !0, r;
  }(), e;
}();
qe.Subscription = Gf;
qe.EMPTY_SUBSCRIPTION = Gf.EMPTY;
function uP(e) {
  return e instanceof Gf || e && "closed" in e && Mi.isFunction(e.remove) && Mi.isFunction(e.add) && Mi.isFunction(e.unsubscribe);
}
qe.isSubscription = uP;
function xh(e) {
  Mi.isFunction(e) ? e() : e.unsubscribe();
}
var Er = {};
Object.defineProperty(Er, "__esModule", { value: !0 });
Er.config = void 0;
Er.config = {
  onUnhandledError: null,
  onStoppedNotification: null,
  Promise: void 0,
  useDeprecatedSynchronousErrorHandling: !1,
  useDeprecatedNextContext: !1
};
var ro = {}, Kf = {};
(function(e) {
  var r = h && h.__read || function(n, i) {
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
  }, t = h && h.__spreadArray || function(n, i) {
    for (var o = 0, a = i.length, u = n.length; o < a; o++, u++)
      n[u] = i[o];
    return n;
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.timeoutProvider = void 0, e.timeoutProvider = {
    setTimeout: function(n, i) {
      for (var o = [], a = 2; a < arguments.length; a++)
        o[a - 2] = arguments[a];
      var u = e.timeoutProvider.delegate;
      return u != null && u.setTimeout ? u.setTimeout.apply(u, t([n, i], r(o))) : setTimeout.apply(void 0, t([n, i], r(o)));
    },
    clearTimeout: function(n) {
      var i = e.timeoutProvider.delegate;
      return ((i == null ? void 0 : i.clearTimeout) || clearTimeout)(n);
    },
    delegate: void 0
  };
})(Kf);
Object.defineProperty(ro, "__esModule", { value: !0 });
ro.reportUnhandledError = void 0;
var sP = Er, cP = Kf;
function lP(e) {
  cP.timeoutProvider.setTimeout(function() {
    var r = sP.config.onUnhandledError;
    if (r)
      r(e);
    else
      throw e;
  });
}
ro.reportUnhandledError = lP;
var ze = {};
Object.defineProperty(ze, "__esModule", { value: !0 });
ze.noop = void 0;
function fP() {
}
ze.noop = fP;
var Lt = {};
Object.defineProperty(Lt, "__esModule", { value: !0 });
Lt.createNotification = Lt.nextNotification = Lt.errorNotification = Lt.COMPLETE_NOTIFICATION = void 0;
Lt.COMPLETE_NOTIFICATION = function() {
  return du("C", void 0, void 0);
}();
function dP(e) {
  return du("E", void 0, e);
}
Lt.errorNotification = dP;
function hP(e) {
  return du("N", e, void 0);
}
Lt.nextNotification = hP;
function du(e, r, t) {
  return {
    kind: e,
    value: r,
    error: t
  };
}
Lt.createNotification = du;
var pr = {};
Object.defineProperty(pr, "__esModule", { value: !0 });
pr.captureError = pr.errorContext = void 0;
var Uy = Er, xr = null;
function vP(e) {
  if (Uy.config.useDeprecatedSynchronousErrorHandling) {
    var r = !xr;
    if (r && (xr = { errorThrown: !1, error: null }), e(), r) {
      var t = xr, n = t.errorThrown, i = t.error;
      if (xr = null, n)
        throw i;
    }
  } else
    e();
}
pr.errorContext = vP;
function pP(e) {
  Uy.config.useDeprecatedSynchronousErrorHandling && xr && (xr.errorThrown = !0, xr.error = e);
}
pr.captureError = pP;
(function(e) {
  var r = h && h.__extends || function() {
    var $ = function(j, k) {
      return $ = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(L, Y) {
        L.__proto__ = Y;
      } || function(L, Y) {
        for (var ee in Y)
          Object.prototype.hasOwnProperty.call(Y, ee) && (L[ee] = Y[ee]);
      }, $(j, k);
    };
    return function(j, k) {
      if (typeof k != "function" && k !== null)
        throw new TypeError("Class extends value " + String(k) + " is not a constructor or null");
      $(j, k);
      function L() {
        this.constructor = j;
      }
      j.prototype = k === null ? Object.create(k) : (L.prototype = k.prototype, new L());
    };
  }();
  Object.defineProperty(e, "__esModule", { value: !0 }), e.EMPTY_OBSERVER = e.SafeSubscriber = e.Subscriber = void 0;
  var t = _e, n = qe, i = Er, o = ro, a = ze, u = Lt, c = Kf, s = pr, l = function($) {
    r(j, $);
    function j(k) {
      var L = $.call(this) || this;
      return L.isStopped = !1, k ? (L.destination = k, n.isSubscription(k) && k.add(L)) : L.destination = e.EMPTY_OBSERVER, L;
    }
    return j.create = function(k, L, Y) {
      return new O(k, L, Y);
    }, j.prototype.next = function(k) {
      this.isStopped ? R(u.nextNotification(k), this) : this._next(k);
    }, j.prototype.error = function(k) {
      this.isStopped ? R(u.errorNotification(k), this) : (this.isStopped = !0, this._error(k));
    }, j.prototype.complete = function() {
      this.isStopped ? R(u.COMPLETE_NOTIFICATION, this) : (this.isStopped = !0, this._complete());
    }, j.prototype.unsubscribe = function() {
      this.closed || (this.isStopped = !0, $.prototype.unsubscribe.call(this), this.destination = null);
    }, j.prototype._next = function(k) {
      this.destination.next(k);
    }, j.prototype._error = function(k) {
      try {
        this.destination.error(k);
      } finally {
        this.unsubscribe();
      }
    }, j.prototype._complete = function() {
      try {
        this.destination.complete();
      } finally {
        this.unsubscribe();
      }
    }, j;
  }(n.Subscription);
  e.Subscriber = l;
  var f = Function.prototype.bind;
  function y($, j) {
    return f.call($, j);
  }
  var b = function() {
    function $(j) {
      this.partialObserver = j;
    }
    return $.prototype.next = function(j) {
      var k = this.partialObserver;
      if (k.next)
        try {
          k.next(j);
        } catch (L) {
          S(L);
        }
    }, $.prototype.error = function(j) {
      var k = this.partialObserver;
      if (k.error)
        try {
          k.error(j);
        } catch (L) {
          S(L);
        }
      else
        S(j);
    }, $.prototype.complete = function() {
      var j = this.partialObserver;
      if (j.complete)
        try {
          j.complete();
        } catch (k) {
          S(k);
        }
    }, $;
  }(), O = function($) {
    r(j, $);
    function j(k, L, Y) {
      var ee = $.call(this) || this, le;
      if (t.isFunction(k) || !k)
        le = {
          next: k ?? void 0,
          error: L ?? void 0,
          complete: Y ?? void 0
        };
      else {
        var me;
        ee && i.config.useDeprecatedNextContext ? (me = Object.create(k), me.unsubscribe = function() {
          return ee.unsubscribe();
        }, le = {
          next: k.next && y(k.next, me),
          error: k.error && y(k.error, me),
          complete: k.complete && y(k.complete, me)
        }) : le = k;
      }
      return ee.destination = new b(le), ee;
    }
    return j;
  }(l);
  e.SafeSubscriber = O;
  function S($) {
    i.config.useDeprecatedSynchronousErrorHandling ? s.captureError($) : o.reportUnhandledError($);
  }
  function P($) {
    throw $;
  }
  function R($, j) {
    var k = i.config.onStoppedNotification;
    k && c.timeoutProvider.setTimeout(function() {
      return k($, j);
    });
  }
  e.EMPTY_OBSERVER = {
    closed: !0,
    next: a.noop,
    error: P,
    complete: a.noop
  };
})(Hn);
var Jr = {};
Object.defineProperty(Jr, "__esModule", { value: !0 });
Jr.observable = void 0;
Jr.observable = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}();
var rr = {}, Ye = {};
Object.defineProperty(Ye, "__esModule", { value: !0 });
Ye.identity = void 0;
function _P(e) {
  return e;
}
Ye.identity = _P;
Object.defineProperty(rr, "__esModule", { value: !0 });
rr.pipeFromArray = rr.pipe = void 0;
var yP = Ye;
function mP() {
  for (var e = [], r = 0; r < arguments.length; r++)
    e[r] = arguments[r];
  return Ly(e);
}
rr.pipe = mP;
function Ly(e) {
  return e.length === 0 ? yP.identity : e.length === 1 ? e[0] : function(t) {
    return e.reduce(function(n, i) {
      return i(n);
    }, t);
  };
}
rr.pipeFromArray = Ly;
Object.defineProperty(ye, "__esModule", { value: !0 });
ye.Observable = void 0;
var uf = Hn, bP = qe, gP = Jr, OP = rr, wP = Er, yl = _e, EP = pr, SP = function() {
  function e(r) {
    r && (this._subscribe = r);
  }
  return e.prototype.lift = function(r) {
    var t = new e();
    return t.source = this, t.operator = r, t;
  }, e.prototype.subscribe = function(r, t, n) {
    var i = this, o = PP(r) ? r : new uf.SafeSubscriber(r, t, n);
    return EP.errorContext(function() {
      var a = i, u = a.operator, c = a.source;
      o.add(u ? u.call(o, c) : c ? i._subscribe(o) : i._trySubscribe(o));
    }), o;
  }, e.prototype._trySubscribe = function(r) {
    try {
      return this._subscribe(r);
    } catch (t) {
      r.error(t);
    }
  }, e.prototype.forEach = function(r, t) {
    var n = this;
    return t = Bh(t), new t(function(i, o) {
      var a = new uf.SafeSubscriber({
        next: function(u) {
          try {
            r(u);
          } catch (c) {
            o(c), a.unsubscribe();
          }
        },
        error: o,
        complete: i
      });
      n.subscribe(a);
    });
  }, e.prototype._subscribe = function(r) {
    var t;
    return (t = this.source) === null || t === void 0 ? void 0 : t.subscribe(r);
  }, e.prototype[gP.observable] = function() {
    return this;
  }, e.prototype.pipe = function() {
    for (var r = [], t = 0; t < arguments.length; t++)
      r[t] = arguments[t];
    return OP.pipeFromArray(r)(this);
  }, e.prototype.toPromise = function(r) {
    var t = this;
    return r = Bh(r), new r(function(n, i) {
      var o;
      t.subscribe(function(a) {
        return o = a;
      }, function(a) {
        return i(a);
      }, function() {
        return n(o);
      });
    });
  }, e.create = function(r) {
    return new e(r);
  }, e;
}();
ye.Observable = SP;
function Bh(e) {
  var r;
  return (r = e ?? wP.config.Promise) !== null && r !== void 0 ? r : Promise;
}
function TP(e) {
  return e && yl.isFunction(e.next) && yl.isFunction(e.error) && yl.isFunction(e.complete);
}
function PP(e) {
  return e && e instanceof uf.Subscriber || TP(e) && bP.isSubscription(e);
}
var en = {}, no = {}, W = {};
Object.defineProperty(W, "__esModule", { value: !0 });
W.operate = W.hasLift = void 0;
var IP = _e;
function Fy(e) {
  return IP.isFunction(e == null ? void 0 : e.lift);
}
W.hasLift = Fy;
function AP(e) {
  return function(r) {
    if (Fy(r))
      return r.lift(function(t) {
        try {
          return e(t, this);
        } catch (n) {
          this.error(n);
        }
      });
    throw new TypeError("Unable to lift unknown Observable type");
  };
}
W.operate = AP;
var z = {}, RP = h && h.__extends || function() {
  var e = function(r, t) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var o in i)
        Object.prototype.hasOwnProperty.call(i, o) && (n[o] = i[o]);
    }, e(r, t);
  };
  return function(r, t) {
    if (typeof t != "function" && t !== null)
      throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
    e(r, t);
    function n() {
      this.constructor = r;
    }
    r.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}();
Object.defineProperty(z, "__esModule", { value: !0 });
z.OperatorSubscriber = z.createOperatorSubscriber = void 0;
var CP = Hn;
function $P(e, r, t, n, i) {
  return new xy(e, r, t, n, i);
}
z.createOperatorSubscriber = $P;
var xy = function(e) {
  RP(r, e);
  function r(t, n, i, o, a, u) {
    var c = e.call(this, t) || this;
    return c.onFinalize = a, c.shouldUnsubscribe = u, c._next = n ? function(s) {
      try {
        n(s);
      } catch (l) {
        t.error(l);
      }
    } : e.prototype._next, c._error = o ? function(s) {
      try {
        o(s);
      } catch (l) {
        t.error(l);
      } finally {
        this.unsubscribe();
      }
    } : e.prototype._error, c._complete = i ? function() {
      try {
        i();
      } catch (s) {
        t.error(s);
      } finally {
        this.unsubscribe();
      }
    } : e.prototype._complete, c;
  }
  return r.prototype.unsubscribe = function() {
    var t;
    if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
      var n = this.closed;
      e.prototype.unsubscribe.call(this), !n && ((t = this.onFinalize) === null || t === void 0 || t.call(this));
    }
  }, r;
}(CP.Subscriber);
z.OperatorSubscriber = xy;
Object.defineProperty(no, "__esModule", { value: !0 });
no.refCount = void 0;
var jP = W, NP = z;
function MP() {
  return jP.operate(function(e, r) {
    var t = null;
    e._refCount++;
    var n = NP.createOperatorSubscriber(r, void 0, void 0, void 0, function() {
      if (!e || e._refCount <= 0 || 0 < --e._refCount) {
        t = null;
        return;
      }
      var i = e._connection, o = t;
      t = null, i && (!o || i === o) && i.unsubscribe(), r.unsubscribe();
    });
    e.subscribe(n), n.closed || (t = e.connect());
  });
}
no.refCount = MP;
var kP = h && h.__extends || function() {
  var e = function(r, t) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var o in i)
        Object.prototype.hasOwnProperty.call(i, o) && (n[o] = i[o]);
    }, e(r, t);
  };
  return function(r, t) {
    if (typeof t != "function" && t !== null)
      throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
    e(r, t);
    function n() {
      this.constructor = r;
    }
    r.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}();
Object.defineProperty(en, "__esModule", { value: !0 });
en.ConnectableObservable = void 0;
var DP = ye, Wh = qe, UP = no, LP = z, FP = W, xP = function(e) {
  kP(r, e);
  function r(t, n) {
    var i = e.call(this) || this;
    return i.source = t, i.subjectFactory = n, i._subject = null, i._refCount = 0, i._connection = null, FP.hasLift(t) && (i.lift = t.lift), i;
  }
  return r.prototype._subscribe = function(t) {
    return this.getSubject().subscribe(t);
  }, r.prototype.getSubject = function() {
    var t = this._subject;
    return (!t || t.isStopped) && (this._subject = this.subjectFactory()), this._subject;
  }, r.prototype._teardown = function() {
    this._refCount = 0;
    var t = this._connection;
    this._subject = this._connection = null, t == null || t.unsubscribe();
  }, r.prototype.connect = function() {
    var t = this, n = this._connection;
    if (!n) {
      n = this._connection = new Wh.Subscription();
      var i = this.getSubject();
      n.add(this.source.subscribe(LP.createOperatorSubscriber(i, void 0, function() {
        t._teardown(), i.complete();
      }, function(o) {
        t._teardown(), i.error(o);
      }, function() {
        return t._teardown();
      }))), n.closed && (this._connection = null, n = Wh.Subscription.EMPTY);
    }
    return n;
  }, r.prototype.refCount = function() {
    return UP.refCount()(this);
  }, r;
}(DP.Observable);
en.ConnectableObservable = xP;
var hu = {}, By = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.performanceTimestampProvider = void 0, e.performanceTimestampProvider = {
    now: function() {
      return (e.performanceTimestampProvider.delegate || performance).now();
    },
    delegate: void 0
  };
})(By);
var Zf = {};
(function(e) {
  var r = h && h.__read || function(i, o) {
    var a = typeof Symbol == "function" && i[Symbol.iterator];
    if (!a)
      return i;
    var u = a.call(i), c, s = [], l;
    try {
      for (; (o === void 0 || o-- > 0) && !(c = u.next()).done; )
        s.push(c.value);
    } catch (f) {
      l = { error: f };
    } finally {
      try {
        c && !c.done && (a = u.return) && a.call(u);
      } finally {
        if (l)
          throw l.error;
      }
    }
    return s;
  }, t = h && h.__spreadArray || function(i, o) {
    for (var a = 0, u = o.length, c = i.length; a < u; a++, c++)
      i[c] = o[a];
    return i;
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.animationFrameProvider = void 0;
  var n = qe;
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
      return ((a == null ? void 0 : a.requestAnimationFrame) || requestAnimationFrame).apply(void 0, t([], r(i)));
    },
    cancelAnimationFrame: function() {
      for (var i = [], o = 0; o < arguments.length; o++)
        i[o] = arguments[o];
      var a = e.animationFrameProvider.delegate;
      return ((a == null ? void 0 : a.cancelAnimationFrame) || cancelAnimationFrame).apply(void 0, t([], r(i)));
    },
    delegate: void 0
  };
})(Zf);
Object.defineProperty(hu, "__esModule", { value: !0 });
hu.animationFrames = void 0;
var BP = ye, WP = By, Vh = Zf;
function VP(e) {
  return e ? Wy(e) : qP;
}
hu.animationFrames = VP;
function Wy(e) {
  return new BP.Observable(function(r) {
    var t = e || WP.performanceTimestampProvider, n = t.now(), i = 0, o = function() {
      r.closed || (i = Vh.animationFrameProvider.requestAnimationFrame(function(a) {
        i = 0;
        var u = t.now();
        r.next({
          timestamp: e ? u : a,
          elapsed: u - n
        }), o();
      }));
    };
    return o(), function() {
      i && Vh.animationFrameProvider.cancelAnimationFrame(i);
    };
  });
}
var qP = Wy(), De = {}, io = {};
Object.defineProperty(io, "__esModule", { value: !0 });
io.ObjectUnsubscribedError = void 0;
var HP = Bt;
io.ObjectUnsubscribedError = HP.createErrorClass(function(e) {
  return function() {
    e(this), this.name = "ObjectUnsubscribedError", this.message = "object unsubscribed";
  };
});
var Vy = h && h.__extends || function() {
  var e = function(r, t) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var o in i)
        Object.prototype.hasOwnProperty.call(i, o) && (n[o] = i[o]);
    }, e(r, t);
  };
  return function(r, t) {
    if (typeof t != "function" && t !== null)
      throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
    e(r, t);
    function n() {
      this.constructor = r;
    }
    r.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}(), zP = h && h.__values || function(e) {
  var r = typeof Symbol == "function" && Symbol.iterator, t = r && e[r], n = 0;
  if (t)
    return t.call(e);
  if (e && typeof e.length == "number")
    return {
      next: function() {
        return e && n >= e.length && (e = void 0), { value: e && e[n++], done: !e };
      }
    };
  throw new TypeError(r ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(De, "__esModule", { value: !0 });
De.AnonymousSubject = De.Subject = void 0;
var qh = ye, sf = qe, YP = io, GP = Rt, ml = pr, qy = function(e) {
  Vy(r, e);
  function r() {
    var t = e.call(this) || this;
    return t.closed = !1, t.currentObservers = null, t.observers = [], t.isStopped = !1, t.hasError = !1, t.thrownError = null, t;
  }
  return r.prototype.lift = function(t) {
    var n = new cf(this, this);
    return n.operator = t, n;
  }, r.prototype._throwIfClosed = function() {
    if (this.closed)
      throw new YP.ObjectUnsubscribedError();
  }, r.prototype.next = function(t) {
    var n = this;
    ml.errorContext(function() {
      var i, o;
      if (n._throwIfClosed(), !n.isStopped) {
        n.currentObservers || (n.currentObservers = Array.from(n.observers));
        try {
          for (var a = zP(n.currentObservers), u = a.next(); !u.done; u = a.next()) {
            var c = u.value;
            c.next(t);
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
  }, r.prototype.error = function(t) {
    var n = this;
    ml.errorContext(function() {
      if (n._throwIfClosed(), !n.isStopped) {
        n.hasError = n.isStopped = !0, n.thrownError = t;
        for (var i = n.observers; i.length; )
          i.shift().error(t);
      }
    });
  }, r.prototype.complete = function() {
    var t = this;
    ml.errorContext(function() {
      if (t._throwIfClosed(), !t.isStopped) {
        t.isStopped = !0;
        for (var n = t.observers; n.length; )
          n.shift().complete();
      }
    });
  }, r.prototype.unsubscribe = function() {
    this.isStopped = this.closed = !0, this.observers = this.currentObservers = null;
  }, Object.defineProperty(r.prototype, "observed", {
    get: function() {
      var t;
      return ((t = this.observers) === null || t === void 0 ? void 0 : t.length) > 0;
    },
    enumerable: !1,
    configurable: !0
  }), r.prototype._trySubscribe = function(t) {
    return this._throwIfClosed(), e.prototype._trySubscribe.call(this, t);
  }, r.prototype._subscribe = function(t) {
    return this._throwIfClosed(), this._checkFinalizedStatuses(t), this._innerSubscribe(t);
  }, r.prototype._innerSubscribe = function(t) {
    var n = this, i = this, o = i.hasError, a = i.isStopped, u = i.observers;
    return o || a ? sf.EMPTY_SUBSCRIPTION : (this.currentObservers = null, u.push(t), new sf.Subscription(function() {
      n.currentObservers = null, GP.arrRemove(u, t);
    }));
  }, r.prototype._checkFinalizedStatuses = function(t) {
    var n = this, i = n.hasError, o = n.thrownError, a = n.isStopped;
    i ? t.error(o) : a && t.complete();
  }, r.prototype.asObservable = function() {
    var t = new qh.Observable();
    return t.source = this, t;
  }, r.create = function(t, n) {
    return new cf(t, n);
  }, r;
}(qh.Observable);
De.Subject = qy;
var cf = function(e) {
  Vy(r, e);
  function r(t, n) {
    var i = e.call(this) || this;
    return i.destination = t, i.source = n, i;
  }
  return r.prototype.next = function(t) {
    var n, i;
    (i = (n = this.destination) === null || n === void 0 ? void 0 : n.next) === null || i === void 0 || i.call(n, t);
  }, r.prototype.error = function(t) {
    var n, i;
    (i = (n = this.destination) === null || n === void 0 ? void 0 : n.error) === null || i === void 0 || i.call(n, t);
  }, r.prototype.complete = function() {
    var t, n;
    (n = (t = this.destination) === null || t === void 0 ? void 0 : t.complete) === null || n === void 0 || n.call(t);
  }, r.prototype._subscribe = function(t) {
    var n, i;
    return (i = (n = this.source) === null || n === void 0 ? void 0 : n.subscribe(t)) !== null && i !== void 0 ? i : sf.EMPTY_SUBSCRIPTION;
  }, r;
}(qy);
De.AnonymousSubject = cf;
var oo = {}, KP = h && h.__extends || function() {
  var e = function(r, t) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var o in i)
        Object.prototype.hasOwnProperty.call(i, o) && (n[o] = i[o]);
    }, e(r, t);
  };
  return function(r, t) {
    if (typeof t != "function" && t !== null)
      throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
    e(r, t);
    function n() {
      this.constructor = r;
    }
    r.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}();
Object.defineProperty(oo, "__esModule", { value: !0 });
oo.BehaviorSubject = void 0;
var ZP = De, QP = function(e) {
  KP(r, e);
  function r(t) {
    var n = e.call(this) || this;
    return n._value = t, n;
  }
  return Object.defineProperty(r.prototype, "value", {
    get: function() {
      return this.getValue();
    },
    enumerable: !1,
    configurable: !0
  }), r.prototype._subscribe = function(t) {
    var n = e.prototype._subscribe.call(this, t);
    return !n.closed && t.next(this._value), n;
  }, r.prototype.getValue = function() {
    var t = this, n = t.hasError, i = t.thrownError, o = t._value;
    if (n)
      throw i;
    return this._throwIfClosed(), o;
  }, r.prototype.next = function(t) {
    e.prototype.next.call(this, this._value = t);
  }, r;
}(ZP.Subject);
oo.BehaviorSubject = QP;
var zn = {}, vu = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.dateTimestampProvider = void 0, e.dateTimestampProvider = {
    now: function() {
      return (e.dateTimestampProvider.delegate || Date).now();
    },
    delegate: void 0
  };
})(vu);
var XP = h && h.__extends || function() {
  var e = function(r, t) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var o in i)
        Object.prototype.hasOwnProperty.call(i, o) && (n[o] = i[o]);
    }, e(r, t);
  };
  return function(r, t) {
    if (typeof t != "function" && t !== null)
      throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
    e(r, t);
    function n() {
      this.constructor = r;
    }
    r.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}();
Object.defineProperty(zn, "__esModule", { value: !0 });
zn.ReplaySubject = void 0;
var JP = De, eI = vu, tI = function(e) {
  XP(r, e);
  function r(t, n, i) {
    t === void 0 && (t = 1 / 0), n === void 0 && (n = 1 / 0), i === void 0 && (i = eI.dateTimestampProvider);
    var o = e.call(this) || this;
    return o._bufferSize = t, o._windowTime = n, o._timestampProvider = i, o._buffer = [], o._infiniteTimeWindow = !0, o._infiniteTimeWindow = n === 1 / 0, o._bufferSize = Math.max(1, t), o._windowTime = Math.max(1, n), o;
  }
  return r.prototype.next = function(t) {
    var n = this, i = n.isStopped, o = n._buffer, a = n._infiniteTimeWindow, u = n._timestampProvider, c = n._windowTime;
    i || (o.push(t), !a && o.push(u.now() + c)), this._trimBuffer(), e.prototype.next.call(this, t);
  }, r.prototype._subscribe = function(t) {
    this._throwIfClosed(), this._trimBuffer();
    for (var n = this._innerSubscribe(t), i = this, o = i._infiniteTimeWindow, a = i._buffer, u = a.slice(), c = 0; c < u.length && !t.closed; c += o ? 1 : 2)
      t.next(u[c]);
    return this._checkFinalizedStatuses(t), n;
  }, r.prototype._trimBuffer = function() {
    var t = this, n = t._bufferSize, i = t._timestampProvider, o = t._buffer, a = t._infiniteTimeWindow, u = (a ? 1 : 2) * n;
    if (n < 1 / 0 && u < o.length && o.splice(0, o.length - u), !a) {
      for (var c = i.now(), s = 0, l = 1; l < o.length && o[l] <= c; l += 2)
        s = l;
      s && o.splice(0, s + 1);
    }
  }, r;
}(JP.Subject);
zn.ReplaySubject = tI;
var Yn = {}, rI = h && h.__extends || function() {
  var e = function(r, t) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var o in i)
        Object.prototype.hasOwnProperty.call(i, o) && (n[o] = i[o]);
    }, e(r, t);
  };
  return function(r, t) {
    if (typeof t != "function" && t !== null)
      throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
    e(r, t);
    function n() {
      this.constructor = r;
    }
    r.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}();
Object.defineProperty(Yn, "__esModule", { value: !0 });
Yn.AsyncSubject = void 0;
var nI = De, iI = function(e) {
  rI(r, e);
  function r() {
    var t = e !== null && e.apply(this, arguments) || this;
    return t._value = null, t._hasValue = !1, t._isComplete = !1, t;
  }
  return r.prototype._checkFinalizedStatuses = function(t) {
    var n = this, i = n.hasError, o = n._hasValue, a = n._value, u = n.thrownError, c = n.isStopped, s = n._isComplete;
    i ? t.error(u) : (c || s) && (o && t.next(a), t.complete());
  }, r.prototype.next = function(t) {
    this.isStopped || (this._value = t, this._hasValue = !0);
  }, r.prototype.complete = function() {
    var t = this, n = t._hasValue, i = t._value, o = t._isComplete;
    o || (this._isComplete = !0, n && e.prototype.next.call(this, i), e.prototype.complete.call(this));
  }, r;
}(nI.Subject);
Yn.AsyncSubject = iI;
var Hy = {}, pu = {}, Sr = {}, _u = {}, oI = h && h.__extends || function() {
  var e = function(r, t) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var o in i)
        Object.prototype.hasOwnProperty.call(i, o) && (n[o] = i[o]);
    }, e(r, t);
  };
  return function(r, t) {
    if (typeof t != "function" && t !== null)
      throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
    e(r, t);
    function n() {
      this.constructor = r;
    }
    r.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}();
Object.defineProperty(_u, "__esModule", { value: !0 });
_u.Action = void 0;
var aI = qe, uI = function(e) {
  oI(r, e);
  function r(t, n) {
    return e.call(this) || this;
  }
  return r.prototype.schedule = function(t, n) {
    return this;
  }, r;
}(aI.Subscription);
_u.Action = uI;
var zy = {};
(function(e) {
  var r = h && h.__read || function(n, i) {
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
  }, t = h && h.__spreadArray || function(n, i) {
    for (var o = 0, a = i.length, u = n.length; o < a; o++, u++)
      n[u] = i[o];
    return n;
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.intervalProvider = void 0, e.intervalProvider = {
    setInterval: function(n, i) {
      for (var o = [], a = 2; a < arguments.length; a++)
        o[a - 2] = arguments[a];
      var u = e.intervalProvider.delegate;
      return u != null && u.setInterval ? u.setInterval.apply(u, t([n, i], r(o))) : setInterval.apply(void 0, t([n, i], r(o)));
    },
    clearInterval: function(n) {
      var i = e.intervalProvider.delegate;
      return ((i == null ? void 0 : i.clearInterval) || clearInterval)(n);
    },
    delegate: void 0
  };
})(zy);
var sI = h && h.__extends || function() {
  var e = function(r, t) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var o in i)
        Object.prototype.hasOwnProperty.call(i, o) && (n[o] = i[o]);
    }, e(r, t);
  };
  return function(r, t) {
    if (typeof t != "function" && t !== null)
      throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
    e(r, t);
    function n() {
      this.constructor = r;
    }
    r.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}();
Object.defineProperty(Sr, "__esModule", { value: !0 });
Sr.AsyncAction = void 0;
var cI = _u, Hh = zy, lI = Rt, fI = function(e) {
  sI(r, e);
  function r(t, n) {
    var i = e.call(this, t, n) || this;
    return i.scheduler = t, i.work = n, i.pending = !1, i;
  }
  return r.prototype.schedule = function(t, n) {
    var i;
    if (n === void 0 && (n = 0), this.closed)
      return this;
    this.state = t;
    var o = this.id, a = this.scheduler;
    return o != null && (this.id = this.recycleAsyncId(a, o, n)), this.pending = !0, this.delay = n, this.id = (i = this.id) !== null && i !== void 0 ? i : this.requestAsyncId(a, this.id, n), this;
  }, r.prototype.requestAsyncId = function(t, n, i) {
    return i === void 0 && (i = 0), Hh.intervalProvider.setInterval(t.flush.bind(t, this), i);
  }, r.prototype.recycleAsyncId = function(t, n, i) {
    if (i === void 0 && (i = 0), i != null && this.delay === i && this.pending === !1)
      return n;
    n != null && Hh.intervalProvider.clearInterval(n);
  }, r.prototype.execute = function(t, n) {
    if (this.closed)
      return new Error("executing a cancelled action");
    this.pending = !1;
    var i = this._execute(t, n);
    if (i)
      return i;
    this.pending === !1 && this.id != null && (this.id = this.recycleAsyncId(this.scheduler, this.id, null));
  }, r.prototype._execute = function(t, n) {
    var i = !1, o;
    try {
      this.work(t);
    } catch (a) {
      i = !0, o = a || new Error("Scheduled action threw falsy error");
    }
    if (i)
      return this.unsubscribe(), o;
  }, r.prototype.unsubscribe = function() {
    if (!this.closed) {
      var t = this, n = t.id, i = t.scheduler, o = i.actions;
      this.work = this.state = this.scheduler = null, this.pending = !1, lI.arrRemove(o, this), n != null && (this.id = this.recycleAsyncId(i, n, null)), this.delay = null, e.prototype.unsubscribe.call(this);
    }
  }, r;
}(cI.Action);
Sr.AsyncAction = fI;
var Yy = {}, jn = {};
Object.defineProperty(jn, "__esModule", { value: !0 });
jn.TestTools = jn.Immediate = void 0;
var dI = 1, bl, Fa = {};
function zh(e) {
  return e in Fa ? (delete Fa[e], !0) : !1;
}
jn.Immediate = {
  setImmediate: function(e) {
    var r = dI++;
    return Fa[r] = !0, bl || (bl = Promise.resolve()), bl.then(function() {
      return zh(r) && e();
    }), r;
  },
  clearImmediate: function(e) {
    zh(e);
  }
};
jn.TestTools = {
  pending: function() {
    return Object.keys(Fa).length;
  }
};
(function(e) {
  var r = h && h.__read || function(a, u) {
    var c = typeof Symbol == "function" && a[Symbol.iterator];
    if (!c)
      return a;
    var s = c.call(a), l, f = [], y;
    try {
      for (; (u === void 0 || u-- > 0) && !(l = s.next()).done; )
        f.push(l.value);
    } catch (b) {
      y = { error: b };
    } finally {
      try {
        l && !l.done && (c = s.return) && c.call(s);
      } finally {
        if (y)
          throw y.error;
      }
    }
    return f;
  }, t = h && h.__spreadArray || function(a, u) {
    for (var c = 0, s = u.length, l = a.length; c < s; c++, l++)
      a[l] = u[c];
    return a;
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.immediateProvider = void 0;
  var n = jn, i = n.Immediate.setImmediate, o = n.Immediate.clearImmediate;
  e.immediateProvider = {
    setImmediate: function() {
      for (var a = [], u = 0; u < arguments.length; u++)
        a[u] = arguments[u];
      var c = e.immediateProvider.delegate;
      return ((c == null ? void 0 : c.setImmediate) || i).apply(void 0, t([], r(a)));
    },
    clearImmediate: function(a) {
      var u = e.immediateProvider.delegate;
      return ((u == null ? void 0 : u.clearImmediate) || o)(a);
    },
    delegate: void 0
  };
})(Yy);
var hI = h && h.__extends || function() {
  var e = function(r, t) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var o in i)
        Object.prototype.hasOwnProperty.call(i, o) && (n[o] = i[o]);
    }, e(r, t);
  };
  return function(r, t) {
    if (typeof t != "function" && t !== null)
      throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
    e(r, t);
    function n() {
      this.constructor = r;
    }
    r.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}();
Object.defineProperty(pu, "__esModule", { value: !0 });
pu.AsapAction = void 0;
var vI = Sr, Yh = Yy, pI = function(e) {
  hI(r, e);
  function r(t, n) {
    var i = e.call(this, t, n) || this;
    return i.scheduler = t, i.work = n, i;
  }
  return r.prototype.requestAsyncId = function(t, n, i) {
    return i === void 0 && (i = 0), i !== null && i > 0 ? e.prototype.requestAsyncId.call(this, t, n, i) : (t.actions.push(this), t._scheduled || (t._scheduled = Yh.immediateProvider.setImmediate(t.flush.bind(t, void 0))));
  }, r.prototype.recycleAsyncId = function(t, n, i) {
    var o;
    if (i === void 0 && (i = 0), i != null ? i > 0 : this.delay > 0)
      return e.prototype.recycleAsyncId.call(this, t, n, i);
    var a = t.actions;
    n != null && ((o = a[a.length - 1]) === null || o === void 0 ? void 0 : o.id) !== n && (Yh.immediateProvider.clearImmediate(n), t._scheduled = void 0);
  }, r;
}(vI.AsyncAction);
pu.AsapAction = pI;
var yu = {}, Tr = {}, ao = {};
Object.defineProperty(ao, "__esModule", { value: !0 });
ao.Scheduler = void 0;
var _I = vu, yI = function() {
  function e(r, t) {
    t === void 0 && (t = e.now), this.schedulerActionCtor = r, this.now = t;
  }
  return e.prototype.schedule = function(r, t, n) {
    return t === void 0 && (t = 0), new this.schedulerActionCtor(this, r).schedule(n, t);
  }, e.now = _I.dateTimestampProvider.now, e;
}();
ao.Scheduler = yI;
var mI = h && h.__extends || function() {
  var e = function(r, t) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var o in i)
        Object.prototype.hasOwnProperty.call(i, o) && (n[o] = i[o]);
    }, e(r, t);
  };
  return function(r, t) {
    if (typeof t != "function" && t !== null)
      throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
    e(r, t);
    function n() {
      this.constructor = r;
    }
    r.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}();
Object.defineProperty(Tr, "__esModule", { value: !0 });
Tr.AsyncScheduler = void 0;
var Gh = ao, bI = function(e) {
  mI(r, e);
  function r(t, n) {
    n === void 0 && (n = Gh.Scheduler.now);
    var i = e.call(this, t, n) || this;
    return i.actions = [], i._active = !1, i;
  }
  return r.prototype.flush = function(t) {
    var n = this.actions;
    if (this._active) {
      n.push(t);
      return;
    }
    var i;
    this._active = !0;
    do
      if (i = t.execute(t.state, t.delay))
        break;
    while (t = n.shift());
    if (this._active = !1, i) {
      for (; t = n.shift(); )
        t.unsubscribe();
      throw i;
    }
  }, r;
}(Gh.Scheduler);
Tr.AsyncScheduler = bI;
var gI = h && h.__extends || function() {
  var e = function(r, t) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var o in i)
        Object.prototype.hasOwnProperty.call(i, o) && (n[o] = i[o]);
    }, e(r, t);
  };
  return function(r, t) {
    if (typeof t != "function" && t !== null)
      throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
    e(r, t);
    function n() {
      this.constructor = r;
    }
    r.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}();
Object.defineProperty(yu, "__esModule", { value: !0 });
yu.AsapScheduler = void 0;
var OI = Tr, wI = function(e) {
  gI(r, e);
  function r() {
    return e !== null && e.apply(this, arguments) || this;
  }
  return r.prototype.flush = function(t) {
    this._active = !0;
    var n = this._scheduled;
    this._scheduled = void 0;
    var i = this.actions, o;
    t = t || i.shift();
    do
      if (o = t.execute(t.state, t.delay))
        break;
    while ((t = i[0]) && t.id === n && i.shift());
    if (this._active = !1, o) {
      for (; (t = i[0]) && t.id === n && i.shift(); )
        t.unsubscribe();
      throw o;
    }
  }, r;
}(OI.AsyncScheduler);
yu.AsapScheduler = wI;
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.asap = e.asapScheduler = void 0;
  var r = pu, t = yu;
  e.asapScheduler = new t.AsapScheduler(r.AsapAction), e.asap = e.asapScheduler;
})(Hy);
var ft = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.async = e.asyncScheduler = void 0;
  var r = Sr, t = Tr;
  e.asyncScheduler = new t.AsyncScheduler(r.AsyncAction), e.async = e.asyncScheduler;
})(ft);
var Gy = {}, mu = {}, EI = h && h.__extends || function() {
  var e = function(r, t) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var o in i)
        Object.prototype.hasOwnProperty.call(i, o) && (n[o] = i[o]);
    }, e(r, t);
  };
  return function(r, t) {
    if (typeof t != "function" && t !== null)
      throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
    e(r, t);
    function n() {
      this.constructor = r;
    }
    r.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}();
Object.defineProperty(mu, "__esModule", { value: !0 });
mu.QueueAction = void 0;
var SI = Sr, TI = function(e) {
  EI(r, e);
  function r(t, n) {
    var i = e.call(this, t, n) || this;
    return i.scheduler = t, i.work = n, i;
  }
  return r.prototype.schedule = function(t, n) {
    return n === void 0 && (n = 0), n > 0 ? e.prototype.schedule.call(this, t, n) : (this.delay = n, this.state = t, this.scheduler.flush(this), this);
  }, r.prototype.execute = function(t, n) {
    return n > 0 || this.closed ? e.prototype.execute.call(this, t, n) : this._execute(t, n);
  }, r.prototype.requestAsyncId = function(t, n, i) {
    return i === void 0 && (i = 0), i != null && i > 0 || i == null && this.delay > 0 ? e.prototype.requestAsyncId.call(this, t, n, i) : (t.flush(this), 0);
  }, r;
}(SI.AsyncAction);
mu.QueueAction = TI;
var bu = {}, PI = h && h.__extends || function() {
  var e = function(r, t) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var o in i)
        Object.prototype.hasOwnProperty.call(i, o) && (n[o] = i[o]);
    }, e(r, t);
  };
  return function(r, t) {
    if (typeof t != "function" && t !== null)
      throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
    e(r, t);
    function n() {
      this.constructor = r;
    }
    r.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}();
Object.defineProperty(bu, "__esModule", { value: !0 });
bu.QueueScheduler = void 0;
var II = Tr, AI = function(e) {
  PI(r, e);
  function r() {
    return e !== null && e.apply(this, arguments) || this;
  }
  return r;
}(II.AsyncScheduler);
bu.QueueScheduler = AI;
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.queue = e.queueScheduler = void 0;
  var r = mu, t = bu;
  e.queueScheduler = new t.QueueScheduler(r.QueueAction), e.queue = e.queueScheduler;
})(Gy);
var Ky = {}, gu = {}, RI = h && h.__extends || function() {
  var e = function(r, t) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var o in i)
        Object.prototype.hasOwnProperty.call(i, o) && (n[o] = i[o]);
    }, e(r, t);
  };
  return function(r, t) {
    if (typeof t != "function" && t !== null)
      throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
    e(r, t);
    function n() {
      this.constructor = r;
    }
    r.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}();
Object.defineProperty(gu, "__esModule", { value: !0 });
gu.AnimationFrameAction = void 0;
var CI = Sr, Kh = Zf, $I = function(e) {
  RI(r, e);
  function r(t, n) {
    var i = e.call(this, t, n) || this;
    return i.scheduler = t, i.work = n, i;
  }
  return r.prototype.requestAsyncId = function(t, n, i) {
    return i === void 0 && (i = 0), i !== null && i > 0 ? e.prototype.requestAsyncId.call(this, t, n, i) : (t.actions.push(this), t._scheduled || (t._scheduled = Kh.animationFrameProvider.requestAnimationFrame(function() {
      return t.flush(void 0);
    })));
  }, r.prototype.recycleAsyncId = function(t, n, i) {
    var o;
    if (i === void 0 && (i = 0), i != null ? i > 0 : this.delay > 0)
      return e.prototype.recycleAsyncId.call(this, t, n, i);
    var a = t.actions;
    n != null && ((o = a[a.length - 1]) === null || o === void 0 ? void 0 : o.id) !== n && (Kh.animationFrameProvider.cancelAnimationFrame(n), t._scheduled = void 0);
  }, r;
}(CI.AsyncAction);
gu.AnimationFrameAction = $I;
var Ou = {}, jI = h && h.__extends || function() {
  var e = function(r, t) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var o in i)
        Object.prototype.hasOwnProperty.call(i, o) && (n[o] = i[o]);
    }, e(r, t);
  };
  return function(r, t) {
    if (typeof t != "function" && t !== null)
      throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
    e(r, t);
    function n() {
      this.constructor = r;
    }
    r.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}();
Object.defineProperty(Ou, "__esModule", { value: !0 });
Ou.AnimationFrameScheduler = void 0;
var NI = Tr, MI = function(e) {
  jI(r, e);
  function r() {
    return e !== null && e.apply(this, arguments) || this;
  }
  return r.prototype.flush = function(t) {
    this._active = !0;
    var n = this._scheduled;
    this._scheduled = void 0;
    var i = this.actions, o;
    t = t || i.shift();
    do
      if (o = t.execute(t.state, t.delay))
        break;
    while ((t = i[0]) && t.id === n && i.shift());
    if (this._active = !1, o) {
      for (; (t = i[0]) && t.id === n && i.shift(); )
        t.unsubscribe();
      throw o;
    }
  }, r;
}(NI.AsyncScheduler);
Ou.AnimationFrameScheduler = MI;
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.animationFrame = e.animationFrameScheduler = void 0;
  var r = gu, t = Ou;
  e.animationFrameScheduler = new t.AnimationFrameScheduler(r.AnimationFrameAction), e.animationFrame = e.animationFrameScheduler;
})(Ky);
var Nn = {}, Zy = h && h.__extends || function() {
  var e = function(r, t) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var o in i)
        Object.prototype.hasOwnProperty.call(i, o) && (n[o] = i[o]);
    }, e(r, t);
  };
  return function(r, t) {
    if (typeof t != "function" && t !== null)
      throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
    e(r, t);
    function n() {
      this.constructor = r;
    }
    r.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}();
Object.defineProperty(Nn, "__esModule", { value: !0 });
Nn.VirtualAction = Nn.VirtualTimeScheduler = void 0;
var kI = Sr, DI = qe, UI = Tr, LI = function(e) {
  Zy(r, e);
  function r(t, n) {
    t === void 0 && (t = Qy), n === void 0 && (n = 1 / 0);
    var i = e.call(this, t, function() {
      return i.frame;
    }) || this;
    return i.maxFrames = n, i.frame = 0, i.index = -1, i;
  }
  return r.prototype.flush = function() {
    for (var t = this, n = t.actions, i = t.maxFrames, o, a; (a = n[0]) && a.delay <= i && (n.shift(), this.frame = a.delay, !(o = a.execute(a.state, a.delay))); )
      ;
    if (o) {
      for (; a = n.shift(); )
        a.unsubscribe();
      throw o;
    }
  }, r.frameTimeFactor = 10, r;
}(UI.AsyncScheduler);
Nn.VirtualTimeScheduler = LI;
var Qy = function(e) {
  Zy(r, e);
  function r(t, n, i) {
    i === void 0 && (i = t.index += 1);
    var o = e.call(this, t, n) || this;
    return o.scheduler = t, o.work = n, o.index = i, o.active = !0, o.index = t.index = i, o;
  }
  return r.prototype.schedule = function(t, n) {
    if (n === void 0 && (n = 0), Number.isFinite(n)) {
      if (!this.id)
        return e.prototype.schedule.call(this, t, n);
      this.active = !1;
      var i = new r(this.scheduler, this.work);
      return this.add(i), i.schedule(t, n);
    } else
      return DI.Subscription.EMPTY;
  }, r.prototype.requestAsyncId = function(t, n, i) {
    i === void 0 && (i = 0), this.delay = t.frame + i;
    var o = t.actions;
    return o.push(this), o.sort(r.sortActions), 1;
  }, r.prototype.recycleAsyncId = function(t, n, i) {
  }, r.prototype._execute = function(t, n) {
    if (this.active === !0)
      return e.prototype._execute.call(this, t, n);
  }, r.sortActions = function(t, n) {
    return t.delay === n.delay ? t.index === n.index ? 0 : t.index > n.index ? 1 : -1 : t.delay > n.delay ? 1 : -1;
  }, r;
}(kI.AsyncAction);
Nn.VirtualAction = Qy;
var wu = {}, It = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.empty = e.EMPTY = void 0;
  var r = ye;
  e.EMPTY = new r.Observable(function(i) {
    return i.complete();
  });
  function t(i) {
    return i ? n(i) : e.EMPTY;
  }
  e.empty = t;
  function n(i) {
    return new r.Observable(function(o) {
      return i.schedule(function() {
        return o.complete();
      });
    });
  }
})(It);
var Gn = {}, xe = {}, tn = {};
Object.defineProperty(tn, "__esModule", { value: !0 });
tn.isScheduler = void 0;
var FI = _e;
function xI(e) {
  return e && FI.isFunction(e.schedule);
}
tn.isScheduler = xI;
Object.defineProperty(xe, "__esModule", { value: !0 });
xe.popNumber = xe.popScheduler = xe.popResultSelector = void 0;
var BI = _e, WI = tn;
function Qf(e) {
  return e[e.length - 1];
}
function VI(e) {
  return BI.isFunction(Qf(e)) ? e.pop() : void 0;
}
xe.popResultSelector = VI;
function qI(e) {
  return WI.isScheduler(Qf(e)) ? e.pop() : void 0;
}
xe.popScheduler = qI;
function HI(e, r) {
  return typeof Qf(e) == "number" ? e.pop() : r;
}
xe.popNumber = HI;
var Ct = {}, uo = {}, Eu = {}, K = {}, Kn = {};
Object.defineProperty(Kn, "__esModule", { value: !0 });
Kn.isArrayLike = void 0;
Kn.isArrayLike = function(e) {
  return e && typeof e.length == "number" && typeof e != "function";
};
var so = {};
Object.defineProperty(so, "__esModule", { value: !0 });
so.isPromise = void 0;
var zI = _e;
function YI(e) {
  return zI.isFunction(e == null ? void 0 : e.then);
}
so.isPromise = YI;
var co = {};
Object.defineProperty(co, "__esModule", { value: !0 });
co.isInteropObservable = void 0;
var GI = Jr, KI = _e;
function ZI(e) {
  return KI.isFunction(e[GI.observable]);
}
co.isInteropObservable = ZI;
var lo = {};
Object.defineProperty(lo, "__esModule", { value: !0 });
lo.isAsyncIterable = void 0;
var QI = _e;
function XI(e) {
  return Symbol.asyncIterator && QI.isFunction(e == null ? void 0 : e[Symbol.asyncIterator]);
}
lo.isAsyncIterable = XI;
var fo = {};
Object.defineProperty(fo, "__esModule", { value: !0 });
fo.createInvalidObservableTypeError = void 0;
function JI(e) {
  return new TypeError("You provided " + (e !== null && typeof e == "object" ? "an invalid object" : "'" + e + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
}
fo.createInvalidObservableTypeError = JI;
var ho = {}, Hr = {};
Object.defineProperty(Hr, "__esModule", { value: !0 });
Hr.iterator = Hr.getSymbolIterator = void 0;
function Xy() {
  return typeof Symbol != "function" || !Symbol.iterator ? "@@iterator" : Symbol.iterator;
}
Hr.getSymbolIterator = Xy;
Hr.iterator = Xy();
Object.defineProperty(ho, "__esModule", { value: !0 });
ho.isIterable = void 0;
var eA = Hr, tA = _e;
function rA(e) {
  return tA.isFunction(e == null ? void 0 : e[eA.iterator]);
}
ho.isIterable = rA;
var _r = {}, nA = h && h.__generator || function(e, r) {
  var t = { label: 0, sent: function() {
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
    for (; t; )
      try {
        if (n = 1, i && (o = s[0] & 2 ? i.return : s[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, s[1])).done)
          return o;
        switch (i = 0, o && (s = [s[0] & 2, o.value]), s[0]) {
          case 0:
          case 1:
            o = s;
            break;
          case 4:
            return t.label++, { value: s[1], done: !1 };
          case 5:
            t.label++, i = s[1], s = [0];
            continue;
          case 7:
            s = t.ops.pop(), t.trys.pop();
            continue;
          default:
            if (o = t.trys, !(o = o.length > 0 && o[o.length - 1]) && (s[0] === 6 || s[0] === 2)) {
              t = 0;
              continue;
            }
            if (s[0] === 3 && (!o || s[1] > o[0] && s[1] < o[3])) {
              t.label = s[1];
              break;
            }
            if (s[0] === 6 && t.label < o[1]) {
              t.label = o[1], o = s;
              break;
            }
            if (o && t.label < o[2]) {
              t.label = o[2], t.ops.push(s);
              break;
            }
            o[2] && t.ops.pop(), t.trys.pop();
            continue;
        }
        s = r.call(e, t);
      } catch (l) {
        s = [6, l], i = 0;
      } finally {
        n = o = 0;
      }
    if (s[0] & 5)
      throw s[1];
    return { value: s[0] ? s[1] : void 0, done: !0 };
  }
}, Tn = h && h.__await || function(e) {
  return this instanceof Tn ? (this.v = e, this) : new Tn(e);
}, iA = h && h.__asyncGenerator || function(e, r, t) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var n = t.apply(e, r || []), i, o = [];
  return i = {}, a("next"), a("throw"), a("return"), i[Symbol.asyncIterator] = function() {
    return this;
  }, i;
  function a(y) {
    n[y] && (i[y] = function(b) {
      return new Promise(function(O, S) {
        o.push([y, b, O, S]) > 1 || u(y, b);
      });
    });
  }
  function u(y, b) {
    try {
      c(n[y](b));
    } catch (O) {
      f(o[0][3], O);
    }
  }
  function c(y) {
    y.value instanceof Tn ? Promise.resolve(y.value.v).then(s, l) : f(o[0][2], y);
  }
  function s(y) {
    u("next", y);
  }
  function l(y) {
    u("throw", y);
  }
  function f(y, b) {
    y(b), o.shift(), o.length && u(o[0][0], o[0][1]);
  }
};
Object.defineProperty(_r, "__esModule", { value: !0 });
_r.isReadableStreamLike = _r.readableStreamLikeToAsyncGenerator = void 0;
var oA = _e;
function aA(e) {
  return iA(this, arguments, function() {
    var t, n, i, o;
    return nA(this, function(a) {
      switch (a.label) {
        case 0:
          t = e.getReader(), a.label = 1;
        case 1:
          a.trys.push([1, , 9, 10]), a.label = 2;
        case 2:
          return [4, Tn(t.read())];
        case 3:
          return n = a.sent(), i = n.value, o = n.done, o ? [4, Tn(void 0)] : [3, 5];
        case 4:
          return [2, a.sent()];
        case 5:
          return [4, Tn(i)];
        case 6:
          return [4, a.sent()];
        case 7:
          return a.sent(), [3, 2];
        case 8:
          return [3, 10];
        case 9:
          return t.releaseLock(), [7];
        case 10:
          return [2];
      }
    });
  });
}
_r.readableStreamLikeToAsyncGenerator = aA;
function uA(e) {
  return oA.isFunction(e == null ? void 0 : e.getReader);
}
_r.isReadableStreamLike = uA;
var sA = h && h.__awaiter || function(e, r, t, n) {
  function i(o) {
    return o instanceof t ? o : new t(function(a) {
      a(o);
    });
  }
  return new (t || (t = Promise))(function(o, a) {
    function u(l) {
      try {
        s(n.next(l));
      } catch (f) {
        a(f);
      }
    }
    function c(l) {
      try {
        s(n.throw(l));
      } catch (f) {
        a(f);
      }
    }
    function s(l) {
      l.done ? o(l.value) : i(l.value).then(u, c);
    }
    s((n = n.apply(e, r || [])).next());
  });
}, cA = h && h.__generator || function(e, r) {
  var t = { label: 0, sent: function() {
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
    for (; t; )
      try {
        if (n = 1, i && (o = s[0] & 2 ? i.return : s[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, s[1])).done)
          return o;
        switch (i = 0, o && (s = [s[0] & 2, o.value]), s[0]) {
          case 0:
          case 1:
            o = s;
            break;
          case 4:
            return t.label++, { value: s[1], done: !1 };
          case 5:
            t.label++, i = s[1], s = [0];
            continue;
          case 7:
            s = t.ops.pop(), t.trys.pop();
            continue;
          default:
            if (o = t.trys, !(o = o.length > 0 && o[o.length - 1]) && (s[0] === 6 || s[0] === 2)) {
              t = 0;
              continue;
            }
            if (s[0] === 3 && (!o || s[1] > o[0] && s[1] < o[3])) {
              t.label = s[1];
              break;
            }
            if (s[0] === 6 && t.label < o[1]) {
              t.label = o[1], o = s;
              break;
            }
            if (o && t.label < o[2]) {
              t.label = o[2], t.ops.push(s);
              break;
            }
            o[2] && t.ops.pop(), t.trys.pop();
            continue;
        }
        s = r.call(e, t);
      } catch (l) {
        s = [6, l], i = 0;
      } finally {
        n = o = 0;
      }
    if (s[0] & 5)
      throw s[1];
    return { value: s[0] ? s[1] : void 0, done: !0 };
  }
}, lA = h && h.__asyncValues || function(e) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var r = e[Symbol.asyncIterator], t;
  return r ? r.call(e) : (e = typeof lf == "function" ? lf(e) : e[Symbol.iterator](), t = {}, n("next"), n("throw"), n("return"), t[Symbol.asyncIterator] = function() {
    return this;
  }, t);
  function n(o) {
    t[o] = e[o] && function(a) {
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
}, lf = h && h.__values || function(e) {
  var r = typeof Symbol == "function" && Symbol.iterator, t = r && e[r], n = 0;
  if (t)
    return t.call(e);
  if (e && typeof e.length == "number")
    return {
      next: function() {
        return e && n >= e.length && (e = void 0), { value: e && e[n++], done: !e };
      }
    };
  throw new TypeError(r ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(K, "__esModule", { value: !0 });
K.fromReadableStreamLike = K.fromAsyncIterable = K.fromIterable = K.fromPromise = K.fromArrayLike = K.fromInteropObservable = K.innerFrom = void 0;
var fA = Kn, dA = so, Zn = ye, hA = co, vA = lo, pA = fo, _A = ho, Jy = _r, yA = _e, mA = ro, bA = Jr;
function gA(e) {
  if (e instanceof Zn.Observable)
    return e;
  if (e != null) {
    if (hA.isInteropObservable(e))
      return em(e);
    if (fA.isArrayLike(e))
      return tm(e);
    if (dA.isPromise(e))
      return rm(e);
    if (vA.isAsyncIterable(e))
      return Xf(e);
    if (_A.isIterable(e))
      return nm(e);
    if (Jy.isReadableStreamLike(e))
      return im(e);
  }
  throw pA.createInvalidObservableTypeError(e);
}
K.innerFrom = gA;
function em(e) {
  return new Zn.Observable(function(r) {
    var t = e[bA.observable]();
    if (yA.isFunction(t.subscribe))
      return t.subscribe(r);
    throw new TypeError("Provided object does not correctly implement Symbol.observable");
  });
}
K.fromInteropObservable = em;
function tm(e) {
  return new Zn.Observable(function(r) {
    for (var t = 0; t < e.length && !r.closed; t++)
      r.next(e[t]);
    r.complete();
  });
}
K.fromArrayLike = tm;
function rm(e) {
  return new Zn.Observable(function(r) {
    e.then(function(t) {
      r.closed || (r.next(t), r.complete());
    }, function(t) {
      return r.error(t);
    }).then(null, mA.reportUnhandledError);
  });
}
K.fromPromise = rm;
function nm(e) {
  return new Zn.Observable(function(r) {
    var t, n;
    try {
      for (var i = lf(e), o = i.next(); !o.done; o = i.next()) {
        var a = o.value;
        if (r.next(a), r.closed)
          return;
      }
    } catch (u) {
      t = { error: u };
    } finally {
      try {
        o && !o.done && (n = i.return) && n.call(i);
      } finally {
        if (t)
          throw t.error;
      }
    }
    r.complete();
  });
}
K.fromIterable = nm;
function Xf(e) {
  return new Zn.Observable(function(r) {
    OA(e, r).catch(function(t) {
      return r.error(t);
    });
  });
}
K.fromAsyncIterable = Xf;
function im(e) {
  return Xf(Jy.readableStreamLikeToAsyncGenerator(e));
}
K.fromReadableStreamLike = im;
function OA(e, r) {
  var t, n, i, o;
  return sA(this, void 0, void 0, function() {
    var a, u;
    return cA(this, function(c) {
      switch (c.label) {
        case 0:
          c.trys.push([0, 5, 6, 11]), t = lA(e), c.label = 1;
        case 1:
          return [4, t.next()];
        case 2:
          if (n = c.sent(), !!n.done)
            return [3, 4];
          if (a = n.value, r.next(a), r.closed)
            return [2];
          c.label = 3;
        case 3:
          return [3, 1];
        case 4:
          return [3, 11];
        case 5:
          return u = c.sent(), i = { error: u }, [3, 11];
        case 6:
          return c.trys.push([6, , 9, 10]), n && !n.done && (o = t.return) ? [4, o.call(t)] : [3, 8];
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
          return r.complete(), [2];
      }
    });
  });
}
var rn = {}, $t = {};
Object.defineProperty($t, "__esModule", { value: !0 });
$t.executeSchedule = void 0;
function wA(e, r, t, n, i) {
  n === void 0 && (n = 0), i === void 0 && (i = !1);
  var o = r.schedule(function() {
    t(), i ? e.add(this.schedule(null, n)) : this.unsubscribe();
  }, n);
  if (e.add(o), !i)
    return o;
}
$t.executeSchedule = wA;
Object.defineProperty(rn, "__esModule", { value: !0 });
rn.observeOn = void 0;
var gl = $t, EA = W, SA = z;
function TA(e, r) {
  return r === void 0 && (r = 0), EA.operate(function(t, n) {
    t.subscribe(SA.createOperatorSubscriber(n, function(i) {
      return gl.executeSchedule(n, e, function() {
        return n.next(i);
      }, r);
    }, function() {
      return gl.executeSchedule(n, e, function() {
        return n.complete();
      }, r);
    }, function(i) {
      return gl.executeSchedule(n, e, function() {
        return n.error(i);
      }, r);
    }));
  });
}
rn.observeOn = TA;
var nn = {};
Object.defineProperty(nn, "__esModule", { value: !0 });
nn.subscribeOn = void 0;
var PA = W;
function IA(e, r) {
  return r === void 0 && (r = 0), PA.operate(function(t, n) {
    n.add(e.schedule(function() {
      return t.subscribe(n);
    }, r));
  });
}
nn.subscribeOn = IA;
Object.defineProperty(Eu, "__esModule", { value: !0 });
Eu.scheduleObservable = void 0;
var AA = K, RA = rn, CA = nn;
function $A(e, r) {
  return AA.innerFrom(e).pipe(CA.subscribeOn(r), RA.observeOn(r));
}
Eu.scheduleObservable = $A;
var Su = {};
Object.defineProperty(Su, "__esModule", { value: !0 });
Su.schedulePromise = void 0;
var jA = K, NA = rn, MA = nn;
function kA(e, r) {
  return jA.innerFrom(e).pipe(MA.subscribeOn(r), NA.observeOn(r));
}
Su.schedulePromise = kA;
var Tu = {};
Object.defineProperty(Tu, "__esModule", { value: !0 });
Tu.scheduleArray = void 0;
var DA = ye;
function UA(e, r) {
  return new DA.Observable(function(t) {
    var n = 0;
    return r.schedule(function() {
      n === e.length ? t.complete() : (t.next(e[n++]), t.closed || this.schedule());
    });
  });
}
Tu.scheduleArray = UA;
var vo = {};
Object.defineProperty(vo, "__esModule", { value: !0 });
vo.scheduleIterable = void 0;
var LA = ye, FA = Hr, xA = _e, Zh = $t;
function BA(e, r) {
  return new LA.Observable(function(t) {
    var n;
    return Zh.executeSchedule(t, r, function() {
      n = e[FA.iterator](), Zh.executeSchedule(t, r, function() {
        var i, o, a;
        try {
          i = n.next(), o = i.value, a = i.done;
        } catch (u) {
          t.error(u);
          return;
        }
        a ? t.complete() : t.next(o);
      }, 0, !0);
    }), function() {
      return xA.isFunction(n == null ? void 0 : n.return) && n.return();
    };
  });
}
vo.scheduleIterable = BA;
var po = {};
Object.defineProperty(po, "__esModule", { value: !0 });
po.scheduleAsyncIterable = void 0;
var WA = ye, Qh = $t;
function VA(e, r) {
  if (!e)
    throw new Error("Iterable cannot be null");
  return new WA.Observable(function(t) {
    Qh.executeSchedule(t, r, function() {
      var n = e[Symbol.asyncIterator]();
      Qh.executeSchedule(t, r, function() {
        n.next().then(function(i) {
          i.done ? t.complete() : t.next(i.value);
        });
      }, 0, !0);
    });
  });
}
po.scheduleAsyncIterable = VA;
var Pu = {};
Object.defineProperty(Pu, "__esModule", { value: !0 });
Pu.scheduleReadableStreamLike = void 0;
var qA = po, HA = _r;
function zA(e, r) {
  return qA.scheduleAsyncIterable(HA.readableStreamLikeToAsyncGenerator(e), r);
}
Pu.scheduleReadableStreamLike = zA;
Object.defineProperty(uo, "__esModule", { value: !0 });
uo.scheduled = void 0;
var YA = Eu, GA = Su, KA = Tu, ZA = vo, QA = po, XA = co, JA = so, eR = Kn, tR = ho, rR = lo, nR = fo, iR = _r, oR = Pu;
function aR(e, r) {
  if (e != null) {
    if (XA.isInteropObservable(e))
      return YA.scheduleObservable(e, r);
    if (eR.isArrayLike(e))
      return KA.scheduleArray(e, r);
    if (JA.isPromise(e))
      return GA.schedulePromise(e, r);
    if (rR.isAsyncIterable(e))
      return QA.scheduleAsyncIterable(e, r);
    if (tR.isIterable(e))
      return ZA.scheduleIterable(e, r);
    if (iR.isReadableStreamLike(e))
      return oR.scheduleReadableStreamLike(e, r);
  }
  throw nR.createInvalidObservableTypeError(e);
}
uo.scheduled = aR;
Object.defineProperty(Ct, "__esModule", { value: !0 });
Ct.from = void 0;
var uR = uo, sR = K;
function cR(e, r) {
  return r ? uR.scheduled(e, r) : sR.innerFrom(e);
}
Ct.from = cR;
Object.defineProperty(Gn, "__esModule", { value: !0 });
Gn.of = void 0;
var lR = xe, fR = Ct;
function dR() {
  for (var e = [], r = 0; r < arguments.length; r++)
    e[r] = arguments[r];
  var t = lR.popScheduler(e);
  return fR.from(e, t);
}
Gn.of = dR;
var _o = {};
Object.defineProperty(_o, "__esModule", { value: !0 });
_o.throwError = void 0;
var hR = ye, vR = _e;
function pR(e, r) {
  var t = vR.isFunction(e) ? e : function() {
    return e;
  }, n = function(i) {
    return i.error(t());
  };
  return new hR.Observable(r ? function(i) {
    return r.schedule(n, 0, i);
  } : n);
}
_o.throwError = pR;
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.observeNotification = e.Notification = e.NotificationKind = void 0;
  var r = It, t = Gn, n = _o, i = _e;
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
      var f = this, y = f.kind, b = f.value, O = f.error;
      return y === "N" ? c == null ? void 0 : c(b) : y === "E" ? s == null ? void 0 : s(O) : l == null ? void 0 : l();
    }, u.prototype.accept = function(c, s, l) {
      var f;
      return i.isFunction((f = c) === null || f === void 0 ? void 0 : f.next) ? this.observe(c) : this.do(c, s, l);
    }, u.prototype.toObservable = function() {
      var c = this, s = c.kind, l = c.value, f = c.error, y = s === "N" ? t.of(l) : s === "E" ? n.throwError(function() {
        return f;
      }) : s === "C" ? r.EMPTY : 0;
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
    var s, l, f, y = u, b = y.kind, O = y.value, S = y.error;
    if (typeof b != "string")
      throw new TypeError('Invalid notification, missing "kind"');
    b === "N" ? (s = c.next) === null || s === void 0 || s.call(c, O) : b === "E" ? (l = c.error) === null || l === void 0 || l.call(c, S) : (f = c.complete) === null || f === void 0 || f.call(c);
  }
  e.observeNotification = a;
})(wu);
var Iu = {};
Object.defineProperty(Iu, "__esModule", { value: !0 });
Iu.isObservable = void 0;
var _R = ye, Xh = _e;
function yR(e) {
  return !!e && (e instanceof _R.Observable || Xh.isFunction(e.lift) && Xh.isFunction(e.subscribe));
}
Iu.isObservable = yR;
var Au = {}, Wt = {};
Object.defineProperty(Wt, "__esModule", { value: !0 });
Wt.EmptyError = void 0;
var mR = Bt;
Wt.EmptyError = mR.createErrorClass(function(e) {
  return function() {
    e(this), this.name = "EmptyError", this.message = "no elements in sequence";
  };
});
Object.defineProperty(Au, "__esModule", { value: !0 });
Au.lastValueFrom = void 0;
var bR = Wt;
function gR(e, r) {
  var t = typeof r == "object";
  return new Promise(function(n, i) {
    var o = !1, a;
    e.subscribe({
      next: function(u) {
        a = u, o = !0;
      },
      error: i,
      complete: function() {
        o ? n(a) : t ? n(r.defaultValue) : i(new bR.EmptyError());
      }
    });
  });
}
Au.lastValueFrom = gR;
var Ru = {};
Object.defineProperty(Ru, "__esModule", { value: !0 });
Ru.firstValueFrom = void 0;
var OR = Wt, wR = Hn;
function ER(e, r) {
  var t = typeof r == "object";
  return new Promise(function(n, i) {
    var o = new wR.SafeSubscriber({
      next: function(a) {
        n(a), o.unsubscribe();
      },
      error: i,
      complete: function() {
        t ? n(r.defaultValue) : i(new OR.EmptyError());
      }
    });
    e.subscribe(o);
  });
}
Ru.firstValueFrom = ER;
var yo = {};
Object.defineProperty(yo, "__esModule", { value: !0 });
yo.ArgumentOutOfRangeError = void 0;
var SR = Bt;
yo.ArgumentOutOfRangeError = SR.createErrorClass(function(e) {
  return function() {
    e(this), this.name = "ArgumentOutOfRangeError", this.message = "argument out of range";
  };
});
var mo = {};
Object.defineProperty(mo, "__esModule", { value: !0 });
mo.NotFoundError = void 0;
var TR = Bt;
mo.NotFoundError = TR.createErrorClass(function(e) {
  return function(t) {
    e(this), this.name = "NotFoundError", this.message = t;
  };
});
var bo = {};
Object.defineProperty(bo, "__esModule", { value: !0 });
bo.SequenceError = void 0;
var PR = Bt;
bo.SequenceError = PR.createErrorClass(function(e) {
  return function(t) {
    e(this), this.name = "SequenceError", this.message = t;
  };
});
var xa = {}, Qn = {};
Object.defineProperty(Qn, "__esModule", { value: !0 });
Qn.isValidDate = void 0;
function IR(e) {
  return e instanceof Date && !isNaN(e);
}
Qn.isValidDate = IR;
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.timeout = e.TimeoutError = void 0;
  var r = ft, t = Qn, n = W, i = K, o = Bt, a = z, u = $t;
  e.TimeoutError = o.createErrorClass(function(l) {
    return function(y) {
      y === void 0 && (y = null), l(this), this.message = "Timeout has occurred", this.name = "TimeoutError", this.info = y;
    };
  });
  function c(l, f) {
    var y = t.isValidDate(l) ? { first: l } : typeof l == "number" ? { each: l } : l, b = y.first, O = y.each, S = y.with, P = S === void 0 ? s : S, R = y.scheduler, $ = R === void 0 ? f ?? r.asyncScheduler : R, j = y.meta, k = j === void 0 ? null : j;
    if (b == null && O == null)
      throw new TypeError("No timeout provided.");
    return n.operate(function(L, Y) {
      var ee, le, me = null, Me = 0, Pe = function(Ue) {
        le = u.executeSchedule(Y, $, function() {
          try {
            ee.unsubscribe(), i.innerFrom(P({
              meta: k,
              lastValue: me,
              seen: Me
            })).subscribe(Y);
          } catch (be) {
            Y.error(be);
          }
        }, Ue);
      };
      ee = L.subscribe(a.createOperatorSubscriber(Y, function(Ue) {
        le == null || le.unsubscribe(), Me++, Y.next(me = Ue), O > 0 && Pe(O);
      }, void 0, void 0, function() {
        le != null && le.closed || le == null || le.unsubscribe(), me = null;
      })), !Me && Pe(b != null ? typeof b == "number" ? b : +b - $.now() : O);
    });
  }
  e.timeout = c;
  function s(l) {
    throw new e.TimeoutError(l);
  }
})(xa);
var Cu = {}, go = {}, Vt = {}, qt = {};
Object.defineProperty(qt, "__esModule", { value: !0 });
qt.map = void 0;
var AR = W, RR = z;
function CR(e, r) {
  return AR.operate(function(t, n) {
    var i = 0;
    t.subscribe(RR.createOperatorSubscriber(n, function(o) {
      n.next(e.call(r, o, i++));
    }));
  });
}
qt.map = CR;
var $R = h && h.__read || function(e, r) {
  var t = typeof Symbol == "function" && e[Symbol.iterator];
  if (!t)
    return e;
  var n = t.call(e), i, o = [], a;
  try {
    for (; (r === void 0 || r-- > 0) && !(i = n.next()).done; )
      o.push(i.value);
  } catch (u) {
    a = { error: u };
  } finally {
    try {
      i && !i.done && (t = n.return) && t.call(n);
    } finally {
      if (a)
        throw a.error;
    }
  }
  return o;
}, jR = h && h.__spreadArray || function(e, r) {
  for (var t = 0, n = r.length, i = e.length; t < n; t++, i++)
    e[i] = r[t];
  return e;
};
Object.defineProperty(Vt, "__esModule", { value: !0 });
Vt.mapOneOrManyArgs = void 0;
var NR = qt, MR = Array.isArray;
function kR(e, r) {
  return MR(r) ? e.apply(void 0, jR([], $R(r))) : e(r);
}
function DR(e) {
  return NR.map(function(r) {
    return kR(e, r);
  });
}
Vt.mapOneOrManyArgs = DR;
var UR = h && h.__read || function(e, r) {
  var t = typeof Symbol == "function" && e[Symbol.iterator];
  if (!t)
    return e;
  var n = t.call(e), i, o = [], a;
  try {
    for (; (r === void 0 || r-- > 0) && !(i = n.next()).done; )
      o.push(i.value);
  } catch (u) {
    a = { error: u };
  } finally {
    try {
      i && !i.done && (t = n.return) && t.call(n);
    } finally {
      if (a)
        throw a.error;
    }
  }
  return o;
}, Jh = h && h.__spreadArray || function(e, r) {
  for (var t = 0, n = r.length, i = e.length; t < n; t++, i++)
    e[i] = r[t];
  return e;
};
Object.defineProperty(go, "__esModule", { value: !0 });
go.bindCallbackInternals = void 0;
var LR = tn, FR = ye, xR = nn, BR = Vt, WR = rn, VR = Yn;
function ff(e, r, t, n) {
  if (t)
    if (LR.isScheduler(t))
      n = t;
    else
      return function() {
        for (var i = [], o = 0; o < arguments.length; o++)
          i[o] = arguments[o];
        return ff(e, r, n).apply(this, i).pipe(BR.mapOneOrManyArgs(t));
      };
  return n ? function() {
    for (var i = [], o = 0; o < arguments.length; o++)
      i[o] = arguments[o];
    return ff(e, r).apply(this, i).pipe(xR.subscribeOn(n), WR.observeOn(n));
  } : function() {
    for (var i = this, o = [], a = 0; a < arguments.length; a++)
      o[a] = arguments[a];
    var u = new VR.AsyncSubject(), c = !0;
    return new FR.Observable(function(s) {
      var l = u.subscribe(s);
      if (c) {
        c = !1;
        var f = !1, y = !1;
        r.apply(i, Jh(Jh([], UR(o)), [
          function() {
            for (var b = [], O = 0; O < arguments.length; O++)
              b[O] = arguments[O];
            if (e) {
              var S = b.shift();
              if (S != null) {
                u.error(S);
                return;
              }
            }
            u.next(1 < b.length ? b : b[0]), y = !0, f && u.complete();
          }
        ])), y && u.complete(), f = !0;
      }
      return l;
    });
  };
}
go.bindCallbackInternals = ff;
Object.defineProperty(Cu, "__esModule", { value: !0 });
Cu.bindCallback = void 0;
var qR = go;
function HR(e, r, t) {
  return qR.bindCallbackInternals(!1, e, r, t);
}
Cu.bindCallback = HR;
var $u = {};
Object.defineProperty($u, "__esModule", { value: !0 });
$u.bindNodeCallback = void 0;
var zR = go;
function YR(e, r, t) {
  return zR.bindCallbackInternals(!0, e, r, t);
}
$u.bindNodeCallback = YR;
var yr = {}, Oo = {};
Object.defineProperty(Oo, "__esModule", { value: !0 });
Oo.argsArgArrayOrObject = void 0;
var GR = Array.isArray, KR = Object.getPrototypeOf, ZR = Object.prototype, QR = Object.keys;
function XR(e) {
  if (e.length === 1) {
    var r = e[0];
    if (GR(r))
      return { args: r, keys: null };
    if (JR(r)) {
      var t = QR(r);
      return {
        args: t.map(function(n) {
          return r[n];
        }),
        keys: t
      };
    }
  }
  return { args: e, keys: null };
}
Oo.argsArgArrayOrObject = XR;
function JR(e) {
  return e && typeof e == "object" && KR(e) === ZR;
}
var wo = {};
Object.defineProperty(wo, "__esModule", { value: !0 });
wo.createObject = void 0;
function eC(e, r) {
  return e.reduce(function(t, n, i) {
    return t[n] = r[i], t;
  }, {});
}
wo.createObject = eC;
Object.defineProperty(yr, "__esModule", { value: !0 });
yr.combineLatestInit = yr.combineLatest = void 0;
var tC = ye, rC = Oo, om = Ct, am = Ye, nC = Vt, ev = xe, iC = wo, oC = z, aC = $t;
function uC() {
  for (var e = [], r = 0; r < arguments.length; r++)
    e[r] = arguments[r];
  var t = ev.popScheduler(e), n = ev.popResultSelector(e), i = rC.argsArgArrayOrObject(e), o = i.args, a = i.keys;
  if (o.length === 0)
    return om.from([], t);
  var u = new tC.Observable(um(o, t, a ? function(c) {
    return iC.createObject(a, c);
  } : am.identity));
  return n ? u.pipe(nC.mapOneOrManyArgs(n)) : u;
}
yr.combineLatest = uC;
function um(e, r, t) {
  return t === void 0 && (t = am.identity), function(n) {
    tv(r, function() {
      for (var i = e.length, o = new Array(i), a = i, u = i, c = function(l) {
        tv(r, function() {
          var f = om.from(e[l], r), y = !1;
          f.subscribe(oC.createOperatorSubscriber(n, function(b) {
            o[l] = b, y || (y = !0, u--), u || n.next(t(o.slice()));
          }, function() {
            --a || n.complete();
          }));
        }, n);
      }, s = 0; s < i; s++)
        c(s);
    }, n);
  };
}
yr.combineLatestInit = um;
function tv(e, r, t) {
  e ? aC.executeSchedule(t, e, r) : r();
}
var on = {}, Xn = {}, an = {}, jt = {}, Jn = {};
Object.defineProperty(Jn, "__esModule", { value: !0 });
Jn.mergeInternals = void 0;
var sC = K, cC = $t, rv = z;
function lC(e, r, t, n, i, o, a, u) {
  var c = [], s = 0, l = 0, f = !1, y = function() {
    f && !c.length && !s && r.complete();
  }, b = function(S) {
    return s < n ? O(S) : c.push(S);
  }, O = function(S) {
    o && r.next(S), s++;
    var P = !1;
    sC.innerFrom(t(S, l++)).subscribe(rv.createOperatorSubscriber(r, function(R) {
      i == null || i(R), o ? b(R) : r.next(R);
    }, function() {
      P = !0;
    }, void 0, function() {
      if (P)
        try {
          s--;
          for (var R = function() {
            var $ = c.shift();
            a ? cC.executeSchedule(r, a, function() {
              return O($);
            }) : O($);
          }; c.length && s < n; )
            R();
          y();
        } catch ($) {
          r.error($);
        }
    }));
  };
  return e.subscribe(rv.createOperatorSubscriber(r, b, function() {
    f = !0, y();
  })), function() {
    u == null || u();
  };
}
Jn.mergeInternals = lC;
Object.defineProperty(jt, "__esModule", { value: !0 });
jt.mergeMap = void 0;
var fC = qt, dC = K, hC = W, vC = Jn, pC = _e;
function sm(e, r, t) {
  return t === void 0 && (t = 1 / 0), pC.isFunction(r) ? sm(function(n, i) {
    return fC.map(function(o, a) {
      return r(n, o, i, a);
    })(dC.innerFrom(e(n, i)));
  }, t) : (typeof r == "number" && (t = r), hC.operate(function(n, i) {
    return vC.mergeInternals(n, i, e, t);
  }));
}
jt.mergeMap = sm;
Object.defineProperty(an, "__esModule", { value: !0 });
an.mergeAll = void 0;
var _C = jt, yC = Ye;
function mC(e) {
  return e === void 0 && (e = 1 / 0), _C.mergeMap(yC.identity, e);
}
an.mergeAll = mC;
Object.defineProperty(Xn, "__esModule", { value: !0 });
Xn.concatAll = void 0;
var bC = an;
function gC() {
  return bC.mergeAll(1);
}
Xn.concatAll = gC;
Object.defineProperty(on, "__esModule", { value: !0 });
on.concat = void 0;
var OC = Xn, wC = xe, EC = Ct;
function SC() {
  for (var e = [], r = 0; r < arguments.length; r++)
    e[r] = arguments[r];
  return OC.concatAll()(EC.from(e, wC.popScheduler(e)));
}
on.concat = SC;
var ju = {}, un = {};
Object.defineProperty(un, "__esModule", { value: !0 });
un.defer = void 0;
var TC = ye, PC = K;
function IC(e) {
  return new TC.Observable(function(r) {
    PC.innerFrom(e()).subscribe(r);
  });
}
un.defer = IC;
Object.defineProperty(ju, "__esModule", { value: !0 });
ju.connectable = void 0;
var AC = De, RC = ye, CC = un, $C = {
  connector: function() {
    return new AC.Subject();
  },
  resetOnDisconnect: !0
};
function jC(e, r) {
  r === void 0 && (r = $C);
  var t = null, n = r.connector, i = r.resetOnDisconnect, o = i === void 0 ? !0 : i, a = n(), u = new RC.Observable(function(c) {
    return a.subscribe(c);
  });
  return u.connect = function() {
    return (!t || t.closed) && (t = CC.defer(function() {
      return e;
    }).subscribe(a), o && t.add(function() {
      return a = n();
    })), t;
  }, u;
}
ju.connectable = jC;
var Nu = {};
Object.defineProperty(Nu, "__esModule", { value: !0 });
Nu.forkJoin = void 0;
var NC = ye, MC = Oo, kC = K, DC = xe, UC = z, LC = Vt, FC = wo;
function xC() {
  for (var e = [], r = 0; r < arguments.length; r++)
    e[r] = arguments[r];
  var t = DC.popResultSelector(e), n = MC.argsArgArrayOrObject(e), i = n.args, o = n.keys, a = new NC.Observable(function(u) {
    var c = i.length;
    if (!c) {
      u.complete();
      return;
    }
    for (var s = new Array(c), l = c, f = c, y = function(O) {
      var S = !1;
      kC.innerFrom(i[O]).subscribe(UC.createOperatorSubscriber(u, function(P) {
        S || (S = !0, f--), s[O] = P;
      }, function() {
        return l--;
      }, void 0, function() {
        (!l || !S) && (f || u.next(o ? FC.createObject(o, s) : s), u.complete());
      }));
    }, b = 0; b < c; b++)
      y(b);
  });
  return t ? a.pipe(LC.mapOneOrManyArgs(t)) : a;
}
Nu.forkJoin = xC;
var Mu = {}, BC = h && h.__read || function(e, r) {
  var t = typeof Symbol == "function" && e[Symbol.iterator];
  if (!t)
    return e;
  var n = t.call(e), i, o = [], a;
  try {
    for (; (r === void 0 || r-- > 0) && !(i = n.next()).done; )
      o.push(i.value);
  } catch (u) {
    a = { error: u };
  } finally {
    try {
      i && !i.done && (t = n.return) && t.call(n);
    } finally {
      if (a)
        throw a.error;
    }
  }
  return o;
};
Object.defineProperty(Mu, "__esModule", { value: !0 });
Mu.fromEvent = void 0;
var WC = K, VC = ye, qC = jt, HC = Kn, zr = _e, zC = Vt, YC = ["addListener", "removeListener"], GC = ["addEventListener", "removeEventListener"], KC = ["on", "off"];
function df(e, r, t, n) {
  if (zr.isFunction(t) && (n = t, t = void 0), n)
    return df(e, r, t).pipe(zC.mapOneOrManyArgs(n));
  var i = BC(XC(e) ? GC.map(function(u) {
    return function(c) {
      return e[u](r, c, t);
    };
  }) : ZC(e) ? YC.map(nv(e, r)) : QC(e) ? KC.map(nv(e, r)) : [], 2), o = i[0], a = i[1];
  if (!o && HC.isArrayLike(e))
    return qC.mergeMap(function(u) {
      return df(u, r, t);
    })(WC.innerFrom(e));
  if (!o)
    throw new TypeError("Invalid event target");
  return new VC.Observable(function(u) {
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
Mu.fromEvent = df;
function nv(e, r) {
  return function(t) {
    return function(n) {
      return e[t](r, n);
    };
  };
}
function ZC(e) {
  return zr.isFunction(e.addListener) && zr.isFunction(e.removeListener);
}
function QC(e) {
  return zr.isFunction(e.on) && zr.isFunction(e.off);
}
function XC(e) {
  return zr.isFunction(e.addEventListener) && zr.isFunction(e.removeEventListener);
}
var ku = {};
Object.defineProperty(ku, "__esModule", { value: !0 });
ku.fromEventPattern = void 0;
var JC = ye, e$ = _e, t$ = Vt;
function cm(e, r, t) {
  return t ? cm(e, r).pipe(t$.mapOneOrManyArgs(t)) : new JC.Observable(function(n) {
    var i = function() {
      for (var a = [], u = 0; u < arguments.length; u++)
        a[u] = arguments[u];
      return n.next(a.length === 1 ? a[0] : a);
    }, o = e(i);
    return e$.isFunction(r) ? function() {
      return r(i, o);
    } : void 0;
  });
}
ku.fromEventPattern = cm;
var Du = {}, r$ = h && h.__generator || function(e, r) {
  var t = { label: 0, sent: function() {
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
    for (; t; )
      try {
        if (n = 1, i && (o = s[0] & 2 ? i.return : s[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, s[1])).done)
          return o;
        switch (i = 0, o && (s = [s[0] & 2, o.value]), s[0]) {
          case 0:
          case 1:
            o = s;
            break;
          case 4:
            return t.label++, { value: s[1], done: !1 };
          case 5:
            t.label++, i = s[1], s = [0];
            continue;
          case 7:
            s = t.ops.pop(), t.trys.pop();
            continue;
          default:
            if (o = t.trys, !(o = o.length > 0 && o[o.length - 1]) && (s[0] === 6 || s[0] === 2)) {
              t = 0;
              continue;
            }
            if (s[0] === 3 && (!o || s[1] > o[0] && s[1] < o[3])) {
              t.label = s[1];
              break;
            }
            if (s[0] === 6 && t.label < o[1]) {
              t.label = o[1], o = s;
              break;
            }
            if (o && t.label < o[2]) {
              t.label = o[2], t.ops.push(s);
              break;
            }
            o[2] && t.ops.pop(), t.trys.pop();
            continue;
        }
        s = r.call(e, t);
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
Object.defineProperty(Du, "__esModule", { value: !0 });
Du.generate = void 0;
var iv = Ye, n$ = tn, i$ = un, o$ = vo;
function a$(e, r, t, n, i) {
  var o, a, u, c;
  arguments.length === 1 ? (o = e, c = o.initialState, r = o.condition, t = o.iterate, a = o.resultSelector, u = a === void 0 ? iv.identity : a, i = o.scheduler) : (c = e, !n || n$.isScheduler(n) ? (u = iv.identity, i = n) : u = n);
  function s() {
    var l;
    return r$(this, function(f) {
      switch (f.label) {
        case 0:
          l = c, f.label = 1;
        case 1:
          return !r || r(l) ? [4, u(l)] : [3, 4];
        case 2:
          f.sent(), f.label = 3;
        case 3:
          return l = t(l), [3, 1];
        case 4:
          return [2];
      }
    });
  }
  return i$.defer(i ? function() {
    return o$.scheduleIterable(s(), i);
  } : s);
}
Du.generate = a$;
var Uu = {};
Object.defineProperty(Uu, "__esModule", { value: !0 });
Uu.iif = void 0;
var u$ = un;
function s$(e, r, t) {
  return u$.defer(function() {
    return e() ? r : t;
  });
}
Uu.iif = s$;
var Eo = {}, Ht = {};
Object.defineProperty(Ht, "__esModule", { value: !0 });
Ht.timer = void 0;
var c$ = ye, l$ = ft, f$ = tn, d$ = Qn;
function h$(e, r, t) {
  e === void 0 && (e = 0), t === void 0 && (t = l$.async);
  var n = -1;
  return r != null && (f$.isScheduler(r) ? t = r : n = r), new c$.Observable(function(i) {
    var o = d$.isValidDate(e) ? +e - t.now() : e;
    o < 0 && (o = 0);
    var a = 0;
    return t.schedule(function() {
      i.closed || (i.next(a++), 0 <= n ? this.schedule(void 0, n) : i.complete());
    }, o);
  });
}
Ht.timer = h$;
Object.defineProperty(Eo, "__esModule", { value: !0 });
Eo.interval = void 0;
var v$ = ft, p$ = Ht;
function _$(e, r) {
  return e === void 0 && (e = 0), r === void 0 && (r = v$.asyncScheduler), e < 0 && (e = 0), p$.timer(e, e, r);
}
Eo.interval = _$;
var Lu = {};
Object.defineProperty(Lu, "__esModule", { value: !0 });
Lu.merge = void 0;
var y$ = an, m$ = K, b$ = It, ov = xe, g$ = Ct;
function O$() {
  for (var e = [], r = 0; r < arguments.length; r++)
    e[r] = arguments[r];
  var t = ov.popScheduler(e), n = ov.popNumber(e, 1 / 0), i = e;
  return i.length ? i.length === 1 ? m$.innerFrom(i[0]) : y$.mergeAll(n)(g$.from(i, t)) : b$.EMPTY;
}
Lu.merge = O$;
var hf = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.never = e.NEVER = void 0;
  var r = ye, t = ze;
  e.NEVER = new r.Observable(t.noop);
  function n() {
    return e.NEVER;
  }
  e.never = n;
})(hf);
var So = {}, or = {};
Object.defineProperty(or, "__esModule", { value: !0 });
or.argsOrArgArray = void 0;
var w$ = Array.isArray;
function E$(e) {
  return e.length === 1 && w$(e[0]) ? e[0] : e;
}
or.argsOrArgArray = E$;
Object.defineProperty(So, "__esModule", { value: !0 });
So.onErrorResumeNext = void 0;
var S$ = ye, T$ = or, P$ = z, av = ze, I$ = K;
function A$() {
  for (var e = [], r = 0; r < arguments.length; r++)
    e[r] = arguments[r];
  var t = T$.argsOrArgArray(e);
  return new S$.Observable(function(n) {
    var i = 0, o = function() {
      if (i < t.length) {
        var a = void 0;
        try {
          a = I$.innerFrom(t[i++]);
        } catch {
          o();
          return;
        }
        var u = new P$.OperatorSubscriber(n, void 0, av.noop, av.noop);
        a.subscribe(u), u.add(o);
      } else
        n.complete();
    };
    o();
  });
}
So.onErrorResumeNext = A$;
var Fu = {};
Object.defineProperty(Fu, "__esModule", { value: !0 });
Fu.pairs = void 0;
var R$ = Ct;
function C$(e, r) {
  return R$.from(Object.entries(e), r);
}
Fu.pairs = C$;
var xu = {}, Bu = {};
Object.defineProperty(Bu, "__esModule", { value: !0 });
Bu.not = void 0;
function $$(e, r) {
  return function(t, n) {
    return !e.call(r, t, n);
  };
}
Bu.not = $$;
var ar = {};
Object.defineProperty(ar, "__esModule", { value: !0 });
ar.filter = void 0;
var j$ = W, N$ = z;
function M$(e, r) {
  return j$.operate(function(t, n) {
    var i = 0;
    t.subscribe(N$.createOperatorSubscriber(n, function(o) {
      return e.call(r, o, i++) && n.next(o);
    }));
  });
}
ar.filter = M$;
Object.defineProperty(xu, "__esModule", { value: !0 });
xu.partition = void 0;
var k$ = Bu, uv = ar, sv = K;
function D$(e, r, t) {
  return [uv.filter(r, t)(sv.innerFrom(e)), uv.filter(k$.not(r, t))(sv.innerFrom(e))];
}
xu.partition = D$;
var Yr = {};
Object.defineProperty(Yr, "__esModule", { value: !0 });
Yr.raceInit = Yr.race = void 0;
var U$ = ye, lm = K, L$ = or, F$ = z;
function x$() {
  for (var e = [], r = 0; r < arguments.length; r++)
    e[r] = arguments[r];
  return e = L$.argsOrArgArray(e), e.length === 1 ? lm.innerFrom(e[0]) : new U$.Observable(fm(e));
}
Yr.race = x$;
function fm(e) {
  return function(r) {
    for (var t = [], n = function(o) {
      t.push(lm.innerFrom(e[o]).subscribe(F$.createOperatorSubscriber(r, function(a) {
        if (t) {
          for (var u = 0; u < t.length; u++)
            u !== o && t[u].unsubscribe();
          t = null;
        }
        r.next(a);
      })));
    }, i = 0; t && !r.closed && i < e.length; i++)
      n(i);
  };
}
Yr.raceInit = fm;
var Wu = {};
Object.defineProperty(Wu, "__esModule", { value: !0 });
Wu.range = void 0;
var B$ = ye, W$ = It;
function V$(e, r, t) {
  if (r == null && (r = e, e = 0), r <= 0)
    return W$.EMPTY;
  var n = r + e;
  return new B$.Observable(t ? function(i) {
    var o = e;
    return t.schedule(function() {
      o < n ? (i.next(o++), this.schedule()) : i.complete();
    });
  } : function(i) {
    for (var o = e; o < n && !i.closed; )
      i.next(o++);
    i.complete();
  });
}
Wu.range = V$;
var Vu = {};
Object.defineProperty(Vu, "__esModule", { value: !0 });
Vu.using = void 0;
var q$ = ye, H$ = K, z$ = It;
function Y$(e, r) {
  return new q$.Observable(function(t) {
    var n = e(), i = r(n), o = i ? H$.innerFrom(i) : z$.EMPTY;
    return o.subscribe(t), function() {
      n && n.unsubscribe();
    };
  });
}
Vu.using = Y$;
var ei = {}, G$ = h && h.__read || function(e, r) {
  var t = typeof Symbol == "function" && e[Symbol.iterator];
  if (!t)
    return e;
  var n = t.call(e), i, o = [], a;
  try {
    for (; (r === void 0 || r-- > 0) && !(i = n.next()).done; )
      o.push(i.value);
  } catch (u) {
    a = { error: u };
  } finally {
    try {
      i && !i.done && (t = n.return) && t.call(n);
    } finally {
      if (a)
        throw a.error;
    }
  }
  return o;
}, K$ = h && h.__spreadArray || function(e, r) {
  for (var t = 0, n = r.length, i = e.length; t < n; t++, i++)
    e[i] = r[t];
  return e;
};
Object.defineProperty(ei, "__esModule", { value: !0 });
ei.zip = void 0;
var Z$ = ye, Q$ = K, X$ = or, J$ = It, ej = z, tj = xe;
function rj() {
  for (var e = [], r = 0; r < arguments.length; r++)
    e[r] = arguments[r];
  var t = tj.popResultSelector(e), n = X$.argsOrArgArray(e);
  return n.length ? new Z$.Observable(function(i) {
    var o = n.map(function() {
      return [];
    }), a = n.map(function() {
      return !1;
    });
    i.add(function() {
      o = a = null;
    });
    for (var u = function(s) {
      Q$.innerFrom(n[s]).subscribe(ej.createOperatorSubscriber(i, function(l) {
        if (o[s].push(l), o.every(function(y) {
          return y.length;
        })) {
          var f = o.map(function(y) {
            return y.shift();
          });
          i.next(t ? t.apply(void 0, K$([], G$(f))) : f), o.some(function(y, b) {
            return !y.length && a[b];
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
  }) : J$.EMPTY;
}
ei.zip = rj;
var dm = {};
Object.defineProperty(dm, "__esModule", { value: !0 });
var To = {};
Object.defineProperty(To, "__esModule", { value: !0 });
To.audit = void 0;
var nj = W, ij = K, cv = z;
function oj(e) {
  return nj.operate(function(r, t) {
    var n = !1, i = null, o = null, a = !1, u = function() {
      if (o == null || o.unsubscribe(), o = null, n) {
        n = !1;
        var s = i;
        i = null, t.next(s);
      }
      a && t.complete();
    }, c = function() {
      o = null, a && t.complete();
    };
    r.subscribe(cv.createOperatorSubscriber(t, function(s) {
      n = !0, i = s, o || ij.innerFrom(e(s)).subscribe(o = cv.createOperatorSubscriber(t, u, c));
    }, function() {
      a = !0, (!n || !o || o.closed) && t.complete();
    }));
  });
}
To.audit = oj;
var qu = {};
Object.defineProperty(qu, "__esModule", { value: !0 });
qu.auditTime = void 0;
var aj = ft, uj = To, sj = Ht;
function cj(e, r) {
  return r === void 0 && (r = aj.asyncScheduler), uj.audit(function() {
    return sj.timer(e, r);
  });
}
qu.auditTime = cj;
var Hu = {};
Object.defineProperty(Hu, "__esModule", { value: !0 });
Hu.buffer = void 0;
var lj = W, fj = ze, lv = z, dj = K;
function hj(e) {
  return lj.operate(function(r, t) {
    var n = [];
    return r.subscribe(lv.createOperatorSubscriber(t, function(i) {
      return n.push(i);
    }, function() {
      t.next(n), t.complete();
    })), dj.innerFrom(e).subscribe(lv.createOperatorSubscriber(t, function() {
      var i = n;
      n = [], t.next(i);
    }, fj.noop)), function() {
      n = null;
    };
  });
}
Hu.buffer = hj;
var zu = {}, Ol = h && h.__values || function(e) {
  var r = typeof Symbol == "function" && Symbol.iterator, t = r && e[r], n = 0;
  if (t)
    return t.call(e);
  if (e && typeof e.length == "number")
    return {
      next: function() {
        return e && n >= e.length && (e = void 0), { value: e && e[n++], done: !e };
      }
    };
  throw new TypeError(r ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(zu, "__esModule", { value: !0 });
zu.bufferCount = void 0;
var vj = W, pj = z, _j = Rt;
function yj(e, r) {
  return r === void 0 && (r = null), r = r ?? e, vj.operate(function(t, n) {
    var i = [], o = 0;
    t.subscribe(pj.createOperatorSubscriber(n, function(a) {
      var u, c, s, l, f = null;
      o++ % r === 0 && i.push([]);
      try {
        for (var y = Ol(i), b = y.next(); !b.done; b = y.next()) {
          var O = b.value;
          O.push(a), e <= O.length && (f = f ?? [], f.push(O));
        }
      } catch (R) {
        u = { error: R };
      } finally {
        try {
          b && !b.done && (c = y.return) && c.call(y);
        } finally {
          if (u)
            throw u.error;
        }
      }
      if (f)
        try {
          for (var S = Ol(f), P = S.next(); !P.done; P = S.next()) {
            var O = P.value;
            _j.arrRemove(i, O), n.next(O);
          }
        } catch (R) {
          s = { error: R };
        } finally {
          try {
            P && !P.done && (l = S.return) && l.call(S);
          } finally {
            if (s)
              throw s.error;
          }
        }
    }, function() {
      var a, u;
      try {
        for (var c = Ol(i), s = c.next(); !s.done; s = c.next()) {
          var l = s.value;
          n.next(l);
        }
      } catch (f) {
        a = { error: f };
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
zu.bufferCount = yj;
var Yu = {}, mj = h && h.__values || function(e) {
  var r = typeof Symbol == "function" && Symbol.iterator, t = r && e[r], n = 0;
  if (t)
    return t.call(e);
  if (e && typeof e.length == "number")
    return {
      next: function() {
        return e && n >= e.length && (e = void 0), { value: e && e[n++], done: !e };
      }
    };
  throw new TypeError(r ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(Yu, "__esModule", { value: !0 });
Yu.bufferTime = void 0;
var bj = qe, gj = W, Oj = z, wj = Rt, Ej = ft, Sj = xe, fv = $t;
function Tj(e) {
  for (var r, t, n = [], i = 1; i < arguments.length; i++)
    n[i - 1] = arguments[i];
  var o = (r = Sj.popScheduler(n)) !== null && r !== void 0 ? r : Ej.asyncScheduler, a = (t = n[0]) !== null && t !== void 0 ? t : null, u = n[1] || 1 / 0;
  return gj.operate(function(c, s) {
    var l = [], f = !1, y = function(S) {
      var P = S.buffer, R = S.subs;
      R.unsubscribe(), wj.arrRemove(l, S), s.next(P), f && b();
    }, b = function() {
      if (l) {
        var S = new bj.Subscription();
        s.add(S);
        var P = [], R = {
          buffer: P,
          subs: S
        };
        l.push(R), fv.executeSchedule(S, o, function() {
          return y(R);
        }, e);
      }
    };
    a !== null && a >= 0 ? fv.executeSchedule(s, o, b, a, !0) : f = !0, b();
    var O = Oj.createOperatorSubscriber(s, function(S) {
      var P, R, $ = l.slice();
      try {
        for (var j = mj($), k = j.next(); !k.done; k = j.next()) {
          var L = k.value, Y = L.buffer;
          Y.push(S), u <= Y.length && y(L);
        }
      } catch (ee) {
        P = { error: ee };
      } finally {
        try {
          k && !k.done && (R = j.return) && R.call(j);
        } finally {
          if (P)
            throw P.error;
        }
      }
    }, function() {
      for (; l != null && l.length; )
        s.next(l.shift().buffer);
      O == null || O.unsubscribe(), s.complete(), s.unsubscribe();
    }, void 0, function() {
      return l = null;
    });
    c.subscribe(O);
  });
}
Yu.bufferTime = Tj;
var Gu = {}, Pj = h && h.__values || function(e) {
  var r = typeof Symbol == "function" && Symbol.iterator, t = r && e[r], n = 0;
  if (t)
    return t.call(e);
  if (e && typeof e.length == "number")
    return {
      next: function() {
        return e && n >= e.length && (e = void 0), { value: e && e[n++], done: !e };
      }
    };
  throw new TypeError(r ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(Gu, "__esModule", { value: !0 });
Gu.bufferToggle = void 0;
var Ij = qe, Aj = W, dv = K, wl = z, hv = ze, Rj = Rt;
function Cj(e, r) {
  return Aj.operate(function(t, n) {
    var i = [];
    dv.innerFrom(e).subscribe(wl.createOperatorSubscriber(n, function(o) {
      var a = [];
      i.push(a);
      var u = new Ij.Subscription(), c = function() {
        Rj.arrRemove(i, a), n.next(a), u.unsubscribe();
      };
      u.add(dv.innerFrom(r(o)).subscribe(wl.createOperatorSubscriber(n, c, hv.noop)));
    }, hv.noop)), t.subscribe(wl.createOperatorSubscriber(n, function(o) {
      var a, u;
      try {
        for (var c = Pj(i), s = c.next(); !s.done; s = c.next()) {
          var l = s.value;
          l.push(o);
        }
      } catch (f) {
        a = { error: f };
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
Gu.bufferToggle = Cj;
var Ku = {};
Object.defineProperty(Ku, "__esModule", { value: !0 });
Ku.bufferWhen = void 0;
var $j = W, jj = ze, vv = z, Nj = K;
function Mj(e) {
  return $j.operate(function(r, t) {
    var n = null, i = null, o = function() {
      i == null || i.unsubscribe();
      var a = n;
      n = [], a && t.next(a), Nj.innerFrom(e()).subscribe(i = vv.createOperatorSubscriber(t, o, jj.noop));
    };
    o(), r.subscribe(vv.createOperatorSubscriber(t, function(a) {
      return n == null ? void 0 : n.push(a);
    }, function() {
      n && t.next(n), t.complete();
    }, void 0, function() {
      return n = i = null;
    }));
  });
}
Ku.bufferWhen = Mj;
var Zu = {};
Object.defineProperty(Zu, "__esModule", { value: !0 });
Zu.catchError = void 0;
var kj = K, Dj = z, Uj = W;
function hm(e) {
  return Uj.operate(function(r, t) {
    var n = null, i = !1, o;
    n = r.subscribe(Dj.createOperatorSubscriber(t, void 0, void 0, function(a) {
      o = kj.innerFrom(e(a, hm(e)(r))), n ? (n.unsubscribe(), n = null, o.subscribe(t)) : i = !0;
    })), i && (n.unsubscribe(), n = null, o.subscribe(t));
  });
}
Zu.catchError = hm;
var Qu = {}, Po = {}, Io = {}, Ao = {}, Pr = {}, Ro = {};
Object.defineProperty(Ro, "__esModule", { value: !0 });
Ro.scanInternals = void 0;
var Lj = z;
function Fj(e, r, t, n, i) {
  return function(o, a) {
    var u = t, c = r, s = 0;
    o.subscribe(Lj.createOperatorSubscriber(a, function(l) {
      var f = s++;
      c = u ? e(c, l, f) : (u = !0, l), n && a.next(c);
    }, i && function() {
      u && a.next(c), a.complete();
    }));
  };
}
Ro.scanInternals = Fj;
Object.defineProperty(Pr, "__esModule", { value: !0 });
Pr.reduce = void 0;
var xj = Ro, Bj = W;
function Wj(e, r) {
  return Bj.operate(xj.scanInternals(e, r, arguments.length >= 2, !1, !0));
}
Pr.reduce = Wj;
Object.defineProperty(Ao, "__esModule", { value: !0 });
Ao.toArray = void 0;
var Vj = Pr, qj = W, Hj = function(e, r) {
  return e.push(r), e;
};
function zj() {
  return qj.operate(function(e, r) {
    Vj.reduce(Hj, [])(e).subscribe(r);
  });
}
Ao.toArray = zj;
Object.defineProperty(Io, "__esModule", { value: !0 });
Io.joinAllInternals = void 0;
var Yj = Ye, Gj = Vt, Kj = rr, Zj = jt, Qj = Ao;
function Xj(e, r) {
  return Kj.pipe(Qj.toArray(), Zj.mergeMap(function(t) {
    return e(t);
  }), r ? Gj.mapOneOrManyArgs(r) : Yj.identity);
}
Io.joinAllInternals = Xj;
Object.defineProperty(Po, "__esModule", { value: !0 });
Po.combineLatestAll = void 0;
var Jj = yr, eN = Io;
function tN(e) {
  return eN.joinAllInternals(Jj.combineLatest, e);
}
Po.combineLatestAll = tN;
Object.defineProperty(Qu, "__esModule", { value: !0 });
Qu.combineAll = void 0;
var rN = Po;
Qu.combineAll = rN.combineLatestAll;
var Xu = {}, Ju = {}, pv = h && h.__read || function(e, r) {
  var t = typeof Symbol == "function" && e[Symbol.iterator];
  if (!t)
    return e;
  var n = t.call(e), i, o = [], a;
  try {
    for (; (r === void 0 || r-- > 0) && !(i = n.next()).done; )
      o.push(i.value);
  } catch (u) {
    a = { error: u };
  } finally {
    try {
      i && !i.done && (t = n.return) && t.call(n);
    } finally {
      if (a)
        throw a.error;
    }
  }
  return o;
}, _v = h && h.__spreadArray || function(e, r) {
  for (var t = 0, n = r.length, i = e.length; t < n; t++, i++)
    e[i] = r[t];
  return e;
};
Object.defineProperty(Ju, "__esModule", { value: !0 });
Ju.combineLatest = void 0;
var nN = yr, iN = W, oN = or, aN = Vt, uN = rr, sN = xe;
function vm() {
  for (var e = [], r = 0; r < arguments.length; r++)
    e[r] = arguments[r];
  var t = sN.popResultSelector(e);
  return t ? uN.pipe(vm.apply(void 0, _v([], pv(e))), aN.mapOneOrManyArgs(t)) : iN.operate(function(n, i) {
    nN.combineLatestInit(_v([n], pv(oN.argsOrArgArray(e))))(i);
  });
}
Ju.combineLatest = vm;
var cN = h && h.__read || function(e, r) {
  var t = typeof Symbol == "function" && e[Symbol.iterator];
  if (!t)
    return e;
  var n = t.call(e), i, o = [], a;
  try {
    for (; (r === void 0 || r-- > 0) && !(i = n.next()).done; )
      o.push(i.value);
  } catch (u) {
    a = { error: u };
  } finally {
    try {
      i && !i.done && (t = n.return) && t.call(n);
    } finally {
      if (a)
        throw a.error;
    }
  }
  return o;
}, lN = h && h.__spreadArray || function(e, r) {
  for (var t = 0, n = r.length, i = e.length; t < n; t++, i++)
    e[i] = r[t];
  return e;
};
Object.defineProperty(Xu, "__esModule", { value: !0 });
Xu.combineLatestWith = void 0;
var fN = Ju;
function dN() {
  for (var e = [], r = 0; r < arguments.length; r++)
    e[r] = arguments[r];
  return fN.combineLatest.apply(void 0, lN([], cN(e)));
}
Xu.combineLatestWith = dN;
var Co = {};
Object.defineProperty(Co, "__esModule", { value: !0 });
Co.concatMap = void 0;
var yv = jt, hN = _e;
function vN(e, r) {
  return hN.isFunction(r) ? yv.mergeMap(e, r, 1) : yv.mergeMap(e, 1);
}
Co.concatMap = vN;
var es = {};
Object.defineProperty(es, "__esModule", { value: !0 });
es.concatMapTo = void 0;
var mv = Co, pN = _e;
function _N(e, r) {
  return pN.isFunction(r) ? mv.concatMap(function() {
    return e;
  }, r) : mv.concatMap(function() {
    return e;
  });
}
es.concatMapTo = _N;
var ts = {}, rs = {}, yN = h && h.__read || function(e, r) {
  var t = typeof Symbol == "function" && e[Symbol.iterator];
  if (!t)
    return e;
  var n = t.call(e), i, o = [], a;
  try {
    for (; (r === void 0 || r-- > 0) && !(i = n.next()).done; )
      o.push(i.value);
  } catch (u) {
    a = { error: u };
  } finally {
    try {
      i && !i.done && (t = n.return) && t.call(n);
    } finally {
      if (a)
        throw a.error;
    }
  }
  return o;
}, mN = h && h.__spreadArray || function(e, r) {
  for (var t = 0, n = r.length, i = e.length; t < n; t++, i++)
    e[i] = r[t];
  return e;
};
Object.defineProperty(rs, "__esModule", { value: !0 });
rs.concat = void 0;
var bN = W, gN = Xn, ON = xe, wN = Ct;
function EN() {
  for (var e = [], r = 0; r < arguments.length; r++)
    e[r] = arguments[r];
  var t = ON.popScheduler(e);
  return bN.operate(function(n, i) {
    gN.concatAll()(wN.from(mN([n], yN(e)), t)).subscribe(i);
  });
}
rs.concat = EN;
var SN = h && h.__read || function(e, r) {
  var t = typeof Symbol == "function" && e[Symbol.iterator];
  if (!t)
    return e;
  var n = t.call(e), i, o = [], a;
  try {
    for (; (r === void 0 || r-- > 0) && !(i = n.next()).done; )
      o.push(i.value);
  } catch (u) {
    a = { error: u };
  } finally {
    try {
      i && !i.done && (t = n.return) && t.call(n);
    } finally {
      if (a)
        throw a.error;
    }
  }
  return o;
}, TN = h && h.__spreadArray || function(e, r) {
  for (var t = 0, n = r.length, i = e.length; t < n; t++, i++)
    e[i] = r[t];
  return e;
};
Object.defineProperty(ts, "__esModule", { value: !0 });
ts.concatWith = void 0;
var PN = rs;
function IN() {
  for (var e = [], r = 0; r < arguments.length; r++)
    e[r] = arguments[r];
  return PN.concat.apply(void 0, TN([], SN(e)));
}
ts.concatWith = IN;
var ti = {}, ns = {};
Object.defineProperty(ns, "__esModule", { value: !0 });
ns.fromSubscribable = void 0;
var AN = ye;
function RN(e) {
  return new AN.Observable(function(r) {
    return e.subscribe(r);
  });
}
ns.fromSubscribable = RN;
Object.defineProperty(ti, "__esModule", { value: !0 });
ti.connect = void 0;
var CN = De, $N = K, jN = W, NN = ns, MN = {
  connector: function() {
    return new CN.Subject();
  }
};
function kN(e, r) {
  r === void 0 && (r = MN);
  var t = r.connector;
  return jN.operate(function(n, i) {
    var o = t();
    $N.innerFrom(e(NN.fromSubscribable(o))).subscribe(i), i.add(n.subscribe(o));
  });
}
ti.connect = kN;
var is = {};
Object.defineProperty(is, "__esModule", { value: !0 });
is.count = void 0;
var DN = Pr;
function UN(e) {
  return DN.reduce(function(r, t, n) {
    return !e || e(t, n) ? r + 1 : r;
  }, 0);
}
is.count = UN;
var os = {};
Object.defineProperty(os, "__esModule", { value: !0 });
os.debounce = void 0;
var LN = W, FN = ze, bv = z, xN = K;
function BN(e) {
  return LN.operate(function(r, t) {
    var n = !1, i = null, o = null, a = function() {
      if (o == null || o.unsubscribe(), o = null, n) {
        n = !1;
        var u = i;
        i = null, t.next(u);
      }
    };
    r.subscribe(bv.createOperatorSubscriber(t, function(u) {
      o == null || o.unsubscribe(), n = !0, i = u, o = bv.createOperatorSubscriber(t, a, FN.noop), xN.innerFrom(e(u)).subscribe(o);
    }, function() {
      a(), t.complete();
    }, void 0, function() {
      i = o = null;
    }));
  });
}
os.debounce = BN;
var as = {};
Object.defineProperty(as, "__esModule", { value: !0 });
as.debounceTime = void 0;
var WN = ft, VN = W, qN = z;
function HN(e, r) {
  return r === void 0 && (r = WN.asyncScheduler), VN.operate(function(t, n) {
    var i = null, o = null, a = null, u = function() {
      if (i) {
        i.unsubscribe(), i = null;
        var s = o;
        o = null, n.next(s);
      }
    };
    function c() {
      var s = a + e, l = r.now();
      if (l < s) {
        i = this.schedule(void 0, s - l), n.add(i);
        return;
      }
      u();
    }
    t.subscribe(qN.createOperatorSubscriber(n, function(s) {
      o = s, a = r.now(), i || (i = r.schedule(c, e), n.add(i));
    }, function() {
      u(), n.complete();
    }, void 0, function() {
      o = i = null;
    }));
  });
}
as.debounceTime = HN;
var sn = {};
Object.defineProperty(sn, "__esModule", { value: !0 });
sn.defaultIfEmpty = void 0;
var zN = W, YN = z;
function GN(e) {
  return zN.operate(function(r, t) {
    var n = !1;
    r.subscribe(YN.createOperatorSubscriber(t, function(i) {
      n = !0, t.next(i);
    }, function() {
      n || t.next(e), t.complete();
    }));
  });
}
sn.defaultIfEmpty = GN;
var us = {}, $o = {}, cn = {};
Object.defineProperty(cn, "__esModule", { value: !0 });
cn.take = void 0;
var KN = It, ZN = W, QN = z;
function XN(e) {
  return e <= 0 ? function() {
    return KN.EMPTY;
  } : ZN.operate(function(r, t) {
    var n = 0;
    r.subscribe(QN.createOperatorSubscriber(t, function(i) {
      ++n <= e && (t.next(i), e <= n && t.complete());
    }));
  });
}
cn.take = XN;
var jo = {};
Object.defineProperty(jo, "__esModule", { value: !0 });
jo.ignoreElements = void 0;
var JN = W, eM = z, tM = ze;
function rM() {
  return JN.operate(function(e, r) {
    e.subscribe(eM.createOperatorSubscriber(r, tM.noop));
  });
}
jo.ignoreElements = rM;
var No = {};
Object.defineProperty(No, "__esModule", { value: !0 });
No.mapTo = void 0;
var nM = qt;
function iM(e) {
  return nM.map(function() {
    return e;
  });
}
No.mapTo = iM;
Object.defineProperty($o, "__esModule", { value: !0 });
$o.delayWhen = void 0;
var oM = on, gv = cn, aM = jo, uM = No, sM = jt, cM = K;
function pm(e, r) {
  return r ? function(t) {
    return oM.concat(r.pipe(gv.take(1), aM.ignoreElements()), t.pipe(pm(e)));
  } : sM.mergeMap(function(t, n) {
    return cM.innerFrom(e(t, n)).pipe(gv.take(1), uM.mapTo(t));
  });
}
$o.delayWhen = pm;
Object.defineProperty(us, "__esModule", { value: !0 });
us.delay = void 0;
var lM = ft, fM = $o, dM = Ht;
function hM(e, r) {
  r === void 0 && (r = lM.asyncScheduler);
  var t = dM.timer(e, r);
  return fM.delayWhen(function() {
    return t;
  });
}
us.delay = hM;
var ss = {};
Object.defineProperty(ss, "__esModule", { value: !0 });
ss.dematerialize = void 0;
var vM = wu, pM = W, _M = z;
function yM() {
  return pM.operate(function(e, r) {
    e.subscribe(_M.createOperatorSubscriber(r, function(t) {
      return vM.observeNotification(t, r);
    }));
  });
}
ss.dematerialize = yM;
var cs = {};
Object.defineProperty(cs, "__esModule", { value: !0 });
cs.distinct = void 0;
var mM = W, Ov = z, bM = ze, gM = K;
function OM(e, r) {
  return mM.operate(function(t, n) {
    var i = /* @__PURE__ */ new Set();
    t.subscribe(Ov.createOperatorSubscriber(n, function(o) {
      var a = e ? e(o) : o;
      i.has(a) || (i.add(a), n.next(o));
    })), r && gM.innerFrom(r).subscribe(Ov.createOperatorSubscriber(n, function() {
      return i.clear();
    }, bM.noop));
  });
}
cs.distinct = OM;
var Mo = {};
Object.defineProperty(Mo, "__esModule", { value: !0 });
Mo.distinctUntilChanged = void 0;
var wM = Ye, EM = W, SM = z;
function TM(e, r) {
  return r === void 0 && (r = wM.identity), e = e ?? PM, EM.operate(function(t, n) {
    var i, o = !0;
    t.subscribe(SM.createOperatorSubscriber(n, function(a) {
      var u = r(a);
      (o || !e(i, u)) && (o = !1, i = u, n.next(a));
    }));
  });
}
Mo.distinctUntilChanged = TM;
function PM(e, r) {
  return e === r;
}
var ls = {};
Object.defineProperty(ls, "__esModule", { value: !0 });
ls.distinctUntilKeyChanged = void 0;
var IM = Mo;
function AM(e, r) {
  return IM.distinctUntilChanged(function(t, n) {
    return r ? r(t[e], n[e]) : t[e] === n[e];
  });
}
ls.distinctUntilKeyChanged = AM;
var fs = {}, ln = {};
Object.defineProperty(ln, "__esModule", { value: !0 });
ln.throwIfEmpty = void 0;
var RM = Wt, CM = W, $M = z;
function jM(e) {
  return e === void 0 && (e = NM), CM.operate(function(r, t) {
    var n = !1;
    r.subscribe($M.createOperatorSubscriber(t, function(i) {
      n = !0, t.next(i);
    }, function() {
      return n ? t.complete() : t.error(e());
    }));
  });
}
ln.throwIfEmpty = jM;
function NM() {
  return new RM.EmptyError();
}
Object.defineProperty(fs, "__esModule", { value: !0 });
fs.elementAt = void 0;
var wv = yo, MM = ar, kM = ln, DM = sn, UM = cn;
function LM(e, r) {
  if (e < 0)
    throw new wv.ArgumentOutOfRangeError();
  var t = arguments.length >= 2;
  return function(n) {
    return n.pipe(MM.filter(function(i, o) {
      return o === e;
    }), UM.take(1), t ? DM.defaultIfEmpty(r) : kM.throwIfEmpty(function() {
      return new wv.ArgumentOutOfRangeError();
    }));
  };
}
fs.elementAt = LM;
var ds = {}, FM = h && h.__read || function(e, r) {
  var t = typeof Symbol == "function" && e[Symbol.iterator];
  if (!t)
    return e;
  var n = t.call(e), i, o = [], a;
  try {
    for (; (r === void 0 || r-- > 0) && !(i = n.next()).done; )
      o.push(i.value);
  } catch (u) {
    a = { error: u };
  } finally {
    try {
      i && !i.done && (t = n.return) && t.call(n);
    } finally {
      if (a)
        throw a.error;
    }
  }
  return o;
}, xM = h && h.__spreadArray || function(e, r) {
  for (var t = 0, n = r.length, i = e.length; t < n; t++, i++)
    e[i] = r[t];
  return e;
};
Object.defineProperty(ds, "__esModule", { value: !0 });
ds.endWith = void 0;
var BM = on, WM = Gn;
function VM() {
  for (var e = [], r = 0; r < arguments.length; r++)
    e[r] = arguments[r];
  return function(t) {
    return BM.concat(t, WM.of.apply(void 0, xM([], FM(e))));
  };
}
ds.endWith = VM;
var hs = {};
Object.defineProperty(hs, "__esModule", { value: !0 });
hs.every = void 0;
var qM = W, HM = z;
function zM(e, r) {
  return qM.operate(function(t, n) {
    var i = 0;
    t.subscribe(HM.createOperatorSubscriber(n, function(o) {
      e.call(r, o, i++, t) || (n.next(!1), n.complete());
    }, function() {
      n.next(!0), n.complete();
    }));
  });
}
hs.every = zM;
var vs = {}, ko = {}, Do = {};
Object.defineProperty(Do, "__esModule", { value: !0 });
Do.exhaustMap = void 0;
var YM = qt, Ev = K, GM = W, Sv = z;
function _m(e, r) {
  return r ? function(t) {
    return t.pipe(_m(function(n, i) {
      return Ev.innerFrom(e(n, i)).pipe(YM.map(function(o, a) {
        return r(n, o, i, a);
      }));
    }));
  } : GM.operate(function(t, n) {
    var i = 0, o = null, a = !1;
    t.subscribe(Sv.createOperatorSubscriber(n, function(u) {
      o || (o = Sv.createOperatorSubscriber(n, void 0, function() {
        o = null, a && n.complete();
      }), Ev.innerFrom(e(u, i++)).subscribe(o));
    }, function() {
      a = !0, !o && n.complete();
    }));
  });
}
Do.exhaustMap = _m;
Object.defineProperty(ko, "__esModule", { value: !0 });
ko.exhaustAll = void 0;
var KM = Do, ZM = Ye;
function QM() {
  return KM.exhaustMap(ZM.identity);
}
ko.exhaustAll = QM;
Object.defineProperty(vs, "__esModule", { value: !0 });
vs.exhaust = void 0;
var XM = ko;
vs.exhaust = XM.exhaustAll;
var ps = {};
Object.defineProperty(ps, "__esModule", { value: !0 });
ps.expand = void 0;
var JM = W, ek = Jn;
function tk(e, r, t) {
  return r === void 0 && (r = 1 / 0), r = (r || 0) < 1 ? 1 / 0 : r, JM.operate(function(n, i) {
    return ek.mergeInternals(n, i, e, r, void 0, !0, t);
  });
}
ps.expand = tk;
var _s = {};
Object.defineProperty(_s, "__esModule", { value: !0 });
_s.finalize = void 0;
var rk = W;
function nk(e) {
  return rk.operate(function(r, t) {
    try {
      r.subscribe(t);
    } finally {
      t.add(e);
    }
  });
}
_s.finalize = nk;
var Gr = {};
Object.defineProperty(Gr, "__esModule", { value: !0 });
Gr.createFind = Gr.find = void 0;
var ik = W, ok = z;
function ak(e, r) {
  return ik.operate(ym(e, r, "value"));
}
Gr.find = ak;
function ym(e, r, t) {
  var n = t === "index";
  return function(i, o) {
    var a = 0;
    i.subscribe(ok.createOperatorSubscriber(o, function(u) {
      var c = a++;
      e.call(r, u, c, i) && (o.next(n ? c : u), o.complete());
    }, function() {
      o.next(n ? -1 : void 0), o.complete();
    }));
  };
}
Gr.createFind = ym;
var ys = {};
Object.defineProperty(ys, "__esModule", { value: !0 });
ys.findIndex = void 0;
var uk = W, sk = Gr;
function ck(e, r) {
  return uk.operate(sk.createFind(e, r, "index"));
}
ys.findIndex = ck;
var ms = {};
Object.defineProperty(ms, "__esModule", { value: !0 });
ms.first = void 0;
var lk = Wt, fk = ar, dk = cn, hk = sn, vk = ln, pk = Ye;
function _k(e, r) {
  var t = arguments.length >= 2;
  return function(n) {
    return n.pipe(e ? fk.filter(function(i, o) {
      return e(i, o, n);
    }) : pk.identity, dk.take(1), t ? hk.defaultIfEmpty(r) : vk.throwIfEmpty(function() {
      return new lk.EmptyError();
    }));
  };
}
ms.first = _k;
var bs = {};
Object.defineProperty(bs, "__esModule", { value: !0 });
bs.groupBy = void 0;
var yk = ye, mk = K, bk = De, gk = W, Tv = z;
function Ok(e, r, t, n) {
  return gk.operate(function(i, o) {
    var a;
    !r || typeof r == "function" ? a = r : (t = r.duration, a = r.element, n = r.connector);
    var u = /* @__PURE__ */ new Map(), c = function(O) {
      u.forEach(O), O(o);
    }, s = function(O) {
      return c(function(S) {
        return S.error(O);
      });
    }, l = 0, f = !1, y = new Tv.OperatorSubscriber(o, function(O) {
      try {
        var S = e(O), P = u.get(S);
        if (!P) {
          u.set(S, P = n ? n() : new bk.Subject());
          var R = b(S, P);
          if (o.next(R), t) {
            var $ = Tv.createOperatorSubscriber(P, function() {
              P.complete(), $ == null || $.unsubscribe();
            }, void 0, void 0, function() {
              return u.delete(S);
            });
            y.add(mk.innerFrom(t(R)).subscribe($));
          }
        }
        P.next(a ? a(O) : O);
      } catch (j) {
        s(j);
      }
    }, function() {
      return c(function(O) {
        return O.complete();
      });
    }, s, function() {
      return u.clear();
    }, function() {
      return f = !0, l === 0;
    });
    i.subscribe(y);
    function b(O, S) {
      var P = new yk.Observable(function(R) {
        l++;
        var $ = S.subscribe(R);
        return function() {
          $.unsubscribe(), --l === 0 && f && y.unsubscribe();
        };
      });
      return P.key = O, P;
    }
  });
}
bs.groupBy = Ok;
var gs = {};
Object.defineProperty(gs, "__esModule", { value: !0 });
gs.isEmpty = void 0;
var wk = W, Ek = z;
function Sk() {
  return wk.operate(function(e, r) {
    e.subscribe(Ek.createOperatorSubscriber(r, function() {
      r.next(!1), r.complete();
    }, function() {
      r.next(!0), r.complete();
    }));
  });
}
gs.isEmpty = Sk;
var Os = {}, Uo = {}, Tk = h && h.__values || function(e) {
  var r = typeof Symbol == "function" && Symbol.iterator, t = r && e[r], n = 0;
  if (t)
    return t.call(e);
  if (e && typeof e.length == "number")
    return {
      next: function() {
        return e && n >= e.length && (e = void 0), { value: e && e[n++], done: !e };
      }
    };
  throw new TypeError(r ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(Uo, "__esModule", { value: !0 });
Uo.takeLast = void 0;
var Pk = It, Ik = W, Ak = z;
function Rk(e) {
  return e <= 0 ? function() {
    return Pk.EMPTY;
  } : Ik.operate(function(r, t) {
    var n = [];
    r.subscribe(Ak.createOperatorSubscriber(t, function(i) {
      n.push(i), e < n.length && n.shift();
    }, function() {
      var i, o;
      try {
        for (var a = Tk(n), u = a.next(); !u.done; u = a.next()) {
          var c = u.value;
          t.next(c);
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
      t.complete();
    }, void 0, function() {
      n = null;
    }));
  });
}
Uo.takeLast = Rk;
Object.defineProperty(Os, "__esModule", { value: !0 });
Os.last = void 0;
var Ck = Wt, $k = ar, jk = Uo, Nk = ln, Mk = sn, kk = Ye;
function Dk(e, r) {
  var t = arguments.length >= 2;
  return function(n) {
    return n.pipe(e ? $k.filter(function(i, o) {
      return e(i, o, n);
    }) : kk.identity, jk.takeLast(1), t ? Mk.defaultIfEmpty(r) : Nk.throwIfEmpty(function() {
      return new Ck.EmptyError();
    }));
  };
}
Os.last = Dk;
var ws = {};
Object.defineProperty(ws, "__esModule", { value: !0 });
ws.materialize = void 0;
var El = wu, Uk = W, Lk = z;
function Fk() {
  return Uk.operate(function(e, r) {
    e.subscribe(Lk.createOperatorSubscriber(r, function(t) {
      r.next(El.Notification.createNext(t));
    }, function() {
      r.next(El.Notification.createComplete()), r.complete();
    }, function(t) {
      r.next(El.Notification.createError(t)), r.complete();
    }));
  });
}
ws.materialize = Fk;
var Es = {};
Object.defineProperty(Es, "__esModule", { value: !0 });
Es.max = void 0;
var xk = Pr, Bk = _e;
function Wk(e) {
  return xk.reduce(Bk.isFunction(e) ? function(r, t) {
    return e(r, t) > 0 ? r : t;
  } : function(r, t) {
    return r > t ? r : t;
  });
}
Es.max = Wk;
var Ss = {};
Object.defineProperty(Ss, "__esModule", { value: !0 });
Ss.flatMap = void 0;
var Vk = jt;
Ss.flatMap = Vk.mergeMap;
var Ts = {};
Object.defineProperty(Ts, "__esModule", { value: !0 });
Ts.mergeMapTo = void 0;
var Pv = jt, qk = _e;
function Hk(e, r, t) {
  return t === void 0 && (t = 1 / 0), qk.isFunction(r) ? Pv.mergeMap(function() {
    return e;
  }, r, t) : (typeof r == "number" && (t = r), Pv.mergeMap(function() {
    return e;
  }, t));
}
Ts.mergeMapTo = Hk;
var Ps = {};
Object.defineProperty(Ps, "__esModule", { value: !0 });
Ps.mergeScan = void 0;
var zk = W, Yk = Jn;
function Gk(e, r, t) {
  return t === void 0 && (t = 1 / 0), zk.operate(function(n, i) {
    var o = r;
    return Yk.mergeInternals(n, i, function(a, u) {
      return e(o, a, u);
    }, t, function(a) {
      o = a;
    }, !1, void 0, function() {
      return o = null;
    });
  });
}
Ps.mergeScan = Gk;
var Is = {}, As = {}, Kk = h && h.__read || function(e, r) {
  var t = typeof Symbol == "function" && e[Symbol.iterator];
  if (!t)
    return e;
  var n = t.call(e), i, o = [], a;
  try {
    for (; (r === void 0 || r-- > 0) && !(i = n.next()).done; )
      o.push(i.value);
  } catch (u) {
    a = { error: u };
  } finally {
    try {
      i && !i.done && (t = n.return) && t.call(n);
    } finally {
      if (a)
        throw a.error;
    }
  }
  return o;
}, Zk = h && h.__spreadArray || function(e, r) {
  for (var t = 0, n = r.length, i = e.length; t < n; t++, i++)
    e[i] = r[t];
  return e;
};
Object.defineProperty(As, "__esModule", { value: !0 });
As.merge = void 0;
var Qk = W, Xk = or, Jk = an, Iv = xe, e2 = Ct;
function t2() {
  for (var e = [], r = 0; r < arguments.length; r++)
    e[r] = arguments[r];
  var t = Iv.popScheduler(e), n = Iv.popNumber(e, 1 / 0);
  return e = Xk.argsOrArgArray(e), Qk.operate(function(i, o) {
    Jk.mergeAll(n)(e2.from(Zk([i], Kk(e)), t)).subscribe(o);
  });
}
As.merge = t2;
var r2 = h && h.__read || function(e, r) {
  var t = typeof Symbol == "function" && e[Symbol.iterator];
  if (!t)
    return e;
  var n = t.call(e), i, o = [], a;
  try {
    for (; (r === void 0 || r-- > 0) && !(i = n.next()).done; )
      o.push(i.value);
  } catch (u) {
    a = { error: u };
  } finally {
    try {
      i && !i.done && (t = n.return) && t.call(n);
    } finally {
      if (a)
        throw a.error;
    }
  }
  return o;
}, n2 = h && h.__spreadArray || function(e, r) {
  for (var t = 0, n = r.length, i = e.length; t < n; t++, i++)
    e[i] = r[t];
  return e;
};
Object.defineProperty(Is, "__esModule", { value: !0 });
Is.mergeWith = void 0;
var i2 = As;
function o2() {
  for (var e = [], r = 0; r < arguments.length; r++)
    e[r] = arguments[r];
  return i2.merge.apply(void 0, n2([], r2(e)));
}
Is.mergeWith = o2;
var Rs = {};
Object.defineProperty(Rs, "__esModule", { value: !0 });
Rs.min = void 0;
var a2 = Pr, u2 = _e;
function s2(e) {
  return a2.reduce(u2.isFunction(e) ? function(r, t) {
    return e(r, t) < 0 ? r : t;
  } : function(r, t) {
    return r < t ? r : t;
  });
}
Rs.min = s2;
var ri = {};
Object.defineProperty(ri, "__esModule", { value: !0 });
ri.multicast = void 0;
var c2 = en, Av = _e, l2 = ti;
function f2(e, r) {
  var t = Av.isFunction(e) ? e : function() {
    return e;
  };
  return Av.isFunction(r) ? l2.connect(r, {
    connector: t
  }) : function(n) {
    return new c2.ConnectableObservable(n, t);
  };
}
ri.multicast = f2;
var Mn = {}, d2 = h && h.__read || function(e, r) {
  var t = typeof Symbol == "function" && e[Symbol.iterator];
  if (!t)
    return e;
  var n = t.call(e), i, o = [], a;
  try {
    for (; (r === void 0 || r-- > 0) && !(i = n.next()).done; )
      o.push(i.value);
  } catch (u) {
    a = { error: u };
  } finally {
    try {
      i && !i.done && (t = n.return) && t.call(n);
    } finally {
      if (a)
        throw a.error;
    }
  }
  return o;
}, h2 = h && h.__spreadArray || function(e, r) {
  for (var t = 0, n = r.length, i = e.length; t < n; t++, i++)
    e[i] = r[t];
  return e;
};
Object.defineProperty(Mn, "__esModule", { value: !0 });
Mn.onErrorResumeNext = Mn.onErrorResumeNextWith = void 0;
var v2 = or, p2 = So;
function mm() {
  for (var e = [], r = 0; r < arguments.length; r++)
    e[r] = arguments[r];
  var t = v2.argsOrArgArray(e);
  return function(n) {
    return p2.onErrorResumeNext.apply(void 0, h2([n], d2(t)));
  };
}
Mn.onErrorResumeNextWith = mm;
Mn.onErrorResumeNext = mm;
var Cs = {};
Object.defineProperty(Cs, "__esModule", { value: !0 });
Cs.pairwise = void 0;
var _2 = W, y2 = z;
function m2() {
  return _2.operate(function(e, r) {
    var t, n = !1;
    e.subscribe(y2.createOperatorSubscriber(r, function(i) {
      var o = t;
      t = i, n && r.next([o, i]), n = !0;
    }));
  });
}
Cs.pairwise = m2;
var $s = {};
Object.defineProperty($s, "__esModule", { value: !0 });
$s.pluck = void 0;
var b2 = qt;
function g2() {
  for (var e = [], r = 0; r < arguments.length; r++)
    e[r] = arguments[r];
  var t = e.length;
  if (t === 0)
    throw new Error("list of properties cannot be empty.");
  return b2.map(function(n) {
    for (var i = n, o = 0; o < t; o++) {
      var a = i == null ? void 0 : i[e[o]];
      if (typeof a < "u")
        i = a;
      else
        return;
    }
    return i;
  });
}
$s.pluck = g2;
var js = {};
Object.defineProperty(js, "__esModule", { value: !0 });
js.publish = void 0;
var O2 = De, w2 = ri, E2 = ti;
function S2(e) {
  return e ? function(r) {
    return E2.connect(e)(r);
  } : function(r) {
    return w2.multicast(new O2.Subject())(r);
  };
}
js.publish = S2;
var Ns = {};
Object.defineProperty(Ns, "__esModule", { value: !0 });
Ns.publishBehavior = void 0;
var T2 = oo, P2 = en;
function I2(e) {
  return function(r) {
    var t = new T2.BehaviorSubject(e);
    return new P2.ConnectableObservable(r, function() {
      return t;
    });
  };
}
Ns.publishBehavior = I2;
var Ms = {};
Object.defineProperty(Ms, "__esModule", { value: !0 });
Ms.publishLast = void 0;
var A2 = Yn, R2 = en;
function C2() {
  return function(e) {
    var r = new A2.AsyncSubject();
    return new R2.ConnectableObservable(e, function() {
      return r;
    });
  };
}
Ms.publishLast = C2;
var ks = {};
Object.defineProperty(ks, "__esModule", { value: !0 });
ks.publishReplay = void 0;
var $2 = zn, j2 = ri, Rv = _e;
function N2(e, r, t, n) {
  t && !Rv.isFunction(t) && (n = t);
  var i = Rv.isFunction(t) ? t : void 0;
  return function(o) {
    return j2.multicast(new $2.ReplaySubject(e, r, n), i)(o);
  };
}
ks.publishReplay = N2;
var Ds = {}, M2 = h && h.__read || function(e, r) {
  var t = typeof Symbol == "function" && e[Symbol.iterator];
  if (!t)
    return e;
  var n = t.call(e), i, o = [], a;
  try {
    for (; (r === void 0 || r-- > 0) && !(i = n.next()).done; )
      o.push(i.value);
  } catch (u) {
    a = { error: u };
  } finally {
    try {
      i && !i.done && (t = n.return) && t.call(n);
    } finally {
      if (a)
        throw a.error;
    }
  }
  return o;
}, k2 = h && h.__spreadArray || function(e, r) {
  for (var t = 0, n = r.length, i = e.length; t < n; t++, i++)
    e[i] = r[t];
  return e;
};
Object.defineProperty(Ds, "__esModule", { value: !0 });
Ds.raceWith = void 0;
var D2 = Yr, U2 = W, L2 = Ye;
function F2() {
  for (var e = [], r = 0; r < arguments.length; r++)
    e[r] = arguments[r];
  return e.length ? U2.operate(function(t, n) {
    D2.raceInit(k2([t], M2(e)))(n);
  }) : L2.identity;
}
Ds.raceWith = F2;
var Us = {};
Object.defineProperty(Us, "__esModule", { value: !0 });
Us.repeat = void 0;
var x2 = It, B2 = W, Cv = z, W2 = K, V2 = Ht;
function q2(e) {
  var r, t = 1 / 0, n;
  return e != null && (typeof e == "object" ? (r = e.count, t = r === void 0 ? 1 / 0 : r, n = e.delay) : t = e), t <= 0 ? function() {
    return x2.EMPTY;
  } : B2.operate(function(i, o) {
    var a = 0, u, c = function() {
      if (u == null || u.unsubscribe(), u = null, n != null) {
        var l = typeof n == "number" ? V2.timer(n) : W2.innerFrom(n(a)), f = Cv.createOperatorSubscriber(o, function() {
          f.unsubscribe(), s();
        });
        l.subscribe(f);
      } else
        s();
    }, s = function() {
      var l = !1;
      u = i.subscribe(Cv.createOperatorSubscriber(o, void 0, function() {
        ++a < t ? u ? c() : l = !0 : o.complete();
      })), l && c();
    };
    s();
  });
}
Us.repeat = q2;
var Ls = {};
Object.defineProperty(Ls, "__esModule", { value: !0 });
Ls.repeatWhen = void 0;
var H2 = K, z2 = De, Y2 = W, $v = z;
function G2(e) {
  return Y2.operate(function(r, t) {
    var n, i = !1, o, a = !1, u = !1, c = function() {
      return u && a && (t.complete(), !0);
    }, s = function() {
      return o || (o = new z2.Subject(), H2.innerFrom(e(o)).subscribe($v.createOperatorSubscriber(t, function() {
        n ? l() : i = !0;
      }, function() {
        a = !0, c();
      }))), o;
    }, l = function() {
      u = !1, n = r.subscribe($v.createOperatorSubscriber(t, void 0, function() {
        u = !0, !c() && s().next();
      })), i && (n.unsubscribe(), n = null, i = !1, l());
    };
    l();
  });
}
Ls.repeatWhen = G2;
var Fs = {};
Object.defineProperty(Fs, "__esModule", { value: !0 });
Fs.retry = void 0;
var K2 = W, jv = z, Z2 = Ye, Q2 = Ht, X2 = K;
function J2(e) {
  e === void 0 && (e = 1 / 0);
  var r;
  e && typeof e == "object" ? r = e : r = {
    count: e
  };
  var t = r.count, n = t === void 0 ? 1 / 0 : t, i = r.delay, o = r.resetOnSuccess, a = o === void 0 ? !1 : o;
  return n <= 0 ? Z2.identity : K2.operate(function(u, c) {
    var s = 0, l, f = function() {
      var y = !1;
      l = u.subscribe(jv.createOperatorSubscriber(c, function(b) {
        a && (s = 0), c.next(b);
      }, void 0, function(b) {
        if (s++ < n) {
          var O = function() {
            l ? (l.unsubscribe(), l = null, f()) : y = !0;
          };
          if (i != null) {
            var S = typeof i == "number" ? Q2.timer(i) : X2.innerFrom(i(b, s)), P = jv.createOperatorSubscriber(c, function() {
              P.unsubscribe(), O();
            }, function() {
              c.complete();
            });
            S.subscribe(P);
          } else
            O();
        } else
          c.error(b);
      })), y && (l.unsubscribe(), l = null, f());
    };
    f();
  });
}
Fs.retry = J2;
var xs = {};
Object.defineProperty(xs, "__esModule", { value: !0 });
xs.retryWhen = void 0;
var eD = K, tD = De, rD = W, Nv = z;
function nD(e) {
  return rD.operate(function(r, t) {
    var n, i = !1, o, a = function() {
      n = r.subscribe(Nv.createOperatorSubscriber(t, void 0, void 0, function(u) {
        o || (o = new tD.Subject(), eD.innerFrom(e(o)).subscribe(Nv.createOperatorSubscriber(t, function() {
          return n ? a() : i = !0;
        }))), o && o.next(u);
      })), i && (n.unsubscribe(), n = null, i = !1, a());
    };
    a();
  });
}
xs.retryWhen = nD;
var Lo = {};
Object.defineProperty(Lo, "__esModule", { value: !0 });
Lo.sample = void 0;
var iD = K, oD = W, aD = ze, Mv = z;
function uD(e) {
  return oD.operate(function(r, t) {
    var n = !1, i = null;
    r.subscribe(Mv.createOperatorSubscriber(t, function(o) {
      n = !0, i = o;
    })), iD.innerFrom(e).subscribe(Mv.createOperatorSubscriber(t, function() {
      if (n) {
        n = !1;
        var o = i;
        i = null, t.next(o);
      }
    }, aD.noop));
  });
}
Lo.sample = uD;
var Bs = {};
Object.defineProperty(Bs, "__esModule", { value: !0 });
Bs.sampleTime = void 0;
var sD = ft, cD = Lo, lD = Eo;
function fD(e, r) {
  return r === void 0 && (r = sD.asyncScheduler), cD.sample(lD.interval(e, r));
}
Bs.sampleTime = fD;
var Ws = {};
Object.defineProperty(Ws, "__esModule", { value: !0 });
Ws.scan = void 0;
var dD = W, hD = Ro;
function vD(e, r) {
  return dD.operate(hD.scanInternals(e, r, arguments.length >= 2, !0));
}
Ws.scan = vD;
var Vs = {};
Object.defineProperty(Vs, "__esModule", { value: !0 });
Vs.sequenceEqual = void 0;
var pD = W, _D = z, yD = K;
function mD(e, r) {
  return r === void 0 && (r = function(t, n) {
    return t === n;
  }), pD.operate(function(t, n) {
    var i = kv(), o = kv(), a = function(c) {
      n.next(c), n.complete();
    }, u = function(c, s) {
      var l = _D.createOperatorSubscriber(n, function(f) {
        var y = s.buffer, b = s.complete;
        y.length === 0 ? b ? a(!1) : c.buffer.push(f) : !r(f, y.shift()) && a(!1);
      }, function() {
        c.complete = !0;
        var f = s.complete, y = s.buffer;
        f && a(y.length === 0), l == null || l.unsubscribe();
      });
      return l;
    };
    t.subscribe(u(i, o)), yD.innerFrom(e).subscribe(u(o, i));
  });
}
Vs.sequenceEqual = mD;
function kv() {
  return {
    buffer: [],
    complete: !1
  };
}
var Fo = {}, bD = h && h.__read || function(e, r) {
  var t = typeof Symbol == "function" && e[Symbol.iterator];
  if (!t)
    return e;
  var n = t.call(e), i, o = [], a;
  try {
    for (; (r === void 0 || r-- > 0) && !(i = n.next()).done; )
      o.push(i.value);
  } catch (u) {
    a = { error: u };
  } finally {
    try {
      i && !i.done && (t = n.return) && t.call(n);
    } finally {
      if (a)
        throw a.error;
    }
  }
  return o;
}, gD = h && h.__spreadArray || function(e, r) {
  for (var t = 0, n = r.length, i = e.length; t < n; t++, i++)
    e[i] = r[t];
  return e;
};
Object.defineProperty(Fo, "__esModule", { value: !0 });
Fo.share = void 0;
var bm = K, OD = De, gm = Hn, wD = W;
function ED(e) {
  e === void 0 && (e = {});
  var r = e.connector, t = r === void 0 ? function() {
    return new OD.Subject();
  } : r, n = e.resetOnError, i = n === void 0 ? !0 : n, o = e.resetOnComplete, a = o === void 0 ? !0 : o, u = e.resetOnRefCountZero, c = u === void 0 ? !0 : u;
  return function(s) {
    var l, f, y, b = 0, O = !1, S = !1, P = function() {
      f == null || f.unsubscribe(), f = void 0;
    }, R = function() {
      P(), l = y = void 0, O = S = !1;
    }, $ = function() {
      var j = l;
      R(), j == null || j.unsubscribe();
    };
    return wD.operate(function(j, k) {
      b++, !S && !O && P();
      var L = y = y ?? t();
      k.add(function() {
        b--, b === 0 && !S && !O && (f = Sl($, c));
      }), L.subscribe(k), !l && b > 0 && (l = new gm.SafeSubscriber({
        next: function(Y) {
          return L.next(Y);
        },
        error: function(Y) {
          S = !0, P(), f = Sl(R, i, Y), L.error(Y);
        },
        complete: function() {
          O = !0, P(), f = Sl(R, a), L.complete();
        }
      }), bm.innerFrom(j).subscribe(l));
    })(s);
  };
}
Fo.share = ED;
function Sl(e, r) {
  for (var t = [], n = 2; n < arguments.length; n++)
    t[n - 2] = arguments[n];
  if (r === !0) {
    e();
    return;
  }
  if (r !== !1) {
    var i = new gm.SafeSubscriber({
      next: function() {
        i.unsubscribe(), e();
      }
    });
    return bm.innerFrom(r.apply(void 0, gD([], bD(t)))).subscribe(i);
  }
}
var qs = {};
Object.defineProperty(qs, "__esModule", { value: !0 });
qs.shareReplay = void 0;
var SD = zn, TD = Fo;
function PD(e, r, t) {
  var n, i, o, a, u = !1;
  return e && typeof e == "object" ? (n = e.bufferSize, a = n === void 0 ? 1 / 0 : n, i = e.windowTime, r = i === void 0 ? 1 / 0 : i, o = e.refCount, u = o === void 0 ? !1 : o, t = e.scheduler) : a = e ?? 1 / 0, TD.share({
    connector: function() {
      return new SD.ReplaySubject(a, r, t);
    },
    resetOnError: !0,
    resetOnComplete: !1,
    resetOnRefCountZero: u
  });
}
qs.shareReplay = PD;
var Hs = {};
Object.defineProperty(Hs, "__esModule", { value: !0 });
Hs.single = void 0;
var ID = Wt, AD = bo, RD = mo, CD = W, $D = z;
function jD(e) {
  return CD.operate(function(r, t) {
    var n = !1, i, o = !1, a = 0;
    r.subscribe($D.createOperatorSubscriber(t, function(u) {
      o = !0, (!e || e(u, a++, r)) && (n && t.error(new AD.SequenceError("Too many matching values")), n = !0, i = u);
    }, function() {
      n ? (t.next(i), t.complete()) : t.error(o ? new RD.NotFoundError("No matching values") : new ID.EmptyError());
    }));
  });
}
Hs.single = jD;
var zs = {};
Object.defineProperty(zs, "__esModule", { value: !0 });
zs.skip = void 0;
var ND = ar;
function MD(e) {
  return ND.filter(function(r, t) {
    return e <= t;
  });
}
zs.skip = MD;
var Ys = {};
Object.defineProperty(Ys, "__esModule", { value: !0 });
Ys.skipLast = void 0;
var kD = Ye, DD = W, UD = z;
function LD(e) {
  return e <= 0 ? kD.identity : DD.operate(function(r, t) {
    var n = new Array(e), i = 0;
    return r.subscribe(UD.createOperatorSubscriber(t, function(o) {
      var a = i++;
      if (a < e)
        n[a] = o;
      else {
        var u = a % e, c = n[u];
        n[u] = o, t.next(c);
      }
    })), function() {
      n = null;
    };
  });
}
Ys.skipLast = LD;
var Gs = {};
Object.defineProperty(Gs, "__esModule", { value: !0 });
Gs.skipUntil = void 0;
var FD = W, Dv = z, xD = K, BD = ze;
function WD(e) {
  return FD.operate(function(r, t) {
    var n = !1, i = Dv.createOperatorSubscriber(t, function() {
      i == null || i.unsubscribe(), n = !0;
    }, BD.noop);
    xD.innerFrom(e).subscribe(i), r.subscribe(Dv.createOperatorSubscriber(t, function(o) {
      return n && t.next(o);
    }));
  });
}
Gs.skipUntil = WD;
var Ks = {};
Object.defineProperty(Ks, "__esModule", { value: !0 });
Ks.skipWhile = void 0;
var VD = W, qD = z;
function HD(e) {
  return VD.operate(function(r, t) {
    var n = !1, i = 0;
    r.subscribe(qD.createOperatorSubscriber(t, function(o) {
      return (n || (n = !e(o, i++))) && t.next(o);
    }));
  });
}
Ks.skipWhile = HD;
var Zs = {};
Object.defineProperty(Zs, "__esModule", { value: !0 });
Zs.startWith = void 0;
var Uv = on, zD = xe, YD = W;
function GD() {
  for (var e = [], r = 0; r < arguments.length; r++)
    e[r] = arguments[r];
  var t = zD.popScheduler(e);
  return YD.operate(function(n, i) {
    (t ? Uv.concat(e, n, t) : Uv.concat(e, n)).subscribe(i);
  });
}
Zs.startWith = GD;
var Qs = {}, fn = {};
Object.defineProperty(fn, "__esModule", { value: !0 });
fn.switchMap = void 0;
var KD = K, ZD = W, Lv = z;
function QD(e, r) {
  return ZD.operate(function(t, n) {
    var i = null, o = 0, a = !1, u = function() {
      return a && !i && n.complete();
    };
    t.subscribe(Lv.createOperatorSubscriber(n, function(c) {
      i == null || i.unsubscribe();
      var s = 0, l = o++;
      KD.innerFrom(e(c, l)).subscribe(i = Lv.createOperatorSubscriber(n, function(f) {
        return n.next(r ? r(c, f, l, s++) : f);
      }, function() {
        i = null, u();
      }));
    }, function() {
      a = !0, u();
    }));
  });
}
fn.switchMap = QD;
Object.defineProperty(Qs, "__esModule", { value: !0 });
Qs.switchAll = void 0;
var XD = fn, JD = Ye;
function eU() {
  return XD.switchMap(JD.identity);
}
Qs.switchAll = eU;
var Xs = {};
Object.defineProperty(Xs, "__esModule", { value: !0 });
Xs.switchMapTo = void 0;
var Fv = fn, tU = _e;
function rU(e, r) {
  return tU.isFunction(r) ? Fv.switchMap(function() {
    return e;
  }, r) : Fv.switchMap(function() {
    return e;
  });
}
Xs.switchMapTo = rU;
var Js = {};
Object.defineProperty(Js, "__esModule", { value: !0 });
Js.switchScan = void 0;
var nU = fn, iU = W;
function oU(e, r) {
  return iU.operate(function(t, n) {
    var i = r;
    return nU.switchMap(function(o, a) {
      return e(i, o, a);
    }, function(o, a) {
      return i = a, a;
    })(t).subscribe(n), function() {
      i = null;
    };
  });
}
Js.switchScan = oU;
var ec = {};
Object.defineProperty(ec, "__esModule", { value: !0 });
ec.takeUntil = void 0;
var aU = W, uU = z, sU = K, cU = ze;
function lU(e) {
  return aU.operate(function(r, t) {
    sU.innerFrom(e).subscribe(uU.createOperatorSubscriber(t, function() {
      return t.complete();
    }, cU.noop)), !t.closed && r.subscribe(t);
  });
}
ec.takeUntil = lU;
var tc = {};
Object.defineProperty(tc, "__esModule", { value: !0 });
tc.takeWhile = void 0;
var fU = W, dU = z;
function hU(e, r) {
  return r === void 0 && (r = !1), fU.operate(function(t, n) {
    var i = 0;
    t.subscribe(dU.createOperatorSubscriber(n, function(o) {
      var a = e(o, i++);
      (a || r) && n.next(o), !a && n.complete();
    }));
  });
}
tc.takeWhile = hU;
var rc = {};
Object.defineProperty(rc, "__esModule", { value: !0 });
rc.tap = void 0;
var vU = _e, pU = W, _U = z, yU = Ye;
function mU(e, r, t) {
  var n = vU.isFunction(e) || r || t ? { next: e, error: r, complete: t } : e;
  return n ? pU.operate(function(i, o) {
    var a;
    (a = n.subscribe) === null || a === void 0 || a.call(n);
    var u = !0;
    i.subscribe(_U.createOperatorSubscriber(o, function(c) {
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
  }) : yU.identity;
}
rc.tap = mU;
var Jf = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.throttle = e.defaultThrottleConfig = void 0;
  var r = W, t = z, n = K;
  e.defaultThrottleConfig = {
    leading: !0,
    trailing: !1
  };
  function i(o, a) {
    return a === void 0 && (a = e.defaultThrottleConfig), r.operate(function(u, c) {
      var s = a.leading, l = a.trailing, f = !1, y = null, b = null, O = !1, S = function() {
        b == null || b.unsubscribe(), b = null, l && ($(), O && c.complete());
      }, P = function() {
        b = null, O && c.complete();
      }, R = function(j) {
        return b = n.innerFrom(o(j)).subscribe(t.createOperatorSubscriber(c, S, P));
      }, $ = function() {
        if (f) {
          f = !1;
          var j = y;
          y = null, c.next(j), !O && R(j);
        }
      };
      u.subscribe(t.createOperatorSubscriber(c, function(j) {
        f = !0, y = j, !(b && !b.closed) && (s ? $() : R(j));
      }, function() {
        O = !0, !(l && f && b && !b.closed) && c.complete();
      }));
    });
  }
  e.throttle = i;
})(Jf);
var nc = {};
Object.defineProperty(nc, "__esModule", { value: !0 });
nc.throttleTime = void 0;
var bU = ft, xv = Jf, gU = Ht;
function OU(e, r, t) {
  r === void 0 && (r = bU.asyncScheduler), t === void 0 && (t = xv.defaultThrottleConfig);
  var n = gU.timer(e, r);
  return xv.throttle(function() {
    return n;
  }, t);
}
nc.throttleTime = OU;
var kn = {};
Object.defineProperty(kn, "__esModule", { value: !0 });
kn.TimeInterval = kn.timeInterval = void 0;
var wU = ft, EU = W, SU = z;
function TU(e) {
  return e === void 0 && (e = wU.asyncScheduler), EU.operate(function(r, t) {
    var n = e.now();
    r.subscribe(SU.createOperatorSubscriber(t, function(i) {
      var o = e.now(), a = o - n;
      n = o, t.next(new Om(i, a));
    }));
  });
}
kn.timeInterval = TU;
var Om = function() {
  function e(r, t) {
    this.value = r, this.interval = t;
  }
  return e;
}();
kn.TimeInterval = Om;
var ic = {};
Object.defineProperty(ic, "__esModule", { value: !0 });
ic.timeoutWith = void 0;
var PU = ft, IU = Qn, AU = xa;
function RU(e, r, t) {
  var n, i, o;
  if (t = t ?? PU.async, IU.isValidDate(e) ? n = e : typeof e == "number" && (i = e), r)
    o = function() {
      return r;
    };
  else
    throw new TypeError("No observable provided to switch to");
  if (n == null && i == null)
    throw new TypeError("No timeout provided.");
  return AU.timeout({
    first: n,
    each: i,
    scheduler: t,
    with: o
  });
}
ic.timeoutWith = RU;
var oc = {};
Object.defineProperty(oc, "__esModule", { value: !0 });
oc.timestamp = void 0;
var CU = vu, $U = qt;
function jU(e) {
  return e === void 0 && (e = CU.dateTimestampProvider), $U.map(function(r) {
    return { value: r, timestamp: e.now() };
  });
}
oc.timestamp = jU;
var ac = {};
Object.defineProperty(ac, "__esModule", { value: !0 });
ac.window = void 0;
var Bv = De, NU = W, Wv = z, MU = ze, kU = K;
function DU(e) {
  return NU.operate(function(r, t) {
    var n = new Bv.Subject();
    t.next(n.asObservable());
    var i = function(o) {
      n.error(o), t.error(o);
    };
    return r.subscribe(Wv.createOperatorSubscriber(t, function(o) {
      return n == null ? void 0 : n.next(o);
    }, function() {
      n.complete(), t.complete();
    }, i)), kU.innerFrom(e).subscribe(Wv.createOperatorSubscriber(t, function() {
      n.complete(), t.next(n = new Bv.Subject());
    }, MU.noop, i)), function() {
      n == null || n.unsubscribe(), n = null;
    };
  });
}
ac.window = DU;
var uc = {}, UU = h && h.__values || function(e) {
  var r = typeof Symbol == "function" && Symbol.iterator, t = r && e[r], n = 0;
  if (t)
    return t.call(e);
  if (e && typeof e.length == "number")
    return {
      next: function() {
        return e && n >= e.length && (e = void 0), { value: e && e[n++], done: !e };
      }
    };
  throw new TypeError(r ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(uc, "__esModule", { value: !0 });
uc.windowCount = void 0;
var Vv = De, LU = W, FU = z;
function xU(e, r) {
  r === void 0 && (r = 0);
  var t = r > 0 ? r : e;
  return LU.operate(function(n, i) {
    var o = [new Vv.Subject()], a = 0;
    i.next(o[0].asObservable()), n.subscribe(FU.createOperatorSubscriber(i, function(u) {
      var c, s;
      try {
        for (var l = UU(o), f = l.next(); !f.done; f = l.next()) {
          var y = f.value;
          y.next(u);
        }
      } catch (S) {
        c = { error: S };
      } finally {
        try {
          f && !f.done && (s = l.return) && s.call(l);
        } finally {
          if (c)
            throw c.error;
        }
      }
      var b = a - e + 1;
      if (b >= 0 && b % t === 0 && o.shift().complete(), ++a % t === 0) {
        var O = new Vv.Subject();
        o.push(O), i.next(O.asObservable());
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
uc.windowCount = xU;
var sc = {};
Object.defineProperty(sc, "__esModule", { value: !0 });
sc.windowTime = void 0;
var BU = De, WU = ft, VU = qe, qU = W, HU = z, zU = Rt, YU = xe, qv = $t;
function GU(e) {
  for (var r, t, n = [], i = 1; i < arguments.length; i++)
    n[i - 1] = arguments[i];
  var o = (r = YU.popScheduler(n)) !== null && r !== void 0 ? r : WU.asyncScheduler, a = (t = n[0]) !== null && t !== void 0 ? t : null, u = n[1] || 1 / 0;
  return qU.operate(function(c, s) {
    var l = [], f = !1, y = function(P) {
      var R = P.window, $ = P.subs;
      R.complete(), $.unsubscribe(), zU.arrRemove(l, P), f && b();
    }, b = function() {
      if (l) {
        var P = new VU.Subscription();
        s.add(P);
        var R = new BU.Subject(), $ = {
          window: R,
          subs: P,
          seen: 0
        };
        l.push($), s.next(R.asObservable()), qv.executeSchedule(P, o, function() {
          return y($);
        }, e);
      }
    };
    a !== null && a >= 0 ? qv.executeSchedule(s, o, b, a, !0) : f = !0, b();
    var O = function(P) {
      return l.slice().forEach(P);
    }, S = function(P) {
      O(function(R) {
        var $ = R.window;
        return P($);
      }), P(s), s.unsubscribe();
    };
    return c.subscribe(HU.createOperatorSubscriber(s, function(P) {
      O(function(R) {
        R.window.next(P), u <= ++R.seen && y(R);
      });
    }, function() {
      return S(function(P) {
        return P.complete();
      });
    }, function(P) {
      return S(function(R) {
        return R.error(P);
      });
    })), function() {
      l = null;
    };
  });
}
sc.windowTime = GU;
var cc = {}, KU = h && h.__values || function(e) {
  var r = typeof Symbol == "function" && Symbol.iterator, t = r && e[r], n = 0;
  if (t)
    return t.call(e);
  if (e && typeof e.length == "number")
    return {
      next: function() {
        return e && n >= e.length && (e = void 0), { value: e && e[n++], done: !e };
      }
    };
  throw new TypeError(r ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(cc, "__esModule", { value: !0 });
cc.windowToggle = void 0;
var ZU = De, QU = qe, XU = W, Hv = K, Tl = z, zv = ze, JU = Rt;
function eL(e, r) {
  return XU.operate(function(t, n) {
    var i = [], o = function(a) {
      for (; 0 < i.length; )
        i.shift().error(a);
      n.error(a);
    };
    Hv.innerFrom(e).subscribe(Tl.createOperatorSubscriber(n, function(a) {
      var u = new ZU.Subject();
      i.push(u);
      var c = new QU.Subscription(), s = function() {
        JU.arrRemove(i, u), u.complete(), c.unsubscribe();
      }, l;
      try {
        l = Hv.innerFrom(r(a));
      } catch (f) {
        o(f);
        return;
      }
      n.next(u.asObservable()), c.add(l.subscribe(Tl.createOperatorSubscriber(n, s, zv.noop, o)));
    }, zv.noop)), t.subscribe(Tl.createOperatorSubscriber(n, function(a) {
      var u, c, s = i.slice();
      try {
        for (var l = KU(s), f = l.next(); !f.done; f = l.next()) {
          var y = f.value;
          y.next(a);
        }
      } catch (b) {
        u = { error: b };
      } finally {
        try {
          f && !f.done && (c = l.return) && c.call(l);
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
cc.windowToggle = eL;
var lc = {};
Object.defineProperty(lc, "__esModule", { value: !0 });
lc.windowWhen = void 0;
var tL = De, rL = W, Yv = z, nL = K;
function iL(e) {
  return rL.operate(function(r, t) {
    var n, i, o = function(u) {
      n.error(u), t.error(u);
    }, a = function() {
      i == null || i.unsubscribe(), n == null || n.complete(), n = new tL.Subject(), t.next(n.asObservable());
      var u;
      try {
        u = nL.innerFrom(e());
      } catch (c) {
        o(c);
        return;
      }
      u.subscribe(i = Yv.createOperatorSubscriber(t, a, a, o));
    };
    a(), r.subscribe(Yv.createOperatorSubscriber(t, function(u) {
      return n.next(u);
    }, function() {
      n.complete(), t.complete();
    }, o, function() {
      i == null || i.unsubscribe(), n = null;
    }));
  });
}
lc.windowWhen = iL;
var fc = {}, Gv = h && h.__read || function(e, r) {
  var t = typeof Symbol == "function" && e[Symbol.iterator];
  if (!t)
    return e;
  var n = t.call(e), i, o = [], a;
  try {
    for (; (r === void 0 || r-- > 0) && !(i = n.next()).done; )
      o.push(i.value);
  } catch (u) {
    a = { error: u };
  } finally {
    try {
      i && !i.done && (t = n.return) && t.call(n);
    } finally {
      if (a)
        throw a.error;
    }
  }
  return o;
}, Kv = h && h.__spreadArray || function(e, r) {
  for (var t = 0, n = r.length, i = e.length; t < n; t++, i++)
    e[i] = r[t];
  return e;
};
Object.defineProperty(fc, "__esModule", { value: !0 });
fc.withLatestFrom = void 0;
var oL = W, Zv = z, aL = K, uL = Ye, sL = ze, cL = xe;
function lL() {
  for (var e = [], r = 0; r < arguments.length; r++)
    e[r] = arguments[r];
  var t = cL.popResultSelector(e);
  return oL.operate(function(n, i) {
    for (var o = e.length, a = new Array(o), u = e.map(function() {
      return !1;
    }), c = !1, s = function(f) {
      aL.innerFrom(e[f]).subscribe(Zv.createOperatorSubscriber(i, function(y) {
        a[f] = y, !c && !u[f] && (u[f] = !0, (c = u.every(uL.identity)) && (u = null));
      }, sL.noop));
    }, l = 0; l < o; l++)
      s(l);
    n.subscribe(Zv.createOperatorSubscriber(i, function(f) {
      if (c) {
        var y = Kv([f], Gv(a));
        i.next(t ? t.apply(void 0, Kv([], Gv(y))) : y);
      }
    }));
  });
}
fc.withLatestFrom = lL;
var dc = {};
Object.defineProperty(dc, "__esModule", { value: !0 });
dc.zipAll = void 0;
var fL = ei, dL = Io;
function hL(e) {
  return dL.joinAllInternals(fL.zip, e);
}
dc.zipAll = hL;
var hc = {}, vc = {}, vL = h && h.__read || function(e, r) {
  var t = typeof Symbol == "function" && e[Symbol.iterator];
  if (!t)
    return e;
  var n = t.call(e), i, o = [], a;
  try {
    for (; (r === void 0 || r-- > 0) && !(i = n.next()).done; )
      o.push(i.value);
  } catch (u) {
    a = { error: u };
  } finally {
    try {
      i && !i.done && (t = n.return) && t.call(n);
    } finally {
      if (a)
        throw a.error;
    }
  }
  return o;
}, pL = h && h.__spreadArray || function(e, r) {
  for (var t = 0, n = r.length, i = e.length; t < n; t++, i++)
    e[i] = r[t];
  return e;
};
Object.defineProperty(vc, "__esModule", { value: !0 });
vc.zip = void 0;
var _L = ei, yL = W;
function mL() {
  for (var e = [], r = 0; r < arguments.length; r++)
    e[r] = arguments[r];
  return yL.operate(function(t, n) {
    _L.zip.apply(void 0, pL([t], vL(e))).subscribe(n);
  });
}
vc.zip = mL;
var bL = h && h.__read || function(e, r) {
  var t = typeof Symbol == "function" && e[Symbol.iterator];
  if (!t)
    return e;
  var n = t.call(e), i, o = [], a;
  try {
    for (; (r === void 0 || r-- > 0) && !(i = n.next()).done; )
      o.push(i.value);
  } catch (u) {
    a = { error: u };
  } finally {
    try {
      i && !i.done && (t = n.return) && t.call(n);
    } finally {
      if (a)
        throw a.error;
    }
  }
  return o;
}, gL = h && h.__spreadArray || function(e, r) {
  for (var t = 0, n = r.length, i = e.length; t < n; t++, i++)
    e[i] = r[t];
  return e;
};
Object.defineProperty(hc, "__esModule", { value: !0 });
hc.zipWith = void 0;
var OL = vc;
function wL() {
  for (var e = [], r = 0; r < arguments.length; r++)
    e[r] = arguments[r];
  return OL.zip.apply(void 0, gL([], bL(e)));
}
hc.zipWith = wL;
(function(e) {
  var r = h && h.__createBinding || (Object.create ? function(_n, yn, Yt, Rr) {
    Rr === void 0 && (Rr = Yt), Object.defineProperty(_n, Rr, { enumerable: !0, get: function() {
      return yn[Yt];
    } });
  } : function(_n, yn, Yt, Rr) {
    Rr === void 0 && (Rr = Yt), _n[Rr] = yn[Yt];
  }), t = h && h.__exportStar || function(_n, yn) {
    for (var Yt in _n)
      Yt !== "default" && !Object.prototype.hasOwnProperty.call(yn, Yt) && r(yn, _n, Yt);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.interval = e.iif = e.generate = e.fromEventPattern = e.fromEvent = e.from = e.forkJoin = e.empty = e.defer = e.connectable = e.concat = e.combineLatest = e.bindNodeCallback = e.bindCallback = e.UnsubscriptionError = e.TimeoutError = e.SequenceError = e.ObjectUnsubscribedError = e.NotFoundError = e.EmptyError = e.ArgumentOutOfRangeError = e.firstValueFrom = e.lastValueFrom = e.isObservable = e.identity = e.noop = e.pipe = e.NotificationKind = e.Notification = e.Subscriber = e.Subscription = e.Scheduler = e.VirtualAction = e.VirtualTimeScheduler = e.animationFrameScheduler = e.animationFrame = e.queueScheduler = e.queue = e.asyncScheduler = e.async = e.asapScheduler = e.asap = e.AsyncSubject = e.ReplaySubject = e.BehaviorSubject = e.Subject = e.animationFrames = e.observable = e.ConnectableObservable = e.Observable = void 0, e.filter = e.expand = e.exhaustMap = e.exhaustAll = e.exhaust = e.every = e.endWith = e.elementAt = e.distinctUntilKeyChanged = e.distinctUntilChanged = e.distinct = e.dematerialize = e.delayWhen = e.delay = e.defaultIfEmpty = e.debounceTime = e.debounce = e.count = e.connect = e.concatWith = e.concatMapTo = e.concatMap = e.concatAll = e.combineLatestWith = e.combineLatestAll = e.combineAll = e.catchError = e.bufferWhen = e.bufferToggle = e.bufferTime = e.bufferCount = e.buffer = e.auditTime = e.audit = e.config = e.NEVER = e.EMPTY = e.scheduled = e.zip = e.using = e.timer = e.throwError = e.range = e.race = e.partition = e.pairs = e.onErrorResumeNext = e.of = e.never = e.merge = void 0, e.switchMap = e.switchAll = e.subscribeOn = e.startWith = e.skipWhile = e.skipUntil = e.skipLast = e.skip = e.single = e.shareReplay = e.share = e.sequenceEqual = e.scan = e.sampleTime = e.sample = e.refCount = e.retryWhen = e.retry = e.repeatWhen = e.repeat = e.reduce = e.raceWith = e.publishReplay = e.publishLast = e.publishBehavior = e.publish = e.pluck = e.pairwise = e.onErrorResumeNextWith = e.observeOn = e.multicast = e.min = e.mergeWith = e.mergeScan = e.mergeMapTo = e.mergeMap = e.flatMap = e.mergeAll = e.max = e.materialize = e.mapTo = e.map = e.last = e.isEmpty = e.ignoreElements = e.groupBy = e.first = e.findIndex = e.find = e.finalize = void 0, e.zipWith = e.zipAll = e.withLatestFrom = e.windowWhen = e.windowToggle = e.windowTime = e.windowCount = e.window = e.toArray = e.timestamp = e.timeoutWith = e.timeout = e.timeInterval = e.throwIfEmpty = e.throttleTime = e.throttle = e.tap = e.takeWhile = e.takeUntil = e.takeLast = e.take = e.switchScan = e.switchMapTo = void 0;
  var n = ye;
  Object.defineProperty(e, "Observable", { enumerable: !0, get: function() {
    return n.Observable;
  } });
  var i = en;
  Object.defineProperty(e, "ConnectableObservable", { enumerable: !0, get: function() {
    return i.ConnectableObservable;
  } });
  var o = Jr;
  Object.defineProperty(e, "observable", { enumerable: !0, get: function() {
    return o.observable;
  } });
  var a = hu;
  Object.defineProperty(e, "animationFrames", { enumerable: !0, get: function() {
    return a.animationFrames;
  } });
  var u = De;
  Object.defineProperty(e, "Subject", { enumerable: !0, get: function() {
    return u.Subject;
  } });
  var c = oo;
  Object.defineProperty(e, "BehaviorSubject", { enumerable: !0, get: function() {
    return c.BehaviorSubject;
  } });
  var s = zn;
  Object.defineProperty(e, "ReplaySubject", { enumerable: !0, get: function() {
    return s.ReplaySubject;
  } });
  var l = Yn;
  Object.defineProperty(e, "AsyncSubject", { enumerable: !0, get: function() {
    return l.AsyncSubject;
  } });
  var f = Hy;
  Object.defineProperty(e, "asap", { enumerable: !0, get: function() {
    return f.asap;
  } }), Object.defineProperty(e, "asapScheduler", { enumerable: !0, get: function() {
    return f.asapScheduler;
  } });
  var y = ft;
  Object.defineProperty(e, "async", { enumerable: !0, get: function() {
    return y.async;
  } }), Object.defineProperty(e, "asyncScheduler", { enumerable: !0, get: function() {
    return y.asyncScheduler;
  } });
  var b = Gy;
  Object.defineProperty(e, "queue", { enumerable: !0, get: function() {
    return b.queue;
  } }), Object.defineProperty(e, "queueScheduler", { enumerable: !0, get: function() {
    return b.queueScheduler;
  } });
  var O = Ky;
  Object.defineProperty(e, "animationFrame", { enumerable: !0, get: function() {
    return O.animationFrame;
  } }), Object.defineProperty(e, "animationFrameScheduler", { enumerable: !0, get: function() {
    return O.animationFrameScheduler;
  } });
  var S = Nn;
  Object.defineProperty(e, "VirtualTimeScheduler", { enumerable: !0, get: function() {
    return S.VirtualTimeScheduler;
  } }), Object.defineProperty(e, "VirtualAction", { enumerable: !0, get: function() {
    return S.VirtualAction;
  } });
  var P = ao;
  Object.defineProperty(e, "Scheduler", { enumerable: !0, get: function() {
    return P.Scheduler;
  } });
  var R = qe;
  Object.defineProperty(e, "Subscription", { enumerable: !0, get: function() {
    return R.Subscription;
  } });
  var $ = Hn;
  Object.defineProperty(e, "Subscriber", { enumerable: !0, get: function() {
    return $.Subscriber;
  } });
  var j = wu;
  Object.defineProperty(e, "Notification", { enumerable: !0, get: function() {
    return j.Notification;
  } }), Object.defineProperty(e, "NotificationKind", { enumerable: !0, get: function() {
    return j.NotificationKind;
  } });
  var k = rr;
  Object.defineProperty(e, "pipe", { enumerable: !0, get: function() {
    return k.pipe;
  } });
  var L = ze;
  Object.defineProperty(e, "noop", { enumerable: !0, get: function() {
    return L.noop;
  } });
  var Y = Ye;
  Object.defineProperty(e, "identity", { enumerable: !0, get: function() {
    return Y.identity;
  } });
  var ee = Iu;
  Object.defineProperty(e, "isObservable", { enumerable: !0, get: function() {
    return ee.isObservable;
  } });
  var le = Au;
  Object.defineProperty(e, "lastValueFrom", { enumerable: !0, get: function() {
    return le.lastValueFrom;
  } });
  var me = Ru;
  Object.defineProperty(e, "firstValueFrom", { enumerable: !0, get: function() {
    return me.firstValueFrom;
  } });
  var Me = yo;
  Object.defineProperty(e, "ArgumentOutOfRangeError", { enumerable: !0, get: function() {
    return Me.ArgumentOutOfRangeError;
  } });
  var Pe = Wt;
  Object.defineProperty(e, "EmptyError", { enumerable: !0, get: function() {
    return Pe.EmptyError;
  } });
  var Ue = mo;
  Object.defineProperty(e, "NotFoundError", { enumerable: !0, get: function() {
    return Ue.NotFoundError;
  } });
  var be = io;
  Object.defineProperty(e, "ObjectUnsubscribedError", { enumerable: !0, get: function() {
    return be.ObjectUnsubscribedError;
  } });
  var he = bo;
  Object.defineProperty(e, "SequenceError", { enumerable: !0, get: function() {
    return he.SequenceError;
  } });
  var q = xa;
  Object.defineProperty(e, "TimeoutError", { enumerable: !0, get: function() {
    return q.TimeoutError;
  } });
  var re = to;
  Object.defineProperty(e, "UnsubscriptionError", { enumerable: !0, get: function() {
    return re.UnsubscriptionError;
  } });
  var ne = Cu;
  Object.defineProperty(e, "bindCallback", { enumerable: !0, get: function() {
    return ne.bindCallback;
  } });
  var G = $u;
  Object.defineProperty(e, "bindNodeCallback", { enumerable: !0, get: function() {
    return G.bindNodeCallback;
  } });
  var ve = yr;
  Object.defineProperty(e, "combineLatest", { enumerable: !0, get: function() {
    return ve.combineLatest;
  } });
  var We = on;
  Object.defineProperty(e, "concat", { enumerable: !0, get: function() {
    return We.concat;
  } });
  var Q = ju;
  Object.defineProperty(e, "connectable", { enumerable: !0, get: function() {
    return Q.connectable;
  } });
  var x = un;
  Object.defineProperty(e, "defer", { enumerable: !0, get: function() {
    return x.defer;
  } });
  var Ie = It;
  Object.defineProperty(e, "empty", { enumerable: !0, get: function() {
    return Ie.empty;
  } });
  var A = Nu;
  Object.defineProperty(e, "forkJoin", { enumerable: !0, get: function() {
    return A.forkJoin;
  } });
  var D = Ct;
  Object.defineProperty(e, "from", { enumerable: !0, get: function() {
    return D.from;
  } });
  var V = Mu;
  Object.defineProperty(e, "fromEvent", { enumerable: !0, get: function() {
    return V.fromEvent;
  } });
  var Z = ku;
  Object.defineProperty(e, "fromEventPattern", { enumerable: !0, get: function() {
    return Z.fromEventPattern;
  } });
  var X = Du;
  Object.defineProperty(e, "generate", { enumerable: !0, get: function() {
    return X.generate;
  } });
  var ke = Uu;
  Object.defineProperty(e, "iif", { enumerable: !0, get: function() {
    return ke.iif;
  } });
  var ut = Eo;
  Object.defineProperty(e, "interval", { enumerable: !0, get: function() {
    return ut.interval;
  } });
  var Mt = Lu;
  Object.defineProperty(e, "merge", { enumerable: !0, get: function() {
    return Mt.merge;
  } });
  var gt = hf;
  Object.defineProperty(e, "never", { enumerable: !0, get: function() {
    return gt.never;
  } });
  var Ve = Gn;
  Object.defineProperty(e, "of", { enumerable: !0, get: function() {
    return Ve.of;
  } });
  var Ot = So;
  Object.defineProperty(e, "onErrorResumeNext", { enumerable: !0, get: function() {
    return Ot.onErrorResumeNext;
  } });
  var hi = Fu;
  Object.defineProperty(e, "pairs", { enumerable: !0, get: function() {
    return hi.pairs;
  } });
  var g = xu;
  Object.defineProperty(e, "partition", { enumerable: !0, get: function() {
    return g.partition;
  } });
  var p = Yr;
  Object.defineProperty(e, "race", { enumerable: !0, get: function() {
    return p.race;
  } });
  var _ = Wu;
  Object.defineProperty(e, "range", { enumerable: !0, get: function() {
    return _.range;
  } });
  var E = _o;
  Object.defineProperty(e, "throwError", { enumerable: !0, get: function() {
    return E.throwError;
  } });
  var I = Ht;
  Object.defineProperty(e, "timer", { enumerable: !0, get: function() {
    return I.timer;
  } });
  var U = Vu;
  Object.defineProperty(e, "using", { enumerable: !0, get: function() {
    return U.using;
  } });
  var F = ei;
  Object.defineProperty(e, "zip", { enumerable: !0, get: function() {
    return F.zip;
  } });
  var oe = uo;
  Object.defineProperty(e, "scheduled", { enumerable: !0, get: function() {
    return oe.scheduled;
  } });
  var pe = It;
  Object.defineProperty(e, "EMPTY", { enumerable: !0, get: function() {
    return pe.EMPTY;
  } });
  var ue = hf;
  Object.defineProperty(e, "NEVER", { enumerable: !0, get: function() {
    return ue.NEVER;
  } }), t(dm, e);
  var Le = Er;
  Object.defineProperty(e, "config", { enumerable: !0, get: function() {
    return Le.config;
  } });
  var m = To;
  Object.defineProperty(e, "audit", { enumerable: !0, get: function() {
    return m.audit;
  } });
  var d = qu;
  Object.defineProperty(e, "auditTime", { enumerable: !0, get: function() {
    return d.auditTime;
  } });
  var v = Hu;
  Object.defineProperty(e, "buffer", { enumerable: !0, get: function() {
    return v.buffer;
  } });
  var w = zu;
  Object.defineProperty(e, "bufferCount", { enumerable: !0, get: function() {
    return w.bufferCount;
  } });
  var T = Yu;
  Object.defineProperty(e, "bufferTime", { enumerable: !0, get: function() {
    return T.bufferTime;
  } });
  var C = Gu;
  Object.defineProperty(e, "bufferToggle", { enumerable: !0, get: function() {
    return C.bufferToggle;
  } });
  var N = Ku;
  Object.defineProperty(e, "bufferWhen", { enumerable: !0, get: function() {
    return N.bufferWhen;
  } });
  var ie = Zu;
  Object.defineProperty(e, "catchError", { enumerable: !0, get: function() {
    return ie.catchError;
  } });
  var Re = Qu;
  Object.defineProperty(e, "combineAll", { enumerable: !0, get: function() {
    return Re.combineAll;
  } });
  var Se = Po;
  Object.defineProperty(e, "combineLatestAll", { enumerable: !0, get: function() {
    return Se.combineLatestAll;
  } });
  var Ce = Xu;
  Object.defineProperty(e, "combineLatestWith", { enumerable: !0, get: function() {
    return Ce.combineLatestWith;
  } });
  var ge = Xn;
  Object.defineProperty(e, "concatAll", { enumerable: !0, get: function() {
    return ge.concatAll;
  } });
  var Y0 = Co;
  Object.defineProperty(e, "concatMap", { enumerable: !0, get: function() {
    return Y0.concatMap;
  } });
  var G0 = es;
  Object.defineProperty(e, "concatMapTo", { enumerable: !0, get: function() {
    return G0.concatMapTo;
  } });
  var K0 = ts;
  Object.defineProperty(e, "concatWith", { enumerable: !0, get: function() {
    return K0.concatWith;
  } });
  var Z0 = ti;
  Object.defineProperty(e, "connect", { enumerable: !0, get: function() {
    return Z0.connect;
  } });
  var Q0 = is;
  Object.defineProperty(e, "count", { enumerable: !0, get: function() {
    return Q0.count;
  } });
  var X0 = os;
  Object.defineProperty(e, "debounce", { enumerable: !0, get: function() {
    return X0.debounce;
  } });
  var J0 = as;
  Object.defineProperty(e, "debounceTime", { enumerable: !0, get: function() {
    return J0.debounceTime;
  } });
  var eg = sn;
  Object.defineProperty(e, "defaultIfEmpty", { enumerable: !0, get: function() {
    return eg.defaultIfEmpty;
  } });
  var tg = us;
  Object.defineProperty(e, "delay", { enumerable: !0, get: function() {
    return tg.delay;
  } });
  var rg = $o;
  Object.defineProperty(e, "delayWhen", { enumerable: !0, get: function() {
    return rg.delayWhen;
  } });
  var ng = ss;
  Object.defineProperty(e, "dematerialize", { enumerable: !0, get: function() {
    return ng.dematerialize;
  } });
  var ig = cs;
  Object.defineProperty(e, "distinct", { enumerable: !0, get: function() {
    return ig.distinct;
  } });
  var og = Mo;
  Object.defineProperty(e, "distinctUntilChanged", { enumerable: !0, get: function() {
    return og.distinctUntilChanged;
  } });
  var ag = ls;
  Object.defineProperty(e, "distinctUntilKeyChanged", { enumerable: !0, get: function() {
    return ag.distinctUntilKeyChanged;
  } });
  var ug = fs;
  Object.defineProperty(e, "elementAt", { enumerable: !0, get: function() {
    return ug.elementAt;
  } });
  var sg = ds;
  Object.defineProperty(e, "endWith", { enumerable: !0, get: function() {
    return sg.endWith;
  } });
  var cg = hs;
  Object.defineProperty(e, "every", { enumerable: !0, get: function() {
    return cg.every;
  } });
  var lg = vs;
  Object.defineProperty(e, "exhaust", { enumerable: !0, get: function() {
    return lg.exhaust;
  } });
  var fg = ko;
  Object.defineProperty(e, "exhaustAll", { enumerable: !0, get: function() {
    return fg.exhaustAll;
  } });
  var dg = Do;
  Object.defineProperty(e, "exhaustMap", { enumerable: !0, get: function() {
    return dg.exhaustMap;
  } });
  var hg = ps;
  Object.defineProperty(e, "expand", { enumerable: !0, get: function() {
    return hg.expand;
  } });
  var vg = ar;
  Object.defineProperty(e, "filter", { enumerable: !0, get: function() {
    return vg.filter;
  } });
  var pg = _s;
  Object.defineProperty(e, "finalize", { enumerable: !0, get: function() {
    return pg.finalize;
  } });
  var _g = Gr;
  Object.defineProperty(e, "find", { enumerable: !0, get: function() {
    return _g.find;
  } });
  var yg = ys;
  Object.defineProperty(e, "findIndex", { enumerable: !0, get: function() {
    return yg.findIndex;
  } });
  var mg = ms;
  Object.defineProperty(e, "first", { enumerable: !0, get: function() {
    return mg.first;
  } });
  var bg = bs;
  Object.defineProperty(e, "groupBy", { enumerable: !0, get: function() {
    return bg.groupBy;
  } });
  var gg = jo;
  Object.defineProperty(e, "ignoreElements", { enumerable: !0, get: function() {
    return gg.ignoreElements;
  } });
  var Og = gs;
  Object.defineProperty(e, "isEmpty", { enumerable: !0, get: function() {
    return Og.isEmpty;
  } });
  var wg = Os;
  Object.defineProperty(e, "last", { enumerable: !0, get: function() {
    return wg.last;
  } });
  var Eg = qt;
  Object.defineProperty(e, "map", { enumerable: !0, get: function() {
    return Eg.map;
  } });
  var Sg = No;
  Object.defineProperty(e, "mapTo", { enumerable: !0, get: function() {
    return Sg.mapTo;
  } });
  var Tg = ws;
  Object.defineProperty(e, "materialize", { enumerable: !0, get: function() {
    return Tg.materialize;
  } });
  var Pg = Es;
  Object.defineProperty(e, "max", { enumerable: !0, get: function() {
    return Pg.max;
  } });
  var Ig = an;
  Object.defineProperty(e, "mergeAll", { enumerable: !0, get: function() {
    return Ig.mergeAll;
  } });
  var Ag = Ss;
  Object.defineProperty(e, "flatMap", { enumerable: !0, get: function() {
    return Ag.flatMap;
  } });
  var Rg = jt;
  Object.defineProperty(e, "mergeMap", { enumerable: !0, get: function() {
    return Rg.mergeMap;
  } });
  var Cg = Ts;
  Object.defineProperty(e, "mergeMapTo", { enumerable: !0, get: function() {
    return Cg.mergeMapTo;
  } });
  var $g = Ps;
  Object.defineProperty(e, "mergeScan", { enumerable: !0, get: function() {
    return $g.mergeScan;
  } });
  var jg = Is;
  Object.defineProperty(e, "mergeWith", { enumerable: !0, get: function() {
    return jg.mergeWith;
  } });
  var Ng = Rs;
  Object.defineProperty(e, "min", { enumerable: !0, get: function() {
    return Ng.min;
  } });
  var Mg = ri;
  Object.defineProperty(e, "multicast", { enumerable: !0, get: function() {
    return Mg.multicast;
  } });
  var kg = rn;
  Object.defineProperty(e, "observeOn", { enumerable: !0, get: function() {
    return kg.observeOn;
  } });
  var Dg = Mn;
  Object.defineProperty(e, "onErrorResumeNextWith", { enumerable: !0, get: function() {
    return Dg.onErrorResumeNextWith;
  } });
  var Ug = Cs;
  Object.defineProperty(e, "pairwise", { enumerable: !0, get: function() {
    return Ug.pairwise;
  } });
  var Lg = $s;
  Object.defineProperty(e, "pluck", { enumerable: !0, get: function() {
    return Lg.pluck;
  } });
  var Fg = js;
  Object.defineProperty(e, "publish", { enumerable: !0, get: function() {
    return Fg.publish;
  } });
  var xg = Ns;
  Object.defineProperty(e, "publishBehavior", { enumerable: !0, get: function() {
    return xg.publishBehavior;
  } });
  var Bg = Ms;
  Object.defineProperty(e, "publishLast", { enumerable: !0, get: function() {
    return Bg.publishLast;
  } });
  var Wg = ks;
  Object.defineProperty(e, "publishReplay", { enumerable: !0, get: function() {
    return Wg.publishReplay;
  } });
  var Vg = Ds;
  Object.defineProperty(e, "raceWith", { enumerable: !0, get: function() {
    return Vg.raceWith;
  } });
  var qg = Pr;
  Object.defineProperty(e, "reduce", { enumerable: !0, get: function() {
    return qg.reduce;
  } });
  var Hg = Us;
  Object.defineProperty(e, "repeat", { enumerable: !0, get: function() {
    return Hg.repeat;
  } });
  var zg = Ls;
  Object.defineProperty(e, "repeatWhen", { enumerable: !0, get: function() {
    return zg.repeatWhen;
  } });
  var Yg = Fs;
  Object.defineProperty(e, "retry", { enumerable: !0, get: function() {
    return Yg.retry;
  } });
  var Gg = xs;
  Object.defineProperty(e, "retryWhen", { enumerable: !0, get: function() {
    return Gg.retryWhen;
  } });
  var Kg = no;
  Object.defineProperty(e, "refCount", { enumerable: !0, get: function() {
    return Kg.refCount;
  } });
  var Zg = Lo;
  Object.defineProperty(e, "sample", { enumerable: !0, get: function() {
    return Zg.sample;
  } });
  var Qg = Bs;
  Object.defineProperty(e, "sampleTime", { enumerable: !0, get: function() {
    return Qg.sampleTime;
  } });
  var Xg = Ws;
  Object.defineProperty(e, "scan", { enumerable: !0, get: function() {
    return Xg.scan;
  } });
  var Jg = Vs;
  Object.defineProperty(e, "sequenceEqual", { enumerable: !0, get: function() {
    return Jg.sequenceEqual;
  } });
  var eO = Fo;
  Object.defineProperty(e, "share", { enumerable: !0, get: function() {
    return eO.share;
  } });
  var tO = qs;
  Object.defineProperty(e, "shareReplay", { enumerable: !0, get: function() {
    return tO.shareReplay;
  } });
  var rO = Hs;
  Object.defineProperty(e, "single", { enumerable: !0, get: function() {
    return rO.single;
  } });
  var nO = zs;
  Object.defineProperty(e, "skip", { enumerable: !0, get: function() {
    return nO.skip;
  } });
  var iO = Ys;
  Object.defineProperty(e, "skipLast", { enumerable: !0, get: function() {
    return iO.skipLast;
  } });
  var oO = Gs;
  Object.defineProperty(e, "skipUntil", { enumerable: !0, get: function() {
    return oO.skipUntil;
  } });
  var aO = Ks;
  Object.defineProperty(e, "skipWhile", { enumerable: !0, get: function() {
    return aO.skipWhile;
  } });
  var uO = Zs;
  Object.defineProperty(e, "startWith", { enumerable: !0, get: function() {
    return uO.startWith;
  } });
  var sO = nn;
  Object.defineProperty(e, "subscribeOn", { enumerable: !0, get: function() {
    return sO.subscribeOn;
  } });
  var cO = Qs;
  Object.defineProperty(e, "switchAll", { enumerable: !0, get: function() {
    return cO.switchAll;
  } });
  var lO = fn;
  Object.defineProperty(e, "switchMap", { enumerable: !0, get: function() {
    return lO.switchMap;
  } });
  var fO = Xs;
  Object.defineProperty(e, "switchMapTo", { enumerable: !0, get: function() {
    return fO.switchMapTo;
  } });
  var dO = Js;
  Object.defineProperty(e, "switchScan", { enumerable: !0, get: function() {
    return dO.switchScan;
  } });
  var hO = cn;
  Object.defineProperty(e, "take", { enumerable: !0, get: function() {
    return hO.take;
  } });
  var vO = Uo;
  Object.defineProperty(e, "takeLast", { enumerable: !0, get: function() {
    return vO.takeLast;
  } });
  var pO = ec;
  Object.defineProperty(e, "takeUntil", { enumerable: !0, get: function() {
    return pO.takeUntil;
  } });
  var _O = tc;
  Object.defineProperty(e, "takeWhile", { enumerable: !0, get: function() {
    return _O.takeWhile;
  } });
  var yO = rc;
  Object.defineProperty(e, "tap", { enumerable: !0, get: function() {
    return yO.tap;
  } });
  var mO = Jf;
  Object.defineProperty(e, "throttle", { enumerable: !0, get: function() {
    return mO.throttle;
  } });
  var bO = nc;
  Object.defineProperty(e, "throttleTime", { enumerable: !0, get: function() {
    return bO.throttleTime;
  } });
  var gO = ln;
  Object.defineProperty(e, "throwIfEmpty", { enumerable: !0, get: function() {
    return gO.throwIfEmpty;
  } });
  var OO = kn;
  Object.defineProperty(e, "timeInterval", { enumerable: !0, get: function() {
    return OO.timeInterval;
  } });
  var wO = xa;
  Object.defineProperty(e, "timeout", { enumerable: !0, get: function() {
    return wO.timeout;
  } });
  var EO = ic;
  Object.defineProperty(e, "timeoutWith", { enumerable: !0, get: function() {
    return EO.timeoutWith;
  } });
  var SO = oc;
  Object.defineProperty(e, "timestamp", { enumerable: !0, get: function() {
    return SO.timestamp;
  } });
  var TO = Ao;
  Object.defineProperty(e, "toArray", { enumerable: !0, get: function() {
    return TO.toArray;
  } });
  var PO = ac;
  Object.defineProperty(e, "window", { enumerable: !0, get: function() {
    return PO.window;
  } });
  var IO = uc;
  Object.defineProperty(e, "windowCount", { enumerable: !0, get: function() {
    return IO.windowCount;
  } });
  var AO = sc;
  Object.defineProperty(e, "windowTime", { enumerable: !0, get: function() {
    return AO.windowTime;
  } });
  var RO = cc;
  Object.defineProperty(e, "windowToggle", { enumerable: !0, get: function() {
    return RO.windowToggle;
  } });
  var CO = lc;
  Object.defineProperty(e, "windowWhen", { enumerable: !0, get: function() {
    return CO.windowWhen;
  } });
  var $O = fc;
  Object.defineProperty(e, "withLatestFrom", { enumerable: !0, get: function() {
    return $O.withLatestFrom;
  } });
  var jO = dc;
  Object.defineProperty(e, "zipAll", { enumerable: !0, get: function() {
    return jO.zipAll;
  } });
  var NO = hc;
  Object.defineProperty(e, "zipWith", { enumerable: !0, get: function() {
    return NO.zipWith;
  } });
})(eo);
function de(e) {
  return typeof e == "function";
}
function wm(e) {
  return de(e == null ? void 0 : e.lift);
}
function H(e) {
  return function(r) {
    if (wm(r))
      return r.lift(function(t) {
        try {
          return e(t, this);
        } catch (n) {
          this.error(n);
        }
      });
    throw new TypeError("Unable to lift unknown Observable type");
  };
}
var vf = function(e, r) {
  return vf = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, n) {
    t.__proto__ = n;
  } || function(t, n) {
    for (var i in n)
      Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
  }, vf(e, r);
};
function bt(e, r) {
  if (typeof r != "function" && r !== null)
    throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
  vf(e, r);
  function t() {
    this.constructor = e;
  }
  e.prototype = r === null ? Object.create(r) : (t.prototype = r.prototype, new t());
}
function EL(e, r, t, n) {
  function i(o) {
    return o instanceof t ? o : new t(function(a) {
      a(o);
    });
  }
  return new (t || (t = Promise))(function(o, a) {
    function u(l) {
      try {
        s(n.next(l));
      } catch (f) {
        a(f);
      }
    }
    function c(l) {
      try {
        s(n.throw(l));
      } catch (f) {
        a(f);
      }
    }
    function s(l) {
      l.done ? o(l.value) : i(l.value).then(u, c);
    }
    s((n = n.apply(e, r || [])).next());
  });
}
function Em(e, r) {
  var t = { label: 0, sent: function() {
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
    for (; t; )
      try {
        if (n = 1, i && (o = s[0] & 2 ? i.return : s[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, s[1])).done)
          return o;
        switch (i = 0, o && (s = [s[0] & 2, o.value]), s[0]) {
          case 0:
          case 1:
            o = s;
            break;
          case 4:
            return t.label++, { value: s[1], done: !1 };
          case 5:
            t.label++, i = s[1], s = [0];
            continue;
          case 7:
            s = t.ops.pop(), t.trys.pop();
            continue;
          default:
            if (o = t.trys, !(o = o.length > 0 && o[o.length - 1]) && (s[0] === 6 || s[0] === 2)) {
              t = 0;
              continue;
            }
            if (s[0] === 3 && (!o || s[1] > o[0] && s[1] < o[3])) {
              t.label = s[1];
              break;
            }
            if (s[0] === 6 && t.label < o[1]) {
              t.label = o[1], o = s;
              break;
            }
            if (o && t.label < o[2]) {
              t.label = o[2], t.ops.push(s);
              break;
            }
            o[2] && t.ops.pop(), t.trys.pop();
            continue;
        }
        s = r.call(e, t);
      } catch (l) {
        s = [6, l], i = 0;
      } finally {
        n = o = 0;
      }
    if (s[0] & 5)
      throw s[1];
    return { value: s[0] ? s[1] : void 0, done: !0 };
  }
}
function ct(e) {
  var r = typeof Symbol == "function" && Symbol.iterator, t = r && e[r], n = 0;
  if (t)
    return t.call(e);
  if (e && typeof e.length == "number")
    return {
      next: function() {
        return e && n >= e.length && (e = void 0), { value: e && e[n++], done: !e };
      }
    };
  throw new TypeError(r ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function $e(e, r) {
  var t = typeof Symbol == "function" && e[Symbol.iterator];
  if (!t)
    return e;
  var n = t.call(e), i, o = [], a;
  try {
    for (; (r === void 0 || r-- > 0) && !(i = n.next()).done; )
      o.push(i.value);
  } catch (u) {
    a = { error: u };
  } finally {
    try {
      i && !i.done && (t = n.return) && t.call(n);
    } finally {
      if (a)
        throw a.error;
    }
  }
  return o;
}
function je(e, r, t) {
  if (t || arguments.length === 2)
    for (var n = 0, i = r.length, o; n < i; n++)
      (o || !(n in r)) && (o || (o = Array.prototype.slice.call(r, 0, n)), o[n] = r[n]);
  return e.concat(o || Array.prototype.slice.call(r));
}
function Pn(e) {
  return this instanceof Pn ? (this.v = e, this) : new Pn(e);
}
function SL(e, r, t) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var n = t.apply(e, r || []), i, o = [];
  return i = {}, a("next"), a("throw"), a("return"), i[Symbol.asyncIterator] = function() {
    return this;
  }, i;
  function a(y) {
    n[y] && (i[y] = function(b) {
      return new Promise(function(O, S) {
        o.push([y, b, O, S]) > 1 || u(y, b);
      });
    });
  }
  function u(y, b) {
    try {
      c(n[y](b));
    } catch (O) {
      f(o[0][3], O);
    }
  }
  function c(y) {
    y.value instanceof Pn ? Promise.resolve(y.value.v).then(s, l) : f(o[0][2], y);
  }
  function s(y) {
    u("next", y);
  }
  function l(y) {
    u("throw", y);
  }
  function f(y, b) {
    y(b), o.shift(), o.length && u(o[0][0], o[0][1]);
  }
}
function TL(e) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var r = e[Symbol.asyncIterator], t;
  return r ? r.call(e) : (e = typeof ct == "function" ? ct(e) : e[Symbol.iterator](), t = {}, n("next"), n("throw"), n("return"), t[Symbol.asyncIterator] = function() {
    return this;
  }, t);
  function n(o) {
    t[o] = e[o] && function(a) {
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
}
var Sm = function(e) {
  return e && typeof e.length == "number" && typeof e != "function";
};
function Tm(e) {
  return de(e == null ? void 0 : e.then);
}
function dn(e) {
  var r = function(n) {
    Error.call(n), n.stack = new Error().stack;
  }, t = e(r);
  return t.prototype = Object.create(Error.prototype), t.prototype.constructor = t, t;
}
var Pl = dn(function(e) {
  return function(t) {
    e(this), this.message = t ? t.length + ` errors occurred during unsubscription:
` + t.map(function(n, i) {
      return i + 1 + ") " + n.toString();
    }).join(`
  `) : "", this.name = "UnsubscriptionError", this.errors = t;
  };
});
function nr(e, r) {
  if (e) {
    var t = e.indexOf(r);
    0 <= t && e.splice(t, 1);
  }
}
var At = function() {
  function e(r) {
    this.initialTeardown = r, this.closed = !1, this._parentage = null, this._finalizers = null;
  }
  return e.prototype.unsubscribe = function() {
    var r, t, n, i, o;
    if (!this.closed) {
      this.closed = !0;
      var a = this._parentage;
      if (a)
        if (this._parentage = null, Array.isArray(a))
          try {
            for (var u = ct(a), c = u.next(); !c.done; c = u.next()) {
              var s = c.value;
              s.remove(this);
            }
          } catch (S) {
            r = { error: S };
          } finally {
            try {
              c && !c.done && (t = u.return) && t.call(u);
            } finally {
              if (r)
                throw r.error;
            }
          }
        else
          a.remove(this);
      var l = this.initialTeardown;
      if (de(l))
        try {
          l();
        } catch (S) {
          o = S instanceof Pl ? S.errors : [S];
        }
      var f = this._finalizers;
      if (f) {
        this._finalizers = null;
        try {
          for (var y = ct(f), b = y.next(); !b.done; b = y.next()) {
            var O = b.value;
            try {
              Qv(O);
            } catch (S) {
              o = o ?? [], S instanceof Pl ? o = je(je([], $e(o)), $e(S.errors)) : o.push(S);
            }
          }
        } catch (S) {
          n = { error: S };
        } finally {
          try {
            b && !b.done && (i = y.return) && i.call(y);
          } finally {
            if (n)
              throw n.error;
          }
        }
      }
      if (o)
        throw new Pl(o);
    }
  }, e.prototype.add = function(r) {
    var t;
    if (r && r !== this)
      if (this.closed)
        Qv(r);
      else {
        if (r instanceof e) {
          if (r.closed || r._hasParent(this))
            return;
          r._addParent(this);
        }
        (this._finalizers = (t = this._finalizers) !== null && t !== void 0 ? t : []).push(r);
      }
  }, e.prototype._hasParent = function(r) {
    var t = this._parentage;
    return t === r || Array.isArray(t) && t.includes(r);
  }, e.prototype._addParent = function(r) {
    var t = this._parentage;
    this._parentage = Array.isArray(t) ? (t.push(r), t) : t ? [t, r] : r;
  }, e.prototype._removeParent = function(r) {
    var t = this._parentage;
    t === r ? this._parentage = null : Array.isArray(t) && nr(t, r);
  }, e.prototype.remove = function(r) {
    var t = this._finalizers;
    t && nr(t, r), r instanceof e && r._removeParent(this);
  }, e.EMPTY = function() {
    var r = new e();
    return r.closed = !0, r;
  }(), e;
}(), Pm = At.EMPTY;
function Im(e) {
  return e instanceof At || e && "closed" in e && de(e.remove) && de(e.add) && de(e.unsubscribe);
}
function Qv(e) {
  de(e) ? e() : e.unsubscribe();
}
var pc = {
  onUnhandledError: null,
  onStoppedNotification: null,
  Promise: void 0,
  useDeprecatedSynchronousErrorHandling: !1,
  useDeprecatedNextContext: !1
}, Ba = {
  setTimeout: function(e, r) {
    for (var t = [], n = 2; n < arguments.length; n++)
      t[n - 2] = arguments[n];
    var i = Ba.delegate;
    return i != null && i.setTimeout ? i.setTimeout.apply(i, je([e, r], $e(t))) : setTimeout.apply(void 0, je([e, r], $e(t)));
  },
  clearTimeout: function(e) {
    var r = Ba.delegate;
    return ((r == null ? void 0 : r.clearTimeout) || clearTimeout)(e);
  },
  delegate: void 0
};
function Am(e) {
  Ba.setTimeout(function() {
    throw e;
  });
}
function Ze() {
}
var PL = function() {
  return ed("C", void 0, void 0);
}();
function IL(e) {
  return ed("E", void 0, e);
}
function AL(e) {
  return ed("N", e, void 0);
}
function ed(e, r, t) {
  return {
    kind: e,
    value: r,
    error: t
  };
}
var aa = null;
function Aa(e) {
  if (pc.useDeprecatedSynchronousErrorHandling) {
    var r = !aa;
    if (r && (aa = { errorThrown: !1, error: null }), e(), r) {
      var t = aa, n = t.errorThrown, i = t.error;
      if (aa = null, n)
        throw i;
    }
  } else
    e();
}
var td = function(e) {
  bt(r, e);
  function r(t) {
    var n = e.call(this) || this;
    return n.isStopped = !1, t ? (n.destination = t, Im(t) && t.add(n)) : n.destination = jL, n;
  }
  return r.create = function(t, n, i) {
    return new Bi(t, n, i);
  }, r.prototype.next = function(t) {
    this.isStopped ? Al(AL(t), this) : this._next(t);
  }, r.prototype.error = function(t) {
    this.isStopped ? Al(IL(t), this) : (this.isStopped = !0, this._error(t));
  }, r.prototype.complete = function() {
    this.isStopped ? Al(PL, this) : (this.isStopped = !0, this._complete());
  }, r.prototype.unsubscribe = function() {
    this.closed || (this.isStopped = !0, e.prototype.unsubscribe.call(this), this.destination = null);
  }, r.prototype._next = function(t) {
    this.destination.next(t);
  }, r.prototype._error = function(t) {
    try {
      this.destination.error(t);
    } finally {
      this.unsubscribe();
    }
  }, r.prototype._complete = function() {
    try {
      this.destination.complete();
    } finally {
      this.unsubscribe();
    }
  }, r;
}(At), RL = Function.prototype.bind;
function Il(e, r) {
  return RL.call(e, r);
}
var CL = function() {
  function e(r) {
    this.partialObserver = r;
  }
  return e.prototype.next = function(r) {
    var t = this.partialObserver;
    if (t.next)
      try {
        t.next(r);
      } catch (n) {
        ua(n);
      }
  }, e.prototype.error = function(r) {
    var t = this.partialObserver;
    if (t.error)
      try {
        t.error(r);
      } catch (n) {
        ua(n);
      }
    else
      ua(r);
  }, e.prototype.complete = function() {
    var r = this.partialObserver;
    if (r.complete)
      try {
        r.complete();
      } catch (t) {
        ua(t);
      }
  }, e;
}(), Bi = function(e) {
  bt(r, e);
  function r(t, n, i) {
    var o = e.call(this) || this, a;
    if (de(t) || !t)
      a = {
        next: t ?? void 0,
        error: n ?? void 0,
        complete: i ?? void 0
      };
    else {
      var u;
      o && pc.useDeprecatedNextContext ? (u = Object.create(t), u.unsubscribe = function() {
        return o.unsubscribe();
      }, a = {
        next: t.next && Il(t.next, u),
        error: t.error && Il(t.error, u),
        complete: t.complete && Il(t.complete, u)
      }) : a = t;
    }
    return o.destination = new CL(a), o;
  }
  return r;
}(td);
function ua(e) {
  Am(e);
}
function $L(e) {
  throw e;
}
function Al(e, r) {
  var t = pc.onStoppedNotification;
  t && Ba.setTimeout(function() {
    return t(e, r);
  });
}
var jL = {
  closed: !0,
  next: Ze,
  error: $L,
  complete: Ze
}, rd = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}();
function ot(e) {
  return e;
}
function Rm() {
  for (var e = [], r = 0; r < arguments.length; r++)
    e[r] = arguments[r];
  return Cm(e);
}
function Cm(e) {
  return e.length === 0 ? ot : e.length === 1 ? e[0] : function(t) {
    return e.reduce(function(n, i) {
      return i(n);
    }, t);
  };
}
var Be = function() {
  function e(r) {
    r && (this._subscribe = r);
  }
  return e.prototype.lift = function(r) {
    var t = new e();
    return t.source = this, t.operator = r, t;
  }, e.prototype.subscribe = function(r, t, n) {
    var i = this, o = ML(r) ? r : new Bi(r, t, n);
    return Aa(function() {
      var a = i, u = a.operator, c = a.source;
      o.add(u ? u.call(o, c) : c ? i._subscribe(o) : i._trySubscribe(o));
    }), o;
  }, e.prototype._trySubscribe = function(r) {
    try {
      return this._subscribe(r);
    } catch (t) {
      r.error(t);
    }
  }, e.prototype.forEach = function(r, t) {
    var n = this;
    return t = Xv(t), new t(function(i, o) {
      var a = new Bi({
        next: function(u) {
          try {
            r(u);
          } catch (c) {
            o(c), a.unsubscribe();
          }
        },
        error: o,
        complete: i
      });
      n.subscribe(a);
    });
  }, e.prototype._subscribe = function(r) {
    var t;
    return (t = this.source) === null || t === void 0 ? void 0 : t.subscribe(r);
  }, e.prototype[rd] = function() {
    return this;
  }, e.prototype.pipe = function() {
    for (var r = [], t = 0; t < arguments.length; t++)
      r[t] = arguments[t];
    return Cm(r)(this);
  }, e.prototype.toPromise = function(r) {
    var t = this;
    return r = Xv(r), new r(function(n, i) {
      var o;
      t.subscribe(function(a) {
        return o = a;
      }, function(a) {
        return i(a);
      }, function() {
        return n(o);
      });
    });
  }, e.create = function(r) {
    return new e(r);
  }, e;
}();
function Xv(e) {
  var r;
  return (r = e ?? pc.Promise) !== null && r !== void 0 ? r : Promise;
}
function NL(e) {
  return e && de(e.next) && de(e.error) && de(e.complete);
}
function ML(e) {
  return e && e instanceof td || NL(e) && Im(e);
}
function $m(e) {
  return de(e[rd]);
}
function jm(e) {
  return Symbol.asyncIterator && de(e == null ? void 0 : e[Symbol.asyncIterator]);
}
function Nm(e) {
  return new TypeError("You provided " + (e !== null && typeof e == "object" ? "an invalid object" : "'" + e + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
}
function kL() {
  return typeof Symbol != "function" || !Symbol.iterator ? "@@iterator" : Symbol.iterator;
}
var Mm = kL();
function km(e) {
  return de(e == null ? void 0 : e[Mm]);
}
function Dm(e) {
  return SL(this, arguments, function() {
    var t, n, i, o;
    return Em(this, function(a) {
      switch (a.label) {
        case 0:
          t = e.getReader(), a.label = 1;
        case 1:
          a.trys.push([1, , 9, 10]), a.label = 2;
        case 2:
          return [4, Pn(t.read())];
        case 3:
          return n = a.sent(), i = n.value, o = n.done, o ? [4, Pn(void 0)] : [3, 5];
        case 4:
          return [2, a.sent()];
        case 5:
          return [4, Pn(i)];
        case 6:
          return [4, a.sent()];
        case 7:
          return a.sent(), [3, 2];
        case 8:
          return [3, 10];
        case 9:
          return t.releaseLock(), [7];
        case 10:
          return [2];
      }
    });
  });
}
function Um(e) {
  return de(e == null ? void 0 : e.getReader);
}
function ae(e) {
  if (e instanceof Be)
    return e;
  if (e != null) {
    if ($m(e))
      return DL(e);
    if (Sm(e))
      return UL(e);
    if (Tm(e))
      return LL(e);
    if (jm(e))
      return Lm(e);
    if (km(e))
      return FL(e);
    if (Um(e))
      return xL(e);
  }
  throw Nm(e);
}
function DL(e) {
  return new Be(function(r) {
    var t = e[rd]();
    if (de(t.subscribe))
      return t.subscribe(r);
    throw new TypeError("Provided object does not correctly implement Symbol.observable");
  });
}
function UL(e) {
  return new Be(function(r) {
    for (var t = 0; t < e.length && !r.closed; t++)
      r.next(e[t]);
    r.complete();
  });
}
function LL(e) {
  return new Be(function(r) {
    e.then(function(t) {
      r.closed || (r.next(t), r.complete());
    }, function(t) {
      return r.error(t);
    }).then(null, Am);
  });
}
function FL(e) {
  return new Be(function(r) {
    var t, n;
    try {
      for (var i = ct(e), o = i.next(); !o.done; o = i.next()) {
        var a = o.value;
        if (r.next(a), r.closed)
          return;
      }
    } catch (u) {
      t = { error: u };
    } finally {
      try {
        o && !o.done && (n = i.return) && n.call(i);
      } finally {
        if (t)
          throw t.error;
      }
    }
    r.complete();
  });
}
function Lm(e) {
  return new Be(function(r) {
    BL(e, r).catch(function(t) {
      return r.error(t);
    });
  });
}
function xL(e) {
  return Lm(Dm(e));
}
function BL(e, r) {
  var t, n, i, o;
  return EL(this, void 0, void 0, function() {
    var a, u;
    return Em(this, function(c) {
      switch (c.label) {
        case 0:
          c.trys.push([0, 5, 6, 11]), t = TL(e), c.label = 1;
        case 1:
          return [4, t.next()];
        case 2:
          if (n = c.sent(), !!n.done)
            return [3, 4];
          if (a = n.value, r.next(a), r.closed)
            return [2];
          c.label = 3;
        case 3:
          return [3, 1];
        case 4:
          return [3, 11];
        case 5:
          return u = c.sent(), i = { error: u }, [3, 11];
        case 6:
          return c.trys.push([6, , 9, 10]), n && !n.done && (o = t.return) ? [4, o.call(t)] : [3, 8];
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
          return r.complete(), [2];
      }
    });
  });
}
function B(e, r, t, n, i) {
  return new nd(e, r, t, n, i);
}
var nd = function(e) {
  bt(r, e);
  function r(t, n, i, o, a, u) {
    var c = e.call(this, t) || this;
    return c.onFinalize = a, c.shouldUnsubscribe = u, c._next = n ? function(s) {
      try {
        n(s);
      } catch (l) {
        t.error(l);
      }
    } : e.prototype._next, c._error = o ? function(s) {
      try {
        o(s);
      } catch (l) {
        t.error(l);
      } finally {
        this.unsubscribe();
      }
    } : e.prototype._error, c._complete = i ? function() {
      try {
        i();
      } catch (s) {
        t.error(s);
      } finally {
        this.unsubscribe();
      }
    } : e.prototype._complete, c;
  }
  return r.prototype.unsubscribe = function() {
    var t;
    if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
      var n = this.closed;
      e.prototype.unsubscribe.call(this), !n && ((t = this.onFinalize) === null || t === void 0 || t.call(this));
    }
  }, r;
}(td);
function Fm(e) {
  return H(function(r, t) {
    var n = !1, i = null, o = null, a = !1, u = function() {
      if (o == null || o.unsubscribe(), o = null, n) {
        n = !1;
        var s = i;
        i = null, t.next(s);
      }
      a && t.complete();
    }, c = function() {
      o = null, a && t.complete();
    };
    r.subscribe(B(t, function(s) {
      n = !0, i = s, o || ae(e(s)).subscribe(o = B(t, u, c));
    }, function() {
      a = !0, (!n || !o || o.closed) && t.complete();
    }));
  });
}
var WL = function(e) {
  bt(r, e);
  function r(t, n) {
    return e.call(this) || this;
  }
  return r.prototype.schedule = function(t, n) {
    return this;
  }, r;
}(At), Wa = {
  setInterval: function(e, r) {
    for (var t = [], n = 2; n < arguments.length; n++)
      t[n - 2] = arguments[n];
    var i = Wa.delegate;
    return i != null && i.setInterval ? i.setInterval.apply(i, je([e, r], $e(t))) : setInterval.apply(void 0, je([e, r], $e(t)));
  },
  clearInterval: function(e) {
    var r = Wa.delegate;
    return ((r == null ? void 0 : r.clearInterval) || clearInterval)(e);
  },
  delegate: void 0
}, VL = function(e) {
  bt(r, e);
  function r(t, n) {
    var i = e.call(this, t, n) || this;
    return i.scheduler = t, i.work = n, i.pending = !1, i;
  }
  return r.prototype.schedule = function(t, n) {
    var i;
    if (n === void 0 && (n = 0), this.closed)
      return this;
    this.state = t;
    var o = this.id, a = this.scheduler;
    return o != null && (this.id = this.recycleAsyncId(a, o, n)), this.pending = !0, this.delay = n, this.id = (i = this.id) !== null && i !== void 0 ? i : this.requestAsyncId(a, this.id, n), this;
  }, r.prototype.requestAsyncId = function(t, n, i) {
    return i === void 0 && (i = 0), Wa.setInterval(t.flush.bind(t, this), i);
  }, r.prototype.recycleAsyncId = function(t, n, i) {
    if (i === void 0 && (i = 0), i != null && this.delay === i && this.pending === !1)
      return n;
    n != null && Wa.clearInterval(n);
  }, r.prototype.execute = function(t, n) {
    if (this.closed)
      return new Error("executing a cancelled action");
    this.pending = !1;
    var i = this._execute(t, n);
    if (i)
      return i;
    this.pending === !1 && this.id != null && (this.id = this.recycleAsyncId(this.scheduler, this.id, null));
  }, r.prototype._execute = function(t, n) {
    var i = !1, o;
    try {
      this.work(t);
    } catch (a) {
      i = !0, o = a || new Error("Scheduled action threw falsy error");
    }
    if (i)
      return this.unsubscribe(), o;
  }, r.prototype.unsubscribe = function() {
    if (!this.closed) {
      var t = this, n = t.id, i = t.scheduler, o = i.actions;
      this.work = this.state = this.scheduler = null, this.pending = !1, nr(o, this), n != null && (this.id = this.recycleAsyncId(i, n, null)), this.delay = null, e.prototype.unsubscribe.call(this);
    }
  }, r;
}(WL), _c = {
  now: function() {
    return (_c.delegate || Date).now();
  },
  delegate: void 0
}, Jv = function() {
  function e(r, t) {
    t === void 0 && (t = e.now), this.schedulerActionCtor = r, this.now = t;
  }
  return e.prototype.schedule = function(r, t, n) {
    return t === void 0 && (t = 0), new this.schedulerActionCtor(this, r).schedule(n, t);
  }, e.now = _c.now, e;
}(), qL = function(e) {
  bt(r, e);
  function r(t, n) {
    n === void 0 && (n = Jv.now);
    var i = e.call(this, t, n) || this;
    return i.actions = [], i._active = !1, i;
  }
  return r.prototype.flush = function(t) {
    var n = this.actions;
    if (this._active) {
      n.push(t);
      return;
    }
    var i;
    this._active = !0;
    do
      if (i = t.execute(t.state, t.delay))
        break;
    while (t = n.shift());
    if (this._active = !1, i) {
      for (; t = n.shift(); )
        t.unsubscribe();
      throw i;
    }
  }, r;
}(Jv), Nt = new qL(VL), xm = Nt;
function Bm(e) {
  return e && de(e.schedule);
}
function id(e) {
  return e instanceof Date && !isNaN(e);
}
function ni(e, r, t) {
  e === void 0 && (e = 0), t === void 0 && (t = xm);
  var n = -1;
  return r != null && (Bm(r) ? t = r : n = r), new Be(function(i) {
    var o = id(e) ? +e - t.now() : e;
    o < 0 && (o = 0);
    var a = 0;
    return t.schedule(function() {
      i.closed || (i.next(a++), 0 <= n ? this.schedule(void 0, n) : i.complete());
    }, o);
  });
}
function HL(e, r) {
  return r === void 0 && (r = Nt), Fm(function() {
    return ni(e, r);
  });
}
function zL(e) {
  return H(function(r, t) {
    var n = [];
    return r.subscribe(B(t, function(i) {
      return n.push(i);
    }, function() {
      t.next(n), t.complete();
    })), ae(e).subscribe(B(t, function() {
      var i = n;
      n = [], t.next(i);
    }, Ze)), function() {
      n = null;
    };
  });
}
function YL(e, r) {
  return r === void 0 && (r = null), r = r ?? e, H(function(t, n) {
    var i = [], o = 0;
    t.subscribe(B(n, function(a) {
      var u, c, s, l, f = null;
      o++ % r === 0 && i.push([]);
      try {
        for (var y = ct(i), b = y.next(); !b.done; b = y.next()) {
          var O = b.value;
          O.push(a), e <= O.length && (f = f ?? [], f.push(O));
        }
      } catch (R) {
        u = { error: R };
      } finally {
        try {
          b && !b.done && (c = y.return) && c.call(y);
        } finally {
          if (u)
            throw u.error;
        }
      }
      if (f)
        try {
          for (var S = ct(f), P = S.next(); !P.done; P = S.next()) {
            var O = P.value;
            nr(i, O), n.next(O);
          }
        } catch (R) {
          s = { error: R };
        } finally {
          try {
            P && !P.done && (l = S.return) && l.call(S);
          } finally {
            if (s)
              throw s.error;
          }
        }
    }, function() {
      var a, u;
      try {
        for (var c = ct(i), s = c.next(); !s.done; s = c.next()) {
          var l = s.value;
          n.next(l);
        }
      } catch (f) {
        a = { error: f };
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
function od(e) {
  return e[e.length - 1];
}
function yc(e) {
  return de(od(e)) ? e.pop() : void 0;
}
function Ir(e) {
  return Bm(od(e)) ? e.pop() : void 0;
}
function GL(e, r) {
  return typeof od(e) == "number" ? e.pop() : r;
}
function lt(e, r, t, n, i) {
  n === void 0 && (n = 0), i === void 0 && (i = !1);
  var o = r.schedule(function() {
    t(), i ? e.add(this.schedule(null, n)) : this.unsubscribe();
  }, n);
  if (e.add(o), !i)
    return o;
}
function KL(e) {
  for (var r, t, n = [], i = 1; i < arguments.length; i++)
    n[i - 1] = arguments[i];
  var o = (r = Ir(n)) !== null && r !== void 0 ? r : Nt, a = (t = n[0]) !== null && t !== void 0 ? t : null, u = n[1] || 1 / 0;
  return H(function(c, s) {
    var l = [], f = !1, y = function(S) {
      var P = S.buffer, R = S.subs;
      R.unsubscribe(), nr(l, S), s.next(P), f && b();
    }, b = function() {
      if (l) {
        var S = new At();
        s.add(S);
        var P = [], R = {
          buffer: P,
          subs: S
        };
        l.push(R), lt(S, o, function() {
          return y(R);
        }, e);
      }
    };
    a !== null && a >= 0 ? lt(s, o, b, a, !0) : f = !0, b();
    var O = B(s, function(S) {
      var P, R, $ = l.slice();
      try {
        for (var j = ct($), k = j.next(); !k.done; k = j.next()) {
          var L = k.value, Y = L.buffer;
          Y.push(S), u <= Y.length && y(L);
        }
      } catch (ee) {
        P = { error: ee };
      } finally {
        try {
          k && !k.done && (R = j.return) && R.call(j);
        } finally {
          if (P)
            throw P.error;
        }
      }
    }, function() {
      for (; l != null && l.length; )
        s.next(l.shift().buffer);
      O == null || O.unsubscribe(), s.complete(), s.unsubscribe();
    }, void 0, function() {
      return l = null;
    });
    c.subscribe(O);
  });
}
function ZL(e, r) {
  return H(function(t, n) {
    var i = [];
    ae(e).subscribe(B(n, function(o) {
      var a = [];
      i.push(a);
      var u = new At(), c = function() {
        nr(i, a), n.next(a), u.unsubscribe();
      };
      u.add(ae(r(o)).subscribe(B(n, c, Ze)));
    }, Ze)), t.subscribe(B(n, function(o) {
      var a, u;
      try {
        for (var c = ct(i), s = c.next(); !s.done; s = c.next()) {
          var l = s.value;
          l.push(o);
        }
      } catch (f) {
        a = { error: f };
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
function QL(e) {
  return H(function(r, t) {
    var n = null, i = null, o = function() {
      i == null || i.unsubscribe();
      var a = n;
      n = [], a && t.next(a), ae(e()).subscribe(i = B(t, o, Ze));
    };
    o(), r.subscribe(B(t, function(a) {
      return n == null ? void 0 : n.push(a);
    }, function() {
      n && t.next(n), t.complete();
    }, void 0, function() {
      return n = i = null;
    }));
  });
}
function Wm(e) {
  return H(function(r, t) {
    var n = null, i = !1, o;
    n = r.subscribe(B(t, void 0, void 0, function(a) {
      o = ae(e(a, Wm(e)(r))), n ? (n.unsubscribe(), n = null, o.subscribe(t)) : i = !0;
    })), i && (n.unsubscribe(), n = null, o.subscribe(t));
  });
}
var XL = Array.isArray, JL = Object.getPrototypeOf, eF = Object.prototype, tF = Object.keys;
function rF(e) {
  if (e.length === 1) {
    var r = e[0];
    if (XL(r))
      return { args: r, keys: null };
    if (nF(r)) {
      var t = tF(r);
      return {
        args: t.map(function(n) {
          return r[n];
        }),
        keys: t
      };
    }
  }
  return { args: e, keys: null };
}
function nF(e) {
  return e && typeof e == "object" && JL(e) === eF;
}
function ad(e, r) {
  return r === void 0 && (r = 0), H(function(t, n) {
    t.subscribe(B(n, function(i) {
      return lt(n, e, function() {
        return n.next(i);
      }, r);
    }, function() {
      return lt(n, e, function() {
        return n.complete();
      }, r);
    }, function(i) {
      return lt(n, e, function() {
        return n.error(i);
      }, r);
    }));
  });
}
function ud(e, r) {
  return r === void 0 && (r = 0), H(function(t, n) {
    n.add(e.schedule(function() {
      return t.subscribe(n);
    }, r));
  });
}
function iF(e, r) {
  return ae(e).pipe(ud(r), ad(r));
}
function oF(e, r) {
  return ae(e).pipe(ud(r), ad(r));
}
function aF(e, r) {
  return new Be(function(t) {
    var n = 0;
    return r.schedule(function() {
      n === e.length ? t.complete() : (t.next(e[n++]), t.closed || this.schedule());
    });
  });
}
function uF(e, r) {
  return new Be(function(t) {
    var n;
    return lt(t, r, function() {
      n = e[Mm](), lt(t, r, function() {
        var i, o, a;
        try {
          i = n.next(), o = i.value, a = i.done;
        } catch (u) {
          t.error(u);
          return;
        }
        a ? t.complete() : t.next(o);
      }, 0, !0);
    }), function() {
      return de(n == null ? void 0 : n.return) && n.return();
    };
  });
}
function Vm(e, r) {
  if (!e)
    throw new Error("Iterable cannot be null");
  return new Be(function(t) {
    lt(t, r, function() {
      var n = e[Symbol.asyncIterator]();
      lt(t, r, function() {
        n.next().then(function(i) {
          i.done ? t.complete() : t.next(i.value);
        });
      }, 0, !0);
    });
  });
}
function sF(e, r) {
  return Vm(Dm(e), r);
}
function cF(e, r) {
  if (e != null) {
    if ($m(e))
      return iF(e, r);
    if (Sm(e))
      return aF(e, r);
    if (Tm(e))
      return oF(e, r);
    if (jm(e))
      return Vm(e, r);
    if (km(e))
      return uF(e, r);
    if (Um(e))
      return sF(e, r);
  }
  throw Nm(e);
}
function ii(e, r) {
  return r ? cF(e, r) : ae(e);
}
function hn(e, r) {
  return H(function(t, n) {
    var i = 0;
    t.subscribe(B(n, function(o) {
      n.next(e.call(r, o, i++));
    }));
  });
}
var lF = Array.isArray;
function fF(e, r) {
  return lF(r) ? e.apply(void 0, je([], $e(r))) : e(r);
}
function sd(e) {
  return hn(function(r) {
    return fF(e, r);
  });
}
function dF(e, r) {
  return e.reduce(function(t, n, i) {
    return t[n] = r[i], t;
  }, {});
}
function hF() {
  for (var e = [], r = 0; r < arguments.length; r++)
    e[r] = arguments[r];
  var t = Ir(e), n = yc(e), i = rF(e), o = i.args, a = i.keys;
  if (o.length === 0)
    return ii([], t);
  var u = new Be(qm(o, t, a ? function(c) {
    return dF(a, c);
  } : ot));
  return n ? u.pipe(sd(n)) : u;
}
function qm(e, r, t) {
  return t === void 0 && (t = ot), function(n) {
    ep(r, function() {
      for (var i = e.length, o = new Array(i), a = i, u = i, c = function(l) {
        ep(r, function() {
          var f = ii(e[l], r), y = !1;
          f.subscribe(B(n, function(b) {
            o[l] = b, y || (y = !0, u--), u || n.next(t(o.slice()));
          }, function() {
            --a || n.complete();
          }));
        }, n);
      }, s = 0; s < i; s++)
        c(s);
    }, n);
  };
}
function ep(e, r, t) {
  e ? lt(t, e, r) : r();
}
function cd(e, r, t, n, i, o, a, u) {
  var c = [], s = 0, l = 0, f = !1, y = function() {
    f && !c.length && !s && r.complete();
  }, b = function(S) {
    return s < n ? O(S) : c.push(S);
  }, O = function(S) {
    o && r.next(S), s++;
    var P = !1;
    ae(t(S, l++)).subscribe(B(r, function(R) {
      i == null || i(R), o ? b(R) : r.next(R);
    }, function() {
      P = !0;
    }, void 0, function() {
      if (P)
        try {
          s--;
          for (var R = function() {
            var $ = c.shift();
            a ? lt(r, a, function() {
              return O($);
            }) : O($);
          }; c.length && s < n; )
            R();
          y();
        } catch ($) {
          r.error($);
        }
    }));
  };
  return e.subscribe(B(r, b, function() {
    f = !0, y();
  })), function() {
    u == null || u();
  };
}
function xt(e, r, t) {
  return t === void 0 && (t = 1 / 0), de(r) ? xt(function(n, i) {
    return hn(function(o, a) {
      return r(n, o, i, a);
    })(ae(e(n, i)));
  }, t) : (typeof r == "number" && (t = r), H(function(n, i) {
    return cd(n, i, e, t);
  }));
}
function Hm(e, r, t, n, i) {
  return function(o, a) {
    var u = t, c = r, s = 0;
    o.subscribe(B(a, function(l) {
      var f = s++;
      c = u ? e(c, l, f) : (u = !0, l), n && a.next(c);
    }, i && function() {
      u && a.next(c), a.complete();
    }));
  };
}
function xo(e, r) {
  return H(Hm(e, r, arguments.length >= 2, !1, !0));
}
var vF = function(e, r) {
  return e.push(r), e;
};
function zm() {
  return H(function(e, r) {
    xo(vF, [])(e).subscribe(r);
  });
}
function Ym(e, r) {
  return Rm(zm(), xt(function(t) {
    return e(t);
  }), r ? sd(r) : ot);
}
function Gm(e) {
  return Ym(hF, e);
}
var pF = Gm, _F = Array.isArray;
function oi(e) {
  return e.length === 1 && _F(e[0]) ? e[0] : e;
}
function ld() {
  for (var e = [], r = 0; r < arguments.length; r++)
    e[r] = arguments[r];
  var t = yc(e);
  return t ? Rm(ld.apply(void 0, je([], $e(e))), sd(t)) : H(function(n, i) {
    qm(je([n], $e(oi(e))))(i);
  });
}
function yF() {
  for (var e = [], r = 0; r < arguments.length; r++)
    e[r] = arguments[r];
  return ld.apply(void 0, je([], $e(e)));
}
function fd(e) {
  return e === void 0 && (e = 1 / 0), xt(ot, e);
}
function dd() {
  return fd(1);
}
function Km() {
  for (var e = [], r = 0; r < arguments.length; r++)
    e[r] = arguments[r];
  var t = Ir(e);
  return H(function(n, i) {
    dd()(ii(je([n], $e(e)), t)).subscribe(i);
  });
}
function pf(e, r) {
  return de(r) ? xt(e, r, 1) : xt(e, 1);
}
function mF(e, r) {
  return de(r) ? pf(function() {
    return e;
  }, r) : pf(function() {
    return e;
  });
}
function bF() {
  for (var e = [], r = 0; r < arguments.length; r++)
    e[r] = arguments[r];
  return Km.apply(void 0, je([], $e(e)));
}
var gF = dn(function(e) {
  return function() {
    e(this), this.name = "ObjectUnsubscribedError", this.message = "object unsubscribed";
  };
}), Je = function(e) {
  bt(r, e);
  function r() {
    var t = e.call(this) || this;
    return t.closed = !1, t.currentObservers = null, t.observers = [], t.isStopped = !1, t.hasError = !1, t.thrownError = null, t;
  }
  return r.prototype.lift = function(t) {
    var n = new tp(this, this);
    return n.operator = t, n;
  }, r.prototype._throwIfClosed = function() {
    if (this.closed)
      throw new gF();
  }, r.prototype.next = function(t) {
    var n = this;
    Aa(function() {
      var i, o;
      if (n._throwIfClosed(), !n.isStopped) {
        n.currentObservers || (n.currentObservers = Array.from(n.observers));
        try {
          for (var a = ct(n.currentObservers), u = a.next(); !u.done; u = a.next()) {
            var c = u.value;
            c.next(t);
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
  }, r.prototype.error = function(t) {
    var n = this;
    Aa(function() {
      if (n._throwIfClosed(), !n.isStopped) {
        n.hasError = n.isStopped = !0, n.thrownError = t;
        for (var i = n.observers; i.length; )
          i.shift().error(t);
      }
    });
  }, r.prototype.complete = function() {
    var t = this;
    Aa(function() {
      if (t._throwIfClosed(), !t.isStopped) {
        t.isStopped = !0;
        for (var n = t.observers; n.length; )
          n.shift().complete();
      }
    });
  }, r.prototype.unsubscribe = function() {
    this.isStopped = this.closed = !0, this.observers = this.currentObservers = null;
  }, Object.defineProperty(r.prototype, "observed", {
    get: function() {
      var t;
      return ((t = this.observers) === null || t === void 0 ? void 0 : t.length) > 0;
    },
    enumerable: !1,
    configurable: !0
  }), r.prototype._trySubscribe = function(t) {
    return this._throwIfClosed(), e.prototype._trySubscribe.call(this, t);
  }, r.prototype._subscribe = function(t) {
    return this._throwIfClosed(), this._checkFinalizedStatuses(t), this._innerSubscribe(t);
  }, r.prototype._innerSubscribe = function(t) {
    var n = this, i = this, o = i.hasError, a = i.isStopped, u = i.observers;
    return o || a ? Pm : (this.currentObservers = null, u.push(t), new At(function() {
      n.currentObservers = null, nr(u, t);
    }));
  }, r.prototype._checkFinalizedStatuses = function(t) {
    var n = this, i = n.hasError, o = n.thrownError, a = n.isStopped;
    i ? t.error(o) : a && t.complete();
  }, r.prototype.asObservable = function() {
    var t = new Be();
    return t.source = this, t;
  }, r.create = function(t, n) {
    return new tp(t, n);
  }, r;
}(Be), tp = function(e) {
  bt(r, e);
  function r(t, n) {
    var i = e.call(this) || this;
    return i.destination = t, i.source = n, i;
  }
  return r.prototype.next = function(t) {
    var n, i;
    (i = (n = this.destination) === null || n === void 0 ? void 0 : n.next) === null || i === void 0 || i.call(n, t);
  }, r.prototype.error = function(t) {
    var n, i;
    (i = (n = this.destination) === null || n === void 0 ? void 0 : n.error) === null || i === void 0 || i.call(n, t);
  }, r.prototype.complete = function() {
    var t, n;
    (n = (t = this.destination) === null || t === void 0 ? void 0 : t.complete) === null || n === void 0 || n.call(t);
  }, r.prototype._subscribe = function(t) {
    var n, i;
    return (i = (n = this.source) === null || n === void 0 ? void 0 : n.subscribe(t)) !== null && i !== void 0 ? i : Pm;
  }, r;
}(Je);
function OF(e) {
  return new Be(function(r) {
    return e.subscribe(r);
  });
}
var wF = {
  connector: function() {
    return new Je();
  }
};
function hd(e, r) {
  r === void 0 && (r = wF);
  var t = r.connector;
  return H(function(n, i) {
    var o = t();
    ae(e(OF(o))).subscribe(i), i.add(n.subscribe(o));
  });
}
function EF(e) {
  return xo(function(r, t, n) {
    return !e || e(t, n) ? r + 1 : r;
  }, 0);
}
function SF(e) {
  return H(function(r, t) {
    var n = !1, i = null, o = null, a = function() {
      if (o == null || o.unsubscribe(), o = null, n) {
        n = !1;
        var u = i;
        i = null, t.next(u);
      }
    };
    r.subscribe(B(t, function(u) {
      o == null || o.unsubscribe(), n = !0, i = u, o = B(t, a, Ze), ae(e(u)).subscribe(o);
    }, function() {
      a(), t.complete();
    }, void 0, function() {
      i = o = null;
    }));
  });
}
function TF(e, r) {
  return r === void 0 && (r = Nt), H(function(t, n) {
    var i = null, o = null, a = null, u = function() {
      if (i) {
        i.unsubscribe(), i = null;
        var s = o;
        o = null, n.next(s);
      }
    };
    function c() {
      var s = a + e, l = r.now();
      if (l < s) {
        i = this.schedule(void 0, s - l), n.add(i);
        return;
      }
      u();
    }
    t.subscribe(B(n, function(s) {
      o = s, a = r.now(), i || (i = r.schedule(c, e), n.add(i));
    }, function() {
      u(), n.complete();
    }, void 0, function() {
      o = i = null;
    }));
  });
}
function mc(e) {
  return H(function(r, t) {
    var n = !1;
    r.subscribe(B(t, function(i) {
      n = !0, t.next(i);
    }, function() {
      n || t.next(e), t.complete();
    }));
  });
}
function Va() {
  for (var e = [], r = 0; r < arguments.length; r++)
    e[r] = arguments[r];
  return dd()(ii(e, Ir(e)));
}
var Bo = new Be(function(e) {
  return e.complete();
});
function Wi(e) {
  return e <= 0 ? function() {
    return Bo;
  } : H(function(r, t) {
    var n = 0;
    r.subscribe(B(t, function(i) {
      ++n <= e && (t.next(i), e <= n && t.complete());
    }));
  });
}
function Zm() {
  return H(function(e, r) {
    e.subscribe(B(r, Ze));
  });
}
function Qm(e) {
  return hn(function() {
    return e;
  });
}
function vd(e, r) {
  return r ? function(t) {
    return Va(r.pipe(Wi(1), Zm()), t.pipe(vd(e)));
  } : xt(function(t, n) {
    return ae(e(t, n)).pipe(Wi(1), Qm(t));
  });
}
function PF(e, r) {
  r === void 0 && (r = Nt);
  var t = ni(e, r);
  return vd(function() {
    return t;
  });
}
function Xm() {
  for (var e = [], r = 0; r < arguments.length; r++)
    e[r] = arguments[r];
  var t = Ir(e);
  return ii(e, t);
}
function IF(e, r) {
  var t = de(e) ? e : function() {
    return e;
  }, n = function(i) {
    return i.error(t());
  };
  return new Be(r ? function(i) {
    return r.schedule(n, 0, i);
  } : n);
}
var rp;
(function(e) {
  e.NEXT = "N", e.ERROR = "E", e.COMPLETE = "C";
})(rp || (rp = {}));
var Rl = function() {
  function e(r, t, n) {
    this.kind = r, this.value = t, this.error = n, this.hasValue = r === "N";
  }
  return e.prototype.observe = function(r) {
    return Jm(this, r);
  }, e.prototype.do = function(r, t, n) {
    var i = this, o = i.kind, a = i.value, u = i.error;
    return o === "N" ? r == null ? void 0 : r(a) : o === "E" ? t == null ? void 0 : t(u) : n == null ? void 0 : n();
  }, e.prototype.accept = function(r, t, n) {
    var i;
    return de((i = r) === null || i === void 0 ? void 0 : i.next) ? this.observe(r) : this.do(r, t, n);
  }, e.prototype.toObservable = function() {
    var r = this, t = r.kind, n = r.value, i = r.error, o = t === "N" ? Xm(n) : t === "E" ? IF(function() {
      return i;
    }) : t === "C" ? Bo : 0;
    if (!o)
      throw new TypeError("Unexpected notification kind " + t);
    return o;
  }, e.createNext = function(r) {
    return new e("N", r);
  }, e.createError = function(r) {
    return new e("E", void 0, r);
  }, e.createComplete = function() {
    return e.completeNotification;
  }, e.completeNotification = new e("C"), e;
}();
function Jm(e, r) {
  var t, n, i, o = e, a = o.kind, u = o.value, c = o.error;
  if (typeof a != "string")
    throw new TypeError('Invalid notification, missing "kind"');
  a === "N" ? (t = r.next) === null || t === void 0 || t.call(r, u) : a === "E" ? (n = r.error) === null || n === void 0 || n.call(r, c) : (i = r.complete) === null || i === void 0 || i.call(r);
}
function AF() {
  return H(function(e, r) {
    e.subscribe(B(r, function(t) {
      return Jm(t, r);
    }));
  });
}
function RF(e, r) {
  return H(function(t, n) {
    var i = /* @__PURE__ */ new Set();
    t.subscribe(B(n, function(o) {
      var a = e ? e(o) : o;
      i.has(a) || (i.add(a), n.next(o));
    })), r && ae(r).subscribe(B(n, function() {
      return i.clear();
    }, Ze));
  });
}
function eb(e, r) {
  return r === void 0 && (r = ot), e = e ?? CF, H(function(t, n) {
    var i, o = !0;
    t.subscribe(B(n, function(a) {
      var u = r(a);
      (o || !e(i, u)) && (o = !1, i = u, n.next(a));
    }));
  });
}
function CF(e, r) {
  return e === r;
}
function $F(e, r) {
  return eb(function(t, n) {
    return r ? r(t[e], n[e]) : t[e] === n[e];
  });
}
var np = dn(function(e) {
  return function() {
    e(this), this.name = "ArgumentOutOfRangeError", this.message = "argument out of range";
  };
});
function Kr(e, r) {
  return H(function(t, n) {
    var i = 0;
    t.subscribe(B(n, function(o) {
      return e.call(r, o, i++) && n.next(o);
    }));
  });
}
var bc = dn(function(e) {
  return function() {
    e(this), this.name = "EmptyError", this.message = "no elements in sequence";
  };
});
function gc(e) {
  return e === void 0 && (e = jF), H(function(r, t) {
    var n = !1;
    r.subscribe(B(t, function(i) {
      n = !0, t.next(i);
    }, function() {
      return n ? t.complete() : t.error(e());
    }));
  });
}
function jF() {
  return new bc();
}
function NF(e, r) {
  if (e < 0)
    throw new np();
  var t = arguments.length >= 2;
  return function(n) {
    return n.pipe(Kr(function(i, o) {
      return o === e;
    }), Wi(1), t ? mc(r) : gc(function() {
      return new np();
    }));
  };
}
function MF() {
  for (var e = [], r = 0; r < arguments.length; r++)
    e[r] = arguments[r];
  return function(t) {
    return Va(t, Xm.apply(void 0, je([], $e(e))));
  };
}
function kF(e, r) {
  return H(function(t, n) {
    var i = 0;
    t.subscribe(B(n, function(o) {
      e.call(r, o, i++, t) || (n.next(!1), n.complete());
    }, function() {
      n.next(!0), n.complete();
    }));
  });
}
function pd(e, r) {
  return r ? function(t) {
    return t.pipe(pd(function(n, i) {
      return ae(e(n, i)).pipe(hn(function(o, a) {
        return r(n, o, i, a);
      }));
    }));
  } : H(function(t, n) {
    var i = 0, o = null, a = !1;
    t.subscribe(B(n, function(u) {
      o || (o = B(n, void 0, function() {
        o = null, a && n.complete();
      }), ae(e(u, i++)).subscribe(o));
    }, function() {
      a = !0, !o && n.complete();
    }));
  });
}
function tb() {
  return pd(ot);
}
var DF = tb;
function UF(e, r, t) {
  return r === void 0 && (r = 1 / 0), r = (r || 0) < 1 ? 1 / 0 : r, H(function(n, i) {
    return cd(n, i, e, r, void 0, !0, t);
  });
}
function LF(e) {
  return H(function(r, t) {
    try {
      r.subscribe(t);
    } finally {
      t.add(e);
    }
  });
}
function FF(e, r) {
  return H(rb(e, r, "value"));
}
function rb(e, r, t) {
  var n = t === "index";
  return function(i, o) {
    var a = 0;
    i.subscribe(B(o, function(u) {
      var c = a++;
      e.call(r, u, c, i) && (o.next(n ? c : u), o.complete());
    }, function() {
      o.next(n ? -1 : void 0), o.complete();
    }));
  };
}
function xF(e, r) {
  return H(rb(e, r, "index"));
}
function BF(e, r) {
  var t = arguments.length >= 2;
  return function(n) {
    return n.pipe(e ? Kr(function(i, o) {
      return e(i, o, n);
    }) : ot, Wi(1), t ? mc(r) : gc(function() {
      return new bc();
    }));
  };
}
function WF(e, r, t, n) {
  return H(function(i, o) {
    var a;
    !r || typeof r == "function" ? a = r : (t = r.duration, a = r.element, n = r.connector);
    var u = /* @__PURE__ */ new Map(), c = function(O) {
      u.forEach(O), O(o);
    }, s = function(O) {
      return c(function(S) {
        return S.error(O);
      });
    }, l = 0, f = !1, y = new nd(o, function(O) {
      try {
        var S = e(O), P = u.get(S);
        if (!P) {
          u.set(S, P = n ? n() : new Je());
          var R = b(S, P);
          if (o.next(R), t) {
            var $ = B(P, function() {
              P.complete(), $ == null || $.unsubscribe();
            }, void 0, void 0, function() {
              return u.delete(S);
            });
            y.add(ae(t(R)).subscribe($));
          }
        }
        P.next(a ? a(O) : O);
      } catch (j) {
        s(j);
      }
    }, function() {
      return c(function(O) {
        return O.complete();
      });
    }, s, function() {
      return u.clear();
    }, function() {
      return f = !0, l === 0;
    });
    i.subscribe(y);
    function b(O, S) {
      var P = new Be(function(R) {
        l++;
        var $ = S.subscribe(R);
        return function() {
          $.unsubscribe(), --l === 0 && f && y.unsubscribe();
        };
      });
      return P.key = O, P;
    }
  });
}
function VF() {
  return H(function(e, r) {
    e.subscribe(B(r, function() {
      r.next(!1), r.complete();
    }, function() {
      r.next(!0), r.complete();
    }));
  });
}
function nb(e) {
  return e <= 0 ? function() {
    return Bo;
  } : H(function(r, t) {
    var n = [];
    r.subscribe(B(t, function(i) {
      n.push(i), e < n.length && n.shift();
    }, function() {
      var i, o;
      try {
        for (var a = ct(n), u = a.next(); !u.done; u = a.next()) {
          var c = u.value;
          t.next(c);
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
      t.complete();
    }, void 0, function() {
      n = null;
    }));
  });
}
function qF(e, r) {
  var t = arguments.length >= 2;
  return function(n) {
    return n.pipe(e ? Kr(function(i, o) {
      return e(i, o, n);
    }) : ot, nb(1), t ? mc(r) : gc(function() {
      return new bc();
    }));
  };
}
function HF() {
  return H(function(e, r) {
    e.subscribe(B(r, function(t) {
      r.next(Rl.createNext(t));
    }, function() {
      r.next(Rl.createComplete()), r.complete();
    }, function(t) {
      r.next(Rl.createError(t)), r.complete();
    }));
  });
}
function zF(e) {
  return xo(de(e) ? function(r, t) {
    return e(r, t) > 0 ? r : t;
  } : function(r, t) {
    return r > t ? r : t;
  });
}
function ib() {
  for (var e = [], r = 0; r < arguments.length; r++)
    e[r] = arguments[r];
  var t = Ir(e), n = GL(e, 1 / 0);
  return e = oi(e), H(function(i, o) {
    fd(n)(ii(je([i], $e(e)), t)).subscribe(o);
  });
}
var YF = xt;
function GF(e, r, t) {
  return t === void 0 && (t = 1 / 0), de(r) ? xt(function() {
    return e;
  }, r, t) : (typeof r == "number" && (t = r), xt(function() {
    return e;
  }, t));
}
function KF(e, r, t) {
  return t === void 0 && (t = 1 / 0), H(function(n, i) {
    var o = r;
    return cd(n, i, function(a, u) {
      return e(o, a, u);
    }, t, function(a) {
      o = a;
    }, !1, void 0, function() {
      return o = null;
    });
  });
}
function ZF() {
  for (var e = [], r = 0; r < arguments.length; r++)
    e[r] = arguments[r];
  return ib.apply(void 0, je([], $e(e)));
}
function QF(e) {
  return xo(de(e) ? function(r, t) {
    return e(r, t) < 0 ? r : t;
  } : function(r, t) {
    return r < t ? r : t;
  });
}
function ob() {
  return H(function(e, r) {
    var t = null;
    e._refCount++;
    var n = B(r, void 0, void 0, void 0, function() {
      if (!e || e._refCount <= 0 || 0 < --e._refCount) {
        t = null;
        return;
      }
      var i = e._connection, o = t;
      t = null, i && (!o || i === o) && i.unsubscribe(), r.unsubscribe();
    });
    e.subscribe(n), n.closed || (t = e.connect());
  });
}
var _d = function(e) {
  bt(r, e);
  function r(t, n) {
    var i = e.call(this) || this;
    return i.source = t, i.subjectFactory = n, i._subject = null, i._refCount = 0, i._connection = null, wm(t) && (i.lift = t.lift), i;
  }
  return r.prototype._subscribe = function(t) {
    return this.getSubject().subscribe(t);
  }, r.prototype.getSubject = function() {
    var t = this._subject;
    return (!t || t.isStopped) && (this._subject = this.subjectFactory()), this._subject;
  }, r.prototype._teardown = function() {
    this._refCount = 0;
    var t = this._connection;
    this._subject = this._connection = null, t == null || t.unsubscribe();
  }, r.prototype.connect = function() {
    var t = this, n = this._connection;
    if (!n) {
      n = this._connection = new At();
      var i = this.getSubject();
      n.add(this.source.subscribe(B(i, void 0, function() {
        t._teardown(), i.complete();
      }, function(o) {
        t._teardown(), i.error(o);
      }, function() {
        return t._teardown();
      }))), n.closed && (this._connection = null, n = At.EMPTY);
    }
    return n;
  }, r.prototype.refCount = function() {
    return ob()(this);
  }, r;
}(Be);
function yd(e, r) {
  var t = de(e) ? e : function() {
    return e;
  };
  return de(r) ? hd(r, {
    connector: t
  }) : function(n) {
    return new _d(n, t);
  };
}
function XF() {
  for (var e = [], r = 0; r < arguments.length; r++)
    e[r] = arguments[r];
  var t = oi(e);
  return new Be(function(n) {
    var i = 0, o = function() {
      if (i < t.length) {
        var a = void 0;
        try {
          a = ae(t[i++]);
        } catch {
          o();
          return;
        }
        var u = new nd(n, void 0, Ze, Ze);
        a.subscribe(u), u.add(o);
      } else
        n.complete();
    };
    o();
  });
}
function JF() {
  for (var e = [], r = 0; r < arguments.length; r++)
    e[r] = arguments[r];
  var t = oi(e);
  return function(n) {
    return XF.apply(void 0, je([n], $e(t)));
  };
}
var ex = JF;
function tx() {
  return H(function(e, r) {
    var t, n = !1;
    e.subscribe(B(r, function(i) {
      var o = t;
      t = i, n && r.next([o, i]), n = !0;
    }));
  });
}
function rx(e, r) {
  return function(t, n) {
    return !e.call(r, t, n);
  };
}
function nx(e, r) {
  return function(t) {
    return [Kr(e, r)(t), Kr(rx(e, r))(t)];
  };
}
function ix() {
  for (var e = [], r = 0; r < arguments.length; r++)
    e[r] = arguments[r];
  var t = e.length;
  if (t === 0)
    throw new Error("list of properties cannot be empty.");
  return hn(function(n) {
    for (var i = n, o = 0; o < t; o++) {
      var a = i == null ? void 0 : i[e[o]];
      if (typeof a < "u")
        i = a;
      else
        return;
    }
    return i;
  });
}
function ox(e) {
  return e ? function(r) {
    return hd(e)(r);
  } : function(r) {
    return yd(new Je())(r);
  };
}
var ax = function(e) {
  bt(r, e);
  function r(t) {
    var n = e.call(this) || this;
    return n._value = t, n;
  }
  return Object.defineProperty(r.prototype, "value", {
    get: function() {
      return this.getValue();
    },
    enumerable: !1,
    configurable: !0
  }), r.prototype._subscribe = function(t) {
    var n = e.prototype._subscribe.call(this, t);
    return !n.closed && t.next(this._value), n;
  }, r.prototype.getValue = function() {
    var t = this, n = t.hasError, i = t.thrownError, o = t._value;
    if (n)
      throw i;
    return this._throwIfClosed(), o;
  }, r.prototype.next = function(t) {
    e.prototype.next.call(this, this._value = t);
  }, r;
}(Je);
function ux(e) {
  return function(r) {
    var t = new ax(e);
    return new _d(r, function() {
      return t;
    });
  };
}
var sx = function(e) {
  bt(r, e);
  function r() {
    var t = e !== null && e.apply(this, arguments) || this;
    return t._value = null, t._hasValue = !1, t._isComplete = !1, t;
  }
  return r.prototype._checkFinalizedStatuses = function(t) {
    var n = this, i = n.hasError, o = n._hasValue, a = n._value, u = n.thrownError, c = n.isStopped, s = n._isComplete;
    i ? t.error(u) : (c || s) && (o && t.next(a), t.complete());
  }, r.prototype.next = function(t) {
    this.isStopped || (this._value = t, this._hasValue = !0);
  }, r.prototype.complete = function() {
    var t = this, n = t._hasValue, i = t._value, o = t._isComplete;
    o || (this._isComplete = !0, n && e.prototype.next.call(this, i), e.prototype.complete.call(this));
  }, r;
}(Je);
function cx() {
  return function(e) {
    var r = new sx();
    return new _d(e, function() {
      return r;
    });
  };
}
var ab = function(e) {
  bt(r, e);
  function r(t, n, i) {
    t === void 0 && (t = 1 / 0), n === void 0 && (n = 1 / 0), i === void 0 && (i = _c);
    var o = e.call(this) || this;
    return o._bufferSize = t, o._windowTime = n, o._timestampProvider = i, o._buffer = [], o._infiniteTimeWindow = !0, o._infiniteTimeWindow = n === 1 / 0, o._bufferSize = Math.max(1, t), o._windowTime = Math.max(1, n), o;
  }
  return r.prototype.next = function(t) {
    var n = this, i = n.isStopped, o = n._buffer, a = n._infiniteTimeWindow, u = n._timestampProvider, c = n._windowTime;
    i || (o.push(t), !a && o.push(u.now() + c)), this._trimBuffer(), e.prototype.next.call(this, t);
  }, r.prototype._subscribe = function(t) {
    this._throwIfClosed(), this._trimBuffer();
    for (var n = this._innerSubscribe(t), i = this, o = i._infiniteTimeWindow, a = i._buffer, u = a.slice(), c = 0; c < u.length && !t.closed; c += o ? 1 : 2)
      t.next(u[c]);
    return this._checkFinalizedStatuses(t), n;
  }, r.prototype._trimBuffer = function() {
    var t = this, n = t._bufferSize, i = t._timestampProvider, o = t._buffer, a = t._infiniteTimeWindow, u = (a ? 1 : 2) * n;
    if (n < 1 / 0 && u < o.length && o.splice(0, o.length - u), !a) {
      for (var c = i.now(), s = 0, l = 1; l < o.length && o[l] <= c; l += 2)
        s = l;
      s && o.splice(0, s + 1);
    }
  }, r;
}(Je);
function lx(e, r, t, n) {
  t && !de(t) && (n = t);
  var i = de(t) ? t : void 0;
  return function(o) {
    return yd(new ab(e, r, n), i)(o);
  };
}
function fx(e) {
  return function(r) {
    for (var t = [], n = function(o) {
      t.push(ae(e[o]).subscribe(B(r, function(a) {
        if (t) {
          for (var u = 0; u < t.length; u++)
            u !== o && t[u].unsubscribe();
          t = null;
        }
        r.next(a);
      })));
    }, i = 0; t && !r.closed && i < e.length; i++)
      n(i);
  };
}
function ub() {
  for (var e = [], r = 0; r < arguments.length; r++)
    e[r] = arguments[r];
  return e.length ? H(function(t, n) {
    fx(je([t], $e(e)))(n);
  }) : ot;
}
function dx() {
  for (var e = [], r = 0; r < arguments.length; r++)
    e[r] = arguments[r];
  return ub.apply(void 0, je([], $e(oi(e))));
}
function hx(e) {
  var r, t = 1 / 0, n;
  return e != null && (typeof e == "object" ? (r = e.count, t = r === void 0 ? 1 / 0 : r, n = e.delay) : t = e), t <= 0 ? function() {
    return Bo;
  } : H(function(i, o) {
    var a = 0, u, c = function() {
      if (u == null || u.unsubscribe(), u = null, n != null) {
        var l = typeof n == "number" ? ni(n) : ae(n(a)), f = B(o, function() {
          f.unsubscribe(), s();
        });
        l.subscribe(f);
      } else
        s();
    }, s = function() {
      var l = !1;
      u = i.subscribe(B(o, void 0, function() {
        ++a < t ? u ? c() : l = !0 : o.complete();
      })), l && c();
    };
    s();
  });
}
function vx(e) {
  return H(function(r, t) {
    var n, i = !1, o, a = !1, u = !1, c = function() {
      return u && a && (t.complete(), !0);
    }, s = function() {
      return o || (o = new Je(), ae(e(o)).subscribe(B(t, function() {
        n ? l() : i = !0;
      }, function() {
        a = !0, c();
      }))), o;
    }, l = function() {
      u = !1, n = r.subscribe(B(t, void 0, function() {
        u = !0, !c() && s().next();
      })), i && (n.unsubscribe(), n = null, i = !1, l());
    };
    l();
  });
}
function px(e) {
  e === void 0 && (e = 1 / 0);
  var r;
  e && typeof e == "object" ? r = e : r = {
    count: e
  };
  var t = r.count, n = t === void 0 ? 1 / 0 : t, i = r.delay, o = r.resetOnSuccess, a = o === void 0 ? !1 : o;
  return n <= 0 ? ot : H(function(u, c) {
    var s = 0, l, f = function() {
      var y = !1;
      l = u.subscribe(B(c, function(b) {
        a && (s = 0), c.next(b);
      }, void 0, function(b) {
        if (s++ < n) {
          var O = function() {
            l ? (l.unsubscribe(), l = null, f()) : y = !0;
          };
          if (i != null) {
            var S = typeof i == "number" ? ni(i) : ae(i(b, s)), P = B(c, function() {
              P.unsubscribe(), O();
            }, function() {
              c.complete();
            });
            S.subscribe(P);
          } else
            O();
        } else
          c.error(b);
      })), y && (l.unsubscribe(), l = null, f());
    };
    f();
  });
}
function _x(e) {
  return H(function(r, t) {
    var n, i = !1, o, a = function() {
      n = r.subscribe(B(t, void 0, void 0, function(u) {
        o || (o = new Je(), ae(e(o)).subscribe(B(t, function() {
          return n ? a() : i = !0;
        }))), o && o.next(u);
      })), i && (n.unsubscribe(), n = null, i = !1, a());
    };
    a();
  });
}
function sb(e) {
  return H(function(r, t) {
    var n = !1, i = null;
    r.subscribe(B(t, function(o) {
      n = !0, i = o;
    })), ae(e).subscribe(B(t, function() {
      if (n) {
        n = !1;
        var o = i;
        i = null, t.next(o);
      }
    }, Ze));
  });
}
function yx(e, r) {
  return e === void 0 && (e = 0), r === void 0 && (r = Nt), e < 0 && (e = 0), ni(e, e, r);
}
function mx(e, r) {
  return r === void 0 && (r = Nt), sb(yx(e, r));
}
function bx(e, r) {
  return H(Hm(e, r, arguments.length >= 2, !0));
}
function gx(e, r) {
  return r === void 0 && (r = function(t, n) {
    return t === n;
  }), H(function(t, n) {
    var i = ip(), o = ip(), a = function(c) {
      n.next(c), n.complete();
    }, u = function(c, s) {
      var l = B(n, function(f) {
        var y = s.buffer, b = s.complete;
        y.length === 0 ? b ? a(!1) : c.buffer.push(f) : !r(f, y.shift()) && a(!1);
      }, function() {
        c.complete = !0;
        var f = s.complete, y = s.buffer;
        f && a(y.length === 0), l == null || l.unsubscribe();
      });
      return l;
    };
    t.subscribe(u(i, o)), ae(e).subscribe(u(o, i));
  });
}
function ip() {
  return {
    buffer: [],
    complete: !1
  };
}
function cb(e) {
  e === void 0 && (e = {});
  var r = e.connector, t = r === void 0 ? function() {
    return new Je();
  } : r, n = e.resetOnError, i = n === void 0 ? !0 : n, o = e.resetOnComplete, a = o === void 0 ? !0 : o, u = e.resetOnRefCountZero, c = u === void 0 ? !0 : u;
  return function(s) {
    var l, f, y, b = 0, O = !1, S = !1, P = function() {
      f == null || f.unsubscribe(), f = void 0;
    }, R = function() {
      P(), l = y = void 0, O = S = !1;
    }, $ = function() {
      var j = l;
      R(), j == null || j.unsubscribe();
    };
    return H(function(j, k) {
      b++, !S && !O && P();
      var L = y = y ?? t();
      k.add(function() {
        b--, b === 0 && !S && !O && (f = Cl($, c));
      }), L.subscribe(k), !l && b > 0 && (l = new Bi({
        next: function(Y) {
          return L.next(Y);
        },
        error: function(Y) {
          S = !0, P(), f = Cl(R, i, Y), L.error(Y);
        },
        complete: function() {
          O = !0, P(), f = Cl(R, a), L.complete();
        }
      }), ae(j).subscribe(l));
    })(s);
  };
}
function Cl(e, r) {
  for (var t = [], n = 2; n < arguments.length; n++)
    t[n - 2] = arguments[n];
  if (r === !0) {
    e();
    return;
  }
  if (r !== !1) {
    var i = new Bi({
      next: function() {
        i.unsubscribe(), e();
      }
    });
    return ae(r.apply(void 0, je([], $e(t)))).subscribe(i);
  }
}
function Ox(e, r, t) {
  var n, i, o, a, u = !1;
  return e && typeof e == "object" ? (n = e.bufferSize, a = n === void 0 ? 1 / 0 : n, i = e.windowTime, r = i === void 0 ? 1 / 0 : i, o = e.refCount, u = o === void 0 ? !1 : o, t = e.scheduler) : a = e ?? 1 / 0, cb({
    connector: function() {
      return new ab(a, r, t);
    },
    resetOnError: !0,
    resetOnComplete: !1,
    resetOnRefCountZero: u
  });
}
var wx = dn(function(e) {
  return function(t) {
    e(this), this.name = "SequenceError", this.message = t;
  };
}), Ex = dn(function(e) {
  return function(t) {
    e(this), this.name = "NotFoundError", this.message = t;
  };
});
function Sx(e) {
  return H(function(r, t) {
    var n = !1, i, o = !1, a = 0;
    r.subscribe(B(t, function(u) {
      o = !0, (!e || e(u, a++, r)) && (n && t.error(new wx("Too many matching values")), n = !0, i = u);
    }, function() {
      n ? (t.next(i), t.complete()) : t.error(o ? new Ex("No matching values") : new bc());
    }));
  });
}
function Tx(e) {
  return Kr(function(r, t) {
    return e <= t;
  });
}
function Px(e) {
  return e <= 0 ? ot : H(function(r, t) {
    var n = new Array(e), i = 0;
    return r.subscribe(B(t, function(o) {
      var a = i++;
      if (a < e)
        n[a] = o;
      else {
        var u = a % e, c = n[u];
        n[u] = o, t.next(c);
      }
    })), function() {
      n = null;
    };
  });
}
function Ix(e) {
  return H(function(r, t) {
    var n = !1, i = B(t, function() {
      i == null || i.unsubscribe(), n = !0;
    }, Ze);
    ae(e).subscribe(i), r.subscribe(B(t, function(o) {
      return n && t.next(o);
    }));
  });
}
function Ax(e) {
  return H(function(r, t) {
    var n = !1, i = 0;
    r.subscribe(B(t, function(o) {
      return (n || (n = !e(o, i++))) && t.next(o);
    }));
  });
}
function Rx() {
  for (var e = [], r = 0; r < arguments.length; r++)
    e[r] = arguments[r];
  var t = Ir(e);
  return H(function(n, i) {
    (t ? Va(e, n, t) : Va(e, n)).subscribe(i);
  });
}
function Vi(e, r) {
  return H(function(t, n) {
    var i = null, o = 0, a = !1, u = function() {
      return a && !i && n.complete();
    };
    t.subscribe(B(n, function(c) {
      i == null || i.unsubscribe();
      var s = 0, l = o++;
      ae(e(c, l)).subscribe(i = B(n, function(f) {
        return n.next(r ? r(c, f, l, s++) : f);
      }, function() {
        i = null, u();
      }));
    }, function() {
      a = !0, u();
    }));
  });
}
function Cx() {
  return Vi(ot);
}
function $x(e, r) {
  return de(r) ? Vi(function() {
    return e;
  }, r) : Vi(function() {
    return e;
  });
}
function jx(e, r) {
  return H(function(t, n) {
    var i = r;
    return Vi(function(o, a) {
      return e(i, o, a);
    }, function(o, a) {
      return i = a, a;
    })(t).subscribe(n), function() {
      i = null;
    };
  });
}
function Nx(e) {
  return H(function(r, t) {
    ae(e).subscribe(B(t, function() {
      return t.complete();
    }, Ze)), !t.closed && r.subscribe(t);
  });
}
function Mx(e, r) {
  return r === void 0 && (r = !1), H(function(t, n) {
    var i = 0;
    t.subscribe(B(n, function(o) {
      var a = e(o, i++);
      (a || r) && n.next(o), !a && n.complete();
    }));
  });
}
function kx(e, r, t) {
  var n = de(e) || r || t ? { next: e, error: r, complete: t } : e;
  return n ? H(function(i, o) {
    var a;
    (a = n.subscribe) === null || a === void 0 || a.call(n);
    var u = !0;
    i.subscribe(B(o, function(c) {
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
  }) : ot;
}
var lb = {
  leading: !0,
  trailing: !1
};
function fb(e, r) {
  return r === void 0 && (r = lb), H(function(t, n) {
    var i = r.leading, o = r.trailing, a = !1, u = null, c = null, s = !1, l = function() {
      c == null || c.unsubscribe(), c = null, o && (b(), s && n.complete());
    }, f = function() {
      c = null, s && n.complete();
    }, y = function(O) {
      return c = ae(e(O)).subscribe(B(n, l, f));
    }, b = function() {
      if (a) {
        a = !1;
        var O = u;
        u = null, n.next(O), !s && y(O);
      }
    };
    t.subscribe(B(n, function(O) {
      a = !0, u = O, !(c && !c.closed) && (i ? b() : y(O));
    }, function() {
      s = !0, !(o && a && c && !c.closed) && n.complete();
    }));
  });
}
function Dx(e, r, t) {
  r === void 0 && (r = Nt), t === void 0 && (t = lb);
  var n = ni(e, r);
  return fb(function() {
    return n;
  }, t);
}
function Ux(e) {
  return e === void 0 && (e = Nt), H(function(r, t) {
    var n = e.now();
    r.subscribe(B(t, function(i) {
      var o = e.now(), a = o - n;
      n = o, t.next(new Lx(i, a));
    }));
  });
}
var Lx = function() {
  function e(r, t) {
    this.value = r, this.interval = t;
  }
  return e;
}(), Fx = dn(function(e) {
  return function(t) {
    t === void 0 && (t = null), e(this), this.message = "Timeout has occurred", this.name = "TimeoutError", this.info = t;
  };
});
function db(e, r) {
  var t = id(e) ? { first: e } : typeof e == "number" ? { each: e } : e, n = t.first, i = t.each, o = t.with, a = o === void 0 ? xx : o, u = t.scheduler, c = u === void 0 ? r ?? Nt : u, s = t.meta, l = s === void 0 ? null : s;
  if (n == null && i == null)
    throw new TypeError("No timeout provided.");
  return H(function(f, y) {
    var b, O, S = null, P = 0, R = function($) {
      O = lt(y, c, function() {
        try {
          b.unsubscribe(), ae(a({
            meta: l,
            lastValue: S,
            seen: P
          })).subscribe(y);
        } catch (j) {
          y.error(j);
        }
      }, $);
    };
    b = f.subscribe(B(y, function($) {
      O == null || O.unsubscribe(), P++, y.next(S = $), i > 0 && R(i);
    }, void 0, void 0, function() {
      O != null && O.closed || O == null || O.unsubscribe(), S = null;
    })), !P && R(n != null ? typeof n == "number" ? n : +n - c.now() : i);
  });
}
function xx(e) {
  throw new Fx(e);
}
function Bx(e, r, t) {
  var n, i, o;
  if (t = t ?? xm, id(e) ? n = e : typeof e == "number" && (i = e), r)
    o = function() {
      return r;
    };
  else
    throw new TypeError("No observable provided to switch to");
  if (n == null && i == null)
    throw new TypeError("No timeout provided.");
  return db({
    first: n,
    each: i,
    scheduler: t,
    with: o
  });
}
function Wx(e) {
  return e === void 0 && (e = _c), hn(function(r) {
    return { value: r, timestamp: e.now() };
  });
}
function Vx(e) {
  return H(function(r, t) {
    var n = new Je();
    t.next(n.asObservable());
    var i = function(o) {
      n.error(o), t.error(o);
    };
    return r.subscribe(B(t, function(o) {
      return n == null ? void 0 : n.next(o);
    }, function() {
      n.complete(), t.complete();
    }, i)), ae(e).subscribe(B(t, function() {
      n.complete(), t.next(n = new Je());
    }, Ze, i)), function() {
      n == null || n.unsubscribe(), n = null;
    };
  });
}
function qx(e, r) {
  r === void 0 && (r = 0);
  var t = r > 0 ? r : e;
  return H(function(n, i) {
    var o = [new Je()], a = [], u = 0;
    i.next(o[0].asObservable()), n.subscribe(B(i, function(c) {
      var s, l;
      try {
        for (var f = ct(o), y = f.next(); !y.done; y = f.next()) {
          var b = y.value;
          b.next(c);
        }
      } catch (P) {
        s = { error: P };
      } finally {
        try {
          y && !y.done && (l = f.return) && l.call(f);
        } finally {
          if (s)
            throw s.error;
        }
      }
      var O = u - e + 1;
      if (O >= 0 && O % t === 0 && o.shift().complete(), ++u % t === 0) {
        var S = new Je();
        o.push(S), i.next(S.asObservable());
      }
    }, function() {
      for (; o.length > 0; )
        o.shift().complete();
      i.complete();
    }, function(c) {
      for (; o.length > 0; )
        o.shift().error(c);
      i.error(c);
    }, function() {
      a = null, o = null;
    }));
  });
}
function Hx(e) {
  for (var r, t, n = [], i = 1; i < arguments.length; i++)
    n[i - 1] = arguments[i];
  var o = (r = Ir(n)) !== null && r !== void 0 ? r : Nt, a = (t = n[0]) !== null && t !== void 0 ? t : null, u = n[1] || 1 / 0;
  return H(function(c, s) {
    var l = [], f = !1, y = function(P) {
      var R = P.window, $ = P.subs;
      R.complete(), $.unsubscribe(), nr(l, P), f && b();
    }, b = function() {
      if (l) {
        var P = new At();
        s.add(P);
        var R = new Je(), $ = {
          window: R,
          subs: P,
          seen: 0
        };
        l.push($), s.next(R.asObservable()), lt(P, o, function() {
          return y($);
        }, e);
      }
    };
    a !== null && a >= 0 ? lt(s, o, b, a, !0) : f = !0, b();
    var O = function(P) {
      return l.slice().forEach(P);
    }, S = function(P) {
      O(function(R) {
        var $ = R.window;
        return P($);
      }), P(s), s.unsubscribe();
    };
    return c.subscribe(B(s, function(P) {
      O(function(R) {
        R.window.next(P), u <= ++R.seen && y(R);
      });
    }, function() {
      return S(function(P) {
        return P.complete();
      });
    }, function(P) {
      return S(function(R) {
        return R.error(P);
      });
    })), function() {
      l = null;
    };
  });
}
function zx(e, r) {
  return H(function(t, n) {
    var i = [], o = function(a) {
      for (; 0 < i.length; )
        i.shift().error(a);
      n.error(a);
    };
    ae(e).subscribe(B(n, function(a) {
      var u = new Je();
      i.push(u);
      var c = new At(), s = function() {
        nr(i, u), u.complete(), c.unsubscribe();
      }, l;
      try {
        l = ae(r(a));
      } catch (f) {
        o(f);
        return;
      }
      n.next(u.asObservable()), c.add(l.subscribe(B(n, s, Ze, o)));
    }, Ze)), t.subscribe(B(n, function(a) {
      var u, c, s = i.slice();
      try {
        for (var l = ct(s), f = l.next(); !f.done; f = l.next()) {
          var y = f.value;
          y.next(a);
        }
      } catch (b) {
        u = { error: b };
      } finally {
        try {
          f && !f.done && (c = l.return) && c.call(l);
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
function Yx(e) {
  return H(function(r, t) {
    var n, i, o = function(u) {
      n.error(u), t.error(u);
    }, a = function() {
      i == null || i.unsubscribe(), n == null || n.complete(), n = new Je(), t.next(n.asObservable());
      var u;
      try {
        u = ae(e());
      } catch (c) {
        o(c);
        return;
      }
      u.subscribe(i = B(t, a, a, o));
    };
    a(), r.subscribe(B(t, function(u) {
      return n.next(u);
    }, function() {
      n.complete(), t.complete();
    }, o, function() {
      i == null || i.unsubscribe(), n = null;
    }));
  });
}
function Gx() {
  for (var e = [], r = 0; r < arguments.length; r++)
    e[r] = arguments[r];
  var t = yc(e);
  return H(function(n, i) {
    for (var o = e.length, a = new Array(o), u = e.map(function() {
      return !1;
    }), c = !1, s = function(f) {
      ae(e[f]).subscribe(B(i, function(y) {
        a[f] = y, !c && !u[f] && (u[f] = !0, (c = u.every(ot)) && (u = null));
      }, Ze));
    }, l = 0; l < o; l++)
      s(l);
    n.subscribe(B(i, function(f) {
      if (c) {
        var y = je([f], $e(a));
        i.next(t ? t.apply(void 0, je([], $e(y))) : y);
      }
    }));
  });
}
function hb() {
  for (var e = [], r = 0; r < arguments.length; r++)
    e[r] = arguments[r];
  var t = yc(e), n = oi(e);
  return n.length ? new Be(function(i) {
    var o = n.map(function() {
      return [];
    }), a = n.map(function() {
      return !1;
    });
    i.add(function() {
      o = a = null;
    });
    for (var u = function(s) {
      ae(n[s]).subscribe(B(i, function(l) {
        if (o[s].push(l), o.every(function(y) {
          return y.length;
        })) {
          var f = o.map(function(y) {
            return y.shift();
          });
          i.next(t ? t.apply(void 0, je([], $e(f))) : f), o.some(function(y, b) {
            return !y.length && a[b];
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
  }) : Bo;
}
function vb() {
  for (var e = [], r = 0; r < arguments.length; r++)
    e[r] = arguments[r];
  return H(function(t, n) {
    hb.apply(void 0, je([t], $e(e))).subscribe(n);
  });
}
function Kx(e) {
  return Ym(hb, e);
}
function Zx() {
  for (var e = [], r = 0; r < arguments.length; r++)
    e[r] = arguments[r];
  return vb.apply(void 0, je([], $e(e)));
}
const Qx = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  audit: Fm,
  auditTime: HL,
  buffer: zL,
  bufferCount: YL,
  bufferTime: KL,
  bufferToggle: ZL,
  bufferWhen: QL,
  catchError: Wm,
  combineAll: pF,
  combineLatestAll: Gm,
  combineLatest: ld,
  combineLatestWith: yF,
  concat: Km,
  concatAll: dd,
  concatMap: pf,
  concatMapTo: mF,
  concatWith: bF,
  connect: hd,
  count: EF,
  debounce: SF,
  debounceTime: TF,
  defaultIfEmpty: mc,
  delay: PF,
  delayWhen: vd,
  dematerialize: AF,
  distinct: RF,
  distinctUntilChanged: eb,
  distinctUntilKeyChanged: $F,
  elementAt: NF,
  endWith: MF,
  every: kF,
  exhaust: DF,
  exhaustAll: tb,
  exhaustMap: pd,
  expand: UF,
  filter: Kr,
  finalize: LF,
  find: FF,
  findIndex: xF,
  first: BF,
  groupBy: WF,
  ignoreElements: Zm,
  isEmpty: VF,
  last: qF,
  map: hn,
  mapTo: Qm,
  materialize: HF,
  max: zF,
  merge: ib,
  mergeAll: fd,
  flatMap: YF,
  mergeMap: xt,
  mergeMapTo: GF,
  mergeScan: KF,
  mergeWith: ZF,
  min: QF,
  multicast: yd,
  observeOn: ad,
  onErrorResumeNext: ex,
  pairwise: tx,
  partition: nx,
  pluck: ix,
  publish: ox,
  publishBehavior: ux,
  publishLast: cx,
  publishReplay: lx,
  race: dx,
  raceWith: ub,
  reduce: xo,
  repeat: hx,
  repeatWhen: vx,
  retry: px,
  retryWhen: _x,
  refCount: ob,
  sample: sb,
  sampleTime: mx,
  scan: bx,
  sequenceEqual: gx,
  share: cb,
  shareReplay: Ox,
  single: Sx,
  skip: Tx,
  skipLast: Px,
  skipUntil: Ix,
  skipWhile: Ax,
  startWith: Rx,
  subscribeOn: ud,
  switchAll: Cx,
  switchMap: Vi,
  switchMapTo: $x,
  switchScan: jx,
  take: Wi,
  takeLast: nb,
  takeUntil: Nx,
  takeWhile: Mx,
  tap: kx,
  throttle: fb,
  throttleTime: Dx,
  throwIfEmpty: gc,
  timeInterval: Ux,
  timeout: db,
  timeoutWith: Bx,
  timestamp: Wx,
  toArray: zm,
  window: Vx,
  windowCount: qx,
  windowTime: Hx,
  windowToggle: zx,
  windowWhen: Yx,
  withLatestFrom: Gx,
  zip: vb,
  zipAll: Kx,
  zipWith: Zx
}, Symbol.toStringTag, { value: "Module" })), md = /* @__PURE__ */ cE(Qx);
var ai = {}, In = h && h.__awaiter || function(e, r, t, n) {
  function i(o) {
    return o instanceof t ? o : new t(function(a) {
      a(o);
    });
  }
  return new (t || (t = Promise))(function(o, a) {
    function u(l) {
      try {
        s(n.next(l));
      } catch (f) {
        a(f);
      }
    }
    function c(l) {
      try {
        s(n.throw(l));
      } catch (f) {
        a(f);
      }
    }
    function s(l) {
      l.done ? o(l.value) : i(l.value).then(u, c);
    }
    s((n = n.apply(e, r || [])).next());
  });
}, An = h && h.__generator || function(e, r) {
  var t = { label: 0, sent: function() {
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
    for (; a && (a = 0, s[0] && (t = 0)), t; )
      try {
        if (n = 1, i && (o = s[0] & 2 ? i.return : s[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, s[1])).done)
          return o;
        switch (i = 0, o && (s = [s[0] & 2, o.value]), s[0]) {
          case 0:
          case 1:
            o = s;
            break;
          case 4:
            return t.label++, { value: s[1], done: !1 };
          case 5:
            t.label++, i = s[1], s = [0];
            continue;
          case 7:
            s = t.ops.pop(), t.trys.pop();
            continue;
          default:
            if (o = t.trys, !(o = o.length > 0 && o[o.length - 1]) && (s[0] === 6 || s[0] === 2)) {
              t = 0;
              continue;
            }
            if (s[0] === 3 && (!o || s[1] > o[0] && s[1] < o[3])) {
              t.label = s[1];
              break;
            }
            if (s[0] === 6 && t.label < o[1]) {
              t.label = o[1], o = s;
              break;
            }
            if (o && t.label < o[2]) {
              t.label = o[2], t.ops.push(s);
              break;
            }
            o[2] && t.ops.pop(), t.trys.pop();
            continue;
        }
        s = r.call(e, t);
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
Object.defineProperty(ai, "__esModule", { value: !0 });
var Xx = te, Ur = eo, Nr = md, Oi = {
  READY: 0,
  STREAMING: 1,
  COMPLETED: 2
}, Jx = function() {
  function e(r, t) {
    var n = r.pipe((0, Nr.publishReplay)(1), (0, Nr.refCount)());
    this._result = n, this._keys = n.pipe((0, Nr.mergeMap)(function(i) {
      return (0, Ur.from)(i.keys());
    }), (0, Nr.publishReplay)(1), (0, Nr.refCount)()), this._records = void 0, this._controls = new pb(), this._summary = new Ur.ReplaySubject(), this._state = t || Oi.READY;
  }
  return e.prototype.keys = function() {
    return this._keys;
  }, e.prototype.records = function() {
    var r = this, t = this._result.pipe((0, Nr.mergeMap)(function(n) {
      return new Ur.Observable(function(i) {
        return r._startStreaming({ result: n, recordsObserver: i });
      });
    }));
    return t.push = function() {
      return r._push();
    }, t;
  }, e.prototype.consume = function() {
    var r = this;
    return this._result.pipe((0, Nr.mergeMap)(function(t) {
      return new Ur.Observable(function(n) {
        return r._startStreaming({ result: t, summaryObserver: n });
      });
    }));
  }, e.prototype.pause = function() {
    this._controls.pause();
  }, e.prototype.resume = function() {
    return this._controls.resume();
  }, e.prototype.push = function() {
    return this._controls.push();
  }, e.prototype._startStreaming = function(r) {
    var t = r === void 0 ? {} : r, n = t.result, i = t.recordsObserver, o = i === void 0 ? null : i, a = t.summaryObserver, u = a === void 0 ? null : a, c = [];
    return u && c.push(this._summary.subscribe(u)), this._state < Oi.STREAMING ? (this._state = Oi.STREAMING, this._setupRecordsStream(n), o ? c.push(this._records.subscribe(o)) : n._cancel(), c.push({
      unsubscribe: function() {
        n._cancel && n._cancel();
      }
    })) : o && o.error((0, Xx.newError)("Streaming has already started/consumed with a previous records or summary subscription.")), function() {
      c.forEach(function(s) {
        return s.unsubscribe();
      });
    };
  }, e.prototype._toObservable = function() {
    var r = this;
    function t(n) {
      return new Ur.Observable(function(i) {
        i.next(n), i.complete();
      });
    }
    return new Ur.Observable(function(n) {
      r._result.subscribe({
        complete: function() {
          return n.complete();
        },
        next: function(i) {
          return n.next(new e(t(i)), r._state);
        },
        error: function(i) {
          return n.error(i);
        }
      });
    });
  }, e.prototype._setupRecordsStream = function(r) {
    var t = this;
    return this._records ? this._records : (this._records = eB(r[Symbol.asyncIterator](), {
      complete: function() {
        return In(t, void 0, void 0, function() {
          var n, i;
          return An(this, function(o) {
            switch (o.label) {
              case 0:
                return this._state = Oi.COMPLETED, i = (n = this._summary).next, [4, r.summary()];
              case 1:
                return i.apply(n, [o.sent()]), this._summary.complete(), [2];
            }
          });
        });
      },
      error: function(n) {
        t._state = Oi.COMPLETED, t._summary.error(n);
      }
    }, this._controls), this._records);
  }, e;
}();
ai.default = Jx;
function eB(e, r, t) {
  var n = this;
  t === void 0 && (t = new pb());
  var i = new Ur.Subject(), o = function(u) {
    return In(n, void 0, void 0, function() {
      var c, s, l, f;
      return An(this, function(y) {
        switch (y.label) {
          case 0:
            return y.trys.push([0, 2, 3, 4]), t.pushing = !0, [4, u];
          case 1:
            return c = y.sent(), s = c.done, l = c.value, s ? (i.complete(), r.complete()) : (i.next(l), t.paused || o(e.next()).catch(function() {
            })), [3, 4];
          case 2:
            return f = y.sent(), i.error(f), r.error(f), [3, 4];
          case 3:
            return t.pushing = !1, [7];
          case 4:
            return [2];
        }
      });
    });
  };
  function a(u) {
    return In(this, void 0, void 0, function() {
      return An(this, function(c) {
        switch (c.label) {
          case 0:
            return [4, o(e.next(u))];
          case 1:
            return c.sent(), [2];
        }
      });
    });
  }
  return t.pusher = a, a(), i;
}
var pb = function() {
  function e(r) {
    r === void 0 && (r = function() {
      return In(t, void 0, void 0, function() {
        return An(this, function(n) {
          return [2];
        });
      });
    });
    var t = this;
    this._paused = !1, this._pushing = !1, this._push = r;
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
    set: function(r) {
      this._pushing = r;
    },
    enumerable: !1,
    configurable: !0
  }), e.prototype.resume = function() {
    return In(this, void 0, void 0, function() {
      var r;
      return An(this, function(t) {
        switch (t.label) {
          case 0:
            return r = this._paused, this._paused = !1, r && !this._pushing ? [4, this._push()] : [3, 2];
          case 1:
            t.sent(), t.label = 2;
          case 2:
            return [2];
        }
      });
    });
  }, e.prototype.push = function() {
    return In(this, void 0, void 0, function() {
      return An(this, function(r) {
        switch (r.label) {
          case 0:
            return this.pause(), [4, this._push()];
          case 1:
            return [2, r.sent()];
        }
      });
    });
  }, Object.defineProperty(e.prototype, "pusher", {
    get: function() {
      return this._push;
    },
    set: function(r) {
      this._push = r;
    },
    enumerable: !1,
    configurable: !0
  }), e;
}(), Wo = {}, _b = h && h.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(Wo, "__esModule", { value: !0 });
var sa = eo, tB = _b(ai);
_b(te);
var rB = function() {
  function e(r) {
    this._txc = r;
  }
  return e.prototype.run = function(r, t) {
    var n = this;
    return new tB.default(new sa.Observable(function(i) {
      try {
        i.next(n._txc.run(r, t)), i.complete();
      } catch (o) {
        i.error(o);
      }
      return function() {
      };
    }));
  }, e.prototype.commit = function() {
    var r = this;
    return new sa.Observable(function(t) {
      r._txc.commit().then(function() {
        t.complete();
      }).catch(function(n) {
        return t.error(n);
      });
    });
  }, e.prototype.rollback = function() {
    var r = this;
    return new sa.Observable(function(t) {
      r._txc.rollback().then(function() {
        t.complete();
      }).catch(function(n) {
        return t.error(n);
      });
    });
  }, e.prototype.isOpen = function() {
    return this._txc.isOpen();
  }, e.prototype.close = function() {
    var r = this;
    return new sa.Observable(function(t) {
      r._txc.close().then(function() {
        t.complete();
      }).catch(function(n) {
        return t.error(n);
      });
    });
  }, e;
}();
Wo.default = rB;
var Oc = {}, yb = h && h.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(Oc, "__esModule", { value: !0 });
yb(ai);
yb(Wo);
var nB = function() {
  function e(r) {
    var t = r.run;
    this._run = t;
  }
  return e.fromTransaction = function(r) {
    return new e({
      run: r.run.bind(r)
    });
  }, e.prototype.run = function(r, t) {
    return this._run(r, t);
  }, e;
}();
Oc.default = nB;
var bd = {};
Object.defineProperty(bd, "__esModule", { value: !0 });
var qa = te, $l = eo, jl = md;
qa.internal.logger.Logger;
var iB = qa.error.SERVICE_UNAVAILABLE, op = 30 * 1e3, ap = 1e3, up = 2, sp = 0.2, oB = function() {
  function e(r) {
    var t = r === void 0 ? {} : r, n = t.maxRetryTimeout, i = n === void 0 ? op : n, o = t.initialDelay, a = o === void 0 ? ap : o, u = t.delayMultiplier, c = u === void 0 ? up : u, s = t.delayJitter, l = s === void 0 ? sp : s, f = t.logger, y = f === void 0 ? null : f;
    this._maxRetryTimeout = ca(i, op), this._initialDelay = ca(a, ap), this._delayMultiplier = ca(c, up), this._delayJitter = ca(l, sp), this._logger = y;
  }
  return e.prototype.retry = function(r) {
    var t = this;
    return r.pipe((0, jl.retryWhen)(function(n) {
      var i = [], o = Date.now(), a = 1, u = t._initialDelay;
      return n.pipe((0, jl.mergeMap)(function(c) {
        if (!(0, qa.isRetriableError)(c))
          return (0, $l.throwError)(function() {
            return c;
          });
        if (i.push(c), a >= 2 && Date.now() - o >= t._maxRetryTimeout) {
          var s = (0, qa.newError)("Failed after retried for ".concat(a, " times in ").concat(t._maxRetryTimeout, " ms. Make sure that your database is online and retry again."), iB);
          return s.seenErrors = i, (0, $l.throwError)(function() {
            return s;
          });
        }
        var l = t._computeNextDelay(u);
        return u = u * t._delayMultiplier, a++, t._logger && t._logger.warn("Transaction failed and will be retried in ".concat(l)), (0, $l.of)(1).pipe((0, jl.delay)(l));
      }));
    }));
  }, e.prototype._computeNextDelay = function(r) {
    var t = r * this._delayJitter;
    return r - t + 2 * t * Math.random();
  }, e;
}();
bd.default = oB;
function ca(e, r) {
  return e || e === 0 ? e : r;
}
var wc = h && h.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(fu, "__esModule", { value: !0 });
var gn = eo, la = md, aB = wc(ai), mb = te, uB = wc(Wo), sB = wc(Oc), cB = wc(bd), bb = mb.internal.constants, cp = bb.ACCESS_MODE_READ, lp = bb.ACCESS_MODE_WRITE, fa = mb.internal.txConfig.TxConfig, lB = function() {
  function e(r) {
    var t = r === void 0 ? {} : r, n = t.session, i = t.config;
    this._session = n, this._retryLogic = fB(i);
  }
  return e.prototype.run = function(r, t, n) {
    var i = this;
    return new aB.default(new gn.Observable(function(o) {
      try {
        o.next(i._session.run(r, t, n)), o.complete();
      } catch (a) {
        o.error(a);
      }
      return function() {
      };
    }));
  }, e.prototype.beginTransaction = function(r) {
    return this._beginTransaction(this._session._mode, r);
  }, e.prototype.readTransaction = function(r, t) {
    return this._runTransaction(cp, r, t);
  }, e.prototype.writeTransaction = function(r, t) {
    return this._runTransaction(lp, r, t);
  }, e.prototype.executeRead = function(r, t) {
    return this._executeInTransaction(cp, r, t);
  }, e.prototype.executeWrite = function(r, t) {
    return this._executeInTransaction(lp, r, t);
  }, e.prototype._executeInTransaction = function(r, t, n) {
    var i = function(o) {
      return new sB.default({
        run: o.run.bind(o)
      });
    };
    return this._runTransaction(r, t, n, i);
  }, e.prototype.close = function() {
    var r = this;
    return new gn.Observable(function(t) {
      r._session.close().then(function() {
        t.complete();
      }).catch(function(n) {
        return t.error(n);
      });
    });
  }, e.prototype.lastBookmark = function() {
    return this.lastBookmarks();
  }, e.prototype.lastBookmarks = function() {
    return this._session.lastBookmarks();
  }, e.prototype._beginTransaction = function(r, t) {
    var n = this, i = fa.empty();
    return t && (i = new fa(t)), new gn.Observable(function(o) {
      try {
        n._session._beginTransaction(r, i).then(function(a) {
          o.next(new uB.default(a)), o.complete();
        }).catch(function(a) {
          return o.error(a);
        });
      } catch (a) {
        o.error(a);
      }
      return function() {
      };
    });
  }, e.prototype._runTransaction = function(r, t, n, i) {
    i === void 0 && (i = function(a) {
      return a;
    });
    var o = fa.empty();
    return n && (o = new fa(n)), this._retryLogic.retry(this._beginTransaction(r, o).pipe((0, la.mergeMap)(function(a) {
      return (0, gn.defer)(function() {
        try {
          return t(i(a));
        } catch (u) {
          return (0, gn.throwError)(function() {
            return u;
          });
        }
      }).pipe((0, la.catchError)(function(u) {
        return a.rollback().pipe((0, la.concatWith)((0, gn.throwError)(function() {
          return u;
        })));
      }), (0, la.concatWith)(a.commit()));
    })));
  }, e;
}();
fu.default = lB;
function fB(e) {
  var r = e && e.maxTransactionRetryTime ? e.maxTransactionRetryTime : null;
  return new cB.default({ maxRetryTimeout: r });
}
var dB = h && h.__extends || function() {
  var e = function(r, t) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var o in i)
        Object.prototype.hasOwnProperty.call(i, o) && (n[o] = i[o]);
    }, e(r, t);
  };
  return function(r, t) {
    if (typeof t != "function" && t !== null)
      throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
    e(r, t);
    function n() {
      this.constructor = r;
    }
    r.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}(), hB = h && h.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(Jt, "__esModule", { value: !0 });
Jt.WRITE = Jt.READ = Jt.Driver = void 0;
var Ec = te, vB = hB(fu), fp = Ec.internal.constants.FETCH_ALL, pB = Ec.driver.READ, gb = Ec.driver.WRITE;
Jt.READ = pB;
Jt.WRITE = gb;
var Ob = function(e) {
  dB(r, e);
  function r() {
    return e !== null && e.apply(this, arguments) || this;
  }
  return r.prototype.rxSession = function(t) {
    var n = t === void 0 ? {} : t, i = n.defaultAccessMode, o = i === void 0 ? gb : i, a = n.bookmarks, u = n.database, c = u === void 0 ? "" : u, s = n.fetchSize, l = n.impersonatedUser, f = n.bookmarkManager;
    return new vB.default({
      session: this._newSession({
        defaultAccessMode: o,
        bookmarkOrBookmarks: a,
        database: c,
        impersonatedUser: l,
        reactive: !1,
        fetchSize: _B(s, this._config.fetchSize),
        bookmarkManager: f
      }),
      config: this._config
    });
  }, r;
}(Ec.Driver);
Jt.Driver = Ob;
function _B(e, r) {
  var t = parseInt(e, 10);
  if (t > 0 || t === fp)
    return t;
  if (t === 0 || t < 0)
    throw new Error("The fetch size can only be a positive value or ".concat(fp, " for ALL. However fetchSize = ").concat(t));
  return r;
}
Jt.default = Ob;
var gd = {};
Object.defineProperty(gd, "__esModule", { value: !0 });
gd.default = "5.5.0";
var wb = {}, mr = {}, Sc = {};
Object.defineProperty(Sc, "__esModule", { value: !0 });
var yB = function() {
  function e() {
  }
  return e.prototype.selectReader = function(r) {
    throw new Error("Abstract function");
  }, e.prototype.selectWriter = function(r) {
    throw new Error("Abstract function");
  }, e;
}();
Sc.default = yB;
var Od = {}, wd = {};
Object.defineProperty(wd, "__esModule", { value: !0 });
var mB = function() {
  function e(r) {
    this._offset = r || 0;
  }
  return e.prototype.next = function(r) {
    if (r === 0)
      return -1;
    var t = this._offset;
    return this._offset += 1, this._offset === Number.MAX_SAFE_INTEGER && (this._offset = 0), t % r;
  }, e;
}();
wd.default = mB;
var bB = h && h.__extends || function() {
  var e = function(r, t) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var o in i)
        Object.prototype.hasOwnProperty.call(i, o) && (n[o] = i[o]);
    }, e(r, t);
  };
  return function(r, t) {
    if (typeof t != "function" && t !== null)
      throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
    e(r, t);
    function n() {
      this.constructor = r;
    }
    r.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}(), Eb = h && h.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(Od, "__esModule", { value: !0 });
var dp = Eb(wd), gB = Eb(Sc), OB = function(e) {
  bB(r, e);
  function r(t) {
    var n = e.call(this) || this;
    return n._readersIndex = new dp.default(), n._writersIndex = new dp.default(), n._connectionPool = t, n;
  }
  return r.prototype.selectReader = function(t) {
    return this._select(t, this._readersIndex);
  }, r.prototype.selectWriter = function(t) {
    return this._select(t, this._writersIndex);
  }, r.prototype._select = function(t, n) {
    var i = t.length;
    if (i === 0)
      return null;
    var o = n.next(i), a = o, u = null, c = Number.MAX_SAFE_INTEGER;
    do {
      var s = t[a], l = this._connectionPool.activeResourceCount(s);
      l < c && (u = s, c = l), a === i - 1 ? a = 0 : a++;
    } while (a !== o);
    return u;
  }, r;
}(gB.default);
Od.default = OB;
var Sb = h && h.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(mr, "__esModule", { value: !0 });
mr.LeastConnectedLoadBalancingStrategy = mr.LoadBalancingStrategy = void 0;
var wB = Sb(Sc);
mr.LoadBalancingStrategy = wB.default;
var Tb = Sb(Od);
mr.LeastConnectedLoadBalancingStrategy = Tb.default;
mr.default = Tb.default;
var Ed = {}, Sd = {}, ui = {}, Dn = {}, Td = {}, ur = {}, Pd = {}, Vo = {};
Vo.byteLength = TB;
Vo.toByteArray = IB;
Vo.fromByteArray = CB;
var Dt = [], pt = [], EB = typeof Uint8Array < "u" ? Uint8Array : Array, Nl = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for (var On = 0, SB = Nl.length; On < SB; ++On)
  Dt[On] = Nl[On], pt[Nl.charCodeAt(On)] = On;
pt["-".charCodeAt(0)] = 62;
pt["_".charCodeAt(0)] = 63;
function Pb(e) {
  var r = e.length;
  if (r % 4 > 0)
    throw new Error("Invalid string. Length must be a multiple of 4");
  var t = e.indexOf("=");
  t === -1 && (t = r);
  var n = t === r ? 0 : 4 - t % 4;
  return [t, n];
}
function TB(e) {
  var r = Pb(e), t = r[0], n = r[1];
  return (t + n) * 3 / 4 - n;
}
function PB(e, r, t) {
  return (r + t) * 3 / 4 - t;
}
function IB(e) {
  var r, t = Pb(e), n = t[0], i = t[1], o = new EB(PB(e, n, i)), a = 0, u = i > 0 ? n - 4 : n, c;
  for (c = 0; c < u; c += 4)
    r = pt[e.charCodeAt(c)] << 18 | pt[e.charCodeAt(c + 1)] << 12 | pt[e.charCodeAt(c + 2)] << 6 | pt[e.charCodeAt(c + 3)], o[a++] = r >> 16 & 255, o[a++] = r >> 8 & 255, o[a++] = r & 255;
  return i === 2 && (r = pt[e.charCodeAt(c)] << 2 | pt[e.charCodeAt(c + 1)] >> 4, o[a++] = r & 255), i === 1 && (r = pt[e.charCodeAt(c)] << 10 | pt[e.charCodeAt(c + 1)] << 4 | pt[e.charCodeAt(c + 2)] >> 2, o[a++] = r >> 8 & 255, o[a++] = r & 255), o;
}
function AB(e) {
  return Dt[e >> 18 & 63] + Dt[e >> 12 & 63] + Dt[e >> 6 & 63] + Dt[e & 63];
}
function RB(e, r, t) {
  for (var n, i = [], o = r; o < t; o += 3)
    n = (e[o] << 16 & 16711680) + (e[o + 1] << 8 & 65280) + (e[o + 2] & 255), i.push(AB(n));
  return i.join("");
}
function CB(e) {
  for (var r, t = e.length, n = t % 3, i = [], o = 16383, a = 0, u = t - n; a < u; a += o)
    i.push(RB(e, a, a + o > u ? u : a + o));
  return n === 1 ? (r = e[t - 1], i.push(
    Dt[r >> 2] + Dt[r << 4 & 63] + "=="
  )) : n === 2 && (r = (e[t - 2] << 8) + e[t - 1], i.push(
    Dt[r >> 10] + Dt[r >> 4 & 63] + Dt[r << 2 & 63] + "="
  )), i.join("");
}
var Tc = {};
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
Tc.read = function(e, r, t, n, i) {
  var o, a, u = i * 8 - n - 1, c = (1 << u) - 1, s = c >> 1, l = -7, f = t ? i - 1 : 0, y = t ? -1 : 1, b = e[r + f];
  for (f += y, o = b & (1 << -l) - 1, b >>= -l, l += u; l > 0; o = o * 256 + e[r + f], f += y, l -= 8)
    ;
  for (a = o & (1 << -l) - 1, o >>= -l, l += n; l > 0; a = a * 256 + e[r + f], f += y, l -= 8)
    ;
  if (o === 0)
    o = 1 - s;
  else {
    if (o === c)
      return a ? NaN : (b ? -1 : 1) * (1 / 0);
    a = a + Math.pow(2, n), o = o - s;
  }
  return (b ? -1 : 1) * a * Math.pow(2, o - n);
};
Tc.write = function(e, r, t, n, i, o) {
  var a, u, c, s = o * 8 - i - 1, l = (1 << s) - 1, f = l >> 1, y = i === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, b = n ? 0 : o - 1, O = n ? 1 : -1, S = r < 0 || r === 0 && 1 / r < 0 ? 1 : 0;
  for (r = Math.abs(r), isNaN(r) || r === 1 / 0 ? (u = isNaN(r) ? 1 : 0, a = l) : (a = Math.floor(Math.log(r) / Math.LN2), r * (c = Math.pow(2, -a)) < 1 && (a--, c *= 2), a + f >= 1 ? r += y / c : r += y * Math.pow(2, 1 - f), r * c >= 2 && (a++, c /= 2), a + f >= l ? (u = 0, a = l) : a + f >= 1 ? (u = (r * c - 1) * Math.pow(2, i), a = a + f) : (u = r * Math.pow(2, f - 1) * Math.pow(2, i), a = 0)); i >= 8; e[t + b] = u & 255, b += O, u /= 256, i -= 8)
    ;
  for (a = a << i | u, s += i; s > 0; e[t + b] = a & 255, b += O, a /= 256, s -= 8)
    ;
  e[t + b - O] |= S * 128;
};
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
(function(e) {
  const r = Vo, t = Tc, n = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
  e.Buffer = u, e.SlowBuffer = $, e.INSPECT_MAX_BYTES = 50;
  const i = 2147483647;
  e.kMaxLength = i, u.TYPED_ARRAY_SUPPORT = o(), !u.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error(
    "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
  );
  function o() {
    try {
      const m = new Uint8Array(1), d = { foo: function() {
        return 42;
      } };
      return Object.setPrototypeOf(d, Uint8Array.prototype), Object.setPrototypeOf(m, d), m.foo() === 42;
    } catch {
      return !1;
    }
  }
  Object.defineProperty(u.prototype, "parent", {
    enumerable: !0,
    get: function() {
      if (!!u.isBuffer(this))
        return this.buffer;
    }
  }), Object.defineProperty(u.prototype, "offset", {
    enumerable: !0,
    get: function() {
      if (!!u.isBuffer(this))
        return this.byteOffset;
    }
  });
  function a(m) {
    if (m > i)
      throw new RangeError('The value "' + m + '" is invalid for option "size"');
    const d = new Uint8Array(m);
    return Object.setPrototypeOf(d, u.prototype), d;
  }
  function u(m, d, v) {
    if (typeof m == "number") {
      if (typeof d == "string")
        throw new TypeError(
          'The "string" argument must be of type string. Received type number'
        );
      return f(m);
    }
    return c(m, d, v);
  }
  u.poolSize = 8192;
  function c(m, d, v) {
    if (typeof m == "string")
      return y(m, d);
    if (ArrayBuffer.isView(m))
      return O(m);
    if (m == null)
      throw new TypeError(
        "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof m
      );
    if (F(m, ArrayBuffer) || m && F(m.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (F(m, SharedArrayBuffer) || m && F(m.buffer, SharedArrayBuffer)))
      return S(m, d, v);
    if (typeof m == "number")
      throw new TypeError(
        'The "value" argument must not be of type number. Received type number'
      );
    const w = m.valueOf && m.valueOf();
    if (w != null && w !== m)
      return u.from(w, d, v);
    const T = P(m);
    if (T)
      return T;
    if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof m[Symbol.toPrimitive] == "function")
      return u.from(m[Symbol.toPrimitive]("string"), d, v);
    throw new TypeError(
      "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof m
    );
  }
  u.from = function(m, d, v) {
    return c(m, d, v);
  }, Object.setPrototypeOf(u.prototype, Uint8Array.prototype), Object.setPrototypeOf(u, Uint8Array);
  function s(m) {
    if (typeof m != "number")
      throw new TypeError('"size" argument must be of type number');
    if (m < 0)
      throw new RangeError('The value "' + m + '" is invalid for option "size"');
  }
  function l(m, d, v) {
    return s(m), m <= 0 ? a(m) : d !== void 0 ? typeof v == "string" ? a(m).fill(d, v) : a(m).fill(d) : a(m);
  }
  u.alloc = function(m, d, v) {
    return l(m, d, v);
  };
  function f(m) {
    return s(m), a(m < 0 ? 0 : R(m) | 0);
  }
  u.allocUnsafe = function(m) {
    return f(m);
  }, u.allocUnsafeSlow = function(m) {
    return f(m);
  };
  function y(m, d) {
    if ((typeof d != "string" || d === "") && (d = "utf8"), !u.isEncoding(d))
      throw new TypeError("Unknown encoding: " + d);
    const v = j(m, d) | 0;
    let w = a(v);
    const T = w.write(m, d);
    return T !== v && (w = w.slice(0, T)), w;
  }
  function b(m) {
    const d = m.length < 0 ? 0 : R(m.length) | 0, v = a(d);
    for (let w = 0; w < d; w += 1)
      v[w] = m[w] & 255;
    return v;
  }
  function O(m) {
    if (F(m, Uint8Array)) {
      const d = new Uint8Array(m);
      return S(d.buffer, d.byteOffset, d.byteLength);
    }
    return b(m);
  }
  function S(m, d, v) {
    if (d < 0 || m.byteLength < d)
      throw new RangeError('"offset" is outside of buffer bounds');
    if (m.byteLength < d + (v || 0))
      throw new RangeError('"length" is outside of buffer bounds');
    let w;
    return d === void 0 && v === void 0 ? w = new Uint8Array(m) : v === void 0 ? w = new Uint8Array(m, d) : w = new Uint8Array(m, d, v), Object.setPrototypeOf(w, u.prototype), w;
  }
  function P(m) {
    if (u.isBuffer(m)) {
      const d = R(m.length) | 0, v = a(d);
      return v.length === 0 || m.copy(v, 0, 0, d), v;
    }
    if (m.length !== void 0)
      return typeof m.length != "number" || oe(m.length) ? a(0) : b(m);
    if (m.type === "Buffer" && Array.isArray(m.data))
      return b(m.data);
  }
  function R(m) {
    if (m >= i)
      throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + i.toString(16) + " bytes");
    return m | 0;
  }
  function $(m) {
    return +m != m && (m = 0), u.alloc(+m);
  }
  u.isBuffer = function(d) {
    return d != null && d._isBuffer === !0 && d !== u.prototype;
  }, u.compare = function(d, v) {
    if (F(d, Uint8Array) && (d = u.from(d, d.offset, d.byteLength)), F(v, Uint8Array) && (v = u.from(v, v.offset, v.byteLength)), !u.isBuffer(d) || !u.isBuffer(v))
      throw new TypeError(
        'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
      );
    if (d === v)
      return 0;
    let w = d.length, T = v.length;
    for (let C = 0, N = Math.min(w, T); C < N; ++C)
      if (d[C] !== v[C]) {
        w = d[C], T = v[C];
        break;
      }
    return w < T ? -1 : T < w ? 1 : 0;
  }, u.isEncoding = function(d) {
    switch (String(d).toLowerCase()) {
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
  }, u.concat = function(d, v) {
    if (!Array.isArray(d))
      throw new TypeError('"list" argument must be an Array of Buffers');
    if (d.length === 0)
      return u.alloc(0);
    let w;
    if (v === void 0)
      for (v = 0, w = 0; w < d.length; ++w)
        v += d[w].length;
    const T = u.allocUnsafe(v);
    let C = 0;
    for (w = 0; w < d.length; ++w) {
      let N = d[w];
      if (F(N, Uint8Array))
        C + N.length > T.length ? (u.isBuffer(N) || (N = u.from(N)), N.copy(T, C)) : Uint8Array.prototype.set.call(
          T,
          N,
          C
        );
      else if (u.isBuffer(N))
        N.copy(T, C);
      else
        throw new TypeError('"list" argument must be an Array of Buffers');
      C += N.length;
    }
    return T;
  };
  function j(m, d) {
    if (u.isBuffer(m))
      return m.length;
    if (ArrayBuffer.isView(m) || F(m, ArrayBuffer))
      return m.byteLength;
    if (typeof m != "string")
      throw new TypeError(
        'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof m
      );
    const v = m.length, w = arguments.length > 2 && arguments[2] === !0;
    if (!w && v === 0)
      return 0;
    let T = !1;
    for (; ; )
      switch (d) {
        case "ascii":
        case "latin1":
        case "binary":
          return v;
        case "utf8":
        case "utf-8":
          return p(m).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return v * 2;
        case "hex":
          return v >>> 1;
        case "base64":
          return I(m).length;
        default:
          if (T)
            return w ? -1 : p(m).length;
          d = ("" + d).toLowerCase(), T = !0;
      }
  }
  u.byteLength = j;
  function k(m, d, v) {
    let w = !1;
    if ((d === void 0 || d < 0) && (d = 0), d > this.length || ((v === void 0 || v > this.length) && (v = this.length), v <= 0) || (v >>>= 0, d >>>= 0, v <= d))
      return "";
    for (m || (m = "utf8"); ; )
      switch (m) {
        case "hex":
          return ve(this, d, v);
        case "utf8":
        case "utf-8":
          return he(this, d, v);
        case "ascii":
          return ne(this, d, v);
        case "latin1":
        case "binary":
          return G(this, d, v);
        case "base64":
          return be(this, d, v);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return We(this, d, v);
        default:
          if (w)
            throw new TypeError("Unknown encoding: " + m);
          m = (m + "").toLowerCase(), w = !0;
      }
  }
  u.prototype._isBuffer = !0;
  function L(m, d, v) {
    const w = m[d];
    m[d] = m[v], m[v] = w;
  }
  u.prototype.swap16 = function() {
    const d = this.length;
    if (d % 2 !== 0)
      throw new RangeError("Buffer size must be a multiple of 16-bits");
    for (let v = 0; v < d; v += 2)
      L(this, v, v + 1);
    return this;
  }, u.prototype.swap32 = function() {
    const d = this.length;
    if (d % 4 !== 0)
      throw new RangeError("Buffer size must be a multiple of 32-bits");
    for (let v = 0; v < d; v += 4)
      L(this, v, v + 3), L(this, v + 1, v + 2);
    return this;
  }, u.prototype.swap64 = function() {
    const d = this.length;
    if (d % 8 !== 0)
      throw new RangeError("Buffer size must be a multiple of 64-bits");
    for (let v = 0; v < d; v += 8)
      L(this, v, v + 7), L(this, v + 1, v + 6), L(this, v + 2, v + 5), L(this, v + 3, v + 4);
    return this;
  }, u.prototype.toString = function() {
    const d = this.length;
    return d === 0 ? "" : arguments.length === 0 ? he(this, 0, d) : k.apply(this, arguments);
  }, u.prototype.toLocaleString = u.prototype.toString, u.prototype.equals = function(d) {
    if (!u.isBuffer(d))
      throw new TypeError("Argument must be a Buffer");
    return this === d ? !0 : u.compare(this, d) === 0;
  }, u.prototype.inspect = function() {
    let d = "";
    const v = e.INSPECT_MAX_BYTES;
    return d = this.toString("hex", 0, v).replace(/(.{2})/g, "$1 ").trim(), this.length > v && (d += " ... "), "<Buffer " + d + ">";
  }, n && (u.prototype[n] = u.prototype.inspect), u.prototype.compare = function(d, v, w, T, C) {
    if (F(d, Uint8Array) && (d = u.from(d, d.offset, d.byteLength)), !u.isBuffer(d))
      throw new TypeError(
        'The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof d
      );
    if (v === void 0 && (v = 0), w === void 0 && (w = d ? d.length : 0), T === void 0 && (T = 0), C === void 0 && (C = this.length), v < 0 || w > d.length || T < 0 || C > this.length)
      throw new RangeError("out of range index");
    if (T >= C && v >= w)
      return 0;
    if (T >= C)
      return -1;
    if (v >= w)
      return 1;
    if (v >>>= 0, w >>>= 0, T >>>= 0, C >>>= 0, this === d)
      return 0;
    let N = C - T, ie = w - v;
    const Re = Math.min(N, ie), Se = this.slice(T, C), Ce = d.slice(v, w);
    for (let ge = 0; ge < Re; ++ge)
      if (Se[ge] !== Ce[ge]) {
        N = Se[ge], ie = Ce[ge];
        break;
      }
    return N < ie ? -1 : ie < N ? 1 : 0;
  };
  function Y(m, d, v, w, T) {
    if (m.length === 0)
      return -1;
    if (typeof v == "string" ? (w = v, v = 0) : v > 2147483647 ? v = 2147483647 : v < -2147483648 && (v = -2147483648), v = +v, oe(v) && (v = T ? 0 : m.length - 1), v < 0 && (v = m.length + v), v >= m.length) {
      if (T)
        return -1;
      v = m.length - 1;
    } else if (v < 0)
      if (T)
        v = 0;
      else
        return -1;
    if (typeof d == "string" && (d = u.from(d, w)), u.isBuffer(d))
      return d.length === 0 ? -1 : ee(m, d, v, w, T);
    if (typeof d == "number")
      return d = d & 255, typeof Uint8Array.prototype.indexOf == "function" ? T ? Uint8Array.prototype.indexOf.call(m, d, v) : Uint8Array.prototype.lastIndexOf.call(m, d, v) : ee(m, [d], v, w, T);
    throw new TypeError("val must be string, number or Buffer");
  }
  function ee(m, d, v, w, T) {
    let C = 1, N = m.length, ie = d.length;
    if (w !== void 0 && (w = String(w).toLowerCase(), w === "ucs2" || w === "ucs-2" || w === "utf16le" || w === "utf-16le")) {
      if (m.length < 2 || d.length < 2)
        return -1;
      C = 2, N /= 2, ie /= 2, v /= 2;
    }
    function Re(Ce, ge) {
      return C === 1 ? Ce[ge] : Ce.readUInt16BE(ge * C);
    }
    let Se;
    if (T) {
      let Ce = -1;
      for (Se = v; Se < N; Se++)
        if (Re(m, Se) === Re(d, Ce === -1 ? 0 : Se - Ce)) {
          if (Ce === -1 && (Ce = Se), Se - Ce + 1 === ie)
            return Ce * C;
        } else
          Ce !== -1 && (Se -= Se - Ce), Ce = -1;
    } else
      for (v + ie > N && (v = N - ie), Se = v; Se >= 0; Se--) {
        let Ce = !0;
        for (let ge = 0; ge < ie; ge++)
          if (Re(m, Se + ge) !== Re(d, ge)) {
            Ce = !1;
            break;
          }
        if (Ce)
          return Se;
      }
    return -1;
  }
  u.prototype.includes = function(d, v, w) {
    return this.indexOf(d, v, w) !== -1;
  }, u.prototype.indexOf = function(d, v, w) {
    return Y(this, d, v, w, !0);
  }, u.prototype.lastIndexOf = function(d, v, w) {
    return Y(this, d, v, w, !1);
  };
  function le(m, d, v, w) {
    v = Number(v) || 0;
    const T = m.length - v;
    w ? (w = Number(w), w > T && (w = T)) : w = T;
    const C = d.length;
    w > C / 2 && (w = C / 2);
    let N;
    for (N = 0; N < w; ++N) {
      const ie = parseInt(d.substr(N * 2, 2), 16);
      if (oe(ie))
        return N;
      m[v + N] = ie;
    }
    return N;
  }
  function me(m, d, v, w) {
    return U(p(d, m.length - v), m, v, w);
  }
  function Me(m, d, v, w) {
    return U(_(d), m, v, w);
  }
  function Pe(m, d, v, w) {
    return U(I(d), m, v, w);
  }
  function Ue(m, d, v, w) {
    return U(E(d, m.length - v), m, v, w);
  }
  u.prototype.write = function(d, v, w, T) {
    if (v === void 0)
      T = "utf8", w = this.length, v = 0;
    else if (w === void 0 && typeof v == "string")
      T = v, w = this.length, v = 0;
    else if (isFinite(v))
      v = v >>> 0, isFinite(w) ? (w = w >>> 0, T === void 0 && (T = "utf8")) : (T = w, w = void 0);
    else
      throw new Error(
        "Buffer.write(string, encoding, offset[, length]) is no longer supported"
      );
    const C = this.length - v;
    if ((w === void 0 || w > C) && (w = C), d.length > 0 && (w < 0 || v < 0) || v > this.length)
      throw new RangeError("Attempt to write outside buffer bounds");
    T || (T = "utf8");
    let N = !1;
    for (; ; )
      switch (T) {
        case "hex":
          return le(this, d, v, w);
        case "utf8":
        case "utf-8":
          return me(this, d, v, w);
        case "ascii":
        case "latin1":
        case "binary":
          return Me(this, d, v, w);
        case "base64":
          return Pe(this, d, v, w);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return Ue(this, d, v, w);
        default:
          if (N)
            throw new TypeError("Unknown encoding: " + T);
          T = ("" + T).toLowerCase(), N = !0;
      }
  }, u.prototype.toJSON = function() {
    return {
      type: "Buffer",
      data: Array.prototype.slice.call(this._arr || this, 0)
    };
  };
  function be(m, d, v) {
    return d === 0 && v === m.length ? r.fromByteArray(m) : r.fromByteArray(m.slice(d, v));
  }
  function he(m, d, v) {
    v = Math.min(m.length, v);
    const w = [];
    let T = d;
    for (; T < v; ) {
      const C = m[T];
      let N = null, ie = C > 239 ? 4 : C > 223 ? 3 : C > 191 ? 2 : 1;
      if (T + ie <= v) {
        let Re, Se, Ce, ge;
        switch (ie) {
          case 1:
            C < 128 && (N = C);
            break;
          case 2:
            Re = m[T + 1], (Re & 192) === 128 && (ge = (C & 31) << 6 | Re & 63, ge > 127 && (N = ge));
            break;
          case 3:
            Re = m[T + 1], Se = m[T + 2], (Re & 192) === 128 && (Se & 192) === 128 && (ge = (C & 15) << 12 | (Re & 63) << 6 | Se & 63, ge > 2047 && (ge < 55296 || ge > 57343) && (N = ge));
            break;
          case 4:
            Re = m[T + 1], Se = m[T + 2], Ce = m[T + 3], (Re & 192) === 128 && (Se & 192) === 128 && (Ce & 192) === 128 && (ge = (C & 15) << 18 | (Re & 63) << 12 | (Se & 63) << 6 | Ce & 63, ge > 65535 && ge < 1114112 && (N = ge));
        }
      }
      N === null ? (N = 65533, ie = 1) : N > 65535 && (N -= 65536, w.push(N >>> 10 & 1023 | 55296), N = 56320 | N & 1023), w.push(N), T += ie;
    }
    return re(w);
  }
  const q = 4096;
  function re(m) {
    const d = m.length;
    if (d <= q)
      return String.fromCharCode.apply(String, m);
    let v = "", w = 0;
    for (; w < d; )
      v += String.fromCharCode.apply(
        String,
        m.slice(w, w += q)
      );
    return v;
  }
  function ne(m, d, v) {
    let w = "";
    v = Math.min(m.length, v);
    for (let T = d; T < v; ++T)
      w += String.fromCharCode(m[T] & 127);
    return w;
  }
  function G(m, d, v) {
    let w = "";
    v = Math.min(m.length, v);
    for (let T = d; T < v; ++T)
      w += String.fromCharCode(m[T]);
    return w;
  }
  function ve(m, d, v) {
    const w = m.length;
    (!d || d < 0) && (d = 0), (!v || v < 0 || v > w) && (v = w);
    let T = "";
    for (let C = d; C < v; ++C)
      T += pe[m[C]];
    return T;
  }
  function We(m, d, v) {
    const w = m.slice(d, v);
    let T = "";
    for (let C = 0; C < w.length - 1; C += 2)
      T += String.fromCharCode(w[C] + w[C + 1] * 256);
    return T;
  }
  u.prototype.slice = function(d, v) {
    const w = this.length;
    d = ~~d, v = v === void 0 ? w : ~~v, d < 0 ? (d += w, d < 0 && (d = 0)) : d > w && (d = w), v < 0 ? (v += w, v < 0 && (v = 0)) : v > w && (v = w), v < d && (v = d);
    const T = this.subarray(d, v);
    return Object.setPrototypeOf(T, u.prototype), T;
  };
  function Q(m, d, v) {
    if (m % 1 !== 0 || m < 0)
      throw new RangeError("offset is not uint");
    if (m + d > v)
      throw new RangeError("Trying to access beyond buffer length");
  }
  u.prototype.readUintLE = u.prototype.readUIntLE = function(d, v, w) {
    d = d >>> 0, v = v >>> 0, w || Q(d, v, this.length);
    let T = this[d], C = 1, N = 0;
    for (; ++N < v && (C *= 256); )
      T += this[d + N] * C;
    return T;
  }, u.prototype.readUintBE = u.prototype.readUIntBE = function(d, v, w) {
    d = d >>> 0, v = v >>> 0, w || Q(d, v, this.length);
    let T = this[d + --v], C = 1;
    for (; v > 0 && (C *= 256); )
      T += this[d + --v] * C;
    return T;
  }, u.prototype.readUint8 = u.prototype.readUInt8 = function(d, v) {
    return d = d >>> 0, v || Q(d, 1, this.length), this[d];
  }, u.prototype.readUint16LE = u.prototype.readUInt16LE = function(d, v) {
    return d = d >>> 0, v || Q(d, 2, this.length), this[d] | this[d + 1] << 8;
  }, u.prototype.readUint16BE = u.prototype.readUInt16BE = function(d, v) {
    return d = d >>> 0, v || Q(d, 2, this.length), this[d] << 8 | this[d + 1];
  }, u.prototype.readUint32LE = u.prototype.readUInt32LE = function(d, v) {
    return d = d >>> 0, v || Q(d, 4, this.length), (this[d] | this[d + 1] << 8 | this[d + 2] << 16) + this[d + 3] * 16777216;
  }, u.prototype.readUint32BE = u.prototype.readUInt32BE = function(d, v) {
    return d = d >>> 0, v || Q(d, 4, this.length), this[d] * 16777216 + (this[d + 1] << 16 | this[d + 2] << 8 | this[d + 3]);
  }, u.prototype.readBigUInt64LE = ue(function(d) {
    d = d >>> 0, Ve(d, "offset");
    const v = this[d], w = this[d + 7];
    (v === void 0 || w === void 0) && Ot(d, this.length - 8);
    const T = v + this[++d] * 2 ** 8 + this[++d] * 2 ** 16 + this[++d] * 2 ** 24, C = this[++d] + this[++d] * 2 ** 8 + this[++d] * 2 ** 16 + w * 2 ** 24;
    return BigInt(T) + (BigInt(C) << BigInt(32));
  }), u.prototype.readBigUInt64BE = ue(function(d) {
    d = d >>> 0, Ve(d, "offset");
    const v = this[d], w = this[d + 7];
    (v === void 0 || w === void 0) && Ot(d, this.length - 8);
    const T = v * 2 ** 24 + this[++d] * 2 ** 16 + this[++d] * 2 ** 8 + this[++d], C = this[++d] * 2 ** 24 + this[++d] * 2 ** 16 + this[++d] * 2 ** 8 + w;
    return (BigInt(T) << BigInt(32)) + BigInt(C);
  }), u.prototype.readIntLE = function(d, v, w) {
    d = d >>> 0, v = v >>> 0, w || Q(d, v, this.length);
    let T = this[d], C = 1, N = 0;
    for (; ++N < v && (C *= 256); )
      T += this[d + N] * C;
    return C *= 128, T >= C && (T -= Math.pow(2, 8 * v)), T;
  }, u.prototype.readIntBE = function(d, v, w) {
    d = d >>> 0, v = v >>> 0, w || Q(d, v, this.length);
    let T = v, C = 1, N = this[d + --T];
    for (; T > 0 && (C *= 256); )
      N += this[d + --T] * C;
    return C *= 128, N >= C && (N -= Math.pow(2, 8 * v)), N;
  }, u.prototype.readInt8 = function(d, v) {
    return d = d >>> 0, v || Q(d, 1, this.length), this[d] & 128 ? (255 - this[d] + 1) * -1 : this[d];
  }, u.prototype.readInt16LE = function(d, v) {
    d = d >>> 0, v || Q(d, 2, this.length);
    const w = this[d] | this[d + 1] << 8;
    return w & 32768 ? w | 4294901760 : w;
  }, u.prototype.readInt16BE = function(d, v) {
    d = d >>> 0, v || Q(d, 2, this.length);
    const w = this[d + 1] | this[d] << 8;
    return w & 32768 ? w | 4294901760 : w;
  }, u.prototype.readInt32LE = function(d, v) {
    return d = d >>> 0, v || Q(d, 4, this.length), this[d] | this[d + 1] << 8 | this[d + 2] << 16 | this[d + 3] << 24;
  }, u.prototype.readInt32BE = function(d, v) {
    return d = d >>> 0, v || Q(d, 4, this.length), this[d] << 24 | this[d + 1] << 16 | this[d + 2] << 8 | this[d + 3];
  }, u.prototype.readBigInt64LE = ue(function(d) {
    d = d >>> 0, Ve(d, "offset");
    const v = this[d], w = this[d + 7];
    (v === void 0 || w === void 0) && Ot(d, this.length - 8);
    const T = this[d + 4] + this[d + 5] * 2 ** 8 + this[d + 6] * 2 ** 16 + (w << 24);
    return (BigInt(T) << BigInt(32)) + BigInt(v + this[++d] * 2 ** 8 + this[++d] * 2 ** 16 + this[++d] * 2 ** 24);
  }), u.prototype.readBigInt64BE = ue(function(d) {
    d = d >>> 0, Ve(d, "offset");
    const v = this[d], w = this[d + 7];
    (v === void 0 || w === void 0) && Ot(d, this.length - 8);
    const T = (v << 24) + this[++d] * 2 ** 16 + this[++d] * 2 ** 8 + this[++d];
    return (BigInt(T) << BigInt(32)) + BigInt(this[++d] * 2 ** 24 + this[++d] * 2 ** 16 + this[++d] * 2 ** 8 + w);
  }), u.prototype.readFloatLE = function(d, v) {
    return d = d >>> 0, v || Q(d, 4, this.length), t.read(this, d, !0, 23, 4);
  }, u.prototype.readFloatBE = function(d, v) {
    return d = d >>> 0, v || Q(d, 4, this.length), t.read(this, d, !1, 23, 4);
  }, u.prototype.readDoubleLE = function(d, v) {
    return d = d >>> 0, v || Q(d, 8, this.length), t.read(this, d, !0, 52, 8);
  }, u.prototype.readDoubleBE = function(d, v) {
    return d = d >>> 0, v || Q(d, 8, this.length), t.read(this, d, !1, 52, 8);
  };
  function x(m, d, v, w, T, C) {
    if (!u.isBuffer(m))
      throw new TypeError('"buffer" argument must be a Buffer instance');
    if (d > T || d < C)
      throw new RangeError('"value" argument is out of bounds');
    if (v + w > m.length)
      throw new RangeError("Index out of range");
  }
  u.prototype.writeUintLE = u.prototype.writeUIntLE = function(d, v, w, T) {
    if (d = +d, v = v >>> 0, w = w >>> 0, !T) {
      const ie = Math.pow(2, 8 * w) - 1;
      x(this, d, v, w, ie, 0);
    }
    let C = 1, N = 0;
    for (this[v] = d & 255; ++N < w && (C *= 256); )
      this[v + N] = d / C & 255;
    return v + w;
  }, u.prototype.writeUintBE = u.prototype.writeUIntBE = function(d, v, w, T) {
    if (d = +d, v = v >>> 0, w = w >>> 0, !T) {
      const ie = Math.pow(2, 8 * w) - 1;
      x(this, d, v, w, ie, 0);
    }
    let C = w - 1, N = 1;
    for (this[v + C] = d & 255; --C >= 0 && (N *= 256); )
      this[v + C] = d / N & 255;
    return v + w;
  }, u.prototype.writeUint8 = u.prototype.writeUInt8 = function(d, v, w) {
    return d = +d, v = v >>> 0, w || x(this, d, v, 1, 255, 0), this[v] = d & 255, v + 1;
  }, u.prototype.writeUint16LE = u.prototype.writeUInt16LE = function(d, v, w) {
    return d = +d, v = v >>> 0, w || x(this, d, v, 2, 65535, 0), this[v] = d & 255, this[v + 1] = d >>> 8, v + 2;
  }, u.prototype.writeUint16BE = u.prototype.writeUInt16BE = function(d, v, w) {
    return d = +d, v = v >>> 0, w || x(this, d, v, 2, 65535, 0), this[v] = d >>> 8, this[v + 1] = d & 255, v + 2;
  }, u.prototype.writeUint32LE = u.prototype.writeUInt32LE = function(d, v, w) {
    return d = +d, v = v >>> 0, w || x(this, d, v, 4, 4294967295, 0), this[v + 3] = d >>> 24, this[v + 2] = d >>> 16, this[v + 1] = d >>> 8, this[v] = d & 255, v + 4;
  }, u.prototype.writeUint32BE = u.prototype.writeUInt32BE = function(d, v, w) {
    return d = +d, v = v >>> 0, w || x(this, d, v, 4, 4294967295, 0), this[v] = d >>> 24, this[v + 1] = d >>> 16, this[v + 2] = d >>> 8, this[v + 3] = d & 255, v + 4;
  };
  function Ie(m, d, v, w, T) {
    gt(d, w, T, m, v, 7);
    let C = Number(d & BigInt(4294967295));
    m[v++] = C, C = C >> 8, m[v++] = C, C = C >> 8, m[v++] = C, C = C >> 8, m[v++] = C;
    let N = Number(d >> BigInt(32) & BigInt(4294967295));
    return m[v++] = N, N = N >> 8, m[v++] = N, N = N >> 8, m[v++] = N, N = N >> 8, m[v++] = N, v;
  }
  function A(m, d, v, w, T) {
    gt(d, w, T, m, v, 7);
    let C = Number(d & BigInt(4294967295));
    m[v + 7] = C, C = C >> 8, m[v + 6] = C, C = C >> 8, m[v + 5] = C, C = C >> 8, m[v + 4] = C;
    let N = Number(d >> BigInt(32) & BigInt(4294967295));
    return m[v + 3] = N, N = N >> 8, m[v + 2] = N, N = N >> 8, m[v + 1] = N, N = N >> 8, m[v] = N, v + 8;
  }
  u.prototype.writeBigUInt64LE = ue(function(d, v = 0) {
    return Ie(this, d, v, BigInt(0), BigInt("0xffffffffffffffff"));
  }), u.prototype.writeBigUInt64BE = ue(function(d, v = 0) {
    return A(this, d, v, BigInt(0), BigInt("0xffffffffffffffff"));
  }), u.prototype.writeIntLE = function(d, v, w, T) {
    if (d = +d, v = v >>> 0, !T) {
      const Re = Math.pow(2, 8 * w - 1);
      x(this, d, v, w, Re - 1, -Re);
    }
    let C = 0, N = 1, ie = 0;
    for (this[v] = d & 255; ++C < w && (N *= 256); )
      d < 0 && ie === 0 && this[v + C - 1] !== 0 && (ie = 1), this[v + C] = (d / N >> 0) - ie & 255;
    return v + w;
  }, u.prototype.writeIntBE = function(d, v, w, T) {
    if (d = +d, v = v >>> 0, !T) {
      const Re = Math.pow(2, 8 * w - 1);
      x(this, d, v, w, Re - 1, -Re);
    }
    let C = w - 1, N = 1, ie = 0;
    for (this[v + C] = d & 255; --C >= 0 && (N *= 256); )
      d < 0 && ie === 0 && this[v + C + 1] !== 0 && (ie = 1), this[v + C] = (d / N >> 0) - ie & 255;
    return v + w;
  }, u.prototype.writeInt8 = function(d, v, w) {
    return d = +d, v = v >>> 0, w || x(this, d, v, 1, 127, -128), d < 0 && (d = 255 + d + 1), this[v] = d & 255, v + 1;
  }, u.prototype.writeInt16LE = function(d, v, w) {
    return d = +d, v = v >>> 0, w || x(this, d, v, 2, 32767, -32768), this[v] = d & 255, this[v + 1] = d >>> 8, v + 2;
  }, u.prototype.writeInt16BE = function(d, v, w) {
    return d = +d, v = v >>> 0, w || x(this, d, v, 2, 32767, -32768), this[v] = d >>> 8, this[v + 1] = d & 255, v + 2;
  }, u.prototype.writeInt32LE = function(d, v, w) {
    return d = +d, v = v >>> 0, w || x(this, d, v, 4, 2147483647, -2147483648), this[v] = d & 255, this[v + 1] = d >>> 8, this[v + 2] = d >>> 16, this[v + 3] = d >>> 24, v + 4;
  }, u.prototype.writeInt32BE = function(d, v, w) {
    return d = +d, v = v >>> 0, w || x(this, d, v, 4, 2147483647, -2147483648), d < 0 && (d = 4294967295 + d + 1), this[v] = d >>> 24, this[v + 1] = d >>> 16, this[v + 2] = d >>> 8, this[v + 3] = d & 255, v + 4;
  }, u.prototype.writeBigInt64LE = ue(function(d, v = 0) {
    return Ie(this, d, v, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  }), u.prototype.writeBigInt64BE = ue(function(d, v = 0) {
    return A(this, d, v, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  });
  function D(m, d, v, w, T, C) {
    if (v + w > m.length)
      throw new RangeError("Index out of range");
    if (v < 0)
      throw new RangeError("Index out of range");
  }
  function V(m, d, v, w, T) {
    return d = +d, v = v >>> 0, T || D(m, d, v, 4), t.write(m, d, v, w, 23, 4), v + 4;
  }
  u.prototype.writeFloatLE = function(d, v, w) {
    return V(this, d, v, !0, w);
  }, u.prototype.writeFloatBE = function(d, v, w) {
    return V(this, d, v, !1, w);
  };
  function Z(m, d, v, w, T) {
    return d = +d, v = v >>> 0, T || D(m, d, v, 8), t.write(m, d, v, w, 52, 8), v + 8;
  }
  u.prototype.writeDoubleLE = function(d, v, w) {
    return Z(this, d, v, !0, w);
  }, u.prototype.writeDoubleBE = function(d, v, w) {
    return Z(this, d, v, !1, w);
  }, u.prototype.copy = function(d, v, w, T) {
    if (!u.isBuffer(d))
      throw new TypeError("argument should be a Buffer");
    if (w || (w = 0), !T && T !== 0 && (T = this.length), v >= d.length && (v = d.length), v || (v = 0), T > 0 && T < w && (T = w), T === w || d.length === 0 || this.length === 0)
      return 0;
    if (v < 0)
      throw new RangeError("targetStart out of bounds");
    if (w < 0 || w >= this.length)
      throw new RangeError("Index out of range");
    if (T < 0)
      throw new RangeError("sourceEnd out of bounds");
    T > this.length && (T = this.length), d.length - v < T - w && (T = d.length - v + w);
    const C = T - w;
    return this === d && typeof Uint8Array.prototype.copyWithin == "function" ? this.copyWithin(v, w, T) : Uint8Array.prototype.set.call(
      d,
      this.subarray(w, T),
      v
    ), C;
  }, u.prototype.fill = function(d, v, w, T) {
    if (typeof d == "string") {
      if (typeof v == "string" ? (T = v, v = 0, w = this.length) : typeof w == "string" && (T = w, w = this.length), T !== void 0 && typeof T != "string")
        throw new TypeError("encoding must be a string");
      if (typeof T == "string" && !u.isEncoding(T))
        throw new TypeError("Unknown encoding: " + T);
      if (d.length === 1) {
        const N = d.charCodeAt(0);
        (T === "utf8" && N < 128 || T === "latin1") && (d = N);
      }
    } else
      typeof d == "number" ? d = d & 255 : typeof d == "boolean" && (d = Number(d));
    if (v < 0 || this.length < v || this.length < w)
      throw new RangeError("Out of range index");
    if (w <= v)
      return this;
    v = v >>> 0, w = w === void 0 ? this.length : w >>> 0, d || (d = 0);
    let C;
    if (typeof d == "number")
      for (C = v; C < w; ++C)
        this[C] = d;
    else {
      const N = u.isBuffer(d) ? d : u.from(d, T), ie = N.length;
      if (ie === 0)
        throw new TypeError('The value "' + d + '" is invalid for argument "value"');
      for (C = 0; C < w - v; ++C)
        this[C + v] = N[C % ie];
    }
    return this;
  };
  const X = {};
  function ke(m, d, v) {
    X[m] = class extends v {
      constructor() {
        super(), Object.defineProperty(this, "message", {
          value: d.apply(this, arguments),
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
  ke(
    "ERR_BUFFER_OUT_OF_BOUNDS",
    function(m) {
      return m ? `${m} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
    },
    RangeError
  ), ke(
    "ERR_INVALID_ARG_TYPE",
    function(m, d) {
      return `The "${m}" argument must be of type number. Received type ${typeof d}`;
    },
    TypeError
  ), ke(
    "ERR_OUT_OF_RANGE",
    function(m, d, v) {
      let w = `The value of "${m}" is out of range.`, T = v;
      return Number.isInteger(v) && Math.abs(v) > 2 ** 32 ? T = ut(String(v)) : typeof v == "bigint" && (T = String(v), (v > BigInt(2) ** BigInt(32) || v < -(BigInt(2) ** BigInt(32))) && (T = ut(T)), T += "n"), w += ` It must be ${d}. Received ${T}`, w;
    },
    RangeError
  );
  function ut(m) {
    let d = "", v = m.length;
    const w = m[0] === "-" ? 1 : 0;
    for (; v >= w + 4; v -= 3)
      d = `_${m.slice(v - 3, v)}${d}`;
    return `${m.slice(0, v)}${d}`;
  }
  function Mt(m, d, v) {
    Ve(d, "offset"), (m[d] === void 0 || m[d + v] === void 0) && Ot(d, m.length - (v + 1));
  }
  function gt(m, d, v, w, T, C) {
    if (m > v || m < d) {
      const N = typeof d == "bigint" ? "n" : "";
      let ie;
      throw C > 3 ? d === 0 || d === BigInt(0) ? ie = `>= 0${N} and < 2${N} ** ${(C + 1) * 8}${N}` : ie = `>= -(2${N} ** ${(C + 1) * 8 - 1}${N}) and < 2 ** ${(C + 1) * 8 - 1}${N}` : ie = `>= ${d}${N} and <= ${v}${N}`, new X.ERR_OUT_OF_RANGE("value", ie, m);
    }
    Mt(w, T, C);
  }
  function Ve(m, d) {
    if (typeof m != "number")
      throw new X.ERR_INVALID_ARG_TYPE(d, "number", m);
  }
  function Ot(m, d, v) {
    throw Math.floor(m) !== m ? (Ve(m, v), new X.ERR_OUT_OF_RANGE(v || "offset", "an integer", m)) : d < 0 ? new X.ERR_BUFFER_OUT_OF_BOUNDS() : new X.ERR_OUT_OF_RANGE(
      v || "offset",
      `>= ${v ? 1 : 0} and <= ${d}`,
      m
    );
  }
  const hi = /[^+/0-9A-Za-z-_]/g;
  function g(m) {
    if (m = m.split("=")[0], m = m.trim().replace(hi, ""), m.length < 2)
      return "";
    for (; m.length % 4 !== 0; )
      m = m + "=";
    return m;
  }
  function p(m, d) {
    d = d || 1 / 0;
    let v;
    const w = m.length;
    let T = null;
    const C = [];
    for (let N = 0; N < w; ++N) {
      if (v = m.charCodeAt(N), v > 55295 && v < 57344) {
        if (!T) {
          if (v > 56319) {
            (d -= 3) > -1 && C.push(239, 191, 189);
            continue;
          } else if (N + 1 === w) {
            (d -= 3) > -1 && C.push(239, 191, 189);
            continue;
          }
          T = v;
          continue;
        }
        if (v < 56320) {
          (d -= 3) > -1 && C.push(239, 191, 189), T = v;
          continue;
        }
        v = (T - 55296 << 10 | v - 56320) + 65536;
      } else
        T && (d -= 3) > -1 && C.push(239, 191, 189);
      if (T = null, v < 128) {
        if ((d -= 1) < 0)
          break;
        C.push(v);
      } else if (v < 2048) {
        if ((d -= 2) < 0)
          break;
        C.push(
          v >> 6 | 192,
          v & 63 | 128
        );
      } else if (v < 65536) {
        if ((d -= 3) < 0)
          break;
        C.push(
          v >> 12 | 224,
          v >> 6 & 63 | 128,
          v & 63 | 128
        );
      } else if (v < 1114112) {
        if ((d -= 4) < 0)
          break;
        C.push(
          v >> 18 | 240,
          v >> 12 & 63 | 128,
          v >> 6 & 63 | 128,
          v & 63 | 128
        );
      } else
        throw new Error("Invalid code point");
    }
    return C;
  }
  function _(m) {
    const d = [];
    for (let v = 0; v < m.length; ++v)
      d.push(m.charCodeAt(v) & 255);
    return d;
  }
  function E(m, d) {
    let v, w, T;
    const C = [];
    for (let N = 0; N < m.length && !((d -= 2) < 0); ++N)
      v = m.charCodeAt(N), w = v >> 8, T = v % 256, C.push(T), C.push(w);
    return C;
  }
  function I(m) {
    return r.toByteArray(g(m));
  }
  function U(m, d, v, w) {
    let T;
    for (T = 0; T < w && !(T + v >= d.length || T >= m.length); ++T)
      d[T + v] = m[T];
    return T;
  }
  function F(m, d) {
    return m instanceof d || m != null && m.constructor != null && m.constructor.name != null && m.constructor.name === d.name;
  }
  function oe(m) {
    return m !== m;
  }
  const pe = function() {
    const m = "0123456789abcdef", d = new Array(256);
    for (let v = 0; v < 16; ++v) {
      const w = v * 16;
      for (let T = 0; T < 16; ++T)
        d[w + T] = m[v] + m[T];
    }
    return d;
  }();
  function ue(m) {
    return typeof BigInt > "u" ? Le : m;
  }
  function Le() {
    throw new Error("BigInt not supported");
  }
})(Pd);
var vn = {}, Pc = {}, $B = h && h.__extends || function() {
  var e = function(r, t) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var o in i)
        Object.prototype.hasOwnProperty.call(i, o) && (n[o] = i[o]);
    }, e(r, t);
  };
  return function(r, t) {
    if (typeof t != "function" && t !== null)
      throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
    e(r, t);
    function n() {
      this.constructor = r;
    }
    r.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}();
Object.defineProperty(Pc, "__esModule", { value: !0 });
var Ib = function() {
  function e(r) {
    this.position = 0, this.length = r;
  }
  return e.prototype.getUInt8 = function(r) {
    throw new Error("Not implemented");
  }, e.prototype.getInt8 = function(r) {
    throw new Error("Not implemented");
  }, e.prototype.getFloat64 = function(r) {
    throw new Error("Not implemented");
  }, e.prototype.putUInt8 = function(r, t) {
    throw new Error("Not implemented");
  }, e.prototype.putInt8 = function(r, t) {
    throw new Error("Not implemented");
  }, e.prototype.putFloat64 = function(r, t) {
    throw new Error("Not implemented");
  }, e.prototype.getInt16 = function(r) {
    return this.getInt8(r) << 8 | this.getUInt8(r + 1);
  }, e.prototype.getUInt16 = function(r) {
    return this.getUInt8(r) << 8 | this.getUInt8(r + 1);
  }, e.prototype.getInt32 = function(r) {
    return this.getInt8(r) << 24 | this.getUInt8(r + 1) << 16 | this.getUInt8(r + 2) << 8 | this.getUInt8(r + 3);
  }, e.prototype.getUInt32 = function(r) {
    return this.getUInt8(r) << 24 | this.getUInt8(r + 1) << 16 | this.getUInt8(r + 2) << 8 | this.getUInt8(r + 3);
  }, e.prototype.getInt64 = function(r) {
    return this.getInt8(r) << 56 | this.getUInt8(r + 1) << 48 | this.getUInt8(r + 2) << 40 | this.getUInt8(r + 3) << 32 | this.getUInt8(r + 4) << 24 | this.getUInt8(r + 5) << 16 | this.getUInt8(r + 6) << 8 | this.getUInt8(r + 7);
  }, e.prototype.getSlice = function(r, t) {
    return new jB(r, t, this);
  }, e.prototype.putInt16 = function(r, t) {
    this.putInt8(r, t >> 8), this.putUInt8(r + 1, t & 255);
  }, e.prototype.putUInt16 = function(r, t) {
    this.putUInt8(r, t >> 8 & 255), this.putUInt8(r + 1, t & 255);
  }, e.prototype.putInt32 = function(r, t) {
    this.putInt8(r, t >> 24), this.putUInt8(r + 1, t >> 16 & 255), this.putUInt8(r + 2, t >> 8 & 255), this.putUInt8(r + 3, t & 255);
  }, e.prototype.putUInt32 = function(r, t) {
    this.putUInt8(r, t >> 24 & 255), this.putUInt8(r + 1, t >> 16 & 255), this.putUInt8(r + 2, t >> 8 & 255), this.putUInt8(r + 3, t & 255);
  }, e.prototype.putInt64 = function(r, t) {
    this.putInt8(r, t >> 48), this.putUInt8(r + 1, t >> 42 & 255), this.putUInt8(r + 2, t >> 36 & 255), this.putUInt8(r + 3, t >> 30 & 255), this.putUInt8(r + 4, t >> 24 & 255), this.putUInt8(r + 5, t >> 16 & 255), this.putUInt8(r + 6, t >> 8 & 255), this.putUInt8(r + 7, t & 255);
  }, e.prototype.putBytes = function(r, t) {
    for (var n = 0, i = t.remaining(); n < i; n++)
      this.putUInt8(r + n, t.readUInt8());
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
  }, e.prototype.writeUInt8 = function(r) {
    this.putUInt8(this._updatePos(1), r);
  }, e.prototype.writeInt8 = function(r) {
    this.putInt8(this._updatePos(1), r);
  }, e.prototype.writeInt16 = function(r) {
    this.putInt16(this._updatePos(2), r);
  }, e.prototype.writeInt32 = function(r) {
    this.putInt32(this._updatePos(4), r);
  }, e.prototype.writeUInt32 = function(r) {
    this.putUInt32(this._updatePos(4), r);
  }, e.prototype.writeInt64 = function(r) {
    this.putInt64(this._updatePos(8), r);
  }, e.prototype.writeFloat64 = function(r) {
    this.putFloat64(this._updatePos(8), r);
  }, e.prototype.writeBytes = function(r) {
    this.putBytes(this._updatePos(r.remaining()), r);
  }, e.prototype.readSlice = function(r) {
    return this.getSlice(this._updatePos(r), r);
  }, e.prototype._updatePos = function(r) {
    var t = this.position;
    return this.position += r, t;
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
    for (var r = "", t = 0; t < this.length; t++) {
      var n = this.getUInt8(t).toString(16);
      n.length === 1 && (n = "0" + n), r += n, t !== this.length - 1 && (r += " ");
    }
    return r;
  }, e;
}();
Pc.default = Ib;
var jB = function(e) {
  $B(r, e);
  function r(t, n, i) {
    var o = e.call(this, n) || this;
    return o._start = t, o._inner = i, o;
  }
  return r.prototype.putUInt8 = function(t, n) {
    this._inner.putUInt8(this._start + t, n);
  }, r.prototype.getUInt8 = function(t) {
    return this._inner.getUInt8(this._start + t);
  }, r.prototype.putInt8 = function(t, n) {
    this._inner.putInt8(this._start + t, n);
  }, r.prototype.putFloat64 = function(t, n) {
    this._inner.putFloat64(this._start + t, n);
  }, r.prototype.getInt8 = function(t) {
    return this._inner.getInt8(this._start + t);
  }, r.prototype.getFloat64 = function(t) {
    return this._inner.getFloat64(this._start + t);
  }, r;
}(Ib), NB = h && h.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(vn, "__esModule", { value: !0 });
vn.BaseBuffer = void 0;
var Ab = NB(Pc);
vn.BaseBuffer = Ab.default;
vn.default = Ab.default;
var MB = h && h.__extends || function() {
  var e = function(r, t) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var o in i)
        Object.prototype.hasOwnProperty.call(i, o) && (n[o] = i[o]);
    }, e(r, t);
  };
  return function(r, t) {
    if (typeof t != "function" && t !== null)
      throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
    e(r, t);
    function n() {
      this.constructor = r;
    }
    r.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}(), Rb = h && h.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(ur, "__esModule", { value: !0 });
ur.alloc = void 0;
var da = Rb(Pd), kB = Rb(vn), Cb = function(e) {
  MB(r, e);
  function r(t) {
    var n = this, i = UB(t);
    return n = e.call(this, i.length) || this, n._buffer = i, n;
  }
  return r.prototype.getUInt8 = function(t) {
    return this._buffer.readUInt8(t);
  }, r.prototype.getInt8 = function(t) {
    return this._buffer.readInt8(t);
  }, r.prototype.getFloat64 = function(t) {
    return this._buffer.readDoubleBE(t);
  }, r.prototype.putUInt8 = function(t, n) {
    this._buffer.writeUInt8(n, t);
  }, r.prototype.putInt8 = function(t, n) {
    this._buffer.writeInt8(n, t);
  }, r.prototype.putFloat64 = function(t, n) {
    this._buffer.writeDoubleBE(n, t);
  }, r.prototype.putBytes = function(t, n) {
    if (n instanceof r) {
      var i = Math.min(n.length - n.position, this.length - t);
      n._buffer.copy(this._buffer, t, n.position, n.position + i), n.position += i;
    } else
      e.prototype.putBytes.call(this, t, n);
  }, r.prototype.getSlice = function(t, n) {
    return new r(this._buffer.slice(t, t + n));
  }, r;
}(kB.default);
ur.default = Cb;
function DB(e) {
  return new Cb(e);
}
ur.alloc = DB;
function UB(e) {
  return e instanceof da.default.Buffer ? e : typeof e == "number" && typeof da.default.Buffer.alloc == "function" ? da.default.Buffer.alloc(e) : new da.default.Buffer(e);
}
var LB = h && h.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(Td, "__esModule", { value: !0 });
var hp = LB(ur), wn = te, $b = wn.internal.util, jb = $b.ENCRYPTION_OFF, FB = $b.ENCRYPTION_ON, vp = 1, xB = 3, BB = function() {
  function e(r, t, n) {
    t === void 0 && (t = QB), n === void 0 && (n = function(s) {
      return new WebSocket(s);
    });
    var i = this;
    this._open = !0, this._pending = [], this._error = null, this._handleConnectionError = this._handleConnectionError.bind(this), this._config = r, this._receiveTimeout = null, this._receiveTimeoutStarted = !1, this._receiveTimeoutId = null;
    var o = zB(r, t), a = o.scheme, u = o.error;
    if (u) {
      this._error = u;
      return;
    }
    this._ws = WB(a, r.address, n), this._ws.binaryType = "arraybuffer";
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
        var l = new hp.default(s.data);
        c.onmessage(l);
      }
    }, this._ws.onerror = this._handleConnectionError, this._connectionTimeoutFired = !1, this._connectionTimeoutId = this._setupConnectionTimeout();
  }
  return e.prototype._handleConnectionError = function() {
    if (this._connectionTimeoutFired) {
      this._error = (0, wn.newError)("Failed to establish connection in ".concat(this._config.connectionTimeout, "ms"), this._config.connectionErrorCode), this.onerror && this.onerror(this._error);
      return;
    }
    this._open && !this._timedout && (this._error = (0, wn.newError)("WebSocket connection failure. Due to security constraints in your web browser, the reason for the failure is not available to this Neo4j Driver. Please use your browsers development console to determine the root cause of the failure. Common reasons include the database being unavailable, using the wrong connection URL or temporary network problems. If you have enabled encryption, ensure your browser is configured to trust the certificate Neo4j is configured to use. WebSocket `readyState` is: " + this._ws.readyState, this._config.connectionErrorCode), this.onerror && this.onerror(this._error));
  }, e.prototype.write = function(r) {
    if (this._pending !== null)
      this._pending.push(r);
    else if (r instanceof hp.default)
      try {
        this._ws.send(r._buffer);
      } catch (t) {
        if (this._ws.readyState !== vp)
          this._handleConnectionError();
        else
          throw t;
      }
    else
      throw (0, wn.newError)("Don't know how to send buffer: " + r);
  }, e.prototype.close = function() {
    var r = this;
    return new Promise(function(t, n) {
      r._ws && r._ws.readyState !== xB ? (r._open = !1, r.stopReceiveTimeout(), r._clearConnectionTimeout(), r._ws.onclose = function() {
        return t();
      }, r._ws.close()) : t();
    });
  }, e.prototype.setupReceiveTimeout = function(r) {
    this._receiveTimeout = r;
  }, e.prototype.stopReceiveTimeout = function() {
    this._receiveTimeout !== null && this._receiveTimeoutStarted && (this._receiveTimeoutStarted = !1, this._receiveTimeoutId != null && clearTimeout(this._receiveTimeoutId), this._receiveTimeoutId = null);
  }, e.prototype.startReceiveTimeout = function() {
    this._open && this._receiveTimeout !== null && !this._receiveTimeoutStarted && (this._receiveTimeoutStarted = !0, this._resetTimeout());
  }, e.prototype._resetTimeout = function() {
    var r = this;
    !this._receiveTimeoutStarted || (this._receiveTimeoutId !== null && clearTimeout(this._receiveTimeoutId), this._receiveTimeoutId = setTimeout(function() {
      r._receiveTimeoutId = null, r._timedout = !0, r.stopReceiveTimeout(), r._error = (0, wn.newError)("Connection lost. Server didn't respond in ".concat(r._receiveTimeout, "ms"), r._config.connectionErrorCode), r.close(), r.onerror && r.onerror(r._error);
    }, this._receiveTimeout));
  }, e.prototype._setupConnectionTimeout = function() {
    var r = this, t = this._config.connectionTimeout;
    if (t) {
      var n = this._ws;
      return setTimeout(function() {
        n.readyState !== vp && (r._connectionTimeoutFired = !0, n.close());
      }, t);
    }
    return null;
  }, e.prototype._clearConnectionTimeout = function() {
    var r = this._connectionTimeoutId;
    (r || r === 0) && (this._connectionTimeoutFired = !1, this._connectionTimeoutId = null, clearTimeout(r));
  }, e;
}();
Td.default = BB;
function WB(e, r, t) {
  var n = e + "://" + r.asHostPort();
  try {
    return t(n);
  } catch (o) {
    if (VB(o, r)) {
      var i = HB(e, r);
      return t(i);
    } else
      throw o;
  }
}
function VB(e, r) {
  return e.name === "SyntaxError" && qB(r.asHostPort());
}
function qB(e) {
  return e.charAt(0) === "[" && e.indexOf("]") !== -1;
}
function HB(e, r) {
  var t = r.host().replace(/:/g, "-"), n = t.replace("%", "s"), i = n + ".ipv6-literal.net";
  return "".concat(e, "://").concat(i, ":").concat(r.port());
}
function zB(e, r) {
  var t = YB(e), n = GB(e), i = e.trust, o = KB(r);
  if (ZB(t, n, o), n)
    return { scheme: "ws", error: null };
  if (o)
    return { scheme: "wss", error: null };
  if (t) {
    if (!i || i === "TRUST_SYSTEM_CA_SIGNED_CERTIFICATES")
      return { scheme: "wss", error: null };
    var a = (0, wn.newError)("The browser version of this driver only supports one trust strategy, 'TRUST_SYSTEM_CA_SIGNED_CERTIFICATES'. " + i + ' is not supported. Please either use TRUST_SYSTEM_CA_SIGNED_CERTIFICATES or disable encryption by setting `encrypted:"' + jb + '"` in the driver configuration.');
    return { scheme: null, error: a };
  }
  return { scheme: "ws", error: null };
}
function YB(e) {
  return e.encrypted === !0 || e.encrypted === FB;
}
function GB(e) {
  return e.encrypted === !1 || e.encrypted === jb;
}
function KB(e) {
  var r = typeof e == "function" ? e() : "";
  return r && r.toLowerCase().indexOf("https") >= 0;
}
function ZB(e, r, t) {
  t === null || (e && !t ? console.warn("Neo4j driver is configured to use secure WebSocket on a HTTP web page. WebSockets might not work in a mixed content environment. Please consider configuring driver to not use encryption.") : r && t && console.warn("Neo4j driver is configured to use insecure WebSocket on a HTTPS web page. WebSockets might not work in a mixed content environment. Please consider configuring driver to use encryption."));
}
function QB() {
  return typeof window < "u" && window.location ? window.location.protocol : null;
}
var Id = {}, XB = h && h.__extends || function() {
  var e = function(r, t) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var o in i)
        Object.prototype.hasOwnProperty.call(i, o) && (n[o] = i[o]);
    }, e(r, t);
  };
  return function(r, t) {
    if (typeof t != "function" && t !== null)
      throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
    e(r, t);
    function n() {
      this.constructor = r;
    }
    r.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}();
Object.defineProperty(Id, "__esModule", { value: !0 });
var JB = te, e4 = JB.internal.resolver.BaseHostNameResolver, t4 = function(e) {
  XB(r, e);
  function r() {
    return e !== null && e.apply(this, arguments) || this;
  }
  return r.prototype.resolve = function(t) {
    return this._resolveToItself(t);
  }, r;
}(e4);
Id.default = t4;
var Nb = h && h.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(Dn, "__esModule", { value: !0 });
Dn.HostNameResolver = Dn.Channel = void 0;
var r4 = Nb(Td), n4 = Nb(Id);
Dn.Channel = r4.default;
Dn.HostNameResolver = n4.default;
var Un = {}, Ad = {}, i4 = h && h.__extends || function() {
  var e = function(r, t) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var o in i)
        Object.prototype.hasOwnProperty.call(i, o) && (n[o] = i[o]);
    }, e(r, t);
  };
  return function(r, t) {
    if (typeof t != "function" && t !== null)
      throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
    e(r, t);
    function n() {
      this.constructor = r;
    }
    r.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}();
Object.defineProperty(Ad, "__esModule", { value: !0 });
var o4 = vn, a4 = ur, u4 = function(e) {
  i4(r, e);
  function r(t) {
    for (var n = this, i = 0, o = 0; o < t.length; o++)
      i += t[o].length;
    return n = e.call(this, i) || this, n._buffers = t, n;
  }
  return r.prototype.getUInt8 = function(t) {
    for (var n = 0; n < this._buffers.length; n++) {
      var i = this._buffers[n];
      if (t >= i.length)
        t -= i.length;
      else
        return i.getUInt8(t);
    }
  }, r.prototype.getInt8 = function(t) {
    for (var n = 0; n < this._buffers.length; n++) {
      var i = this._buffers[n];
      if (t >= i.length)
        t -= i.length;
      else
        return i.getInt8(t);
    }
  }, r.prototype.getFloat64 = function(t) {
    for (var n = (0, a4.alloc)(8), i = 0; i < 8; i++)
      n.putUInt8(i, this.getUInt8(t + i));
    return n.getFloat64(0);
  }, r;
}(o4.BaseBuffer);
Ad.default = u4;
var s4 = h && h.__extends || function() {
  var e = function(r, t) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var o in i)
        Object.prototype.hasOwnProperty.call(i, o) && (n[o] = i[o]);
    }, e(r, t);
  };
  return function(r, t) {
    if (typeof t != "function" && t !== null)
      throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
    e(r, t);
    function n() {
      this.constructor = r;
    }
    r.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}(), Mb = h && h.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(Un, "__esModule", { value: !0 });
Un.Dechunker = Un.Chunker = void 0;
var c4 = Mb(Pc), pp = ur, l4 = Mb(Ad), ha = 2, f4 = 0, d4 = 1400, h4 = function(e) {
  s4(r, e);
  function r(t, n) {
    var i = e.call(this, 0) || this;
    return i._bufferSize = n || d4, i._ch = t, i._buffer = (0, pp.alloc)(i._bufferSize), i._currentChunkStart = 0, i._chunkOpen = !1, i;
  }
  return r.prototype.putUInt8 = function(t, n) {
    this._ensure(1), this._buffer.writeUInt8(n);
  }, r.prototype.putInt8 = function(t, n) {
    this._ensure(1), this._buffer.writeInt8(n);
  }, r.prototype.putFloat64 = function(t, n) {
    this._ensure(8), this._buffer.writeFloat64(n);
  }, r.prototype.putBytes = function(t, n) {
    for (; n.remaining() > 0; )
      this._ensure(1), this._buffer.remaining() > n.remaining() ? this._buffer.writeBytes(n) : this._buffer.writeBytes(n.readSlice(this._buffer.remaining()));
    return this;
  }, r.prototype.flush = function() {
    if (this._buffer.position > 0) {
      this._closeChunkIfOpen();
      var t = this._buffer;
      this._buffer = null, this._ch.write(t.getSlice(0, t.position)), this._buffer = (0, pp.alloc)(this._bufferSize), this._chunkOpen = !1;
    }
    return this;
  }, r.prototype.messageBoundary = function() {
    this._closeChunkIfOpen(), this._buffer.remaining() < ha && this.flush(), this._buffer.writeInt16(f4);
  }, r.prototype._ensure = function(t) {
    var n = this._chunkOpen ? t : t + ha;
    this._buffer.remaining() < n && this.flush(), this._chunkOpen || (this._currentChunkStart = this._buffer.position, this._buffer.position = this._buffer.position + ha, this._chunkOpen = !0);
  }, r.prototype._closeChunkIfOpen = function() {
    if (this._chunkOpen) {
      var t = this._buffer.position - (this._currentChunkStart + ha);
      this._buffer.putUInt16(this._currentChunkStart, t), this._chunkOpen = !1;
    }
  }, r;
}(c4.default);
Un.Chunker = h4;
var v4 = function() {
  function e() {
    this._currentMessage = [], this._partialChunkHeader = 0, this._state = this.AWAITING_CHUNK;
  }
  return e.prototype.AWAITING_CHUNK = function(r) {
    return r.remaining() >= 2 ? this._onHeader(r.readUInt16()) : (this._partialChunkHeader = r.readUInt8() << 8, this.IN_HEADER);
  }, e.prototype.IN_HEADER = function(r) {
    return this._onHeader((this._partialChunkHeader | r.readUInt8()) & 65535);
  }, e.prototype.IN_CHUNK = function(r) {
    return this._chunkSize <= r.remaining() ? (this._currentMessage.push(r.readSlice(this._chunkSize)), this.AWAITING_CHUNK) : (this._chunkSize -= r.remaining(), this._currentMessage.push(r.readSlice(r.remaining())), this.IN_CHUNK);
  }, e.prototype.CLOSED = function(r) {
  }, e.prototype._onHeader = function(r) {
    if (r === 0) {
      var t = void 0;
      switch (this._currentMessage.length) {
        case 0:
          return this.AWAITING_CHUNK;
        case 1:
          t = this._currentMessage[0];
          break;
        default:
          t = new l4.default(this._currentMessage);
          break;
      }
      return this._currentMessage = [], this.onmessage(t), this.AWAITING_CHUNK;
    } else
      return this._chunkSize = r, this.IN_CHUNK;
  }, e.prototype.write = function(r) {
    for (; r.hasRemaining(); )
      this._state = this._state(r);
  }, e;
}();
Un.Dechunker = v4;
var Rd = {};
Object.defineProperty(Rd, "__esModule", { value: !0 });
var Ic = te, kb = Ic.internal.util, p4 = kb.ENCRYPTION_OFF, _4 = kb.ENCRYPTION_ON, y4 = Ic.error.SERVICE_UNAVAILABLE, _p = [
  null,
  void 0,
  !0,
  !1,
  _4,
  p4
], yp = [
  null,
  void 0,
  "TRUST_ALL_CERTIFICATES",
  "TRUST_CUSTOM_CA_SIGNED_CERTIFICATES",
  "TRUST_SYSTEM_CA_SIGNED_CERTIFICATES"
], m4 = function() {
  function e(r, t, n) {
    this.address = r, this.encrypted = b4(t), this.trust = g4(t), this.trustedCertificates = O4(t), this.knownHostsPath = w4(t), this.connectionErrorCode = n || y4, this.connectionTimeout = t.connectionTimeout;
  }
  return e;
}();
Rd.default = m4;
function b4(e) {
  var r = e.encrypted;
  if (_p.indexOf(r) === -1)
    throw (0, Ic.newError)("Illegal value of the encrypted setting ".concat(r, ". Expected one of ").concat(_p));
  return r;
}
function g4(e) {
  var r = e.trust;
  if (yp.indexOf(r) === -1)
    throw (0, Ic.newError)("Illegal value of the trust setting ".concat(r, ". Expected one of ").concat(yp));
  return r;
}
function O4(e) {
  return e.trustedCertificates || [];
}
function w4(e) {
  return e.knownHosts || null;
}
var Cd = {}, Db = {}, _f = { exports: {} }, Ub = {};
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
(function(e) {
  var r = Vo, t = Tc, n = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
  e.Buffer = u, e.SlowBuffer = $, e.INSPECT_MAX_BYTES = 50;
  var i = 2147483647;
  e.kMaxLength = i, u.TYPED_ARRAY_SUPPORT = o(), !u.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error(
    "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
  );
  function o() {
    try {
      var g = new Uint8Array(1), p = { foo: function() {
        return 42;
      } };
      return Object.setPrototypeOf(p, Uint8Array.prototype), Object.setPrototypeOf(g, p), g.foo() === 42;
    } catch {
      return !1;
    }
  }
  Object.defineProperty(u.prototype, "parent", {
    enumerable: !0,
    get: function() {
      if (!!u.isBuffer(this))
        return this.buffer;
    }
  }), Object.defineProperty(u.prototype, "offset", {
    enumerable: !0,
    get: function() {
      if (!!u.isBuffer(this))
        return this.byteOffset;
    }
  });
  function a(g) {
    if (g > i)
      throw new RangeError('The value "' + g + '" is invalid for option "size"');
    var p = new Uint8Array(g);
    return Object.setPrototypeOf(p, u.prototype), p;
  }
  function u(g, p, _) {
    if (typeof g == "number") {
      if (typeof p == "string")
        throw new TypeError(
          'The "string" argument must be of type string. Received type number'
        );
      return f(g);
    }
    return c(g, p, _);
  }
  u.poolSize = 8192;
  function c(g, p, _) {
    if (typeof g == "string")
      return y(g, p);
    if (ArrayBuffer.isView(g))
      return O(g);
    if (g == null)
      throw new TypeError(
        "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof g
      );
    if (Ve(g, ArrayBuffer) || g && Ve(g.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (Ve(g, SharedArrayBuffer) || g && Ve(g.buffer, SharedArrayBuffer)))
      return S(g, p, _);
    if (typeof g == "number")
      throw new TypeError(
        'The "value" argument must not be of type number. Received type number'
      );
    var E = g.valueOf && g.valueOf();
    if (E != null && E !== g)
      return u.from(E, p, _);
    var I = P(g);
    if (I)
      return I;
    if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof g[Symbol.toPrimitive] == "function")
      return u.from(
        g[Symbol.toPrimitive]("string"),
        p,
        _
      );
    throw new TypeError(
      "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof g
    );
  }
  u.from = function(g, p, _) {
    return c(g, p, _);
  }, Object.setPrototypeOf(u.prototype, Uint8Array.prototype), Object.setPrototypeOf(u, Uint8Array);
  function s(g) {
    if (typeof g != "number")
      throw new TypeError('"size" argument must be of type number');
    if (g < 0)
      throw new RangeError('The value "' + g + '" is invalid for option "size"');
  }
  function l(g, p, _) {
    return s(g), g <= 0 ? a(g) : p !== void 0 ? typeof _ == "string" ? a(g).fill(p, _) : a(g).fill(p) : a(g);
  }
  u.alloc = function(g, p, _) {
    return l(g, p, _);
  };
  function f(g) {
    return s(g), a(g < 0 ? 0 : R(g) | 0);
  }
  u.allocUnsafe = function(g) {
    return f(g);
  }, u.allocUnsafeSlow = function(g) {
    return f(g);
  };
  function y(g, p) {
    if ((typeof p != "string" || p === "") && (p = "utf8"), !u.isEncoding(p))
      throw new TypeError("Unknown encoding: " + p);
    var _ = j(g, p) | 0, E = a(_), I = E.write(g, p);
    return I !== _ && (E = E.slice(0, I)), E;
  }
  function b(g) {
    for (var p = g.length < 0 ? 0 : R(g.length) | 0, _ = a(p), E = 0; E < p; E += 1)
      _[E] = g[E] & 255;
    return _;
  }
  function O(g) {
    if (Ve(g, Uint8Array)) {
      var p = new Uint8Array(g);
      return S(p.buffer, p.byteOffset, p.byteLength);
    }
    return b(g);
  }
  function S(g, p, _) {
    if (p < 0 || g.byteLength < p)
      throw new RangeError('"offset" is outside of buffer bounds');
    if (g.byteLength < p + (_ || 0))
      throw new RangeError('"length" is outside of buffer bounds');
    var E;
    return p === void 0 && _ === void 0 ? E = new Uint8Array(g) : _ === void 0 ? E = new Uint8Array(g, p) : E = new Uint8Array(g, p, _), Object.setPrototypeOf(E, u.prototype), E;
  }
  function P(g) {
    if (u.isBuffer(g)) {
      var p = R(g.length) | 0, _ = a(p);
      return _.length === 0 || g.copy(_, 0, 0, p), _;
    }
    if (g.length !== void 0)
      return typeof g.length != "number" || Ot(g.length) ? a(0) : b(g);
    if (g.type === "Buffer" && Array.isArray(g.data))
      return b(g.data);
  }
  function R(g) {
    if (g >= i)
      throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + i.toString(16) + " bytes");
    return g | 0;
  }
  function $(g) {
    return +g != g && (g = 0), u.alloc(+g);
  }
  u.isBuffer = function(p) {
    return p != null && p._isBuffer === !0 && p !== u.prototype;
  }, u.compare = function(p, _) {
    if (Ve(p, Uint8Array) && (p = u.from(p, p.offset, p.byteLength)), Ve(_, Uint8Array) && (_ = u.from(_, _.offset, _.byteLength)), !u.isBuffer(p) || !u.isBuffer(_))
      throw new TypeError(
        'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
      );
    if (p === _)
      return 0;
    for (var E = p.length, I = _.length, U = 0, F = Math.min(E, I); U < F; ++U)
      if (p[U] !== _[U]) {
        E = p[U], I = _[U];
        break;
      }
    return E < I ? -1 : I < E ? 1 : 0;
  }, u.isEncoding = function(p) {
    switch (String(p).toLowerCase()) {
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
  }, u.concat = function(p, _) {
    if (!Array.isArray(p))
      throw new TypeError('"list" argument must be an Array of Buffers');
    if (p.length === 0)
      return u.alloc(0);
    var E;
    if (_ === void 0)
      for (_ = 0, E = 0; E < p.length; ++E)
        _ += p[E].length;
    var I = u.allocUnsafe(_), U = 0;
    for (E = 0; E < p.length; ++E) {
      var F = p[E];
      if (Ve(F, Uint8Array))
        U + F.length > I.length ? u.from(F).copy(I, U) : Uint8Array.prototype.set.call(
          I,
          F,
          U
        );
      else if (u.isBuffer(F))
        F.copy(I, U);
      else
        throw new TypeError('"list" argument must be an Array of Buffers');
      U += F.length;
    }
    return I;
  };
  function j(g, p) {
    if (u.isBuffer(g))
      return g.length;
    if (ArrayBuffer.isView(g) || Ve(g, ArrayBuffer))
      return g.byteLength;
    if (typeof g != "string")
      throw new TypeError(
        'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof g
      );
    var _ = g.length, E = arguments.length > 2 && arguments[2] === !0;
    if (!E && _ === 0)
      return 0;
    for (var I = !1; ; )
      switch (p) {
        case "ascii":
        case "latin1":
        case "binary":
          return _;
        case "utf8":
        case "utf-8":
          return X(g).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return _ * 2;
        case "hex":
          return _ >>> 1;
        case "base64":
          return Mt(g).length;
        default:
          if (I)
            return E ? -1 : X(g).length;
          p = ("" + p).toLowerCase(), I = !0;
      }
  }
  u.byteLength = j;
  function k(g, p, _) {
    var E = !1;
    if ((p === void 0 || p < 0) && (p = 0), p > this.length || ((_ === void 0 || _ > this.length) && (_ = this.length), _ <= 0) || (_ >>>= 0, p >>>= 0, _ <= p))
      return "";
    for (g || (g = "utf8"); ; )
      switch (g) {
        case "hex":
          return ve(this, p, _);
        case "utf8":
        case "utf-8":
          return he(this, p, _);
        case "ascii":
          return ne(this, p, _);
        case "latin1":
        case "binary":
          return G(this, p, _);
        case "base64":
          return be(this, p, _);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return We(this, p, _);
        default:
          if (E)
            throw new TypeError("Unknown encoding: " + g);
          g = (g + "").toLowerCase(), E = !0;
      }
  }
  u.prototype._isBuffer = !0;
  function L(g, p, _) {
    var E = g[p];
    g[p] = g[_], g[_] = E;
  }
  u.prototype.swap16 = function() {
    var p = this.length;
    if (p % 2 !== 0)
      throw new RangeError("Buffer size must be a multiple of 16-bits");
    for (var _ = 0; _ < p; _ += 2)
      L(this, _, _ + 1);
    return this;
  }, u.prototype.swap32 = function() {
    var p = this.length;
    if (p % 4 !== 0)
      throw new RangeError("Buffer size must be a multiple of 32-bits");
    for (var _ = 0; _ < p; _ += 4)
      L(this, _, _ + 3), L(this, _ + 1, _ + 2);
    return this;
  }, u.prototype.swap64 = function() {
    var p = this.length;
    if (p % 8 !== 0)
      throw new RangeError("Buffer size must be a multiple of 64-bits");
    for (var _ = 0; _ < p; _ += 8)
      L(this, _, _ + 7), L(this, _ + 1, _ + 6), L(this, _ + 2, _ + 5), L(this, _ + 3, _ + 4);
    return this;
  }, u.prototype.toString = function() {
    var p = this.length;
    return p === 0 ? "" : arguments.length === 0 ? he(this, 0, p) : k.apply(this, arguments);
  }, u.prototype.toLocaleString = u.prototype.toString, u.prototype.equals = function(p) {
    if (!u.isBuffer(p))
      throw new TypeError("Argument must be a Buffer");
    return this === p ? !0 : u.compare(this, p) === 0;
  }, u.prototype.inspect = function() {
    var p = "", _ = e.INSPECT_MAX_BYTES;
    return p = this.toString("hex", 0, _).replace(/(.{2})/g, "$1 ").trim(), this.length > _ && (p += " ... "), "<Buffer " + p + ">";
  }, n && (u.prototype[n] = u.prototype.inspect), u.prototype.compare = function(p, _, E, I, U) {
    if (Ve(p, Uint8Array) && (p = u.from(p, p.offset, p.byteLength)), !u.isBuffer(p))
      throw new TypeError(
        'The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof p
      );
    if (_ === void 0 && (_ = 0), E === void 0 && (E = p ? p.length : 0), I === void 0 && (I = 0), U === void 0 && (U = this.length), _ < 0 || E > p.length || I < 0 || U > this.length)
      throw new RangeError("out of range index");
    if (I >= U && _ >= E)
      return 0;
    if (I >= U)
      return -1;
    if (_ >= E)
      return 1;
    if (_ >>>= 0, E >>>= 0, I >>>= 0, U >>>= 0, this === p)
      return 0;
    for (var F = U - I, oe = E - _, pe = Math.min(F, oe), ue = this.slice(I, U), Le = p.slice(_, E), m = 0; m < pe; ++m)
      if (ue[m] !== Le[m]) {
        F = ue[m], oe = Le[m];
        break;
      }
    return F < oe ? -1 : oe < F ? 1 : 0;
  };
  function Y(g, p, _, E, I) {
    if (g.length === 0)
      return -1;
    if (typeof _ == "string" ? (E = _, _ = 0) : _ > 2147483647 ? _ = 2147483647 : _ < -2147483648 && (_ = -2147483648), _ = +_, Ot(_) && (_ = I ? 0 : g.length - 1), _ < 0 && (_ = g.length + _), _ >= g.length) {
      if (I)
        return -1;
      _ = g.length - 1;
    } else if (_ < 0)
      if (I)
        _ = 0;
      else
        return -1;
    if (typeof p == "string" && (p = u.from(p, E)), u.isBuffer(p))
      return p.length === 0 ? -1 : ee(g, p, _, E, I);
    if (typeof p == "number")
      return p = p & 255, typeof Uint8Array.prototype.indexOf == "function" ? I ? Uint8Array.prototype.indexOf.call(g, p, _) : Uint8Array.prototype.lastIndexOf.call(g, p, _) : ee(g, [p], _, E, I);
    throw new TypeError("val must be string, number or Buffer");
  }
  function ee(g, p, _, E, I) {
    var U = 1, F = g.length, oe = p.length;
    if (E !== void 0 && (E = String(E).toLowerCase(), E === "ucs2" || E === "ucs-2" || E === "utf16le" || E === "utf-16le")) {
      if (g.length < 2 || p.length < 2)
        return -1;
      U = 2, F /= 2, oe /= 2, _ /= 2;
    }
    function pe(v, w) {
      return U === 1 ? v[w] : v.readUInt16BE(w * U);
    }
    var ue;
    if (I) {
      var Le = -1;
      for (ue = _; ue < F; ue++)
        if (pe(g, ue) === pe(p, Le === -1 ? 0 : ue - Le)) {
          if (Le === -1 && (Le = ue), ue - Le + 1 === oe)
            return Le * U;
        } else
          Le !== -1 && (ue -= ue - Le), Le = -1;
    } else
      for (_ + oe > F && (_ = F - oe), ue = _; ue >= 0; ue--) {
        for (var m = !0, d = 0; d < oe; d++)
          if (pe(g, ue + d) !== pe(p, d)) {
            m = !1;
            break;
          }
        if (m)
          return ue;
      }
    return -1;
  }
  u.prototype.includes = function(p, _, E) {
    return this.indexOf(p, _, E) !== -1;
  }, u.prototype.indexOf = function(p, _, E) {
    return Y(this, p, _, E, !0);
  }, u.prototype.lastIndexOf = function(p, _, E) {
    return Y(this, p, _, E, !1);
  };
  function le(g, p, _, E) {
    _ = Number(_) || 0;
    var I = g.length - _;
    E ? (E = Number(E), E > I && (E = I)) : E = I;
    var U = p.length;
    E > U / 2 && (E = U / 2);
    for (var F = 0; F < E; ++F) {
      var oe = parseInt(p.substr(F * 2, 2), 16);
      if (Ot(oe))
        return F;
      g[_ + F] = oe;
    }
    return F;
  }
  function me(g, p, _, E) {
    return gt(X(p, g.length - _), g, _, E);
  }
  function Me(g, p, _, E) {
    return gt(ke(p), g, _, E);
  }
  function Pe(g, p, _, E) {
    return gt(Mt(p), g, _, E);
  }
  function Ue(g, p, _, E) {
    return gt(ut(p, g.length - _), g, _, E);
  }
  u.prototype.write = function(p, _, E, I) {
    if (_ === void 0)
      I = "utf8", E = this.length, _ = 0;
    else if (E === void 0 && typeof _ == "string")
      I = _, E = this.length, _ = 0;
    else if (isFinite(_))
      _ = _ >>> 0, isFinite(E) ? (E = E >>> 0, I === void 0 && (I = "utf8")) : (I = E, E = void 0);
    else
      throw new Error(
        "Buffer.write(string, encoding, offset[, length]) is no longer supported"
      );
    var U = this.length - _;
    if ((E === void 0 || E > U) && (E = U), p.length > 0 && (E < 0 || _ < 0) || _ > this.length)
      throw new RangeError("Attempt to write outside buffer bounds");
    I || (I = "utf8");
    for (var F = !1; ; )
      switch (I) {
        case "hex":
          return le(this, p, _, E);
        case "utf8":
        case "utf-8":
          return me(this, p, _, E);
        case "ascii":
        case "latin1":
        case "binary":
          return Me(this, p, _, E);
        case "base64":
          return Pe(this, p, _, E);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return Ue(this, p, _, E);
        default:
          if (F)
            throw new TypeError("Unknown encoding: " + I);
          I = ("" + I).toLowerCase(), F = !0;
      }
  }, u.prototype.toJSON = function() {
    return {
      type: "Buffer",
      data: Array.prototype.slice.call(this._arr || this, 0)
    };
  };
  function be(g, p, _) {
    return p === 0 && _ === g.length ? r.fromByteArray(g) : r.fromByteArray(g.slice(p, _));
  }
  function he(g, p, _) {
    _ = Math.min(g.length, _);
    for (var E = [], I = p; I < _; ) {
      var U = g[I], F = null, oe = U > 239 ? 4 : U > 223 ? 3 : U > 191 ? 2 : 1;
      if (I + oe <= _) {
        var pe, ue, Le, m;
        switch (oe) {
          case 1:
            U < 128 && (F = U);
            break;
          case 2:
            pe = g[I + 1], (pe & 192) === 128 && (m = (U & 31) << 6 | pe & 63, m > 127 && (F = m));
            break;
          case 3:
            pe = g[I + 1], ue = g[I + 2], (pe & 192) === 128 && (ue & 192) === 128 && (m = (U & 15) << 12 | (pe & 63) << 6 | ue & 63, m > 2047 && (m < 55296 || m > 57343) && (F = m));
            break;
          case 4:
            pe = g[I + 1], ue = g[I + 2], Le = g[I + 3], (pe & 192) === 128 && (ue & 192) === 128 && (Le & 192) === 128 && (m = (U & 15) << 18 | (pe & 63) << 12 | (ue & 63) << 6 | Le & 63, m > 65535 && m < 1114112 && (F = m));
        }
      }
      F === null ? (F = 65533, oe = 1) : F > 65535 && (F -= 65536, E.push(F >>> 10 & 1023 | 55296), F = 56320 | F & 1023), E.push(F), I += oe;
    }
    return re(E);
  }
  var q = 4096;
  function re(g) {
    var p = g.length;
    if (p <= q)
      return String.fromCharCode.apply(String, g);
    for (var _ = "", E = 0; E < p; )
      _ += String.fromCharCode.apply(
        String,
        g.slice(E, E += q)
      );
    return _;
  }
  function ne(g, p, _) {
    var E = "";
    _ = Math.min(g.length, _);
    for (var I = p; I < _; ++I)
      E += String.fromCharCode(g[I] & 127);
    return E;
  }
  function G(g, p, _) {
    var E = "";
    _ = Math.min(g.length, _);
    for (var I = p; I < _; ++I)
      E += String.fromCharCode(g[I]);
    return E;
  }
  function ve(g, p, _) {
    var E = g.length;
    (!p || p < 0) && (p = 0), (!_ || _ < 0 || _ > E) && (_ = E);
    for (var I = "", U = p; U < _; ++U)
      I += hi[g[U]];
    return I;
  }
  function We(g, p, _) {
    for (var E = g.slice(p, _), I = "", U = 0; U < E.length - 1; U += 2)
      I += String.fromCharCode(E[U] + E[U + 1] * 256);
    return I;
  }
  u.prototype.slice = function(p, _) {
    var E = this.length;
    p = ~~p, _ = _ === void 0 ? E : ~~_, p < 0 ? (p += E, p < 0 && (p = 0)) : p > E && (p = E), _ < 0 ? (_ += E, _ < 0 && (_ = 0)) : _ > E && (_ = E), _ < p && (_ = p);
    var I = this.subarray(p, _);
    return Object.setPrototypeOf(I, u.prototype), I;
  };
  function Q(g, p, _) {
    if (g % 1 !== 0 || g < 0)
      throw new RangeError("offset is not uint");
    if (g + p > _)
      throw new RangeError("Trying to access beyond buffer length");
  }
  u.prototype.readUintLE = u.prototype.readUIntLE = function(p, _, E) {
    p = p >>> 0, _ = _ >>> 0, E || Q(p, _, this.length);
    for (var I = this[p], U = 1, F = 0; ++F < _ && (U *= 256); )
      I += this[p + F] * U;
    return I;
  }, u.prototype.readUintBE = u.prototype.readUIntBE = function(p, _, E) {
    p = p >>> 0, _ = _ >>> 0, E || Q(p, _, this.length);
    for (var I = this[p + --_], U = 1; _ > 0 && (U *= 256); )
      I += this[p + --_] * U;
    return I;
  }, u.prototype.readUint8 = u.prototype.readUInt8 = function(p, _) {
    return p = p >>> 0, _ || Q(p, 1, this.length), this[p];
  }, u.prototype.readUint16LE = u.prototype.readUInt16LE = function(p, _) {
    return p = p >>> 0, _ || Q(p, 2, this.length), this[p] | this[p + 1] << 8;
  }, u.prototype.readUint16BE = u.prototype.readUInt16BE = function(p, _) {
    return p = p >>> 0, _ || Q(p, 2, this.length), this[p] << 8 | this[p + 1];
  }, u.prototype.readUint32LE = u.prototype.readUInt32LE = function(p, _) {
    return p = p >>> 0, _ || Q(p, 4, this.length), (this[p] | this[p + 1] << 8 | this[p + 2] << 16) + this[p + 3] * 16777216;
  }, u.prototype.readUint32BE = u.prototype.readUInt32BE = function(p, _) {
    return p = p >>> 0, _ || Q(p, 4, this.length), this[p] * 16777216 + (this[p + 1] << 16 | this[p + 2] << 8 | this[p + 3]);
  }, u.prototype.readIntLE = function(p, _, E) {
    p = p >>> 0, _ = _ >>> 0, E || Q(p, _, this.length);
    for (var I = this[p], U = 1, F = 0; ++F < _ && (U *= 256); )
      I += this[p + F] * U;
    return U *= 128, I >= U && (I -= Math.pow(2, 8 * _)), I;
  }, u.prototype.readIntBE = function(p, _, E) {
    p = p >>> 0, _ = _ >>> 0, E || Q(p, _, this.length);
    for (var I = _, U = 1, F = this[p + --I]; I > 0 && (U *= 256); )
      F += this[p + --I] * U;
    return U *= 128, F >= U && (F -= Math.pow(2, 8 * _)), F;
  }, u.prototype.readInt8 = function(p, _) {
    return p = p >>> 0, _ || Q(p, 1, this.length), this[p] & 128 ? (255 - this[p] + 1) * -1 : this[p];
  }, u.prototype.readInt16LE = function(p, _) {
    p = p >>> 0, _ || Q(p, 2, this.length);
    var E = this[p] | this[p + 1] << 8;
    return E & 32768 ? E | 4294901760 : E;
  }, u.prototype.readInt16BE = function(p, _) {
    p = p >>> 0, _ || Q(p, 2, this.length);
    var E = this[p + 1] | this[p] << 8;
    return E & 32768 ? E | 4294901760 : E;
  }, u.prototype.readInt32LE = function(p, _) {
    return p = p >>> 0, _ || Q(p, 4, this.length), this[p] | this[p + 1] << 8 | this[p + 2] << 16 | this[p + 3] << 24;
  }, u.prototype.readInt32BE = function(p, _) {
    return p = p >>> 0, _ || Q(p, 4, this.length), this[p] << 24 | this[p + 1] << 16 | this[p + 2] << 8 | this[p + 3];
  }, u.prototype.readFloatLE = function(p, _) {
    return p = p >>> 0, _ || Q(p, 4, this.length), t.read(this, p, !0, 23, 4);
  }, u.prototype.readFloatBE = function(p, _) {
    return p = p >>> 0, _ || Q(p, 4, this.length), t.read(this, p, !1, 23, 4);
  }, u.prototype.readDoubleLE = function(p, _) {
    return p = p >>> 0, _ || Q(p, 8, this.length), t.read(this, p, !0, 52, 8);
  }, u.prototype.readDoubleBE = function(p, _) {
    return p = p >>> 0, _ || Q(p, 8, this.length), t.read(this, p, !1, 52, 8);
  };
  function x(g, p, _, E, I, U) {
    if (!u.isBuffer(g))
      throw new TypeError('"buffer" argument must be a Buffer instance');
    if (p > I || p < U)
      throw new RangeError('"value" argument is out of bounds');
    if (_ + E > g.length)
      throw new RangeError("Index out of range");
  }
  u.prototype.writeUintLE = u.prototype.writeUIntLE = function(p, _, E, I) {
    if (p = +p, _ = _ >>> 0, E = E >>> 0, !I) {
      var U = Math.pow(2, 8 * E) - 1;
      x(this, p, _, E, U, 0);
    }
    var F = 1, oe = 0;
    for (this[_] = p & 255; ++oe < E && (F *= 256); )
      this[_ + oe] = p / F & 255;
    return _ + E;
  }, u.prototype.writeUintBE = u.prototype.writeUIntBE = function(p, _, E, I) {
    if (p = +p, _ = _ >>> 0, E = E >>> 0, !I) {
      var U = Math.pow(2, 8 * E) - 1;
      x(this, p, _, E, U, 0);
    }
    var F = E - 1, oe = 1;
    for (this[_ + F] = p & 255; --F >= 0 && (oe *= 256); )
      this[_ + F] = p / oe & 255;
    return _ + E;
  }, u.prototype.writeUint8 = u.prototype.writeUInt8 = function(p, _, E) {
    return p = +p, _ = _ >>> 0, E || x(this, p, _, 1, 255, 0), this[_] = p & 255, _ + 1;
  }, u.prototype.writeUint16LE = u.prototype.writeUInt16LE = function(p, _, E) {
    return p = +p, _ = _ >>> 0, E || x(this, p, _, 2, 65535, 0), this[_] = p & 255, this[_ + 1] = p >>> 8, _ + 2;
  }, u.prototype.writeUint16BE = u.prototype.writeUInt16BE = function(p, _, E) {
    return p = +p, _ = _ >>> 0, E || x(this, p, _, 2, 65535, 0), this[_] = p >>> 8, this[_ + 1] = p & 255, _ + 2;
  }, u.prototype.writeUint32LE = u.prototype.writeUInt32LE = function(p, _, E) {
    return p = +p, _ = _ >>> 0, E || x(this, p, _, 4, 4294967295, 0), this[_ + 3] = p >>> 24, this[_ + 2] = p >>> 16, this[_ + 1] = p >>> 8, this[_] = p & 255, _ + 4;
  }, u.prototype.writeUint32BE = u.prototype.writeUInt32BE = function(p, _, E) {
    return p = +p, _ = _ >>> 0, E || x(this, p, _, 4, 4294967295, 0), this[_] = p >>> 24, this[_ + 1] = p >>> 16, this[_ + 2] = p >>> 8, this[_ + 3] = p & 255, _ + 4;
  }, u.prototype.writeIntLE = function(p, _, E, I) {
    if (p = +p, _ = _ >>> 0, !I) {
      var U = Math.pow(2, 8 * E - 1);
      x(this, p, _, E, U - 1, -U);
    }
    var F = 0, oe = 1, pe = 0;
    for (this[_] = p & 255; ++F < E && (oe *= 256); )
      p < 0 && pe === 0 && this[_ + F - 1] !== 0 && (pe = 1), this[_ + F] = (p / oe >> 0) - pe & 255;
    return _ + E;
  }, u.prototype.writeIntBE = function(p, _, E, I) {
    if (p = +p, _ = _ >>> 0, !I) {
      var U = Math.pow(2, 8 * E - 1);
      x(this, p, _, E, U - 1, -U);
    }
    var F = E - 1, oe = 1, pe = 0;
    for (this[_ + F] = p & 255; --F >= 0 && (oe *= 256); )
      p < 0 && pe === 0 && this[_ + F + 1] !== 0 && (pe = 1), this[_ + F] = (p / oe >> 0) - pe & 255;
    return _ + E;
  }, u.prototype.writeInt8 = function(p, _, E) {
    return p = +p, _ = _ >>> 0, E || x(this, p, _, 1, 127, -128), p < 0 && (p = 255 + p + 1), this[_] = p & 255, _ + 1;
  }, u.prototype.writeInt16LE = function(p, _, E) {
    return p = +p, _ = _ >>> 0, E || x(this, p, _, 2, 32767, -32768), this[_] = p & 255, this[_ + 1] = p >>> 8, _ + 2;
  }, u.prototype.writeInt16BE = function(p, _, E) {
    return p = +p, _ = _ >>> 0, E || x(this, p, _, 2, 32767, -32768), this[_] = p >>> 8, this[_ + 1] = p & 255, _ + 2;
  }, u.prototype.writeInt32LE = function(p, _, E) {
    return p = +p, _ = _ >>> 0, E || x(this, p, _, 4, 2147483647, -2147483648), this[_] = p & 255, this[_ + 1] = p >>> 8, this[_ + 2] = p >>> 16, this[_ + 3] = p >>> 24, _ + 4;
  }, u.prototype.writeInt32BE = function(p, _, E) {
    return p = +p, _ = _ >>> 0, E || x(this, p, _, 4, 2147483647, -2147483648), p < 0 && (p = 4294967295 + p + 1), this[_] = p >>> 24, this[_ + 1] = p >>> 16, this[_ + 2] = p >>> 8, this[_ + 3] = p & 255, _ + 4;
  };
  function Ie(g, p, _, E, I, U) {
    if (_ + E > g.length)
      throw new RangeError("Index out of range");
    if (_ < 0)
      throw new RangeError("Index out of range");
  }
  function A(g, p, _, E, I) {
    return p = +p, _ = _ >>> 0, I || Ie(g, p, _, 4), t.write(g, p, _, E, 23, 4), _ + 4;
  }
  u.prototype.writeFloatLE = function(p, _, E) {
    return A(this, p, _, !0, E);
  }, u.prototype.writeFloatBE = function(p, _, E) {
    return A(this, p, _, !1, E);
  };
  function D(g, p, _, E, I) {
    return p = +p, _ = _ >>> 0, I || Ie(g, p, _, 8), t.write(g, p, _, E, 52, 8), _ + 8;
  }
  u.prototype.writeDoubleLE = function(p, _, E) {
    return D(this, p, _, !0, E);
  }, u.prototype.writeDoubleBE = function(p, _, E) {
    return D(this, p, _, !1, E);
  }, u.prototype.copy = function(p, _, E, I) {
    if (!u.isBuffer(p))
      throw new TypeError("argument should be a Buffer");
    if (E || (E = 0), !I && I !== 0 && (I = this.length), _ >= p.length && (_ = p.length), _ || (_ = 0), I > 0 && I < E && (I = E), I === E || p.length === 0 || this.length === 0)
      return 0;
    if (_ < 0)
      throw new RangeError("targetStart out of bounds");
    if (E < 0 || E >= this.length)
      throw new RangeError("Index out of range");
    if (I < 0)
      throw new RangeError("sourceEnd out of bounds");
    I > this.length && (I = this.length), p.length - _ < I - E && (I = p.length - _ + E);
    var U = I - E;
    return this === p && typeof Uint8Array.prototype.copyWithin == "function" ? this.copyWithin(_, E, I) : Uint8Array.prototype.set.call(
      p,
      this.subarray(E, I),
      _
    ), U;
  }, u.prototype.fill = function(p, _, E, I) {
    if (typeof p == "string") {
      if (typeof _ == "string" ? (I = _, _ = 0, E = this.length) : typeof E == "string" && (I = E, E = this.length), I !== void 0 && typeof I != "string")
        throw new TypeError("encoding must be a string");
      if (typeof I == "string" && !u.isEncoding(I))
        throw new TypeError("Unknown encoding: " + I);
      if (p.length === 1) {
        var U = p.charCodeAt(0);
        (I === "utf8" && U < 128 || I === "latin1") && (p = U);
      }
    } else
      typeof p == "number" ? p = p & 255 : typeof p == "boolean" && (p = Number(p));
    if (_ < 0 || this.length < _ || this.length < E)
      throw new RangeError("Out of range index");
    if (E <= _)
      return this;
    _ = _ >>> 0, E = E === void 0 ? this.length : E >>> 0, p || (p = 0);
    var F;
    if (typeof p == "number")
      for (F = _; F < E; ++F)
        this[F] = p;
    else {
      var oe = u.isBuffer(p) ? p : u.from(p, I), pe = oe.length;
      if (pe === 0)
        throw new TypeError('The value "' + p + '" is invalid for argument "value"');
      for (F = 0; F < E - _; ++F)
        this[F + _] = oe[F % pe];
    }
    return this;
  };
  var V = /[^+/0-9A-Za-z-_]/g;
  function Z(g) {
    if (g = g.split("=")[0], g = g.trim().replace(V, ""), g.length < 2)
      return "";
    for (; g.length % 4 !== 0; )
      g = g + "=";
    return g;
  }
  function X(g, p) {
    p = p || 1 / 0;
    for (var _, E = g.length, I = null, U = [], F = 0; F < E; ++F) {
      if (_ = g.charCodeAt(F), _ > 55295 && _ < 57344) {
        if (!I) {
          if (_ > 56319) {
            (p -= 3) > -1 && U.push(239, 191, 189);
            continue;
          } else if (F + 1 === E) {
            (p -= 3) > -1 && U.push(239, 191, 189);
            continue;
          }
          I = _;
          continue;
        }
        if (_ < 56320) {
          (p -= 3) > -1 && U.push(239, 191, 189), I = _;
          continue;
        }
        _ = (I - 55296 << 10 | _ - 56320) + 65536;
      } else
        I && (p -= 3) > -1 && U.push(239, 191, 189);
      if (I = null, _ < 128) {
        if ((p -= 1) < 0)
          break;
        U.push(_);
      } else if (_ < 2048) {
        if ((p -= 2) < 0)
          break;
        U.push(
          _ >> 6 | 192,
          _ & 63 | 128
        );
      } else if (_ < 65536) {
        if ((p -= 3) < 0)
          break;
        U.push(
          _ >> 12 | 224,
          _ >> 6 & 63 | 128,
          _ & 63 | 128
        );
      } else if (_ < 1114112) {
        if ((p -= 4) < 0)
          break;
        U.push(
          _ >> 18 | 240,
          _ >> 12 & 63 | 128,
          _ >> 6 & 63 | 128,
          _ & 63 | 128
        );
      } else
        throw new Error("Invalid code point");
    }
    return U;
  }
  function ke(g) {
    for (var p = [], _ = 0; _ < g.length; ++_)
      p.push(g.charCodeAt(_) & 255);
    return p;
  }
  function ut(g, p) {
    for (var _, E, I, U = [], F = 0; F < g.length && !((p -= 2) < 0); ++F)
      _ = g.charCodeAt(F), E = _ >> 8, I = _ % 256, U.push(I), U.push(E);
    return U;
  }
  function Mt(g) {
    return r.toByteArray(Z(g));
  }
  function gt(g, p, _, E) {
    for (var I = 0; I < E && !(I + _ >= p.length || I >= g.length); ++I)
      p[I + _] = g[I];
    return I;
  }
  function Ve(g, p) {
    return g instanceof p || g != null && g.constructor != null && g.constructor.name != null && g.constructor.name === p.name;
  }
  function Ot(g) {
    return g !== g;
  }
  var hi = function() {
    for (var g = "0123456789abcdef", p = new Array(256), _ = 0; _ < 16; ++_)
      for (var E = _ * 16, I = 0; I < 16; ++I)
        p[E + I] = g[_] + g[I];
    return p;
  }();
})(Ub);
/*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
(function(e, r) {
  var t = Ub, n = t.Buffer;
  function i(a, u) {
    for (var c in a)
      u[c] = a[c];
  }
  n.from && n.alloc && n.allocUnsafe && n.allocUnsafeSlow ? e.exports = t : (i(t, r), r.Buffer = o);
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
    return t.SlowBuffer(a);
  };
})(_f, _f.exports);
var $d = _f.exports.Buffer, mp = $d.isEncoding || function(e) {
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
function E4(e) {
  if (!e)
    return "utf8";
  for (var r; ; )
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
        if (r)
          return;
        e = ("" + e).toLowerCase(), r = !0;
    }
}
function S4(e) {
  var r = E4(e);
  if (typeof r != "string" && ($d.isEncoding === mp || !mp(e)))
    throw new Error("Unknown encoding: " + e);
  return r || e;
}
Db.StringDecoder = qo;
function qo(e) {
  this.encoding = S4(e);
  var r;
  switch (this.encoding) {
    case "utf16le":
      this.text = C4, this.end = $4, r = 4;
      break;
    case "utf8":
      this.fillLast = I4, r = 4;
      break;
    case "base64":
      this.text = j4, this.end = N4, r = 3;
      break;
    default:
      this.write = M4, this.end = k4;
      return;
  }
  this.lastNeed = 0, this.lastTotal = 0, this.lastChar = $d.allocUnsafe(r);
}
qo.prototype.write = function(e) {
  if (e.length === 0)
    return "";
  var r, t;
  if (this.lastNeed) {
    if (r = this.fillLast(e), r === void 0)
      return "";
    t = this.lastNeed, this.lastNeed = 0;
  } else
    t = 0;
  return t < e.length ? r ? r + this.text(e, t) : this.text(e, t) : r || "";
};
qo.prototype.end = R4;
qo.prototype.text = A4;
qo.prototype.fillLast = function(e) {
  if (this.lastNeed <= e.length)
    return e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);
  e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, e.length), this.lastNeed -= e.length;
};
function Ml(e) {
  return e <= 127 ? 0 : e >> 5 === 6 ? 2 : e >> 4 === 14 ? 3 : e >> 3 === 30 ? 4 : e >> 6 === 2 ? -1 : -2;
}
function T4(e, r, t) {
  var n = r.length - 1;
  if (n < t)
    return 0;
  var i = Ml(r[n]);
  return i >= 0 ? (i > 0 && (e.lastNeed = i - 1), i) : --n < t || i === -2 ? 0 : (i = Ml(r[n]), i >= 0 ? (i > 0 && (e.lastNeed = i - 2), i) : --n < t || i === -2 ? 0 : (i = Ml(r[n]), i >= 0 ? (i > 0 && (i === 2 ? i = 0 : e.lastNeed = i - 3), i) : 0));
}
function P4(e, r, t) {
  if ((r[0] & 192) !== 128)
    return e.lastNeed = 0, "\uFFFD";
  if (e.lastNeed > 1 && r.length > 1) {
    if ((r[1] & 192) !== 128)
      return e.lastNeed = 1, "\uFFFD";
    if (e.lastNeed > 2 && r.length > 2 && (r[2] & 192) !== 128)
      return e.lastNeed = 2, "\uFFFD";
  }
}
function I4(e) {
  var r = this.lastTotal - this.lastNeed, t = P4(this, e);
  if (t !== void 0)
    return t;
  if (this.lastNeed <= e.length)
    return e.copy(this.lastChar, r, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);
  e.copy(this.lastChar, r, 0, e.length), this.lastNeed -= e.length;
}
function A4(e, r) {
  var t = T4(this, e, r);
  if (!this.lastNeed)
    return e.toString("utf8", r);
  this.lastTotal = t;
  var n = e.length - (t - this.lastNeed);
  return e.copy(this.lastChar, 0, n), e.toString("utf8", r, n);
}
function R4(e) {
  var r = e && e.length ? this.write(e) : "";
  return this.lastNeed ? r + "\uFFFD" : r;
}
function C4(e, r) {
  if ((e.length - r) % 2 === 0) {
    var t = e.toString("utf16le", r);
    if (t) {
      var n = t.charCodeAt(t.length - 1);
      if (n >= 55296 && n <= 56319)
        return this.lastNeed = 2, this.lastTotal = 4, this.lastChar[0] = e[e.length - 2], this.lastChar[1] = e[e.length - 1], t.slice(0, -1);
    }
    return t;
  }
  return this.lastNeed = 1, this.lastTotal = 2, this.lastChar[0] = e[e.length - 1], e.toString("utf16le", r, e.length - 1);
}
function $4(e) {
  var r = e && e.length ? this.write(e) : "";
  if (this.lastNeed) {
    var t = this.lastTotal - this.lastNeed;
    return r + this.lastChar.toString("utf16le", 0, t);
  }
  return r;
}
function j4(e, r) {
  var t = (e.length - r) % 3;
  return t === 0 ? e.toString("base64", r) : (this.lastNeed = 3 - t, this.lastTotal = 3, t === 1 ? this.lastChar[0] = e[e.length - 1] : (this.lastChar[0] = e[e.length - 2], this.lastChar[1] = e[e.length - 1]), e.toString("base64", r, e.length - t));
}
function N4(e) {
  var r = e && e.length ? this.write(e) : "";
  return this.lastNeed ? r + this.lastChar.toString("base64", 0, 3 - this.lastNeed) : r;
}
function M4(e) {
  return e.toString(this.encoding);
}
function k4(e) {
  return e && e.length ? this.write(e) : "";
}
var Lb = h && h.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(Cd, "__esModule", { value: !0 });
var D4 = Lb(ur), U4 = te, kl = Lb(Pd), L4 = Db, bp = new L4.StringDecoder("utf8");
function F4(e) {
  return new D4.default(q4(e));
}
function x4(e, r) {
  if (Object.prototype.hasOwnProperty.call(e, "_buffer"))
    return B4(e, r);
  if (Object.prototype.hasOwnProperty.call(e, "_buffers"))
    return W4(e, r);
  throw (0, U4.newError)("Don't know how to decode strings from '".concat(e, "'"));
}
function B4(e, r) {
  var t = e.position, n = t + r;
  return e.position = Math.min(n, e.length), e._buffer.toString("utf8", t, n);
}
function W4(e, r) {
  return V4(e, r, function(t) {
    return bp.write(t._buffer);
  }, function() {
    return bp.end();
  });
}
function V4(e, r, t, n) {
  var i = r, o = e.position;
  e._updatePos(Math.min(r, e.length - o));
  var a = e._buffers.reduce(function(u, c) {
    if (i <= 0)
      return u;
    if (o >= c.length)
      return o -= c.length, "";
    c._updatePos(o - c.position);
    var s = Math.min(c.length - o, i), l = c.readSlice(s);
    return c._updatePos(s), i = Math.max(i - l.length, 0), o = 0, u + t(l);
  }, "");
  return a + n();
}
function q4(e) {
  return typeof kl.default.Buffer.from == "function" ? kl.default.Buffer.from(e, "utf8") : new kl.default.Buffer(e, "utf8");
}
Cd.default = {
  encode: F4,
  decode: x4
};
(function(e) {
  var r = h && h.__createBinding || (Object.create ? function(u, c, s, l) {
    l === void 0 && (l = s);
    var f = Object.getOwnPropertyDescriptor(c, s);
    (!f || ("get" in f ? !c.__esModule : f.writable || f.configurable)) && (f = { enumerable: !0, get: function() {
      return c[s];
    } }), Object.defineProperty(u, l, f);
  } : function(u, c, s, l) {
    l === void 0 && (l = s), u[l] = c[s];
  }), t = h && h.__exportStar || function(u, c) {
    for (var s in u)
      s !== "default" && !Object.prototype.hasOwnProperty.call(c, s) && r(c, u, s);
  }, n = h && h.__importDefault || function(u) {
    return u && u.__esModule ? u : { default: u };
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.utf8 = e.alloc = e.ChannelConfig = void 0, t(Dn, e), t(Un, e);
  var i = Rd;
  Object.defineProperty(e, "ChannelConfig", { enumerable: !0, get: function() {
    return n(i).default;
  } });
  var o = ur;
  Object.defineProperty(e, "alloc", { enumerable: !0, get: function() {
    return o.alloc;
  } });
  var a = Cd;
  Object.defineProperty(e, "utf8", { enumerable: !0, get: function() {
    return n(a).default;
  } });
})(ui);
Object.defineProperty(Sd, "__esModule", { value: !0 });
var H4 = ui, Fb = te, z4 = 1616949271;
function wi(e, r) {
  return {
    major: e,
    minor: r
  };
}
function Y4(e) {
  if (e.length > 4)
    throw (0, Fb.newError)("It should not have more than 4 versions of the protocol");
  var r = (0, H4.alloc)(5 * 4);
  return r.writeInt32(z4), e.forEach(function(t) {
    if (t instanceof Array) {
      var n = t[0], i = n.major, o = n.minor, a = t[1].minor, u = o - a;
      r.writeInt32(u << 16 | o << 8 | i);
    } else {
      var i = t.major, o = t.minor;
      r.writeInt32(o << 8 | i);
    }
  }), r.reset(), r;
}
function G4(e) {
  var r = [
    e.readUInt8(),
    e.readUInt8(),
    e.readUInt8(),
    e.readUInt8()
  ];
  if (r[0] === 72 && r[1] === 84 && r[2] === 84 && r[3] === 80)
    throw (0, Fb.newError)("Server responded HTTP. Make sure you are not trying to connect to the http endpoint (HTTP defaults to port 7474 whereas BOLT defaults to port 7687)");
  return Number(r[3] + "." + r[2]);
}
function K4() {
  return Y4([
    wi(5, 0),
    [wi(4, 4), wi(4, 2)],
    wi(4, 1),
    wi(3, 0)
  ]);
}
function Z4(e) {
  var r = this;
  return new Promise(function(t, n) {
    var i = function(o) {
      n(o);
    };
    e.onerror = i.bind(r), e._error && i(e._error), e.onmessage = function(o) {
      try {
        var a = G4(o);
        t({
          protocolVersion: a,
          consumeRemainingBuffer: function(u) {
            o.hasRemaining() && u(o.readSlice(o.remaining()));
          }
        });
      } catch (u) {
        n(u);
      }
    }, e.write(K4());
  });
}
Sd.default = Z4;
var jd = {}, Ac = {}, Ft = {}, Ae = {}, Rc = {}, Nd = h && h.__extends || function() {
  var e = function(r, t) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var o in i)
        Object.prototype.hasOwnProperty.call(i, o) && (n[o] = i[o]);
    }, e(r, t);
  };
  return function(r, t) {
    if (typeof t != "function" && t !== null)
      throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
    e(r, t);
    function n() {
      this.constructor = r;
    }
    r.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}(), Q4 = h && h.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(Rc, "__esModule", { value: !0 });
Q4(te);
var Cc = function() {
  function e() {
  }
  return e.ofRecord = function(r) {
    return r === null ? e.ofNull() : new e3(r);
  }, e.ofMessageResponse = function(r) {
    return r === null ? e.ofNull() : new X4(r);
  }, e.ofNull = function() {
    return new J4();
  }, Object.defineProperty(e.prototype, "ttl", {
    get: function() {
      throw new Error("Not implemented");
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(e.prototype, "db", {
    get: function() {
      throw new Error("Not implemented");
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(e.prototype, "servers", {
    get: function() {
      throw new Error("Not implemented");
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(e.prototype, "isNull", {
    get: function() {
      throw new Error("Not implemented");
    },
    enumerable: !1,
    configurable: !0
  }), e;
}();
Rc.default = Cc;
var X4 = function(e) {
  Nd(r, e);
  function r(t) {
    var n = e.call(this) || this;
    return n._response = t, n;
  }
  return Object.defineProperty(r.prototype, "ttl", {
    get: function() {
      return this._response.rt.ttl;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(r.prototype, "servers", {
    get: function() {
      return this._response.rt.servers;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(r.prototype, "db", {
    get: function() {
      return this._response.rt.db;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(r.prototype, "isNull", {
    get: function() {
      return this._response === null;
    },
    enumerable: !1,
    configurable: !0
  }), r;
}(Cc), J4 = function(e) {
  Nd(r, e);
  function r() {
    return e !== null && e.apply(this, arguments) || this;
  }
  return Object.defineProperty(r.prototype, "isNull", {
    get: function() {
      return !0;
    },
    enumerable: !1,
    configurable: !0
  }), r;
}(Cc), e3 = function(e) {
  Nd(r, e);
  function r(t) {
    var n = e.call(this) || this;
    return n._record = t, n;
  }
  return Object.defineProperty(r.prototype, "ttl", {
    get: function() {
      return this._record.get("ttl");
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(r.prototype, "servers", {
    get: function() {
      return this._record.get("servers");
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(r.prototype, "db", {
    get: function() {
      return this._record.has("db") ? this._record.get("db") : null;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(r.prototype, "isNull", {
    get: function() {
      return this._record === null;
    },
    enumerable: !1,
    configurable: !0
  }), r;
}(Cc), pn = h && h.__extends || function() {
  var e = function(r, t) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var o in i)
        Object.prototype.hasOwnProperty.call(i, o) && (n[o] = i[o]);
    }, e(r, t);
  };
  return function(r, t) {
    if (typeof t != "function" && t !== null)
      throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
    e(r, t);
    function n() {
      this.constructor = r;
    }
    r.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}(), t3 = h && h.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(Ae, "__esModule", { value: !0 });
Ae.ProcedureRouteObserver = Ae.RouteObserver = Ae.CompletedObserver = Ae.FailedObserver = Ae.ResetObserver = Ae.LoginObserver = Ae.ResultStreamObserver = Ae.StreamObserver = void 0;
var mt = te, xb = t3(Rc), r3 = mt.internal.constants.FETCH_ALL, Zr = mt.error.PROTOCOL_ERROR, si = function() {
  function e() {
  }
  return e.prototype.onNext = function(r) {
  }, e.prototype.onError = function(r) {
  }, e.prototype.onCompleted = function(r) {
  }, e;
}();
Ae.StreamObserver = si;
var Md = function(e) {
  pn(r, e);
  function r(t) {
    var n = t === void 0 ? {} : t, i = n.reactive, o = i === void 0 ? !1 : i, a = n.moreFunction, u = n.discardFunction, c = n.fetchSize, s = c === void 0 ? r3 : c, l = n.beforeError, f = n.afterError, y = n.beforeKeys, b = n.afterKeys, O = n.beforeComplete, S = n.afterComplete, P = n.server, R = n.highRecordWatermark, $ = R === void 0 ? Number.MAX_VALUE : R, j = n.lowRecordWatermark, k = j === void 0 ? Number.MAX_VALUE : j, L = e.call(this) || this;
    return L._fieldKeys = null, L._fieldLookup = null, L._head = null, L._queuedRecords = [], L._tail = null, L._error = null, L._observers = [], L._meta = {}, L._server = P, L._beforeError = l, L._afterError = f, L._beforeKeys = y, L._afterKeys = b, L._beforeComplete = O, L._afterComplete = S, L._queryId = null, L._moreFunction = a, L._discardFunction = u, L._discard = !1, L._fetchSize = s, L._lowRecordWatermark = k, L._highRecordWatermark = $, L._setState(o ? Et.READY : Et.READY_STREAMING), L._setupAutoPull(), L._paused = !1, L;
  }
  return r.prototype.pause = function() {
    this._paused = !0;
  }, r.prototype.resume = function() {
    this._paused = !1, this._setupAutoPull(!0), this._state.pull(this);
  }, r.prototype.onNext = function(t) {
    var n = new mt.Record(this._fieldKeys, t, this._fieldLookup);
    this._observers.some(function(i) {
      return i.onNext;
    }) ? this._observers.forEach(function(i) {
      i.onNext && i.onNext(n);
    }) : (this._queuedRecords.push(n), this._queuedRecords.length > this._highRecordWatermark && (this._autoPull = !1));
  }, r.prototype.onCompleted = function(t) {
    this._state.onSuccess(this, t);
  }, r.prototype.onError = function(t) {
    this._state.onError(this, t);
  }, r.prototype.cancel = function() {
    this._discard = !0;
  }, r.prototype.prepareToHandleSingleResponse = function() {
    this._head = [], this._fieldKeys = [], this._setState(Et.STREAMING);
  }, r.prototype.markCompleted = function() {
    this._head = [], this._fieldKeys = [], this._tail = {}, this._setState(Et.SUCCEEDED);
  }, r.prototype.subscribe = function(t) {
    if (this._head && t.onKeys && t.onKeys(this._head), this._queuedRecords.length > 0 && t.onNext)
      for (var n = 0; n < this._queuedRecords.length; n++)
        t.onNext(this._queuedRecords[n]), this._queuedRecords.length - n - 1 <= this._lowRecordWatermark && (this._autoPull = !0, this._state === Et.READY && this._handleStreaming());
    this._tail && t.onCompleted && t.onCompleted(this._tail), this._error && t.onError(this._error), this._observers.push(t), this._state === Et.READY && this._handleStreaming();
  }, r.prototype._handleHasMore = function(t) {
    this._setState(Et.READY), this._handleStreaming(), delete t.has_more;
  }, r.prototype._handlePullSuccess = function(t) {
    var n = this, i = Object.assign(this._server ? { server: this._server } : {}, this._meta, t);
    if (![void 0, null, "r", "w", "rw", "s"].includes(i.type)) {
      this.onError((0, mt.newError)(`Server returned invalid query type. Expected one of [undefined, null, "r", "w", "rw", "s"] but got '`.concat(i.type, "'"), Zr));
      return;
    }
    this._setState(Et.SUCCEEDED);
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
  }, r.prototype._handleRunSuccess = function(t, n) {
    var i = this;
    if (this._fieldKeys === null) {
      if (this._fieldKeys = [], this._fieldLookup = {}, t.fields && t.fields.length > 0) {
        this._fieldKeys = t.fields;
        for (var o = 0; o < t.fields.length; o++)
          this._fieldLookup[t.fields[o]] = o;
        delete t.fields;
      }
      t.qid !== null && t.qid !== void 0 && (this._queryId = t.qid, delete t.qid), this._storeMetadataForCompletion(t);
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
  }, r.prototype._handleError = function(t) {
    var n = this;
    this._setState(Et.FAILED), this._error = t;
    var i = null;
    this._beforeError && (i = this._beforeError(t));
    var o = function() {
      n._observers.some(function(a) {
        return a.onError;
      }) && n._observers.forEach(function(a) {
        a.onError && a.onError(t);
      }), n._afterError && n._afterError(t);
    };
    i ? Promise.resolve(i).then(function() {
      return o();
    }) : o();
  }, r.prototype._handleStreaming = function() {
    this._head && this._observers.some(function(t) {
      return t.onNext || t.onCompleted;
    }) && !this._paused && (this._discard || this._autoPull) && this._more();
  }, r.prototype._more = function() {
    this._discard ? this._discardFunction(this._queryId, this) : this._moreFunction(this._queryId, this._fetchSize, this), this._setState(Et.STREAMING);
  }, r.prototype._storeMetadataForCompletion = function(t) {
    for (var n = Object.keys(t), i = n.length, o = ""; i--; )
      o = n[i], this._meta[o] = t[o];
  }, r.prototype._setState = function(t) {
    this._state = t;
  }, r.prototype._setupAutoPull = function() {
    this._autoPull = !0;
  }, r;
}(si);
Ae.ResultStreamObserver = Md;
var n3 = function(e) {
  pn(r, e);
  function r(t) {
    var n = t === void 0 ? {} : t, i = n.onError, o = n.onCompleted, a = e.call(this) || this;
    return a._onError = i, a._onCompleted = o, a;
  }
  return r.prototype.onNext = function(t) {
    this.onError((0, mt.newError)("Received RECORD when initializing " + mt.json.stringify(t)));
  }, r.prototype.onError = function(t) {
    this._onError && this._onError(t);
  }, r.prototype.onCompleted = function(t) {
    this._onCompleted && this._onCompleted(t);
  }, r;
}(si);
Ae.LoginObserver = n3;
var i3 = function(e) {
  pn(r, e);
  function r(t) {
    var n = t === void 0 ? {} : t, i = n.onProtocolError, o = n.onError, a = n.onComplete, u = e.call(this) || this;
    return u._onProtocolError = i, u._onError = o, u._onComplete = a, u;
  }
  return r.prototype.onNext = function(t) {
    this.onError((0, mt.newError)("Received RECORD when resetting: received record is: " + mt.json.stringify(t), Zr));
  }, r.prototype.onError = function(t) {
    t.code === Zr && this._onProtocolError && this._onProtocolError(t.message), this._onError && this._onError(t);
  }, r.prototype.onCompleted = function(t) {
    this._onComplete && this._onComplete(t);
  }, r;
}(si);
Ae.ResetObserver = i3;
var o3 = function(e) {
  pn(r, e);
  function r(t) {
    var n = t.error, i = t.onError, o = e.call(this, { beforeError: i }) || this;
    return o.onError(n), o;
  }
  return r;
}(Md);
Ae.FailedObserver = o3;
var a3 = function(e) {
  pn(r, e);
  function r() {
    var t = e.call(this) || this;
    return e.prototype.markCompleted.call(t), t;
  }
  return r;
}(Md);
Ae.CompletedObserver = a3;
var u3 = function(e) {
  pn(r, e);
  function r(t) {
    var n = t.resultObserver, i = t.onProtocolError, o = t.onError, a = t.onCompleted, u = e.call(this) || this;
    return u._resultObserver = n, u._onError = o, u._onCompleted = a, u._records = [], u._onProtocolError = i, n.subscribe(u), u;
  }
  return r.prototype.onNext = function(t) {
    this._records.push(t);
  }, r.prototype.onError = function(t) {
    t.code === Zr && this._onProtocolError && this._onProtocolError(t.message), this._onError && this._onError(t);
  }, r.prototype.onCompleted = function() {
    if (this._records !== null && this._records.length !== 1) {
      this.onError((0, mt.newError)("Illegal response from router. Received " + this._records.length + ` records but expected only one.
` + mt.json.stringify(this._records), Zr));
      return;
    }
    this._onCompleted && this._onCompleted(xb.default.ofRecord(this._records[0]));
  }, r;
}(si);
Ae.ProcedureRouteObserver = u3;
var s3 = function(e) {
  pn(r, e);
  function r(t) {
    var n = t === void 0 ? {} : t, i = n.onProtocolError, o = n.onError, a = n.onCompleted, u = e.call(this) || this;
    return u._onProtocolError = i, u._onError = o, u._onCompleted = a, u;
  }
  return r.prototype.onNext = function(t) {
    this.onError((0, mt.newError)("Received RECORD when resetting: received record is: " + mt.json.stringify(t), Zr));
  }, r.prototype.onError = function(t) {
    t.code === Zr && this._onProtocolError && this._onProtocolError(t.message), this._onError && this._onError(t);
  }, r.prototype.onCompleted = function(t) {
    this._onCompleted && this._onCompleted(xb.default.ofMessageResponse(t));
  }, r;
}(si);
Ae.RouteObserver = s3;
var Et = {
  READY_STREAMING: {
    onSuccess: function(e, r) {
      e._handleRunSuccess(
        r,
        function() {
          e._setState(Et.STREAMING);
        }
      );
    },
    onError: function(e, r) {
      e._handleError(r);
    },
    name: function() {
      return "READY_STREAMING";
    },
    pull: function() {
    }
  },
  READY: {
    onSuccess: function(e, r) {
      e._handleRunSuccess(
        r,
        function() {
          return e._handleStreaming();
        }
      );
    },
    onError: function(e, r) {
      e._handleError(r);
    },
    name: function() {
      return "READY";
    },
    pull: function(e) {
      return e._more();
    }
  },
  STREAMING: {
    onSuccess: function(e, r) {
      r.has_more ? e._handleHasMore(r) : e._handlePullSuccess(r);
    },
    onError: function(e, r) {
      e._handleError(r);
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
Object.defineProperty(Ft, "__esModule", { value: !0 });
Ft.assertImpersonatedUserIsEmpty = Ft.assertTxConfigIsEmpty = Ft.assertDatabaseIsEmpty = void 0;
var kd = te;
function c3(e, r, t) {
  if (r === void 0 && (r = function() {
  }), e && !e.isEmpty()) {
    var n = (0, kd.newError)("Driver is connected to the database that does not support transaction configuration. Please upgrade to neo4j 3.5.0 or later in order to use this functionality");
    throw r(n.message), t.onError(n), n;
  }
}
Ft.assertTxConfigIsEmpty = c3;
function l3(e, r, t) {
  if (r === void 0 && (r = function() {
  }), e) {
    var n = (0, kd.newError)("Driver is connected to the database that does not support multiple databases. Please upgrade to neo4j 4.0.0 or later in order to use this functionality");
    throw r(n.message), t.onError(n), n;
  }
}
Ft.assertDatabaseIsEmpty = l3;
function f3(e, r, t) {
  if (r === void 0 && (r = function() {
  }), e) {
    var n = (0, kd.newError)("Driver is connected to the database that does not support user impersonation. Please upgrade to neo4j 4.4.0 or later in order to use this functionality. " + "Trying to impersonate ".concat(e, "."));
    throw r(n.message), t.onError(n), n;
  }
}
Ft.assertImpersonatedUserIsEmpty = f3;
var nt = {}, Qr = {}, $c = {}, Ho = {};
Object.defineProperty(Ho, "__esModule", { value: !0 });
Ho.identity = void 0;
function d3(e) {
  return e;
}
Ho.identity = d3;
var h3 = h && h.__createBinding || (Object.create ? function(e, r, t, n) {
  n === void 0 && (n = t);
  var i = Object.getOwnPropertyDescriptor(r, t);
  (!i || ("get" in i ? !r.__esModule : i.writable || i.configurable)) && (i = { enumerable: !0, get: function() {
    return r[t];
  } }), Object.defineProperty(e, n, i);
} : function(e, r, t, n) {
  n === void 0 && (n = t), e[n] = r[t];
}), v3 = h && h.__setModuleDefault || (Object.create ? function(e, r) {
  Object.defineProperty(e, "default", { enumerable: !0, value: r });
} : function(e, r) {
  e.default = r;
}), p3 = h && h.__importStar || function(e) {
  if (e && e.__esModule)
    return e;
  var r = {};
  if (e != null)
    for (var t in e)
      t !== "default" && Object.prototype.hasOwnProperty.call(e, t) && h3(r, e, t);
  return v3(r, e), r;
};
Object.defineProperty($c, "__esModule", { value: !0 });
$c.functional = void 0;
$c.functional = p3(Ho);
var br = {};
Object.defineProperty(br, "__esModule", { value: !0 });
br.verifyStructSize = br.Structure = void 0;
var Bb = te, _3 = Bb.error.PROTOCOL_ERROR, Wb = function() {
  function e(r, t) {
    this.signature = r, this.fields = t;
  }
  return Object.defineProperty(e.prototype, "size", {
    get: function() {
      return this.fields.length;
    },
    enumerable: !1,
    configurable: !0
  }), e.prototype.toString = function() {
    for (var r = "", t = 0; t < this.fields.length; t++)
      t > 0 && (r += ", "), r += this.fields[t];
    return "Structure(" + this.signature + ", [" + r + "])";
  }, e;
}();
br.Structure = Wb;
function y3(e, r, t) {
  if (r !== t)
    throw (0, Bb.newError)("Wrong struct size for ".concat(e, ", expected ").concat(r, " but was ").concat(t), _3);
}
br.verifyStructSize = y3;
br.default = Wb;
Object.defineProperty(Qr, "__esModule", { value: !0 });
Qr.Unpacker = Qr.Packer = void 0;
var Ii = ui, Vb = $c, qb = br, Fe = te, m3 = Fe.error.PROTOCOL_ERROR, Hb = 128, zb = 144, Yb = 160, Gb = 176, Kb = 192, Zb = 193, Qb = 194, Xb = 195, Jb = 200, e0 = 201, t0 = 202, r0 = 203, n0 = 208, i0 = 209, o0 = 210, a0 = 212, u0 = 213, s0 = 214, c0 = 204, l0 = 205, f0 = 206, d0 = 216, h0 = 217, v0 = 218, p0 = 220, _0 = 221, b3 = function() {
  function e(r) {
    this._ch = r, this._byteArraysSupported = !0;
  }
  return e.prototype.packable = function(r, t) {
    var n = this;
    t === void 0 && (t = Vb.functional.identity);
    try {
      r = t(r);
    } catch (a) {
      return function() {
        throw a;
      };
    }
    if (r === null)
      return function() {
        return n._ch.writeUInt8(Kb);
      };
    if (r === !0)
      return function() {
        return n._ch.writeUInt8(Xb);
      };
    if (r === !1)
      return function() {
        return n._ch.writeUInt8(Qb);
      };
    if (typeof r == "number")
      return function() {
        return n.packFloat(r);
      };
    if (typeof r == "string")
      return function() {
        return n.packString(r);
      };
    if (typeof r == "bigint")
      return function() {
        return n.packInteger((0, Fe.int)(r));
      };
    if ((0, Fe.isInt)(r))
      return function() {
        return n.packInteger(r);
      };
    if (r instanceof Int8Array)
      return function() {
        return n.packBytes(r);
      };
    if (r instanceof Array)
      return function() {
        n.packListHeader(r.length);
        for (var a = 0; a < r.length; a++)
          n.packable(r[a] === void 0 ? null : r[a], t)();
      };
    if (O3(r))
      return this.packableIterable(r, t);
    if (r instanceof qb.Structure) {
      for (var i = [], o = 0; o < r.fields.length; o++)
        i[o] = this.packable(r.fields[o], t);
      return function() {
        return n.packStruct(r.signature, i);
      };
    } else
      return typeof r == "object" ? function() {
        for (var a = Object.keys(r), u = 0, c = 0; c < a.length; c++)
          r[a[c]] !== void 0 && u++;
        n.packMapHeader(u);
        for (var c = 0; c < a.length; c++) {
          var s = a[c];
          r[s] !== void 0 && (n.packString(s), n.packable(r[s], t)());
        }
      } : this._nonPackableValue("Unable to pack the given value: ".concat(r));
  }, e.prototype.packableIterable = function(r, t) {
    try {
      var n = Array.from(r);
      return this.packable(n, t);
    } catch (i) {
      throw (0, Fe.newError)("Cannot pack given iterable, ".concat(i.message, ": ").concat(r));
    }
  }, e.prototype.packStruct = function(r, t) {
    t = t || [], this.packStructHeader(t.length, r);
    for (var n = 0; n < t.length; n++)
      t[n]();
  }, e.prototype.packInteger = function(r) {
    var t = r.high, n = r.low;
    r.greaterThanOrEqual(-16) && r.lessThan(128) ? this._ch.writeInt8(n) : r.greaterThanOrEqual(-128) && r.lessThan(-16) ? (this._ch.writeUInt8(Jb), this._ch.writeInt8(n)) : r.greaterThanOrEqual(-32768) && r.lessThan(32768) ? (this._ch.writeUInt8(e0), this._ch.writeInt16(n)) : r.greaterThanOrEqual(-2147483648) && r.lessThan(2147483648) ? (this._ch.writeUInt8(t0), this._ch.writeInt32(n)) : (this._ch.writeUInt8(r0), this._ch.writeInt32(t), this._ch.writeInt32(n));
  }, e.prototype.packFloat = function(r) {
    this._ch.writeUInt8(Zb), this._ch.writeFloat64(r);
  }, e.prototype.packString = function(r) {
    var t = Ii.utf8.encode(r), n = t.length;
    if (n < 16)
      this._ch.writeUInt8(Hb | n), this._ch.writeBytes(t);
    else if (n < 256)
      this._ch.writeUInt8(n0), this._ch.writeUInt8(n), this._ch.writeBytes(t);
    else if (n < 65536)
      this._ch.writeUInt8(i0), this._ch.writeUInt8(n / 256 >> 0), this._ch.writeUInt8(n % 256), this._ch.writeBytes(t);
    else if (n < 4294967296)
      this._ch.writeUInt8(o0), this._ch.writeUInt8((n / 16777216 >> 0) % 256), this._ch.writeUInt8((n / 65536 >> 0) % 256), this._ch.writeUInt8((n / 256 >> 0) % 256), this._ch.writeUInt8(n % 256), this._ch.writeBytes(t);
    else
      throw (0, Fe.newError)("UTF-8 strings of size " + n + " are not supported");
  }, e.prototype.packListHeader = function(r) {
    if (r < 16)
      this._ch.writeUInt8(zb | r);
    else if (r < 256)
      this._ch.writeUInt8(a0), this._ch.writeUInt8(r);
    else if (r < 65536)
      this._ch.writeUInt8(u0), this._ch.writeUInt8((r / 256 >> 0) % 256), this._ch.writeUInt8(r % 256);
    else if (r < 4294967296)
      this._ch.writeUInt8(s0), this._ch.writeUInt8((r / 16777216 >> 0) % 256), this._ch.writeUInt8((r / 65536 >> 0) % 256), this._ch.writeUInt8((r / 256 >> 0) % 256), this._ch.writeUInt8(r % 256);
    else
      throw (0, Fe.newError)("Lists of size " + r + " are not supported");
  }, e.prototype.packBytes = function(r) {
    if (this._byteArraysSupported) {
      this.packBytesHeader(r.length);
      for (var t = 0; t < r.length; t++)
        this._ch.writeInt8(r[t]);
    } else
      throw (0, Fe.newError)("Byte arrays are not supported by the database this driver is connected to");
  }, e.prototype.packBytesHeader = function(r) {
    if (r < 256)
      this._ch.writeUInt8(c0), this._ch.writeUInt8(r);
    else if (r < 65536)
      this._ch.writeUInt8(l0), this._ch.writeUInt8((r / 256 >> 0) % 256), this._ch.writeUInt8(r % 256);
    else if (r < 4294967296)
      this._ch.writeUInt8(f0), this._ch.writeUInt8((r / 16777216 >> 0) % 256), this._ch.writeUInt8((r / 65536 >> 0) % 256), this._ch.writeUInt8((r / 256 >> 0) % 256), this._ch.writeUInt8(r % 256);
    else
      throw (0, Fe.newError)("Byte arrays of size " + r + " are not supported");
  }, e.prototype.packMapHeader = function(r) {
    if (r < 16)
      this._ch.writeUInt8(Yb | r);
    else if (r < 256)
      this._ch.writeUInt8(d0), this._ch.writeUInt8(r);
    else if (r < 65536)
      this._ch.writeUInt8(h0), this._ch.writeUInt8(r / 256 >> 0), this._ch.writeUInt8(r % 256);
    else if (r < 4294967296)
      this._ch.writeUInt8(v0), this._ch.writeUInt8((r / 16777216 >> 0) % 256), this._ch.writeUInt8((r / 65536 >> 0) % 256), this._ch.writeUInt8((r / 256 >> 0) % 256), this._ch.writeUInt8(r % 256);
    else
      throw (0, Fe.newError)("Maps of size " + r + " are not supported");
  }, e.prototype.packStructHeader = function(r, t) {
    if (r < 16)
      this._ch.writeUInt8(Gb | r), this._ch.writeUInt8(t);
    else if (r < 256)
      this._ch.writeUInt8(p0), this._ch.writeUInt8(r), this._ch.writeUInt8(t);
    else if (r < 65536)
      this._ch.writeUInt8(_0), this._ch.writeUInt8(r / 256 >> 0), this._ch.writeUInt8(r % 256);
    else
      throw (0, Fe.newError)("Structures of size " + r + " are not supported");
  }, e.prototype.disableByteArrays = function() {
    this._byteArraysSupported = !1;
  }, e.prototype._nonPackableValue = function(r) {
    return function() {
      throw (0, Fe.newError)(r, m3);
    };
  }, e;
}();
Qr.Packer = b3;
var g3 = function() {
  function e(r, t) {
    r === void 0 && (r = !1), t === void 0 && (t = !1), this._disableLosslessIntegers = r, this._useBigInt = t;
  }
  return e.prototype.unpack = function(r, t) {
    t === void 0 && (t = Vb.functional.identity);
    var n = r.readUInt8(), i = n & 240, o = n & 15;
    if (n === Kb)
      return null;
    var a = this._unpackBoolean(n);
    if (a !== null)
      return a;
    var u = this._unpackNumberOrInteger(n, r);
    if (u !== null) {
      if ((0, Fe.isInt)(u)) {
        if (this._useBigInt)
          return u.toBigInt();
        if (this._disableLosslessIntegers)
          return u.toNumberOrInfinity();
      }
      return u;
    }
    var c = this._unpackString(n, i, o, r);
    if (c !== null)
      return c;
    var s = this._unpackList(n, i, o, r, t);
    if (s !== null)
      return s;
    var l = this._unpackByteArray(n, r);
    if (l !== null)
      return l;
    var f = this._unpackMap(n, i, o, r, t);
    if (f !== null)
      return f;
    var y = this._unpackStruct(n, i, o, r, t);
    if (y !== null)
      return y;
    throw (0, Fe.newError)("Unknown packed value with marker " + n.toString(16));
  }, e.prototype.unpackInteger = function(r) {
    var t = r.readUInt8(), n = this._unpackInteger(t, r);
    if (n == null)
      throw (0, Fe.newError)("Unable to unpack integer value with marker " + t.toString(16));
    return n;
  }, e.prototype._unpackBoolean = function(r) {
    return r === Xb ? !0 : r === Qb ? !1 : null;
  }, e.prototype._unpackNumberOrInteger = function(r, t) {
    return r === Zb ? t.readFloat64() : this._unpackInteger(r, t);
  }, e.prototype._unpackInteger = function(r, t) {
    if (r >= 0 && r < 128)
      return (0, Fe.int)(r);
    if (r >= 240 && r < 256)
      return (0, Fe.int)(r - 256);
    if (r === Jb)
      return (0, Fe.int)(t.readInt8());
    if (r === e0)
      return (0, Fe.int)(t.readInt16());
    if (r === t0) {
      var n = t.readInt32();
      return (0, Fe.int)(n);
    } else if (r === r0) {
      var i = t.readInt32(), o = t.readInt32();
      return new Fe.Integer(o, i);
    } else
      return null;
  }, e.prototype._unpackString = function(r, t, n, i) {
    return t === Hb ? Ii.utf8.decode(i, n) : r === n0 ? Ii.utf8.decode(i, i.readUInt8()) : r === i0 ? Ii.utf8.decode(i, i.readUInt16()) : r === o0 ? Ii.utf8.decode(i, i.readUInt32()) : null;
  }, e.prototype._unpackList = function(r, t, n, i, o) {
    return t === zb ? this._unpackListWithSize(n, i, o) : r === a0 ? this._unpackListWithSize(i.readUInt8(), i, o) : r === u0 ? this._unpackListWithSize(i.readUInt16(), i, o) : r === s0 ? this._unpackListWithSize(i.readUInt32(), i, o) : null;
  }, e.prototype._unpackListWithSize = function(r, t, n) {
    for (var i = [], o = 0; o < r; o++)
      i.push(this.unpack(t, n));
    return i;
  }, e.prototype._unpackByteArray = function(r, t) {
    return r === c0 ? this._unpackByteArrayWithSize(t.readUInt8(), t) : r === l0 ? this._unpackByteArrayWithSize(t.readUInt16(), t) : r === f0 ? this._unpackByteArrayWithSize(t.readUInt32(), t) : null;
  }, e.prototype._unpackByteArrayWithSize = function(r, t) {
    for (var n = new Int8Array(r), i = 0; i < r; i++)
      n[i] = t.readInt8();
    return n;
  }, e.prototype._unpackMap = function(r, t, n, i, o) {
    return t === Yb ? this._unpackMapWithSize(n, i, o) : r === d0 ? this._unpackMapWithSize(i.readUInt8(), i, o) : r === h0 ? this._unpackMapWithSize(i.readUInt16(), i, o) : r === v0 ? this._unpackMapWithSize(i.readUInt32(), i, o) : null;
  }, e.prototype._unpackMapWithSize = function(r, t, n) {
    for (var i = {}, o = 0; o < r; o++) {
      var a = this.unpack(t, n);
      i[a] = this.unpack(t, n);
    }
    return i;
  }, e.prototype._unpackStruct = function(r, t, n, i, o) {
    return t === Gb ? this._unpackStructWithSize(n, i, o) : r === p0 ? this._unpackStructWithSize(i.readUInt8(), i, o) : r === _0 ? this._unpackStructWithSize(i.readUInt16(), i, o) : null;
  }, e.prototype._unpackStructWithSize = function(r, t, n) {
    for (var i = t.readUInt8(), o = new qb.Structure(i, []), a = 0; a < r; a++)
      o.fields.push(this.unpack(t, n));
    return n(o);
  }, e;
}();
Qr.Unpacker = g3;
function O3(e) {
  return e == null ? !1 : typeof e[Symbol.iterator] == "function";
}
var Ln = {}, y0 = h && h.__extends || function() {
  var e = function(r, t) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var o in i)
        Object.prototype.hasOwnProperty.call(i, o) && (n[o] = i[o]);
    }, e(r, t);
  };
  return function(r, t) {
    if (typeof t != "function" && t !== null)
      throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
    e(r, t);
    function n() {
      this.constructor = r;
    }
    r.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}(), w3 = h && h.__createBinding || (Object.create ? function(e, r, t, n) {
  n === void 0 && (n = t);
  var i = Object.getOwnPropertyDescriptor(r, t);
  (!i || ("get" in i ? !r.__esModule : i.writable || i.configurable)) && (i = { enumerable: !0, get: function() {
    return r[t];
  } }), Object.defineProperty(e, n, i);
} : function(e, r, t, n) {
  n === void 0 && (n = t), e[n] = r[t];
}), E3 = h && h.__setModuleDefault || (Object.create ? function(e, r) {
  Object.defineProperty(e, "default", { enumerable: !0, value: r });
} : function(e, r) {
  e.default = r;
}), S3 = h && h.__importStar || function(e) {
  if (e && e.__esModule)
    return e;
  var r = {};
  if (e != null)
    for (var t in e)
      t !== "default" && Object.prototype.hasOwnProperty.call(e, t) && w3(r, e, t);
  return E3(r, e), r;
};
Object.defineProperty(Ln, "__esModule", { value: !0 });
Ln.Unpacker = Ln.Packer = void 0;
var m0 = S3(Qr), T3 = function(e) {
  y0(r, e);
  function r() {
    return e !== null && e.apply(this, arguments) || this;
  }
  return r.prototype.disableByteArrays = function() {
    throw new Error("Bolt V2 should always support byte arrays");
  }, r;
}(m0.Packer);
Ln.Packer = T3;
var P3 = function(e) {
  y0(r, e);
  function r(t, n) {
    return t === void 0 && (t = !1), n === void 0 && (n = !1), e.call(this, t, n) || this;
  }
  return r;
}(m0.Unpacker);
Ln.Unpacker = P3;
var I3 = h && h.__createBinding || (Object.create ? function(e, r, t, n) {
  n === void 0 && (n = t);
  var i = Object.getOwnPropertyDescriptor(r, t);
  (!i || ("get" in i ? !r.__esModule : i.writable || i.configurable)) && (i = { enumerable: !0, get: function() {
    return r[t];
  } }), Object.defineProperty(e, n, i);
} : function(e, r, t, n) {
  n === void 0 && (n = t), e[n] = r[t];
}), A3 = h && h.__setModuleDefault || (Object.create ? function(e, r) {
  Object.defineProperty(e, "default", { enumerable: !0, value: r });
} : function(e, r) {
  e.default = r;
}), Dd = h && h.__importStar || function(e) {
  if (e && e.__esModule)
    return e;
  var r = {};
  if (e != null)
    for (var t in e)
      t !== "default" && Object.prototype.hasOwnProperty.call(e, t) && I3(r, e, t);
  return A3(r, e), r;
};
Object.defineProperty(nt, "__esModule", { value: !0 });
nt.structure = nt.v2 = nt.v1 = void 0;
var R3 = Dd(Qr);
nt.v1 = R3;
var b0 = Dd(Ln);
nt.v2 = b0;
var C3 = Dd(br);
nt.structure = C3;
nt.default = b0;
var sr = {};
Object.defineProperty(sr, "__esModule", { value: !0 });
var it = te, g0 = it.internal.constants, $3 = g0.ACCESS_MODE_READ, va = g0.FETCH_ALL, gp = it.internal.util.assertString, j3 = 1, N3 = 15, Op = 16, M3 = 63, k3 = 1, D3 = 2, U3 = 17, L3 = 18, F3 = 19, wp = 102, x3 = 47, B3 = 63, W3 = "r", Ai = -1, ci = function() {
  function e(r, t, n) {
    this.signature = r, this.fields = t, this.toString = n;
  }
  return e.init = function(r, t) {
    return new e(j3, [r, t], function() {
      return "INIT ".concat(r, " {...}");
    });
  }, e.run = function(r, t) {
    return new e(Op, [r, t], function() {
      return "RUN ".concat(r, " ").concat(it.json.stringify(t));
    });
  }, e.pullAll = function() {
    return V3;
  }, e.reset = function() {
    return q3;
  }, e.hello = function(r, t, n, i) {
    n === void 0 && (n = null), i === void 0 && (i = null);
    var o = Object.assign({ user_agent: r }, t);
    return n && (o.routing = n), i && (o.patch_bolt = i), new e(k3, [o], function() {
      return "HELLO {user_agent: '".concat(r, "', ...}");
    });
  }, e.begin = function(r) {
    var t = r === void 0 ? {} : r, n = t.bookmarks, i = t.txConfig, o = t.database, a = t.mode, u = t.impersonatedUser, c = Ep(n, i, o, a, u);
    return new e(U3, [c], function() {
      return "BEGIN ".concat(it.json.stringify(c));
    });
  }, e.commit = function() {
    return H3;
  }, e.rollback = function() {
    return z3;
  }, e.runWithMetadata = function(r, t, n) {
    var i = n === void 0 ? {} : n, o = i.bookmarks, a = i.txConfig, u = i.database, c = i.mode, s = i.impersonatedUser, l = Ep(o, a, u, c, s);
    return new e(Op, [r, t, l], function() {
      return "RUN ".concat(r, " ").concat(it.json.stringify(t), " ").concat(it.json.stringify(l));
    });
  }, e.goodbye = function() {
    return Y3;
  }, e.pull = function(r) {
    var t = r === void 0 ? {} : r, n = t.stmtId, i = n === void 0 ? Ai : n, o = t.n, a = o === void 0 ? va : o, u = Sp(i ?? Ai, a || va);
    return new e(B3, [u], function() {
      return "PULL ".concat(it.json.stringify(u));
    });
  }, e.discard = function(r) {
    var t = r === void 0 ? {} : r, n = t.stmtId, i = n === void 0 ? Ai : n, o = t.n, a = o === void 0 ? va : o, u = Sp(i ?? Ai, a || va);
    return new e(x3, [u], function() {
      return "DISCARD ".concat(it.json.stringify(u));
    });
  }, e.route = function(r, t, n) {
    return r === void 0 && (r = {}), t === void 0 && (t = []), n === void 0 && (n = null), new e(wp, [r, t, n], function() {
      return "ROUTE ".concat(it.json.stringify(r), " ").concat(it.json.stringify(t), " ").concat(n);
    });
  }, e.routeV4x4 = function(r, t, n) {
    r === void 0 && (r = {}), t === void 0 && (t = []), n === void 0 && (n = {});
    var i = {};
    return n.databaseName && (i.db = n.databaseName), n.impersonatedUser && (i.imp_user = n.impersonatedUser), new e(wp, [r, t, i], function() {
      return "ROUTE ".concat(it.json.stringify(r), " ").concat(it.json.stringify(t), " ").concat(it.json.stringify(i));
    });
  }, e;
}();
sr.default = ci;
function Ep(e, r, t, n, i) {
  var o = {};
  return e.isEmpty() || (o.bookmarks = e.values()), r.timeout !== null && (o.tx_timeout = r.timeout), r.metadata && (o.tx_metadata = r.metadata), t && (o.db = gp(t, "database")), i && (o.imp_user = gp(i, "impersonatedUser")), n === $3 && (o.mode = W3), o;
}
function Sp(e, r) {
  var t = { n: (0, it.int)(r) };
  return e !== Ai && (t.qid = (0, it.int)(e)), t;
}
var V3 = new ci(M3, [], function() {
  return "PULL_ALL";
}), q3 = new ci(N3, [], function() {
  return "RESET";
}), H3 = new ci(L3, [], function() {
  return "COMMIT";
}), z3 = new ci(F3, [], function() {
  return "ROLLBACK";
}), Y3 = new ci(D3, [], function() {
  return "GOODBYE";
}), jc = {}, at = {};
Object.defineProperty(at, "__esModule", { value: !0 });
at.TypeTransformer = void 0;
var G3 = nt, K3 = te, Z3 = K3.internal.objectUtil, Q3 = function() {
  function e(r) {
    this._transformers = r, this._transformersPerSignature = new Map(r.map(function(t) {
      return [t.signature, t];
    })), this.fromStructure = this.fromStructure.bind(this), this.toStructure = this.toStructure.bind(this), Object.freeze(this);
  }
  return e.prototype.fromStructure = function(r) {
    try {
      if (r instanceof G3.structure.Structure && this._transformersPerSignature.has(r.signature)) {
        var t = this._transformersPerSignature.get(r.signature).fromStructure;
        return t(r);
      }
      return r;
    } catch (n) {
      return Z3.createBrokenObject(n);
    }
  }, e.prototype.toStructure = function(r) {
    var t = this._transformers.find(function(n) {
      var i = n.isTypeInstance;
      return i(r);
    });
    return t !== void 0 ? t.toStructure(r) : r;
  }, e;
}();
at.default = Q3;
var X3 = function() {
  function e(r) {
    var t = r.signature, n = r.fromStructure, i = r.toStructure, o = r.isTypeInstance;
    this.signature = t, this.isTypeInstance = o, this.fromStructure = n, this.toStructure = i, Object.freeze(this);
  }
  return e.prototype.extendsWith = function(r) {
    var t = r.signature, n = r.fromStructure, i = r.toStructure, o = r.isTypeInstance;
    return new e({
      signature: t || this.signature,
      fromStructure: n || this.fromStructure,
      toStructure: i || this.toStructure,
      isTypeInstance: o || this.isTypeInstance
    });
  }, e;
}();
at.TypeTransformer = X3;
var Nc = h && h.__read || function(e, r) {
  var t = typeof Symbol == "function" && e[Symbol.iterator];
  if (!t)
    return e;
  var n = t.call(e), i, o = [], a;
  try {
    for (; (r === void 0 || r-- > 0) && !(i = n.next()).done; )
      o.push(i.value);
  } catch (u) {
    a = { error: u };
  } finally {
    try {
      i && !i.done && (t = n.return) && t.call(n);
    } finally {
      if (a)
        throw a.error;
    }
  }
  return o;
};
Object.defineProperty(jc, "__esModule", { value: !0 });
var Xe = te, Mc = nt, kc = at, Dc = Xe.error.PROTOCOL_ERROR, J3 = 78, e8 = 3, t8 = 82, r8 = 5, n8 = 114, i8 = 3, o8 = 80, a8 = 3;
function u8() {
  return new kc.TypeTransformer({
    signature: J3,
    isTypeInstance: function(e) {
      return e instanceof Xe.Node;
    },
    toStructure: function(e) {
      throw (0, Xe.newError)("It is not allowed to pass nodes in query parameters, given: ".concat(e), Dc);
    },
    fromStructure: function(e) {
      Mc.structure.verifyStructSize("Node", e8, e.size);
      var r = Nc(e.fields, 3), t = r[0], n = r[1], i = r[2];
      return new Xe.Node(t, n, i);
    }
  });
}
function s8() {
  return new kc.TypeTransformer({
    signature: t8,
    isTypeInstance: function(e) {
      return e instanceof Xe.Relationship;
    },
    toStructure: function(e) {
      throw (0, Xe.newError)("It is not allowed to pass relationships in query parameters, given: ".concat(e), Dc);
    },
    fromStructure: function(e) {
      Mc.structure.verifyStructSize("Relationship", r8, e.size);
      var r = Nc(e.fields, 5), t = r[0], n = r[1], i = r[2], o = r[3], a = r[4];
      return new Xe.Relationship(t, n, i, o, a);
    }
  });
}
function c8() {
  return new kc.TypeTransformer({
    signature: n8,
    isTypeInstance: function(e) {
      return e instanceof Xe.UnboundRelationship;
    },
    toStructure: function(e) {
      throw (0, Xe.newError)("It is not allowed to pass unbound relationships in query parameters, given: ".concat(e), Dc);
    },
    fromStructure: function(e) {
      Mc.structure.verifyStructSize("UnboundRelationship", i8, e.size);
      var r = Nc(e.fields, 3), t = r[0], n = r[1], i = r[2];
      return new Xe.UnboundRelationship(t, n, i);
    }
  });
}
function l8() {
  return new kc.TypeTransformer({
    signature: o8,
    isTypeInstance: function(e) {
      return e instanceof Xe.Path;
    },
    toStructure: function(e) {
      throw (0, Xe.newError)("It is not allowed to pass paths in query parameters, given: ".concat(e), Dc);
    },
    fromStructure: function(e) {
      Mc.structure.verifyStructSize("Path", a8, e.size);
      for (var r = Nc(e.fields, 3), t = r[0], n = r[1], i = r[2], o = [], a = t[0], u = 0; u < i.length; u += 2) {
        var c = t[i[u + 1]], s = (0, Xe.toNumber)(i[u]), l = void 0;
        s > 0 ? (l = n[s - 1], l instanceof Xe.UnboundRelationship && (n[s - 1] = l = l.bindTo(a, c))) : (l = n[-s - 1], l instanceof Xe.UnboundRelationship && (n[-s - 1] = l = l.bindTo(c, a))), o.push(new Xe.PathSegment(a, l, c)), a = c;
      }
      return new Xe.Path(t[0], t[t.length - 1], o);
    }
  });
}
jc.default = {
  createNodeTransformer: u8,
  createRelationshipTransformer: s8,
  createUnboundRelationshipTransformer: c8,
  createPathTransformer: l8
};
var Ud = h && h.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(Ac, "__esModule", { value: !0 });
var Dl = Ft, Ul = nt, pa = Ud(sr), Ll = Ae, Uc = te, f8 = Ud(jc), d8 = Ud(at), Tp = Uc.internal.bookmarks.Bookmarks, O0 = Uc.internal.constants, Pp = O0.ACCESS_MODE_WRITE, h8 = O0.BOLT_PROTOCOL_V1;
Uc.internal.logger.Logger;
var Ip = Uc.internal.txConfig.TxConfig, v8 = function() {
  function e(r, t, n, i, o, a) {
    var u = n === void 0 ? {} : n, c = u.disableLosslessIntegers, s = u.useBigInt;
    i === void 0 && (i = function() {
      return null;
    }), this._server = r || {}, this._chunker = t, this._packer = this._createPacker(t), this._unpacker = this._createUnpacker(c, s), this._responseHandler = i(this), this._log = o, this._onProtocolError = a, this._fatalError = null, this._lastMessageSignature = null, this._config = { disableLosslessIntegers: c, useBigInt: s };
  }
  return Object.defineProperty(e.prototype, "transformer", {
    get: function() {
      var r = this;
      return this._transformer === void 0 && (this._transformer = new d8.default(Object.values(f8.default).map(function(t) {
        return t(r._config, r._log);
      }))), this._transformer;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(e.prototype, "version", {
    get: function() {
      return h8;
    },
    enumerable: !1,
    configurable: !0
  }), e.prototype.packer = function() {
    return this._packer;
  }, e.prototype.packable = function(r) {
    return this._packer.packable(r, this.transformer.toStructure);
  }, e.prototype.unpacker = function() {
    return this._unpacker;
  }, e.prototype.unpack = function(r) {
    return this._unpacker.unpack(r, this.transformer.fromStructure);
  }, e.prototype.transformMetadata = function(r) {
    return r;
  }, e.prototype.initialize = function(r) {
    var t = this, n = r === void 0 ? {} : r, i = n.userAgent, o = n.authToken, a = n.onError, u = n.onComplete, c = new Ll.LoginObserver({
      onError: function(s) {
        return t._onLoginError(s, a);
      },
      onCompleted: function(s) {
        return t._onLoginCompleted(s, u);
      }
    });
    return this.write(pa.default.init(i, o), c, !0), c;
  }, e.prototype.prepareToClose = function() {
  }, e.prototype.beginTransaction = function(r) {
    var t = r === void 0 ? {} : r, n = t.bookmarks, i = t.txConfig, o = t.database, a = t.mode, u = t.impersonatedUser, c = t.beforeError, s = t.afterError, l = t.beforeComplete, f = t.afterComplete;
    return this.run("BEGIN", n ? n.asBeginTransactionParameters() : {}, {
      bookmarks: n,
      txConfig: i,
      database: o,
      mode: a,
      impersonatedUser: u,
      beforeError: c,
      afterError: s,
      beforeComplete: l,
      afterComplete: f,
      flush: !1
    });
  }, e.prototype.commitTransaction = function(r) {
    var t = r === void 0 ? {} : r, n = t.beforeError, i = t.afterError, o = t.beforeComplete, a = t.afterComplete;
    return this.run("COMMIT", {}, {
      bookmarks: Tp.empty(),
      txConfig: Ip.empty(),
      mode: Pp,
      beforeError: n,
      afterError: i,
      beforeComplete: o,
      afterComplete: a
    });
  }, e.prototype.rollbackTransaction = function(r) {
    var t = r === void 0 ? {} : r, n = t.beforeError, i = t.afterError, o = t.beforeComplete, a = t.afterComplete;
    return this.run("ROLLBACK", {}, {
      bookmarks: Tp.empty(),
      txConfig: Ip.empty(),
      mode: Pp,
      beforeError: n,
      afterError: i,
      beforeComplete: o,
      afterComplete: a
    });
  }, e.prototype.run = function(r, t, n) {
    var i = n === void 0 ? {} : n;
    i.bookmarks;
    var o = i.txConfig, a = i.database;
    i.mode;
    var u = i.impersonatedUser, c = i.beforeKeys, s = i.afterKeys, l = i.beforeError, f = i.afterError, y = i.beforeComplete, b = i.afterComplete, O = i.flush, S = O === void 0 ? !0 : O, P = i.highRecordWatermark, R = P === void 0 ? Number.MAX_VALUE : P, $ = i.lowRecordWatermark, j = $ === void 0 ? Number.MAX_VALUE : $, k = new Ll.ResultStreamObserver({
      server: this._server,
      beforeKeys: c,
      afterKeys: s,
      beforeError: l,
      afterError: f,
      beforeComplete: y,
      afterComplete: b,
      highRecordWatermark: R,
      lowRecordWatermark: j
    });
    return (0, Dl.assertTxConfigIsEmpty)(o, this._onProtocolError, k), (0, Dl.assertDatabaseIsEmpty)(a, this._onProtocolError, k), (0, Dl.assertImpersonatedUserIsEmpty)(u, this._onProtocolError, k), this.write(pa.default.run(r, t), k, !1), this.write(pa.default.pullAll(), k, S), k;
  }, Object.defineProperty(e.prototype, "currentFailure", {
    get: function() {
      return this._responseHandler.currentFailure;
    },
    enumerable: !1,
    configurable: !0
  }), e.prototype.reset = function(r) {
    var t = r === void 0 ? {} : r, n = t.onError, i = t.onComplete, o = new Ll.ResetObserver({
      onProtocolError: this._onProtocolError,
      onError: n,
      onComplete: i
    });
    return this.write(pa.default.reset(), o, !0), o;
  }, e.prototype._createPacker = function(r) {
    return new Ul.v1.Packer(r);
  }, e.prototype._createUnpacker = function(r, t) {
    return new Ul.v1.Unpacker(r, t);
  }, e.prototype.write = function(r, t, n) {
    var i = this.queueObserverIfProtocolIsNotBroken(t);
    if (i) {
      this._log.isDebugEnabled() && this._log.debug("C: ".concat(r)), this._lastMessageSignature = r.signature;
      var o = new Ul.structure.Structure(r.signature, r.fields);
      this.packable(o)(), this._chunker.messageBoundary(), n && this._chunker.flush();
    }
  }, e.prototype.isLastMessageLogin = function() {
    return this._lastMessageSignature === 1;
  }, e.prototype.isLastMessageReset = function() {
    return this._lastMessageSignature === 15;
  }, e.prototype.notifyFatalError = function(r) {
    return this._fatalError = r, this._responseHandler._notifyErrorToObservers(r);
  }, e.prototype.updateCurrentObserver = function() {
    return this._responseHandler._updateCurrentObserver();
  }, e.prototype.hasOngoingObservableRequests = function() {
    return this._responseHandler.hasOngoingObservableRequests();
  }, e.prototype.queueObserverIfProtocolIsNotBroken = function(r) {
    return this.isBroken() ? (this.notifyFatalErrorToObserver(r), !1) : this._responseHandler._queueObserver(r);
  }, e.prototype.isBroken = function() {
    return !!this._fatalError;
  }, e.prototype.notifyFatalErrorToObserver = function(r) {
    r && r.onError && r.onError(this._fatalError);
  }, e.prototype.resetFailure = function() {
    this._responseHandler._resetFailure();
  }, e.prototype._onLoginCompleted = function(r, t) {
    if (r) {
      var n = r.server;
      this._server.version || (this._server.version = n);
    }
    t && t(r);
  }, e.prototype._onLoginError = function(r, t) {
    this._onProtocolError(r.message), t && t(r);
  }, e;
}();
Ac.default = v8;
var Lc = {}, Fc = {}, tr = {};
Object.defineProperty(tr, "__esModule", { value: !0 });
tr.epochSecondAndNanoToLocalDateTime = tr.nanoOfDayToLocalTime = tr.epochDayToDate = void 0;
var Wr = te, Ar = Wr.internal.temporalUtil, p8 = Ar.DAYS_0000_TO_1970, Fl = Ar.DAYS_PER_400_YEAR_CYCLE, Ap = Ar.NANOS_PER_HOUR, Rp = Ar.NANOS_PER_MINUTE, yf = Ar.NANOS_PER_SECOND, Cp = Ar.SECONDS_PER_DAY, _8 = Ar.floorDiv, y8 = Ar.floorMod;
function w0(e) {
  e = (0, Wr.int)(e);
  var r = e.add(p8).subtract(60), t = (0, Wr.int)(0);
  if (r.lessThan(0)) {
    var n = r.add(1).div(Fl).subtract(1);
    t = n.multiply(400), r = r.add(n.multiply(-Fl));
  }
  var i = r.multiply(400).add(591).div(Fl), o = r.subtract(i.multiply(365).add(i.div(4)).subtract(i.div(100)).add(i.div(400)));
  o.lessThan(0) && (i = i.subtract(1), o = r.subtract(i.multiply(365).add(i.div(4)).subtract(i.div(100)).add(i.div(400)))), i = i.add(t);
  var a = o, u = a.multiply(5).add(2).div(153), c = u.add(2).modulo(12).add(1), s = a.subtract(u.multiply(306).add(5).div(10)).add(1);
  return i = i.add(u.div(10)), new Wr.Date(i, c, s);
}
tr.epochDayToDate = w0;
function E0(e) {
  e = (0, Wr.int)(e);
  var r = e.div(Ap);
  e = e.subtract(r.multiply(Ap));
  var t = e.div(Rp);
  e = e.subtract(t.multiply(Rp));
  var n = e.div(yf), i = e.subtract(n.multiply(yf));
  return new Wr.LocalTime(r, t, n, i);
}
tr.nanoOfDayToLocalTime = E0;
function m8(e, r) {
  var t = _8(e, Cp), n = y8(e, Cp), i = n.multiply(yf).add(r), o = w0(t), a = E0(i);
  return new Wr.LocalDateTime(o.year, o.month, o.day, a.hour, a.minute, a.second, a.nanosecond);
}
tr.epochSecondAndNanoToLocalDateTime = m8;
var Ha = h && h.__assign || function() {
  return Ha = Object.assign || function(e) {
    for (var r, t = 1, n = arguments.length; t < n; t++) {
      r = arguments[t];
      for (var i in r)
        Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
    }
    return e;
  }, Ha.apply(this, arguments);
}, cr = h && h.__read || function(e, r) {
  var t = typeof Symbol == "function" && e[Symbol.iterator];
  if (!t)
    return e;
  var n = t.call(e), i, o = [], a;
  try {
    for (; (r === void 0 || r-- > 0) && !(i = n.next()).done; )
      o.push(i.value);
  } catch (u) {
    a = { error: u };
  } finally {
    try {
      i && !i.done && (t = n.return) && t.call(n);
    } finally {
      if (a)
        throw a.error;
    }
  }
  return o;
}, b8 = h && h.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(Fc, "__esModule", { value: !0 });
var we = te, Qe = nt, lr = at, li = tr, g8 = b8(jc), Ld = we.internal.temporalUtil, O8 = Ld.dateToEpochDay, Fd = Ld.localDateTimeToEpochSecond, S0 = Ld.localTimeToNanoOfDay, $p = 88, w8 = 3, jp = 89, E8 = 4, Np = 69, S8 = 4, Mp = 116, T8 = 1, kp = 84, P8 = 2, Dp = 68, I8 = 1, Up = 100, A8 = 2, Lp = 70, R8 = 3, Fp = 102, C8 = 3;
function $8() {
  return new lr.TypeTransformer({
    signature: $p,
    isTypeInstance: function(e) {
      return (0, we.isPoint)(e) && (e.z === null || e.z === void 0);
    },
    toStructure: function(e) {
      return new Qe.structure.Structure($p, [
        (0, we.int)(e.srid),
        e.x,
        e.y
      ]);
    },
    fromStructure: function(e) {
      Qe.structure.verifyStructSize("Point2D", w8, e.size);
      var r = cr(e.fields, 3), t = r[0], n = r[1], i = r[2];
      return new we.Point(
        t,
        n,
        i,
        void 0
      );
    }
  });
}
function j8() {
  return new lr.TypeTransformer({
    signature: jp,
    isTypeInstance: function(e) {
      return (0, we.isPoint)(e) && e.z !== null && e.z !== void 0;
    },
    toStructure: function(e) {
      return new Qe.structure.Structure(jp, [
        (0, we.int)(e.srid),
        e.x,
        e.y,
        e.z
      ]);
    },
    fromStructure: function(e) {
      Qe.structure.verifyStructSize("Point3D", E8, e.size);
      var r = cr(e.fields, 4), t = r[0], n = r[1], i = r[2], o = r[3];
      return new we.Point(t, n, i, o);
    }
  });
}
function N8() {
  return new lr.TypeTransformer({
    signature: Np,
    isTypeInstance: we.isDuration,
    toStructure: function(e) {
      var r = (0, we.int)(e.months), t = (0, we.int)(e.days), n = (0, we.int)(e.seconds), i = (0, we.int)(e.nanoseconds);
      return new Qe.structure.Structure(Np, [r, t, n, i]);
    },
    fromStructure: function(e) {
      Qe.structure.verifyStructSize("Duration", S8, e.size);
      var r = cr(e.fields, 4), t = r[0], n = r[1], i = r[2], o = r[3];
      return new we.Duration(t, n, i, o);
    }
  });
}
function M8(e) {
  var r = e.disableLosslessIntegers, t = e.useBigInt;
  return new lr.TypeTransformer({
    signature: Mp,
    isTypeInstance: we.isLocalTime,
    toStructure: function(n) {
      var i = S0(n.hour, n.minute, n.second, n.nanosecond);
      return new Qe.structure.Structure(Mp, [i]);
    },
    fromStructure: function(n) {
      Qe.structure.verifyStructSize("LocalTime", T8, n.size);
      var i = cr(n.fields, 1), o = i[0], a = (0, li.nanoOfDayToLocalTime)(o);
      return fi(a, r, t);
    }
  });
}
function k8(e) {
  var r = e.disableLosslessIntegers, t = e.useBigInt;
  return new lr.TypeTransformer({
    signature: kp,
    isTypeInstance: we.isTime,
    toStructure: function(n) {
      var i = S0(n.hour, n.minute, n.second, n.nanosecond), o = (0, we.int)(n.timeZoneOffsetSeconds);
      return new Qe.structure.Structure(kp, [i, o]);
    },
    fromStructure: function(n) {
      Qe.structure.verifyStructSize("Time", P8, n.size);
      var i = cr(n.fields, 2), o = i[0], a = i[1], u = (0, li.nanoOfDayToLocalTime)(o), c = new we.Time(u.hour, u.minute, u.second, u.nanosecond, a);
      return fi(c, r, t);
    }
  });
}
function D8(e) {
  var r = e.disableLosslessIntegers, t = e.useBigInt;
  return new lr.TypeTransformer({
    signature: Dp,
    isTypeInstance: we.isDate,
    toStructure: function(n) {
      var i = O8(n.year, n.month, n.day);
      return new Qe.structure.Structure(Dp, [i]);
    },
    fromStructure: function(n) {
      Qe.structure.verifyStructSize("Date", I8, n.size);
      var i = cr(n.fields, 1), o = i[0], a = (0, li.epochDayToDate)(o);
      return fi(a, r, t);
    }
  });
}
function U8(e) {
  var r = e.disableLosslessIntegers, t = e.useBigInt;
  return new lr.TypeTransformer({
    signature: Up,
    isTypeInstance: we.isLocalDateTime,
    toStructure: function(n) {
      var i = Fd(n.year, n.month, n.day, n.hour, n.minute, n.second, n.nanosecond), o = (0, we.int)(n.nanosecond);
      return new Qe.structure.Structure(Up, [i, o]);
    },
    fromStructure: function(n) {
      Qe.structure.verifyStructSize("LocalDateTime", A8, n.size);
      var i = cr(n.fields, 2), o = i[0], a = i[1], u = (0, li.epochSecondAndNanoToLocalDateTime)(o, a);
      return fi(u, r, t);
    }
  });
}
function L8(e) {
  var r = e.disableLosslessIntegers, t = e.useBigInt;
  return new lr.TypeTransformer({
    signature: Fp,
    isTypeInstance: function(n) {
      return (0, we.isDateTime)(n) && n.timeZoneId != null;
    },
    toStructure: function(n) {
      var i = Fd(n.year, n.month, n.day, n.hour, n.minute, n.second, n.nanosecond), o = (0, we.int)(n.nanosecond), a = n.timeZoneId;
      return new Qe.structure.Structure(Fp, [i, o, a]);
    },
    fromStructure: function(n) {
      Qe.structure.verifyStructSize("DateTimeWithZoneId", C8, n.size);
      var i = cr(n.fields, 3), o = i[0], a = i[1], u = i[2], c = (0, li.epochSecondAndNanoToLocalDateTime)(o, a), s = new we.DateTime(c.year, c.month, c.day, c.hour, c.minute, c.second, c.nanosecond, null, u);
      return fi(s, r, t);
    }
  });
}
function F8(e) {
  var r = e.disableLosslessIntegers, t = e.useBigInt;
  return new lr.TypeTransformer({
    signature: Lp,
    isTypeInstance: function(n) {
      return (0, we.isDateTime)(n) && n.timeZoneId == null;
    },
    toStructure: function(n) {
      var i = Fd(n.year, n.month, n.day, n.hour, n.minute, n.second, n.nanosecond), o = (0, we.int)(n.nanosecond), a = (0, we.int)(n.timeZoneOffsetSeconds);
      return new Qe.structure.Structure(Lp, [i, o, a]);
    },
    fromStructure: function(n) {
      Qe.structure.verifyStructSize("DateTimeWithZoneOffset", R8, n.size);
      var i = cr(n.fields, 3), o = i[0], a = i[1], u = i[2], c = (0, li.epochSecondAndNanoToLocalDateTime)(o, a), s = new we.DateTime(c.year, c.month, c.day, c.hour, c.minute, c.second, c.nanosecond, u, null);
      return fi(s, r, t);
    }
  });
}
function fi(e, r, t) {
  if (!r && !t)
    return e;
  var n = function(u) {
    return t ? u.toBigInt() : u.toNumberOrInfinity();
  }, i = Object.create(Object.getPrototypeOf(e));
  for (var o in e)
    if (Object.prototype.hasOwnProperty.call(e, o) === !0) {
      var a = e[o];
      i[o] = (0, we.isInt)(a) ? n(a) : a;
    }
  return Object.freeze(i), i;
}
Fc.default = Ha(Ha({}, g8.default), { createPoint2DTransformer: $8, createPoint3DTransformer: j8, createDurationTransformer: N8, createLocalTimeTransformer: M8, createTimeTransformer: k8, createDateTransformer: D8, createLocalDateTimeTransformer: U8, createDateTimeWithZoneIdTransformer: L8, createDateTimeWithOffsetTransformer: F8 });
var x8 = h && h.__extends || function() {
  var e = function(r, t) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var o in i)
        Object.prototype.hasOwnProperty.call(i, o) && (n[o] = i[o]);
    }, e(r, t);
  };
  return function(r, t) {
    if (typeof t != "function" && t !== null)
      throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
    e(r, t);
    function n() {
      this.constructor = r;
    }
    r.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}(), xc = h && h.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(Lc, "__esModule", { value: !0 });
var B8 = xc(Ac), xp = xc(nt), W8 = te, V8 = xc(Fc), q8 = xc(at), H8 = W8.internal.constants.BOLT_PROTOCOL_V2, z8 = function(e) {
  x8(r, e);
  function r() {
    return e !== null && e.apply(this, arguments) || this;
  }
  return r.prototype._createPacker = function(t) {
    return new xp.default.Packer(t);
  }, r.prototype._createUnpacker = function(t, n) {
    return new xp.default.Unpacker(t, n);
  }, Object.defineProperty(r.prototype, "transformer", {
    get: function() {
      var t = this;
      return this._transformer === void 0 && (this._transformer = new q8.default(Object.values(V8.default).map(function(n) {
        return n(t._config, t._log);
      }))), this._transformer;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(r.prototype, "version", {
    get: function() {
      return H8;
    },
    enumerable: !1,
    configurable: !0
  }), r;
}(B8.default);
Lc.default = z8;
var Bc = {}, Wc = {}, mf = h && h.__assign || function() {
  return mf = Object.assign || function(e) {
    for (var r, t = 1, n = arguments.length; t < n; t++) {
      r = arguments[t];
      for (var i in r)
        Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
    }
    return e;
  }, mf.apply(this, arguments);
}, Y8 = h && h.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(Wc, "__esModule", { value: !0 });
var G8 = Y8(Fc);
Wc.default = mf({}, G8.default);
var K8 = h && h.__extends || function() {
  var e = function(r, t) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var o in i)
        Object.prototype.hasOwnProperty.call(i, o) && (n[o] = i[o]);
    }, e(r, t);
  };
  return function(r, t) {
    if (typeof t != "function" && t !== null)
      throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
    e(r, t);
    function n() {
      this.constructor = r;
    }
    r.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}(), za = h && h.__assign || function() {
  return za = Object.assign || function(e) {
    for (var r, t = 1, n = arguments.length; t < n; t++) {
      r = arguments[t];
      for (var i in r)
        Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
    }
    return e;
  }, za.apply(this, arguments);
}, Vc = h && h.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(Bc, "__esModule", { value: !0 });
var Z8 = Vc(Lc), Mr = Vc(sr), _a = Ft, Lr = Ae, Q8 = Vc(Wc), X8 = Vc(at), xd = te;
xd.internal.bookmarks.Bookmarks;
var J8 = xd.internal.constants.BOLT_PROTOCOL_V3, e6 = xd.internal.txConfig.TxConfig, T0 = "context", t6 = "CALL dbms.cluster.routing.getRoutingTable($".concat(T0, ")"), r6 = new Lr.StreamObserver(), n6 = function(e) {
  K8(r, e);
  function r() {
    return e !== null && e.apply(this, arguments) || this;
  }
  return Object.defineProperty(r.prototype, "version", {
    get: function() {
      return J8;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(r.prototype, "transformer", {
    get: function() {
      var t = this;
      return this._transformer === void 0 && (this._transformer = new X8.default(Object.values(Q8.default).map(function(n) {
        return n(t._config, t._log);
      }))), this._transformer;
    },
    enumerable: !1,
    configurable: !0
  }), r.prototype.transformMetadata = function(t) {
    return "t_first" in t && (t.result_available_after = t.t_first, delete t.t_first), "t_last" in t && (t.result_consumed_after = t.t_last, delete t.t_last), t;
  }, r.prototype.initialize = function(t) {
    var n = this, i = t === void 0 ? {} : t, o = i.userAgent, a = i.authToken, u = i.onError, c = i.onComplete, s = new Lr.LoginObserver({
      onError: function(l) {
        return n._onLoginError(l, u);
      },
      onCompleted: function(l) {
        return n._onLoginCompleted(l, c);
      }
    });
    return this.write(Mr.default.hello(o, a), s, !0), s;
  }, r.prototype.prepareToClose = function() {
    this.write(Mr.default.goodbye(), r6, !0);
  }, r.prototype.beginTransaction = function(t) {
    var n = t === void 0 ? {} : t, i = n.bookmarks, o = n.txConfig, a = n.database, u = n.impersonatedUser, c = n.mode, s = n.beforeError, l = n.afterError, f = n.beforeComplete, y = n.afterComplete, b = new Lr.ResultStreamObserver({
      server: this._server,
      beforeError: s,
      afterError: l,
      beforeComplete: f,
      afterComplete: y
    });
    return b.prepareToHandleSingleResponse(), (0, _a.assertDatabaseIsEmpty)(a, this._onProtocolError, b), (0, _a.assertImpersonatedUserIsEmpty)(u, this._onProtocolError, b), this.write(Mr.default.begin({ bookmarks: i, txConfig: o, mode: c }), b, !0), b;
  }, r.prototype.commitTransaction = function(t) {
    var n = t === void 0 ? {} : t, i = n.beforeError, o = n.afterError, a = n.beforeComplete, u = n.afterComplete, c = new Lr.ResultStreamObserver({
      server: this._server,
      beforeError: i,
      afterError: o,
      beforeComplete: a,
      afterComplete: u
    });
    return c.prepareToHandleSingleResponse(), this.write(Mr.default.commit(), c, !0), c;
  }, r.prototype.rollbackTransaction = function(t) {
    var n = t === void 0 ? {} : t, i = n.beforeError, o = n.afterError, a = n.beforeComplete, u = n.afterComplete, c = new Lr.ResultStreamObserver({
      server: this._server,
      beforeError: i,
      afterError: o,
      beforeComplete: a,
      afterComplete: u
    });
    return c.prepareToHandleSingleResponse(), this.write(Mr.default.rollback(), c, !0), c;
  }, r.prototype.run = function(t, n, i) {
    var o = i === void 0 ? {} : i, a = o.bookmarks, u = o.txConfig, c = o.database, s = o.impersonatedUser, l = o.mode, f = o.beforeKeys, y = o.afterKeys, b = o.beforeError, O = o.afterError, S = o.beforeComplete, P = o.afterComplete, R = o.flush, $ = R === void 0 ? !0 : R, j = o.highRecordWatermark, k = j === void 0 ? Number.MAX_VALUE : j, L = o.lowRecordWatermark, Y = L === void 0 ? Number.MAX_VALUE : L, ee = new Lr.ResultStreamObserver({
      server: this._server,
      beforeKeys: f,
      afterKeys: y,
      beforeError: b,
      afterError: O,
      beforeComplete: S,
      afterComplete: P,
      highRecordWatermark: k,
      lowRecordWatermark: Y
    });
    return (0, _a.assertDatabaseIsEmpty)(c, this._onProtocolError, ee), (0, _a.assertImpersonatedUserIsEmpty)(s, this._onProtocolError, ee), this.write(Mr.default.runWithMetadata(t, n, {
      bookmarks: a,
      txConfig: u,
      mode: l
    }), ee, !1), this.write(Mr.default.pullAll(), ee, $), ee;
  }, r.prototype.requestRoutingInformation = function(t) {
    var n, i = t.routingContext, o = i === void 0 ? {} : i, a = t.sessionContext, u = a === void 0 ? {} : a, c = t.onError, s = t.onCompleted, l = this.run(t6, (n = {}, n[T0] = o, n), za(za({}, u), { txConfig: e6.empty() }));
    return new Lr.ProcedureRouteObserver({
      resultObserver: l,
      onProtocolError: this._onProtocolError,
      onError: c,
      onCompleted: s
    });
  }, r;
}(Z8.default);
Bc.default = n6;
var qc = {}, Hc = {}, bf = h && h.__assign || function() {
  return bf = Object.assign || function(e) {
    for (var r, t = 1, n = arguments.length; t < n; t++) {
      r = arguments[t];
      for (var i in r)
        Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
    }
    return e;
  }, bf.apply(this, arguments);
}, i6 = h && h.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(Hc, "__esModule", { value: !0 });
var o6 = i6(Wc);
Hc.default = bf({}, o6.default);
var a6 = h && h.__extends || function() {
  var e = function(r, t) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var o in i)
        Object.prototype.hasOwnProperty.call(i, o) && (n[o] = i[o]);
    }, e(r, t);
  };
  return function(r, t) {
    if (typeof t != "function" && t !== null)
      throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
    e(r, t);
    function n() {
      this.constructor = r;
    }
    r.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}(), Ya = h && h.__assign || function() {
  return Ya = Object.assign || function(e) {
    for (var r, t = 1, n = arguments.length; t < n; t++) {
      r = arguments[t];
      for (var i in r)
        Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
    }
    return e;
  }, Ya.apply(this, arguments);
}, zc = h && h.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(qc, "__esModule", { value: !0 });
var u6 = zc(Bc), Ei = zc(sr), Bp = Ft, xl = Ae, s6 = zc(Hc), c6 = zc(at), Bd = te;
Bd.internal.bookmarks.Bookmarks;
var P0 = Bd.internal.constants, l6 = P0.BOLT_PROTOCOL_V4_0, f6 = P0.FETCH_ALL, d6 = Bd.internal.txConfig.TxConfig, I0 = "context", A0 = "database", h6 = "CALL dbms.routing.getRoutingTable($".concat(I0, ", $").concat(A0, ")"), v6 = function(e) {
  a6(r, e);
  function r() {
    return e !== null && e.apply(this, arguments) || this;
  }
  return Object.defineProperty(r.prototype, "version", {
    get: function() {
      return l6;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(r.prototype, "transformer", {
    get: function() {
      var t = this;
      return this._transformer === void 0 && (this._transformer = new c6.default(Object.values(s6.default).map(function(n) {
        return n(t._config, t._log);
      }))), this._transformer;
    },
    enumerable: !1,
    configurable: !0
  }), r.prototype.beginTransaction = function(t) {
    var n = t === void 0 ? {} : t, i = n.bookmarks, o = n.txConfig, a = n.database, u = n.impersonatedUser, c = n.mode, s = n.beforeError, l = n.afterError, f = n.beforeComplete, y = n.afterComplete, b = new xl.ResultStreamObserver({
      server: this._server,
      beforeError: s,
      afterError: l,
      beforeComplete: f,
      afterComplete: y
    });
    return b.prepareToHandleSingleResponse(), (0, Bp.assertImpersonatedUserIsEmpty)(u, this._onProtocolError, b), this.write(Ei.default.begin({ bookmarks: i, txConfig: o, database: a, mode: c }), b, !0), b;
  }, r.prototype.run = function(t, n, i) {
    var o = i === void 0 ? {} : i, a = o.bookmarks, u = o.txConfig, c = o.database, s = o.impersonatedUser, l = o.mode, f = o.beforeKeys, y = o.afterKeys, b = o.beforeError, O = o.afterError, S = o.beforeComplete, P = o.afterComplete, R = o.flush, $ = R === void 0 ? !0 : R, j = o.reactive, k = j === void 0 ? !1 : j, L = o.fetchSize, Y = L === void 0 ? f6 : L, ee = o.highRecordWatermark, le = ee === void 0 ? Number.MAX_VALUE : ee, me = o.lowRecordWatermark, Me = me === void 0 ? Number.MAX_VALUE : me, Pe = new xl.ResultStreamObserver({
      server: this._server,
      reactive: k,
      fetchSize: Y,
      moreFunction: this._requestMore.bind(this),
      discardFunction: this._requestDiscard.bind(this),
      beforeKeys: f,
      afterKeys: y,
      beforeError: b,
      afterError: O,
      beforeComplete: S,
      afterComplete: P,
      highRecordWatermark: le,
      lowRecordWatermark: Me
    });
    (0, Bp.assertImpersonatedUserIsEmpty)(s, this._onProtocolError, Pe);
    var Ue = k;
    return this.write(Ei.default.runWithMetadata(t, n, {
      bookmarks: a,
      txConfig: u,
      database: c,
      mode: l
    }), Pe, Ue && $), k || this.write(Ei.default.pull({ n: Y }), Pe, $), Pe;
  }, r.prototype._requestMore = function(t, n, i) {
    this.write(Ei.default.pull({ stmtId: t, n }), i, !0);
  }, r.prototype._requestDiscard = function(t, n) {
    this.write(Ei.default.discard({ stmtId: t }), n, !0);
  }, r.prototype._noOp = function() {
  }, r.prototype.requestRoutingInformation = function(t) {
    var n, i = t.routingContext, o = i === void 0 ? {} : i, a = t.databaseName, u = a === void 0 ? null : a, c = t.sessionContext, s = c === void 0 ? {} : c, l = t.onError, f = t.onCompleted, y = this.run(h6, (n = {}, n[I0] = o, n[A0] = u, n), Ya(Ya({}, s), { txConfig: d6.empty() }));
    return new xl.ProcedureRouteObserver({
      resultObserver: y,
      onProtocolError: this._onProtocolError,
      onError: l,
      onCompleted: f
    });
  }, r;
}(u6.default);
qc.default = v6;
var Yc = {}, Gc = {}, gf = h && h.__assign || function() {
  return gf = Object.assign || function(e) {
    for (var r, t = 1, n = arguments.length; t < n; t++) {
      r = arguments[t];
      for (var i in r)
        Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
    }
    return e;
  }, gf.apply(this, arguments);
}, p6 = h && h.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(Gc, "__esModule", { value: !0 });
var _6 = p6(Hc);
Gc.default = gf({}, _6.default);
var y6 = h && h.__extends || function() {
  var e = function(r, t) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var o in i)
        Object.prototype.hasOwnProperty.call(i, o) && (n[o] = i[o]);
    }, e(r, t);
  };
  return function(r, t) {
    if (typeof t != "function" && t !== null)
      throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
    e(r, t);
    function n() {
      this.constructor = r;
    }
    r.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}(), Kc = h && h.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(Yc, "__esModule", { value: !0 });
var m6 = Kc(qc), b6 = Kc(sr), g6 = Ae, O6 = te, w6 = Kc(Gc), E6 = Kc(at), S6 = O6.internal.constants.BOLT_PROTOCOL_V4_1, T6 = function(e) {
  y6(r, e);
  function r(t, n, i, o, a, u, c) {
    o === void 0 && (o = function() {
      return null;
    });
    var s = e.call(this, t, n, i, o, a, u) || this;
    return s._serversideRouting = c, s;
  }
  return Object.defineProperty(r.prototype, "version", {
    get: function() {
      return S6;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(r.prototype, "transformer", {
    get: function() {
      var t = this;
      return this._transformer === void 0 && (this._transformer = new E6.default(Object.values(w6.default).map(function(n) {
        return n(t._config, t._log);
      }))), this._transformer;
    },
    enumerable: !1,
    configurable: !0
  }), r.prototype.initialize = function(t) {
    var n = this, i = t === void 0 ? {} : t, o = i.userAgent, a = i.authToken, u = i.onError, c = i.onComplete, s = new g6.LoginObserver({
      onError: function(l) {
        return n._onLoginError(l, u);
      },
      onCompleted: function(l) {
        return n._onLoginCompleted(l, c);
      }
    });
    return this.write(b6.default.hello(o, a, this._serversideRouting), s, !0), s;
  }, r;
}(m6.default);
Yc.default = T6;
var Zc = {}, Qc = {}, Of = h && h.__assign || function() {
  return Of = Object.assign || function(e) {
    for (var r, t = 1, n = arguments.length; t < n; t++) {
      r = arguments[t];
      for (var i in r)
        Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
    }
    return e;
  }, Of.apply(this, arguments);
}, P6 = h && h.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(Qc, "__esModule", { value: !0 });
var I6 = P6(Gc);
Qc.default = Of({}, I6.default);
var A6 = h && h.__extends || function() {
  var e = function(r, t) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var o in i)
        Object.prototype.hasOwnProperty.call(i, o) && (n[o] = i[o]);
    }, e(r, t);
  };
  return function(r, t) {
    if (typeof t != "function" && t !== null)
      throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
    e(r, t);
    function n() {
      this.constructor = r;
    }
    r.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}(), Wd = h && h.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(Zc, "__esModule", { value: !0 });
var R6 = Wd(Yc), C6 = te, $6 = Wd(Qc), j6 = Wd(at), N6 = C6.internal.constants.BOLT_PROTOCOL_V4_2, M6 = function(e) {
  A6(r, e);
  function r() {
    return e !== null && e.apply(this, arguments) || this;
  }
  return Object.defineProperty(r.prototype, "version", {
    get: function() {
      return N6;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(r.prototype, "transformer", {
    get: function() {
      var t = this;
      return this._transformer === void 0 && (this._transformer = new j6.default(Object.values($6.default).map(function(n) {
        return n(t._config, t._log);
      }))), this._transformer;
    },
    enumerable: !1,
    configurable: !0
  }), r;
}(R6.default);
Zc.default = M6;
var zo = {}, Xc = {}, wf = h && h.__assign || function() {
  return wf = Object.assign || function(e) {
    for (var r, t = 1, n = arguments.length; t < n; t++) {
      r = arguments[t];
      for (var i in r)
        Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
    }
    return e;
  }, wf.apply(this, arguments);
}, k6 = h && h.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(Xc, "__esModule", { value: !0 });
var D6 = k6(Qc);
Xc.default = wf({}, D6.default);
var Yo = {}, Go = {}, Ef = h && h.__assign || function() {
  return Ef = Object.assign || function(e) {
    for (var r, t = 1, n = arguments.length; t < n; t++) {
      r = arguments[t];
      for (var i in r)
        Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
    }
    return e;
  }, Ef.apply(this, arguments);
}, U6 = h && h.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(Go, "__esModule", { value: !0 });
var L6 = U6(Xc);
Go.default = Ef({}, L6.default);
var R0 = h && h.__read || function(e, r) {
  var t = typeof Symbol == "function" && e[Symbol.iterator];
  if (!t)
    return e;
  var n = t.call(e), i, o = [], a;
  try {
    for (; (r === void 0 || r-- > 0) && !(i = n.next()).done; )
      o.push(i.value);
  } catch (u) {
    a = { error: u };
  } finally {
    try {
      i && !i.done && (t = n.return) && t.call(n);
    } finally {
      if (a)
        throw a.error;
    }
  }
  return o;
}, F6 = h && h.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(Yo, "__esModule", { value: !0 });
var Ga = nt, yt = te, C0 = F6(Go), x6 = tr, B6 = Ho, qi = yt.internal.temporalUtil.localDateTimeToEpochSecond, Wp = 73, W6 = 3, Vp = 105, V6 = 3;
function q6(e, r) {
  var t = e.disableLosslessIntegers, n = e.useBigInt, i = C0.default.createDateTimeWithZoneIdTransformer(e);
  return i.extendsWith({
    signature: Vp,
    fromStructure: function(o) {
      Ga.structure.verifyStructSize("DateTimeWithZoneId", V6, o.size);
      var a = R0(o.fields, 3), u = a[0], c = a[1], s = a[2], l = Sf(s, u, c), f = new yt.DateTime(l.year, l.month, l.day, l.hour, l.minute, l.second, (0, yt.int)(c), l.timeZoneOffsetSeconds, s);
      return $0(f, t, n);
    },
    toStructure: function(o) {
      var a = qi(o.year, o.month, o.day, o.hour, o.minute, o.second, o.nanosecond), u = o.timeZoneOffsetSeconds != null ? o.timeZoneOffsetSeconds : H6(o.timeZoneId, a, o.nanosecond);
      o.timeZoneOffsetSeconds == null && r.warn('DateTime objects without "timeZoneOffsetSeconds" property are prune to bugs related to ambiguous times. For instance, 2022-10-30T2:30:00[Europe/Berlin] could be GMT+1 or GMT+2.');
      var c = a.subtract(u), s = (0, yt.int)(o.nanosecond), l = o.timeZoneId;
      return new Ga.structure.Structure(Vp, [c, s, l]);
    }
  });
}
function H6(e, r, t) {
  var n = Sf(e, r, t), i = qi(n.year, n.month, n.day, n.hour, n.minute, n.second, t), o = i.subtract(r), a = r.subtract(o), u = Sf(e, a, t), c = qi(u.year, u.month, u.day, u.hour, u.minute, u.second, t), s = c.subtract(a);
  return s;
}
function Sf(e, r, t) {
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
  }), i = (0, yt.int)(r).multiply(1e3).add((0, yt.int)(t).div(1e6)).toNumber(), o = n.formatToParts(i), a = o.reduce(function(c, s) {
    return s.type === "era" ? c.adjustEra = s.value.toUpperCase() === "B" ? function(l) {
      return l.subtract(1).negate();
    } : B6.identity : s.type !== "literal" && (c[s.type] = (0, yt.int)(s.value)), c;
  }, {});
  a.year = a.adjustEra(a.year);
  var u = qi(a.year, a.month, a.day, a.hour, a.minute, a.second, a.nanosecond);
  return a.timeZoneOffsetSeconds = u.subtract(r), a.hour = a.hour.modulo(24), a;
}
function z6(e) {
  var r = e.disableLosslessIntegers, t = e.useBigInt, n = C0.default.createDateTimeWithOffsetTransformer(e);
  return n.extendsWith({
    signature: Wp,
    toStructure: function(i) {
      var o = qi(i.year, i.month, i.day, i.hour, i.minute, i.second, i.nanosecond), a = (0, yt.int)(i.nanosecond), u = (0, yt.int)(i.timeZoneOffsetSeconds), c = o.subtract(u);
      return new Ga.structure.Structure(Wp, [c, a, u]);
    },
    fromStructure: function(i) {
      Ga.structure.verifyStructSize("DateTimeWithZoneOffset", W6, i.size);
      var o = R0(i.fields, 3), a = o[0], u = o[1], c = o[2], s = (0, yt.int)(a).add(c), l = (0, x6.epochSecondAndNanoToLocalDateTime)(s, u), f = new yt.DateTime(l.year, l.month, l.day, l.hour, l.minute, l.second, l.nanosecond, c, null);
      return $0(f, r, t);
    }
  });
}
function $0(e, r, t) {
  if (!r && !t)
    return e;
  var n = function(u) {
    return t ? u.toBigInt() : u.toNumberOrInfinity();
  }, i = Object.create(Object.getPrototypeOf(e));
  for (var o in e)
    if (Object.prototype.hasOwnProperty.call(e, o) === !0) {
      var a = e[o];
      i[o] = (0, yt.isInt)(a) ? n(a) : a;
    }
  return Object.freeze(i), i;
}
Yo.default = {
  createDateTimeWithZoneIdTransformer: q6,
  createDateTimeWithOffsetTransformer: z6
};
var Y6 = h && h.__extends || function() {
  var e = function(r, t) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var o in i)
        Object.prototype.hasOwnProperty.call(i, o) && (n[o] = i[o]);
    }, e(r, t);
  };
  return function(r, t) {
    if (typeof t != "function" && t !== null)
      throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
    e(r, t);
    function n() {
      this.constructor = r;
    }
    r.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}(), Ka = h && h.__assign || function() {
  return Ka = Object.assign || function(e) {
    for (var r, t = 1, n = arguments.length; t < n; t++) {
      r = arguments[t];
      for (var i in r)
        Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
    }
    return e;
  }, Ka.apply(this, arguments);
}, Ko = h && h.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(zo, "__esModule", { value: !0 });
var G6 = Ko(Zc), qp = Ko(sr), Hp = Ae, zp = Ko(Xc), K6 = Ko(Yo), Yp = Ko(at), j0 = te, Z6 = j0.internal.bookmarks.Bookmarks, Q6 = j0.internal.constants.BOLT_PROTOCOL_V4_3, X6 = function(e) {
  Y6(r, e);
  function r() {
    return e !== null && e.apply(this, arguments) || this;
  }
  return Object.defineProperty(r.prototype, "version", {
    get: function() {
      return Q6;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(r.prototype, "transformer", {
    get: function() {
      var t = this;
      return this._transformer === void 0 && (this._transformer = new Yp.default(Object.values(zp.default).map(function(n) {
        return n(t._config, t._log);
      }))), this._transformer;
    },
    enumerable: !1,
    configurable: !0
  }), r.prototype.requestRoutingInformation = function(t) {
    var n = t.routingContext, i = n === void 0 ? {} : n, o = t.databaseName, a = o === void 0 ? null : o, u = t.sessionContext, c = u === void 0 ? {} : u, s = t.onError, l = t.onCompleted, f = new Hp.RouteObserver({
      onProtocolError: this._onProtocolError,
      onError: s,
      onCompleted: l
    }), y = c.bookmarks || Z6.empty();
    return this.write(qp.default.route(i, y.values(), a), f, !0), f;
  }, r.prototype.initialize = function(t) {
    var n = this, i = t === void 0 ? {} : t, o = i.userAgent, a = i.authToken, u = i.onError, c = i.onComplete, s = new Hp.LoginObserver({
      onError: function(l) {
        return n._onLoginError(l, u);
      },
      onCompleted: function(l) {
        return l.patch_bolt !== void 0 && n._applyPatches(l.patch_bolt), n._onLoginCompleted(l, c);
      }
    });
    return this.write(qp.default.hello(o, a, this._serversideRouting, ["utc"]), s, !0), s;
  }, r.prototype._applyPatches = function(t) {
    t.includes("utc") && this._applyUtcPatch();
  }, r.prototype._applyUtcPatch = function() {
    var t = this;
    this._transformer = new Yp.default(Object.values(Ka(Ka({}, zp.default), K6.default)).map(function(n) {
      return n(t._config, t._log);
    }));
  }, r;
}(G6.default);
zo.default = X6;
var Jc = {}, J6 = h && h.__extends || function() {
  var e = function(r, t) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var o in i)
        Object.prototype.hasOwnProperty.call(i, o) && (n[o] = i[o]);
    }, e(r, t);
  };
  return function(r, t) {
    if (typeof t != "function" && t !== null)
      throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
    e(r, t);
    function n() {
      this.constructor = r;
    }
    r.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}(), Za = h && h.__assign || function() {
  return Za = Object.assign || function(e) {
    for (var r, t = 1, n = arguments.length; t < n; t++) {
      r = arguments[t];
      for (var i in r)
        Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
    }
    return e;
  }, Za.apply(this, arguments);
}, Zo = h && h.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(Jc, "__esModule", { value: !0 });
var eW = Zo(zo), N0 = te, ya = Zo(sr), Bl = Ae, Gp = Zo(Go), tW = Zo(Yo), Kp = Zo(at), M0 = N0.internal.constants, rW = M0.BOLT_PROTOCOL_V4_4, nW = M0.FETCH_ALL, iW = N0.internal.bookmarks.Bookmarks, oW = function(e) {
  J6(r, e);
  function r() {
    return e !== null && e.apply(this, arguments) || this;
  }
  return Object.defineProperty(r.prototype, "version", {
    get: function() {
      return rW;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(r.prototype, "transformer", {
    get: function() {
      var t = this;
      return this._transformer === void 0 && (this._transformer = new Kp.default(Object.values(Gp.default).map(function(n) {
        return n(t._config, t._log);
      }))), this._transformer;
    },
    enumerable: !1,
    configurable: !0
  }), r.prototype.requestRoutingInformation = function(t) {
    var n = t.routingContext, i = n === void 0 ? {} : n, o = t.databaseName, a = o === void 0 ? null : o, u = t.impersonatedUser, c = u === void 0 ? null : u, s = t.sessionContext, l = s === void 0 ? {} : s, f = t.onError, y = t.onCompleted, b = new Bl.RouteObserver({
      onProtocolError: this._onProtocolError,
      onError: f,
      onCompleted: y
    }), O = l.bookmarks || iW.empty();
    return this.write(ya.default.routeV4x4(i, O.values(), { databaseName: a, impersonatedUser: c }), b, !0), b;
  }, r.prototype.run = function(t, n, i) {
    var o = i === void 0 ? {} : i, a = o.bookmarks, u = o.txConfig, c = o.database, s = o.mode, l = o.impersonatedUser, f = o.beforeKeys, y = o.afterKeys, b = o.beforeError, O = o.afterError, S = o.beforeComplete, P = o.afterComplete, R = o.flush, $ = R === void 0 ? !0 : R, j = o.reactive, k = j === void 0 ? !1 : j, L = o.fetchSize, Y = L === void 0 ? nW : L, ee = o.highRecordWatermark, le = ee === void 0 ? Number.MAX_VALUE : ee, me = o.lowRecordWatermark, Me = me === void 0 ? Number.MAX_VALUE : me, Pe = new Bl.ResultStreamObserver({
      server: this._server,
      reactive: k,
      fetchSize: Y,
      moreFunction: this._requestMore.bind(this),
      discardFunction: this._requestDiscard.bind(this),
      beforeKeys: f,
      afterKeys: y,
      beforeError: b,
      afterError: O,
      beforeComplete: S,
      afterComplete: P,
      highRecordWatermark: le,
      lowRecordWatermark: Me
    }), Ue = k;
    return this.write(ya.default.runWithMetadata(t, n, {
      bookmarks: a,
      txConfig: u,
      database: c,
      mode: s,
      impersonatedUser: l
    }), Pe, Ue && $), k || this.write(ya.default.pull({ n: Y }), Pe, $), Pe;
  }, r.prototype.beginTransaction = function(t) {
    var n = t === void 0 ? {} : t, i = n.bookmarks, o = n.txConfig, a = n.database, u = n.mode, c = n.impersonatedUser, s = n.beforeError, l = n.afterError, f = n.beforeComplete, y = n.afterComplete, b = new Bl.ResultStreamObserver({
      server: this._server,
      beforeError: s,
      afterError: l,
      beforeComplete: f,
      afterComplete: y
    });
    return b.prepareToHandleSingleResponse(), this.write(ya.default.begin({ bookmarks: i, txConfig: o, database: a, mode: u, impersonatedUser: c }), b, !0), b;
  }, r.prototype._applyUtcPatch = function() {
    var t = this;
    this._transformer = new Kp.default(Object.values(Za(Za({}, Gp.default), tW.default)).map(function(n) {
      return n(t._config, t._log);
    }));
  }, r;
}(eW.default);
Jc.default = oW;
var Vd = {}, qd = {}, ki = h && h.__assign || function() {
  return ki = Object.assign || function(e) {
    for (var r, t = 1, n = arguments.length; t < n; t++) {
      r = arguments[t];
      for (var i in r)
        Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
    }
    return e;
  }, ki.apply(this, arguments);
}, Hd = h && h.__read || function(e, r) {
  var t = typeof Symbol == "function" && e[Symbol.iterator];
  if (!t)
    return e;
  var n = t.call(e), i, o = [], a;
  try {
    for (; (r === void 0 || r-- > 0) && !(i = n.next()).done; )
      o.push(i.value);
  } catch (u) {
    a = { error: u };
  } finally {
    try {
      i && !i.done && (t = n.return) && t.call(n);
    } finally {
      if (a)
        throw a.error;
    }
  }
  return o;
}, k0 = h && h.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(qd, "__esModule", { value: !0 });
var zd = nt, Yd = te, el = k0(Go), aW = k0(Yo), uW = 4, sW = 8, cW = 4;
function lW(e) {
  var r = el.default.createNodeTransformer(e);
  return r.extendsWith({
    fromStructure: function(t) {
      zd.structure.verifyStructSize("Node", uW, t.size);
      var n = Hd(t.fields, 4), i = n[0], o = n[1], a = n[2], u = n[3];
      return new Yd.Node(i, o, a, u);
    }
  });
}
function fW(e) {
  var r = el.default.createRelationshipTransformer(e);
  return r.extendsWith({
    fromStructure: function(t) {
      zd.structure.verifyStructSize("Relationship", sW, t.size);
      var n = Hd(t.fields, 8), i = n[0], o = n[1], a = n[2], u = n[3], c = n[4], s = n[5], l = n[6], f = n[7];
      return new Yd.Relationship(i, o, a, u, c, s, l, f);
    }
  });
}
function dW(e) {
  var r = el.default.createUnboundRelationshipTransformer(e);
  return r.extendsWith({
    fromStructure: function(t) {
      zd.structure.verifyStructSize("UnboundRelationship", cW, t.size);
      var n = Hd(t.fields, 4), i = n[0], o = n[1], a = n[2], u = n[3];
      return new Yd.UnboundRelationship(i, o, a, u);
    }
  });
}
qd.default = ki(ki(ki({}, el.default), aW.default), { createNodeTransformer: lW, createRelationshipTransformer: fW, createUnboundRelationshipTransformer: dW });
var hW = h && h.__extends || function() {
  var e = function(r, t) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var o in i)
        Object.prototype.hasOwnProperty.call(i, o) && (n[o] = i[o]);
    }, e(r, t);
  };
  return function(r, t) {
    if (typeof t != "function" && t !== null)
      throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
    e(r, t);
    function n() {
      this.constructor = r;
    }
    r.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}(), tl = h && h.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(Vd, "__esModule", { value: !0 });
var vW = tl(Jc), pW = tl(qd), _W = tl(at), yW = tl(sr), mW = Ae, bW = te, gW = bW.internal.constants.BOLT_PROTOCOL_V5_0, OW = function(e) {
  hW(r, e);
  function r() {
    return e !== null && e.apply(this, arguments) || this;
  }
  return Object.defineProperty(r.prototype, "version", {
    get: function() {
      return gW;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(r.prototype, "transformer", {
    get: function() {
      var t = this;
      return this._transformer === void 0 && (this._transformer = new _W.default(Object.values(pW.default).map(function(n) {
        return n(t._config, t._log);
      }))), this._transformer;
    },
    enumerable: !1,
    configurable: !0
  }), r.prototype.initialize = function(t) {
    var n = this, i = t === void 0 ? {} : t, o = i.userAgent, a = i.authToken, u = i.onError, c = i.onComplete, s = new mW.LoginObserver({
      onError: function(l) {
        return n._onLoginError(l, u);
      },
      onCompleted: function(l) {
        return n._onLoginCompleted(l, c);
      }
    });
    return this.write(yW.default.hello(o, a, this._serversideRouting), s, !0), s;
  }, r;
}(vW.default);
Vd.default = OW;
var Gd = {};
Object.defineProperty(Gd, "__esModule", { value: !0 });
var kr = te, wW = 112, EW = 113, SW = 126, TW = 127;
function Zt() {
}
function Zp(e) {
  return e;
}
var PW = {
  onNext: Zt,
  onCompleted: Zt,
  onError: Zt
}, IW = function() {
  function e(r) {
    var t = r === void 0 ? {} : r, n = t.transformMetadata, i = t.log, o = t.observer;
    this._pendingObservers = [], this._log = i, this._transformMetadata = n || Zp, this._observer = Object.assign({
      onPendingObserversChange: Zt,
      onError: Zt,
      onFailure: Zt,
      onErrorApplyTransformation: Zp
    }, o);
  }
  return Object.defineProperty(e.prototype, "currentFailure", {
    get: function() {
      return this._currentFailure;
    },
    enumerable: !1,
    configurable: !0
  }), e.prototype.handleResponse = function(r) {
    var t = r.fields[0];
    switch (r.signature) {
      case EW:
        this._log.isDebugEnabled() && this._log.debug("S: RECORD ".concat(kr.json.stringify(r))), this._currentObserver.onNext(t);
        break;
      case wW:
        this._log.isDebugEnabled() && this._log.debug("S: SUCCESS ".concat(kr.json.stringify(r)));
        try {
          var n = this._transformMetadata(t);
          this._currentObserver.onCompleted(n);
        } finally {
          this._updateCurrentObserver();
        }
        break;
      case TW:
        this._log.isDebugEnabled() && this._log.debug("S: FAILURE ".concat(kr.json.stringify(r)));
        try {
          var i = AW(t.code), o = (0, kr.newError)(t.message, i);
          this._currentFailure = this._observer.onErrorApplyTransformation(o), this._currentObserver.onError(this._currentFailure);
        } finally {
          this._updateCurrentObserver(), this._observer.onFailure(this._currentFailure);
        }
        break;
      case SW:
        this._log.isDebugEnabled() && this._log.debug("S: IGNORED ".concat(kr.json.stringify(r)));
        try {
          this._currentFailure && this._currentObserver.onError ? this._currentObserver.onError(this._currentFailure) : this._currentObserver.onError && this._currentObserver.onError((0, kr.newError)("Ignored either because of an error or RESET"));
        } finally {
          this._updateCurrentObserver();
        }
        break;
      default:
        this._observer.onError((0, kr.newError)("Unknown Bolt protocol message: " + r));
    }
  }, e.prototype._updateCurrentObserver = function() {
    this._currentObserver = this._pendingObservers.shift(), this._observer.onPendingObserversChange(this._pendingObservers.length);
  }, e.prototype._queueObserver = function(r) {
    return r = r || PW, r.onCompleted = r.onCompleted || Zt, r.onError = r.onError || Zt, r.onNext = r.onNext || Zt, this._currentObserver === void 0 ? this._currentObserver = r : this._pendingObservers.push(r), this._observer.onPendingObserversChange(this._pendingObservers.length), !0;
  }, e.prototype._notifyErrorToObservers = function(r) {
    for (this._currentObserver && this._currentObserver.onError && this._currentObserver.onError(r); this._pendingObservers.length > 0; ) {
      var t = this._pendingObservers.shift();
      t && t.onError && t.onError(r);
    }
  }, e.prototype.hasOngoingObservableRequests = function() {
    return this._currentObserver != null || this._pendingObservers.length > 0;
  }, e.prototype._resetFailure = function() {
    this._currentFailure = null;
  }, e;
}();
Gd.default = IW;
function AW(e) {
  return e === "Neo.TransientError.Transaction.Terminated" ? "Neo.ClientError.Transaction.Terminated" : e === "Neo.TransientError.Transaction.LockClientStopped" ? "Neo.ClientError.Transaction.LockClientStopped" : e;
}
var zt = h && h.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(jd, "__esModule", { value: !0 });
var RW = te, CW = zt(Ac), $W = zt(Lc), jW = zt(Bc), NW = zt(qc), MW = zt(Yc), kW = zt(Zc), DW = zt(zo), UW = zt(Jc), LW = zt(Vd), FW = zt(Gd);
function xW(e) {
  var r = e === void 0 ? {} : e, t = r.version, n = r.chunker, i = r.dechunker, o = r.channel, a = r.disableLosslessIntegers, u = r.useBigInt, c = r.serversideRouting, s = r.server, l = r.log, f = r.observer, y = function(b) {
    var O = new FW.default({
      transformMetadata: b.transformMetadata.bind(b),
      log: l,
      observer: f
    });
    return o.onerror = f.onError.bind(f), o.onmessage = function(S) {
      return i.write(S);
    }, i.onmessage = function(S) {
      try {
        O.handleResponse(b.unpack(S));
      } catch (P) {
        return f.onError(P);
      }
    }, O;
  };
  return BW(t, s, n, { disableLosslessIntegers: a, useBigInt: u }, c, y, f.onProtocolError.bind(f), l);
}
jd.default = xW;
function BW(e, r, t, n, i, o, a, u) {
  switch (e) {
    case 1:
      return new CW.default(r, t, n, o, u, a);
    case 2:
      return new $W.default(r, t, n, o, u, a);
    case 3:
      return new jW.default(r, t, n, o, u, a);
    case 4:
      return new NW.default(r, t, n, o, u, a);
    case 4.1:
      return new MW.default(r, t, n, o, u, a, i);
    case 4.2:
      return new kW.default(r, t, n, o, u, a, i);
    case 4.3:
      return new DW.default(r, t, n, o, u, a, i);
    case 4.4:
      return new UW.default(r, t, n, o, u, a, i);
    case 5:
      return new LW.default(r, t, n, o, u, a, i);
    default:
      throw (0, RW.newError)("Unknown Bolt protocol version: " + e);
  }
}
(function(e) {
  var r = h && h.__createBinding || (Object.create ? function(c, s, l, f) {
    f === void 0 && (f = l);
    var y = Object.getOwnPropertyDescriptor(s, l);
    (!y || ("get" in y ? !s.__esModule : y.writable || y.configurable)) && (y = { enumerable: !0, get: function() {
      return s[l];
    } }), Object.defineProperty(c, f, y);
  } : function(c, s, l, f) {
    f === void 0 && (f = l), c[f] = s[l];
  }), t = h && h.__exportStar || function(c, s) {
    for (var l in c)
      l !== "default" && !Object.prototype.hasOwnProperty.call(s, l) && r(s, c, l);
  }, n = h && h.__importDefault || function(c) {
    return c && c.__esModule ? c : { default: c };
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.RawRoutingTable = e.BoltProtocol = void 0;
  var i = n(Sd), o = n(jd), a = n(zo), u = n(Rc);
  t(Ae, e), e.BoltProtocol = a.default, e.RawRoutingTable = u.default, e.default = {
    handshake: i.default,
    create: o.default
  };
})(Ed);
var Kd = {}, gr = {};
Object.defineProperty(gr, "__esModule", { value: !0 });
gr.DEFAULT_ACQUISITION_TIMEOUT = gr.DEFAULT_MAX_SIZE = void 0;
var Ra = 100;
gr.DEFAULT_MAX_SIZE = Ra;
var Ca = 60 * 1e3;
gr.DEFAULT_ACQUISITION_TIMEOUT = Ca;
var WW = function() {
  function e(r, t) {
    this.maxSize = Qp(r, Ra), this.acquisitionTimeout = Qp(t, Ca);
  }
  return e.defaultConfig = function() {
    return new e(Ra, Ca);
  }, e.fromDriverConfig = function(r) {
    var t = Xp(r.maxConnectionPoolSize), n = t ? r.maxConnectionPoolSize : Ra, i = Xp(r.connectionAcquisitionTimeout), o = i ? r.connectionAcquisitionTimeout : Ca;
    return new e(n, o);
  }, e;
}();
gr.default = WW;
function Qp(e, r) {
  return e === 0 || e ? e : r;
}
function Xp(e) {
  return e === 0 || e;
}
var Zd = {}, ma = h && h.__awaiter || function(e, r, t, n) {
  function i(o) {
    return o instanceof t ? o : new t(function(a) {
      a(o);
    });
  }
  return new (t || (t = Promise))(function(o, a) {
    function u(l) {
      try {
        s(n.next(l));
      } catch (f) {
        a(f);
      }
    }
    function c(l) {
      try {
        s(n.throw(l));
      } catch (f) {
        a(f);
      }
    }
    function s(l) {
      l.done ? o(l.value) : i(l.value).then(u, c);
    }
    s((n = n.apply(e, r || [])).next());
  });
}, ba = h && h.__generator || function(e, r) {
  var t = { label: 0, sent: function() {
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
    for (; a && (a = 0, s[0] && (t = 0)), t; )
      try {
        if (n = 1, i && (o = s[0] & 2 ? i.return : s[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, s[1])).done)
          return o;
        switch (i = 0, o && (s = [s[0] & 2, o.value]), s[0]) {
          case 0:
          case 1:
            o = s;
            break;
          case 4:
            return t.label++, { value: s[1], done: !1 };
          case 5:
            t.label++, i = s[1], s = [0];
            continue;
          case 7:
            s = t.ops.pop(), t.trys.pop();
            continue;
          default:
            if (o = t.trys, !(o = o.length > 0 && o[o.length - 1]) && (s[0] === 6 || s[0] === 2)) {
              t = 0;
              continue;
            }
            if (s[0] === 3 && (!o || s[1] > o[0] && s[1] < o[3])) {
              t.label = s[1];
              break;
            }
            if (s[0] === 6 && t.label < o[1]) {
              t.label = o[1], o = s;
              break;
            }
            if (o && t.label < o[2]) {
              t.label = o[2], t.ops.push(s);
              break;
            }
            o[2] && t.ops.pop(), t.trys.pop();
            continue;
        }
        s = r.call(e, t);
      } catch (l) {
        s = [6, l], i = 0;
      } finally {
        n = o = 0;
      }
    if (s[0] & 5)
      throw s[1];
    return { value: s[0] ? s[1] : void 0, done: !0 };
  }
}, VW = h && h.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(Zd, "__esModule", { value: !0 });
var qW = VW(gr), Tf = te, HW = Tf.internal.logger.Logger, zW = function() {
  function e(r) {
    var t = r === void 0 ? {} : r, n = t.create, i = n === void 0 ? function(R, $) {
      return Promise.resolve();
    } : n, o = t.destroy, a = o === void 0 ? function(R) {
      return Promise.resolve();
    } : o, u = t.validate, c = u === void 0 ? function(R) {
      return !0;
    } : u, s = t.installIdleObserver, l = s === void 0 ? function(R, $) {
    } : s, f = t.removeIdleObserver, y = f === void 0 ? function(R) {
    } : f, b = t.config, O = b === void 0 ? qW.default.defaultConfig() : b, S = t.log, P = S === void 0 ? HW.noOp() : S;
    this._create = i, this._destroy = a, this._validate = c, this._installIdleObserver = l, this._removeIdleObserver = y, this._maxSize = O.maxSize, this._acquisitionTimeout = O.acquisitionTimeout, this._pools = {}, this._pendingCreates = {}, this._acquireRequests = {}, this._activeResourceCounts = {}, this._release = this._release.bind(this), this._log = P, this._closed = !1;
  }
  return e.prototype.acquire = function(r) {
    var t = this, n = r.asKey(), i = this._acquireRequests, o = i[n];
    return o || (i[n] = []), new Promise(function(a, u) {
      var c = null, s = setTimeout(function() {
        var l = i[n];
        if (l && (i[n] = l.filter(function(b) {
          return b !== c;
        })), !c.isCompleted()) {
          var f = t.activeResourceCount(r), y = t.has(r) ? t._pools[n].length : 0;
          c.reject((0, Tf.newError)("Connection acquisition timed out in ".concat(t._acquisitionTimeout, " ms. Pool status: Active conn count = ").concat(f, ", Idle conn count = ").concat(y, ".")));
        }
      }, t._acquisitionTimeout);
      c = new GW(n, a, u, s, t._log), i[n].push(c), t._processPendingAcquireRequests(r);
    });
  }, e.prototype.purge = function(r) {
    return this._purgeKey(r.asKey());
  }, e.prototype.close = function() {
    return ma(this, void 0, void 0, function() {
      var r = this;
      return ba(this, function(t) {
        switch (t.label) {
          case 0:
            return this._closed = !0, [4, Promise.all(Object.keys(this._pools).map(function(n) {
              return r._purgeKey(n);
            }))];
          case 1:
            return [2, t.sent()];
        }
      });
    });
  }, e.prototype.keepAll = function(r) {
    var t = this, n = r.map(function(a) {
      return a.asKey();
    }), i = Object.keys(this._pools), o = i.filter(function(a) {
      return n.indexOf(a) === -1;
    });
    return Promise.all(o.map(function(a) {
      return t._purgeKey(a);
    }));
  }, e.prototype.has = function(r) {
    return r.asKey() in this._pools;
  }, e.prototype.activeResourceCount = function(r) {
    return this._activeResourceCounts[r.asKey()] || 0;
  }, e.prototype._getOrInitializePoolFor = function(r) {
    var t = this._pools[r];
    return t || (t = new KW(), this._pools[r] = t, this._pendingCreates[r] = 0), t;
  }, e.prototype._acquire = function(r) {
    return ma(this, void 0, void 0, function() {
      var t, n, i, o, a, u = this;
      return ba(this, function(c) {
        switch (c.label) {
          case 0:
            if (this._closed)
              throw (0, Tf.newError)("Pool is closed, it is no more able to serve requests.");
            t = r.asKey(), n = this._getOrInitializePoolFor(t), c.label = 1;
          case 1:
            return n.length ? (i = n.pop(), this._validate(i) ? (this._removeIdleObserver && this._removeIdleObserver(i), Jp(t, this._activeResourceCounts), this._log.isDebugEnabled() && this._log.debug("".concat(i, " acquired from the pool ").concat(t)), [2, { resource: i, pool: n }]) : [3, 2]) : [3, 5];
          case 2:
            return [4, this._destroy(i)];
          case 3:
            c.sent(), c.label = 4;
          case 4:
            return [3, 1];
          case 5:
            if (this._maxSize > 0 && (o = this.activeResourceCount(r) + this._pendingCreates[t], o >= this._maxSize))
              return [2, { resource: null, pool: n }];
            this._pendingCreates[t] = this._pendingCreates[t] + 1, c.label = 6;
          case 6:
            return c.trys.push([6, , 8, 9]), [4, this._create(r, function(s, l) {
              return u._release(s, l, n);
            })];
          case 7:
            return a = c.sent(), Jp(t, this._activeResourceCounts), this._log.isDebugEnabled() && this._log.debug("".concat(a, " created for the pool ").concat(t)), [3, 9];
          case 8:
            return this._pendingCreates[t] = this._pendingCreates[t] - 1, [7];
          case 9:
            return [2, { resource: a, pool: n }];
        }
      });
    });
  }, e.prototype._release = function(r, t, n) {
    return ma(this, void 0, void 0, function() {
      var i, o = this;
      return ba(this, function(a) {
        switch (a.label) {
          case 0:
            return i = r.asKey(), n.isActive() ? this._validate(t) ? [3, 2] : (this._log.isDebugEnabled() && this._log.debug("".concat(t, " destroyed and can't be released to the pool ").concat(i, " because it is not functional")), [4, this._destroy(t)]) : [3, 4];
          case 1:
            return a.sent(), [3, 3];
          case 2:
            this._installIdleObserver && this._installIdleObserver(t, {
              onError: function(u) {
                o._log.debug("Idle connection ".concat(t, " destroyed because of error: ").concat(u));
                var c = o._pools[i];
                c && (o._pools[i] = c.filter(function(s) {
                  return s !== t;
                })), o._destroy(t).catch(function() {
                });
              }
            }), n.push(t), this._log.isDebugEnabled() && this._log.debug("".concat(t, " released to the pool ").concat(i)), a.label = 3;
          case 3:
            return [3, 6];
          case 4:
            return this._log.isDebugEnabled() && this._log.debug("".concat(t, " destroyed and can't be released to the pool ").concat(i, " because pool has been purged")), [4, this._destroy(t)];
          case 5:
            a.sent(), a.label = 6;
          case 6:
            return YW(i, this._activeResourceCounts), this._processPendingAcquireRequests(r), [2];
        }
      });
    });
  }, e.prototype._purgeKey = function(r) {
    return ma(this, void 0, void 0, function() {
      var t, n, i;
      return ba(this, function(o) {
        switch (o.label) {
          case 0:
            if (t = this._pools[r], n = [], !t)
              return [3, 2];
            for (; t.length; )
              i = t.pop(), this._removeIdleObserver && this._removeIdleObserver(i), n.push(this._destroy(i));
            return t.close(), delete this._pools[r], [4, Promise.all(n)];
          case 1:
            o.sent(), o.label = 2;
          case 2:
            return [2];
        }
      });
    });
  }, e.prototype._processPendingAcquireRequests = function(r) {
    var t = this, n = r.asKey(), i = this._acquireRequests[n];
    if (i) {
      var o = i.shift();
      o ? this._acquire(r).catch(function(a) {
        return o.reject(a), { resource: null };
      }).then(function(a) {
        var u = a.resource, c = a.pool;
        u ? o.isCompleted() ? t._release(r, u, c) : o.resolve(u) : o.isCompleted() || (t._acquireRequests[n] || (t._acquireRequests[n] = []), t._acquireRequests[n].unshift(o));
      }) : delete this._acquireRequests[n];
    }
  }, e;
}();
function Jp(e, r) {
  var t = r[e] || 0;
  r[e] = t + 1;
}
function YW(e, r) {
  var t = r[e] || 0, n = t - 1;
  n > 0 ? r[e] = n : delete r[e];
}
var GW = function() {
  function e(r, t, n, i, o) {
    this._key = r, this._resolve = t, this._reject = n, this._timeoutId = i, this._log = o, this._completed = !1;
  }
  return e.prototype.isCompleted = function() {
    return this._completed;
  }, e.prototype.resolve = function(r) {
    this._completed || (this._completed = !0, clearTimeout(this._timeoutId), this._log.isDebugEnabled() && this._log.debug("".concat(r, " acquired from the pool ").concat(this._key)), this._resolve(r));
  }, e.prototype.reject = function(r) {
    this._completed || (this._completed = !0, clearTimeout(this._timeoutId), this._reject(r));
  }, e;
}(), KW = function() {
  function e() {
    this._active = !0, this._elements = [];
  }
  return e.prototype.isActive = function() {
    return this._active;
  }, e.prototype.close = function() {
    this._active = !1;
  }, e.prototype.filter = function(r) {
    return this._elements = this._elements.filter(r), this;
  }, Object.defineProperty(e.prototype, "length", {
    get: function() {
      return this._elements.length;
    },
    enumerable: !1,
    configurable: !0
  }), e.prototype.pop = function() {
    return this._elements.pop();
  }, e.prototype.push = function(r) {
    return this._elements.push(r);
  }, e;
}();
Zd.default = zW;
(function(e) {
  var r = h && h.__createBinding || (Object.create ? function(u, c, s, l) {
    l === void 0 && (l = s);
    var f = Object.getOwnPropertyDescriptor(c, s);
    (!f || ("get" in f ? !c.__esModule : f.writable || f.configurable)) && (f = { enumerable: !0, get: function() {
      return c[s];
    } }), Object.defineProperty(u, l, f);
  } : function(u, c, s, l) {
    l === void 0 && (l = s), u[l] = c[s];
  }), t = h && h.__setModuleDefault || (Object.create ? function(u, c) {
    Object.defineProperty(u, "default", { enumerable: !0, value: c });
  } : function(u, c) {
    u.default = c;
  }), n = h && h.__importStar || function(u) {
    if (u && u.__esModule)
      return u;
    var c = {};
    if (u != null)
      for (var s in u)
        s !== "default" && Object.prototype.hasOwnProperty.call(u, s) && r(c, u, s);
    return t(c, u), c;
  }, i = h && h.__importDefault || function(u) {
    return u && u.__esModule ? u : { default: u };
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.DEFAULT_MAX_SIZE = e.DEFAULT_ACQUISITION_TIMEOUT = e.PoolConfig = e.Pool = void 0;
  var o = n(gr);
  e.PoolConfig = o.default, Object.defineProperty(e, "DEFAULT_ACQUISITION_TIMEOUT", { enumerable: !0, get: function() {
    return o.DEFAULT_ACQUISITION_TIMEOUT;
  } }), Object.defineProperty(e, "DEFAULT_MAX_SIZE", { enumerable: !0, get: function() {
    return o.DEFAULT_MAX_SIZE;
  } });
  var a = i(Zd);
  e.Pool = a.default, e.default = a.default;
})(Kd);
var D0 = {}, rl = {}, ZW = h && h.__extends || function() {
  var e = function(r, t) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var o in i)
        Object.prototype.hasOwnProperty.call(i, o) && (n[o] = i[o]);
    }, e(r, t);
  };
  return function(r, t) {
    if (typeof t != "function" && t !== null)
      throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
    e(r, t);
    function n() {
      this.constructor = r;
    }
    r.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}();
Object.defineProperty(rl, "__esModule", { value: !0 });
var QW = te, XW = function(e) {
  ZW(r, e);
  function r(t) {
    var n = e.call(this) || this;
    return n._connection = t, n;
  }
  return r.prototype.acquireConnection = function(t) {
    var n = t === void 0 ? {} : t;
    n.accessMode, n.database, n.bookmarks;
    var i = this._connection;
    return this._connection = null, Promise.resolve(i);
  }, r;
}(QW.ConnectionProvider);
rl.default = XW;
var Qo = {}, nl = {}, Xo = {};
Object.defineProperty(Xo, "__esModule", { value: !0 });
var JW = function() {
  function e(r) {
    this._errorHandler = r;
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
    set: function(r) {
      throw new Error("not implemented");
    },
    enumerable: !1,
    configurable: !0
  }), e.prototype.isOpen = function() {
    throw new Error("not implemented");
  }, e.prototype.protocol = function() {
    throw new Error("not implemented");
  }, Object.defineProperty(e.prototype, "address", {
    get: function() {
      throw new Error("not implemented");
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(e.prototype, "version", {
    get: function() {
      throw new Error("not implemented");
    },
    set: function(r) {
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
  }), e.prototype.connect = function(r, t) {
    throw new Error("not implemented");
  }, e.prototype.write = function(r, t, n) {
    throw new Error("not implemented");
  }, e.prototype.resetAndFlush = function() {
    throw new Error("not implemented");
  }, e.prototype.hasOngoingObservableRequests = function() {
    throw new Error("not implemented");
  }, e.prototype.close = function() {
    throw new Error("not implemented");
  }, e.prototype.handleAndTransformError = function(r, t) {
    return this._errorHandler ? this._errorHandler.handleAndTransformError(r, t) : r;
  }, e;
}();
Xo.default = JW;
var Jo = {}, eV = h && h.__extends || function() {
  var e = function(r, t) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var o in i)
        Object.prototype.hasOwnProperty.call(i, o) && (n[o] = i[o]);
    }, e(r, t);
  };
  return function(r, t) {
    if (typeof t != "function" && t !== null)
      throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
    e(r, t);
    function n() {
      this.constructor = r;
    }
    r.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}(), tV = h && h.__awaiter || function(e, r, t, n) {
  function i(o) {
    return o instanceof t ? o : new t(function(a) {
      a(o);
    });
  }
  return new (t || (t = Promise))(function(o, a) {
    function u(l) {
      try {
        s(n.next(l));
      } catch (f) {
        a(f);
      }
    }
    function c(l) {
      try {
        s(n.throw(l));
      } catch (f) {
        a(f);
      }
    }
    function s(l) {
      l.done ? o(l.value) : i(l.value).then(u, c);
    }
    s((n = n.apply(e, r || [])).next());
  });
}, rV = h && h.__generator || function(e, r) {
  var t = { label: 0, sent: function() {
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
    for (; a && (a = 0, s[0] && (t = 0)), t; )
      try {
        if (n = 1, i && (o = s[0] & 2 ? i.return : s[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, s[1])).done)
          return o;
        switch (i = 0, o && (s = [s[0] & 2, o.value]), s[0]) {
          case 0:
          case 1:
            o = s;
            break;
          case 4:
            return t.label++, { value: s[1], done: !1 };
          case 5:
            t.label++, i = s[1], s = [0];
            continue;
          case 7:
            s = t.ops.pop(), t.trys.pop();
            continue;
          default:
            if (o = t.trys, !(o = o.length > 0 && o[o.length - 1]) && (s[0] === 6 || s[0] === 2)) {
              t = 0;
              continue;
            }
            if (s[0] === 3 && (!o || s[1] > o[0] && s[1] < o[3])) {
              t.label = s[1];
              break;
            }
            if (s[0] === 6 && t.label < o[1]) {
              t.label = o[1], o = s;
              break;
            }
            if (o && t.label < o[2]) {
              t.label = o[2], t.ops.push(s);
              break;
            }
            o[2] && t.ops.pop(), t.trys.pop();
            continue;
        }
        s = r.call(e, t);
      } catch (l) {
        s = [6, l], i = 0;
      } finally {
        n = o = 0;
      }
    if (s[0] & 5)
      throw s[1];
    return { value: s[0] ? s[1] : void 0, done: !0 };
  }
}, U0 = h && h.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(Jo, "__esModule", { value: !0 });
Jo.createChannelConnection = void 0;
var ga = ui, Di = te, nV = U0(Xo), e_ = U0(Ed), iV = Di.error.PROTOCOL_ERROR, oV = Di.internal.logger.Logger, aV = 0;
function uV(e, r, t, n, i, o) {
  i === void 0 && (i = null), o === void 0 && (o = function(c) {
    return new ga.Channel(c);
  });
  var a = new ga.ChannelConfig(e, r, t.errorCode()), u = o(a);
  return e_.default.handshake(u).then(function(c) {
    var s = c.protocolVersion, l = c.consumeRemainingBuffer, f = new ga.Chunker(u), y = new ga.Dechunker(), b = function(S) {
      return e_.default.create({
        version: s,
        channel: u,
        chunker: f,
        dechunker: y,
        disableLosslessIntegers: r.disableLosslessIntegers,
        useBigInt: r.useBigInt,
        serversideRouting: i,
        server: S.server,
        log: S.logger,
        observer: {
          onPendingObserversChange: S._handleOngoingRequestsNumberChange.bind(S),
          onError: S._handleFatalError.bind(S),
          onFailure: S._resetOnFailure.bind(S),
          onProtocolError: S._handleProtocolError.bind(S),
          onErrorApplyTransformation: function(P) {
            return S.handleAndTransformError(P, S._address);
          }
        }
      });
    }, O = new L0(u, t, e, n, r.disableLosslessIntegers, i, f, b);
    return l(function(S) {
      return y.write(S);
    }), O;
  }).catch(function(c) {
    return u.close().then(function() {
      throw c;
    });
  });
}
Jo.createChannelConnection = uV;
var L0 = function(e) {
  eV(r, e);
  function r(t, n, i, o, a, u, c, s) {
    a === void 0 && (a = !1), u === void 0 && (u = null);
    var l = e.call(this, n) || this;
    return l._reseting = !1, l._resetObservers = [], l._id = aV++, l._address = i, l._server = { address: i.asHostPort() }, l.creationTimestamp = Date.now(), l._disableLosslessIntegers = a, l._ch = t, l._chunker = c, l._log = sV(l, o), l._serversideRouting = u, l._dbConnectionId = null, l._protocol = s(l), l._isBroken = !1, l._log.isDebugEnabled() && l._log.debug("created towards ".concat(i)), l;
  }
  return Object.defineProperty(r.prototype, "id", {
    get: function() {
      return this._id;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(r.prototype, "databaseId", {
    get: function() {
      return this._dbConnectionId;
    },
    set: function(t) {
      this._dbConnectionId = t;
    },
    enumerable: !1,
    configurable: !0
  }), r.prototype.connect = function(t, n) {
    return this._initialize(t, n);
  }, r.prototype._initialize = function(t, n) {
    var i = this, o = this;
    return new Promise(function(a, u) {
      i._protocol.initialize({
        userAgent: t,
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
              var f = c.hints["connection.recv_timeout_seconds"];
              if (f != null) {
                var y = (0, Di.toNumber)(f);
                Number.isInteger(y) && y > 0 ? i._ch.setupReceiveTimeout(y * 1e3) : i._log.info("Server located at ".concat(i._address, " supplied an invalid connection receive timeout value (").concat(y, "). ") + "Please, verify the server configuration and status because this can be the symptom of a bigger issue.");
              }
            }
          }
          a(o);
        }
      });
    });
  }, r.prototype.protocol = function() {
    return this._protocol;
  }, Object.defineProperty(r.prototype, "address", {
    get: function() {
      return this._address;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(r.prototype, "version", {
    get: function() {
      return this._server.version;
    },
    set: function(t) {
      this._server.version = t;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(r.prototype, "server", {
    get: function() {
      return this._server;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(r.prototype, "logger", {
    get: function() {
      return this._log;
    },
    enumerable: !1,
    configurable: !0
  }), r.prototype._handleFatalError = function(t) {
    this._isBroken = !0, this._error = this.handleAndTransformError(this._protocol.currentFailure || t, this._address), this._log.isErrorEnabled() && this._log.error("experienced a fatal error caused by ".concat(this._error, " (").concat(Di.json.stringify(this._error), ")")), this._protocol.notifyFatalError(this._error);
  }, r.prototype._queueObserver = function(t) {
    return this._protocol.queueObserverIfProtocolIsNotBroken(t);
  }, r.prototype.hasOngoingObservableRequests = function() {
    return this._protocol.hasOngoingObservableRequests();
  }, r.prototype.resetAndFlush = function() {
    var t = this;
    return new Promise(function(n, i) {
      t._reset({
        onError: function(o) {
          if (t._isBroken)
            i(o);
          else {
            var a = t._handleProtocolError("Received FAILURE as a response for RESET: " + o);
            i(a);
          }
        },
        onComplete: function() {
          n();
        }
      });
    });
  }, r.prototype._resetOnFailure = function() {
    var t = this;
    !this.isOpen() || this._reset({
      onError: function() {
        t._protocol.resetFailure();
      },
      onComplete: function() {
        t._protocol.resetFailure();
      }
    });
  }, r.prototype._reset = function(t) {
    var n = this;
    if (this._reseting) {
      this._protocol.isLastMessageReset() ? this._resetObservers.push(t) : this._protocol.reset({
        onError: function(o) {
          t.onError(o);
        },
        onComplete: function() {
          t.onComplete();
        }
      });
      return;
    }
    this._resetObservers.push(t), this._reseting = !0;
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
  }, r.prototype._updateCurrentObserver = function() {
    this._protocol.updateCurrentObserver();
  }, r.prototype.isOpen = function() {
    return !this._isBroken && this._ch._open;
  }, r.prototype._handleOngoingRequestsNumberChange = function(t) {
    t === 0 ? this._ch.stopReceiveTimeout() : this._ch.startReceiveTimeout();
  }, r.prototype.close = function() {
    return tV(this, void 0, void 0, function() {
      return rV(this, function(t) {
        switch (t.label) {
          case 0:
            return this._log.isDebugEnabled() && this._log.debug("closing"), this._protocol && this.isOpen() && this._protocol.prepareToClose(), [4, this._ch.close()];
          case 1:
            return t.sent(), this._log.isDebugEnabled() && this._log.debug("closed"), [2];
        }
      });
    });
  }, r.prototype.toString = function() {
    return "Connection [".concat(this.id, "][").concat(this.databaseId || "", "]");
  }, r.prototype._handleProtocolError = function(t) {
    this._protocol.resetFailure(), this._updateCurrentObserver();
    var n = (0, Di.newError)(t, iV);
    return this._handleFatalError(n), n;
  }, r;
}(nV.default);
Jo.default = L0;
function sV(e, r) {
  return new oV(r._level, function(t, n) {
    return r._loggerFunction(t, "".concat(e, " ").concat(n));
  });
}
var Qd = {}, cV = h && h.__extends || function() {
  var e = function(r, t) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var o in i)
        Object.prototype.hasOwnProperty.call(i, o) && (n[o] = i[o]);
    }, e(r, t);
  };
  return function(r, t) {
    if (typeof t != "function" && t !== null)
      throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
    e(r, t);
    function n() {
      this.constructor = r;
    }
    r.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}(), lV = h && h.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(Qd, "__esModule", { value: !0 });
var fV = lV(Xo), dV = function(e) {
  cV(r, e);
  function r(t, n) {
    var i = e.call(this, n) || this;
    return n && (i._originalErrorHandler = t._errorHandler, t._errorHandler = i._errorHandler), i._delegate = t, i;
  }
  return Object.defineProperty(r.prototype, "id", {
    get: function() {
      return this._delegate.id;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(r.prototype, "databaseId", {
    get: function() {
      return this._delegate.databaseId;
    },
    set: function(t) {
      this._delegate.databaseId = t;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(r.prototype, "server", {
    get: function() {
      return this._delegate.server;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(r.prototype, "address", {
    get: function() {
      return this._delegate.address;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(r.prototype, "version", {
    get: function() {
      return this._delegate.version;
    },
    set: function(t) {
      this._delegate.version = t;
    },
    enumerable: !1,
    configurable: !0
  }), r.prototype.isOpen = function() {
    return this._delegate.isOpen();
  }, r.prototype.protocol = function() {
    return this._delegate.protocol();
  }, r.prototype.connect = function(t, n) {
    return this._delegate.connect(t, n);
  }, r.prototype.write = function(t, n, i) {
    return this._delegate.write(t, n, i);
  }, r.prototype.resetAndFlush = function() {
    return this._delegate.resetAndFlush();
  }, r.prototype.hasOngoingObservableRequests = function() {
    return this._delegate.hasOngoingObservableRequests();
  }, r.prototype.close = function() {
    return this._delegate.close();
  }, r.prototype._release = function() {
    return this._originalErrorHandler && (this._delegate._errorHandler = this._originalErrorHandler), this._delegate._release();
  }, r;
}(fV.default);
Qd.default = dV;
var Xd = {};
Object.defineProperty(Xd, "__esModule", { value: !0 });
var F0 = te, hV = F0.error.SERVICE_UNAVAILABLE, vV = F0.error.SESSION_EXPIRED, pV = function() {
  function e(r, t, n, i) {
    this._errorCode = r, this._handleUnavailability = t || Wl, this._handleWriteFailure = n || Wl, this._handleAuthorizationExpired = i || Wl;
  }
  return e.create = function(r) {
    var t = r.errorCode, n = r.handleUnavailability, i = r.handleWriteFailure, o = r.handleAuthorizationExpired;
    return new e(t, n, i, o);
  }, e.prototype.errorCode = function() {
    return this._errorCode;
  }, e.prototype.handleAndTransformError = function(r, t) {
    return _V(r) ? this._handleAuthorizationExpired(r, t) : yV(r) ? this._handleUnavailability(r, t) : mV(r) ? this._handleWriteFailure(r, t) : r;
  }, e;
}();
Xd.default = pV;
function _V(e) {
  return e && (e.code === "Neo.ClientError.Security.AuthorizationExpired" || e.code === "Neo.ClientError.Security.TokenExpired");
}
function yV(e) {
  return e ? e.code === vV || e.code === hV || e.code === "Neo.TransientError.General.DatabaseUnavailable" : !1;
}
function mV(e) {
  return e ? e.code === "Neo.ClientError.Cluster.NotALeader" || e.code === "Neo.ClientError.General.ForbiddenOnReadOnlyDatabase" : !1;
}
function Wl(e) {
  return e;
}
(function(e) {
  var r = h && h.__createBinding || (Object.create ? function(s, l, f, y) {
    y === void 0 && (y = f);
    var b = Object.getOwnPropertyDescriptor(l, f);
    (!b || ("get" in b ? !l.__esModule : b.writable || b.configurable)) && (b = { enumerable: !0, get: function() {
      return l[f];
    } }), Object.defineProperty(s, y, b);
  } : function(s, l, f, y) {
    y === void 0 && (y = f), s[y] = l[f];
  }), t = h && h.__setModuleDefault || (Object.create ? function(s, l) {
    Object.defineProperty(s, "default", { enumerable: !0, value: l });
  } : function(s, l) {
    s.default = l;
  }), n = h && h.__importStar || function(s) {
    if (s && s.__esModule)
      return s;
    var l = {};
    if (s != null)
      for (var f in s)
        f !== "default" && Object.prototype.hasOwnProperty.call(s, f) && r(l, s, f);
    return t(l, s), l;
  }, i = h && h.__importDefault || function(s) {
    return s && s.__esModule ? s : { default: s };
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.createChannelConnection = e.ConnectionErrorHandler = e.DelegateConnection = e.ChannelConnection = e.Connection = void 0;
  var o = i(Xo);
  e.Connection = o.default;
  var a = n(Jo);
  e.ChannelConnection = a.default, Object.defineProperty(e, "createChannelConnection", { enumerable: !0, get: function() {
    return a.createChannelConnection;
  } });
  var u = i(Qd);
  e.DelegateConnection = u.default;
  var c = i(Xd);
  e.ConnectionErrorHandler = c.default, e.default = o.default;
})(nl);
var bV = h && h.__extends || function() {
  var e = function(r, t) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var o in i)
        Object.prototype.hasOwnProperty.call(i, o) && (n[o] = i[o]);
    }, e(r, t);
  };
  return function(r, t) {
    if (typeof t != "function" && t !== null)
      throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
    e(r, t);
    function n() {
      this.constructor = r;
    }
    r.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}(), gV = h && h.__createBinding || (Object.create ? function(e, r, t, n) {
  n === void 0 && (n = t);
  var i = Object.getOwnPropertyDescriptor(r, t);
  (!i || ("get" in i ? !r.__esModule : i.writable || i.configurable)) && (i = { enumerable: !0, get: function() {
    return r[t];
  } }), Object.defineProperty(e, n, i);
} : function(e, r, t, n) {
  n === void 0 && (n = t), e[n] = r[t];
}), OV = h && h.__setModuleDefault || (Object.create ? function(e, r) {
  Object.defineProperty(e, "default", { enumerable: !0, value: r });
} : function(e, r) {
  e.default = r;
}), wV = h && h.__importStar || function(e) {
  if (e && e.__esModule)
    return e;
  var r = {};
  if (e != null)
    for (var t in e)
      t !== "default" && Object.prototype.hasOwnProperty.call(e, t) && gV(r, e, t);
  return OV(r, e), r;
}, t_ = h && h.__awaiter || function(e, r, t, n) {
  function i(o) {
    return o instanceof t ? o : new t(function(a) {
      a(o);
    });
  }
  return new (t || (t = Promise))(function(o, a) {
    function u(l) {
      try {
        s(n.next(l));
      } catch (f) {
        a(f);
      }
    }
    function c(l) {
      try {
        s(n.throw(l));
      } catch (f) {
        a(f);
      }
    }
    function s(l) {
      l.done ? o(l.value) : i(l.value).then(u, c);
    }
    s((n = n.apply(e, r || [])).next());
  });
}, r_ = h && h.__generator || function(e, r) {
  var t = { label: 0, sent: function() {
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
    for (; a && (a = 0, s[0] && (t = 0)), t; )
      try {
        if (n = 1, i && (o = s[0] & 2 ? i.return : s[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, s[1])).done)
          return o;
        switch (i = 0, o && (s = [s[0] & 2, o.value]), s[0]) {
          case 0:
          case 1:
            o = s;
            break;
          case 4:
            return t.label++, { value: s[1], done: !1 };
          case 5:
            t.label++, i = s[1], s = [0];
            continue;
          case 7:
            s = t.ops.pop(), t.trys.pop();
            continue;
          default:
            if (o = t.trys, !(o = o.length > 0 && o[o.length - 1]) && (s[0] === 6 || s[0] === 2)) {
              t = 0;
              continue;
            }
            if (s[0] === 3 && (!o || s[1] > o[0] && s[1] < o[3])) {
              t.label = s[1];
              break;
            }
            if (s[0] === 6 && t.label < o[1]) {
              t.label = o[1], o = s;
              break;
            }
            if (o && t.label < o[2]) {
              t.label = o[2], t.ops.push(s);
              break;
            }
            o[2] && t.ops.pop(), t.trys.pop();
            continue;
        }
        s = r.call(e, t);
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
Object.defineProperty(Qo, "__esModule", { value: !0 });
var n_ = nl, i_ = wV(Kd), Pf = te, EV = Pf.error.SERVICE_UNAVAILABLE, SV = function(e) {
  bV(r, e);
  function r(t, n) {
    var i = t.id, o = t.config, a = t.log, u = t.userAgent, c = t.authToken;
    n === void 0 && (n = null);
    var s = e.call(this) || this;
    return s._id = i, s._config = o, s._log = a, s._userAgent = u, s._authToken = c, s._createChannelConnection = n || function(l) {
      return (0, n_.createChannelConnection)(l, s._config, s._createConnectionErrorHandler(), s._log);
    }, s._connectionPool = new i_.default({
      create: s._createConnection.bind(s),
      destroy: s._destroyConnection.bind(s),
      validate: s._validateConnection.bind(s),
      installIdleObserver: r._installIdleObserverOnConnection.bind(s),
      removeIdleObserver: r._removeIdleObserverOnConnection.bind(s),
      config: i_.PoolConfig.fromDriverConfig(o),
      log: s._log
    }), s._openConnections = {}, s;
  }
  return r.prototype._createConnectionErrorHandler = function() {
    return new n_.ConnectionErrorHandler(EV);
  }, r.prototype._createConnection = function(t, n) {
    var i = this;
    return this._createChannelConnection(t).then(function(o) {
      return o._release = function() {
        return n(t, o);
      }, i._openConnections[o.id] = o, o.connect(i._userAgent, i._authToken).catch(function(a) {
        throw i._destroyConnection(o), a;
      });
    });
  }, r.prototype._validateConnection = function(t) {
    if (!t.isOpen())
      return !1;
    var n = this._config.maxConnectionLifetime, i = Date.now() - t.creationTimestamp;
    return i <= n;
  }, r.prototype._destroyConnection = function(t) {
    return delete this._openConnections[t.id], t.close();
  }, r.prototype._verifyConnectivityAndGetServerVersion = function(t) {
    var n = t.address;
    return t_(this, void 0, void 0, function() {
      var i, o;
      return r_(this, function(a) {
        switch (a.label) {
          case 0:
            return [4, this._connectionPool.acquire(n)];
          case 1:
            i = a.sent(), o = new Pf.ServerInfo(i.server, i.protocol().version), a.label = 2;
          case 2:
            return a.trys.push([2, , 5, 7]), i.protocol().isLastMessageLogin() ? [3, 4] : [4, i.resetAndFlush()];
          case 3:
            a.sent(), a.label = 4;
          case 4:
            return [3, 7];
          case 5:
            return [4, i._release()];
          case 6:
            return a.sent(), [7];
          case 7:
            return [2, o];
        }
      });
    });
  }, r.prototype.close = function() {
    return t_(this, void 0, void 0, function() {
      return r_(this, function(t) {
        switch (t.label) {
          case 0:
            return [
              4,
              this._connectionPool.close()
            ];
          case 1:
            return t.sent(), [4, Promise.all(Object.values(this._openConnections).map(function(n) {
              return n.close();
            }))];
          case 2:
            return t.sent(), [2];
        }
      });
    });
  }, r._installIdleObserverOnConnection = function(t, n) {
    t._queueObserver(n);
  }, r._removeIdleObserverOnConnection = function(t) {
    t._updateCurrentObserver();
  }, r;
}(Pf.ConnectionProvider);
Qo.default = SV;
var Jd = {}, TV = h && h.__extends || function() {
  var e = function(r, t) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var o in i)
        Object.prototype.hasOwnProperty.call(i, o) && (n[o] = i[o]);
    }, e(r, t);
  };
  return function(r, t) {
    if (typeof t != "function" && t !== null)
      throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
    e(r, t);
    function n() {
      this.constructor = r;
    }
    r.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}(), Si = h && h.__awaiter || function(e, r, t, n) {
  function i(o) {
    return o instanceof t ? o : new t(function(a) {
      a(o);
    });
  }
  return new (t || (t = Promise))(function(o, a) {
    function u(l) {
      try {
        s(n.next(l));
      } catch (f) {
        a(f);
      }
    }
    function c(l) {
      try {
        s(n.throw(l));
      } catch (f) {
        a(f);
      }
    }
    function s(l) {
      l.done ? o(l.value) : i(l.value).then(u, c);
    }
    s((n = n.apply(e, r || [])).next());
  });
}, Ti = h && h.__generator || function(e, r) {
  var t = { label: 0, sent: function() {
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
    for (; a && (a = 0, s[0] && (t = 0)), t; )
      try {
        if (n = 1, i && (o = s[0] & 2 ? i.return : s[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, s[1])).done)
          return o;
        switch (i = 0, o && (s = [s[0] & 2, o.value]), s[0]) {
          case 0:
          case 1:
            o = s;
            break;
          case 4:
            return t.label++, { value: s[1], done: !1 };
          case 5:
            t.label++, i = s[1], s = [0];
            continue;
          case 7:
            s = t.ops.pop(), t.trys.pop();
            continue;
          default:
            if (o = t.trys, !(o = o.length > 0 && o[o.length - 1]) && (s[0] === 6 || s[0] === 2)) {
              t = 0;
              continue;
            }
            if (s[0] === 3 && (!o || s[1] > o[0] && s[1] < o[3])) {
              t.label = s[1];
              break;
            }
            if (s[0] === 6 && t.label < o[1]) {
              t.label = o[1], o = s;
              break;
            }
            if (o && t.label < o[2]) {
              t.label = o[2], t.ops.push(s);
              break;
            }
            o[2] && t.ops.pop(), t.trys.pop();
            continue;
        }
        s = r.call(e, t);
      } catch (l) {
        s = [6, l], i = 0;
      } finally {
        n = o = 0;
      }
    if (s[0] & 5)
      throw s[1];
    return { value: s[0] ? s[1] : void 0, done: !0 };
  }
}, PV = h && h.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(Jd, "__esModule", { value: !0 });
var IV = PV(Qo), Vl = nl, x0 = te, eh = x0.internal.constants, AV = eh.BOLT_PROTOCOL_V3, RV = eh.BOLT_PROTOCOL_V4_0, CV = eh.BOLT_PROTOCOL_V4_4, $V = x0.error.SERVICE_UNAVAILABLE, jV = function(e) {
  TV(r, e);
  function r(t) {
    var n = t.id, i = t.config, o = t.log, a = t.address, u = t.userAgent, c = t.authToken, s = e.call(this, { id: n, config: i, log: o, userAgent: u, authToken: c }) || this;
    return s._address = a, s;
  }
  return r.prototype.acquireConnection = function(t) {
    var n = this, i = t === void 0 ? {} : t;
    i.accessMode;
    var o = i.database;
    i.bookmarks;
    var a = Vl.ConnectionErrorHandler.create({
      errorCode: $V,
      handleAuthorizationExpired: function(u, c) {
        return n._handleAuthorizationExpired(u, c, o);
      }
    });
    return this._connectionPool.acquire(this._address).then(function(u) {
      return new Vl.DelegateConnection(u, a);
    });
  }, r.prototype._handleAuthorizationExpired = function(t, n, i) {
    return this._log.warn("Direct driver ".concat(this._id, " will close connection to ").concat(n, " for database '").concat(i, "' because of an error ").concat(t.code, " '").concat(t.message, "'")), this._connectionPool.purge(n).catch(function() {
    }), t;
  }, r.prototype._hasProtocolVersion = function(t) {
    return Si(this, void 0, void 0, function() {
      var n, i;
      return Ti(this, function(o) {
        switch (o.label) {
          case 0:
            return [4, (0, Vl.createChannelConnection)(this._address, this._config, this._createConnectionErrorHandler(), this._log)];
          case 1:
            return n = o.sent(), i = n.protocol() ? n.protocol().version : null, [4, n.close()];
          case 2:
            return o.sent(), i ? [2, t(i)] : [2, !1];
        }
      });
    });
  }, r.prototype.supportsMultiDb = function() {
    return Si(this, void 0, void 0, function() {
      return Ti(this, function(t) {
        switch (t.label) {
          case 0:
            return [4, this._hasProtocolVersion(function(n) {
              return n >= RV;
            })];
          case 1:
            return [2, t.sent()];
        }
      });
    });
  }, r.prototype.getNegotiatedProtocolVersion = function() {
    var t = this;
    return new Promise(function(n, i) {
      t._hasProtocolVersion(n).catch(i);
    });
  }, r.prototype.supportsTransactionConfig = function() {
    return Si(this, void 0, void 0, function() {
      return Ti(this, function(t) {
        switch (t.label) {
          case 0:
            return [4, this._hasProtocolVersion(function(n) {
              return n >= AV;
            })];
          case 1:
            return [2, t.sent()];
        }
      });
    });
  }, r.prototype.supportsUserImpersonation = function() {
    return Si(this, void 0, void 0, function() {
      return Ti(this, function(t) {
        switch (t.label) {
          case 0:
            return [4, this._hasProtocolVersion(function(n) {
              return n >= CV;
            })];
          case 1:
            return [2, t.sent()];
        }
      });
    });
  }, r.prototype.verifyConnectivityAndGetServerInfo = function() {
    return Si(this, void 0, void 0, function() {
      return Ti(this, function(t) {
        switch (t.label) {
          case 0:
            return [4, this._verifyConnectivityAndGetServerVersion({ address: this._address })];
          case 1:
            return [2, t.sent()];
        }
      });
    });
  }, r;
}(IV.default);
Jd.default = jV;
var th = {}, Xr = {}, rh = {}, di = {}, ql = h && h.__read || function(e, r) {
  var t = typeof Symbol == "function" && e[Symbol.iterator];
  if (!t)
    return e;
  var n = t.call(e), i, o = [], a;
  try {
    for (; (r === void 0 || r-- > 0) && !(i = n.next()).done; )
      o.push(i.value);
  } catch (u) {
    a = { error: u };
  } finally {
    try {
      i && !i.done && (t = n.return) && t.call(n);
    } finally {
      if (a)
        throw a.error;
    }
  }
  return o;
}, Hl = h && h.__spreadArray || function(e, r, t) {
  if (t || arguments.length === 2)
    for (var n = 0, i = r.length, o; n < i; n++)
      (o || !(n in r)) && (o || (o = Array.prototype.slice.call(r, 0, n)), o[n] = r[n]);
  return e.concat(o || Array.prototype.slice.call(r));
};
Object.defineProperty(di, "__esModule", { value: !0 });
di.createValidRoutingTable = void 0;
var _t = te, B0 = _t.internal.constants, NV = B0.ACCESS_MODE_WRITE, MV = B0.ACCESS_MODE_READ, zl = _t.internal.serverAddress.ServerAddress, nh = _t.error.PROTOCOL_ERROR, kV = 1, W0 = function() {
  function e(r) {
    var t = r === void 0 ? {} : r, n = t.database, i = t.routers, o = t.readers, a = t.writers, u = t.expirationTime, c = t.ttl;
    this.database = n || null, this.databaseName = n || "default database", this.routers = i || [], this.readers = o || [], this.writers = a || [], this.expirationTime = u || (0, _t.int)(0), this.ttl = c;
  }
  return e.fromRawRoutingTable = function(r, t, n) {
    return V0(r, t, n);
  }, e.prototype.forget = function(r) {
    this.readers = Oa(this.readers, r), this.writers = Oa(this.writers, r);
  }, e.prototype.forgetRouter = function(r) {
    this.routers = Oa(this.routers, r);
  }, e.prototype.forgetWriter = function(r) {
    this.writers = Oa(this.writers, r);
  }, e.prototype.isStaleFor = function(r) {
    return this.expirationTime.lessThan(Date.now()) || this.routers.length < kV || r === MV && this.readers.length === 0 || r === NV && this.writers.length === 0;
  }, e.prototype.isExpiredFor = function(r) {
    return this.expirationTime.add(r).lessThan(Date.now());
  }, e.prototype.allServers = function() {
    return Hl(Hl(Hl([], ql(this.routers), !1), ql(this.readers), !1), ql(this.writers), !1);
  }, e.prototype.toString = function() {
    return "RoutingTable[" + "database=".concat(this.databaseName, ", ") + "expirationTime=".concat(this.expirationTime, ", ") + "currentTime=".concat(Date.now(), ", ") + "routers=[".concat(this.routers, "], ") + "readers=[".concat(this.readers, "], ") + "writers=[".concat(this.writers, "]]");
  }, e;
}();
di.default = W0;
function Oa(e, r) {
  return e.filter(function(t) {
    return t.asKey() !== r.asKey();
  });
}
function V0(e, r, t) {
  var n = t.ttl, i = UV(t, r), o = DV(t, r), a = o.routers, u = o.readers, c = o.writers;
  return o_(a, "routers", r), o_(u, "readers", r), new W0({
    database: e || t.db,
    routers: a,
    readers: u,
    writers: c,
    expirationTime: i,
    ttl: n
  });
}
di.createValidRoutingTable = V0;
function DV(e, r) {
  try {
    var t = [], n = [], i = [];
    return e.servers.forEach(function(o) {
      var a = o.role, u = o.addresses;
      a === "ROUTE" ? t = Yl(u).map(function(c) {
        return zl.fromUrl(c);
      }) : a === "WRITE" ? i = Yl(u).map(function(c) {
        return zl.fromUrl(c);
      }) : a === "READ" && (n = Yl(u).map(function(c) {
        return zl.fromUrl(c);
      }));
    }), {
      routers: t,
      readers: n,
      writers: i
    };
  } catch (o) {
    throw (0, _t.newError)("Unable to parse servers entry from router ".concat(r, ` from addresses:
`).concat(_t.json.stringify(e.servers), `
Error message: `).concat(o.message), nh);
  }
}
function UV(e, r) {
  try {
    var t = (0, _t.int)(Date.now()), n = (0, _t.int)(e.ttl).multiply(1e3).add(t);
    return n.lessThan(t) ? _t.Integer.MAX_VALUE : n;
  } catch (i) {
    throw (0, _t.newError)("Unable to parse TTL entry from router ".concat(r, ` from raw routing table:
`).concat(_t.json.stringify(e), `
Error message: `).concat(i.message), nh);
  }
}
function o_(e, r, t) {
  if (e.length === 0)
    throw (0, _t.newError)("Received no " + r + " from router " + t, nh);
}
function Yl(e) {
  if (!Array.isArray(e))
    throw new TypeError("Array expected but got: " + e);
  return Array.from(e);
}
var LV = h && h.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(rh, "__esModule", { value: !0 });
var FV = LV(di), xV = function() {
  function e(r) {
    this._routingContext = r;
  }
  return e.prototype.lookupRoutingTableOnRouter = function(r, t, n, i) {
    var o = this;
    return r._acquireConnection(function(a) {
      return o._requestRawRoutingTable(a, r, t, n, i).then(function(u) {
        return u.isNull ? null : FV.default.fromRawRoutingTable(t, n, u);
      });
    });
  }, e.prototype._requestRawRoutingTable = function(r, t, n, i, o) {
    var a = this;
    return new Promise(function(u, c) {
      r.protocol().requestRoutingInformation({
        routingContext: a._routingContext,
        databaseName: n,
        impersonatedUser: o,
        sessionContext: {
          bookmarks: t._lastBookmarks,
          mode: t._mode,
          database: t._database,
          afterComplete: t._onComplete
        },
        onCompleted: u,
        onError: c
      });
    });
  }, e;
}();
rh.default = xV;
var q0 = h && h.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(Xr, "__esModule", { value: !0 });
Xr.RoutingTable = Xr.Rediscovery = void 0;
var H0 = q0(rh);
Xr.Rediscovery = H0.default;
var BV = q0(di);
Xr.RoutingTable = BV.default;
Xr.default = H0.default;
var WV = h && h.__extends || function() {
  var e = function(r, t) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var o in i)
        Object.prototype.hasOwnProperty.call(i, o) && (n[o] = i[o]);
    }, e(r, t);
  };
  return function(r, t) {
    if (typeof t != "function" && t !== null)
      throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
    e(r, t);
    function n() {
      this.constructor = r;
    }
    r.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}(), Qa = h && h.__assign || function() {
  return Qa = Object.assign || function(e) {
    for (var r, t = 1, n = arguments.length; t < n; t++) {
      r = arguments[t];
      for (var i in r)
        Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
    }
    return e;
  }, Qa.apply(this, arguments);
}, VV = h && h.__createBinding || (Object.create ? function(e, r, t, n) {
  n === void 0 && (n = t);
  var i = Object.getOwnPropertyDescriptor(r, t);
  (!i || ("get" in i ? !r.__esModule : i.writable || i.configurable)) && (i = { enumerable: !0, get: function() {
    return r[t];
  } }), Object.defineProperty(e, n, i);
} : function(e, r, t, n) {
  n === void 0 && (n = t), e[n] = r[t];
}), qV = h && h.__setModuleDefault || (Object.create ? function(e, r) {
  Object.defineProperty(e, "default", { enumerable: !0, value: r });
} : function(e, r) {
  e.default = r;
}), HV = h && h.__importStar || function(e) {
  if (e && e.__esModule)
    return e;
  var r = {};
  if (e != null)
    for (var t in e)
      t !== "default" && Object.prototype.hasOwnProperty.call(e, t) && VV(r, e, t);
  return qV(r, e), r;
}, et = h && h.__awaiter || function(e, r, t, n) {
  function i(o) {
    return o instanceof t ? o : new t(function(a) {
      a(o);
    });
  }
  return new (t || (t = Promise))(function(o, a) {
    function u(l) {
      try {
        s(n.next(l));
      } catch (f) {
        a(f);
      }
    }
    function c(l) {
      try {
        s(n.throw(l));
      } catch (f) {
        a(f);
      }
    }
    function s(l) {
      l.done ? o(l.value) : i(l.value).then(u, c);
    }
    s((n = n.apply(e, r || [])).next());
  });
}, tt = h && h.__generator || function(e, r) {
  var t = { label: 0, sent: function() {
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
    for (; a && (a = 0, s[0] && (t = 0)), t; )
      try {
        if (n = 1, i && (o = s[0] & 2 ? i.return : s[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, s[1])).done)
          return o;
        switch (i = 0, o && (s = [s[0] & 2, o.value]), s[0]) {
          case 0:
          case 1:
            o = s;
            break;
          case 4:
            return t.label++, { value: s[1], done: !1 };
          case 5:
            t.label++, i = s[1], s = [0];
            continue;
          case 7:
            s = t.ops.pop(), t.trys.pop();
            continue;
          default:
            if (o = t.trys, !(o = o.length > 0 && o[o.length - 1]) && (s[0] === 6 || s[0] === 2)) {
              t = 0;
              continue;
            }
            if (s[0] === 3 && (!o || s[1] > o[0] && s[1] < o[3])) {
              t.label = s[1];
              break;
            }
            if (s[0] === 6 && t.label < o[1]) {
              t.label = o[1], o = s;
              break;
            }
            if (o && t.label < o[2]) {
              t.label = o[2], t.ops.push(s);
              break;
            }
            o[2] && t.ops.pop(), t.trys.pop();
            continue;
        }
        s = r.call(e, t);
      } catch (l) {
        s = [6, l], i = 0;
      } finally {
        n = o = 0;
      }
    if (s[0] & 5)
      throw s[1];
    return { value: s[0] ? s[1] : void 0, done: !0 };
  }
}, If = h && h.__values || function(e) {
  var r = typeof Symbol == "function" && Symbol.iterator, t = r && e[r], n = 0;
  if (t)
    return t.call(e);
  if (e && typeof e.length == "number")
    return {
      next: function() {
        return e && n >= e.length && (e = void 0), { value: e && e[n++], done: !e };
      }
    };
  throw new TypeError(r ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, Kt = h && h.__read || function(e, r) {
  var t = typeof Symbol == "function" && e[Symbol.iterator];
  if (!t)
    return e;
  var n = t.call(e), i, o = [], a;
  try {
    for (; (r === void 0 || r-- > 0) && !(i = n.next()).done; )
      o.push(i.value);
  } catch (u) {
    a = { error: u };
  } finally {
    try {
      i && !i.done && (t = n.return) && t.call(n);
    } finally {
      if (a)
        throw a.error;
    }
  }
  return o;
}, z0 = h && h.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(th, "__esModule", { value: !0 });
var st = te, a_ = HV(Xr), zV = ui, YV = z0(rl), GV = z0(Qo), KV = mr, Dr = nl, Gl = st.error.SERVICE_UNAVAILABLE, Pi = st.error.SESSION_EXPIRED, ZV = st.internal.bookmarks.Bookmarks, ea = st.internal.constants, u_ = ea.ACCESS_MODE_READ, Kl = ea.ACCESS_MODE_WRITE, QV = ea.BOLT_PROTOCOL_V3, XV = ea.BOLT_PROTOCOL_V4_0, JV = ea.BOLT_PROTOCOL_V4_4, eq = "Neo.ClientError.Procedure.ProcedureNotFound", tq = "Neo.ClientError.Database.DatabaseNotFound", rq = "Neo.ClientError.Transaction.InvalidBookmark", nq = "Neo.ClientError.Transaction.InvalidBookmarkMixture", iq = "Neo.ClientError.Security.AuthorizationExpired", oq = "Neo.ClientError.Statement.ArgumentError", aq = "Neo.ClientError.Request.Invalid", uq = "Neo.ClientError.Statement.TypeError", sq = "system", wa = null, cq = (0, st.int)(3e4), lq = function(e) {
  WV(r, e);
  function r(t) {
    var n = t.id, i = t.address, o = t.routingContext, a = t.hostNameResolver, u = t.config, c = t.log, s = t.userAgent, l = t.authToken, f = t.routingTablePurgeDelay, y = e.call(this, { id: n, config: u, log: c, userAgent: s, authToken: l }, function(b) {
      return (0, Dr.createChannelConnection)(b, y._config, y._createConnectionErrorHandler(), y._log, y._routingContext);
    }) || this;
    return y._routingContext = Qa(Qa({}, o), { address: i.toString() }), y._seedRouter = i, y._rediscovery = new a_.default(y._routingContext), y._loadBalancingStrategy = new KV.LeastConnectedLoadBalancingStrategy(y._connectionPool), y._hostNameResolver = a, y._dnsResolver = new zV.HostNameResolver(), y._log = c, y._useSeedRouter = !0, y._routingTableRegistry = new fq(f ? (0, st.int)(f) : cq), y;
  }
  return r.prototype._createConnectionErrorHandler = function() {
    return new Dr.ConnectionErrorHandler(Pi);
  }, r.prototype._handleUnavailability = function(t, n, i) {
    return this._log.warn("Routing driver ".concat(this._id, " will forget ").concat(n, " for database '").concat(i, "' because of an error ").concat(t.code, " '").concat(t.message, "'")), this.forget(n, i || wa), t;
  }, r.prototype._handleAuthorizationExpired = function(t, n, i) {
    return this._log.warn("Routing driver ".concat(this._id, " will close connections to ").concat(n, " for database '").concat(i, "' because of an error ").concat(t.code, " '").concat(t.message, "'")), this._connectionPool.purge(n).catch(function() {
    }), t;
  }, r.prototype._handleWriteFailure = function(t, n, i) {
    return this._log.warn("Routing driver ".concat(this._id, " will forget writer ").concat(n, " for database '").concat(i, "' because of an error ").concat(t.code, " '").concat(t.message, "'")), this.forgetWriter(n, i || wa), (0, st.newError)("No longer possible to write to server at " + n, Pi, t);
  }, r.prototype.acquireConnection = function(t) {
    var n = t === void 0 ? {} : t, i = n.accessMode, o = n.database, a = n.bookmarks, u = n.impersonatedUser, c = n.onDatabaseNameResolved;
    return et(this, void 0, void 0, function() {
      var s, l, f, y, b, O, S, P, R = this;
      return tt(this, function($) {
        switch ($.label) {
          case 0:
            return f = { database: o || wa }, y = new Dr.ConnectionErrorHandler(Pi, function(j, k) {
              return R._handleUnavailability(j, k, f.database);
            }, function(j, k) {
              return R._handleWriteFailure(j, k, f.database);
            }, function(j, k) {
              return R._handleAuthorizationExpired(j, k, f.database);
            }), [
              4,
              this._freshRoutingTable({
                accessMode: i,
                database: f.database,
                bookmarks: a,
                impersonatedUser: u,
                onDatabaseNameResolved: function(j) {
                  f.database = f.database || j, c && c(j);
                }
              })
            ];
          case 1:
            if (b = $.sent(), i === u_)
              l = this._loadBalancingStrategy.selectReader(b.readers), s = "read";
            else if (i === Kl)
              l = this._loadBalancingStrategy.selectWriter(b.writers), s = "write";
            else
              throw (0, st.newError)("Illegal mode " + i);
            if (!l)
              throw (0, st.newError)("Failed to obtain connection towards ".concat(s, " server. Known routing table is: ").concat(b), Pi);
            $.label = 2;
          case 2:
            return $.trys.push([2, 4, , 5]), [4, this._acquireConnectionToServer(l, s, b)];
          case 3:
            return O = $.sent(), [2, new Dr.DelegateConnection(O, y)];
          case 4:
            throw S = $.sent(), P = y.handleAndTransformError(S, l), P;
          case 5:
            return [2];
        }
      });
    });
  }, r.prototype._hasProtocolVersion = function(t) {
    return et(this, void 0, void 0, function() {
      var n, i, o, a, u, c;
      return tt(this, function(s) {
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
            return s.trys.push([3, 6, , 7]), [4, (0, Dr.createChannelConnection)(n[o], this._config, this._createConnectionErrorHandler(), this._log)];
          case 4:
            return a = s.sent(), u = a.protocol() ? a.protocol().version : null, [4, a.close()];
          case 5:
            return s.sent(), u ? [2, t(u)] : [2, !1];
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
  }, r.prototype.supportsMultiDb = function() {
    return et(this, void 0, void 0, function() {
      return tt(this, function(t) {
        switch (t.label) {
          case 0:
            return [4, this._hasProtocolVersion(function(n) {
              return n >= XV;
            })];
          case 1:
            return [2, t.sent()];
        }
      });
    });
  }, r.prototype.supportsTransactionConfig = function() {
    return et(this, void 0, void 0, function() {
      return tt(this, function(t) {
        switch (t.label) {
          case 0:
            return [4, this._hasProtocolVersion(function(n) {
              return n >= QV;
            })];
          case 1:
            return [2, t.sent()];
        }
      });
    });
  }, r.prototype.supportsUserImpersonation = function() {
    return et(this, void 0, void 0, function() {
      return tt(this, function(t) {
        switch (t.label) {
          case 0:
            return [4, this._hasProtocolVersion(function(n) {
              return n >= JV;
            })];
          case 1:
            return [2, t.sent()];
        }
      });
    });
  }, r.prototype.getNegotiatedProtocolVersion = function() {
    var t = this;
    return new Promise(function(n, i) {
      t._hasProtocolVersion(n).catch(i);
    });
  }, r.prototype.verifyConnectivityAndGetServerInfo = function(t) {
    var n = t.database, i = t.accessMode;
    return et(this, void 0, void 0, function() {
      var o, a, u, c, s, l, f, y, b, O, S, P;
      return tt(this, function(R) {
        switch (R.label) {
          case 0:
            return o = { database: n || wa }, [4, this._freshRoutingTable({
              accessMode: i,
              database: o.database,
              onDatabaseNameResolved: function($) {
                o.database = o.database || $;
              }
            })];
          case 1:
            a = R.sent(), u = i === Kl ? a.writers : a.readers, c = (0, st.newError)("No servers available for database '".concat(o.database, "' with access mode '").concat(i, "'"), Gl), R.label = 2;
          case 2:
            R.trys.push([2, 9, 10, 11]), s = If(u), l = s.next(), R.label = 3;
          case 3:
            if (l.done)
              return [3, 8];
            f = l.value, R.label = 4;
          case 4:
            return R.trys.push([4, 6, , 7]), [4, this._verifyConnectivityAndGetServerVersion({ address: f })];
          case 5:
            return y = R.sent(), [2, y];
          case 6:
            return b = R.sent(), c = b, [3, 7];
          case 7:
            return l = s.next(), [3, 3];
          case 8:
            return [3, 11];
          case 9:
            return O = R.sent(), S = { error: O }, [3, 11];
          case 10:
            try {
              l && !l.done && (P = s.return) && P.call(s);
            } finally {
              if (S)
                throw S.error;
            }
            return [7];
          case 11:
            throw c;
        }
      });
    });
  }, r.prototype.forget = function(t, n) {
    this._routingTableRegistry.apply(n, {
      applyWhenExists: function(i) {
        return i.forget(t);
      }
    }), this._connectionPool.purge(t).catch(function() {
    });
  }, r.prototype.forgetWriter = function(t, n) {
    this._routingTableRegistry.apply(n, {
      applyWhenExists: function(i) {
        return i.forgetWriter(t);
      }
    });
  }, r.prototype._acquireConnectionToServer = function(t, n, i) {
    return this._connectionPool.acquire(t);
  }, r.prototype._freshRoutingTable = function(t) {
    var n = t === void 0 ? {} : t, i = n.accessMode, o = n.database, a = n.bookmarks, u = n.impersonatedUser, c = n.onDatabaseNameResolved, s = this._routingTableRegistry.get(o, function() {
      return new a_.RoutingTable({ database: o });
    });
    return s.isStaleFor(i) ? (this._log.info('Routing table is stale for database: "'.concat(o, '" and access mode: "').concat(i, '": ').concat(s)), this._refreshRoutingTable(s, a, u, c)) : s;
  }, r.prototype._refreshRoutingTable = function(t, n, i, o) {
    var a = t.routers;
    return this._useSeedRouter ? this._fetchRoutingTableFromSeedRouterFallbackToKnownRouters(a, t, n, i, o) : this._fetchRoutingTableFromKnownRoutersFallbackToSeedRouter(a, t, n, i, o);
  }, r.prototype._fetchRoutingTableFromSeedRouterFallbackToKnownRouters = function(t, n, i, o, a) {
    return et(this, void 0, void 0, function() {
      var u, c, s, l, f, y, b;
      return tt(this, function(O) {
        switch (O.label) {
          case 0:
            return u = [], [4, this._fetchRoutingTableUsingSeedRouter(u, this._seedRouter, n, i, o)];
          case 1:
            return c = Kt.apply(void 0, [O.sent(), 2]), s = c[0], l = c[1], s ? (this._useSeedRouter = !1, [3, 4]) : [3, 2];
          case 2:
            return [4, this._fetchRoutingTableUsingKnownRouters(t, n, i, o)];
          case 3:
            f = Kt.apply(void 0, [O.sent(), 2]), y = f[0], b = f[1], s = y, l = b || l, O.label = 4;
          case 4:
            return [4, this._applyRoutingTableIfPossible(n, s, a, l)];
          case 5:
            return [2, O.sent()];
        }
      });
    });
  }, r.prototype._fetchRoutingTableFromKnownRoutersFallbackToSeedRouter = function(t, n, i, o, a) {
    return et(this, void 0, void 0, function() {
      var u, c, s, l;
      return tt(this, function(f) {
        switch (f.label) {
          case 0:
            return [4, this._fetchRoutingTableUsingKnownRouters(t, n, i, o)];
          case 1:
            return u = Kt.apply(void 0, [f.sent(), 2]), c = u[0], s = u[1], c ? [3, 3] : [4, this._fetchRoutingTableUsingSeedRouter(t, this._seedRouter, n, i, o)];
          case 2:
            l = Kt.apply(void 0, [f.sent(), 2]), c = l[0], s = l[1], f.label = 3;
          case 3:
            return [4, this._applyRoutingTableIfPossible(n, c, a, s)];
          case 4:
            return [2, f.sent()];
        }
      });
    });
  }, r.prototype._fetchRoutingTableUsingKnownRouters = function(t, n, i, o) {
    return et(this, void 0, void 0, function() {
      var a, u, c, s;
      return tt(this, function(l) {
        switch (l.label) {
          case 0:
            return [4, this._fetchRoutingTable(t, n, i, o)];
          case 1:
            return a = Kt.apply(void 0, [l.sent(), 2]), u = a[0], c = a[1], u ? [2, [u, null]] : (s = t.length - 1, r._forgetRouter(n, t, s), [2, [null, c]]);
        }
      });
    });
  }, r.prototype._fetchRoutingTableUsingSeedRouter = function(t, n, i, o, a) {
    return et(this, void 0, void 0, function() {
      var u, c;
      return tt(this, function(s) {
        switch (s.label) {
          case 0:
            return [
              4,
              this._resolveSeedRouter(n)
            ];
          case 1:
            return u = s.sent(), c = u.filter(function(l) {
              return t.indexOf(l) < 0;
            }), [4, this._fetchRoutingTable(c, i, o, a)];
          case 2:
            return [2, s.sent()];
        }
      });
    });
  }, r.prototype._resolveSeedRouter = function(t) {
    return et(this, void 0, void 0, function() {
      var n, i, o = this;
      return tt(this, function(a) {
        switch (a.label) {
          case 0:
            return [4, this._hostNameResolver.resolve(t)];
          case 1:
            return n = a.sent(), [4, Promise.all(n.map(function(u) {
              return o._dnsResolver.resolve(u);
            }))];
          case 2:
            return i = a.sent(), [2, [].concat.apply([], i)];
        }
      });
    });
  }, r.prototype._fetchRoutingTable = function(t, n, i, o) {
    return et(this, void 0, void 0, function() {
      var a = this;
      return tt(this, function(u) {
        return [2, t.reduce(function(c, s, l) {
          return et(a, void 0, void 0, function() {
            var f, y, b, O, S, P, R;
            return tt(this, function($) {
              switch ($.label) {
                case 0:
                  return [4, c];
                case 1:
                  return f = Kt.apply(void 0, [$.sent(), 1]), y = f[0], y ? [2, [y, null]] : (b = l - 1, r._forgetRouter(n, t, b), [4, this._createSessionForRediscovery(s, i, o)]);
                case 2:
                  if (O = Kt.apply(void 0, [$.sent(), 2]), S = O[0], P = O[1], !S)
                    return [3, 8];
                  $.label = 3;
                case 3:
                  return $.trys.push([3, 5, 6, 7]), [4, this._rediscovery.lookupRoutingTableOnRouter(S, n.database, s, o)];
                case 4:
                  return [2, [$.sent(), null]];
                case 5:
                  return R = $.sent(), [2, this._handleRediscoveryError(R, s)];
                case 6:
                  return S.close(), [7];
                case 7:
                  return [3, 9];
                case 8:
                  return [2, [null, P]];
                case 9:
                  return [2];
              }
            });
          });
        }, Promise.resolve([null, null]))];
      });
    });
  }, r.prototype._createSessionForRediscovery = function(t, n, i) {
    return et(this, void 0, void 0, function() {
      var o, a, u, c, s, l = this;
      return tt(this, function(f) {
        switch (f.label) {
          case 0:
            return f.trys.push([0, 2, , 3]), [4, this._connectionPool.acquire(t)];
          case 1:
            return o = f.sent(), a = Dr.ConnectionErrorHandler.create({
              errorCode: Pi,
              handleAuthorizationExpired: function(y, b) {
                return l._handleAuthorizationExpired(y, b);
              }
            }), u = new YV.default(new Dr.DelegateConnection(o, a)), c = o.protocol().version, c < 4 ? [2, [new st.Session({
              mode: Kl,
              bookmarks: ZV.empty(),
              connectionProvider: u
            }), null]] : [2, [new st.Session({
              mode: u_,
              database: sq,
              bookmarks: n,
              connectionProvider: u,
              impersonatedUser: i
            }), null]];
          case 2:
            return s = f.sent(), [2, this._handleRediscoveryError(s, t)];
          case 3:
            return [2];
        }
      });
    });
  }, r.prototype._handleRediscoveryError = function(t, n) {
    if (dq(t) || hq(t))
      throw t;
    if (t.code === eq)
      throw (0, st.newError)("Server at ".concat(n.asHostPort(), " can't perform routing. Make sure you are connecting to a causal cluster"), Gl, t);
    return this._log.warn("unable to fetch routing table because of an error ".concat(t)), [null, t];
  }, r.prototype._applyRoutingTableIfPossible = function(t, n, i, o) {
    return et(this, void 0, void 0, function() {
      return tt(this, function(a) {
        switch (a.label) {
          case 0:
            if (!n)
              throw (0, st.newError)("Could not perform discovery. No routing servers available. Known routing table: ".concat(t), Gl, o);
            return n.writers.length === 0 && (this._useSeedRouter = !0), [4, this._updateRoutingTable(n, i)];
          case 1:
            return a.sent(), [2, n];
        }
      });
    });
  }, r.prototype._updateRoutingTable = function(t, n) {
    return et(this, void 0, void 0, function() {
      return tt(this, function(i) {
        switch (i.label) {
          case 0:
            return [4, this._connectionPool.keepAll(t.allServers())];
          case 1:
            return i.sent(), this._routingTableRegistry.removeExpired(), this._routingTableRegistry.register(t), n(t.database), this._log.info("Updated routing table ".concat(t)), [2];
        }
      });
    });
  }, r._forgetRouter = function(t, n, i) {
    var o = n[i];
    t && o && t.forgetRouter(o);
  }, r;
}(GV.default);
th.default = lq;
var fq = function() {
  function e(r) {
    this._tables = /* @__PURE__ */ new Map(), this._routingTablePurgeDelay = r;
  }
  return e.prototype.register = function(r) {
    return this._tables.set(r.database, r), this;
  }, e.prototype.apply = function(r, t) {
    var n = t === void 0 ? {} : t, i = n.applyWhenExists, o = n.applyWhenDontExists, a = o === void 0 ? function() {
    } : o;
    return this._tables.has(r) ? i(this._tables.get(r)) : typeof r == "string" || r === null ? a() : this._forEach(i), this;
  }, e.prototype.get = function(r, t) {
    return this._tables.has(r) ? this._tables.get(r) : typeof t == "function" ? t() : t;
  }, e.prototype.removeExpired = function() {
    var r = this;
    return this._removeIf(function(t) {
      return t.isExpiredFor(r._routingTablePurgeDelay);
    });
  }, e.prototype._forEach = function(r) {
    var t, n;
    try {
      for (var i = If(this._tables), o = i.next(); !o.done; o = i.next()) {
        var a = Kt(o.value, 2), u = a[1];
        r(u);
      }
    } catch (c) {
      t = { error: c };
    } finally {
      try {
        o && !o.done && (n = i.return) && n.call(i);
      } finally {
        if (t)
          throw t.error;
      }
    }
    return this;
  }, e.prototype._remove = function(r) {
    return this._tables.delete(r), this;
  }, e.prototype._removeIf = function(r) {
    var t, n;
    try {
      for (var i = If(this._tables), o = i.next(); !o.done; o = i.next()) {
        var a = Kt(o.value, 2), u = a[0], c = a[1];
        r(c) && this._remove(u);
      }
    } catch (s) {
      t = { error: s };
    } finally {
      try {
        o && !o.done && (n = i.return) && n.call(i);
      } finally {
        if (t)
          throw t.error;
      }
    }
    return this;
  }, e;
}();
function dq(e) {
  return [
    tq,
    rq,
    nq,
    oq,
    aq,
    uq
  ].includes(e.code);
}
function hq(e) {
  return e.code.startsWith("Neo.ClientError.Security.") && ![
    iq
  ].includes(e.code);
}
(function(e) {
  var r = h && h.__importDefault || function(a) {
    return a && a.__esModule ? a : { default: a };
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.RoutingConnectionProvider = e.DirectConnectionProvider = e.PooledConnectionProvider = e.SingleConnectionProvider = void 0;
  var t = rl;
  Object.defineProperty(e, "SingleConnectionProvider", { enumerable: !0, get: function() {
    return r(t).default;
  } });
  var n = Qo;
  Object.defineProperty(e, "PooledConnectionProvider", { enumerable: !0, get: function() {
    return r(n).default;
  } });
  var i = Jd;
  Object.defineProperty(e, "DirectConnectionProvider", { enumerable: !0, get: function() {
    return r(i).default;
  } });
  var o = th;
  Object.defineProperty(e, "RoutingConnectionProvider", { enumerable: !0, get: function() {
    return r(o).default;
  } });
})(D0);
(function(e) {
  var r = h && h.__createBinding || (Object.create ? function(o, a, u, c) {
    c === void 0 && (c = u);
    var s = Object.getOwnPropertyDescriptor(a, u);
    (!s || ("get" in s ? !a.__esModule : s.writable || s.configurable)) && (s = { enumerable: !0, get: function() {
      return a[u];
    } }), Object.defineProperty(o, c, s);
  } : function(o, a, u, c) {
    c === void 0 && (c = u), o[c] = a[u];
  }), t = h && h.__setModuleDefault || (Object.create ? function(o, a) {
    Object.defineProperty(o, "default", { enumerable: !0, value: a });
  } : function(o, a) {
    o.default = a;
  }), n = h && h.__importStar || function(o) {
    if (o && o.__esModule)
      return o;
    var a = {};
    if (o != null)
      for (var u in o)
        u !== "default" && Object.prototype.hasOwnProperty.call(o, u) && r(a, o, u);
    return t(a, o), a;
  }, i = h && h.__exportStar || function(o, a) {
    for (var u in o)
      u !== "default" && !Object.prototype.hasOwnProperty.call(a, u) && r(a, o, u);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.pool = e.packstream = e.channel = e.buf = e.bolt = e.loadBalancing = void 0, e.loadBalancing = n(mr), e.bolt = n(Ed), e.buf = n(vn), e.channel = n(ui), e.packstream = n(nt), e.pool = n(Kd), i(D0, e);
})(wb);
(function(e) {
  var r = h && h.__awaiter || function(be, he, q, re) {
    function ne(G) {
      return G instanceof q ? G : new q(function(ve) {
        ve(G);
      });
    }
    return new (q || (q = Promise))(function(G, ve) {
      function We(Ie) {
        try {
          x(re.next(Ie));
        } catch (A) {
          ve(A);
        }
      }
      function Q(Ie) {
        try {
          x(re.throw(Ie));
        } catch (A) {
          ve(A);
        }
      }
      function x(Ie) {
        Ie.done ? G(Ie.value) : ne(Ie.value).then(We, Q);
      }
      x((re = re.apply(be, he || [])).next());
    });
  }, t = h && h.__generator || function(be, he) {
    var q = { label: 0, sent: function() {
      if (G[0] & 1)
        throw G[1];
      return G[1];
    }, trys: [], ops: [] }, re, ne, G, ve;
    return ve = { next: We(0), throw: We(1), return: We(2) }, typeof Symbol == "function" && (ve[Symbol.iterator] = function() {
      return this;
    }), ve;
    function We(x) {
      return function(Ie) {
        return Q([x, Ie]);
      };
    }
    function Q(x) {
      if (re)
        throw new TypeError("Generator is already executing.");
      for (; ve && (ve = 0, x[0] && (q = 0)), q; )
        try {
          if (re = 1, ne && (G = x[0] & 2 ? ne.return : x[0] ? ne.throw || ((G = ne.return) && G.call(ne), 0) : ne.next) && !(G = G.call(ne, x[1])).done)
            return G;
          switch (ne = 0, G && (x = [x[0] & 2, G.value]), x[0]) {
            case 0:
            case 1:
              G = x;
              break;
            case 4:
              return q.label++, { value: x[1], done: !1 };
            case 5:
              q.label++, ne = x[1], x = [0];
              continue;
            case 7:
              x = q.ops.pop(), q.trys.pop();
              continue;
            default:
              if (G = q.trys, !(G = G.length > 0 && G[G.length - 1]) && (x[0] === 6 || x[0] === 2)) {
                q = 0;
                continue;
              }
              if (x[0] === 3 && (!G || x[1] > G[0] && x[1] < G[3])) {
                q.label = x[1];
                break;
              }
              if (x[0] === 6 && q.label < G[1]) {
                q.label = G[1], G = x;
                break;
              }
              if (G && q.label < G[2]) {
                q.label = G[2], q.ops.push(x);
                break;
              }
              G[2] && q.ops.pop(), q.trys.pop();
              continue;
          }
          x = he.call(be, q);
        } catch (Ie) {
          x = [6, Ie], ne = 0;
        } finally {
          re = G = 0;
        }
      if (x[0] & 5)
        throw x[1];
      return { value: x[0] ? x[1] : void 0, done: !0 };
    }
  }, n = h && h.__importDefault || function(be) {
    return be && be.__esModule ? be : { default: be };
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.PathSegment = e.Path = e.UnboundRelationship = e.Relationship = e.Node = e.Record = e.ServerInfo = e.Notification = e.QueryStatistics = e.ProfiledPlan = e.Plan = e.ResultSummary = e.RxResult = e.RxManagedTransaction = e.RxTransaction = e.RxSession = e.EagerResult = e.Result = e.ManagedTransaction = e.Transaction = e.Session = e.Driver = e.temporal = e.spatial = e.graph = e.error = e.routing = e.session = e.types = e.logging = e.auth = e.isRetryableError = e.Neo4jError = e.integer = e.isUnboundRelationship = e.isRelationship = e.isPathSegment = e.isPath = e.isNode = e.isDateTime = e.isLocalDateTime = e.isDate = e.isTime = e.isLocalTime = e.isDuration = e.isPoint = e.isInt = e.int = e.hasReachableServer = e.driver = void 0, e.resultTransformers = e.bookmarkManager = e.DateTime = e.LocalDateTime = e.Date = e.Time = e.LocalTime = e.Duration = e.Integer = e.Point = void 0;
  var i = Jt;
  Object.defineProperty(e, "Driver", { enumerable: !0, get: function() {
    return i.Driver;
  } });
  var o = n(gd), a = te;
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
  var u = wb, c = n(fu);
  e.RxSession = c.default;
  var s = n(Wo);
  e.RxTransaction = s.default;
  var l = n(Oc);
  e.RxManagedTransaction = l.default;
  var f = n(ai);
  e.RxResult = f.default;
  var y = a.internal.util, b = y.ENCRYPTION_ON, O = y.assertString, S = y.isEmptyObjectOrNull, P = a.internal.serverAddress.ServerAddress, R = a.internal.urlUtil;
  function $(be, he, q) {
    q === void 0 && (q = {}), O(be, "Bolt URL");
    var re = R.parseDatabaseUrl(be), ne = !1, G = !1, ve;
    switch (re.scheme) {
      case "bolt":
        break;
      case "bolt+s":
        G = !0, ve = "TRUST_SYSTEM_CA_SIGNED_CERTIFICATES";
        break;
      case "bolt+ssc":
        G = !0, ve = "TRUST_ALL_CERTIFICATES";
        break;
      case "neo4j":
        ne = !0;
        break;
      case "neo4j+s":
        G = !0, ve = "TRUST_SYSTEM_CA_SIGNED_CERTIFICATES", ne = !0;
        break;
      case "neo4j+ssc":
        G = !0, ve = "TRUST_ALL_CERTIFICATES", ne = !0;
        break;
      default:
        throw new Error("Unknown scheme: ".concat(re.scheme));
    }
    if (G) {
      if ("encrypted" in q || "trust" in q)
        throw new Error("Encryption/trust can only be configured either through URL or config, not both");
      q.encrypted = b, q.trust = ve;
    }
    he = he || {}, he.scheme = he.scheme || "none", q.userAgent = q.userAgent || k;
    var We = P.fromUrl(re.hostAndPort), Q = {
      address: We,
      typename: ne ? "Routing" : "Direct",
      routing: ne
    };
    return new i.Driver(Q, q, x());
    function x() {
      if (ne)
        return function(Ie, A, D, V) {
          return new u.RoutingConnectionProvider({
            id: Ie,
            config: A,
            log: D,
            hostNameResolver: V,
            authToken: he,
            address: We,
            userAgent: A.userAgent,
            routingContext: re.query
          });
        };
      if (!S(re.query))
        throw new Error("Parameters are not supported with none routed scheme. Given URL: '".concat(be, "'"));
      return function(Ie, A, D) {
        return new u.DirectConnectionProvider({
          id: Ie,
          config: A,
          log: D,
          authToken: he,
          address: We,
          userAgent: A.userAgent
        });
      };
    }
  }
  e.driver = $;
  function j(be, he) {
    return r(this, void 0, void 0, function() {
      var q;
      return t(this, function(re) {
        switch (re.label) {
          case 0:
            q = $(be, { scheme: "none", principal: "", credentials: "" }, he), re.label = 1;
          case 1:
            return re.trys.push([1, , 3, 5]), [4, q.getNegotiatedProtocolVersion()];
          case 2:
            return re.sent(), [2, !0];
          case 3:
            return [4, q.close()];
          case 4:
            return re.sent(), [7];
          case 5:
            return [2];
        }
      });
    });
  }
  e.hasReachableServer = j;
  var k = "neo4j-javascript/" + o.default, L = {
    console: function(be) {
      return {
        level: be,
        logger: function(he, q) {
          return console.log("".concat(h.Date.now(), " ").concat(he.toUpperCase(), " ").concat(q));
        }
      };
    }
  };
  e.logging = L;
  var Y = {
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
  e.types = Y;
  var ee = {
    READ: i.READ,
    WRITE: i.WRITE
  };
  e.session = ee;
  var le = {
    toNumber: a.toNumber,
    toString: a.toString,
    inSafeRange: a.inSafeRange
  };
  e.integer = le;
  var me = {
    isPoint: a.isPoint
  };
  e.spatial = me;
  var Me = {
    isDuration: a.isDuration,
    isLocalTime: a.isLocalTime,
    isTime: a.isTime,
    isDate: a.isDate,
    isLocalDateTime: a.isLocalDateTime,
    isDateTime: a.isDateTime
  };
  e.temporal = Me;
  var Pe = {
    isNode: a.isNode,
    isPath: a.isPath,
    isPathSegment: a.isPathSegment,
    isRelationship: a.isRelationship,
    isUnboundRelationship: a.isUnboundRelationship
  };
  e.graph = Pe;
  var Ue = {
    driver: $,
    hasReachableServer: j,
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
    integer: le,
    Neo4jError: a.Neo4jError,
    isRetryableError: a.isRetryableError,
    auth: a.auth,
    logging: L,
    types: Y,
    session: ee,
    routing: a.routing,
    error: a.error,
    graph: Pe,
    spatial: me,
    temporal: Me,
    Driver: i.Driver,
    Session: a.Session,
    Transaction: a.Transaction,
    ManagedTransaction: a.ManagedTransaction,
    Result: a.Result,
    EagerResult: a.EagerResult,
    RxSession: c.default,
    RxTransaction: s.default,
    RxManagedTransaction: l.default,
    RxResult: f.default,
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
  e.default = Ue;
})(k_);
const s_ = /* @__PURE__ */ sE(k_);
function vq() {
  const e = s_.driver("neo4j+s://aa84864b.databases.neo4j.io", s_.auth.basic("neo4j", "BHK4W_phDl5-U9TVZ7iFic3Io4pm-CrPYB4cWoAnWhc"));
  return {
    async insert(r, t) {
      const n = e.session(), i = `UNWIND $items AS node CREATE (n:${r}) SET n = node`;
      try {
        await n.run(i, { items: t });
      } finally {
        await n.close();
      }
    },
    async insertRelations(r) {
      const t = e.session(), n = `
      UNWIND $items AS relation
      CALL apoc.merge.node([relation.fromNode], { id: relation.from }) YIELD node as n1
      CALL apoc.merge.node([relation.toNode], { id: relation.to }) YIELD node as n2
      CALL apoc.merge.relationship(n1, relation.type, relation, {}, n2) YIELD rel
      RETURN n1, n2, rel
      `;
      try {
        const i = pq(r, 200);
        let o = 0;
        for await (const a of i)
          await t.run(n, { items: a }), console.log(`chunk ${o++} inserted`);
      } finally {
        await t.close();
      }
    },
    async clearDb() {
      await e.session().run("MATCH (n) DETACH DELETE n");
    }
  };
}
function pq(e, r) {
  const t = [];
  for (let n = 0; n < e.length; n += r)
    t.push(e.slice(n, n + r));
  return t;
}
const _q = [
  {
    connector: uE,
    config: {
      url: "https://socialtech.myjetbrains.com/api/",
      token: "perm:YWxla3NhbmRyLm15a3VseWNo.NjEtMzY=.3YAXZtLSVD7SLVpr9C4MfcIQXDkjFM",
      issueQueries: [
        "tag:BigTeam and tag:frontend and Sprint:{Sprint 3_2023}&$top=200"
      ],
      issueLoadingMaxDepthLevel: 1
    }
  }
];
function yq() {
  _q.forEach(mq);
}
function mq({ connector: e, config: r }) {
  e.connect({
    config: r,
    addNodes: bq,
    addRelations: gq
  });
}
const ih = vq();
await ih.clearDb();
async function bq(e, r) {
  console.log("add", e, r.length), await ih.insert(e, r), console.log("adde");
}
async function gq(e) {
  console.log("add rels", e.length), await ih.insertRelations(e), console.log("added rels");
}
yq();
