<script setup lang="ts">
import type { WidgetConfig } from '../WidgetConfig';

defineProps<{ widgetConfig: WidgetConfig }>();
const emit = defineEmits(['valueChange']);

const apply = (style?: string) => emit('valueChange', style);
</script>

<template>
  <div class="flex ml-2">
    <button @click="apply('solid')">
      <i-my-icons-solid />
    </button>
    <button class="ml-1" @click="apply('hachure')">
      <i-my-icons-hachure />
    </button>
    <button class="ml-1" @click="apply('cross-hatch')">
      <i-my-icons-cross-hatch />
    </button>
    <button class="ml-1" @click="apply()">
      <i-my-icons-empty />
    </button>
  </div>
</template>

<style scoped>
</style>
