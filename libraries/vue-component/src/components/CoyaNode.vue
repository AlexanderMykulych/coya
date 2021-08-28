<script setup lang="ts">
import { Block, isRectPositioning, RectPositioning } from "@coya/core";
import { BlockStyle } from "@coya/core/dist/descriptionTypes";
import { computed } from "vue";

const props = defineProps<{ block: Block, positioning: RectPositioning, blockStyle?: BlockStyle }>();

const rectPosition = computed(() => <RectPositioning>props.positioning);
const isRect = computed(() => isRectPositioning(props.positioning));
const isCustomSvg = computed(() => props.blockStyle?.svg);
const isCustomSvgUrl = computed(() => props.blockStyle?.svgUrl);

</script>

<template>
    <svg
        v-if="isCustomSvgUrl"
        :x="rectPosition.x.value"
        :y="rectPosition.y.value"
        :width="rectPosition.width.value"
        :height="rectPosition.height.value"
    >
        <image
            :href="blockStyle.svgUrl"
            :width="rectPosition.width.value"
            :height="rectPosition.height.value"
        />
    </svg>
    <svg
        v-else-if="isCustomSvg"
        :x="rectPosition.x.value"
        :y="rectPosition.y.value"
        :width="rectPosition.width.value"
        :height="rectPosition.height.value"
        v-html="blockStyle.svg"
    />
    <rect
        v-else-if="isRect"
        :id="positioning.blockId"
        :x="rectPosition.x.value"
        :y="rectPosition.y.value"
        :width="rectPosition.width.value"
        :height="rectPosition.height.value"
        stroke="black"
        stroke-width="1"
        fill="none"
    />
</template>