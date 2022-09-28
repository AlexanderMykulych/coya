<script lang="ts" setup>
const { activeFileId } = useSourcePanel()
</script>

<template>
   <SourcePreview v-if="!!activeFileId" :fileId="activeFileId" />
</template>