import Vue from 'vue'
import VueLazyLoad from 'vue-lazyload'

Vue.use(VueLazyLoad)
Vue.use(VueLazyLoad, {
  preLoad: 1, // 预加载的宽高比
  error: '~/static/images/error.png', // 图片加载失败时使用的图片源
  loading: '~/static/images/xxb_mark.png', // 图片加载的路径
  attempt: 1 // 尝试加载次数
})
