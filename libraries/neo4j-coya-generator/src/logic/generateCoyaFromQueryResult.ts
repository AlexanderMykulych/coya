import type { QueryResult } from 'neo4j-driver';
import type { DiagramConfig } from './model';

const getBlockId = (id: string) => `b_${id}`;
const getArrowId = (id: string) => `a_${id}`;

export function generateCoyaFromQueryResult(result: QueryResult, diagramConfig: DiagramConfig) {
    const blocksMap = new Map<string, any>();
    const arrowsMap = new Map<string, any>();
    result
        .records
        .forEach((item) => {
            const graph = item.get('graph');
            graph.relationships.forEach((r) => {
                arrowsMap.set(getArrowId(r.identity), {
                    from: getBlockId(r.start.toString()),
                    to: getBlockId(r.end.toString()),
                    type: 'line',
                    label: '',
                });
            });
            graph.nodes.forEach(n => blocksMap.set(getBlockId(n.identity), n.properties));
        });
    // .forEach((item) => {
    //     const from = item.get('from');
    //     const to = item.get('to');
    //     const r = item.get('r');
    //     blocksMap.set(getBlockId(from.identity), from.properties.name);
    //     blocksMap.set(getBlockId(to.identity), to.properties.name);
    //     arrowsMap.set(getArrowId(r.identity), {
    //         from: getBlockId(r.start.toString()),
    //         to: getBlockId(r.end.toString()),
    //         type: 'line',
    //         label: '',
    //     });
    // });

    const blocksEntries = [...blocksMap.entries()];
    const blocks = Object.fromEntries(blocksEntries.map(([key, node]) => [key, node.name]));
    const arrows = Object.fromEntries(arrowsMap.entries());
    const diagram = {
        name: 'coya-ts-analyzer',
        blocks: {
            ...blocks,
            ...arrows,
        },
        phases: [],
        style: {
            layout: {
                type: 'Dagre',
            },
            blocks: {
                _: {
                    css: {
                        text: {
                            fontSize: 'auto',
                        },
                    },
                },
                _folder: {
                    css: {
                        fillStyle: 'solid',
                        color: '#ffffffff',
                        fill: '#f67c01ff',
                    },
                },
                _file: {
                    css: {
                        fillStyle: 'solid',
                        color: '#ffffffff',
                        fill: '#008781ff',
                    },
                },
                _func: {
                    css: {
                        fillStyle: 'solid',
                        color: '#ffffffff',
                        fill: '#2097f3ff',
                    },
                },
                ...Object.fromEntries(
                    blocksEntries.map(([key, val]) => [key, {
                        css: {
                            get: val.isFile === true
                                ? '_file'
                                : val.isFile === false ? '_folder' : '_func',
                        },
                    }]),
                ),
            },
        },
    };
    return diagram;
}
