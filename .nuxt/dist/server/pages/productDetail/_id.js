exports.ids = [37,2,7,8,9,16,17,19,22,24,25,27];
exports.modules = {

/***/ 102:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(136);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("33bb263d", content, true, context)
};

/***/ }),

/***/ 103:
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
  add("14716b4a", content, true, context)
};

/***/ }),

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_feature_vue_vue_type_style_index_0_id_147f4e31_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(102);
/* harmony import */ var _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_feature_vue_vue_type_style_index_0_id_147f4e31_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_feature_vue_vue_type_style_index_0_id_147f4e31_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_feature_vue_vue_type_style_index_0_id_147f4e31_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_feature_vue_vue_type_style_index_0_id_147f4e31_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 136:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".title[data-v-147f4e31]{font-size:18px}.list-wrap[data-v-147f4e31]{flex-wrap:wrap}.list-wrap .list-item[data-v-147f4e31]{margin-bottom:10px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_reviews_vue_vue_type_style_index_0_id_a03688c0_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(103);
/* harmony import */ var _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_reviews_vue_vue_type_style_index_0_id_a03688c0_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_reviews_vue_vue_type_style_index_0_id_a03688c0_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_reviews_vue_vue_type_style_index_0_id_a03688c0_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_reviews_vue_vue_type_style_index_0_id_a03688c0_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 138:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".advantage-list-wrap[data-v-a03688c0]{padding:20px;background-color:#fef8f8;border-radius:4px}.disadvantage-list-wrap[data-v-a03688c0]{padding:20px;background-color:#f9fafe;border-radius:4px}.getMoreBtn[data-v-a03688c0]{padding:40px}.getMoreBtn .check-comment[data-v-a03688c0]{background-color:#007dff;color:#fff;cursor:pointer}.noMore[data-v-a03688c0]{padding:10px}.area-title[data-v-a03688c0]{border-bottom:2px solid #000;text-align:center;font-weight:700;padding:8px 6px;font-size:14px;position:relative}.advantage-wrap .area-title[data-v-a03688c0]{color:#ff0034;border-color:#ff0034}.advantage-wrap .area-title[data-v-a03688c0]:after{content:\"\";display:block;width:0;height:0;position:absolute;border:10px solid transparent;border-top-color:#ff0034;left:50%;bottom:-58%;transform:scaleX(.6) translate(-50%)}.disadvantage-wrap .area-title[data-v-a03688c0]{color:#3777ff;border-color:#3777ff}.disadvantage-wrap .area-title[data-v-a03688c0]:after{content:\"\";display:block;width:0;height:0;position:absolute;border:10px solid transparent;border-top-color:#3777ff;left:50%;bottom:-58%;transform:scaleX(.6) translate(-50%)}.vs-wrap[data-v-a03688c0]{margin:30px 0}.vs-wrap[data-v-a03688c0],.vs-wrap .round[data-v-a03688c0]{display:flex;justify-content:center}.vs-wrap .round[data-v-a03688c0]{color:#fff;width:70px;height:70px;border-radius:50%;font-size:20px;align-items:center}.vs-wrap .round.good[data-v-a03688c0]{background-color:#ff0034;border:6px solid #ff6c75}.vs-wrap .round.bad[data-v-a03688c0]{background-color:#3777ff;border:6px solid #86aeff}.vs-wrap .number-bar[data-v-a03688c0]{width:50%}.vs-wrap .number-bar .t-box[data-v-a03688c0]{display:flex;justify-content:space-between;align-items:center}.vs-wrap .number-bar .t-box span[data-v-a03688c0]{font-size:16px}.vs-wrap .number-bar .t-box span.cons[data-v-a03688c0]{color:#3777ff}.vs-wrap .number-bar .t-box span.pros[data-v-a03688c0]{color:#ff0034}.vs-wrap .number-bar .b-box[data-v-a03688c0]{width:100%;white-space:nowrap}.vs-wrap .number-bar .b-box .bar[data-v-a03688c0]{display:inline-block;height:10px;box-sizing:border-box}.vs-wrap .number-bar .b-box .bar.pros[data-v-a03688c0]{background-color:#ff0034}.vs-wrap .number-bar .b-box .bar.cons[data-v-a03688c0]{background-color:#3777ff}.content .item[data-v-a03688c0]{margin-bottom:16px}.content .item .col-1[data-v-a03688c0]{width:74px;text-align:right}.content .item .col-2[data-v-a03688c0]{width:66px;text-align:center;font-weight:700}.content .item .col-3[data-v-a03688c0]{width:146px}.content .item .col-4[data-v-a03688c0]{width:310px;margin:4px 20px}.tops-list .tops-item[data-v-a03688c0]{font-size:13px;color:#007dff;border:1px solid #007dff;padding:4px 8px;border-radius:4px;display:inline-block;margin-bottom:8px;margin-right:4px;cursor:pointer}.tops-list .tops-item.on[data-v-a03688c0]{background-color:#007dff;color:#fff}.comment-list .comment-item[data-v-a03688c0]{margin:20px 0;cursor:pointer}.comment-list .comment-item .note[data-v-a03688c0]{padding:10px 0}.comment-list .comment-item .note[data-v-a03688c0]:hover{text-decoration:underline}.comment-list .comment-item .comment-info[data-v-a03688c0]{display:flex;flex-direction:row;justify-content:space-between;margin-bottom:10px}.comment-list .comment-item .comment-info .head-img[data-v-a03688c0]{width:80px;height:80px}.comment-list .comment-item .comment-info .info[data-v-a03688c0]{margin-left:20px}.comment-list .comment-item .comment-info .info .name[data-v-a03688c0]{font-size:20px;font-weight:700}.comment-list .comment-item .comment-info .info .title[data-v-a03688c0]{font-size:14px;margin:4px 0}.comment-list .comment-item .icon-list-wrap[data-v-a03688c0]{padding:10px 0;border-bottom:1px solid #cacaca}.comment-list .comment-item .icon-list-wrap .icon-item[data-v-a03688c0]{padding-left:10px;padding-right:40px}.comment-list .comment-item .icon-list-wrap .icon-item i[data-v-a03688c0]{margin-right:10px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 139:
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

/***/ 165:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(200);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("4d3587a1", content, true, context)
};

