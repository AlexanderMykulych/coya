import E from "axios";
var M = m;
m.flatten = m;
m.unflatten = k;
function w(t) {
  return t && t.constructor && typeof t.constructor.isBuffer == "function" && t.constructor.isBuffer(t);
}
function I(t) {
  return t;
}
function m(t, e) {
  e = e || {};
  const r = e.delimiter || ".", u = e.maxDepth, c = e.transformKey || I, f = {};
  function d(o, b, i) {
    i = i || 1, Object.keys(o).forEach(function(s) {
      const n = o[s], a = e.safe && Array.isArray(n), l = Object.prototype.toString.call(n), y = w(n), j = l === "[object Object]" || l === "[object Array]", p = b ? b + r + c(s) : c(s);
      if (!a && !y && j && Object.keys(n).length && (!e.maxDepth || i < u))
        return d(n, p, i + 1);
      f[p] = n;
    });
  }
  return d(t), f;
}
function k(t, e) {
  e = e || {};
  const r = e.delimiter || ".", u = e.overwrite || !1, c = e.transformKey || I, f = {};
  if (w(t) || Object.prototype.toString.call(t) !== "[object Object]")
    return t;
  function o(s) {
    const n = Number(s);
    return isNaN(n) || s.indexOf(".") !== -1 || e.object ? s : n;
  }
  function b(s, n, a) {
    return Object.keys(a).reduce(function(l, y) {
      return l[s + r + y] = a[y], l;
    }, n);
  }
  function i(s) {
    const n = Object.prototype.toString.call(s), a = n === "[object Array]", l = n === "[object Object]";
    if (s) {
      if (a)
        return !s.length;
      if (l)
        return !Object.keys(s).length;
    } else
      return !0;
  }
  return t = Object.keys(t).reduce(function(s, n) {
    const a = Object.prototype.toString.call(t[n]);
    return !(a === "[object Object]" || a === "[object Array]") || i(t[n]) ? (s[n] = t[n], s) : b(
      n,
      s,
      m(t[n], e)
    );
  }, {}), Object.keys(t).forEach(function(s) {
    const n = s.split(r).map(c);
    let a = o(n.shift()), l = o(n[0]), y = f;
    for (; l !== void 0; ) {
      if (a === "__proto__")
        return;
      const j = Object.prototype.toString.call(y[a]), p = j === "[object Object]" || j === "[object Array]";
      if (!u && !p && typeof y[a] < "u")
        return;
      (u && !p || !u && y[a] == null) && (y[a] = typeof l == "number" && !e.object ? [] : {}), y = y[a], n.length > 0 && (a = o(n.shift()), l = o(n[0]));
    }
    y[a] = k(t[s], e);
  }), f;
}
const h = E.create({
  baseURL: "https://socialtech.myjetbrains.com/api/",
  headers: {
    Authorization: "Bearer perm:YWxla3NhbmRyLm15a3VseWNo.NjEtMzY=.3YAXZtLSVD7SLVpr9C4MfcIQXDkjFM"
  }
});
function x(t, e, r) {
  var u;
  (u = t.tags) == null || u.forEach((c) => {
    e("tag", {
      id: c.name,
      ...c
    }), r({
      toNode: "tag",
      to: c.name,
      fromNode: "issue",
      from: t.id
    });
  });
}
var O = /* @__PURE__ */ ((t) => (t.Subtask = "Subtask", t.Duplicate = "Duplicate", t.Depend = "Depend", t.Relates = "Relates", t))(O || {});
function A({ issues: t, isLoaded: e, addRelation: r }) {
  const u = e != null ? e : (f) => !1;
  return t.flatMap((f) => {
    const d = f.links.filter((o) => o.linkType.name === O.Subtask).flatMap((o) => o.issues);
    return d && d.length > 0 ? (d.forEach(({ id: o }) => r({
      from: f.id,
      to: o,
      type: O.Subtask
    })), d.filter((o) => !u(o.id)).map((o) => o.id)) : [];
  });
}
const R = "fields=id,idReadable,summary,description,reporter(login),links(id,direction,linkType(name),issues(id)),tags(name)";
async function g({ ids: t, addIssue: e, isLoaded: r, addRelation: u }) {
  let c = t;
  const f = async () => {
    const o = (await h.post(
      `issuesGetter?${R}`,
      c.map((i) => ({ id: i }))
    )).data;
    o.forEach((i) => e(i)), c = A({
      issues: o,
      isLoaded: r,
      addRelation: u
    });
  };
  for (; c.length > 0; )
    await f();
}
async function K({ query: t }) {
  const e = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map(), u = [], c = await h.get(
    `issues?${R}&query=${encodeURI(t)}`
  ), f = (i, s) => {
    r.has(i) || r.set(i, /* @__PURE__ */ new Map());
    const n = r.get(i);
    n && !n.has(s.id) && n.set(s.id, s);
  }, d = (i) => u.push(i), o = (i) => {
    if (!e.has(i.id)) {
      const s = {
        ...i,
        links: void 0,
        tags: void 0
      };
      e.set(i.id, s), x(i, f, d);
    }
  }, b = ({ from: i, to: s, type: n }) => d({
    fromNode: "issue",
    from: i,
    toNode: "issue",
    to: s,
    type: n
  });
  return c.data.forEach((i) => o(i)), await g({
    ids: A({
      issues: c.data,
      addRelation: b
    }),
    isLoaded: (i) => e.has(i),
    addIssue: o,
    addRelation: b
  }), {
    issues: S(e),
    relations: u,
    nodes: N(r)
  };
}
function S(t) {
  return Array.from(t, ([e, r]) => r);
}
function N(t) {
  return Array.from(t).map(([e, r]) => [e, S(r)]);
}
async function D({ addNodes: t, addRelations: e, config: r }) {
  h.defaults.baseURL = r.url, h.defaults.headers.Authorization = `Bearer ${r.token}`;
  for await (const u of r.issueQueries) {
    const { issues: c, relations: f, nodes: d } = await K({
      query: u
    });
    await t("issue", c.map((o) => M.flatten(o)));
    for await (const [o, b] of d)
      await t(o, b);
    await e(f);
  }
}
const B = {
  name: "youtrack-connector",
  connect: D
};
export {
  B as default
};
