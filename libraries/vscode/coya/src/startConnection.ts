import { Server } from "ws";
import * as vscode from "vscode";

export function startConnection() {
    const wss = new Server({ port: 5001 });

    wss.on('connection', function connection(ws: any) {
        vscode.window.showInformationMessage("Coya client connected!");
        ws.on('message', (message: string) => {
            console.log('received: %s', message);
        });

        ws.send('something');
    });
    wss.on("close", () => {
        vscode.window.showInformationMessage("Coya client disconnected!");
    });
}
