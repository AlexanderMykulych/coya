import { getNeo4j } from 'coya-neo4j'
import type { Issue } from 'coya-youtrack-connector'
import { unflatten } from 'flat'

export type UseIssueListParam = {
  sprintName: string
  team: string
  tag?: string
  state?: string
}

export function useIssueList({ sprintName, team, tag, state }: UseIssueListParam) {
  const neo4j = getNeo4j()

  if (state === 'Planned') {
    state = ''
  }

  const issuesResult = computedAsync(async () => await neo4j.query(`
    match(i:issue)-->(:tag { name: $team })
    match(i:issue)-->(:sprint {name: $sprintName })
    match(i:issue)-[:assignee]->(u:trackerUser)
    ${tag ? 'match(i:issue)-->(:tag { name: $tag })' : ''}
    ${state ? 'where i.state = $state' : ''}
    return i as issue, collect(u) as assignees
    `,
    { sprintName, tag, team, state }),
  )

  const issues = computed(() => issuesResult.value
    ?.records
    .map((item) => {
      const issue = unflatten(item.get('issue').properties) as Issue
      const assignees = item.get('assignees').map((x: any) => unflatten(x.properties))
      return {
        ...issue,
        assignees,
      }
    }),
  )

  return {
    issues,
    issuesResult,
  }
}
