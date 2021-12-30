<script lang="ts" setup>
import { ref, reactive, computed } from 'vue';
import { useCurrentEditorState } from '../../core/useCurrentEditorState';
import JsonEditor from 'coya-json-editor';
import { predefinedSetting } from './../PredefinedSetting/PredefinedSetting';
import { isNotNullOrUndefined } from 'coya-core';
import { deepAssign, ChangedItem, setValueByPath } from 'coya-util';

const { activeNode, activeBlockStyleSetting, architecture, selectedNode } =
    useCurrentEditorState();
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
    const block =  {
        label: "Block",
        id: "test"
    };
    
    const blockStyle = activeBlockStyleSetting.value;
    // const blockStyle = {
        
    // };
    const style = !!blockStyle?.code
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
                blockStyle: deepAssign({}, style, predef.config,),
                positioning,
            },
        };
    });
});
const onAttrChange = (change: ChangedItem) => {
    setValueByPath(activeNode, change.val, change.fullPath);
};
</script>

<template>
    <div v-if="activeNode" class="border-2 rounded-md p-3 bg-white grid h-full">
        <JsonEditor
            :modelValue="activeNode"
            @changeAttr="onAttrChange"
            :config="jsonEditorConfig"
            activateDefaultWidget
            :widgetFilter="widgetFilter"
        >
            <template #line-widget="{ config }">
                <CssWidget :preparedPredefs="preparedPredefs" :config="config">
                    <template #preview="slotData">
                        <slot name="preview" v-bind="slotData" />
                    </template>
                </CssWidget>
            </template>
        </JsonEditor>
    </div>
</template>
