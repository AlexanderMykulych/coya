import {Properties} from "csstype";

export enum BlockElementType {
    Rect = "rect",
    Line = "line"
}
export interface BaseBlockElementDescription {
    label?: string;
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
}
export interface AddNewBlockActionSetting extends BlockGroupDescriptions {}

export type ActionSetting = ConnectActionSetting | AddNewBlockActionSetting;

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

export interface RectPosition {
    x: number;
    y: number;
    w: number;
    h: number;
    indentX?: number;
    indentY?: number;
}

export type Position = RectPosition;
export interface BlockStyle {
    svg?: string;
    svgUrl?: string;
    svgTag?: keyof SVGElementTagNameMap;
    css?: Properties;
    position?: Position;
}
export interface StyleDescription {
    [name: string]: BlockStyle;
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
    positioning?: PositioningSystem;
}

export type ArchitectureDescriptionElement =
    ArchitectureDescription
    | BlockGroupDescriptions
    | ParallelPhase
    | AnimationDescription
    | StyleDescription;