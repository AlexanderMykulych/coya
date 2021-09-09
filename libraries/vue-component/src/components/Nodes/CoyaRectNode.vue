<script lang="ts" setup>
import { Block, BlockStyle, EnterSetting, RectPositioning } from "@coya/core";
import { computed, onMounted, reactive, ref, watch } from "vue";
import { gsap } from "gsap";

const props = defineProps<{ block: Block, positioning: RectPositioning, blockStyle: BlockStyle }>();
const cssStyle = computed(() => props.blockStyle?.css ?? {});
const el = ref(null);
const textEl = ref(null);

const runEnter = (enter: EnterSetting) => {
    gsap.fromTo(el.value, enter.from, enter.to);
};

const linePosX = computed(() => props.positioning.x + props.positioning.width / 2);
const linePosY = computed(() => props.positioning.y + props.positioning.height);

onMounted(() => {
const enter = props.block.enter;
    const pos = props.positioning;
    if (enter && enter.from && enter.to) {
        runEnter(enter);
        gsap.to(el.value, { duration: 0, attr: { x: pos.x, y: pos.y, width: pos.width, height: pos.height } });
        gsap.to(textEl.value, { duration: 0, attr: { x: linePosX.value, y: linePosY.value } });
    }
});
const textStyle = reactive({
    fontSize: "4px",
    display: "flex",
    "align-items": "unsafe center",
    "justify-content": "unsafe center",
    width: computed(() => `${props.positioning.width - 2}px`),
    height: computed(() => `${props.positioning.height - 2}px`),
    "padding-top": computed(() => `${props.positioning.x + 1}px`),
    "margin-left": computed(() => `${props.positioning.y + 1}px`)
});
</script>

<template>
    <g >
        <rect
            :id="block.id"
            stroke="black"
            stroke-width="1"
            fill="none"
            :style="cssStyle"
            ref="el"
        />
        <!-- <text
            :style="textStyle"
            ref="textEl"
            dominant-baseline="middle"
            text-anchor="middle"
        >{{ block.label }}</text> -->
        <foreignObject
            style="overflow: visible; text-align: left;"
            pointer-events="none"
            width="100%"
            height="100%"
            requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
        >
            <div
                xmlns="http://www.w3.org/1999/xhtml"
                :style="textStyle"
            >
                <div style="box-sizing: border-box; text-align: center; ">
                    <div
                        style="display: inline-block; font-family: Helvetica; color: #000000; line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; "
                    >{{ block.label }}</div>
                </div>
            </div>
        </foreignObject>
    </g>
</template>