<script setup lang="ts">
import { computed, ref } from "vue";
import simpleExample from "./examples/1_simple";
import example2 from "./examples/2";
import example3 from "./examples/3";

const examples = [
    {
        label: "simpleExample",
        value: simpleExample
    },
    {
        label: "example2",
        value: example2
    },
    {
        label: "example3",
        value: example3
    }
];
const currentExampleIndex = ref(0);

const config = computed(() => JSON.stringify(examples[currentExampleIndex.value].value));

</script>
<template>
    <main class="px-4 py-10 text-center text-gray-700 dark:text-gray-200">
        <Select :items="examples" v-model="currentExampleIndex" item-text="label" label="Example"/>
        <textarea
            v-model="config"
            class="resize border rounded-md"
            name="config"
            id
            cols="30"
            rows="10"
        ></textarea>
        <Coya :config="config" />
    </main>
</template>
