exports.ids = [36,1,3,5,7,8,10,11,12,13,15,16,17,25,27,28,29,32];
exports.modules = Array(53).concat([
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(60);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("4d15eb30", content, true, context)
};

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(65);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("fbf3bf86", content, true, context)
};

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(68);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("fdae1212", content, true, context)
};

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(70);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("79a0df01", content, true, context)
};

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(76);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("6a3e0560", content, true, context)
};

/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.7@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_@nuxt_components@2.1.8@@nuxt/components/dist/loader.js??ref--0-0!./node_modules/_vue-loader@15.9.7@vue-loader/lib??vue-loader-options!./components/common/starComp/StarZoom.vue?vue&type=template&id=59cc2748&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"star-wrap"}},[_vm._ssrNode("<div class=\"star-default\""+(_vm._ssrStyle(null,{ width: _vm.outWidth + 'px', height: _vm.outHeight + 'px' }, null))+" data-v-59cc2748><div class=\"star-real\""+(_vm._ssrStyle(null,{ width: _vm.innerWidth + 'px', height: _vm.outHeight + 'px' }, null))+" data-v-59cc2748></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/common/starComp/StarZoom.vue?vue&type=template&id=59cc2748&scoped=true&

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
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/common/starComp/StarZoom.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(59)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  starComp_StarZoomvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "59cc2748",
  "a765bd56"
  
)

/* harmony default export */ var StarZoom = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_StarZoom_vue_vue_type_style_index_0_id_59cc2748_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53);
/* harmony import */ var _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_StarZoom_vue_vue_type_style_index_0_id_59cc2748_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_StarZoom_vue_vue_type_style_index_0_id_59cc2748_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_StarZoom_vue_vue_type_style_index_0_id_59cc2748_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_StarZoom_vue_vue_type_style_index_0_id_59cc2748_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(13);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(61);
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(62);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".star-default[data-v-59cc2748]{width:100px;height:20px;background:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");background-size:contain}.star-real[data-v-59cc2748]{width:80px;height:20px;background:url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");background-size:contain}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 61 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAB0klEQVQ4T52UsWsTURzHv793F2kduoS8d0kWbzGB4FYHcYogOAhaHBxEEDfbP6BFV1Hprri5OAlSBUEQJIs46OYSW6EOIZf3S7ipQ9qmeT+5kh5JaMLVt929z/fDe7/f744wZ8VxvDQYDL6LCHzfv1IoFPZm4TRP1O12N5xzzxOGiNaNMZtnFrVarcVcLvcXgBmFbb/fD8Mw3D9NNvNEzLwqIi/HQ0T0yBjzOrOo0Wj41Wr1DxFdmArtNpvNSr1eP5qWkYgoa21VKXXROVcBUCGiSwCWZ9TjJ4BfIrJDRNu+72/n8/kdstZ+BXBtXtEz7DUSEQPQGeB5CFOv16sPh8NPAM7/j0xE+kR087hr7Xb7uud5HwEsnkUmIvvOuVvlcvlL2v4oim4opbYALGSRiciB53krWuvPxwM7Hup0Og+I6E0WkVLqodY6ZSdEURTdU0q9zSJyzt0vlUopOyGy1j4F8CSLCMCzIAhSdlqU1Oh2RtGHIAhWTtgJETP/FpFkusfXj1EtL4+/TCa7WCymbCpKPhVmPgDgjwK7AB4bY94lz8x8N7kOgHD0WznSWi8Q0fC0rr0noqsAXsRx/KpWqx1OneIcM68B2CCib8aYOyf7/wBiu6siH+XLgQAAAABJRU5ErkJggg=="

/***/ }),
/* 62 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAB3ElEQVQ4T52TsWsTcRTHP+9nWhoHkUtqV7MYoXRTSns3tILgIGiFyw1FEDf1D7DoKlXclW4uLrkgVREEQQyYi6CbKNgIdXBJ2gsICm013pOE9mxim179bT/e5/fhy3vvJ/Q5zdnxQ9oaqLYRXdOJ4afB991w6ScKPXsO5HabMSrXLf/13X2LvroT6bQxX0BGOomg/qORyuXK5fWdZLsmCj3nKnBv+yOjesXyg4XEIp2aSjVHfn0GObr9kcLyh0YqP10ut3plomDq7vjxARk8BppHyANjwImd+6HvFN6Lag1hiZYuZcbe1CQs2C8ROdWv6XvVVPWVhAWngXBkL7h/XRuyWrCnBZ4hcvB/ZAprEkVnO1NruvZpNfIESO9HprBuiM5litUX8fhXXOeMMSwCQ0lkqmwcEJ2xisHzNt+1Ryvu5CVjzIMkIoHLmWIlZrtEq549K8jDJCI0upj1qzHbJQo95xZwM5lI57N+ELPdiQrOogjnE4ngcbZYmdliexN9gs5m/z3CW1QF5GTPd6kNFysxG4vaX6VZcDYQUptTWCbSG1Yp8Nv30Jv0UDMvQm6z3rKiypCU+P3P1ELPeaSobeBOPfp2f7T08WdXCnd0MJTD1wTmgCDrBxe26n8Ah+yh8Twu8rAAAAAASUVORK5CYII="

/***/ }),
/* 63 */,
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5f550c22_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(54);
/* harmony import */ var _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5f550c22_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5f550c22_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5f550c22_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5f550c22_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".right-wrap[data-v-5f550c22]{position:fixed;bottom:30px;right:10px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/qrcode.5d928fb.png";

/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_qrcode_vue_vue_type_style_index_0_id_76300a10_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(55);
/* harmony import */ var _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_qrcode_vue_vue_type_style_index_0_id_76300a10_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_qrcode_vue_vue_type_style_index_0_id_76300a10_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_qrcode_vue_vue_type_style_index_0_id_76300a10_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_qrcode_vue_vue_type_style_index_0_id_76300a10_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".qrcode[data-v-76300a10]{box-shadow:0 2px 8px 0 rgba(0,0,0,.14);border-radius:4px;overflow:hidden}.qrcode img[data-v-76300a10]{width:130px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_pHeader2_vue_vue_type_style_index_0_id_3c31bc8e_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56);
/* harmony import */ var _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_pHeader2_vue_vue_type_style_index_0_id_3c31bc8e_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_pHeader2_vue_vue_type_style_index_0_id_3c31bc8e_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_pHeader2_vue_vue_type_style_index_0_id_3c31bc8e_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_pHeader2_vue_vue_type_style_index_0_id_3c31bc8e_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".search-box[data-v-3c31bc8e]{position:relative}.result-wrap[data-v-3c31bc8e]{position:absolute;width:300px;height:198px;min-height:198px;overflow-y:scroll;background-color:#fff;padding:10px 0;border:1px solid #cacaca;top:54px;z-index:10;border-radius:4px}.result-wrap .title[data-v-3c31bc8e]{height:30px;line-height:30px;padding:0 10px;font-size:13px;color:#666}.result-wrap .item[data-v-3c31bc8e]{height:32px;line-height:32px;font-size:14px;color:#222;cursor:pointer}.result-wrap .item .link[data-v-3c31bc8e]{display:flex;justify-content:space-between;align-items:center;color:#222;padding:4px 20px;cursor:pointer}.result-wrap .item .link[data-v-3c31bc8e]:hover{background-color:rgba(0,125,255,.1)}.result-wrap .item .link .name[data-v-3c31bc8e]{display:inline-block;width:180px;text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.focus-result[data-v-3c31bc8e],.search-result[data-v-3c31bc8e]{display:none}.focus .focus-result[data-v-3c31bc8e],.search .search-result[data-v-3c31bc8e]{display:block}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/wx-yh.bffc413.jpg";

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/qrcode_dy.e488e10.jpg";

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/qcrode.414b83a.jpg";

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/qrcode_fw.8427576.jpg";

