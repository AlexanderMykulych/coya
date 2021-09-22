import { DebugStateContainer } from "../types";

export function isBlockSelected(blockId: string, debugState: DebugStateContainer) {
    if (debugState.selected) {
        return debugState.selected.properties.prop === "blocks"
            && debugState.selected.properties.child?.prop === blockId;
    }
    return false;
}