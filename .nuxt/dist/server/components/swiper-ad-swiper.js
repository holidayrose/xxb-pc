exports.ids = [28];
exports.modules = {

/***/ 187:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/banner_4.20c163e.jpg";

/***/ }),

/***/ 188:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/banner_3.e5e0b87.jpg";

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.7@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_@nuxt_components@2.1.8@@nuxt/components/dist/loader.js??ref--0-0!./node_modules/_vue-loader@15.9.7@vue-loader/lib??vue-loader-options!./components/swiper/adSwiper.vue?vue&type=template&id=59ef0506&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"swiper",rawName:"v-swiper:mySwiper",value:(_vm.swiperOption),expression:"swiperOption",arg:"mySwiper"}],staticClass:"adBanner",on:{"click":_vm.handleBannerPopShow}},[_vm._ssrNode("<div class=\"swiper-wrap swiper-wrapper g-flex\"><div data-swiper-autoplay=\"5000\" class=\"swiper-item swiper-slide\"><img"+(_vm._ssrAttr("src",__webpack_require__(187)))+" alt> <div class=\"txt text-c\">"+((_vm.recommendCate)?("<p>"+_vm._ssrEscape("\n          "+_vm._s(_vm.recommendCate)+"软件\n        ")+"</p>"):("<p>\n          选型宝\n        </p>"))+" <p>诚邀您的点评！</p></div></div> <div data-swiper-autoplay=\"5000\" class=\"swiper-item swiper-slide\"><img"+(_vm._ssrAttr("src",__webpack_require__(188)))+" alt></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/swiper/adSwiper.vue?vue&type=template&id=59ef0506&

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.2.2@babel-loader/lib??ref--2-0!./node_modules/_@nuxt_components@2.1.8@@nuxt/components/dist/loader.js??ref--0-0!./node_modules/_vue-loader@15.9.7@vue-loader/lib??vue-loader-options!./components/swiper/adSwiper.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var adSwipervue_type_script_lang_js_ = ({
  props: {
    recommendCate: {
      type: String,

      default() {
        return '';
      }

    }
  },

  data() {
    return {
      dots: false,
      swiperOption: {
        loop: true,
        slidesPerView: 1,
        speed: 1000,
        autoplay: true
      }
    };
  },

  methods: {
    handleBannerPopShow() {
      this.$emit('handleBannerPopShow');
    }

  }
});
// CONCATENATED MODULE: ./components/swiper/adSwiper.vue?vue&type=script&lang=js&
 /* harmony default export */ var swiper_adSwipervue_type_script_lang_js_ = (adSwipervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/_vue-loader@15.9.7@vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(13);

// CONCATENATED MODULE: ./components/swiper/adSwiper.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  swiper_adSwipervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "c60a4dae"
  
)

/* harmony default export */ var adSwiper = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=swiper-ad-swiper.js.map