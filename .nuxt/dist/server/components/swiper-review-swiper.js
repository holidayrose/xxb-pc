exports.ids = [31,7,25];
exports.modules = {

/***/ 158:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(166);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(13).default
module.exports.__inject__ = function (context) {
  add("4d15eb30", content, true, context)
};

/***/ }),

/***/ 163:
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
var componentNormalizer = __webpack_require__(20);

// CONCATENATED MODULE: ./components/common/starComp/StarZoom.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(165)
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

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_StarZoom_vue_vue_type_style_index_0_id_59cc2748_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(158);
/* harmony import */ var _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_StarZoom_vue_vue_type_style_index_0_id_59cc2748_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_StarZoom_vue_vue_type_style_index_0_id_59cc2748_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_StarZoom_vue_vue_type_style_index_0_id_59cc2748_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_StarZoom_vue_vue_type_style_index_0_id_59cc2748_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 166:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(12);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(44);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(167);
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(168);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".star-default[data-v-59cc2748]{width:100px;height:20px;background:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");background-size:contain}.star-real[data-v-59cc2748]{width:80px;height:20px;background:url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");background-size:contain}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 167:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAB0klEQVQ4T52UsWsTURzHv793F2kduoS8d0kWbzGB4FYHcYogOAhaHBxEEDfbP6BFV1Hprri5OAlSBUEQJIs46OYSW6EOIZf3S7ipQ9qmeT+5kh5JaMLVt929z/fDe7/f744wZ8VxvDQYDL6LCHzfv1IoFPZm4TRP1O12N5xzzxOGiNaNMZtnFrVarcVcLvcXgBmFbb/fD8Mw3D9NNvNEzLwqIi/HQ0T0yBjzOrOo0Wj41Wr1DxFdmArtNpvNSr1eP5qWkYgoa21VKXXROVcBUCGiSwCWZ9TjJ4BfIrJDRNu+72/n8/kdstZ+BXBtXtEz7DUSEQPQGeB5CFOv16sPh8NPAM7/j0xE+kR087hr7Xb7uud5HwEsnkUmIvvOuVvlcvlL2v4oim4opbYALGSRiciB53krWuvPxwM7Hup0Og+I6E0WkVLqodY6ZSdEURTdU0q9zSJyzt0vlUopOyGy1j4F8CSLCMCzIAhSdlqU1Oh2RtGHIAhWTtgJETP/FpFkusfXj1EtL4+/TCa7WCymbCpKPhVmPgDgjwK7AB4bY94lz8x8N7kOgHD0WznSWi8Q0fC0rr0noqsAXsRx/KpWqx1OneIcM68B2CCib8aYOyf7/wBiu6siH+XLgQAAAABJRU5ErkJggg=="

/***/ }),

/***/ 168:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAB3ElEQVQ4T52TsWsTcRTHP+9nWhoHkUtqV7MYoXRTSns3tILgIGiFyw1FEDf1D7DoKlXclW4uLrkgVREEQQyYi6CbKNgIdXBJ2gsICm013pOE9mxim179bT/e5/fhy3vvJ/Q5zdnxQ9oaqLYRXdOJ4afB991w6ScKPXsO5HabMSrXLf/13X2LvroT6bQxX0BGOomg/qORyuXK5fWdZLsmCj3nKnBv+yOjesXyg4XEIp2aSjVHfn0GObr9kcLyh0YqP10ut3plomDq7vjxARk8BppHyANjwImd+6HvFN6Lag1hiZYuZcbe1CQs2C8ROdWv6XvVVPWVhAWngXBkL7h/XRuyWrCnBZ4hcvB/ZAprEkVnO1NruvZpNfIESO9HprBuiM5litUX8fhXXOeMMSwCQ0lkqmwcEJ2xisHzNt+1Ryvu5CVjzIMkIoHLmWIlZrtEq549K8jDJCI0upj1qzHbJQo95xZwM5lI57N+ELPdiQrOogjnE4ngcbZYmdliexN9gs5m/z3CW1QF5GTPd6kNFysxG4vaX6VZcDYQUptTWCbSG1Yp8Nv30Jv0UDMvQm6z3rKiypCU+P3P1ELPeaSobeBOPfp2f7T08WdXCnd0MJTD1wTmgCDrBxe26n8Ah+yh8Twu8rAAAAAASUVORK5CYII="

/***/ }),

