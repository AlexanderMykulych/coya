import { ArchitectureDescription } from "@coya/core/dist/descriptionTypes";
import smartphone from './smartphone.svg?raw';

export default <ArchitectureDescription>{
    "blocks": {
        "mobile": "Mobile client",
        "web": {
            "label": "Controller (Web client)"
        },
    },
    phases: {
        "connect": "mobile->web"
    },
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
            svgTag: "circle"
        },
        "mobile": {
            svg: smartphone,
            css: {
                cursor: "grab"
            }
        }
    }
}