import { BlockPositioning, LineBlockElement } from "../types";
import { computed, Ref } from "@vue/reactivity";
import { isRectPositioning } from "../typeGuards";
import { getNumber } from "./getNumber";

export function relativeBlockPosition(blocksPositions: Ref<BlockPositioning[]>, block: LineBlockElement): BlockPositioning {
    const blockFromPos = computed(() => blocksPositions.value
        ?.find(x => x.blockId === block.from));
    const blockToPos = computed(() => blocksPositions.value
        ?.find(x => x.blockId === block.to));
    const isToRighter = computed(() =>
        blockFromPos.value?.position
        && blockToPos.value?.position
        && isRectPositioning(blockFromPos.value?.position)
        && isRectPositioning(blockToPos.value?.position)
        && blockFromPos.value.position.x < blockToPos.value.position.x
    );
    return {
        blockId: block.id,
        position: {
            x1: computed(() => {
                const blockPos = blockFromPos.value;
                if (isRectPositioning(blockPos?.position) && blockPos?.position.x) {
                    return getNumber(blockPos.position.x) + (!isToRighter.value ? 0 : getNumber(blockPos.position.width));
                }
                return 0;
            }),
            y1: computed(() => {
                const blockPos = blockFromPos.value;
                if (isRectPositioning(blockPos?.position) && blockPos?.position.y) {
                    return getNumber(blockPos?.position.y) + getNumber(blockPos.position.height) / 2;
                }
                return 0;
            }),
            x2: computed(() => {
                const blockPos = blockToPos.value;
                if (isRectPositioning(blockPos?.position) && blockPos?.position.x) {
                    return getNumber(blockPos?.position.x) + (!isToRighter.value ? getNumber(blockPos.position.width) : 0);
                }
                return 0;
            }),
            y2: computed(() => {
                const blockPos = blockToPos.value;
                if (isRectPositioning(blockPos?.position) && blockPos?.position.y) {
                    return getNumber(blockPos?.position.y) + getNumber(blockPos.position.height) / 2;
                }
                return 0;
            })
        }
    };
}