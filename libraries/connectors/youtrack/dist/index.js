import R from "axios";
var k = b;
b.flatten = b;
b.unflatten = v;
function O(e) {
  return e && e.constructor && typeof e.constructor.isBuffer == "function" && e.constructor.isBuffer(e);
}
function g(e) {
  return e;
}
function b(e, t) {
  t = t || {};
  const n = t.delimiter || ".", o = t.maxDepth, d = t.transformKey || g, s = {};
  function a(c, m, p) {
    p = p || 1, Object.keys(c).forEach(function(u) {
      const i = c[u], r = t.safe && Array.isArray(i), f = Object.prototype.toString.call(i), l = O(i), h = f === "[object Object]" || f === "[object Array]", y = m ? m + n + d(u) : d(u);
      if (!r && !l && h && Object.keys(i).length && (!t.maxDepth || p < o))
        return a(i, y, p + 1);
      s[y] = i;
    });
  }
  return a(e), s;
}
function v(e, t) {
  t = t || {};
  const n = t.delimiter || ".", o = t.overwrite || !1, d = t.transformKey || g, s = {};
  if (O(e) || Object.prototype.toString.call(e) !== "[object Object]")
    return e;
  function c(u) {
    const i = Number(u);
    return isNaN(i) || u.indexOf(".") !== -1 || t.object ? u : i;
  }
  function m(u, i, r) {
    return Object.keys(r).reduce(function(f, l) {
      return f[u + n + l] = r[l], f;
    }, i);
  }
  function p(u) {
    const i = Object.prototype.toString.call(u), r = i === "[object Array]", f = i === "[object Object]";
    if (u) {
      if (r)
        return !u.length;
      if (f)
        return !Object.keys(u).length;
    } else
      return !0;
  }
  return e = Object.keys(e).reduce(function(u, i) {
    const r = Object.prototype.toString.call(e[i]);
    return !(r === "[object Object]" || r === "[object Array]") || p(e[i]) ? (u[i] = e[i], u) : m(
      i,
      u,
      b(e[i], t)
    );
  }, {}), Object.keys(e).forEach(function(u) {
    const i = u.split(n).map(d);
    let r = c(i.shift()), f = c(i[0]), l = s;
    for (; f !== void 0; ) {
      if (r === "__proto__")
        return;
      const h = Object.prototype.toString.call(l[r]), y = h === "[object Object]" || h === "[object Array]";
      if (!o && !y && typeof l[r] < "u")
        return;
      (o && !y || !o && l[r] == null) && (l[r] = typeof f == "number" && !t.object ? [] : {}), l = l[r], i.length > 0 && (r = c(i.shift()), f = c(i[0]));
    }
    l[r] = v(e[u], t);
  }), s;
}
const I = R.create({
  baseURL: "https://socialtech.myjetbrains.com/api/",
  headers: {
    Authorization: "Bearer perm:YWxla3NhbmRyLm15a3VseWNo.NjEtMzY=.3YAXZtLSVD7SLVpr9C4MfcIQXDkjFM"
  }
});
var j = /* @__PURE__ */ ((e) => (e.Subtask = "Subtask", e.Duplicate = "Duplicate", e.Depend = "Depend", e.Relates = "Relates", e))(j || {});
function w({ issues: e, isAlreadyLoaded: t, addRelation: n }) {
  const o = t != null ? t : (s) => !1;
  return e.flatMap((s) => {
    const a = S(s);
    return a && a.length > 0 ? (a.forEach((c) => n({
      from: s.id,
      to: c,
      type: j.Subtask
    })), a.filter((c) => !o(c))) : [];
  });
}
function S(e) {
  return e.links.filter((t) => t.linkType.name === j.Subtask && t.direction === "OUTWARD").flatMap((t) => t.issues).map((t) => t.id);
}
const F = "customFields($type,name,value($type,archived,avatarUrl,buildIntegration,buildLink,color(background,id),description,fullName,id,isResolved,localizedName,login,markdownText,minutes,name,presentation,ringId,text))", x = `fields=id,idReadable,summary,description,reporter(login),links(id,direction,linkType(name),issues(id)),tags(name),${F}`;
async function N(e) {
  let t = e.ids;
  const { maxDepthLevel: n } = e;
  let o = 0;
  for (; t.length > 0 && (!n || o++ < n); )
    t = await D({
      ...e,
      ids: t
    });
}
async function D({
  ids: e,
  onLoadedIssue: t,
  isAlreadyLoaded: n,
  addRelation: o
}) {
  const s = (await I.post(
    `issuesGetter?${x}`,
    e.map((a) => ({ id: a }))
  )).data;
  return s.forEach((a) => t(a)), w({
    issues: s,
    isAlreadyLoaded: n,
    addRelation: o
  });
}
function L(e) {
  E(e), M(e);
}
function E({ issue: e, addNode: t, addRelation: n }) {
  var o;
  (o = e.tags) == null || o.forEach((d) => {
    t("tag", {
      id: d.name,
      ...d
    }), n({
      toNode: "tag",
      to: d.name,
      fromNode: "issue",
      from: e.id,
      type: "tag"
    });
  });
}
function M({ issue: e, addNode: t, addRelation: n }) {
  var d;
  const o = (d = e.customFields) == null ? void 0 : d.find((s) => s.name === "Sprint");
  o && Array.isArray(o.value) && o.value.forEach((s) => {
    t("sprint", {
      id: s.id,
      name: s.name
    }), n({
      toNode: "sprint",
      to: s.id,
      fromNode: "issue",
      from: e.id,
      type: "sprint"
    });
  });
}
function B(e) {
  var t, n, o, d, s, a, c, m, p, u, i;
  return {
    storyPoints: (n = (t = e.customFields) == null ? void 0 : t.find((r) => r.name === "Story points")) == null ? void 0 : n.value,
    state: (s = (d = (o = e.customFields) == null ? void 0 : o.find((r) => r.name === "State")) == null ? void 0 : d.value) == null ? void 0 : s.name,
    source: (m = (c = (a = e.customFields) == null ? void 0 : a.find((r) => r.name === "Source")) == null ? void 0 : c.value) == null ? void 0 : m.name,
    priority: (i = (u = (p = e.customFields) == null ? void 0 : p.find((r) => r.name === "Priority")) == null ? void 0 : u.value) == null ? void 0 : i.name
  };
}
function K() {
  const e = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Map(), n = [], o = (s) => n.push(s), d = (s, a) => {
    t.has(s) || t.set(s, /* @__PURE__ */ new Map());
    const c = t.get(s);
    c && !c.has(a.id) && c.set(a.id, a);
  };
  return {
    addNode: d,
    addRelation: o,
    isAlreadyLoaded(s) {
      return e.has(s);
    },
    addIssue(s) {
      if (!e.has(s.id)) {
        const a = {
          ...s,
          links: void 0,
          tags: void 0,
          customFields: void 0,
          ...B(s)
        };
        e.set(s.id, a), L({
          issue: s,
          addNode: d,
          addRelation: o
        });
      }
    },
    addIssueRelation({ from: s, to: a, type: c }) {
      return o({
        fromNode: "issue",
        from: s,
        toNode: "issue",
        to: a,
        type: c
      });
    },
    getIssues() {
      return A(e);
    },
    getRelations() {
      return n;
    },
    getNodes() {
      return $(t);
    }
  };
}
function $(e) {
  return Array.from(e).map(([t, n]) => [t, A(n)]);
}
function A(e) {
  return Array.from(e, ([t, n]) => n);
}
async function _({ query: e, maxDepthLevel: t }) {
  const n = K(), o = await I.get(
    `issues?${x}&query=${encodeURI(e)}`
  );
  return o.data.forEach((d) => n.addIssue(d)), await N({
    ids: w({
      issues: o.data,
      addRelation: n.addIssueRelation
    }),
    isAlreadyLoaded: n.isAlreadyLoaded,
    onLoadedIssue: n.addIssue,
    addRelation: n.addIssueRelation,
    maxDepthLevel: t
  }), {
    issues: n.getIssues(),
    relations: n.getRelations(),
    nodes: n.getNodes()
  };
}
async function U(e) {
  return _(e);
}
async function z({ addNodes: e, addRelations: t, config: n }) {
  I.defaults.baseURL = n.url, I.defaults.headers.Authorization = `Bearer ${n.token}`;
  for await (const o of n.issueQueries) {
    const { issues: d, relations: s, nodes: a } = await U({
      query: o,
      maxDepthLevel: n.issueLoadingMaxDepthLevel
    });
    await e("issue", d.map((c) => k.flatten(c)));
    for await (const [c, m] of a)
      await e(c, m);
    await t(s);
  }
}
const T = {
  name: "youtrack-connector",
  connect: z
};
export {
  T as default
};
