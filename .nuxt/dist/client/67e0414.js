(window.webpackJsonp=window.webpackJsonp||[]).push([[24,5,10],{1232:function(t,e,n){"use strict";var c=n(26),o=n(21),r=n(203),d=n(37),l=n(29),v=n(91),m=n(653),f=n(142),h=n(23),_=n(144),w=n(143).f,x=n(64).f,C=n(36).f,y=n(654).trim,A="Number",k=o.Number,R=k.prototype,N=v(_(R))==A,S=function(t){var e,n,c,o,r,d,l,code,v=f(t,!1);if("string"==typeof v&&v.length>2)if(43===(e=(v=y(v)).charCodeAt(0))||45===e){if(88===(n=v.charCodeAt(2))||120===n)return NaN}else if(48===e){switch(v.charCodeAt(1)){case 66:case 98:c=2,o=49;break;case 79:case 111:c=8,o=55;break;default:return+v}for(d=(r=v.slice(2)).length,l=0;l<d;l++)if((code=r.charCodeAt(l))<48||code>o)return NaN;return parseInt(r,c)}return+v};if(r(A,!k(" 0o1")||!k("0b1")||k("+0x1"))){for(var I,E=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof E&&(N?h((function(){R.valueOf.call(n)})):v(n)!=A)?m(new k(S(e)),n,E):S(e)},O=c?w(k):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),L=0;O.length>L;L++)l(k,I=O[L])&&!l(E,I)&&C(E,I,x(k,I));E.prototype=R,R.constructor=E,d(o,A,E)}},1233:function(t,e,n){var content=n(1240);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(78).default)("4d15eb30",content,!0,{sourceMap:!1})},1235:function(t,e,n){"use strict";n.r(e);n(1232);var c={name:"StarZoom",props:{outWidth:{type:Number,default:function(){return 0}},outHeight:{type:Number,default:function(){return 0}},decimal:{type:Number,default:function(){return 0}}},computed:{innerWidth:function(){return this.decimal*this.outWidth}}},o=(n(1239),n(35)),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"star-wrap"}},[n("div",{staticClass:"star-default",style:{width:t.outWidth+"px",height:t.outHeight+"px"}},[n("div",{staticClass:"star-real",style:{width:t.innerWidth+"px",height:t.outHeight+"px"}})])])}),[],!1,null,"59cc2748",null);e.default=component.exports},1239:function(t,e,n){"use strict";n(1233)},1240:function(t,e,n){var c=n(77),o=n(301),r=n(1241),d=n(1242),l=c(!1),v=o(r),m=o(d);l.push([t.i,".star-default[data-v-59cc2748]{width:100px;height:20px;background:url("+v+");background-size:contain}.star-real[data-v-59cc2748]{width:80px;height:20px;background:url("+m+");background-size:contain}",""]),t.exports=l},1241:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAB0klEQVQ4T52UsWsTURzHv793F2kduoS8d0kWbzGB4FYHcYogOAhaHBxEEDfbP6BFV1Hprri5OAlSBUEQJIs46OYSW6EOIZf3S7ipQ9qmeT+5kh5JaMLVt929z/fDe7/f744wZ8VxvDQYDL6LCHzfv1IoFPZm4TRP1O12N5xzzxOGiNaNMZtnFrVarcVcLvcXgBmFbb/fD8Mw3D9NNvNEzLwqIi/HQ0T0yBjzOrOo0Wj41Wr1DxFdmArtNpvNSr1eP5qWkYgoa21VKXXROVcBUCGiSwCWZ9TjJ4BfIrJDRNu+72/n8/kdstZ+BXBtXtEz7DUSEQPQGeB5CFOv16sPh8NPAM7/j0xE+kR087hr7Xb7uud5HwEsnkUmIvvOuVvlcvlL2v4oim4opbYALGSRiciB53krWuvPxwM7Hup0Og+I6E0WkVLqodY6ZSdEURTdU0q9zSJyzt0vlUopOyGy1j4F8CSLCMCzIAhSdlqU1Oh2RtGHIAhWTtgJETP/FpFkusfXj1EtL4+/TCa7WCymbCpKPhVmPgDgjwK7AB4bY94lz8x8N7kOgHD0WznSWi8Q0fC0rr0noqsAXsRx/KpWqx1OneIcM68B2CCib8aYOyf7/wBiu6siH+XLgQAAAABJRU5ErkJggg=="},1242:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAB3ElEQVQ4T52TsWsTcRTHP+9nWhoHkUtqV7MYoXRTSns3tILgIGiFyw1FEDf1D7DoKlXclW4uLrkgVREEQQyYi6CbKNgIdXBJ2gsICm013pOE9mxim179bT/e5/fhy3vvJ/Q5zdnxQ9oaqLYRXdOJ4afB991w6ScKPXsO5HabMSrXLf/13X2LvroT6bQxX0BGOomg/qORyuXK5fWdZLsmCj3nKnBv+yOjesXyg4XEIp2aSjVHfn0GObr9kcLyh0YqP10ut3plomDq7vjxARk8BppHyANjwImd+6HvFN6Lag1hiZYuZcbe1CQs2C8ROdWv6XvVVPWVhAWngXBkL7h/XRuyWrCnBZ4hcvB/ZAprEkVnO1NruvZpNfIESO9HprBuiM5litUX8fhXXOeMMSwCQ0lkqmwcEJ2xisHzNt+1Ryvu5CVjzIMkIoHLmWIlZrtEq549K8jDJCI0upj1qzHbJQo95xZwM5lI57N+ELPdiQrOogjnE4ngcbZYmdliexN9gs5m/z3CW1QF5GTPd6kNFysxG4vaX6VZcDYQUptTWCbSG1Yp8Nv30Jv0UDMvQm6z3rKiypCU+P3P1ELPeaSobeBOPfp2f7T08WdXCnd0MJTD1wTmgCDrBxe26n8Ah+yh8Twu8rAAAAAASUVORK5CYII="},1268:function(t,e,n){var content=n(1280);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(78).default)("e2592f90",content,!0,{sourceMap:!1})},1279:function(t,e,n){"use strict";n(1268)},1280:function(t,e,n){var c=n(77)(!1);c.push([t.i,".bar-box[data-v-41038052]{width:100%;max-width:50vw;background-color:#e6e6e6;height:15px;border-radius:20px;overflow:hidden}.bar-box.small[data-v-41038052]{max-width:140px}.bar-box .bar[data-v-41038052]{height:15px;width:0;border-radius:20px;transition:width .8s ease-in-out;padding:0 10px}.bar-box .bar.c1[data-v-41038052]{background:#ff4a49;background:linear-gradient(90deg,#ff4a49,#fc8450)}.bar-box .bar.c2[data-v-41038052]{background:#ffa602;background:linear-gradient(90deg,#ffa602,#f1d335)}.bar-box .bar.c3[data-v-41038052]{background:#01d078;background:linear-gradient(90deg,#01d078,#63cea2)}.bar-box .bar.c4[data-v-41038052]{background:#8c89c2;background:linear-gradient(90deg,#8c89c2,#afb5f3)}.bar-box .bar.c5[data-v-41038052]{background:#afb5f3;background:linear-gradient(90deg,#afb5f3,#9eb9ff)}",""]),t.exports=c},1285:function(t,e,n){"use strict";n.r(e);n(1232),n(115);var c={props:{index:{type:Number,default:0},score:{type:Number,default:.5},size:{type:String,default:""}},data:function(){return{start:!1}},computed:{width:function(){if(this.score<=2.5)return 25;var t=this.score/5*100;return t>25?t:25}},mounted:function(){var t=this;setTimeout((function(){t.start=!0}),50)}},o=(n(1279),n(35)),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bar-box",class:t.size},[n("div",{staticClass:"bar",class:"c"+t.index,style:t.start?"width:"+t.width+"%":0})])}),[],!1,null,"41038052",null);e.default=component.exports},1311:function(t,e,n){var content=n(1342);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(78).default)("22cc5214",content,!0,{sourceMap:!1})},1341:function(t,e,n){"use strict";n(1311)},1342:function(t,e,n){var c=n(77)(!1);c.push([t.i,'.advantage-list-wrap[data-v-27ce574c]{padding:20px;background-color:#fef8f8;border-radius:4px}.disadvantage-list-wrap[data-v-27ce574c]{padding:20px;background-color:#f9fafe;border-radius:4px}.getMoreBtn[data-v-27ce574c]{padding:40px}.getMoreBtn .check-comment[data-v-27ce574c]{background-color:#007dff;color:#fff;cursor:pointer}.noMore[data-v-27ce574c]{padding:10px}.area-title[data-v-27ce574c]{border-bottom:2px solid #000;text-align:center;font-weight:700;padding:8px 6px;font-size:14px;position:relative}.advantage-wrap .area-title[data-v-27ce574c]{color:#ff0034;border-color:#ff0034}.advantage-wrap .area-title[data-v-27ce574c]:after{content:"";display:block;width:0;height:0;position:absolute;border:10px solid transparent;border-top-color:#ff0034;left:50%;bottom:-58%;transform:scaleX(.6) translate(-50%)}.disadvantage-wrap .area-title[data-v-27ce574c]{color:#3777ff;border-color:#3777ff}.disadvantage-wrap .area-title[data-v-27ce574c]:after{content:"";display:block;width:0;height:0;position:absolute;border:10px solid transparent;border-top-color:#3777ff;left:50%;bottom:-58%;transform:scaleX(.6) translate(-50%)}.vs-wrap[data-v-27ce574c]{margin:30px 0}.vs-wrap[data-v-27ce574c],.vs-wrap .round[data-v-27ce574c]{display:flex;justify-content:center}.vs-wrap .round[data-v-27ce574c]{color:#fff;width:70px;height:70px;border-radius:50%;font-size:20px;align-items:center}.vs-wrap .round.good[data-v-27ce574c]{background-color:#ff0034;border:6px solid #ff6c75}.vs-wrap .round.bad[data-v-27ce574c]{background-color:#3777ff;border:6px solid #86aeff}.vs-wrap .number-bar[data-v-27ce574c]{width:50%}.vs-wrap .number-bar .t-box[data-v-27ce574c]{display:flex;justify-content:space-between;align-items:center}.vs-wrap .number-bar .t-box span[data-v-27ce574c]{font-size:16px}.vs-wrap .number-bar .t-box span.cons[data-v-27ce574c]{color:#3777ff}.vs-wrap .number-bar .t-box span.pros[data-v-27ce574c]{color:#ff0034}.vs-wrap .number-bar .b-box[data-v-27ce574c]{width:100%;white-space:nowrap}.vs-wrap .number-bar .b-box .bar[data-v-27ce574c]{display:inline-block;height:10px;box-sizing:border-box}.vs-wrap .number-bar .b-box .bar.pros[data-v-27ce574c]{background-color:#ff0034}.vs-wrap .number-bar .b-box .bar.cons[data-v-27ce574c]{background-color:#3777ff}.content .item[data-v-27ce574c]{margin-bottom:16px}.content .item .col-1[data-v-27ce574c]{width:74px;text-align:right}.content .item .col-2[data-v-27ce574c]{width:66px;text-align:center;font-weight:700}.content .item .col-3[data-v-27ce574c]{width:146px}.content .item .col-4[data-v-27ce574c]{width:310px;margin:4px 20px}.tops-list .tops-item[data-v-27ce574c]{font-size:13px;color:#007dff;border:1px solid #007dff;padding:4px 8px;border-radius:4px;display:inline-block;margin-bottom:8px;margin-right:4px;cursor:pointer}.tops-list .tops-item.on[data-v-27ce574c]{background-color:#007dff;color:#fff}.comment-list .comment-item[data-v-27ce574c]{margin:20px 0;cursor:pointer}.comment-list .comment-item .note[data-v-27ce574c]{padding:10px 0}.comment-list .comment-item .note[data-v-27ce574c]:hover{text-decoration:underline}.comment-list .comment-item .comment-info[data-v-27ce574c]{display:flex;flex-direction:row;justify-content:space-between;margin-bottom:10px}.comment-list .comment-item .comment-info .head-img[data-v-27ce574c]{width:80px;height:80px}.comment-list .comment-item .comment-info .info[data-v-27ce574c]{margin-left:20px}.comment-list .comment-item .comment-info .info .name[data-v-27ce574c]{font-size:20px;font-weight:700}.comment-list .comment-item .comment-info .info .title[data-v-27ce574c]{font-size:14px;margin:4px 0}.comment-list .comment-item .icon-list-wrap[data-v-27ce574c]{padding:10px 0;border-bottom:1px solid #cacaca}.comment-list .comment-item .icon-list-wrap .icon-item[data-v-27ce574c]{padding-left:10px;padding-right:40px}.comment-list .comment-item .icon-list-wrap .icon-item i[data-v-27ce574c]{margin-right:10px}',""]),t.exports=c},1376:function(t,e,n){"use strict";n.r(e);n(1232);var c=n(1285),o=n(1235),r={name:"Reviews",components:{bar:c.default,Star:o.default},props:{productDetailObj:{type:Object,default:function(){return{}}},tabsList:{type:Array,default:function(){return[]}},analysisDimensionId:{type:String,default:function(){return null}},reviewsList:{type:Array,default:function(){return[]}},disadvantageReviews:{type:Array,default:function(){return[]}},advantageReviews:{type:Array,default:function(){return[]}},currentPage:{type:Number,default:function(){return 1}},totalPage:{type:Number,default:function(){return 1}},advantageReviewsTotalPage:{type:Number,default:function(){return 1}},disadvantageReviewsTotalPage:{type:Number,default:function(){return 1}},advantageReviewsCurPage:{type:Number,default:function(){return 1}},disadvantageReviewsCurPage:{type:Number,default:function(){return 1}}},data:function(){return{allReviewsShow:!0,partReviewsShow:!1,advantageLen:0,disadvantageLen:0}},computed:{totalReviews:function(){return this.advantageLen+this.disadvantageLen}},methods:{contact:function(){this.$emit("formHandleShow")},changeTags:function(t){this.allReviewsShow=!1,this.partReviewsShow=!0,this.advantageLen=parseInt(t.advantagenum),this.disadvantageLen=parseInt(t.disadvantagenum),this.$emit("changeTags",t)},handleGetAllReview:function(){this.allReviewsShow||(this.allReviewsShow=!0,this.partReviewsShow=!1,this.$emit("handleGetAllReview"))},handleMoreReviews:function(){this.$emit("handleMoreReviews")},navigateToDetail:function(t){this.$router.push({name:"reviewDetail-id",params:{id:t}})},getMoreAdvantage:function(){console.log("当前页:",this.advantageReviewsCurPage),console.log("总页数：",this.advantageReviewsTotalPage),this.$emit("getMoreAdvantage")},getMoreDisadvantage:function(){this.$emit("getMoreDisadvantage")}}},d=(n(1341),n(35)),component=Object(d.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"panel"},[n("a-row",[n("a-col",{attrs:{span:"12"}},[n("h3",{staticClass:"title"},[t._v("\n        共"+t._s(t.productDetailObj.productKbObj.dpnum)+"条评论\n      ")]),t._v(" "),n("div",{staticClass:"content"},t._l(t.productDetailObj.reviewArr,(function(e,c){return n("div",{key:c,staticClass:"item g-flex"},[n("div",{staticClass:"col col-1 "},[n("span",{staticClass:"spe"},[t._v(t._s(e.branchnum))]),t._v("人认为\n          ")]),t._v(" "),n("div",{staticClass:"col col-2"},[t._v("\n            "+t._s(e.levelTxt)+"\n          ")]),t._v(" "),n("div",{staticClass:"col col-3"},[n("Star",{attrs:{"out-width":100,"out-height":20,decimal:(5-c)/5}})],1)])})),0)]),t._v(" "),n("a-col",{attrs:{span:"12"}},[n("h3",{staticClass:"title"},[t._v("\n        【专项指标评分】\n      ")]),t._v(" "),n("div",{staticClass:"content earmarked"},t._l(t.productDetailObj.earmarked,(function(e,c){return n("div",{key:c,staticClass:"item g-flex"},[n("div",{staticClass:"col col-1",staticStyle:{width:"150px"}},[t._v("\n            "+t._s(e.text)+"\n          ")]),t._v(" "),n("div",{staticClass:"col col-4"},[n("bar",{attrs:{score:e.levelAvgNum,index:c+1}})],1),t._v(" "),n("div",{staticClass:"col col-3"},[t._v("\n            "+t._s(e.levelAvgNum)+"分\n          ")])])})),0)])],1),t._v(" "),n("a-row",[n("a-col",[n("div",{staticClass:"tops-list"},[n("span",{staticClass:"tops-item",class:null===t.analysisDimensionId?"on":"",staticStyle:{"margin-right":"0"},on:{click:t.handleGetAllReview}},[t._v("全部点评")]),t._v(" "),t._l(t.tabsList,(function(e){return n("span",{key:e.id,staticClass:"tops-item",class:e.dimension_id===t.analysisDimensionId?"on":"",on:{click:function(n){return t.changeTags(e)}}},[t._v(t._s(e.title)+"("+t._s(e.num)+")")])}))],2),t._v(" "),t.allReviewsShow?n("div",{staticClass:"comment-list"},[t._l(t.reviewsList,(function(e,c){return n("div",{key:c,staticClass:"comment-item",on:{click:function(n){return t.navigateToDetail(e.scoreid)}}},[n("div",{staticClass:"comment-info"},[n("div",{staticClass:"g-flex"},[n("div",{staticClass:"head-img"},[n("img",{attrs:{src:e.userheadimages,alt:"",width:"100%"}})]),t._v(" "),n("div",{staticClass:"info"},[n("div",{staticClass:"name"},[t._v("\n                  "+t._s(e.realname)+"\n                ")]),t._v(" "),n("div",{staticClass:"title"},[t._v("\n                  "+t._s(e.company)+" "+t._s(e.office)+"\n                ")]),t._v(" "),n("div",{staticClass:"count g-flex"},[n("span",[t._v(t._s(e.ztgsnum)+"分")]),t._v(" "),n("Star",{attrs:{"out-width":100,"out-height":20,decimal:e.ztgsnum/5}})],1)])]),t._v(" "),n("div",{staticClass:"publish-time"},[t._v("\n              "+t._s(e.operaTime)+"\n            ")])]),t._v(" "),n("div",{staticClass:"comment-content"},[n("p",[t._v("【优点】"+t._s(e.advantages))]),t._v(" "),n("p",[t._v("【缺点】"+t._s(e.disadvantages))]),t._v(" "),n("div",{staticClass:"note text-c"},[t._v("\n              进入点评详情页\n            ")])]),t._v(" "),n("div",{staticClass:"g-flex icon-list-wrap"},[n("div",{staticClass:"icon-item"},[n("a-icon",{attrs:{type:"message"}}),t._v(t._s(e.commentnum)+"\n            ")],1),t._v(" "),n("div",{staticClass:"icon-item"},[n("a-icon",{attrs:{type:"like"}}),t._v(t._s(e.praisenum)+"\n            ")],1)])])})),t._v(" "),t.currentPage<t.totalPage?n("div",{staticClass:"getMoreBtn text-c",on:{click:t.handleMoreReviews}},[n("span",{staticClass:"check-comment"},[t._v("查看更多的评价")])]):n("div",{staticClass:"noMore",staticStyle:{"text-align":"center"}},[t._v("\n          没有更多评价了~\n        ")])],2):t._e(),t._v(" "),t.partReviewsShow?n("div",{staticClass:"comment-list"},[n("div",{staticClass:"vs-wrap"},[n("div",{staticClass:"round good"},[t._v("\n            好\n          ")]),t._v(" "),n("div",{staticClass:"number-bar"},[n("div",{staticClass:"t-box"},[n("span",{staticClass:"pros"},[t._v(t._s(t.advantageLen)+"人认为")]),t._v(" "),n("span",{staticClass:"cons"},[t._v(t._s(t.disadvantageLen)+"人认为")])]),t._v(" "),n("div",{staticClass:"b-box"},[n("div",{staticClass:"bar pros",style:{width:t.advantageLen/t.totalReviews*100+"%"}}),t._v(" "),n("div",{staticClass:"bar cons",style:{width:t.disadvantageLen/t.totalReviews*100+"%"}})]),t._v(" "),n("div",{staticStyle:{"text-align":"center"}},[t._v("\n              共"+t._s(t.totalReviews)+"条点评\n            ")])]),t._v(" "),n("div",{staticClass:"round bad"},[t._v("\n            不好\n          ")])]),t._v(" "),0!==t.advantageLen?n("div",{staticClass:"advantage-wrap"},[n("div",{staticClass:"area-title"},[t._v("\n            "+t._s(t.advantageLen)+"人说好，他们这么说\n          ")]),t._v(" "),n("div",{staticClass:"advantage-list-wrap"},t._l(t.advantageReviews,(function(e,c){return n("div",{key:c,staticClass:"comment-item"},[n("div",{staticClass:"comment-info"},[n("div",{staticClass:"g-flex"},[n("div",{staticClass:"head-img"},[n("img",{attrs:{src:e.userheadimages,alt:"",width:"100%"}})]),t._v(" "),n("div",{staticClass:"info"},[n("div",{staticClass:"name"},[t._v("\n                      "+t._s(e.realname)+"\n                    ")]),t._v(" "),n("div",{staticClass:"title"},[t._v("\n                      "+t._s(e.company)+" "+t._s(e.office)+"\n                    ")]),t._v(" "),n("div",{staticClass:"count g-flex"},[n("span",[t._v(t._s(e.ztgsnum)+"分")]),t._v(" "),n("Star",{attrs:{"out-width":100,"out-height":20,decimal:e.ztgsnum/5}})],1)])]),t._v(" "),n("div",{staticClass:"publish-time"},[t._v("\n                  "+t._s(e.operaTime)+"\n                ")])]),t._v(" "),n("div",{staticClass:"comment-content"},[n("p",[t._v(t._s(e.advantages))])]),t._v(" "),n("div",{staticClass:"g-flex icon-list-wrap"},[n("div",{staticClass:"icon-item"},[n("a-icon",{attrs:{type:"message"}}),t._v(t._s(e.commentnum)+"\n                ")],1),t._v(" "),n("div",{staticClass:"icon-item"},[n("a-icon",{attrs:{type:"like"}}),t._v(t._s(e.praisenum)+"\n                ")],1)])])})),0),t._v(" "),t.advantageReviewsCurPage<t.advantageReviewsTotalPage?n("div",{staticClass:"getMoreBtn text-c",on:{click:t.getMoreAdvantage}},[n("span",{staticClass:"check-comment"},[t._v("查看更多评价")])]):n("div",{staticClass:"noMore text-c"},[t._v("\n            没有更多评价了~\n          ")])]):t._e(),t._v(" "),0!==t.disadvantageLen?n("div",{staticClass:"disadvantage-wrap"},[n("div",{staticClass:"area-title"},[t._v("\n            "+t._s(t.disadvantageLen)+"人说不好，他们这么说\n          ")]),t._v(" "),n("div",{staticClass:"disadvantage-list-wrap"},t._l(t.disadvantageReviews,(function(e,c){return n("div",{key:c,staticClass:"comment-item"},[n("div",{staticClass:"comment-info"},[n("div",{staticClass:"g-flex"},[n("div",{staticClass:"head-img"},[n("img",{attrs:{src:e.userheadimages,alt:"",width:"100%"}})]),t._v(" "),n("div",{staticClass:"info"},[n("div",{staticClass:"name"},[t._v("\n                      "+t._s(e.realname)+"\n                    ")]),t._v(" "),n("div",{staticClass:"title"},[t._v("\n                      "+t._s(e.company)+" "+t._s(e.office)+"\n                    ")]),t._v(" "),n("div",{staticClass:"count g-flex"},[n("span",[t._v(t._s(e.ztgsnum)+"分")]),t._v(" "),n("Star",{attrs:{"out-width":100,"out-height":20,decimal:e.ztgsnum/5}})],1)])]),t._v(" "),n("div",{staticClass:"publish-time"},[t._v("\n                  "+t._s(e.operaTime)+"\n                ")])]),t._v(" "),n("div",{staticClass:"comment-content"},[n("p",[t._v(t._s(e.disadvantages))])]),t._v(" "),n("div",{staticClass:"g-flex icon-list-wrap"},[n("div",{staticClass:"icon-item"},[n("a-icon",{attrs:{type:"message"}}),t._v(t._s(e.commentnum)+"\n                ")],1),t._v(" "),n("div",{staticClass:"icon-item"},[n("a-icon",{attrs:{type:"like"}}),t._v(t._s(e.praisenum)+"\n                ")],1)])])})),0),t._v(" "),t.disadvantageReviewsCurPage<t.disadvantageReviewsTotalPage?n("div",{staticClass:"getMoreBtn text-c",on:{click:t.getMoreDisadvantage}},[n("span",{staticClass:"check-comment"},[t._v("查看更多评价")])]):n("div",{staticClass:"noMore text-c"},[t._v("\n            没有更多评价了~\n          ")])]):t._e()]):t._e()]),t._v(" "),n("a-col",[n("div",{staticClass:"contact-btn",on:{click:t.contact}},[t._v("\n        请厂商联系我\n      ")])])],1)],1)}),[],!1,null,"27ce574c",null);e.default=component.exports}}]);