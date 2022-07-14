
import { createHotContext as __vite__createHotContext } from "/Users/alexandermykulych/Dev/coya/libraries/code-analyzers/ts-analyzer/test/analysis/cases/04_vue/@vite/client";import.meta.hot = __vite__createHotContext("/Users/alexandermykulych/Dev/coya/libraries/code-analyzers/ts-analyzer/test/analysis/cases/04_vue/cmp.vue");import { defineComponent as _defineComponent } from "/Users/alexandermykulych/Dev/coya/libraries/code-analyzers/ts-analyzer/test/analysis/cases/04_vue/node_modules/.pnpm/vue@3.2.37/node_modules/vue/dist/vue.runtime.esm-bundler.js";
import { ref } from "/Users/alexandermykulych/Dev/coya/libraries/code-analyzers/ts-analyzer/test/analysis/cases/04_vue/node_modules/.pnpm/vue@3.2.37/node_modules/vue/dist/vue.runtime.esm-bundler.js";
import { utilFn } from "/Users/alexandermykulych/Dev/coya/libraries/code-analyzers/ts-analyzer/test/analysis/cases/04_vue/utils.ts";
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "cmp",
  setup(__props, { expose }) {
    expose();
    const count = ref(utilFn(1, 2));
    const __returned__ = { count };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
import { toDisplayString as _toDisplayString, openBlock as _openBlock, createElementBlock as _createElementBlock } from "/Users/alexandermykulych/Dev/coya/libraries/code-analyzers/ts-analyzer/test/analysis/cases/04_vue/node_modules/.pnpm/vue@3.2.37/node_modules/vue/dist/vue.runtime.esm-bundler.js";
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createElementBlock("div", null, _toDisplayString($setup.count), 1);
}
_sfc_main.__hmrId = "48a25428";
typeof __VUE_HMR_RUNTIME__ !== "undefined" && __VUE_HMR_RUNTIME__.createRecord(_sfc_main.__hmrId, _sfc_main);
import.meta.hot.accept(({ default: updated, _rerender_only }) => {
  if (_rerender_only) {
    __VUE_HMR_RUNTIME__.rerender(updated.__hmrId, updated.render);
  } else {
    __VUE_HMR_RUNTIME__.reload(updated.__hmrId, updated);
  }
});
import _export_sfc from "/Users/alexandermykulych/Dev/coya/libraries/code-analyzers/ts-analyzer/test/analysis/cases/04_vue/@id/plugin-vue:export-helper";
export default /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/alexandermykulych/Dev/coya/libraries/code-analyzers/ts-analyzer/test/analysis/cases/04_vue/cmp.vue"]]);