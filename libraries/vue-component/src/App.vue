<script setup lang="ts">
import { computed, ref } from "vue";
import simpleExample from "./examples/1_simple";
import simpleExample2 from "./examples/2_simple";
import example2 from "./examples/2";
import example3 from "./examples/3";
import exampleStyle from "./examples/4_simple_style";
import exampleStylePhase from "./examples/4_simple_style_phase";
import exampleStylePhase2 from "./examples/4_simple_style_phase2";

const examples = [
    {
        label: "simpleExample",
        value: simpleExample
    },
    {
        label: "simpleExample2",
        value: simpleExample2
    },
    {
        label: "example2",
        value: example2
    },
    {
        label: "example3",
        value: example3
    },
    {
        label: "example-style",
        value: exampleStyle
    },
    {
        label: "example-style-phase",
        value: exampleStylePhase
    },
    {
        label: "example-style-phase2",
        value: exampleStylePhase2
    }
];
const currentExampleIndex = ref(6);

const config = computed(() => JSON.stringify(examples[currentExampleIndex.value].value));

</script>
<template>
    <main class="px-4 py-10 text-center text-gray-700 dark:text-gray-200">
        <Select :items="examples" v-model="currentExampleIndex" item-text="label" label="Example"/>
        <Coya :config="config" />
    </main>
</template>
