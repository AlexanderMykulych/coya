<script lang="ts" setup>
import * as monaco from 'monaco-editor'
import editorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker'
import jsonWorker from 'monaco-editor/esm/vs/language/json/json.worker?worker'
import { onMounted, ref, shallowRef } from 'vue'
import { configureEditor } from './configureEditor';

const props = defineProps<{modelValue: any}>();

const editorEl = ref(null);

self.MonacoEnvironment = {
    getWorker(_, label) {
        if (label === 'json') {
            return new jsonWorker()
        }
        if (label === 'css' || label === 'scss' || label === 'less') {
            return new cssWorker()
        }
        return new editorWorker()
    }
}
const editor = shallowRef<monaco.editor.IStandaloneCodeEditor | null>(null)
onMounted(() => {
    if (editorEl.value) {
        editor.value = monaco.editor.create(editorEl.value, {
            value: JSON.stringify(props.modelValue, null, '\t'),
            language: 'json',
            contextmenu: false,
            readOnly: false,
        })
        if (editor.value) {
            configureEditor(editor.value)
        }
    }
})


</script>

<template>
    <div ref="editorEl" class="h-full text-left json-editor" />
</template>

<style scoped>
.json-editor {
    height: 100%;
    width: 100%;
}
</style>
