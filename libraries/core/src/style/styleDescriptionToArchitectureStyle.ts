import { StyleDescription } from "../descriptionTypes";
import { autoPositioning } from "../positioning/autoPosition";
import { Block, BlocksStyle, Style } from "../types";

export function styleDescriptionToArchitectureStyle(
        style: StyleDescription | null | undefined,
        blocks: Block[]
    ): Style {
        return {
                id: "style",
                positioning: autoPositioning({ blocks }),
                blocks: style ? generateBlocksStyle(style) : undefined
            };
}
function generateBlocksStyle(style: StyleDescription): BlocksStyle {
    return style;
}

