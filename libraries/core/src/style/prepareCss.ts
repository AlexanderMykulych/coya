import { ArchitectureDescription } from "../descriptionTypes";
import { compile, serialize, stringify } from 'stylis';

export function prepareCss(architectureDescription: ArchitectureDescription) {
    return architectureDescription.style?.css
        ? serialize(
            compile(`#${architectureDescription.name} {${architectureDescription.style?.css}}`),
            stringify
        )
        : undefined
}
