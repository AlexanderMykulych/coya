import { EnabledEditor } from "./types";

export function onMouseover(editor: EnabledEditor, { attrs }: { attrs: any; }, event: MouseEvent) {
    editor.state.hover = {
        hoveredBlockId: attrs.block.id
    };
}
export function onMouseleave(editor: EnabledEditor, { attrs }: { attrs: any; }, event: MouseEvent) {
    editor.state.hover = null;
}
