<script lang="ts" setup>
/* eslint-disable */
import { computed, reactive, ref } from 'vue';
import { useCurrentEditorState } from '../../core/useCurrentEditorState';
import { EditorMode } from '../../core/types';
import { onWheelHorScroll } from '../NodeSetting/onWheelHorScroll';
import type { LayoutConfig } from './layouts';
import { layouts } from './layouts';

const openLayouts = ref(false);

const {
    selectedNode,
    showDebugWindow,
    state,
    applyPositioning,
    scaleToStart,
    isViewMode,
    saveToImage,
} = useCurrentEditorState();
const selectDefaultNode = () => (selectedNode.value = '_');
const selectDefaultArrowNode = () => (selectedNode.value = '->');
const toggleDebug = () => (showDebugWindow.value = !showDebugWindow.value);
const selectLayout = (layout: LayoutConfig) => applyPositioning(layout);
</script>

<template>
  <div
    v-if="!openLayouts"
    class="border-2 rounded-md p-3 bg-white h-full flex flex-row justify-between"
  >
    <div v-if="!isViewMode">
      <i-mdi:arrow-top-left-thin v-if="state.mode === EditorMode.Arrow" />
      <i-tabler:hand-finger v-else />
    </div>
    <slot name="center" />
    <div>
      <button class="border-2" @click="isViewMode = !isViewMode">
        <i-la:eye-slash-solid v-if="!isViewMode" class="pb-1" />
        <i-jam:eye-f v-else class="pb-1" />
      </button>
      <template v-if="!isViewMode">
        <button class="border-2" title="Export as PNG" @click="saveToImage">
          <i-mdi:image-move class="pb-1" />
        </button>
        <button class="border-2" @click="scaleToStart">
          <i-ic:round-fit-screen class="pb-1" />
        </button>
        <button class="border-2" @click="openLayouts = true">
          <i-mdi:graph class="pb-1" />
        </button>
        <button class="border-2" @click="selectDefaultNode">
          <i-ls:underscore class="pb-1" />
        </button>
        <button class="border-2" @click="selectDefaultArrowNode">
          <i-mdi:arrow-right-thin class="pb-1" />
        </button>
        <button class="border-2" @click="toggleDebug">
          <i-codicon:debug class="p-0.6" />
        </button>
      </template>
    </div>
  </div>
  <div
    v-else
    class="border-2 rounded-md bg-white h-full flex flex-row justify-between overflow-x-auto overflow-y-hidden scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100"
    @wheel.stop.prevent="onWheelHorScroll"
  >
    <button class="border-2" @click="openLayouts = false">
      <i-mdi:graph class="pb-1" />
    </button>
    <button
      v-for="layout in layouts"
      class="w-20 border-2 mr-3 break-words"
      @click="selectLayout(layout)"
    >
      {{ layout.name }}
    </button>
  </div>
</template>

<style scoped>
.scrollbar-thin::-webkit-scrollbar {
    height: 2px;
}
</style>
