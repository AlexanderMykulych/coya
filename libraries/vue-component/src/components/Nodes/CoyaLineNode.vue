<script lang="ts" setup>
import type { Block, BlockStyle, LinePositioning } from 'coya-core';
import { computed, ref } from 'vue';
import rough from 'roughjs';

const props = defineProps<{
    block: Block
    positioning: LinePositioning
    blockStyle: BlockStyle
}>();
const seed = Math.random() * 1000;
const cssStyle = computed(() => ({
    'stroke': 'black',
    'stroke-width': '2px',
    'fill': 'none',
    'roughness': 2.5,
    seed,
    ...(props.blockStyle?.css ?? {}),
}));
const gEl = ref(null);
const enableStraitLine = ref(true);
const meta = computed(() => props.positioning.meta);
const metaResult = computed(() => props.positioning.meta.results);
const path = computed(() => {
    if (meta.value)
        return meta.value.path;

    if (
        props.positioning.x1 === props.positioning.x2
        || props.positioning.y1 === props.positioning.y2
        || enableStraitLine.value
    )
        return `M${props.positioning.x1},${props.positioning.y1},${props.positioning.x2},${props.positioning.y2}`;

    return `M${props.positioning.x1},${props.positioning.y1} h ${
        props.positioning.x2 - props.positioning.x1
    } L ${props.positioning.x2} ${props.positioning.y2}`;
});

const rc = computed(() => (gEl.value ? rough.svg(gEl.value).generator : null));
const paths = computed(() => {
    if (!rc.value)
        return;

    return rc.value.toPaths(rc.value.path(path.value, cssStyle.value));
});

const arrowPaths = computed(() => {
    if (!rc.value)
        return;

    return rc.value
        .toPaths(
            rc.value
                .path(
                    `M0 ${-meta.value.arrowHeadSize} L${meta.value.arrowHeadSize * 2} 0 L0 ${meta.value.arrowHeadSize}`,
                    cssStyle.value,
                ),
        );
});
</script>

<template>
  <g ref="gEl" :style="cssStyle">
    <path v-for="(pathItem, index) in paths" v-bind="pathItem" :key="index" />
    <path v-for="(pathItem, index) in arrowPaths" v-bind="pathItem" :key="index" :transform="`translate(${metaResult.x2}, ${metaResult.y2}) rotate(${metaResult.ae})`" />

    <Text
      :css="cssStyle"
      :x="positioning.x"
      :y="positioning.y"
      :width="positioning.w"
      :height="positioning.h"
      :label="block.label"
    />
  </g>
</template>
