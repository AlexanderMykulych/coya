import {ArchitectureDescription, PositioningSystem} from "@coya/core";
import smartphone from './smartphone.svg?raw';

export default <ArchitectureDescription>{
    positioning: PositioningSystem.Grid,
    "blocks": {
        "mobile": "Mobile client"
    },
    phases: [
        {
            newBlock: {
                "web": {
                    label: "Web App"
                }
            }
        },
        {
            connect: {
                from: "mobile",
                to: "web",
                name: "line_mob_web"
            }
        },
        {
            connect: {
                from: "web",
                to: "mobile",
                name: "line_web_mob"
            }
        },
        {
            newBlock: {
                "web2": {
                    label: "Web App"
                }
            }
        },
        {
            connect: {
                from: "mobile",
                to: "web2",
                name: "line1"
            }
        },
    ],
    style: {
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
            svgTag: "circle",
            position: {
                x: 17,
                y: 2,
                w: 2,
                h: 1
            }
        },
        "mobile": {
            svg: smartphone,
            css: {
                cursor: "grab"
            },
            position: {
                x: 2,
                y: 2,
                w: 3,
                h: 1
            }
        },
        "web2": {
            position: {
                x: 17,
                y: 4,
                w: 2,
                h: 1
            }
        },
        "line_mob_web": {
            position: {
                indentY: 3
            }
        },
        "line_web_mob": {
            position: {
                indentY: -3
            }
        },
    }
}