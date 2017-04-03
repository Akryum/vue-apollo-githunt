import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Profile from './components/Profile.vue'

const routes = [
  { path: '/', component: Profile },
]

export default new VueRouter({
  mode: 'history',
  routes,
})
