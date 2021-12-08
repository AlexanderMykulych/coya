import { Action, ActionSetting, ActionType, Architecture, RectPositioning } from "coya-core";
import { ArchitectureDescription, Change } from "coya-core";
import { Component, Ref } from "vue";

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
    originPosition: RectPositioning;
    clickDeltaPoint: Point;
}
export interface HoverState {
    hoveredBlockId: string;
}
export enum EditorMode {
    None = "none",
    Arrow = "arrow"
}

export interface ArrowState {
    start?: string;
    startPosition?: Point;
    end?: string;
    endPosition?: Point;
}

export interface EnabledEditorState {
    drag?: DragState;
    hover?: HoverState | null;
    selectedNodeIds?: string[];
    pins: PinState;
    mode?: EditorMode;
    arrowState?: ArrowState | null;
}

export interface PinState {
    selectedPinType?: PinType | null;
}

export type SvgRef = Ref<SVGSVGElement | null>;

export interface MousePaletteState {
    pressed: boolean;
    blockName?: string;
}
export interface MouseState {
    position: Point;
    pressed: boolean;
    pressedPosition: Point;
    palette: MousePaletteState;
    leave: boolean;
}
export interface EnabledEditor extends BaseEditor {
    enable: true;
    id?: string;
    wrap: (node: any) => any;
    state: EnabledEditorState;
    showDebugWindow: boolean;
    svg: SVGSVGElement | null;
    mouseState: MouseState;
    config: ArchitectureDescription;
    initialConfig: ArchitectureDescription;
    architecture: Architecture;
    makeChange: (change: Change) => void;
    component: any;
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
    activeNode: Ref<{ x: any; y: any; w: any; h: any; name: string; label: string;}>;
    state: EnabledEditorState;
    selectedNode: Ref<string | undefined>;
    showDebugWindow: Ref<boolean>;
}

export enum PinType {
    TopLeft = "topLeft",
    BottomLeft = "bottomLeft",
    BottomRight = "bottomRight",
    TopRight = "topRight",
    Top = "top",
    Left = "left",
    Bottom = "bottom",
    Right = "right",
}


export enum PaletteItemType {
    Block = "block",
    Action = "action"
}
export interface BasePaletteItem {
    name: string;
    paletteComponent: Component;
    type?: PaletteItemType;
}
export interface PaletteBlock extends BasePaletteItem {
    type?: PaletteItemType.Block;
    preview: {
        component: Component,
        width?: number | string;
        height?: number | string;
    };
}

export interface PaletteActionContext {
    editorState: EnabledEditorState;
}
export type PaletteActionFunc = (context: PaletteActionContext) => void;
export interface PaletteAction extends BasePaletteItem {
    type: PaletteItemType.Action;
    action: PaletteActionFunc;
}
export type PaletteItem = PaletteBlock | PaletteAction;