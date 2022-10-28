<script setup lang="ts">
import { useActiveSessionFSTreeMap } from './useActiveSessionFSTreeMap';

const { options, fsTree } = useActiveSessionFSTreeMap()
const { setActiveFileId } = useSourcePanel()

const selectedItem = ref()
const menuOpen = ref(false)
const isFullscreen = ref(false)

const onClick = (item) => {
  selectedItem.value = item

  if (item?.data?.children?.length === 0 && item?.data?.name) {
    setActiveFileId(item?.data?.path)

    menuOpen.value = true
  }
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
    :fullscreen="isFullscreen"
  >
    <ActiveSessionSelectedElement
      :modelValue="selectedItem"
      @close="menuOpen = false"
      @open-full="isFullscreen = true"
      @fold-full="isFullscreen = false"
      :isFullscreen="isFullscreen"
    >
      <template #before-header-icons>
        <i-material-symbols:open-in-full height="20px" v-if="!isFullscreen" @click="isFullscreen = true" />
        <i-material-symbols:close-fullscreen height="20px" v-else @click="isFullscreen = false" />
      </template>
    </ActiveSessionSelectedElement>
  </v-dialog>
</template>
