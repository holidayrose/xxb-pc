(window.webpackJsonp=window.webpackJsonp||[]).push([[36,18],{1254:function(t,e,r){var content=r(1261);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(78).default)("5ba9a028",content,!0,{sourceMap:!1})},1259:function(t,e,r){var content=r(1270);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(78).default)("41c85ece",content,!0,{sourceMap:!1})},1260:function(t,e,r){"use strict";r(1254)},1261:function(t,e,r){var o=r(77)(!1);o.push([t.i,".link[data-v-d40efb78]{color:#222;transition:.5s}.link[data-v-d40efb78]:hover{color:#007dff;text-decoration:underline}.view[data-v-d40efb78]{width:100%;display:flex;justify-content:flex-start}.view .range[data-v-d40efb78]{width:10%;position:relative;color:#fff;background-color:#92b2f1}.view .range span[data-v-d40efb78]{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%)}.view.c1 .range[data-v-d40efb78]{background-color:#f55b53}.view.c1 .score-box[data-v-d40efb78]{background-color:#f55c53!important}.view.c2 .range[data-v-d40efb78]{background-color:#f2ab38}.view.c2 .score-box[data-v-d40efb78]{background-color:#f2ab38!important}.view.c3 .range[data-v-d40efb78]{background-color:#5fcd81}.view.c3 .score-box[data-v-d40efb78]{background-color:#5fcd81!important}.view .info[data-v-d40efb78]{width:calc(90% - 40px);padding:10px 20px}.view .info .title[data-v-d40efb78]{font-size:17px;font-weight:700;margin-bottom:10px}.view .info .score[data-v-d40efb78]{display:flex;flex-direction:row;justify-content:space-between}.view .info .score .score-box[data-v-d40efb78]{background-color:#90b2f1;color:#fff;padding:2px 4px;border-radius:4px}.view .info .bar-box[data-v-d40efb78]{width:218px;height:13px;margin:10px 0;background-color:#e6e6e6;border-radius:50px}.view .info .bar-box .bar[data-v-d40efb78]{height:13px;display:flex;justify-content:space-between;align-items:center;width:0;box-sizing:border-box;padding:0 10px;border-radius:50px;transition:width .8s ease-in-out}.view .info .bar-box .bar.s1[data-v-d40efb78]{background:#f55a53;background:linear-gradient(90deg,#f55a53,#eb8a5d)}.view .info .bar-box .bar.s2[data-v-d40efb78]{background:#f2a937;background:linear-gradient(90deg,#f2a937,#ebd458)}.view .info .bar-box .bar.s3[data-v-d40efb78]{background:#5ecd80;background:linear-gradient(90deg,#5ecd80,#80cca5)}.view .info .bar-box .bar.s4[data-v-d40efb78]{background:#37a2f1;background:linear-gradient(90deg,#8fb1f0,#a3baf9)}",""]),t.exports=o},1268:function(t,e,r){"use strict";r.r(e);r(1229);var o={props:{index:{type:Number,default:function(){return 0}},item:{type:Object,default:function(){return null}}}},n=(r(1260),r(35)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"view",class:t.index<3?"c"+(t.index+1):"c4"},[r("div",{staticClass:"range"},[r("span",[t._v("\n      "+t._s(t.index+1)+"\n    ")])]),t._v(" "),r("div",{staticClass:"info"},[r("div",{staticClass:"title"},[r("div",{staticClass:"link"},[t._v("\n        "+t._s(t.item.factory_short_name)+"\n      ")])]),t._v(" "),r("div",{staticClass:"score"},[r("div",{staticClass:"score-box"},[t._v("\n        "+t._s(t.item.avgNum)+"分\n      ")]),t._v(" "),r("div",{staticClass:"comment"},[r("span",[t._v("\n          "+t._s(t.item.dpnum)+"条\n        ")]),t._v(" "),r("span",[t._v("\n          有价值点评\n        ")])])]),t._v(" "),r("div",{staticClass:"bar-box"},[r("div",{staticClass:"bar",class:t.index<3?"s"+(t.index+1):"s4",staticStyle:{width:"50%"}})])])])}),[],!1,null,"d40efb78",null);e.default=component.exports},1269:function(t,e,r){"use strict";r(1259)},1270:function(t,e,r){var o=r(77)(!1);o.push([t.i,".contact-wrap[data-v-639bcfa5]{position:fixed;left:0;right:0;top:0;bottom:0;z-index:10}.model[data-v-639bcfa5]{width:100%;height:100%;background-color:rgba(6,21,26,.67)}.form[data-v-639bcfa5]{position:absolute;top:50%;width:568px;padding:30px;left:50%;transform:translate(-50%,-50%);background-color:#fff}.note[data-v-639bcfa5]{color:#222;margin-bottom:10px}.note .h2[data-v-639bcfa5]{font-size:24px}.close-btn[data-v-639bcfa5]{position:absolute;right:30px;top:30px}[data-v-639bcfa5] .ant-form-item{margin-bottom:0}",""]),t.exports=o},1272:function(t,e,r){"use strict";r.r(e);var o={props:{formShow:{type:Boolean,default:function(){return!0}}},beforeCreate:function(){this.form=this.$form.createForm(this,{name:"register"})},methods:{handleSubmit:function(t){var e=this;t.preventDefault(),this.form.validateFieldsAndScroll((function(t,r){if(!t){var data={};data.REALNAME=r.nickname||"",data.NICKNAME=r.nickname||"",data.COMPANY=r.company||"",data.POSITION=r.title||"",data.USER_EMAIL=r.email||"",data.PHONE=r.phone||"",e.$emit("submit",data)}}))},close:function(){this.$emit("formHide")},clear:function(){this.form.resetFields()}}},n=(r(1269),r(35)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{directives:[{name:"show",rawName:"v-show",value:t.formShow,expression:"formShow"}],staticClass:"contact-wrap"},[r("div",{staticClass:"model"}),t._v(" "),r("div",{staticClass:"form"},[r("div",{staticClass:"note"},[r("div",{staticClass:"h2"},[t._v("\n        "+t._s(t.$configs.APPLY.FORM.ONE)+"\n      ")]),t._v(" "),r("div",[t._v(t._s(t.$configs.APPLY.FORM.TWO))])]),t._v(" "),r("div",{staticClass:"close-btn",on:{click:t.close}},[r("a-icon",{staticStyle:{"font-size":"24px"},attrs:{type:"close"}})],1),t._v(" "),r("a-form",{attrs:{form:t.form},on:{submit:t.handleSubmit}},[r("a-form-item",{attrs:{label:"姓名"}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["nickname",{rules:[{required:!0,min:2,max:8,message:"请按要求输入您的姓名!",whitespace:!0}]}],expression:"[\n            'nickname',\n            {\n              rules: [{ required: true, min: 2, max: 8, message: '请按要求输入您的姓名!', whitespace: true }],\n            },\n          ]"}],attrs:{placeholder:"输入2-8个汉字"}})],1),t._v(" "),r("a-form-item",{attrs:{label:"公司"}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["company",{rules:[{required:!0,message:"请填写公司!",whitespace:!0}]}],expression:"[\n            'company',\n            {\n              rules: [{ required: true, message: '请填写公司!', whitespace: true }],\n            },\n          ]"}],attrs:{placeholder:"请输入公司名称"}})],1),t._v(" "),r("a-form-item",{attrs:{label:"职位"}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["title",{rules:[{required:!0,message:"请填写职位!",whitespace:!0}]}],expression:"[\n            'title',\n            {\n              rules: [{ required: true, message: '请填写职位!', whitespace: true }],\n            },\n          ]"}],attrs:{placeholder:"请输入职位名称"}})],1),t._v(" "),r("a-form-item",{attrs:{label:"手机号"}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["phone",{rules:[{required:!0,pattern:"^[1]([3-9])[0-9]{9}$",message:"请输入合法手机号!",whitespace:!0}]}],expression:"[\n            'phone',\n            {\n              rules: [{ required: true, pattern: '^[1]([3-9])[0-9]{9}$',message: '请输入合法手机号!', whitespace: true }],\n            },\n          ]"}],attrs:{placeholder:"请输入11位手机号"}})],1),t._v(" "),r("a-form-item",{attrs:{label:"邮箱"}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["email",{rules:[{type:"email",message:"输入的邮箱无效!"},{required:!0,message:"请输入邮箱!"}]}],expression:"[\n            'email',\n            {\n              rules: [\n                {\n                  type: 'email',\n                  message: '输入的邮箱无效!',\n                },\n                {\n                  required: true,\n                  message: '请输入邮箱!',\n                },\n              ],\n            },\n          ]"}],attrs:{placeholder:"请输入有效邮箱"}})],1),t._v(" "),r("a-form-item",{staticStyle:{"text-align":"center"}},[r("a-button",{attrs:{type:"primary","html-type":"submit"}},[t._v("\n          提交\n        ")])],1)],1)],1)])}),[],!1,null,"639bcfa5",null);e.default=component.exports},1277:function(t,e,r){var content=r(1307);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(78).default)("728f818d",content,!0,{sourceMap:!1})},1306:function(t,e,r){"use strict";r(1277)},1307:function(t,e,r){var o=r(77)(!1);o.push([t.i,".link[data-v-01a8a3a7]{color:#222;transition:.5s}.link[data-v-01a8a3a7]:hover{color:#007dff;text-decoration:underline}.tab-btn[data-v-01a8a3a7]{width:110px;color:#007dff;border:1px solid #007dff;padding:4px 14px;text-align:center;border-radius:16px;font-size:13px;margin:4px;cursor:pointer}.tab-btn[data-v-01a8a3a7]:hover{background-color:#007dff;color:#fff}.pro-right[data-v-01a8a3a7]{width:110px;text-align:center}.rank-list-item[data-v-01a8a3a7]{display:flex;flex-direction:row;padding:20px;background-color:#fff;overflow:hidden;border-radius:4px;margin-bottom:10px;cursor:pointer;color:#555}.rank-list-item .pro-img[data-v-01a8a3a7]{width:20%;text-align:left;padding:8px 0}.rank-list-item .pro-img img[data-v-01a8a3a7]{width:100px;height:100px}.rank-list-item .pro-info[data-v-01a8a3a7]{width:80%}.rank-list-item .pro-info .pro-name[data-v-01a8a3a7]{font-size:14px;font-weight:700;padding:6px 0}.rank-list-item .pro-info .score-box[data-v-01a8a3a7]{padding:2px 4px;background-color:#ff492c;color:#fff;border-radius:4px;margin-right:10px}.rank-list-item .pro-info .pro-sub[data-v-01a8a3a7]{margin-top:10px;display:flex;flex-direction:row;justify-content:space-between}.rank-list-item .pro-info .pro-sub .pro-compare[data-v-01a8a3a7]{margin-top:10px}.rank-list-item .pro-info .pro-sub .pro-compare button[data-v-01a8a3a7]{display:inline-block;width:20px;height:20px;margin-right:10px}",""]),t.exports=o},1338:function(t,e,r){var content=r(1371);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(78).default)("7ac9c8da",content,!0,{sourceMap:!1})},1350:function(t,e,r){"use strict";r.r(e);var o={name:"ProductOrder",components:{Star:r(1234).default},props:{info:{type:Object,default:function(){return{}}},companyInfo:{type:Object,default:function(){return{}}},categoryId:{type:String,default:function(){return""}},categoryName:{type:String,default:function(){return""}}},methods:{contact:function(){this.$emit("formShow",this.info.qcid)},navigateToDetail:function(t){console.log(t),this.$router.push({name:"productDetail-id",params:{id:t.product_id}})}}},n=(r(1306),r(35)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("nuxt-link",{staticClass:"rank-list-item",attrs:{to:{name:"productDetail-id",params:{id:t.info.product_id}}}},[r("div",{staticClass:"pro-img"},[r("img",{attrs:{src:"https://via.placeholder.com/80",alt:t.categoryName+(t.info.factory_short_name||t.info.product_name)}})]),t._v(" "),r("div",{staticClass:"pro-info"},[r("div",{staticClass:"pro-name"},[r("div",{staticClass:"link"},[t._v("\n        "+t._s(t.info.product_name)+"\n      ")])]),t._v(" "),r("div",{staticClass:"pro-count g-flex space-between"},[t.info.ztgsnum?r("div",{staticClass:"g-flex"},[r("span",{staticClass:"score-box"},[t._v(t._s(t.info.ztgsnum)+"分")]),t._v(" "),r("Star",{attrs:{"out-width":100,"out-height":20,decimal:t.info.ztgsnum/5}})],1):r("div",[t._v("\n        暂时还没有人点评快来贡献您的专业见解吧！\n      ")]),t._v(" "),r("div",{staticClass:"pro-right"},[t.info.productnum>0?r("div",[t._v("\n          "+t._s(t.info.productnum)+"条有价值点评\n        ")]):r("div",{staticClass:"tab-btn"},[t._v("\n          马上去点评\n        ")])])]),t._v(" "),r("div",{staticClass:"pro-sub"},[r("div",{staticClass:"pro-left"}),t._v(" "),r("div",{staticClass:"pro-right"},[r("div",{staticClass:"tab-btn",on:{click:function(e){return e.stopPropagation(),t.contact(e)}}},[t._v("\n          请厂商联系我\n        ")])])])])])}),[],!1,null,"01a8a3a7",null);e.default=component.exports},1370:function(t,e,r){"use strict";r(1338)},1371:function(t,e,r){var o=r(77)(!1);o.push([t.i,".rank-list[data-v-14bfd459]{min-height:70vh}.sort-item-wrap[data-v-14bfd459]{padding-left:10px;border-top:1px solid #e5e5e5}.sort-item-wrap .sort-item[data-v-14bfd459]{font-size:13px;border:1px solid #8a8a8a;margin:25px 8px;border-radius:3px;color:#8a8a8a;position:relative;background-color:transparent;padding:7px 14px;cursor:pointer}.sort-item-wrap .sort-item.on[data-v-14bfd459]{background-color:#fffaf9;border:2px solid #df4c3e;color:#df4c3e}.sort-item-wrap .sort-item img.icon[data-v-14bfd459]{width:15px;height:10px;margin-right:5px}.sort-item-wrap .sort-item img.corner[data-v-14bfd459]{position:absolute;right:-1px;bottom:-1px;width:15px;height:13px}.view-wrap[data-v-14bfd459]{display:block;background-color:#fff;margin-bottom:10px;border-radius:4px;overflow:hidden;cursor:pointer;color:#222}",""]),t.exports=o},1399:function(t,e,r){"use strict";r.r(e);var o=r(22),n=(r(91),r(1350)),c=r(1272),d=r(1258),l=r(1268),f=r(1251),m=r(1252),v={components:{productOrder:n.default,contact:c.default,noData:d.default,rankListItem:l.default,rightNav:f.default,qrcode:m.default},watchQuery:["category_name"],asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var r,o,n,c,d,l,f,m,v,data,h,x;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=0,o=t.query.category_name,n=t.params.id,e.next=5,t.$requests.categoryHotCompany({ORDER_TYPE:r,CATEGORY_ID:n});case 5:return c=e.sent,d=200===c.status&&"success"===c.data.result?c.data.factoryQcList:[],e.next=9,t.$requests.categoryChallenger({ORDER_TYPE:r,CATEGORY_ID:n});case 9:return l=e.sent,f=200===l.status&&"success"===l.data.result?l.data.factoryQcList:[],e.next=13,t.$requests.categoryNoComment({CATEGORY_ID:n});case 13:return m=e.sent,v=200===m.status&&"success"===m.data.result?m.data.notScoreList:[],data={category_id:n,orders:0},e.next=18,t.$requests.indexSelectCatePro(data);case 18:return h=e.sent,x=200===h.status&&"success"===h.data.result?h.data.productlist:[],console.log("产品列表:",x),e.abrupt("return",{sortTabs:[{name:"按点评量排序",query:"reviewNum"},{name:"按口碑值排序",query:"avg"}],orderType:"reviewNum",productList:x,categoryName:o,categoryId:n,hotCompanyList:d,challengerList:f,noReviewList:v,formShow:!1,companyInfo:{}});case 22:case"end":return e.stop()}}),e)})))()},methods:{goToReview:function(){this.$message.warning("我要点评!")},navigateToRank:function(){this.$router.push({name:"company-id",params:{id:this.categoryId},query:{category_name:this.categoryName}})},formHandleShow:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function r(){var data,o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e.formShow=!0,data={CATEGORY_ID:e.categoryId,FACTORY_QCID:t},r.next=4,e.$requests.publicCompanyDetail(data);case 4:200===(o=r.sent).status&&"success"===o.data.result&&(e.companyInfo.categoryObj=o.data.categoryObj,e.companyInfo.factoryQcObj=o.data.factoryQcObj,e.companyInfo.factoryQcScoreObj=o.data.factoryQcScoreObj),console.log("厂商信息:",e.companyInfo);case 7:case"end":return r.stop()}}),r)})))()},formHandleHide:function(){this.formShow=!1},submitForm:function(data){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return data.CATEGORY_ID=t.companyInfo.categoryObj.CID||t.categoryId,data.CATEGORY_NAME=t.companyInfo.categoryObj.CNAME||t.categoryName,data.FACTORY_ID=t.companyInfo.factoryQcScoreObj.QCID||t.companyInfo.factoryQcScoreObj.FACTORY_SHORT_ID,data.FACTORY_NAME=t.companyInfo.factoryQcScoreObj.QCNAME||t.companyInfo.factoryQcScoreObj.FACTORY_SHORT_NAME,data.USER_ID="",e.next=7,t.$requests.productApply(data);case 7:200===(r=e.sent).status&&"success"===r.data.result?(t.$message.success("提交成功，我们会尽快通知厂商联系您!"),t.$refs.child.clear(),t.formShow=!1):(t.$message.error("提交失败，请稍后重试!"),t.formShow=!1);case 9:case"end":return e.stop()}}),e)})))()},handleSortTabClick:function(t,e){var r=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var data,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r.orderType!==e){t.next=4;break}return t.abrupt("return",!1);case 4:return r.orderType=e,data={category_id:r.categoryId,orders:"reviewNum"===r.orderType?0:1},t.next=8,r.$requests.indexSelectCatePro(data);case 8:o=t.sent,r.productList=200===o.status&&"success"===o.data.result?o.data.productlist:[];case 10:case"end":return t.stop()}}),t)})))()}},head:function(){return{title:this.categoryName+"系统口碑排名_"+this.categoryName+"软件点评_"+this.categoryName+"是什么意思？选型宝",meta:[{hid:"description",name:"description",content:"想了解"+this.categoryName+"系统用户口碑、"+this.categoryName+"软件怎么选、"+this.categoryName+"是什么意思？就上选型宝, 企业级软件的大众点评"},{hid:"keywords",name:"keywords",content:this.categoryName+"系统_"+this.categoryName+"软件_"+this.categoryName+"是什么意思？"}]}}},h=(r(1370),r(35)),component=Object(h.a)(v,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"mian"},[o("Header",{attrs:{"is-show":!0}}),t._v(" "),o("div",{staticClass:"container-index"},[o("a-row",[o("a-col",{attrs:{md:"24"}},[o("a-row",{staticClass:"g-wrapper",attrs:{gutter:[32,32]}},[o("a-col",{attrs:{span:"8",md:8}},[o("Slider",[o("div",{staticClass:"report-wrap",attrs:{slot:"report-txt"},slot:"report-txt"},[o("div",{staticClass:"txt1"},[t._v("\n                  "+t._s(t.categoryName)+"选型\n                ")]),t._v(" "),o("div",{staticClass:"txt2"},[t._v("\n                  用户口碑报告\n                ")])]),t._v(" "),o("div",{staticClass:"g-flex space-between",attrs:{slot:"slider-title"},on:{click:t.navigateToRank},slot:"slider-title"},[o("span",[t._v(t._s(t.categoryName)+"厂商口碑排名")]),t._v(" "),o("span",{staticStyle:{"font-size":"14px",color:"#a9a9a9",cursor:"pointer"}},[t._v("查看完整")])]),t._v(" "),t.hotCompanyList.length?o("div",{staticClass:"slider-nav-bar",attrs:{slot:"slider-nav-bar"},slot:"slider-nav-bar"},[o("h3",[t._v("热门厂商")]),t._v(" "),t._l(t.hotCompanyList,(function(e,r){return o("nuxt-link",{key:r,staticClass:"view-wrap",attrs:{to:{name:"reputation-id",params:{id:t.categoryId},query:{category_name:t.categoryName,factory_id:e.qcid}}}},[o("rankListItem",{attrs:{item:e,index:r}})],1)}))],2):t._e(),t._v(" "),t.challengerList.length?o("div",{staticClass:"slider-nav-bar",attrs:{slot:"slider-nav-bar"},slot:"slider-nav-bar"},[o("h3",[t._v("挑战者")]),t._v(" "),t._l(t.challengerList,(function(e,r){return o("nuxt-link",{key:r,staticClass:"view-wrap",attrs:{to:{name:"reputation-id",params:{id:t.categoryId},query:{category_name:t.categoryName,factory_id:e.qcid}}}},[o("rankListItem",{attrs:{item:e,index:r}})],1)}))],2):t._e(),t._v(" "),t.noReviewList.length?o("div",{staticClass:"slider-nav-bar",attrs:{slot:"slider-nav-bar"},slot:"slider-nav-bar"},[o("h3",[t._v("暂无点评的厂商")]),t._v(" "),t._l(t.noReviewList,(function(e,r){return o("nuxt-link",{key:r,staticClass:"view-wrap",attrs:{to:{name:"reputation-id",params:{id:t.categoryId},query:{category_name:t.categoryName,factory_id:e.qcid}}}},[o("div",{staticClass:"view"},[o("div",{staticClass:"g-flex space-between",staticStyle:{padding:"20px",width:"100%"}},[o("span",[t._v(t._s(e.factory_short_name||e.qcname))]),t._v(" "),o("span",{staticClass:"review-btn",on:{click:function(e){return e.stopPropagation(),t.goToReview(e)}}},[t._v("我要点评")])])])])}))],2):t._e()])],1),t._v(" "),o("a-col",{attrs:{span:"16"}},[o("a-row",{staticClass:"grey"},[o("a-col",{attrs:{span:"24"}},[o("h2",[t._v("\n                  "+t._s(t.categoryName)+"产品 用户口碑排名\n                ")]),t._v(" "),t.productList.length?o("div",{staticClass:"tab-nav"},[o("div",{staticClass:"sort-item-wrap g-flex"},t._l(t.sortTabs,(function(e,n){return o("div",{key:n,staticClass:"sort-item",class:e.query===t.orderType?"on":"",on:{click:function(r){return r.preventDefault(),r.stopPropagation(),t.handleSortTabClick(n,e.query)}}},[e.query===t.orderType?[o("img",{staticClass:"icon",attrs:{src:r(1331),alt:""}}),t._v(" "),o("img",{staticClass:"corner",attrs:{src:r(1332),alt:""}})]:[o("img",{staticClass:"icon",attrs:{src:r(1333),alt:""}})],t._v("\n                      "+t._s(e.name)+"\n                    ")],2)})),0)]):t._e(),t._v(" "),o("div",{staticClass:"rank-box"},[o("div",{staticClass:"rank-list"},[t.productList.length?o("div",{staticClass:"product-list"},t._l(t.productList,(function(e){return o("productOrder",{key:e.product_id,attrs:{info:e,"category-name":t.categoryName,"category-id":t.categoryId},on:{formShow:t.formHandleShow}})})),1):o("div",{staticStyle:{width:"100%",height:"400px"}},[o("no-data",[o("div",{staticStyle:{"font-size":"14px"},attrs:{slot:"txt"},slot:"txt"},[t._v("\n                          暂无产品排名~\n                        ")])])],1)])])])],1)],1)],1)],1)],1)],1),t._v(" "),o("contact",{ref:"child",attrs:{"form-show":t.formShow},on:{formHide:t.formHandleHide,submit:t.submitForm}}),t._v(" "),o("rightNav",[o("qrcode")],1),t._v(" "),o("Footer")],1)}),[],!1,null,"14bfd459",null);e.default=component.exports;installComponents(component,{Header:r(658).default,Slider:r(1262).default,Footer:r(1253).default})}}]);