<script setup lang="ts">
import { ref } from 'vue'
import { enableEditor } from '../core/enableEditor';

defineProps<{ msg: string }>()

var svgEl = ref(null);

enableEditor({
    svg: svgEl,
    config: {},
    initialConfig: {},
    id: "test"
});
const count = ref(0)
</script>

<template>
  <svg width="400" height="110" ref="svgEl">

  </svg>
</template>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
