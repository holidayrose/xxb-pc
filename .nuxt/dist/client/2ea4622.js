(window.webpackJsonp=window.webpackJsonp||[]).push([[27,3],{1266:function(e,t,r){var content=r(1293);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(78).default)("707e3d71",content,!0,{sourceMap:!1})},1274:function(e,t,r){"use strict";r.r(t);var n={props:{bannerTxt:{type:Array,default:function(){return[]}}},methods:{handleBannerPopShow:function(){this.$emit("handleBannerPopShow")}}},o=(r(1292),r(35)),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("a-carousel",{attrs:{autoplay:"",effect:"fade",dots:!1}},e._l(e.bannerTxt,(function(t,n){return r("div",{key:n},[r("h3",[r("span",{on:{click:e.handleBannerPopShow}},[e._v(e._s(t))])])])})),0)}),[],!1,null,"35fb9ac5",null);t.default=component.exports},1292:function(e,t,r){"use strict";r(1266)},1293:function(e,t,r){var n=r(77)(!1);n.push([e.i,".ant-carousel[data-v-35fb9ac5] .slick-slide{text-align:center;height:30px;line-height:30px;overflow:hidden;margin-top:20px}.ant-carousel[data-v-35fb9ac5] .custom-slick-arrow{width:20px;height:20px;font-size:16px;color:#fff;background-color:rgba(31,45,61,.11);opacity:.3}.ant-carousel[data-v-35fb9ac5] .custom-slick-arrow:before{display:none}.ant-carousel[data-v-35fb9ac5] .custom-slick-arrow:hover{opacity:.5}.ant-carousel[data-v-35fb9ac5] .slick-slide h3{color:#fff;font-size:22px}h3>span[data-v-35fb9ac5]{cursor:pointer}",""]),e.exports=n},1294:function(e,t,r){var content=r(1324);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(78).default)("26176130",content,!0,{sourceMap:!1})},1323:function(e,t,r){"use strict";r(1294)},1324:function(e,t,r){var n=r(77)(!1);n.push([e.i,".search-wrapper[data-v-99d7786e]{padding:40px 0;margin-top:110px}.search-wrapper .search-box p[data-v-99d7786e]{color:#fff;text-align:center;font-weight:700;font-size:2rem}.search-wrapper .search-box .search-bg[data-v-99d7786e]{margin:0 auto;height:48px;display:flex;flex-direction:column;position:relative;z-index:10}.search-wrapper .search-box .search-bg .input[data-v-99d7786e]{border:none}.search-wrapper .search-box .search-bg .input[data-v-99d7786e] input{border:none!important;height:48px}.search-wrapper .search-box .search-bg .input[data-v-99d7786e] input:active,.search-wrapper .search-box .search-bg .input[data-v-99d7786e] input:focus{border:none!important;box-shadow:none}.search-wrapper .search-box .search-bg[data-v-99d7786e] .ant-input-search-button{width:86px;height:48px;background-color:#007dff;border:#007dff}.search-wrapper .search-box .search-bg .result-wrap[data-v-99d7786e]{width:calc(100% - .7px);height:198px;min-height:198px;overflow-y:scroll;background-color:#fff;padding:10px 0;border-top:1px solid #cacaca}.search-wrapper .search-box .search-bg .result-wrap .title[data-v-99d7786e]{font-size:13px;color:#666;padding-left:10px;padding-right:10px}.search-wrapper .search-box .search-bg .result-wrap .item .link[data-v-99d7786e]{display:flex;justify-content:space-between;align-items:center;color:#222;padding:4px 20px;cursor:pointer}.search-wrapper .search-box .search-bg .result-wrap .item[data-v-99d7786e]:hover{background-color:rgba(0,125,255,.1)}.search-wrapper .search-box .search-bg .focus-result[data-v-99d7786e],.search-wrapper .search-box .search-bg .search-result[data-v-99d7786e]{display:none}.search-wrapper .search-box .focus .input[data-v-99d7786e] input,.search-wrapper .search-box .search .input[data-v-99d7786e] input{border-radius:4px 0 0 0}.search-wrapper .search-box .focus .input[data-v-99d7786e] .ant-input-search-button,.search-wrapper .search-box .search .input[data-v-99d7786e] .ant-input-search-button{border-radius:0 4px 0 0}.search-wrapper .search-box .focus .result-wrap[data-v-99d7786e],.search-wrapper .search-box .search .result-wrap[data-v-99d7786e]{border-radius:0 0 4px 4px}.search-wrapper .search-box .focus .focus-result[data-v-99d7786e],.search-wrapper .search-box .search .search-result[data-v-99d7786e]{display:block}",""]),e.exports=n},1357:function(e,t,r){"use strict";r.r(t);var n=r(22),o=(r(91),r(659),r(115),r(660),r(302),r(61)),c={components:{AutoPlay:r(1274).default},props:{bannerTxt:{type:Array,default:function(){return[]}}},data:function(){return{keywords:"",hotSearchList:[],searchList:[],isFocus:!1,isSearch:!1,statusMapper:{product:"haveProductReviews",category:"haveCategoryInformation",fuzzy:"fuzzyMatching",notFound:"allWithout"},timer:null,historySearch:[]}},methods:{handleBannerPopShow:function(){this.$emit("handleBannerPopShow")},onSearch:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.keywords.trim()){t.next=4;break}return t.abrupt("return",!1);case 4:return t.next=6,e.$requests.indexKeysSearch({KEY_INFO:e.keywords.trim()});case 6:if(200!==(r=t.sent).status||"success"!==r.data.result){t.next=19;break}t.t0=r.data.searchStatus,t.next=t.t0===e.statusMapper.category?11:t.t0===e.statusMapper.product?13:t.t0===e.statusMapper.fuzzy?15:t.t0===e.statusMapper.notFound?17:19;break;case 11:return e.$router.push({name:"product-id",params:{id:r.data.CATEGORY_ID},query:{category_name:e.keywords.trim()}}),t.abrupt("break",19);case 13:return e.$router.push({name:"productDetail-id",params:{id:r.data.PRODUCT_ID}}),t.abrupt("break",19);case 15:return e.$router.push({name:"result-status",params:{status:"fuzzy"},query:{keywords:e.keywords.trim()}}),t.abrupt("break",19);case 17:return e.$router.push({name:"result-status",params:{status:"notFound"},query:{keywords:e.keywords.trim()}}),t.abrupt("break",19);case 19:case"end":return t.stop()}}),t)})))()},onChange:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(""!==e.keywords.trim()){t.next=5;break}e.isFocus=!0,e.isSearch=!1,t.next=9;break;case 5:return t.next=7,e.searchAutoComplete();case 7:e.searchList=t.sent,e.searchList?(e.isFocus=!1,e.isSearch=!0):(e.isFocus=!1,e.isSearch=!1);case 9:case"end":return t.stop()}}),t)})))()},onFocus:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var data,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(""!==e.keywords.trim()){t.next=8;break}return e.getHistorySearch(),e.isFocus=!0,data={CUR_PAGE:1},t.next=6,e.$requests.indexSearchHot(data);case 6:200===(r=t.sent).status&&"success"===r.data.result&&(e.hotSearchList=r.data.hotsearchlogObj);case 8:case"end":return t.stop()}}),t)})))()},onBlur:function(){var e=this;this.timer=setTimeout((function(){e.isFocus=!1}),300)},searchAutoComplete:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r,data,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=[],data={KEY_INFO:e.keywords.trim()},t.next=4,e.$requests.indexSearchAutoComplete(data);case 4:return 200===(n=t.sent).status&&"success"===n.data.result&&(r=n.data.productList),t.abrupt("return",r);case 7:case"end":return t.stop()}}),t)})))()},handleKeyWordTagClick:function(e){var t=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n,c,h,d;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return(n=o.a.get("set_history_search"))?(-1!==(c=n.findIndex((function(t){return t.ID===e.ID})))&&n.splice(c,1),n.unshift(e),o.a.set("set_history_search",n)):((h=[]).unshift(e),o.a.set("set_history_search",h)),clearTimeout(t.timer),r.next=5,t.$requests.indexKeysSearch({KEY_INFO:e.names.trim()});case 5:if(200!==(d=r.sent).status||"success"!==d.data.result){r.next=18;break}r.t0=d.data.searchStatus,r.next=r.t0===t.statusMapper.category?10:r.t0===t.statusMapper.product?12:r.t0===t.statusMapper.fuzzy?14:r.t0===t.statusMapper.notFound?16:18;break;case 10:return t.$router.push({name:"product-id",params:{id:d.data.CATEGORY_ID},query:{category_name:e.value.trim()}}),r.abrupt("break",18);case 12:return t.$router.push({name:"productDetail-id",params:{id:d.data.PRODUCT_ID}}),r.abrupt("break",18);case 14:return t.$router.push({name:"result-status",params:{status:"fuzzy"},query:{keywords:e.names.trim()}}),r.abrupt("break",18);case 16:return t.$router.push({name:"result-status",params:{status:"notFound"},query:{keywords:e.names.trim()}}),r.abrupt("break",18);case 18:case"end":return r.stop()}}),r)})))()},handleKeyWordTagClick2:function(e){var t=o.a.get("set_history_search");if(t){var r=t.findIndex((function(t){return t.ID===e.ID}));-1!==r&&t.splice(r,1),t.unshift(e),o.a.set("set_history_search",t)}else{var n=[];n.unshift(e),o.a.set("set_history_search",n)}"1"===e.TYPE?this.$router.push({name:"productDetail-id",params:{id:e.ID}}):this.$router.push({name:"product-id",params:{id:e.ID},query:{category_name:e.NAME}})},getHistorySearch:function(){this.historySearch=o.a.get("set_history_search"),console.log(this.historySearch)},deleteHistorySearch:function(){o.a.remove("set_history_search"),this.historySearch=[]}}},h=(r(1323),r(35)),component=Object(h.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("a-row",{staticClass:"search-wrapper",attrs:{type:"flex",justify:"center"}},[r("a-col",{staticClass:"search-box",attrs:{span:"13"}},[r("p",[e._v(e._s(e.$configs.CONST.SEARCH_TEXT))]),e._v(" "),r("div",{staticClass:"search-bg",class:{focus:e.isFocus,search:e.isSearch}},[r("a-input-search",{staticClass:"input",staticStyle:{width:"100%",height:"48px"},attrs:{size:"large",placeholder:"搜索产品类别、名称，看看同行推荐啥？","enter-button":"搜索"},on:{search:e.onSearch,change:e.onChange,focus:e.onFocus,blur:e.onBlur},model:{value:e.keywords,callback:function(t){e.keywords=t},expression:"keywords"}}),e._v(" "),r("div",{staticClass:"result-wrap focus-result"},[r("div",[r("h3",{staticClass:"title"},[e._v("\n            热门搜索\n          ")]),e._v(" "),e._l(e.hotSearchList,(function(t){return r("div",{key:t.ID,staticClass:"item"},[r("div",{staticClass:"link",on:{click:function(r){return e.handleKeyWordTagClick(t)}}},[r("span",[e._v(e._s(t.value))]),e._v(" "),r("span",{staticClass:"hot-icon"})])])}))],2),e._v(" "),e.historySearch?r("div",{staticStyle:{"margin-top":"10px"}},[r("h3",{staticClass:"title g-flex space-between"},[r("span",[e._v("历史搜索")]),e._v(" "),r("span",{staticStyle:{cursor:"pointer"},on:{click:e.deleteHistorySearch}},[r("a-icon",{attrs:{type:"delete"}}),e._v("删除\n            ")],1)]),e._v(" "),e._l(e.historySearch,(function(t){return r("div",{key:t.ID,staticClass:"item"},[r("div",{staticClass:"link",on:{click:function(r){return e.handleKeyWordTagClick(t)}}},[r("span",[e._v(e._s(t.names))]),e._v(" "),r("span",{staticClass:"hot-icon"})])])}))],2):e._e()]),e._v(" "),r("div",{staticClass:"result-wrap search-result"},e._l(e.searchList,(function(t){return r("div",{key:t.ID,staticClass:"item"},[r("div",{staticClass:"link",on:{click:function(r){return e.handleKeyWordTagClick2(t)}}},[r("span",[e._v(e._s(t.names))]),e._v(" "),r("span",{staticStyle:{color:"#666","font-size":"12px"}},[e._v(e._s("1"===t.TYPE?"产品":"类别"))])])])})),0)],1),e._v(" "),r("AutoPlay",{attrs:{"banner-txt":e.bannerTxt},on:{handleBannerPopShow:e.handleBannerPopShow}})],1)],1)}),[],!1,null,"99d7786e",null);t.default=component.exports;installComponents(component,{AutoPlay:r(1274).default})}}]);