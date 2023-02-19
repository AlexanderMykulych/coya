import type { ConnectParams } from 'coya-connectors-shared'
import { flatten } from 'flat'
import { http } from './axios'
import { getIssues } from './methods/issues'
import type { YoutrackConfig } from './types.service'

export async function connect({ addNodes, addRelations, config }: ConnectParams<YoutrackConfig>) {
  http.defaults.baseURL = config.url
  http.defaults.headers.Authorization = `Bearer ${config.token}`

  const { issues, relations } = await getIssues()

  await addNodes('issue', issues.map(x => flatten(x)))
  await addRelations(relations)
}
