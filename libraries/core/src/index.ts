import {transformDescriptionToArchitecture, transformToArchitecture} from "./Parser";
import { startPhases } from "./phase/startPhases";
export * from "./typeGuards";
export * from "./types";
export * from "./descriptionTypes";
export * from "./phase/makeChange";

export {
    transformDescriptionToArchitecture,
    transformToArchitecture,
    startPhases
} 

export const sum = (a: number, b: number) => {
    return a + b;
};
