<script lang="ts" setup>
import type { TreemapSeriesOption } from 'echarts';

const { runSession, fsTree, activeStepName } = useActiveSession()

function getLevelOption(): TreemapSeriesOption['levels'] {
  return [
    {
      itemStyle: {
        borderColor: '#555',
        borderWidth: 4,
        gapWidth: 4
      }
    },
    {
      colorSaturation: [0.3, 0.6],
      itemStyle: {
        borderColorSaturation: 0.7,
        gapWidth: 2,
        borderWidth: 2
      },
    },
    {
      colorSaturation: [0.3, 0.5],
      itemStyle: {
        borderColorSaturation: 0.6,
        gapWidth: 1
      }
    },
    {
      colorSaturation: [0.3, 0.5]
    }
  ];
}

const options = computed(() => {
  return fsTree.isReady.value ? {
    title: {
      text: 'Project',
      left: 'center'
    },
    tooltip: {
      formatter: function (info) {
        var value = info.value;
        var treePathInfo = info.treePathInfo;
        var treePath = [];
        for (var i = 1; i < treePathInfo.length; i++) {
          treePath.push(treePathInfo[i].name);
        }
        return [
          '<div class="tooltip-title">' +
            treePath.join('') +
            '</div>',
          'Count: ' + value
        ].join('');
      }
    },
    series: [
      <TreemapSeriesOption>{
        name: '/',
        type: 'treemap',
        leafDepth: 3,
        visibleMin: 100,
        label: {
          show: true,
          formatter: '{b}'
        },
        moveOnMouseMove: true,
        moveOnMouseWheel: true,
        upperLabel: {
          show: true,
          height: 30,
          // backgroundColor: 'gray',
          // color: 'white',
        },
        itemStyle: {
          borderColor: '#fff'
        },
        levels: getLevelOption(),
        data: fsTree.state.value?.children,
      }
    ]
  } : null
})

</script>

<template>
  <div flex="~ col" h-full>
    <div flex>
      <v-btn btn @click="runSession">run</v-btn>
    </div>
    <div>
      {{activeStepName}}
    </div>
    <EChartQueryResult v-if="fsTree.isReady.value" :option="options" />
  </div>
</template>