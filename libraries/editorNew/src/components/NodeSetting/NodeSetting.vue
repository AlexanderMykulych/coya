<script lang="ts" setup>
import { ref } from "vue";
import { useCurrentEditorState } from "../../core/useCurrentEditorState";

const {activeNode} = useCurrentEditorState();
const text = ref("");
</script>

<template>
    <div class="border-2 rounded-md p-3 bg-white grid h-full"  v-if="activeNode">
        node:
        <CoyaInput v-model="activeNode.name" label="name" />
        <CoyaInput v-model="activeNode.label" label="label" />
        <CoyaInput v-model="activeNode.x" label="x" />
        <CoyaInput v-model="activeNode.y" label="y" />
        <CoyaInput v-model="activeNode.w" label="w" />
        <CoyaInput v-model="activeNode.h" label="h" />
    </div>
</template>