/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_2c09329e_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57);
/* harmony import */ var _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_2c09329e_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_2c09329e_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_2c09329e_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_2c09329e_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(13);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(29);
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(30);
var ___CSS_LOADER_URL_IMPORT_2___ = __webpack_require__(31);
var ___CSS_LOADER_URL_IMPORT_3___ = __webpack_require__(32);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".global-header[data-v-2c09329e]{background-color:transparent;height:74px}.global-header .logo-wrap[data-v-2c09329e]{margin-bottom:0}.global-header .logo[data-v-2c09329e]{width:99px;margin-right:15px}.global-header strong[data-v-2c09329e]{font-size:14px;color:#fff}.global-header nav a.link[data-v-2c09329e]{color:#fff;display:inline-flex;align-items:center;padding:0 15px}.icon[data-v-2c09329e]{display:inline-block;width:22px;height:22px;margin-right:6px}.review[data-v-2c09329e]{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ")}.cate[data-v-2c09329e],.review[data-v-2c09329e]{background-size:cover}.cate[data-v-2c09329e]{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ")}.entry[data-v-2c09329e]{background-color:#ff492c;color:#fff;line-height:38px;padding:0 32px;border-radius:20px}.ant-affix strong[data-v-2c09329e],.default strong[data-v-2c09329e]{color:#007dff}.ant-affix nav a.link[data-v-2c09329e],.default nav a.link[data-v-2c09329e]{color:#555}.ant-affix .review[data-v-2c09329e],.default .review[data-v-2c09329e]{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");background-size:cover}.ant-affix .cate[data-v-2c09329e],.default .cate[data-v-2c09329e]{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");background-size:cover}.ant-affix .global-header[data-v-2c09329e],.default .global-header[data-v-2c09329e]{border-bottom:1px solid #ddd;background-color:#fff}.ant-affix[data-v-2c09329e] .ant-anchor-wrapper,.default[data-v-2c09329e] .ant-anchor-wrapper{overflow:visible}*[data-v-2c09329e]{margin:0}*[data-v-2c09329e],ul[data-v-2c09329e]{padding:0}.g-wrapper[data-v-2c09329e]{width:100%;max-width:1200px!important;margin:0 auto!important}.pad-t-10[data-v-2c09329e]{padding-top:10px}.pad-t-20[data-v-2c09329e]{padding-top:20px}.pad-b-20[data-v-2c09329e]{padding-bottom:20px}.pad-b-30[data-v-2c09329e]{padding-bottom:30px}.g-flex[data-v-2c09329e]{display:flex}.g-flex.v-center[data-v-2c09329e]{flex-direction:column}.g-flex.center[data-v-2c09329e],.g-flex.v-center[data-v-2c09329e]{justify-content:center;align-items:center}.g-flex.space-between[data-v-2c09329e]{justify-content:space-between;align-items:center}.g-flex.space-around[data-v-2c09329e]{justify-content:space-around}.footer[data-v-2c09329e]{padding:60px 0 20px}.footer .footerInfo[data-v-2c09329e]{text-align:center}.footer .footerInfo .ca_text[data-v-2c09329e]{font-size:20px;color:#555}.footer .footerInfo .qc_text[data-v-2c09329e]{font-size:15px;color:#c1c1c1;padding-top:20px}.footer .qcrodeImg[data-v-2c09329e]{width:158px;margin-bottom:70px;margin-top:10px}.display-pc[data-v-2c09329e]{display:block}.display-flex[data-v-2c09329e]{display:flex}.display-m[data-v-2c09329e]{display:none}.text-c[data-v-2c09329e]{text-align:center}.report-wrap[data-v-2c09329e]{background-color:#007dff;font-size:20px;padding:40px 0;margin-bottom:10px}.report-wrap[data-v-2c09329e],.review-btn[data-v-2c09329e]{color:#fff;text-align:center}.review-btn[data-v-2c09329e]{padding:6px 12px;background-color:#ff492c;border-radius:4px}.check-comment[data-v-2c09329e]{padding:6px 18px;color:#007dff;border:1px solid #007dff;border-radius:16px;font-size:12px}.check-comment[data-v-2c09329e]:hover{background-color:#007dff;color:#fff}.contact-btn[data-v-2c09329e]{background-color:#773aff;color:#fff;padding:16px 0;text-align:center;margin-bottom:10px;cursor:pointer}.border[data-v-2c09329e]{border:1px solid #cacaca;border-radius:4px}.headline[data-v-2c09329e]{font-family:PingFangSC-Semibold;font-size:26px;color:#333;letter-spacing:0;line-height:1.5}@media (max-width:767px){.display-m[data-v-2c09329e]{display:flex}.display-flex[data-v-2c09329e],.display-pc[data-v-2c09329e]{display:none}}.beian[data-v-2c09329e]{background-color:#2d3237;padding:40px 0}.site-width[data-v-2c09329e]{padding:10px 0;width:100%;justify-content:center;font-size:12px;margin:0 auto}.site-width[data-v-2c09329e],.site-width a[data-v-2c09329e]{display:flex;align-items:center;color:#fff}.site-width a[data-v-2c09329e]{margin:0 34px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.7@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_@nuxt_components@2.1.8@@nuxt/components/dist/loader.js??ref--0-0!./node_modules/_vue-loader@15.9.7@vue-loader/lib??vue-loader-options!./components/rightNav/index.vue?vue&type=template&id=5f550c22&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"right-wrap"},[_vm._t("default")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/rightNav/index.vue?vue&type=template&id=5f550c22&scoped=true&

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.2.2@babel-loader/lib??ref--2-0!./node_modules/_@nuxt_components@2.1.8@@nuxt/components/dist/loader.js??ref--0-0!./node_modules/_vue-loader@15.9.7@vue-loader/lib??vue-loader-options!./components/rightNav/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
/* harmony default export */ var rightNavvue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./components/rightNav/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_rightNavvue_type_script_lang_js_ = (rightNavvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/_vue-loader@15.9.7@vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/rightNav/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(64)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_rightNavvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "5f550c22",
  "00eb8f43"
  
)

/* harmony default export */ var rightNav = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.7@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_@nuxt_components@2.1.8@@nuxt/components/dist/loader.js??ref--0-0!./node_modules/_vue-loader@15.9.7@vue-loader/lib??vue-loader-options!./components/rightNav/qrcode.vue?vue&type=template&id=76300a10&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"qrcode"},[_vm._ssrNode("<img"+(_vm._ssrAttr("src",__webpack_require__(66)))+" alt data-v-76300a10>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/rightNav/qrcode.vue?vue&type=template&id=76300a10&scoped=true&

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.2.2@babel-loader/lib??ref--2-0!./node_modules/_@nuxt_components@2.1.8@@nuxt/components/dist/loader.js??ref--0-0!./node_modules/_vue-loader@15.9.7@vue-loader/lib??vue-loader-options!./components/rightNav/qrcode.vue?vue&type=script&lang=js&
//
//
//
//
//
//
/* harmony default export */ var qrcodevue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./components/rightNav/qrcode.vue?vue&type=script&lang=js&
 /* harmony default export */ var rightNav_qrcodevue_type_script_lang_js_ = (qrcodevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/_vue-loader@15.9.7@vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/rightNav/qrcode.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(67)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  rightNav_qrcodevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "76300a10",
  "cc73a526"
  
)

/* harmony default export */ var qrcode = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 79 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.7@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_@nuxt_components@2.1.8@@nuxt/components/dist/loader.js??ref--0-0!./node_modules/_vue-loader@15.9.7@vue-loader/lib??vue-loader-options!./components/header/pHeader2.vue?vue&type=template&id=3c31bc8e&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('a-layout-header',{staticClass:"global-header"},[_c('div',{staticClass:"g-wrapper g-flex space-between"},[_c('h1',{staticClass:"logo-wrap"},[_c('nuxt-link',{attrs:{"to":"/"}},[_c('img',{staticClass:"logo",attrs:{"src":__webpack_require__(28),"alt":"选型宝_企业软件的大众点评-ERP系统_BI_CRM系统_OA系统_数据库软件_BPM系统_企业邮箱..."}})]),_vm._v(" "),_c('strong',[_vm._v(_vm._s(_vm.slogan))])],1),_vm._v(" "),_c('div',{staticClass:"g-flex"},[_c('nav',{staticClass:"nav"},[_c('a',{staticClass:"link",attrs:{"href":"/","title":"写点评"}},[_c('span',{staticClass:"icon review"}),_vm._v(" "),_c('span',[_vm._v("写点评")])]),_vm._v(" "),_c('a',{staticClass:"link",attrs:{"href":"/all","title":"软件类别"}},[_c('span',{staticClass:"icon cate"}),_vm._v(" "),_c('span',[_vm._v("软件类别")])]),_vm._v(" "),_c('a',{staticClass:"link",attrs:{"href":"https://e.xuanxingbao.com/","title":"企业入驻"}},[_c('span',{staticClass:"icon"}),_vm._v(" "),_c('span',{staticClass:"entry"},[_vm._v("企业入驻")])])]),_vm._v(" "),(_vm.isShow)?_c('div',{staticClass:"search-box",class:{ focus: _vm.isFocus,search: _vm.isSearch }},[_c('a-input-search',{staticStyle:{"width":"300px"},attrs:{"placeholder":"搜索产品类别、名称，看看同行推荐啥？"},on:{"search":_vm.onSearch,"change":_vm.onChange,"focus":_vm.onFocus,"blur":_vm.onBlur},model:{value:(_vm.keywords),callback:function ($$v) {_vm.keywords=$$v},expression:"keywords"}}),_vm._v(" "),_c('div',{staticClass:"result-wrap focus-result"},[_c('div',[_c('h3',{staticClass:"title"},[_vm._v("\n              热门搜索\n            ")]),_vm._v(" "),_vm._l((_vm.hotSearchList),function(item){return _c('div',{key:item.ID,staticClass:"item"},[_c('div',{staticClass:"link",on:{"click":function($event){return _vm.handleKeyWordTagClick(item)}}},[_c('span',{staticClass:"name"},[_vm._v(_vm._s(item.names))]),_vm._v(" "),_c('span',{staticClass:"hot-icon"})])])})],2),_vm._v(" "),(_vm.historySearch)?_c('div',{staticStyle:{"margin-top":"10px"}},[_c('h3',{staticClass:"title g-flex space-between"},[_c('span',[_vm._v("历史搜索")]),_vm._v(" "),_c('span',{staticStyle:{"cursor":"pointer"},on:{"click":_vm.deleteHistorySearch}},[_c('a-icon',{attrs:{"type":"delete"}}),_vm._v("删除\n              ")],1)]),_vm._v(" "),_vm._l((_vm.historySearch),function(item){return _c('div',{key:item.ID,staticClass:"item"},[_c('div',{staticClass:"link",on:{"click":function($event){return _vm.handleKeyWordTagClick(item)}}},[_c('span',{staticClass:"name"},[_vm._v(_vm._s(item.names))]),_vm._v(" "),_c('span',{staticClass:"hot-icon"})])])})],2):_vm._e()]),_vm._v(" "),_c('div',{staticClass:"result-wrap search-result"},_vm._l((_vm.searchList),function(item){return _c('div',{key:item.ID,staticClass:"item"},[_c('div',{staticClass:"link",on:{"click":function($event){return _vm.handleKeyWordTagClick2(item)}}},[_c('span',{staticClass:"name"},[_vm._v(_vm._s(item.names))]),_vm._v(" "),_c('span',{staticStyle:{"color":"#666","font-size":"12px"}},[_vm._v(_vm._s(item.TYPE === '1' ? '产品' : '类别'))])])])}),0)],1):_vm._e()])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/header/pHeader2.vue?vue&type=template&id=3c31bc8e&scoped=true&

// EXTERNAL MODULE: ./static/lib/storage.js
var storage = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.2.2@babel-loader/lib??ref--2-0!./node_modules/_@nuxt_components@2.1.8@@nuxt/components/dist/loader.js??ref--0-0!./node_modules/_vue-loader@15.9.7@vue-loader/lib??vue-loader-options!./components/header/pHeader2.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var pHeader2vue_type_script_lang_js_ = ({
  props: {
    isShow: {
      type: Boolean,

      default() {
        return false;
      }

    }
  },

  data() {
    return {
      slogan: this.$configs.CONST.SLOGAN,
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
      const data = {
        KEY_INFO: this.keywords.trim()
      };
      const res = await this.$requests.indexSearchAutoComplete(data);

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
          name: 'company-id',
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
// CONCATENATED MODULE: ./components/header/pHeader2.vue?vue&type=script&lang=js&
 /* harmony default export */ var header_pHeader2vue_type_script_lang_js_ = (pHeader2vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/_vue-loader@15.9.7@vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/header/pHeader2.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(69)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  header_pHeader2vue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "3c31bc8e",
  "3b4daa6e"
  
)

/* harmony default export */ var pHeader2 = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 80 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.7@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_@nuxt_components@2.1.8@@nuxt/components/dist/loader.js??ref--0-0!./node_modules/_vue-loader@15.9.7@vue-loader/lib??vue-loader-options!./components/Footer.vue?vue&type=template&id=2c09329e&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('a-layout-footer',{staticClass:"footer"},[_c('a-row',[_c('a-col',[_c('a-row',{staticClass:"g-wrapper",attrs:{"getter":"16"}},_vm._l((_vm.cateInfo),function(item,index){return _c('a-col',{key:index,staticClass:"gutter-row footerInfo",attrs:{"span":"6"}},[_c('a',{staticClass:"ca_text",attrs:{"href":item.path,"title":item.text}},[_vm._v(_vm._s(item.text))]),_vm._v(" "),_c('p',{staticClass:"qc_text"},[_vm._v("\n            "+_vm._s(item.title)+"\n          ")]),_vm._v(" "),_c('img',{staticClass:"qcrodeImg",attrs:{"src":item.img,"alt":""}})])}),1)],1),_vm._v(" "),_c('a-col',{staticClass:"beian"},[_c('div',{staticClass:"site-width"},[_c('p',[_vm._v("© 2021 选型宝，All Rights Reserved.")]),_vm._v(" "),_c('p',[_c('a',{attrs:{"href":"#"}},[_vm._v("京ICP备14045422号-2 北京众智优选科技有限公司")])])]),_vm._v(" "),_c('div',{staticClass:"site-width"},[_c('p',[_vm._v("北京众智优选科技有限公司  地址：北京市朝阳区百子湾西里435号创富港436")])])])],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Footer.vue?vue&type=template&id=2c09329e&scoped=true&

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
        img: __webpack_require__(71),
        path: '/all'
      }, {
        text: '关于我们',
        title: '选型宝订阅号',
        img: __webpack_require__(72),
        path: 'http://old.xuanxingbao.com/webPC/about'
      }, {
        text: '联系我们',
        title: '选型宝小程序',
        img: __webpack_require__(73),
        path: 'http://old.xuanxingbao.com/webPC/contact-list.html'
      }, {
        text: '加入我们',
        title: '选型宝服务号',
        img: __webpack_require__(74),
        path: 'http://old.xuanxingbao.com/webPC/participate.html'
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
  
  var style0 = __webpack_require__(75)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Footervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "2c09329e",
  "8b47c43e"
  
)

/* harmony default export */ var Footer = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 81 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.7@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_@nuxt_components@2.1.8@@nuxt/components/dist/loader.js??ref--0-0!./node_modules/_vue-loader@15.9.7@vue-loader/lib??vue-loader-options!./components/Header2.vue?vue&type=template&id=5a0303a8&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"header-wrap"},[_c('pHeader',{staticClass:"display-pc",attrs:{"is-show":_vm.isShow}}),_vm._ssrNode(" "),_c('mHeader',{staticClass:"display-m"})],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Header2.vue?vue&type=template&id=5a0303a8&scoped=true&

// EXTERNAL MODULE: ./components/header/pHeader2.vue + 4 modules
var pHeader2 = __webpack_require__(79);

// EXTERNAL MODULE: ./components/header/mHeader.vue + 4 modules
var mHeader = __webpack_require__(14);

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.2.2@babel-loader/lib??ref--2-0!./node_modules/_@nuxt_components@2.1.8@@nuxt/components/dist/loader.js??ref--0-0!./node_modules/_vue-loader@15.9.7@vue-loader/lib??vue-loader-options!./components/Header2.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//


/* harmony default export */ var Header2vue_type_script_lang_js_ = ({
  name: 'Header',
  components: {
    pHeader: pHeader2["default"],
    mHeader: mHeader["default"]
  },
  props: {
    isShow: {
      type: Boolean,

      default() {
        return false;
      }

    }
  }
});
// CONCATENATED MODULE: ./components/Header2.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Header2vue_type_script_lang_js_ = (Header2vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/_vue-loader@15.9.7@vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Header2.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Header2vue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "5a0303a8",
  "d34d3c22"
  
)

/* harmony default export */ var Header2 = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(108);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("ce9c675c", content, true, context)
};

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(112);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("20af5431", content, true, context)
};

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(114);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("45be7e22", content, true, context)
};

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(118);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("48817be2", content, true, context)
};

/***/ }),
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAYAAAAWGF8bAAACYUlEQVQ4T5VUO2hUQRQ9Z9CNK9oFFKslWlkEJDYGwWgVTHgq781qoy4aCCImoiBJKZKghQZExSIJSEzz5g1+EBK1WVArXSz8gETIxkKLbOmCoM6VWfaFddmImXLm3DP33HvuJVqcQqGwoVqtahE5CGAPyW112DcArwE8Wl5eNsVi8UdzOJsvoig6QfIqgI0i8pDkC+fckseRzAHYS/IwgKqIXEqSZLaRY4Wwp6dnXXt7+ySAYyTHAdwwxnxvpSAIgs2ZTOYCgFEAs5VKZbBYLP6qfVoPYBRFsyT3A+g3xpRaETXfhWG4Wyn1RESeJ0lyfIUwn88PicgV51y3tfZDGtjV1bW+o6NjAEAvAHHOzZfL5alSqfQzxYRh2EnypYiMWmtvMwiCLW1tbZ+dc8PW2ukUqLXOAJgH4LN+D0AB2CkizyqVSl8q0eO11qdFZILkdi91jGRgjOn0WaSE+Xz+rIjccs4VrLX30kAAk865M9bauw0lUFrrdyJiqbVeInk9juObjTXSWj8GkKt/tPKktf4I4JMx5kgjPoqi8ySHPOEX59w1r38NhAvGmEMtCM95yeMk+4wxuwC4ZskkC3Ec1ySHYXhKKTW1mmQAic9wK4AFksNxHDc3ZQ7Agf9pivctgB01H2qthwFcBtBtjPE1qh1vm1wuN6CU6hUR37C5xcXF6Va2ATCSJMmdZmPvc871W2vfrsXYJJ/GcXyycVKQjh7JoyIyls1mJ2ZmZqqtiLXWm0Tkoh89kvcBDBpjfv9FmAamy0FEskqpByLySkTKIsI1LYfGTFZbXyLyleSbf62vP5BCRv/412q1AAAAAElFTkSuQmCC"

/***/ }),
/* 95 */,
/* 96 */,
/* 97 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.7@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_@nuxt_components@2.1.8@@nuxt/components/dist/loader.js??ref--0-0!./node_modules/_vue-loader@15.9.7@vue-loader/lib??vue-loader-options!./components/Review.vue?vue&type=template&id=323d7378&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"c-card"},[_c('nuxt-link',{staticClass:"top",attrs:{"to":{ name: 'productDetail-id', params: { id: _vm.info.product_id } }}},[_c('div',{staticClass:"author"},[_c('img',{staticClass:"g-avatar",attrs:{"src":_vm.info.userimage,"alt":""}}),_vm._v(" "),_c('div',{staticClass:"info"},[_c('strong',{staticClass:"name"},[_vm._v(_vm._s(_vm.info.realname))]),_vm._v(" "),_c('p',{staticClass:"title"},[_c('span',[_vm._v(_vm._s(_vm.info.company))]),_vm._v(" "),_c('span',[_vm._v(_vm._s(_vm.info.office))])])])]),_vm._v(" "),_c('div',{staticClass:"t-box"},[_c('div',{staticClass:"benchmark"},[_c('div',{staticClass:"context g-flex"},[_vm._v("对 "),_c('span',[_vm._v(_vm._s(_vm.info.productname))]),_vm._v(" 的点评")]),_vm._v(" "),_c('div',{staticClass:"g-flex space-between"},[_c('div',{staticClass:"star g-flex"},[_c('div',{staticClass:"rank"},[_vm._v("\n              "+_vm._s(_vm.info.ztgsnum.toFixed(1))+"\n              "),_c('span',[_vm._v("分")])]),_vm._v(" "),_c('Star',{attrs:{"out-width":75,"out-height":15,"decimal":_vm.decimal}})],1),_vm._v(" "),_c('div',{staticClass:"date"},[_vm._v("\n            "+_vm._s(_vm.info.lastoperationtime)+"\n          ")])])]),_vm._v(" "),_c('div',{staticClass:"detail"},[_c('p',[_vm._v("【优点】"+_vm._s(_vm.info.advantages))]),_vm._v(" "),_c('p',[_vm._v("【缺点】"+_vm._s(_vm.info.disadvantages))])]),_vm._v(" "),_c('span',{staticClass:"quota up"}),_vm._v(" "),_c('span',{staticClass:"quota down"})])])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Review.vue?vue&type=template&id=323d7378&scoped=true&

// EXTERNAL MODULE: ./components/common/starComp/StarZoom.vue + 4 modules
var StarZoom = __webpack_require__(58);

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.2.2@babel-loader/lib??ref--2-0!./node_modules/_@nuxt_components@2.1.8@@nuxt/components/dist/loader.js??ref--0-0!./node_modules/_vue-loader@15.9.7@vue-loader/lib??vue-loader-options!./components/Review.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Reviewvue_type_script_lang_js_ = ({
  components: {
    Star: StarZoom["default"]
  },
  props: {
    info: {
      type: Object,

      default() {
        return {};
      }

    }
  },
  computed: {
    decimal() {
      return this.info.ztgsnum / 5;
    }

  },
  methods: {
    navigateToDetail(info) {
      this.$router.push({
        name: 'productDetail-id',
        params: {
          id: info.product_id
        }
      });
    }

  }
});
// CONCATENATED MODULE: ./components/Review.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Reviewvue_type_script_lang_js_ = (Reviewvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/_vue-loader@15.9.7@vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Review.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(107)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Reviewvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "323d7378",
  "16a98dc4"
  
)

/* harmony default export */ var Review = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 98 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.7@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_@nuxt_components@2.1.8@@nuxt/components/dist/loader.js??ref--0-0!./node_modules/_vue-loader@15.9.7@vue-loader/lib??vue-loader-options!./components/AutoPlay.vue?vue&type=template&id=c5fda6e6&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('a-carousel',{staticClass:"txt-banner",attrs:{"autoplay":"","dots":false}},_vm._l((_vm.bannerTxt),function(item,index){return _c('div',{key:index},[_c('h3',[_c('span',{on:{"click":_vm.handleBannerPopShow}},[_vm._v(_vm._s(item))])])])}),0)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/AutoPlay.vue?vue&type=template&id=c5fda6e6&scoped=true&

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
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/AutoPlay.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(113)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_AutoPlayvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "c5fda6e6",
  "5efc8e49"
  
)

/* harmony default export */ var AutoPlay = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(128);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("4648c962", content, true, context)
};

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(130);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("4cb4d88d", content, true, context)
};

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(132);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("5647f094", content, true, context)
};

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(134);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("6abe9547", content, true, context)
};

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(138);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("551905d2", content, true, context)
};

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(140);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("5acd3818", content, true, context)
};

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(142);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("1bb611b6", content, true, context)
};

