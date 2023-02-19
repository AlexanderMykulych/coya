(function(o,i){typeof exports=="object"&&typeof module<"u"?i(exports,require("neo4j-driver")):typeof define=="function"&&define.amd?define(["exports","neo4j-driver"],i):(o=typeof globalThis<"u"?globalThis:o||self,i(o["coya-neo4j"]={},o.neo4j))})(this,function(o,i){"use strict";const r=(e=>e&&typeof e=="object"&&"default"in e?e:{default:e})(i);function c(){const e=r.default.driver("neo4j+s://aa84864b.databases.neo4j.io",r.default.auth.basic("neo4j","BHK4W_phDl5-U9TVZ7iFic3Io4pm-CrPYB4cWoAnWhc"));return{async insert(t,s){const n=e.session(),a=`UNWIND $items AS node CREATE (n:${t}) SET n = node`;try{await n.run(a,{items:s})}finally{await n.close()}},async insertRelations(t){const s=e.session(),n=`
      UNWIND $items AS relation
      CALL apoc.merge.node([relation.fromNode], { id: relation.from }) YIELD node as n1
      CALL apoc.merge.node([relation.toNode], { id: relation.to }) YIELD node as n2
      CALL apoc.merge.relationship(n1, 'relation', relation, {}, n2) YIELD rel
      RETURN n1, n2, rel
      `;try{const a=l(t,200);let u=0;for await(const d of a)await s.run(n,{items:d}),console.log(`chunk ${u++} inserted`)}finally{await s.close()}},async clearDb(){await e.session().run("MATCH (n) DETACH DELETE n")}}}function l(e,t){const s=[];for(let n=0;n<e.length;n+=t)s.push(e.slice(n,n+t));return s}o.getNeo4j=c,Object.defineProperties(o,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
