<script lang="ts" setup>
import type { BarSettings } from './types';

const props = withDefaults(defineProps<{ modelValue: BarSettings }>(), { 
  modelValue: () => ({}),
})
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
    <v-text-field label="Label X" v-model="model.xLabel" />
    <v-text-field label="Label Y" v-model="model.yLabel" />
  </div>
</template>