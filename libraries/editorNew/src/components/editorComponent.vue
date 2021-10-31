<script lang="ts" setup>
import { getCurrentEditor } from "../core";
import { computed, onScopeDispose, reactive, ref, watch } from "vue";
import Palette from "./Palette/Palette.vue";
import Phases from "./Phases/Phases.vue";
import NodeSetting from "./NodeSetting/NodeSetting.vue";
import { useCurrentEditorState } from "../core/useCurrentEditorState";

const teleportEl = ref(null);
const svgPosition = reactive({
    x: 0,
    y: 0,
    w: 0,
    h: 0
});
const editor = getCurrentEditor();
const calculateSvgSize = (svg: SVGSVGElement) => {
    teleportEl.value = svg?.parentElement;
    const svgBound = svg.getBoundingClientRect();
    const parentBound = svg.parentElement.getBoundingClientRect();
    svgPosition.x = svgBound.left - parentBound.left;
    svgPosition.y = svgBound.top - parentBound.top;
    svgPosition.w = svgBound.width;
    svgPosition.h = svgBound.height;
};
if (editor.enable) {
    watch(() => editor.svg, svg => {
        if (!svg) {
            return;
        }
        calculateSvgSize(svg);
        const resizer = new ResizeObserver(() => {
            calculateSvgSize(svg);
        });
        resizer.observe(svg.parentElement!);
        onScopeDispose(() => resizer.disconnect());
    }, {immediate: true});
    
}

const paletteContainerStyle = computed(() => ({
    left: `${svgPosition.x + 5}px`,
    top: `${svgPosition.y + svgPosition.h / 4}px`
}));
const phasesContainerStyle = computed(() => ({
    left: `${svgPosition.x + 20}px`,
    top: `${svgPosition.y + svgPosition.h - 90}px`,
    width: `${svgPosition.w - svgPosition.x - 20}px`,
    height: `${70}px`
}));
const nodeSettingContainerStyle = computed(() => ({
    left: `${svgPosition.x + svgPosition.w - 340}px`,
    top: `${svgPosition.y + svgPosition.h / 2}px`,
    width: `${300}px`,
    height: `200px`
}));

const { isOneNodeSelected } = useCurrentEditorState();
</script>

<template>
    <div>
        <Teleport v-if="!!teleportEl" :to="teleportEl">
            <div class="absolute m-1" :style="paletteContainerStyle">
                <Palette />
            </div>
            <div class="absolute m-1" :style="phasesContainerStyle">
                <Phases />
            </div>
            <div class="absolute m-1" :style="nodeSettingContainerStyle" v-if="isOneNodeSelected">
                <NodeSetting />
            </div>
        </Teleport>
    </div>
</template>