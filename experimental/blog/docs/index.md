---
title: Docs with VitePress
editLink: true
---

<script setup>
import { ref, computed } from 'vue'
import config1 from './config.coya.json';
import config2 from './config2.coya.json';
import {useData} from 'vitepress';
import {useCoyaData} from './.vitepress/theme/useCoyaData.ts';

const { frontmatter } = useData();
const { state, setConfig, scaleTo }  = useCoyaData();

const setConfig1 = () => setConfig(config1);
const setConfig2 = () => setConfig(config2);

window.addEventListener('hashchange', (e) => {
    if (window.location.hash?.startsWith('#')) {
        scaleTo(window.location.hash.slice(1)?.replaceAll('-', '_'));
    }
})
setConfig1();
</script>

## Blog

Coya component here 🤩

<pre>
    <Button @click="scaleTo('block_1')" label="config 13"/>
    <button @click="scaleTo('block_1', 'block_3')">config 2</button>
</pre>


Lorem Ipsum is simply dummy text of 
the printing and typesetting industry. 
Lorem Ipsum has been the industry's standard 
dummy text ever since the 1500s, when an unknown
printer took a galley of type and scrambled it to
make a type specimen book. It has survived not only
five centuries, but also the leap into electronic
typesetting, remaining essentially unchanged.
It was popularised in the 1960s with the release of
Letraset sheets containing Lorem Ipsum passages, and
more recently with desktop publishing software
like Aldus PageMaker including versions of Lorem Ipsum.
## block_1

Lorem Ipsum is simply dummy text of 
the printing and typesetting industry. 
Lorem Ipsum has been the industry's standard 
dummy text ever since the 1500s, when an unknown
printer took a galley of type and scrambled it to
make a type specimen book. It has survived not only
five centuries, but also the leap into electronic
typesetting, remaining essentially unchanged.
It was popularised in the 1960s with the release of
Letraset sheets containing Lorem Ipsum passages, and
more recently with desktop publishing software
like Aldus PageMaker including versions of Lorem Ipsum.

<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

## block_2
Lorem Ipsum is simply dummy text of 
the printing and typesetting industry. 
Lorem Ipsum has been the industry's standard 
dummy text ever since the 1500s, when an unknown
printer took a galley of type and scrambled it to
make a type specimen book. It has survived not only
five centuries, but also the leap into electronic
typesetting, remaining essentially unchanged.
It was popularised in the 1960s with the release of
Letraset sheets containing Lorem Ipsum passages, and
more recently with desktop publishing software
like Aldus PageMaker including versions of Lorem Ipsum.

## block_3
Lorem Ipsum is simply dummy text of 
the printing and typesetting industry. 
Lorem Ipsum has been the industry's standard 
dummy text ever since the 1500s, when an unknown
printer took a galley of type and scrambled it to
make a type specimen book. It has survived not only
five centuries, but also the leap into electronic
typesetting, remaining essentially unchanged.
It was popularised in the 1960s with the release of
Letraset sheets containing Lorem Ipsum passages, and
more recently with desktop publishing software
like Aldus PageMaker including versions of Lorem Ipsum.