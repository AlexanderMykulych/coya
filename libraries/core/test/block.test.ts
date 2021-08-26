import { BlockGroupDescriptionsToBlock } from "../src/Parser";


describe("create architecture description", () => {
    it("result not null", () => {
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
        expect(result).toHaveLength(4);
        expect(result.some(x => x.id === "clients")).toBe(true);
        expect(result.some(x => x.id === "mobile")).toBe(true);
        expect(result.some(x => x.id === "web")).toBe(true);
        expect(result.some(x => x.id === "Desktop")).toBe(true);
    });
    it("debug", () => {
        expect(BlockGroupDescriptionsToBlock({
            clients: {
                mobile: "Mobile client",
                web: {
                    "label": "Controller (Web client)"
                },
                Desktop: {
                    "label": "Desktop client"
                }
            }
        })).not.toBeNull();
    })
});