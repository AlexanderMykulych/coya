import type { Node, Relation } from 'coya-connectors-shared'

export enum LinkTypeName {
  Subtask = 'Subtask',
  Duplicate = 'Duplicate',
  Depend = 'Depend',
  Relates = 'Relates',
}

export type IssueLink = {
  direction: 'INWARD' | 'OUTWARD' | 'BOTH'
  linkType: {
    name: LinkTypeName
  }
  issues: {
    id: string
  }[]
}

export type IssueCustomField = {
  $type: string
  id: string
  name: string
  value: any
}

export type IssueTag = {
  name: string
}

export type TrackerUser = {
  id: string
  login: string
  name: string
  fullName: string
  avatarUrl: string
  email: string
}

export type Issue = {
  id: string
  idReadable: string
  summary: string
  description: string
  reporter: TrackerUser
  created: number
  updater: TrackerUser
  updated: number
  usesMarkdown: boolean
}

export type LoadedIssue = Issue & {
  links: IssueLink[]
  tags: IssueTag[]
  customFields: IssueCustomField[]
}

export type IssueRelation = Relation & {
  type: LinkTypeName | string
}

export type Sprint = {
  id: string
  name: string
  goal?: string
  agile?: AgileBoard
}

export type AgileBoard = {
  id: string
  name: string
  favorite: boolean
  owner: {
    id: string
    fullName: string
  }
}

export type GetIssuesResponse = {
  issues: Issue[]
  relations: IssueRelation[]
  nodes: Array<[string, Node[]]>
}
