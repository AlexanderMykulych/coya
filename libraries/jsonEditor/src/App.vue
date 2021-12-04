<script setup lang="ts">
import { ref, computed } from 'vue';

const val = ref({
    init: {
        position: {
            x: '20',
            y: 'start.y + start.h + 20',
            w: 'start.w',
            h: 'start.h',
        },
    },
});
const prepVal = computed({
    get() {
        return JSON.stringify(val.value, null, "\t");
    },
    set(newVal: string) {
        val.value = JSON.parse(newVal);
    }
})

const prepX = computed({
    get() {
        return val.value.init.position.x;
    },
    set(newVal: string) {
        val.value.init.position.x = newVal;
    }
})
</script>

<template>
<div class="grid grid-cols-2">
    <div class="grid grid-cols-1 grid-rows-2">
        <textarea cols="30" rows="10" v-model="prepVal"/>
        <input type="text" v-model="prepX">
    </div>
    <JsonEditor v-model="val" />
</div>
</template>
