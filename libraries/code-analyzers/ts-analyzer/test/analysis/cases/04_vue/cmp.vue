<script lang="ts" setup>
import { ref } from 'vue'
import { utilFn } from './utils'

const count = ref(utilFn(1, 2))
</script>

<template>
  <div>
    {{ count }}
  </div>
</template>