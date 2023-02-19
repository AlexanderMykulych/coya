import type { Node } from 'coya-connectors-shared'
import type { LinkTypeName, LoadedIssue } from '../../types.domain'

export type AddRelationParam = {
  from: string
  to: string
  type: LinkTypeName
}

export type LoadIssueParam = {
  ids: string[]
  isLoaded: (id: string) => boolean
  addIssue: (issue: LoadedIssue) => void
  addRelation: (param: AddRelationParam) => void
}

export type GetLinkedIssuesParam = {
  issues: LoadedIssue[]
  isLoaded?: LoadIssueParam['isLoaded']
  addRelation: LoadIssueParam['addRelation']
}

export type addNodeFunc = (label: string, node: Node) => void

export type addRelationFunc = (relation: IssueRelation) => void
