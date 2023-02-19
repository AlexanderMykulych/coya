<script lang="ts" setup>
const props = defineProps<{ name?: string}>()

const { getLogsByName, logs } = useLogging()

const items = computed(() => props.name ? getLogsByName(props.name) : logs.value)

const el = ref<HTMLElement>()
const listEl = ref<HTMLElement>()

watchThrottled(
  items.value,
  () => {
    if (el.value && listEl.value) {
      console.log('scroll', el.value.scrollHeight);
      
      el.value.scroll(0, el.value.scrollHeight)
    }
  },
  { throttle: 300 },
)
</script>

<template>
  <div ref="el" h-full overflow-y-auto>
    <v-expansion-panels variant="accordion" class="pb-5" ref="listEl">
      <v-virtual-scroll
        height="100"
        item-height="20"
      >
        <v-expansion-panel
          v-for="(item, index) in items"
          :value="index"
        >
          <v-expansion-panel-title h="2em" p="t-0 b-0" text-xs :style="{'margin-left': `${item.data?.level * 5 ?? 0}px`}">
            {{ item.msg }}
            <template v-if="!!item.data?.stage" #actions>
              <LogItemStage :modelValue="item.data.stage"/>
            </template>
          </v-expansion-panel-title>
          <v-expansion-panel-text>
            <LogItem :modelValue="item" />
          </v-expansion-panel-text>
        </v-expansion-panel>
      </v-virtual-scroll>
    </v-expansion-panels>
  </div>
</template>
