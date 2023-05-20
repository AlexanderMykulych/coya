<script lang="ts" setup>
const { name } = defineProps<{ name: string }>()

const states = [
  'Resolved',
  'Backlog',
  'Pending',
  'In progress',
  'Code review',
]

const router = useRouter()

const onStateClick = (state: string, tag?: string) =>
  router.push(`/sprints/${name}/issues/state/${state}/${tag ?? ''}`)
</script>

<template>
  <main font-sans p="x-4 y-10" text="center gray-700 dark:gray-200">
    <div flex flex-col>
      <PlanFact
        :sprint-name="name"
        :states="states"
        team="BigTeam"
        @clickState="onStateClick($event)"
      >
        <template #label>
          All
        </template>
      </PlanFact>
      <PlanFact
        :sprint-name="name"
        :states="states"
        tag="frontend"
        team="BigTeam"
        @clickState="onStateClick($event, 'frontend')"
      >
        <template #label>
          Frontend
        </template>
      </PlanFact>
      <PlanFact
        :sprint-name="name"
        :states="states"
        tag="backend"
        team="BigTeam"
        @clickState="onStateClick($event, 'backend')"
      >
        <template #label>
          Backend
        </template>
      </PlanFact>
    </div>
  </main>
</template>
