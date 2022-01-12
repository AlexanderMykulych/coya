import { isNotNullOrUndefined, isNullOrUndefined } from "coya-util";
import {
    ActionSetting, AddNewBlockActionSetting,
    ArchitectureDescription, BlockElementDescription,
    BlockElementType, ConnectActionSetting,
    FormulaValue, FormulaValueObj,
    HideBlocksActionSetting,
    LineBlockElementDescription
} from "./descriptionTypes";
import {
    Block,
    ContainerBlock, LineBlockElement, ParentBlockElement,
    Positioning, RectPositioning
} from "./types";


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
        return isNotNullOrUndefined(rectPos.x)
            && isNotNullOrUndefined(rectPos.y)
            && isNullOrUndefined((rectPos as any).x1);
    }
    return false;
}

export function isConnectActionSetting(obj?: ActionSetting): obj is ConnectActionSetting {
    if (obj) {
        const connect = <ConnectActionSetting>obj;
        return !!connect.to && !!connect.from;
    }
    return false;
}

export function isHideBlocksActionSetting(obj?: any): obj is HideBlocksActionSetting {
    return typeof obj === "string";
}
export function isAddNewBlockActionSetting(obj?: ActionSetting): obj is AddNewBlockActionSetting {
    if (obj) {
        const connect = <AddNewBlockActionSetting>obj;
        return isBlockElementDescription(connect);
    }
    return false;
}
export function isActionSetting(obj?: unknown): obj is ActionSetting {
    const action = <ActionSetting>obj;
    return isConnectActionSetting(action) && isAddNewBlockActionSetting(action);
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

export function isLineBlockElement(obj?: any): obj is LineBlockElement {
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


export function isFormulaValue(obj?: unknown): obj is FormulaValue {
    if (!!obj) {
        const formulaValue = <FormulaValueObj>obj;
        return (!!formulaValue.formula && typeof formulaValue.formula === "string") || typeof formulaValue === "string";
    }
    return false;
}

export function isHasLabel(obj: any): obj is { label: string } {
    return !!obj && typeof obj.label === "string";
}