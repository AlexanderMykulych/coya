<script setup lang="ts">
import type { CoyaSetting } from 'coya-core';
import { provide, reactive } from 'vue';

provide<CoyaSetting>('coya-settings', reactive({
    readOnly: true,
}));
</script>

<template>
  <slot />
</template>
