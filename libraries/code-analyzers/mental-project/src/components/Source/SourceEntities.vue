<script lang="ts" setup>
import { useSourcePanel } from '../../store/useSourcePanel';

const { fileEntities, activeFileId, highlightEntity } = useSourcePanel()

const listItems = computed(() => fileEntities.value.map(x => ({
  title: `${x.id.replace(activeFileId.value ?? '', '')}`,
  value: x.id,
})))
</script>

<template>
  <v-list
    text-left
    b
    :items="listItems"
    @click:select="highlightEntity($event.id)"
  ></v-list>
</template>