/***/ }),

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.7@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_@nuxt_components@2.1.8@@nuxt/components/dist/loader.js??ref--0-0!./node_modules/_vue-loader@15.9.7@vue-loader/lib??vue-loader-options!./components/productDetail/feature.vue?vue&type=template&id=147f4e31&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"feature"},[_vm._ssrNode("<div class=\"feature-item\" data-v-147f4e31>","</div>",[_vm._ssrNode("<h3 class=\"title\" data-v-147f4e31>\n      总帐\n    </h3> "),_c('a-row',{staticClass:"list-wrap g-flex"},[_c('a-col',{staticClass:"list-item",attrs:{"span":"8"}},[_c('a-icon',{attrs:{"type":"check-circle","theme":"twoTone","two-tone-color":"#52c41a"}}),_vm._v(" "),_c('span',[_vm._v("审计追踪")])],1),_vm._v(" "),_c('a-col',{staticClass:"list-item",attrs:{"span":"8"}},[_c('a-icon',{attrs:{"type":"check-circle","theme":"twoTone","two-tone-color":"#52c41a"}}),_vm._v(" "),_c('span',[_vm._v("审计追踪")])],1)],1)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"feature-item\" data-v-147f4e31>","</div>",[_vm._ssrNode("<h3 class=\"title\" data-v-147f4e31>\n      应收账款\n    </h3> "),_c('a-row',{staticClass:"list-wrap g-flex"},[_c('a-col',{staticClass:"list-item",attrs:{"span":"8"}},[_c('a-icon',{attrs:{"type":"check-circle","theme":"twoTone","two-tone-color":"#52c41a"}}),_vm._v(" "),_c('span',[_vm._v("发票定制")])],1),_vm._v(" "),_c('a-col',{staticClass:"list-item",attrs:{"span":"8"}},[_c('a-icon',{attrs:{"type":"check-circle","theme":"twoTone","two-tone-color":"#52c41a"}}),_vm._v(" "),_c('span',[_vm._v("馆藏自动化")])],1)],1)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"feature-item\" data-v-147f4e31>","</div>",[_vm._ssrNode("<h3 class=\"title\" data-v-147f4e31>\n      平台\n    </h3> "),_c('a-row',{staticClass:"list-wrap g-flex",attrs:{"justify":"start"}},[_c('a-col',{staticClass:"list-item",attrs:{"span":"8"}},[_c('a-icon',{attrs:{"type":"check-circle","theme":"twoTone","two-tone-color":"#52c41a"}}),_vm._v(" "),_c('span',[_vm._v("工作流程能力")])],1),_vm._v(" "),_c('a-col',{staticClass:"list-item",attrs:{"span":"8"}},[_c('a-icon',{attrs:{"type":"check-circle","theme":"twoTone","two-tone-color":"#52c41a"}}),_vm._v(" "),_c('span',[_vm._v("国际化")])],1),_vm._v(" "),_c('a-col',{staticClass:"list-item",attrs:{"span":"8"}},[_c('a-icon',{attrs:{"type":"check-circle","theme":"twoTone","two-tone-color":"#52c41a"}}),_vm._v(" "),_c('span',[_vm._v("性能与可靠性")])],1),_vm._v(" "),_c('a-col',{staticClass:"list-item",attrs:{"span":"8"}},[_c('a-icon',{attrs:{"type":"check-circle","theme":"twoTone","two-tone-color":"#52c41a"}}),_vm._v(" "),_c('span',[_vm._v("输出文件生成")])],1)],1)],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/productDetail/feature.vue?vue&type=template&id=147f4e31&scoped=true&

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.2.2@babel-loader/lib??ref--2-0!./node_modules/_@nuxt_components@2.1.8@@nuxt/components/dist/loader.js??ref--0-0!./node_modules/_vue-loader@15.9.7@vue-loader/lib??vue-loader-options!./components/productDetail/feature.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var featurevue_type_script_lang_js_ = ({
  name: 'Feature'
});
// CONCATENATED MODULE: ./components/productDetail/feature.vue?vue&type=script&lang=js&
 /* harmony default export */ var productDetail_featurevue_type_script_lang_js_ = (featurevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/_vue-loader@15.9.7@vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/productDetail/feature.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(135)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  productDetail_featurevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "147f4e31",
  "044b73f8"
  
)

/* harmony default export */ var feature = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.7@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_@nuxt_components@2.1.8@@nuxt/components/dist/loader.js??ref--0-0!./node_modules/_vue-loader@15.9.7@vue-loader/lib??vue-loader-options!./components/productDetail/reviews.vue?vue&type=template&id=a03688c0&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"panel"},[_c('a-row',[_c('a-col',{attrs:{"span":"12"}},[_c('h3',{staticClass:"title"},[_vm._v("\n        共"+_vm._s(_vm.productDetailObj.productKbObj.dpnum)+"条评论\n      ")]),_vm._v(" "),_c('div',{staticClass:"content"},_vm._l((_vm.productDetailObj.reviewArr),function(item,index){return _c('div',{key:index,staticClass:"item g-flex"},[_c('div',{staticClass:"col col-1 "},[_c('span',{staticClass:"spe"},[_vm._v(_vm._s(item.branchnum))]),_vm._v("人认为\n          ")]),_vm._v(" "),_c('div',{staticClass:"col col-2"},[_vm._v("\n            "+_vm._s(item.levelTxt)+"\n          ")]),_vm._v(" "),_c('div',{staticClass:"col col-3"},[_c('Star',{attrs:{"out-width":100,"out-height":20,"decimal":(5-index)/5}})],1)])}),0)]),_vm._v(" "),_c('a-col',{attrs:{"span":"12"}},[_c('h3',{staticClass:"title"},[_vm._v("\n        【专项指标评分】\n      ")]),_vm._v(" "),_c('div',{staticClass:"content earmarked"},_vm._l((_vm.productDetailObj.earmarked),function(item,index){return _c('div',{key:index,staticClass:"item g-flex"},[_c('div',{staticClass:"col col-1",staticStyle:{"width":"150px"}},[_vm._v("\n            "+_vm._s(item.text)+"\n          ")]),_vm._v(" "),_c('div',{staticClass:"col col-4"},[_c('bar',{attrs:{"score":item.levelAvgNum,"index":index + 1}})],1),_vm._v(" "),_c('div',{staticClass:"col col-3"},[_vm._v("\n            "+_vm._s(item.levelAvgNum)+"分\n          ")])])}),0)])],1),_vm._ssrNode(" "),_c('a-row',[_c('a-col',[_c('div',{staticClass:"tops-list"},[_c('span',{staticClass:"tops-item",class:_vm.analysisDimensionId === null?'on':'',staticStyle:{"margin-right":"0"},on:{"click":_vm.handleGetAllReview}},[_vm._v("全部点评")]),_vm._v(" "),_vm._l((_vm.tabsList),function(item){return _c('span',{key:item.id,staticClass:"tops-item",class:item.dimension_id === _vm.analysisDimensionId ? 'on' : '',on:{"click":function($event){return _vm.changeTags(item)}}},[_vm._v(_vm._s(item.title)+"("+_vm._s(item.num)+")")])})],2),_vm._v(" "),(_vm.allReviewsShow)?_c('div',{staticClass:"comment-list"},[_vm._l((_vm.reviewsList),function(item,index){return _c('div',{key:index,staticClass:"comment-item",on:{"click":function($event){return _vm.navigateToDetail(item.scoreid)}}},[_c('div',{staticClass:"comment-info"},[_c('div',{staticClass:"g-flex"},[_c('div',{staticClass:"head-img"},[_c('img',{attrs:{"src":item.userheadimages,"alt":"","width":"100%"}})]),_vm._v(" "),_c('div',{staticClass:"info"},[_c('div',{staticClass:"name"},[_vm._v("\n                  "+_vm._s(item.realname)+"\n                ")]),_vm._v(" "),_c('div',{staticClass:"title"},[_vm._v("\n                  "+_vm._s(item.company)+" "+_vm._s(item.office)+"\n                ")]),_vm._v(" "),_c('div',{staticClass:"count g-flex"},[_c('span',[_vm._v(_vm._s(item.ztgsnum)+"分")]),_vm._v(" "),_c('Star',{attrs:{"out-width":100,"out-height":20,"decimal":item.ztgsnum/5}})],1)])]),_vm._v(" "),_c('div',{staticClass:"publish-time"},[_vm._v("\n              "+_vm._s(item.operaTime)+"\n            ")])]),_vm._v(" "),_c('div',{staticClass:"comment-content"},[_c('p',[_vm._v("【优点】"+_vm._s(item.advantages))]),_vm._v(" "),_c('p',[_vm._v("【缺点】"+_vm._s(item.disadvantages))]),_vm._v(" "),_c('div',{staticClass:"note text-c"},[_vm._v("\n              进入点评详情页\n            ")])]),_vm._v(" "),_c('div',{staticClass:"g-flex icon-list-wrap"},[_c('div',{staticClass:"icon-item"},[_c('a-icon',{attrs:{"type":"message"}}),_vm._v(_vm._s(item.commentnum)+"\n            ")],1),_vm._v(" "),_c('div',{staticClass:"icon-item"},[_c('a-icon',{attrs:{"type":"like"}}),_vm._v(_vm._s(item.praisenum)+"\n            ")],1)])])}),_vm._v(" "),(_vm.currentPage < _vm.totalPage)?_c('div',{staticClass:"getMoreBtn text-c",on:{"click":_vm.handleMoreReviews}},[_c('span',{staticClass:"check-comment"},[_vm._v("查看更多的评价")])]):_c('div',{staticClass:"noMore",staticStyle:{"text-align":"center"}},[_vm._v("\n          没有更多评价了~\n        ")])],2):_vm._e(),_vm._v(" "),(_vm.partReviewsShow)?_c('div',{staticClass:"comment-list"},[_c('div',{staticClass:"vs-wrap"},[_c('div',{staticClass:"round good"},[_vm._v("\n            好\n          ")]),_vm._v(" "),_c('div',{staticClass:"number-bar"},[_c('div',{staticClass:"t-box"},[_c('span',{staticClass:"pros"},[_vm._v(_vm._s(_vm.advantageLen)+"人认为")]),_vm._v(" "),_c('span',{staticClass:"cons"},[_vm._v(_vm._s(_vm.disadvantageLen)+"人认为")])]),_vm._v(" "),_c('div',{staticClass:"b-box"},[_c('div',{staticClass:"bar pros",style:({width: _vm.advantageLen/_vm.totalReviews*100 + '%'})}),_vm._v(" "),_c('div',{staticClass:"bar cons",style:({width: _vm.disadvantageLen/_vm.totalReviews*100 + '%'})})]),_vm._v(" "),_c('div',{staticStyle:{"text-align":"center"}},[_vm._v("\n              共"+_vm._s(_vm.totalReviews)+"条点评\n            ")])]),_vm._v(" "),_c('div',{staticClass:"round bad"},[_vm._v("\n            不好\n          ")])]),_vm._v(" "),(_vm.advantageLen !== 0)?_c('div',{staticClass:"advantage-wrap"},[_c('div',{staticClass:"area-title"},[_vm._v("\n            "+_vm._s(_vm.advantageLen)+"人说好，他们这么说\n          ")]),_vm._v(" "),_c('div',{staticClass:"advantage-list-wrap"},_vm._l((_vm.advantageReviews),function(item,index){return _c('div',{key:index,staticClass:"comment-item"},[_c('div',{staticClass:"comment-info"},[_c('div',{staticClass:"g-flex"},[_c('div',{staticClass:"head-img"},[_c('img',{attrs:{"src":item.userheadimages,"alt":"","width":"100%"}})]),_vm._v(" "),_c('div',{staticClass:"info"},[_c('div',{staticClass:"name"},[_vm._v("\n                      "+_vm._s(item.realname)+"\n                    ")]),_vm._v(" "),_c('div',{staticClass:"title"},[_vm._v("\n                      "+_vm._s(item.company)+" "+_vm._s(item.office)+"\n                    ")]),_vm._v(" "),_c('div',{staticClass:"count g-flex"},[_c('span',[_vm._v(_vm._s(item.ztgsnum)+"分")]),_vm._v(" "),_c('Star',{attrs:{"out-width":100,"out-height":20,"decimal":item.ztgsnum/5}})],1)])]),_vm._v(" "),_c('div',{staticClass:"publish-time"},[_vm._v("\n                  "+_vm._s(item.operaTime)+"\n                ")])]),_vm._v(" "),_c('div',{staticClass:"comment-content"},[_c('p',[_vm._v(_vm._s(item.advantages))])]),_vm._v(" "),_c('div',{staticClass:"g-flex icon-list-wrap"},[_c('div',{staticClass:"icon-item"},[_c('a-icon',{attrs:{"type":"message"}}),_vm._v(_vm._s(item.commentnum)+"\n                ")],1),_vm._v(" "),_c('div',{staticClass:"icon-item"},[_c('a-icon',{attrs:{"type":"like"}}),_vm._v(_vm._s(item.praisenum)+"\n                ")],1)])])}),0),_vm._v(" "),(_vm.advantageReviewsCurPage < _vm.advantageReviewsTotalPage)?_c('div',{staticClass:"getMoreBtn text-c",on:{"click":_vm.getMoreAdvantage}},[_c('span',{staticClass:"check-comment"},[_vm._v("查看更多的评价")])]):_c('div',{staticClass:"noMore text-c"},[_vm._v("\n            没有更多评价了~\n          ")])]):_vm._e(),_vm._v(" "),(_vm.disadvantageLen !== 0)?_c('div',{staticClass:"disadvantage-wrap"},[_c('div',{staticClass:"area-title"},[_vm._v("\n            "+_vm._s(_vm.disadvantageLen)+"人说不好，他们这么说\n          ")]),_vm._v(" "),_c('div',{staticClass:"disadvantage-list-wrap"},_vm._l((_vm.disadvantageReviews),function(item,index){return _c('div',{key:index,staticClass:"comment-item"},[_c('div',{staticClass:"comment-info"},[_c('div',{staticClass:"g-flex"},[_c('div',{staticClass:"head-img"},[_c('img',{attrs:{"src":item.userheadimages,"alt":"","width":"100%"}})]),_vm._v(" "),_c('div',{staticClass:"info"},[_c('div',{staticClass:"name"},[_vm._v("\n                      "+_vm._s(item.realname)+"\n                    ")]),_vm._v(" "),_c('div',{staticClass:"title"},[_vm._v("\n                      "+_vm._s(item.company)+" "+_vm._s(item.office)+"\n                    ")]),_vm._v(" "),_c('div',{staticClass:"count g-flex"},[_c('span',[_vm._v(_vm._s(item.ztgsnum)+"分")]),_vm._v(" "),_c('Star',{attrs:{"out-width":100,"out-height":20,"decimal":item.ztgsnum/5}})],1)])]),_vm._v(" "),_c('div',{staticClass:"publish-time"},[_vm._v("\n                  "+_vm._s(item.operaTime)+"\n                ")])]),_vm._v(" "),_c('div',{staticClass:"comment-content"},[_c('p',[_vm._v(_vm._s(item.disadvantages))])]),_vm._v(" "),_c('div',{staticClass:"g-flex icon-list-wrap"},[_c('div',{staticClass:"icon-item"},[_c('a-icon',{attrs:{"type":"message"}}),_vm._v(_vm._s(item.commentnum)+"\n                ")],1),_vm._v(" "),_c('div',{staticClass:"icon-item"},[_c('a-icon',{attrs:{"type":"like"}}),_vm._v(_vm._s(item.praisenum)+"\n                ")],1)])])}),0),_vm._v(" "),(_vm.disadvantageReviewsCurPage < _vm.disadvantageReviewsTotalPage)?_c('div',{staticClass:"getMoreBtn text-c",on:{"click":_vm.getMoreDisadvantage}},[_vm._v("\n            查看更多评价\n          ")]):_c('div',{staticClass:"noMore text-c"},[_vm._v("\n            没有更多评价了~\n          ")])]):_vm._e()]):_vm._e()]),_vm._v(" "),_c('a-col',[_c('div',{staticClass:"contact-btn",on:{"click":_vm.contact}},[_vm._v("\n        请厂商联系我\n      ")])])],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/productDetail/reviews.vue?vue&type=template&id=a03688c0&scoped=true&

// EXTERNAL MODULE: ./components/BarScore.vue + 4 modules
var BarScore = __webpack_require__(95);

// EXTERNAL MODULE: ./components/common/starComp/StarZoom.vue + 4 modules
var StarZoom = __webpack_require__(54);

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.2.2@babel-loader/lib??ref--2-0!./node_modules/_@nuxt_components@2.1.8@@nuxt/components/dist/loader.js??ref--0-0!./node_modules/_vue-loader@15.9.7@vue-loader/lib??vue-loader-options!./components/productDetail/reviews.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var reviewsvue_type_script_lang_js_ = ({
  name: 'Reviews',
  components: {
    bar: BarScore["default"],
    Star: StarZoom["default"]
  },
  props: {
    productDetailObj: {
      type: Object,

      default() {
        return {};
      }

    },
    tabsList: {
      type: Array,

      default() {
        return [];
      }

    },
    analysisDimensionId: {
      type: String,

      default() {
        return null;
      }

    },
    reviewsList: {
      type: Array,

      default() {
        return [];
      }

    },
    disadvantageReviews: {
      type: Array,

      default() {
        return [];
      }

    },
    advantageReviews: {
      type: Array,

      default() {
        return [];
      }

    },
    currentPage: {
      type: Number,

      default() {
        return 1;
      }

    },
    totalPage: {
      type: Number,

      default() {
        return 1;
      }

    },
    // 优点总页数
    advantageReviewsTotalPage: {
      type: Number,

      default() {
        return 1;
      }

    },
    // 缺点总页数
    disadvantageReviewsTotalPage: {
      type: Number,

      default() {
        return 1;
      }

    },
    // 优点当前页
    advantageReviewsCurPage: {
      type: Number,

      default() {
        return 1;
      }

    },
    // 缺点当前页
    disadvantageReviewsCurPage: {
      type: Number,

      default() {
        return 1;
      }

    }
  },

  data() {
    return {
      allReviewsShow: true,
      partReviewsShow: false,
      advantageLen: 0,
      disadvantageLen: 0
    };
  },

  computed: {
    totalReviews() {
      return this.advantageLen + this.disadvantageLen;
    }

  },
  methods: {
    contact() {
      this.$emit('formHandleShow');
    },

    changeTags(item) {
      this.allReviewsShow = false;
      this.partReviewsShow = true;
      this.advantageLen = parseInt(item.advantagenum);
      this.disadvantageLen = parseInt(item.disadvantagenum);
      this.$emit('changeTags', item);
    },

    handleGetAllReview() {
      if (this.allReviewsShow) {
        return;
      }

      this.allReviewsShow = true;
      this.partReviewsShow = false;
      this.$emit('handleGetAllReview');
    },

    handleMoreReviews() {
      this.$emit('handleMoreReviews');
    },

    navigateToDetail(id) {
      this.$router.push({
        name: 'reviewDetail-id',
        params: {
          id
        }
      });
    },

    // 获取更多优点
    getMoreAdvantage() {
      console.log('当前页:', this.advantageReviewsCurPage);
      console.log('总页数：', this.advantageReviewsTotalPage);
      this.$emit('getMoreAdvantage');
    },

    // 获取更多缺点
    getMoreDisadvantage() {
      this.$emit('getMoreDisadvantage');
    }

  }
});
// CONCATENATED MODULE: ./components/productDetail/reviews.vue?vue&type=script&lang=js&
 /* harmony default export */ var productDetail_reviewsvue_type_script_lang_js_ = (reviewsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/_vue-loader@15.9.7@vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/productDetail/reviews.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(137)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  productDetail_reviewsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "a03688c0",
  "666ca4a9"
  
)

/* harmony default export */ var reviews = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_15ad3c8f_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(165);
/* harmony import */ var _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_15ad3c8f_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_15ad3c8f_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_15ad3c8f_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_15ad3c8f_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 200:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".count>span[data-v-15ad3c8f]{font-size:12px;color:#fff;background-color:#ff492c;border-radius:4px;padding:2px 4px;margin-right:10px}.getMoreBtn[data-v-15ad3c8f]{padding:10px;text-align:center;cursor:pointer}.getMoreBtn[data-v-15ad3c8f]:hover{text-decoration:underline}.detail-nav[data-v-15ad3c8f]{background-color:#fff}.detail-nav[data-v-15ad3c8f] .ant-anchor-wrapper{width:1090px;margin:0 auto}.detail-nav[data-v-15ad3c8f] .ant-anchor-ink{display:none}.detail-nav .logo[data-v-15ad3c8f]{display:none;width:110px;height:40px}.detail-nav .logo img[data-v-15ad3c8f]{width:100%}.detail-nav[data-v-15ad3c8f] .ant-affix{width:100%!important;height:58px!important;background-color:#fff;left:0;box-shadow:0 1px 4px 0 rgba(0,0,0,.1)}.detail-nav[data-v-15ad3c8f] .ant-affix .logo{display:inline-block;margin-right:20px;margin-left:20px;margin-bottom:10px}.detail-nav .nav-bar-item[data-v-15ad3c8f]{position:relative;display:inline-block;padding:16px 0;margin:0 20px}.detail-nav[data-v-15ad3c8f] .ant-anchor-link-active:before{content:\"\";width:100%;display:block;position:absolute;bottom:0;left:0;height:4px;background-color:#007dff;border-radius:2px}.detail-nav[data-v-15ad3c8f] .ant-anchor-link-active>.ant-anchor-link-title{color:#007dff}.spe[data-v-15ad3c8f]{color:#ff3030}.product-detail[data-v-15ad3c8f]{background-color:#fff;border-radius:4px;box-shadow:0 0 25px 4px hsla(0,0%,89.4%,.97);margin-top:50px!important}.product-detail .product-logo[data-v-15ad3c8f]{margin-left:20px;position:relative;padding:20px;width:146px;height:146px;margin-right:20px}.product-detail .product-logo .product-logo-img[data-v-15ad3c8f]{width:146px;height:146px;border:1px solid #cacaca;position:absolute;top:-30px;left:0}.product-detail .product-logo .product-logo-img img[data-v-15ad3c8f]{width:100%}.product-detail .product-name[data-v-15ad3c8f]{font-size:24px;padding-top:20px;margin-bottom:0}.product-detail .range[data-v-15ad3c8f]{font-size:44px}.product-detail .star-wrap[data-v-15ad3c8f]{margin-top:12px;margin-left:10px}.product-detail .star-wrap .txt[data-v-15ad3c8f]{font-size:12px}.product-detail .comment-total[data-v-15ad3c8f]{font-size:16px;font-weight:700;padding-top:22px;padding-left:10px}.product-detail .link-btn[data-v-15ad3c8f]{text-align:right}.product-detail .link-btn button[data-v-15ad3c8f]{margin-top:30px;width:140px;height:50px}.comment-wrap[data-v-15ad3c8f]{border-top:1px solid #cacaca;background-color:#fff}.comment-wrap .left-wrap h2[data-v-15ad3c8f]{font-size:26px;font-weight:700}.comment-wrap .left-wrap .panel[data-v-15ad3c8f]{padding:20px;border:1px solid #cacaca;border-radius:4px;margin-bottom:20px}.comment-wrap .left-wrap .panel .pro-intro[data-v-15ad3c8f]{color:#222;line-height:22px;padding-bottom:10px;border-bottom:1px solid #cacaca}.comment-wrap .left-wrap .panel .label[data-v-15ad3c8f]{margin-bottom:4px}.comment-wrap .left-wrap .panel .pro-company .item[data-v-15ad3c8f]{width:320px;margin-top:10px}.comment-wrap .left-wrap .panel .pro-company .icon[data-v-15ad3c8f]{margin-right:10px}.comment-wrap .right-wrap .com-list .item[data-v-15ad3c8f]{margin-bottom:20px}.comment-wrap .right-wrap .com-list .item .vs[data-v-15ad3c8f]{font-size:20px;font-weight:700}.comment-wrap .right-wrap .com-list .item .pro img[data-v-15ad3c8f]{width:80px;margin:0 10px}.comment-wrap .right-wrap .com-list .item .pro .txt[data-v-15ad3c8f]{font-size:16px;padding:8px 0;text-align:center}.view-wrap[data-v-15ad3c8f]{margin-bottom:20px;cursor:pointer}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.7@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_@nuxt_components@2.1.8@@nuxt/components/dist/loader.js??ref--0-0!./node_modules/_vue-loader@15.9.7@vue-loader/lib??vue-loader-options!./pages/productDetail/_id.vue?vue&type=template&id=15ad3c8f&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"main",attrs:{"id":"product-info"}},[_c('Header',{attrs:{"is-show":true}}),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"g-wrapper\" data-v-15ad3c8f>","</div>",[_c('a-row',{staticClass:"product-detail"},[_c('a-row',{staticClass:"g-flex"},[_c('a-col',{staticClass:"product-logo",attrs:{"span":"6"}},[_c('div',{staticClass:"product-logo-img"},[_c('img',{attrs:{"src":"https://via.placeholder.com/80","alt":_vm.productDetailObj.productObj.FACTORY_SHORT_NAME + _vm.productDetailObj.categoryObj.CNAME}})])]),_vm._v(" "),_c('a-col',{staticClass:"product-info",attrs:{"span":"14"}},[_c('h3',{staticClass:"product-name"},[_vm._v("\n            "+_vm._s(_vm.productDetailObj.productObj.NAME || _vm.productDetailObj.productKbObj.name)+"的用户实名口碑\n          ")]),_vm._v(" "),(_vm.productDetailObj.productKbObj.avgNum)?_c('div',{staticClass:"comment-desc g-flex"},[_c('div',{staticClass:"range"},[_vm._v("\n              "+_vm._s(_vm.productDetailObj.productKbObj.avgNum)+"\n            ")]),_vm._v(" "),_c('div',{staticClass:"star-wrap"},[_c('Star',{attrs:{"out-width":100,"out-height":20,"decimal":_vm.productDetailObj.productKbObj.avgNum/5}}),_vm._v(" "),_c('div',{staticClass:"txt"},[_vm._v("\n                口碑平均分\n              ")])],1),_vm._v(" "),_c('div',{staticClass:"comment-total"},[_c('a',{attrs:{"href":"#"}},[_vm._v(_vm._s(_vm.productDetailObj.productKbObj.dpnum)+"条评论")])])]):_c('div',[_vm._v("\n            暂无评论\n          ")])]),_vm._v(" "),_c('a-col',{staticClass:"link-btn",attrs:{"span":"4"}},[_c('div',[_c('a-button',{attrs:{"type":"primary"},on:{"click":_vm.formHandleShow}},[_vm._v("\n              请厂商联系我\n            ")])],1),_vm._v(" "),_c('div',[_c('a-button',{attrs:{"type":"primary"}},[_vm._v("\n              我要点评\n            ")])],1)])],1),_vm._v(" "),_c('a-row',{staticClass:"navbar-wrap"},[_c('a-anchor',{staticClass:"detail-nav"},[_c('a',{staticClass:"logo",attrs:{"href":"/"}},[_c('img',{attrs:{"src":__webpack_require__(14),"alt":"选型宝_企业软件的大众点评-ERP系统_BI_CRM系统_OA系统_数据库软件_BPM系统_企业邮箱..."}})]),_vm._v(" "),_c('a-anchor-link',{staticClass:"nav-bar-item",attrs:{"href":"#product-info","title":"产品信息"}}),_vm._v(" "),_c('a-anchor-link',{staticClass:"nav-bar-item",attrs:{"href":"#user-reviews","title":"用户点评"}}),_vm._v(" "),_c('a-anchor-link',{staticClass:"nav-bar-item",attrs:{"href":"#product-function","title":"功能"}}),_vm._v(" "),_c('a-anchor-link',{staticClass:"nav-bar-item",attrs:{"href":"#apply-show","title":"申请演示"}})],1)],1)],1)],1),_vm._ssrNode(" "),_c('a-row',{staticClass:"g-wrapper comment-wrap",attrs:{"gutter":[32, 32]}},[_c('a-col',{staticClass:"left-wrap",attrs:{"span":"16"}},[_c('h2',[_vm._v("产品信息")]),_vm._v(" "),_c('div',{staticClass:"panel"},[_c('div',{staticClass:"pro-intro-wrap"},[_c('div',{staticClass:"label"},[_vm._v("\n            产品描述\n          ")]),_vm._v(" "),_c('div',{staticClass:"pro-intro"},[_vm._v("\n            SAP是企业应用软件的市场领导者，可帮助各种规模和所有行业的公司以最佳状态运行：全球77％的交易收入都与SAP系统息息相关。我们的机器学习，物联网（IoT）和高级分析技术有助于将客户的业务转变为智能企业。我们的端到端应用程序和服务套件使我们的客户能够盈利地运营，不断地适应并有所作为。\n          ")]),_vm._v(" "),_c('div',{staticClass:"pro-company"},[_c('div',{staticClass:"g-flex space-between"},[_c('div',{staticClass:"item g-flex"},[_c('div',{staticClass:"icon"},[_c('a-icon',{staticStyle:{"font-size":"16px"},attrs:{"type":"home"}})],1),_vm._v(" "),_c('div',{},[_c('div',[_vm._v("公司名称")]),_vm._v(" "),_c('div',{staticClass:"txt-name",staticStyle:{"color":"#222"}},[_vm._v("\n                    思爱普\n                  ")])])]),_vm._v(" "),_c('div',{staticClass:"item g-flex"},[_c('div',{staticClass:"icon"},[_c('a-icon',{staticStyle:{"font-size":"16px"},attrs:{"type":"global"}})],1),_vm._v(" "),_c('div',{},[_c('div',[_vm._v("官方网站")]),_vm._v(" "),_c('div',{staticClass:"txt-name",staticStyle:{"color":"#222"}},[_vm._v("\n                    https://www.sap.cn/\n                  ")])])])]),_vm._v(" "),_c('div',{staticClass:"g-flex space-between"},[_c('div',{staticClass:"item g-flex"},[_c('div',{staticClass:"icon"},[_c('a-icon',{staticStyle:{"font-size":"16px"},attrs:{"type":"global"}})],1),_vm._v(" "),_c('div',{},[_c('div',[_vm._v("公司地址")]),_vm._v(" "),_c('div',{staticClass:"txt-name",staticStyle:{"color":"#222"}},[_vm._v("\n                    上海市\n                  ")])])]),_vm._v(" "),_c('div',{staticClass:"item g-flex"},[_c('div',{staticClass:"icon"},[_c('a-icon',{staticStyle:{"font-size":"16px"},attrs:{"type":"dashboard"}})],1),_vm._v(" "),_c('div',{},[_c('div',[_vm._v("成立时间")]),_vm._v(" "),_c('div',{staticClass:"txt-name",staticStyle:{"color":"#222"}},[_vm._v("\n                    1972年\n                  ")])])])])])])]),_vm._v(" "),_c('h2',{attrs:{"id":"user-reviews"}},[_vm._v("\n        用户点评\n      ")]),_vm._v(" "),(_vm.productDetailObj.productKbObj.avgNum)?_c('reviews',{attrs:{"product-detail-obj":_vm.productDetailObj,"tabs-list":_vm.tabsList,"analysis-dimension-id":_vm.analysisDimensionId,"reviews-list":_vm.reviewsList,"disadvantage-reviews":_vm.disadvantageReviews,"advantage-reviews":_vm.advantageReviews,"current-page":_vm.allReviewCurPage,"total-page":_vm.allReviewTotalPage,"advantage-reviews-total-page":_vm.advantageReviewsTotalPage,"disadvantage-reviews-total-page":_vm.disadvantageReviewsTotalPage,"advantage-reviews-cur-page":_vm.advantageReviewsCurPage,"disadvantage-reviews-cur-page":_vm.disadvantageReviewsCurPage},on:{"changeTags":_vm.changeTags,"handleGetAllReview":_vm.handleGetAllReview,"handleMoreReviews":_vm.handleMoreReviews,"getMoreAdvantage":_vm.getMoreAdvantage,"getMoreDisadvantage":_vm.getMoreDisadvantage,"formHandleShow":_vm.formHandleShow}}):_c('div',{staticClass:"panel"},[_c('div',{staticStyle:{"width":"100%","height":"400px"}},[_c('no-data',[_c('div',{staticStyle:{"font-size":"14px"},attrs:{"slot":"txt"},slot:"txt"},[_vm._v("\n              该产品暂无评论~\n              "),_c('span',{staticStyle:{"padding":"6px 14px","border-radius":"4px","background-color":"#007DFF","color":"#ffffff","cursor":"pointer"}},[_vm._v("马上去点评")])])])],1)]),_vm._v(" "),_c('h2',{attrs:{"id":"product-function"}},[_vm._v("\n        功能\n      ")]),_vm._v(" "),_c('div',{staticClass:"panel"},[_c('feature')],1),_vm._v(" "),_c('h2',{attrs:{"id":"apply-show"}},[_vm._v("\n        申请演示\n      ")]),_vm._v(" "),_c('div',{staticClass:"panel"},[_c('span',{staticStyle:{"cursor":"pointer"},on:{"click":_vm.formHandleShow}},[_vm._v("演示")])])],1),_vm._v(" "),_c('a-col',{staticClass:"right-wrap",attrs:{"span":"8"}},[_c('div',{staticClass:"panel"},[_c('h2',{staticClass:"title",staticStyle:{"margin-bottom":"20px"}},[_vm._v("\n          与其他产品比较\n        ")]),_vm._v(" "),_c('div',{staticClass:"com-list"},[_c('div',{staticClass:"item g-flex center"},[_c('div',{staticClass:"pro"},[_c('img',{attrs:{"src":"https://images.g2crowd.com/uploads/product/image/small_square/small_square_b9dbbb444871e867de3256a7ed711595/clickup.jpg","alt":""}}),_vm._v(" "),_c('div',{staticClass:"txt"},[_vm._v("\n                ClickUp\n              ")])]),_vm._v(" "),_c('div',{staticClass:"vs"},[_c('span',[_vm._v("VS")])]),_vm._v(" "),_c('div',{staticClass:"pro"},[_c('img',{attrs:{"src":"https://images.g2crowd.com/uploads/product/image/small_square/small_square_f426db6f72f9c9f8946d5964aa76616d/monday-com-monday-com.png","alt":""}}),_vm._v(" "),_c('div',{staticClass:"txt"},[_vm._v("\n                monday.com\n              ")])])]),_vm._v(" "),_c('div',{staticClass:"item g-flex center"},[_c('div',{staticClass:"pro"},[_c('img',{attrs:{"src":"https://images.g2crowd.com/uploads/product/image/small_square/small_square_b9dbbb444871e867de3256a7ed711595/clickup.jpg","alt":""}}),_vm._v(" "),_c('div',{staticClass:"txt"},[_vm._v("\n                ClickUp\n              ")])]),_vm._v(" "),_c('div',{staticClass:"vs"},[_c('span',[_vm._v("VS")])]),_vm._v(" "),_c('div',{staticClass:"pro"},[_c('img',{attrs:{"src":"https://images.g2crowd.com/uploads/product/image/small_square/small_square_0264136e455806de7a87b27d66c09acd/asana.png","alt":""}}),_vm._v(" "),_c('div',{staticClass:"txt"},[_vm._v("\n                Asana\n              ")])])]),_vm._v(" "),_c('div',{staticClass:"item g-flex center"},[_c('div',{staticClass:"pro"},[_c('img',{attrs:{"src":"https://images.g2crowd.com/uploads/product/image/small_square/small_square_d8d487b67574b56a5ad57a2f0f159a30/airtable.jpg","alt":""}}),_vm._v(" "),_c('div',{staticClass:"txt"},[_vm._v("\n                ClickUp\n              ")])]),_vm._v(" "),_c('div',{staticClass:"vs"},[_c('span',[_vm._v("VS")])]),_vm._v(" "),_c('div',{staticClass:"pro"},[_c('img',{attrs:{"src":"https://images.g2crowd.com/uploads/product/image/small_square/small_square_f426db6f72f9c9f8946d5964aa76616d/monday-com-monday-com.png","alt":""}}),_vm._v(" "),_c('div',{staticClass:"txt"},[_vm._v("\n                Airtable\n              ")])])])])]),_vm._v(" "),_c('div',{staticClass:"panel"},[_c('Slider',[_c('div',{staticClass:"g-flex space-between",attrs:{"slot":"slider-title"},on:{"click":_vm.navigateToRank},slot:"slider-title"},[_c('span',[_vm._v(_vm._s(_vm.productDetailObj.categoryObj.CNAME)+"厂商口碑排名")]),_vm._v(" "),_c('span',{staticStyle:{"font-size":"14px","color":"#a9a9a9","cursor":"pointer"}},[_vm._v("查看完整")])]),_vm._v(" "),(_vm.hotCompanyList.length)?_c('div',{staticClass:"slider-nav-bar",attrs:{"slot":"slider-nav-bar"},slot:"slider-nav-bar"},[_c('h3',[_vm._v("热门厂商")]),_vm._v(" "),_vm._l((_vm.hotCompanyList),function(item,index){return _c('div',{key:index,staticClass:"view-wrap",on:{"click":function($event){return _vm.navigateToReputation(item)}}},[_c('rankListItem',{attrs:{"item":item,"index":index}})],1)})],2):_vm._e(),_vm._v(" "),(_vm.challengerList.length)?_c('div',{staticClass:"slider-nav-bar",attrs:{"slot":"slider-nav-bar"},slot:"slider-nav-bar"},[_c('h3',[_vm._v("挑战者")]),_vm._v(" "),_vm._l((_vm.challengerList),function(item,index){return _c('div',{key:index,staticClass:"view-wrap",on:{"click":function($event){return _vm.navigateToReputation(item)}}},[_c('rankListItem',{attrs:{"item":item,"index":index}})],1)})],2):_vm._e(),_vm._v(" "),(_vm.noReviewList.length)?_c('div',{staticClass:"slider-nav-bar",attrs:{"slot":"slider-nav-bar"},slot:"slider-nav-bar"},[_c('h3',[_vm._v("暂无点评的厂商")]),_vm._v(" "),_vm._l((_vm.noReviewList),function(item,index){return _c('div',{key:index,staticClass:"view-wrap border",on:{"click":function($event){return _vm.navigateToReputation(item)}}},[_c('div',{staticClass:"view"},[_c('div',{staticClass:"g-flex space-between",staticStyle:{"padding":"20px","width":"100%"}},[_c('span',[_vm._v(_vm._s(item.factory_short_name || item.qcname))]),_vm._v(" "),_c('span',{staticClass:"review-btn",on:{"click":function($event){$event.stopPropagation();return _vm.goToReview($event)}}},[_vm._v("我要点评")])])])])})],2):_vm._e()])],1)])],1),_vm._ssrNode(" "),_c('contact',{ref:"child",attrs:{"form-show":_vm.formShow},on:{"formHide":_vm.formHandleHide,"submit":_vm.submitForm}}),_vm._ssrNode(" "),_c('rightNav',[_c('qrcode')],1),_vm._ssrNode(" "),_c('Footer')],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/productDetail/_id.vue?vue&type=template&id=15ad3c8f&scoped=true&

// EXTERNAL MODULE: ./components/common/starComp/StarZoom.vue + 4 modules
var StarZoom = __webpack_require__(54);

// EXTERNAL MODULE: ./components/productDetail/contact.vue + 4 modules
var contact = __webpack_require__(94);

// EXTERNAL MODULE: ./components/productDetail/feature.vue + 4 modules
var feature = __webpack_require__(177);

// EXTERNAL MODULE: ./components/productDetail/reviews.vue + 4 modules
var reviews = __webpack_require__(178);

// EXTERNAL MODULE: ./components/hasNoData/noData.vue + 4 modules
var noData = __webpack_require__(78);

// EXTERNAL MODULE: ./components/rank/list.vue + 4 modules
var list = __webpack_require__(88);

// EXTERNAL MODULE: ./components/rightNav/index.vue + 4 modules
var rightNav = __webpack_require__(71);

// EXTERNAL MODULE: ./components/rightNav/qrcode.vue + 4 modules
var qrcode = __webpack_require__(72);

// EXTERNAL MODULE: ./static/lib/utils.js
var utils = __webpack_require__(139);

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.2.2@babel-loader/lib??ref--2-0!./node_modules/_@nuxt_components@2.1.8@@nuxt/components/dist/loader.js??ref--0-0!./node_modules/_vue-loader@15.9.7@vue-loader/lib??vue-loader-options!./pages/productDetail/_id.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

 // import price from '../../components/productDetail/price'

 // import userRate from '../../components/productDetail/userRate'







/* harmony default export */ var _idvue_type_script_lang_js_ = ({
  components: {
    Star: StarZoom["default"],
    feature: feature["default"],
    reviews: reviews["default"],
    contact: contact["default"],
    noData: noData["default"],
    rankListItem: list["default"],
    rightNav: rightNav["default"],
    qrcode: qrcode["default"]
  },

  async asyncData(vm) {
    /*
    * vm.params带有一个参数
    * id 产品ID
    * */
    let productId = vm.params.id;
    let productDetailRes = await vm.$requests.productDetail({
      PRODUCT_ID: vm.params.id
    });
    let productDetailObj = {};

    if (productDetailRes.status === 200 && productDetailRes.data.result === 'success') {
      productDetailObj.categoryObj = productDetailRes.data.categoryObj;
      productDetailObj.productKbObj = productDetailRes.data.productKbObj;
      productDetailObj.productObj = productDetailRes.data.productObj;
      productDetailObj.factoryRankingObj = productDetailRes.data.factoryRankingObj;
      productDetailObj.factoryQcScoreObj = productDetailRes.data.factoryQcScoreObj;
      productDetailObj.reviewArr = [];
      productDetailObj.earmarked = [];
      productDetailObj.reviewArr.push({
        level: 'five',
        branchnum: productDetailRes.data.fivebranchnum,
        levelTxt: '很好'
      });
      productDetailObj.reviewArr.push({
        level: 'four',
        branchnum: productDetailRes.data.fourbranchnum,
        levelTxt: '较好'
      });
      productDetailObj.reviewArr.push({
        level: 'three',
        branchnum: productDetailRes.data.threebranchnum,
        levelTxt: '一般'
      });
      productDetailObj.reviewArr.push({
        level: 'two',
        branchnum: productDetailRes.data.twobranchnum,
        levelTxt: '较差'
      });
      productDetailObj.reviewArr.push({
        level: 'one',
        branchnum: productDetailRes.data.onebranchnum,
        levelTxt: '很差'
      });
      productDetailObj.earmarked.push({
        text: '功能',
        levelAvgNum: productDetailRes.data.productKbObj.functionLevelAvgNum
      });
      productDetailObj.earmarked.push({
        text: '性能',
        levelAvgNum: productDetailRes.data.productKbObj.performanceLevelAvgNum
      });
      productDetailObj.earmarked.push({
        text: '可扩展性',
        levelAvgNum: productDetailRes.data.productKbObj.scalabilityLevelAvgNum
      });
      productDetailObj.earmarked.push({
        text: '易部署性',
        levelAvgNum: productDetailRes.data.productKbObj.deployLevelAvgNum
      });
      productDetailObj.earmarked.push({
        text: '使用友好性',
        levelAvgNum: productDetailRes.data.productKbObj.friendlyLevelAvgNum
      });
    }

    let tabsRes = await vm.$requests.productGetAllDimensions({
      PRODUCT_ID: vm.params.id
    });
    let tabsList = tabsRes.status === 200 && tabsRes.data.dimensions ? tabsRes.data.dimensions : []; // 全部点评

    let allReviewCurPage = 1;
    let allReviewTotalPage = 1;
    let reviewsRes = await vm.$requests.productReviews({
      PRODUCT_ID: productId,
      CUR_PAGE: allReviewCurPage,
      TYPE: 1
    });
    let reviewsList = [];

    if (reviewsRes.status === 200 && reviewsRes.data.result === 'success') {
      reviewsList = reviewsRes.data.productScoreList;
      allReviewTotalPage = reviewsRes.data.TOTAL_PAGE;

      if (reviewsList.length) {
        reviewsList = reviewsList.map(item => {
          item.operaTime = Object(utils["b" /* timestamp2date */])(item.operaTime);
          return item;
        });
      }
    } // 厂商口碑排行列表(热门、挑战者、暂无点评厂商)


    let hotCompanyListRes = await vm.$requests.categoryHotCompany({
      ORDER_TYPE: 0,
      // 0按点评量，1按点评分数
      CATEGORY_ID: productDetailObj.categoryObj.CID
    });
    let hotCompanyList = hotCompanyListRes.status === 200 && hotCompanyListRes.data.result === 'success' ? hotCompanyListRes.data.factoryQcList : [];
    let challengerRes = await vm.$requests.categoryChallenger({
      ORDER_TYPE: 0,
      // 0按点评量，1按点评分数
      CATEGORY_ID: productDetailObj.categoryObj.CID
    });
    let challengerList = challengerRes.status === 200 && challengerRes.data.result === 'success' ? challengerRes.data.factoryQcList : [];
    let noReviewRes = await vm.$requests.categoryNoComment({
      CATEGORY_ID: productDetailObj.categoryObj.CID
    });
    let noReviewList = noReviewRes.status === 200 && noReviewRes.data.result === 'success' ? noReviewRes.data.notScoreList : []; // let data = {
    //   CATEGORY_ID: productDetailObj.categoryObj.CID,
    //   FACTORY_QCID: productDetailObj.productObj.FACTORYQC_ID
    // }
    // let listRes = await vm.$requests.publicCompany(data)
    // let productList = (listRes.status === 200 && listRes.data.result === 'success') ? listRes.data.productList : []

    let advantageReviews = [];
    let disadvantageReviews = [];
    return {
      productId,
      // 产品ID
      productDetailObj,
      tabsList,
      analysisDimensionId: null,
      // 标签ID
      reviewsList,
      // 全部点评列表
      advantageReviews,
      // 某个维度下的点评列表
      disadvantageReviews,
      // 某个维度下的点评列表
      curTitle: '',
      // 选中的维度
      hotCompanyList,
      challengerList,
      noReviewList,
      formShow: false,
      allReviewCurPage,
      // 全部点评当前页码数
      allReviewTotalPage,
      // 全部点评所有页码数
      advantageReviewsTotalPage: 1,
      disadvantageReviewsTotalPage: 1,
      advantageReviewsCurPage: 1,
      disadvantageReviewsCurPage: 1
    };
  },

  methods: {
    navigateToRank() {
      this.$router.push({
        name: 'company-id',
        params: {
          id: this.productDetailObj.categoryObj.CID
        },
        query: {
          category_name: this.productDetailObj.categoryObj.CNAME
        }
      });
    },

    navigateToReputation(item) {
      this.$router.push({
        name: 'reputation-id',
        params: {
          id: this.productDetailObj.categoryObj.CID
        },
        query: {
          category_name: this.productDetailObj.categoryObj.CNAME,
          factory_id: item.qcid
        }
      });
    },

    // 优点
    async getProsAnalysis(item) {
      let reviewsRes = await this.$requests.productProsAnalysis({
        PRODUCT_ID: this.productId,
        CUR_PAGE: this.advantageReviewsCurPage,
        DIMENSION_TITLE: item.title,
        USER_ID: '3fe2bc230ce646f488644594817477e2'
      });
      let partReviewsList = [];

      if (reviewsRes.status === 200 && reviewsRes.data.result === 'success') {
        partReviewsList = reviewsRes.data.pdScoreList;
        this.advantageReviewsTotalPage = reviewsRes.data.TOTAL_PAGE;

        if (partReviewsList.length) {
          partReviewsList = partReviewsList.map(item => {
            item.operaTime = Object(utils["b" /* timestamp2date */])(item.operaTime);
            return item;
          });
          this.advantageReviews = partReviewsList;
        }
      }
    },

    // 缺点
    async getConsAnalysis(item) {
      let reviewsRes = await this.$requests.productConsAnalysis({
        PRODUCT_ID: this.productId,
        CUR_PAGE: this.disadvantageReviewsCurPage,
        DIMENSION_TITLE: item.title,
        USER_ID: '3fe2bc230ce646f488644594817477e2'
      });
      let partReviewsList = [];
      console.log('缺点:', reviewsRes);

      if (reviewsRes.status === 200 && reviewsRes.data.result === 'success') {
        partReviewsList = reviewsRes.data.pdScoreList;
        this.disadvantageReviewsTotalPage = reviewsRes.data.TOTAL_PAGE;

        if (partReviewsList.length) {
          partReviewsList = partReviewsList.map(item => {
            item.operaTime = Object(utils["b" /* timestamp2date */])(item.operaTime);
            return item;
          });
          this.disadvantageReviews = partReviewsList;
        }
      }
    },

    changeTags(item) {
      this.analysisDimensionId = item.dimension_id;
      this.curTitle = item.title; // 当前选中的维度

      this.advantageReviewsCurPage = 1;
      this.disadvantageReviewsCurPage = 1;
      this.getProsAnalysis(item);
      this.getConsAnalysis(item);
    },

    // 全部点评
    async handleGetAllReview() {
      this.analysisDimensionId = null;
      this.allReviewCurPage = 1;
      let reviewsRes = await this.$requests.productReviews({
        PRODUCT_ID: this.productId,
        CUR_PAGE: this.allReviewCurPage,
        TYPE: 1
      });
      let reviewsList = [];

      if (reviewsRes.status === 200 && reviewsRes.data.result === 'success') {
        reviewsList = reviewsRes.data.productScoreList;
        this.allReviewTotalPage = reviewsRes.data.TOTAL_PAGE;

        if (reviewsList.length) {
          this.reviewsList = reviewsList.map(item => {
            item.operaTime = Object(utils["b" /* timestamp2date */])(item.operaTime);
            return item;
          });
        }
      }
    },

    // 全部点评的加载更多
    async handleMoreReviews() {
      if (this.allReviewCurPage >= this.allReviewTotalPage) {
        return;
      }

      this.allReviewCurPage += 1;
      let reviewsRes = await this.$requests.productReviews({
        PRODUCT_ID: this.productId,
        CUR_PAGE: this.allReviewCurPage,
        TYPE: 1
      });
      let reviewsList = [];

      if (reviewsRes.status === 200 && reviewsRes.data.result === 'success') {
        reviewsList = reviewsRes.data.productScoreList;

        if (reviewsList.length) {
          reviewsList = reviewsList.map(item => {
            item.operaTime = Object(utils["b" /* timestamp2date */])(item.operaTime);
            return item;
          });
          this.reviewsList = this.reviewsList.concat(reviewsList);
        }
      }
    },

    navigateToDetail(item) {
      this.$router.push({
        name: 'productDetail-id',
        params: {
          id: item.ID
        }
      });
    },

    formHandleShow() {
      this.formShow = true;
    },

    formHandleHide() {
      this.formShow = false;
    },

    async submitForm(data) {
      data.CATEGORY_ID = this.productDetailObj.categoryObj.CID || '';
      data.CATEGORY_NAME = this.productDetailObj.categoryObj.CNAME || '';
      data.FACTORY_ID = this.productDetailObj.factoryQcScoreObj.factory_short_id || '';
      data.FACTORY_NAME = this.productDetailObj.factoryQcScoreObj.factory_short_name || '';
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

    getMoreDisadvantage() {
      if (this.disadvantageReviewsCurPage >= this.disadvantageReviewsTotalPage) {
        return false;
      } else {
        this.disadvantageReviewsCurPage += 1;
        this.$requests.productConsAnalysis({
          PRODUCT_ID: this.productId,
          CUR_PAGE: this.disadvantageReviewsCurPage,
          DIMENSION_TITLE: this.curTitle,
          USER_ID: '3fe2bc230ce646f488644594817477e2'
        }).then(res => {
          if (res.status === 200 && res.data.result === 'success') {
            let partReviewsList = res.data.pdScoreList;

            if (partReviewsList.length) {
              partReviewsList = partReviewsList.map(item => {
                item.operaTime = Object(utils["b" /* timestamp2date */])(item.operaTime);
                return item;
              });
              this.disadvantageReviews = this.disadvantageReviews.concat(partReviewsList);
            }
          }
        });
      }
    },

    getMoreAdvantage() {
      if (this.advantageReviewsCurPage >= this.advantageReviewsTotalPage) {
        return false;
      } else {
        this.advantageReviewsCurPage += 1;
        this.$requests.productProsAnalysis({
          PRODUCT_ID: this.productId,
          CUR_PAGE: this.advantageReviewsCurPage,
          DIMENSION_TITLE: this.curTitle,
          USER_ID: '3fe2bc230ce646f488644594817477e2'
        }).then(res => {
          if (res.status === 200 && res.data.result === 'success') {
            let partReviewsList = res.data.pdScoreList;

            if (partReviewsList.length) {
              partReviewsList = partReviewsList.map(item => {
                item.operaTime = Object(utils["b" /* timestamp2date */])(item.operaTime);
                return item;
              });
              this.advantageReviews = this.advantageReviews.concat(partReviewsList);
            }
          }
        });
      }
    }

  },

  head() {
    return {
      title: this.productDetailObj.productObj.NAME + '的用户口碑_' + this.productDetailObj.productObj.FACTORY_SHORT_NAME + '_' + this.productDetailObj.categoryObj.CNAME + '系统怎么样？选型宝',
      meta: [{
        hid: 'description',
        name: 'description',
        content: '想了解' + this.productDetailObj.productObj.NAME + '的用户口碑好不好，' + this.productDetailObj.productObj.FACTORY_SHORT_NAME + this.productDetailObj.categoryObj.CNAME + '系统怎么样？就上选型宝, 企业级软件的大众点评'
      }, {
        hid: 'keywords',
        name: 'keywords',
        content: this.productDetailObj.categoryObj.CNAME + '系统_' + this.productDetailObj.productObj.FACTORY_SHORT_NAME + '_' + this.productDetailObj.productObj.NAME
      }]
    };
  }

});
// CONCATENATED MODULE: ./pages/productDetail/_id.vue?vue&type=script&lang=js&
 /* harmony default export */ var productDetail_idvue_type_script_lang_js_ = (_idvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/_vue-loader@15.9.7@vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/productDetail/_id.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(199)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  productDetail_idvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "15ad3c8f",
  "073e0ff4"
  
)

/* harmony default export */ var _id = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Header: __webpack_require__(31).default,Slider: __webpack_require__(81).default,Footer: __webpack_require__(73).default})


/***/ }),

