exports.ids = [39,7,8,9,10,11,15,16,18,24,26,27,29];
exports.modules = {

/***/ 152:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(162);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(9).default
module.exports.__inject__ = function (context) {
  add("4d15eb30", content, true, context)
};

/***/ }),

/***/ 153:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(166);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(9).default
module.exports.__inject__ = function (context) {
  add("168d8b20", content, true, context)
};

/***/ }),

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(168);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(9).default
module.exports.__inject__ = function (context) {
  add("4b19f85c", content, true, context)
};

/***/ }),

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(172);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(9).default
module.exports.__inject__ = function (context) {
  add("fbf3bf86", content, true, context)
};

/***/ }),

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(175);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(9).default
module.exports.__inject__ = function (context) {
  add("18e1c43a", content, true, context)
};

/***/ }),

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(177);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(9).default
module.exports.__inject__ = function (context) {
  add("6718ea24", content, true, context)
};

/***/ }),

/***/ 158:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(183);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(9).default
module.exports.__inject__ = function (context) {
  add("00ea35b2", content, true, context)
};

/***/ }),

/***/ 159:
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
var componentNormalizer = __webpack_require__(15);

// CONCATENATED MODULE: ./components/common/starComp/StarZoom.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(161)
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
  "0b60a83c"
  
)

/* harmony default export */ var StarZoom = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(190);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(9).default
module.exports.__inject__ = function (context) {
  add("93cf824e", content, true, context)
};

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_StarZoom_vue_vue_type_style_index_0_id_59cc2748_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(152);
/* harmony import */ var _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_StarZoom_vue_vue_type_style_index_0_id_59cc2748_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_StarZoom_vue_vue_type_style_index_0_id_59cc2748_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_StarZoom_vue_vue_type_style_index_0_id_59cc2748_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_StarZoom_vue_vue_type_style_index_0_id_59cc2748_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 162:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(8);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(37);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(163);
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(164);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".star-default[data-v-59cc2748]{width:100px;height:20px;background:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");background-size:contain}.star-real[data-v-59cc2748]{width:80px;height:20px;background:url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");background-size:contain}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 163:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAB0klEQVQ4T52UsWsTURzHv793F2kduoS8d0kWbzGB4FYHcYogOAhaHBxEEDfbP6BFV1Hprri5OAlSBUEQJIs46OYSW6EOIZf3S7ipQ9qmeT+5kh5JaMLVt929z/fDe7/f744wZ8VxvDQYDL6LCHzfv1IoFPZm4TRP1O12N5xzzxOGiNaNMZtnFrVarcVcLvcXgBmFbb/fD8Mw3D9NNvNEzLwqIi/HQ0T0yBjzOrOo0Wj41Wr1DxFdmArtNpvNSr1eP5qWkYgoa21VKXXROVcBUCGiSwCWZ9TjJ4BfIrJDRNu+72/n8/kdstZ+BXBtXtEz7DUSEQPQGeB5CFOv16sPh8NPAM7/j0xE+kR087hr7Xb7uud5HwEsnkUmIvvOuVvlcvlL2v4oim4opbYALGSRiciB53krWuvPxwM7Hup0Og+I6E0WkVLqodY6ZSdEURTdU0q9zSJyzt0vlUopOyGy1j4F8CSLCMCzIAhSdlqU1Oh2RtGHIAhWTtgJETP/FpFkusfXj1EtL4+/TCa7WCymbCpKPhVmPgDgjwK7AB4bY94lz8x8N7kOgHD0WznSWi8Q0fC0rr0noqsAXsRx/KpWqx1OneIcM68B2CCib8aYOyf7/wBiu6siH+XLgQAAAABJRU5ErkJggg=="

/***/ }),

/***/ 164:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAB3ElEQVQ4T52TsWsTcRTHP+9nWhoHkUtqV7MYoXRTSns3tILgIGiFyw1FEDf1D7DoKlXclW4uLrkgVREEQQyYi6CbKNgIdXBJ2gsICm013pOE9mxim179bT/e5/fhy3vvJ/Q5zdnxQ9oaqLYRXdOJ4afB991w6ScKPXsO5HabMSrXLf/13X2LvroT6bQxX0BGOomg/qORyuXK5fWdZLsmCj3nKnBv+yOjesXyg4XEIp2aSjVHfn0GObr9kcLyh0YqP10ut3plomDq7vjxARk8BppHyANjwImd+6HvFN6Lag1hiZYuZcbe1CQs2C8ROdWv6XvVVPWVhAWngXBkL7h/XRuyWrCnBZ4hcvB/ZAprEkVnO1NruvZpNfIESO9HprBuiM5litUX8fhXXOeMMSwCQ0lkqmwcEJ2xisHzNt+1Ryvu5CVjzIMkIoHLmWIlZrtEq549K8jDJCI0upj1qzHbJQo95xZwM5lI57N+ELPdiQrOogjnE4ngcbZYmdliexN9gs5m/z3CW1QF5GTPd6kNFysxG4vaX6VZcDYQUptTWCbSG1Yp8Nv30Jv0UDMvQm6z3rKiypCU+P3P1ELPeaSobeBOPfp2f7T08WdXCnd0MJTD1wTmgCDrBxe26n8Ah+yh8Twu8rAAAAAASUVORK5CYII="

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_model_vue_vue_type_style_index_0_id_5391ef40_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(153);
/* harmony import */ var _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_model_vue_vue_type_style_index_0_id_5391ef40_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_model_vue_vue_type_style_index_0_id_5391ef40_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_model_vue_vue_type_style_index_0_id_5391ef40_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_model_vue_vue_type_style_index_0_id_5391ef40_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 166:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(8);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".model-wrap[data-v-5391ef40]{position:fixed;left:0;right:0;top:0;bottom:0;z-index:10}.model[data-v-5391ef40]{width:100%;height:100%;background-color:rgba(6,21,26,.67)}.content[data-v-5391ef40]{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%)}.close-btn[data-v-5391ef40]{position:absolute;top:0;right:-60px;cursor:pointer}@media (max-width:767px){.close-btn[data-v-5391ef40]{right:-16px;top:-16px;z-index:10}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_pHeader2_vue_vue_type_style_index_0_id_c5deb32e_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(154);
/* harmony import */ var _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_pHeader2_vue_vue_type_style_index_0_id_c5deb32e_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_pHeader2_vue_vue_type_style_index_0_id_c5deb32e_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_pHeader2_vue_vue_type_style_index_0_id_c5deb32e_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_pHeader2_vue_vue_type_style_index_0_id_c5deb32e_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 168:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(8);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".search-box[data-v-c5deb32e]{position:relative}.result-wrap[data-v-c5deb32e]{position:absolute;width:300px;height:198px;min-height:198px;overflow-y:scroll;background-color:#fff;padding:10px 0;border:1px solid #cacaca;top:54px;z-index:10;border-radius:4px}.result-wrap .title[data-v-c5deb32e]{height:30px;line-height:30px;padding:0 10px;font-size:13px;color:#666}.result-wrap .item[data-v-c5deb32e]{height:32px;line-height:32px;font-size:14px;color:#222;cursor:pointer}.result-wrap .item .link[data-v-c5deb32e]{display:flex;justify-content:space-between;align-items:center;color:#222;padding:4px 20px;cursor:pointer}.result-wrap .item .link[data-v-c5deb32e]:hover{background-color:rgba(0,125,255,.1)}.result-wrap .item .link .name[data-v-c5deb32e]{display:inline-block;width:180px;text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.focus-result[data-v-c5deb32e],.search-result[data-v-c5deb32e]{display:none}.focus .focus-result[data-v-c5deb32e],.search .search-result[data-v-c5deb32e]{display:block}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.7@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_@nuxt_components@2.1.8@@nuxt/components/dist/loader.js??ref--0-0!./node_modules/_vue-loader@15.9.7@vue-loader/lib??vue-loader-options!./components/pop/model.vue?vue&type=template&id=5391ef40&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"model-wrap"},[_vm._ssrNode("<div class=\"model\" data-v-5391ef40></div> "),_vm._ssrNode("<div class=\"content\" data-v-5391ef40>","</div>",[_vm._ssrNode("<div class=\"close-btn\" data-v-5391ef40>","</div>",[_c('a-icon',{staticStyle:{"font-size":"30px","color":"#dadada"},attrs:{"type":"close"}})],1),_vm._ssrNode(" "),_vm._t("content")],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/pop/model.vue?vue&type=template&id=5391ef40&scoped=true&

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
var componentNormalizer = __webpack_require__(15);

// CONCATENATED MODULE: ./components/pop/model.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(165)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pop_modelvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "5391ef40",
  "76f6c0be"
  
)

