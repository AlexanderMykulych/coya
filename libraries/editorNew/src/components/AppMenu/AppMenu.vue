<script lang="ts" setup>
import { ref, reactive, computed } from 'vue';
import { useCurrentEditorState } from '../../core/useCurrentEditorState';
import {EditorMode} from "../../core/types";

const { selectedNode, showDebugWindow, state } = useCurrentEditorState();
const selectDefaultNode = () => (selectedNode.value = '_');
const selectDefaultArrowNode = () => (selectedNode.value = '->');
const toggleDebug = () => (showDebugWindow.value = !showDebugWindow.value);
</script>

<template>
    <div class="border-2 rounded-md p-3 bg-white h-full flex flex-row justify-between">
        <div>
            <i-mdi:arrow-top-left-thin v-if="state.mode === EditorMode.Arrow"/>
            <i-tabler:hand-finger v-else/>
        </div>
        <div>
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
</template>
