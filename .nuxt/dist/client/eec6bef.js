(window.webpackJsonp=window.webpackJsonp||[]).push([[2,4,15,16,18,19,32],{1272:function(t,e,r){var content=r(1289);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(78).default)("ce9c675c",content,!0,{sourceMap:!1})},1273:function(t,e,r){var content=r(1294);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(78).default)("20af5431",content,!0,{sourceMap:!1})},1274:function(t,e,r){var content=r(1298);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(78).default)("1cebe7b5",content,!0,{sourceMap:!1})},1275:function(t,e,r){var content=r(1305);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(78).default)("48817be2",content,!0,{sourceMap:!1})},1281:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAYAAAAWGF8bAAACYUlEQVQ4T5VUO2hUQRQ9Z9CNK9oFFKslWlkEJDYGwWgVTHgq781qoy4aCCImoiBJKZKghQZExSIJSEzz5g1+EBK1WVArXSz8gETIxkKLbOmCoM6VWfaFddmImXLm3DP33HvuJVqcQqGwoVqtahE5CGAPyW112DcArwE8Wl5eNsVi8UdzOJsvoig6QfIqgI0i8pDkC+fckseRzAHYS/IwgKqIXEqSZLaRY4Wwp6dnXXt7+ySAYyTHAdwwxnxvpSAIgs2ZTOYCgFEAs5VKZbBYLP6qfVoPYBRFsyT3A+g3xpRaETXfhWG4Wyn1RESeJ0lyfIUwn88PicgV51y3tfZDGtjV1bW+o6NjAEAvAHHOzZfL5alSqfQzxYRh2EnypYiMWmtvMwiCLW1tbZ+dc8PW2ukUqLXOAJgH4LN+D0AB2CkizyqVSl8q0eO11qdFZILkdi91jGRgjOn0WaSE+Xz+rIjccs4VrLX30kAAk865M9bauw0lUFrrdyJiqbVeInk9juObjTXSWj8GkKt/tPKktf4I4JMx5kgjPoqi8ySHPOEX59w1r38NhAvGmEMtCM95yeMk+4wxuwC4ZskkC3Ec1ySHYXhKKTW1mmQAic9wK4AFksNxHDc3ZQ7Agf9pivctgB01H2qthwFcBtBtjPE1qh1vm1wuN6CU6hUR37C5xcXF6Va2ATCSJMmdZmPvc871W2vfrsXYJJ/GcXyycVKQjh7JoyIyls1mJ2ZmZqqtiLXWm0Tkoh89kvcBDBpjfv9FmAamy0FEskqpByLySkTKIsI1LYfGTFZbXyLyleSbf62vP5BCRv/412q1AAAAAElFTkSuQmCC"},1282:function(t,e,r){"use strict";r.r(e);var n={components:{Star:r(1235).default},props:{info:{type:Object,default:function(){return{}}}},computed:{decimal:function(){return this.info.ztgsnum/5}},methods:{navigateToDetail:function(t){this.$router.push({name:"productDetail-id",params:{id:t.product_id}})}}},o=(r(1288),r(35)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"c-card"},[r("nuxt-link",{staticClass:"top",attrs:{to:{name:"productDetail-id",params:{id:t.info.product_id}}}},[r("div",{staticClass:"author"},[r("img",{staticClass:"g-avatar",attrs:{src:t.info.userimage,alt:""}}),t._v(" "),r("div",{staticClass:"info"},[r("strong",{staticClass:"name"},[t._v(t._s(t.info.realname))]),t._v(" "),r("p",{staticClass:"title"},[r("span",[t._v(t._s(t.info.company))]),t._v(" "),r("span",[t._v(t._s(t.info.office))])])])]),t._v(" "),r("div",{staticClass:"t-box"},[r("div",{staticClass:"benchmark"},[r("div",{staticClass:"context g-flex"},[t._v("对 "),r("span",[t._v(t._s(t.info.productname))]),t._v(" 的点评")]),t._v(" "),r("div",{staticClass:"g-flex space-between"},[r("div",{staticClass:"star g-flex"},[r("div",{staticClass:"rank"},[t._v("\n              "+t._s(t.info.ztgsnum.toFixed(1))+"\n              "),r("span",[t._v("分")])]),t._v(" "),r("Star",{attrs:{"out-width":75,"out-height":15,decimal:t.decimal}})],1),t._v(" "),r("div",{staticClass:"date"},[t._v("\n            "+t._s(t.info.lastoperationtime)+"\n          ")])])]),t._v(" "),r("div",{staticClass:"detail"},[r("p",[t._v("【优点】"+t._s(t.info.advantages))]),t._v(" "),r("p",[t._v("【缺点】"+t._s(t.info.disadvantages))])]),t._v(" "),r("span",{staticClass:"quota up"}),t._v(" "),r("span",{staticClass:"quota down"})])])],1)}),[],!1,null,"323d7378",null);e.default=component.exports},1283:function(t,e,r){"use strict";r.r(e);var n={props:{bannerTxt:{type:Array,default:function(){return[]}}},methods:{handleBannerPopShow:function(){this.$emit("handleBannerPopShow")}}},o=(r(1297),r(35)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("a-carousel",{staticClass:"txt-banner",attrs:{autoplay:"",dots:!1}},t._l(t.bannerTxt,(function(e,n){return r("div",{key:n},[r("h3",[r("span",{on:{click:t.handleBannerPopShow}},[r("i",{staticClass:"fire"}),t._v(t._s(e)),r("i",{staticClass:"finger"})])])])})),0)}),[],!1,null,"7885ab74",null);e.default=component.exports},1286:function(t,e,r){var content=r(1315);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(78).default)("36f67e6f",content,!0,{sourceMap:!1})},1287:function(t,e,r){var content=r(1317);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(78).default)("4cb4d88d",content,!0,{sourceMap:!1})},1288:function(t,e,r){"use strict";r(1272)},1289:function(t,e,r){var n=r(77),o=r(301),c=r(1290),d=r(1291),l=n(!1),f=o(c),h=o(d);l.push([t.i,'.c-card[data-v-323d7378]{margin-top:10px;overflow:hidden;border-radius:6px;width:100%;margin-bottom:10px}.c-card .top[data-v-323d7378]{padding:0 4px 10px;cursor:pointer;color:#555;display:block}.c-card .top .author[data-v-323d7378]{display:flex;align-items:flex-start;padding:16px 10px}.c-card .top .author .g-avatar[data-v-323d7378]{margin-right:10px;width:50px;height:50px;border-radius:50%}.c-card .top .author .info[data-v-323d7378]{width:226px}.c-card .top .author .info .name[data-v-323d7378]{width:100%;display:inline-block;margin-bottom:5px;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;word-break:break-all;font-weight:400}.c-card .top .author .info .name span[data-v-323d7378]{color:#007dff}.c-card .top .author .info .title[data-v-323d7378]{margin:0;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;word-break:break-all}.c-card .top .author .info .title span+span[data-v-323d7378]{margin-left:10px}.c-card .top .t-box[data-v-323d7378]{background-color:#fff;padding:10px 10px 30px;border-radius:4px;position:relative}.c-card .top .t-box[data-v-323d7378]:before{position:absolute;left:26px;top:-10px;content:"";width:0;height:0;border-left:10px solid transparent;border-right:10px solid transparent;border-bottom:10px solid #fff}.c-card .top .t-box .benchmark[data-v-323d7378]{padding:10px}.c-card .top .t-box .benchmark .context[data-v-323d7378]{color:#222;padding-bottom:10px}.c-card .top .t-box .benchmark .context span[data-v-323d7378]{font-weight:700;display:inline-block;max-width:240px;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;margin:0 4px}.c-card .top .t-box .benchmark .star[data-v-323d7378]{align-items:center}.c-card .top .t-box .benchmark .star .rank[data-v-323d7378]{color:#fff;padding:0 4px;border-radius:4px;font-size:14px;background-color:#ff492c;white-space:nowrap;margin-right:10px}.c-card .top .t-box .benchmark .star .rank .ant-rate[data-v-323d7378]{flex:none!important}.c-card .top .t-box .benchmark .star .rank .ant-rate[data-v-323d7378] li{margin-right:4px}.c-card .top .t-box .benchmark .date[data-v-323d7378]{color:#c1c1c1;white-space:nowrap;font-size:12px}.c-card .top .t-box .quota[data-v-323d7378]{position:absolute;width:14px;height:14px}.c-card .top .t-box .quota.up[data-v-323d7378]{background-image:url('+f+");background-size:100% 100%;left:20px;top:84px}.c-card .top .t-box .quota.down[data-v-323d7378]{background-image:url("+h+");background-size:100% 100%;right:16px;bottom:34px}.c-card .top .detail[data-v-323d7378]{padding:20px;height:140px;overflow:hidden;position:relative}.c-card .top .detail p[data-v-323d7378]{-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis;display:-webkit-box}@media (max-width:767px){.review-wrapper[data-v-323d7378]{display:flex;justify-content:center}}",""]),t.exports=l},1290:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADJElEQVRYR+1WTUhUURT+jlO6aVEQFgVCIEnOHWtRFBpCEeadSRCLilppm1qkraQfF0ZFhYugFpXQHxQUJUlT855CYGCFgVjOG4Na9UM/EBEVheHMiTszztwZ37z3bJEb7/Z93znf/c655zzCDB+a4fyYFfBfHWDprwRTKZnWwGTppy2Ag2I1GF3JAIyjejCnfuL6yvUg3wWA/Wlep8JPSwCHRBPiuAbCvHSyATKsDW6NzMHALjDf0HFkWMncngWw9B8A6IwWpBdxtFK/9c7x5lIcB3BEw4RBiRMUGRvyLICleASgNhOE0U6mlSqDw2EpxgCs0HiqZEnrPfcASzEOoDjDKEINPbCeeEj+A8iUCiDeRpFYTz7PsQQcFG/AKMuoTdfNQ/LXAMqzNy/aROboQzteQQEsxTMAa7JBqJrM6FMPyQcB1GQ9phaKRK8U4tkKYCnuAWjQkm8nM3rbQ/I7ALZquJ1kWLeceFMEcNDfAaZjWuOcJNM67CF5C4BLGu8imdZeN16OAA5WrQUnVMeXpIg0gt+JWhqI/XTs9oblCzFRrKyvSOO+w5cI0P2xt9MTIEUYwJZs/fgqRWLNbkFYBk4D3K7h+siw6t14yStOglgGGgG+m0NKjdqcd5sflOuqSuFLfJ4uL/OyMgLq/R0grfapEgyREV3naL/0bwQo/4l9xZw/FRR+9cXNhawDQdEDRpMN4TLi6Cw0clmK/QDO2vAGAT5IRuyxp1fAUrwHsNQeTB/A3I25JV0UHv6lY1iK6wB2F07C3SCcp0jsuR1G6wHxCcAiZ8toBImJEPW9/JjtHXETwA4Xq78B1ExGtDcfpwvoA1DnVjN9lyssS6E2ndp4bsd2desCVB1VPZ1P3stgKdTtlQtux0VASFQjAeXC5M+GfcB8AY2r5mM8rhrO76LAWUDaztxxaheRsZJMazS3EW1myFRuKxnWuYI9oDWVKoOa/YunxGA6RGb0lK0uKfYBaNPGcRZGhSeq/Tbc7C+HD3tS/wK0BIR+MIbJsPqdbOZQYAHi3AbCMgBlYKi98oJMK3fCakE8/xO6ddi/fp8VMOvAX1rFJTDwzDxrAAAAAElFTkSuQmCC"},1291:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADIklEQVRYR+2WS2gTURSG/z91IyKuFFRwIbhoZlLrRi2+FetMLCIWEUEEhVqqdKFi3QhWxILgA3wh+ECpulBxYW1ubAULiqAb0d6pIApCF1rc2YobkyOTmmQS55GIUBe9u+Se/5wv/73n3BATvDjB9TEJ8H87IEnjDIRLATQAoiB8BaKbSn8MuzuSNCwAq3Jayidk+Rki1/nY+VCuC3RAkuZdCLb6FBoDcItKt/lBiG0eBHDKZ+8LgC4qfd675wsgttEB8GRohxBtTOnL3hhpql2ATM378M7iDqrB2/mYAADzKYDVES36DTWyko+cN/k4scxOEEcjdKNgdj1TQy/dOH+AYPvLcsseKudKlQBu1UtM6X3BAJaxF+TFyCFFnmVq8EDVAMAAlV4TDGAvmgn87AFkSQREikpvLABUrvtKpWcFArgbsrVhKsbGOgHpCIQQXGVat5RcRFc3OnoYZAsgcwK0n6l0bi9yEIlVtw6xbBcEi/9MxnaqwQu+7bgxMR9Z6QKwzWe/4FwkQM6NDbWzEat5B2BGSTLJrmB66HnYMYltvgZQXxZzgkofqciBkAs2jB8S54DjDqbgU/JrzRia2asfVAdgl8+GYPtL7oRt3gSw0/NdP5VuzH+u7Aia4vOQiWkA038LS5KEH4HxBOC6QgzRyJTurw7AMi+DaA1KEgQgyUQrRDzjWi5QOe3e+EgHJGk0Q3i/IBIcY1p3hv3q3MW1jThABWDeeCwdZMRmnx6uGEAsczUI910YX1UVj90FxPitHAFkLZUzVA4e/Bxb8eVg7FmxuJxh2nGf2tAlllkH8o6nuEtu+BUP7AKxzKMgvDb3UOlN0cWN7SBPA5hdjA0u7gsgtnkNwG6P7d1Ma28b+XJIMnEcIrnhUlgxLGOvfhEGXjgCSRr1ELpv+WaP4BCV9vt3U+RrWjgX2cw5CLZ4dBo/pCFqSJU4ILYpngTuZdlPpfsibS8fUCI3mHZ2Reny+0UH8iOTuIcpaOdDPVJJErESSVC6AWRAOcaUE/0/wpM4cg5UApHr0Ma6aex7+73S+D8cqFb4r+L/mQN/CzQJ8AvpfC0wuO9Q/QAAAABJRU5ErkJggg=="},1292:function(t,e,r){var content=r(1319);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(78).default)("5647f094",content,!0,{sourceMap:!1})},1293:function(t,e,r){"use strict";r(1273)},1294:function(t,e,r){var n=r(77)(!1);n.push([t.i,".model-wrap[data-v-515bd28e]{position:fixed;left:0;right:0;top:0;bottom:0;z-index:10}.model[data-v-515bd28e]{width:100%;height:100%;background-color:rgba(6,21,26,.67)}.content[data-v-515bd28e]{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%)}.close-btn[data-v-515bd28e]{position:absolute;top:0;right:-60px;cursor:pointer}",""]),t.exports=n},1295:function(t,e,r){var content=r(1321);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(78).default)("6abe9547",content,!0,{sourceMap:!1})},1297:function(t,e,r){"use strict";r(1274)},1298:function(t,e,r){var n=r(77),o=r(301),c=r(1299),d=r(1300),l=n(!1),f=o(c),h=o(d);l.push([t.i,".txt-banner[data-v-7885ab74]{height:40px;overflow-y:hidden;margin-top:20px}.ant-carousel[data-v-7885ab74] .slick-slide{display:block;width:100%;text-align:center;height:40px;line-height:40px;overflow:hidden}.ant-carousel[data-v-7885ab74] .custom-slick-arrow{width:20px;height:20px;font-size:16px;color:#fff;background-color:rgba(31,45,61,.11);opacity:.3}.ant-carousel[data-v-7885ab74] .custom-slick-arrow:before{display:none}.ant-carousel[data-v-7885ab74] .custom-slick-arrow:hover{opacity:.5}.ant-carousel[data-v-7885ab74] .slick-slide h3{color:#fff;font-size:22px}h3>span[data-v-7885ab74]{cursor:pointer;position:relative}h3>span>i.fire[data-v-7885ab74]{left:-30px;background-image:url("+f+");-webkit-animation:rotate-data-v-7885ab74 .5s linear infinite;animation:rotate-data-v-7885ab74 .5s linear infinite}h3>span>i.finger[data-v-7885ab74],h3>span>i.fire[data-v-7885ab74]{position:absolute;width:30px;height:32px;background-repeat:no-repeat;background-size:contain}h3>span>i.finger[data-v-7885ab74]{right:-24px;top:2px;background-image:url("+h+");transform:rotate(-30deg);-webkit-animation:rotate2-data-v-7885ab74 .5s linear infinite;animation:rotate2-data-v-7885ab74 .5s linear infinite}@-webkit-keyframes rotate-data-v-7885ab74{0%{transform:translateY(0)}25%{transform:translateY(4px)}50%{transform:translateY(8px) scale(1.1,.9)}75%{transform:translateY(4px)}to{transform:translateY(0)}}@keyframes rotate-data-v-7885ab74{0%{transform:translateY(0)}25%{transform:translateY(4px)}50%{transform:translateY(8px) scale(1.1,.9)}75%{transform:translateY(4px)}to{transform:translateY(0)}}@-webkit-keyframes rotate2-data-v-7885ab74{0%{transform:rotate(-30deg)}50%{transform:rotate(-30deg) scale(1.1)}to{transform:rotate(-30deg)}}@keyframes rotate2-data-v-7885ab74{0%{transform:rotate(-30deg)}50%{transform:rotate(-30deg) scale(1.1)}to{transform:rotate(-30deg)}}",""]),t.exports=l},1299:function(t,e,r){t.exports=r.p+"img/icon_fire.4101091.png"},1300:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAClklEQVRYR9WXT4hPURTHP98lKxE2FBksyGaUKBMbRbFCZkGRjEYU2UxSs1CUWKghs6CGhUw2FGGBqJEoFmOhKaMUEcrCSh2dur9frzf3vXff78/CqV+/evfecz73/Lv3igoxs7nATmBj+P0FHgOv/F/S5yodZeMqGzSzPcBZYEnBvB/AmKQTrUIUApiZZZSOAi+A54B7YD2wHdjbmCOpdDNFgNFFZnYROB4WrZX0JqbAzHYBt8NYv6RbdT0xA8DMFgFvgXnAbknjFWHqBV4D00CvpJ91IGIA+4FrwA1J+1KUmdlV4BAwIMnDlSwxgCvA4djuzWwYWAEMS/rQsGJmngtjwE1JzbxIoYgBTAHLgMXZEjMzj7XH3OWepB0ZAK+Sj8AnSUUVE+WJAXwFFkYAslVBNuvNrAHwXdKClJ03qyc/2cweAlvyIciVZR6gEYKnkja3C3AJOApcl3Qg4+YyD3jSevJelnSkXYBNwJOgpFmGRR7I9YI+Sd6skqWoEZ0CzgCTkla7thKAl8A6YEjSuWTLYWJZK/ba/iLJS68MwEPTknHXm9y/y5Kw7q6z8/9fAC/TkPlbgQngYNjZaWAbcF9Sv5n1AF5ZLsckeaNrSsseiLh9MnxblRm7A/QB88O3UUkD3QJISYVpSUtLAczMDxu/bLyX9KCoEaVYi83JX1xiZ8HdAODrxyV5rGeUYTcBfgFzMgamJC3Pl2E3AUaAwZwBv5L5zadtSQmBH8WPgDVtW4soqAQI8fbj2I/ljksSQIA4CZzvNEEyQIDwe16tO14VcC2AAPGuk/nQCsAs4E/VzlLHawMEL3g/f5ZqpGxeSwABwh+gF9qEmJC0Iasj+TQMEP4uGAJWArNrwPwOT/pBSd+y6/4BDZUQMPXi+84AAAAASUVORK5CYII="},1301:function(t,e,r){var content=r(1328);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(78).default)("551905d2",content,!0,{sourceMap:!1})},1302:function(t,e,r){t.exports=r.p+"img/fire.aa1086e.png"},1303:function(t,e,r){var content=r(1330);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(78).default)("5acd3818",content,!0,{sourceMap:!1})},1304:function(t,e,r){"use strict";r(1275)},1305:function(t,e,r){var n=r(77)(!1);n.push([t.i,".bar-box[data-v-479569e8]{width:100%;height:27.5px;margin:10px auto}.bar-box .bar[data-v-479569e8]{height:27.5px;display:flex;justify-content:space-between;align-items:center;width:0;box-sizing:border-box;padding:0 10px;border-radius:50px;transition:width .8s ease-in-out}.bar-box .bar.s1[data-v-479569e8]{background:#f55a53;background:linear-gradient(90deg,#f55a53,#eb8a5d)}.bar-box .bar.s2[data-v-479569e8]{background:#f2a937;background:linear-gradient(90deg,#f2a937,#ebd458)}.bar-box .bar.s3[data-v-479569e8]{background:#5ecd80;background:linear-gradient(90deg,#5ecd80,#80cca5)}.bar-box .bar.s4[data-v-479569e8]{background:#37a2f1;background:linear-gradient(90deg,#37a2f1,#6cd2ff)}.bar-box .bar span[data-v-479569e8]{font-size:13px;color:#fff}.bar-box .bar span.name[data-v-479569e8]{width:80%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}",""]),t.exports=n},1306:function(t,e,r){var content=r(1332);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(78).default)("1bb611b6",content,!0,{sourceMap:!1})},1312:function(t,e,r){"use strict";r.r(e);var n={methods:{handleBannerPopHide:function(){this.$emit("handleBannerPopHide")}}},o=(r(1293),r(35)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"model-wrap"},[r("div",{staticClass:"model"}),t._v(" "),r("div",{staticClass:"content"},[r("div",{staticClass:"close-btn",on:{click:t.handleBannerPopHide}},[r("a-icon",{staticStyle:{"font-size":"30px",color:"#dadada"},attrs:{type:"close"}})],1),t._v(" "),t._t("content")],2)])}),[],!1,null,"515bd28e",null);e.default=component.exports},1313:function(t,e,r){"use strict";r.r(e);r(1232),r(115);var n={props:{score:{type:Number,default:0},index:{type:Number,default:0},text:{type:String,default:""}},data:function(){return{start:!1}},computed:{width:function(){if(this.score<=0)return 25;var t=(this.score-0)/5.5*100;return t>25?t:25}},mounted:function(){var t=this;setTimeout((function(){t.start=!0}),50)}},o=(r(1304),r(35)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"bar-box"},[r("div",{staticClass:"bar",class:t.index&&t.index<=3?"s"+t.index:"s4",style:t.start?"width:"+t.width+"%":0},[r("span",{staticClass:"name"},[t._v("\n      "+t._s(t.index)+". "+t._s(t.text)+"\n    ")]),t._v(" "),r("span",{staticClass:"score"},[t._v("\n      "+t._s(t.score)+"\n    ")])])])}),[],!1,null,"479569e8",null);e.default=component.exports},1314:function(t,e,r){"use strict";r(1286)},1315:function(t,e,r){var n=r(77)(!1);n.push([t.i,".article-item[data-v-8f57303a]{padding:12px 0;cursor:pointer}.article-item[data-v-8f57303a]:hover{box-shadow:5px 4px 15px 0 rgba(0,0,0,.1);border-radius:4px}.case-img[data-v-8f57303a]{width:260px;height:154px;border-radius:4px}.detail[data-v-8f57303a]{margin-left:24px;flex-direction:column;max-width:530px}.detail .top[data-v-8f57303a]{flex:1}.detail .title[data-v-8f57303a]{font-size:18px;color:#222;transition:.5s;margin-bottom:10px}.detail .title[data-v-8f57303a]:hover{color:#007dff;text-decoration:underline}.detail .tags>span[data-v-8f57303a]{display:inline-block;margin-bottom:4px;padding:4px 8px;color:#ff492c;border:1px solid #ff492c;border-radius:20px;font-size:12px}.views img[data-v-8f57303a]{width:16px;margin-right:4px}.time[data-v-8f57303a]{font-size:14px;color:#a3a3a3;margin-left:20px}",""]),t.exports=n},1316:function(t,e,r){"use strict";r(1287)},1317:function(t,e,r){var n=r(77)(!1);n.push([t.i,".article-item[data-v-b3d42642]{padding:12px 0;cursor:pointer}.article-item[data-v-b3d42642]:hover{box-shadow:5px 4px 15px 0 rgba(0,0,0,.1);border-radius:4px}.case-img[data-v-b3d42642]{width:260px;height:154px;border-radius:4px}.detail[data-v-b3d42642]{margin-left:24px;flex-direction:column;max-width:530px}.detail .top[data-v-b3d42642]{flex:1}.detail .title[data-v-b3d42642]{text-overflow:ellipsis;overflow:hidden;display:-webkit-box;-webkit-line-clamp:2;line-clamp:2;-webkit-box-orient:vertical;font-size:18px;color:#222;transition:.5s;margin-bottom:10px}.detail .title[data-v-b3d42642]:hover{color:#007dff;text-decoration:underline}.detail .tags>span[data-v-b3d42642]{display:inline-block;margin-bottom:4px;padding:4px 8px;color:#ff8214;border:1px solid #fff4da;border-radius:20px;font-size:12px}.views img[data-v-b3d42642]{width:16px;margin-right:4px}.time[data-v-b3d42642]{font-size:14px;color:#a3a3a3;margin-left:20px}",""]),t.exports=n},1318:function(t,e,r){"use strict";r(1292)},1319:function(t,e,r){var n=r(77)(!1);n.push([t.i,".swiper-item[data-v-64d2aa7b]{padding-right:10px}",""]),t.exports=n},1320:function(t,e,r){"use strict";r(1295)},1321:function(t,e,r){var n=r(77)(!1);n.push([t.i,".content-wrap[data-v-34020d05]{width:300px;height:534px;background-image:url(https://img.xuanxingbao.com/bgmc.png);background-size:cover;position:relative}.title[data-v-34020d05]{font-size:50px;color:#f3db99;font-weight:700;text-shadow:1px 1px 2px #000;padding-top:24%}.mini-program-img[data-v-34020d05]{width:100%;position:absolute;left:0;bottom:90px}.mini-program-img .txt[data-v-34020d05]{color:#fff;margin-bottom:10px}.mini-program-img .img[data-v-34020d05]{width:30%}",""]),t.exports=n},1327:function(t,e,r){"use strict";r(1301)},1328:function(t,e,r){var n=r(77)(!1);n.push([t.i,".search-wrapper[data-v-8b3cb2cc]{position:absolute;width:100%;left:0;bottom:140px}.search-wrapper .search-box p[data-v-8b3cb2cc]{color:#fff;text-align:center;font-weight:700;font-size:2rem}.search-wrapper .search-box .search-bg[data-v-8b3cb2cc]{margin:0 auto;height:70px;display:flex;flex-direction:column;position:relative;z-index:10}.search-wrapper .search-box .search-bg .input[data-v-8b3cb2cc]{border:none}.search-wrapper .search-box .search-bg .input[data-v-8b3cb2cc] input{border:none!important;height:70px;font-size:18px;padding-left:20px}.search-wrapper .search-box .search-bg .input[data-v-8b3cb2cc] input::-webkit-input-placeholder{color:#222}.search-wrapper .search-box .search-bg .input[data-v-8b3cb2cc] input:active,.search-wrapper .search-box .search-bg .input[data-v-8b3cb2cc] input:focus{border:none!important;box-shadow:none}.search-wrapper .search-box .search-bg[data-v-8b3cb2cc] .ant-input-search-button{width:86px;height:70px;background-color:#007dff;border-color:#007dff;font-size:24px}.search-wrapper .search-box .search-bg[data-v-8b3cb2cc] .ant-input-group-addon{background-color:transparent}.search-wrapper .search-box .search-bg[data-v-8b3cb2cc] .ant-input-affix-wrapper .ant-input-suffix{font-size:30px;margin-right:16px}.search-wrapper .search-box .search-bg[data-v-8b3cb2cc] .ant-input-affix-wrapper .ant-input:not(:last-child){padding-right:92px}.search-wrapper .search-box .search-bg[data-v-8b3cb2cc] .ant-input-group{border-radius:12px;overflow:hidden}.search-wrapper .search-box .search-bg .result-wrap[data-v-8b3cb2cc]{width:calc(100% - .7px);height:198px;min-height:198px;overflow-y:scroll;background-color:#fff;padding:10px 0;border-top:1px solid #cacaca}.search-wrapper .search-box .search-bg .result-wrap .title[data-v-8b3cb2cc]{font-size:13px;color:#666;padding-left:10px;padding-right:10px}.search-wrapper .search-box .search-bg .result-wrap .item .link[data-v-8b3cb2cc]{display:flex;justify-content:space-between;align-items:center;color:#222;padding:4px 20px;cursor:pointer}.search-wrapper .search-box .search-bg .result-wrap .item[data-v-8b3cb2cc]:hover{background-color:rgba(0,125,255,.1)}.search-wrapper .search-box .search-bg .focus-result[data-v-8b3cb2cc],.search-wrapper .search-box .search-bg .search-result[data-v-8b3cb2cc]{display:none}.search-wrapper .search-box .focus[data-v-8b3cb2cc] .ant-input-group,.search-wrapper .search-box .search[data-v-8b3cb2cc] .ant-input-group{border-radius:12px 12px 0 0}.search-wrapper .search-box .focus[data-v-8b3cb2cc] .ant-input,.search-wrapper .search-box .focus[data-v-8b3cb2cc] .ant-input-group-addon,.search-wrapper .search-box .search[data-v-8b3cb2cc] .ant-input,.search-wrapper .search-box .search[data-v-8b3cb2cc] .ant-input-group-addon{border-radius:0}.search-wrapper .search-box .focus .result-wrap[data-v-8b3cb2cc],.search-wrapper .search-box .search .result-wrap[data-v-8b3cb2cc]{border-radius:0 0 12px 12px}.search-wrapper .search-box .focus .focus-result[data-v-8b3cb2cc],.search-wrapper .search-box .search .search-result[data-v-8b3cb2cc]{display:block}",""]),t.exports=n},1329:function(t,e,r){"use strict";r(1303)},1330:function(t,e,r){var n=r(77)(!1);n.push([t.i,'[data-v-be515b54] .slick-list{width:204px}.c-card[data-v-be515b54]{width:389px;margin-top:10px;overflow:hidden;border-radius:6px;min-width:350px}.c-card[data-v-be515b54],.c-card .top[data-v-be515b54]{background-color:#fff}.c-card .top[data-v-be515b54]{padding:20px 20px 10px}.c-card .top .t-box[data-v-be515b54]{display:flex;justify-content:space-between;align-items:center;margin-bottom:15px;flex-wrap:nowrap}.c-card .top .t-box .show[data-v-be515b54]{font-size:11px;color:#333;display:flex;flex-wrap:nowrap;background:#f3f3f3;border:1px solid #ccc;border-radius:10px;padding:2px 8px}.c-card .top .t-box .show text[data-v-be515b54]{display:inline-block;transform:translate(5px,-1.5px) scaleX(.5)}.c-card .bottom[data-v-be515b54]{display:flex;justify-content:space-between;align-items:center;padding:0 15px 10px 0}.c-card .bottom .fire[data-v-be515b54]{position:relative;right:0;left:22px}.c-card .bottom .fire img[data-v-be515b54]{width:13px;height:18px}.c-card .bottom .stat[data-v-be515b54]{font-size:13px;margin-right:10px;color:#ff492c;margin-bottom:0}.c-card .bottom .people[data-v-be515b54]{padding:5px;display:flex;margin-left:5px;width:50%;overflow:hidden;max-width:50%;flex-shrink:0;transition:.5s ease;position:relative}.c-card .bottom .people[data-v-be515b54]:after{content:"";width:25px;height:30px;top:0;right:0;position:absolute;background:#fff;background:linear-gradient(270deg,#fff,hsla(0,0%,100%,0))}.c-card .bottom .people img[data-v-be515b54]{width:22.5px;height:22.5px;border:3px solid #fff;border-radius:50px;display:inline-block}.c-card .h2[data-v-be515b54]{font-size:16px;display:block}',""]),t.exports=n},1331:function(t,e,r){"use strict";r(1306)},1332:function(t,e,r){var n=r(77)(!1);n.push([t.i,".ant-card .title[data-v-65e91831]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.ant-card[data-v-65e91831] .ant-card-body{width:264px;padding:14px}.ant-card .stars[data-v-65e91831]{width:178px}.ant-card .stars .ant-rate-text[data-v-65e91831]{color:#ff492c}.ant-card .img-wrap[data-v-65e91831]{text-align:center}.ant-card .img-wrap img[data-v-65e91831]{margin:20px auto 0;display:block}@media (max-width:767px){.ant-card[data-v-65e91831] .ant-card-body{width:100%}}",""]),t.exports=n},1343:function(t,e,r){"use strict";r.r(e);var n={name:"Case",props:{caseList:{type:Array,default:function(){return[]}}},methods:{navigateToDetail:function(t){this.$router.push({name:"newsCase-id",params:{id:t.case_id},query:{type:"case"}})}}},o=(r(1314),r(35)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a-row",{staticClass:"article-list",attrs:{gutter:32}},t._l(t.caseList,(function(e){return n("a-col",{key:e.case_id,staticClass:"article-item g-flex",attrs:{span:"12"},on:{click:function(r){return t.navigateToDetail(e)}}},[n("div",{staticClass:"link"},[n("img",{staticClass:"case-img",attrs:{src:e.head_image,alt:""}})]),t._v(" "),n("div",{staticClass:"detail g-flex"},[n("div",{staticClass:"top"},[n("div",{staticClass:"link"},[n("div",{staticClass:"title"},[t._v("\n              "+t._s(e.title)+"\n            ")])])]),t._v(" "),n("div",{staticClass:"info g-flex"},[n("div",{staticClass:"views g-flex center"},[n("img",{attrs:{src:r(1281),alt:""}}),t._v(" "),n("span",[t._v(t._s(e.browsenum||0))])]),t._v(" "),n("div",{staticClass:"time"},[t._v("\n            "+t._s(e.time_created)+"\n          ")])])])])})),1)}),[],!1,null,"8f57303a",null);e.default=component.exports},1344:function(t,e,r){"use strict";r.r(e);var n={name:"News",props:{newsList:{type:Array,default:function(){return[]}}},methods:{navigateToDetail:function(t){this.$router.push({name:"newsCase-id",params:{id:t.news_id},query:{type:"news"}})}}},o=(r(1316),r(35)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a-row",{staticClass:"article-list",attrs:{gutter:32}},t._l(t.newsList,(function(e){return n("a-col",{key:e.news_id,staticClass:"article-item g-flex",attrs:{span:"12"},on:{click:function(r){return t.navigateToDetail(e)}}},[n("div",{staticClass:"link"},[n("img",{staticClass:"case-img",attrs:{src:e.head_image,alt:""}})]),t._v(" "),n("div",{staticClass:"detail g-flex"},[n("div",{staticClass:"top"},[n("div",{staticClass:"link"},[n("div",{staticClass:"title"},[t._v("\n            "+t._s(e.title)+"\n          ")])])]),t._v(" "),n("div",{staticClass:"info g-flex"},[n("div",{staticClass:"views g-flex center"},[n("img",{attrs:{src:r(1281),alt:""}}),t._v(" "),n("span",[t._v(t._s(e.browsenum||0))])]),t._v(" "),n("div",{staticClass:"time"},[t._v("\n          "+t._s(e.time_created)+"\n        ")])])])])})),1)}),[],!1,null,"b3d42642",null);e.default=component.exports},1345:function(t,e,r){"use strict";r.r(e);var n={components:{Review:r(1282).default},props:{list:{type:Array,default:function(){return[]}}},data:function(){return{dots:!1}}},o=(r(1318),r(35)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"swiper-wrap"},[r("a-carousel",{attrs:{autoplay:"",dots:t.dots,"slides-to-show":3,"lazy-load":!0,speed:1e3}},t._l(t.list,(function(t,e){return r("div",{key:e,staticClass:"swiper-item"},[r("Review",{attrs:{info:t}})],1)})),0)],1)}),[],!1,null,"64d2aa7b",null);e.default=component.exports;installComponents(component,{Review:r(1282).default})},1346:function(t,e,r){"use strict";r.r(e);var n={components:{model:r(1312).default},props:{imgUrl:{type:String,default:function(){return""}},recommendCate:{type:String,default:function(){return""}}},methods:{handleBannerPopHide:function(){this.$emit("handleBannerPopHide")}}},o=(r(1320),r(35)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("model",{on:{handleBannerPopHide:t.handleBannerPopHide}},[r("div",{staticClass:"content-wrap",attrs:{slot:"content"},slot:"content"},[r("div",{staticClass:"title text-c"},[t._v("\n      "+t._s(t.recommendCate)+"软件\n    ")]),t._v(" "),r("div",{staticClass:"mini-program-img text-c"},[r("div",{staticClass:"txt"},[t._v("\n        扫码去点评\n      ")]),t._v(" "),r("img",{staticClass:"img",attrs:{src:"data:image/jpeg;base64,"+t.imgUrl,alt:""}})])])])}),[],!1,null,"34020d05",null);e.default=component.exports},1347:function(t,e,r){"use strict";r.r(e);var n=r(22),o=(r(90),r(655),r(115),r(656),r(302),r(55)),c={components:{AutoPlay:r(1283).default},props:{bannerTxt:{type:Array,default:function(){return[]}}},data:function(){return{keywords:"",hotSearchList:[],searchList:[],isFocus:!1,isSearch:!1,statusMapper:{product:"haveProductReviews",category:"haveCategoryInformation",fuzzy:"fuzzyMatching",notFound:"allWithout"},timer:null,historySearch:[]}},methods:{handleBannerPopShow:function(){this.$emit("handleBannerPopShow")},onSearch:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.keywords.trim()){e.next=4;break}return e.abrupt("return",!1);case 4:return e.next=6,t.$requests.indexKeysSearch({KEY_INFO:t.keywords.trim()});case 6:if(200!==(r=e.sent).status||"success"!==r.data.result){e.next=19;break}e.t0=r.data.searchStatus,e.next=e.t0===t.statusMapper.category?11:e.t0===t.statusMapper.product?13:e.t0===t.statusMapper.fuzzy?15:e.t0===t.statusMapper.notFound?17:19;break;case 11:return t.$router.push({name:"product-id",params:{id:r.data.CATEGORY_ID},query:{category_name:t.keywords.trim()}}),e.abrupt("break",19);case 13:return t.$router.push({name:"productDetail-id",params:{id:r.data.PRODUCT_ID}}),e.abrupt("break",19);case 15:return t.$router.push({name:"result-status",params:{status:"fuzzy"},query:{keywords:t.keywords.trim()}}),e.abrupt("break",19);case 17:return t.$router.push({name:"result-status",params:{status:"notFound"},query:{keywords:t.keywords.trim()}}),e.abrupt("break",19);case 19:case"end":return e.stop()}}),e)})))()},onChange:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==t.keywords.trim()){e.next=5;break}t.isFocus=!0,t.isSearch=!1,e.next=9;break;case 5:return e.next=7,t.searchAutoComplete();case 7:t.searchList=e.sent,t.searchList?(t.isFocus=!1,t.isSearch=!0):(t.isFocus=!1,t.isSearch=!1);case 9:case"end":return e.stop()}}),e)})))()},onFocus:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var data,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==t.keywords.trim()){e.next=8;break}return t.getHistorySearch(),t.isFocus=!0,data={CUR_PAGE:1},e.next=6,t.$requests.indexSearchHot(data);case 6:200===(r=e.sent).status&&"success"===r.data.result&&(t.hotSearchList=r.data.hotsearchlogObj);case 8:case"end":return e.stop()}}),e)})))()},onBlur:function(){var t=this;this.timer=setTimeout((function(){t.isFocus=!1}),300)},searchAutoComplete:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,data,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=[],data={KEY_INFO:t.keywords.trim()},e.next=4,t.$requests.indexSearchAutoComplete(data);case 4:return 200===(n=e.sent).status&&"success"===n.data.result&&(r=n.data.productList),e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})))()},handleKeyWordTagClick:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n,c,d,l;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return(n=o.a.get("set_history_search"))?(-1!==(c=n.findIndex((function(e){return e.ID===t.ID})))&&n.splice(c,1),n.unshift(t),o.a.set("set_history_search",n)):((d=[]).unshift(t),o.a.set("set_history_search",d)),clearTimeout(e.timer),r.next=5,e.$requests.indexKeysSearch({KEY_INFO:t.names.trim()});case 5:if(200!==(l=r.sent).status||"success"!==l.data.result){r.next=18;break}r.t0=l.data.searchStatus,r.next=r.t0===e.statusMapper.category?10:r.t0===e.statusMapper.product?12:r.t0===e.statusMapper.fuzzy?14:r.t0===e.statusMapper.notFound?16:18;break;case 10:return e.$router.push({name:"product-id",params:{id:l.data.CATEGORY_ID},query:{category_name:t.value.trim()}}),r.abrupt("break",18);case 12:return e.$router.push({name:"productDetail-id",params:{id:l.data.PRODUCT_ID}}),r.abrupt("break",18);case 14:return e.$router.push({name:"result-status",params:{status:"fuzzy"},query:{keywords:t.names.trim()}}),r.abrupt("break",18);case 16:return e.$router.push({name:"result-status",params:{status:"notFound"},query:{keywords:t.names.trim()}}),r.abrupt("break",18);case 18:case"end":return r.stop()}}),r)})))()},handleKeyWordTagClick2:function(t){var e=o.a.get("set_history_search");if(e){var r=e.findIndex((function(e){return e.ID===t.ID}));-1!==r&&e.splice(r,1),e.unshift(t),o.a.set("set_history_search",e)}else{var n=[];n.unshift(t),o.a.set("set_history_search",n)}"1"===t.TYPE?this.$router.push({name:"productDetail-id",params:{id:t.ID}}):this.$router.push({name:"product-id",params:{id:t.ID},query:{category_name:t.NAME}})},getHistorySearch:function(){this.historySearch=o.a.get("set_history_search"),console.log(this.historySearch)},deleteHistorySearch:function(){o.a.remove("set_history_search"),this.historySearch=[]}}},d=(r(1327),r(35)),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("a-row",{staticClass:"search-wrapper",attrs:{type:"flex",justify:"center"}},[r("a-col",{staticClass:"search-box",attrs:{span:"17"}},[r("p",{staticStyle:{display:"none"}},[t._v(t._s(t.$configs.CONST.SEARCH_TEXT))]),t._v(" "),r("div",{staticClass:"search-bg",class:{focus:t.isFocus,search:t.isSearch}},[r("a-input-search",{staticClass:"input",staticStyle:{width:"100%",height:"70px"},attrs:{size:"large",placeholder:"搜索产品类别/产品名称，看看其他CIO的实名点评吧！","enter-button":""},on:{search:t.onSearch,change:t.onChange,focus:t.onFocus,blur:t.onBlur},model:{value:t.keywords,callback:function(e){t.keywords=e},expression:"keywords"}}),t._v(" "),r("div",{staticClass:"result-wrap focus-result"},[r("div",[r("h3",{staticClass:"title"},[t._v("\n            热门搜索\n          ")]),t._v(" "),t._l(t.hotSearchList,(function(e){return r("div",{key:e.ID,staticClass:"item"},[r("div",{staticClass:"link",on:{click:function(r){return t.handleKeyWordTagClick(e)}}},[r("span",[t._v(t._s(e.value))]),t._v(" "),r("span",{staticClass:"hot-icon"})])])}))],2),t._v(" "),t.historySearch?r("div",{staticStyle:{"margin-top":"10px"}},[r("h3",{staticClass:"title g-flex space-between"},[r("span",[t._v("历史搜索")]),t._v(" "),r("span",{staticStyle:{cursor:"pointer"},on:{click:t.deleteHistorySearch}},[r("a-icon",{attrs:{type:"delete"}}),t._v("删除\n            ")],1)]),t._v(" "),t._l(t.historySearch,(function(e){return r("div",{key:e.ID,staticClass:"item"},[r("div",{staticClass:"link",on:{click:function(r){return t.handleKeyWordTagClick(e)}}},[r("span",[t._v(t._s(e.names))]),t._v(" "),r("span",{staticClass:"hot-icon"})])])}))],2):t._e()]),t._v(" "),r("div",{staticClass:"result-wrap search-result"},t._l(t.searchList,(function(e){return r("div",{key:e.ID,staticClass:"item"},[r("div",{staticClass:"link",on:{click:function(r){return t.handleKeyWordTagClick2(e)}}},[r("span",[t._v(t._s(e.names))]),t._v(" "),r("span",{staticStyle:{color:"#666","font-size":"12px"}},[t._v(t._s("1"===e.TYPE?"产品":"类别"))])])])})),0)],1),t._v(" "),r("AutoPlay",{attrs:{"banner-txt":t.bannerTxt},on:{handleBannerPopShow:t.handleBannerPopShow}})],1)],1)}),[],!1,null,"8b3cb2cc",null);e.default=component.exports;installComponents(component,{AutoPlay:r(1283).default})},1348:function(t,e,r){"use strict";r.r(e);var n=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"fire"},[e("img",{attrs:{src:r(1302),alt:""}})])}],o=(r(79),{props:{item:{type:Object,default:function(){return{}}},start:{type:Boolean,default:!1}},data:function(){return{userArray:[]}},mounted:function(){this.userArray=this.array2double(this.item.USERARRAY)},methods:{array2double:function(t){var e=t.length,r=[];if(e)for(var n=e%8==0?e/8:Math.floor(e/8+1),i=0;i<n;i++){var o=t.slice(8*i,8*i+8);r.push(o)}return r}}}),c=(r(1329),r(35)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"c-card"},[r("div",{staticClass:"top"},[r("div",{staticClass:"t-box"},[r("h2",{staticClass:"h2"},[t._v("\n        "+t._s(t.item.CATEGORY_NAME)+" 类热门厂商实时口碑\n      ")])]),t._v(" "),t._l(t.item.PRODUCTARRAY,(function(t,i){return r("BarZoom",{key:i,attrs:{score:t.avgNum,index:i+1,text:t.factory_short_name||t.factoryqcname}})}))],2),t._v(" "),r("div",{staticClass:"bottom"},[r("div",{staticClass:"people"},[r("a-carousel",{attrs:{autoplay:"",effect:"fade",dots:!1}},t._l(t.userArray,(function(e,n){return r("div",{key:n},t._l(e,(function(t){return r("img",{key:t.id,attrs:{src:t.headimages,alt:""}})})),0)})),0)],1),t._v(" "),t._m(0),t._v(" "),r("p",{staticClass:"stat"},[t._v("\n      "+t._s(t.item.SCORETOTALNUM)+" 人正在热评\n    ")])])])}),n,!1,null,"be515b54",null);e.default=component.exports;installComponents(component,{BarZoom:r(1313).default})},1349:function(t,e,r){"use strict";r.r(e);var n={components:{Star:r(1235).default},props:{product:{type:Object,default:function(){return{}}},categoryName:{type:String,default:function(){return""}}},computed:{decimal:function(){return this.product.ztgsnum/5}}},o=(r(1331),r(35)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("a-card",{staticClass:"product-card"},[r("h3",{staticClass:"title"},[t._v("\n    "+t._s(t.product.product_name)+"\n  ")]),t._v(" "),r("div",{staticClass:"stars g-flex"},[r("Star",{attrs:{"out-width":100,"out-height":20,decimal:t.decimal}}),t._v(" "),r("span",{staticClass:"ant-rate-text"},[t._v(t._s(t.product.ztgsnum.toFixed(1))+"分")])],1),t._v(" "),r("div",{staticClass:"img-wrap"},[r("img",{attrs:{src:"https://via.placeholder.com/80",alt:t.product.factory_short_name+t.categoryName}})])])}),[],!1,null,"65e91831",null);e.default=component.exports},1352:function(t,e,r){t.exports=r.p+"img/banner2.2f29aeb.jpeg"}}]);