import F from "axios";
var w = v;
v.flatten = v;
v.unflatten = N;
function g(e) {
  return e && e.constructor && typeof e.constructor.isBuffer == "function" && e.constructor.isBuffer(e);
}
function j(e) {
  return e;
}
function v(e, n) {
  n = n || {};
  const r = n.delimiter || ".", t = n.maxDepth, i = n.transformKey || j, o = {};
  function s(c, l, y) {
    y = y || 1, Object.keys(c).forEach(function(d) {
      const a = c[d], u = n.safe && Array.isArray(a), f = Object.prototype.toString.call(a), m = g(a), h = f === "[object Object]" || f === "[object Array]", b = l ? l + r + i(d) : i(d);
      if (!u && !m && h && Object.keys(a).length && (!n.maxDepth || y < t))
        return s(a, b, y + 1);
      o[b] = a;
    });
  }
  return s(e), o;
}
function N(e, n) {
  n = n || {};
  const r = n.delimiter || ".", t = n.overwrite || !1, i = n.transformKey || j, o = {};
  if (g(e) || Object.prototype.toString.call(e) !== "[object Object]")
    return e;
  function c(d) {
    const a = Number(d);
    return isNaN(a) || d.indexOf(".") !== -1 || n.object ? d : a;
  }
  function l(d, a, u) {
    return Object.keys(u).reduce(function(f, m) {
      return f[d + r + m] = u[m], f;
    }, a);
  }
  function y(d) {
    const a = Object.prototype.toString.call(d), u = a === "[object Array]", f = a === "[object Object]";
    if (d) {
      if (u)
        return !d.length;
      if (f)
        return !Object.keys(d).length;
    } else
      return !0;
  }
  return e = Object.keys(e).reduce(function(d, a) {
    const u = Object.prototype.toString.call(e[a]);
    return !(u === "[object Object]" || u === "[object Array]") || y(e[a]) ? (d[a] = e[a], d) : l(
      a,
      d,
      v(e[a], n)
    );
  }, {}), Object.keys(e).forEach(function(d) {
    const a = d.split(r).map(i);
    let u = c(a.shift()), f = c(a[0]), m = o;
    for (; f !== void 0; ) {
      if (u === "__proto__")
        return;
      const h = Object.prototype.toString.call(m[u]), b = h === "[object Object]" || h === "[object Array]";
      if (!t && !b && typeof m[u] < "u")
        return;
      (t && !b || !t && m[u] == null) && (m[u] = typeof f == "number" && !n.object ? [] : {}), m = m[u], a.length > 0 && (u = c(a.shift()), f = c(a[0]));
    }
    m[u] = N(e[d], n);
  }), o;
}
const A = F.create({
  baseURL: "https://socialtech.myjetbrains.com/api/",
  headers: {
    Authorization: "Bearer <token>"
  }
});
var I = /* @__PURE__ */ ((e) => (e.Subtask = "Subtask", e.Duplicate = "Duplicate", e.Depend = "Depend", e.Relates = "Relates", e))(I || {});
function k({ issues: e, isAlreadyLoaded: n, addRelation: r }) {
  const t = n ?? ((o) => !1);
  return e.flatMap((o) => {
    const s = R(o);
    return s && s.length > 0 ? (s.forEach((c) => r({
      from: o.id,
      to: c,
      type: I.Subtask
    })), s.filter((c) => !t(c))) : [];
  });
}
function R(e) {
  return e.links.filter((n) => n.linkType.name === I.Subtask && n.direction === "OUTWARD").flatMap((n) => n.issues).map((n) => n.id);
}
const L = "customFields($type,name,value($type,archived,avatarUrl,buildIntegration,buildLink,color(background,id),description,fullName,id,isResolved,localizedName,login,markdownText,minutes,name,presentation,ringId,text))", U = "id,login,name,fullName,avatarUrl,email", S = `reporter(${U})`, E = `updater(${U})`, O = `fields=id,idReadable,summary,description,updated,created,usesMarkdown,${S},${E},links(id,direction,linkType(name),issues(id)),tags(name),${L}`;
async function $(e) {
  let n = e.ids;
  const { maxDepthLevel: r } = e;
  let t = 0;
  for (; n.length > 0 && (!r || t++ < r); )
    n = await D({
      ...e,
      ids: n
    });
}
async function D({
  ids: e,
  onLoadedIssue: n,
  isAlreadyLoaded: r,
  addRelation: t
}) {
  const o = (await A.post(
    `issuesGetter?${O}`,
    e.map((s) => ({ id: s }))
  )).data;
  return o.forEach((s) => n(s)), k({
    issues: o,
    isAlreadyLoaded: r,
    addRelation: t
  });
}
function M(e) {
  B(e), K(e), _(e), Q(e), T(e), q(e), z(e);
}
function B({ issue: e, addNode: n, addRelation: r }) {
  var t;
  (t = e.tags) == null || t.forEach((i) => {
    n("tag", {
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
function K({ issue: e, addNode: n, addRelation: r }) {
  var i;
  const t = (i = e.customFields) == null ? void 0 : i.find((o) => o.name === "Sprint");
  t && Array.isArray(t.value) && t.value.forEach((o) => {
    n("sprint", {
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
function _({ issue: e, addNode: n, addRelation: r }) {
  var o, s;
  const t = (s = (o = e.customFields) == null ? void 0 : o.find((c) => c.name === "GitLab PR link")) == null ? void 0 : s.value, i = t == null ? void 0 : t.matchAll(/merge_requests\/(?<mrNumber>\d*)/gm);
  i && Array.from(i).map((l) => {
    var y;
    return ((y = l.groups) == null ? void 0 : y.mrNumber) || "";
  }).forEach((l) => {
    n("mr", {
      id: l,
      number: l
    }), r({
      toNode: "mr",
      to: l,
      fromNode: "issue",
      from: e.id,
      type: "mr"
    });
  });
}
function Q({ issue: e, addNode: n, addRelation: r }) {
  var i, o;
  const t = (o = (i = e.customFields) == null ? void 0 : i.find((s) => s.name === "Assignee")) == null ? void 0 : o.value;
  t && Array.isArray(t) && t.forEach((s) => {
    n("trackerUser", {
      id: s.id,
      name: s.name,
      fullName: s.fullName,
      login: s.login,
      avatarUrl: s.avatarUrl,
      email: s.email
    }), r({
      fromNode: "issue",
      from: e.id,
      toNode: "trackerUser",
      to: s.id,
      type: "assignee"
    });
  });
}
function T({ issue: e, addNode: n, addRelation: r }) {
  var i, o;
  const t = (o = (i = e.customFields) == null ? void 0 : i.find((s) => s.name === "Assignee QA")) == null ? void 0 : o.value;
  t && Array.isArray(t) && t.forEach((s) => {
    n("trackerUser", {
      id: s.id,
      name: s.name,
      fullName: s.fullName,
      login: s.login,
      avatarUrl: s.avatarUrl,
      email: s.email
    }), r({
      fromNode: "issue",
      from: e.id,
      toNode: "trackerUser",
      to: s.id,
      type: "assigneeQA"
    });
  });
}
function q({ issue: e, addNode: n, addRelation: r }) {
  const t = e.reporter;
  t && t.id && (n("trackerUser", {
    id: t.id,
    name: t.name,
    fullName: t.fullName,
    login: t.login,
    avatarUrl: t.avatarUrl,
    email: t.email
  }), r({
    fromNode: "issue",
    from: e.id,
    toNode: "trackerUser",
    to: t.id,
    type: "reporter"
  }));
}
function z({ issue: e, addNode: n, addRelation: r }) {
  const t = e.updater;
  t && t.id && (n("trackerUser", {
    id: t.id,
    name: t.name,
    fullName: t.fullName,
    login: t.login,
    avatarUrl: t.avatarUrl,
    email: t.email
  }), r({
    fromNode: "issue",
    from: e.id,
    toNode: "trackerUser",
    to: t.id,
    type: "updater"
  }));
}
function C(e) {
  var n, r, t, i, o, s, c, l, y, d, a, u, f, m, h, b;
  return {
    storyPoints: (r = (n = e.customFields) == null ? void 0 : n.find((p) => p.name === "Story points")) == null ? void 0 : r.value,
    state: (o = (i = (t = e.customFields) == null ? void 0 : t.find((p) => p.name === "State")) == null ? void 0 : i.value) == null ? void 0 : o.name,
    source: (l = (c = (s = e.customFields) == null ? void 0 : s.find((p) => p.name === "Source")) == null ? void 0 : c.value) == null ? void 0 : l.name,
    priority: (a = (d = (y = e.customFields) == null ? void 0 : y.find((p) => p.name === "Priority")) == null ? void 0 : d.value) == null ? void 0 : a.name,
    severity: (m = (f = (u = e.customFields) == null ? void 0 : u.find((p) => p.name === "Severity")) == null ? void 0 : f.value) == null ? void 0 : m.name,
    tags: (b = (h = e.tags) == null ? void 0 : h.map((p) => p.name)) == null ? void 0 : b.join(",")
  };
}
function G() {
  const e = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map(), r = [], t = (o) => r.push(o), i = (o, s) => {
    n.has(o) || n.set(o, /* @__PURE__ */ new Map());
    const c = n.get(o);
    c && !c.has(s.id) && c.set(s.id, s);
  };
  return {
    addNode: i,
    addRelation: t,
    isAlreadyLoaded(o) {
      return e.has(o);
    },
    addIssue(o) {
      if (!e.has(o.id)) {
        const s = {
          ...o,
          links: void 0,
          tags: void 0,
          customFields: void 0,
          ...C(o)
        };
        e.set(o.id, s), M({
          issue: o,
          addNode: i,
          addRelation: t
        });
      }
    },
    addIssueRelation({ from: o, to: s, type: c }) {
      return t({
        fromNode: "issue",
        from: o,
        toNode: "issue",
        to: s,
        type: c
      });
    },
    getIssues() {
      return x(e);
    },
    getRelations() {
      return r;
    },
    getNodes() {
      return P(n);
    }
  };
}
function P(e) {
  return Array.from(e).map(([n, r]) => [n, x(r)]);
}
function x(e) {
  return Array.from(e, ([n, r]) => r);
}
async function W({ query: e, maxDepthLevel: n }) {
  const r = G(), t = await A.get(
    `issues?${O}&query=${encodeURI(e)}`
  );
  return t.data.forEach((i) => r.addIssue(i)), await $({
    ids: k({
      issues: t.data,
      addRelation: r.addIssueRelation
    }),
    isAlreadyLoaded: r.isAlreadyLoaded,
    onLoadedIssue: r.addIssue,
    addRelation: r.addIssueRelation,
    maxDepthLevel: n
  }), {
    issues: r.getIssues(),
    relations: r.getRelations(),
    nodes: r.getNodes()
  };
}
async function H(e) {
  return W(e);
}
async function J({ addNodes: e, addRelations: n, config: r }) {
  A.defaults.baseURL = r.url, A.defaults.headers.Authorization = `Bearer ${r.token}`;
  for await (const t of r.issueQueries) {
    const { issues: i, relations: o, nodes: s } = await H({
      query: t,
      maxDepthLevel: r.issueLoadingMaxDepthLevel
    });
    await e("issue", i.map((c) => w.flatten(c)));
    for await (const [c, l] of s)
      await e(c, l);
    await n(o);
  }
}
const Y = {
  name: "youtrack-connector",
  connect: J
};
export {
  Y as default
};
