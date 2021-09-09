<script lang="ts" setup>
import { Block, BlockStyle, LinePositioning } from "@coya/core";
import { computed, onMounted, ref, watch } from "vue";
import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);

const props = defineProps<{ block: Block, positioning: LinePositioning, blockStyle: BlockStyle }>();
const cssStyle = computed(() => props.blockStyle?.css ?? {});
const el = ref(null);
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
onMounted(() => {
    // watch(() => props.positioning.x1, newVal => {
    //     gsap.to(el.value, { duration: 3, attr: { x1: newVal } });
    // }, {
    //     immediate: true
    // });
    // watch(() => props.positioning.y1, newVal => {
    //     gsap.to(el.value, { duration: 3, attr: { y1: newVal } });
    // }, {
    //     immediate: true
    // });
    watch(() => props.positioning.x2, newVal => {
        gsap
            .fromTo(el.value,
                { drawSVG: "0%", markerEnd: "" },
                {
                    duration: 2,
                    drawSVG: "100%",
                    ease: "Power2.easOut",
                    onComplete: (...args) => {
                        el.value?.setAttribute("marker-end", "url(#arrowhead)");
                    }
                }
            );
    }, {
        immediate: true
    });
    // watch(() => props.positioning.y2, newVal => {
    //     gsap.to(el.value, { duration: 3, attr: { y2: newVal } });
    // }, {
    //     immediate: true
    // });
    // watch(() => lineTextX.value, newVal => {
    //     gsap.to(textEl.value, { duration: 3, attr: { x: newVal } });
    // }, {
    //     immediate: true
    // });
    // watch(() => lineTextY.value, newVal => {
    //     gsap.to(textEl.value, { duration: 3, attr: { y: newVal } });
    // }, {
    //     immediate: true
    // });
});
const textStyle = ref({
    fontSize: "4px"
});
</script>

<template>
    <g>
        <line
            :id="block.id"
            :x1="positioning.x1"
            :y1="positioning.y1"
            :x2="positioning.x2"
            :y2="positioning.y2"
            stroke="#000"
            stroke-width="0.5"
            :css="cssStyle"
            ref="el"
        />

        <text
            :style="textStyle"
            ref="textEl"
            :x="lineTextX"
            :y="lineTextY"
            dominant-baseline="middle"
            text-anchor="middle"
        >{{ block.label }}</text>
    </g>
</template>