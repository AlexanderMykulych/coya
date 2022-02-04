<script setup lang="ts">
import { computed } from 'vue';
import { ColorPicker } from 'vue3-colorpicker';
import 'vue3-colorpicker/style.css';
import type { WidgetConfig } from '../WidgetConfig';

const props = defineProps<{ widgetConfig: WidgetConfig }>();
const emit = defineEmits(['valueChange']);

const color = computed(() => props.widgetConfig?.row?.value);
const changeColor = (color: string) => emit('valueChange', color);
</script>

<template>
  <div>
    <ColorPicker
      :is-widget="false"
      format="hex8"
      :pure-color="color"
      @update:pureColor="changeColor"
    />
  </div>
</template>

<style scoped>
.modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: table;
}

.modal-wrapper {
    display: table-cell;
    vertical-align: middle;
}

.modal-container {
    width: 300px;
    margin: 0px auto;
    padding: 20px 30px;
    font-family: Helvetica, Arial, sans-serif;
}
.hu-color-picker {
    box-sizing: content-box;
}
</style>
