(window.webpackJsonp=window.webpackJsonp||[]).push([[40,11,12,13,14,15,20,25,27,28,29],{774:function(t,e,r){"use strict";r.r(e);r(161);var n={name:"StarZoom",props:{outWidth:{type:Number,default:function(){return 0}},outHeight:{type:Number,default:function(){return 0}},decimal:{type:Number,default:function(){return 0}}},computed:{innerWidth:function(){return this.decimal*this.outWidth}}},o=r(45),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"star-wrap"}},[r("div",{staticClass:"star-default",style:{width:t.outWidth+"px",height:t.outHeight+"px"}},[r("div",{staticClass:"star-real",style:{width:t.innerWidth+"px",height:t.outHeight+"px"}})])])}),[],!1,null,null,null);e.default=component.exports},775:function(t,e,r){"use strict";r.r(e);var n=r(788),o=r(288),c={name:"Header",components:{pHeader:n.default,mHeader:o.default},props:{isShow:{type:Boolean,default:function(){return!1}},isFixed:{type:Boolean,default:function(){return!0}}},methods:{handleBannerPopShow:function(){this.$emit("handleBannerPopShow")}}},l=r(45),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"header-wrap"},[t.isFixed?r("a-anchor",[r("pHeader",{staticClass:"display-pc",attrs:{"is-show":t.isShow},on:{handleBannerPopShow:t.handleBannerPopShow}})],1):r("pHeader",{staticClass:"display-pc",attrs:{"is-show":t.isShow},on:{handleBannerPopShow:t.handleBannerPopShow}}),t._v(" "),r("mHeader",{staticClass:"display-m"})],1)}),[],!1,null,null,null);e.default=component.exports},776:function(t,e,r){"use strict";r.r(e);var n={data:function(){return{cateInfo:[{text:"热门类别",title:"微信群",img:r(780),path:"/all"},{text:"关于我们",title:"选型宝订阅号",img:r(781),path:"http://old.xuanxingbao.com/webPC/about"},{text:"联系我们",title:"选型宝小程序",img:r(782),path:"http://old.xuanxingbao.com/webPC/contact-list.html"},{text:"加入我们",title:"选型宝服务号",img:r(783),path:"http://old.xuanxingbao.com/webPC/participate.html"}]}}},o=r(45),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("a-layout-footer",{staticClass:"footer"},[r("a-row",[r("a-col",[r("a-row",{staticClass:"g-wrapper",attrs:{getter:"16"}},t._l(t.cateInfo,(function(e,n){return r("a-col",{key:n,staticClass:"gutter-row footerInfo",attrs:{span:"6"}},[r("a",{staticClass:"ca_text",attrs:{href:e.path,title:e.text}},[t._v(t._s(e.text))]),t._v(" "),r("p",{staticClass:"qc_text"},[t._v("\n            "+t._s(e.title)+"\n          ")]),t._v(" "),r("img",{staticClass:"qcrodeImg",attrs:{src:e.img,alt:""}})])})),1)],1),t._v(" "),r("a-col",{staticClass:"beian"},[r("div",{staticClass:"site-width"},[r("p",[t._v("© 2021 选型宝，All Rights Reserved.")]),t._v(" "),r("p",[r("a",{attrs:{href:"#"}},[t._v("京ICP备14045422号-2 北京众智优选科技有限公司")])])]),t._v(" "),r("div",{staticClass:"site-width"},[r("p",[t._v("地址：北京市朝阳区百子湾西里435号创富港436")])])])],1)],1)}),[],!1,null,null,null);e.default=component.exports},777:function(t,e,r){"use strict";r.r(e);var n=r(45),component=Object(n.a)({},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"right-nav-wrap"},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},778:function(t,e,r){"use strict";r.r(e);var n=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"qrcode"},[e("img",{attrs:{src:r(779),alt:""}})])}],o=r(45),component=Object(o.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),n,!1,null,null,null);e.default=component.exports},779:function(t,e,r){t.exports=r.p+"img/qrcode.5d928fb.png"},780:function(t,e,r){t.exports=r.p+"img/wx-yh.bffc413.jpg"},781:function(t,e,r){t.exports=r.p+"img/qrcode_dy.e488e10.jpg"},782:function(t,e,r){t.exports=r.p+"img/qcrode.414b83a.jpg"},783:function(t,e,r){t.exports=r.p+"img/qrcode_fw.8427576.jpg"},784:function(t,e,r){var content=r(787);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(36).default)("b70710a8",content,!0,{sourceMap:!1})},785:function(t,e,r){"use strict";r.r(e);var n={},o=r(45),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"no-data-wrap"},[r("div",{staticClass:"txt-wrap"},[t._t("txt")],2)])}),[],!1,null,null,null);e.default=component.exports},786:function(t,e,r){"use strict";r(784)},787:function(t,e,r){var n=r(35)(!1);n.push([t.i,".view[data-v-9eb1fe9e]{width:100%;display:flex;justify-content:flex-start}.view .range[data-v-9eb1fe9e]{width:10%;position:relative;color:#fff;background-color:#92b2f1}.view .range span[data-v-9eb1fe9e]{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%)}.view.c1 .range[data-v-9eb1fe9e]{background-color:#f55b53}.view.c1 .score-box[data-v-9eb1fe9e]{background-color:#f55c53!important}.view.c2 .range[data-v-9eb1fe9e]{background-color:#f2ab38}.view.c2 .score-box[data-v-9eb1fe9e]{background-color:#f2ab38!important}.view.c3 .range[data-v-9eb1fe9e]{background-color:#5fcd81}.view.c3 .score-box[data-v-9eb1fe9e]{background-color:#5fcd81!important}.view .info[data-v-9eb1fe9e]{width:90%;padding:10px 20px}.view .info .title[data-v-9eb1fe9e]{font-size:17px;font-weight:700;margin-bottom:10px}.view .info .comment[data-v-9eb1fe9e]{color:#555}.view .info .score[data-v-9eb1fe9e]{display:flex;flex-direction:row;justify-content:space-between}.view .info .score .score-box[data-v-9eb1fe9e]{background-color:#90b2f1;color:#fff;padding:2px 4px;border-radius:4px}.view .info .bar-box[data-v-9eb1fe9e]{width:218px;height:13px;margin:10px 0;background-color:#e6e6e6;border-radius:50px}.view .info .bar-box .bar[data-v-9eb1fe9e]{height:13px;display:flex;justify-content:space-between;align-items:center;width:0;box-sizing:border-box;padding:0 10px;border-radius:50px;transition:width .8s ease-in-out}.view .info .bar-box .bar.s1[data-v-9eb1fe9e]{background:#f55a53;background:linear-gradient(90deg,#f55a53,#eb8a5d)}.view .info .bar-box .bar.s2[data-v-9eb1fe9e]{background:#f2a937;background:linear-gradient(90deg,#f2a937,#ebd458)}.view .info .bar-box .bar.s3[data-v-9eb1fe9e]{background:#5ecd80;background:linear-gradient(90deg,#5ecd80,#80cca5)}.view .info .bar-box .bar.s4[data-v-9eb1fe9e]{background:#37a2f1;background:linear-gradient(90deg,#8fb1f0,#a3baf9)}",""]),t.exports=n},789:function(t,e,r){"use strict";r.r(e);var n={},o=r(45),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("a-row",[r("a-col",[r("div",{staticClass:"g-wrapper breadcrumb"},[r("a-breadcrumb",[t._t("default")],2)],1)])],1)}),[],!1,null,null,null);e.default=component.exports},790:function(t,e,r){"use strict";r.r(e);var n=r(45),component=Object(n.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"slider-wrap"},[t._t("report-txt"),t._v(" "),r("div",[r("h2",{staticClass:"slider-title"},[t._t("slider-title")],2),t._v(" "),r("div",[t._t("slider-nav-bar")],2)])],2)}),[],!1,null,null,null);e.default=component.exports},793:function(t,e,r){"use strict";r.r(e);r(161);var n={props:{index:{type:Number,default:function(){return 0}},item:{type:Object,default:function(){return null}},categoryId:{type:String,default:function(){return""}}}},o=(r(786),r(45)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"view",class:t.index<3?"c"+(t.index+1):"c4"},[r("div",{staticClass:"range"},[r("span",[t._v("\n      "+t._s(t.index+1)+"\n    ")])]),t._v(" "),r("div",{staticClass:"info"},[r("div",{staticClass:"title"},[r("nuxt-link",{staticClass:"link",attrs:{target:"_blank",to:{name:"reputation-id",params:{id:t.categoryId},query:{factory_id:t.item.qcid}}}},[t._v("\n        "+t._s(t.item.factory_short_name)+"\n      ")])],1),t._v(" "),r("div",{staticClass:"score"},[r("div",{staticClass:"score-box"},[t._v("\n        "+t._s(t.item.avgNum)+"分\n      ")]),t._v(" "),r("nuxt-link",{staticClass:"comment",attrs:{target:"_blank",to:{name:"reputation-id",params:{id:t.categoryId},query:{factory_id:t.item.qcid}}}},[r("span",[t._v("\n          "+t._s(t.item.dpnum)+"条\n        ")]),t._v(" "),r("span",[t._v("\n          有价值点评\n        ")])])],1),t._v(" "),r("div",{staticClass:"bar-box"},[r("div",{staticClass:"bar",class:t.index<3?"s"+(t.index+1):"s4",staticStyle:{width:"50%"}})])])])}),[],!1,null,"9eb1fe9e",null);e.default=component.exports},795:function(t,e,r){"use strict";r.r(e);var n={props:{formShow:{type:Boolean,default:function(){return!0}}},beforeCreate:function(){this.form=this.$form.createForm(this,{name:"register"})},methods:{handleSubmit:function(t){var e=this;t.preventDefault(),this.form.validateFieldsAndScroll((function(t,r){if(!t){var data={};data.REALNAME=r.nickname||"",data.NICKNAME=r.nickname||"",data.COMPANY=r.company||"",data.POSITION=r.title||"",data.USER_EMAIL=r.email||"",data.PHONE=r.phone||"",e.$emit("submit",data)}}))},close:function(){this.$emit("formHide")},clear:function(){this.form.resetFields()}}},o=r(45),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{directives:[{name:"show",rawName:"v-show",value:t.formShow,expression:"formShow"}],staticClass:"contact-wrap"},[r("div",{staticClass:"model"}),t._v(" "),r("div",{staticClass:"form"},[r("div",{staticClass:"note"},[r("div",{staticClass:"h2"},[t._v("\n        "+t._s(t.$configs.APPLY.FORM.ONE)+"\n      ")]),t._v(" "),r("div",[t._v(t._s(t.$configs.APPLY.FORM.TWO))])]),t._v(" "),r("div",{staticClass:"close-btn",on:{click:t.close}},[r("a-icon",{staticStyle:{"font-size":"24px"},attrs:{type:"close"}})],1),t._v(" "),r("a-form",{attrs:{form:t.form},on:{submit:t.handleSubmit}},[r("a-form-item",{attrs:{label:"姓名"}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["nickname",{rules:[{required:!0,min:2,max:8,message:"请按要求输入您的姓名!",whitespace:!0}]}],expression:"[\n            'nickname',\n            {\n              rules: [{ required: true, min: 2, max: 8, message: '请按要求输入您的姓名!', whitespace: true }],\n            },\n          ]"}],attrs:{placeholder:"输入2-8个汉字"}})],1),t._v(" "),r("a-form-item",{attrs:{label:"公司"}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["company",{rules:[{required:!0,message:"请填写公司!",whitespace:!0}]}],expression:"[\n            'company',\n            {\n              rules: [{ required: true, message: '请填写公司!', whitespace: true }],\n            },\n          ]"}],attrs:{placeholder:"请输入公司名称"}})],1),t._v(" "),r("a-form-item",{attrs:{label:"职位"}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["title",{rules:[{required:!0,message:"请填写职位!",whitespace:!0}]}],expression:"[\n            'title',\n            {\n              rules: [{ required: true, message: '请填写职位!', whitespace: true }],\n            },\n          ]"}],attrs:{placeholder:"请输入职位名称"}})],1),t._v(" "),r("a-form-item",{attrs:{label:"手机号"}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["phone",{rules:[{required:!0,pattern:"^[1]([3-9])[0-9]{9}$",message:"请输入合法手机号!",whitespace:!0}]}],expression:"[\n            'phone',\n            {\n              rules: [{ required: true, pattern: '^[1]([3-9])[0-9]{9}$',message: '请输入合法手机号!', whitespace: true }],\n            },\n          ]"}],attrs:{placeholder:"请输入11位手机号"}})],1),t._v(" "),r("a-form-item",{attrs:{label:"邮箱"}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["email",{rules:[{type:"email",message:"输入的邮箱无效!"},{required:!0,message:"请输入邮箱!"}]}],expression:"[\n            'email',\n            {\n              rules: [\n                {\n                  type: 'email',\n                  message: '输入的邮箱无效!',\n                },\n                {\n                  required: true,\n                  message: '请输入邮箱!',\n                },\n              ],\n            },\n          ]"}],attrs:{placeholder:"请输入有效邮箱"}})],1),t._v(" "),r("a-form-item",{staticStyle:{"text-align":"center"}},[r("a-button",{attrs:{type:"primary","html-type":"submit"}},[t._v("\n          提交\n        ")])],1)],1)],1)])}),[],!1,null,null,null);e.default=component.exports},834:function(t,e,r){t.exports=r.p+"img/hot.90e0b26.png"},851:function(t,e,r){"use strict";r.r(e);var n=r(30),o=(r(114),r(774)),c=r(785),l=r(793),d=r(795),v=r(777),f=r(778),m=r(287),h=r(789),_={name:"Id",components:{Star:o.default,noData:c.default,rankListItem:l.default,contact:d.default,rightNav:v.default,qrcode:f.default,bannerPop:m.default,breadCrumb:h.default},watchQuery:["factory_id"],asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,data,o,c,l,d,v,f,m,h,_,w;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.params.id,n=t.query.factory_id,data={CATEGORY_ID:r,FACTORY_QCID:n},e.next=5,t.$requests.publicCompanyDetail(data);case 5:return o=e.sent,console.log(o),c={},200===o.status&&"success"===o.data.result&&(c.categoryObj=o.data.categoryObj,c.factoryQcObj=o.data.factoryQcObj,c.factoryQcScoreObj=o.data.factoryQcScoreObj),console.log(c.categoryObj),e.next=12,t.$requests.publicCompany(data);case 12:return l=e.sent,d=200===l.status&&"success"===l.data.result?l.data.productList:[],e.next=16,t.$requests.categoryHotCompany({ORDER_TYPE:0,CATEGORY_ID:r});case 16:return v=e.sent,f=200===v.status&&"success"===v.data.result?v.data.factoryQcList:[],e.next=20,t.$requests.categoryChallenger({ORDER_TYPE:0,CATEGORY_ID:r});case 20:return m=e.sent,h=200===m.status&&"success"===m.data.result?m.data.factoryQcList:[],e.next=24,t.$requests.categoryNoComment({CATEGORY_ID:r});case 24:return _=e.sent,w=200===_.status&&"success"===_.data.result?_.data.notScoreList:[],e.abrupt("return",{hotCompanyList:f,challengerList:h,noReviewList:w,productList:d,categoryName:c.categoryObj.CNAME,categoryId:r,factoryId:n,companyInfo:c,factory_short_name:c.factoryQcObj.FACTORY_SHORT_NAME||c.factoryQcObj.QCNAME||"选型宝",formShow:!1,bannerPopShow:!1});case 27:case"end":return e.stop()}}),e)})))()},methods:{handleBannerPopShow:function(){this.bannerPopShow=!0},handleBannerPopHide:function(){this.bannerPopShow=!1},formHandleShow:function(){this.formShow=!0},formHandleHide:function(){this.formShow=!1},submitForm:function(data){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return data.CATEGORY_ID=t.categoryId||"",data.CATEGORY_NAME=t.categoryName||"",data.FACTORY_ID=t.factoryId||"",data.FACTORY_NAME=t.factory_short_name||"",data.USER_ID="",e.next=7,t.$requests.productApply(data);case 7:200===(r=e.sent).status&&"success"===r.data.result?(t.$message.success("提交成功，我们会尽快通知厂商联系您!"),t.$refs.child.clear(),t.formShow=!1):(t.$message.error("提交失败，请稍后重试!"),t.formShow=!1);case 9:case"end":return e.stop()}}),e)})))()},navigateToRank:function(){var t=this.$router.resolve({name:"company-rank-id",params:{id:this.categoryId}});window.open(t.href,"_blank")}},head:function(){return{title:this.factory_short_name+" "+this.categoryName+"系统_软件的用户实名口碑_选型宝",meta:[{hid:"description",name:"description",content:"想了解"+this.factory_short_name+" "+this.categoryName+"系统、"+this.factory_short_name+" "+this.categoryName+"软件的用户口碑怎么样？?就上选型宝, 企业级软件的大众点评，实名制的CIO选型经验交流社区"},{hid:"keywords",name:"keywords",content:this.factory_short_name+" "+this.categoryName+"系统_"+this.factory_short_name+" "+this.categoryName+"软件"}]}}},w=r(45),component=Object(w.a)(_,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main"},[n("a-anchor",{staticClass:"default"},[n("Header2",{attrs:{"is-show":!0},on:{handleBannerPopShow:t.handleBannerPopShow}})],1),t._v(" "),n("div",{staticClass:"container-index"},[n("breadCrumb",[n("a-breadcrumb-item",[n("nuxt-link",{attrs:{to:"/"}},[t._v("\n          首页\n        ")])],1),t._v(" "),n("a-breadcrumb-item",[n("nuxt-link",{attrs:{to:{name:"product-rank-id",params:{id:t.categoryId}},target:"_blank"}},[t._v("\n          "+t._s(t.categoryName)+"\n        ")])],1),t._v(" "),n("a-breadcrumb-item",[t._v("\n        "+t._s(t.companyInfo.factoryQcObj.FACTORY_SHORT_NAME)+"综合口碑\n      ")])],1),t._v(" "),n("a-row",[n("a-col",{attrs:{span:24}},[n("a-row",{staticClass:"g-wrapper",attrs:{gutter:[32,32]}},[n("a-col",{attrs:{span:16}},[n("div",{staticClass:"company-info-wrap g-flex space-between"},[n("div",{staticClass:"company-name left"},[n("div",{staticClass:"short-name"},[t._v("\n                  "+t._s(t.companyInfo.factoryQcObj.FACTORY_SHORT_NAME)+"\n                ")]),t._v(" "),n("div",{staticClass:"full-name"},[t._v("\n                  "+t._s(t.companyInfo.factoryQcObj.QCNAME)+"\n                ")]),t._v(" "),n("div",{staticClass:"g-flex"},[n("div",{staticClass:"category"},[t._v("\n                    "+t._s(t.categoryName)+"类\n                  ")]),t._v(" "),n("img",{staticClass:"hot-icon",attrs:{src:r(834),alt:""}})])]),t._v(" "),t.companyInfo.factoryQcScoreObj?n("div",{staticClass:"g-flex right"},[n("div",{staticClass:"text-c"},[n("div",{staticClass:"tip"},[t._v("\n                    用户口碑\n                  ")]),t._v(" "),n("div",{staticClass:"tip"},[t._v("\n                    "+t._s(t.companyInfo.factoryQcScoreObj.avgNum)+"分\n                  ")]),t._v(" "),n("div",{staticClass:"star-wrap"},[n("Star",{attrs:{"out-width":100,"out-height":20,decimal:t.companyInfo.factoryQcScoreObj.avgNum/5}})],1),t._v(" "),n("div",{staticClass:"reviews m-t-10"},[n("span",[t._v(t._s(t.companyInfo.factoryQcScoreObj.dpnum)+"条")]),t._v("有价值点评\n                  ")])])]):n("div",{staticClass:"right"},[n("div",{staticClass:"review-btn",staticStyle:{padding:"12px"},on:{click:function(e){return e.stopPropagation(),t.handleBannerPopShow.apply(null,arguments)}}},[t._v("\n                  我要点评\n                ")])])]),t._v(" "),n("div",{staticClass:"relate-product rank-list-wrap"},[t.productList.length?n("div",{staticClass:"product-list m-t-20"},t._l(t.productList,(function(e,r){return n("div",{key:r,staticClass:"product-item g-flex",attrs:{span:24}},[n("div",{staticClass:"pro-logo"},[n("nuuxt-link",{attrs:{to:{name:"product-detail-id",params:{id:e.ID}},target:"_blank"}},[n("img",{attrs:{src:"https://www.xuanxingbao.com/xxb_mark.png",alt:""}})])],1),t._v(" "),n("div",{staticClass:"pro-info"},[n("div",{staticClass:"title"},[n("nuxt-link",{staticClass:"link",attrs:{to:{name:"product-detail-id",params:{id:e.ID}},target:"_blank"}},[t._v("\n                        "+t._s(e.NAME)+"\n                      ")])],1),t._v(" "),e.avgNum?n("div",[n("div",{staticClass:"g-flex",staticStyle:{"align-items":"center"}},[n("span",{staticClass:"count"},[t._v(t._s(e.avgNum)+"分")]),t._v(" "),n("Star",{attrs:{"out-width":80,"out-height":16,decimal:e.avgNum/5}})],1),t._v(" "),n("div",{staticClass:"reviews m-t-10"},[t._v("\n                        "+t._s(e.dpnum)+"条有价值点评\n                      ")])]):n("div",{staticClass:"no-review",staticStyle:{"font-size":"13px","margin-top":"20px"}},[n("span",{staticStyle:{"margin-right":"10px"}},[t._v("暂无点评")])])]),t._v(" "),n("div",{staticClass:"btn-wrap"},[e.avgNum?n("nuxt-link",{staticClass:"check-comment",attrs:{to:{name:"product-detail-id",params:{id:e.ID}},target:"_blank"}},[t._v("\n                      查看点评\n                    ")]):n("span",{staticClass:"review-btn",on:{click:function(e){return e.stopPropagation(),t.handleBannerPopShow.apply(null,arguments)}}},[t._v("马上去点评")])],1)])})),0):n("div",{staticStyle:{width:"100%",height:"400px"}},[n("no-data",[n("div",{staticStyle:{"font-size":"14px"},attrs:{slot:"txt"},slot:"txt"},[t._v("\n                    暂无数据~\n                  ")])])],1)])]),t._v(" "),n("a-col",{attrs:{span:8}},[n("Slider",[n("div",{staticClass:"report-wrap",attrs:{slot:"report-txt"},slot:"report-txt"},[n("div",{staticClass:"txt1"},[t._v("\n                  "+t._s(t.categoryName)+"选型\n                ")]),t._v(" "),n("div",{staticClass:"txt2"},[t._v("\n                  用户口碑报告\n                ")])])]),t._v(" "),n("div",{staticClass:"contact-btn",on:{click:t.formHandleShow}},[t._v("\n              请厂商联系我\n            ")]),t._v(" "),n("Slider",[n("div",{staticClass:"g-flex space-between",attrs:{slot:"slider-title"},on:{click:t.navigateToRank},slot:"slider-title"},[n("span",[t._v(t._s(t.categoryName)+"厂商口碑排名")]),t._v(" "),n("span",{staticStyle:{"font-size":"14px",color:"#a9a9a9",cursor:"pointer"}},[t._v("查看完整")])]),t._v(" "),t.hotCompanyList.length?n("div",{staticClass:"slider-nav-bar",attrs:{slot:"slider-nav-bar"},slot:"slider-nav-bar"},[n("h3",[t._v("热门厂商")]),t._v(" "),t._l(t.hotCompanyList,(function(e,r){return n("div",{key:r,staticClass:"view-wrap"},[n("rankListItem",{attrs:{item:e,index:r,"category-id":t.categoryId}})],1)}))],2):t._e(),t._v(" "),t.challengerList.length?n("div",{staticClass:"slider-nav-bar",attrs:{slot:"slider-nav-bar"},slot:"slider-nav-bar"},[n("h3",[t._v("挑战者")]),t._v(" "),t._l(t.challengerList,(function(e,r){return n("div",{key:r,staticClass:"view-wrap"},[n("rankListItem",{attrs:{item:e,index:r,"category-id":t.categoryId}})],1)}))],2):t._e(),t._v(" "),t.noReviewList.length?n("div",{staticClass:"slider-nav-bar",attrs:{slot:"slider-nav-bar"},slot:"slider-nav-bar"},[n("h3",[t._v("暂无点评的厂商")]),t._v(" "),t._l(t.noReviewList,(function(e,r){return n("div",{key:r,staticClass:"view-wrap"},[n("div",{staticClass:"view"},[n("div",{staticClass:"g-flex space-between pad-20",staticStyle:{width:"100%"}},[n("nuxt-link",{staticStyle:{color:"#222222"},attrs:{target:"_blank",to:{name:"reputation-id",params:{id:t.categoryId},query:{factory_id:e.qcid}}}},[t._v("\n                        "+t._s(e.factory_short_name||e.qcname)+"\n                      ")]),t._v(" "),n("span",{staticClass:"review-btn",on:{click:function(e){return e.stopPropagation(),t.handleBannerPopShow.apply(null,arguments)}}},[t._v("我要点评")])],1)])])}))],2):t._e()])],1)],1)],1)],1)],1),t._v(" "),n("contact",{ref:"child",attrs:{"form-show":t.formShow},on:{formHide:t.formHandleHide,submit:t.submitForm}}),t._v(" "),n("banner-pop",{directives:[{name:"show",rawName:"v-show",value:t.bannerPopShow,expression:"bannerPopShow"}],on:{handleBannerPopHide:t.handleBannerPopHide}}),t._v(" "),n("rightNav",[n("qrcode")],1),t._v(" "),n("Footer")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Header2:r(775).default,Slider:r(790).default,Footer:r(776).default})}}]);