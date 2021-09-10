import { Properties } from "csstype";

export enum BlockElementType {
    Rect = "rect",
    Line = "line"
}

export interface EnterSetting {
    from: any;
    to: any;
}
export interface BaseBlockElementDescription {
    label?: string;
    enter?: EnterSetting;
    type?: BlockElementType;
}

export interface LineBlockElementDescription extends BaseBlockElementDescription {
    type: BlockElementType.Line;
    from: string;
    to: string;
}

export interface RectBlockElementDescription extends BaseBlockElementDescription {
    type?: BlockElementType.Rect;
}

export type BlockElementDescription = LineBlockElementDescription | RectBlockElementDescription;

export interface BlockGroupDescriptions {
    [name: string]: BlockGroupDescriptions | BlockElementDescription | string | null
}

export interface ConnectActionSetting {
    from: string;
    to: string;
    name?: string;
    label?: string;
    enter?: EnterSetting;
}
export interface AddNewBlockActionSetting extends BlockGroupDescriptions { }
export interface ChangeBlockPositionActionSetting {
    [name: string]: Position;
}

export interface ChangeLabelActionSetting {
    [name: string]: {
        label: string;
    }
}

export type ActionSetting = ConnectActionSetting | AddNewBlockActionSetting | ChangeBlockPositionActionSetting | ChangeLabelActionSetting;

export interface PhaseAction {
    [name: string]: string | string[] | ActionSetting | ActionSetting[];
}


export type GraduallyPhases = (PhaseStep | PhaseAction)[];
export interface ParallelPhase {
    [name: string]: PhaseStep;
}

export type PhaseStep =
    | ParallelPhase
    | GraduallyPhases
    | PhaseAction

export interface AnimationDescription {
    [name: string]: {};
}

export interface FormulaValueObj {
    formula: string;
}
export type FormulaValue = FormulaValueObj | string;
export interface RectPosition {
    x?: number | FormulaValue;
    y?: number | FormulaValue;
    w?: number | FormulaValue;
    h?: number | FormulaValue;

    x1?: number | FormulaValue;
    y1?: number | FormulaValue;
    x2?: number | FormulaValue;
    y2?: number | FormulaValue;

    indentX?: number | FormulaValue;
    indentX1?: number | FormulaValue;
    indentX2?: number | FormulaValue;
    indentY?: number | FormulaValue;
    indentY1?: number | FormulaValue;
    indentY2?: number | FormulaValue;

    enter?: EnterSetting;
}


export type Position = RectPosition;
export interface BlockStyle {
    svg?: string;
    svgUrl?: string;
    svgTag?: keyof SVGElementTagNameMap;
    css?: Properties;
    position?: Position;
    label?: string;
}
export interface StyleDescription {
    blocks?: {
        [name: string]: BlockStyle
    }
    positioning?: PositioningSystem;
}

export enum PositioningSystem {
    Auto = "auto",
    Grid = "grid"
}
export interface ArchitectureDescription {
    blocks: BlockGroupDescriptions;
    phases?: PhaseStep;
    animation?: AnimationDescription;
    style?: StyleDescription;
}

export type ArchitectureDescriptionElement =
    ArchitectureDescription
    | BlockGroupDescriptions
    | ParallelPhase
    | AnimationDescription
    | StyleDescription;