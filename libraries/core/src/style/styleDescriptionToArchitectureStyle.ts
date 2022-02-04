import { deepAssign, deepCopy } from 'coya-util';
import type { ArchitectureDescription, StyleDescription, TransformSetting } from '../descriptionTypes';
import type { Block, BlocksStyle, Style } from '../types';
import { gridPositioning } from '../positioning/gridPositioning';
import { prepareCss } from './prepareCss';

export function styleDescriptionToArchitectureStyle(
    architectureDescription: ArchitectureDescription,
    blocks: Block[],
    setting: TransformSetting,
): Style {
    const css = prepareCss(architectureDescription);
    return {
        id: 'style',
        positioning: gridPositioning({ architectureDescription, blocks, setting }),
        debug: deepCopy(architectureDescription.style?.debug),
        css,
        blocks: architectureDescription.style ? generateBlocksStyle(architectureDescription.style) : undefined,
    };
}
function generateBlocksStyle(style: StyleDescription): BlocksStyle | undefined {
    if (!style.blocks)
        return style.blocks;

    return Object.fromEntries(
        Object.entries(style.blocks)
            .map(([key, value]) => {
                const prepVal = Object.fromEntries(
                    Object.entries(value)
                        .filter(([vKey, _]) => vKey !== 'position'),
                );
                return [key, deepAssign({}, prepVal)];
            }),
    );
}
