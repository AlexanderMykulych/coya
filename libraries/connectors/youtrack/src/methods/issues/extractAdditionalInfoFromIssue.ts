import type { LoadedIssue } from '../../types.domain'
import type { addNodeFunc, addRelationFunc } from './types'

type ExtractAdditionalInfoParam = {
  issue: LoadedIssue
  addNode: addNodeFunc
  addRelation: addRelationFunc
}

export function extractAdditionalInfoFromIssue(param: ExtractAdditionalInfoParam) {
  extractTags(param)
  extractSprints(param)
}

function extractTags({ issue, addNode, addRelation }: ExtractAdditionalInfoParam) {
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
      type: 'tag',
    })
  })
}

function extractSprints({ issue, addNode, addRelation }: ExtractAdditionalInfoParam) {
  const sprintField = issue.customFields?.find(field => field.name === 'Sprint')

  if (sprintField && Array.isArray(sprintField.value)) {
    sprintField.value.forEach((sprintVal) => {
      addNode('sprint', {
        id: sprintVal.id,
        name: sprintVal.name,
      })

      addRelation({
        toNode: 'sprint',
        to: sprintVal.id,
        fromNode: 'issue',
        from: issue.id,
        type: 'sprint',
      })
    })
  }
}
