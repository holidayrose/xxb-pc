import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _86acd598 = () => interopDefault(import('..\\pages\\all\\index.vue' /* webpackChunkName: "pages/all/index" */))
const _ce52bfea = () => interopDefault(import('..\\pages\\index_repeat.vue' /* webpackChunkName: "pages/index_repeat" */))
const _93fbe2c4 = () => interopDefault(import('..\\pages\\cctv\\product_trial_info\\_id.vue' /* webpackChunkName: "pages/cctv/product_trial_info/_id" */))
const _0b876bc0 = () => interopDefault(import('..\\pages\\company\\_id.vue' /* webpackChunkName: "pages/company/_id" */))
const _8c7a97b8 = () => interopDefault(import('..\\pages\\newsCase\\_id.vue' /* webpackChunkName: "pages/newsCase/_id" */))
const _dc9188e4 = () => interopDefault(import('..\\pages\\product\\_id.vue' /* webpackChunkName: "pages/product/_id" */))
const _76202d86 = () => interopDefault(import('..\\pages\\productDetail\\_id.vue' /* webpackChunkName: "pages/productDetail/_id" */))
const _2961b064 = () => interopDefault(import('..\\pages\\reputation\\_id.vue' /* webpackChunkName: "pages/reputation/_id" */))
const _3a83c9fe = () => interopDefault(import('..\\pages\\result\\_status.vue' /* webpackChunkName: "pages/result/_status" */))
const _b04ee984 = () => interopDefault(import('..\\pages\\reviewDetail\\_id.vue' /* webpackChunkName: "pages/reviewDetail/_id" */))
const _559650ff = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _86acd598,
    name: "all"
  }, {
    path: "/index_repeat",
    component: _ce52bfea,
    name: "index_repeat"
  }, {
    path: "/cctv/product_trial_info/:id?",
    component: _93fbe2c4,
    name: "cctv-product_trial_info-id"
  }, {
    path: "/company/:id?",
    component: _0b876bc0,
    name: "company-id"
  }, {
    path: "/newsCase/:id?",
    component: _8c7a97b8,
    name: "newsCase-id"
  }, {
    path: "/product/:id?",
    component: _dc9188e4,
    name: "product-id"
  }, {
    path: "/productDetail/:id?",
    component: _76202d86,
    name: "productDetail-id"
  }, {
    path: "/reputation/:id?",
    component: _2961b064,
    name: "reputation-id"
  }, {
    path: "/result/:status?",
    component: _3a83c9fe,
    name: "result-status"
  }, {
    path: "/reviewDetail/:id?",
    component: _b04ee984,
    name: "reviewDetail-id"
  }, {
    path: "/",
    component: _559650ff,
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
