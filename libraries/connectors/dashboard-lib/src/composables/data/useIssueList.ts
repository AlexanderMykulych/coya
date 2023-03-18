import { getNeo4j } from 'coya-neo4j'
import type { Issue } from 'coya-youtrack-connector'
import { unflatten } from 'flat'

export type UseIssueListParam = {
  sprintName: string
  team: string
  tag?: string
}

export function useIssueList({ sprintName, team, tag }: UseIssueListParam) {
  const neo4j = getNeo4j()

  const issuesResult = computedAsync(async () => await neo4j.query(`
    match(i:issue)-->(:tag { name: $team })
    ${tag ? 'match(i:issue)-->(:tag { name: $tag })' : ''}
    match(i:issue)-->(:sprint {name: $sprintName })
    return i as issue
  `,
  { sprintName, tag, team }),
  )

  const issues = computed(() => issuesResult.value
    ?.records
    .map(item => unflatten(item.get('issue').properties) as Issue),
  )

  return {
    issues,
    issuesResult,
  }
}