/***/ 197:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(220);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(13).default
module.exports.__inject__ = function (context) {
  add("3b91e56a", content, true, context)
};

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.7@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_@nuxt_components@2.1.8@@nuxt/components/dist/loader.js??ref--0-0!./node_modules/_vue-loader@15.9.7@vue-loader/lib??vue-loader-options!./components/Review.vue?vue&type=template&id=19b134fb&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"c-card"},[_c('nuxt-link',{staticClass:"top",attrs:{"to":{ name: 'productDetail-id', params: { id: _vm.info.product_id } }}},[_c('div',{staticClass:"author"},[_c('img',{directives:[{name:"lazy",rawName:"v-lazy",value:(_vm.info.userimage),expression:"info.userimage"}],staticClass:"g-avatar",attrs:{"alt":""}}),_vm._v(" "),_c('div',{staticClass:"info"},[_c('strong',{staticClass:"name"},[_vm._v(_vm._s(_vm.info.realname))]),_vm._v(" "),_c('p',{staticClass:"title"},[_c('span',[_vm._v(_vm._s(_vm.info.company))]),_vm._v(" "),_c('span',[_vm._v(_vm._s(_vm.info.office))])])])]),_vm._v(" "),_c('div',{staticClass:"t-box"},[_c('div',{staticClass:"benchmark"},[_c('div',{staticClass:"context g-flex"},[_vm._v("\n          对 "),_c('span',[_vm._v(_vm._s(_vm.info.productname))]),_vm._v(" 的点评\n        ")]),_vm._v(" "),_c('div',{staticClass:"g-flex space-between"},[_c('div',{staticClass:"star g-flex"},[_c('div',{staticClass:"rank"},[_vm._v("\n              "+_vm._s(_vm.info.ztgsnum.toFixed(1))+"\n              "),_c('span',[_vm._v("分")])]),_vm._v(" "),_c('Star',{attrs:{"out-width":75,"out-height":15,"decimal":_vm.decimal}})],1),_vm._v(" "),_c('div',{staticClass:"date"},[_vm._v("\n            "+_vm._s(_vm.info.lastoperationtime)+"\n          ")])])]),_vm._v(" "),_c('div',{staticClass:"detail"},[_c('p',[_vm._v("【优点】"+_vm._s(_vm.info.advantages))]),_vm._v(" "),_c('p',[_vm._v("【缺点】"+_vm._s(_vm.info.disadvantages))])]),_vm._v(" "),_c('span',{staticClass:"quota up"}),_vm._v(" "),_c('span',{staticClass:"quota down"})])])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Review.vue?vue&type=template&id=19b134fb&scoped=true&

// EXTERNAL MODULE: ./components/common/starComp/StarZoom.vue + 4 modules
var StarZoom = __webpack_require__(163);

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
var componentNormalizer = __webpack_require__(20);

// CONCATENATED MODULE: ./components/Review.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(219)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Reviewvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "19b134fb",
  "16a98dc4"
  
)

