import type { MergeRequest } from './types.domain'

export type GetMRResult = {
  mergeRequests: MergeRequest[]
}

export type GetMRContext = {
  addMrs(mrs: MergeRequest[]): Promise<void>
  addNode(label: string, node: any): void
  addRelation(param: {
    fromNode: string
    from: string
    toNode: string
    to: string
    type: string
  }): void
}
