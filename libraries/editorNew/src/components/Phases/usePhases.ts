import { computed } from "vue";
import { useCurrentEditorState } from "../../core/useCurrentEditorState";

export function usePhases() {
    const { phases, architecture } = useCurrentEditorState();
    const setCurrentPhase = (index: number | null) => architecture!.toPhase(index);

    return {
        setCurrentPhase,
        currentPhase: computed(() => architecture?.currentPhase)
    };
}
