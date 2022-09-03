<script lang="ts" setup>
import * as monaco from 'monaco-editor';
import EditorWorker from 'monaco-editor/esm/vs/editor/editor.worker.js?worker&inline';
import CssWorker from 'monaco-editor/esm/vs/language/css/css.worker.js?worker&inline';
import JsonWorker from 'monaco-editor/esm/vs/language/json/json.worker.js?worker&inline';

defineProps<{ modelValue: string | undefined }>();
const emit = defineEmits(['update:modelValue']);

const cmp = ref();
const editor = shallowRef();
const value = ref<string | undefined>('');

onMounted(() => {
    editor.value = monaco.editor.create(cmp.value, {
        value: value.value,
        language: '',
        contextmenu: false,
        readOnly: false,
    });
    editor.value.onDidChangeModelContent((_) => {
        const editorVal: string | undefined = editor.value?.getValue();
        value.value = editorVal;
    });
});

watch(
    () => value.value,
    val => emit('update:modelValue', val),
);

self.MonacoEnvironment = {
    getWorker(_: any, label: string) {
        if (label === 'json')
            return new JsonWorker();

        if (label === 'css' || label === 'scss' || label === 'less')
            return new CssWorker();

        return new EditorWorker();
    },
};
</script>

<template>
  <div ref="cmp" class="text-left w-full h-full" />
</template>
