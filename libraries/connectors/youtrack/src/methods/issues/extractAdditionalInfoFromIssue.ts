import type { LoadedIssue } from '../../types.domain'
import type { addNodeFunc, addRelationFunc } from './types'

export function extractAdditionalInfoFromIssue(
  issue: LoadedIssue,
  addNode: addNodeFunc,
  addRelation: addRelationFunc,
) {
  issue.tags?.forEach((tag) => {
    addNode('tag', {
      id: tag.name,
      ...tag,
    })

    addRelation({
      toNode: 'tag',
      to: tag.name,
      fromNode: 'issue',
      from: issue.id,
    })
  })
}
