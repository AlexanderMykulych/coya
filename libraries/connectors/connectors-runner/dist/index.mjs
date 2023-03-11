function f_(e, r) {
  return function() {
    return e.apply(r, arguments);
  };
}
const { toString: d_ } = Object.prototype, { getPrototypeOf: Cf } = Object, $f = ((e) => (r) => {
  const t = d_.call(r);
  return e[t] || (e[t] = t.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), ir = (e) => (e = e.toLowerCase(), (r) => $f(r) === e), Ja = (e) => (r) => typeof r === e, { isArray: xn } = Array, Ui = Ja("undefined");
function WO(e) {
  return e !== null && !Ui(e) && e.constructor !== null && !Ui(e.constructor) && hr(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const h_ = ir("ArrayBuffer");
function VO(e) {
  let r;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? r = ArrayBuffer.isView(e) : r = e && e.buffer && h_(e.buffer), r;
}
const qO = Ja("string"), hr = Ja("function"), v_ = Ja("number"), jf = (e) => e !== null && typeof e == "object", HO = (e) => e === !0 || e === !1, Sa = (e) => {
  if ($f(e) !== "object")
    return !1;
  const r = Cf(e);
  return (r === null || r === Object.prototype || Object.getPrototypeOf(r) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, zO = ir("Date"), YO = ir("File"), GO = ir("Blob"), KO = ir("FileList"), ZO = (e) => jf(e) && hr(e.pipe), QO = (e) => {
  const r = "[object FormData]";
  return e && (typeof FormData == "function" && e instanceof FormData || d_.call(e) === r || hr(e.toString) && e.toString() === r);
}, XO = ir("URLSearchParams"), JO = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function zi(e, r, { allOwnKeys: t = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let n, i;
  if (typeof e != "object" && (e = [e]), xn(e))
    for (n = 0, i = e.length; n < i; n++)
      r.call(null, e[n], n, e);
  else {
    const o = t ? Object.getOwnPropertyNames(e) : Object.keys(e), a = o.length;
    let u;
    for (n = 0; n < a; n++)
      u = o[n], r.call(null, e[u], u, e);
  }
}
function p_(e, r) {
  r = r.toLowerCase();
  const t = Object.keys(e);
  let n = t.length, i;
  for (; n-- > 0; )
    if (i = t[n], r === i.toLowerCase())
      return i;
  return null;
}
const __ = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), y_ = (e) => !Ui(e) && e !== __;
function Ql() {
  const { caseless: e } = y_(this) && this || {}, r = {}, t = (n, i) => {
    const o = e && p_(r, i) || i;
    Sa(r[o]) && Sa(n) ? r[o] = Ql(r[o], n) : Sa(n) ? r[o] = Ql({}, n) : xn(n) ? r[o] = n.slice() : r[o] = n;
  };
  for (let n = 0, i = arguments.length; n < i; n++)
    arguments[n] && zi(arguments[n], t);
  return r;
}
const ew = (e, r, t, { allOwnKeys: n } = {}) => (zi(r, (i, o) => {
  t && hr(i) ? e[o] = f_(i, t) : e[o] = i;
}, { allOwnKeys: n }), e), tw = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), rw = (e, r, t, n) => {
  e.prototype = Object.create(r.prototype, n), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: r.prototype
  }), t && Object.assign(e.prototype, t);
}, nw = (e, r, t, n) => {
  let i, o, a;
  const u = {};
  if (r = r || {}, e == null)
    return r;
  do {
    for (i = Object.getOwnPropertyNames(e), o = i.length; o-- > 0; )
      a = i[o], (!n || n(a, e, r)) && !u[a] && (r[a] = e[a], u[a] = !0);
    e = t !== !1 && Cf(e);
  } while (e && (!t || t(e, r)) && e !== Object.prototype);
  return r;
}, iw = (e, r, t) => {
  e = String(e), (t === void 0 || t > e.length) && (t = e.length), t -= r.length;
  const n = e.indexOf(r, t);
  return n !== -1 && n === t;
}, ow = (e) => {
  if (!e)
    return null;
  if (xn(e))
    return e;
  let r = e.length;
  if (!v_(r))
    return null;
  const t = new Array(r);
  for (; r-- > 0; )
    t[r] = e[r];
  return t;
}, aw = ((e) => (r) => e && r instanceof e)(typeof Uint8Array < "u" && Cf(Uint8Array)), uw = (e, r) => {
  const n = (e && e[Symbol.iterator]).call(e);
  let i;
  for (; (i = n.next()) && !i.done; ) {
    const o = i.value;
    r.call(e, o[0], o[1]);
  }
}, sw = (e, r) => {
  let t;
  const n = [];
  for (; (t = e.exec(r)) !== null; )
    n.push(t);
  return n;
}, cw = ir("HTMLFormElement"), lw = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(t, n, i) {
    return n.toUpperCase() + i;
  }
), uh = (({ hasOwnProperty: e }) => (r, t) => e.call(r, t))(Object.prototype), fw = ir("RegExp"), m_ = (e, r) => {
  const t = Object.getOwnPropertyDescriptors(e), n = {};
  zi(t, (i, o) => {
    r(i, o, e) !== !1 && (n[o] = i);
  }), Object.defineProperties(e, n);
}, dw = (e) => {
  m_(e, (r, t) => {
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
}, hw = (e, r) => {
  const t = {}, n = (i) => {
    i.forEach((o) => {
      t[o] = !0;
    });
  };
  return xn(e) ? n(e) : n(String(e).split(r)), t;
}, vw = () => {
}, pw = (e, r) => (e = +e, Number.isFinite(e) ? e : r), ol = "abcdefghijklmnopqrstuvwxyz", sh = "0123456789", b_ = {
  DIGIT: sh,
  ALPHA: ol,
  ALPHA_DIGIT: ol + ol.toUpperCase() + sh
}, _w = (e = 16, r = b_.ALPHA_DIGIT) => {
  let t = "";
  const { length: n } = r;
  for (; e--; )
    t += r[Math.random() * n | 0];
  return t;
};
function yw(e) {
  return !!(e && hr(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const mw = (e) => {
  const r = new Array(10), t = (n, i) => {
    if (jf(n)) {
      if (r.indexOf(n) >= 0)
        return;
      if (!("toJSON" in n)) {
        r[i] = n;
        const o = xn(n) ? [] : {};
        return zi(n, (a, u) => {
          const c = t(a, i + 1);
          !Ui(c) && (o[u] = c);
        }), r[i] = void 0, o;
      }
    }
    return n;
  };
  return t(e, 0);
}, M = {
  isArray: xn,
  isArrayBuffer: h_,
  isBuffer: WO,
  isFormData: QO,
  isArrayBufferView: VO,
  isString: qO,
  isNumber: v_,
  isBoolean: HO,
  isObject: jf,
  isPlainObject: Sa,
  isUndefined: Ui,
  isDate: zO,
  isFile: YO,
  isBlob: GO,
  isRegExp: fw,
  isFunction: hr,
  isStream: ZO,
  isURLSearchParams: XO,
  isTypedArray: aw,
  isFileList: KO,
  forEach: zi,
  merge: Ql,
  extend: ew,
  trim: JO,
  stripBOM: tw,
  inherits: rw,
  toFlatObject: nw,
  kindOf: $f,
  kindOfTest: ir,
  endsWith: iw,
  toArray: ow,
  forEachEntry: uw,
  matchAll: sw,
  isHTMLForm: cw,
  hasOwnProperty: uh,
  hasOwnProp: uh,
  reduceDescriptors: m_,
  freezeMethods: dw,
  toObjectSet: hw,
  toCamelCase: lw,
  noop: vw,
  toFiniteNumber: pw,
  findKey: p_,
  global: __,
  isContextDefined: y_,
  ALPHABET: b_,
  generateString: _w,
  isSpecCompliantForm: yw,
  toJSONObject: mw
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
const g_ = fe.prototype, O_ = {};
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
  O_[e] = { value: e };
});
Object.defineProperties(fe, O_);
Object.defineProperty(g_, "isAxiosError", { value: !0 });
fe.from = (e, r, t, n, i, o) => {
  const a = Object.create(g_);
  return M.toFlatObject(e, a, function(c) {
    return c !== Error.prototype;
  }, (u) => u !== "isAxiosError"), fe.call(a, e.message, r, t, n, i), a.cause = e, a.name = e.name, o && Object.assign(a, o), a;
};
const bw = null;
function Xl(e) {
  return M.isPlainObject(e) || M.isArray(e);
}
function w_(e) {
  return M.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function ch(e, r, t) {
  return e ? e.concat(r).map(function(i, o) {
    return i = w_(i), !t && o ? "[" + i + "]" : i;
  }).join(t ? "." : "") : r;
}
function gw(e) {
  return M.isArray(e) && !e.some(Xl);
}
const Ow = M.toFlatObject(M, {}, null, function(r) {
  return /^is[A-Z]/.test(r);
});
function eu(e, r, t) {
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
  function s(g) {
    if (g === null)
      return "";
    if (M.isDate(g))
      return g.toISOString();
    if (!c && M.isBlob(g))
      throw new fe("Blob is not supported. Use a Buffer instead.");
    return M.isArrayBuffer(g) || M.isTypedArray(g) ? c && typeof Blob == "function" ? new Blob([g]) : Buffer.from(g) : g;
  }
  function l(g, S, P) {
    let I = g;
    if (g && !P && typeof g == "object") {
      if (M.endsWith(S, "{}"))
        S = n ? S : S.slice(0, -2), g = JSON.stringify(g);
      else if (M.isArray(g) && gw(g) || (M.isFileList(g) || M.endsWith(S, "[]")) && (I = M.toArray(g)))
        return S = w_(S), I.forEach(function(j, k) {
          !(M.isUndefined(j) || j === null) && r.append(
            a === !0 ? ch([S], k, o) : a === null ? S : S + "[]",
            s(j)
          );
        }), !1;
    }
    return Xl(g) ? !0 : (r.append(ch(P, S, o), s(g)), !1);
  }
  const f = [], y = Object.assign(Ow, {
    defaultVisitor: l,
    convertValue: s,
    isVisitable: Xl
  });
  function b(g, S) {
    if (!M.isUndefined(g)) {
      if (f.indexOf(g) !== -1)
        throw Error("Circular reference detected in " + S.join("."));
      f.push(g), M.forEach(g, function(I, $) {
        (!(M.isUndefined(I) || I === null) && i.call(
          r,
          I,
          M.isString($) ? $.trim() : $,
          S,
          y
        )) === !0 && b(I, S ? S.concat($) : [$]);
      }), f.pop();
    }
  }
  if (!M.isObject(e))
    throw new TypeError("data must be an object");
  return b(e), r;
}
function lh(e) {
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
function Nf(e, r) {
  this._pairs = [], e && eu(e, this, r);
}
const E_ = Nf.prototype;
E_.append = function(r, t) {
  this._pairs.push([r, t]);
};
E_.toString = function(r) {
  const t = r ? function(n) {
    return r.call(this, n, lh);
  } : lh;
  return this._pairs.map(function(i) {
    return t(i[0]) + "=" + t(i[1]);
  }, "").join("&");
};
function ww(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function S_(e, r, t) {
  if (!r)
    return e;
  const n = t && t.encode || ww, i = t && t.serialize;
  let o;
  if (i ? o = i(r, t) : o = M.isURLSearchParams(r) ? r.toString() : new Nf(r, t).toString(n), o) {
    const a = e.indexOf("#");
    a !== -1 && (e = e.slice(0, a)), e += (e.indexOf("?") === -1 ? "?" : "&") + o;
  }
  return e;
}
class Ew {
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
const fh = Ew, T_ = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Sw = typeof URLSearchParams < "u" ? URLSearchParams : Nf, Tw = typeof FormData < "u" ? FormData : null, Pw = (() => {
  let e;
  return typeof navigator < "u" && ((e = navigator.product) === "ReactNative" || e === "NativeScript" || e === "NS") ? !1 : typeof window < "u" && typeof document < "u";
})(), Iw = (() => typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), Ut = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Sw,
    FormData: Tw,
    Blob
  },
  isStandardBrowserEnv: Pw,
  isStandardBrowserWebWorkerEnv: Iw,
  protocols: ["http", "https", "file", "blob", "url", "data"]
};
function Aw(e, r) {
  return eu(e, new Ut.classes.URLSearchParams(), Object.assign({
    visitor: function(t, n, i, o) {
      return Ut.isNode && M.isBuffer(t) ? (this.append(n, t.toString("base64")), !1) : o.defaultVisitor.apply(this, arguments);
    }
  }, r));
}
function Rw(e) {
  return M.matchAll(/\w+|\[(\w*)]/g, e).map((r) => r[0] === "[]" ? "" : r[1] || r[0]);
}
function Cw(e) {
  const r = {}, t = Object.keys(e);
  let n;
  const i = t.length;
  let o;
  for (n = 0; n < i; n++)
    o = t[n], r[o] = e[o];
  return r;
}
function P_(e) {
  function r(t, n, i, o) {
    let a = t[o++];
    const u = Number.isFinite(+a), c = o >= t.length;
    return a = !a && M.isArray(i) ? i.length : a, c ? (M.hasOwnProp(i, a) ? i[a] = [i[a], n] : i[a] = n, !u) : ((!i[a] || !M.isObject(i[a])) && (i[a] = []), r(t, n, i[a], o) && M.isArray(i[a]) && (i[a] = Cw(i[a])), !u);
  }
  if (M.isFormData(e) && M.isFunction(e.entries)) {
    const t = {};
    return M.forEachEntry(e, (n, i) => {
      r(Rw(n), i, t, 0);
    }), t;
  }
  return null;
}
const $w = {
  "Content-Type": void 0
};
function jw(e, r, t) {
  if (M.isString(e))
    try {
      return (r || JSON.parse)(e), M.trim(e);
    } catch (n) {
      if (n.name !== "SyntaxError")
        throw n;
    }
  return (t || JSON.stringify)(e);
}
const tu = {
  transitional: T_,
  adapter: ["xhr", "http"],
  transformRequest: [function(r, t) {
    const n = t.getContentType() || "", i = n.indexOf("application/json") > -1, o = M.isObject(r);
    if (o && M.isHTMLForm(r) && (r = new FormData(r)), M.isFormData(r))
      return i && i ? JSON.stringify(P_(r)) : r;
    if (M.isArrayBuffer(r) || M.isBuffer(r) || M.isStream(r) || M.isFile(r) || M.isBlob(r))
      return r;
    if (M.isArrayBufferView(r))
      return r.buffer;
    if (M.isURLSearchParams(r))
      return t.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), r.toString();
    let u;
    if (o) {
      if (n.indexOf("application/x-www-form-urlencoded") > -1)
        return Aw(r, this.formSerializer).toString();
      if ((u = M.isFileList(r)) || n.indexOf("multipart/form-data") > -1) {
        const c = this.env && this.env.FormData;
        return eu(
          u ? { "files[]": r } : r,
          c && new c(),
          this.formSerializer
        );
      }
    }
    return o || i ? (t.setContentType("application/json", !1), jw(r)) : r;
  }],
  transformResponse: [function(r) {
    const t = this.transitional || tu.transitional, n = t && t.forcedJSONParsing, i = this.responseType === "json";
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
  tu.headers[r] = {};
});
M.forEach(["post", "put", "patch"], function(r) {
  tu.headers[r] = M.merge($w);
});
const Mf = tu, Nw = M.toObjectSet([
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
]), Mw = (e) => {
  const r = {};
  let t, n, i;
  return e && e.split(`
`).forEach(function(a) {
    i = a.indexOf(":"), t = a.substring(0, i).trim().toLowerCase(), n = a.substring(i + 1).trim(), !(!t || r[t] && Nw[t]) && (t === "set-cookie" ? r[t] ? r[t].push(n) : r[t] = [n] : r[t] = r[t] ? r[t] + ", " + n : n);
  }), r;
}, dh = Symbol("internals");
function vi(e) {
  return e && String(e).trim().toLowerCase();
}
function Ta(e) {
  return e === !1 || e == null ? e : M.isArray(e) ? e.map(Ta) : String(e);
}
function kw(e) {
  const r = /* @__PURE__ */ Object.create(null), t = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; n = t.exec(e); )
    r[n[1]] = n[2];
  return r;
}
function Dw(e) {
  return /^[-_a-zA-Z]+$/.test(e.trim());
}
function al(e, r, t, n, i) {
  if (M.isFunction(n))
    return n.call(this, r, t);
  if (i && (r = t), !!M.isString(r)) {
    if (M.isString(n))
      return r.indexOf(n) !== -1;
    if (M.isRegExp(n))
      return n.test(r);
  }
}
function Uw(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (r, t, n) => t.toUpperCase() + n);
}
function Lw(e, r) {
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
class ru {
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
      (!f || i[f] === void 0 || s === !0 || s === void 0 && i[f] !== !1) && (i[f || c] = Ta(u));
    }
    const a = (u, c) => M.forEach(u, (s, l) => o(s, l, c));
    return M.isPlainObject(r) || r instanceof this.constructor ? a(r, t) : M.isString(r) && (r = r.trim()) && !Dw(r) ? a(Mw(r), t) : r != null && o(t, r, n), this;
  }
  get(r, t) {
    if (r = vi(r), r) {
      const n = M.findKey(this, r);
      if (n) {
        const i = this[n];
        if (!t)
          return i;
        if (t === !0)
          return kw(i);
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
      return !!(n && this[n] !== void 0 && (!t || al(this, this[n], n, t)));
    }
    return !1;
  }
  delete(r, t) {
    const n = this;
    let i = !1;
    function o(a) {
      if (a = vi(a), a) {
        const u = M.findKey(n, a);
        u && (!t || al(n, n[u], u, t)) && (delete n[u], i = !0);
      }
    }
    return M.isArray(r) ? r.forEach(o) : o(r), i;
  }
  clear(r) {
    const t = Object.keys(this);
    let n = t.length, i = !1;
    for (; n--; ) {
      const o = t[n];
      (!r || al(this, this[o], o, r, !0)) && (delete this[o], i = !0);
    }
    return i;
  }
  normalize(r) {
    const t = this, n = {};
    return M.forEach(this, (i, o) => {
      const a = M.findKey(n, o);
      if (a) {
        t[a] = Ta(i), delete t[o];
        return;
      }
      const u = r ? Uw(o) : String(o).trim();
      u !== o && delete t[o], t[u] = Ta(i), n[u] = !0;
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
    const n = (this[dh] = this[dh] = {
      accessors: {}
    }).accessors, i = this.prototype;
    function o(a) {
      const u = vi(a);
      n[u] || (Lw(i, a), n[u] = !0);
    }
    return M.isArray(r) ? r.forEach(o) : o(r), this;
  }
}
ru.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
M.freezeMethods(ru.prototype);
M.freezeMethods(ru);
const Xt = ru;
function ul(e, r) {
  const t = this || Mf, n = r || t, i = Xt.from(n.headers);
  let o = n.data;
  return M.forEach(e, function(u) {
    o = u.call(t, o, i.normalize(), r ? r.status : void 0);
  }), i.normalize(), o;
}
function I_(e) {
  return !!(e && e.__CANCEL__);
}
function Yi(e, r, t) {
  fe.call(this, e ?? "canceled", fe.ERR_CANCELED, r, t), this.name = "CanceledError";
}
M.inherits(Yi, fe, {
  __CANCEL__: !0
});
function xw(e, r, t) {
  const n = t.config.validateStatus;
  !t.status || !n || n(t.status) ? e(t) : r(new fe(
    "Request failed with status code " + t.status,
    [fe.ERR_BAD_REQUEST, fe.ERR_BAD_RESPONSE][Math.floor(t.status / 100) - 4],
    t.config,
    t.request,
    t
  ));
}
const Fw = Ut.isStandardBrowserEnv ? function() {
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
function Bw(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Ww(e, r) {
  return r ? e.replace(/\/+$/, "") + "/" + r.replace(/^\/+/, "") : e;
}
function A_(e, r) {
  return e && !Bw(r) ? Ww(e, r) : r;
}
const Vw = Ut.isStandardBrowserEnv ? function() {
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
function qw(e) {
  const r = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return r && r[1] || "";
}
function Hw(e, r) {
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
function hh(e, r) {
  let t = 0;
  const n = Hw(50, 250);
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
const zw = typeof XMLHttpRequest < "u", Yw = zw && function(e) {
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
      const b = e.auth.username || "", g = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
      o.set("Authorization", "Basic " + btoa(b + ":" + g));
    }
    const l = A_(e.baseURL, e.url);
    s.open(e.method.toUpperCase(), S_(l, e.params, e.paramsSerializer), !0), s.timeout = e.timeout;
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
      xw(function(I) {
        t(I), c();
      }, function(I) {
        n(I), c();
      }, S), s = null;
    }
    if ("onloadend" in s ? s.onloadend = f : s.onreadystatechange = function() {
      !s || s.readyState !== 4 || s.status === 0 && !(s.responseURL && s.responseURL.indexOf("file:") === 0) || setTimeout(f);
    }, s.onabort = function() {
      !s || (n(new fe("Request aborted", fe.ECONNABORTED, e, s)), s = null);
    }, s.onerror = function() {
      n(new fe("Network Error", fe.ERR_NETWORK, e, s)), s = null;
    }, s.ontimeout = function() {
      let g = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
      const S = e.transitional || T_;
      e.timeoutErrorMessage && (g = e.timeoutErrorMessage), n(new fe(
        g,
        S.clarifyTimeoutError ? fe.ETIMEDOUT : fe.ECONNABORTED,
        e,
        s
      )), s = null;
    }, Ut.isStandardBrowserEnv) {
      const b = (e.withCredentials || Vw(l)) && e.xsrfCookieName && Fw.read(e.xsrfCookieName);
      b && o.set(e.xsrfHeaderName, b);
    }
    i === void 0 && o.setContentType(null), "setRequestHeader" in s && M.forEach(o.toJSON(), function(g, S) {
      s.setRequestHeader(S, g);
    }), M.isUndefined(e.withCredentials) || (s.withCredentials = !!e.withCredentials), a && a !== "json" && (s.responseType = e.responseType), typeof e.onDownloadProgress == "function" && s.addEventListener("progress", hh(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && s.upload && s.upload.addEventListener("progress", hh(e.onUploadProgress)), (e.cancelToken || e.signal) && (u = (b) => {
      !s || (n(!b || b.type ? new Yi(null, e, s) : b), s.abort(), s = null);
    }, e.cancelToken && e.cancelToken.subscribe(u), e.signal && (e.signal.aborted ? u() : e.signal.addEventListener("abort", u)));
    const y = qw(l);
    if (y && Ut.protocols.indexOf(y) === -1) {
      n(new fe("Unsupported protocol " + y + ":", fe.ERR_BAD_REQUEST, e));
      return;
    }
    s.send(i || null);
  });
}, Pa = {
  http: bw,
  xhr: Yw
};
M.forEach(Pa, (e, r) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: r });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: r });
  }
});
const Gw = {
  getAdapter: (e) => {
    e = M.isArray(e) ? e : [e];
    const { length: r } = e;
    let t, n;
    for (let i = 0; i < r && (t = e[i], !(n = M.isString(t) ? Pa[t.toLowerCase()] : t)); i++)
      ;
    if (!n)
      throw n === !1 ? new fe(
        `Adapter ${t} is not supported by the environment`,
        "ERR_NOT_SUPPORT"
      ) : new Error(
        M.hasOwnProp(Pa, t) ? `Adapter '${t}' is not available in the build` : `Unknown adapter '${t}'`
      );
    if (!M.isFunction(n))
      throw new TypeError("adapter is not a function");
    return n;
  },
  adapters: Pa
};
function sl(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new Yi(null, e);
}
function vh(e) {
  return sl(e), e.headers = Xt.from(e.headers), e.data = ul.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Gw.getAdapter(e.adapter || Mf.adapter)(e).then(function(n) {
    return sl(e), n.data = ul.call(
      e,
      e.transformResponse,
      n
    ), n.headers = Xt.from(n.headers), n;
  }, function(n) {
    return I_(n) || (sl(e), n && n.response && (n.response.data = ul.call(
      e,
      e.transformResponse,
      n.response
    ), n.response.headers = Xt.from(n.response.headers))), Promise.reject(n);
  });
}
const ph = (e) => e instanceof Xt ? e.toJSON() : e;
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
    headers: (s, l) => i(ph(s), ph(l), !0)
  };
  return M.forEach(Object.keys(e).concat(Object.keys(r)), function(l) {
    const f = c[l] || i, y = f(e[l], r[l], l);
    M.isUndefined(y) && f !== u || (t[l] = y);
  }), t;
}
const R_ = "1.3.3", kf = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, r) => {
  kf[e] = function(n) {
    return typeof n === e || "a" + (r < 1 ? "n " : " ") + e;
  };
});
const _h = {};
kf.transitional = function(r, t, n) {
  function i(o, a) {
    return "[Axios v" + R_ + "] Transitional option '" + o + "'" + a + (n ? ". " + n : "");
  }
  return (o, a, u) => {
    if (r === !1)
      throw new fe(
        i(a, " has been removed" + (t ? " in " + t : "")),
        fe.ERR_DEPRECATED
      );
    return t && !_h[a] && (_h[a] = !0, console.warn(
      i(
        a,
        " has been deprecated since v" + t + " and will be removed in the near future"
      )
    )), r ? r(o, a, u) : !0;
  };
};
function Kw(e, r, t) {
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
const Jl = {
  assertOptions: Kw,
  validators: kf
}, fr = Jl.validators;
class ja {
  constructor(r) {
    this.defaults = r, this.interceptors = {
      request: new fh(),
      response: new fh()
    };
  }
  request(r, t) {
    typeof r == "string" ? (t = t || {}, t.url = r) : t = r || {}, t = Rn(this.defaults, t);
    const { transitional: n, paramsSerializer: i, headers: o } = t;
    n !== void 0 && Jl.assertOptions(n, {
      silentJSONParsing: fr.transitional(fr.boolean),
      forcedJSONParsing: fr.transitional(fr.boolean),
      clarifyTimeoutError: fr.transitional(fr.boolean)
    }, !1), i !== void 0 && Jl.assertOptions(i, {
      encode: fr.function,
      serialize: fr.function
    }, !0), t.method = (t.method || this.defaults.method || "get").toLowerCase();
    let a;
    a = o && M.merge(
      o.common,
      o[t.method]
    ), a && M.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (g) => {
        delete o[g];
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
      const g = [vh.bind(this), void 0];
      for (g.unshift.apply(g, u), g.push.apply(g, s), y = g.length, l = Promise.resolve(t); f < y; )
        l = l.then(g[f++], g[f++]);
      return l;
    }
    y = u.length;
    let b = t;
    for (f = 0; f < y; ) {
      const g = u[f++], S = u[f++];
      try {
        b = g(b);
      } catch (P) {
        S.call(this, P);
        break;
      }
    }
    try {
      l = vh.call(this, b);
    } catch (g) {
      return Promise.reject(g);
    }
    for (f = 0, y = s.length; f < y; )
      l = l.then(s[f++], s[f++]);
    return l;
  }
  getUri(r) {
    r = Rn(this.defaults, r);
    const t = A_(r.baseURL, r.url);
    return S_(t, r.params, r.paramsSerializer);
  }
}
M.forEach(["delete", "get", "head", "options"], function(r) {
  ja.prototype[r] = function(t, n) {
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
  ja.prototype[r] = t(), ja.prototype[r + "Form"] = t(!0);
});
const Ia = ja;
class Df {
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
      n.reason || (n.reason = new Yi(o, a, u), t(n.reason));
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
      token: new Df(function(i) {
        r = i;
      }),
      cancel: r
    };
  }
}
const Zw = Df;
function Qw(e) {
  return function(t) {
    return e.apply(null, t);
  };
}
function Xw(e) {
  return M.isObject(e) && e.isAxiosError === !0;
}
const ef = {
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
Object.entries(ef).forEach(([e, r]) => {
  ef[r] = e;
});
const Jw = ef;
function C_(e) {
  const r = new Ia(e), t = f_(Ia.prototype.request, r);
  return M.extend(t, Ia.prototype, r, { allOwnKeys: !0 }), M.extend(t, r, null, { allOwnKeys: !0 }), t.create = function(i) {
    return C_(Rn(e, i));
  }, t;
}
const He = C_(Mf);
He.Axios = Ia;
He.CanceledError = Yi;
He.CancelToken = Zw;
He.isCancel = I_;
He.VERSION = R_;
He.toFormData = eu;
He.AxiosError = fe;
He.Cancel = He.CanceledError;
He.all = function(r) {
  return Promise.all(r);
};
He.spread = Qw;
He.isAxiosError = Xw;
He.mergeConfig = Rn;
He.AxiosHeaders = Xt;
He.formToJSON = (e) => P_(M.isHTMLForm(e) ? new FormData(e) : e);
He.HttpStatusCode = Jw;
He.default = He;
const $_ = He;
var eE = Li;
Li.flatten = Li;
Li.unflatten = M_;
function j_(e) {
  return e && e.constructor && typeof e.constructor.isBuffer == "function" && e.constructor.isBuffer(e);
}
function N_(e) {
  return e;
}
function Li(e, r) {
  r = r || {};
  const t = r.delimiter || ".", n = r.maxDepth, i = r.transformKey || N_, o = {};
  function a(u, c, s) {
    s = s || 1, Object.keys(u).forEach(function(l) {
      const f = u[l], y = r.safe && Array.isArray(f), b = Object.prototype.toString.call(f), g = j_(f), S = b === "[object Object]" || b === "[object Array]", P = c ? c + t + i(l) : i(l);
      if (!y && !g && S && Object.keys(f).length && (!r.maxDepth || s < n))
        return a(f, P, s + 1);
      o[P] = f;
    });
  }
  return a(e), o;
}
function M_(e, r) {
  r = r || {};
  const t = r.delimiter || ".", n = r.overwrite || !1, i = r.transformKey || N_, o = {};
  if (j_(e) || Object.prototype.toString.call(e) !== "[object Object]")
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
      const g = Object.prototype.toString.call(b[f]), S = g === "[object Object]" || g === "[object Array]";
      if (!n && !S && typeof b[f] < "u")
        return;
      (n && !S || !n && b[f] == null) && (b[f] = typeof y == "number" && !r.object ? [] : {}), b = b[f], l.length > 0 && (f = a(l.shift()), y = a(l[0]));
    }
    b[f] = M_(e[s], r);
  }), o;
}
const Na = $_.create({
  baseURL: "https://socialtech.myjetbrains.com/api/",
  headers: {
    Authorization: "Bearer perm:YWxla3NhbmRyLm15a3VseWNo.NjEtMzY=.3YAXZtLSVD7SLVpr9C4MfcIQXDkjFM"
  }
});
var Uf = /* @__PURE__ */ ((e) => (e.Subtask = "Subtask", e.Duplicate = "Duplicate", e.Depend = "Depend", e.Relates = "Relates", e))(Uf || {});
function k_({ issues: e, isAlreadyLoaded: r, addRelation: t }) {
  const n = r ?? ((i) => !1);
  return e.flatMap((i) => {
    const o = tE(i);
    return o && o.length > 0 ? (o.forEach((a) => t({
      from: i.id,
      to: a,
      type: Uf.Subtask
    })), o.filter((a) => !n(a))) : [];
  });
}
function tE(e) {
  return e.links.filter((r) => r.linkType.name === Uf.Subtask && r.direction === "OUTWARD").flatMap((r) => r.issues).map((r) => r.id);
}
const rE = "customFields($type,name,value($type,archived,avatarUrl,buildIntegration,buildLink,color(background,id),description,fullName,id,isResolved,localizedName,login,markdownText,minutes,name,presentation,ringId,text))", D_ = "id,login,name,fullName,avatarUrl,email", nE = `reporter(${D_})`, iE = `updater(${D_})`, U_ = `fields=id,idReadable,summary,description,updated,created,usesMarkdown,${nE},${iE},links(id,direction,linkType(name),issues(id)),tags(name),${rE}`;
async function oE(e) {
  let r = e.ids;
  const { maxDepthLevel: t } = e;
  let n = 0;
  for (; r.length > 0 && (!t || n++ < t); )
    r = await aE({
      ...e,
      ids: r
    });
}
async function aE({
  ids: e,
  onLoadedIssue: r,
  isAlreadyLoaded: t,
  addRelation: n
}) {
  const i = (await Na.post(
    `issuesGetter?${U_}`,
    e.map((o) => ({ id: o }))
  )).data;
  return i.forEach((o) => r(o)), k_({
    issues: i,
    isAlreadyLoaded: t,
    addRelation: n
  });
}
function uE(e) {
  sE(e), cE(e), lE(e), fE(e), dE(e), hE(e), vE(e);
}
function sE({ issue: e, addNode: r, addRelation: t }) {
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
function cE({ issue: e, addNode: r, addRelation: t }) {
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
function lE({ issue: e, addNode: r, addRelation: t }) {
  var n, i;
  const o = (i = (n = e.customFields) == null ? void 0 : n.find((u) => u.name === "GitLab PR link")) == null ? void 0 : i.value, a = o == null ? void 0 : o.matchAll(/merge_requests\/(?<mrNumber>\d*)/gm);
  a && Array.from(a).map((u) => {
    var c;
    return ((c = u.groups) == null ? void 0 : c.mrNumber) || "";
  }).forEach((u) => {
    r("mr", {
      id: u,
      number: u
    }), t({
      toNode: "mr",
      to: u,
      fromNode: "issue",
      from: e.id,
      type: "mr"
    });
  });
}
function fE({ issue: e, addNode: r, addRelation: t }) {
  var n, i;
  const o = (i = (n = e.customFields) == null ? void 0 : n.find((a) => a.name === "Assignee")) == null ? void 0 : i.value;
  o && Array.isArray(o) && o.forEach((a) => {
    r("trackerUser", {
      id: a.id,
      name: a.name,
      fullName: a.fullName,
      login: a.login,
      avatarUrl: a.avatarUrl,
      email: a.email
    }), t({
      fromNode: "issue",
      from: e.id,
      toNode: "trackerUser",
      to: a.id,
      type: "assignee"
    });
  });
}
function dE({ issue: e, addNode: r, addRelation: t }) {
  var n, i;
  const o = (i = (n = e.customFields) == null ? void 0 : n.find((a) => a.name === "Assignee QA")) == null ? void 0 : i.value;
  o && Array.isArray(o) && o.forEach((a) => {
    r("trackerUser", {
      id: a.id,
      name: a.name,
      fullName: a.fullName,
      login: a.login,
      avatarUrl: a.avatarUrl,
      email: a.email
    }), t({
      fromNode: "issue",
      from: e.id,
      toNode: "trackerUser",
      to: a.id,
      type: "assigneeQA"
    });
  });
}
function hE({ issue: e, addNode: r, addRelation: t }) {
  const n = e.reporter;
  n && n.id && (r("trackerUser", {
    id: n.id,
    name: n.name,
    fullName: n.fullName,
    login: n.login,
    avatarUrl: n.avatarUrl,
    email: n.email
  }), t({
    fromNode: "issue",
    from: e.id,
    toNode: "trackerUser",
    to: n.id,
    type: "reporter"
  }));
}
function vE({ issue: e, addNode: r, addRelation: t }) {
  const n = e.updater;
  n && n.id && (r("trackerUser", {
    id: n.id,
    name: n.name,
    fullName: n.fullName,
    login: n.login,
    avatarUrl: n.avatarUrl,
    email: n.email
  }), t({
    fromNode: "issue",
    from: e.id,
    toNode: "trackerUser",
    to: n.id,
    type: "updater"
  }));
}
function pE(e) {
  var r, t, n, i, o, a, u, c, s, l, f, y, b, g, S, P;
  return {
    storyPoints: (t = (r = e.customFields) == null ? void 0 : r.find((I) => I.name === "Story points")) == null ? void 0 : t.value,
    state: (o = (i = (n = e.customFields) == null ? void 0 : n.find((I) => I.name === "State")) == null ? void 0 : i.value) == null ? void 0 : o.name,
    source: (c = (u = (a = e.customFields) == null ? void 0 : a.find((I) => I.name === "Source")) == null ? void 0 : u.value) == null ? void 0 : c.name,
    priority: (f = (l = (s = e.customFields) == null ? void 0 : s.find((I) => I.name === "Priority")) == null ? void 0 : l.value) == null ? void 0 : f.name,
    severity: (g = (b = (y = e.customFields) == null ? void 0 : y.find((I) => I.name === "Severity")) == null ? void 0 : b.value) == null ? void 0 : g.name,
    tags: (P = (S = e.tags) == null ? void 0 : S.map((I) => I.name)) == null ? void 0 : P.join(",")
  };
}
function _E() {
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
          ...pE(o)
        };
        e.set(o.id, a), uE({
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
      return L_(e);
    },
    getRelations() {
      return t;
    },
    getNodes() {
      return yE(r);
    }
  };
}
function yE(e) {
  return Array.from(e).map(([r, t]) => [r, L_(t)]);
}
function L_(e) {
  return Array.from(e, ([r, t]) => t);
}
async function mE({ query: e, maxDepthLevel: r }) {
  const t = _E(), n = await Na.get(
    `issues?${U_}&query=${encodeURI(e)}`
  );
  return n.data.forEach((i) => t.addIssue(i)), await oE({
    ids: k_({
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
async function bE(e) {
  return mE(e);
}
async function gE({ addNodes: e, addRelations: r, config: t }) {
  Na.defaults.baseURL = t.url, Na.defaults.headers.Authorization = `Bearer ${t.token}`;
  for await (const n of t.issueQueries) {
    const { issues: i, relations: o, nodes: a } = await bE({
      query: n,
      maxDepthLevel: t.issueLoadingMaxDepthLevel
    });
    await e("issue", i.map((u) => eE.flatten(u)));
    for await (const [u, c] of a)
      await e(u, c);
    await r(o);
  }
}
const OE = {
  name: "youtrack-connector",
  connect: gE
}, tf = $_.create({
  baseURL: "https://gitlab.example.com/api/v4/",
  headers: {
    Authorization: "Bearer glpat-BmwEo5wgWvYLmukAPxHq"
  }
});
async function wE() {
  return {
    mergeRequests: (await tf.get("merge_requests?state=all")).data
  };
}
async function EE({ config: e, addNodes: r }) {
  tf.defaults.baseURL = e.url, tf.defaults.headers.Authorization = `Bearer ${e.token}`;
  const { mergeRequests: t } = await wE();
  await r(
    "mr",
    t.map((n) => ({
      ...n,
      id: n.iid,
      originId: n.id
    }))
  );
}
const SE = {
  name: "gitlab-connector",
  connect: EE
};
var h = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function TE(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function PE(e) {
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
var x_ = {}, Jt = {}, te = {}, Ee = {}, IE = h && h.__extends || function() {
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
var F_ = "ServiceUnavailable";
Ee.SERVICE_UNAVAILABLE = F_;
var B_ = "SessionExpired";
Ee.SESSION_EXPIRED = B_;
var AE = "ProtocolError";
Ee.PROTOCOL_ERROR = AE;
var RE = "N/A", Lf = function(e) {
  IE(r, e);
  function r(t, n, i) {
    var o = e.call(this, t, i != null ? { cause: i } : void 0) || this;
    return o.constructor = r, o.__proto__ = r.prototype, o.code = n, o.name = "Neo4jError", o.retriable = jE(n), o;
  }
  return r.isRetriable = function(t) {
    return t != null && t instanceof r && t.retriable;
  }, r;
}(Error);
Ee.Neo4jError = Lf;
function CE(e, r, t) {
  return new Lf(e, r ?? RE, t);
}
Ee.newError = CE;
var $E = Lf.isRetriable;
Ee.isRetriableError = $E;
function jE(e) {
  return e === F_ || e === B_ || ME(e) || NE(e);
}
function NE(e) {
  return (e == null ? void 0 : e.includes("TransientError")) === !0;
}
function ME(e) {
  return e === "Neo.ClientError.Security.AuthorizationExpired";
}
var Ke = {};
Object.defineProperty(Ke, "__esModule", { value: !0 });
Ke.toString = Ke.toNumber = Ke.inSafeRange = Ke.isInt = Ke.int = void 0;
var pi = Ee, yh = /* @__PURE__ */ new Map(), Or = function() {
  function e(r, t) {
    this.low = r ?? 0, this.high = t ?? 0;
  }
  return e.prototype.inSafeRange = function() {
    return this.greaterThanOrEqual(e.MIN_SAFE_VALUE) && this.lessThanOrEqual(e.MAX_SAFE_VALUE);
  }, e.prototype.toInt = function() {
    return this.low;
  }, e.prototype.toNumber = function() {
    return this.high * xr + (this.low >>> 0);
  }, e.prototype.toBigInt = function() {
    if (this.isZero())
      return BigInt(0);
    if (this.isPositive())
      return BigInt(this.high >>> 0) * BigInt(xr) + BigInt(this.low >>> 0);
    var r = this.negate();
    return BigInt(-1) * (BigInt(r.high >>> 0) * BigInt(xr) + BigInt(r.low >>> 0));
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
    var t = e.fromValue(r), n = this.high >>> 16, i = this.high & 65535, o = this.low >>> 16, a = this.low & 65535, u = t.high >>> 16, c = t.high & 65535, s = t.low >>> 16, l = t.low & 65535, f = 0, y = 0, b = 0, g = 0;
    return g += a + l, b += g >>> 16, g &= 65535, b += o + s, y += b >>> 16, b &= 65535, y += i + c, f += y >>> 16, y &= 65535, f += n + u, f &= 65535, e.fromBits(b << 16 | g, f << 16 | y);
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
    if (this.lessThan(gh) && t.lessThan(gh))
      return e.fromNumber(this.toNumber() * t.toNumber());
    var n = this.high >>> 16, i = this.high & 65535, o = this.low >>> 16, a = this.low & 65535, u = t.high >>> 16, c = t.high & 65535, s = t.low >>> 16, l = t.low & 65535, f = 0, y = 0, b = 0, g = 0;
    return g += a * l, b += g >>> 16, g &= 65535, b += o * l, y += b >>> 16, b &= 65535, b += a * s, y += b >>> 16, b &= 65535, y += i * l, f += y >>> 16, y &= 65535, y += o * s, f += y >>> 16, y &= 65535, y += a * c, f += y >>> 16, y &= 65535, f += n * l + i * s + o * c + a * u, f &= 65535, e.fromBits(b << 16 | g, f << 16 | y);
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
    if (r = r | 0, r >= -128 && r < 128 && (t = yh.get(r), t != null))
      return t;
    var n = new e(r, r < 0 ? -1 : 0);
    return r >= -128 && r < 128 && yh.set(r, n), n;
  }, e.fromBits = function(r, t) {
    return new e(r, t);
  }, e.fromNumber = function(r) {
    return isNaN(r) || !isFinite(r) ? e.ZERO : r <= -bh ? e.MIN_VALUE : r + 1 >= bh ? e.MAX_VALUE : r < 0 ? e.fromNumber(-r).negate() : new e(r % xr | 0, r / xr | 0);
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
      if (o === !0 && !DE(f, y, t))
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
function kE(e, r, t) {
  var n = e.toString(r), i = Math.max(t - n.length, 0), o = "0".repeat(i);
  return "".concat(o).concat(n);
}
function DE(e, r, t) {
  return !Number.isNaN(e) && !Number.isNaN(r) && kE(r, t, e.length) === e.toLowerCase();
}
Object.defineProperty(Or.prototype, "__isInteger__", {
  value: !0,
  enumerable: !1,
  configurable: !1
});
var mh = 1 << 16, UE = 1 << 24, xr = mh * mh, LE = xr * xr, bh = LE / 2, gh = Or.fromInt(UE), xE = Or.fromValue;
Ke.int = xE;
var FE = Or.isInteger;
Ke.isInt = FE;
var BE = Or.inSafeRange;
Ke.inSafeRange = BE;
var WE = Or.toNumber;
Ke.toNumber = WE;
var VE = Or.toString;
Ke.toString = VE;
Ke.default = Or;
var Te = {}, xf = {}, ce = {}, Fn = {}, er = {};
Object.defineProperty(er, "__esModule", { value: !0 });
er.getBrokenObjectReason = er.isBrokenObject = er.createBrokenObject = void 0;
var W_ = "__isBrokenObject__", V_ = "__reason__";
function qE(e, r) {
  r === void 0 && (r = {});
  var t = function() {
    throw e;
  };
  return new Proxy(r, {
    get: function(n, i) {
      if (i === W_)
        return !0;
      if (i === V_)
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
er.createBrokenObject = qE;
function HE(e) {
  return e !== null && typeof e == "object" && e[W_] === !0;
}
er.isBrokenObject = HE;
function zE(e) {
  return e[V_];
}
er.getBrokenObjectReason = zE;
Object.defineProperty(Fn, "__esModule", { value: !0 });
Fn.stringify = void 0;
var Oh = er;
function YE(e) {
  return JSON.stringify(e, function(r, t) {
    return (0, Oh.isBrokenObject)(t) ? {
      __isBrokenObject__: !0,
      __reason__: (0, Oh.getBrokenObjectReason)(t)
    } : typeof t == "bigint" ? "".concat(t, "n") : t;
  });
}
Fn.stringify = YE;
Object.defineProperty(ce, "__esModule", { value: !0 });
ce.ENCRYPTION_OFF = ce.ENCRYPTION_ON = ce.validateQueryAndParameters = ce.assertValidDate = ce.assertNumberOrInteger = ce.assertNumber = ce.assertString = ce.assertObject = ce.isString = ce.isObject = ce.isEmptyObjectOrNull = void 0;
var GE = Ke, Vr = Fn, KE = "ENCRYPTION_ON";
ce.ENCRYPTION_ON = KE;
var ZE = "ENCRYPTION_OFF";
ce.ENCRYPTION_OFF = ZE;
function QE(e) {
  if (e === null)
    return !0;
  if (!nu(e))
    return !1;
  for (var r in e)
    if (e[r] !== void 0)
      return !1;
  return !0;
}
ce.isEmptyObjectOrNull = QE;
function nu(e) {
  return typeof e == "object" && !Array.isArray(e) && e !== null;
}
ce.isObject = nu;
function XE(e, r, t) {
  var n, i, o = "", a = r ?? {}, u = (n = t == null ? void 0 : t.skipAsserts) !== null && n !== void 0 ? n : !1;
  return typeof e == "string" ? o = e : e instanceof String ? o = e.toString() : typeof e == "object" && e.text != null && (o = e.text, a = (i = e.parameters) !== null && i !== void 0 ? i : {}), u || (n1(o), i1(a)), { validatedQuery: o, params: a };
}
ce.validateQueryAndParameters = XE;
function JE(e, r) {
  if (!nu(e))
    throw new TypeError(r + " expected to be an object but was: " + (0, Vr.stringify)(e));
  return e;
}
ce.assertObject = JE;
function q_(e, r) {
  if (!H_(e))
    throw new TypeError((0, Vr.stringify)(r) + " expected to be string but was: " + (0, Vr.stringify)(e));
  return e;
}
ce.assertString = q_;
function e1(e, r) {
  if (typeof e != "number")
    throw new TypeError(r + " expected to be a number but was: " + (0, Vr.stringify)(e));
  return e;
}
ce.assertNumber = e1;
function t1(e, r) {
  if (typeof e != "number" && typeof e != "bigint" && !(0, GE.isInt)(e))
    throw new TypeError(r + " expected to be either a number or an Integer object but was: " + (0, Vr.stringify)(e));
  return e;
}
ce.assertNumberOrInteger = t1;
function r1(e, r) {
  if (Object.prototype.toString.call(e) !== "[object Date]")
    throw new TypeError(r + " expected to be a standard JavaScript Date but was: " + (0, Vr.stringify)(e));
  if (Number.isNaN(e.getTime()))
    throw new TypeError(r + " expected to be valid JavaScript Date but its time was NaN: " + (0, Vr.stringify)(e));
  return e;
}
ce.assertValidDate = r1;
function n1(e) {
  if (q_(e, "Cypher query"), e.trim().length === 0)
    throw new TypeError("Cypher query is expected to be a non-empty string.");
}
function i1(e) {
  if (!nu(e)) {
    var r = e.constructor != null ? " " + e.constructor.name : "";
    throw new TypeError("Query parameters are expected to either be undefined/null or an object, given:".concat(r, " ").concat(JSON.stringify(e)));
  }
}
function H_(e) {
  return Object.prototype.toString.call(e) === "[object String]";
}
ce.isString = H_;
(function(e) {
  var r = h && h.__createBinding || (Object.create ? function(R, D, V, Z) {
    Z === void 0 && (Z = V);
    var X = Object.getOwnPropertyDescriptor(D, V);
    (!X || ("get" in X ? !D.__esModule : X.writable || X.configurable)) && (X = { enumerable: !0, get: function() {
      return D[V];
    } }), Object.defineProperty(R, Z, X);
  } : function(R, D, V, Z) {
    Z === void 0 && (Z = V), R[Z] = D[V];
  }), t = h && h.__setModuleDefault || (Object.create ? function(R, D) {
    Object.defineProperty(R, "default", { enumerable: !0, value: D });
  } : function(R, D) {
    R.default = D;
  }), n = h && h.__importStar || function(R) {
    if (R && R.__esModule)
      return R;
    var D = {};
    if (R != null)
      for (var V in R)
        V !== "default" && Object.prototype.hasOwnProperty.call(R, V) && r(D, R, V);
    return t(D, R), D;
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.floorMod = e.floorDiv = e.assertValidZoneId = e.assertValidNanosecond = e.assertValidSecond = e.assertValidMinute = e.assertValidHour = e.assertValidDay = e.assertValidMonth = e.assertValidYear = e.timeZoneOffsetInSeconds = e.totalNanoseconds = e.newDate = e.toStandardDate = e.isoStringToStandardDate = e.dateToIsoString = e.timeZoneOffsetToIsoString = e.timeToIsoString = e.durationToIsoString = e.dateToEpochDay = e.localDateTimeToEpochSecond = e.localTimeToNanoOfDay = e.normalizeNanosecondsForDuration = e.normalizeSecondsForDuration = e.SECONDS_PER_DAY = e.DAYS_PER_400_YEAR_CYCLE = e.DAYS_0000_TO_1970 = e.NANOS_PER_HOUR = e.NANOS_PER_MINUTE = e.NANOS_PER_MILLISECOND = e.NANOS_PER_SECOND = e.SECONDS_PER_HOUR = e.SECONDS_PER_MINUTE = e.MINUTES_PER_HOUR = e.NANOSECOND_OF_SECOND_RANGE = e.SECOND_OF_MINUTE_RANGE = e.MINUTE_OF_HOUR_RANGE = e.HOUR_OF_DAY_RANGE = e.DAY_OF_MONTH_RANGE = e.MONTH_OF_YEAR_RANGE = e.YEAR_RANGE = void 0;
  var i = n(Ke), o = Ee, a = ce, u = function() {
    function R(D, V) {
      this._minNumber = D, this._maxNumber = V, this._minInteger = (0, i.int)(D), this._maxInteger = (0, i.int)(V);
    }
    return R.prototype.contains = function(D) {
      if ((0, i.isInt)(D) && D instanceof i.default)
        return D.greaterThanOrEqual(this._minInteger) && D.lessThanOrEqual(this._maxInteger);
      if (typeof D == "bigint") {
        var V = (0, i.int)(D);
        return V.greaterThanOrEqual(this._minInteger) && V.lessThanOrEqual(this._maxInteger);
      } else
        return D >= this._minNumber && D <= this._maxNumber;
    }, R.prototype.toString = function() {
      return "[".concat(this._minNumber, ", ").concat(this._maxNumber, "]");
    }, R;
  }();
  e.YEAR_RANGE = new u(-999999999, 999999999), e.MONTH_OF_YEAR_RANGE = new u(1, 12), e.DAY_OF_MONTH_RANGE = new u(1, 31), e.HOUR_OF_DAY_RANGE = new u(0, 23), e.MINUTE_OF_HOUR_RANGE = new u(0, 59), e.SECOND_OF_MINUTE_RANGE = new u(0, 59), e.NANOSECOND_OF_SECOND_RANGE = new u(0, 999999999), e.MINUTES_PER_HOUR = 60, e.SECONDS_PER_MINUTE = 60, e.SECONDS_PER_HOUR = e.SECONDS_PER_MINUTE * e.MINUTES_PER_HOUR, e.NANOS_PER_SECOND = 1e9, e.NANOS_PER_MILLISECOND = 1e6, e.NANOS_PER_MINUTE = e.NANOS_PER_SECOND * e.SECONDS_PER_MINUTE, e.NANOS_PER_HOUR = e.NANOS_PER_MINUTE * e.MINUTES_PER_HOUR, e.DAYS_0000_TO_1970 = 719528, e.DAYS_PER_400_YEAR_CYCLE = 146097, e.SECONDS_PER_DAY = 86400;
  function c(R, D) {
    return (0, i.int)(R).add(ne(D, e.NANOS_PER_SECOND));
  }
  e.normalizeSecondsForDuration = c;
  function s(R) {
    return G(R, e.NANOS_PER_SECOND);
  }
  e.normalizeNanosecondsForDuration = s;
  function l(R, D, V, Z) {
    R = (0, i.int)(R), D = (0, i.int)(D), V = (0, i.int)(V), Z = (0, i.int)(Z);
    var X = R.multiply(e.NANOS_PER_HOUR);
    return X = X.add(D.multiply(e.NANOS_PER_MINUTE)), X = X.add(V.multiply(e.NANOS_PER_SECOND)), X.add(Z);
  }
  e.localTimeToNanoOfDay = l;
  function f(R, D, V, Z, X, ke, ut) {
    var Mt = y(R, D, V), gt = q(Z, X, ke);
    return Mt.multiply(e.SECONDS_PER_DAY).add(gt);
  }
  e.localDateTimeToEpochSecond = f;
  function y(R, D, V) {
    R = (0, i.int)(R), D = (0, i.int)(D), V = (0, i.int)(V);
    var Z = R.multiply(365);
    return R.greaterThanOrEqual(0) ? Z = Z.add(R.add(3).div(4).subtract(R.add(99).div(100)).add(R.add(399).div(400))) : Z = Z.subtract(R.div(-4).subtract(R.div(-100)).add(R.div(-400))), Z = Z.add(D.multiply(367).subtract(362).div(12)), Z = Z.add(V.subtract(1)), D.greaterThan(2) && (Z = Z.subtract(1), re(R) || (Z = Z.subtract(1))), Z.subtract(e.DAYS_0000_TO_1970);
  }
  e.dateToEpochDay = y;
  function b(R, D, V, Z) {
    var X = F(R), ke = F(D), ut = ve(V, Z);
    return "P".concat(X, "M").concat(ke, "DT").concat(ut, "S");
  }
  e.durationToIsoString = b;
  function g(R, D, V, Z) {
    var X = F(R, 2), ke = F(D, 2), ut = F(V, 2), Mt = We(Z);
    return "".concat(X, ":").concat(ke, ":").concat(ut).concat(Mt);
  }
  e.timeToIsoString = g;
  function S(R) {
    if (R = (0, i.int)(R), R.equals(0))
      return "Z";
    var D = R.isNegative();
    D && (R = R.multiply(-1));
    var V = D ? "-" : "+", Z = F(R.div(e.SECONDS_PER_HOUR), 2), X = F(R.div(e.SECONDS_PER_MINUTE).modulo(e.MINUTES_PER_HOUR), 2), ke = R.modulo(e.SECONDS_PER_MINUTE), ut = ke.equals(0) ? null : F(ke, 2);
    return ut != null ? "".concat(V).concat(Z, ":").concat(X, ":").concat(ut) : "".concat(V).concat(Z, ":").concat(X);
  }
  e.timeZoneOffsetToIsoString = S;
  function P(R, D, V) {
    var Z = Q(R), X = F(D, 2), ke = F(V, 2);
    return "".concat(Z, "-").concat(X, "-").concat(ke);
  }
  e.dateToIsoString = P;
  function I(R) {
    return new Date(R);
  }
  e.isoStringToStandardDate = I;
  function $(R) {
    return new Date(R);
  }
  e.toStandardDate = $;
  function j(R) {
    return new Date(R);
  }
  e.newDate = j;
  function k(R, D) {
    D = D ?? 0;
    var V = R.getMilliseconds() * e.NANOS_PER_MILLISECOND;
    return Ie(D, V);
  }
  e.totalNanoseconds = k;
  function L(R) {
    var D = R.getSeconds() >= R.getUTCSeconds() ? R.getSeconds() - R.getUTCSeconds() : R.getSeconds() - R.getUTCSeconds() + 60, V = R.getTimezoneOffset();
    return V === 0 ? 0 + D : -1 * V * e.SECONDS_PER_MINUTE + D;
  }
  e.timeZoneOffsetInSeconds = L;
  function Y(R) {
    return he(R, e.YEAR_RANGE, "Year");
  }
  e.assertValidYear = Y;
  function ee(R) {
    return he(R, e.MONTH_OF_YEAR_RANGE, "Month");
  }
  e.assertValidMonth = ee;
  function le(R) {
    return he(R, e.DAY_OF_MONTH_RANGE, "Day");
  }
  e.assertValidDay = le;
  function me(R) {
    return he(R, e.HOUR_OF_DAY_RANGE, "Hour");
  }
  e.assertValidHour = me;
  function Me(R) {
    return he(R, e.MINUTE_OF_HOUR_RANGE, "Minute");
  }
  e.assertValidMinute = Me;
  function Pe(R) {
    return he(R, e.SECOND_OF_MINUTE_RANGE, "Second");
  }
  e.assertValidSecond = Pe;
  function Ue(R) {
    return he(R, e.NANOSECOND_OF_SECOND_RANGE, "Nanosecond");
  }
  e.assertValidNanosecond = Ue;
  function be(R, D) {
    try {
      Intl.DateTimeFormat(void 0, { timeZone: D });
    } catch {
      throw (0, o.newError)("".concat(R, ' is expected to be a valid ZoneId but was: "').concat(D, '"'));
    }
  }
  e.assertValidZoneId = be;
  function he(R, D, V) {
    if ((0, a.assertNumberOrInteger)(R, V), !D.contains(R))
      throw (0, o.newError)("".concat(V, " is expected to be in range ").concat(D.toString(), " but was: ").concat(R.toString()));
    return R;
  }
  function q(R, D, V) {
    R = (0, i.int)(R), D = (0, i.int)(D), V = (0, i.int)(V);
    var Z = R.multiply(e.SECONDS_PER_HOUR);
    return Z = Z.add(D.multiply(e.SECONDS_PER_MINUTE)), Z.add(V);
  }
  function re(R) {
    return R = (0, i.int)(R), R.modulo(4).equals(0) ? R.modulo(100).equals(0) ? !!R.modulo(400).equals(0) : !0 : !1;
  }
  function ne(R, D) {
    R = (0, i.int)(R), D = (0, i.int)(D);
    var V = R.div(D);
    return R.isPositive() !== D.isPositive() && V.multiply(D).notEquals(R) && (V = V.subtract(1)), V;
  }
  e.floorDiv = ne;
  function G(R, D) {
    return R = (0, i.int)(R), D = (0, i.int)(D), R.subtract(ne(R, D).multiply(D));
  }
  e.floorMod = G;
  function ve(R, D) {
    R = (0, i.int)(R), D = (0, i.int)(D);
    var V, Z, X = R.isNegative(), ke = D.greaterThan(0);
    return X && ke ? R.equals(-1) ? V = "-0" : V = R.add(1).toString() : V = R.toString(), ke && (X ? Z = We(D.negate().add(2 * e.NANOS_PER_SECOND).modulo(e.NANOS_PER_SECOND)) : Z = We(D.add(e.NANOS_PER_SECOND).modulo(e.NANOS_PER_SECOND))), Z != null ? V + Z : V;
  }
  function We(R) {
    return R = (0, i.int)(R), R.equals(0) ? "" : "." + F(R, 9);
  }
  function Q(R) {
    var D = (0, i.int)(R);
    return D.isNegative() || D.greaterThan(9999) ? F(D, 6, { usePositiveSign: !0 }) : F(D, 4);
  }
  function F(R, D, V) {
    R = (0, i.int)(R);
    var Z = R.isNegative();
    Z && (R = R.negate());
    var X = R.toString();
    if (D != null)
      for (; X.length < D; )
        X = "0" + X;
    return Z ? "-" + X : (V == null ? void 0 : V.usePositiveSign) === !0 ? "+" + X : X;
  }
  function Ie(R, D) {
    return R instanceof i.default ? R.add(D) : typeof R == "bigint" ? R + BigInt(D) : R + D;
  }
})(xf);
var o1 = h && h.__createBinding || (Object.create ? function(e, r, t, n) {
  n === void 0 && (n = t);
  var i = Object.getOwnPropertyDescriptor(r, t);
  (!i || ("get" in i ? !r.__esModule : i.writable || i.configurable)) && (i = { enumerable: !0, get: function() {
    return r[t];
  } }), Object.defineProperty(e, n, i);
} : function(e, r, t, n) {
  n === void 0 && (n = t), e[n] = r[t];
}), a1 = h && h.__setModuleDefault || (Object.create ? function(e, r) {
  Object.defineProperty(e, "default", { enumerable: !0, value: r });
} : function(e, r) {
  e.default = r;
}), z_ = h && h.__importStar || function(e) {
  if (e && e.__esModule)
    return e;
  var r = {};
  if (e != null)
    for (var t in e)
      t !== "default" && Object.prototype.hasOwnProperty.call(e, t) && o1(r, e, t);
  return a1(r, e), r;
}, u1 = h && h.__read || function(e, r) {
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
var J = z_(xf), Qt = ce, s1 = Ee, Br = z_(Ke), Bn = {
  value: !0,
  enumerable: !1,
  configurable: !1,
  writable: !1
}, Y_ = "__isDuration__", G_ = "__isLocalTime__", K_ = "__isTime__", Z_ = "__isDate__", Q_ = "__isLocalDateTime__", X_ = "__isDateTime__", J_ = function() {
  function e(r, t, n, i) {
    this.months = (0, Qt.assertNumberOrInteger)(r, "Months"), this.days = (0, Qt.assertNumberOrInteger)(t, "Days"), (0, Qt.assertNumberOrInteger)(n, "Seconds"), (0, Qt.assertNumberOrInteger)(i, "Nanoseconds"), this.seconds = J.normalizeSecondsForDuration(n, i), this.nanoseconds = J.normalizeNanosecondsForDuration(i), Object.freeze(this);
  }
  return e.prototype.toString = function() {
    return J.durationToIsoString(this.months, this.days, this.seconds, this.nanoseconds);
  }, e;
}();
Te.Duration = J_;
Object.defineProperty(J_.prototype, Y_, Bn);
function c1(e) {
  return Wn(e, Y_);
}
Te.isDuration = c1;
var ey = function() {
  function e(r, t, n, i) {
    this.hour = J.assertValidHour(r), this.minute = J.assertValidMinute(t), this.second = J.assertValidSecond(n), this.nanosecond = J.assertValidNanosecond(i), Object.freeze(this);
  }
  return e.fromStandardDate = function(r, t) {
    Gi(r, t);
    var n = J.totalNanoseconds(r, t);
    return new e(r.getHours(), r.getMinutes(), r.getSeconds(), n instanceof Br.default ? n.toInt() : typeof n == "bigint" ? (0, Br.int)(n).toInt() : n);
  }, e.prototype.toString = function() {
    return J.timeToIsoString(this.hour, this.minute, this.second, this.nanosecond);
  }, e;
}();
Te.LocalTime = ey;
Object.defineProperty(ey.prototype, G_, Bn);
function l1(e) {
  return Wn(e, G_);
}
Te.isLocalTime = l1;
var ty = function() {
  function e(r, t, n, i, o) {
    this.hour = J.assertValidHour(r), this.minute = J.assertValidMinute(t), this.second = J.assertValidSecond(n), this.nanosecond = J.assertValidNanosecond(i), this.timeZoneOffsetSeconds = (0, Qt.assertNumberOrInteger)(o, "Time zone offset in seconds"), Object.freeze(this);
  }
  return e.fromStandardDate = function(r, t) {
    return Gi(r, t), new e(r.getHours(), r.getMinutes(), r.getSeconds(), (0, Br.toNumber)(J.totalNanoseconds(r, t)), J.timeZoneOffsetInSeconds(r));
  }, e.prototype.toString = function() {
    return J.timeToIsoString(this.hour, this.minute, this.second, this.nanosecond) + J.timeZoneOffsetToIsoString(this.timeZoneOffsetSeconds);
  }, e;
}();
Te.Time = ty;
Object.defineProperty(ty.prototype, K_, Bn);
function f1(e) {
  return Wn(e, K_);
}
Te.isTime = f1;
var ry = function() {
  function e(r, t, n) {
    this.year = J.assertValidYear(r), this.month = J.assertValidMonth(t), this.day = J.assertValidDay(n), Object.freeze(this);
  }
  return e.fromStandardDate = function(r) {
    return Gi(r), new e(r.getFullYear(), r.getMonth() + 1, r.getDate());
  }, e.prototype.toStandardDate = function() {
    return J.isoStringToStandardDate(this.toString());
  }, e.prototype.toString = function() {
    return J.dateToIsoString(this.year, this.month, this.day);
  }, e;
}();
Te.Date = ry;
Object.defineProperty(ry.prototype, Z_, Bn);
function d1(e) {
  return Wn(e, Z_);
}
Te.isDate = d1;
var ny = function() {
  function e(r, t, n, i, o, a, u) {
    this.year = J.assertValidYear(r), this.month = J.assertValidMonth(t), this.day = J.assertValidDay(n), this.hour = J.assertValidHour(i), this.minute = J.assertValidMinute(o), this.second = J.assertValidSecond(a), this.nanosecond = J.assertValidNanosecond(u), Object.freeze(this);
  }
  return e.fromStandardDate = function(r, t) {
    return Gi(r, t), new e(r.getFullYear(), r.getMonth() + 1, r.getDate(), r.getHours(), r.getMinutes(), r.getSeconds(), (0, Br.toNumber)(J.totalNanoseconds(r, t)));
  }, e.prototype.toStandardDate = function() {
    return J.isoStringToStandardDate(this.toString());
  }, e.prototype.toString = function() {
    return oy(this.year, this.month, this.day, this.hour, this.minute, this.second, this.nanosecond);
  }, e;
}();
Te.LocalDateTime = ny;
Object.defineProperty(ny.prototype, Q_, Bn);
function h1(e) {
  return Wn(e, Q_);
}
Te.isLocalDateTime = h1;
var iy = function() {
  function e(r, t, n, i, o, a, u, c, s) {
    this.year = J.assertValidYear(r), this.month = J.assertValidMonth(t), this.day = J.assertValidDay(n), this.hour = J.assertValidHour(i), this.minute = J.assertValidMinute(o), this.second = J.assertValidSecond(a), this.nanosecond = J.assertValidNanosecond(u);
    var l = u1(p1(c, s), 2), f = l[0], y = l[1];
    this.timeZoneOffsetSeconds = f, this.timeZoneId = y ?? void 0, Object.freeze(this);
  }
  return e.fromStandardDate = function(r, t) {
    return Gi(r, t), new e(r.getFullYear(), r.getMonth() + 1, r.getDate(), r.getHours(), r.getMinutes(), r.getSeconds(), (0, Br.toNumber)(J.totalNanoseconds(r, t)), J.timeZoneOffsetInSeconds(r), null);
  }, e.prototype.toStandardDate = function() {
    return J.toStandardDate(this._toUTC());
  }, e.prototype.toString = function() {
    var r, t = oy(this.year, this.month, this.day, this.hour, this.minute, this.second, this.nanosecond), n = this.timeZoneOffsetSeconds != null ? J.timeZoneOffsetToIsoString((r = this.timeZoneOffsetSeconds) !== null && r !== void 0 ? r : 0) : "", i = this.timeZoneId != null ? "[".concat(this.timeZoneId, "]") : "";
    return t + n + i;
  }, e.prototype._toUTC = function() {
    var r;
    if (this.timeZoneOffsetSeconds === void 0)
      throw new Error("Requires DateTime created with time zone offset");
    var t = J.localDateTimeToEpochSecond(this.year, this.month, this.day, this.hour, this.minute, this.second, this.nanosecond), n = t.subtract((r = this.timeZoneOffsetSeconds) !== null && r !== void 0 ? r : 0);
    return (0, Br.int)(n).multiply(1e3).add((0, Br.int)(this.nanosecond).div(1e6)).toNumber();
  }, e;
}();
Te.DateTime = iy;
Object.defineProperty(iy.prototype, X_, Bn);
function v1(e) {
  return Wn(e, X_);
}
Te.isDateTime = v1;
function Wn(e, r) {
  return e != null && e[r] === !0;
}
function oy(e, r, t, n, i, o, a) {
  return J.dateToIsoString(e, r, t) + "T" + J.timeToIsoString(n, i, o, a);
}
function p1(e, r) {
  var t = e != null, n = r != null && r !== "";
  if (!t && !n)
    throw (0, s1.newError)(
      "Unable to create DateTime without either time zone offset or id. Please specify either of them. Given offset: ".concat(e, " and id: ").concat(r)
    );
  var i = [void 0, void 0];
  return t && ((0, Qt.assertNumberOrInteger)(e, "Time zone offset in seconds"), i[0] = e), n && ((0, Qt.assertString)(r, "Time zone ID"), J.assertValidZoneId("Time zone ID", r), i[1] = r), i;
}
function Gi(e, r) {
  (0, Qt.assertValidDate)(e, "Standard date"), r != null && (0, Qt.assertNumberOrInteger)(r, "Nanosecond");
}
var Ne = {};
Object.defineProperty(Ne, "__esModule", { value: !0 });
Ne.isPathSegment = Ne.PathSegment = Ne.isPath = Ne.Path = Ne.isUnboundRelationship = Ne.UnboundRelationship = Ne.isRelationship = Ne.Relationship = Ne.isNode = Ne.Node = void 0;
var Ff = Fn, Ki = {
  value: !0,
  enumerable: !1,
  configurable: !1,
  writable: !1
}, ay = "__isNode__", uy = "__isRelationship__", sy = "__isUnboundRelationship__", cy = "__isPath__", ly = "__isPathSegment__";
function Zi(e, r) {
  return e != null && e[r] === !0;
}
var fy = function() {
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
        t > 0 && (r += ","), r += n[t] + ":" + (0, Ff.stringify)(this.properties[n[t]]);
      r += "}";
    }
    return r += ")", r;
  }, e;
}();
Ne.Node = fy;
Object.defineProperty(fy.prototype, ay, Ki);
function _1(e) {
  return Zi(e, ay);
}
Ne.isNode = _1;
var Ma = function() {
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
        n > 0 && (r += ","), r += t[n] + ":" + (0, Ff.stringify)(this.properties[t[n]]);
      r += "}";
    }
    return r += "]->(" + this.endNodeElementId + ")", r;
  }, e;
}();
Ne.Relationship = Ma;
Object.defineProperty(Ma.prototype, uy, Ki);
function y1(e) {
  return Zi(e, uy);
}
Ne.isRelationship = y1;
var dy = function() {
  function e(r, t, n, i) {
    this.identity = r, this.type = t, this.properties = n, this.elementId = Ri(i, function() {
      return r.toString();
    });
  }
  return e.prototype.bind = function(r, t) {
    return new Ma(this.identity, r, t, this.type, this.properties, this.elementId);
  }, e.prototype.bindTo = function(r, t) {
    return new Ma(this.identity, r.identity, t.identity, this.type, this.properties, this.elementId, r.elementId, t.elementId);
  }, e.prototype.toString = function() {
    var r = "-[:" + this.type, t = Object.keys(this.properties);
    if (t.length > 0) {
      r += " {";
      for (var n = 0; n < t.length; n++)
        n > 0 && (r += ","), r += t[n] + ":" + (0, Ff.stringify)(this.properties[t[n]]);
      r += "}";
    }
    return r += "]->", r;
  }, e;
}();
Ne.UnboundRelationship = dy;
Object.defineProperty(dy.prototype, sy, Ki);
function m1(e) {
  return Zi(e, sy);
}
Ne.isUnboundRelationship = m1;
var hy = function() {
  function e(r, t, n) {
    this.start = r, this.relationship = t, this.end = n;
  }
  return e;
}();
Ne.PathSegment = hy;
Object.defineProperty(hy.prototype, ly, Ki);
function b1(e) {
  return Zi(e, ly);
}
Ne.isPathSegment = b1;
var vy = function() {
  function e(r, t, n) {
    this.start = r, this.end = t, this.segments = n, this.length = n.length;
  }
  return e;
}();
Ne.Path = vy;
Object.defineProperty(vy.prototype, cy, Ki);
function g1(e) {
  return Zi(e, cy);
}
Ne.isPath = g1;
function Ri(e, r) {
  return e ?? r();
}
var Bf = {}, cl = h && h.__generator || function(e, r) {
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
}, ll = h && h.__values || function(e) {
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
}, fl = h && h.__read || function(e, r) {
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
Object.defineProperty(Bf, "__esModule", { value: !0 });
var wh = Ee;
function O1(e) {
  var r = {};
  return e.forEach(function(t, n) {
    r[t] = n;
  }), r;
}
var w1 = function() {
  function e(r, t, n) {
    this.keys = r, this.length = r.length, this._fields = t, this._fieldLookup = n ?? O1(r);
  }
  return e.prototype.forEach = function(r) {
    var t, n;
    try {
      for (var i = ll(this.entries()), o = i.next(); !o.done; o = i.next()) {
        var a = fl(o.value, 2), u = a[0], c = a[1];
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
      for (var o = ll(this.entries()), a = o.next(); !a.done; a = o.next()) {
        var u = fl(a.value, 2), c = u[0], s = u[1];
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
    return cl(this, function(t) {
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
    return cl(this, function(t) {
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
    return cl(this, function(t) {
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
      for (var i = ll(this.entries()), o = i.next(); !o.done; o = i.next()) {
        var a = fl(o.value, 2), u = a[0], c = a[1];
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
        throw (0, wh.newError)("This record has no field with key '".concat(r.toString(), "', available keys are: [") + this.keys.toString() + "].");
    } else
      t = r;
    if (t > this._fields.length - 1 || t < 0)
      throw (0, wh.newError)("This record has no field with index '" + t.toString() + "'. Remember that indexes start at `0`, and make sure your query returns records in the shape you meant it to.");
    return this._fields[t];
  }, e.prototype.has = function(r) {
    return typeof r == "number" ? r >= 0 && r < this._fields.length : this._fieldLookup[r] !== void 0;
  }, e;
}();
Bf.default = w1;
var Cn = {};
Object.defineProperty(Cn, "__esModule", { value: !0 });
Cn.isPoint = Cn.Point = void 0;
var ra = ce, py = "__isPoint__", _y = function() {
  function e(r, t, n, i) {
    this.srid = (0, ra.assertNumberOrInteger)(r, "SRID"), this.x = (0, ra.assertNumber)(t, "X coordinate"), this.y = (0, ra.assertNumber)(n, "Y coordinate"), this.z = i == null ? i : (0, ra.assertNumber)(i, "Z coordinate"), Object.freeze(this);
  }
  return e.prototype.toString = function() {
    return this.z != null && !isNaN(this.z) ? "Point{srid=".concat(Cr(this.srid), ", x=").concat(Cr(this.x), ", y=").concat(Cr(this.y), ", z=").concat(Cr(this.z), "}") : "Point{srid=".concat(Cr(this.srid), ", x=").concat(Cr(this.x), ", y=").concat(Cr(this.y), "}");
  }, e;
}();
Cn.Point = _y;
function Cr(e) {
  return Number.isInteger(e) ? e.toString() + ".0" : e.toString();
}
Object.defineProperty(_y.prototype, py, {
  value: !0,
  enumerable: !1,
  configurable: !1,
  writable: !1
});
function E1(e) {
  var r = e;
  return e != null && r[py] === !0;
}
Cn.isPoint = E1;
var Ge = {}, S1 = h && h.__createBinding || (Object.create ? function(e, r, t, n) {
  n === void 0 && (n = t);
  var i = Object.getOwnPropertyDescriptor(r, t);
  (!i || ("get" in i ? !r.__esModule : i.writable || i.configurable)) && (i = { enumerable: !0, get: function() {
    return r[t];
  } }), Object.defineProperty(e, n, i);
} : function(e, r, t, n) {
  n === void 0 && (n = t), e[n] = r[t];
}), T1 = h && h.__setModuleDefault || (Object.create ? function(e, r) {
  Object.defineProperty(e, "default", { enumerable: !0, value: r });
} : function(e, r) {
  e.default = r;
}), P1 = h && h.__importStar || function(e) {
  if (e && e.__esModule)
    return e;
  var r = {};
  if (e != null)
    for (var t in e)
      t !== "default" && Object.prototype.hasOwnProperty.call(e, t) && S1(r, e, t);
  return T1(r, e), r;
};
Object.defineProperty(Ge, "__esModule", { value: !0 });
Ge.Stats = Ge.QueryStatistics = Ge.ProfiledPlan = Ge.Plan = Ge.Notification = Ge.ServerInfo = Ge.queryType = void 0;
var Eh = P1(Ke), I1 = function() {
  function e(r, t, n, i) {
    var o, a, u;
    this.query = { text: r, parameters: t }, this.queryType = n.type, this.counters = new yy((o = n.stats) !== null && o !== void 0 ? o : {}), this.updateStatistics = this.counters, this.plan = n.plan != null || n.profile != null ? new rf((a = n.plan) !== null && a !== void 0 ? a : n.profile) : !1, this.profile = n.profile != null ? new nf(n.profile) : !1, this.notifications = this._buildNotifications(n.notifications), this.server = new by(n.server, i), this.resultConsumedAfter = n.result_consumed_after, this.resultAvailableAfter = n.result_available_after, this.database = { name: (u = n.db) !== null && u !== void 0 ? u : null };
  }
  return e.prototype._buildNotifications = function(r) {
    return r == null ? [] : r.map(function(t) {
      return new my(t);
    });
  }, e.prototype.hasPlan = function() {
    return this.plan instanceof rf;
  }, e.prototype.hasProfile = function() {
    return this.profile instanceof nf;
  }, e;
}(), rf = function() {
  function e(r) {
    this.operatorType = r.operatorType, this.identifiers = r.identifiers, this.arguments = r.args, this.children = r.children != null ? r.children.map(function(t) {
      return new e(t);
    }) : [];
  }
  return e;
}();
Ge.Plan = rf;
var nf = function() {
  function e(r) {
    this.operatorType = r.operatorType, this.identifiers = r.identifiers, this.arguments = r.args, this.dbHits = mn("dbHits", r), this.rows = mn("rows", r), this.pageCacheMisses = mn("pageCacheMisses", r), this.pageCacheHits = mn("pageCacheHits", r), this.pageCacheHitRatio = mn("pageCacheHitRatio", r), this.time = mn("time", r), this.children = r.children != null ? r.children.map(function(t) {
      return new e(t);
    }) : [];
  }
  return e.prototype.hasPageCacheStats = function() {
    return this.pageCacheMisses > 0 || this.pageCacheHits > 0 || this.pageCacheHitRatio > 0;
  }, e;
}();
Ge.ProfiledPlan = nf;
var A1 = function() {
  function e() {
    this.nodesCreated = 0, this.nodesDeleted = 0, this.relationshipsCreated = 0, this.relationshipsDeleted = 0, this.propertiesSet = 0, this.labelsAdded = 0, this.labelsRemoved = 0, this.indexesAdded = 0, this.indexesRemoved = 0, this.constraintsAdded = 0, this.constraintsRemoved = 0;
  }
  return e;
}();
Ge.Stats = A1;
var yy = function() {
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
Ge.QueryStatistics = yy;
var my = function() {
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
Ge.Notification = my;
var by = function() {
  function e(r, t) {
    r != null && (this.address = r.address, this.agent = r.version), this.protocolVersion = t;
  }
  return e;
}();
Ge.ServerInfo = by;
function En(e) {
  return e instanceof Eh.default ? e.toInt() : typeof e == "bigint" ? (0, Eh.int)(e).toInt() : e;
}
function mn(e, r, t) {
  if (t === void 0 && (t = 0), r !== !1 && e in r) {
    var n = r[e];
    return En(n);
  } else
    return t;
}
var R1 = {
  READ_ONLY: "r",
  READ_WRITE: "rw",
  WRITE_ONLY: "w",
  SCHEMA_WRITE: "s"
};
Ge.queryType = R1;
Ge.default = I1;
var Qi = {}, Oe = {}, vr = {};
Object.defineProperty(vr, "__esModule", { value: !0 });
vr.FailedObserver = vr.CompletedObserver = void 0;
var C1 = function() {
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
vr.CompletedObserver = C1;
var $1 = function() {
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
vr.FailedObserver = $1;
function Ci(e, r, t) {
  r != null && r.bind(e)(t);
}
var wr = {}, j1 = h && h.__createBinding || (Object.create ? function(e, r, t, n) {
  n === void 0 && (n = t);
  var i = Object.getOwnPropertyDescriptor(r, t);
  (!i || ("get" in i ? !r.__esModule : i.writable || i.configurable)) && (i = { enumerable: !0, get: function() {
    return r[t];
  } }), Object.defineProperty(e, n, i);
} : function(e, r, t, n) {
  n === void 0 && (n = t), e[n] = r[t];
}), N1 = h && h.__setModuleDefault || (Object.create ? function(e, r) {
  Object.defineProperty(e, "default", { enumerable: !0, value: r });
} : function(e, r) {
  e.default = r;
}), M1 = h && h.__importStar || function(e) {
  if (e && e.__esModule)
    return e;
  var r = {};
  if (e != null)
    for (var t in e)
      t !== "default" && Object.prototype.hasOwnProperty.call(e, t) && j1(r, e, t);
  return N1(r, e), r;
}, k1 = h && h.__read || function(e, r) {
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
}, D1 = h && h.__spreadArray || function(e, r, t) {
  if (t || arguments.length === 2)
    for (var n = 0, i = r.length, o; n < i; n++)
      (o || !(n in r)) && (o || (o = Array.prototype.slice.call(r, 0, n)), o[n] = r[n]);
  return e.concat(o || Array.prototype.slice.call(r));
};
Object.defineProperty(wr, "__esModule", { value: !0 });
wr.Bookmarks = void 0;
var Sh = M1(ce), U1 = "bookmarks", gy = function() {
  function e(r) {
    this._values = x1(r);
  }
  return e.empty = function() {
    return L1;
  }, e.prototype.isEmpty = function() {
    return this._values.length === 0;
  }, e.prototype.values = function() {
    return this._values;
  }, e.prototype[Symbol.iterator] = function() {
    return this._values[Symbol.iterator]();
  }, e.prototype.asBeginTransactionParameters = function() {
    var r;
    return this.isEmpty() ? {} : (r = {}, r[U1] = this._values, r);
  }, e;
}();
wr.Bookmarks = gy;
var L1 = new gy(null);
function x1(e) {
  if (e == null || e === "")
    return [];
  if (Sh.isString(e))
    return [e];
  if (Array.isArray(e)) {
    for (var r = /* @__PURE__ */ new Set(), t = Oy(e), n = 0; n < t.length; n++) {
      var i = t[n];
      if (i != null) {
        if (!Sh.isString(i))
          throw new TypeError(
            "Bookmark value should be a string, given: '".concat(i, "'")
          );
        r.add(i);
      }
    }
    return D1([], k1(r), !1);
  }
  throw new TypeError(
    "Bookmarks should either be a string or a string array, given: '".concat(e, "'")
  );
}
function Oy(e) {
  return e.reduce(function(r, t) {
    return Array.isArray(t) ? r.concat(Oy(t)) : r.concat(t);
  }, []);
}
var se = {};
Object.defineProperty(se, "__esModule", { value: !0 });
se.BOLT_PROTOCOL_V5_0 = se.BOLT_PROTOCOL_V4_4 = se.BOLT_PROTOCOL_V4_3 = se.BOLT_PROTOCOL_V4_2 = se.BOLT_PROTOCOL_V4_1 = se.BOLT_PROTOCOL_V4_0 = se.BOLT_PROTOCOL_V3 = se.BOLT_PROTOCOL_V2 = se.BOLT_PROTOCOL_V1 = se.DEFAULT_POOL_MAX_SIZE = se.DEFAULT_POOL_ACQUISITION_TIMEOUT = se.DEFAULT_CONNECTION_TIMEOUT_MILLIS = se.ACCESS_MODE_WRITE = se.ACCESS_MODE_READ = se.FETCH_ALL = void 0;
var F1 = -1;
se.FETCH_ALL = F1;
var B1 = 60 * 1e3;
se.DEFAULT_POOL_ACQUISITION_TIMEOUT = B1;
var W1 = 100;
se.DEFAULT_POOL_MAX_SIZE = W1;
var V1 = 3e4;
se.DEFAULT_CONNECTION_TIMEOUT_MILLIS = V1;
var q1 = "READ";
se.ACCESS_MODE_READ = q1;
var H1 = "WRITE";
se.ACCESS_MODE_WRITE = H1;
var z1 = 1;
se.BOLT_PROTOCOL_V1 = z1;
var Y1 = 2;
se.BOLT_PROTOCOL_V2 = Y1;
var G1 = 3;
se.BOLT_PROTOCOL_V3 = G1;
var K1 = 4;
se.BOLT_PROTOCOL_V4_0 = K1;
var Z1 = 4.1;
se.BOLT_PROTOCOL_V4_1 = Z1;
var Q1 = 4.2;
se.BOLT_PROTOCOL_V4_2 = Q1;
var X1 = 4.3;
se.BOLT_PROTOCOL_V4_3 = X1;
var J1 = 4.4;
se.BOLT_PROTOCOL_V4_4 = J1;
var eS = 5;
se.BOLT_PROTOCOL_V5_0 = eS;
var Pt = {}, wy = h && h.__extends || function() {
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
var tS = Ee, rS = ce, nS = se, Th = wr, Wf = function() {
  function e(r) {
    var t = r === void 0 ? {} : r, n = t.mode, i = n === void 0 ? nS.ACCESS_MODE_WRITE : n, o = t.database, a = o === void 0 ? "" : o, u = t.bookmarks, c = t.connectionProvider, s = t.impersonatedUser, l = t.onDatabaseNameResolved, f = t.getConnectionAcquistionBookmarks;
    this._mode = i, this._database = a != null ? (0, rS.assertString)(a, "database") : "", this._bookmarks = u ?? Th.Bookmarks.empty(), this._connectionProvider = c, this._impersonatedUser = s, this._referenceCount = 0, this._connectionPromise = Promise.resolve(null), this._onDatabaseNameResolved = l, this._getConnectionAcquistionBookmarks = f ?? function() {
      return Promise.resolve(Th.Bookmarks.empty());
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
      return t != null ? t.isOpen() && (t.hasOngoingObservableRequests() || r === !0) ? t.resetAndFlush().catch(Ph).then(function() {
        return t._release().then(function() {
          return null;
        });
      }) : t._release().then(function() {
        return null;
      }) : Promise.resolve(null);
    }).catch(Ph), this._connectionPromise;
  }, e;
}();
Pt.ConnectionHolder = Wf;
var Ey = function(e) {
  wy(r, e);
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
}(Wf);
Pt.ReadOnlyConnectionHolder = Ey;
Pt.default = Ey;
var iS = function(e) {
  wy(r, e);
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
            return [4, Promise.reject((0, tS.newError)("This connection holder does not serve connections"))];
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
}(Wf), oS = new iS();
Pt.EMPTY_CONNECTION_HOLDER = oS;
function Ph(e) {
  return null;
}
var Vn = {}, aS = h && h.__createBinding || (Object.create ? function(e, r, t, n) {
  n === void 0 && (n = t);
  var i = Object.getOwnPropertyDescriptor(r, t);
  (!i || ("get" in i ? !r.__esModule : i.writable || i.configurable)) && (i = { enumerable: !0, get: function() {
    return r[t];
  } }), Object.defineProperty(e, n, i);
} : function(e, r, t, n) {
  n === void 0 && (n = t), e[n] = r[t];
}), uS = h && h.__setModuleDefault || (Object.create ? function(e, r) {
  Object.defineProperty(e, "default", { enumerable: !0, value: r });
} : function(e, r) {
  e.default = r;
}), sS = h && h.__importStar || function(e) {
  if (e && e.__esModule)
    return e;
  var r = {};
  if (e != null)
    for (var t in e)
      t !== "default" && Object.prototype.hasOwnProperty.call(e, t) && aS(r, e, t);
  return uS(r, e), r;
};
Object.defineProperty(Vn, "__esModule", { value: !0 });
Vn.TxConfig = void 0;
var xi = sS(ce), cS = Ee, lS = Ke, Sy = function() {
  function e(r) {
    vS(r), this.timeout = dS(r), this.metadata = hS(r);
  }
  return e.empty = function() {
    return fS;
  }, e.prototype.isEmpty = function() {
    return Object.values(this).every(function(r) {
      return r == null;
    });
  }, e;
}();
Vn.TxConfig = Sy;
var fS = new Sy({});
function dS(e) {
  if (xi.isObject(e) && e.timeout != null) {
    xi.assertNumberOrInteger(e.timeout, "Transaction timeout");
    var r = (0, lS.int)(e.timeout);
    if (r.isNegative())
      throw (0, cS.newError)("Transaction timeout should not be negative");
    return r;
  }
  return null;
}
function hS(e) {
  if (xi.isObject(e) && e.metadata != null) {
    var r = e.metadata;
    if (xi.assertObject(r, "config.metadata"), Object.keys(r).length !== 0)
      return r;
  }
  return null;
}
function vS(e) {
  e != null && xi.assertObject(e, "Transaction config");
}
var Xi = {}, pS = h && h.__awaiter || function(e, r, t, n) {
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
}, _S = h && h.__generator || function(e, r) {
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
Object.defineProperty(Xi, "__esModule", { value: !0 });
Xi.TransactionExecutor = void 0;
var _i = Ee, yS = 30 * 1e3, mS = 1e3, bS = 2, gS = 0.2, OS = function() {
  function e(r, t, n, i) {
    this._maxRetryTimeMs = na(r, yS), this._initialRetryDelayMs = na(t, mS), this._multiplier = na(n, bS), this._jitterFactor = na(i, gS), this._inFlightTimeoutIds = [], this._verifyAfterConstruction();
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
    return pS(this, void 0, void 0, function() {
      var a, u, c, s, l, f = this;
      return _S(this, function(y) {
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
Xi.TransactionExecutor = OS;
function na(e, r) {
  return e ?? r;
}
var Ji = {}, wS = h && h.__extends || function() {
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
Object.defineProperty(Ji, "__esModule", { value: !0 });
Ji.Logger = void 0;
var Ty = Ee, of = "error", af = "warn", Fi = "info", uf = "debug", ES = Fi, ka = (bn = {}, bn[of] = 0, bn[af] = 1, bn[Fi] = 2, bn[uf] = 3, bn), Py = function() {
  function e(r, t) {
    this._level = r, this._loggerFunction = t;
  }
  return e.create = function(r) {
    if ((r == null ? void 0 : r.logging) != null) {
      var t = r.logging, n = PS(t), i = IS(t);
      return new e(n, i);
    }
    return this.noOp();
  }, e.noOp = function() {
    return TS;
  }, e.prototype.isErrorEnabled = function() {
    return ia(this._level, of);
  }, e.prototype.error = function(r) {
    this.isErrorEnabled() && this._loggerFunction(of, r);
  }, e.prototype.isWarnEnabled = function() {
    return ia(this._level, af);
  }, e.prototype.warn = function(r) {
    this.isWarnEnabled() && this._loggerFunction(af, r);
  }, e.prototype.isInfoEnabled = function() {
    return ia(this._level, Fi);
  }, e.prototype.info = function(r) {
    this.isInfoEnabled() && this._loggerFunction(Fi, r);
  }, e.prototype.isDebugEnabled = function() {
    return ia(this._level, uf);
  }, e.prototype.debug = function(r) {
    this.isDebugEnabled() && this._loggerFunction(uf, r);
  }, e;
}();
Ji.Logger = Py;
var SS = function(e) {
  wS(r, e);
  function r() {
    return e.call(this, Fi, function(t, n) {
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
}(Py), TS = new SS();
function ia(e, r) {
  return ka[e] >= ka[r];
}
function PS(e) {
  if ((e == null ? void 0 : e.level) != null) {
    var r = e.level, t = ka[r];
    if (t == null && t !== 0)
      throw (0, Ty.newError)("Illegal logging level: ".concat(r, ". Supported levels are: ").concat(Object.keys(ka).toString()));
    return r;
  }
  return ES;
}
function IS(e) {
  var r, t;
  if ((e == null ? void 0 : e.logger) != null) {
    var n = e.logger;
    if (n != null && typeof n == "function")
      return n;
  }
  throw (0, Ty.newError)("Illegal logger function: ".concat((t = (r = e == null ? void 0 : e.logger) === null || r === void 0 ? void 0 : r.toString()) !== null && t !== void 0 ? t : "undefined"));
}
var dt = {}, Da = h && h.__assign || function() {
  return Da = Object.assign || function(e) {
    for (var r, t = 1, n = arguments.length; t < n; t++) {
      r = arguments[t];
      for (var i in r)
        Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
    }
    return e;
  }, Da.apply(this, arguments);
}, Iy = h && h.__read || function(e, r) {
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
var AS = ce, RS = 7687, CS = 7474, $S = 7473, Ay = function() {
  function e(r, t, n, i, o) {
    this.scheme = r, this.host = t, this.port = n, this.hostAndPort = i, this.query = o;
  }
  return e;
}();
dt.Url = Ay;
function jS(e) {
  var r;
  (0, AS.assertString)(e, "URL");
  var t = MS(e), n = VS(t.url), i = t.schemeMissing ? null : kS(n.scheme), o = DS(n.host), a = FS(o), u = US(n.port, i), c = "".concat(a, ":").concat(u), s = LS(
    (r = n.query) !== null && r !== void 0 ? r : NS(n.resourceName),
    e
  );
  return new Ay(i, o, u, c, s);
}
dt.parseDatabaseUrl = jS;
function NS(e) {
  if (typeof e != "string")
    return null;
  var r = Iy(e.split("?"), 2), t = r[1];
  return t;
}
function MS(e) {
  return e = e.trim(), e.includes("://") ? { schemeMissing: !1, url: e } : { schemeMissing: !0, url: "none://".concat(e) };
}
function kS(e) {
  return e != null ? (e = e.trim(), e.charAt(e.length - 1) === ":" && (e = e.substring(0, e.length - 1)), e) : null;
}
function DS(e, r) {
  if (e == null)
    throw new Error("Unable to extract host from null or undefined URL");
  return e.trim();
}
function US(e, r) {
  var t = typeof e == "string" ? parseInt(e, 10) : e;
  return t != null && !isNaN(t) ? t : Cy(r);
}
function LS(e, r) {
  var t = e != null ? xS(e) : null, n = {};
  return t != null && t.split("&").forEach(function(i) {
    var o = i.split("=");
    if (o.length !== 2)
      throw new Error("Invalid parameters: '".concat(o.toString(), "' in URL '").concat(r, "'."));
    var a = Ih(o[0], "key", r), u = Ih(o[1], "value", r);
    if (n[a] !== void 0)
      throw new Error("Duplicated query parameters with key '".concat(a, "' in URL '").concat(r, "'"));
    n[a] = u;
  }), n;
}
function xS(e) {
  return e = (e ?? "").trim(), (e == null ? void 0 : e.charAt(0)) === "?" && (e = e.substring(1, e.length)), e;
}
function Ih(e, r, t) {
  if (e = (e ?? "").trim(), e === "")
    throw new Error("Illegal empty ".concat(r, " in URL query '").concat(t, "'"));
  return e;
}
function Ry(e) {
  var r = e.charAt(0) === "[", t = e.charAt(e.length - 1) === "]";
  if (!r && !t)
    return "[".concat(e, "]");
  if (r && t)
    return e;
  throw new Error("Illegal IPv6 address ".concat(e));
}
function FS(e) {
  if (e === "" || e == null)
    throw new Error("Illegal host ".concat(e));
  var r = e.includes(":");
  return r ? Ry(e) : e;
}
function BS(e, r) {
  return "".concat(e, ":").concat(r);
}
dt.formatIPv4Address = BS;
function WS(e, r) {
  var t = Ry(e);
  return "".concat(t, ":").concat(r);
}
dt.formatIPv6Address = WS;
function Cy(e) {
  return e === "http" ? CS : e === "https" ? $S : RS;
}
dt.defaultPortForScheme = Cy;
function VS(e) {
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
    var l = Iy(n(u, "[", "]"), 2), f = l[0], y = l[1];
    return f !== "" ? (c.host = f, s = r(y, ":")) : (s = r(u, ":"), c.host = s[0]), s[1] === ":" && (c.port = s[2]), c;
  }
  var o = {}, a;
  return a = r(e, ":"), a[1] === ":" && (o.scheme = decodeURIComponent(a[0]), e = a[2]), a = r(e, "#"), a[1] === "#" && (o.fragment = decodeURIComponent(a[2]), e = a[0]), a = r(e, "?"), a[1] === "?" && (o.query = a[2], e = a[0]), e.startsWith("//") ? (a = r(e.substr(2), "/"), o = Da(Da({}, o), i(a[0])), o.path = a[1] + a[2]) : o.path = e, o;
}
var eo = {}, qS = h && h.__createBinding || (Object.create ? function(e, r, t, n) {
  n === void 0 && (n = t);
  var i = Object.getOwnPropertyDescriptor(r, t);
  (!i || ("get" in i ? !r.__esModule : i.writable || i.configurable)) && (i = { enumerable: !0, get: function() {
    return r[t];
  } }), Object.defineProperty(e, n, i);
} : function(e, r, t, n) {
  n === void 0 && (n = t), e[n] = r[t];
}), HS = h && h.__setModuleDefault || (Object.create ? function(e, r) {
  Object.defineProperty(e, "default", { enumerable: !0, value: r });
} : function(e, r) {
  e.default = r;
}), zS = h && h.__importStar || function(e) {
  if (e && e.__esModule)
    return e;
  var r = {};
  if (e != null)
    for (var t in e)
      t !== "default" && Object.prototype.hasOwnProperty.call(e, t) && qS(r, e, t);
  return HS(r, e), r;
};
Object.defineProperty(eo, "__esModule", { value: !0 });
eo.ServerAddress = void 0;
var dl = ce, YS = zS(dt), GS = function() {
  function e(r, t, n, i) {
    this._host = (0, dl.assertString)(r, "host"), this._resolved = t != null ? (0, dl.assertString)(t, "resolved") : null, this._port = (0, dl.assertNumber)(n, "port"), this._hostPort = i, this._stringValue = t != null ? "".concat(i, "(").concat(t, ")") : "".concat(i);
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
    var t = YS.parseDatabaseUrl(r);
    return new e(t.host, null, t.port, t.hostAndPort);
  }, e;
}();
eo.ServerAddress = GS;
var $n = {}, Vf = {};
Object.defineProperty(Vf, "__esModule", { value: !0 });
var KS = function() {
  function e() {
  }
  return e.prototype.resolve = function() {
    throw new Error("Abstract function");
  }, e.prototype._resolveToItself = function(r) {
    return Promise.resolve([r]);
  }, e;
}();
Vf.default = KS;
var iu = {};
Object.defineProperty(iu, "__esModule", { value: !0 });
var ZS = eo;
function QS(e) {
  return Promise.resolve([e]);
}
var XS = function() {
  function e(r) {
    this._resolverFunction = r ?? QS;
  }
  return e.prototype.resolve = function(r) {
    var t = this;
    return new Promise(function(n) {
      return n(t._resolverFunction(r.asHostPort()));
    }).then(function(n) {
      if (!Array.isArray(n))
        throw new TypeError("Configured resolver function should either return an array of addresses or a Promise resolved with an array of addresses." + "Each address is '<host>:<port>'. Got: ".concat(n));
      return n.map(function(i) {
        return ZS.ServerAddress.fromUrl(i);
      });
    });
  }, e;
}();
iu.default = XS;
var $y = h && h.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty($n, "__esModule", { value: !0 });
$n.ConfiguredCustomResolver = $n.BaseHostNameResolver = void 0;
var JS = $y(Vf);
$n.BaseHostNameResolver = JS.default;
var eT = $y(iu);
$n.ConfiguredCustomResolver = eT.default;
var tT = h && h.__createBinding || (Object.create ? function(e, r, t, n) {
  n === void 0 && (n = t);
  var i = Object.getOwnPropertyDescriptor(r, t);
  (!i || ("get" in i ? !r.__esModule : i.writable || i.configurable)) && (i = { enumerable: !0, get: function() {
    return r[t];
  } }), Object.defineProperty(e, n, i);
} : function(e, r, t, n) {
  n === void 0 && (n = t), e[n] = r[t];
}), rT = h && h.__setModuleDefault || (Object.create ? function(e, r) {
  Object.defineProperty(e, "default", { enumerable: !0, value: r });
} : function(e, r) {
  e.default = r;
}), ht = h && h.__importStar || function(e) {
  if (e && e.__esModule)
    return e;
  var r = {};
  if (e != null)
    for (var t in e)
      t !== "default" && Object.prototype.hasOwnProperty.call(e, t) && tT(r, e, t);
  return rT(r, e), r;
};
Object.defineProperty(Oe, "__esModule", { value: !0 });
Oe.objectUtil = Oe.resolver = Oe.serverAddress = Oe.urlUtil = Oe.logger = Oe.transactionExecutor = Oe.txConfig = Oe.connectionHolder = Oe.constants = Oe.bookmarks = Oe.observer = Oe.temporalUtil = Oe.util = void 0;
var nT = ht(ce);
Oe.util = nT;
var iT = ht(xf);
Oe.temporalUtil = iT;
var oT = ht(vr);
Oe.observer = oT;
var aT = ht(wr);
Oe.bookmarks = aT;
var uT = ht(se);
Oe.constants = uT;
var sT = ht(Pt);
Oe.connectionHolder = sT;
var cT = ht(Vn);
Oe.txConfig = cT;
var lT = ht(Xi);
Oe.transactionExecutor = lT;
var fT = ht(Ji);
Oe.logger = fT;
var dT = ht(dt);
Oe.urlUtil = dT;
var hT = ht(eo);
Oe.serverAddress = hT;
var vT = ht($n);
Oe.resolver = vT;
var pT = ht(er);
Oe.objectUtil = pT;
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
}, _T = h && h.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(Qi, "__esModule", { value: !0 });
var yT = _T(Ge), jy = Oe, yi = Ee, mT = jy.connectionHolder.EMPTY_CONNECTION_HOLDER, bT = function(e) {
  console.log("Uncaught error when processing result: " + e);
}, gT = function(e) {
}, OT = function(e) {
}, wT = function() {
  function e(r, t, n, i, o) {
    o === void 0 && (o = { high: Number.MAX_VALUE, low: Number.MAX_VALUE }), this._stack = ET(), this._streamObserverPromise = r, this._p = null, this._query = t, this._parameters = n ?? {}, this._connectionHolder = i ?? mT, this._keys = null, this._summary = null, this._error = null, this._watermarks = o;
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
    var t = this, n, i, o, a = (n = r.onCompleted) !== null && n !== void 0 ? n : gT, u = (i = r.onError) !== null && i !== void 0 ? i : bT, c = (o = r.onKeys) !== null && o !== void 0 ? o : OT, s = function(y) {
      t._releaseConnectionAndGetSummary(y).then(function(b) {
        return t._summary !== null ? a.call(r, t._summary) : (t._summary = b, a.call(r, b));
      }).catch(u);
    }, l = function(y) {
      t._connectionHolder.releaseConnection().then(function() {
        ST(y, t._stack), t._error = y, u.call(r, y);
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
    var t = jy.util.validateQueryAndParameters(this._query, this._parameters, {
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
      return new yT.default(n, i, r, a);
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
function ET() {
  var e = new Error("");
  return e.stack != null ? e.stack.replace(/^Error(\n\r)*/, "") : null;
}
function ST(e, r) {
  r != null && (e.stack = e.toString() + `
` + r);
}
Qi.default = wT;
var ou = {};
Object.defineProperty(ou, "__esModule", { value: !0 });
var TT = function() {
  function e(r, t, n) {
    this.keys = r, this.records = t, this.summary = n;
  }
  return e;
}();
ou.default = TT;
var qf = {};
Object.defineProperty(qf, "__esModule", { value: !0 });
var PT = function() {
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
qf.default = PT;
var Hf = {};
Object.defineProperty(Hf, "__esModule", { value: !0 });
var IT = function() {
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
Hf.default = IT;
var au = {}, Ah = h && h.__awaiter || function(e, r, t, n) {
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
}, Rh = h && h.__generator || function(e, r) {
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
}, AT = h && h.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(au, "__esModule", { value: !0 });
var RT = ce, Ni = Pt, Aa = wr, CT = Vn, wt = vr, St = Ee, Ny = AT(Qi), $T = function() {
  function e(r) {
    var t = r.connectionHolder, n = r.onClose, i = r.onBookmarks, o = r.onConnection, a = r.reactive, u = r.fetchSize, c = r.impersonatedUser, s = r.highRecordWatermark, l = r.lowRecordWatermark, f = this;
    this._connectionHolder = t, this._reactive = a, this._state = Tt.ACTIVE, this._onClose = n, this._onBookmarks = i, this._onConnection = o, this._onError = this._onErrorCallback.bind(this), this._fetchSize = u, this._onComplete = this._onCompleteCallback.bind(this), this._results = [], this._impersonatedUser = c, this._lowRecordWatermak = l, this._highRecordWatermark = s, this._bookmarks = Aa.Bookmarks.empty(), this._acceptActive = function() {
    }, this._activePromise = new Promise(function(y, b) {
      f._acceptActive = y;
    });
  }
  return e.prototype._begin = function(r, t, n) {
    var i = this;
    this._connectionHolder.getConnection().then(function(o) {
      return Ah(i, void 0, void 0, function() {
        var a, u = this;
        return Rh(this, function(c) {
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
    var n = (0, RT.validateQueryAndParameters)(r, t), i = n.validatedQuery, o = n.params, a = this._state.run(i, o, {
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
    return Ah(this, void 0, void 0, function() {
      return Rh(this, function(r) {
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
    this._onBookmarks(new Aa.Bookmarks(r == null ? void 0 : r.bookmark), t ?? Aa.Bookmarks.empty(), r == null ? void 0 : r.db);
  }, e;
}(), Tt = {
  ACTIVE: {
    commit: function(e) {
      var r = e.connectionHolder, t = e.onError, n = e.onComplete, i = e.onConnection, o = e.pendingResults, a = e.preparationJob;
      return {
        result: Ch(!0, r, t, n, i, o, a),
        state: Tt.SUCCEEDED
      };
    },
    rollback: function(e) {
      var r = e.connectionHolder, t = e.onError, n = e.onComplete, i = e.onConnection, o = e.pendingResults, a = e.preparationJob;
      return {
        result: Ch(!1, r, t, n, i, o, a),
        state: Tt.ROLLED_BACK
      };
    },
    run: function(e, r, t) {
      var n = t.connectionHolder, i = t.onError, o = t.onComplete, a = t.onConnection, u = t.reactive, c = t.fetchSize, s = t.highRecordWatermark, l = t.lowRecordWatermark, f = t.preparationJob, y = f ?? Promise.resolve(), b = n.getConnection().then(function(g) {
        return y.then(function() {
          return g;
        });
      }).then(function(g) {
        if (a(), g != null)
          return g.protocol().run(e, r, {
            bookmarks: Aa.Bookmarks.empty(),
            txConfig: CT.TxConfig.empty(),
            beforeError: i,
            afterComplete: o,
            reactive: u,
            fetchSize: c,
            highRecordWatermark: s,
            lowRecordWatermark: l
          });
        throw (0, St.newError)("No connection available");
      }).catch(function(g) {
        return new wt.FailedObserver({ error: g, onError: i });
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
function Ch(e, r, t, n, i, o, a) {
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
  return new Ny.default(c, e ? "COMMIT" : "ROLLBACK", {}, r, {
    high: Number.MAX_VALUE,
    low: Number.MAX_VALUE
  });
}
function kt(e, r, t, n, i, o) {
  return n === void 0 && (n = Ni.EMPTY_CONNECTION_HOLDER), new Ny.default(Promise.resolve(e), r, t, new Ni.ReadOnlyConnectionHolder(n ?? Ni.EMPTY_CONNECTION_HOLDER), {
    low: o,
    high: i
  });
}
au.default = $T;
var uu = {};
Object.defineProperty(uu, "__esModule", { value: !0 });
var jT = function() {
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
uu.default = jT;
var su = {}, NT = h && h.__extends || function() {
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
}(), Ua = h && h.__assign || function() {
  return Ua = Object.assign || function(e) {
    for (var r, t = 1, n = arguments.length; t < n; t++) {
      r = arguments[t];
      for (var i in r)
        Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
    }
    return e;
  }, Ua.apply(this, arguments);
}, MT = h && h.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
}, My;
Object.defineProperty(su, "__esModule", { value: !0 });
var kT = MT(au), DT = function(e) {
  NT(r, e);
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
    return y[My] = "TransactionPromise", y;
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
    return Ua(Ua({}, this), { run: e.prototype.run.bind(this), commit: e.prototype.commit.bind(this), rollback: e.prototype.rollback.bind(this), close: e.prototype.close.bind(this), isOpen: e.prototype.isOpen.bind(this), _begin: this._begin.bind(this) });
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
}(kT.default);
My = Symbol.toStringTag;
su.default = DT;
var cu = {}, mi = h && h.__awaiter || function(e, r, t, n) {
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
}, oa = h && h.__read || function(e, r) {
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
}, aa = h && h.__spreadArray || function(e, r, t) {
  if (t || arguments.length === 2)
    for (var n = 0, i = r.length, o; n < i; n++)
      (o || !(n in r)) && (o || (o = Array.prototype.slice.call(r, 0, n)), o[n] = r[n]);
  return e.concat(o || Array.prototype.slice.call(r));
}, zf = h && h.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(cu, "__esModule", { value: !0 });
var hl = vr, UT = ce, vt = se, Gt = Ee, LT = zf(Qi), $h = Pt, xT = Xi, gi = wr, dr = Vn, FT = zf(su), BT = zf(uu), WT = function() {
  function e(r) {
    var t = r.mode, n = r.connectionProvider, i = r.bookmarks, o = r.database, a = r.config, u = r.reactive, c = r.fetchSize, s = r.impersonatedUser, l = r.bookmarkManager;
    this._mode = t, this._database = o, this._reactive = u, this._fetchSize = c, this._onDatabaseNameResolved = this._onDatabaseNameResolved.bind(this), this._getConnectionAcquistionBookmarks = this._getConnectionAcquistionBookmarks.bind(this), this._readConnectionHolder = new $h.ConnectionHolder({
      mode: vt.ACCESS_MODE_READ,
      database: o,
      bookmarks: i,
      connectionProvider: n,
      impersonatedUser: s,
      onDatabaseNameResolved: this._onDatabaseNameResolved,
      getConnectionAcquistionBookmarks: this._getConnectionAcquistionBookmarks
    }), this._writeConnectionHolder = new $h.ConnectionHolder({
      mode: vt.ACCESS_MODE_WRITE,
      database: o,
      bookmarks: i,
      connectionProvider: n,
      impersonatedUser: s,
      onDatabaseNameResolved: this._onDatabaseNameResolved,
      getConnectionAcquistionBookmarks: this._getConnectionAcquistionBookmarks
    }), this._open = !0, this._hasTx = !1, this._impersonatedUser = s, this._lastBookmarks = i ?? gi.Bookmarks.empty(), this._configuredBookmarks = this._lastBookmarks, this._transactionExecutor = VT(a), this._databaseNameResolved = this._database !== "";
    var f = this._calculateWatermaks();
    this._lowRecordWatermark = f.low, this._highRecordWatermark = f.high, this._results = [], this._bookmarkManager = l;
  }
  return e.prototype.run = function(r, t, n) {
    var i = this, o = (0, UT.validateQueryAndParameters)(r, t), a = o.validatedQuery, u = o.params, c = n != null ? new dr.TxConfig(n) : dr.TxConfig.empty(), s = this._run(a, u, function(l) {
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
                afterComplete: function(g) {
                  return y._onCompleteCallback(g, f);
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
      return Promise.resolve(new hl.FailedObserver({ error: u }));
    }) : o = Promise.resolve(new hl.FailedObserver({
      error: (0, Gt.newError)("Queries cannot be run directly on a session with an open transaction; either run from within the transaction or use a different session.")
    })) : o = Promise.resolve(new hl.FailedObserver({
      error: (0, Gt.newError)("Cannot run query in a closed session.")
    }));
    var a = { high: this._highRecordWatermark, low: this._lowRecordWatermark };
    return new LT.default(o, r, t, i, a);
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
    var a = new FT.default({
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
            return t = n.sent(), t === void 0 ? [2, this._lastBookmarks] : [2, new gi.Bookmarks(aa(aa([], oa(t), !1), oa(this._configuredBookmarks), !1))];
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
    }, n, BT.default.fromTransaction);
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
            return t = n.sent(), t === void 0 ? [2, this._lastBookmarks] : [2, new gi.Bookmarks(aa(aa([], oa(this._configuredBookmarks), !1), oa(t), !1))];
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
function VT(e) {
  var r, t = (r = e == null ? void 0 : e.maxTransactionRetryTime) !== null && r !== void 0 ? r : null;
  return new xT.TransactionExecutor(t);
}
cu.default = WT;
var rt = {}, qn = {}, La = h && h.__awaiter || function(e, r, t, n) {
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
}, xa = h && h.__generator || function(e, r) {
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
}, vl = h && h.__values || function(e) {
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
}, jh = h && h.__read || function(e, r) {
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
}, Nh = h && h.__spreadArray || function(e, r, t) {
  if (t || arguments.length === 2)
    for (var n = 0, i = r.length, o; n < i; n++)
      (o || !(n in r)) && (o || (o = Array.prototype.slice.call(r, 0, n)), o[n] = r[n]);
  return e.concat(o || Array.prototype.slice.call(r));
};
Object.defineProperty(qn, "__esModule", { value: !0 });
qn.bookmarkManager = void 0;
var qT = function() {
  function e() {
    throw new Error("Not implemented");
  }
  return e.prototype.updateBookmarks = function(r, t) {
    return La(this, void 0, void 0, function() {
      return xa(this, function(n) {
        throw new Error("Not implemented");
      });
    });
  }, e.prototype.getBookmarks = function() {
    return La(this, void 0, void 0, function() {
      return xa(this, function(r) {
        throw new Error("Not implemented");
      });
    });
  }, e;
}();
qn.default = qT;
function HT(e) {
  e === void 0 && (e = {});
  var r = new Set(e.initialBookmarks);
  return new zT(r, e.bookmarksSupplier, e.bookmarksConsumer);
}
qn.bookmarkManager = HT;
var zT = function() {
  function e(r, t, n) {
    this._bookmarks = r, this._bookmarksSupplier = t, this._bookmarksConsumer = n;
  }
  return e.prototype.updateBookmarks = function(r, t) {
    return La(this, void 0, void 0, function() {
      var n, i, o, c, a, u, c, s, l, f, y;
      return xa(this, function(b) {
        switch (b.label) {
          case 0:
            n = this._bookmarks;
            try {
              for (i = vl(r), o = i.next(); !o.done; o = i.next())
                c = o.value, n.delete(c);
            } catch (g) {
              s = { error: g };
            } finally {
              try {
                o && !o.done && (l = i.return) && l.call(i);
              } finally {
                if (s)
                  throw s.error;
              }
            }
            try {
              for (a = vl(t), u = a.next(); !u.done; u = a.next())
                c = u.value, n.add(c);
            } catch (g) {
              f = { error: g };
            } finally {
              try {
                u && !u.done && (y = a.return) && y.call(a);
              } finally {
                if (f)
                  throw f.error;
              }
            }
            return typeof this._bookmarksConsumer != "function" ? [3, 2] : [4, this._bookmarksConsumer(Nh([], jh(n), !1))];
          case 1:
            b.sent(), b.label = 2;
          case 2:
            return [2];
        }
      });
    });
  }, e.prototype.getBookmarks = function() {
    var r;
    return La(this, void 0, void 0, function() {
      var t, n, i, o, a, u, c;
      return xa(this, function(s) {
        switch (s.label) {
          case 0:
            return t = new Set(this._bookmarks), typeof this._bookmarksSupplier != "function" ? [3, 2] : [4, this._bookmarksSupplier()];
          case 1:
            n = (r = s.sent()) !== null && r !== void 0 ? r : [];
            try {
              for (i = vl(n), o = i.next(); !o.done; o = i.next())
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
            return [2, Nh([], jh(t), !1)];
        }
      });
    });
  }, e;
}(), lu = {}, ky = h && h.__awaiter || function(e, r, t, n) {
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
}, Dy = h && h.__generator || function(e, r) {
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
}, YT = h && h.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(lu, "__esModule", { value: !0 });
var GT = YT(ou), KT = Ee;
function ZT(e) {
  return ky(this, void 0, void 0, function() {
    var r, t, n, i;
    return Dy(this, function(o) {
      switch (o.label) {
        case 0:
          return [4, e];
        case 1:
          return r = o.sent(), t = r.summary, n = r.records, [4, e.keys()];
        case 2:
          return i = o.sent(), [2, new GT.default(i, n, t)];
      }
    });
  });
}
var QT = function() {
  function e() {
  }
  return e.prototype.eagerResultTransformer = function() {
    return ZT;
  }, e.prototype.mappedResultTransformer = function(r) {
    var t = this;
    if (r == null || r.collect == null && r.map == null)
      throw (0, KT.newError)("Requires a map or/and a collect functions.");
    return function(n) {
      return ky(t, void 0, void 0, function() {
        return Dy(this, function(i) {
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
}(), Uy = new QT();
Object.freeze(Uy);
lu.default = Uy;
var Yf = {}, Mh = h && h.__awaiter || function(e, r, t, n) {
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
}, kh = h && h.__generator || function(e, r) {
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
Object.defineProperty(Yf, "__esModule", { value: !0 });
var XT = function() {
  function e(r) {
    this._createSession = r;
  }
  return e.prototype.execute = function(r, t, n) {
    return Mh(this, void 0, void 0, function() {
      var i, o, a = this;
      return kh(this, function(u) {
        switch (u.label) {
          case 0:
            i = this._createSession({
              database: r.database,
              bookmarkManager: r.bookmarkManager,
              impersonatedUser: r.impersonatedUser
            }), u.label = 1;
          case 1:
            return u.trys.push([1, , 3, 5]), o = r.routing === "READERS" ? i.executeRead.bind(i) : i.executeWrite.bind(i), [4, o(function(c) {
              return Mh(a, void 0, void 0, function() {
                var s;
                return kh(this, function(l) {
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
Yf.default = XT;
var JT = h && h.__awaiter || function(e, r, t, n) {
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
}, eP = h && h.__generator || function(e, r) {
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
}, fu = h && h.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(rt, "__esModule", { value: !0 });
rt.QueryConfig = rt.SessionConfig = rt.routing = rt.WRITE = rt.READ = rt.Driver = void 0;
var Dh = wr, tP = fu(iu), qr = se, rP = Ji, Uh = fu(cu), nP = ce, iP = qn, oP = fu(lu), aP = fu(Yf), uP = Ee, sP = 60 * 60 * 1e3, cP = 1e3, sf = qr.ACCESS_MODE_READ;
rt.READ = sf;
var Gf = qr.ACCESS_MODE_WRITE;
rt.WRITE = Gf;
var lP = 0, fP = function() {
  function e() {
    this.defaultAccessMode = Gf, this.bookmarks = [], this.database = "", this.impersonatedUser = void 0, this.fetchSize = void 0, this.bookmarkManager = void 0;
  }
  return e;
}();
rt.SessionConfig = fP;
var dP = "WRITERS", hP = "READERS", Sn = {
  WRITERS: dP,
  READERS: hP
};
rt.routing = Sn;
Object.freeze(Sn);
var vP = function() {
  function e() {
    this.routing = Sn.WRITERS, this.resultTransformer = void 0, this.database = "", this.impersonatedUser = void 0, this.bookmarkManager = void 0;
  }
  return e;
}();
rt.QueryConfig = vP;
var Ly = function() {
  function e(r, t, n, i, o) {
    t === void 0 && (t = {}), i === void 0 && (i = function(u) {
      return new Uh.default(u);
    }), o === void 0 && (o = function(u) {
      return new aP.default(u);
    }), _P(t);
    var a = rP.Logger.create(t);
    pP(t, a), this._id = lP++, this._meta = r, this._config = t, this._log = a, this._createConnectionProvider = n, this._createSession = i, this._queryBookmarkManager = (0, iP.bookmarkManager)(), this._queryExecutor = o(this.session.bind(this)), this._connectionProvider = null, this._afterConstruction();
  }
  return Object.defineProperty(e.prototype, "queryBookmarkManager", {
    get: function() {
      return this._queryBookmarkManager;
    },
    enumerable: !1,
    configurable: !0
  }), e.prototype.executeQuery = function(r, t, n) {
    var i, o, a;
    return n === void 0 && (n = {}), JT(this, void 0, void 0, function() {
      var u, c, s;
      return eP(this, function(l) {
        switch (l.label) {
          case 0:
            if (u = n.bookmarkManager === null ? void 0 : (i = n.bookmarkManager) !== null && i !== void 0 ? i : this.queryBookmarkManager, c = (o = n.resultTransformer) !== null && o !== void 0 ? o : oP.default.eagerResultTransformer(), s = (a = n.routing) !== null && a !== void 0 ? a : Sn.WRITERS, s !== Sn.READERS && s !== Sn.WRITERS)
              throw (0, uP.newError)('Illegal query routing config: "'.concat(s, '"'));
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
    return o.verifyConnectivityAndGetServerInfo({ database: i, accessMode: sf });
  }, e.prototype.getServerInfo = function(r) {
    var t = r === void 0 ? {} : r, n = t.database, i = n === void 0 ? "" : n, o = this._getOrCreateConnectionProvider();
    return o.verifyConnectivityAndGetServerInfo({ database: i, accessMode: sf });
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
    return this._config.encrypted === nP.ENCRYPTION_ON || this._config.encrypted === !0;
  }, e.prototype._getTrust = function() {
    return this._config.trust;
  }, e.prototype.session = function(r) {
    var t = r === void 0 ? {} : r, n = t.defaultAccessMode, i = n === void 0 ? Gf : n, o = t.bookmarks, a = t.database, u = a === void 0 ? "" : a, c = t.impersonatedUser, s = t.fetchSize, l = t.bookmarkManager;
    return this._newSession({
      defaultAccessMode: i,
      bookmarkOrBookmarks: o,
      database: u,
      reactive: !1,
      impersonatedUser: c,
      fetchSize: xy(s, this._config.fetchSize),
      bookmarkManager: l
    });
  }, e.prototype.close = function() {
    return this._log.info("Driver ".concat(this._id, " closing")), this._connectionProvider != null ? this._connectionProvider.close() : Promise.resolve();
  }, e.prototype._afterConstruction = function() {
    this._log.info("".concat(this._meta.typename, " driver ").concat(this._id, " created for server address ").concat(this._meta.address.toString()));
  }, e.prototype._newSession = function(r) {
    var t = r.defaultAccessMode, n = r.bookmarkOrBookmarks, i = r.database, o = r.reactive, a = r.impersonatedUser, u = r.fetchSize, c = r.bookmarkManager, s = Uh.default._validateSessionMode(t), l = this._getOrCreateConnectionProvider(), f = n != null ? new Dh.Bookmarks(n) : Dh.Bookmarks.empty();
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
    return this._connectionProvider == null && (this._connectionProvider = this._createConnectionProvider(this._id, this._config, this._log, mP(this._config))), this._connectionProvider;
  }, e;
}();
rt.Driver = Ly;
function pP(e, r) {
  var t = e.resolver;
  if (t != null && typeof t != "function")
    throw new TypeError("Configured resolver should be a function. Got: ".concat(typeof t));
  return e.connectionAcquisitionTimeout < e.connectionTimeout && r.warn('Configuration for "connectionAcquisitionTimeout" should be greater than or equal to "connectionTimeout". Otherwise, the connection acquisition timeout will take precedence for over the connection timeout in scenarios where a new connection is created while it is acquired'), e;
}
function _P(e) {
  e.maxConnectionLifetime = pl(e.maxConnectionLifetime, sP), e.maxConnectionPoolSize = pl(e.maxConnectionPoolSize, qr.DEFAULT_POOL_MAX_SIZE), e.connectionAcquisitionTimeout = pl(e.connectionAcquisitionTimeout, qr.DEFAULT_POOL_ACQUISITION_TIMEOUT), e.fetchSize = xy(e.fetchSize, cP), e.connectionTimeout = yP(e);
}
function pl(e, r) {
  var t = parseInt(e, 10);
  return t > 0 || t === 0 ? t : t < 0 ? Number.MAX_SAFE_INTEGER : r;
}
function xy(e, r) {
  var t = parseInt(e, 10);
  if (t > 0 || t === qr.FETCH_ALL)
    return t;
  if (t === 0 || t < 0)
    throw new Error("The fetch size can only be a positive value or ".concat(qr.FETCH_ALL, " for ALL. However fetchSize = ").concat(t));
  return r;
}
function yP(e) {
  var r = parseInt(e.connectionTimeout, 10);
  return r === 0 || !isNaN(r) && r < 0 ? null : isNaN(r) ? qr.DEFAULT_CONNECTION_TIMEOUT_MILLIS : r;
}
function mP(e) {
  return new tP.default(e.resolver);
}
rt.default = Ly;
var Kf = {};
Object.defineProperty(Kf, "__esModule", { value: !0 });
var bP = {
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
    return _l(r) && (o.credentials = r), _l(t) && (o.realm = t), _l(i) && (o.parameters = i), o;
  }
};
function _l(e) {
  return !(e == null || e === "" || Object.getPrototypeOf(e) === Object.prototype && Object.keys(e).length === 0);
}
Kf.default = bP;
var Fy = {};
Object.defineProperty(Fy, "__esModule", { value: !0 });
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
  var s = i(Bf);
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
  var y = i(Qi);
  e.Result = y.default;
  var b = i(ou);
  e.EagerResult = b.default;
  var g = i(qf);
  e.ConnectionProvider = g.default;
  var S = i(Hf);
  e.Connection = S.default;
  var P = i(au);
  e.Transaction = P.default;
  var I = i(uu);
  e.ManagedTransaction = I.default;
  var $ = i(su);
  e.TransactionPromise = $.default;
  var j = i(cu);
  e.Session = j.default;
  var k = n(rt), L = k;
  e.Driver = k.default, e.driver = L;
  var Y = i(Kf);
  e.auth = Y.default;
  var ee = qn;
  Object.defineProperty(e, "bookmarkManager", { enumerable: !0, get: function() {
    return ee.bookmarkManager;
  } });
  var le = rt;
  Object.defineProperty(e, "routing", { enumerable: !0, get: function() {
    return le.routing;
  } });
  var me = n(Fy);
  e.types = me;
  var Me = n(Fn);
  e.json = Me;
  var Pe = i(lu);
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
    ManagedTransaction: I.default,
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
var du = {}, to = {}, ye = {}, Hn = {}, _e = {};
Object.defineProperty(_e, "__esModule", { value: !0 });
_e.isFunction = void 0;
function gP(e) {
  return typeof e == "function";
}
_e.isFunction = gP;
var qe = {}, ro = {}, Bt = {};
Object.defineProperty(Bt, "__esModule", { value: !0 });
Bt.createErrorClass = void 0;
function OP(e) {
  var r = function(n) {
    Error.call(n), n.stack = new Error().stack;
  }, t = e(r);
  return t.prototype = Object.create(Error.prototype), t.prototype.constructor = t, t;
}
Bt.createErrorClass = OP;
Object.defineProperty(ro, "__esModule", { value: !0 });
ro.UnsubscriptionError = void 0;
var wP = Bt;
ro.UnsubscriptionError = wP.createErrorClass(function(e) {
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
function EP(e, r) {
  if (e) {
    var t = e.indexOf(r);
    0 <= t && e.splice(t, 1);
  }
}
Rt.arrRemove = EP;
var Lh = h && h.__values || function(e) {
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
}, xh = h && h.__read || function(e, r) {
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
}, Fh = h && h.__spreadArray || function(e, r) {
  for (var t = 0, n = r.length, i = e.length; t < n; t++, i++)
    e[i] = r[t];
  return e;
};
Object.defineProperty(qe, "__esModule", { value: !0 });
qe.isSubscription = qe.EMPTY_SUBSCRIPTION = qe.Subscription = void 0;
var Mi = _e, yl = ro, Bh = Rt, Zf = function() {
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
            for (var u = Lh(a), c = u.next(); !c.done; c = u.next()) {
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
          o = S instanceof yl.UnsubscriptionError ? S.errors : [S];
        }
      var f = this._finalizers;
      if (f) {
        this._finalizers = null;
        try {
          for (var y = Lh(f), b = y.next(); !b.done; b = y.next()) {
            var g = b.value;
            try {
              Wh(g);
            } catch (S) {
              o = o ?? [], S instanceof yl.UnsubscriptionError ? o = Fh(Fh([], xh(o)), xh(S.errors)) : o.push(S);
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
        throw new yl.UnsubscriptionError(o);
    }
  }, e.prototype.add = function(r) {
    var t;
    if (r && r !== this)
      if (this.closed)
        Wh(r);
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
    t === r ? this._parentage = null : Array.isArray(t) && Bh.arrRemove(t, r);
  }, e.prototype.remove = function(r) {
    var t = this._finalizers;
    t && Bh.arrRemove(t, r), r instanceof e && r._removeParent(this);
  }, e.EMPTY = function() {
    var r = new e();
    return r.closed = !0, r;
  }(), e;
}();
qe.Subscription = Zf;
qe.EMPTY_SUBSCRIPTION = Zf.EMPTY;
function SP(e) {
  return e instanceof Zf || e && "closed" in e && Mi.isFunction(e.remove) && Mi.isFunction(e.add) && Mi.isFunction(e.unsubscribe);
}
qe.isSubscription = SP;
function Wh(e) {
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
var no = {}, Qf = {};
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
})(Qf);
Object.defineProperty(no, "__esModule", { value: !0 });
no.reportUnhandledError = void 0;
var TP = Er, PP = Qf;
function IP(e) {
  PP.timeoutProvider.setTimeout(function() {
    var r = TP.config.onUnhandledError;
    if (r)
      r(e);
    else
      throw e;
  });
}
no.reportUnhandledError = IP;
var ze = {};
Object.defineProperty(ze, "__esModule", { value: !0 });
ze.noop = void 0;
function AP() {
}
ze.noop = AP;
var Lt = {};
Object.defineProperty(Lt, "__esModule", { value: !0 });
Lt.createNotification = Lt.nextNotification = Lt.errorNotification = Lt.COMPLETE_NOTIFICATION = void 0;
Lt.COMPLETE_NOTIFICATION = function() {
  return hu("C", void 0, void 0);
}();
function RP(e) {
  return hu("E", void 0, e);
}
Lt.errorNotification = RP;
function CP(e) {
  return hu("N", e, void 0);
}
Lt.nextNotification = CP;
function hu(e, r, t) {
  return {
    kind: e,
    value: r,
    error: t
  };
}
Lt.createNotification = hu;
var pr = {};
Object.defineProperty(pr, "__esModule", { value: !0 });
pr.captureError = pr.errorContext = void 0;
var By = Er, Fr = null;
function $P(e) {
  if (By.config.useDeprecatedSynchronousErrorHandling) {
    var r = !Fr;
    if (r && (Fr = { errorThrown: !1, error: null }), e(), r) {
      var t = Fr, n = t.errorThrown, i = t.error;
      if (Fr = null, n)
        throw i;
    }
  } else
    e();
}
pr.errorContext = $P;
function jP(e) {
  By.config.useDeprecatedSynchronousErrorHandling && Fr && (Fr.errorThrown = !0, Fr.error = e);
}
pr.captureError = jP;
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
  var t = _e, n = qe, i = Er, o = no, a = ze, u = Lt, c = Qf, s = pr, l = function($) {
    r(j, $);
    function j(k) {
      var L = $.call(this) || this;
      return L.isStopped = !1, k ? (L.destination = k, n.isSubscription(k) && k.add(L)) : L.destination = e.EMPTY_OBSERVER, L;
    }
    return j.create = function(k, L, Y) {
      return new g(k, L, Y);
    }, j.prototype.next = function(k) {
      this.isStopped ? I(u.nextNotification(k), this) : this._next(k);
    }, j.prototype.error = function(k) {
      this.isStopped ? I(u.errorNotification(k), this) : (this.isStopped = !0, this._error(k));
    }, j.prototype.complete = function() {
      this.isStopped ? I(u.COMPLETE_NOTIFICATION, this) : (this.isStopped = !0, this._complete());
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
  }(), g = function($) {
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
  e.SafeSubscriber = g;
  function S($) {
    i.config.useDeprecatedSynchronousErrorHandling ? s.captureError($) : o.reportUnhandledError($);
  }
  function P($) {
    throw $;
  }
  function I($, j) {
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
function NP(e) {
  return e;
}
Ye.identity = NP;
Object.defineProperty(rr, "__esModule", { value: !0 });
rr.pipeFromArray = rr.pipe = void 0;
var MP = Ye;
function kP() {
  for (var e = [], r = 0; r < arguments.length; r++)
    e[r] = arguments[r];
  return Wy(e);
}
rr.pipe = kP;
function Wy(e) {
  return e.length === 0 ? MP.identity : e.length === 1 ? e[0] : function(t) {
    return e.reduce(function(n, i) {
      return i(n);
    }, t);
  };
}
rr.pipeFromArray = Wy;
Object.defineProperty(ye, "__esModule", { value: !0 });
ye.Observable = void 0;
var cf = Hn, DP = qe, UP = Jr, LP = rr, xP = Er, ml = _e, FP = pr, BP = function() {
  function e(r) {
    r && (this._subscribe = r);
  }
  return e.prototype.lift = function(r) {
    var t = new e();
    return t.source = this, t.operator = r, t;
  }, e.prototype.subscribe = function(r, t, n) {
    var i = this, o = VP(r) ? r : new cf.SafeSubscriber(r, t, n);
    return FP.errorContext(function() {
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
    return t = Vh(t), new t(function(i, o) {
      var a = new cf.SafeSubscriber({
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
  }, e.prototype[UP.observable] = function() {
    return this;
  }, e.prototype.pipe = function() {
    for (var r = [], t = 0; t < arguments.length; t++)
      r[t] = arguments[t];
    return LP.pipeFromArray(r)(this);
  }, e.prototype.toPromise = function(r) {
    var t = this;
    return r = Vh(r), new r(function(n, i) {
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
ye.Observable = BP;
function Vh(e) {
  var r;
  return (r = e ?? xP.config.Promise) !== null && r !== void 0 ? r : Promise;
}
function WP(e) {
  return e && ml.isFunction(e.next) && ml.isFunction(e.error) && ml.isFunction(e.complete);
}
function VP(e) {
  return e && e instanceof cf.Subscriber || WP(e) && DP.isSubscription(e);
}
var en = {}, io = {}, W = {};
Object.defineProperty(W, "__esModule", { value: !0 });
W.operate = W.hasLift = void 0;
var qP = _e;
function Vy(e) {
  return qP.isFunction(e == null ? void 0 : e.lift);
}
W.hasLift = Vy;
function HP(e) {
  return function(r) {
    if (Vy(r))
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
W.operate = HP;
var z = {}, zP = h && h.__extends || function() {
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
var YP = Hn;
function GP(e, r, t, n, i) {
  return new qy(e, r, t, n, i);
}
z.createOperatorSubscriber = GP;
var qy = function(e) {
  zP(r, e);
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
}(YP.Subscriber);
z.OperatorSubscriber = qy;
Object.defineProperty(io, "__esModule", { value: !0 });
io.refCount = void 0;
var KP = W, ZP = z;
function QP() {
  return KP.operate(function(e, r) {
    var t = null;
    e._refCount++;
    var n = ZP.createOperatorSubscriber(r, void 0, void 0, void 0, function() {
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
io.refCount = QP;
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
Object.defineProperty(en, "__esModule", { value: !0 });
en.ConnectableObservable = void 0;
var JP = ye, qh = qe, eI = io, tI = z, rI = W, nI = function(e) {
  XP(r, e);
  function r(t, n) {
    var i = e.call(this) || this;
    return i.source = t, i.subjectFactory = n, i._subject = null, i._refCount = 0, i._connection = null, rI.hasLift(t) && (i.lift = t.lift), i;
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
      n = this._connection = new qh.Subscription();
      var i = this.getSubject();
      n.add(this.source.subscribe(tI.createOperatorSubscriber(i, void 0, function() {
        t._teardown(), i.complete();
      }, function(o) {
        t._teardown(), i.error(o);
      }, function() {
        return t._teardown();
      }))), n.closed && (this._connection = null, n = qh.Subscription.EMPTY);
    }
    return n;
  }, r.prototype.refCount = function() {
    return eI.refCount()(this);
  }, r;
}(JP.Observable);
en.ConnectableObservable = nI;
var vu = {}, Hy = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.performanceTimestampProvider = void 0, e.performanceTimestampProvider = {
    now: function() {
      return (e.performanceTimestampProvider.delegate || performance).now();
    },
    delegate: void 0
  };
})(Hy);
var Xf = {};
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
})(Xf);
Object.defineProperty(vu, "__esModule", { value: !0 });
vu.animationFrames = void 0;
var iI = ye, oI = Hy, Hh = Xf;
function aI(e) {
  return e ? zy(e) : uI;
}
vu.animationFrames = aI;
function zy(e) {
  return new iI.Observable(function(r) {
    var t = e || oI.performanceTimestampProvider, n = t.now(), i = 0, o = function() {
      r.closed || (i = Hh.animationFrameProvider.requestAnimationFrame(function(a) {
        i = 0;
        var u = t.now();
        r.next({
          timestamp: e ? u : a,
          elapsed: u - n
        }), o();
      }));
    };
    return o(), function() {
      i && Hh.animationFrameProvider.cancelAnimationFrame(i);
    };
  });
}
var uI = zy(), De = {}, oo = {};
Object.defineProperty(oo, "__esModule", { value: !0 });
oo.ObjectUnsubscribedError = void 0;
var sI = Bt;
oo.ObjectUnsubscribedError = sI.createErrorClass(function(e) {
  return function() {
    e(this), this.name = "ObjectUnsubscribedError", this.message = "object unsubscribed";
  };
});
var Yy = h && h.__extends || function() {
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
}(), cI = h && h.__values || function(e) {
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
var zh = ye, lf = qe, lI = oo, fI = Rt, bl = pr, Gy = function(e) {
  Yy(r, e);
  function r() {
    var t = e.call(this) || this;
    return t.closed = !1, t.currentObservers = null, t.observers = [], t.isStopped = !1, t.hasError = !1, t.thrownError = null, t;
  }
  return r.prototype.lift = function(t) {
    var n = new ff(this, this);
    return n.operator = t, n;
  }, r.prototype._throwIfClosed = function() {
    if (this.closed)
      throw new lI.ObjectUnsubscribedError();
  }, r.prototype.next = function(t) {
    var n = this;
    bl.errorContext(function() {
      var i, o;
      if (n._throwIfClosed(), !n.isStopped) {
        n.currentObservers || (n.currentObservers = Array.from(n.observers));
        try {
          for (var a = cI(n.currentObservers), u = a.next(); !u.done; u = a.next()) {
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
    bl.errorContext(function() {
      if (n._throwIfClosed(), !n.isStopped) {
        n.hasError = n.isStopped = !0, n.thrownError = t;
        for (var i = n.observers; i.length; )
          i.shift().error(t);
      }
    });
  }, r.prototype.complete = function() {
    var t = this;
    bl.errorContext(function() {
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
    return o || a ? lf.EMPTY_SUBSCRIPTION : (this.currentObservers = null, u.push(t), new lf.Subscription(function() {
      n.currentObservers = null, fI.arrRemove(u, t);
    }));
  }, r.prototype._checkFinalizedStatuses = function(t) {
    var n = this, i = n.hasError, o = n.thrownError, a = n.isStopped;
    i ? t.error(o) : a && t.complete();
  }, r.prototype.asObservable = function() {
    var t = new zh.Observable();
    return t.source = this, t;
  }, r.create = function(t, n) {
    return new ff(t, n);
  }, r;
}(zh.Observable);
De.Subject = Gy;
var ff = function(e) {
  Yy(r, e);
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
    return (i = (n = this.source) === null || n === void 0 ? void 0 : n.subscribe(t)) !== null && i !== void 0 ? i : lf.EMPTY_SUBSCRIPTION;
  }, r;
}(Gy);
De.AnonymousSubject = ff;
var ao = {}, dI = h && h.__extends || function() {
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
Object.defineProperty(ao, "__esModule", { value: !0 });
ao.BehaviorSubject = void 0;
var hI = De, vI = function(e) {
  dI(r, e);
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
}(hI.Subject);
ao.BehaviorSubject = vI;
var zn = {}, pu = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.dateTimestampProvider = void 0, e.dateTimestampProvider = {
    now: function() {
      return (e.dateTimestampProvider.delegate || Date).now();
    },
    delegate: void 0
  };
})(pu);
var pI = h && h.__extends || function() {
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
var _I = De, yI = pu, mI = function(e) {
  pI(r, e);
  function r(t, n, i) {
    t === void 0 && (t = 1 / 0), n === void 0 && (n = 1 / 0), i === void 0 && (i = yI.dateTimestampProvider);
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
}(_I.Subject);
zn.ReplaySubject = mI;
var Yn = {}, bI = h && h.__extends || function() {
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
var gI = De, OI = function(e) {
  bI(r, e);
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
}(gI.Subject);
Yn.AsyncSubject = OI;
var Ky = {}, _u = {}, Sr = {}, yu = {}, wI = h && h.__extends || function() {
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
yu.Action = void 0;
var EI = qe, SI = function(e) {
  wI(r, e);
  function r(t, n) {
    return e.call(this) || this;
  }
  return r.prototype.schedule = function(t, n) {
    return this;
  }, r;
}(EI.Subscription);
yu.Action = SI;
var Zy = {};
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
})(Zy);
var TI = h && h.__extends || function() {
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
var PI = yu, Yh = Zy, II = Rt, AI = function(e) {
  TI(r, e);
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
    return i === void 0 && (i = 0), Yh.intervalProvider.setInterval(t.flush.bind(t, this), i);
  }, r.prototype.recycleAsyncId = function(t, n, i) {
    if (i === void 0 && (i = 0), i != null && this.delay === i && this.pending === !1)
      return n;
    n != null && Yh.intervalProvider.clearInterval(n);
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
      this.work = this.state = this.scheduler = null, this.pending = !1, II.arrRemove(o, this), n != null && (this.id = this.recycleAsyncId(i, n, null)), this.delay = null, e.prototype.unsubscribe.call(this);
    }
  }, r;
}(PI.Action);
Sr.AsyncAction = AI;
var Qy = {}, jn = {};
Object.defineProperty(jn, "__esModule", { value: !0 });
jn.TestTools = jn.Immediate = void 0;
var RI = 1, gl, Fa = {};
function Gh(e) {
  return e in Fa ? (delete Fa[e], !0) : !1;
}
jn.Immediate = {
  setImmediate: function(e) {
    var r = RI++;
    return Fa[r] = !0, gl || (gl = Promise.resolve()), gl.then(function() {
      return Gh(r) && e();
    }), r;
  },
  clearImmediate: function(e) {
    Gh(e);
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
})(Qy);
var CI = h && h.__extends || function() {
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
_u.AsapAction = void 0;
var $I = Sr, Kh = Qy, jI = function(e) {
  CI(r, e);
  function r(t, n) {
    var i = e.call(this, t, n) || this;
    return i.scheduler = t, i.work = n, i;
  }
  return r.prototype.requestAsyncId = function(t, n, i) {
    return i === void 0 && (i = 0), i !== null && i > 0 ? e.prototype.requestAsyncId.call(this, t, n, i) : (t.actions.push(this), t._scheduled || (t._scheduled = Kh.immediateProvider.setImmediate(t.flush.bind(t, void 0))));
  }, r.prototype.recycleAsyncId = function(t, n, i) {
    var o;
    if (i === void 0 && (i = 0), i != null ? i > 0 : this.delay > 0)
      return e.prototype.recycleAsyncId.call(this, t, n, i);
    var a = t.actions;
    n != null && ((o = a[a.length - 1]) === null || o === void 0 ? void 0 : o.id) !== n && (Kh.immediateProvider.clearImmediate(n), t._scheduled = void 0);
  }, r;
}($I.AsyncAction);
_u.AsapAction = jI;
var mu = {}, Tr = {}, uo = {};
Object.defineProperty(uo, "__esModule", { value: !0 });
uo.Scheduler = void 0;
var NI = pu, MI = function() {
  function e(r, t) {
    t === void 0 && (t = e.now), this.schedulerActionCtor = r, this.now = t;
  }
  return e.prototype.schedule = function(r, t, n) {
    return t === void 0 && (t = 0), new this.schedulerActionCtor(this, r).schedule(n, t);
  }, e.now = NI.dateTimestampProvider.now, e;
}();
uo.Scheduler = MI;
var kI = h && h.__extends || function() {
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
var Zh = uo, DI = function(e) {
  kI(r, e);
  function r(t, n) {
    n === void 0 && (n = Zh.Scheduler.now);
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
}(Zh.Scheduler);
Tr.AsyncScheduler = DI;
var UI = h && h.__extends || function() {
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
mu.AsapScheduler = void 0;
var LI = Tr, xI = function(e) {
  UI(r, e);
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
}(LI.AsyncScheduler);
mu.AsapScheduler = xI;
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.asap = e.asapScheduler = void 0;
  var r = _u, t = mu;
  e.asapScheduler = new t.AsapScheduler(r.AsapAction), e.asap = e.asapScheduler;
})(Ky);
var ft = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.async = e.asyncScheduler = void 0;
  var r = Sr, t = Tr;
  e.asyncScheduler = new t.AsyncScheduler(r.AsyncAction), e.async = e.asyncScheduler;
})(ft);
var Xy = {}, bu = {}, FI = h && h.__extends || function() {
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
bu.QueueAction = void 0;
var BI = Sr, WI = function(e) {
  FI(r, e);
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
}(BI.AsyncAction);
bu.QueueAction = WI;
var gu = {}, VI = h && h.__extends || function() {
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
gu.QueueScheduler = void 0;
var qI = Tr, HI = function(e) {
  VI(r, e);
  function r() {
    return e !== null && e.apply(this, arguments) || this;
  }
  return r;
}(qI.AsyncScheduler);
gu.QueueScheduler = HI;
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.queue = e.queueScheduler = void 0;
  var r = bu, t = gu;
  e.queueScheduler = new t.QueueScheduler(r.QueueAction), e.queue = e.queueScheduler;
})(Xy);
var Jy = {}, Ou = {}, zI = h && h.__extends || function() {
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
Ou.AnimationFrameAction = void 0;
var YI = Sr, Qh = Xf, GI = function(e) {
  zI(r, e);
  function r(t, n) {
    var i = e.call(this, t, n) || this;
    return i.scheduler = t, i.work = n, i;
  }
  return r.prototype.requestAsyncId = function(t, n, i) {
    return i === void 0 && (i = 0), i !== null && i > 0 ? e.prototype.requestAsyncId.call(this, t, n, i) : (t.actions.push(this), t._scheduled || (t._scheduled = Qh.animationFrameProvider.requestAnimationFrame(function() {
      return t.flush(void 0);
    })));
  }, r.prototype.recycleAsyncId = function(t, n, i) {
    var o;
    if (i === void 0 && (i = 0), i != null ? i > 0 : this.delay > 0)
      return e.prototype.recycleAsyncId.call(this, t, n, i);
    var a = t.actions;
    n != null && ((o = a[a.length - 1]) === null || o === void 0 ? void 0 : o.id) !== n && (Qh.animationFrameProvider.cancelAnimationFrame(n), t._scheduled = void 0);
  }, r;
}(YI.AsyncAction);
Ou.AnimationFrameAction = GI;
var wu = {}, KI = h && h.__extends || function() {
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
Object.defineProperty(wu, "__esModule", { value: !0 });
wu.AnimationFrameScheduler = void 0;
var ZI = Tr, QI = function(e) {
  KI(r, e);
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
}(ZI.AsyncScheduler);
wu.AnimationFrameScheduler = QI;
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.animationFrame = e.animationFrameScheduler = void 0;
  var r = Ou, t = wu;
  e.animationFrameScheduler = new t.AnimationFrameScheduler(r.AnimationFrameAction), e.animationFrame = e.animationFrameScheduler;
})(Jy);
var Nn = {}, em = h && h.__extends || function() {
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
var XI = Sr, JI = qe, eA = Tr, tA = function(e) {
  em(r, e);
  function r(t, n) {
    t === void 0 && (t = tm), n === void 0 && (n = 1 / 0);
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
}(eA.AsyncScheduler);
Nn.VirtualTimeScheduler = tA;
var tm = function(e) {
  em(r, e);
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
      return JI.Subscription.EMPTY;
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
}(XI.AsyncAction);
Nn.VirtualAction = tm;
var Eu = {}, It = {};
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
var Gn = {}, Fe = {}, tn = {};
Object.defineProperty(tn, "__esModule", { value: !0 });
tn.isScheduler = void 0;
var rA = _e;
function nA(e) {
  return e && rA.isFunction(e.schedule);
}
tn.isScheduler = nA;
Object.defineProperty(Fe, "__esModule", { value: !0 });
Fe.popNumber = Fe.popScheduler = Fe.popResultSelector = void 0;
var iA = _e, oA = tn;
function Jf(e) {
  return e[e.length - 1];
}
function aA(e) {
  return iA.isFunction(Jf(e)) ? e.pop() : void 0;
}
Fe.popResultSelector = aA;
function uA(e) {
  return oA.isScheduler(Jf(e)) ? e.pop() : void 0;
}
Fe.popScheduler = uA;
function sA(e, r) {
  return typeof Jf(e) == "number" ? e.pop() : r;
}
Fe.popNumber = sA;
var Ct = {}, so = {}, Su = {}, K = {}, Kn = {};
Object.defineProperty(Kn, "__esModule", { value: !0 });
Kn.isArrayLike = void 0;
Kn.isArrayLike = function(e) {
  return e && typeof e.length == "number" && typeof e != "function";
};
var co = {};
Object.defineProperty(co, "__esModule", { value: !0 });
co.isPromise = void 0;
var cA = _e;
function lA(e) {
  return cA.isFunction(e == null ? void 0 : e.then);
}
co.isPromise = lA;
var lo = {};
Object.defineProperty(lo, "__esModule", { value: !0 });
lo.isInteropObservable = void 0;
var fA = Jr, dA = _e;
function hA(e) {
  return dA.isFunction(e[fA.observable]);
}
lo.isInteropObservable = hA;
var fo = {};
Object.defineProperty(fo, "__esModule", { value: !0 });
fo.isAsyncIterable = void 0;
var vA = _e;
function pA(e) {
  return Symbol.asyncIterator && vA.isFunction(e == null ? void 0 : e[Symbol.asyncIterator]);
}
fo.isAsyncIterable = pA;
var ho = {};
Object.defineProperty(ho, "__esModule", { value: !0 });
ho.createInvalidObservableTypeError = void 0;
function _A(e) {
  return new TypeError("You provided " + (e !== null && typeof e == "object" ? "an invalid object" : "'" + e + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
}
ho.createInvalidObservableTypeError = _A;
var vo = {}, Hr = {};
Object.defineProperty(Hr, "__esModule", { value: !0 });
Hr.iterator = Hr.getSymbolIterator = void 0;
function rm() {
  return typeof Symbol != "function" || !Symbol.iterator ? "@@iterator" : Symbol.iterator;
}
Hr.getSymbolIterator = rm;
Hr.iterator = rm();
Object.defineProperty(vo, "__esModule", { value: !0 });
vo.isIterable = void 0;
var yA = Hr, mA = _e;
function bA(e) {
  return mA.isFunction(e == null ? void 0 : e[yA.iterator]);
}
vo.isIterable = bA;
var _r = {}, gA = h && h.__generator || function(e, r) {
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
}, OA = h && h.__asyncGenerator || function(e, r, t) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var n = t.apply(e, r || []), i, o = [];
  return i = {}, a("next"), a("throw"), a("return"), i[Symbol.asyncIterator] = function() {
    return this;
  }, i;
  function a(y) {
    n[y] && (i[y] = function(b) {
      return new Promise(function(g, S) {
        o.push([y, b, g, S]) > 1 || u(y, b);
      });
    });
  }
  function u(y, b) {
    try {
      c(n[y](b));
    } catch (g) {
      f(o[0][3], g);
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
var wA = _e;
function EA(e) {
  return OA(this, arguments, function() {
    var t, n, i, o;
    return gA(this, function(a) {
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
_r.readableStreamLikeToAsyncGenerator = EA;
function SA(e) {
  return wA.isFunction(e == null ? void 0 : e.getReader);
}
_r.isReadableStreamLike = SA;
var TA = h && h.__awaiter || function(e, r, t, n) {
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
}, PA = h && h.__generator || function(e, r) {
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
}, IA = h && h.__asyncValues || function(e) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var r = e[Symbol.asyncIterator], t;
  return r ? r.call(e) : (e = typeof df == "function" ? df(e) : e[Symbol.iterator](), t = {}, n("next"), n("throw"), n("return"), t[Symbol.asyncIterator] = function() {
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
}, df = h && h.__values || function(e) {
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
var AA = Kn, RA = co, Zn = ye, CA = lo, $A = fo, jA = ho, NA = vo, nm = _r, MA = _e, kA = no, DA = Jr;
function UA(e) {
  if (e instanceof Zn.Observable)
    return e;
  if (e != null) {
    if (CA.isInteropObservable(e))
      return im(e);
    if (AA.isArrayLike(e))
      return om(e);
    if (RA.isPromise(e))
      return am(e);
    if ($A.isAsyncIterable(e))
      return ed(e);
    if (NA.isIterable(e))
      return um(e);
    if (nm.isReadableStreamLike(e))
      return sm(e);
  }
  throw jA.createInvalidObservableTypeError(e);
}
K.innerFrom = UA;
function im(e) {
  return new Zn.Observable(function(r) {
    var t = e[DA.observable]();
    if (MA.isFunction(t.subscribe))
      return t.subscribe(r);
    throw new TypeError("Provided object does not correctly implement Symbol.observable");
  });
}
K.fromInteropObservable = im;
function om(e) {
  return new Zn.Observable(function(r) {
    for (var t = 0; t < e.length && !r.closed; t++)
      r.next(e[t]);
    r.complete();
  });
}
K.fromArrayLike = om;
function am(e) {
  return new Zn.Observable(function(r) {
    e.then(function(t) {
      r.closed || (r.next(t), r.complete());
    }, function(t) {
      return r.error(t);
    }).then(null, kA.reportUnhandledError);
  });
}
K.fromPromise = am;
function um(e) {
  return new Zn.Observable(function(r) {
    var t, n;
    try {
      for (var i = df(e), o = i.next(); !o.done; o = i.next()) {
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
K.fromIterable = um;
function ed(e) {
  return new Zn.Observable(function(r) {
    LA(e, r).catch(function(t) {
      return r.error(t);
    });
  });
}
K.fromAsyncIterable = ed;
function sm(e) {
  return ed(nm.readableStreamLikeToAsyncGenerator(e));
}
K.fromReadableStreamLike = sm;
function LA(e, r) {
  var t, n, i, o;
  return TA(this, void 0, void 0, function() {
    var a, u;
    return PA(this, function(c) {
      switch (c.label) {
        case 0:
          c.trys.push([0, 5, 6, 11]), t = IA(e), c.label = 1;
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
function xA(e, r, t, n, i) {
  n === void 0 && (n = 0), i === void 0 && (i = !1);
  var o = r.schedule(function() {
    t(), i ? e.add(this.schedule(null, n)) : this.unsubscribe();
  }, n);
  if (e.add(o), !i)
    return o;
}
$t.executeSchedule = xA;
Object.defineProperty(rn, "__esModule", { value: !0 });
rn.observeOn = void 0;
var Ol = $t, FA = W, BA = z;
function WA(e, r) {
  return r === void 0 && (r = 0), FA.operate(function(t, n) {
    t.subscribe(BA.createOperatorSubscriber(n, function(i) {
      return Ol.executeSchedule(n, e, function() {
        return n.next(i);
      }, r);
    }, function() {
      return Ol.executeSchedule(n, e, function() {
        return n.complete();
      }, r);
    }, function(i) {
      return Ol.executeSchedule(n, e, function() {
        return n.error(i);
      }, r);
    }));
  });
}
rn.observeOn = WA;
var nn = {};
Object.defineProperty(nn, "__esModule", { value: !0 });
nn.subscribeOn = void 0;
var VA = W;
function qA(e, r) {
  return r === void 0 && (r = 0), VA.operate(function(t, n) {
    n.add(e.schedule(function() {
      return t.subscribe(n);
    }, r));
  });
}
nn.subscribeOn = qA;
Object.defineProperty(Su, "__esModule", { value: !0 });
Su.scheduleObservable = void 0;
var HA = K, zA = rn, YA = nn;
function GA(e, r) {
  return HA.innerFrom(e).pipe(YA.subscribeOn(r), zA.observeOn(r));
}
Su.scheduleObservable = GA;
var Tu = {};
Object.defineProperty(Tu, "__esModule", { value: !0 });
Tu.schedulePromise = void 0;
var KA = K, ZA = rn, QA = nn;
function XA(e, r) {
  return KA.innerFrom(e).pipe(QA.subscribeOn(r), ZA.observeOn(r));
}
Tu.schedulePromise = XA;
var Pu = {};
Object.defineProperty(Pu, "__esModule", { value: !0 });
Pu.scheduleArray = void 0;
var JA = ye;
function eR(e, r) {
  return new JA.Observable(function(t) {
    var n = 0;
    return r.schedule(function() {
      n === e.length ? t.complete() : (t.next(e[n++]), t.closed || this.schedule());
    });
  });
}
Pu.scheduleArray = eR;
var po = {};
Object.defineProperty(po, "__esModule", { value: !0 });
po.scheduleIterable = void 0;
var tR = ye, rR = Hr, nR = _e, Xh = $t;
function iR(e, r) {
  return new tR.Observable(function(t) {
    var n;
    return Xh.executeSchedule(t, r, function() {
      n = e[rR.iterator](), Xh.executeSchedule(t, r, function() {
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
      return nR.isFunction(n == null ? void 0 : n.return) && n.return();
    };
  });
}
po.scheduleIterable = iR;
var _o = {};
Object.defineProperty(_o, "__esModule", { value: !0 });
_o.scheduleAsyncIterable = void 0;
var oR = ye, Jh = $t;
function aR(e, r) {
  if (!e)
    throw new Error("Iterable cannot be null");
  return new oR.Observable(function(t) {
    Jh.executeSchedule(t, r, function() {
      var n = e[Symbol.asyncIterator]();
      Jh.executeSchedule(t, r, function() {
        n.next().then(function(i) {
          i.done ? t.complete() : t.next(i.value);
        });
      }, 0, !0);
    });
  });
}
_o.scheduleAsyncIterable = aR;
var Iu = {};
Object.defineProperty(Iu, "__esModule", { value: !0 });
Iu.scheduleReadableStreamLike = void 0;
var uR = _o, sR = _r;
function cR(e, r) {
  return uR.scheduleAsyncIterable(sR.readableStreamLikeToAsyncGenerator(e), r);
}
Iu.scheduleReadableStreamLike = cR;
Object.defineProperty(so, "__esModule", { value: !0 });
so.scheduled = void 0;
var lR = Su, fR = Tu, dR = Pu, hR = po, vR = _o, pR = lo, _R = co, yR = Kn, mR = vo, bR = fo, gR = ho, OR = _r, wR = Iu;
function ER(e, r) {
  if (e != null) {
    if (pR.isInteropObservable(e))
      return lR.scheduleObservable(e, r);
    if (yR.isArrayLike(e))
      return dR.scheduleArray(e, r);
    if (_R.isPromise(e))
      return fR.schedulePromise(e, r);
    if (bR.isAsyncIterable(e))
      return vR.scheduleAsyncIterable(e, r);
    if (mR.isIterable(e))
      return hR.scheduleIterable(e, r);
    if (OR.isReadableStreamLike(e))
      return wR.scheduleReadableStreamLike(e, r);
  }
  throw gR.createInvalidObservableTypeError(e);
}
so.scheduled = ER;
Object.defineProperty(Ct, "__esModule", { value: !0 });
Ct.from = void 0;
var SR = so, TR = K;
function PR(e, r) {
  return r ? SR.scheduled(e, r) : TR.innerFrom(e);
}
Ct.from = PR;
Object.defineProperty(Gn, "__esModule", { value: !0 });
Gn.of = void 0;
var IR = Fe, AR = Ct;
function RR() {
  for (var e = [], r = 0; r < arguments.length; r++)
    e[r] = arguments[r];
  var t = IR.popScheduler(e);
  return AR.from(e, t);
}
Gn.of = RR;
var yo = {};
Object.defineProperty(yo, "__esModule", { value: !0 });
yo.throwError = void 0;
var CR = ye, $R = _e;
function jR(e, r) {
  var t = $R.isFunction(e) ? e : function() {
    return e;
  }, n = function(i) {
    return i.error(t());
  };
  return new CR.Observable(r ? function(i) {
    return r.schedule(n, 0, i);
  } : n);
}
yo.throwError = jR;
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.observeNotification = e.Notification = e.NotificationKind = void 0;
  var r = It, t = Gn, n = yo, i = _e;
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
      var f = this, y = f.kind, b = f.value, g = f.error;
      return y === "N" ? c == null ? void 0 : c(b) : y === "E" ? s == null ? void 0 : s(g) : l == null ? void 0 : l();
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
    var s, l, f, y = u, b = y.kind, g = y.value, S = y.error;
    if (typeof b != "string")
      throw new TypeError('Invalid notification, missing "kind"');
    b === "N" ? (s = c.next) === null || s === void 0 || s.call(c, g) : b === "E" ? (l = c.error) === null || l === void 0 || l.call(c, S) : (f = c.complete) === null || f === void 0 || f.call(c);
  }
  e.observeNotification = a;
})(Eu);
var Au = {};
Object.defineProperty(Au, "__esModule", { value: !0 });
Au.isObservable = void 0;
var NR = ye, ev = _e;
function MR(e) {
  return !!e && (e instanceof NR.Observable || ev.isFunction(e.lift) && ev.isFunction(e.subscribe));
}
Au.isObservable = MR;
var Ru = {}, Wt = {};
Object.defineProperty(Wt, "__esModule", { value: !0 });
Wt.EmptyError = void 0;
var kR = Bt;
Wt.EmptyError = kR.createErrorClass(function(e) {
  return function() {
    e(this), this.name = "EmptyError", this.message = "no elements in sequence";
  };
});
Object.defineProperty(Ru, "__esModule", { value: !0 });
Ru.lastValueFrom = void 0;
var DR = Wt;
function UR(e, r) {
  var t = typeof r == "object";
  return new Promise(function(n, i) {
    var o = !1, a;
    e.subscribe({
      next: function(u) {
        a = u, o = !0;
      },
      error: i,
      complete: function() {
        o ? n(a) : t ? n(r.defaultValue) : i(new DR.EmptyError());
      }
    });
  });
}
Ru.lastValueFrom = UR;
var Cu = {};
Object.defineProperty(Cu, "__esModule", { value: !0 });
Cu.firstValueFrom = void 0;
var LR = Wt, xR = Hn;
function FR(e, r) {
  var t = typeof r == "object";
  return new Promise(function(n, i) {
    var o = new xR.SafeSubscriber({
      next: function(a) {
        n(a), o.unsubscribe();
      },
      error: i,
      complete: function() {
        t ? n(r.defaultValue) : i(new LR.EmptyError());
      }
    });
    e.subscribe(o);
  });
}
Cu.firstValueFrom = FR;
var mo = {};
Object.defineProperty(mo, "__esModule", { value: !0 });
mo.ArgumentOutOfRangeError = void 0;
var BR = Bt;
mo.ArgumentOutOfRangeError = BR.createErrorClass(function(e) {
  return function() {
    e(this), this.name = "ArgumentOutOfRangeError", this.message = "argument out of range";
  };
});
var bo = {};
Object.defineProperty(bo, "__esModule", { value: !0 });
bo.NotFoundError = void 0;
var WR = Bt;
bo.NotFoundError = WR.createErrorClass(function(e) {
  return function(t) {
    e(this), this.name = "NotFoundError", this.message = t;
  };
});
var go = {};
Object.defineProperty(go, "__esModule", { value: !0 });
go.SequenceError = void 0;
var VR = Bt;
go.SequenceError = VR.createErrorClass(function(e) {
  return function(t) {
    e(this), this.name = "SequenceError", this.message = t;
  };
});
var Ba = {}, Qn = {};
Object.defineProperty(Qn, "__esModule", { value: !0 });
Qn.isValidDate = void 0;
function qR(e) {
  return e instanceof Date && !isNaN(e);
}
Qn.isValidDate = qR;
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.timeout = e.TimeoutError = void 0;
  var r = ft, t = Qn, n = W, i = K, o = Bt, a = z, u = $t;
  e.TimeoutError = o.createErrorClass(function(l) {
    return function(y) {
      y === void 0 && (y = null), l(this), this.message = "Timeout has occurred", this.name = "TimeoutError", this.info = y;
    };
  });
  function c(l, f) {
    var y = t.isValidDate(l) ? { first: l } : typeof l == "number" ? { each: l } : l, b = y.first, g = y.each, S = y.with, P = S === void 0 ? s : S, I = y.scheduler, $ = I === void 0 ? f ?? r.asyncScheduler : I, j = y.meta, k = j === void 0 ? null : j;
    if (b == null && g == null)
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
        le == null || le.unsubscribe(), Me++, Y.next(me = Ue), g > 0 && Pe(g);
      }, void 0, void 0, function() {
        le != null && le.closed || le == null || le.unsubscribe(), me = null;
      })), !Me && Pe(b != null ? typeof b == "number" ? b : +b - $.now() : g);
    });
  }
  e.timeout = c;
  function s(l) {
    throw new e.TimeoutError(l);
  }
})(Ba);
var $u = {}, Oo = {}, Vt = {}, qt = {};
Object.defineProperty(qt, "__esModule", { value: !0 });
qt.map = void 0;
var HR = W, zR = z;
function YR(e, r) {
  return HR.operate(function(t, n) {
    var i = 0;
    t.subscribe(zR.createOperatorSubscriber(n, function(o) {
      n.next(e.call(r, o, i++));
    }));
  });
}
qt.map = YR;
var GR = h && h.__read || function(e, r) {
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
}, KR = h && h.__spreadArray || function(e, r) {
  for (var t = 0, n = r.length, i = e.length; t < n; t++, i++)
    e[i] = r[t];
  return e;
};
Object.defineProperty(Vt, "__esModule", { value: !0 });
Vt.mapOneOrManyArgs = void 0;
var ZR = qt, QR = Array.isArray;
function XR(e, r) {
  return QR(r) ? e.apply(void 0, KR([], GR(r))) : e(r);
}
function JR(e) {
  return ZR.map(function(r) {
    return XR(e, r);
  });
}
Vt.mapOneOrManyArgs = JR;
var eC = h && h.__read || function(e, r) {
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
}, tv = h && h.__spreadArray || function(e, r) {
  for (var t = 0, n = r.length, i = e.length; t < n; t++, i++)
    e[i] = r[t];
  return e;
};
Object.defineProperty(Oo, "__esModule", { value: !0 });
Oo.bindCallbackInternals = void 0;
var tC = tn, rC = ye, nC = nn, iC = Vt, oC = rn, aC = Yn;
function hf(e, r, t, n) {
  if (t)
    if (tC.isScheduler(t))
      n = t;
    else
      return function() {
        for (var i = [], o = 0; o < arguments.length; o++)
          i[o] = arguments[o];
        return hf(e, r, n).apply(this, i).pipe(iC.mapOneOrManyArgs(t));
      };
  return n ? function() {
    for (var i = [], o = 0; o < arguments.length; o++)
      i[o] = arguments[o];
    return hf(e, r).apply(this, i).pipe(nC.subscribeOn(n), oC.observeOn(n));
  } : function() {
    for (var i = this, o = [], a = 0; a < arguments.length; a++)
      o[a] = arguments[a];
    var u = new aC.AsyncSubject(), c = !0;
    return new rC.Observable(function(s) {
      var l = u.subscribe(s);
      if (c) {
        c = !1;
        var f = !1, y = !1;
        r.apply(i, tv(tv([], eC(o)), [
          function() {
            for (var b = [], g = 0; g < arguments.length; g++)
              b[g] = arguments[g];
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
Oo.bindCallbackInternals = hf;
Object.defineProperty($u, "__esModule", { value: !0 });
$u.bindCallback = void 0;
var uC = Oo;
function sC(e, r, t) {
  return uC.bindCallbackInternals(!1, e, r, t);
}
$u.bindCallback = sC;
var ju = {};
Object.defineProperty(ju, "__esModule", { value: !0 });
ju.bindNodeCallback = void 0;
var cC = Oo;
function lC(e, r, t) {
  return cC.bindCallbackInternals(!0, e, r, t);
}
ju.bindNodeCallback = lC;
var yr = {}, wo = {};
Object.defineProperty(wo, "__esModule", { value: !0 });
wo.argsArgArrayOrObject = void 0;
var fC = Array.isArray, dC = Object.getPrototypeOf, hC = Object.prototype, vC = Object.keys;
function pC(e) {
  if (e.length === 1) {
    var r = e[0];
    if (fC(r))
      return { args: r, keys: null };
    if (_C(r)) {
      var t = vC(r);
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
wo.argsArgArrayOrObject = pC;
function _C(e) {
  return e && typeof e == "object" && dC(e) === hC;
}
var Eo = {};
Object.defineProperty(Eo, "__esModule", { value: !0 });
Eo.createObject = void 0;
function yC(e, r) {
  return e.reduce(function(t, n, i) {
    return t[n] = r[i], t;
  }, {});
}
Eo.createObject = yC;
Object.defineProperty(yr, "__esModule", { value: !0 });
yr.combineLatestInit = yr.combineLatest = void 0;
var mC = ye, bC = wo, cm = Ct, lm = Ye, gC = Vt, rv = Fe, OC = Eo, wC = z, EC = $t;
function SC() {
  for (var e = [], r = 0; r < arguments.length; r++)
    e[r] = arguments[r];
  var t = rv.popScheduler(e), n = rv.popResultSelector(e), i = bC.argsArgArrayOrObject(e), o = i.args, a = i.keys;
  if (o.length === 0)
    return cm.from([], t);
  var u = new mC.Observable(fm(o, t, a ? function(c) {
    return OC.createObject(a, c);
  } : lm.identity));
  return n ? u.pipe(gC.mapOneOrManyArgs(n)) : u;
}
yr.combineLatest = SC;
function fm(e, r, t) {
  return t === void 0 && (t = lm.identity), function(n) {
    nv(r, function() {
      for (var i = e.length, o = new Array(i), a = i, u = i, c = function(l) {
        nv(r, function() {
          var f = cm.from(e[l], r), y = !1;
          f.subscribe(wC.createOperatorSubscriber(n, function(b) {
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
yr.combineLatestInit = fm;
function nv(e, r, t) {
  e ? EC.executeSchedule(t, e, r) : r();
}
var on = {}, Xn = {}, an = {}, jt = {}, Jn = {};
Object.defineProperty(Jn, "__esModule", { value: !0 });
Jn.mergeInternals = void 0;
var TC = K, PC = $t, iv = z;
function IC(e, r, t, n, i, o, a, u) {
  var c = [], s = 0, l = 0, f = !1, y = function() {
    f && !c.length && !s && r.complete();
  }, b = function(S) {
    return s < n ? g(S) : c.push(S);
  }, g = function(S) {
    o && r.next(S), s++;
    var P = !1;
    TC.innerFrom(t(S, l++)).subscribe(iv.createOperatorSubscriber(r, function(I) {
      i == null || i(I), o ? b(I) : r.next(I);
    }, function() {
      P = !0;
    }, void 0, function() {
      if (P)
        try {
          s--;
          for (var I = function() {
            var $ = c.shift();
            a ? PC.executeSchedule(r, a, function() {
              return g($);
            }) : g($);
          }; c.length && s < n; )
            I();
          y();
        } catch ($) {
          r.error($);
        }
    }));
  };
  return e.subscribe(iv.createOperatorSubscriber(r, b, function() {
    f = !0, y();
  })), function() {
    u == null || u();
  };
}
Jn.mergeInternals = IC;
Object.defineProperty(jt, "__esModule", { value: !0 });
jt.mergeMap = void 0;
var AC = qt, RC = K, CC = W, $C = Jn, jC = _e;
function dm(e, r, t) {
  return t === void 0 && (t = 1 / 0), jC.isFunction(r) ? dm(function(n, i) {
    return AC.map(function(o, a) {
      return r(n, o, i, a);
    })(RC.innerFrom(e(n, i)));
  }, t) : (typeof r == "number" && (t = r), CC.operate(function(n, i) {
    return $C.mergeInternals(n, i, e, t);
  }));
}
jt.mergeMap = dm;
Object.defineProperty(an, "__esModule", { value: !0 });
an.mergeAll = void 0;
var NC = jt, MC = Ye;
function kC(e) {
  return e === void 0 && (e = 1 / 0), NC.mergeMap(MC.identity, e);
}
an.mergeAll = kC;
Object.defineProperty(Xn, "__esModule", { value: !0 });
Xn.concatAll = void 0;
var DC = an;
function UC() {
  return DC.mergeAll(1);
}
Xn.concatAll = UC;
Object.defineProperty(on, "__esModule", { value: !0 });
on.concat = void 0;
var LC = Xn, xC = Fe, FC = Ct;
function BC() {
  for (var e = [], r = 0; r < arguments.length; r++)
    e[r] = arguments[r];
  return LC.concatAll()(FC.from(e, xC.popScheduler(e)));
}
on.concat = BC;
var Nu = {}, un = {};
Object.defineProperty(un, "__esModule", { value: !0 });
un.defer = void 0;
var WC = ye, VC = K;
function qC(e) {
  return new WC.Observable(function(r) {
    VC.innerFrom(e()).subscribe(r);
  });
}
un.defer = qC;
Object.defineProperty(Nu, "__esModule", { value: !0 });
Nu.connectable = void 0;
var HC = De, zC = ye, YC = un, GC = {
  connector: function() {
    return new HC.Subject();
  },
  resetOnDisconnect: !0
};
function KC(e, r) {
  r === void 0 && (r = GC);
  var t = null, n = r.connector, i = r.resetOnDisconnect, o = i === void 0 ? !0 : i, a = n(), u = new zC.Observable(function(c) {
    return a.subscribe(c);
  });
  return u.connect = function() {
    return (!t || t.closed) && (t = YC.defer(function() {
      return e;
    }).subscribe(a), o && t.add(function() {
      return a = n();
    })), t;
  }, u;
}
Nu.connectable = KC;
var Mu = {};
Object.defineProperty(Mu, "__esModule", { value: !0 });
Mu.forkJoin = void 0;
var ZC = ye, QC = wo, XC = K, JC = Fe, e$ = z, t$ = Vt, r$ = Eo;
function n$() {
  for (var e = [], r = 0; r < arguments.length; r++)
    e[r] = arguments[r];
  var t = JC.popResultSelector(e), n = QC.argsArgArrayOrObject(e), i = n.args, o = n.keys, a = new ZC.Observable(function(u) {
    var c = i.length;
    if (!c) {
      u.complete();
      return;
    }
    for (var s = new Array(c), l = c, f = c, y = function(g) {
      var S = !1;
      XC.innerFrom(i[g]).subscribe(e$.createOperatorSubscriber(u, function(P) {
        S || (S = !0, f--), s[g] = P;
      }, function() {
        return l--;
      }, void 0, function() {
        (!l || !S) && (f || u.next(o ? r$.createObject(o, s) : s), u.complete());
      }));
    }, b = 0; b < c; b++)
      y(b);
  });
  return t ? a.pipe(t$.mapOneOrManyArgs(t)) : a;
}
Mu.forkJoin = n$;
var ku = {}, i$ = h && h.__read || function(e, r) {
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
Object.defineProperty(ku, "__esModule", { value: !0 });
ku.fromEvent = void 0;
var o$ = K, a$ = ye, u$ = jt, s$ = Kn, zr = _e, c$ = Vt, l$ = ["addListener", "removeListener"], f$ = ["addEventListener", "removeEventListener"], d$ = ["on", "off"];
function vf(e, r, t, n) {
  if (zr.isFunction(t) && (n = t, t = void 0), n)
    return vf(e, r, t).pipe(c$.mapOneOrManyArgs(n));
  var i = i$(p$(e) ? f$.map(function(u) {
    return function(c) {
      return e[u](r, c, t);
    };
  }) : h$(e) ? l$.map(ov(e, r)) : v$(e) ? d$.map(ov(e, r)) : [], 2), o = i[0], a = i[1];
  if (!o && s$.isArrayLike(e))
    return u$.mergeMap(function(u) {
      return vf(u, r, t);
    })(o$.innerFrom(e));
  if (!o)
    throw new TypeError("Invalid event target");
  return new a$.Observable(function(u) {
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
ku.fromEvent = vf;
function ov(e, r) {
  return function(t) {
    return function(n) {
      return e[t](r, n);
    };
  };
}
function h$(e) {
  return zr.isFunction(e.addListener) && zr.isFunction(e.removeListener);
}
function v$(e) {
  return zr.isFunction(e.on) && zr.isFunction(e.off);
}
function p$(e) {
  return zr.isFunction(e.addEventListener) && zr.isFunction(e.removeEventListener);
}
var Du = {};
Object.defineProperty(Du, "__esModule", { value: !0 });
Du.fromEventPattern = void 0;
var _$ = ye, y$ = _e, m$ = Vt;
function hm(e, r, t) {
  return t ? hm(e, r).pipe(m$.mapOneOrManyArgs(t)) : new _$.Observable(function(n) {
    var i = function() {
      for (var a = [], u = 0; u < arguments.length; u++)
        a[u] = arguments[u];
      return n.next(a.length === 1 ? a[0] : a);
    }, o = e(i);
    return y$.isFunction(r) ? function() {
      return r(i, o);
    } : void 0;
  });
}
Du.fromEventPattern = hm;
var Uu = {}, b$ = h && h.__generator || function(e, r) {
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
Object.defineProperty(Uu, "__esModule", { value: !0 });
Uu.generate = void 0;
var av = Ye, g$ = tn, O$ = un, w$ = po;
function E$(e, r, t, n, i) {
  var o, a, u, c;
  arguments.length === 1 ? (o = e, c = o.initialState, r = o.condition, t = o.iterate, a = o.resultSelector, u = a === void 0 ? av.identity : a, i = o.scheduler) : (c = e, !n || g$.isScheduler(n) ? (u = av.identity, i = n) : u = n);
  function s() {
    var l;
    return b$(this, function(f) {
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
  return O$.defer(i ? function() {
    return w$.scheduleIterable(s(), i);
  } : s);
}
Uu.generate = E$;
var Lu = {};
Object.defineProperty(Lu, "__esModule", { value: !0 });
Lu.iif = void 0;
var S$ = un;
function T$(e, r, t) {
  return S$.defer(function() {
    return e() ? r : t;
  });
}
Lu.iif = T$;
var So = {}, Ht = {};
Object.defineProperty(Ht, "__esModule", { value: !0 });
Ht.timer = void 0;
var P$ = ye, I$ = ft, A$ = tn, R$ = Qn;
function C$(e, r, t) {
  e === void 0 && (e = 0), t === void 0 && (t = I$.async);
  var n = -1;
  return r != null && (A$.isScheduler(r) ? t = r : n = r), new P$.Observable(function(i) {
    var o = R$.isValidDate(e) ? +e - t.now() : e;
    o < 0 && (o = 0);
    var a = 0;
    return t.schedule(function() {
      i.closed || (i.next(a++), 0 <= n ? this.schedule(void 0, n) : i.complete());
    }, o);
  });
}
Ht.timer = C$;
Object.defineProperty(So, "__esModule", { value: !0 });
So.interval = void 0;
var $$ = ft, j$ = Ht;
function N$(e, r) {
  return e === void 0 && (e = 0), r === void 0 && (r = $$.asyncScheduler), e < 0 && (e = 0), j$.timer(e, e, r);
}
So.interval = N$;
var xu = {};
Object.defineProperty(xu, "__esModule", { value: !0 });
xu.merge = void 0;
var M$ = an, k$ = K, D$ = It, uv = Fe, U$ = Ct;
function L$() {
  for (var e = [], r = 0; r < arguments.length; r++)
    e[r] = arguments[r];
  var t = uv.popScheduler(e), n = uv.popNumber(e, 1 / 0), i = e;
  return i.length ? i.length === 1 ? k$.innerFrom(i[0]) : M$.mergeAll(n)(U$.from(i, t)) : D$.EMPTY;
}
xu.merge = L$;
var pf = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.never = e.NEVER = void 0;
  var r = ye, t = ze;
  e.NEVER = new r.Observable(t.noop);
  function n() {
    return e.NEVER;
  }
  e.never = n;
})(pf);
var To = {}, or = {};
Object.defineProperty(or, "__esModule", { value: !0 });
or.argsOrArgArray = void 0;
var x$ = Array.isArray;
function F$(e) {
  return e.length === 1 && x$(e[0]) ? e[0] : e;
}
or.argsOrArgArray = F$;
Object.defineProperty(To, "__esModule", { value: !0 });
To.onErrorResumeNext = void 0;
var B$ = ye, W$ = or, V$ = z, sv = ze, q$ = K;
function H$() {
  for (var e = [], r = 0; r < arguments.length; r++)
    e[r] = arguments[r];
  var t = W$.argsOrArgArray(e);
  return new B$.Observable(function(n) {
    var i = 0, o = function() {
      if (i < t.length) {
        var a = void 0;
        try {
          a = q$.innerFrom(t[i++]);
        } catch {
          o();
          return;
        }
        var u = new V$.OperatorSubscriber(n, void 0, sv.noop, sv.noop);
        a.subscribe(u), u.add(o);
      } else
        n.complete();
    };
    o();
  });
}
To.onErrorResumeNext = H$;
var Fu = {};
Object.defineProperty(Fu, "__esModule", { value: !0 });
Fu.pairs = void 0;
var z$ = Ct;
function Y$(e, r) {
  return z$.from(Object.entries(e), r);
}
Fu.pairs = Y$;
var Bu = {}, Wu = {};
Object.defineProperty(Wu, "__esModule", { value: !0 });
Wu.not = void 0;
function G$(e, r) {
  return function(t, n) {
    return !e.call(r, t, n);
  };
}
Wu.not = G$;
var ar = {};
Object.defineProperty(ar, "__esModule", { value: !0 });
ar.filter = void 0;
var K$ = W, Z$ = z;
function Q$(e, r) {
  return K$.operate(function(t, n) {
    var i = 0;
    t.subscribe(Z$.createOperatorSubscriber(n, function(o) {
      return e.call(r, o, i++) && n.next(o);
    }));
  });
}
ar.filter = Q$;
Object.defineProperty(Bu, "__esModule", { value: !0 });
Bu.partition = void 0;
var X$ = Wu, cv = ar, lv = K;
function J$(e, r, t) {
  return [cv.filter(r, t)(lv.innerFrom(e)), cv.filter(X$.not(r, t))(lv.innerFrom(e))];
}
Bu.partition = J$;
var Yr = {};
Object.defineProperty(Yr, "__esModule", { value: !0 });
Yr.raceInit = Yr.race = void 0;
var ej = ye, vm = K, tj = or, rj = z;
function nj() {
  for (var e = [], r = 0; r < arguments.length; r++)
    e[r] = arguments[r];
  return e = tj.argsOrArgArray(e), e.length === 1 ? vm.innerFrom(e[0]) : new ej.Observable(pm(e));
}
Yr.race = nj;
function pm(e) {
  return function(r) {
    for (var t = [], n = function(o) {
      t.push(vm.innerFrom(e[o]).subscribe(rj.createOperatorSubscriber(r, function(a) {
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
Yr.raceInit = pm;
var Vu = {};
Object.defineProperty(Vu, "__esModule", { value: !0 });
Vu.range = void 0;
var ij = ye, oj = It;
function aj(e, r, t) {
  if (r == null && (r = e, e = 0), r <= 0)
    return oj.EMPTY;
  var n = r + e;
  return new ij.Observable(t ? function(i) {
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
Vu.range = aj;
var qu = {};
Object.defineProperty(qu, "__esModule", { value: !0 });
qu.using = void 0;
var uj = ye, sj = K, cj = It;
function lj(e, r) {
  return new uj.Observable(function(t) {
    var n = e(), i = r(n), o = i ? sj.innerFrom(i) : cj.EMPTY;
    return o.subscribe(t), function() {
      n && n.unsubscribe();
    };
  });
}
qu.using = lj;
var ei = {}, fj = h && h.__read || function(e, r) {
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
}, dj = h && h.__spreadArray || function(e, r) {
  for (var t = 0, n = r.length, i = e.length; t < n; t++, i++)
    e[i] = r[t];
  return e;
};
Object.defineProperty(ei, "__esModule", { value: !0 });
ei.zip = void 0;
var hj = ye, vj = K, pj = or, _j = It, yj = z, mj = Fe;
function bj() {
  for (var e = [], r = 0; r < arguments.length; r++)
    e[r] = arguments[r];
  var t = mj.popResultSelector(e), n = pj.argsOrArgArray(e);
  return n.length ? new hj.Observable(function(i) {
    var o = n.map(function() {
      return [];
    }), a = n.map(function() {
      return !1;
    });
    i.add(function() {
      o = a = null;
    });
    for (var u = function(s) {
      vj.innerFrom(n[s]).subscribe(yj.createOperatorSubscriber(i, function(l) {
        if (o[s].push(l), o.every(function(y) {
          return y.length;
        })) {
          var f = o.map(function(y) {
            return y.shift();
          });
          i.next(t ? t.apply(void 0, dj([], fj(f))) : f), o.some(function(y, b) {
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
  }) : _j.EMPTY;
}
ei.zip = bj;
var _m = {};
Object.defineProperty(_m, "__esModule", { value: !0 });
var Po = {};
Object.defineProperty(Po, "__esModule", { value: !0 });
Po.audit = void 0;
var gj = W, Oj = K, fv = z;
function wj(e) {
  return gj.operate(function(r, t) {
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
    r.subscribe(fv.createOperatorSubscriber(t, function(s) {
      n = !0, i = s, o || Oj.innerFrom(e(s)).subscribe(o = fv.createOperatorSubscriber(t, u, c));
    }, function() {
      a = !0, (!n || !o || o.closed) && t.complete();
    }));
  });
}
Po.audit = wj;
var Hu = {};
Object.defineProperty(Hu, "__esModule", { value: !0 });
Hu.auditTime = void 0;
var Ej = ft, Sj = Po, Tj = Ht;
function Pj(e, r) {
  return r === void 0 && (r = Ej.asyncScheduler), Sj.audit(function() {
    return Tj.timer(e, r);
  });
}
Hu.auditTime = Pj;
var zu = {};
Object.defineProperty(zu, "__esModule", { value: !0 });
zu.buffer = void 0;
var Ij = W, Aj = ze, dv = z, Rj = K;
function Cj(e) {
  return Ij.operate(function(r, t) {
    var n = [];
    return r.subscribe(dv.createOperatorSubscriber(t, function(i) {
      return n.push(i);
    }, function() {
      t.next(n), t.complete();
    })), Rj.innerFrom(e).subscribe(dv.createOperatorSubscriber(t, function() {
      var i = n;
      n = [], t.next(i);
    }, Aj.noop)), function() {
      n = null;
    };
  });
}
zu.buffer = Cj;
var Yu = {}, wl = h && h.__values || function(e) {
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
Yu.bufferCount = void 0;
var $j = W, jj = z, Nj = Rt;
function Mj(e, r) {
  return r === void 0 && (r = null), r = r ?? e, $j.operate(function(t, n) {
    var i = [], o = 0;
    t.subscribe(jj.createOperatorSubscriber(n, function(a) {
      var u, c, s, l, f = null;
      o++ % r === 0 && i.push([]);
      try {
        for (var y = wl(i), b = y.next(); !b.done; b = y.next()) {
          var g = b.value;
          g.push(a), e <= g.length && (f = f ?? [], f.push(g));
        }
      } catch (I) {
        u = { error: I };
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
          for (var S = wl(f), P = S.next(); !P.done; P = S.next()) {
            var g = P.value;
            Nj.arrRemove(i, g), n.next(g);
          }
        } catch (I) {
          s = { error: I };
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
        for (var c = wl(i), s = c.next(); !s.done; s = c.next()) {
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
Yu.bufferCount = Mj;
var Gu = {}, kj = h && h.__values || function(e) {
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
Gu.bufferTime = void 0;
var Dj = qe, Uj = W, Lj = z, xj = Rt, Fj = ft, Bj = Fe, hv = $t;
function Wj(e) {
  for (var r, t, n = [], i = 1; i < arguments.length; i++)
    n[i - 1] = arguments[i];
  var o = (r = Bj.popScheduler(n)) !== null && r !== void 0 ? r : Fj.asyncScheduler, a = (t = n[0]) !== null && t !== void 0 ? t : null, u = n[1] || 1 / 0;
  return Uj.operate(function(c, s) {
    var l = [], f = !1, y = function(S) {
      var P = S.buffer, I = S.subs;
      I.unsubscribe(), xj.arrRemove(l, S), s.next(P), f && b();
    }, b = function() {
      if (l) {
        var S = new Dj.Subscription();
        s.add(S);
        var P = [], I = {
          buffer: P,
          subs: S
        };
        l.push(I), hv.executeSchedule(S, o, function() {
          return y(I);
        }, e);
      }
    };
    a !== null && a >= 0 ? hv.executeSchedule(s, o, b, a, !0) : f = !0, b();
    var g = Lj.createOperatorSubscriber(s, function(S) {
      var P, I, $ = l.slice();
      try {
        for (var j = kj($), k = j.next(); !k.done; k = j.next()) {
          var L = k.value, Y = L.buffer;
          Y.push(S), u <= Y.length && y(L);
        }
      } catch (ee) {
        P = { error: ee };
      } finally {
        try {
          k && !k.done && (I = j.return) && I.call(j);
        } finally {
          if (P)
            throw P.error;
        }
      }
    }, function() {
      for (; l != null && l.length; )
        s.next(l.shift().buffer);
      g == null || g.unsubscribe(), s.complete(), s.unsubscribe();
    }, void 0, function() {
      return l = null;
    });
    c.subscribe(g);
  });
}
Gu.bufferTime = Wj;
var Ku = {}, Vj = h && h.__values || function(e) {
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
Object.defineProperty(Ku, "__esModule", { value: !0 });
Ku.bufferToggle = void 0;
var qj = qe, Hj = W, vv = K, El = z, pv = ze, zj = Rt;
function Yj(e, r) {
  return Hj.operate(function(t, n) {
    var i = [];
    vv.innerFrom(e).subscribe(El.createOperatorSubscriber(n, function(o) {
      var a = [];
      i.push(a);
      var u = new qj.Subscription(), c = function() {
        zj.arrRemove(i, a), n.next(a), u.unsubscribe();
      };
      u.add(vv.innerFrom(r(o)).subscribe(El.createOperatorSubscriber(n, c, pv.noop)));
    }, pv.noop)), t.subscribe(El.createOperatorSubscriber(n, function(o) {
      var a, u;
      try {
        for (var c = Vj(i), s = c.next(); !s.done; s = c.next()) {
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
Ku.bufferToggle = Yj;
var Zu = {};
Object.defineProperty(Zu, "__esModule", { value: !0 });
Zu.bufferWhen = void 0;
var Gj = W, Kj = ze, _v = z, Zj = K;
function Qj(e) {
  return Gj.operate(function(r, t) {
    var n = null, i = null, o = function() {
      i == null || i.unsubscribe();
      var a = n;
      n = [], a && t.next(a), Zj.innerFrom(e()).subscribe(i = _v.createOperatorSubscriber(t, o, Kj.noop));
    };
    o(), r.subscribe(_v.createOperatorSubscriber(t, function(a) {
      return n == null ? void 0 : n.push(a);
    }, function() {
      n && t.next(n), t.complete();
    }, void 0, function() {
      return n = i = null;
    }));
  });
}
Zu.bufferWhen = Qj;
var Qu = {};
Object.defineProperty(Qu, "__esModule", { value: !0 });
Qu.catchError = void 0;
var Xj = K, Jj = z, eN = W;
function ym(e) {
  return eN.operate(function(r, t) {
    var n = null, i = !1, o;
    n = r.subscribe(Jj.createOperatorSubscriber(t, void 0, void 0, function(a) {
      o = Xj.innerFrom(e(a, ym(e)(r))), n ? (n.unsubscribe(), n = null, o.subscribe(t)) : i = !0;
    })), i && (n.unsubscribe(), n = null, o.subscribe(t));
  });
}
Qu.catchError = ym;
var Xu = {}, Io = {}, Ao = {}, Ro = {}, Pr = {}, Co = {};
Object.defineProperty(Co, "__esModule", { value: !0 });
Co.scanInternals = void 0;
var tN = z;
function rN(e, r, t, n, i) {
  return function(o, a) {
    var u = t, c = r, s = 0;
    o.subscribe(tN.createOperatorSubscriber(a, function(l) {
      var f = s++;
      c = u ? e(c, l, f) : (u = !0, l), n && a.next(c);
    }, i && function() {
      u && a.next(c), a.complete();
    }));
  };
}
Co.scanInternals = rN;
Object.defineProperty(Pr, "__esModule", { value: !0 });
Pr.reduce = void 0;
var nN = Co, iN = W;
function oN(e, r) {
  return iN.operate(nN.scanInternals(e, r, arguments.length >= 2, !1, !0));
}
Pr.reduce = oN;
Object.defineProperty(Ro, "__esModule", { value: !0 });
Ro.toArray = void 0;
var aN = Pr, uN = W, sN = function(e, r) {
  return e.push(r), e;
};
function cN() {
  return uN.operate(function(e, r) {
    aN.reduce(sN, [])(e).subscribe(r);
  });
}
Ro.toArray = cN;
Object.defineProperty(Ao, "__esModule", { value: !0 });
Ao.joinAllInternals = void 0;
var lN = Ye, fN = Vt, dN = rr, hN = jt, vN = Ro;
function pN(e, r) {
  return dN.pipe(vN.toArray(), hN.mergeMap(function(t) {
    return e(t);
  }), r ? fN.mapOneOrManyArgs(r) : lN.identity);
}
Ao.joinAllInternals = pN;
Object.defineProperty(Io, "__esModule", { value: !0 });
Io.combineLatestAll = void 0;
var _N = yr, yN = Ao;
function mN(e) {
  return yN.joinAllInternals(_N.combineLatest, e);
}
Io.combineLatestAll = mN;
Object.defineProperty(Xu, "__esModule", { value: !0 });
Xu.combineAll = void 0;
var bN = Io;
Xu.combineAll = bN.combineLatestAll;
var Ju = {}, es = {}, yv = h && h.__read || function(e, r) {
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
}, mv = h && h.__spreadArray || function(e, r) {
  for (var t = 0, n = r.length, i = e.length; t < n; t++, i++)
    e[i] = r[t];
  return e;
};
Object.defineProperty(es, "__esModule", { value: !0 });
es.combineLatest = void 0;
var gN = yr, ON = W, wN = or, EN = Vt, SN = rr, TN = Fe;
function mm() {
  for (var e = [], r = 0; r < arguments.length; r++)
    e[r] = arguments[r];
  var t = TN.popResultSelector(e);
  return t ? SN.pipe(mm.apply(void 0, mv([], yv(e))), EN.mapOneOrManyArgs(t)) : ON.operate(function(n, i) {
    gN.combineLatestInit(mv([n], yv(wN.argsOrArgArray(e))))(i);
  });
}
es.combineLatest = mm;
var PN = h && h.__read || function(e, r) {
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
}, IN = h && h.__spreadArray || function(e, r) {
  for (var t = 0, n = r.length, i = e.length; t < n; t++, i++)
    e[i] = r[t];
  return e;
};
Object.defineProperty(Ju, "__esModule", { value: !0 });
Ju.combineLatestWith = void 0;
var AN = es;
function RN() {
  for (var e = [], r = 0; r < arguments.length; r++)
    e[r] = arguments[r];
  return AN.combineLatest.apply(void 0, IN([], PN(e)));
}
Ju.combineLatestWith = RN;
var $o = {};
Object.defineProperty($o, "__esModule", { value: !0 });
$o.concatMap = void 0;
var bv = jt, CN = _e;
function $N(e, r) {
  return CN.isFunction(r) ? bv.mergeMap(e, r, 1) : bv.mergeMap(e, 1);
}
$o.concatMap = $N;
var ts = {};
Object.defineProperty(ts, "__esModule", { value: !0 });
ts.concatMapTo = void 0;
var gv = $o, jN = _e;
function NN(e, r) {
  return jN.isFunction(r) ? gv.concatMap(function() {
    return e;
  }, r) : gv.concatMap(function() {
    return e;
  });
}
ts.concatMapTo = NN;
var rs = {}, ns = {}, MN = h && h.__read || function(e, r) {
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
}, kN = h && h.__spreadArray || function(e, r) {
  for (var t = 0, n = r.length, i = e.length; t < n; t++, i++)
    e[i] = r[t];
  return e;
};
Object.defineProperty(ns, "__esModule", { value: !0 });
ns.concat = void 0;
var DN = W, UN = Xn, LN = Fe, xN = Ct;
function FN() {
  for (var e = [], r = 0; r < arguments.length; r++)
    e[r] = arguments[r];
  var t = LN.popScheduler(e);
  return DN.operate(function(n, i) {
    UN.concatAll()(xN.from(kN([n], MN(e)), t)).subscribe(i);
  });
}
ns.concat = FN;
var BN = h && h.__read || function(e, r) {
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
}, WN = h && h.__spreadArray || function(e, r) {
  for (var t = 0, n = r.length, i = e.length; t < n; t++, i++)
    e[i] = r[t];
  return e;
};
Object.defineProperty(rs, "__esModule", { value: !0 });
rs.concatWith = void 0;
var VN = ns;
function qN() {
  for (var e = [], r = 0; r < arguments.length; r++)
    e[r] = arguments[r];
  return VN.concat.apply(void 0, WN([], BN(e)));
}
rs.concatWith = qN;
var ti = {}, is = {};
Object.defineProperty(is, "__esModule", { value: !0 });
is.fromSubscribable = void 0;
var HN = ye;
function zN(e) {
  return new HN.Observable(function(r) {
    return e.subscribe(r);
  });
}
is.fromSubscribable = zN;
Object.defineProperty(ti, "__esModule", { value: !0 });
ti.connect = void 0;
var YN = De, GN = K, KN = W, ZN = is, QN = {
  connector: function() {
    return new YN.Subject();
  }
};
function XN(e, r) {
  r === void 0 && (r = QN);
  var t = r.connector;
  return KN.operate(function(n, i) {
    var o = t();
    GN.innerFrom(e(ZN.fromSubscribable(o))).subscribe(i), i.add(n.subscribe(o));
  });
}
ti.connect = XN;
var os = {};
Object.defineProperty(os, "__esModule", { value: !0 });
os.count = void 0;
var JN = Pr;
function eM(e) {
  return JN.reduce(function(r, t, n) {
    return !e || e(t, n) ? r + 1 : r;
  }, 0);
}
os.count = eM;
var as = {};
Object.defineProperty(as, "__esModule", { value: !0 });
as.debounce = void 0;
var tM = W, rM = ze, Ov = z, nM = K;
function iM(e) {
  return tM.operate(function(r, t) {
    var n = !1, i = null, o = null, a = function() {
      if (o == null || o.unsubscribe(), o = null, n) {
        n = !1;
        var u = i;
        i = null, t.next(u);
      }
    };
    r.subscribe(Ov.createOperatorSubscriber(t, function(u) {
      o == null || o.unsubscribe(), n = !0, i = u, o = Ov.createOperatorSubscriber(t, a, rM.noop), nM.innerFrom(e(u)).subscribe(o);
    }, function() {
      a(), t.complete();
    }, void 0, function() {
      i = o = null;
    }));
  });
}
as.debounce = iM;
var us = {};
Object.defineProperty(us, "__esModule", { value: !0 });
us.debounceTime = void 0;
var oM = ft, aM = W, uM = z;
function sM(e, r) {
  return r === void 0 && (r = oM.asyncScheduler), aM.operate(function(t, n) {
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
    t.subscribe(uM.createOperatorSubscriber(n, function(s) {
      o = s, a = r.now(), i || (i = r.schedule(c, e), n.add(i));
    }, function() {
      u(), n.complete();
    }, void 0, function() {
      o = i = null;
    }));
  });
}
us.debounceTime = sM;
var sn = {};
Object.defineProperty(sn, "__esModule", { value: !0 });
sn.defaultIfEmpty = void 0;
var cM = W, lM = z;
function fM(e) {
  return cM.operate(function(r, t) {
    var n = !1;
    r.subscribe(lM.createOperatorSubscriber(t, function(i) {
      n = !0, t.next(i);
    }, function() {
      n || t.next(e), t.complete();
    }));
  });
}
sn.defaultIfEmpty = fM;
var ss = {}, jo = {}, cn = {};
Object.defineProperty(cn, "__esModule", { value: !0 });
cn.take = void 0;
var dM = It, hM = W, vM = z;
function pM(e) {
  return e <= 0 ? function() {
    return dM.EMPTY;
  } : hM.operate(function(r, t) {
    var n = 0;
    r.subscribe(vM.createOperatorSubscriber(t, function(i) {
      ++n <= e && (t.next(i), e <= n && t.complete());
    }));
  });
}
cn.take = pM;
var No = {};
Object.defineProperty(No, "__esModule", { value: !0 });
No.ignoreElements = void 0;
var _M = W, yM = z, mM = ze;
function bM() {
  return _M.operate(function(e, r) {
    e.subscribe(yM.createOperatorSubscriber(r, mM.noop));
  });
}
No.ignoreElements = bM;
var Mo = {};
Object.defineProperty(Mo, "__esModule", { value: !0 });
Mo.mapTo = void 0;
var gM = qt;
function OM(e) {
  return gM.map(function() {
    return e;
  });
}
Mo.mapTo = OM;
Object.defineProperty(jo, "__esModule", { value: !0 });
jo.delayWhen = void 0;
var wM = on, wv = cn, EM = No, SM = Mo, TM = jt, PM = K;
function bm(e, r) {
  return r ? function(t) {
    return wM.concat(r.pipe(wv.take(1), EM.ignoreElements()), t.pipe(bm(e)));
  } : TM.mergeMap(function(t, n) {
    return PM.innerFrom(e(t, n)).pipe(wv.take(1), SM.mapTo(t));
  });
}
jo.delayWhen = bm;
Object.defineProperty(ss, "__esModule", { value: !0 });
ss.delay = void 0;
var IM = ft, AM = jo, RM = Ht;
function CM(e, r) {
  r === void 0 && (r = IM.asyncScheduler);
  var t = RM.timer(e, r);
  return AM.delayWhen(function() {
    return t;
  });
}
ss.delay = CM;
var cs = {};
Object.defineProperty(cs, "__esModule", { value: !0 });
cs.dematerialize = void 0;
var $M = Eu, jM = W, NM = z;
function MM() {
  return jM.operate(function(e, r) {
    e.subscribe(NM.createOperatorSubscriber(r, function(t) {
      return $M.observeNotification(t, r);
    }));
  });
}
cs.dematerialize = MM;
var ls = {};
Object.defineProperty(ls, "__esModule", { value: !0 });
ls.distinct = void 0;
var kM = W, Ev = z, DM = ze, UM = K;
function LM(e, r) {
  return kM.operate(function(t, n) {
    var i = /* @__PURE__ */ new Set();
    t.subscribe(Ev.createOperatorSubscriber(n, function(o) {
      var a = e ? e(o) : o;
      i.has(a) || (i.add(a), n.next(o));
    })), r && UM.innerFrom(r).subscribe(Ev.createOperatorSubscriber(n, function() {
      return i.clear();
    }, DM.noop));
  });
}
ls.distinct = LM;
var ko = {};
Object.defineProperty(ko, "__esModule", { value: !0 });
ko.distinctUntilChanged = void 0;
var xM = Ye, FM = W, BM = z;
function WM(e, r) {
  return r === void 0 && (r = xM.identity), e = e ?? VM, FM.operate(function(t, n) {
    var i, o = !0;
    t.subscribe(BM.createOperatorSubscriber(n, function(a) {
      var u = r(a);
      (o || !e(i, u)) && (o = !1, i = u, n.next(a));
    }));
  });
}
ko.distinctUntilChanged = WM;
function VM(e, r) {
  return e === r;
}
var fs = {};
Object.defineProperty(fs, "__esModule", { value: !0 });
fs.distinctUntilKeyChanged = void 0;
var qM = ko;
function HM(e, r) {
  return qM.distinctUntilChanged(function(t, n) {
    return r ? r(t[e], n[e]) : t[e] === n[e];
  });
}
fs.distinctUntilKeyChanged = HM;
var ds = {}, ln = {};
Object.defineProperty(ln, "__esModule", { value: !0 });
ln.throwIfEmpty = void 0;
var zM = Wt, YM = W, GM = z;
function KM(e) {
  return e === void 0 && (e = ZM), YM.operate(function(r, t) {
    var n = !1;
    r.subscribe(GM.createOperatorSubscriber(t, function(i) {
      n = !0, t.next(i);
    }, function() {
      return n ? t.complete() : t.error(e());
    }));
  });
}
ln.throwIfEmpty = KM;
function ZM() {
  return new zM.EmptyError();
}
Object.defineProperty(ds, "__esModule", { value: !0 });
ds.elementAt = void 0;
var Sv = mo, QM = ar, XM = ln, JM = sn, ek = cn;
function tk(e, r) {
  if (e < 0)
    throw new Sv.ArgumentOutOfRangeError();
  var t = arguments.length >= 2;
  return function(n) {
    return n.pipe(QM.filter(function(i, o) {
      return o === e;
    }), ek.take(1), t ? JM.defaultIfEmpty(r) : XM.throwIfEmpty(function() {
      return new Sv.ArgumentOutOfRangeError();
    }));
  };
}
ds.elementAt = tk;
var hs = {}, rk = h && h.__read || function(e, r) {
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
}, nk = h && h.__spreadArray || function(e, r) {
  for (var t = 0, n = r.length, i = e.length; t < n; t++, i++)
    e[i] = r[t];
  return e;
};
Object.defineProperty(hs, "__esModule", { value: !0 });
hs.endWith = void 0;
var ik = on, ok = Gn;
function ak() {
  for (var e = [], r = 0; r < arguments.length; r++)
    e[r] = arguments[r];
  return function(t) {
    return ik.concat(t, ok.of.apply(void 0, nk([], rk(e))));
  };
}
hs.endWith = ak;
var vs = {};
Object.defineProperty(vs, "__esModule", { value: !0 });
vs.every = void 0;
var uk = W, sk = z;
function ck(e, r) {
  return uk.operate(function(t, n) {
    var i = 0;
    t.subscribe(sk.createOperatorSubscriber(n, function(o) {
      e.call(r, o, i++, t) || (n.next(!1), n.complete());
    }, function() {
      n.next(!0), n.complete();
    }));
  });
}
vs.every = ck;
var ps = {}, Do = {}, Uo = {};
Object.defineProperty(Uo, "__esModule", { value: !0 });
Uo.exhaustMap = void 0;
var lk = qt, Tv = K, fk = W, Pv = z;
function gm(e, r) {
  return r ? function(t) {
    return t.pipe(gm(function(n, i) {
      return Tv.innerFrom(e(n, i)).pipe(lk.map(function(o, a) {
        return r(n, o, i, a);
      }));
    }));
  } : fk.operate(function(t, n) {
    var i = 0, o = null, a = !1;
    t.subscribe(Pv.createOperatorSubscriber(n, function(u) {
      o || (o = Pv.createOperatorSubscriber(n, void 0, function() {
        o = null, a && n.complete();
      }), Tv.innerFrom(e(u, i++)).subscribe(o));
    }, function() {
      a = !0, !o && n.complete();
    }));
  });
}
Uo.exhaustMap = gm;
Object.defineProperty(Do, "__esModule", { value: !0 });
Do.exhaustAll = void 0;
var dk = Uo, hk = Ye;
function vk() {
  return dk.exhaustMap(hk.identity);
}
Do.exhaustAll = vk;
Object.defineProperty(ps, "__esModule", { value: !0 });
ps.exhaust = void 0;
var pk = Do;
ps.exhaust = pk.exhaustAll;
var _s = {};
Object.defineProperty(_s, "__esModule", { value: !0 });
_s.expand = void 0;
var _k = W, yk = Jn;
function mk(e, r, t) {
  return r === void 0 && (r = 1 / 0), r = (r || 0) < 1 ? 1 / 0 : r, _k.operate(function(n, i) {
    return yk.mergeInternals(n, i, e, r, void 0, !0, t);
  });
}
_s.expand = mk;
var ys = {};
Object.defineProperty(ys, "__esModule", { value: !0 });
ys.finalize = void 0;
var bk = W;
function gk(e) {
  return bk.operate(function(r, t) {
    try {
      r.subscribe(t);
    } finally {
      t.add(e);
    }
  });
}
ys.finalize = gk;
var Gr = {};
Object.defineProperty(Gr, "__esModule", { value: !0 });
Gr.createFind = Gr.find = void 0;
var Ok = W, wk = z;
function Ek(e, r) {
  return Ok.operate(Om(e, r, "value"));
}
Gr.find = Ek;
function Om(e, r, t) {
  var n = t === "index";
  return function(i, o) {
    var a = 0;
    i.subscribe(wk.createOperatorSubscriber(o, function(u) {
      var c = a++;
      e.call(r, u, c, i) && (o.next(n ? c : u), o.complete());
    }, function() {
      o.next(n ? -1 : void 0), o.complete();
    }));
  };
}
Gr.createFind = Om;
var ms = {};
Object.defineProperty(ms, "__esModule", { value: !0 });
ms.findIndex = void 0;
var Sk = W, Tk = Gr;
function Pk(e, r) {
  return Sk.operate(Tk.createFind(e, r, "index"));
}
ms.findIndex = Pk;
var bs = {};
Object.defineProperty(bs, "__esModule", { value: !0 });
bs.first = void 0;
var Ik = Wt, Ak = ar, Rk = cn, Ck = sn, $k = ln, jk = Ye;
function Nk(e, r) {
  var t = arguments.length >= 2;
  return function(n) {
    return n.pipe(e ? Ak.filter(function(i, o) {
      return e(i, o, n);
    }) : jk.identity, Rk.take(1), t ? Ck.defaultIfEmpty(r) : $k.throwIfEmpty(function() {
      return new Ik.EmptyError();
    }));
  };
}
bs.first = Nk;
var gs = {};
Object.defineProperty(gs, "__esModule", { value: !0 });
gs.groupBy = void 0;
var Mk = ye, kk = K, Dk = De, Uk = W, Iv = z;
function Lk(e, r, t, n) {
  return Uk.operate(function(i, o) {
    var a;
    !r || typeof r == "function" ? a = r : (t = r.duration, a = r.element, n = r.connector);
    var u = /* @__PURE__ */ new Map(), c = function(g) {
      u.forEach(g), g(o);
    }, s = function(g) {
      return c(function(S) {
        return S.error(g);
      });
    }, l = 0, f = !1, y = new Iv.OperatorSubscriber(o, function(g) {
      try {
        var S = e(g), P = u.get(S);
        if (!P) {
          u.set(S, P = n ? n() : new Dk.Subject());
          var I = b(S, P);
          if (o.next(I), t) {
            var $ = Iv.createOperatorSubscriber(P, function() {
              P.complete(), $ == null || $.unsubscribe();
            }, void 0, void 0, function() {
              return u.delete(S);
            });
            y.add(kk.innerFrom(t(I)).subscribe($));
          }
        }
        P.next(a ? a(g) : g);
      } catch (j) {
        s(j);
      }
    }, function() {
      return c(function(g) {
        return g.complete();
      });
    }, s, function() {
      return u.clear();
    }, function() {
      return f = !0, l === 0;
    });
    i.subscribe(y);
    function b(g, S) {
      var P = new Mk.Observable(function(I) {
        l++;
        var $ = S.subscribe(I);
        return function() {
          $.unsubscribe(), --l === 0 && f && y.unsubscribe();
        };
      });
      return P.key = g, P;
    }
  });
}
gs.groupBy = Lk;
var Os = {};
Object.defineProperty(Os, "__esModule", { value: !0 });
Os.isEmpty = void 0;
var xk = W, Fk = z;
function Bk() {
  return xk.operate(function(e, r) {
    e.subscribe(Fk.createOperatorSubscriber(r, function() {
      r.next(!1), r.complete();
    }, function() {
      r.next(!0), r.complete();
    }));
  });
}
Os.isEmpty = Bk;
var ws = {}, Lo = {}, Wk = h && h.__values || function(e) {
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
Object.defineProperty(Lo, "__esModule", { value: !0 });
Lo.takeLast = void 0;
var Vk = It, qk = W, Hk = z;
function zk(e) {
  return e <= 0 ? function() {
    return Vk.EMPTY;
  } : qk.operate(function(r, t) {
    var n = [];
    r.subscribe(Hk.createOperatorSubscriber(t, function(i) {
      n.push(i), e < n.length && n.shift();
    }, function() {
      var i, o;
      try {
        for (var a = Wk(n), u = a.next(); !u.done; u = a.next()) {
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
Lo.takeLast = zk;
Object.defineProperty(ws, "__esModule", { value: !0 });
ws.last = void 0;
var Yk = Wt, Gk = ar, Kk = Lo, Zk = ln, Qk = sn, Xk = Ye;
function Jk(e, r) {
  var t = arguments.length >= 2;
  return function(n) {
    return n.pipe(e ? Gk.filter(function(i, o) {
      return e(i, o, n);
    }) : Xk.identity, Kk.takeLast(1), t ? Qk.defaultIfEmpty(r) : Zk.throwIfEmpty(function() {
      return new Yk.EmptyError();
    }));
  };
}
ws.last = Jk;
var Es = {};
Object.defineProperty(Es, "__esModule", { value: !0 });
Es.materialize = void 0;
var Sl = Eu, e2 = W, t2 = z;
function r2() {
  return e2.operate(function(e, r) {
    e.subscribe(t2.createOperatorSubscriber(r, function(t) {
      r.next(Sl.Notification.createNext(t));
    }, function() {
      r.next(Sl.Notification.createComplete()), r.complete();
    }, function(t) {
      r.next(Sl.Notification.createError(t)), r.complete();
    }));
  });
}
Es.materialize = r2;
var Ss = {};
Object.defineProperty(Ss, "__esModule", { value: !0 });
Ss.max = void 0;
var n2 = Pr, i2 = _e;
function o2(e) {
  return n2.reduce(i2.isFunction(e) ? function(r, t) {
    return e(r, t) > 0 ? r : t;
  } : function(r, t) {
    return r > t ? r : t;
  });
}
Ss.max = o2;
var Ts = {};
Object.defineProperty(Ts, "__esModule", { value: !0 });
Ts.flatMap = void 0;
var a2 = jt;
Ts.flatMap = a2.mergeMap;
var Ps = {};
Object.defineProperty(Ps, "__esModule", { value: !0 });
Ps.mergeMapTo = void 0;
var Av = jt, u2 = _e;
function s2(e, r, t) {
  return t === void 0 && (t = 1 / 0), u2.isFunction(r) ? Av.mergeMap(function() {
    return e;
  }, r, t) : (typeof r == "number" && (t = r), Av.mergeMap(function() {
    return e;
  }, t));
}
Ps.mergeMapTo = s2;
var Is = {};
Object.defineProperty(Is, "__esModule", { value: !0 });
Is.mergeScan = void 0;
var c2 = W, l2 = Jn;
function f2(e, r, t) {
  return t === void 0 && (t = 1 / 0), c2.operate(function(n, i) {
    var o = r;
    return l2.mergeInternals(n, i, function(a, u) {
      return e(o, a, u);
    }, t, function(a) {
      o = a;
    }, !1, void 0, function() {
      return o = null;
    });
  });
}
Is.mergeScan = f2;
var As = {}, Rs = {}, d2 = h && h.__read || function(e, r) {
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
Object.defineProperty(Rs, "__esModule", { value: !0 });
Rs.merge = void 0;
var v2 = W, p2 = or, _2 = an, Rv = Fe, y2 = Ct;
function m2() {
  for (var e = [], r = 0; r < arguments.length; r++)
    e[r] = arguments[r];
  var t = Rv.popScheduler(e), n = Rv.popNumber(e, 1 / 0);
  return e = p2.argsOrArgArray(e), v2.operate(function(i, o) {
    _2.mergeAll(n)(y2.from(h2([i], d2(e)), t)).subscribe(o);
  });
}
Rs.merge = m2;
var b2 = h && h.__read || function(e, r) {
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
}, g2 = h && h.__spreadArray || function(e, r) {
  for (var t = 0, n = r.length, i = e.length; t < n; t++, i++)
    e[i] = r[t];
  return e;
};
Object.defineProperty(As, "__esModule", { value: !0 });
As.mergeWith = void 0;
var O2 = Rs;
function w2() {
  for (var e = [], r = 0; r < arguments.length; r++)
    e[r] = arguments[r];
  return O2.merge.apply(void 0, g2([], b2(e)));
}
As.mergeWith = w2;
var Cs = {};
Object.defineProperty(Cs, "__esModule", { value: !0 });
Cs.min = void 0;
var E2 = Pr, S2 = _e;
function T2(e) {
  return E2.reduce(S2.isFunction(e) ? function(r, t) {
    return e(r, t) < 0 ? r : t;
  } : function(r, t) {
    return r < t ? r : t;
  });
}
Cs.min = T2;
var ri = {};
Object.defineProperty(ri, "__esModule", { value: !0 });
ri.multicast = void 0;
var P2 = en, Cv = _e, I2 = ti;
function A2(e, r) {
  var t = Cv.isFunction(e) ? e : function() {
    return e;
  };
  return Cv.isFunction(r) ? I2.connect(r, {
    connector: t
  }) : function(n) {
    return new P2.ConnectableObservable(n, t);
  };
}
ri.multicast = A2;
var Mn = {}, R2 = h && h.__read || function(e, r) {
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
}, C2 = h && h.__spreadArray || function(e, r) {
  for (var t = 0, n = r.length, i = e.length; t < n; t++, i++)
    e[i] = r[t];
  return e;
};
Object.defineProperty(Mn, "__esModule", { value: !0 });
Mn.onErrorResumeNext = Mn.onErrorResumeNextWith = void 0;
var $2 = or, j2 = To;
function wm() {
  for (var e = [], r = 0; r < arguments.length; r++)
    e[r] = arguments[r];
  var t = $2.argsOrArgArray(e);
  return function(n) {
    return j2.onErrorResumeNext.apply(void 0, C2([n], R2(t)));
  };
}
Mn.onErrorResumeNextWith = wm;
Mn.onErrorResumeNext = wm;
var $s = {};
Object.defineProperty($s, "__esModule", { value: !0 });
$s.pairwise = void 0;
var N2 = W, M2 = z;
function k2() {
  return N2.operate(function(e, r) {
    var t, n = !1;
    e.subscribe(M2.createOperatorSubscriber(r, function(i) {
      var o = t;
      t = i, n && r.next([o, i]), n = !0;
    }));
  });
}
$s.pairwise = k2;
var js = {};
Object.defineProperty(js, "__esModule", { value: !0 });
js.pluck = void 0;
var D2 = qt;
function U2() {
  for (var e = [], r = 0; r < arguments.length; r++)
    e[r] = arguments[r];
  var t = e.length;
  if (t === 0)
    throw new Error("list of properties cannot be empty.");
  return D2.map(function(n) {
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
js.pluck = U2;
var Ns = {};
Object.defineProperty(Ns, "__esModule", { value: !0 });
Ns.publish = void 0;
var L2 = De, x2 = ri, F2 = ti;
function B2(e) {
  return e ? function(r) {
    return F2.connect(e)(r);
  } : function(r) {
    return x2.multicast(new L2.Subject())(r);
  };
}
Ns.publish = B2;
var Ms = {};
Object.defineProperty(Ms, "__esModule", { value: !0 });
Ms.publishBehavior = void 0;
var W2 = ao, V2 = en;
function q2(e) {
  return function(r) {
    var t = new W2.BehaviorSubject(e);
    return new V2.ConnectableObservable(r, function() {
      return t;
    });
  };
}
Ms.publishBehavior = q2;
var ks = {};
Object.defineProperty(ks, "__esModule", { value: !0 });
ks.publishLast = void 0;
var H2 = Yn, z2 = en;
function Y2() {
  return function(e) {
    var r = new H2.AsyncSubject();
    return new z2.ConnectableObservable(e, function() {
      return r;
    });
  };
}
ks.publishLast = Y2;
var Ds = {};
Object.defineProperty(Ds, "__esModule", { value: !0 });
Ds.publishReplay = void 0;
var G2 = zn, K2 = ri, $v = _e;
function Z2(e, r, t, n) {
  t && !$v.isFunction(t) && (n = t);
  var i = $v.isFunction(t) ? t : void 0;
  return function(o) {
    return K2.multicast(new G2.ReplaySubject(e, r, n), i)(o);
  };
}
Ds.publishReplay = Z2;
var Us = {}, Q2 = h && h.__read || function(e, r) {
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
}, X2 = h && h.__spreadArray || function(e, r) {
  for (var t = 0, n = r.length, i = e.length; t < n; t++, i++)
    e[i] = r[t];
  return e;
};
Object.defineProperty(Us, "__esModule", { value: !0 });
Us.raceWith = void 0;
var J2 = Yr, eD = W, tD = Ye;
function rD() {
  for (var e = [], r = 0; r < arguments.length; r++)
    e[r] = arguments[r];
  return e.length ? eD.operate(function(t, n) {
    J2.raceInit(X2([t], Q2(e)))(n);
  }) : tD.identity;
}
Us.raceWith = rD;
var Ls = {};
Object.defineProperty(Ls, "__esModule", { value: !0 });
Ls.repeat = void 0;
var nD = It, iD = W, jv = z, oD = K, aD = Ht;
function uD(e) {
  var r, t = 1 / 0, n;
  return e != null && (typeof e == "object" ? (r = e.count, t = r === void 0 ? 1 / 0 : r, n = e.delay) : t = e), t <= 0 ? function() {
    return nD.EMPTY;
  } : iD.operate(function(i, o) {
    var a = 0, u, c = function() {
      if (u == null || u.unsubscribe(), u = null, n != null) {
        var l = typeof n == "number" ? aD.timer(n) : oD.innerFrom(n(a)), f = jv.createOperatorSubscriber(o, function() {
          f.unsubscribe(), s();
        });
        l.subscribe(f);
      } else
        s();
    }, s = function() {
      var l = !1;
      u = i.subscribe(jv.createOperatorSubscriber(o, void 0, function() {
        ++a < t ? u ? c() : l = !0 : o.complete();
      })), l && c();
    };
    s();
  });
}
Ls.repeat = uD;
var xs = {};
Object.defineProperty(xs, "__esModule", { value: !0 });
xs.repeatWhen = void 0;
var sD = K, cD = De, lD = W, Nv = z;
function fD(e) {
  return lD.operate(function(r, t) {
    var n, i = !1, o, a = !1, u = !1, c = function() {
      return u && a && (t.complete(), !0);
    }, s = function() {
      return o || (o = new cD.Subject(), sD.innerFrom(e(o)).subscribe(Nv.createOperatorSubscriber(t, function() {
        n ? l() : i = !0;
      }, function() {
        a = !0, c();
      }))), o;
    }, l = function() {
      u = !1, n = r.subscribe(Nv.createOperatorSubscriber(t, void 0, function() {
        u = !0, !c() && s().next();
      })), i && (n.unsubscribe(), n = null, i = !1, l());
    };
    l();
  });
}
xs.repeatWhen = fD;
var Fs = {};
Object.defineProperty(Fs, "__esModule", { value: !0 });
Fs.retry = void 0;
var dD = W, Mv = z, hD = Ye, vD = Ht, pD = K;
function _D(e) {
  e === void 0 && (e = 1 / 0);
  var r;
  e && typeof e == "object" ? r = e : r = {
    count: e
  };
  var t = r.count, n = t === void 0 ? 1 / 0 : t, i = r.delay, o = r.resetOnSuccess, a = o === void 0 ? !1 : o;
  return n <= 0 ? hD.identity : dD.operate(function(u, c) {
    var s = 0, l, f = function() {
      var y = !1;
      l = u.subscribe(Mv.createOperatorSubscriber(c, function(b) {
        a && (s = 0), c.next(b);
      }, void 0, function(b) {
        if (s++ < n) {
          var g = function() {
            l ? (l.unsubscribe(), l = null, f()) : y = !0;
          };
          if (i != null) {
            var S = typeof i == "number" ? vD.timer(i) : pD.innerFrom(i(b, s)), P = Mv.createOperatorSubscriber(c, function() {
              P.unsubscribe(), g();
            }, function() {
              c.complete();
            });
            S.subscribe(P);
          } else
            g();
        } else
          c.error(b);
      })), y && (l.unsubscribe(), l = null, f());
    };
    f();
  });
}
Fs.retry = _D;
var Bs = {};
Object.defineProperty(Bs, "__esModule", { value: !0 });
Bs.retryWhen = void 0;
var yD = K, mD = De, bD = W, kv = z;
function gD(e) {
  return bD.operate(function(r, t) {
    var n, i = !1, o, a = function() {
      n = r.subscribe(kv.createOperatorSubscriber(t, void 0, void 0, function(u) {
        o || (o = new mD.Subject(), yD.innerFrom(e(o)).subscribe(kv.createOperatorSubscriber(t, function() {
          return n ? a() : i = !0;
        }))), o && o.next(u);
      })), i && (n.unsubscribe(), n = null, i = !1, a());
    };
    a();
  });
}
Bs.retryWhen = gD;
var xo = {};
Object.defineProperty(xo, "__esModule", { value: !0 });
xo.sample = void 0;
var OD = K, wD = W, ED = ze, Dv = z;
function SD(e) {
  return wD.operate(function(r, t) {
    var n = !1, i = null;
    r.subscribe(Dv.createOperatorSubscriber(t, function(o) {
      n = !0, i = o;
    })), OD.innerFrom(e).subscribe(Dv.createOperatorSubscriber(t, function() {
      if (n) {
        n = !1;
        var o = i;
        i = null, t.next(o);
      }
    }, ED.noop));
  });
}
xo.sample = SD;
var Ws = {};
Object.defineProperty(Ws, "__esModule", { value: !0 });
Ws.sampleTime = void 0;
var TD = ft, PD = xo, ID = So;
function AD(e, r) {
  return r === void 0 && (r = TD.asyncScheduler), PD.sample(ID.interval(e, r));
}
Ws.sampleTime = AD;
var Vs = {};
Object.defineProperty(Vs, "__esModule", { value: !0 });
Vs.scan = void 0;
var RD = W, CD = Co;
function $D(e, r) {
  return RD.operate(CD.scanInternals(e, r, arguments.length >= 2, !0));
}
Vs.scan = $D;
var qs = {};
Object.defineProperty(qs, "__esModule", { value: !0 });
qs.sequenceEqual = void 0;
var jD = W, ND = z, MD = K;
function kD(e, r) {
  return r === void 0 && (r = function(t, n) {
    return t === n;
  }), jD.operate(function(t, n) {
    var i = Uv(), o = Uv(), a = function(c) {
      n.next(c), n.complete();
    }, u = function(c, s) {
      var l = ND.createOperatorSubscriber(n, function(f) {
        var y = s.buffer, b = s.complete;
        y.length === 0 ? b ? a(!1) : c.buffer.push(f) : !r(f, y.shift()) && a(!1);
      }, function() {
        c.complete = !0;
        var f = s.complete, y = s.buffer;
        f && a(y.length === 0), l == null || l.unsubscribe();
      });
      return l;
    };
    t.subscribe(u(i, o)), MD.innerFrom(e).subscribe(u(o, i));
  });
}
qs.sequenceEqual = kD;
function Uv() {
  return {
    buffer: [],
    complete: !1
  };
}
var Fo = {}, DD = h && h.__read || function(e, r) {
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
}, UD = h && h.__spreadArray || function(e, r) {
  for (var t = 0, n = r.length, i = e.length; t < n; t++, i++)
    e[i] = r[t];
  return e;
};
Object.defineProperty(Fo, "__esModule", { value: !0 });
Fo.share = void 0;
var Em = K, LD = De, Sm = Hn, xD = W;
function FD(e) {
  e === void 0 && (e = {});
  var r = e.connector, t = r === void 0 ? function() {
    return new LD.Subject();
  } : r, n = e.resetOnError, i = n === void 0 ? !0 : n, o = e.resetOnComplete, a = o === void 0 ? !0 : o, u = e.resetOnRefCountZero, c = u === void 0 ? !0 : u;
  return function(s) {
    var l, f, y, b = 0, g = !1, S = !1, P = function() {
      f == null || f.unsubscribe(), f = void 0;
    }, I = function() {
      P(), l = y = void 0, g = S = !1;
    }, $ = function() {
      var j = l;
      I(), j == null || j.unsubscribe();
    };
    return xD.operate(function(j, k) {
      b++, !S && !g && P();
      var L = y = y ?? t();
      k.add(function() {
        b--, b === 0 && !S && !g && (f = Tl($, c));
      }), L.subscribe(k), !l && b > 0 && (l = new Sm.SafeSubscriber({
        next: function(Y) {
          return L.next(Y);
        },
        error: function(Y) {
          S = !0, P(), f = Tl(I, i, Y), L.error(Y);
        },
        complete: function() {
          g = !0, P(), f = Tl(I, a), L.complete();
        }
      }), Em.innerFrom(j).subscribe(l));
    })(s);
  };
}
Fo.share = FD;
function Tl(e, r) {
  for (var t = [], n = 2; n < arguments.length; n++)
    t[n - 2] = arguments[n];
  if (r === !0) {
    e();
    return;
  }
  if (r !== !1) {
    var i = new Sm.SafeSubscriber({
      next: function() {
        i.unsubscribe(), e();
      }
    });
    return Em.innerFrom(r.apply(void 0, UD([], DD(t)))).subscribe(i);
  }
}
var Hs = {};
Object.defineProperty(Hs, "__esModule", { value: !0 });
Hs.shareReplay = void 0;
var BD = zn, WD = Fo;
function VD(e, r, t) {
  var n, i, o, a, u = !1;
  return e && typeof e == "object" ? (n = e.bufferSize, a = n === void 0 ? 1 / 0 : n, i = e.windowTime, r = i === void 0 ? 1 / 0 : i, o = e.refCount, u = o === void 0 ? !1 : o, t = e.scheduler) : a = e ?? 1 / 0, WD.share({
    connector: function() {
      return new BD.ReplaySubject(a, r, t);
    },
    resetOnError: !0,
    resetOnComplete: !1,
    resetOnRefCountZero: u
  });
}
Hs.shareReplay = VD;
var zs = {};
Object.defineProperty(zs, "__esModule", { value: !0 });
zs.single = void 0;
var qD = Wt, HD = go, zD = bo, YD = W, GD = z;
function KD(e) {
  return YD.operate(function(r, t) {
    var n = !1, i, o = !1, a = 0;
    r.subscribe(GD.createOperatorSubscriber(t, function(u) {
      o = !0, (!e || e(u, a++, r)) && (n && t.error(new HD.SequenceError("Too many matching values")), n = !0, i = u);
    }, function() {
      n ? (t.next(i), t.complete()) : t.error(o ? new zD.NotFoundError("No matching values") : new qD.EmptyError());
    }));
  });
}
zs.single = KD;
var Ys = {};
Object.defineProperty(Ys, "__esModule", { value: !0 });
Ys.skip = void 0;
var ZD = ar;
function QD(e) {
  return ZD.filter(function(r, t) {
    return e <= t;
  });
}
Ys.skip = QD;
var Gs = {};
Object.defineProperty(Gs, "__esModule", { value: !0 });
Gs.skipLast = void 0;
var XD = Ye, JD = W, eU = z;
function tU(e) {
  return e <= 0 ? XD.identity : JD.operate(function(r, t) {
    var n = new Array(e), i = 0;
    return r.subscribe(eU.createOperatorSubscriber(t, function(o) {
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
Gs.skipLast = tU;
var Ks = {};
Object.defineProperty(Ks, "__esModule", { value: !0 });
Ks.skipUntil = void 0;
var rU = W, Lv = z, nU = K, iU = ze;
function oU(e) {
  return rU.operate(function(r, t) {
    var n = !1, i = Lv.createOperatorSubscriber(t, function() {
      i == null || i.unsubscribe(), n = !0;
    }, iU.noop);
    nU.innerFrom(e).subscribe(i), r.subscribe(Lv.createOperatorSubscriber(t, function(o) {
      return n && t.next(o);
    }));
  });
}
Ks.skipUntil = oU;
var Zs = {};
Object.defineProperty(Zs, "__esModule", { value: !0 });
Zs.skipWhile = void 0;
var aU = W, uU = z;
function sU(e) {
  return aU.operate(function(r, t) {
    var n = !1, i = 0;
    r.subscribe(uU.createOperatorSubscriber(t, function(o) {
      return (n || (n = !e(o, i++))) && t.next(o);
    }));
  });
}
Zs.skipWhile = sU;
var Qs = {};
Object.defineProperty(Qs, "__esModule", { value: !0 });
Qs.startWith = void 0;
var xv = on, cU = Fe, lU = W;
function fU() {
  for (var e = [], r = 0; r < arguments.length; r++)
    e[r] = arguments[r];
  var t = cU.popScheduler(e);
  return lU.operate(function(n, i) {
    (t ? xv.concat(e, n, t) : xv.concat(e, n)).subscribe(i);
  });
}
Qs.startWith = fU;
var Xs = {}, fn = {};
Object.defineProperty(fn, "__esModule", { value: !0 });
fn.switchMap = void 0;
var dU = K, hU = W, Fv = z;
function vU(e, r) {
  return hU.operate(function(t, n) {
    var i = null, o = 0, a = !1, u = function() {
      return a && !i && n.complete();
    };
    t.subscribe(Fv.createOperatorSubscriber(n, function(c) {
      i == null || i.unsubscribe();
      var s = 0, l = o++;
      dU.innerFrom(e(c, l)).subscribe(i = Fv.createOperatorSubscriber(n, function(f) {
        return n.next(r ? r(c, f, l, s++) : f);
      }, function() {
        i = null, u();
      }));
    }, function() {
      a = !0, u();
    }));
  });
}
fn.switchMap = vU;
Object.defineProperty(Xs, "__esModule", { value: !0 });
Xs.switchAll = void 0;
var pU = fn, _U = Ye;
function yU() {
  return pU.switchMap(_U.identity);
}
Xs.switchAll = yU;
var Js = {};
Object.defineProperty(Js, "__esModule", { value: !0 });
Js.switchMapTo = void 0;
var Bv = fn, mU = _e;
function bU(e, r) {
  return mU.isFunction(r) ? Bv.switchMap(function() {
    return e;
  }, r) : Bv.switchMap(function() {
    return e;
  });
}
Js.switchMapTo = bU;
var ec = {};
Object.defineProperty(ec, "__esModule", { value: !0 });
ec.switchScan = void 0;
var gU = fn, OU = W;
function wU(e, r) {
  return OU.operate(function(t, n) {
    var i = r;
    return gU.switchMap(function(o, a) {
      return e(i, o, a);
    }, function(o, a) {
      return i = a, a;
    })(t).subscribe(n), function() {
      i = null;
    };
  });
}
ec.switchScan = wU;
var tc = {};
Object.defineProperty(tc, "__esModule", { value: !0 });
tc.takeUntil = void 0;
var EU = W, SU = z, TU = K, PU = ze;
function IU(e) {
  return EU.operate(function(r, t) {
    TU.innerFrom(e).subscribe(SU.createOperatorSubscriber(t, function() {
      return t.complete();
    }, PU.noop)), !t.closed && r.subscribe(t);
  });
}
tc.takeUntil = IU;
var rc = {};
Object.defineProperty(rc, "__esModule", { value: !0 });
rc.takeWhile = void 0;
var AU = W, RU = z;
function CU(e, r) {
  return r === void 0 && (r = !1), AU.operate(function(t, n) {
    var i = 0;
    t.subscribe(RU.createOperatorSubscriber(n, function(o) {
      var a = e(o, i++);
      (a || r) && n.next(o), !a && n.complete();
    }));
  });
}
rc.takeWhile = CU;
var nc = {};
Object.defineProperty(nc, "__esModule", { value: !0 });
nc.tap = void 0;
var $U = _e, jU = W, NU = z, MU = Ye;
function kU(e, r, t) {
  var n = $U.isFunction(e) || r || t ? { next: e, error: r, complete: t } : e;
  return n ? jU.operate(function(i, o) {
    var a;
    (a = n.subscribe) === null || a === void 0 || a.call(n);
    var u = !0;
    i.subscribe(NU.createOperatorSubscriber(o, function(c) {
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
  }) : MU.identity;
}
nc.tap = kU;
var td = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.throttle = e.defaultThrottleConfig = void 0;
  var r = W, t = z, n = K;
  e.defaultThrottleConfig = {
    leading: !0,
    trailing: !1
  };
  function i(o, a) {
    return a === void 0 && (a = e.defaultThrottleConfig), r.operate(function(u, c) {
      var s = a.leading, l = a.trailing, f = !1, y = null, b = null, g = !1, S = function() {
        b == null || b.unsubscribe(), b = null, l && ($(), g && c.complete());
      }, P = function() {
        b = null, g && c.complete();
      }, I = function(j) {
        return b = n.innerFrom(o(j)).subscribe(t.createOperatorSubscriber(c, S, P));
      }, $ = function() {
        if (f) {
          f = !1;
          var j = y;
          y = null, c.next(j), !g && I(j);
        }
      };
      u.subscribe(t.createOperatorSubscriber(c, function(j) {
        f = !0, y = j, !(b && !b.closed) && (s ? $() : I(j));
      }, function() {
        g = !0, !(l && f && b && !b.closed) && c.complete();
      }));
    });
  }
  e.throttle = i;
})(td);
var ic = {};
Object.defineProperty(ic, "__esModule", { value: !0 });
ic.throttleTime = void 0;
var DU = ft, Wv = td, UU = Ht;
function LU(e, r, t) {
  r === void 0 && (r = DU.asyncScheduler), t === void 0 && (t = Wv.defaultThrottleConfig);
  var n = UU.timer(e, r);
  return Wv.throttle(function() {
    return n;
  }, t);
}
ic.throttleTime = LU;
var kn = {};
Object.defineProperty(kn, "__esModule", { value: !0 });
kn.TimeInterval = kn.timeInterval = void 0;
var xU = ft, FU = W, BU = z;
function WU(e) {
  return e === void 0 && (e = xU.asyncScheduler), FU.operate(function(r, t) {
    var n = e.now();
    r.subscribe(BU.createOperatorSubscriber(t, function(i) {
      var o = e.now(), a = o - n;
      n = o, t.next(new Tm(i, a));
    }));
  });
}
kn.timeInterval = WU;
var Tm = function() {
  function e(r, t) {
    this.value = r, this.interval = t;
  }
  return e;
}();
kn.TimeInterval = Tm;
var oc = {};
Object.defineProperty(oc, "__esModule", { value: !0 });
oc.timeoutWith = void 0;
var VU = ft, qU = Qn, HU = Ba;
function zU(e, r, t) {
  var n, i, o;
  if (t = t ?? VU.async, qU.isValidDate(e) ? n = e : typeof e == "number" && (i = e), r)
    o = function() {
      return r;
    };
  else
    throw new TypeError("No observable provided to switch to");
  if (n == null && i == null)
    throw new TypeError("No timeout provided.");
  return HU.timeout({
    first: n,
    each: i,
    scheduler: t,
    with: o
  });
}
oc.timeoutWith = zU;
var ac = {};
Object.defineProperty(ac, "__esModule", { value: !0 });
ac.timestamp = void 0;
var YU = pu, GU = qt;
function KU(e) {
  return e === void 0 && (e = YU.dateTimestampProvider), GU.map(function(r) {
    return { value: r, timestamp: e.now() };
  });
}
ac.timestamp = KU;
var uc = {};
Object.defineProperty(uc, "__esModule", { value: !0 });
uc.window = void 0;
var Vv = De, ZU = W, qv = z, QU = ze, XU = K;
function JU(e) {
  return ZU.operate(function(r, t) {
    var n = new Vv.Subject();
    t.next(n.asObservable());
    var i = function(o) {
      n.error(o), t.error(o);
    };
    return r.subscribe(qv.createOperatorSubscriber(t, function(o) {
      return n == null ? void 0 : n.next(o);
    }, function() {
      n.complete(), t.complete();
    }, i)), XU.innerFrom(e).subscribe(qv.createOperatorSubscriber(t, function() {
      n.complete(), t.next(n = new Vv.Subject());
    }, QU.noop, i)), function() {
      n == null || n.unsubscribe(), n = null;
    };
  });
}
uc.window = JU;
var sc = {}, eL = h && h.__values || function(e) {
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
Object.defineProperty(sc, "__esModule", { value: !0 });
sc.windowCount = void 0;
var Hv = De, tL = W, rL = z;
function nL(e, r) {
  r === void 0 && (r = 0);
  var t = r > 0 ? r : e;
  return tL.operate(function(n, i) {
    var o = [new Hv.Subject()], a = 0;
    i.next(o[0].asObservable()), n.subscribe(rL.createOperatorSubscriber(i, function(u) {
      var c, s;
      try {
        for (var l = eL(o), f = l.next(); !f.done; f = l.next()) {
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
        var g = new Hv.Subject();
        o.push(g), i.next(g.asObservable());
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
sc.windowCount = nL;
var cc = {};
Object.defineProperty(cc, "__esModule", { value: !0 });
cc.windowTime = void 0;
var iL = De, oL = ft, aL = qe, uL = W, sL = z, cL = Rt, lL = Fe, zv = $t;
function fL(e) {
  for (var r, t, n = [], i = 1; i < arguments.length; i++)
    n[i - 1] = arguments[i];
  var o = (r = lL.popScheduler(n)) !== null && r !== void 0 ? r : oL.asyncScheduler, a = (t = n[0]) !== null && t !== void 0 ? t : null, u = n[1] || 1 / 0;
  return uL.operate(function(c, s) {
    var l = [], f = !1, y = function(P) {
      var I = P.window, $ = P.subs;
      I.complete(), $.unsubscribe(), cL.arrRemove(l, P), f && b();
    }, b = function() {
      if (l) {
        var P = new aL.Subscription();
        s.add(P);
        var I = new iL.Subject(), $ = {
          window: I,
          subs: P,
          seen: 0
        };
        l.push($), s.next(I.asObservable()), zv.executeSchedule(P, o, function() {
          return y($);
        }, e);
      }
    };
    a !== null && a >= 0 ? zv.executeSchedule(s, o, b, a, !0) : f = !0, b();
    var g = function(P) {
      return l.slice().forEach(P);
    }, S = function(P) {
      g(function(I) {
        var $ = I.window;
        return P($);
      }), P(s), s.unsubscribe();
    };
    return c.subscribe(sL.createOperatorSubscriber(s, function(P) {
      g(function(I) {
        I.window.next(P), u <= ++I.seen && y(I);
      });
    }, function() {
      return S(function(P) {
        return P.complete();
      });
    }, function(P) {
      return S(function(I) {
        return I.error(P);
      });
    })), function() {
      l = null;
    };
  });
}
cc.windowTime = fL;
var lc = {}, dL = h && h.__values || function(e) {
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
Object.defineProperty(lc, "__esModule", { value: !0 });
lc.windowToggle = void 0;
var hL = De, vL = qe, pL = W, Yv = K, Pl = z, Gv = ze, _L = Rt;
function yL(e, r) {
  return pL.operate(function(t, n) {
    var i = [], o = function(a) {
      for (; 0 < i.length; )
        i.shift().error(a);
      n.error(a);
    };
    Yv.innerFrom(e).subscribe(Pl.createOperatorSubscriber(n, function(a) {
      var u = new hL.Subject();
      i.push(u);
      var c = new vL.Subscription(), s = function() {
        _L.arrRemove(i, u), u.complete(), c.unsubscribe();
      }, l;
      try {
        l = Yv.innerFrom(r(a));
      } catch (f) {
        o(f);
        return;
      }
      n.next(u.asObservable()), c.add(l.subscribe(Pl.createOperatorSubscriber(n, s, Gv.noop, o)));
    }, Gv.noop)), t.subscribe(Pl.createOperatorSubscriber(n, function(a) {
      var u, c, s = i.slice();
      try {
        for (var l = dL(s), f = l.next(); !f.done; f = l.next()) {
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
lc.windowToggle = yL;
var fc = {};
Object.defineProperty(fc, "__esModule", { value: !0 });
fc.windowWhen = void 0;
var mL = De, bL = W, Kv = z, gL = K;
function OL(e) {
  return bL.operate(function(r, t) {
    var n, i, o = function(u) {
      n.error(u), t.error(u);
    }, a = function() {
      i == null || i.unsubscribe(), n == null || n.complete(), n = new mL.Subject(), t.next(n.asObservable());
      var u;
      try {
        u = gL.innerFrom(e());
      } catch (c) {
        o(c);
        return;
      }
      u.subscribe(i = Kv.createOperatorSubscriber(t, a, a, o));
    };
    a(), r.subscribe(Kv.createOperatorSubscriber(t, function(u) {
      return n.next(u);
    }, function() {
      n.complete(), t.complete();
    }, o, function() {
      i == null || i.unsubscribe(), n = null;
    }));
  });
}
fc.windowWhen = OL;
var dc = {}, Zv = h && h.__read || function(e, r) {
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
}, Qv = h && h.__spreadArray || function(e, r) {
  for (var t = 0, n = r.length, i = e.length; t < n; t++, i++)
    e[i] = r[t];
  return e;
};
Object.defineProperty(dc, "__esModule", { value: !0 });
dc.withLatestFrom = void 0;
var wL = W, Xv = z, EL = K, SL = Ye, TL = ze, PL = Fe;
function IL() {
  for (var e = [], r = 0; r < arguments.length; r++)
    e[r] = arguments[r];
  var t = PL.popResultSelector(e);
  return wL.operate(function(n, i) {
    for (var o = e.length, a = new Array(o), u = e.map(function() {
      return !1;
    }), c = !1, s = function(f) {
      EL.innerFrom(e[f]).subscribe(Xv.createOperatorSubscriber(i, function(y) {
        a[f] = y, !c && !u[f] && (u[f] = !0, (c = u.every(SL.identity)) && (u = null));
      }, TL.noop));
    }, l = 0; l < o; l++)
      s(l);
    n.subscribe(Xv.createOperatorSubscriber(i, function(f) {
      if (c) {
        var y = Qv([f], Zv(a));
        i.next(t ? t.apply(void 0, Qv([], Zv(y))) : y);
      }
    }));
  });
}
dc.withLatestFrom = IL;
var hc = {};
Object.defineProperty(hc, "__esModule", { value: !0 });
hc.zipAll = void 0;
var AL = ei, RL = Ao;
function CL(e) {
  return RL.joinAllInternals(AL.zip, e);
}
hc.zipAll = CL;
var vc = {}, pc = {}, $L = h && h.__read || function(e, r) {
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
}, jL = h && h.__spreadArray || function(e, r) {
  for (var t = 0, n = r.length, i = e.length; t < n; t++, i++)
    e[i] = r[t];
  return e;
};
Object.defineProperty(pc, "__esModule", { value: !0 });
pc.zip = void 0;
var NL = ei, ML = W;
function kL() {
  for (var e = [], r = 0; r < arguments.length; r++)
    e[r] = arguments[r];
  return ML.operate(function(t, n) {
    NL.zip.apply(void 0, jL([t], $L(e))).subscribe(n);
  });
}
pc.zip = kL;
var DL = h && h.__read || function(e, r) {
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
}, UL = h && h.__spreadArray || function(e, r) {
  for (var t = 0, n = r.length, i = e.length; t < n; t++, i++)
    e[i] = r[t];
  return e;
};
Object.defineProperty(vc, "__esModule", { value: !0 });
vc.zipWith = void 0;
var LL = pc;
function xL() {
  for (var e = [], r = 0; r < arguments.length; r++)
    e[r] = arguments[r];
  return LL.zip.apply(void 0, UL([], DL(e)));
}
vc.zipWith = xL;
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
  var a = vu;
  Object.defineProperty(e, "animationFrames", { enumerable: !0, get: function() {
    return a.animationFrames;
  } });
  var u = De;
  Object.defineProperty(e, "Subject", { enumerable: !0, get: function() {
    return u.Subject;
  } });
  var c = ao;
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
  var f = Ky;
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
  var b = Xy;
  Object.defineProperty(e, "queue", { enumerable: !0, get: function() {
    return b.queue;
  } }), Object.defineProperty(e, "queueScheduler", { enumerable: !0, get: function() {
    return b.queueScheduler;
  } });
  var g = Jy;
  Object.defineProperty(e, "animationFrame", { enumerable: !0, get: function() {
    return g.animationFrame;
  } }), Object.defineProperty(e, "animationFrameScheduler", { enumerable: !0, get: function() {
    return g.animationFrameScheduler;
  } });
  var S = Nn;
  Object.defineProperty(e, "VirtualTimeScheduler", { enumerable: !0, get: function() {
    return S.VirtualTimeScheduler;
  } }), Object.defineProperty(e, "VirtualAction", { enumerable: !0, get: function() {
    return S.VirtualAction;
  } });
  var P = uo;
  Object.defineProperty(e, "Scheduler", { enumerable: !0, get: function() {
    return P.Scheduler;
  } });
  var I = qe;
  Object.defineProperty(e, "Subscription", { enumerable: !0, get: function() {
    return I.Subscription;
  } });
  var $ = Hn;
  Object.defineProperty(e, "Subscriber", { enumerable: !0, get: function() {
    return $.Subscriber;
  } });
  var j = Eu;
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
  var ee = Au;
  Object.defineProperty(e, "isObservable", { enumerable: !0, get: function() {
    return ee.isObservable;
  } });
  var le = Ru;
  Object.defineProperty(e, "lastValueFrom", { enumerable: !0, get: function() {
    return le.lastValueFrom;
  } });
  var me = Cu;
  Object.defineProperty(e, "firstValueFrom", { enumerable: !0, get: function() {
    return me.firstValueFrom;
  } });
  var Me = mo;
  Object.defineProperty(e, "ArgumentOutOfRangeError", { enumerable: !0, get: function() {
    return Me.ArgumentOutOfRangeError;
  } });
  var Pe = Wt;
  Object.defineProperty(e, "EmptyError", { enumerable: !0, get: function() {
    return Pe.EmptyError;
  } });
  var Ue = bo;
  Object.defineProperty(e, "NotFoundError", { enumerable: !0, get: function() {
    return Ue.NotFoundError;
  } });
  var be = oo;
  Object.defineProperty(e, "ObjectUnsubscribedError", { enumerable: !0, get: function() {
    return be.ObjectUnsubscribedError;
  } });
  var he = go;
  Object.defineProperty(e, "SequenceError", { enumerable: !0, get: function() {
    return he.SequenceError;
  } });
  var q = Ba;
  Object.defineProperty(e, "TimeoutError", { enumerable: !0, get: function() {
    return q.TimeoutError;
  } });
  var re = ro;
  Object.defineProperty(e, "UnsubscriptionError", { enumerable: !0, get: function() {
    return re.UnsubscriptionError;
  } });
  var ne = $u;
  Object.defineProperty(e, "bindCallback", { enumerable: !0, get: function() {
    return ne.bindCallback;
  } });
  var G = ju;
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
  var Q = Nu;
  Object.defineProperty(e, "connectable", { enumerable: !0, get: function() {
    return Q.connectable;
  } });
  var F = un;
  Object.defineProperty(e, "defer", { enumerable: !0, get: function() {
    return F.defer;
  } });
  var Ie = It;
  Object.defineProperty(e, "empty", { enumerable: !0, get: function() {
    return Ie.empty;
  } });
  var R = Mu;
  Object.defineProperty(e, "forkJoin", { enumerable: !0, get: function() {
    return R.forkJoin;
  } });
  var D = Ct;
  Object.defineProperty(e, "from", { enumerable: !0, get: function() {
    return D.from;
  } });
  var V = ku;
  Object.defineProperty(e, "fromEvent", { enumerable: !0, get: function() {
    return V.fromEvent;
  } });
  var Z = Du;
  Object.defineProperty(e, "fromEventPattern", { enumerable: !0, get: function() {
    return Z.fromEventPattern;
  } });
  var X = Uu;
  Object.defineProperty(e, "generate", { enumerable: !0, get: function() {
    return X.generate;
  } });
  var ke = Lu;
  Object.defineProperty(e, "iif", { enumerable: !0, get: function() {
    return ke.iif;
  } });
  var ut = So;
  Object.defineProperty(e, "interval", { enumerable: !0, get: function() {
    return ut.interval;
  } });
  var Mt = xu;
  Object.defineProperty(e, "merge", { enumerable: !0, get: function() {
    return Mt.merge;
  } });
  var gt = pf;
  Object.defineProperty(e, "never", { enumerable: !0, get: function() {
    return gt.never;
  } });
  var Ve = Gn;
  Object.defineProperty(e, "of", { enumerable: !0, get: function() {
    return Ve.of;
  } });
  var Ot = To;
  Object.defineProperty(e, "onErrorResumeNext", { enumerable: !0, get: function() {
    return Ot.onErrorResumeNext;
  } });
  var hi = Fu;
  Object.defineProperty(e, "pairs", { enumerable: !0, get: function() {
    return hi.pairs;
  } });
  var O = Bu;
  Object.defineProperty(e, "partition", { enumerable: !0, get: function() {
    return O.partition;
  } });
  var p = Yr;
  Object.defineProperty(e, "race", { enumerable: !0, get: function() {
    return p.race;
  } });
  var _ = Vu;
  Object.defineProperty(e, "range", { enumerable: !0, get: function() {
    return _.range;
  } });
  var E = yo;
  Object.defineProperty(e, "throwError", { enumerable: !0, get: function() {
    return E.throwError;
  } });
  var A = Ht;
  Object.defineProperty(e, "timer", { enumerable: !0, get: function() {
    return A.timer;
  } });
  var U = qu;
  Object.defineProperty(e, "using", { enumerable: !0, get: function() {
    return U.using;
  } });
  var x = ei;
  Object.defineProperty(e, "zip", { enumerable: !0, get: function() {
    return x.zip;
  } });
  var oe = so;
  Object.defineProperty(e, "scheduled", { enumerable: !0, get: function() {
    return oe.scheduled;
  } });
  var pe = It;
  Object.defineProperty(e, "EMPTY", { enumerable: !0, get: function() {
    return pe.EMPTY;
  } });
  var ue = pf;
  Object.defineProperty(e, "NEVER", { enumerable: !0, get: function() {
    return ue.NEVER;
  } }), t(_m, e);
  var Le = Er;
  Object.defineProperty(e, "config", { enumerable: !0, get: function() {
    return Le.config;
  } });
  var m = Po;
  Object.defineProperty(e, "audit", { enumerable: !0, get: function() {
    return m.audit;
  } });
  var d = Hu;
  Object.defineProperty(e, "auditTime", { enumerable: !0, get: function() {
    return d.auditTime;
  } });
  var v = zu;
  Object.defineProperty(e, "buffer", { enumerable: !0, get: function() {
    return v.buffer;
  } });
  var w = Yu;
  Object.defineProperty(e, "bufferCount", { enumerable: !0, get: function() {
    return w.bufferCount;
  } });
  var T = Gu;
  Object.defineProperty(e, "bufferTime", { enumerable: !0, get: function() {
    return T.bufferTime;
  } });
  var C = Ku;
  Object.defineProperty(e, "bufferToggle", { enumerable: !0, get: function() {
    return C.bufferToggle;
  } });
  var N = Zu;
  Object.defineProperty(e, "bufferWhen", { enumerable: !0, get: function() {
    return N.bufferWhen;
  } });
  var ie = Qu;
  Object.defineProperty(e, "catchError", { enumerable: !0, get: function() {
    return ie.catchError;
  } });
  var Re = Xu;
  Object.defineProperty(e, "combineAll", { enumerable: !0, get: function() {
    return Re.combineAll;
  } });
  var Se = Io;
  Object.defineProperty(e, "combineLatestAll", { enumerable: !0, get: function() {
    return Se.combineLatestAll;
  } });
  var Ce = Ju;
  Object.defineProperty(e, "combineLatestWith", { enumerable: !0, get: function() {
    return Ce.combineLatestWith;
  } });
  var ge = Xn;
  Object.defineProperty(e, "concatAll", { enumerable: !0, get: function() {
    return ge.concatAll;
  } });
  var tg = $o;
  Object.defineProperty(e, "concatMap", { enumerable: !0, get: function() {
    return tg.concatMap;
  } });
  var rg = ts;
  Object.defineProperty(e, "concatMapTo", { enumerable: !0, get: function() {
    return rg.concatMapTo;
  } });
  var ng = rs;
  Object.defineProperty(e, "concatWith", { enumerable: !0, get: function() {
    return ng.concatWith;
  } });
  var ig = ti;
  Object.defineProperty(e, "connect", { enumerable: !0, get: function() {
    return ig.connect;
  } });
  var og = os;
  Object.defineProperty(e, "count", { enumerable: !0, get: function() {
    return og.count;
  } });
  var ag = as;
  Object.defineProperty(e, "debounce", { enumerable: !0, get: function() {
    return ag.debounce;
  } });
  var ug = us;
  Object.defineProperty(e, "debounceTime", { enumerable: !0, get: function() {
    return ug.debounceTime;
  } });
  var sg = sn;
  Object.defineProperty(e, "defaultIfEmpty", { enumerable: !0, get: function() {
    return sg.defaultIfEmpty;
  } });
  var cg = ss;
  Object.defineProperty(e, "delay", { enumerable: !0, get: function() {
    return cg.delay;
  } });
  var lg = jo;
  Object.defineProperty(e, "delayWhen", { enumerable: !0, get: function() {
    return lg.delayWhen;
  } });
  var fg = cs;
  Object.defineProperty(e, "dematerialize", { enumerable: !0, get: function() {
    return fg.dematerialize;
  } });
  var dg = ls;
  Object.defineProperty(e, "distinct", { enumerable: !0, get: function() {
    return dg.distinct;
  } });
  var hg = ko;
  Object.defineProperty(e, "distinctUntilChanged", { enumerable: !0, get: function() {
    return hg.distinctUntilChanged;
  } });
  var vg = fs;
  Object.defineProperty(e, "distinctUntilKeyChanged", { enumerable: !0, get: function() {
    return vg.distinctUntilKeyChanged;
  } });
  var pg = ds;
  Object.defineProperty(e, "elementAt", { enumerable: !0, get: function() {
    return pg.elementAt;
  } });
  var _g = hs;
  Object.defineProperty(e, "endWith", { enumerable: !0, get: function() {
    return _g.endWith;
  } });
  var yg = vs;
  Object.defineProperty(e, "every", { enumerable: !0, get: function() {
    return yg.every;
  } });
  var mg = ps;
  Object.defineProperty(e, "exhaust", { enumerable: !0, get: function() {
    return mg.exhaust;
  } });
  var bg = Do;
  Object.defineProperty(e, "exhaustAll", { enumerable: !0, get: function() {
    return bg.exhaustAll;
  } });
  var gg = Uo;
  Object.defineProperty(e, "exhaustMap", { enumerable: !0, get: function() {
    return gg.exhaustMap;
  } });
  var Og = _s;
  Object.defineProperty(e, "expand", { enumerable: !0, get: function() {
    return Og.expand;
  } });
  var wg = ar;
  Object.defineProperty(e, "filter", { enumerable: !0, get: function() {
    return wg.filter;
  } });
  var Eg = ys;
  Object.defineProperty(e, "finalize", { enumerable: !0, get: function() {
    return Eg.finalize;
  } });
  var Sg = Gr;
  Object.defineProperty(e, "find", { enumerable: !0, get: function() {
    return Sg.find;
  } });
  var Tg = ms;
  Object.defineProperty(e, "findIndex", { enumerable: !0, get: function() {
    return Tg.findIndex;
  } });
  var Pg = bs;
  Object.defineProperty(e, "first", { enumerable: !0, get: function() {
    return Pg.first;
  } });
  var Ig = gs;
  Object.defineProperty(e, "groupBy", { enumerable: !0, get: function() {
    return Ig.groupBy;
  } });
  var Ag = No;
  Object.defineProperty(e, "ignoreElements", { enumerable: !0, get: function() {
    return Ag.ignoreElements;
  } });
  var Rg = Os;
  Object.defineProperty(e, "isEmpty", { enumerable: !0, get: function() {
    return Rg.isEmpty;
  } });
  var Cg = ws;
  Object.defineProperty(e, "last", { enumerable: !0, get: function() {
    return Cg.last;
  } });
  var $g = qt;
  Object.defineProperty(e, "map", { enumerable: !0, get: function() {
    return $g.map;
  } });
  var jg = Mo;
  Object.defineProperty(e, "mapTo", { enumerable: !0, get: function() {
    return jg.mapTo;
  } });
  var Ng = Es;
  Object.defineProperty(e, "materialize", { enumerable: !0, get: function() {
    return Ng.materialize;
  } });
  var Mg = Ss;
  Object.defineProperty(e, "max", { enumerable: !0, get: function() {
    return Mg.max;
  } });
  var kg = an;
  Object.defineProperty(e, "mergeAll", { enumerable: !0, get: function() {
    return kg.mergeAll;
  } });
  var Dg = Ts;
  Object.defineProperty(e, "flatMap", { enumerable: !0, get: function() {
    return Dg.flatMap;
  } });
  var Ug = jt;
  Object.defineProperty(e, "mergeMap", { enumerable: !0, get: function() {
    return Ug.mergeMap;
  } });
  var Lg = Ps;
  Object.defineProperty(e, "mergeMapTo", { enumerable: !0, get: function() {
    return Lg.mergeMapTo;
  } });
  var xg = Is;
  Object.defineProperty(e, "mergeScan", { enumerable: !0, get: function() {
    return xg.mergeScan;
  } });
  var Fg = As;
  Object.defineProperty(e, "mergeWith", { enumerable: !0, get: function() {
    return Fg.mergeWith;
  } });
  var Bg = Cs;
  Object.defineProperty(e, "min", { enumerable: !0, get: function() {
    return Bg.min;
  } });
  var Wg = ri;
  Object.defineProperty(e, "multicast", { enumerable: !0, get: function() {
    return Wg.multicast;
  } });
  var Vg = rn;
  Object.defineProperty(e, "observeOn", { enumerable: !0, get: function() {
    return Vg.observeOn;
  } });
  var qg = Mn;
  Object.defineProperty(e, "onErrorResumeNextWith", { enumerable: !0, get: function() {
    return qg.onErrorResumeNextWith;
  } });
  var Hg = $s;
  Object.defineProperty(e, "pairwise", { enumerable: !0, get: function() {
    return Hg.pairwise;
  } });
  var zg = js;
  Object.defineProperty(e, "pluck", { enumerable: !0, get: function() {
    return zg.pluck;
  } });
  var Yg = Ns;
  Object.defineProperty(e, "publish", { enumerable: !0, get: function() {
    return Yg.publish;
  } });
  var Gg = Ms;
  Object.defineProperty(e, "publishBehavior", { enumerable: !0, get: function() {
    return Gg.publishBehavior;
  } });
  var Kg = ks;
  Object.defineProperty(e, "publishLast", { enumerable: !0, get: function() {
    return Kg.publishLast;
  } });
  var Zg = Ds;
  Object.defineProperty(e, "publishReplay", { enumerable: !0, get: function() {
    return Zg.publishReplay;
  } });
  var Qg = Us;
  Object.defineProperty(e, "raceWith", { enumerable: !0, get: function() {
    return Qg.raceWith;
  } });
  var Xg = Pr;
  Object.defineProperty(e, "reduce", { enumerable: !0, get: function() {
    return Xg.reduce;
  } });
  var Jg = Ls;
  Object.defineProperty(e, "repeat", { enumerable: !0, get: function() {
    return Jg.repeat;
  } });
  var eO = xs;
  Object.defineProperty(e, "repeatWhen", { enumerable: !0, get: function() {
    return eO.repeatWhen;
  } });
  var tO = Fs;
  Object.defineProperty(e, "retry", { enumerable: !0, get: function() {
    return tO.retry;
  } });
  var rO = Bs;
  Object.defineProperty(e, "retryWhen", { enumerable: !0, get: function() {
    return rO.retryWhen;
  } });
  var nO = io;
  Object.defineProperty(e, "refCount", { enumerable: !0, get: function() {
    return nO.refCount;
  } });
  var iO = xo;
  Object.defineProperty(e, "sample", { enumerable: !0, get: function() {
    return iO.sample;
  } });
  var oO = Ws;
  Object.defineProperty(e, "sampleTime", { enumerable: !0, get: function() {
    return oO.sampleTime;
  } });
  var aO = Vs;
  Object.defineProperty(e, "scan", { enumerable: !0, get: function() {
    return aO.scan;
  } });
  var uO = qs;
  Object.defineProperty(e, "sequenceEqual", { enumerable: !0, get: function() {
    return uO.sequenceEqual;
  } });
  var sO = Fo;
  Object.defineProperty(e, "share", { enumerable: !0, get: function() {
    return sO.share;
  } });
  var cO = Hs;
  Object.defineProperty(e, "shareReplay", { enumerable: !0, get: function() {
    return cO.shareReplay;
  } });
  var lO = zs;
  Object.defineProperty(e, "single", { enumerable: !0, get: function() {
    return lO.single;
  } });
  var fO = Ys;
  Object.defineProperty(e, "skip", { enumerable: !0, get: function() {
    return fO.skip;
  } });
  var dO = Gs;
  Object.defineProperty(e, "skipLast", { enumerable: !0, get: function() {
    return dO.skipLast;
  } });
  var hO = Ks;
  Object.defineProperty(e, "skipUntil", { enumerable: !0, get: function() {
    return hO.skipUntil;
  } });
  var vO = Zs;
  Object.defineProperty(e, "skipWhile", { enumerable: !0, get: function() {
    return vO.skipWhile;
  } });
  var pO = Qs;
  Object.defineProperty(e, "startWith", { enumerable: !0, get: function() {
    return pO.startWith;
  } });
  var _O = nn;
  Object.defineProperty(e, "subscribeOn", { enumerable: !0, get: function() {
    return _O.subscribeOn;
  } });
  var yO = Xs;
  Object.defineProperty(e, "switchAll", { enumerable: !0, get: function() {
    return yO.switchAll;
  } });
  var mO = fn;
  Object.defineProperty(e, "switchMap", { enumerable: !0, get: function() {
    return mO.switchMap;
  } });
  var bO = Js;
  Object.defineProperty(e, "switchMapTo", { enumerable: !0, get: function() {
    return bO.switchMapTo;
  } });
  var gO = ec;
  Object.defineProperty(e, "switchScan", { enumerable: !0, get: function() {
    return gO.switchScan;
  } });
  var OO = cn;
  Object.defineProperty(e, "take", { enumerable: !0, get: function() {
    return OO.take;
  } });
  var wO = Lo;
  Object.defineProperty(e, "takeLast", { enumerable: !0, get: function() {
    return wO.takeLast;
  } });
  var EO = tc;
  Object.defineProperty(e, "takeUntil", { enumerable: !0, get: function() {
    return EO.takeUntil;
  } });
  var SO = rc;
  Object.defineProperty(e, "takeWhile", { enumerable: !0, get: function() {
    return SO.takeWhile;
  } });
  var TO = nc;
  Object.defineProperty(e, "tap", { enumerable: !0, get: function() {
    return TO.tap;
  } });
  var PO = td;
  Object.defineProperty(e, "throttle", { enumerable: !0, get: function() {
    return PO.throttle;
  } });
  var IO = ic;
  Object.defineProperty(e, "throttleTime", { enumerable: !0, get: function() {
    return IO.throttleTime;
  } });
  var AO = ln;
  Object.defineProperty(e, "throwIfEmpty", { enumerable: !0, get: function() {
    return AO.throwIfEmpty;
  } });
  var RO = kn;
  Object.defineProperty(e, "timeInterval", { enumerable: !0, get: function() {
    return RO.timeInterval;
  } });
  var CO = Ba;
  Object.defineProperty(e, "timeout", { enumerable: !0, get: function() {
    return CO.timeout;
  } });
  var $O = oc;
  Object.defineProperty(e, "timeoutWith", { enumerable: !0, get: function() {
    return $O.timeoutWith;
  } });
  var jO = ac;
  Object.defineProperty(e, "timestamp", { enumerable: !0, get: function() {
    return jO.timestamp;
  } });
  var NO = Ro;
  Object.defineProperty(e, "toArray", { enumerable: !0, get: function() {
    return NO.toArray;
  } });
  var MO = uc;
  Object.defineProperty(e, "window", { enumerable: !0, get: function() {
    return MO.window;
  } });
  var kO = sc;
  Object.defineProperty(e, "windowCount", { enumerable: !0, get: function() {
    return kO.windowCount;
  } });
  var DO = cc;
  Object.defineProperty(e, "windowTime", { enumerable: !0, get: function() {
    return DO.windowTime;
  } });
  var UO = lc;
  Object.defineProperty(e, "windowToggle", { enumerable: !0, get: function() {
    return UO.windowToggle;
  } });
  var LO = fc;
  Object.defineProperty(e, "windowWhen", { enumerable: !0, get: function() {
    return LO.windowWhen;
  } });
  var xO = dc;
  Object.defineProperty(e, "withLatestFrom", { enumerable: !0, get: function() {
    return xO.withLatestFrom;
  } });
  var FO = hc;
  Object.defineProperty(e, "zipAll", { enumerable: !0, get: function() {
    return FO.zipAll;
  } });
  var BO = vc;
  Object.defineProperty(e, "zipWith", { enumerable: !0, get: function() {
    return BO.zipWith;
  } });
})(to);
function de(e) {
  return typeof e == "function";
}
function Pm(e) {
  return de(e == null ? void 0 : e.lift);
}
function H(e) {
  return function(r) {
    if (Pm(r))
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
var _f = function(e, r) {
  return _f = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, n) {
    t.__proto__ = n;
  } || function(t, n) {
    for (var i in n)
      Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
  }, _f(e, r);
};
function bt(e, r) {
  if (typeof r != "function" && r !== null)
    throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
  _f(e, r);
  function t() {
    this.constructor = e;
  }
  e.prototype = r === null ? Object.create(r) : (t.prototype = r.prototype, new t());
}
function FL(e, r, t, n) {
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
function Im(e, r) {
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
function BL(e, r, t) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var n = t.apply(e, r || []), i, o = [];
  return i = {}, a("next"), a("throw"), a("return"), i[Symbol.asyncIterator] = function() {
    return this;
  }, i;
  function a(y) {
    n[y] && (i[y] = function(b) {
      return new Promise(function(g, S) {
        o.push([y, b, g, S]) > 1 || u(y, b);
      });
    });
  }
  function u(y, b) {
    try {
      c(n[y](b));
    } catch (g) {
      f(o[0][3], g);
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
function WL(e) {
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
var Am = function(e) {
  return e && typeof e.length == "number" && typeof e != "function";
};
function Rm(e) {
  return de(e == null ? void 0 : e.then);
}
function dn(e) {
  var r = function(n) {
    Error.call(n), n.stack = new Error().stack;
  }, t = e(r);
  return t.prototype = Object.create(Error.prototype), t.prototype.constructor = t, t;
}
var Il = dn(function(e) {
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
          o = S instanceof Il ? S.errors : [S];
        }
      var f = this._finalizers;
      if (f) {
        this._finalizers = null;
        try {
          for (var y = ct(f), b = y.next(); !b.done; b = y.next()) {
            var g = b.value;
            try {
              Jv(g);
            } catch (S) {
              o = o ?? [], S instanceof Il ? o = je(je([], $e(o)), $e(S.errors)) : o.push(S);
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
        throw new Il(o);
    }
  }, e.prototype.add = function(r) {
    var t;
    if (r && r !== this)
      if (this.closed)
        Jv(r);
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
}(), Cm = At.EMPTY;
function $m(e) {
  return e instanceof At || e && "closed" in e && de(e.remove) && de(e.add) && de(e.unsubscribe);
}
function Jv(e) {
  de(e) ? e() : e.unsubscribe();
}
var _c = {
  onUnhandledError: null,
  onStoppedNotification: null,
  Promise: void 0,
  useDeprecatedSynchronousErrorHandling: !1,
  useDeprecatedNextContext: !1
}, Wa = {
  setTimeout: function(e, r) {
    for (var t = [], n = 2; n < arguments.length; n++)
      t[n - 2] = arguments[n];
    var i = Wa.delegate;
    return i != null && i.setTimeout ? i.setTimeout.apply(i, je([e, r], $e(t))) : setTimeout.apply(void 0, je([e, r], $e(t)));
  },
  clearTimeout: function(e) {
    var r = Wa.delegate;
    return ((r == null ? void 0 : r.clearTimeout) || clearTimeout)(e);
  },
  delegate: void 0
};
function jm(e) {
  Wa.setTimeout(function() {
    throw e;
  });
}
function Ze() {
}
var VL = function() {
  return rd("C", void 0, void 0);
}();
function qL(e) {
  return rd("E", void 0, e);
}
function HL(e) {
  return rd("N", e, void 0);
}
function rd(e, r, t) {
  return {
    kind: e,
    value: r,
    error: t
  };
}
var ua = null;
function Ra(e) {
  if (_c.useDeprecatedSynchronousErrorHandling) {
    var r = !ua;
    if (r && (ua = { errorThrown: !1, error: null }), e(), r) {
      var t = ua, n = t.errorThrown, i = t.error;
      if (ua = null, n)
        throw i;
    }
  } else
    e();
}
var nd = function(e) {
  bt(r, e);
  function r(t) {
    var n = e.call(this) || this;
    return n.isStopped = !1, t ? (n.destination = t, $m(t) && t.add(n)) : n.destination = KL, n;
  }
  return r.create = function(t, n, i) {
    return new Bi(t, n, i);
  }, r.prototype.next = function(t) {
    this.isStopped ? Rl(HL(t), this) : this._next(t);
  }, r.prototype.error = function(t) {
    this.isStopped ? Rl(qL(t), this) : (this.isStopped = !0, this._error(t));
  }, r.prototype.complete = function() {
    this.isStopped ? Rl(VL, this) : (this.isStopped = !0, this._complete());
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
}(At), zL = Function.prototype.bind;
function Al(e, r) {
  return zL.call(e, r);
}
var YL = function() {
  function e(r) {
    this.partialObserver = r;
  }
  return e.prototype.next = function(r) {
    var t = this.partialObserver;
    if (t.next)
      try {
        t.next(r);
      } catch (n) {
        sa(n);
      }
  }, e.prototype.error = function(r) {
    var t = this.partialObserver;
    if (t.error)
      try {
        t.error(r);
      } catch (n) {
        sa(n);
      }
    else
      sa(r);
  }, e.prototype.complete = function() {
    var r = this.partialObserver;
    if (r.complete)
      try {
        r.complete();
      } catch (t) {
        sa(t);
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
      o && _c.useDeprecatedNextContext ? (u = Object.create(t), u.unsubscribe = function() {
        return o.unsubscribe();
      }, a = {
        next: t.next && Al(t.next, u),
        error: t.error && Al(t.error, u),
        complete: t.complete && Al(t.complete, u)
      }) : a = t;
    }
    return o.destination = new YL(a), o;
  }
  return r;
}(nd);
function sa(e) {
  jm(e);
}
function GL(e) {
  throw e;
}
function Rl(e, r) {
  var t = _c.onStoppedNotification;
  t && Wa.setTimeout(function() {
    return t(e, r);
  });
}
var KL = {
  closed: !0,
  next: Ze,
  error: GL,
  complete: Ze
}, id = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}();
function ot(e) {
  return e;
}
function Nm() {
  for (var e = [], r = 0; r < arguments.length; r++)
    e[r] = arguments[r];
  return Mm(e);
}
function Mm(e) {
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
    var i = this, o = QL(r) ? r : new Bi(r, t, n);
    return Ra(function() {
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
    return t = ep(t), new t(function(i, o) {
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
  }, e.prototype[id] = function() {
    return this;
  }, e.prototype.pipe = function() {
    for (var r = [], t = 0; t < arguments.length; t++)
      r[t] = arguments[t];
    return Mm(r)(this);
  }, e.prototype.toPromise = function(r) {
    var t = this;
    return r = ep(r), new r(function(n, i) {
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
function ep(e) {
  var r;
  return (r = e ?? _c.Promise) !== null && r !== void 0 ? r : Promise;
}
function ZL(e) {
  return e && de(e.next) && de(e.error) && de(e.complete);
}
function QL(e) {
  return e && e instanceof nd || ZL(e) && $m(e);
}
function km(e) {
  return de(e[id]);
}
function Dm(e) {
  return Symbol.asyncIterator && de(e == null ? void 0 : e[Symbol.asyncIterator]);
}
function Um(e) {
  return new TypeError("You provided " + (e !== null && typeof e == "object" ? "an invalid object" : "'" + e + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
}
function XL() {
  return typeof Symbol != "function" || !Symbol.iterator ? "@@iterator" : Symbol.iterator;
}
var Lm = XL();
function xm(e) {
  return de(e == null ? void 0 : e[Lm]);
}
function Fm(e) {
  return BL(this, arguments, function() {
    var t, n, i, o;
    return Im(this, function(a) {
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
function Bm(e) {
  return de(e == null ? void 0 : e.getReader);
}
function ae(e) {
  if (e instanceof Be)
    return e;
  if (e != null) {
    if (km(e))
      return JL(e);
    if (Am(e))
      return ex(e);
    if (Rm(e))
      return tx(e);
    if (Dm(e))
      return Wm(e);
    if (xm(e))
      return rx(e);
    if (Bm(e))
      return nx(e);
  }
  throw Um(e);
}
function JL(e) {
  return new Be(function(r) {
    var t = e[id]();
    if (de(t.subscribe))
      return t.subscribe(r);
    throw new TypeError("Provided object does not correctly implement Symbol.observable");
  });
}
function ex(e) {
  return new Be(function(r) {
    for (var t = 0; t < e.length && !r.closed; t++)
      r.next(e[t]);
    r.complete();
  });
}
function tx(e) {
  return new Be(function(r) {
    e.then(function(t) {
      r.closed || (r.next(t), r.complete());
    }, function(t) {
      return r.error(t);
    }).then(null, jm);
  });
}
function rx(e) {
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
function Wm(e) {
  return new Be(function(r) {
    ix(e, r).catch(function(t) {
      return r.error(t);
    });
  });
}
function nx(e) {
  return Wm(Fm(e));
}
function ix(e, r) {
  var t, n, i, o;
  return FL(this, void 0, void 0, function() {
    var a, u;
    return Im(this, function(c) {
      switch (c.label) {
        case 0:
          c.trys.push([0, 5, 6, 11]), t = WL(e), c.label = 1;
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
  return new od(e, r, t, n, i);
}
var od = function(e) {
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
}(nd);
function Vm(e) {
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
var ox = function(e) {
  bt(r, e);
  function r(t, n) {
    return e.call(this) || this;
  }
  return r.prototype.schedule = function(t, n) {
    return this;
  }, r;
}(At), Va = {
  setInterval: function(e, r) {
    for (var t = [], n = 2; n < arguments.length; n++)
      t[n - 2] = arguments[n];
    var i = Va.delegate;
    return i != null && i.setInterval ? i.setInterval.apply(i, je([e, r], $e(t))) : setInterval.apply(void 0, je([e, r], $e(t)));
  },
  clearInterval: function(e) {
    var r = Va.delegate;
    return ((r == null ? void 0 : r.clearInterval) || clearInterval)(e);
  },
  delegate: void 0
}, ax = function(e) {
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
    return i === void 0 && (i = 0), Va.setInterval(t.flush.bind(t, this), i);
  }, r.prototype.recycleAsyncId = function(t, n, i) {
    if (i === void 0 && (i = 0), i != null && this.delay === i && this.pending === !1)
      return n;
    n != null && Va.clearInterval(n);
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
}(ox), yc = {
  now: function() {
    return (yc.delegate || Date).now();
  },
  delegate: void 0
}, tp = function() {
  function e(r, t) {
    t === void 0 && (t = e.now), this.schedulerActionCtor = r, this.now = t;
  }
  return e.prototype.schedule = function(r, t, n) {
    return t === void 0 && (t = 0), new this.schedulerActionCtor(this, r).schedule(n, t);
  }, e.now = yc.now, e;
}(), ux = function(e) {
  bt(r, e);
  function r(t, n) {
    n === void 0 && (n = tp.now);
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
}(tp), Nt = new ux(ax), qm = Nt;
function Hm(e) {
  return e && de(e.schedule);
}
function ad(e) {
  return e instanceof Date && !isNaN(e);
}
function ni(e, r, t) {
  e === void 0 && (e = 0), t === void 0 && (t = qm);
  var n = -1;
  return r != null && (Hm(r) ? t = r : n = r), new Be(function(i) {
    var o = ad(e) ? +e - t.now() : e;
    o < 0 && (o = 0);
    var a = 0;
    return t.schedule(function() {
      i.closed || (i.next(a++), 0 <= n ? this.schedule(void 0, n) : i.complete());
    }, o);
  });
}
function sx(e, r) {
  return r === void 0 && (r = Nt), Vm(function() {
    return ni(e, r);
  });
}
function cx(e) {
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
function lx(e, r) {
  return r === void 0 && (r = null), r = r ?? e, H(function(t, n) {
    var i = [], o = 0;
    t.subscribe(B(n, function(a) {
      var u, c, s, l, f = null;
      o++ % r === 0 && i.push([]);
      try {
        for (var y = ct(i), b = y.next(); !b.done; b = y.next()) {
          var g = b.value;
          g.push(a), e <= g.length && (f = f ?? [], f.push(g));
        }
      } catch (I) {
        u = { error: I };
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
            var g = P.value;
            nr(i, g), n.next(g);
          }
        } catch (I) {
          s = { error: I };
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
function ud(e) {
  return e[e.length - 1];
}
function mc(e) {
  return de(ud(e)) ? e.pop() : void 0;
}
function Ir(e) {
  return Hm(ud(e)) ? e.pop() : void 0;
}
function fx(e, r) {
  return typeof ud(e) == "number" ? e.pop() : r;
}
function lt(e, r, t, n, i) {
  n === void 0 && (n = 0), i === void 0 && (i = !1);
  var o = r.schedule(function() {
    t(), i ? e.add(this.schedule(null, n)) : this.unsubscribe();
  }, n);
  if (e.add(o), !i)
    return o;
}
function dx(e) {
  for (var r, t, n = [], i = 1; i < arguments.length; i++)
    n[i - 1] = arguments[i];
  var o = (r = Ir(n)) !== null && r !== void 0 ? r : Nt, a = (t = n[0]) !== null && t !== void 0 ? t : null, u = n[1] || 1 / 0;
  return H(function(c, s) {
    var l = [], f = !1, y = function(S) {
      var P = S.buffer, I = S.subs;
      I.unsubscribe(), nr(l, S), s.next(P), f && b();
    }, b = function() {
      if (l) {
        var S = new At();
        s.add(S);
        var P = [], I = {
          buffer: P,
          subs: S
        };
        l.push(I), lt(S, o, function() {
          return y(I);
        }, e);
      }
    };
    a !== null && a >= 0 ? lt(s, o, b, a, !0) : f = !0, b();
    var g = B(s, function(S) {
      var P, I, $ = l.slice();
      try {
        for (var j = ct($), k = j.next(); !k.done; k = j.next()) {
          var L = k.value, Y = L.buffer;
          Y.push(S), u <= Y.length && y(L);
        }
      } catch (ee) {
        P = { error: ee };
      } finally {
        try {
          k && !k.done && (I = j.return) && I.call(j);
        } finally {
          if (P)
            throw P.error;
        }
      }
    }, function() {
      for (; l != null && l.length; )
        s.next(l.shift().buffer);
      g == null || g.unsubscribe(), s.complete(), s.unsubscribe();
    }, void 0, function() {
      return l = null;
    });
    c.subscribe(g);
  });
}
function hx(e, r) {
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
function vx(e) {
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
function zm(e) {
  return H(function(r, t) {
    var n = null, i = !1, o;
    n = r.subscribe(B(t, void 0, void 0, function(a) {
      o = ae(e(a, zm(e)(r))), n ? (n.unsubscribe(), n = null, o.subscribe(t)) : i = !0;
    })), i && (n.unsubscribe(), n = null, o.subscribe(t));
  });
}
var px = Array.isArray, _x = Object.getPrototypeOf, yx = Object.prototype, mx = Object.keys;
function bx(e) {
  if (e.length === 1) {
    var r = e[0];
    if (px(r))
      return { args: r, keys: null };
    if (gx(r)) {
      var t = mx(r);
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
function gx(e) {
  return e && typeof e == "object" && _x(e) === yx;
}
function sd(e, r) {
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
function cd(e, r) {
  return r === void 0 && (r = 0), H(function(t, n) {
    n.add(e.schedule(function() {
      return t.subscribe(n);
    }, r));
  });
}
function Ox(e, r) {
  return ae(e).pipe(cd(r), sd(r));
}
function wx(e, r) {
  return ae(e).pipe(cd(r), sd(r));
}
function Ex(e, r) {
  return new Be(function(t) {
    var n = 0;
    return r.schedule(function() {
      n === e.length ? t.complete() : (t.next(e[n++]), t.closed || this.schedule());
    });
  });
}
function Sx(e, r) {
  return new Be(function(t) {
    var n;
    return lt(t, r, function() {
      n = e[Lm](), lt(t, r, function() {
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
function Ym(e, r) {
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
function Tx(e, r) {
  return Ym(Fm(e), r);
}
function Px(e, r) {
  if (e != null) {
    if (km(e))
      return Ox(e, r);
    if (Am(e))
      return Ex(e, r);
    if (Rm(e))
      return wx(e, r);
    if (Dm(e))
      return Ym(e, r);
    if (xm(e))
      return Sx(e, r);
    if (Bm(e))
      return Tx(e, r);
  }
  throw Um(e);
}
function ii(e, r) {
  return r ? Px(e, r) : ae(e);
}
function hn(e, r) {
  return H(function(t, n) {
    var i = 0;
    t.subscribe(B(n, function(o) {
      n.next(e.call(r, o, i++));
    }));
  });
}
var Ix = Array.isArray;
function Ax(e, r) {
  return Ix(r) ? e.apply(void 0, je([], $e(r))) : e(r);
}
function ld(e) {
  return hn(function(r) {
    return Ax(e, r);
  });
}
function Rx(e, r) {
  return e.reduce(function(t, n, i) {
    return t[n] = r[i], t;
  }, {});
}
function Cx() {
  for (var e = [], r = 0; r < arguments.length; r++)
    e[r] = arguments[r];
  var t = Ir(e), n = mc(e), i = bx(e), o = i.args, a = i.keys;
  if (o.length === 0)
    return ii([], t);
  var u = new Be(Gm(o, t, a ? function(c) {
    return Rx(a, c);
  } : ot));
  return n ? u.pipe(ld(n)) : u;
}
function Gm(e, r, t) {
  return t === void 0 && (t = ot), function(n) {
    rp(r, function() {
      for (var i = e.length, o = new Array(i), a = i, u = i, c = function(l) {
        rp(r, function() {
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
function rp(e, r, t) {
  e ? lt(t, e, r) : r();
}
function fd(e, r, t, n, i, o, a, u) {
  var c = [], s = 0, l = 0, f = !1, y = function() {
    f && !c.length && !s && r.complete();
  }, b = function(S) {
    return s < n ? g(S) : c.push(S);
  }, g = function(S) {
    o && r.next(S), s++;
    var P = !1;
    ae(t(S, l++)).subscribe(B(r, function(I) {
      i == null || i(I), o ? b(I) : r.next(I);
    }, function() {
      P = !0;
    }, void 0, function() {
      if (P)
        try {
          s--;
          for (var I = function() {
            var $ = c.shift();
            a ? lt(r, a, function() {
              return g($);
            }) : g($);
          }; c.length && s < n; )
            I();
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
function Ft(e, r, t) {
  return t === void 0 && (t = 1 / 0), de(r) ? Ft(function(n, i) {
    return hn(function(o, a) {
      return r(n, o, i, a);
    })(ae(e(n, i)));
  }, t) : (typeof r == "number" && (t = r), H(function(n, i) {
    return fd(n, i, e, t);
  }));
}
function Km(e, r, t, n, i) {
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
function Bo(e, r) {
  return H(Km(e, r, arguments.length >= 2, !1, !0));
}
var $x = function(e, r) {
  return e.push(r), e;
};
function Zm() {
  return H(function(e, r) {
    Bo($x, [])(e).subscribe(r);
  });
}
function Qm(e, r) {
  return Nm(Zm(), Ft(function(t) {
    return e(t);
  }), r ? ld(r) : ot);
}
function Xm(e) {
  return Qm(Cx, e);
}
var jx = Xm, Nx = Array.isArray;
function oi(e) {
  return e.length === 1 && Nx(e[0]) ? e[0] : e;
}
function dd() {
  for (var e = [], r = 0; r < arguments.length; r++)
    e[r] = arguments[r];
  var t = mc(e);
  return t ? Nm(dd.apply(void 0, je([], $e(e))), ld(t)) : H(function(n, i) {
    Gm(je([n], $e(oi(e))))(i);
  });
}
function Mx() {
  for (var e = [], r = 0; r < arguments.length; r++)
    e[r] = arguments[r];
  return dd.apply(void 0, je([], $e(e)));
}
function hd(e) {
  return e === void 0 && (e = 1 / 0), Ft(ot, e);
}
function vd() {
  return hd(1);
}
function Jm() {
  for (var e = [], r = 0; r < arguments.length; r++)
    e[r] = arguments[r];
  var t = Ir(e);
  return H(function(n, i) {
    vd()(ii(je([n], $e(e)), t)).subscribe(i);
  });
}
function yf(e, r) {
  return de(r) ? Ft(e, r, 1) : Ft(e, 1);
}
function kx(e, r) {
  return de(r) ? yf(function() {
    return e;
  }, r) : yf(function() {
    return e;
  });
}
function Dx() {
  for (var e = [], r = 0; r < arguments.length; r++)
    e[r] = arguments[r];
  return Jm.apply(void 0, je([], $e(e)));
}
var Ux = dn(function(e) {
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
    var n = new np(this, this);
    return n.operator = t, n;
  }, r.prototype._throwIfClosed = function() {
    if (this.closed)
      throw new Ux();
  }, r.prototype.next = function(t) {
    var n = this;
    Ra(function() {
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
    Ra(function() {
      if (n._throwIfClosed(), !n.isStopped) {
        n.hasError = n.isStopped = !0, n.thrownError = t;
        for (var i = n.observers; i.length; )
          i.shift().error(t);
      }
    });
  }, r.prototype.complete = function() {
    var t = this;
    Ra(function() {
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
    return o || a ? Cm : (this.currentObservers = null, u.push(t), new At(function() {
      n.currentObservers = null, nr(u, t);
    }));
  }, r.prototype._checkFinalizedStatuses = function(t) {
    var n = this, i = n.hasError, o = n.thrownError, a = n.isStopped;
    i ? t.error(o) : a && t.complete();
  }, r.prototype.asObservable = function() {
    var t = new Be();
    return t.source = this, t;
  }, r.create = function(t, n) {
    return new np(t, n);
  }, r;
}(Be), np = function(e) {
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
    return (i = (n = this.source) === null || n === void 0 ? void 0 : n.subscribe(t)) !== null && i !== void 0 ? i : Cm;
  }, r;
}(Je);
function Lx(e) {
  return new Be(function(r) {
    return e.subscribe(r);
  });
}
var xx = {
  connector: function() {
    return new Je();
  }
};
function pd(e, r) {
  r === void 0 && (r = xx);
  var t = r.connector;
  return H(function(n, i) {
    var o = t();
    ae(e(Lx(o))).subscribe(i), i.add(n.subscribe(o));
  });
}
function Fx(e) {
  return Bo(function(r, t, n) {
    return !e || e(t, n) ? r + 1 : r;
  }, 0);
}
function Bx(e) {
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
function Wx(e, r) {
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
function bc(e) {
  return H(function(r, t) {
    var n = !1;
    r.subscribe(B(t, function(i) {
      n = !0, t.next(i);
    }, function() {
      n || t.next(e), t.complete();
    }));
  });
}
function qa() {
  for (var e = [], r = 0; r < arguments.length; r++)
    e[r] = arguments[r];
  return vd()(ii(e, Ir(e)));
}
var Wo = new Be(function(e) {
  return e.complete();
});
function Wi(e) {
  return e <= 0 ? function() {
    return Wo;
  } : H(function(r, t) {
    var n = 0;
    r.subscribe(B(t, function(i) {
      ++n <= e && (t.next(i), e <= n && t.complete());
    }));
  });
}
function eb() {
  return H(function(e, r) {
    e.subscribe(B(r, Ze));
  });
}
function tb(e) {
  return hn(function() {
    return e;
  });
}
function _d(e, r) {
  return r ? function(t) {
    return qa(r.pipe(Wi(1), eb()), t.pipe(_d(e)));
  } : Ft(function(t, n) {
    return ae(e(t, n)).pipe(Wi(1), tb(t));
  });
}
function Vx(e, r) {
  r === void 0 && (r = Nt);
  var t = ni(e, r);
  return _d(function() {
    return t;
  });
}
function rb() {
  for (var e = [], r = 0; r < arguments.length; r++)
    e[r] = arguments[r];
  var t = Ir(e);
  return ii(e, t);
}
function qx(e, r) {
  var t = de(e) ? e : function() {
    return e;
  }, n = function(i) {
    return i.error(t());
  };
  return new Be(r ? function(i) {
    return r.schedule(n, 0, i);
  } : n);
}
var ip;
(function(e) {
  e.NEXT = "N", e.ERROR = "E", e.COMPLETE = "C";
})(ip || (ip = {}));
var Cl = function() {
  function e(r, t, n) {
    this.kind = r, this.value = t, this.error = n, this.hasValue = r === "N";
  }
  return e.prototype.observe = function(r) {
    return nb(this, r);
  }, e.prototype.do = function(r, t, n) {
    var i = this, o = i.kind, a = i.value, u = i.error;
    return o === "N" ? r == null ? void 0 : r(a) : o === "E" ? t == null ? void 0 : t(u) : n == null ? void 0 : n();
  }, e.prototype.accept = function(r, t, n) {
    var i;
    return de((i = r) === null || i === void 0 ? void 0 : i.next) ? this.observe(r) : this.do(r, t, n);
  }, e.prototype.toObservable = function() {
    var r = this, t = r.kind, n = r.value, i = r.error, o = t === "N" ? rb(n) : t === "E" ? qx(function() {
      return i;
    }) : t === "C" ? Wo : 0;
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
function nb(e, r) {
  var t, n, i, o = e, a = o.kind, u = o.value, c = o.error;
  if (typeof a != "string")
    throw new TypeError('Invalid notification, missing "kind"');
  a === "N" ? (t = r.next) === null || t === void 0 || t.call(r, u) : a === "E" ? (n = r.error) === null || n === void 0 || n.call(r, c) : (i = r.complete) === null || i === void 0 || i.call(r);
}
function Hx() {
  return H(function(e, r) {
    e.subscribe(B(r, function(t) {
      return nb(t, r);
    }));
  });
}
function zx(e, r) {
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
function ib(e, r) {
  return r === void 0 && (r = ot), e = e ?? Yx, H(function(t, n) {
    var i, o = !0;
    t.subscribe(B(n, function(a) {
      var u = r(a);
      (o || !e(i, u)) && (o = !1, i = u, n.next(a));
    }));
  });
}
function Yx(e, r) {
  return e === r;
}
function Gx(e, r) {
  return ib(function(t, n) {
    return r ? r(t[e], n[e]) : t[e] === n[e];
  });
}
var op = dn(function(e) {
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
var gc = dn(function(e) {
  return function() {
    e(this), this.name = "EmptyError", this.message = "no elements in sequence";
  };
});
function Oc(e) {
  return e === void 0 && (e = Kx), H(function(r, t) {
    var n = !1;
    r.subscribe(B(t, function(i) {
      n = !0, t.next(i);
    }, function() {
      return n ? t.complete() : t.error(e());
    }));
  });
}
function Kx() {
  return new gc();
}
function Zx(e, r) {
  if (e < 0)
    throw new op();
  var t = arguments.length >= 2;
  return function(n) {
    return n.pipe(Kr(function(i, o) {
      return o === e;
    }), Wi(1), t ? bc(r) : Oc(function() {
      return new op();
    }));
  };
}
function Qx() {
  for (var e = [], r = 0; r < arguments.length; r++)
    e[r] = arguments[r];
  return function(t) {
    return qa(t, rb.apply(void 0, je([], $e(e))));
  };
}
function Xx(e, r) {
  return H(function(t, n) {
    var i = 0;
    t.subscribe(B(n, function(o) {
      e.call(r, o, i++, t) || (n.next(!1), n.complete());
    }, function() {
      n.next(!0), n.complete();
    }));
  });
}
function yd(e, r) {
  return r ? function(t) {
    return t.pipe(yd(function(n, i) {
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
function ob() {
  return yd(ot);
}
var Jx = ob;
function eF(e, r, t) {
  return r === void 0 && (r = 1 / 0), r = (r || 0) < 1 ? 1 / 0 : r, H(function(n, i) {
    return fd(n, i, e, r, void 0, !0, t);
  });
}
function tF(e) {
  return H(function(r, t) {
    try {
      r.subscribe(t);
    } finally {
      t.add(e);
    }
  });
}
function rF(e, r) {
  return H(ab(e, r, "value"));
}
function ab(e, r, t) {
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
function nF(e, r) {
  return H(ab(e, r, "index"));
}
function iF(e, r) {
  var t = arguments.length >= 2;
  return function(n) {
    return n.pipe(e ? Kr(function(i, o) {
      return e(i, o, n);
    }) : ot, Wi(1), t ? bc(r) : Oc(function() {
      return new gc();
    }));
  };
}
function oF(e, r, t, n) {
  return H(function(i, o) {
    var a;
    !r || typeof r == "function" ? a = r : (t = r.duration, a = r.element, n = r.connector);
    var u = /* @__PURE__ */ new Map(), c = function(g) {
      u.forEach(g), g(o);
    }, s = function(g) {
      return c(function(S) {
        return S.error(g);
      });
    }, l = 0, f = !1, y = new od(o, function(g) {
      try {
        var S = e(g), P = u.get(S);
        if (!P) {
          u.set(S, P = n ? n() : new Je());
          var I = b(S, P);
          if (o.next(I), t) {
            var $ = B(P, function() {
              P.complete(), $ == null || $.unsubscribe();
            }, void 0, void 0, function() {
              return u.delete(S);
            });
            y.add(ae(t(I)).subscribe($));
          }
        }
        P.next(a ? a(g) : g);
      } catch (j) {
        s(j);
      }
    }, function() {
      return c(function(g) {
        return g.complete();
      });
    }, s, function() {
      return u.clear();
    }, function() {
      return f = !0, l === 0;
    });
    i.subscribe(y);
    function b(g, S) {
      var P = new Be(function(I) {
        l++;
        var $ = S.subscribe(I);
        return function() {
          $.unsubscribe(), --l === 0 && f && y.unsubscribe();
        };
      });
      return P.key = g, P;
    }
  });
}
function aF() {
  return H(function(e, r) {
    e.subscribe(B(r, function() {
      r.next(!1), r.complete();
    }, function() {
      r.next(!0), r.complete();
    }));
  });
}
function ub(e) {
  return e <= 0 ? function() {
    return Wo;
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
function uF(e, r) {
  var t = arguments.length >= 2;
  return function(n) {
    return n.pipe(e ? Kr(function(i, o) {
      return e(i, o, n);
    }) : ot, ub(1), t ? bc(r) : Oc(function() {
      return new gc();
    }));
  };
}
function sF() {
  return H(function(e, r) {
    e.subscribe(B(r, function(t) {
      r.next(Cl.createNext(t));
    }, function() {
      r.next(Cl.createComplete()), r.complete();
    }, function(t) {
      r.next(Cl.createError(t)), r.complete();
    }));
  });
}
function cF(e) {
  return Bo(de(e) ? function(r, t) {
    return e(r, t) > 0 ? r : t;
  } : function(r, t) {
    return r > t ? r : t;
  });
}
function sb() {
  for (var e = [], r = 0; r < arguments.length; r++)
    e[r] = arguments[r];
  var t = Ir(e), n = fx(e, 1 / 0);
  return e = oi(e), H(function(i, o) {
    hd(n)(ii(je([i], $e(e)), t)).subscribe(o);
  });
}
var lF = Ft;
function fF(e, r, t) {
  return t === void 0 && (t = 1 / 0), de(r) ? Ft(function() {
    return e;
  }, r, t) : (typeof r == "number" && (t = r), Ft(function() {
    return e;
  }, t));
}
function dF(e, r, t) {
  return t === void 0 && (t = 1 / 0), H(function(n, i) {
    var o = r;
    return fd(n, i, function(a, u) {
      return e(o, a, u);
    }, t, function(a) {
      o = a;
    }, !1, void 0, function() {
      return o = null;
    });
  });
}
function hF() {
  for (var e = [], r = 0; r < arguments.length; r++)
    e[r] = arguments[r];
  return sb.apply(void 0, je([], $e(e)));
}
function vF(e) {
  return Bo(de(e) ? function(r, t) {
    return e(r, t) < 0 ? r : t;
  } : function(r, t) {
    return r < t ? r : t;
  });
}
function cb() {
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
var md = function(e) {
  bt(r, e);
  function r(t, n) {
    var i = e.call(this) || this;
    return i.source = t, i.subjectFactory = n, i._subject = null, i._refCount = 0, i._connection = null, Pm(t) && (i.lift = t.lift), i;
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
    return cb()(this);
  }, r;
}(Be);
function bd(e, r) {
  var t = de(e) ? e : function() {
    return e;
  };
  return de(r) ? pd(r, {
    connector: t
  }) : function(n) {
    return new md(n, t);
  };
}
function pF() {
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
        var u = new od(n, void 0, Ze, Ze);
        a.subscribe(u), u.add(o);
      } else
        n.complete();
    };
    o();
  });
}
function _F() {
  for (var e = [], r = 0; r < arguments.length; r++)
    e[r] = arguments[r];
  var t = oi(e);
  return function(n) {
    return pF.apply(void 0, je([n], $e(t)));
  };
}
var yF = _F;
function mF() {
  return H(function(e, r) {
    var t, n = !1;
    e.subscribe(B(r, function(i) {
      var o = t;
      t = i, n && r.next([o, i]), n = !0;
    }));
  });
}
function bF(e, r) {
  return function(t, n) {
    return !e.call(r, t, n);
  };
}
function gF(e, r) {
  return function(t) {
    return [Kr(e, r)(t), Kr(bF(e, r))(t)];
  };
}
function OF() {
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
function wF(e) {
  return e ? function(r) {
    return pd(e)(r);
  } : function(r) {
    return bd(new Je())(r);
  };
}
var EF = function(e) {
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
function SF(e) {
  return function(r) {
    var t = new EF(e);
    return new md(r, function() {
      return t;
    });
  };
}
var TF = function(e) {
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
function PF() {
  return function(e) {
    var r = new TF();
    return new md(e, function() {
      return r;
    });
  };
}
var lb = function(e) {
  bt(r, e);
  function r(t, n, i) {
    t === void 0 && (t = 1 / 0), n === void 0 && (n = 1 / 0), i === void 0 && (i = yc);
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
function IF(e, r, t, n) {
  t && !de(t) && (n = t);
  var i = de(t) ? t : void 0;
  return function(o) {
    return bd(new lb(e, r, n), i)(o);
  };
}
function AF(e) {
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
function fb() {
  for (var e = [], r = 0; r < arguments.length; r++)
    e[r] = arguments[r];
  return e.length ? H(function(t, n) {
    AF(je([t], $e(e)))(n);
  }) : ot;
}
function RF() {
  for (var e = [], r = 0; r < arguments.length; r++)
    e[r] = arguments[r];
  return fb.apply(void 0, je([], $e(oi(e))));
}
function CF(e) {
  var r, t = 1 / 0, n;
  return e != null && (typeof e == "object" ? (r = e.count, t = r === void 0 ? 1 / 0 : r, n = e.delay) : t = e), t <= 0 ? function() {
    return Wo;
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
function $F(e) {
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
function jF(e) {
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
          var g = function() {
            l ? (l.unsubscribe(), l = null, f()) : y = !0;
          };
          if (i != null) {
            var S = typeof i == "number" ? ni(i) : ae(i(b, s)), P = B(c, function() {
              P.unsubscribe(), g();
            }, function() {
              c.complete();
            });
            S.subscribe(P);
          } else
            g();
        } else
          c.error(b);
      })), y && (l.unsubscribe(), l = null, f());
    };
    f();
  });
}
function NF(e) {
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
function db(e) {
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
function MF(e, r) {
  return e === void 0 && (e = 0), r === void 0 && (r = Nt), e < 0 && (e = 0), ni(e, e, r);
}
function kF(e, r) {
  return r === void 0 && (r = Nt), db(MF(e, r));
}
function DF(e, r) {
  return H(Km(e, r, arguments.length >= 2, !0));
}
function UF(e, r) {
  return r === void 0 && (r = function(t, n) {
    return t === n;
  }), H(function(t, n) {
    var i = ap(), o = ap(), a = function(c) {
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
function ap() {
  return {
    buffer: [],
    complete: !1
  };
}
function hb(e) {
  e === void 0 && (e = {});
  var r = e.connector, t = r === void 0 ? function() {
    return new Je();
  } : r, n = e.resetOnError, i = n === void 0 ? !0 : n, o = e.resetOnComplete, a = o === void 0 ? !0 : o, u = e.resetOnRefCountZero, c = u === void 0 ? !0 : u;
  return function(s) {
    var l, f, y, b = 0, g = !1, S = !1, P = function() {
      f == null || f.unsubscribe(), f = void 0;
    }, I = function() {
      P(), l = y = void 0, g = S = !1;
    }, $ = function() {
      var j = l;
      I(), j == null || j.unsubscribe();
    };
    return H(function(j, k) {
      b++, !S && !g && P();
      var L = y = y ?? t();
      k.add(function() {
        b--, b === 0 && !S && !g && (f = $l($, c));
      }), L.subscribe(k), !l && b > 0 && (l = new Bi({
        next: function(Y) {
          return L.next(Y);
        },
        error: function(Y) {
          S = !0, P(), f = $l(I, i, Y), L.error(Y);
        },
        complete: function() {
          g = !0, P(), f = $l(I, a), L.complete();
        }
      }), ae(j).subscribe(l));
    })(s);
  };
}
function $l(e, r) {
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
function LF(e, r, t) {
  var n, i, o, a, u = !1;
  return e && typeof e == "object" ? (n = e.bufferSize, a = n === void 0 ? 1 / 0 : n, i = e.windowTime, r = i === void 0 ? 1 / 0 : i, o = e.refCount, u = o === void 0 ? !1 : o, t = e.scheduler) : a = e ?? 1 / 0, hb({
    connector: function() {
      return new lb(a, r, t);
    },
    resetOnError: !0,
    resetOnComplete: !1,
    resetOnRefCountZero: u
  });
}
var xF = dn(function(e) {
  return function(t) {
    e(this), this.name = "SequenceError", this.message = t;
  };
}), FF = dn(function(e) {
  return function(t) {
    e(this), this.name = "NotFoundError", this.message = t;
  };
});
function BF(e) {
  return H(function(r, t) {
    var n = !1, i, o = !1, a = 0;
    r.subscribe(B(t, function(u) {
      o = !0, (!e || e(u, a++, r)) && (n && t.error(new xF("Too many matching values")), n = !0, i = u);
    }, function() {
      n ? (t.next(i), t.complete()) : t.error(o ? new FF("No matching values") : new gc());
    }));
  });
}
function WF(e) {
  return Kr(function(r, t) {
    return e <= t;
  });
}
function VF(e) {
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
function qF(e) {
  return H(function(r, t) {
    var n = !1, i = B(t, function() {
      i == null || i.unsubscribe(), n = !0;
    }, Ze);
    ae(e).subscribe(i), r.subscribe(B(t, function(o) {
      return n && t.next(o);
    }));
  });
}
function HF(e) {
  return H(function(r, t) {
    var n = !1, i = 0;
    r.subscribe(B(t, function(o) {
      return (n || (n = !e(o, i++))) && t.next(o);
    }));
  });
}
function zF() {
  for (var e = [], r = 0; r < arguments.length; r++)
    e[r] = arguments[r];
  var t = Ir(e);
  return H(function(n, i) {
    (t ? qa(e, n, t) : qa(e, n)).subscribe(i);
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
function YF() {
  return Vi(ot);
}
function GF(e, r) {
  return de(r) ? Vi(function() {
    return e;
  }, r) : Vi(function() {
    return e;
  });
}
function KF(e, r) {
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
function ZF(e) {
  return H(function(r, t) {
    ae(e).subscribe(B(t, function() {
      return t.complete();
    }, Ze)), !t.closed && r.subscribe(t);
  });
}
function QF(e, r) {
  return r === void 0 && (r = !1), H(function(t, n) {
    var i = 0;
    t.subscribe(B(n, function(o) {
      var a = e(o, i++);
      (a || r) && n.next(o), !a && n.complete();
    }));
  });
}
function XF(e, r, t) {
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
var vb = {
  leading: !0,
  trailing: !1
};
function pb(e, r) {
  return r === void 0 && (r = vb), H(function(t, n) {
    var i = r.leading, o = r.trailing, a = !1, u = null, c = null, s = !1, l = function() {
      c == null || c.unsubscribe(), c = null, o && (b(), s && n.complete());
    }, f = function() {
      c = null, s && n.complete();
    }, y = function(g) {
      return c = ae(e(g)).subscribe(B(n, l, f));
    }, b = function() {
      if (a) {
        a = !1;
        var g = u;
        u = null, n.next(g), !s && y(g);
      }
    };
    t.subscribe(B(n, function(g) {
      a = !0, u = g, !(c && !c.closed) && (i ? b() : y(g));
    }, function() {
      s = !0, !(o && a && c && !c.closed) && n.complete();
    }));
  });
}
function JF(e, r, t) {
  r === void 0 && (r = Nt), t === void 0 && (t = vb);
  var n = ni(e, r);
  return pb(function() {
    return n;
  }, t);
}
function eB(e) {
  return e === void 0 && (e = Nt), H(function(r, t) {
    var n = e.now();
    r.subscribe(B(t, function(i) {
      var o = e.now(), a = o - n;
      n = o, t.next(new tB(i, a));
    }));
  });
}
var tB = function() {
  function e(r, t) {
    this.value = r, this.interval = t;
  }
  return e;
}(), rB = dn(function(e) {
  return function(t) {
    t === void 0 && (t = null), e(this), this.message = "Timeout has occurred", this.name = "TimeoutError", this.info = t;
  };
});
function _b(e, r) {
  var t = ad(e) ? { first: e } : typeof e == "number" ? { each: e } : e, n = t.first, i = t.each, o = t.with, a = o === void 0 ? nB : o, u = t.scheduler, c = u === void 0 ? r ?? Nt : u, s = t.meta, l = s === void 0 ? null : s;
  if (n == null && i == null)
    throw new TypeError("No timeout provided.");
  return H(function(f, y) {
    var b, g, S = null, P = 0, I = function($) {
      g = lt(y, c, function() {
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
      g == null || g.unsubscribe(), P++, y.next(S = $), i > 0 && I(i);
    }, void 0, void 0, function() {
      g != null && g.closed || g == null || g.unsubscribe(), S = null;
    })), !P && I(n != null ? typeof n == "number" ? n : +n - c.now() : i);
  });
}
function nB(e) {
  throw new rB(e);
}
function iB(e, r, t) {
  var n, i, o;
  if (t = t ?? qm, ad(e) ? n = e : typeof e == "number" && (i = e), r)
    o = function() {
      return r;
    };
  else
    throw new TypeError("No observable provided to switch to");
  if (n == null && i == null)
    throw new TypeError("No timeout provided.");
  return _b({
    first: n,
    each: i,
    scheduler: t,
    with: o
  });
}
function oB(e) {
  return e === void 0 && (e = yc), hn(function(r) {
    return { value: r, timestamp: e.now() };
  });
}
function aB(e) {
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
function uB(e, r) {
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
      var g = u - e + 1;
      if (g >= 0 && g % t === 0 && o.shift().complete(), ++u % t === 0) {
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
function sB(e) {
  for (var r, t, n = [], i = 1; i < arguments.length; i++)
    n[i - 1] = arguments[i];
  var o = (r = Ir(n)) !== null && r !== void 0 ? r : Nt, a = (t = n[0]) !== null && t !== void 0 ? t : null, u = n[1] || 1 / 0;
  return H(function(c, s) {
    var l = [], f = !1, y = function(P) {
      var I = P.window, $ = P.subs;
      I.complete(), $.unsubscribe(), nr(l, P), f && b();
    }, b = function() {
      if (l) {
        var P = new At();
        s.add(P);
        var I = new Je(), $ = {
          window: I,
          subs: P,
          seen: 0
        };
        l.push($), s.next(I.asObservable()), lt(P, o, function() {
          return y($);
        }, e);
      }
    };
    a !== null && a >= 0 ? lt(s, o, b, a, !0) : f = !0, b();
    var g = function(P) {
      return l.slice().forEach(P);
    }, S = function(P) {
      g(function(I) {
        var $ = I.window;
        return P($);
      }), P(s), s.unsubscribe();
    };
    return c.subscribe(B(s, function(P) {
      g(function(I) {
        I.window.next(P), u <= ++I.seen && y(I);
      });
    }, function() {
      return S(function(P) {
        return P.complete();
      });
    }, function(P) {
      return S(function(I) {
        return I.error(P);
      });
    })), function() {
      l = null;
    };
  });
}
function cB(e, r) {
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
function lB(e) {
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
function fB() {
  for (var e = [], r = 0; r < arguments.length; r++)
    e[r] = arguments[r];
  var t = mc(e);
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
function yb() {
  for (var e = [], r = 0; r < arguments.length; r++)
    e[r] = arguments[r];
  var t = mc(e), n = oi(e);
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
  }) : Wo;
}
function mb() {
  for (var e = [], r = 0; r < arguments.length; r++)
    e[r] = arguments[r];
  return H(function(t, n) {
    yb.apply(void 0, je([t], $e(e))).subscribe(n);
  });
}
function dB(e) {
  return Qm(yb, e);
}
function hB() {
  for (var e = [], r = 0; r < arguments.length; r++)
    e[r] = arguments[r];
  return mb.apply(void 0, je([], $e(e)));
}
const vB = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  audit: Vm,
  auditTime: sx,
  buffer: cx,
  bufferCount: lx,
  bufferTime: dx,
  bufferToggle: hx,
  bufferWhen: vx,
  catchError: zm,
  combineAll: jx,
  combineLatestAll: Xm,
  combineLatest: dd,
  combineLatestWith: Mx,
  concat: Jm,
  concatAll: vd,
  concatMap: yf,
  concatMapTo: kx,
  concatWith: Dx,
  connect: pd,
  count: Fx,
  debounce: Bx,
  debounceTime: Wx,
  defaultIfEmpty: bc,
  delay: Vx,
  delayWhen: _d,
  dematerialize: Hx,
  distinct: zx,
  distinctUntilChanged: ib,
  distinctUntilKeyChanged: Gx,
  elementAt: Zx,
  endWith: Qx,
  every: Xx,
  exhaust: Jx,
  exhaustAll: ob,
  exhaustMap: yd,
  expand: eF,
  filter: Kr,
  finalize: tF,
  find: rF,
  findIndex: nF,
  first: iF,
  groupBy: oF,
  ignoreElements: eb,
  isEmpty: aF,
  last: uF,
  map: hn,
  mapTo: tb,
  materialize: sF,
  max: cF,
  merge: sb,
  mergeAll: hd,
  flatMap: lF,
  mergeMap: Ft,
  mergeMapTo: fF,
  mergeScan: dF,
  mergeWith: hF,
  min: vF,
  multicast: bd,
  observeOn: sd,
  onErrorResumeNext: yF,
  pairwise: mF,
  partition: gF,
  pluck: OF,
  publish: wF,
  publishBehavior: SF,
  publishLast: PF,
  publishReplay: IF,
  race: RF,
  raceWith: fb,
  reduce: Bo,
  repeat: CF,
  repeatWhen: $F,
  retry: jF,
  retryWhen: NF,
  refCount: cb,
  sample: db,
  sampleTime: kF,
  scan: DF,
  sequenceEqual: UF,
  share: hb,
  shareReplay: LF,
  single: BF,
  skip: WF,
  skipLast: VF,
  skipUntil: qF,
  skipWhile: HF,
  startWith: zF,
  subscribeOn: cd,
  switchAll: YF,
  switchMap: Vi,
  switchMapTo: GF,
  switchScan: KF,
  take: Wi,
  takeLast: ub,
  takeUntil: ZF,
  takeWhile: QF,
  tap: XF,
  throttle: pb,
  throttleTime: JF,
  throwIfEmpty: Oc,
  timeInterval: eB,
  timeout: _b,
  timeoutWith: iB,
  timestamp: oB,
  toArray: Zm,
  window: aB,
  windowCount: uB,
  windowTime: sB,
  windowToggle: cB,
  windowWhen: lB,
  withLatestFrom: fB,
  zip: mb,
  zipAll: dB,
  zipWith: hB
}, Symbol.toStringTag, { value: "Module" })), gd = /* @__PURE__ */ PE(vB);
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
var pB = te, Ur = to, Nr = gd, Oi = {
  READY: 0,
  STREAMING: 1,
  COMPLETED: 2
}, _B = function() {
  function e(r, t) {
    var n = r.pipe((0, Nr.publishReplay)(1), (0, Nr.refCount)());
    this._result = n, this._keys = n.pipe((0, Nr.mergeMap)(function(i) {
      return (0, Ur.from)(i.keys());
    }), (0, Nr.publishReplay)(1), (0, Nr.refCount)()), this._records = void 0, this._controls = new bb(), this._summary = new Ur.ReplaySubject(), this._state = t || Oi.READY;
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
    })) : o && o.error((0, pB.newError)("Streaming has already started/consumed with a previous records or summary subscription.")), function() {
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
    return this._records ? this._records : (this._records = yB(r[Symbol.asyncIterator](), {
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
ai.default = _B;
function yB(e, r, t) {
  var n = this;
  t === void 0 && (t = new bb());
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
var bb = function() {
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
}(), Vo = {}, gb = h && h.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(Vo, "__esModule", { value: !0 });
var ca = to, mB = gb(ai);
gb(te);
var bB = function() {
  function e(r) {
    this._txc = r;
  }
  return e.prototype.run = function(r, t) {
    var n = this;
    return new mB.default(new ca.Observable(function(i) {
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
    return new ca.Observable(function(t) {
      r._txc.commit().then(function() {
        t.complete();
      }).catch(function(n) {
        return t.error(n);
      });
    });
  }, e.prototype.rollback = function() {
    var r = this;
    return new ca.Observable(function(t) {
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
    return new ca.Observable(function(t) {
      r._txc.close().then(function() {
        t.complete();
      }).catch(function(n) {
        return t.error(n);
      });
    });
  }, e;
}();
Vo.default = bB;
var wc = {}, Ob = h && h.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(wc, "__esModule", { value: !0 });
Ob(ai);
Ob(Vo);
var gB = function() {
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
wc.default = gB;
var Od = {};
Object.defineProperty(Od, "__esModule", { value: !0 });
var Ha = te, jl = to, Nl = gd;
Ha.internal.logger.Logger;
var OB = Ha.error.SERVICE_UNAVAILABLE, up = 30 * 1e3, sp = 1e3, cp = 2, lp = 0.2, wB = function() {
  function e(r) {
    var t = r === void 0 ? {} : r, n = t.maxRetryTimeout, i = n === void 0 ? up : n, o = t.initialDelay, a = o === void 0 ? sp : o, u = t.delayMultiplier, c = u === void 0 ? cp : u, s = t.delayJitter, l = s === void 0 ? lp : s, f = t.logger, y = f === void 0 ? null : f;
    this._maxRetryTimeout = la(i, up), this._initialDelay = la(a, sp), this._delayMultiplier = la(c, cp), this._delayJitter = la(l, lp), this._logger = y;
  }
  return e.prototype.retry = function(r) {
    var t = this;
    return r.pipe((0, Nl.retryWhen)(function(n) {
      var i = [], o = Date.now(), a = 1, u = t._initialDelay;
      return n.pipe((0, Nl.mergeMap)(function(c) {
        if (!(0, Ha.isRetriableError)(c))
          return (0, jl.throwError)(function() {
            return c;
          });
        if (i.push(c), a >= 2 && Date.now() - o >= t._maxRetryTimeout) {
          var s = (0, Ha.newError)("Failed after retried for ".concat(a, " times in ").concat(t._maxRetryTimeout, " ms. Make sure that your database is online and retry again."), OB);
          return s.seenErrors = i, (0, jl.throwError)(function() {
            return s;
          });
        }
        var l = t._computeNextDelay(u);
        return u = u * t._delayMultiplier, a++, t._logger && t._logger.warn("Transaction failed and will be retried in ".concat(l)), (0, jl.of)(1).pipe((0, Nl.delay)(l));
      }));
    }));
  }, e.prototype._computeNextDelay = function(r) {
    var t = r * this._delayJitter;
    return r - t + 2 * t * Math.random();
  }, e;
}();
Od.default = wB;
function la(e, r) {
  return e || e === 0 ? e : r;
}
var Ec = h && h.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(du, "__esModule", { value: !0 });
var gn = to, fa = gd, EB = Ec(ai), wb = te, SB = Ec(Vo), TB = Ec(wc), PB = Ec(Od), Eb = wb.internal.constants, fp = Eb.ACCESS_MODE_READ, dp = Eb.ACCESS_MODE_WRITE, da = wb.internal.txConfig.TxConfig, IB = function() {
  function e(r) {
    var t = r === void 0 ? {} : r, n = t.session, i = t.config;
    this._session = n, this._retryLogic = AB(i);
  }
  return e.prototype.run = function(r, t, n) {
    var i = this;
    return new EB.default(new gn.Observable(function(o) {
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
    return this._runTransaction(fp, r, t);
  }, e.prototype.writeTransaction = function(r, t) {
    return this._runTransaction(dp, r, t);
  }, e.prototype.executeRead = function(r, t) {
    return this._executeInTransaction(fp, r, t);
  }, e.prototype.executeWrite = function(r, t) {
    return this._executeInTransaction(dp, r, t);
  }, e.prototype._executeInTransaction = function(r, t, n) {
    var i = function(o) {
      return new TB.default({
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
    var n = this, i = da.empty();
    return t && (i = new da(t)), new gn.Observable(function(o) {
      try {
        n._session._beginTransaction(r, i).then(function(a) {
          o.next(new SB.default(a)), o.complete();
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
    var o = da.empty();
    return n && (o = new da(n)), this._retryLogic.retry(this._beginTransaction(r, o).pipe((0, fa.mergeMap)(function(a) {
      return (0, gn.defer)(function() {
        try {
          return t(i(a));
        } catch (u) {
          return (0, gn.throwError)(function() {
            return u;
          });
        }
      }).pipe((0, fa.catchError)(function(u) {
        return a.rollback().pipe((0, fa.concatWith)((0, gn.throwError)(function() {
          return u;
        })));
      }), (0, fa.concatWith)(a.commit()));
    })));
  }, e;
}();
du.default = IB;
function AB(e) {
  var r = e && e.maxTransactionRetryTime ? e.maxTransactionRetryTime : null;
  return new PB.default({ maxRetryTimeout: r });
}
var RB = h && h.__extends || function() {
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
}(), CB = h && h.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(Jt, "__esModule", { value: !0 });
Jt.WRITE = Jt.READ = Jt.Driver = void 0;
var Sc = te, $B = CB(du), hp = Sc.internal.constants.FETCH_ALL, jB = Sc.driver.READ, Sb = Sc.driver.WRITE;
Jt.READ = jB;
Jt.WRITE = Sb;
var Tb = function(e) {
  RB(r, e);
  function r() {
    return e !== null && e.apply(this, arguments) || this;
  }
  return r.prototype.rxSession = function(t) {
    var n = t === void 0 ? {} : t, i = n.defaultAccessMode, o = i === void 0 ? Sb : i, a = n.bookmarks, u = n.database, c = u === void 0 ? "" : u, s = n.fetchSize, l = n.impersonatedUser, f = n.bookmarkManager;
    return new $B.default({
      session: this._newSession({
        defaultAccessMode: o,
        bookmarkOrBookmarks: a,
        database: c,
        impersonatedUser: l,
        reactive: !1,
        fetchSize: NB(s, this._config.fetchSize),
        bookmarkManager: f
      }),
      config: this._config
    });
  }, r;
}(Sc.Driver);
Jt.Driver = Tb;
function NB(e, r) {
  var t = parseInt(e, 10);
  if (t > 0 || t === hp)
    return t;
  if (t === 0 || t < 0)
    throw new Error("The fetch size can only be a positive value or ".concat(hp, " for ALL. However fetchSize = ").concat(t));
  return r;
}
Jt.default = Tb;
var wd = {};
Object.defineProperty(wd, "__esModule", { value: !0 });
wd.default = "5.5.0";
var Pb = {}, mr = {}, Tc = {};
Object.defineProperty(Tc, "__esModule", { value: !0 });
var MB = function() {
  function e() {
  }
  return e.prototype.selectReader = function(r) {
    throw new Error("Abstract function");
  }, e.prototype.selectWriter = function(r) {
    throw new Error("Abstract function");
  }, e;
}();
Tc.default = MB;
var Ed = {}, Sd = {};
Object.defineProperty(Sd, "__esModule", { value: !0 });
var kB = function() {
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
Sd.default = kB;
var DB = h && h.__extends || function() {
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
}(), Ib = h && h.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(Ed, "__esModule", { value: !0 });
var vp = Ib(Sd), UB = Ib(Tc), LB = function(e) {
  DB(r, e);
  function r(t) {
    var n = e.call(this) || this;
    return n._readersIndex = new vp.default(), n._writersIndex = new vp.default(), n._connectionPool = t, n;
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
}(UB.default);
Ed.default = LB;
var Ab = h && h.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(mr, "__esModule", { value: !0 });
mr.LeastConnectedLoadBalancingStrategy = mr.LoadBalancingStrategy = void 0;
var xB = Ab(Tc);
mr.LoadBalancingStrategy = xB.default;
var Rb = Ab(Ed);
mr.LeastConnectedLoadBalancingStrategy = Rb.default;
mr.default = Rb.default;
var Td = {}, Pd = {}, ui = {}, Dn = {}, Id = {}, ur = {}, Ad = {}, qo = {};
qo.byteLength = WB;
qo.toByteArray = qB;
qo.fromByteArray = YB;
var Dt = [], pt = [], FB = typeof Uint8Array < "u" ? Uint8Array : Array, Ml = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for (var On = 0, BB = Ml.length; On < BB; ++On)
  Dt[On] = Ml[On], pt[Ml.charCodeAt(On)] = On;
pt["-".charCodeAt(0)] = 62;
pt["_".charCodeAt(0)] = 63;
function Cb(e) {
  var r = e.length;
  if (r % 4 > 0)
    throw new Error("Invalid string. Length must be a multiple of 4");
  var t = e.indexOf("=");
  t === -1 && (t = r);
  var n = t === r ? 0 : 4 - t % 4;
  return [t, n];
}
function WB(e) {
  var r = Cb(e), t = r[0], n = r[1];
  return (t + n) * 3 / 4 - n;
}
function VB(e, r, t) {
  return (r + t) * 3 / 4 - t;
}
function qB(e) {
  var r, t = Cb(e), n = t[0], i = t[1], o = new FB(VB(e, n, i)), a = 0, u = i > 0 ? n - 4 : n, c;
  for (c = 0; c < u; c += 4)
    r = pt[e.charCodeAt(c)] << 18 | pt[e.charCodeAt(c + 1)] << 12 | pt[e.charCodeAt(c + 2)] << 6 | pt[e.charCodeAt(c + 3)], o[a++] = r >> 16 & 255, o[a++] = r >> 8 & 255, o[a++] = r & 255;
  return i === 2 && (r = pt[e.charCodeAt(c)] << 2 | pt[e.charCodeAt(c + 1)] >> 4, o[a++] = r & 255), i === 1 && (r = pt[e.charCodeAt(c)] << 10 | pt[e.charCodeAt(c + 1)] << 4 | pt[e.charCodeAt(c + 2)] >> 2, o[a++] = r >> 8 & 255, o[a++] = r & 255), o;
}
function HB(e) {
  return Dt[e >> 18 & 63] + Dt[e >> 12 & 63] + Dt[e >> 6 & 63] + Dt[e & 63];
}
function zB(e, r, t) {
  for (var n, i = [], o = r; o < t; o += 3)
    n = (e[o] << 16 & 16711680) + (e[o + 1] << 8 & 65280) + (e[o + 2] & 255), i.push(HB(n));
  return i.join("");
}
function YB(e) {
  for (var r, t = e.length, n = t % 3, i = [], o = 16383, a = 0, u = t - n; a < u; a += o)
    i.push(zB(e, a, a + o > u ? u : a + o));
  return n === 1 ? (r = e[t - 1], i.push(
    Dt[r >> 2] + Dt[r << 4 & 63] + "=="
  )) : n === 2 && (r = (e[t - 2] << 8) + e[t - 1], i.push(
    Dt[r >> 10] + Dt[r >> 4 & 63] + Dt[r << 2 & 63] + "="
  )), i.join("");
}
var Pc = {};
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
Pc.read = function(e, r, t, n, i) {
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
Pc.write = function(e, r, t, n, i, o) {
  var a, u, c, s = o * 8 - i - 1, l = (1 << s) - 1, f = l >> 1, y = i === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, b = n ? 0 : o - 1, g = n ? 1 : -1, S = r < 0 || r === 0 && 1 / r < 0 ? 1 : 0;
  for (r = Math.abs(r), isNaN(r) || r === 1 / 0 ? (u = isNaN(r) ? 1 : 0, a = l) : (a = Math.floor(Math.log(r) / Math.LN2), r * (c = Math.pow(2, -a)) < 1 && (a--, c *= 2), a + f >= 1 ? r += y / c : r += y * Math.pow(2, 1 - f), r * c >= 2 && (a++, c /= 2), a + f >= l ? (u = 0, a = l) : a + f >= 1 ? (u = (r * c - 1) * Math.pow(2, i), a = a + f) : (u = r * Math.pow(2, f - 1) * Math.pow(2, i), a = 0)); i >= 8; e[t + b] = u & 255, b += g, u /= 256, i -= 8)
    ;
  for (a = a << i | u, s += i; s > 0; e[t + b] = a & 255, b += g, a /= 256, s -= 8)
    ;
  e[t + b - g] |= S * 128;
};
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
(function(e) {
  const r = qo, t = Pc, n = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
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
      return g(m);
    if (m == null)
      throw new TypeError(
        "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof m
      );
    if (x(m, ArrayBuffer) || m && x(m.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (x(m, SharedArrayBuffer) || m && x(m.buffer, SharedArrayBuffer)))
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
    return s(m), a(m < 0 ? 0 : I(m) | 0);
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
    const d = m.length < 0 ? 0 : I(m.length) | 0, v = a(d);
    for (let w = 0; w < d; w += 1)
      v[w] = m[w] & 255;
    return v;
  }
  function g(m) {
    if (x(m, Uint8Array)) {
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
      const d = I(m.length) | 0, v = a(d);
      return v.length === 0 || m.copy(v, 0, 0, d), v;
    }
    if (m.length !== void 0)
      return typeof m.length != "number" || oe(m.length) ? a(0) : b(m);
    if (m.type === "Buffer" && Array.isArray(m.data))
      return b(m.data);
  }
  function I(m) {
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
    if (x(d, Uint8Array) && (d = u.from(d, d.offset, d.byteLength)), x(v, Uint8Array) && (v = u.from(v, v.offset, v.byteLength)), !u.isBuffer(d) || !u.isBuffer(v))
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
      if (x(N, Uint8Array))
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
    if (ArrayBuffer.isView(m) || x(m, ArrayBuffer))
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
          return A(m).length;
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
    if (x(d, Uint8Array) && (d = u.from(d, d.offset, d.byteLength)), !u.isBuffer(d))
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
    return U(A(d), m, v, w);
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
  function F(m, d, v, w, T, C) {
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
      F(this, d, v, w, ie, 0);
    }
    let C = 1, N = 0;
    for (this[v] = d & 255; ++N < w && (C *= 256); )
      this[v + N] = d / C & 255;
    return v + w;
  }, u.prototype.writeUintBE = u.prototype.writeUIntBE = function(d, v, w, T) {
    if (d = +d, v = v >>> 0, w = w >>> 0, !T) {
      const ie = Math.pow(2, 8 * w) - 1;
      F(this, d, v, w, ie, 0);
    }
    let C = w - 1, N = 1;
    for (this[v + C] = d & 255; --C >= 0 && (N *= 256); )
      this[v + C] = d / N & 255;
    return v + w;
  }, u.prototype.writeUint8 = u.prototype.writeUInt8 = function(d, v, w) {
    return d = +d, v = v >>> 0, w || F(this, d, v, 1, 255, 0), this[v] = d & 255, v + 1;
  }, u.prototype.writeUint16LE = u.prototype.writeUInt16LE = function(d, v, w) {
    return d = +d, v = v >>> 0, w || F(this, d, v, 2, 65535, 0), this[v] = d & 255, this[v + 1] = d >>> 8, v + 2;
  }, u.prototype.writeUint16BE = u.prototype.writeUInt16BE = function(d, v, w) {
    return d = +d, v = v >>> 0, w || F(this, d, v, 2, 65535, 0), this[v] = d >>> 8, this[v + 1] = d & 255, v + 2;
  }, u.prototype.writeUint32LE = u.prototype.writeUInt32LE = function(d, v, w) {
    return d = +d, v = v >>> 0, w || F(this, d, v, 4, 4294967295, 0), this[v + 3] = d >>> 24, this[v + 2] = d >>> 16, this[v + 1] = d >>> 8, this[v] = d & 255, v + 4;
  }, u.prototype.writeUint32BE = u.prototype.writeUInt32BE = function(d, v, w) {
    return d = +d, v = v >>> 0, w || F(this, d, v, 4, 4294967295, 0), this[v] = d >>> 24, this[v + 1] = d >>> 16, this[v + 2] = d >>> 8, this[v + 3] = d & 255, v + 4;
  };
  function Ie(m, d, v, w, T) {
    gt(d, w, T, m, v, 7);
    let C = Number(d & BigInt(4294967295));
    m[v++] = C, C = C >> 8, m[v++] = C, C = C >> 8, m[v++] = C, C = C >> 8, m[v++] = C;
    let N = Number(d >> BigInt(32) & BigInt(4294967295));
    return m[v++] = N, N = N >> 8, m[v++] = N, N = N >> 8, m[v++] = N, N = N >> 8, m[v++] = N, v;
  }
  function R(m, d, v, w, T) {
    gt(d, w, T, m, v, 7);
    let C = Number(d & BigInt(4294967295));
    m[v + 7] = C, C = C >> 8, m[v + 6] = C, C = C >> 8, m[v + 5] = C, C = C >> 8, m[v + 4] = C;
    let N = Number(d >> BigInt(32) & BigInt(4294967295));
    return m[v + 3] = N, N = N >> 8, m[v + 2] = N, N = N >> 8, m[v + 1] = N, N = N >> 8, m[v] = N, v + 8;
  }
  u.prototype.writeBigUInt64LE = ue(function(d, v = 0) {
    return Ie(this, d, v, BigInt(0), BigInt("0xffffffffffffffff"));
  }), u.prototype.writeBigUInt64BE = ue(function(d, v = 0) {
    return R(this, d, v, BigInt(0), BigInt("0xffffffffffffffff"));
  }), u.prototype.writeIntLE = function(d, v, w, T) {
    if (d = +d, v = v >>> 0, !T) {
      const Re = Math.pow(2, 8 * w - 1);
      F(this, d, v, w, Re - 1, -Re);
    }
    let C = 0, N = 1, ie = 0;
    for (this[v] = d & 255; ++C < w && (N *= 256); )
      d < 0 && ie === 0 && this[v + C - 1] !== 0 && (ie = 1), this[v + C] = (d / N >> 0) - ie & 255;
    return v + w;
  }, u.prototype.writeIntBE = function(d, v, w, T) {
    if (d = +d, v = v >>> 0, !T) {
      const Re = Math.pow(2, 8 * w - 1);
      F(this, d, v, w, Re - 1, -Re);
    }
    let C = w - 1, N = 1, ie = 0;
    for (this[v + C] = d & 255; --C >= 0 && (N *= 256); )
      d < 0 && ie === 0 && this[v + C + 1] !== 0 && (ie = 1), this[v + C] = (d / N >> 0) - ie & 255;
    return v + w;
  }, u.prototype.writeInt8 = function(d, v, w) {
    return d = +d, v = v >>> 0, w || F(this, d, v, 1, 127, -128), d < 0 && (d = 255 + d + 1), this[v] = d & 255, v + 1;
  }, u.prototype.writeInt16LE = function(d, v, w) {
    return d = +d, v = v >>> 0, w || F(this, d, v, 2, 32767, -32768), this[v] = d & 255, this[v + 1] = d >>> 8, v + 2;
  }, u.prototype.writeInt16BE = function(d, v, w) {
    return d = +d, v = v >>> 0, w || F(this, d, v, 2, 32767, -32768), this[v] = d >>> 8, this[v + 1] = d & 255, v + 2;
  }, u.prototype.writeInt32LE = function(d, v, w) {
    return d = +d, v = v >>> 0, w || F(this, d, v, 4, 2147483647, -2147483648), this[v] = d & 255, this[v + 1] = d >>> 8, this[v + 2] = d >>> 16, this[v + 3] = d >>> 24, v + 4;
  }, u.prototype.writeInt32BE = function(d, v, w) {
    return d = +d, v = v >>> 0, w || F(this, d, v, 4, 2147483647, -2147483648), d < 0 && (d = 4294967295 + d + 1), this[v] = d >>> 24, this[v + 1] = d >>> 16, this[v + 2] = d >>> 8, this[v + 3] = d & 255, v + 4;
  }, u.prototype.writeBigInt64LE = ue(function(d, v = 0) {
    return Ie(this, d, v, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  }), u.prototype.writeBigInt64BE = ue(function(d, v = 0) {
    return R(this, d, v, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
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
  function O(m) {
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
  function A(m) {
    return r.toByteArray(O(m));
  }
  function U(m, d, v, w) {
    let T;
    for (T = 0; T < w && !(T + v >= d.length || T >= m.length); ++T)
      d[T + v] = m[T];
    return T;
  }
  function x(m, d) {
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
})(Ad);
var vn = {}, Ic = {}, GB = h && h.__extends || function() {
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
Object.defineProperty(Ic, "__esModule", { value: !0 });
var $b = function() {
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
    return new KB(r, t, this);
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
Ic.default = $b;
var KB = function(e) {
  GB(r, e);
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
}($b), ZB = h && h.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(vn, "__esModule", { value: !0 });
vn.BaseBuffer = void 0;
var jb = ZB(Ic);
vn.BaseBuffer = jb.default;
vn.default = jb.default;
var QB = h && h.__extends || function() {
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
}(), Nb = h && h.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(ur, "__esModule", { value: !0 });
ur.alloc = void 0;
var ha = Nb(Ad), XB = Nb(vn), Mb = function(e) {
  QB(r, e);
  function r(t) {
    var n = this, i = e4(t);
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
}(XB.default);
ur.default = Mb;
function JB(e) {
  return new Mb(e);
}
ur.alloc = JB;
function e4(e) {
  return e instanceof ha.default.Buffer ? e : typeof e == "number" && typeof ha.default.Buffer.alloc == "function" ? ha.default.Buffer.alloc(e) : new ha.default.Buffer(e);
}
var t4 = h && h.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(Id, "__esModule", { value: !0 });
var pp = t4(ur), wn = te, kb = wn.internal.util, Db = kb.ENCRYPTION_OFF, r4 = kb.ENCRYPTION_ON, _p = 1, n4 = 3, i4 = function() {
  function e(r, t, n) {
    t === void 0 && (t = v4), n === void 0 && (n = function(s) {
      return new WebSocket(s);
    });
    var i = this;
    this._open = !0, this._pending = [], this._error = null, this._handleConnectionError = this._handleConnectionError.bind(this), this._config = r, this._receiveTimeout = null, this._receiveTimeoutStarted = !1, this._receiveTimeoutId = null;
    var o = c4(r, t), a = o.scheme, u = o.error;
    if (u) {
      this._error = u;
      return;
    }
    this._ws = o4(a, r.address, n), this._ws.binaryType = "arraybuffer";
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
        var l = new pp.default(s.data);
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
    else if (r instanceof pp.default)
      try {
        this._ws.send(r._buffer);
      } catch (t) {
        if (this._ws.readyState !== _p)
          this._handleConnectionError();
        else
          throw t;
      }
    else
      throw (0, wn.newError)("Don't know how to send buffer: " + r);
  }, e.prototype.close = function() {
    var r = this;
    return new Promise(function(t, n) {
      r._ws && r._ws.readyState !== n4 ? (r._open = !1, r.stopReceiveTimeout(), r._clearConnectionTimeout(), r._ws.onclose = function() {
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
        n.readyState !== _p && (r._connectionTimeoutFired = !0, n.close());
      }, t);
    }
    return null;
  }, e.prototype._clearConnectionTimeout = function() {
    var r = this._connectionTimeoutId;
    (r || r === 0) && (this._connectionTimeoutFired = !1, this._connectionTimeoutId = null, clearTimeout(r));
  }, e;
}();
Id.default = i4;
function o4(e, r, t) {
  var n = e + "://" + r.asHostPort();
  try {
    return t(n);
  } catch (o) {
    if (a4(o, r)) {
      var i = s4(e, r);
      return t(i);
    } else
      throw o;
  }
}
function a4(e, r) {
  return e.name === "SyntaxError" && u4(r.asHostPort());
}
function u4(e) {
  return e.charAt(0) === "[" && e.indexOf("]") !== -1;
}
function s4(e, r) {
  var t = r.host().replace(/:/g, "-"), n = t.replace("%", "s"), i = n + ".ipv6-literal.net";
  return "".concat(e, "://").concat(i, ":").concat(r.port());
}
function c4(e, r) {
  var t = l4(e), n = f4(e), i = e.trust, o = d4(r);
  if (h4(t, n, o), n)
    return { scheme: "ws", error: null };
  if (o)
    return { scheme: "wss", error: null };
  if (t) {
    if (!i || i === "TRUST_SYSTEM_CA_SIGNED_CERTIFICATES")
      return { scheme: "wss", error: null };
    var a = (0, wn.newError)("The browser version of this driver only supports one trust strategy, 'TRUST_SYSTEM_CA_SIGNED_CERTIFICATES'. " + i + ' is not supported. Please either use TRUST_SYSTEM_CA_SIGNED_CERTIFICATES or disable encryption by setting `encrypted:"' + Db + '"` in the driver configuration.');
    return { scheme: null, error: a };
  }
  return { scheme: "ws", error: null };
}
function l4(e) {
  return e.encrypted === !0 || e.encrypted === r4;
}
function f4(e) {
  return e.encrypted === !1 || e.encrypted === Db;
}
function d4(e) {
  var r = typeof e == "function" ? e() : "";
  return r && r.toLowerCase().indexOf("https") >= 0;
}
function h4(e, r, t) {
  t === null || (e && !t ? console.warn("Neo4j driver is configured to use secure WebSocket on a HTTP web page. WebSockets might not work in a mixed content environment. Please consider configuring driver to not use encryption.") : r && t && console.warn("Neo4j driver is configured to use insecure WebSocket on a HTTPS web page. WebSockets might not work in a mixed content environment. Please consider configuring driver to use encryption."));
}
function v4() {
  return typeof window < "u" && window.location ? window.location.protocol : null;
}
var Rd = {}, p4 = h && h.__extends || function() {
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
Object.defineProperty(Rd, "__esModule", { value: !0 });
var _4 = te, y4 = _4.internal.resolver.BaseHostNameResolver, m4 = function(e) {
  p4(r, e);
  function r() {
    return e !== null && e.apply(this, arguments) || this;
  }
  return r.prototype.resolve = function(t) {
    return this._resolveToItself(t);
  }, r;
}(y4);
Rd.default = m4;
var Ub = h && h.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(Dn, "__esModule", { value: !0 });
Dn.HostNameResolver = Dn.Channel = void 0;
var b4 = Ub(Id), g4 = Ub(Rd);
Dn.Channel = b4.default;
Dn.HostNameResolver = g4.default;
var Un = {}, Cd = {}, O4 = h && h.__extends || function() {
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
Object.defineProperty(Cd, "__esModule", { value: !0 });
var w4 = vn, E4 = ur, S4 = function(e) {
  O4(r, e);
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
    for (var n = (0, E4.alloc)(8), i = 0; i < 8; i++)
      n.putUInt8(i, this.getUInt8(t + i));
    return n.getFloat64(0);
  }, r;
}(w4.BaseBuffer);
Cd.default = S4;
var T4 = h && h.__extends || function() {
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
}(), Lb = h && h.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(Un, "__esModule", { value: !0 });
Un.Dechunker = Un.Chunker = void 0;
var P4 = Lb(Ic), yp = ur, I4 = Lb(Cd), va = 2, A4 = 0, R4 = 1400, C4 = function(e) {
  T4(r, e);
  function r(t, n) {
    var i = e.call(this, 0) || this;
    return i._bufferSize = n || R4, i._ch = t, i._buffer = (0, yp.alloc)(i._bufferSize), i._currentChunkStart = 0, i._chunkOpen = !1, i;
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
      this._buffer = null, this._ch.write(t.getSlice(0, t.position)), this._buffer = (0, yp.alloc)(this._bufferSize), this._chunkOpen = !1;
    }
    return this;
  }, r.prototype.messageBoundary = function() {
    this._closeChunkIfOpen(), this._buffer.remaining() < va && this.flush(), this._buffer.writeInt16(A4);
  }, r.prototype._ensure = function(t) {
    var n = this._chunkOpen ? t : t + va;
    this._buffer.remaining() < n && this.flush(), this._chunkOpen || (this._currentChunkStart = this._buffer.position, this._buffer.position = this._buffer.position + va, this._chunkOpen = !0);
  }, r.prototype._closeChunkIfOpen = function() {
    if (this._chunkOpen) {
      var t = this._buffer.position - (this._currentChunkStart + va);
      this._buffer.putUInt16(this._currentChunkStart, t), this._chunkOpen = !1;
    }
  }, r;
}(P4.default);
Un.Chunker = C4;
var $4 = function() {
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
          t = new I4.default(this._currentMessage);
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
Un.Dechunker = $4;
var $d = {};
Object.defineProperty($d, "__esModule", { value: !0 });
var Ac = te, xb = Ac.internal.util, j4 = xb.ENCRYPTION_OFF, N4 = xb.ENCRYPTION_ON, M4 = Ac.error.SERVICE_UNAVAILABLE, mp = [
  null,
  void 0,
  !0,
  !1,
  N4,
  j4
], bp = [
  null,
  void 0,
  "TRUST_ALL_CERTIFICATES",
  "TRUST_CUSTOM_CA_SIGNED_CERTIFICATES",
  "TRUST_SYSTEM_CA_SIGNED_CERTIFICATES"
], k4 = function() {
  function e(r, t, n) {
    this.address = r, this.encrypted = D4(t), this.trust = U4(t), this.trustedCertificates = L4(t), this.knownHostsPath = x4(t), this.connectionErrorCode = n || M4, this.connectionTimeout = t.connectionTimeout;
  }
  return e;
}();
$d.default = k4;
function D4(e) {
  var r = e.encrypted;
  if (mp.indexOf(r) === -1)
    throw (0, Ac.newError)("Illegal value of the encrypted setting ".concat(r, ". Expected one of ").concat(mp));
  return r;
}
function U4(e) {
  var r = e.trust;
  if (bp.indexOf(r) === -1)
    throw (0, Ac.newError)("Illegal value of the trust setting ".concat(r, ". Expected one of ").concat(bp));
  return r;
}
function L4(e) {
  return e.trustedCertificates || [];
}
function x4(e) {
  return e.knownHosts || null;
}
var jd = {}, Fb = {}, mf = { exports: {} }, Bb = {};
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
(function(e) {
  var r = qo, t = Pc, n = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
  e.Buffer = u, e.SlowBuffer = $, e.INSPECT_MAX_BYTES = 50;
  var i = 2147483647;
  e.kMaxLength = i, u.TYPED_ARRAY_SUPPORT = o(), !u.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error(
    "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
  );
  function o() {
    try {
      var O = new Uint8Array(1), p = { foo: function() {
        return 42;
      } };
      return Object.setPrototypeOf(p, Uint8Array.prototype), Object.setPrototypeOf(O, p), O.foo() === 42;
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
  function a(O) {
    if (O > i)
      throw new RangeError('The value "' + O + '" is invalid for option "size"');
    var p = new Uint8Array(O);
    return Object.setPrototypeOf(p, u.prototype), p;
  }
  function u(O, p, _) {
    if (typeof O == "number") {
      if (typeof p == "string")
        throw new TypeError(
          'The "string" argument must be of type string. Received type number'
        );
      return f(O);
    }
    return c(O, p, _);
  }
  u.poolSize = 8192;
  function c(O, p, _) {
    if (typeof O == "string")
      return y(O, p);
    if (ArrayBuffer.isView(O))
      return g(O);
    if (O == null)
      throw new TypeError(
        "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof O
      );
    if (Ve(O, ArrayBuffer) || O && Ve(O.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (Ve(O, SharedArrayBuffer) || O && Ve(O.buffer, SharedArrayBuffer)))
      return S(O, p, _);
    if (typeof O == "number")
      throw new TypeError(
        'The "value" argument must not be of type number. Received type number'
      );
    var E = O.valueOf && O.valueOf();
    if (E != null && E !== O)
      return u.from(E, p, _);
    var A = P(O);
    if (A)
      return A;
    if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof O[Symbol.toPrimitive] == "function")
      return u.from(
        O[Symbol.toPrimitive]("string"),
        p,
        _
      );
    throw new TypeError(
      "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof O
    );
  }
  u.from = function(O, p, _) {
    return c(O, p, _);
  }, Object.setPrototypeOf(u.prototype, Uint8Array.prototype), Object.setPrototypeOf(u, Uint8Array);
  function s(O) {
    if (typeof O != "number")
      throw new TypeError('"size" argument must be of type number');
    if (O < 0)
      throw new RangeError('The value "' + O + '" is invalid for option "size"');
  }
  function l(O, p, _) {
    return s(O), O <= 0 ? a(O) : p !== void 0 ? typeof _ == "string" ? a(O).fill(p, _) : a(O).fill(p) : a(O);
  }
  u.alloc = function(O, p, _) {
    return l(O, p, _);
  };
  function f(O) {
    return s(O), a(O < 0 ? 0 : I(O) | 0);
  }
  u.allocUnsafe = function(O) {
    return f(O);
  }, u.allocUnsafeSlow = function(O) {
    return f(O);
  };
  function y(O, p) {
    if ((typeof p != "string" || p === "") && (p = "utf8"), !u.isEncoding(p))
      throw new TypeError("Unknown encoding: " + p);
    var _ = j(O, p) | 0, E = a(_), A = E.write(O, p);
    return A !== _ && (E = E.slice(0, A)), E;
  }
  function b(O) {
    for (var p = O.length < 0 ? 0 : I(O.length) | 0, _ = a(p), E = 0; E < p; E += 1)
      _[E] = O[E] & 255;
    return _;
  }
  function g(O) {
    if (Ve(O, Uint8Array)) {
      var p = new Uint8Array(O);
      return S(p.buffer, p.byteOffset, p.byteLength);
    }
    return b(O);
  }
  function S(O, p, _) {
    if (p < 0 || O.byteLength < p)
      throw new RangeError('"offset" is outside of buffer bounds');
    if (O.byteLength < p + (_ || 0))
      throw new RangeError('"length" is outside of buffer bounds');
    var E;
    return p === void 0 && _ === void 0 ? E = new Uint8Array(O) : _ === void 0 ? E = new Uint8Array(O, p) : E = new Uint8Array(O, p, _), Object.setPrototypeOf(E, u.prototype), E;
  }
  function P(O) {
    if (u.isBuffer(O)) {
      var p = I(O.length) | 0, _ = a(p);
      return _.length === 0 || O.copy(_, 0, 0, p), _;
    }
    if (O.length !== void 0)
      return typeof O.length != "number" || Ot(O.length) ? a(0) : b(O);
    if (O.type === "Buffer" && Array.isArray(O.data))
      return b(O.data);
  }
  function I(O) {
    if (O >= i)
      throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + i.toString(16) + " bytes");
    return O | 0;
  }
  function $(O) {
    return +O != O && (O = 0), u.alloc(+O);
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
    for (var E = p.length, A = _.length, U = 0, x = Math.min(E, A); U < x; ++U)
      if (p[U] !== _[U]) {
        E = p[U], A = _[U];
        break;
      }
    return E < A ? -1 : A < E ? 1 : 0;
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
    var A = u.allocUnsafe(_), U = 0;
    for (E = 0; E < p.length; ++E) {
      var x = p[E];
      if (Ve(x, Uint8Array))
        U + x.length > A.length ? u.from(x).copy(A, U) : Uint8Array.prototype.set.call(
          A,
          x,
          U
        );
      else if (u.isBuffer(x))
        x.copy(A, U);
      else
        throw new TypeError('"list" argument must be an Array of Buffers');
      U += x.length;
    }
    return A;
  };
  function j(O, p) {
    if (u.isBuffer(O))
      return O.length;
    if (ArrayBuffer.isView(O) || Ve(O, ArrayBuffer))
      return O.byteLength;
    if (typeof O != "string")
      throw new TypeError(
        'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof O
      );
    var _ = O.length, E = arguments.length > 2 && arguments[2] === !0;
    if (!E && _ === 0)
      return 0;
    for (var A = !1; ; )
      switch (p) {
        case "ascii":
        case "latin1":
        case "binary":
          return _;
        case "utf8":
        case "utf-8":
          return X(O).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return _ * 2;
        case "hex":
          return _ >>> 1;
        case "base64":
          return Mt(O).length;
        default:
          if (A)
            return E ? -1 : X(O).length;
          p = ("" + p).toLowerCase(), A = !0;
      }
  }
  u.byteLength = j;
  function k(O, p, _) {
    var E = !1;
    if ((p === void 0 || p < 0) && (p = 0), p > this.length || ((_ === void 0 || _ > this.length) && (_ = this.length), _ <= 0) || (_ >>>= 0, p >>>= 0, _ <= p))
      return "";
    for (O || (O = "utf8"); ; )
      switch (O) {
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
            throw new TypeError("Unknown encoding: " + O);
          O = (O + "").toLowerCase(), E = !0;
      }
  }
  u.prototype._isBuffer = !0;
  function L(O, p, _) {
    var E = O[p];
    O[p] = O[_], O[_] = E;
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
  }, n && (u.prototype[n] = u.prototype.inspect), u.prototype.compare = function(p, _, E, A, U) {
    if (Ve(p, Uint8Array) && (p = u.from(p, p.offset, p.byteLength)), !u.isBuffer(p))
      throw new TypeError(
        'The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof p
      );
    if (_ === void 0 && (_ = 0), E === void 0 && (E = p ? p.length : 0), A === void 0 && (A = 0), U === void 0 && (U = this.length), _ < 0 || E > p.length || A < 0 || U > this.length)
      throw new RangeError("out of range index");
    if (A >= U && _ >= E)
      return 0;
    if (A >= U)
      return -1;
    if (_ >= E)
      return 1;
    if (_ >>>= 0, E >>>= 0, A >>>= 0, U >>>= 0, this === p)
      return 0;
    for (var x = U - A, oe = E - _, pe = Math.min(x, oe), ue = this.slice(A, U), Le = p.slice(_, E), m = 0; m < pe; ++m)
      if (ue[m] !== Le[m]) {
        x = ue[m], oe = Le[m];
        break;
      }
    return x < oe ? -1 : oe < x ? 1 : 0;
  };
  function Y(O, p, _, E, A) {
    if (O.length === 0)
      return -1;
    if (typeof _ == "string" ? (E = _, _ = 0) : _ > 2147483647 ? _ = 2147483647 : _ < -2147483648 && (_ = -2147483648), _ = +_, Ot(_) && (_ = A ? 0 : O.length - 1), _ < 0 && (_ = O.length + _), _ >= O.length) {
      if (A)
        return -1;
      _ = O.length - 1;
    } else if (_ < 0)
      if (A)
        _ = 0;
      else
        return -1;
    if (typeof p == "string" && (p = u.from(p, E)), u.isBuffer(p))
      return p.length === 0 ? -1 : ee(O, p, _, E, A);
    if (typeof p == "number")
      return p = p & 255, typeof Uint8Array.prototype.indexOf == "function" ? A ? Uint8Array.prototype.indexOf.call(O, p, _) : Uint8Array.prototype.lastIndexOf.call(O, p, _) : ee(O, [p], _, E, A);
    throw new TypeError("val must be string, number or Buffer");
  }
  function ee(O, p, _, E, A) {
    var U = 1, x = O.length, oe = p.length;
    if (E !== void 0 && (E = String(E).toLowerCase(), E === "ucs2" || E === "ucs-2" || E === "utf16le" || E === "utf-16le")) {
      if (O.length < 2 || p.length < 2)
        return -1;
      U = 2, x /= 2, oe /= 2, _ /= 2;
    }
    function pe(v, w) {
      return U === 1 ? v[w] : v.readUInt16BE(w * U);
    }
    var ue;
    if (A) {
      var Le = -1;
      for (ue = _; ue < x; ue++)
        if (pe(O, ue) === pe(p, Le === -1 ? 0 : ue - Le)) {
          if (Le === -1 && (Le = ue), ue - Le + 1 === oe)
            return Le * U;
        } else
          Le !== -1 && (ue -= ue - Le), Le = -1;
    } else
      for (_ + oe > x && (_ = x - oe), ue = _; ue >= 0; ue--) {
        for (var m = !0, d = 0; d < oe; d++)
          if (pe(O, ue + d) !== pe(p, d)) {
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
  function le(O, p, _, E) {
    _ = Number(_) || 0;
    var A = O.length - _;
    E ? (E = Number(E), E > A && (E = A)) : E = A;
    var U = p.length;
    E > U / 2 && (E = U / 2);
    for (var x = 0; x < E; ++x) {
      var oe = parseInt(p.substr(x * 2, 2), 16);
      if (Ot(oe))
        return x;
      O[_ + x] = oe;
    }
    return x;
  }
  function me(O, p, _, E) {
    return gt(X(p, O.length - _), O, _, E);
  }
  function Me(O, p, _, E) {
    return gt(ke(p), O, _, E);
  }
  function Pe(O, p, _, E) {
    return gt(Mt(p), O, _, E);
  }
  function Ue(O, p, _, E) {
    return gt(ut(p, O.length - _), O, _, E);
  }
  u.prototype.write = function(p, _, E, A) {
    if (_ === void 0)
      A = "utf8", E = this.length, _ = 0;
    else if (E === void 0 && typeof _ == "string")
      A = _, E = this.length, _ = 0;
    else if (isFinite(_))
      _ = _ >>> 0, isFinite(E) ? (E = E >>> 0, A === void 0 && (A = "utf8")) : (A = E, E = void 0);
    else
      throw new Error(
        "Buffer.write(string, encoding, offset[, length]) is no longer supported"
      );
    var U = this.length - _;
    if ((E === void 0 || E > U) && (E = U), p.length > 0 && (E < 0 || _ < 0) || _ > this.length)
      throw new RangeError("Attempt to write outside buffer bounds");
    A || (A = "utf8");
    for (var x = !1; ; )
      switch (A) {
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
          if (x)
            throw new TypeError("Unknown encoding: " + A);
          A = ("" + A).toLowerCase(), x = !0;
      }
  }, u.prototype.toJSON = function() {
    return {
      type: "Buffer",
      data: Array.prototype.slice.call(this._arr || this, 0)
    };
  };
  function be(O, p, _) {
    return p === 0 && _ === O.length ? r.fromByteArray(O) : r.fromByteArray(O.slice(p, _));
  }
  function he(O, p, _) {
    _ = Math.min(O.length, _);
    for (var E = [], A = p; A < _; ) {
      var U = O[A], x = null, oe = U > 239 ? 4 : U > 223 ? 3 : U > 191 ? 2 : 1;
      if (A + oe <= _) {
        var pe, ue, Le, m;
        switch (oe) {
          case 1:
            U < 128 && (x = U);
            break;
          case 2:
            pe = O[A + 1], (pe & 192) === 128 && (m = (U & 31) << 6 | pe & 63, m > 127 && (x = m));
            break;
          case 3:
            pe = O[A + 1], ue = O[A + 2], (pe & 192) === 128 && (ue & 192) === 128 && (m = (U & 15) << 12 | (pe & 63) << 6 | ue & 63, m > 2047 && (m < 55296 || m > 57343) && (x = m));
            break;
          case 4:
            pe = O[A + 1], ue = O[A + 2], Le = O[A + 3], (pe & 192) === 128 && (ue & 192) === 128 && (Le & 192) === 128 && (m = (U & 15) << 18 | (pe & 63) << 12 | (ue & 63) << 6 | Le & 63, m > 65535 && m < 1114112 && (x = m));
        }
      }
      x === null ? (x = 65533, oe = 1) : x > 65535 && (x -= 65536, E.push(x >>> 10 & 1023 | 55296), x = 56320 | x & 1023), E.push(x), A += oe;
    }
    return re(E);
  }
  var q = 4096;
  function re(O) {
    var p = O.length;
    if (p <= q)
      return String.fromCharCode.apply(String, O);
    for (var _ = "", E = 0; E < p; )
      _ += String.fromCharCode.apply(
        String,
        O.slice(E, E += q)
      );
    return _;
  }
  function ne(O, p, _) {
    var E = "";
    _ = Math.min(O.length, _);
    for (var A = p; A < _; ++A)
      E += String.fromCharCode(O[A] & 127);
    return E;
  }
  function G(O, p, _) {
    var E = "";
    _ = Math.min(O.length, _);
    for (var A = p; A < _; ++A)
      E += String.fromCharCode(O[A]);
    return E;
  }
  function ve(O, p, _) {
    var E = O.length;
    (!p || p < 0) && (p = 0), (!_ || _ < 0 || _ > E) && (_ = E);
    for (var A = "", U = p; U < _; ++U)
      A += hi[O[U]];
    return A;
  }
  function We(O, p, _) {
    for (var E = O.slice(p, _), A = "", U = 0; U < E.length - 1; U += 2)
      A += String.fromCharCode(E[U] + E[U + 1] * 256);
    return A;
  }
  u.prototype.slice = function(p, _) {
    var E = this.length;
    p = ~~p, _ = _ === void 0 ? E : ~~_, p < 0 ? (p += E, p < 0 && (p = 0)) : p > E && (p = E), _ < 0 ? (_ += E, _ < 0 && (_ = 0)) : _ > E && (_ = E), _ < p && (_ = p);
    var A = this.subarray(p, _);
    return Object.setPrototypeOf(A, u.prototype), A;
  };
  function Q(O, p, _) {
    if (O % 1 !== 0 || O < 0)
      throw new RangeError("offset is not uint");
    if (O + p > _)
      throw new RangeError("Trying to access beyond buffer length");
  }
  u.prototype.readUintLE = u.prototype.readUIntLE = function(p, _, E) {
    p = p >>> 0, _ = _ >>> 0, E || Q(p, _, this.length);
    for (var A = this[p], U = 1, x = 0; ++x < _ && (U *= 256); )
      A += this[p + x] * U;
    return A;
  }, u.prototype.readUintBE = u.prototype.readUIntBE = function(p, _, E) {
    p = p >>> 0, _ = _ >>> 0, E || Q(p, _, this.length);
    for (var A = this[p + --_], U = 1; _ > 0 && (U *= 256); )
      A += this[p + --_] * U;
    return A;
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
    for (var A = this[p], U = 1, x = 0; ++x < _ && (U *= 256); )
      A += this[p + x] * U;
    return U *= 128, A >= U && (A -= Math.pow(2, 8 * _)), A;
  }, u.prototype.readIntBE = function(p, _, E) {
    p = p >>> 0, _ = _ >>> 0, E || Q(p, _, this.length);
    for (var A = _, U = 1, x = this[p + --A]; A > 0 && (U *= 256); )
      x += this[p + --A] * U;
    return U *= 128, x >= U && (x -= Math.pow(2, 8 * _)), x;
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
  function F(O, p, _, E, A, U) {
    if (!u.isBuffer(O))
      throw new TypeError('"buffer" argument must be a Buffer instance');
    if (p > A || p < U)
      throw new RangeError('"value" argument is out of bounds');
    if (_ + E > O.length)
      throw new RangeError("Index out of range");
  }
  u.prototype.writeUintLE = u.prototype.writeUIntLE = function(p, _, E, A) {
    if (p = +p, _ = _ >>> 0, E = E >>> 0, !A) {
      var U = Math.pow(2, 8 * E) - 1;
      F(this, p, _, E, U, 0);
    }
    var x = 1, oe = 0;
    for (this[_] = p & 255; ++oe < E && (x *= 256); )
      this[_ + oe] = p / x & 255;
    return _ + E;
  }, u.prototype.writeUintBE = u.prototype.writeUIntBE = function(p, _, E, A) {
    if (p = +p, _ = _ >>> 0, E = E >>> 0, !A) {
      var U = Math.pow(2, 8 * E) - 1;
      F(this, p, _, E, U, 0);
    }
    var x = E - 1, oe = 1;
    for (this[_ + x] = p & 255; --x >= 0 && (oe *= 256); )
      this[_ + x] = p / oe & 255;
    return _ + E;
  }, u.prototype.writeUint8 = u.prototype.writeUInt8 = function(p, _, E) {
    return p = +p, _ = _ >>> 0, E || F(this, p, _, 1, 255, 0), this[_] = p & 255, _ + 1;
  }, u.prototype.writeUint16LE = u.prototype.writeUInt16LE = function(p, _, E) {
    return p = +p, _ = _ >>> 0, E || F(this, p, _, 2, 65535, 0), this[_] = p & 255, this[_ + 1] = p >>> 8, _ + 2;
  }, u.prototype.writeUint16BE = u.prototype.writeUInt16BE = function(p, _, E) {
    return p = +p, _ = _ >>> 0, E || F(this, p, _, 2, 65535, 0), this[_] = p >>> 8, this[_ + 1] = p & 255, _ + 2;
  }, u.prototype.writeUint32LE = u.prototype.writeUInt32LE = function(p, _, E) {
    return p = +p, _ = _ >>> 0, E || F(this, p, _, 4, 4294967295, 0), this[_ + 3] = p >>> 24, this[_ + 2] = p >>> 16, this[_ + 1] = p >>> 8, this[_] = p & 255, _ + 4;
  }, u.prototype.writeUint32BE = u.prototype.writeUInt32BE = function(p, _, E) {
    return p = +p, _ = _ >>> 0, E || F(this, p, _, 4, 4294967295, 0), this[_] = p >>> 24, this[_ + 1] = p >>> 16, this[_ + 2] = p >>> 8, this[_ + 3] = p & 255, _ + 4;
  }, u.prototype.writeIntLE = function(p, _, E, A) {
    if (p = +p, _ = _ >>> 0, !A) {
      var U = Math.pow(2, 8 * E - 1);
      F(this, p, _, E, U - 1, -U);
    }
    var x = 0, oe = 1, pe = 0;
    for (this[_] = p & 255; ++x < E && (oe *= 256); )
      p < 0 && pe === 0 && this[_ + x - 1] !== 0 && (pe = 1), this[_ + x] = (p / oe >> 0) - pe & 255;
    return _ + E;
  }, u.prototype.writeIntBE = function(p, _, E, A) {
    if (p = +p, _ = _ >>> 0, !A) {
      var U = Math.pow(2, 8 * E - 1);
      F(this, p, _, E, U - 1, -U);
    }
    var x = E - 1, oe = 1, pe = 0;
    for (this[_ + x] = p & 255; --x >= 0 && (oe *= 256); )
      p < 0 && pe === 0 && this[_ + x + 1] !== 0 && (pe = 1), this[_ + x] = (p / oe >> 0) - pe & 255;
    return _ + E;
  }, u.prototype.writeInt8 = function(p, _, E) {
    return p = +p, _ = _ >>> 0, E || F(this, p, _, 1, 127, -128), p < 0 && (p = 255 + p + 1), this[_] = p & 255, _ + 1;
  }, u.prototype.writeInt16LE = function(p, _, E) {
    return p = +p, _ = _ >>> 0, E || F(this, p, _, 2, 32767, -32768), this[_] = p & 255, this[_ + 1] = p >>> 8, _ + 2;
  }, u.prototype.writeInt16BE = function(p, _, E) {
    return p = +p, _ = _ >>> 0, E || F(this, p, _, 2, 32767, -32768), this[_] = p >>> 8, this[_ + 1] = p & 255, _ + 2;
  }, u.prototype.writeInt32LE = function(p, _, E) {
    return p = +p, _ = _ >>> 0, E || F(this, p, _, 4, 2147483647, -2147483648), this[_] = p & 255, this[_ + 1] = p >>> 8, this[_ + 2] = p >>> 16, this[_ + 3] = p >>> 24, _ + 4;
  }, u.prototype.writeInt32BE = function(p, _, E) {
    return p = +p, _ = _ >>> 0, E || F(this, p, _, 4, 2147483647, -2147483648), p < 0 && (p = 4294967295 + p + 1), this[_] = p >>> 24, this[_ + 1] = p >>> 16, this[_ + 2] = p >>> 8, this[_ + 3] = p & 255, _ + 4;
  };
  function Ie(O, p, _, E, A, U) {
    if (_ + E > O.length)
      throw new RangeError("Index out of range");
    if (_ < 0)
      throw new RangeError("Index out of range");
  }
  function R(O, p, _, E, A) {
    return p = +p, _ = _ >>> 0, A || Ie(O, p, _, 4), t.write(O, p, _, E, 23, 4), _ + 4;
  }
  u.prototype.writeFloatLE = function(p, _, E) {
    return R(this, p, _, !0, E);
  }, u.prototype.writeFloatBE = function(p, _, E) {
    return R(this, p, _, !1, E);
  };
  function D(O, p, _, E, A) {
    return p = +p, _ = _ >>> 0, A || Ie(O, p, _, 8), t.write(O, p, _, E, 52, 8), _ + 8;
  }
  u.prototype.writeDoubleLE = function(p, _, E) {
    return D(this, p, _, !0, E);
  }, u.prototype.writeDoubleBE = function(p, _, E) {
    return D(this, p, _, !1, E);
  }, u.prototype.copy = function(p, _, E, A) {
    if (!u.isBuffer(p))
      throw new TypeError("argument should be a Buffer");
    if (E || (E = 0), !A && A !== 0 && (A = this.length), _ >= p.length && (_ = p.length), _ || (_ = 0), A > 0 && A < E && (A = E), A === E || p.length === 0 || this.length === 0)
      return 0;
    if (_ < 0)
      throw new RangeError("targetStart out of bounds");
    if (E < 0 || E >= this.length)
      throw new RangeError("Index out of range");
    if (A < 0)
      throw new RangeError("sourceEnd out of bounds");
    A > this.length && (A = this.length), p.length - _ < A - E && (A = p.length - _ + E);
    var U = A - E;
    return this === p && typeof Uint8Array.prototype.copyWithin == "function" ? this.copyWithin(_, E, A) : Uint8Array.prototype.set.call(
      p,
      this.subarray(E, A),
      _
    ), U;
  }, u.prototype.fill = function(p, _, E, A) {
    if (typeof p == "string") {
      if (typeof _ == "string" ? (A = _, _ = 0, E = this.length) : typeof E == "string" && (A = E, E = this.length), A !== void 0 && typeof A != "string")
        throw new TypeError("encoding must be a string");
      if (typeof A == "string" && !u.isEncoding(A))
        throw new TypeError("Unknown encoding: " + A);
      if (p.length === 1) {
        var U = p.charCodeAt(0);
        (A === "utf8" && U < 128 || A === "latin1") && (p = U);
      }
    } else
      typeof p == "number" ? p = p & 255 : typeof p == "boolean" && (p = Number(p));
    if (_ < 0 || this.length < _ || this.length < E)
      throw new RangeError("Out of range index");
    if (E <= _)
      return this;
    _ = _ >>> 0, E = E === void 0 ? this.length : E >>> 0, p || (p = 0);
    var x;
    if (typeof p == "number")
      for (x = _; x < E; ++x)
        this[x] = p;
    else {
      var oe = u.isBuffer(p) ? p : u.from(p, A), pe = oe.length;
      if (pe === 0)
        throw new TypeError('The value "' + p + '" is invalid for argument "value"');
      for (x = 0; x < E - _; ++x)
        this[x + _] = oe[x % pe];
    }
    return this;
  };
  var V = /[^+/0-9A-Za-z-_]/g;
  function Z(O) {
    if (O = O.split("=")[0], O = O.trim().replace(V, ""), O.length < 2)
      return "";
    for (; O.length % 4 !== 0; )
      O = O + "=";
    return O;
  }
  function X(O, p) {
    p = p || 1 / 0;
    for (var _, E = O.length, A = null, U = [], x = 0; x < E; ++x) {
      if (_ = O.charCodeAt(x), _ > 55295 && _ < 57344) {
        if (!A) {
          if (_ > 56319) {
            (p -= 3) > -1 && U.push(239, 191, 189);
            continue;
          } else if (x + 1 === E) {
            (p -= 3) > -1 && U.push(239, 191, 189);
            continue;
          }
          A = _;
          continue;
        }
        if (_ < 56320) {
          (p -= 3) > -1 && U.push(239, 191, 189), A = _;
          continue;
        }
        _ = (A - 55296 << 10 | _ - 56320) + 65536;
      } else
        A && (p -= 3) > -1 && U.push(239, 191, 189);
      if (A = null, _ < 128) {
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
  function ke(O) {
    for (var p = [], _ = 0; _ < O.length; ++_)
      p.push(O.charCodeAt(_) & 255);
    return p;
  }
  function ut(O, p) {
    for (var _, E, A, U = [], x = 0; x < O.length && !((p -= 2) < 0); ++x)
      _ = O.charCodeAt(x), E = _ >> 8, A = _ % 256, U.push(A), U.push(E);
    return U;
  }
  function Mt(O) {
    return r.toByteArray(Z(O));
  }
  function gt(O, p, _, E) {
    for (var A = 0; A < E && !(A + _ >= p.length || A >= O.length); ++A)
      p[A + _] = O[A];
    return A;
  }
  function Ve(O, p) {
    return O instanceof p || O != null && O.constructor != null && O.constructor.name != null && O.constructor.name === p.name;
  }
  function Ot(O) {
    return O !== O;
  }
  var hi = function() {
    for (var O = "0123456789abcdef", p = new Array(256), _ = 0; _ < 16; ++_)
      for (var E = _ * 16, A = 0; A < 16; ++A)
        p[E + A] = O[_] + O[A];
    return p;
  }();
})(Bb);
/*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
(function(e, r) {
  var t = Bb, n = t.Buffer;
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
})(mf, mf.exports);
var Nd = mf.exports.Buffer, gp = Nd.isEncoding || function(e) {
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
function F4(e) {
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
function B4(e) {
  var r = F4(e);
  if (typeof r != "string" && (Nd.isEncoding === gp || !gp(e)))
    throw new Error("Unknown encoding: " + e);
  return r || e;
}
Fb.StringDecoder = Ho;
function Ho(e) {
  this.encoding = B4(e);
  var r;
  switch (this.encoding) {
    case "utf16le":
      this.text = Y4, this.end = G4, r = 4;
      break;
    case "utf8":
      this.fillLast = q4, r = 4;
      break;
    case "base64":
      this.text = K4, this.end = Z4, r = 3;
      break;
    default:
      this.write = Q4, this.end = X4;
      return;
  }
  this.lastNeed = 0, this.lastTotal = 0, this.lastChar = Nd.allocUnsafe(r);
}
Ho.prototype.write = function(e) {
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
Ho.prototype.end = z4;
Ho.prototype.text = H4;
Ho.prototype.fillLast = function(e) {
  if (this.lastNeed <= e.length)
    return e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);
  e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, e.length), this.lastNeed -= e.length;
};
function kl(e) {
  return e <= 127 ? 0 : e >> 5 === 6 ? 2 : e >> 4 === 14 ? 3 : e >> 3 === 30 ? 4 : e >> 6 === 2 ? -1 : -2;
}
function W4(e, r, t) {
  var n = r.length - 1;
  if (n < t)
    return 0;
  var i = kl(r[n]);
  return i >= 0 ? (i > 0 && (e.lastNeed = i - 1), i) : --n < t || i === -2 ? 0 : (i = kl(r[n]), i >= 0 ? (i > 0 && (e.lastNeed = i - 2), i) : --n < t || i === -2 ? 0 : (i = kl(r[n]), i >= 0 ? (i > 0 && (i === 2 ? i = 0 : e.lastNeed = i - 3), i) : 0));
}
function V4(e, r, t) {
  if ((r[0] & 192) !== 128)
    return e.lastNeed = 0, "\uFFFD";
  if (e.lastNeed > 1 && r.length > 1) {
    if ((r[1] & 192) !== 128)
      return e.lastNeed = 1, "\uFFFD";
    if (e.lastNeed > 2 && r.length > 2 && (r[2] & 192) !== 128)
      return e.lastNeed = 2, "\uFFFD";
  }
}
function q4(e) {
  var r = this.lastTotal - this.lastNeed, t = V4(this, e);
  if (t !== void 0)
    return t;
  if (this.lastNeed <= e.length)
    return e.copy(this.lastChar, r, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);
  e.copy(this.lastChar, r, 0, e.length), this.lastNeed -= e.length;
}
function H4(e, r) {
  var t = W4(this, e, r);
  if (!this.lastNeed)
    return e.toString("utf8", r);
  this.lastTotal = t;
  var n = e.length - (t - this.lastNeed);
  return e.copy(this.lastChar, 0, n), e.toString("utf8", r, n);
}
function z4(e) {
  var r = e && e.length ? this.write(e) : "";
  return this.lastNeed ? r + "\uFFFD" : r;
}
function Y4(e, r) {
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
function G4(e) {
  var r = e && e.length ? this.write(e) : "";
  if (this.lastNeed) {
    var t = this.lastTotal - this.lastNeed;
    return r + this.lastChar.toString("utf16le", 0, t);
  }
  return r;
}
function K4(e, r) {
  var t = (e.length - r) % 3;
  return t === 0 ? e.toString("base64", r) : (this.lastNeed = 3 - t, this.lastTotal = 3, t === 1 ? this.lastChar[0] = e[e.length - 1] : (this.lastChar[0] = e[e.length - 2], this.lastChar[1] = e[e.length - 1]), e.toString("base64", r, e.length - t));
}
function Z4(e) {
  var r = e && e.length ? this.write(e) : "";
  return this.lastNeed ? r + this.lastChar.toString("base64", 0, 3 - this.lastNeed) : r;
}
function Q4(e) {
  return e.toString(this.encoding);
}
function X4(e) {
  return e && e.length ? this.write(e) : "";
}
var Wb = h && h.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(jd, "__esModule", { value: !0 });
var J4 = Wb(ur), e3 = te, Dl = Wb(Ad), t3 = Fb, Op = new t3.StringDecoder("utf8");
function r3(e) {
  return new J4.default(u3(e));
}
function n3(e, r) {
  if (Object.prototype.hasOwnProperty.call(e, "_buffer"))
    return i3(e, r);
  if (Object.prototype.hasOwnProperty.call(e, "_buffers"))
    return o3(e, r);
  throw (0, e3.newError)("Don't know how to decode strings from '".concat(e, "'"));
}
function i3(e, r) {
  var t = e.position, n = t + r;
  return e.position = Math.min(n, e.length), e._buffer.toString("utf8", t, n);
}
function o3(e, r) {
  return a3(e, r, function(t) {
    return Op.write(t._buffer);
  }, function() {
    return Op.end();
  });
}
function a3(e, r, t, n) {
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
function u3(e) {
  return typeof Dl.default.Buffer.from == "function" ? Dl.default.Buffer.from(e, "utf8") : new Dl.default.Buffer(e, "utf8");
}
jd.default = {
  encode: r3,
  decode: n3
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
  var i = $d;
  Object.defineProperty(e, "ChannelConfig", { enumerable: !0, get: function() {
    return n(i).default;
  } });
  var o = ur;
  Object.defineProperty(e, "alloc", { enumerable: !0, get: function() {
    return o.alloc;
  } });
  var a = jd;
  Object.defineProperty(e, "utf8", { enumerable: !0, get: function() {
    return n(a).default;
  } });
})(ui);
Object.defineProperty(Pd, "__esModule", { value: !0 });
var s3 = ui, Vb = te, c3 = 1616949271;
function wi(e, r) {
  return {
    major: e,
    minor: r
  };
}
function l3(e) {
  if (e.length > 4)
    throw (0, Vb.newError)("It should not have more than 4 versions of the protocol");
  var r = (0, s3.alloc)(5 * 4);
  return r.writeInt32(c3), e.forEach(function(t) {
    if (t instanceof Array) {
      var n = t[0], i = n.major, o = n.minor, a = t[1].minor, u = o - a;
      r.writeInt32(u << 16 | o << 8 | i);
    } else {
      var i = t.major, o = t.minor;
      r.writeInt32(o << 8 | i);
    }
  }), r.reset(), r;
}
function f3(e) {
  var r = [
    e.readUInt8(),
    e.readUInt8(),
    e.readUInt8(),
    e.readUInt8()
  ];
  if (r[0] === 72 && r[1] === 84 && r[2] === 84 && r[3] === 80)
    throw (0, Vb.newError)("Server responded HTTP. Make sure you are not trying to connect to the http endpoint (HTTP defaults to port 7474 whereas BOLT defaults to port 7687)");
  return Number(r[3] + "." + r[2]);
}
function d3() {
  return l3([
    wi(5, 0),
    [wi(4, 4), wi(4, 2)],
    wi(4, 1),
    wi(3, 0)
  ]);
}
function h3(e) {
  var r = this;
  return new Promise(function(t, n) {
    var i = function(o) {
      n(o);
    };
    e.onerror = i.bind(r), e._error && i(e._error), e.onmessage = function(o) {
      try {
        var a = f3(o);
        t({
          protocolVersion: a,
          consumeRemainingBuffer: function(u) {
            o.hasRemaining() && u(o.readSlice(o.remaining()));
          }
        });
      } catch (u) {
        n(u);
      }
    }, e.write(d3());
  });
}
Pd.default = h3;
var Md = {}, Rc = {}, xt = {}, Ae = {}, Cc = {}, kd = h && h.__extends || function() {
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
}(), v3 = h && h.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(Cc, "__esModule", { value: !0 });
v3(te);
var $c = function() {
  function e() {
  }
  return e.ofRecord = function(r) {
    return r === null ? e.ofNull() : new y3(r);
  }, e.ofMessageResponse = function(r) {
    return r === null ? e.ofNull() : new p3(r);
  }, e.ofNull = function() {
    return new _3();
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
Cc.default = $c;
var p3 = function(e) {
  kd(r, e);
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
}($c), _3 = function(e) {
  kd(r, e);
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
}($c), y3 = function(e) {
  kd(r, e);
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
}($c), pn = h && h.__extends || function() {
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
}(), m3 = h && h.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(Ae, "__esModule", { value: !0 });
Ae.ProcedureRouteObserver = Ae.RouteObserver = Ae.CompletedObserver = Ae.FailedObserver = Ae.ResetObserver = Ae.LoginObserver = Ae.ResultStreamObserver = Ae.StreamObserver = void 0;
var mt = te, qb = m3(Cc), b3 = mt.internal.constants.FETCH_ALL, Zr = mt.error.PROTOCOL_ERROR, si = function() {
  function e() {
  }
  return e.prototype.onNext = function(r) {
  }, e.prototype.onError = function(r) {
  }, e.prototype.onCompleted = function(r) {
  }, e;
}();
Ae.StreamObserver = si;
var Dd = function(e) {
  pn(r, e);
  function r(t) {
    var n = t === void 0 ? {} : t, i = n.reactive, o = i === void 0 ? !1 : i, a = n.moreFunction, u = n.discardFunction, c = n.fetchSize, s = c === void 0 ? b3 : c, l = n.beforeError, f = n.afterError, y = n.beforeKeys, b = n.afterKeys, g = n.beforeComplete, S = n.afterComplete, P = n.server, I = n.highRecordWatermark, $ = I === void 0 ? Number.MAX_VALUE : I, j = n.lowRecordWatermark, k = j === void 0 ? Number.MAX_VALUE : j, L = e.call(this) || this;
    return L._fieldKeys = null, L._fieldLookup = null, L._head = null, L._queuedRecords = [], L._tail = null, L._error = null, L._observers = [], L._meta = {}, L._server = P, L._beforeError = l, L._afterError = f, L._beforeKeys = y, L._afterKeys = b, L._beforeComplete = g, L._afterComplete = S, L._queryId = null, L._moreFunction = a, L._discardFunction = u, L._discard = !1, L._fetchSize = s, L._lowRecordWatermark = k, L._highRecordWatermark = $, L._setState(o ? Et.READY : Et.READY_STREAMING), L._setupAutoPull(), L._paused = !1, L;
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
Ae.ResultStreamObserver = Dd;
var g3 = function(e) {
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
Ae.LoginObserver = g3;
var O3 = function(e) {
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
Ae.ResetObserver = O3;
var w3 = function(e) {
  pn(r, e);
  function r(t) {
    var n = t.error, i = t.onError, o = e.call(this, { beforeError: i }) || this;
    return o.onError(n), o;
  }
  return r;
}(Dd);
Ae.FailedObserver = w3;
var E3 = function(e) {
  pn(r, e);
  function r() {
    var t = e.call(this) || this;
    return e.prototype.markCompleted.call(t), t;
  }
  return r;
}(Dd);
Ae.CompletedObserver = E3;
var S3 = function(e) {
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
    this._onCompleted && this._onCompleted(qb.default.ofRecord(this._records[0]));
  }, r;
}(si);
Ae.ProcedureRouteObserver = S3;
var T3 = function(e) {
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
    this._onCompleted && this._onCompleted(qb.default.ofMessageResponse(t));
  }, r;
}(si);
Ae.RouteObserver = T3;
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
Object.defineProperty(xt, "__esModule", { value: !0 });
xt.assertImpersonatedUserIsEmpty = xt.assertTxConfigIsEmpty = xt.assertDatabaseIsEmpty = void 0;
var Ud = te;
function P3(e, r, t) {
  if (r === void 0 && (r = function() {
  }), e && !e.isEmpty()) {
    var n = (0, Ud.newError)("Driver is connected to the database that does not support transaction configuration. Please upgrade to neo4j 3.5.0 or later in order to use this functionality");
    throw r(n.message), t.onError(n), n;
  }
}
xt.assertTxConfigIsEmpty = P3;
function I3(e, r, t) {
  if (r === void 0 && (r = function() {
  }), e) {
    var n = (0, Ud.newError)("Driver is connected to the database that does not support multiple databases. Please upgrade to neo4j 4.0.0 or later in order to use this functionality");
    throw r(n.message), t.onError(n), n;
  }
}
xt.assertDatabaseIsEmpty = I3;
function A3(e, r, t) {
  if (r === void 0 && (r = function() {
  }), e) {
    var n = (0, Ud.newError)("Driver is connected to the database that does not support user impersonation. Please upgrade to neo4j 4.4.0 or later in order to use this functionality. " + "Trying to impersonate ".concat(e, "."));
    throw r(n.message), t.onError(n), n;
  }
}
xt.assertImpersonatedUserIsEmpty = A3;
var nt = {}, Qr = {}, jc = {}, zo = {};
Object.defineProperty(zo, "__esModule", { value: !0 });
zo.identity = void 0;
function R3(e) {
  return e;
}
zo.identity = R3;
var C3 = h && h.__createBinding || (Object.create ? function(e, r, t, n) {
  n === void 0 && (n = t);
  var i = Object.getOwnPropertyDescriptor(r, t);
  (!i || ("get" in i ? !r.__esModule : i.writable || i.configurable)) && (i = { enumerable: !0, get: function() {
    return r[t];
  } }), Object.defineProperty(e, n, i);
} : function(e, r, t, n) {
  n === void 0 && (n = t), e[n] = r[t];
}), $3 = h && h.__setModuleDefault || (Object.create ? function(e, r) {
  Object.defineProperty(e, "default", { enumerable: !0, value: r });
} : function(e, r) {
  e.default = r;
}), j3 = h && h.__importStar || function(e) {
  if (e && e.__esModule)
    return e;
  var r = {};
  if (e != null)
    for (var t in e)
      t !== "default" && Object.prototype.hasOwnProperty.call(e, t) && C3(r, e, t);
  return $3(r, e), r;
};
Object.defineProperty(jc, "__esModule", { value: !0 });
jc.functional = void 0;
jc.functional = j3(zo);
var br = {};
Object.defineProperty(br, "__esModule", { value: !0 });
br.verifyStructSize = br.Structure = void 0;
var Hb = te, N3 = Hb.error.PROTOCOL_ERROR, zb = function() {
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
br.Structure = zb;
function M3(e, r, t) {
  if (r !== t)
    throw (0, Hb.newError)("Wrong struct size for ".concat(e, ", expected ").concat(r, " but was ").concat(t), N3);
}
br.verifyStructSize = M3;
br.default = zb;
Object.defineProperty(Qr, "__esModule", { value: !0 });
Qr.Unpacker = Qr.Packer = void 0;
var Ii = ui, Yb = jc, Gb = br, xe = te, k3 = xe.error.PROTOCOL_ERROR, Kb = 128, Zb = 144, Qb = 160, Xb = 176, Jb = 192, e0 = 193, t0 = 194, r0 = 195, n0 = 200, i0 = 201, o0 = 202, a0 = 203, u0 = 208, s0 = 209, c0 = 210, l0 = 212, f0 = 213, d0 = 214, h0 = 204, v0 = 205, p0 = 206, _0 = 216, y0 = 217, m0 = 218, b0 = 220, g0 = 221, D3 = function() {
  function e(r) {
    this._ch = r, this._byteArraysSupported = !0;
  }
  return e.prototype.packable = function(r, t) {
    var n = this;
    t === void 0 && (t = Yb.functional.identity);
    try {
      r = t(r);
    } catch (a) {
      return function() {
        throw a;
      };
    }
    if (r === null)
      return function() {
        return n._ch.writeUInt8(Jb);
      };
    if (r === !0)
      return function() {
        return n._ch.writeUInt8(r0);
      };
    if (r === !1)
      return function() {
        return n._ch.writeUInt8(t0);
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
        return n.packInteger((0, xe.int)(r));
      };
    if ((0, xe.isInt)(r))
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
    if (L3(r))
      return this.packableIterable(r, t);
    if (r instanceof Gb.Structure) {
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
      throw (0, xe.newError)("Cannot pack given iterable, ".concat(i.message, ": ").concat(r));
    }
  }, e.prototype.packStruct = function(r, t) {
    t = t || [], this.packStructHeader(t.length, r);
    for (var n = 0; n < t.length; n++)
      t[n]();
  }, e.prototype.packInteger = function(r) {
    var t = r.high, n = r.low;
    r.greaterThanOrEqual(-16) && r.lessThan(128) ? this._ch.writeInt8(n) : r.greaterThanOrEqual(-128) && r.lessThan(-16) ? (this._ch.writeUInt8(n0), this._ch.writeInt8(n)) : r.greaterThanOrEqual(-32768) && r.lessThan(32768) ? (this._ch.writeUInt8(i0), this._ch.writeInt16(n)) : r.greaterThanOrEqual(-2147483648) && r.lessThan(2147483648) ? (this._ch.writeUInt8(o0), this._ch.writeInt32(n)) : (this._ch.writeUInt8(a0), this._ch.writeInt32(t), this._ch.writeInt32(n));
  }, e.prototype.packFloat = function(r) {
    this._ch.writeUInt8(e0), this._ch.writeFloat64(r);
  }, e.prototype.packString = function(r) {
    var t = Ii.utf8.encode(r), n = t.length;
    if (n < 16)
      this._ch.writeUInt8(Kb | n), this._ch.writeBytes(t);
    else if (n < 256)
      this._ch.writeUInt8(u0), this._ch.writeUInt8(n), this._ch.writeBytes(t);
    else if (n < 65536)
      this._ch.writeUInt8(s0), this._ch.writeUInt8(n / 256 >> 0), this._ch.writeUInt8(n % 256), this._ch.writeBytes(t);
    else if (n < 4294967296)
      this._ch.writeUInt8(c0), this._ch.writeUInt8((n / 16777216 >> 0) % 256), this._ch.writeUInt8((n / 65536 >> 0) % 256), this._ch.writeUInt8((n / 256 >> 0) % 256), this._ch.writeUInt8(n % 256), this._ch.writeBytes(t);
    else
      throw (0, xe.newError)("UTF-8 strings of size " + n + " are not supported");
  }, e.prototype.packListHeader = function(r) {
    if (r < 16)
      this._ch.writeUInt8(Zb | r);
    else if (r < 256)
      this._ch.writeUInt8(l0), this._ch.writeUInt8(r);
    else if (r < 65536)
      this._ch.writeUInt8(f0), this._ch.writeUInt8((r / 256 >> 0) % 256), this._ch.writeUInt8(r % 256);
    else if (r < 4294967296)
      this._ch.writeUInt8(d0), this._ch.writeUInt8((r / 16777216 >> 0) % 256), this._ch.writeUInt8((r / 65536 >> 0) % 256), this._ch.writeUInt8((r / 256 >> 0) % 256), this._ch.writeUInt8(r % 256);
    else
      throw (0, xe.newError)("Lists of size " + r + " are not supported");
  }, e.prototype.packBytes = function(r) {
    if (this._byteArraysSupported) {
      this.packBytesHeader(r.length);
      for (var t = 0; t < r.length; t++)
        this._ch.writeInt8(r[t]);
    } else
      throw (0, xe.newError)("Byte arrays are not supported by the database this driver is connected to");
  }, e.prototype.packBytesHeader = function(r) {
    if (r < 256)
      this._ch.writeUInt8(h0), this._ch.writeUInt8(r);
    else if (r < 65536)
      this._ch.writeUInt8(v0), this._ch.writeUInt8((r / 256 >> 0) % 256), this._ch.writeUInt8(r % 256);
    else if (r < 4294967296)
      this._ch.writeUInt8(p0), this._ch.writeUInt8((r / 16777216 >> 0) % 256), this._ch.writeUInt8((r / 65536 >> 0) % 256), this._ch.writeUInt8((r / 256 >> 0) % 256), this._ch.writeUInt8(r % 256);
    else
      throw (0, xe.newError)("Byte arrays of size " + r + " are not supported");
  }, e.prototype.packMapHeader = function(r) {
    if (r < 16)
      this._ch.writeUInt8(Qb | r);
    else if (r < 256)
      this._ch.writeUInt8(_0), this._ch.writeUInt8(r);
    else if (r < 65536)
      this._ch.writeUInt8(y0), this._ch.writeUInt8(r / 256 >> 0), this._ch.writeUInt8(r % 256);
    else if (r < 4294967296)
      this._ch.writeUInt8(m0), this._ch.writeUInt8((r / 16777216 >> 0) % 256), this._ch.writeUInt8((r / 65536 >> 0) % 256), this._ch.writeUInt8((r / 256 >> 0) % 256), this._ch.writeUInt8(r % 256);
    else
      throw (0, xe.newError)("Maps of size " + r + " are not supported");
  }, e.prototype.packStructHeader = function(r, t) {
    if (r < 16)
      this._ch.writeUInt8(Xb | r), this._ch.writeUInt8(t);
    else if (r < 256)
      this._ch.writeUInt8(b0), this._ch.writeUInt8(r), this._ch.writeUInt8(t);
    else if (r < 65536)
      this._ch.writeUInt8(g0), this._ch.writeUInt8(r / 256 >> 0), this._ch.writeUInt8(r % 256);
    else
      throw (0, xe.newError)("Structures of size " + r + " are not supported");
  }, e.prototype.disableByteArrays = function() {
    this._byteArraysSupported = !1;
  }, e.prototype._nonPackableValue = function(r) {
    return function() {
      throw (0, xe.newError)(r, k3);
    };
  }, e;
}();
Qr.Packer = D3;
var U3 = function() {
  function e(r, t) {
    r === void 0 && (r = !1), t === void 0 && (t = !1), this._disableLosslessIntegers = r, this._useBigInt = t;
  }
  return e.prototype.unpack = function(r, t) {
    t === void 0 && (t = Yb.functional.identity);
    var n = r.readUInt8(), i = n & 240, o = n & 15;
    if (n === Jb)
      return null;
    var a = this._unpackBoolean(n);
    if (a !== null)
      return a;
    var u = this._unpackNumberOrInteger(n, r);
    if (u !== null) {
      if ((0, xe.isInt)(u)) {
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
    throw (0, xe.newError)("Unknown packed value with marker " + n.toString(16));
  }, e.prototype.unpackInteger = function(r) {
    var t = r.readUInt8(), n = this._unpackInteger(t, r);
    if (n == null)
      throw (0, xe.newError)("Unable to unpack integer value with marker " + t.toString(16));
    return n;
  }, e.prototype._unpackBoolean = function(r) {
    return r === r0 ? !0 : r === t0 ? !1 : null;
  }, e.prototype._unpackNumberOrInteger = function(r, t) {
    return r === e0 ? t.readFloat64() : this._unpackInteger(r, t);
  }, e.prototype._unpackInteger = function(r, t) {
    if (r >= 0 && r < 128)
      return (0, xe.int)(r);
    if (r >= 240 && r < 256)
      return (0, xe.int)(r - 256);
    if (r === n0)
      return (0, xe.int)(t.readInt8());
    if (r === i0)
      return (0, xe.int)(t.readInt16());
    if (r === o0) {
      var n = t.readInt32();
      return (0, xe.int)(n);
    } else if (r === a0) {
      var i = t.readInt32(), o = t.readInt32();
      return new xe.Integer(o, i);
    } else
      return null;
  }, e.prototype._unpackString = function(r, t, n, i) {
    return t === Kb ? Ii.utf8.decode(i, n) : r === u0 ? Ii.utf8.decode(i, i.readUInt8()) : r === s0 ? Ii.utf8.decode(i, i.readUInt16()) : r === c0 ? Ii.utf8.decode(i, i.readUInt32()) : null;
  }, e.prototype._unpackList = function(r, t, n, i, o) {
    return t === Zb ? this._unpackListWithSize(n, i, o) : r === l0 ? this._unpackListWithSize(i.readUInt8(), i, o) : r === f0 ? this._unpackListWithSize(i.readUInt16(), i, o) : r === d0 ? this._unpackListWithSize(i.readUInt32(), i, o) : null;
  }, e.prototype._unpackListWithSize = function(r, t, n) {
    for (var i = [], o = 0; o < r; o++)
      i.push(this.unpack(t, n));
    return i;
  }, e.prototype._unpackByteArray = function(r, t) {
    return r === h0 ? this._unpackByteArrayWithSize(t.readUInt8(), t) : r === v0 ? this._unpackByteArrayWithSize(t.readUInt16(), t) : r === p0 ? this._unpackByteArrayWithSize(t.readUInt32(), t) : null;
  }, e.prototype._unpackByteArrayWithSize = function(r, t) {
    for (var n = new Int8Array(r), i = 0; i < r; i++)
      n[i] = t.readInt8();
    return n;
  }, e.prototype._unpackMap = function(r, t, n, i, o) {
    return t === Qb ? this._unpackMapWithSize(n, i, o) : r === _0 ? this._unpackMapWithSize(i.readUInt8(), i, o) : r === y0 ? this._unpackMapWithSize(i.readUInt16(), i, o) : r === m0 ? this._unpackMapWithSize(i.readUInt32(), i, o) : null;
  }, e.prototype._unpackMapWithSize = function(r, t, n) {
    for (var i = {}, o = 0; o < r; o++) {
      var a = this.unpack(t, n);
      i[a] = this.unpack(t, n);
    }
    return i;
  }, e.prototype._unpackStruct = function(r, t, n, i, o) {
    return t === Xb ? this._unpackStructWithSize(n, i, o) : r === b0 ? this._unpackStructWithSize(i.readUInt8(), i, o) : r === g0 ? this._unpackStructWithSize(i.readUInt16(), i, o) : null;
  }, e.prototype._unpackStructWithSize = function(r, t, n) {
    for (var i = t.readUInt8(), o = new Gb.Structure(i, []), a = 0; a < r; a++)
      o.fields.push(this.unpack(t, n));
    return n(o);
  }, e;
}();
Qr.Unpacker = U3;
function L3(e) {
  return e == null ? !1 : typeof e[Symbol.iterator] == "function";
}
var Ln = {}, O0 = h && h.__extends || function() {
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
}(), x3 = h && h.__createBinding || (Object.create ? function(e, r, t, n) {
  n === void 0 && (n = t);
  var i = Object.getOwnPropertyDescriptor(r, t);
  (!i || ("get" in i ? !r.__esModule : i.writable || i.configurable)) && (i = { enumerable: !0, get: function() {
    return r[t];
  } }), Object.defineProperty(e, n, i);
} : function(e, r, t, n) {
  n === void 0 && (n = t), e[n] = r[t];
}), F3 = h && h.__setModuleDefault || (Object.create ? function(e, r) {
  Object.defineProperty(e, "default", { enumerable: !0, value: r });
} : function(e, r) {
  e.default = r;
}), B3 = h && h.__importStar || function(e) {
  if (e && e.__esModule)
    return e;
  var r = {};
  if (e != null)
    for (var t in e)
      t !== "default" && Object.prototype.hasOwnProperty.call(e, t) && x3(r, e, t);
  return F3(r, e), r;
};
Object.defineProperty(Ln, "__esModule", { value: !0 });
Ln.Unpacker = Ln.Packer = void 0;
var w0 = B3(Qr), W3 = function(e) {
  O0(r, e);
  function r() {
    return e !== null && e.apply(this, arguments) || this;
  }
  return r.prototype.disableByteArrays = function() {
    throw new Error("Bolt V2 should always support byte arrays");
  }, r;
}(w0.Packer);
Ln.Packer = W3;
var V3 = function(e) {
  O0(r, e);
  function r(t, n) {
    return t === void 0 && (t = !1), n === void 0 && (n = !1), e.call(this, t, n) || this;
  }
  return r;
}(w0.Unpacker);
Ln.Unpacker = V3;
var q3 = h && h.__createBinding || (Object.create ? function(e, r, t, n) {
  n === void 0 && (n = t);
  var i = Object.getOwnPropertyDescriptor(r, t);
  (!i || ("get" in i ? !r.__esModule : i.writable || i.configurable)) && (i = { enumerable: !0, get: function() {
    return r[t];
  } }), Object.defineProperty(e, n, i);
} : function(e, r, t, n) {
  n === void 0 && (n = t), e[n] = r[t];
}), H3 = h && h.__setModuleDefault || (Object.create ? function(e, r) {
  Object.defineProperty(e, "default", { enumerable: !0, value: r });
} : function(e, r) {
  e.default = r;
}), Ld = h && h.__importStar || function(e) {
  if (e && e.__esModule)
    return e;
  var r = {};
  if (e != null)
    for (var t in e)
      t !== "default" && Object.prototype.hasOwnProperty.call(e, t) && q3(r, e, t);
  return H3(r, e), r;
};
Object.defineProperty(nt, "__esModule", { value: !0 });
nt.structure = nt.v2 = nt.v1 = void 0;
var z3 = Ld(Qr);
nt.v1 = z3;
var E0 = Ld(Ln);
nt.v2 = E0;
var Y3 = Ld(br);
nt.structure = Y3;
nt.default = E0;
var sr = {};
Object.defineProperty(sr, "__esModule", { value: !0 });
var it = te, S0 = it.internal.constants, G3 = S0.ACCESS_MODE_READ, pa = S0.FETCH_ALL, wp = it.internal.util.assertString, K3 = 1, Z3 = 15, Ep = 16, Q3 = 63, X3 = 1, J3 = 2, e8 = 17, t8 = 18, r8 = 19, Sp = 102, n8 = 47, i8 = 63, o8 = "r", Ai = -1, ci = function() {
  function e(r, t, n) {
    this.signature = r, this.fields = t, this.toString = n;
  }
  return e.init = function(r, t) {
    return new e(K3, [r, t], function() {
      return "INIT ".concat(r, " {...}");
    });
  }, e.run = function(r, t) {
    return new e(Ep, [r, t], function() {
      return "RUN ".concat(r, " ").concat(it.json.stringify(t));
    });
  }, e.pullAll = function() {
    return a8;
  }, e.reset = function() {
    return u8;
  }, e.hello = function(r, t, n, i) {
    n === void 0 && (n = null), i === void 0 && (i = null);
    var o = Object.assign({ user_agent: r }, t);
    return n && (o.routing = n), i && (o.patch_bolt = i), new e(X3, [o], function() {
      return "HELLO {user_agent: '".concat(r, "', ...}");
    });
  }, e.begin = function(r) {
    var t = r === void 0 ? {} : r, n = t.bookmarks, i = t.txConfig, o = t.database, a = t.mode, u = t.impersonatedUser, c = Tp(n, i, o, a, u);
    return new e(e8, [c], function() {
      return "BEGIN ".concat(it.json.stringify(c));
    });
  }, e.commit = function() {
    return s8;
  }, e.rollback = function() {
    return c8;
  }, e.runWithMetadata = function(r, t, n) {
    var i = n === void 0 ? {} : n, o = i.bookmarks, a = i.txConfig, u = i.database, c = i.mode, s = i.impersonatedUser, l = Tp(o, a, u, c, s);
    return new e(Ep, [r, t, l], function() {
      return "RUN ".concat(r, " ").concat(it.json.stringify(t), " ").concat(it.json.stringify(l));
    });
  }, e.goodbye = function() {
    return l8;
  }, e.pull = function(r) {
    var t = r === void 0 ? {} : r, n = t.stmtId, i = n === void 0 ? Ai : n, o = t.n, a = o === void 0 ? pa : o, u = Pp(i ?? Ai, a || pa);
    return new e(i8, [u], function() {
      return "PULL ".concat(it.json.stringify(u));
    });
  }, e.discard = function(r) {
    var t = r === void 0 ? {} : r, n = t.stmtId, i = n === void 0 ? Ai : n, o = t.n, a = o === void 0 ? pa : o, u = Pp(i ?? Ai, a || pa);
    return new e(n8, [u], function() {
      return "DISCARD ".concat(it.json.stringify(u));
    });
  }, e.route = function(r, t, n) {
    return r === void 0 && (r = {}), t === void 0 && (t = []), n === void 0 && (n = null), new e(Sp, [r, t, n], function() {
      return "ROUTE ".concat(it.json.stringify(r), " ").concat(it.json.stringify(t), " ").concat(n);
    });
  }, e.routeV4x4 = function(r, t, n) {
    r === void 0 && (r = {}), t === void 0 && (t = []), n === void 0 && (n = {});
    var i = {};
    return n.databaseName && (i.db = n.databaseName), n.impersonatedUser && (i.imp_user = n.impersonatedUser), new e(Sp, [r, t, i], function() {
      return "ROUTE ".concat(it.json.stringify(r), " ").concat(it.json.stringify(t), " ").concat(it.json.stringify(i));
    });
  }, e;
}();
sr.default = ci;
function Tp(e, r, t, n, i) {
  var o = {};
  return e.isEmpty() || (o.bookmarks = e.values()), r.timeout !== null && (o.tx_timeout = r.timeout), r.metadata && (o.tx_metadata = r.metadata), t && (o.db = wp(t, "database")), i && (o.imp_user = wp(i, "impersonatedUser")), n === G3 && (o.mode = o8), o;
}
function Pp(e, r) {
  var t = { n: (0, it.int)(r) };
  return e !== Ai && (t.qid = (0, it.int)(e)), t;
}
var a8 = new ci(Q3, [], function() {
  return "PULL_ALL";
}), u8 = new ci(Z3, [], function() {
  return "RESET";
}), s8 = new ci(t8, [], function() {
  return "COMMIT";
}), c8 = new ci(r8, [], function() {
  return "ROLLBACK";
}), l8 = new ci(J3, [], function() {
  return "GOODBYE";
}), Nc = {}, at = {};
Object.defineProperty(at, "__esModule", { value: !0 });
at.TypeTransformer = void 0;
var f8 = nt, d8 = te, h8 = d8.internal.objectUtil, v8 = function() {
  function e(r) {
    this._transformers = r, this._transformersPerSignature = new Map(r.map(function(t) {
      return [t.signature, t];
    })), this.fromStructure = this.fromStructure.bind(this), this.toStructure = this.toStructure.bind(this), Object.freeze(this);
  }
  return e.prototype.fromStructure = function(r) {
    try {
      if (r instanceof f8.structure.Structure && this._transformersPerSignature.has(r.signature)) {
        var t = this._transformersPerSignature.get(r.signature).fromStructure;
        return t(r);
      }
      return r;
    } catch (n) {
      return h8.createBrokenObject(n);
    }
  }, e.prototype.toStructure = function(r) {
    var t = this._transformers.find(function(n) {
      var i = n.isTypeInstance;
      return i(r);
    });
    return t !== void 0 ? t.toStructure(r) : r;
  }, e;
}();
at.default = v8;
var p8 = function() {
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
at.TypeTransformer = p8;
var Mc = h && h.__read || function(e, r) {
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
Object.defineProperty(Nc, "__esModule", { value: !0 });
var Xe = te, kc = nt, Dc = at, Uc = Xe.error.PROTOCOL_ERROR, _8 = 78, y8 = 3, m8 = 82, b8 = 5, g8 = 114, O8 = 3, w8 = 80, E8 = 3;
function S8() {
  return new Dc.TypeTransformer({
    signature: _8,
    isTypeInstance: function(e) {
      return e instanceof Xe.Node;
    },
    toStructure: function(e) {
      throw (0, Xe.newError)("It is not allowed to pass nodes in query parameters, given: ".concat(e), Uc);
    },
    fromStructure: function(e) {
      kc.structure.verifyStructSize("Node", y8, e.size);
      var r = Mc(e.fields, 3), t = r[0], n = r[1], i = r[2];
      return new Xe.Node(t, n, i);
    }
  });
}
function T8() {
  return new Dc.TypeTransformer({
    signature: m8,
    isTypeInstance: function(e) {
      return e instanceof Xe.Relationship;
    },
    toStructure: function(e) {
      throw (0, Xe.newError)("It is not allowed to pass relationships in query parameters, given: ".concat(e), Uc);
    },
    fromStructure: function(e) {
      kc.structure.verifyStructSize("Relationship", b8, e.size);
      var r = Mc(e.fields, 5), t = r[0], n = r[1], i = r[2], o = r[3], a = r[4];
      return new Xe.Relationship(t, n, i, o, a);
    }
  });
}
function P8() {
  return new Dc.TypeTransformer({
    signature: g8,
    isTypeInstance: function(e) {
      return e instanceof Xe.UnboundRelationship;
    },
    toStructure: function(e) {
      throw (0, Xe.newError)("It is not allowed to pass unbound relationships in query parameters, given: ".concat(e), Uc);
    },
    fromStructure: function(e) {
      kc.structure.verifyStructSize("UnboundRelationship", O8, e.size);
      var r = Mc(e.fields, 3), t = r[0], n = r[1], i = r[2];
      return new Xe.UnboundRelationship(t, n, i);
    }
  });
}
function I8() {
  return new Dc.TypeTransformer({
    signature: w8,
    isTypeInstance: function(e) {
      return e instanceof Xe.Path;
    },
    toStructure: function(e) {
      throw (0, Xe.newError)("It is not allowed to pass paths in query parameters, given: ".concat(e), Uc);
    },
    fromStructure: function(e) {
      kc.structure.verifyStructSize("Path", E8, e.size);
      for (var r = Mc(e.fields, 3), t = r[0], n = r[1], i = r[2], o = [], a = t[0], u = 0; u < i.length; u += 2) {
        var c = t[i[u + 1]], s = (0, Xe.toNumber)(i[u]), l = void 0;
        s > 0 ? (l = n[s - 1], l instanceof Xe.UnboundRelationship && (n[s - 1] = l = l.bindTo(a, c))) : (l = n[-s - 1], l instanceof Xe.UnboundRelationship && (n[-s - 1] = l = l.bindTo(c, a))), o.push(new Xe.PathSegment(a, l, c)), a = c;
      }
      return new Xe.Path(t[0], t[t.length - 1], o);
    }
  });
}
Nc.default = {
  createNodeTransformer: S8,
  createRelationshipTransformer: T8,
  createUnboundRelationshipTransformer: P8,
  createPathTransformer: I8
};
var xd = h && h.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(Rc, "__esModule", { value: !0 });
var Ul = xt, Ll = nt, _a = xd(sr), xl = Ae, Lc = te, A8 = xd(Nc), R8 = xd(at), Ip = Lc.internal.bookmarks.Bookmarks, T0 = Lc.internal.constants, Ap = T0.ACCESS_MODE_WRITE, C8 = T0.BOLT_PROTOCOL_V1;
Lc.internal.logger.Logger;
var Rp = Lc.internal.txConfig.TxConfig, $8 = function() {
  function e(r, t, n, i, o, a) {
    var u = n === void 0 ? {} : n, c = u.disableLosslessIntegers, s = u.useBigInt;
    i === void 0 && (i = function() {
      return null;
    }), this._server = r || {}, this._chunker = t, this._packer = this._createPacker(t), this._unpacker = this._createUnpacker(c, s), this._responseHandler = i(this), this._log = o, this._onProtocolError = a, this._fatalError = null, this._lastMessageSignature = null, this._config = { disableLosslessIntegers: c, useBigInt: s };
  }
  return Object.defineProperty(e.prototype, "transformer", {
    get: function() {
      var r = this;
      return this._transformer === void 0 && (this._transformer = new R8.default(Object.values(A8.default).map(function(t) {
        return t(r._config, r._log);
      }))), this._transformer;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(e.prototype, "version", {
    get: function() {
      return C8;
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
    var t = this, n = r === void 0 ? {} : r, i = n.userAgent, o = n.authToken, a = n.onError, u = n.onComplete, c = new xl.LoginObserver({
      onError: function(s) {
        return t._onLoginError(s, a);
      },
      onCompleted: function(s) {
        return t._onLoginCompleted(s, u);
      }
    });
    return this.write(_a.default.init(i, o), c, !0), c;
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
      bookmarks: Ip.empty(),
      txConfig: Rp.empty(),
      mode: Ap,
      beforeError: n,
      afterError: i,
      beforeComplete: o,
      afterComplete: a
    });
  }, e.prototype.rollbackTransaction = function(r) {
    var t = r === void 0 ? {} : r, n = t.beforeError, i = t.afterError, o = t.beforeComplete, a = t.afterComplete;
    return this.run("ROLLBACK", {}, {
      bookmarks: Ip.empty(),
      txConfig: Rp.empty(),
      mode: Ap,
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
    var u = i.impersonatedUser, c = i.beforeKeys, s = i.afterKeys, l = i.beforeError, f = i.afterError, y = i.beforeComplete, b = i.afterComplete, g = i.flush, S = g === void 0 ? !0 : g, P = i.highRecordWatermark, I = P === void 0 ? Number.MAX_VALUE : P, $ = i.lowRecordWatermark, j = $ === void 0 ? Number.MAX_VALUE : $, k = new xl.ResultStreamObserver({
      server: this._server,
      beforeKeys: c,
      afterKeys: s,
      beforeError: l,
      afterError: f,
      beforeComplete: y,
      afterComplete: b,
      highRecordWatermark: I,
      lowRecordWatermark: j
    });
    return (0, Ul.assertTxConfigIsEmpty)(o, this._onProtocolError, k), (0, Ul.assertDatabaseIsEmpty)(a, this._onProtocolError, k), (0, Ul.assertImpersonatedUserIsEmpty)(u, this._onProtocolError, k), this.write(_a.default.run(r, t), k, !1), this.write(_a.default.pullAll(), k, S), k;
  }, Object.defineProperty(e.prototype, "currentFailure", {
    get: function() {
      return this._responseHandler.currentFailure;
    },
    enumerable: !1,
    configurable: !0
  }), e.prototype.reset = function(r) {
    var t = r === void 0 ? {} : r, n = t.onError, i = t.onComplete, o = new xl.ResetObserver({
      onProtocolError: this._onProtocolError,
      onError: n,
      onComplete: i
    });
    return this.write(_a.default.reset(), o, !0), o;
  }, e.prototype._createPacker = function(r) {
    return new Ll.v1.Packer(r);
  }, e.prototype._createUnpacker = function(r, t) {
    return new Ll.v1.Unpacker(r, t);
  }, e.prototype.write = function(r, t, n) {
    var i = this.queueObserverIfProtocolIsNotBroken(t);
    if (i) {
      this._log.isDebugEnabled() && this._log.debug("C: ".concat(r)), this._lastMessageSignature = r.signature;
      var o = new Ll.structure.Structure(r.signature, r.fields);
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
Rc.default = $8;
var xc = {}, Fc = {}, tr = {};
Object.defineProperty(tr, "__esModule", { value: !0 });
tr.epochSecondAndNanoToLocalDateTime = tr.nanoOfDayToLocalTime = tr.epochDayToDate = void 0;
var Wr = te, Ar = Wr.internal.temporalUtil, j8 = Ar.DAYS_0000_TO_1970, Fl = Ar.DAYS_PER_400_YEAR_CYCLE, Cp = Ar.NANOS_PER_HOUR, $p = Ar.NANOS_PER_MINUTE, bf = Ar.NANOS_PER_SECOND, jp = Ar.SECONDS_PER_DAY, N8 = Ar.floorDiv, M8 = Ar.floorMod;
function P0(e) {
  e = (0, Wr.int)(e);
  var r = e.add(j8).subtract(60), t = (0, Wr.int)(0);
  if (r.lessThan(0)) {
    var n = r.add(1).div(Fl).subtract(1);
    t = n.multiply(400), r = r.add(n.multiply(-Fl));
  }
  var i = r.multiply(400).add(591).div(Fl), o = r.subtract(i.multiply(365).add(i.div(4)).subtract(i.div(100)).add(i.div(400)));
  o.lessThan(0) && (i = i.subtract(1), o = r.subtract(i.multiply(365).add(i.div(4)).subtract(i.div(100)).add(i.div(400)))), i = i.add(t);
  var a = o, u = a.multiply(5).add(2).div(153), c = u.add(2).modulo(12).add(1), s = a.subtract(u.multiply(306).add(5).div(10)).add(1);
  return i = i.add(u.div(10)), new Wr.Date(i, c, s);
}
tr.epochDayToDate = P0;
function I0(e) {
  e = (0, Wr.int)(e);
  var r = e.div(Cp);
  e = e.subtract(r.multiply(Cp));
  var t = e.div($p);
  e = e.subtract(t.multiply($p));
  var n = e.div(bf), i = e.subtract(n.multiply(bf));
  return new Wr.LocalTime(r, t, n, i);
}
tr.nanoOfDayToLocalTime = I0;
function k8(e, r) {
  var t = N8(e, jp), n = M8(e, jp), i = n.multiply(bf).add(r), o = P0(t), a = I0(i);
  return new Wr.LocalDateTime(o.year, o.month, o.day, a.hour, a.minute, a.second, a.nanosecond);
}
tr.epochSecondAndNanoToLocalDateTime = k8;
var za = h && h.__assign || function() {
  return za = Object.assign || function(e) {
    for (var r, t = 1, n = arguments.length; t < n; t++) {
      r = arguments[t];
      for (var i in r)
        Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
    }
    return e;
  }, za.apply(this, arguments);
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
}, D8 = h && h.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(Fc, "__esModule", { value: !0 });
var we = te, Qe = nt, lr = at, li = tr, U8 = D8(Nc), Fd = we.internal.temporalUtil, L8 = Fd.dateToEpochDay, Bd = Fd.localDateTimeToEpochSecond, A0 = Fd.localTimeToNanoOfDay, Np = 88, x8 = 3, Mp = 89, F8 = 4, kp = 69, B8 = 4, Dp = 116, W8 = 1, Up = 84, V8 = 2, Lp = 68, q8 = 1, xp = 100, H8 = 2, Fp = 70, z8 = 3, Bp = 102, Y8 = 3;
function G8() {
  return new lr.TypeTransformer({
    signature: Np,
    isTypeInstance: function(e) {
      return (0, we.isPoint)(e) && (e.z === null || e.z === void 0);
    },
    toStructure: function(e) {
      return new Qe.structure.Structure(Np, [
        (0, we.int)(e.srid),
        e.x,
        e.y
      ]);
    },
    fromStructure: function(e) {
      Qe.structure.verifyStructSize("Point2D", x8, e.size);
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
function K8() {
  return new lr.TypeTransformer({
    signature: Mp,
    isTypeInstance: function(e) {
      return (0, we.isPoint)(e) && e.z !== null && e.z !== void 0;
    },
    toStructure: function(e) {
      return new Qe.structure.Structure(Mp, [
        (0, we.int)(e.srid),
        e.x,
        e.y,
        e.z
      ]);
    },
    fromStructure: function(e) {
      Qe.structure.verifyStructSize("Point3D", F8, e.size);
      var r = cr(e.fields, 4), t = r[0], n = r[1], i = r[2], o = r[3];
      return new we.Point(t, n, i, o);
    }
  });
}
function Z8() {
  return new lr.TypeTransformer({
    signature: kp,
    isTypeInstance: we.isDuration,
    toStructure: function(e) {
      var r = (0, we.int)(e.months), t = (0, we.int)(e.days), n = (0, we.int)(e.seconds), i = (0, we.int)(e.nanoseconds);
      return new Qe.structure.Structure(kp, [r, t, n, i]);
    },
    fromStructure: function(e) {
      Qe.structure.verifyStructSize("Duration", B8, e.size);
      var r = cr(e.fields, 4), t = r[0], n = r[1], i = r[2], o = r[3];
      return new we.Duration(t, n, i, o);
    }
  });
}
function Q8(e) {
  var r = e.disableLosslessIntegers, t = e.useBigInt;
  return new lr.TypeTransformer({
    signature: Dp,
    isTypeInstance: we.isLocalTime,
    toStructure: function(n) {
      var i = A0(n.hour, n.minute, n.second, n.nanosecond);
      return new Qe.structure.Structure(Dp, [i]);
    },
    fromStructure: function(n) {
      Qe.structure.verifyStructSize("LocalTime", W8, n.size);
      var i = cr(n.fields, 1), o = i[0], a = (0, li.nanoOfDayToLocalTime)(o);
      return fi(a, r, t);
    }
  });
}
function X8(e) {
  var r = e.disableLosslessIntegers, t = e.useBigInt;
  return new lr.TypeTransformer({
    signature: Up,
    isTypeInstance: we.isTime,
    toStructure: function(n) {
      var i = A0(n.hour, n.minute, n.second, n.nanosecond), o = (0, we.int)(n.timeZoneOffsetSeconds);
      return new Qe.structure.Structure(Up, [i, o]);
    },
    fromStructure: function(n) {
      Qe.structure.verifyStructSize("Time", V8, n.size);
      var i = cr(n.fields, 2), o = i[0], a = i[1], u = (0, li.nanoOfDayToLocalTime)(o), c = new we.Time(u.hour, u.minute, u.second, u.nanosecond, a);
      return fi(c, r, t);
    }
  });
}
function J8(e) {
  var r = e.disableLosslessIntegers, t = e.useBigInt;
  return new lr.TypeTransformer({
    signature: Lp,
    isTypeInstance: we.isDate,
    toStructure: function(n) {
      var i = L8(n.year, n.month, n.day);
      return new Qe.structure.Structure(Lp, [i]);
    },
    fromStructure: function(n) {
      Qe.structure.verifyStructSize("Date", q8, n.size);
      var i = cr(n.fields, 1), o = i[0], a = (0, li.epochDayToDate)(o);
      return fi(a, r, t);
    }
  });
}
function e6(e) {
  var r = e.disableLosslessIntegers, t = e.useBigInt;
  return new lr.TypeTransformer({
    signature: xp,
    isTypeInstance: we.isLocalDateTime,
    toStructure: function(n) {
      var i = Bd(n.year, n.month, n.day, n.hour, n.minute, n.second, n.nanosecond), o = (0, we.int)(n.nanosecond);
      return new Qe.structure.Structure(xp, [i, o]);
    },
    fromStructure: function(n) {
      Qe.structure.verifyStructSize("LocalDateTime", H8, n.size);
      var i = cr(n.fields, 2), o = i[0], a = i[1], u = (0, li.epochSecondAndNanoToLocalDateTime)(o, a);
      return fi(u, r, t);
    }
  });
}
function t6(e) {
  var r = e.disableLosslessIntegers, t = e.useBigInt;
  return new lr.TypeTransformer({
    signature: Bp,
    isTypeInstance: function(n) {
      return (0, we.isDateTime)(n) && n.timeZoneId != null;
    },
    toStructure: function(n) {
      var i = Bd(n.year, n.month, n.day, n.hour, n.minute, n.second, n.nanosecond), o = (0, we.int)(n.nanosecond), a = n.timeZoneId;
      return new Qe.structure.Structure(Bp, [i, o, a]);
    },
    fromStructure: function(n) {
      Qe.structure.verifyStructSize("DateTimeWithZoneId", Y8, n.size);
      var i = cr(n.fields, 3), o = i[0], a = i[1], u = i[2], c = (0, li.epochSecondAndNanoToLocalDateTime)(o, a), s = new we.DateTime(c.year, c.month, c.day, c.hour, c.minute, c.second, c.nanosecond, null, u);
      return fi(s, r, t);
    }
  });
}
function r6(e) {
  var r = e.disableLosslessIntegers, t = e.useBigInt;
  return new lr.TypeTransformer({
    signature: Fp,
    isTypeInstance: function(n) {
      return (0, we.isDateTime)(n) && n.timeZoneId == null;
    },
    toStructure: function(n) {
      var i = Bd(n.year, n.month, n.day, n.hour, n.minute, n.second, n.nanosecond), o = (0, we.int)(n.nanosecond), a = (0, we.int)(n.timeZoneOffsetSeconds);
      return new Qe.structure.Structure(Fp, [i, o, a]);
    },
    fromStructure: function(n) {
      Qe.structure.verifyStructSize("DateTimeWithZoneOffset", z8, n.size);
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
Fc.default = za(za({}, U8.default), { createPoint2DTransformer: G8, createPoint3DTransformer: K8, createDurationTransformer: Z8, createLocalTimeTransformer: Q8, createTimeTransformer: X8, createDateTransformer: J8, createLocalDateTimeTransformer: e6, createDateTimeWithZoneIdTransformer: t6, createDateTimeWithOffsetTransformer: r6 });
var n6 = h && h.__extends || function() {
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
}(), Bc = h && h.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(xc, "__esModule", { value: !0 });
var i6 = Bc(Rc), Wp = Bc(nt), o6 = te, a6 = Bc(Fc), u6 = Bc(at), s6 = o6.internal.constants.BOLT_PROTOCOL_V2, c6 = function(e) {
  n6(r, e);
  function r() {
    return e !== null && e.apply(this, arguments) || this;
  }
  return r.prototype._createPacker = function(t) {
    return new Wp.default.Packer(t);
  }, r.prototype._createUnpacker = function(t, n) {
    return new Wp.default.Unpacker(t, n);
  }, Object.defineProperty(r.prototype, "transformer", {
    get: function() {
      var t = this;
      return this._transformer === void 0 && (this._transformer = new u6.default(Object.values(a6.default).map(function(n) {
        return n(t._config, t._log);
      }))), this._transformer;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(r.prototype, "version", {
    get: function() {
      return s6;
    },
    enumerable: !1,
    configurable: !0
  }), r;
}(i6.default);
xc.default = c6;
var Wc = {}, Vc = {}, gf = h && h.__assign || function() {
  return gf = Object.assign || function(e) {
    for (var r, t = 1, n = arguments.length; t < n; t++) {
      r = arguments[t];
      for (var i in r)
        Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
    }
    return e;
  }, gf.apply(this, arguments);
}, l6 = h && h.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(Vc, "__esModule", { value: !0 });
var f6 = l6(Fc);
Vc.default = gf({}, f6.default);
var d6 = h && h.__extends || function() {
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
}, qc = h && h.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(Wc, "__esModule", { value: !0 });
var h6 = qc(xc), Mr = qc(sr), ya = xt, Lr = Ae, v6 = qc(Vc), p6 = qc(at), Wd = te;
Wd.internal.bookmarks.Bookmarks;
var _6 = Wd.internal.constants.BOLT_PROTOCOL_V3, y6 = Wd.internal.txConfig.TxConfig, R0 = "context", m6 = "CALL dbms.cluster.routing.getRoutingTable($".concat(R0, ")"), b6 = new Lr.StreamObserver(), g6 = function(e) {
  d6(r, e);
  function r() {
    return e !== null && e.apply(this, arguments) || this;
  }
  return Object.defineProperty(r.prototype, "version", {
    get: function() {
      return _6;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(r.prototype, "transformer", {
    get: function() {
      var t = this;
      return this._transformer === void 0 && (this._transformer = new p6.default(Object.values(v6.default).map(function(n) {
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
    this.write(Mr.default.goodbye(), b6, !0);
  }, r.prototype.beginTransaction = function(t) {
    var n = t === void 0 ? {} : t, i = n.bookmarks, o = n.txConfig, a = n.database, u = n.impersonatedUser, c = n.mode, s = n.beforeError, l = n.afterError, f = n.beforeComplete, y = n.afterComplete, b = new Lr.ResultStreamObserver({
      server: this._server,
      beforeError: s,
      afterError: l,
      beforeComplete: f,
      afterComplete: y
    });
    return b.prepareToHandleSingleResponse(), (0, ya.assertDatabaseIsEmpty)(a, this._onProtocolError, b), (0, ya.assertImpersonatedUserIsEmpty)(u, this._onProtocolError, b), this.write(Mr.default.begin({ bookmarks: i, txConfig: o, mode: c }), b, !0), b;
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
    var o = i === void 0 ? {} : i, a = o.bookmarks, u = o.txConfig, c = o.database, s = o.impersonatedUser, l = o.mode, f = o.beforeKeys, y = o.afterKeys, b = o.beforeError, g = o.afterError, S = o.beforeComplete, P = o.afterComplete, I = o.flush, $ = I === void 0 ? !0 : I, j = o.highRecordWatermark, k = j === void 0 ? Number.MAX_VALUE : j, L = o.lowRecordWatermark, Y = L === void 0 ? Number.MAX_VALUE : L, ee = new Lr.ResultStreamObserver({
      server: this._server,
      beforeKeys: f,
      afterKeys: y,
      beforeError: b,
      afterError: g,
      beforeComplete: S,
      afterComplete: P,
      highRecordWatermark: k,
      lowRecordWatermark: Y
    });
    return (0, ya.assertDatabaseIsEmpty)(c, this._onProtocolError, ee), (0, ya.assertImpersonatedUserIsEmpty)(s, this._onProtocolError, ee), this.write(Mr.default.runWithMetadata(t, n, {
      bookmarks: a,
      txConfig: u,
      mode: l
    }), ee, !1), this.write(Mr.default.pullAll(), ee, $), ee;
  }, r.prototype.requestRoutingInformation = function(t) {
    var n, i = t.routingContext, o = i === void 0 ? {} : i, a = t.sessionContext, u = a === void 0 ? {} : a, c = t.onError, s = t.onCompleted, l = this.run(m6, (n = {}, n[R0] = o, n), Ya(Ya({}, u), { txConfig: y6.empty() }));
    return new Lr.ProcedureRouteObserver({
      resultObserver: l,
      onProtocolError: this._onProtocolError,
      onError: c,
      onCompleted: s
    });
  }, r;
}(h6.default);
Wc.default = g6;
var Hc = {}, zc = {}, Of = h && h.__assign || function() {
  return Of = Object.assign || function(e) {
    for (var r, t = 1, n = arguments.length; t < n; t++) {
      r = arguments[t];
      for (var i in r)
        Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
    }
    return e;
  }, Of.apply(this, arguments);
}, O6 = h && h.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(zc, "__esModule", { value: !0 });
var w6 = O6(Vc);
zc.default = Of({}, w6.default);
var E6 = h && h.__extends || function() {
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
}(), Ga = h && h.__assign || function() {
  return Ga = Object.assign || function(e) {
    for (var r, t = 1, n = arguments.length; t < n; t++) {
      r = arguments[t];
      for (var i in r)
        Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
    }
    return e;
  }, Ga.apply(this, arguments);
}, Yc = h && h.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(Hc, "__esModule", { value: !0 });
var S6 = Yc(Wc), Ei = Yc(sr), Vp = xt, Bl = Ae, T6 = Yc(zc), P6 = Yc(at), Vd = te;
Vd.internal.bookmarks.Bookmarks;
var C0 = Vd.internal.constants, I6 = C0.BOLT_PROTOCOL_V4_0, A6 = C0.FETCH_ALL, R6 = Vd.internal.txConfig.TxConfig, $0 = "context", j0 = "database", C6 = "CALL dbms.routing.getRoutingTable($".concat($0, ", $").concat(j0, ")"), $6 = function(e) {
  E6(r, e);
  function r() {
    return e !== null && e.apply(this, arguments) || this;
  }
  return Object.defineProperty(r.prototype, "version", {
    get: function() {
      return I6;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(r.prototype, "transformer", {
    get: function() {
      var t = this;
      return this._transformer === void 0 && (this._transformer = new P6.default(Object.values(T6.default).map(function(n) {
        return n(t._config, t._log);
      }))), this._transformer;
    },
    enumerable: !1,
    configurable: !0
  }), r.prototype.beginTransaction = function(t) {
    var n = t === void 0 ? {} : t, i = n.bookmarks, o = n.txConfig, a = n.database, u = n.impersonatedUser, c = n.mode, s = n.beforeError, l = n.afterError, f = n.beforeComplete, y = n.afterComplete, b = new Bl.ResultStreamObserver({
      server: this._server,
      beforeError: s,
      afterError: l,
      beforeComplete: f,
      afterComplete: y
    });
    return b.prepareToHandleSingleResponse(), (0, Vp.assertImpersonatedUserIsEmpty)(u, this._onProtocolError, b), this.write(Ei.default.begin({ bookmarks: i, txConfig: o, database: a, mode: c }), b, !0), b;
  }, r.prototype.run = function(t, n, i) {
    var o = i === void 0 ? {} : i, a = o.bookmarks, u = o.txConfig, c = o.database, s = o.impersonatedUser, l = o.mode, f = o.beforeKeys, y = o.afterKeys, b = o.beforeError, g = o.afterError, S = o.beforeComplete, P = o.afterComplete, I = o.flush, $ = I === void 0 ? !0 : I, j = o.reactive, k = j === void 0 ? !1 : j, L = o.fetchSize, Y = L === void 0 ? A6 : L, ee = o.highRecordWatermark, le = ee === void 0 ? Number.MAX_VALUE : ee, me = o.lowRecordWatermark, Me = me === void 0 ? Number.MAX_VALUE : me, Pe = new Bl.ResultStreamObserver({
      server: this._server,
      reactive: k,
      fetchSize: Y,
      moreFunction: this._requestMore.bind(this),
      discardFunction: this._requestDiscard.bind(this),
      beforeKeys: f,
      afterKeys: y,
      beforeError: b,
      afterError: g,
      beforeComplete: S,
      afterComplete: P,
      highRecordWatermark: le,
      lowRecordWatermark: Me
    });
    (0, Vp.assertImpersonatedUserIsEmpty)(s, this._onProtocolError, Pe);
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
    var n, i = t.routingContext, o = i === void 0 ? {} : i, a = t.databaseName, u = a === void 0 ? null : a, c = t.sessionContext, s = c === void 0 ? {} : c, l = t.onError, f = t.onCompleted, y = this.run(C6, (n = {}, n[$0] = o, n[j0] = u, n), Ga(Ga({}, s), { txConfig: R6.empty() }));
    return new Bl.ProcedureRouteObserver({
      resultObserver: y,
      onProtocolError: this._onProtocolError,
      onError: l,
      onCompleted: f
    });
  }, r;
}(S6.default);
Hc.default = $6;
var Gc = {}, Kc = {}, wf = h && h.__assign || function() {
  return wf = Object.assign || function(e) {
    for (var r, t = 1, n = arguments.length; t < n; t++) {
      r = arguments[t];
      for (var i in r)
        Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
    }
    return e;
  }, wf.apply(this, arguments);
}, j6 = h && h.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(Kc, "__esModule", { value: !0 });
var N6 = j6(zc);
Kc.default = wf({}, N6.default);
var M6 = h && h.__extends || function() {
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
}(), Zc = h && h.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(Gc, "__esModule", { value: !0 });
var k6 = Zc(Hc), D6 = Zc(sr), U6 = Ae, L6 = te, x6 = Zc(Kc), F6 = Zc(at), B6 = L6.internal.constants.BOLT_PROTOCOL_V4_1, W6 = function(e) {
  M6(r, e);
  function r(t, n, i, o, a, u, c) {
    o === void 0 && (o = function() {
      return null;
    });
    var s = e.call(this, t, n, i, o, a, u) || this;
    return s._serversideRouting = c, s;
  }
  return Object.defineProperty(r.prototype, "version", {
    get: function() {
      return B6;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(r.prototype, "transformer", {
    get: function() {
      var t = this;
      return this._transformer === void 0 && (this._transformer = new F6.default(Object.values(x6.default).map(function(n) {
        return n(t._config, t._log);
      }))), this._transformer;
    },
    enumerable: !1,
    configurable: !0
  }), r.prototype.initialize = function(t) {
    var n = this, i = t === void 0 ? {} : t, o = i.userAgent, a = i.authToken, u = i.onError, c = i.onComplete, s = new U6.LoginObserver({
      onError: function(l) {
        return n._onLoginError(l, u);
      },
      onCompleted: function(l) {
        return n._onLoginCompleted(l, c);
      }
    });
    return this.write(D6.default.hello(o, a, this._serversideRouting), s, !0), s;
  }, r;
}(k6.default);
Gc.default = W6;
var Qc = {}, Xc = {}, Ef = h && h.__assign || function() {
  return Ef = Object.assign || function(e) {
    for (var r, t = 1, n = arguments.length; t < n; t++) {
      r = arguments[t];
      for (var i in r)
        Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
    }
    return e;
  }, Ef.apply(this, arguments);
}, V6 = h && h.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(Xc, "__esModule", { value: !0 });
var q6 = V6(Kc);
Xc.default = Ef({}, q6.default);
var H6 = h && h.__extends || function() {
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
}(), qd = h && h.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(Qc, "__esModule", { value: !0 });
var z6 = qd(Gc), Y6 = te, G6 = qd(Xc), K6 = qd(at), Z6 = Y6.internal.constants.BOLT_PROTOCOL_V4_2, Q6 = function(e) {
  H6(r, e);
  function r() {
    return e !== null && e.apply(this, arguments) || this;
  }
  return Object.defineProperty(r.prototype, "version", {
    get: function() {
      return Z6;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(r.prototype, "transformer", {
    get: function() {
      var t = this;
      return this._transformer === void 0 && (this._transformer = new K6.default(Object.values(G6.default).map(function(n) {
        return n(t._config, t._log);
      }))), this._transformer;
    },
    enumerable: !1,
    configurable: !0
  }), r;
}(z6.default);
Qc.default = Q6;
var Yo = {}, Jc = {}, Sf = h && h.__assign || function() {
  return Sf = Object.assign || function(e) {
    for (var r, t = 1, n = arguments.length; t < n; t++) {
      r = arguments[t];
      for (var i in r)
        Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
    }
    return e;
  }, Sf.apply(this, arguments);
}, X6 = h && h.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(Jc, "__esModule", { value: !0 });
var J6 = X6(Xc);
Jc.default = Sf({}, J6.default);
var Go = {}, Ko = {}, Tf = h && h.__assign || function() {
  return Tf = Object.assign || function(e) {
    for (var r, t = 1, n = arguments.length; t < n; t++) {
      r = arguments[t];
      for (var i in r)
        Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
    }
    return e;
  }, Tf.apply(this, arguments);
}, eW = h && h.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(Ko, "__esModule", { value: !0 });
var tW = eW(Jc);
Ko.default = Tf({}, tW.default);
var N0 = h && h.__read || function(e, r) {
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
}, rW = h && h.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(Go, "__esModule", { value: !0 });
var Ka = nt, yt = te, M0 = rW(Ko), nW = tr, iW = zo, qi = yt.internal.temporalUtil.localDateTimeToEpochSecond, qp = 73, oW = 3, Hp = 105, aW = 3;
function uW(e, r) {
  var t = e.disableLosslessIntegers, n = e.useBigInt, i = M0.default.createDateTimeWithZoneIdTransformer(e);
  return i.extendsWith({
    signature: Hp,
    fromStructure: function(o) {
      Ka.structure.verifyStructSize("DateTimeWithZoneId", aW, o.size);
      var a = N0(o.fields, 3), u = a[0], c = a[1], s = a[2], l = Pf(s, u, c), f = new yt.DateTime(l.year, l.month, l.day, l.hour, l.minute, l.second, (0, yt.int)(c), l.timeZoneOffsetSeconds, s);
      return k0(f, t, n);
    },
    toStructure: function(o) {
      var a = qi(o.year, o.month, o.day, o.hour, o.minute, o.second, o.nanosecond), u = o.timeZoneOffsetSeconds != null ? o.timeZoneOffsetSeconds : sW(o.timeZoneId, a, o.nanosecond);
      o.timeZoneOffsetSeconds == null && r.warn('DateTime objects without "timeZoneOffsetSeconds" property are prune to bugs related to ambiguous times. For instance, 2022-10-30T2:30:00[Europe/Berlin] could be GMT+1 or GMT+2.');
      var c = a.subtract(u), s = (0, yt.int)(o.nanosecond), l = o.timeZoneId;
      return new Ka.structure.Structure(Hp, [c, s, l]);
    }
  });
}
function sW(e, r, t) {
  var n = Pf(e, r, t), i = qi(n.year, n.month, n.day, n.hour, n.minute, n.second, t), o = i.subtract(r), a = r.subtract(o), u = Pf(e, a, t), c = qi(u.year, u.month, u.day, u.hour, u.minute, u.second, t), s = c.subtract(a);
  return s;
}
function Pf(e, r, t) {
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
    } : iW.identity : s.type !== "literal" && (c[s.type] = (0, yt.int)(s.value)), c;
  }, {});
  a.year = a.adjustEra(a.year);
  var u = qi(a.year, a.month, a.day, a.hour, a.minute, a.second, a.nanosecond);
  return a.timeZoneOffsetSeconds = u.subtract(r), a.hour = a.hour.modulo(24), a;
}
function cW(e) {
  var r = e.disableLosslessIntegers, t = e.useBigInt, n = M0.default.createDateTimeWithOffsetTransformer(e);
  return n.extendsWith({
    signature: qp,
    toStructure: function(i) {
      var o = qi(i.year, i.month, i.day, i.hour, i.minute, i.second, i.nanosecond), a = (0, yt.int)(i.nanosecond), u = (0, yt.int)(i.timeZoneOffsetSeconds), c = o.subtract(u);
      return new Ka.structure.Structure(qp, [c, a, u]);
    },
    fromStructure: function(i) {
      Ka.structure.verifyStructSize("DateTimeWithZoneOffset", oW, i.size);
      var o = N0(i.fields, 3), a = o[0], u = o[1], c = o[2], s = (0, yt.int)(a).add(c), l = (0, nW.epochSecondAndNanoToLocalDateTime)(s, u), f = new yt.DateTime(l.year, l.month, l.day, l.hour, l.minute, l.second, l.nanosecond, c, null);
      return k0(f, r, t);
    }
  });
}
function k0(e, r, t) {
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
Go.default = {
  createDateTimeWithZoneIdTransformer: uW,
  createDateTimeWithOffsetTransformer: cW
};
var lW = h && h.__extends || function() {
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
Object.defineProperty(Yo, "__esModule", { value: !0 });
var fW = Zo(Qc), zp = Zo(sr), Yp = Ae, Gp = Zo(Jc), dW = Zo(Go), Kp = Zo(at), D0 = te, hW = D0.internal.bookmarks.Bookmarks, vW = D0.internal.constants.BOLT_PROTOCOL_V4_3, pW = function(e) {
  lW(r, e);
  function r() {
    return e !== null && e.apply(this, arguments) || this;
  }
  return Object.defineProperty(r.prototype, "version", {
    get: function() {
      return vW;
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
    var n = t.routingContext, i = n === void 0 ? {} : n, o = t.databaseName, a = o === void 0 ? null : o, u = t.sessionContext, c = u === void 0 ? {} : u, s = t.onError, l = t.onCompleted, f = new Yp.RouteObserver({
      onProtocolError: this._onProtocolError,
      onError: s,
      onCompleted: l
    }), y = c.bookmarks || hW.empty();
    return this.write(zp.default.route(i, y.values(), a), f, !0), f;
  }, r.prototype.initialize = function(t) {
    var n = this, i = t === void 0 ? {} : t, o = i.userAgent, a = i.authToken, u = i.onError, c = i.onComplete, s = new Yp.LoginObserver({
      onError: function(l) {
        return n._onLoginError(l, u);
      },
      onCompleted: function(l) {
        return l.patch_bolt !== void 0 && n._applyPatches(l.patch_bolt), n._onLoginCompleted(l, c);
      }
    });
    return this.write(zp.default.hello(o, a, this._serversideRouting, ["utc"]), s, !0), s;
  }, r.prototype._applyPatches = function(t) {
    t.includes("utc") && this._applyUtcPatch();
  }, r.prototype._applyUtcPatch = function() {
    var t = this;
    this._transformer = new Kp.default(Object.values(Za(Za({}, Gp.default), dW.default)).map(function(n) {
      return n(t._config, t._log);
    }));
  }, r;
}(fW.default);
Yo.default = pW;
var el = {}, _W = h && h.__extends || function() {
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
}, Qo = h && h.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(el, "__esModule", { value: !0 });
var yW = Qo(Yo), U0 = te, ma = Qo(sr), Wl = Ae, Zp = Qo(Ko), mW = Qo(Go), Qp = Qo(at), L0 = U0.internal.constants, bW = L0.BOLT_PROTOCOL_V4_4, gW = L0.FETCH_ALL, OW = U0.internal.bookmarks.Bookmarks, wW = function(e) {
  _W(r, e);
  function r() {
    return e !== null && e.apply(this, arguments) || this;
  }
  return Object.defineProperty(r.prototype, "version", {
    get: function() {
      return bW;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(r.prototype, "transformer", {
    get: function() {
      var t = this;
      return this._transformer === void 0 && (this._transformer = new Qp.default(Object.values(Zp.default).map(function(n) {
        return n(t._config, t._log);
      }))), this._transformer;
    },
    enumerable: !1,
    configurable: !0
  }), r.prototype.requestRoutingInformation = function(t) {
    var n = t.routingContext, i = n === void 0 ? {} : n, o = t.databaseName, a = o === void 0 ? null : o, u = t.impersonatedUser, c = u === void 0 ? null : u, s = t.sessionContext, l = s === void 0 ? {} : s, f = t.onError, y = t.onCompleted, b = new Wl.RouteObserver({
      onProtocolError: this._onProtocolError,
      onError: f,
      onCompleted: y
    }), g = l.bookmarks || OW.empty();
    return this.write(ma.default.routeV4x4(i, g.values(), { databaseName: a, impersonatedUser: c }), b, !0), b;
  }, r.prototype.run = function(t, n, i) {
    var o = i === void 0 ? {} : i, a = o.bookmarks, u = o.txConfig, c = o.database, s = o.mode, l = o.impersonatedUser, f = o.beforeKeys, y = o.afterKeys, b = o.beforeError, g = o.afterError, S = o.beforeComplete, P = o.afterComplete, I = o.flush, $ = I === void 0 ? !0 : I, j = o.reactive, k = j === void 0 ? !1 : j, L = o.fetchSize, Y = L === void 0 ? gW : L, ee = o.highRecordWatermark, le = ee === void 0 ? Number.MAX_VALUE : ee, me = o.lowRecordWatermark, Me = me === void 0 ? Number.MAX_VALUE : me, Pe = new Wl.ResultStreamObserver({
      server: this._server,
      reactive: k,
      fetchSize: Y,
      moreFunction: this._requestMore.bind(this),
      discardFunction: this._requestDiscard.bind(this),
      beforeKeys: f,
      afterKeys: y,
      beforeError: b,
      afterError: g,
      beforeComplete: S,
      afterComplete: P,
      highRecordWatermark: le,
      lowRecordWatermark: Me
    }), Ue = k;
    return this.write(ma.default.runWithMetadata(t, n, {
      bookmarks: a,
      txConfig: u,
      database: c,
      mode: s,
      impersonatedUser: l
    }), Pe, Ue && $), k || this.write(ma.default.pull({ n: Y }), Pe, $), Pe;
  }, r.prototype.beginTransaction = function(t) {
    var n = t === void 0 ? {} : t, i = n.bookmarks, o = n.txConfig, a = n.database, u = n.mode, c = n.impersonatedUser, s = n.beforeError, l = n.afterError, f = n.beforeComplete, y = n.afterComplete, b = new Wl.ResultStreamObserver({
      server: this._server,
      beforeError: s,
      afterError: l,
      beforeComplete: f,
      afterComplete: y
    });
    return b.prepareToHandleSingleResponse(), this.write(ma.default.begin({ bookmarks: i, txConfig: o, database: a, mode: u, impersonatedUser: c }), b, !0), b;
  }, r.prototype._applyUtcPatch = function() {
    var t = this;
    this._transformer = new Qp.default(Object.values(Qa(Qa({}, Zp.default), mW.default)).map(function(n) {
      return n(t._config, t._log);
    }));
  }, r;
}(yW.default);
el.default = wW;
var Hd = {}, zd = {}, ki = h && h.__assign || function() {
  return ki = Object.assign || function(e) {
    for (var r, t = 1, n = arguments.length; t < n; t++) {
      r = arguments[t];
      for (var i in r)
        Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
    }
    return e;
  }, ki.apply(this, arguments);
}, Yd = h && h.__read || function(e, r) {
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
}, x0 = h && h.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(zd, "__esModule", { value: !0 });
var Gd = nt, Kd = te, tl = x0(Ko), EW = x0(Go), SW = 4, TW = 8, PW = 4;
function IW(e) {
  var r = tl.default.createNodeTransformer(e);
  return r.extendsWith({
    fromStructure: function(t) {
      Gd.structure.verifyStructSize("Node", SW, t.size);
      var n = Yd(t.fields, 4), i = n[0], o = n[1], a = n[2], u = n[3];
      return new Kd.Node(i, o, a, u);
    }
  });
}
function AW(e) {
  var r = tl.default.createRelationshipTransformer(e);
  return r.extendsWith({
    fromStructure: function(t) {
      Gd.structure.verifyStructSize("Relationship", TW, t.size);
      var n = Yd(t.fields, 8), i = n[0], o = n[1], a = n[2], u = n[3], c = n[4], s = n[5], l = n[6], f = n[7];
      return new Kd.Relationship(i, o, a, u, c, s, l, f);
    }
  });
}
function RW(e) {
  var r = tl.default.createUnboundRelationshipTransformer(e);
  return r.extendsWith({
    fromStructure: function(t) {
      Gd.structure.verifyStructSize("UnboundRelationship", PW, t.size);
      var n = Yd(t.fields, 4), i = n[0], o = n[1], a = n[2], u = n[3];
      return new Kd.UnboundRelationship(i, o, a, u);
    }
  });
}
zd.default = ki(ki(ki({}, tl.default), EW.default), { createNodeTransformer: IW, createRelationshipTransformer: AW, createUnboundRelationshipTransformer: RW });
var CW = h && h.__extends || function() {
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
}(), rl = h && h.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(Hd, "__esModule", { value: !0 });
var $W = rl(el), jW = rl(zd), NW = rl(at), MW = rl(sr), kW = Ae, DW = te, UW = DW.internal.constants.BOLT_PROTOCOL_V5_0, LW = function(e) {
  CW(r, e);
  function r() {
    return e !== null && e.apply(this, arguments) || this;
  }
  return Object.defineProperty(r.prototype, "version", {
    get: function() {
      return UW;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(r.prototype, "transformer", {
    get: function() {
      var t = this;
      return this._transformer === void 0 && (this._transformer = new NW.default(Object.values(jW.default).map(function(n) {
        return n(t._config, t._log);
      }))), this._transformer;
    },
    enumerable: !1,
    configurable: !0
  }), r.prototype.initialize = function(t) {
    var n = this, i = t === void 0 ? {} : t, o = i.userAgent, a = i.authToken, u = i.onError, c = i.onComplete, s = new kW.LoginObserver({
      onError: function(l) {
        return n._onLoginError(l, u);
      },
      onCompleted: function(l) {
        return n._onLoginCompleted(l, c);
      }
    });
    return this.write(MW.default.hello(o, a, this._serversideRouting), s, !0), s;
  }, r;
}($W.default);
Hd.default = LW;
var Zd = {};
Object.defineProperty(Zd, "__esModule", { value: !0 });
var kr = te, xW = 112, FW = 113, BW = 126, WW = 127;
function Zt() {
}
function Xp(e) {
  return e;
}
var VW = {
  onNext: Zt,
  onCompleted: Zt,
  onError: Zt
}, qW = function() {
  function e(r) {
    var t = r === void 0 ? {} : r, n = t.transformMetadata, i = t.log, o = t.observer;
    this._pendingObservers = [], this._log = i, this._transformMetadata = n || Xp, this._observer = Object.assign({
      onPendingObserversChange: Zt,
      onError: Zt,
      onFailure: Zt,
      onErrorApplyTransformation: Xp
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
      case FW:
        this._log.isDebugEnabled() && this._log.debug("S: RECORD ".concat(kr.json.stringify(r))), this._currentObserver.onNext(t);
        break;
      case xW:
        this._log.isDebugEnabled() && this._log.debug("S: SUCCESS ".concat(kr.json.stringify(r)));
        try {
          var n = this._transformMetadata(t);
          this._currentObserver.onCompleted(n);
        } finally {
          this._updateCurrentObserver();
        }
        break;
      case WW:
        this._log.isDebugEnabled() && this._log.debug("S: FAILURE ".concat(kr.json.stringify(r)));
        try {
          var i = HW(t.code), o = (0, kr.newError)(t.message, i);
          this._currentFailure = this._observer.onErrorApplyTransformation(o), this._currentObserver.onError(this._currentFailure);
        } finally {
          this._updateCurrentObserver(), this._observer.onFailure(this._currentFailure);
        }
        break;
      case BW:
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
    return r = r || VW, r.onCompleted = r.onCompleted || Zt, r.onError = r.onError || Zt, r.onNext = r.onNext || Zt, this._currentObserver === void 0 ? this._currentObserver = r : this._pendingObservers.push(r), this._observer.onPendingObserversChange(this._pendingObservers.length), !0;
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
Zd.default = qW;
function HW(e) {
  return e === "Neo.TransientError.Transaction.Terminated" ? "Neo.ClientError.Transaction.Terminated" : e === "Neo.TransientError.Transaction.LockClientStopped" ? "Neo.ClientError.Transaction.LockClientStopped" : e;
}
var zt = h && h.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(Md, "__esModule", { value: !0 });
var zW = te, YW = zt(Rc), GW = zt(xc), KW = zt(Wc), ZW = zt(Hc), QW = zt(Gc), XW = zt(Qc), JW = zt(Yo), eV = zt(el), tV = zt(Hd), rV = zt(Zd);
function nV(e) {
  var r = e === void 0 ? {} : e, t = r.version, n = r.chunker, i = r.dechunker, o = r.channel, a = r.disableLosslessIntegers, u = r.useBigInt, c = r.serversideRouting, s = r.server, l = r.log, f = r.observer, y = function(b) {
    var g = new rV.default({
      transformMetadata: b.transformMetadata.bind(b),
      log: l,
      observer: f
    });
    return o.onerror = f.onError.bind(f), o.onmessage = function(S) {
      return i.write(S);
    }, i.onmessage = function(S) {
      try {
        g.handleResponse(b.unpack(S));
      } catch (P) {
        return f.onError(P);
      }
    }, g;
  };
  return iV(t, s, n, { disableLosslessIntegers: a, useBigInt: u }, c, y, f.onProtocolError.bind(f), l);
}
Md.default = nV;
function iV(e, r, t, n, i, o, a, u) {
  switch (e) {
    case 1:
      return new YW.default(r, t, n, o, u, a);
    case 2:
      return new GW.default(r, t, n, o, u, a);
    case 3:
      return new KW.default(r, t, n, o, u, a);
    case 4:
      return new ZW.default(r, t, n, o, u, a);
    case 4.1:
      return new QW.default(r, t, n, o, u, a, i);
    case 4.2:
      return new XW.default(r, t, n, o, u, a, i);
    case 4.3:
      return new JW.default(r, t, n, o, u, a, i);
    case 4.4:
      return new eV.default(r, t, n, o, u, a, i);
    case 5:
      return new tV.default(r, t, n, o, u, a, i);
    default:
      throw (0, zW.newError)("Unknown Bolt protocol version: " + e);
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
  var i = n(Pd), o = n(Md), a = n(Yo), u = n(Cc);
  t(Ae, e), e.BoltProtocol = a.default, e.RawRoutingTable = u.default, e.default = {
    handshake: i.default,
    create: o.default
  };
})(Td);
var Qd = {}, gr = {};
Object.defineProperty(gr, "__esModule", { value: !0 });
gr.DEFAULT_ACQUISITION_TIMEOUT = gr.DEFAULT_MAX_SIZE = void 0;
var Ca = 100;
gr.DEFAULT_MAX_SIZE = Ca;
var $a = 60 * 1e3;
gr.DEFAULT_ACQUISITION_TIMEOUT = $a;
var oV = function() {
  function e(r, t) {
    this.maxSize = Jp(r, Ca), this.acquisitionTimeout = Jp(t, $a);
  }
  return e.defaultConfig = function() {
    return new e(Ca, $a);
  }, e.fromDriverConfig = function(r) {
    var t = e_(r.maxConnectionPoolSize), n = t ? r.maxConnectionPoolSize : Ca, i = e_(r.connectionAcquisitionTimeout), o = i ? r.connectionAcquisitionTimeout : $a;
    return new e(n, o);
  }, e;
}();
gr.default = oV;
function Jp(e, r) {
  return e === 0 || e ? e : r;
}
function e_(e) {
  return e === 0 || e;
}
var Xd = {}, ba = h && h.__awaiter || function(e, r, t, n) {
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
}, ga = h && h.__generator || function(e, r) {
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
}, aV = h && h.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(Xd, "__esModule", { value: !0 });
var uV = aV(gr), If = te, sV = If.internal.logger.Logger, cV = function() {
  function e(r) {
    var t = r === void 0 ? {} : r, n = t.create, i = n === void 0 ? function(I, $) {
      return Promise.resolve();
    } : n, o = t.destroy, a = o === void 0 ? function(I) {
      return Promise.resolve();
    } : o, u = t.validate, c = u === void 0 ? function(I) {
      return !0;
    } : u, s = t.installIdleObserver, l = s === void 0 ? function(I, $) {
    } : s, f = t.removeIdleObserver, y = f === void 0 ? function(I) {
    } : f, b = t.config, g = b === void 0 ? uV.default.defaultConfig() : b, S = t.log, P = S === void 0 ? sV.noOp() : S;
    this._create = i, this._destroy = a, this._validate = c, this._installIdleObserver = l, this._removeIdleObserver = y, this._maxSize = g.maxSize, this._acquisitionTimeout = g.acquisitionTimeout, this._pools = {}, this._pendingCreates = {}, this._acquireRequests = {}, this._activeResourceCounts = {}, this._release = this._release.bind(this), this._log = P, this._closed = !1;
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
          c.reject((0, If.newError)("Connection acquisition timed out in ".concat(t._acquisitionTimeout, " ms. Pool status: Active conn count = ").concat(f, ", Idle conn count = ").concat(y, ".")));
        }
      }, t._acquisitionTimeout);
      c = new fV(n, a, u, s, t._log), i[n].push(c), t._processPendingAcquireRequests(r);
    });
  }, e.prototype.purge = function(r) {
    return this._purgeKey(r.asKey());
  }, e.prototype.close = function() {
    return ba(this, void 0, void 0, function() {
      var r = this;
      return ga(this, function(t) {
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
    return t || (t = new dV(), this._pools[r] = t, this._pendingCreates[r] = 0), t;
  }, e.prototype._acquire = function(r) {
    return ba(this, void 0, void 0, function() {
      var t, n, i, o, a, u = this;
      return ga(this, function(c) {
        switch (c.label) {
          case 0:
            if (this._closed)
              throw (0, If.newError)("Pool is closed, it is no more able to serve requests.");
            t = r.asKey(), n = this._getOrInitializePoolFor(t), c.label = 1;
          case 1:
            return n.length ? (i = n.pop(), this._validate(i) ? (this._removeIdleObserver && this._removeIdleObserver(i), t_(t, this._activeResourceCounts), this._log.isDebugEnabled() && this._log.debug("".concat(i, " acquired from the pool ").concat(t)), [2, { resource: i, pool: n }]) : [3, 2]) : [3, 5];
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
            return a = c.sent(), t_(t, this._activeResourceCounts), this._log.isDebugEnabled() && this._log.debug("".concat(a, " created for the pool ").concat(t)), [3, 9];
          case 8:
            return this._pendingCreates[t] = this._pendingCreates[t] - 1, [7];
          case 9:
            return [2, { resource: a, pool: n }];
        }
      });
    });
  }, e.prototype._release = function(r, t, n) {
    return ba(this, void 0, void 0, function() {
      var i, o = this;
      return ga(this, function(a) {
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
            return lV(i, this._activeResourceCounts), this._processPendingAcquireRequests(r), [2];
        }
      });
    });
  }, e.prototype._purgeKey = function(r) {
    return ba(this, void 0, void 0, function() {
      var t, n, i;
      return ga(this, function(o) {
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
function t_(e, r) {
  var t = r[e] || 0;
  r[e] = t + 1;
}
function lV(e, r) {
  var t = r[e] || 0, n = t - 1;
  n > 0 ? r[e] = n : delete r[e];
}
var fV = function() {
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
}(), dV = function() {
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
Xd.default = cV;
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
  var a = i(Xd);
  e.Pool = a.default, e.default = a.default;
})(Qd);
var F0 = {}, nl = {}, hV = h && h.__extends || function() {
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
Object.defineProperty(nl, "__esModule", { value: !0 });
var vV = te, pV = function(e) {
  hV(r, e);
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
}(vV.ConnectionProvider);
nl.default = pV;
var Xo = {}, il = {}, Jo = {};
Object.defineProperty(Jo, "__esModule", { value: !0 });
var _V = function() {
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
Jo.default = _V;
var ea = {}, yV = h && h.__extends || function() {
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
}(), mV = h && h.__awaiter || function(e, r, t, n) {
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
}, bV = h && h.__generator || function(e, r) {
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
}, B0 = h && h.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(ea, "__esModule", { value: !0 });
ea.createChannelConnection = void 0;
var Oa = ui, Di = te, gV = B0(Jo), r_ = B0(Td), OV = Di.error.PROTOCOL_ERROR, wV = Di.internal.logger.Logger, EV = 0;
function SV(e, r, t, n, i, o) {
  i === void 0 && (i = null), o === void 0 && (o = function(c) {
    return new Oa.Channel(c);
  });
  var a = new Oa.ChannelConfig(e, r, t.errorCode()), u = o(a);
  return r_.default.handshake(u).then(function(c) {
    var s = c.protocolVersion, l = c.consumeRemainingBuffer, f = new Oa.Chunker(u), y = new Oa.Dechunker(), b = function(S) {
      return r_.default.create({
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
    }, g = new W0(u, t, e, n, r.disableLosslessIntegers, i, f, b);
    return l(function(S) {
      return y.write(S);
    }), g;
  }).catch(function(c) {
    return u.close().then(function() {
      throw c;
    });
  });
}
ea.createChannelConnection = SV;
var W0 = function(e) {
  yV(r, e);
  function r(t, n, i, o, a, u, c, s) {
    a === void 0 && (a = !1), u === void 0 && (u = null);
    var l = e.call(this, n) || this;
    return l._reseting = !1, l._resetObservers = [], l._id = EV++, l._address = i, l._server = { address: i.asHostPort() }, l.creationTimestamp = Date.now(), l._disableLosslessIntegers = a, l._ch = t, l._chunker = c, l._log = TV(l, o), l._serversideRouting = u, l._dbConnectionId = null, l._protocol = s(l), l._isBroken = !1, l._log.isDebugEnabled() && l._log.debug("created towards ".concat(i)), l;
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
    return mV(this, void 0, void 0, function() {
      return bV(this, function(t) {
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
    var n = (0, Di.newError)(t, OV);
    return this._handleFatalError(n), n;
  }, r;
}(gV.default);
ea.default = W0;
function TV(e, r) {
  return new wV(r._level, function(t, n) {
    return r._loggerFunction(t, "".concat(e, " ").concat(n));
  });
}
var Jd = {}, PV = h && h.__extends || function() {
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
}(), IV = h && h.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(Jd, "__esModule", { value: !0 });
var AV = IV(Jo), RV = function(e) {
  PV(r, e);
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
}(AV.default);
Jd.default = RV;
var eh = {};
Object.defineProperty(eh, "__esModule", { value: !0 });
var V0 = te, CV = V0.error.SERVICE_UNAVAILABLE, $V = V0.error.SESSION_EXPIRED, jV = function() {
  function e(r, t, n, i) {
    this._errorCode = r, this._handleUnavailability = t || Vl, this._handleWriteFailure = n || Vl, this._handleAuthorizationExpired = i || Vl;
  }
  return e.create = function(r) {
    var t = r.errorCode, n = r.handleUnavailability, i = r.handleWriteFailure, o = r.handleAuthorizationExpired;
    return new e(t, n, i, o);
  }, e.prototype.errorCode = function() {
    return this._errorCode;
  }, e.prototype.handleAndTransformError = function(r, t) {
    return NV(r) ? this._handleAuthorizationExpired(r, t) : MV(r) ? this._handleUnavailability(r, t) : kV(r) ? this._handleWriteFailure(r, t) : r;
  }, e;
}();
eh.default = jV;
function NV(e) {
  return e && (e.code === "Neo.ClientError.Security.AuthorizationExpired" || e.code === "Neo.ClientError.Security.TokenExpired");
}
function MV(e) {
  return e ? e.code === $V || e.code === CV || e.code === "Neo.TransientError.General.DatabaseUnavailable" : !1;
}
function kV(e) {
  return e ? e.code === "Neo.ClientError.Cluster.NotALeader" || e.code === "Neo.ClientError.General.ForbiddenOnReadOnlyDatabase" : !1;
}
function Vl(e) {
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
  var o = i(Jo);
  e.Connection = o.default;
  var a = n(ea);
  e.ChannelConnection = a.default, Object.defineProperty(e, "createChannelConnection", { enumerable: !0, get: function() {
    return a.createChannelConnection;
  } });
  var u = i(Jd);
  e.DelegateConnection = u.default;
  var c = i(eh);
  e.ConnectionErrorHandler = c.default, e.default = o.default;
})(il);
var DV = h && h.__extends || function() {
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
}(), UV = h && h.__createBinding || (Object.create ? function(e, r, t, n) {
  n === void 0 && (n = t);
  var i = Object.getOwnPropertyDescriptor(r, t);
  (!i || ("get" in i ? !r.__esModule : i.writable || i.configurable)) && (i = { enumerable: !0, get: function() {
    return r[t];
  } }), Object.defineProperty(e, n, i);
} : function(e, r, t, n) {
  n === void 0 && (n = t), e[n] = r[t];
}), LV = h && h.__setModuleDefault || (Object.create ? function(e, r) {
  Object.defineProperty(e, "default", { enumerable: !0, value: r });
} : function(e, r) {
  e.default = r;
}), xV = h && h.__importStar || function(e) {
  if (e && e.__esModule)
    return e;
  var r = {};
  if (e != null)
    for (var t in e)
      t !== "default" && Object.prototype.hasOwnProperty.call(e, t) && UV(r, e, t);
  return LV(r, e), r;
}, n_ = h && h.__awaiter || function(e, r, t, n) {
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
}, i_ = h && h.__generator || function(e, r) {
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
Object.defineProperty(Xo, "__esModule", { value: !0 });
var o_ = il, a_ = xV(Qd), Af = te, FV = Af.error.SERVICE_UNAVAILABLE, BV = function(e) {
  DV(r, e);
  function r(t, n) {
    var i = t.id, o = t.config, a = t.log, u = t.userAgent, c = t.authToken;
    n === void 0 && (n = null);
    var s = e.call(this) || this;
    return s._id = i, s._config = o, s._log = a, s._userAgent = u, s._authToken = c, s._createChannelConnection = n || function(l) {
      return (0, o_.createChannelConnection)(l, s._config, s._createConnectionErrorHandler(), s._log);
    }, s._connectionPool = new a_.default({
      create: s._createConnection.bind(s),
      destroy: s._destroyConnection.bind(s),
      validate: s._validateConnection.bind(s),
      installIdleObserver: r._installIdleObserverOnConnection.bind(s),
      removeIdleObserver: r._removeIdleObserverOnConnection.bind(s),
      config: a_.PoolConfig.fromDriverConfig(o),
      log: s._log
    }), s._openConnections = {}, s;
  }
  return r.prototype._createConnectionErrorHandler = function() {
    return new o_.ConnectionErrorHandler(FV);
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
    return n_(this, void 0, void 0, function() {
      var i, o;
      return i_(this, function(a) {
        switch (a.label) {
          case 0:
            return [4, this._connectionPool.acquire(n)];
          case 1:
            i = a.sent(), o = new Af.ServerInfo(i.server, i.protocol().version), a.label = 2;
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
    return n_(this, void 0, void 0, function() {
      return i_(this, function(t) {
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
}(Af.ConnectionProvider);
Xo.default = BV;
var th = {}, WV = h && h.__extends || function() {
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
}, VV = h && h.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(th, "__esModule", { value: !0 });
var qV = VV(Xo), ql = il, q0 = te, rh = q0.internal.constants, HV = rh.BOLT_PROTOCOL_V3, zV = rh.BOLT_PROTOCOL_V4_0, YV = rh.BOLT_PROTOCOL_V4_4, GV = q0.error.SERVICE_UNAVAILABLE, KV = function(e) {
  WV(r, e);
  function r(t) {
    var n = t.id, i = t.config, o = t.log, a = t.address, u = t.userAgent, c = t.authToken, s = e.call(this, { id: n, config: i, log: o, userAgent: u, authToken: c }) || this;
    return s._address = a, s;
  }
  return r.prototype.acquireConnection = function(t) {
    var n = this, i = t === void 0 ? {} : t;
    i.accessMode;
    var o = i.database;
    i.bookmarks;
    var a = ql.ConnectionErrorHandler.create({
      errorCode: GV,
      handleAuthorizationExpired: function(u, c) {
        return n._handleAuthorizationExpired(u, c, o);
      }
    });
    return this._connectionPool.acquire(this._address).then(function(u) {
      return new ql.DelegateConnection(u, a);
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
            return [4, (0, ql.createChannelConnection)(this._address, this._config, this._createConnectionErrorHandler(), this._log)];
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
              return n >= zV;
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
              return n >= HV;
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
              return n >= YV;
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
}(qV.default);
th.default = KV;
var nh = {}, Xr = {}, ih = {}, di = {}, Hl = h && h.__read || function(e, r) {
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
}, zl = h && h.__spreadArray || function(e, r, t) {
  if (t || arguments.length === 2)
    for (var n = 0, i = r.length, o; n < i; n++)
      (o || !(n in r)) && (o || (o = Array.prototype.slice.call(r, 0, n)), o[n] = r[n]);
  return e.concat(o || Array.prototype.slice.call(r));
};
Object.defineProperty(di, "__esModule", { value: !0 });
di.createValidRoutingTable = void 0;
var _t = te, H0 = _t.internal.constants, ZV = H0.ACCESS_MODE_WRITE, QV = H0.ACCESS_MODE_READ, Yl = _t.internal.serverAddress.ServerAddress, oh = _t.error.PROTOCOL_ERROR, XV = 1, z0 = function() {
  function e(r) {
    var t = r === void 0 ? {} : r, n = t.database, i = t.routers, o = t.readers, a = t.writers, u = t.expirationTime, c = t.ttl;
    this.database = n || null, this.databaseName = n || "default database", this.routers = i || [], this.readers = o || [], this.writers = a || [], this.expirationTime = u || (0, _t.int)(0), this.ttl = c;
  }
  return e.fromRawRoutingTable = function(r, t, n) {
    return Y0(r, t, n);
  }, e.prototype.forget = function(r) {
    this.readers = wa(this.readers, r), this.writers = wa(this.writers, r);
  }, e.prototype.forgetRouter = function(r) {
    this.routers = wa(this.routers, r);
  }, e.prototype.forgetWriter = function(r) {
    this.writers = wa(this.writers, r);
  }, e.prototype.isStaleFor = function(r) {
    return this.expirationTime.lessThan(Date.now()) || this.routers.length < XV || r === QV && this.readers.length === 0 || r === ZV && this.writers.length === 0;
  }, e.prototype.isExpiredFor = function(r) {
    return this.expirationTime.add(r).lessThan(Date.now());
  }, e.prototype.allServers = function() {
    return zl(zl(zl([], Hl(this.routers), !1), Hl(this.readers), !1), Hl(this.writers), !1);
  }, e.prototype.toString = function() {
    return "RoutingTable[" + "database=".concat(this.databaseName, ", ") + "expirationTime=".concat(this.expirationTime, ", ") + "currentTime=".concat(Date.now(), ", ") + "routers=[".concat(this.routers, "], ") + "readers=[".concat(this.readers, "], ") + "writers=[".concat(this.writers, "]]");
  }, e;
}();
di.default = z0;
function wa(e, r) {
  return e.filter(function(t) {
    return t.asKey() !== r.asKey();
  });
}
function Y0(e, r, t) {
  var n = t.ttl, i = eq(t, r), o = JV(t, r), a = o.routers, u = o.readers, c = o.writers;
  return u_(a, "routers", r), u_(u, "readers", r), new z0({
    database: e || t.db,
    routers: a,
    readers: u,
    writers: c,
    expirationTime: i,
    ttl: n
  });
}
di.createValidRoutingTable = Y0;
function JV(e, r) {
  try {
    var t = [], n = [], i = [];
    return e.servers.forEach(function(o) {
      var a = o.role, u = o.addresses;
      a === "ROUTE" ? t = Gl(u).map(function(c) {
        return Yl.fromUrl(c);
      }) : a === "WRITE" ? i = Gl(u).map(function(c) {
        return Yl.fromUrl(c);
      }) : a === "READ" && (n = Gl(u).map(function(c) {
        return Yl.fromUrl(c);
      }));
    }), {
      routers: t,
      readers: n,
      writers: i
    };
  } catch (o) {
    throw (0, _t.newError)("Unable to parse servers entry from router ".concat(r, ` from addresses:
`).concat(_t.json.stringify(e.servers), `
Error message: `).concat(o.message), oh);
  }
}
function eq(e, r) {
  try {
    var t = (0, _t.int)(Date.now()), n = (0, _t.int)(e.ttl).multiply(1e3).add(t);
    return n.lessThan(t) ? _t.Integer.MAX_VALUE : n;
  } catch (i) {
    throw (0, _t.newError)("Unable to parse TTL entry from router ".concat(r, ` from raw routing table:
`).concat(_t.json.stringify(e), `
Error message: `).concat(i.message), oh);
  }
}
function u_(e, r, t) {
  if (e.length === 0)
    throw (0, _t.newError)("Received no " + r + " from router " + t, oh);
}
function Gl(e) {
  if (!Array.isArray(e))
    throw new TypeError("Array expected but got: " + e);
  return Array.from(e);
}
var tq = h && h.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(ih, "__esModule", { value: !0 });
var rq = tq(di), nq = function() {
  function e(r) {
    this._routingContext = r;
  }
  return e.prototype.lookupRoutingTableOnRouter = function(r, t, n, i) {
    var o = this;
    return r._acquireConnection(function(a) {
      return o._requestRawRoutingTable(a, r, t, n, i).then(function(u) {
        return u.isNull ? null : rq.default.fromRawRoutingTable(t, n, u);
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
ih.default = nq;
var G0 = h && h.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(Xr, "__esModule", { value: !0 });
Xr.RoutingTable = Xr.Rediscovery = void 0;
var K0 = G0(ih);
Xr.Rediscovery = K0.default;
var iq = G0(di);
Xr.RoutingTable = iq.default;
Xr.default = K0.default;
var oq = h && h.__extends || function() {
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
}(), Xa = h && h.__assign || function() {
  return Xa = Object.assign || function(e) {
    for (var r, t = 1, n = arguments.length; t < n; t++) {
      r = arguments[t];
      for (var i in r)
        Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
    }
    return e;
  }, Xa.apply(this, arguments);
}, aq = h && h.__createBinding || (Object.create ? function(e, r, t, n) {
  n === void 0 && (n = t);
  var i = Object.getOwnPropertyDescriptor(r, t);
  (!i || ("get" in i ? !r.__esModule : i.writable || i.configurable)) && (i = { enumerable: !0, get: function() {
    return r[t];
  } }), Object.defineProperty(e, n, i);
} : function(e, r, t, n) {
  n === void 0 && (n = t), e[n] = r[t];
}), uq = h && h.__setModuleDefault || (Object.create ? function(e, r) {
  Object.defineProperty(e, "default", { enumerable: !0, value: r });
} : function(e, r) {
  e.default = r;
}), sq = h && h.__importStar || function(e) {
  if (e && e.__esModule)
    return e;
  var r = {};
  if (e != null)
    for (var t in e)
      t !== "default" && Object.prototype.hasOwnProperty.call(e, t) && aq(r, e, t);
  return uq(r, e), r;
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
}, Rf = h && h.__values || function(e) {
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
}, Z0 = h && h.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(nh, "__esModule", { value: !0 });
var st = te, s_ = sq(Xr), cq = ui, lq = Z0(nl), fq = Z0(Xo), dq = mr, Dr = il, Kl = st.error.SERVICE_UNAVAILABLE, Pi = st.error.SESSION_EXPIRED, hq = st.internal.bookmarks.Bookmarks, ta = st.internal.constants, c_ = ta.ACCESS_MODE_READ, Zl = ta.ACCESS_MODE_WRITE, vq = ta.BOLT_PROTOCOL_V3, pq = ta.BOLT_PROTOCOL_V4_0, _q = ta.BOLT_PROTOCOL_V4_4, yq = "Neo.ClientError.Procedure.ProcedureNotFound", mq = "Neo.ClientError.Database.DatabaseNotFound", bq = "Neo.ClientError.Transaction.InvalidBookmark", gq = "Neo.ClientError.Transaction.InvalidBookmarkMixture", Oq = "Neo.ClientError.Security.AuthorizationExpired", wq = "Neo.ClientError.Statement.ArgumentError", Eq = "Neo.ClientError.Request.Invalid", Sq = "Neo.ClientError.Statement.TypeError", Tq = "system", Ea = null, Pq = (0, st.int)(3e4), Iq = function(e) {
  oq(r, e);
  function r(t) {
    var n = t.id, i = t.address, o = t.routingContext, a = t.hostNameResolver, u = t.config, c = t.log, s = t.userAgent, l = t.authToken, f = t.routingTablePurgeDelay, y = e.call(this, { id: n, config: u, log: c, userAgent: s, authToken: l }, function(b) {
      return (0, Dr.createChannelConnection)(b, y._config, y._createConnectionErrorHandler(), y._log, y._routingContext);
    }) || this;
    return y._routingContext = Xa(Xa({}, o), { address: i.toString() }), y._seedRouter = i, y._rediscovery = new s_.default(y._routingContext), y._loadBalancingStrategy = new dq.LeastConnectedLoadBalancingStrategy(y._connectionPool), y._hostNameResolver = a, y._dnsResolver = new cq.HostNameResolver(), y._log = c, y._useSeedRouter = !0, y._routingTableRegistry = new Aq(f ? (0, st.int)(f) : Pq), y;
  }
  return r.prototype._createConnectionErrorHandler = function() {
    return new Dr.ConnectionErrorHandler(Pi);
  }, r.prototype._handleUnavailability = function(t, n, i) {
    return this._log.warn("Routing driver ".concat(this._id, " will forget ").concat(n, " for database '").concat(i, "' because of an error ").concat(t.code, " '").concat(t.message, "'")), this.forget(n, i || Ea), t;
  }, r.prototype._handleAuthorizationExpired = function(t, n, i) {
    return this._log.warn("Routing driver ".concat(this._id, " will close connections to ").concat(n, " for database '").concat(i, "' because of an error ").concat(t.code, " '").concat(t.message, "'")), this._connectionPool.purge(n).catch(function() {
    }), t;
  }, r.prototype._handleWriteFailure = function(t, n, i) {
    return this._log.warn("Routing driver ".concat(this._id, " will forget writer ").concat(n, " for database '").concat(i, "' because of an error ").concat(t.code, " '").concat(t.message, "'")), this.forgetWriter(n, i || Ea), (0, st.newError)("No longer possible to write to server at " + n, Pi, t);
  }, r.prototype.acquireConnection = function(t) {
    var n = t === void 0 ? {} : t, i = n.accessMode, o = n.database, a = n.bookmarks, u = n.impersonatedUser, c = n.onDatabaseNameResolved;
    return et(this, void 0, void 0, function() {
      var s, l, f, y, b, g, S, P, I = this;
      return tt(this, function($) {
        switch ($.label) {
          case 0:
            return f = { database: o || Ea }, y = new Dr.ConnectionErrorHandler(Pi, function(j, k) {
              return I._handleUnavailability(j, k, f.database);
            }, function(j, k) {
              return I._handleWriteFailure(j, k, f.database);
            }, function(j, k) {
              return I._handleAuthorizationExpired(j, k, f.database);
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
            if (b = $.sent(), i === c_)
              l = this._loadBalancingStrategy.selectReader(b.readers), s = "read";
            else if (i === Zl)
              l = this._loadBalancingStrategy.selectWriter(b.writers), s = "write";
            else
              throw (0, st.newError)("Illegal mode " + i);
            if (!l)
              throw (0, st.newError)("Failed to obtain connection towards ".concat(s, " server. Known routing table is: ").concat(b), Pi);
            $.label = 2;
          case 2:
            return $.trys.push([2, 4, , 5]), [4, this._acquireConnectionToServer(l, s, b)];
          case 3:
            return g = $.sent(), [2, new Dr.DelegateConnection(g, y)];
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
              return n >= pq;
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
              return n >= vq;
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
              return n >= _q;
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
      var o, a, u, c, s, l, f, y, b, g, S, P;
      return tt(this, function(I) {
        switch (I.label) {
          case 0:
            return o = { database: n || Ea }, [4, this._freshRoutingTable({
              accessMode: i,
              database: o.database,
              onDatabaseNameResolved: function($) {
                o.database = o.database || $;
              }
            })];
          case 1:
            a = I.sent(), u = i === Zl ? a.writers : a.readers, c = (0, st.newError)("No servers available for database '".concat(o.database, "' with access mode '").concat(i, "'"), Kl), I.label = 2;
          case 2:
            I.trys.push([2, 9, 10, 11]), s = Rf(u), l = s.next(), I.label = 3;
          case 3:
            if (l.done)
              return [3, 8];
            f = l.value, I.label = 4;
          case 4:
            return I.trys.push([4, 6, , 7]), [4, this._verifyConnectivityAndGetServerVersion({ address: f })];
          case 5:
            return y = I.sent(), [2, y];
          case 6:
            return b = I.sent(), c = b, [3, 7];
          case 7:
            return l = s.next(), [3, 3];
          case 8:
            return [3, 11];
          case 9:
            return g = I.sent(), S = { error: g }, [3, 11];
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
      return new s_.RoutingTable({ database: o });
    });
    return s.isStaleFor(i) ? (this._log.info('Routing table is stale for database: "'.concat(o, '" and access mode: "').concat(i, '": ').concat(s)), this._refreshRoutingTable(s, a, u, c)) : s;
  }, r.prototype._refreshRoutingTable = function(t, n, i, o) {
    var a = t.routers;
    return this._useSeedRouter ? this._fetchRoutingTableFromSeedRouterFallbackToKnownRouters(a, t, n, i, o) : this._fetchRoutingTableFromKnownRoutersFallbackToSeedRouter(a, t, n, i, o);
  }, r.prototype._fetchRoutingTableFromSeedRouterFallbackToKnownRouters = function(t, n, i, o, a) {
    return et(this, void 0, void 0, function() {
      var u, c, s, l, f, y, b;
      return tt(this, function(g) {
        switch (g.label) {
          case 0:
            return u = [], [4, this._fetchRoutingTableUsingSeedRouter(u, this._seedRouter, n, i, o)];
          case 1:
            return c = Kt.apply(void 0, [g.sent(), 2]), s = c[0], l = c[1], s ? (this._useSeedRouter = !1, [3, 4]) : [3, 2];
          case 2:
            return [4, this._fetchRoutingTableUsingKnownRouters(t, n, i, o)];
          case 3:
            f = Kt.apply(void 0, [g.sent(), 2]), y = f[0], b = f[1], s = y, l = b || l, g.label = 4;
          case 4:
            return [4, this._applyRoutingTableIfPossible(n, s, a, l)];
          case 5:
            return [2, g.sent()];
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
            var f, y, b, g, S, P, I;
            return tt(this, function($) {
              switch ($.label) {
                case 0:
                  return [4, c];
                case 1:
                  return f = Kt.apply(void 0, [$.sent(), 1]), y = f[0], y ? [2, [y, null]] : (b = l - 1, r._forgetRouter(n, t, b), [4, this._createSessionForRediscovery(s, i, o)]);
                case 2:
                  if (g = Kt.apply(void 0, [$.sent(), 2]), S = g[0], P = g[1], !S)
                    return [3, 8];
                  $.label = 3;
                case 3:
                  return $.trys.push([3, 5, 6, 7]), [4, this._rediscovery.lookupRoutingTableOnRouter(S, n.database, s, o)];
                case 4:
                  return [2, [$.sent(), null]];
                case 5:
                  return I = $.sent(), [2, this._handleRediscoveryError(I, s)];
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
            }), u = new lq.default(new Dr.DelegateConnection(o, a)), c = o.protocol().version, c < 4 ? [2, [new st.Session({
              mode: Zl,
              bookmarks: hq.empty(),
              connectionProvider: u
            }), null]] : [2, [new st.Session({
              mode: c_,
              database: Tq,
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
    if (Rq(t) || Cq(t))
      throw t;
    if (t.code === yq)
      throw (0, st.newError)("Server at ".concat(n.asHostPort(), " can't perform routing. Make sure you are connecting to a causal cluster"), Kl, t);
    return this._log.warn("unable to fetch routing table because of an error ".concat(t)), [null, t];
  }, r.prototype._applyRoutingTableIfPossible = function(t, n, i, o) {
    return et(this, void 0, void 0, function() {
      return tt(this, function(a) {
        switch (a.label) {
          case 0:
            if (!n)
              throw (0, st.newError)("Could not perform discovery. No routing servers available. Known routing table: ".concat(t), Kl, o);
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
}(fq.default);
nh.default = Iq;
var Aq = function() {
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
      for (var i = Rf(this._tables), o = i.next(); !o.done; o = i.next()) {
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
      for (var i = Rf(this._tables), o = i.next(); !o.done; o = i.next()) {
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
function Rq(e) {
  return [
    mq,
    bq,
    gq,
    wq,
    Eq,
    Sq
  ].includes(e.code);
}
function Cq(e) {
  return e.code.startsWith("Neo.ClientError.Security.") && ![
    Oq
  ].includes(e.code);
}
(function(e) {
  var r = h && h.__importDefault || function(a) {
    return a && a.__esModule ? a : { default: a };
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.RoutingConnectionProvider = e.DirectConnectionProvider = e.PooledConnectionProvider = e.SingleConnectionProvider = void 0;
  var t = nl;
  Object.defineProperty(e, "SingleConnectionProvider", { enumerable: !0, get: function() {
    return r(t).default;
  } });
  var n = Xo;
  Object.defineProperty(e, "PooledConnectionProvider", { enumerable: !0, get: function() {
    return r(n).default;
  } });
  var i = th;
  Object.defineProperty(e, "DirectConnectionProvider", { enumerable: !0, get: function() {
    return r(i).default;
  } });
  var o = nh;
  Object.defineProperty(e, "RoutingConnectionProvider", { enumerable: !0, get: function() {
    return r(o).default;
  } });
})(F0);
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
  Object.defineProperty(e, "__esModule", { value: !0 }), e.pool = e.packstream = e.channel = e.buf = e.bolt = e.loadBalancing = void 0, e.loadBalancing = n(mr), e.bolt = n(Td), e.buf = n(vn), e.channel = n(ui), e.packstream = n(nt), e.pool = n(Qd), i(F0, e);
})(Pb);
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
          F(re.next(Ie));
        } catch (R) {
          ve(R);
        }
      }
      function Q(Ie) {
        try {
          F(re.throw(Ie));
        } catch (R) {
          ve(R);
        }
      }
      function F(Ie) {
        Ie.done ? G(Ie.value) : ne(Ie.value).then(We, Q);
      }
      F((re = re.apply(be, he || [])).next());
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
    function We(F) {
      return function(Ie) {
        return Q([F, Ie]);
      };
    }
    function Q(F) {
      if (re)
        throw new TypeError("Generator is already executing.");
      for (; ve && (ve = 0, F[0] && (q = 0)), q; )
        try {
          if (re = 1, ne && (G = F[0] & 2 ? ne.return : F[0] ? ne.throw || ((G = ne.return) && G.call(ne), 0) : ne.next) && !(G = G.call(ne, F[1])).done)
            return G;
          switch (ne = 0, G && (F = [F[0] & 2, G.value]), F[0]) {
            case 0:
            case 1:
              G = F;
              break;
            case 4:
              return q.label++, { value: F[1], done: !1 };
            case 5:
              q.label++, ne = F[1], F = [0];
              continue;
            case 7:
              F = q.ops.pop(), q.trys.pop();
              continue;
            default:
              if (G = q.trys, !(G = G.length > 0 && G[G.length - 1]) && (F[0] === 6 || F[0] === 2)) {
                q = 0;
                continue;
              }
              if (F[0] === 3 && (!G || F[1] > G[0] && F[1] < G[3])) {
                q.label = F[1];
                break;
              }
              if (F[0] === 6 && q.label < G[1]) {
                q.label = G[1], G = F;
                break;
              }
              if (G && q.label < G[2]) {
                q.label = G[2], q.ops.push(F);
                break;
              }
              G[2] && q.ops.pop(), q.trys.pop();
              continue;
          }
          F = he.call(be, q);
        } catch (Ie) {
          F = [6, Ie], ne = 0;
        } finally {
          re = G = 0;
        }
      if (F[0] & 5)
        throw F[1];
      return { value: F[0] ? F[1] : void 0, done: !0 };
    }
  }, n = h && h.__importDefault || function(be) {
    return be && be.__esModule ? be : { default: be };
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.PathSegment = e.Path = e.UnboundRelationship = e.Relationship = e.Node = e.Record = e.ServerInfo = e.Notification = e.QueryStatistics = e.ProfiledPlan = e.Plan = e.ResultSummary = e.RxResult = e.RxManagedTransaction = e.RxTransaction = e.RxSession = e.EagerResult = e.Result = e.ManagedTransaction = e.Transaction = e.Session = e.Driver = e.temporal = e.spatial = e.graph = e.error = e.routing = e.session = e.types = e.logging = e.auth = e.isRetryableError = e.Neo4jError = e.integer = e.isUnboundRelationship = e.isRelationship = e.isPathSegment = e.isPath = e.isNode = e.isDateTime = e.isLocalDateTime = e.isDate = e.isTime = e.isLocalTime = e.isDuration = e.isPoint = e.isInt = e.int = e.hasReachableServer = e.driver = void 0, e.resultTransformers = e.bookmarkManager = e.DateTime = e.LocalDateTime = e.Date = e.Time = e.LocalTime = e.Duration = e.Integer = e.Point = void 0;
  var i = Jt;
  Object.defineProperty(e, "Driver", { enumerable: !0, get: function() {
    return i.Driver;
  } });
  var o = n(wd), a = te;
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
  var u = Pb, c = n(du);
  e.RxSession = c.default;
  var s = n(Vo);
  e.RxTransaction = s.default;
  var l = n(wc);
  e.RxManagedTransaction = l.default;
  var f = n(ai);
  e.RxResult = f.default;
  var y = a.internal.util, b = y.ENCRYPTION_ON, g = y.assertString, S = y.isEmptyObjectOrNull, P = a.internal.serverAddress.ServerAddress, I = a.internal.urlUtil;
  function $(be, he, q) {
    q === void 0 && (q = {}), g(be, "Bolt URL");
    var re = I.parseDatabaseUrl(be), ne = !1, G = !1, ve;
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
    return new i.Driver(Q, q, F());
    function F() {
      if (ne)
        return function(Ie, R, D, V) {
          return new u.RoutingConnectionProvider({
            id: Ie,
            config: R,
            log: D,
            hostNameResolver: V,
            authToken: he,
            address: We,
            userAgent: R.userAgent,
            routingContext: re.query
          });
        };
      if (!S(re.query))
        throw new Error("Parameters are not supported with none routed scheme. Given URL: '".concat(be, "'"));
      return function(Ie, R, D) {
        return new u.DirectConnectionProvider({
          id: Ie,
          config: R,
          log: D,
          authToken: he,
          address: We,
          userAgent: R.userAgent
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
})(x_);
const l_ = /* @__PURE__ */ TE(x_);
function $q() {
  const e = l_.driver("neo4j+s://aa84864b.databases.neo4j.io", l_.auth.basic("neo4j", "BHK4W_phDl5-U9TVZ7iFic3Io4pm-CrPYB4cWoAnWhc"));
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
        const i = jq(r, 200);
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
function jq(e, r) {
  const t = [];
  for (let n = 0; n < e.length; n += r)
    t.push(e.slice(n, n + r));
  return t;
}
var Q0 = Hi;
Hi.flatten = Hi;
Hi.unflatten = eg;
function X0(e) {
  return e && e.constructor && typeof e.constructor.isBuffer == "function" && e.constructor.isBuffer(e);
}
function J0(e) {
  return e;
}
function Hi(e, r) {
  r = r || {};
  const t = r.delimiter || ".", n = r.maxDepth, i = r.transformKey || J0, o = {};
  function a(u, c, s) {
    s = s || 1, Object.keys(u).forEach(function(l) {
      const f = u[l], y = r.safe && Array.isArray(f), b = Object.prototype.toString.call(f), g = X0(f), S = b === "[object Object]" || b === "[object Array]", P = c ? c + t + i(l) : i(l);
      if (!y && !g && S && Object.keys(f).length && (!r.maxDepth || s < n))
        return a(f, P, s + 1);
      o[P] = f;
    });
  }
  return a(e), o;
}
function eg(e, r) {
  r = r || {};
  const t = r.delimiter || ".", n = r.overwrite || !1, i = r.transformKey || J0, o = {};
  if (X0(e) || Object.prototype.toString.call(e) !== "[object Object]")
    return e;
  function u(l) {
    const f = Number(l);
    return isNaN(f) || l.indexOf(".") !== -1 || r.object ? l : f;
  }
  function c(l, f, y) {
    return Object.keys(y).reduce(function(b, g) {
      return b[l + t + g] = y[g], b;
    }, f);
  }
  function s(l) {
    const f = Object.prototype.toString.call(l), y = f === "[object Array]", b = f === "[object Object]";
    if (l) {
      if (y)
        return !l.length;
      if (b)
        return !Object.keys(l).length;
    } else
      return !0;
  }
  return e = Object.keys(e).reduce(function(l, f) {
    const y = Object.prototype.toString.call(e[f]);
    return !(y === "[object Object]" || y === "[object Array]") || s(e[f]) ? (l[f] = e[f], l) : c(
      f,
      l,
      Hi(e[f], r)
    );
  }, {}), Object.keys(e).forEach(function(l) {
    const f = l.split(t).map(i);
    let y = u(f.shift()), b = u(f[0]), g = o;
    for (; b !== void 0; ) {
      if (y === "__proto__")
        return;
      const S = Object.prototype.toString.call(g[y]), P = S === "[object Object]" || S === "[object Array]";
      if (!n && !P && typeof g[y] < "u")
        return;
      (n && !P || !n && g[y] == null) && (g[y] = typeof b == "number" && !r.object ? [] : {}), g = g[y], f.length > 0 && (y = u(f.shift()), b = u(f[0]));
    }
    g[y] = eg(e[l], r);
  }), o;
}
const Nq = [
  {
    connector: OE,
    config: {
      url: "https://socialtech.myjetbrains.com/api/",
      token: "perm:YWxla3NhbmRyLm15a3VseWNo.NjEtMzY=.3YAXZtLSVD7SLVpr9C4MfcIQXDkjFM",
      issueQueries: [
        "tag:BigTeam and (Sprint:{Sprint 1_2023} or Sprint:{Sprint 2_2023} or Sprint:{Sprint 3_2023} or Sprint:{Sprint 4_2023})"
      ],
      issueLoadingMaxDepthLevel: 10
    }
  },
  {
    connector: SE,
    config: {
      url: "https://gitlab.com/api/v4/",
      token: "glpat-BmwEo5wgWvYLmukAPxHq"
    }
  }
];
function Mq() {
  Nq.forEach(kq);
}
function kq({ connector: e, config: r }) {
  e.connect({
    config: r,
    addNodes: Dq,
    addRelations: Uq
  });
}
const ah = $q();
await ah.clearDb();
async function Dq(e, r) {
  console.log("add", e, r.length), await ah.insert(e, r.map((t) => Q0.flatten(t))), console.log("adde");
}
async function Uq(e) {
  console.log("add rels", e.length), await ah.insertRelations(e.map((r) => Q0.flatten(r))), console.log("added rels");
}
Mq();
