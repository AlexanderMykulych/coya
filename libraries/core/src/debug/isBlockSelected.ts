import { SelectedProperties } from "../types";

export function isBlockSelected(selected: SelectedProperties) {
    return selected.properties?.[0]?.name === "blocks";
}

export function getSelectedBlockId(selected: SelectedProperties) {
    return selected.properties?.[1]?.name;
}