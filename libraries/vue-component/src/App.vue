<script setup lang="ts">
import { computed, ref } from "vue";
const modules = Object.entries(import.meta.globEager('./examples/*.coya.ts'));
const examples = modules
    .map(([key, value]) => ({
        label: value.default.name,
        value: value.default
    }));
const currentExampleIndex = ref(modules.length - 1);

const config = computed(() => JSON.stringify(examples[currentExampleIndex.value].value));

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
        <Coya class="row-span-11" :config="config" />
    </main>
</template>
