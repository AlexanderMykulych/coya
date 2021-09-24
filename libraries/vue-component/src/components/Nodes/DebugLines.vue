<script setup lang="ts">
import { DebugLine } from "@coya/core";

const props = defineProps<{ lines: DebugLine[] }>()
const style = reactive({
    strokeWidth: 1,
});
</script>

<template>
    <g :style="style">
        <template v-for="line in lines">
            <line
                v-if="line.lineType === 'y'"
                x1="-1000"
                :y1="line.value"
                x2="1000"
                :y2="line.value"
                :stroke="line.color"
            />
            <line
                v-else
                :x1="line.value"
                y1="-1000"
                :x2="line.value"
                y2="1000"
                :stroke="line.color"
            />
        </template>
    </g>
</template>