(window.webpackJsonp=window.webpackJsonp||[]).push([[38,11,14,20,21,25,29],{792:function(t,e,r){var content=r(795);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(36).default)("b70710a8",content,!0,{sourceMap:!1})},793:function(t,e,r){"use strict";r.r(e);var n={},o=r(46),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"no-data-wrap"},[r("div",{staticClass:"txt-wrap"},[t._t("txt")],2)])}),[],!1,null,null,null);e.default=component.exports},794:function(t,e,r){"use strict";r(792)},795:function(t,e,r){var n=r(35)(!1);n.push([t.i,".view[data-v-9eb1fe9e]{width:100%;display:flex;justify-content:flex-start}.view .range[data-v-9eb1fe9e]{width:10%;position:relative;color:#fff;background-color:#92b2f1}.view .range span[data-v-9eb1fe9e]{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%)}.view.c1 .range[data-v-9eb1fe9e]{background-color:#f55b53}.view.c1 .score-box[data-v-9eb1fe9e]{background-color:#f55c53!important}.view.c2 .range[data-v-9eb1fe9e]{background-color:#f2ab38}.view.c2 .score-box[data-v-9eb1fe9e]{background-color:#f2ab38!important}.view.c3 .range[data-v-9eb1fe9e]{background-color:#5fcd81}.view.c3 .score-box[data-v-9eb1fe9e]{background-color:#5fcd81!important}.view .info[data-v-9eb1fe9e]{width:90%;padding:10px 20px}.view .info .title[data-v-9eb1fe9e]{font-size:17px;font-weight:700;margin-bottom:10px}.view .info .comment[data-v-9eb1fe9e]{color:#555}.view .info .score[data-v-9eb1fe9e]{display:flex;flex-direction:row;justify-content:space-between}.view .info .score .score-box[data-v-9eb1fe9e]{background-color:#90b2f1;color:#fff;padding:2px 4px;border-radius:4px}.view .info .bar-box[data-v-9eb1fe9e]{width:218px;height:13px;margin:10px 0;background-color:#e6e6e6;border-radius:50px}.view .info .bar-box .bar[data-v-9eb1fe9e]{height:13px;display:flex;justify-content:space-between;align-items:center;width:0;box-sizing:border-box;padding:0 10px;border-radius:50px;transition:width .8s ease-in-out}.view .info .bar-box .bar.s1[data-v-9eb1fe9e]{background:#f55a53;background:linear-gradient(90deg,#f55a53,#eb8a5d)}.view .info .bar-box .bar.s2[data-v-9eb1fe9e]{background:#f2a937;background:linear-gradient(90deg,#f2a937,#ebd458)}.view .info .bar-box .bar.s3[data-v-9eb1fe9e]{background:#5ecd80;background:linear-gradient(90deg,#5ecd80,#80cca5)}.view .info .bar-box .bar.s4[data-v-9eb1fe9e]{background:#37a2f1;background:linear-gradient(90deg,#8fb1f0,#a3baf9)}",""]),t.exports=n},797:function(t,e,r){"use strict";r.r(e);var n={},o=r(46),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("a-row",[r("a-col",[r("div",{staticClass:"g-wrapper breadcrumb"},[r("a-breadcrumb",[t._t("default")],2)],1)])],1)}),[],!1,null,null,null);e.default=component.exports},798:function(t,e,r){"use strict";r.r(e);var n=r(46),component=Object(n.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"slider-wrap"},[t._t("report-txt"),t._v(" "),r("div",[r("h2",{staticClass:"slider-title"},[t._t("slider-title")],2),t._v(" "),r("div",[t._t("slider-nav-bar")],2)])],2)}),[],!1,null,null,null);e.default=component.exports},801:function(t,e,r){"use strict";r.r(e);r(161);var n={props:{index:{type:Number,default:function(){return 0}},item:{type:Object,default:function(){return null}},categoryId:{type:String,default:function(){return""}}}},o=(r(794),r(46)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"view",class:t.index<3?"c"+(t.index+1):"c4"},[r("div",{staticClass:"range"},[r("span",[t._v("\n      "+t._s(t.index+1)+"\n    ")])]),t._v(" "),r("div",{staticClass:"info"},[r("div",{staticClass:"title"},[r("nuxt-link",{staticClass:"link",attrs:{target:"_blank",to:{name:"reputation-id",params:{id:t.categoryId},query:{factory_id:t.item.qcid}}}},[t._v("\n        "+t._s(t.item.factory_short_name)+"\n      ")])],1),t._v(" "),r("div",{staticClass:"score"},[r("div",{staticClass:"score-box"},[t._v("\n        "+t._s(t.item.avgNum)+"分\n      ")]),t._v(" "),r("nuxt-link",{staticClass:"comment",attrs:{target:"_blank",to:{name:"reputation-id",params:{id:t.categoryId},query:{factory_id:t.item.qcid}}}},[r("span",[t._v("\n          "+t._s(t.item.dpnum)+"条\n        ")]),t._v(" "),r("span",[t._v("\n          有价值点评\n        ")])])],1),t._v(" "),r("div",{staticClass:"bar-box"},[r("div",{staticClass:"bar",class:t.index<3?"s"+(t.index+1):"s4",staticStyle:{width:"50%"}})])])])}),[],!1,null,"9eb1fe9e",null);e.default=component.exports},803:function(t,e,r){"use strict";r.r(e);var n={props:{formShow:{type:Boolean,default:function(){return!0}}},beforeCreate:function(){this.form=this.$form.createForm(this,{name:"register"})},methods:{handleSubmit:function(t){var e=this;t.preventDefault(),this.form.validateFieldsAndScroll((function(t,r){if(!t){var data={};data.REALNAME=r.nickname||"",data.NICKNAME=r.nickname||"",data.COMPANY=r.company||"",data.POSITION=r.title||"",data.USER_EMAIL=r.email||"",data.PHONE=r.phone||"",e.$emit("submit",data)}}))},close:function(){this.$emit("formHide")},clear:function(){this.form.resetFields()}}},o=r(46),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{directives:[{name:"show",rawName:"v-show",value:t.formShow,expression:"formShow"}],staticClass:"contact-wrap"},[r("div",{staticClass:"model"}),t._v(" "),r("div",{staticClass:"form"},[r("div",{staticClass:"note"},[r("div",{staticClass:"h2"},[t._v("\n        "+t._s(t.$configs.APPLY.FORM.ONE)+"\n      ")]),t._v(" "),r("div",[t._v(t._s(t.$configs.APPLY.FORM.TWO))])]),t._v(" "),r("div",{staticClass:"close-btn",on:{click:t.close}},[r("a-icon",{staticStyle:{"font-size":"24px"},attrs:{type:"close"}})],1),t._v(" "),r("a-form",{attrs:{form:t.form},on:{submit:t.handleSubmit}},[r("a-form-item",{attrs:{label:"姓名"}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["nickname",{rules:[{required:!0,min:2,max:8,message:"请按要求输入您的姓名!",whitespace:!0}]}],expression:"[\n            'nickname',\n            {\n              rules: [{ required: true, min: 2, max: 8, message: '请按要求输入您的姓名!', whitespace: true }],\n            },\n          ]"}],attrs:{placeholder:"输入2-8个汉字"}})],1),t._v(" "),r("a-form-item",{attrs:{label:"公司"}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["company",{rules:[{required:!0,message:"请填写公司!",whitespace:!0}]}],expression:"[\n            'company',\n            {\n              rules: [{ required: true, message: '请填写公司!', whitespace: true }],\n            },\n          ]"}],attrs:{placeholder:"请输入公司名称"}})],1),t._v(" "),r("a-form-item",{attrs:{label:"职位"}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["title",{rules:[{required:!0,message:"请填写职位!",whitespace:!0}]}],expression:"[\n            'title',\n            {\n              rules: [{ required: true, message: '请填写职位!', whitespace: true }],\n            },\n          ]"}],attrs:{placeholder:"请输入职位名称"}})],1),t._v(" "),r("a-form-item",{attrs:{label:"手机号"}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["phone",{rules:[{required:!0,pattern:"^[1]([3-9])[0-9]{9}$",message:"请输入合法手机号!",whitespace:!0}]}],expression:"[\n            'phone',\n            {\n              rules: [{ required: true, pattern: '^[1]([3-9])[0-9]{9}$',message: '请输入合法手机号!', whitespace: true }],\n            },\n          ]"}],attrs:{placeholder:"请输入11位手机号"}})],1),t._v(" "),r("a-form-item",{attrs:{label:"邮箱"}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["email",{rules:[{type:"email",message:"输入的邮箱无效!"},{required:!0,message:"请输入邮箱!"}]}],expression:"[\n            'email',\n            {\n              rules: [\n                {\n                  type: 'email',\n                  message: '输入的邮箱无效!',\n                },\n                {\n                  required: true,\n                  message: '请输入邮箱!',\n                },\n              ],\n            },\n          ]"}],attrs:{placeholder:"请输入有效邮箱"}})],1),t._v(" "),r("a-form-item",{staticStyle:{"text-align":"center"}},[r("a-button",{attrs:{type:"primary","html-type":"submit"}},[t._v("\n          提交\n        ")])],1)],1)],1)])}),[],!1,null,null,null);e.default=component.exports},829:function(t,e,r){"use strict";r.r(e);var n={name:"Feature"},o=r(46),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"feature"},[r("div",{staticClass:"feature-item"},[r("h3",{staticClass:"title"},[t._v("\n      总帐\n    ")]),t._v(" "),r("a-row",{staticClass:"list-wrap g-flex"},[r("a-col",{staticClass:"list-item",attrs:{span:"8"}},[r("a-icon",{attrs:{type:"check-circle",theme:"twoTone","two-tone-color":"#52c41a"}}),t._v(" "),r("span",[t._v("审计追踪")])],1),t._v(" "),r("a-col",{staticClass:"list-item",attrs:{span:"8"}},[r("a-icon",{attrs:{type:"check-circle",theme:"twoTone","two-tone-color":"#52c41a"}}),t._v(" "),r("span",[t._v("审计追踪")])],1)],1)],1),t._v(" "),r("div",{staticClass:"feature-item"},[r("h3",{staticClass:"title"},[t._v("\n      应收账款\n    ")]),t._v(" "),r("a-row",{staticClass:"list-wrap g-flex"},[r("a-col",{staticClass:"list-item",attrs:{span:"8"}},[r("a-icon",{attrs:{type:"check-circle",theme:"twoTone","two-tone-color":"#52c41a"}}),t._v(" "),r("span",[t._v("发票定制")])],1),t._v(" "),r("a-col",{staticClass:"list-item",attrs:{span:"8"}},[r("a-icon",{attrs:{type:"check-circle",theme:"twoTone","two-tone-color":"#52c41a"}}),t._v(" "),r("span",[t._v("馆藏自动化")])],1)],1)],1),t._v(" "),r("div",{staticClass:"feature-item"},[r("h3",{staticClass:"title"},[t._v("\n      平台\n    ")]),t._v(" "),r("a-row",{staticClass:"list-wrap g-flex",attrs:{justify:"start"}},[r("a-col",{staticClass:"list-item",attrs:{span:"8"}},[r("a-icon",{attrs:{type:"check-circle",theme:"twoTone","two-tone-color":"#52c41a"}}),t._v(" "),r("span",[t._v("工作流程能力")])],1),t._v(" "),r("a-col",{staticClass:"list-item",attrs:{span:"8"}},[r("a-icon",{attrs:{type:"check-circle",theme:"twoTone","two-tone-color":"#52c41a"}}),t._v(" "),r("span",[t._v("国际化")])],1),t._v(" "),r("a-col",{staticClass:"list-item",attrs:{span:"8"}},[r("a-icon",{attrs:{type:"check-circle",theme:"twoTone","two-tone-color":"#52c41a"}}),t._v(" "),r("span",[t._v("性能与可靠性")])],1),t._v(" "),r("a-col",{staticClass:"list-item",attrs:{span:"8"}},[r("a-icon",{attrs:{type:"check-circle",theme:"twoTone","two-tone-color":"#52c41a"}}),t._v(" "),r("span",[t._v("输出文件生成")])],1)],1)],1)])}),[],!1,null,null,null);e.default=component.exports},854:function(t,e,r){"use strict";r.r(e);var n=r(30),o=(r(115),r(22),r(43),r(782)),c=r(803),l=r(829),d=r(849),v=r(793),m=r(801),f=r(785),_=r(786),h=r(288),w=r(797),C=r(824),O={components:{Star:o.default,feature:l.default,reviews:d.default,contact:c.default,noData:v.default,rankListItem:m.default,rightNav:f.default,qrcode:_.default,bannerPop:h.default,breadCrumb:w.default},asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,o,c,l,d,v,m,f,_,h,w,O,x,y,R,j;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.params.id,e.next=3,t.$requests.productDetail({PRODUCT_ID:t.params.id});case 3:return n=e.sent,o={},200===n.status&&"success"===n.data.result&&(o.categoryObj=n.data.categoryObj,o.productKbObj=n.data.productKbObj,o.productObj=n.data.productObj,o.factoryRankingObj=n.data.factoryRankingObj,o.factoryQcScoreObj=n.data.factoryQcScoreObj,o.reviewArr=[],o.earmarked=[],o.reviewArr.push({level:"five",branchnum:n.data.fivebranchnum,levelTxt:"很好"}),o.reviewArr.push({level:"four",branchnum:n.data.fourbranchnum,levelTxt:"较好"}),o.reviewArr.push({level:"three",branchnum:n.data.threebranchnum,levelTxt:"一般"}),o.reviewArr.push({level:"two",branchnum:n.data.twobranchnum,levelTxt:"较差"}),o.reviewArr.push({level:"one",branchnum:n.data.onebranchnum,levelTxt:"很差"}),o.earmarked.push({text:"功能",levelAvgNum:n.data.productKbObj.functionLevelAvgNum}),o.earmarked.push({text:"性能",levelAvgNum:n.data.productKbObj.performanceLevelAvgNum}),o.earmarked.push({text:"可扩展性",levelAvgNum:n.data.productKbObj.scalabilityLevelAvgNum}),o.earmarked.push({text:"易部署性",levelAvgNum:n.data.productKbObj.deployLevelAvgNum}),o.earmarked.push({text:"使用友好性",levelAvgNum:n.data.productKbObj.friendlyLevelAvgNum})),e.next=8,t.$requests.productGetAllDimensions({PRODUCT_ID:t.params.id});case 8:return c=e.sent,l=200===c.status&&c.data.dimensions?c.data.dimensions:[],d=1,v=1,e.next=14,t.$requests.productReviews({PRODUCT_ID:r,CUR_PAGE:d,TYPE:1});case 14:return m=e.sent,f=[],200===m.status&&"success"===m.data.result&&(f=m.data.productScoreList,v=m.data.TOTAL_PAGE,f.length&&(f=f.map((function(t){return t.operaTime=Object(C.b)(t.operaTime),t})))),e.next=19,t.$requests.categoryHotCompany({ORDER_TYPE:0,CATEGORY_ID:o.categoryObj.CID});case 19:return _=e.sent,h=200===_.status&&"success"===_.data.result?_.data.factoryQcList:[],e.next=23,t.$requests.categoryChallenger({ORDER_TYPE:0,CATEGORY_ID:o.categoryObj.CID});case 23:return w=e.sent,O=200===w.status&&"success"===w.data.result?w.data.factoryQcList:[],e.next=27,t.$requests.categoryNoComment({CATEGORY_ID:o.categoryObj.CID});case 27:return x=e.sent,y=200===x.status&&"success"===x.data.result?x.data.notScoreList:[],R=[],j=[],e.abrupt("return",{productId:r,productDetailObj:o,tabsList:l,analysisDimensionId:null,reviewsList:f,advantageReviews:R,disadvantageReviews:j,curTitle:"",hotCompanyList:h,challengerList:O,noReviewList:y,formShow:!1,allReviewCurPage:d,allReviewTotalPage:v,advantageReviewsTotalPage:1,disadvantageReviewsTotalPage:1,advantageReviewsCurPage:1,disadvantageReviewsCurPage:1,bannerPopShow:!1});case 32:case"end":return e.stop()}}),e)})))()},methods:{handleBannerPopShow:function(){this.bannerPopShow=!0},handleBannerPopHide:function(){this.bannerPopShow=!1},navigateToRank:function(){var t=this.$router.resolve({name:"company-rank-id",params:{id:this.productDetailObj.categoryObj.CID}});window.open(t.href,"_blank")},getProsAnalysis:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n,o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.$requests.productProsAnalysis({PRODUCT_ID:e.productId,CUR_PAGE:e.advantageReviewsCurPage,DIMENSION_TITLE:t.title,USER_ID:"pcadmin"});case 2:n=r.sent,o=[],200===n.status&&"success"===n.data.result&&(o=n.data.pdScoreList,e.advantageReviewsTotalPage=n.data.TOTAL_PAGE,o.length&&(o=o.map((function(t){return t.operaTime=Object(C.b)(t.operaTime),t})),e.advantageReviews=o));case 5:case"end":return r.stop()}}),r)})))()},getConsAnalysis:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n,o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.$requests.productConsAnalysis({PRODUCT_ID:e.productId,CUR_PAGE:e.disadvantageReviewsCurPage,DIMENSION_TITLE:t.title,USER_ID:"pcadmin"});case 2:n=r.sent,o=[],console.log("缺点:",n),200===n.status&&"success"===n.data.result&&(o=n.data.pdScoreList,e.disadvantageReviewsTotalPage=n.data.TOTAL_PAGE,o.length&&(o=o.map((function(t){return t.operaTime=Object(C.b)(t.operaTime),t})),e.disadvantageReviews=o));case 6:case"end":return r.stop()}}),r)})))()},changeTags:function(t){this.analysisDimensionId=t.dimension_id,this.curTitle=t.title,this.advantageReviewsCurPage=1,this.disadvantageReviewsCurPage=1,this.getProsAnalysis(t),this.getConsAnalysis(t)},handleGetAllReview:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.analysisDimensionId=null,t.allReviewCurPage=1,e.next=4,t.$requests.productReviews({PRODUCT_ID:t.productId,CUR_PAGE:t.allReviewCurPage,TYPE:1});case 4:r=e.sent,n=[],200===r.status&&"success"===r.data.result&&(n=r.data.productScoreList,t.allReviewTotalPage=r.data.TOTAL_PAGE,n.length&&(t.reviewsList=n.map((function(t){return t.operaTime=Object(C.b)(t.operaTime),t}))));case 7:case"end":return e.stop()}}),e)})))()},handleMoreReviews:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t.allReviewCurPage>=t.allReviewTotalPage)){e.next=2;break}return e.abrupt("return");case 2:return t.allReviewCurPage+=1,e.next=5,t.$requests.productReviews({PRODUCT_ID:t.productId,CUR_PAGE:t.allReviewCurPage,TYPE:1});case 5:r=e.sent,n=[],200===r.status&&"success"===r.data.result&&(n=r.data.productScoreList).length&&(n=n.map((function(t){return t.operaTime=Object(C.b)(t.operaTime),t})),t.reviewsList=t.reviewsList.concat(n));case 8:case"end":return e.stop()}}),e)})))()},formHandleShow:function(){this.formShow=!0},formHandleHide:function(){this.formShow=!1},submitForm:function(data){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return data.CATEGORY_ID=t.productDetailObj.categoryObj.CID||"",data.CATEGORY_NAME=t.productDetailObj.categoryObj.CNAME||"",data.FACTORY_ID=t.productDetailObj.factoryQcScoreObj.factory_short_id||"",data.FACTORY_NAME=t.productDetailObj.factoryQcScoreObj.factory_short_name||"",data.USER_ID="",e.next=7,t.$requests.productApply(data);case 7:200===(r=e.sent).status&&"success"===r.data.result?(t.$message.success("提交成功，我们会尽快通知厂商联系您!"),t.$refs.child.clear(),t.formShow=!1):(t.$message.error("提交失败，请稍后重试!"),t.formShow=!1);case 9:case"end":return e.stop()}}),e)})))()},getMoreDisadvantage:function(){var t=this;if(this.disadvantageReviewsCurPage>=this.disadvantageReviewsTotalPage)return!1;this.disadvantageReviewsCurPage+=1,this.$requests.productConsAnalysis({PRODUCT_ID:this.productId,CUR_PAGE:this.disadvantageReviewsCurPage,DIMENSION_TITLE:this.curTitle,USER_ID:"pcadmin"}).then((function(e){if(200===e.status&&"success"===e.data.result){var r=e.data.pdScoreList;r.length&&(r=r.map((function(t){return t.operaTime=Object(C.b)(t.operaTime),t})),t.disadvantageReviews=t.disadvantageReviews.concat(r))}}))},getMoreAdvantage:function(){var t=this;if(this.advantageReviewsCurPage>=this.advantageReviewsTotalPage)return!1;this.advantageReviewsCurPage+=1,this.$requests.productProsAnalysis({PRODUCT_ID:this.productId,CUR_PAGE:this.advantageReviewsCurPage,DIMENSION_TITLE:this.curTitle,USER_ID:"pcadmin"}).then((function(e){if(200===e.status&&"success"===e.data.result){var r=e.data.pdScoreList;r.length&&(r=r.map((function(t){return t.operaTime=Object(C.b)(t.operaTime),t})),t.advantageReviews=t.advantageReviews.concat(r))}}))}},head:function(){return{title:this.productDetailObj.productObj.NAME+"的用户口碑_"+this.productDetailObj.productObj.FACTORY_SHORT_NAME+"_"+this.productDetailObj.categoryObj.CNAME+"系统怎么样？选型宝",meta:[{hid:"description",name:"description",content:"想了解"+this.productDetailObj.productObj.NAME+"的用户口碑好不好，"+this.productDetailObj.productObj.FACTORY_SHORT_NAME+this.productDetailObj.categoryObj.CNAME+"系统怎么样？就上选型宝, 企业级软件的大众点评"},{hid:"keywords",name:"keywords",content:this.productDetailObj.categoryObj.CNAME+"系统_"+this.productDetailObj.productObj.FACTORY_SHORT_NAME+"_"+this.productDetailObj.productObj.NAME}]}}},x=r(46),component=Object(x.a)(O,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main",attrs:{id:"product-info"}},[n("div",{staticClass:"default"},[n("Header2",{attrs:{"is-show":!0,"is-fixed":!1},on:{handleBannerPopShow:t.handleBannerPopShow}})],1),t._v(" "),n("div",{staticClass:"g-wrapper"},[n("breadCrumb",[n("a-breadcrumb-item",[n("nuxt-link",{attrs:{to:"/"}},[t._v("\n          首页\n        ")])],1),t._v(" "),n("a-breadcrumb-item",[n("nuxt-link",{attrs:{to:{name:"product-rank-id",params:{id:t.productDetailObj.categoryObj.CID}},target:"_blank"}},[t._v("\n          "+t._s(t.productDetailObj.categoryObj.CNAME)+"\n        ")])],1),t._v(" "),n("a-breadcrumb-item",[t._v("\n        "+t._s(t.productDetailObj.productObj.NAME)+"\n      ")])],1),t._v(" "),n("a-row",{staticClass:"product-detail"},[n("a-row",{staticClass:"g-flex"},[n("a-col",{staticClass:"product-logo",attrs:{lg:6,md:6,sm:10}},[n("div",{staticClass:"product-logo-img"},[n("img",{attrs:{src:"http://xuanxingbao.com/images/xxb_mark.png",alt:t.productDetailObj.productObj.FACTORY_SHORT_NAME+t.productDetailObj.categoryObj.CNAME}})])]),t._v(" "),n("a-col",{staticClass:"product-info",attrs:{lg:12,md:12,sm:14}},[n("h1",{staticClass:"product-name"},[t._v("\n            "+t._s(t.productDetailObj.productObj.NAME||t.productDetailObj.productKbObj.name)+"的用户实名口碑\n          ")]),t._v(" "),t.productDetailObj.productKbObj.avgNum?n("div",{staticClass:"comment-desc g-flex"},[n("div",{staticClass:"range"},[t._v("\n              "+t._s(t.productDetailObj.productKbObj.avgNum)+"\n            ")]),t._v(" "),n("div",{staticClass:"star-wrap"},[n("Star",{attrs:{"out-width":100,"out-height":20,decimal:t.productDetailObj.productKbObj.avgNum/5}}),t._v(" "),n("div",{staticClass:"txt"},[t._v("\n                口碑平均分\n              ")])],1),t._v(" "),n("div",{staticClass:"comment-total"},[n("a",{attrs:{href:"#"}},[t._v(t._s(t.productDetailObj.productKbObj.dpnum)+"条评论")])])]):n("div",[t._v("\n            暂无评论\n          ")])]),t._v(" "),n("a-col",{staticClass:"link-btn display-pc",attrs:{lg:4,md:4,sm:24}},[n("div",[n("a-button",{attrs:{type:"primary"},on:{click:function(e){return e.stopPropagation(),t.formHandleShow.apply(null,arguments)}}},[t._v("\n              请厂商联系我\n            ")])],1),t._v(" "),n("div",[n("a-button",{attrs:{type:"primary"},on:{click:function(e){return e.stopPropagation(),t.handleBannerPopShow.apply(null,arguments)}}},[t._v("\n              我要点评\n            ")])],1)])],1),t._v(" "),n("a-row",{staticClass:"navbar-wrap"},[n("a-anchor",{staticClass:"detail-nav"},[n("a",{staticClass:"logo",attrs:{href:"/"}},[n("img",{attrs:{src:r(439),alt:"选型宝_企业软件的大众点评-ERP系统_BI_CRM系统_OA系统_数据库软件_BPM系统_企业邮箱..."}})]),t._v(" "),n("a-anchor-link",{staticClass:"nav-bar-item",attrs:{href:"#product-info",title:"产品信息"}}),t._v(" "),n("a-anchor-link",{staticClass:"nav-bar-item",attrs:{href:"#product-function",title:"功能"}}),t._v(" "),n("a-anchor-link",{staticClass:"nav-bar-item",attrs:{href:"#user-reviews",title:"用户点评"}}),t._v(" "),n("a-anchor-link",{staticClass:"nav-bar-item",attrs:{href:"#apply-show",title:"申请演示"}})],1)],1)],1)],1),t._v(" "),n("a-row",{staticClass:"g-wrapper comment-wrap",attrs:{gutter:[32,32]}},[n("a-col",{staticClass:"left-wrap",attrs:{lg:16,md:16,sm:24}},[n("h2",[t._v("产品信息")]),t._v(" "),n("div",{staticClass:"panel"},[n("div",{staticClass:"pro-intro-wrap"},[n("div",{staticClass:"label"},[t._v("\n            产品描述\n          ")]),t._v(" "),n("div",{staticClass:"pro-intro"},[t._v("\n            SAP是企业应用软件的市场领导者，可帮助各种规模和所有行业的公司以最佳状态运行：全球77％的交易收入都与SAP系统息息相关。我们的机器学习，物联网（IoT）和高级分析技术有助于将客户的业务转变为智能企业。我们的端到端应用程序和服务套件使我们的客户能够盈利地运营，不断地适应并有所作为。\n          ")]),t._v(" "),n("div",{staticClass:"pro-company"},[n("div",{staticClass:"g-flex space-between"},[n("div",{staticClass:"item g-flex"},[n("div",{staticClass:"icon"},[n("a-icon",{staticStyle:{"font-size":"16px"},attrs:{type:"home"}})],1),t._v(" "),n("div",{},[n("div",[t._v("公司名称")]),t._v(" "),n("div",{staticClass:"txt-name",staticStyle:{color:"#222"}},[t._v("\n                    思爱普\n                  ")])])]),t._v(" "),n("div",{staticClass:"item g-flex"},[n("div",{staticClass:"icon"},[n("a-icon",{staticStyle:{"font-size":"16px"},attrs:{type:"global"}})],1),t._v(" "),n("div",{},[n("div",[t._v("官方网站")]),t._v(" "),n("div",{staticClass:"txt-name",staticStyle:{color:"#222"}},[t._v("\n                    https://www.sap.cn/\n                  ")])])])]),t._v(" "),n("div",{staticClass:"g-flex space-between"},[n("div",{staticClass:"item g-flex"},[n("div",{staticClass:"icon"},[n("a-icon",{staticStyle:{"font-size":"16px"},attrs:{type:"environment"}})],1),t._v(" "),n("div",{},[n("div",[t._v("公司地址")]),t._v(" "),n("div",{staticClass:"txt-name",staticStyle:{color:"#222"}},[t._v("\n                    上海市\n                  ")])])]),t._v(" "),n("div",{staticClass:"item g-flex"},[n("div",{staticClass:"icon"},[n("a-icon",{staticStyle:{"font-size":"16px"},attrs:{type:"dashboard"}})],1),t._v(" "),n("div",{},[n("div",[t._v("成立时间")]),t._v(" "),n("div",{staticClass:"txt-name",staticStyle:{color:"#222"}},[t._v("\n                    1972年\n                  ")])])])])])])]),t._v(" "),n("h2",{attrs:{id:"product-function"}},[t._v("\n        功能\n      ")]),t._v(" "),n("div",{staticClass:"panel"},[n("feature")],1),t._v(" "),n("h2",{attrs:{id:"user-reviews"}},[t._v("\n        用户点评\n      ")]),t._v(" "),t.productDetailObj.productKbObj.avgNum?n("reviews",{attrs:{"product-detail-obj":t.productDetailObj,"tabs-list":t.tabsList,"analysis-dimension-id":t.analysisDimensionId,"reviews-list":t.reviewsList,"disadvantage-reviews":t.disadvantageReviews,"advantage-reviews":t.advantageReviews,"current-page":t.allReviewCurPage,"total-page":t.allReviewTotalPage,"advantage-reviews-total-page":t.advantageReviewsTotalPage,"disadvantage-reviews-total-page":t.disadvantageReviewsTotalPage,"advantage-reviews-cur-page":t.advantageReviewsCurPage,"disadvantage-reviews-cur-page":t.disadvantageReviewsCurPage},on:{changeTags:t.changeTags,handleGetAllReview:t.handleGetAllReview,handleMoreReviews:t.handleMoreReviews,getMoreAdvantage:t.getMoreAdvantage,getMoreDisadvantage:t.getMoreDisadvantage,formHandleShow:t.formHandleShow}}):n("div",{staticClass:"panel"},[n("div",{staticStyle:{width:"100%",height:"400px"}},[n("no-data",[n("div",{staticStyle:{"font-size":"14px"},attrs:{slot:"txt"},slot:"txt"},[t._v("\n              该产品暂无评论~\n              "),n("span",{staticStyle:{padding:"6px 14px","border-radius":"4px","background-color":"#007DFF",color:"#ffffff",cursor:"pointer"}},[t._v("马上去点评")])])])],1)]),t._v(" "),n("h2",{attrs:{id:"apply-show"}},[t._v("\n        申请演示\n      ")]),t._v(" "),n("div",{staticClass:"panel"},[n("span",{staticStyle:{cursor:"pointer"},on:{click:t.formHandleShow}},[t._v("演示")])])],1),t._v(" "),n("a-col",{staticClass:"right-wrap",attrs:{lg:8,md:8,sm:24}},[n("div",{},[n("h2",{staticClass:"title"},[t._v("\n          与其他产品比较\n        ")]),t._v(" "),n("div",{staticClass:"com-list"},[n("div",{staticClass:"item g-flex center"},[n("div",{staticClass:"pro"},[n("img",{attrs:{src:"https://images.g2crowd.com/uploads/product/image/small_square/small_square_b9dbbb444871e867de3256a7ed711595/clickup.jpg",alt:""}}),t._v(" "),n("div",{staticClass:"txt"},[t._v("\n                ClickUp\n              ")])]),t._v(" "),n("div",{staticClass:"vs"},[n("span",[t._v("VS")])]),t._v(" "),n("div",{staticClass:"pro"},[n("img",{attrs:{src:"https://images.g2crowd.com/uploads/product/image/small_square/small_square_f426db6f72f9c9f8946d5964aa76616d/monday-com-monday-com.png",alt:""}}),t._v(" "),n("div",{staticClass:"txt"},[t._v("\n                monday.com\n              ")])])]),t._v(" "),n("div",{staticClass:"item g-flex center"},[n("div",{staticClass:"pro"},[n("img",{attrs:{src:"https://images.g2crowd.com/uploads/product/image/small_square/small_square_b9dbbb444871e867de3256a7ed711595/clickup.jpg",alt:""}}),t._v(" "),n("div",{staticClass:"txt"},[t._v("\n                ClickUp\n              ")])]),t._v(" "),n("div",{staticClass:"vs"},[n("span",[t._v("VS")])]),t._v(" "),n("div",{staticClass:"pro"},[n("img",{attrs:{src:"https://images.g2crowd.com/uploads/product/image/small_square/small_square_0264136e455806de7a87b27d66c09acd/asana.png",alt:""}}),t._v(" "),n("div",{staticClass:"txt"},[t._v("\n                Asana\n              ")])])]),t._v(" "),n("div",{staticClass:"item g-flex center"},[n("div",{staticClass:"pro"},[n("img",{attrs:{src:"https://images.g2crowd.com/uploads/product/image/small_square/small_square_d8d487b67574b56a5ad57a2f0f159a30/airtable.jpg",alt:""}}),t._v(" "),n("div",{staticClass:"txt"},[t._v("\n                ClickUp\n              ")])]),t._v(" "),n("div",{staticClass:"vs"},[n("span",[t._v("VS")])]),t._v(" "),n("div",{staticClass:"pro"},[n("img",{attrs:{src:"https://images.g2crowd.com/uploads/product/image/small_square/small_square_f426db6f72f9c9f8946d5964aa76616d/monday-com-monday-com.png",alt:""}}),t._v(" "),n("div",{staticClass:"txt"},[t._v("\n                Airtable\n              ")])])])])]),t._v(" "),n("div",{},[n("Slider",[n("div",{staticClass:"g-flex space-between",attrs:{slot:"slider-title"},on:{click:t.navigateToRank},slot:"slider-title"},[n("span",[t._v(t._s(t.productDetailObj.categoryObj.CNAME)+"厂商口碑排名")]),t._v(" "),n("span",{staticStyle:{"font-size":"14px",color:"#a9a9a9",cursor:"pointer"}},[t._v("查看完整")])]),t._v(" "),t.hotCompanyList.length?n("div",{staticClass:"slider-nav-bar",attrs:{slot:"slider-nav-bar"},slot:"slider-nav-bar"},[n("h3",[t._v("热门厂商")]),t._v(" "),t._l(t.hotCompanyList,(function(e,r){return n("div",{key:r,staticClass:"view-wrap"},[n("rankListItem",{attrs:{item:e,index:r,"category-id":t.productDetailObj.categoryObj.CID}})],1)}))],2):t._e(),t._v(" "),t.challengerList.length?n("div",{staticClass:"slider-nav-bar",attrs:{slot:"slider-nav-bar"},slot:"slider-nav-bar"},[n("h3",[t._v("挑战者")]),t._v(" "),t._l(t.challengerList,(function(e,r){return n("div",{key:r,staticClass:"view-wrap"},[n("rankListItem",{attrs:{item:e,index:r,"category-id":t.productDetailObj.categoryObj.CID}})],1)}))],2):t._e(),t._v(" "),t.noReviewList.length?n("div",{staticClass:"slider-nav-bar",attrs:{slot:"slider-nav-bar"},slot:"slider-nav-bar"},[n("h3",[t._v("暂无点评的厂商")]),t._v(" "),t._l(t.noReviewList,(function(e,r){return n("div",{key:r,staticClass:"view-wrap"},[n("div",{staticClass:"view"},[n("div",{staticClass:"g-flex space-between pad-20",staticStyle:{width:"100%"}},[n("nuxt-link",{staticStyle:{color:"#222222"},attrs:{target:"_blank",to:{name:"reputation-id",params:{id:t.productDetailObj.categoryObj.CID},query:{factory_id:e.qcid}}}},[t._v("\n                    "+t._s(e.factory_short_name||e.qcname)+"\n                  ")]),t._v(" "),n("span",{staticClass:"review-btn",on:{click:function(e){return e.stopPropagation(),t.handleBannerPopShow.apply(null,arguments)}}},[t._v("我要点评")])],1)])])}))],2):t._e()])],1)])],1),t._v(" "),n("contact",{ref:"child",attrs:{"form-show":t.formShow},on:{formHide:t.formHandleHide,submit:t.submitForm}}),t._v(" "),n("banner-pop",{directives:[{name:"show",rawName:"v-show",value:t.bannerPopShow,expression:"bannerPopShow"}],on:{handleBannerPopHide:t.handleBannerPopHide}}),t._v(" "),n("rightNav",{staticClass:"display-pc"},[n("qrcode")],1),t._v(" "),n("Footer")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Header2:r(783).default,Slider:r(798).default,Footer:r(784).default})}}]);