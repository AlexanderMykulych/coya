<script setup lang="ts">
import { getNeo4j } from 'coya-neo4j'

const neo4j = getNeo4j()

const testFilesResult = computedAsync(() => neo4j.query(`
match (f:file)
where f.filePath ends with '.pw.spec.ts'
return f
`))

const modulesWithTestsResult = computedAsync(() => neo4j.query(`
match (fModules:folder)-->(f:folder)-[*1..5]->(fTest:file)
where
    fModules.filePath = '/src/modules' and
    fTest.filePath ends with '.pw.spec.ts'
return distinct f
`))
</script>

<template>
  Component Test:
  <div>Files: {{ testFilesResult?.records?.length }}</div>
  <div>Modules with tests: {{ modulesWithTestsResult?.records?.length }}</div>
</template>
