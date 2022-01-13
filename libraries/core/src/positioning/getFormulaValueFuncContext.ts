import { Ref, unref } from "vue";
import { TransformSetting } from "..";
import { BlockPositioning, FormulaValueFuncContext } from "../types";
import { findClosestPoints } from "./alg/findClosestPoints";
import { getBoxToBoxArrow } from "coya-arrow";


export function getFormulaValueFuncContext(blocksPositioning: Ref<BlockPositioning[]>,
    setting: TransformSetting): FormulaValueFuncContext {
    return {
        blockNamesAsFuncParams: `${blocksPositioning.value.map(x => x.blockId).join(", ")}, _`,
        blocksValues:
            [
                ...blocksPositioning.value.map(x => x.position),
                {
                    viewBox: {
                        x: unref(setting.viewBox.x),
                        y: unref(setting.viewBox.y),
                        w: unref(setting.viewBox.w),
                        h: unref(setting.viewBox.h),
                    },
                    fn: {
                        findClosestPoints,
                        getBoxToBoxArrow,
                    }
                }
            ]
    };
}