/***/ 50:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(57);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("4d15eb30", content, true, context)
};

/***/ }),

/***/ 51:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(61);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("fbf3bf86", content, true, context)
};

/***/ }),

/***/ 52:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(64);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("fdae1212", content, true, context)
};

/***/ }),

/***/ 53:
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
  add("6a3e0560", content, true, context)
};

/***/ }),

/***/ 54:
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
  
  var style0 = __webpack_require__(56)
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

/***/ 55:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(75);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("93cf824e", content, true, context)
};

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_StarZoom_vue_vue_type_style_index_0_id_59cc2748_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50);
/* harmony import */ var _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_StarZoom_vue_vue_type_style_index_0_id_59cc2748_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_StarZoom_vue_vue_type_style_index_0_id_59cc2748_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_StarZoom_vue_vue_type_style_index_0_id_59cc2748_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_StarZoom_vue_vue_type_style_index_0_id_59cc2748_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 57:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(13);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(58);
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(59);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".star-default[data-v-59cc2748]{width:100px;height:20px;background:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");background-size:contain}.star-real[data-v-59cc2748]{width:80px;height:20px;background:url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");background-size:contain}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 58:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAB0klEQVQ4T52UsWsTURzHv793F2kduoS8d0kWbzGB4FYHcYogOAhaHBxEEDfbP6BFV1Hprri5OAlSBUEQJIs46OYSW6EOIZf3S7ipQ9qmeT+5kh5JaMLVt929z/fDe7/f744wZ8VxvDQYDL6LCHzfv1IoFPZm4TRP1O12N5xzzxOGiNaNMZtnFrVarcVcLvcXgBmFbb/fD8Mw3D9NNvNEzLwqIi/HQ0T0yBjzOrOo0Wj41Wr1DxFdmArtNpvNSr1eP5qWkYgoa21VKXXROVcBUCGiSwCWZ9TjJ4BfIrJDRNu+72/n8/kdstZ+BXBtXtEz7DUSEQPQGeB5CFOv16sPh8NPAM7/j0xE+kR087hr7Xb7uud5HwEsnkUmIvvOuVvlcvlL2v4oim4opbYALGSRiciB53krWuvPxwM7Hup0Og+I6E0WkVLqodY6ZSdEURTdU0q9zSJyzt0vlUopOyGy1j4F8CSLCMCzIAhSdlqU1Oh2RtGHIAhWTtgJETP/FpFkusfXj1EtL4+/TCa7WCymbCpKPhVmPgDgjwK7AB4bY94lz8x8N7kOgHD0WznSWi8Q0fC0rr0noqsAXsRx/KpWqx1OneIcM68B2CCib8aYOyf7/wBiu6siH+XLgQAAAABJRU5ErkJggg=="

/***/ }),

