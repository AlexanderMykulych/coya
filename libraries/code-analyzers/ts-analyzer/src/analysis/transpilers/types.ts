import type { RawSourceMap } from "../types"

export type TranspilerResult = {
  code: string
  sourceMaps?: RawSourceMap
}
