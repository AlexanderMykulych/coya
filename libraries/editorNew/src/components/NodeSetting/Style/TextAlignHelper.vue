<script lang="ts" setup>
import { ref } from 'vue';
import { useStyleHelper } from './useStyleHelper';

defineEmits(['apply']);

const open = ref(false);

const { applyStyle } = useStyleHelper();

const apply = (justify: string) => applyStyle(css => ({
    ...css,
    container: {
        ...css.container,
        'justify-content': justify,
    },
}));
</script>

<template>
  <div @click.stop>
    <template v-if="!open">
      <div @click="open = true">
        Text align
      </div>
    </template>
    <template v-else>
      <button @click="apply('flex-start')">
        <i-ph:text-align-left />
      </button>
      <button @click="apply('center')">
        <i-ph:text-align-justify />
      </button>
      <button @click="apply('flex-end')">
        <i-ph:text-align-right />
      </button>
    </template>
  </div>
</template>
