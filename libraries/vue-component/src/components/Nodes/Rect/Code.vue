<script lang="ts" setup>
import { asyncComputed } from '@vueuse/core';
import Prism from 'prismjs';
import 'prismjs/components/prism-typescript.min.js';
import 'prismjs/components/prism-json.min.js';
import 'prismjs/components/prism-css.min.js';
import { useAssets } from '../../../logic/useAssets';
import { computed } from 'vue';
import { getExtension } from '../../../logic/getExtension';

const props = defineProps<{code: string | any, label: string, style: any}>();

const { getText } = useAssets();
const codeHtml = asyncComputed(async () => {
    const code = await getText(props.code);
    const ext = getExtension(props.code);
    return Prism.highlight(code, Prism.languages[ext], ext)?.trim();
});
const text = computed(() => codeHtml.value ?? props.label);
</script>

<template>
    <div v-if="!!codeHtml" class="h-max vsdark-block">
        <pre class="language-"><code class="language-" v-html="text"></code></pre>
    </div>
</template>

<style>
.vslight-block {
    @import "src/styles/prism-vs-light.css";
}
.vsdark-block {
    @import "src/styles/prism-vs-dark.css";
}
</style>