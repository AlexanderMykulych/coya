import { AnalysisContextStore } from "../analysisContext";


export function createStore(): AnalysisContextStore {
  const store: Record<string, any> = {};

  return {
    get<T>(key: string, defValue: T) {
      return store[key] as unknown as T ?? defValue;
    },
    set(key, val) {
      store[key] = val;
    },
    addToCollection(key, value) {
      if (!store[key]) {
        store[key] = [];
      }

      store[key].push(value);
    }
  };
}
