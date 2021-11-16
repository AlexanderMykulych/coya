<script lang="ts" setup>
import { ActionType } from "coya-core";
import { computed, watch } from "vue";
import { EditorMode, PaletteItemType } from "../../core/types";
import { useCurrentEditorState } from "../../core/useCurrentEditorState";
import { PaletteBlocks } from "./PaletteBlocks";

const { mouseState, svg, makeChange, getNewUniqBlockName, state } = useCurrentEditorState()!;
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
                        label: "new palette block"
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
    <Teleport v-if="drawDraggedElement" :to="svg">
        <component
            v-if="draggedComponentConfig"
            :is="draggedComponentConfig.component"
            :x="mouseState?.position.x - draggedComponentWidth / 2"
            :y="mouseState?.position.y - draggedComponentHeight / 2"
            :width="draggedComponentWidth"
            :height="draggedComponentHeight"
        ></component>
    </Teleport>
    <Teleport v-if="isStartArrow" :to="svg">
        <line
            :x1="state.arrowState?.startPosition.x"
            :y1="state.arrowState?.startPosition.y"
            :x2="mouseState.position.x - 1"
            :y2="mouseState.position.y - 1"
            stroke="black"
        />
    </Teleport>
</template>