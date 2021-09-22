import { SelectedProperties } from "@coya/core";

const state = reactive<DebugState>({
    selected: null
});
export function useDebug() {
    return {
        state,
        selectEvent: (data: SelectedProperties) => {
            state.selected = data;
        }
    }
}

export interface DebugState {
    selected: SelectedProperties | null;
}