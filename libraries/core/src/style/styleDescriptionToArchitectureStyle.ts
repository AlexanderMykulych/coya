import { ArchitectureDescription, PositioningSystem, StyleDescription, TransformSetting } from "../descriptionTypes";
import { autoPositioning } from "../positioning/autoPosition";
import { Block, BlocksStyle, Style } from "../types";
import { gridPositioning } from "../positioning/gridPositioning";
import { deepCopy } from "../util/deepCopy";
import { prepareCss } from "./prepareCss";

export function styleDescriptionToArchitectureStyle(
    architectureDescription: ArchitectureDescription,
    blocks: Block[],
    setting: TransformSetting
): Style {
    const positioningSystem = architectureDescription.style?.positioning;
    const css = prepareCss(architectureDescription)
    return {
        id: "style",
        positioning: !positioningSystem || positioningSystem === PositioningSystem.Auto ?
            autoPositioning({ architectureDescription, blocks, setting }) :
            gridPositioning({ architectureDescription, blocks, setting }),
        debug: deepCopy(architectureDescription.style?.debug),
        css,
        blocks: architectureDescription.style ? generateBlocksStyle(architectureDescription.style) : undefined
    };
}
function generateBlocksStyle(style: StyleDescription): BlocksStyle | undefined {
    return style.blocks;
}