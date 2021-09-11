<script setup lang="ts">
import { transformToArchitecture, RectPositioning, Architecture } from "@coya/core";
import { computed, onMounted, ref, watch } from "vue";
import { useNodeDetails } from "../logic/useNodeDetails";
import { useMousePosition } from "../logic/useSvgMousePosition";

const props = defineProps<{ config: string | Object }>()
const preparedConfig = computed(() => !!props.config && typeof props.config === "string" ? JSON.parse(props.config) : props.config);


const arch = ref<Architecture | null>(null);
const coyaEl = ref<SVGSVGElement | null>(null);

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
                block: arch.value?.blocks?.find(y => y.id === x.blockId),
                style: arch.value?.style?.blocks ? arch.value.style.blocks[x.blockId] : null
            }));
    }
    return [];
});
const next = () => arch.value?.next();
const back = () => arch.value?.back();
const { x, y } = useMousePosition(coyaEl);
const debug = computed(() => arch.value?.style?.debug?.enable ?? false);
onMounted(() => {
    if (coyaEl.value) {
        const realWidth = coyaEl.value.clientWidth;
        const realHeight = coyaEl.value.clientHeight;
        const width = 900;
        const height = (width * realHeight) / realWidth
        coyaEl.value.setAttribute("viewBox", `0 0 ${width} ${height}`);
    }
});
const res = useNodeDetails();
</script>
<template>
    <div class="grid grid-cols-5">
        <div class="coya-container col-span-4" :class="{[`col-span-${debug ? 4 : 'full'}`]: true}">
            <svg
                class="coya"
                xmlns="http://www.w3.org/2000/svg"
                ref="coyaEl"
                overflow="auto"
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
                    <pattern id="tenthGrid" width="10" height="10" patternUnits="userSpaceOnUse">
                        <path
                            d="M 10 0 L 0 0 0 10"
                            fill="none"
                            stroke="silver"
                            stroke-width="0.7"
                            stroke-dasharray="3"
                        />
                    </pattern>
                    <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
                        <rect width="100" height="100" fill="url(#tenthGrid)" />
                        <path d="M 100 0 L 0 0 0 100" fill="none" stroke="gray" stroke-width="0.7" />
                    </pattern>
                </defs>

                <rect v-if="debug" width="100%" height="100%" fill="url(#grid)" />

                <!-- Rounded corner rectangle -->
                <template v-for="item in rectPositions" :key="item.id">
                    <CoyaNode
                        :block="item.block"
                        :block-style="item.style"
                        :positioning="item.pos"
                    />
                    <rect
                        :x="item.pos.x"
                        :y="item.pos.y"
                        :width="item.pos.width"
                        :height="item.pos.height"
                        fill="none"
                        pointer-events="all"
                        @mouseover="res.onMouseover(item)"
                        @mouseout="res.onMouseleave"
                        @click="res.onClick(item)"
                    />
                </template>

                <PointPosition v-if="debug" :x="x" :y="y" />
            </svg>
        </div>
        <div v-if="debug" class="col-span-1">
            <NodeDetails v-if="res.item.value?.id" class="coya-debug " :nodeId="res.item.value?.id" :architecture="arch"/>
            <DefaultDebug v-else/>
            <!-- <NodeDetails class="coya-debug " nodeId="client" :architecture="arch"/> -->
        </div>
        <div class="col-span-full block text-gray-700 text-center bg-gray-200 px-4 py-2" >
            <button @click="back" class="btn btn-blue mr-4">Back</button>
            <button @click="next" class="btn btn-blue">Next</button>
        </div>
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

.coya-container {
    height: 70vh;
    width: 100%;
    overflow: auto;
}
.coya-container svg.coya {
    height: 300%;
    width: 100%;
}
.coya-debug {

}
</style>