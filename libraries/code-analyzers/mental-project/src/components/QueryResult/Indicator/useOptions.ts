import type { GaugeSeriesOption } from "echarts"
import type { QueryResultResolvedProps } from ".."
import type { IndicatorSettings } from "./types"

export function useOptions(props: QueryResultResolvedProps<IndicatorSettings>) {
  const firstRow = computed(() => props.queryResult.value.records?.[0])
  const val = computed(() => firstRow.value?.get(firstRow.value?.keys[0])?.low)
  const min = computed(() => props.settings?.min ?? 0)
  const max = computed(() => props.settings?.max ?? 300)
  const intervals = computed(() => props.settings?.intervals ?? [])

  const echartsIntervals = computed<[number, string][]>(() => [
    ...intervals.value.map<[number, string]>(x => [(x.max - min.value) / (max.value - min.value), x.color]),
    [1, 'gray'],
  ])

  return computed<{ series: GaugeSeriesOption[] }>(
    () => ({
      series: [
        {
          type: 'gauge',
          startAngle: 180,
          endAngle: 0,
          min: min.value,
          max: max.value,
          axisLine: {
            lineStyle: {
              width: 30,
              color: echartsIntervals.value,
            },
          },
          itemStyle: {
            color: '#58D9F9',
            shadowColor: 'rgba(0,138,255,0.45)',
            shadowBlur: 10,
            shadowOffsetX: 2,
            shadowOffsetY: 2
          },
          pointer: {
            itemStyle: {
              color: 'auto'
            }
          },
          axisTick: {
            splitNumber: 2,
            lineStyle: {
              width: 2,
              color: '#999'
            }
          },
          splitLine: {
            length: 12,
            lineStyle: {
              width: 3,
              color: '#999'
            }
          },
          axisLabel: {
            color: 'auto',
            distance: 40,
            fontSize: 20
          },
          detail: {
            valueAnimation: true,
            formatter: `{value} ${props.settings.label}`,
            color: 'auto'
          },
          data: [
            {
              value: val.value,
            },
          ],
        }
      ]
    })
  )
}