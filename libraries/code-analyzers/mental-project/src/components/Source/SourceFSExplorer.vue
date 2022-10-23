<script lang="ts" setup>

const emits = defineEmits({
  select: (id: string) => {},
})

const searchInput = ref('')
const search = refDebounced<string>(searchInput, 1000)

const { fuzzyFiles, files } = useSourceCode()


const preparedFiles = computed(() => {
  if (search.value) {
    return fuzzyFiles
      .value
      ?.search(search.value)
      ?.map(x => ({
        title: x.item.id,
        value: x.item.id,
      }))
  }

  return files.state?.value
  ?.map(x => ({
    title: x.id,
    value: x.id,
  }))
})

</script>

<template>
  <div v-if="!!fuzzyFiles" b>
    <v-text-field v-model="searchInput" />
    <v-list
      :items="preparedFiles"
      text-left
      @click:select="emits('select', $event.id)"
    />
  </div>
</template>