import { BlockElementType } from "..";
import { HighlightActionSetting } from "../descriptionTypes";
import { Action, ActionExecutorContext, Change, ChangeType } from "../types";

export function addHighlightActionExecutor(context: ActionExecutorContext, action: Action): Change[] | null {
    if (!context) {
        return null;
    }
    const val = action.value as HighlightActionSetting;
    const blocks = typeof val.blocks === "string" ? [val.blocks] : val.blocks;
    const gap = val.gap ?? 5;
    return blocks
        .flatMap(block => [{
            type: ChangeType.ChangeStyle,
            setting: {
                blockId: `highlight_${block}`,
                newStyle: {
                    position: {
                        x: `${block}.x - ${gap}`,
                        y: `${block}.y - ${gap}`,
                        w: `${block}.width + ${gap * 2}`,
                        h: `${block}.height + ${gap * 2}`,
                    },
                    isHighlight: true
                }
            }
        }, {
            type: ChangeType.AddNewBlock,
            setting: {
                newBlockId: `highlight_${block}`,
                blockSettings: {
                    type: BlockElementType.Rect,
                    label: ""
                }
            }
        }]);
}