/***/ }),
/* 106 */,
/* 107 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_Review_vue_vue_type_style_index_0_id_323d7378_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(87);
/* harmony import */ var _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_Review_vue_vue_type_style_index_0_id_323d7378_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_Review_vue_vue_type_style_index_0_id_323d7378_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_Review_vue_vue_type_style_index_0_id_323d7378_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_Review_vue_vue_type_style_index_0_id_323d7378_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(13);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(109);
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(110);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".c-card[data-v-323d7378]{margin-top:10px;overflow:hidden;border-radius:6px;width:100%;margin-bottom:10px}.c-card .top[data-v-323d7378]{padding:0 4px 10px;cursor:pointer;color:#555;display:block}.c-card .top .author[data-v-323d7378]{display:flex;align-items:flex-start;padding:16px 10px}.c-card .top .author .g-avatar[data-v-323d7378]{margin-right:10px;width:50px;height:50px;border-radius:50%}.c-card .top .author .info[data-v-323d7378]{width:226px}.c-card .top .author .info .name[data-v-323d7378]{width:100%;display:inline-block;margin-bottom:5px;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;word-break:break-all;font-weight:400}.c-card .top .author .info .name span[data-v-323d7378]{color:#007dff}.c-card .top .author .info .title[data-v-323d7378]{margin:0;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;word-break:break-all}.c-card .top .author .info .title span+span[data-v-323d7378]{margin-left:10px}.c-card .top .t-box[data-v-323d7378]{background-color:#fff;padding:10px 10px 30px;border-radius:4px;position:relative}.c-card .top .t-box[data-v-323d7378]:before{position:absolute;left:26px;top:-10px;content:\"\";width:0;height:0;border-left:10px solid transparent;border-right:10px solid transparent;border-bottom:10px solid #fff}.c-card .top .t-box .benchmark[data-v-323d7378]{padding:10px}.c-card .top .t-box .benchmark .context[data-v-323d7378]{color:#222;padding-bottom:10px}.c-card .top .t-box .benchmark .context span[data-v-323d7378]{font-weight:700;display:inline-block;max-width:240px;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;margin:0 4px}.c-card .top .t-box .benchmark .star[data-v-323d7378]{align-items:center}.c-card .top .t-box .benchmark .star .rank[data-v-323d7378]{color:#fff;padding:0 4px;border-radius:4px;font-size:14px;background-color:#ff492c;white-space:nowrap;margin-right:10px}.c-card .top .t-box .benchmark .star .rank .ant-rate[data-v-323d7378]{flex:none!important}.c-card .top .t-box .benchmark .star .rank .ant-rate[data-v-323d7378] li{margin-right:4px}.c-card .top .t-box .benchmark .date[data-v-323d7378]{color:#c1c1c1;white-space:nowrap;font-size:12px}.c-card .top .t-box .quota[data-v-323d7378]{position:absolute;width:14px;height:14px}.c-card .top .t-box .quota.up[data-v-323d7378]{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");background-size:100% 100%;left:20px;top:84px}.c-card .top .t-box .quota.down[data-v-323d7378]{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");background-size:100% 100%;right:16px;bottom:34px}.c-card .top .detail[data-v-323d7378]{padding:20px;height:140px;overflow:hidden;position:relative}.c-card .top .detail p[data-v-323d7378]{-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis;display:-webkit-box}@media (max-width:767px){.review-wrapper[data-v-323d7378]{display:flex;justify-content:center}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 109 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADJElEQVRYR+1WTUhUURT+jlO6aVEQFgVCIEnOHWtRFBpCEeadSRCLilppm1qkraQfF0ZFhYugFpXQHxQUJUlT855CYGCFgVjOG4Na9UM/EBEVheHMiTszztwZ37z3bJEb7/Z93znf/c655zzCDB+a4fyYFfBfHWDprwRTKZnWwGTppy2Ag2I1GF3JAIyjejCnfuL6yvUg3wWA/Wlep8JPSwCHRBPiuAbCvHSyATKsDW6NzMHALjDf0HFkWMncngWw9B8A6IwWpBdxtFK/9c7x5lIcB3BEw4RBiRMUGRvyLICleASgNhOE0U6mlSqDw2EpxgCs0HiqZEnrPfcASzEOoDjDKEINPbCeeEj+A8iUCiDeRpFYTz7PsQQcFG/AKMuoTdfNQ/LXAMqzNy/aROboQzteQQEsxTMAa7JBqJrM6FMPyQcB1GQ9phaKRK8U4tkKYCnuAWjQkm8nM3rbQ/I7ALZquJ1kWLeceFMEcNDfAaZjWuOcJNM67CF5C4BLGu8imdZeN16OAA5WrQUnVMeXpIg0gt+JWhqI/XTs9oblCzFRrKyvSOO+w5cI0P2xt9MTIEUYwJZs/fgqRWLNbkFYBk4D3K7h+siw6t14yStOglgGGgG+m0NKjdqcd5sflOuqSuFLfJ4uL/OyMgLq/R0grfapEgyREV3naL/0bwQo/4l9xZw/FRR+9cXNhawDQdEDRpMN4TLi6Cw0clmK/QDO2vAGAT5IRuyxp1fAUrwHsNQeTB/A3I25JV0UHv6lY1iK6wB2F07C3SCcp0jsuR1G6wHxCcAiZ8toBImJEPW9/JjtHXETwA4Xq78B1ExGtDcfpwvoA1DnVjN9lyssS6E2ndp4bsd2desCVB1VPZ1P3stgKdTtlQtux0VASFQjAeXC5M+GfcB8AY2r5mM8rhrO76LAWUDaztxxaheRsZJMazS3EW1myFRuKxnWuYI9oDWVKoOa/YunxGA6RGb0lK0uKfYBaNPGcRZGhSeq/Tbc7C+HD3tS/wK0BIR+MIbJsPqdbOZQYAHi3AbCMgBlYKi98oJMK3fCakE8/xO6ddi/fp8VMOvAX1rFJTDwzDxrAAAAAElFTkSuQmCC"

/***/ }),
/* 110 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADIklEQVRYR+2WS2gTURSG/z91IyKuFFRwIbhoZlLrRi2+FetMLCIWEUEEhVqqdKFi3QhWxILgA3wh+ECpulBxYW1ubAULiqAb0d6pIApCF1rc2YobkyOTmmQS55GIUBe9u+Se/5wv/73n3BATvDjB9TEJ8H87IEnjDIRLATQAoiB8BaKbSn8MuzuSNCwAq3Jayidk+Rki1/nY+VCuC3RAkuZdCLb6FBoDcItKt/lBiG0eBHDKZ+8LgC4qfd675wsgttEB8GRohxBtTOnL3hhpql2ATM378M7iDqrB2/mYAADzKYDVES36DTWyko+cN/k4scxOEEcjdKNgdj1TQy/dOH+AYPvLcsseKudKlQBu1UtM6X3BAJaxF+TFyCFFnmVq8EDVAMAAlV4TDGAvmgn87AFkSQREikpvLABUrvtKpWcFArgbsrVhKsbGOgHpCIQQXGVat5RcRFc3OnoYZAsgcwK0n6l0bi9yEIlVtw6xbBcEi/9MxnaqwQu+7bgxMR9Z6QKwzWe/4FwkQM6NDbWzEat5B2BGSTLJrmB66HnYMYltvgZQXxZzgkofqciBkAs2jB8S54DjDqbgU/JrzRia2asfVAdgl8+GYPtL7oRt3gSw0/NdP5VuzH+u7Aia4vOQiWkA038LS5KEH4HxBOC6QgzRyJTurw7AMi+DaA1KEgQgyUQrRDzjWi5QOe3e+EgHJGk0Q3i/IBIcY1p3hv3q3MW1jThABWDeeCwdZMRmnx6uGEAsczUI910YX1UVj90FxPitHAFkLZUzVA4e/Bxb8eVg7FmxuJxh2nGf2tAlllkH8o6nuEtu+BUP7AKxzKMgvDb3UOlN0cWN7SBPA5hdjA0u7gsgtnkNwG6P7d1Ma28b+XJIMnEcIrnhUlgxLGOvfhEGXjgCSRr1ELpv+WaP4BCV9vt3U+RrWjgX2cw5CLZ4dBo/pCFqSJU4ILYpngTuZdlPpfsibS8fUCI3mHZ2Reny+0UH8iOTuIcpaOdDPVJJErESSVC6AWRAOcaUE/0/wpM4cg5UApHr0Ma6aex7+73S+D8cqFb4r+L/mQN/CzQJ8AvpfC0wuO9Q/QAAAABJRU5ErkJggg=="

/***/ }),
/* 111 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_model_vue_vue_type_style_index_0_id_515bd28e_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(88);
/* harmony import */ var _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_model_vue_vue_type_style_index_0_id_515bd28e_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_model_vue_vue_type_style_index_0_id_515bd28e_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_model_vue_vue_type_style_index_0_id_515bd28e_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_model_vue_vue_type_style_index_0_id_515bd28e_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".model-wrap[data-v-515bd28e]{position:fixed;left:0;right:0;top:0;bottom:0;z-index:10}.model[data-v-515bd28e]{width:100%;height:100%;background-color:rgba(6,21,26,.67)}.content[data-v-515bd28e]{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%)}.close-btn[data-v-515bd28e]{position:absolute;top:0;right:-60px;cursor:pointer}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 113 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_AutoPlay_vue_vue_type_style_index_0_id_c5fda6e6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(89);
/* harmony import */ var _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_AutoPlay_vue_vue_type_style_index_0_id_c5fda6e6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_AutoPlay_vue_vue_type_style_index_0_id_c5fda6e6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_AutoPlay_vue_vue_type_style_index_0_id_c5fda6e6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_AutoPlay_vue_vue_type_style_index_0_id_c5fda6e6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(13);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(115);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".txt-banner[data-v-c5fda6e6]{height:50px;overflow-y:hidden}.ant-carousel[data-v-c5fda6e6] .slick-slide{display:block;width:100%;text-align:center;height:30px;line-height:30px;overflow:hidden;margin-top:20px}.ant-carousel[data-v-c5fda6e6] .custom-slick-arrow{width:20px;height:20px;font-size:16px;color:#fff;background-color:rgba(31,45,61,.11);opacity:.3}.ant-carousel[data-v-c5fda6e6] .custom-slick-arrow:before{display:none}.ant-carousel[data-v-c5fda6e6] .custom-slick-arrow:hover{opacity:.5}.ant-carousel[data-v-c5fda6e6] .slick-slide h3{color:#fff;font-size:22px}h3>span[data-v-c5fda6e6]{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");background-repeat:no-repeat;background-size:contain;padding-left:30px;cursor:pointer}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icon_fire.4101091.png";

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/fire.aa1086e.png";

