<script lang="ts" setup>
import { Block, BlockStyle, LinePositioning } from 'coya-core';
import { computed, ref } from 'vue';

const props =
    defineProps<{
        block: Block;
        positioning: LinePositioning;
        blockStyle: BlockStyle;
    }>();
const cssStyle = computed(() => ({
    stroke: '#000',
    'stroke-width': '2px',
    'marker-end': 'url(#sequenceflow-end)',
    ...(props.blockStyle?.css ?? {}),
}));
const textEl = ref(null);
const gEl = ref(null);
const lineTextX = computed(() => {
    const width = Math.abs(props.positioning.x2 - props.positioning.x1) / 2;
    const x = Math.min(props.positioning.x1, props.positioning.x2);
    return x + width;
});
const lineTextY = computed(() => {
    const height = Math.abs(props.positioning.y2 - props.positioning.y1) / 2;
    const y = Math.min(props.positioning.y1, props.positioning.y2);
    return y + height + 5;
});
const textStyle = ref({
    fontSize: '4px',
});
const path = computed(() => {
    return `M${props.positioning.x1},${props.positioning.y1},${props.positioning.x2},${props.positioning.y2}`;
});
</script>

<template>
    <g :style="cssStyle">
        <!-- <line
            :id="block.id"
            :x1="positioning.x1"
            :y1="positioning.y1"
            :x2="positioning.x2"
            :y2="positioning.y2"
        /> -->
        <path :d="path" :style="cssStyle" />
        <text
            :style="textStyle"
            ref="textEl"
            :x="lineTextX"
            :y="lineTextY"
            dominant-baseline="middle"
            text-anchor="middle"
            >{{ block.label }}</text
        >
    </g>
</template>
