<script setup lang="ts">
import Projects from 'coya-store';
import { useCoyaStore } from 'coya-store';
import 'coya-store/dist/style.css';

const store = useCoyaStore();

const activeConfig = asyncComputed(async () => {
    const text = await store.activeProject.getActiveFileText();
    return {
        value: text,
        label: store.activeProject.activeFile.name,
        id: store.activeProject.activeFile.name,
    };
});

const save = (config: string) => store.activeProject.setActiveFileText(config);

const assets = {
    create: async (name: string, content: string) => {
        return await store.activeProject.createAsset(name, content);
    },
    load: async (name: string) => {
        return await store.activeProject.loadAsset(name);
    },
};

</script>
<template>
    <main class="text-center text-gray-700 dark:text-gray-200 bg-white h-full">
        <Coya
            v-if="activeConfig"
            class="row-span-11"
            :config="activeConfig.value"
            :id="activeConfig.id"
            :assets="assets"
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
            <slot name="before-projects"/>
            <Projects  />
            <slot name="after-projects"/>
        </template>
    </main>
</template>

<style></style>