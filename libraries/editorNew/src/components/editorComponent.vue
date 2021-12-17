<script lang="ts" setup>
import { getCurrentEditor } from '../core';
import { computed, onScopeDispose, reactive, ref, watch } from 'vue';
import Palette from './Palette/Palette.vue';
import Phases from './Phases/Phases.vue';
import PhasesJson from './Phases/PhasesJson.vue';
import NodeSetting from './NodeSetting/NodeSetting.vue';
import AppMenu from './AppMenu/AppMenu.vue';
import Debug from './Debug/Debug.vue';
import { useCurrentEditorState } from '../core/useCurrentEditorState';
import 'coya-json-editor/dist/style.css';

const teleportEl = ref(null);
const svgPosition = reactive({
    x: 0,
    y: 0,
    w: 0,
    h: 0,
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
    h: 0,
});
if (editor.enable) {
    watch(
        () => editor.svg,
        (svg) => {
            if (!svg) {
                return;
            }
            calculateSvgSize(svg);
            const resizer = new ResizeObserver(() => {
                calculateSvgSize(svg);
            });
            resizer.observe(svg.parentElement!);

            svg.addEventListener('onViewBoxChange', (e: any) => {
                svgViewBox.x = e.detail.viewBox.x;
                svgViewBox.y = e.detail.viewBox.y;
                svgViewBox.w = e.detail.viewBox.w;
                svgViewBox.h = e.detail.viewBox.h;
            });
            onScopeDispose(() => resizer.disconnect());
        },
        { immediate: true },
    );
}

const paletteContainerStyle = computed(() => ({
    x: `${10}px`,
    y: `${svgPosition.h / 4}px`,
    width: '45px',
    height: `${svgPosition.h / 3}px`,
}));
const phasesMargin = ref(50);
const phasesContainerStyle = computed(() => ({
    x: `${phasesMargin.value}px`,
    y: `${svgPosition.h - 90}px`,
    width: `${svgPosition.w - phasesMargin.value * 2}px`,
    height: `70px`,
    w: svgPosition.w,
}));
const nodeSettingWidth = ref(400);
const nodeSettingContainerStyle = computed(() => ({
    x: `${svgPosition.w - nodeSettingWidth.value - phasesMargin.value}px`,
    y: `${svgPosition.h / 2.5}px`,
    width: `${nodeSettingWidth.value}px`,
    height: `300px`,
}));

const appMenu = reactive({
    y: 10,
    h: 50,
});
const appMenuContainerStyle = computed(() => ({
    x: `${svgPosition.w - nodeSettingWidth.value - phasesMargin.value}px`,
    y: `${appMenu.y}px`,
    width: `${nodeSettingWidth.value}px`,
    height: `${appMenu.h}px`,
}));

const debugContainerStyle = computed(() => ({
    x: `${
        svgPosition.w - nodeSettingWidth.value * 2 - phasesMargin.value - 10
    }px`,
    y: `${appMenu.y}px`,
    width: `${nodeSettingWidth.value}px`,
    height: `${svgPosition.h - 120}px`,
}));

const phasesJsonContainerStyle = computed(() => ({
    x: appMenuContainerStyle.value.x,
    y: `${appMenu.y + appMenu.h + 10}px`,
    width: `${nodeSettingWidth.value}px`,
    height: `${svgPosition.h - 120}px`,
}));
const { mouseState, state, isOneNodeSelected, showDebugWindow } =
    useCurrentEditorState();
</script>

<template>
    <div>
        <Teleport v-if="!!editor.enable && editor.svg" :to="editor.svg">
            <svg
                :viewBox="`0 0 ${svgPosition.w} ${svgPosition.h}`"
                :x="svgViewBox.x"
                :y="svgViewBox.y"
            >
                <!-- <foreignObject
                    class="node"
                    :style="phasesContainerStyle"
                    @click.stop.prevent
                    @mousedown.stop.prevent
                >
                    <body
                        xmlns="http://www.w3.org/1999/xhtml"
                        :style="phasesContainerStyle"
                    >
                        <Phases />
                    </body>
                </foreignObject> -->
                <foreignObject
                    class="node"
                    :style="paletteContainerStyle"
                    @click.stop.prevent
                    @mousedown.stop.prevent
                >
                    <body
                        xmlns="http://www.w3.org/1999/xhtml"
                        :style="paletteContainerStyle"
                    >
                        <Palette />
                    </body>
                </foreignObject>
                <foreignObject
                    class="node"
                    :style="phasesJsonContainerStyle"
                    @click.stop.prevent
                    @mousedown.stop.prevent
                >
                    <body
                        xmlns="http://www.w3.org/1999/xhtml"
                        :style="phasesJsonContainerStyle"
                        @click.stop.prevent
                    >
                        <PhasesJson />
                    </body>
                </foreignObject>
                <foreignObject
                    class="node"
                    :style="nodeSettingContainerStyle"
                    v-if="isOneNodeSelected"
                    @click.stop.prevent
                    @mousedown.stop.prevent
                >
                    <body
                        xmlns="http://www.w3.org/1999/xhtml"
                        :style="nodeSettingContainerStyle"
                        @click.stop.prevent
                    >
                        <NodeSetting>
                            <template #preview="slotData">
                                <slot name="preview" v-bind="slotData"/>
                            </template>
                        </NodeSetting>
                    </body>
                </foreignObject>
                <foreignObject
                    class="node"
                    :style="appMenuContainerStyle"
                    @click.stop.prevent
                    @mousedown.stop.prevent
                >
                    <body
                        xmlns="http://www.w3.org/1999/xhtml"
                        :style="appMenuContainerStyle"
                        @click.stop.prevent
                    >
                        <AppMenu />
                    </body>
                </foreignObject>
                <foreignObject
                    v-if="showDebugWindow"
                    class="node"
                    :style="debugContainerStyle"
                    @click.stop.prevent
                    @mousedown.stop.prevent
                >
                    <body
                        xmlns="http://www.w3.org/1999/xhtml"
                        :style="debugContainerStyle"
                        @click.stop.prevent
                    >
                        <Debug />
                    </body>
                </foreignObject>
            </svg>
        </Teleport>
    </div>
</template>
