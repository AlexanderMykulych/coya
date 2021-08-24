
export interface Identifiable {
    id: string;
}
export interface BlockElement extends Identifiable {
    label: string;
}

export interface BlockGroup extends Identifiable {
    label: string;
    items: Block[];
}

export type Block = BlockElement | BlockGroup;

export interface Phase extends Identifiable {
}
export interface Animation extends Identifiable {
}
export interface Style extends Identifiable {
}

export interface Architecture {
    blocks: Block[];
    phases: Phase[];
    animations: Animation[]
    style: Style;
}
