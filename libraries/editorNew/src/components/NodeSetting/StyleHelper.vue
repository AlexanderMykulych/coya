<script lang="ts" setup>
import { useStyleHelper } from './Style/useStyleHelper';
import { onWheelHorScroll } from './onWheelHorScroll';

const { helpers, applyHelper, toggleHelpers, isHelpersOpened } = useStyleHelper();
</script>

<template>
  <button title="Magic helpers" @click="toggleHelpers">
    <i-simple-line-icons:magic-wand />
  </button>
  <div
    class="
        flex
        flex-col
        flex-wrap
        h-full
        pl-5
        pr-5
        h-full
        content-center
        overflow-x-auto overflow-y-hidden
        scrollbar-thin
        scrollbar-thumb-gray-300
        scrollbar-track-gray-100
        css-widget-scrollbar
        justify-start
        content-start
    "
    @wheel.stop.prevent="onWheelHorScroll"
  >
    <template v-if="isHelpersOpened">
      <div v-for="(helper, index) in helpers" :key="index">
        <button class="flex min-w-34 justify-start" @click="!helper.component && applyHelper(helper)">
          🚀
          <template v-if="!helper.component">
            {{ helper.label }}
          </template>
          <component :is="helper.component" v-else :helper="helper" @apply="applyHelper" />
        </button>
      </div>
    </template>
  </div>
</template>
