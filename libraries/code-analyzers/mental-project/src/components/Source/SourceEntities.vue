<script lang="ts" setup>
import { useSourcePanel } from '../../store/useSourcePanel';

const { fileEntities, highlightEntity } = useSourcePanel()

const listItems = computed(() => fileEntities.value.map(x => ({
  title: prepareTitle(x.id),
  value: x.id,
  subtitle: x.entityType,
})))

const prepareTitle = (id: string) => id.substring(id.lastIndexOf('/'))
</script>

<template>
  <div
    text-left
    b
    h-full
  >
    <v-list
      @click:select="highlightEntity($event.id)"
    >
      <template v-for="item in listItems" :key="item.title">
        <v-list-item
          :title="item.title"
          :subtitle="item.subtitle"
          :value="item.value"
          active-color="primary"
        >
        </v-list-item>
        <v-divider />
      </template>
    </v-list>
  </div>
</template>