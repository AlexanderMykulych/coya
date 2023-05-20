<script setup lang="ts">
import { ref } from 'vue';

const val = ref({
    init: {
        position: {
            x: '20',
            y: 'start.y + start.h + 20',
            w: 'start.w',
            h: 'start.h',
        },
    },
});
</script>

<template>
  <JsonEditor :model-value="val" />
</template>
