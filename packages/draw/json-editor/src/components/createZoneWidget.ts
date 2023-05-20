import type * as monaco from 'monaco-editor';
import { watch } from 'vue';
import type { WidgetConfig, WidgetFilterConfig } from './WidgetConfig';
import { createVueDomElement } from './createVueDomElement';

export function createZoneWidget(
    editor: monaco.editor.IStandaloneCodeEditor,
    widgetConfig: WidgetConfig,
    widgetFilterConfig: WidgetFilterConfig,
) {
    const dom = createVueDomElement();
    const domNode = document.createElement('div');
    const pos = reactive({
        top: 100,
        height: 0,
    });
    const showWidgetResult = computed(() => widgetFilterConfig.widgetFilter && !!widgetConfig.row && widgetFilterConfig.widgetFilter(widgetConfig.row));
    const showWidget = computed(() => showWidgetResult.value !== false && !!widgetConfig.row);
    const zoneHeight = computed(() => {
        if (typeof showWidgetResult.value !== 'boolean' && showWidgetResult.value?.heightInLines)
            return showWidgetResult.value?.heightInLines;

        return showWidgetResult.value === true ? 1 : 0;
    });
    const zoneConfig = computed(() => ({
        afterLineNumber: widgetConfig.position.lineNumber - 1,
        afterColumn: widgetConfig.row?.start.offset,
        heightInLines: zoneHeight.value,
        domNode,
        suppressMouseDown: false,
        onDomNodeTop: top => pos.top = top,
        onComputedHeight: height => pos.height = height,
    }));
    let zoneId: string | null = null;
    watch(() => pos, (val) => {
        dom.style.top = `${val.top}px`;
        dom.style.height = `${val.height}px`;
        const overlayLeft = editor.getDomNode()?.querySelector('.margin')?.clientWidth;
        if (overlayLeft)
            dom.style.left = `${overlayLeft}px`;
    }, { deep: true });
    watch(() => showWidget.value, (val) => {
        if (!val) {
            dom.style.display = 'none';
            editor.changeViewZones((changeAccessor) => {
                if (zoneId)
                    changeAccessor.removeZone(zoneId);
            });
        }
        else {
            dom.style.display = 'initial';
            editor.changeViewZones((changeAccessor) => {
                zoneId = changeAccessor.addZone(zoneConfig.value);
            });
        }
    }, { immediate: true });
    watch(() => zoneConfig.value, (value) => {
        editor.changeViewZones((changeAccessor) => {
            if (zoneId) {
                changeAccessor.removeZone(zoneId);
                zoneId = changeAccessor.addZone(value);
            }
        });
    }, {
        deep: true,
    });

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
