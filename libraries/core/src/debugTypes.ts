export enum DebugType {
    Select = "select",
    Line = "line",
    StartPhase = "start_phase"
};
export interface DebugSetting {
    type: DebugType;
}
export interface SelectBlockDebugAction {
    type: DebugType.Select;
    blockIds: string[];
}
export interface StartPhaseDebugAction {
    type: DebugType.StartPhase;
    phaseId: number;
}
export interface LineDebugAction {
    type: DebugType.Line;
    lineType: "x" | "y";
    value: number;
    color: string;
}
export type DebugAction = SelectBlockDebugAction | StartPhaseDebugAction | LineDebugAction;