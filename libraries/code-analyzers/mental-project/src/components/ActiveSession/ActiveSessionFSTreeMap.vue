<script setup lang="ts">
import { useActiveSessionFSTreeMap } from './useActiveSessionFSTreeMap';

const { options, fsTree } = useActiveSessionFSTreeMap()

const selectedItem = ref()
const menuOpen = ref(false)
const onClick = (item) => {
  selectedItem.value = item
  menuOpen.value = true
}
</script>

<template>
  <EChartQueryResult
    v-if="fsTree.isReady.value"
    :options="options"
    @click="onClick"
  />
  <v-dialog
    v-model="menuOpen"
  >
    <ActiveSessionSelectedElement
      :modelValue="selectedItem"
      @close="menuOpen = false"
    />
  </v-dialog>
</template>
