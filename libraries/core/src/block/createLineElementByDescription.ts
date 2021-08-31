import { LineBlockElementDescription } from "../descriptionTypes";
import { LineBlockElement } from "../types";


export function createLineElementByDescription(id: string, value: LineBlockElementDescription): LineBlockElement {
    return {
        id,
        ...value,
        label: value.label ?? id
    }
}
