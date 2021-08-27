<script setup lang="ts">
import { transformToArchitecture, isRectPositioning } from "@coya/core";
import { RectPositioning } from "@coya/core/dist/types";
import { computed } from "vue";

const props = defineProps<{ config: string | Object }>()
const preparedConfig = computed(() => !!props.config && typeof props.config === "string" ? JSON.parse(props.config) : props.config);
const arch = transformToArchitecture(preparedConfig);
const rectPositions = computed(() => {
    if (arch.value?.style?.positioning) {
        const poses = arch.value.style?.positioning;
        return poses
            .filter(x => isRectPositioning(x.position))
            .map(x => x.position as RectPositioning);
    }
    return [];
});
</script>
<template>
    <div>
        {{ preparedConfig }}
        <br />
        arch1: {{ arch }}
        <br />
        <!-- arch: {{ arch?.blocks.map(x => x.label) }} -->
        <br />
        positions:
        {{ arch.style?.positioning }}
        <svg
            viewBox="0 0 420 400"
            xmlns="http://www.w3.org/2000/svg"
            v-if="!!arch.style?.positioning"
        >
            <!-- Rounded corner rectangle -->
            <rect
                v-for="(pos, index) in rectPositions"
                :key="index"
                :x="pos.x.value"
                :y="pos.y"
                :width="pos.width.value"
                :height="pos.height.value"
                stroke="black"
                stroke-width="5"
                fill="none"

            />
        </svg>
    </div>
</template>

<style>
.block {
    background-color: aqua;
}
.small {
    font: italic 13px sans-serif;
}
.heavy {
    font: bold 30px sans-serif;
}

/* Note that the color of the text is set with the    *
     * fill property, the color property is for HTML only */
.Rrrrr {
    font: italic 40px serif;
    fill: red;
}
</style>