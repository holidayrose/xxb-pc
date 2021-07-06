exports.ids = [39,8,9,10,11,24,25];
exports.modules = {

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.7@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_@nuxt_components@2.1.8@@nuxt/components/dist/loader.js??ref--0-0!./node_modules/_vue-loader@15.9.7@vue-loader/lib??vue-loader-options!./components/header/pHeader2.vue?vue&type=template&id=9715a7b0&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('a-layout-header',{staticClass:"global-header"},[_c('div',{staticClass:"g-wrapper g-flex space-between"},[_c('div',{staticClass:"logo-wrap"},[_c('nuxt-link',{attrs:{"to":"/"}},[_c('img',{staticClass:"logo",attrs:{"src":__webpack_require__(61),"alt":"选型宝_企业软件的大众点评-ERP系统_BI_CRM系统_OA系统_数据库软件_BPM系统_企业邮箱..."}})]),_vm._v(" "),_c('strong',[_vm._v(_vm._s(_vm.slogan))])],1),_vm._v(" "),_c('div',{staticClass:"g-flex"},[_c('nav',{staticClass:"nav"},[_c('div',{staticClass:"link",on:{"click":_vm.handleBannerPopShow}},[_c('span',{staticClass:"icon review"}),_vm._v(" "),_c('span',[_vm._v("写点评就给钱")])]),_vm._v(" "),_c('nuxt-link',{staticClass:"link",attrs:{"to":"/all/","title":"软件类别","target":"_blank"}},[_c('span',{staticClass:"icon cate"}),_vm._v(" "),_c('span',[_vm._v("软件类别")])]),_vm._v(" "),_c('a',{staticClass:"link",attrs:{"href":"https://e.xuanxingbao.com/","title":"企业入驻","target":"_blank"}},[_c('span',{staticClass:"icon"}),_vm._v(" "),_c('span',{staticClass:"entry"},[_vm._v("企业入驻")])])],1),_vm._v(" "),(_vm.isShow)?_c('div',{staticClass:"search-box"},[_c('div',{staticClass:"head-search-input",class:{ focus: _vm.isFocus,search: _vm.isSearch }},[_c('a-input-search',{staticClass:"input",staticStyle:{"width":"300px"},attrs:{"placeholder":"搜索产品类别、名称，看看同行推荐啥？"},on:{"search":_vm.onSearch,"change":_vm.onChange,"focus":_vm.onFocus,"blur":_vm.onBlur},model:{value:(_vm.keywords),callback:function ($$v) {_vm.keywords=$$v},expression:"keywords"}}),_vm._v(" "),_c('div',{staticClass:"result-wrap focus-result"},[_c('div',[_c('h3',{staticClass:"title"},[_vm._v("\n                热门搜索\n              ")]),_vm._v(" "),_vm._l((_vm.hotSearchList),function(item){return _c('div',{key:item.ID,staticClass:"item"},[_c('div',{staticClass:"link",on:{"click":function($event){return _vm.handleKeyWordTagClick(item)}}},[_c('span',{staticClass:"name"},[_vm._v(_vm._s(item.names))]),_vm._v(" "),_c('span',{staticClass:"hot-icon"})])])})],2),_vm._v(" "),(_vm.historySearch)?_c('div',{staticStyle:{"margin-top":"10px"}},[_c('h3',{staticClass:"title g-flex space-between"},[_c('span',[_vm._v("历史搜索")]),_vm._v(" "),_c('span',{staticStyle:{"cursor":"pointer"},on:{"click":_vm.deleteHistorySearch}},[_c('a-icon',{attrs:{"type":"delete"}}),_vm._v("删除\n                ")],1)]),_vm._v(" "),_vm._l((_vm.historySearch),function(item){return _c('div',{key:item.ID,staticClass:"item"},[_c('div',{staticClass:"link",on:{"click":function($event){return _vm.handleKeyWordTagClick(item)}}},[_c('span',{staticClass:"name"},[_vm._v(_vm._s(item.names))]),_vm._v(" "),_c('span',{staticClass:"hot-icon"})])])})],2):_vm._e()]),_vm._v(" "),_c('div',{staticClass:"result-wrap search-result"},_vm._l((_vm.searchList),function(item){return _c('div',{key:item.ID,staticClass:"item"},[_c('div',{staticClass:"link",on:{"click":function($event){return _vm.handleKeyWordTagClick2(item)}}},[_c('span',{staticClass:"name"},[_vm._v(_vm._s(item.names))]),_vm._v(" "),_c('span',{staticStyle:{"color":"#666","font-size":"12px"}},[_vm._v(_vm._s(item.TYPE === '1' ? '产品' : '类别'))])])])}),0)],1)]):_vm._e()])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/header/pHeader2.vue?vue&type=template&id=9715a7b0&

// EXTERNAL MODULE: ./static/lib/storage.js
var storage = __webpack_require__(18);

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
      // 历史搜索本地存储
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
      // 历史搜索本地存储
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

    // 本地存储的历史搜索
    getHistorySearch() {
      this.historySearch = storage["a" /* default */].get('set_history_search');
    },

    // 删除本地存储的历史搜索
    deleteHistorySearch() {
      storage["a" /* default */].remove('set_history_search');
      this.historySearch = [];
    }

  }
});
// CONCATENATED MODULE: ./components/header/pHeader2.vue?vue&type=script&lang=js&
 /* harmony default export */ var header_pHeader2vue_type_script_lang_js_ = (pHeader2vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/_vue-loader@15.9.7@vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(13);

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

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/qrcode.5d928fb.png";

/***/ }),

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/wx-yh.bffc413.jpg";

/***/ }),

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/qrcode_dy.e488e10.jpg";

