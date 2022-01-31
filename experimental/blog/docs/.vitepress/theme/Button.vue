<script setup lang="ts">
const props = defineProps<{label: string}>();
const emit = defineEmits(['click']);
</script>

<template>
<button
    @click="emit('click', $event)"
    class="p-2 pl-5 pr-5 bg-blue-500 text-gray-100 text-lg rounded-lg focus:border-4 border-blue-300">
    {{label}}
</button>
</template>