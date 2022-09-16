<script lang="ts" setup>
import type { QueryResultType } from '../types';

const props = defineProps<{type: QueryResultType}>()
</script>

<template>
  <div>
    {{type}}
  </div>
</template>