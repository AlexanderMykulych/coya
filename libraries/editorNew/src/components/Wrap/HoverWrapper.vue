<script lang="ts" setup>
/* eslint-disable */
import type { RectPositioning } from 'coya-core';
import { computed, ref } from 'vue';
import { useCurrentEditorState } from '../../core/useCurrentEditorState';

const props = defineProps<{
    position: RectPositioning
    id: string
}>();
const $emit = defineEmits(['click', 'mousedown']);
const padding = 20;

const { state, activeNode } = useCurrentEditorState();

const preparedPosition = computed(() => ({
    x: Number(props.position.x) - padding,
    y: Number(props.position.y) - padding,
    w: Number(props.position.w) + padding * 2,
    h: Number(props.position.h) + padding * 2,
}));

const rectPos = computed(() => ({
    x: preparedPosition.value.x,
    y: preparedPosition.value.y,
    w: preparedPosition.value.w,
    h: preparedPosition.value.h,
}));

const hovered = ref(false);
const fill = computed(() => hovered.value ? 'rgb(0, 0, 0, 0.1)' : 'rgb(0, 0, 0, 0)');

const isPinBlock = computed(() => activeNode.pinTo === props.id);
</script>

<template>
  <rect
    :x="rectPos.x"
    :y="rectPos.y"
    :width="rectPos.w"
    :height="rectPos.h"
    :fill="fill"
    @mouseover="hovered = true"
    @mouseleave="hovered = false"
    @click="$emit('click', $event)"
    @mousedown="$emit('mousedown', $event)"
  />
  <i-ph:push-pin-fill
    v-if="isPinBlock"
    :x="position.x"
    :y="position.y"
    width="35"
    height="35"
  />
</template>

<style>
</style>
