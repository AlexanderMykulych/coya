<script lang="ts" setup>
import { ActionType } from "coya-core";
import { computed, watch } from "vue";
import { EditorMode, PaletteItemType } from "../../core/types";
import { useCurrentEditorState } from "../../core/useCurrentEditorState";
import { PaletteBlocks } from "./PaletteBlocks";

const { mouseState, svg, workEl, makeChange, getNewUniqBlockName, state } = useCurrentEditorState()!;
const onMouseDown = (name: string) => {
    const activePaletteBlock = PaletteBlocks.find(x => x.name === name);
    if (!activePaletteBlock?.type || activePaletteBlock.type === PaletteItemType.Block) {
        mouseState.palette.pressed = true;
        mouseState.palette.blockName = name;
    }
}
const onClick = (name: string) => {
    const activePaletteBlock = PaletteBlocks.find(x => x.name === name);
    if (activePaletteBlock?.type === PaletteItemType.Action) {
        activePaletteBlock.action({
            editorState: state
        });
    }
}
const drawDraggedElement = computed(() => !!svg && mouseState.palette.pressed && !!mouseState.palette.blockName);
const draggedComponentConfig = computed(() => drawDraggedElement.value ? PaletteBlocks.find(x => x.name === mouseState.palette.blockName)?.preview : null);
const draggedComponentWidth = computed(() => draggedComponentConfig.value?.width || 100);
const draggedComponentHeight = computed(() => draggedComponentConfig.value?.height || 100);

watch(() => mouseState.palette.pressed, (val, oldVal) => {
    if (!val && oldVal && mouseState.palette.blockName) {
        const blockName = getNewUniqBlockName();
        makeChange([{
            action: {
                name: ActionType.AddNewBlock,
                value: {
                    [blockName]: {
                        label: blockName,
                    }
                }
            }
        }, {
            action: {
                name: ActionType.ChangeBlockStyle,
                value: {
                    [blockName]: {
                        position: {
                            x: `${mouseState.position.x - 50}`,
                            y: `${mouseState.position.y - 50}`,
                            w: "100",
                            h: "100",
                        },
                        css: {
                            fill: "#3e6b94"
                        }
                    }
                }
            },
            applyChangesToDiagram: true
        }]);
    }
});

// arrow
const isArrowMode = computed(() => state.mode === EditorMode.Arrow);
const isStartArrow = computed(() => isArrowMode.value && state.arrowState?.start && state.arrowState?.startPosition && !state.arrowState?.end);
const arrowPath = computed(() => {
    if (isStartArrow.value) {
        const x1 = state?.arrowState?.startPosition?.x;
        const y1 = state?.arrowState?.startPosition?.y;
        const x2 = mouseState.position?.x;
        const y2 = mouseState.position?.y;
        if (x1 && x2 && y1 && y2) {
            let indentX = -1;
            let indentY = -1;
            if (x1 > x2) {
                indentX = -indentX;
            }
            if (y1 > y2) {
                indentY = -indentY;
            }
            return `M${x1},${y1},${x2 + indentX},${y2 + indentY}`
        }
    }
    
})
// arrow - end
</script>

<template>
    <div class="border-2 rounded-md p-3 bg-white grid h-full">
        <div
            v-for="block in PaletteBlocks"
            :key="block.name"
            @mousedown="onMouseDown(block.name)"
            @click="onClick(block.name)"
        >
            <component :is="block.paletteComponent" />
        </div>
    </div>
    <Teleport v-if="drawDraggedElement" :to="workEl">
        <component
            v-if="draggedComponentConfig"
            :is="draggedComponentConfig.component"
            :x="mouseState?.position.x - draggedComponentWidth / 2"
            :y="mouseState?.position.y - draggedComponentHeight / 2"
            :width="draggedComponentWidth"
            :height="draggedComponentHeight"
        ></component>
    </Teleport>
    <Teleport v-if="isStartArrow" :to="workEl">
        <path
            :d="arrowPath"
            stroke="black"
            stroke-width="9px"
            marker-end="url(#sequenceflow-end)"
        />
    </Teleport>
</template>