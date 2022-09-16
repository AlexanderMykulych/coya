<script lang="ts" setup>
import { QueryResultType } from '../types';

const props = defineProps<{ modelValue: QueryResultType }>()
const emit = defineEmits(['update:modelValue'])

const value = useVModel(props, 'modelValue', emit)

const items = ref([{
  label: 'Graph',
  value: QueryResultType.Graph,
}, {
  label: 'Indicator',
  value: QueryResultType.Indicator,
}])
</script>

<template>
  <div class="w-full">
    <v-autocomplete
      v-model="value"
      :items="items"
      item-value="value"
      item-title="label"
      label="Result"
    />
  </div>
</template>