/* harmony default export */ var Review = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_Review_vue_vue_type_style_index_0_id_19b134fb_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(197);
/* harmony import */ var _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_Review_vue_vue_type_style_index_0_id_19b134fb_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_Review_vue_vue_type_style_index_0_id_19b134fb_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_Review_vue_vue_type_style_index_0_id_19b134fb_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_Review_vue_vue_type_style_index_0_id_19b134fb_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 220:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(12);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(44);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(221);
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(222);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".c-card[data-v-19b134fb]{margin-top:10px;overflow:hidden;border-radius:6px;width:100%;margin-bottom:10px}.c-card .top[data-v-19b134fb]{padding:0 4px 10px;cursor:pointer;color:#555;display:block}.c-card .top .author[data-v-19b134fb]{display:flex;align-items:flex-start;padding:16px 10px}.c-card .top .author .g-avatar[data-v-19b134fb]{margin-right:10px;width:50px;height:50px;border-radius:50%}.c-card .top .author .info[data-v-19b134fb]{width:226px}.c-card .top .author .info .name[data-v-19b134fb]{width:100%;display:inline-block;margin-bottom:5px;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;word-break:break-all;font-weight:400}.c-card .top .author .info .name span[data-v-19b134fb]{color:#007dff}.c-card .top .author .info .title[data-v-19b134fb]{margin:0;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;word-break:break-all}.c-card .top .author .info .title span+span[data-v-19b134fb]{margin-left:10px}.c-card .top .t-box[data-v-19b134fb]{background-color:#fff;padding:10px 10px 30px;border-radius:4px;position:relative}.c-card .top .t-box[data-v-19b134fb]:before{position:absolute;left:26px;top:-10px;content:\"\";width:0;height:0;border-left:10px solid transparent;border-right:10px solid transparent;border-bottom:10px solid #fff}.c-card .top .t-box .benchmark[data-v-19b134fb]{padding:10px}.c-card .top .t-box .benchmark .context[data-v-19b134fb]{color:#222;padding-bottom:10px}.c-card .top .t-box .benchmark .context span[data-v-19b134fb]{font-weight:700;display:inline-block;max-width:240px;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;margin:0 4px}.c-card .top .t-box .benchmark .star[data-v-19b134fb]{align-items:center}.c-card .top .t-box .benchmark .star .rank[data-v-19b134fb]{color:#fff;padding:0 4px;border-radius:4px;font-size:14px;background-color:#ff492c;white-space:nowrap;margin-right:10px}.c-card .top .t-box .benchmark .star .rank .ant-rate[data-v-19b134fb]{flex:none!important}.c-card .top .t-box .benchmark .star .rank .ant-rate[data-v-19b134fb] li{margin-right:4px}.c-card .top .t-box .benchmark .date[data-v-19b134fb]{color:#c1c1c1;white-space:nowrap;font-size:12px}.c-card .top .t-box .quota[data-v-19b134fb]{position:absolute;width:14px;height:14px}.c-card .top .t-box .quota.up[data-v-19b134fb]{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");background-size:100% 100%;left:20px;top:84px}.c-card .top .t-box .quota.down[data-v-19b134fb]{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");background-size:100% 100%;right:16px;bottom:34px}.c-card .top .detail[data-v-19b134fb]{padding:20px;height:140px;overflow:hidden;position:relative}.c-card .top .detail p[data-v-19b134fb]{-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis;display:-webkit-box}@media (max-width:767px){.review-wrapper[data-v-19b134fb]{display:flex;justify-content:center}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 221:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADJElEQVRYR+1WTUhUURT+jlO6aVEQFgVCIEnOHWtRFBpCEeadSRCLilppm1qkraQfF0ZFhYugFpXQHxQUJUlT855CYGCFgVjOG4Na9UM/EBEVheHMiTszztwZ37z3bJEb7/Z93znf/c655zzCDB+a4fyYFfBfHWDprwRTKZnWwGTppy2Ag2I1GF3JAIyjejCnfuL6yvUg3wWA/Wlep8JPSwCHRBPiuAbCvHSyATKsDW6NzMHALjDf0HFkWMncngWw9B8A6IwWpBdxtFK/9c7x5lIcB3BEw4RBiRMUGRvyLICleASgNhOE0U6mlSqDw2EpxgCs0HiqZEnrPfcASzEOoDjDKEINPbCeeEj+A8iUCiDeRpFYTz7PsQQcFG/AKMuoTdfNQ/LXAMqzNy/aROboQzteQQEsxTMAa7JBqJrM6FMPyQcB1GQ9phaKRK8U4tkKYCnuAWjQkm8nM3rbQ/I7ALZquJ1kWLeceFMEcNDfAaZjWuOcJNM67CF5C4BLGu8imdZeN16OAA5WrQUnVMeXpIg0gt+JWhqI/XTs9oblCzFRrKyvSOO+w5cI0P2xt9MTIEUYwJZs/fgqRWLNbkFYBk4D3K7h+siw6t14yStOglgGGgG+m0NKjdqcd5sflOuqSuFLfJ4uL/OyMgLq/R0grfapEgyREV3naL/0bwQo/4l9xZw/FRR+9cXNhawDQdEDRpMN4TLi6Cw0clmK/QDO2vAGAT5IRuyxp1fAUrwHsNQeTB/A3I25JV0UHv6lY1iK6wB2F07C3SCcp0jsuR1G6wHxCcAiZ8toBImJEPW9/JjtHXETwA4Xq78B1ExGtDcfpwvoA1DnVjN9lyssS6E2ndp4bsd2desCVB1VPZ1P3stgKdTtlQtux0VASFQjAeXC5M+GfcB8AY2r5mM8rhrO76LAWUDaztxxaheRsZJMazS3EW1myFRuKxnWuYI9oDWVKoOa/YunxGA6RGb0lK0uKfYBaNPGcRZGhSeq/Tbc7C+HD3tS/wK0BIR+MIbJsPqdbOZQYAHi3AbCMgBlYKi98oJMK3fCakE8/xO6ddi/fp8VMOvAX1rFJTDwzDxrAAAAAElFTkSuQmCC"

/***/ }),

