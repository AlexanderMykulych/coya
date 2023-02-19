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

export type Issue = {
  id: string
  idReadable: string
  summary: string
  description: string
  reporter: {
    login: string
  }
}

export type IssueWithLinks = Issue & {
  links: IssueLink[]
}

export type IssueRelation = {
  fromNode: string
  from: string
  toNode: string
  to: string
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
}
