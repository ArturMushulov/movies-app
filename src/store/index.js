import Vue from 'vue'
import Vuex from 'vuex'

import movieStore from './modules/movies'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    movieStore
  }
})

store.dispatch("initMoviesStore");

export default store;