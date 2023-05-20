<script setup lang="ts">
import { asyncComputed } from '@vueuse/core';
import Projects, { fileSystemAssets } from 'coya-store';
import 'coya-store/dist/style.css';

const fileAssets = fileSystemAssets();
const store = fileAssets.store;

const activeConfig = asyncComputed(async() => {
    const text = await store.activeProject.getActiveFileText();
    return text
        ? {
            value: text,
            label: store.activeProject.activeFile?.name,
            id: store.activeProject.activeFile?.name,
        }
        : null;
});

const save = (config: string) => store.activeProject.setActiveFileText(config);

</script>
<template>
  <main class="text-center text-gray-700 dark:text-gray-200 bg-white h-full">
    <Coya
      v-if="activeConfig"
      :id="activeConfig.id"
      class="row-span-11"
      :config="activeConfig.value"
      :assets="fileAssets.assets"
      @update:config="save"
    >
      <template #left-menu>
        <button class="border-2" @click="activeConfig = null">
          <mdi:arrow-left-bold-box-outline class="pb-1" />
        </button>
      </template>
      <template v-for="(_, slotName) in $slots" #[slotName]="slotData">
        <slot :name="slotName" v-bind="slotData" />
      </template>
    </Coya>
    <template v-else>
      <slot name="before-projects" />
      <Projects />
      <slot name="after-projects" />
    </template>
  </main>
</template>

<style></style>
