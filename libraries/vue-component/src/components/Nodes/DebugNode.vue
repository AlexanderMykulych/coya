<script lang="ts" setup>
import type { Block, BlockStyle, RectPositioning } from 'coya-core';

const props = defineProps<{ block: Block; positioning: RectPositioning; blockStyle: BlockStyle }>();
const el = ref(null);

const style = reactive({
    strokeWidth: 0.6,
    stroke: 'blue',
});

const text = computed(() => `${props.block.id}`);
const points = computed(() => {
    const items = [{
        pos: props.positioning,
        text: `${props.block.id}<br/>`,
        indentY: -15,
        indentX: -10,
    }, {
        pos: props.positioning.bottom,
        text: 'bottom',
        indentY: 5,
    }, {
        pos: props.positioning.top,
        text: 'top',
        indentY: -12,
        indentX: 5,
    }, {
        pos: props.positioning.right,
        text: 'right',
        indentY: -12,
        indentX: 5,
    }, {
        pos: props.positioning.left,
        text: 'left',
        indentY: -12,
        indentX: -25,
    }];
    return items;
});
</script>

<template>
  <g :style="style">
    <line
      x1="-1000"
      :y1="positioning.y"
      x2="1000"
      :y2="positioning.y"
    />
    <line
      x1="-1000"
      :y1="positioning.y + positioning.h"
      x2="1000"
      :y2="positioning.y + positioning.h"
    />
    <line
      :x1="positioning.x"
      y1="-1000"
      :x2="positioning.x"
      y2="1000"
    />
    <line
      :x1="positioning.x + positioning.w"
      y1="-1000"
      :x2="positioning.x + positioning.w"
      y2="1000"
    />
    <template v-for="(point, index) in points">
      <circle
        v-if="point.pos"
        :cx="point.pos.x"
        :cy="point.pos.y"
        fill="yellow"
        r="1.3"
      />
      <textSvg
        v-if="point.pos"
        :x="point.pos.x + (point.indentX ?? 0)"
        :y="point.pos.y + (point.indentY ?? -20)"
      >
        <p class="text-left" v-html="point.text" />
      </textSvg>
    </template>
  </g>
</template>
