<script setup lang="ts">
import { changeValue, setValueByPath } from 'coya-util';
import { ref, computed, toRef, reactive } from 'vue';
import { ChangedItem } from 'coya-util/src/whatChanged';

const val = ref({
    init: {
        position: {
            x: '20',
            y: 'start.y + start.h + 20',
            w: 'start.w',
            h: 'start.h',
        },
        css: {
            fill: 'black',
        },
        label: '',
    },
    label: '',
});
const prepVal = computed({
    get() {
        return JSON.stringify(val.value, null, '\t');
    },
    set(newVal: string) {
        val.value = JSON.parse(newVal);
    },
});

const prepX = computed({
    get() {
        return val.value.init?.position?.x;
    },
    set(newVal: string) {
        if (val.value.init.position.x) {
            val.value.init.position.x = newVal;
        }
    },
});
let jsonRows = reactive({
    rows: {},
    ast: {},
    configs: [],
});
const showConfigs = ref(false);
const jsonRowsStr = computed(() => JSON.stringify(jsonRows.rows, null, '\t'));
const jsonAstStr = computed(() => JSON.stringify(jsonRows.ast, null, '\t'));
const setConfig = ({ analizingResult, configs }) => {
    jsonRows.rows = toRef(analizingResult, 'rows');
    jsonRows.ast = toRef(analizingResult, 'ast');
    jsonRows.configs = configs;
};

const allowedPath = ref(null);
const widgetFilter = ({ path }) => {
    if (path.endsWith('.css')) {
        return {
            heightInLines: 5,
        };
    }
    switch (path) {
        case 'init.css':
            return {
                heightInLines: 5,
            };
        case allowedPath.value:
            return {
                heightInLines: 3,
            };
        default:
            return false;
    }
};
const onChangeAttr = (changes: ChangedItem[]) => {
    console.log(changes);

    changeValue(val.value, changes);
};
</script>

<template>
    <div class="grid grid-cols-2 h-full">
        <div class="grid grid-cols-1 grid-rows-2">
            <!-- <textarea cols="30" rows="10" v-model="prepVal"/> -->
            <div>
                <input type="text" v-model="allowedPath" /> <button @click="showConfigs = !showConfigs">switch</button>
                <!-- <JsonEditor v-if="showConfigs" style="height: 500px" :modelValue="jsonRows.configs" />
                <JsonEditor v-else style="height: 500px" :modelValue="jsonRows.rows" /> -->
            </div>
            <div>
                <!-- <JsonEditor style="height: 500px" :modelValue="jsonRows.ast" /> -->
            </div>
        </div>
        <JsonEditor
            :modelValue="val"
            @changeAttr="onChangeAttr"
            @set-editor-config="setConfig"
            :activateDefaultWidget="true"
            :widgetFilter="widgetFilter"
        >
            <template #widget="{ config }">
                <!-- {{config.id}} -->
            </template>
            <template #line-widget="{ config }">
                <div class="bg-red-200 h-full">
                    {{ config.row.path }}
                </div>
            </template>
        </JsonEditor>
    </div>
</template>
