
export interface BlockElementDescription {
    label?: string;
}

export interface BlockDescriptions {
    [name: string]: BlockDescriptions | BlockElementDescription | string | null
}

export interface PhaseStep {
    [name: string]: string | string[];
}

export type GraduallyPhaseSteps = PhaseStep[];
export type GraduallyPhases = Phases[];
export interface Phases {
    [name: string]: Phases | GraduallyPhases | PhaseStep | GraduallyPhaseSteps;
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
    blocks: BlockDescriptions;
    phases: Phases;
    animation: AnimationDescription;
    style: StyleDescription;
}