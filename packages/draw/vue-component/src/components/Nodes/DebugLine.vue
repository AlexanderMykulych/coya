<script setup lang="ts">
import type { LineDebugAction } from 'coya-core';

const props = defineProps<{ line: LineDebugAction }>();

const lineTextX = computed(() => {
    if (props.line.lineType === 'y')
        return 10;

    return props.line.value;
});
</script>

<template>
  <line
    v-if="line.lineType === 'y'"
    x1="-1000"
    :y1="line.value"
    x2="1000"
    :y2="line.value"
    :stroke="line.color"
  />
  <line v-else :x1="line.value" y1="-1000" :x2="line.value" y2="1000" :stroke="line.color" />
  <textSvg
    :text="line.label"
    :x="lineTextX"
    :y="lineTextX"
  />
</template>
