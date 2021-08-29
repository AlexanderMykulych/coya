import { ArchitectureDescription } from "@coya/core/dist/descriptionTypes";
import rect from './rectangle.svg?raw';
import blackboard from './blackboard.svg?raw';
import smartphone from './smartphone.svg?raw';
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
        "t2": null
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
            },
            svgTag: "circle"
        },
        "t2": {
            svgUrl: imgUrl.href
        },
        "mobile": {
            svg: smartphone
        },
        Desktop: {
            svg: blackboard
        }
    }
}