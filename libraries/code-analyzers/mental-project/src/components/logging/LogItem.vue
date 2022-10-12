<script setup lang="ts">
import type { LogItem } from '../../composables/useLogging';

const props = defineProps<{ modelValue: LogItem }>()
</script>

<template>
  <pre text-left>{{JSON.stringify(modelValue, null, '\t')}}
  </pre>
</template>