/* harmony default export */ var model = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.7@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_@nuxt_components@2.1.8@@nuxt/components/dist/loader.js??ref--0-0!./node_modules/_vue-loader@15.9.7@vue-loader/lib??vue-loader-options!./components/header/pHeader2.vue?vue&type=template&id=c5deb32e&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('a-layout-header',{staticClass:"global-header"},[_c('div',{staticClass:"g-wrapper g-flex space-between"},[_c('h1',{staticClass:"logo-wrap"},[_c('nuxt-link',{attrs:{"to":"/"}},[_c('img',{staticClass:"logo",attrs:{"src":__webpack_require__(65),"alt":"选型宝_企业软件的大众点评-ERP系统_BI_CRM系统_OA系统_数据库软件_BPM系统_企业邮箱..."}})]),_vm._v(" "),_c('strong',[_vm._v(_vm._s(_vm.slogan))])],1),_vm._v(" "),_c('div',{staticClass:"g-flex"},[_c('nav',{staticClass:"nav"},[_c('div',{staticClass:"link",on:{"click":_vm.handleBannerPopShow}},[_c('span',{staticClass:"icon review"}),_vm._v(" "),_c('span',[_vm._v("写点评就给钱")])]),_vm._v(" "),_c('nuxt-link',{staticClass:"link",attrs:{"to":"/all","title":"软件类别","target":"_blank"}},[_c('span',{staticClass:"icon cate"}),_vm._v(" "),_c('span',[_vm._v("软件类别")])]),_vm._v(" "),_c('a',{staticClass:"link",attrs:{"href":"https://e.xuanxingbao.com/","title":"企业入驻","target":"_blank"}},[_c('span',{staticClass:"icon"}),_vm._v(" "),_c('span',{staticClass:"entry"},[_vm._v("企业入驻")])])],1),_vm._v(" "),(_vm.isShow)?_c('div',{staticClass:"search-box",class:{ focus: _vm.isFocus,search: _vm.isSearch }},[_c('a-input-search',{staticStyle:{"width":"300px"},attrs:{"placeholder":"搜索产品类别、名称，看看同行推荐啥？"},on:{"search":_vm.onSearch,"change":_vm.onChange,"focus":_vm.onFocus,"blur":_vm.onBlur},model:{value:(_vm.keywords),callback:function ($$v) {_vm.keywords=$$v},expression:"keywords"}}),_vm._v(" "),_c('div',{staticClass:"result-wrap focus-result"},[_c('div',[_c('h3',{staticClass:"title"},[_vm._v("\n              热门搜索\n            ")]),_vm._v(" "),_vm._l((_vm.hotSearchList),function(item){return _c('div',{key:item.ID,staticClass:"item"},[_c('div',{staticClass:"link",on:{"click":function($event){return _vm.handleKeyWordTagClick(item)}}},[_c('span',{staticClass:"name"},[_vm._v(_vm._s(item.names))]),_vm._v(" "),_c('span',{staticClass:"hot-icon"})])])})],2),_vm._v(" "),(_vm.historySearch)?_c('div',{staticStyle:{"margin-top":"10px"}},[_c('h3',{staticClass:"title g-flex space-between"},[_c('span',[_vm._v("历史搜索")]),_vm._v(" "),_c('span',{staticStyle:{"cursor":"pointer"},on:{"click":_vm.deleteHistorySearch}},[_c('a-icon',{attrs:{"type":"delete"}}),_vm._v("删除\n              ")],1)]),_vm._v(" "),_vm._l((_vm.historySearch),function(item){return _c('div',{key:item.ID,staticClass:"item"},[_c('div',{staticClass:"link",on:{"click":function($event){return _vm.handleKeyWordTagClick(item)}}},[_c('span',{staticClass:"name"},[_vm._v(_vm._s(item.names))]),_vm._v(" "),_c('span',{staticClass:"hot-icon"})])])})],2):_vm._e()]),_vm._v(" "),_c('div',{staticClass:"result-wrap search-result"},_vm._l((_vm.searchList),function(item){return _c('div',{key:item.ID,staticClass:"item"},[_c('div',{staticClass:"link",on:{"click":function($event){return _vm.handleKeyWordTagClick2(item)}}},[_c('span',{staticClass:"name"},[_vm._v(_vm._s(item.names))]),_vm._v(" "),_c('span',{staticStyle:{"color":"#666","font-size":"12px"}},[_vm._v(_vm._s(item.TYPE === '1' ? '产品' : '类别'))])])])}),0)],1):_vm._e()])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/header/pHeader2.vue?vue&type=template&id=c5deb32e&scoped=true&

// EXTERNAL MODULE: ./static/lib/storage.js
var storage = __webpack_require__(18);

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
              {
                let routeUrl = this.$router.resolve({
                  name: 'product-id',
                  params: {
                    id: res.data.CATEGORY_ID
                  },
                  query: {
                    category_name: this.keywords.trim()
                  }
                });
                window.open(routeUrl.href, '_blank');
                break;
              }

            case this.statusMapper.product:
              {
                let routeUrl = this.$router.resolve({
                  name: 'productDetail-id',
                  params: {
                    id: res.data.PRODUCT_ID
                  }
                });
                window.open(routeUrl.href, '_blank');
                break;
              }

            case this.statusMapper.fuzzy:
              {
                let routeUrl = this.$router.resolve({
                  name: 'result-status',
                  params: {
                    status: 'fuzzy'
                  },
                  query: {
                    keywords: this.keywords.trim()
                  }
                });
                window.open(routeUrl.href, '_blank');
                break;
              }

            case this.statusMapper.notFound:
              {
                let routeUrl = this.$router.resolve({
                  name: 'result-status',
                  params: {
                    status: 'notFound'
                  },
                  query: {
                    keywords: this.keywords.trim()
                  }
                });
                window.open(routeUrl.href, '_blank');
                break;
              }
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
            {
              let routeUrl = this.$router.resolve({
                name: 'company-id',
                params: {
                  id: res.data.CATEGORY_ID
                },
                query: {
                  category_name: obj.value.trim()
                }
              });
              window.open(routeUrl.href, '_blank');
              break;
            }

          case this.statusMapper.product:
            {
              let routeUrl = this.$router.resolve({
                name: 'productDetail-id',
                params: {
                  id: res.data.PRODUCT_ID
                }
              });
              window.open(routeUrl.href, '_blank');
              break;
            }

          case this.statusMapper.fuzzy:
            {
              let routeUrl = this.$router.resolve({
                name: 'result-status',
                params: {
                  status: 'fuzzy'
                },
                query: {
                  keywords: obj.names.trim()
                }
              });
              window.open(routeUrl.href, '_blank');
              break;
            }

          case this.statusMapper.notFound:
            {
              let routeUrl = this.$router.resolve({
                name: 'result-status',
                params: {
                  status: 'notFound'
                },
                query: {
                  keywords: obj.names.trim()
                }
              });
              window.open(routeUrl.href, '_blank');
              break;
            }
        }

        this.onBlur();
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
        let routeUrl = this.$router.resolve({
          name: 'productDetail-id',
          params: {
            id: obj.ID
          }
        });
        window.open(routeUrl.href, '_blank');
      } else {
        let routeUrl = this.$router.resolve({
          name: 'company-id',
          params: {
            id: obj.ID
          },
          query: {
            category_name: obj.NAME
          }
        });
        window.open(routeUrl.href, '_blank');
      }

      this.onBlur();
    },

    // 本地存储的历史搜索
    getHistorySearch() {
      this.historySearch = storage["a" /* default */].get('set_history_search');
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
var componentNormalizer = __webpack_require__(15);

// CONCATENATED MODULE: ./components/header/pHeader2.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(167)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  header_pHeader2vue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "c5deb32e",
  "753318b2"
  
)

/* harmony default export */ var pHeader2 = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5f550c22_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(155);
/* harmony import */ var _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5f550c22_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5f550c22_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5f550c22_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5f550c22_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 172:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(8);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".right-wrap[data-v-5f550c22]{position:fixed;bottom:30px;right:10px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 173:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/qrcode.5d928fb.png";

/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_qrcode_vue_vue_type_style_index_0_id_ba090918_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(156);
/* harmony import */ var _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_qrcode_vue_vue_type_style_index_0_id_ba090918_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_qrcode_vue_vue_type_style_index_0_id_ba090918_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_qrcode_vue_vue_type_style_index_0_id_ba090918_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_qrcode_vue_vue_type_style_index_0_id_ba090918_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 175:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(8);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".qrcode[data-v-ba090918]{box-shadow:0 2px 8px 0 rgba(0,0,0,.14);border-radius:4px;overflow:hidden}.qrcode img[data-v-ba090918]{width:130px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_banner_vue_vue_type_style_index_0_id_b98cb6dc_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(157);
/* harmony import */ var _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_banner_vue_vue_type_style_index_0_id_b98cb6dc_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_banner_vue_vue_type_style_index_0_id_b98cb6dc_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_banner_vue_vue_type_style_index_0_id_b98cb6dc_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_banner_vue_vue_type_style_index_0_id_b98cb6dc_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 177:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(8);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".content-wrap[data-v-b98cb6dc]{width:300px;height:534px;background-image:url(https://img.xuanxingbao.com/bgmc.png);background-size:cover;position:relative}.title[data-v-b98cb6dc]{font-size:50px;color:#f3db99;font-weight:700;text-shadow:1px 1px 2px #000;padding-top:24%}.mini-program-img[data-v-b98cb6dc]{width:100%;position:absolute;left:0;bottom:90px}.mini-program-img .txt[data-v-b98cb6dc]{color:#fff;margin-bottom:10px}.mini-program-img .img[data-v-b98cb6dc]{width:30%}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 178:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/wx-yh.bffc413.jpg";

/***/ }),

