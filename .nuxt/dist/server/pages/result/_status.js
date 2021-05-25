exports.ids = [37,8,9];
exports.modules = {

/***/ 158:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(196);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("7c29e212", content, true, context)
};

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_status_vue_vue_type_style_index_0_id_a5cc04ac_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(158);
/* harmony import */ var _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_status_vue_vue_type_style_index_0_id_a5cc04ac_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_status_vue_vue_type_style_index_0_id_a5cc04ac_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_status_vue_vue_type_style_index_0_id_a5cc04ac_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_status_vue_vue_type_style_index_0_id_a5cc04ac_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 196:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(13);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(94);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".hot-icon[data-v-a5cc04ac]{display:inline-block;width:15px;height:20px;background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");background-size:cover;margin-left:20px}.main[data-v-a5cc04ac]{min-height:100vh}.detail-nav .nav-bar-item[data-v-a5cc04ac]{position:relative;display:inline-block;color:#222;padding:16px 0;margin:0 20px}.detail-nav .nav-bar-item span[data-v-a5cc04ac]{padding:0 10px;background-color:#818080;color:#fff;border-radius:10px;font-size:12px;margin-left:8px}.detail-nav .on[data-v-a5cc04ac]:before{content:\"\";width:100%;display:block;position:absolute;bottom:0;left:0;height:4px;border-radius:2px}.detail-nav .on[data-v-a5cc04ac]:before,.detail-nav .on span[data-v-a5cc04ac]{background-color:#007dff}.result-wrap[data-v-a5cc04ac]{margin-top:20px}.result-wrap .item[data-v-a5cc04ac]{padding:20px 40px;border-radius:4px;background-color:#f5f5f5;margin-bottom:20px;cursor:pointer}.hot-search-wrap .item[data-v-a5cc04ac]{padding:10px;transition:.5s;cursor:pointer}.hot-search-wrap .item[data-v-a5cc04ac]:hover{background-color:rgba(0,125,255,.1)}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.7@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_@nuxt_components@2.1.8@@nuxt/components/dist/loader.js??ref--0-0!./node_modules/_vue-loader@15.9.7@vue-loader/lib??vue-loader-options!./pages/result/_status.vue?vue&type=template&id=a5cc04ac&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"main"},[_c('Header'),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"container-index\" data-v-a5cc04ac>","</div>",[_c('a-row',{staticClass:"g-wrapper",attrs:{"gutter":[32, 32]}},[_c('a-col',{attrs:{"span":"15"}},[_c('a-input-search',{staticClass:"input",staticStyle:{"width":"100%","height":"48px"},attrs:{"size":"large","placeholder":"搜索产品类别、名称，看看同行推荐啥？","enter-button":""},model:{value:(_vm.keywords),callback:function ($$v) {_vm.keywords=$$v},expression:"keywords"}})],1)],1)],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"container-index\" style=\"background-color: #ffffff;min-height: 100vh\" data-v-a5cc04ac>","</div>",[_c('a-row',{staticClass:"g-wrapper",attrs:{"gutter":[32, 32]}},[_c('a-col',{attrs:{"span":"15"}},[(_vm.status === 'fuzzy')?_c('div',{staticClass:"fuzzy"},[_c('div',{staticClass:"title"},[_c('h2',[_vm._v("您要找的是不是？")])]),_vm._v(" "),_c('div',{staticClass:"detail-nav"},[_c('div',[_c('a',{staticClass:"nav-bar-item",class:_vm.isPro?'on':'',attrs:{"href":"#","title":"功能"},on:{"click":_vm.searchByProduct}},[_vm._v("相关产品"),_c('span',[_vm._v(_vm._s(_vm.productList.length))])]),_vm._v(" "),_c('a',{staticClass:"nav-bar-item",class:_vm.isCate?'on':'',attrs:{"href":"#","title":"申请演示"},on:{"click":_vm.searchByCategory}},[_vm._v("相关类别"),_c('span',[_vm._v(_vm._s(_vm.categoryList.length))])])])]),_vm._v(" "),(_vm.isPro)?_c('div',{staticClass:"result-wrap"},[(_vm.productList.length)?_c('div',_vm._l((_vm.productList),function(item){return _c('div',{key:item.id,staticClass:"item g-flex space-between",on:{"click":function($event){return _vm.navigatoToPro(item)}}},[_c('div',{staticClass:"name"},[_vm._v("\n                  "+_vm._s(item.name)+"\n                ")]),_vm._v(" "),_c('div',{staticClass:"reviews"},[_vm._v("\n                  点评量："+_vm._s(item.dpnum)+"\n                ")])])}),0):_c('div',{staticStyle:{"width":"100%","height":"400px"}},[_c('no-data',[_c('div',{staticStyle:{"font-size":"14px"},attrs:{"slot":"txt"},slot:"txt"},[_vm._v("\n                  没有搜索到相关产品\n                ")])])],1)]):_vm._e(),_vm._v(" "),(_vm.isCate)?_c('div',{staticClass:"result-wrap"},[(_vm.categoryList.length)?_c('div',_vm._l((_vm.categoryList),function(item){return _c('div',{key:item.id,staticClass:"item g-flex space-between",on:{"click":function($event){return _vm.navigatoToCate(item)}}},[_c('div',{staticClass:"name"},[_vm._v("\n                  "+_vm._s(item.name)+"\n                ")]),_vm._v(" "),_c('div',{staticClass:"reviews"},[_vm._v("\n                  点评量："+_vm._s(item.dpnum)+"\n                ")])])}),0):_c('div',{staticStyle:{"width":"100%","height":"400px"}},[_c('no-data',[_c('div',{staticStyle:{"font-size":"14px"},attrs:{"slot":"txt"},slot:"txt"},[_vm._v("\n                  没有搜索到相关类别\n                ")])])],1)]):_vm._e()]):(_vm.status === 'notFound')?_c('div',{staticClass:"not-found",staticStyle:{"width":"100%","height":"410px"}},[_c('no-data',[_c('div',{attrs:{"slot":"txt"},slot:"txt"},[_vm._v("\n              没有找到相关内容\n            ")])])],1):_vm._e()]),_vm._v(" "),_c('a-col',{attrs:{"span":"8","offset":"1"}},[_c('div',{staticClass:"panel"},[_c('h2',[_vm._v("热门搜索")]),_vm._v(" "),_c('div',{staticClass:"hot-search-wrap"},_vm._l((_vm.hotSearchList),function(item,index){return _c('div',{key:item.ID,staticClass:"item g-flex",on:{"click":function($event){return _vm.handleKeyWordTagClick(item)}}},[_c('span',[_vm._v(_vm._s(item.names || item.value))]),_vm._v(" "),(index < 3)?_c('span',{staticClass:"hot-icon"}):_vm._e()])}),0)])])],1)],1),_vm._ssrNode(" "),_c('Footer')],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/result/_status.vue?vue&type=template&id=a5cc04ac&scoped=true&

// EXTERNAL MODULE: ./components/hasNoData/noData.vue + 4 modules
var noData = __webpack_require__(68);

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.2.2@babel-loader/lib??ref--2-0!./node_modules/_@nuxt_components@2.1.8@@nuxt/components/dist/loader.js??ref--0-0!./node_modules/_vue-loader@15.9.7@vue-loader/lib??vue-loader-options!./pages/result/_status.vue?vue&type=script&lang=js&
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

/* harmony default export */ var _statusvue_type_script_lang_js_ = ({
  components: {
    noData: noData["default"]
  },

  async asyncData(vm) {
    let status = vm.params.status;
    let keywords = vm.query.keywords || '';
    let hotSearchList = [];
    let categoryList = [];
    let productList = []; // 产品

    let productRes = await vm.$requests.searchProductContain({
      KEY_INFO: keywords,
      CUR_PAGE: 1
    });

    if (productRes.data.result === 'success') {
      productList = productRes.data.productList;
    } // 类别


    let categoryRes = await vm.$requests.searchCategoryContain({
      KEY_INFO: keywords,
      CUR_PAGE: 1
    });

    if (categoryRes.data.result === 'success') {
      categoryList = categoryRes.data.categoryList;
    } // 热门搜搜


    let res = await vm.$requests.indexSearchHot({
      CUR_PAGE: 1
    });

    if (res.data.result === 'success') {
      hotSearchList = res.data.hotsearchlogObj;
    }

    return {
      status,
      // notFound/fuzzy
      keywords,
      hotSearchList,
      productList,
      categoryList,
      isPro: true,
      isCate: false,
      statusMapper: {
        product: 'haveProductReviews',
        category: 'haveCategoryInformation',
        fuzzy: 'fuzzyMatching',
        notFound: 'allWithout'
      }
    };
  },

  methods: {
    async handleKeyWordTagClick(obj) {
      let res = await this.$requests.indexKeysSearch({
        KEY_INFO: obj.names.trim()
      });

      if (res.status === 200 && res.data.result === 'success') {
        switch (res.data.searchStatus) {
          case this.statusMapper.category:
            this.$router.push({
              name: 'company-id',
              params: {
                id: res.data.CATEGORY_ID
              },
              query: {
                category_name: obj.value.trim()
              }
            });
            break;

          case this.statusMapper.product:
            this.$router.push({
              name: 'productDetail-id',
              params: {
                id: res.data.PRODUCT_ID
              }
            });
            break;

          case this.statusMapper.fuzzy:
            this.$router.push({
              name: 'result-status',
              params: {
                status: 'fuzzy'
              },
              query: {
                keywords: obj.names.trim()
              }
            });
            break;

          case this.statusMapper.notFound:
            this.$router.push({
              name: 'result-status',
              params: {
                status: 'notFound'
              },
              query: {
                keywords: obj.names.trim()
              }
            });
            break;
        }
      }
    },

    navigatoToPro(obj) {
      this.$router.push({
        name: 'productDetail-id',
        params: {
          id: obj.id
        }
      });
    },

    navigatoToCate(obj) {
      this.$router.push({
        name: 'company-id',
        params: {
          id: obj.id
        },
        query: {
          category_name: obj.name
        }
      });
    },

    async searchByProduct() {
      if (this.isPro) {
        return;
      }

      this.isPro = true;
      this.isCate = false;
      let productRes = await this.$requests.searchProductContain({
        KEY_INFO: this.keywords,
        CUR_PAGE: 1
      });

      if (productRes.data.result === 'success') {
        this.productList = productRes.data.productList;
      }
    },

    async searchByCategory() {
      if (this.isCate) {
        return;
      }

      this.isPro = false;
      this.isCate = true;
      let categoryRes = await this.$requests.searchCategoryContain({
        KEY_INFO: this.keywords,
        CUR_PAGE: 1
      });

      if (categoryRes.data.result === 'success') {
        this.categoryList = categoryRes.data.categoryList;
      }
    }

  }
});
// CONCATENATED MODULE: ./pages/result/_status.vue?vue&type=script&lang=js&
 /* harmony default export */ var result_statusvue_type_script_lang_js_ = (_statusvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/_vue-loader@15.9.7@vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/result/_status.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(195)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  result_statusvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "a5cc04ac",
  "7541797a"
  
)

/* harmony default export */ var _status = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Header: __webpack_require__(31).default,Footer: __webpack_require__(64).default})


