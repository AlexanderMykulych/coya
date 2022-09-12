<script lang="ts" setup>
// All imports are automatic but if you want to import anything,
// remember to import from 'vue-termui':
// import { ref } from 'vue-termui'
import { resolve } from 'path';
import { useAnalyzer } from './composition/useAnalyzer'
import Item from './Item.vue'
import DbCheckStep from './DbCheckStep.vue'
import AnalizingStep from './AnalizingStep.vue'

const res = ref<string | null>(null)
const { verifyConnection, insertProjectInfoToDb, workingDir } = useAnalyzer()

const connection = reactive(verifyConnection())

const analyze = reactive(insertProjectInfoToDb())

const steps = ref([
  {
    label: 'DB address',
    component: DbCheckStep,
    fn: () => verifyConnection(),
    state: null,
  },
  {
    label: 'Analyzing',
    component: AnalizingStep,
    fn: () => insertProjectInfoToDb(),
    state: null,
  }
])

const currentStep = ref(0)

const executingStep = computed(() => steps.value[currentStep.value])

watch(() => executingStep.value, (val) => {
  if (val) {
    val.state = val.fn()
    val.show = true
  }
}, {
  immediate: true,
})

watch(() => executingStep.value?.state?.isReady, (val, oldVal) => {
  if (val && val !== oldVal) {
    currentStep.value += 1
  }
})

const n = ref(0)
useInterval(() => {
  n.value++
}, 600)

const loadingSpaces = computed(() => ' '.repeat(n.value % 4) + '🏎')
</script>

<template>
  <Box
    :padding="2"
    :margin="2"
    width="100%"
    :maxWidth="100"
    justifyContent="center"
    alignItems="center"
    flexDirection="column"
    borderColor="yellowBright"
    borderStyle="round"
  >
    <Box :marginY="1">
      <Text color="cyanBright">Coya analyzer 🚀 {{ n }} - {{ currentStep }}</Text>
    </Box>
    <Box>
      <Text color="green">
        Dir: {{workingDir}} <NewLine />
        <template v-for="step in steps">
          <component v-if="step.show" :is="step.component" :state="step.state" /> <NewLine />
        </template>
      </Text>
    </Box>
  </Box>
</template>
