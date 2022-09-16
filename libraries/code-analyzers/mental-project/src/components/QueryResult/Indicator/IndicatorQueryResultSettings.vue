<script lang="ts" setup>
import type { IndicatorSettings } from './types';

const props = defineProps<{ modelValue: IndicatorSettings }>()
const emits = defineEmits(['update:modelValue'])

const model = useVModel(
  props,
  'modelValue',
  useDebounceFn((name, value) => emits(name, value), 150),
  {
    clone: false,
    defaultValue: {},
    deep: true,
    passive: true,
  },
)
</script>

<template>
  <div>
    <v-text-field label="Label" v-model="model.label" />
    <div class="flex">
      <v-text-field class="mr-10" label="Min" v-model.number="model.min" type="number" />
      <v-text-field label="Max" v-model.number="model.max" type="number" />
    </div>
    <IndicatorIntervals v-model:intervals="model.intervals" />
  </div>
</template>