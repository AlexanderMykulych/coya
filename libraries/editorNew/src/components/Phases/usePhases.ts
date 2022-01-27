import { isNotNullOrUndefined, isNullOrUndefined } from "coya-util";
import { computed } from "vue";
import { useCurrentEditorState } from "../../core/useCurrentEditorState";

export function usePhases() {
    const { phases, architecture, initPhases } = useCurrentEditorState();
    const currentPhase = computed(() => architecture?.currentPhase);
    const phaseCount = computed(() => phases.value.items?.length);
    const isLastPhaseActive = computed(() => phaseCount.value && currentPhase.value === phaseCount.value - 1);
    const isStartPhaseActive = computed(() => isNullOrUndefined(currentPhase.value));
    const setCurrentPhase = (index: number | null) => {
        if (isNotNullOrUndefined(index) && index < 0) {
            index = null;
        }
        architecture!.toPhase(index);
    };
    const setNextPhase = () => {
        const index = currentPhase.value;
        if (isNotNullOrUndefined(index)) {
            if (isNotNullOrUndefined(phaseCount.value) && phaseCount.value - 1 > index) {
                setCurrentPhase(index + 1);
            }
        } else {
            setCurrentPhase(0);
        }
    }
    const setPrevPhase = () => {
        const index = currentPhase.value;
        if (isNotNullOrUndefined(index)) {
            setCurrentPhase(index - 1);
        }
    }
    const setLastPhase = () => {
        if (phaseCount.value) {
            setCurrentPhase(phaseCount.value - 1);
        }
    }
    const addNewPhase = (afterPhaseIndex?: number) => {
        initPhases.value?.splice((afterPhaseIndex ?? initPhases.value.length) + 1, 0, {});
    }

    return {
        setCurrentPhase,
        setNextPhase,
        setPrevPhase,
        currentPhase,
        phaseCount,
        setLastPhase,
        isLastPhaseActive,
        isStartPhaseActive,
        addNewPhase,
    };
}
