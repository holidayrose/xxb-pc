exports.ids = [29,7,23];
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

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.7@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_@nuxt_components@2.1.8@@nuxt/components/dist/loader.js??ref--0-0!./node_modules/_vue-loader@15.9.7@vue-loader/lib??vue-loader-options!./components/Review.vue?vue&type=template&id=072b9b54&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"c-card review-c-card"},[_c('nuxt-link',{staticClass:"top",attrs:{"to":{name:'productDetail-id',params: {id:_vm.info.product_id}},"target":"_blank"}},[_c('div',{staticClass:"author"},[_c('img',{directives:[{name:"lazy",rawName:"v-lazy",value:(_vm.info.userimage),expression:"info.userimage"}],staticClass:"g-avatar",attrs:{"alt":""}}),_vm._v(" "),_c('div',{staticClass:"info"},[_c('strong',{staticClass:"name"},[_vm._v(_vm._s(_vm.info.realname))]),_vm._v(" "),_c('p',{staticClass:"title"},[_c('span',[_vm._v(_vm._s(_vm.info.company))]),_vm._v(" "),_c('span',[_vm._v(_vm._s(_vm.info.office))])])])]),_vm._v(" "),_c('div',{staticClass:"t-box"},[_c('div',{staticClass:"benchmark"},[_c('div',{staticClass:"context g-flex"},[_vm._v("\n          对 "),_c('span',[_vm._v(_vm._s(_vm.info.productname))]),_vm._v(" 的点评\n        ")]),_vm._v(" "),_c('div',{staticClass:"g-flex space-between"},[_c('div',{staticClass:"star g-flex"},[_c('div',{staticClass:"rank"},[_vm._v("\n              "+_vm._s(_vm.info.ztgsnum.toFixed(1))+"\n              "),_c('span',[_vm._v("分")])]),_vm._v(" "),_c('Star',{attrs:{"out-width":75,"out-height":15,"decimal":_vm.decimal}})],1),_vm._v(" "),_c('div',{staticClass:"date"},[_vm._v("\n            "+_vm._s(_vm.info.lastoperationtime)+"\n          ")])])]),_vm._v(" "),_c('div',{staticClass:"detail"},[_c('p',[_vm._v("【优点】"+_vm._s(_vm.info.advantages))]),_vm._v(" "),_c('p',[_vm._v("【缺点】"+_vm._s(_vm.info.disadvantages))])]),_vm._v(" "),_c('span',{staticClass:"quota up"}),_vm._v(" "),_c('span',{staticClass:"quota down"})])])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Review.vue?vue&type=template&id=072b9b54&

// EXTERNAL MODULE: ./components/common/starComp/StarZoom.vue + 4 modules
var StarZoom = __webpack_require__(150);

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

  }
});
// CONCATENATED MODULE: ./components/Review.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Reviewvue_type_script_lang_js_ = (Reviewvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/_vue-loader@15.9.7@vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(13);

// CONCATENATED MODULE: ./components/Review.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Reviewvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "16a98dc4"
  
)

/* harmony default export */ var Review = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.7@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_@nuxt_components@2.1.8@@nuxt/components/dist/loader.js??ref--0-0!./node_modules/_vue-loader@15.9.7@vue-loader/lib??vue-loader-options!./components/swiper/reviewSwiper.vue?vue&type=template&id=6f11b0b3&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"swiper",rawName:"v-swiper:mySwiper",value:(_vm.swiperOption),expression:"swiperOption",arg:"mySwiper"}],staticClass:"review-swiper-wrap"},[_vm._ssrNode("<div class=\"swiper-wrapper g-flex\">","</div>",_vm._l((_vm.list),function(item,index){return _vm._ssrNode("<div data-swiper-autoplay=\"5000\" class=\"swiper-slide\">","</div>",[_c('Review',{attrs:{"info":item}})],1)}),0)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/swiper/reviewSwiper.vue?vue&type=template&id=6f11b0b3&

// EXTERNAL MODULE: ./components/Review.vue + 4 modules
var Review = __webpack_require__(178);

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
      dots: false,
      swiperOption: {
        loop: true,
        slidesPerView: 3,
        speed: 1000,
        autoplay: true,
        spaceBetween: 16,
        noSwiping: true,
        autoplayDisableOnInteraction: false
      }
    };
  }

});
// CONCATENATED MODULE: ./components/swiper/reviewSwiper.vue?vue&type=script&lang=js&
 /* harmony default export */ var swiper_reviewSwipervue_type_script_lang_js_ = (reviewSwipervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/_vue-loader@15.9.7@vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(13);

// CONCATENATED MODULE: ./components/swiper/reviewSwiper.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  swiper_reviewSwipervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "18fb69c4"
  
)

/* harmony default export */ var reviewSwiper = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Review: __webpack_require__(178).default})


/***/ })

};;
//# sourceMappingURL=swiper-review-swiper.js.map