import { phaseDescriptionToArchitecturePhase } from "../src/phase/phaseDescriptionToArchitecturePhase";

describe("Phases", () => {
    it("phases count correct", () => {
        expect(phaseDescriptionToArchitecturePhase({
            connect: "a->b"
        })).toHaveLength(1);
    });
});