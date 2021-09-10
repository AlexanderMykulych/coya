<script setup lang="ts">
import { transformToArchitecture, RectPositioning, Architecture } from "@coya/core";
import { computed, onMounted, ref, watch } from "vue";

const props = defineProps<{ config: string | Object }>()
const preparedConfig = computed(() => !!props.config && typeof props.config === "string" ? JSON.parse(props.config) : props.config);


const arch = ref({});
const coyaEl = ref<HTMLElement | null>(null);

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

onMounted(() => {
    if (coyaEl.value) {
        const realWidth = coyaEl.value.clientWidth;
        const realHeight = coyaEl.value.clientHeight;
        const width = 800;
        const height = (width * realHeight) / realWidth
        coyaEl.value.setAttribute("viewBox", `0 0 ${width} ${height}`);
    }
});

</script>
<template>
    <div>
        <button @click="back">back</button>
        <button @click="next">next</button>
        <svg
            class="coya"
            xmlns="http://www.w3.org/2000/svg"
            ref="coyaEl"
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

svg.coya {
    height: 70vh;
    width: 100vw;
}
</style>