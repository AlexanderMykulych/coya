<script lang="ts" setup>
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
    if (isPhasePath(path)) {
        return {
            heightInLines: 2
        };
    }
    return false;
};
const isPhasePath = (path: string) => !isNaN(Number(path));

const {
    setCurrentPhase,
    currentPhase,
    setNextPhase,
    setPrevPhase,
    setLastPhase,
    isLastPhaseActive,
    isStartPhaseActive,
} = usePhases();

</script>

<template>
    <div class="border-2 rounded-md p-3 bg-white flex flex-col h-full">
        <div class="flex pb-2 space-x-2">
            <button class="border-2 text-2xl" @click="setCurrentPhase(null)">
                <i-mdi:page-first :class="{'text-green-600': isStartPhaseActive}"/>
            </button>
            <button class="border-2 text-2xl" @click="setPrevPhase()">
                <i-ic:baseline-skip-previous />
            </button>
            <button class="border-2 text-2xl" @click="setNextPhase()">
                <i-ic:baseline-skip-next />
            </button>
            <button class="border-2 text-2xl" @click="setLastPhase(null)">
                <i-mdi:page-last :class="{'text-green-600': isLastPhaseActive}"/>
            </button>
        </div>
        <JsonEditor
            class="h-full"
            v-model="initPhases"
            :config="jsonEditorConfig"
            @set-editor="editor = $event.value"
            activateDefaultWidget
            :widgetFilter="widgetFilter"
        >
            <template #line-widget="{ config }">
                <template v-if="isPhasePath(config.path)">
                    <PhaseBar :config="config"/>
                </template>
            </template>
        </JsonEditor>
    </div>
</template>
