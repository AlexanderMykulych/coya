import { RelationNode, Relation } from "./RelationNode";
import neo4j, { Driver } from 'neo4j-driver';

let driver: Driver | undefined;
function initNeo4jDriver() {
    driver = neo4j.driver('neo4j://localhost', neo4j.auth.basic('neo4j', 'test'))
}

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
    if (!driver) {
        initNeo4jDriver();
    }
    var session = driver!.session({
        database: 'neo4j',
        defaultAccessMode: neo4j.session.WRITE,
    });
    console.log(store);
    await session.writeTransaction(async work => {
        for (const item of store) {
            const node1 = prepareNeoNode(item.node1, 'node1');
            const node2 = prepareNeoNode(item.node2, 'node2');
            var result = await work.run(`
                MERGE (n1:Node {${node1.queryStr}})
                MERGE (n2:Node {${node2.queryStr}})
                MERGE (n1)-[:DEPENDS]->(n2)`, {
                ...node1.param,
                ...node2.param,
            });
            console.log("result", result);
        }
    });
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