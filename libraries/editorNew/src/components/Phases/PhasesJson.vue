<script lang="ts" setup>
import JsonEditor from 'coya-json-editor';
import { reactive, ref, shallowRef, watch } from 'vue';
import { useCurrentEditorState } from "../../core/useCurrentEditorState";

const {initPhases} = useCurrentEditorState();

const jsonEditorConfig = reactive({
    glyphMargin: false,
    folding: true,
    // lineNumbers: 'off',
    lineDecorationsWidth: 0,
    lineNumbersMinChars: 0,
    minimap: {
		enabled: false
	},
    guides: {
        bracketPairs: "active",
    }
});

const editor = shallowRef(null);
watch(() => editor.value, editor => {
    if (editor) {
        // editor.trigger('fold', 'editor.foldLevel3');
    }
})
</script>

<template>
    <div
        class="border-2 rounded-md p-3 bg-white grid h-full"
        >
        <JsonEditor
            v-model="initPhases"
            :config="jsonEditorConfig"
            @set-editor="editor = $event.value"
            activateDefaultWidget
        >
            <template #widget="{config}">
                {{config.row.start.line}}
            </template>
        </JsonEditor>
    </div>
</template>
