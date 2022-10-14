<script setup lang="ts">
import { useActiveSessionFSTreeMap } from './useActiveSessionFSTreeMap';

const { options, fsTree, trackedFiles } = useActiveSessionFSTreeMap()

</script>

<template>
  <EChartQueryResult v-if="fsTree.isReady.value" :options="options" />
  {{trackedFiles.map(x => x.file).join(', ')}}
</template>
