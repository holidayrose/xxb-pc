exports.ids = [29,1];
exports.modules = {

/***/ 199:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(229);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(13).default
module.exports.__inject__ = function (context) {
  add("0fbb116c", content, true, context)
};

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.7@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_@nuxt_components@2.1.8@@nuxt/components/dist/loader.js??ref--0-0!./node_modules/_vue-loader@15.9.7@vue-loader/lib??vue-loader-options!./components/AutoPlay.vue?vue&type=template&id=b7f682b4&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('a-carousel',{staticClass:"txt-banner",attrs:{"autoplay":"","dots":false}},_vm._l((_vm.bannerTxt),function(item,index){return _c('div',{key:index},[_c('h3',[_c('span',{on:{"click":_vm.handleBannerPopShow}},[_c('i',{staticClass:"fire"}),_vm._v(_vm._s(item)),_c('i',{staticClass:"finger"})])])])}),0)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/AutoPlay.vue?vue&type=template&id=b7f682b4&scoped=true&

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.2.2@babel-loader/lib??ref--2-0!./node_modules/_@nuxt_components@2.1.8@@nuxt/components/dist/loader.js??ref--0-0!./node_modules/_vue-loader@15.9.7@vue-loader/lib??vue-loader-options!./components/AutoPlay.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
/* harmony default export */ var AutoPlayvue_type_script_lang_js_ = ({
  props: {
    bannerTxt: {
      type: Array,

      default() {
        return [];
      }

    }
  },
  methods: {
    handleBannerPopShow() {
      this.$emit('handleBannerPopShow');
    }

  }
});
// CONCATENATED MODULE: ./components/AutoPlay.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_AutoPlayvue_type_script_lang_js_ = (AutoPlayvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/_vue-loader@15.9.7@vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(20);

// CONCATENATED MODULE: ./components/AutoPlay.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(228)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_AutoPlayvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "b7f682b4",
  "5efc8e49"
  
)

