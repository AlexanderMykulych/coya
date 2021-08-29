import { BlockElementDescription } from "../descriptionTypes";
import { BlockElement } from "../types";


export function createBlockElementByString(id: string, label: string): BlockElement {
    return {
        id,
        label
    };
}

export function createBlockElementByDescription(id: string, { label }: BlockElementDescription): any {
    return createBlockElementByString(id, label ?? id);
}
