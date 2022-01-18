import { getMousePosition } from "./getMousePosition";
import { EnabledEditor } from "./types";
import { EditorMode } from ".";

export function onSelectBlockClick(editor: EnabledEditor, { attrs }: { attrs: any; }, event: MouseEvent) {
    if (editor.state?.mode === EditorMode.Select) {
        const id = attrs.block.id;
        const { x, y } = getMousePosition(editor.svg, event);
        if (editor.state.onSelect) {
            editor.state.onSelect({
                blockId: id,
                x,
                y,
            });
        }
        editor.state.onSelect = undefined;
        editor.state.mode = EditorMode.None;
    }
}
