<script lang="ts" setup>
const { sprintName, team, state, tag } = defineProps<{
  sprintName: string
  team: string
  state?: string
  tag?: string
}>()

const { issues } = useIssueList({
  sprintName,
  team,
  state,
  tag,
})
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <IssueListItem
      v-for="item in issues"
      :key="item.id"
      :issue="item"
      :state="state"
    />
  </div>
</template>
