import { Architecture } from "coya-core";
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
export interface MouseState {
    position: Point;
    pressed: boolean;
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