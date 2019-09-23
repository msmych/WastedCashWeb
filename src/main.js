import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import {store} from './js/store'
import {routes} from './js/routes'

Vue.use(VueRouter);

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
