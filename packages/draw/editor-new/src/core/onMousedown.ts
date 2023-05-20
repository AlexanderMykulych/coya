import { getMousePosition } from './getMousePosition';
import type { EnabledEditor } from './types';
import { EditorMode } from '.';

export function onMousedown(editor: EnabledEditor, { attrs }: { attrs: any }, event: MouseEvent) {
    if (!editor.state.mode || editor.state.mode === EditorMode.None) {
        const clickPoint = getMousePosition(editor.svg, event);
        const { x, y, w, h } = attrs.positioning;
        const originConfigPosition = editor.config.style?.blocks?.[attrs.block.id]?.position;
        editor.state.drag = {
            clickPoint,
            movePoint: clickPoint,
            originPosition: { x, y, w, h },
            originConfigPosition: {
                x: Number(originConfigPosition?.x),
                y: Number(originConfigPosition?.y),
                w: Number(originConfigPosition?.w),
                h: Number(originConfigPosition?.h),
            },
            clickDeltaPoint: {
                x: clickPoint.x - x,
                y: clickPoint.y - y,
            },
        };
        editor.state.selectedNodeIds = [attrs.block.id];
    }
}
