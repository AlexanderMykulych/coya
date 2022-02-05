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
  <div @click.stop>
    <template v-if="!open">
      <div @click="open = true">
        Fill style
      </div>
    </template>
    <template v-else>
      <button @click="apply('solid')">
        <i-my-icons-solid />
      </button>
      <button @click="apply('hachure')">
        <i-my-icons-hachure />
      </button>
      <button @click="apply('cross-hatch')">
        <i-my-icons-cross-hatch />
      </button>
      <button @click="applyStyle({fillStyle: undefined, fill: 'none'})">
        <i-my-icons-empty />
      </button>
    </template>
  </div>
</template>
