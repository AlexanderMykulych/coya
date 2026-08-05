<script setup lang="ts">
import { ref } from 'vue'

const path = ref('M 0 0 L 100 100')
const isDragging = ref(false)
const dragPoint = ref<'start' | 'end' | null>(null)

const onDragStart = (point: 'start' | 'end') => (e: PointerEvent) => {
  dragPoint.value = point
  isDragging.value = true
  e.stopPropagation()
}

const onDragEnd = () => {
  dragPoint.value = null
  isDragging.value = false
}
</script>

<template>
  <svg class="arrow-container">
    <circle cx="0" cy="0" r="6" fill="#ff4d4f" @pointerdown.stop="onDragStart('start')" />
    <path :d="path" stroke="black" stroke-width="2" />
    <circle cx="100" cy="100" r="6" fill="#1677ff" @pointerdown.stop="onDragStart('end')" />
  </svg>
</template>
