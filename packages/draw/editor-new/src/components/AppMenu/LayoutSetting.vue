<script lang="ts" setup>
import { computed, ref } from 'vue';
import { getCurrentEditor, useCurrentEditorState } from '../../libMain';
import { layouts } from './layouts';

const editor = getCurrentEditor();

const { applyPositioning } = useCurrentEditorState();
const label = computed(() => editor.enable ? editor.state.openLayoutSetting : null);
const layout = computed(() => layouts.find(x => x.name === label.value));

const layoutSetting = ref<any>(null);
const applySetting = () => layout.value && layoutSetting.value
    ? applyPositioning({
        ...layout.value,
        config: {
            layout: {
                ...layoutSetting.value,
                workerEnabled: true,
            },
        },
        settingComponent: undefined,
    })
    : null;
</script>

<template>
  <div class="border-2 rounded-md p-3 bg-white h-full flex flex-col justify-between">
    <component :is="layout?.settingComponent" v-if="layout?.settingComponent" @update:modelValue="layoutSetting = $event" />
    <div class="flex flex-row">
      <button @click="applySetting">
        Apply
      </button>
    </div>
  </div>
</template>
