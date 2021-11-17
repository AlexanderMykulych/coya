<script setup lang="ts">
import { transformToArchitecture, RectPositioning, Architecture, ArchitectureDescription, CurrentPhaseInfo } from "coya-core";
import { computed, provide, reactive, ref, onMounted, watch } from "vue";
import { useNodeDetails } from "../logic/useNodeDetails";
import { useMousePosition } from "../logic/useSvgMousePosition";
import { useDebug } from "../state/useDebug";
import { enableEditor } from "coya-editor-new";
import "coya-editor-new/dist/style.css";
import { saveConfig } from "../socket";
import { useCurrentPhase } from "../state/useCurrentPhase";

const props = defineProps<{ config: string | Object, id: string }>();

const preparedConfig = reactive({
    config: null
});
const currentPhase: CurrentPhaseInfo = useCurrentPhase(props.id);
const initialConfig = ref(null);
watch(() => props.config, () => {
    preparedConfig.config = !!props.config && typeof props.config === "string" ? JSON.parse(props.config) : props.config;
    initialConfig.value = preparedConfig.config;
}, { immediate: true });

const arch = ref<Architecture | null>(null);
const editor = ref(null);
let archConfig = ref<ArchitectureDescription | null>(null);
const coyaSvgEl = ref<SVGSVGElement | null>(null);
const drawableSvgEl = ref<SVGSVGElement | null>(null);
const coyaEl = ref<HTMLElement | null>(null);
const enableDrawing = ref(false);
const width = ref(700);
const realHeight = ref(0);
const realWidth = ref(0);
onMounted(() => {
    if (coyaSvgEl.value) {
        realHeight.value = coyaSvgEl.value?.clientHeight ?? 0;
        realWidth.value = coyaSvgEl.value?.clientWidth ?? 0;

    }
});
const vX = ref(0);
const vY = ref(0);
const height = computed(() => {
    if (coyaSvgEl.value && realWidth.value !== 0) {
        return (width.value * realHeight.value) / realWidth.value
    }
    return 0;
});
const { architecture, config } = transformToArchitecture(preparedConfig.config, {
    viewBox: {
        x: vX,
        y: vY,
        w: width,
        h: height
    },
    currentPhase
});
arch.value = architecture.value;
archConfig = config;
editor.value = enableEditor({
    svg: coyaSvgEl,
    config,
    initialConfig,
    architecture: arch,
    id: props.id
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
const save = () => saveConfig(props.id, initialConfig.value);
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

const highlights = computed(() => rectPositions.value.filter(x => x.style?.isHighlight));

const { state } = useDebug();

watch(() => state.selected, val => arch.value?.debugSelect(val));

const debugLines = computed(() => arch.value?.debugState?.lines);
provide("svgInfo", reactive({
    viewBox: {
        vX,
        vY,
        w: width,
        h: height
    },
    realHeight,
    realWidth
}));

// zoom
const globalG = ref(null);
const transformMatrix = ref([1, 0, 0, 1, 0, 0]);
var scrollSensitivity = 0.005;
const matrix = computed(() => `matrix(${transformMatrix.value.join(",")})`);
const zoom = (evt: WheelEvent) => {
    console.log(evt);
    var scroll = evt.detail ? evt.detail * scrollSensitivity : (evt.wheelDelta / 120) * scrollSensitivity;
    for (var i = 0; i < 4; i++) {
        transformMatrix.value[i] *= scroll;
    }
    transformMatrix.value[4] += (1 - scroll) * (width.value / 2);
    transformMatrix.value[5] += (1 - scroll) * (height.value / 2);
}
onMounted(() => {
    coyaSvgEl.value["onmousewheel"] = (e) => {
        e.preventDefault();
        Math.sign(e.deltaY)
        zoom(e);

        //svgEl.value.dispatchEvent(new CustomEvent("onViewBoxChange", {detail: {viewBox}}));
    };
});


</script>
<template>
    <div class="grid grid-cols-5 grid-rows-12 h-full">
        <div>
            <editor class="component" v-if="!!editor" />
        </div>
        <div
            class="coya-container col-span-4 row-span-full p-7 bg-gray-200 bg-opacity-70"
            ref="coyaEl"
            :class="{ [`col-span-${debug ? 4 : 'full'}`]: true }"
            :id="arch?.name"
        >
            <svg
                class="coya bg-white"
                xmlns="http://www.w3.org/2000/svg"
                ref="coyaSvgEl"
                overflow="auto"
                v-if="!!arch?.style?.positioning"
            >
                <g ref="globalG" :transform="matrix">
                    <defs>
                        <marker
                            id="arrowhead"
                            markerWidth="10"
                            markerHeight="7"
                            refX="10"
                            refY="3.5"
                            orient="auto"
                        >
                            <polygon points="0 0, 10 3.5, 0 7" />
                        </marker>
                        <pattern
                            id="tenthGrid"
                            width="10"
                            height="10"
                            patternUnits="userSpaceOnUse"
                        >
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
                            <path
                                d="M 100 0 L 0 0 0 100"
                                fill="none"
                                stroke="gray"
                                stroke-width="0.7"
                            />
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

                    <rect v-if="debug" x="0" y="0" width="100%" height="100%" fill="url(#grid)" />

                    <!-- Rounded corner rectangle -->
                    <template v-for="item in filteredRectPositions" :key="item.id">
                        <CoyaNode
                            :block="item.block"
                            :block-style="item.style"
                            :positioning="item.pos"
                            :debug="debug"
                        />
                        <template v-if="debug">
                            <rect
                                :x="item.pos.x"
                                :y="item.pos.y"
                                :width="item.pos.w"
                                :height="item.pos.h"
                                fill="none"
                                pointer-events="all"
                                @mouseover="res.onMouseover(item)"
                                @mouseout="res.onMouseleave"
                                @click="res.onClick(item)"
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

                    <DebugLines v-if="debugLines" :lines="debugLines" />
                </g>
            </svg>
            <svg v-if="enableDrawing" class="drawableSvg" ref="drawableSvgEl" />
        </div>
        <div v-if="debug" class="col-span-1">
            <NodeDetails
                v-if="res.item.value?.id"
                class="coya-debug"
                :nodeId="res.item.value?.id"
                :architecture="arch"
            />
            <DefaultDebug v-else />

            <CoyaPhaseSelect
                :phases="arch?.phases"
                :modelValue="arch.currentPhase"
                @update:modelValue="arch?.toPhase"
            />
        </div>
        <div class="col-span-full row-span-1 block text-gray-700 text-center bg-gray-200 px-4 py-2">
            <CoyaControlPanel
                :svgEl="drawableSvgEl"
                @back="back"
                @next="next"
                @enable="val => enableDrawing = val"
                @save="save"
            />
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
    height: 100%;
    width: 100%;
    overflow: auto;
    position: relative;
}
.coya-container svg.coya {
    height: 100%;
    width: 100%;
    touch-action: none;
    box-shadow: 0px 0px 2px 1px #d1d1d1;
}
.drawableSvg {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
}
.cursor-move {
    cursor: move;
}
</style>