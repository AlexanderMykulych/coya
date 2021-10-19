import { ChangeType } from "coya-core";
import { computed, h, reactive, SetupContext, watch } from "vue";
import { getMousePosition } from "./getMousePosition";
import { Editor, EnabledEditor } from "./types";

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
                }
            });
            const newPosition = computed(() => isDragged.value ? ({
                x: editor!.mouseState.position.x - editor.state.drag!.clickDeltaPoint.x,
                y: editor!.mouseState.position.y - editor.state.drag!.clickDeltaPoint.y
            }) : null);
            watch(() => newPosition.value, (val) => {
                if (val) {
                    editor.makeChange({
                        type: ChangeType.ChangePosition,
                        setting: {
                            blockId: blockId.value,
                            x: `${val?.x}`,
                            y: `${val?.y}`,
                        },
                    });
                }
            });
            return () =>
                h(
                    "g",
                    {
                        onMousedown: (event: MouseEvent) => onMousedown(editor, context, event),
                        onClick: (event: MouseEvent) => event.stopPropagation(),
                        class: {
                            "cursor-move": isDragged.value
                        },
                    },
                    [
                        h(node, attrs, context.slots),
                        isSelected.value ? h("rect", overflowCoyaRectAttrs.value) : undefined
                    ]
                );
        }
    }
}

function onMousedown(editor: EnabledEditor, { attrs }: { attrs: any }, event: MouseEvent) {
    const clickPoint = getMousePosition(editor.svg, event);
    const originPos = attrs.positioning;
    editor.state.drag = {
        clickPoint,
        movePoint: clickPoint,
        clickDeltaPoint: {
            x: clickPoint.x - originPos.x,
            y: clickPoint.y - originPos.y
        }
    };
    editor.state.selectedNodeIds = [attrs.block.id];
}