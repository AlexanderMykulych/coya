<script setup lang="ts">
import type { LineDebugAction } from 'coya-core';

const props = defineProps<{ lines: LineDebugAction[] }>();
const style = reactive({
    strokeWidth: 1,
});
</script>

<template>
  <g :style="style">
    <DebugLine v-for="(line, index) in lines" :key="index" :line="line" />
  </g>
</template>
