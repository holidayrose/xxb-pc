(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{1350:function(t,e,r){var content=r(1378);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(78).default)("829cb7ea",content,!0,{sourceMap:!1})},1377:function(t,e,r){"use strict";r(1350)},1378:function(t,e,r){var n=r(77),c=r(301),o=r(1351),d=n(!1),l=c(o);d.push([t.i,".banner-wrap[data-v-7dcce0c1]{background-image:url("+l+");background-size:100% 100%}.hero-search[data-v-7dcce0c1]{height:424px}.headline2[data-v-7dcce0c1]{font-size:32px;margin-bottom:36px;margin-top:20px}.container-index .intro[data-v-7dcce0c1]{background-color:#007dff;padding:30px 0}.container-index .intro h2[data-v-7dcce0c1],.container-index .intro p[data-v-7dcce0c1]{color:#fff}.tab-bar[data-v-7dcce0c1]{border-radius:4px;overflow:hidden}.tab-bar .popular-category[data-v-7dcce0c1]{cursor:pointer;width:282px;background-color:#fff;padding:18px 24px;font-size:16px}.tab-bar .popular-category.on[data-v-7dcce0c1]{font-weight:700;color:#fff;background-color:#007dff;width:322px;border-radius:0 4px 4px 0}.tab-bar .popular-category.on[data-v-7dcce0c1]:hover{color:#fff}.tab-bar .popular-category[data-v-7dcce0c1]:hover{color:#007dff}.tab-bar .popular-category .right-icon[data-v-7dcce0c1]{display:inline-block;width:17px;height:12px;background:url(https://cdn.36dianping.com/_nuxt/img/arrow-right.cb3d191.svg) 50%/contain no-repeat}@media (max-width:767px){.container-index .order .card-wrap[data-v-7dcce0c1]{margin:-16px 0!important}.container-index .order .card-wrap .c-card-wrap[data-v-7dcce0c1]{padding:0!important}.container-index .order .card-wrap .c-card-wrap .c-card[data-v-7dcce0c1]{margin-top:0;margin-bottom:10px}.container-index .order .pop-card-wrap[data-v-7dcce0c1]{margin-left:16px;margin-right:16px}.container-index .order .pop-card-wrap .cate-wrap[data-v-7dcce0c1]{width:100%}.container-index .intro p[data-v-7dcce0c1]{padding:0 10px}.tab-bar[data-v-7dcce0c1]{padding:0 10px!important;margin-bottom:10px;margin-top:10px}.tab-bar .popular-category[data-v-7dcce0c1]{display:inline-block;font-size:12px;margin:0}.tab-bar .popular-category.on[data-v-7dcce0c1]{color:#fff;border-left:none;background-color:#007dff;border-radius:4px}}.reviews[data-v-7dcce0c1]{height:290px;overflow-y:hidden}.review-box[data-v-7dcce0c1]{min-height:290px}.view-all[data-v-7dcce0c1]{font-size:16px;color:#ff492c}.get-more-btn[data-v-7dcce0c1]{padding-top:30px;padding-bottom:80px}.get-more-btn>span[data-v-7dcce0c1]{padding:10px 42px;border-radius:22px;color:#007dff;border:1px solid #007dff;transition:.5s;cursor:pointer}.get-more-btn>span[data-v-7dcce0c1]:hover{background-color:#007dff;color:#fff}",""]),t.exports=d},1412:function(t,e,r){"use strict";r.r(e);var n=r(22),c=(r(90),r(116),r(79),r(92),r(80),r(1341)),o=r(1342),d=r(1343),l=r(1344),f=r(1320),v=r(1345),h=r(1246),m=r(1247),C={components:{swiper:d.default,applyCase:c.default,news:o.default,bannerPop:l.default,adSwiper:v.default,rightNav:h.default,qrcode:m.default},asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,c,o,d,l,v,h,m,C,w,x,_,y,P,R,k,A;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="",c=["点评就给钱，最高100元！"],t.$requests.cateBanner().then((function(e){if(200===e.status&&"success"===e.data.result){var o=(n=e.data.recommendCategoryObj.category_name)+"软件诚邀用户点评！马上去点评";c.push(o);var path="pages/comment_lists/main?cid=".concat(e.data.recommendCategoryObj.category_id,"&cname=").concat(e.data.recommendCategoryObj.category_name);t.$requests.qrcodeGet({PATH:path}).then((function(t){200===t.status&&"success"===t.data.result&&(r=t.data.data)}))}})),e.next=5,t.$requests.indexLatestComment();case 5:return o=e.sent,d=200===o.status&&"success"===o.data.result?o.data.scorelist:[],l=[],e.next=10,t.$requests.publicHotCategoryRank();case 10:return v=e.sent,l=v.data.categoryListObj.map((function(t){t.PRODUCTARRAY=JSON.parse(t.PRODUCTARRAY);var e=JSON.parse(t.USERARRAY).map((function(t){return Object(f.a)("headimages",t)}));return t.USERARRAY=e,t})).slice(0,6),h=v.data.categoryListObj,e.next=15,t.$requests.indexSelectCatePro({category_id:h[0].CATEGORY_ID});case 15:return m=e.sent,C=[],200===m.status&&"success"===m.data.result&&(C=m.data.productlist.filter((function(t){return t.product_id})).slice(0,9)),w=[],x=1,_=1,e.next=23,t.$requests.indexCases({keywords:"",pageSize:10,page:x});case 23:return 200===(y=e.sent).status&&"success"===y.data.result&&(w=y.data.data.caseList,_=y.data.data.totalPage),P=[],R=1,k=1,e.next=30,t.$requests.indexNews({keywords:"",pageSize:10,page:R});case 30:return 200===(A=e.sent).status&&"success"===A.data.result&&(P=A.data.data.newsList,k=A.data.data.totalPage),e.abrupt("return",{bannerTxt:c,slogan:t.$configs.CONST.SLOGAN,latestCommentList:d,HotCategoryRankList:l,hotCateGoryList:h.slice(0,9),selectCateProList:C,selectedCategory:h[0].CATEGORY_ID,selectedCategoryName:h[0].CATEGORY_NAME,caseList:w,caseTotalPage:_,caseCurrentPage:x,newsList:P,newsTotalPage:k,newsCurrentPage:R,imgUrl:r,bannerPopShow:!1,recommendCate:n});case 33:case"end":return e.stop()}}),e)})))()},methods:{handleBannerPopShow:function(){this.bannerPopShow=!0},handleBannerPopHide:function(){this.bannerPopShow=!1},handleSelectCategory:function(t){var e=this;this.selectedCategory=t.CATEGORY_ID,this.selectedCategoryName=t.CATEGORY_NAME,this.selectedCategoryList=t.PRODUCTARRAY,this.$requests.indexSelectCatePro({category_id:t.CATEGORY_ID}).then((function(t){200===t.status&&"success"===t.data.result&&(e.selectCateProList=t.data.productlist.filter((function(t){return t.product_id})).slice(0,9))}))},getMoreCase:function(){var t=this;this.caseCurrentPage>=this.caseTotalPage||(this.caseCurrentPage++,this.$requests.indexCases({keywords:"",pageSize:10,page:this.caseCurrentPage}).then((function(e){200===e.status&&"success"===e.data.result&&(t.caseList=t.caseList.concat(e.data.data.caseList))})))},getMoreNews:function(){var t=this;this.newsCurrentPage>=this.newsTotalPage||(this.newsCurrentPage++,this.$requests.indexNews({keywords:"",pageSize:10,page:this.newsCurrentPage}).then((function(e){200===e.status&&"success"===e.data.result&&(t.newsList=t.newsList.concat(e.data.data.newsList))})))},navigateToAll:function(){this.$router.push({name:"all"})}},head:function(){return{title:"选型宝_企业软件的大众点评-ERP_BI_CRM_OA_企业邮箱怎么选？",meta:[{hid:"description",name:"description",content:"ERP系统_BI_CRM系统_OA系统_数据库软件_BPM系统_企业邮箱...想了解各种企业软件的用户口碑?就上选型宝, 企业级软件的大众点评，实名制的CIO选型经验交流社区"},{hid:"keywords",name:"keywords",content:"ERP_BI_CRM_OA_数据库_BPM_企业邮箱"}]}}},w=(r(1377),r(35)),component=Object(w.a)(C,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"main"},[r("Header"),t._v(" "),r("div",{staticClass:"container-index"},[r("a-row",{staticClass:"display-flex"},[r("a-col",{staticClass:"hero-search",attrs:{span:"24"}},[r("SearchBox",{attrs:{"banner-txt":t.bannerTxt},on:{handleBannerPopShow:t.handleBannerPopShow}})],1)],1),t._v(" "),r("div",{staticClass:"g-wrapper pad-t-20"},[r("h2",{staticClass:"headline"},[t._v("\n        大家正在点评\n      ")]),t._v(" "),r("a-row",{attrs:{type:"flex"}},[r("a-col",{staticClass:"review-box reviews",attrs:{lg:24,md:24,sm:24}},[r("div",{staticClass:"swiper-component-wrap"},[r("swiper",{attrs:{list:t.latestCommentList}})],1)])],1)],1),t._v(" "),r("div",{staticClass:"g-wrapper pad-t-10 pad-b-30"},[r("h2",{staticClass:"headline"},[t._v("\n        热门厂商 实时口碑排名\n      ")]),t._v(" "),r("div",{staticClass:"review-box"},[r("a-row",{staticClass:"card-wrap space-around",attrs:{type:"flex",gutter:[16,16]}},t._l(t.HotCategoryRankList,(function(t,e){return r("a-col",{key:"cate-"+e,staticClass:"c-card-wrap",staticStyle:{"padding-bottom":"0"},attrs:{lg:"8",md:"8",sm:"24"}},[r("nuxt-link",{attrs:{to:{name:"company-id",params:{id:t.CATEGORY_ID},query:{category_name:t.CATEGORY_NAME}}}},[r("CategoryRank",{attrs:{item:t}})],1)],1)})),1)],1)]),t._v(" "),r("adSwiper",{attrs:{"recommend-cate":t.recommendCate},on:{handleBannerPopShow:t.handleBannerPopShow}}),t._v(" "),r("div",{staticClass:"g-wrapper pad-t-20 pad-b-20"},[r("h2",{staticClass:"g-flex space-between headline"},[r("span",[t._v("热门软件产品")]),t._v(" "),r("nuxt-link",{staticClass:"view-all",attrs:{to:{name:"product-id",params:{id:t.selectedCategory},query:{category_name:t.selectedCategoryName}}}},[t._v("\n          查看所有"+t._s(t.selectedCategoryName)+"产品\n        ")])],1),t._v(" "),r("div",{staticClass:"pop-card-wrap"},[r("a-row",{attrs:{type:"flex",gutter:[32,32]}},[r("a-col",{attrs:{lg:7,md:7,sm:24}},[r("div",{staticClass:"tab-bar"},[t._l(t.hotCateGoryList,(function(e){return r("div",{key:e.CATEGORY_ID,staticClass:"popular-category g-flex space-between",class:e.CATEGORY_ID===t.selectedCategory?"on":"",on:{click:function(r){return t.handleSelectCategory(e)}}},[r("span",{staticClass:"txt"},[t._v(t._s(e.CATEGORY_NAME))]),t._v(" "),r("span",{staticClass:"right-icon"})])})),t._v(" "),r("div",{staticClass:"popular-category g-flex space-between",on:{click:t.navigateToAll}},[r("span",{staticClass:"txt"},[t._v("查看所有类别")]),t._v(" "),r("a-icon",{attrs:{type:"right"}})],1)],2)]),t._v(" "),r("a-col",{attrs:{lg:17,md:17,sm:24}},[r("a-row",{attrs:{type:"flex",gutter:[32,32]}},t._l(t.selectCateProList,(function(e){return r("a-col",{key:e.product_id,staticClass:"cate-wrap",staticStyle:{padding:"12px"},attrs:{lg:"8",md:"10",sm:"20"}},[r("nuxt-link",{attrs:{to:{name:"productDetail-id",params:{id:e.product_id}}}},[r("ProductCard",{attrs:{product:e,"category-name":t.selectedCategoryName}})],1)],1)})),1)],1)],1)],1)])],1),t._v(" "),r("div",{staticClass:"container-index",staticStyle:{"background-color":"#ffffff","padding-top":"40px"}},[r("div",{staticClass:"g-wrapper"},[r("h2",{staticClass:"headline2 text-c"},[t._v("\n        应用案例\n      ")]),t._v(" "),r("apply-case",{attrs:{"case-list":t.caseList}}),t._v(" "),r("div",{staticClass:"get-more-btn g-flex center"},[r("span",{on:{click:t.getMoreCase}},[t._v("查看更多")])])],1),t._v(" "),r("div",{staticClass:"g-wrapper"},[r("h2",{staticClass:"headline2 text-c"},[t._v("\n        热门新闻\n      ")]),t._v(" "),r("news",{attrs:{"news-list":t.newsList}}),t._v(" "),r("div",{staticClass:"get-more-btn g-flex center"},[r("span",{on:{click:t.getMoreNews}},[t._v("查看更多")])])],1)]),t._v(" "),r("banner-pop",{directives:[{name:"show",rawName:"v-show",value:t.bannerPopShow,expression:"bannerPopShow"}],attrs:{"recommend-cate":t.recommendCate,"img-url":t.imgUrl},on:{handleBannerPopHide:t.handleBannerPopHide}}),t._v(" "),r("rightNav",[r("qrcode")],1),t._v(" "),r("Footer")],1)}),[],!1,null,"7dcce0c1",null);e.default=component.exports;installComponents(component,{Header:r(661).default,SearchBox:r(1346).default,CategoryRank:r(1347).default,ProductCard:r(1348).default,Footer:r(1249).default})}}]);