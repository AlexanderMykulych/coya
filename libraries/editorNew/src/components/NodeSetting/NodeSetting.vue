<script lang="ts" setup>
import { ref, reactive, computed } from 'vue';
import { useCurrentEditorState } from '../../core/useCurrentEditorState';
import JsonEditor from 'coya-json-editor';
import { predefinedSetting } from './../PredefinedSetting/PredefinedSetting';
import { deepAssign, isNotNullOrUndefined } from 'coya-core';

const { activeNode, activeBlockStyleSetting, architecture, selectedNode } =
    useCurrentEditorState();
const text = ref('');
const preparedValue = computed({
    get() {
        return activeNode;
    },
    set(val: any) {
        Object.keys(val).forEach((key) => {
            if (activeNode[key] !== val[key]) {
                activeNode[key] = val[key];
            }
        });
    },
});
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
    const block = architecture.blocks?.find((x) => x.id === selectedNode.value);
    return predefinedSetting.map((predef) => ({
        ...predef,
        item: {
            block: {
                ...block,
                id: block ? `${block.id}_prev` : "",
            },
            blockStyle: deepAssign(
                {},
                activeBlockStyleSetting.value,
                predef.config,
            ),
            positioning: preparePositioning(
                architecture.style?.positioning?.find(
                    (x) => x.blockId === selectedNode.value,
                )?.position,
            ),
        },
    }));
});
</script>

<template>
    <div v-if="activeNode" class="border-2 rounded-md p-3 bg-white grid h-full">
        <JsonEditor
            v-model="preparedValue"
            :config="jsonEditorConfig"
            activateDefaultWidget
            :widgetFilter="widgetFilter"
        >
            <template #line-widget="{ config }">
                <CssWidget :preparedPredefs="preparedPredefs" :config="config">
                    <template #preview="slotData">
                        <slot
                            name="preview"
                            v-bind="slotData"
                        />
                    </template>
                </CssWidget>
            </template>
        </JsonEditor>
    </div>
</template>