/***/ }),

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/qcrode.414b83a.jpg";

/***/ }),

/***/ 158:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/qrcode_fw.8427576.jpg";

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.7@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_@nuxt_components@2.1.8@@nuxt/components/dist/loader.js??ref--0-0!./node_modules/_vue-loader@15.9.7@vue-loader/lib??vue-loader-options!./components/Header2.vue?vue&type=template&id=0b16849e&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"header-wrap"},[(_vm.isFixed)?_c('a-anchor',[_c('pHeader',{staticClass:"display-pc",attrs:{"is-show":_vm.isShow},on:{"handleBannerPopShow":_vm.handleBannerPopShow}})],1):_c('pHeader',{staticClass:"display-pc",attrs:{"is-show":_vm.isShow},on:{"handleBannerPopShow":_vm.handleBannerPopShow}}),_vm._ssrNode(" "),_c('mHeader',{staticClass:"display-m"})],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Header2.vue?vue&type=template&id=0b16849e&

// EXTERNAL MODULE: ./components/header/pHeader2.vue + 4 modules
var pHeader2 = __webpack_require__(153);

// EXTERNAL MODULE: ./components/header/mHeader.vue + 4 modules
var mHeader = __webpack_require__(37);

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
var componentNormalizer = __webpack_require__(13);

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

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.7@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_@nuxt_components@2.1.8@@nuxt/components/dist/loader.js??ref--0-0!./node_modules/_vue-loader@15.9.7@vue-loader/lib??vue-loader-options!./components/Footer.vue?vue&type=template&id=243480b1&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('a-layout-footer',{staticClass:"footer"},[_c('a-row',[_c('a-col',[_c('a-row',{staticClass:"g-wrapper",attrs:{"getter":"16"}},[_c('a-col',{staticClass:"gutter-row footerInfo",attrs:{"span":"6"}},[_c('a',{staticClass:"ca_text",attrs:{"href":"/all/","title":"微信群"}},[_vm._v("热门类别")]),_vm._v(" "),_c('p',{staticClass:"qc_text"},[_vm._v("\n            微信群\n          ")]),_vm._v(" "),_c('img',{staticClass:"qcrodeImg",attrs:{"src":__webpack_require__(155),"alt":""}})]),_vm._v(" "),_vm._l((_vm.cateInfo),function(item,index){return _c('a-col',{key:index,staticClass:"gutter-row footerInfo",attrs:{"span":"6"}},[_c('a',{staticClass:"ca_text",attrs:{"href":item.path,"title":item.text,"rel":"nofollow"}},[_vm._v(_vm._s(item.text))]),_vm._v(" "),_c('p',{staticClass:"qc_text"},[_vm._v("\n            "+_vm._s(item.title)+"\n          ")]),_vm._v(" "),_c('img',{staticClass:"qcrodeImg",attrs:{"src":item.img,"alt":""}})])})],2)],1),_vm._v(" "),_c('a-col',{staticClass:"beian"},[_c('div',{staticClass:"site-width"},[_c('p',[_vm._v("© 2021 选型宝，All Rights Reserved.")]),_vm._v(" "),_c('p',[_c('a',{attrs:{"href":"#"}},[_vm._v("京ICP备14045422号-2 北京众智优选科技有限公司")])])]),_vm._v(" "),_c('div',{staticClass:"site-width"},[_c('p',[_vm._v("地址：北京市朝阳区百子湾西里435号创富港436")])])])],1)],1)}
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
        text: '关于我们',
        title: '选型宝订阅号',
        img: __webpack_require__(156),
        path: 'http://old.xuanxingbao.com/webPC/about'
      }, {
        text: '联系我们',
        title: '选型宝小程序',
        img: __webpack_require__(157),
        path: 'http://old.xuanxingbao.com/webPC/contact-list.html'
      }, {
        text: '加入我们',
        title: '选型宝服务号',
        img: __webpack_require__(158),
        path: 'http://old.xuanxingbao.com/webPC/participate.html'
      }]
    };
  }

});
// CONCATENATED MODULE: ./components/Footer.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Footervue_type_script_lang_js_ = (Footervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/_vue-loader@15.9.7@vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(13);

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

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.7@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_@nuxt_components@2.1.8@@nuxt/components/dist/loader.js??ref--0-0!./node_modules/_vue-loader@15.9.7@vue-loader/lib??vue-loader-options!./components/rightNav/index.vue?vue&type=template&id=a0a0a8b0&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"right-nav-wrap"},[_vm._t("default")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/rightNav/index.vue?vue&type=template&id=a0a0a8b0&

// EXTERNAL MODULE: ./node_modules/_vue-loader@15.9.7@vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(13);

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

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.7@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_@nuxt_components@2.1.8@@nuxt/components/dist/loader.js??ref--0-0!./node_modules/_vue-loader@15.9.7@vue-loader/lib??vue-loader-options!./components/rightNav/qrcode.vue?vue&type=template&id=19c773fa&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"qrcode"},[_vm._ssrNode("<img"+(_vm._ssrAttr("src",__webpack_require__(154)))+" alt>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/rightNav/qrcode.vue?vue&type=template&id=19c773fa&

// EXTERNAL MODULE: ./node_modules/_vue-loader@15.9.7@vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(13);

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

/***/ 164:
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
var componentNormalizer = __webpack_require__(13);

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

/***/ 180:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/fire.aa1086e.png";

/***/ }),

