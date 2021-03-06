import { ArchitectureDescription } from "coya-core";
import { start } from "repl";

export default <ArchitectureDescription>{
    name: "vue-lifecycle",
    blocks: {
        start: {
            label: "app = Vue.createApp(options); app.mount(el)"
        }
    },
    phases: [{
        newBlock: {
            init: "init events & lifecycle"
        },
        connect: {
            from: "start",
            to: "init"
        }
    }, {
        newBlock: {
            initInject: "Init injections & reactivity"
        },
        connect: {
            from: "init",
            to: "initInject"
        }
    }, {
        newBlock: {
            beforeCreate: "beforeCreate"
        },
        connect: {
            from: "init",
            to: "beforeCreate",
            name: "line_init_beforeCreate"
        }
    }],
    style: {
        blocks: {
            _: {
                css: {
                    color: "white",
                    fill: "#3ab881",
                    fontSize: "0.1em"
                }
            },
            start: {
                position: {
                    x: "_.viewBox.w / 2 - _.viewBox.w / 20",
                    y: "0",
                    w: "_.viewBox.w / 10",
                    h: "_.viewBox.h / 10"
                },
                css: {
                    fill: "#3e6b94"
                }
            },
            init: {
                position: {
                    x: "start.x",
                    y: "start.y + start.h + 20",
                    w: "start.w",
                    h: "start.h"
                }
            },
            initInject: {
                position: {
                    x: "init.x",
                    y: "init.y + start.h + 20",
                    w: "init.w",
                    h: "init.h"
                }
            },
            beforeCreate: {
                position: {
                    x: "init.x - init.w - 40",
                    y: "init.y + init.h",
                    w: "init.w",
                    h: "initInject.y - init.y - init.h"
                },
                css: {
                    fill: "none",
                    color: "red",
                    stroke: "red"
                }
            },
            line_init_beforeCreate: {
                position: {
                    x1: "line_1.x1",
                    y1: "line_1.y1 + (line_1.y2 - line_1.y1) / 2",
                    y2: "line_1.y1 + (line_1.y2 - line_1.y1) / 2",
                },
                css: {
                    fill: "red",
                    stroke: "red",
                    "stroke-dasharray": 3
                }
            }
        }
    }
};