exports.ids = [1];
exports.modules = {

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.7@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_@nuxt_components@2.1.8@@nuxt/components/dist/loader.js??ref--0-0!./node_modules/_vue-loader@15.9.7@vue-loader/lib??vue-loader-options!./components/AutoPlay.vue?vue&type=template&id=3c940b6d&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"swiper",rawName:"v-swiper:mySwiper",value:(_vm.swiperOption),expression:"swiperOption",arg:"mySwiper"}],staticClass:"txt-banner"},[_vm._ssrNode("<div class=\"swiper-wrapper g-flex\">"+(_vm._ssrList((_vm.bannerTxt),function(item,index){return ("<div data-swiper-autoplay=\"5000\" class=\"swiper-slide text-c\"><h3 class=\"swiper-item\"><span><i class=\"fire\"></i>"+_vm._ssrEscape(_vm._s(item))+"<i class=\"finger\"></i></span></h3></div>")}))+"</div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/AutoPlay.vue?vue&type=template&id=3c940b6d&

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.2.2@babel-loader/lib??ref--2-0!./node_modules/_@nuxt_components@2.1.8@@nuxt/components/dist/loader.js??ref--0-0!./node_modules/_vue-loader@15.9.7@vue-loader/lib??vue-loader-options!./components/AutoPlay.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var AutoPlayvue_type_script_lang_js_ = ({
  props: {
    bannerTxt: {
      type: Array,

      default() {
        return [];
      }

    }
  },

  data() {
    return {
      swiperOption: {
        loop: true,
        slidesPerView: 1,
        speed: 1000,
        autoplay: true,
        noSwiping: true,
        autoplayDisableOnInteraction: false
      }
    };
  },

  methods: {
    handleBannerPopShow() {
      this.$emit('handleBannerPopShow');
    }

  }
});
// CONCATENATED MODULE: ./components/AutoPlay.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_AutoPlayvue_type_script_lang_js_ = (AutoPlayvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/_vue-loader@15.9.7@vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(13);

// CONCATENATED MODULE: ./components/AutoPlay.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_AutoPlayvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "5efc8e49"
  
)

/* harmony default export */ var AutoPlay = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=auto-play.js.map