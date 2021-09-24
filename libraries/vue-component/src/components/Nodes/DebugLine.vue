<script setup lang="ts">
import { LineDebugAction } from "@coya/core";

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
    return svgInfo?.viewBox?.height - 30 ?? 20;
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
    <foreignObject
        style="overflow: visible; text-align: left;"
        pointer-events="none"
        width="100%"
        height="100%"
        requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
    >
        <div xmlns="http://www.w3.org/1999/xhtml" :style="textStyle">
            <div style="box-sizing: border-box; text-align: center; display: inline-block; background-color: yellow;">
                <div
                    style="display: inline-block; font-family: Helvetica; line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; "
                >
                    <p>{{line.label}}</p>
                </div>
            </div>
        </div>
    </foreignObject>
</template>