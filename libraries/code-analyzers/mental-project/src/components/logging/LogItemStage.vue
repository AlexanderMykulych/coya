<script lang="ts" setup>
import { TrackStage } from 'coya-ts-analyzer/browser';

const props = defineProps<{ modelValue: TrackStage }>()

const colorMapping = [{
  stage: TrackStage.Start,
  color: 'green',
}, {
  stage: TrackStage.Finish,
  color: 'blue',
}, {
  stage: TrackStage.Error,
  color: 'pink',
}]
const color = computed(() => colorMapping.find(x => x.stage === props.modelValue)?.color)
</script>

<template>
  <v-chip
    class="ma-2"
    :color="color"
    label
    text-color="white"
  >
    {{ modelValue }}
  </v-chip>
</template>
