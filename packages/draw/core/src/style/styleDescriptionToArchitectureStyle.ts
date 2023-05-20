import { deepAssign, deepCopy } from 'coya-util';
import { computed, reactive } from 'vue';
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

    const styleBlocks = Object.fromEntries(
        Object.entries(style.blocks)
            .map(([key, value]) => {
                const prepVal = Object.fromEntries(
                    Object.entries(value)
                        .filter(([vKey, _]) => vKey !== 'position'),
                );
                const css = computed(() => {
                    const get: string = prepVal.css?.get ?? '_';
                    if (get) {
                        const parentStyle = styleBlocks[get]?.css;
                        return {
                            ...parentStyle,
                            ...prepVal.css,
                        };
                    }
                    return null;
                });
                return [key, reactive({
                    ...deepAssign({}, prepVal),
                    css,
                })];
            }),
    );

    return styleBlocks;
}
