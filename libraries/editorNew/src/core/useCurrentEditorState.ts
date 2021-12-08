import { computed, reactive, ref } from "vue";
import { CurrentEditorState, Editor, getCurrentEditor, MakeChangeAction } from ".";
import { Action, isArray, isString } from "coya-core";
import { executeActions } from "coya-core";
import { ArchitectureDescription } from "coya-core";
import { renameBlock } from "./renameBlock";
import { debounce } from "debounce";

export function useCurrentEditorState(): CurrentEditorState {
    const editor = getCurrentEditor();
    return useEditorState(editor);
}
export function useEditorState(editor: Editor): CurrentEditorState {
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
                                if (isArray(phaseConfig[action.name])) {
                                    phaseConfig[action.name].push(action.value);
                                } else {
                                    phaseConfig[action.name] = [
                                        phaseConfig[action.name],
                                        action.value
                                    ];
                                }
                            } else {
                                phaseConfig[action.name] = action.value;
                            }
                        });

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
        };
        const blockId = computed(() => editor.state.selectedNodeIds?.[0]);
        const configActiveNode = computed(() => !!blockId.value ? ({
            style: editor.config.style?.blocks[blockId.value]
        }) : null);
        const initConfigActiveNode = computed(() => !!blockId.value ? ({
            style: editor.initialConfig.style?.blocks[blockId.value]
        }) : null);
        const prepareNum = (val: string | Number) => {
            const num = Number(val);
            if (!isNaN(num)) {
                const res = Math.round((num + Number.EPSILON) * 100) / 100;
                return isString(val) ? `${res}` : res;
            }
            return val;
        }
        return {
            isOneNodeSelected: computed(() => !!blockId.value),
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
            activeNode: reactive({
                x: computed({
                    get: () => prepareNum(configActiveNode.value?.style?.position?.x),
                    set: val => {
                        configActiveNode.value.style.position.x = val;
                        initConfigActiveNode.value.style.position.x = val;
                    }
                }),
                y: computed({
                    get: () => prepareNum(configActiveNode.value?.style?.position?.y),
                    set: val => {
                        configActiveNode.value.style.position.y = val;
                        initConfigActiveNode.value.style.position.y = val;
                    }
                }),
                w: computed({
                    get: () => prepareNum(configActiveNode.value?.style?.position?.w),
                    set: val => {
                        configActiveNode.value.style.position.w = val;
                        initConfigActiveNode.value.style.position.w = val;
                    }
                }),
                h: computed({
                    get: () => prepareNum(configActiveNode.value?.style?.position?.h),
                    set: val => {
                        configActiveNode.value!.style!.position.h = val;
                        initConfigActiveNode.value.style.position.h = val;
                    }
                }),
                name: computed({
                    get: () => blockId.value,
                    set: debounce((val) => {
                        if (blockId.value) {
                            renameBlock(editor.config, blockId.value, val);
                            renameBlock(editor.initialConfig, blockId.value, val);
                            editor.state.selectedNodeIds = [val];
                        }
                    }, 800)
                }),
                label: computed({
                    get: () => configActiveNode.value?.style?.label,
                    set: val => {
                        configActiveNode.value!.style!.label = val;
                        initConfigActiveNode.value!.style!.label = val;
                    }
                }),
                css: computed({
                    get: () => configActiveNode.value?.style?.css,
                    set: val => {
                        configActiveNode.value!.style!.css = val;
                        initConfigActiveNode.value!.style!.css = val;
                    }
                })
            }),
            architecture: editor.architecture,
            mouseState: editor.mouseState,
            state: editor.state,
            svg: editor.svg,
            makeChange: (action: MakeChangeAction | MakeChangeAction[]) => {
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
            },
            selectedNode: computed({
                get: () => editor.state.selectedNodeIds?.[0],
                set: (val) => !!val ? editor.state.selectedNodeIds = [val] : null,
            }),
            showDebugWindow: computed({
                get: () => editor.showDebugWindow,
                set: (val: boolean) => editor.showDebugWindow = val,
            }),
        };
    }
    throw "no editor state";
}


