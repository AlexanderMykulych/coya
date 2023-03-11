<template>
  <main font-sans p="x-4 y-10" text="center gray-700 dark:gray-200">
    <div flex>
      <PlanFact sprint-name="Sprint 5_2023" team="BigTeam">
        <template #label>
          All
        </template>
      </PlanFact>
      <PlanFact sprint-name="Sprint 5_2023" tag="frontend" team="BigTeam">
        <template #label>
          Frontend
        </template>
      </PlanFact>
      <PlanFact sprint-name="Sprint 5_2023" tag="backend" team="BigTeam">
        <template #label>
          Backend
        </template>
      </PlanFact>
    </div>
  </main>
</template>
