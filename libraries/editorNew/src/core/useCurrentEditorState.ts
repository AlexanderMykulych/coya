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
                if (editor.architecture?.currentPhase === null) {
                    executeActions(editor.config, actions.map((x, index) => ({
                        actionId: index,
                        action: x
                    })), 0);
                } else {
                    const phaseConfig = editor.config.phases?.[editor.architecture.currentPhase];
                    if (phaseConfig) {
                        actions.forEach(action => {
                            if (!!phaseConfig[action.name]) {
                                Object.keys(action.value)
                                    .forEach(key => phaseConfig[action.name][key] = action.value[key]);
                            } else {
                                phaseConfig[action.name] = action.value;
                            }
                        });
                    }
                }
            },
            getNewUniqBlockName: () => {
                let name = "block_new";
                while (Object.keys(editor.architecture.style?.blocks || {}).some(x => x === name)) {
                    name += "_new";
                }
                return name;
            }
        };
    }
    return null;
}
