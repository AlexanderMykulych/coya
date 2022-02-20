<script lang="ts" setup>
/* eslint-disable */
import type {
    BlockElementDescription,
    LinePositioning,
    Positioning,
    RectPositioning,
} from 'coya-core';
import {
    BlockElementType,
} from 'coya-core';
import { computed } from 'vue';
import { EditorMode, PinType } from '../../core/types';
import { useCurrentEditorState } from '../../core/useCurrentEditorState';

const props = defineProps<{
    position: Positioning
    block: BlockElementDescription
    hidePins: boolean
}>();
const emit = defineEmits(['pinPress']);
const padding = 10;
const pinW = computed(() => 8 / zoomState.value.scale);
const pinCW = computed(() => pinW.value / 2);
const strokeWidth = computed(() => pinW.value * 0.1)
const { state, activeNode, zoomState } = useCurrentEditorState();

const preparedPosition = computed(() => {
    switch (props.block.type) {
        case BlockElementType.Line:
            const linePos = props.position as LinePositioning;
            const minX = Math.min(Number(linePos.x1), Number(linePos.x2));
            const minY = Math.min(Number(linePos.y1), Number(linePos.y2));
            const maxX = Math.max(Number(linePos.x1), Number(linePos.x2));
            const maxY = Math.max(Number(linePos.y1), Number(linePos.y2));
            return {
                x: minX - padding,
                y: minY - padding,
                w: maxX - minX + padding * 2,
                h: maxY - minY + padding * 2,
            };
        case BlockElementType.Rect:
        default:
            const rectPos = props.position as RectPositioning;
            return {
                x: Number(rectPos.x) - padding,
                y: Number(rectPos.y) - padding,
                w: Number(rectPos.w) + padding * 2,
                h: Number(rectPos.h) + padding * 2,
            };
    }
});
const pins = computed(() => [
    {
        x: preparedPosition.value.x - pinCW.value,
        y: preparedPosition.value.y - pinCW.value,
        class: 'cursor-nwse-resize',
        type: PinType.TopLeft,
    },
    {
        x: preparedPosition.value.x - pinCW.value,
        y: preparedPosition.value.y + preparedPosition.value.h - pinCW.value,
        class: 'cursor-nesw-resize',
        type: PinType.BottomLeft,
    },
    {
        x: preparedPosition.value.x + preparedPosition.value.w - pinCW.value,
        y: preparedPosition.value.y + preparedPosition.value.h - pinCW.value,
        class: 'cursor-nwse-resize',
        type: PinType.BottomRight,
    },
    {
        x: preparedPosition.value.x + preparedPosition.value.w - pinCW.value,
        y: preparedPosition.value.y - pinCW.value,
        class: 'cursor-nesw-resize',
        type: PinType.TopRight,
    },
    {
        x: preparedPosition.value.x + preparedPosition.value.w / 2 - pinCW.value,
        y: preparedPosition.value.y - pinCW.value,
        class: 'cursor-ns-resize',
        type: PinType.Top,
    },
    {
        x: preparedPosition.value.x + preparedPosition.value.w / 2 - pinCW.value,
        y: preparedPosition.value.y + preparedPosition.value.h - pinCW.value,
        class: 'cursor-ns-resize',
        type: PinType.Bottom,
    },
    {
        x: preparedPosition.value.x - pinCW.value,
        y: preparedPosition.value.y + preparedPosition.value.h / 2 - pinCW.value,
        class: 'cursor-ew-resize',
        type: PinType.Left,
    },
    {
        x: preparedPosition.value.x + preparedPosition.value.w - pinCW.value,
        y: preparedPosition.value.y + preparedPosition.value.h / 2 - pinCW.value,
        class: 'cursor-ew-resize',
        type: PinType.Right,
    },
]);
const clickPin = (pinType: PinType) => emit('pinPress', pinType);
</script>

<template>
  <rect
    :x="preparedPosition.x"
    :y="preparedPosition.y"
    :width="preparedPosition.w"
    :height="preparedPosition.h"
    fill="#00d0ff4a"
    stroke="black"
    stroke-dasharray="5 5"
  />
  <rect
    v-for="(pin, index) in pins"
    v-if="!hidePins"
    :key="index"
    :x="pin.x"
    :y="pin.y"
    :width="pinW"
    :height="pinW"
    :stroke-width="strokeWidth"
    :class="pin.class"
    fill="white"
    stroke="black"
    @mousedown="clickPin(pin.type)"
  />
</template>

<style>
.cursor-nwse-resize {
    cursor: nwse-resize;
}
.cursor-nesw-resize {
    cursor: nesw-resize;
}
.cursor-ew-resize {
    cursor: ew-resize;
}
.cursor-ns-resize {
    cursor: ns-resize;
}
</style>
