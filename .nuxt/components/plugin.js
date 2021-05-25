import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  AutoPlay: () => import('../..\\components\\AutoPlay.vue' /* webpackChunkName: "components/auto-play" */).then(c => wrapFunctional(c.default || c)),
  BarScore: () => import('../..\\components\\BarScore.vue' /* webpackChunkName: "components/bar-score" */).then(c => wrapFunctional(c.default || c)),
  BarZoom: () => import('../..\\components\\BarZoom.vue' /* webpackChunkName: "components/bar-zoom" */).then(c => wrapFunctional(c.default || c)),
  BarZoomSmall: () => import('../..\\components\\BarZoomSmall.vue' /* webpackChunkName: "components/bar-zoom-small" */).then(c => wrapFunctional(c.default || c)),
  CategoryRank: () => import('../..\\components\\CategoryRank.vue' /* webpackChunkName: "components/category-rank" */).then(c => wrapFunctional(c.default || c)),
  Footer: () => import('../..\\components\\Footer.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c)),
  Header: () => import('../..\\components\\Header.vue' /* webpackChunkName: "components/header" */).then(c => wrapFunctional(c.default || c)),
  Logo: () => import('../..\\components\\Logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c)),
  ProductCard: () => import('../..\\components\\ProductCard.vue' /* webpackChunkName: "components/product-card" */).then(c => wrapFunctional(c.default || c)),
  ProductOrder: () => import('../..\\components\\ProductOrder.vue' /* webpackChunkName: "components/product-order" */).then(c => wrapFunctional(c.default || c)),
  Review: () => import('../..\\components\\Review.vue' /* webpackChunkName: "components/review" */).then(c => wrapFunctional(c.default || c)),
  SearchBox: () => import('../..\\components\\SearchBox.vue' /* webpackChunkName: "components/search-box" */).then(c => wrapFunctional(c.default || c)),
  Slider: () => import('../..\\components\\Slider.vue' /* webpackChunkName: "components/slider" */).then(c => wrapFunctional(c.default || c)),
  HasNoData: () => import('../..\\components\\hasNoData\\noData.vue' /* webpackChunkName: "components/has-no-data" */).then(c => wrapFunctional(c.default || c)),
  IndexCase: () => import('../..\\components\\index\\case.vue' /* webpackChunkName: "components/index-case" */).then(c => wrapFunctional(c.default || c)),
  IndexNews: () => import('../..\\components\\index\\news.vue' /* webpackChunkName: "components/index-news" */).then(c => wrapFunctional(c.default || c)),
  HeaderMHeader: () => import('../..\\components\\header\\mHeader.vue' /* webpackChunkName: "components/header-m-header" */).then(c => wrapFunctional(c.default || c)),
  HeaderPHeader: () => import('../..\\components\\header\\pHeader.vue' /* webpackChunkName: "components/header-p-header" */).then(c => wrapFunctional(c.default || c)),
  PopBanner: () => import('../..\\components\\pop\\banner.vue' /* webpackChunkName: "components/pop-banner" */).then(c => wrapFunctional(c.default || c)),
  PopModel: () => import('../..\\components\\pop\\model.vue' /* webpackChunkName: "components/pop-model" */).then(c => wrapFunctional(c.default || c)),
  ProductDetailContact: () => import('../..\\components\\productDetail\\contact.vue' /* webpackChunkName: "components/product-detail-contact" */).then(c => wrapFunctional(c.default || c)),
  ProductDetailFeature: () => import('../..\\components\\productDetail\\feature.vue' /* webpackChunkName: "components/product-detail-feature" */).then(c => wrapFunctional(c.default || c)),
  ProductDetailPrice: () => import('../..\\components\\productDetail\\price.vue' /* webpackChunkName: "components/product-detail-price" */).then(c => wrapFunctional(c.default || c)),
  ProductDetailReviews: () => import('../..\\components\\productDetail\\reviews.vue' /* webpackChunkName: "components/product-detail-reviews" */).then(c => wrapFunctional(c.default || c)),
  ProductDetailUserRate: () => import('../..\\components\\productDetail\\userRate.vue' /* webpackChunkName: "components/product-detail-user-rate" */).then(c => wrapFunctional(c.default || c)),
  RankList: () => import('../..\\components\\rank\\list.vue' /* webpackChunkName: "components/rank-list" */).then(c => wrapFunctional(c.default || c)),
  SliderNavBarItem: () => import('../..\\components\\sliderNav\\sliderNavBarItem.vue' /* webpackChunkName: "components/slider-nav-bar-item" */).then(c => wrapFunctional(c.default || c)),
  SwiperAdSwiper: () => import('../..\\components\\swiper\\adSwiper.vue' /* webpackChunkName: "components/swiper-ad-swiper" */).then(c => wrapFunctional(c.default || c)),
  SwiperReviewSwiper: () => import('../..\\components\\swiper\\reviewSwiper.vue' /* webpackChunkName: "components/swiper-review-swiper" */).then(c => wrapFunctional(c.default || c)),
  CommonBreadCrumb: () => import('../..\\components\\common\\breadCrumb\\index.vue' /* webpackChunkName: "components/common-bread-crumb" */).then(c => wrapFunctional(c.default || c)),
  CommonStarZoom: () => import('../..\\components\\common\\starComp\\StarZoom.vue' /* webpackChunkName: "components/common-star-zoom" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
