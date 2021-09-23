import { SelectedProperties } from "../types";

export function isPhaseSelected(selected: SelectedProperties) {
    return selected.properties.prop === "phases";
}

export function getPhaseIndex(selected: SelectedProperties) {
    return selected.properties.child?.index;
}
