import path from 'path'
import { expect, test } from 'vitest'
import { collectLogsAfterTest } from '../../../vite/vitest/collectLogsAfterTest'
import { analyze } from '../../analyze'

test.skip('should analyze simple ts project', async () => {
  await analyze(path.resolve(__dirname, './cases/project4'))

  const executionInfo = await collectLogsAfterTest()

  expect(executionInfo).toMatchSnapshot()
})
