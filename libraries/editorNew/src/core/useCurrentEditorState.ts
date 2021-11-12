import { computed, ref } from "vue";
import { CurrentEditorState, getCurrentEditor, MakeChangeAction } from ".";
import { Action, isArray } from "coya-core";
import { executeActions } from "coya-core";
import { ArchitectureDescription } from "coya-core";

export function useCurrentEditorState(): CurrentEditorState | null {
    const editor = getCurrentEditor();
    if (editor.enable) {
        const makeChangeToDiagram = (diagram: ArchitectureDescription, actions: MakeChangeAction[]) => {
            if (editor.architecture?.currentPhase === null) {
                executeActions(diagram, actions.map((x, index) => ({
                    actionId: index,
                    action: x.action
                })), 0);
            } else {
                const phaseConfig = diagram.phases?.[editor.architecture.currentPhase];
                if (phaseConfig) {
                    actions
                        .filter(x => !x.applyChangesToDiagram)
                        .forEach(({ action }) => {
                        if (!!phaseConfig[action.name]) {
                            Object.keys(action.value)
                                .forEach(key => phaseConfig[action.name][key] = action.value[key]);
                        } else {
                            phaseConfig[action.name] = action.value;
                        }
                        });
                    actions

                    executeActions(
                        diagram,
                        actions
                            .filter(x => x.applyChangesToDiagram)
                            .map((x, index) => ({
                                actionId: index,
                                action: x.action
                            })),
                        0
                    );
                }
            }
        }
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
            activeNode: computed(() => !!editor.state.selectedNodeIds?.[0] ? ({
                style: editor.architecture.style?.blocks[editor.state.selectedNodeIds?.[0]]
            }) : null),
            architecture: editor.architecture,
            mouseState: editor.mouseState,
            svg: editor.svg,
            makeChange: (action: MakeChangeAction | MakeChangeAction[]) => {
                console.log(action);
                const actions = isArray(action) ? action : [action];
                makeChangeToDiagram(editor.config, actions);
                makeChangeToDiagram(editor.initialConfig, actions);
                editor.architecture.toPhase(editor.architecture.currentPhase);
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
