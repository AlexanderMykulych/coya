import type { ArchitectureDescription } from 'coya-core';

export const arrangeBackward = (blockId: string | undefined, config: ArchitectureDescription) => {
    if (!blockId && config?.blocks)
        return;

    const entries = Object.entries(config.blocks);
    const blockEntryIndex = entries.findIndex(([x]) => x === blockId);
    if (blockEntryIndex > -1) {
        const blockEntry = entries[blockEntryIndex];
        entries.splice(blockEntryIndex, 1);
        entries.unshift(blockEntry);
    }
    config.blocks = Object.fromEntries(entries);
};
export const arrangeForward = (blockId: string | undefined, config: ArchitectureDescription) => {
    if (!blockId && config?.blocks)
        return;

    const entries = Object.entries(config.blocks);
    const blockEntryIndex = entries.findIndex(x => x[0] === blockId);
    if (blockEntryIndex > -1) {
        const blockEntry = entries[blockEntryIndex];
        entries.splice(blockEntryIndex, 1);
        entries.push(blockEntry);
    }
    config.blocks = Object.fromEntries(entries);
};
