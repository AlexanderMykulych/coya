import { test, expect } from "vitest";
import { analyzeByContext } from "../analyze";
import { createContext } from "../context/analysisContext";

test('should analyze real file', async () => {
  const path = '/Users/alexandermykulych/repo/plich/user-web-test'
  const context = await createContext(path)

  context.store.set('_config', {
    filesToAnalyze: ['/src/modules/Wizard/shared/components/steps/HeaderBase.ts']
  })

  const result = await analyzeByContext(context)

  expect(result).toMatchSnapshot()
})