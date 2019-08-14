import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from './home/Home'
import { store } from './store'

Vue.use(VueRouter);

const routes = [
  {path: '/', component: Home}
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
