<script lang="ts" setup>
/* eslint-disable */
import * as monaco from 'monaco-editor';
import { onMounted, ref, shallowRef, watch } from 'vue';
import { fastDeepEqual, whatChanged } from 'coya-util';
import { configureEditor } from './configureEditor';
import type { WidgetFilter } from './WidgetConfig';

const props = defineProps<{
    modelValue: any
    config?: any
    activateDefaultWidget?: boolean
    emitFullObject?: boolean
    widgetFilter?: WidgetFilter
}>();
const emit = defineEmits(['changeAttr', 'set-editor', 'set-editor-config', 'update:modelValue']);
const editorEl = ref(null);

const editor = shallowRef<monaco.editor.IStandaloneCodeEditor | null>(null);

const jsonValue = ref(JSON.stringify(props.modelValue, null, '\t'));

const editorConfig = ref(null);

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
        v-for="config in editorConfig?.configs"
        :key="config.config.id"
        :to="config.sideDom"
      >
        <div v-if="config.config.row" class="flex">
          <slot
            name="widget"
            :config="config.config"
            :valueChange="config.onValueChange"
          />
          <wrapperWidget
            :widget-config="config.config"
            @valueChange="config.onValueChange"
          />
        </div>
      </Teleport>
      <Teleport
        v-for="config in editorConfig?.configs"
        :key="config.config.id"
        :to="config.zoneDom"
      >
        <slot
          v-if="!!config.config.row"
          name="line-widget"
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
