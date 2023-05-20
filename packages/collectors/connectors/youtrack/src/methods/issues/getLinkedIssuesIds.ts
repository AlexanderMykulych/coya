import type { LoadedIssue } from '../../types.domain'
import { LinkTypeName } from '../../types.domain'
import type { GetLinkedIssuesParam } from './types'

export function getLinkedIssuesIds({ issues, isAlreadyLoaded, addRelation }: GetLinkedIssuesParam): string[] {
  const isLoadedFn = isAlreadyLoaded ?? (_ => false)

  const linkedIds = issues.flatMap((x) => {
    const linkIssues = getIssueLinkedIssuesIds(x)

    if (linkIssues && linkIssues.length > 0) {
      linkIssues.forEach(id => addRelation({
        from: x.id,
        to: id,
        type: LinkTypeName.Subtask,
      }))

      return linkIssues
        .filter(id => !isLoadedFn(id))
    }
    return []
  })

  return linkedIds
}

function getIssueLinkedIssuesIds(issue: LoadedIssue): string[] {
  return issue.links
    .filter(x => x.linkType.name === LinkTypeName.Subtask && x.direction === 'OUTWARD')
    .flatMap(y => y.issues)
    .map(x => x.id)
}
