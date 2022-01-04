<script lang="ts" setup>
import { computed } from 'vue';
import { EditorMode, SelectEvent } from '../../core';
import { useCurrentEditorState } from '../../core/useCurrentEditorState';

const { activeNode, state, architecture, getBlockRealPosition } =
    useCurrentEditorState();

//pin
const isPinned = computed(() => !!activeNode.pinTo);
const activatePinMode = () => {
    state.mode =
        state.mode === EditorMode.Select ? EditorMode.None : EditorMode.Select;
    state.onSelect = (event: SelectEvent) => {
        if (event.blockId) {
            const pinToPos = getBlockRealPosition(event.blockId);
            const blockPos = getBlockRealPosition(activeNode.name);
            if (pinToPos && blockPos) {
                activeNode.x = `${blockPos.x - pinToPos.x}`;
                activeNode.y = `${blockPos.y - pinToPos.y}`;
                activeNode.pinTo = event.blockId;
            }
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
    </div>
</template>
