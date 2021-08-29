import {Properties} from "csstype";
export interface BlockElementDescription {
    label?: string;
}

export interface BlockGroupDescriptions {
    [name: string]: BlockGroupDescriptions | BlockElementDescription | string | null
}

export interface PhaseAction {
    [name: string]: string | string[];
}

export type GraduallyPhaseActions = PhaseAction[];
export type GraduallyPhases = PhaseStep[];
export interface ParallelPhase {
    [name: string]: PhaseStep;
}

export type PhaseStep =
    | ParallelPhase
    | GraduallyPhases
    | PhaseAction
    | GraduallyPhaseActions;

export interface AnimationDescription {
    [name: string]: {};
}
export interface BlockStyle {
    svg?: string;
    svgUrl?: string;
    svgTag?: keyof SVGElementTagNameMap;
    css?: Properties;
}
export interface StyleDescription {
    [name: string]: BlockStyle;
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