import { Architecture } from "../types";

export function startPhases(architecture: Architecture) {
    return !!architecture;
    // if (architecture.phases) {
    //     architecture
    //         .phases
    //         .filter(x => x.dependsOnPhaseId === null)
    //         .forEach(phase => runAction(architecture, phase.action));
    // }
}

// function runAction(architecture: Architecture, action: Action) {
//     action.executor(architecture, action);
// }