(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{1036:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAYAAAAWGF8bAAACYUlEQVQ4T5VUO2hUQRQ9Z9CNK9oFFKslWlkEJDYGwWgVTHgq781qoy4aCCImoiBJKZKghQZExSIJSEzz5g1+EBK1WVArXSz8gETIxkKLbOmCoM6VWfaFddmImXLm3DP33HvuJVqcQqGwoVqtahE5CGAPyW112DcArwE8Wl5eNsVi8UdzOJsvoig6QfIqgI0i8pDkC+fckseRzAHYS/IwgKqIXEqSZLaRY4Wwp6dnXXt7+ySAYyTHAdwwxnxvpSAIgs2ZTOYCgFEAs5VKZbBYLP6qfVoPYBRFsyT3A+g3xpRaETXfhWG4Wyn1RESeJ0lyfIUwn88PicgV51y3tfZDGtjV1bW+o6NjAEAvAHHOzZfL5alSqfQzxYRh2EnypYiMWmtvMwiCLW1tbZ+dc8PW2ukUqLXOAJgH4LN+D0AB2CkizyqVSl8q0eO11qdFZILkdi91jGRgjOn0WaSE+Xz+rIjccs4VrLX30kAAk865M9bauw0lUFrrdyJiqbVeInk9juObjTXSWj8GkKt/tPKktf4I4JMx5kgjPoqi8ySHPOEX59w1r38NhAvGmEMtCM95yeMk+4wxuwC4ZskkC3Ec1ySHYXhKKTW1mmQAic9wK4AFksNxHDc3ZQ7Agf9pivctgB01H2qthwFcBtBtjPE1qh1vm1wuN6CU6hUR37C5xcXF6Va2ATCSJMmdZmPvc871W2vfrsXYJJ/GcXyycVKQjh7JoyIyls1mJ2ZmZqqtiLXWm0Tkoh89kvcBDBpjfv9FmAamy0FEskqpByLySkTKIsI1LYfGTFZbXyLyleSbf62vP5BCRv/412q1AAAAAElFTkSuQmCC"},1066:function(t,e,l){"use strict";l.r(e);var c={name:"Case",props:{caseList:{type:Array,default:function(){return[]}}}},n=l(86),component=Object(n.a)(c,(function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("a-row",{staticClass:"article-list",attrs:{gutter:32}},t._l(t.caseList,(function(e){return c("a-col",{key:e.case_id,staticClass:"article-item",attrs:{md:12,sm:24,xs:24}},[c("nuxt-link",{staticClass:"link",attrs:{to:{name:"case-id",params:{id:e.case_id}},target:"_blank"}},[c("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.head_image,expression:"item.head_image"}],staticClass:"case-img",attrs:{alt:e.title}})]),t._v(" "),c("div",{staticClass:"detail g-flex"},[c("div",{staticClass:"top"},[c("nuxt-link",{staticClass:"link",attrs:{to:{name:"case-id",params:{id:e.case_id}},target:"_blank"}},[c("div",{staticClass:"title"},[t._v("\n            "+t._s(e.title)+"\n          ")])])],1),t._v(" "),c("div",{staticClass:"info g-flex"},[c("div",{staticClass:"views g-flex center"},[c("img",{attrs:{src:l(1036),alt:""}}),t._v(" "),c("span",[t._v(t._s(e.browsenum||0))])]),t._v(" "),c("div",{staticClass:"time"},[t._v("\n          "+t._s(e.time_created)+"\n        ")])])])],1)})),1)}),[],!1,null,null,null);e.default=component.exports}}]);