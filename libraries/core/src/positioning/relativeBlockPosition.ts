import { BlockPositioning, LineBlockElement } from "../types";
import { computed, Ref } from "@vue/reactivity";
import { isRectPositioning } from "../typeGuards";
import { getNumber } from "./getNumber";

export function relativeBlockPosition(blocksPositions: Ref<BlockPositioning[]>, block: LineBlockElement): BlockPositioning {
    return {
        blockId: block.id,
        position: {
            x1: computed(() => {
                const blockPos = blocksPositions.value
                    ?.find(x => x.blockId === block.from);
                if (isRectPositioning(blockPos?.position) && blockPos?.position.x) {
                    return getNumber(blockPos.position.x) + getNumber(blockPos.position.width);
                }
                return 0;
            }),
            y1: computed(() => {
                const blockPos = blocksPositions.value
                    ?.find(x => x.blockId === block.from);
                if (isRectPositioning(blockPos?.position) && blockPos?.position.y) {
                    return getNumber(blockPos?.position.y) + getNumber(blockPos.position.height)/2;
                }
                return 0;
            }),
            x2: computed(() => {
                const blockPos = blocksPositions.value
                    ?.find(x => x.blockId === block.to);
                if (isRectPositioning(blockPos?.position) && blockPos?.position.x) {
                    return getNumber(blockPos?.position.x);
                }
                return 0;
            }),
            y2: computed(() => {
                const blockPos = blocksPositions.value
                    ?.find(x => x.blockId === block.to);
                if (isRectPositioning(blockPos?.position) && blockPos?.position.y) {
                    return getNumber(blockPos?.position.y) + getNumber(blockPos.position.height)/2;
                }
                return 0;
            })
        }
    };
}