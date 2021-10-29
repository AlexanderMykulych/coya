<script lang="ts" setup>
import { RectPositioning } from 'coya-core';

const props = defineProps<{ positioning: RectPositioning }>()
</script>

<template>
    <rect fill="green" :height="positioning.h" :width="positioning.w" :x="positioning.x" :y="positioning.y"></rect>
</template>