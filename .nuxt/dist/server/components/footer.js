exports.ids = [8];
exports.modules = {

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
___CSS_LOADER_EXPORT___.push([module.i, ".global-header[data-v-46a048b8]{border-bottom:1px solid #ddd;background-color:#fff;height:74px;line-height:74px}.global-header .logo-wrap[data-v-46a048b8]{margin-bottom:0}.global-header .logo[data-v-46a048b8]{width:99px;margin-right:15px}.global-header strong[data-v-46a048b8]{font-size:14px;color:#007dff}.global-header nav a.link[data-v-46a048b8]{color:#555;display:inline-flex;align-items:center;padding:0 15px}.icon[data-v-46a048b8]{display:inline-block;width:22px;height:22px;margin-right:6px}.review[data-v-46a048b8]{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ")}.cate[data-v-46a048b8]{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ")}.entry[data-v-46a048b8]{background-color:#ff492c;color:#fff;line-height:38px;padding:0 32px;border-radius:20px}*[data-v-46a048b8]{margin:0}*[data-v-46a048b8],ul[data-v-46a048b8]{padding:0}.g-wrapper[data-v-46a048b8]{width:100%;max-width:1200px!important;margin:0 auto!important}.g-flex[data-v-46a048b8]{display:flex}.g-flex.v-center[data-v-46a048b8]{flex-direction:column}.g-flex.center[data-v-46a048b8],.g-flex.v-center[data-v-46a048b8]{justify-content:center;align-items:center}.g-flex.space-between[data-v-46a048b8]{justify-content:space-between;align-items:center}.g-flex.space-around[data-v-46a048b8]{justify-content:space-around}.footer[data-v-46a048b8]{padding:60px 0 20px}.footer .footerInfo[data-v-46a048b8]{text-align:center}.footer .footerInfo .ca_text[data-v-46a048b8]{font-size:20px;color:#555}.footer .footerInfo .qc_text[data-v-46a048b8]{font-size:15px;color:#c1c1c1;padding-top:20px}.footer .qcrodeImg[data-v-46a048b8]{width:158px;margin-bottom:70px;margin-top:10px}.display-pc[data-v-46a048b8]{display:block}.display-flex[data-v-46a048b8]{display:flex}.display-m[data-v-46a048b8]{display:none}.text-c[data-v-46a048b8]{text-align:center}.report-wrap[data-v-46a048b8]{background-color:#007dff;font-size:20px;padding:40px 0;margin-bottom:10px}.report-wrap[data-v-46a048b8],.review-btn[data-v-46a048b8]{color:#fff;text-align:center}.review-btn[data-v-46a048b8]{padding:6px 12px;background-color:#ff492c;border-radius:4px}@media (max-width:767px){.display-m[data-v-46a048b8]{display:flex}.display-flex[data-v-46a048b8],.display-pc[data-v-46a048b8]{display:none}}.beian[data-v-46a048b8]{background-color:#2d3237;padding:40px 0}.site-width[data-v-46a048b8]{padding:10px 0;width:100%;justify-content:center;font-size:12px;margin:0 auto}.site-width[data-v-46a048b8],.site-width a[data-v-46a048b8]{display:flex;align-items:center;color:#fff}.site-width a[data-v-46a048b8]{margin:0 34px}", ""]);
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

/***/ })

};;
//# sourceMappingURL=footer.js.map