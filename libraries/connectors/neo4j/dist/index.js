import a from "neo4j-driver";
function r() {
  const s = a.driver("neo4j+s://aa84864b.databases.neo4j.io", a.auth.basic("neo4j", "BHK4W_phDl5-U9TVZ7iFic3Io4pm-CrPYB4cWoAnWhc"));
  return {
    async insert(n, e) {
      const o = s.session(), i = `UNWIND $items AS node CREATE (n:${n}) SET n = node`;
      try {
        await o.run(i, { items: e });
      } finally {
        await o.close();
      }
    },
    async insertRelations(n) {
      const e = s.session(), o = `
      UNWIND $items AS relation
      CALL apoc.merge.node([relation.fromNode], { id: relation.from }) YIELD node as n1
      CALL apoc.merge.node([relation.toNode], { id: relation.to }) YIELD node as n2
      CALL apoc.merge.relationship(n1, 'relation', relation, {}, n2) YIELD rel
      RETURN n1, n2, rel
      `;
      try {
        await e.run(o, { items: n });
      } finally {
        await e.close();
      }
    },
    async clearDb() {
      await s.session().run("MATCH (n) DETACH DELETE n");
    }
  };
}
export {
  r as getNeo4j
};
