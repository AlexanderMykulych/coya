<script setup lang="ts">
import {
    transformToArchitecture,
    RectPositioning,
    Architecture,
    ArchitectureDescription,
    CurrentPhaseInfo,
} from 'coya-core';
import { computed, provide, reactive, ref, onMounted, watch } from 'vue';
import { useNodeDetails } from '../logic/useNodeDetails';
import { useMousePosition } from '../logic/useSvgMousePosition';
import { useDebug } from '../state/useDebug';
import { enableEditor, getMousePosition } from 'coya-editor-new';
import 'coya-editor-new/dist/style.css';
import { saveConfig } from '../socket';
import { useCurrentPhase } from '../state/useCurrentPhase';
import { AssetConfig, provideAssets } from '../logic/useAssets';

const props = defineProps<{
    config: string | Object;
    id: string;
    assets: AssetConfig;
}>();
const emit = defineEmits(['update:config']);
provideAssets(props.assets);

const preparedConfig = reactive({
    config: null,
});
const currentPhase: CurrentPhaseInfo = useCurrentPhase(props.id);
const initialConfig = ref(null);
watch(
    () => props.config,
    () => {
        preparedConfig.config =
            !!props.config && typeof props.config === 'string'
                ? JSON.parse(props.config)
                : props.config;
        initialConfig.value = preparedConfig.config;
    },
    { immediate: true },
);

const editor = ref(null);
const coyaSvgEl = ref<SVGSVGElement | null>(null);
const coyaGEl = ref<SVGGElement | null>(null);
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
        return (width.value * realHeight.value) / realWidth.value;
    }
    return 0;
});
const { architecture: arch, config } = transformToArchitecture(
    preparedConfig.config,
    {
        viewBox: {
            x: vX,
            y: vY,
            w: width,
            h: height,
        },
        currentPhase,
    },
);

editor.value = enableEditor({
    svg: coyaSvgEl,
    workEl: coyaGEl,
    config,
    initialConfig,
    architecture: arch,
    id: props.id,
    assets: props.assets,
});
const editorComponent = computed(() => editor.value?.component);

const rectPositions = computed(() => {
    if (arch.value?.style?.positioning) {
        const poses = arch.value.style?.positioning;
        return poses.map((x) => ({
            pos: x.position as RectPositioning,
            id: x.blockId,
            block: arch.value?.blocks?.find((y) => y.id === x.blockId),
            style: arch.value?.style?.blocks
                ? arch.value.style.blocks[x.blockId]
                : null,
        }));
    }
    return [];
});
const defaultRectStyle = computed(() => arch.value?.style?.blocks?.['_']);
const defaultArrowStyle = computed(() => arch.value?.style?.blocks?.['->']);
const filteredRectPositions = computed(() =>
    rectPositions.value.filter((x) => !x?.style?.isHighlight),
);

const next = () => arch.value?.next();
const back = () => arch.value?.back();
const save = () =>
    emit('update:config', JSON.stringify(initialConfig.value, null, '\t'));
const { x, y } = useMousePosition(coyaSvgEl);
const debug = computed(() => arch.value?.style?.debug?.enable ?? false);

const viewBox = computed(() => {
    return `${vX.value} ${vY.value} ${width.value} ${height.value}`;
});
const res = useNodeDetails();

const style = document.createElement('style');
style.id = 'coya';
style.type = 'text/css';
document.head.append(style);
watch(
    () => arch.value?.style?.css,
    (css) => {
        if (css) {
            style.textContent = css;
        }
    },
    {
        immediate: true,
    },
);

const highlights = computed(() =>
    rectPositions.value.filter((x) => x.style?.isHighlight),
);

const { state } = useDebug();

watch(
    () => state.selected,
    (val) => arch.value?.debugSelect(val),
);

const debugLines = computed(() => arch.value?.debugState?.lines);
provide(
    'svgInfo',
    reactive({
        viewBox: {
            vX,
            vY,
            w: width,
            h: height,
        },
        realHeight,
        realWidth,
    }),
);
</script>
<template>
    <div class="grid grid-cols-4 grid-rows-12 h-full hwf">
        <editorComponent v-if="!!editor">
            <template #left-menu>
                <slot name="left-menu" />
            </template>
            <template #preview="{ item }">
                <CoyaNode
                    :block="item.block"
                    :block-style="item.blockStyle"
                    :defaultRectStyle="defaultRectStyle"
                    :defaultArrowStyle="defaultArrowStyle"
                    :positioning="item.positioning"
                    :disableWrap="true"
                />
            </template>
            <template #menu>
                <CoyaControlPanel
                    :svgEl="drawableSvgEl"
                    @back="back"
                    @next="next"
                    @enable="(val) => (enableDrawing = val)"
                    @save="save"
                />
            </template>
            <template #before>
                <svg
                    v-if="enableDrawing"
                    class="drawableSvg"
                    ref="drawableSvgEl"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <rect
                        x="0"
                        y="0"
                        width="100vw"
                        height="100vh"
                        style="opacity: 0"
                    ></rect>
                </svg>
            </template>
        </editorComponent>
        <div
            class="coya-container col-span-4 row-span-full bg-gray-200 bg-opacity-70"
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
                <g ref="coyaGEl" class="coya-work-el">
                    <defs>
                        <marker
                            id="arrow-out"
                            markerWidth="20"
                            markerHeight="18"
                            refX="9.5"
                            refY="5.1"
                            orient="auto"
                            markerUnits="userSpaceOnUse"
                        >
                            <polyline points="1 1, 9 5, 1 7" />
                        </marker>
                        <marker
                            id="sequenceflow-end"
                            viewBox="0 0 20 20"
                            refX="11"
                            refY="10"
                            markerWidth="10"
                            markerHeight="10"
                            orient="auto"
                        >
                            <path
                                d="M 1 5 L 11 10 L 1 15 Z"
                                style="
                                    fill: black;
                                    stroke-width: 1px;
                                    stroke-linecap: round;
                                    stroke-dasharray: 10000, 1;
                                    stroke: black;
                                "
                            ></path>
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
                        <pattern
                            id="grid"
                            width="100"
                            height="100"
                            patternUnits="userSpaceOnUse"
                        >
                            <rect
                                width="100"
                                height="100"
                                fill="url(#tenthGrid)"
                            />
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
                        <mask
                            id="hole"
                            v-if="!!highlights && highlights.length > 0"
                        >
                            <rect
                                x="0"
                                y="0"
                                width="100%"
                                height="100%"
                                fill="white"
                            />
                            <CoyaNode
                                v-for="item in highlights"
                                :key="item.id"
                                :block="item.block"
                                :block-style="{
                                    ...item.style,
                                    css: { fill: 'black' },
                                }"
                                :positioning="item.pos"
                            />
                        </mask>
                    </defs>

                    <rect
                        v-if="debug"
                        x="0"
                        y="0"
                        width="100%"
                        height="100%"
                        fill="url(#grid)"
                    />

                    <!-- Rounded corner rectangle -->
                    <template
                        v-for="item in filteredRectPositions"
                        :key="item.id"
                    >
                        <CoyaNode
                            :block="item.block"
                            :block-style="item.style"
                            :defaultRectStyle="defaultRectStyle"
                            :defaultArrowStyle="defaultArrowStyle"
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
    user-select: none;
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
@keyframes dashdraw {
    0% {
        stroke-dashoffset: 20;
    }
}
@keyframes rotating {
  from {
    -ms-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -ms-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes grow {
  from {
    stroke-dashoffset: 822;
  }
  to {
    stroke-dashoffset: 0;
  }
}
@keyframes enter {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
