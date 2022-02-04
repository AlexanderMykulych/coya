import type { DebugMessage, SelectedProperties } from 'coya-core';
import { MessageCommand } from 'coya-core';
import { useDebug } from './state/useDebug';

let socket: WebSocket | null = null;
export function startSocketClient() {
    socket = new WebSocket('ws://localhost:5001');
    const { selectEvent } = useDebug();
    socket.addEventListener('message', (event) => {
        const message = JSON.parse(event.data) as DebugMessage;
        if (message.command === MessageCommand.Select)
            selectEvent(message.data as SelectedProperties);
    });
}
export function saveConfig(id: string | undefined, config: any) {
    if (socket) {
        socket.send(JSON.stringify(<DebugMessage>{
            command: MessageCommand.Save,
            data: {
                ...config,
                debugState: undefined,
            },
            id,
        }));
    }
}
