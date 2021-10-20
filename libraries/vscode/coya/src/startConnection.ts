import { WebSocketServer } from "ws";
import * as vscode from "vscode";
import state from "./state";
import { watch } from "@vue-reactivity/watch";
import { IncomingMessage } from "http";
import { DebugMessage, MessageCommand } from "coya-core";

export function startConnection() {
    const wss = new WebSocketServer({ port: 5001 });

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
        
        socket.addEventListener('message', event => {
            const message = JSON.parse(event.data) as DebugMessage;
            if (message.command === MessageCommand.Save && message.id) {
                state.changeFile(message.id, message.data);
            }
        });
      
    });
    wss.on("close", () => {
        vscode.window.showInformationMessage("Coya client disconnected!");
    });
}
