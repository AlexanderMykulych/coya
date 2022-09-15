<script lang="ts" setup>
defineProps<{modelValue: 'graph' | 'indicator'}>()
</script>

<template>
  <div>
    <button class="btn">
      Graph
    </button>
    <button class="btn ml-3">
      Indicator
    </button>
  </div>
</template>