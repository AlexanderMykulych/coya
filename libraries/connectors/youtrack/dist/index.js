import O from "axios";
var w = v;
v.flatten = v;
v.unflatten = A;
function j(e) {
  return e && e.constructor && typeof e.constructor.isBuffer == "function" && e.constructor.isBuffer(e);
}
function I(e) {
  return e;
}
function v(e, t) {
  t = t || {};
  const r = t.delimiter || ".", n = t.maxDepth, i = t.transformKey || I, o = {};
  function s(c, l, p) {
    p = p || 1, Object.keys(c).forEach(function(d) {
      const a = c[d], u = t.safe && Array.isArray(a), f = Object.prototype.toString.call(a), m = j(a), h = f === "[object Object]" || f === "[object Array]", b = l ? l + r + i(d) : i(d);
      if (!u && !m && h && Object.keys(a).length && (!t.maxDepth || p < n))
        return s(a, b, p + 1);
      o[b] = a;
    });
  }
  return s(e), o;
}
function A(e, t) {
  t = t || {};
  const r = t.delimiter || ".", n = t.overwrite || !1, i = t.transformKey || I, o = {};
  if (j(e) || Object.prototype.toString.call(e) !== "[object Object]")
    return e;
  function c(d) {
    const a = Number(d);
    return isNaN(a) || d.indexOf(".") !== -1 || t.object ? d : a;
  }
  function l(d, a, u) {
    return Object.keys(u).reduce(function(f, m) {
      return f[d + r + m] = u[m], f;
    }, a);
  }
  function p(d) {
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
    return !(u === "[object Object]" || u === "[object Array]") || p(e[a]) ? (d[a] = e[a], d) : l(
      a,
      d,
      v(e[a], t)
    );
  }, {}), Object.keys(e).forEach(function(d) {
    const a = d.split(r).map(i);
    let u = c(a.shift()), f = c(a[0]), m = o;
    for (; f !== void 0; ) {
      if (u === "__proto__")
        return;
      const h = Object.prototype.toString.call(m[u]), b = h === "[object Object]" || h === "[object Array]";
      if (!n && !b && typeof m[u] < "u")
        return;
      (n && !b || !n && m[u] == null) && (m[u] = typeof f == "number" && !t.object ? [] : {}), m = m[u], a.length > 0 && (u = c(a.shift()), f = c(a[0]));
    }
    m[u] = A(e[d], t);
  }), o;
}
const N = O.create({
  baseURL: "https://socialtech.myjetbrains.com/api/",
  headers: {
    Authorization: "Bearer perm:YWxla3NhbmRyLm15a3VseWNo.NjEtMzY=.3YAXZtLSVD7SLVpr9C4MfcIQXDkjFM"
  }
});
var g = /* @__PURE__ */ ((e) => (e.Subtask = "Subtask", e.Duplicate = "Duplicate", e.Depend = "Depend", e.Relates = "Relates", e))(g || {});
function k({ issues: e, isAlreadyLoaded: t, addRelation: r }) {
  const n = t != null ? t : (o) => !1;
  return e.flatMap((o) => {
    const s = R(o);
    return s && s.length > 0 ? (s.forEach((c) => r({
      from: o.id,
      to: c,
      type: g.Subtask
    })), s.filter((c) => !n(c))) : [];
  });
}
function R(e) {
  return e.links.filter((t) => t.linkType.name === g.Subtask && t.direction === "OUTWARD").flatMap((t) => t.issues).map((t) => t.id);
}
const S = "customFields($type,name,value($type,archived,avatarUrl,buildIntegration,buildLink,color(background,id),description,fullName,id,isResolved,localizedName,login,markdownText,minutes,name,presentation,ringId,text))", U = "id,login,name,fullName,avatarUrl", L = `reporter(${U})`, E = `updater(${U})`, x = `fields=id,idReadable,summary,description,updated,created,usesMarkdown,${L},${E},links(id,direction,linkType(name),issues(id)),tags(name),${S}`;
async function D(e) {
  let t = e.ids;
  const { maxDepthLevel: r } = e;
  let n = 0;
  for (; t.length > 0 && (!r || n++ < r); )
    t = await M({
      ...e,
      ids: t
    });
}
async function M({
  ids: e,
  onLoadedIssue: t,
  isAlreadyLoaded: r,
  addRelation: n
}) {
  const o = (await N.post(
    `issuesGetter?${x}`,
    e.map((s) => ({ id: s }))
  )).data;
  return o.forEach((s) => t(s)), k({
    issues: o,
    isAlreadyLoaded: r,
    addRelation: n
  });
}
function $(e) {
  B(e), K(e), _(e), Q(e), z(e), C(e), T(e);
}
function B({ issue: e, addNode: t, addRelation: r }) {
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
function K({ issue: e, addNode: t, addRelation: r }) {
  var i;
  const n = (i = e.customFields) == null ? void 0 : i.find((o) => o.name === "Sprint");
  n && Array.isArray(n.value) && n.value.forEach((o) => {
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
function _({ issue: e, addNode: t, addRelation: r }) {
  var o, s;
  const n = (s = (o = e.customFields) == null ? void 0 : o.find((c) => c.name === "GitLab PR link")) == null ? void 0 : s.value, i = n == null ? void 0 : n.matchAll(/merge_requests\/(?<mrNumber>\d*)/gm);
  i && Array.from(i).map((l) => {
    var p;
    return ((p = l.groups) == null ? void 0 : p.mrNumber) || "";
  }).forEach((l) => {
    t("mr", {
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
function Q({ issue: e, addNode: t, addRelation: r }) {
  var i, o;
  const n = (o = (i = e.customFields) == null ? void 0 : i.find((s) => s.name === "Assignee")) == null ? void 0 : o.value;
  n && Array.isArray(n) && n.forEach((s) => {
    t("trackerUser", {
      id: s.id,
      name: s.name,
      fullName: s.fullName,
      login: s.login,
      avatarUrl: s.avatarUrl
    }), r({
      fromNode: "issue",
      from: e.id,
      toNode: "trackerUser",
      to: s.id,
      type: "assignee"
    });
  });
}
function z({ issue: e, addNode: t, addRelation: r }) {
  var i, o;
  const n = (o = (i = e.customFields) == null ? void 0 : i.find((s) => s.name === "Assignee QA")) == null ? void 0 : o.value;
  n && Array.isArray(n) && n.forEach((s) => {
    t("trackerUser", {
      id: s.id,
      name: s.name,
      fullName: s.fullName,
      login: s.login,
      avatarUrl: s.avatarUrl
    }), r({
      fromNode: "issue",
      from: e.id,
      toNode: "trackerUser",
      to: s.id,
      type: "assigneeQA"
    });
  });
}
function C({ issue: e, addNode: t, addRelation: r }) {
  const n = e.reporter;
  n && n.id && (t("trackerUser", {
    id: n.id,
    name: n.name,
    fullName: n.fullName,
    login: n.login,
    avatarUrl: n.avatarUrl
  }), r({
    fromNode: "issue",
    from: e.id,
    toNode: "trackerUser",
    to: n.id,
    type: "reporter"
  }));
}
function T({ issue: e, addNode: t, addRelation: r }) {
  const n = e.updater;
  n && n.id && (t("trackerUser", {
    id: n.id,
    name: n.name,
    fullName: n.fullName,
    login: n.login,
    avatarUrl: n.avatarUrl
  }), r({
    fromNode: "issue",
    from: e.id,
    toNode: "trackerUser",
    to: n.id,
    type: "updater"
  }));
}
function q(e) {
  var t, r, n, i, o, s, c, l, p, d, a, u, f, m, h, b;
  return {
    storyPoints: (r = (t = e.customFields) == null ? void 0 : t.find((y) => y.name === "Story points")) == null ? void 0 : r.value,
    state: (o = (i = (n = e.customFields) == null ? void 0 : n.find((y) => y.name === "State")) == null ? void 0 : i.value) == null ? void 0 : o.name,
    source: (l = (c = (s = e.customFields) == null ? void 0 : s.find((y) => y.name === "Source")) == null ? void 0 : c.value) == null ? void 0 : l.name,
    priority: (a = (d = (p = e.customFields) == null ? void 0 : p.find((y) => y.name === "Priority")) == null ? void 0 : d.value) == null ? void 0 : a.name,
    severity: (m = (f = (u = e.customFields) == null ? void 0 : u.find((y) => y.name === "Severity")) == null ? void 0 : f.value) == null ? void 0 : m.name,
    tags: (b = (h = e.tags) == null ? void 0 : h.map((y) => y.name)) == null ? void 0 : b.join(",")
  };
}
function G() {
  const e = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Map(), r = [], n = (o) => r.push(o), i = (o, s) => {
    t.has(o) || t.set(o, /* @__PURE__ */ new Map());
    const c = t.get(o);
    c && !c.has(s.id) && c.set(s.id, s);
  };
  return {
    addNode: i,
    addRelation: n,
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
          ...q(o)
        };
        e.set(o.id, s), $({
          issue: o,
          addNode: i,
          addRelation: n
        });
      }
    },
    addIssueRelation({ from: o, to: s, type: c }) {
      return n({
        fromNode: "issue",
        from: o,
        toNode: "issue",
        to: s,
        type: c
      });
    },
    getIssues() {
      return F(e);
    },
    getRelations() {
      return r;
    },
    getNodes() {
      return P(t);
    }
  };
}
function P(e) {
  return Array.from(e).map(([t, r]) => [t, F(r)]);
}
function F(e) {
  return Array.from(e, ([t, r]) => r);
}
async function W({ query: e, maxDepthLevel: t }) {
  const r = G(), n = await N.get(
    `issues?${x}&query=${encodeURI(e)}`
  );
  return n.data.forEach((i) => r.addIssue(i)), await D({
    ids: k({
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
async function Y(e) {
  return W(e);
}
async function X({ addNodes: e, addRelations: t, config: r }) {
  N.defaults.baseURL = r.url, N.defaults.headers.Authorization = `Bearer ${r.token}`;
  for await (const n of r.issueQueries) {
    const { issues: i, relations: o, nodes: s } = await Y({
      query: n,
      maxDepthLevel: r.issueLoadingMaxDepthLevel
    });
    await e("issue", i.map((c) => w.flatten(c)));
    for await (const [c, l] of s)
      await e(c, l);
    await t(o);
  }
}
const Z = {
  name: "youtrack-connector",
  connect: X
};
export {
  Z as default
};
