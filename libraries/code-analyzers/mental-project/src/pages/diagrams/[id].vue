<script lang="ts" setup>
import { useDiagram } from '../../store/useDiagrams';

const props = defineProps<{ id: string }>()

const { diagram } = useDiagram(props.id)
</script>

<template>
  <div h-full v-if="diagram">
    {{ diagram.id }} - {{ diagram.name }}
    <QueryExecutor
      v-model:query="diagram.query"
    />
  </div>
</template>