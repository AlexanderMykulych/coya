<script lang="ts" setup>
defineProps<{ state: string; tag: string; name: string }>()
</script>

<template>
  <div>
    <IssueList :sprint-name="name" team="BigTeam" :tag="tag" :state="state" />
  </div>
</template>
