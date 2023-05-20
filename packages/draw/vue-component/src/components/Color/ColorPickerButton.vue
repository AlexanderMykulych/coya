<script setup lang="ts">
/* eslint-disable */
import { ref } from 'vue';
import { ColorPicker } from 'vue-color-kit';
import 'vue-color-kit/dist/vue-color-kit.css';

defineProps<{ modelValue: string }>();
defineEmits(['update:modelValue']);

const open = ref(false);
function prepareColor({ r, g, b, a }: { r: number; g: number; b: number; a: number }) {
    return `rgba(${r}, ${g}, ${b}, ${a})`;
}
</script>

<template>
  <div>
    <button class="border-2" @click="open = !open">
      <ic:twotone-border-color :color="modelValue" />
    </button>
    <Teleport to="body">
      <div v-if="open" class="modal-mask" @click="open = false">
        <div class="modal-wrapper">
          <div class="modal-container">
            <ColorPicker :color="modelValue" @click.stop @changeColor="val => $emit('update:modelValue', prepareColor(val.rgba))" />
          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<style>
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
