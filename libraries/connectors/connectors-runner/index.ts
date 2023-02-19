import type { ConnectorSetting, Relation } from 'coya-connectors-shared'
import youtrack from 'coya-youtrack-connector'
import { getNeo4j } from 'coya-neo4j'

const connectors: ConnectorSetting[] = [
  {
    connector: youtrack,
    config: {
      url: 'https://socialtech.myjetbrains.com/api/',
      token: 'perm:YWxla3NhbmRyLm15a3VseWNo.NjEtMzY=.3YAXZtLSVD7SLVpr9C4MfcIQXDkjFM',
    },
  },
]

function runConnectors() {
  connectors.forEach(runConnector)
}

function runConnector({ connector, config }: ConnectorSetting) {
  connector.connect({
    config,
    addNodes,
    addRelations,
  })
}

const neo4j = getNeo4j()
await neo4j.clearDb()

async function addNodes(label: string, items: any[]) {
  console.log('add', label, items.length)

  await neo4j.insert(label, items)

  console.log('adde')
}

async function addRelations(items: Relation[]) {
  console.log('add rels', items.length)
  await neo4j.insertRelations(items)
  console.log('added rels')
}

runConnectors()