/***/ }),
/* 117 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_BarZoom_vue_vue_type_style_index_0_id_479569e8_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90);
/* harmony import */ var _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_BarZoom_vue_vue_type_style_index_0_id_479569e8_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_BarZoom_vue_vue_type_style_index_0_id_479569e8_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_BarZoom_vue_vue_type_style_index_0_id_479569e8_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_BarZoom_vue_vue_type_style_index_0_id_479569e8_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".bar-box[data-v-479569e8]{width:100%;height:27.5px;margin:10px auto}.bar-box .bar[data-v-479569e8]{height:27.5px;display:flex;justify-content:space-between;align-items:center;width:0;box-sizing:border-box;padding:0 10px;border-radius:50px;transition:width .8s ease-in-out}.bar-box .bar.s1[data-v-479569e8]{background:#f55a53;background:linear-gradient(90deg,#f55a53,#eb8a5d)}.bar-box .bar.s2[data-v-479569e8]{background:#f2a937;background:linear-gradient(90deg,#f2a937,#ebd458)}.bar-box .bar.s3[data-v-479569e8]{background:#5ecd80;background:linear-gradient(90deg,#5ecd80,#80cca5)}.bar-box .bar.s4[data-v-479569e8]{background:#37a2f1;background:linear-gradient(90deg,#37a2f1,#6cd2ff)}.bar-box .bar span[data-v-479569e8]{font-size:13px;color:#fff}.bar-box .bar span.name[data-v-479569e8]{width:80%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.7@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_@nuxt_components@2.1.8@@nuxt/components/dist/loader.js??ref--0-0!./node_modules/_vue-loader@15.9.7@vue-loader/lib??vue-loader-options!./components/pop/model.vue?vue&type=template&id=515bd28e&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"model-wrap"},[_vm._ssrNode("<div class=\"model\" data-v-515bd28e></div> "),_vm._ssrNode("<div class=\"content\" data-v-515bd28e>","</div>",[_vm._ssrNode("<div class=\"close-btn\" data-v-515bd28e>","</div>",[_c('a-icon',{staticStyle:{"font-size":"30px","color":"#dadada"},attrs:{"type":"close"}})],1),_vm._ssrNode(" "),_vm._t("content")],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/pop/model.vue?vue&type=template&id=515bd28e&scoped=true&

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.2.2@babel-loader/lib??ref--2-0!./node_modules/_@nuxt_components@2.1.8@@nuxt/components/dist/loader.js??ref--0-0!./node_modules/_vue-loader@15.9.7@vue-loader/lib??vue-loader-options!./components/pop/model.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var modelvue_type_script_lang_js_ = ({
  methods: {
    handleBannerPopHide() {
      this.$emit('handleBannerPopHide');
    }

  }
});
// CONCATENATED MODULE: ./components/pop/model.vue?vue&type=script&lang=js&
 /* harmony default export */ var pop_modelvue_type_script_lang_js_ = (modelvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/_vue-loader@15.9.7@vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/pop/model.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(111)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pop_modelvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "515bd28e",
  "2ab237a8"
  
)

/* harmony default export */ var model = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 124 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.7@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_@nuxt_components@2.1.8@@nuxt/components/dist/loader.js??ref--0-0!./node_modules/_vue-loader@15.9.7@vue-loader/lib??vue-loader-options!./components/BarZoom.vue?vue&type=template&id=479569e8&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"bar-box"},[_vm._ssrNode("<div"+(_vm._ssrClass("bar",_vm.index && _vm.index <= 3 ? 's'+ _vm.index : 's4'))+(_vm._ssrStyle(null,_vm.start ? 'width:' + _vm.width + '%' : 0, null))+" data-v-479569e8><span class=\"name\" data-v-479569e8>"+_vm._ssrEscape("\n      "+_vm._s(_vm.index)+". "+_vm._s(_vm.text)+"\n    ")+"</span> <span class=\"score\" data-v-479569e8>"+_vm._ssrEscape("\n      "+_vm._s(_vm.score)+"\n    ")+"</span></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/BarZoom.vue?vue&type=template&id=479569e8&scoped=true&

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.2.2@babel-loader/lib??ref--2-0!./node_modules/_@nuxt_components@2.1.8@@nuxt/components/dist/loader.js??ref--0-0!./node_modules/_vue-loader@15.9.7@vue-loader/lib??vue-loader-options!./components/BarZoom.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var BarZoomvue_type_script_lang_js_ = ({
  props: {
    score: {
      type: Number,
      default: 0
    },
    index: {
      type: Number,
      default: 0
    },
    text: {
      type: String,
      default: ''
    }
  },

  data() {
    return {
      start: false
    };
  },

  computed: {
    width() {
      const splitPoint = 0;
      const max = 5.5;
      const minWidth = 25;

      if (this.score <= splitPoint) {
        return minWidth;
      } else {
        const v = (this.score - splitPoint) / (max - splitPoint) * 100;
        return v > minWidth ? v : minWidth;
      }
    }

  },

  mounted() {
    setTimeout(() => {
      this.start = true;
    }, 50);
  }

});
// CONCATENATED MODULE: ./components/BarZoom.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_BarZoomvue_type_script_lang_js_ = (BarZoomvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/_vue-loader@15.9.7@vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/BarZoom.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(117)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_BarZoomvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "479569e8",
  "20b63cb0"
  
)

/* harmony default export */ var BarZoom = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 125 */,
/* 126 */,
/* 127 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_case_vue_vue_type_style_index_0_id_5317c8c2_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(99);
/* harmony import */ var _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_case_vue_vue_type_style_index_0_id_5317c8c2_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_case_vue_vue_type_style_index_0_id_5317c8c2_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_case_vue_vue_type_style_index_0_id_5317c8c2_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_case_vue_vue_type_style_index_0_id_5317c8c2_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".article-item[data-v-5317c8c2]{padding:12px 0;cursor:pointer}.article-item[data-v-5317c8c2]:hover{box-shadow:5px 4px 15px 0 rgba(0,0,0,.1);border-radius:4px}.case-img[data-v-5317c8c2]{width:260px;height:154px;border-radius:4px}.detail[data-v-5317c8c2]{margin-left:24px;flex-direction:column;max-width:530px}.detail .top[data-v-5317c8c2]{flex:1}.detail .title[data-v-5317c8c2]{font-size:18px;color:#222;transition:.5s;margin-bottom:10px}.detail .title[data-v-5317c8c2]:hover{color:#007dff;text-decoration:underline}.detail .tags>span[data-v-5317c8c2]{display:inline-block;margin-bottom:4px;padding:4px 8px;color:#ff492c;border:1px solid #ff492c;border-radius:20px;font-size:12px}.views img[data-v-5317c8c2]{width:16px;margin-right:4px}.time[data-v-5317c8c2]{font-size:14px;color:#a3a3a3;margin-left:20px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 129 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_news_vue_vue_type_style_index_0_id_b3d42642_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(100);
/* harmony import */ var _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_news_vue_vue_type_style_index_0_id_b3d42642_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_news_vue_vue_type_style_index_0_id_b3d42642_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_news_vue_vue_type_style_index_0_id_b3d42642_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_news_vue_vue_type_style_index_0_id_b3d42642_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".article-item[data-v-b3d42642]{padding:12px 0;cursor:pointer}.article-item[data-v-b3d42642]:hover{box-shadow:5px 4px 15px 0 rgba(0,0,0,.1);border-radius:4px}.case-img[data-v-b3d42642]{width:260px;height:154px;border-radius:4px}.detail[data-v-b3d42642]{margin-left:24px;flex-direction:column;max-width:530px}.detail .top[data-v-b3d42642]{flex:1}.detail .title[data-v-b3d42642]{text-overflow:ellipsis;overflow:hidden;display:-webkit-box;-webkit-line-clamp:2;line-clamp:2;-webkit-box-orient:vertical;font-size:18px;color:#222;transition:.5s;margin-bottom:10px}.detail .title[data-v-b3d42642]:hover{color:#007dff;text-decoration:underline}.detail .tags>span[data-v-b3d42642]{display:inline-block;margin-bottom:4px;padding:4px 8px;color:#ff8214;border:1px solid #fff4da;border-radius:20px;font-size:12px}.views img[data-v-b3d42642]{width:16px;margin-right:4px}.time[data-v-b3d42642]{font-size:14px;color:#a3a3a3;margin-left:20px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 131 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_reviewSwiper_vue_vue_type_style_index_0_id_64d2aa7b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(101);
/* harmony import */ var _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_reviewSwiper_vue_vue_type_style_index_0_id_64d2aa7b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_reviewSwiper_vue_vue_type_style_index_0_id_64d2aa7b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_reviewSwiper_vue_vue_type_style_index_0_id_64d2aa7b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_reviewSwiper_vue_vue_type_style_index_0_id_64d2aa7b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".swiper-item[data-v-64d2aa7b]{padding-right:10px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 133 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_banner_vue_vue_type_style_index_0_id_34020d05_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(102);
/* harmony import */ var _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_banner_vue_vue_type_style_index_0_id_34020d05_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_banner_vue_vue_type_style_index_0_id_34020d05_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_banner_vue_vue_type_style_index_0_id_34020d05_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_banner_vue_vue_type_style_index_0_id_34020d05_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".content-wrap[data-v-34020d05]{width:300px;height:534px;background-image:url(https://img.xuanxingbao.com/bgmc.png);background-size:cover;position:relative}.title[data-v-34020d05]{font-size:50px;color:#f3db99;font-weight:700;text-shadow:1px 1px 2px #000;padding-top:24%}.mini-program-img[data-v-34020d05]{width:100%;position:absolute;left:0;bottom:90px}.mini-program-img .txt[data-v-34020d05]{color:#fff;margin-bottom:10px}.mini-program-img .img[data-v-34020d05]{width:30%}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 135 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return handleAvatar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return timestamp2date; });
/* unused harmony export validate */
function formatNumber(n) {
  const str = n.toString();
  return str[1] ? str : `0${str}`;
}

function handleAvatar(attrName, item) {
  // const defaultAvatar = '@/assets/images/avatar.jpg'
  const defaultAvatar = '/assets/images/avatar.jpg';

  if (item[attrName]) {
    if (!item[attrName].includes('http')) {
      if (!item[attrName].includes('jpg') && !item[attrName].includes('JPG') && !item[attrName].includes('PNG')) {
        item[attrName] = defaultAvatar;
      } else {
        item[attrName] = 'https://www.xuanxingbao.com/' + item[attrName];
      }
    }
  } else {
    item[attrName] = defaultAvatar;
  }

  return item;
}
function timestamp2date(timestamp) {
  let date = new Date(timestamp);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const t1 = [year, month, day].map(formatNumber).join('-');
  return `${t1}`;
}
/**
 * 合法性检查
 * @param {*} form 被检查的数据
 * @param {*}
 */

function validate(form) {
  let validator = {
    REALNAME: {
      rules: {
        required: true,
        min: 2,
        max: 8
      },
      messages: {
        require: '请输入您的姓名!',
        min: '请按要求输入您的姓名!',
        max: '请按要求输入您的姓名!'
      }
    },
    NICKNAME: {
      rules: {
        required: true,
        min: 2,
        max: 8
      },
      messages: {
        require: '请输入您的姓名!',
        min: '请按要求输入您的姓名!',
        max: '请按要求输入您的姓名!'
      }
    },
    COMPANY: {
      rules: {
        required: true
      },
      messages: {
        require: '请填写公司!'
      }
    },
    POSITION: {
      rules: {
        required: true
      },
      messages: {
        require: '请填写职位!'
      }
    },
    PHONE: {
      rules: {
        required: true,
        mobile: true
      },
      messages: {
        require: '请填写手机号!',
        mobile: '手机号码格式不合法!'
      }
    },
    USER_EMAIL: {
      rules: {
        required: true,
        email: true
      },
      messages: {
        require: '请填写邮箱!',
        email: '您输入的邮箱不合法!'
      }
    }
  };
  let isValid = true;
  let data = null;

  for (let key in form) {
    if (!isValid) {
      break;
    }

    let value = form[key];

    for (let rule in validator[key].rules) {
      let reg = null;

      switch (rule) {
        case 'required':
          if (!value) {
            isValid = false;
          }

          break;

        case 'min':
          if (value === null || value.length < validator[key].rules[rule]) {
            isValid = false;
          }

          break;

        case 'max':
          if (value === null || value.length > validator[key].rules[rule]) {
            isValid = false;
          }

          break;

        case 'mobile':
          reg = new RegExp('^[1]([3-9])[0-9]{9}$');

          if (!reg.test(value)) {
            isValid = false;
          }

          break;

        case 'captcha':
          reg = new RegExp('^[\\d]{4}$');

          if (!reg.test(value)) {
            isValid = false;
          }

          break;

        case 'email':
          reg = new RegExp('^[_a-z0-9-]+(\\.[_a-z0-9-]+)*@[a-z0-9-]+(\\.[a-z0-9-]+)*(\\.[a-z]{2,})$');

          if (!reg.test(value)) {
            isValid = false;
          }

          break;
      }

      if (!isValid) {
        data = {
          name: key,
          msg: validator[key].messages[rule]
        };
      }
    }
  }

  return data;
}

/***/ }),
/* 136 */,
/* 137 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_SearchBox_vue_vue_type_style_index_0_id_8b3cb2cc_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(103);
/* harmony import */ var _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_SearchBox_vue_vue_type_style_index_0_id_8b3cb2cc_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_SearchBox_vue_vue_type_style_index_0_id_8b3cb2cc_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_SearchBox_vue_vue_type_style_index_0_id_8b3cb2cc_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_SearchBox_vue_vue_type_style_index_0_id_8b3cb2cc_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".search-wrapper[data-v-8b3cb2cc]{position:absolute;width:100%;left:0;bottom:140px}.search-wrapper .search-box p[data-v-8b3cb2cc]{color:#fff;text-align:center;font-weight:700;font-size:2rem}.search-wrapper .search-box .search-bg[data-v-8b3cb2cc]{margin:0 auto;height:70px;display:flex;flex-direction:column;position:relative;z-index:10}.search-wrapper .search-box .search-bg .input[data-v-8b3cb2cc]{border:none}.search-wrapper .search-box .search-bg .input[data-v-8b3cb2cc] input{border:none!important;height:70px;font-size:18px;padding-left:20px}.search-wrapper .search-box .search-bg .input[data-v-8b3cb2cc] input::-webkit-input-placeholder{color:#222}.search-wrapper .search-box .search-bg .input[data-v-8b3cb2cc] input:active,.search-wrapper .search-box .search-bg .input[data-v-8b3cb2cc] input:focus{border:none!important;box-shadow:none}.search-wrapper .search-box .search-bg[data-v-8b3cb2cc] .ant-input-search-button{width:86px;height:70px;background-color:#007dff;border-color:#007dff;font-size:24px}.search-wrapper .search-box .search-bg[data-v-8b3cb2cc] .ant-input-group-addon{background-color:transparent}.search-wrapper .search-box .search-bg[data-v-8b3cb2cc] .ant-input-affix-wrapper .ant-input-suffix{font-size:30px;margin-right:16px}.search-wrapper .search-box .search-bg[data-v-8b3cb2cc] .ant-input-affix-wrapper .ant-input:not(:last-child){padding-right:92px}.search-wrapper .search-box .search-bg[data-v-8b3cb2cc] .ant-input-group{border-radius:12px;overflow:hidden}.search-wrapper .search-box .search-bg .result-wrap[data-v-8b3cb2cc]{width:calc(100% - .7px);height:198px;min-height:198px;overflow-y:scroll;background-color:#fff;padding:10px 0;border-top:1px solid #cacaca}.search-wrapper .search-box .search-bg .result-wrap .title[data-v-8b3cb2cc]{font-size:13px;color:#666;padding-left:10px;padding-right:10px}.search-wrapper .search-box .search-bg .result-wrap .item .link[data-v-8b3cb2cc]{display:flex;justify-content:space-between;align-items:center;color:#222;padding:4px 20px;cursor:pointer}.search-wrapper .search-box .search-bg .result-wrap .item[data-v-8b3cb2cc]:hover{background-color:rgba(0,125,255,.1)}.search-wrapper .search-box .search-bg .focus-result[data-v-8b3cb2cc],.search-wrapper .search-box .search-bg .search-result[data-v-8b3cb2cc]{display:none}.search-wrapper .search-box .focus[data-v-8b3cb2cc] .ant-input-group,.search-wrapper .search-box .search[data-v-8b3cb2cc] .ant-input-group{border-radius:12px 12px 0 0}.search-wrapper .search-box .focus[data-v-8b3cb2cc] .ant-input,.search-wrapper .search-box .focus[data-v-8b3cb2cc] .ant-input-group-addon,.search-wrapper .search-box .search[data-v-8b3cb2cc] .ant-input,.search-wrapper .search-box .search[data-v-8b3cb2cc] .ant-input-group-addon{border-radius:0}.search-wrapper .search-box .focus .result-wrap[data-v-8b3cb2cc],.search-wrapper .search-box .search .result-wrap[data-v-8b3cb2cc]{border-radius:0 0 12px 12px}.search-wrapper .search-box .focus .focus-result[data-v-8b3cb2cc],.search-wrapper .search-box .search .search-result[data-v-8b3cb2cc]{display:block}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 139 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_CategoryRank_vue_vue_type_style_index_0_id_be515b54_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(104);
/* harmony import */ var _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_CategoryRank_vue_vue_type_style_index_0_id_be515b54_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_CategoryRank_vue_vue_type_style_index_0_id_be515b54_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_CategoryRank_vue_vue_type_style_index_0_id_be515b54_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_CategoryRank_vue_vue_type_style_index_0_id_be515b54_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "[data-v-be515b54] .slick-list{width:204px}.c-card[data-v-be515b54]{width:389px;margin-top:10px;overflow:hidden;border-radius:6px;min-width:350px}.c-card[data-v-be515b54],.c-card .top[data-v-be515b54]{background-color:#fff}.c-card .top[data-v-be515b54]{padding:20px 20px 10px}.c-card .top .t-box[data-v-be515b54]{display:flex;justify-content:space-between;align-items:center;margin-bottom:15px;flex-wrap:nowrap}.c-card .top .t-box .show[data-v-be515b54]{font-size:11px;color:#333;display:flex;flex-wrap:nowrap;background:#f3f3f3;border:1px solid #ccc;border-radius:10px;padding:2px 8px}.c-card .top .t-box .show text[data-v-be515b54]{display:inline-block;transform:translate(5px,-1.5px) scaleX(.5)}.c-card .bottom[data-v-be515b54]{display:flex;justify-content:space-between;align-items:center;padding:0 15px 10px 0}.c-card .bottom .fire[data-v-be515b54]{position:relative;right:0;left:22px}.c-card .bottom .fire img[data-v-be515b54]{width:13px;height:18px}.c-card .bottom .stat[data-v-be515b54]{font-size:13px;margin-right:10px;color:#ff492c;margin-bottom:0}.c-card .bottom .people[data-v-be515b54]{padding:5px;display:flex;margin-left:5px;width:50%;overflow:hidden;max-width:50%;flex-shrink:0;transition:.5s ease;position:relative}.c-card .bottom .people[data-v-be515b54]:after{content:\"\";width:25px;height:30px;top:0;right:0;position:absolute;background:#fff;background:linear-gradient(270deg,#fff,hsla(0,0%,100%,0))}.c-card .bottom .people img[data-v-be515b54]{width:22.5px;height:22.5px;border:3px solid #fff;border-radius:50px;display:inline-block}.c-card .h2[data-v-be515b54]{font-size:16px;display:block}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 141 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_ProductCard_vue_vue_type_style_index_0_id_65e91831_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(105);
/* harmony import */ var _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_ProductCard_vue_vue_type_style_index_0_id_65e91831_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_ProductCard_vue_vue_type_style_index_0_id_65e91831_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_ProductCard_vue_vue_type_style_index_0_id_65e91831_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_ProductCard_vue_vue_type_style_index_0_id_65e91831_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".ant-card .title[data-v-65e91831]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.ant-card[data-v-65e91831] .ant-card-body{width:264px;padding:14px}.ant-card .stars[data-v-65e91831]{width:178px}.ant-card .stars .ant-rate-text[data-v-65e91831]{color:#ff492c}.ant-card .img-wrap[data-v-65e91831]{text-align:center}.ant-card .img-wrap img[data-v-65e91831]{margin:20px auto 0;display:block}@media (max-width:767px){.ant-card[data-v-65e91831] .ant-card-body{width:100%}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.7@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_@nuxt_components@2.1.8@@nuxt/components/dist/loader.js??ref--0-0!./node_modules/_vue-loader@15.9.7@vue-loader/lib??vue-loader-options!./components/index/case.vue?vue&type=template&id=5317c8c2&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('a-row',{staticClass:"article-list",attrs:{"gutter":32}},_vm._l((_vm.caseList),function(item){return _c('a-col',{key:item.case_id,staticClass:"article-item g-flex",attrs:{"span":"12"},on:{"click":function($event){return _vm.navigateToDetail(item)}}},[_c('div',{staticClass:"link"},[_c('img',{staticClass:"case-img",attrs:{"src":item.head_image,"alt":""}})]),_vm._v(" "),_c('div',{staticClass:"detail g-flex"},[_c('div',{staticClass:"top"},[_c('div',{staticClass:"link"},[_c('div',{staticClass:"title"},[_vm._v("\n            "+_vm._s(item.title)+"\n          ")])]),_vm._v(" "),_c('div',{staticClass:"tags"},[_c('span',[_vm._v(_vm._s(item.category_name))]),_vm._v(" "),_c('span',[_vm._v(_vm._s(item.industry))]),_vm._v(" "),(item.factory_short_name)?_c('span',[_vm._v(_vm._s(item.factory_short_name))]):_vm._e()])]),_vm._v(" "),_c('div',{staticClass:"info g-flex"},[_c('div',{staticClass:"views g-flex center"},[_c('img',{attrs:{"src":__webpack_require__(94),"alt":""}}),_vm._v(" "),_c('span',[_vm._v(_vm._s(item.browsenum || 0))])]),_vm._v(" "),_c('div',{staticClass:"time"},[_vm._v("\n          "+_vm._s(item.time_created)+"\n        ")])])])])}),1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/index/case.vue?vue&type=template&id=5317c8c2&scoped=true&

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.2.2@babel-loader/lib??ref--2-0!./node_modules/_@nuxt_components@2.1.8@@nuxt/components/dist/loader.js??ref--0-0!./node_modules/_vue-loader@15.9.7@vue-loader/lib??vue-loader-options!./components/index/case.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var casevue_type_script_lang_js_ = ({
  name: 'Case',
  props: {
    caseList: {
      type: Array,

      default() {
        return [];
      }

    }
  },
  methods: {
    navigateToDetail(item) {
      this.$router.push({
        name: 'newsCase-id',
        params: {
          id: item.case_id
        },
        query: {
          type: 'case'
        }
      });
    }

  }
});
// CONCATENATED MODULE: ./components/index/case.vue?vue&type=script&lang=js&
 /* harmony default export */ var index_casevue_type_script_lang_js_ = (casevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/_vue-loader@15.9.7@vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/index/case.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(127)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  index_casevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "5317c8c2",
  "412985a0"
  
)

