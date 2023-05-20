export interface User {
  id: number
  username: string
  name: string
  state: string
  avatar_url: string
  web_url: string
}

export interface References {
  short: string
  relative: string
  full: string
}

export interface TimeStats {
  time_estimate: number
  total_time_spent: number
  human_time_estimate?: any
  human_total_time_spent?: any
}

export interface TaskCompletionStatus {
  count: number
  completed_count: number
}

export interface MergeRequest {
  id: number
  iid: number
  project_id: number
  title: string
  description: string
  state: string
  created_at: Date
  updated_at: Date
  merged_by?: any
  merge_user?: any
  merged_at?: any
  closed_by?: any
  closed_at?: any
  target_branch: string
  source_branch: string
  user_notes_count: number
  upvotes: number
  downvotes: number
  author: User
  assignees: User[]
  assignee: User
  reviewers: any[]
  source_project_id: number
  target_project_id: number
  labels: any[]
  draft: boolean
  work_in_progress: boolean
  milestone?: any
  merge_when_pipeline_succeeds: boolean
  merge_status: string
  detailed_merge_status: string
  sha: string
  merge_commit_sha?: any
  squash_commit_sha?: any
  discussion_locked?: any
  should_remove_source_branch?: any
  force_remove_source_branch: boolean
  reference: string
  references: References
  web_url: string
  time_stats: TimeStats
  squash: boolean
  squash_on_merge: boolean
  task_completion_status: TaskCompletionStatus
  has_conflicts: boolean
  blocking_discussions_resolved: boolean
  approvals_before_merge?: any
}
