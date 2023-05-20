<script lang="ts" setup>
import LogFooter from "./logging/LogFooter.vue";
const { openLogs } = useLogging()
</script>
<template>
  <GlobalDialogs />
  <div flex="~ col">
    <div>
      <LogFooter />
    </div>
    <nav text-xl mt-6 inline-flex gap-2 b-t-1 pt-2 flex justify-between>
      <Status />
      <div>
        <Analyze mr-10 />
        <button mr-10 icon-btn @click="openLogs">
          <div i-icon-park:upload-logs />
        </button>
        <button icon-btn @click="toggleDark()">
          <div dark:i-carbon-moon i-carbon-sun />
        </button>
      </div>
    </nav>
  </div>
</template>
