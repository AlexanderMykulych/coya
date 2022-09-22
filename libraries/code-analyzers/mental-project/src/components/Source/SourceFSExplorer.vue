<script lang="ts" setup>
const emits = defineEmits({
  select: (id: string) => {},
})
const { files } = useSourceCode()

const preparedFiles = computed(() => files.isReady && files.state.value?.map(x => ({
  title: x.id,
  value: x.id,
})))
</script>

<template>
  <div v-if="files.isReady" b>
    <v-list :items="preparedFiles" text-left @click:select="emits('select', $event.id)"></v-list>
  </div>
</template>