<script lang="ts" setup>
import { ref } from 'vue'
import { sum } from './utils'

const count = ref(sum(1, 2))
</script>

<template>
  <div>
    {{ count }}
  </div>
</template>