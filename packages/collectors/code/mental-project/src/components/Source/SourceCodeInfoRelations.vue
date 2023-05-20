<script lang="ts" setup>
import { isLocatedEntity } from 'coya-ts-analyzer/browser';

const { fileCodeInfoRelations, highlightRelation } = useSourcePanel()
const items = computed(() => fileCodeInfoRelations.value
  .filter(isLocatedEntity)
  .map(x => ({
    title: x.id,
    value: x.id,
    subtitle: `${x.id}, (${x.lineStart}, ${x.columnStart}) - (${x.lineEnd}, ${x.columnEnd})`,
  })) ?? [])

const relationId = ref<string>()
const select = (id: string) => {
  highlightRelation(id)
  relationId.value = id
}
const relation = computed(() => relationId.value
  ? fileCodeInfoRelations.value.find(x => x.id === relationId.value)
  : null,
)

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
    <SourceCodeInfoDetails v-if="!!relation" :modelValue="relation" />
  </div>
</template>