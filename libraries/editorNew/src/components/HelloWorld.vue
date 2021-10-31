<script setup lang="ts">
import { onMounted, onScopeDispose, ref, shallowRef } from 'vue'
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
                    w: 100,
                    h: 100
                }
            }
        }
    }
});
let editor = shallowRef();
onMounted(() => {
    editor.value = enableEditor({
        svg: svgEl,
        config,
        initialConfig: config,
        id: "test"
    });
    testComponent.value = editor.value.wrap(test);
    
});

const block = {
    id: "test"
}
</script>

<template>
    <editor.component v-if="!!editor"/>
    <div class="h-full relative">
        <svg width="95%" height="700" ref="svgEl" class="rounded-lg border-3 shadow-3 ml-10">
            <testComponent v-if="testComponent" :positioning="config.style.blocks.test.position" :block="block" />
        </svg>
    </div>
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
