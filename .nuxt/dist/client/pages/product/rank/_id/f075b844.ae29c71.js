(window.webpackJsonp=window.webpackJsonp||[]).push([[38,19,24],{813:function(t,e,r){var content=r(817);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(36).default)("b70710a8",content,!0,{sourceMap:!1})},816:function(t,e,r){"use strict";r(813)},817:function(t,e,r){var n=r(35)(!1);n.push([t.i,".view[data-v-9eb1fe9e]{width:100%;display:flex;justify-content:flex-start}.view .range[data-v-9eb1fe9e]{width:10%;position:relative;color:#fff;background-color:#92b2f1}.view .range span[data-v-9eb1fe9e]{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%)}.view.c1 .range[data-v-9eb1fe9e]{background-color:#f55b53}.view.c1 .score-box[data-v-9eb1fe9e]{background-color:#f55c53!important}.view.c2 .range[data-v-9eb1fe9e]{background-color:#f2ab38}.view.c2 .score-box[data-v-9eb1fe9e]{background-color:#f2ab38!important}.view.c3 .range[data-v-9eb1fe9e]{background-color:#5fcd81}.view.c3 .score-box[data-v-9eb1fe9e]{background-color:#5fcd81!important}.view .info[data-v-9eb1fe9e]{width:90%;padding:10px 20px}.view .info .title[data-v-9eb1fe9e]{font-size:17px;font-weight:700;margin-bottom:10px}.view .info .comment[data-v-9eb1fe9e]{color:#555}.view .info .score[data-v-9eb1fe9e]{display:flex;flex-direction:row;justify-content:space-between}.view .info .score .score-box[data-v-9eb1fe9e]{background-color:#90b2f1;color:#fff;padding:2px 4px;border-radius:4px}.view .info .bar-box[data-v-9eb1fe9e]{width:218px;height:13px;margin:10px 0;background-color:#e6e6e6;border-radius:50px}.view .info .bar-box .bar[data-v-9eb1fe9e]{height:13px;display:flex;justify-content:space-between;align-items:center;width:0;box-sizing:border-box;padding:0 10px;border-radius:50px;transition:width .8s ease-in-out}.view .info .bar-box .bar.s1[data-v-9eb1fe9e]{background:#f55a53;background:linear-gradient(90deg,#f55a53,#eb8a5d)}.view .info .bar-box .bar.s2[data-v-9eb1fe9e]{background:#f2a937;background:linear-gradient(90deg,#f2a937,#ebd458)}.view .info .bar-box .bar.s3[data-v-9eb1fe9e]{background:#5ecd80;background:linear-gradient(90deg,#5ecd80,#80cca5)}.view .info .bar-box .bar.s4[data-v-9eb1fe9e]{background:#37a2f1;background:linear-gradient(90deg,#8fb1f0,#a3baf9)}",""]),t.exports=n},822:function(t,e,r){"use strict";r.r(e);r(107);var n={props:{index:{type:Number,default:function(){return 0}},item:{type:Object,default:function(){return null}},categoryId:{type:String,default:function(){return""}}}},o=(r(816),r(48)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"view",class:t.index<3?"c"+(t.index+1):"c4"},[r("div",{staticClass:"range"},[r("span",[t._v("\n      "+t._s(t.index+1)+"\n    ")])]),t._v(" "),r("div",{staticClass:"info"},[r("div",{staticClass:"title"},[r("nuxt-link",{staticClass:"link",attrs:{target:"_blank",to:{name:"reputation-id",params:{id:t.categoryId},query:{factory_id:t.item.qcid}}}},[t._v("\n        "+t._s(t.item.factory_short_name)+"\n      ")])],1),t._v(" "),r("div",{staticClass:"score"},[r("div",{staticClass:"score-box"},[t._v("\n        "+t._s(t.item.avgNum)+"分\n      ")]),t._v(" "),r("nuxt-link",{staticClass:"comment",attrs:{target:"_blank",to:{name:"reputation-id",params:{id:t.categoryId},query:{factory_id:t.item.qcid}}}},[r("span",[t._v("\n          "+t._s(t.item.dpnum)+"条\n        ")]),t._v(" "),r("span",[t._v("\n          有价值点评\n        ")])])],1),t._v(" "),r("div",{staticClass:"bar-box"},[r("div",{staticClass:"bar",class:t.index<3?"s"+(t.index+1):"s4",staticStyle:{width:"50%"}})])])])}),[],!1,null,"9eb1fe9e",null);e.default=component.exports},824:function(t,e,r){"use strict";r.r(e);var n={props:{formShow:{type:Boolean,default:function(){return!0}}},beforeCreate:function(){this.form=this.$form.createForm(this,{name:"register"})},methods:{handleSubmit:function(t){var e=this;t.preventDefault(),this.form.validateFieldsAndScroll((function(t,r){if(!t){var data={};data.REALNAME=r.nickname||"",data.NICKNAME=r.nickname||"",data.COMPANY=r.company||"",data.POSITION=r.title||"",data.USER_EMAIL=r.email||"",data.PHONE=r.phone||"",e.$emit("submit",data)}}))},close:function(){this.$emit("formHide")},clear:function(){this.form.resetFields()}}},o=r(48),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{directives:[{name:"show",rawName:"v-show",value:t.formShow,expression:"formShow"}],staticClass:"contact-wrap"},[r("div",{staticClass:"model"}),t._v(" "),r("div",{staticClass:"form"},[r("div",{staticClass:"note"},[r("div",{staticClass:"h2"},[t._v("\n        "+t._s(t.$configs.APPLY.FORM.ONE)+"\n      ")]),t._v(" "),r("div",[t._v(t._s(t.$configs.APPLY.FORM.TWO))])]),t._v(" "),r("div",{staticClass:"close-btn",on:{click:t.close}},[r("a-icon",{staticStyle:{"font-size":"24px"},attrs:{type:"close"}})],1),t._v(" "),r("a-form",{attrs:{form:t.form},on:{submit:t.handleSubmit}},[r("a-form-item",{attrs:{label:"姓名"}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["nickname",{rules:[{required:!0,min:2,max:8,message:"请按要求输入您的姓名!",whitespace:!0}]}],expression:"[\n            'nickname',\n            {\n              rules: [{ required: true, min: 2, max: 8, message: '请按要求输入您的姓名!', whitespace: true }],\n            },\n          ]"}],attrs:{placeholder:"输入2-8个汉字"}})],1),t._v(" "),r("a-form-item",{attrs:{label:"公司"}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["company",{rules:[{required:!0,message:"请填写公司!",whitespace:!0}]}],expression:"[\n            'company',\n            {\n              rules: [{ required: true, message: '请填写公司!', whitespace: true }],\n            },\n          ]"}],attrs:{placeholder:"请输入公司名称"}})],1),t._v(" "),r("a-form-item",{attrs:{label:"职位"}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["title",{rules:[{required:!0,message:"请填写职位!",whitespace:!0}]}],expression:"[\n            'title',\n            {\n              rules: [{ required: true, message: '请填写职位!', whitespace: true }],\n            },\n          ]"}],attrs:{placeholder:"请输入职位名称"}})],1),t._v(" "),r("a-form-item",{attrs:{label:"手机号"}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["phone",{rules:[{required:!0,pattern:"^[1]([3-9])[0-9]{9}$",message:"请输入合法手机号!",whitespace:!0}]}],expression:"[\n            'phone',\n            {\n              rules: [{ required: true, pattern: '^[1]([3-9])[0-9]{9}$',message: '请输入合法手机号!', whitespace: true }],\n            },\n          ]"}],attrs:{placeholder:"请输入11位手机号"}})],1),t._v(" "),r("a-form-item",{attrs:{label:"邮箱"}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["email",{rules:[{type:"email",message:"输入的邮箱无效!"},{required:!0,message:"请输入邮箱!"}]}],expression:"[\n            'email',\n            {\n              rules: [\n                {\n                  type: 'email',\n                  message: '输入的邮箱无效!',\n                },\n                {\n                  required: true,\n                  message: '请输入邮箱!',\n                },\n              ],\n            },\n          ]"}],attrs:{placeholder:"请输入有效邮箱"}})],1),t._v(" "),r("a-form-item",{staticStyle:{"text-align":"center"}},[r("a-button",{attrs:{type:"primary","html-type":"submit"}},[t._v("\n          提交\n        ")])],1)],1)],1)])}),[],!1,null,null,null);e.default=component.exports},851:function(t,e,r){"use strict";r.r(e);var n={name:"ProductOrder",components:{Star:r(803).default},props:{info:{type:Object,default:function(){return{}}},companyInfo:{type:Object,default:function(){return{}}},categoryId:{type:String,default:function(){return""}},categoryName:{type:String,default:function(){return""}}},methods:{contact:function(){this.$emit("formShow",this.info.qcid)},navigateToDetail:function(t){var e=this.$router.resolve({name:"product-detail-id",params:{id:t.product_id}});window.open(e.href,"_blank")}}},o=r(48),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"rank-list-item"},[r("div",{staticClass:"pro-img"},[r("nuxt-link",{attrs:{target:"_blank",to:{name:"product-detail-id",params:{id:t.info.product_id}}}},[r("img",{attrs:{src:"https://xuanxingbao.com/xxb_mark.png",alt:t.categoryName+(t.info.factory_short_name||t.info.product_name)}})])],1),t._v(" "),r("div",{staticClass:"pro-info"},[r("div",{staticClass:"pro-name"},[r("nuxt-link",{staticClass:"link",attrs:{target:"_blank",to:{name:"product-detail-id",params:{id:t.info.product_id}}}},[t._v("\n        "+t._s(t.info.product_name)+"\n      ")])],1),t._v(" "),r("div",{staticClass:"pro-count g-flex space-between"},[t.info.ztgsnum?r("div",{staticClass:"g-flex"},[r("span",{staticClass:"score-box"},[t._v(t._s(t.info.ztgsnum)+"分")]),t._v(" "),r("Star",{attrs:{"out-width":100,"out-height":20,decimal:t.info.ztgsnum/5}})],1):r("div",[t._v("\n        暂时还没有人点评快来贡献您的专业见解吧！\n      ")]),t._v(" "),r("div",{staticClass:"pro-right"},[t.info.yjznum>0?r("nuxt-link",{staticStyle:{color:"#222222"},attrs:{target:"_blank",to:{name:"product-detail-id",params:{id:t.info.product_id}}}},[t._v("\n          "+t._s(t.info.yjznum)+"条有价值点评\n        ")]):r("div",{staticClass:"tab-btn"},[t._v("\n          马上去点评\n        ")])],1)]),t._v(" "),r("div",{staticClass:"pro-sub"},[r("div",{staticClass:"pro-left"},[t.info.productnum>0?r("div",{staticClass:"pro-desc"},[t._v("\n          共有"+t._s(t.info.productnum)+"条点评，经审核后，有价值点评"+t._s(t.info.yjznum>0?t.info.yjznum:0)+"条\n        ")]):t._e()]),t._v(" "),r("div",{staticClass:"pro-right"},[r("div",{staticClass:"tab-btn",on:{click:function(e){return e.stopPropagation(),t.contact.apply(null,arguments)}}},[t._v("\n          请厂商联系我\n        ")])])])])])}),[],!1,null,null,null);e.default=component.exports},876:function(t,e,r){"use strict";r.r(e);var n=r(32),o=(r(121),r(851)),c=r(824),d=r(814),l=r(822),f=r(811),m=r(812),v=r(299),_=r(818),h={components:{productOrder:o.default,contact:c.default,noData:d.default,rankListItem:l.default,rightNav:f.default,qrcode:m.default,bannerPop:v.default,breadCrumb:_.default},watchQuery:["category_name"],asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,o,c,d,l,f,m,v,_,h,y,data,w,x;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.app,n=t.params,o=0,c=n.id,e.next=5,r.$requests.publicCategoryInfo({category_id:c});case 5:return d=e.sent,l=200===d.status&&"success"===d.data.result?d.data.categoryInfoObj:{},e.next=9,r.$requests.categoryHotCompany({ORDER_TYPE:o,CATEGORY_ID:c});case 9:return f=e.sent,m=200===f.status&&"success"===f.data.result?f.data.factoryQcList:[],e.next=13,r.$requests.categoryChallenger({ORDER_TYPE:o,CATEGORY_ID:c});case 13:return v=e.sent,_=200===v.status&&"success"===v.data.result?v.data.factoryQcList:[],e.next=17,r.$requests.categoryNoComment({CATEGORY_ID:c});case 17:return h=e.sent,y=200===h.status&&"success"===h.data.result?h.data.notScoreList:[],data={category_id:c,orders:0},e.next=22,r.$requests.indexSelectCatePro(data);case 22:return w=e.sent,x=200===w.status&&"success"===w.data.result?w.data.productlist:[],e.abrupt("return",{sortTabs:[{name:"按点评量排序",query:"reviewNum"},{name:"按口碑值排序",query:"avg"}],orderType:"reviewNum",productList:x,categoryName:l.CNAME,categoryId:c,hotCompanyList:m,challengerList:_,noReviewList:y,formShow:!1,companyInfo:{},bannerPopShow:!1});case 25:case"end":return e.stop()}}),e)})))()},methods:{handleBannerPopShow:function(){this.bannerPopShow=!0},handleBannerPopHide:function(){this.bannerPopShow=!1},navigateToRank:function(){var t=this.$router.resolve({name:"company-rank-id",params:{id:this.categoryId}});window.open(t.href,"_blank")},formHandleShow:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var data,n;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e.formShow=!0,data={CATEGORY_ID:e.categoryId,FACTORY_QCID:t},r.next=4,e.$requests.publicCompanyDetail(data);case 4:200===(n=r.sent).status&&"success"===n.data.result&&(e.companyInfo.categoryObj=n.data.categoryObj,e.companyInfo.factoryQcObj=n.data.factoryQcObj,e.companyInfo.factoryQcScoreObj=n.data.factoryQcScoreObj),console.log("厂商信息:",e.companyInfo);case 7:case"end":return r.stop()}}),r)})))()},formHandleHide:function(){this.formShow=!1},submitForm:function(data){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return data.CATEGORY_ID=t.companyInfo.categoryObj.CID||t.categoryId,data.CATEGORY_NAME=t.companyInfo.categoryObj.CNAME||t.categoryName,data.FACTORY_ID=t.companyInfo.factoryQcScoreObj.QCID||t.companyInfo.factoryQcScoreObj.FACTORY_SHORT_ID,data.FACTORY_NAME=t.companyInfo.factoryQcScoreObj.QCNAME||t.companyInfo.factoryQcScoreObj.FACTORY_SHORT_NAME,data.USER_ID="",e.next=7,t.$requests.productApply(data);case 7:200===(r=e.sent).status&&"success"===r.data.result?(t.$message.success("提交成功，我们会尽快通知厂商联系您!"),t.$refs.child.clear(),t.formShow=!1):(t.$message.error("提交失败，请稍后重试!"),t.formShow=!1);case 9:case"end":return e.stop()}}),e)})))()},handleSortTabClick:function(t,e){var r=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var data,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r.orderType!==e){t.next=4;break}return t.abrupt("return",!1);case 4:return r.orderType=e,data={category_id:r.categoryId,orders:"reviewNum"===r.orderType?0:1},t.next=8,r.$requests.indexSelectCatePro(data);case 8:n=t.sent,r.productList=200===n.status&&"success"===n.data.result?n.data.productlist:[];case 10:case"end":return t.stop()}}),t)})))()}},head:function(){return{title:this.categoryName+"系统口碑排名_"+this.categoryName+"软件点评_"+this.categoryName+"是什么意思？选型宝",meta:[{hid:"description",name:"description",content:"想了解"+this.categoryName+"系统用户口碑、"+this.categoryName+"软件怎么选、"+this.categoryName+"是什么意思？就上选型宝, 企业级软件的大众点评"},{hid:"keywords",name:"keywords",content:this.categoryName+"系统_"+this.categoryName+"软件_"+this.categoryName+"是什么意思？"}]}}},y=r(48),component=Object(y.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main pro-rank"},[n("a-anchor",{staticClass:"default"},[n("Header2",{attrs:{"is-show":!0},on:{handleBannerPopShow:t.handleBannerPopShow}})],1),t._v(" "),n("div",{staticClass:"container-index"},[n("breadCrumb",[n("a-breadcrumb-item",[n("a",{attrs:{href:"/"}},[t._v("首页")])]),t._v(" "),n("a-breadcrumb-item",[t._v(t._s(t.categoryName)+"产品排名")])],1),t._v(" "),n("a-row",[n("a-col",{attrs:{md:"24"}},[n("a-row",{staticClass:"g-wrapper",attrs:{gutter:[32,32]}},[n("a-col",{attrs:{span:"8",md:8}},[n("Slider",[n("div",{staticClass:"report-wrap",attrs:{slot:"report-txt"},slot:"report-txt"},[n("div",{staticClass:"txt1"},[n("h1",[t._v(t._s(t.categoryName)+"选型")])]),t._v(" "),n("div",{staticClass:"txt2"},[t._v("\n                  用户口碑报告\n                ")])]),t._v(" "),n("div",{staticClass:"g-flex space-between",attrs:{slot:"slider-title"},on:{click:t.navigateToRank},slot:"slider-title"},[n("span",[t._v(t._s(t.categoryName)+"厂商口碑排名")]),t._v(" "),n("span",{staticStyle:{"font-size":"14px",color:"#a9a9a9",cursor:"pointer"}},[t._v("查看完整")])]),t._v(" "),t.hotCompanyList.length?n("div",{staticClass:"slider-nav-bar",attrs:{slot:"slider-nav-bar"},slot:"slider-nav-bar"},[n("h3",[t._v("热门厂商")]),t._v(" "),t._l(t.hotCompanyList,(function(e,r){return n("div",{key:r,staticClass:"view-wrap"},[n("rankListItem",{attrs:{item:e,index:r,"category-id":t.categoryId}})],1)}))],2):t._e(),t._v(" "),t.challengerList.length?n("div",{staticClass:"slider-nav-bar",attrs:{slot:"slider-nav-bar"},slot:"slider-nav-bar"},[n("h3",[t._v("挑战者")]),t._v(" "),t._l(t.challengerList,(function(e,r){return n("div",{key:r,staticClass:"view-wrap",attrs:{target:"_blank",to:{name:"reputation-id",params:{id:t.categoryId},query:{factory_id:e.qcid}}}},[n("rankListItem",{attrs:{item:e,index:r,"category-id":t.categoryId}})],1)}))],2):t._e(),t._v(" "),t.noReviewList.length?n("div",{staticClass:"slider-nav-bar",attrs:{slot:"slider-nav-bar"},slot:"slider-nav-bar"},[n("h3",[t._v("暂无点评的厂商")]),t._v(" "),t._l(t.noReviewList,(function(e,r){return n("div",{key:r,staticClass:"view-wrap"},[n("div",{staticClass:"view"},[n("div",{staticClass:"g-flex space-between pad-20",staticStyle:{width:"100%"}},[n("nuxt-link",{staticStyle:{color:"#222222"},attrs:{target:"_blank",to:{name:"reputation-id",params:{id:t.categoryId},query:{factory_id:e.qcid}}}},[t._v("\n                        "+t._s(e.factory_short_name||e.qcname)+"\n                      ")])],1)])])}))],2):t._e()])],1),t._v(" "),n("a-col",{attrs:{span:"16"}},[n("a-row",{staticClass:"grey"},[n("a-col",{attrs:{span:"24"}},[n("h2",[t._v("\n                  "+t._s(t.categoryName)+"产品 用户口碑排名\n                ")]),t._v(" "),t.productList.length?n("div",[n("div",{staticClass:"sort-item-wrap g-flex"},t._l(t.sortTabs,(function(e,o){return n("div",{key:o,staticClass:"sort-item",class:e.query===t.orderType?"on":"",on:{click:function(r){return r.preventDefault(),r.stopPropagation(),t.handleSortTabClick(o,e.query)}}},[e.query===t.orderType?[n("img",{staticClass:"icon",attrs:{src:r(842),alt:""}}),t._v(" "),n("img",{staticClass:"corner",attrs:{src:r(843),alt:""}})]:[n("img",{staticClass:"icon",attrs:{src:r(844),alt:""}})],t._v("\n                      "+t._s(e.name)+"\n                    ")],2)})),0)]):t._e(),t._v(" "),n("div",{staticClass:"rank-box"},[n("div",{staticClass:"rank-list"},[t.productList.length?n("div",t._l(t.productList,(function(e){return n("productOrder",{key:e.product_id,attrs:{info:e,"category-name":t.categoryName,"category-id":t.categoryId},on:{formShow:t.formHandleShow}})})),1):n("div",{staticStyle:{width:"100%",height:"400px"}},[n("no-data",[n("div",{staticStyle:{"font-size":"14px"},attrs:{slot:"txt"},slot:"txt"},[t._v("\n                          暂无产品排名~\n                        ")])])],1)])])])],1)],1)],1)],1)],1)],1),t._v(" "),n("contact",{ref:"child",attrs:{"form-show":t.formShow},on:{formHide:t.formHandleHide,submit:t.submitForm}}),t._v(" "),n("banner-pop",{directives:[{name:"show",rawName:"v-show",value:t.bannerPopShow,expression:"bannerPopShow"}],on:{handleBannerPopHide:t.handleBannerPopHide}}),t._v(" "),n("rightNav",[n("qrcode")],1),t._v(" "),n("Footer")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Header2:r(809).default,Slider:r(819).default,Footer:r(810).default})}}]);