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
import { removeBlockById } from "./removeBlockById";
import { findStartTransform } from "./findStartTransform";

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
            block: computed({
                get: () => editor.config?.blocks?.[blockId.value],
                set: val => editor.config.blocks[blockId.value] = val
            }),
        }) : null);
        const initConfigActiveNode = computed(() => !!blockId.value ? ({
            style: computed({
                get: () => editor.initialConfig.style?.blocks?.[blockId.value],
                set: val => editor.initialConfig.style.blocks[blockId.value] = val,
            }),
            block: computed({
                get: () => editor.initialConfig?.blocks?.[blockId.value],
                set: val => editor.initialConfig.blocks[blockId.value] = val
            }),
        }) : null);
        const getBlockRealPosition = (blockId: string) => editor.architecture?.style?.positioning?.find(x => x.blockId === blockId)?.position;
        const activeNode = reactive({
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
                    'style.value.css',
                    'style.value.pinTo',
                ]
            ),
            label: computed({
                get: () =>
                    configActiveNode.value?.style?.value?.label
                    ?? (
                        typeof configActiveNode.value?.block.value === "string"
                            ? configActiveNode.value?.block.value
                            : null
                    )
                    ?? configActiveNode.value?.block.value?.label,
                set: (val: string | null) => {
                    if (configActiveNode.value?.style?.value?.label) {
                        set(configActiveNode.value, "style.value.label", val);
                        set(initConfigActiveNode.value, "style.value.label", val);
                    } else if (typeof configActiveNode.value?.block.value === "string") {
                        set(configActiveNode.value, "block.value", val);
                        set(initConfigActiveNode.value, "block.value", val);
                    } else if (configActiveNode.value?.block.value.label) {
                        set(configActiveNode.value, "block.value.label", val);
                        set(initConfigActiveNode.value, "block.value.label", val);
                    }
                }
            }),
            from: computed({
                get: () => configActiveNode.value?.block.value?.from,
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
                get: () => configActiveNode.value?.block.value?.to,
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
        });

        const diagramRect = computed(() => findStartTransform(editor.architecture, editor.svg));
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
            activeNode,
            activeBlockSetting: computed(() => blockId.value ? editor.config.blocks?.[blockId.value] : null),
            activeBlockStyleSetting: computed(() => blockId.value ? editor.config.style?.blocks?.[blockId.value] : null),
            activeConfig: computed(() => editor.config),
            initialConfig: computed(() => editor.initialConfig),
            architecture: editor.architecture,
            mouseState: editor.mouseState,
            state: editor.state,
            svg: editor.svg,
            workEl: editor.workEl,
            history: computed(() => editor.history),
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
            },
            getBlockRealPosition,
            removeBlock: (id?: string) => {
                if (isNullOrUndefined(id)) {
                    id = blockId.value;
                }
                if (id) {
                    editor.state.selectedNodeIds = [];
                    removeBlockById(editor.config, editor.architecture, id);
                    removeBlockById(editor.initialConfig, editor.architecture, id);
                }
            },
            pinToBlock: (toBlockId: string) => {
                const pinToPos = getBlockRealPosition(toBlockId);
                const blockPos = getBlockRealPosition(activeNode.name);
                if (pinToPos && blockPos) {
                    activeNode.x = `${blockPos.x - pinToPos.x}`;
                    activeNode.y = `${blockPos.y - pinToPos.y}`;
                    activeNode.pinTo = toBlockId;
                }
            },
            undoChange: () => {
                const history = editor.history;
                const length = history.items.length;
                if (isNullOrUndefined(history.current)) {
                    if (length > 0) {
                        history.current = 1;
                    }
                } else if (length >= history.current + 1) {
                    history.current++;
                }
            },
            redoChange: () => {
                const history = editor.history;
                const length = history.items.length;
                if (isNullOrUndefined(history.current)) {
                    return;
                }
                if (history.current > 1) {
                    history.current--;
                } else if (history.current === 1) {
                    history.current = undefined;
                }
            },
            diagramRect,
            scaleToStart: () => {
                editor.zoomState.translate.x = diagramRect.value.x;
                editor.zoomState.translate.y = diagramRect.value.y;
                editor.zoomState.scale = diagramRect.value.scale;
            }
        };
    }
    throw "no editor state";
}
const set = (obj: any, path: string[] | string, val: any) => {
    if (typeof path === "string") {
        path = path.split(".");
    }
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
function createComputed(getObj: any, setObjects: any[], configs: string[] | (string[])[]) {
    const res = {};

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

