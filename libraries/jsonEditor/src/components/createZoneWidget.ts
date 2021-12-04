import * as monaco from 'monaco-editor';
import { watch } from 'vue';
import { WidgetChangeCallback, WidgetConfig } from './WidgetConfig';
import { createVueDomElement } from './createVueDomElement';

export function createZoneWidget(editor: monaco.editor.IStandaloneCodeEditor, widgetConfig: WidgetConfig, onValueChange: WidgetChangeCallback) {
    editor.changeViewZones(changeAccessor => {
        var domNode = document.createElement('div');
        const pos = reactive({
            top: 100,
            height: 0
        });
        changeAccessor.addZone({
            afterLineNumber: widgetConfig.position.lineNumber,
            afterColumn: 2,
            heightInLines: 1.5,
            domNode,
            suppressMouseDown: false,
            onDomNodeTop: (top) => pos.top = top,
            onComputedHeight: (height) => pos.height = height,
        });
        var dom = createVueDomElement(widgetConfig, onValueChange);

        watch(() => pos, (val) => {
            dom.style.top = `${val.top}px`;
            dom.style.height = `${val.height}px`;
            const overlayLeft = editor.getDomNode()?.querySelector(".margin")?.clientWidth;
            if (overlayLeft) {
                dom.style.left = `${overlayLeft}px`;
            }
        }, { deep: true });
        const initConfig = {
            getId() {
                return widgetConfig.id;
            },
            getDomNode() {
                return dom;
            },
            getPosition() {
                return null;
            },
        };
        editor.addOverlayWidget(initConfig);
    });
}
