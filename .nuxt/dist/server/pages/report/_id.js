exports.ids = [41,7,9];
exports.modules = {

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.7@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_@nuxt_components@2.1.8@@nuxt/components/dist/loader.js??ref--0-0!./node_modules/_vue-loader@15.9.7@vue-loader/lib??vue-loader-options!./components/common/starComp/StarZoom.vue?vue&type=template&id=c9375fa6&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"star-wrap"}},[_vm._ssrNode("<div class=\"star-default\""+(_vm._ssrStyle(null,{ width: _vm.outWidth + 'px', height: _vm.outHeight + 'px' }, null))+"><div class=\"star-real\""+(_vm._ssrStyle(null,{ width: _vm.innerWidth + 'px', height: _vm.outHeight + 'px' }, null))+"></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/common/starComp/StarZoom.vue?vue&type=template&id=c9375fa6&

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.2.2@babel-loader/lib??ref--2-0!./node_modules/_@nuxt_components@2.1.8@@nuxt/components/dist/loader.js??ref--0-0!./node_modules/_vue-loader@15.9.7@vue-loader/lib??vue-loader-options!./components/common/starComp/StarZoom.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
/* harmony default export */ var StarZoomvue_type_script_lang_js_ = ({
  name: 'StarZoom',
  props: {
    outWidth: {
      type: Number,

      default() {
        return 0;
      }

    },
    outHeight: {
      type: Number,

      default() {
        return 0;
      }

    },
    decimal: {
      type: Number,

      default() {
        return 0;
      }

    }
  },
  computed: {
    innerWidth() {
      return this.decimal * this.outWidth;
    }

  }
});
// CONCATENATED MODULE: ./components/common/starComp/StarZoom.vue?vue&type=script&lang=js&
 /* harmony default export */ var starComp_StarZoomvue_type_script_lang_js_ = (StarZoomvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/_vue-loader@15.9.7@vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14);

// CONCATENATED MODULE: ./components/common/starComp/StarZoom.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  starComp_StarZoomvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "a765bd56"
  
)

/* harmony default export */ var StarZoom = __webpack_exports__["default"] = (component.exports);

/***/ }),

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

/***/ }),

