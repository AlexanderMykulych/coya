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
import { fastDeepEqual, whatChanged } from 'coya-util';
import { map } from 'cypress/types/bluebird';

const props = defineProps<{
    modelValue: any;
    config?: any;
    activateDefaultWidget?: boolean;
    emitFullObject?: boolean;
    widgetFilter?: WidgetFilter;
}>();
const emit = defineEmits(['changeAttr', 'set-editor', 'set-editor-config', 'update:modelValue']);
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

debouncedWatch(
    () => props.modelValue,
    (val: any) => {
        if (!fastDeepEqual(JSON.parse(jsonValue.value), val)) {
            jsonValue.value = JSON.stringify(val, null, '\t');
        }
    },
    {
        debounce: 200,
        deep: true,
    },
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
                const editorVal: string | undefined = editor.value?.getValue();
                if (editorVal && editorVal !== jsonValue.value) {
                    jsonValue.value = editorVal;
                    const val = JSON.parse(editorVal);
                    const changed = whatChanged(props.modelValue, val, false);
                    if (changed.length > 0) {
                        emit('changeAttr', changed);
                        if (props.emitFullObject) {
                            emit('update:modelValue', val);
                        }
                    }
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
    <div class="h-full">
        <div ref="editorEl" class="h-full text-left json-editor" />
        <template v-if="editorConfig?.configs?.length > 0">
            <Teleport
                v-for="config in editorConfig?.configs"
                :to="config.sideDom"
                :key="config.config.id"
            >
                <div class="flex" v-if="config.config.row">
                    <slot
                        name="widget"
                        :config="config.config"
                        :valueChange="config.onValueChange"
                    />
                    <wrapperWidget
                        :widgetConfig="config.config"
                        @valueChange="config.onValueChange"
                    />
                </div>
            </Teleport>
            <Teleport
                v-for="config in editorConfig?.configs"
                :to="config.zoneDom"
                :key="config.config.id"
            >
                <slot
                    name="line-widget"
                    v-if="!!config.config.row"
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
