(window.webpackJsonp=window.webpackJsonp||[]).push([[39,13,14],{1234:function(t,e,r){var content=r(1245);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(78).default)("6ec536b8",content,!0,{sourceMap:!1})},1244:function(t,e,r){"use strict";r(1234)},1245:function(t,e,r){var n=r(77)(!1);n.push([t.i,".search-box[data-v-11142ccb]{position:relative}.result-wrap[data-v-11142ccb]{position:absolute;width:300px;height:198px;min-height:198px;overflow-y:scroll;background-color:#fff;padding:10px 0;border:1px solid #cacaca;top:54px;z-index:10;border-radius:4px}.result-wrap .title[data-v-11142ccb]{height:30px;line-height:30px;padding:0 10px;font-size:13px;color:#666}.result-wrap .item[data-v-11142ccb]{height:32px;line-height:32px;font-size:14px;color:#222;cursor:pointer}.result-wrap .item .link[data-v-11142ccb]{display:flex;justify-content:space-between;align-items:center;color:#222;padding:4px 20px;cursor:pointer}.result-wrap .item .link[data-v-11142ccb]:hover{background-color:rgba(0,125,255,.1)}.result-wrap .item .link .name[data-v-11142ccb]{display:inline-block;width:180px;text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.focus-result[data-v-11142ccb],.search-result[data-v-11142ccb]{display:none}.focus .focus-result[data-v-11142ccb],.search .search-result[data-v-11142ccb]{display:block}",""]),t.exports=n},1246:function(t,e,r){"use strict";r.r(e);var n=r(22),o=(r(90),r(655),r(115),r(656),r(302),r(55)),c={props:{isShow:{type:Boolean,default:function(){return!1}}},data:function(){return{slogan:this.$configs.CONST.SLOGAN,keywords:"",hotSearchList:[],searchList:[],isFocus:!1,isSearch:!1,statusMapper:{product:"haveProductReviews",category:"haveCategoryInformation",fuzzy:"fuzzyMatching",notFound:"allWithout"},timer:null,historySearch:[]}},methods:{onSearch:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.keywords.trim()){e.next=4;break}return e.abrupt("return",!1);case 4:return e.next=6,t.$requests.indexKeysSearch({KEY_INFO:t.keywords.trim()});case 6:if(200!==(r=e.sent).status||"success"!==r.data.result){e.next=19;break}e.t0=r.data.searchStatus,e.next=e.t0===t.statusMapper.category?11:e.t0===t.statusMapper.product?13:e.t0===t.statusMapper.fuzzy?15:e.t0===t.statusMapper.notFound?17:19;break;case 11:return t.$router.push({name:"product-id",params:{id:r.data.CATEGORY_ID},query:{category_name:t.keywords.trim()}}),e.abrupt("break",19);case 13:return t.$router.push({name:"productDetail-id",params:{id:r.data.PRODUCT_ID}}),e.abrupt("break",19);case 15:return t.$router.push({name:"result-status",params:{status:"fuzzy"},query:{keywords:t.keywords.trim()}}),e.abrupt("break",19);case 17:return t.$router.push({name:"result-status",params:{status:"notFound"},query:{keywords:t.keywords.trim()}}),e.abrupt("break",19);case 19:case"end":return e.stop()}}),e)})))()},onChange:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==t.keywords.trim()){e.next=5;break}t.isFocus=!0,t.isSearch=!1,e.next=9;break;case 5:return e.next=7,t.searchAutoComplete();case 7:t.searchList=e.sent,t.searchList?(t.isFocus=!1,t.isSearch=!0):(t.isFocus=!1,t.isSearch=!1);case 9:case"end":return e.stop()}}),e)})))()},onFocus:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var data,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==t.keywords.trim()){e.next=8;break}return t.getHistorySearch(),t.isFocus=!0,data={CUR_PAGE:1},e.next=6,t.$requests.indexSearchHot(data);case 6:200===(r=e.sent).status&&"success"===r.data.result&&(t.hotSearchList=r.data.hotsearchlogObj);case 8:case"end":return e.stop()}}),e)})))()},onBlur:function(){var t=this;this.timer=setTimeout((function(){t.isFocus=!1}),300)},searchAutoComplete:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,data,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=[],data={KEY_INFO:t.keywords.trim()},e.next=4,t.$requests.indexSearchAutoComplete(data);case 4:return 200===(n=e.sent).status&&"success"===n.data.result&&(r=n.data.productList),e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})))()},handleKeyWordTagClick:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n,c,d,l;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return(n=o.a.get("set_history_search"))?(-1!==(c=n.findIndex((function(e){return e.ID===t.ID})))&&n.splice(c,1),n.unshift(t),o.a.set("set_history_search",n)):((d=[]).unshift(t),o.a.set("set_history_search",d)),clearTimeout(e.timer),r.next=5,e.$requests.indexKeysSearch({KEY_INFO:t.names.trim()});case 5:if(200!==(l=r.sent).status||"success"!==l.data.result){r.next=18;break}r.t0=l.data.searchStatus,r.next=r.t0===e.statusMapper.category?10:r.t0===e.statusMapper.product?12:r.t0===e.statusMapper.fuzzy?14:r.t0===e.statusMapper.notFound?16:18;break;case 10:return e.$router.push({name:"company-id",params:{id:l.data.CATEGORY_ID},query:{category_name:t.value.trim()}}),r.abrupt("break",18);case 12:return e.$router.push({name:"productDetail-id",params:{id:l.data.PRODUCT_ID}}),r.abrupt("break",18);case 14:return e.$router.push({name:"result-status",params:{status:"fuzzy"},query:{keywords:t.names.trim()}}),r.abrupt("break",18);case 16:return e.$router.push({name:"result-status",params:{status:"notFound"},query:{keywords:t.names.trim()}}),r.abrupt("break",18);case 18:case"end":return r.stop()}}),r)})))()},handleKeyWordTagClick2:function(t){var e=o.a.get("set_history_search");if(e){var r=e.findIndex((function(e){return e.ID===t.ID}));-1!==r&&e.splice(r,1),e.unshift(t),o.a.set("set_history_search",e)}else{var n=[];n.unshift(t),o.a.set("set_history_search",n)}"1"===t.TYPE?this.$router.push({name:"productDetail-id",params:{id:t.ID}}):this.$router.push({name:"company-id",params:{id:t.ID},query:{category_name:t.NAME}})},getHistorySearch:function(){this.historySearch=o.a.get("set_history_search"),console.log(this.historySearch)},deleteHistorySearch:function(){o.a.remove("set_history_search"),this.historySearch=[]}}},d=(r(1244),r(35)),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a-layout-header",{staticClass:"global-header"},[n("div",{staticClass:"g-wrapper g-flex space-between"},[n("h1",{staticClass:"logo-wrap"},[n("nuxt-link",{attrs:{to:"/"}},[n("img",{staticClass:"logo",attrs:{src:r(657),alt:"选型宝_企业软件的大众点评-ERP系统_BI_CRM系统_OA系统_数据库软件_BPM系统_企业邮箱..."}})]),t._v(" "),n("strong",[t._v(t._s(t.slogan))])],1),t._v(" "),n("div",{staticClass:"g-flex"},[n("nav",{staticClass:"nav"},[n("a",{staticClass:"link",attrs:{href:"/",title:"写点评,就给钱"}},[n("span",{staticClass:"icon review"}),t._v(" "),n("span",[t._v("写点评")])]),t._v(" "),n("a",{staticClass:"link",attrs:{href:"/all",title:"软件类别"}},[n("span",{staticClass:"icon cate"}),t._v(" "),n("span",[t._v("软件类别")])]),t._v(" "),n("a",{staticClass:"link",attrs:{href:"https://e.xuanxingbao.com/",title:"企业入驻"}},[n("span",{staticClass:"icon"}),t._v(" "),n("span",{staticClass:"entry"},[t._v("企业入驻")])])]),t._v(" "),t.isShow?n("div",{staticClass:"search-box",class:{focus:t.isFocus,search:t.isSearch}},[n("a-input-search",{staticStyle:{width:"300px"},attrs:{placeholder:"搜索产品类别、名称，看看同行推荐啥？"},on:{search:t.onSearch,change:t.onChange,focus:t.onFocus,blur:t.onBlur},model:{value:t.keywords,callback:function(e){t.keywords=e},expression:"keywords"}}),t._v(" "),n("div",{staticClass:"result-wrap focus-result"},[n("div",[n("h3",{staticClass:"title"},[t._v("\n              热门搜索\n            ")]),t._v(" "),t._l(t.hotSearchList,(function(e){return n("div",{key:e.ID,staticClass:"item"},[n("div",{staticClass:"link",on:{click:function(r){return t.handleKeyWordTagClick(e)}}},[n("span",{staticClass:"name"},[t._v(t._s(e.names))]),t._v(" "),n("span",{staticClass:"hot-icon"})])])}))],2),t._v(" "),t.historySearch?n("div",{staticStyle:{"margin-top":"10px"}},[n("h3",{staticClass:"title g-flex space-between"},[n("span",[t._v("历史搜索")]),t._v(" "),n("span",{staticStyle:{cursor:"pointer"},on:{click:t.deleteHistorySearch}},[n("a-icon",{attrs:{type:"delete"}}),t._v("删除\n              ")],1)]),t._v(" "),t._l(t.historySearch,(function(e){return n("div",{key:e.ID,staticClass:"item"},[n("div",{staticClass:"link",on:{click:function(r){return t.handleKeyWordTagClick(e)}}},[n("span",{staticClass:"name"},[t._v(t._s(e.names))]),t._v(" "),n("span",{staticClass:"hot-icon"})])])}))],2):t._e()]),t._v(" "),n("div",{staticClass:"result-wrap search-result"},t._l(t.searchList,(function(e){return n("div",{key:e.ID,staticClass:"item"},[n("div",{staticClass:"link",on:{click:function(r){return t.handleKeyWordTagClick2(e)}}},[n("span",{staticClass:"name"},[t._v(t._s(e.names))]),t._v(" "),n("span",{staticStyle:{color:"#666","font-size":"12px"}},[t._v(t._s("1"===e.TYPE?"产品":"类别"))])])])})),0)],1):t._e()])])])}),[],!1,null,"11142ccb",null);e.default=component.exports},1249:function(t,e,r){"use strict";r.r(e);var n=r(1246),o=r(303),c={name:"Header",components:{pHeader:n.default,mHeader:o.default},props:{isShow:{type:Boolean,default:function(){return!1}}}},d=r(35),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"header-wrap"},[r("pHeader",{staticClass:"display-pc",attrs:{"is-show":t.isShow}}),t._v(" "),r("mHeader",{staticClass:"display-m"})],1)}),[],!1,null,"5a0303a8",null);e.default=component.exports},1366:function(t,e,r){var content=r(1403);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(78).default)("236ffd1f",content,!0,{sourceMap:!1})},1402:function(t,e,r){"use strict";r(1366)},1403:function(t,e,r){var n=r(77),o=r(301),c=r(1352),d=n(!1),l=o(c);d.push([t.i,".banner-wrap[data-v-19a2d384]{background-image:url("+l+");background-size:100% 100%}.hero-search[data-v-19a2d384]{height:424px}.headline2[data-v-19a2d384]{font-size:32px;margin-bottom:36px;margin-top:20px}.container-index .intro[data-v-19a2d384]{background-color:#007dff;padding:30px 0}.container-index .intro h2[data-v-19a2d384],.container-index .intro p[data-v-19a2d384]{color:#fff}.tab-bar[data-v-19a2d384]{border-radius:4px;overflow:hidden}.tab-bar .popular-category[data-v-19a2d384]{cursor:pointer;width:282px;background-color:#fff;padding:18px 24px;font-size:16px}.tab-bar .popular-category.on[data-v-19a2d384]{font-weight:700;color:#fff;background-color:#007dff;width:322px;border-radius:0 4px 4px 0}.tab-bar .popular-category.on[data-v-19a2d384]:hover{color:#fff}.tab-bar .popular-category[data-v-19a2d384]:hover{color:#007dff}.tab-bar .popular-category .right-icon[data-v-19a2d384]{display:inline-block;width:17px;height:12px;background:url(https://cdn.36dianping.com/_nuxt/img/arrow-right.cb3d191.svg) 50%/contain no-repeat}@media (max-width:767px){.container-index .order .card-wrap[data-v-19a2d384]{margin:-16px 0!important}.container-index .order .card-wrap .c-card-wrap[data-v-19a2d384]{padding:0!important}.container-index .order .card-wrap .c-card-wrap .c-card[data-v-19a2d384]{margin-top:0;margin-bottom:10px}.container-index .order .pop-card-wrap[data-v-19a2d384]{margin-left:16px;margin-right:16px}.container-index .order .pop-card-wrap .cate-wrap[data-v-19a2d384]{width:100%}.container-index .intro p[data-v-19a2d384]{padding:0 10px}.tab-bar[data-v-19a2d384]{padding:0 10px!important;margin-bottom:10px;margin-top:10px}.tab-bar .popular-category[data-v-19a2d384]{display:inline-block;font-size:12px;margin:0}.tab-bar .popular-category.on[data-v-19a2d384]{color:#fff;border-left:none;background-color:#007dff;border-radius:4px}}.reviews[data-v-19a2d384]{overflow-y:hidden}.review-box[data-v-19a2d384]{min-height:365px}.view-all[data-v-19a2d384]{font-size:16px;color:#ff492c}.get-more-btn[data-v-19a2d384]{padding-top:30px;padding-bottom:80px}.get-more-btn>span[data-v-19a2d384]{padding:10px 42px;border-radius:22px;color:#007dff;border:1px solid #007dff;transition:.5s;cursor:pointer}.get-more-btn>span[data-v-19a2d384]:hover{background-color:#007dff;color:#fff}[data-v-19a2d384] .ant-anchor-wrapper{display:none}[data-v-19a2d384] .ant-affix .ant-anchor-wrapper{display:block}",""]),t.exports=d},1423:function(t,e,r){"use strict";r.r(e);var n=r(22),o=(r(90),r(116),r(79),r(92),r(80),r(1343)),c=r(1344),d=r(1345),l=r(1346),h=r(1322),f=r(1247),v=r(1248),m={components:{swiper:d.default,applyCase:o.default,news:c.default,bannerPop:l.default,rightNav:f.default,qrcode:v.default},asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,o,c,d,l,f,v,m,_,y,x,C,w,k,S,R,P;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="",o=["点评就给钱，最高100元！"],t.$requests.cateBanner().then((function(e){if(200===e.status&&"success"===e.data.result){var c=(n=e.data.recommendCategoryObj.category_name)+"软件诚邀用户点评！";o.push(c);var path="pages/comment_lists/main?cid=".concat(e.data.recommendCategoryObj.category_id,"&cname=").concat(e.data.recommendCategoryObj.category_name);t.$requests.qrcodeGet({PATH:path}).then((function(t){200===t.status&&"success"===t.data.result&&(r=t.data.data)}))}})),e.next=5,t.$requests.indexLatestComment();case 5:return c=e.sent,d=200===c.status&&"success"===c.data.result?c.data.scorelist:[],console.log("最新点评:",d),l=[],e.next=11,t.$requests.publicHotCategoryRank();case 11:return f=e.sent,l=f.data.categoryListObj.map((function(t){t.PRODUCTARRAY=JSON.parse(t.PRODUCTARRAY);var e=JSON.parse(t.USERARRAY).map((function(t){return Object(h.a)("headimages",t)}));return t.USERARRAY=e,t})).slice(0,6),v=f.data.categoryListObj,e.next=16,t.$requests.indexSelectCatePro({category_id:v[0].CATEGORY_ID});case 16:return m=e.sent,_=[],200===m.status&&"success"===m.data.result&&(_=m.data.productlist.filter((function(t){return t.product_id})).slice(0,9)),y=[],x=1,C=1,e.next=24,t.$requests.indexCases({keywords:"",pageSize:10,page:x});case 24:return 200===(w=e.sent).status&&"success"===w.data.result&&(y=w.data.data.caseList,C=w.data.data.totalPage),k=[],S=1,R=1,e.next=31,t.$requests.indexNews({keywords:"",pageSize:10,page:S});case 31:return 200===(P=e.sent).status&&"success"===P.data.result&&(k=P.data.data.newsList,R=P.data.data.totalPage),e.abrupt("return",{bannerTxt:o,slogan:t.$configs.CONST.SLOGAN,latestCommentList:d,HotCategoryRankList:l,hotCateGoryList:v.slice(0,9),selectCateProList:_,selectedCategory:v[0].CATEGORY_ID,selectedCategoryName:v[0].CATEGORY_NAME,caseList:y,caseTotalPage:C,caseCurrentPage:x,newsList:k,newsTotalPage:R,newsCurrentPage:S,imgUrl:r,bannerPopShow:!1,recommendCate:n});case 34:case"end":return e.stop()}}),e)})))()},methods:{handleBannerPopShow:function(){this.bannerPopShow=!0},handleBannerPopHide:function(){this.bannerPopShow=!1},handleSelectCategory:function(t){var e=this;this.selectedCategory=t.CATEGORY_ID,this.selectedCategoryName=t.CATEGORY_NAME,this.selectedCategoryList=t.PRODUCTARRAY,this.$requests.indexSelectCatePro({category_id:t.CATEGORY_ID}).then((function(t){200===t.status&&"success"===t.data.result&&(e.selectCateProList=t.data.productlist.filter((function(t){return t.product_id})).slice(0,9))}))},getMoreCase:function(){var t=this;this.caseCurrentPage>=this.caseTotalPage||(this.caseCurrentPage++,this.$requests.indexCases({keywords:"",pageSize:10,page:this.caseCurrentPage}).then((function(e){200===e.status&&"success"===e.data.result&&(t.caseList=t.caseList.concat(e.data.data.caseList))})))},getMoreNews:function(){var t=this;this.newsCurrentPage>=this.newsTotalPage||(this.newsCurrentPage++,this.$requests.indexNews({keywords:"",pageSize:10,page:this.newsCurrentPage}).then((function(e){200===e.status&&"success"===e.data.result&&(t.newsList=t.newsList.concat(e.data.data.newsList))})))},navigateToAll:function(){this.$router.push({name:"all"})}},head:function(){return{title:"选型宝_企业软件的大众点评-ERP_BI_CRM_OA_企业邮箱怎么选？",meta:[{hid:"description",name:"description",content:"ERP系统_BI_CRM系统_OA系统_数据库软件_BPM系统_企业邮箱...想了解各种企业软件的用户口碑?就上选型宝, 企业级软件的大众点评，实名制的CIO选型经验交流社区"},{hid:"keywords",name:"keywords",content:"ERP_BI_CRM_OA_数据库_BPM_企业邮箱"}]}}},_=(r(1402),r(35)),component=Object(_.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"main"},[r("div",{staticClass:"banner-wrap"},[r("Header"),t._v(" "),r("a-row",{staticClass:"display-flex"},[r("a-col",{staticClass:"hero-search",attrs:{span:"24"}},[r("SearchBox",{attrs:{"banner-txt":t.bannerTxt},on:{handleBannerPopShow:t.handleBannerPopShow}})],1)],1)],1),t._v(" "),r("div",{staticClass:"container-index"},[r("a-anchor",[r("Header2")],1),t._v(" "),r("div",{staticClass:"g-wrapper pad-t-20"},[r("h2",{staticClass:"headline"},[t._v("\n          大家正在点评\n        ")]),t._v(" "),r("a-row",{attrs:{type:"flex"}},[r("a-col",{staticClass:"review-box reviews",attrs:{lg:24,md:24,sm:24}},[r("div",{staticClass:"swiper-component-wrap"},[r("swiper",{attrs:{list:t.latestCommentList}})],1)])],1)],1),t._v(" "),r("div",{staticClass:"g-wrapper pad-t-10 pad-b-30"},[r("h2",{staticClass:"headline"},[t._v("\n          热门厂商 实时口碑排名\n        ")]),t._v(" "),r("div",{staticClass:"review-box"},[r("a-row",{staticClass:"card-wrap space-around",attrs:{type:"flex",gutter:[16,16]}},t._l(t.HotCategoryRankList,(function(t,e){return r("a-col",{key:"cate-"+e,staticClass:"c-card-wrap",staticStyle:{"padding-bottom":"0"},attrs:{lg:"8",md:"8",sm:"24"}},[r("nuxt-link",{attrs:{to:{name:"company-id",params:{id:t.CATEGORY_ID},query:{category_name:t.CATEGORY_NAME}}}},[r("CategoryRank",{attrs:{item:t}})],1)],1)})),1)],1)]),t._v(" "),r("div",{staticClass:"g-wrapper pad-t-20 pad-b-20"},[r("h2",{staticClass:"g-flex space-between headline"},[r("span",[t._v("热门软件产品")]),t._v(" "),r("nuxt-link",{staticClass:"view-all",attrs:{to:{name:"product-id",params:{id:t.selectedCategory},query:{category_name:t.selectedCategoryName}}}},[t._v("\n            查看所有"+t._s(t.selectedCategoryName)+"产品\n          ")])],1),t._v(" "),r("div",{staticClass:"pop-card-wrap"},[r("a-row",{attrs:{type:"flex",gutter:[32,32]}},[r("a-col",{attrs:{lg:7,md:7,sm:24}},[r("div",{staticClass:"tab-bar"},[t._l(t.hotCateGoryList,(function(e){return r("div",{key:e.CATEGORY_ID,staticClass:"popular-category g-flex space-between",class:e.CATEGORY_ID===t.selectedCategory?"on":"",on:{click:function(r){return t.handleSelectCategory(e)}}},[r("span",{staticClass:"txt"},[t._v(t._s(e.CATEGORY_NAME))]),t._v(" "),r("span",{staticClass:"right-icon"})])})),t._v(" "),r("div",{staticClass:"popular-category g-flex space-between",on:{click:t.navigateToAll}},[r("span",{staticClass:"txt"},[t._v("查看所有类别")]),t._v(" "),r("a-icon",{attrs:{type:"right"}})],1)],2)]),t._v(" "),r("a-col",{attrs:{lg:17,md:17,sm:24}},[r("a-row",{attrs:{type:"flex",gutter:[32,32]}},t._l(t.selectCateProList,(function(e){return r("a-col",{key:e.product_id,staticClass:"cate-wrap",staticStyle:{padding:"12px"},attrs:{lg:"8",md:"10",sm:"20"}},[r("nuxt-link",{attrs:{to:{name:"productDetail-id",params:{id:e.product_id}}}},[r("ProductCard",{attrs:{product:e,"category-name":t.selectedCategoryName}})],1)],1)})),1)],1)],1)],1)])],1),t._v(" "),r("div",{staticClass:"container-index",staticStyle:{"background-color":"#ffffff","padding-top":"40px"}},[r("div",{staticClass:"g-wrapper"},[r("h2",{staticClass:"headline"},[t._v("\n          应用案例\n        ")]),t._v(" "),r("apply-case",{attrs:{"case-list":t.caseList}}),t._v(" "),r("div",{staticClass:"get-more-btn g-flex center"},[r("span",{on:{click:t.getMoreCase}},[t._v("查看更多")])])],1),t._v(" "),r("div",{staticClass:"g-wrapper"},[r("h2",{staticClass:"headline"},[t._v("\n          热门新闻\n        ")]),t._v(" "),r("news",{attrs:{"news-list":t.newsList}}),t._v(" "),r("div",{staticClass:"get-more-btn g-flex center"},[r("span",{on:{click:t.getMoreNews}},[t._v("查看更多")])])],1)]),t._v(" "),r("banner-pop",{directives:[{name:"show",rawName:"v-show",value:t.bannerPopShow,expression:"bannerPopShow"}],attrs:{"recommend-cate":t.recommendCate,"img-url":t.imgUrl},on:{handleBannerPopHide:t.handleBannerPopHide}}),t._v(" "),r("rightNav",[r("qrcode")],1),t._v(" "),r("Footer")],1)}),[],!1,null,"19a2d384",null);e.default=component.exports;installComponents(component,{Header:r(662).default,SearchBox:r(1347).default,Header2:r(1249).default,CategoryRank:r(1348).default,ProductCard:r(1349).default,Footer:r(1250).default})}}]);