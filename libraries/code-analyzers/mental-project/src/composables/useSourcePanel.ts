import { BaseEntity, CodeInfoType, Entity, isLocatedCodeInfo, isLocatedEntity, LocatedEntity, LocatedRelationship, LocatedType, Relationship } from "coya-ts-analyzer/browser";
import { useSourceCode } from "./useSourceCode";

const activeFileId = ref<string>()
const setActiveFileId = (id: string) => activeFileId.value = id

const { rpc } = useCliRpc()

const { getSourceFileEntities, getSourceFileRelations } = useSourceCode()
const fileRelations = asyncComputed(() => activeFileId.value ? getSourceFileRelations(activeFileId.value) : [], [])

const fileEntities = asyncComputed(() => activeFileId.value ? getSourceFileEntities(activeFileId.value) : [], [])

const fileCodeInfos = asyncComputed(async () =>
  activeFileId.value
    ? (await rpc.runTestAnalyze(activeFileId.value))
      .filter(isLocatedCodeInfo)
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
const activeRelation = computed<LocatedRelationship | null>(() => activeRelationId.value
  ? fileCodeInfos.value
    .find((x): x is LocatedType<Relationship> =>
      x.type === CodeInfoType.Relationship
      && x.id === activeRelationId.value,
    ) ?? null
  : null,
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

const activeEntRelationId = ref<string>()
const activeEntityRelation = computed(() =>
activeEntRelationId.value
    ? fileRelations.value.find(x => x.id === activeEntRelationId.value)
    : null,
)
const highlightEntityRelation = (id: string) => {
  activeEntRelationId.value = id
  highlightType.value = 'relation'
}

const highlightType = ref<'codeinfo-entity' | 'entity' | 'codeinfo-relation' | 'relation'>()
const highlightItem = computed(() =>
  highlightType.value === 'entity'
    ? activeEntity.value
    : highlightType.value === 'codeinfo-entity'
      ? activeCodeInfoEntity.value
      : highlightType.value === 'codeinfo-relation'
        ? activeRelation.value
        : {
          from: activeEntityRelation.value?.fromNode,
          to: activeEntityRelation.value?.toNode,
        }
)


const secondFileId = computed(() => {
  const activeRelation = activeEntityRelation.value
  if (activeRelation && activeFileId.value) {
    return activeRelation.fromNode.filePath === activeFileId.value
      ? activeRelation.toNode.filePath
      : activeRelation.fromNode.filePath
  }
})


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
    fileRelations,

    highlightEntityRelation,
    activeEntityRelation,

    secondFileId,
  }
}

type HighlightItem =
  | LocatedType<Relationship>
  | BaseEntity
  | Partial<TwoItems>
  
type TwoItems = {
  from: LocatedEntity
  to: LocatedEntity
}

export function isTwoItems(item: HighlightItem | null | undefined): item is TwoItems {
  if (!item) {
    return false
  }
  const keys = Object.keys(item)
  return keys.includes('from') && keys.includes('to') && keys.length === 2
}