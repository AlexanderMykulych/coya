<script lang="ts" setup>
/* eslint-disable */
import { computed, onMounted, reactive, ref } from 'vue';
import { useCurrentEditorState } from '../../core/useCurrentEditorState';
import { useSvgMouse } from '../../core/useSvgMouse';

const { phases, architecture } = useCurrentEditorState();

const svgDim = reactive({
    h: 0,
    w: 0,
});
const svgEl = ref<SVGSVGElement | null>(null);

const svgMouse = useSvgMouse(svgEl);
onMounted(() => {
    if (svgEl.value) {
        const { width, height } = svgEl.value.getBoundingClientRect();
        svgDim.h = height;
        svgDim.w = width;
    }
});
const phaseRadious = computed(() => svgDim.h * 0.15);
const onePhaseReservedWidth = computed(() => svgDim.w / (phases.value.totalCount - 1 || 1));
const timelineWidth = computed(() => phases.value.totalCount * onePhaseReservedWidth.value);
const getIsGroupUp = groupIndex => groupIndex % 2 !== 0;
const getIndentByGroupIndex = (groupIndex: number) => {
    return getIsGroupUp(groupIndex) ? -phaseRadious.value - 5 : phaseRadious.value + 5;
};

const getPathForPhase = (group, groupIndex, phaseIndex) => {
    if (group.length > phaseIndex + 1) {
        const phase = group[phaseIndex];
        const nextPhase = group[phaseIndex + 1];
        if (phase && nextPhase)
            return `M ${getPhaseX(phase)} ${getPhaseY(groupIndex)} ${getPhaseX(nextPhase)} ${getPhaseY(groupIndex)}`;
    }
};
const getPathForPhaseGroup = (group, groupIndex) => {
    const phasesItems = phases.value.items;
    if (phasesItems.length > groupIndex + 1) {
        const phase = group[group.length - 1];
        const nextGroup = phasesItems[groupIndex + 1];
        const nextPhase = nextGroup[0];
        if (phase && nextPhase) {
            const pX = getPhaseX(phase);
            const pY = getPhaseY(groupIndex);
            const npX = getPhaseX(nextPhase);
            const npY = getPhaseY(groupIndex + 1);

            return getIsGroupUp(groupIndex)
                ? `M ${pX} ${pY} C ${pX + 100}, ${pY + 5} ${npX - 100}, ${npY - 5} ${npX}, ${npY}`
                : `M ${pX} ${pY} C ${pX + 100}, ${pY - 5} ${npX - 100}, ${npY + 5} ${npX}, ${npY}`;
        }
    }
};

const getPhaseX = phase => onePhaseReservedWidth.value * (phase.index + 1) - onePhaseReservedWidth.value / 2;
const getPhaseStartX = phase => onePhaseReservedWidth.value * (phase.index);
const getPhaseY = groupIndex => svgDim.h / 2 + getIndentByGroupIndex(groupIndex);
const getPhaseColor = groupIndex => getIsGroupUp(groupIndex) ? '#f49914' : '#0982ec';

const getPhaseTextY = (groupIndex) => {
    if (!getIsGroupUp(groupIndex))
        return 10;

    return svgDim.h - 20;
};
const hoveredPhaseIndex = computed(() => Math.trunc(svgMouse.position.x / onePhaseReservedWidth.value));

const setCurrentPhase = (index: number | null) => architecture!.toPhase(index);

const startButtonStyle = computed(() => ({
    backgroundColor: architecture?.currentPhase === null ? '#5dc41663' : undefined,
}));
</script>

<template>
  <div class="flex justify-between border-2 rounded-md bg-white h-full">
    <div class="w-9">
      <button class="w-full h-full" :style="startButtonStyle" @click="setCurrentPhase(null)">
        <i-gis:flag-start-b />
      </button>
    </div>
    <svg ref="svgEl" width="100%" height="100%">
      <defs>
        <pattern id="phase-grid" :width="onePhaseReservedWidth" height="100%" patternUnits="userSpaceOnUse">
          <path :d="`M ${onePhaseReservedWidth} 0 L 0 0 0 ${onePhaseReservedWidth}`" fill="none" stroke="gray" stroke-width="1" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#phase-grid)" />
      <g>
        <g v-for="(group, index) in phases.items" :key="index">
          <path class="animated" :d="getPathForPhaseGroup(group, index)" stroke-width="2" stroke="black" fill="none" />
          <rect
            v-if="index === architecture?.currentPhase"
            :x="getPhaseStartX(group[0])"
            y="0"
            :width="onePhaseReservedWidth * group.length"
            height="100%"
            fill="#5dc41663"
          />
          <g v-for="(phase, phaseIndex) in group" :key="phase.phaseKey" class="cursor-pointer" @click="setCurrentPhase(index)">
            <rect
              v-if="phase.index === hoveredPhaseIndex && !svgMouse.leave"
              :x="getPhaseStartX(phase)"
              y="0"
              :width="onePhaseReservedWidth"
              height="100%"
              fill="#afae065e"
            />
            <path :d="getPathForPhase(group, index, phaseIndex)" stroke-width="1" stroke="black" />
            <circle :cx="getPhaseX(phase)" :cy="getPhaseY(index)" :r="phaseRadious" :fill="getPhaseColor(index)" class="cursor-pointer" />
            <text
              :x="getPhaseX(phase)"
              :y="getPhaseTextY(index)"
              dominant-baseline="hanging"
              text-anchor="middle"
            >
              {{ phase.phaseKey }}
            </text>
          </g>
        </g>
      </g>
    </svg>
  </div>
</template>

<style scoped>
path.animated {
    stroke-dasharray: 10;
    animation: dashdraw .5s linear infinite;
}
@keyframes dashdraw {
    0% {
        stroke-dashoffset: 20;
    }
}
</style>
