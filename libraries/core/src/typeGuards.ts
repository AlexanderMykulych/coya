import { ArchitectureDescription, BlockElementDescription } from "./descriptionTypes";
import { Block, ParentBlockElement, Positioning, RectPositioning } from "./types";

export function isNotNullOrUndefined<T>(obj: T | null | undefined): obj is T {
    return obj !== null && typeof obj !== "undefined";
}
export function isNullOrUndefined(obj: unknown): obj is null | undefined {
    return obj === null || typeof obj === "undefined";
}
export function isString(obj: unknown): obj is string {
    return typeof obj === "string";
}

export function isBlockElementDescription(obj: unknown): obj is BlockElementDescription {
    return typeof obj === "object" && isNotNullOrUndefined(obj) && "label" in obj;
}

export function isParentBlockElement(obj: Block | undefined | null): obj is ParentBlockElement {
    return !!obj && !!obj.id && !!obj.label && Array.isArray((<ParentBlockElement>obj).children) && (<ParentBlockElement>obj).children.length > 0;
}

export function isArchitectureDescription(obj: unknown): obj is ArchitectureDescription {
    if (!!obj) {
        const maybeDescription = <ArchitectureDescription>obj;
        return !!maybeDescription.blocks /* && !!maybeDescription.animation && !!maybeDescription.phases */;
    }
    return false;
}

export function isRectPositioning(obj: Positioning | undefined | null): obj is RectPositioning {
    if (!!obj) {
        const rectPos = <RectPositioning>obj;
        return isNotNullOrUndefined(rectPos.x) && isNotNullOrUndefined(rectPos.y) && isNotNullOrUndefined(rectPos.width) && isNotNullOrUndefined(rectPos.height);
    }
    return false;
}