import a from "neo4j-driver";
function u() {
  const s = a.driver("neo4j+s://cfa19696.databases.neo4j.io", a.auth.basic("neo4j", "tY1HmNeSn1AkfrBvmTm1jGn2u34Y305azQAMX6lRhdk"));
  return {
    async insert(n, o) {
      const e = s.session(), t = `UNWIND $items AS node CREATE (n:${n}) SET n = node`;
      try {
        await e.run(t, { items: o });
      } finally {
        await e.close();
      }
    },
    async insertRelations(n) {
      const o = s.session(), e = `
      UNWIND $items AS relation
      CALL apoc.merge.node([relation.fromNode], { id: relation.from }) YIELD node as n1
      CALL apoc.merge.node([relation.toNode], { id: relation.to }) YIELD node as n2
      CALL apoc.merge.relationship(n1, relation.type, relation, {}, n2) YIELD rel
      RETURN n1, n2, rel
      `;
      try {
        const t = c(n, 200);
        let i = 0;
        for await (const r of t)
          await o.run(e, { items: r }), console.log(`chunk ${i++} inserted`);
      } catch (t) {
        console.log(n[0], t);
      } finally {
        await o.close();
      }
    },
    async clearDb() {
      await s.session().run("MATCH (n) DETACH DELETE n");
    },
    async query(n, o) {
      return await s.session().run(n, o);
    }
  };
}
function c(s, n) {
  const o = [];
  for (let e = 0; e < s.length; e += n)
    o.push(s.slice(e, e + n));
  return o;
}
export {
  u as getNeo4j
};
