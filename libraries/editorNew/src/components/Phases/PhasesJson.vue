<script lang="ts" setup>
import JsonEditor from 'coya-json-editor';
import { reactive, ref, shallowRef, watch } from 'vue';
import { useCurrentEditorState } from '../../core/useCurrentEditorState';
import { usePhases } from './usePhases';

const { initPhases } = useCurrentEditorState();

const jsonEditorConfig = reactive({
    glyphMargin: false,
    folding: true,
    // lineNumbers: 'off',
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

const { setCurrentPhase } = usePhases();
</script>

<template>
    <div class="border-2 rounded-md p-3 bg-white grid h-full">
        <JsonEditor
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
