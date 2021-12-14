import { ArchitectureDescription, StyleDescription, TransformSetting } from "../descriptionTypes";
import { Block, BlocksStyle, Style } from "../types";
import { gridPositioning } from "../positioning/gridPositioning";
import { deepCopy } from "../util/deepCopy";
import { prepareCss } from "./prepareCss";
import { deepAssign } from "../util/deepAssign";

export function styleDescriptionToArchitectureStyle(
    architectureDescription: ArchitectureDescription,
    blocks: Block[],
    setting: TransformSetting
): Style {
    const css = prepareCss(architectureDescription)
    return {
        id: "style",
        positioning: gridPositioning({ architectureDescription, blocks, setting }),
        debug: deepCopy(architectureDescription.style?.debug),
        css,
        blocks: architectureDescription.style ? generateBlocksStyle(architectureDescription.style) : undefined
    };
}
function generateBlocksStyle(style: StyleDescription): BlocksStyle | undefined {
    if (!style.blocks) {
        return style.blocks;
    }
    return Object.fromEntries(
        Object.entries(style.blocks)
            .map(([key, value]) => [key, deepAssign({}, value)])
    );
}