import { DebugMessage, SelectedProperties, MessageCommand } from "@coya/core";
import { useDebug } from "./state/useDebug";

export function startSocketClient() {
    const socket = new WebSocket('ws://localhost:5001');
    const { selectEvent } = useDebug();
    socket.addEventListener('message', (event) => {
        const message = JSON.parse(event.data) as DebugMessage;
        if (message.command === MessageCommand.Select) {
            selectEvent(message.data as SelectedProperties);
        }
        console.log(message.command, message.data);
    });
}
