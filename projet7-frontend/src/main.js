import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import VueRouter from 'vue-router'
import Routes from './router/Routes'
import store from './store'


Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(Vuex)

const router = new VueRouter({
  store,
  routes: Routes,
  mode: 'history'
})

new Vue({
  render: h => h(App),
  store,
  router: router,
}).$mount('#app')
