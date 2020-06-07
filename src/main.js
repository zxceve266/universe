import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'

import VueAwesomeSwiper from 'vue-awesome-swiper';//swiper導入
import 'swiper/css/swiper.css';
Vue.use(VueAwesomeSwiper);

import Loading from 'vue-loading-overlay'//Loading 導入
import 'vue-loading-overlay/dist/vue-loading.css'
Vue.component('Loading',Loading)

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'//Bootstrap導入

import VueSweetalert2 from 'vue-sweetalert2';//sweetalert2導入
import 'sweetalert2/dist/sweetalert2.min.css';
Vue.use(VueSweetalert2)

import WOW from 'wow.js'
const wow = new WOW({
  boxClass: 'wow',
  animateClass: 'animated',
  offset: 0,
  live: true
});

wow.init();

Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
