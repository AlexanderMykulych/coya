import { Ref } from "vue";

export interface BaseEditor {
    enable: boolean;
}
export interface Point {
    x: number;
    y: number;
}
export interface DragState {
    nodeIds: string[];
    clickPoint: Point;
    movePoint: Point;
    clickDeltaPoint: Point;
}
export interface EnabledEditorState {
    drag?: DragState;
}
export type EditorSvg = Ref<SVGSVGElement | null>;
export interface MouseState {
    position: Point;
    pressed: boolean;
}
export interface EnabledEditor extends BaseEditor {
    enable: true;
    wrap: (node: any) => any;
    state: EnabledEditorState;
    svg: SVGSVGElement | null;
    mouseState: MouseState;
}
export interface DisabledEditor extends BaseEditor {
    enable: false;
}

export type Editor = EnabledEditor | DisabledEditor;

export type PrivideKeys = "coya-editor";