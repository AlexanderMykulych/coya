<script setup lang="ts">
import type { Block, BlockStyle, Positioning, RectPositioning } from 'coya-core';
import { isLineBlockElement, isRectPositioning } from 'coya-core';
import { computed, useSlots } from 'vue';
import { getCurrentEditor } from 'coya-editor-new';
import { deepAssign } from 'coya-util';
import { eagerComputed } from '@vueuse/core';
import coyaRectNode from './Nodes/CoyaRectNode.vue';
import coyaLineNode from './Nodes/CoyaLineNode.vue';

const props = defineProps<{
    block: Block
    positioning: Positioning
    blockStyle?: BlockStyle
    debug?: boolean
    defaultArrowStyle?: BlockStyle
    defaultRectStyle?: BlockStyle
    disableWrap?: boolean
}>();

const slots = useSlots();

const rectPosition = computed(() => props.positioning as RectPositioning);
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
    if (isRect.value)
        return deepAssign({}, props.defaultRectStyle || {}, props.blockStyle || {});

    if (isLine.value)
        return deepAssign({}, props.defaultArrowStyle || {}, props.blockStyle || {});

    return props.blockStyle;
};

const preparedStyle = computed(() => calculateStyle());
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
  >
    <template v-if="!!slots[block.id]" #[block.id]>
      <slot :name="block.id" />
    </template>
  </CoyaRectNode>
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
