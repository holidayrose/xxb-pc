(window.webpackJsonp=window.webpackJsonp||[]).push([[34,8,9,10,17,21,22,25],{1229:function(t,e,r){"use strict";var o=r(26),n=r(21),c=r(203),d=r(37),l=r(29),f=r(90),v=r(654),m=r(142),x=r(23),h=r(144),w=r(143).f,y=r(64).f,_=r(36).f,C=r(655).trim,k="Number",A=n.Number,I=A.prototype,N=f(h(I))==k,O=function(t){var e,r,o,n,c,d,l,code,f=m(t,!1);if("string"==typeof f&&f.length>2)if(43===(e=(f=C(f)).charCodeAt(0))||45===e){if(88===(r=f.charCodeAt(2))||120===r)return NaN}else if(48===e){switch(f.charCodeAt(1)){case 66:case 98:o=2,n=49;break;case 79:case 111:o=8,n=55;break;default:return+f}for(d=(c=f.slice(2)).length,l=0;l<d;l++)if((code=c.charCodeAt(l))<48||code>n)return NaN;return parseInt(c,o)}return+f};if(c(k,!A(" 0o1")||!A("0b1")||A("+0x1"))){for(var S,E=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof E&&(N?x((function(){I.valueOf.call(r)})):f(r)!=k)?v(new A(O(e)),r,E):O(e)},R=o?w(A):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),T=0;R.length>T;T++)l(A,S=R[T])&&!l(E,S)&&_(E,S,y(A,S));E.prototype=I,I.constructor=E,d(n,k,E)}},1230:function(t,e,r){var content=r(1235);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(78).default)("4d15eb30",content,!0,{sourceMap:!1})},1231:function(t,e,r){var content=r(1243);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(78).default)("41b5f5ba",content,!0,{sourceMap:!1})},1232:function(t,e,r){var content=r(1246);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(78).default)("93cf824e",content,!0,{sourceMap:!1})},1233:function(t,e,r){"use strict";r.r(e);r(1229);var o={name:"StarZoom",props:{outWidth:{type:Number,default:function(){return 0}},outHeight:{type:Number,default:function(){return 0}},decimal:{type:Number,default:function(){return 0}}},computed:{innerWidth:function(){return this.decimal*this.outWidth}}},n=(r(1234),r(35)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"star-wrap"}},[r("div",{staticClass:"star-default",style:{width:t.outWidth+"px",height:t.outHeight+"px"}},[r("div",{staticClass:"star-real",style:{width:t.innerWidth+"px",height:t.outHeight+"px"}})])])}),[],!1,null,"59cc2748",null);e.default=component.exports},1234:function(t,e,r){"use strict";r(1230)},1235:function(t,e,r){var o=r(77),n=r(301),c=r(1236),d=r(1237),l=o(!1),f=n(c),v=n(d);l.push([t.i,".star-default[data-v-59cc2748]{width:100px;height:20px;background:url("+f+");background-size:contain}.star-real[data-v-59cc2748]{width:80px;height:20px;background:url("+v+");background-size:contain}",""]),t.exports=l},1236:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAB0klEQVQ4T52UsWsTURzHv793F2kduoS8d0kWbzGB4FYHcYogOAhaHBxEEDfbP6BFV1Hprri5OAlSBUEQJIs46OYSW6EOIZf3S7ipQ9qmeT+5kh5JaMLVt929z/fDe7/f744wZ8VxvDQYDL6LCHzfv1IoFPZm4TRP1O12N5xzzxOGiNaNMZtnFrVarcVcLvcXgBmFbb/fD8Mw3D9NNvNEzLwqIi/HQ0T0yBjzOrOo0Wj41Wr1DxFdmArtNpvNSr1eP5qWkYgoa21VKXXROVcBUCGiSwCWZ9TjJ4BfIrJDRNu+72/n8/kdstZ+BXBtXtEz7DUSEQPQGeB5CFOv16sPh8NPAM7/j0xE+kR087hr7Xb7uud5HwEsnkUmIvvOuVvlcvlL2v4oim4opbYALGSRiciB53krWuvPxwM7Hup0Og+I6E0WkVLqodY6ZSdEURTdU0q9zSJyzt0vlUopOyGy1j4F8CSLCMCzIAhSdlqU1Oh2RtGHIAhWTtgJETP/FpFkusfXj1EtL4+/TCa7WCymbCpKPhVmPgDgjwK7AB4bY94lz8x8N7kOgHD0WznSWi8Q0fC0rr0noqsAXsRx/KpWqx1OneIcM68B2CCib8aYOyf7/wBiu6siH+XLgQAAAABJRU5ErkJggg=="},1237:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAB3ElEQVQ4T52TsWsTcRTHP+9nWhoHkUtqV7MYoXRTSns3tILgIGiFyw1FEDf1D7DoKlXclW4uLrkgVREEQQyYi6CbKNgIdXBJ2gsICm013pOE9mxim179bT/e5/fhy3vvJ/Q5zdnxQ9oaqLYRXdOJ4afB991w6ScKPXsO5HabMSrXLf/13X2LvroT6bQxX0BGOomg/qORyuXK5fWdZLsmCj3nKnBv+yOjesXyg4XEIp2aSjVHfn0GObr9kcLyh0YqP10ut3plomDq7vjxARk8BppHyANjwImd+6HvFN6Lag1hiZYuZcbe1CQs2C8ROdWv6XvVVPWVhAWngXBkL7h/XRuyWrCnBZ4hcvB/ZAprEkVnO1NruvZpNfIESO9HprBuiM5litUX8fhXXOeMMSwCQ0lkqmwcEJ2xisHzNt+1Ryvu5CVjzIMkIoHLmWIlZrtEq549K8jDJCI0upj1qzHbJQo95xZwM5lI57N+ELPdiQrOogjnE4ngcbZYmdliexN9gs5m/z3CW1QF5GTPd6kNFysxG4vaX6VZcDYQUptTWCbSG1Yp8Nv30Jv0UDMvQm6z3rKiypCU+P3P1ELPeaSobeBOPfp2f7T08WdXCnd0MJTD1wTmgCDrBxe26n8Ah+yh8Twu8rAAAAAASUVORK5CYII="},1238:function(t,e,r){t.exports=r.p+"img/wx-yh.bffc413.jpg"},1239:function(t,e,r){t.exports=r.p+"img/qrcode_dy.e488e10.jpg"},1240:function(t,e,r){t.exports=r.p+"img/qcrode.414b83a.jpg"},1241:function(t,e,r){t.exports=r.p+"img/qrcode_fw.8427576.jpg"},1242:function(t,e,r){"use strict";r(1231)},1243:function(t,e,r){var o=r(77),n=r(301),c=r(656),d=r(657),l=o(!1),f=n(c),v=n(d);l.push([t.i,".global-header[data-v-46a048b8]{border-bottom:1px solid #ddd;background-color:#fff;height:74px;line-height:74px}.global-header .logo-wrap[data-v-46a048b8]{margin-bottom:0}.global-header .logo[data-v-46a048b8]{width:99px;margin-right:15px}.global-header strong[data-v-46a048b8]{font-size:14px;color:#007dff}.global-header nav a.link[data-v-46a048b8]{color:#555;display:inline-flex;align-items:center;padding:0 15px}.icon[data-v-46a048b8]{display:inline-block;width:22px;height:22px;margin-right:6px}.review[data-v-46a048b8]{background-image:url("+f+")}.cate[data-v-46a048b8]{background-image:url("+v+")}.entry[data-v-46a048b8]{background-color:#ff492c;color:#fff;line-height:38px;padding:0 32px;border-radius:20px}*[data-v-46a048b8]{margin:0}*[data-v-46a048b8],ul[data-v-46a048b8]{padding:0}.g-wrapper[data-v-46a048b8]{width:100%;max-width:1200px!important;margin:0 auto!important}.g-flex[data-v-46a048b8]{display:flex}.g-flex.v-center[data-v-46a048b8]{flex-direction:column}.g-flex.center[data-v-46a048b8],.g-flex.v-center[data-v-46a048b8]{justify-content:center;align-items:center}.g-flex.space-between[data-v-46a048b8]{justify-content:space-between;align-items:center}.g-flex.space-around[data-v-46a048b8]{justify-content:space-around}.footer[data-v-46a048b8]{padding:60px 0 20px}.footer .footerInfo[data-v-46a048b8]{text-align:center}.footer .footerInfo .ca_text[data-v-46a048b8]{font-size:20px;color:#555}.footer .footerInfo .qc_text[data-v-46a048b8]{font-size:15px;color:#c1c1c1;padding-top:20px}.footer .qcrodeImg[data-v-46a048b8]{width:158px;margin-bottom:70px;margin-top:10px}.display-pc[data-v-46a048b8]{display:block}.display-flex[data-v-46a048b8]{display:flex}.display-m[data-v-46a048b8]{display:none}.text-c[data-v-46a048b8]{text-align:center}.report-wrap[data-v-46a048b8]{background-color:#007dff;font-size:20px;padding:40px 0;margin-bottom:10px}.report-wrap[data-v-46a048b8],.review-btn[data-v-46a048b8]{color:#fff;text-align:center}.review-btn[data-v-46a048b8]{padding:6px 12px;background-color:#ff492c;border-radius:4px}.check-comment[data-v-46a048b8]{padding:6px 18px;color:#007dff;border:1px solid #007dff;border-radius:16px;font-size:12px}.check-comment[data-v-46a048b8]:hover{background-color:#007dff;color:#fff}.contact-btn[data-v-46a048b8]{background-color:#773aff;color:#fff;padding:16px 0;text-align:center;margin-bottom:10px;cursor:pointer}@media (max-width:767px){.display-m[data-v-46a048b8]{display:flex}.display-flex[data-v-46a048b8],.display-pc[data-v-46a048b8]{display:none}}.beian[data-v-46a048b8]{background-color:#2d3237;padding:40px 0}.site-width[data-v-46a048b8]{padding:10px 0;width:100%;justify-content:center;font-size:12px;margin:0 auto}.site-width[data-v-46a048b8],.site-width a[data-v-46a048b8]{display:flex;align-items:center;color:#fff}.site-width a[data-v-46a048b8]{margin:0 34px}",""]),t.exports=l},1244:function(t,e,r){"use strict";r.r(e);var o={data:function(){return{cateInfo:[{text:"热门类别",title:"微信群",img:r(1238),path:"/all"},{text:"关于我们",title:"订阅号",img:r(1239),path:"/"},{text:"联系我们",title:"小程序",img:r(1240),path:"/"},{text:"加入我们",title:"服务号",img:r(1241),path:"/"}]}}},n=(r(1242),r(35)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("a-layout-footer",{staticClass:"footer"},[r("a-row",[r("a-col",[r("a-row",{staticClass:"g-wrapper",attrs:{getter:"16"}},t._l(t.cateInfo,(function(e,o){return r("a-col",{key:o,staticClass:"gutter-row footerInfo",attrs:{span:"6"}},[r("a",{staticClass:"ca_text",attrs:{href:e.path,title:e.text}},[t._v(t._s(e.text))]),t._v(" "),r("p",{staticClass:"qc_text"},[t._v("\n            "+t._s(e.title)+"\n          ")]),t._v(" "),r("img",{staticClass:"qcrodeImg",attrs:{src:e.img,alt:""}})])})),1)],1),t._v(" "),r("a-col",{staticClass:"beian"},[r("div",{staticClass:"site-width"},[r("p",[t._v("© 2021 选型宝，All Rights Reserved.")]),t._v(" "),r("p",[r("a",{attrs:{href:"#"}},[t._v("京ICP备14045422号-2 北京众智优选科技有限公司")])])]),t._v(" "),r("div",{staticClass:"site-width"},[r("p",[t._v("北京众智优选科技有限公司  地址：北京市朝阳区百子湾西里435号创富港436")])])])],1)],1)}),[],!1,null,"46a048b8",null);e.default=component.exports},1245:function(t,e,r){"use strict";r(1232)},1246:function(t,e,r){var o=r(77),n=r(301),c=r(1247),d=o(!1),l=n(c);d.push([t.i,".no-data-wrap[data-v-1feed65b]{width:100%;height:100%;background-image:url("+l+");background-size:197px 128px;background-repeat:no-repeat;background-position:50%;position:relative}.no-data-wrap .txt-wrap[data-v-1feed65b]{color:#a3a3a3;position:absolute;left:50%;bottom:20%;transform:translate(-50%,-50%)}",""]),t.exports=d},1247:function(t,e,r){t.exports=r.p+"img/nodata.814e089.png"},1248:function(t,e,r){"use strict";r.r(e);var o={},n=(r(1245),r(35)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"no-data-wrap"},[r("div",{staticClass:"txt-wrap"},[t._t("txt")],2)])}),[],!1,null,"1feed65b",null);e.default=component.exports},1249:function(t,e,r){var content=r(1257);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(78).default)("41c85ece",content,!0,{sourceMap:!1})},1250:function(t,e,r){var content=r(1268);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(78).default)("5ba9a028",content,!0,{sourceMap:!1})},1256:function(t,e,r){"use strict";r(1249)},1257:function(t,e,r){var o=r(77)(!1);o.push([t.i,".contact-wrap[data-v-639bcfa5]{position:fixed;left:0;right:0;top:0;bottom:0;z-index:10}.model[data-v-639bcfa5]{width:100%;height:100%;background-color:rgba(6,21,26,.67)}.form[data-v-639bcfa5]{position:absolute;top:50%;width:568px;padding:30px;left:50%;transform:translate(-50%,-50%);background-color:#fff}.note[data-v-639bcfa5]{color:#222;margin-bottom:10px}.note .h2[data-v-639bcfa5]{font-size:24px}.close-btn[data-v-639bcfa5]{position:absolute;right:30px;top:30px}[data-v-639bcfa5] .ant-form-item{margin-bottom:0}",""]),t.exports=o},1259:function(t,e,r){"use strict";r.r(e);var o={props:{formShow:{type:Boolean,default:function(){return!0}}},beforeCreate:function(){this.form=this.$form.createForm(this,{name:"register"})},methods:{handleSubmit:function(t){var e=this;t.preventDefault(),this.form.validateFieldsAndScroll((function(t,r){if(!t){var data={};data.REALNAME=r.nickname||"",data.NICKNAME=r.nickname||"",data.COMPANY=r.company||"",data.POSITION=r.title||"",data.USER_EMAIL=r.email||"",data.PHONE=r.phone||"",e.$emit("submit",data)}}))},close:function(){this.$emit("formHide")},clear:function(){this.form.resetFields()}}},n=(r(1256),r(35)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{directives:[{name:"show",rawName:"v-show",value:t.formShow,expression:"formShow"}],staticClass:"contact-wrap"},[r("div",{staticClass:"model"}),t._v(" "),r("div",{staticClass:"form"},[r("div",{staticClass:"note"},[r("div",{staticClass:"h2"},[t._v("\n        "+t._s(t.$configs.APPLY.FORM.ONE)+"\n      ")]),t._v(" "),r("div",[t._v(t._s(t.$configs.APPLY.FORM.TWO))])]),t._v(" "),r("div",{staticClass:"close-btn",on:{click:t.close}},[r("a-icon",{staticStyle:{"font-size":"24px"},attrs:{type:"close"}})],1),t._v(" "),r("a-form",{attrs:{form:t.form},on:{submit:t.handleSubmit}},[r("a-form-item",{attrs:{label:"姓名"}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["nickname",{rules:[{required:!0,min:2,max:8,message:"请按要求输入您的姓名!",whitespace:!0}]}],expression:"[\n            'nickname',\n            {\n              rules: [{ required: true, min: 2, max: 8, message: '请按要求输入您的姓名!', whitespace: true }],\n            },\n          ]"}],attrs:{placeholder:"输入2-8个汉字"}})],1),t._v(" "),r("a-form-item",{attrs:{label:"公司"}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["company",{rules:[{required:!0,message:"请填写公司!",whitespace:!0}]}],expression:"[\n            'company',\n            {\n              rules: [{ required: true, message: '请填写公司!', whitespace: true }],\n            },\n          ]"}],attrs:{placeholder:"请输入公司名称"}})],1),t._v(" "),r("a-form-item",{attrs:{label:"职位"}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["title",{rules:[{required:!0,message:"请填写职位!",whitespace:!0}]}],expression:"[\n            'title',\n            {\n              rules: [{ required: true, message: '请填写职位!', whitespace: true }],\n            },\n          ]"}],attrs:{placeholder:"请输入职位名称"}})],1),t._v(" "),r("a-form-item",{attrs:{label:"手机号"}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["phone",{rules:[{required:!0,pattern:"^[1]([3-9])[0-9]{9}$",message:"请输入合法手机号!",whitespace:!0}]}],expression:"[\n            'phone',\n            {\n              rules: [{ required: true, pattern: '^[1]([3-9])[0-9]{9}$',message: '请输入合法手机号!', whitespace: true }],\n            },\n          ]"}],attrs:{placeholder:"请输入11位手机号"}})],1),t._v(" "),r("a-form-item",{attrs:{label:"邮箱"}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["email",{rules:[{type:"email",message:"输入的邮箱无效!"},{required:!0,message:"请输入邮箱!"}]}],expression:"[\n            'email',\n            {\n              rules: [\n                {\n                  type: 'email',\n                  message: '输入的邮箱无效!',\n                },\n                {\n                  required: true,\n                  message: '请输入邮箱!',\n                },\n              ],\n            },\n          ]"}],attrs:{placeholder:"请输入有效邮箱"}})],1),t._v(" "),r("a-form-item",{staticStyle:{"text-align":"center"}},[r("a-button",{attrs:{type:"primary","html-type":"submit"}},[t._v("\n          提交\n        ")])],1)],1)],1)])}),[],!1,null,"639bcfa5",null);e.default=component.exports},1262:function(t,e,r){"use strict";r.r(e);var o=r(35),component=Object(o.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"slider-wrap"},[t._t("report-txt"),t._v(" "),r("div",[r("h2",{staticClass:"slider-title"},[t._t("slider-title")],2),t._v(" "),r("div",[t._t("slider-nav-bar")],2)])],2)}),[],!1,null,null,null);e.default=component.exports},1266:function(t,e,r){var content=r(1304);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(78).default)("7d5ae03c",content,!0,{sourceMap:!1})},1267:function(t,e,r){"use strict";r(1250)},1268:function(t,e,r){var o=r(77)(!1);o.push([t.i,".link[data-v-d40efb78]{color:#222;transition:.5s}.link[data-v-d40efb78]:hover{color:#007dff;text-decoration:underline}.view[data-v-d40efb78]{width:100%;display:flex;justify-content:flex-start}.view .range[data-v-d40efb78]{width:10%;position:relative;color:#fff;background-color:#92b2f1}.view .range span[data-v-d40efb78]{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%)}.view.c1 .range[data-v-d40efb78]{background-color:#f55b53}.view.c1 .score-box[data-v-d40efb78]{background-color:#f55c53!important}.view.c2 .range[data-v-d40efb78]{background-color:#f2ab38}.view.c2 .score-box[data-v-d40efb78]{background-color:#f2ab38!important}.view.c3 .range[data-v-d40efb78]{background-color:#5fcd81}.view.c3 .score-box[data-v-d40efb78]{background-color:#5fcd81!important}.view .info[data-v-d40efb78]{width:calc(90% - 40px);padding:10px 20px}.view .info .title[data-v-d40efb78]{font-size:17px;font-weight:700;margin-bottom:10px}.view .info .score[data-v-d40efb78]{display:flex;flex-direction:row;justify-content:space-between}.view .info .score .score-box[data-v-d40efb78]{background-color:#90b2f1;color:#fff;padding:2px 4px;border-radius:4px}.view .info .bar-box[data-v-d40efb78]{width:218px;height:13px;margin:10px 0;background-color:#e6e6e6;border-radius:50px}.view .info .bar-box .bar[data-v-d40efb78]{height:13px;display:flex;justify-content:space-between;align-items:center;width:0;box-sizing:border-box;padding:0 10px;border-radius:50px;transition:width .8s ease-in-out}.view .info .bar-box .bar.s1[data-v-d40efb78]{background:#f55a53;background:linear-gradient(90deg,#f55a53,#eb8a5d)}.view .info .bar-box .bar.s2[data-v-d40efb78]{background:#f2a937;background:linear-gradient(90deg,#f2a937,#ebd458)}.view .info .bar-box .bar.s3[data-v-d40efb78]{background:#5ecd80;background:linear-gradient(90deg,#5ecd80,#80cca5)}.view .info .bar-box .bar.s4[data-v-d40efb78]{background:#37a2f1;background:linear-gradient(90deg,#8fb1f0,#a3baf9)}",""]),t.exports=o},1290:function(t,e,r){"use strict";r.r(e);r(1229);var o={props:{index:{type:Number,default:function(){return 0}},item:{type:Object,default:function(){return null}}}},n=(r(1267),r(35)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"view",class:t.index<3?"c"+(t.index+1):"c4"},[r("div",{staticClass:"range"},[r("span",[t._v("\n      "+t._s(t.index+1)+"\n    ")])]),t._v(" "),r("div",{staticClass:"info"},[r("div",{staticClass:"title"},[r("div",{staticClass:"link"},[t._v("\n        "+t._s(t.item.factory_short_name)+"\n      ")])]),t._v(" "),r("div",{staticClass:"score"},[r("div",{staticClass:"score-box"},[t._v("\n        "+t._s(t.item.avgNum)+"分\n      ")]),t._v(" "),r("div",{staticClass:"comment"},[r("span",[t._v("\n          "+t._s(t.item.dpnum)+"条\n        ")]),t._v(" "),r("span",[t._v("\n          有价值点评\n        ")])])]),t._v(" "),r("div",{staticClass:"bar-box"},[r("div",{staticClass:"bar",class:t.index<3?"s"+(t.index+1):"s4",staticStyle:{width:"50%"}})])])])}),[],!1,null,"d40efb78",null);e.default=component.exports},1294:function(t,e,r){t.exports=r.p+"img/px_1.84fa148.png"},1295:function(t,e,r){t.exports=r.p+"img/px_3.677e736.png"},1296:function(t,e,r){t.exports=r.p+"img/px_2.460331d.png"},1303:function(t,e,r){"use strict";r(1266)},1304:function(t,e,r){var o=r(77)(!1);o.push([t.i,".link[data-v-6e798057]{color:#222;transition:.5s}.link[data-v-6e798057]:hover{color:#007dff;text-decoration:underline}.tab-btn[data-v-6e798057]{width:110px;color:#007dff;border:1px solid #007dff;padding:4px 14px;text-align:center;border-radius:16px;font-size:13px;margin:4px;cursor:pointer}.tab-btn[data-v-6e798057]:hover{background-color:#007dff;color:#fff}.pro-right[data-v-6e798057]{width:110px;text-align:center}.rank-list-item[data-v-6e798057]{display:flex;flex-direction:row;padding:20px;background-color:#fff;overflow:hidden;border-radius:4px;margin-bottom:10px;cursor:pointer}.rank-list-item .pro-img[data-v-6e798057]{width:20%;text-align:left;padding:8px 0}.rank-list-item .pro-img img[data-v-6e798057]{width:100px;height:100px}.rank-list-item .pro-info[data-v-6e798057]{width:80%}.rank-list-item .pro-info .pro-name[data-v-6e798057]{font-size:14px;font-weight:700;padding:6px 0}.rank-list-item .pro-info .score-box[data-v-6e798057]{padding:2px 4px;background-color:#ff492c;color:#fff;border-radius:4px;margin-right:10px}.rank-list-item .pro-info .pro-sub[data-v-6e798057]{margin-top:10px;display:flex;flex-direction:row;justify-content:space-between}.rank-list-item .pro-info .pro-sub .pro-compare[data-v-6e798057]{margin-top:10px}.rank-list-item .pro-info .pro-sub .pro-compare button[data-v-6e798057]{display:inline-block;width:20px;height:20px;margin-right:10px}",""]),t.exports=o},1332:function(t,e,r){var content=r(1366);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(78).default)("620e9bed",content,!0,{sourceMap:!1})},1345:function(t,e,r){"use strict";r.r(e);var o={name:"ProductOrder",components:{Star:r(1233).default},props:{info:{type:Object,default:function(){return{}}},companyInfo:{type:Object,default:function(){return{}}},categoryId:{type:String,default:function(){return""}},categoryName:{type:String,default:function(){return""}}},methods:{contact:function(){this.$emit("formShow",this.info.qcid)},navigateToDetail:function(t){console.log(t),this.$router.push({name:"productDetail-id",params:{id:t.product_id}})}}},n=(r(1303),r(35)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"rank-list-item",on:{click:function(e){return t.navigateToDetail(t.info)}}},[r("div",{staticClass:"pro-img"},[r("img",{attrs:{src:"https://via.placeholder.com/80",alt:t.categoryName+(t.info.factory_short_name||t.info.product_name)}})]),t._v(" "),r("div",{staticClass:"pro-info"},[r("div",{staticClass:"pro-name"},[r("div",{staticClass:"link"},[t._v("\n        "+t._s(t.info.product_name)+"\n      ")])]),t._v(" "),r("div",{staticClass:"pro-count g-flex space-between"},[t.info.ztgsnum?r("div",{staticClass:"g-flex"},[r("span",{staticClass:"score-box"},[t._v(t._s(t.info.ztgsnum)+"分")]),t._v(" "),r("Star",{attrs:{"out-width":100,"out-height":20,decimal:t.info.ztgsnum/5}})],1):r("div",[t._v("\n        暂时还没有人点评快来贡献您的专业见解吧！\n      ")]),t._v(" "),r("div",{staticClass:"pro-right"},[t.info.productnum>0?r("div",[t._v("\n          "+t._s(t.info.productnum)+"条有价值点评\n        ")]):r("div",{staticClass:"tab-btn"},[t._v("\n          马上去点评\n        ")])])]),t._v(" "),r("div",{staticClass:"pro-sub"},[r("div",{staticClass:"pro-left"}),t._v(" "),r("div",{staticClass:"pro-right"},[r("div",{staticClass:"tab-btn",on:{click:function(e){return e.stopPropagation(),t.contact(e)}}},[t._v("\n          请厂商联系我\n        ")])])])])])}),[],!1,null,"6e798057",null);e.default=component.exports},1365:function(t,e,r){"use strict";r(1332)},1366:function(t,e,r){var o=r(77)(!1);o.push([t.i,".rank-list[data-v-433e1b06]{min-height:70vh}.sort-item-wrap[data-v-433e1b06]{padding-left:10px;border-top:1px solid #e5e5e5}.sort-item-wrap .sort-item[data-v-433e1b06]{font-size:13px;border:1px solid #8a8a8a;margin:25px 8px;border-radius:3px;color:#8a8a8a;position:relative;background-color:transparent;padding:7px 14px;cursor:pointer}.sort-item-wrap .sort-item.on[data-v-433e1b06]{background-color:#fffaf9;border:2px solid #df4c3e;color:#df4c3e}.sort-item-wrap .sort-item img.icon[data-v-433e1b06]{width:15px;height:10px;margin-right:5px}.sort-item-wrap .sort-item img.corner[data-v-433e1b06]{position:absolute;right:-1px;bottom:-1px;width:15px;height:13px}.view-wrap[data-v-433e1b06]{background-color:#fff;margin-bottom:10px;border-radius:4px;overflow:hidden;cursor:pointer}",""]),t.exports=o},1394:function(t,e,r){"use strict";r.r(e);var o=r(22),n=(r(91),r(1345)),c=r(1259),d=r(1248),l=r(1290),f={components:{productOrder:n.default,contact:c.default,noData:d.default,rankListItem:l.default},watchQuery:["category_name"],asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var r,o,n,c,d,l,f,v,m,data,x,h;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=0,o=t.query.category_name,n=t.params.id,e.next=5,t.$requests.categoryHotCompany({ORDER_TYPE:r,CATEGORY_ID:n});case 5:return c=e.sent,d=200===c.status&&"success"===c.data.result?c.data.factoryQcList:[],e.next=9,t.$requests.categoryChallenger({ORDER_TYPE:r,CATEGORY_ID:n});case 9:return l=e.sent,f=200===l.status&&"success"===l.data.result?l.data.factoryQcList:[],e.next=13,t.$requests.categoryNoComment({CATEGORY_ID:n});case 13:return v=e.sent,m=200===v.status&&"success"===v.data.result?v.data.notScoreList:[],data={category_id:n,orders:0},e.next=18,t.$requests.indexSelectCatePro(data);case 18:return x=e.sent,h=200===x.status&&"success"===x.data.result?x.data.productlist:[],console.log("产品列表:",h),e.abrupt("return",{sortTabs:[{name:"按点评量排序",query:"reviewNum"},{name:"按口碑值排序",query:"avg"}],orderType:"reviewNum",productList:h,categoryName:o,categoryId:n,hotCompanyList:d,challengerList:f,noReviewList:m,formShow:!1,companyInfo:{}});case 22:case"end":return e.stop()}}),e)})))()},methods:{goToReview:function(){this.$message.warning("我要点评!")},navigateToRank:function(){this.$router.push({name:"company-id",params:{id:this.categoryId},query:{category_name:this.categoryName}})},navigateToReputation:function(t){this.$router.push({name:"reputation-id",params:{id:this.categoryId},query:{category_name:this.categoryName,factory_id:t.qcid}})},formHandleShow:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function r(){var data,o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e.formShow=!0,data={CATEGORY_ID:e.categoryId,FACTORY_QCID:t},r.next=4,e.$requests.publicCompanyDetail(data);case 4:200===(o=r.sent).status&&"success"===o.data.result&&(e.companyInfo.categoryObj=o.data.categoryObj,e.companyInfo.factoryQcObj=o.data.factoryQcObj,e.companyInfo.factoryQcScoreObj=o.data.factoryQcScoreObj),console.log("厂商信息:",e.companyInfo);case 7:case"end":return r.stop()}}),r)})))()},formHandleHide:function(){this.formShow=!1},submitForm:function(data){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return data.CATEGORY_ID=t.companyInfo.categoryObj.CID||t.categoryId,data.CATEGORY_NAME=t.companyInfo.categoryObj.CNAME||t.categoryName,data.FACTORY_ID=t.companyInfo.factoryQcScoreObj.QCID||t.companyInfo.factoryQcScoreObj.FACTORY_SHORT_ID,data.FACTORY_NAME=t.companyInfo.factoryQcScoreObj.QCNAME||t.companyInfo.factoryQcScoreObj.FACTORY_SHORT_NAME,data.USER_ID="",e.next=7,t.$requests.productApply(data);case 7:200===(r=e.sent).status&&"success"===r.data.result?(t.$message.success("提交成功，我们会尽快通知厂商联系您!"),t.$refs.child.clear(),t.formShow=!1):(t.$message.error("提交失败，请稍后重试!"),t.formShow=!1);case 9:case"end":return e.stop()}}),e)})))()},handleSortTabClick:function(t,e){var r=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var data,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r.orderType!==e){t.next=4;break}return t.abrupt("return",!1);case 4:return r.orderType=e,data={category_id:r.categoryId,orders:"reviewNum"===r.orderType?0:1},t.next=8,r.$requests.indexSelectCatePro(data);case 8:o=t.sent,r.productList=200===o.status&&"success"===o.data.result?o.data.productlist:[];case 10:case"end":return t.stop()}}),t)})))()}},head:function(){return{title:this.categoryName+"系统口碑排名_"+this.categoryName+"软件点评_"+this.categoryName+"是什么意思？选型宝",meta:[{hid:"description",name:"description",content:"想了解"+this.categoryName+"系统用户口碑、"+this.categoryName+"软件怎么选、"+this.categoryName+"是什么意思？就上选型宝, 企业级软件的大众点评"},{hid:"keywords",name:"keywords",content:this.categoryName+"系统_"+this.categoryName+"软件_"+this.categoryName+"是什么意思？"}]}}},v=(r(1365),r(35)),component=Object(v.a)(f,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"mian"},[o("Header",{attrs:{"is-show":!0}}),t._v(" "),o("div",{staticClass:"container-index"},[o("a-row",[o("a-col",{attrs:{md:"24"}},[o("a-row",{staticClass:"g-wrapper",attrs:{gutter:[32,32]}},[o("a-col",{attrs:{span:"8",md:8}},[o("Slider",[o("div",{staticClass:"report-wrap",attrs:{slot:"report-txt"},slot:"report-txt"},[o("div",{staticClass:"txt1"},[t._v("\n                  "+t._s(t.categoryName)+"选型\n                ")]),t._v(" "),o("div",{staticClass:"txt2"},[t._v("\n                  用户口碑报告\n                ")])]),t._v(" "),o("div",{staticClass:"g-flex space-between",attrs:{slot:"slider-title"},on:{click:t.navigateToRank},slot:"slider-title"},[o("span",[t._v(t._s(t.categoryName)+"厂商口碑排名")]),t._v(" "),o("span",{staticStyle:{"font-size":"14px",color:"#a9a9a9",cursor:"pointer"}},[t._v("查看完整")])]),t._v(" "),t.hotCompanyList.length?o("div",{staticClass:"slider-nav-bar",attrs:{slot:"slider-nav-bar"},slot:"slider-nav-bar"},[o("h3",[t._v("热门厂商")]),t._v(" "),t._l(t.hotCompanyList,(function(e,r){return o("div",{key:r,staticClass:"view-wrap",on:{click:function(r){return t.navigateToReputation(e)}}},[o("rankListItem",{attrs:{item:e,index:r}})],1)}))],2):t._e(),t._v(" "),t.challengerList.length?o("div",{staticClass:"slider-nav-bar",attrs:{slot:"slider-nav-bar"},slot:"slider-nav-bar"},[o("h3",[t._v("挑战者")]),t._v(" "),t._l(t.challengerList,(function(e,r){return o("div",{key:r,staticClass:"view-wrap",on:{click:function(r){return t.navigateToReputation(e)}}},[o("rankListItem",{attrs:{item:e,index:r}})],1)}))],2):t._e(),t._v(" "),t.noReviewList.length?o("div",{staticClass:"slider-nav-bar",attrs:{slot:"slider-nav-bar"},slot:"slider-nav-bar"},[o("h3",[t._v("暂无点评的厂商")]),t._v(" "),t._l(t.noReviewList,(function(e,r){return o("div",{key:r,staticClass:"view-wrap",on:{click:function(r){return t.navigateToReputation(e)}}},[o("div",{staticClass:"view"},[o("div",{staticClass:"g-flex space-between",staticStyle:{padding:"20px",width:"100%"}},[o("span",[t._v(t._s(e.factory_short_name||e.qcname))]),t._v(" "),o("span",{staticClass:"review-btn",on:{click:function(e){return e.stopPropagation(),t.goToReview(e)}}},[t._v("我要点评")])])])])}))],2):t._e()])],1),t._v(" "),o("a-col",{attrs:{span:"16"}},[o("a-row",{staticClass:"grey"},[o("a-col",{attrs:{span:"24"}},[o("h2",[t._v("\n                  "+t._s(t.categoryName)+"产品 用户口碑排名\n                ")]),t._v(" "),t.productList.length?o("div",{staticClass:"tab-nav"},[o("div",{staticClass:"sort-item-wrap g-flex"},t._l(t.sortTabs,(function(e,n){return o("div",{key:n,staticClass:"sort-item",class:e.query===t.orderType?"on":"",on:{click:function(r){return r.preventDefault(),r.stopPropagation(),t.handleSortTabClick(n,e.query)}}},[e.query===t.orderType?[o("img",{staticClass:"icon",attrs:{src:r(1294),alt:""}}),t._v(" "),o("img",{staticClass:"corner",attrs:{src:r(1295),alt:""}})]:[o("img",{staticClass:"icon",attrs:{src:r(1296),alt:""}})],t._v("\n                      "+t._s(e.name)+"\n                    ")],2)})),0)]):t._e(),t._v(" "),o("div",{staticClass:"rank-box"},[o("div",{staticClass:"rank-list"},[t.productList.length?o("div",{staticClass:"product-list"},t._l(t.productList,(function(e){return o("productOrder",{key:e.product_id,attrs:{info:e,"category-name":t.categoryName,"category-id":t.categoryId},on:{formShow:t.formHandleShow}})})),1):o("div",{staticStyle:{width:"100%",height:"400px"}},[o("no-data",[o("div",{staticStyle:{"font-size":"14px"},attrs:{slot:"txt"},slot:"txt"},[t._v("\n                          暂无产品排名~\n                        ")])])],1)])])])],1)],1)],1)],1)],1)],1),t._v(" "),o("contact",{ref:"child",attrs:{"form-show":t.formShow},on:{formHide:t.formHandleHide,submit:t.submitForm}}),t._v(" "),o("Footer")],1)}),[],!1,null,"433e1b06",null);e.default=component.exports;installComponents(component,{Header:r(658).default,Slider:r(1262).default,Footer:r(1244).default})}}]);