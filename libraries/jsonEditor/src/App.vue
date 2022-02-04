<script setup lang="ts">
import { changeValue } from 'coya-util';
import type { ChangedItem } from 'coya-util/dist/src/ChangedItem';
import { reactive, ref, toRef } from 'vue';

const val = ref([{
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
}]);
const jsonRows = reactive({
    rows: {},
    ast: {},
    configs: [],
});
const showConfigs = ref(false);
const setConfig = ({ analizingResult, configs }) => {
    jsonRows.rows = toRef(analizingResult, 'rows');
    jsonRows.ast = toRef(analizingResult, 'ast');
    jsonRows.configs = configs;
};

const allowedPath = ref(null);
const allowAll = ref(false);
const widgetFilter = ({ path }) => {
    if (allowAll.value)
        return true;

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
    changeValue(val.value, changes);
};
</script>

<template>
  <div class="grid grid-cols-2 h-full">
    <div class="grid grid-cols-1 grid-rows-2">
      <div>
        <input v-model="allowedPath" type="text"> <button @click="showConfigs = !showConfigs">
          switch
        </button>
        <JsonEditor v-if="showConfigs" style="height: 500px" :model-value="jsonRows.configs" />
        <JsonEditor v-else style="height: 500px" :model-value="jsonRows.rows" />
      </div>
      <div>
        <JsonEditor style="height: 500px" :model-value="jsonRows.ast" />
      </div>
    </div>
    <JsonEditor
      :model-value="val"
      :activate-default-widget="true"
      :widget-filter="widgetFilter"
      @set-editor-config="setConfig"
      @changeAttr="onChangeAttr"
    >
      <template #widget>
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
