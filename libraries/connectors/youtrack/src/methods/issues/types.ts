import type { Node } from 'coya-connectors-shared'
import type { IssueRelation, LinkTypeName, LoadedIssue } from '../../types.domain'
import type { IssueQuery } from '../../types.service'

export type AddRelationParam = {
  from: string
  to: string
  type: LinkTypeName
}

export type LoadIssueParam = {
  ids: string[]
  maxDepthLevel?: number
  isAlreadyLoaded: (id: string) => boolean
  onLoadedIssue: (issue: LoadedIssue) => void
  addRelation: (param: AddRelationParam) => void
}

export type GetLinkedIssuesParam = {
  issues: LoadedIssue[]
  isAlreadyLoaded?: LoadIssueParam['isAlreadyLoaded']
  addRelation: LoadIssueParam['addRelation']
}

export type addNodeFunc<T = any> = (label: string, node: Node<T>) => void

export type addRelationFunc = (relation: IssueRelation) => void

export type GetIssuesParam = {
  query: IssueQuery
  maxDepthLevel?: number
}
