<script lang="ts" setup>
import { Block, BlockStyle, RectPositioning } from "@coya/core";
import { computed, onMounted, ref, watch } from "vue";
import { gsap } from "gsap";

const props = defineProps<{ block: Block, positioning: RectPositioning, blockStyle: BlockStyle }>();
const cssStyle = computed(() => props.blockStyle?.css ?? {});
const svgTag = computed(() => props.blockStyle?.svgTag);
const el = ref(null);
const tagEl = ref(null);
onMounted(() => {
    watch(() => props.positioning.width, (newVal) => {
        gsap.to(el.value, { duration: 3, attr: { width: newVal } });
    }, {
        immediate: true
    });
    watch(() => props.positioning.x, newVal => {
        gsap.to(el.value, { duration: 3, attr: { x: newVal } });
    }, {
        immediate: true
    });
    watch(() => props.positioning.y, newVal => {
        gsap.to(el.value, { duration: 3, attr: { y: newVal } });
    }, {
        immediate: true
    });
    watch(() => props.positioning.height, newVal => {
        gsap.to(el.value, { duration: 3, attr: { height: newVal } });
    }, {
        immediate: true
    });
});
</script>

<template>
    <svg :id="block.id" ref="el">
        <component :is="svgTag" :style="cssStyle" ref="tagEl" />
    </svg>
</template>