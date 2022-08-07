<script setup lang="ts">
import { groupBy } from 'coya-util';
import { ServerInfo } from 'neo4j-driver';
import { useNeo4j } from '../composables/neo4j/useNeo4j';
import codeInfos from '../examples/vue-project'
import type { CodeInfo, Entity, Relationship } from 'coya-ts-analyzer'
import { CodeInfoType } from 'coya-ts-analyzer'

const name = $ref('')

const router = useRouter()

const { verifyConnection, insertCodeInfos, init } = useNeo4j()

const serverInfo = ref<ServerInfo | null>(null)

const verify = async () => {
  serverInfo.value = await verifyConnection()
}

const createNodes = async () => {
  await init()
  await insertCodeInfos(codeInfos)
}

const queryNode = Object.entries(
          groupBy(
            codeInfos
              .filter((x): x is Entity => x.type === CodeInfoType.Entity),
            (item) => item.entityType,
          )
)
const queryRel = codeInfos
          .filter((x): x is Relationship => x.type === CodeInfoType.Relationship)
</script>

<template>
  <div>
    <button class="btn" @click="verify">
      verify neo4j connection
    </button>
    <button class="btn m-l-5" @click="createNodes">
      Create nodes
    </button>
    <div>
      {{ serverInfo }}
    </div>
    <pre class="text-left">
      {{queryNode}}
    </pre>
    <pre class="text-left">
      {{queryRel}}
    </pre>
  </div>
</template>
