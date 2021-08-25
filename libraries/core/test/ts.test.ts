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
        expect(result.length).toEqual(4);
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