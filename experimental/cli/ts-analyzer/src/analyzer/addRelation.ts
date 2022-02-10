import { RelationNode, Relation } from "./RelationNode";
import neo4j from 'neo4j-driver';
import { initNeo4jDriver } from "./driver";

const store: any[] = [];
export function addRelation(node1: RelationNode, node2: RelationNode, relation?: Relation) {
    if (!store.some(x => x.node1.name === node1.name && x.node2.name === node2.name)) {
        store.push({
            node1,
            node2,
            relation,
        });
    }
}
export async function flushStore() {
    const driver = initNeo4jDriver();
    const session = driver!.session({
        database: 'neo4j',
        defaultAccessMode: neo4j.session.WRITE,
    });
    for (const item of store) {
        if (item.node1.name === item.node2.name) {
            // console.log("test", item.node1.name)
            continue;
        }
        await session.writeTransaction(async work => {
            console.log("test", item.node1.name, item.node2.name)

            const node1 = prepareNeoNode(item.node1, 'node1');
            const node2 = prepareNeoNode(item.node2, 'node2');

            var result = await work.run(`
                MERGE (n1:Node {${node1.queryStr}})
                MERGE (n2:Node {${node2.queryStr}})
                MERGE (n1)-[:DEPENDS]->(n2)`, {
                ...node1.param,
                ...node2.param,
            });
        });
    }
    await session.close();
}

function prepareNeoNode(node: Record<string, any>, prefix: string) {
    return {
        queryStr: Object.keys(node)
            .map(x => `${x}: $${prefix}_${x}`)
            .join(', '),
        param: Object.fromEntries(
            Object.entries(node)
                .map(([key, val]) => [`${prefix}_${key}`, val])),
    };
}