exports.ids = [39,2,6,7,10,11,12,13,18,19,21,24,26,27,29];
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

/***/ 186:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(194);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(9).default
module.exports.__inject__ = function (context) {
  add("e2592f90", content, true, context)
};

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

/***/ 190:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return handleAvatar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return timestamp2date; });
/* unused harmony export validate */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return paramsToString; });
function formatNumber(n) {
  const str = n.toString();
  return str[1] ? str : `0${str}`;
}

function handleAvatar(attrName, item) {
  const defaultAvatar = '/static/images/avatar.jpg';

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
 * ???????????????
 * @param {*} form ??????????????????
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
        require: '?????????????????????!',
        min: '??????????????????????????????!',
        max: '??????????????????????????????!'
      }
    },
    NICKNAME: {
      rules: {
        required: true,
        min: 2,
        max: 8
      },
      messages: {
        require: '?????????????????????!',
        min: '??????????????????????????????!',
        max: '??????????????????????????????!'
      }
    },
    COMPANY: {
      rules: {
        required: true
      },
      messages: {
        require: '???????????????!'
      }
    },
    POSITION: {
      rules: {
        required: true
      },
      messages: {
        require: '???????????????!'
      }
    },
    PHONE: {
      rules: {
        required: true,
        mobile: true
      },
      messages: {
        require: '??????????????????!',
        mobile: '???????????????????????????!'
      }
    },
    USER_EMAIL: {
      rules: {
        required: true,
        email: true
      },
      messages: {
        require: '???????????????!',
        email: '???????????????????????????!'
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
function paramsToString(obj) {
  let str = '"[';
  obj.forEach((item, index, obj) => {
    if (index < obj.length - 1) {
      str += item.product_id + ',';
    } else {
      str += item.product_id + ']"';
    }
  });
  return str;
}

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

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_BarScore_vue_vue_type_style_index_0_id_41038052_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(186);
/* harmony import */ var _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_BarScore_vue_vue_type_style_index_0_id_41038052_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_BarScore_vue_vue_type_style_index_0_id_41038052_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_BarScore_vue_vue_type_style_index_0_id_41038052_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_BarScore_vue_vue_type_style_index_0_id_41038052_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 194:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(8);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".bar-box[data-v-41038052]{width:100%;max-width:50vw;background-color:#e6e6e6;height:15px;border-radius:20px;overflow:hidden}.bar-box.small[data-v-41038052]{max-width:140px}.bar-box .bar[data-v-41038052]{height:15px;width:0;border-radius:20px;transition:width .8s ease-in-out;padding:0 10px}.bar-box .bar.c1[data-v-41038052]{background:#ff4a49;background:linear-gradient(90deg,#ff4a49,#fc8450)}.bar-box .bar.c2[data-v-41038052]{background:#ffa602;background:linear-gradient(90deg,#ffa602,#f1d335)}.bar-box .bar.c3[data-v-41038052]{background:#01d078;background:linear-gradient(90deg,#01d078,#63cea2)}.bar-box .bar.c4[data-v-41038052]{background:#8c89c2;background:linear-gradient(90deg,#8c89c2,#afb5f3)}.bar-box .bar.c5[data-v-41038052]{background:#afb5f3;background:linear-gradient(90deg,#afb5f3,#9eb9ff)}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


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

/***/ 197:
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
var componentNormalizer = __webpack_require__(14);

// CONCATENATED MODULE: ./components/BarScore.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(193)
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

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.7@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_@nuxt_components@2.1.8@@nuxt/components/dist/loader.js??ref--0-0!./node_modules/_vue-loader@15.9.7@vue-loader/lib??vue-loader-options!./components/productDetail/feature.vue?vue&type=template&id=b8a99226&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"feature"},[_vm._ssrNode("<div class=\"feature-item\">","</div>",[_vm._ssrNode("<h3 class=\"title\">\n      ??????\n    </h3> "),_c('a-row',{staticClass:"list-wrap g-flex"},[_c('a-col',{staticClass:"list-item",attrs:{"span":"8"}},[_c('a-icon',{attrs:{"type":"check-circle","theme":"twoTone","two-tone-color":"#52c41a"}}),_vm._v(" "),_c('span',[_vm._v("????????????")])],1),_vm._v(" "),_c('a-col',{staticClass:"list-item",attrs:{"span":"8"}},[_c('a-icon',{attrs:{"type":"check-circle","theme":"twoTone","two-tone-color":"#52c41a"}}),_vm._v(" "),_c('span',[_vm._v("????????????")])],1)],1)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"feature-item\">","</div>",[_vm._ssrNode("<h3 class=\"title\">\n      ????????????\n    </h3> "),_c('a-row',{staticClass:"list-wrap g-flex"},[_c('a-col',{staticClass:"list-item",attrs:{"span":"8"}},[_c('a-icon',{attrs:{"type":"check-circle","theme":"twoTone","two-tone-color":"#52c41a"}}),_vm._v(" "),_c('span',[_vm._v("????????????")])],1),_vm._v(" "),_c('a-col',{staticClass:"list-item",attrs:{"span":"8"}},[_c('a-icon',{attrs:{"type":"check-circle","theme":"twoTone","two-tone-color":"#52c41a"}}),_vm._v(" "),_c('span',[_vm._v("???????????????")])],1)],1)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"feature-item\">","</div>",[_vm._ssrNode("<h3 class=\"title\">\n      ??????\n    </h3> "),_c('a-row',{staticClass:"list-wrap g-flex",attrs:{"justify":"start"}},[_c('a-col',{staticClass:"list-item",attrs:{"span":"8"}},[_c('a-icon',{attrs:{"type":"check-circle","theme":"twoTone","two-tone-color":"#52c41a"}}),_vm._v(" "),_c('span',[_vm._v("??????????????????")])],1),_vm._v(" "),_c('a-col',{staticClass:"list-item",attrs:{"span":"8"}},[_c('a-icon',{attrs:{"type":"check-circle","theme":"twoTone","two-tone-color":"#52c41a"}}),_vm._v(" "),_c('span',[_vm._v("?????????")])],1),_vm._v(" "),_c('a-col',{staticClass:"list-item",attrs:{"span":"8"}},[_c('a-icon',{attrs:{"type":"check-circle","theme":"twoTone","two-tone-color":"#52c41a"}}),_vm._v(" "),_c('span',[_vm._v("??????????????????")])],1),_vm._v(" "),_c('a-col',{staticClass:"list-item",attrs:{"span":"8"}},[_c('a-icon',{attrs:{"type":"check-circle","theme":"twoTone","two-tone-color":"#52c41a"}}),_vm._v(" "),_c('span',[_vm._v("??????????????????")])],1)],1)],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/productDetail/feature.vue?vue&type=template&id=b8a99226&

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
var componentNormalizer = __webpack_require__(14);

// CONCATENATED MODULE: ./components/productDetail/feature.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  productDetail_featurevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "044b73f8"
  
)

/* harmony default export */ var feature = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.7@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_@nuxt_components@2.1.8@@nuxt/components/dist/loader.js??ref--0-0!./node_modules/_vue-loader@15.9.7@vue-loader/lib??vue-loader-options!./components/productDetail/reviews.vue?vue&type=template&id=7faaa2ae&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"panel"},[_c('a-row',[_c('a-col',{attrs:{"lg":12,"md":12,"sm":24}},[_c('h3',{staticClass:"title"},[_vm._v("\n        ???"+_vm._s(_vm.productDetailObj.productKbObj.dpnum)+"?????????\n      ")]),_vm._v(" "),_c('div',{staticClass:"content"},_vm._l((_vm.productDetailObj.reviewArr),function(item,index){return _c('div',{key:index,staticClass:"item g-flex"},[_c('div',{staticClass:"col col-1 "},[_c('span',{staticClass:"spe"},[_vm._v(_vm._s(item.branchnum))]),_vm._v("?????????\n          ")]),_vm._v(" "),_c('div',{staticClass:"col col-2"},[_vm._v("\n            "+_vm._s(item.levelTxt)+"\n          ")]),_vm._v(" "),_c('div',{staticClass:"col col-3"},[_c('Star',{attrs:{"out-width":100,"out-height":20,"decimal":(5-index)/5}})],1)])}),0)]),_vm._v(" "),_c('a-col',{attrs:{"lg":12,"md":12,"sm":24}},[_c('h3',{staticClass:"title"},[_vm._v("\n        ????????????????????????\n      ")]),_vm._v(" "),_c('div',{staticClass:"content earmarked"},_vm._l((_vm.productDetailObj.earmarked),function(item,index){return _c('div',{key:index,staticClass:"item g-flex"},[_c('div',{staticClass:"col col-1",staticStyle:{"width":"160px"}},[_vm._v("\n            "+_vm._s(item.text)+"\n          ")]),_vm._v(" "),_c('div',{staticClass:"col col-4"},[_c('bar',{attrs:{"score":item.levelAvgNum,"index":index + 1}})],1),_vm._v(" "),_c('div',{staticClass:"col col-3"},[_vm._v("\n            "+_vm._s(item.levelAvgNum)+"???\n          ")])])}),0)])],1),_vm._ssrNode(" "),_c('a-row',{attrs:{"id":"all-reviews"}},[_c('a-col',[_c('div',{staticClass:"tops-list"},[_c('span',{staticClass:"tops-item",class:_vm.analysisDimensionId === null?'on':'',staticStyle:{"margin-right":"0"},on:{"click":_vm.handleGetAllReview}},[_vm._v("????????????")]),_vm._v(" "),_vm._l((_vm.tabsList),function(item){return _c('span',{key:item.id,staticClass:"tops-item",class:item.dimension_id === _vm.analysisDimensionId ? 'on' : '',on:{"click":function($event){return _vm.changeTags(item)}}},[_vm._v(_vm._s(item.title)+"("+_vm._s(item.num)+")")])})],2),_vm._v(" "),(_vm.allReviewsShow)?_c('div',{staticClass:"comment-list"},[_vm._l((_vm.reviewsList),function(item,index){return _c('div',{key:index,staticClass:"comment-item"},[_c('div',{staticClass:"comment-info"},[_c('div',{staticClass:"g-flex"},[_c('div',{staticClass:"head-img"},[_c('img',{attrs:{"src":item.userheadimages,"alt":"","width":"100%"}})]),_vm._v(" "),_c('div',{staticClass:"info"},[_c('div',{staticClass:"name"},[_c('strong',[_vm._v(_vm._s(item.realname))]),_vm._v(" ??? "),_c('strong',[_vm._v(_vm._s(_vm.productDetailObj.productObj.NAME))]),_vm._v(" ?????????\n                ")]),_vm._v(" "),_c('div',{staticClass:"title"},[_vm._v("\n                  "+_vm._s(item.company)+" "+_vm._s(item.office)+"\n                ")]),_vm._v(" "),_c('div',{staticClass:"count g-flex"},[_c('span',[_vm._v(_vm._s(item.ztgsnum)+"???")]),_vm._v(" "),_c('Star',{attrs:{"out-width":100,"out-height":20,"decimal":item.ztgsnum/5}})],1)])]),_vm._v(" "),_c('div',{staticClass:"publish-time"},[_vm._v("\n              "+_vm._s(item.operaTime)+"\n            ")])]),_vm._v(" "),_c('div',{staticClass:"comment-content"},[_c('p',[_vm._v("????????????"+_vm._s(item.advantages))]),_vm._v(" "),_c('p',[_vm._v("????????????"+_vm._s(item.disadvantages))])]),_vm._v(" "),_c('div',{staticClass:"g-flex icon-list-wrap"},[_c('div',{staticClass:"icon-item"},[_c('a-icon',{attrs:{"type":"message"}}),_vm._v(_vm._s(item.commentnum)+"\n            ")],1),_vm._v(" "),_c('div',{staticClass:"icon-item"},[_c('a-icon',{attrs:{"type":"like"}}),_vm._v(_vm._s(item.praisenum)+"\n            ")],1)])])}),_vm._v(" "),_c('div',{staticClass:"m-t-20 m-b-20"},[_c('a-pagination',{attrs:{"total":_vm.allReviewTotalNumber},on:{"change":_vm.totalReviewsChange},model:{value:(_vm.allReviewCurPage),callback:function ($$v) {_vm.allReviewCurPage=$$v},expression:"allReviewCurPage"}})],1)],2):_vm._e(),_vm._v(" "),(_vm.partReviewsShow)?_c('div',{staticClass:"comment-list"},[_c('div',{staticClass:"vs-wrap"},[_c('div',{staticClass:"round good"},[_vm._v("\n            ???\n          ")]),_vm._v(" "),_c('div',{staticClass:"number-bar"},[_c('div',{staticClass:"t-box"},[_c('span',{staticClass:"pros"},[_vm._v(_vm._s(_vm.advantageLen)+"?????????")]),_vm._v(" "),_c('span',{staticClass:"cons"},[_vm._v(_vm._s(_vm.disadvantageLen)+"?????????")])]),_vm._v(" "),_c('div',{staticClass:"b-box"},[_c('div',{staticClass:"bar pros",style:({width: _vm.advantageLen/_vm.totalReviews*100 + '%'})}),_vm._v(" "),_c('div',{staticClass:"bar cons",style:({width: _vm.disadvantageLen/_vm.totalReviews*100 + '%'})})]),_vm._v(" "),_c('div',{staticStyle:{"text-align":"center"}},[_vm._v("\n              ???"+_vm._s(_vm.totalReviews)+"?????????\n            ")])]),_vm._v(" "),_c('div',{staticClass:"round bad"},[_vm._v("\n            ??????\n          ")])]),_vm._v(" "),(_vm.advantageLen !== 0)?_c('div',{staticClass:"advantage-wrap"},[_c('div',{staticClass:"area-title"},[_vm._v("\n            "+_vm._s(_vm.advantageLen)+"???????????????????????????\n          ")]),_vm._v(" "),_c('div',{staticClass:"advantage-list-wrap"},_vm._l((_vm.advantageReviews),function(item,index){return _c('div',{key:index,staticClass:"comment-item"},[_c('div',{staticClass:"comment-info"},[_c('div',{staticClass:"g-flex"},[_c('div',{staticClass:"head-img"},[_c('img',{attrs:{"src":item.userheadimages,"alt":"","width":"100%"}})]),_vm._v(" "),_c('div',{staticClass:"info"},[_c('div',{staticClass:"name"},[_c('strong',[_vm._v(_vm._s(item.realname))]),_vm._v(" ??? "),_c('strong',[_vm._v(_vm._s(_vm.productDetailObj.productObj.NAME))]),_vm._v(" ?????????\n                    ")]),_vm._v(" "),_c('div',{staticClass:"title"},[_vm._v("\n                      "+_vm._s(item.company)+" "+_vm._s(item.office)+"\n                    ")]),_vm._v(" "),_c('div',{staticClass:"count g-flex"},[_c('span',[_vm._v(_vm._s(item.ztgsnum)+"???")]),_vm._v(" "),_c('Star',{attrs:{"out-width":100,"out-height":20,"decimal":item.ztgsnum/5}})],1)])]),_vm._v(" "),_c('div',{staticClass:"publish-time"},[_vm._v("\n                  "+_vm._s(item.operaTime)+"\n                ")])]),_vm._v(" "),_c('div',{staticClass:"comment-content"},[_c('p',[_vm._v(_vm._s(item.advantages))])]),_vm._v(" "),_c('div',{staticClass:"g-flex icon-list-wrap"},[_c('div',{staticClass:"icon-item"},[_c('a-icon',{attrs:{"type":"message"}}),_vm._v(_vm._s(item.commentnum)+"\n                ")],1),_vm._v(" "),_c('div',{staticClass:"icon-item"},[_c('a-icon',{attrs:{"type":"like"}}),_vm._v(_vm._s(item.praisenum)+"\n                ")],1)])])}),0),_vm._v(" "),_c('div',{staticClass:"m-t-20 m-b-20",attrs:{"id":"bad-reviews"}},[_c('a-pagination',{attrs:{"total":_vm.advantageReviewsTotalNumber},on:{"change":_vm.advantageReviewsChange},model:{value:(_vm.advantageReviewsCurPage),callback:function ($$v) {_vm.advantageReviewsCurPage=$$v},expression:"advantageReviewsCurPage"}})],1)]):_vm._e(),_vm._v(" "),(_vm.disadvantageLen !== 0)?_c('div',{staticClass:"disadvantage-wrap"},[_c('div',{staticClass:"area-title"},[_vm._v("\n            "+_vm._s(_vm.disadvantageLen)+"??????????????????????????????\n          ")]),_vm._v(" "),_c('div',{staticClass:"disadvantage-list-wrap"},_vm._l((_vm.disadvantageReviews),function(item,index){return _c('div',{key:index,staticClass:"comment-item"},[_c('div',{staticClass:"comment-info"},[_c('div',{staticClass:"g-flex"},[_c('div',{staticClass:"head-img"},[_c('img',{attrs:{"src":item.userheadimages,"alt":"","width":"100%"}})]),_vm._v(" "),_c('div',{staticClass:"info"},[_c('div',{staticClass:"name"},[_c('strong',[_vm._v(_vm._s(item.realname))]),_vm._v(" ??? "),_c('strong',[_vm._v(_vm._s(_vm.productDetailObj.productObj.NAME))]),_vm._v(" ?????????\n                    ")]),_vm._v(" "),_c('div',{staticClass:"title"},[_vm._v("\n                      "+_vm._s(item.company)+" "+_vm._s(item.office)+"\n                    ")]),_vm._v(" "),_c('div',{staticClass:"count g-flex"},[_c('span',[_vm._v(_vm._s(item.ztgsnum)+"???")]),_vm._v(" "),_c('Star',{attrs:{"out-width":100,"out-height":20,"decimal":item.ztgsnum/5}})],1)])]),_vm._v(" "),_c('div',{staticClass:"publish-time"},[_vm._v("\n                  "+_vm._s(item.operaTime)+"\n                ")])]),_vm._v(" "),_c('div',{staticClass:"comment-content"},[_c('p',[_vm._v(_vm._s(item.disadvantages))])]),_vm._v(" "),_c('div',{staticClass:"g-flex icon-list-wrap"},[_c('div',{staticClass:"icon-item"},[_c('a-icon',{attrs:{"type":"message"}}),_vm._v(_vm._s(item.commentnum)+"\n                ")],1),_vm._v(" "),_c('div',{staticClass:"icon-item"},[_c('a-icon',{attrs:{"type":"like"}}),_vm._v(_vm._s(item.praisenum)+"\n                ")],1)])])}),0),_vm._v(" "),_c('div',{staticClass:"m-t-20 m-b-20"},[_c('a-pagination',{attrs:{"total":_vm.disadvantageReviewsTotalNumber},on:{"change":_vm.disadvantageReviewsChange},model:{value:(_vm.disadvantageReviewsCurPage),callback:function ($$v) {_vm.disadvantageReviewsCurPage=$$v},expression:"disadvantageReviewsCurPage"}})],1)]):_vm._e()]):_vm._e()]),_vm._v(" "),_c('a-col',{staticClass:"display-pc"},[_c('div',{staticClass:"contact-btn",on:{"click":_vm.contact}},[_vm._v("\n        ??????????????????\n      ")])])],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/productDetail/reviews.vue?vue&type=template&id=7faaa2ae&

// EXTERNAL MODULE: ./components/BarScore.vue + 4 modules
var BarScore = __webpack_require__(197);

// EXTERNAL MODULE: ./components/common/starComp/StarZoom.vue + 4 modules
var StarZoom = __webpack_require__(172);

// EXTERNAL MODULE: ./static/lib/utils.js
var utils = __webpack_require__(190);

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
//
//
//
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

    }
  },

  data() {
    return {
      allReviewsShow: true,
      partReviewsShow: false,
      advantageLen: 0,
      disadvantageLen: 0,
      tabsList: [],
      // ????????????
      analysisDimensionId: null,
      // ??????ID
      curTitle: '',
      // ???????????????
      reviewsList: [],
      advantageReviews: [],
      disadvantageReviews: [],
      allReviewCurPage: 1,
      // ???????????????????????????
      allReviewTotalPage: 1,
      // ???????????????????????????
      allReviewTotalNumber: 1,
      // ???????????????????????????
      advantageReviewsCurPage: 1,
      // ???????????????
      disadvantageReviewsCurPage: 1,
      // ???????????????
      advantageReviewsTotalPage: 1,
      // ???????????????
      disadvantageReviewsTotalPage: 1,
      // ???????????????
      advantageReviewsTotalNumber: 1,
      disadvantageReviewsTotalNumber: 1,
      mainPath: ''
    };
  },

  computed: {
    totalReviews() {
      return this.advantageLen + this.disadvantageLen;
    }

  },

  mounted() {
    this.getTabs();
    this.getReviewsList();
  },

  methods: {
    // ??????tabsList
    getTabs() {
      this.$requests.productGetAllDimensions({
        PRODUCT_ID: this.productDetailObj.productObj.ID
      }).then(res => {
        if (res.status === 200 && res.data.dimensions) {
          this.tabsList = res.data.dimensions;
        }
      });
    },

    // ??????????????????
    getReviewsList() {
      this.$requests.productReviews({
        PRODUCT_ID: this.productDetailObj.productObj.ID,
        CUR_PAGE: this.allReviewCurPage,
        TYPE: 1
      }).then(res => {
        if (res.status === 200 && res.data.result === 'success') {
          this.reviewsList = res.data.productScoreList;
          this.allReviewTotalPage = res.data.TOTAL_PAGE;
          this.allReviewTotalNumber = res.data.TOTAL_NUM;

          if (this.reviewsList.length) {
            this.reviewsList = this.reviewsList.map(item => {
              item.operaTime = Object(utils["c" /* timestamp2date */])(item.operaTime);
              return item;
            });
          }
        }
      });
    },

    totalReviewsChange(page, pageSize) {
      this.allReviewCurPage = page;
      this.getReviewsList();
      this.goTo('#all-reviews');
    },

    goTo(anchor) {
      window.location.hash = '';
      window.location.hash = anchor;
    },

    disadvantageReviewsChange(page) {
      this.disadvantageReviewsCurPage = page;
      this.getConsAnalysis();
      this.goTo('#bad-reviews');
    },

    advantageReviewsChange(page) {
      this.advantageReviewsCurPage = page;
      this.getProsAnalysis();
      this.goTo('#all-reviews');
    },

    contact() {
      this.$emit('formHandleShow');
    },

    changeTags(item) {
      this.allReviewsShow = false;
      this.partReviewsShow = true;
      this.advantageLen = parseInt(item.advantagenum);
      this.disadvantageLen = parseInt(item.disadvantagenum);
      this.analysisDimensionId = item.dimension_id;
      this.curTitle = item.title; // ?????????????????????

      this.advantageReviewsCurPage = 1;
      this.disadvantageReviewsCurPage = 1;
      this.getProsAnalysis();
      this.getConsAnalysis();
    },

    // ??????
    getProsAnalysis() {
      let partReviewsList = [];
      this.$requests.productProsAnalysis({
        PRODUCT_ID: this.productDetailObj.productObj.ID,
        CUR_PAGE: this.advantageReviewsCurPage,
        DIMENSION_TITLE: this.curTitle,
        USER_ID: 'pcadmin'
      }).then(res => {
        if (res.status === 200 && res.data.result === 'success') {
          partReviewsList = res.data.pdScoreList;
          this.advantageReviewsTotalPage = res.data.TOTAL_PAGE;
          this.advantageReviewsTotalNumber = res.data.TOTAL_NUM;

          if (partReviewsList.length) {
            this.advantageReviews = partReviewsList.map(item => {
              item.operaTime = Object(utils["c" /* timestamp2date */])(item.operaTime);
              return item;
            });
          }
        }
      });
    },

    // ??????
    getConsAnalysis() {
      let partReviewsList = [];
      this.$requests.productConsAnalysis({
        PRODUCT_ID: this.productDetailObj.productObj.ID,
        CUR_PAGE: this.disadvantageReviewsCurPage,
        DIMENSION_TITLE: this.curTitle,
        USER_ID: 'pcadmin'
      }).then(res => {
        if (res.status === 200 && res.data.result === 'success') {
          partReviewsList = res.data.pdScoreList;
          this.disadvantageReviewsTotalPage = res.data.TOTAL_PAGE;
          this.disadvantageReviewsTotalNumber = res.data.TOTAL_NUM;

          if (partReviewsList.length) {
            this.disadvantageReviews = partReviewsList.map(item => {
              item.operaTime = Object(utils["c" /* timestamp2date */])(item.operaTime);
              return item;
            });
          }
        }
      });
    },

    handleGetAllReview() {
      if (this.allReviewsShow) {
        return;
      }

      this.allReviewsShow = true;
      this.partReviewsShow = false;
      this.analysisDimensionId = null;
      this.allReviewCurPage = 1;
      this.getReviewsList();
    },

    navigateToDetail(id) {
      let routeUrl = this.$router.resolve({
        name: 'review-detail-id',
        params: {
          id
        }
      });
      window.open(routeUrl.href, '_blank');
    }

  }
});
// CONCATENATED MODULE: ./components/productDetail/reviews.vue?vue&type=script&lang=js&
 /* harmony default export */ var productDetail_reviewsvue_type_script_lang_js_ = (reviewsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/_vue-loader@15.9.7@vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14);

// CONCATENATED MODULE: ./components/productDetail/reviews.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  productDetail_reviewsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "666ca4a9"
  
)

