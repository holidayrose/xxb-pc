(window.webpackJsonp=window.webpackJsonp||[]).push([[2,8,13],{774:function(t,e,n){"use strict";n.r(e);n(161);var c={name:"StarZoom",props:{outWidth:{type:Number,default:function(){return 0}},outHeight:{type:Number,default:function(){return 0}},decimal:{type:Number,default:function(){return 0}}},computed:{innerWidth:function(){return this.decimal*this.outWidth}}},l=n(45),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"star-wrap"}},[n("div",{staticClass:"star-default",style:{width:t.outWidth+"px",height:t.outHeight+"px"}},[n("div",{staticClass:"star-real",style:{width:t.innerWidth+"px",height:t.outHeight+"px"}})])])}),[],!1,null,null,null);e.default=component.exports},792:function(t,e,n){var content=n(801);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(36).default)("e2592f90",content,!0,{sourceMap:!1})},800:function(t,e,n){"use strict";n(792)},801:function(t,e,n){var c=n(35)(!1);c.push([t.i,".bar-box[data-v-41038052]{width:100%;max-width:50vw;background-color:#e6e6e6;height:15px;border-radius:20px;overflow:hidden}.bar-box.small[data-v-41038052]{max-width:140px}.bar-box .bar[data-v-41038052]{height:15px;width:0;border-radius:20px;transition:width .8s ease-in-out;padding:0 10px}.bar-box .bar.c1[data-v-41038052]{background:#ff4a49;background:linear-gradient(90deg,#ff4a49,#fc8450)}.bar-box .bar.c2[data-v-41038052]{background:#ffa602;background:linear-gradient(90deg,#ffa602,#f1d335)}.bar-box .bar.c3[data-v-41038052]{background:#01d078;background:linear-gradient(90deg,#01d078,#63cea2)}.bar-box .bar.c4[data-v-41038052]{background:#8c89c2;background:linear-gradient(90deg,#8c89c2,#afb5f3)}.bar-box .bar.c5[data-v-41038052]{background:#afb5f3;background:linear-gradient(90deg,#afb5f3,#9eb9ff)}",""]),t.exports=c},805:function(t,e,n){"use strict";n.r(e);n(161),n(47);var c={props:{index:{type:Number,default:0},score:{type:Number,default:.5},size:{type:String,default:""}},data:function(){return{start:!1}},computed:{width:function(){if(this.score<=2.5)return 25;var t=this.score/5*100;return t>25?t:25}},mounted:function(){var t=this;setTimeout((function(){t.start=!0}),50)}},l=(n(800),n(45)),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bar-box",class:t.size},[n("div",{staticClass:"bar",class:"c"+t.index,style:t.start?"width:"+t.width+"%":0})])}),[],!1,null,"41038052",null);e.default=component.exports},825:function(t,e,n){"use strict";n.r(e);n(161);var c=n(805),l=n(774),d={name:"Reviews",components:{bar:c.default,Star:l.default},props:{productDetailObj:{type:Object,default:function(){return{}}},tabsList:{type:Array,default:function(){return[]}},analysisDimensionId:{type:String,default:function(){return null}},reviewsList:{type:Array,default:function(){return[]}},disadvantageReviews:{type:Array,default:function(){return[]}},advantageReviews:{type:Array,default:function(){return[]}},currentPage:{type:Number,default:function(){return 1}},totalPage:{type:Number,default:function(){return 1}},advantageReviewsTotalPage:{type:Number,default:function(){return 1}},disadvantageReviewsTotalPage:{type:Number,default:function(){return 1}},advantageReviewsCurPage:{type:Number,default:function(){return 1}},disadvantageReviewsCurPage:{type:Number,default:function(){return 1}}},data:function(){return{allReviewsShow:!0,partReviewsShow:!1,advantageLen:0,disadvantageLen:0}},computed:{totalReviews:function(){return this.advantageLen+this.disadvantageLen}},methods:{contact:function(){this.$emit("formHandleShow")},changeTags:function(t){this.allReviewsShow=!1,this.partReviewsShow=!0,this.advantageLen=parseInt(t.advantagenum),this.disadvantageLen=parseInt(t.disadvantagenum),this.$emit("changeTags",t)},handleGetAllReview:function(){this.allReviewsShow||(this.allReviewsShow=!0,this.partReviewsShow=!1,this.$emit("handleGetAllReview"))},handleMoreReviews:function(){this.$emit("handleMoreReviews")},navigateToDetail:function(t){var e=this.$router.push({name:"reviewDetail-id",params:{id:t}});window.open(e.href,"_blank")},getMoreAdvantage:function(){this.$emit("getMoreAdvantage")},getMoreDisadvantage:function(){this.$emit("getMoreDisadvantage")}}},r=n(45),component=Object(r.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"panel"},[n("a-row",[n("a-col",{attrs:{lg:12,md:12,sm:24}},[n("h3",{staticClass:"title"},[t._v("\n        共"+t._s(t.productDetailObj.productKbObj.dpnum)+"条评论\n      ")]),t._v(" "),n("div",{staticClass:"content"},t._l(t.productDetailObj.reviewArr,(function(e,c){return n("div",{key:c,staticClass:"item g-flex"},[n("div",{staticClass:"col col-1 "},[n("span",{staticClass:"spe"},[t._v(t._s(e.branchnum))]),t._v("人认为\n          ")]),t._v(" "),n("div",{staticClass:"col col-2"},[t._v("\n            "+t._s(e.levelTxt)+"\n          ")]),t._v(" "),n("div",{staticClass:"col col-3"},[n("Star",{attrs:{"out-width":100,"out-height":20,decimal:(5-c)/5}})],1)])})),0)]),t._v(" "),n("a-col",{attrs:{lg:12,md:12,sm:24}},[n("h3",{staticClass:"title"},[t._v("\n        【专项指标评分】\n      ")]),t._v(" "),n("div",{staticClass:"content earmarked"},t._l(t.productDetailObj.earmarked,(function(e,c){return n("div",{key:c,staticClass:"item g-flex"},[n("div",{staticClass:"col col-1",staticStyle:{width:"160px"}},[t._v("\n            "+t._s(e.text)+"\n          ")]),t._v(" "),n("div",{staticClass:"col col-4"},[n("bar",{attrs:{score:e.levelAvgNum,index:c+1}})],1),t._v(" "),n("div",{staticClass:"col col-3"},[t._v("\n            "+t._s(e.levelAvgNum)+"分\n          ")])])})),0)])],1),t._v(" "),n("a-row",[n("a-col",[n("div",{staticClass:"tops-list"},[n("span",{staticClass:"tops-item",class:null===t.analysisDimensionId?"on":"",staticStyle:{"margin-right":"0"},on:{click:t.handleGetAllReview}},[t._v("全部点评")]),t._v(" "),t._l(t.tabsList,(function(e){return n("span",{key:e.id,staticClass:"tops-item",class:e.dimension_id===t.analysisDimensionId?"on":"",on:{click:function(n){return t.changeTags(e)}}},[t._v(t._s(e.title)+"("+t._s(e.num)+")")])}))],2),t._v(" "),t.allReviewsShow?n("div",{staticClass:"comment-list"},[t._l(t.reviewsList,(function(e,c){return n("div",{key:c,staticClass:"comment-item",on:{click:function(n){return t.navigateToDetail(e.scoreid)}}},[n("div",{staticClass:"comment-info"},[n("div",{staticClass:"g-flex"},[n("div",{staticClass:"head-img"},[n("img",{attrs:{src:e.userheadimages,alt:"",width:"100%"}})]),t._v(" "),n("div",{staticClass:"info"},[n("div",{staticClass:"name"},[t._v("\n                  "+t._s(e.realname)+"\n                ")]),t._v(" "),n("div",{staticClass:"title"},[t._v("\n                  "+t._s(e.company)+" "+t._s(e.office)+"\n                ")]),t._v(" "),n("div",{staticClass:"count g-flex"},[n("span",[t._v(t._s(e.ztgsnum)+"分")]),t._v(" "),n("Star",{attrs:{"out-width":100,"out-height":20,decimal:e.ztgsnum/5}})],1)])]),t._v(" "),n("div",{staticClass:"publish-time"},[t._v("\n              "+t._s(e.operaTime)+"\n            ")])]),t._v(" "),n("div",{staticClass:"comment-content"},[n("p",[t._v("【优点】"+t._s(e.advantages))]),t._v(" "),n("p",[t._v("【缺点】"+t._s(e.disadvantages))]),t._v(" "),n("div",{staticClass:"note text-c"},[t._v("\n              进入点评详情页\n            ")])]),t._v(" "),n("div",{staticClass:"g-flex icon-list-wrap"},[n("div",{staticClass:"icon-item"},[n("a-icon",{attrs:{type:"message"}}),t._v(t._s(e.commentnum)+"\n            ")],1),t._v(" "),n("div",{staticClass:"icon-item"},[n("a-icon",{attrs:{type:"like"}}),t._v(t._s(e.praisenum)+"\n            ")],1)])])})),t._v(" "),t.currentPage<t.totalPage?n("div",{staticClass:"getMoreBtn g-flex center pad-40",on:{click:t.handleMoreReviews}},[n("span",{staticClass:"check-comment"},[t._v("查看更多的评价")])]):n("div",{staticClass:"noMore pad-10",staticStyle:{"text-align":"center"}},[t._v("\n          没有更多评价了~\n        ")])],2):t._e(),t._v(" "),t.partReviewsShow?n("div",{staticClass:"comment-list"},[n("div",{staticClass:"vs-wrap"},[n("div",{staticClass:"round good"},[t._v("\n            好\n          ")]),t._v(" "),n("div",{staticClass:"number-bar"},[n("div",{staticClass:"t-box"},[n("span",{staticClass:"pros"},[t._v(t._s(t.advantageLen)+"人认为")]),t._v(" "),n("span",{staticClass:"cons"},[t._v(t._s(t.disadvantageLen)+"人认为")])]),t._v(" "),n("div",{staticClass:"b-box"},[n("div",{staticClass:"bar pros",style:{width:t.advantageLen/t.totalReviews*100+"%"}}),t._v(" "),n("div",{staticClass:"bar cons",style:{width:t.disadvantageLen/t.totalReviews*100+"%"}})]),t._v(" "),n("div",{staticStyle:{"text-align":"center"}},[t._v("\n              共"+t._s(t.totalReviews)+"条点评\n            ")])]),t._v(" "),n("div",{staticClass:"round bad"},[t._v("\n            不好\n          ")])]),t._v(" "),0!==t.advantageLen?n("div",{staticClass:"advantage-wrap"},[n("div",{staticClass:"area-title"},[t._v("\n            "+t._s(t.advantageLen)+"人说好，他们这么说\n          ")]),t._v(" "),n("div",{staticClass:"advantage-list-wrap"},t._l(t.advantageReviews,(function(e,c){return n("div",{key:c,staticClass:"comment-item"},[n("div",{staticClass:"comment-info"},[n("div",{staticClass:"g-flex"},[n("div",{staticClass:"head-img"},[n("img",{attrs:{src:e.userheadimages,alt:"",width:"100%"}})]),t._v(" "),n("div",{staticClass:"info"},[n("div",{staticClass:"name"},[t._v("\n                      "+t._s(e.realname)+"\n                    ")]),t._v(" "),n("div",{staticClass:"title"},[t._v("\n                      "+t._s(e.company)+" "+t._s(e.office)+"\n                    ")]),t._v(" "),n("div",{staticClass:"count g-flex"},[n("span",[t._v(t._s(e.ztgsnum)+"分")]),t._v(" "),n("Star",{attrs:{"out-width":100,"out-height":20,decimal:e.ztgsnum/5}})],1)])]),t._v(" "),n("div",{staticClass:"publish-time"},[t._v("\n                  "+t._s(e.operaTime)+"\n                ")])]),t._v(" "),n("div",{staticClass:"comment-content"},[n("p",[t._v(t._s(e.advantages))])]),t._v(" "),n("div",{staticClass:"g-flex icon-list-wrap"},[n("div",{staticClass:"icon-item"},[n("a-icon",{attrs:{type:"message"}}),t._v(t._s(e.commentnum)+"\n                ")],1),t._v(" "),n("div",{staticClass:"icon-item"},[n("a-icon",{attrs:{type:"like"}}),t._v(t._s(e.praisenum)+"\n                ")],1)])])})),0),t._v(" "),t.advantageReviewsCurPage<t.advantageReviewsTotalPage?n("div",{staticClass:"getMoreBtn g-flex center pad-40",on:{click:t.getMoreAdvantage}},[n("span",{staticClass:"check-comment"},[t._v("查看更多评价")])]):n("div",{staticClass:"noMore text-c pad-10"},[t._v("\n            没有更多评价了~\n          ")])]):t._e(),t._v(" "),0!==t.disadvantageLen?n("div",{staticClass:"disadvantage-wrap"},[n("div",{staticClass:"area-title"},[t._v("\n            "+t._s(t.disadvantageLen)+"人说不好，他们这么说\n          ")]),t._v(" "),n("div",{staticClass:"disadvantage-list-wrap"},t._l(t.disadvantageReviews,(function(e,c){return n("div",{key:c,staticClass:"comment-item"},[n("div",{staticClass:"comment-info"},[n("div",{staticClass:"g-flex"},[n("div",{staticClass:"head-img"},[n("img",{attrs:{src:e.userheadimages,alt:"",width:"100%"}})]),t._v(" "),n("div",{staticClass:"info"},[n("div",{staticClass:"name"},[t._v("\n                      "+t._s(e.realname)+"\n                    ")]),t._v(" "),n("div",{staticClass:"title"},[t._v("\n                      "+t._s(e.company)+" "+t._s(e.office)+"\n                    ")]),t._v(" "),n("div",{staticClass:"count g-flex"},[n("span",[t._v(t._s(e.ztgsnum)+"分")]),t._v(" "),n("Star",{attrs:{"out-width":100,"out-height":20,decimal:e.ztgsnum/5}})],1)])]),t._v(" "),n("div",{staticClass:"publish-time"},[t._v("\n                  "+t._s(e.operaTime)+"\n                ")])]),t._v(" "),n("div",{staticClass:"comment-content"},[n("p",[t._v(t._s(e.disadvantages))])]),t._v(" "),n("div",{staticClass:"g-flex icon-list-wrap"},[n("div",{staticClass:"icon-item"},[n("a-icon",{attrs:{type:"message"}}),t._v(t._s(e.commentnum)+"\n                ")],1),t._v(" "),n("div",{staticClass:"icon-item"},[n("a-icon",{attrs:{type:"like"}}),t._v(t._s(e.praisenum)+"\n                ")],1)])])})),0),t._v(" "),t.disadvantageReviewsCurPage<t.disadvantageReviewsTotalPage?n("div",{staticClass:"getMoreBtn g-flex center pad-40",on:{click:t.getMoreDisadvantage}},[n("span",{staticClass:"check-comment"},[t._v("查看更多评价")])]):n("div",{staticClass:"noMore text-c pad-10"},[t._v("\n            没有更多评价了~\n          ")])]):t._e()]):t._e()]),t._v(" "),n("a-col",{staticClass:"display-pc"},[n("div",{staticClass:"contact-btn",on:{click:t.contact}},[t._v("\n        请厂商联系我\n      ")])])],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);