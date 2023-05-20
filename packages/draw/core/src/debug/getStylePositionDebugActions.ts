import { ref, unref } from 'vue';
import type { DebugAction, LineDebugAction } from '../debugTypes';
import type { DebugSelectContext, SelectedProperties } from '../types';
import type { CustomContextBuilderFunc } from '../descriptionTypes';
import { DebugType } from '../debugTypes';
import { getFormulaValue } from '../positioning/getFormulaValue';
import { getColor } from './colors';

export function getStylePositionDebugActions(selected: SelectedProperties, debugContext: DebugSelectContext): DebugAction[] {
    const posAttr = selected.properties?.[4]?.name;
    const posValue = selected.properties?.[5]?.name;
    const blockId = selected.properties?.[2]?.name;
    if (!posAttr || !posValue)
        return [];

    const posNumber = Number(posValue);
    if (!isNaN(posNumber)) {
        return [{
            type: DebugType.Line,
            lineType: posAttr as any,
            value: posNumber,
            color: getColor(),
            label: `${blockId}.${posAttr}`,
        }];
    }
    if (posValue && debugContext.style.value?.positioning) {
        try {
            const affectedBlocks: LineDebugAction[] = [];
            const addAffectedBlock = (key: string, value: number, blockId: string) => {
                if ((key === 'x' || key === 'y') && !affectedBlocks.some(x => x.value === value)) {
                    affectedBlocks.push({
                        type: DebugType.Line,
                        value,
                        color: getColor(),
                        lineType: key,
                        label: `${blockId}.${key}: ${Math.floor(value)}`,
                    });
                }
            };
            const customContextBuilderFunc: CustomContextBuilderFunc = (pos, setting) => {
                const posProxy = pos.value.map((x) => {
                    const pos: any = x.position;
                    const res: any = {};
                    Object
                        .keys(pos)
                        .forEach((key) => {
                            Object.defineProperty(res, key, {
                                get: () => {
                                    const res = pos[key];
                                    addAffectedBlock(key, unref(res), x.blockId);
                                    return res;
                                },
                            });
                        });
                    return res;
                });
                return {
                    blockNamesAsFuncParams: `${pos.value.map(x => x.blockId).join(', ')}, _`,
                    blocksValues: [
                        ...posProxy,
                        {
                            viewBox: {
                                x: unref(setting.viewBox.x),
                                y: unref(setting.viewBox.y),
                                w: unref(setting.viewBox.w),
                                h: unref(setting.viewBox.h),
                            },
                        },
                    ],
                };
            };
            const result = getFormulaValue(posValue, ref(debugContext.style.value.positioning), {
                ...debugContext.transformSetting,
                customContextBuilderFunc,
            });
            return [{
                type: DebugType.Line,
                lineType: posAttr as any,
                value: unref(result),
                color: getColor(),
                label: `${blockId}.${posAttr}`,
            },
            ...affectedBlocks];
        }
        catch (e) {
            console.error(`debug. formula is: ${posValue}, ${e}`);
        }
    }
    return [];
}
