import { isConnectActionSetting } from "../typeGuards";
import { Action, ActionExecutor, Architecture } from "../types";

export const connectActionExecutor: ActionExecutor = (architecture: Architecture, action: Action) => {
    if (isConnectActionSetting(action.value)) {
        // architecture.blocks.push({
        
        // });
    }
    
    return architecture;
}