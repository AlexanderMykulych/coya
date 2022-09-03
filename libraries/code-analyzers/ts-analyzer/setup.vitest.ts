import { beforeEach, afterEach } from 'vitest'
import { clearProgress, printProgress, progressTrackingEnabled } from './src/progress/progress'
import { collectLogsAfterTest } from './src/vite/vitest/collectLogsAfterTest'

if (progressTrackingEnabled) {
  beforeEach(() => {
    clearProgress()
  })

  afterEach(() => {
    printProgress()
  })
}

// afterEach(async () => {
//   await collectLogsAfterTest()
// })