import { useSourceCode } from "../composables/useSourceCode";

const activeFileId = ref<string>()
const setActiveFileId = (id: string) => activeFileId.value = id

const { getSourceFileEntities } = useSourceCode()
const fileEntities = asyncComputed(() => activeFileId.value ? getSourceFileEntities(activeFileId.value) : [], [])

const activeEntityId = ref<string>()
const activeEntity = computed(() =>
  activeEntityId.value
    ? fileEntities.value.find(x => x.id === activeEntityId.value)
    : null,
)
const highlightEntity = (id: string) => {
  activeEntityId.value = id
}

export const useSourcePanel = () => {
  return {
    activeFileId,
    setActiveFileId,
    fileEntities,
    highlightEntity,
    activeEntity,
  }
}