import { Ref } from "vue";
import { Properties } from "csstype";
import { DebugSetting } from "./debugTypes";
import { BlockPositioning, CurrentPhaseInfo, DebugStateContainer, FormulaValueFuncContext } from "./types";

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
    sourcePhase?: number;
    sourcePhaseAction?: number;
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
    [name: string]: BlockElementDescription | null
}

export interface ConnectActionSetting {
    from: string;
    to: string;
    name?: string;
    label?: string;
    enter?: EnterSetting;
}
export type HideBlocksActionSetting = string;
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
    | HighlightActionSetting
    | HideBlocksActionSetting
    | BlockStyleActionSetting;

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
export interface Point {
    x: number | FormulaValue;
    y: number | FormulaValue;
}
export interface RectPosition {
    x?: number | FormulaValue;
    y?: number | FormulaValue;
    w?: number | FormulaValue;
    h?: number | FormulaValue;
    top?: Point;
    bottom?: Point;
    right?: Point;
    left?: Point;

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
export interface BlockStyleActionSetting {
    [name: string]: BlockStyle;
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
    Default = "def",
    Grid = "grid",
    Dagre = "grid",
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

export type CustomContextBuilderFunc = (blocksPositioning: Ref<BlockPositioning[]>, setting: TransformSetting) => FormulaValueFuncContext;
export interface TransformSetting {
    viewBox: ViewBoxSetting;
    customContextBuilderFunc?: CustomContextBuilderFunc;
    currentPhase: CurrentPhaseInfo;
    defaultValue?: any;
}