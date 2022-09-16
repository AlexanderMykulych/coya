<script lang="ts" setup>
import { capitalize } from 'vue';
import type { QueryResultType } from '../types';
import { queryResultComponents } from './QueryResult';

const props = defineProps<{ modelValue: QueryResultType }>()
const emit = defineEmits(['update:modelValue'])

const value = useVModel(props, 'modelValue', emit)

const items = ref(queryResultComponents.map(x => ({
  label: capitalize(x.type),
  value: x.type,
})))
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