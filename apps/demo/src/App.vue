<script setup lang="ts">
import { FileSystemCoya } from 'coya-vue-component';
import Coya from "coya-vue-component";
import 'coya-vue-component/dist/style.css';
import slider from '@vueform/slider'
import { useCase1 } from './cases/case1';
import { useCase2 } from './cases/case2';

const rawAssetsModules = import.meta.glob('./diagrams/assets/**/*.ts', {
    assert: {
        type: 'raw',
    },
});
const imgAssetsModules = import.meta.glob('./diagrams/assets/**/*.*');
const images = ['.png', '.gif'];
const assets = {
    create: async (name: string, content: string) => {},
    load: async (name: string) => {
        if (!name) {
            return;
        }
        if (images.some(image => name.endsWith(image))) {
            const module = await imgAssetsModules[`./diagrams/assets/${name}`]();
            return module.default;
        }
        return rawAssetsModules[`./diagrams/assets/${name}`];
    },
};




const case1 = useCase1();
const case2 = useCase2();

const activeConfig = ref(null);

</script>

<template>
    <FileSystemCoya v-if="!activeConfig" class="demo-coya-main pt-10">
        <template #before-projects>
            <DemoCoyas @select-config='activeConfig = $event' class="pb-10"/>
        </template>
    </FileSystemCoya>
    <Coya
        v-else-if="activeConfig.tag === 'custom'"
        class="row-span-11"
        :config="activeConfig"
        :id="activeConfig.name"
        :assets="assets"
    >
        <template #left-menu>
            <button class="border-2" @click="activeConfig = null">
                <mdi:arrow-left-bold-box-outline class="pb-1" />
            </button>
        </template>
        <template #coya-block_4>
            <div class="w-full h-full p-10">
                <v-chart :option="case1.option.value" />
            </div>
        </template>
        <template #coya-block_1>
            <p class="pl-5">Director:</p>
            <slider class="w-full pr-2 pl-2" v-model="case1.numbs.val1" :max="2000" :step="5"/>
        </template>
        <template #coya-block_2>
            <p class="pl-5">Email:</p>
            <slider class="w-full pr-2 pl-2" v-model="case1.numbs.val2" :max="2000" :step="5"/>
        </template>
        <template #coya-block_3>
            <p class="pl-5">Ad Networks:</p>
            <slider class="w-full pr-2 pl-2" v-model="case1.numbs.val3" :max="2000" :step="5"/>
        </template>
        <template #coya-case2_1>
            <p class="pl-5">Value:</p>
            <slider class="w-full pr-2 pl-2" v-model="case2.numbs.val1" :max="60"/>
        </template>
        <template #coya-case2_2>
            <div class="w-full h-full p-10">
                <v-chart :option="case2.option.value" />
            </div>
        </template>
    </Coya>
    <Coya
        v-else
        class="row-span-11"
        :config="activeConfig"
        :id="activeConfig.name"
        :assets="assets"
    >
        <template #left-menu>
            <button class="border-2" @click="activeConfig = null">
                <mdi:arrow-left-bold-box-outline class="pb-1" />
            </button>
        </template>
    </Coya>
</template>

<style src="@vueform/slider/themes/default.css"></style>