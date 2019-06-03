import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

import bus from "./controllers/EventBus";

Vue.config.productionTip = false

new Vue({
  router,
  store,
  bus,
  render: h => h(App)
}).$mount('#app')
