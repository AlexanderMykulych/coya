import { BlockElementType, HighlightActionSetting } from "../descriptionTypes";
import { Action, Change, ChangeType } from "../types";

export function addHighlightActionExecutor(_: number, action: Action): Change[] | null {
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
                        w: `${block}.w + ${gap * 2}`,
                        h: `${block}.h + ${gap * 2}`,
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
