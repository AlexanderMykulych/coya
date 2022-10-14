import { FsTree, TrackStage } from 'coya-ts-analyzer/browser';
import { isNullOrUndefined } from 'coya-util';
import type { TreemapSeriesOption } from 'echarts';

const { fsTree, trackedFiles } = useActiveSession()
export function useActiveSessionFSTreeMap() {

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
          },
          data: prepareData(fsTree.state.value?.children),
        }
      ]
    } : null
  })

  return {
    options,
    fsTree,
    trackedFiles,
  }
}

type TreeMapFsTreeItem = FsTree & {
  itemStyle: TreemapSeriesOption['itemStyle']
}

type ProcessingStage = TrackStage | 'processing'

function prepareData(items: FsTree[] | undefined): TreeMapFsTreeItem[] | undefined {
  if (isNullOrUndefined(items)) {
    return items
  }

  const walker = (item: FsTree) => {
    const childs = item.children
    if (childs.length > 0) {

      const childsStages = {
        isError: false,
        isStart: false,
        isFinish: false,
        isUndef: false,
      }
      item.children.forEach(x => {
        const childStage = walker(x)

        if (childStage === TrackStage.Error) {
          childsStages.isError = true
        }
        if (childStage === TrackStage.Finish) {
          childsStages.isFinish = true
        }
        if (childStage === TrackStage.Start) {
          childsStages.isStart = true
        }
        if (isNullOrUndefined(childStage)) {
          childsStages.isUndef = true
        }
      })

      const childsStage: ProcessingStage | undefined =
        childsStages.isError
          ? TrackStage.Error
          : childsStages.isStart
            ? TrackStage.Start
            : childsStages.isUndef && childsStages.isFinish
            ? 'processing'
            : childsStages.isUndef
              ? undefined
              : TrackStage.Finish
      
      // @ts-ignore
      item['itemStyle'] = getItemStyle(childsStage)

      return childsStage
    } else {
      const fileStart = trackedFiles.value.find(x => x.file === item.path && x.stage === TrackStage.Start)
      const fileFinish = trackedFiles.value.find(x => x.file === item.path && x.stage === TrackStage.Finish)
      const fileError = trackedFiles.value.find(x => x.file === item.path && x.stage === TrackStage.Error)

      let stage = (fileError ?? fileFinish ?? fileStart)?.stage
  
      // @ts-ignore
      item['itemStyle'] = getItemStyle(stage)

      return stage
    }
  }

  items.forEach(walker)

  return items as TreeMapFsTreeItem[]
}

function getItemStyle(stage: ProcessingStage | undefined): TreemapSeriesOption['itemStyle'] {
  return {
    borderColor: '#155dd1',
    color: getColorByStage(stage),
    borderWidth: 0.5,
    gapWidth: 1
  }
}

function getColorByStage(stage: ProcessingStage | undefined): string {
  return stage === TrackStage.Finish
    ? 'green'
    : stage === TrackStage.Error
      ? 'red'
      : stage === TrackStage.Start
      ? 'orange'
      : stage === 'processing'
        ? 'gray'
        : '#4c7ecf'
}