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

Vue.filter('amount', amount => `${~~(amount / 100)}.${amount % 100}`);
Vue.filter('simpleDate', date => new Date(date).toLocaleDateString('en-US'));
