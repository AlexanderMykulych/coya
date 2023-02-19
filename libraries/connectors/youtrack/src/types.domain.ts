import type { Node } from 'coya-connectors-shared'

export enum LinkTypeName {
  Subtask = 'Subtask',
  Duplicate = 'Duplicate',
  Depend = 'Depend',
  Relates = 'Relates',
}

export type IssueLink = {
  linkType: {
    name: LinkTypeName
  }
  issues: {
    id: string
  }[]
}

export type IssueTag = {
  name: string
}

export type Issue = {
  id: string
  idReadable: string
  summary: string
  description: string
  reporter: {
    login: string
  }
}

export type LoadedIssue = Issue & {
  links: IssueLink[]
  tags: IssueTag[]
}

export type IssueRelation = {
  fromNode: string
  from: string
  toNode: string
  to: string
  type?: LinkTypeName
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
