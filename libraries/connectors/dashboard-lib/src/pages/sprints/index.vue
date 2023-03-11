<script lang="ts" setup>
import { getNeo4j } from 'coya-neo4j'

const neo4j = getNeo4j()

const sprintsResult = computedAsync(() => neo4j.query(`
match(s:sprint)
return distinct s.name as sprintName
`))

const sprints = computed(() => sprintsResult.value?.records?.map(x => x.get('sprintName')))
</script>

<template>
  <div
    w-full
    flex
    flex-wrap
    justify-center
  >
    <RouterLink
      v-for="item in sprints"
      :key="item"
      :to="`sprints/${item}`"
      btn
      w-40
      m-10
    >
      {{ item }}
    </RouterLink>
  </div>
</template>
