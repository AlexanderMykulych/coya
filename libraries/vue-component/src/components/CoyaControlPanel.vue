<script setup lang="ts">
import { createDrauu, Drauu } from "drauu";
import { ref, watch } from "vue";

const props = defineProps<{ svgEl: SVGSVGElement | null }>();
const emit = defineEmits(["back", "next", "enable"]);

const drauu = ref<Drauu | null>(null);
const isEnable = ref(false);
const color = ref("rgba(229, 13, 84, 0.66)");
const size = ref(5);

watch(() => props.svgEl, svgEl => {
    if (svgEl) {
        drauu.value = createDrauu({
            el: svgEl,
            brush: {
                mode: 'stylus', // 'line', 'reactangle', 'ellipse'
                color: color.value,
                size: size.value,
            }
        });
    }
}, {
    immediate: true
})

watch(() => color.value, val => {
    if (drauu.value) {
        drauu.value.brush.color = val;
    }
});
watch(() => size.value, val => {
    if (drauu.value) {
        drauu.value.brush.size = val;
    }
});

const enable = () => {
    isEnable.value = !isEnable.value;
    emit("enable", isEnable.value);
}
const activateBrush = (mode: string, arrowEnd: boolean = false) => {
    if (drauu.value) {
        Object.assign(drauu.value.brush, { mode, arrowEnd });
    }
}
const setDashArray = (val?: string) => {
    if (drauu.value) {
        drauu.value.brush.dasharray = val;
    }
}
</script>

<template>
    <div class="coya-panel grid grid-rows-1 grid-flow-col gap-2">
        <div class="col-span-4 grid grid-rows-1 grid-flow-col auto-rows-auto">
            <button
                @click="enable"
                class="btn btn-blue mr-4"
            >{{ isEnable ? 'Stop drawing' : "Draw" }}</button>
            <button class="btn btn-blue" @click="drauu?.undo" >
                <carbon-undo />
            </button>
            <button class="btn btn-blue" @click="drauu?.redo">
                <carbon-redo  />
            </button>
            <button class="btn btn-blue" @click="drauu?.clear">
                <carbon-clean  />
            </button>
            <button class="btn btn-blue" @click="activateBrush('stylus')">
                <entypo-brush  />
            </button>
            <button class="btn btn-blue" @click="activateBrush('draw')">
                <raphael-pensil  />
            </button>
            <button class="btn btn-blue" @click="activateBrush('line')">
                <octicon:dash-16  />
            </button>
            <button class="btn btn-blue" @click="activateBrush('line', true)">
                <bi:arrow-up-right  />
            </button>
            <button class="btn btn-blue" @click="activateBrush('rectangle', true)">
                <gis:rectangle-o  />
            </button>
            <button class="btn btn-blue" @click="activateBrush('ellipse')">
                <mdi:ellipse-outline  />
            </button>

            <ColorPickerButton v-model="color" />
            <input class="mr-4" type="range" min="0.5" max="30" step="0.5" v-model="size" />
            <button class="btn btn-blue" @click="setDashArray()">
                <octicon:dash-16  />
            </button>
            <button class="btn btn-blue" @click="setDashArray('14')">
                <radix-icons:border-dashed  />
            </button>
            <button class="btn btn-blue" @click="setDashArray('1 7')">
                <ant-design:small-dash-outlined  />
            </button>
        </div>
        <button @click="$emit('back')" class="btn btn-blue mr-4">Back</button>
        <button @click="$emit('next')" class="btn btn-blue">Next</button>
    </div>
</template>

<style>
.coya-panel button {
    width: fit-content;
}
</style>