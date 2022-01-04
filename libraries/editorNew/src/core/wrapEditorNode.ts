import { ChangeType, ChangeOwnerType } from "coya-core";
import { computed, h, reactive, SetupContext, watch } from "vue";
import { getMousePosition } from "./getMousePosition";
import { Editor, EnabledEditor } from "./types";
import WrapperRect from "./../components/Wrap/WrapperRect.vue";
import HoverWrapperRect from "../components/Wrap/HoverWrapperRect.vue";
import { EditorMode } from ".";
import { calculatePinDragResult } from "./calculatePinDragResult";
import { isNotNullOrUndefined } from "coya-util";


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
            const blockStyle = computed(() => editor.architecture.style?.blocks?.[blockId.value]);
            const pinToPos = computed(() => {
                const pinTo = blockStyle.value?.pinTo;
                if (pinTo) {
                    return editor.architecture.style?.positioning?.find(x => x.blockId === pinTo)?.position;
                }
                return null;
            });
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
                    let { x: pX, y: pY } = val;

                    if (editor.state.pins.selectedPinType) {
                        let { x, y, w, h } = calculatePinDragResult(editor);
                        if (pinToPos.value) {
                            if (isNotNullOrUndefined(x)) {
                                x -= pinToPos.value.x;
                            }
                            if (isNotNullOrUndefined(y)) {
                                y -= pinToPos.value.y;
                            }
                        }
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
                        if (pinToPos.value) {
                            pX -= pinToPos.value.x;
                            pY -= pinToPos.value.y;
                        }
                        editor.makeChange({
                            type: ChangeType.ChangePosition,
                            setting: {
                                blockId: blockId.value,
                                x: `${pX}`,
                                y: `${pY}`,
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
            //select
            const isSelectMode = computed(() => editor.state.mode === EditorMode.Select);
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
                            block: attrs.block,
                            onPinPress: (val) => editor.state.pins.selectedPinType = val,
                        }) : undefined,
                        isArrowMode.value ? h(HoverWrapperRect, {
                            position: attrs.positioning,
                            id: attrs.block?.id,
                            onClick: (event: MouseEvent) => onArrowBlockClick(editor, context, event)
                        }) : isSelectMode.value ? h(HoverWrapperRect, {
                            position: attrs.positioning,
                            id: attrs.block?.id,
                            onClick: (event: MouseEvent) => onSelectBlockClick(editor, context, event)
                        })
                            : undefined
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
function onSelectBlockClick(editor: EnabledEditor, { attrs }: { attrs: any }, event: MouseEvent) {
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
function onMouseover(editor: EnabledEditor, { attrs }: { attrs: any }, event: MouseEvent) {
    editor.state.hover = {
        hoveredBlockId: attrs.block.id
    };
}
function onMouseleave(editor: EnabledEditor, { attrs }: { attrs: any }, event: MouseEvent) {
    editor.state.hover = null;
}


