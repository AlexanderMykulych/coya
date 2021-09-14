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
    <div class="grid grid-rows-1 grid-flow-col gap-2">
        <div class="col-span-4 grid grid-rows-1 grid-flow-col">
            <button @click="enable" class="btn btn-blue mr-4">{{ isEnable ? 'Stop drawing' : "Draw" }}</button>
            <button class="btn btn-blue mr-4" @click="drauu?.undo">Undo</button>
            <button class="btn btn-blue mr-4" @click="drauu?.redo">Redo</button>
            <button class="btn btn-blue mr-4" @click="drauu?.clear">Clear</button>
            <button class="btn btn-blue mr-4" @click="activateBrush('stylus')">Stylus</button>
            <button class="btn btn-blue mr-4" @click="activateBrush('draw')">Draw</button>
            <button class="btn btn-blue mr-4" @click="activateBrush('line')">Line</button>
            <button class="btn btn-blue mr-4" @click="activateBrush('line', true)">Arrow</button>
            <button class="btn btn-blue mr-4" @click="activateBrush('rectangle', true)">Rectangle</button>
            <button class="btn btn-blue mr-4" @click="activateBrush('ellipse')">Ellipse</button>

            <ColorPickerButton v-model="color" />
            <input type="range" min="0.5" max="30" step="0.5" v-model="size"/>
            
            <button class="btn btn-blue mr-4" @click="setDashArray()">Solid</button>
            <button class="btn btn-blue mr-4" @click="setDashArray('14')">Dashed</button>
            <button class="btn btn-blue mr-4" @click="setDashArray('1 7')">Dotted</button>

        </div>
        <button @click="$emit('back')" class="btn btn-blue mr-4">Back</button>
        <button @click="$emit('next')" class="btn btn-blue">Next</button>
    </div>
</template>