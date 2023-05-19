import v from "axios";
const u = v.create({
  baseURL: "https://socialtech.myjetbrains.com/api/",
  headers: {
    Authorization: "Bearer <token>"
  }
});
var m = /* @__PURE__ */ ((e) => (e.Subtask = "Subtask", e.Duplicate = "Duplicate", e.Depend = "Depend", e.Relates = "Relates", e))(m || {});
function w({ issues: e, isAlreadyLoaded: t, addRelation: n }) {
  const r = t ?? ((a) => !1);
  return e.flatMap((a) => {
    const s = x(a);
    return s && s.length > 0 ? (s.forEach((i) => n({
      from: a.id,
      to: i,
      type: m.Subtask
    })), s.filter((i) => !r(i))) : [];
  });
}
function x(e) {
  return e.links.filter((t) => t.linkType.name === m.Subtask && t.direction === "OUTWARD").flatMap((t) => t.issues).map((t) => t.id);
}
const E = "customFields($type,name,value($type,archived,avatarUrl,buildIntegration,buildLink,color(background,id),description,fullName,id,isResolved,localizedName,login,markdownText,minutes,name,presentation,ringId,text))", p = "id,login,name,fullName,avatarUrl,email", S = `reporter(${p})`, M = `updater(${p})`, R = `fields=id,idReadable,summary,description,updated,created,usesMarkdown,${S},${M},links(id,direction,linkType(name),issues(id)),tags(name),${E}`, T = `fields=text,id,created,updated,author(${p}),attachments(id,url,name)`;
async function D(e) {
  let t = e.ids;
  const { maxDepthLevel: n } = e;
  let r = 0;
  for (; t.length > 0 && (!n || r++ < n); )
    t = await j({
      ...e,
      ids: t
    });
}
async function j({
  ids: e,
  onLoadedIssue: t,
  isAlreadyLoaded: n,
  addRelation: r
}) {
  const a = (await u.post(
    `issuesGetter?${R}`,
    e.map((s) => ({ id: s }))
  )).data;
  return a.forEach((s) => t(s)), w({
    issues: a,
    isAlreadyLoaded: n,
    addRelation: r
  });
}
function O(e) {
  B(e), _(e), C(e), G(e), P(e), Q(e);
}
function B({ issue: e, addNode: t, addRelation: n }) {
  var r;
  (r = e.tags) == null || r.forEach((o) => {
    t("tag", {
      id: o.name,
      ...o
    }), n({
      toNode: "tag",
      to: o.name,
      fromNode: "issue",
      from: e.id,
      type: "tag"
    });
  });
}
function _({ issue: e, addNode: t, addRelation: n }) {
  var a, s;
  const r = (s = (a = e.customFields) == null ? void 0 : a.find((i) => i.name === "GitLab PR link")) == null ? void 0 : s.value, o = r == null ? void 0 : r.matchAll(/merge_requests\/(?<mrNumber>\d*)/gm);
  o && Array.from(o).map((c) => {
    var l;
    return ((l = c.groups) == null ? void 0 : l.mrNumber) || "";
  }).forEach((c) => {
    t("mr", {
      id: c,
      number: c
    }), n({
      toNode: "mr",
      to: c,
      fromNode: "issue",
      from: e.id,
      type: "mr"
    });
  });
}
function C({ issue: e, addNode: t, addRelation: n }) {
  var o, a;
  const r = (a = (o = e.customFields) == null ? void 0 : o.find((s) => s.name === "Assignee")) == null ? void 0 : a.value;
  r && Array.isArray(r) && r.forEach((s) => {
    t("trackerUser", {
      id: s.id,
      name: s.name,
      fullName: s.fullName,
      login: s.login,
      avatarUrl: s.avatarUrl,
      email: s.email
    }), n({
      fromNode: "issue",
      from: e.id,
      toNode: "trackerUser",
      to: s.id,
      type: "assignee"
    });
  });
}
function G({ issue: e, addNode: t, addRelation: n }) {
  var o, a;
  const r = (a = (o = e.customFields) == null ? void 0 : o.find((s) => s.name === "Assignee QA")) == null ? void 0 : a.value;
  r && Array.isArray(r) && r.forEach((s) => {
    t("trackerUser", {
      id: s.id,
      name: s.name,
      fullName: s.fullName,
      login: s.login,
      avatarUrl: s.avatarUrl,
      email: s.email
    }), n({
      fromNode: "issue",
      from: e.id,
      toNode: "trackerUser",
      to: s.id,
      type: "assigneeQA"
    });
  });
}
function P({ issue: e, addNode: t, addRelation: n }) {
  const r = e.reporter;
  r && r.id && (t("trackerUser", {
    id: r.id,
    name: r.name,
    fullName: r.fullName,
    login: r.login,
    avatarUrl: r.avatarUrl,
    email: r.email
  }), n({
    fromNode: "issue",
    from: e.id,
    toNode: "trackerUser",
    to: r.id,
    type: "reporter"
  }));
}
function Q({ issue: e, addNode: t, addRelation: n }) {
  const r = e.updater;
  r && r.id && (t("trackerUser", {
    id: r.id,
    name: r.name,
    fullName: r.fullName,
    login: r.login,
    avatarUrl: r.avatarUrl,
    email: r.email
  }), n({
    fromNode: "issue",
    from: e.id,
    toNode: "trackerUser",
    to: r.id,
    type: "updater"
  }));
}
function q(e) {
  var t, n, r, o, a, s, i, c, l, y, g, I, h, N, b, k;
  return {
    storyPoints: (n = (t = e.customFields) == null ? void 0 : t.find((d) => d.name === "Story points")) == null ? void 0 : n.value,
    state: (a = (o = (r = e.customFields) == null ? void 0 : r.find((d) => d.name === "State")) == null ? void 0 : o.value) == null ? void 0 : a.name,
    source: (c = (i = (s = e.customFields) == null ? void 0 : s.find((d) => d.name === "Source")) == null ? void 0 : i.value) == null ? void 0 : c.name,
    priority: (g = (y = (l = e.customFields) == null ? void 0 : l.find((d) => d.name === "Priority")) == null ? void 0 : y.value) == null ? void 0 : g.name,
    severity: (N = (h = (I = e.customFields) == null ? void 0 : I.find((d) => d.name === "Severity")) == null ? void 0 : h.value) == null ? void 0 : N.name,
    tags: (k = (b = e.tags) == null ? void 0 : b.map((d) => d.name)) == null ? void 0 : k.join(",")
  };
}
function X() {
  const e = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Map(), n = [], r = (a) => n.push(a), o = (a, s) => {
    t.has(a) || t.set(a, /* @__PURE__ */ new Map());
    const i = t.get(a);
    i && !i.has(s.id) && i.set(s.id, s);
  };
  return {
    addNode: o,
    addRelation: r,
    isAlreadyLoaded(a) {
      return e.has(a);
    },
    addIssue(a) {
      if (!e.has(a.id)) {
        const s = {
          ...a,
          links: void 0,
          tags: void 0,
          customFields: void 0,
          ...q(a)
        };
        e.set(a.id, s), O({
          issue: a,
          addNode: o,
          addRelation: r
        });
      }
    },
    addIssueRelation({ from: a, to: s, type: i }) {
      return r({
        fromNode: "issue",
        from: a,
        toNode: "issue",
        to: s,
        type: i
      });
    },
    getIssues() {
      return U(e);
    },
    getRelations() {
      return n;
    },
    getNodes() {
      return H(t);
    }
  };
}
function H(e) {
  return Array.from(e).map(([t, n]) => [t, U(n)]);
}
function U(e) {
  return Array.from(e, ([t, n]) => n);
}
var A = 1 / 0, $ = 9007199254740991, W = 17976931348623157e292, F = 0 / 0, Y = "[object Function]", J = "[object GeneratorFunction]", K = "[object Symbol]", V = /^\s+|\s+$/g, Z = /^[-+]0x[0-9a-f]+$/i, z = /^0b[01]+$/i, ee = /^0o[0-7]+$/i, te = /^(?:0|[1-9]\d*)$/, ne = parseInt, re = Object.prototype, L = re.toString, oe = Math.ceil, se = Math.max;
function ae(e, t, n) {
  var r = -1, o = e.length;
  t < 0 && (t = -t > o ? 0 : o + t), n = n > o ? o : n, n < 0 && (n += o), o = t > n ? 0 : n - t >>> 0, t >>>= 0;
  for (var a = Array(o); ++r < o; )
    a[r] = e[r + t];
  return a;
}
function ie(e, t) {
  return t = t ?? $, !!t && (typeof e == "number" || te.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function de(e, t, n) {
  if (!f(n))
    return !1;
  var r = typeof t;
  return (r == "number" ? le(n) && ie(t, n.length) : r == "string" && t in n) ? ue(n[t], e) : !1;
}
function ce(e, t, n) {
  (n ? de(e, t, n) : t === void 0) ? t = 1 : t = se(Ie(t), 0);
  var r = e ? e.length : 0;
  if (!r || t < 1)
    return [];
  for (var o = 0, a = 0, s = Array(oe(r / t)); o < r; )
    s[a++] = ae(e, o, o += t);
  return s;
}
function ue(e, t) {
  return e === t || e !== e && t !== t;
}
function le(e) {
  return e != null && me(e.length) && !fe(e);
}
function fe(e) {
  var t = f(e) ? L.call(e) : "";
  return t == Y || t == J;
}
function me(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= $;
}
function f(e) {
  var t = typeof e;
  return !!e && (t == "object" || t == "function");
}
function pe(e) {
  return !!e && typeof e == "object";
}
function ye(e) {
  return typeof e == "symbol" || pe(e) && L.call(e) == K;
}
function ge(e) {
  if (!e)
    return e === 0 ? e : 0;
  if (e = he(e), e === A || e === -A) {
    var t = e < 0 ? -1 : 1;
    return t * W;
  }
  return e === e ? e : 0;
}
function Ie(e) {
  var t = ge(e), n = t % 1;
  return t === t ? n ? t - n : t : 0;
}
function he(e) {
  if (typeof e == "number")
    return e;
  if (ye(e))
    return F;
  if (f(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = f(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = e.replace(V, "");
  var n = z.test(e);
  return n || ee.test(e) ? ne(e.slice(2), n ? 2 : 8) : Z.test(e) ? F : +e;
}
var Ne = ce;
async function be(e, t) {
  await ke(e, t), await Ae(e, t);
}
async function ke({ id: e }, t) {
  (await u.get(
    `issues/${e}/sprints?fields=name,id,agile(name,id),goal`
  )).data.forEach((o) => {
    t.addNode("sprint", o), t.addRelation({
      fromNode: "issue",
      from: e,
      toNode: "sprint",
      to: o.id,
      type: "in"
    }), o.agile && (t.addNode("board", o.agile), t.addRelation({
      fromNode: "issue",
      from: e,
      toNode: "board",
      to: o.agile.id,
      type: "in"
    }), t.addRelation({
      fromNode: "sprint",
      from: o.id,
      toNode: "board",
      to: o.agile.id,
      type: "in"
    }));
  });
}
async function Ae({ id: e }, t) {
  (await u.get(
    `issues/${e}/comments?${T}`
  )).data.forEach((o) => {
    t.addNode("comment", o), t.addRelation({
      fromNode: "issue",
      from: e,
      toNode: "comment",
      to: o.id,
      type: "in"
    });
  });
}
async function Fe(e) {
  const t = e.getIssues(), n = Ne(t, 50);
  for await (const r of n) {
    const o = r.map((a) => be(a, e));
    await Promise.all(o);
  }
}
async function we({ query: e, maxDepthLevel: t }) {
  const n = X(), r = await u.get(
    `issues?${R}&query=${encodeURI(e)}`
  );
  return r.data.forEach((o) => n.addIssue(o)), await D({
    ids: w({
      issues: r.data,
      addRelation: n.addIssueRelation
    }),
    isAlreadyLoaded: n.isAlreadyLoaded,
    onLoadedIssue: n.addIssue,
    addRelation: n.addIssueRelation,
    maxDepthLevel: t
  }), await Fe(n), {
    issues: n.getIssues(),
    relations: n.getRelations(),
    nodes: n.getNodes()
  };
}
async function Re(e) {
  return we(e);
}
async function Ue({ addNodes: e, addRelations: t, config: n }) {
  u.defaults.baseURL = n.url, u.defaults.headers.Authorization = `Bearer ${n.token}`;
  for await (const r of n.issueQueries) {
    const { issues: o, relations: a, nodes: s } = await Re({
      query: r,
      maxDepthLevel: n.issueLoadingMaxDepthLevel
    });
    await e("issue", o);
    for await (const [i, c] of s)
      await e(i, c);
    await t(a);
  }
}
const Le = {
  name: "youtrack-connector",
  connect: Ue
};
export {
  m as LinkTypeName,
  Le as default
};
