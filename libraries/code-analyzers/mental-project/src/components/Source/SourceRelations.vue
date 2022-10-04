<script lang="ts" setup>
const { fileRelations, highlightEntityRelation } = useSourcePanel()

const listItems = computed(() => fileRelations.value.map(x => ({
  title: x.id,
  value: x.id,
})))

const entityId = ref<string>()
const select = (id: string, isSelected: boolean) => {
  const selectedId = isSelected ? id : ''
  highlightEntityRelation(selectedId)
  entityId.value = selectedId
}
const entity = computed(() => entityId.value ? fileRelations.value.find(x => x.id === entityId.value) : null)
</script>

<template>
  <div
    text-left
    b
    h-full
    flex="~ col"
  >
    <div h="50%" overflow-y-auto>
      <v-list
        @click:select="select($event.id, $event.value)"
      >
        <template v-for="item in listItems" :key="item.title">
          <v-list-item
            :title="item.title"
            :value="item.value"
            active-color="primary"
          >
          </v-list-item>
          <v-divider />
        </template>
      </v-list>
    </div>
    <SourceCodeInfoDetails v-if="entity" :modelValue="entity" />
  </div>
</template>