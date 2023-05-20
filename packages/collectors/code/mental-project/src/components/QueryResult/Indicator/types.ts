export type Intervals = {
  label: string
  max: number
  color: string
}
export type IndicatorSettings = Partial<{
  label: string
  intervals: Intervals[]
  min: number
  max: number
}>
