(window.webpackJsonp=window.webpackJsonp||[]).push([[4,7],{817:function(e,t,r){"use strict";r.r(t);var n={props:{bannerTxt:{type:Array,default:function(){return[]}}},data:function(){return{swiperOption:{loop:!0,slidesPerView:1,speed:1e3,autoplay:!0,noSwiping:!0,autoplayDisableOnInteraction:!1}}},methods:{handleBannerPopShow:function(){this.$emit("handleBannerPopShow")}}},o=r(45),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{directives:[{name:"swiper",rawName:"v-swiper:mySwiper",value:e.swiperOption,expression:"swiperOption",arg:"mySwiper"}],staticClass:"txt-banner"},[r("div",{staticClass:"swiper-wrapper g-flex"},e._l(e.bannerTxt,(function(t,n){return r("div",{key:n,staticClass:"swiper-slide text-c",attrs:{"data-swiper-autoplay":"5000"}},[r("h3",{staticClass:"swiper-item"},[r("span",{on:{click:e.handleBannerPopShow}},[r("i",{staticClass:"fire"}),e._v(e._s(t)),r("i",{staticClass:"finger"})])])])})),0)])}),[],!1,null,null,null);t.default=component.exports},845:function(e,t,r){"use strict";r.r(t);var n=r(30),o=(r(114),r(115),r(47),r(433),r(133),r(88)),c={components:{AutoPlay:r(817).default},props:{bannerTxt:{type:Array,default:function(){return[]}}},data:function(){return{keywords:"",hotSearchList:[],searchList:[],isFocus:!1,isSearch:!1,statusMapper:{product:"haveProductReviews",category:"haveCategoryInformation",fuzzy:"fuzzyMatching",notFound:"allWithout"},timer:null,historySearch:[]}},methods:{handleBannerPopShow:function(){this.$emit("handleBannerPopShow")},onSearch:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r,n,o,c,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.keywords.trim()){t.next=4;break}return t.abrupt("return",!1);case 4:return t.next=6,e.$requests.indexKeysSearch({KEY_INFO:e.keywords.trim()});case 6:if(200!==(r=t.sent).status||"success"!==r.data.result){t.next=23;break}t.t0=r.data.searchStatus,t.next=t.t0===e.statusMapper.category?11:t.t0===e.statusMapper.product?14:t.t0===e.statusMapper.fuzzy?17:t.t0===e.statusMapper.notFound?20:23;break;case 11:return n=e.$router.resolve({name:"product-id",params:{id:r.data.CATEGORY_ID},query:{category_name:e.keywords.trim()}}),window.open(n.href,"_blank"),t.abrupt("break",23);case 14:return o=e.$router.resolve({name:"productDetail-id",params:{id:r.data.PRODUCT_ID}}),window.open(o.href,"_blank"),t.abrupt("break",23);case 17:return c=e.$router.resolve({name:"result-status",params:{status:"fuzzy"},query:{keywords:e.keywords.trim()}}),window.open(c.href,"_blank"),t.abrupt("break",23);case 20:return l=e.$router.resolve({name:"result-status",params:{status:"notFound"},query:{keywords:e.keywords.trim()}}),window.open(l.href,"_blank"),t.abrupt("break",23);case 23:case"end":return t.stop()}}),t)})))()},onChange:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(""!==e.keywords.trim()){t.next=5;break}e.isFocus=!0,e.isSearch=!1,t.next=9;break;case 5:return t.next=7,e.searchAutoComplete();case 7:e.searchList=t.sent,e.searchList?(e.isFocus=!1,e.isSearch=!0):(e.isFocus=!1,e.isSearch=!1);case 9:case"end":return t.stop()}}),t)})))()},onFocus:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var data,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(""!==e.keywords.trim()){t.next=8;break}return e.getHistorySearch(),e.isFocus=!0,data={CUR_PAGE:1},t.next=6,e.$requests.indexSearchHot(data);case 6:200===(r=t.sent).status&&"success"===r.data.result&&(e.hotSearchList=r.data.hotsearchlogObj);case 8:case"end":return t.stop()}}),t)})))()},onBlur:function(){var e=this;this.timer=setTimeout((function(){e.isFocus=!1}),300)},searchAutoComplete:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r,data,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=[],data={KEY_INFO:e.keywords.trim()},t.next=4,e.$requests.indexSearchAutoComplete(data);case 4:return 200===(n=t.sent).status&&"success"===n.data.result&&(r=n.data.productList),t.abrupt("return",r);case 7:case"end":return t.stop()}}),t)})))()},handleKeyWordTagClick:function(e){var t=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n,c,l,h,d,f,y,m;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return(n=o.a.get("set_history_search"))?(-1!==(c=n.findIndex((function(t){return t.ID===e.ID})))&&n.splice(c,1),n.unshift(e),o.a.set("set_history_search",n)):((l=[]).unshift(e),o.a.set("set_history_search",l)),r.next=4,t.$requests.indexKeysSearch({KEY_INFO:e.names.trim()});case 4:if(200!==(h=r.sent).status||"success"!==h.data.result){r.next=21;break}r.t0=h.data.searchStatus,r.next=r.t0===t.statusMapper.category?9:r.t0===t.statusMapper.product?12:r.t0===t.statusMapper.fuzzy?15:r.t0===t.statusMapper.notFound?18:21;break;case 9:return d=t.$router.resolve({name:"product-id",params:{id:h.data.CATEGORY_ID},query:{category_name:e.value.trim()}}),window.open(d.href,"_blank"),r.abrupt("break",21);case 12:return f=t.$router.resolve({name:"productDetail-id",params:{id:h.data.PRODUCT_ID}}),window.open(f.href,"_blank"),r.abrupt("break",21);case 15:return y=t.$router.resolve({name:"result-status",params:{status:"fuzzy"},query:{keywords:e.names.trim()}}),window.open(y.href,"_blank"),r.abrupt("break",21);case 18:return m=t.$router.resolve({name:"result-status",params:{status:"notFound"},query:{keywords:e.names.trim()}}),window.open(m.href,"_blank"),r.abrupt("break",21);case 21:case"end":return r.stop()}}),r)})))()},handleKeyWordTagClick2:function(e){var t=o.a.get("set_history_search");if(t){var r=t.findIndex((function(t){return t.ID===e.ID}));-1!==r&&t.splice(r,1),t.unshift(e),o.a.set("set_history_search",t)}else{var n=[];n.unshift(e),o.a.set("set_history_search",n)}if("1"===e.TYPE){var c=this.$router.resolve({name:"productDetail-id",params:{id:e.ID}});window.open(c.href,"_blank")}else{var l=this.$router.resolve({name:"product-id",params:{id:e.ID},query:{category_name:e.NAME}});window.open(l.href,"_blank")}},getHistorySearch:function(){this.historySearch=o.a.get("set_history_search")},deleteHistorySearch:function(){o.a.remove("set_history_search"),this.historySearch=[]}}},l=r(45),component=Object(l.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("a-row",{staticClass:"search-wrapper",attrs:{type:"flex",justify:"center"}},[r("a-col",{staticClass:"search-box",attrs:{span:"17"}},[r("div",{staticClass:"search-input",class:{focus:e.isFocus,search:e.isSearch}},[r("a-input-search",{staticClass:"input",attrs:{size:"large",placeholder:"搜索产品类别/产品名称，看看其他CIO的实名点评吧！"},on:{search:e.onSearch,change:e.onChange,focus:e.onFocus,blur:e.onBlur},model:{value:e.keywords,callback:function(t){e.keywords=t},expression:"keywords"}}),e._v(" "),r("div",{staticClass:"result-wrap focus-result"},[r("div",[r("h3",{staticClass:"title"},[e._v("\n            热门搜索\n          ")]),e._v(" "),e._l(e.hotSearchList,(function(t){return r("div",{key:t.ID,staticClass:"item"},[r("div",{staticClass:"link",on:{click:function(r){return e.handleKeyWordTagClick(t)}}},[r("span",[e._v(e._s(t.value))]),e._v(" "),r("span",{staticClass:"hot-icon"})])])}))],2),e._v(" "),e.historySearch?r("div",{staticStyle:{"margin-top":"10px"}},[r("h3",{staticClass:"title g-flex space-between"},[r("span",[e._v("历史搜索")]),e._v(" "),r("span",{staticStyle:{cursor:"pointer"},on:{click:e.deleteHistorySearch}},[r("a-icon",{attrs:{type:"delete"}}),e._v("删除\n            ")],1)]),e._v(" "),e._l(e.historySearch,(function(t){return r("div",{key:t.ID,staticClass:"item"},[r("div",{staticClass:"link",on:{click:function(r){return e.handleKeyWordTagClick(t)}}},[r("span",[e._v(e._s(t.names))]),e._v(" "),r("span",{staticClass:"hot-icon"})])])}))],2):e._e()]),e._v(" "),r("div",{staticClass:"result-wrap search-result"},e._l(e.searchList,(function(t){return r("div",{key:t.ID,staticClass:"item"},[r("div",{staticClass:"link",on:{click:function(r){return e.handleKeyWordTagClick2(t)}}},[r("span",[e._v(e._s(t.names))]),e._v(" "),r("span",{staticStyle:{color:"#666","font-size":"12px"}},[e._v(e._s("1"===t.TYPE?"产品":"类别"))])])])})),0)],1),e._v(" "),r("AutoPlay",{attrs:{"banner-txt":e.bannerTxt},on:{handleBannerPopShow:e.handleBannerPopShow}})],1)],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{AutoPlay:r(817).default})}}]);