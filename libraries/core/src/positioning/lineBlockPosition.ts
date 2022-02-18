/* eslint-disable */
import type { Ref } from 'vue';
import { computed } from 'vue';
import type { BlockPositioning, LineBlockElement } from '../types';
import type { BlockStyle, FormulaValue } from '../descriptionTypes';
import type { TransformSetting } from '..';
import { getFormulaValue } from './getFormulaValue';

export function lineBlockPosition(blocksPositions: Ref<BlockPositioning[]>, block: LineBlockElement,
    setting: TransformSetting, blockStyle?: BlockStyle): BlockPositioning {
    const getValueByCtx = (x?: number | FormulaValue, def?: any) =>
        getFormulaValue(x, blocksPositions, { defaultValue: def, ...setting });
    const arrowHeadSize = 10;
    let str = '';
    if (hasSpecificPoint(block.from))
        str += `, startPoint: ${block.from}`;

    if (hasSpecificPoint(block.to))
        str += `, endPoint: ${block.to}`;

    const meta = getValueByCtx(`_.fn.getBoxToBoxArrowPath(${block.from}, ${block.to}, {padEnd: ${arrowHeadSize}, padStart: ${arrowHeadSize} ${str} })`, {});

    const x1 = computed(() => meta.value.results.x1);
    const y1 = computed(() => meta.value.results.y1);
    const x2 = computed(() => meta.value.results.x2);
    const y2 = computed(() => meta.value.results.y2);
    return {
        blockId: block.id,
        position: {
            x1,
            y1,
            x2,
            y2,
            x: computed(() => Math.min(x1.value, x2.value)),
            y: computed(() => Math.min(y1.value, y2.value)),
            w: computed(() => Math.abs(x1.value - x2.value)),
            h: computed(() => Math.abs(y1.value - y2.value)),
            meta: computed(() => ({
                ...meta.value,
                arrowHeadSize,
            })),
        },
    };
}

const specificNames = ['top', 'left', 'right', 'bottom'];
const hasSpecificPoint = (str: string) => {
    const dotLastIndex = str.lastIndexOf('.');
    if (dotLastIndex > -1) {
        const lastPart = str.substring(dotLastIndex);
        return specificNames.some(x => x === lastPart);
    }
    return false;
};
