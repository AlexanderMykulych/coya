<script lang="ts" setup>
const { issue } = defineProps<{
  issue: any
}>()
</script>

<template>
  <div>
    {{ issue.idReadable }}
    {{ issue.summary }}
    {{ issue.usesMarkdown }}
    {{ issue.reporter.fullName }}
    {{ issue.storyPoints }}
    <!-- {{ issue.description }} -->
  </div>
</template>
