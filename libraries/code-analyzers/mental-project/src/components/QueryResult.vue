<script lang="ts" setup>
import { queryResultComponents, QueryResultProps } from './QueryResult';

const props = defineProps<QueryResultProps>()

const settings = useVModel(props, 'settings')

const typeConfig = computed(() => queryResultComponents.find(x => x.type === props.type))
const cmp = computed(() => typeConfig.value?.component)
const settingCmp = computed(() => typeConfig.value?.settingComponent)

const tab = ref('settings')

watch(() => props.queryResult.isReady.value, (val) => {
  if (val && tab.value !== 'result') {
    tab.value = 'result'
  }
})
</script>

<template>
  <div class="w-full h-full">
    <QueryResultLoader v-if="queryResult.isLoading.value" :loading="queryResult.isLoading" />
    <v-tabs
      v-model="tab"
      background-color="primary"
    >
      <v-tab
        value="result" 
        :disabled="!queryResult.isReady.value"
      >
        Result
      </v-tab>
      <v-tab value="settings">Settings</v-tab>
    </v-tabs>
    <v-window v-model="tab" class="h-full">
      <v-window-item
        value="result"
        class="h-full"
      >
        <component
          v-if="queryResult.isReady.value && !!cmp"
          :is="cmp"
          :type="type"
          :queryResult="queryResult.state"
          :settings="settings"
        />
      </v-window-item>
      
      <v-window-item value="settings" class="h-full">
        <component
          v-if="!!settingCmp"
          :is="settingCmp"
          :type="type"
          v-model="settings"
        />
      </v-window-item>
    </v-window>
    
  </div>
</template>