/***/ 59:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAB3ElEQVQ4T52TsWsTcRTHP+9nWhoHkUtqV7MYoXRTSns3tILgIGiFyw1FEDf1D7DoKlXclW4uLrkgVREEQQyYi6CbKNgIdXBJ2gsICm013pOE9mxim179bT/e5/fhy3vvJ/Q5zdnxQ9oaqLYRXdOJ4afB991w6ScKPXsO5HabMSrXLf/13X2LvroT6bQxX0BGOomg/qORyuXK5fWdZLsmCj3nKnBv+yOjesXyg4XEIp2aSjVHfn0GObr9kcLyh0YqP10ut3plomDq7vjxARk8BppHyANjwImd+6HvFN6Lag1hiZYuZcbe1CQs2C8ROdWv6XvVVPWVhAWngXBkL7h/XRuyWrCnBZ4hcvB/ZAprEkVnO1NruvZpNfIESO9HprBuiM5litUX8fhXXOeMMSwCQ0lkqmwcEJ2xisHzNt+1Ryvu5CVjzIMkIoHLmWIlZrtEq549K8jDJCI0upj1qzHbJQo95xZwM5lI57N+ELPdiQrOogjnE4ngcbZYmdliexN9gs5m/z3CW1QF5GTPd6kNFysxG4vaX6VZcDYQUptTWCbSG1Yp8Nv30Jv0UDMvQm6z3rKiypCU+P3P1ELPeaSobeBOPfp2f7T08WdXCnd0MJTD1wTmgCDrBxe26n8Ah+yh8Twu8rAAAAAASUVORK5CYII="

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5f550c22_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(51);
/* harmony import */ var _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5f550c22_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5f550c22_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5f550c22_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5f550c22_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 61:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".right-wrap[data-v-5f550c22]{position:fixed;bottom:30px;right:10px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 62:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/qrcode.5d928fb.png";

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_qrcode_vue_vue_type_style_index_0_id_76300a10_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52);
/* harmony import */ var _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_qrcode_vue_vue_type_style_index_0_id_76300a10_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_qrcode_vue_vue_type_style_index_0_id_76300a10_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_qrcode_vue_vue_type_style_index_0_id_76300a10_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_qrcode_vue_vue_type_style_index_0_id_76300a10_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 64:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".qrcode[data-v-76300a10]{box-shadow:0 2px 8px 0 rgba(0,0,0,.14);border-radius:4px;overflow:hidden}.qrcode img[data-v-76300a10]{width:130px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 65:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/wx-yh.bffc413.jpg";