/* harmony default export */ var AutoPlay = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_AutoPlay_vue_vue_type_style_index_0_id_b7f682b4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(199);
/* harmony import */ var _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_AutoPlay_vue_vue_type_style_index_0_id_b7f682b4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_AutoPlay_vue_vue_type_style_index_0_id_b7f682b4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_AutoPlay_vue_vue_type_style_index_0_id_b7f682b4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_AutoPlay_vue_vue_type_style_index_0_id_b7f682b4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 229:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(12);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(43);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(70);
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(230);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".txt-banner[data-v-b7f682b4]{height:40px;overflow-y:hidden;margin-top:20px}.ant-carousel[data-v-b7f682b4] .slick-slide{display:block;width:100%;text-align:center;height:40px;line-height:40px;overflow:hidden}.ant-carousel[data-v-b7f682b4] .custom-slick-arrow{width:20px;height:20px;font-size:16px;color:#fff;background-color:rgba(31,45,61,.11);opacity:.3}.ant-carousel[data-v-b7f682b4] .custom-slick-arrow:before{display:none}.ant-carousel[data-v-b7f682b4] .custom-slick-arrow:hover{opacity:.5}.ant-carousel[data-v-b7f682b4] .slick-slide h3{color:#fff;font-size:22px}h3>span[data-v-b7f682b4]{cursor:pointer;position:relative}h3>span>i.fire[data-v-b7f682b4]{left:-30px;background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");-webkit-animation:rotate-data-v-b7f682b4 .5s linear infinite;animation:rotate-data-v-b7f682b4 .5s linear infinite}h3>span>i.finger[data-v-b7f682b4],h3>span>i.fire[data-v-b7f682b4]{position:absolute;width:30px;height:32px;background-repeat:no-repeat;background-size:contain}h3>span>i.finger[data-v-b7f682b4]{right:-24px;top:2px;background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");transform:rotate(-30deg);-webkit-animation:rotate2-data-v-b7f682b4 .5s linear infinite;animation:rotate2-data-v-b7f682b4 .5s linear infinite}@-webkit-keyframes rotate-data-v-b7f682b4{0%{transform:translateY(0)}25%{transform:translateY(4px)}50%{transform:translateY(8px) scale(1.1,.9)}75%{transform:translateY(4px)}to{transform:translateY(0)}}@keyframes rotate-data-v-b7f682b4{0%{transform:translateY(0)}25%{transform:translateY(4px)}50%{transform:translateY(8px) scale(1.1,.9)}75%{transform:translateY(4px)}to{transform:translateY(0)}}@-webkit-keyframes rotate2-data-v-b7f682b4{0%{transform:rotate(-30deg)}50%{transform:rotate(-30deg) scale(1.2)}to{transform:rotate(-30deg)}}@keyframes rotate2-data-v-b7f682b4{0%{transform:rotate(-30deg)}50%{transform:rotate(-30deg) scale(1.2)}to{transform:rotate(-30deg)}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 230:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAkCAYAAAAHKVPcAAADrElEQVRYR+2YSYhcZRSFv+OAMxoHFFHRlQjOxBGDrSEgjqjgEBMEURdOoCFBXehGEAfciKKC4JA4JkYiKmiIiiOCCi6CBkERRRQjHcc4HjnFfeF12d1VrzsBF303Ve+9///vqTucc1+JKZjtecDNwDHAb8CrwC2SPpvCcajrJttXAA8AW/Xt3QDMlfRB1zM7gbC9P7AO2B74G1gNzAKOLcdrgUMluQuQriCWAHeUgwWSluW77QeBK+v+7K7R6AqicfZXoiEp0QiIEeC1AnGRpKe3ZCQeBi4DNkraoXFk+yTgzbq+RNITMyCAmUjM1ERa9H/RHScCb1dbLpS0dEu26OPAAmCDpN1aPLEf8CX0tCgidh/wrKSvhwHTlTFD0/P7QRRrhiUvaDn9B3gLyP3lkr6bCNAYELZzHUEalZRDxpjtyUDsCNwFXArs1Lc1NP868AywQtIP7eebQNi+HLgN2Bv4CXgZuFXSJ62wTwiitSYAzgIuBE4rxW37/AN4Clgi6ds86IGwfTbwfHPd2vEzEEF6sdYNBNH2ZntX4JwClEFo29bz1MupktY1IN4DjgN+Bx4Fjqjr7Ekor5b00GTpGFSAtncHzgOuBQ6v9YnyUao6yIi2HbBU0sL61YuAO2uCypByO3AQcPF4hTkIRCtd2wCPRGPq3jUNiF8rd89JOr+1IdWeyGSSim2s72NadFgArXN3Br4A9kgHNel4BUjOEvpTJKW1emZ7TtVLwtnYekl7dnXeVy/Lgfzg0QbEycCaCv1XvTxJ37eAHAK8BBxY976RtO80QTTE90u7RZPzG+vgODyzPbDa3gdYBczOnCnppmmCeL9eGda2QaRgMidGjGLp45DPJmvIrJ9suoKxnVb9seprWT9jZqT/EEi+/wRGJL3T1cmg9baPBD6qdTf8Rztsn1Fhz8tNRCn1MYZmBzkZ9Nx2huUMzbGRcQXMdvhhcS1aJSmst9nMdlT2KiD6NGsiEMnZG8AJ5XmRpHs2Fwrb7wLH521O0sETSrntAypv4YeIzhxJqehpme00QIoy7y1PSpo/6TzRJ2yfA0dLGp0OCtuHAR/XGYsl3T1wqLGdNFxfm1ZKighN2WxHmx6rA+ZJWj0MiNRHaLx5875O0r1TQWE7GrQCOD2KAOwlaf1AEHFmO3Qd/sjUlfp4oT6T32Ftl2LbRnPWSJqbzUOBKCAZfFaO8+fIsCDa61Jf+UMln8ODKCDn1t9EKa6ti1WHBZEx4NNS5PslZYTs2b/xPqNmNBWEwQAAAABJRU5ErkJggg=="

/***/ }),

/***/ 231:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(265);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(13).default
module.exports.__inject__ = function (context) {
  add("26f2ca86", content, true, context)
};

