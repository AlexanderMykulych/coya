<script lang="ts" setup>
import { ActionType } from "coya-core";
import { computed, watch } from "vue";
import { useCurrentEditorState } from "../../core/useCurrentEditorState";
import { PaletteBlocks, PaletteItemType } from "./PaletteBlocks";

const { mouseState, svg, makeChange, getNewUniqBlockName } = useCurrentEditorState()!;
const onMouseDown = ({ name }: { name: string }) => {
    const activePaletteBlock = PaletteBlocks.find(x => x.name === name);
    if (!activePaletteBlock?.type || activePaletteBlock.type === PaletteItemType.Block) {
        mouseState.palette.pressed = true;
        mouseState.palette.blockName = name;
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
</script>

<template>
    <div class="border-2 rounded-md p-3 bg-white grid h-full">
        <div
            v-for="block in PaletteBlocks"
            :key="block.name"
            @mousedown="onMouseDown({ name: block.name })"
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
</template>