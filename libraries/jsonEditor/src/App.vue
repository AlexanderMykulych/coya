<script setup lang="ts">
import { setValueByPath } from 'coya-util';
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
    },
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
});
const jsonRowsStr = computed(() => JSON.stringify(jsonRows.rows, null, '\t'));
const jsonAstStr = computed(() => JSON.stringify(jsonRows.ast, null, '\t'));
const setConfig = ({ analizingResult }) => {
    jsonRows.rows = toRef(analizingResult, 'rows');
    jsonRows.ast = toRef(analizingResult, 'ast');
};

const allowedPath = ref(null);
const widgetFilter = ({ path }) => {
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
const onChangeAttr = (change: ChangedItem[]) => {
    setValueByPath(val.value, change[0].val, change[0].fullPath);
}
</script>

<template>
    <div class="grid grid-cols-2">
        <div class="grid grid-cols-1 grid-rows-2">
            <!-- <textarea cols="30" rows="10" v-model="prepVal"/> -->
            <div>
                <input type="text" v-model="allowedPath" />
                <JsonEditor style="height: 500px" :modelValue="jsonRows.rows" />
            </div>
            <div>
                <JsonEditor style="height: 500px" :modelValue="jsonRows.ast" />
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
