(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{1281:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAYAAAAWGF8bAAACYUlEQVQ4T5VUO2hUQRQ9Z9CNK9oFFKslWlkEJDYGwWgVTHgq781qoy4aCCImoiBJKZKghQZExSIJSEzz5g1+EBK1WVArXSz8gETIxkKLbOmCoM6VWfaFddmImXLm3DP33HvuJVqcQqGwoVqtahE5CGAPyW112DcArwE8Wl5eNsVi8UdzOJsvoig6QfIqgI0i8pDkC+fckseRzAHYS/IwgKqIXEqSZLaRY4Wwp6dnXXt7+ySAYyTHAdwwxnxvpSAIgs2ZTOYCgFEAs5VKZbBYLP6qfVoPYBRFsyT3A+g3xpRaETXfhWG4Wyn1RESeJ0lyfIUwn88PicgV51y3tfZDGtjV1bW+o6NjAEAvAHHOzZfL5alSqfQzxYRh2EnypYiMWmtvMwiCLW1tbZ+dc8PW2ukUqLXOAJgH4LN+D0AB2CkizyqVSl8q0eO11qdFZILkdi91jGRgjOn0WaSE+Xz+rIjccs4VrLX30kAAk865M9bauw0lUFrrdyJiqbVeInk9juObjTXSWj8GkKt/tPKktf4I4JMx5kgjPoqi8ySHPOEX59w1r38NhAvGmEMtCM95yeMk+4wxuwC4ZskkC3Ec1ySHYXhKKTW1mmQAic9wK4AFksNxHDc3ZQ7Agf9pivctgB01H2qthwFcBtBtjPE1qh1vm1wuN6CU6hUR37C5xcXF6Va2ATCSJMmdZmPvc871W2vfrsXYJJ/GcXyycVKQjh7JoyIyls1mJ2ZmZqqtiLXWm0Tkoh89kvcBDBpjfv9FmAamy0FEskqpByLySkTKIsI1LYfGTFZbXyLyleSbf62vP5BCRv/412q1AAAAAElFTkSuQmCC"},1287:function(t,e,l){var content=l(1316);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(78).default)("4cb4d88d",content,!0,{sourceMap:!1})},1315:function(t,e,l){"use strict";l(1287)},1316:function(t,e,l){var d=l(77)(!1);d.push([t.i,".article-item[data-v-b3d42642]{padding:12px 0;cursor:pointer}.article-item[data-v-b3d42642]:hover{box-shadow:5px 4px 15px 0 rgba(0,0,0,.1);border-radius:4px}.case-img[data-v-b3d42642]{width:260px;height:154px;border-radius:4px}.detail[data-v-b3d42642]{margin-left:24px;flex-direction:column;max-width:530px}.detail .top[data-v-b3d42642]{flex:1}.detail .title[data-v-b3d42642]{text-overflow:ellipsis;overflow:hidden;display:-webkit-box;-webkit-line-clamp:2;line-clamp:2;-webkit-box-orient:vertical;font-size:18px;color:#222;transition:.5s;margin-bottom:10px}.detail .title[data-v-b3d42642]:hover{color:#007dff;text-decoration:underline}.detail .tags>span[data-v-b3d42642]{display:inline-block;margin-bottom:4px;padding:4px 8px;color:#ff8214;border:1px solid #fff4da;border-radius:20px;font-size:12px}.views img[data-v-b3d42642]{width:16px;margin-right:4px}.time[data-v-b3d42642]{font-size:14px;color:#a3a3a3;margin-left:20px}",""]),t.exports=d},1343:function(t,e,l){"use strict";l.r(e);var d={name:"News",props:{newsList:{type:Array,default:function(){return[]}}},methods:{navigateToDetail:function(t){this.$router.push({name:"newsCase-id",params:{id:t.news_id},query:{type:"news"}})}}},n=(l(1315),l(35)),component=Object(n.a)(d,(function(){var t=this,e=t.$createElement,d=t._self._c||e;return d("a-row",{staticClass:"article-list",attrs:{gutter:32}},t._l(t.newsList,(function(e){return d("a-col",{key:e.news_id,staticClass:"article-item g-flex",attrs:{span:"12"},on:{click:function(l){return t.navigateToDetail(e)}}},[d("div",{staticClass:"link"},[d("img",{staticClass:"case-img",attrs:{src:e.head_image,alt:""}})]),t._v(" "),d("div",{staticClass:"detail g-flex"},[d("div",{staticClass:"top"},[d("div",{staticClass:"link"},[d("div",{staticClass:"title"},[t._v("\n            "+t._s(e.title)+"\n          ")])])]),t._v(" "),d("div",{staticClass:"info g-flex"},[d("div",{staticClass:"views g-flex center"},[d("img",{attrs:{src:l(1281),alt:""}}),t._v(" "),d("span",[t._v(t._s(e.browsenum||0))])]),t._v(" "),d("div",{staticClass:"time"},[t._v("\n          "+t._s(e.time_created)+"\n        ")])])])])})),1)}),[],!1,null,"b3d42642",null);e.default=component.exports}}]);