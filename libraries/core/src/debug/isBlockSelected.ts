import { SelectedProperties } from "../types";

export function isBlockSelected(selected: SelectedProperties) {
    return selected.properties.prop === "blocks";
}

export function getSelectedBlockId(selected: SelectedProperties) {
    return selected.properties.child?.prop;
}