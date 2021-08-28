import {transformDescriptionToArchitecture, transformToArchitecture} from "./Parser";
import { autoPositioning } from "./positioning/autoPosition";
export * from "./typeGuards";
export * from "./types";

export {
    transformDescriptionToArchitecture,
    transformToArchitecture,
    autoPositioning
} 

export const sum = (a: number, b: number) => {
    return a + b;
};
