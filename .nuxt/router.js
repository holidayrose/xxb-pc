import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _86acd598 = () => interopDefault(import('..\\pages\\all\\index.vue' /* webpackChunkName: "pages/all/index" */))
const _93fbe2c4 = () => interopDefault(import('..\\pages\\cctv\\product_trial_info\\_id.vue' /* webpackChunkName: "pages/cctv/product_trial_info/_id" */))
const _947ce9d8 = () => interopDefault(import('..\\pages\\company\\rank\\_id.vue' /* webpackChunkName: "pages/company/rank/_id" */))
const _29a21246 = () => interopDefault(import('..\\pages\\product\\detail\\_id.vue' /* webpackChunkName: "pages/product/detail/_id" */))
const _57ddc862 = () => interopDefault(import('..\\pages\\product\\rank\\_id.vue' /* webpackChunkName: "pages/product/rank/_id" */))
const _9311c6c4 = () => interopDefault(import('..\\pages\\review\\detail\\_id.vue' /* webpackChunkName: "pages/review/detail/_id" */))
const _6c1fb2b7 = () => interopDefault(import('..\\pages\\case\\_id.vue' /* webpackChunkName: "pages/case/_id" */))
const _7a1e8a74 = () => interopDefault(import('..\\pages\\news\\_id.vue' /* webpackChunkName: "pages/news/_id" */))
const _2961b064 = () => interopDefault(import('..\\pages\\reputation\\_id.vue' /* webpackChunkName: "pages/reputation/_id" */))
const _3a83c9fe = () => interopDefault(import('..\\pages\\result\\_status.vue' /* webpackChunkName: "pages/result/_status" */))
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
    path: "/cctv/product_trial_info/:id?",
    component: _93fbe2c4,
    name: "cctv-product_trial_info-id"
  }, {
    path: "/company/rank/:id?",
    component: _947ce9d8,
    name: "company-rank-id"
  }, {
    path: "/product/detail/:id?",
    component: _29a21246,
    name: "product-detail-id"
  }, {
    path: "/product/rank/:id?",
    component: _57ddc862,
    name: "product-rank-id"
  }, {
    path: "/review/detail/:id?",
    component: _9311c6c4,
    name: "review-detail-id"
  }, {
    path: "/case/:id?",
    component: _6c1fb2b7,
    name: "case-id"
  }, {
    path: "/news/:id?",
    component: _7a1e8a74,
    name: "news-id"
  }, {
    path: "/reputation/:id?",
    component: _2961b064,
    name: "reputation-id"
  }, {
    path: "/result/:status?",
    component: _3a83c9fe,
    name: "result-status"
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
