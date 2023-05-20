import type { BarSeriesOption } from "echarts";
import type { QueryResultResolvedProps } from "..";
import type { BarSettings } from "./types";

export function useOptions(props: QueryResultResolvedProps<BarSettings>) {
  const rows = computed(() =>
    props.queryResult
      .value
      .records
      .map(record => ({
        label: record.get(record.keys[0]),
        value: record.get(record.keys[1]),
      }))
  )

  return computed<{ series: BarSeriesOption[] }>(() => ({
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    xAxis: {
      type: 'category',
      data: rows.value.map(x => x.label),
      axisTick: {
        alignWithLabel: true,
      },
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    yAxis: {
      type: 'value'
    },
    series: [{
      type: 'bar',
      data: rows.value.map(x => x.value.low)
    }]
  }))
}