<script lang="ts" setup>
const props = defineProps<{fileId: string}>()
const { rpc } = useCliRpc()
const { highlightItem } = useSourcePanel()

const file = asyncComputed(() => rpc.getFileById(props.fileId), "")

const fileEntities = asyncComputed(() => highlightItem.value ? [highlightItem.value] : [], [])
</script>

<template>
  <div w-full h-full flex="~ col">
    <MonacoSourcePreview
      v-if="!!file"
      :model-value="file"
      :name="fileId"
      :ranges="fileEntities"
    />
  </div>
</template>