<script lang="ts" setup>
import { ref, reactive } from "vue";
import { useCurrentEditorState } from "../../core/useCurrentEditorState";
import JsonEditor from 'coya-json-editor'
import 'coya-json-editor/dist/style.css'

const {activeNode} = useCurrentEditorState();
const text = ref("");
const val = ref({
    init: {
        position: {
            x: '20',
            y: 'start.y + start.h + 20',
            w: 'start.w',
            h: 'start.h',
        },
    },
});
const jsonEditorConfig = reactive({
    lineNumbers: 'off',
    glyphMargin: false,
    folding: false,
    lineDecorationsWidth: 0,
    lineNumbersMinChars: 0,
    minimap: {
		enabled: false
	},
    wordWrap: "on"
})
</script>

<template>
    <div class="border-2 rounded-md p-3 bg-white grid h-full"  v-if="activeNode">
        <CoyaInput v-model="activeNode.x" label="x" />
        <JsonEditor v-model="activeNode" :config="jsonEditorConfig"/>
        <!-- node:
        <CoyaInput v-model="activeNode.name" label="name" />
        <CoyaInput v-model="activeNode.label" label="label" />
        <CoyaInput v-model="activeNode.y" label="y" />
        <CoyaInput v-model="activeNode.w" label="w" />
        <CoyaInput v-model="activeNode.h" label="h" /> -->
    </div>
</template>