import { BlockStyle, LineBlockElementDescription } from "../descriptionTypes";
import { LineBlockElement } from "../types";


export function createLineElementByDescription(id: string, value: LineBlockElementDescription, blockStyle?: BlockStyle): LineBlockElement {
    return {
        id,
        ...value,
        label: blockStyle?.label ?? value.label ?? id
    }
}
