(window.webpackJsonp=window.webpackJsonp||[]).push([[20,13],{774:function(t,e,r){"use strict";r.r(e);r(161);var n={name:"StarZoom",props:{outWidth:{type:Number,default:function(){return 0}},outHeight:{type:Number,default:function(){return 0}},decimal:{type:Number,default:function(){return 0}}},computed:{innerWidth:function(){return this.decimal*this.outWidth}}},c=r(45),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"star-wrap"}},[r("div",{staticClass:"star-default",style:{width:t.outWidth+"px",height:t.outHeight+"px"}},[r("div",{staticClass:"star-real",style:{width:t.innerWidth+"px",height:t.outHeight+"px"}})])])}),[],!1,null,null,null);e.default=component.exports},831:function(t,e,r){"use strict";r.r(e);var n={components:{Star:r(774).default},props:{product:{type:Object,default:function(){return{}}},categoryName:{type:String,default:function(){return""}}},computed:{decimal:function(){return this.product.ztgsnum/5}}},c=r(45),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("a-card",{staticClass:"product-card"},[r("h3",{staticClass:"title"},[t._v("\n    "+t._s(t.product.product_name)+"\n  ")]),t._v(" "),r("div",{staticClass:"stars g-flex"},[r("Star",{attrs:{"out-width":100,"out-height":20,decimal:t.decimal}}),t._v(" "),r("span",{staticClass:"ant-rate-text"},[t._v(t._s(t.product.ztgsnum?t.product.ztgsnum:"暂无评")+"分")])],1),t._v(" "),r("div",{staticClass:"img-wrap"},[r("img",{attrs:{src:"http://xuanxingbao.com/images/xxb_mark.png",alt:t.product.factory_short_name+t.categoryName}})])])}),[],!1,null,null,null);e.default=component.exports}}]);