import type { Ref } from 'vue';
import type { DebugAction, DebugSetting, LineDebugAction } from './debugTypes';
import type {
    ActionSetting, ArchitectureDescription, BlockElementDescription,
    BlockGroupDescriptions, BlockStyle,
    BlockStyleActionSetting, EnterSetting,
    FormulaValue, GlobalDebugSetting,
    LineBlockElementDescription, StyleCss, TransformSetting,
    ViewBoxSetting,
} from './descriptionTypes';
import type { AddNewBlockActionSetting, ChangeBlockPositionActionSetting, ChangeLabelActionSetting, ConnectActionSetting, HideBlocksActionSetting, HighlightActionSetting } from '.';

export type NumberValue = number | Ref<number>;
export type StringValue = string | Ref<string>;

type IdValue = string;
export interface Identifiable {
    id: IdValue
}
export interface BlockElement extends Identifiable {
    label: StringValue
    parentId?: IdValue
    enter: EnterSetting
    debug?: DebugSetting
}

export type ExcludeProp<T, U> = {
    [Property in keyof T as Exclude<Property, U>]: T[Property]
};
export interface LineBlockElement extends ExcludeProp<LineBlockElementDescription, 'label'>, Identifiable {
    label: StringValue
}

export interface ParentBlockElement extends BlockElement {
    children: Block[]
}

export type ContainerBlock = BlockElement | ParentBlockElement;
export type Block = ContainerBlock | LineBlockElement;

export type ActionExecutor = (architecture: Architecture, actionSetting: Action) => Architecture;
export enum ActionType {
    Connect = 'connect',
    AddNewBlock = 'newBlock',
    ChangePosition = 'changePosition',
    ChangeLabel = 'changeLabel',
    Highlight = 'highlight',
    RemoveHighlight = 'removeHighlight',
    HideBlock = 'hide',
    ChangeBlockStyle = 'changeBlockStyle',
    Show = 'show',
}
export interface BaseAction<TActionType extends ActionType, TActionValue extends ActionSetting> {
    name: TActionType
    value: TActionValue
}
export interface AddNewBlockAction extends BaseAction<ActionType.AddNewBlock, AddNewBlockActionSetting> {}

export interface ChangeBlockStyleAction extends BaseAction<ActionType.ChangeBlockStyle, BlockStyleActionSetting> {}
export interface ChangeLableAction extends BaseAction<ActionType.ChangeLabel, ChangeLabelActionSetting> {}
export interface ChangeBlockPositionAction extends BaseAction<ActionType.ChangePosition, ChangeBlockPositionActionSetting> {}
export interface ConnectAction extends BaseAction<ActionType.Connect, ConnectActionSetting> {}
export interface HideBlockAction extends BaseAction<ActionType.HideBlock, HideBlocksActionSetting> {}
export interface HighlightAction extends BaseAction<ActionType.Highlight, HighlightActionSetting> {}
export interface RemoveHighlightAction extends BaseAction<ActionType.RemoveHighlight, HideBlocksActionSetting> {}
export type Action =
    | AddNewBlockAction
    | ChangeLableAction
    | ChangeBlockPositionAction
    | ConnectAction
    | HideBlockAction
    | HighlightAction
    | ChangeBlockStyleAction
    | RemoveHighlightAction;
export interface Phase {
    dependsOnPhaseId: IdValue | null
    action: Action
}
export type Phases = Phase[];
export interface Animation extends Identifiable {
}
export type BlocksStyle = Record<string, BlockStyle>;
export interface Style extends Identifiable {
    positioning: BlockPositioning[]
    blocks?: BlocksStyle
    debug?: GlobalDebugSetting
    css?: StyleCss
}
export interface PointPosition {
    x: NumberValue
    y: NumberValue
}
export interface RectPositioning {
    x: NumberValue
    y: NumberValue
    w: NumberValue
    h: NumberValue
    top: PointPosition
    bottom: PointPosition
    right: PointPosition
    left: PointPosition
}

export interface CirclePositioning {
    cx: NumberValue
    cy: NumberValue
    radius: NumberValue
}
export interface LinePositioning {
    x1: NumberValue
    y1: NumberValue
    x2: NumberValue
    y2: NumberValue
    meta?: any
}

export type Positioning = RectPositioning | CirclePositioning | LinePositioning;
export interface BlockPositioning {
    blockId: IdValue
    position: Positioning
}

export interface ArchitectureData {
    blocks: Block[]
    style?: Style | null

}
export interface Architecture extends RefsType<ArchitectureData> {
    name: string
    phases: PhaseId[]
    currentPhase: Ref<PhaseId> | null
    next: () => PhaseId
    back: () => PhaseId
    debugSelect: (select: SelectedProperties) => void
    toPhase: (phase: number | null) => void
    debugState?: Ref<DebugStateContainer | undefined>
}
export type RefsType<T> = {
    [P in keyof T]?: Ref<T[P]>;
};
export interface TransitionalArchitecture extends ArchitectureDescription {
}

