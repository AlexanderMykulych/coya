<script setup lang="ts">
import { transformToArchitecture, RectPositioning, Architecture } from "@coya/core";
import { computed, defineAsyncComponent, ref, watch } from "vue";
import { useNodeDetails } from "../logic/useNodeDetails";
import { useMousePosition } from "../logic/useSvgMousePosition";

const props = defineProps<{ config: string | Object }>()
const preparedConfig = computed(() => !!props.config && typeof props.config === "string" ? JSON.parse(props.config) : props.config);


const arch = ref<Architecture | null>(null);
const coyaSvgEl = ref<SVGSVGElement | null>(null);
const coyaEl = ref<HTMLElement | null>(null);
const width = ref(700);
const realHeight = computed(() => coyaSvgEl.value?.clientHeight ?? 0);
const realWidth = computed(() => coyaSvgEl.value?.clientWidth ?? 0);
const vX = ref(0);
const vY = ref(0);
const height = computed(() => {
    if (coyaSvgEl.value) {
        return (width.value * realHeight.value) / realWidth.value
    }
    return 0;
});
watch(() => preparedConfig.value, val => {
    arch.value = transformToArchitecture(val, {
        viewBox: {
            x: vX,
            y: vY,
            w: width,
            h: height
        }
    }).value;
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
const filteredRectPositions = computed(() => rectPositions.value.filter(x => !x?.style?.isHighlight));
const next = () => arch.value?.next();
const back = () => arch.value?.back();
const { x, y } = useMousePosition(coyaSvgEl);
const debug = computed(() => arch.value?.style?.debug?.enable ?? false);

const viewBox = computed(() => {
    return `${vX.value} ${vY.value} ${width.value} ${height.value}`;
});
const res = useNodeDetails();

const style = document.createElement('style');
style.id = "coya"
style.type = "text/css";
document.head.append(style);
watch(() => arch.value?.style?.css, css => {
    if (css) {
        style.textContent = css;
    }
}, {
    immediate: true
})

const highlights = computed(() => rectPositions.value.filter(x => x.style.isHighlight));
</script>
<template>
    <div class="grid grid-cols-5">
        <div
            class="coya-container col-span-4"
            ref="coyaEl"
            :class="{ [`col-span-${debug ? 4 : 'full'}`]: true }"
            :id="arch?.name"
        >
            <svg
                class="coya"
                xmlns="http://www.w3.org/2000/svg"
                ref="coyaSvgEl"
                overflow="auto"
                :viewBox="viewBox"
                v-if="!!arch?.style?.positioning"
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
                    <clipPath id="myClip">
                        <circle cx="100" cy="100" r="40" />
                        <circle cx="60" cy="60" r="40" />
                    </clipPath>
                    <mask id="hole" v-if="!!highlights && highlights.length > 0">
                        <rect x="0" y="0" width="100%" height="100%" fill="white" />
                        <CoyaNode
                            v-for="item in highlights"
                            :key="item.id"
                            :block="item.block"
                            :block-style="{ ...item.style, css: { fill: 'black' } }"
                            :positioning="item.pos"
                        />
                    </mask>
                </defs>

                <rect
                    v-if="debug"
                    x="-1000"
                    y="-1000"
                    width="10000"
                    height="10000"
                    fill="url(#grid)"
                />

                <!-- Rounded corner rectangle -->
                <template v-for="item in filteredRectPositions" :key="item.id">
                    <CoyaNode
                        :block="item.block"
                        :block-style="item.style"
                        :positioning="item.pos"
                    />
                    <template v-if="debug">
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
                        <PointPosition
                            v-if="item.pos.x && item.pos.y"
                            :x="item.pos.x"
                            :y="item.pos.y"
                        />
                    </template>
                </template>

                <PointPosition v-if="debug" :x="x" :y="y" />
                <rect
                    v-if="highlights?.length > 0"
                    x="-10000"
                    y="-10000"
                    width="100000"
                    height="100000"
                    fill="#0000008a"
                    mask="url(#hole)"
                />
            </svg>
        </div>
        <div v-if="debug" class="col-span-1">
            <NodeDetails
                v-if="res.item.value?.id"
                class="coya-debug"
                :nodeId="res.item.value?.id"
                :architecture="arch"
            />
            <DefaultDebug v-else />
            <!-- <NodeDetails class="coya-debug " nodeId="client" :architecture="arch"/> -->
        </div>
        <div class="col-span-full block text-gray-700 text-center bg-gray-200 px-4 py-2">
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
    height: 100%;
    width: 100%;
}
</style>