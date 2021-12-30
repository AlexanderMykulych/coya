<script lang="ts" setup>
import { ref, reactive, computed } from 'vue';
import { useCurrentEditorState } from '../../core/useCurrentEditorState';
import { EditorMode } from '../../core/types';
import { LayoutConfig, layouts } from './layouts';
import { onWheelHorScroll } from '../NodeSetting/onWheelHorScroll';

const openLayouts = ref(false);

const { selectedNode, showDebugWindow, state, applyPositioning } =
    useCurrentEditorState();
const selectDefaultNode = () => (selectedNode.value = '_');
const selectDefaultArrowNode = () => (selectedNode.value = '->');
const toggleDebug = () => (showDebugWindow.value = !showDebugWindow.value);
const selectLayout = (layout: LayoutConfig) => applyPositioning(layout);
</script>

<template>
    <div
        v-if="!openLayouts"
        class="
            border-2
            rounded-md
            p-3
            bg-white
            h-full
            flex flex-row
            justify-between
        "
    >
        <div>
            <i-mdi:arrow-top-left-thin v-if="state.mode === EditorMode.Arrow" />
            <i-tabler:hand-finger v-else />
        </div>
        <slot name="center"></slot>
        <div>
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
        </div>
    </div>
    <div
        v-else
        @wheel.stop.prevent="onWheelHorScroll"
        class="
            border-2
            rounded-md
            bg-white
            h-full
            flex flex-row
            justify-between
            overflow-x-auto overflow-y-hidden
            scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100
        "
    >
        <button class="border-2" @click="openLayouts = false">
            <i-mdi:graph class="pb-1" />
        </button>
        <button
            v-for="layout in layouts"
            @click="selectLayout(layout)"
            class="w-20 border-2 mr-3 break-words"
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