exports.ids = [40,6,7,10,11,12,13,18,23,24,26,27,29];
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

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.7@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_@nuxt_components@2.1.8@@nuxt/components/dist/loader.js??ref--0-0!./node_modules/_vue-loader@15.9.7@vue-loader/lib??vue-loader-options!./components/header/pHeader2.vue?vue&type=template&id=9715a7b0&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('a-layout-header',{staticClass:"global-header"},[_c('div',{staticClass:"g-wrapper g-flex space-between"},[_c('div',{staticClass:"logo-wrap"},[_c('nuxt-link',{attrs:{"to":"/"}},[_c('img',{staticClass:"logo",attrs:{"src":__webpack_require__(63),"alt":"?????????_???????????????????????????-ERP??????_BI_CRM??????_OA??????_???????????????_BPM??????_????????????..."}})]),_vm._v(" "),_c('strong',[_vm._v(_vm._s(_vm.slogan))])],1),_vm._v(" "),_c('div',{staticClass:"g-flex"},[_c('nav',{staticClass:"nav"},[_c('div',{staticClass:"link",on:{"click":_vm.handleBannerPopShow}},[_c('span',{staticClass:"icon review"}),_vm._v(" "),_c('span',[_vm._v("??????????????????")])]),_vm._v(" "),_c('nuxt-link',{staticClass:"link",attrs:{"to":"/all/","title":"????????????","target":"_blank"}},[_c('span',{staticClass:"icon cate"}),_vm._v(" "),_c('span',[_vm._v("????????????")])]),_vm._v(" "),_c('a',{staticClass:"link",attrs:{"href":"https://e.xuanxingbao.com/","title":"????????????","target":"_blank"}},[_c('span',{staticClass:"icon"}),_vm._v(" "),_c('span',{staticClass:"entry"},[_vm._v("????????????")])])],1),_vm._v(" "),(_vm.isShow)?_c('div',{staticClass:"search-box"},[_c('div',{staticClass:"head-search-input",class:{ focus: _vm.isFocus,search: _vm.isSearch }},[_c('a-input-search',{staticClass:"input",staticStyle:{"width":"300px"},attrs:{"placeholder":"??????????????????????????????????????????????????????"},on:{"search":_vm.onSearch,"change":_vm.onChange,"focus":_vm.onFocus,"blur":_vm.onBlur},model:{value:(_vm.keywords),callback:function ($$v) {_vm.keywords=$$v},expression:"keywords"}}),_vm._v(" "),_c('div',{staticClass:"result-wrap focus-result"},[_c('div',[_c('h3',{staticClass:"title"},[_vm._v("\n                ????????????\n              ")]),_vm._v(" "),_vm._l((_vm.hotSearchList),function(item){return _c('div',{key:item.ID,staticClass:"item"},[_c('div',{staticClass:"link",on:{"click":function($event){return _vm.handleKeyWordTagClick(item)}}},[_c('span',{staticClass:"name"},[_vm._v(_vm._s(item.names))]),_vm._v(" "),_c('span',{staticClass:"hot-icon"})])])})],2),_vm._v(" "),(_vm.historySearch)?_c('div',{staticStyle:{"margin-top":"10px"}},[_c('h3',{staticClass:"title g-flex space-between"},[_c('span',[_vm._v("????????????")]),_vm._v(" "),_c('span',{staticStyle:{"cursor":"pointer"},on:{"click":_vm.deleteHistorySearch}},[_c('a-icon',{attrs:{"type":"delete"}}),_vm._v("??????\n                ")],1)]),_vm._v(" "),_vm._l((_vm.historySearch),function(item){return _c('div',{key:item.ID,staticClass:"item"},[_c('div',{staticClass:"link",on:{"click":function($event){return _vm.handleKeyWordTagClick(item)}}},[_c('span',{staticClass:"name"},[_vm._v(_vm._s(item.names))]),_vm._v(" "),_c('span',{staticClass:"hot-icon"})])])})],2):_vm._e()]),_vm._v(" "),_c('div',{staticClass:"result-wrap search-result"},_vm._l((_vm.searchList),function(item){return _c('div',{key:item.ID,staticClass:"item"},[_c('div',{staticClass:"link",on:{"click":function($event){return _vm.handleKeyWordTagClick2(item)}}},[_c('span',{staticClass:"name"},[_vm._v(_vm._s(item.names))]),_vm._v(" "),_c('span',{staticStyle:{"color":"#666","font-size":"12px"}},[_vm._v(_vm._s(item.TYPE === '1' ? '??????' : '??????'))])])])}),0)],1)]):_vm._e()])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/header/pHeader2.vue?vue&type=template&id=9715a7b0&

// EXTERNAL MODULE: ./static/lib/storage.js
var storage = __webpack_require__(19);

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.2.2@babel-loader/lib??ref--2-0!./node_modules/_@nuxt_components@2.1.8@@nuxt/components/dist/loader.js??ref--0-0!./node_modules/_vue-loader@15.9.7@vue-loader/lib??vue-loader-options!./components/header/pHeader2.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var pHeader2vue_type_script_lang_js_ = ({
  props: {
    isShow: {
      type: Boolean,

      default() {
        return false;
      }

    }
  },

  data() {
    return {
      slogan: this.$configs.CONST.SLOGAN,
      keywords: '',
      hotSearchList: [],
      searchList: [],
      isFocus: false,
      isSearch: false,
      statusMapper: {
        product: 'haveProductReviews',
        category: 'haveCategoryInformation',
        fuzzy: 'fuzzyMatching',
        notFound: 'allWithout'
      },
      timer: null,
      historySearch: []
    };
  },

  methods: {
    handleBannerPopShow() {
      this.$emit('handleBannerPopShow');
    },

    async onSearch() {
      if (!this.keywords.trim()) {
        return false;
      } else {
        let res = await this.$requests.indexKeysSearch({
          KEY_INFO: this.keywords.trim()
        });

        if (res.status === 200 && res.data.result === 'success') {
          switch (res.data.searchStatus) {
            case this.statusMapper.category:
              {
                let routeUrl = this.$router.resolve({
                  name: 'product-rank-id',
                  params: {
                    id: res.data.CATEGORY_ID
                  }
                });
                window.open(routeUrl.href, '_blank');
                break;
              }

            case this.statusMapper.product:
              {
                let routeUrl = this.$router.resolve({
                  name: 'product-detail-id',
                  params: {
                    id: res.data.PRODUCT_ID
                  }
                });
                window.open(routeUrl.href, '_blank');
                break;
              }

            case this.statusMapper.fuzzy:
              {
                let routeUrl = this.$router.resolve({
                  name: 'result-status',
                  params: {
                    status: 'fuzzy'
                  },
                  query: {
                    keywords: this.keywords.trim()
                  }
                });
                window.open(routeUrl.href, '_blank');
                break;
              }

            case this.statusMapper.notFound:
              {
                let routeUrl = this.$router.resolve({
                  name: 'result-status',
                  params: {
                    status: 'notFound'
                  },
                  query: {
                    keywords: this.keywords.trim()
                  }
                });
                window.open(routeUrl.href, '_blank');
                break;
              }
          }
        }
      }
    },

    async onChange() {
      if (this.keywords.trim() === '') {
        this.isFocus = true;
        this.isSearch = false;
      } else {
        this.searchList = await this.searchAutoComplete();

        if (this.searchList) {
          this.isFocus = false;
          this.isSearch = true;
        } else {
          this.isFocus = false;
          this.isSearch = false;
        }
      }
    },

    async onFocus() {
      if (this.keywords.trim() === '') {
        this.getHistorySearch();
        this.isFocus = true;
        const data = {
          CUR_PAGE: 1
        };
        const res = await this.$requests.indexSearchHot(data);

        if (res.status === 200 && res.data.result === 'success') {
          this.hotSearchList = res.data.hotsearchlogObj;
        }
      }
    },

    onBlur() {
      this.timer = setTimeout(() => {
        this.isFocus = false;
      }, 300);
    },

    async searchAutoComplete() {
      let resList = [];
      const data = {
        KEY_INFO: this.keywords.trim()
      };
      const res = await this.$requests.indexSearchAutoComplete(data);

      if (res.status === 200 && res.data.result === 'success') {
        resList = res.data.productList;
      }

      return resList;
    },

    async handleKeyWordTagClick(obj) {
      // ????????????????????????
      let historySearch = storage["a" /* default */].get('set_history_search');

      if (historySearch) {
        let index = historySearch.findIndex(item => {
          return item.ID === obj.ID;
        });

        if (index !== -1) {
          historySearch.splice(index, 1);
        }

        historySearch.unshift(obj);
        storage["a" /* default */].set('set_history_search', historySearch);
      } else {
        let tmpArr = [];
        tmpArr.unshift(obj);
        storage["a" /* default */].set('set_history_search', tmpArr);
      }

      clearTimeout(this.timer);
      let res = await this.$requests.indexKeysSearch({
        KEY_INFO: obj.names.trim()
      });

      if (res.status === 200 && res.data.result === 'success') {
        switch (res.data.searchStatus) {
          case this.statusMapper.category:
            {
              let routeUrl = this.$router.resolve({
                name: 'company-rank-id',
                params: {
                  id: res.data.CATEGORY_ID
                }
              });
              window.open(routeUrl.href, '_blank');
              break;
            }

          case this.statusMapper.product:
            {
              let routeUrl = this.$router.resolve({
                name: 'product-detail-id',
                params: {
                  id: res.data.PRODUCT_ID
                }
              });
              window.open(routeUrl.href, '_blank');
              break;
            }

          case this.statusMapper.fuzzy:
            {
              let routeUrl = this.$router.resolve({
                name: 'result-status',
                params: {
                  status: 'fuzzy'
                },
                query: {
                  keywords: obj.names.trim()
                }
              });
              window.open(routeUrl.href, '_blank');
              break;
            }

          case this.statusMapper.notFound:
            {
              let routeUrl = this.$router.resolve({
                name: 'result-status',
                params: {
                  status: 'notFound'
                },
                query: {
                  keywords: obj.names.trim()
                }
              });
              window.open(routeUrl.href, '_blank');
              break;
            }
        }

        this.onBlur();
      }
    },

    handleKeyWordTagClick2(obj) {
      // ????????????????????????
      let historySearch = storage["a" /* default */].get('set_history_search');

      if (historySearch) {
        let index = historySearch.findIndex(item => {
          return item.ID === obj.ID;
        });

        if (index !== -1) {
          historySearch.splice(index, 1);
        }

        historySearch.unshift(obj);
        storage["a" /* default */].set('set_history_search', historySearch);
      } else {
        let tmpArr = [];
        tmpArr.unshift(obj);
        storage["a" /* default */].set('set_history_search', tmpArr);
      }

      if (obj.TYPE === '1') {
        let routeUrl = this.$router.resolve({
          name: 'product-detail-id',
          params: {
            id: obj.ID
          }
        });
        window.open(routeUrl.href, '_blank');
      } else {
        let routeUrl = this.$router.resolve({
          name: 'company-rank-id',
          params: {
            id: obj.ID
          }
        });
        window.open(routeUrl.href, '_blank');
      }

      this.onBlur();
    },

    // ???????????????????????????
    getHistorySearch() {
      this.historySearch = storage["a" /* default */].get('set_history_search');
    },

    // ?????????????????????????????????
    deleteHistorySearch() {
      storage["a" /* default */].remove('set_history_search');
      this.historySearch = [];
    }

  }
});
// CONCATENATED MODULE: ./components/header/pHeader2.vue?vue&type=script&lang=js&
 /* harmony default export */ var header_pHeader2vue_type_script_lang_js_ = (pHeader2vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/_vue-loader@15.9.7@vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14);

// CONCATENATED MODULE: ./components/header/pHeader2.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  header_pHeader2vue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "3b4daa6e"
  
)

/* harmony default export */ var pHeader2 = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.7@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_@nuxt_components@2.1.8@@nuxt/components/dist/loader.js??ref--0-0!./node_modules/_vue-loader@15.9.7@vue-loader/lib??vue-loader-options!./components/Header2.vue?vue&type=template&id=0b16849e&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"header-wrap"},[(_vm.isFixed)?_c('a-anchor',[_c('pHeader',{staticClass:"display-pc",attrs:{"is-show":_vm.isShow},on:{"handleBannerPopShow":_vm.handleBannerPopShow}})],1):_c('pHeader',{staticClass:"display-pc",attrs:{"is-show":_vm.isShow},on:{"handleBannerPopShow":_vm.handleBannerPopShow}}),_vm._ssrNode(" "),_c('mHeader',{staticClass:"display-m"})],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Header2.vue?vue&type=template&id=0b16849e&

// EXTERNAL MODULE: ./components/header/pHeader2.vue + 4 modules
var pHeader2 = __webpack_require__(173);

// EXTERNAL MODULE: ./components/header/mHeader.vue + 4 modules
var mHeader = __webpack_require__(42);

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.2.2@babel-loader/lib??ref--2-0!./node_modules/_@nuxt_components@2.1.8@@nuxt/components/dist/loader.js??ref--0-0!./node_modules/_vue-loader@15.9.7@vue-loader/lib??vue-loader-options!./components/Header2.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var Header2vue_type_script_lang_js_ = ({
  name: 'Header',
  components: {
    pHeader: pHeader2["default"],
    mHeader: mHeader["default"]
  },
  props: {
    isShow: {
      type: Boolean,

      default() {
        return false;
      }

    },
    isFixed: {
      type: Boolean,

      default() {
        return true;
      }

    }
  },
  methods: {
    handleBannerPopShow() {
      this.$emit('handleBannerPopShow');
    }

  }
});
// CONCATENATED MODULE: ./components/Header2.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Header2vue_type_script_lang_js_ = (Header2vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/_vue-loader@15.9.7@vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14);

// CONCATENATED MODULE: ./components/Header2.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Header2vue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "d34d3c22"
  
)

/* harmony default export */ var Header2 = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 175:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/qrcode.5d928fb.png";

/***/ }),

