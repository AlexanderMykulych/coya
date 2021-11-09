import { ArchitectureDescription } from "../descriptionTypes";
import {
    CurrentPhaseInfo,
    PhaseId, PhaseIndex} from "../types";
import { executeActions } from "./executeActions";

export function startPhases(architecture: ArchitectureDescription, phaseIndex: PhaseIndex, phaseInfo: CurrentPhaseInfo): PhaseId {
    const indexItem = phaseIndex.getNextPhaseById(phaseInfo.current);
    if (indexItem) {
        return executeActions(architecture, indexItem.actions, indexItem.phaseId);
    }
    return null;
}

