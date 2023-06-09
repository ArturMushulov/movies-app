import Vue from 'vue'
import Vuex from 'vuex'

import movieStore from './modules/movies'
import loaderStore from './modules/loader'
import notificationStore from './modules/notification'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    movieStore,
    loaderStore,
    notificationStore
  }
})

export default store;