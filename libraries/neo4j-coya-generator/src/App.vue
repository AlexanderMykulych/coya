<script lang="ts" setup>
import neo4j from 'neo4j-driver/lib/browser/neo4j-web.min.js'
import Coya from 'coya-vue-component'
import { generateCoya } from './logic/generateCoya'
import { DiagramType } from './logic/model'
import 'coya-vue-component/dist/style.css'
const driver = neo4j.driver('neo4j://localhost',
  neo4j.auth.basic('neo4j', 'test'),
)
onScopeDispose(async() => await driver.close())

const coya = asyncComputed(async() => await generateCoya({
  driver,
  database: 'neo4j',
}, {
  type: DiagramType.SimpleQuery,
  query: `
MATCH p = (f:FsUnit)-[*..]->() where f.path='/libraries/core/src/block' 
return apoc.agg.graph(p) as graph
    `,
  // query: 'MATCH (f:FsUnit)-[l*1..]->(n:Node)-[r]->(n2) where f.name=\'src\' and not n2.filePath contains \'node_modules\' RETURN n as from,r,n2 as to',
  // query: 'MATCH (f:FsUnit)-[l*1..]->(n:Node)-[r]->(n2) where f.name=\'src\' RETURN n as from,r,n2 as to',
  // query: 'match (n:Node)-[r]->(n2) return n as from, r, n2 as to limit 50',
}))
// const neo4jUrl = 'hh';
// neo4j
</script>

<template>
  <main font-sans p="x-4 y-10" text="center gray-700 dark:gray-200" w-full h-full>
    <!-- {{ coya }} -->
    <!-- <Coya v-if="coya" :config="coya" class="w-full h-full" /> -->
    <QueryDiagram />
  </main>
</template>
