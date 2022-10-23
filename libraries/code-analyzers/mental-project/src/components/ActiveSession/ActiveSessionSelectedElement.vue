<script setup lang="ts">
const props = defineProps<{modelValue: any}>()
const emit = defineEmits(['close'])
</script>

<template>
  <v-card height="70vh" width="70vw">
    <v-card-title>
      <div flex justify-between>
        Item
        <i-ion:close-sharp @click="emit('close')" />
      </div>
    </v-card-title>
    <v-card-text h-full w-full>
      {{ modelValue?.data }}
    </v-card-text>
    
  </v-card>
</template>