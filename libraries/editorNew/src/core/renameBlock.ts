import { ArchitectureDescription, actionExecutors } from "coya-core";
import { Ref } from "vue";

const blockPaths = [
    "test"
];
export function renameBlock(architecture: Ref<ArchitectureDescription>, oldVal: string, value: string) {
    Object.keys(architecture.value.blocks)
        .forEach(key => {
            if (key === oldVal) {
                architecture.value.blocks[key] = architecture.value.blocks[oldVal];
                delete architecture.value.blocks[oldVal];
            }
        });
    architecture.value
        .phases
        ?.forEach(phase => {
            Object
                .keys(phase)
                .forEach(actionName => {
                    const actionConfig = actionExecutors.find(x => x.type === actionName);
                    if (actionConfig?.blockRenamer) {
                        actionConfig.blockRenamer(phase[actionName], oldVal, value);
                    }
                })
        });
    
}
