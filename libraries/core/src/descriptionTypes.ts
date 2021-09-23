import { Ref } from "@vue/reactivity";
import { Properties } from "csstype";
import { DebugStateContainer } from ".";
import { DebugSetting } from "./debugTypes";

export enum BlockElementType {
    Rect = "rect",
    Line = "line",
    Highlight = "highlight"
}

export interface EnterSetting {
    from: any;
    to: any;
}
export interface BaseBlockElementDescription {
    label?: string;
    enter?: EnterSetting;
    type?: BlockElementType;
    debug?: DebugSetting;
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
export interface HighlightActionSetting {
    blocks: string[] | string;
    gap?: number;
}
export interface ChangeBlockPositionActionSetting {
    [name: string]: Position;
}

export interface ChangeLabelActionSetting {
    [name: string]: string | {
        label: string;
    }
}

export type ActionSetting =
    ConnectActionSetting
    | AddNewBlockActionSetting
    | ChangeBlockPositionActionSetting
    | ChangeLabelActionSetting
    | HighlightActionSetting;

export interface PhaseAction {
    [name: string]: string | string[] | ActionSetting | ActionSetting[];
}

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
    svgUrl?: string | URL;
    svgTag?: keyof SVGElementTagNameMap;
    css?: Properties;
    position?: Position;
    label?: string;
    isHighlight?: boolean;
}
export interface GlobalDebugSetting {
    enable: boolean;
}
export type StyleCss = string;
export interface StyleDescription {
    blocks?: {
        [name: string]: BlockStyle
    }
    debug?: GlobalDebugSetting;
    positioning?: PositioningSystem;
    css?: StyleCss;
}

export enum PositioningSystem {
    Auto = "auto",
    Grid = "grid"
}
export interface ArchitectureDescription {
    name: string;
    blocks: BlockGroupDescriptions;
    phases?: PhaseAction[];
    animation?: AnimationDescription;
    style?: StyleDescription;
    debugState?: DebugStateContainer;
}

export interface ViewBoxSetting {
    x: Ref<number> | number;
    y: Ref<number> | number;
    w: Ref<number> | number;
    h: Ref<number> | number;
}

export interface TransformSetting {
    viewBox: ViewBoxSetting;
}