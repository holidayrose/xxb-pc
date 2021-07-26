exports.ids = [8,7];
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

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.7@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_@nuxt_components@2.1.8@@nuxt/components/dist/loader.js??ref--0-0!./node_modules/_vue-loader@15.9.7@vue-loader/lib??vue-loader-options!./components/compare/addPro.vue?vue&type=template&id=217091a0&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('model',{on:{"handleBannerPopHide":_vm.handlePopHide}},[_c('div',{staticClass:"add-product-wrap",attrs:{"slot":"content"},slot:"content"},[_c('h3',{staticClass:"add-product-title text-c"},[_vm._v("\n      添加更多产品\n    ")]),_vm._v(" "),_c('div',{staticClass:"search-box"},[_c('div',{staticClass:"search-input"},[_c('a-input-search',{staticClass:"input",attrs:{"placeholder":"搜索软件和服务"},model:{value:(_vm.keywords),callback:function ($$v) {_vm.keywords=$$v},expression:"keywords"}})],1),_vm._v(" "),_c('div',{staticClass:"search-result"})]),_vm._v(" "),_c('div',{staticClass:"recommend-box"},[_c('div',{staticClass:"recommend-title"},[_vm._v("\n        推荐产品\n      ")]),_vm._v(" "),_c('div',{staticClass:"recommend-list"},_vm._l((_vm.recommendProList),function(item,index){return _c('div',{key:index,staticClass:"recommend-item g-flex space-between m-b-10 pad-10"},[_c('div',{staticClass:"product-info g-flex a-center"},[_c('div',{staticClass:"logo m-r-10"},[_c('img',{attrs:{"src":"http://xuanxingbao.com/images/xxb_mark.png","alt":""}})]),_vm._v(" "),_c('div',{staticClass:"product-info"},[_c('h3',{staticClass:"product-name"},[_vm._v("\n                "+_vm._s(item.product_name)+"\n              ")]),_vm._v(" "),_c('div',{staticClass:"stars g-flex"},[_c('Star',{attrs:{"out-width":75,"out-height":15,"decimal":item.ztgsnum/5}}),_vm._v(" "),_c('span',{staticClass:"ant-rate-text"},[_vm._v(_vm._s(item.ztgsnum)+"分")])],1)])]),_vm._v(" "),_c('div',{staticClass:"base-btn add-btn",on:{"click":function($event){return _vm.add(item)}}},[_vm._v("\n            添加\n          ")])])}),0)])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/compare/addPro.vue?vue&type=template&id=217091a0&scoped=true&

// EXTERNAL MODULE: ./components/pop/model.vue + 4 modules
var model = __webpack_require__(44);

// EXTERNAL MODULE: ./components/common/starComp/StarZoom.vue + 4 modules
var StarZoom = __webpack_require__(172);

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.2.2@babel-loader/lib??ref--2-0!./node_modules/_@nuxt_components@2.1.8@@nuxt/components/dist/loader.js??ref--0-0!./node_modules/_vue-loader@15.9.7@vue-loader/lib??vue-loader-options!./components/compare/addPro.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var addProvue_type_script_lang_js_ = ({
  components: {
    model: model["default"],
    Star: StarZoom["default"]
  },
  props: {
    categoryId: {
      type: String,

      default() {
        return '';
      }

    },
    compareList: {
      type: Array,

      default() {
        return [];
      }

    }
  },

  data() {
    return {
      keywords: '',
      recommendProList: [],
      // 去掉已添加的产品的推荐产品列表
      initialList: [] // 推荐产品初始列表

    };
  },

  watch: {
    compareList(val) {
      this.recommendProList = this.initialList.filter(item => {
        return !this.compareList.some(ele => {
          return ele.product_id === item.product_id;
        });
      });
    }

  },

  mounted() {
    this.recommendProduct();
  },

  methods: {
    // 添加
    add(item) {
      this.$emit('addProduct', item);
    },

    handlePopHide() {
      this.$emit('handlePopHide');
    },

    // 某类别下的产品
    recommendProduct() {
      this.$requests.indexSelectCatePro({
        category_id: this.categoryId
      }).then(res => {
        if (res.status === 200 && res.data.result === 'success') {
          this.initialList = res.data.productlist;
          this.recommendProList = res.data.productlist.filter(item => {
            return !this.compareList.some(ele => {
              return ele.product_id === item.product_id;
            });
          });
        }
      });
    }

  }
});
// CONCATENATED MODULE: ./components/compare/addPro.vue?vue&type=script&lang=js&
 /* harmony default export */ var compare_addProvue_type_script_lang_js_ = (addProvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/_vue-loader@15.9.7@vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14);

// CONCATENATED MODULE: ./components/compare/addPro.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  compare_addProvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "217091a0",
  "04253f49"
  
)

/* harmony default export */ var addPro = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=compare-add-pro.js.map