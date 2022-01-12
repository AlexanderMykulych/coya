import { onScopeDispose } from "vue";

const useOnDblClick = (el: Element, onDblClick) => {
    el.addEventListener("dblclick", onDblClick);
    onScopeDispose(() => {
        el.removeEventListener("dblclick", onDblClick);
    });
};