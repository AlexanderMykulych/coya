import type { ArchitectureDescription } from 'coya-core';
import { BlockElementType, actionExecutors, isArray } from 'coya-core';

export const replaceBlock = (architecture: ArchitectureDescription, oldVal: string, value: string) => {
    architecture
        .phases
        ?.forEach((phase) => {
            Object
                .keys(phase)
                .forEach((actionName) => {
                    const actionConfig = actionExecutors.find(x => x.type === actionName);
                    if (actionConfig?.blockRenamer) {
                        const phaseAction = phase[actionName];
                        if (isArray(phaseAction))
                            phaseAction.forEach(x => actionConfig.blockRenamer(x, oldVal, value));
                        else
                            actionConfig.blockRenamer(phase[actionName], oldVal, value);
                    }
                });
        });
    if (architecture.style?.blocks) {
        const blocksStyle = architecture.style.blocks;
        Object.keys(blocksStyle)
            .forEach((block: string) => {
                const style = blocksStyle[block];
                const position = style.position as any;
                if (position) {
                    Object.keys(position)
                        .forEach((attr: string) => {
                            const attrValue = position[attr];
                            if (typeof attrValue === 'string')
                                position[attr] = attrValue.replaceAll(`${oldVal}.`, `${value}.`);
                        });
                }
                if (style?.pinTo === oldVal)
                    style.pinTo = value;
            });
    }
};