/***/ 195:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(216);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(11).default
module.exports.__inject__ = function (context) {
  add("2840d027", content, true, context)
};

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_status_vue_vue_type_style_index_0_id_768a7867_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(195);
/* harmony import */ var _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_status_vue_vue_type_style_index_0_id_768a7867_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_status_vue_vue_type_style_index_0_id_768a7867_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_status_vue_vue_type_style_index_0_id_768a7867_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_7_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_10_2_0_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_2_1_8_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_7_vue_loader_lib_index_js_vue_loader_options_status_vue_vue_type_style_index_0_id_768a7867_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 216:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(10);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(62);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(180);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".hot-icon[data-v-768a7867]{display:inline-block;width:15px;height:20px;background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");background-size:cover;margin-left:20px}.detail-nav .nav-bar-item[data-v-768a7867]{position:relative;display:inline-block;color:#222;padding:16px 0;margin:0 20px}.detail-nav .nav-bar-item span[data-v-768a7867]{padding:0 10px;background-color:#818080;color:#fff;border-radius:10px;font-size:12px;margin-left:8px}.detail-nav .on[data-v-768a7867]:before{content:\"\";width:100%;display:block;position:absolute;bottom:0;left:0;height:4px;border-radius:2px}.detail-nav .on[data-v-768a7867]:before,.detail-nav .on span[data-v-768a7867]{background-color:#007dff}.result-container[data-v-768a7867]{margin-top:20px}.result-container .item[data-v-768a7867]{padding:20px 40px;border-radius:4px;background-color:#f5f5f5;margin-bottom:20px;cursor:pointer}.hot-search-wrap .item[data-v-768a7867]{padding:10px;transition:.5s;cursor:pointer}.hot-search-wrap .item[data-v-768a7867]:hover{background-color:rgba(0,125,255,.1)}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.7@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_@nuxt_components@2.1.8@@nuxt/components/dist/loader.js??ref--0-0!./node_modules/_vue-loader@15.9.7@vue-loader/lib??vue-loader-options!./pages/result/_status.vue?vue&type=template&id=768a7867&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"main"},[_c('a-anchor',{staticClass:"default"},[_c('Header2',{on:{"handleBannerPopShow":_vm.handleBannerPopShow}})],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"container-index\" data-v-768a7867>","</div>",[_c('a-row',{staticClass:"g-wrapper",attrs:{"gutter":[32, 32]}},[_c('a-col',{staticClass:"search-box",attrs:{"span":"15"}},[_c('div',{staticClass:"head-search-input status-input",class:{ search: _vm.isSearch }},[_c('a-input-search',{staticClass:"input",staticStyle:{"width":"100%"},attrs:{"size":"large","placeholder":"搜索产品类别、名称，看看同行推荐啥？"},on:{"search":_vm.onSearch,"change":_vm.onChange,"focus":_vm.onChange,"blur":_vm.onBlur},model:{value:(_vm.keywords),callback:function ($$v) {_vm.keywords=$$v},expression:"keywords"}}),_vm._v(" "),_c('div',{staticClass:"result-wrap search-result"},_vm._l((_vm.searchList),function(item){return _c('div',{key:item.ID,staticClass:"item"},[_c('div',{staticClass:"link",on:{"click":function($event){$event.stopPropagation();return _vm.handleKeyWordTagClick2(item)}}},[_c('span',[_vm._v(_vm._s(item.names))]),_vm._v(" "),_c('span',{staticStyle:{"color":"#666","font-size":"12px"}},[_vm._v(_vm._s(item.TYPE === '1' ? '产品' : '类别'))])])])}),0)],1)])],1)],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"container-index\" style=\"background-color: #ffffff;min-height: 100vh\" data-v-768a7867>","</div>",[_c('a-row',{staticClass:"g-wrapper",attrs:{"gutter":[32, 32]}},[_c('a-col',{attrs:{"span":"16"}},[(_vm.status === 'fuzzy')?_c('div',{staticClass:"fuzzy"},[_c('div',{staticClass:"title"},[_c('h2',[_vm._v("您要找的是不是？")])]),_vm._v(" "),_c('div',{staticClass:"detail-nav"},[_c('div',[_c('a',{staticClass:"nav-bar-item",class:_vm.isPro?'on':'',attrs:{"href":"#"},on:{"click":_vm.searchByProduct}},[_vm._v("相关产品"),_c('span',[_vm._v(_vm._s(_vm.productList.length))])]),_vm._v(" "),_c('a',{staticClass:"nav-bar-item",class:_vm.isCate?'on':'',attrs:{"href":"#"},on:{"click":_vm.searchByCategory}},[_vm._v("相关类别"),_c('span',[_vm._v(_vm._s(_vm.categoryList.length))])])])]),_vm._v(" "),(_vm.isPro)?_c('div',{staticClass:"result-container"},[(_vm.productList.length)?_c('div',_vm._l((_vm.productList),function(item){return _c('nuxt-link',{key:item.id,staticClass:"item g-flex space-between",staticStyle:{"color":"#222222"},attrs:{"target":"_blank","to":{name: 'product-detail-id',params: {id: item.id}}}},[_c('div',{staticClass:"name"},[_vm._v("\n                  "+_vm._s(item.name)+"\n                ")]),_vm._v(" "),_c('div',{staticClass:"reviews"},[_vm._v("\n                  点评量："+_vm._s(item.dpnum)+"\n                ")])])}),1):_c('div',{staticStyle:{"width":"100%","height":"400px"}},[_c('no-data',[_c('div',{staticStyle:{"font-size":"14px"},attrs:{"slot":"txt"},slot:"txt"},[_vm._v("\n                  没有搜索到相关产品\n                ")])])],1)]):_vm._e(),_vm._v(" "),(_vm.isCate)?_c('div',{staticClass:"result-container"},[(_vm.categoryList.length)?_c('div',_vm._l((_vm.categoryList),function(item){return _c('nuxt-link',{key:item.id,staticClass:"item g-flex space-between",staticStyle:{"color":"#222222"},attrs:{"target":"_blank","to":{name: 'company-rank-id',params: {id: _vm.obj.id}}}},[_c('div',{staticClass:"name"},[_vm._v("\n                  "+_vm._s(item.name)+"\n                ")]),_vm._v(" "),_c('div',{staticClass:"reviews"},[_vm._v("\n                  点评量："+_vm._s(item.dpnum)+"\n                ")])])}),1):_c('div',{staticStyle:{"width":"100%","height":"400px"}},[_c('no-data',[_c('div',{staticStyle:{"font-size":"14px"},attrs:{"slot":"txt"},slot:"txt"},[_vm._v("\n                  没有搜索到相关类别\n                ")])])],1)]):_vm._e()]):(_vm.status === 'notFound')?_c('div',{staticClass:"not-found",staticStyle:{"width":"100%","height":"410px"}},[_c('no-data',[_c('div',{attrs:{"slot":"txt"},slot:"txt"},[_vm._v("\n              没有找到相关内容\n            ")])])],1):_vm._e()]),_vm._v(" "),_c('a-col',{attrs:{"span":"8"}},[_c('div',{staticClass:"panel"},[_c('h2',[_vm._v("热门搜索")]),_vm._v(" "),_c('div',{staticClass:"hot-search-wrap"},_vm._l((_vm.hotSearchList),function(item,index){return _c('div',{key:item.ID,staticClass:"item g-flex",on:{"click":function($event){return _vm.handleKeyWordTagClick(item)}}},[_c('span',[_vm._v(_vm._s(item.names || item.value))]),_vm._v(" "),(index < 3)?_c('span',{staticClass:"hot-icon"}):_vm._e()])}),0)])])],1)],1),_vm._ssrNode(" "),_c('banner-pop',{directives:[{name:"show",rawName:"v-show",value:(_vm.bannerPopShow),expression:"bannerPopShow"}],on:{"handleBannerPopHide":_vm.handleBannerPopHide}}),_vm._ssrNode(" "),_c('rightNav',[_c('qrcode')],1),_vm._ssrNode(" "),_c('Footer')],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/result/_status.vue?vue&type=template&id=768a7867&scoped=true&

// EXTERNAL MODULE: ./components/hasNoData/noData.vue + 4 modules
var noData = __webpack_require__(164);

// EXTERNAL MODULE: ./components/rightNav/index.vue + 2 modules
var rightNav = __webpack_require__(161);

// EXTERNAL MODULE: ./components/rightNav/qrcode.vue + 2 modules
var qrcode = __webpack_require__(162);

// EXTERNAL MODULE: ./components/pop/banner.vue + 4 modules
var banner = __webpack_require__(38);

// EXTERNAL MODULE: ./static/lib/storage.js
var storage = __webpack_require__(18);

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.2.2@babel-loader/lib??ref--2-0!./node_modules/_@nuxt_components@2.1.8@@nuxt/components/dist/loader.js??ref--0-0!./node_modules/_vue-loader@15.9.7@vue-loader/lib??vue-loader-options!./pages/result/_status.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ var _statusvue_type_script_lang_js_ = ({
  components: {
    noData: noData["default"],
    rightNav: rightNav["default"],
    qrcode: qrcode["default"],
    bannerPop: banner["default"]
  },

  async asyncData(vm) {
    let status = vm.params.status;
    let keywords = vm.query.keywords || '';
    let hotSearchList = [];
    let categoryList = [];
    let productList = []; // 产品

    let productRes = await vm.$requests.searchProductContain({
      KEY_INFO: keywords,
      CUR_PAGE: 1
    });

    if (productRes.data.result === 'success') {
      productList = productRes.data.productList;
    } // 类别


    let categoryRes = await vm.$requests.searchCategoryContain({
      KEY_INFO: keywords,
      CUR_PAGE: 1
    });

    if (categoryRes.data.result === 'success') {
      categoryList = categoryRes.data.categoryList;
    } // 热门搜搜


    let res = await vm.$requests.indexSearchHot({
      CUR_PAGE: 1
    });

    if (res.data.result === 'success') {
      hotSearchList = res.data.hotsearchlogObj;
    }

    return {
      status,
      // notFound/fuzzy
      keywords,
      hotSearchList,
      productList,
      categoryList,
      isPro: true,
      isCate: false,
      isSearch: false,
      searchList: [],
      statusMapper: {
        product: 'haveProductReviews',
        category: 'haveCategoryInformation',
        fuzzy: 'fuzzyMatching',
        notFound: 'allWithout'
      },
      timer: null,
      historySearch: [],
      bannerPopShow: false // 弹窗是否展示

    };
  },

  methods: {
    handleBannerPopShow() {
      this.bannerPopShow = true;
    },

    handleBannerPopHide() {
      this.bannerPopShow = false;
    },

    handleKeyWordTagClick2(obj) {
      // 历史搜索本地存储
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
          name: 'product-rank-id',
          params: {
            id: obj.ID
          }
        });
        window.open(routeUrl.href, '_blank');
      }
    },

    onSearch() {
      if (!this.keywords.trim()) {
        return false;
      } else {
        this.$requests.indexKeysSearch({
          KEY_INFO: this.keywords.trim()
        }).then(res => {
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
        });
      }
    },

    async onChange() {
      if (this.keywords.trim() === '') {
        this.isSearch = false;
      } else {
        this.searchList = await this.searchAutoComplete();

        if (this.searchList) {
          this.isSearch = true;
        } else {
          this.isSearch = false;
        }
      }
    },

    onBlur() {
      this.timer = setTimeout(() => {
        this.isSearch = false;
      }, 300);
    },

    async searchAutoComplete() {
      let resList = [];
      let data = {
        KEY_INFO: this.keywords.trim()
      };
      let res = await this.$requests.indexSearchAutoComplete(data);

      if (res.status === 200 && res.data.result === 'success') {
        resList = res.data.productList;
      }

      return resList;
    },

    async handleKeyWordTagClick(obj) {
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
      }
    },

    async searchByProduct() {
      if (this.isPro) {
        return;
      }

      this.isPro = true;
      this.isCate = false;
      let productRes = await this.$requests.searchProductContain({
        KEY_INFO: this.keywords,
        CUR_PAGE: 1
      });

      if (productRes.data.result === 'success') {
        this.productList = productRes.data.productList;
      }
    },

    async searchByCategory() {
      if (this.isCate) {
        return;
      }

      this.isPro = false;
      this.isCate = true;
      let categoryRes = await this.$requests.searchCategoryContain({
        KEY_INFO: this.keywords,
        CUR_PAGE: 1
      });

      if (categoryRes.data.result === 'success') {
        this.categoryList = categoryRes.data.categoryList;
      }
    }

  }
});
// CONCATENATED MODULE: ./pages/result/_status.vue?vue&type=script&lang=js&
 /* harmony default export */ var result_statusvue_type_script_lang_js_ = (_statusvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/_vue-loader@15.9.7@vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(13);

// CONCATENATED MODULE: ./pages/result/_status.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(215)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  result_statusvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "768a7867",
  "7541797a"
  
)

/* harmony default export */ var _status = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Header2: __webpack_require__(159).default,Footer: __webpack_require__(160).default})


/***/ })

};;
//# sourceMappingURL=_status.js.map