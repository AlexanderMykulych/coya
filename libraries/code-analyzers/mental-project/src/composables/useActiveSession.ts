const { rpc } = useCliRpc()

const activeStepName = ref<string>()

const fsTree = useAsyncState(
  () => rpc.getFSTree(),
  null,
  {
    immediate: false,
  }
)

const sessionSteps = [
  {
    name: 'get fs tree',
    async action() {
      await fsTree.execute()
    },
  }
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
  }
}

