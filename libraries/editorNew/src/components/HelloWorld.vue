<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { EnabledEditor } from '../core';
import { enableEditor } from '../core/enableEditor';
import test from "./test.vue";

defineProps<{ msg: string }>()

var svgEl = ref(null);
let testComponent = ref(null);
const config = ref({
    name: "demo",
    "blocks": {
        "test": {
            "label": "app = Vue.createApp(options); app.mount(el)"
        }
    },
    phases: [],
    style: {
        blocks: {
            test: {
                position: {
                    x: 10,
                    y: 10,
                    w: 20,
                    h: 20
                }
            }
        }
    }
});
onMounted(() => {
    const editor = enableEditor({
        svg: svgEl,
        config,
        initialConfig: config,
        id: "test"
    });
    testComponent.value = editor.wrap(test);
});

const block = {
    id: "test"
}
</script>

<template>
    <svg width="2000" height="1000" ref="svgEl">
        <testComponent v-if="testComponent" :positioning="config.style.blocks.test.position" :block="block" />
    </svg>
</template>

<style scoped>
a {
    color: #42b983;
}

label {
    margin: 0 0.5em;
    font-weight: bold;
}

code {
    background-color: #eee;
    padding: 2px 4px;
    border-radius: 4px;
    color: #304455;
}
</style>
