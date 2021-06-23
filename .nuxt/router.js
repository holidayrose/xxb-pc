import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _61e9c683 = () => interopDefault(import('..\\pages\\all\\index.vue' /* webpackChunkName: "pages/all/index" */))
const _04893622 = () => interopDefault(import('..\\pages\\cctv\\product_trial_info\\_id.vue' /* webpackChunkName: "pages/cctv/product_trial_info/_id" */))
const _6180854f = () => interopDefault(import('..\\pages\\company\\_id.vue' /* webpackChunkName: "pages/company/_id" */))
const _22eccc75 = () => interopDefault(import('..\\pages\\newsCase\\_id.vue' /* webpackChunkName: "pages/newsCase/_id" */))
const _309f55c6 = () => interopDefault(import('..\\pages\\product\\_id.vue' /* webpackChunkName: "pages/product/_id" */))
const _048d5b8c = () => interopDefault(import('..\\pages\\productDetail\\_id.vue' /* webpackChunkName: "pages/productDetail/_id" */))
const _9b572042 = () => interopDefault(import('..\\pages\\reputation\\_id.vue' /* webpackChunkName: "pages/reputation/_id" */))
const _ac7939dc = () => interopDefault(import('..\\pages\\result\\_status.vue' /* webpackChunkName: "pages/result/_status" */))
const _7aa7d9e2 = () => interopDefault(import('..\\pages\\reviewDetail\\_id.vue' /* webpackChunkName: "pages/reviewDetail/_id" */))
const _00224a50 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/all",
    component: _61e9c683,
    name: "all"
  }, {
    path: "/cctv/product_trial_info/:id?",
    component: _04893622,
    name: "cctv-product_trial_info-id"
  }, {
    path: "/company/:id?",
    component: _6180854f,
    name: "company-id"
  }, {
    path: "/newsCase/:id?",
    component: _22eccc75,
    name: "newsCase-id"
  }, {
    path: "/product/:id?",
    component: _309f55c6,
    name: "product-id"
  }, {
    path: "/productDetail/:id?",
    component: _048d5b8c,
    name: "productDetail-id"
  }, {
    path: "/reputation/:id?",
    component: _9b572042,
    name: "reputation-id"
  }, {
    path: "/result/:status?",
    component: _ac7939dc,
    name: "result-status"
  }, {
    path: "/reviewDetail/:id?",
    component: _7aa7d9e2,
    name: "reviewDetail-id"
  }, {
    path: "/",
    component: _00224a50,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
