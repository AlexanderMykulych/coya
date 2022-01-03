<script lang="ts" setup>
import rough from 'roughjs';

const props = defineProps<{
    w: number;
    h: number;
    css: any;
}>();
const gEl = ref<SVGSVGElement | null>(null);
const seed = Math.random() * 1000;
const rc = computed(() => (gEl.value ? rough.svg(gEl.value).generator : null));
const paths = computed(() => {
    if (isNaN(props.w) || isNaN(props.h) || !rc.value || !gEl.value) {
        return;
    }
    return rc.value.toPaths(
        rc.value.rectangle(5, 5, props.w - 10, props.h - 10, {
            ...props.css,
            seed,
        }),
    );
});
</script>

<template>
    <g ref="gEl">
        <path v-for="path in paths" v-bind="path" />
    </g>
</template>
