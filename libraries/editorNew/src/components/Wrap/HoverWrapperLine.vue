<script lang="ts" setup>
/* eslint-disable */
import { getBoxToBoxArrowPath } from 'coya-arrow';
import type { LinePositioning } from 'coya-core';
import { computed, ref } from 'vue';
import { useCurrentEditorState } from '../../core/useCurrentEditorState';

const props = defineProps<{
    position: LinePositioning
    id: string
}>();
const $emit = defineEmits(['click', 'mousedown']);
const padding = 20;

const { state } = useCurrentEditorState();

const preparedPath = computed(() => props.position.meta?.path);

const hovered = ref(false);
const stroke = computed(() => hovered.value ? 'rgb(199 244 233 / 69%)' : 'rgb(0, 0, 0, 0)');

</script>

<template>
  <path
    :d="preparedPath"
    :stroke="stroke"
    :stroke-width="10"
    fill="none"
    @mouseover="hovered = true"
    @mouseleave="hovered = false"
    @click="$emit('click', $event)"
    @mousedown="$emit('mousedown', $event)"
  />
</template>

<style>
</style>
