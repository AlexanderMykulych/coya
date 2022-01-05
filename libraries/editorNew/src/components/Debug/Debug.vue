<script lang="ts" setup>
import { ref, reactive, computed } from 'vue';
import { useCurrentEditorState } from '../../core/useCurrentEditorState';
import JsonEditor from 'coya-json-editor';
import 'coya-json-editor/dist/style.css';

const {
    state,
    mouseState,
    zoomState,
    activeConfig,
    initialConfig,
    architecture,
    history,
} = useCurrentEditorState();
const jsonEditorConfig = reactive({
    glyphMargin: false,
    folding: true,
    lineDecorationsWidth: 0,
    lineNumbersMinChars: 0,
    minimap: {
        enabled: false,
    },
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
        case 'arch':
            return architecture;
        case 'history':
            return history.value;
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
            <i-grommet-icons:document-config @click="tab = 'arch'" />
            <i-ic:outline-history @click="tab = 'history'" />
        </div>
        <JsonEditor :config="jsonEditorConfig" :modelValue="obj" />
    </div>
</template>
