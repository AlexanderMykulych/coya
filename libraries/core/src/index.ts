import {transformDescriptionToArchitecture, transformToArchitecture} from "./Parser";
import { startPhases } from "./phase/startPhases";
export * from "./typeGuards";
export * from "./types";
export * from "./descriptionTypes";
export * from "./phase/makeChange";
export * from "./phase/executeActions";
export * from "./phase/actionExecutors";
export * from "./positioning/g6/positioning";
export {
    transformDescriptionToArchitecture,
    transformToArchitecture,
    startPhases
} 
