<script lang="ts" setup>
const { files, fsTree } = useSourceCode()

</script>

<template>
  <div class="h-full">
    <template v-if="files.isReady">
      <div v-for="file in files.state.value">
        {{file.id}}
      </div>
      <pre text-left>
      {{JSON.stringify(fsTree, null, '\t')}}
      </pre>
    </template>
  </div>
</template>