/* harmony default export */ var index_case = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 149 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.7@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_@nuxt_components@2.1.8@@nuxt/components/dist/loader.js??ref--0-0!./node_modules/_vue-loader@15.9.7@vue-loader/lib??vue-loader-options!./components/index/news.vue?vue&type=template&id=b3d42642&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('a-row',{staticClass:"article-list",attrs:{"gutter":32}},_vm._l((_vm.newsList),function(item){return _c('a-col',{key:item.news_id,staticClass:"article-item g-flex",attrs:{"span":"12"},on:{"click":function($event){return _vm.navigateToDetail(item)}}},[_c('div',{staticClass:"link"},[_c('img',{staticClass:"case-img",attrs:{"src":item.head_image,"alt":""}})]),_vm._v(" "),_c('div',{staticClass:"detail g-flex"},[_c('div',{staticClass:"top"},[_c('div',{staticClass:"link"},[_c('div',{staticClass:"title"},[_vm._v("\n            "+_vm._s(item.title)+"\n          ")])])]),_vm._v(" "),_c('div',{staticClass:"info g-flex"},[_c('div',{staticClass:"views g-flex center"},[_c('img',{attrs:{"src":__webpack_require__(94),"alt":""}}),_vm._v(" "),_c('span',[_vm._v(_vm._s(item.browsenum || 0))])]),_vm._v(" "),_c('div',{staticClass:"time"},[_vm._v("\n          "+_vm._s(item.time_created)+"\n        ")])])])])}),1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/index/news.vue?vue&type=template&id=b3d42642&scoped=true&

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.2.2@babel-loader/lib??ref--2-0!./node_modules/_@nuxt_components@2.1.8@@nuxt/components/dist/loader.js??ref--0-0!./node_modules/_vue-loader@15.9.7@vue-loader/lib??vue-loader-options!./components/index/news.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var newsvue_type_script_lang_js_ = ({
  name: 'News',
  props: {
    newsList: {
      type: Array,

      default() {
        return [];
      }

    }
  },
  methods: {
    navigateToDetail(item) {
      this.$router.push({
        name: 'newsCase-id',
        params: {
          id: item.news_id
        },
        query: {
          type: 'news'
        }
      });
    }

  }
});
// CONCATENATED MODULE: ./components/index/news.vue?vue&type=script&lang=js&
 /* harmony default export */ var index_newsvue_type_script_lang_js_ = (newsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/_vue-loader@15.9.7@vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/index/news.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(129)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  index_newsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "b3d42642",
  "d9efe87a"
  
)

/* harmony default export */ var news = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 150 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.7@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_@nuxt_components@2.1.8@@nuxt/components/dist/loader.js??ref--0-0!./node_modules/_vue-loader@15.9.7@vue-loader/lib??vue-loader-options!./components/swiper/reviewSwiper.vue?vue&type=template&id=64d2aa7b&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"swiper-wrap"},[_c('a-carousel',{attrs:{"autoplay":"","dots":_vm.dots,"slides-to-show":3,"lazy-load":true,"speed":1000}},_vm._l((_vm.list),function(item,index){return _c('div',{key:index,staticClass:"swiper-item"},[_c('Review',{attrs:{"info":item}})],1)}),0)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/swiper/reviewSwiper.vue?vue&type=template&id=64d2aa7b&scoped=true&

// EXTERNAL MODULE: ./components/Review.vue + 4 modules
var Review = __webpack_require__(97);

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.2.2@babel-loader/lib??ref--2-0!./node_modules/_@nuxt_components@2.1.8@@nuxt/components/dist/loader.js??ref--0-0!./node_modules/_vue-loader@15.9.7@vue-loader/lib??vue-loader-options!./components/swiper/reviewSwiper.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var reviewSwipervue_type_script_lang_js_ = ({
  components: {
    Review: Review["default"]
  },
  props: {
    list: {
      type: Array,

      default() {
        return [];
      }

    }
  },

  data() {
    return {
      dots: false
    };
  }

});
// CONCATENATED MODULE: ./components/swiper/reviewSwiper.vue?vue&type=script&lang=js&
 /* harmony default export */ var swiper_reviewSwipervue_type_script_lang_js_ = (reviewSwipervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/_vue-loader@15.9.7@vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/swiper/reviewSwiper.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(131)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  swiper_reviewSwipervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "64d2aa7b",
  "18fb69c4"
  
)

/* harmony default export */ var reviewSwiper = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Review: __webpack_require__(97).default})


