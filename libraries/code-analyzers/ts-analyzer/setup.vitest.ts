import { beforeEach, afterEach } from 'vitest'
import { clearProgress, printProgress, progressTrackingEnabled } from './src/progress/progress'

if (progressTrackingEnabled) {
  beforeEach(() => {
    clearProgress()
  })

  afterEach(() => {
    printProgress()
  })
}