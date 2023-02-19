import i from "neo4j-driver";
function u() {
  const s = i.driver("neo4j+s://aa84864b.databases.neo4j.io", i.auth.basic("neo4j", "BHK4W_phDl5-U9TVZ7iFic3Io4pm-CrPYB4cWoAnWhc"));
  return {
    async insert(e, o) {
      const n = s.session(), t = `UNWIND $items AS node CREATE (n:${e}) SET n = node`;
      try {
        await n.run(t, { items: o });
      } finally {
        await n.close();
      }
    },
    async insertRelations(e) {
      const o = s.session(), n = `
      UNWIND $items AS relation
      CALL apoc.merge.node([relation.fromNode], { id: relation.from }) YIELD node as n1
      CALL apoc.merge.node([relation.toNode], { id: relation.to }) YIELD node as n2
      CALL apoc.merge.relationship(n1, 'relation', relation, {}, n2) YIELD rel
      RETURN n1, n2, rel
      `;
      try {
        const t = c(e, 200);
        let a = 0;
        for await (const r of t)
          await o.run(n, { items: r }), console.log(`chunk ${a++} inserted`);
      } finally {
        await o.close();
      }
    },
    async clearDb() {
      await s.session().run("MATCH (n) DETACH DELETE n");
    }
  };
}
function c(s, e) {
  const o = [];
  for (let n = 0; n < s.length; n += e)
    o.push(s.slice(n, n + e));
  return o;
}
export {
  u as getNeo4j
};
