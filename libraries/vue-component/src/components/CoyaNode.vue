<script setup lang="ts">
import { Block, isLineBlockElement, isRectPositioning, LinePositioning, Positioning, RectPositioning } from "@coya/core";
import { BlockStyle } from "@coya/core/dist/descriptionTypes";
import { computed } from "vue";

const props = defineProps<{ block: Block, positioning: Positioning, blockStyle?: BlockStyle }>();

const rectPosition = computed(() => <RectPositioning>props.positioning);
const isRect = computed(() => isRectPositioning(props.positioning));
const isCustomSvg = computed(() => !!props.blockStyle?.svg);
const isCustomSvgUrl = computed(() => !!props.blockStyle?.svgUrl);
const cssStyle = computed(() => props.blockStyle?.css ?? {});
const svgTag = computed(() => props.blockStyle?.svgTag);
const isLine = computed(() => isLineBlockElement(props.block));
const linePosition = computed(() => <LinePositioning>props.positioning);
</script>

<template>
    <line
        v-if="isLine"
        :x1="linePosition.x1"
        :y1="linePosition.y1"
        :x2="linePosition.x2"
        :y2="linePosition.y2"
        stroke="#000"
        stroke-width="0.5"
        marker-end="url(#arrowhead)"
    />
    <svg
        v-else-if="isCustomSvgUrl"
        :id="block.id"
        :x="rectPosition.x"
        :y="rectPosition.y"
        :width="rectPosition.width"
        :height="rectPosition.height"
        :style="cssStyle"
    >
        <image
            :href="blockStyle.svgUrl"
            :width="rectPosition.width"
            :height="rectPosition.height"
        />
    </svg>
    <svg
        v-else-if="isCustomSvg"
        :id="block.id"
        :x="rectPosition.x"
        :y="rectPosition.y"
        :width="rectPosition.width"
        :height="rectPosition.height"
        v-html="blockStyle.svg"
        :style="cssStyle"
    />
    <svg
        v-else-if="!!svgTag"
        :id="block.id"
        :x="rectPosition.x"
        :y="rectPosition.y"
        :width="rectPosition.width"
        :height="rectPosition.height"
    >
        <component :is="svgTag" :style="cssStyle" />
    </svg>
    <rect
        v-else-if="isRect"
        :id="block.id"
        :x="rectPosition.x"
        :y="rectPosition.y"
        :width="rectPosition.width"
        :height="rectPosition.height"
        stroke="black"
        stroke-width="1"
        fill="none"
        :style="cssStyle"
    />
</template>