(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{778:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAYAAAAWGF8bAAACYUlEQVQ4T5VUO2hUQRQ9Z9CNK9oFFKslWlkEJDYGwWgVTHgq781qoy4aCCImoiBJKZKghQZExSIJSEzz5g1+EBK1WVArXSz8gETIxkKLbOmCoM6VWfaFddmImXLm3DP33HvuJVqcQqGwoVqtahE5CGAPyW112DcArwE8Wl5eNsVi8UdzOJsvoig6QfIqgI0i8pDkC+fckseRzAHYS/IwgKqIXEqSZLaRY4Wwp6dnXXt7+ySAYyTHAdwwxnxvpSAIgs2ZTOYCgFEAs5VKZbBYLP6qfVoPYBRFsyT3A+g3xpRaETXfhWG4Wyn1RESeJ0lyfIUwn88PicgV51y3tfZDGtjV1bW+o6NjAEAvAHHOzZfL5alSqfQzxYRh2EnypYiMWmtvMwiCLW1tbZ+dc8PW2ukUqLXOAJgH4LN+D0AB2CkizyqVSl8q0eO11qdFZILkdi91jGRgjOn0WaSE+Xz+rIjccs4VrLX30kAAk865M9bauw0lUFrrdyJiqbVeInk9juObjTXSWj8GkKt/tPKktf4I4JMx5kgjPoqi8ySHPOEX59w1r38NhAvGmEMtCM95yeMk+4wxuwC4ZskkC3Ec1ySHYXhKKTW1mmQAic9wK4AFksNxHDc3ZQ7Agf9pivctgB01H2qthwFcBtBtjPE1qh1vm1wuN6CU6hUR37C5xcXF6Va2ATCSJMmdZmPvc871W2vfrsXYJJ/GcXyycVKQjh7JoyIyls1mJ2ZmZqqtiLXWm0Tkoh89kvcBDBpjfv9FmAamy0FEskqpByLySkTKIsI1LYfGTFZbXyLyleSbf62vP5BCRv/412q1AAAAAElFTkSuQmCC"},789:function(t,e,c){var content=c(821);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,c(32).default)("c9d1927e",content,!0,{sourceMap:!1})},820:function(t,e,c){"use strict";c(789)},821:function(t,e,c){var l=c(31)(!1);l.push([t.i,".article-item[data-v-29abf40c]{display:flex;padding:12px 0;cursor:pointer}.article-item[data-v-29abf40c]:hover{box-shadow:5px 4px 15px 0 rgba(0,0,0,.1);border-radius:4px}.case-img[data-v-29abf40c]{width:260px;height:154px;border-radius:4px}.detail[data-v-29abf40c]{margin-left:24px;flex-direction:column;max-width:530px}.detail .top[data-v-29abf40c]{flex:1}.detail .title[data-v-29abf40c]{text-overflow:ellipsis;overflow:hidden;display:-webkit-box;-webkit-line-clamp:2;line-clamp:2;-webkit-box-orient:vertical;font-size:18px;color:#222;transition:.5s;margin-bottom:10px}.detail .title[data-v-29abf40c]:hover{color:#007dff;text-decoration:underline}.detail .tags>span[data-v-29abf40c]{display:inline-block;margin-bottom:4px;padding:4px 8px;color:#ff492c;border:1px solid #ff492c;border-radius:20px;font-size:12px}.views img[data-v-29abf40c]{width:16px;margin-right:4px}.time[data-v-29abf40c]{font-size:14px;color:#a3a3a3;margin-left:20px}@media (max-width:767px){.case-img[data-v-29abf40c]{width:99px;height:70px}.article-list[data-v-29abf40c]{margin:0!important}.article-list .article-item[data-v-29abf40c]{padding:10px 8px!important}.detail[data-v-29abf40c]{margin-left:12px}.detail .title[data-v-29abf40c]{font-size:16px}.detail .time[data-v-29abf40c],.detail .views[data-v-29abf40c]{font-size:12px}.detail .time img[data-v-29abf40c],.detail .views img[data-v-29abf40c]{width:14px}}",""]),t.exports=l},862:function(t,e,c){"use strict";c.r(e);var l={name:"Case",props:{caseList:{type:Array,default:function(){return[]}}},methods:{navigateToDetail:function(t){this.$router.push({name:"newsCase-id",params:{id:t.case_id},query:{type:"case"}})}}},d=(c(820),c(60)),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("a-row",{staticClass:"article-list",attrs:{gutter:32}},t._l(t.caseList,(function(e){return l("a-col",{key:e.case_id,staticClass:"article-item",attrs:{md:12,sm:24,xs:24},on:{click:function(c){return t.navigateToDetail(e)}}},[l("div",{staticClass:"link"},[l("img",{staticClass:"case-img",attrs:{src:e.head_image,alt:""}})]),t._v(" "),l("div",{staticClass:"detail g-flex"},[l("div",{staticClass:"top"},[l("div",{staticClass:"link"},[l("div",{staticClass:"title"},[t._v("\n            "+t._s(e.title)+"\n          ")])])]),t._v(" "),l("div",{staticClass:"info g-flex"},[l("div",{staticClass:"views g-flex center"},[l("img",{attrs:{src:c(778),alt:""}}),t._v(" "),l("span",[t._v(t._s(e.browsenum||0))])]),t._v(" "),l("div",{staticClass:"time"},[t._v("\n          "+t._s(e.time_created)+"\n        ")])])])])})),1)}),[],!1,null,"29abf40c",null);e.default=component.exports}}]);