/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_SearchBox_vue_vue_type_style_index_0_id_54d6f1d8_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(231);
/* harmony import */ var _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_SearchBox_vue_vue_type_style_index_0_id_54d6f1d8_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_SearchBox_vue_vue_type_style_index_0_id_54d6f1d8_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_SearchBox_vue_vue_type_style_index_0_id_54d6f1d8_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_SearchBox_vue_vue_type_style_index_0_id_54d6f1d8_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 265:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(12);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".search-wrapper[data-v-54d6f1d8]{position:absolute;width:100%;left:0;bottom:140px}.search-wrapper .search-box p[data-v-54d6f1d8]{color:#fff;text-align:center;font-weight:700;font-size:2rem}.search-wrapper .search-box .search-bg[data-v-54d6f1d8]{margin:0 auto;height:70px;display:flex;flex-direction:column;position:relative;z-index:10}.search-wrapper .search-box .search-bg .input[data-v-54d6f1d8]{border:none}.search-wrapper .search-box .search-bg .input[data-v-54d6f1d8] input{border:none!important;height:70px;font-size:18px;padding-left:20px}.search-wrapper .search-box .search-bg .input[data-v-54d6f1d8] input::-webkit-input-placeholder{color:#222}.search-wrapper .search-box .search-bg .input[data-v-54d6f1d8] input:active,.search-wrapper .search-box .search-bg .input[data-v-54d6f1d8] input:focus{border:none!important;box-shadow:none}.search-wrapper .search-box .search-bg[data-v-54d6f1d8] .ant-input-search-button{width:86px;height:70px;background-color:#007dff;border-color:#007dff;font-size:24px}.search-wrapper .search-box .search-bg[data-v-54d6f1d8] .ant-input-group-addon{background-color:transparent}.search-wrapper .search-box .search-bg[data-v-54d6f1d8] .ant-input-affix-wrapper .ant-input-suffix{font-size:30px;margin-right:16px}.search-wrapper .search-box .search-bg[data-v-54d6f1d8] .ant-input-affix-wrapper .ant-input:not(:last-child){padding-right:92px}.search-wrapper .search-box .search-bg[data-v-54d6f1d8] .ant-input-group{border-radius:12px;overflow:hidden}.search-wrapper .search-box .search-bg .result-wrap[data-v-54d6f1d8]{width:calc(100% - .7px);height:198px;min-height:198px;overflow-y:scroll;background-color:#fff;padding:10px 0;border-top:1px solid #cacaca}.search-wrapper .search-box .search-bg .result-wrap .title[data-v-54d6f1d8]{font-size:13px;color:#666;padding-left:10px;padding-right:10px}.search-wrapper .search-box .search-bg .result-wrap .item .link[data-v-54d6f1d8]{display:flex;justify-content:space-between;align-items:center;color:#222;padding:4px 20px;cursor:pointer}.search-wrapper .search-box .search-bg .result-wrap .item[data-v-54d6f1d8]:hover{background-color:rgba(0,125,255,.1)}.search-wrapper .search-box .search-bg .focus-result[data-v-54d6f1d8],.search-wrapper .search-box .search-bg .search-result[data-v-54d6f1d8]{display:none}.search-wrapper .search-box .focus[data-v-54d6f1d8] .ant-input-group,.search-wrapper .search-box .search[data-v-54d6f1d8] .ant-input-group{border-radius:12px 12px 0 0}.search-wrapper .search-box .focus[data-v-54d6f1d8] .ant-input,.search-wrapper .search-box .focus[data-v-54d6f1d8] .ant-input-group-addon,.search-wrapper .search-box .search[data-v-54d6f1d8] .ant-input,.search-wrapper .search-box .search[data-v-54d6f1d8] .ant-input-group-addon{border-radius:0}.search-wrapper .search-box .focus .result-wrap[data-v-54d6f1d8],.search-wrapper .search-box .search .result-wrap[data-v-54d6f1d8]{border-radius:0 0 12px 12px}.search-wrapper .search-box .focus .focus-result[data-v-54d6f1d8],.search-wrapper .search-box .search .search-result[data-v-54d6f1d8]{display:block}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.7@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_@nuxt_components@2.1.8@@nuxt/components/dist/loader.js??ref--0-0!./node_modules/_vue-loader@15.9.7@vue-loader/lib??vue-loader-options!./components/SearchBox.vue?vue&type=template&id=54d6f1d8&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('a-row',{staticClass:"search-wrapper",attrs:{"type":"flex","justify":"center"}},[_c('a-col',{staticClass:"search-box",attrs:{"span":"17"}},[_c('p',{staticStyle:{"display":"none"}},[_vm._v("\n      "+_vm._s(_vm.$configs.CONST.SEARCH_TEXT)+"\n    ")]),_vm._v(" "),_c('div',{staticClass:"search-bg",class:{ focus: _vm.isFocus,search: _vm.isSearch }},[_c('a-input-search',{staticClass:"input",attrs:{"size":"large","placeholder":"搜索产品类别/产品名称，看看其他CIO的实名点评吧！"},on:{"search":_vm.onSearch,"change":_vm.onChange,"focus":_vm.onFocus,"blur":_vm.onBlur},model:{value:(_vm.keywords),callback:function ($$v) {_vm.keywords=$$v},expression:"keywords"}}),_vm._v(" "),_c('div',{staticClass:"result-wrap focus-result"},[_c('div',[_c('h3',{staticClass:"title"},[_vm._v("\n            热门搜索\n          ")]),_vm._v(" "),_vm._l((_vm.hotSearchList),function(item){return _c('div',{key:item.ID,staticClass:"item"},[_c('div',{staticClass:"link",on:{"click":function($event){return _vm.handleKeyWordTagClick(item)}}},[_c('span',[_vm._v(_vm._s(item.value))]),_vm._v(" "),_c('span',{staticClass:"hot-icon"})])])})],2),_vm._v(" "),(_vm.historySearch)?_c('div',{staticStyle:{"margin-top":"10px"}},[_c('h3',{staticClass:"title g-flex space-between"},[_c('span',[_vm._v("历史搜索")]),_vm._v(" "),_c('span',{staticStyle:{"cursor":"pointer"},on:{"click":_vm.deleteHistorySearch}},[_c('a-icon',{attrs:{"type":"delete"}}),_vm._v("删除\n            ")],1)]),_vm._v(" "),_vm._l((_vm.historySearch),function(item){return _c('div',{key:item.ID,staticClass:"item"},[_c('div',{staticClass:"link",on:{"click":function($event){return _vm.handleKeyWordTagClick(item)}}},[_c('span',[_vm._v(_vm._s(item.names))]),_vm._v(" "),_c('span',{staticClass:"hot-icon"})])])})],2):_vm._e()]),_vm._v(" "),_c('div',{staticClass:"result-wrap search-result"},_vm._l((_vm.searchList),function(item){return _c('div',{key:item.ID,staticClass:"item"},[_c('div',{staticClass:"link",on:{"click":function($event){return _vm.handleKeyWordTagClick2(item)}}},[_c('span',[_vm._v(_vm._s(item.names))]),_vm._v(" "),_c('span',{staticStyle:{"color":"#666","font-size":"12px"}},[_vm._v(_vm._s(item.TYPE === '1' ? '产品' : '类别'))])])])}),0)],1),_vm._v(" "),_c('AutoPlay',{attrs:{"banner-txt":_vm.bannerTxt},on:{"handleBannerPopShow":_vm.handleBannerPopShow}})],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/SearchBox.vue?vue&type=template&id=54d6f1d8&scoped=true&

