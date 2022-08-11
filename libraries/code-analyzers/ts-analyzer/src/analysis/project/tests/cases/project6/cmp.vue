<script setup>
import { fn1 } from './utils/util';
const val = ref(fn1(1))
</script>

<template>
  <div>
    {{val}}
  </div>
</template>