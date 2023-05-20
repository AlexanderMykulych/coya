import { loadIssues } from './issues/loadIssues'
import type { GetIssuesParam } from './issues/types'
import type { GetIssuesResponse } from '@/types.domain'

export async function getIssues(params: GetIssuesParam): Promise<GetIssuesResponse> {
  return loadIssues(params)
}
