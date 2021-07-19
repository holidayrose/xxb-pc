exports.ids = [35,6,7,11,12];
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
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('a-layout-header',{staticClass:"global-header"},[_c('div',{staticClass:"g-wrapper g-flex space-between"},[_c('div',{staticClass:"logo-wrap"},[_c('nuxt-link',{attrs:{"to":"/"}},[_c('img',{staticClass:"logo",attrs:{"src":__webpack_require__(63),"alt":"选型宝_企业软件的大众点评-ERP系统_BI_CRM系统_OA系统_数据库软件_BPM系统_企业邮箱..."}})]),_vm._v(" "),_c('strong',[_vm._v(_vm._s(_vm.slogan))])],1),_vm._v(" "),_c('div',{staticClass:"g-flex"},[_c('nav',{staticClass:"nav"},[_c('div',{staticClass:"link",on:{"click":_vm.handleBannerPopShow}},[_c('span',{staticClass:"icon review"}),_vm._v(" "),_c('span',[_vm._v("写点评就给钱")])]),_vm._v(" "),_c('nuxt-link',{staticClass:"link",attrs:{"to":"/all/","title":"软件类别","target":"_blank"}},[_c('span',{staticClass:"icon cate"}),_vm._v(" "),_c('span',[_vm._v("软件类别")])]),_vm._v(" "),_c('a',{staticClass:"link",attrs:{"href":"https://e.xuanxingbao.com/","title":"企业入驻","target":"_blank"}},[_c('span',{staticClass:"icon"}),_vm._v(" "),_c('span',{staticClass:"entry"},[_vm._v("企业入驻")])])],1),_vm._v(" "),(_vm.isShow)?_c('div',{staticClass:"search-box"},[_c('div',{staticClass:"head-search-input",class:{ focus: _vm.isFocus,search: _vm.isSearch }},[_c('a-input-search',{staticClass:"input",staticStyle:{"width":"300px"},attrs:{"placeholder":"搜索产品类别、名称，看看同行推荐啥？"},on:{"search":_vm.onSearch,"change":_vm.onChange,"focus":_vm.onFocus,"blur":_vm.onBlur},model:{value:(_vm.keywords),callback:function ($$v) {_vm.keywords=$$v},expression:"keywords"}}),_vm._v(" "),_c('div',{staticClass:"result-wrap focus-result"},[_c('div',[_c('h3',{staticClass:"title"},[_vm._v("\n                热门搜索\n              ")]),_vm._v(" "),_vm._l((_vm.hotSearchList),function(item){return _c('div',{key:item.ID,staticClass:"item"},[_c('div',{staticClass:"link",on:{"click":function($event){return _vm.handleKeyWordTagClick(item)}}},[_c('span',{staticClass:"name"},[_vm._v(_vm._s(item.names))]),_vm._v(" "),_c('span',{staticClass:"hot-icon"})])])})],2),_vm._v(" "),(_vm.historySearch)?_c('div',{staticStyle:{"margin-top":"10px"}},[_c('h3',{staticClass:"title g-flex space-between"},[_c('span',[_vm._v("历史搜索")]),_vm._v(" "),_c('span',{staticStyle:{"cursor":"pointer"},on:{"click":_vm.deleteHistorySearch}},[_c('a-icon',{attrs:{"type":"delete"}}),_vm._v("删除\n                ")],1)]),_vm._v(" "),_vm._l((_vm.historySearch),function(item){return _c('div',{key:item.ID,staticClass:"item"},[_c('div',{staticClass:"link",on:{"click":function($event){return _vm.handleKeyWordTagClick(item)}}},[_c('span',{staticClass:"name"},[_vm._v(_vm._s(item.names))]),_vm._v(" "),_c('span',{staticClass:"hot-icon"})])])})],2):_vm._e()]),_vm._v(" "),_c('div',{staticClass:"result-wrap search-result"},_vm._l((_vm.searchList),function(item){return _c('div',{key:item.ID,staticClass:"item"},[_c('div',{staticClass:"link",on:{"click":function($event){return _vm.handleKeyWordTagClick2(item)}}},[_c('span',{staticClass:"name"},[_vm._v(_vm._s(item.names))]),_vm._v(" "),_c('span',{staticStyle:{"color":"#666","font-size":"12px"}},[_vm._v(_vm._s(item.TYPE === '1' ? '产品' : '类别'))])])])}),0)],1)]):_vm._e()])])])}
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

