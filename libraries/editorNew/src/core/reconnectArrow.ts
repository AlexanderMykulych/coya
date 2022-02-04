import type { ArchitectureDescription } from 'coya-core';
import { isArray, isLineBlockElementDescription } from 'coya-core';
import { isNotNullOrUndefined } from 'coya-util';

export function reconnectArrow(
    activeArchitecture: ArchitectureDescription,
    initArchitecture: ArchitectureDescription,
    blockId: string,
    value: string,
    attr: 'from' | 'to') {
    const applyChange = (obj: { from: string; to: string }) => {
        if (attr === 'from')
            obj.from = value;
        else
            obj.to = value;
    };
    const activeBlock = activeArchitecture.blocks[blockId];
    if (typeof activeBlock !== 'string' && isLineBlockElementDescription(activeBlock))
        applyChange(activeBlock);

    const initBlock = initArchitecture.blocks[blockId];
    if (typeof initBlock !== 'string' && isLineBlockElementDescription(initBlock))
        applyChange(initBlock);

    if (activeBlock
        && isNotNullOrUndefined(activeBlock.sourcePhase)
        && isNotNullOrUndefined(activeBlock.sourcePhaseAction)) {
        const connectAction = initArchitecture.phases?.[activeBlock.sourcePhase]?.connect;
        const connect = isArray(connectAction) ? connectAction[activeBlock.sourcePhaseAction] : connectAction;
        if (connect)
            applyChange(connect);
    }
}
