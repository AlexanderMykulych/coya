<script lang="ts" setup>
import { ref, reactive, computed } from 'vue';
import { useCurrentEditorState } from '../../core/useCurrentEditorState';
import JsonEditor from 'coya-json-editor';
import 'coya-json-editor/dist/style.css';

const { state, mouseState, zoomState, activeConfig, initialConfig } =
    useCurrentEditorState();
const jsonEditorConfig = reactive({
    lineNumbers: 'off',
    glyphMargin: false,
    folding: false,
    lineDecorationsWidth: 0,
    lineNumbersMinChars: 0,
    minimap: {
        enabled: false,
    }
});
const tab = ref<string | null>(null);
const obj = computed(() => {
    switch (tab.value) {
        case 'mouse':
            return mouseState;
        case 'zoom':
            return zoomState.value;
        case 'config':
            return activeConfig.value;
        case 'initConfig':
            return initialConfig.value;
        case 'block':
        default:
            return state;
    }
});
</script>

<template>
    <div class="border-2 rounded-md p-3 bg-white h-full flex flex-col">
        <div class="flex flex-row">
            <i-ph:rectangle-bold class="mr-2" @click="tab = 'block'" />
            <i-ic:baseline-mouse @click="tab = 'mouse'" />
            <i-icon-park-outline:zoom @click="tab = 'zoom'" />
            <i-mdi:family-tree @click="tab = 'config'" />
            <i-grommet-icons:document-config @click="tab = 'initConfig'" />
        </div>
        <JsonEditor :config="jsonEditorConfig" :modelValue="obj" />
    </div>
</template>
