import { http } from '@/axios'
import type { GetIssuesResponse, Issue, IssueRelation, IssueWithLinks } from '@/types.domain'
import { LinkTypeName } from '@/types.domain'

const issueFields = 'fields=id,idReadable,summary,description,reporter(login),links(id,direction,linkType(name),issues(id))'

export async function getIssues(): Promise<GetIssuesResponse> {
  const issues = new Map<string, Issue>()
  const relations: IssueRelation[] = []

  const response = await http.get<IssueWithLinks[]>(
    `issues?${issueFields}&query=tag:frontend&$top=400`,
  )

  const addIssue = (issue: IssueWithLinks) => {
    if (!issues.has(issue.id)) {
      const issueCopy = {
        ...issue,
        links: undefined,
      }
      issues.set(issue.id, issueCopy)
    }
  }
  const addRelation = (from: string, to: string) => relations.push({
    fromNode: 'issue',
    from,
    toNode: 'issue',
    to,
  })

  response.data.forEach(issue => addIssue(issue))

  await loadIssues({
    ids: getLinkedIssuesIds({
      issues: response.data,
      addRelation,
    }),
    isLoaded: id => issues.has(id),
    addIssue,
    addRelation,
  })

  return {
    issues: Array.from(issues, ([_, val]) => val),
    relations,
  }
}

type LoadIssueParam = {
  ids: string[]
  isLoaded: (id: string) => boolean
  addIssue: (issue: IssueWithLinks) => void
  addRelation: (from: string, to: string) => void
}

async function loadIssues({ ids, addIssue, isLoaded, addRelation }: LoadIssueParam) {
  let issuesQueue: string[] = ids

  const loadIssuesRec = async() => {
    const response = await http.post<IssueWithLinks[]>(
      `issuesGetter?${issueFields}`,
      issuesQueue.map(id => ({ id })),
    )

    const issues = response.data

    issues.forEach(issue => addIssue(issue))

    const linkedIds = getLinkedIssuesIds({
      issues,
      isLoaded,
      addRelation,
    })

    issuesQueue = linkedIds
  }

  while (issuesQueue.length > 0) {
    await loadIssuesRec()
  }
}

export type GetLinkedIssuesParam = {
  issues: IssueWithLinks[]
  isLoaded?: LoadIssueParam['isLoaded']
  addRelation: LoadIssueParam['addRelation']
}

function getLinkedIssuesIds({ issues, isLoaded, addRelation }: GetLinkedIssuesParam): string[] {
  const isLoadedFn = isLoaded ?? (_ => false)

  const linkedIds = issues.flatMap((x) => {
    const linkIssues = x.links.filter(x => x.linkType.name === LinkTypeName.Subtask).flatMap(y => y.issues)
    if (linkIssues && linkIssues.length > 0) {
      linkIssues.forEach(({ id }) => addRelation(x.id, id))

      return linkIssues
        .filter(x => !isLoadedFn(x.id))
        .map(x => x.id)
    }
    return []
  })

  return linkedIds
}
