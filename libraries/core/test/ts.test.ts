import "jest";
import { BlockGroupDescriptionsToBlock } from "../src/Parser";


describe("create architecture description", () => {
    it("result not null", () => {
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