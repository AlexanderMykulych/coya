import { ArchitectureDescription, PositioningSystem } from "@coya/core";
import smartphone from './smartphone.svg?raw';
import computer from './computer.svg?raw';

export default <ArchitectureDescription>{
    "blocks": {
        "mobile": "Mobile client"
    },
    phases: [
        {
            newBlock: {
                "web": {
                    label: "Web App 1"
                }
            }
        },
        {
            connect: {
                from: "mobile",
                to: "web",
                name: "line_mob_web",
                label: "Request 1"
            }
        },
        {
            connect: {
                from: "web",
                to: "mobile",
                name: "line_web_mob",
                label: "Response 1"
            }
        },
        {
            newBlock: {
                "web2": {
                    label: "Web App 2"
                }
            }
        },
        {
            connect: {
                from: "mobile",
                to: "web2",
                name: "line1",
                label: "Request 2"
            }
        },
        {
            changePosition: {
                "web": {
                    y: {
                        formula: "mobile.y"
                    },
                    x: {
                        formula: "mobile.x + 260"
                    }
                }
            }
        },
        {
            changePosition: {
                mobile: {
                    indentX: 20
                }
            }
        }
    ],
    style: {
        positioning: PositioningSystem.Grid,
        blocks: {
            img: {
                position: {
                    x: {
                        formula: "rect.x + 30"
                    },
                    y: {
                        formula: "rect.y"
                    },
                    w: {
                        formula: "rect.width"
                    },
                    h: {
                        formula: "rect.height"
                    }
                },
                svgUrl: "https://image.flaticon.com/icons/png/512/2972/2972316.png"
            },
            rect: {
                position: {
                    x: 4,
                    y: 2,
                    w: 1,
                    h: 1
                }
            },
            mobile: {
                svg: smartphone,
                css: {
                    cursor: "grab"
                },
                position: {
                    x: 2,
                    y: 4,
                    w: 3,
                    h: 1
                }
            },
            web: {
                css: {
                    backgroundColor: "aliceblue",
                    margin: "10px",
                    fill: "red",
                    r: 7,
                    cx: 15,
                    cy: 10,
                    strokeWidth: "3",
                    stroke: "black",
                    strokeOpacity: 0.2,
                    cursor: "grabbing"
                },
                svgUrl: "https://image.flaticon.com/icons/png/512/2972/2972316.png",
                position: {
                    x: {
                        formula: "mobile.x + 200"
                    },
                    y: {
                        formula: "mobile.y - mobile.height * 2"
                    },
                    w: 2,
                    h: 1
                }
            },
            "web2": {
                position: {
                    x: {
                        formula: "web.x + web.width / 2"
                    },
                    y: {
                        formula: "mobile.y + mobile.height * 2"
                    },
                    w: 2,
                    h: 1,
                    indentX: -5
                },
                svg: computer
            },
            "line_mob_web": {
                position: {
                    indentY: {
                        formula: "web.height / 3"
                    },
                }
            },
            "line_web_mob": {
                position: {
                    indentY: {
                        formula: "web.height / -3"
                    },
                }
            },
            "line1": {
                position: {
                    indentY1: {
                        formula: "mobile.height / 3"
                    },
                    indentX2: -10
                }
            }
        }
    }
}