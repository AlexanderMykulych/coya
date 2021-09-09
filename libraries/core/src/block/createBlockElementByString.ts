import { EnterSetting } from "..";
import { BlockElementDescription, BlockStyle } from "../descriptionTypes";
import { BlockElement } from "../types";
import { deepCopy } from "../util/deepCopy";


export function createBlockElementByString(id: string, label: string, blockStyle?: BlockStyle): BlockElement {
    return {
        id,
        label: blockStyle?.label ?? label,
        enter: getDefaultEnter()
    };
}

export function createBlockElementByDescription(id: string, element: BlockElementDescription, blockStyle?: BlockStyle): BlockElement {
    return {
        label: blockStyle?.label ?? element.label ?? id,
        enter: deepCopy(element.enter) ?? getDefaultEnter(),
        id
    };
}

export function getDefaultEnter(): EnterSetting {
    return {
        from: {
            opacity: 0
        },
        to: {
            opacity: 1,
            duration: 3
        }
    };
}