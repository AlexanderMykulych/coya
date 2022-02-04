<script lang="ts" setup>
import { computed } from 'vue';
import type { SelectEvent } from '../../core';
import { EditorMode } from '../../core';
import { useCurrentEditorState } from '../../core/useCurrentEditorState';

const {
    activeNode,
    state,
    architecture,
    getBlockRealPosition,
    removeBlock,
    pinToBlock,
    arrangeForward,
    arrangeBackward,
} = useCurrentEditorState();

// pin
const isPinned = computed(() => !!activeNode.pinTo);
const activatePinMode = () => {
    state.mode
        = state.mode === EditorMode.Select ? EditorMode.None : EditorMode.Select;
    state.onSelect = (event: SelectEvent) => {
        if (event.blockId)
            pinToBlock(event.blockId);
    };
};

// label
const hasLabel = computed(() => !!activeNode.label);
const cleanLabel = () => (activeNode.label = '');
</script>

<template>
  <div class="flex justify-start pb-2">
    <button @click="activatePinMode">
      <i-ph:push-pin-simple-fill v-if="isPinned" />
      <i-ph:push-pin-bold v-else />
    </button>

    <button v-if="hasLabel">
      <i-ic:baseline-text-decrease @click="cleanLabel" />
    </button>

    <button>
      <i-mdi:arrange-bring-forward @click="arrangeForward()" />
    </button>
    <button>
      <i-mdi:arrange-send-backward @click="arrangeBackward()" />
    </button>

    <button @click="removeBlock()">
      <i-bx:bxs-trash />
    </button>
  </div>
</template>
