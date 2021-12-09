<script lang="ts" setup>
import { ref, reactive, computed } from "vue";
import { useCurrentEditorState } from "../../core/useCurrentEditorState";
import JsonEditor from 'coya-json-editor'
import 'coya-json-editor/dist/style.css'

const {activeNode} = useCurrentEditorState();
const text = ref("");
const preparedValue = computed({
    get() {
        return activeNode;
    },
    set(val: any) {
        Object.keys(val)
            .forEach(key => {
                if (activeNode[key] !== val[key]) {
                    activeNode[key] = val[key];
                }
            })
    }
});
const jsonEditorConfig = reactive({
    lineNumbers: 'off',
    glyphMargin: false,
    folding: false,
    lineDecorationsWidth: 0,
    lineNumbersMinChars: 0,
    minimap: {
		enabled: false
	},
    wordWrap: "on"
})
</script>

<template>
    <div
        v-if="activeNode"
        class="border-2 rounded-md p-3 bg-white grid h-full"
        >
        <JsonEditor v-model="preparedValue" :config="jsonEditorConfig"/>
    </div>
</template>