import blackboard from './blackboard.svg?raw';
import smartphone from './smartphone.svg?raw';
import { ArchitectureDescription } from 'coya-core';
const imgUrl = new URL('./rectangle.svg', import.meta.url)

export default <ArchitectureDescription>{
    "blocks": {
        "clients": {
            "mobile": "Mobile client",
            "web": {
                "label": "Controller (Web client)"
            },
            "Desktop": {
                "label": "Desktop client"
            },
            "t1": null
        },
        "t2": null,
        "con": {
            type: "line",
            "label": "line",
            to: "t2",
            from: "mobile"
        }
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
        "t2": {
            svgUrl: imgUrl.href
        },
        "mobile": {
            svg: smartphone,
            css: {
                cursor: "grab"
            }
        },
        Desktop: {
            svg: blackboard
        }
    }
}