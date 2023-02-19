import { stringify } from 'flatted'
import { getIssues } from '@/methods/issues'

const data = await getIssues()

console.log(`Hello2 ${stringify(data)}`)
