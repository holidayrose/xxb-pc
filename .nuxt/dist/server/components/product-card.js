exports.ids = [15,7];
exports.modules = {

/***/ 150:
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
var componentNormalizer = __webpack_require__(13);

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

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.7@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_@nuxt_components@2.1.8@@nuxt/components/dist/loader.js??ref--0-0!./node_modules/_vue-loader@15.9.7@vue-loader/lib??vue-loader-options!./components/ProductCard.vue?vue&type=template&id=108fec5b&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('a-card',{staticClass:"product-card"},[_c('h3',{staticClass:"title"},[_vm._v("\n    "+_vm._s(_vm.product.product_name)+"\n  ")]),_vm._v(" "),_c('div',{staticClass:"stars g-flex"},[_c('Star',{attrs:{"out-width":100,"out-height":20,"decimal":_vm.decimal}}),_vm._v(" "),_c('span',{staticClass:"ant-rate-text"},[_vm._v(_vm._s(_vm.product.ztgsnum ? _vm.product.ztgsnum : '暂无评')+"分")])],1),_vm._v(" "),_c('div',{staticClass:"img-wrap"},[_c('img',{attrs:{"src":"http://xuanxingbao.com/images/xxb_mark.png","alt":_vm.product.factory_short_name + _vm.categoryName}})])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/ProductCard.vue?vue&type=template&id=108fec5b&

// EXTERNAL MODULE: ./components/common/starComp/StarZoom.vue + 4 modules
var StarZoom = __webpack_require__(150);

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
var componentNormalizer = __webpack_require__(13);

// CONCATENATED MODULE: ./components/ProductCard.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ProductCardvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "4d586d6e"
  
)

/* harmony default export */ var ProductCard = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=product-card.js.map