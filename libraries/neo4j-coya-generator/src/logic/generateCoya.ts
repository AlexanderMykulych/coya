import { session as neo4jSession } from 'neo4j-driver';
import { DiagramType } from './model';
import type { DiagramConfig, Neo4jContext } from './model';
import { generateCoyaFromQueryResult } from './generateCoyaFromQueryResult';

export async function generateCoya({ driver, database }: Neo4jContext, diagramConfig: DiagramConfig) {
    const session = driver.session({
        database,
        defaultAccessMode: neo4jSession.READ,
    });

    if (diagramConfig.type === DiagramType.SimpleQuery) {
        const result = await session.run(diagramConfig.query);
        return await generateCoyaFromQueryResult(result, diagramConfig);
    }
}
