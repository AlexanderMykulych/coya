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

    const nodesResult = await session.run(`
        MATCH (n1:FsUnit)-[*0..]->(n)
        where n1.name = 'libraries'
        RETURN n`);
    const relsResult = await session.run(`
        MATCH p = (n1:FsUnit)-[*1..]->(n)
        where n1.name = 'libraries'
        with relationships(p) as rs
        unwind rs as r
        return distinct r
    `);

    session.close();

    const blocks = nodesResult
            .records
            .map(x => x.get('n'))
            .map(x => [getBlockId(x.identity), x.properties]);
    const coyaBlocks = Object.fromEntries(blocks.map(([key, val]) => [key, val.name]));
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
            ...coyaBlocks,
            ...arrows,
        },
        phases: [],
        style: {
            layout: {
                type: "Dagre"
            },
            blocks: {
                _: {
                    css: {
                        text: {
                            fontSize: 'auto',
                        }
                    }
                },
                _folder: {
                    css: {
                        fillStyle: 'solid',
                        color: '#ffffffff',
                        fill: '#f67c01ff',
                    }
                },
                _file: {
                    css: {
                        fillStyle: 'solid',
                        color: '#ffffffff',
                        fill: '#008781ff',
                    }
                },
                _func: {
                    css: {
                        fillStyle: 'solid',
                        color: '#ffffffff',
                        fill: '#2097f3ff',
                    }
                },
                ...Object.fromEntries(
                    blocks.map(([key, val]) => [key, {
                            css: {
                                get: val.isFile === true ? '_file' :
                                    val.isFile === false ? '_folder' : '_func',
                            }
                        }]),
                )
            },
        }
    };
    saveCoyaConfig('/home/alex/RiderProjects/Coya/Coya/libraries/vue-component/src/examples/ts_a.coya.json', diagram);
}

export const saveCoyaConfig = (filePath: string, config: any) => {
    fs.writeFileSync(filePath, JSON.stringify(config, null, "\t"));
}