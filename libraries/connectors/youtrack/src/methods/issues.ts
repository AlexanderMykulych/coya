import type { Node } from 'coya-connectors-shared'
import type { IssueQuery } from '../types.service'
import { extractAdditionalInfoFromIssue } from './issues/extractAdditionalInfoFromIssue'
import { getLinkedIssuesIds } from './issues/getLinkedIssuesIds'
import { loadIssues } from './issues/loadIssues'
import type { AddRelationParam } from './issues/types'
import { issueFields } from './issues/issueFields'
import { http } from '@/axios'
import type { GetIssuesResponse, Issue, IssueRelation, LoadedIssue } from '@/types.domain'

export type GetIssuesParam = {
  query: IssueQuery
}

export async function getIssues({ query }: GetIssuesParam): Promise<GetIssuesResponse> {
  const issues = new Map<string, Issue>()
  const nodes = new Map<string, Map<string, Node>>()
  const relations: IssueRelation[] = []

  const response = await http.get<LoadedIssue[]>(
    `issues?${issueFields}&query=${encodeURI(query)}`,
  )

  const addNode = (label: string, node: Node) => {
    if (!nodes.has(label)) {
      nodes.set(label, new Map<string, Node>())
    }

    const labelMap = nodes.get(label)

    if (labelMap && !labelMap.has(node.id)) {
      labelMap.set(node.id, node)
    }
  }

  const addRelation = (relation: IssueRelation) => relations.push(relation)

  const addIssue = (issue: LoadedIssue) => {
    if (!issues.has(issue.id)) {
      const issueCopy = {
        ...issue,
        links: undefined,
        tags: undefined,
      }
      issues.set(issue.id, issueCopy)

      extractAdditionalInfoFromIssue(issue, addNode, addRelation)
    }
  }
  const addIssueRelation = ({ from, to, type }: AddRelationParam) => addRelation({
    fromNode: 'issue',
    from,
    toNode: 'issue',
    to,
    type,
  })

  response.data.forEach(issue => addIssue(issue))

  await loadIssues({
    ids: getLinkedIssuesIds({
      issues: response.data,
      addRelation: addIssueRelation,
    }),
    isLoaded: id => issues.has(id),
    addIssue,
    addRelation: addIssueRelation,
  })

  return {
    issues: mapToArray(issues),
    relations,
    nodes: nodesToEntries(nodes),
  }
}

function mapToArray<T>(map: Map<string, T>): T[] {
  return Array.from(map, ([_, val]) => val)
}

function nodesToEntries(nodes: Map<string, Map<string, Node>>): Array<[string, Node[]]> {
  return Array.from(nodes)
    .map(([label, values]) => [label, mapToArray(values)])
}