/***/ 179:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/qrcode_dy.e488e10.jpg";

/***/ }),

/***/ 180:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/qcrode.414b83a.jpg";

/***/ }),

/***/ 181:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/qrcode_fw.8427576.jpg";

/***/ }),

/***/ 182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_2c53f060_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(158);
/* harmony import */ var _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_2c53f060_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_2c53f060_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_2c53f060_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_2c53f060_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 183:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(8);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(37);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(64);
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(66);
var ___CSS_LOADER_URL_IMPORT_2___ = __webpack_require__(67);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".global-header[data-v-2c53f060]{background-color:transparent;height:74px}.global-header .logo-wrap[data-v-2c53f060]{margin-bottom:0}.global-header .logo[data-v-2c53f060]{width:99px;margin-right:15px}.global-header strong[data-v-2c53f060]{font-size:14px;color:#fff}.global-header nav .link[data-v-2c53f060]{color:#fff;display:inline-flex;align-items:center;padding:0 15px;cursor:pointer}.icon[data-v-2c53f060]{display:inline-block;width:22px;height:22px;margin-right:6px}.review[data-v-2c53f060]{height:26px;background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ")}.cate[data-v-2c53f060],.review[data-v-2c53f060]{background-size:cover}.cate[data-v-2c53f060]{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ")}.entry[data-v-2c53f060]{background-color:#ff492c;color:#fff;line-height:38px;padding:0 32px;border-radius:20px}.ant-affix strong[data-v-2c53f060],.default strong[data-v-2c53f060]{color:#007dff}.ant-affix nav .link[data-v-2c53f060],.default nav .link[data-v-2c53f060]{color:#555}.ant-affix .review[data-v-2c53f060],.default .review[data-v-2c53f060]{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");background-size:cover}.ant-affix .cate[data-v-2c53f060],.default .cate[data-v-2c53f060]{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");background-size:cover}.ant-affix .global-header[data-v-2c53f060],.default .global-header[data-v-2c53f060]{border-bottom:1px solid #ddd;background-color:#fff;height:72px}.ant-affix[data-v-2c53f060] .ant-anchor-wrapper,.default[data-v-2c53f060] .ant-anchor-wrapper{overflow:visible;padding-left:unset}.header-wrap .global-header[data-v-2c53f060]{height:72px;background-color:transparent}*[data-v-2c53f060]{margin:0}*[data-v-2c53f060],ul[data-v-2c53f060]{padding:0}.g-wrapper[data-v-2c53f060]{width:100%;max-width:1200px!important;margin:0 auto!important}.pad-t-10[data-v-2c53f060]{padding-top:10px}.pad-t-20[data-v-2c53f060]{padding-top:20px}.pad-b-20[data-v-2c53f060]{padding-bottom:20px}.pad-b-30[data-v-2c53f060]{padding-bottom:30px}.g-flex[data-v-2c53f060]{display:flex!important}.g-flex.v-center[data-v-2c53f060]{flex-direction:column}.g-flex.center[data-v-2c53f060],.g-flex.v-center[data-v-2c53f060]{justify-content:center;align-items:center}.g-flex.space-between[data-v-2c53f060]{justify-content:space-between;align-items:center}.g-flex.space-around[data-v-2c53f060]{justify-content:space-around}.footer[data-v-2c53f060]{padding:60px 0 20px}.footer .footerInfo[data-v-2c53f060]{text-align:center}.footer .footerInfo .ca_text[data-v-2c53f060]{font-size:20px;color:#555}.footer .footerInfo .qc_text[data-v-2c53f060]{font-size:15px;color:#c1c1c1;padding-top:20px}.footer .qcrodeImg[data-v-2c53f060]{width:158px;margin-bottom:70px;margin-top:10px}.display-pc[data-v-2c53f060]{display:block!important}.display-flex[data-v-2c53f060]{display:flex!important}.display-m[data-v-2c53f060]{display:none!important}.text-c[data-v-2c53f060]{text-align:center}.report-wrap[data-v-2c53f060]{background-color:#007dff;font-size:20px;padding:40px 0;margin-bottom:10px}.report-wrap[data-v-2c53f060],.review-btn[data-v-2c53f060]{color:#fff;text-align:center}.review-btn[data-v-2c53f060]{padding:6px 12px;background-color:#ff492c;border-radius:4px}.check-comment[data-v-2c53f060]{padding:6px 18px;color:#007dff;border:1px solid #007dff;border-radius:16px;font-size:12px}.check-comment[data-v-2c53f060]:hover{background-color:#007dff;color:#fff}.contact-btn[data-v-2c53f060]{background-color:#773aff;color:#fff;padding:16px 0;text-align:center;margin-bottom:10px;cursor:pointer}.border[data-v-2c53f060]{border:1px solid #cacaca;border-radius:4px}.headline[data-v-2c53f060]{font-family:PingFangSC-Semibold;font-size:26px;color:#333;letter-spacing:0;line-height:1.5}@media (max-width:767px){.display-m[data-v-2c53f060]{display:flex!important}.display-flex[data-v-2c53f060],.display-pc[data-v-2c53f060]{display:none!important}.footer[data-v-2c53f060]{padding-top:10px}.footer .qcrodeImg[data-v-2c53f060]{width:72px;margin-bottom:10px}.footer .footerInfo .ca_text[data-v-2c53f060]{font-size:16px}.footer .footerInfo .qc_text[data-v-2c53f060]{font-size:12px;padding-top:6px}.headline[data-v-2c53f060]{font-size:18px;padding:0 10px}.m-tab-bar[data-v-2c53f060]{width:100%;flex-wrap:wrap;justify-content:space-around}.m-tab-bar .popular-category[data-v-2c53f060]{width:166px;height:40px;border-radius:4px;border:1px solid #007dff;justify-content:center;color:#222;background-color:#fff;margin-bottom:10px}.m-tab-bar .popular-category.on[data-v-2c53f060]{background-color:#007dff;color:#fff}}.beian[data-v-2c53f060]{background-color:#2d3237;padding:40px 0}.site-width[data-v-2c53f060]{padding:10px 0;width:100%;justify-content:center;font-size:12px;margin:0 auto}.site-width[data-v-2c53f060],.site-width a[data-v-2c53f060]{display:flex;align-items:center;color:#fff}.site-width a[data-v-2c53f060]{margin:0 34px}@media (max-width:767px){.beian[data-v-2c53f060]{padding:20px 10px}.site-width[data-v-2c53f060]{display:block}.site-width p[data-v-2c53f060]{text-align:center}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 184:
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
var componentNormalizer = __webpack_require__(15);

// CONCATENATED MODULE: ./components/rightNav/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(171)
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
  "26683aea"
  
)

