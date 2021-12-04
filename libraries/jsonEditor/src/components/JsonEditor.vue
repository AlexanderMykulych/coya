<script lang="ts" setup>
import * as monaco from 'monaco-editor'
import editorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker'
import jsonWorker from 'monaco-editor/esm/vs/language/json/json.worker?worker'
import cssWorker from 'monaco-editor/esm/vs/language/css/css.worker?worker'
import { onMounted, ref, shallowRef, watch, computed } from 'vue'
import { configureEditor } from './configureEditor';

const props = defineProps<{modelValue: any, config?: any}>();
const emit = defineEmits(["update:modelValue"]);
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
const jsonValue = computed(() => JSON.stringify(props.modelValue, null, '\t'));
onMounted(() => {
    if (editorEl.value) {
        editor.value = monaco.editor.create(editorEl.value, {
            value: jsonValue.value,
            language: 'json',
            contextmenu: false,
            readOnly: false,
            ...(props.config || {})
        })
        if (editor.value) {
            editor.value.onDidChangeModelContent(_ => {
                if (editor.value && editor.value.getValue() !== jsonValue.value) {
                    emit("update:modelValue", JSON.parse(editor.value.getValue()))
                }
            });
            configureEditor(editor.value)
            watch(() => jsonValue.value, (val) => {
                if (val && val !== editor.value?.getValue()) {
                    editor.value?.setValue(val);
                }
            }, { deep: true })
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
