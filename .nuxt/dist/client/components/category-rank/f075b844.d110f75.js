(window.webpackJsonp=window.webpackJsonp||[]).push([[11,10],{807:function(t,e,r){var content=r(832);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(32).default)("365271b8",content,!0,{sourceMap:!1})},821:function(t,e,r){t.exports=r.p+"img/fire.aa1086e.png"},830:function(t,e,r){var content=r(861);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(32).default)("4a5e32d4",content,!0,{sourceMap:!1})},831:function(t,e,r){"use strict";r(807)},832:function(t,e,r){var o=r(31)(!1);o.push([t.i,".bar-box[data-v-3fde4700]{width:100%;height:27.5px;margin:10px auto}.bar-box .bar[data-v-3fde4700]{height:27.5px;display:flex;justify-content:space-between;align-items:center;width:0;box-sizing:border-box;padding:0 10px;border-radius:50px}.bar-box .bar.s1[data-v-3fde4700]{background:#f55a53;background:linear-gradient(90deg,#f55a53,#eb8a5d)}.bar-box .bar.s2[data-v-3fde4700]{background:#f2a937;background:linear-gradient(90deg,#f2a937,#ebd458)}.bar-box .bar.s3[data-v-3fde4700]{background:#5ecd80;background:linear-gradient(90deg,#5ecd80,#80cca5)}.bar-box .bar.s4[data-v-3fde4700]{background:#37a2f1;background:linear-gradient(90deg,#37a2f1,#6cd2ff)}.bar-box .bar span[data-v-3fde4700]{font-size:13px;color:#fff}.bar-box .bar span.name[data-v-3fde4700]{width:80%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}",""]),t.exports=o},836:function(t,e,r){"use strict";r.r(e);r(161);var o={props:{score:{type:Number,default:0},index:{type:Number,default:0},text:{type:String,default:""}},data:function(){return{}},computed:{width:function(){if(this.score<=0)return 25;var t=(this.score-0)/5.5*100;return t>25?t:25}},mounted:function(){}},n=(r(831),r(59)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"bar-box"},[r("div",{staticClass:"bar",class:t.index&&t.index<=3?"s"+t.index:"s4",style:"width:"+t.width+"%"},[r("span",{staticClass:"name"},[t._v("\n      "+t._s(t.index)+". "+t._s(t.text)+"\n    ")]),t._v(" "),r("span",{staticClass:"score"},[t._v("\n      "+t._s(t.score)+"\n    ")])])])}),[],!1,null,"3fde4700",null);e.default=component.exports},860:function(t,e,r){"use strict";r(830)},861:function(t,e,r){var o=r(31)(!1);o.push([t.i,'[data-v-5319417a] .slick-list{width:204px}.c-card[data-v-5319417a]{width:389px;margin-top:10px;overflow:hidden;border-radius:6px;min-width:350px}.c-card[data-v-5319417a],.c-card .top[data-v-5319417a]{background-color:#fff}.c-card .top[data-v-5319417a]{padding:20px 20px 10px}.c-card .top .t-box[data-v-5319417a]{display:flex;justify-content:space-between;align-items:center;margin-bottom:15px;flex-wrap:nowrap}.c-card .top .t-box .show[data-v-5319417a]{font-size:11px;color:#333;display:flex;flex-wrap:nowrap;background:#f3f3f3;border:1px solid #ccc;border-radius:10px;padding:2px 8px}.c-card .top .t-box .show text[data-v-5319417a]{display:inline-block;transform:translate(5px,-1.5px) scaleX(.5)}.c-card .bottom[data-v-5319417a]{display:flex;justify-content:space-between;align-items:center;padding:0 15px 10px 0}.c-card .bottom .stat[data-v-5319417a]{font-size:13px;margin-right:10px;color:#ff492c;margin-bottom:0;position:relative}.c-card .bottom .fire[data-v-5319417a]{position:absolute;left:-16px;top:-2px}.c-card .bottom .fire img[data-v-5319417a]{width:13px;height:18px}.c-card .bottom .people[data-v-5319417a]{padding:5px;display:flex;margin-left:5px;width:60%;overflow:hidden;max-width:60%;flex-shrink:0;transition:.5s ease;position:relative}.c-card .bottom .people[data-v-5319417a]:after{content:"";width:25px;height:30px;top:0;right:0;position:absolute;background:#fff;background:linear-gradient(270deg,#fff,hsla(0,0%,100%,0))}.c-card .bottom .people img[data-v-5319417a]{width:22.5px;height:22.5px;border:3px solid #fff;border-radius:50px;display:inline-block}.c-card .h2[data-v-5319417a]{font-size:16px;display:block}',""]),t.exports=o},897:function(t,e,r){"use strict";r.r(e);var o=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"fire"},[e("img",{attrs:{src:r(821),alt:""}})])}],n=(r(48),{props:{item:{type:Object,default:function(){return{}}},start:{type:Boolean,default:!1}},data:function(){return{userArray:[],swiperOption:{loop:!0,slidesPerView:1,speed:2e3,autoplay:!0,noSwiping:!0,autoplayDisableOnInteraction:!1,effect:"fade",fadeEffect:{crossFade:!0}}}},mounted:function(){this.userArray=this.array2double(this.item.USERARRAY)},methods:{array2double:function(t){var e=t.length,r=[];if(e)for(var o=e%8==0?e/8:Math.floor(e/8+1),i=0;i<o;i++){var n=t.slice(8*i,8*i+8);r.push(n)}return r}}}),d=(r(860),r(59)),component=Object(d.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"c-card"},[r("div",{staticClass:"top"},[r("div",{staticClass:"t-box"},[r("h2",{staticClass:"h2"},[t._v("\n        "+t._s(t.item.CATEGORY_NAME)+" 类热门厂商实时口碑\n      ")])]),t._v(" "),t._l(t.item.PRODUCTARRAY,(function(t,i){return r("BarZoom",{key:i,attrs:{score:t.avgNum,index:i+1,text:t.factory_short_name||t.factoryqcname}})}))],2),t._v(" "),r("div",{staticClass:"bottom"},[r("div",{staticClass:"people"},[r("div",{directives:[{name:"swiper",rawName:"v-swiper:mySwiper",value:t.swiperOption,expression:"swiperOption",arg:"mySwiper"}],staticClass:"swiper-wrap"},[r("div",{staticClass:"swiper-wrapper"},t._l(t.userArray,(function(e,o){return r("div",{key:o,staticClass:"swiper-slide"},t._l(e,(function(t){return r("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.headimages,expression:"v.headimages"}],key:t.id,attrs:{alt:""}})})),0)})),0)])]),t._v(" "),r("div",{staticClass:"stat"},[t._m(0),t._v("\n      "+t._s(t.item.SCORETOTALNUM)+" 人正在热评\n    ")])])])}),o,!1,null,"5319417a",null);e.default=component.exports;installComponents(component,{BarZoom:r(836).default})}}]);