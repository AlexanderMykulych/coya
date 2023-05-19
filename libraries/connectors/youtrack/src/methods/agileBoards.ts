import type { Relation } from 'coya-connectors-shared'
import { http } from '@/axios'
import type { AgileBoard, Sprint } from '@/types.domain'

export async function getAgileBoards() {
  const response = await http.get<AgileBoard[]>('agiles?$top=-1&fields=id,name,favorite,sprints(id,name,goal),owner(id,fullName)&templates=false')

  const boards = response.data

  const boardNodes: AgileBoard[] = []
  const sprintNodes: Sprint[] = []
  const relations: Relation[] = []

  boards.forEach((x) => {
    boardNodes.push({
      ...x,
      sprints: undefined,
    })

    if (x.sprints) {
      sprintNodes.push(...x.sprints)

      relations.push(
        ...x.sprints
          .map<Relation>(sprint => ({
            fromNode: 'board',
            from: x.id,
            toNode: 'sprint',
            to: sprint.id,
            type: 'in',
          })),
      )
    }
  })

  return {
    boardNodes,
    sprintNodes,
    relations,
  }
}