/***/ }),

/***/ 51:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(63);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("41b5f5ba", content, true, context)
};

/***/ }),

/***/ 53:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(66);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("93cf824e", content, true, context)
};

/***/ }),

/***/ 58:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/wx-yh.bffc413.jpg";

/***/ }),

/***/ 59:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/qrcode_dy.e488e10.jpg";

/***/ }),

/***/ 60:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/qcrode.414b83a.jpg";

/***/ }),

/***/ 61:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/qrcode_fw.8427576.jpg";

/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_46a048b8_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(51);
/* harmony import */ var _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_46a048b8_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_46a048b8_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_46a048b8_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_46a048b8_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 63:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(13);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(29);
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(30);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".global-header[data-v-46a048b8]{border-bottom:1px solid #ddd;background-color:#fff;height:74px;line-height:74px}.global-header .logo-wrap[data-v-46a048b8]{margin-bottom:0}.global-header .logo[data-v-46a048b8]{width:99px;margin-right:15px}.global-header strong[data-v-46a048b8]{font-size:14px;color:#007dff}.global-header nav a.link[data-v-46a048b8]{color:#555;display:inline-flex;align-items:center;padding:0 15px}.icon[data-v-46a048b8]{display:inline-block;width:22px;height:22px;margin-right:6px}.review[data-v-46a048b8]{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ")}.cate[data-v-46a048b8]{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ")}.entry[data-v-46a048b8]{background-color:#ff492c;color:#fff;line-height:38px;padding:0 32px;border-radius:20px}*[data-v-46a048b8]{margin:0}*[data-v-46a048b8],ul[data-v-46a048b8]{padding:0}.g-wrapper[data-v-46a048b8]{width:100%;max-width:1200px!important;margin:0 auto!important}.g-flex[data-v-46a048b8]{display:flex}.g-flex.v-center[data-v-46a048b8]{flex-direction:column}.g-flex.center[data-v-46a048b8],.g-flex.v-center[data-v-46a048b8]{justify-content:center;align-items:center}.g-flex.space-between[data-v-46a048b8]{justify-content:space-between;align-items:center}.g-flex.space-around[data-v-46a048b8]{justify-content:space-around}.footer[data-v-46a048b8]{padding:60px 0 20px}.footer .footerInfo[data-v-46a048b8]{text-align:center}.footer .footerInfo .ca_text[data-v-46a048b8]{font-size:20px;color:#555}.footer .footerInfo .qc_text[data-v-46a048b8]{font-size:15px;color:#c1c1c1;padding-top:20px}.footer .qcrodeImg[data-v-46a048b8]{width:158px;margin-bottom:70px;margin-top:10px}.display-pc[data-v-46a048b8]{display:block}.display-flex[data-v-46a048b8]{display:flex}.display-m[data-v-46a048b8]{display:none}.text-c[data-v-46a048b8]{text-align:center}.report-wrap[data-v-46a048b8]{background-color:#007dff;font-size:20px;padding:40px 0;margin-bottom:10px}.report-wrap[data-v-46a048b8],.review-btn[data-v-46a048b8]{color:#fff;text-align:center}.review-btn[data-v-46a048b8]{padding:6px 12px;background-color:#ff492c;border-radius:4px}.check-comment[data-v-46a048b8]{padding:6px 18px;color:#007dff;border:1px solid #007dff;border-radius:16px;font-size:12px}.check-comment[data-v-46a048b8]:hover{background-color:#007dff;color:#fff}.contact-btn[data-v-46a048b8]{background-color:#773aff;color:#fff;padding:16px 0;text-align:center;margin-bottom:10px;cursor:pointer}@media (max-width:767px){.display-m[data-v-46a048b8]{display:flex}.display-flex[data-v-46a048b8],.display-pc[data-v-46a048b8]{display:none}}.beian[data-v-46a048b8]{background-color:#2d3237;padding:40px 0}.site-width[data-v-46a048b8]{padding:10px 0;width:100%;justify-content:center;font-size:12px;margin:0 auto}.site-width[data-v-46a048b8],.site-width a[data-v-46a048b8]{display:flex;align-items:center;color:#fff}.site-width a[data-v-46a048b8]{margin:0 34px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.7@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_@nuxt_components@2.1.8@@nuxt/components/dist/loader.js??ref--0-0!./node_modules/_vue-loader@15.9.7@vue-loader/lib??vue-loader-options!./components/Footer.vue?vue&type=template&id=46a048b8&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('a-layout-footer',{staticClass:"footer"},[_c('a-row',[_c('a-col',[_c('a-row',{staticClass:"g-wrapper",attrs:{"getter":"16"}},_vm._l((_vm.cateInfo),function(item,index){return _c('a-col',{key:index,staticClass:"gutter-row footerInfo",attrs:{"span":"6"}},[_c('a',{staticClass:"ca_text",attrs:{"href":item.path,"title":item.text}},[_vm._v(_vm._s(item.text))]),_vm._v(" "),_c('p',{staticClass:"qc_text"},[_vm._v("\n            "+_vm._s(item.title)+"\n          ")]),_vm._v(" "),_c('img',{staticClass:"qcrodeImg",attrs:{"src":item.img,"alt":""}})])}),1)],1),_vm._v(" "),_c('a-col',{staticClass:"beian"},[_c('div',{staticClass:"site-width"},[_c('p',[_vm._v("© 2021 选型宝，All Rights Reserved.")]),_vm._v(" "),_c('p',[_c('a',{attrs:{"href":"#"}},[_vm._v("京ICP备14045422号-2 北京众智优选科技有限公司")])])]),_vm._v(" "),_c('div',{staticClass:"site-width"},[_c('p',[_vm._v("北京众智优选科技有限公司  地址：北京市朝阳区百子湾西里435号创富港436")])])])],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Footer.vue?vue&type=template&id=46a048b8&scoped=true&

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.2.2@babel-loader/lib??ref--2-0!./node_modules/_@nuxt_components@2.1.8@@nuxt/components/dist/loader.js??ref--0-0!./node_modules/_vue-loader@15.9.7@vue-loader/lib??vue-loader-options!./components/Footer.vue?vue&type=script&lang=js&
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
/* harmony default export */ var Footervue_type_script_lang_js_ = ({
  data() {
    return {
      cateInfo: [{
        text: '热门类别',
        title: '微信群',
        img: __webpack_require__(58),
        path: '/all'
      }, {
        text: '关于我们',
        title: '订阅号',
        img: __webpack_require__(59),
        path: '/'
      }, {
        text: '联系我们',
        title: '小程序',
        img: __webpack_require__(60),
        path: '/'
      }, {
        text: '加入我们',
        title: '服务号',
        img: __webpack_require__(61),
        path: '/'
      }]
    };
  }

});
// CONCATENATED MODULE: ./components/Footer.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Footervue_type_script_lang_js_ = (Footervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/_vue-loader@15.9.7@vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Footer.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(62)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Footervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "46a048b8",
  "8b47c43e"
  
)

