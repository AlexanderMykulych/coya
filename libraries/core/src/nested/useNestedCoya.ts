import type { Ref } from 'vue';
import { computed, getCurrentInstance, getCurrentScope, inject, onScopeDispose, provide, ref } from 'vue';
import type { ArchitectureDescription, TransformContext } from '../descriptionTypes';
import type { Architecture } from '../types';

export interface CoyaParent {
    register: (config: CoyaConfig) => void
    unregister: (name: string) => void
    childrens: Ref<CoyaConfig[]>
    name: string
}
export interface CoyaConfig {
    name: string
    arch: Ref<Architecture>
    config: Ref<ArchitectureDescription>
    editor: Ref<any>
}

const coyaParentKey = 'coya-parent';
export const useNestedCoya = (coyaConfig: CoyaConfig, initRef?: Ref<CoyaConfig[]>) => {
    const childrens: Ref<CoyaConfig[]> = initRef ?? ref([]);
    provide<CoyaParent>(coyaParentKey, {
        register(config: CoyaConfig) {
            if (!childrens.value.some(x => x.name === config.name)) {
                childrens.value.push(config);
            }
        },
        unregister(name: string) {
            childrens.value = childrens.value.filter(x => x.name !== name);
        },
        childrens,
        name: coyaConfig.name,
    });

    const parent = inject<CoyaParent>(coyaParentKey);
    if (parent) {
        parent.register(coyaConfig);
    }

    onScopeDispose(() => {
        childrens.value = [];
        parent?.unregister(coyaConfig.name);
    });

    return childrens;
};
export const getNestedCoyaChildrenFromContext = (context: TransformContext, name: string) => {
    return context.nestedChildrens?.value?.find(x => x.name === name);
};
