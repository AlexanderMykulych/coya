<script lang="ts" setup>
import { Block, BlockStyle, EnterSetting, RectPositioning } from "@coya/core";
import { computed, onMounted, reactive, ref, watch } from "vue";
import { gsap } from "gsap";

const props = defineProps<{ block: Block, positioning: RectPositioning, blockStyle: BlockStyle }>();
const cssStyle = computed(() => ({
    fontSize: "1em",
    color: "black",
    ...props.blockStyle?.css
}) ?? {});
const el = ref(null);
const gEl = ref(null);
const textEl = ref(null);

const runEnter = (enter: EnterSetting) => {
    gsap.fromTo(gEl.value, enter.from, enter.to);
};

const linePosX = computed(() => props.positioning.x + props.positioning.width / 2);
const linePosY = computed(() => props.positioning.y + props.positioning.height);

onMounted(() => {
    const enter = props.block.enter;
    if (enter && enter.from && enter.to) {
        runEnter(enter);
        watch(() => props.positioning, (pos) => {
            gsap.to(el.value, { duration: 0, attr: { x: 0, y: 0, width: pos.width, height: pos.height } });
            gsap.to(gEl.value, { duration: 0, attr: { x: pos.x, y: pos.y, width: pos.width, height: pos.height } });
            gsap.to(textEl.value, { duration: 0, attr: { x: linePosX.value, y: linePosY.value } });
        }, {
            immediate: true,
            deep: true
        })
    }
});

const textStyle = reactive({
    display: "flex",
    "align-items": "unsafe center",
    "justify-content": "unsafe center",
    width: computed(() => `${props.positioning.width - 2}px`),
    height: computed(() => `${props.positioning.height - 2}px`),
    "padding-top": computed(() => `0px`),
    "margin-left": computed(() => `0px`)
});
</script>

<template>
    <svg ref="gEl" :style="cssStyle">
        <rect
            :id="block.id"
            stroke="black"
            stroke-width="1"
            fill="none"
            :style="cssStyle"
            ref="el"
        />
        <foreignObject
            style="overflow: visible; text-align: left;"
            pointer-events="none"
            width="100%"
            height="100%"
            requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
        >
            <div xmlns="http://www.w3.org/1999/xhtml" :style="textStyle">
                <div style="box-sizing: border-box; text-align: center; ">
                    <div
                        style="display: inline-block; font-family: Helvetica; line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; "
                    >
                    <p v-html="block.label"></p>
                    </div>
                </div>
            </div>
        </foreignObject>
    </svg>
</template>