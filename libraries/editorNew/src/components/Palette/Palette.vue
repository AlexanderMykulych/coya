<script lang="ts" setup>
import { ActionType } from 'coya-core';
import { computed, watch } from 'vue';
import { EditorMode, PaletteItemType } from '../../core/types';
import { useCurrentEditorState } from '../../core/useCurrentEditorState';
import { PaletteBlocks } from './PaletteBlocks';
import { getBoxToBoxArrowPath } from 'coya-util';
import { eagerComputed } from '@vueuse/core';

const {
    mouseState,
    svg,
    workEl,
    makeChange,
    getNewUniqBlockName,
    state,
    architecture,
    addNewBlock,
} = useCurrentEditorState()!;
const onMouseDown = (name: string) => {
    const activePaletteBlock = PaletteBlocks.find((x) => x.name === name);
    if (
        !activePaletteBlock?.type ||
        activePaletteBlock.type === PaletteItemType.Block
    ) {
        mouseState.palette.pressed = true;
        mouseState.palette.blockName = name;
    }
};
const onClick = (name: string) => {
    const activePaletteBlock = PaletteBlocks.find((x) => x.name === name);
    if (activePaletteBlock?.type === PaletteItemType.Action) {
        activePaletteBlock.action({
            editorState: state,
        });
    }
};
const drawDraggedElement = computed(
    () => !!svg && mouseState.palette.pressed && !!mouseState.palette.blockName,
);
const draggedComponentConfig = computed(() =>
    drawDraggedElement.value
        ? PaletteBlocks.find((x) => x.name === mouseState.palette.blockName)
              ?.preview
        : null,
);
const draggedComponentWidth = computed(
    () => draggedComponentConfig.value?.width || 100,
);
const draggedComponentHeight = computed(
    () => draggedComponentConfig.value?.height || 100,
);

watch(
    () => mouseState.palette.pressed,
    (val, oldVal) => {
        if (!val && oldVal && mouseState.palette.blockName) {
            addNewBlock({
                position: {
                    x: `${mouseState.position.x - 50}`,
                    y: `${mouseState.position.y - 50}`,
                    w: '100',
                    h: '100',
                },
                css: {
                    fill: '#3e6b94',
                },
            });
        }
    },
);

// arrow
const isArrowMode = computed(() => state.mode === EditorMode.Arrow);
const isStartArrow = eagerComputed(
    () =>
        isArrowMode.value &&
        state.arrowState?.start &&
        state.arrowState?.startPosition &&
        !state.arrowState?.end,
);
const startBlockPos = computed(() =>
    isStartArrow.value ? getBlockPos(state.arrowState!.start!) : null,
);
const hoverBlockPos = computed(() =>
    state.hover?.hoveredBlockId
        ? getBlockPos(state.hover.hoveredBlockId)
        : null,
);
const arrowPath = computed(() => {
    if (isStartArrow.value && startBlockPos.value) {
        const x1 = startBlockPos.value.x;
        const y1 = startBlockPos.value.y;
        let x2 = mouseState.position?.x;
        let y2 = mouseState.position?.y;
        if (x1 && x2 && y1 && y2) {
            let indentX = -1;
            let indentY = -1;
            if (x1 > x2) {
                indentX = -indentX;
            }
            if (y1 > y2) {
                indentY = -indentY;
            }
            const { path } = getBoxToBoxArrowPath(
                x1,
                y1,
                startBlockPos.value.w,
                startBlockPos.value.h,
                x2 + indentX,
                y2 + indentY,
                0,
                0,
                {
                    padEnd: 9,
                },
            );
            return path;
        }
    }
});
const getBlockPos = (block: string) =>
    architecture.style?.positioning?.find((x) => x.blockId === block)?.position;
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
            fill="none"
            stroke-width="3px"
            marker-end="url(#sequenceflow-end)"
        />
    </Teleport>
</template>
