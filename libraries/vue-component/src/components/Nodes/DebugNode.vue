<script lang="ts" setup>
import { Block, BlockStyle, RectPositioning } from "@coya/core";

const props = defineProps<{ block: Block, positioning: RectPositioning, blockStyle: BlockStyle }>();
const el = ref(null);

const style = reactive({
    strokeWidth: 1.4,
    stroke: "blue",
    strokeDasharray: "3,7"
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
            :y1="positioning.y + positioning.height"
            x2="1000"
            :y2="positioning.y + positioning.height"
        />
        <line
            :x1="positioning.x"
            y1="-1000"
            :x2="positioning.x"
            y2="1000"
        />
        <line
            :x1="positioning.x + positioning.width"
            y1="-1000"
            :x2="positioning.x + positioning.width"
            y2="1000"
        />
        
    </g>
</template>