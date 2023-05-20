<script lang="ts" setup>
import type { Ref } from 'vue';

defineProps<{loading: Ref<boolean>}>()
</script>

<template>
  <template v-if="loading.value">
    <div self-center flex="~ col">
      <span class="loader ml-4 mb-3"></span>
      ...Loading
    </div>
  </template>
</template>