/* harmony default export */ var Footer = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_noData_vue_vue_type_style_index_0_id_1feed65b_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53);
/* harmony import */ var _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_noData_vue_vue_type_style_index_0_id_1feed65b_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_noData_vue_vue_type_style_index_0_id_1feed65b_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_noData_vue_vue_type_style_index_0_id_1feed65b_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_noData_vue_vue_type_style_index_0_id_1feed65b_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 66:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(13);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(67);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".no-data-wrap[data-v-1feed65b]{width:100%;height:100%;background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");background-size:197px 128px;background-repeat:no-repeat;background-position:50%;position:relative}.no-data-wrap .txt-wrap[data-v-1feed65b]{color:#a3a3a3;position:absolute;left:50%;bottom:20%;transform:translate(-50%,-50%)}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 67:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/nodata.814e089.png";

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.7@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_@nuxt_components@2.1.8@@nuxt/components/dist/loader.js??ref--0-0!./node_modules/_vue-loader@15.9.7@vue-loader/lib??vue-loader-options!./components/hasNoData/noData.vue?vue&type=template&id=1feed65b&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"no-data-wrap"},[_vm._ssrNode("<div class=\"txt-wrap\" data-v-1feed65b>","</div>",[_vm._t("txt")],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/hasNoData/noData.vue?vue&type=template&id=1feed65b&scoped=true&

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.2.2@babel-loader/lib??ref--2-0!./node_modules/_@nuxt_components@2.1.8@@nuxt/components/dist/loader.js??ref--0-0!./node_modules/_vue-loader@15.9.7@vue-loader/lib??vue-loader-options!./components/hasNoData/noData.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
/* harmony default export */ var noDatavue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./components/hasNoData/noData.vue?vue&type=script&lang=js&
 /* harmony default export */ var hasNoData_noDatavue_type_script_lang_js_ = (noDatavue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/_vue-loader@15.9.7@vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/hasNoData/noData.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(65)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  hasNoData_noDatavue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "1feed65b",
  "fff5f0b0"
  
)

/* harmony default export */ var noData = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 94:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/fire.aa1086e.png";

/***/ })

};;
//# sourceMappingURL=_status.js.map