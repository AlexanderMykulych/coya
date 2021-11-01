import { computed } from "vue";
import { getCurrentEditor } from ".";

export function useCurrentEditorState() {
    const editor = getCurrentEditor();
    if (editor.enable) {
        return {
            isOneNodeSelected: computed(() => !!editor.state.selectedNodeIds?.[0]),
            phases: computed(() => {
                let index = 0;
                return {
                    items: editor.config.phases?.map(group => {
                        return Object
                            .keys(group)
                            .map(phaseKey => ({
                                phaseKey,
                                config: group[phaseKey],
                                index: index++
                            }));
                    }),
                    totalCount: index + 1
                }
            })
        };
    }
    return {
        isOneNodeSelected: false,
        phases: {
            items: [],
            totalCount: 0
        }
    }
}
