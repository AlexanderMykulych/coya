<script lang="ts" setup>
import { useSourcePanel } from '../../store/useSourcePanel';


const props = defineProps<{fileId: string}>()
const { rpc } = useCliRpc()
const { activeEntity } = useSourcePanel()

const file = asyncComputed(() => rpc.getFileById(props.fileId), "")

const fileEntities = asyncComputed(() => activeEntity.value ? [activeEntity.value] : [], [])
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