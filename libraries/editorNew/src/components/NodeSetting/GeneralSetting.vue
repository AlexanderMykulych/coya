<script lang="ts" setup>
import { computed, reactive } from 'vue';
import JsonEditor from 'coya-json-editor';
import type { ChangedItem } from 'coya-util';
import {
    deepAssign,
    deepCopy,
    groupBy,
    setValueByPath,
} from 'coya-util';
import { useCurrentEditorState } from '../../core/useCurrentEditorState';
import { predefinedSetting } from './../PredefinedSetting/PredefinedSetting';

const { activeNode, activeBlockStyleSetting }
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

const widgetFilter = ({ path }) => {
    return path === 'css'
        ? {
            heightInLines: 3,
        }
        : false;
};

const preparedPredefs = computed(() => {
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
const onAttrsChange = (changes: ChangedItem[]) => {
    Object.entries(groupBy(changes, x => x.parents[0])).forEach(
        ([key, items]) => onAttrChange(items, key),
    );
};
</script>

<template>
  <JsonEditor
    class="flex-auto"
    :model-value="{...activeNode, css: undefined}"
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
</template>
