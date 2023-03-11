import type { Node } from 'coya-connectors-shared'

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

export type IssueRelation = {
  fromNode: string
  from: string
  toNode: string
  to: string
  type: LinkTypeName | string
}

export type AgileBoard = {
  id: string
  name: string
  favorite: boolean
  sprints: {
    id: string
    name: string
  }
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
