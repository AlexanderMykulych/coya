import type { AnalysisContextStore } from "../analysisContextType";


export function createStore(initData?: Record<string, any>): AnalysisContextStore {
  const store: Record<string | number | symbol, any> = {
    ...initData,
  };

  return {
    get(key, defValue?) {
      return store[key] as unknown as any ?? defValue;
    },
    set(key, val) {
      store[key] = val;
    },
    addToCollection(key, value) {
      if (!store[key]) {
        store[key] = [];
      }

      store[key].push(value);
    },
    data: store,
  };
}
