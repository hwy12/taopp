import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import Swiper from 'swiper'
import moment from 'moment'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  Swiper,
  moment,
  render: h => h(App)
}).$mount('#app')
