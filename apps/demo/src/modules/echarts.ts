import ECharts from 'vue-echarts'
import { use } from "echarts/core"
import type { UserModule } from '~/types'
import {
    CanvasRenderer
} from 'echarts/renderers'
import {
    BarChart,
    PieChart,
    GaugeChart,
} from 'echarts/charts'
import {
    GridComponent,
    TooltipComponent,
    TitleComponent,
    LegendComponent,
} from 'echarts/components'

use([
    CanvasRenderer,
    BarChart,
    GridComponent,
    TooltipComponent,
    TitleComponent,
    LegendComponent,
    PieChart,
    GaugeChart,
]);

export const install: UserModule = ({ app }) => {
    app.component('v-chart', ECharts);
}
