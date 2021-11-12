import { Action, ActionSetting, ActionType, Architecture } from "coya-core";
import { ArchitectureDescription, Change } from "coya-core";
import { Ref } from "vue";

export interface BaseEditor {
    enable: boolean;
}
export interface Point {
    x: number;
    y: number;
}
export interface DragState {
    clickPoint: Point;
    movePoint: Point;
    clickDeltaPoint: Point;
}
export interface EnabledEditorState {
    drag?: DragState;
    selectedNodeIds?: string[];
}
export type SvgRef = Ref<SVGSVGElement | null>;

export interface MousePaletteState {
    pressed: boolean;
    blockName?: string;
}
export interface MouseState {
    position: Point;
    pressed: boolean;
    palette: MousePaletteState;
    leave: boolean;
}
export interface EnabledEditor extends BaseEditor {
    enable: true;
    id?: string;
    wrap: (node: any) => any;
    state: EnabledEditorState;
    svg: SVGSVGElement | null;
    mouseState: MouseState;
    config: ArchitectureDescription;
    initialConfig: ArchitectureDescription;
    architecture: Architecture;
    makeChange: (change: Change) => void;
    component: any
}
export interface DisabledEditor extends BaseEditor {
    enable: false;
}

export type Editor = EnabledEditor | DisabledEditor;

export type PrivideKeys = "coya-editor";

export interface EnableEditorParameters {
    svg: SvgRef;
    config: Ref<ArchitectureDescription>;
    initialConfig: Ref<ArchitectureDescription>;
    architecture: Ref<Architecture>;
    id?: string
}
export interface MakeChangeAction {
    action: Action;
    applyChangesToDiagram?: boolean;
}
export interface CurrentEditorState {
    isOneNodeSelected: Ref<boolean>;
    phases: Ref<{
        items?: {
            phaseKey: string;
            config: string[] | ActionSetting | ActionSetting[];
            index: number;
        }[][];
        totalCount: number;
    }>;
    architecture: Architecture;
    mouseState: MouseState;
    svg: SVGSVGElement | null;
    makeChange: (action: MakeChangeAction | MakeChangeAction[]) => void;
    getNewUniqBlockName: () => string;
    activeNode: Ref<{ style: any }>;
}