/***/ }),

/***/ 66:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/qrcode_dy.e488e10.jpg";

/***/ }),

/***/ 67:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/qcrode.414b83a.jpg";

/***/ }),

/***/ 68:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/qrcode_fw.8427576.jpg";

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_2c09329e_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53);
/* harmony import */ var _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_2c09329e_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_2c09329e_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_2c09329e_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_2c09329e_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 70:
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
___CSS_LOADER_EXPORT___.push([module.i, ".global-header[data-v-2c09329e]{border-bottom:1px solid #ddd;background-color:#fff;height:74px;line-height:74px}.global-header .logo-wrap[data-v-2c09329e]{margin-bottom:0}.global-header .logo[data-v-2c09329e]{width:99px;margin-right:15px}.global-header strong[data-v-2c09329e]{font-size:14px;color:#007dff}.global-header nav a.link[data-v-2c09329e]{color:#555;display:inline-flex;align-items:center;padding:0 15px}.icon[data-v-2c09329e]{display:inline-block;width:22px;height:22px;margin-right:6px}.review[data-v-2c09329e]{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ")}.cate[data-v-2c09329e]{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ")}.entry[data-v-2c09329e]{background-color:#ff492c;color:#fff;line-height:38px;padding:0 32px;border-radius:20px}*[data-v-2c09329e]{margin:0}*[data-v-2c09329e],ul[data-v-2c09329e]{padding:0}.g-wrapper[data-v-2c09329e]{width:100%;max-width:1200px!important;margin:0 auto!important}.pad-t-10[data-v-2c09329e]{padding-top:10px}.pad-t-20[data-v-2c09329e]{padding-top:20px}.pad-b-20[data-v-2c09329e]{padding-bottom:20px}.pad-b-30[data-v-2c09329e]{padding-bottom:30px}.g-flex[data-v-2c09329e]{display:flex}.g-flex.v-center[data-v-2c09329e]{flex-direction:column}.g-flex.center[data-v-2c09329e],.g-flex.v-center[data-v-2c09329e]{justify-content:center;align-items:center}.g-flex.space-between[data-v-2c09329e]{justify-content:space-between;align-items:center}.g-flex.space-around[data-v-2c09329e]{justify-content:space-around}.footer[data-v-2c09329e]{padding:60px 0 20px}.footer .footerInfo[data-v-2c09329e]{text-align:center}.footer .footerInfo .ca_text[data-v-2c09329e]{font-size:20px;color:#555}.footer .footerInfo .qc_text[data-v-2c09329e]{font-size:15px;color:#c1c1c1;padding-top:20px}.footer .qcrodeImg[data-v-2c09329e]{width:158px;margin-bottom:70px;margin-top:10px}.display-pc[data-v-2c09329e]{display:block}.display-flex[data-v-2c09329e]{display:flex}.display-m[data-v-2c09329e]{display:none}.text-c[data-v-2c09329e]{text-align:center}.report-wrap[data-v-2c09329e]{background-color:#007dff;font-size:20px;padding:40px 0;margin-bottom:10px}.report-wrap[data-v-2c09329e],.review-btn[data-v-2c09329e]{color:#fff;text-align:center}.review-btn[data-v-2c09329e]{padding:6px 12px;background-color:#ff492c;border-radius:4px}.check-comment[data-v-2c09329e]{padding:6px 18px;color:#007dff;border:1px solid #007dff;border-radius:16px;font-size:12px}.check-comment[data-v-2c09329e]:hover{background-color:#007dff;color:#fff}.contact-btn[data-v-2c09329e]{background-color:#773aff;color:#fff;padding:16px 0;text-align:center;margin-bottom:10px;cursor:pointer}.border[data-v-2c09329e]{border:1px solid #cacaca;border-radius:4px}@media (max-width:767px){.display-m[data-v-2c09329e]{display:flex}.display-flex[data-v-2c09329e],.display-pc[data-v-2c09329e]{display:none}}.beian[data-v-2c09329e]{background-color:#2d3237;padding:40px 0}.site-width[data-v-2c09329e]{padding:10px 0;width:100%;justify-content:center;font-size:12px;margin:0 auto}.site-width[data-v-2c09329e],.site-width a[data-v-2c09329e]{display:flex;align-items:center;color:#fff}.site-width a[data-v-2c09329e]{margin:0 34px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 71:
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
  
  var style0 = __webpack_require__(60)
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

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.7@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_@nuxt_components@2.1.8@@nuxt/components/dist/loader.js??ref--0-0!./node_modules/_vue-loader@15.9.7@vue-loader/lib??vue-loader-options!./components/rightNav/qrcode.vue?vue&type=template&id=76300a10&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"qrcode"},[_vm._ssrNode("<img"+(_vm._ssrAttr("src",__webpack_require__(62)))+" alt data-v-76300a10>")])}
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
  
  var style0 = __webpack_require__(63)
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

