import type { LoadedIssue } from '../../types.domain'

export function extractAdditionalFieldsFromIssue(issue: LoadedIssue): Record<string, any> {
  return {
    storyPoints: issue.customFields?.find(x => x.name === 'Story points')?.value,
    state: issue.customFields?.find(x => x.name === 'State')?.value?.name,
    source: issue.customFields?.find(x => x.name === 'Source')?.value?.name,
    priority: issue.customFields?.find(x => x.name === 'Priority')?.value?.name,
    severity: issue.customFields?.find(x => x.name === 'Severity')?.value?.name,
    tags: issue.tags?.map(x => x.name)?.join(','),
  }
}
