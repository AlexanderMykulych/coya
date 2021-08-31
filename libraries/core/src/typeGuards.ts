import { ArchitectureDescription, BlockElementDescription, BlockElementType, ConnectActionSetting, LineBlockElementDescription, PhaseAction, PhaseStep } from "./descriptionTypes";
import { Block, BlockElement, ContainerBlock, LineBlockElement, ParentBlockElement, Positioning, RectPositioning } from "./types";

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
        return isNotNullOrUndefined(rectPos.x) && isNotNullOrUndefined(rectPos.y) /* && isNotNullOrUndefined(rectPos.width)  && isNotNullOrUndefined(rectPos.height)*/;
    }
    return false;
}

export function isPhaseAction(obj?: PhaseStep | null): obj is PhaseAction {
    if (obj) {
        const action = <PhaseAction>obj;
        return typeof action === "object"
            && Object.keys(action)
                .every(x => {
                    if (typeof x === "string") {
                        return true;
                    }
                    if (Array.isArray(x)) {
                        return (<any[]>x).every(y => typeof y === "string");
                    }
                    return isConnectActionSetting(x);
                });
    }
    return false;
}

export function isConnectActionSetting(obj?: unknown | null): obj is ConnectActionSetting {
    if (obj) {
        const connect = <ConnectActionSetting>obj;
        return !!connect.to && !!connect.from;
    }
    return false;
}

export function isArray<T>(obj: T | T[]): obj is T[] {
    return Array.isArray(obj);
}

export function isLineBlockElementDescription(obj?: BlockElementDescription): obj is LineBlockElementDescription {
    if (!!obj) {
        const line = <LineBlockElementDescription>obj;
        return line.type === BlockElementType.Line;
    }
    return false;
}

export function isLineBlockElement(obj?: BlockElement): obj is LineBlockElement {
    if (!!obj) {
        const line = <LineBlockElement>obj;
        return line.type === BlockElementType.Line;
    }
    return false;
}

export function isContainerBlock(obj?: Block): obj is ContainerBlock {
    if (!!obj) {
        const container = <ContainerBlock>obj;
        if (!!container.parentId) return true;
        const blockEl = <any>obj;
        return !blockEl.type;
    }
    return false;
}
