<script setup lang="ts">
import { computed, ref } from 'vue';
import { AssetConfigs } from './logic/useAssets';
import Projects from "coya-store";
import { useCoyaStore } from "coya-store";
import "coya-store/dist/style.css";

const store = useCoyaStore();
const modulesTs = Object.entries(import.meta.globEager('./examples/*.coya.ts'));
const modulesJs = Object.entries(
    import.meta.globEager('./examples/*.coya.json'),
);
const baseUrl = "./examples";
const examples = [
    ...modulesTs.map(([key, value]) => ({
        label: value.default.name,
        value: JSON.stringify(value.default),
        id: key.split('/').reverse()[0],
    })),
    ...modulesJs.map(([key, value]) => ({
        label: value.default.name,
        value: value.default,
        id: key.split('/').reverse()[0],
    })),
];
const currentExampleIndex = ref(examples.length - 1);

const config = computed(() => examples.find(x => x.value.name === "upswot"));


const assetsDir = "./examples/assets/";
const modules = import.meta.glob('./examples/assets/*')
const assets: AssetConfigs = [];
for (const path in modules) {
  assets.push({
      getImgUrl: () => new URL(path, import.meta.url)?.href,
      load: () => import(/* @vite-ignore */`${path}?raw`),
      name: path.slice(assetsDir.length),
  });
}

const activeConfig = asyncComputed(async () => {
    const handle = store.activeProject.activeFileHandel;
    if (handle) {
        const file = await handle.getFile();
        const text = await store.getFileText(file)
        return {
            value: text,
            label: file.name,
            id: file.name,
        };
    }
});

</script>
<template>
    <main class="text-center text-gray-700 dark:text-gray-200 bg-white h-full">
        <Coya v-if="activeConfig"
            class="row-span-11"
            :config="activeConfig.value"
            :id="activeConfig.id"
            :assets="assets"
        />
        <Projects v-else />
    </main>
</template>
