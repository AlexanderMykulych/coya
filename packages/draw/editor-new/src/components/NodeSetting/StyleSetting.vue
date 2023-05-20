<script lang="ts" setup>
import { reactive } from 'vue';
import JsonEditor from 'coya-json-editor';
import { useCurrentEditorState } from '../../core/useCurrentEditorState';
import { useStyleHelper } from './Style/useStyleHelper';

const { activeNode }
    = useCurrentEditorState();
const jsonEditorConfig = reactive({
    lineNumbers: 'off',
    glyphMargin: false,
    folding: false,
    lineDecorationsWidth: 0,
    lineNumbersMinChars: 0,
    minimap: {
        enabled: false,
    },
    wordWrap: 'on',
});
const { someHelpers, isHelpersOpened } = useStyleHelper();
const widgetFilter = ({ path, isEnd }) => isEnd && someHelpers.value
    ? ({
        heightInLines: isHelpersOpened.value ? 5 : 1,
    })
    : false;

</script>

<template>
  <JsonEditor
    class="flex-auto"
    :model-value="activeNode.css ?? {}"
    :config="jsonEditorConfig"
    :widget-filter="widgetFilter"
    root-path="css"
    emit-full-object
    activate-default-widget
    @update:modelValue="activeNode.css = $event"
  >
    <template #line-widget="{ config }">
      <StyleHelper v-if="config.row.isEnd" />
    </template>
  </JsonEditor>
</template>
