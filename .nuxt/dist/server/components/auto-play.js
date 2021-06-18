exports.ids = [1];
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
  add("2aa4de02", content, true, context)
};

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.7@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_@nuxt_components@2.1.8@@nuxt/components/dist/loader.js??ref--0-0!./node_modules/_vue-loader@15.9.7@vue-loader/lib??vue-loader-options!./components/AutoPlay.vue?vue&type=template&id=74b37c6b&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('a-carousel',{staticClass:"txt-banner",attrs:{"autoplay":"","dots":false}},_vm._l((_vm.bannerTxt),function(item,index){return _c('div',{key:index},[_c('h3',[_c('span',{on:{"click":_vm.handleBannerPopShow}},[_c('i',{staticClass:"fire"}),_vm._v(_vm._s(item)),_c('i',{staticClass:"finger"})])])])}),0)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/AutoPlay.vue?vue&type=template&id=74b37c6b&scoped=true&

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
  "74b37c6b",
  "5efc8e49"
  
)

/* harmony default export */ var AutoPlay = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_AutoPlay_vue_vue_type_style_index_0_id_74b37c6b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(199);
/* harmony import */ var _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_AutoPlay_vue_vue_type_style_index_0_id_74b37c6b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_AutoPlay_vue_vue_type_style_index_0_id_74b37c6b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_AutoPlay_vue_vue_type_style_index_0_id_74b37c6b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_AutoPlay_vue_vue_type_style_index_0_id_74b37c6b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 229:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(12);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(44);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(70);
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(230);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".txt-banner[data-v-74b37c6b]{height:38px;overflow-y:hidden;margin-top:20px}.ant-carousel[data-v-74b37c6b] .slick-slide{display:block;width:100%;text-align:center;height:40px;line-height:40px;overflow:hidden}.ant-carousel[data-v-74b37c6b] .custom-slick-arrow{width:20px;height:20px;font-size:16px;color:#fff;background-color:rgba(31,45,61,.11);opacity:.3}.ant-carousel[data-v-74b37c6b] .custom-slick-arrow:before{display:none}.ant-carousel[data-v-74b37c6b] .custom-slick-arrow:hover{opacity:.5}.ant-carousel[data-v-74b37c6b] .slick-slide h3{color:#fff;font-size:22px}h3>span[data-v-74b37c6b]{cursor:pointer;position:relative;padding:4px}h3>span>i.fire[data-v-74b37c6b]{left:-30px;background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");-webkit-animation:rotate-data-v-74b37c6b .5s linear infinite;animation:rotate-data-v-74b37c6b .5s linear infinite}h3>span>i.finger[data-v-74b37c6b],h3>span>i.fire[data-v-74b37c6b]{position:absolute;width:30px;height:30px;background-repeat:no-repeat;background-size:contain}h3>span>i.finger[data-v-74b37c6b]{right:-24px;top:6px;background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");transform:rotate(-45deg);-webkit-animation:rotate2-data-v-74b37c6b .5s linear infinite;animation:rotate2-data-v-74b37c6b .5s linear infinite}@-webkit-keyframes rotate-data-v-74b37c6b{0%{transform:translateY(0)}25%{transform:translateY(4px)}50%{transform:translateY(8px) scale(1.1,.9)}75%{transform:translateY(4px)}to{transform:translateY(0)}}@keyframes rotate-data-v-74b37c6b{0%{transform:translateY(0)}25%{transform:translateY(4px)}50%{transform:translateY(8px) scale(1.1,.9)}75%{transform:translateY(4px)}to{transform:translateY(0)}}@-webkit-keyframes rotate2-data-v-74b37c6b{0%{transform:rotate(-45deg)}50%{transform:rotate(-45deg) scale(1.2)}to{transform:rotate(-45deg)}}@keyframes rotate2-data-v-74b37c6b{0%{transform:rotate(-45deg)}50%{transform:rotate(-45deg) scale(1.2)}to{transform:rotate(-45deg)}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 230:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAkCAYAAAAHKVPcAAADrElEQVRYR+2YSYhcZRSFv+OAMxoHFFHRlQjOxBGDrSEgjqjgEBMEURdOoCFBXehGEAfciKKC4JA4JkYiKmiIiiOCCi6CBkERRRQjHcc4HjnFfeF12d1VrzsBF303Ve+9///vqTucc1+JKZjtecDNwDHAb8CrwC2SPpvCcajrJttXAA8AW/Xt3QDMlfRB1zM7gbC9P7AO2B74G1gNzAKOLcdrgUMluQuQriCWAHeUgwWSluW77QeBK+v+7K7R6AqicfZXoiEp0QiIEeC1AnGRpKe3ZCQeBi4DNkraoXFk+yTgzbq+RNITMyCAmUjM1ERa9H/RHScCb1dbLpS0dEu26OPAAmCDpN1aPLEf8CX0tCgidh/wrKSvhwHTlTFD0/P7QRRrhiUvaDn9B3gLyP3lkr6bCNAYELZzHUEalZRDxpjtyUDsCNwFXArs1Lc1NP868AywQtIP7eebQNi+HLgN2Bv4CXgZuFXSJ62wTwiitSYAzgIuBE4rxW37/AN4Clgi6ds86IGwfTbwfHPd2vEzEEF6sdYNBNH2ZntX4JwClEFo29bz1MupktY1IN4DjgN+Bx4Fjqjr7Ekor5b00GTpGFSAtncHzgOuBQ6v9YnyUao6yIi2HbBU0sL61YuAO2uCypByO3AQcPF4hTkIRCtd2wCPRGPq3jUNiF8rd89JOr+1IdWeyGSSim2s72NadFgArXN3Br4A9kgHNel4BUjOEvpTJKW1emZ7TtVLwtnYekl7dnXeVy/Lgfzg0QbEycCaCv1XvTxJ37eAHAK8BBxY976RtO80QTTE90u7RZPzG+vgODyzPbDa3gdYBczOnCnppmmCeL9eGda2QaRgMidGjGLp45DPJmvIrJ9suoKxnVb9seprWT9jZqT/EEi+/wRGJL3T1cmg9baPBD6qdTf8Rztsn1Fhz8tNRCn1MYZmBzkZ9Nx2huUMzbGRcQXMdvhhcS1aJSmst9nMdlT2KiD6NGsiEMnZG8AJ5XmRpHs2Fwrb7wLH521O0sETSrntAypv4YeIzhxJqehpme00QIoy7y1PSpo/6TzRJ2yfA0dLGp0OCtuHAR/XGYsl3T1wqLGdNFxfm1ZKighN2WxHmx6rA+ZJWj0MiNRHaLx5875O0r1TQWE7GrQCOD2KAOwlaf1AEHFmO3Qd/sjUlfp4oT6T32Ftl2LbRnPWSJqbzUOBKCAZfFaO8+fIsCDa61Jf+UMln8ODKCDn1t9EKa6ti1WHBZEx4NNS5PslZYTs2b/xPqNmNBWEwQAAAABJRU5ErkJggg=="

/***/ })

};;
//# sourceMappingURL=auto-play.js.map