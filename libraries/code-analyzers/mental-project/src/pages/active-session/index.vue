<script lang="ts" setup>
const { runSession, activeStepName } = useActiveSession()
</script>

<template>
  <div flex="~ col" h-full>
    <div flex>
      <v-btn btn @click="runSession">run</v-btn>
    </div>
    <div>
      {{activeStepName}}
    </div>
    <ActiveSessionFSTreeMap />
  </div>
</template>