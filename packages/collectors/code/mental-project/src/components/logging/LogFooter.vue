<script lang="ts" setup>
const { openFooter } = useLogging()
</script>

<template>
  <div h="30vh" v-if="openFooter">
    <Logs />
  </div>
</template>