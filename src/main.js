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


import VeeValidate from 'vee-validate'
import zhTW from 'vee-validate/dist/locale/zh_TW'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: 'zhTW'
})
Vue.use(VeeValidate, {
  events: 'input|blur', //這是為了讓使用者離開該欄位時觸發驗證
  i18n,
  dictionary: {
    zhTW
  }
})

Vue.config.productionTip = false


new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
