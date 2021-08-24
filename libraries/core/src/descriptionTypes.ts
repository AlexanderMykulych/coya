
export interface BlockElementDescription {
    label?: string;
}

export interface BlockGroupDescriptions {
    [name: string]: BlockGroupDescriptions | BlockElementDescription | string | null
}

export interface PhaseStep {
    [name: string]: string | string[];
}

export type GraduallyPhaseSteps = PhaseStep[];
export type GraduallyPhases = Phase[];
export interface Phase {
    [name: string]: Phase | GraduallyPhases | PhaseStep | GraduallyPhaseSteps;
}

export interface AnimationDescription {
    [name: string]: {};
}
export interface BlockStyle {
    
}
export interface StyleDescription {
    [name: string]: BlockStyle;
}
export interface ArchitectureDescription {
    blocks: BlockGroupDescriptions;
    phases: Phase;
    animation: AnimationDescription;
    style: StyleDescription;
}

export type ArchitectureDescriptionElement =
    ArchitectureDescription
    | BlockGroupDescriptions
    | Phase
    | AnimationDescription
    | StyleDescription;