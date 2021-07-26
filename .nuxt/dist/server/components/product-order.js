exports.ids = [23,7];
exports.modules = {

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.7@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_@nuxt_components@2.1.8@@nuxt/components/dist/loader.js??ref--0-0!./node_modules/_vue-loader@15.9.7@vue-loader/lib??vue-loader-options!./components/common/starComp/StarZoom.vue?vue&type=template&id=c9375fa6&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"star-wrap"}},[_vm._ssrNode("<div class=\"star-default\""+(_vm._ssrStyle(null,{ width: _vm.outWidth + 'px', height: _vm.outHeight + 'px' }, null))+"><div class=\"star-real\""+(_vm._ssrStyle(null,{ width: _vm.innerWidth + 'px', height: _vm.outHeight + 'px' }, null))+"></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/common/starComp/StarZoom.vue?vue&type=template&id=c9375fa6&

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
var componentNormalizer = __webpack_require__(14);

// CONCATENATED MODULE: ./components/common/starComp/StarZoom.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  starComp_StarZoomvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "a765bd56"
  
)

/* harmony default export */ var StarZoom = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.7@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_@nuxt_components@2.1.8@@nuxt/components/dist/loader.js??ref--0-0!./node_modules/_vue-loader@15.9.7@vue-loader/lib??vue-loader-options!./components/ProductOrder.vue?vue&type=template&id=b4dc77ae&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"rank-list-item"},[_vm._ssrNode("<div class=\"pro-img\">","</div>",[_c('nuxt-link',{attrs:{"target":"_blank","to":{name: 'product-detail-id',params: { id: _vm.info.product_id }}}},[_c('img',{attrs:{"src":"https://xuanxingbao.com/xxb_mark.png","alt":_vm.categoryName + (_vm.info.factory_short_name || _vm.info.product_name)}})])],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"pro-info\">","</div>",[_vm._ssrNode("<div class=\"pro-name\">","</div>",[_c('nuxt-link',{staticClass:"link",attrs:{"target":"_blank","to":{name: 'product-detail-id',params: { id: _vm.info.product_id }}}},[_vm._v("\n        "+_vm._s(_vm.info.product_name)+"\n      ")])],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"pro-count g-flex space-between\">","</div>",[(_vm.info.ztgsnum)?_vm._ssrNode("<div class=\"g-flex\">","</div>",[_vm._ssrNode("<span class=\"score-box\">"+_vm._ssrEscape(_vm._s(_vm.info.ztgsnum)+"分")+"</span> "),_c('Star',{attrs:{"out-width":100,"out-height":20,"decimal":_vm.info.ztgsnum/5}})],2):_vm._ssrNode(("<div>\n        暂时还没有人点评快来贡献您的专业见解吧！\n      </div>")),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"pro-right\">","</div>",[(_vm.info.yjznum > 0)?_c('nuxt-link',{staticStyle:{"color":"#222222"},attrs:{"target":"_blank","to":{name: 'product-detail-id',params: { id: _vm.info.product_id }}}},[_vm._v("\n          "+_vm._s(_vm.info.yjznum)+"条有价值点评\n        ")]):_c('div',{staticClass:"tab-btn"},[_vm._v("\n          马上去点评\n        ")])],1)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"pro-sub\">","</div>",[_vm._ssrNode("<div class=\"pro-left\">","</div>",[_vm._ssrNode(((_vm.info.productnum > 0)?("<div class=\"pro-desc\">"+_vm._ssrEscape("\n          共有"+_vm._s(_vm.info.productnum)+"条点评，经审核后，有价值点评"+_vm._s(_vm.info.yjznum > 0 ? _vm.info.yjznum : 0)+"条\n        ")+"</div>"):"<!---->")+" "),_vm._ssrNode("<div class=\"pro-compare\">","</div>",[_c('a-checkbox',{staticClass:"txt",attrs:{"id":_vm.info.product_id,"checked":_vm.checked,"disabled":_vm.disabled},on:{"change":_vm.onChange}},[_vm._v("\n            对比\n          ")])],1)],2),_vm._ssrNode(" <div class=\"pro-right\"><div class=\"tab-btn\">\n          请厂商联系我\n        </div></div>")],2)],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/ProductOrder.vue?vue&type=template&id=b4dc77ae&

// EXTERNAL MODULE: ./components/common/starComp/StarZoom.vue + 4 modules
var StarZoom = __webpack_require__(172);

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.2.2@babel-loader/lib??ref--2-0!./node_modules/_@nuxt_components@2.1.8@@nuxt/components/dist/loader.js??ref--0-0!./node_modules/_vue-loader@15.9.7@vue-loader/lib??vue-loader-options!./components/ProductOrder.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var ProductOrdervue_type_script_lang_js_ = ({
  name: 'ProductOrder',
  components: {
    Star: StarZoom["default"]
  },
  props: {
    disabled: {
      type: Boolean,

      default() {
        return false;
      }

    },
    checked: {
      type: Boolean,

      default() {
        return false;
      }

    },
    info: {
      type: Object,

      default() {
        return {};
      }

    },
    companyInfo: {
      type: Object,

      default() {
        return {};
      }

    },
    categoryId: {
      type: String,

      default() {
        return '';
      }

    },
    categoryName: {
      type: String,

      default() {
        return '';
      }

    }
  },
  methods: {
    contact() {
      this.$emit('formShow', this.info.qcid);
    },

    navigateToDetail(info) {
      let routeUrl = this.$router.resolve({
        name: 'product-detail-id',
        params: {
          id: info.product_id
        }
      });
      window.open(routeUrl.href, '_blank');
    },

    onChange(e) {
      if (e.target.checked) {
        // 添加对比
        this.$emit('addCompare', this.info);
      } else {
        // 取消对比
        this.$emit('cancelCompare', this.info);
      }
    }

  }
});
// CONCATENATED MODULE: ./components/ProductOrder.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_ProductOrdervue_type_script_lang_js_ = (ProductOrdervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/_vue-loader@15.9.7@vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14);

// CONCATENATED MODULE: ./components/ProductOrder.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ProductOrdervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "4b09b365"
  
)

/* harmony default export */ var ProductOrder = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=product-order.js.map