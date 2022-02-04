<script lang="ts" setup>
/* eslint-disable */
import type { WidgetConfig } from 'coya-json-editor';
import { computed } from 'vue';
import { usePhases } from '../usePhases';

const props = defineProps<{
    config: WidgetConfig
}>();

const { setCurrentPhase, currentPhase, phaseCount, addNewPhase } = usePhases();
const isSelected = computed(() => currentPhase.value == props.config.path);
const index = computed(() => Number(props.config.path));
</script>

<template>
  <div class="h-full text-2xl flex text-gray-500">
    <button
      class="cursor-finger h-full "
      title="Play this phase"
      @click="setCurrentPhase(index)"
    >
      <i-mdi:play-box v-if="isSelected" class="text-green-600" />
      <i-ic:round-play-arrow v-else />
    </button>
    <button title="Play prev phase">
      <i-ic:baseline-skip-previous
        class="cursor-finger h-full"
        @click="setCurrentPhase(index - 1)"
      />
    </button>
    <button v-if="phaseCount - 1 > index" title="Play new phase">
      <i-ic:baseline-skip-next
        class="cursor-finger h-full"
        @click="setCurrentPhase(index + 1)"
      />
    </button>
    <button title="Add new phase after this">
      <i-fluent:tab-new-20-filled
        class="cursor-finger h-full"
        @click="addNewPhase(index)"
      />
    </button>
  </div>
</template>
