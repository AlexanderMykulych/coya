<script lang="ts" setup>
import { Block, BlockStyle, LinePositioning } from 'coya-core';
import { computed, ref } from 'vue';
import rough from 'roughjs';

const props = defineProps<{
    block: Block;
    positioning: LinePositioning;
    blockStyle: BlockStyle;
}>();
const cssStyle = computed(() => ({
    stroke: 'black',
    'stroke-width': '2px',
    'marker-end': 'url(#sequenceflow-end)',
    fill: 'none',
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
const enableStraitLine = ref(true);
const path = computed(() => {
    if (
        props.positioning.x1 === props.positioning.x2 ||
        props.positioning.y1 === props.positioning.y2 ||
        enableStraitLine.value
    ) {
        return `M${props.positioning.x1},${props.positioning.y1},${props.positioning.x2},${props.positioning.y2}`;
    }
    return `M${props.positioning.x1},${props.positioning.y1} h ${
        props.positioning.x2 - props.positioning.x1
    } L ${props.positioning.x2} ${props.positioning.y2}`;
});

const rc = computed(() => (gEl.value ? rough.svg(gEl.value) : null));
const line = ref(null);
const updateElementPosition = () => {
    if (!rc.value) {
        return;
    }
    try {
        if (line.value) {
            gEl.value!.removeChild(line.value);
        }
    } catch (e) {
        console.warn(e);
    }
    try {
        line.value = rc.value.path(path.value, cssStyle.value);
    } catch (e) {
        console.warn(e);
    } finally {
        gEl.value.insertBefore(line.value, gEl.value.firstElementChild);
    }
};

onMounted(() => {
    watch(
        () => path.value,
        (val) => {
            updateElementPosition();
        },
        { immediate: true },
    );
});
</script>

<template>
    <g :style="cssStyle" ref="gEl">
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
