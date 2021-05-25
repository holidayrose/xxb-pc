exports.ids = [18];
exports.modules = {

/***/ 162:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(207);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("5745e30a", content, true, context)
};

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_price_vue_vue_type_style_index_0_id_99b567e0_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(162);
/* harmony import */ var _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_price_vue_vue_type_style_index_0_id_99b567e0_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_price_vue_vue_type_style_index_0_id_99b567e0_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_price_vue_vue_type_style_index_0_id_99b567e0_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_price_vue_vue_type_style_index_0_id_99b567e0_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 207:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".price-box[data-v-99b567e0]{border:1px solid #e5e5e5;margin-bottom:20px;display:flex;flex-direction:column}.price-title[data-v-99b567e0]{height:48px;background:linear-gradient(100deg,#e5eaf2,#d1dde8);overflow:hidden;text-overflow:ellipsis;font-size:16px;font-weight:600;color:#586166;text-align:center;display:flex;align-items:center;justify-content:center}.price-main[data-v-99b567e0]{height:100px}.price-main .price[data-v-99b567e0]{font-size:20px;font-weight:600;color:#ff9300}.price-main .desc[data-v-99b567e0]{margin:8px auto 0;height:32px;font-size:12px;color:#666}.price-txt[data-v-99b567e0]{flex:1;background-color:rgba(209,219,230,.16);padding:20px 16px;font-size:13px;line-height:20px;display:flex;align-items:center;justify-content:center;white-space:pre-wrap}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.7@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_@nuxt_components@2.1.8@@nuxt/components/dist/loader.js??ref--0-0!./node_modules/_vue-loader@15.9.7@vue-loader/lib??vue-loader-options!./components/productDetail/price.vue?vue&type=template&id=99b567e0&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('a-row',{staticClass:"g-flex",attrs:{"gutter":[16,16]}},[_c('a-col',{staticClass:"g-flex",staticStyle:{"flex-wrap":"wrap"},attrs:{"span":"8"}},[_c('div',{staticClass:"price-box"},[_c('div',{staticClass:"price-title"},[_vm._v("\n        免费试用版\n      ")]),_vm._v(" "),_c('div',{staticClass:"price-main g-flex v-center"},[_c('span',{staticClass:"price"},[_vm._v("免费")]),_vm._v(" "),_c('span',{staticClass:"desc"},[_vm._v("免费试用")])]),_vm._v(" "),_c('div',{staticClass:"price-txt"},[_vm._v("\n        免费试用版享有全部功能，不限制时间，但限制2个并发(同时2个电脑访问数据分析平台)\n      ")])])]),_vm._v(" "),_c('a-col',{staticClass:"g-flex",staticStyle:{"flex-wrap":"wrap"},attrs:{"span":"8"}},[_c('div',{staticClass:"price-box"},[_c('div',{staticClass:"price-title"},[_vm._v("\n        商用版\n      ")]),_vm._v(" "),_c('div',{staticClass:"price-main g-flex v-center"},[_c('span',{staticClass:"price"},[_vm._v("￥145")]),_vm._v(" "),_c('span',{staticClass:"desc"},[_vm._v("/人/月")])]),_vm._v(" "),_c('div',{staticClass:"price-txt"},[_vm._v("\n        根据项目不同，一般几w-几十w左右，商业版无任何限制\n      ")])])])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/productDetail/price.vue?vue&type=template&id=99b567e0&scoped=true&

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.2.2@babel-loader/lib??ref--2-0!./node_modules/_@nuxt_components@2.1.8@@nuxt/components/dist/loader.js??ref--0-0!./node_modules/_vue-loader@15.9.7@vue-loader/lib??vue-loader-options!./components/productDetail/price.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var pricevue_type_script_lang_js_ = ({
  name: 'Price'
});
// CONCATENATED MODULE: ./components/productDetail/price.vue?vue&type=script&lang=js&
 /* harmony default export */ var productDetail_pricevue_type_script_lang_js_ = (pricevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/_vue-loader@15.9.7@vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/productDetail/price.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(206)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  productDetail_pricevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "99b567e0",
  "7c748057"
  
)

/* harmony default export */ var price = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=product-detail-price.js.map