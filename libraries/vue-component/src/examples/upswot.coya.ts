import { ArchitectureDescription, PositioningSystem } from "@coya/core";
import user from './assets/user.svg?raw';
import bank from './assets/bank.svg?raw';
import xero from './assets/xero.svg?raw';
import sage from './assets/sage.svg?raw';
import worker from './assets/worker.svg?raw';
import upswot_admin from './assets/upswot_admin.svg?raw';
import storage from './assets/storage.svg?raw';
const kafkaUrl = new URL('./assets/queue.png', import.meta.url)

export default <ArchitectureDescription>{
    name: "upswot",
    "blocks": {
        "client": {
            label: "SMB client"
        },
        text: {
            label: "Upswot Architecture"
        }
    },
    phases: [
        {
            changeLabel: {
                text: "<span class='numb'>1</span>SMB client is our enter point"
            }
        },
        {
            newBlock: {
                "bankSite": "Bank website"
            },
            changeLabel: {
                text: "<span class='numb'>2</span>He goes to bank web-site"
            }
        },
        {
            connect: {
                from: "client",
                to: "bankSite",
                label: "share data",
                name: "line_client_bankSite"
            },
            newBlock: {
                xeroIcon: "",
                sageIcon: ""
            },
            changeLabel: {
                text: "<span class='numb'>3</span>And start data sharing process"
            }
        },
        {
            newBlock: {
                upswotAdmin: "Upswot Admin"
            },
            connect: {
                from: "bankSite",
                to: "upswotAdmin",
                label: "need data sharing",
                name: "line_bank_admin"
            },
            changeLabel: {
                text: "<span class='numb'>4</span>This request goes to <b>Upswot.Admin<b/>"
            }
        },
        {
            newBlock: {
                upswotApi: "Upswot API"
            },
            connect: {
                from: "upswotAdmin",
                to: "upswotApi",
                label: "need data sharing",
                name: "line_admin_api"
            },
            changeLabel: {
                text: "<span class='numb'>5</span>Then request goes to <b>Upswot.API</b>"
            }
        },
        {
            newBlock: {
                xero: "",
                sage: ""
            },
            connect: [{
                from: "upswotApi",
                to: "xero",
                label: "GetData",
                name: "line_to_xero"
            }, {
                from: "upswotApi",
                to: "sage",
                label: "GetData",
                name: "line_to_sage"
                }],
            changeLabel: {
                text: "<span class='numb'>6</span>API send <br>GetData<br>request to client`s external systems"
            }
        },
        {
            connect: [{
                from: "xero",
                to: "upswotApi",
                label: "Data",
                name: "line_xero_api"
            }, {
                from: "sage",
                to: "upswotApi",
                label: "Data",
                name: "line_sage_api"
            }]
        },
        {
            newBlock: {
                storage: "File storage"
            },
            connect: {
                from: "upswotApi",
                to: "storage",
                label: "save data to storage",
                name: "line_api_storage"
            }
        },
        {
            newBlock: {
                kafka: "Kafka"
            },
            connect: {
                from: "upswotApi",
                to: "kafka",
                label: "signal",
                name: "line_signal"
            }
        }, {
            newBlock: {
                worker: "Worker"
            },
            connect: [{
                from: "worker",
                to: "kafka",
                label: "Process message",
                name: "line_worker_kafka"
            }, {
                from: "kafka",
                to: "worker",
                label: "test",
                name: "line_kafka_worker"
            }]
        },
        {
            newBlock: {
                upswotZone: "Upswot zone"
            },
            highlight: {
                blocks: ["upswotZone", "text"]
            }
        },
        {
            removeHighlight: null
        }
    ],
    style: {
        positioning: PositioningSystem.Grid,
        debug: {
            enable: false
        },
        css: `
            font-size: 20px;
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
        blocks: {
            text: {
                position: {
                    x: "_.viewBox.x",
                    y: "_.viewBox.y",
                    w: "_.viewBox.w / 4",
                    h: "_.viewBox.h"
                },
                css: {
                    fill: "#3a8a9b",
                    fontSize: "20px",
                    color: "white"
                }
            },
            client: {
                position: {
                    x: "text.x + text.width + 5",
                    y: "text.y + _.viewBox.h / 3 - (_.viewBox.h / 10)",
                    w: "_.viewBox.h / 10",
                    h: "_.viewBox.h / 10"
                },
                svg: user
            },
            bankSite: {
                position: {
                    x: "client.x + client.width + 100",
                    y: "client.y",
                    w: "client.width",
                    h: "client.height"
                },
                svg: bank
            },
            line_client_bankSite: {
                position: {
                    indentX1: 10,
                    indentX2: -10
                }
            },
            line_bank_admin: {
                position: {
                    indentX1: 10,
                    indentX2: -10
                }
            },
            line_admin_api: {
                position: {
                    indentX1: 10,
                    indentX2: -10
                }
            },
            line_to_xero: {
                position: {
                    indentX1: 10,
                    indentY1: -5,
                    indentX2: -10,
                    indentY2: 15
                }
            },
            line_to_sage: {
                position: {
                    indentX1: 10,
                    indentY1: 5,
                    indentX2: -10,
                    indentY2: -15
                }
            },
            line_xero_api: {
                position: {
                    indentX1: -10,
                    indentY1: 5,
                    indentX2: 10,
                    indentY2: -15
                }
            },
            line_sage_api: {
                position: {
                    indentX1: -10,
                    indentY1: -5,
                    indentX2: 10,
                    indentY2: 15
                }
            },
            line_api_storage: {
                position: {
                    indentX1: "upswotApi.width / 2",
                    indentY1: "upswotApi.height / 2",
                    x2: "storage.x + storage.width / 2",
                    y2: "storage.y - 5",
                }
            },
            line_signal: {
                position: {
                    indentX1: "upswotApi.width / 2 - 5",
                    indentY1: "upswotApi.height / 2",
                    x2: "kafka.x + kafka.width / 2 + 5",
                    y2: "kafka.y - 5",
                }
            },
            line_worker_kafka: {
                position: {
                    x1: "worker.x + worker.width / 2",
                    y1: "worker.y",
                    x2: "kafka.x + kafka.width / 2",
                    y2: "kafka.y + kafka.height + 5"
                }
            },
            line_kafka_worker: {
                position: {
                    x2: "worker.x + worker.width / 2 - 5",
                    y2: "worker.y",
                    x1: "kafka.x + kafka.width / 2 - 5",
                    y1: "kafka.y + kafka.height + 5"
                }
            },
            xeroIcon: {
                position: {
                    x: "line_client_bankSite.x1 + 20",
                    y: "line_client_bankSite.y1 - 25",
                    w: 1,
                    h: 0.8
                },
                svg: xero
            },
            sageIcon: {
                position: {
                    x: "xeroIcon.x + xeroIcon.width",
                    y: "xeroIcon.y",
                    w: "xeroIcon.width",
                    h: "xeroIcon.height"
                },
                svg: sage
            },
            upswotAdmin: {
                position: {
                    x: "bankSite.x + bankSite.width + 60",
                    y: "bankSite.y",
                    w: "client.width",
                    h: "client.height"
                },
                svg: upswot_admin
            },
            upswotApi: {
                position: {
                    x: "upswotAdmin.x + upswotAdmin.width + 60",
                    y: "upswotAdmin.y",
                    w: "client.width",
                    h: "client.height"
                },
                svg: upswot_admin
            },
            xero: {
                position: {
                    x: "upswotApi.x + upswotApi.width + 60",
                    y: "upswotApi.y - 50",
                    w: "client.width",
                    h: "client.height"
                },
                svg: xero
            },
            sage: {
                position: {
                    x: "upswotApi.x + upswotApi.width + 60",
                    y: "upswotApi.y + 50",
                    w: "client.width",
                    h: "client.height"
                },
                svg: sage
            },
            storage: {
                position: {
                    x: "upswotApi.x",
                    y: "upswotApi.y + upswotApi.height + 30",
                    w: "client.width",
                    h: "client.height"
                },
                svg: storage
            },
            kafka: {
                position: {
                    x: "storage.x - 60",
                    y: "storage.y",
                    w: "client.width",
                    h: "client.height"
                },
                svgUrl: kafkaUrl
            },
            worker: {
                position: {
                    x: "kafka.x + (storage.x - kafka.x) / 2",
                    y: "kafka.y + kafka.height + 40",
                    w: "client.width",
                    h: "client.height"
                },
                svg: worker
            },
            upswotZone: {
                position: {
                    x: "upswotAdmin.x - 10",
                    y: "10",
                    w: "upswotApi.x + upswotApi.width + 20 - upswotAdmin.x",
                    h: "worker.y + worker.height"
                },
                css: {
                    stroke: "red",
                    "stroke-dasharray": 3
                }
            }
        }
    }
}