/* harmony default export */ var rightNav = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 185:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.7@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_@nuxt_components@2.1.8@@nuxt/components/dist/loader.js??ref--0-0!./node_modules/_vue-loader@15.9.7@vue-loader/lib??vue-loader-options!./components/rightNav/qrcode.vue?vue&type=template&id=ba090918&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"qrcode"},[_vm._ssrNode("<img"+(_vm._ssrAttr("src",__webpack_require__(173)))+" alt data-v-ba090918>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/rightNav/qrcode.vue?vue&type=template&id=ba090918&scoped=true&

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
var componentNormalizer = __webpack_require__(15);

// CONCATENATED MODULE: ./components/rightNav/qrcode.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(174)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  rightNav_qrcodevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "ba090918",
  "23def6a6"
  
)

/* harmony default export */ var qrcode = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 186:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.7@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_@nuxt_components@2.1.8@@nuxt/components/dist/loader.js??ref--0-0!./node_modules/_vue-loader@15.9.7@vue-loader/lib??vue-loader-options!./components/pop/banner.vue?vue&type=template&id=b98cb6dc&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('model',{on:{"handleBannerPopHide":_vm.handleBannerPopHide}},[_c('div',{staticClass:"content-wrap",attrs:{"slot":"content"},slot:"content"},[_c('div',{staticClass:"title text-c"},[_vm._v("\n      "+_vm._s(_vm.category_name)+"软件\n    ")]),_vm._v(" "),_c('div',{staticClass:"mini-program-img text-c"},[_c('div',{staticClass:"txt"},[_vm._v("\n        扫码去点评\n      ")]),_vm._v(" "),_c('img',{staticClass:"img",attrs:{"src":_vm.qrcodeImgUrl,"alt":""}})])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/pop/banner.vue?vue&type=template&id=b98cb6dc&scoped=true&

// EXTERNAL MODULE: ./components/pop/model.vue + 4 modules
var model = __webpack_require__(169);

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

  data() {
    return {
      category_name: '',
      qrcodeImgUrl: 'https://img.xuanxingbao.com/wxscode.png'
    };
  },

  mounted() {
    this.getRecommendCate();
  },

  methods: {
    handleBannerPopHide() {
      this.$emit('handleBannerPopHide');
    },

    getRecommendCate() {
      this.$requests.cateBanner().then(res => {
        if (res.status === 200 && res.data.result === 'success') {
          let path = 'pages/comment_lists/main?cid=' + res.data.recommendCategoryObj.category_id + '&cname=' + res.data.recommendCategoryObj.category_name;
          this.category_name = res.data.recommendCategoryObj.category_name;
          this.getQrcodeImg(path);
        }
      });
    },

    getQrcodeImg(path) {
      this.$requests.qrcodeGet({
        PATH: path
      }).then(res => {
        if (res.status === 200 && res.data.result === 'success') {
          this.qrcodeImgUrl = 'data:image/jpeg;base64,' + res.data.data;
        }
      });
    }

  }
});
// CONCATENATED MODULE: ./components/pop/banner.vue?vue&type=script&lang=js&
 /* harmony default export */ var pop_bannervue_type_script_lang_js_ = (bannervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/_vue-loader@15.9.7@vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(15);

// CONCATENATED MODULE: ./components/pop/banner.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(176)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pop_bannervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "b98cb6dc",
  "13b8d964"
  
)

/* harmony default export */ var banner = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 187:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.7@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_@nuxt_components@2.1.8@@nuxt/components/dist/loader.js??ref--0-0!./node_modules/_vue-loader@15.9.7@vue-loader/lib??vue-loader-options!./components/Header2.vue?vue&type=template&id=295a11a4&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"header-wrap"},[(_vm.isFixed)?_c('a-anchor',[_c('pHeader',{staticClass:"display-pc",attrs:{"is-show":_vm.isShow},on:{"handleBannerPopShow":_vm.handleBannerPopShow}})],1):_c('pHeader',{staticClass:"display-pc",attrs:{"is-show":_vm.isShow},on:{"handleBannerPopShow":_vm.handleBannerPopShow}}),_vm._ssrNode(" "),_c('mHeader',{staticClass:"display-m"})],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Header2.vue?vue&type=template&id=295a11a4&scoped=true&

// EXTERNAL MODULE: ./components/header/pHeader2.vue + 4 modules
var pHeader2 = __webpack_require__(170);

// EXTERNAL MODULE: ./components/header/mHeader.vue + 4 modules
var mHeader = __webpack_require__(38);

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.2.2@babel-loader/lib??ref--2-0!./node_modules/_@nuxt_components@2.1.8@@nuxt/components/dist/loader.js??ref--0-0!./node_modules/_vue-loader@15.9.7@vue-loader/lib??vue-loader-options!./components/Header2.vue?vue&type=script&lang=js&
//
//
//
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

    },
    isFixed: {
      type: Boolean,

      default() {
        return true;
      }

    }
  },
  methods: {
    handleBannerPopShow() {
      this.$emit('handleBannerPopShow');
    }

  }
});
// CONCATENATED MODULE: ./components/Header2.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Header2vue_type_script_lang_js_ = (Header2vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/_vue-loader@15.9.7@vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(15);

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
  "295a11a4",
  "3b677428"
  
)

/* harmony default export */ var Header2 = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 188:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.7@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_@nuxt_components@2.1.8@@nuxt/components/dist/loader.js??ref--0-0!./node_modules/_vue-loader@15.9.7@vue-loader/lib??vue-loader-options!./components/Footer.vue?vue&type=template&id=2c53f060&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('a-layout-footer',{staticClass:"footer"},[_c('a-row',[_c('a-col',[_c('a-row',{staticClass:"g-wrapper",attrs:{"getter":"16"}},_vm._l((_vm.cateInfo),function(item,index){return _c('a-col',{key:index,staticClass:"gutter-row footerInfo",attrs:{"span":"6"}},[_c('a',{staticClass:"ca_text",attrs:{"href":item.path,"title":item.text}},[_vm._v(_vm._s(item.text))]),_vm._v(" "),_c('p',{staticClass:"qc_text"},[_vm._v("\n            "+_vm._s(item.title)+"\n          ")]),_vm._v(" "),_c('img',{staticClass:"qcrodeImg",attrs:{"src":item.img,"alt":""}})])}),1)],1),_vm._v(" "),_c('a-col',{staticClass:"beian"},[_c('div',{staticClass:"site-width"},[_c('p',[_vm._v("© 2021 选型宝，All Rights Reserved.")]),_vm._v(" "),_c('p',[_c('a',{attrs:{"href":"#"}},[_vm._v("京ICP备14045422号-2 北京众智优选科技有限公司")])])]),_vm._v(" "),_c('div',{staticClass:"site-width"},[_c('p',[_vm._v("地址：北京市朝阳区百子湾西里435号创富港436")])])])],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Footer.vue?vue&type=template&id=2c53f060&scoped=true&

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
        img: __webpack_require__(178),
        path: '/all'
      }, {
        text: '关于我们',
        title: '选型宝订阅号',
        img: __webpack_require__(179),
        path: 'http://old.xuanxingbao.com/webPC/about'
      }, {
        text: '联系我们',
        title: '选型宝小程序',
        img: __webpack_require__(180),
        path: 'http://old.xuanxingbao.com/webPC/contact-list.html'
      }, {
        text: '加入我们',
        title: '选型宝服务号',
        img: __webpack_require__(181),
        path: 'http://old.xuanxingbao.com/webPC/participate.html'
      }]
    };
  }

});
// CONCATENATED MODULE: ./components/Footer.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Footervue_type_script_lang_js_ = (Footervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/_vue-loader@15.9.7@vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(15);

