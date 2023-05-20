import type { SelectedProperties } from '../types';

export function isStyleSelected(selected: SelectedProperties) {
    return selected.properties?.[0]?.name === 'style';
}
export function isStyleBlockSelected(selected: SelectedProperties) {
    return selected.properties?.[1]?.name === 'blocks';
}
export function getStyleBlockSelected(selected: SelectedProperties) {
    return selected.properties?.[2]?.name;
}
export function isStylePositionSelected(selected: SelectedProperties) {
    return selected.properties?.[3]?.name === 'position';
}
