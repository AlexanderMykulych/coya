<script lang="ts" setup>
import * as monaco from 'monaco-editor'
import editorWorker from 'monaco-editor/esm/vs/editor/editor.worker.js?worker&inline'
import jsonWorker from 'monaco-editor/esm/vs/language/json/json.worker.js?worker&inline'
import cssWorker from 'monaco-editor/esm/vs/language/css/css.worker.js?worker&inline'
import { onMounted, ref, shallowRef, watch, computed } from 'vue'
import { configureEditor } from './configureEditor';
import { useDebouncedRef } from './widgets/useDebounceRef'
import { debounce } from "debounce";

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

const jsonValue = ref(JSON.stringify(props.modelValue, null, '\t'));
watch(
    () => props.modelValue,
    debounce((val: any) => {
        jsonValue.value = JSON.stringify(val, null, '\t');
    }, 200),
    { deep: true, }
);

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
            })
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