/***/ 176:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/wx-yh.bffc413.jpg";

/***/ }),

/***/ 177:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/qrcode_dy.e488e10.jpg";

/***/ }),

/***/ 178:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/qcrode.414b83a.jpg";

/***/ }),

/***/ 179:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/qrcode_fw.8427576.jpg";

/***/ }),

/***/ 180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.7@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_@nuxt_components@2.1.8@@nuxt/components/dist/loader.js??ref--0-0!./node_modules/_vue-loader@15.9.7@vue-loader/lib??vue-loader-options!./components/Footer.vue?vue&type=template&id=243480b1&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('a-layout-footer',{staticClass:"footer"},[_c('a-row',[_c('a-col',[_c('a-row',{staticClass:"g-wrapper",attrs:{"getter":"16"}},[_c('a-col',{staticClass:"gutter-row footerInfo",attrs:{"span":"6"}},[_c('a',{staticClass:"ca_text",attrs:{"href":"/all/","title":"?????????"}},[_vm._v("????????????")]),_vm._v(" "),_c('p',{staticClass:"qc_text"},[_vm._v("\n            ?????????\n          ")]),_vm._v(" "),_c('img',{staticClass:"qcrodeImg",attrs:{"src":__webpack_require__(176),"alt":""}})]),_vm._v(" "),_vm._l((_vm.cateInfo),function(item,index){return _c('a-col',{key:index,staticClass:"gutter-row footerInfo",attrs:{"span":"6"}},[_c('a',{staticClass:"ca_text",attrs:{"href":item.path,"title":item.text,"rel":"nofollow"}},[_vm._v(_vm._s(item.text))]),_vm._v(" "),_c('p',{staticClass:"qc_text"},[_vm._v("\n            "+_vm._s(item.title)+"\n          ")]),_vm._v(" "),_c('img',{staticClass:"qcrodeImg",attrs:{"src":item.img,"alt":""}})])})],2)],1),_vm._v(" "),_c('a-col',{staticClass:"beian"},[_c('div',{staticClass:"site-width"},[_c('p',[_vm._v("?? 2021 ????????????All Rights Reserved.")]),_vm._v(" "),_c('p',[_c('a',{attrs:{"href":"#"}},[_vm._v("???ICP???14045422???-2 ????????????????????????????????????")])])]),_vm._v(" "),_c('div',{staticClass:"site-width"},[_c('p',[_vm._v("??????????????????????????????????????????435????????????436")])])])],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Footer.vue?vue&type=template&id=243480b1&

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
        text: '????????????',
        title: '??????????????????',
        img: __webpack_require__(177),
        path: 'http://old.xuanxingbao.com/webPC/about'
      }, {
        text: '????????????',
        title: '??????????????????',
        img: __webpack_require__(178),
        path: 'http://old.xuanxingbao.com/webPC/contact-list.html'
      }, {
        text: '????????????',
        title: '??????????????????',
        img: __webpack_require__(179),
        path: 'http://old.xuanxingbao.com/webPC/participate.html'
      }]
    };
  }

});
// CONCATENATED MODULE: ./components/Footer.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Footervue_type_script_lang_js_ = (Footervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/_vue-loader@15.9.7@vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14);

