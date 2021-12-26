<script setup lang="ts">
import { computed, ref } from 'vue';
const modulesTs = Object.entries(import.meta.globEager('./examples/*.coya.ts'));
const modulesJs = Object.entries(
    import.meta.globEager('./examples/*.coya.json'),
);
const assetsDir = "./examples/assets/";
const assets = Object.entries(import.meta.globEager(`./examples/assets/*`));
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
const loadedAssets = assets.map(([name, module]) => {
    return { name: name.slice(assetsDir.length), href: new URL(module.default, import.meta.url).href };
});
const currentExampleIndex = ref(examples.length - 1);

const config = computed(() => examples[currentExampleIndex.value]);
</script>
<template>
    <main class="text-center text-gray-700 dark:text-gray-200 bg-white h-full">
        <Coya
            class="row-span-11"
            :config="config.value"
            :id="config.id"
            :assets="loadedAssets"
        />
    </main>
</template>
