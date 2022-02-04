<script lang="ts" setup>
import { computed, reactive, ref } from 'vue';
import JsonEditor from 'coya-json-editor';
import type { ChangedItem } from 'coya-util';
import {
    deepAssign,
    deepCopy,
    groupBy,
    isNotNullOrUndefined,
    setValueByPath,
} from 'coya-util';
import { useCurrentEditorState } from '../../core/useCurrentEditorState';
import { predefinedSetting } from './../PredefinedSetting/PredefinedSetting';

const { activeNode, activeBlockStyleSetting, architecture, selectedNode }
    = useCurrentEditorState();
const text = ref('');
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

const widgetFilter = ({ path }) => {
    return path === 'css'
        ? {
            heightInLines: 3,
        }
        : false;
};
const preparePositioning = (pos) => {
    if (isNotNullOrUndefined(pos?.x)) {
        const finalH = pos.h / 1.5;
        return {
            x: 0,
            y: 0,
            h: finalH,
            w: (finalH * pos.w) / pos.h,
        };
    }
};
const preparedPredefs = computed(() => {
    // const block = architecture.blocks?.find((x) => x.id === selectedNode.value);
    const positioning = {
        x: 0,
        y: 0,
        w: 300,
        h: 150,
    };
    const block = {
        label: 'Block',
        id: 'test',
    };

    const blockStyle = activeBlockStyleSetting.value;
    // const blockStyle = {

    // };
    const style = blockStyle?.code
        ? {
            ...blockStyle,
            code: undefined,
        }
        : blockStyle;
    return predefinedSetting.map((predef) => {
        return {
            ...predef,
            item: {
                block: {
                    ...block,
                    id: block ? `${block.id}_prev` : '',
                },
                blockStyle: deepAssign({}, style, predef.config),
                positioning,
            },
        };
    });
});
const onAttrsChange = (changes: ChangedItem[]) => {
    Object.entries(groupBy(changes, x => x.parents[0])).forEach(
        ([key, items]) => onAttrChange(items, key),
    );
};
const onAttrChange = (changes: ChangedItem[], key: string) => {
    const oldVal = activeNode[key];
    if (
        typeof oldVal === 'object'
        && !Array.isArray(oldVal)
        && oldVal !== null
    ) {
        const newVal = deepCopy(oldVal);
        if (changes.length === 1 && changes[0].parents?.length === 1) {
            activeNode[key] = changes[0].val;
            return;
        }
        changes.forEach((change) => {
            const path = change.parents.slice(1).join('.');
            setValueByPath(newVal, change.val, path);
        });
        activeNode[key] = newVal;
    }
    else if (changes.length === 1) {
        activeNode[key] = changes[0].val;
    }
};
</script>

<template>
  <div
    v-if="activeNode"
    class="border-2 rounded-md p-3 bg-white h-full flex flex-col"
  >
    <NodeActionBar />
    <JsonEditor
      class="flex-auto"
      :model-value="activeNode"
      :config="jsonEditorConfig"
      activate-default-widget
      :widget-filter="widgetFilter"
      @changeAttr="onAttrsChange"
    >
      <template #line-widget="{ config }">
        <CssWidget
          v-if="config.path === 'css'"
          :prepared-predefs="preparedPredefs"
          :config="config"
        >
          <template #preview="slotData">
            <slot name="preview" v-bind="slotData" />
          </template>
        </CssWidget>
      </template>
    </JsonEditor>
  </div>
</template>
