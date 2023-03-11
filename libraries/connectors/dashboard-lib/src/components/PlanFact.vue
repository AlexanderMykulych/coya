<script lang="ts" setup>
import { getNeo4j } from 'coya-neo4j'
import { computedAsync } from '@vueuse/core'
import { computed } from 'vue'

const { sprintName, tag, team, states } = withDefaults(
  defineProps<{
    sprintName: string
    tag: string
    team: string
    states: string[]
  }>(),
  {
    states: () => ['Resolved'],
  },
)

const neo4j = getNeo4j()

const statesPrep = computed(() => states.map(x => ({
  value: x,
  name: x.replaceAll(' ', ''),
})))

const stateFilter = computed(() => {
  const filter = statesPrep.value.map(x => `
  (
    case n.state
      when "${x.value}" then n.storyPoints
      else 0
    end
  ) as ${x.name}
  `).join(',')

  const fields = statesPrep.value.map(x => `SUM(${x.name}) as ${x.name}`).join(',')

  return { filter, fields }
})

const res = computedAsync(async () => await neo4j.query(`
match (n)-[r2]->(s:sprint {name: $sprintName})
${tag ? 'match (n)-->(:tag {name: $tag})' : ''}
match (n)-->(:tag {name: $team})
where (n.source = "Task" or n.source = "Bug")
with
  n.storyPoints as sp,
  ${stateFilter.value.filter}
return SUM(sp) as sp, ${stateFilter.value.fields}
`, { sprintName, tag, team }))

const sp = computed(() => res.value?.records?.[0]?.get('sp') ?? 0)
const statesSp = computed(() => statesPrep
  .value
  .map(x => ({
    name: x.value,
    value: Number(res.value?.records?.[0]?.get(x.name) ?? 0),
  }))
  .map(x => ({
    ...x,
    percent: sp.value === 0 ? 0 : Math.floor((x.value * 100) / sp.value),
  })),
)
</script>

<template>
  <BaseBox>
    <template #label>
      <slot name="label">
        {{ tag }}
      </slot>
    </template>
    <template #content>
      <div pr-4>
        <span text-6 font-extrabold underline>Planned</span><br>
        {{ sp }}
      </div>
      <div v-for="item in statesSp" :key="item.name" pr-4>
        <span text-6 font-extrabold underline>{{ item.name }}</span> <br>
        {{ item.value }} ({{ item.percent }}%)
      </div>
    </template>
  </BaseBox>
</template>
