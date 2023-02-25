import type { Node } from 'coya-connectors-shared'
import { extractAdditionalInfoFromIssue } from './extractAdditionalInfoFromIssue'
import type { AddRelationParam } from './types'
import { extractAdditionalFieldsFromIssue } from './extractAdditionalFieldsFromIssue'
import type { Issue, IssueRelation, LoadedIssue } from '@/types.domain'

export function createLoadedContext() {
  const issues = new Map<string, Issue>()
  const nodes = new Map<string, Map<string, Node>>()
  const relations: IssueRelation[] = []

  const addRelation = (relation: IssueRelation) => {
    return relations.push(relation)
  }
  const addNode = (label: string, node: Node) => {
    if (!nodes.has(label)) {
      nodes.set(label, new Map<string, Node>())
    }

    const labelMap = nodes.get(label)

    if (labelMap && !labelMap.has(node.id)) {
      labelMap.set(node.id, node)
    }
  }
  return {
    addNode,
    addRelation,
    isAlreadyLoaded(id: string) {
      return issues.has(id)
    },
    addIssue(issue: LoadedIssue) {
      if (!issues.has(issue.id)) {
        const issueCopy = {
          ...issue,
          links: undefined,
          tags: undefined,
          customFields: undefined,
          ...extractAdditionalFieldsFromIssue(issue),
        }
        issues.set(issue.id, issueCopy)

        extractAdditionalInfoFromIssue({
          issue,
          addNode,
          addRelation,
        })
      }
    },
    addIssueRelation({ from, to, type }: AddRelationParam) {
      return addRelation({
        fromNode: 'issue',
        from,
        toNode: 'issue',
        to,
        type,
      })
    },

    getIssues(): Issue[] {
      return mapToArray(issues)
    },
    getRelations(): IssueRelation[] {
      return relations
    },
    getNodes() {
      return nodesToEntries(nodes)
    },
  }
}
export function nodesToEntries(nodes: Map<string, Map<string, Node>>): Array<[string, Node[]]> {
  return Array.from(nodes)
    .map(([label, values]) => [label, mapToArray(values)])
}
export function mapToArray<T>(map: Map<string, T>): T[] {
  return Array.from(map, ([_, val]) => val)
}
