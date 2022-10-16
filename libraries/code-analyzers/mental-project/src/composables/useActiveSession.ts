import { TrackType } from "coya-ts-analyzer/browser"

const { rpc, clearTrackOptions, trackOptions } = useCliRpc()

const activeStepName = ref<string>()

const fsTree = useAsyncState(
  () => rpc.getFSTree(),
  null,
  {
    immediate: false,
  }
)

const trackedFiles = computed(
  () => trackOptions
    .value
    .filter(x => x.type === TrackType.AnalyzeSourceFile && x.details?.filePath)
    .map(x => ({
      file: x.details.filePath,
      stage: x.stage,
    }))
)

const sessionSteps = [
  {
    name: 'get fs tree',
    async action() {
      await fsTree.execute()
    },
  },
  // {
  //   name: 'analyse',
  //   async action() {
  //     clearTrackOptions()
  //     await rpc.runAnalyze()
  //   },
  // },
]

export function useActiveSession() {

  const runActiveStep = async () => {
    const step = sessionSteps.find(x => x.name === activeStepName.value)
    if (step) {
      await step.action()
    }
  }

  const runSession = async () => {
    for (const step of sessionSteps) {
      activeStepName.value = step.name

      await runActiveStep()
    }
  }

  return {
    runSession,
    fsTree,
    activeStepName,
    trackedFiles,
  }
}

