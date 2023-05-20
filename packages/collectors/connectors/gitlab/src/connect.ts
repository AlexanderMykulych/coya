import type { ConnectParams } from 'coya-connectors-shared'
import { http } from './axios'
import { getMR } from './getMR'

export type GitLabConfig = {
  url: string
  token: string
}

export async function connect({ config, addNodes }: ConnectParams<GitLabConfig>): Promise<void> {
  http.defaults.baseURL = config.url
  http.defaults.headers.Authorization = `Bearer ${config.token}`

  const { mergeRequests } = await getMR()

  await addNodes(
    'mr',
    mergeRequests.map(mr => ({
      ...mr,
      id: mr.iid,
      originId: mr.id,
    })),
  )
}
