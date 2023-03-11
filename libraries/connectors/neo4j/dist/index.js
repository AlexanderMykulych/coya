import i from "neo4j-driver";
function u() {
  const o = i.driver("neo4j+s://aa84864b.databases.neo4j.io", i.auth.basic("neo4j", "BHK4W_phDl5-U9TVZ7iFic3Io4pm-CrPYB4cWoAnWhc"));
  return {
    async insert(e, s) {
      const n = o.session(), t = `UNWIND $items AS node CREATE (n:${e}) SET n = node`;
      try {
        await n.run(t, { items: s });
      } finally {
        await n.close();
      }
    },
    async insertRelations(e) {
      const s = o.session(), n = `
      UNWIND $items AS relation
      CALL apoc.merge.node([relation.fromNode], { id: relation.from }) YIELD node as n1
      CALL apoc.merge.node([relation.toNode], { id: relation.to }) YIELD node as n2
      CALL apoc.merge.relationship(n1, relation.type, relation, {}, n2) YIELD rel
      RETURN n1, n2, rel
      `;
      try {
        const t = c(e, 200);
        let a = 0;
        for await (const r of t)
          await s.run(n, { items: r }), console.log(`chunk ${a++} inserted`);
      } finally {
        await s.close();
      }
    },
    async clearDb() {
      await o.session().run("MATCH (n) DETACH DELETE n");
    },
    async query(e, s) {
      return await o.session().run(e, s);
    }
  };
}
function c(o, e) {
  const s = [];
  for (let n = 0; n < o.length; n += e)
    s.push(o.slice(n, n + e));
  return s;
}
export {
  u as getNeo4j
};
