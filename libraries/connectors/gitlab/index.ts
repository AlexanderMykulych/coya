import { defineConnector } from 'coya-connectors-shared'
import { connect } from '@/connect'

export default defineConnector({
  name: 'gitlab-connector',
  connect,
})
