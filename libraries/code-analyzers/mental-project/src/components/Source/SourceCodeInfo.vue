<script lang="ts" setup>
import { CodeInfo, isLocatedEntity } from 'coya-ts-analyzer/browser';

const { fileCodeInfoEntities, highlightCodeInfo } = useSourcePanel()
const items = computed(() => fileCodeInfoEntities.value
  .filter(isLocatedEntity)
  .map(x => ({
    title: x.id,
    value: x.id,
    subtitle: `${x.entityType}, (${x.lineStart}, ${x.columnStart}) - (${x.lineEnd}, ${x.columnEnd})`,
  })) ?? [])

const entityId = ref<string>()
const select = (id: string) => {
  highlightCodeInfo(id)
  entityId.value = id
}
const entity = computed(() => entityId.value ? fileCodeInfoEntities.value.find(x => x.id === entityId.value) : null)
</script>

<template>
  <div text-left flex="~ col" h-full>
    <div h="50%" overflow-y-auto>
      <v-list
        @click:select="select($event.id)"
      >
        <template v-for="item in items" :key="item.title">
          <v-list-item
            :title="item.title"
            :subtitle="item.subtitle"
            :value="item.value"
            active-color="primary"
          >
          </v-list-item>
        </template>
      </v-list>
    </div>
    <SourceCodeInfoDetails v-if="!!entity" :modelValue="entity" />
  </div>
</template>