import type { LoadedIssue } from '../../types.domain'
import type { LoadIssueParam } from './types'
import { issueFields } from './issueFields'
import { getLinkedIssuesIds } from './getLinkedIssuesIds'
import { http } from '@/axios'

export async function loadIssuesByIds(param: LoadIssueParam) {
  let issuesQueue: string[] = param.ids
  const { maxDepthLevel } = param
  let loadedDepth = 0

  while (issuesQueue.length > 0 && (!maxDepthLevel || loadedDepth++ < maxDepthLevel)) {
    issuesQueue = await loadOneLevelDepthIssuesByIds({
      ...param,
      ids: issuesQueue,
    })
  }
}

async function loadOneLevelDepthIssuesByIds({
  ids,
  onLoadedIssue,
  isAlreadyLoaded,
  addRelation,
}: LoadIssueParam): Promise<string[]> {
  const response = await http.post<LoadedIssue[]>(
    `issuesGetter?${issueFields}`,
    ids.map(id => ({ id })),
  )

  const issues = response.data

  issues.forEach(issue => onLoadedIssue(issue))

  return getLinkedIssuesIds({
    issues,
    isAlreadyLoaded,
    addRelation,
  })
}
