<script lang="ts" setup>
const { logs, names, getLogsByName } = useLogging()

const isEmpty = computed(() => !(logs.value?.length > 0))

const tab = ref(null)

const prepareMessage = (line: Record<string, string>) =>
  Object.entries(line)
  .map(([key, val]) => `${key}: ${val}`)
  .join(', ')
</script>

<template>
  <div text-left h-full overflow-y-hidden>
    <div v-if="isEmpty" text-center mt-5>
      empty logs
    </div>
    <template v-else>
      <v-tabs v-model="tab">
        <v-tab :value="null">
          All
        </v-tab>
        <v-tab v-for="name in names" :value="name">
          {{ name }}
        </v-tab>
      </v-tabs>
      <v-window v-model="tab" h="95%" b-1 overflow-y-auto>
        <v-window-item
          :value="null"
          class="h-full"
        >
          <v-list>
            <v-list-item v-for="(item, index) in logs"
              :subtitle="item.name"
              :value="index"
            >
            {{prepareMessage(item)}}
            </v-list-item>
          </v-list>
        </v-window-item>
        <v-window-item
          v-for="name in names"
          :value="name"
          class="h-full"
        >
          <v-list>
            <v-list-item v-for="(item, index) in getLogsByName(name)"
              :value="index"
            >
            {{prepareMessage(item)}}
            </v-list-item>
          </v-list>
        </v-window-item>
      </v-window>
    </template>
  </div>
</template>
