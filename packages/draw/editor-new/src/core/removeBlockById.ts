import type { Architecture, ArchitectureDescription } from 'coya-core';
import { BlockElementType } from 'coya-core';
import { isNotNullOrUndefined } from 'coya-util';
import { replaceBlock } from './replaceBlock';

export const removeBlockById = (
    architecture: ArchitectureDescription,
    realArch: Architecture,
    blockId: string,
) => {
    if (architecture.blocks) {
        Object.entries(architecture.blocks)
            .filter(
                ([key, val]) =>
                    val?.type === BlockElementType.Line
                    && (val.from === blockId || val.to === blockId)
                    && key !== blockId,
            )
            .forEach(([key]) => removeBlockById(architecture, realArch, key));
    }

    if (architecture.style?.blocks) {
        Object.entries(architecture.style.blocks)
            .forEach(([key, value]) => {
                if (value.pinTo === blockId) {
                    const pinnedPos = realArch.style?.positioning?.find(x => x.blockId === key)?.position;
                    if (pinnedPos) {
                        value.position.x = `${pinnedPos.x}`;
                        value.position.y = `${pinnedPos.y}`;
                    }
                    value.pinTo = undefined;
                }
            });
    }
    if (isNotNullOrUndefined(architecture.blocks[blockId]))
        delete architecture.blocks[blockId];

    if (architecture.style?.blocks?.[blockId])
        delete architecture.style?.blocks?.[blockId];

    replaceBlock(architecture, blockId, '_');
};
