<script setup lang="ts">
import { asyncComputed } from '@vueuse/core';
import { computed, ref } from 'vue';
import { useAssets } from '../../logic/useAssets';

const props = defineProps<{
    coya: string
    id: string
}>();

const { getText } = useAssets();

const isCoyaDiagram = computed(() => !!props.coya);
const coyaDiagram = asyncComputed(async() => isCoyaDiagram.value ? await getText(props.coya) : null);

</script>

<template>
  <CoyaSettings v-if="coyaDiagram">
    <Coya
      :id="id"
      :config="coyaDiagram"
      class="w-full h-full"
    />
  </CoyaSettings>
</template>
