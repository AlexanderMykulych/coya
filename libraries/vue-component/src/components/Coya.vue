<script setup lang="ts">
import { transformToArchitecture, RectPositioning, Architecture } from "@coya/core";
import { computed, ref, watch } from "vue";

const props = defineProps<{ config: string | Object }>()
const preparedConfig = computed(() => !!props.config && typeof props.config === "string" ? JSON.parse(props.config) : props.config);


const arch = ref({});

watch(() => preparedConfig.value, val => {
    arch.value = transformToArchitecture(val).value;
}, {
    immediate: true
});

const rectPositions = computed(() => {
    if (arch.value?.style?.positioning) {
        const poses = arch.value.style?.positioning;
        return poses
            .map(x => ({
                pos: x.position as RectPositioning,
                id: x.blockId,
                block: arch.value.blocks.find(y => y.id === x.blockId),
                style: arch.value.style?.blocks ? arch.value.style.blocks[x.blockId] : null
            }));
    }
    return [];
});
const next = () => arch.value.next();
const back = () => arch.value.back();


</script>
<template>
    <div>
        <button @click="back">back</button>
        <button @click="next">next</button>
        <svg
            viewBox="0 0 420 400"
            xmlns="http://www.w3.org/2000/svg"
            v-if="!!arch.style?.positioning"
        >
            <defs>
                <marker
                    id="arrowhead"
                    markerWidth="10"
                    markerHeight="7"
                    refX="0"
                    refY="3.5"
                    orient="auto"
                >
                    <polygon points="0 0, 10 3.5, 0 7" />
                </marker>
            </defs>
            <!-- Rounded corner rectangle -->
            <CoyaNode
                v-for="item in rectPositions"
                :key="item.id"
                :block="item.block"
                :block-style="item.style"
                :positioning="item.pos"
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