import { compile, serialize, stringify } from 'stylis';
import type { ArchitectureDescription } from '../descriptionTypes';

export function prepareCss(architectureDescription: ArchitectureDescription) {
    return architectureDescription.style?.css
        ? serialize(
            compile(`#${architectureDescription.name} {${architectureDescription.style?.css}}`),
            stringify,
        )
        : undefined;
}
