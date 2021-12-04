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
    const bbox = svg.viewBox.baseVal;
    const parentBound = svg.parentElement.getBoundingClientRect();
    svgPosition.x = svgBound.left - parentBound.left;
    svgPosition.y = svgBound.top - parentBound.top;
    svgPosition.w = svgBound.width;
    svgPosition.h = svgBound.height;

    svgViewBox.x = bbox.x;
    svgViewBox.y = bbox.y;
    svgViewBox.w = bbox.width;
    svgViewBox.h = bbox.height;
};
const svgViewBox = reactive({
    x: 0,
    y: 0,
    w: 0,
    h: 0
});
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

        svg.addEventListener("onViewBoxChange", (e: any) => {
            svgViewBox.x = e.detail.viewBox.x;
            svgViewBox.y = e.detail.viewBox.y;
            svgViewBox.w = e.detail.viewBox.w;
            svgViewBox.h = e.detail.viewBox.h;
        });
        onScopeDispose(() => resizer.disconnect());
    }, { immediate: true });

}

const paletteContainerStyle = computed(() => ({
    x: `${10}px`,
    y: `${svgPosition.h / 4}px`,
    width: "45px",
    height: `${svgPosition.h / 3}px`
}));
const phasesMargin = ref(50);
const phasesContainerStyle = computed(() => ({
    x: `${phasesMargin.value}px`,
    y: `${svgPosition.h - 90}px`,
    width: `${svgPosition.w - phasesMargin.value * 2}px`,
    height: `70px`,
    w: svgPosition.w
}));
const nodeSettingWidth = ref(400);
const nodeSettingContainerStyle = computed(() => ({
    x: `${svgPosition.w - nodeSettingWidth.value - phasesMargin.value}px`,
    y: `${svgPosition.h / 3}px`,
    width: `${nodeSettingWidth.value}px`,
    height: `300px`
}));
const debugStyle = computed(() => ({
    x: `${svgPosition.w - svgPosition.w / 2}`,
    y: "10",
    width: "500",
    height: "400"
}));

const { mouseState, state, isOneNodeSelected } = useCurrentEditorState();
</script>

<template>
<div>
    <Teleport v-if="!!editor.enable && editor.svg" :to="editor.svg">
        <svg
            :viewBox="`0 0 ${svgPosition.w} ${svgPosition.h}`"
            :x="svgViewBox.x"
            :y="svgViewBox.y"
        >

            <!-- <foreignObject class="node" :style="debugStyle">
                <body xmlns="http://www.w3.org/1999/xhtml" :style="debugStyle">
                <textarea name="" id="" cols="30" rows="20" 
                    :value="`${JSON.stringify(state)}\n${JSON.stringify(mouseState)}`"></textarea>
                </body>
            </foreignObject> -->
            <foreignObject class="node" :style="phasesContainerStyle">
                <body xmlns="http://www.w3.org/1999/xhtml" :style="phasesContainerStyle">
                    <Phases />
                </body>
            </foreignObject>
            <foreignObject class="node" :style="paletteContainerStyle">
                <body xmlns="http://www.w3.org/1999/xhtml" :style="paletteContainerStyle">
                    <Palette />
                </body>
            </foreignObject>
            <foreignObject
                class="node"
                :style="nodeSettingContainerStyle"
                v-if="isOneNodeSelected"
                @click.stop.prevent
            >
                <body xmlns="http://www.w3.org/1999/xhtml" :style="nodeSettingContainerStyle" @click.stop.prevent>
                    <NodeSetting />
                </body>
            </foreignObject>
        </svg>
    </Teleport>
</div>
</template>