// CONCATENATED MODULE: ./components/Footer.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Footervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "8b47c43e"
  
)

/* harmony default export */ var Footer = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 181:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.7@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_@nuxt_components@2.1.8@@nuxt/components/dist/loader.js??ref--0-0!./node_modules/_vue-loader@15.9.7@vue-loader/lib??vue-loader-options!./components/rightNav/index.vue?vue&type=template&id=a0a0a8b0&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"right-nav-wrap"},[_vm._t("default")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/rightNav/index.vue?vue&type=template&id=a0a0a8b0&

// EXTERNAL MODULE: ./node_modules/_vue-loader@15.9.7@vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14);

// CONCATENATED MODULE: ./components/rightNav/index.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "00eb8f43"
  
)

/* harmony default export */ var rightNav = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.7@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_@nuxt_components@2.1.8@@nuxt/components/dist/loader.js??ref--0-0!./node_modules/_vue-loader@15.9.7@vue-loader/lib??vue-loader-options!./components/rightNav/qrcode.vue?vue&type=template&id=19c773fa&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"qrcode"},[_vm._ssrNode("<img"+(_vm._ssrAttr("src",__webpack_require__(175)))+" alt>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/rightNav/qrcode.vue?vue&type=template&id=19c773fa&

// EXTERNAL MODULE: ./node_modules/_vue-loader@15.9.7@vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14);

// CONCATENATED MODULE: ./components/rightNav/qrcode.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "cc73a526"
  
)

/* harmony default export */ var qrcode = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 183:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(189);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(9).default
module.exports.__inject__ = function (context) {
  add("b70710a8", content, true, context)
};

/***/ }),

