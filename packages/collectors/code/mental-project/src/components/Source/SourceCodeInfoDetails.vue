<script lang="ts" setup>
import type { CodeInfo } from 'coya-ts-analyzer/browser';

const props = defineProps<{ modelValue: CodeInfo }>()

const json = computed(() => JSON.stringify(props.modelValue, null, '\t'))
</script>

<template>
  <div b-t w-full overflow-x-auto>
    <pre text-left>{{json}}</pre>
  </div>
</template>