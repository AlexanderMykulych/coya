import type { Ref } from 'vue';
import { unref } from 'vue';
import { getBoxToBoxArrow, getBoxToBoxArrowPath } from 'coya-arrow';
import type { TransformSetting } from '..';
import type { BlockPositioning, FormulaValueFuncContext } from '../types';
import { findClosestPoints } from './alg/findClosestPoints';

const globalObjectNames = ['document', 'window'];
export function getFormulaValueFuncContext(blocksPositioning: Ref<BlockPositioning[]>,
    setting: TransformSetting): FormulaValueFuncContext {
    const blocks = blocksPositioning.value.map(x => x.blockId);
    const emptyObjects = globalObjectNames.filter(x => !blocks.includes(x));

    return {
        blockNamesAsFuncParams: [...blocks, '_', ...emptyObjects].join(','),
        blocksValues:
            [
                ...blocksPositioning.value.map(x => x.position),
                {
                    viewBox: {
                        x: unref(setting.viewBox.x),
                        y: unref(setting.viewBox.y),
                        w: unref(setting.viewBox.w),
                        h: unref(setting.viewBox.h),
                    },
                    fn: {
                        findClosestPoints,
                        getBoxToBoxArrow,
                        getBoxToBoxArrowPath,
                    },
                },
            ],
    };
}
