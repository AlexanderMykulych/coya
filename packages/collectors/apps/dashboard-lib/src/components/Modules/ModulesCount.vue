<script setup lang="ts">
import { getNeo4j } from 'coya-neo4j'

const neo4j = getNeo4j()

const modulesResult = computedAsync(() => neo4j.query(`
match (fModules:folder)-->(f:folder)
where fModules.filePath = '/src/modules'
return f
`))
</script>

<template>
  <div>modules: {{ modulesResult?.records?.length }}</div>
</template>