/***/ 73:
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
        img: __webpack_require__(65),
        path: '/all'
      }, {
        text: '关于我们',
        title: '选型宝订阅号',
        img: __webpack_require__(66),
        path: 'http://old.xuanxingbao.com/webPC/about'
      }, {
        text: '联系我们',
        title: '选型宝小程序',
        img: __webpack_require__(67),
        path: 'http://old.xuanxingbao.com/webPC/contact-list.html'
      }, {
        text: '加入我们',
        title: '选型宝服务号',
        img: __webpack_require__(68),
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
  
  var style0 = __webpack_require__(69)
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

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_noData_vue_vue_type_style_index_0_id_1feed65b_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(55);
/* harmony import */ var _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_noData_vue_vue_type_style_index_0_id_1feed65b_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_noData_vue_vue_type_style_index_0_id_1feed65b_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_noData_vue_vue_type_style_index_0_id_1feed65b_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_noData_vue_vue_type_style_index_0_id_1feed65b_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 75:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(13);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(76);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".no-data-wrap[data-v-1feed65b]{width:100%;height:100%;background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");background-size:197px 128px;background-repeat:no-repeat;background-position:50%;position:relative}.no-data-wrap .txt-wrap[data-v-1feed65b]{color:#a3a3a3;position:absolute;left:50%;bottom:20%;transform:translate(-50%,-50%)}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 76:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/nodata.814e089.png";

/***/ }),

