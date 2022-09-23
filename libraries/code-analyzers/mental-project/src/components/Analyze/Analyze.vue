<script lang="ts" setup>
const { rpc } = useCliRpc()

const analyze = useAsyncState(() => rpc.runAnalyze(), null, {
  immediate: false,
  resetOnExecute: true,
})
</script>

<template>
  <button icon-btn @click="analyze.execute()" :disabled="analyze.isLoading.value">
    <i-uim:process v-if="analyze.isLoading.value" animate-spin/>
    <i-uim:process v-else />
  </button>
</template>