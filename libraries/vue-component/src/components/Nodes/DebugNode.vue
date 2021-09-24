<script lang="ts" setup>
import { Block, BlockStyle, RectPositioning } from "@coya/core";

const props = defineProps<{ block: Block, positioning: RectPositioning, blockStyle: BlockStyle }>();
const el = ref(null);

const style = reactive({
    strokeWidth: 0.6,
    stroke: "blue"
});

const text = computed(() => `${props.block.id}`);
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
        <circle 
            :cx="positioning.x"
            :cy="positioning.y"
            fill="yellow"
            r="1.3"
        />
        <textSvg
            
            :x="positioning.x"
            :y="positioning.y - 20"
        >
            <p class="text-left">
            <b>{{block.id}}</b> <br/>
            [x, y]
            </p>
        </textSvg>
    </g>
</template>