/***/ 77:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(83);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("5ba9a028", content, true, context)
};

/***/ }),

/***/ 78:
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
  
  var style0 = __webpack_require__(74)
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

/***/ 79:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(90);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("41c85ece", content, true, context)
};

/***/ }),

/***/ 80:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(92);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("e2592f90", content, true, context)
};

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.7@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_@nuxt_components@2.1.8@@nuxt/components/dist/loader.js??ref--0-0!./node_modules/_vue-loader@15.9.7@vue-loader/lib??vue-loader-options!./components/Slider.vue?vue&type=template&id=187e41cc&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"slider-wrap"},[_vm._t("report-txt"),_vm._ssrNode(" "),_vm._ssrNode("<div>","</div>",[_vm._ssrNode("<h2 class=\"slider-title\">","</h2>",[_vm._t("slider-title")],2),_vm._ssrNode(" "),_vm._ssrNode("<div>","</div>",[_vm._t("slider-nav-bar")],2)],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Slider.vue?vue&type=template&id=187e41cc&

// EXTERNAL MODULE: ./node_modules/_vue-loader@15.9.7@vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

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
  "b0c263b2"
  
)

/* harmony default export */ var Slider = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_style_index_0_id_d40efb78_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(77);
/* harmony import */ var _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_style_index_0_id_d40efb78_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_style_index_0_id_d40efb78_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_style_index_0_id_d40efb78_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_style_index_0_id_d40efb78_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 83:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".link[data-v-d40efb78]{color:#222;transition:.5s}.link[data-v-d40efb78]:hover{color:#007dff;text-decoration:underline}.view[data-v-d40efb78]{width:100%;display:flex;justify-content:flex-start}.view .range[data-v-d40efb78]{width:10%;position:relative;color:#fff;background-color:#92b2f1}.view .range span[data-v-d40efb78]{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%)}.view.c1 .range[data-v-d40efb78]{background-color:#f55b53}.view.c1 .score-box[data-v-d40efb78]{background-color:#f55c53!important}.view.c2 .range[data-v-d40efb78]{background-color:#f2ab38}.view.c2 .score-box[data-v-d40efb78]{background-color:#f2ab38!important}.view.c3 .range[data-v-d40efb78]{background-color:#5fcd81}.view.c3 .score-box[data-v-d40efb78]{background-color:#5fcd81!important}.view .info[data-v-d40efb78]{width:calc(90% - 40px);padding:10px 20px}.view .info .title[data-v-d40efb78]{font-size:17px;font-weight:700;margin-bottom:10px}.view .info .score[data-v-d40efb78]{display:flex;flex-direction:row;justify-content:space-between}.view .info .score .score-box[data-v-d40efb78]{background-color:#90b2f1;color:#fff;padding:2px 4px;border-radius:4px}.view .info .bar-box[data-v-d40efb78]{width:218px;height:13px;margin:10px 0;background-color:#e6e6e6;border-radius:50px}.view .info .bar-box .bar[data-v-d40efb78]{height:13px;display:flex;justify-content:space-between;align-items:center;width:0;box-sizing:border-box;padding:0 10px;border-radius:50px;transition:width .8s ease-in-out}.view .info .bar-box .bar.s1[data-v-d40efb78]{background:#f55a53;background:linear-gradient(90deg,#f55a53,#eb8a5d)}.view .info .bar-box .bar.s2[data-v-d40efb78]{background:#f2a937;background:linear-gradient(90deg,#f2a937,#ebd458)}.view .info .bar-box .bar.s3[data-v-d40efb78]{background:#5ecd80;background:linear-gradient(90deg,#5ecd80,#80cca5)}.view .info .bar-box .bar.s4[data-v-d40efb78]{background:#37a2f1;background:linear-gradient(90deg,#8fb1f0,#a3baf9)}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 88:
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
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/rank/list.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(82)
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
  "59ab67d0"
  
)