/***/ 249:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.7@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_@nuxt_components@2.1.8@@nuxt/components/dist/loader.js??ref--0-0!./node_modules/_vue-loader@15.9.7@vue-loader/lib??vue-loader-options!./pages/compare/_id.vue?vue&type=template&id=81ac84b4&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"main"},[_c('a-anchor',{staticClass:"default"},[_c('Header2',{attrs:{"is-show":true},on:{"handleBannerPopShow":_vm.handleBannerPopShow}})],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"container-index\" data-v-81ac84b4>","</div>",[_c('breadCrumb',[_c('a-breadcrumb-item',[_c('a',{attrs:{"href":"/"}},[_vm._v("首页")])]),_vm._v(" "),_c('a-breadcrumb-item',[_vm._v("软件排名")])],1),_vm._ssrNode(" "),_c('a-row',{staticClass:"g-wrapper compare",attrs:{"gutter":[32, 32]}},[_c('a-col',{attrs:{"span":"6"}},[_c('a-menu',{staticStyle:{"border-right":"none"},attrs:{"mode":"inline","open-keys.sync":"sub1","default-selected-keys":['1']}},[_c('a-menu-item',{key:"1"},[_vm._v("\n            总体感受\n          ")]),_vm._v(" "),_c('a-menu-item',{key:"2"},[_vm._v("\n            专项评分\n          ")]),_vm._v(" "),_c('a-sub-menu',{key:"sub1"},[_c('span',{attrs:{"slot":"title"},slot:"title"},[_c('span',[_vm._v("功能比较")])]),_vm._v(" "),_c('a-menu-item',{key:"3"},[_vm._v("\n              功能分类\n            ")]),_vm._v(" "),_c('a-menu-item',{key:"4"},[_vm._v("\n              易配置性\n            ")]),_vm._v(" "),_c('a-menu-item',{key:"5"},[_vm._v("\n              定制开发\n            ")])],1),_vm._v(" "),_c('a-sub-menu',{key:"sub2"},[_c('span',{attrs:{"slot":"title"},slot:"title"},[_c('span',[_vm._v("性能比较")])]),_vm._v(" "),_c('a-menu-item',{key:"6"},[_vm._v("\n              性能\n            ")]),_vm._v(" "),_c('a-menu-item',{key:"7"},[_vm._v("\n              稳定性\n            ")]),_vm._v(" "),_c('a-menu-item',{key:"8"},[_vm._v("\n              可靠性\n            ")]),_vm._v(" "),_c('a-menu-item',{key:"9"},[_vm._v("\n              可用性\n            ")])],1),_vm._v(" "),_c('a-sub-menu',{key:"sub3"},[_c('span',{attrs:{"slot":"title"},slot:"title"},[_c('span',[_vm._v("易于使用性比较")])]),_vm._v(" "),_c('a-menu-item',{key:"10"},[_vm._v("\n              兼容性\n            ")]),_vm._v(" "),_c('a-menu-item',{key:"11"},[_vm._v("\n              易操作性\n            ")]),_vm._v(" "),_c('a-menu-item',{key:"12"},[_vm._v("\n              易维护性\n            ")])],1),_vm._v(" "),_c('a-menu-item',{key:"13"},[_vm._v("\n            成本比较\n          ")]),_vm._v(" "),_c('a-menu-item',{key:"14"},[_vm._v("\n            案例与服务比较\n          ")]),_vm._v(" "),_c('a-menu-item',{key:"15"},[_vm._v("\n            热门点评\n          ")])],1)],1),_vm._v(" "),_c('a-col',{attrs:{"span":"18"}},[_c('div',{staticClass:"content"},[_c('h2',{staticClass:"title"},[_vm._v("用户实名口碑比较——Trello，Wrike，Asana和Smartsheet")]),_vm._v(" "),_c('div',{staticClass:"table"},[_c('table',{staticStyle:{"width":"100%"}},[_c('tbody',{staticClass:"table-body"},[_c('tr',{staticClass:"table-row"},[_c('td',{staticClass:"table-cell"},[_c('div',{staticClass:"add-product-btn g-flex"},[_c('a-icon',{staticStyle:{"font-size":"22px"},attrs:{"type":"plus-circle","theme":"twoTone","two-tone-color":"#52c41a"}}),_vm._v(" "),_c('span',{staticClass:"m-l-5"},[_vm._v("添加产品")])],1)]),_vm._v(" "),_c('td',{staticClass:"table-cell"},[_c('nuxt-link',{attrs:{"to":"/all"}},[_c('div',{staticClass:"product-logo text-c"},[_c('img',{attrs:{"src":"http://xuanxingbao.com/images/xxb_mark.png","alt":""}})]),_vm._v(" "),_c('div',{staticClass:"product-title text-c"},[_vm._v("\n                        ClickUp\n                      ")])]),_vm._v(" "),_c('div',{staticClass:"review-btn"},[_vm._v("\n                      免费使用\n                    ")])],1),_vm._v(" "),_c('td',{staticClass:"table-cell"},[_c('nuxt-link',{attrs:{"to":"/all"}},[_c('div',{staticClass:"product-logo text-c"},[_c('img',{attrs:{"src":"http://xuanxingbao.com/images/xxb_mark.png","alt":""}})]),_vm._v(" "),_c('div',{staticClass:"product-title text-c"},[_vm._v("\n                        ClickUp\n                      ")])]),_vm._v(" "),_c('div',{staticClass:"review-btn"},[_vm._v("\n                      免费使用\n                    ")])],1),_vm._v(" "),_c('td',{staticClass:"table-cell"},[_c('nuxt-link',{attrs:{"to":"/all"}},[_c('div',{staticClass:"product-logo text-c"},[_c('img',{attrs:{"src":"http://xuanxingbao.com/images/xxb_mark.png","alt":""}})]),_vm._v(" "),_c('div',{staticClass:"product-title text-c"},[_vm._v("\n                        ClickUp\n                      ")])]),_vm._v(" "),_c('div',{staticClass:"review-btn"},[_vm._v("\n                      免费使用\n                    ")])],1)]),_vm._v(" "),_c('tr',{staticClass:"table-row"},[_c('td',{staticClass:"table-cell"},[_c('div',{staticClass:"title"},[_vm._v("\n                      总体感受\n                    ")])]),_vm._v(" "),_c('td',{staticClass:"table-cell text-c"},[_c('div',{staticClass:"stars"},[_c('Star',{attrs:{"out-width":80,"out-height":16,"decimal":"0.8"}}),_vm._v(" "),_c('span',{staticClass:"ant-rate-text m-l-5"},[_vm._v("4.0分")])],1),_vm._v(" "),_c('div',[_vm._v("26条点评")])]),_vm._v(" "),_c('td',{staticClass:"table-cell text-c"},[_c('div',{staticClass:"stars"},[_c('Star',{attrs:{"out-width":80,"out-height":16,"decimal":"0.8"}}),_vm._v(" "),_c('span',{staticClass:"ant-rate-text m-l-5"},[_vm._v("4.0分")])],1),_vm._v(" "),_c('div',[_vm._v("26条点评")])]),_vm._v(" "),_c('td',{staticClass:"table-cell text-c"},[_c('div',{staticClass:"stars"},[_c('Star',{attrs:{"out-width":80,"out-height":16,"decimal":"0.8"}}),_vm._v(" "),_c('span',{staticClass:"ant-rate-text m-l-5"},[_vm._v("4.0分")])],1),_vm._v(" "),_c('div',[_vm._v("26条点评")])])]),_vm._v(" "),_c('tr',{staticClass:"table-row"},[_c('td',{staticClass:"table-cell",attrs:{"colspan":"4"}},[_c('div',{staticClass:"title"},[_vm._v("\n                      专项指标\n                    ")])])]),_vm._v(" "),_c('tr',{staticClass:"table-row"},[_c('td',{staticClass:"table-cell"},[_c('div',{staticClass:"sub-title text-c"},[_vm._v("\n                      功能\n                    ")])]),_vm._v(" "),_c('td',{staticClass:"table-cell text-c"},[_c('div',{staticClass:"stars"},[_c('Star',{attrs:{"out-width":80,"out-height":16,"decimal":"0.8"}}),_vm._v(" "),_c('span',{staticClass:"ant-rate-text m-l-5"},[_vm._v("4.0分")])],1),_vm._v(" "),_c('div',[_vm._v("26条点评")])]),_vm._v(" "),_c('td',{staticClass:"table-cell text-c"},[_c('div',{staticClass:"stars"},[_c('Star',{attrs:{"out-width":80,"out-height":16,"decimal":"0.8"}}),_vm._v(" "),_c('span',{staticClass:"ant-rate-text m-l-5"},[_vm._v("4.0分")])],1),_vm._v(" "),_c('div',[_vm._v("26条点评")])]),_vm._v(" "),_c('td',{staticClass:"table-cell text-c"},[_c('div',{staticClass:"stars"},[_c('Star',{attrs:{"out-width":80,"out-height":16,"decimal":"0.8"}}),_vm._v(" "),_c('span',{staticClass:"ant-rate-text m-l-5"},[_vm._v("4.0分")])],1),_vm._v(" "),_c('div',[_vm._v("26条点评")])])]),_vm._v(" "),_c('tr',{staticClass:"table-row"},[_c('td',{staticClass:"table-cell"},[_c('div',{staticClass:"sub-title text-c"},[_vm._v("\n                      性能\n                    ")])]),_vm._v(" "),_c('td',{staticClass:"table-cell text-c"},[_c('div',{staticClass:"stars"},[_c('Star',{attrs:{"out-width":80,"out-height":16,"decimal":"0.8"}}),_vm._v(" "),_c('span',{staticClass:"ant-rate-text m-l-5"},[_vm._v("4.0分")])],1),_vm._v(" "),_c('div',[_vm._v("26条点评")])]),_vm._v(" "),_c('td',{staticClass:"table-cell text-c"},[_c('div',{staticClass:"stars"},[_c('Star',{attrs:{"out-width":80,"out-height":16,"decimal":"0.8"}}),_vm._v(" "),_c('span',{staticClass:"ant-rate-text m-l-5"},[_vm._v("4.0分")])],1),_vm._v(" "),_c('div',[_vm._v("26条点评")])]),_vm._v(" "),_c('td',{staticClass:"table-cell text-c"},[_c('div',{staticClass:"stars"},[_c('Star',{attrs:{"out-width":80,"out-height":16,"decimal":"0.8"}}),_vm._v(" "),_c('span',{staticClass:"ant-rate-text m-l-5"},[_vm._v("4.0分")])],1),_vm._v(" "),_c('div',[_vm._v("26条点评")])])]),_vm._v(" "),_c('tr',{staticClass:"table-row"},[_c('td',{staticClass:"table-cell"},[_c('div',{staticClass:"sub-title text-c"},[_vm._v("\n                      可扩展性\n                    ")])]),_vm._v(" "),_c('td',{staticClass:"table-cell text-c"},[_c('div',{staticClass:"stars"},[_c('Star',{attrs:{"out-width":80,"out-height":16,"decimal":"0.8"}}),_vm._v(" "),_c('span',{staticClass:"ant-rate-text m-l-5"},[_vm._v("4.0分")])],1),_vm._v(" "),_c('div',[_vm._v("26条点评")])]),_vm._v(" "),_c('td',{staticClass:"table-cell text-c"},[_c('div',{staticClass:"stars"},[_c('Star',{attrs:{"out-width":80,"out-height":16,"decimal":"0.8"}}),_vm._v(" "),_c('span',{staticClass:"ant-rate-text m-l-5"},[_vm._v("4.0分")])],1),_vm._v(" "),_c('div',[_vm._v("26条点评")])]),_vm._v(" "),_c('td',{staticClass:"table-cell text-c"},[_c('div',{staticClass:"stars"},[_c('Star',{attrs:{"out-width":80,"out-height":16,"decimal":"0.8"}}),_vm._v(" "),_c('span',{staticClass:"ant-rate-text m-l-5"},[_vm._v("4.0分")])],1),_vm._v(" "),_c('div',[_vm._v("26条点评")])])]),_vm._v(" "),_c('tr',{staticClass:"table-row"},[_c('td',{staticClass:"table-cell"},[_c('div',{staticClass:"sub-title text-c"},[_vm._v("\n                      易部署性\n                    ")])]),_vm._v(" "),_c('td',{staticClass:"table-cell text-c"},[_c('div',{staticClass:"stars"},[_c('Star',{attrs:{"out-width":80,"out-height":16,"decimal":"0.8"}}),_vm._v(" "),_c('span',{staticClass:"ant-rate-text m-l-5"},[_vm._v("4.0分")])],1),_vm._v(" "),_c('div',[_vm._v("26条点评")])]),_vm._v(" "),_c('td',{staticClass:"table-cell text-c"},[_c('div',{staticClass:"stars"},[_c('Star',{attrs:{"out-width":80,"out-height":16,"decimal":"0.8"}}),_vm._v(" "),_c('span',{staticClass:"ant-rate-text m-l-5"},[_vm._v("4.0分")])],1),_vm._v(" "),_c('div',[_vm._v("26条点评")])]),_vm._v(" "),_c('td',{staticClass:"table-cell text-c"},[_c('div',{staticClass:"stars"},[_c('Star',{attrs:{"out-width":80,"out-height":16,"decimal":"0.8"}}),_vm._v(" "),_c('span',{staticClass:"ant-rate-text m-l-5"},[_vm._v("4.0分")])],1),_vm._v(" "),_c('div',[_vm._v("26条点评")])])]),_vm._v(" "),_c('tr',{staticClass:"table-row"},[_c('td',{staticClass:"table-cell"},[_c('div',{staticClass:"sub-title text-c"},[_vm._v("\n                      使用友好性\n                    ")])]),_vm._v(" "),_c('td',{staticClass:"table-cell text-c"},[_c('div',{staticClass:"stars"},[_c('Star',{attrs:{"out-width":80,"out-height":16,"decimal":"0.8"}}),_vm._v(" "),_c('span',{staticClass:"ant-rate-text m-l-5"},[_vm._v("4.0分")])],1),_vm._v(" "),_c('div',[_vm._v("26条点评")])]),_vm._v(" "),_c('td',{staticClass:"table-cell text-c"},[_c('div',{staticClass:"stars"},[_c('Star',{attrs:{"out-width":80,"out-height":16,"decimal":"0.8"}}),_vm._v(" "),_c('span',{staticClass:"ant-rate-text m-l-5"},[_vm._v("4.0分")])],1),_vm._v(" "),_c('div',[_vm._v("26条点评")])]),_vm._v(" "),_c('td',{staticClass:"table-cell text-c"},[_c('div',{staticClass:"stars"},[_c('Star',{attrs:{"out-width":80,"out-height":16,"decimal":"0.8"}}),_vm._v(" "),_c('span',{staticClass:"ant-rate-text m-l-5"},[_vm._v("4.0分")])],1),_vm._v(" "),_c('div',[_vm._v("26条点评")])])]),_vm._v(" "),_c('tr',{staticClass:"table-row"},[_c('td',{staticClass:"table-cell",attrs:{"colspan":"4"}},[_c('div',{staticClass:"title"},[_vm._v("\n                      功能比较\n                    ")])])]),_vm._v(" "),_c('tr',{staticClass:"table-row"},[_c('td',{staticClass:"table-cell",attrs:{"colspan":"4"}},[_c('div',{staticClass:"title2"},[_vm._v("\n                      功能分类1\n                    ")])])]),_vm._v(" "),_c('tr',{staticClass:"table-row"},[_c('td',{staticClass:"table-cell"},[_c('div',{staticClass:"sub-title text-c"},[_vm._v("\n                      功能名称1\n                    ")])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"rate"},[_c('div',{staticClass:"rate-item g-flex"},[_c('div',{staticClass:"num"},[_vm._v("\n                          关注率:38%\n                        ")]),_vm._v(" "),_c('div',{staticClass:"bar-wrap"},[_c('div',{staticClass:"bar",staticStyle:{"width":"38%"}})])]),_vm._v(" "),_c('div',{staticClass:"rate-item g-flex"},[_c('div',{staticClass:"num"},[_vm._v("\n                          关注率:57%\n                        ")]),_vm._v(" "),_c('div',{staticClass:"bar-wrap"},[_c('div',{staticClass:"bar",staticStyle:{"width":"57%"}})])]),_vm._v(" "),_c('div',{staticClass:"rate-item g-flex"},[_c('div',{staticClass:"num"},[_vm._v("\n                          关注率:43%\n                        ")]),_vm._v(" "),_c('div',{staticClass:"bar-wrap"},[_c('div',{staticClass:"bar",staticStyle:{"width":"43%"}})])])])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"rate text-c"},[_vm._v("\n                      暂无数据\n                    ")])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"rate"},[_c('div',{staticClass:"rate-item g-flex"},[_c('div',{staticClass:"num"},[_vm._v("\n                          关注率:38%\n                        ")]),_vm._v(" "),_c('div',{staticClass:"bar-wrap"},[_c('div',{staticClass:"bar",staticStyle:{"width":"38%"}})])]),_vm._v(" "),_c('div',{staticClass:"rate-item g-flex"},[_c('div',{staticClass:"num"},[_vm._v("\n                          关注率:57%\n                        ")]),_vm._v(" "),_c('div',{staticClass:"bar-wrap"},[_c('div',{staticClass:"bar",staticStyle:{"width":"57%"}})])]),_vm._v(" "),_c('div',{staticClass:"rate-item g-flex"},[_c('div',{staticClass:"num"},[_vm._v("\n                          关注率:43%\n                        ")]),_vm._v(" "),_c('div',{staticClass:"bar-wrap"},[_c('div',{staticClass:"bar",staticStyle:{"width":"43%"}})])])])])]),_vm._v(" "),_c('tr',{staticClass:"table-row"},[_c('td',{staticClass:"table-cell"},[_c('div',{staticClass:"sub-title text-c"},[_vm._v("\n                      功能名称2\n                    ")])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"rate"},[_c('div',{staticClass:"rate-item g-flex"},[_c('div',{staticClass:"num"},[_vm._v("\n                          关注率:38%\n                        ")]),_vm._v(" "),_c('div',{staticClass:"bar-wrap"},[_c('div',{staticClass:"bar",staticStyle:{"width":"38%"}})])]),_vm._v(" "),_c('div',{staticClass:"rate-item g-flex"},[_c('div',{staticClass:"num"},[_vm._v("\n                          关注率:57%\n                        ")]),_vm._v(" "),_c('div',{staticClass:"bar-wrap"},[_c('div',{staticClass:"bar",staticStyle:{"width":"57%"}})])]),_vm._v(" "),_c('div',{staticClass:"rate-item g-flex"},[_c('div',{staticClass:"num"},[_vm._v("\n                          关注率:43%\n                        ")]),_vm._v(" "),_c('div',{staticClass:"bar-wrap"},[_c('div',{staticClass:"bar",staticStyle:{"width":"43%"}})])])])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"rate"},[_c('div',{staticClass:"rate-item g-flex"},[_c('div',{staticClass:"num"},[_vm._v("\n                          关注率:38%\n                        ")]),_vm._v(" "),_c('div',{staticClass:"bar-wrap"},[_c('div',{staticClass:"bar",staticStyle:{"width":"38%"}})])]),_vm._v(" "),_c('div',{staticClass:"rate-item g-flex"},[_c('div',{staticClass:"num"},[_vm._v("\n                          关注率:57%\n                        ")]),_vm._v(" "),_c('div',{staticClass:"bar-wrap"},[_c('div',{staticClass:"bar",staticStyle:{"width":"57%"}})])]),_vm._v(" "),_c('div',{staticClass:"rate-item g-flex"},[_c('div',{staticClass:"num"},[_vm._v("\n                          关注率:43%\n                        ")]),_vm._v(" "),_c('div',{staticClass:"bar-wrap"},[_c('div',{staticClass:"bar",staticStyle:{"width":"43%"}})])])])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"rate"},[_c('div',{staticClass:"rate-item g-flex"},[_c('div',{staticClass:"num"},[_vm._v("\n                          关注率:38%\n                        ")]),_vm._v(" "),_c('div',{staticClass:"bar-wrap"},[_c('div',{staticClass:"bar",staticStyle:{"width":"38%"}})])]),_vm._v(" "),_c('div',{staticClass:"rate-item g-flex"},[_c('div',{staticClass:"num"},[_vm._v("\n                          关注率:57%\n                        ")]),_vm._v(" "),_c('div',{staticClass:"bar-wrap"},[_c('div',{staticClass:"bar",staticStyle:{"width":"57%"}})])]),_vm._v(" "),_c('div',{staticClass:"rate-item g-flex"},[_c('div',{staticClass:"num"},[_vm._v("\n                          关注率:43%\n                        ")]),_vm._v(" "),_c('div',{staticClass:"bar-wrap"},[_c('div',{staticClass:"bar",staticStyle:{"width":"43%"}})])])])])]),_vm._v(" "),_c('tr',{staticClass:"table-row"},[_c('td',{staticClass:"table-cell",attrs:{"colspan":"4"}},[_c('div',{staticClass:"title2"},[_vm._v("\n                      功能分类2\n                    ")])])]),_vm._v(" "),_c('tr',{staticClass:"table-row"},[_c('td',{staticClass:"table-cell"},[_c('div',{staticClass:"sub-title text-c"},[_vm._v("\n                      功能名称1\n                    ")])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"rate"},[_c('div',{staticClass:"rate-item g-flex"},[_c('div',{staticClass:"num"},[_vm._v("\n                          关注率:38%\n                        ")]),_vm._v(" "),_c('div',{staticClass:"bar-wrap"},[_c('div',{staticClass:"bar",staticStyle:{"width":"38%"}})])]),_vm._v(" "),_c('div',{staticClass:"rate-item g-flex"},[_c('div',{staticClass:"num"},[_vm._v("\n                          关注率:57%\n                        ")]),_vm._v(" "),_c('div',{staticClass:"bar-wrap"},[_c('div',{staticClass:"bar",staticStyle:{"width":"57%"}})])]),_vm._v(" "),_c('div',{staticClass:"rate-item g-flex"},[_c('div',{staticClass:"num"},[_vm._v("\n                          关注率:43%\n                        ")]),_vm._v(" "),_c('div',{staticClass:"bar-wrap"},[_c('div',{staticClass:"bar",staticStyle:{"width":"43%"}})])])])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"rate"},[_c('div',{staticClass:"rate-item g-flex"},[_c('div',{staticClass:"num"},[_vm._v("\n                          关注率:38%\n                        ")]),_vm._v(" "),_c('div',{staticClass:"bar-wrap"},[_c('div',{staticClass:"bar",staticStyle:{"width":"38%"}})])]),_vm._v(" "),_c('div',{staticClass:"rate-item g-flex"},[_c('div',{staticClass:"num"},[_vm._v("\n                          关注率:57%\n                        ")]),_vm._v(" "),_c('div',{staticClass:"bar-wrap"},[_c('div',{staticClass:"bar",staticStyle:{"width":"57%"}})])]),_vm._v(" "),_c('div',{staticClass:"rate-item g-flex"},[_c('div',{staticClass:"num"},[_vm._v("\n                          关注率:43%\n                        ")]),_vm._v(" "),_c('div',{staticClass:"bar-wrap"},[_c('div',{staticClass:"bar",staticStyle:{"width":"43%"}})])])])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"rate"},[_c('div',{staticClass:"rate-item g-flex"},[_c('div',{staticClass:"num"},[_vm._v("\n                          关注率:38%\n                        ")]),_vm._v(" "),_c('div',{staticClass:"bar-wrap"},[_c('div',{staticClass:"bar",staticStyle:{"width":"38%"}})])]),_vm._v(" "),_c('div',{staticClass:"rate-item g-flex"},[_c('div',{staticClass:"num"},[_vm._v("\n                          关注率:57%\n                        ")]),_vm._v(" "),_c('div',{staticClass:"bar-wrap"},[_c('div',{staticClass:"bar",staticStyle:{"width":"57%"}})])]),_vm._v(" "),_c('div',{staticClass:"rate-item g-flex"},[_c('div',{staticClass:"num"},[_vm._v("\n                          关注率:43%\n                        ")]),_vm._v(" "),_c('div',{staticClass:"bar-wrap"},[_c('div',{staticClass:"bar",staticStyle:{"width":"43%"}})])])])])]),_vm._v(" "),_c('tr',{staticClass:"table-row"},[_c('td',{staticClass:"table-cell"},[_c('div',{staticClass:"sub-title text-c"},[_vm._v("\n                      功能名称2\n                    ")])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"rate text-c"},[_vm._v("\n                      暂无数据\n                    ")])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"rate"},[_c('div',{staticClass:"rate-item g-flex"},[_c('div',{staticClass:"num"},[_vm._v("\n                          关注率:38%\n                        ")]),_vm._v(" "),_c('div',{staticClass:"bar-wrap"},[_c('div',{staticClass:"bar",staticStyle:{"width":"38%"}})])]),_vm._v(" "),_c('div',{staticClass:"rate-item g-flex"},[_c('div',{staticClass:"num"},[_vm._v("\n                          关注率:57%\n                        ")]),_vm._v(" "),_c('div',{staticClass:"bar-wrap"},[_c('div',{staticClass:"bar",staticStyle:{"width":"57%"}})])]),_vm._v(" "),_c('div',{staticClass:"rate-item g-flex"},[_c('div',{staticClass:"num"},[_vm._v("\n                          关注率:43%\n                        ")]),_vm._v(" "),_c('div',{staticClass:"bar-wrap"},[_c('div',{staticClass:"bar",staticStyle:{"width":"43%"}})])])])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"rate"},[_c('div',{staticClass:"rate-item g-flex"},[_c('div',{staticClass:"num"},[_vm._v("\n                          关注率:38%\n                        ")]),_vm._v(" "),_c('div',{staticClass:"bar-wrap"},[_c('div',{staticClass:"bar",staticStyle:{"width":"38%"}})])]),_vm._v(" "),_c('div',{staticClass:"rate-item g-flex"},[_c('div',{staticClass:"num"},[_vm._v("\n                          关注率:57%\n                        ")]),_vm._v(" "),_c('div',{staticClass:"bar-wrap"},[_c('div',{staticClass:"bar",staticStyle:{"width":"57%"}})])]),_vm._v(" "),_c('div',{staticClass:"rate-item g-flex"},[_c('div',{staticClass:"num"},[_vm._v("\n                          关注率:43%\n                        ")]),_vm._v(" "),_c('div',{staticClass:"bar-wrap"},[_c('div',{staticClass:"bar",staticStyle:{"width":"43%"}})])])])])]),_vm._v(" "),_c('tr',{staticClass:"table-row"},[_c('td',{staticClass:"table-cell"},[_c('div',{staticClass:"title2"},[_vm._v("\n                      易配置性\n                    ")])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"rate"},[_c('div',{staticClass:"rate-item g-flex"},[_c('div',{staticClass:"num"},[_vm._v("\n                          关注率:38%\n                        ")]),_vm._v(" "),_c('div',{staticClass:"bar-wrap"},[_c('div',{staticClass:"bar",staticStyle:{"width":"38%"}})])]),_vm._v(" "),_c('div',{staticClass:"rate-item g-flex"},[_c('div',{staticClass:"num"},[_vm._v("\n                          关注率:57%\n                        ")]),_vm._v(" "),_c('div',{staticClass:"bar-wrap"},[_c('div',{staticClass:"bar",staticStyle:{"width":"57%"}})])]),_vm._v(" "),_c('div',{staticClass:"rate-item g-flex"},[_c('div',{staticClass:"num"},[_vm._v("\n                          关注率:43%\n                        ")]),_vm._v(" "),_c('div',{staticClass:"bar-wrap"},[_c('div',{staticClass:"bar",staticStyle:{"width":"43%"}})])])])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"rate"},[_c('div',{staticClass:"rate-item g-flex"},[_c('div',{staticClass:"num"},[_vm._v("\n                          关注率:38%\n                        ")]),_vm._v(" "),_c('div',{staticClass:"bar-wrap"},[_c('div',{staticClass:"bar",staticStyle:{"width":"38%"}})])]),_vm._v(" "),_c('div',{staticClass:"rate-item g-flex"},[_c('div',{staticClass:"num"},[_vm._v("\n                          关注率:57%\n                        ")]),_vm._v(" "),_c('div',{staticClass:"bar-wrap"},[_c('div',{staticClass:"bar",staticStyle:{"width":"57%"}})])]),_vm._v(" "),_c('div',{staticClass:"rate-item g-flex"},[_c('div',{staticClass:"num"},[_vm._v("\n                          关注率:43%\n                        ")]),_vm._v(" "),_c('div',{staticClass:"bar-wrap"},[_c('div',{staticClass:"bar",staticStyle:{"width":"43%"}})])])])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"rate"},[_c('div',{staticClass:"rate-item g-flex"},[_c('div',{staticClass:"num"},[_vm._v("\n                          关注率:38%\n                        ")]),_vm._v(" "),_c('div',{staticClass:"bar-wrap"},[_c('div',{staticClass:"bar",staticStyle:{"width":"38%"}})])]),_vm._v(" "),_c('div',{staticClass:"rate-item g-flex"},[_c('div',{staticClass:"num"},[_vm._v("\n                          关注率:57%\n                        ")]),_vm._v(" "),_c('div',{staticClass:"bar-wrap"},[_c('div',{staticClass:"bar",staticStyle:{"width":"57%"}})])]),_vm._v(" "),_c('div',{staticClass:"rate-item g-flex"},[_c('div',{staticClass:"num"},[_vm._v("\n                          关注率:43%\n                        ")]),_vm._v(" "),_c('div',{staticClass:"bar-wrap"},[_c('div',{staticClass:"bar",staticStyle:{"width":"43%"}})])])])])]),_vm._v(" "),_c('tr',{staticClass:"table-row"},[_c('td',{staticClass:"table-cell"},[_c('div',{staticClass:"title2"},[_vm._v("\n                      定制开发\n                    ")])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"rate"},[_c('div',{staticClass:"rate-item g-flex"},[_c('div',{staticClass:"num"},[_vm._v("\n                          关注率:38%\n                        ")]),_vm._v(" "),_c('div',{staticClass:"bar-wrap"},[_c('div',{staticClass:"bar",staticStyle:{"width":"38%"}})])]),_vm._v(" "),_c('div',{staticClass:"rate-item g-flex"},[_c('div',{staticClass:"num"},[_vm._v("\n                          关注率:57%\n                        ")]),_vm._v(" "),_c('div',{staticClass:"bar-wrap"},[_c('div',{staticClass:"bar",staticStyle:{"width":"57%"}})])]),_vm._v(" "),_c('div',{staticClass:"rate-item g-flex"},[_c('div',{staticClass:"num"},[_vm._v("\n                          关注率:43%\n                        ")]),_vm._v(" "),_c('div',{staticClass:"bar-wrap"},[_c('div',{staticClass:"bar",staticStyle:{"width":"43%"}})])])])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"rate"},[_c('div',{staticClass:"rate-item g-flex"},[_c('div',{staticClass:"num"},[_vm._v("\n                          关注率:38%\n                        ")]),_vm._v(" "),_c('div',{staticClass:"bar-wrap"},[_c('div',{staticClass:"bar",staticStyle:{"width":"38%"}})])]),_vm._v(" "),_c('div',{staticClass:"rate-item g-flex"},[_c('div',{staticClass:"num"},[_vm._v("\n                          关注率:57%\n                        ")]),_vm._v(" "),_c('div',{staticClass:"bar-wrap"},[_c('div',{staticClass:"bar",staticStyle:{"width":"57%"}})])]),_vm._v(" "),_c('div',{staticClass:"rate-item g-flex"},[_c('div',{staticClass:"num"},[_vm._v("\n                          关注率:43%\n                        ")]),_vm._v(" "),_c('div',{staticClass:"bar-wrap"},[_c('div',{staticClass:"bar",staticStyle:{"width":"43%"}})])])])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"rate"},[_c('div',{staticClass:"rate-item g-flex"},[_c('div',{staticClass:"num"},[_vm._v("\n                          关注率:38%\n                        ")]),_vm._v(" "),_c('div',{staticClass:"bar-wrap"},[_c('div',{staticClass:"bar",staticStyle:{"width":"38%"}})])]),_vm._v(" "),_c('div',{staticClass:"rate-item g-flex"},[_c('div',{staticClass:"num"},[_vm._v("\n                          关注率:57%\n                        ")]),_vm._v(" "),_c('div',{staticClass:"bar-wrap"},[_c('div',{staticClass:"bar",staticStyle:{"width":"57%"}})])]),_vm._v(" "),_c('div',{staticClass:"rate-item g-flex"},[_c('div',{staticClass:"num"},[_vm._v("\n                          关注率:43%\n                        ")]),_vm._v(" "),_c('div',{staticClass:"bar-wrap"},[_c('div',{staticClass:"bar",staticStyle:{"width":"43%"}})])])])])]),_vm._v(" "),_c('tr',{staticClass:"table-row"},[_c('td',{staticClass:"table-cell",attrs:{"colspan":"4"}},[_c('div',{staticClass:"title"},[_vm._v("\n                      性能比较\n                    ")])])]),_vm._v(" "),_c('tr',{staticClass:"table-row"},[_c('td',{staticClass:"table-cell"},[_c('div',{staticClass:"sub-title text-c"},[_vm._v("\n                      计算性能\n                    ")])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"rate"},[_c('div',{staticClass:"rate-item g-flex"},[_c('div',{staticClass:"num"},[_vm._v("\n                          关注率:38%\n                        ")]),_vm._v(" "),_c('div',{staticClass:"bar-wrap"},[_c('div',{staticClass:"bar",staticStyle:{"width":"38%"}})])]),_vm._v(" "),_c('div',{staticClass:"rate-item g-flex"},[_c('div',{staticClass:"num"},[_vm._v("\n                          关注率:57%\n                        ")]),_vm._v(" "),_c('div',{staticClass:"bar-wrap"},[_c('div',{staticClass:"bar",staticStyle:{"width":"57%"}})])]),_vm._v(" "),_c('div',{staticClass:"rate-item g-flex"},[_c('div',{staticClass:"num"},[_vm._v("\n                          关注率:43%\n                        ")]),_vm._v(" "),_c('div',{staticClass:"bar-wrap"},[_c('div',{staticClass:"bar",staticStyle:{"width":"43%"}})])])])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"rate"},[_c('div',{staticClass:"rate-item g-flex"},[_c('div',{staticClass:"num"},[_vm._v("\n                          关注率:38%\n                        ")]),_vm._v(" "),_c('div',{staticClass:"bar-wrap"},[_c('div',{staticClass:"bar",staticStyle:{"width":"38%"}})])]),_vm._v(" "),_c('div',{staticClass:"rate-item g-flex"},[_c('div',{staticClass:"num"},[_vm._v("\n                          关注率:57%\n                        ")]),_vm._v(" "),_c('div',{staticClass:"bar-wrap"},[_c('div',{staticClass:"bar",staticStyle:{"width":"57%"}})])]),_vm._v(" "),_c('div',{staticClass:"rate-item g-flex"},[_c('div',{staticClass:"num"},[_vm._v("\n                          关注率:43%\n                        ")]),_vm._v(" "),_c('div',{staticClass:"bar-wrap"},[_c('div',{staticClass:"bar",staticStyle:{"width":"43%"}})])])])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"rate"},[_c('div',{staticClass:"rate-item g-flex"},[_c('div',{staticClass:"num"},[_vm._v("\n                          关注率:38%\n                        ")]),_vm._v(" "),_c('div',{staticClass:"bar-wrap"},[_c('div',{staticClass:"bar",staticStyle:{"width":"38%"}})])]),_vm._v(" "),_c('div',{staticClass:"rate-item g-flex"},[_c('div',{staticClass:"num"},[_vm._v("\n                          关注率:57%\n                        ")]),_vm._v(" "),_c('div',{staticClass:"bar-wrap"},[_c('div',{staticClass:"bar",staticStyle:{"width":"57%"}})])]),_vm._v(" "),_c('div',{staticClass:"rate-item g-flex"},[_c('div',{staticClass:"num"},[_vm._v("\n                          关注率:43%\n                        ")]),_vm._v(" "),_c('div',{staticClass:"bar-wrap"},[_c('div',{staticClass:"bar",staticStyle:{"width":"43%"}})])])])])]),_vm._v(" "),_c('tr',{staticClass:"table-row"},[_c('td',{staticClass:"table-cell"},[_c('div',{staticClass:"sub-title text-c"},[_vm._v("\n                      稳定性\n                    ")])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"rate"},[_c('div',{staticClass:"rate-item g-flex"},[_c('div',{staticClass:"num"},[_vm._v("\n                          关注率:38%\n                        ")]),_vm._v(" "),_c('div',{staticClass:"bar-wrap"},[_c('div',{staticClass:"bar",staticStyle:{"width":"38%"}})])]),_vm._v(" "),_c('div',{staticClass:"rate-item g-flex"},[_c('div',{staticClass:"num"},[_vm._v("\n                          关注率:57%\n                        ")]),_vm._v(" "),_c('div',{staticClass:"bar-wrap"},[_c('div',{staticClass:"bar",staticStyle:{"width":"57%"}})])]),_vm._v(" "),_c('div',{staticClass:"rate-item g-flex"},[_c('div',{staticClass:"num"},[_vm._v("\n                          关注率:43%\n                        ")]),_vm._v(" "),_c('div',{staticClass:"bar-wrap"},[_c('div',{staticClass:"bar",staticStyle:{"width":"43%"}})])])])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"rate"},[_c('div',{staticClass:"rate-item g-flex"},[_c('div',{staticClass:"num"},[_vm._v("\n                          关注率:38%\n                        ")]),_vm._v(" "),_c('div',{staticClass:"bar-wrap"},[_c('div',{staticClass:"bar",staticStyle:{"width":"38%"}})])]),_vm._v(" "),_c('div',{staticClass:"rate-item g-flex"},[_c('div',{staticClass:"num"},[_vm._v("\n                          关注率:57%\n                        ")]),_vm._v(" "),_c('div',{staticClass:"bar-wrap"},[_c('div',{staticClass:"bar",staticStyle:{"width":"57%"}})])]),_vm._v(" "),_c('div',{staticClass:"rate-item g-flex"},[_c('div',{staticClass:"num"},[_vm._v("\n                          关注率:43%\n                        ")]),_vm._v(" "),_c('div',{staticClass:"bar-wrap"},[_c('div',{staticClass:"bar",staticStyle:{"width":"43%"}})])])])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"rate"},[_c('div',{staticClass:"rate-item g-flex"},[_c('div',{staticClass:"num"},[_vm._v("\n                          关注率:38%\n                        ")]),_vm._v(" "),_c('div',{staticClass:"bar-wrap"},[_c('div',{staticClass:"bar",staticStyle:{"width":"38%"}})])]),_vm._v(" "),_c('div',{staticClass:"rate-item g-flex"},[_c('div',{staticClass:"num"},[_vm._v("\n                          关注率:57%\n                        ")]),_vm._v(" "),_c('div',{staticClass:"bar-wrap"},[_c('div',{staticClass:"bar",staticStyle:{"width":"57%"}})])]),_vm._v(" "),_c('div',{staticClass:"rate-item g-flex"},[_c('div',{staticClass:"num"},[_vm._v("\n                          关注率:43%\n                        ")]),_vm._v(" "),_c('div',{staticClass:"bar-wrap"},[_c('div',{staticClass:"bar",staticStyle:{"width":"43%"}})])])])])]),_vm._v(" "),_c('tr',{staticClass:"table-row"},[_c('td',{staticClass:"table-cell"},[_c('div',{staticClass:"sub-title text-c"},[_vm._v("\n                      可靠性\n                    ")])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"rate"},[_c('div',{staticClass:"rate-item g-flex"},[_c('div',{staticClass:"num"},[_vm._v("\n                          关注率:38%\n                        ")]),_vm._v(" "),_c('div',{staticClass:"bar-wrap"},[_c('div',{staticClass:"bar",staticStyle:{"width":"38%"}})])]),_vm._v(" "),_c('div',{staticClass:"rate-item g-flex"},[_c('div',{staticClass:"num"},[_vm._v("\n                          关注率:57%\n                        ")]),_vm._v(" "),_c('div',{staticClass:"bar-wrap"},[_c('div',{staticClass:"bar",staticStyle:{"width":"57%"}})])]),_vm._v(" "),_c('div',{staticClass:"rate-item g-flex"},[_c('div',{staticClass:"num"},[_vm._v("\n                          关注率:43%\n                        ")]),_vm._v(" "),_c('div',{staticClass:"bar-wrap"},[_c('div',{staticClass:"bar",staticStyle:{"width":"43%"}})])])])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"rate"},[_c('div',{staticClass:"rate-item g-flex"},[_c('div',{staticClass:"num"},[_vm._v("\n                          关注率:38%\n                        ")]),_vm._v(" "),_c('div',{staticClass:"bar-wrap"},[_c('div',{staticClass:"bar",staticStyle:{"width":"38%"}})])]),_vm._v(" "),_c('div',{staticClass:"rate-item g-flex"},[_c('div',{staticClass:"num"},[_vm._v("\n                          关注率:57%\n                        ")]),_vm._v(" "),_c('div',{staticClass:"bar-wrap"},[_c('div',{staticClass:"bar",staticStyle:{"width":"57%"}})])]),_vm._v(" "),_c('div',{staticClass:"rate-item g-flex"},[_c('div',{staticClass:"num"},[_vm._v("\n                          关注率:43%\n                        ")]),_vm._v(" "),_c('div',{staticClass:"bar-wrap"},[_c('div',{staticClass:"bar",staticStyle:{"width":"43%"}})])])])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"rate"},[_c('div',{staticClass:"rate-item g-flex"},[_c('div',{staticClass:"num"},[_vm._v("\n                          关注率:38%\n                        ")]),_vm._v(" "),_c('div',{staticClass:"bar-wrap"},[_c('div',{staticClass:"bar",staticStyle:{"width":"38%"}})])]),_vm._v(" "),_c('div',{staticClass:"rate-item g-flex"},[_c('div',{staticClass:"num"},[_vm._v("\n                          关注率:57%\n                        ")]),_vm._v(" "),_c('div',{staticClass:"bar-wrap"},[_c('div',{staticClass:"bar",staticStyle:{"width":"57%"}})])]),_vm._v(" "),_c('div',{staticClass:"rate-item g-flex"},[_c('div',{staticClass:"num"},[_vm._v("\n                          关注率:43%\n                        ")]),_vm._v(" "),_c('div',{staticClass:"bar-wrap"},[_c('div',{staticClass:"bar",staticStyle:{"width":"43%"}})])])])])]),_vm._v(" "),_c('tr',{staticClass:"table-row"},[_c('td',{staticClass:"table-cell"},[_c('div',{staticClass:"sub-title text-c"},[_vm._v("\n                      可用性\n                    ")])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"rate"},[_c('div',{staticClass:"rate-item g-flex"},[_c('div',{staticClass:"num"},[_vm._v("\n                          关注率:38%\n                        ")]),_vm._v(" "),_c('div',{staticClass:"bar-wrap"},[_c('div',{staticClass:"bar",staticStyle:{"width":"38%"}})])]),_vm._v(" "),_c('div',{staticClass:"rate-item g-flex"},[_c('div',{staticClass:"num"},[_vm._v("\n                          关注率:57%\n                        ")]),_vm._v(" "),_c('div',{staticClass:"bar-wrap"},[_c('div',{staticClass:"bar",staticStyle:{"width":"57%"}})])]),_vm._v(" "),_c('div',{staticClass:"rate-item g-flex"},[_c('div',{staticClass:"num"},[_vm._v("\n                          关注率:43%\n                        ")]),_vm._v(" "),_c('div',{staticClass:"bar-wrap"},[_c('div',{staticClass:"bar",staticStyle:{"width":"43%"}})])])])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"rate"},[_c('div',{staticClass:"rate-item g-flex"},[_c('div',{staticClass:"num"},[_vm._v("\n                          关注率:38%\n                        ")]),_vm._v(" "),_c('div',{staticClass:"bar-wrap"},[_c('div',{staticClass:"bar",staticStyle:{"width":"38%"}})])]),_vm._v(" "),_c('div',{staticClass:"rate-item g-flex"},[_c('div',{staticClass:"num"},[_vm._v("\n                          关注率:57%\n                        ")]),_vm._v(" "),_c('div',{staticClass:"bar-wrap"},[_c('div',{staticClass:"bar",staticStyle:{"width":"57%"}})])]),_vm._v(" "),_c('div',{staticClass:"rate-item g-flex"},[_c('div',{staticClass:"num"},[_vm._v("\n                          关注率:43%\n                        ")]),_vm._v(" "),_c('div',{staticClass:"bar-wrap"},[_c('div',{staticClass:"bar",staticStyle:{"width":"43%"}})])])])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"rate"},[_c('div',{staticClass:"rate-item g-flex"},[_c('div',{staticClass:"num"},[_vm._v("\n                          关注率:38%\n                        ")]),_vm._v(" "),_c('div',{staticClass:"bar-wrap"},[_c('div',{staticClass:"bar",staticStyle:{"width":"38%"}})])]),_vm._v(" "),_c('div',{staticClass:"rate-item g-flex"},[_c('div',{staticClass:"num"},[_vm._v("\n                          关注率:57%\n                        ")]),_vm._v(" "),_c('div',{staticClass:"bar-wrap"},[_c('div',{staticClass:"bar",staticStyle:{"width":"57%"}})])]),_vm._v(" "),_c('div',{staticClass:"rate-item g-flex"},[_c('div',{staticClass:"num"},[_vm._v("\n                          关注率:43%\n                        ")]),_vm._v(" "),_c('div',{staticClass:"bar-wrap"},[_c('div',{staticClass:"bar",staticStyle:{"width":"43%"}})])])])])]),_vm._v(" "),_c('tr',{staticClass:"table-row"},[_c('td',{staticClass:"table-cell",attrs:{"colspan":"4"}},[_c('div',{staticClass:"title"},[_vm._v("\n                      易于使用性比较\n                    ")])])]),_vm._v(" "),_c('tr',{staticClass:"table-row"},[_c('td',{staticClass:"table-cell"},[_c('div',{staticClass:"sub-title text-c"},[_vm._v("\n                      兼容性\n                    ")])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"rate"},[_c('div',{staticClass:"rate-item g-flex"},[_c('div',{staticClass:"num"},[_vm._v("\n                          关注率:38%\n                        ")]),_vm._v(" "),_c('div',{staticClass:"bar-wrap"},[_c('div',{staticClass:"bar",staticStyle:{"width":"38%"}})])]),_vm._v(" "),_c('div',{staticClass:"rate-item g-flex"},[_c('div',{staticClass:"num"},[_vm._v("\n                          关注率:57%\n                        ")]),_vm._v(" "),_c('div',{staticClass:"bar-wrap"},[_c('div',{staticClass:"bar",staticStyle:{"width":"57%"}})])]),_vm._v(" "),_c('div',{staticClass:"rate-item g-flex"},[_c('div',{staticClass:"num"},[_vm._v("\n                          关注率:43%\n                        ")]),_vm._v(" "),_c('div',{staticClass:"bar-wrap"},[_c('div',{staticClass:"bar",staticStyle:{"width":"43%"}})])])])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"rate"},[_c('div',{staticClass:"rate-item g-flex"},[_c('div',{staticClass:"num"},[_vm._v("\n                          关注率:38%\n                        ")]),_vm._v(" "),_c('div',{staticClass:"bar-wrap"},[_c('div',{staticClass:"bar",staticStyle:{"width":"38%"}})])]),_vm._v(" "),_c('div',{staticClass:"rate-item g-flex"},[_c('div',{staticClass:"num"},[_vm._v("\n                          关注率:57%\n                        ")]),_vm._v(" "),_c('div',{staticClass:"bar-wrap"},[_c('div',{staticClass:"bar",staticStyle:{"width":"57%"}})])]),_vm._v(" "),_c('div',{staticClass:"rate-item g-flex"},[_c('div',{staticClass:"num"},[_vm._v("\n                          关注率:43%\n                        ")]),_vm._v(" "),_c('div',{staticClass:"bar-wrap"},[_c('div',{staticClass:"bar",staticStyle:{"width":"43%"}})])])])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"rate"},[_c('div',{staticClass:"rate-item g-flex"},[_c('div',{staticClass:"num"},[_vm._v("\n                          关注率:38%\n                        ")]),_vm._v(" "),_c('div',{staticClass:"bar-wrap"},[_c('div',{staticClass:"bar",staticStyle:{"width":"38%"}})])]),_vm._v(" "),_c('div',{staticClass:"rate-item g-flex"},[_c('div',{staticClass:"num"},[_vm._v("\n                          关注率:57%\n                        ")]),_vm._v(" "),_c('div',{staticClass:"bar-wrap"},[_c('div',{staticClass:"bar",staticStyle:{"width":"57%"}})])]),_vm._v(" "),_c('div',{staticClass:"rate-item g-flex"},[_c('div',{staticClass:"num"},[_vm._v("\n                          关注率:43%\n                        ")]),_vm._v(" "),_c('div',{staticClass:"bar-wrap"},[_c('div',{staticClass:"bar",staticStyle:{"width":"43%"}})])])])])]),_vm._v(" "),_c('tr',{staticClass:"table-row"},[_c('td',{staticClass:"table-cell"},[_c('div',{staticClass:"sub-title text-c"},[_vm._v("\n                      易操作性\n                    ")])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"rate"},[_c('div',{staticClass:"rate-item g-flex"},[_c('div',{staticClass:"num"},[_vm._v("\n                          关注率:38%\n                        ")]),_vm._v(" "),_c('div',{staticClass:"bar-wrap"},[_c('div',{staticClass:"bar",staticStyle:{"width":"38%"}})])]),_vm._v(" "),_c('div',{staticClass:"rate-item g-flex"},[_c('div',{staticClass:"num"},[_vm._v("\n                          关注率:57%\n                        ")]),_vm._v(" "),_c('div',{staticClass:"bar-wrap"},[_c('div',{staticClass:"bar",staticStyle:{"width":"57%"}})])]),_vm._v(" "),_c('div',{staticClass:"rate-item g-flex"},[_c('div',{staticClass:"num"},[_vm._v("\n                          关注率:43%\n                        ")]),_vm._v(" "),_c('div',{staticClass:"bar-wrap"},[_c('div',{staticClass:"bar",staticStyle:{"width":"43%"}})])])])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"rate"},[_c('div',{staticClass:"rate-item g-flex"},[_c('div',{staticClass:"num"},[_vm._v("\n                          关注率:38%\n                        ")]),_vm._v(" "),_c('div',{staticClass:"bar-wrap"},[_c('div',{staticClass:"bar",staticStyle:{"width":"38%"}})])]),_vm._v(" "),_c('div',{staticClass:"rate-item g-flex"},[_c('div',{staticClass:"num"},[_vm._v("\n                          关注率:57%\n                        ")]),_vm._v(" "),_c('div',{staticClass:"bar-wrap"},[_c('div',{staticClass:"bar",staticStyle:{"width":"57%"}})])]),_vm._v(" "),_c('div',{staticClass:"rate-item g-flex"},[_c('div',{staticClass:"num"},[_vm._v("\n                          关注率:43%\n                        ")]),_vm._v(" "),_c('div',{staticClass:"bar-wrap"},[_c('div',{staticClass:"bar",staticStyle:{"width":"43%"}})])])])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"rate"},[_c('div',{staticClass:"rate-item g-flex"},[_c('div',{staticClass:"num"},[_vm._v("\n                          关注率:38%\n                        ")]),_vm._v(" "),_c('div',{staticClass:"bar-wrap"},[_c('div',{staticClass:"bar",staticStyle:{"width":"38%"}})])]),_vm._v(" "),_c('div',{staticClass:"rate-item g-flex"},[_c('div',{staticClass:"num"},[_vm._v("\n                          关注率:57%\n                        ")]),_vm._v(" "),_c('div',{staticClass:"bar-wrap"},[_c('div',{staticClass:"bar",staticStyle:{"width":"57%"}})])]),_vm._v(" "),_c('div',{staticClass:"rate-item g-flex"},[_c('div',{staticClass:"num"},[_vm._v("\n                          关注率:43%\n                        ")]),_vm._v(" "),_c('div',{staticClass:"bar-wrap"},[_c('div',{staticClass:"bar",staticStyle:{"width":"43%"}})])])])])]),_vm._v(" "),_c('tr',{staticClass:"table-row"},[_c('td',{staticClass:"table-cell"},[_c('div',{staticClass:"sub-title text-c"},[_vm._v("\n                      易维护性\n                    ")])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"rate"},[_c('div',{staticClass:"rate-item g-flex"},[_c('div',{staticClass:"num"},[_vm._v("\n                          关注率:38%\n                        ")]),_vm._v(" "),_c('div',{staticClass:"bar-wrap"},[_c('div',{staticClass:"bar",staticStyle:{"width":"38%"}})])]),_vm._v(" "),_c('div',{staticClass:"rate-item g-flex"},[_c('div',{staticClass:"num"},[_vm._v("\n                          关注率:57%\n                        ")]),_vm._v(" "),_c('div',{staticClass:"bar-wrap"},[_c('div',{staticClass:"bar",staticStyle:{"width":"57%"}})])]),_vm._v(" "),_c('div',{staticClass:"rate-item g-flex"},[_c('div',{staticClass:"num"},[_vm._v("\n                          关注率:43%\n                        ")]),_vm._v(" "),_c('div',{staticClass:"bar-wrap"},[_c('div',{staticClass:"bar",staticStyle:{"width":"43%"}})])])])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"rate"},[_c('div',{staticClass:"rate-item g-flex"},[_c('div',{staticClass:"num"},[_vm._v("\n                          关注率:38%\n                        ")]),_vm._v(" "),_c('div',{staticClass:"bar-wrap"},[_c('div',{staticClass:"bar",staticStyle:{"width":"38%"}})])]),_vm._v(" "),_c('div',{staticClass:"rate-item g-flex"},[_c('div',{staticClass:"num"},[_vm._v("\n                          关注率:57%\n                        ")]),_vm._v(" "),_c('div',{staticClass:"bar-wrap"},[_c('div',{staticClass:"bar",staticStyle:{"width":"57%"}})])]),_vm._v(" "),_c('div',{staticClass:"rate-item g-flex"},[_c('div',{staticClass:"num"},[_vm._v("\n                          关注率:43%\n                        ")]),_vm._v(" "),_c('div',{staticClass:"bar-wrap"},[_c('div',{staticClass:"bar",staticStyle:{"width":"43%"}})])])])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"rate"},[_c('div',{staticClass:"rate-item g-flex"},[_c('div',{staticClass:"num"},[_vm._v("\n                          关注率:38%\n                        ")]),_vm._v(" "),_c('div',{staticClass:"bar-wrap"},[_c('div',{staticClass:"bar",staticStyle:{"width":"38%"}})])]),_vm._v(" "),_c('div',{staticClass:"rate-item g-flex"},[_c('div',{staticClass:"num"},[_vm._v("\n                          关注率:57%\n                        ")]),_vm._v(" "),_c('div',{staticClass:"bar-wrap"},[_c('div',{staticClass:"bar",staticStyle:{"width":"57%"}})])]),_vm._v(" "),_c('div',{staticClass:"rate-item g-flex"},[_c('div',{staticClass:"num"},[_vm._v("\n                          关注率:43%\n                        ")]),_vm._v(" "),_c('div',{staticClass:"bar-wrap"},[_c('div',{staticClass:"bar",staticStyle:{"width":"43%"}})])])])])]),_vm._v(" "),_c('tr',{staticClass:"table-row"},[_c('td',{staticClass:"table-cell",attrs:{"colspan":"4"}},[_c('div',{staticClass:"title"},[_vm._v("\n                      成本满意度比较\n                    ")])])]),_vm._v(" "),_c('tr',{staticClass:"table-row"},[_c('td',{staticClass:"table-cell"},[_c('div',{staticClass:"sub-title text-c"},[_vm._v("\n                      购买成本\n                    ")])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"rate"},[_c('div',{staticClass:"rate-item g-flex"},[_c('div',{staticClass:"num"},[_vm._v("\n                          关注率:38%\n                        ")]),_vm._v(" "),_c('div',{staticClass:"bar-wrap"},[_c('div',{staticClass:"bar",staticStyle:{"width":"38%"}})])]),_vm._v(" "),_c('div',{staticClass:"rate-item g-flex"},[_c('div',{staticClass:"num"},[_vm._v("\n                          关注率:57%\n                        ")]),_vm._v(" "),_c('div',{staticClass:"bar-wrap"},[_c('div',{staticClass:"bar",staticStyle:{"width":"57%"}})])]),_vm._v(" "),_c('div',{staticClass:"rate-item g-flex"},[_c('div',{staticClass:"num"},[_vm._v("\n                          关注率:43%\n                        ")]),_vm._v(" "),_c('div',{staticClass:"bar-wrap"},[_c('div',{staticClass:"bar",staticStyle:{"width":"43%"}})])])])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"rate"},[_c('div',{staticClass:"rate-item g-flex"},[_c('div',{staticClass:"num"},[_vm._v("\n                          关注率:38%\n                        ")]),_vm._v(" "),_c('div',{staticClass:"bar-wrap"},[_c('div',{staticClass:"bar",staticStyle:{"width":"38%"}})])]),_vm._v(" "),_c('div',{staticClass:"rate-item g-flex"},[_c('div',{staticClass:"num"},[_vm._v("\n                          关注率:57%\n                        ")]),_vm._v(" "),_c('div',{staticClass:"bar-wrap"},[_c('div',{staticClass:"bar",staticStyle:{"width":"57%"}})])]),_vm._v(" "),_c('div',{staticClass:"rate-item g-flex"},[_c('div',{staticClass:"num"},[_vm._v("\n                          关注率:43%\n                        ")]),_vm._v(" "),_c('div',{staticClass:"bar-wrap"},[_c('div',{staticClass:"bar",staticStyle:{"width":"43%"}})])])])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"rate"},[_c('div',{staticClass:"rate-item g-flex"},[_c('div',{staticClass:"num"},[_vm._v("\n                          关注率:38%\n                        ")]),_vm._v(" "),_c('div',{staticClass:"bar-wrap"},[_c('div',{staticClass:"bar",staticStyle:{"width":"38%"}})])]),_vm._v(" "),_c('div',{staticClass:"rate-item g-flex"},[_c('div',{staticClass:"num"},[_vm._v("\n                          关注率:57%\n                        ")]),_vm._v(" "),_c('div',{staticClass:"bar-wrap"},[_c('div',{staticClass:"bar",staticStyle:{"width":"57%"}})])]),_vm._v(" "),_c('div',{staticClass:"rate-item g-flex"},[_c('div',{staticClass:"num"},[_vm._v("\n                          关注率:43%\n                        ")]),_vm._v(" "),_c('div',{staticClass:"bar-wrap"},[_c('div',{staticClass:"bar",staticStyle:{"width":"43%"}})])])])])]),_vm._v(" "),_c('tr',{staticClass:"table-row"},[_c('td',{staticClass:"table-cell"},[_c('div',{staticClass:"sub-title text-c"},[_vm._v("\n                      建设成本\n                    ")])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"rate"},[_c('div',{staticClass:"rate-item g-flex"},[_c('div',{staticClass:"num"},[_vm._v("\n                          关注率:38%\n                        ")]),_vm._v(" "),_c('div',{staticClass:"bar-wrap"},[_c('div',{staticClass:"bar",staticStyle:{"width":"38%"}})])]),_vm._v(" "),_c('div',{staticClass:"rate-item g-flex"},[_c('div',{staticClass:"num"},[_vm._v("\n                          关注率:57%\n                        ")]),_vm._v(" "),_c('div',{staticClass:"bar-wrap"},[_c('div',{staticClass:"bar",staticStyle:{"width":"57%"}})])]),_vm._v(" "),_c('div',{staticClass:"rate-item g-flex"},[_c('div',{staticClass:"num"},[_vm._v("\n                          关注率:43%\n                        ")]),_vm._v(" "),_c('div',{staticClass:"bar-wrap"},[_c('div',{staticClass:"bar",staticStyle:{"width":"43%"}})])])])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"rate"},[_c('div',{staticClass:"rate-item g-flex"},[_c('div',{staticClass:"num"},[_vm._v("\n                          关注率:38%\n                        ")]),_vm._v(" "),_c('div',{staticClass:"bar-wrap"},[_c('div',{staticClass:"bar",staticStyle:{"width":"38%"}})])]),_vm._v(" "),_c('div',{staticClass:"rate-item g-flex"},[_c('div',{staticClass:"num"},[_vm._v("\n                          关注率:57%\n                        ")]),_vm._v(" "),_c('div',{staticClass:"bar-wrap"},[_c('div',{staticClass:"bar",staticStyle:{"width":"57%"}})])]),_vm._v(" "),_c('div',{staticClass:"rate-item g-flex"},[_c('div',{staticClass:"num"},[_vm._v("\n                          关注率:43%\n                        ")]),_vm._v(" "),_c('div',{staticClass:"bar-wrap"},[_c('div',{staticClass:"bar",staticStyle:{"width":"43%"}})])])])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"rate"},[_c('div',{staticClass:"rate-item g-flex"},[_c('div',{staticClass:"num"},[_vm._v("\n                          关注率:38%\n                        ")]),_vm._v(" "),_c('div',{staticClass:"bar-wrap"},[_c('div',{staticClass:"bar",staticStyle:{"width":"38%"}})])]),_vm._v(" "),_c('div',{staticClass:"rate-item g-flex"},[_c('div',{staticClass:"num"},[_vm._v("\n                          关注率:57%\n                        ")]),_vm._v(" "),_c('div',{staticClass:"bar-wrap"},[_c('div',{staticClass:"bar",staticStyle:{"width":"57%"}})])]),_vm._v(" "),_c('div',{staticClass:"rate-item g-flex"},[_c('div',{staticClass:"num"},[_vm._v("\n                          关注率:43%\n                        ")]),_vm._v(" "),_c('div',{staticClass:"bar-wrap"},[_c('div',{staticClass:"bar",staticStyle:{"width":"43%"}})])])])])]),_vm._v(" "),_c('tr',{staticClass:"table-row"},[_c('td',{staticClass:"table-cell",attrs:{"colspan":"4"}},[_c('div',{staticClass:"title"},[_vm._v("\n                      案例与服务比较\n                    ")])])]),_vm._v(" "),_c('tr',{staticClass:"table-row"},[_c('td',{staticClass:"table-cell"},[_c('div',{staticClass:"sub-title text-c"},[_vm._v("\n                      售后服务\n                    ")])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"rate"},[_c('div',{staticClass:"rate-item g-flex"},[_c('div',{staticClass:"num"},[_vm._v("\n                          关注率:38%\n                        ")]),_vm._v(" "),_c('div',{staticClass:"bar-wrap"},[_c('div',{staticClass:"bar",staticStyle:{"width":"38%"}})])]),_vm._v(" "),_c('div',{staticClass:"rate-item g-flex"},[_c('div',{staticClass:"num"},[_vm._v("\n                          关注率:57%\n                        ")]),_vm._v(" "),_c('div',{staticClass:"bar-wrap"},[_c('div',{staticClass:"bar",staticStyle:{"width":"57%"}})])]),_vm._v(" "),_c('div',{staticClass:"rate-item g-flex"},[_c('div',{staticClass:"num"},[_vm._v("\n                          关注率:43%\n                        ")]),_vm._v(" "),_c('div',{staticClass:"bar-wrap"},[_c('div',{staticClass:"bar",staticStyle:{"width":"43%"}})])])])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"rate"},[_c('div',{staticClass:"rate-item g-flex"},[_c('div',{staticClass:"num"},[_vm._v("\n                          关注率:38%\n                        ")]),_vm._v(" "),_c('div',{staticClass:"bar-wrap"},[_c('div',{staticClass:"bar",staticStyle:{"width":"38%"}})])]),_vm._v(" "),_c('div',{staticClass:"rate-item g-flex"},[_c('div',{staticClass:"num"},[_vm._v("\n                          关注率:57%\n                        ")]),_vm._v(" "),_c('div',{staticClass:"bar-wrap"},[_c('div',{staticClass:"bar",staticStyle:{"width":"57%"}})])]),_vm._v(" "),_c('div',{staticClass:"rate-item g-flex"},[_c('div',{staticClass:"num"},[_vm._v("\n                          关注率:43%\n                        ")]),_vm._v(" "),_c('div',{staticClass:"bar-wrap"},[_c('div',{staticClass:"bar",staticStyle:{"width":"43%"}})])])])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"rate"},[_c('div',{staticClass:"rate-item g-flex"},[_c('div',{staticClass:"num"},[_vm._v("\n                          关注率:38%\n                        ")]),_vm._v(" "),_c('div',{staticClass:"bar-wrap"},[_c('div',{staticClass:"bar",staticStyle:{"width":"38%"}})])]),_vm._v(" "),_c('div',{staticClass:"rate-item g-flex"},[_c('div',{staticClass:"num"},[_vm._v("\n                          关注率:57%\n                        ")]),_vm._v(" "),_c('div',{staticClass:"bar-wrap"},[_c('div',{staticClass:"bar",staticStyle:{"width":"57%"}})])]),_vm._v(" "),_c('div',{staticClass:"rate-item g-flex"},[_c('div',{staticClass:"num"},[_vm._v("\n                          关注率:43%\n                        ")]),_vm._v(" "),_c('div',{staticClass:"bar-wrap"},[_c('div',{staticClass:"bar",staticStyle:{"width":"43%"}})])])])])]),_vm._v(" "),_c('tr',{staticClass:"table-row"},[_c('td',{staticClass:"table-cell"},[_c('div',{staticClass:"sub-title text-c"},[_vm._v("\n                      客户案例\n                    ")])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"rate"},[_c('div',{staticClass:"rate-item g-flex"},[_c('div',{staticClass:"num"},[_vm._v("\n                          关注率:38%\n                        ")]),_vm._v(" "),_c('div',{staticClass:"bar-wrap"},[_c('div',{staticClass:"bar",staticStyle:{"width":"38%"}})])]),_vm._v(" "),_c('div',{staticClass:"rate-item g-flex"},[_c('div',{staticClass:"num"},[_vm._v("\n                          关注率:57%\n                        ")]),_vm._v(" "),_c('div',{staticClass:"bar-wrap"},[_c('div',{staticClass:"bar",staticStyle:{"width":"57%"}})])]),_vm._v(" "),_c('div',{staticClass:"rate-item g-flex"},[_c('div',{staticClass:"num"},[_vm._v("\n                          关注率:43%\n                        ")]),_vm._v(" "),_c('div',{staticClass:"bar-wrap"},[_c('div',{staticClass:"bar",staticStyle:{"width":"43%"}})])])])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"rate"},[_c('div',{staticClass:"rate-item g-flex"},[_c('div',{staticClass:"num"},[_vm._v("\n                          关注率:38%\n                        ")]),_vm._v(" "),_c('div',{staticClass:"bar-wrap"},[_c('div',{staticClass:"bar",staticStyle:{"width":"38%"}})])]),_vm._v(" "),_c('div',{staticClass:"rate-item g-flex"},[_c('div',{staticClass:"num"},[_vm._v("\n                          关注率:57%\n                        ")]),_vm._v(" "),_c('div',{staticClass:"bar-wrap"},[_c('div',{staticClass:"bar",staticStyle:{"width":"57%"}})])]),_vm._v(" "),_c('div',{staticClass:"rate-item g-flex"},[_c('div',{staticClass:"num"},[_vm._v("\n                          关注率:43%\n                        ")]),_vm._v(" "),_c('div',{staticClass:"bar-wrap"},[_c('div',{staticClass:"bar",staticStyle:{"width":"43%"}})])])])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"rate"},[_c('div',{staticClass:"rate-item g-flex"},[_c('div',{staticClass:"num"},[_vm._v("\n                          关注率:38%\n                        ")]),_vm._v(" "),_c('div',{staticClass:"bar-wrap"},[_c('div',{staticClass:"bar",staticStyle:{"width":"38%"}})])]),_vm._v(" "),_c('div',{staticClass:"rate-item g-flex"},[_c('div',{staticClass:"num"},[_vm._v("\n                          关注率:57%\n                        ")]),_vm._v(" "),_c('div',{staticClass:"bar-wrap"},[_c('div',{staticClass:"bar",staticStyle:{"width":"57%"}})])]),_vm._v(" "),_c('div',{staticClass:"rate-item g-flex"},[_c('div',{staticClass:"num"},[_vm._v("\n                          关注率:43%\n                        ")]),_vm._v(" "),_c('div',{staticClass:"bar-wrap"},[_c('div',{staticClass:"bar",staticStyle:{"width":"43%"}})])])])])]),_vm._v(" "),_c('tr',{staticClass:"table-row"},[_c('td',{staticClass:"table-cell",attrs:{"colspan":"4"}},[_c('div',{staticClass:"title"},[_vm._v("\n                      热门点评\n                    ")])])]),_vm._v(" "),_c('tr',{staticClass:"table-row"},[_c('td'),_vm._v(" "),_c('td',{staticClass:"table-cell"},[_c('div',{staticClass:"reviews"},[_c('div',{staticClass:"top"},[_c('div',{staticClass:"author g-flex"},[_c('div',{staticClass:"g-avatar"},[_c('img',{attrs:{"src":"https://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83eq0LXusK2uAGGXNA8qDUiclSZFJqv4ibdtNG0B3tlGpAhgkaGqiaY3zcuF758iaMGGpNouHNL58MS5NVw/132","alt":""}})]),_vm._v(" "),_c('div',{staticClass:"info"},[_c('strong',{staticClass:"name"},[_vm._v("Eric li")]),_vm._v(" "),_c('p',[_c('span',[_vm._v("西电捷通")]),_c('span',[_vm._v("CIO")])])])]),_vm._v(" "),_c('div',{staticClass:"g-flex space-between"},[_c('div',{staticClass:"star g-flex a-center"},[_c('div',{staticClass:"rank m-r-10"},[_vm._v("\n                              4.0\n                              "),_c('span',[_vm._v("分")])]),_vm._v(" "),_c('Star',{attrs:{"out-width":74,"out-height":15,"decimal":"0.82"}})],1),_vm._v(" "),_c('div',{staticClass:"date"},[_vm._v("\n                            04-13\n                          ")])])]),_vm._v(" "),_c('div',{staticClass:"detail m-t-20"},[_c('p',[_vm._v("【优点】流程引擎非常稳定。与企业微信移动端无缝结合。定期更新安全补丁包，定期组织技术培训和交流，质保服务好。")]),_vm._v(" "),_c('p',[_vm._v("【缺点】流程配置 灵活性还有待提升。比如说，同一个流程中同一人的不同角色，希望是以更高职位角色来审批，但是流程配置只能是低职位角色先审批。")])])]),_vm._v(" "),_c('div',{staticClass:"reviews"},[_c('div',{staticClass:"top"},[_c('div',{staticClass:"author g-flex"},[_c('div',{staticClass:"g-avatar"},[_c('img',{attrs:{"src":"https://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83eq0LXusK2uAGGXNA8qDUiclSZFJqv4ibdtNG0B3tlGpAhgkaGqiaY3zcuF758iaMGGpNouHNL58MS5NVw/132","alt":""}})]),_vm._v(" "),_c('div',{staticClass:"info"},[_c('strong',{staticClass:"name"},[_vm._v("Eric li")]),_vm._v(" "),_c('p',[_c('span',[_vm._v("西电捷通")]),_c('span',[_vm._v("CIO")])])])]),_vm._v(" "),_c('div',{staticClass:"g-flex space-between"},[_c('div',{staticClass:"star g-flex a-center"},[_c('div',{staticClass:"rank m-r-10"},[_vm._v("\n                              4.0\n                              "),_c('span',[_vm._v("分")])]),_vm._v(" "),_c('Star',{attrs:{"out-width":74,"out-height":15,"decimal":"0.82"}})],1),_vm._v(" "),_c('div',{staticClass:"date"},[_vm._v("\n                            04-13\n                          ")])])]),_vm._v(" "),_c('div',{staticClass:"detail m-t-20"},[_c('p',[_vm._v("【优点】流程引擎非常稳定。与企业微信移动端无缝结合。定期更新安全补丁包，定期组织技术培训和交流，质保服务好。")]),_vm._v(" "),_c('p',[_vm._v("【缺点】流程配置 灵活性还有待提升。比如说，同一个流程中同一人的不同角色，希望是以更高职位角色来审批，但是流程配置只能是低职位角色先审批。")])])])]),_vm._v(" "),_c('td',{staticClass:"table-cell"},[_c('div',{staticClass:"reviews"},[_c('div',{staticClass:"top"},[_c('div',{staticClass:"author g-flex"},[_c('div',{staticClass:"g-avatar"},[_c('img',{attrs:{"src":"https://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83eq0LXusK2uAGGXNA8qDUiclSZFJqv4ibdtNG0B3tlGpAhgkaGqiaY3zcuF758iaMGGpNouHNL58MS5NVw/132","alt":""}})]),_vm._v(" "),_c('div',{staticClass:"info"},[_c('strong',{staticClass:"name"},[_vm._v("Eric li")]),_vm._v(" "),_c('p',[_c('span',[_vm._v("西电捷通")]),_c('span',[_vm._v("CIO")])])])]),_vm._v(" "),_c('div',{staticClass:"g-flex space-between"},[_c('div',{staticClass:"star g-flex a-center"},[_c('div',{staticClass:"rank m-r-10"},[_vm._v("\n                              4.0\n                              "),_c('span',[_vm._v("分")])]),_vm._v(" "),_c('Star',{attrs:{"out-width":74,"out-height":15,"decimal":"0.82"}})],1),_vm._v(" "),_c('div',{staticClass:"date"},[_vm._v("\n                            04-13\n                          ")])])]),_vm._v(" "),_c('div',{staticClass:"detail m-t-20"},[_c('p',[_vm._v("【优点】流程引擎非常稳定。与企业微信移动端无缝结合。定期更新安全补丁包，定期组织技术培训和交流，质保服务好。")]),_vm._v(" "),_c('p',[_vm._v("【缺点】流程配置 灵活性还有待提升。比如说，同一个流程中同一人的不同角色，希望是以更高职位角色来审批，但是流程配置只能是低职位角色先审批。")])])]),_vm._v(" "),_c('div',{staticClass:"reviews"},[_c('div',{staticClass:"top"},[_c('div',{staticClass:"author g-flex"},[_c('div',{staticClass:"g-avatar"},[_c('img',{attrs:{"src":"https://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83eq0LXusK2uAGGXNA8qDUiclSZFJqv4ibdtNG0B3tlGpAhgkaGqiaY3zcuF758iaMGGpNouHNL58MS5NVw/132","alt":""}})]),_vm._v(" "),_c('div',{staticClass:"info"},[_c('strong',{staticClass:"name"},[_vm._v("Eric li")]),_vm._v(" "),_c('p',[_c('span',[_vm._v("西电捷通")]),_c('span',[_vm._v("CIO")])])])]),_vm._v(" "),_c('div',{staticClass:"g-flex space-between"},[_c('div',{staticClass:"star g-flex a-center"},[_c('div',{staticClass:"rank m-r-10"},[_vm._v("\n                              4.0\n                              "),_c('span',[_vm._v("分")])]),_vm._v(" "),_c('Star',{attrs:{"out-width":74,"out-height":15,"decimal":"0.82"}})],1),_vm._v(" "),_c('div',{staticClass:"date"},[_vm._v("\n                            04-13\n                          ")])])]),_vm._v(" "),_c('div',{staticClass:"detail m-t-20"},[_c('p',[_vm._v("【优点】流程引擎非常稳定。与企业微信移动端无缝结合。定期更新安全补丁包，定期组织技术培训和交流，质保服务好。")]),_vm._v(" "),_c('p',[_vm._v("【缺点】流程配置 灵活性还有待提升。比如说，同一个流程中同一人的不同角色，希望是以更高职位角色来审批，但是流程配置只能是低职位角色先审批。")])])])]),_vm._v(" "),_c('td',{staticClass:"table-cell"},[_c('div',{staticClass:"reviews"},[_c('div',{staticClass:"top"},[_c('div',{staticClass:"author g-flex"},[_c('div',{staticClass:"g-avatar"},[_c('img',{attrs:{"src":"https://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83eq0LXusK2uAGGXNA8qDUiclSZFJqv4ibdtNG0B3tlGpAhgkaGqiaY3zcuF758iaMGGpNouHNL58MS5NVw/132","alt":""}})]),_vm._v(" "),_c('div',{staticClass:"info"},[_c('strong',{staticClass:"name"},[_vm._v("Eric li")]),_vm._v(" "),_c('p',[_c('span',[_vm._v("西电捷通")]),_c('span',[_vm._v("CIO")])])])]),_vm._v(" "),_c('div',{staticClass:"g-flex space-between"},[_c('div',{staticClass:"star g-flex a-center"},[_c('div',{staticClass:"rank m-r-10"},[_vm._v("\n                              4.0\n                              "),_c('span',[_vm._v("分")])]),_vm._v(" "),_c('Star',{attrs:{"out-width":74,"out-height":15,"decimal":"0.82"}})],1),_vm._v(" "),_c('div',{staticClass:"date"},[_vm._v("\n                            04-13\n                          ")])])]),_vm._v(" "),_c('div',{staticClass:"detail m-t-20"},[_c('p',[_vm._v("【优点】流程引擎非常稳定。与企业微信移动端无缝结合。定期更新安全补丁包，定期组织技术培训和交流，质保服务好。")]),_vm._v(" "),_c('p',[_vm._v("【缺点】流程配置 灵活性还有待提升。比如说，同一个流程中同一人的不同角色，希望是以更高职位角色来审批，但是流程配置只能是低职位角色先审批。")])])]),_vm._v(" "),_c('div',{staticClass:"reviews"},[_c('div',{staticClass:"top"},[_c('div',{staticClass:"author g-flex"},[_c('div',{staticClass:"g-avatar"},[_c('img',{attrs:{"src":"https://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83eq0LXusK2uAGGXNA8qDUiclSZFJqv4ibdtNG0B3tlGpAhgkaGqiaY3zcuF758iaMGGpNouHNL58MS5NVw/132","alt":""}})]),_vm._v(" "),_c('div',{staticClass:"info"},[_c('strong',{staticClass:"name"},[_vm._v("Eric li")]),_vm._v(" "),_c('p',[_c('span',[_vm._v("西电捷通")]),_c('span',[_vm._v("CIO")])])])]),_vm._v(" "),_c('div',{staticClass:"g-flex space-between"},[_c('div',{staticClass:"star g-flex a-center"},[_c('div',{staticClass:"rank m-r-10"},[_vm._v("\n                              4.0\n                              "),_c('span',[_vm._v("分")])]),_vm._v(" "),_c('Star',{attrs:{"out-width":74,"out-height":15,"decimal":"0.82"}})],1),_vm._v(" "),_c('div',{staticClass:"date"},[_vm._v("\n                            04-13\n                          ")])])]),_vm._v(" "),_c('div',{staticClass:"detail m-t-20"},[_c('p',[_vm._v("【优点】流程引擎非常稳定。与企业微信移动端无缝结合。定期更新安全补丁包，定期组织技术培训和交流，质保服务好。")]),_vm._v(" "),_c('p',[_vm._v("【缺点】流程配置 灵活性还有待提升。比如说，同一个流程中同一人的不同角色，希望是以更高职位角色来审批，但是流程配置只能是低职位角色先审批。")])])])])])])])])])])],1)],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/compare/_id.vue?vue&type=template&id=81ac84b4&scoped=true&

