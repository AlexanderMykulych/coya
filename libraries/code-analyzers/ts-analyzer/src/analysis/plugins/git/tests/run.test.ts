import { test, expect } from 'vitest'
import git from 'nodegit'

test('should ', async () => {
  const repoPath = await git.Repository.discover(__dirname, 1, null)
  const repo = await git.Repository.open(repoPath)
  const branch = await repo.getCurrentBranch()
  const commit = await repo.getBranchCommit(branch)
  const history = commit.history()

  console.log(commit.author().toString())
  expect(repo).toBeTruthy()
})