/***/ }),
/* 151 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.7@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_@nuxt_components@2.1.8@@nuxt/components/dist/loader.js??ref--0-0!./node_modules/_vue-loader@15.9.7@vue-loader/lib??vue-loader-options!./components/pop/banner.vue?vue&type=template&id=34020d05&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('model',{on:{"handleBannerPopHide":_vm.handleBannerPopHide}},[_c('div',{staticClass:"content-wrap",attrs:{"slot":"content"},slot:"content"},[_c('div',{staticClass:"title text-c"},[_vm._v("\n      "+_vm._s(_vm.recommendCate)+"软件\n    ")]),_vm._v(" "),_c('div',{staticClass:"mini-program-img text-c"},[_c('div',{staticClass:"txt"},[_vm._v("\n        扫码去点评\n      ")]),_vm._v(" "),_c('img',{staticClass:"img",attrs:{"src":("data:image/jpeg;base64," + _vm.imgUrl),"alt":""}})])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/pop/banner.vue?vue&type=template&id=34020d05&scoped=true&

// EXTERNAL MODULE: ./components/pop/model.vue + 4 modules
var model = __webpack_require__(123);

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.2.2@babel-loader/lib??ref--2-0!./node_modules/_@nuxt_components@2.1.8@@nuxt/components/dist/loader.js??ref--0-0!./node_modules/_vue-loader@15.9.7@vue-loader/lib??vue-loader-options!./components/pop/banner.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var bannervue_type_script_lang_js_ = ({
  components: {
    model: model["default"]
  },
  props: {
    imgUrl: {
      type: String,

      default() {
        return '';
      }

    },
    recommendCate: {
      type: String,

      default() {
        return '';
      }

    }
  },
  methods: {
    handleBannerPopHide() {
      this.$emit('handleBannerPopHide');
    }

  }
});
// CONCATENATED MODULE: ./components/pop/banner.vue?vue&type=script&lang=js&
 /* harmony default export */ var pop_bannervue_type_script_lang_js_ = (bannervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/_vue-loader@15.9.7@vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/pop/banner.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(133)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pop_bannervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "34020d05",
  "733e423d"
  
)

