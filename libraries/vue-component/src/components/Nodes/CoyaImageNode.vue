<script lang="ts" setup>
import { Block, BlockStyle, EnterSetting, RectPositioning } from "coya-core";
import { computed, onMounted, ref, watch } from "vue";
import { gsap } from "gsap";

const props = defineProps<{ block: Block, positioning: RectPositioning, blockStyle: BlockStyle }>();
const cssStyle = computed(() => props.blockStyle?.css ?? {});
const el = ref(null);
const tagEl = ref(null);
const textEl = ref(null);

const runEnter = (enter: EnterSetting) => {
    gsap.fromTo(el.value, enter.from, enter.to);
};

const linePosX = computed(() => props.positioning.x + props.positioning.w / 2);
const linePosY = computed(() => props.positioning.y + props.positioning.h);

onMounted(() => {
    const enter = props.block.enter;
    const pos = props.positioning;
    if (enter && enter.from && enter.to) {
        runEnter(enter);
        gsap.to(el.value, { duration: 0, attr: { x: pos.x, y: pos.y, width: pos.w, height: pos.h } });
        gsap.to(tagEl.value, { duration: 0, attr: { width: pos.w, height: pos.h } });
        gsap.to(textEl.value, { duration: 0, attr: { x: linePosX.value, y: linePosY.value } });
    }
    watch(() => props.positioning.x, newVal => {
        gsap.to(el.value, { duration: 3, attr: { x: newVal } });
        gsap.to(textEl.value, { duration: 3, attr: { x: newVal + props.positioning.w / 2 } });
    });
    watch(() => props.positioning.y, newVal => {
        gsap.to(el.value, { duration: 3, attr: { y: newVal } });
        gsap.to(textEl.value, { duration: 3, attr: { y: newVal + props.positioning.h } });
    });
    watch(() => props.positioning.w, (newVal) => {
        gsap.to(el.value, { duration: 3, attr: { width: newVal } });
        gsap.to(tagEl.value, { duration: 3, attr: { width: newVal } });
    });
    watch(() => props.positioning.h, newVal => {
        gsap.to(el.value, { duration: 3, attr: { height: newVal } });
        gsap.to(tagEl.value, { duration: 3, attr: { height: newVal } });
    });
});

const textStyle = ref({
    fontSize: "4px"
});
</script>

<template>
    <g>
        <svg :id="block.id" :style="cssStyle" ref="el">
            <image :href="blockStyle.svgUrl" ref="tagEl" />
        </svg>
        <text
            :style="textStyle"
            ref="textEl"
            dominant-baseline="hanging"
            text-anchor="middle"
        >{{ block.label }}</text>
    </g>
</template>