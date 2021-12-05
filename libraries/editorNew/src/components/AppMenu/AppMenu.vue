<script lang="ts" setup>
import { ref, reactive, computed } from "vue";
import { useCurrentEditorState } from "../../core/useCurrentEditorState";

const { selectedNode } = useCurrentEditorState();
const selectDefaultNode = () => selectedNode.value = "_";
</script>

<template>
    <div class="border-2 rounded-md p-3 bg-white h-full flex flex-row">
        <div class="border-2 rounded-md flex-1 flex-grow-0 ">
            <button click="selectDefaultNode">
                Default
            </button>
        </div>
    </div>
</template>