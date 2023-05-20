import type { ArchitectureDescription } from '..';
/**
 * examples:
 * $all
 * $sys_const
 * b1
 * @param blockIdFromSetting
 * @param architecture
 * @param action
 * @returns
 */
export const getRealBlockId = (
    blockIdFromSetting: string,
    architecture: ArchitectureDescription,
    action: (blockId: string) => void) => {
    if (blockIdFromSetting.startsWith('$')) {
        switch (blockIdFromSetting) {
            case '$all': {
                if (architecture.style?.blocks) {
                    Object.keys(architecture.style.blocks)
                        .forEach(key => action(key));
                }
                return;
            }
            default:
                return;
        }
    }
    action(blockIdFromSetting);
};
