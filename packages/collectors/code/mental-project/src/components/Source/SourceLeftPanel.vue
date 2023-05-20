<script lang="ts" setup>
const { setActiveFileId, activeFileId } = useSourcePanel()

const tab = ref()

const setActiveFile = (id: string) => {
  setActiveFileId(id)
  tab.value = 'entities'
}
</script>

<template>
  <SourceFSExplorer v-if="!activeFileId" @select="setActiveFile($event)" />
  <div v-else flex="~ col" h-full>
    <v-tabs
      background-color="primary"
      v-model="tab"
    >
      <v-tab value="files">
        Files
      </v-tab>
      <v-tab value="entities">
        Entities
      </v-tab>
      <v-tab value="relations">
        Relations
      </v-tab>
      <v-tab value="codeinfo">
        Code Info
      </v-tab>
      <v-tab value="codeinfo-relations">
        Relations
      </v-tab>
    </v-tabs>
    <v-window v-model="tab" h-full flex-1>
      <v-window-item
        value="files"
        h-full
        overflow-x-auto
      >
      <SourceFSExplorer h-full @select="setActiveFile($event)" />
      </v-window-item>
      
      <v-window-item value="entities" h="95%" overflow-x-auto>
        <SourceEntities />
      </v-window-item>
      <v-window-item value="relations" h="95%" overflow-x-auto>
        <SourceRelations />
      </v-window-item>
      <v-window-item value="codeinfo" h="95%" overflow-x-auto>
        <SourceCodeInfo />
      </v-window-item>
      <v-window-item value="codeinfo-relations" h="95%" overflow-x-auto>
        <SourceCodeInfoRelations />
      </v-window-item>
    </v-window>
  </div>
</template>