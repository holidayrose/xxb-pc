import Vue from 'vue'
/* import * as echarts from 'echarts/lib/echarts'
import { GridComponent } from 'echarts/components'
echarts.use([GridComponent]) */
const echarts = require('echarts/lib/echarts')
require('echarts/lib/component/grid')
require('echarts/lib/chart/scatter')
Vue.prototype.$echarts = echarts