/***/ 184:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.7@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_@nuxt_components@2.1.8@@nuxt/components/dist/loader.js??ref--0-0!./node_modules/_vue-loader@15.9.7@vue-loader/lib??vue-loader-options!./components/hasNoData/noData.vue?vue&type=template&id=97a5666c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"no-data-wrap"},[_vm._ssrNode("<div class=\"txt-wrap\">","</div>",[_vm._t("txt")],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/hasNoData/noData.vue?vue&type=template&id=97a5666c&

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
var componentNormalizer = __webpack_require__(14);

// CONCATENATED MODULE: ./components/hasNoData/noData.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  hasNoData_noDatavue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "fff5f0b0"
  
)

/* harmony default export */ var noData = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 185:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.7@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_@nuxt_components@2.1.8@@nuxt/components/dist/loader.js??ref--0-0!./node_modules/_vue-loader@15.9.7@vue-loader/lib??vue-loader-options!./components/common/breadCrumb/index.vue?vue&type=template&id=260c0ec4&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('a-row',[_c('a-col',[_c('div',{staticClass:"g-wrapper breadcrumb"},[_c('a-breadcrumb',[_vm._t("default")],2)],1)])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/common/breadCrumb/index.vue?vue&type=template&id=260c0ec4&

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.2.2@babel-loader/lib??ref--2-0!./node_modules/_@nuxt_components@2.1.8@@nuxt/components/dist/loader.js??ref--0-0!./node_modules/_vue-loader@15.9.7@vue-loader/lib??vue-loader-options!./components/common/breadCrumb/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var breadCrumbvue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./components/common/breadCrumb/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var common_breadCrumbvue_type_script_lang_js_ = (breadCrumbvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/_vue-loader@15.9.7@vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14);

// CONCATENATED MODULE: ./components/common/breadCrumb/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  common_breadCrumbvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "478c2c98"
  
)

/* harmony default export */ var breadCrumb = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 187:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.7@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_@nuxt_components@2.1.8@@nuxt/components/dist/loader.js??ref--0-0!./node_modules/_vue-loader@15.9.7@vue-loader/lib??vue-loader-options!./components/Slider.vue?vue&type=template&id=187e41cc&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"slider-wrap"},[_vm._t("report-txt"),_vm._ssrNode(" "),_vm._ssrNode("<div>","</div>",[_vm._ssrNode("<h2 class=\"slider-title\">","</h2>",[_vm._t("slider-title")],2),_vm._ssrNode(" "),_vm._ssrNode("<div>","</div>",[_vm._t("slider-nav-bar")],2)],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Slider.vue?vue&type=template&id=187e41cc&

// EXTERNAL MODULE: ./node_modules/_vue-loader@15.9.7@vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14);

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

/***/ 188:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_style_index_0_id_9eb1fe9e_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(183);
/* harmony import */ var _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_style_index_0_id_9eb1fe9e_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_style_index_0_id_9eb1fe9e_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_style_index_0_id_9eb1fe9e_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_style_index_0_id_9eb1fe9e_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 189:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(8);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".view[data-v-9eb1fe9e]{width:100%;display:flex;justify-content:flex-start}.view .range[data-v-9eb1fe9e]{width:10%;position:relative;color:#fff;background-color:#92b2f1}.view .range span[data-v-9eb1fe9e]{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%)}.view.c1 .range[data-v-9eb1fe9e]{background-color:#f55b53}.view.c1 .score-box[data-v-9eb1fe9e]{background-color:#f55c53!important}.view.c2 .range[data-v-9eb1fe9e]{background-color:#f2ab38}.view.c2 .score-box[data-v-9eb1fe9e]{background-color:#f2ab38!important}.view.c3 .range[data-v-9eb1fe9e]{background-color:#5fcd81}.view.c3 .score-box[data-v-9eb1fe9e]{background-color:#5fcd81!important}.view .info[data-v-9eb1fe9e]{width:90%;padding:10px 20px}.view .info .title[data-v-9eb1fe9e]{font-size:17px;font-weight:700;margin-bottom:10px}.view .info .comment[data-v-9eb1fe9e]{color:#555}.view .info .score[data-v-9eb1fe9e]{display:flex;flex-direction:row;justify-content:space-between}.view .info .score .score-box[data-v-9eb1fe9e]{background-color:#90b2f1;color:#fff;padding:2px 4px;border-radius:4px}.view .info .bar-box[data-v-9eb1fe9e]{width:218px;height:13px;margin:10px 0;background-color:#e6e6e6;border-radius:50px}.view .info .bar-box .bar[data-v-9eb1fe9e]{height:13px;display:flex;justify-content:space-between;align-items:center;width:0;box-sizing:border-box;padding:0 10px;border-radius:50px;transition:width .8s ease-in-out}.view .info .bar-box .bar.s1[data-v-9eb1fe9e]{background:#f55a53;background:linear-gradient(90deg,#f55a53,#eb8a5d)}.view .info .bar-box .bar.s2[data-v-9eb1fe9e]{background:#f2a937;background:linear-gradient(90deg,#f2a937,#ebd458)}.view .info .bar-box .bar.s3[data-v-9eb1fe9e]{background:#5ecd80;background:linear-gradient(90deg,#5ecd80,#80cca5)}.view .info .bar-box .bar.s4[data-v-9eb1fe9e]{background:#37a2f1;background:linear-gradient(90deg,#8fb1f0,#a3baf9)}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.7@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_@nuxt_components@2.1.8@@nuxt/components/dist/loader.js??ref--0-0!./node_modules/_vue-loader@15.9.7@vue-loader/lib??vue-loader-options!./components/rank/list.vue?vue&type=template&id=9eb1fe9e&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"view",class:_vm.index < 3 ? 'c'+ (_vm.index+1) : 'c4'},[_vm._ssrNode("<div class=\"range\" data-v-9eb1fe9e><span data-v-9eb1fe9e>"+_vm._ssrEscape("\n      "+_vm._s((_vm.index+1))+"\n    ")+"</span></div> "),_vm._ssrNode("<div class=\"info\" data-v-9eb1fe9e>","</div>",[_vm._ssrNode("<div class=\"title\" data-v-9eb1fe9e>","</div>",[_c('nuxt-link',{staticClass:"link",attrs:{"target":"_blank","to":{name: 'reputation-id',params: {id: _vm.categoryId},query: {factory_id: _vm.item.qcid}}}},[_vm._v("\n        "+_vm._s(_vm.item.factory_short_name)+"\n      ")])],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"score\" data-v-9eb1fe9e>","</div>",[_vm._ssrNode("<div class=\"score-box\" data-v-9eb1fe9e>"+_vm._ssrEscape("\n        "+_vm._s(_vm.item.avgNum)+"???\n      ")+"</div> "),_c('nuxt-link',{staticClass:"comment",attrs:{"target":"_blank","to":{name: 'reputation-id',params: {id: _vm.categoryId},query: {factory_id: _vm.item.qcid}}}},[_c('span',[_vm._v("\n          "+_vm._s(_vm.item.dpnum)+"???\n        ")]),_vm._v(" "),_c('span',[_vm._v("\n          ???????????????\n        ")])])],2),_vm._ssrNode(" <div class=\"bar-box\" data-v-9eb1fe9e><div"+(_vm._ssrClass("bar",_vm.index < 3 ? 's'+ (_vm.index+1) : 's4'))+" style=\"width:50%\" data-v-9eb1fe9e></div></div>")],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/rank/list.vue?vue&type=template&id=9eb1fe9e&scoped=true&

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

    },
    categoryId: {
      type: String,

      default() {
        return '';
      }

    }
  }
});
// CONCATENATED MODULE: ./components/rank/list.vue?vue&type=script&lang=js&
 /* harmony default export */ var rank_listvue_type_script_lang_js_ = (listvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/_vue-loader@15.9.7@vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14);

