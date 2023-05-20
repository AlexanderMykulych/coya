import { ArchitectureDescription, PositioningSystem } from "coya-core";

export default <ArchitectureDescription>{
    name: "testing",
    "blocks": {},
    phases: [],
    style: {
        positioning: PositioningSystem.Grid,
        debug: {
            enable: false
        },
        css: `
            font-size: 0.5em;
            .numb {
                font-size: 30px;
                color: white;
                display: block;
                background: black;
                position: absolute;
                top: 0;
                width: 100%;
            }
        `,
        blocks: {}
    }
}