<script setup lang="ts">

const { rpc } = useCliRpc()

const connectionStatus = useAsyncState(async () => {
  await rpc.ping('message from webapp')
  return 'connected'
}, 'connecting...')

</script>

<template>
  <div class="w-full h-full">
    <div class="text-left">
      Status: {{ connectionStatus.state.value }}
    </div>
    
  </div>
</template>
