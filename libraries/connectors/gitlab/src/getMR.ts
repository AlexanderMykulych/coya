import { http } from './axios'
import type { MergeRequest } from './types.domain'
import type { GetMRContext, GetMRResult } from './types.service'

export async function getMR(): Promise<GetMRResult> {
  const result = await http.get('merge_requests?state=all')

  return {
    mergeRequests: result.data,
  }
}

function createLoadingContext() {
  const mergeRequests: MergeRequest[] = []
  const users: Record<string, Map<string, any>> = {}

  const context: GetMRContext = {
    addMrs(mrs: MergeRequest[]) {
      extractAdditionalInfoFromMr(context, mrs)
      mergeRequests.push(...mrs)
    },
    addNode(label, node) {

    },
    addRelation(param) {

    },
  }

  return context
}

function extractAdditionalInfoFromMr(context: GetMRContext, mrs: MergeRequest[]) {
  mrs.forEach((mr) => {
    extractUserField({
      context,
      mr,
      fieldName: 'assignee',
    })

    extractUserField({
      context,
      mr,
      fieldName: 'author',
    })

    extractUserField({
      context,
      mr,
      fieldName: 'merge_user',
    })

    extractUserField({
      context,
      mr,
      fieldName: 'merged_by',
    })
  })
}

type extractUserFieldParam = {
  context: GetMRContext
  mr: MergeRequest
  fieldName: keyof MergeRequest
}

function extractUserField({ context, mr, fieldName }: extractUserFieldParam) {
  context.addNode('gitLabUser', mr[fieldName])
  context.addRelation({
    fromNode: 'mr',
    from: mr.iid.toString(),
    toNode: 'gitLabUser',
    to: mr.merge_user.id,
    type: fieldName,
  })
}