export type PhaseId = number | null | undefined;
export interface CurrentPhaseInfo {
    current: PhaseId
}

export enum ChangeType {
    AddNewBlock = 0,
    ChangeStyle = 1,
    RemoveBlock = 2,
    ChangePosition = 3,
}
export interface AddBlockChangeSetting {
    blockSettings: BlockGroupDescriptions | BlockElementDescription | null
    newBlockId: string
}
export interface ChangeBlockStyleSetting {
    blockId: string
    newStyle: Partial<BlockStyle>
}
export interface ChangeBlockLabelSetting {
    blockId: string
    label: string
}
export interface RemoveBlocksSetting {

}
export type ChangeSetting = AddBlockChangeSetting | ChangeBlockStyleSetting | ChangeBlockLabelSetting | RemoveBlocksSetting;

export enum ChangeOwnerType {
    Phase = 0,
    Editor = 1,
}
export interface BaseChangeOwner {
    type: ChangeOwnerType
}
export interface PhaseChangeOwner extends BaseChangeOwner {
    type: ChangeOwnerType.Phase
    phaseId: number
    actionIndex: number
}
export interface EditorChangeOwner extends BaseChangeOwner {
    type: ChangeOwnerType.Editor
}
export type ChangeOwner = PhaseChangeOwner | EditorChangeOwner;
export interface BaseChange {
    type: ChangeType
    owner?: ChangeOwner
}
export interface AddBlockChange extends BaseChange {
    type: ChangeType.AddNewBlock
    setting: AddBlockChangeSetting
}
export interface ChangeBlockStyle extends BaseChange {
    type: ChangeType.ChangeStyle
    setting: ChangeBlockStyleSetting
}
export interface RemoveBlocks extends BaseChange {
    type: ChangeType.RemoveBlock
    setting: RemoveBlocksSetting
}
export interface ChangePosition extends BaseChange {
    type: ChangeType.ChangePosition
    setting: {
        blockId: string
        x: number | FormulaValue
        y: number | FormulaValue
        w: number | FormulaValue
        h: number | FormulaValue
    }
}
export type Change = AddBlockChange | ChangeBlockStyle | RemoveBlocks | ChangePosition;
export interface PhaseIndex {
    getNextPhaseById(current: PhaseId): PhaseIndexItem | undefined
    getPhaseById(current: PhaseId): PhaseIndexItem | undefined
    phases: PhaseId[]
    getPhaseIndex(phase?: number | string | null): number
    findPhaseIdBy: (func: (phaseIndex: PhaseIndexItem) => boolean) => PhaseId
}
export interface PhaseIndexItem {
    phaseId: number
    hasNext: boolean
    actions: PhaseIndexItemAction[]
}

export interface PhaseIndexItemAction {
    action: Action
    actionId: number
    actionIndex: number
}

export interface ActionExecutorContext {
    indexItem: PhaseIndexItem
    architecture: ArchitectureDescription
    phaseIndex: PhaseIndex
}

export interface FormulaSystemContext {
    viewBox: ViewBoxSetting
    fn: Record<string, any>
}
export interface FormulaValueFuncContext {
    blockNamesAsFuncParams: string
    blocksValues: any[]
}

export interface PropertiesConfig {
    name: string
    index: number
}
export interface SelectedProperties {
    properties: PropertiesConfig[]
    file: string
}

export enum MessageCommand {
    Select = 'select',
    Save = 'save',
}
export interface BaseDebugMessage {
    command: MessageCommand
}
export interface SelectDebugMessage extends BaseDebugMessage {
    command: MessageCommand.Select
    data: SelectedProperties
}
export interface SaveDebugMessage extends BaseDebugMessage {
    command: MessageCommand.Save
    data: ArchitectureDescription
    id?: string
}
export type DebugMessage = SelectDebugMessage | SaveDebugMessage;
export interface DebugStateContainer {
    selectedBlocks?: string[] | null
    lines?: LineDebugAction[]
}

export type ActionItemExecutor = (phaseId: number, action: Action, actionIndex: number) => Change[] | null;

export interface ActionItem {
    type: ActionType
    executor: ActionItemExecutor
    debugger?: (debugInfo: any) => DebugAction[]
    blockRenamer?: (actionSetting: any, oldVal: string, val: string) => void
}
export type ActionList = ActionItem[];

export interface ActionDebugInfo {
    action: string
    actionProperty: string
    actionValue: string
}

export interface DebugSelectContext {
    style: Ref<Style>
    blocks: Ref<Block[]>
    phaseIndex: PhaseIndex
    transformSetting: TransformSetting
}
export interface TransformationResult {
    architecture: Ref<Architecture>
    config: Ref<ArchitectureDescription>
}

export interface AssetConfig {
    create: (config: {
        name: string
        content: any
        ext: string
        mime?: string
    }) => Promise<string>
    load: (name: string) => Promise<Blob>
}
