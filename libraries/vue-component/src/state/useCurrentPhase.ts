import { reactive } from "vue";

const phasesSet: any = {};
export const useCurrentPhase = (id: string) => {
    if (!phasesSet[id]) {
        phasesSet[id] = reactive({
            current: null
        });
    }
    return phasesSet[id];
};