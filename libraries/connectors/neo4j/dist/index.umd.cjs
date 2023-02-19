(function(n,o){typeof exports=="object"&&typeof module<"u"?o(exports,require("neo4j-driver")):typeof define=="function"&&define.amd?define(["exports","neo4j-driver"],o):(n=typeof globalThis<"u"?globalThis:n||self,o(n["coya-neo4j"]={},n.neo4j))})(this,function(n,o){"use strict";const a=(e=>e&&typeof e=="object"&&"default"in e?e:{default:e})(o);function r(){const e=a.default.driver("neo4j+s://aa84864b.databases.neo4j.io",a.default.auth.basic("neo4j","BHK4W_phDl5-U9TVZ7iFic3Io4pm-CrPYB4cWoAnWhc"));return{async insert(t,i){const s=e.session(),d=`UNWIND $items AS node CREATE (n:${t}) SET n = node`;try{await s.run(d,{items:i})}finally{await s.close()}},async insertRelations(t){const i=e.session(),s=`
      UNWIND $items AS relation
      CALL apoc.merge.node([relation.fromNode], { id: relation.from }) YIELD node as n1
      CALL apoc.merge.node([relation.toNode], { id: relation.to }) YIELD node as n2
      CALL apoc.merge.relationship(n1, 'relation', relation, {}, n2) YIELD rel
      RETURN n1, n2, rel
      `;try{await i.run(s,{items:t})}finally{await i.close()}},async clearDb(){await e.session().run("MATCH (n) DETACH DELETE n")}}}n.getNeo4j=r,Object.defineProperties(n,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
