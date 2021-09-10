import { Ref, ref, computed } from "@vue/reactivity";
import { FormulaValue } from "../descriptionTypes";
import { isFormulaValue } from "../typeGuards";
import { BlockPositioning } from "../types";
import { getFormulaValueFuncContext } from "./getFormulaValueFuncContext";

export function getFormulaValue(val: number | FormulaValue | undefined, positioning: Ref<BlockPositioning[]>): Ref<number> {
    if (typeof val === "number") {
        return ref(val);
    }
    if (isFormulaValue(val)) {
        let formula = typeof val === "string" ? val : val.formula;
        return computed(() => {
            const context = getFormulaValueFuncContext(positioning);
            const fn = Function(`"use strict";return (function(${context.blockNamesAsFuncParams}){return ${formula};})`)();
            return fn.apply(null, context.blocksValues) || 0;
        });
    }
    return ref(0);
}
