
import { ComputedRef, Ref } from "@vue/reactivity";
import { ActionSetting, ArchitectureDescription, BlockElementDescription, BlockGroupDescriptions, BlockStyle, LineBlockElementDescription } from "./descriptionTypes";

export type NumberValue = number | ComputedRef<number>;
export type StringValue = string | ComputedRef<string>;

type IdValue = string | "main";
export interface Identifiable {
    id: IdValue;
}
export interface BlockElement extends Identifiable {
    label: StringValue;
    parentId?: IdValue;
}

export type ExcludeProp<T, U> = {
    [Property in keyof T as Exclude<Property, U>]: T[Property]
}
export interface LineBlockElement extends ExcludeProp<LineBlockElementDescription, "label">, Identifiable {
    label: StringValue;
}

export interface ParentBlockElement extends BlockElement {
    children: Block[];
}

export type ContainerBlock = BlockElement | ParentBlockElement;
export type Block = ContainerBlock | LineBlockElement;

export type ActionExecutor = (architecture: Architecture, actionSetting: Action) => Architecture;
export enum ActionType {
    Connect = "connect",
    AddNewBlock = "newBlock"
}
export interface Action {
    name: ActionType | string;
    value: ActionSetting;
}
export interface Phase {
    dependsOnPhaseId: IdValue | null;
    action: Action;
}
export type Phases = Phase[];
export interface Animation extends Identifiable {
}
export interface BlocksStyle {
    [name: string]: BlockStyle;
}
export interface Style extends Identifiable {
    positioning: BlockPositioning[];
    blocks?: BlocksStyle;
}

export interface RectPositioning {
    x: NumberValue;
    y: NumberValue;
    width: NumberValue;
    height: NumberValue;
}

export interface CirclePositioning {
    cx: NumberValue;
    cy: NumberValue;
    radius: NumberValue;
}
export interface LinePositioning {
    x1: NumberValue;
    y1: NumberValue;
    x2: NumberValue;
    y2: NumberValue;
}

export type Positioning = RectPositioning | CirclePositioning | LinePositioning;
export interface BlockPositioning {
    blockId: IdValue;
    position: Positioning;
}

export interface ArchitectureData {
    blocks: Block[];
    style?: Style | null;
}
export interface Architecture extends RefsType<ArchitectureData> {
    start: () => void
}
export type RefsType<T> = {
    [P in keyof T]?: Ref<T[P]>;
}
export interface TransitionalArchitecture extends ArchitectureDescription {
}

export type PhaseId = string | (string | null)[] | null;
export interface CurrentPhaseInfo {
    current: PhaseId;
}

export enum ChangeType {
    AddNewBlock = 0
}
export interface AddBlockChangeSetting {
    blockSettings: string | BlockGroupDescriptions | BlockElementDescription | null;
    newBlockId: string;
}
export type ChangeSetting = AddBlockChangeSetting;
export interface Change {
    setting: ChangeSetting;
    type: ChangeType;
}
export interface PhaseIndex {
    getPhaseById(current: PhaseId): PhaseIndexItem[] | undefined;
}
export interface PhaseIndexItem {
    phaseId: string | null;
    isStart: boolean;
    nextPhaseId: string | null;
    actions: PhaseIndexItemAction[];

}

export interface PhaseIndexItemAction {
    action: Action;

}

export interface ActionExecutorContext {
    indexItem: PhaseIndexItem;
    architecture: ArchitectureDescription;
    phaseIndex: PhaseIndex;
}

export interface FormulaValueFuncContext {
    blockNamesAsFuncParams: string;
    blocksValues: Positioning[];
}