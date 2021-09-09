<script setup lang="ts">
import { Block, isLineBlockElement, isRectPositioning, Positioning, RectPositioning } from "@coya/core";
import { BlockStyle } from "@coya/core/dist/descriptionTypes";
import { computed } from "vue";

const props = defineProps<{ block: Block, positioning: Positioning, blockStyle?: BlockStyle }>();

const rectPosition = computed(() => <RectPositioning>props.positioning);
const isRect = computed(() => isRectPositioning(props.positioning));
const isCustomSvg = computed(() => !!props.blockStyle?.svg);
const isCustomSvgUrl = computed(() => !!props.blockStyle?.svgUrl);
const svgTag = computed(() => props.blockStyle?.svgTag);
const isLine = computed(() => isLineBlockElement(props.block));

</script>

<template>
    <CoyaLineNode
        v-if="isLine"
        :block="block"
        :block-style="blockStyle"
        :positioning="rectPosition"
    />
    <CoyaImageNode
        v-else-if="isCustomSvgUrl"
        :block="block"
        :block-style="blockStyle"
        :positioning="rectPosition"
    />
    <CoyaSvgNode
        v-else-if="isCustomSvg"
        :block="block"
        :block-style="blockStyle"
        :positioning="rectPosition"
    />
    <CoyaSvgTagNode
        v-else-if="!!svgTag"
        :block="block"
        :block-style="blockStyle"
        :positioning="rectPosition"
    />
    <CoyaRectNode
        v-else-if="isRect"
        :block="block"
        :block-style="blockStyle"
        :positioning="rectPosition"
    />
</template>

<style>
.heavy {
    font: bold 30px sans-serif;
}
</style>