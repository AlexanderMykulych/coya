import { computed, ref } from "vue";
import { CurrentEditorState, getCurrentEditor } from ".";
import { Action, isArray } from "coya-core";
import { executeActions } from "coya-core";

export function useCurrentEditorState(): CurrentEditorState | null {
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
            }),
            architecture: editor.architecture,
            mouseState: editor.mouseState,
            svg: editor.svg,
            makeChange: (action: Action | Action[]) => {
                console.log(action);
                const actions = isArray(action) ? action : [action];
                executeActions(editor.config, actions.map((x, index) => ({
                    actionId: index,
                    action: x
                })), 0);
            }
        };
    }
    return null;
}
