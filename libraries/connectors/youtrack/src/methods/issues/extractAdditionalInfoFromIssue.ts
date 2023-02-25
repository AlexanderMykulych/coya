import type { LoadedIssue, TrackerUser } from '../../types.domain'
import type { addNodeFunc, addRelationFunc } from './types'

type ExtractAdditionalInfoParam = {
  issue: LoadedIssue
  addNode<T>(...args: Parameters<addNodeFunc<T>>): ReturnType<addNodeFunc<T>>
  addRelation: addRelationFunc
}

export function extractAdditionalInfoFromIssue(param: ExtractAdditionalInfoParam) {
  extractTags(param)
  extractSprints(param)
  extractGitLabMR(param)
  extractAssignee(param)
  extractAssigneeQA(param)
  extractReporter(param)
  extractUpdater(param)
}

function extractTags({ issue, addNode, addRelation }: ExtractAdditionalInfoParam) {
  issue.tags?.forEach((tag) => {
    addNode('tag', {
      id: tag.name,
      ...tag,
    })

    addRelation({
      toNode: 'tag',
      to: tag.name,
      fromNode: 'issue',
      from: issue.id,
      type: 'tag',
    })
  })
}

function extractSprints({ issue, addNode, addRelation }: ExtractAdditionalInfoParam) {
  const sprintField = issue.customFields?.find(field => field.name === 'Sprint')

  if (sprintField && Array.isArray(sprintField.value)) {
    sprintField.value.forEach((sprintVal) => {
      addNode('sprint', {
        id: sprintVal.id,
        name: sprintVal.name,
      })

      addRelation({
        toNode: 'sprint',
        to: sprintVal.id,
        fromNode: 'issue',
        from: issue.id,
        type: 'sprint',
      })
    })
  }
}

function extractGitLabMR({ issue, addNode, addRelation }: ExtractAdditionalInfoParam) {
  const mr: string | undefined = issue.customFields?.find(field => field.name === 'GitLab PR link')?.value

  const match = mr?.matchAll(/merge_requests\/(?<mrNumber>\d*)/gm)
  if (match) {
    const matches = Array.from(match)
    matches
      .map(x => x.groups?.mrNumber || '')
      .forEach((mrNumber) => {
        addNode('mr', {
          id: mrNumber,
          number: mrNumber,
        })

        addRelation({
          toNode: 'mr',
          to: mrNumber,
          fromNode: 'issue',
          from: issue.id,
          type: 'mr',
        })
      })
  }
}

function extractAssignee({ issue, addNode, addRelation }: ExtractAdditionalInfoParam) {
  const assignees: string | undefined = issue.customFields?.find(field => field.name === 'Assignee')?.value

  if (assignees && Array.isArray(assignees)) {
    assignees.forEach((assignee) => {
      addNode<TrackerUser>('trackerUser', {
        id: assignee.id,
        name: assignee.name,
        fullName: assignee.fullName,
        login: assignee.login,
        avatarUrl: assignee.avatarUrl,
      })

      addRelation({
        fromNode: 'issue',
        from: issue.id,
        toNode: 'trackerUser',
        to: assignee.id,
        type: 'assignee',
      })
    })
  }
}

function extractAssigneeQA({ issue, addNode, addRelation }: ExtractAdditionalInfoParam) {
  const assignees: string | undefined = issue.customFields?.find(field => field.name === 'Assignee QA')?.value

  if (assignees && Array.isArray(assignees)) {
    assignees.forEach((assignee) => {
      addNode<TrackerUser>('trackerUser', {
        id: assignee.id,
        name: assignee.name,
        fullName: assignee.fullName,
        login: assignee.login,
        avatarUrl: assignee.avatarUrl,
      })

      addRelation({
        fromNode: 'issue',
        from: issue.id,
        toNode: 'trackerUser',
        to: assignee.id,
        type: 'assigneeQA',
      })
    })
  }
}

function extractReporter({ issue, addNode, addRelation }: ExtractAdditionalInfoParam) {
  const reporter: TrackerUser | undefined = issue.reporter

  if (reporter && reporter.id) {
    addNode<TrackerUser>('trackerUser', {
      id: reporter.id,
      name: reporter.name,
      fullName: reporter.fullName,
      login: reporter.login,
      avatarUrl: reporter.avatarUrl,
    })

    addRelation({
      fromNode: 'issue',
      from: issue.id,
      toNode: 'trackerUser',
      to: reporter.id,
      type: 'reporter',
    })
  }
}

function extractUpdater({ issue, addNode, addRelation }: ExtractAdditionalInfoParam) {
  const updater: TrackerUser | undefined = issue.updater

  if (updater && updater.id) {
    addNode<TrackerUser>('trackerUser', {
      id: updater.id,
      name: updater.name,
      fullName: updater.fullName,
      login: updater.login,
      avatarUrl: updater.avatarUrl,
    })

    addRelation({
      fromNode: 'issue',
      from: issue.id,
      toNode: 'trackerUser',
      to: updater.id,
      type: 'updater',
    })
  }
}
