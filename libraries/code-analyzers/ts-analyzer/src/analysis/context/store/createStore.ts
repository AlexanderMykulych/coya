import type { AnalysisContextStore } from "../analysisContext";


export function createStore(parentStore?: AnalysisContextStore): AnalysisContextStore {
  const store: Record<string | number | symbol, any> = {
    ...parentStore?.data,
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
