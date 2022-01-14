<script setup lang="ts">
import { computed, ref, watch, watchEffect } from 'vue';
import HelloWorld from './components/HelloWorld.vue'
import { useCoyaStore } from './libEntry';

const store = useCoyaStore();
const test = () => {
    store.$patch((state) => {
        state.projects.push(1);
    })
};
const text = ref("");
const coyaFile = computed(() => store.activeProject.files?.find(x => x.name.indexOf("coya.json") > -1));
const openCoya = async () => {
    if (coyaFile.value) {
        const fileText = await store.getFileText(coyaFile.value);
        text.value = fileText;
    }
}
const saveFile = () => {
    if (coyaFile.value) {
        store.saveFileText(coyaFile.value, text.value);
    }
}
</script>

<template>
  
  projects: {{store.projectsNames}} <br>
  active: {{store.activeProject.name}} <br>
  active proj files: {{store.activeProject.fileNames}}
  <button @click="store.openFolder">
      open folder
  </button>
  <button @click="openCoya">
      open coya
  </button>
  <br>
  <textarea v-model="text" cols="30" rows="10"></textarea>
    <br>
    <button v-if="!!text" @click="saveFile">save</button>
</template>

<style>

</style>
