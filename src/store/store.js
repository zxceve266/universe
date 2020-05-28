import Vue from 'vue'
import Vuex from 'vuex'
import products from './modules/products'
import Loading from './modules/isLoading'
import cart from './modules/cart'
import Authentication from './modules/Authentication'
import { vuexfireMutations } from 'vuexfire'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: vuexfireMutations,
  actions: {
  },
  modules: {
    products,
    Loading,
    cart,
    Authentication,
  }
})
