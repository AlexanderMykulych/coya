<script setup lang="ts">
import path from "path-browserify";
import coya from "coya-vue-component";
import "coya-vue-component/dist/style.css";
const modules = import.meta.globEager('./../../../coya/**/*.coya.ts')

const props = defineProps<{ name: string }>()

const files = Object
    .keys(modules)
    .map(filePath => ({
            fileName: path.basename(filePath),
            preparedName: path.basename(filePath).replaceAll(".", "_"),
            config: modules[filePath].default
        }));
const config = computed(() => files.find(x => x.preparedName === props.name)?.config);
</script>

<template>
  <div class="h-full">
    <coya v-if="!!config" :config="config"/>
    <div v-else>
        config "{{name}}" doesn`t found. Available configs are: {{files.map(x => x.fileName)}}
    </div>
  </div>
</template>
