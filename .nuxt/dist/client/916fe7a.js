(window.webpackJsonp=window.webpackJsonp||[]).push([[18,19],{1272:function(t,e,n){var content=n(1293);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(78).default)("168d8b20",content,!0,{sourceMap:!1})},1292:function(t,e,n){"use strict";n(1272)},1293:function(t,e,n){var o=n(77)(!1);o.push([t.i,".model-wrap[data-v-5391ef40]{position:fixed;left:0;right:0;top:0;bottom:0;z-index:10}.model[data-v-5391ef40]{width:100%;height:100%;background-color:rgba(6,21,26,.67)}.content[data-v-5391ef40]{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%)}.close-btn[data-v-5391ef40]{position:absolute;top:0;right:-60px;cursor:pointer}@media (max-width:767px){.close-btn[data-v-5391ef40]{right:-16px;top:-16px;z-index:10}}",""]),t.exports=o},1294:function(t,e,n){var content=n(1319);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(78).default)("ff3e5fb2",content,!0,{sourceMap:!1})},1310:function(t,e,n){"use strict";n.r(e);var o={methods:{handleBannerPopHide:function(){this.$emit("handleBannerPopHide")}}},r=(n(1292),n(35)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"model-wrap"},[n("div",{staticClass:"model"}),t._v(" "),n("div",{staticClass:"content"},[n("div",{staticClass:"close-btn",on:{click:t.handleBannerPopHide}},[n("a-icon",{staticStyle:{"font-size":"30px",color:"#dadada"},attrs:{type:"close"}})],1),t._v(" "),t._t("content")],2)])}),[],!1,null,"5391ef40",null);e.default=component.exports},1318:function(t,e,n){"use strict";n(1294)},1319:function(t,e,n){var o=n(77)(!1);o.push([t.i,".content-wrap[data-v-31293d06]{width:300px;height:534px;background-image:url(https://img.xuanxingbao.com/bgmc.png);background-size:cover;position:relative}.title[data-v-31293d06]{font-size:50px;color:#f3db99;font-weight:700;text-shadow:1px 1px 2px #000;padding-top:24%}.mini-program-img[data-v-31293d06]{width:100%;position:absolute;left:0;bottom:90px}.mini-program-img .txt[data-v-31293d06]{color:#fff;margin-bottom:10px}.mini-program-img .img[data-v-31293d06]{width:30%}",""]),t.exports=o},1344:function(t,e,n){"use strict";n.r(e);var o={components:{model:n(1310).default},props:{imgUrl:{type:String,default:function(){return""}},recommendCate:{type:String,default:function(){return""}}},methods:{handleBannerPopHide:function(){this.$emit("handleBannerPopHide")}}},r=(n(1318),n(35)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("model",{on:{handleBannerPopHide:t.handleBannerPopHide}},[n("div",{staticClass:"content-wrap",attrs:{slot:"content"},slot:"content"},[n("div",{staticClass:"title text-c"},[t._v("\n      "+t._s(t.recommendCate)+"软件\n    ")]),t._v(" "),n("div",{staticClass:"mini-program-img text-c"},[n("div",{staticClass:"txt"},[t._v("\n        扫码去点评\n      ")]),t._v(" "),n("img",{staticClass:"img",attrs:{src:t.imgUrl,alt:""}})])])])}),[],!1,null,"31293d06",null);e.default=component.exports}}]);