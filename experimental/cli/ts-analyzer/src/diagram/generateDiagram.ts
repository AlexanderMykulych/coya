import neo4j from 'neo4j-driver';
import { initNeo4jDriver } from "./../analyzer/driver";
import * as fs from "fs";
const getBlockId = (id: string) => `b_${id}`;
const getArrowId = (id: string) => `a_${id}`;
export async function generateDiagram() {
    const driver = initNeo4jDriver();

    const session = driver.session({
        database: 'neo4j',
        defaultAccessMode: neo4j.session.READ,
    });

    const nodesResult = await session.run(`MATCH (n:Node) RETURN n`);
    const relsResult = await session.run(`MATCH (n1:Node)-[r]->(n2: Node) RETURN r`);

    session.close();

    const blocks = Object.fromEntries(
        nodesResult
            .records
            .map(x => x.get('n'))
            .map(x => [getBlockId(x.identity), x.properties.name])
    );
    const arrows = Object.fromEntries(relsResult
        .records
        .map(x => x.get('r'))
        .map(x => [getArrowId(x.identity), {
            from: getBlockId(x.start.toString()),
            to: getBlockId(x.end.toString()),
			type: 'line',
			label: '',
        }])
    );
    
    const diagram = {
        name: 'coya-ts-analyzer',
        blocks: {
            ...blocks,
            ...arrows,
        },
        phases: [],
        style: {
            layout: {
                type: "Mindmap"
            },
            blocks: {},
        }
    };
    saveCoyaConfig('/home/alex/RiderProjects/Coya/Coya/libraries/vue-component/src/examples/ts_a.coya.json', diagram);
}

export const saveCoyaConfig = (filePath: string, config: any) => {
    fs.writeFileSync(filePath, JSON.stringify(config, null, "\t"));
}