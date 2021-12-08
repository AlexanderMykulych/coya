<script lang="ts" setup>
import { ref, reactive, computed } from 'vue';
import { useCurrentEditorState } from '../../core/useCurrentEditorState';

const { selectedNode, showDebugWindow } = useCurrentEditorState();
const selectDefaultNode = () => (selectedNode.value = '_');
const toggleDebug = () => showDebugWindow.value = !showDebugWindow.value;
</script>

<template>
    <div class="border-2 rounded-md p-3 bg-white h-full flex flex-row">
        <button class="border-2" @click="selectDefaultNode">
            <i-ls:underscore class="pb-1" />
        </button>
        <button class="border-2" @click="toggleDebug">
            <i-codicon:debug class="p-0.6"/>
        </button>
    </div>
</template>