// CONCATENATED MODULE: ./components/Footer.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(182)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Footervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "2c53f060",
  "5c966088"
  
)

/* harmony default export */ var Footer = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 189:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_noData_vue_vue_type_style_index_0_id_1feed65b_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(160);
/* harmony import */ var _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_noData_vue_vue_type_style_index_0_id_1feed65b_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_noData_vue_vue_type_style_index_0_id_1feed65b_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_noData_vue_vue_type_style_index_0_id_1feed65b_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_noData_vue_vue_type_style_index_0_id_1feed65b_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 190:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(8);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(37);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(191);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".no-data-wrap[data-v-1feed65b]{width:100%;height:100%;background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");background-size:197px 128px;background-repeat:no-repeat;background-position:50%;position:relative}.no-data-wrap .txt-wrap[data-v-1feed65b]{color:#a3a3a3;position:absolute;left:50%;bottom:20%;transform:translate(-50%,-50%)}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 191:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/nodata.814e089.png";

/***/ }),

/***/ 192:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(198);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(9).default
module.exports.__inject__ = function (context) {
  add("5ba9a028", content, true, context)
};

/***/ }),

/***/ 193:
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
var componentNormalizer = __webpack_require__(15);

// CONCATENATED MODULE: ./components/hasNoData/noData.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(189)
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
  "3905658f"
  
)

/* harmony default export */ var noData = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 194:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(204);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(9).default
module.exports.__inject__ = function (context) {
  add("450f7a8b", content, true, context)
};

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.7@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_@nuxt_components@2.1.8@@nuxt/components/dist/loader.js??ref--0-0!./node_modules/_vue-loader@15.9.7@vue-loader/lib??vue-loader-options!./components/Slider.vue?vue&type=template&id=187e41cc&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"slider-wrap"},[_vm._t("report-txt"),_vm._ssrNode(" "),_vm._ssrNode("<div>","</div>",[_vm._ssrNode("<h2 class=\"slider-title\">","</h2>",[_vm._t("slider-title")],2),_vm._ssrNode(" "),_vm._ssrNode("<div>","</div>",[_vm._t("slider-nav-bar")],2)],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Slider.vue?vue&type=template&id=187e41cc&

// EXTERNAL MODULE: ./node_modules/_vue-loader@15.9.7@vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(15);

// CONCATENATED MODULE: ./components/Slider.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "49d910ce"
  
)

/* harmony default export */ var Slider = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_style_index_0_id_d40efb78_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(192);
/* harmony import */ var _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_style_index_0_id_d40efb78_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_style_index_0_id_d40efb78_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_style_index_0_id_d40efb78_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_style_index_0_id_d40efb78_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 198:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(8);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".link[data-v-d40efb78]{color:#222;transition:.5s}.link[data-v-d40efb78]:hover{color:#007dff;text-decoration:underline}.view[data-v-d40efb78]{width:100%;display:flex;justify-content:flex-start}.view .range[data-v-d40efb78]{width:10%;position:relative;color:#fff;background-color:#92b2f1}.view .range span[data-v-d40efb78]{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%)}.view.c1 .range[data-v-d40efb78]{background-color:#f55b53}.view.c1 .score-box[data-v-d40efb78]{background-color:#f55c53!important}.view.c2 .range[data-v-d40efb78]{background-color:#f2ab38}.view.c2 .score-box[data-v-d40efb78]{background-color:#f2ab38!important}.view.c3 .range[data-v-d40efb78]{background-color:#5fcd81}.view.c3 .score-box[data-v-d40efb78]{background-color:#5fcd81!important}.view .info[data-v-d40efb78]{width:calc(90% - 40px);padding:10px 20px}.view .info .title[data-v-d40efb78]{font-size:17px;font-weight:700;margin-bottom:10px}.view .info .score[data-v-d40efb78]{display:flex;flex-direction:row;justify-content:space-between}.view .info .score .score-box[data-v-d40efb78]{background-color:#90b2f1;color:#fff;padding:2px 4px;border-radius:4px}.view .info .bar-box[data-v-d40efb78]{width:218px;height:13px;margin:10px 0;background-color:#e6e6e6;border-radius:50px}.view .info .bar-box .bar[data-v-d40efb78]{height:13px;display:flex;justify-content:space-between;align-items:center;width:0;box-sizing:border-box;padding:0 10px;border-radius:50px;transition:width .8s ease-in-out}.view .info .bar-box .bar.s1[data-v-d40efb78]{background:#f55a53;background:linear-gradient(90deg,#f55a53,#eb8a5d)}.view .info .bar-box .bar.s2[data-v-d40efb78]{background:#f2a937;background:linear-gradient(90deg,#f2a937,#ebd458)}.view .info .bar-box .bar.s3[data-v-d40efb78]{background:#5ecd80;background:linear-gradient(90deg,#5ecd80,#80cca5)}.view .info .bar-box .bar.s4[data-v-d40efb78]{background:#37a2f1;background:linear-gradient(90deg,#8fb1f0,#a3baf9)}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.7@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_@nuxt_components@2.1.8@@nuxt/components/dist/loader.js??ref--0-0!./node_modules/_vue-loader@15.9.7@vue-loader/lib??vue-loader-options!./components/rank/list.vue?vue&type=template&id=d40efb78&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"view",class:_vm.index < 3 ? 'c'+ (_vm.index+1) : 'c4'},[_vm._ssrNode("<div class=\"range\" data-v-d40efb78><span data-v-d40efb78>"+_vm._ssrEscape("\n      "+_vm._s((_vm.index+1))+"\n    ")+"</span></div> <div class=\"info\" data-v-d40efb78><div class=\"title\" data-v-d40efb78><div class=\"link\" data-v-d40efb78>"+_vm._ssrEscape("\n        "+_vm._s(_vm.item.factory_short_name)+"\n      ")+"</div></div> <div class=\"score\" data-v-d40efb78><div class=\"score-box\" data-v-d40efb78>"+_vm._ssrEscape("\n        "+_vm._s(_vm.item.avgNum)+"分\n      ")+"</div> <div class=\"comment\" data-v-d40efb78><span data-v-d40efb78>"+_vm._ssrEscape("\n          "+_vm._s(_vm.item.dpnum)+"条\n        ")+"</span> <span data-v-d40efb78>\n          有价值点评\n        </span></div></div> <div class=\"bar-box\" data-v-d40efb78><div"+(_vm._ssrClass("bar",_vm.index < 3 ? 's'+ (_vm.index+1) : 's4'))+" style=\"width:50%\" data-v-d40efb78></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/rank/list.vue?vue&type=template&id=d40efb78&scoped=true&

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.2.2@babel-loader/lib??ref--2-0!./node_modules/_@nuxt_components@2.1.8@@nuxt/components/dist/loader.js??ref--0-0!./node_modules/_vue-loader@15.9.7@vue-loader/lib??vue-loader-options!./components/rank/list.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var listvue_type_script_lang_js_ = ({
  props: {
    index: {
      type: Number,

      default() {
        return 0;
      }

    },
    item: {
      type: Object,

      default() {
        return null;
      }

    }
  }
});
// CONCATENATED MODULE: ./components/rank/list.vue?vue&type=script&lang=js&
 /* harmony default export */ var rank_listvue_type_script_lang_js_ = (listvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/_vue-loader@15.9.7@vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(15);

// CONCATENATED MODULE: ./components/rank/list.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(197)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  rank_listvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "d40efb78",
  "6cfcb411"
  
)

/* harmony default export */ var list = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_contact_vue_vue_type_style_index_0_id_5d504339_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(194);
/* harmony import */ var _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_contact_vue_vue_type_style_index_0_id_5d504339_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_contact_vue_vue_type_style_index_0_id_5d504339_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_contact_vue_vue_type_style_index_0_id_5d504339_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_contact_vue_vue_type_style_index_0_id_5d504339_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 204:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(8);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".contact-wrap[data-v-5d504339]{position:fixed;left:0;right:0;top:0;bottom:0;z-index:10}.model[data-v-5d504339]{width:100%;height:100%;background-color:rgba(6,21,26,.67)}.form[data-v-5d504339]{position:absolute;top:50%;width:568px;padding:30px;left:50%;transform:translate(-50%,-50%);background-color:#fff}.note[data-v-5d504339]{color:#222;margin-bottom:10px}.note .h2[data-v-5d504339]{font-size:24px}.close-btn[data-v-5d504339]{position:absolute;right:30px;top:30px}[data-v-5d504339] .ant-form-item{margin-bottom:0}@media (max-width:767px){.form[data-v-5d504339]{width:100%}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.7@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_@nuxt_components@2.1.8@@nuxt/components/dist/loader.js??ref--0-0!./node_modules/_vue-loader@15.9.7@vue-loader/lib??vue-loader-options!./components/productDetail/contact.vue?vue&type=template&id=5d504339&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.formShow),expression:"formShow"}],staticClass:"contact-wrap"},[_vm._ssrNode("<div class=\"model\" data-v-5d504339></div> "),_vm._ssrNode("<div class=\"form\" data-v-5d504339>","</div>",[_vm._ssrNode("<div class=\"note\" data-v-5d504339><div class=\"h2\" data-v-5d504339>"+_vm._ssrEscape("\n        "+_vm._s(_vm.$configs.APPLY.FORM.ONE)+"\n      ")+"</div> <div data-v-5d504339>"+_vm._ssrEscape(_vm._s(_vm.$configs.APPLY.FORM.TWO))+"</div></div> "),_vm._ssrNode("<div class=\"close-btn\" data-v-5d504339>","</div>",[_c('a-icon',{staticStyle:{"font-size":"24px"},attrs:{"type":"close"}})],1),_vm._ssrNode(" "),_c('a-form',{attrs:{"form":_vm.form},on:{"submit":_vm.handleSubmit}},[_c('a-form-item',{attrs:{"label":"姓名"}},[_c('a-input',{directives:[{name:"decorator",rawName:"v-decorator",value:([
            'nickname',
            {
              rules: [{ required: true, min: 2, max: 8, message: '请按要求输入您的姓名!', whitespace: true }],
            } ]),expression:"[\n            'nickname',\n            {\n              rules: [{ required: true, min: 2, max: 8, message: '请按要求输入您的姓名!', whitespace: true }],\n            },\n          ]"}],attrs:{"placeholder":"输入2-8个汉字"}})],1),_vm._v(" "),_c('a-form-item',{attrs:{"label":"公司"}},[_c('a-input',{directives:[{name:"decorator",rawName:"v-decorator",value:([
            'company',
            {
              rules: [{ required: true, message: '请填写公司!', whitespace: true }],
            } ]),expression:"[\n            'company',\n            {\n              rules: [{ required: true, message: '请填写公司!', whitespace: true }],\n            },\n          ]"}],attrs:{"placeholder":"请输入公司名称"}})],1),_vm._v(" "),_c('a-form-item',{attrs:{"label":"职位"}},[_c('a-input',{directives:[{name:"decorator",rawName:"v-decorator",value:([
            'title',
            {
              rules: [{ required: true, message: '请填写职位!', whitespace: true }],
            } ]),expression:"[\n            'title',\n            {\n              rules: [{ required: true, message: '请填写职位!', whitespace: true }],\n            },\n          ]"}],attrs:{"placeholder":"请输入职位名称"}})],1),_vm._v(" "),_c('a-form-item',{attrs:{"label":"手机号"}},[_c('a-input',{directives:[{name:"decorator",rawName:"v-decorator",value:([
            'phone',
            {
              rules: [{ required: true, pattern: '^[1]([3-9])[0-9]{9}$',message: '请输入合法手机号!', whitespace: true }],
            } ]),expression:"[\n            'phone',\n            {\n              rules: [{ required: true, pattern: '^[1]([3-9])[0-9]{9}$',message: '请输入合法手机号!', whitespace: true }],\n            },\n          ]"}],attrs:{"placeholder":"请输入11位手机号"}})],1),_vm._v(" "),_c('a-form-item',{attrs:{"label":"邮箱"}},[_c('a-input',{directives:[{name:"decorator",rawName:"v-decorator",value:([
            'email',
            {
              rules: [
                {
                  type: 'email',
                  message: '输入的邮箱无效!',
                },
                {
                  required: true,
                  message: '请输入邮箱!',
                } ],
            } ]),expression:"[\n            'email',\n            {\n              rules: [\n                {\n                  type: 'email',\n                  message: '输入的邮箱无效!',\n                },\n                {\n                  required: true,\n                  message: '请输入邮箱!',\n                },\n              ],\n            },\n          ]"}],attrs:{"placeholder":"请输入有效邮箱"}})],1),_vm._v(" "),_c('a-form-item',{staticStyle:{"text-align":"center"}},[_c('a-button',{attrs:{"type":"primary","html-type":"submit"}},[_vm._v("\n          提交\n        ")])],1)],1)],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/productDetail/contact.vue?vue&type=template&id=5d504339&scoped=true&

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.2.2@babel-loader/lib??ref--2-0!./node_modules/_@nuxt_components@2.1.8@@nuxt/components/dist/loader.js??ref--0-0!./node_modules/_vue-loader@15.9.7@vue-loader/lib??vue-loader-options!./components/productDetail/contact.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var contactvue_type_script_lang_js_ = ({
  props: {
    formShow: {
      type: Boolean,

      default() {
        return true;
      }

    }
  },

  beforeCreate() {
    this.form = this.$form.createForm(this, {
      name: 'register'
    });
  },

  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
          let data = {};
          data.REALNAME = values.nickname || '';
          data.NICKNAME = values.nickname || '';
          data.COMPANY = values.company || '';
          data.POSITION = values.title || '';
          data.USER_EMAIL = values.email || '';
          data.PHONE = values.phone || '';
          this.$emit('submit', data);
        }
      });
    },

    close() {
      this.$emit('formHide');
    },

    clear() {
      this.form.resetFields();
    }

  }
});
// CONCATENATED MODULE: ./components/productDetail/contact.vue?vue&type=script&lang=js&
 /* harmony default export */ var productDetail_contactvue_type_script_lang_js_ = (contactvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/_vue-loader@15.9.7@vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(15);

// CONCATENATED MODULE: ./components/productDetail/contact.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(203)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  productDetail_contactvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "5d504339",
  "3aa384a7"
  
)

