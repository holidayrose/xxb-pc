(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{815:function(t,e,r){"use strict";r.r(e);var n=r(32),o=(r(121),r(108),r(45),r(446),r(122),r(88)),c={props:{isShow:{type:Boolean,default:function(){return!1}}},data:function(){return{slogan:this.$configs.CONST.SLOGAN,keywords:"",hotSearchList:[],searchList:[],isFocus:!1,isSearch:!1,statusMapper:{product:"haveProductReviews",category:"haveCategoryInformation",fuzzy:"fuzzyMatching",notFound:"allWithout"},timer:null,historySearch:[]}},methods:{handleBannerPopShow:function(){this.$emit("handleBannerPopShow")},onSearch:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,o,c,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.keywords.trim()){e.next=4;break}return e.abrupt("return",!1);case 4:return e.next=6,t.$requests.indexKeysSearch({KEY_INFO:t.keywords.trim()});case 6:if(200!==(r=e.sent).status||"success"!==r.data.result){e.next=23;break}e.t0=r.data.searchStatus,e.next=e.t0===t.statusMapper.category?11:e.t0===t.statusMapper.product?14:e.t0===t.statusMapper.fuzzy?17:e.t0===t.statusMapper.notFound?20:23;break;case 11:return n=t.$router.resolve({name:"product-rank-id",params:{id:r.data.CATEGORY_ID}}),window.open(n.href,"_blank"),e.abrupt("break",23);case 14:return o=t.$router.resolve({name:"product-detail-id",params:{id:r.data.PRODUCT_ID}}),window.open(o.href,"_blank"),e.abrupt("break",23);case 17:return c=t.$router.resolve({name:"result-status",params:{status:"fuzzy"},query:{keywords:t.keywords.trim()}}),window.open(c.href,"_blank"),e.abrupt("break",23);case 20:return l=t.$router.resolve({name:"result-status",params:{status:"notFound"},query:{keywords:t.keywords.trim()}}),window.open(l.href,"_blank"),e.abrupt("break",23);case 23:case"end":return e.stop()}}),e)})))()},onChange:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==t.keywords.trim()){e.next=5;break}t.isFocus=!0,t.isSearch=!1,e.next=9;break;case 5:return e.next=7,t.searchAutoComplete();case 7:t.searchList=e.sent,t.searchList?(t.isFocus=!1,t.isSearch=!0):(t.isFocus=!1,t.isSearch=!1);case 9:case"end":return e.stop()}}),e)})))()},onFocus:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var data,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==t.keywords.trim()){e.next=8;break}return t.getHistorySearch(),t.isFocus=!0,data={CUR_PAGE:1},e.next=6,t.$requests.indexSearchHot(data);case 6:200===(r=e.sent).status&&"success"===r.data.result&&(t.hotSearchList=r.data.hotsearchlogObj);case 8:case"end":return e.stop()}}),e)})))()},onBlur:function(){var t=this;this.timer=setTimeout((function(){t.isFocus=!1}),300)},searchAutoComplete:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,data,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=[],data={KEY_INFO:t.keywords.trim()},e.next=4,t.$requests.indexSearchAutoComplete(data);case 4:return 200===(n=e.sent).status&&"success"===n.data.result&&(r=n.data.productList),e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})))()},handleKeyWordTagClick:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n,c,l,h,d,v,_,f;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return(n=o.a.get("set_history_search"))?(-1!==(c=n.findIndex((function(e){return e.ID===t.ID})))&&n.splice(c,1),n.unshift(t),o.a.set("set_history_search",n)):((l=[]).unshift(t),o.a.set("set_history_search",l)),clearTimeout(e.timer),r.next=5,e.$requests.indexKeysSearch({KEY_INFO:t.names.trim()});case 5:if(200!==(h=r.sent).status||"success"!==h.data.result){r.next=23;break}r.t0=h.data.searchStatus,r.next=r.t0===e.statusMapper.category?10:r.t0===e.statusMapper.product?13:r.t0===e.statusMapper.fuzzy?16:r.t0===e.statusMapper.notFound?19:22;break;case 10:return d=e.$router.resolve({name:"company-rank-id",params:{id:h.data.CATEGORY_ID}}),window.open(d.href,"_blank"),r.abrupt("break",22);case 13:return v=e.$router.resolve({name:"product-detail-id",params:{id:h.data.PRODUCT_ID}}),window.open(v.href,"_blank"),r.abrupt("break",22);case 16:return _=e.$router.resolve({name:"result-status",params:{status:"fuzzy"},query:{keywords:t.names.trim()}}),window.open(_.href,"_blank"),r.abrupt("break",22);case 19:return f=e.$router.resolve({name:"result-status",params:{status:"notFound"},query:{keywords:t.names.trim()}}),window.open(f.href,"_blank"),r.abrupt("break",22);case 22:e.onBlur();case 23:case"end":return r.stop()}}),r)})))()},handleKeyWordTagClick2:function(t){var e=o.a.get("set_history_search");if(e){var r=e.findIndex((function(e){return e.ID===t.ID}));-1!==r&&e.splice(r,1),e.unshift(t),o.a.set("set_history_search",e)}else{var n=[];n.unshift(t),o.a.set("set_history_search",n)}if("1"===t.TYPE){var c=this.$router.resolve({name:"product-detail-id",params:{id:t.ID}});window.open(c.href,"_blank")}else{var l=this.$router.resolve({name:"company-rank-id",params:{id:t.ID}});window.open(l.href,"_blank")}this.onBlur()},getHistorySearch:function(){this.historySearch=o.a.get("set_history_search")},deleteHistorySearch:function(){o.a.remove("set_history_search"),this.historySearch=[]}}},l=r(48),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a-layout-header",{staticClass:"global-header"},[n("div",{staticClass:"g-wrapper g-flex space-between"},[n("div",{staticClass:"logo-wrap"},[n("nuxt-link",{attrs:{to:"/"}},[n("img",{staticClass:"logo",attrs:{src:r(447),alt:"选型宝_企业软件的大众点评-ERP系统_BI_CRM系统_OA系统_数据库软件_BPM系统_企业邮箱..."}})]),t._v(" "),n("strong",[t._v(t._s(t.slogan))])],1),t._v(" "),n("div",{staticClass:"g-flex"},[n("nav",{staticClass:"nav"},[n("div",{staticClass:"link",on:{click:t.handleBannerPopShow}},[n("span",{staticClass:"icon review"}),t._v(" "),n("span",[t._v("写点评就给钱")])]),t._v(" "),n("nuxt-link",{staticClass:"link",attrs:{to:"/all/",title:"软件类别",target:"_blank"}},[n("span",{staticClass:"icon cate"}),t._v(" "),n("span",[t._v("软件类别")])]),t._v(" "),n("a",{staticClass:"link",attrs:{href:"https://e.xuanxingbao.com/",title:"企业入驻",target:"_blank"}},[n("span",{staticClass:"icon"}),t._v(" "),n("span",{staticClass:"entry"},[t._v("企业入驻")])])],1),t._v(" "),t.isShow?n("div",{staticClass:"search-box"},[n("div",{staticClass:"head-search-input",class:{focus:t.isFocus,search:t.isSearch}},[n("a-input-search",{staticClass:"input",staticStyle:{width:"300px"},attrs:{placeholder:"搜索产品类别、名称，看看同行推荐啥？"},on:{search:t.onSearch,change:t.onChange,focus:t.onFocus,blur:t.onBlur},model:{value:t.keywords,callback:function(e){t.keywords=e},expression:"keywords"}}),t._v(" "),n("div",{staticClass:"result-wrap focus-result"},[n("div",[n("h3",{staticClass:"title"},[t._v("\n                热门搜索\n              ")]),t._v(" "),t._l(t.hotSearchList,(function(e){return n("div",{key:e.ID,staticClass:"item"},[n("div",{staticClass:"link",on:{click:function(r){return t.handleKeyWordTagClick(e)}}},[n("span",{staticClass:"name"},[t._v(t._s(e.names))]),t._v(" "),n("span",{staticClass:"hot-icon"})])])}))],2),t._v(" "),t.historySearch?n("div",{staticStyle:{"margin-top":"10px"}},[n("h3",{staticClass:"title g-flex space-between"},[n("span",[t._v("历史搜索")]),t._v(" "),n("span",{staticStyle:{cursor:"pointer"},on:{click:t.deleteHistorySearch}},[n("a-icon",{attrs:{type:"delete"}}),t._v("删除\n                ")],1)]),t._v(" "),t._l(t.historySearch,(function(e){return n("div",{key:e.ID,staticClass:"item"},[n("div",{staticClass:"link",on:{click:function(r){return t.handleKeyWordTagClick(e)}}},[n("span",{staticClass:"name"},[t._v(t._s(e.names))]),t._v(" "),n("span",{staticClass:"hot-icon"})])])}))],2):t._e()]),t._v(" "),n("div",{staticClass:"result-wrap search-result"},t._l(t.searchList,(function(e){return n("div",{key:e.ID,staticClass:"item"},[n("div",{staticClass:"link",on:{click:function(r){return t.handleKeyWordTagClick2(e)}}},[n("span",{staticClass:"name"},[t._v(t._s(e.names))]),t._v(" "),n("span",{staticStyle:{color:"#666","font-size":"12px"}},[t._v(t._s("1"===e.TYPE?"产品":"类别"))])])])})),0)],1)]):t._e()])])])}),[],!1,null,null,null);e.default=component.exports}}]);