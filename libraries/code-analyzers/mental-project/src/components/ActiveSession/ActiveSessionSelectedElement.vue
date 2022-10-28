<script setup lang="ts">
defineProps<{modelValue: any}>()
const emit = defineEmits(['close', 'open-full', 'fold-full'])
</script>

<template>
  <v-card height="70vh" width="70vw" overflow-y="hidden">
    <v-card-title>
      <div flex justify-between>
        Item
        <div flex>
          <slot name="before-header-icons" />
          <i-ion:close-sharp @click="emit('close')" />
        </div>
      </div>
    </v-card-title>
    <v-card-text h-full w-full flex>
      <ActiveSessionSelectedItemLeftPanel class="w-20%"/>
      <div class="w-80%">
        <SourceRightPanel />
      </div>
    </v-card-text>
  </v-card>
</template>