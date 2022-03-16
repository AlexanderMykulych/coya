<script lang="ts" setup>
const query = ref('');
</script>

<template>
  <div class="h-full flex flex-row justify-around">
    <Query v-model="query" class="w-full" />
    <Diagram class="w-full" :query="query" />
  </div>
</template>
