<script lang="ts" setup>
const { sprintName, team } = defineProps<{
  sprintName: string
  team: string
}>()

const { issues } = useIssueList({
  sprintName,
  team,
})
</script>

<template>
  <div>
    <IssueListItem v-for="item in issues" :key="item.id" :issue="item" />
  </div>
</template>
