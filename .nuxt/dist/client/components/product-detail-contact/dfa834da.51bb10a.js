(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{1036:function(e,t,r){"use strict";r.r(t);var n={props:{formShow:{type:Boolean,default:function(){return!0}}},beforeCreate:function(){this.form=this.$form.createForm(this,{name:"register"})},methods:{handleSubmit:function(e){var t=this;e.preventDefault(),this.form.validateFieldsAndScroll((function(e,r){if(!e){var data={};data.REALNAME=r.nickname||"",data.NICKNAME=r.nickname||"",data.COMPANY=r.company||"",data.POSITION=r.title||"",data.USER_EMAIL=r.email||"",data.PHONE=r.phone||"",t.$emit("submit",data)}}))},close:function(){this.$emit("formHide")},clear:function(){this.form.resetFields()}}},o=r(86),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{directives:[{name:"show",rawName:"v-show",value:e.formShow,expression:"formShow"}],staticClass:"contact-wrap"},[r("div",{staticClass:"model"}),e._v(" "),r("div",{staticClass:"form"},[r("div",{staticClass:"note"},[r("div",{staticClass:"h2"},[e._v("\n        "+e._s(e.$configs.APPLY.FORM.ONE)+"\n      ")]),e._v(" "),r("div",[e._v(e._s(e.$configs.APPLY.FORM.TWO))])]),e._v(" "),r("div",{staticClass:"close-btn",on:{click:e.close}},[r("a-icon",{staticStyle:{"font-size":"24px"},attrs:{type:"close"}})],1),e._v(" "),r("a-form",{attrs:{form:e.form},on:{submit:e.handleSubmit}},[r("a-form-item",{attrs:{label:"姓名"}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["nickname",{rules:[{required:!0,min:2,max:8,message:"请按要求输入您的姓名!",whitespace:!0}]}],expression:"[\n            'nickname',\n            {\n              rules: [{ required: true, min: 2, max: 8, message: '请按要求输入您的姓名!', whitespace: true }],\n            },\n          ]"}],attrs:{placeholder:"输入2-8个汉字"}})],1),e._v(" "),r("a-form-item",{attrs:{label:"公司"}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["company",{rules:[{required:!0,message:"请填写公司!",whitespace:!0}]}],expression:"[\n            'company',\n            {\n              rules: [{ required: true, message: '请填写公司!', whitespace: true }],\n            },\n          ]"}],attrs:{placeholder:"请输入公司名称"}})],1),e._v(" "),r("a-form-item",{attrs:{label:"职位"}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["title",{rules:[{required:!0,message:"请填写职位!",whitespace:!0}]}],expression:"[\n            'title',\n            {\n              rules: [{ required: true, message: '请填写职位!', whitespace: true }],\n            },\n          ]"}],attrs:{placeholder:"请输入职位名称"}})],1),e._v(" "),r("a-form-item",{attrs:{label:"手机号"}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["phone",{rules:[{required:!0,pattern:"^[1]([3-9])[0-9]{9}$",message:"请输入合法手机号!",whitespace:!0}]}],expression:"[\n            'phone',\n            {\n              rules: [{ required: true, pattern: '^[1]([3-9])[0-9]{9}$',message: '请输入合法手机号!', whitespace: true }],\n            },\n          ]"}],attrs:{placeholder:"请输入11位手机号"}})],1),e._v(" "),r("a-form-item",{attrs:{label:"邮箱"}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["email",{rules:[{type:"email",message:"输入的邮箱无效!"},{required:!0,message:"请输入邮箱!"}]}],expression:"[\n            'email',\n            {\n              rules: [\n                {\n                  type: 'email',\n                  message: '输入的邮箱无效!',\n                },\n                {\n                  required: true,\n                  message: '请输入邮箱!',\n                },\n              ],\n            },\n          ]"}],attrs:{placeholder:"请输入有效邮箱"}})],1),e._v(" "),r("a-form-item",{staticStyle:{"text-align":"center"}},[r("a-button",{attrs:{type:"primary","html-type":"submit"}},[e._v("\n          提交\n        ")])],1)],1)],1)])}),[],!1,null,null,null);t.default=component.exports}}]);