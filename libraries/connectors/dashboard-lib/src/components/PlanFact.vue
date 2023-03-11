<script lang="ts" setup>
import { getNeo4j } from 'coya-neo4j'
import { computedAsync } from '@vueuse/core'
import { computed } from 'vue'

const { sprintName, tag, team } = defineProps<{
  sprintName: string
  tag: string
  team: string
}>()

const neo4j = getNeo4j()

const res = computedAsync(async () => await neo4j.query(`
match (n)-[r2]->(s:sprint {name: $sprintName})
${tag ? 'match (n)-->(:tag {name: $tag})' : ''}
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
return SUM(sp) as sp, SUM(resolvedSp) as resolvedSp
`, { sprintName, tag, team }))

const sp = computed(() => res.value?.records?.[0]?.get('sp') ?? 0)
const resolvedSp = computed(() => res.value?.records?.[0]?.get('resolvedSp') ?? 0)
const percent = computed(() => Math.floor((resolvedSp.value * 100) / sp.value))
</script>

<template>
  <div border-1 m-2 p-5 display min-w-100 flex flex-col>
    <span text-11>
      <slot name="label">
        {{ tag }}
      </slot>
    </span>
    <div flex w-full justify-around text-5 font-200>
      <div>
        <span text-6 font-extrabold underline>Plan</span><br>
        {{ sp }}
      </div>
      <div>
        <span text-6 font-extrabold underline>Fact</span> <br>
        {{ resolvedSp }} ({{ percent }}%)
      </div>
    </div>
  </div>
</template>
