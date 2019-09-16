import Vue from 'vue'
import VueRouter from 'vue-router'
import firebase from 'firebase'

import routes from './routes'
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyBGlPVHYlSUA8UojqHGgNZHGjyxnBZkAyE',
  authDomain: 'resume-parser-bdfec.firebaseapp.com',
  databaseURL: 'https://resume-parser-bdfec.firebaseio.com',
  projectId: 'resume-parser-bdfec',
  storageBucket: '',
  messagingSenderId: '381104369469',
  appId: '1:381104369469:web:10a3e11283567d98d21f54'
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)
Vue.use(VueRouter)

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation
 */

export default function (/* { store, ssrContext } */) {
  const Router = new VueRouter({
    scrollBehavior: () => ({ x: 0, y: 0 }),
    routes,

    // Leave these as is and change from quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    mode: 'history',
    base: process.env.VUE_ROUTER_BASE
  })

  return Router
}