/* harmony default export */ var contact = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 273:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(308);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(9).default
module.exports.__inject__ = function (context) {
  add("64e895e3", content, true, context)
};

/***/ }),

/***/ 306:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/hot.90e0b26.png";

/***/ }),

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_56d9f9cd_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(273);
/* harmony import */ var _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_56d9f9cd_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_56d9f9cd_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_56d9f9cd_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_56d9f9cd_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 308:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(8);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".view-wrap[data-v-56d9f9cd]{background-color:#fff;margin-bottom:10px;border-radius:4px;overflow:hidden;cursor:pointer;display:block;color:#555}.relate-product[data-v-56d9f9cd]{min-height:70vh}.company-info-wrap[data-v-56d9f9cd]{background-color:#fff;border-radius:4px;padding:20px 30px}.company-info-wrap .right[data-v-56d9f9cd]{width:27%;justify-content:flex-end}.short-name[data-v-56d9f9cd]{font-size:28px;font-weight:700;margin-bottom:20px}.full-name[data-v-56d9f9cd]{font-size:18px;margin-bottom:20px}.hot-icon[data-v-56d9f9cd]{width:74px;margin-top:-10px;margin-left:10px}.tip[data-v-56d9f9cd]{font-size:20px;font-weight:700;margin-bottom:10px}.reviews[data-v-56d9f9cd]{margin-top:10px}.reviews span[data-v-56d9f9cd]{font-size:18px}.product-list[data-v-56d9f9cd]{margin-top:26px;background-color:#fff;padding:30px 20px 10px;border-radius:4px}.product-list .product-item[data-v-56d9f9cd]{margin-bottom:20px;cursor:pointer;color:#555}.product-list .pro-logo[data-v-56d9f9cd]{margin-right:10px}.product-list .pro-info[data-v-56d9f9cd]{width:70%}.product-list .pro-info .count[data-v-56d9f9cd]{font-size:12px;color:#fff;background-color:#ff492c;border-radius:4px;padding:2px 4px;margin-right:10px}.product-list .pro-info .link[data-v-56d9f9cd]{display:block;color:#222;font-size:16px;font-weight:700;margin-bottom:6px;transition:.5s}.product-list .pro-info .link[data-v-56d9f9cd]:hover{color:#007dff;text-decoration:underline}.btn-wrap[data-v-56d9f9cd]{display:flex;align-items:center}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.7@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_@nuxt_components@2.1.8@@nuxt/components/dist/loader.js??ref--0-0!./node_modules/_vue-loader@15.9.7@vue-loader/lib??vue-loader-options!./pages/reputation/_id.vue?vue&type=template&id=56d9f9cd&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"main"},[_c('a-anchor',{staticClass:"default"},[_c('Header2',{attrs:{"is-show":true},on:{"handleBannerPopShow":_vm.handleBannerPopShow}})],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"container-index\" data-v-56d9f9cd>","</div>",[_c('a-row',[_c('a-col',{attrs:{"span":24}},[_c('a-row',{staticClass:"g-wrapper",attrs:{"gutter":[32, 32]}},[_c('a-col',{attrs:{"span":16}},[_c('div',{staticClass:"company-info-wrap g-flex space-between"},[_c('div',{staticClass:"company-name left"},[_c('div',{staticClass:"short-name"},[_vm._v("\n                  "+_vm._s(_vm.companyInfo.factoryQcObj.FACTORY_SHORT_NAME)+"\n                ")]),_vm._v(" "),_c('div',{staticClass:"full-name"},[_vm._v("\n                  "+_vm._s(_vm.companyInfo.factoryQcObj.QCNAME)+"\n                ")]),_vm._v(" "),_c('div',{staticClass:"g-flex"},[_c('div',{staticClass:"category"},[_vm._v("\n                    "+_vm._s(_vm.categoryName || _vm.companyInfo.categoryObj.CNAME)+"类\n                  ")]),_vm._v(" "),_c('img',{staticClass:"hot-icon",attrs:{"src":__webpack_require__(306),"alt":""}})])]),_vm._v(" "),(_vm.companyInfo.factoryQcScoreObj)?_c('div',{staticClass:"g-flex right"},[_c('div',{staticClass:"text-c"},[_c('div',{staticClass:"tip"},[_vm._v("\n                    用户口碑\n                  ")]),_vm._v(" "),_c('div',{staticClass:"tip"},[_vm._v("\n                    "+_vm._s(_vm.companyInfo.factoryQcScoreObj.avgNum)+"分\n                  ")]),_vm._v(" "),_c('div',{staticClass:"star-wrap"},[_c('Star',{attrs:{"out-width":100,"out-height":20,"decimal":_vm.companyInfo.factoryQcScoreObj.avgNum/5}})],1),_vm._v(" "),_c('div',{staticClass:"reviews"},[_c('span',[_vm._v(_vm._s(_vm.companyInfo.factoryQcScoreObj.dpnum)+"条")]),_vm._v("有价值点评\n                  ")])])]):_c('div',{staticClass:"right"},[_c('div',{staticClass:"review-btn",staticStyle:{"padding":"12px"},on:{"click":function($event){$event.stopPropagation();return _vm.goToReview.apply(null, arguments)}}},[_vm._v("\n                  我要点评\n                ")])])]),_vm._v(" "),_c('div',{staticClass:"relate-product"},[(_vm.productList.length)?_c('div',{staticClass:"product-list"},_vm._l((_vm.productList),function(item,index){return _c('nuxt-link',{key:index,staticClass:"product-item g-flex",attrs:{"span":24,"to":{name:'productDetail-id', params:{ id: item.ID}},"target":"_blank"}},[_c('div',{staticClass:"pro-logo"},[_c('img',{attrs:{"src":"https://via.placeholder.com/80","alt":""}})]),_vm._v(" "),_c('div',{staticClass:"pro-info"},[_c('div',{staticClass:"title"},[_c('div',{staticClass:"link"},[_vm._v("\n                        "+_vm._s(item.NAME)+"\n                      ")])]),_vm._v(" "),(item.avgNum)?_c('div',[_c('div',{staticClass:"g-flex",staticStyle:{"align-items":"center"}},[_c('span',{staticClass:"count"},[_vm._v(_vm._s(item.avgNum)+"分")]),_vm._v(" "),_c('Star',{attrs:{"out-width":80,"out-height":16,"decimal":item.avgNum/5}})],1),_vm._v(" "),_c('div',{staticClass:"reviews"},[_vm._v("\n                        "+_vm._s(item.dpnum)+"条有价值点评\n                      ")])]):_c('div',{staticClass:"no-review",staticStyle:{"font-size":"13px","margin-top":"20px"}},[_c('span',{staticStyle:{"margin-right":"10px"}},[_vm._v("暂无点评")])])]),_vm._v(" "),_c('div',{staticClass:"btn-wrap"},[(item.avgNum)?_c('span',{staticClass:"check-comment"},[_vm._v("查看点评")]):_c('span',{staticClass:"review-btn",on:{"click":function($event){$event.stopPropagation();return _vm.goToReview.apply(null, arguments)}}},[_vm._v("马上去点评")])])])}),1):_c('div',{staticStyle:{"width":"100%","height":"400px"}},[_c('no-data',[_c('div',{staticStyle:{"font-size":"14px"},attrs:{"slot":"txt"},slot:"txt"},[_vm._v("\n                    暂无数据~\n                  ")])])],1)])]),_vm._v(" "),_c('a-col',{attrs:{"span":8}},[_c('Slider',[_c('div',{staticClass:"report-wrap",attrs:{"slot":"report-txt"},slot:"report-txt"},[_c('div',{staticClass:"txt1"},[_vm._v("\n                  "+_vm._s(_vm.categoryName || _vm.companyInfo.categoryObj.CNAME)+"选型\n                ")]),_vm._v(" "),_c('div',{staticClass:"txt2"},[_vm._v("\n                  用户口碑报告\n                ")])])]),_vm._v(" "),_c('div',{staticClass:"contact-btn",on:{"click":_vm.formHandleShow}},[_vm._v("\n              请厂商联系我\n            ")]),_vm._v(" "),_c('Slider',[_c('div',{staticClass:"g-flex space-between",attrs:{"slot":"slider-title"},on:{"click":_vm.navigateToRank},slot:"slider-title"},[_c('span',[_vm._v(_vm._s(_vm.categoryName || _vm.companyInfo.categoryObj.CNAME)+"厂商口碑排名")]),_vm._v(" "),_c('span',{staticStyle:{"font-size":"14px","color":"#a9a9a9","cursor":"pointer"}},[_vm._v("查看完整")])]),_vm._v(" "),(_vm.hotCompanyList.length)?_c('div',{staticClass:"slider-nav-bar",attrs:{"slot":"slider-nav-bar"},slot:"slider-nav-bar"},[_c('h3',[_vm._v("热门厂商")]),_vm._v(" "),_vm._l((_vm.hotCompanyList),function(item,index){return _c('nuxt-link',{key:index,staticClass:"view-wrap",attrs:{"target":"_blank","to":{name: 'reputation-id',params: {id: _vm.categoryId},query: {category_name:_vm.categoryName,factory_id: item.qcid}}}},[_c('rankListItem',{attrs:{"item":item,"index":index}})],1)})],2):_vm._e(),_vm._v(" "),(_vm.challengerList.length)?_c('div',{staticClass:"slider-nav-bar",attrs:{"slot":"slider-nav-bar"},slot:"slider-nav-bar"},[_c('h3',[_vm._v("挑战者")]),_vm._v(" "),_vm._l((_vm.challengerList),function(item,index){return _c('nuxt-link',{key:index,staticClass:"view-wrap",attrs:{"target":"_blank","to":{name: 'reputation-id',params: {id: _vm.categoryId},query: {category_name:_vm.categoryName,factory_id: item.qcid}}}},[_c('rankListItem',{attrs:{"item":item,"index":index}})],1)})],2):_vm._e(),_vm._v(" "),(_vm.noReviewList.length)?_c('div',{staticClass:"slider-nav-bar",attrs:{"slot":"slider-nav-bar"},slot:"slider-nav-bar"},[_c('h3',[_vm._v("暂无点评的厂商")]),_vm._v(" "),_vm._l((_vm.noReviewList),function(item,index){return _c('nuxt-link',{key:index,staticClass:"view-wrap",attrs:{"target":"_blank","to":{name: 'reputation-id',params: {id: _vm.categoryId},query: {category_name:_vm.categoryName,factory_id: item.qcid}}}},[_c('div',{staticClass:"view"},[_c('div',{staticClass:"g-flex space-between",staticStyle:{"padding":"20px","width":"100%"}},[_c('span',[_vm._v(_vm._s(item.factory_short_name || item.qcname))]),_vm._v(" "),_c('span',{staticClass:"review-btn",on:{"click":function($event){$event.stopPropagation();return _vm.goToReview.apply(null, arguments)}}},[_vm._v("我要点评")])])])])})],2):_vm._e()])],1)],1)],1)],1)],1),_vm._ssrNode(" "),_c('contact',{ref:"child",attrs:{"form-show":_vm.formShow},on:{"formHide":_vm.formHandleHide,"submit":_vm.submitForm}}),_vm._ssrNode(" "),_c('banner-pop',{directives:[{name:"show",rawName:"v-show",value:(_vm.bannerPopShow),expression:"bannerPopShow"}],on:{"handleBannerPopHide":_vm.handleBannerPopHide}}),_vm._ssrNode(" "),_c('rightNav',[_c('qrcode')],1),_vm._ssrNode(" "),_c('Footer')],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/reputation/_id.vue?vue&type=template&id=56d9f9cd&scoped=true&

