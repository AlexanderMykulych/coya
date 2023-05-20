import { defineConnector } from 'coya-connectors-shared'
import type { YoutrackConfig } from './src/types.service'
import { connect } from '@/connect'

export * from './src/types.domain'

export default defineConnector<YoutrackConfig>({
  name: 'youtrack-connector',
  connect,
})
