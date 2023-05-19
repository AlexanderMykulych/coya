(function(s,i){typeof exports=="object"&&typeof module<"u"?i(exports,require("neo4j-driver")):typeof define=="function"&&define.amd?define(["exports","neo4j-driver"],i):(s=typeof globalThis<"u"?globalThis:s||self,i(s["coya-neo4j"]={},s.neo4j))})(this,function(s,i){"use strict";function a(){const t=i.driver("neo4j+s://cfa19696.databases.neo4j.io",i.auth.basic("neo4j","tY1HmNeSn1AkfrBvmTm1jGn2u34Y305azQAMX6lRhdk"));return{async insert(e,o){const n=t.session(),r=`UNWIND $items AS node CREATE (n:${e}) SET n = node`;try{await n.run(r,{items:o})}finally{await n.close()}},async insertRelations(e){const o=t.session(),n=`
      UNWIND $items AS relation
      CALL apoc.merge.node([relation.fromNode], { id: relation.from }) YIELD node as n1
      CALL apoc.merge.node([relation.toNode], { id: relation.to }) YIELD node as n2
      CALL apoc.merge.relationship(n1, relation.type, relation, {}, n2) YIELD rel
      RETURN n1, n2, rel
      `;try{const r=c(e,200);let l=0;for await(const u of r)await o.run(n,{items:u}),console.log(`chunk ${l++} inserted`)}catch(r){console.log(e[0],r)}finally{await o.close()}},async clearDb(){await t.session().run("MATCH (n) DETACH DELETE n")},async query(e,o){return await t.session().run(e,o)}}}function c(t,e){const o=[];for(let n=0;n<t.length;n+=e)o.push(t.slice(n,n+e));return o}s.getNeo4j=a,Object.defineProperty(s,Symbol.toStringTag,{value:"Module"})});
