<script lang="ts" setup>
import * as monaco from 'monaco-editor';
import EditorWorker from 'monaco-editor/esm/vs/editor/editor.worker.js?worker&inline';
import CssWorker from 'monaco-editor/esm/vs/language/css/css.worker.js?worker&inline';
import JsonWorker from 'monaco-editor/esm/vs/language/json/json.worker.js?worker&inline';
import map from 'language-map'
import type { EntityLocation } from 'coya-ts-analyzer';

const props = defineProps<{
  modelValue: string | undefined
  name: string
  ranges: EntityLocation[]
}>();
const emit = defineEmits(['update:modelValue']);

const cmp = ref();
const editor = shallowRef<monaco.editor.IStandaloneCodeEditor>();
const value = useVModel(props, 'modelValue', emit)
const ext = computed(() => `.${props.name.split('.').at(-1)}`)
const language = computed(() => Object.values(map).find(x => x.extensions?.includes(ext.value))?.aceMode)


const decorators = computed(() =>
  props.ranges.map<monaco.editor.IModelDeltaDecoration>(x => ({
    range: new monaco.Range(x.lineStart, x.columnStart, x.lineEnd, x.columnEnd),
    options: {
      className: 'myInlineDecoration',
    }
  }))
)

watch(() => decorators.value, (val) => {
  if (editor.value) {
    const existedDecoratorIds = editor.value?.getModel()?.getAllDecorations().map(x => x.id) ?? []
    editor.value.removeDecorations(existedDecoratorIds)
    editor.value.deltaDecorations([], val)

    if (val[0]) {
      editor.value.revealRangeInCenterIfOutsideViewport(val[0].range);
    }
  }
})

onMounted(() => {
    editor.value = monaco.editor.create(cmp.value, {
        value: value.value,
        language: '',
        contextmenu: false,
        readOnly: false,
    });
    updateLanguage()
    editor.value.onDidChangeModelContent((_) => {
        const editorVal: string | undefined = editor.value?.getValue();
        value.value = editorVal;
    });
});

watch(
  () => value.value,
  val => {
    editor.value?.setValue(val ?? '')
    updateLanguage()
  },
);
watch(() => language.value, () => updateLanguage())

const updateLanguage = () => {
  const model = editor.value?.getModel()
  if (model && language.value) {
    monaco.editor.setModelLanguage(model, language.value)
  }
}

self.MonacoEnvironment = {
  getWorker(_: any, label: string) {
      console.log('test', _, label);
      
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

<style setup>
.myInlineDecoration {
  background: #1887ec6e;
}
</style>