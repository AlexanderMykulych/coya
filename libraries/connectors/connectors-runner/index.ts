import type { ConnectorSetting, Relation } from 'coya-connectors-shared'
import youtrack from 'coya-youtrack-connector'
import { getNeo4j } from 'coya-neo4j'
import { flatten } from 'flat'

const connectors: ConnectorSetting[] = [
  {
    connector: youtrack,
    config: {
      url: import.meta.env.VITE_YOUTRACK_URL,
      token: import.meta.env.VITE_YOUTRACK_TOKEN,
      issueQueries: [
        'tag:BigTeam and (Sprint:{Sprint 1_2023} or Sprint:{Sprint 2_2023} or Sprint:{Sprint 3_2023} or Sprint:{Sprint 4_2023} or Sprint:{Sprint 5_2023})',
      ],
      issueLoadingMaxDepthLevel: 10,
    },
  },
  // {
  //   connector: gitlab,
  //   config: {
  //     url: import.meta.env.VITE_GITLAB_URL,
  //     token: import.meta.env.VITE_GITLAB_TOKEN,
  //   },
  // },
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

  await neo4j.insert(label, items.map(x => flatten<any, any>(x)))

  console.log('adde')
}

async function addRelations(items: Relation[]) {
  console.log('add rels', items.length)
  await neo4j.insertRelations(items.map(x => flatten<any, any>(x)))
  console.log('added rels')
}

runConnectors()
