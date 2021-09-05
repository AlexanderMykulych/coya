import { Ref } from "@vue/reactivity";
import { BlockPositioning, FormulaValueFuncContext } from "../types";

export function getFormulaValueFuncContext(blocksPositioning: Ref<BlockPositioning[]>): FormulaValueFuncContext {
    return {
        blockNamesAsFuncParams: blocksPositioning.value.map(x => x.blockId).join(", "),
        blocksValues: blocksPositioning.value.map(x => x.position)
    };
}
