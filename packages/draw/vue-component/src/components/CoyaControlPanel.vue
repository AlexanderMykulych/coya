<script setup lang="ts">
import type { Drauu } from 'drauu';
import { createDrauu } from 'drauu';
import { ref, watch } from 'vue';

const props = defineProps<{ svgEl: SVGSVGElement | null }>();
const emit = defineEmits(['back', 'next', 'enable', 'save']);

const drauu = ref<Drauu | null>(null);
const isEnable = ref(false);
const color = ref('rgba(229, 13, 84, 0.66)');
const size = ref(5);

watch(() => props.svgEl, (svgEl) => {
    if (svgEl) {
        drauu.value = createDrauu({
            el: svgEl,
            brush: {
                mode: 'stylus', // 'line', 'reactangle', 'ellipse'
                color: color.value,
                size: size.value,
            },
        });
    }
}, {
    immediate: true,
});

watch(() => color.value, (val) => {
    if (drauu.value)
        drauu.value.brush.color = val;
});
watch(() => size.value, (val) => {
    if (drauu.value)
        drauu.value.brush.size = val;
});

const enable = () => {
    isEnable.value = !isEnable.value;
    emit('enable', isEnable.value);
};
const activateBrush = (mode: string, arrowEnd = false) => {
    if (drauu.value)
        Object.assign(drauu.value.brush, { mode, arrowEnd });
};
const setDashArray = (val?: string) => {
    if (drauu.value)
        drauu.value.brush.dasharray = val;
};
</script>

<template>
  <div class="coya-panel grid grid-rows-1 grid-flow-col gap-2">
    <div class="col-span-4 grid grid-rows-1 grid-flow-col auto-rows-auto">
      <button
        class="border-2"
        @click="enable"
      >
        <ic:baseline-draw />
      </button>
      <template v-if="isEnable">
        <button class="border-2" @click="drauu?.undo">
          <carbon-undo />
        </button>
        <button class="border-2" @click="drauu?.redo">
          <carbon-redo />
        </button>
        <button class="border-2" @click="drauu?.clear">
          <carbon-clean />
        </button>
        <button class="border-2" @click="activateBrush('stylus')">
          <entypo-brush />
        </button>
        <button class="border-2" @click="activateBrush('draw')">
          <raphael-pensil />
        </button>
        <button class="border-2" @click="activateBrush('line')">
          <octicon:dash-16 />
        </button>
        <button class="border-2" @click="activateBrush('line', true)">
          <bi:arrow-up-right />
        </button>
        <button class="border-2" @click="activateBrush('rectangle', true)">
          <gis:rectangle-o />
        </button>
        <button class="border-2" @click="activateBrush('ellipse')">
          <mdi:ellipse-outline />
        </button>

        <ColorPickerButton v-model="color" />
        <input v-model="size" class="mr-4" type="range" min="0.5" max="30" step="0.5">
        <button class="border-2" @click="setDashArray()">
          <octicon:dash-16 />
        </button>
        <button class="border-2" @click="setDashArray('14')">
          <radix-icons:border-dashed />
        </button>
        <button class="border-2" @click="setDashArray('1 7')">
          <ant-design:small-dash-outlined />
        </button>
      </template>
    </div>
    <button class="border-2" @click="$emit('save')">
      <mdi:content-save />
    </button>
  </div>
</template>

<style>
.coya-panel button {
    width: fit-content;
}
</style>
