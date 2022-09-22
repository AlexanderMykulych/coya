<script lang="ts" setup>
const props = defineProps<{fileId: string}>()
const { rpc } = useCliRpc()

const file = asyncComputed(() => rpc.getFileById(props.fileId), "")
</script>

<template>
  <div w-full>
    {{file}}
  </div>
</template>