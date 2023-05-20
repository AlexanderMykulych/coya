<script lang="ts" setup>
const { activeFileId, secondFileId } = useSourcePanel()

const { highlightItem } = useSourcePanel()

const fileEntities = asyncComputed(() => highlightItem.value ? [highlightItem.value] : [], [])

const leftEntity = computed(() =>
  secondFileId.value && isTwoItems(highlightItem.value)
    ? highlightItem.value.from.filePath === activeFileId.value
      ? [highlightItem.value.from]
      : [highlightItem.value.to]
    : []
)

const rightEntity = computed(() =>
  secondFileId.value && isTwoItems(highlightItem.value)
    ? highlightItem.value.from.filePath === activeFileId.value
      ? [highlightItem.value.to]
      : [highlightItem.value.from]
    : []
)
</script>

<template>
  <div w-full h-full flex>
    <template v-if="secondFileId">
      <div h-full w="50%">
        <SourcePreview v-if="!!activeFileId" :fileId="activeFileId" :ranges="leftEntity" />
      </div>
      <div h-full w="50%">
        <SourcePreview v-if="!!secondFileId" :fileId="secondFileId" :ranges="rightEntity" />
      </div>
    </template>
    <template v-else>
      <SourcePreview v-if="!!activeFileId" :fileId="activeFileId" :ranges="fileEntities" />
    </template>
  </div>
</template>