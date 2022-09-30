<script lang="ts" setup>
const { logs, names, getLogsByName } = useLogging()

const isEmpty = computed(() => !(logs.value?.length > 0))

const tab = ref(null)
</script>

<template>
  <div text-left>
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
      <v-window v-model="tab" class="h-full">
        <v-window-item
          :value="null"
          class="h-full"
        >
          <v-list>
            <v-list-item v-for="(item, index) in logs"
              :title="item.msg"
              :subtitle="item.name"
              :value="index"
            >
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
              :title="item.msg"
              :subtitle="item.name"
              :value="index"
            >
            </v-list-item>
          </v-list>
        </v-window-item>
      </v-window>
    </template>
  </div>
</template>
