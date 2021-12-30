<script setup lang="ts">
import { Block, BlockStyle, isLineBlockElement, isRectPositioning, Positioning, RectPositioning } from "coya-core";
import { computed, Ref } from "vue";
import {getCurrentEditor} from "coya-editor-new";
import { deepAssign, fastDeepEqual } from "coya-util";
import coyaRectNode from "./Nodes/CoyaRectNode.vue";
import coyaLineNode from "./Nodes/CoyaLineNode.vue";
import { deepEqual } from "assert";

const props = defineProps<{
    block: Block,
    positioning: Positioning,
    blockStyle?: BlockStyle,
    debug?: boolean,
    defaultArrowStyle?: BlockStyle,
    defaultRectStyle?: BlockStyle,
    disableWrap?: boolean,
}>();

const rectPosition = computed(() => <RectPositioning>props.positioning);
const isRect = eagerComputed(() => isRectPositioning(props.positioning));
const isCustomSvg = eagerComputed(() => !!props.blockStyle?.svg);
const isCustomSvgUrl = eagerComputed(() => !!props.blockStyle?.svgUrl);
const svgTag = computed(() => props.blockStyle?.svgTag);
const isLine = eagerComputed(() => isLineBlockElement(props.block));
const blockDebug = computed(() => props.block.debug);

const editor = getCurrentEditor();
const CoyaRectNode = props.disableWrap ? coyaRectNode : editor.wrap(coyaRectNode);
const CoyaLineNode = props.disableWrap ? coyaLineNode : editor.wrap(coyaLineNode);

const calculateStyle = () => {
    if (isRect.value) {
        return deepAssign({}, props.defaultRectStyle || {}, props.blockStyle || {});
    }
    if (isLine.value) {
        return deepAssign({}, props.defaultArrowStyle || {}, props.blockStyle || {});
    }
    return props.blockStyle;
};

const preparedStyle = ref(calculateStyle());
watch(() => [isRect.value, props.blockStyle, props.defaultRectStyle], (val, oldVal) => {
    if (!fastDeepEqual(val, oldVal)) {
        preparedStyle.value = calculateStyle();
    }
});
</script>

<template>
    <CoyaLineNode
        v-if="isLine"
        :block="block"
        :block-style="preparedStyle"
        :positioning="rectPosition"
    />
    <CoyaImageNode
        v-else-if="isCustomSvgUrl"
        :block="block"
        :block-style="preparedStyle"
        :positioning="rectPosition"
    />
    <CoyaSvgNode
        v-else-if="isCustomSvg"
        :block="block"
        :block-style="preparedStyle"
        :positioning="rectPosition"
    />
    <CoyaSvgTagNode
        v-else-if="!!svgTag"
        :block="block"
        :block-style="preparedStyle"
        :positioning="rectPosition"
    />
    <CoyaRectNode
        v-else-if="isRect"
        :block="block"
        :block-style="preparedStyle"
        :positioning="rectPosition"
    />
    <DebugNode
        v-if="!!blockDebug"
        :value="blockDebug"
        :block="block"
        :block-style="preparedStyle"
        :positioning="rectPosition"
    />
</template>

<style>
.heavy {
    font: bold 30px sans-serif;
}
</style>