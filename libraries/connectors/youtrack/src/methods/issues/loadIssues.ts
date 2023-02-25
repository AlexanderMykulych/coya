import { getLinkedIssuesIds } from './getLinkedIssuesIds'
import { loadIssuesByIds } from './loadIssuesByIds'
import { issueFields } from './issueFields'
import { createLoadedContext } from './createLoadedContext'
import type { GetIssuesParam } from './types'
import { http } from '@/axios'
import type { GetIssuesResponse, LoadedIssue } from '@/types.domain'

export async function loadIssues({ query, maxDepthLevel }: GetIssuesParam): Promise<GetIssuesResponse> {
  const context = createLoadedContext()

  const response = await http.get<LoadedIssue[]>(
    `issues?${issueFields}&query=${encodeURI(query)}`,
  )

  response.data.forEach(issue => context.addIssue(issue))

  await loadIssuesByIds({
    ids: getLinkedIssuesIds({
      issues: response.data,
      addRelation: context.addIssueRelation,
    }),
    isAlreadyLoaded: context.isAlreadyLoaded,
    onLoadedIssue: context.addIssue,
    addRelation: context.addIssueRelation,
    maxDepthLevel,
  })

  return {
    issues: context.getIssues(),
    relations: context.getRelations(),
    nodes: context.getNodes(),
  }
}
