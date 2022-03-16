<script lang="ts" setup>
import neo4j from 'neo4j-driver/lib/browser/neo4j-web.min.js';
import Coya from 'coya-vue-component';
import { generateCoya } from '../logic/generateCoya';
import { DiagramType } from '../logic/model';

const props = defineProps<{ query: string | undefined }>();

const driver = neo4j.driver('neo4j://localhost',
    neo4j.auth.basic('neo4j', 'test'),
);
onScopeDispose(async() => await driver.close());
const coya = ref<any>(null);

const runQuery = async() => {
    if (props.query) {
        coya.value = await generateCoya({
            driver,
            database: 'neo4j',
        }, {
            type: DiagramType.SimpleQuery,
            query: props.query,
        });
    }
};
</script>

<template>
  <div>
    <button @click="runQuery">
      Run
    </button>
    <br>
    <Coya v-if="coya" :config="coya" class="w-full h-full" />
  </div>
</template>