/* harmony default export */ var reviews = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 247:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.7@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_@nuxt_components@2.1.8@@nuxt/components/dist/loader.js??ref--0-0!./node_modules/_vue-loader@15.9.7@vue-loader/lib??vue-loader-options!./pages/product/detail/_id.vue?vue&type=template&id=0c77f0f9&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"main",attrs:{"id":"product-info"}},[_vm._ssrNode("<h1 class=\"heading-hide\">"+_vm._ssrEscape("\n    "+_vm._s(_vm.productDetailObj.productObj.NAME)+"????????????_"+_vm._s(_vm.productDetailObj.productObj.NAME)+"???????????????_????????????_????????????_?????????\n  ")+"</h1> "),_vm._ssrNode("<div class=\"default\">","</div>",[_c('Header2',{attrs:{"is-show":true,"is-fixed":false},on:{"handleBannerPopShow":_vm.handleBannerPopShow}})],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"g-wrapper\">","</div>",[_c('breadCrumb',[_c('a-breadcrumb-item',[_c('nuxt-link',{attrs:{"to":"/"}},[_vm._v("\n          ??????\n        ")])],1),_vm._v(" "),_c('a-breadcrumb-item',[_c('nuxt-link',{attrs:{"to":{name: 'product-rank-id',params:{id: _vm.productDetailObj.categoryObj.CID}},"target":"_blank"}},[_vm._v("\n          "+_vm._s(_vm.productDetailObj.categoryObj.CNAME)+"????????????\n        ")])],1),_vm._v(" "),_c('a-breadcrumb-item',[_vm._v("\n        "+_vm._s(_vm.productDetailObj.productObj.NAME)+"\n      ")])],1),_vm._ssrNode(" "),_c('a-row',{staticClass:"product-detail"},[_c('a-row',{staticClass:"g-flex"},[_c('a-col',{staticClass:"product-logo",attrs:{"lg":6,"md":6,"sm":10}},[_c('div',{staticClass:"product-logo-img"},[_c('img',{attrs:{"src":"http://xuanxingbao.com/images/xxb_mark.png","alt":_vm.productDetailObj.productObj.FACTORY_SHORT_NAME + _vm.productDetailObj.categoryObj.CNAME}})])]),_vm._v(" "),_c('a-col',{staticClass:"product-info",attrs:{"lg":12,"md":12,"sm":14}},[_c('div',{staticClass:"product-name"},[_vm._v("\n            "+_vm._s(_vm.productDetailObj.productObj.NAME || _vm.productDetailObj.productKbObj.name)+"?????????????????????\n          ")]),_vm._v(" "),(_vm.productDetailObj.productKbObj.avgNum)?_c('div',{staticClass:"comment-desc g-flex"},[_c('div',{staticClass:"range"},[_vm._v("\n              "+_vm._s(_vm.productDetailObj.productKbObj.avgNum)+"\n            ")]),_vm._v(" "),_c('div',{staticClass:"star-wrap"},[_c('Star',{attrs:{"out-width":100,"out-height":20,"decimal":_vm.productDetailObj.productKbObj.avgNum/5}}),_vm._v(" "),_c('div',{staticClass:"txt"},[_vm._v("\n                ???????????????\n              ")])],1),_vm._v(" "),_c('div',{staticClass:"comment-total"},[_c('a',{attrs:{"href":"#"}},[_vm._v(_vm._s(_vm.productDetailObj.productKbObj.dpnum)+"?????????")])])]):_c('div',[_vm._v("\n            ????????????\n          ")])]),_vm._v(" "),_c('a-col',{staticClass:"link-btn display-pc",attrs:{"lg":4,"md":4,"sm":24}},[_c('div',[_c('a-button',{attrs:{"type":"primary"},on:{"click":function($event){$event.stopPropagation();return _vm.formHandleShow.apply(null, arguments)}}},[_vm._v("\n              ??????????????????\n            ")])],1),_vm._v(" "),_c('div',[_c('a-button',{attrs:{"type":"primary"},on:{"click":function($event){$event.stopPropagation();return _vm.handleBannerPopShow.apply(null, arguments)}}},[_vm._v("\n              ????????????\n            ")])],1)])],1),_vm._v(" "),_c('a-row',{staticClass:"navbar-wrap"},[_c('a-anchor',{staticClass:"detail-nav"},[_c('a',{staticClass:"logo",attrs:{"href":"/"}},[_c('img',{attrs:{"src":__webpack_require__(63),"alt":"?????????_???????????????????????????-ERP??????_BI_CRM??????_OA??????_???????????????_BPM??????_????????????..."}})]),_vm._v(" "),_c('a-anchor-link',{staticClass:"nav-bar-item",attrs:{"href":"#product-info","title":"????????????"}}),_vm._v(" "),_c('a-anchor-link',{staticClass:"nav-bar-item",attrs:{"href":"#product-function","title":"??????"}}),_vm._v(" "),_c('a-anchor-link',{staticClass:"nav-bar-item",attrs:{"href":"#user-reviews","title":"????????????"}}),_vm._v(" "),_c('a-anchor-link',{staticClass:"nav-bar-item",attrs:{"href":"#apply-show","title":"????????????"}})],1)],1)],1)],2),_vm._ssrNode(" "),_c('a-row',{staticClass:"g-wrapper comment-wrap",attrs:{"gutter":[32, 32]}},[_c('a-col',{staticClass:"left-wrap",attrs:{"lg":16,"md":16,"sm":24}},[_c('h2',[_vm._v("????????????")]),_vm._v(" "),_c('div',{staticClass:"panel"},[_c('div',{staticClass:"pro-intro-wrap"},[_c('div',{staticClass:"label"},[_vm._v("\n            ????????????\n          ")]),_vm._v(" "),_c('div',{staticClass:"pro-intro"},[_vm._v("\n            SAP?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????77????????????????????????SAP?????????????????????????????????????????????????????????IoT???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????\n          ")]),_vm._v(" "),_c('div',{staticClass:"pro-company"},[_c('div',{staticClass:"g-flex space-between"},[_c('div',{staticClass:"item g-flex"},[_c('div',{staticClass:"icon"},[_c('a-icon',{staticStyle:{"font-size":"16px"},attrs:{"type":"home"}})],1),_vm._v(" "),_c('div',{},[_c('div',[_vm._v("????????????")]),_vm._v(" "),_c('div',{staticClass:"txt-name",staticStyle:{"color":"#222"}},[_vm._v("\n                    ?????????\n                  ")])])]),_vm._v(" "),_c('div',{staticClass:"item g-flex"},[_c('div',{staticClass:"icon"},[_c('a-icon',{staticStyle:{"font-size":"16px"},attrs:{"type":"global"}})],1),_vm._v(" "),_c('div',{},[_c('div',[_vm._v("????????????")]),_vm._v(" "),_c('div',{staticClass:"txt-name",staticStyle:{"color":"#222"}},[_vm._v("\n                    https://www.sap.cn/\n                  ")])])])]),_vm._v(" "),_c('div',{staticClass:"g-flex space-between"},[_c('div',{staticClass:"item g-flex"},[_c('div',{staticClass:"icon"},[_c('a-icon',{staticStyle:{"font-size":"16px"},attrs:{"type":"environment"}})],1),_vm._v(" "),_c('div',{},[_c('div',[_vm._v("????????????")]),_vm._v(" "),_c('div',{staticClass:"txt-name",staticStyle:{"color":"#222"}},[_vm._v("\n                    ?????????\n                  ")])])]),_vm._v(" "),_c('div',{staticClass:"item g-flex"},[_c('div',{staticClass:"icon"},[_c('a-icon',{staticStyle:{"font-size":"16px"},attrs:{"type":"dashboard"}})],1),_vm._v(" "),_c('div',{},[_c('div',[_vm._v("????????????")]),_vm._v(" "),_c('div',{staticClass:"txt-name",staticStyle:{"color":"#222"}},[_vm._v("\n                    1972???\n                  ")])])])])])])]),_vm._v(" "),_c('h2',{attrs:{"id":"product-function"}},[_vm._v("\n        ??????\n      ")]),_vm._v(" "),_c('div',{staticClass:"panel"},[_c('feature')],1),_vm._v(" "),_c('h2',{attrs:{"id":"user-reviews"}},[_vm._v("\n        ????????????\n      ")]),_vm._v(" "),(_vm.productDetailObj.productKbObj.avgNum)?_c('reviews',{attrs:{"product-detail-obj":_vm.productDetailObj},on:{"formHandleShow":_vm.formHandleShow}}):_c('div',{staticClass:"panel"},[_c('div',{staticStyle:{"width":"100%","height":"400px"}},[_c('no-data',[_c('div',{staticStyle:{"font-size":"14px"},attrs:{"slot":"txt"},slot:"txt"},[_vm._v("\n              ?????????????????????~\n              "),_c('span',{staticStyle:{"padding":"6px 14px","border-radius":"4px","background-color":"#007DFF","color":"#ffffff","cursor":"pointer"}},[_vm._v("???????????????")])])])],1)]),_vm._v(" "),_c('h2',{attrs:{"id":"apply-show"}},[_vm._v("\n        ????????????\n      ")]),_vm._v(" "),_c('div',{staticClass:"panel"},[_c('span',{staticStyle:{"cursor":"pointer"},on:{"click":_vm.formHandleShow}},[_vm._v("??????")])])],1),_vm._v(" "),_c('a-col',{staticClass:"right-wrap",attrs:{"lg":8,"md":8,"sm":24}},[_c('div',{},[_c('h2',{staticClass:"title"},[_vm._v("\n          ?????????????????????\n        ")]),_vm._v(" "),_c('div',{staticClass:"com-list"},[_c('div',{staticClass:"item g-flex center"},[_c('div',{staticClass:"pro"},[_c('img',{attrs:{"src":"https://images.g2crowd.com/uploads/product/image/small_square/small_square_b9dbbb444871e867de3256a7ed711595/clickup.jpg","alt":""}}),_vm._v(" "),_c('div',{staticClass:"txt"},[_vm._v("\n                ClickUp\n              ")])]),_vm._v(" "),_c('div',{staticClass:"vs"},[_c('span',[_vm._v("VS")])]),_vm._v(" "),_c('div',{staticClass:"pro"},[_c('img',{attrs:{"src":"https://images.g2crowd.com/uploads/product/image/small_square/small_square_f426db6f72f9c9f8946d5964aa76616d/monday-com-monday-com.png","alt":""}}),_vm._v(" "),_c('div',{staticClass:"txt"},[_vm._v("\n                monday.com\n              ")])])]),_vm._v(" "),_c('div',{staticClass:"item g-flex center"},[_c('div',{staticClass:"pro"},[_c('img',{attrs:{"src":"https://images.g2crowd.com/uploads/product/image/small_square/small_square_b9dbbb444871e867de3256a7ed711595/clickup.jpg","alt":""}}),_vm._v(" "),_c('div',{staticClass:"txt"},[_vm._v("\n                ClickUp\n              ")])]),_vm._v(" "),_c('div',{staticClass:"vs"},[_c('span',[_vm._v("VS")])]),_vm._v(" "),_c('div',{staticClass:"pro"},[_c('img',{attrs:{"src":"https://images.g2crowd.com/uploads/product/image/small_square/small_square_0264136e455806de7a87b27d66c09acd/asana.png","alt":""}}),_vm._v(" "),_c('div',{staticClass:"txt"},[_vm._v("\n                Asana\n              ")])])]),_vm._v(" "),_c('div',{staticClass:"item g-flex center"},[_c('div',{staticClass:"pro"},[_c('img',{attrs:{"src":"https://images.g2crowd.com/uploads/product/image/small_square/small_square_d8d487b67574b56a5ad57a2f0f159a30/airtable.jpg","alt":""}}),_vm._v(" "),_c('div',{staticClass:"txt"},[_vm._v("\n                ClickUp\n              ")])]),_vm._v(" "),_c('div',{staticClass:"vs"},[_c('span',[_vm._v("VS")])]),_vm._v(" "),_c('div',{staticClass:"pro"},[_c('img',{attrs:{"src":"https://images.g2crowd.com/uploads/product/image/small_square/small_square_f426db6f72f9c9f8946d5964aa76616d/monday-com-monday-com.png","alt":""}}),_vm._v(" "),_c('div',{staticClass:"txt"},[_vm._v("\n                Airtable\n              ")])])])])]),_vm._v(" "),_c('div',{},[_c('Slider',[_c('div',{staticClass:"g-flex space-between",attrs:{"slot":"slider-title"},on:{"click":_vm.navigateToRank},slot:"slider-title"},[_c('span',[_vm._v(_vm._s(_vm.productDetailObj.categoryObj.CNAME)+"??????????????????")]),_vm._v(" "),_c('span',{staticStyle:{"font-size":"14px","color":"#a9a9a9","cursor":"pointer"}},[_vm._v("????????????")])]),_vm._v(" "),(_vm.hotCompanyList.length)?_c('div',{staticClass:"slider-nav-bar",attrs:{"slot":"slider-nav-bar"},slot:"slider-nav-bar"},[_c('h3',[_vm._v("????????????")]),_vm._v(" "),_vm._l((_vm.hotCompanyList),function(item,index){return _c('div',{key:index,staticClass:"view-wrap"},[_c('rankListItem',{attrs:{"item":item,"index":index,"category-id":_vm.productDetailObj.categoryObj.CID}})],1)})],2):_vm._e(),_vm._v(" "),(_vm.challengerList.length)?_c('div',{staticClass:"slider-nav-bar",attrs:{"slot":"slider-nav-bar"},slot:"slider-nav-bar"},[_c('h3',[_vm._v("?????????")]),_vm._v(" "),_vm._l((_vm.challengerList),function(item,index){return _c('div',{key:index,staticClass:"view-wrap"},[_c('rankListItem',{attrs:{"item":item,"index":index,"category-id":_vm.productDetailObj.categoryObj.CID}})],1)})],2):_vm._e(),_vm._v(" "),(_vm.noReviewList.length)?_c('div',{staticClass:"slider-nav-bar",attrs:{"slot":"slider-nav-bar"},slot:"slider-nav-bar"},[_c('h3',[_vm._v("?????????????????????")]),_vm._v(" "),_vm._l((_vm.noReviewList),function(item,index){return _c('div',{key:index,staticClass:"view-wrap"},[_c('div',{staticClass:"view"},[_c('div',{staticClass:"g-flex space-between pad-20",staticStyle:{"width":"100%"}},[_c('nuxt-link',{staticStyle:{"color":"#222222"},attrs:{"target":"_blank","to":{name: 'reputation-id',params: {id: _vm.productDetailObj.categoryObj.CID},query: {factory_id: item.qcid}}}},[_vm._v("\n                    "+_vm._s(item.factory_short_name || item.qcname)+"\n                  ")])],1)])])})],2):_vm._e()])],1)])],1),_vm._ssrNode(" "),_c('contact',{ref:"child",attrs:{"form-show":_vm.formShow},on:{"formHide":_vm.formHandleHide,"submit":_vm.submitForm}}),_vm._ssrNode(" "),_c('banner-pop',{directives:[{name:"show",rawName:"v-show",value:(_vm.bannerPopShow),expression:"bannerPopShow"}],on:{"handleBannerPopHide":_vm.handleBannerPopHide}}),_vm._ssrNode(" "),_c('rightNav',{staticClass:"display-pc"},[_c('qrcode')],1),_vm._ssrNode(" "),_c('Footer')],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/product/detail/_id.vue?vue&type=template&id=0c77f0f9&

