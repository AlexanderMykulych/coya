<script setup lang="ts">
import path from "path-browserify";
import coya from "coya-vue-component";
import "coya-vue-component/dist/style.css";

const modulesTs = import.meta.globEager('./../../coya/**/*.coya.ts')
const modulesJson = import.meta.globEager('./../../coya/**/*.coya.json')
const files = [
    ...Object
        .keys(modulesTs)
        .map(filePath => ({
            fileName: path.basename(filePath),
            config: modulesTs[filePath].default
        })),
    ...(Object
        .keys(modulesJson)
        .map(filePath => ({
            fileName: path.basename(filePath),
            config: modulesJson[filePath].default
        })))];
</script>

<template>
    <div>
        <coya v-for="item in files" :key="item.fileName" :config="item.config" />
    </div>
    <!-- <coya :config="config"/> -->
</template>