// CONCATENATED MODULE: ./components/rank/list.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(188)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  rank_listvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "9eb1fe9e",
  "59ab67d0"
  
)

/* harmony default export */ var list = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.7@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_@nuxt_components@2.1.8@@nuxt/components/dist/loader.js??ref--0-0!./node_modules/_vue-loader@15.9.7@vue-loader/lib??vue-loader-options!./components/productDetail/contact.vue?vue&type=template&id=71f5bff8&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.formShow),expression:"formShow"}],staticClass:"contact-wrap"},[_vm._ssrNode("<div class=\"model\"></div> "),_vm._ssrNode("<div class=\"form\">","</div>",[_vm._ssrNode("<div class=\"note\"><div class=\"h2\">"+_vm._ssrEscape("\n        "+_vm._s(_vm.$configs.APPLY.FORM.ONE)+"\n      ")+"</div> <div>"+_vm._ssrEscape(_vm._s(_vm.$configs.APPLY.FORM.TWO))+"</div></div> "),_vm._ssrNode("<div class=\"close-btn\">","</div>",[_c('a-icon',{staticStyle:{"font-size":"24px"},attrs:{"type":"close"}})],1),_vm._ssrNode(" "),_c('a-form',{attrs:{"form":_vm.form},on:{"submit":_vm.handleSubmit}},[_c('a-form-item',{attrs:{"label":"??????"}},[_c('a-input',{directives:[{name:"decorator",rawName:"v-decorator",value:([
            'nickname',
            {
              rules: [{ required: true, min: 2, max: 8, message: '??????????????????????????????!', whitespace: true }],
            } ]),expression:"[\n            'nickname',\n            {\n              rules: [{ required: true, min: 2, max: 8, message: '??????????????????????????????!', whitespace: true }],\n            },\n          ]"}],attrs:{"placeholder":"??????2-8?????????"}})],1),_vm._v(" "),_c('a-form-item',{attrs:{"label":"??????"}},[_c('a-input',{directives:[{name:"decorator",rawName:"v-decorator",value:([
            'company',
            {
              rules: [{ required: true, message: '???????????????!', whitespace: true }],
            } ]),expression:"[\n            'company',\n            {\n              rules: [{ required: true, message: '???????????????!', whitespace: true }],\n            },\n          ]"}],attrs:{"placeholder":"?????????????????????"}})],1),_vm._v(" "),_c('a-form-item',{attrs:{"label":"??????"}},[_c('a-input',{directives:[{name:"decorator",rawName:"v-decorator",value:([
            'title',
            {
              rules: [{ required: true, message: '???????????????!', whitespace: true }],
            } ]),expression:"[\n            'title',\n            {\n              rules: [{ required: true, message: '???????????????!', whitespace: true }],\n            },\n          ]"}],attrs:{"placeholder":"?????????????????????"}})],1),_vm._v(" "),_c('a-form-item',{attrs:{"label":"?????????"}},[_c('a-input',{directives:[{name:"decorator",rawName:"v-decorator",value:([
            'phone',
            {
              rules: [{ required: true, pattern: '^[1]([3-9])[0-9]{9}$',message: '????????????????????????!', whitespace: true }],
            } ]),expression:"[\n            'phone',\n            {\n              rules: [{ required: true, pattern: '^[1]([3-9])[0-9]{9}$',message: '????????????????????????!', whitespace: true }],\n            },\n          ]"}],attrs:{"placeholder":"?????????11????????????"}})],1),_vm._v(" "),_c('a-form-item',{attrs:{"label":"??????"}},[_c('a-input',{directives:[{name:"decorator",rawName:"v-decorator",value:([
            'email',
            {
              rules: [
                {
                  type: 'email',
                  message: '?????????????????????!',
                },
                {
                  required: true,
                  message: '???????????????!',
                } ],
            } ]),expression:"[\n            'email',\n            {\n              rules: [\n                {\n                  type: 'email',\n                  message: '?????????????????????!',\n                },\n                {\n                  required: true,\n                  message: '???????????????!',\n                },\n              ],\n            },\n          ]"}],attrs:{"placeholder":"?????????????????????"}})],1),_vm._v(" "),_c('a-form-item',{staticStyle:{"text-align":"center"}},[_c('a-button',{attrs:{"type":"primary","html-type":"submit"}},[_vm._v("\n          ??????\n        ")])],1)],1)],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/productDetail/contact.vue?vue&type=template&id=71f5bff8&

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
var componentNormalizer = __webpack_require__(14);

// CONCATENATED MODULE: ./components/productDetail/contact.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  productDetail_contactvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "16c24a2e"
  
)

/* harmony default export */ var contact = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 205:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/px_1.84fa148.png";

/***/ }),

/***/ 206:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/px_3.677e736.png";

/***/ }),

