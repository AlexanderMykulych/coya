
export interface FileInfo {
    name: string;
    path: string;
    isExternalLib: boolean;
}
export interface IndexItem extends Partial<FileInfo> {
    children: string[];
}
export interface Index {
    [key: string]: IndexItem;
}
