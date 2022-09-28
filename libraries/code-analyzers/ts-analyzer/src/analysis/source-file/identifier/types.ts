import { CodeInfo, Entity, isEntityCodeInfo } from "../../types";

export type NodeCodeInfos = [Entity, ...CodeInfo[]]

export function isNodeCodeInfos(codeInfos: CodeInfo[] | CodeInfo): codeInfos is NodeCodeInfos {
  return Array.isArray(codeInfos) && codeInfos.length > 0 && isEntityCodeInfo(codeInfos[0])
}