(window.webpackJsonp=window.webpackJsonp||[]).push([[36,11,12,13,14,30,31],{1233:function(t,e,r){var content=r(1244);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(78).default)("605f3a16",content,!0,{sourceMap:!1})},1235:function(t,e,r){var content=r(1251);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(78).default)("fbf3bf86",content,!0,{sourceMap:!1})},1236:function(t,e,r){var content=r(1254);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(78).default)("fdae1212",content,!0,{sourceMap:!1})},1237:function(t,e,r){var content=r(1260);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(78).default)("35a92e41",content,!0,{sourceMap:!1})},1242:function(t,e,r){var content=r(1263);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(78).default)("93cf824e",content,!0,{sourceMap:!1})},1243:function(t,e,r){"use strict";r(1233)},1244:function(t,e,r){var o=r(77)(!1);o.push([t.i,".search-box[data-v-1495c895]{position:relative}.result-wrap[data-v-1495c895]{position:absolute;width:300px;height:198px;min-height:198px;overflow-y:scroll;background-color:#fff;padding:10px 0;border:1px solid #cacaca;top:54px;z-index:10;border-radius:4px}.result-wrap .title[data-v-1495c895]{height:30px;line-height:30px;padding:0 10px;font-size:13px;color:#666}.result-wrap .item[data-v-1495c895]{height:32px;line-height:32px;font-size:14px;color:#222;cursor:pointer}.result-wrap .item .link[data-v-1495c895]{display:flex;justify-content:space-between;align-items:center;color:#222;padding:4px 20px;cursor:pointer}.result-wrap .item .link[data-v-1495c895]:hover{background-color:rgba(0,125,255,.1)}.result-wrap .item .link .name[data-v-1495c895]{display:inline-block;width:180px;text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.focus-result[data-v-1495c895],.search-result[data-v-1495c895]{display:none}.focus .focus-result[data-v-1495c895],.search .search-result[data-v-1495c895]{display:block}",""]),t.exports=o},1245:function(t,e,r){"use strict";r.r(e);var o=r(22),n=(r(90),r(655),r(115),r(656),r(302),r(55)),c={props:{isShow:{type:Boolean,default:function(){return!1}}},data:function(){return{slogan:this.$configs.CONST.SLOGAN,keywords:"",hotSearchList:[],searchList:[],isFocus:!1,isSearch:!1,statusMapper:{product:"haveProductReviews",category:"haveCategoryInformation",fuzzy:"fuzzyMatching",notFound:"allWithout"},timer:null,historySearch:[]}},methods:{handleBannerPopShow:function(){this.$emit("handleBannerPopShow")},onSearch:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.keywords.trim()){e.next=4;break}return e.abrupt("return",!1);case 4:return e.next=6,t.$requests.indexKeysSearch({KEY_INFO:t.keywords.trim()});case 6:if(200!==(r=e.sent).status||"success"!==r.data.result){e.next=19;break}e.t0=r.data.searchStatus,e.next=e.t0===t.statusMapper.category?11:e.t0===t.statusMapper.product?13:e.t0===t.statusMapper.fuzzy?15:e.t0===t.statusMapper.notFound?17:19;break;case 11:return t.$router.push({name:"product-id",params:{id:r.data.CATEGORY_ID},query:{category_name:t.keywords.trim()}}),e.abrupt("break",19);case 13:return t.$router.push({name:"productDetail-id",params:{id:r.data.PRODUCT_ID}}),e.abrupt("break",19);case 15:return t.$router.push({name:"result-status",params:{status:"fuzzy"},query:{keywords:t.keywords.trim()}}),e.abrupt("break",19);case 17:return t.$router.push({name:"result-status",params:{status:"notFound"},query:{keywords:t.keywords.trim()}}),e.abrupt("break",19);case 19:case"end":return e.stop()}}),e)})))()},onChange:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==t.keywords.trim()){e.next=5;break}t.isFocus=!0,t.isSearch=!1,e.next=9;break;case 5:return e.next=7,t.searchAutoComplete();case 7:t.searchList=e.sent,t.searchList?(t.isFocus=!1,t.isSearch=!0):(t.isFocus=!1,t.isSearch=!1);case 9:case"end":return e.stop()}}),e)})))()},onFocus:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var data,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==t.keywords.trim()){e.next=8;break}return t.getHistorySearch(),t.isFocus=!0,data={CUR_PAGE:1},e.next=6,t.$requests.indexSearchHot(data);case 6:200===(r=e.sent).status&&"success"===r.data.result&&(t.hotSearchList=r.data.hotsearchlogObj);case 8:case"end":return e.stop()}}),e)})))()},onBlur:function(){var t=this;this.timer=setTimeout((function(){t.isFocus=!1}),300)},searchAutoComplete:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var r,data,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=[],data={KEY_INFO:t.keywords.trim()},e.next=4,t.$requests.indexSearchAutoComplete(data);case 4:return 200===(o=e.sent).status&&"success"===o.data.result&&(r=o.data.productList),e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})))()},handleKeyWordTagClick:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function r(){var o,c,d,l;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return(o=n.a.get("set_history_search"))?(-1!==(c=o.findIndex((function(e){return e.ID===t.ID})))&&o.splice(c,1),o.unshift(t),n.a.set("set_history_search",o)):((d=[]).unshift(t),n.a.set("set_history_search",d)),clearTimeout(e.timer),r.next=5,e.$requests.indexKeysSearch({KEY_INFO:t.names.trim()});case 5:if(200!==(l=r.sent).status||"success"!==l.data.result){r.next=18;break}r.t0=l.data.searchStatus,r.next=r.t0===e.statusMapper.category?10:r.t0===e.statusMapper.product?12:r.t0===e.statusMapper.fuzzy?14:r.t0===e.statusMapper.notFound?16:18;break;case 10:return e.$router.push({name:"company-id",params:{id:l.data.CATEGORY_ID},query:{category_name:t.value.trim()}}),r.abrupt("break",18);case 12:return e.$router.push({name:"productDetail-id",params:{id:l.data.PRODUCT_ID}}),r.abrupt("break",18);case 14:return e.$router.push({name:"result-status",params:{status:"fuzzy"},query:{keywords:t.names.trim()}}),r.abrupt("break",18);case 16:return e.$router.push({name:"result-status",params:{status:"notFound"},query:{keywords:t.names.trim()}}),r.abrupt("break",18);case 18:case"end":return r.stop()}}),r)})))()},handleKeyWordTagClick2:function(t){var e=n.a.get("set_history_search");if(e){var r=e.findIndex((function(e){return e.ID===t.ID}));-1!==r&&e.splice(r,1),e.unshift(t),n.a.set("set_history_search",e)}else{var o=[];o.unshift(t),n.a.set("set_history_search",o)}"1"===t.TYPE?this.$router.push({name:"productDetail-id",params:{id:t.ID}}):this.$router.push({name:"company-id",params:{id:t.ID},query:{category_name:t.NAME}})},getHistorySearch:function(){this.historySearch=n.a.get("set_history_search"),console.log(this.historySearch)},deleteHistorySearch:function(){n.a.remove("set_history_search"),this.historySearch=[]}}},d=(r(1243),r(35)),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("a-layout-header",{staticClass:"global-header"},[o("div",{staticClass:"g-wrapper g-flex space-between"},[o("h1",{staticClass:"logo-wrap"},[o("nuxt-link",{attrs:{to:"/"}},[o("img",{staticClass:"logo",attrs:{src:r(657),alt:"选型宝_企业软件的大众点评-ERP系统_BI_CRM系统_OA系统_数据库软件_BPM系统_企业邮箱..."}})]),t._v(" "),o("strong",[t._v(t._s(t.slogan))])],1),t._v(" "),o("div",{staticClass:"g-flex"},[o("nav",{staticClass:"nav"},[o("div",{staticClass:"link",on:{click:t.handleBannerPopShow}},[o("span",{staticClass:"icon review"}),t._v(" "),o("span",[t._v("写点评就给钱")])]),t._v(" "),o("a",{staticClass:"link",attrs:{href:"/all",title:"软件类别"}},[o("span",{staticClass:"icon cate"}),t._v(" "),o("span",[t._v("软件类别")])]),t._v(" "),o("a",{staticClass:"link",attrs:{href:"https://e.xuanxingbao.com/",title:"企业入驻"}},[o("span",{staticClass:"icon"}),t._v(" "),o("span",{staticClass:"entry"},[t._v("企业入驻")])])]),t._v(" "),t.isShow?o("div",{staticClass:"search-box",class:{focus:t.isFocus,search:t.isSearch}},[o("a-input-search",{staticStyle:{width:"300px"},attrs:{placeholder:"搜索产品类别、名称，看看同行推荐啥？"},on:{search:t.onSearch,change:t.onChange,focus:t.onFocus,blur:t.onBlur},model:{value:t.keywords,callback:function(e){t.keywords=e},expression:"keywords"}}),t._v(" "),o("div",{staticClass:"result-wrap focus-result"},[o("div",[o("h3",{staticClass:"title"},[t._v("\n              热门搜索\n            ")]),t._v(" "),t._l(t.hotSearchList,(function(e){return o("div",{key:e.ID,staticClass:"item"},[o("div",{staticClass:"link",on:{click:function(r){return t.handleKeyWordTagClick(e)}}},[o("span",{staticClass:"name"},[t._v(t._s(e.names))]),t._v(" "),o("span",{staticClass:"hot-icon"})])])}))],2),t._v(" "),t.historySearch?o("div",{staticStyle:{"margin-top":"10px"}},[o("h3",{staticClass:"title g-flex space-between"},[o("span",[t._v("历史搜索")]),t._v(" "),o("span",{staticStyle:{cursor:"pointer"},on:{click:t.deleteHistorySearch}},[o("a-icon",{attrs:{type:"delete"}}),t._v("删除\n              ")],1)]),t._v(" "),t._l(t.historySearch,(function(e){return o("div",{key:e.ID,staticClass:"item"},[o("div",{staticClass:"link",on:{click:function(r){return t.handleKeyWordTagClick(e)}}},[o("span",{staticClass:"name"},[t._v(t._s(e.names))]),t._v(" "),o("span",{staticClass:"hot-icon"})])])}))],2):t._e()]),t._v(" "),o("div",{staticClass:"result-wrap search-result"},t._l(t.searchList,(function(e){return o("div",{key:e.ID,staticClass:"item"},[o("div",{staticClass:"link",on:{click:function(r){return t.handleKeyWordTagClick2(e)}}},[o("span",{staticClass:"name"},[t._v(t._s(e.names))]),t._v(" "),o("span",{staticStyle:{color:"#666","font-size":"12px"}},[t._v(t._s("1"===e.TYPE?"产品":"类别"))])])])})),0)],1):t._e()])])])}),[],!1,null,"1495c895",null);e.default=component.exports},1246:function(t,e,r){"use strict";r.r(e);var o={},n=(r(1250),r(35)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"right-wrap"},[t._t("default")],2)}),[],!1,null,"5f550c22",null);e.default=component.exports},1247:function(t,e,r){"use strict";r.r(e);var o=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"qrcode"},[e("img",{attrs:{src:r(1252),alt:""}})])}],n={},c=(r(1253),r(35)),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),o,!1,null,"76300a10",null);e.default=component.exports},1248:function(t,e,r){"use strict";r.r(e);var o={name:"Header",components:{pHeader:r(1245).default},props:{isShow:{type:Boolean,default:function(){return!1}}},methods:{handleBannerPopShow:function(){this.$emit("handleBannerPopShow")}}},n=r(35),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"header-wrap"},[r("a-anchor",[r("pHeader",{staticClass:"display-pc",attrs:{"is-show":t.isShow},on:{handleBannerPopShow:t.handleBannerPopShow}})],1)],1)}),[],!1,null,"76e64d27",null);e.default=component.exports},1249:function(t,e,r){"use strict";r.r(e);var o={data:function(){return{cateInfo:[{text:"热门类别",title:"微信群",img:r(1255),path:"/all"},{text:"关于我们",title:"选型宝订阅号",img:r(1256),path:"http://old.xuanxingbao.com/webPC/about"},{text:"联系我们",title:"选型宝小程序",img:r(1257),path:"http://old.xuanxingbao.com/webPC/contact-list.html"},{text:"加入我们",title:"选型宝服务号",img:r(1258),path:"http://old.xuanxingbao.com/webPC/participate.html"}]}}},n=(r(1259),r(35)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("a-layout-footer",{staticClass:"footer"},[r("a-row",[r("a-col",[r("a-row",{staticClass:"g-wrapper",attrs:{getter:"16"}},t._l(t.cateInfo,(function(e,o){return r("a-col",{key:o,staticClass:"gutter-row footerInfo",attrs:{span:"6"}},[r("a",{staticClass:"ca_text",attrs:{href:e.path,title:e.text}},[t._v(t._s(e.text))]),t._v(" "),r("p",{staticClass:"qc_text"},[t._v("\n            "+t._s(e.title)+"\n          ")]),t._v(" "),r("img",{staticClass:"qcrodeImg",attrs:{src:e.img,alt:""}})])})),1)],1),t._v(" "),r("a-col",{staticClass:"beian"},[r("div",{staticClass:"site-width"},[r("p",[t._v("© 2021 选型宝，All Rights Reserved.")]),t._v(" "),r("p",[r("a",{attrs:{href:"#"}},[t._v("京ICP备14045422号-2 北京众智优选科技有限公司")])])]),t._v(" "),r("div",{staticClass:"site-width"},[r("p",[t._v("地址：北京市朝阳区百子湾西里435号创富港436")])])])],1)],1)}),[],!1,null,"6767be10",null);e.default=component.exports},1250:function(t,e,r){"use strict";r(1235)},1251:function(t,e,r){var o=r(77)(!1);o.push([t.i,".right-wrap[data-v-5f550c22]{position:fixed;bottom:30px;right:10px}",""]),t.exports=o},1252:function(t,e,r){t.exports=r.p+"img/qrcode.5d928fb.png"},1253:function(t,e,r){"use strict";r(1236)},1254:function(t,e,r){var o=r(77)(!1);o.push([t.i,".qrcode[data-v-76300a10]{box-shadow:0 2px 8px 0 rgba(0,0,0,.14);border-radius:4px;overflow:hidden}.qrcode img[data-v-76300a10]{width:130px}",""]),t.exports=o},1255:function(t,e,r){t.exports=r.p+"img/wx-yh.bffc413.jpg"},1256:function(t,e,r){t.exports=r.p+"img/qrcode_dy.e488e10.jpg"},1257:function(t,e,r){t.exports=r.p+"img/qcrode.414b83a.jpg"},1258:function(t,e,r){t.exports=r.p+"img/qrcode_fw.8427576.jpg"},1259:function(t,e,r){"use strict";r(1237)},1260:function(t,e,r){var o=r(77),n=r(301),c=r(658),d=r(659),l=r(660),f=o(!1),h=n(c),v=n(d),x=n(l);f.push([t.i,".global-header[data-v-6767be10]{background-color:transparent;height:74px}.global-header .logo-wrap[data-v-6767be10]{margin-bottom:0}.global-header .logo[data-v-6767be10]{width:99px;margin-right:15px}.global-header strong[data-v-6767be10]{font-size:14px;color:#fff}.global-header nav .link[data-v-6767be10]{color:#fff;display:inline-flex;align-items:center;padding:0 15px;cursor:pointer}.icon[data-v-6767be10]{display:inline-block;width:22px;height:22px;margin-right:6px}.review[data-v-6767be10]{height:26px;background-image:url("+h+")}.cate[data-v-6767be10],.review[data-v-6767be10]{background-size:cover}.cate[data-v-6767be10]{background-image:url("+v+")}.entry[data-v-6767be10]{background-color:#ff492c;color:#fff;line-height:38px;padding:0 32px;border-radius:20px}.ant-affix strong[data-v-6767be10],.default strong[data-v-6767be10]{color:#007dff}.ant-affix nav .link[data-v-6767be10],.default nav .link[data-v-6767be10]{color:#555}.ant-affix .review[data-v-6767be10],.default .review[data-v-6767be10]{background-image:url("+h+");background-size:cover}.ant-affix .cate[data-v-6767be10],.default .cate[data-v-6767be10]{background-image:url("+x+");background-size:cover}.ant-affix .global-header[data-v-6767be10],.default .global-header[data-v-6767be10]{border-bottom:1px solid #ddd;background-color:#fff}.ant-affix[data-v-6767be10] .ant-anchor-wrapper,.default[data-v-6767be10] .ant-anchor-wrapper{overflow:visible}*[data-v-6767be10]{margin:0}*[data-v-6767be10],ul[data-v-6767be10]{padding:0}.g-wrapper[data-v-6767be10]{width:100%;max-width:1200px!important;margin:0 auto!important}.pad-t-10[data-v-6767be10]{padding-top:10px}.pad-t-20[data-v-6767be10]{padding-top:20px}.pad-b-20[data-v-6767be10]{padding-bottom:20px}.pad-b-30[data-v-6767be10]{padding-bottom:30px}.g-flex[data-v-6767be10]{display:flex}.g-flex.v-center[data-v-6767be10]{flex-direction:column}.g-flex.center[data-v-6767be10],.g-flex.v-center[data-v-6767be10]{justify-content:center;align-items:center}.g-flex.space-between[data-v-6767be10]{justify-content:space-between;align-items:center}.g-flex.space-around[data-v-6767be10]{justify-content:space-around}.footer[data-v-6767be10]{padding:60px 0 20px}.footer .footerInfo[data-v-6767be10]{text-align:center}.footer .footerInfo .ca_text[data-v-6767be10]{font-size:20px;color:#555}.footer .footerInfo .qc_text[data-v-6767be10]{font-size:15px;color:#c1c1c1;padding-top:20px}.footer .qcrodeImg[data-v-6767be10]{width:158px;margin-bottom:70px;margin-top:10px}.display-pc[data-v-6767be10]{display:block}.display-flex[data-v-6767be10]{display:flex}.display-m[data-v-6767be10]{display:none}.text-c[data-v-6767be10]{text-align:center}.report-wrap[data-v-6767be10]{background-color:#007dff;font-size:20px;padding:40px 0;margin-bottom:10px}.report-wrap[data-v-6767be10],.review-btn[data-v-6767be10]{color:#fff;text-align:center}.review-btn[data-v-6767be10]{padding:6px 12px;background-color:#ff492c;border-radius:4px}.check-comment[data-v-6767be10]{padding:6px 18px;color:#007dff;border:1px solid #007dff;border-radius:16px;font-size:12px}.check-comment[data-v-6767be10]:hover{background-color:#007dff;color:#fff}.contact-btn[data-v-6767be10]{background-color:#773aff;color:#fff;padding:16px 0;text-align:center;margin-bottom:10px;cursor:pointer}.border[data-v-6767be10]{border:1px solid #cacaca;border-radius:4px}.headline[data-v-6767be10]{font-family:PingFangSC-Semibold;font-size:26px;color:#333;letter-spacing:0;line-height:1.5}@media (max-width:767px){.display-m[data-v-6767be10]{display:flex}.display-flex[data-v-6767be10],.display-pc[data-v-6767be10]{display:none}.footer[data-v-6767be10]{padding-top:10px}.footer .qcrodeImg[data-v-6767be10]{width:72px;margin-bottom:10px}.footer .footerInfo .ca_text[data-v-6767be10]{font-size:16px}.footer .footerInfo .qc_text[data-v-6767be10]{font-size:12px;padding-top:6px}.headline[data-v-6767be10]{font-size:18px;padding:0 10px}.m-tab-bar[data-v-6767be10]{width:100%;flex-wrap:wrap;justify-content:space-around}.m-tab-bar .popular-category[data-v-6767be10]{width:166px;height:40px;border-radius:4px;border:1px solid #007dff;justify-content:center;color:#222;background-color:#fff;margin-bottom:10px}.m-tab-bar .popular-category.on[data-v-6767be10]{background-color:#007dff;color:#fff}}.beian[data-v-6767be10]{background-color:#2d3237;padding:40px 0}.site-width[data-v-6767be10]{padding:10px 0;width:100%;justify-content:center;font-size:12px;margin:0 auto}.site-width[data-v-6767be10],.site-width a[data-v-6767be10]{display:flex;align-items:center;color:#fff}.site-width a[data-v-6767be10]{margin:0 34px}@media (max-width:767px){.beian[data-v-6767be10]{padding:20px 10px}.site-width[data-v-6767be10]{display:block}.site-width p[data-v-6767be10]{text-align:center}}",""]),t.exports=f},1262:function(t,e,r){"use strict";r(1242)},1263:function(t,e,r){var o=r(77),n=r(301),c=r(1264),d=o(!1),l=n(c);d.push([t.i,".no-data-wrap[data-v-1feed65b]{width:100%;height:100%;background-image:url("+l+");background-size:197px 128px;background-repeat:no-repeat;background-position:50%;position:relative}.no-data-wrap .txt-wrap[data-v-1feed65b]{color:#a3a3a3;position:absolute;left:50%;bottom:20%;transform:translate(-50%,-50%)}",""]),t.exports=d},1264:function(t,e,r){t.exports=r.p+"img/nodata.814e089.png"},1265:function(t,e,r){"use strict";r.r(e);var o={},n=(r(1262),r(35)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"no-data-wrap"},[r("div",{staticClass:"txt-wrap"},[t._t("txt")],2)])}),[],!1,null,"1feed65b",null);e.default=component.exports},1349:function(t,e,r){var content=r(1376);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(78).default)("5e2b970c",content,!0,{sourceMap:!1})},1375:function(t,e,r){"use strict";r(1349)},1376:function(t,e,r){var o=r(77)(!1);o.push([t.i,".tab-bar[data-v-b388f1a0]{border-radius:4px;overflow:hidden}.popular-category[data-v-b388f1a0]{cursor:pointer;width:282px;padding:18px 24px;font-size:16px;background-color:#fff}.popular-category.on[data-v-b388f1a0]{width:322px;font-weight:700;color:#fff;background-color:#007dff;border-radius:0 4px 4px 0}.popular-category.on[data-v-b388f1a0]:hover{color:#fff}.popular-category[data-v-b388f1a0]:hover{color:#007dff}.popular-category .right-icon[data-v-b388f1a0]{display:inline-block;width:17px;height:12px;background:url(https://cdn.36dianping.com/_nuxt/img/arrow-right.cb3d191.svg) 50%/contain no-repeat}.product-list[data-v-b388f1a0]{background-color:#fff;border-radius:4px;padding:4px 20px 16px}.product-list .item[data-v-b388f1a0]{padding:20px;border-bottom:1px solid #f9f9f9;cursor:pointer;display:block;color:#555}.product-list .item[data-v-b388f1a0]:hover{text-decoration:underline}",""]),t.exports=o},1411:function(t,e,r){"use strict";r.r(e);var o=r(22),n=(r(90),r(1265)),c=r(1246),d=r(1247),l={components:{noData:n.default,rightNav:c.default,qrcode:d.default},asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var r,o,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$requests.allSelect();case 2:return r=e.sent,console.log("所有大类：",r),o=200===r.status&&"success"===r.data.result?r.data.navcategoryData:[],n=o[0].categoryList,e.abrupt("return",{allSelectList:o,selectedCategoryId:o[0].NAVIGATION_ID,selectCateProList:n});case 7:case"end":return e.stop()}}),e)})))()},methods:{handleSelectCategory:function(t,e){if(this.selectedCategoryId===t.NAVIGATION_ID)return!1;this.selectedCategoryId=t.NAVIGATION_ID,this.selectCateProList=this.allSelectList[e].categoryList},navigateTo:function(t){this.$router.push({name:"product-id",params:{id:t.CID},query:{category_name:t.CNAME}})}},head:function(){return{title:"选型宝_企业软件的大众点评-ERP_BI_CRM_OA_企业邮箱怎么选？",meta:[{hid:"description",name:"description",content:"ERP系统_BI_CRM系统_OA系统_数据库软件_BPM系统_企业邮箱...想了解各种企业软件的用户口碑?就上选型宝, 企业级软件的大众点评，实名制的CIO选型经验交流社区"},{hid:"keywords",name:"keywords",content:"ERP_BI_CRM_OA_数据库_BPM_企业邮箱"}]}}},f=(r(1375),r(35)),component=Object(f.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"main"},[r("a-anchor",{staticClass:"default"},[r("Header2")],1),t._v(" "),r("div",{staticClass:"container-index",staticStyle:{"min-height":"80vh","margin-top":"40px"}},[r("a-row",[r("a-col",[r("div",{staticClass:"g-wrapper"},[r("a-row",{attrs:{gutter:[32,32]}},[r("a-col",{attrs:{lg:7,md:7,sm:24}},[r("div",{staticClass:"tab-bar"},t._l(t.allSelectList,(function(e,o){return r("div",{key:e.NAVIGATION_ID,staticClass:"popular-category g-flex space-between",class:e.NAVIGATION_ID===t.selectedCategoryId?"on":"",on:{click:function(r){return t.handleSelectCategory(e,o)}}},[r("span",{staticClass:"txt"},[t._v(t._s(e.NAME))]),t._v(" "),r("span",{staticClass:"right-icon"})])})),0)]),t._v(" "),r("a-col",{attrs:{lg:17,md:17,sm:24}},[t.selectCateProList.length?r("div",{staticClass:"product-list"},t._l(t.selectCateProList,(function(e){return r("nuxt-link",{key:e.CID,staticClass:"item",attrs:{to:{name:"product-id",params:{id:e.CID},query:{category_name:e.CNAME}}}},[t._v("\n                  "+t._s(e.CNAME)+"\n                ")])})),1):r("div",{staticStyle:{width:"100%",height:"400px"}},[r("no-data",[r("div",{staticStyle:{"font-size":"14px"},attrs:{slot:"txt"},slot:"txt"},[t._v("\n                    该类别下暂无数据~\n                  ")])])],1)])],1)],1)])],1)],1),t._v(" "),r("rightNav",[r("qrcode")],1),t._v(" "),r("Footer")],1)}),[],!1,null,"b388f1a0",null);e.default=component.exports;installComponents(component,{Header2:r(1248).default,Footer:r(1249).default})}}]);