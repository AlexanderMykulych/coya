import { ref, unref } from "@vue/reactivity";
import { DebugAction, DebugType } from "../debugTypes";
import { getFormulaValue } from "../positioning/getFormulaValue";
import { DebugSelectContext, SelectedProperties } from "../types";
import { getColor } from "./colors";

export function isStyleSelected(selected: SelectedProperties) {
    return selected.properties?.[0]?.name === "style";
}
export function isStyleBlockSelected(selected: SelectedProperties) {
    return selected.properties?.[1]?.name === "blocks";
}
export function getStyleBlockSelected(selected: SelectedProperties) {
    return selected.properties?.[2]?.name;
}
export function isStylePositionSelected(selected: SelectedProperties) {
    return selected.properties?.[3]?.name === "position";
}

export function getStylePositionDebugActions(selected: SelectedProperties, debugContext: DebugSelectContext): DebugAction[] {
    const posAttr = selected.properties?.[4]?.name;
    const posValue = selected.properties?.[5]?.name;
    if (!posAttr || !posValue) {
        return [];
    }
    const posNumber = Number(posValue);
    if (!isNaN(posNumber)) {
        return [{
            type: DebugType.Line,
            lineType: posAttr as any,
            value: posNumber,
            color: getColor()
        }];
    }
    if (posValue && debugContext.style.value?.positioning) {
        try {
            const result = getFormulaValue(posValue, ref(debugContext.style.value.positioning), debugContext.transformSetting);
            return [{
                type: DebugType.Line,
                lineType: posAttr as any,
                value: unref(result),
                color: getColor()
            }];
        } catch (e) {
            console.error(`debug. formula is: ${posValue}, ${e}`);
        }
    }
    return [];
}