import { ArchitectureDescription } from "./descriptionTypes";
import { Architecture } from "./types";
import { transformDescriptionToArchitecture } from "./Parser";


export function parseJson(json: string): Architecture | null {
    const architectureDescription = JSON.parse(json) as ArchitectureDescription;

    if (!architectureDescription) {
        return null;
    }

    return transformDescriptionToArchitecture(architectureDescription);
}
