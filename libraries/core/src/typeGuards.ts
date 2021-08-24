import { BlockElementDescription } from "./descriptionTypes";

export function isNotNullOrUndefined<T>(obj: T | null | undefined): obj is T {
    return obj !== null && typeof obj !== "undefined";
}
export function isString(obj: unknown): obj is string {
    return typeof obj === "string";
}

export function isBlockElementDescription(obj: unknown): obj is BlockElementDescription {
    return typeof obj === "object" && isNotNullOrUndefined(obj) && "label" in obj;
}