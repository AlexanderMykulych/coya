<script lang="ts" setup>
import * as monaco from 'monaco-editor';
import { onMounted, ref, shallowRef, watch } from 'vue';
import { fastDeepEqual, whatChanged } from 'coya-util';
import EditorWorker from 'monaco-editor/esm/vs/editor/editor.worker.js?worker';
import CssWorker from 'monaco-editor/esm/vs/language/css/css.worker.js?worker&inline';
import JsonWorker from 'monaco-editor/esm/vs/language/json/json.worker.js?worker&inline';
import type { WidgetFilter } from './WidgetConfig';
import { configureEditor } from './configureEditor';

const props = defineProps<{
    modelValue: any
    config?: any
    activateDefaultWidget?: boolean
    emitFullObject?: boolean
    widgetFilter?: WidgetFilter
    rootPath?: string
}>();
const emit = defineEmits(['changeAttr', 'set-editor', 'set-editor-config', 'update:modelValue']);
const editorEl = ref(null);

const editor = shallowRef<monaco.editor.IStandaloneCodeEditor | null>(null);

const isEmptyObject = (obj: any) => obj
    && Object.keys(obj).length === 0
    && Object.getPrototypeOf(obj) === Object.prototype;

const jsonValue = ref(isEmptyObject(props.modelValue) ? '{\n\n}' : JSON.stringify(props.modelValue, null, '\t'));

const editorConfig = ref(null);
self.MonacoEnvironment = {
    getWorker(_: any, label: string) {
        if (label === 'json')
            return new JsonWorker();

        if (label === 'css' || label === 'scss' || label === 'less')
            return new CssWorker();

        return new EditorWorker();
    },
};

debouncedWatch(
    () => props.modelValue,
    (val: any) => {
        if (!fastDeepEqual(JSON.parse(jsonValue.value), val))
            jsonValue.value = JSON.stringify(val, null, '\t');
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
                        if (props.emitFullObject)
                            emit('update:modelValue', val);
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
                    if (val && val !== editor.value?.getValue())
                        editor.value?.setValue(val);
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
        v-for="configItem in editorConfig?.configs"
        :key="configItem.config.id"
        :to="configItem.sideDom"
      >
        <div v-if="configItem.config.row" class="flex">
          <slot
            name="widget"
            :config="configItem.config"
            :valueChange="configItem.onValueChange"
          />
          <wrapperWidget
            :widget-config="configItem.config"
            :root-path="rootPath"
            @valueChange="configItem.onValueChange"
          />
        </div>
      </Teleport>
      <Teleport
        v-for="configItem in editorConfig?.configs"
        :key="configItem.config.id"
        :to="configItem.zoneDom"
      >
        <slot
          v-if="!!configItem.config.row"
          name="line-widget"
          :config="configItem.config"
          :valueChange="configItem.onValueChange"
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
