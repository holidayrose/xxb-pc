(window.webpackJsonp=window.webpackJsonp||[]).push([[2,19],{801:function(t,e,n){"use strict";n.r(e);var o={components:{model:n(887).default},props:{imgUrl:{type:String,default:function(){return""}},recommendCate:{type:String,default:function(){return""}}},data:function(){return{category_name:"",qrcodeImgUrl:"https://img.xuanxingbao.com/wxscode.png"}},mounted:function(){this.getRecommendCate()},methods:{handleBannerPopHide:function(){this.$emit("handleBannerPopHide")},getRecommendCate:function(){var t=this;this.$requests.cateBanner().then((function(e){if(200===e.status&&"success"===e.data.result){var path="pages/comment_lists/main?cid="+e.data.recommendCategoryObj.category_id+"&cname="+e.data.recommendCategoryObj.category_name;t.category_name=e.data.recommendCategoryObj.category_name,t.getQrcodeImg(path)}}))},getQrcodeImg:function(path){var t=this;this.$requests.qrcodeGet({PATH:path}).then((function(e){console.log("qrcode:",e),200===e.status&&"success"===e.data.result&&(t.qrcodeImgUrl="data:image/jpeg;base64,"+e.data.data)}))}}},r=(n(899),n(59)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("model",{on:{handleBannerPopHide:t.handleBannerPopHide}},[n("div",{staticClass:"content-wrap",attrs:{slot:"content"},slot:"content"},[n("div",{staticClass:"title text-c"},[t._v("\n      "+t._s(t.category_name)+"软件\n    ")]),t._v(" "),n("div",{staticClass:"mini-program-img text-c"},[n("div",{staticClass:"txt"},[t._v("\n        扫码去点评\n      ")]),t._v(" "),n("img",{staticClass:"img",attrs:{src:t.qrcodeImgUrl,alt:""}})])])])}),[],!1,null,"f87e0aa8",null);e.default=component.exports},814:function(t,e,n){var content=n(838);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(32).default)("168d8b20",content,!0,{sourceMap:!1})},837:function(t,e,n){"use strict";n(814)},838:function(t,e,n){var o=n(31)(!1);o.push([t.i,".model-wrap[data-v-5391ef40]{position:fixed;left:0;right:0;top:0;bottom:0;z-index:10}.model[data-v-5391ef40]{width:100%;height:100%;background-color:rgba(6,21,26,.67)}.content[data-v-5391ef40]{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%)}.close-btn[data-v-5391ef40]{position:absolute;top:0;right:-60px;cursor:pointer}@media (max-width:767px){.close-btn[data-v-5391ef40]{right:-16px;top:-16px;z-index:10}}",""]),t.exports=o},864:function(t,e,n){var content=n(900);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(32).default)("1b7a009b",content,!0,{sourceMap:!1})},887:function(t,e,n){"use strict";n.r(e);var o={methods:{handleBannerPopHide:function(){this.$emit("handleBannerPopHide")}}},r=(n(837),n(59)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"model-wrap"},[n("div",{staticClass:"model"}),t._v(" "),n("div",{staticClass:"content"},[n("div",{staticClass:"close-btn",on:{click:t.handleBannerPopHide}},[n("a-icon",{staticStyle:{"font-size":"30px",color:"#dadada"},attrs:{type:"close"}})],1),t._v(" "),t._t("content")],2)])}),[],!1,null,"5391ef40",null);e.default=component.exports},899:function(t,e,n){"use strict";n(864)},900:function(t,e,n){var o=n(31)(!1);o.push([t.i,".content-wrap[data-v-f87e0aa8]{width:300px;height:534px;background-image:url(https://img.xuanxingbao.com/bgmc.png);background-size:cover;position:relative}.title[data-v-f87e0aa8]{font-size:50px;color:#f3db99;font-weight:700;text-shadow:1px 1px 2px #000;padding-top:24%}.mini-program-img[data-v-f87e0aa8]{width:100%;position:absolute;left:0;bottom:90px}.mini-program-img .txt[data-v-f87e0aa8]{color:#fff;margin-bottom:10px}.mini-program-img .img[data-v-f87e0aa8]{width:30%}",""]),t.exports=o}}]);