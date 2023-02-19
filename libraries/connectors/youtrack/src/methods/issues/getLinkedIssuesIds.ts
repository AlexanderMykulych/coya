import { LinkTypeName } from '../../types.domain'
import type { GetLinkedIssuesParam } from '../issues'

export function getLinkedIssuesIds({ issues, isLoaded, addRelation }: GetLinkedIssuesParam): string[] {
  const isLoadedFn = isLoaded ?? (_ => false)

  const linkedIds = issues.flatMap((x) => {
    const linkIssues = x.links
      .filter(x => x.linkType.name === LinkTypeName.Subtask)
      .flatMap(y => y.issues)
    if (linkIssues && linkIssues.length > 0) {
      linkIssues.forEach(({ id }) => addRelation({
        from: x.id,
        to: id,
        type: LinkTypeName.Subtask,
      }))

      return linkIssues
        .filter(x => !isLoadedFn(x.id))
        .map(x => x.id)
    }
    return []
  })

  return linkedIds
}
