<script setup lang="ts">
import { Block, BlockStyle, isLineBlockElement, isRectPositioning, Positioning, RectPositioning } from "coya-core";
import { computed } from "vue";
import {getCurrentEditor} from "coya-editor-new";
import coyaRectNode from "./Nodes/CoyaRectNode.vue";
import coyaLineNode from "./Nodes/CoyaLineNode.vue";

const props = defineProps<{ block: Block, positioning: Positioning, blockStyle?: BlockStyle, debug: boolean }>();

const rectPosition = computed(() => <RectPositioning>props.positioning);
const isRect = computed(() => isRectPositioning(props.positioning));
const isCustomSvg = computed(() => !!props.blockStyle?.svg);
const isCustomSvgUrl = computed(() => !!props.blockStyle?.svgUrl);
const svgTag = computed(() => props.blockStyle?.svgTag);
const isLine = computed(() => isLineBlockElement(props.block));
const blockDebug = computed(() => props.block.debug);

const editor = getCurrentEditor();
const CoyaRectNode = editor.wrap(coyaRectNode);
const CoyaLineNode = editor.wrap(coyaLineNode);
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
    <DebugNode
        v-if="!!blockDebug"
        :value="blockDebug"
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