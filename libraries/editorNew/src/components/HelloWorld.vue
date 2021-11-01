<script setup lang="ts">
import { onMounted, onScopeDispose, ref, shallowRef } from 'vue'
import { EnabledEditor } from '../core';
import { enableEditor } from '../core/enableEditor';
import test from "./test.vue";

defineProps<{ msg: string }>()

var svgEl = ref(null);
let testComponent = ref(null);
const config = ref({
	"name": "vue-lifecycle-json",
	"blocks": {
		"start": {
			"label": "app = Vue.createApp(options); app.mount(el)"
		}
	},
	"phases": [
		{
			"newBlock": {
				"init": "init events & lifecycle"
			},
			"connect": {
				"from": "start",
				"to": "init"
			}
		},
		{
			"newBlock": {
				"initInject": "Init injections & reactivity"
			},
			"connect": {
				"from": "init",
				"to": "initInject"
			}
		},
		{
			"newBlock": {
				"beforeCreate": "beforeCreate"
			},
			"connect": {
				"from": "init",
				"to": "beforeCreate",
				"name": "line_init_beforeCreate"
			}
		}
	],
	"style": {
		"blocks": {
			"_": {
				"css": {
					"color": "white",
					"fill": "#3ab881",
					"fontSize": "0.1em"
				}
			},
			"start": {
				"position": {
					"x": 10,
					"y": 10,
					"w": 100,
					"h": 60
				},
				"css": {
					"fill": "#3e6b94"
				}
			},
			"init": {
				"position": {
					"x": "start.x",
					"y": "start.y + start.h + 20",
					"w": "start.w",
					"h": "start.h"
				}
			},
			"initInject": {
				"position": {
					"x": "init.x",
					"y": "init.y + start.h + 20",
					"w": "init.w",
					"h": "init.h"
				}
			},
			"beforeCreate": {
				"position": {
					"x": "init.x - init.w - 40",
					"y": "init.y + init.h",
					"w": "init.w",
					"h": "initInject.y - init.y - init.h"
				},
				"css": {
					"fill": "none",
					"color": "red",
					"stroke": "red"
				}
			},
			"line_init_beforeCreate": {
				"position": {
					"x1": "line_1.x1",
					"y1": "line_1.y1 + (line_1.y2 - line_1.y1) / 2",
					"y2": "line_1.y1 + (line_1.y2 - line_1.y1) / 2"
				},
				"css": {
					"fill": "red",
					"stroke": "red",
					"stroke-dasharray": 3
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
    id: "start"
}
</script>

<template>
    <editor.component v-if="!!editor"/>
    <div class="h-full relative">
        <svg width="95%" height="700" ref="svgEl" class="rounded-lg border-3 shadow-3 ml-10">
            <testComponent v-if="testComponent" :positioning="config.style.blocks.start.position" :block="block" />
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
