import {transformDescriptionToArchitecture, transformToArchitecture} from "./Parser";
import { startPhases } from "./phase/startPhases";
import { autoPositioning } from "./positioning/autoPosition";
export * from "./typeGuards";
export * from "./types";
export * from "./descriptionTypes";

export {
    transformDescriptionToArchitecture,
    transformToArchitecture,
    autoPositioning,
    startPhases
} 

export const sum = (a: number, b: number) => {
    return a + b;
};
