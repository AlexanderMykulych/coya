<script setup lang="ts">
import { LineDebugAction } from "coya-core";

const props = defineProps<{ line: LineDebugAction }>();
const svgInfo = inject("svgInfo");

const lineTextX = computed(() => {
    if (props.line.lineType === "y") {
        return 10;
    }
    return props.line.value;
});
const lineTextY = computed(() => {
    if (props.line.lineType === "y") {
        return props.line.value - (props.line.value > 20 ? 5 : -5);
    }
    return svgInfo?.viewBox?.h - 30 ?? 20;
});

const textStyle = computed(() => ({
    fontSize: "0.8em",
    "dominant-baseline": props.line.lineType === "x" ? "middle" : undefined,
    "text-anchor": props.line.lineType === "x" ? "middle" : undefined,
    display: "inline-block",
    "align-items": "unsafe center",
    "justify-content": "unsafe center",
    "padding-top": `${lineTextY.value}px`,
    "margin-left": `${lineTextX.value}px`
}));
</script>


<template>
    <line
        v-if="line.lineType === 'y'"
        x1="-1000"
        :y1="line.value"
        x2="1000"
        :y2="line.value"
        :stroke="line.color"
    />
    <line v-else :x1="line.value" y1="-1000" :x2="line.value" y2="1000" :stroke="line.color" />
    <textSvg
        :text="line.label"
        :x="lineTextX"
        :y="lineTextX"
    />
</template>