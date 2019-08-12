import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from './home/Home'

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
  render: h => h(App)
});
