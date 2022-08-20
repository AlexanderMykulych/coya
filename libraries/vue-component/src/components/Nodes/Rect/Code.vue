<script lang="ts" setup>
import { asyncComputed } from '@vueuse/core';
import Prism from 'prismjs';
import 'prismjs/components/prism-typescript.min.js';
import 'prismjs/components/prism-json.min.js';
import 'prismjs/components/prism-css.min.js';
import { computed } from 'vue';
import { useAssets } from '../../../logic/useAssets';
import { getExtension } from '../../../logic/getExtension';

const props = defineProps<{ code: any; label: string; style: any }>();

const { getText } = useAssets();
const codeSetting = computed(() => {
    if (typeof props.code === 'string') {
        return {
            file: props.code,
            theme: 'dark',
        };
    }
    return {
        theme: 'dark',
        file: '',
        ...props.code,
    };
});

const codeHtml = asyncComputed(async() => {
    const code = await getText(codeSetting.value.file);
    const ext = getExtension(codeSetting.value.file);
    return Prism.highlight(code, Prism.languages[ext], ext)?.trim();
});
const text = computed(() => codeHtml.value ?? props.label);
</script>

<template>
  <div v-if="!!codeHtml" class="h-max" :class="codeSetting.theme" :style="style">
    <pre class="language-"><code class="language-" v-html="text" /></pre>
  </div>
</template>

<style>
/* .light {
    @import "src/styles/prism-vs-light.css";
}
.dark {
    @import "src/styles/prism-vs-dark.css";
} */
</style>
