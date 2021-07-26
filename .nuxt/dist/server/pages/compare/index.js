exports.ids = [36,6,7,8,12,13];
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
 * 合法性检查
 * @param {*} form 被检查的数据
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
        require: '请输入您的姓名!',
        min: '请按要求输入您的姓名!',
        max: '请按要求输入您的姓名!'
      }
    },
    NICKNAME: {
      rules: {
        required: true,
        min: 2,
        max: 8
      },
      messages: {
        require: '请输入您的姓名!',
        min: '请按要求输入您的姓名!',
        max: '请按要求输入您的姓名!'
      }
    },
    COMPANY: {
      rules: {
        required: true
      },
      messages: {
        require: '请填写公司!'
      }
    },
    POSITION: {
      rules: {
        required: true
      },
      messages: {
        require: '请填写职位!'
      }
    },
    PHONE: {
      rules: {
        required: true,
        mobile: true
      },
      messages: {
        require: '请填写手机号!',
        mobile: '手机号码格式不合法!'
      }
    },
    USER_EMAIL: {
      rules: {
        required: true,
        email: true
      },
      messages: {
        require: '请填写邮箱!',
        email: '您输入的邮箱不合法!'
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

/***/ }),

/***/ 244:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.7@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_@nuxt_components@2.1.8@@nuxt/components/dist/loader.js??ref--0-0!./node_modules/_vue-loader@15.9.7@vue-loader/lib??vue-loader-options!./pages/compare/index.vue?vue&type=template&id=b36f2f1c&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"main"},[_c('a-anchor',{staticClass:"default"},[_c('Header2',{attrs:{"is-show":true},on:{"handleBannerPopShow":_vm.handleBannerPopShow}})],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"container-index\" data-v-b36f2f1c>","</div>",[_c('breadCrumb',[_c('a-breadcrumb-item',[_c('a',{attrs:{"href":"/"}},[_vm._v("首页")])]),_vm._v(" "),_c('a-breadcrumb-item',[_vm._v("软件排名")])],1),_vm._ssrNode(" "),_c('a-row',{staticClass:"g-wrapper compare",attrs:{"gutter":[32, 32]}},[_c('a-col',{attrs:{"span":"6"}},[_c('a-menu',{staticStyle:{"border-right":"none"},attrs:{"mode":"inline","open-keys":_vm.openKey,"default-selected-keys":['1']},on:{"update:openKeys":function($event){_vm.openKey=$event},"update:open-keys":function($event){_vm.openKey=$event}}},[_c('a-menu-item',{key:"1"},[_vm._v("\n            总体感受\n          ")]),_vm._v(" "),_c('a-menu-item',{key:"2"},[_vm._v("\n            专项评分\n          ")]),_vm._v(" "),_vm._l((_vm.secondaryMenus),function(obj){return _c('a-sub-menu',{key:obj.id,attrs:{"title":obj.title}},_vm._l((obj.functiontypeObj),function(item){return _c('a-menu-item',{key:("sub1-" + (item.id))},[_vm._v("\n              "+_vm._s(item.title)+"\n            ")])}),1)}),_vm._v(" "),_c('a-menu-item',{key:"15"},[_vm._v("\n            热门点评\n          ")])],2)],1),_vm._v(" "),_c('a-col',{attrs:{"span":"18"}},[_c('div',{staticClass:"content"},[_c('h2',{staticClass:"title"},[_vm._v("用户实名口碑比较——"+_vm._s(_vm.compareListTitle))]),_vm._v(" "),_c('div',{staticClass:"table"},[_c('table',{staticStyle:{"width":"100%"}},[_c('tbody',{staticClass:"table-body"},[_c('tr',{staticClass:"table-row"},[(_vm.compareListLen < 4)?_c('td',{staticClass:"table-cell"},[_c('div',{staticClass:"add-product-btn g-flex",on:{"click":_vm.handlePopShow}},[_c('a-icon',{staticStyle:{"font-size":"22px"},attrs:{"type":"plus-circle","theme":"twoTone","two-tone-color":"#52c41a"}}),_vm._v(" "),_c('span',{staticClass:"m-l-5"},[_vm._v("添加产品")])],1)]):_c('td',{staticClass:"table-cell"}),_vm._v(" "),_vm._l((_vm.defaultInfo),function(item,index){return _c('td',{key:index,staticClass:"table-cell"},[_c('div',{staticClass:"pad-t-10",staticStyle:{"position":"relative"}},[(_vm.compareListLen > 2)?_c('a-icon',{staticClass:"close-btn",attrs:{"type":"close"},on:{"click":function($event){return _vm.removeProduct(item.product_id)}}}):_vm._e(),_vm._v(" "),_c('div',{staticClass:"product-logo text-c"},[_c('img',{attrs:{"src":"http://xuanxingbao.com/images/xxb_mark.png","alt":""}})]),_vm._v(" "),_c('div',{staticClass:"product-title text-c"},[_c('div',{staticClass:"short-name"},[_vm._v(_vm._s(item.factoryname))])])],1),_vm._v(" "),_c('div',{staticClass:"review-btn"},[_vm._v("\n                      免费使用\n                    ")])])})],2),_vm._v(" "),_c('tr',{staticClass:"table-row"},[_c('td',{staticClass:"table-cell"},[_c('div',{staticClass:"title"},[_vm._v("\n                      总体感受\n                    ")])]),_vm._v(" "),_vm._l((_vm.defaultInfo),function(item,index){return _c('td',{key:index,staticClass:"table-cell text-c"},[_c('div',{staticClass:"stars"},[_c('Star',{attrs:{"out-width":76,"out-height":15,"decimal":item.ztgsnum/5}}),_vm._v(" "),_c('span',{staticClass:"ant-rate-text m-l-5"},[_vm._v(_vm._s(item.ztgsnum)+"分")])],1),_vm._v(" "),_c('div',[_vm._v(_vm._s(item.productnum)+"条点评")])])})],2),_vm._v(" "),_c('tr',{staticClass:"table-row"},[_c('td',{staticClass:"table-cell",attrs:{"colspan":_vm.defaultInfo.length + 1}},[_c('div',{staticClass:"title"},[_vm._v("\n                      专项指标\n                    ")])])]),_vm._v(" "),_c('tr',{staticClass:"table-row"},[_c('td',{staticClass:"table-cell"},[_c('div',{staticClass:"sub-title text-c"},[_vm._v("\n                      功能\n                    ")])]),_vm._v(" "),_vm._l((_vm.defaultInfo),function(item,index){return _c('td',{key:index,staticClass:"table-cell text-c"},[_c('div',{staticClass:"stars"},[_c('Star',{attrs:{"out-width":76,"out-height":15,"decimal":item.functionLevel/5}}),_vm._v(" "),_c('span',{staticClass:"ant-rate-text m-l-5"},[_vm._v(_vm._s(item.functionLevel)+"分")])],1)])})],2),_vm._v(" "),_c('tr',{staticClass:"table-row"},[_c('td',{staticClass:"table-cell"},[_c('div',{staticClass:"sub-title text-c"},[_vm._v("\n                      性能\n                    ")])]),_vm._v(" "),_vm._l((_vm.defaultInfo),function(item,index){return _c('td',{key:index,staticClass:"table-cell text-c"},[_c('div',{staticClass:"stars"},[_c('Star',{attrs:{"out-width":76,"out-height":15,"decimal":item.performanceLevel/5}}),_vm._v(" "),_c('span',{staticClass:"ant-rate-text m-l-5"},[_vm._v(_vm._s(item.performanceLevel)+"分")])],1)])})],2),_vm._v(" "),_c('tr',{staticClass:"table-row"},[_c('td',{staticClass:"table-cell"},[_c('div',{staticClass:"sub-title text-c"},[_vm._v("\n                      可扩展性\n                    ")])]),_vm._v(" "),_vm._l((_vm.defaultInfo),function(item,index){return _c('td',{key:index,staticClass:"table-cell text-c"},[_c('div',{staticClass:"stars"},[_c('Star',{attrs:{"out-width":76,"out-height":15,"decimal":item.scalabilityLevel/5}}),_vm._v(" "),_c('span',{staticClass:"ant-rate-text m-l-5"},[_vm._v(_vm._s(item.scalabilityLevel)+"分")])],1)])})],2),_vm._v(" "),_c('tr',{staticClass:"table-row"},[_c('td',{staticClass:"table-cell"},[_c('div',{staticClass:"sub-title text-c"},[_vm._v("\n                      易部署性\n                    ")])]),_vm._v(" "),_vm._l((_vm.defaultInfo),function(item,index){return _c('td',{key:index,staticClass:"table-cell text-c"},[_c('div',{staticClass:"stars"},[_c('Star',{attrs:{"out-width":76,"out-height":15,"decimal":item.deployLevel/5}}),_vm._v(" "),_c('span',{staticClass:"ant-rate-text m-l-5"},[_vm._v(_vm._s(item.deployLevel)+"分")])],1)])})],2),_vm._v(" "),_c('tr',{staticClass:"table-row"},[_c('td',{staticClass:"table-cell"},[_c('div',{staticClass:"sub-title text-c"},[_vm._v("\n                      使用友好性\n                    ")])]),_vm._v(" "),_vm._l((_vm.defaultInfo),function(item,index){return _c('td',{key:index,staticClass:"table-cell text-c"},[_c('div',{staticClass:"stars"},[_c('Star',{attrs:{"out-width":76,"out-height":15,"decimal":item.friendlyLevel/5}}),_vm._v(" "),_c('span',{staticClass:"ant-rate-text m-l-5"},[_vm._v(_vm._s(item.friendlyLevel)+"分")])],1)])})],2),_vm._v(" "),_c('tr',{staticClass:"table-row"},[_c('td',{staticClass:"table-cell",attrs:{"colspan":_vm.defaultInfo.length + 1}},[_c('div',{staticClass:"title"},[_vm._v("\n                      热门点评\n                    ")])])]),_vm._v(" "),_c('tr',{staticClass:"table-row"},[_c('td',{staticClass:"table-cell"}),_vm._v(" "),_vm._l((_vm.reviewList),function(item,index){return _c('td',{key:index,staticClass:"table-cell v-top"},_vm._l((item.producthotscoreinfo),function(subItem,subIndex){return _c('div',{key:subIndex,staticClass:"reviews"},[_c('div',{staticClass:"top"},[_c('div',{staticClass:"author g-flex"},[_c('div',{staticClass:"g-avatar"},[_c('img',{attrs:{"src":subItem.userimage,"alt":""}})]),_vm._v(" "),_c('div',{staticClass:"info"},[_c('strong',{staticClass:"name"},[_vm._v(_vm._s(subItem.realname))]),_vm._v(" "),_c('p',[_c('span',[_vm._v(_vm._s(subItem.company))]),_vm._v(" "),_c('span',[_vm._v(_vm._s(subItem.office))])])])]),_vm._v(" "),_c('div',{staticClass:"g-flex space-between"},[_c('div',{staticClass:"star g-flex a-center"},[_c('div',{staticClass:"rank m-r-10"},[_vm._v("\n                              "+_vm._s(subItem.ztgsnum)+"\n                              "),_c('span',[_vm._v("分")])]),_vm._v(" "),_c('Star',{attrs:{"out-width":76,"out-height":15,"decimal":subItem.ztgsnum/5}})],1),_vm._v(" "),_c('div',{staticClass:"date"})])]),_vm._v(" "),_c('div',{staticClass:"detail m-t-20"},[_c('p',[_vm._v("【优点】"+_vm._s(subItem.advantages))]),_vm._v(" "),_c('p',[_vm._v("【缺点】"+_vm._s(subItem.disadvantages))])])])}),0)})],2)])])])])])],1)],2),_vm._ssrNode(" "),_c('addProPop',{directives:[{name:"show",rawName:"v-show",value:(_vm.popShow),expression:"popShow"}],attrs:{"category-id":_vm.categoryId,"compare-list":_vm.compareList},on:{"handlePopHide":_vm.handlePopHide,"addProduct":_vm.addProduct}})],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/compare/index.vue?vue&type=template&id=b36f2f1c&scoped=true&

