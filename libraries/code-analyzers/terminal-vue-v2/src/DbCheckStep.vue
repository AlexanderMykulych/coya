<script lang="ts" setup>
import { UseAsyncStateReturn } from '@vueuse/core';

const {state} = defineProps<{
  state: UseAsyncStateReturn<any, true>
}>()

const n = ref(0)
useInterval(() => {
  n.value++
}, 300)

const loadingSpaces = computed(() => ' '.repeat(n.value % 4))
</script>

<template>
  <template v-if="state.isLoading">
    DB check...
  </template>
  <template v-else>
    DB address: {{ state.state.address }} <NewLine />
    DB version: {{ state.state.version }}
  </template>
</template>