/***/ 207:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/px_2.460331d.png";

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.7@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_@nuxt_components@2.1.8@@nuxt/components/dist/loader.js??ref--0-0!./node_modules/_vue-loader@15.9.7@vue-loader/lib??vue-loader-options!./components/ProductOrder.vue?vue&type=template&id=b4dc77ae&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"rank-list-item"},[_vm._ssrNode("<div class=\"pro-img\">","</div>",[_c('nuxt-link',{attrs:{"target":"_blank","to":{name: 'product-detail-id',params: { id: _vm.info.product_id }}}},[_c('img',{attrs:{"src":"https://xuanxingbao.com/xxb_mark.png","alt":_vm.categoryName + (_vm.info.factory_short_name || _vm.info.product_name)}})])],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"pro-info\">","</div>",[_vm._ssrNode("<div class=\"pro-name\">","</div>",[_c('nuxt-link',{staticClass:"link",attrs:{"target":"_blank","to":{name: 'product-detail-id',params: { id: _vm.info.product_id }}}},[_vm._v("\n        "+_vm._s(_vm.info.product_name)+"\n      ")])],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"pro-count g-flex space-between\">","</div>",[(_vm.info.ztgsnum)?_vm._ssrNode("<div class=\"g-flex\">","</div>",[_vm._ssrNode("<span class=\"score-box\">"+_vm._ssrEscape(_vm._s(_vm.info.ztgsnum)+"???")+"</span> "),_c('Star',{attrs:{"out-width":100,"out-height":20,"decimal":_vm.info.ztgsnum/5}})],2):_vm._ssrNode(("<div>\n        ????????????????????????????????????????????????????????????\n      </div>")),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"pro-right\">","</div>",[(_vm.info.yjznum > 0)?_c('nuxt-link',{staticStyle:{"color":"#222222"},attrs:{"target":"_blank","to":{name: 'product-detail-id',params: { id: _vm.info.product_id }}}},[_vm._v("\n          "+_vm._s(_vm.info.yjznum)+"??????????????????\n        ")]):_c('div',{staticClass:"tab-btn"},[_vm._v("\n          ???????????????\n        ")])],1)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"pro-sub\">","</div>",[_vm._ssrNode("<div class=\"pro-left\">","</div>",[_vm._ssrNode(((_vm.info.productnum > 0)?("<div class=\"pro-desc\">"+_vm._ssrEscape("\n          ??????"+_vm._s(_vm.info.productnum)+"??????????????????????????????????????????"+_vm._s(_vm.info.yjznum > 0 ? _vm.info.yjznum : 0)+"???\n        ")+"</div>"):"<!---->")+" "),_vm._ssrNode("<div class=\"pro-compare\">","</div>",[_c('a-checkbox',{staticClass:"txt",attrs:{"id":_vm.info.product_id,"checked":_vm.checked,"disabled":_vm.disabled},on:{"change":_vm.onChange}},[_vm._v("\n            ??????\n          ")])],1)],2),_vm._ssrNode(" <div class=\"pro-right\"><div class=\"tab-btn\">\n          ??????????????????\n        </div></div>")],2)],2)],2)}
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
        // ????????????
        this.$emit('addCompare', this.info);
      } else {
        // ????????????
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

/***/ }),

