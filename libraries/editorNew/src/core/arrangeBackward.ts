import { ArchitectureDescription } from "coya-core";

export const arrangeBackward = (blockId: string | undefined, config: ArchitectureDescription) => {
    if (!blockId && config?.blocks) {
        return;
    }
    const entries = Object.entries(config.blocks);
    const firstEntry = entries[0];
    const blockEntryIndex = entries.findIndex(x => x[0] === blockId);
    const blockEntry = entries[blockEntryIndex];
    if (firstEntry && blockEntry) {
        entries[0] = blockEntry;
        entries[blockEntryIndex] = firstEntry;
    }
    config.blocks = Object.fromEntries(entries);
};
export const arrangeForward = (blockId: string | undefined, config: ArchitectureDescription) => {
    if (!blockId && config?.blocks) {
        return;
    }
    const entries = Object.entries(config.blocks);
    const lastEntry = entries[entries.length - 1];
    const blockEntryIndex = entries.findIndex(x => x[0] === blockId);
    const blockEntry = entries[blockEntryIndex];
    if (lastEntry && blockEntry) {
        entries[entries.length - 1] = blockEntry;
        entries[blockEntryIndex] = lastEntry;
    }
    config.blocks = Object.fromEntries(entries);
};
