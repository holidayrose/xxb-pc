(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{813:function(e,t,r){var content=r(836);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(33).default)("48817be2",content,!0,{sourceMap:!1})},835:function(e,t,r){"use strict";r(813)},836:function(e,t,r){var n=r(32)(!1);n.push([e.i,".bar-box[data-v-479569e8]{width:100%;height:27.5px;margin:10px auto}.bar-box .bar[data-v-479569e8]{height:27.5px;display:flex;justify-content:space-between;align-items:center;width:0;box-sizing:border-box;padding:0 10px;border-radius:50px;transition:width .8s ease-in-out}.bar-box .bar.s1[data-v-479569e8]{background:#f55a53;background:linear-gradient(90deg,#f55a53,#eb8a5d)}.bar-box .bar.s2[data-v-479569e8]{background:#f2a937;background:linear-gradient(90deg,#f2a937,#ebd458)}.bar-box .bar.s3[data-v-479569e8]{background:#5ecd80;background:linear-gradient(90deg,#5ecd80,#80cca5)}.bar-box .bar.s4[data-v-479569e8]{background:#37a2f1;background:linear-gradient(90deg,#37a2f1,#6cd2ff)}.bar-box .bar span[data-v-479569e8]{font-size:13px;color:#fff}.bar-box .bar span.name[data-v-479569e8]{width:80%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}",""]),e.exports=n},841:function(e,t,r){"use strict";r.r(t);r(117),r(45);var n={props:{score:{type:Number,default:0},index:{type:Number,default:0},text:{type:String,default:""}},data:function(){return{start:!1}},computed:{width:function(){if(this.score<=0)return 25;var e=(this.score-0)/5.5*100;return e>25?e:25}},mounted:function(){var e=this;setTimeout((function(){e.start=!0}),50)}},d=(r(835),r(62)),component=Object(d.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"bar-box"},[r("div",{staticClass:"bar",class:e.index&&e.index<=3?"s"+e.index:"s4",style:e.start?"width:"+e.width+"%":0},[r("span",{staticClass:"name"},[e._v("\n      "+e._s(e.index)+". "+e._s(e.text)+"\n    ")]),e._v(" "),r("span",{staticClass:"score"},[e._v("\n      "+e._s(e.score)+"\n    ")])])])}),[],!1,null,"479569e8",null);t.default=component.exports}}]);