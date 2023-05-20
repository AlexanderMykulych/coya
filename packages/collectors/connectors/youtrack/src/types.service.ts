export type GetAgileBoardParams = {
  favorite?: boolean
}

export type IssueQuery = string

export type YoutrackConfig = {
  url: string
  token: string
  issueQueries: IssueQuery[]
  issueLoadingMaxDepthLevel?: number
}
