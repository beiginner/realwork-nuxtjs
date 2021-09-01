import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _2ede3a60 = () => interopDefault(import('..\\pages\\layout' /* webpackChunkName: "" */))
const _4b2ee3f6 = () => interopDefault(import('..\\pages\\home' /* webpackChunkName: "" */))
const _72e17b03 = () => interopDefault(import('..\\pages\\login' /* webpackChunkName: "" */))
const _199596c3 = () => interopDefault(import('..\\pages\\profile' /* webpackChunkName: "" */))
const _bb33c92c = () => interopDefault(import('..\\pages\\setting' /* webpackChunkName: "" */))
const _467bedda = () => interopDefault(import('..\\pages\\editor' /* webpackChunkName: "" */))
const _005fda10 = () => interopDefault(import('..\\pages\\article' /* webpackChunkName: "" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _2ede3a60,
    children: [{
      path: "",
      component: _4b2ee3f6,
      name: "home"
    }, {
      path: "/login",
      component: _72e17b03,
      name: "login"
    }, {
      path: "/register",
      component: _72e17b03,
      name: "register"
    }, {
      path: "/profile/:username",
      component: _199596c3,
      name: "profile"
    }, {
      path: "/setting",
      component: _bb33c92c,
      name: "setting"
    }, {
      path: "/editor",
      component: _467bedda,
      name: "editor"
    }, {
      path: "/article/:slug",
      component: _005fda10,
      name: "article"
    }]
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
