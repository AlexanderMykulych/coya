import { getMousePosition } from "./getMousePosition";
import { EnabledEditor } from "./types";
import { EditorMode } from ".";

export function onMousedown(editor: EnabledEditor, { attrs }: { attrs: any; }, event: MouseEvent) {
    if (!editor.state.mode || editor.state.mode === EditorMode.None) {
        const clickPoint = getMousePosition(editor.svg, event);
        const { x, y, w, h } = attrs.positioning;
        editor.state.drag = {
            clickPoint,
            movePoint: clickPoint,
            originPosition: { x, y, w, h },
            clickDeltaPoint: {
                x: clickPoint.x - x,
                y: clickPoint.y - y
            }
        };
        editor.state.selectedNodeIds = [attrs.block.id];
    }
}
