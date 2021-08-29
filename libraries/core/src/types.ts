import { ComputedRef } from "@vue/reactivity";
import { BlockStyle } from "./descriptionTypes";

export type NumberValue = number | ComputedRef<number>;
export type StringValue = string | ComputedRef<string>;

type IdValue = string | "main";
export interface Identifiable {
    id: IdValue;
}
export interface BlockElement extends Identifiable {
    label: StringValue;
    parentId?: IdValue;
}
export interface ParentBlockElement extends BlockElement {
    children: Block[];
}

export type Block = BlockElement | ParentBlockElement;

export interface Phase extends Identifiable {

}
export interface Animation extends Identifiable {
}
export interface BlocksStyle {
    [name: string]: BlockStyle;
}
export interface Style extends Identifiable {
    positioning: BlockPositioning[];
    blocks?: BlocksStyle;
}

export interface RectPositioning {
    x: NumberValue;
    y: NumberValue;
    width: NumberValue;
    height: NumberValue;
}

export interface CirclePositioning {
    cx: NumberValue;
    cy: NumberValue;
    radius: NumberValue;
}

export type Positioning = RectPositioning | CirclePositioning;
export interface BlockPositioning {
    blockId: IdValue;
    position: Positioning;
}

export interface Architecture {
    blocks: Block[];
    phases: Phase[];
    animations: Animation[]
    style?: Style | null;
}
