<script lang="ts" setup>
import rough from 'roughjs';
import { strictComputed } from './strictComputed';

const props = defineProps<{
    w: number
    h: number
    css: any
}>();
const gEl = ref<SVGSVGElement | null>(null);
const seed = Math.floor(Math.random() * 10000) + 1;
const rc = computed(() => (gEl.value ? rough.svg(gEl.value).generator : null));
const w = computed(() => Math.round((props.w + Number.EPSILON) * 100) / 100);
const h = computed(() => Math.round((props.h + Number.EPSILON) * 100) / 100);
const paths = strictComputed(
    () => [w.value, h.value, props.css, !rc.value, !gEl.value],
    () => {
        if (isNaN(w.value) || isNaN(h.value) || !rc.value || !gEl.value)
            return;

        return rc.value.toPaths(
            rc.value.rectangle(5, 5, w.value - 10, h.value - 10, {
                ...props.css,
                seed,
            }),
        );
    }, { immediate: true });
</script>

<template>
  <g ref="gEl" :style="css">
    <path v-for="path in paths" v-bind="path" />
  </g>
</template>
