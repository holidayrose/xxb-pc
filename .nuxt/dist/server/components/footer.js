exports.ids = [8];
exports.modules = {

/***/ 166:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(191);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(13).default
module.exports.__inject__ = function (context) {
  add("00ea35b2", content, true, context)
};

/***/ }),

/***/ 186:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/wx-yh.bffc413.jpg";

/***/ }),

/***/ 187:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/qrcode_dy.e488e10.jpg";

/***/ }),

/***/ 188:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/qcrode.414b83a.jpg";

/***/ }),

/***/ 189:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/qrcode_fw.8427576.jpg";

/***/ }),

/***/ 190:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_2c53f060_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(166);
/* harmony import */ var _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_2c53f060_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_2c53f060_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_2c53f060_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_2c53f060_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 191:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(12);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(43);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(70);
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(72);
var ___CSS_LOADER_URL_IMPORT_2___ = __webpack_require__(73);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".global-header[data-v-2c53f060]{background-color:transparent;height:74px}.global-header .logo-wrap[data-v-2c53f060]{margin-bottom:0}.global-header .logo[data-v-2c53f060]{width:99px;margin-right:15px}.global-header strong[data-v-2c53f060]{font-size:14px;color:#fff}.global-header nav .link[data-v-2c53f060]{color:#fff;display:inline-flex;align-items:center;padding:0 15px;cursor:pointer}.icon[data-v-2c53f060]{display:inline-block;width:22px;height:22px;margin-right:6px}.review[data-v-2c53f060]{height:26px;background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ")}.cate[data-v-2c53f060],.review[data-v-2c53f060]{background-size:cover}.cate[data-v-2c53f060]{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ")}.entry[data-v-2c53f060]{background-color:#ff492c;color:#fff;line-height:38px;padding:0 32px;border-radius:20px}.ant-affix strong[data-v-2c53f060],.default strong[data-v-2c53f060]{color:#007dff}.ant-affix nav .link[data-v-2c53f060],.default nav .link[data-v-2c53f060]{color:#555}.ant-affix .review[data-v-2c53f060],.default .review[data-v-2c53f060]{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");background-size:cover}.ant-affix .cate[data-v-2c53f060],.default .cate[data-v-2c53f060]{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");background-size:cover}.ant-affix .global-header[data-v-2c53f060],.default .global-header[data-v-2c53f060]{border-bottom:1px solid #ddd;background-color:#fff;height:72px}.ant-affix[data-v-2c53f060] .ant-anchor-wrapper,.default[data-v-2c53f060] .ant-anchor-wrapper{overflow:visible;padding-left:unset}.header-wrap .global-header[data-v-2c53f060]{height:72px;background-color:transparent}*[data-v-2c53f060]{margin:0}*[data-v-2c53f060],ul[data-v-2c53f060]{padding:0}.g-wrapper[data-v-2c53f060]{width:100%;max-width:1200px!important;margin:0 auto!important}.pad-t-10[data-v-2c53f060]{padding-top:10px}.pad-t-20[data-v-2c53f060]{padding-top:20px}.pad-b-20[data-v-2c53f060]{padding-bottom:20px}.pad-b-30[data-v-2c53f060]{padding-bottom:30px}.g-flex[data-v-2c53f060]{display:flex!important}.g-flex.v-center[data-v-2c53f060]{flex-direction:column}.g-flex.center[data-v-2c53f060],.g-flex.v-center[data-v-2c53f060]{justify-content:center;align-items:center}.g-flex.space-between[data-v-2c53f060]{justify-content:space-between;align-items:center}.g-flex.space-around[data-v-2c53f060]{justify-content:space-around}.footer[data-v-2c53f060]{padding:60px 0 20px}.footer .footerInfo[data-v-2c53f060]{text-align:center}.footer .footerInfo .ca_text[data-v-2c53f060]{font-size:20px;color:#555}.footer .footerInfo .qc_text[data-v-2c53f060]{font-size:15px;color:#c1c1c1;padding-top:20px}.footer .qcrodeImg[data-v-2c53f060]{width:158px;margin-bottom:70px;margin-top:10px}.display-pc[data-v-2c53f060]{display:block!important}.display-flex[data-v-2c53f060]{display:flex!important}.display-m[data-v-2c53f060]{display:none!important}.text-c[data-v-2c53f060]{text-align:center}.report-wrap[data-v-2c53f060]{background-color:#007dff;font-size:20px;padding:40px 0;margin-bottom:10px}.report-wrap[data-v-2c53f060],.review-btn[data-v-2c53f060]{color:#fff;text-align:center}.review-btn[data-v-2c53f060]{padding:6px 12px;background-color:#ff492c;border-radius:4px}.check-comment[data-v-2c53f060]{padding:6px 18px;color:#007dff;border:1px solid #007dff;border-radius:16px;font-size:12px}.check-comment[data-v-2c53f060]:hover{background-color:#007dff;color:#fff}.contact-btn[data-v-2c53f060]{background-color:#773aff;color:#fff;padding:16px 0;text-align:center;margin-bottom:10px;cursor:pointer}.border[data-v-2c53f060]{border:1px solid #cacaca;border-radius:4px}.headline[data-v-2c53f060]{font-family:PingFangSC-Semibold;font-size:26px;color:#333;letter-spacing:0;line-height:1.5}@media (max-width:767px){.display-m[data-v-2c53f060]{display:flex!important}.display-flex[data-v-2c53f060],.display-pc[data-v-2c53f060]{display:none!important}.footer[data-v-2c53f060]{padding-top:10px}.footer .qcrodeImg[data-v-2c53f060]{width:72px;margin-bottom:10px}.footer .footerInfo .ca_text[data-v-2c53f060]{font-size:16px}.footer .footerInfo .qc_text[data-v-2c53f060]{font-size:12px;padding-top:6px}.headline[data-v-2c53f060]{font-size:18px;padding:0 10px}.m-tab-bar[data-v-2c53f060]{width:100%;flex-wrap:wrap;justify-content:space-around}.m-tab-bar .popular-category[data-v-2c53f060]{width:166px;height:40px;border-radius:4px;border:1px solid #007dff;justify-content:center;color:#222;background-color:#fff;margin-bottom:10px}.m-tab-bar .popular-category.on[data-v-2c53f060]{background-color:#007dff;color:#fff}}.beian[data-v-2c53f060]{background-color:#2d3237;padding:40px 0}.site-width[data-v-2c53f060]{padding:10px 0;width:100%;justify-content:center;font-size:12px;margin:0 auto}.site-width[data-v-2c53f060],.site-width a[data-v-2c53f060]{display:flex;align-items:center;color:#fff}.site-width a[data-v-2c53f060]{margin:0 34px}@media (max-width:767px){.beian[data-v-2c53f060]{padding:20px 10px}.site-width[data-v-2c53f060]{display:block}.site-width p[data-v-2c53f060]{text-align:center}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 196:
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
        img: __webpack_require__(186),
        path: '/all'
      }, {
        text: '关于我们',
        title: '选型宝订阅号',
        img: __webpack_require__(187),
        path: 'http://old.xuanxingbao.com/webPC/about'
      }, {
        text: '联系我们',
        title: '选型宝小程序',
        img: __webpack_require__(188),
        path: 'http://old.xuanxingbao.com/webPC/contact-list.html'
      }, {
        text: '加入我们',
        title: '选型宝服务号',
        img: __webpack_require__(189),
        path: 'http://old.xuanxingbao.com/webPC/participate.html'
      }]
    };
  }

});
// CONCATENATED MODULE: ./components/Footer.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Footervue_type_script_lang_js_ = (Footervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/_vue-loader@15.9.7@vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(20);

// CONCATENATED MODULE: ./components/Footer.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(190)
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

/***/ })

};;
//# sourceMappingURL=footer.js.map