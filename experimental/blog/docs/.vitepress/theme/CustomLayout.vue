<script setup lang="ts">
import DefaultTheme from 'vitepress/theme';
import config from './../../config.coya.json';
import { useData } from 'vitepress';
import {computed} from 'vue';
import {useCoyaData} from './useCoyaData.ts';
import { staticAssets } from 'coya-vue-component';

const { Layout } = DefaultTheme;

const { state, setConfig }  = useCoyaData();

const activeConfig = computed(() => state.config);

window.addEventListener('hashchange', (e) => {
    console.log(window.location.hash);
});

const imgAssetsModules = import.meta.glob('./assets/**/*.*');
const rawAssetsModules = import.meta.glob('./assets/**/*.ts', {
    assert: {
        type: 'raw',
    },
});
const assets = staticAssets({
    loadModule: async (name) => await imgAssetsModules[`./assets/${name}`](),
    loadRawAsset: async (name) => {
        const url = new URL(`./assets/${name}?raw`, import.meta.url).href;
        const res = await import(/* @vite-ignore */url);
        return res?.default;
    },
}).assets;
</script>

<template>
    <Layout />
    <div id="coya">
        <div v-if="activeConfig" :key="activeConfig.name">
            <Coya
                :config="activeConfig"
                @update:controller="state.controller = $event"
                style="height: 60vh; border: 2px solid black;"
                :assets="assets"
            />
        </div>
    </div>
</template>

<style>
#app {
    display: flex;
}
#coya {
    width: 40%;
    top: 12rem;
    position: fixed;
    right: 1rem;
}
#coya-el {
    display: stiky;
}
</style>
