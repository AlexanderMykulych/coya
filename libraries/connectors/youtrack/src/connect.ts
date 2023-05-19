import type { ConnectParams } from 'coya-connectors-shared'
import { http } from './axios'
import { getIssues } from './methods/issues'
import type { YoutrackConfig } from './types.service'

export async function connect({ addNodes, addRelations, config }: ConnectParams<YoutrackConfig>) {
  http.defaults.baseURL = config.url
  http.defaults.headers.Authorization = `Bearer ${config.token}`

  // issues
  for await (const query of config.issueQueries) {
    const { issues, relations, nodes } = await getIssues({
      query,
      maxDepthLevel: config.issueLoadingMaxDepthLevel,
    })

    await addNodes('issue', issues)

    for await (const [label, values] of nodes) {
      await addNodes(label, values)
    }

    await addRelations(relations)
  }

  // agile boards
  // const { boardNodes, relations: agileRelations, sprintNodes } = await getAgileBoards()

  // await addNodes('board', boardNodes)
  // await addNodes('sprint', sprintNodes)
  // await addRelations(agileRelations)
}
