import type { ActionDebugInfo, SelectedProperties } from '../types';

export function isPhaseSelected(selected: SelectedProperties) {
    return selected.properties?.[0]?.name === 'phases';
}

export function getPhaseIndex(selected: SelectedProperties) {
    return selected.properties?.[1]?.index;
}

export function getActionInfo(selected: SelectedProperties): ActionDebugInfo {
    return {
        action: selected.properties?.[1]?.name,
        actionProperty: selected.properties?.[2]?.name as any,
        actionValue: selected.properties?.[3]?.name,
    };
}
