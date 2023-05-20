import type { TsJsPlugin } from "./types";

export function definePlugin<T>(plugin: TsJsPlugin<T>): TsJsPlugin<T> {
  return plugin
}
