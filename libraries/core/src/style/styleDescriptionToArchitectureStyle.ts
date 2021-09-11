import { ArchitectureDescription, PositioningSystem, StyleDescription } from "../descriptionTypes";
import { autoPositioning } from "../positioning/autoPosition";
import { Block, BlocksStyle, Style } from "../types";
import { gridPositioning } from "../positioning/gridPositioning";
import { deepCopy } from "../util/deepCopy";

export function styleDescriptionToArchitectureStyle(
    architectureDescription: ArchitectureDescription,
    blocks: Block[]
): Style {
    const positioningSystem = architectureDescription.style?.positioning;
    return {
        id: "style",
        positioning: !positioningSystem || positioningSystem === PositioningSystem.Auto ?
            autoPositioning({ architectureDescription, blocks }) :
            gridPositioning({ architectureDescription, blocks }),
        debug: deepCopy(architectureDescription.style?.debug),
        blocks: architectureDescription.style ? generateBlocksStyle(architectureDescription.style) : undefined
    };
}
function generateBlocksStyle(style: StyleDescription): BlocksStyle | undefined {
    return style.blocks;
}

