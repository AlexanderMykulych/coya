import { CodeInfoType, Entity, isLocatedEntity, LocatedType, Relationship } from "coya-ts-analyzer/browser";
import { useSourceCode } from "./useSourceCode";

const activeFileId = ref<string>()
const setActiveFileId = (id: string) => activeFileId.value = id

const { rpc } = useCliRpc()

const { getSourceFileEntities } = useSourceCode()
const fileEntities = asyncComputed(() => activeFileId.value ? getSourceFileEntities(activeFileId.value) : [], [])

const fileCodeInfos = asyncComputed(async () =>
  activeFileId.value
    ? (await rpc.runTestAnalyze(activeFileId.value))
      .filter(isLocatedEntity)
      .sort((a: any, b: any) => a.start > b.start ? 1 : -1)
    : [],
  [],
)

const fileCodeInfoEntities = computed(() => fileCodeInfos.value
  .filter((x): x is LocatedType<Entity> => x.type === CodeInfoType.Entity)
)
const activeCodeInfoId = ref<string>()
const activeCodeInfoEntity = computed(() =>
  activeCodeInfoId.value
    ? fileCodeInfos.value
      .filter((x): x is LocatedType<Entity> => x.type === CodeInfoType.Entity)
      .find(x => x.id === activeCodeInfoId.value)
    : null,
)
const highlightCodeInfo = (id: string) => {
  activeCodeInfoId.value = id
  highlightType.value = 'codeinfo-entity'
}

const fileCodeInfoRelations = computed(() => fileCodeInfos.value
  .filter((x): x is LocatedType<Relationship> => x.type === CodeInfoType.Relationship)
)
const activeRelationId = ref<string>()
const activeRelation = computed(() => activeRelationId.value
  ? fileCodeInfos.value
    .find((x): x is LocatedType<Relationship> =>
      x.type === CodeInfoType.Relationship
      && x.id === activeRelationId.value,
    )
  : [],
)
const highlightRelation = (id: string) => {
  activeRelationId.value = id
  highlightType.value = 'codeinfo-relation'
}


const activeEntityId = ref<string>()
const activeEntity = computed(() =>
  activeEntityId.value
    ? fileEntities.value.find(x => x.id === activeEntityId.value)
    : null,
)
const highlightEntity = (id: string) => {
  activeEntityId.value = id
  highlightType.value = 'entity'
}

const highlightType = ref<'codeinfo-entity' | 'entity' | 'codeinfo-relation'>()
const highlightItem = computed(() =>
  highlightType.value === 'entity'
    ? activeEntity.value
    : highlightType.value === 'codeinfo-entity'
      ? activeCodeInfoEntity.value
      : activeRelation.value
)


export const useSourcePanel = () => {
  return {
    activeFileId,
    setActiveFileId,
    fileEntities,
    highlightEntity,
    activeEntity,
    fileCodeInfos,
    fileCodeInfoEntities,
    highlightCodeInfo,
    highlightItem,
    fileCodeInfoRelations,
    highlightRelation,
  }
}