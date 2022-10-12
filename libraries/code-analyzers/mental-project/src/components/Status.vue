<script lang="ts" setup>
import { CliConnectionStatus } from 'coya-analyzer-shared-types';

const { status, workingDir } = useCliRpc()
</script>

<template>
  <div>
    status:
    <span v-if="status.state.value === CliConnectionStatus.Connected" color-green>
      {{status.state.value}}
    </span>
    <span v-if="status.state.value === CliConnectionStatus.Connecting" color-yellow>
      {{status.state.value}}...
    </span>
    <span v-if="status.state.value === CliConnectionStatus.Failed" color-red>
      {{status.state.value}}
    </span>;

    dir: {{workingDir.state}}
  </div>
</template>