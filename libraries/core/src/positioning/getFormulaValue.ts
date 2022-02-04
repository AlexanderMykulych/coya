/* eslint-disable */
import type { Ref } from 'vue';
import { computed, ref } from 'vue';
import type { TransformSetting } from '..';
import type { FormulaValue } from '../descriptionTypes';
import { isFormulaValue } from '../typeGuards';
import type { BlockPositioning } from '../types';
import { getFormulaValueFuncContext } from './getFormulaValueFuncContext';

export function getFormulaValue(
    val: number | FormulaValue | undefined,
    positioning: Ref<BlockPositioning[]>,
    setting: TransformSetting,
): Ref<any> {
    if (typeof val === 'number')
        return ref(val);

    if (isFormulaValue(val)) {
        const formula = typeof val === 'string' ? val : val.formula;
        const defaultValue = setting.defaultValue !== undefined ? setting.defaultValue : 0;
        return computed(() => {
            const contextBuilderFunc = setting.customContextBuilderFunc ?? getFormulaValueFuncContext;
            const context = contextBuilderFunc(positioning, setting);
            try {
                const fn = Function(`"use strict";return (function(${context.blockNamesAsFuncParams}){return ${formula};})`)();
                return fn.apply(null, context.blocksValues) || 0;
            }
            catch (e) {
                console.warn(e);
                return defaultValue;
            }
        });
    }
    return ref(0);
}