/***/ 248:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.7@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_@nuxt_components@2.1.8@@nuxt/components/dist/loader.js??ref--0-0!./node_modules/_vue-loader@15.9.7@vue-loader/lib??vue-loader-options!./pages/product/rank/_id.vue?vue&type=template&id=3a8dfd80&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"main pro-rank"},[_vm._ssrNode("<h1 class=\"heading-hide\">"+_vm._ssrEscape("\n    "+_vm._s(_vm.categoryName)+"????????????_"+_vm._s(_vm.categoryName)+"????????????_"+_vm._s(_vm.categoryName)+"????????????????????????\n  ")+"</h1> "),_c('a-anchor',{staticClass:"default"},[_c('Header2',{attrs:{"is-show":true},on:{"handleBannerPopShow":_vm.handleBannerPopShow}})],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"container-index\">","</div>",[_c('breadCrumb',[_c('a-breadcrumb-item',[_c('a',{attrs:{"href":"/"}},[_vm._v("??????")])]),_vm._v(" "),_c('a-breadcrumb-item',[_vm._v(_vm._s(_vm.categoryName)+"????????????")])],1),_vm._ssrNode(" "),_c('a-row',[_c('a-col',{attrs:{"md":"24"}},[_c('a-row',{staticClass:"g-wrapper",attrs:{"gutter":[32, 32]}},[_c('a-col',{attrs:{"span":"8","md":8}},[_c('Slider',[_c('div',{staticClass:"report-wrap",attrs:{"slot":"report-txt"},slot:"report-txt"},[_c('div',{staticClass:"txt1"},[_c('h2',[_vm._v(_vm._s(_vm.categoryName)+"??????")])]),_vm._v(" "),_c('div',{staticClass:"txt2"},[_vm._v("\n                  ??????????????????\n                ")])]),_vm._v(" "),_c('div',{staticClass:"g-flex space-between",attrs:{"slot":"slider-title"},on:{"click":_vm.navigateToRank},slot:"slider-title"},[_c('span',[_vm._v(_vm._s(_vm.categoryName)+"??????????????????")]),_vm._v(" "),_c('span',{staticStyle:{"font-size":"14px","color":"#a9a9a9","cursor":"pointer"}},[_vm._v("????????????")])]),_vm._v(" "),(_vm.hotCompanyList.length)?_c('div',{staticClass:"slider-nav-bar",attrs:{"slot":"slider-nav-bar"},slot:"slider-nav-bar"},[_c('h3',[_vm._v("????????????")]),_vm._v(" "),_vm._l((_vm.hotCompanyList),function(item,index){return _c('div',{key:index,staticClass:"view-wrap"},[_c('rankListItem',{attrs:{"item":item,"index":index,"category-id":_vm.categoryId}})],1)})],2):_vm._e(),_vm._v(" "),(_vm.challengerList.length)?_c('div',{staticClass:"slider-nav-bar",attrs:{"slot":"slider-nav-bar"},slot:"slider-nav-bar"},[_c('h3',[_vm._v("?????????")]),_vm._v(" "),_vm._l((_vm.challengerList),function(item,index){return _c('div',{key:index,staticClass:"view-wrap",attrs:{"target":"_blank","to":{name: 'reputation-id',params: {id: _vm.categoryId},query: {factory_id: item.qcid}}}},[_c('rankListItem',{attrs:{"item":item,"index":index,"category-id":_vm.categoryId}})],1)})],2):_vm._e(),_vm._v(" "),(_vm.noReviewList.length)?_c('div',{staticClass:"slider-nav-bar",attrs:{"slot":"slider-nav-bar"},slot:"slider-nav-bar"},[_c('h3',[_vm._v("?????????????????????")]),_vm._v(" "),_vm._l((_vm.noReviewList),function(item,index){return _c('div',{key:index,staticClass:"view-wrap"},[_c('div',{staticClass:"view"},[_c('div',{staticClass:"g-flex space-between pad-20",staticStyle:{"width":"100%"}},[_c('nuxt-link',{staticStyle:{"color":"#222222"},attrs:{"target":"_blank","to":{name: 'reputation-id',params: {id: _vm.categoryId},query: {factory_id: item.qcid}}}},[_vm._v("\n                        "+_vm._s(item.factory_short_name || item.qcname)+"\n                      ")])],1)])])})],2):_vm._e()])],1),_vm._v(" "),_c('a-col',{attrs:{"span":"16"}},[_c('a-row',{staticClass:"grey"},[_c('a-col',{attrs:{"span":"24"}},[_c('h2',[_vm._v("\n                  "+_vm._s(_vm.categoryName)+"?????? ??????????????????\n                ")]),_vm._v(" "),(_vm.productList.length)?_c('div',[_c('div',{staticClass:"sort-item-wrap g-flex"},_vm._l((_vm.sortTabs),function(tab,index){return _c('div',{key:index,staticClass:"sort-item",class:tab.query === _vm.orderType ? 'on' : '',on:{"click":function($event){$event.preventDefault();$event.stopPropagation();return _vm.handleSortTabClick(index, tab.query)}}},[(tab.query === _vm.orderType)?[_c('img',{staticClass:"icon",attrs:{"src":__webpack_require__(205),"alt":""}}),_vm._v(" "),_c('img',{staticClass:"corner",attrs:{"src":__webpack_require__(206),"alt":""}})]:[_c('img',{staticClass:"icon",attrs:{"src":__webpack_require__(207),"alt":""}})],_vm._v("\n                      "+_vm._s(tab.name)+"\n                    ")],2)}),0)]):_vm._e(),_vm._v(" "),_c('div',{staticClass:"rank-box"},[_c('div',{staticClass:"rank-list"},[(_vm.productList.length)?_c('div',_vm._l((_vm.productList),function(item){return _c('productOrder',{key:item.product_id,attrs:{"info":item,"category-name":_vm.categoryName,"category-id":_vm.categoryId,"checked":_vm.isInArray(item.product_id, _vm.compareList),"disabled":_vm.isDisabled(item.product_id, _vm.compareList)},on:{"formShow":_vm.formHandleShow,"addCompare":_vm.addCompare,"cancelCompare":_vm.cancelCompare}})}),1):_c('div',{staticStyle:{"width":"100%","height":"400px"}},[_c('no-data',[_c('div',{staticStyle:{"font-size":"14px"},attrs:{"slot":"txt"},slot:"txt"},[_vm._v("\n                          ??????????????????~\n                        ")])])],1)])]),_vm._v(" "),(_vm.compareList.length)?_c('a-affix',{attrs:{"offset-bottom":0}},[_c('div',{staticClass:"compare-table g-flex a-center pad-20"},[_c('div',{staticClass:"clear-btn",on:{"click":_vm.clearAll}},[_vm._v("\n                      ????????????\n                    ")]),_vm._v(" "),_c('div',{staticClass:"img-group g-flex a-center"},_vm._l((_vm.compareList),function(item,index){return _c('div',{key:index,staticClass:"img-item"},[_c('i',{staticClass:"close-btn",on:{"click":function($event){return _vm.cancelCompare(item)}}}),_vm._v(" "),_c('img',{attrs:{"src":"https://xuanxingbao.com/xxb_mark.png","alt":""}})])}),0),_vm._v(" "),_c('a-button',{staticClass:"compare-btn",attrs:{"type":"danger","disabled":_vm.compareList.length < 2},on:{"click":_vm.goToCompare}},[_vm._v("\n                      ????????????\n                    ")])],1)]):_vm._e()],1)],1)],1)],1)],1)],1)],2),_vm._ssrNode(" "),_c('contact',{ref:"child",attrs:{"form-show":_vm.formShow},on:{"formHide":_vm.formHandleHide,"submit":_vm.submitForm}}),_vm._ssrNode(" "),_c('banner-pop',{directives:[{name:"show",rawName:"v-show",value:(_vm.bannerPopShow),expression:"bannerPopShow"}],on:{"handleBannerPopHide":_vm.handleBannerPopHide}}),_vm._ssrNode(" "),_c('rightNav',[_c('qrcode')],1),_vm._ssrNode(" "),_c('Footer')],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/product/rank/_id.vue?vue&type=template&id=3a8dfd80&

// EXTERNAL MODULE: ./components/ProductOrder.vue + 4 modules
var ProductOrder = __webpack_require__(222);

// EXTERNAL MODULE: ./components/productDetail/contact.vue + 4 modules
var contact = __webpack_require__(196);

// EXTERNAL MODULE: ./components/hasNoData/noData.vue + 4 modules
var noData = __webpack_require__(184);

// EXTERNAL MODULE: ./components/rank/list.vue + 4 modules
var list = __webpack_require__(192);

// EXTERNAL MODULE: ./components/rightNav/index.vue + 2 modules
var rightNav = __webpack_require__(181);

// EXTERNAL MODULE: ./components/rightNav/qrcode.vue + 2 modules
var qrcode = __webpack_require__(182);

// EXTERNAL MODULE: ./components/pop/banner.vue + 4 modules
var banner = __webpack_require__(43);

// EXTERNAL MODULE: ./components/common/breadCrumb/index.vue + 4 modules
var breadCrumb = __webpack_require__(185);

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.2.2@babel-loader/lib??ref--2-0!./node_modules/_@nuxt_components@2.1.8@@nuxt/components/dist/loader.js??ref--0-0!./node_modules/_vue-loader@15.9.7@vue-loader/lib??vue-loader-options!./pages/product/rank/_id.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//








