<script lang="ts" setup>
import { computed, onMounted, reactive, ref } from 'vue';
import { useCurrentEditorState } from '../../core/useCurrentEditorState';

const { phases } = useCurrentEditorState();
const svgDim = reactive({
    h: 0,
    w: 0
});
const svgEl = ref<SVGSVGElement | null>(null);

onMounted(() => {
    if (svgEl.value) {
        const { width, height } = svgEl.value.getBoundingClientRect();
        svgDim.h = height;
        svgDim.w = width;
    }
});
const phaseRadious = computed(() => svgDim.h * 0.15);
const onePhaseReservedWidth = computed(() => Math.max(svgDim.w / (phases.value.totalCount || 1), 100));
const timelineWidth = computed(() => phases.value.totalCount * onePhaseReservedWidth.value);

const getIndentByGroupIndex = (index: number) => {
    return index % 2 !== 0 ? -phaseRadious.value * 1 : 10;
};

const getPathForPhase = (group, groupIndex, phaseIndex) => {
    if (group.length > phaseIndex + 1) {
        const phase = group[phaseIndex];
        const nextPhase = group[phaseIndex + 1];
        if (phase && nextPhase) {
            return `M ${getPhaseX(phase)} ${getPhaseY(groupIndex)} ${getPhaseX(nextPhase)} ${getPhaseY(groupIndex)}`
        }
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

            return groupIndex % 2 === 0 ?
                `M ${pX} ${pY} C ${pX + 100}, ${pY + 5} ${npX - 100}, ${npY - 5} ${npX}, ${npY}` :
                `M ${pX} ${pY} C ${pX + 100}, ${pY - 5} ${npX - 100}, ${npY + 5} ${npX}, ${npY}`;
        }
    }
};

const getPhaseX = phase => onePhaseReservedWidth.value * (phase.index + 1);
const getPhaseY = groupIndex => svgDim.h / 2 + getIndentByGroupIndex(groupIndex);
</script>

<template>
    <div class="flex justify-between border-2 rounded-md bg-white h-full">
        <svg :width="timelineWidth" height="100%" ref="svgEl">
            <g>
                <g v-for="(group, index) in phases.items" :key="index" >
                    <g v-for="(phase, phaseIndex) in group" :key="phase.phaseKey">
                        <circle :cx="getPhaseX(phase)" :cy="getPhaseY(index)" :r="phaseRadious"/>
                        <path :d="getPathForPhase(group, index, phaseIndex)" stroke-width="1" stroke="black"/>
                    </g>
                    <path class="animated" :d="getPathForPhaseGroup(group, index)" stroke-width="1" stroke="black" fill="none"/>
                </g>
            </g>
            <g fill="none" stroke="teal">
                <path d="M-1,5 H580 M5,-1 V580" stroke-width="10" stroke-dasharray="1 49" />
                <path d="M-1,2 H580 M2,-1 V580" stroke-width="5" stroke-dasharray="1 9" />
                <rect width="100%" height="100%" stroke-width="2" />
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