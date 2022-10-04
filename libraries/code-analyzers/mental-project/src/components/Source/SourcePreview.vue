<script lang="ts" setup>
import type { EntityLocation } from 'coya-ts-analyzer';

const props = defineProps<{fileId: string, ranges: EntityLocation[]}>()
const { rpc } = useCliRpc()

const file = asyncComputed(() => rpc.getFileById(props.fileId), "")

</script>

<template>
  <div w-full h-full flex="~ col">
    <MonacoSourcePreview
      v-if="!!file"
      :model-value="file"
      :name="fileId"
      :ranges="ranges"
    />
  </div>
</template>