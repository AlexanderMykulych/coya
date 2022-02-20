import type { Driver } from 'neo4j-driver';

export enum DiagramType {
    SimpleQuery = 'SimpleQuery',
}
export interface SimpleQueryDiagramConfig {
    type: DiagramType.SimpleQuery
    query: string
}
export type DiagramConfig = SimpleQueryDiagramConfig;

export interface Neo4jContext {
    driver: Driver
    database: string
}
