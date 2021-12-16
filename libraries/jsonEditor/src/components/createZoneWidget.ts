import * as monaco from 'monaco-editor';
import { watch } from 'vue';
import { WidgetChangeCallback, WidgetConfig, WidgetFilterConfig } from './WidgetConfig';
import { createVueDomElement } from './createVueDomElement';

export function createZoneWidget(
    editor: monaco.editor.IStandaloneCodeEditor,
    widgetConfig: WidgetConfig,
    widgetFilterConfig: WidgetFilterConfig,
) {
    var dom = createVueDomElement();
    var domNode = document.createElement('div');
    const pos = reactive({
        top: 100,
        height: 0
    });
    const showWidget = computed(() => widgetFilterConfig.widgetFilter && widgetFilterConfig.widgetFilter(widgetConfig.row));
    const zoneConfig = computed(() => ({
        afterLineNumber: widgetConfig.position.lineNumber - 1,
        afterColumn: widgetConfig.row.start.offset,
        heightInLines: showWidget.value ? 1 : 0,
        domNode,
        suppressMouseDown: false,
        onDomNodeTop: (top) => pos.top = top,
        onComputedHeight: (height) => pos.height = height,
    }));
    let zoneId: string | null = null;
    watch(() => pos, (val) => {
        dom.style.top = `${val.top}px`;
        dom.style.height = `${val.height}px`;
        const overlayLeft = editor.getDomNode()?.querySelector(".margin")?.clientWidth;
        if (overlayLeft) {
            dom.style.left = `${overlayLeft}px`;
        }
    }, { deep: true });
    watch(() => showWidget.value, val => {
        if (!val) {
            dom.style.display = "none";
            editor.changeViewZones(changeAccessor => {
                if (zoneId) {
                    changeAccessor.removeZone(zoneId);
                }
            });
        } else {
            dom.style.display = "initial";
            editor.changeViewZones(changeAccessor => {
                zoneId = changeAccessor.addZone(zoneConfig.value);
            });
        }
    }, { immediate: true });
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

    return dom;
}
