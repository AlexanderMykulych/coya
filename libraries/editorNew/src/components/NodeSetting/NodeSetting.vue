<script lang="ts" setup>
import { useCurrentEditorState } from '../../libMain';
import { useNodeSettingState } from './useNodeSettingState';

const { activeNode }
    = useCurrentEditorState();

const { activeTab } = useNodeSettingState();

</script>

<template>
  <div
    v-if="activeNode"
    class="border-2 rounded-md p-3 bg-white h-full flex flex-col"
  >
    <NodeActionBar>
      <template #before>
        <div class="basis-full flex">
          <button title="Node setting" @click="activeTab = 'general'">
            <i-ic:sharp-settings />
          </button>
          <button title="CSS style" @click="activeTab = 'style'">
            <i-vscode-icons:file-type-style />
          </button>
        </div>
      </template>
    </NodeActionBar>
    <GeneralSetting v-if="activeTab === 'general'" />
    <StyleSetting v-else-if="activeTab === 'style'" />
  </div>
</template>
