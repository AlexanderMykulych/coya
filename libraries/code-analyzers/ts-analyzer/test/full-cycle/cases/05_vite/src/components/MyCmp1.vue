<script lang="ts" setup>
import { ref } from 'vue'
import { utilFn } from '../utils/helper'

const count = ref(utilFn(1, 2))
</script>

<template>
  <div>
    {{ count }}
  </div>
</template>