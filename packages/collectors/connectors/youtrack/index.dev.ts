import { stringify } from 'flatted'
import { getIssues } from '@/methods/issues'

const data = await getIssues({
  query: 'tag:BigTeam and tag:frontend and Sprint:{Sprint 3_2023}&$top=1',
})

console.log(`Hello2 ${stringify(data)}`)
