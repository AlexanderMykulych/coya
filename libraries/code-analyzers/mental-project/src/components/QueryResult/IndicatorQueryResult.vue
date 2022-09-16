<script lang="ts" setup>
import type { QueryResultResolvedProps } from '.';

const props = defineProps<QueryResultResolvedProps>()

const firstRow = computed(() => props.queryResult.value.records?.[0])
const c = computed(() => firstRow.value?.get(firstRow.value?.keys[0])?.low)
</script>

<template>
  <div>
    value:
    {{c}}
  </div>
</template>