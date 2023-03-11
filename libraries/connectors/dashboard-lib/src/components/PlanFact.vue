<script lang="ts" setup>
import { getNeo4j } from 'coya-neo4j'
import { computedAsync } from '@vueuse/core'
import { computed } from 'vue'

const { sprintName, tag, team, onlyResolved } = defineProps<{
  sprintName: string
  tag: string
  team: string
}>()

const neo4j = getNeo4j()

const res = computedAsync(async () => await neo4j.query(`
match (n)-[r2]->(s:sprint {name: $sprintName})
match (n)-->(:tag {name: $tag})
match (n)-->(:tag {name: $team})
where (n.source = "Task" or n.source = "Bug")
with
  n.storyPoints as sp,
  (
    case n.state
      when "Resolved" then n.storyPoints
      else 0
    end
  ) as resolvedSp
return SUM(storyPoints) as sp, SUM(resolvedSp) as resolvedSp
`, { sprintName, tag, team }))

const sp = computed(() => res.value?.records?.[0]?.get('sp') ?? 0)
const resolvedSp = computed(() => res.value?.records?.[0]?.get('sp') ?? 0)
const percent = computed(() => (resolvedSp.value * 100) / sp.value)
</script>

<template>
  <div>
    StoryPoints: {{ sp }} - {{ resolvedSp }} -> {{ percent }}%
  </div>
</template>
