import type parse from 'json-to-ast';
import type * as monaco from 'monaco-editor';

export interface JsonAstPosition {
    line: number
    column: number
    offset: number
}
export interface JsonAstRow {
    path: string
    attr: string
    value: string
    start: JsonAstPosition
    end: JsonAstPosition
    type: 'Literal' | 'Object'
}
export interface AstAnalizingResult {
    ast: parse.ValueNode
    rows: JsonAstRow[]
}
export interface IPosition {
    lineNumber: number
    column: number
}
export interface WidgetConfig {
    position: IPosition
    id: string
    index: number
    path: string
    row?: JsonAstRow
}
export type WidgetChangeCallback = (data: { value: any }) => void;
export interface WidgetFilterSuccessConfig {
    heightInLines: number
}
export type WidgetFilter = (row: JsonAstRow) => boolean | WidgetFilterSuccessConfig;
export interface WidgetFilterConfig {
    activateDefaultWidget?: boolean
    widgetFilter?: WidgetFilter
}
export interface ConfigureEditorOption {
    editor: monaco.editor.IStandaloneCodeEditor
    widgetConfig?: WidgetFilterConfig
}
