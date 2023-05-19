import { http } from '../../axios'
import type { LoadedIssue, Sprint } from '../../types.domain'
import type { IssueLoadContext } from './createLoadedContext'
import { commentFields } from './issueFields'

export async function loadIssueDetails(issue: LoadedIssue, context: IssueLoadContext) {
  await loadIssueSprints(issue, context)
  await loadIssueComments(issue, context)
}

async function loadIssueSprints({ id }: LoadedIssue, context: IssueLoadContext) {
  const response = await http.get<Sprint[]>(
    `issues/${id}/sprints?fields=name,id,agile(name,id),goal`,
  )

  const sprints = response.data
  sprints
    .forEach((sprint) => {
      context.addNode('sprint', sprint)

      context.addRelation({
        fromNode: 'issue',
        from: id,
        toNode: 'sprint',
        to: sprint.id,
        type: 'in',
      })

      if (sprint.agile) {
        context.addNode('board', sprint.agile)

        context.addRelation({
          fromNode: 'issue',
          from: id,
          toNode: 'board',
          to: sprint.agile.id,
          type: 'in',
        })

        context.addRelation({
          fromNode: 'sprint',
          from: sprint.id,
          toNode: 'board',
          to: sprint.agile.id,
          type: 'in',
        })
      }
    })
}
async function loadIssueComments({ id }: LoadedIssue, context: IssueLoadContext) {
  const response = await http.get<Sprint[]>(
    `issues/${id}/comments?${commentFields}`,
  )

  const comments = response.data
  comments
    .forEach((comment) => {
      context.addNode('comment', comment)

      context.addRelation({
        fromNode: 'issue',
        from: id,
        toNode: 'comment',
        to: comment.id,
        type: 'in',
      })
    })
}
