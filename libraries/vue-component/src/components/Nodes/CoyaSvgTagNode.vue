<script lang="ts" setup>
import { Block, BlockStyle, RectPositioning } from "@coya/core";
import { computed, onMounted, ref, watch } from "vue";
import { gsap } from "gsap";

const props = defineProps<{ block: Block, positioning: RectPositioning, blockStyle: BlockStyle }>();
const cssStyle = computed(() => props.blockStyle?.css ?? {});
const svgTag = computed(() => props.blockStyle?.svgTag);
const el = ref(null);
const tagEl = ref(null);
const textEl = ref(null);
onMounted(() => {
    watch(() => props.positioning.width, (newVal) => {
        gsap.to(el.value, { duration: 3, attr: { width: newVal } });
    }, {
        immediate: true
    });
    watch(() => props.positioning.x, newVal => {
        gsap.to(el.value, { duration: 3, attr: { x: newVal } });
        gsap.to(textEl.value, { duration: 3, attr: { x: newVal + props.positioning.width / 2 } });
    }, {
        immediate: true
    });
    watch(() => props.positioning.y, newVal => {
        gsap.to(el.value, { duration: 3, attr: { y: newVal } });
        gsap.to(textEl.value, { duration: 3, attr: { y: newVal + props.positioning.height } });
    }, {
        immediate: true
    });
    watch(() => props.positioning.height, newVal => {
        gsap.to(el.value, { duration: 3, attr: { height: newVal } });
    }, {
        immediate: true
    });
});

const textStyle = ref({
    fontSize: "4px"
});
</script>

<template>
    <g>
        <svg :id="block.id" ref="el">
            <component :is="svgTag" :style="cssStyle" ref="tagEl" />
        </svg>
        <text
            :style="textStyle"
            ref="textEl"
            dominant-baseline="hanging"
            text-anchor="middle"
        >{{ block.label }}</text>
    </g>
</template>