/* harmony default export */ var banner = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 152 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.7@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_@nuxt_components@2.1.8@@nuxt/components/dist/loader.js??ref--0-0!./node_modules/_vue-loader@15.9.7@vue-loader/lib??vue-loader-options!./components/SearchBox.vue?vue&type=template&id=8b3cb2cc&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('a-row',{staticClass:"search-wrapper",attrs:{"type":"flex","justify":"center"}},[_c('a-col',{staticClass:"search-box",attrs:{"span":"17"}},[_c('p',{staticStyle:{"display":"none"}},[_vm._v(_vm._s(_vm.$configs.CONST.SEARCH_TEXT))]),_vm._v(" "),_c('div',{staticClass:"search-bg",class:{ focus: _vm.isFocus,search: _vm.isSearch }},[_c('a-input-search',{staticClass:"input",staticStyle:{"width":"100%","height":"70px"},attrs:{"size":"large","placeholder":"搜索产品类别/产品名称，看看其他CIO的实名点评吧！","enter-button":""},on:{"search":_vm.onSearch,"change":_vm.onChange,"focus":_vm.onFocus,"blur":_vm.onBlur},model:{value:(_vm.keywords),callback:function ($$v) {_vm.keywords=$$v},expression:"keywords"}}),_vm._v(" "),_c('div',{staticClass:"result-wrap focus-result"},[_c('div',[_c('h3',{staticClass:"title"},[_vm._v("\n            热门搜索\n          ")]),_vm._v(" "),_vm._l((_vm.hotSearchList),function(item){return _c('div',{key:item.ID,staticClass:"item"},[_c('div',{staticClass:"link",on:{"click":function($event){return _vm.handleKeyWordTagClick(item)}}},[_c('span',[_vm._v(_vm._s(item.value))]),_vm._v(" "),_c('span',{staticClass:"hot-icon"})])])})],2),_vm._v(" "),(_vm.historySearch)?_c('div',{staticStyle:{"margin-top":"10px"}},[_c('h3',{staticClass:"title g-flex space-between"},[_c('span',[_vm._v("历史搜索")]),_vm._v(" "),_c('span',{staticStyle:{"cursor":"pointer"},on:{"click":_vm.deleteHistorySearch}},[_c('a-icon',{attrs:{"type":"delete"}}),_vm._v("删除\n            ")],1)]),_vm._v(" "),_vm._l((_vm.historySearch),function(item){return _c('div',{key:item.ID,staticClass:"item"},[_c('div',{staticClass:"link",on:{"click":function($event){return _vm.handleKeyWordTagClick(item)}}},[_c('span',[_vm._v(_vm._s(item.names))]),_vm._v(" "),_c('span',{staticClass:"hot-icon"})])])})],2):_vm._e()]),_vm._v(" "),_c('div',{staticClass:"result-wrap search-result"},_vm._l((_vm.searchList),function(item){return _c('div',{key:item.ID,staticClass:"item"},[_c('div',{staticClass:"link",on:{"click":function($event){return _vm.handleKeyWordTagClick2(item)}}},[_c('span',[_vm._v(_vm._s(item.names))]),_vm._v(" "),_c('span',{staticStyle:{"color":"#666","font-size":"12px"}},[_vm._v(_vm._s(item.TYPE === '1' ? '产品' : '类别'))])])])}),0)],1),_vm._v(" "),_c('AutoPlay',{attrs:{"banner-txt":_vm.bannerTxt},on:{"handleBannerPopShow":_vm.handleBannerPopShow}})],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/SearchBox.vue?vue&type=template&id=8b3cb2cc&scoped=true&

// EXTERNAL MODULE: ./static/lib/storage.js
var storage = __webpack_require__(3);

// EXTERNAL MODULE: ./components/AutoPlay.vue + 4 modules
var AutoPlay = __webpack_require__(98);

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
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/SearchBox.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(137)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_SearchBoxvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "8b3cb2cc",
  "f1b733a6"
  
)

/* harmony default export */ var SearchBox = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {AutoPlay: __webpack_require__(98).default})


/***/ }),
/* 153 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.7@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_@nuxt_components@2.1.8@@nuxt/components/dist/loader.js??ref--0-0!./node_modules/_vue-loader@15.9.7@vue-loader/lib??vue-loader-options!./components/CategoryRank.vue?vue&type=template&id=be515b54&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"c-card"},[_vm._ssrNode("<div class=\"top\" data-v-be515b54>","</div>",[_vm._ssrNode("<div class=\"t-box\" data-v-be515b54><h2 class=\"h2\" data-v-be515b54>"+_vm._ssrEscape("\n        "+_vm._s(_vm.item.CATEGORY_NAME)+" 类热门厂商实时口碑\n      ")+"</h2></div> "),_vm._l((_vm.item.PRODUCTARRAY),function(product,i){return _c('BarZoom',{key:i,attrs:{"score":product.avgNum,"index":i + 1,"text":product.factory_short_name || product.factoryqcname}})})],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"bottom\" data-v-be515b54>","</div>",[_vm._ssrNode("<div class=\"people\" data-v-be515b54>","</div>",[_c('a-carousel',{attrs:{"autoplay":"","effect":"fade","dots":false}},_vm._l((_vm.userArray),function(value,index){return _c('div',{key:index},_vm._l((value),function(v){return _c('img',{key:v.id,attrs:{"src":v.headimages,"alt":""}})}),0)}),0)],1),_vm._ssrNode(" <div class=\"fire\" data-v-be515b54><img"+(_vm._ssrAttr("src",__webpack_require__(116)))+" alt data-v-be515b54></div> <p class=\"stat\" data-v-be515b54>"+_vm._ssrEscape("\n      "+_vm._s(_vm.item.SCORETOTALNUM)+" 人正在热评\n    ")+"</p>")],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/CategoryRank.vue?vue&type=template&id=be515b54&scoped=true&

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.2.2@babel-loader/lib??ref--2-0!./node_modules/_@nuxt_components@2.1.8@@nuxt/components/dist/loader.js??ref--0-0!./node_modules/_vue-loader@15.9.7@vue-loader/lib??vue-loader-options!./components/CategoryRank.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var CategoryRankvue_type_script_lang_js_ = ({
  props: {
    item: {
      type: Object,
      default: () => {
        return {};
      }
    },
    start: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      userArray: []
    };
  },

  mounted() {
    this.userArray = this.array2double(this.item.USERARRAY);
  },

  methods: {
    array2double(tmpArray) {
      // 获取数组的长度
      let len = tmpArray.length;
      let n = 8; // 假设每行显示7个

      let res = [];

      if (len) {
        let lineNum = len % n === 0 ? len / n : Math.floor(len / n + 1);

        for (let i = 0; i < lineNum; i++) {
          let temp = tmpArray.slice(i * n, i * n + n);
          res.push(temp);
        }
      }

      return res;
    }

  }
});
// CONCATENATED MODULE: ./components/CategoryRank.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_CategoryRankvue_type_script_lang_js_ = (CategoryRankvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/_vue-loader@15.9.7@vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/CategoryRank.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(139)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_CategoryRankvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "be515b54",
  "b69ea6e0"
  
)

/* harmony default export */ var CategoryRank = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {BarZoom: __webpack_require__(124).default})


/***/ }),
/* 154 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.7@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_@nuxt_components@2.1.8@@nuxt/components/dist/loader.js??ref--0-0!./node_modules/_vue-loader@15.9.7@vue-loader/lib??vue-loader-options!./components/ProductCard.vue?vue&type=template&id=65e91831&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('a-card',{staticClass:"product-card"},[_c('h3',{staticClass:"title"},[_vm._v("\n    "+_vm._s(_vm.product.product_name)+"\n  ")]),_vm._v(" "),_c('div',{staticClass:"stars g-flex"},[_c('Star',{attrs:{"out-width":100,"out-height":20,"decimal":_vm.decimal}}),_vm._v(" "),_c('span',{staticClass:"ant-rate-text"},[_vm._v(_vm._s(_vm.product.ztgsnum.toFixed(1))+"分")])],1),_vm._v(" "),_c('div',{staticClass:"img-wrap"},[_c('img',{attrs:{"src":"https://via.placeholder.com/80","alt":_vm.product.factory_short_name + _vm.categoryName}})])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/ProductCard.vue?vue&type=template&id=65e91831&scoped=true&

// EXTERNAL MODULE: ./components/common/starComp/StarZoom.vue + 4 modules
var StarZoom = __webpack_require__(58);

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.2.2@babel-loader/lib??ref--2-0!./node_modules/_@nuxt_components@2.1.8@@nuxt/components/dist/loader.js??ref--0-0!./node_modules/_vue-loader@15.9.7@vue-loader/lib??vue-loader-options!./components/ProductCard.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var ProductCardvue_type_script_lang_js_ = ({
  components: {
    Star: StarZoom["default"]
  },
  props: {
    product: {
      type: Object,

      default() {
        return {};
      }

    },
    categoryName: {
      type: String,

      default() {
        return '';
      }

    }
  },
  computed: {
    decimal() {
      return this.product.ztgsnum / 5;
    }

  }
});
// CONCATENATED MODULE: ./components/ProductCard.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_ProductCardvue_type_script_lang_js_ = (ProductCardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/_vue-loader@15.9.7@vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/ProductCard.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(141)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ProductCardvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "65e91831",
  "4d586d6e"
  
)

/* harmony default export */ var ProductCard = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/banner2.2f29aeb.jpeg";

/***/ }),
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(222);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("71aeafff", content, true, context)
};

