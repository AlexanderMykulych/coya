import { ChangeType, ChangeOwnerType, RectPositioning } from "coya-core";
import { computed, h, reactive, SetupContext, watch } from "vue";
import { getMousePosition } from "./getMousePosition";
import { Editor, EnabledEditor } from "./types";
import WrapperRect from "./../components/Wrap/WrapperRect.vue";
import ArrowWrapperRect from "./../components/Wrap/ArrowWrapperRect.vue";
import { EditorMode, PinType } from ".";


export function wrapEditorNode(editor: Editor, node: any) {
    return {
        setup(_: any, context: SetupContext) {
            const attrs = context.attrs as any;
            if (!editor.enable) {
                return h(node, attrs, context.slots);
            }
            const blockId = computed(() => attrs?.block?.id);
            const isSelected = computed(() => editor.state.selectedNodeIds?.some(x => x === blockId.value) ?? false);
            const isDragged = computed(() => editor.mouseState.pressed && isSelected.value && editor.state.drag);
            const isHovered = computed(() => editor.state.hover?.hoveredBlockId === blockId.value);
            const overflowCoyaRectAttrs = computed(() => reactive({
                x: attrs.positioning.x,
                y: attrs.positioning.y,
                width: attrs.positioning.w,
                height: attrs.positioning.h,
                fill: "#00d0ff4a",
            }));
            watch(() => editor.mouseState.pressed, val => {
                if (!val) {
                    editor.state.drag = undefined;
                    editor.state.pins.selectedPinType = undefined;
                }
            });
            const newPosition = computed(() => isDragged.value ? ({
                x: editor!.mouseState.position.x - editor.state.drag!.clickDeltaPoint.x,
                y: editor!.mouseState.position.y - editor.state.drag!.clickDeltaPoint.y
            }) : null);
            watch(() => newPosition.value, (val, oldVal) => {
                if (val && val !== oldVal && oldVal) {
                    if (editor.state.pins.selectedPinType) {
                        const { x, y, w, h } = calculatePinDragResult(editor);
                        editor.makeChange({
                            type: ChangeType.ChangePosition,
                            setting: {
                                blockId: blockId.value,
                                x,
                                y,
                                w,
                                h,
                            },
                            owner: {
                                type: ChangeOwnerType.Editor
                            }
                        });
                    } else {
                        editor.makeChange({
                            type: ChangeType.ChangePosition,
                            setting: {
                                blockId: blockId.value,
                                x: `${val?.x}`,
                                y: `${val?.y}`,
                            },
                            owner: {
                                type: ChangeOwnerType.Editor
                            }
                        });
                    }
                }
            });

            //arrow
            const isArrowMode = computed(() => editor.state.mode === EditorMode.Arrow);
            //arrow end
            return () =>
                h(
                    "g",
                    {
                        onMousedown: (event: MouseEvent) => onMousedown(editor, context, event),
                        onMouseover: (event: MouseEvent) => onMouseover(editor, context, event),
                        onMouseleave: (event: MouseEvent) => onMouseleave(editor, context, event),
                        onClick: (event: MouseEvent) => event.stopPropagation(),
                        class: {
                            "cursor-move": isDragged.value
                        },
                    },
                    [
                        h(node, attrs, context.slots),
                        isSelected.value ? h(WrapperRect, {
                            position: attrs.positioning,
                            onPinPress: (val) => editor.state.pins.selectedPinType = val,
                            onPinLeave: () => console.log("unpin")
                        }) : undefined,
                        isArrowMode.value ? h(ArrowWrapperRect, {
                            position: attrs.positioning,
                            id: attrs.block?.id,
                            onClick: (event: MouseEvent) => onArrowBlockClick(editor, context, event)
                        }) : undefined
                    ]
                );
        }
    }
}

function onMousedown(editor: EnabledEditor, { attrs }: { attrs: any }, event: MouseEvent) {
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
function onArrowBlockClick(editor: EnabledEditor, { attrs }: { attrs: any }, event: MouseEvent) {
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
function onMouseover(editor: EnabledEditor, { attrs }: { attrs: any }, event: MouseEvent) {
    editor.state.hover = {
        hoveredBlockId: attrs.block.id
    };
}
function onMouseleave(editor: EnabledEditor, { attrs }: { attrs: any }, event: MouseEvent) {
    editor.state.hover = null;
}

function calculatePinDragResult(editor: EnabledEditor): RectPositioning {
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
