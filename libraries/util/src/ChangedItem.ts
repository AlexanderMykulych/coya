export interface ChangedItem {
    attr: string
    fullPath: string
    parents?: string[]
    oldVal: any
    val: any
}
