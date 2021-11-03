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
    x: `${10}px`,
    y: `${svgPosition.h / 4}px`,
    width: "10%",
    height: "30%"
}));
const phasesMargin = ref(50);
const phasesContainerStyle = computed(() => ({
    x: `${phasesMargin.value}px`,
    y: `${svgPosition.y + svgPosition.h - 90}px`,
    width: `calc(100% - ${phasesMargin.value * 2}px)`,
    height: `70px`
}));
const nodeSettingWidth = ref(300);
const nodeSettingContainerStyle = computed(() => ({
    x: `${svgPosition.w - nodeSettingWidth.value - phasesMargin.value}px`,
    y: `${svgPosition.h / 2}px`,
    width: `${nodeSettingWidth.value}px`,
    height: `200px`
}));
const debugStyle = reactive({
    x: `${svgPosition.w - 400}`,
    y: "10",
    width: "300",
    height: "400"
});

const { isOneNodeSelected } = useCurrentEditorState();

const {mouseState} = useCurrentEditorState();
</script>

<template>
    <div>
        <Teleport v-if="!!editor.enable && editor.svg" :to="editor.svg">
            <foreignObject class="node" :style="phasesContainerStyle">
                <body xmlns="http://www.w3.org/1999/xhtml" class="h-full">
                    <Phases />
                </body>
            </foreignObject>
            <foreignObject class="node" :style="paletteContainerStyle">
                <body xmlns="http://www.w3.org/1999/xhtml" class="h-full">
                    <Palette />
                </body>
            </foreignObject>
            <foreignObject class="node" :style="nodeSettingContainerStyle" v-if="isOneNodeSelected">
                <body xmlns="http://www.w3.org/1999/xhtml" class="h-full">
                    <NodeSetting />
                </body>
            </foreignObject>
            <foreignObject class="node" :style="debugStyle">
                <body xmlns="http://www.w3.org/1999/xhtml" class="h-full">
                    {{mouseState}}
                </body>
            </foreignObject>
        </Teleport>
    </div>
</template>