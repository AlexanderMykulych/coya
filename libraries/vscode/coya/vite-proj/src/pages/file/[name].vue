<script setup lang="ts">
import path from "path-browserify";
import coya from "coya-vue-component";
import "coya-vue-component/dist/style.css";
const modulesTs = import.meta.globEager('./../../../coya/**/*.coya.ts')
const modulesJson = import.meta.globEager('./../../../coya/**/*.coya.json')

const props = defineProps<{ name: string }>()

const files = [
    ...Object
        .keys(modulesTs)
        .map(filePath => ({
                fileName: path.basename(filePath),
                preparedName: path.basename(filePath).replaceAll(".", "_"),
                config: modulesTs[filePath].default
            })),
    ...Object
        .keys(modulesJson)
        .map(filePath => ({
                fileName: path.basename(filePath),
                preparedName: path.basename(filePath).replaceAll(".", "_"),
                config: modulesJson[filePath].default
            })),
    ];
const file = computed(() => files.find(x => x.preparedName === props.name));
</script>

<template>
  <div class="h-full">
    <coya v-if="!!file" :config="file.config" :id="file.fileName"/>
    <div v-else>
        config "{{name}}" doesn`t found. Available configs are: {{files.map(x => x.fileName)}}
    </div>
  </div>
</template>
