import R from "axios";
var x = j;
j.flatten = j;
j.unflatten = w;
function O(t) {
  return t && t.constructor && typeof t.constructor.isBuffer == "function" && t.constructor.isBuffer(t);
}
function k(t) {
  return t;
}
function j(t, e) {
  e = e || {};
  const a = e.delimiter || ".", u = e.maxDepth, f = e.transformKey || k, s = {};
  function c(r, y, b) {
    b = b || 1, Object.keys(r).forEach(function(i) {
      const n = r[i], o = e.safe && Array.isArray(n), l = Object.prototype.toString.call(n), d = O(n), m = l === "[object Object]" || l === "[object Array]", p = y ? y + a + f(i) : f(i);
      if (!o && !d && m && Object.keys(n).length && (!e.maxDepth || b < u))
        return c(n, p, b + 1);
      s[p] = n;
    });
  }
  return c(t), s;
}
function w(t, e) {
  e = e || {};
  const a = e.delimiter || ".", u = e.overwrite || !1, f = e.transformKey || k, s = {};
  if (O(t) || Object.prototype.toString.call(t) !== "[object Object]")
    return t;
  function r(i) {
    const n = Number(i);
    return isNaN(n) || i.indexOf(".") !== -1 || e.object ? i : n;
  }
  function y(i, n, o) {
    return Object.keys(o).reduce(function(l, d) {
      return l[i + a + d] = o[d], l;
    }, n);
  }
  function b(i) {
    const n = Object.prototype.toString.call(i), o = n === "[object Array]", l = n === "[object Object]";
    if (i) {
      if (o)
        return !i.length;
      if (l)
        return !Object.keys(i).length;
    } else
      return !0;
  }
  return t = Object.keys(t).reduce(function(i, n) {
    const o = Object.prototype.toString.call(t[n]);
    return !(o === "[object Object]" || o === "[object Array]") || b(t[n]) ? (i[n] = t[n], i) : y(
      n,
      i,
      j(t[n], e)
    );
  }, {}), Object.keys(t).forEach(function(i) {
    const n = i.split(a).map(f);
    let o = r(n.shift()), l = r(n[0]), d = s;
    for (; l !== void 0; ) {
      if (o === "__proto__")
        return;
      const m = Object.prototype.toString.call(d[o]), p = m === "[object Object]" || m === "[object Array]";
      if (!u && !p && typeof d[o] < "u")
        return;
      (u && !p || !u && d[o] == null) && (d[o] = typeof l == "number" && !e.object ? [] : {}), d = d[o], n.length > 0 && (o = r(n.shift()), l = r(n[0]));
    }
    d[o] = w(t[i], e);
  }), s;
}
const h = R.create({
  baseURL: "https://socialtech.myjetbrains.com/api/",
  headers: {
    Authorization: "Bearer perm:YWxla3NhbmRyLm15a3VseWNo.NjEtMzY=.3YAXZtLSVD7SLVpr9C4MfcIQXDkjFM"
  }
});
var I = /* @__PURE__ */ ((t) => (t.Subtask = "Subtask", t.Duplicate = "Duplicate", t.Depend = "Depend", t.Relates = "Relates", t))(I || {});
const A = "fields=id,idReadable,summary,description,reporter(login),links(id,direction,linkType(name),issues(id))";
async function E() {
  const t = /* @__PURE__ */ new Map(), e = [], a = await h.get(
    `issues?${A}&query=tag:frontend&$top=400`
  ), u = (s) => {
    if (!t.has(s.id)) {
      const c = {
        ...s,
        links: void 0
      };
      t.set(s.id, c);
    }
  }, f = (s, c) => e.push({
    fromNode: "issue",
    from: s,
    toNode: "issue",
    to: c
  });
  return a.data.forEach((s) => u(s)), await K({
    ids: S({
      issues: a.data,
      addRelation: f
    }),
    isLoaded: (s) => t.has(s),
    addIssue: u,
    addRelation: f
  }), {
    issues: Array.from(t, ([s, c]) => c),
    relations: e
  };
}
async function K({ ids: t, addIssue: e, isLoaded: a, addRelation: u }) {
  let f = t;
  const s = async () => {
    const r = (await h.post(
      `issuesGetter?${A}`,
      f.map((b) => ({ id: b }))
    )).data;
    r.forEach((b) => e(b)), f = S({
      issues: r,
      isLoaded: a,
      addRelation: u
    });
  };
  for (; f.length > 0; )
    await s();
}
function S({ issues: t, isLoaded: e, addRelation: a }) {
  const u = e != null ? e : (s) => !1;
  return t.flatMap((s) => {
    const c = s.links.filter((r) => r.linkType.name === I.Subtask).flatMap((r) => r.issues);
    return c && c.length > 0 ? (c.forEach(({ id: r }) => a(s.id, r)), c.filter((r) => !u(r.id)).map((r) => r.id)) : [];
  });
}
async function D({ addNodes: t, addRelations: e, config: a }) {
  h.defaults.baseURL = a.url, h.defaults.headers.Authorization = `Bearer ${a.token}`;
  const { issues: u, relations: f } = await E();
  await t("issue", u.map((s) => x.flatten(s))), await e(f);
}
const _ = {
  name: "youtrack-connector",
  connect: D
};
export {
  _ as default
};
