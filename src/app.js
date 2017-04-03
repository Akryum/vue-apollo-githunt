import Vue from 'vue'

import 'isomorphic-fetch'
import './style/index.css'

import { apolloClient } from './transport'

import VueApollo from 'vue-apollo'
Vue.use(VueApollo)

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
})

import router from './router'

import App from './App.vue'

/* eslint no-new:off */
new Vue({
  el: '#app',
  router,
  apolloProvider,
  ...App,
})
