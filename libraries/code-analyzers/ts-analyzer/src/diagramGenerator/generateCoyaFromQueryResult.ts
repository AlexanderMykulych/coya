import type { QueryResult } from 'neo4j-driver';
import { applyPositioning } from 'coya-core'
import { progressSync } from '../progress/progress';

const getBlockId = (id: string) => `b_${id}`;
const getArrowId = (id: string) => `a_${id}`;

function _generateCoyaFromGraphResult(result: QueryResult) {
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
      graph.nodes.forEach(n => blocksMap.set(getBlockId(n.identity), n));
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
  const blocks = Object.fromEntries(blocksEntries.map(([key, node]) => [key, node.properties.id]));
  const arrows = Object.fromEntries(arrowsMap.entries());
  const diagram = {
    name: 'coya-ts-analyzer',
    blocks: {
      ...blocks,
      ...arrows,
    },
    phases: [],
    style: {
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
              get: val.properties.entityType === 'file'
                ? '_file'
                : val.properties.entityType === 'folder'
                  ? '_folder'
                  : '_func',
            },
          }]),
        ),
      },
    },
  }

  applyPositioning(diagram, 'Dagre')

  return diagram;
}

export const generateCoyaFromGraphResult = progressSync('neo4j data to coya', _generateCoyaFromGraphResult)