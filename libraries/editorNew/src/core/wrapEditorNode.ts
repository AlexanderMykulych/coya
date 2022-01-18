import { ChangeType, ChangeOwnerType } from "coya-core";
import { computed, h, reactive, SetupContext, watch } from "vue";
import { Editor } from "./types";
import WrapperRect from "./../components/Wrap/WrapperRect.vue";
import HoverWrapperRect from "../components/Wrap/HoverWrapperRect.vue";
import { EditorMode } from ".";
import { calculatePinDragResult } from "./calculatePinDragResult";
import { isNotNullOrUndefined } from "coya-util";
import { onMouseover, onMouseleave } from "./onMouseover";
import { onSelectBlockClick } from "./onSelectBlockClick";
import { onArrowBlockClick } from "./onArrowBlockClick";
import { onMousedown } from "./onMousedown";


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
            const isViewMode = computed(() => editor.state.isViewMode);
            //arrow end
            return () =>
                h(
                    "g",
                    {
                        onMousedown: (event: MouseEvent) => !isViewMode.value ? onMousedown(editor, context, event) : null,
                        onMouseover: (event: MouseEvent) => onMouseover(editor, context, event),
                        onMouseleave: (event: MouseEvent) => onMouseleave(editor, context, event),
                        onClick: (event: MouseEvent) => event.stopPropagation(),
                        class: {
                            "cursor-move": isDragged.value
                        },
                    },
                    [
                        h(node, attrs, context.slots),
                        isViewMode.value ? undefined :
                        isSelected.value ? h(WrapperRect, {
                            position: attrs.positioning,
                            block: attrs.block,
                            onPinPress: (val) => editor.state.pins.selectedPinType = val,
                        }) : h(HoverWrapperRect, {
                            position: attrs.positioning,
                            id: attrs.block?.id,
                            onMousedown: (event: MouseEvent) => onMousedown(editor, context, event),
                        }),
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
