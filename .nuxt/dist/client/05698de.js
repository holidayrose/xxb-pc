(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{1281:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAYAAAAWGF8bAAACYUlEQVQ4T5VUO2hUQRQ9Z9CNK9oFFKslWlkEJDYGwWgVTHgq781qoy4aCCImoiBJKZKghQZExSIJSEzz5g1+EBK1WVArXSz8gETIxkKLbOmCoM6VWfaFddmImXLm3DP33HvuJVqcQqGwoVqtahE5CGAPyW112DcArwE8Wl5eNsVi8UdzOJsvoig6QfIqgI0i8pDkC+fckseRzAHYS/IwgKqIXEqSZLaRY4Wwp6dnXXt7+ySAYyTHAdwwxnxvpSAIgs2ZTOYCgFEAs5VKZbBYLP6qfVoPYBRFsyT3A+g3xpRaETXfhWG4Wyn1RESeJ0lyfIUwn88PicgV51y3tfZDGtjV1bW+o6NjAEAvAHHOzZfL5alSqfQzxYRh2EnypYiMWmtvMwiCLW1tbZ+dc8PW2ukUqLXOAJgH4LN+D0AB2CkizyqVSl8q0eO11qdFZILkdi91jGRgjOn0WaSE+Xz+rIjccs4VrLX30kAAk865M9bauw0lUFrrdyJiqbVeInk9juObjTXSWj8GkKt/tPKktf4I4JMx5kgjPoqi8ySHPOEX59w1r38NhAvGmEMtCM95yeMk+4wxuwC4ZskkC3Ec1ySHYXhKKTW1mmQAic9wK4AFksNxHDc3ZQ7Agf9pivctgB01H2qthwFcBtBtjPE1qh1vm1wuN6CU6hUR37C5xcXF6Va2ATCSJMmdZmPvc871W2vfrsXYJJ/GcXyycVKQjh7JoyIyls1mJ2ZmZqqtiLXWm0Tkoh89kvcBDBpjfv9FmAamy0FEskqpByLySkTKIsI1LYfGTFZbXyLyleSbf62vP5BCRv/412q1AAAAAElFTkSuQmCC"},1286:function(t,e,c){var content=c(1314);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,c(78).default)("4648c962",content,!0,{sourceMap:!1})},1313:function(t,e,c){"use strict";c(1286)},1314:function(t,e,c){var r=c(77)(!1);r.push([t.i,".article-item[data-v-5317c8c2]{padding:12px 0;cursor:pointer}.article-item[data-v-5317c8c2]:hover{box-shadow:5px 4px 15px 0 rgba(0,0,0,.1);border-radius:4px}.case-img[data-v-5317c8c2]{width:260px;height:154px;border-radius:4px}.detail[data-v-5317c8c2]{margin-left:24px;flex-direction:column;max-width:530px}.detail .top[data-v-5317c8c2]{flex:1}.detail .title[data-v-5317c8c2]{font-size:18px;color:#222;transition:.5s;margin-bottom:10px}.detail .title[data-v-5317c8c2]:hover{color:#007dff;text-decoration:underline}.detail .tags>span[data-v-5317c8c2]{display:inline-block;margin-bottom:4px;padding:4px 8px;color:#ff492c;border:1px solid #ff492c;border-radius:20px;font-size:12px}.views img[data-v-5317c8c2]{width:16px;margin-right:4px}.time[data-v-5317c8c2]{font-size:14px;color:#a3a3a3;margin-left:20px}",""]),t.exports=r},1342:function(t,e,c){"use strict";c.r(e);var r={name:"Case",props:{caseList:{type:Array,default:function(){return[]}}},methods:{navigateToDetail:function(t){this.$router.push({name:"newsCase-id",params:{id:t.case_id},query:{type:"case"}})}}},n=(c(1313),c(35)),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("a-row",{staticClass:"article-list",attrs:{gutter:32}},t._l(t.caseList,(function(e){return r("a-col",{key:e.case_id,staticClass:"article-item g-flex",attrs:{span:"12"},on:{click:function(c){return t.navigateToDetail(e)}}},[r("div",{staticClass:"link"},[r("img",{staticClass:"case-img",attrs:{src:e.head_image,alt:""}})]),t._v(" "),r("div",{staticClass:"detail g-flex"},[r("div",{staticClass:"top"},[r("div",{staticClass:"link"},[r("div",{staticClass:"title"},[t._v("\n            "+t._s(e.title)+"\n          ")])]),t._v(" "),r("div",{staticClass:"tags"},[r("span",[t._v(t._s(e.category_name))]),t._v(" "),r("span",[t._v(t._s(e.industry))]),t._v(" "),e.factory_short_name?r("span",[t._v(t._s(e.factory_short_name))]):t._e()])]),t._v(" "),r("div",{staticClass:"info g-flex"},[r("div",{staticClass:"views g-flex center"},[r("img",{attrs:{src:c(1281),alt:""}}),t._v(" "),r("span",[t._v(t._s(e.browsenum||0))])]),t._v(" "),r("div",{staticClass:"time"},[t._v("\n          "+t._s(e.time_created)+"\n        ")])])])])})),1)}),[],!1,null,"5317c8c2",null);e.default=component.exports}}]);