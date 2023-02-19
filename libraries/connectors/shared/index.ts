export type Relation = {
  fromNode: string
  from: string
  toNode: string
  to: string
}

export type ConnectParams<T> = {
  addNodes: (label: string, items: any[]) => Promise<void>
  addRelations: (items: Relation[]) => Promise<void>
  config: T
}

export type Connector<T = any> = {
  name: string
  connect: (params: ConnectParams<T>) => Promise<void>
}

export type ConnectorSetting = {
  connector: Connector
  config: any
}

export function defineConnector<T>(connectorObj: Connector<T>): Connector<T> {
  return connectorObj
}
