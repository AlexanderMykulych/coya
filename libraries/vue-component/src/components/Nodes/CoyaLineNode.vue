<script lang="ts" setup>
import { Block, BlockStyle, LinePositioning} from "@coya/core";
import { computed, onMounted, ref, watch } from "vue";
import { gsap } from "gsap";

const props = defineProps<{ block: Block, positioning: LinePositioning, blockStyle: BlockStyle }>();
const cssStyle = computed(() => props.blockStyle?.css ?? {});
const el = ref(null);
onMounted(() => {
    watch(() => props.positioning.x1, newVal => {
        gsap.to(el.value, { duration: 3, attr: { x1: newVal } });
    }, {
        immediate: true
    });
    watch(() => props.positioning.y1, newVal => {
        gsap.to(el.value, { duration: 3, attr: { y1: newVal } });
    }, {
        immediate: true
    });
    watch(() => props.positioning.x2, newVal => {
        gsap.to(el.value, { duration: 3, attr: { x2: newVal } });
    }, {
        immediate: true
    });
    watch(() => props.positioning.y2, newVal => {
        gsap.to(el.value, { duration: 3, attr: { y2: newVal } });
    }, {
        immediate: true
    });
});
</script>

<template>
    <line
        :id="block.id"
        stroke="#000"
        stroke-width="0.5"
        marker-end="url(#arrowhead)"
        :css="cssStyle"
        ref="el"
    />
</template>