import type { LoadedIssue } from '../../types.domain'
import type { LoadIssueParam } from './types'
import { issueFields } from './issueFields'
import { getLinkedIssuesIds } from './getLinkedIssuesIds'
import { http } from '@/axios'

export async function loadIssues({ ids, addIssue, isLoaded, addRelation }: LoadIssueParam) {
  let issuesQueue: string[] = ids

  const loadIssuesRec = async () => {
    const response = await http.post<LoadedIssue[]>(
      `issuesGetter?${issueFields}`,
      issuesQueue.map(id => ({ id })),
    )

    const issues = response.data

    issues.forEach(issue => addIssue(issue))

    const linkedIds = getLinkedIssuesIds({
      issues,
      isLoaded,
      addRelation,
    })

    issuesQueue = linkedIds
  }

  while (issuesQueue.length > 0) {
    await loadIssuesRec()
  }
}
