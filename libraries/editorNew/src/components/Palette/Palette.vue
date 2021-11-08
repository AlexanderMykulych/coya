<script lang="ts" setup>
import { computed } from "vue";
import { useCurrentEditorState } from "../../core/useCurrentEditorState";
import { PaletteBlocks } from "./PaletteBlocks";

const {mouseState, svg} = useCurrentEditorState();
const onMouseDown = ({name}: {name: string}) => {
    mouseState.palette.pressed = true;
    mouseState.palette.blockName = name;
}

const drawDraggedElement = computed(() => !!svg && mouseState.palette.pressed && !!mouseState.palette.blockName);
const draggedComponentConfig = computed(() => drawDraggedElement.value ? PaletteBlocks.find(x => x.name === mouseState.palette.blockName)?.preview : null);
const draggedComponentWidth = computed(() => draggedComponentConfig.value?.width || 100);
const draggedComponentHeight = computed(() => draggedComponentConfig.value?.height || 100);
</script>

<template>
    <div class="border-2 rounded-md p-3 bg-white grid h-full">
        <div class="" @mousedown="onMouseDown(1)">
            <i-cil:rectangle />
        </div>
        <div v-for="block in PaletteBlocks" :key="block.name" @mousedown="onMouseDown({name: block.name})">
            <component :is="block.paletteComponent"/>
        </div>
        <div class="">3</div>
        <div class="">4</div>
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