(window.webpackJsonp=window.webpackJsonp||[]).push([[41,6,10,11,12,13,14,24,26,27,28],{803:function(t,e,r){"use strict";r.r(e);r(107);var n={name:"StarZoom",props:{outWidth:{type:Number,default:function(){return 0}},outHeight:{type:Number,default:function(){return 0}},decimal:{type:Number,default:function(){return 0}}},computed:{innerWidth:function(){return this.decimal*this.outWidth}}},o=r(48),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"star-wrap"}},[r("div",{staticClass:"star-default",style:{width:t.outWidth+"px",height:t.outHeight+"px"}},[r("div",{staticClass:"star-real",style:{width:t.innerWidth+"px",height:t.outHeight+"px"}})])])}),[],!1,null,null,null);e.default=component.exports},804:function(t,e,r){t.exports=r.p+"img/qrcode.5d928fb.png"},805:function(t,e,r){t.exports=r.p+"img/wx-yh.bffc413.jpg"},806:function(t,e,r){t.exports=r.p+"img/qrcode_dy.e488e10.jpg"},807:function(t,e,r){t.exports=r.p+"img/qcrode.414b83a.jpg"},808:function(t,e,r){t.exports=r.p+"img/qrcode_fw.8427576.jpg"},809:function(t,e,r){"use strict";r.r(e);var n=r(815),o=r(300),l={name:"Header",components:{pHeader:n.default,mHeader:o.default},props:{isShow:{type:Boolean,default:function(){return!1}},isFixed:{type:Boolean,default:function(){return!0}}},methods:{handleBannerPopShow:function(){this.$emit("handleBannerPopShow")}}},c=r(48),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"header-wrap"},[t.isFixed?r("a-anchor",[r("pHeader",{staticClass:"display-pc",attrs:{"is-show":t.isShow},on:{handleBannerPopShow:t.handleBannerPopShow}})],1):r("pHeader",{staticClass:"display-pc",attrs:{"is-show":t.isShow},on:{handleBannerPopShow:t.handleBannerPopShow}}),t._v(" "),r("mHeader",{staticClass:"display-m"})],1)}),[],!1,null,null,null);e.default=component.exports},810:function(t,e,r){"use strict";r.r(e);var n={data:function(){return{cateInfo:[{text:"关于我们",title:"选型宝订阅号",img:r(806),path:"http://old.xuanxingbao.com/webPC/about"},{text:"联系我们",title:"选型宝小程序",img:r(807),path:"http://old.xuanxingbao.com/webPC/contact-list.html"},{text:"加入我们",title:"选型宝服务号",img:r(808),path:"http://old.xuanxingbao.com/webPC/participate.html"}]}}},o=r(48),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a-layout-footer",{staticClass:"footer"},[n("a-row",[n("a-col",[n("a-row",{staticClass:"g-wrapper",attrs:{getter:"16"}},[n("a-col",{staticClass:"gutter-row footerInfo",attrs:{span:"6"}},[n("a",{staticClass:"ca_text",attrs:{href:"/all/",title:"微信群"}},[t._v("热门类别")]),t._v(" "),n("p",{staticClass:"qc_text"},[t._v("\n            微信群\n          ")]),t._v(" "),n("img",{staticClass:"qcrodeImg",attrs:{src:r(805),alt:""}})]),t._v(" "),t._l(t.cateInfo,(function(e,r){return n("a-col",{key:r,staticClass:"gutter-row footerInfo",attrs:{span:"6"}},[n("a",{staticClass:"ca_text",attrs:{href:e.path,title:e.text,rel:"nofollow"}},[t._v(t._s(e.text))]),t._v(" "),n("p",{staticClass:"qc_text"},[t._v("\n            "+t._s(e.title)+"\n          ")]),t._v(" "),n("img",{staticClass:"qcrodeImg",attrs:{src:e.img,alt:""}})])}))],2)],1),t._v(" "),n("a-col",{staticClass:"beian"},[n("div",{staticClass:"site-width"},[n("p",[t._v("© 2021 选型宝，All Rights Reserved.")]),t._v(" "),n("p",[n("a",{attrs:{href:"#"}},[t._v("京ICP备14045422号-2 北京众智优选科技有限公司")])])]),t._v(" "),n("div",{staticClass:"site-width"},[n("p",[t._v("地址：北京市朝阳区百子湾西里435号创富港436")])])])],1)],1)}),[],!1,null,null,null);e.default=component.exports},811:function(t,e,r){"use strict";r.r(e);var n=r(48),component=Object(n.a)({},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"right-nav-wrap"},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},812:function(t,e,r){"use strict";r.r(e);var n=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"qrcode"},[e("img",{attrs:{src:r(804),alt:""}})])}],o=r(48),component=Object(o.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),n,!1,null,null,null);e.default=component.exports},813:function(t,e,r){var content=r(817);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(36).default)("b70710a8",content,!0,{sourceMap:!1})},814:function(t,e,r){"use strict";r.r(e);var n={},o=r(48),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"no-data-wrap"},[r("div",{staticClass:"txt-wrap"},[t._t("txt")],2)])}),[],!1,null,null,null);e.default=component.exports},816:function(t,e,r){"use strict";r(813)},817:function(t,e,r){var n=r(35)(!1);n.push([t.i,".view[data-v-9eb1fe9e]{width:100%;display:flex;justify-content:flex-start}.view .range[data-v-9eb1fe9e]{width:10%;position:relative;color:#fff;background-color:#92b2f1}.view .range span[data-v-9eb1fe9e]{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%)}.view.c1 .range[data-v-9eb1fe9e]{background-color:#f55b53}.view.c1 .score-box[data-v-9eb1fe9e]{background-color:#f55c53!important}.view.c2 .range[data-v-9eb1fe9e]{background-color:#f2ab38}.view.c2 .score-box[data-v-9eb1fe9e]{background-color:#f2ab38!important}.view.c3 .range[data-v-9eb1fe9e]{background-color:#5fcd81}.view.c3 .score-box[data-v-9eb1fe9e]{background-color:#5fcd81!important}.view .info[data-v-9eb1fe9e]{width:90%;padding:10px 20px}.view .info .title[data-v-9eb1fe9e]{font-size:17px;font-weight:700;margin-bottom:10px}.view .info .comment[data-v-9eb1fe9e]{color:#555}.view .info .score[data-v-9eb1fe9e]{display:flex;flex-direction:row;justify-content:space-between}.view .info .score .score-box[data-v-9eb1fe9e]{background-color:#90b2f1;color:#fff;padding:2px 4px;border-radius:4px}.view .info .bar-box[data-v-9eb1fe9e]{width:218px;height:13px;margin:10px 0;background-color:#e6e6e6;border-radius:50px}.view .info .bar-box .bar[data-v-9eb1fe9e]{height:13px;display:flex;justify-content:space-between;align-items:center;width:0;box-sizing:border-box;padding:0 10px;border-radius:50px;transition:width .8s ease-in-out}.view .info .bar-box .bar.s1[data-v-9eb1fe9e]{background:#f55a53;background:linear-gradient(90deg,#f55a53,#eb8a5d)}.view .info .bar-box .bar.s2[data-v-9eb1fe9e]{background:#f2a937;background:linear-gradient(90deg,#f2a937,#ebd458)}.view .info .bar-box .bar.s3[data-v-9eb1fe9e]{background:#5ecd80;background:linear-gradient(90deg,#5ecd80,#80cca5)}.view .info .bar-box .bar.s4[data-v-9eb1fe9e]{background:#37a2f1;background:linear-gradient(90deg,#8fb1f0,#a3baf9)}",""]),t.exports=n},818:function(t,e,r){"use strict";r.r(e);var n={},o=r(48),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("a-row",[r("a-col",[r("div",{staticClass:"g-wrapper breadcrumb"},[r("a-breadcrumb",[t._t("default")],2)],1)])],1)}),[],!1,null,null,null);e.default=component.exports},819:function(t,e,r){"use strict";r.r(e);var n=r(48),component=Object(n.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"slider-wrap"},[t._t("report-txt"),t._v(" "),r("div",[r("h2",{staticClass:"slider-title"},[t._t("slider-title")],2),t._v(" "),r("div",[t._t("slider-nav-bar")],2)])],2)}),[],!1,null,null,null);e.default=component.exports},820:function(t,e,r){var content=r(828);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(36).default)("e2592f90",content,!0,{sourceMap:!1})},822:function(t,e,r){"use strict";r.r(e);r(107);var n={props:{index:{type:Number,default:function(){return 0}},item:{type:Object,default:function(){return null}},categoryId:{type:String,default:function(){return""}}}},o=(r(816),r(48)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"view",class:t.index<3?"c"+(t.index+1):"c4"},[r("div",{staticClass:"range"},[r("span",[t._v("\n      "+t._s(t.index+1)+"\n    ")])]),t._v(" "),r("div",{staticClass:"info"},[r("div",{staticClass:"title"},[r("nuxt-link",{staticClass:"link",attrs:{target:"_blank",to:{name:"reputation-id",params:{id:t.categoryId},query:{factory_id:t.item.qcid}}}},[t._v("\n        "+t._s(t.item.factory_short_name)+"\n      ")])],1),t._v(" "),r("div",{staticClass:"score"},[r("div",{staticClass:"score-box"},[t._v("\n        "+t._s(t.item.avgNum)+"分\n      ")]),t._v(" "),r("nuxt-link",{staticClass:"comment",attrs:{target:"_blank",to:{name:"reputation-id",params:{id:t.categoryId},query:{factory_id:t.item.qcid}}}},[r("span",[t._v("\n          "+t._s(t.item.dpnum)+"条\n        ")]),t._v(" "),r("span",[t._v("\n          有价值点评\n        ")])])],1),t._v(" "),r("div",{staticClass:"bar-box"},[r("div",{staticClass:"bar",class:t.index<3?"s"+(t.index+1):"s4",staticStyle:{width:"50%"}})])])])}),[],!1,null,"9eb1fe9e",null);e.default=component.exports},827:function(t,e,r){"use strict";r(820)},828:function(t,e,r){var n=r(35)(!1);n.push([t.i,".bar-box[data-v-41038052]{width:100%;max-width:50vw;background-color:#e6e6e6;height:15px;border-radius:20px;overflow:hidden}.bar-box.small[data-v-41038052]{max-width:140px}.bar-box .bar[data-v-41038052]{height:15px;width:0;border-radius:20px;transition:width .8s ease-in-out;padding:0 10px}.bar-box .bar.c1[data-v-41038052]{background:#ff4a49;background:linear-gradient(90deg,#ff4a49,#fc8450)}.bar-box .bar.c2[data-v-41038052]{background:#ffa602;background:linear-gradient(90deg,#ffa602,#f1d335)}.bar-box .bar.c3[data-v-41038052]{background:#01d078;background:linear-gradient(90deg,#01d078,#63cea2)}.bar-box .bar.c4[data-v-41038052]{background:#8c89c2;background:linear-gradient(90deg,#8c89c2,#afb5f3)}.bar-box .bar.c5[data-v-41038052]{background:#afb5f3;background:linear-gradient(90deg,#afb5f3,#9eb9ff)}",""]),t.exports=n},833:function(t,e,r){"use strict";r.r(e);r(107),r(45);var n={props:{index:{type:Number,default:0},score:{type:Number,default:.5},size:{type:String,default:""}},data:function(){return{start:!1}},computed:{width:function(){if(this.score<=2.5)return 25;var t=this.score/5*100;return t>25?t:25}},mounted:function(){var t=this;setTimeout((function(){t.start=!0}),50)}},o=(r(827),r(48)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"bar-box",class:t.size},[r("div",{staticClass:"bar",class:"c"+t.index,style:t.start?"width:"+t.width+"%":0})])}),[],!1,null,"41038052",null);e.default=component.exports},862:function(t,e,r){t.exports=r.p+"img/dp.b8d7f9e.png"},877:function(t,e,r){"use strict";r.r(e);var n=r(32),o=(r(121),r(803)),l=r(833),c=r(814),d=r(822),v=r(811),f=r(812),_=r(299),h=r(818),m={components:{Star:o.default,bar:l.default,noData:c.default,rankListItem:d.default,rightNav:v.default,qrcode:f.default,bannerPop:_.default,breadCrumb:h.default},asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,o,l,c,d,v,f,_,h;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.params.id,n={},o=[],e.next=5,t.$requests.reviewDetail({SCORE_ID:r});case 5:return"success"===(l=e.sent).data.result&&(o=l.data.praiseList,(n=l.data.scoreInformationObj).earmarked=[],n.earmarked.push({text:"功能",levelAvgNum:parseInt(n.FUNCTIONLEVEL)}),n.earmarked.push({text:"性能",levelAvgNum:parseInt(n.PERFORMANCELEVEL)}),n.earmarked.push({text:"可扩展性",levelAvgNum:parseInt(n.SCALABILITYLEVEL)}),n.earmarked.push({text:"易部署性",levelAvgNum:parseInt(n.DEPLOYLEVEL)}),n.earmarked.push({text:"使用友好性",levelAvgNum:parseInt(n.FRIENDLYLEVEL)})),e.next=9,t.$requests.categoryHotCompany({ORDER_TYPE:0,CATEGORY_ID:n.CATEGORY_ID});case 9:return c=e.sent,d=200===c.status&&"success"===c.data.result?c.data.factoryQcList:[],e.next=13,t.$requests.categoryChallenger({ORDER_TYPE:0,CATEGORY_ID:n.CATEGORY_ID});case 13:return v=e.sent,f=200===v.status&&"success"===v.data.result?v.data.factoryQcList:[],e.next=17,t.$requests.categoryNoComment({CATEGORY_ID:n.CATEGORY_ID});case 17:return _=e.sent,h=200===_.status&&"success"===_.data.result?_.data.notScoreList:[],e.abrupt("return",{reviewObj:n,likeList:o,hotCompanyList:d,challengerList:f,noReviewList:h,bannerPopShow:!1});case 20:case"end":return e.stop()}}),e)})))()},methods:{handleBannerPopShow:function(){this.bannerPopShow=!0},handleBannerPopHide:function(){this.bannerPopShow=!1},navigateToRank:function(){var t=this.$router.resolve({name:"company-rank-id",params:{id:this.reviewObj.CATEGORY_ID}});window.open(t.href,"_blank")}},head:function(){return{title:this.reviewObj.REALNAME+"对"+this.reviewObj.PRODUCTNAME+"的点评，他觉得"+this.reviewObj.FACTORYNAME+this.reviewObj.CATEGORYNAME+"系统怎么样？选型宝",meta:[{hid:"description",name:"description",content:"想了解"+this.reviewObj.PRODUCTNAME+"的用户口碑好不好，"+this.reviewObj.FACTORYNAME+this.reviewObj.CATEGORYNAME+"系统怎么样？就上选型宝, 企业级软件的大众点评"},{hid:"keywords",name:"keywords",content:this.reviewObj.CATEGORYNAME+"系统_"+this.reviewObj.FACTORYNAME+"_"+this.reviewObj.PRODUCTNAME}]}}},w=r(48),component=Object(w.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main",attrs:{id:"review-detail"}},[n("h1",{staticClass:"heading-hide"},[t._v("\n    "+t._s(t.reviewObj.REALNAME)+"对"+t._s(t.reviewObj.PRODUCTNAME)+"的点评，他觉得"+t._s(t.reviewObj.CATEGORYNAME)+"系统怎么样？选型宝\n  ")]),t._v(" "),n("a-anchor",{staticClass:"default"},[n("Header2",{attrs:{"is-show":!0},on:{handleBannerPopShow:t.handleBannerPopShow}})],1),t._v(" "),n("div",{staticClass:"container-index"},[n("breadCrumb",[n("a-breadcrumb-item",[n("nuxt-link",{attrs:{to:"/"}},[t._v("\n          首页\n        ")])],1),t._v(" "),n("a-breadcrumb-item",[n("nuxt-link",{attrs:{to:{name:"product-rank-id",params:{id:t.reviewObj.CATEGORY_ID}},target:"_blank"}},[t._v("\n          "+t._s(t.reviewObj.CATEGORYNAME)+"软件排名\n        ")])],1),t._v(" "),n("a-breadcrumb-item",[t._v("\n        "+t._s(t.reviewObj.PRODUCTNAME)+"\n      ")])],1),t._v(" "),n("a-row",{staticClass:"g-wrapper",attrs:{gutter:[32,32]}},[n("a-col",{attrs:{span:"8"}},[n("div",{staticClass:"user-wrap"},[n("div",{staticClass:"user"},[n("div",{staticClass:"head-img"},[n("div",{staticClass:"img-wrap"},[n("img",{attrs:{src:t.reviewObj.HEADIMAGES,alt:t.reviewObj.OFFICE}})])]),t._v(" "),n("div",{staticClass:"user-info"},[n("div",{staticClass:"info-item"},[n("span",{staticClass:"title"},[t._v("姓名：")]),t._v(" "),n("span",[t._v(t._s(t.reviewObj.REALNAME))])]),t._v(" "),n("div",{staticClass:"info-item"},[n("span",{staticClass:"title"},[t._v("公司：")]),t._v(" "),n("span",[t._v(t._s(t.reviewObj.COMPANY))])]),t._v(" "),n("div",{staticClass:"info-item"},[n("span",{staticClass:"title"},[t._v("职位：")]),t._v(" "),n("span",[t._v(t._s(t.reviewObj.OFFICE))])])])])]),t._v(" "),n("Slider",[n("div",{staticClass:"g-flex space-between",attrs:{slot:"slider-title"},on:{click:t.navigateToRank},slot:"slider-title"},[n("span",[t._v(t._s(t.reviewObj.CATEGORYNAME)+"厂商口碑排名")]),t._v(" "),n("span",{staticStyle:{"font-size":"14px",color:"#a9a9a9",cursor:"pointer"}},[t._v("查看完整")])]),t._v(" "),t.hotCompanyList.length?n("div",{staticClass:"slider-nav-bar",attrs:{slot:"slider-nav-bar"},slot:"slider-nav-bar"},[n("h3",[t._v("热门厂商")]),t._v(" "),t._l(t.hotCompanyList,(function(e,r){return n("div",{key:r,staticClass:"view-wrap"},[n("rankListItem",{attrs:{item:e,index:r,"category-id":t.reviewObj.CATEGORY_ID}})],1)}))],2):t._e(),t._v(" "),t.challengerList.length?n("div",{staticClass:"slider-nav-bar",attrs:{slot:"slider-nav-bar"},slot:"slider-nav-bar"},[n("h3",[t._v("挑战者")]),t._v(" "),t._l(t.challengerList,(function(e,r){return n("div",{key:r,staticClass:"view-wrap"},[n("rankListItem",{attrs:{item:e,index:r,"category-id":t.reviewObj.CATEGORY_ID}})],1)}))],2):t._e(),t._v(" "),t.noReviewList.length?n("div",{staticClass:"slider-nav-bar",attrs:{slot:"slider-nav-bar"},slot:"slider-nav-bar"},[n("h3",[t._v("暂无点评的厂商")]),t._v(" "),t._l(t.noReviewList,(function(e,r){return n("div",{key:r,staticClass:"view-wrap"},[n("div",{staticClass:"view"},[n("div",{staticClass:"g-flex space-between pad-20",staticStyle:{width:"100%"}},[n("nuxt-link",{staticStyle:{color:"#222222"},attrs:{target:"_blank",to:{name:"reputation-id",params:{id:t.reviewObj.CATEGORY_ID},query:{factory_id:e.qcid}}}},[t._v("\n                    "+t._s(e.factory_short_name||e.qcname)+"\n                  ")]),t._v(" "),n("span",{staticClass:"review-btn",on:{click:function(e){return e.stopPropagation(),t.handleBannerPopShow.apply(null,arguments)}}},[t._v("我要点评")])],1)])])}))],2):t._e()])],1),t._v(" "),n("a-col",{attrs:{span:"16"}},[n("div",{staticClass:"pad-20",staticStyle:{"background-color":"#ffffff"}},[n("div",{staticClass:"panel company-info"},[n("div",{staticClass:"g-flex"},[t._v("\n              点评产品：\n              "),n("span",{staticClass:"company"},[t._v(t._s(t.reviewObj.PRODUCTNAME))])]),t._v(" "),n("div",{staticClass:"g-flex"},[t._v("\n              总体感受：\n              "),n("span",{staticClass:"range"},[t._v(t._s(t.reviewObj.ztgsnum))]),t._v(" "),n("Star",{attrs:{"out-width":100,"out-height":20,decimal:t.reviewObj.ztgsnum/5}})],1)]),t._v(" "),n("h2",[t._v("基本情况")]),t._v(" "),n("div",{staticClass:"panel base-info"},[n("div",{staticClass:"base-info-item g-flex"},[n("div",{staticClass:"base-left"},[t._v("\n                供应商：\n              ")]),t._v(" "),n("div",{staticClass:"base-right"},[t._v("\n                "+t._s(t.reviewObj.FACTORYNAME)+"\n              ")])]),t._v(" "),n("div",{staticClass:"base-info-item g-flex"},[n("div",{staticClass:"base-left"},[t._v("\n                产品类别：\n              ")]),t._v(" "),n("div",{staticClass:"base-right"},[t._v("\n                "+t._s(t.reviewObj.CATEGORYNAME)+"\n              ")])]),t._v(" "),n("div",{staticClass:"base-info-item g-flex"},[n("div",{staticClass:"base-left"},[t._v("\n                产品名称：\n              ")]),t._v(" "),n("div",{staticClass:"base-right"},[t._v("\n                "+t._s(t.reviewObj.PRODUCTNAME)+"\n              ")])]),t._v(" "),n("div",{staticClass:"base-info-item g-flex"},[n("div",{staticClass:"base-left"},[t._v("\n                应用的行业：\n              ")]),t._v(" "),n("div",{staticClass:"base-right"},[t._v("\n                "+t._s(t.reviewObj.hangyeName||"其他")+"\n              ")])]),t._v(" "),n("div",{staticClass:"base-info-item g-flex"},[n("div",{staticClass:"base-left"},[t._v("\n                企业规模：\n              ")]),t._v(" "),n("div",{staticClass:"base-right"},[t._v("\n                "+t._s(t.reviewObj.qiyerenshu)+"\n              ")])])]),t._v(" "),n("h2",[t._v("产品评价")]),t._v(" "),t.reviewObj.ztgsnum?n("div",{staticClass:"panel"},[n("h3",{staticClass:"title"},[t._v("\n              【专项指标评分】\n            ")]),t._v(" "),n("div",{staticClass:"content earmarked"},t._l(t.reviewObj.earmarked,(function(e,r){return n("div",{key:r,staticClass:"item g-flex"},[n("div",{staticClass:"col col-1",staticStyle:{width:"150px"}},[t._v("\n                  "+t._s(e.text)+"\n                ")]),t._v(" "),n("div",{staticClass:"col col-4"},[n("bar",{attrs:{score:e.levelAvgNum,index:r+1}})],1),t._v(" "),n("div",{staticClass:"col col-3"},[t._v("\n                  "+t._s(e.levelAvgNum)+"分\n                ")])])})),0),t._v(" "),n("div",{staticClass:"comment-content"},[n("p",[t._v("【优点】"+t._s(t.reviewObj.advantages))]),t._v(" "),n("p",[t._v("【缺点】"+t._s(t.reviewObj.disadvantages))])]),t._v(" "),t.likeList.length?n("div",{staticClass:"like-box g-flex"},[n("img",{attrs:{src:r(862),alt:""}}),t._v(" "),t._l(t.likeList,(function(e,r){return n("div",{key:r,staticClass:"user"},[r+1<t.likeList.length?n("span",[t._v(t._s(e.REALNAME)+"、")]):n("span",[t._v(t._s(e.REALNAME))])])})),t._v(" "),n("span",[t._v("觉得很赞")])],2):t._e()]):n("div",{staticClass:"panel"},[n("div",{staticStyle:{width:"100%",height:"400px"}},[n("no-data",[n("div",{staticStyle:{"font-size":"14px"},attrs:{slot:"txt"},slot:"txt"},[t._v("\n                  该产品暂无评论~\n                  "),n("span",{staticStyle:{padding:"6px 14px","border-radius":"4px","background-color":"#007DFF",color:"#ffffff",cursor:"pointer"}},[t._v("马上去点评")])])])],1)])])])],1)],1),t._v(" "),n("banner-pop",{directives:[{name:"show",rawName:"v-show",value:t.bannerPopShow,expression:"bannerPopShow"}],on:{handleBannerPopHide:t.handleBannerPopHide}}),t._v(" "),n("rightNav",[n("qrcode")],1),t._v(" "),n("Footer")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Header2:r(809).default,Slider:r(819).default,Footer:r(810).default})}}]);