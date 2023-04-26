import Vue from 'vue'
import Vuex from 'vuex'

import movieStore from './modules/movies'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    movieStore
  }
})