/* harmony default export */ var list = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_contact_vue_vue_type_style_index_0_id_639bcfa5_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(79);
/* harmony import */ var _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_contact_vue_vue_type_style_index_0_id_639bcfa5_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_contact_vue_vue_type_style_index_0_id_639bcfa5_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_contact_vue_vue_type_style_index_0_id_639bcfa5_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_contact_vue_vue_type_style_index_0_id_639bcfa5_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 90:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".contact-wrap[data-v-639bcfa5]{position:fixed;left:0;right:0;top:0;bottom:0;z-index:10}.model[data-v-639bcfa5]{width:100%;height:100%;background-color:rgba(6,21,26,.67)}.form[data-v-639bcfa5]{position:absolute;top:50%;width:568px;padding:30px;left:50%;transform:translate(-50%,-50%);background-color:#fff}.note[data-v-639bcfa5]{color:#222;margin-bottom:10px}.note .h2[data-v-639bcfa5]{font-size:24px}.close-btn[data-v-639bcfa5]{position:absolute;right:30px;top:30px}[data-v-639bcfa5] .ant-form-item{margin-bottom:0}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_BarScore_vue_vue_type_style_index_0_id_41038052_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80);
/* harmony import */ var _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_BarScore_vue_vue_type_style_index_0_id_41038052_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_BarScore_vue_vue_type_style_index_0_id_41038052_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_BarScore_vue_vue_type_style_index_0_id_41038052_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_BarScore_vue_vue_type_style_index_0_id_41038052_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 92:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".bar-box[data-v-41038052]{width:100%;max-width:50vw;background-color:#e6e6e6;height:15px;border-radius:20px;overflow:hidden}.bar-box.small[data-v-41038052]{max-width:140px}.bar-box .bar[data-v-41038052]{height:15px;width:0;border-radius:20px;transition:width .8s ease-in-out;padding:0 10px}.bar-box .bar.c1[data-v-41038052]{background:#ff4a49;background:linear-gradient(90deg,#ff4a49,#fc8450)}.bar-box .bar.c2[data-v-41038052]{background:#ffa602;background:linear-gradient(90deg,#ffa602,#f1d335)}.bar-box .bar.c3[data-v-41038052]{background:#01d078;background:linear-gradient(90deg,#01d078,#63cea2)}.bar-box .bar.c4[data-v-41038052]{background:#8c89c2;background:linear-gradient(90deg,#8c89c2,#afb5f3)}.bar-box .bar.c5[data-v-41038052]{background:#afb5f3;background:linear-gradient(90deg,#afb5f3,#9eb9ff)}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.7@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_@nuxt_components@2.1.8@@nuxt/components/dist/loader.js??ref--0-0!./node_modules/_vue-loader@15.9.7@vue-loader/lib??vue-loader-options!./components/productDetail/contact.vue?vue&type=template&id=639bcfa5&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.formShow),expression:"formShow"}],staticClass:"contact-wrap"},[_vm._ssrNode("<div class=\"model\" data-v-639bcfa5></div> "),_vm._ssrNode("<div class=\"form\" data-v-639bcfa5>","</div>",[_vm._ssrNode("<div class=\"note\" data-v-639bcfa5><div class=\"h2\" data-v-639bcfa5>"+_vm._ssrEscape("\n        "+_vm._s(_vm.$configs.APPLY.FORM.ONE)+"\n      ")+"</div> <div data-v-639bcfa5>"+_vm._ssrEscape(_vm._s(_vm.$configs.APPLY.FORM.TWO))+"</div></div> "),_vm._ssrNode("<div class=\"close-btn\" data-v-639bcfa5>","</div>",[_c('a-icon',{staticStyle:{"font-size":"24px"},attrs:{"type":"close"}})],1),_vm._ssrNode(" "),_c('a-form',{attrs:{"form":_vm.form},on:{"submit":_vm.handleSubmit}},[_c('a-form-item',{attrs:{"label":"姓名"}},[_c('a-input',{directives:[{name:"decorator",rawName:"v-decorator",value:([
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


// CONCATENATED MODULE: ./components/productDetail/contact.vue?vue&type=template&id=639bcfa5&scoped=true&

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
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/productDetail/contact.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(89)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  productDetail_contactvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "639bcfa5",
  "16c24a2e"
  
)

/* harmony default export */ var contact = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.7@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_@nuxt_components@2.1.8@@nuxt/components/dist/loader.js??ref--0-0!./node_modules/_vue-loader@15.9.7@vue-loader/lib??vue-loader-options!./components/BarScore.vue?vue&type=template&id=41038052&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"bar-box",class:_vm.size},[_vm._ssrNode("<div"+(_vm._ssrClass("bar",'c' + _vm.index))+(_vm._ssrStyle(null,_vm.start ? 'width:' + _vm.width + '%' : 0, null))+" data-v-41038052></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/BarScore.vue?vue&type=template&id=41038052&scoped=true&

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.2.2@babel-loader/lib??ref--2-0!./node_modules/_@nuxt_components@2.1.8@@nuxt/components/dist/loader.js??ref--0-0!./node_modules/_vue-loader@15.9.7@vue-loader/lib??vue-loader-options!./components/BarScore.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
/* harmony default export */ var BarScorevue_type_script_lang_js_ = ({
  props: {
    index: {
      type: Number,
      default: 0
    },
    score: {
      type: Number,
      default: 0.5
    },
    size: {
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
      const splitPoint = 2.5;
      const max = 5;
      const minWidth = 25;

      if (this.score <= splitPoint) {
        return minWidth;
      } else {
        const v = this.score / max * 100;
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
// CONCATENATED MODULE: ./components/BarScore.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_BarScorevue_type_script_lang_js_ = (BarScorevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/_vue-loader@15.9.7@vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/BarScore.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(91)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_BarScorevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "41038052",
  "1512c905"
  
)

/* harmony default export */ var BarScore = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=_id.js.map