// EXTERNAL MODULE: ./components/common/breadCrumb/index.vue + 4 modules
var breadCrumb = __webpack_require__(185);

// EXTERNAL MODULE: ./components/common/starComp/StarZoom.vue + 4 modules
var StarZoom = __webpack_require__(172);

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.2.2@babel-loader/lib??ref--2-0!./node_modules/_@nuxt_components@2.1.8@@nuxt/components/dist/loader.js??ref--0-0!./node_modules/_vue-loader@15.9.7@vue-loader/lib??vue-loader-options!./pages/compare/_id.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    breadCrumb: breadCrumb["default"],
    Star: StarZoom["default"]
  },

  asyncData({
    app,
    params
  }) {
    return {
      bannerPopShow: false // 弹窗是否展示

    };
  },

  methods: {
    handleBannerPopShow() {
      this.bannerPopShow = true;
    },

    handleBannerPopHide() {
      this.bannerPopShow = false;
    }

  }
});
// CONCATENATED MODULE: ./pages/compare/_id.vue?vue&type=script&lang=js&
 /* harmony default export */ var compare_idvue_type_script_lang_js_ = (_idvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/_vue-loader@15.9.7@vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14);

// CONCATENATED MODULE: ./pages/compare/_id.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  compare_idvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "81ac84b4",
  "7ac611cb"
  
)

/* harmony default export */ var _id = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Header2: __webpack_require__(174).default})


/***/ })

};;
//# sourceMappingURL=_id.js.map