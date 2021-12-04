<script lang="ts" setup>
import { computed } from 'vue';
import { WidgetConfig } from '../WidgetConfig';

const props = defineProps<{widgetConfig: WidgetConfig}>();
const emit = defineEmits(['valueChange']);
const isNumber = computed(() => !isNaN(Number(props.widgetConfig.row.value)));
</script>

<template>
  <div class="text-dark-100 w-500 h-3.5 opacity-30 hover:opacity-100 hover:cursor-pointer">
    <!-- <i-uil:arrows-resize v-if="isNumber" /> -->
    <input
        :value="widgetConfig.row.value"
        type="text"
        class="bg-gray-600 text-white"
        @input="$emit('valueChange', $event?.target?.value)"
    />
  </div>
</template>
