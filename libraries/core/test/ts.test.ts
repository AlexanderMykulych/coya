import "jest";
import {architectureDescriptionToArchitecture} from "../src/Parser";


describe("create architecture description", () => {
    it("result not null", () => {
        expect(architectureDescriptionToArchitecture({
            blocks: {
                clients: {
                    mobile: "Mobile client",
                    web: {
                        "label": "Controller (Web client)"
                    },
                    Desktop: {
                        "label": "Desktop client"
                    }
                },
                Services: {
                    InventoryService: {},
                    ShippingService: {},
                    PaymentService: {}
                },
                External: {
                    OracleServer: {},
                    WebService: {},
                    ExternalResources: null
                },
                Facade: null,
                Title: null
            },
            phases: {
                "phase_1": [
                    {
                        "step-1.0": {
                            // action. What we have to do at this moment
                            "appear": "clients"
                        }
                    },
                    {
                        "step-1.0.1": {
                            "appear": [
                                "Services",
                                "External"
                            ]
                        }
                    },
                    {
                        "step-1.1": [
                            {
                                "connect": "mobile->InventoryService,ShippingService,PaymentService"
                            },
                            {
                                "connect": "web->InventoryService,ShippingService,PaymentService"
                            },
                            {
                                "connect": "Desktop->InventoryService,ShippingService,PaymentService"
                            },
                            {
                                "changeLabel": "Title->Each client communicate with each services"
                            }
                        ]
                    },
                    {
                        "step-1.2": [
                            {
                                "action": "connect",
                                "from": "PaymentService",
                                "to": [
                                    "InventoryService",
                                    "ShippingService"
                                ]
                            },
                            {
                                "action": "changeLabel",
                                "block": "Title",
                                "label": "Services are communicating between themselfs"
                            }
                        ]
                    },
                    {
                        "step-1.3": [
                            {
                                "connect": [
                                    "InventoryService->OracleServer",
                                    "ShippingService->WebService",
                                    "ExternalResources->ExternalResources"
                                ]
                            },
                            {
                                "changeLabel": "Title->Services communicate with external systems"
                            }
                        ]
                    },
                    {
                        "step-1.4": {
                            "step-1.4.1": {
                                "send": "Msg->mobile->InventoryService"
                            },
                            "step-1.4.2": {
                                "send": "Msg->Oracle"
                            }
                        }
                    }
                ]
            },
            "animation": {
                "step-1.1": {
                    "duration": 3,
                    "delay": 1,
                    "easy": "bounce.in"
                }
            },
            // how to visualize blocks
            "style": {
                "mobile": {
                    "icon": "mobile",
                    "shape": "circle"
                },
                "web": {
                    "shape": "rect"
                }
            }
        })).not.toBeNull();
    })
});