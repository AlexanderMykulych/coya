import { RelationNode, Relation } from "./RelationNode";
import neo4j from 'neo4j-driver';
import { initNeo4jDriver } from "./driver";
import path = require("path");

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
export async function flushStore(rootFolder: string) {
    const driver = initNeo4jDriver();
    const session = driver!.session({
        database: 'neo4j',
        defaultAccessMode: neo4j.session.WRITE,
    });
    for (const item of store) {
        if (item.node1.name === item.node2.name) {
            continue;
        }
        await session.writeTransaction(async work => {

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
        for await (const node of [item.node1, item.node2]) {
            await processPath(rootFolder, node.filePath, async ({
                name,
                path,
                parent,
                parentName,
                isFile,
            }) => {
                await session.writeTransaction(async work => {
                    const node1 = prepareNeoNode({
                        name,
                        path,
                        isFile,
                    }, 'node1');
                    const node2 = prepareNeoNode({
                        path: parent,
                        name: parentName,
                        isFile: false,
                    }, 'node2');
        
                    var result = await work.run(`
                        MERGE (n1:FsUnit {${node1.queryStr}})
                        MERGE (n2:FsUnit {${node2.queryStr}})
                        MERGE (n1)<-[:PARENT]-(n2)`, {
                        ...node1.param,
                        ...node2.param,
                    });
                });
                if (isFile) {
                    await session.writeTransaction(async work => {
                        const node1 = prepareNeoNode(node, 'node1');
                        const node2 = prepareNeoNode({
                            path,
                        }, 'node2');
            
                        var result = await work.run(`
                            MERGE (n1:Node {${node1.queryStr}})
                            MERGE (n2:FsUnit {${node2.queryStr}})
                            MERGE (n1)<-[:PARENT]-(n2)`, {
                            ...node1.param,
                            ...node2.param,
                        });
                    });
                }
            });
        }
    }
    await session.close();
}

const processPath = async (rootFolder: string, path: string, processor: (config: any) => void) => {
    path = path.replace(rootFolder, '');
    let index = path.lastIndexOf('/');
    let isFile = true;
    while (index > -1) {
        const folder = path.substring(index + 1);
        const parentPath = path.substring(0, index);
        const parentIndex = parentPath.lastIndexOf('/');
        const parentFolder = parentIndex > -1 ? parentPath.substring(parentPath.lastIndexOf('/') + 1) : '';
        await processor({
            name: folder,
            path,
            parent: parentPath,
            parentName: parentFolder,
            isFile,
        });
        isFile = false;
        path = parentPath;
        index = path.lastIndexOf('/');
    }
    return path;
};
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