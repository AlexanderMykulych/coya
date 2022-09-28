<script lang="ts" setup>
const { fileEntities, highlightEntity } = useSourcePanel()

const listItems = computed(() => fileEntities.value.map(x => ({
  title: prepareTitle(x.id),
  value: x.id,
  subtitle: x.entityType,
})))

const prepareTitle = (id: string) => id.substring(id.lastIndexOf('/'))

const entityId = ref<string>()
const select = (id: string, isSelected: boolean) => {
  const selectedId = isSelected ? id : ''
  highlightEntity(selectedId)
  entityId.value = selectedId
}
const entity = computed(() => entityId.value ? fileEntities.value.find(x => x.id === entityId.value) : null)
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
            :subtitle="item.subtitle"
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