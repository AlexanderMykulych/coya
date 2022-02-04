<script lang="ts" setup>
import { ref } from 'vue';
import { useStyleHelper } from './useStyleHelper';

defineEmits(['apply']);

const open = ref(false);

const { applyStyle } = useStyleHelper();

const apply = (style: string) => applyStyle(css => ({
    ...css,
    fill: css?.fill ?? 'black',
    fillStyle: style,
}));
</script>

<template>
  <div>
    <template v-if="!open">
      <div @click="open = true">
        Fill style
      </div>
    </template>
    <template v-else>
      <button @click="apply('solid')">
        <i-la:square-solid />
      </button>
      <button @click="apply('hachure')">
        <i-la:square-solid />
      </button>
      <button @click="apply('cross-hatch')">
        <i-la:square-solid />
      </button>
      <button @click="applyStyle({fillStyle: undefined, fill: 'none'})">
        <i-la:square />
      </button>
    </template>
  </div>
</template>
