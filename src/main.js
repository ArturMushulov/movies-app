import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import store from './store'
import "./plugins/bootstrap"


Vue.config.productionTip = false;
Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [{
    path: "/",
    name: "root",
    component: App
  }]
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')