declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare interface Window {
  coyaConfig: any
}

declare module 'find-free-port' {
  type FP = (from?: number, to?: number) => Promise<[number]>
  const fp: FP
  export default fp
}