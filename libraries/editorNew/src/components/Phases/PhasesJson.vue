<script lang="ts" setup>
/* eslint-disable */
import { isNullOrUndefined } from 'coya-core';
import JsonEditor from 'coya-json-editor';
import { computed, reactive, ref, shallowRef, watch } from 'vue';
import { useCurrentEditorState } from '../../core/useCurrentEditorState';
import { usePhases } from './usePhases';

const { initPhases } = useCurrentEditorState();

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

const editor = shallowRef(null);

const widgetFilter = ({ path }) => {
    if (isPhasePath(path) || isPhaseStart(path)) {
        return {
            heightInLines: 2,
        };
    }
    return false;
};
const isPhasePath = (path: string) => !isPhaseStart(path) && !isNaN(Number(path));
const isPhaseStart = (path: string) => path === '';

const {
    setCurrentPhase,
    currentPhase,
    setNextPhase,
    setPrevPhase,
    setLastPhase,
    isLastPhaseActive,
    isStartPhaseActive,
} = usePhases();

const open = ref(false);

const style = reactive({
    height: computed(() => open.value ? '50vh' : undefined),
});
</script>

<template>
  <div class="border-2 rounded-md p-3 bg-white flex flex-col" :style="style">
    <div class="flex pb-2 space-x-2 justify-between">
      <button class="border-2" @click="setCurrentPhase(null)">
        <i-mdi:page-first :class="{'text-green-600': isStartPhaseActive}" />
      </button>
      <button class="border-2" @click="setPrevPhase()">
        <i-ic:baseline-skip-previous />
      </button>
      <button class="border-2" @click="setNextPhase()">
        <i-ic:baseline-skip-next />
      </button>
      <button class="border-2" @click="setLastPhase(null)">
        <i-mdi:page-last :class="{'text-green-600': isLastPhaseActive}" />
      </button>
      <button v-if="!open" class="border-2 justify-self-end" @click="open = true">
        <i-mdi:chevron-double-down :class="{'text-green-600': isLastPhaseActive}" />
      </button>
      <button v-else class="border-2 justify-self-end" @click="open = false">
        <i-mdi:chevron-double-up :class="{'text-green-600': isLastPhaseActive}" />
      </button>
    </div>
    <JsonEditor
      v-if="open"
      v-model="initPhases"
      class="h-full"
      :config="jsonEditorConfig"
      :widget-filter="widgetFilter"
      :emit-full-object="true"
      activate-default-widget
      @set-editor="editor = $event.value"
    >
      <template #line-widget="{ config }">
        <template v-if="isPhasePath(config.path)">
          <PhaseBar :config="config" />
        </template>
        <template v-else="isPhaseStart(config.path)">
          <PhasesStart :config="config" />
        </template>
      </template>
    </JsonEditor>
  </div>
</template>
