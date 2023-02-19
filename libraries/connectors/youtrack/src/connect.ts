import type { ConnectParams } from 'coya-connectors-shared'
import { flatten } from 'flat'
import { http } from './axios'
import { getIssues } from './methods/issues'
import type { YoutrackConfig } from './types.service'

export async function connect({ addNodes, addRelations, config }: ConnectParams<YoutrackConfig>) {
  http.defaults.baseURL = config.url
  http.defaults.headers.Authorization = `Bearer ${config.token}`

  for await (const query of config.issueQueries) {
    const { issues, relations, nodes } = await getIssues({
      query,
    })

    await addNodes('issue', issues.map(x => flatten(x)))

    for await (const [label, values] of nodes) {
      await addNodes(label, values)
    }

    await addRelations(relations)
  }
}