/***/ 222:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADIklEQVRYR+2WS2gTURSG/z91IyKuFFRwIbhoZlLrRi2+FetMLCIWEUEEhVqqdKFi3QhWxILgA3wh+ECpulBxYW1ubAULiqAb0d6pIApCF1rc2YobkyOTmmQS55GIUBe9u+Se/5wv/73n3BATvDjB9TEJ8H87IEnjDIRLATQAoiB8BaKbSn8MuzuSNCwAq3Jayidk+Rki1/nY+VCuC3RAkuZdCLb6FBoDcItKt/lBiG0eBHDKZ+8LgC4qfd675wsgttEB8GRohxBtTOnL3hhpql2ATM378M7iDqrB2/mYAADzKYDVES36DTWyko+cN/k4scxOEEcjdKNgdj1TQy/dOH+AYPvLcsseKudKlQBu1UtM6X3BAJaxF+TFyCFFnmVq8EDVAMAAlV4TDGAvmgn87AFkSQREikpvLABUrvtKpWcFArgbsrVhKsbGOgHpCIQQXGVat5RcRFc3OnoYZAsgcwK0n6l0bi9yEIlVtw6xbBcEi/9MxnaqwQu+7bgxMR9Z6QKwzWe/4FwkQM6NDbWzEat5B2BGSTLJrmB66HnYMYltvgZQXxZzgkofqciBkAs2jB8S54DjDqbgU/JrzRia2asfVAdgl8+GYPtL7oRt3gSw0/NdP5VuzH+u7Aia4vOQiWkA038LS5KEH4HxBOC6QgzRyJTurw7AMi+DaA1KEgQgyUQrRDzjWi5QOe3e+EgHJGk0Q3i/IBIcY1p3hv3q3MW1jThABWDeeCwdZMRmnx6uGEAsczUI910YX1UVj90FxPitHAFkLZUzVA4e/Bxb8eVg7FmxuJxh2nGf2tAlllkH8o6nuEtu+BUP7AKxzKMgvDb3UOlN0cWN7SBPA5hdjA0u7gsgtnkNwG6P7d1Ma28b+XJIMnEcIrnhUlgxLGOvfhEGXjgCSRr1ELpv+WaP4BCV9vt3U+RrWjgX2cw5CLZ4dBo/pCFqSJU4ILYpngTuZdlPpfsibS8fUCI3mHZ2Reny+0UH8iOTuIcpaOdDPVJJErESSVC6AWRAOcaUE/0/wpM4cg5UApHr0Ma6aex7+73S+D8cqFb4r+L/mQN/CzQJ8AvpfC0wuO9Q/QAAAABJRU5ErkJggg=="

/***/ }),

/***/ 223:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(257);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(13).default
module.exports.__inject__ = function (context) {
  add("5647f094", content, true, context)
};

/***/ }),

/***/ 256:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_reviewSwiper_vue_vue_type_style_index_0_id_64d2aa7b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(223);
/* harmony import */ var _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_reviewSwiper_vue_vue_type_style_index_0_id_64d2aa7b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_reviewSwiper_vue_vue_type_style_index_0_id_64d2aa7b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_reviewSwiper_vue_vue_type_style_index_0_id_64d2aa7b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_reviewSwiper_vue_vue_type_style_index_0_id_64d2aa7b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 257:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(12);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".swiper-item[data-v-64d2aa7b]{padding-right:10px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.7@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_@nuxt_components@2.1.8@@nuxt/components/dist/loader.js??ref--0-0!./node_modules/_vue-loader@15.9.7@vue-loader/lib??vue-loader-options!./components/swiper/reviewSwiper.vue?vue&type=template&id=64d2aa7b&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"swiper-wrap"},[_c('a-carousel',{attrs:{"autoplay":"","dots":_vm.dots,"slides-to-show":3,"lazy-load":true,"speed":1000}},_vm._l((_vm.list),function(item,index){return _c('div',{key:index,staticClass:"swiper-item"},[_c('Review',{attrs:{"info":item}})],1)}),0)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/swiper/reviewSwiper.vue?vue&type=template&id=64d2aa7b&scoped=true&

// EXTERNAL MODULE: ./components/Review.vue + 4 modules
var Review = __webpack_require__(209);

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
var componentNormalizer = __webpack_require__(20);

// CONCATENATED MODULE: ./components/swiper/reviewSwiper.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(256)
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
installComponents(component, {Review: __webpack_require__(209).default})


/***/ })

};;
//# sourceMappingURL=swiper-review-swiper.js.map