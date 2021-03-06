/* eslint-disable */
import { isNotNullOrUndefined } from 'coya-util';
import type { Ref } from 'vue';
import { computed, ref } from 'vue';
import { getNestedCoyaChildrenFromContext } from '..';
import type { FormulaValue } from '../descriptionTypes';
import { isContainerBlock, isFormulaValue, isLineBlockElement } from '../typeGuards';
import type { BlockPositioning } from '../types';
import { getFormulaValue } from './getFormulaValue';
import { getPositionProxy } from './getPositionProxy';
import { lineBlockPosition } from './lineBlockPosition';
import type { AutoPositioningSetting } from './types';

export function gridPositioning(option: AutoPositioningSetting): BlockPositioning[] {
    const blocks = option.blocks.filter(x => x.id !== 'main');
    const notSettetBlocks = blocks
        .filter((block) => {
            if (isLineBlockElement(block))
                return false;

            const styleBlock = option
                .architectureDescription
                .style?.blocks?.[block.id];
            return !styleBlock || !styleBlock.position;
        });
    const style = option.architectureDescription.style?.blocks;
    if (!style || notSettetBlocks.length > 0)
        throw `Not every block has setting: [${notSettetBlocks.map(x => x.id)}]`;

    const blocksPositioning: Ref<BlockPositioning[]> = ref([]);
    const getValueByCtx = (x?: number | FormulaValue, multiplier = 1) => {
        const res = getFormulaValue(x, blocksPositioning, option.setting);
        if (isFormulaValue(x))
            return res;

        return ref(res.value * multiplier);
    };
    blocksPositioning.value = blocks.map<BlockPositioning | null>((block) => {
        const blockStyle = style[block.id];
        if (!isContainerBlock(block)) {
            if (isLineBlockElement(block))
                return lineBlockPosition(blocksPositioning, block, option.setting, blockStyle);

            return null;
        }
        if (blockStyle.position) {
            const pos = blockStyle.position;

            const indentX = (getValueByCtx(pos.indentX) ?? ref(0));
            const indentY = (getValueByCtx(pos.indentY) ?? ref(0));

            const pinTo = blockStyle.pinTo;
            let pinToBlockPos = ref({
                x: 0,
                y: 0,
            });
            if (pinTo) {
                pinToBlockPos = computed(() => {
                    const point = getValueByCtx(pinTo);
                    return {
                        x: point.value.x,
                        y: point.value.y,
                    }
                });
            }
            const blockId = block.id;
            const position = {
                x: computed(() => getValueByCtx(pos.x).value + indentX.value + pinToBlockPos.value.x),
                y: computed(() => getValueByCtx(pos.y).value + indentY.value + pinToBlockPos.value.y),
                w: computed(() => getValueByCtx(pos.w).value + indentX.value),
                h: computed(() => getValueByCtx(pos.h).value + indentY.value),
                top: {
                    x: computed(() => getValueByCtx(pos.top?.x ?? `${blockId}.x + ${blockId}.w / 2`).value),
                    y: computed(() => getValueByCtx(pos.top?.y ?? `${blockId}.y`).value),
                    w: 0,
                    h: 0,
                },
                bottom: {
                    x: computed(() => getValueByCtx(pos.top?.x ?? `${blockId}.top.x`).value),
                    y: computed(() => getValueByCtx(pos.top?.y ?? `${blockId}.y + ${blockId}.h`).value),
                    w: 0,
                    h: 0,
                },
                right: {
                    x: computed(() => getValueByCtx(pos.top?.x ?? `${blockId}.x + ${blockId}.w`).value),
                    y: computed(() => getValueByCtx(pos.top?.y ?? `${blockId}.y + ${blockId}.h / 2`).value),
                    w: 0,
                    h: 0,
                },
                left: {
                    x: computed(() => getValueByCtx(pos.top?.x ?? `${blockId}.x`).value),
                    y: computed(() => getValueByCtx(pos.top?.y ?? `${blockId}.right.y`).value),
                    w: 0,
                    h: 0,
                },
            };
            const context = option.setting.contextGetter();
            const childrenBlocks = getNestedCoyaChildrenFromContext(context, blockId);
            return <BlockPositioning>{
                blockId,
                position: getPositionProxy(position, childrenBlocks),
            };
        }
        return null;
    }).filter(isNotNullOrUndefined);
    return blocksPositioning.value;
}
