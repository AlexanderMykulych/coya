import { ActionSetting, ConnectActionSetting, PhaseStep } from "../descriptionTypes";
import { isConnectActionSetting, isPhaseAction } from "../typeGuards";
import { Action, ActionExecutor, Phases } from "../types";
import { connectActionExecutor } from "./connectActionExecutor";

export function phaseDescriptionToArchitecturePhase(phase?: PhaseStep): Phases {
    if (isPhaseAction(phase)) {
        const res = Object
            .keys(phase)
            .flatMap(key => {
                let action = phase[key];
                let actions: (string | ActionSetting)[] = [];
                if (!Array.isArray(action)) {
                    actions = [action];
                }
                return actions.map(y => ({
                    dependsOnPhaseId: null,
                    action: createAction(key, y)
                }));
            });

        return res;
    }
    throw "Not implemented!";
}
function createAction(name: string, value: string | ConnectActionSetting): Action {
    if (value && isConnectActionSetting(<ActionSetting>value)) {
    }
    throw `value is string. {value}`;
}

function getActionByName(name: string): ActionExecutor {
    if (name === "connect") {
        // return connectActionExecutor;
    }
    throw `Action ${name} is not found!`;
}

