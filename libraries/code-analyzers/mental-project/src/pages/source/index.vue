<script lang="ts" setup>

const selectedFile = ref()
</script>

<template>
  <div class="h-full" flex="~">
    <SourceFSExplorer class="w-20%" @select="selectedFile = $event"/>
    <div class="w-80%">
      <SourcePreview :fileId="selectedFile" />
    </div>
  </div>
</template>