// EXTERNAL MODULE: ./components/common/breadCrumb/index.vue + 4 modules
var breadCrumb = __webpack_require__(185);

// EXTERNAL MODULE: ./components/common/starComp/StarZoom.vue + 4 modules
var StarZoom = __webpack_require__(172);

// EXTERNAL MODULE: ./components/compare/addPro.vue + 4 modules
var addPro = __webpack_require__(218);

// EXTERNAL MODULE: ./static/lib/utils.js
var utils = __webpack_require__(190);

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.2.2@babel-loader/lib??ref--2-0!./node_modules/_@nuxt_components@2.1.8@@nuxt/components/dist/loader.js??ref--0-0!./node_modules/_vue-loader@15.9.7@vue-loader/lib??vue-loader-options!./pages/compare/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var comparevue_type_script_lang_js_ = ({
  components: {
    breadCrumb: breadCrumb["default"],
    Star: StarZoom["default"],
    addProPop: addPro["default"]
  },

  async asyncData({
    app,
    params
  }) {
    let secondaryMenu = [];
    let openKeys = [];
    let defaultInfo = [];
    let reviewList = [];
    let funcList; // 获取菜单

    const getMenu = () => {
      return app.$requests.compareMenu({
        category_id: params.categoryId
      });
    }; // console.log(paramsToString(params.compareList))
    // 获取默认对比信息


    const getCompareInfo = () => {
      return app.$requests.compareInfo({
        category_id: params.categoryId,
        productids: Object(utils["b" /* paramsToString */])(params.compareList)
      });
    }; // 获取热门点评


    const getHotReviews = () => {
      return app.$requests.compareHotReviews({
        category_id: params.categoryId,
        productids: Object(utils["b" /* paramsToString */])(params.compareList)
      });
    }; // 根据功能清单获取某类别的产品对比信息


    const getFunctionInfo = () => {
      return app.$requests.compareFunctionInfo({
        category_id: params.categoryId,
        productids: Object(utils["b" /* paramsToString */])(params.compareList),
        function_type_id: '5475c3b97797453195e399013e1c4d66'
      });
    };

    const [getMenuRes, getCompareInfoRes, getHotReviewsRes, getFunctionInfoRes] = await Promise.all([getMenu(), getCompareInfo(), getHotReviews(), getFunctionInfo()]);

    if (getMenuRes.status === 200) {
      secondaryMenu = getMenuRes.data.functionlist;
      console.log(secondaryMenu);
      secondaryMenu.forEach(item => {
        openKeys.push(item.id);
      });
    }

    if (getCompareInfoRes.status === 200) {
      defaultInfo = getCompareInfoRes.data.productcontrastdefault;
    }

    if (getHotReviewsRes.status === 200 && getHotReviewsRes.data.result === 'ok') {
      reviewList = getHotReviewsRes.data.producthotscorelist;
    }

    console.log('功能对比信息:', getFunctionInfoRes);

    if (getFunctionInfoRes.status === 200) {
      funcList = getFunctionInfoRes.data.functioncontrastist;
    }

    return {
      openKey: openKeys,
      categoryId: params.categoryId,
      popShow: false,
      // 弹窗是否展示
      bannerPopShow: false,
      compareList: params.compareList,
      secondaryMenus: secondaryMenu,
      defaultInfo,
      reviewList,
      funcList
    };
  },

  computed: {
    compareListLen() {
      return this.defaultInfo.length;
    },

    compareListTitle() {
      let title = '';
      let len = this.defaultInfo.length;
      this.defaultInfo.forEach((item, index) => {
        if (index === len - 1) {
          title += item.factoryname + '';
        } else if (index === len - 2) {
          title += item.factoryname + '和';
        } else {
          title += item.factoryname + ',';
        }
      });
      return title;
    }

  },
  methods: {
    addProduct(item) {
      this.compareList.push({
        product_id: item.product_id
      });
      this.getCompareInfo({
        category_id: this.categoryId,
        productids: Object(utils["b" /* paramsToString */])(this.compareList)
      });
      this.getHotReviews({
        category_id: this.categoryId,
        productids: Object(utils["b" /* paramsToString */])(this.compareList)
      });
      this.handlePopHide();
    },

    removeProduct(id) {
      this.compareList = this.compareList.filter(item => {
        return item.product_id !== id;
      });
      this.defaultInfo = this.defaultInfo.filter(item => {
        return item.product_id !== id;
      });
      this.reviewList = this.reviewList.filter(item => {
        return item.productobj.ID !== id;
      });
    },

    // 获取对比信息
    getCompareInfo(params) {
      this.$requests.compareInfo(params).then(res => {
        if (res.status === 200 && res.data.result === 'ok') {
          this.defaultInfo = res.data.productcontrastdefault;
        }
      });
    },

    // 获取热门点评
    getHotReviews(params) {
      this.$requests.compareHotReviews(params).then(res => {
        if (res.status === 200 && res.data.result === 'ok') {
          this.reviewList = res.data.producthotscorelist;
        }
      });
    },

    handlePopShow() {
      this.popShow = true;
    },

    handlePopHide() {
      this.popShow = false;
    },

    handleBannerPopShow() {
      this.bannerPopShow = true;
    },

    handleBannerPopHide() {
      this.bannerPopShow = false;
    }

  }
});
// CONCATENATED MODULE: ./pages/compare/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_comparevue_type_script_lang_js_ = (comparevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/_vue-loader@15.9.7@vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14);

// CONCATENATED MODULE: ./pages/compare/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_comparevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "b36f2f1c",
  "1171c2a3"
  
)

/* harmony default export */ var compare = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Header2: __webpack_require__(174).default})


/***/ })

};;
//# sourceMappingURL=index.js.map