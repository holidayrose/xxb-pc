exports.ids = [9];
exports.modules = {

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.7@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_@nuxt_components@2.1.8@@nuxt/components/dist/loader.js??ref--0-0!./node_modules/_vue-loader@15.9.7@vue-loader/lib??vue-loader-options!./components/echarts/index.vue?vue&type=template&id=832223fc&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"echarts"}},[_vm._ssrNode("<div id=\"myChart\" style=\"width: 100%;height: 500px\"></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/echarts/index.vue?vue&type=template&id=832223fc&

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.2.2@babel-loader/lib??ref--2-0!./node_modules/_@nuxt_components@2.1.8@@nuxt/components/dist/loader.js??ref--0-0!./node_modules/_vue-loader@15.9.7@vue-loader/lib??vue-loader-options!./components/echarts/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
/* harmony default export */ var echartsvue_type_script_lang_js_ = ({
  mounted() {
    this.echartsInit();
  },

  methods: {
    echartsInit() {
      // 找到容器
      let chartDom = document.getElementById('myChart');
      let myChart = this.$echarts.init(chartDom);
      let option;
      option = {
        xAxis: {
          name: '点评量',
          // 横坐标名称
          nameLocation: 'middle',
          // 名称位置
          nameTextStyle: {
            color: '#222',
            fontWeight: 'bold',
            fontSize: 18,
            align: 'center'
          },
          nameGap: 20,
          // 名称距离坐标的距离
          min: 0,
          // 横坐标最小值
          max: 20,
          // 横坐标最大值(该类别下有价值点评量数最大的厂商的总点评量*110%)
          splitNumber: 10,
          // 分割段数
          axisTick: {
            show: false // 是否显示刻度

          },
          axisLabel: {
            show: false // 是否显示刻度标签

          },
          splitLine: {
            lineStyle: {
              color: ['#aaa', '#ddd'] // 分割线颜色

            }
          }
        },
        yAxis: {
          name: '口碑值',
          // 横坐标名称
          nameLocation: 'middle',
          // 名称位置
          nameTextStyle: {
            color: '#222',
            fontWeight: 'bold',
            fontSize: 18,
            align: 'center'
          },
          nameGap: 20,
          splitNumber: 10,
          // 分割段数
          axisTick: {
            show: false // 是否显示刻度

          },
          axisLabel: {
            show: false // 是否显示刻度标签

          }
        },
        series: [{
          symbolSize: 20,
          data: [[5.0, 2.18]],
          type: 'scatter',
          symbol: 'image://http://xuanxingbao.com/images/xxb_mark.png'
        }, {
          symbolSize: 20,
          data: [[10.0, 8.04]],
          type: 'scatter',
          symbol: 'image://http://xuanxingbao.com/images/xxb_mark.png'
        }]
      };
      option && myChart.setOption(option);
    }

  }
});
// CONCATENATED MODULE: ./components/echarts/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_echartsvue_type_script_lang_js_ = (echartsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/_vue-loader@15.9.7@vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14);

// CONCATENATED MODULE: ./components/echarts/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_echartsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "7d50533a"
  
)

/* harmony default export */ var echarts = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=echarts.js.map