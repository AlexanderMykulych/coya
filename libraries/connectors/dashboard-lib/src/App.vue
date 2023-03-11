<script lang="ts" setup>
const states = ['Resolved', 'Backlog', 'Pending', 'In progress', 'Code review']
</script>

<template>
  <main font-sans p="x-4 y-10" text="center gray-700 dark:gray-200">
    <div flex flex-wrap>
      <PlanFact
        sprint-name="Sprint 5_2023"
        team="BigTeam"
        :states="states"
      >
        <template #label>
          All
        </template>
      </PlanFact>
      <PlanFact
        sprint-name="Sprint 5_2023"
        tag="frontend"
        team="BigTeam"
        :states="states"
      >
        <template #label>
          Frontend
        </template>
      </PlanFact>
      <PlanFact
        sprint-name="Sprint 5_2023"
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
