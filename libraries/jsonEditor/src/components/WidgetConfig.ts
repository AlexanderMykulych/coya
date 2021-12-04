export interface JsonAstPosition {
    line: number;
    column: number;
    offset: number;
}
export interface JsonAstRow {
    path: string;
    attr: string;
    value: string;
    start: JsonAstPosition;
    end: JsonAstPosition;
}
export interface IPosition {
    lineNumber: number;
    column: number;
}
export interface WidgetConfig {
    position: IPosition;
    id: string;
    index: number;
    path: string;
    row: JsonAstRow;
}
export type WidgetChangeCallback = (data: {value: any}) => void;
