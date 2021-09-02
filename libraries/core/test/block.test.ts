import { BlockGroupDescriptionsToBlock } from "../src/Parser";


describe("create architecture description", () => {
    it("debug", () => {
        const result = BlockGroupDescriptionsToBlock({
            clients: {
                mobile: "Mobile client",
                web: {
                    "label": "Controller (Web client)"
                },
                Desktop: {
                    "label": "Desktop client"
                }
            }
        });
        expect(result).toHaveLength(5);
        expect(result.some(x => x.id === "main")).toBe(true);
        expect(result.some(x => x.id === "clients")).toBe(true);
        expect(result.some(x => x.id === "mobile")).toBe(true);
        expect(result.some(x => x.id === "web")).toBe(true);
        expect(result.some(x => x.id === "Desktop")).toBe(true);
    });
});