// EXTERNAL MODULE: ./components/common/starComp/StarZoom.vue + 4 modules
var StarZoom = __webpack_require__(172);

// EXTERNAL MODULE: ./components/productDetail/contact.vue + 4 modules
var contact = __webpack_require__(196);

// EXTERNAL MODULE: ./components/productDetail/feature.vue + 4 modules
var feature = __webpack_require__(220);

// EXTERNAL MODULE: ./components/productDetail/reviews.vue + 4 modules
var reviews = __webpack_require__(221);

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

// EXTERNAL MODULE: ./static/lib/utils.js
var utils = __webpack_require__(190);

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.2.2@babel-loader/lib??ref--2-0!./node_modules/_@nuxt_components@2.1.8@@nuxt/components/dist/loader.js??ref--0-0!./node_modules/_vue-loader@15.9.7@vue-loader/lib??vue-loader-options!./pages/product/detail/_id.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

 // import price from '~/components/productDetail/price'

 // import userRate from '~/components/productDetail/userRate'









/* harmony default export */ var _idvue_type_script_lang_js_ = ({
  components: {
    Star: StarZoom["default"],
    feature: feature["default"],
    reviews: reviews["default"],
    contact: contact["default"],
    noData: noData["default"],
    rankListItem: list["default"],
    rightNav: rightNav["default"],
    qrcode: qrcode["default"],
    bannerPop: banner["default"],
    breadCrumb: breadCrumb["default"]
  },

  async asyncData(vm) {
    /*
    * vm.params??????????????????
    * id ??????ID
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
        levelTxt: '??????'
      });
      productDetailObj.reviewArr.push({
        level: 'four',
        branchnum: productDetailRes.data.fourbranchnum,
        levelTxt: '??????'
      });
      productDetailObj.reviewArr.push({
        level: 'three',
        branchnum: productDetailRes.data.threebranchnum,
        levelTxt: '??????'
      });
      productDetailObj.reviewArr.push({
        level: 'two',
        branchnum: productDetailRes.data.twobranchnum,
        levelTxt: '??????'
      });
      productDetailObj.reviewArr.push({
        level: 'one',
        branchnum: productDetailRes.data.onebranchnum,
        levelTxt: '??????'
      });
      productDetailObj.earmarked.push({
        text: '??????',
        levelAvgNum: productDetailRes.data.productKbObj.functionLevelAvgNum
      });
      productDetailObj.earmarked.push({
        text: '??????',
        levelAvgNum: productDetailRes.data.productKbObj.performanceLevelAvgNum
      });
      productDetailObj.earmarked.push({
        text: '????????????',
        levelAvgNum: productDetailRes.data.productKbObj.scalabilityLevelAvgNum
      });
      productDetailObj.earmarked.push({
        text: '????????????',
        levelAvgNum: productDetailRes.data.productKbObj.deployLevelAvgNum
      });
      productDetailObj.earmarked.push({
        text: '???????????????',
        levelAvgNum: productDetailRes.data.productKbObj.friendlyLevelAvgNum
      });
    } // let tabsRes = await vm.$requests.productGetAllDimensions({
    //   PRODUCT_ID: vm.params.id
    // })
    // let tabsList = (tabsRes.status === 200 && tabsRes.data.dimensions) ? tabsRes.data.dimensions : []
    // ????????????


    let allReviewCurPage = 1;
    let allReviewTotalPage = 1;
    let allReviewTotalNum = 1;
    let reviewsRes = await vm.$requests.productReviews({
      PRODUCT_ID: productId,
      CUR_PAGE: allReviewCurPage,
      TYPE: 1
    }); // ????????????

    let reviewsList = [];

    if (reviewsRes.status === 200 && reviewsRes.data.result === 'success') {
      reviewsList = reviewsRes.data.productScoreList;
      allReviewTotalPage = reviewsRes.data.TOTAL_PAGE;
      allReviewTotalNum = reviewsRes.data.TOTAL_NUM;

      if (reviewsList.length) {
        reviewsList = reviewsList.map(item => {
          item.operaTime = Object(utils["c" /* timestamp2date */])(item.operaTime);
          return item;
        });
      }
    } // ????????????????????????(???????????????????????????????????????)


    let hotCompanyListRes = await vm.$requests.categoryHotCompany({
      ORDER_TYPE: 0,
      // 0???????????????1???????????????
      CATEGORY_ID: productDetailObj.categoryObj.CID
    });
    let hotCompanyList = hotCompanyListRes.status === 200 && hotCompanyListRes.data.result === 'success' ? hotCompanyListRes.data.factoryQcList : [];
    let challengerRes = await vm.$requests.categoryChallenger({
      ORDER_TYPE: 0,
      // 0???????????????1???????????????
      CATEGORY_ID: productDetailObj.categoryObj.CID
    });
    let challengerList = challengerRes.status === 200 && challengerRes.data.result === 'success' ? challengerRes.data.factoryQcList : [];
    let noReviewRes = await vm.$requests.categoryNoComment({
      CATEGORY_ID: productDetailObj.categoryObj.CID
    });
    let noReviewList = noReviewRes.status === 200 && noReviewRes.data.result === 'success' ? noReviewRes.data.notScoreList : [];
    let advantageReviews = [];
    let disadvantageReviews = []; // ??????????????????

    let vsProdtcListRes = await vm.$requests.categoryVsProduct({
      category_id: productDetailObj.categoryObj.CID
    });
    console.log('???????????????????????????:', vsProdtcListRes);
    return {
      productId,
      // ??????ID
      productDetailObj,
      reviewsList,
      // ??????????????????
      advantageReviews,
      // ??????????????????????????????
      disadvantageReviews,
      // ??????????????????????????????
      curTitle: '',
      // ???????????????
      hotCompanyList,
      challengerList,
      noReviewList,
      formShow: false,
      allReviewCurPage,
      // ???????????????????????????
      allReviewTotalPage,
      // ???????????????????????????
      allReviewTotalNum,
      // ????????????????????????
      advantageReviewsTotalPage: 1,
      advantageReviewsTotalNumber: 1,
      disadvantageReviewsTotalPage: 1,
      advantageReviewsCurPage: 1,
      disadvantageReviewsTotalNumber: 1,
      disadvantageReviewsCurPage: 1,
      bannerPopShow: false // ??????????????????

    };
  },

  methods: {
    handleBannerPopShow() {
      this.bannerPopShow = true;
    },

    handleBannerPopHide() {
      this.bannerPopShow = false;
    },

    navigateToRank() {
      let routeUrl = this.$router.resolve({
        name: 'company-rank-id',
        params: {
          id: this.productDetailObj.categoryObj.CID
        }
      });
      window.open(routeUrl.href, '_blank');
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
        this.$message.success('???????????????????????????????????????????????????!');
        this.$refs.child.clear();
        this.formShow = false;
      } else {
        this.$message.error('??????????????????????????????!');
        this.formShow = false;
      }
    }

  },

  head() {
    return {
      title: this.productDetailObj.productObj.NAME + '????????????_' + this.productDetailObj.productObj.NAME + '???????????????_????????????_????????????_?????????',
      meta: [{
        hid: 'description',
        name: 'description',
        content: '?????????' + this.productDetailObj.productObj.NAME + '???????????????????????????' + this.productDetailObj.productObj.NAME + '???????????????????????????, ??????????????????????????????'
      }, {
        hid: 'keywords',
        name: 'keywords',
        content: this.productDetailObj.productObj.FACTORY_SHORT_NAME + this.productDetailObj.categoryObj.CNAME + '_' + this.productDetailObj.productObj.FACTORY_SHORT_NAME + '_' + this.productDetailObj.productObj.NAME
      }]
    };
  }

});
// CONCATENATED MODULE: ./pages/product/detail/_id.vue?vue&type=script&lang=js&
 /* harmony default export */ var detail_idvue_type_script_lang_js_ = (_idvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/_vue-loader@15.9.7@vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14);

// CONCATENATED MODULE: ./pages/product/detail/_id.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  detail_idvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "35f7c4e4"
  
)

/* harmony default export */ var _id = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Header2: __webpack_require__(174).default,Slider: __webpack_require__(187).default,Footer: __webpack_require__(180).default})


/***/ })

};;
//# sourceMappingURL=_id.js.map