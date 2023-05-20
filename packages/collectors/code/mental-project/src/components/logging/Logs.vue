<script lang="ts" setup>
const { logs, names } = useLogging()

const isEmpty = computed(() => !(logs.value?.length > 0))

const tab = ref(null)
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
          <LogList />
        </v-window-item>
        <v-window-item
          v-for="name in names"
          :value="name"
          class="h-full"
        >
          <LogList :name="name" />
        </v-window-item>
      </v-window>
    </template>
  </div>
</template>
