import { http } from '@/axios'
import type { AgileBoard } from '@/types.domain'

export async function getAgileBoards(): Promise<AgileBoard[]> {
  const response = await http.get<AgileBoard[]>('agiles?$top=-1&fields=id,name,favorite,sprints(id,name),owner(id,fullName)&templates=false')

  return response.data
}
