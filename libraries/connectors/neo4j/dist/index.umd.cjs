(function(s,i){typeof exports=="object"&&typeof module<"u"?i(exports,require("neo4j-driver")):typeof define=="function"&&define.amd?define(["exports","neo4j-driver"],i):(s=typeof globalThis<"u"?globalThis:s||self,i(s["coya-neo4j"]={},s.neo4j))})(this,function(s,i){"use strict";function a(){const t=i.driver("neo4j+s://aa84864b.databases.neo4j.io",i.auth.basic("neo4j","BHK4W_phDl5-U9TVZ7iFic3Io4pm-CrPYB4cWoAnWhc"));return{async insert(n,o){const e=t.session(),r=`UNWIND $items AS node CREATE (n:${n}) SET n = node`;try{await e.run(r,{items:o})}finally{await e.close()}},async insertRelations(n){const o=t.session(),e=`
      UNWIND $items AS relation
      CALL apoc.merge.node([relation.fromNode], { id: relation.from }) YIELD node as n1
      CALL apoc.merge.node([relation.toNode], { id: relation.to }) YIELD node as n2
      CALL apoc.merge.relationship(n1, relation.type, relation, {}, n2) YIELD rel
      RETURN n1, n2, rel
      `;try{const r=c(n,200);let l=0;for await(const u of r)await o.run(e,{items:u}),console.log(`chunk ${l++} inserted`)}finally{await o.close()}},async clearDb(){await t.session().run("MATCH (n) DETACH DELETE n")},async query(n,o){return await t.session().run(n,o)}}}function c(t,n){const o=[];for(let e=0;e<t.length;e+=n)o.push(t.slice(e,e+n));return o}s.getNeo4j=a,Object.defineProperty(s,Symbol.toStringTag,{value:"Module"})});
