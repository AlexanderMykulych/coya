import { computed, reactive, ref } from "vue";
import { CurrentEditorState, Editor, getCurrentEditor, MakeChangeAction } from ".";
import { Action, isArray } from "coya-core";
import { isNotNullOrUndefined, isNullOrUndefined } from "coya-util";
import { executeActions } from "coya-core";
import { ArchitectureDescription } from "coya-core";
import { applyPositioning } from "coya-core";
import { renameBlock } from "./renameBlock";
import { debounce } from "debounce";
import { prepareNum } from "./prepareNum";
import { reconnectArrow } from "./reconnectArrow";
import { LayoutConfig } from "../components/AppMenu/layouts";

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
            style: computed({
                get: () => editor.config.style?.blocks?.[blockId.value],
                set: val => editor.config.style.blocks[blockId.value] = val,
            }),
            block: editor.config?.blocks?.[blockId.value],
        }) : null);
        const initConfigActiveNode = computed(() => !!blockId.value ? ({
            style: computed({
                get: () => editor.initialConfig.style?.blocks?.[blockId.value],
                set: val => editor.initialConfig.style.blocks[blockId.value] = val,
            }),
            block: editor.initialConfig?.blocks?.[blockId.value],
        }) : null);
        
        return {
            isOneNodeSelected: computed(() => !!blockId.value),
            initPhases: computed({
                get: () => editor.initialConfig.phases,
                set: debounce((val: any) => {
                    editor.config.phases = val;
                    editor.initialConfig.phases = val;
                }, 400)
            }),
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
                ...createComputed(
                    configActiveNode,
                    [configActiveNode, initConfigActiveNode,],
                    [
                        ['style.value.position.x', prepareNum],
                        ['style.value.position.y', prepareNum],
                        ['style.value.position.w', prepareNum],
                        ['style.value.position.h', prepareNum],
                        ['style.value.position.x1', prepareNum],
                        ['style.value.position.y1', prepareNum],
                        ['style.value.position.x2', prepareNum],
                        ['style.value.position.y2', prepareNum],
                        ['style.value.position.indentX1', prepareNum],
                        ['style.value.position.indentX2', prepareNum],
                        ['style.value.position.indentY1', prepareNum],
                        ['style.value.position.indentY2', prepareNum],
                        'style.value.label',
                        'style.value.css',
                        'style.value.pinTo',
                    ]
                ),
                from: computed({
                    get: () => configActiveNode.value?.block?.from,
                    set: debounce(val => {
                        if (blockId.value) {
                            reconnectArrow(
                                editor.config,
                                editor.initialConfig,
                                blockId.value,
                                val,
                                "from",
                            );
                        }
                    }, 800)
                }),
                to: computed({
                    get: () => configActiveNode.value?.block?.to,
                    set: debounce(val => {
                        if (blockId.value) {
                            reconnectArrow(
                                editor.config,
                                editor.initialConfig,
                                blockId.value,
                                val,
                                "to",
                            );
                        }
                    }, 800)
                }),
            }),
            activeBlockSetting: computed(() => blockId.value ? editor.config.blocks?.[blockId.value] : null),
            activeBlockStyleSetting: computed(() => blockId.value ? editor.config.style?.blocks?.[blockId.value] : null),
            activeConfig: computed(() => editor.config),
            initialConfig: computed(() => editor.initialConfig),
            architecture: editor.architecture,
            mouseState: editor.mouseState,
            state: editor.state,
            svg: editor.svg,
            workEl: editor.workEl,
            makeChange: (action: MakeChangeAction | MakeChangeAction[]) => {
                const actions = isArray(action) ? action : [action];
                makeChangeToDiagram(editor.config, actions);
                makeChangeToDiagram(editor.initialConfig, actions);
                editor.architecture.toPhase(editor.architecture.currentPhase);
            },
            getNewUniqBlockName: (prefix: string = 'block_') => {
                let index = 1;
                const getName = () => `${prefix}${index}`;
                let name = getName();
                const isBlockExist = (name: string) =>
                    Object.keys(editor.architecture.style?.blocks || {}).some(x => x === name) ||
                    editor.architecture?.blocks.some((x: any) => x.id === name);
                while (isBlockExist(name)) {
                    index++;
                    name = getName();
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
            zoomState: computed(() => editor.zoomState),
            applyPositioning: (layout: LayoutConfig) => {
                applyPositioning(editor.config, layout.type, {
                    ...layout.config,
                    activeEl: blockId.value,
                });
                editor.initialConfig.style = JSON.parse(JSON.stringify(editor.config.style))
            }
        };
    }
    throw "no editor state";
}

function createComputed(getObj: any, setObjects: any[], configs: string[] | (string[])[]) {
    const res = {};
    const set = (obj: any, path: string[], val: any) => {
        const leftPath = path.slice(0, path.length - 1);
        const lastItem = path[path.length - 1];
        leftPath.forEach(x => {
            if (isNullOrUndefined(obj[x])) {
                obj[x] = {};
            }
            obj = obj[x]
        });
        if (isNotNullOrUndefined(obj)) {
            obj[lastItem] = val;
        }
    }
    const get = (obj: any, path: string[]) => {
        if (path.every(x => {
            if (obj?.[x] !== undefined) {
                obj = obj[x];
                return true;
            }
            return false;
        })) {
            return obj;
        }
    }
    configs.forEach(item => {
        if (!isArray(item)) {
            item = [item];
        }
        const path = item[0].split('.');
        res[path[path.length - 1]] = computed({
            get: () => {
                const res = get(getObj.value, path);
                return item[1] ? item[1](res) : res;
            },
            set: val => {
                setObjects.forEach(x => set(x.value, path, val));
            }
        });
    });
    return res;
}
