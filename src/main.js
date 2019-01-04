import Vue from 'vue'
import VueRouter from 'vue-router'
import MintUI from 'mint-ui'
import App from './app'
import router from './router'


import './assets/css/reset.css'
import 'mint-ui/lib/style.css'

Vue.use(VueRouter)

Vue.use(MintUI)

new Vue({
  router,
  render: h => h(App)
}).$mount('#root')
