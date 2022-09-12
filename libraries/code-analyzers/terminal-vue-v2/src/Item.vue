<script lang="ts" setup>
import type { Ref } from 'vue';

const props = defineProps<{
  label: string
  loading: Ref<boolean>
  state: any
}>()

const { loading, state } = props

const n = ref(0)
useInterval(() => {
  n.value++
}, 300)

const loadingSpaces = computed(() => ' '.repeat(n.value % 4))
</script>

<template>
  {{label}}: {{loading ? loadingSpaces + '🏎' : state}} <NewLine /> {{n}}
</template>
