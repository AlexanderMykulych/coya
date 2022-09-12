<script lang="ts" setup>
import type { Ref } from 'vue';

defineProps<{
  label: string
  loading: Ref<boolean>
  state: any
}>()

const n = ref(0)
useInterval(() => {
  n.value++
}, 300)

const loadingSpaces = computed(() => '.'.repeat(n.value % 20))
</script>

<template>
  Analizing: {{ state.isLoading ? loadingSpaces : 'ready' }}
</template>