/* harmony default export */ var _idvue_type_script_lang_js_ = ({
  components: {
    productOrder: ProductOrder["default"],
    contact: contact["default"],
    noData: noData["default"],
    rankListItem: list["default"],
    rightNav: rightNav["default"],
    qrcode: qrcode["default"],
    bannerPop: banner["default"],
    breadCrumb: breadCrumb["default"]
  },
  watchQuery: ['category_name'],

  async asyncData({
    app,
    params
  }) {
    let sortOrder = 0;
    let categoryId = params.id; // ??????????????????????????????

    let categoryInfoRes = await app.$requests.publicCategoryInfo({
      category_id: categoryId
    });
    let categoryInfo = categoryInfoRes.status === 200 && categoryInfoRes.data.result === 'success' ? categoryInfoRes.data.categoryInfoObj : {}; // ??????????????????(???????????????????????????????????????)

    let hotCompanyListRes = await app.$requests.categoryHotCompany({
      ORDER_TYPE: sortOrder,
      // 0???????????????1???????????????
      CATEGORY_ID: categoryId
    });
    let hotCompanyList = hotCompanyListRes.status === 200 && hotCompanyListRes.data.result === 'success' ? hotCompanyListRes.data.factoryQcList : [];
    let challengerRes = await app.$requests.categoryChallenger({
      ORDER_TYPE: sortOrder,
      // 0???????????????1???????????????
      CATEGORY_ID: categoryId
    });
    let challengerList = challengerRes.status === 200 && challengerRes.data.result === 'success' ? challengerRes.data.factoryQcList : [];
    let noReviewRes = await app.$requests.categoryNoComment({
      CATEGORY_ID: categoryId
    });
    let noReviewList = noReviewRes.status === 200 && noReviewRes.data.result === 'success' ? noReviewRes.data.notScoreList : []; // ???????????????????????????

    let data = {
      category_id: categoryId,
      orders: 0
    }; // ????????????????????????

    let listRes = await app.$requests.indexSelectCatePro(data);
    let productList = listRes.status === 200 && listRes.data.result === 'success' ? listRes.data.productlist : [];
    return {
      sortTabs: [{
        name: '??????????????????',
        query: 'reviewNum'
      }, {
        name: '??????????????????',
        query: 'avg'
      }],
      orderType: 'reviewNum',
      // ??????????????????
      productList,
      categoryName: categoryInfo.CNAME,
      categoryId,
      hotCompanyList,
      // ??????
      challengerList,
      // ?????????
      noReviewList,
      // ??????????????????
      formShow: false,
      companyInfo: {},
      bannerPopShow: false,
      // ??????????????????
      compareList: [] // ????????????

    };
  },

  methods: {
    // ????????????????????????
    goToCompare() {
      this.$router.push({
        name: 'compare',
        params: {
          categoryId: this.categoryId,
          compareList: this.compareList
        }
      });
    },

    // ????????????
    addCompare(item) {
      // console.log(item)
      this.compareList.push({
        // category_id: item.category_id,
        product_id: item.product_id // product_name: item.product_name

      });
      console.log(this.compareList);
    },

    // ????????????
    cancelCompare(item) {
      let index = this.indexInArray(item.product_id, this.compareList);
      this.compareList.splice(index, 1);
      console.log(this.compareList);
    },

    // ????????????
    clearAll() {
      this.compareList = [];
    },

    indexInArray(value, array) {
      return array.findIndex(item => {
        return item.product_id === value;
      });
    },

    isInArray(value, array) {
      if (this.indexInArray(value, array) !== -1) {
        return true;
      } else {
        return false;
      }
    },

    isDisabled(value, array) {
      // ???????????????????????????????????????????????????
      if (array.length >= 4 && this.indexInArray(value, array) !== -1) {
        return false;
      } else if (array.length < 4) {
        return false;
      } else {
        return true;
      }
    },

    handleBannerPopShow() {
      this.bannerPopShow = true;
    },

    handleBannerPopHide() {
      this.bannerPopShow = false;
    },

    // ??????????????????
    navigateToRank() {
      let routeUrl = this.$router.resolve({
        name: 'company-rank-id',
        params: {
          id: this.categoryId
        }
      });
      window.open(routeUrl.href, '_blank');
    },

    // form????????????
    async formHandleShow(factoryId) {
      this.formShow = true; // ?????????????????????????????????

      let data = {
        CATEGORY_ID: this.categoryId,
        FACTORY_QCID: factoryId
      };
      let listInfoRes = await this.$requests.publicCompanyDetail(data);

      if (listInfoRes.status === 200 && listInfoRes.data.result === 'success') {
        this.companyInfo.categoryObj = listInfoRes.data.categoryObj;
        this.companyInfo.factoryQcObj = listInfoRes.data.factoryQcObj;
        this.companyInfo.factoryQcScoreObj = listInfoRes.data.factoryQcScoreObj;
      }

      console.log('????????????:', this.companyInfo);
    },

    // form????????????
    formHandleHide() {
      this.formShow = false;
    },

    // ????????????
    async submitForm(data) {
      data.CATEGORY_ID = this.companyInfo.categoryObj.CID || this.categoryId;
      data.CATEGORY_NAME = this.companyInfo.categoryObj.CNAME || this.categoryName;
      data.FACTORY_ID = this.companyInfo.factoryQcScoreObj.QCID || this.companyInfo.factoryQcScoreObj.FACTORY_SHORT_ID;
      data.FACTORY_NAME = this.companyInfo.factoryQcScoreObj.QCNAME || this.companyInfo.factoryQcScoreObj.FACTORY_SHORT_NAME;
      data.USER_ID = '';
      let applyRes = await this.$requests.productApply(data);

      if (applyRes.status === 200 && applyRes.data.result === 'success') {
        this.$message.success('???????????????????????????????????????????????????!');
        this.$refs.child.clear();
        this.formShow = false;
      } else {
        this.$message.error('??????????????????????????????!');
        this.formShow = false;
      }
    },

    async handleSortTabClick(index, query) {
      if (this.orderType === query) {
        return false;
      } else {
        this.orderType = query;
        let data = {
          category_id: this.categoryId,
          orders: this.orderType === 'reviewNum' ? 0 : 1
        }; // ????????????????????????

        let listRes = await this.$requests.indexSelectCatePro(data);
        this.productList = listRes.status === 200 && listRes.data.result === 'success' ? listRes.data.productlist : [];
      }
    }

  },

  head() {
    return {
      title: this.categoryName + '????????????_' + this.categoryName + '????????????_' + this.categoryName + '?????????????????????????????????',
      meta: [{
        hid: 'description',
        name: 'description',
        content: '?????????' + this.categoryName + '???????????????' + this.categoryName + '??????????????????' + this.categoryName + '???????????????????????????????????????, ??????????????????????????????'
      }, {
        hid: 'keywords',
        name: 'keywords',
        content: this.categoryName + '??????_' + this.categoryName + '??????????????????'
      }]
    };
  }

});
// CONCATENATED MODULE: ./pages/product/rank/_id.vue?vue&type=script&lang=js&
 /* harmony default export */ var rank_idvue_type_script_lang_js_ = (_idvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/_vue-loader@15.9.7@vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14);

// CONCATENATED MODULE: ./pages/product/rank/_id.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  rank_idvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "1ea85e02"
  
)

/* harmony default export */ var _id = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Header2: __webpack_require__(174).default,Slider: __webpack_require__(187).default,Footer: __webpack_require__(180).default})


/***/ })

};;
//# sourceMappingURL=_id.js.map