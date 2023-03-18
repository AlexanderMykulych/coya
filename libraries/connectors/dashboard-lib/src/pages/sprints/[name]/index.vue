<script lang="ts" setup>
const { name } = defineProps<{ name: string }>()

const states = [
  'Resolved',
  'Backlog',
  'Pending',
  'In progress',
  'Code review',
]
</script>

<template>
  <main font-sans p="x-4 y-10" text="center gray-700 dark:gray-200">
    <div flex flex-col>
      <PlanFact
        :sprint-name="name"
        team="BigTeam"
        :states="states"
      >
        <template #label>
          All
        </template>
      </PlanFact>
      <PlanFact
        :sprint-name="name"
        tag="frontend"
        team="BigTeam"
        :states="states"
      >
        <template #label>
          Frontend
        </template>
      </PlanFact>
      <PlanFact
        :sprint-name="name"
        tag="backend"
        team="BigTeam"
        :states="states"
      >
        <template #label>
          Backend
        </template>
      </PlanFact>
    </div>
  </main>
</template>
