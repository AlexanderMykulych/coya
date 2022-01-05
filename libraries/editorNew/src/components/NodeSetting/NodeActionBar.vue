<script lang="ts" setup>
import { computed } from 'vue';
import { EditorMode, SelectEvent } from '../../core';
import { useCurrentEditorState } from '../../core/useCurrentEditorState';

const { activeNode, state, architecture, getBlockRealPosition, removeBlock, pinToBlock } =
    useCurrentEditorState();

//pin
const isPinned = computed(() => !!activeNode.pinTo);
const activatePinMode = () => {
    state.mode =
        state.mode === EditorMode.Select ? EditorMode.None : EditorMode.Select;
    state.onSelect = (event: SelectEvent) => {
        if (event.blockId) {
            pinToBlock(event.blockId);
        }
    };
};

//label
const hasLabel = computed(() => !!activeNode.label);
const cleanLabel = () => activeNode.label = '';

</script>

<template>
    <div class="flex justify-start pb-2">
        <button v-if="isPinned">
            <i-ph:push-pin-simple-fill />
        </button>
        <button v-else @click="activatePinMode">
            <i-ph:push-pin-bold />
        </button>

        <button v-if="hasLabel">
            <i-ic:baseline-text-decrease @click="cleanLabel" />
        </button>

        <button @click="removeBlock()">
            <i-bx:bxs-trash />
        </button>
    </div>
</template>
