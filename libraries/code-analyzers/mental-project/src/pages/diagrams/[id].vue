<script lang="ts" setup>
import { useDiagram } from '../../store/useDiagrams';

const props = defineProps<{ id: string }>()

const { diagram } = useDiagram(props.id)
</script>

<template>
  <div h-full v-if="diagram">
    <QueryExecutor
      v-model:name="diagram.name"
      v-model:type="diagram.type"
      v-model:parameters="diagram.parameters"
      v-model:query="diagram.query"
    />
  </div>
</template>