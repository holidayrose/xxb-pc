(window.webpackJsonp=window.webpackJsonp||[]).push([[29,7],{806:function(e,t,r){var content=r(827);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(32).default)("fa6f13d6",content,!0,{sourceMap:!1})},813:function(e,t,r){"use strict";r.r(t);var n={props:{bannerTxt:{type:Array,default:function(){return[]}}},data:function(){return{swiperOption:{loop:!0,slidesPerView:1,speed:1e3,autoplay:!0,noSwiping:!0,autoplayDisableOnInteraction:!1}}},methods:{handleBannerPopShow:function(){this.$emit("handleBannerPopShow")}}},o=(r(826),r(59)),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{directives:[{name:"swiper",rawName:"v-swiper:mySwiper",value:e.swiperOption,expression:"swiperOption",arg:"mySwiper"}],staticClass:"txt-banner ant-carousel"},[r("div",{staticClass:"swiper-wrapper g-flex"},e._l(e.bannerTxt,(function(t,n){return r("div",{key:n,staticClass:"swiper-slide text-c",attrs:{"data-swiper-autoplay":"5000"}},[r("h3",{staticClass:"swiper-item"},[r("span",{on:{click:e.handleBannerPopShow}},[r("i",{staticClass:"fire"}),e._v(e._s(t)),r("i",{staticClass:"finger"})])])])})),0)])}),[],!1,null,"2582b88a",null);t.default=component.exports},826:function(e,t,r){"use strict";r(806)},827:function(e,t,r){var n=r(31),o=r(287),c=r(437),d=r(828),l=n(!1),h=o(c),f=o(d);l.push([e.i,".txt-banner[data-v-2582b88a]{height:38px;margin-top:20px;overflow:hidden}.ant-carousel[data-v-2582b88a] .slick-slide{display:block;width:100%;text-align:center;height:40px;line-height:40px;overflow:hidden}.ant-carousel[data-v-2582b88a] .custom-slick-arrow{width:20px;height:20px;font-size:16px;color:#fff;background-color:rgba(31,45,61,.11);opacity:.3}.ant-carousel[data-v-2582b88a] .custom-slick-arrow:before{display:none}.ant-carousel[data-v-2582b88a] .custom-slick-arrow:hover{opacity:.5}.swiper-item[data-v-2582b88a]{color:#fff;font-size:22px;display:inline-block}.swiper-item>span[data-v-2582b88a]{cursor:pointer;position:relative;padding:4px}.swiper-item>span>i.fire[data-v-2582b88a]{left:-30px;background-image:url("+h+");-webkit-animation:rotate-data-v-2582b88a .5s linear infinite;animation:rotate-data-v-2582b88a .5s linear infinite}.swiper-item>span>i.finger[data-v-2582b88a],.swiper-item>span>i.fire[data-v-2582b88a]{position:absolute;width:30px;height:30px;background-repeat:no-repeat;background-size:contain}.swiper-item>span>i.finger[data-v-2582b88a]{right:-24px;top:6px;background-image:url("+f+");transform:rotate(-45deg);-webkit-animation:rotate2-data-v-2582b88a .5s linear infinite;animation:rotate2-data-v-2582b88a .5s linear infinite}@-webkit-keyframes rotate-data-v-2582b88a{0%{transform:translateY(0)}25%{transform:translateY(4px)}50%{transform:translateY(8px) scale(1.1,.9)}75%{transform:translateY(4px)}to{transform:translateY(0)}}@keyframes rotate-data-v-2582b88a{0%{transform:translateY(0)}25%{transform:translateY(4px)}50%{transform:translateY(8px) scale(1.1,.9)}75%{transform:translateY(4px)}to{transform:translateY(0)}}@-webkit-keyframes rotate2-data-v-2582b88a{0%{transform:rotate(-45deg)}50%{transform:rotate(-45deg) scale(1.2)}to{transform:rotate(-45deg)}}@keyframes rotate2-data-v-2582b88a{0%{transform:rotate(-45deg)}50%{transform:rotate(-45deg) scale(1.2)}to{transform:rotate(-45deg)}}",""]),e.exports=l},828:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAkCAYAAAAHKVPcAAADrElEQVRYR+2YSYhcZRSFv+OAMxoHFFHRlQjOxBGDrSEgjqjgEBMEURdOoCFBXehGEAfciKKC4JA4JkYiKmiIiiOCCi6CBkERRRQjHcc4HjnFfeF12d1VrzsBF303Ve+9///vqTucc1+JKZjtecDNwDHAb8CrwC2SPpvCcajrJttXAA8AW/Xt3QDMlfRB1zM7gbC9P7AO2B74G1gNzAKOLcdrgUMluQuQriCWAHeUgwWSluW77QeBK+v+7K7R6AqicfZXoiEp0QiIEeC1AnGRpKe3ZCQeBi4DNkraoXFk+yTgzbq+RNITMyCAmUjM1ERa9H/RHScCb1dbLpS0dEu26OPAAmCDpN1aPLEf8CX0tCgidh/wrKSvhwHTlTFD0/P7QRRrhiUvaDn9B3gLyP3lkr6bCNAYELZzHUEalZRDxpjtyUDsCNwFXArs1Lc1NP868AywQtIP7eebQNi+HLgN2Bv4CXgZuFXSJ62wTwiitSYAzgIuBE4rxW37/AN4Clgi6ds86IGwfTbwfHPd2vEzEEF6sdYNBNH2ZntX4JwClEFo29bz1MupktY1IN4DjgN+Bx4Fjqjr7Ekor5b00GTpGFSAtncHzgOuBQ6v9YnyUao6yIi2HbBU0sL61YuAO2uCypByO3AQcPF4hTkIRCtd2wCPRGPq3jUNiF8rd89JOr+1IdWeyGSSim2s72NadFgArXN3Br4A9kgHNel4BUjOEvpTJKW1emZ7TtVLwtnYekl7dnXeVy/Lgfzg0QbEycCaCv1XvTxJ37eAHAK8BBxY976RtO80QTTE90u7RZPzG+vgODyzPbDa3gdYBczOnCnppmmCeL9eGda2QaRgMidGjGLp45DPJmvIrJ9suoKxnVb9seprWT9jZqT/EEi+/wRGJL3T1cmg9baPBD6qdTf8Rztsn1Fhz8tNRCn1MYZmBzkZ9Nx2huUMzbGRcQXMdvhhcS1aJSmst9nMdlT2KiD6NGsiEMnZG8AJ5XmRpHs2Fwrb7wLH521O0sETSrntAypv4YeIzhxJqehpme00QIoy7y1PSpo/6TzRJ2yfA0dLGp0OCtuHAR/XGYsl3T1wqLGdNFxfm1ZKighN2WxHmx6rA+ZJWj0MiNRHaLx5875O0r1TQWE7GrQCOD2KAOwlaf1AEHFmO3Qd/sjUlfp4oT6T32Ftl2LbRnPWSJqbzUOBKCAZfFaO8+fIsCDa61Jf+UMln8ODKCDn1t9EKa6ti1WHBZEx4NNS5PslZYTs2b/xPqNmNBWEwQAAAABJRU5ErkJggg=="},829:function(e,t,r){var content=r(859);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(32).default)("034aad95",content,!0,{sourceMap:!1})},858:function(e,t,r){"use strict";r(829)},859:function(e,t,r){var n=r(31)(!1);n.push([e.i,".search-wrapper[data-v-2aeb4990]{position:absolute;width:100%;left:0;bottom:140px}.search-wrapper .search-box p[data-v-2aeb4990]{color:#fff;text-align:center;font-weight:700;font-size:2rem}.search-wrapper .search-box .search-bg[data-v-2aeb4990]{margin:0 auto;height:70px;display:flex;flex-direction:column;position:relative;z-index:10}.search-wrapper .search-box .search-bg .input[data-v-2aeb4990]{border:none}.search-wrapper .search-box .search-bg .input[data-v-2aeb4990] input{border:none!important;height:70px;font-size:18px;padding-left:20px}.search-wrapper .search-box .search-bg .input[data-v-2aeb4990] input::-webkit-input-placeholder{color:#222}.search-wrapper .search-box .search-bg .input[data-v-2aeb4990] input:active,.search-wrapper .search-box .search-bg .input[data-v-2aeb4990] input:focus{border:none!important;box-shadow:none}.search-wrapper .search-box .search-bg[data-v-2aeb4990] .ant-input-search-button{width:86px;height:70px;background-color:#007dff;border-color:#007dff;font-size:24px}.search-wrapper .search-box .search-bg[data-v-2aeb4990] .ant-input-group-addon{background-color:transparent}.search-wrapper .search-box .search-bg[data-v-2aeb4990] .ant-input-affix-wrapper .ant-input-suffix{font-size:30px;margin-right:16px}.search-wrapper .search-box .search-bg[data-v-2aeb4990] .ant-input-affix-wrapper .ant-input:not(:last-child){padding-right:92px}.search-wrapper .search-box .search-bg[data-v-2aeb4990] .ant-input-group{border-radius:12px;overflow:hidden}.search-wrapper .search-box .search-bg .result-wrap[data-v-2aeb4990]{width:calc(100% - .7px);height:198px;min-height:198px;overflow-y:scroll;background-color:#fff;padding:10px 0;border-top:1px solid #cacaca}.search-wrapper .search-box .search-bg .result-wrap .title[data-v-2aeb4990]{font-size:13px;color:#666;padding-left:10px;padding-right:10px}.search-wrapper .search-box .search-bg .result-wrap .item .link[data-v-2aeb4990]{display:flex;justify-content:space-between;align-items:center;color:#222;padding:4px 20px;cursor:pointer}.search-wrapper .search-box .search-bg .result-wrap .item[data-v-2aeb4990]:hover{background-color:rgba(0,125,255,.1)}.search-wrapper .search-box .search-bg .focus-result[data-v-2aeb4990],.search-wrapper .search-box .search-bg .search-result[data-v-2aeb4990]{display:none}.search-wrapper .search-box .focus[data-v-2aeb4990] .ant-input-group,.search-wrapper .search-box .search[data-v-2aeb4990] .ant-input-group{border-radius:12px 12px 0 0}.search-wrapper .search-box .focus[data-v-2aeb4990] .ant-input,.search-wrapper .search-box .focus[data-v-2aeb4990] .ant-input-group-addon,.search-wrapper .search-box .search[data-v-2aeb4990] .ant-input,.search-wrapper .search-box .search[data-v-2aeb4990] .ant-input-group-addon{border-radius:0}.search-wrapper .search-box .focus .result-wrap[data-v-2aeb4990],.search-wrapper .search-box .search .result-wrap[data-v-2aeb4990]{border-radius:0 0 12px 12px}.search-wrapper .search-box .focus .focus-result[data-v-2aeb4990],.search-wrapper .search-box .search .search-result[data-v-2aeb4990]{display:block}",""]),e.exports=n},896:function(e,t,r){"use strict";r.r(t);var n=r(30),o=(r(114),r(115),r(46),r(436),r(133),r(88)),c={components:{AutoPlay:r(813).default},props:{bannerTxt:{type:Array,default:function(){return[]}}},data:function(){return{keywords:"",hotSearchList:[],searchList:[],isFocus:!1,isSearch:!1,statusMapper:{product:"haveProductReviews",category:"haveCategoryInformation",fuzzy:"fuzzyMatching",notFound:"allWithout"},timer:null,historySearch:[]}},methods:{handleBannerPopShow:function(){this.$emit("handleBannerPopShow")},onSearch:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.keywords.trim()){t.next=4;break}return t.abrupt("return",!1);case 4:return t.next=6,e.$requests.indexKeysSearch({KEY_INFO:e.keywords.trim()});case 6:if(200!==(r=t.sent).status||"success"!==r.data.result){t.next=19;break}t.t0=r.data.searchStatus,t.next=t.t0===e.statusMapper.category?11:t.t0===e.statusMapper.product?13:t.t0===e.statusMapper.fuzzy?15:t.t0===e.statusMapper.notFound?17:19;break;case 11:return e.$router.push({name:"product-id",params:{id:r.data.CATEGORY_ID},query:{category_name:e.keywords.trim()}}),t.abrupt("break",19);case 13:return e.$router.push({name:"productDetail-id",params:{id:r.data.PRODUCT_ID}}),t.abrupt("break",19);case 15:return e.$router.push({name:"result-status",params:{status:"fuzzy"},query:{keywords:e.keywords.trim()}}),t.abrupt("break",19);case 17:return e.$router.push({name:"result-status",params:{status:"notFound"},query:{keywords:e.keywords.trim()}}),t.abrupt("break",19);case 19:case"end":return t.stop()}}),t)})))()},onChange:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(""!==e.keywords.trim()){t.next=5;break}e.isFocus=!0,e.isSearch=!1,t.next=9;break;case 5:return t.next=7,e.searchAutoComplete();case 7:e.searchList=t.sent,e.searchList?(e.isFocus=!1,e.isSearch=!0):(e.isFocus=!1,e.isSearch=!1);case 9:case"end":return t.stop()}}),t)})))()},onFocus:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var data,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(""!==e.keywords.trim()){t.next=8;break}return e.getHistorySearch(),e.isFocus=!0,data={CUR_PAGE:1},t.next=6,e.$requests.indexSearchHot(data);case 6:200===(r=t.sent).status&&"success"===r.data.result&&(e.hotSearchList=r.data.hotsearchlogObj);case 8:case"end":return t.stop()}}),t)})))()},onBlur:function(){var e=this;this.timer=setTimeout((function(){e.isFocus=!1}),300)},searchAutoComplete:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r,data,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=[],data={KEY_INFO:e.keywords.trim()},t.next=4,e.$requests.indexSearchAutoComplete(data);case 4:return 200===(n=t.sent).status&&"success"===n.data.result&&(r=n.data.productList),t.abrupt("return",r);case 7:case"end":return t.stop()}}),t)})))()},handleKeyWordTagClick:function(e){var t=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n,c,d,l,h,f,w,v;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return(n=o.a.get("set_history_search"))?(-1!==(c=n.findIndex((function(t){return t.ID===e.ID})))&&n.splice(c,1),n.unshift(e),o.a.set("set_history_search",n)):((d=[]).unshift(e),o.a.set("set_history_search",d)),clearTimeout(t.timer),r.next=5,t.$requests.indexKeysSearch({KEY_INFO:e.names.trim()});case 5:if(200!==(l=r.sent).status||"success"!==l.data.result){r.next=22;break}r.t0=l.data.searchStatus,r.next=r.t0===t.statusMapper.category?10:r.t0===t.statusMapper.product?13:r.t0===t.statusMapper.fuzzy?16:r.t0===t.statusMapper.notFound?19:22;break;case 10:return h=t.$router.resolve({name:"product-id",params:{id:l.data.CATEGORY_ID},query:{category_name:e.value.trim()}}),window.open(h.href,"_blank"),r.abrupt("break",22);case 13:return f=t.$router.resolve({name:"productDetail-id",params:{id:l.data.PRODUCT_ID}}),window.open(f.href,"_blank"),r.abrupt("break",22);case 16:return w=t.$router.resolve({name:"result-status",params:{status:"fuzzy"},query:{keywords:e.names.trim()}}),window.open(w.href,"_blank"),r.abrupt("break",22);case 19:return v=t.$router.resolve({name:"result-status",params:{status:"notFound"},query:{keywords:e.names.trim()}}),window.open(v.href,"_blank"),r.abrupt("break",22);case 22:case"end":return r.stop()}}),r)})))()},handleKeyWordTagClick2:function(e){var t=o.a.get("set_history_search");if(t){var r=t.findIndex((function(t){return t.ID===e.ID}));-1!==r&&t.splice(r,1),t.unshift(e),o.a.set("set_history_search",t)}else{var n=[];n.unshift(e),o.a.set("set_history_search",n)}if("1"===e.TYPE){var c=this.$router.resolve({name:"productDetail-id",params:{id:e.ID}});window.open(c.href,"_blank")}else{var d=this.$router.resolve({name:"product-id",params:{id:e.ID},query:{category_name:e.NAME}});window.open(d.href,"_blank")}},getHistorySearch:function(){this.historySearch=o.a.get("set_history_search")},deleteHistorySearch:function(){o.a.remove("set_history_search"),this.historySearch=[]}}},d=(r(858),r(59)),component=Object(d.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("a-row",{staticClass:"search-wrapper",attrs:{type:"flex",justify:"center"}},[r("a-col",{staticClass:"search-box",attrs:{span:"17"}},[r("p",{staticStyle:{display:"none"}},[e._v("\n      "+e._s(e.$configs.CONST.SEARCH_TEXT)+"\n    ")]),e._v(" "),r("div",{staticClass:"search-bg",class:{focus:e.isFocus,search:e.isSearch}},[r("a-input-search",{staticClass:"input",attrs:{size:"large",placeholder:"搜索产品类别/产品名称，看看其他CIO的实名点评吧！"},on:{search:e.onSearch,change:e.onChange,focus:e.onFocus,blur:e.onBlur},model:{value:e.keywords,callback:function(t){e.keywords=t},expression:"keywords"}}),e._v(" "),r("div",{staticClass:"result-wrap focus-result"},[r("div",[r("h3",{staticClass:"title"},[e._v("\n            热门搜索\n          ")]),e._v(" "),e._l(e.hotSearchList,(function(t){return r("div",{key:t.ID,staticClass:"item"},[r("div",{staticClass:"link",on:{click:function(r){return e.handleKeyWordTagClick(t)}}},[r("span",[e._v(e._s(t.value))]),e._v(" "),r("span",{staticClass:"hot-icon"})])])}))],2),e._v(" "),e.historySearch?r("div",{staticStyle:{"margin-top":"10px"}},[r("h3",{staticClass:"title g-flex space-between"},[r("span",[e._v("历史搜索")]),e._v(" "),r("span",{staticStyle:{cursor:"pointer"},on:{click:e.deleteHistorySearch}},[r("a-icon",{attrs:{type:"delete"}}),e._v("删除\n            ")],1)]),e._v(" "),e._l(e.historySearch,(function(t){return r("div",{key:t.ID,staticClass:"item"},[r("div",{staticClass:"link",on:{click:function(r){return e.handleKeyWordTagClick(t)}}},[r("span",[e._v(e._s(t.names))]),e._v(" "),r("span",{staticClass:"hot-icon"})])])}))],2):e._e()]),e._v(" "),r("div",{staticClass:"result-wrap search-result"},e._l(e.searchList,(function(t){return r("div",{key:t.ID,staticClass:"item"},[r("div",{staticClass:"link",on:{click:function(r){return e.handleKeyWordTagClick2(t)}}},[r("span",[e._v(e._s(t.names))]),e._v(" "),r("span",{staticStyle:{color:"#666","font-size":"12px"}},[e._v(e._s("1"===t.TYPE?"产品":"类别"))])])])})),0)],1),e._v(" "),r("AutoPlay",{attrs:{"banner-txt":e.bannerTxt},on:{handleBannerPopShow:e.handleBannerPopShow}})],1)],1)}),[],!1,null,"2aeb4990",null);t.default=component.exports;installComponents(component,{AutoPlay:r(813).default})}}]);