/***/ 252:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.7@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_@nuxt_components@2.1.8@@nuxt/components/dist/loader.js??ref--0-0!./node_modules/_vue-loader@15.9.7@vue-loader/lib??vue-loader-options!./pages/report/_id.vue?vue&type=template&id=198d4850&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"main report"},[_vm._ssrNode("<h2 class=\"report-title pad-l-40\">\n    OA产品用户实名口碑报告——选型宝\n  </h2> "),_c('a-row',{staticClass:"g-wrapper",attrs:{"gutter":[32, 32]}},[_c('a-col',{attrs:{"span":"7"}},[_c('div',{staticClass:"panel"},[_c('a-menu',{staticStyle:{"border-right":"none"},attrs:{"default-selected-keys":['1'],"default-open-keys":['sub1'],"mode":"inline"}},[_c('a-menu-item',{key:"1"},[_c('a-icon',{attrs:{"type":"bank"}}),_vm._v("\n            厂商口碑比较\n          ")],1),_vm._v(" "),_c('a-menu-item',{key:"2"},[_c('a-icon',{attrs:{"type":"gold"}}),_vm._v("\n            产品口碑比较\n          ")],1),_vm._v(" "),_c('a-menu-item',{key:"3"},[_c('a-icon',{attrs:{"type":"highlight"}}),_vm._v("\n            算法说明\n          ")],1),_vm._v(" "),_c('a-menu-item',{key:"4"},[_c('a-icon',{attrs:{"type":"message"}}),_vm._v("\n            OA产品简介\n          ")],1),_vm._v(" "),_c('a-menu-item',{key:"5"},[_c('a-icon',{attrs:{"type":"tags"}}),_vm._v("\n            类别简介\n          ")],1),_vm._v(" "),_c('a-menu-item',{key:"6"},[_c('a-icon',{attrs:{"type":"appstore"}}),_vm._v("\n            常用功能\n          ")],1)],1)],1)]),_vm._v(" "),_c('a-col',{attrs:{"span":"17"}},[_c('div',{staticClass:"panel"},[_c('h2',{staticStyle:{"font-weight":"bold"}},[_vm._v("一、OA类厂商用户实名口碑象限")]),_vm._v(" "),_c('echart'),_vm._v(" "),_c('div',{staticClass:"paper"},[_c('h3',{staticClass:"title"},[_vm._v("\n            （一）选型宝的用户实名口碑象限是怎样生成的？\n          ")]),_vm._v(" "),_c('div',{staticClass:"cell"},[_c('p',[_vm._v("作为身经百战的IT老司机，您肯定见过太多“指数”、“排行”、“象限”")]),_vm._v(" "),_c('p',[_vm._v("您一定会好奇，选型宝的“口碑指数”，跟GARTNER的到底有什么不一样？")]),_vm._v(" "),_c('p',[_vm._v("概括来说，这是一个：")]),_vm._v(" "),_c('strong',[_vm._v("\n              ★完全由用户生产的口碑指数\n            ")]),_vm._v(" "),_c('p',[_vm._v("各产品、各厂商的口碑值，将完全根据用户的点评量、评分计算而出；一切由用户说了算。")]),_vm._v(" "),_c('strong',[_vm._v("\n              ★选型宝承诺“永远不卖排名”！\n            ")]),_vm._v(" "),_c('p',[_vm._v("我们郑重承诺，永远不卖产品、厂商的排名；不删除任何有价值的用户点评（垃圾点评和厂商刷的点评除外）。")])])]),_vm._v(" "),_c('div',{staticClass:"paper"},[_c('h3',{staticClass:"title"},[_vm._v("\n            （二）我们如何保证排名的公正、客观？\n          ")]),_vm._v(" "),_c('div',{staticClass:"cell"},[_c('strong',[_vm._v("\n              ★点评实名制，文责自负\n            ")]),_vm._v(" "),_c('p',[_vm._v("要求用户点评前，务必补全名片，做到文责自负，同时也为IT决策者构建一个实名制职业社交平台。")]),_vm._v(" "),_c('strong',[_vm._v("\n              ★对点评进行逐条审核，严格把关质量\n            ")]),_vm._v(" "),_c('p',[_vm._v("根据点评质量，把点评分为三类：有价值点评、无价值点评、疑似厂商刷点评。")]),_vm._v(" "),_c('p',[_vm._v("各产品、厂商的口碑指数，将不会统计判定为“无价值点评”或者“疑似厂商刷点评”中对该产品的评分。")])])]),_vm._v(" "),_c('div',{staticClass:"paper"},[_c('h3',{staticClass:"title"},[_vm._v("\n            （三）OA厂商口碑实时排名如下：\n          ")]),_vm._v(" "),_c('div',{staticClass:"cell"},[_c('p',[_vm._v("OA 类别下，我们一共收到了  267条点评，经过逐一审核，判定如下：")]),_vm._v(" "),_c('p',[_vm._v("有价值点评：234条")]),_vm._v(" "),_c('p',[_vm._v("无价值点评：23条")]),_vm._v(" "),_c('p',[_vm._v("疑似厂商点评：10条")]),_vm._v(" "),_c('p',[_vm._v("经过对234条有价值点评的综合计算，各厂商的口碑值如下：")]),_vm._v(" "),_c('h4',{staticClass:"title"},[_vm._v("\n              1、OA类厂商——热门厂商\n            ")]),_vm._v(" "),_c('table',{staticStyle:{"width":"100%"}},[_c('tbody',{staticClass:"table-body"},[_c('tr',{staticClass:"table-row table-title"},[_c('td',{staticClass:"table-cell"},[_vm._v("\n                    厂商简称\n                  ")]),_vm._v(" "),_c('td',{staticClass:"table-cell"},[_vm._v("\n                    有价值点评量\n                  ")]),_vm._v(" "),_c('td',{staticClass:"table-cell",attrs:{"colspan":"2"}},[_vm._v("\n                    口碑平均分\n                  ")])]),_vm._v(" "),_c('tr',{staticClass:"table-row"},[_c('td',{staticClass:"table-cell"},[_vm._v("\n                    泛微\n                  ")]),_vm._v(" "),_c('td',{staticClass:"table-cell"},[_vm._v("\n                    65条\n                  ")]),_vm._v(" "),_c('td',{staticClass:"table-cell"},[_vm._v("\n                    3.6分\n                  ")]),_vm._v(" "),_c('td',{staticClass:"table-cell"},[_c('Star',{attrs:{"out-width":80,"out-height":16,"decimal":0.8}})],1)])])]),_vm._v(" "),_c('h4',{staticClass:"title"},[_vm._v("\n              2、OA 类厂商——挑战者\n            ")]),_vm._v(" "),_c('table',{staticStyle:{"width":"100%"}},[_c('tbody',{staticClass:"table-body"},[_c('tr',{staticClass:"table-row table-title"},[_c('td',{staticClass:"table-cell"},[_vm._v("\n                    厂商简称\n                  ")]),_vm._v(" "),_c('td',{staticClass:"table-cell"},[_vm._v("\n                    有价值点评量\n                  ")]),_vm._v(" "),_c('td',{staticClass:"table-cell",attrs:{"colspan":"2"}},[_vm._v("\n                    口碑平均分\n                  ")])]),_vm._v(" "),_c('tr',{staticClass:"table-row"},[_c('td',{staticClass:"table-cell"},[_vm._v("\n                    泛微\n                  ")]),_vm._v(" "),_c('td',{staticClass:"table-cell"},[_vm._v("\n                    65条\n                  ")]),_vm._v(" "),_c('td',{staticClass:"table-cell"},[_vm._v("\n                    3.6分\n                  ")]),_vm._v(" "),_c('td',{staticClass:"table-cell"},[_c('Star',{attrs:{"out-width":80,"out-height":16,"decimal":0.8}})],1)])])]),_vm._v(" "),_c('h4',{staticClass:"title"},[_vm._v("\n              3、OA 类厂商——暂无点评的厂商\n            ")]),_vm._v(" "),_c('table',{staticStyle:{"width":"100%"}},[_c('tbody',{staticClass:"table-body"},[_c('tr',{staticClass:"table-row table-title"},[_c('td',{staticClass:"table-cell"},[_vm._v("\n                    泛微\n                  ")]),_vm._v(" "),_c('td',{staticClass:"table-cell"},[_vm._v("\n                    SAP\n                  ")]),_vm._v(" "),_c('td',{staticClass:"table-cell"},[_vm._v("\n                    IBM\n                  ")]),_vm._v(" "),_c('td',{staticClass:"table-cell"},[_vm._v("\n                    ORACLE\n                  ")])]),_vm._v(" "),_c('tr',{staticClass:"table-row"},[_c('td',{staticClass:"table-cell"},[_vm._v("\n                    DELL\n                  ")]),_vm._v(" "),_c('td',{staticClass:"table-cell"},[_vm._v("\n                    EMC\n                  ")]),_vm._v(" "),_c('td',{staticClass:"table-cell"}),_vm._v(" "),_c('td',{staticClass:"table-cell"})])])]),_vm._v(" "),_c('h4',{staticClass:"title"},[_vm._v("\n              4、相关概念解释：\n            ")]),_vm._v(" "),_c('div',[_c('div',[_vm._v("\n                （1）热门厂商：\n              ")]),_vm._v(" "),_c('p',[_vm._v("显示该类别下，有价值点评的点评总量不低于3条(大于等于），且按有价值点评的数量排名在前15位（含15位）的厂商。")]),_vm._v(" "),_c('div',[_vm._v("\n                （2）挑战者：\n              ")]),_vm._v(" "),_c('p',[_vm._v("显示该类别下，有价值点评的点评总量低于3条；或者不低于3条，但按有价值点评的数量排名在16位（含16位）以后的厂商")]),_vm._v(" "),_c('div',[_vm._v("\n                （3） 口碑指数：\n              ")]),_vm._v(" "),_c('p',[_vm._v("该厂商在该类别下所有产品的有价值点评的总体感受的总分/有价值点评的数量")])])])])],1)])],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/report/_id.vue?vue&type=template&id=198d4850&

// EXTERNAL MODULE: ./components/echarts/index.vue + 4 modules
var echarts = __webpack_require__(223);

// EXTERNAL MODULE: ./components/common/starComp/StarZoom.vue + 4 modules
var StarZoom = __webpack_require__(172);

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.2.2@babel-loader/lib??ref--2-0!./node_modules/_@nuxt_components@2.1.8@@nuxt/components/dist/loader.js??ref--0-0!./node_modules/_vue-loader@15.9.7@vue-loader/lib??vue-loader-options!./pages/report/_id.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var _idvue_type_script_lang_js_ = ({
  components: {
    echart: echarts["default"],
    Star: StarZoom["default"]
  },

  data() {
    return {};
  }

});
// CONCATENATED MODULE: ./pages/report/_id.vue?vue&type=script&lang=js&
 /* harmony default export */ var report_idvue_type_script_lang_js_ = (_idvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/_vue-loader@15.9.7@vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14);

// CONCATENATED MODULE: ./pages/report/_id.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  report_idvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "ffd80f8c"
  
)

/* harmony default export */ var _id = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=_id.js.map