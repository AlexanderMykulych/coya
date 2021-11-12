<script lang="ts" setup>
import { useCurrentEditorState } from "../../core/useCurrentEditorState";

const {activeNode} = useCurrentEditorState();
</script>

<template>
    <div class="border-2 rounded-md p-3 bg-white grid h-full">
        setting
        {{activeNode}}
    </div>
</template>