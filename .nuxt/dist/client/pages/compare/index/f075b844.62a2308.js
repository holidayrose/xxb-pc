(window.webpackJsonp=window.webpackJsonp||[]).push([[37,10,11,12,16],{1015:function(t,e,n){"use strict";n.r(e);n(146);var r={name:"StarZoom",props:{outWidth:{type:Number,default:function(){return 0}},outHeight:{type:Number,default:function(){return 0}},decimal:{type:Number,default:function(){return 0}}},computed:{innerWidth:function(){return this.decimal*this.outWidth}}},o=n(86),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"star-wrap"}},[n("div",{staticClass:"star-default",style:{width:t.outWidth+"px",height:t.outHeight+"px"}},[n("div",{staticClass:"star-real",style:{width:t.innerWidth+"px",height:t.outHeight+"px"}})])])}),[],!1,null,null,null);e.default=component.exports},1016:function(t,e,n){"use strict";n.r(e);var r=n(1027),o=n(447),c={name:"Header",components:{pHeader:r.default,mHeader:o.default},props:{isShow:{type:Boolean,default:function(){return!1}},isFixed:{type:Boolean,default:function(){return!0}}},methods:{handleBannerPopShow:function(){this.$emit("handleBannerPopShow")}}},l=n(86),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header-wrap"},[t.isFixed?n("a-anchor",[n("pHeader",{staticClass:"display-pc",attrs:{"is-show":t.isShow},on:{handleBannerPopShow:t.handleBannerPopShow}})],1):n("pHeader",{staticClass:"display-pc",attrs:{"is-show":t.isShow},on:{handleBannerPopShow:t.handleBannerPopShow}}),t._v(" "),n("mHeader",{staticClass:"display-m"})],1)}),[],!1,null,null,null);e.default=component.exports},1028:function(t,e,n){"use strict";n.r(e);var r={},o=n(86),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a-row",[n("a-col",[n("div",{staticClass:"g-wrapper breadcrumb"},[n("a-breadcrumb",[t._t("default")],2)],1)])],1)}),[],!1,null,null,null);e.default=component.exports},1035:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"c",(function(){return c})),n.d(e,"b",(function(){return l}));n(38),n(87),n(112),n(147),n(123),n(33),n(273),n(58),n(29);function r(t){var e=t.toString();return e[1]?e:"0".concat(e)}function o(t,e){var n="/static/images/avatar.jpg";return e[t]?e[t].includes("http")||(e[t].includes("jpg")||e[t].includes("JPG")||e[t].includes("PNG")?e[t]="https://www.xuanxingbao.com/"+e[t]:e[t]=n):e[t]=n,e}function c(t){var e=new Date(t),n=[e.getFullYear(),e.getMonth()+1,e.getDate()].map(r).join("-");return"".concat(n)}function l(t){var e='"[';return t.forEach((function(t,n,r){n<r.length-1?e+=t.product_id+",":e+=t.product_id+']"'})),e}},1061:function(t,e,n){"use strict";n.r(e);n(51);var r=n(449),o=n(1015),c={components:{model:r.default,Star:o.default},props:{categoryId:{type:String,default:function(){return""}},compareList:{type:Array,default:function(){return[]}}},data:function(){return{keywords:"",recommendProList:[],initialList:[]}},watch:{compareList:function(t){var e=this;this.recommendProList=this.initialList.filter((function(t){return!e.compareList.some((function(e){return e.product_id===t.product_id}))}))}},mounted:function(){this.recommendProduct()},methods:{add:function(t){this.$emit("addProduct",t)},handlePopHide:function(){this.$emit("handlePopHide")},recommendProduct:function(){var t=this;this.$requests.indexSelectCatePro({category_id:this.categoryId}).then((function(e){200===e.status&&"success"===e.data.result&&(t.initialList=e.data.productlist,t.recommendProList=e.data.productlist.filter((function(e){return!t.compareList.some((function(t){return t.product_id===e.product_id}))})))}))}}},l=n(86),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("model",{on:{handleBannerPopHide:t.handlePopHide}},[n("div",{staticClass:"add-product-wrap",attrs:{slot:"content"},slot:"content"},[n("h3",{staticClass:"add-product-title text-c"},[t._v("\n      添加更多产品\n    ")]),t._v(" "),n("div",{staticClass:"search-box"},[n("div",{staticClass:"search-input"},[n("a-input-search",{staticClass:"input",attrs:{placeholder:"搜索软件和服务"},model:{value:t.keywords,callback:function(e){t.keywords=e},expression:"keywords"}})],1),t._v(" "),n("div",{staticClass:"search-result"})]),t._v(" "),n("div",{staticClass:"recommend-box"},[n("div",{staticClass:"recommend-title"},[t._v("\n        推荐产品\n      ")]),t._v(" "),n("div",{staticClass:"recommend-list"},t._l(t.recommendProList,(function(e,r){return n("div",{key:r,staticClass:"recommend-item g-flex space-between m-b-10 pad-10"},[n("div",{staticClass:"product-info g-flex a-center"},[n("div",{staticClass:"logo m-r-10"},[n("img",{attrs:{src:"http://xuanxingbao.com/images/xxb_mark.png",alt:""}})]),t._v(" "),n("div",{staticClass:"product-info"},[n("h3",{staticClass:"product-name"},[t._v("\n                "+t._s(e.product_name)+"\n              ")]),t._v(" "),n("div",{staticClass:"stars g-flex"},[n("Star",{attrs:{"out-width":75,"out-height":15,decimal:e.ztgsnum/5}}),t._v(" "),n("span",{staticClass:"ant-rate-text"},[t._v(t._s(e.ztgsnum)+"分")])],1)])]),t._v(" "),n("div",{staticClass:"base-btn add-btn",on:{click:function(n){return t.add(e)}}},[t._v("\n            添加\n          ")])])})),0)])])])}),[],!1,null,"217091a0",null);e.default=component.exports},1087:function(t,e,n){"use strict";n.r(e);var r=n(120),o=n(60),c=(n(205),n(38),n(100),n(113),n(29),n(51),n(1028)),l=n(1015),d=n(1061),v=n(1035),f={components:{breadCrumb:c.default,Star:l.default,addProPop:d.default},asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o,c,l,d,f,h,m,_,C,w,y,x,L,P,S,k;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.app,o=t.params,c=[],l=[],d=[],f=[],m=function(){return n.$requests.compareMenu({category_id:o.categoryId})},_=function(){return n.$requests.compareInfo({category_id:o.categoryId,productids:Object(v.b)(o.compareList)})},C=function(){return n.$requests.compareHotReviews({category_id:o.categoryId,productids:Object(v.b)(o.compareList)})},w=function(){return n.$requests.compareFunctionInfo({category_id:o.categoryId,productids:Object(v.b)(o.compareList),function_type_id:"5475c3b97797453195e399013e1c4d66"})},e.next=11,Promise.all([m(),_(),C(),w()]);case 11:return y=e.sent,x=Object(r.a)(y,4),L=x[0],P=x[1],S=x[2],k=x[3],200===L.status&&(c=L.data.functionlist,console.log(c),c.forEach((function(t){l.push(t.id)}))),200===P.status&&(d=P.data.productcontrastdefault),200===S.status&&"ok"===S.data.result&&(f=S.data.producthotscorelist),console.log("功能对比信息:",k),200===k.status&&(h=k.data.functioncontrastist),e.abrupt("return",{openKey:l,categoryId:o.categoryId,popShow:!1,bannerPopShow:!1,compareList:o.compareList,secondaryMenus:c,defaultInfo:d,reviewList:f,funcList:h});case 23:case"end":return e.stop()}}),e)})))()},computed:{compareListLen:function(){return this.defaultInfo.length},compareListTitle:function(){var title="",t=this.defaultInfo.length;return this.defaultInfo.forEach((function(e,n){title+=n===t-1?e.factoryname+"":n===t-2?e.factoryname+"和":e.factoryname+","})),title}},methods:{addProduct:function(t){this.compareList.push({product_id:t.product_id}),this.getCompareInfo({category_id:this.categoryId,productids:Object(v.b)(this.compareList)}),this.getHotReviews({category_id:this.categoryId,productids:Object(v.b)(this.compareList)}),this.handlePopHide()},removeProduct:function(t){this.compareList=this.compareList.filter((function(e){return e.product_id!==t})),this.defaultInfo=this.defaultInfo.filter((function(e){return e.product_id!==t})),this.reviewList=this.reviewList.filter((function(e){return e.productobj.ID!==t}))},getCompareInfo:function(t){var e=this;this.$requests.compareInfo(t).then((function(t){200===t.status&&"ok"===t.data.result&&(e.defaultInfo=t.data.productcontrastdefault)}))},getHotReviews:function(t){var e=this;this.$requests.compareHotReviews(t).then((function(t){200===t.status&&"ok"===t.data.result&&(e.reviewList=t.data.producthotscorelist)}))},handlePopShow:function(){this.popShow=!0},handlePopHide:function(){this.popShow=!1},handleBannerPopShow:function(){this.bannerPopShow=!0},handleBannerPopHide:function(){this.bannerPopShow=!1}}},h=n(86),component=Object(h.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main"},[n("a-anchor",{staticClass:"default"},[n("Header2",{attrs:{"is-show":!0},on:{handleBannerPopShow:t.handleBannerPopShow}})],1),t._v(" "),n("div",{staticClass:"container-index"},[n("breadCrumb",[n("a-breadcrumb-item",[n("a",{attrs:{href:"/"}},[t._v("首页")])]),t._v(" "),n("a-breadcrumb-item",[t._v("软件排名")])],1),t._v(" "),n("a-row",{staticClass:"g-wrapper compare",attrs:{gutter:[32,32]}},[n("a-col",{attrs:{span:"6"}},[n("a-menu",{staticStyle:{"border-right":"none"},attrs:{mode:"inline","open-keys":t.openKey,"default-selected-keys":["1"]},on:{"update:openKeys":function(e){t.openKey=e},"update:open-keys":function(e){t.openKey=e}}},[n("a-menu-item",{key:"1"},[t._v("\n            总体感受\n          ")]),t._v(" "),n("a-menu-item",{key:"2"},[t._v("\n            专项评分\n          ")]),t._v(" "),t._l(t.secondaryMenus,(function(e){return n("a-sub-menu",{key:e.id,attrs:{title:e.title}},t._l(e.functiontypeObj,(function(e){return n("a-menu-item",{key:"sub1-"+e.id},[t._v("\n              "+t._s(e.title)+"\n            ")])})),1)})),t._v(" "),n("a-menu-item",{key:"15"},[t._v("\n            热门点评\n          ")])],2)],1),t._v(" "),n("a-col",{attrs:{span:"18"}},[n("div",{staticClass:"content"},[n("h2",{staticClass:"title"},[t._v("用户实名口碑比较——"+t._s(t.compareListTitle))]),t._v(" "),n("div",{staticClass:"table"},[n("table",{staticStyle:{width:"100%"}},[n("tbody",{staticClass:"table-body"},[n("tr",{staticClass:"table-row"},[t.compareListLen<4?n("td",{staticClass:"table-cell"},[n("div",{staticClass:"add-product-btn g-flex",on:{click:t.handlePopShow}},[n("a-icon",{staticStyle:{"font-size":"22px"},attrs:{type:"plus-circle",theme:"twoTone","two-tone-color":"#52c41a"}}),t._v(" "),n("span",{staticClass:"m-l-5"},[t._v("添加产品")])],1)]):n("td",{staticClass:"table-cell"}),t._v(" "),t._l(t.defaultInfo,(function(e,r){return n("td",{key:r,staticClass:"table-cell"},[n("div",{staticClass:"pad-t-10",staticStyle:{position:"relative"}},[t.compareListLen>2?n("a-icon",{staticClass:"close-btn",attrs:{type:"close"},on:{click:function(n){return t.removeProduct(e.product_id)}}}):t._e(),t._v(" "),n("div",{staticClass:"product-logo text-c"},[n("img",{attrs:{src:"http://xuanxingbao.com/images/xxb_mark.png",alt:""}})]),t._v(" "),n("div",{staticClass:"product-title text-c"},[n("div",{staticClass:"short-name"},[t._v(t._s(e.factoryname))])])],1),t._v(" "),n("div",{staticClass:"review-btn"},[t._v("\n                      免费使用\n                    ")])])}))],2),t._v(" "),n("tr",{staticClass:"table-row"},[n("td",{staticClass:"table-cell"},[n("div",{staticClass:"title"},[t._v("\n                      总体感受\n                    ")])]),t._v(" "),t._l(t.defaultInfo,(function(e,r){return n("td",{key:r,staticClass:"table-cell text-c"},[n("div",{staticClass:"stars"},[n("Star",{attrs:{"out-width":76,"out-height":15,decimal:e.ztgsnum/5}}),t._v(" "),n("span",{staticClass:"ant-rate-text m-l-5"},[t._v(t._s(e.ztgsnum)+"分")])],1),t._v(" "),n("div",[t._v(t._s(e.productnum)+"条点评")])])}))],2),t._v(" "),n("tr",{staticClass:"table-row"},[n("td",{staticClass:"table-cell",attrs:{colspan:t.defaultInfo.length+1}},[n("div",{staticClass:"title"},[t._v("\n                      专项指标\n                    ")])])]),t._v(" "),n("tr",{staticClass:"table-row"},[n("td",{staticClass:"table-cell"},[n("div",{staticClass:"sub-title text-c"},[t._v("\n                      功能\n                    ")])]),t._v(" "),t._l(t.defaultInfo,(function(e,r){return n("td",{key:r,staticClass:"table-cell text-c"},[n("div",{staticClass:"stars"},[n("Star",{attrs:{"out-width":76,"out-height":15,decimal:e.functionLevel/5}}),t._v(" "),n("span",{staticClass:"ant-rate-text m-l-5"},[t._v(t._s(e.functionLevel)+"分")])],1)])}))],2),t._v(" "),n("tr",{staticClass:"table-row"},[n("td",{staticClass:"table-cell"},[n("div",{staticClass:"sub-title text-c"},[t._v("\n                      性能\n                    ")])]),t._v(" "),t._l(t.defaultInfo,(function(e,r){return n("td",{key:r,staticClass:"table-cell text-c"},[n("div",{staticClass:"stars"},[n("Star",{attrs:{"out-width":76,"out-height":15,decimal:e.performanceLevel/5}}),t._v(" "),n("span",{staticClass:"ant-rate-text m-l-5"},[t._v(t._s(e.performanceLevel)+"分")])],1)])}))],2),t._v(" "),n("tr",{staticClass:"table-row"},[n("td",{staticClass:"table-cell"},[n("div",{staticClass:"sub-title text-c"},[t._v("\n                      可扩展性\n                    ")])]),t._v(" "),t._l(t.defaultInfo,(function(e,r){return n("td",{key:r,staticClass:"table-cell text-c"},[n("div",{staticClass:"stars"},[n("Star",{attrs:{"out-width":76,"out-height":15,decimal:e.scalabilityLevel/5}}),t._v(" "),n("span",{staticClass:"ant-rate-text m-l-5"},[t._v(t._s(e.scalabilityLevel)+"分")])],1)])}))],2),t._v(" "),n("tr",{staticClass:"table-row"},[n("td",{staticClass:"table-cell"},[n("div",{staticClass:"sub-title text-c"},[t._v("\n                      易部署性\n                    ")])]),t._v(" "),t._l(t.defaultInfo,(function(e,r){return n("td",{key:r,staticClass:"table-cell text-c"},[n("div",{staticClass:"stars"},[n("Star",{attrs:{"out-width":76,"out-height":15,decimal:e.deployLevel/5}}),t._v(" "),n("span",{staticClass:"ant-rate-text m-l-5"},[t._v(t._s(e.deployLevel)+"分")])],1)])}))],2),t._v(" "),n("tr",{staticClass:"table-row"},[n("td",{staticClass:"table-cell"},[n("div",{staticClass:"sub-title text-c"},[t._v("\n                      使用友好性\n                    ")])]),t._v(" "),t._l(t.defaultInfo,(function(e,r){return n("td",{key:r,staticClass:"table-cell text-c"},[n("div",{staticClass:"stars"},[n("Star",{attrs:{"out-width":76,"out-height":15,decimal:e.friendlyLevel/5}}),t._v(" "),n("span",{staticClass:"ant-rate-text m-l-5"},[t._v(t._s(e.friendlyLevel)+"分")])],1)])}))],2),t._v(" "),n("tr",{staticClass:"table-row"},[n("td",{staticClass:"table-cell",attrs:{colspan:t.defaultInfo.length+1}},[n("div",{staticClass:"title"},[t._v("\n                      热门点评\n                    ")])])]),t._v(" "),n("tr",{staticClass:"table-row"},[n("td",{staticClass:"table-cell"}),t._v(" "),t._l(t.reviewList,(function(e,r){return n("td",{key:r,staticClass:"table-cell v-top"},t._l(e.producthotscoreinfo,(function(e,r){return n("div",{key:r,staticClass:"reviews"},[n("div",{staticClass:"top"},[n("div",{staticClass:"author g-flex"},[n("div",{staticClass:"g-avatar"},[n("img",{attrs:{src:e.userimage,alt:""}})]),t._v(" "),n("div",{staticClass:"info"},[n("strong",{staticClass:"name"},[t._v(t._s(e.realname))]),t._v(" "),n("p",[n("span",[t._v(t._s(e.company))]),t._v(" "),n("span",[t._v(t._s(e.office))])])])]),t._v(" "),n("div",{staticClass:"g-flex space-between"},[n("div",{staticClass:"star g-flex a-center"},[n("div",{staticClass:"rank m-r-10"},[t._v("\n                              "+t._s(e.ztgsnum)+"\n                              "),n("span",[t._v("分")])]),t._v(" "),n("Star",{attrs:{"out-width":76,"out-height":15,decimal:e.ztgsnum/5}})],1),t._v(" "),n("div",{staticClass:"date"})])]),t._v(" "),n("div",{staticClass:"detail m-t-20"},[n("p",[t._v("【优点】"+t._s(e.advantages))]),t._v(" "),n("p",[t._v("【缺点】"+t._s(e.disadvantages))])])])})),0)}))],2)])])])])])],1)],1),t._v(" "),n("addProPop",{directives:[{name:"show",rawName:"v-show",value:t.popShow,expression:"popShow"}],attrs:{"category-id":t.categoryId,"compare-list":t.compareList},on:{handlePopHide:t.handlePopHide,addProduct:t.addProduct}})],1)}),[],!1,null,"b36f2f1c",null);e.default=component.exports;installComponents(component,{Header2:n(1016).default})}}]);