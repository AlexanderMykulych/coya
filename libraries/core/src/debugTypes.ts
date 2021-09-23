export enum DebugType {
    Select = "select",
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
export type DebugAction = SelectBlockDebugAction | StartPhaseDebugAction;