// EXTERNAL MODULE: ./static/lib/storage.js
var storage = __webpack_require__(22);

// EXTERNAL MODULE: ./components/AutoPlay.vue + 4 modules
var AutoPlay = __webpack_require__(210);

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.2.2@babel-loader/lib??ref--2-0!./node_modules/_@nuxt_components@2.1.8@@nuxt/components/dist/loader.js??ref--0-0!./node_modules/_vue-loader@15.9.7@vue-loader/lib??vue-loader-options!./components/SearchBox.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var SearchBoxvue_type_script_lang_js_ = ({
  components: {
    AutoPlay: AutoPlay["default"]
  },
  props: {
    bannerTxt: {
      type: Array,

      default() {
        return [];
      }

    }
  },

  data() {
    return {
      keywords: '',
      hotSearchList: [],
      searchList: [],
      isFocus: false,
      isSearch: false,
      statusMapper: {
        product: 'haveProductReviews',
        category: 'haveCategoryInformation',
        fuzzy: 'fuzzyMatching',
        notFound: 'allWithout'
      },
      timer: null,
      historySearch: []
    };
  },

  methods: {
    handleBannerPopShow() {
      this.$emit('handleBannerPopShow');
    },

    async onSearch() {
      if (!this.keywords.trim()) {
        return false;
      } else {
        let res = await this.$requests.indexKeysSearch({
          KEY_INFO: this.keywords.trim()
        });

        if (res.status === 200 && res.data.result === 'success') {
          switch (res.data.searchStatus) {
            case this.statusMapper.category:
              this.$router.push({
                name: 'product-id',
                params: {
                  id: res.data.CATEGORY_ID
                },
                query: {
                  category_name: this.keywords.trim()
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
                  keywords: this.keywords.trim()
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
                  keywords: this.keywords.trim()
                }
              });
              break;
          }
        }
      }
    },

    async onChange() {
      if (this.keywords.trim() === '') {
        this.isFocus = true;
        this.isSearch = false;
      } else {
        this.searchList = await this.searchAutoComplete();

        if (this.searchList) {
          this.isFocus = false;
          this.isSearch = true;
        } else {
          this.isFocus = false;
          this.isSearch = false;
        }
      }
    },

    async onFocus() {
      if (this.keywords.trim() === '') {
        this.getHistorySearch();
        this.isFocus = true;
        const data = {
          CUR_PAGE: 1
        };
        const res = await this.$requests.indexSearchHot(data);

        if (res.status === 200 && res.data.result === 'success') {
          this.hotSearchList = res.data.hotsearchlogObj;
        }
      }
    },

    onBlur() {
      this.timer = setTimeout(() => {
        this.isFocus = false;
      }, 300);
    },

    async searchAutoComplete() {
      let resList = [];
      let data = {
        KEY_INFO: this.keywords.trim()
      };
      let res = await this.$requests.indexSearchAutoComplete(data);

      if (res.status === 200 && res.data.result === 'success') {
        resList = res.data.productList;
      }

      return resList;
    },

    async handleKeyWordTagClick(obj) {
      // 历史搜索本地存储
      let historySearch = storage["a" /* default */].get('set_history_search');

      if (historySearch) {
        let index = historySearch.findIndex(item => {
          return item.ID === obj.ID;
        });

        if (index !== -1) {
          historySearch.splice(index, 1);
        }

        historySearch.unshift(obj);
        storage["a" /* default */].set('set_history_search', historySearch);
      } else {
        let tmpArr = [];
        tmpArr.unshift(obj);
        storage["a" /* default */].set('set_history_search', tmpArr);
      }

      clearTimeout(this.timer);
      let res = await this.$requests.indexKeysSearch({
        KEY_INFO: obj.names.trim()
      });

      if (res.status === 200 && res.data.result === 'success') {
        switch (res.data.searchStatus) {
          case this.statusMapper.category:
            this.$router.push({
              name: 'product-id',
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

    handleKeyWordTagClick2(obj) {
      // 历史搜索本地存储
      let historySearch = storage["a" /* default */].get('set_history_search');

      if (historySearch) {
        let index = historySearch.findIndex(item => {
          return item.ID === obj.ID;
        });

        if (index !== -1) {
          historySearch.splice(index, 1);
        }

        historySearch.unshift(obj);
        storage["a" /* default */].set('set_history_search', historySearch);
      } else {
        let tmpArr = [];
        tmpArr.unshift(obj);
        storage["a" /* default */].set('set_history_search', tmpArr);
      }

      if (obj.TYPE === '1') {
        this.$router.push({
          name: 'productDetail-id',
          params: {
            id: obj.ID
          }
        });
      } else {
        this.$router.push({
          name: 'product-id',
          params: {
            id: obj.ID
          },
          query: {
            category_name: obj.NAME
          }
        });
      }
    },

    // 本地存储的历史搜索
    getHistorySearch() {
      this.historySearch = storage["a" /* default */].get('set_history_search');
      console.log(this.historySearch);
    },

    // 删除本地存储的历史搜索
    deleteHistorySearch() {
      storage["a" /* default */].remove('set_history_search');
      this.historySearch = [];
    }

  }
});
// CONCATENATED MODULE: ./components/SearchBox.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_SearchBoxvue_type_script_lang_js_ = (SearchBoxvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/_vue-loader@15.9.7@vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(20);

// CONCATENATED MODULE: ./components/SearchBox.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(264)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_SearchBoxvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "54d6f1d8",
  "f1b733a6"
  
)

/* harmony default export */ var SearchBox = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {AutoPlay: __webpack_require__(210).default})


/***/ })

};;
//# sourceMappingURL=search-box.js.map