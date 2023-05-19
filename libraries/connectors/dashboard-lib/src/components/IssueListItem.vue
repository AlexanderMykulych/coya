<script lang="ts" setup>
const { issue } = defineProps<{
  issue: any
}>()
</script>

<template>
  <div class="bg-white rounded-md shadow-md p-4 text-left">
    <h2 class="text-xl font-semibold mb-2">
      {{ issue.idReadable }} Summary
    </h2>
    <p class="text-gray-600 mb-4">
      {{ issue.summary }}
    </p>
    <div class="mb-2">
      <span class="font-semibold">Story Points:</span> <span>{{ issue.storyPoints }}</span>
    </div>
    <div class="mb-2">
      <span class="font-semibold">Reporter:</span> <span>{{ issue.reporter.fullName }}</span>
    </div>
    <div class="mb-2">
      <span class="font-semibold">State:</span> <span>{{ issue.state }}</span>
    </div>
    <div>
      <span class="font-semibold">Assignees: </span>
      <span v-for="assignee in issue.assignees" :key="assignee.id">{{ assignee.fullName }}; </span>
    </div>
  </div>
</template>
