import { ArchitectureDescription } from "coya-core";
import { isNotNullOrUndefined } from "coya-util";
import { Ref, nextTick } from "vue";
import { replaceBlock } from "./replaceBlock";

export const renameBlock = (architecture: ArchitectureDescription, oldVal: string, value: string) => {
    const toDeleteActions: any[] = [];
    if (isNotNullOrUndefined(architecture.blocks[oldVal])) {
        architecture.blocks[value] = architecture.blocks[oldVal];
        toDeleteActions.push(() => delete architecture.blocks[oldVal]);
    }
    replaceBlock(architecture, oldVal, value);

    if (architecture.style?.blocks) {
        const blocksStyle = architecture.style.blocks;
        if (blocksStyle?.[oldVal]) {
            blocksStyle[value] = blocksStyle[oldVal];
            toDeleteActions.push(() => delete blocksStyle[oldVal]);
        }
    }
    toDeleteActions.forEach(x => x());
}

