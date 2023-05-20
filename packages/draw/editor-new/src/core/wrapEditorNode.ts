/* eslint-disable */
import { BlockElementType, ChangeOwnerType, ChangeType } from 'coya-core';
import type { SetupContext } from 'vue';
import { computed, h, watch } from 'vue';
import { isNotNullOrUndefined } from 'coya-util';
import HoverWrapperLine from '../components/Wrap/HoverWrapperLine.vue';
import HoverWrapper from '../components/Wrap/HoverWrapper.vue';
import { calculatePinDragResult } from './calculatePinDragResult';
import WrapperRect from './../components/Wrap/WrapperRect.vue';
import type { Editor } from './types';
import { onMouseleave, onMouseover } from './onMouseover';
import { onSelectBlockClick } from './onSelectBlockClick';
import { onArrowBlockClick } from './onArrowBlockClick';
import { onMousedown } from './onMousedown';
import { EditorMode } from '.';
import { useEditorState } from './useCurrentEditorState';

export function wrapEditorNode(editor: Editor, node: any) {
    return {
        setup(_: any, context: SetupContext) {
            const attrs = context.attrs as any;
            if (!editor.enable)
                return h(node, attrs, context.slots);
            const { isViewMode } = useEditorState(editor);


            const blockId = computed(() => attrs?.block?.id);
            const isSelected = computed(() => editor.state.selectedNodeIds?.some(x => x === blockId.value) ?? false);
            const isDragged = computed(() => editor.mouseState.pressed && isSelected.value && editor.state.drag);
            const blockStyle = computed(() => editor.architecture.style?.blocks?.[blockId.value]);
            const pinToPos = computed(() => {
                const pinTo = blockStyle.value?.pinTo;
                if (pinTo)
                    return editor.architecture.style?.positioning?.find(x => x.blockId === pinTo)?.position;

                return null;
            });
            const blockConfigPos = computed(() => editor.config.style?.blocks?.[blockId]?.position);
            watch(() => editor.mouseState.pressed, (val) => {
                if (!val) {
                    editor.state.drag = undefined;
                    editor.state.pins.selectedPinType = undefined;
                }
            });
            const newPosition = computed(() => isDragged.value
                ? ({
                    x: editor!.mouseState.position.x - editor.state.drag!.clickDeltaPoint.x,
                    y: editor!.mouseState.position.y - editor.state.drag!.clickDeltaPoint.y,
                    deltaX: editor!.mouseState.position.x - editor.state.drag!.originPosition.x,
                    deltaY: editor!.mouseState.position.y - editor.state.drag!.originPosition.y,
                })
                : null);
            watch(() => newPosition.value, (val, oldVal) => {
                if (val && val !== oldVal && oldVal) {
                    let { x: pX, y: pY, deltaX, deltaY } = val;

                    if (editor.state.pins.selectedPinType) {
                        let { x, y, w, h } = calculatePinDragResult(editor);
                        const originPos = editor.state.drag?.originPosition;
                        if (isNotNullOrUndefined(x)) {
                            x = editor.state.drag!.originConfigPosition.x + (x - originPos.x) - editor.state.drag!.clickDeltaPoint.x;
                        }
                        if (isNotNullOrUndefined(y)) {
                            y = editor.state.drag!.originConfigPosition.y + (y - originPos.y) - editor.state.drag!.clickDeltaPoint.y;
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
                                type: ChangeOwnerType.Editor,
                            },
                        });
                    }
                    else {
                        const newX = editor.state.drag?.originConfigPosition.x + deltaX - editor.state.drag?.clickDeltaPoint.x;
                        const newY = editor.state.drag?.originConfigPosition.y + deltaY - editor.state.drag?.clickDeltaPoint.y;
                        editor.makeChange({
                            type: ChangeType.ChangePosition,
                            setting: {
                                blockId: blockId.value,
                                x: newX,
                                y: newY,
                            },
                            owner: {
                                type: ChangeOwnerType.Editor,
                            },
                        });
                    }
                }
            });

            // arrow
            const isArrowMode = computed(() => editor.state.mode === EditorMode.Arrow);
            // line
            const isLine = computed(() => attrs.block.type === BlockElementType.Line);
            // select
            const isSelectMode = computed(() => editor.state.mode === EditorMode.Select);
            
            // arrow end
            return () =>
                h(
                    'g',
                    {
                        onMousedown: (event: MouseEvent) => !isViewMode.value ? onMousedown(editor, context, event) : null,
                        onMouseover: (event: MouseEvent) => onMouseover(editor, context, event),
                        onMouseleave: (event: MouseEvent) => onMouseleave(editor, context, event),
                        onClick: (event: MouseEvent) => event.stopPropagation(),
                        class: {
                            'cursor-move': isDragged.value,
                        },
                    },
                    [
                        h(node, attrs, context.slots),
                        isViewMode.value
                            ? undefined
                            : isSelected.value
                                ? h(WrapperRect, {
                                    position: attrs.positioning,
                                    block: attrs.block,
                                    hidePins: isLine.value,
                                    onPinPress: val => editor.state.pins.selectedPinType = val,
                                })
                                : h(isLine.value ? HoverWrapperLine : HoverWrapper, {
                                    position: attrs.positioning,
                                    id: attrs.block?.id,
                                    onMousedown: (event: MouseEvent) => onMousedown(editor, context, event),
                                }),
                        isArrowMode.value
                            ? h(HoverWrapper, {
                                position: attrs.positioning,
                                id: attrs.block?.id,
                                onClick: (event: MouseEvent) => onArrowBlockClick(editor, context, event),
                            })
                            : isSelectMode.value
                                ? h(HoverWrapper, {
                                    position: attrs.positioning,
                                    id: attrs.block?.id,
                                    onClick: (event: MouseEvent) => onSelectBlockClick(editor, context, event),
                                })
                                : undefined,
                    ],
                );
        },
    };
}