/***/ }),
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_32394388_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(185);
/* harmony import */ var _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_32394388_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_32394388_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_32394388_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_32394388_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 222 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(13);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(159);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".banner-wrap[data-v-32394388]{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");background-size:100% 100%}.hero-search[data-v-32394388]{height:424px}.headline2[data-v-32394388]{font-size:32px;margin-bottom:36px;margin-top:20px}.container-index .intro[data-v-32394388]{background-color:#007dff;padding:30px 0}.container-index .intro h2[data-v-32394388],.container-index .intro p[data-v-32394388]{color:#fff}.tab-bar[data-v-32394388]{border-radius:4px;overflow:hidden}.tab-bar .popular-category[data-v-32394388]{cursor:pointer;width:282px;background-color:#fff;padding:18px 24px;font-size:16px}.tab-bar .popular-category.on[data-v-32394388]{font-weight:700;color:#fff;background-color:#007dff;width:322px;border-radius:0 4px 4px 0}.tab-bar .popular-category.on[data-v-32394388]:hover{color:#fff}.tab-bar .popular-category[data-v-32394388]:hover{color:#007dff}.tab-bar .popular-category .right-icon[data-v-32394388]{display:inline-block;width:17px;height:12px;background:url(https://cdn.36dianping.com/_nuxt/img/arrow-right.cb3d191.svg) 50%/contain no-repeat}@media (max-width:767px){.container-index .order .card-wrap[data-v-32394388]{margin:-16px 0!important}.container-index .order .card-wrap .c-card-wrap[data-v-32394388]{padding:0!important}.container-index .order .card-wrap .c-card-wrap .c-card[data-v-32394388]{margin-top:0;margin-bottom:10px}.container-index .order .pop-card-wrap[data-v-32394388]{margin-left:16px;margin-right:16px}.container-index .order .pop-card-wrap .cate-wrap[data-v-32394388]{width:100%}.container-index .intro p[data-v-32394388]{padding:0 10px}.tab-bar[data-v-32394388]{padding:0 10px!important;margin-bottom:10px;margin-top:10px}.tab-bar .popular-category[data-v-32394388]{display:inline-block;font-size:12px;margin:0}.tab-bar .popular-category.on[data-v-32394388]{color:#fff;border-left:none;background-color:#007dff;border-radius:4px}}.reviews[data-v-32394388]{overflow-y:hidden}.review-box[data-v-32394388]{min-height:365px}.view-all[data-v-32394388]{font-size:16px;color:#ff492c}.get-more-btn[data-v-32394388]{padding-top:30px;padding-bottom:80px}.get-more-btn>span[data-v-32394388]{padding:10px 42px;border-radius:22px;color:#007dff;border:1px solid #007dff;transition:.5s;cursor:pointer}.get-more-btn>span[data-v-32394388]:hover{background-color:#007dff;color:#fff}[data-v-32394388] .ant-anchor-wrapper{display:none}[data-v-32394388] .ant-affix .ant-anchor-wrapper{display:block}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */,
/* 231 */,
/* 232 */,
/* 233 */,
/* 234 */,
/* 235 */,
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */,
/* 242 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.7@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_@nuxt_components@2.1.8@@nuxt/components/dist/loader.js??ref--0-0!./node_modules/_vue-loader@15.9.7@vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=32394388&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"main"},[_vm._ssrNode("<div class=\"banner-wrap\" data-v-32394388>","</div>",[_c('Header'),_vm._ssrNode(" "),_c('a-row',{staticClass:"display-flex"},[_c('a-col',{staticClass:"hero-search",attrs:{"span":"24"}},[_c('SearchBox',{attrs:{"banner-txt":_vm.bannerTxt},on:{"handleBannerPopShow":_vm.handleBannerPopShow}})],1)],1)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"container-index\" data-v-32394388>","</div>",[_c('a-anchor',[_c('Header2')],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"g-wrapper pad-t-20\" data-v-32394388>","</div>",[_vm._ssrNode("<h2 class=\"headline\" data-v-32394388>\n          大家正在点评\n        </h2> "),_c('a-row',{attrs:{"type":"flex"}},[_c('a-col',{staticClass:"review-box reviews",attrs:{"lg":24,"md":24,"sm":24}},[_c('div',{staticClass:"swiper-component-wrap"},[_c('swiper',{attrs:{"list":_vm.latestCommentList}})],1)])],1)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"g-wrapper pad-t-10 pad-b-30\" data-v-32394388>","</div>",[_vm._ssrNode("<h2 class=\"headline\" data-v-32394388>\n          热门厂商 实时口碑排名\n        </h2> "),_vm._ssrNode("<div class=\"review-box\" data-v-32394388>","</div>",[_c('a-row',{staticClass:"card-wrap space-around",attrs:{"type":"flex","gutter":[16, 16]}},_vm._l((_vm.HotCategoryRankList),function(item,index){return _c('a-col',{key:("cate-" + index),staticClass:"c-card-wrap",staticStyle:{"padding-bottom":"0"},attrs:{"lg":"8","md":"8","sm":"24"}},[_c('nuxt-link',{attrs:{"to":{name: 'company-id', params:{ id: item.CATEGORY_ID}, query:{ category_name: item.CATEGORY_NAME}}}},[_c('CategoryRank',{attrs:{"item":item}})],1)],1)}),1)],1)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"g-wrapper pad-t-20 pad-b-20\" data-v-32394388>","</div>",[_vm._ssrNode("<h2 class=\"g-flex space-between headline\" data-v-32394388>","</h2>",[_vm._ssrNode("<span data-v-32394388>热门软件产品</span> "),_c('nuxt-link',{staticClass:"view-all",attrs:{"to":{name: 'product-id', params:{ id: _vm.selectedCategory},query:{ category_name: _vm.selectedCategoryName}}}},[_vm._v("\n            查看所有"+_vm._s(_vm.selectedCategoryName)+"产品\n          ")])],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"pop-card-wrap\" data-v-32394388>","</div>",[_c('a-row',{attrs:{"type":"flex","gutter":[32, 32]}},[_c('a-col',{attrs:{"lg":7,"md":7,"sm":24}},[_c('div',{staticClass:"tab-bar"},[_vm._l((_vm.hotCateGoryList),function(cate){return _c('div',{key:cate.CATEGORY_ID,staticClass:"popular-category g-flex space-between",class:cate.CATEGORY_ID === _vm.selectedCategory ? 'on' : '',on:{"click":function($event){return _vm.handleSelectCategory(cate)}}},[_c('span',{staticClass:"txt"},[_vm._v(_vm._s(cate.CATEGORY_NAME))]),_vm._v(" "),_c('span',{staticClass:"right-icon"})])}),_vm._v(" "),_c('div',{staticClass:"popular-category g-flex space-between",on:{"click":_vm.navigateToAll}},[_c('span',{staticClass:"txt"},[_vm._v("查看所有类别")]),_vm._v(" "),_c('a-icon',{attrs:{"type":"right"}})],1)],2)]),_vm._v(" "),_c('a-col',{attrs:{"lg":17,"md":17,"sm":24}},[_c('a-row',{attrs:{"type":"flex","gutter":[32, 32]}},_vm._l((_vm.selectCateProList),function(item){return _c('a-col',{key:item.product_id,staticClass:"cate-wrap",staticStyle:{"padding":"12px"},attrs:{"lg":"8","md":"10","sm":"20"}},[_c('nuxt-link',{attrs:{"to":{name: 'productDetail-id', params:{ id: item.product_id}}}},[_c('ProductCard',{attrs:{"product":item,"category-name":_vm.selectedCategoryName}})],1)],1)}),1)],1)],1)],1)],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"container-index\" style=\"background-color: #ffffff;padding-top: 40px\" data-v-32394388>","</div>",[_vm._ssrNode("<div class=\"g-wrapper\" data-v-32394388>","</div>",[_vm._ssrNode("<h2 class=\"headline\" data-v-32394388>\n          应用案例\n        </h2> "),_c('apply-case',{attrs:{"case-list":_vm.caseList}}),_vm._ssrNode(" <div class=\"get-more-btn g-flex center\" data-v-32394388><span data-v-32394388>查看更多</span></div>")],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"g-wrapper\" data-v-32394388>","</div>",[_vm._ssrNode("<h2 class=\"headline\" data-v-32394388>\n          热门新闻\n        </h2> "),_c('news',{attrs:{"news-list":_vm.newsList}}),_vm._ssrNode(" <div class=\"get-more-btn g-flex center\" data-v-32394388><span data-v-32394388>查看更多</span></div>")],2)],2),_vm._ssrNode(" "),_c('banner-pop',{directives:[{name:"show",rawName:"v-show",value:(_vm.bannerPopShow),expression:"bannerPopShow"}],attrs:{"recommend-cate":_vm.recommendCate,"img-url":_vm.imgUrl},on:{"handleBannerPopHide":_vm.handleBannerPopHide}}),_vm._ssrNode(" "),_c('rightNav',[_c('qrcode')],1),_vm._ssrNode(" "),_c('Footer')],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=32394388&scoped=true&

// EXTERNAL MODULE: ./components/index/case.vue + 4 modules
var index_case = __webpack_require__(148);

// EXTERNAL MODULE: ./components/index/news.vue + 4 modules
var news = __webpack_require__(149);

// EXTERNAL MODULE: ./components/swiper/reviewSwiper.vue + 4 modules
var reviewSwiper = __webpack_require__(150);

// EXTERNAL MODULE: ./components/pop/banner.vue + 4 modules
var banner = __webpack_require__(151);

// EXTERNAL MODULE: ./static/lib/utils.js
var utils = __webpack_require__(135);

// EXTERNAL MODULE: ./components/rightNav/index.vue + 4 modules
var rightNav = __webpack_require__(77);

// EXTERNAL MODULE: ./components/rightNav/qrcode.vue + 4 modules
var qrcode = __webpack_require__(78);

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.2.2@babel-loader/lib??ref--2-0!./node_modules/_@nuxt_components@2.1.8@@nuxt/components/dist/loader.js??ref--0-0!./node_modules/_vue-loader@15.9.7@vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




 // import adSwiper from '../components/swiper/adSwiper'



/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({
  components: {
    swiper: reviewSwiper["default"],
    applyCase: index_case["default"],
    news: news["default"],
    bannerPop: banner["default"],
    rightNav: rightNav["default"],
    qrcode: qrcode["default"]
  },

  async asyncData(vm) {
    let imgUrl;
    let cate = '';
    let bannerTxt = ['点评就给钱，最高100元！'];
    vm.$requests.cateBanner().then(res => {
      if (res.status === 200 && res.data.result === 'success') {
        cate = res.data.recommendCategoryObj.category_name;
        let str = cate + '软件诚邀用户点评！马上去点评';
        bannerTxt.push(str);
        let path = `pages/comment_lists/main?cid=${res.data.recommendCategoryObj.category_id}&cname=${res.data.recommendCategoryObj.category_name}`;
        vm.$requests.qrcodeGet({
          PATH: path
        }).then(res => {
          if (res.status === 200 && res.data.result === 'success') {
            imgUrl = res.data.data;
          }
        });
      }
    }); // 最新评论

    let latestRes = await vm.$requests.indexLatestComment(); // 最新点评

    let latestCommentList = latestRes.status === 200 && latestRes.data.result === 'success' ? latestRes.data.scorelist : [];
    console.log('最新点评:', latestCommentList); // 热门类别的厂商排名

    let HotCategoryRankList = [];
    let list = await vm.$requests.publicHotCategoryRank();
    HotCategoryRankList = list.data.categoryListObj.map(item => {
      item.PRODUCTARRAY = JSON.parse(item.PRODUCTARRAY);
      let tmpList = JSON.parse(item.USERARRAY).map(item => {
        return Object(utils["a" /* handleAvatar */])('headimages', item);
      });
      item.USERARRAY = tmpList;
      return item;
    }).slice(0, 6); // 所有类别

    let hotCateGoryList = list.data.categoryListObj; // 某类别下的产品

    let selectCateProRes = await vm.$requests.indexSelectCatePro({
      category_id: hotCateGoryList[0].CATEGORY_ID
    });
    let selectCateProList = [];

    if (selectCateProRes.status === 200 && selectCateProRes.data.result === 'success') {
      // 过滤掉没有id的产品
      selectCateProList = selectCateProRes.data.productlist.filter(item => {
        return item.product_id;
      }).slice(0, 9);
    } // 应用案例


    let caseList = [];
    let caseCurrentPage = 1;
    let caseTotalPage = 1;
    let caseRes = await vm.$requests.indexCases({
      keywords: '',
      pageSize: 10,
      page: caseCurrentPage
    });

    if (caseRes.status === 200 && caseRes.data.result === 'success') {
      caseList = caseRes.data.data.caseList;
      caseTotalPage = caseRes.data.data.totalPage;
    } // 签约新闻


    let newsList = [];
    let newsCurrentPage = 1;
    let newsTotalPage = 1;
    let newsRes = await vm.$requests.indexNews({
      keywords: '',
      pageSize: 10,
      page: newsCurrentPage
    });

    if (newsRes.status === 200 && newsRes.data.result === 'success') {
      newsList = newsRes.data.data.newsList;
      newsTotalPage = newsRes.data.data.totalPage;
    }

    return {
      bannerTxt,
      slogan: vm.$configs.CONST.SLOGAN,
      latestCommentList,
      HotCategoryRankList,
      hotCateGoryList: hotCateGoryList.slice(0, 9),
      selectCateProList,
      selectedCategory: hotCateGoryList[0].CATEGORY_ID,
      selectedCategoryName: hotCateGoryList[0].CATEGORY_NAME,
      caseList,
      caseTotalPage,
      caseCurrentPage,
      newsList,
      newsTotalPage,
      newsCurrentPage,
      imgUrl,
      bannerPopShow: false,
      // 弹窗是否展示
      recommendCate: cate // 当前正在推广的类别

    };
  },

  methods: {
    handleBannerPopShow() {
      this.bannerPopShow = true;
    },

    handleBannerPopHide() {
      this.bannerPopShow = false;
    },

    handleSelectCategory(cate) {
      this.selectedCategory = cate.CATEGORY_ID;
      this.selectedCategoryName = cate.CATEGORY_NAME;
      this.selectedCategoryList = cate.PRODUCTARRAY;
      this.$requests.indexSelectCatePro({
        category_id: cate.CATEGORY_ID
      }).then(res => {
        if (res.status === 200 && res.data.result === 'success') {
          this.selectCateProList = res.data.productlist.filter(item => {
            return item.product_id;
          }).slice(0, 9);
        }
      });
    },

    getMoreCase() {
      if (this.caseCurrentPage >= this.caseTotalPage) {
        return;
      }

      this.caseCurrentPage++;
      this.$requests.indexCases({
        keywords: '',
        pageSize: 10,
        page: this.caseCurrentPage
      }).then(res => {
        if (res.status === 200 && res.data.result === 'success') {
          this.caseList = this.caseList.concat(res.data.data.caseList);
        }
      });
    },

    getMoreNews() {
      if (this.newsCurrentPage >= this.newsTotalPage) {
        return;
      }

      this.newsCurrentPage++;
      this.$requests.indexNews({
        keywords: '',
        pageSize: 10,
        page: this.newsCurrentPage
      }).then(res => {
        if (res.status === 200 && res.data.result === 'success') {
          this.newsList = this.newsList.concat(res.data.data.newsList);
        }
      });
    },

    navigateToAll() {
      this.$router.push({
        name: 'all'
      });
    }

  },

  head() {
    return {
      title: '选型宝_企业软件的大众点评-ERP_BI_CRM_OA_企业邮箱怎么选？',
      meta: [{
        hid: 'description',
        name: 'description',
        content: 'ERP系统_BI_CRM系统_OA系统_数据库软件_BPM系统_企业邮箱...想了解各种企业软件的用户口碑?就上选型宝, 企业级软件的大众点评，实名制的CIO选型经验交流社区'
      }, {
        hid: 'keywords',
        name: 'keywords',
        content: 'ERP_BI_CRM_OA_数据库_BPM_企业邮箱'
      }]
    };
  }

});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/_vue-loader@15.9.7@vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(221)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "32394388",
  "796268da"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Header: __webpack_require__(33).default,SearchBox: __webpack_require__(152).default,Header2: __webpack_require__(81).default,CategoryRank: __webpack_require__(153).default,ProductCard: __webpack_require__(154).default,Footer: __webpack_require__(80).default})


/***/ })
]);;
//# sourceMappingURL=index.js.map