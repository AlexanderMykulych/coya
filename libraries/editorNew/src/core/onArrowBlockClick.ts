import { getMousePosition } from "./getMousePosition";
import { EnabledEditor } from "./types";
import { EditorMode } from ".";

export function onArrowBlockClick(editor: EnabledEditor, { attrs }: { attrs: any; }, event: MouseEvent) {
    if (editor.state?.mode === EditorMode.Arrow) {
        const id = attrs.block.id;
        const { x, y } = getMousePosition(editor.svg, event);
        if (editor.state.arrowState?.start) {
            editor.state.arrowState.end = id;
            editor.state.arrowState.endPosition = {
                x,
                y
            };
        } else {
            editor.state.arrowState = {
                start: id,
                startPosition: {
                    x,
                    y
                }
            };
        }
    }
}
