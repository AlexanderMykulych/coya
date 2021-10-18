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
            const blockId = computed(() => (attrs as any)?.block?.id);
            const isDragged = computed(() => editor.mouseState.pressed && (editor.state.drag?.nodeIds?.some(x => x === blockId.value) ?? false));
            const overflowCoyaRectAttrs = computed(() => reactive({
                x: attrs.positioning.x,
                y: attrs.positioning.y,
                width: attrs.positioning.w,
                height: attrs.positioning.h,
                fill: "red"
            }));
            watch(() => editor.mouseState.pressed, val => {
                if (!val) {
                    editor.state.drag = undefined;
                }
            })
            const transform = computed(() => {
                if (isDragged.value) {
                    const drag = editor.state.drag;
                    return `translate(${editor!.mouseState.position.x - drag!.clickPoint.x}, ${editor!.mouseState.position.y - drag!.clickPoint.y})`
                }
                return undefined;
            });
            return () =>
                h(
                    "g",
                    {
                        onMousedown: (event: MouseEvent) => onMousedown(editor, context, event),
                        class: {
                            "cursor-move": isDragged.value
                        },
                        transform: transform.value
                    },
                    [
                        h(node, attrs, context.slots),
                        isDragged.value ? h("rect", overflowCoyaRectAttrs.value) : undefined
                    ]
                );
        }
    }
}

function onMousedown(editor: EnabledEditor, { attrs }: { attrs: any }, event: MouseEvent) {
    const clickPoint = getMousePosition(editor.svg, event);
    const originPos = attrs.positioning;
    editor.state.drag = {
        nodeIds: [attrs.block.id],
        clickPoint,
        movePoint: clickPoint,
        clickDeltaPoint: {
            x: clickPoint.x - originPos.x,
            y: clickPoint.y - originPos.y
        }
    }
}