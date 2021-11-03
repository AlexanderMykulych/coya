<script lang="ts" setup>
import { useCurrentEditorState } from "../../core/useCurrentEditorState";

const {mouseState} = useCurrentEditorState();
const onMouseDown = (numb) => mouseState.palette.pressed = true;
</script>

<template>
    <div class="border-2 rounded-md p-3 bg-white grid h-full">
        
        <div class="" @mousedown="onMouseDown(1)">1</div>
        <div class="">2</div>
        <div class="">3</div>
        <div class="">4</div>
    </div>
</template>