// EXTERNAL MODULE: ./components/common/starComp/StarZoom.vue + 4 modules
var StarZoom = __webpack_require__(159);

// EXTERNAL MODULE: ./components/hasNoData/noData.vue + 4 modules
var noData = __webpack_require__(193);

// EXTERNAL MODULE: ./components/rank/list.vue + 4 modules
var list = __webpack_require__(202);

// EXTERNAL MODULE: ./components/productDetail/contact.vue + 4 modules
var contact = __webpack_require__(208);

// EXTERNAL MODULE: ./components/rightNav/index.vue + 4 modules
var rightNav = __webpack_require__(184);

// EXTERNAL MODULE: ./components/rightNav/qrcode.vue + 4 modules
var qrcode = __webpack_require__(185);

// EXTERNAL MODULE: ./components/pop/banner.vue + 4 modules
var banner = __webpack_require__(186);

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.2.2@babel-loader/lib??ref--2-0!./node_modules/_@nuxt_components@2.1.8@@nuxt/components/dist/loader.js??ref--0-0!./node_modules/_vue-loader@15.9.7@vue-loader/lib??vue-loader-options!./pages/reputation/_id.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'Id',
  components: {
    Star: StarZoom["default"],
    noData: noData["default"],
    rankListItem: list["default"],
    contact: contact["default"],
    rightNav: rightNav["default"],
    qrcode: qrcode["default"],
    bannerPop: banner["default"]
  },
  watchQuery: ['factory_id'],

  async asyncData(vm) {
    /*
    * vm.params带有一个参数：
    * id:类别id
    * vm.query带有两个参数:
    * category_name:类别名称
    * factory_id：厂商id
    * */
    const categoryName = vm.query.category_name;
    const categoryId = vm.params.id;
    const factoryId = vm.query.factory_id;
    const data = {
      CATEGORY_ID: categoryId,
      FACTORY_QCID: factoryId
    };
    let listInfoRes = await vm.$requests.publicCompanyDetail(data);
    console.log(listInfoRes);
    let companyInfo = {};

    if (listInfoRes.status === 200 && listInfoRes.data.result === 'success') {
      companyInfo.categoryObj = listInfoRes.data.categoryObj;
      companyInfo.factoryQcObj = listInfoRes.data.factoryQcObj;
      companyInfo.factoryQcScoreObj = listInfoRes.data.factoryQcScoreObj;
    } // 某厂商某类别的产品列表


    const listRes = await vm.$requests.publicCompany(data);
    let productList = listRes.status === 200 && listRes.data.result === 'success' ? listRes.data.productList : []; // 厂商排行列表(热门、挑战者、暂无点评厂商)

    let hotCompanyListRes = await vm.$requests.categoryHotCompany({
      ORDER_TYPE: 0,
      // 0按点评量，1按点评分数
      CATEGORY_ID: categoryId
    });
    let hotCompanyList = hotCompanyListRes.status === 200 && hotCompanyListRes.data.result === 'success' ? hotCompanyListRes.data.factoryQcList : [];
    let challengerRes = await vm.$requests.categoryChallenger({
      ORDER_TYPE: 0,
      // 0按点评量，1按点评分数
      CATEGORY_ID: categoryId
    });
    let challengerList = challengerRes.status === 200 && challengerRes.data.result === 'success' ? challengerRes.data.factoryQcList : [];
    let noReviewRes = await vm.$requests.categoryNoComment({
      CATEGORY_ID: categoryId
    });
    let noReviewList = noReviewRes.status === 200 && noReviewRes.data.result === 'success' ? noReviewRes.data.notScoreList : [];
    return {
      hotCompanyList,
      challengerList,
      noReviewList,
      productList,
      categoryName,
      categoryId,
      factoryId,
      companyInfo,
      factory_short_name: companyInfo.factoryQcObj.FACTORY_SHORT_NAME || companyInfo.factoryQcObj.QCNAME || '选型宝',
      formShow: false,
      bannerPopShow: false // 弹窗是否展示

    };
  },

  methods: {
    handleBannerPopShow() {
      this.bannerPopShow = true;
    },

    handleBannerPopHide() {
      this.bannerPopShow = false;
    },

    formHandleShow() {
      this.formShow = true;
    },

    formHandleHide() {
      this.formShow = false;
    },

    async submitForm(data) {
      data.CATEGORY_ID = this.categoryId || '';
      data.CATEGORY_NAME = this.categoryName || '';
      data.FACTORY_ID = this.factoryId || '';
      data.FACTORY_NAME = this.factory_short_name || '';
      data.USER_ID = '';
      let applyRes = await this.$requests.productApply(data);

      if (applyRes.status === 200 && applyRes.data.result === 'success') {
        this.$message.success('提交成功，我们会尽快通知厂商联系您!');
        this.$refs.child.clear();
        this.formShow = false;
      } else {
        this.$message.error('提交失败，请稍后重试!');
        this.formShow = false;
      }
    },

    // 去点评
    goToReview() {
      this.$message.warning('我要点评!');
    },

    navigateToRank() {
      let routeUrl = this.$router.resolve({
        name: 'company-id',
        params: {
          id: this.categoryId
        },
        query: {
          category_name: this.categoryName
        }
      });
      window.open(routeUrl.href, '_blank');
    }

  },

  head() {
    return {
      title: this.factory_short_name + ' ' + this.categoryName + '系统_软件的用户实名口碑_选型宝',
      meta: [{
        hid: 'description',
        name: 'description',
        content: '想了解' + this.factory_short_name + ' ' + this.categoryName + '系统、' + this.factory_short_name + ' ' + this.categoryName + '软件的用户口碑怎么样？?就上选型宝, 企业级软件的大众点评，实名制的CIO选型经验交流社区'
      }, {
        hid: 'keywords',
        name: 'keywords',
        content: this.factory_short_name + ' ' + this.categoryName + '系统_' + this.factory_short_name + ' ' + this.categoryName + '软件'
      }]
    };
  }

});
// CONCATENATED MODULE: ./pages/reputation/_id.vue?vue&type=script&lang=js&
 /* harmony default export */ var reputation_idvue_type_script_lang_js_ = (_idvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/_vue-loader@15.9.7@vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(15);

// CONCATENATED MODULE: ./pages/reputation/_id.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(307)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  reputation_idvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "56d9f9cd",
  "de5a1b10"
  
)

/* harmony default export */ var _id = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Header2: __webpack_require__(187).default,Slider: __webpack_require__(196).default,Footer: __webpack_require__(188).default})


/***/ })

};;
//# sourceMappingURL=_id.js.map