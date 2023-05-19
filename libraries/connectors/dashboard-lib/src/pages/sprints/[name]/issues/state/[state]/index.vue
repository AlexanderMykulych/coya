<script lang="ts" setup>
defineProps<{ state: string; name: string }>()
</script>

<template>
  <div>
    <IssueList :sprint-name="name" team="BigTeam" :state="state" />
  </div>
</template>
