import { Server } from "ws";
import * as vscode from "vscode";
import state from "./state";
import { watch } from "@vue-reactivity/watch";
import { IncomingMessage } from "http";
import { DebugMessage } from "coya-core";

export function startConnection() {
    const wss = new Server({ port: 5001 });

    wss.on('connection', (socket: WebSocket, request: IncomingMessage) => {
        vscode.window.showInformationMessage("Coya client connected!");
        state.connectedCount++;
        watch(() => state.selectedProperties, data => {
            socket.send(
                JSON.stringify(<DebugMessage>{
                    command: "select",
                    data
                })
            );
        }, {
            deep: true
        });
        wss.on('message', (message: string) => {
            console.log('received: %s', message);
        });
    });
    wss.on("close", () => {
        vscode.window.showInformationMessage("Coya client disconnected!");
    });
}
