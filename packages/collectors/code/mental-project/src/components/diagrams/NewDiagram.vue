<script lang="ts" setup>
import { useDiagrams } from '../../store/useDiagrams';


const name = ref('name')
const show = ref(false)

const { addNew } = useDiagrams()

const confirm = () => {
  addNew(name.value)
  show.value = false
}
</script>

<template>
  <BaseModal v-model="show" name="new-diagram" @confirm="confirm">
    <template #title>
      New diagram
    </template>
    <div>
      <input type="text" v-model="name" b-1/>
    </div>
  </BaseModal>
</template>
