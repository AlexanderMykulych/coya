import { RectPositioning } from "coya-core";
import { EnabledEditor } from "./types";
import { PinType } from ".";

export function calculatePinDragResult(editor: EnabledEditor): RectPositioning {
    if (!editor.state.drag) {
        return {};
    }
    const { x, y } = editor!.mouseState.position;
    const init = editor.state.drag.originPosition;
    switch (editor.state.pins.selectedPinType) {
        case PinType.BottomRight:
            return {
                w: x - init.x,
                h: y - init.y,
            };
        case PinType.BottomLeft:
            return {
                x,
                w: init.w - (x - init.x),
                h: y - init.y,
            };
        case PinType.TopLeft:
            return {
                x,
                y,
                w: init.w - (x - init.x),
                h: init.h - (y - init.y),
            };
        case PinType.TopRight:
            return {
                y,
                w: x - init.x,
                h: init.h - (y - init.y),
            };
        case PinType.Top:
            return {
                y,
                h: init.h - (y - init.y),
            };
        case PinType.Left:
            return {
                x,
                w: init.w - (x - init.x),
            };
        case PinType.Bottom:
            return {
                h: y - init.y,
            };
        case PinType.Right:
            return {
                w: x - init.x,
            };
        default:
            return {};
    }
}
