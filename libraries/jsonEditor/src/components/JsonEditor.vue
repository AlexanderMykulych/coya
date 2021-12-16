<script lang="ts" setup>
import * as monaco from 'monaco-editor';
import editorWorker from 'monaco-editor/esm/vs/editor/editor.worker.js?worker&inline';
import jsonWorker from 'monaco-editor/esm/vs/language/json/json.worker.js?worker&inline';
import cssWorker from 'monaco-editor/esm/vs/language/css/css.worker.js?worker&inline';
import { onMounted, ref, shallowRef, watch, computed } from 'vue';
import { configureEditor } from './configureEditor';
import { useDebouncedRef } from './widgets/useDebounceRef';
import { debounce } from 'debounce';
import { JsonAstRow, WidgetFilter } from './WidgetConfig';

const props = defineProps<{
    modelValue: any;
    config?: any;
    activateDefaultWidget?: boolean;
    widgetFilter?: WidgetFilter;
}>();
const emit = defineEmits([
    'update:modelValue',
    'set-editor',
    'set-editor-config',
]);
const editorEl = ref(null);

self.MonacoEnvironment = {
    getWorker(_, label) {
        if (label === 'json') {
            return new jsonWorker();
        }
        if (label === 'css' || label === 'scss' || label === 'less') {
            return new cssWorker();
        }
        return new editorWorker();
    },
};
const editor = shallowRef<monaco.editor.IStandaloneCodeEditor | null>(null);

const jsonValue = ref(JSON.stringify(props.modelValue, null, '\t'));

const editorConfig = ref(null);
watch(
    () => props.modelValue,
    debounce((val: any) => {
        jsonValue.value = JSON.stringify(val, null, '\t');
    }, 200),
    { deep: true },
);

onMounted(() => {
    if (editorEl.value) {
        editor.value = monaco.editor.create(editorEl.value, {
            value: jsonValue.value,
            language: 'json',
            contextmenu: false,
            readOnly: false,
            ...(props.config || {}),
        });
        if (editor.value) {
            editor.value.onDidChangeModelContent((_) => {
                if (
                    editor.value &&
                    editor.value.getValue() !== jsonValue.value
                ) {
                    emit(
                        'update:modelValue',
                        JSON.parse(editor.value.getValue()),
                    );
                }
            });
            editorConfig.value = configureEditor({
                editor: editor.value,
                widgetConfig: {
                    activateDefaultWidget: props.activateDefaultWidget,
                    widgetFilter: props.widgetFilter,
                },
            });
            emit('set-editor-config', editorConfig.value);
            watch(
                () => jsonValue.value,
                (val) => {
                    if (val && val !== editor.value?.getValue()) {
                        editor.value?.setValue(val);
                    }
                },
            );
        }
        emit('set-editor', editor);
    }
});

</script>

<template>
    <div>
        <div ref="editorEl" class="h-full text-left json-editor" />
        <template v-if="editorConfig?.configs?.length > 0">
            <Teleport v-for="config in editorConfig?.configs" :to="config.sideDom" :key="config.config.id">
                <div class="flex">
                    <slot name="widget"
                        :config="config.config"
                        :valueChange="config.onValueChange"
                    />
                    <wrapperWidget
                        :widgetConfig="config.config"
                        @valueChange="config.onValueChange"
                    />
                </div>
            </Teleport>
            <Teleport v-for="config in editorConfig?.configs" :to="config.zoneDom" :key="config.config.id">
                <slot name="line-widget"
                    :config="config.config"
                    :valueChange="config.onValueChange"
                />
            </Teleport>
        </template>
    </div>
</template>

<style scoped>
.json-editor {
    height: 100%;
    width: 100%;
}
</style>
