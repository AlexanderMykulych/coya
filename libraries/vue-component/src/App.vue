<script setup lang="ts">
import path from "path";
import { computed, ref } from "vue";
const modulesTs = Object.entries(import.meta.globEager('./examples/*.coya.ts'));
const modulesJs = Object.entries(import.meta.globEager('./examples/*.coya.json'));
const examples = [
    ...modulesTs
        .map(([key, value]) => ({
            label: value.default.name,
            value: JSON.stringify(value.default),
            id: key.split('/').reverse()[0],
        })),
    ...modulesJs.map(([key, value]) => ({
            label: value.default.name,
            value: value.default,
            id: key.split('/').reverse()[0],
        }))
];
const currentExampleIndex = ref(examples.length - 1);

const config = computed(() => examples[currentExampleIndex.value]);

</script>
<template>
    <main
        class="px-4 py-10 text-center text-gray-700 dark:text-gray-200 bg-white h-full grid grid-cols-1 grid-rows-12"
    >
        <Select
            class="row-span-1"
            :items="examples"
            v-model="currentExampleIndex"
            item-text="label"
            label="Example"
        />
        <Coya class="row-span-11" :config="config.value" :id="config.id" />
    </main>
</template>
