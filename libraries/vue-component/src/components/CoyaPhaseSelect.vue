<script setup lang="ts">
defineProps<{phases?: string[], modelValue: string}>();

</script>

<template>
    <div v-if="phases">
        <select :value="modelValue" @change="val => $emit('update:modelValue', val.target?.value)">
            <option v-for="phase in phases" :key="phase">{{phase}}</option>
        </select>
    </div>
</template>