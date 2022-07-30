import { CodeInfo, CodeInfoType } from "../types";

export function deduplicate(codeInfos: CodeInfo[]): CodeInfo[] {
  const uniqCodeInfos: CodeInfo[] = []

  codeInfos.forEach((item) => {
    if (!uniqCodeInfos.some(uniqItem => isItemsEqual(item, uniqItem))) {
      uniqCodeInfos.push(item)
    }
  })

  return uniqCodeInfos
}

export function isItemsEqual(item1: CodeInfo, item2: CodeInfo) {
  if (item1.type === item2.type) {
    if (item1.type === CodeInfoType.Entity && item2.type === CodeInfoType.Entity) {
      return item1.id === item2.id
    } else if (item1.type === CodeInfoType.Relationship && item2.type === CodeInfoType.Relationship) {
      return item1.from === item2.from && item1.to === item2.to && item1.relationType === item2.relationType
    }
  }
  return false
}