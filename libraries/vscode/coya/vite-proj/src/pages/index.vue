<script setup lang="ts">
import path from "path-browserify";
import coya from "coya-vue-component";
import "coya-vue-component/dist/style.css";

const modules = import.meta.globEager('./../../coya/**/*.coya.ts')
const files = Object
    .keys(modules)
    .map(filePath => ({
            fileName: path.basename(filePath),
            config: modules[filePath].default
        }));
</script>

<template>
<div>
    <coya v-for="item in files" :key="item.fileName" :config="item.config"/>
</div>
    <!-- <coya :config="config"/> -->
</template>
