import chunk from 'lodash.chunk'
import type { IssueLoadContext } from './createLoadedContext'
import { loadIssueDetails } from './loadIssueDetails'

export async function loadIssuesDetails(context: IssueLoadContext) {
  const issues = context.getIssues()

  const chunks = chunk(issues, 50)

  for await (const chunkIssues of chunks) {
    const loadingTasks = chunkIssues.map(x => loadIssueDetails(x, context))

    await Promise.all(loadingTasks)
  }
}
