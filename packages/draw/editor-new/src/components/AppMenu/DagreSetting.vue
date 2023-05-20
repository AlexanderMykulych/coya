<script lang="ts" setup>
import { reactive, ref } from 'vue';
import JsonEditor from 'coya-json-editor';

const emit = defineEmits(['update:modelValue']);

const rankdirs = ['TB', 'BT', 'LR', 'RL'];
const align = ['UL', 'UR', 'DL', 'DR'];
const applyRank = dir => console.log(dir);
const jsonEditorConfig = reactive({
    glyphMargin: false,
    folding: true,
    lineNumbers: 'off',
    lineDecorationsWidth: 0,
    lineNumbersMinChars: 0,
    minimap: {
        enabled: false,
    },
    guides: {
        bracketPairs: 'active',
    },
});

const widgetFilter = ({ path }) => {
    return ['rankdir', 'align'].includes(path)
        ? {
            heightInLines: 2,
        }
        : false;
};

const state = ref({
    rankdir: rankdirs[0],
    align: align[0],
    nodesep: 40,
    ranksep: 40,
});
</script>

<template>
  <div class="flex flex-col h-full">
    <JsonEditor
      v-model="state"
      :config="jsonEditorConfig"
      :widget-filter="widgetFilter"
      :emit-full-object="true"
      activate-default-widget
      @update:modelValue="emit('update:modelValue', $event)"
    >
      <template #line-widget="{ config, valueChange }">
        <div v-if="config.path === 'rankdir'">
          <template v-for="item in rankdirs" :key="item">
            <button class="mr-2 border-2" :class="{'active': item === config.row.value}" @click="valueChange(item)">
              {{ item }}
            </button>
          </template>
        </div>
        <div v-else-if="config.path === 'align'">
          <template v-for="item in align" :key="item">
            <button class="mr-2 border-2" :class="{'active': item === config.row.value}" @click="valueChange(item)">
              {{ item }}
            </button>
          </template>
        </div>
      </template>
    </JsonEditor>
  </div>
</template>

<style>
.active {
    background-color: rgb(58, 116, 155);
    color: white;
}
</style>
